import type {
    IGeosearchConfig,
    INameResponse,
    IRawNameResult,
    IVisualResult,
    LocateResponseList,
    VisualResultList
} from '../definitions';
import to from 'await-to-js';
import axios from 'redaxios';

/**
 * Houses all the data for an active geosearch query
 */
export class QueryResult {
    /**
     * Collection of goodness
     */
    config: IGeosearchConfig;

    /**
     * What the user typed
     */
    query: string;

    /**
     * Error messages
     */
    failedServs: string[] = [];

    /**
     * Results list
     */
    results: VisualResultList = [];

    constructor(config: IGeosearchConfig, query: string = '') {
        this.query = query;
        this.config = config;
    }
}

export async function runQuery(config: IGeosearchConfig, query: string): Promise<QueryResult> {
    let queryPayload: QueryResult;

    const latLngRegDD =
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/;
    const ntsReg = /^\d{2,3}[A-P]/;
    const fsaReg = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;

    if (latLngRegDD.test(query) && !config.disabledSearchTypes.includes('LAT/LNG')) {
        // TODO this works but i'm at a loss why the last character is getting sliced off
        //      investigate after everything else is working
        const queryStr = query.slice(0, -1);
        // Lat/Long search in decimal degrees format
        queryPayload = new QueryResult(config, queryStr);

        await runLatLongQuery(queryPayload);
    } else if (fsaReg.test(query) && !config.disabledSearchTypes.includes('FSA')) {
        // FSA search (postal area code)

        const cleanedInput = query.substring(0, 3).toUpperCase();
        queryPayload = new QueryResult(config, cleanedInput);
        await runFSAQuery(queryPayload);
    } else if (ntsReg.test(query) && !config.disabledSearchTypes.includes('NTS')) {
        // NTS search

        // NOTE: this padding was in the original code, but written in such a way that it was never used.
        //       it doesn't seem to care? E.g. 064D and 64D both hit the NTS entry.
        // front pad 0 if NTS starts with two digits
        // query = isNaN(parseInt(query[2])) ? '0' + query : query;

        const cleanedInput = query.substring(0, 6).toUpperCase();
        queryPayload = new QueryResult(config, cleanedInput);
        await runNTSQuery(queryPayload);
    } else {
        const cleanedInput = encodeURIComponent(query.trim());
        queryPayload = new QueryResult(config, cleanedInput);
        await runTextQuery(queryPayload);
    }

    return queryPayload;
}

/**
 * Runs a url that expects a JSON return value. Returns the result when it arrives
 * @param url
 * @returns
 */
export const jsonRequest = async (url: string): Promise<any> => {
    const [rErr, rRes] = await to(axios.get(url, { params: { f: 'json' } }));

    if (rErr) {
        return Promise.reject('Could not load results from remote service.');
    } else {
        return rRes.data;
    }
};

/**
 * Makes a bbox around a point based lon lat
 *
 * @param TODO
 * @param expand factor (in degrees) to push out each side
 * @returns four number bbox array
 */
const fakeBBox = (lon: number, lat: number, expand: number): Array<number> => [
    lon + expand,
    lat - expand,
    lon - expand,
    lat + expand
];

/**
 * Generate a search url.
 * Lat / Lon params are ignored if useLocate is true
 *
 * @param useLocate if true, uses the GeoLocation service (street addresses, FSA, NTS). Otherwise uses the GeoName service (named locations, default)
 * @param lat if provided, does a search based on co-ords instead of name.
 * @param lon if provided, does a search based on co-ords instead of name.
 * @returns the url
 */
const getUrl = (queryResult: QueryResult, useLocate?: boolean, lat?: number, lon?: number): string => {
    let url = '';
    const config = queryResult.config;
    if (useLocate) {
        // URL for FSA and NFA search
        url = config.geoLocateUrl + '?q=' + queryResult.query;
    } else {
        if (lat && lon) {
            // lat long URL
            url = `${config.geoNameUrl}?lat=${lat}&lon=${lon}&num=${config.maxResults}`;
        } else {
            // plain name based search
            url = `${config.geoNameUrl}?q=${queryResult.query}&num=${config.maxResults}`;
        }

        // filter params for geoname service
        if (config.categories.length > 0) {
            url += `&concise=${config.categories.join(',')}`;
        }
        if (config.officialOnly) {
            url += '&category=O';
        }
    }

    return url;
};

