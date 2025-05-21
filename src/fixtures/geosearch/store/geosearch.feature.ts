/**
 * @namespace geoSearch
 * @description A feature that provides geo location search
 */
import Provinces from './provinces';
import Types from './types';
import * as GeoSearchQuery from './query';
import type { IGeosearchConfig, IProvinceInfo, IVisualResult } from '../definitions';
import { FSATOKEN } from '../definitions';
import type { Query } from './query';

// geosearch query services
// note "geolocation" is a service for looking up locations in canada. It is not a geolocator for the browser's location.
const GEO_LOCATE_URL = 'https://geogratis.gc.ca/services/geolocation/@{language}/locate';
const GEO_NAMES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json';
const GEO_PROVINCES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json';
const GEO_TYPES_URL = 'https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json';

/**
 * A class/interface that wraps around a GeoSearch object and provides additional services.
 * Can consume an optional config object upon creation.
 *
 * The following are valid config object properties:
 * {
 *      excludeTypes: string | Array<string>,
 *      language: string,
 *      geoNames: string,
 *      geoLocation: string
 * }
 */
export class GeoSearchUI {
    config: IGeosearchConfig;

    constructor(language: string, uConfig: any) {
        // If there's a geosearch config in the configuration file, set the URLs if they are provided.
        let geoLocateUrl: string;
        let geoNameUrl: string;
        let geoProvinceUrl: string;
        let geoTypesUrl: string;

        const services: any = uConfig?.serviceUrls;
        if (services) {
            geoLocateUrl = services.geoLocation ? services.geoLocation : GEO_LOCATE_URL;
            geoNameUrl = services.geoNames ? services.geoNames : GEO_NAMES_URL;
            geoProvinceUrl = services.geoProvince ? services.geoProvince : GEO_PROVINCES_URL;
            geoTypesUrl = services.geoTypes ? services.geoTypes : GEO_TYPES_URL;
        } else {
            // If the URLs are not provided, set them to be defaults.
            geoLocateUrl = GEO_LOCATE_URL;
            geoNameUrl = GEO_NAMES_URL;
            geoProvinceUrl = GEO_PROVINCES_URL;
            geoTypesUrl = GEO_TYPES_URL;
        }

        geoLocateUrl = geoLocateUrl.replace('@{language}', language);
        geoNameUrl = geoNameUrl.replace('@{language}', language);
        geoProvinceUrl = geoProvinceUrl.replace('@{language}', language);
        geoTypesUrl = geoTypesUrl.replace('@{language}', language);

        // construct a query url with a token for the FSA

        let fsaUrl = '';
        const fsaLookup: any = uConfig?.fsaBoundaries;
        if (fsaLookup && fsaLookup.serviceUrl) {
            const fsaField = fsaLookup.keyField || 'CFSAUID';

            fsaUrl = `${fsaLookup.serviceUrl}/query/?where=${fsaField}%3D'${FSATOKEN}'&outFields=${fsaField}&returnGeometry=true&f=json`;
        }

        // set default config values, if settings object is provided
        const settings: any = uConfig?.settings;
        let categories: Array<string>;
        let sortOrder: Array<string>;
        let disabledSearchTypes: Array<string>;
        let maxResults: number;
        let officialOnly: boolean;
        if (settings) {
            categories = settings.categories ? settings.categories : [];
            sortOrder = settings.sortOrder ? settings.sortOrder : [];
            disabledSearchTypes = settings.disabledSearchTypes ? settings.disabledSearchTypes : [];
            maxResults = settings.maxResults > 0 ? settings.maxResults : 100; // > will fail on undefined, defaulting
            officialOnly = !!settings.officialOnly;
        } else {
            categories = [];
            sortOrder = [];
            disabledSearchTypes = [];
            maxResults = 100;
            officialOnly = false;
        }

        // match a new config object with the one defined in definitions.ts
        this.config = {
            language,
            geoNameUrl,
            geoLocateUrl,
            fsaUrl,
            types: Types(language, geoTypesUrl), // list of type filters
            provinces: Provinces(language, geoProvinceUrl), // list of province filters
            categories,
            sortOrder,
            disabledSearchTypes,
            maxResults,
            officialOnly
        };
        // remove any types to be excluded from config
        this.config.types.filterValidTypes(uConfig?.excludeTypes);
        (<any>this)._provinceList = [];
        (<any>this)._typeList = [];
        (<any>this)._excludedTypes = uConfig?.excludeTypes || [];
    }

