export interface IGenericObjectType {
    [key: string]: string;
}

/**
 * FSA / NTS / Address / Name / LatLon / Location-Snoop
 */
export type FlavourKey = 'fsa' | 'nts' | 'add' | 'nme' | 'llg' | 'loc';

// config object is used by all query classes
// this is a flattened version from the actual RAMP config. Easier to bind to.
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
    province: { code: string };
    concise: { code: string };
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
    fsa: string; // "H0H"
    code: string; // "FSA"
    desc: string; // "Forward Sortation Area"
    province: string; // Ontario
    _provinces: IGenericObjectType; // {ON: "Ontario"} or {ON: "Ontario", MB: "Manitoba"}
    LatLon: ILatLon;
}

export interface INTSResult {
    nts: string; // 064D or 064D06
    location: string; // "NUMABIN BAY"
    code: string; // "NTS"
    desc: string; // "National Topographic System"
    LatLon: ILatLon;
    bbox: number[];
}

export interface IAddressResult {
    name: string; // "123 Yonge Street"
    city: string; // "Toronto"
    province: string; // "ON"
    desc: string; // "Street Address"
    LatLon: ILatLon;
    bbox: number[];
    flav: FlavourKey;
}

export interface ILatLongResult {
    latlong: string; // "54.54,-91.45"
    desc: string; // "Latitude/Longitude",
    LatLon: ILatLon;
    bbox: number[];
}

//
/**
 * defines results from a GeoNames search
 */
export interface INameResult {
    name: string;
    location: string;
    province: string; // "Ontario"
    type: string; // "Lake"
    LatLon: ILatLon;
    bbox: number[];
    order: number;
    flav: FlavourKey;
}

export interface ILocateResponse {
    title: string;
    type?: string;
    bbox?: number[];
    geometry: { coordinates: number[] };
}

export type LocateResponseList = ILocateResponse[];
export type NameResultList = INameResult[];
export type NTSResultList = INTSResult[];
export type AddressResultList = IAddressResult[];
export type ResultList = (INameResult | IAddressResult)[];
export type QueryFeatureResults = IFSAResult | INTSResult | IAddressResult | ILatLongResult | undefined;

// used for injecting the desired code in the fsa query url
export const FSATOKEN = '~FSA~';

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
        latitude: number; // TODO figure out why this exists alongside .position . it doesn't appear in first row grey like city/prov does
        longitude: number;
        province?: any; // TODO figure out what it is. obj?
    };

    /**
     * Lower number appears higher in the list
     */
    order: number;
}

export type VisualResultList = Array<IVisualResult>;