/**
 * Converts results from the name service to our standardized format.
 * Will also filter out any concise codes we dont want.
 */
const normalizeNameItems = (config: IGeosearchConfig, items: INameResponse[]): VisualResultList => {
    return items
        .filter(nr => config.types.validTypes[nr.concise.code])
        .map(nr => ({
            name: nr.name,
            flav: 'nme',
            bbox: nr.bbox,
            type: config.types.allTypes[nr.concise.code],
            position: [nr.longitude, nr.latitude],
            location: {
                city: nr.location,
                province: config.provinces.codeToProvince(parseInt(nr.province.code))
            },
            order:
                config.sortOrder.indexOf(nr.concise.code) >= 0
                    ? config.sortOrder.indexOf(nr.concise.code)
                    : config.sortOrder.length
        }));
};

/**
 * Runs the query parameters against the location service (addresses, FSA, NTS), resolves with results
 * @returns
 */
const runLocationQuery = async (queryResult: QueryResult): Promise<LocateResponseList> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryResult, true)) as Promise<LocateResponseList>);

    // TODO hunt down all the other 'geolocation' error catchers and remove. Having a different console for the same service is redundant
    if (rErr) {
        console.error('Geolocation service failed');
        queryResult.failedServs.push('geolocation');
        return [];
    } else {
        return rRes;
    }
};

/**
 * Hits the GeoName service using the search text and stores the results
 */
const runGeoNameTextQuery = async (queryResult: QueryResult): Promise<void> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryResult, false)) as Promise<IRawNameResult>);

    let payload: Array<INameResponse>;
    if (rErr) {
        console.error('GeoName service targeting Name failed');
        queryResult.failedServs.push('geoname');
        payload = [];
    } else {
        payload = rRes.items;
    }

    queryResult.results = queryResult.results.concat(normalizeNameItems(queryResult.config, payload));
};

/**
 * Hits the GeoName service at a specific location and stores the results
 */
const runGeoNameLocationQuery = async (queryResult: QueryResult, lat: number, lon: number): Promise<void> => {
    const [rErr, rRes] = await to(jsonRequest(getUrl(queryResult, false, lat, lon)) as Promise<IRawNameResult>);

    let payload: Array<INameResponse>;
    if (rErr) {
        console.error('GeoName service targeting Lat Lon failed');
        queryResult.failedServs.push('geoname');
        payload = [];
    } else {
        payload = rRes.items;
    }

    queryResult.results = queryResult.results.concat(normalizeNameItems(queryResult.config, payload));
};

/**
 * Runs a search where the input is suspected to be a Latitude Longitude entry
 */
const runLatLongQuery = async (queryResult: QueryResult): Promise<void> => {
    // create a result for the Lat/Lon itself
    // run a search at that location against the name service.

    // remove extra spaces and delimiters (the filter). convert string numbers to floaty numbers
    // this will be [Latitude, Longitude], which is [y, x] so be careful!
    const coords = queryResult.query
        .split(/[\s|,|;|]/)
        .filter(n => !isNaN(n as any) && n !== '')
        .map(n => parseFloat(n));

    const lat = coords[0];
    const lon = coords[1];

    // TODO: check and convert DMS format if applicable
    // NOTE: this todo has been around since R4 was made. There is fancier code lurking in Ramp2
    //       codebase that could be stolen if this ever needs revisiting.
    //       search for  `class LatLongQuery extends Query`

    const fancyResult: IVisualResult = {
        name: `${lat},${lon}`,
        flav: 'llg',
        location: {},
        type: 'Latitude/Longitude',
        position: [lon, lat],
        bbox: fakeBBox(lon, lat, 0.015),
        order: -1
    };

    await runGeoNameLocationQuery(queryResult, lat, lon);

    queryResult.results.push(fancyResult);
};

/**
 * Runs a search where the input is suspected to be an FSA
 */