    get provinceList(): Array<IProvinceInfo> {
        return (<any>this)._provinceList;
    }
    get typeList() {
        return (<any>this)._typeList;
    }
    set provinceList(val: Array<IProvinceInfo>) {
        (<any>this)._provinceList = val;
    }
    set typeList(val) {
        (<any>this)._typeList = val;
    }

    levenshteinDistance(q: Query, result: string) {
        // sanitize strings
        result = result.toLowerCase().trim();
        const query = decodeURI(q.query!.toLowerCase().replace('*', ''));

        /* Use a modified levenshtein distance algorithm to compute the 'distance' between the query and the result.
         The distance is computed by assessing each letter where:
         - insertion costs 0.2
         - deletion, substitution cost 1
        */
        const levDistance = [];
        for (let i = 0; i <= result.length; i++) {
            levDistance[i] = [i];
            for (let j = 1; j <= query.length; j++) {
                levDistance[i][j] =
                    i === 0
                        ? j
                        : Math.min(
                              levDistance[i][j - 1] + 1, // delete
                              levDistance[i - 1][j] + 0.2, // insert
                              levDistance[i - 1][j - 1] + (query[j - 1] === result[i - 1] ? 0 : 1) // substitute
                          );
            }
        }
        return levDistance[result.length][query.length];
    }

    /**
     * Given some string query, returns a promise that resolves as an array of visual result objects
     * and a report of any service failures
     *
     * @param {string} userInput the search string this query is based on
     * @return {Promise}
     */
    query(userInput: string) {
        // run query based on search string input
        return GeoSearchQuery.make(this.config, userInput.toUpperCase()).onComplete.then((q: Query) => {
            // any feature result requires a manual first entry

            // IDEA
            // concat everything.
            //  split into two buckets
            //  a) items with sort less than custom.length
            //  b) items with sort === custom.length
            //  sort a) properly
            //  if a) length > max, slice at max and done
            //  else levenshtein b)
            // then take all of a) plus remainder slice of b)

            // anything with a sort lower than this has a defined priority
            const priorityLimit = this.config.sortOrder.length;
            const maxRes = this.config.maxResults;

            const priorityResults = q.results.filter(vr => vr.order < priorityLimit);
            const normalResults = q.results.filter(vr => vr.order >= priorityLimit); // technically should never be greater

            priorityResults.sort((a, b) => a.order - b.order);

            let final: Array<IVisualResult>;

            if (priorityResults.length >= maxRes) {
                // already enough hits in priority. givver.
                final = priorityResults.slice(0, maxRes);
            } else {
                // levenshtein the rest.
                // store calc in order field to avoid running it every sort operation
                normalResults.forEach(vr => (vr.order = this.levenshteinDistance(q, vr.name)));
                normalResults.sort((a, b) => a.order - b.order);

                final = priorityResults.concat(normalResults.slice(0, maxRes - priorityResults.length));
            }

            // console.log('remaining query results: ', queryResult);
            return {
                results: final,
                failedServs: q.failedServs
            };
        });
    }

    /**
     * Return a promise that resolves to a list of formatted province objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted province objects
     */
    fetchProvinces(): Promise<Array<IProvinceInfo>> {
        // uses an interval to watch for the flag on the .provinces object.
        // when the flag hits, we've loaded stuff from the province definition service.
        // then format that into a more complete object

        // TODO revisit the flow. Feels like things are just routing through here.
        //      is anything else using .provinceList other than top-filter (via the store)?

        return new Promise(resolve => {
            const provsWatcher = setInterval(() => {
                if (this.config.provinces.listFetched) {
                    clearInterval(provsWatcher);

                    this.provinceList = this.config.provinces.provinceList;
                    resolve(this.provinceList);
                }
            });
        });
    }

    /**
     * Return a promise that resolves to a list of formatted type objects
     *
     * @return {Promise<Array>} a promise that resolves to a list of formatted type objects
     */
    fetchTypes(): Promise<Array<any>> {
        return new Promise(resolve => {
            const typesWatcher = setInterval(() => {
                if (this.config.types.typesFetched) {
                    clearInterval(typesWatcher);
                    const typeList = [];
                    // add a '...' option as a way to clear province filter
                    const reset = {
                        code: -1,
                        name: '...'
                    };
                    typeList.push(reset);
                    // obtain the type filters stored in config
                    const rawTypes = this.config.types.allTypes;
                    for (const type in rawTypes) {
                        if (!(<any>this)._excludedTypes.includes(type)) {
                            typeList.push({
                                code: type,
                                name: rawTypes[type]
                            });
                        }
                    }
                    this.typeList = typeList;
                    resolve(this.typeList);
                }
            }, 250);
        });
    }
}

export default {
    feature: 'geoSearch',
    GeoSearchUI
};
