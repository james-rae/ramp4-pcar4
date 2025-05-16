import { AddressResultList, IFSAResult, IGeosearchConfig, INameResponse, INTSResult, IVisualResult, LocateResponseList, NameResultList, NTSResultList, QueryFeatureResults, ResultList } from '../definitions';
export declare function make(config: IGeosearchConfig, query: string): Query;
/**
 * Runs a url that expects a JSON return value. Returns the result when it arrives
 * @param url
 * @returns
 */
export declare const jsonRequest: (url: string) => Promise<any>;
export declare class Query {
    config: IGeosearchConfig;
    query: string | undefined;
    failedServs: string[];
    /**
     * This appears to be results from geonames.  I don't know why its typed to include address results. Appears those dont get added
     */
    results: ResultList;
    /**
     * A promise that resolves when this object is done searching.
     */
    onComplete: Promise<Query>;
    latLongResult: IVisualResult | undefined;
    /**
     * This appears to be special / non-geonames results. Generally a single item for FSA/NTS/LatLon, or array of address matches.
     */
    featureResults: QueryFeatureResults[];
    resultType: string;
    constructor(config: IGeosearchConfig, query?: string);
    /**
     * Runs a geoname search (named locations) based on query properties.
     * @returns
     */
    search(): Promise<NameResultList>;
    /**
     * Generate a search url.
     * Lat / Lon params are ignored if useLocate is true
     *
     * @param useLocate if true, uses the GeoLocation service (street addresses, FSA, NTS). Otherwise uses the GeoName service (named locations, default)
     * @param lat if provided, does a search based on co-ords instead of name.
     * @param lon if provided, does a search based on co-ords instead of name.
     * @returns the url
     */
    private getUrl;
    /**
     * Takes result from geonames service and tranforms into our results object format
     * @param items
     * @returns
     */
    normalizeNameItems(items: INameResponse[]): NameResultList;
    /**
     * Runs the query parameters against the location service (addresses, FSA, NTS), resolves with results
     * @returns
     */
    locateByQuery(): Promise<LocateResponseList>;
    /**
     * Hits the geonames (named locations) service for items at the given lat/lon. All other query params are ignored.
     */
    nameByLatLon(lat: number, lon: number): Promise<NameResultList>;
}
export declare class LatLongQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
}
export declare class FSAQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
    formatLocationResult(): Promise<IFSAResult | undefined>;
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
export declare class NTSQuery extends Query {
    unitName: string;
    unit: INTSResult;
    constructor(config: IGeosearchConfig, query: string);
    /**
     * Formats a location result into an NTS result
     */
    locateToResult(lrl: LocateResponseList): NTSResultList;
    equals(otherQ: NTSQuery): boolean;
}
/**
 * This is the "default search". As in the input did not match a regex for latlon, fsa, or nts
 * Calling it address is lies since it handles anything with a name
 */
export declare class AddressQuery extends Query {
    constructor(config: IGeosearchConfig, query: string);
    /**
     * Formats a location result into an address result
     */
    locateToResult(lrl: LocateResponseList): AddressResultList;
}
