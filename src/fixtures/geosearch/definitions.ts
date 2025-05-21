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
    // list: IGenericObjectType;
    provinceList: Array<IProvinceInfo>;
    listFetched: boolean;
    fsaToProvince(fsa: string): IProvinceInfo;
    codeToProvince(provCode: number): IProvinceInfo;
    nameToProvince(provName: string): IProvinceInfo;
}

export interface ILatLon {
    lat: number;
    lon: number;
}

export interface IRawNameResult {
    items: INameResponse[];
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

// used for injecting the desired code in the fsa query url
export const FSATOKEN = '~FSA~';

export interface IProvinceInfo {
    /**
     * Numeric province code
     */
    code: number;
    /**
     * Province abbreviation
     */
    abbr: string;

    /**
     * Full name
     */
    name: string;
}

export interface IVisualResult {
    /**
     * Primary display name
     */
    name: string;

    /**
     * What shows on the second line.
     */
    type: string;

    /**
     * Bounding box to zoom to, in Latlon
     */
    bbox: Array<number>;

    /**
     * What the source of this entry was
     */
    flav: FlavourKey;

    /**
     * Encodes a position (usually a centroid) in Latlon
     */
    position: [number, number];
    location: {
        /**
         * Not always an actual city. Name of appropriate sub-province location, if one exists
         */
        city?: string;

        /**
         * Province information object
         */
        province?: IProvinceInfo;
    };

    /**
     * Lower number appears higher in the list
     */
    order: number;
}

export type VisualResultList = Array<IVisualResult>;
