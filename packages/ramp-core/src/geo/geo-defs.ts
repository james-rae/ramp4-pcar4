// TODO revist filename

// NOTE attempt to avoid importing any classes that depend on the Instance.
//      we want types here to be available before the instance is generated,
//      so don't want some weird dependency loop.
import {  Attributes, BaseGeometry, Extent, FileLayer, Point, RampLodConfig, SpatialReference } from '@/api/internal';

// NOTE: some values have changed since RAMP2.
//       this is due to esri api 4 using different constants, and working exclusively in the
//       api domain of constants. RAMP2 we were often in the ArcGIS server domain.
//       e.g. 'esriSLSDashDot' is now 'dash-dot'

// keep these values in line with what the config schema expects
export enum LayerType {
    // ESRI
    FEATURE = 'esriFeature',
    MAPIMAGE = 'esriMapImage',
    TILE = 'esriTile',
    IMAGERY = 'esriImagery',

    // OGS
    WMS = 'ogcWms',
    WFS = 'ogcWfs', // TODO proposing this should not be a part of this enum. WFS = Feature

    UNKNOWN = 'unknown'
}

// Format indicates what form the spatial data is encoded in.
// TODO add more as we support more formats
export enum DataFormat {
    ESRI_FEATURE = 'esriFeature',
    ESRI_RASTER = 'esriRaster',
    ESRI_TILE = 'esriTile',
    OGC_RASTER = 'ogcRaster',
    UNKNOWN = 'unknown'
}

export enum IdentifyMode {

    /**
     * Runs the identify query and pipes the available results through the `identify` API endpoint.
     */
    Query = 'query',

    /**
     * Display the identify results in the details panel.
     * This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.
     */
    Details = 'details',

    /**
     * Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will replace the marker.
     * Only works when `Query` is set.
     */
    Highlight = 'highlight',

    /**
     * Adds a graphic marker at the point of a mouse click. The marker will be set on the map even if the `Query` option is not set.
     */
    Marker = 'marker',

    /**
     * Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
     * The haze will not be applied if neither `Marker` nor `Highlight` is set.
     */
    Haze = 'haze'
}

export enum CoreFilter {
    SYMBOL = 'symbol',
    GRID = 'grid',
    EXTENT = 'extent',
    API = 'api' // this would be a default api key. e.g. if someone just does an API filter set with no key parameter, it would use this.
}

export interface EpsgLookup {
    (code: string | number): Promise<string>;
}

export interface DojoWindow extends Window {
    require?: any;  // require is both a function, and has event handlers. probably a way to define in typescript interface, not going to right now.
}

export enum LayerState { // these are used as css classes; hence the `rv` prefix
    NEW = 'rv-new', // this means layer class exists but needs to be initialized()
    REFRESH = 'rv-refresh',
    LOADING = 'rv-loading',
    LOADED = 'rv-loaded',
    ERROR = 'rv-error'
}

export enum IdentifyResultFormat {
    ESRI = 'esri',
    TEXT = 'text',
    IMAGE = 'image', // TODO does this need to be split out into image formats like jpg, png?
    HTML = 'html',
    XML = 'xml',
    JSON = 'json',
    UNKNOWN = 'unknown'
}

// TODO since MapClick and MapMove are payloads on public events, is there a proper
//      way they should be exposed from the main app as well (like, exported? in one of those .d.ts files?)?
//      same question probably applies to a number of other interfaces here.

export interface MapClick {
    mapPoint: Point;
    screenX: number;
    screenY: number;
    button: number;
    clickTime: number;
}

export interface MapMove {
    screenX: number;
    screenY: number;
    button: number;
    moveTime: number;
}

export interface ScreenPoint {
    screenX: number;
    screenY: number;
}

// a collection of attributes
// TODO consider changin .features to .attributes or .attribs.
//      features would be back-compatible, but it's confusing as we now have a Graphic class, which would be more
//      aligned with the word "feature"
export interface AttributeSet {
    features: Array<Attributes>;
    oidIndex: {[key: number]: number};
}

export interface FieldDefinition {
    name: string;
    alias: string;
    type: string;
    length?: number;
}