const runFSAQuery = async (queryResult: QueryResult): Promise<void> => {
    // run a search against the location service.
    // if we have a result, process it

    const config = queryResult.config;

    const rawLocationResults = await runLocationQuery(queryResult);

    if (rawLocationResults.length) {
        const fsaNugget = rawLocationResults[0];
        const coord = fsaNugget.geometry.coordinates;
        const lat = coord[1];
        const lon = coord[0];

        const fancyResult: IVisualResult = {
            name: queryResult.query,
            flav: 'fsa',
            bbox: fakeBBox(lon, lat, 0.03),
            type: config.types.allTypes.FSA,
            position: [lon, lat],
            location: {
                province: config.provinces.fsaToProvince(queryResult.query)
            },
            order: -1
        };

        queryResult.results.push(fancyResult);
    }
};

/**
 * National Topographic System (NTS)
 *
 * The following definitions have the form "name (value constraints) - description"
 *
 * Sheet (two or three digits)      - aka "Map Numbers" are blocks of approximately 4,915,200 hectares.
 * Map Units Subdivision ([A-P])    - each sheet is subdivided further into 16 blocks, approximately 307,200 hectares
 * Map Sheet Unit ([1-16])          - each map unit is subdivided further into 16 blocks, approximately 19,200 hectares
 * Blocks ([A-L])                   - each map sheet unit is subdivided further into 12 blocks, approximately 1600 hectares
 * Units ([1-100]*)                 - each block is finally divided into 100 units, approximately 64 hectares
 *
 * Two subsets of the complete NTS format is supported:
 *     - Sheet and Map Unit Subdivision
 *     - Sheet, Map Unit Subdivision, and Map Sheet Unit
 *
 * Note that "Blocks" and "Units" are currently not supported on geogratis and are ignored on the query.
 */

/**
 * Runs a search where the input is suspected to be an NTS code
 */
const runNTSQuery = async (queryResult: QueryResult): Promise<void> => {
    // run a search against the location service.
    // if we have a result, process it

    const config = queryResult.config;

    const rawLocationResults = await runLocationQuery(queryResult);

    if (rawLocationResults.length) {
        // NOTE original code had plumbing for mulitple hits, but only the first was ever used.
        //      unsure what changed, or what the previous behavior was (if anything)
        const ntsNugget = rawLocationResults[0];

        const title = ntsNugget.title.split(' ');
        const name = title.shift() || ''; // 064D or 064D06
        const location = title.join(' '); // "NUMABIN BAY"

        const coord = ntsNugget.geometry.coordinates;
        const lat = coord[1];
        const lon = coord[0];

        const fancyResult: IVisualResult = {
            name,
            flav: 'nts',
            bbox: ntsNugget.bbox ?? fakeBBox(lon, lat, 0.03),
            type: config.types.allTypes.NTS, // "National Topographic System"
            position: [lon, lat],
            location: {
                city: location
            },
            order: -1
        };

        queryResult.results.push(fancyResult);
    }
};

/**
 * This is the default "search some text" algo. Used when a fancy case is not detected (no LatLon, FSA, NTS)
 */
const runTextQuery = async (queryResult: QueryResult): Promise<void> => {
    // run a name search against the name service.
    // run an address search against the location service, if enabled

    const config = queryResult.config;

    await runGeoNameTextQuery(queryResult);

    if (config.categories.length === 0 || config.categories.includes('ADDR')) {
        // address results are allowed

        const rawAddressResults = await runLocationQuery(queryResult);

        const addrSortIdx = config.sortOrder.indexOf('ADDR');
        const addrSortOrder = addrSortIdx >= 0 ? addrSortIdx : config.sortOrder.length;

        // convert to universal form
        const finalAddressResults: VisualResultList = rawAddressResults
            .filter(rar => rar.type?.includes('Street'))
            .map(address => {
                const [name, city, province] = address.title.split(', ');

                const coord = address.geometry.coordinates;
                const lat = coord[1];
                const lon = coord[0];

                return {
                    name,
                    flav: 'add',
                    bbox: fakeBBox(lon, lat, 0.002),
                    type: config.types.allTypes.ADDRESS,
                    position: [lon, lat],
                    location: {
                        city: city.split(' Of ').pop(), // prevents redundant label i.e. 'City Of Kingston'
                        province: config.provinces.nameToProvince(province)
                    },
                    order: addrSortOrder
                };
            });

        queryResult.results = queryResult.results.concat(finalAddressResults);
    }
};
