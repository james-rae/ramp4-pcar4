import type {
    AddressResultList,
    IAddressResult,
    IFSAResult,
    IGeosearchConfig,
    INameResponse,
    INTSResult,
    IRawNameResult,
    IVisualResult,
    LocateResponseList,
    NameResultList,
    NTSResultList,
    VisualResultList
} from '../definitions';
import to from 'await-to-js';
import axios from 'redaxios';

export function make(config: IGeosearchConfig, query: string): Query {
    const latLngRegDD =
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)(\s*[,|;\s]\s*)[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)[*]$/;
    const ntsReg = /^\d{2,3}[A-P]/;
    const fsaReg = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]/;
    if (latLngRegDD.test(query) && !config.disabledSearchTypes.includes('LAT/LNG')) {
        const queryStr = query.slice(0, -1);
        // Lat/Long search in decimal degrees format
        return new LatLongQuery(config, queryStr);
    } else if (fsaReg.test(query) && !config.disabledSearchTypes.includes('FSA')) {
        // FSA search (postal area code)
        return new FSAQuery(config, query);
    } else if (ntsReg.test(query) && !config.disabledSearchTypes.includes('NTS')) {
        // NTS search
        return new NTSQuery(config, query.substring(0, 6).toUpperCase());
    } else {
        // Address search (default)
        return new AddressQuery(config, query);
    }
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

export class Query {
    config: IGeosearchConfig;

    /**
     * What the user typed
     */
    query: string | undefined;

    /**
     * Error messages
     */
    failedServs: string[] = [];

    /**
     * This appears to be results from geonames.  I don't know why its typed to include address results. Appears those dont get added
     */
    results: VisualResultList = [];

    /**
     * A promise that resolves when this object is done searching.
     */
    onComplete: Promise<Query>;
    latLongResult: IVisualResult | undefined; // TODO nuke this if possible

    /**
     * This appears to be special / non-geonames results. Generally a single item for FSA/NTS/LatLon, or array of address matches.
     */
    featureResults: VisualResultList = [];
    resultType: string = 'geoname'; // TODO see if this matters?

    constructor(config: IGeosearchConfig, query?: string) {
        // note this gets overrided by subclasses. set here to appease typescript.
        this.onComplete = Promise.resolve(this);
        this.query = query;
        this.config = config;
    }

    /**
     * Runs a geoname search (named locations) based on query properties.
     * @returns
     */
    async gnSearch(): Promise<VisualResultList> {
        const [rErr, rRes] = await to(jsonRequest(this.getUrl()) as Promise<IRawNameResult>);

        let payload: Array<INameResponse>;
        if (rErr) {
            console.error('Geoname service failed');
            this.failedServs.push('geoname');
            payload = [];
        } else {
            payload = rRes.items;
        }

        return this.normalizeNameItems(payload);
    }

    /**
     * Generate a search url.
     * Lat / Lon params are ignored if useLocate is true
     *
     * @param useLocate if true, uses the GeoLocation service (street addresses, FSA, NTS). Otherwise uses the GeoName service (named locations, default)
     * @param lat if provided, does a search based on co-ords instead of name.
     * @param lon if provided, does a search based on co-ords instead of name.
     * @returns the url
     */
    private getUrl(useLocate?: boolean, lat?: number, lon?: number): string {
        let url = '';
        if (useLocate) {
            // URL for FSA and NFA search
            url = this.config.geoLocateUrl + '?q=' + this.query;
        } else {
            if (lat && lon) {
                // lat long URL
                url = `${this.config.geoNameUrl}?lat=${lat}&lon=${lon}&num=${this.config.maxResults}`;
            } else {
                // plain name based search
                url = `${this.config.geoNameUrl}?q=${this.query}&num=${this.config.maxResults}`;
            }

            // filter params for geoname service
            if (this.config.categories.length > 0) {
                url += `&concise=${this.config.categories.join(',')}`;
            }
            if (this.config.officialOnly) {
                url += '&category=O';
            }
        }

        return url;
    }