export interface TabularAttributeSet {
    columns: Array<{ data: string; title: string; }>;
    rows: Array<Attributes>;
    fields: Array<FieldDefinition>;
    oidField: string;
    // oidIndex: number; // TODO determine if we need this anymore
    // renderer: BaseRenderer; // TODO determine if we need this anymore
}

export interface LegendSymbology {
    label: string;
    definitionClause: string;
    svgcode: string;
    drawPromise: Promise<void>;
    // TODO might need to add something to support image-based legends we find in WMS or custom stacks from the config
}

export interface ArcGisServerUrl {
    rootUrl: string;
    index: number | undefined;
}

export interface GetGraphicParams {
    getGeom?: boolean;
    getAttribs?: boolean;
    // I don't think we need this anymore. The map is now effectively a singleton on the instance API. no more layers holding pointers to the map they live in.
    // unboundMap?: MapAPI;
}

export interface GetGraphicServiceDetails {
    includeGeometry?: boolean; // indicates if the feature geometry should be included in the result
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl: string; // feature layer endpoint on an arcgis server
    maxOffset?: number; // indicates detail level required of geometry. can be critical if service is in different projection than the map
    mapSR?: string; // stringified spatial reference of the map
    oid: number; // oid of the feature to find
}

export interface GetGraphicResult {
    // TODO replace all this with a RAMPAPI.Graphic?
    attributes?: Attributes;
    geometry?: BaseGeometry;
}

export interface QueryFeaturesParams {
    filterGeometry?: BaseGeometry; // filter by geometry
    filterSql?: string; // filter by sql query
    includeGeometry?: boolean; // if geometry should be included in the result
    outFields?: string; // comma separated list of attributes to restrict what is downloaded
    sourceSR?: SpatialReference; // the spatial reference of the web service. providing helps avoid some reprojection issues

    // don't think we need this anymore. map is now a singleton on the instance api
    // map?: RampMap; // needed if querying geometry against a web service
}

export interface QueryFeaturesArcServerParams extends QueryFeaturesParams {
    url: string;
}

export interface QueryFeaturesFileParams extends QueryFeaturesParams {
    layer: FileLayer;
}

export interface IdentifyParameters {
    geometry: BaseGeometry;
    // unboundMap?: any; TODO do we still need this? if map is part of api, we can just direct reference it from anywhere?
    tolerance?: number;
    returnGeometry?: boolean; // TODO revisit this. might make more sense to offload geom to a followup request. if we keep, we may need to add property to IdentifyItem for the geom to live in
    // TODO think about adding more options to facilitate more flexible identification.
    //      e.g. for MapImageLayer, an overriding list of child layers to query
}

// TODO for the identify structure, currently using uid to tie back to layers/sublayers. should we also include layerid / layerindex for completeness?

export interface IdentifyItem {
    data: any; // TODO figure out how we want to do this. we want the pipeline to be flexible and handle anything
    format: IdentifyResultFormat;
    // See https://github.com/ramp4-pcar4/r4design/issues/11
    // name: string;
    // id: string;
    // symbol: string; // SVG code. does this need to be more flexible to handle WMS image symbols? would a symbol stack-ish thing be more appropriate?
}

export interface IdentifyResult {
    items: Array<IdentifyItem>;
    uid: string; // this would match to the FC. TODO might want to name the property something more specific to that, like sublayerUid? indexUid? childUid? might be ok with uid as the parentUid is different name
    isLoading: boolean; // TODO confirm we still need this. the .done of IdentifyResultSet should provide the same information. maybe it's a binding thing (bind to bool > bind to promise?)

}

export interface IdentifyResultSet {
    results: Array<IdentifyResult>;
    done: Promise<void>;
    parentUid: string; // this would be the parent layer's uid.
}

export interface FilterEventParam {
    filterKey: string;
    uid?: string;
    extent?: Extent;
    extraData?: any;
}

// these represent filter keys that the core reserves. the above interface does not use it for typing as
// 3rd parties can define their own keys.
export enum CoreFilterKey {
    SYMBOL = 'symbol',
    GRID = 'grid',
    EXTENT = 'extent',
    API = 'api'
}
