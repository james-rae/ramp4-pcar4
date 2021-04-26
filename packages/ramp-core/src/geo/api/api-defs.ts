import { SpatialReference } from '@/geo/api/api-internal';

export interface RampLodConfig {
    level: number;
    resolution: number;
    scale: number;
}

export interface ColourParams {
    r: number;
    g: number;
    b: number;
    a?: number;
}

// TODO add support for PATH type?
//      would allow person to define a sybmol using svg. would need to enhance our style params to allow for svg path.
//      alternately we can hotwire the .icon field. so if PATH, use .icon. might also make sense to add ICON to the enum,
//      and have it be a special case just for the constructor and minimize confusion of callers.
export enum PointStyle {
    CIRCLE = 'circle',
    CROSS = 'cross',
    DIAMOND = 'diamond',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    X = 'x'
}

export enum LineStyle {
    DASH = 'dash',
    DASHDOT = 'dash-dot',
    DASHDOTDOT = 'short-dash-dot-dot', // for backwards compatibility
    DOT = 'dot',
    LONGDASH = 'long-dash',
    LONGDASHDOT = 'long-dash-dot',
    LONGDASHDOTDOT = 'long-dash-dot-dot',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SHORTDASH = 'short-dash',
    SHORTDASHDOT = 'short-dash-dot',
    SHORTDASHDOTDOT = 'short-dash-dot-dot',
    SHORTDOT = 'short-dot',
    SOLID = 'solid'
}

export enum FillStyle {
    BDIAG = 'backward-diagonal',
    CROSS = 'cross',
    DIAG_CROSS = 'diagonal-cross',
    FDIAG = 'forward-diagonal',
    HORIZONTAL = 'horizontal',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SOLID = 'solid',
    VERTICAL = 'vertical'
}

export enum GeometryType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon',
    LINEARRING = 'LinearRing',
    EXTENT = 'Extent',
    NONE = 'None', // useful for raster sublayers who need to populate a geom type field.
    UNKNOWN = 'Unknown'
}

export interface StyleParams {
    style?: string;
    colour?: Array<number> | string | ColourParams;
    width?: number;
}

export interface PointStyleParams extends StyleParams {
    style?: PointStyle;
    icon?: string;
    height?: number;
    xOffset?: number;
    yOffset?: number;
}

// essentially just pretties up the name. no new params
export interface LineStyleParams extends StyleParams {
    style?: LineStyle;
}

// TODO document the funnybusiness of this.
// because we extend interfaces, this param object has an extra set of things
export interface PolygonStyleParams extends StyleParams {
    outlineColor?: Array<number> | string | ColourParams;
    outlineWidth?: number;
    outlineStyle?: LineStyle;

    // the above 3 are for flexibility and backwards compatibility. the property below allows a shortcut by just supplying a line style
    outlineParams?: LineStyleParams;

    // again, mostly for backwards compatibility. opacity can now be provided on the colour itself. and we can use inherited style and colour for the fills as default
    // (these params will have priority)
    fillColor?: Array<number> | string | ColourParams;
    fillOpacity?: number;
    fillStyle?: FillStyle;
}

export type SrDef = SpatialReference | string | number;

export type IdDef = string | number | undefined;

export interface Attributes { [key: string]: any; }

// ----------------------- CLIENT CONFIG INTERFACES -----------------------------------

// TODO migrate these to /geo/api/geo-common ? if we need config interfaces before creating an instance,
//      having them defined here might cause circular reference.

export interface RampSpatialReference {
    wkid?: number;
    latestWkid?: number;
    wkt?: string;
}

export interface RampLayerStateConfig {
    visibility?: boolean;
    opacity?: number;
}

export interface RampLayerFieldInfoConfig {
    data: string; // TODO data is such a confusing word. name or fieldName makes way more sense
    alias?: string;
}

export interface RampLayerFieldMetadataConfig {
    fieldInfo?: Array<RampLayerFieldInfoConfig>;
    exclusiveFields?: boolean; // default to false. if true, means we only recognize and download field in fieldInfo. if false, we download all fields, and fieldInfo provides additional data as needed
}

// i.e. a dynamic layer child
export interface RampLayerMapImageLayerEntryConfig { // A+ name
    index?: number;
    name?: string;
    nameField?: string;
    // outfields?: string; // TODO tbd if we keep this
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    extent?: any;
    controls?:  any;
    stateOnly?:  any;
    table?:  any;
    fieldMetadata?: RampLayerFieldMetadataConfig;
}

// i.e. a wms layer child
export interface RampLayerWmsLayerEntryConfig {
    id?: string; // this is the "name" on the service
    name?: string; // this is display name in ramp. would override "title" on the service
    state?: RampLayerStateConfig;
    // following items need to be flushed out
    controls?:  any;
    currentStyle?: string;
    styleToURL?: string; // are we migrating this functionality?
    // more...
}

// TODO investigate if we want to make a fancy interface heirarchy instead of pile-of-?-properties
export interface RampLayerConfig {
    id: string;
    layerType: string;
    url: string;
    name?: string;
    state?: RampLayerStateConfig;
    customRenderer?: any; // TODO expand, if worth it. fairly complex object
    refreshInterval?: number;
    initialFilteredQuery?: string;
    fieldMetadata?: RampLayerFieldMetadataConfig;
    nameField?: string;
    tooltipField?: string;
    featureInfoMimeType?: string;
    layerEntries?: Array<RampLayerMapImageLayerEntryConfig> | Array<RampLayerWmsLayerEntryConfig>;
    rawData?: any; // used for static data, like geojson string, shapefile guts
    latField?: string; // csv coord field
    longField?: string; // csv coord field
}

export interface RampExtentConfig {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    spatialReference: RampSpatialReference;
}

export interface RampBasemapLayerConfig {
    layerType: string;
    url: string;
    // TODO figure out if we need extra flag to mark as baselayer or referencelayer
}

export interface RampBasemapConfig {
    id: string;
    tileSchemaId: string;
    name?: string;
    description?: string;
    altText?: string;
    attribution?: any; // TODO flush out object later
    layers: Array<RampBasemapLayerConfig>;
}

// TODO actual ramp config is kinda wonky, split over lots of classes
//      for now this will just serve as a nice type for the config
export interface RampMapConfig {
    lods: Array<RampLodConfig>;
    extent: RampExtentConfig;
    basemaps: Array<RampBasemapConfig>;
    initialBasemapId: string;
}