    /**
     * Takes result from geonames service and tranforms into our results object format
     * @param items
     * @returns
     */
    normalizeNameItems(items: INameResponse[]): VisualResultList {
        return items
            .filter(nr => this.config.types.validTypes[nr.concise.code])
            .map(nr => ({
                name: nr.name,
                flav: 'nme',
                bbox: nr.bbox,
                type: this.config.types.allTypes[nr.concise.code],
                position: [nr.longitude, nr.latitude],
                location: {
                    city: nr.location,
                    latitude: nr.latitude,
                    longitude: nr.longitude,
                    province: this.config.provinces.list[nr.province.code]
                },
                order:
                    this.config.sortOrder.indexOf(nr.concise.code) >= 0
                        ? this.config.sortOrder.indexOf(nr.concise.code)
                        : this.config.sortOrder.length
            }));
    }

    /**
     * Runs the query parameters against the location service (addresses, FSA, NTS), resolves with results
     * @returns
     */
    locateByQuery(): Promise<LocateResponseList> {
        return <Promise<LocateResponseList>>jsonRequest(this.getUrl(true));
    }

    /**
     * Hits the geonames (named locations) service for items at the given lat/lon. All other query params are ignored.
     */
    nameByLatLon(lat: number, lon: number): Promise<NameResultList> {
        return (<Promise<IRawNameResult>>jsonRequest(this.getUrl(false, lat, lon)))
            .then(r => {
                return this.normalizeNameItems(r.items);
            })
            .catch(() => {
                console.error('LatLon service failed');
                this.failedServs.push('geoname');
                return this.normalizeNameItems([]);
            });
    }
}

export class LatLongQuery extends Query {
    constructor(config: IGeosearchConfig, query: string) {
        super(config, query);
        this.resultType = 'latlong';

        // remove extra spaces and delimiters (the filter). convert string numbers to floaty numbers
        const filteredQuery = query
            .split(/[\s|,|;|]/)
            .filter(n => !isNaN(n as any) && n !== '')
            .map(n => parseFloat(n));
        const coords: number[] = filteredQuery;
        // TODO: check and convert DMS format if applicable

        // apply buffer to create bbox from point coordinates
        const buff = 0.015;
        const boundingBox = [coords[1] - buff, coords[0] - buff, coords[1] + buff, coords[0] + buff];
        // prep the lat/long result that needs to be generated along with name based results
        this.latLongResult = {
            name: `${coords[0]},${coords[1]}`,
            flav: 'llg',
            location: {
                latitude: coords[0],
                longitude: coords[1]
            },
            type: 'Latitude/Longitude',
            position: [coords[1], coords[0]],
            bbox: boundingBox,
            order: -1
        };

        this.onComplete = new Promise((resolve, reject) => {
            this.nameByLatLon(coords[0], coords[1]).then((r: any) => {
                if (r) {
                    this.results = r;
                    resolve(this);
                } else {
                    reject('Given lat lon coordinates cannot be found');
                }
            });
        });
    }
}

export class FSAQuery extends Query {
    constructor(config: IGeosearchConfig, query: string) {
        // extract the first three characters to conduct FSA search
        query = query.substring(0, 3).toUpperCase();
        super(config, query);
        this.resultType = 'fsa';

        this.onComplete = new Promise(resolve => {
            this.formatLocationResult().then(fLR => {
                if (fLR) {
                    this.featureResults.push(fLR);

                    // TODO same, this query seems really strange. "Give me geonames at the very centroid of a giant oddly shaped area"
                    this.nameByLatLon(fLR.LatLon.lat, fLR.LatLon.lon).then((r: any) => {
                        this.results = r;
                        resolve(this);
                    });
                } else {
                    console.log('FSA code given cannot be found.');
                    resolve(this);
                }
            });
        });
    }

    formatLocationResult(): Promise<IFSAResult | undefined> {
        return this.locateByQuery()
            .then(locateResponseList => {
                // query check added since it can be null but will never be in this case (make TS happy)
                if (locateResponseList.length === 1 && this.query) {
                    const provList = this.config.provinces.fsaToProvinces(this.query);
                    return <IFSAResult>{
                        fsa: this.query,
                        code: 'FSA',
                        desc: this.config.types.allTypes.FSA,
                        province: Object.keys(provList)
                            .map(i => provList[i])
                            .join(','),
                        _provinces: provList,
                        LatLon: {
                            lat: locateResponseList[0].geometry.coordinates[1],
                            lon: locateResponseList[0].geometry.coordinates[0]
                        }
                    };
                }
            })
            .catch(() => {
                console.error('FSA service failed');
                this.failedServs.push('geolocation');
                return undefined;
            });
    }
}

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
export class NTSQuery extends Query {
    unitName: string;
    unit!: INTSResult;
    // mapSheets: NTSResultList = [];

