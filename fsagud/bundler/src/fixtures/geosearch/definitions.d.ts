export interface IGenericObjectType {
    [key: string]: string;
}
/**
 * FSA / NTS / Address / Name / LatLon / Location-Snoop
 */
export type FlavourKey = 'fsa' | 'nts' | 'add' | 'nme' | 'llg' | 'loc';
export interface IGeosearchConfig {
    geoNameUrl: string;
    geoLocateUrl: string;
    fsaUrl: string;
    categories: string[];
    /**
     * These are concise codes in a priority order. Anything not in the list will come after codes in the list.
     * If empty list, the levenshtein sort is used.
     */
    sortOrder: string[];
    disabledSearchTypes: string[];
    maxResults: number;
    officialOnly: boolean;
    language: string;
    types: ITypes;
    provinces: IProvinces;
}
export interface INameResponse {
    name: string;
    location: string;
    province: {
        code: string;
    };
    concise: {
        code: string;
    };
    latitude: number;
    longitude: number;
    bbox: number[];
}
export interface ITypes {
    allTypes: IGenericObjectType;
    validTypes: IGenericObjectType;
    typesFetched: boolean;
    filterValidTypes(exclude?: string | string[]): IGenericObjectType;
}
export interface IProvinces {
    list: IGenericObjectType;
    listFetched: boolean;
    fsaToProvinces(fsa: string): IGenericObjectType;
}
export interface ILatLon {
    lat: number;
    lon: number;
}
export interface IRawNameResult {
    items: INameResponse[];
}
export interface IFSAResult {
    fsa: string;
    code: string;
    desc: string;
    province: string;
    _provinces: IGenericObjectType;
    LatLon: ILatLon;
}
export interface INTSResult {
    nts: string;
    location: string;
    code: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
}
export interface IAddressResult {
    name: string;
    city: string;
    province: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
    flav: FlavourKey;
}
export interface ILatLongResult {
    latlong: string;
    desc: string;
    LatLon: ILatLon;
    bbox: number[];
}
/**
 * defines results from a GeoNames search
 */
export interface INameResult {
    name: string;
    location: string;
    province: string;
    type: string;
    LatLon: ILatLon;
    bbox: number[];
    order: number;
    flav: FlavourKey;
}
export interface ILocateResponse {
    title: string;
    type?: string;
    bbox?: number[];
    geometry: {
        coordinates: number[];
    };
}
export type LocateResponseList = ILocateResponse[];
export type NameResultList = INameResult[];
export type NTSResultList = INTSResult[];
export type AddressResultList = IAddressResult[];
export type ResultList = (INameResult | IAddressResult)[];
export type QueryFeatureResults = IFSAResult | INTSResult | IAddressResult | ILatLongResult | undefined;
export declare const FSATOKEN = "~FSA~";
export interface IVisualResult {
    name: string;
    bbox: Array<number>;
    /**
     * What shows on the second line.
     */
    type: string;
    /**
     * What the source of this entry was
     */
    flav: FlavourKey;
    position: [number, number];
    location: {
        city?: string;
        latitude: number;
        longitude: number;
        province?: any;
    };
    /**
     * Lower number appears higher in the list
     */
    order: number;
}
export type VisualResultList = Array<IVisualResult>;