    constructor(config: IGeosearchConfig, query: string) {
        super(config, query);
        this.resultType = 'nts';

        // front pad 0 if NTS starts with two digits
        query = isNaN(parseInt(query[2])) ? '0' + query : query;
        this.unitName = query;

        // Setps:
        // Hits the location service.
        // If it finds an NTS, adds that to featureResults
        // Then calls a place-names search targeting the lat/lon on the NTS result.  Puts this on .results. what is difference??
        //      Given how large these are, not sure how sensible that is.
        //      "Here are some things in the very middle of the giant square."
        this.onComplete = new Promise(resolve => {
            this.locateByQuery()
                .then(lr => {
                    // query check added since it can be null but will never be in this case (make TS happy)
                    if (lr.length > 0 && this.query) {
                        const allSheets = this.locateToResult(lr);
                        this.unit = allSheets[0];
                        //   this.mapSheets = allSheets; // TODO what is this??

                        this.featureResults.push(this.unit);

                        this.nameByLatLon(this.unit.LatLon.lat, this.unit.LatLon.lon).then((r: any) => {
                            this.results = r;
                            resolve(this);
                        });
                    } else {
                        console.log('Given NTS code not found');
                        resolve(this);
                    }
                })
                .catch(() => {
                    console.error('NTS service failed');
                    this.failedServs.push('geolocation');
                    resolve(this);
                });
        });
    }

    /**
     * Formats a location result into an NTS result
     */
    locateToResult(lrl: LocateResponseList): NTSResultList {
        const results = lrl.map(ls => {
            const title = ls.title.split(' ');
            return <INTSResult>{
                nts: title.shift() || '', // 064D or 064D06
                location: title.join(' '), // "NUMABIN BAY"
                code: 'NTS', // "NTS"
                desc: this.config.types.allTypes.NTS, // "National Topographic System"
                LatLon: {
                    lat: ls.geometry.coordinates[1],
                    lon: ls.geometry.coordinates[0]
                },
                bbox: <number[]>ls.bbox
            };
        });
        return results;
    }

    equals(otherQ: NTSQuery): boolean {
        return this.unitName === otherQ.unitName;
    }
}

/**
 * This is the "default search". As in the input did not match a regex for latlon, fsa, or nts
 * Calling it address is lies since it handles anything with a name
 */
export class AddressQuery extends Query {
    constructor(config: IGeosearchConfig, query: string) {
        query = encodeURIComponent(query.trim());
        super(config, query);
        this.resultType = 'address';

        // Steps:
        // 1. Run the geolocation search for addresses. Store on Feature results
        // 2. Run the geonames search. Store results on results
        this.onComplete = new Promise(resolve => {
            this.locateByQuery()
                .then(lr => {
                    this.featureResults = this.locateToResult(lr);
                    this.gnSearch().then(r => {
                        this.results = r;
                        resolve(this);
                    });
                })
                .catch(() => {
                    this.failedServs.push('geolocation');
                    console.error('Address service failed');
                    this.gnSearch().then(r => {
                        this.results = r;
                        resolve(this);
                    });
                });
        });
    }

    /**
     * Formats a location result into an address result
     */
    locateToResult(lrl: LocateResponseList): AddressResultList {
        if (this.config.categories.length > 0 && !this.config.categories.includes('ADDR')) {
            return [];
        }
        const results = lrl
            .filter(lr => lr.type?.includes('Street'))
            .map(ls => {
                const [name, city, province] = ls.title.split(', ');
                return <IAddressResult>{
                    name: name,
                    city: city.split(' Of ').pop(), // prevents redundant label i.e. 'City Of Kingston'
                    province: province,
                    desc: this.config.types.allTypes.ADDRESS,
                    LatLon: {
                        lat: ls.geometry.coordinates[1],
                        lon: ls.geometry.coordinates[0]
                    }
                };
            });
        return results;
    }
}
