import { default as EsriBasemap } from '@arcgis/core/Basemap';
import { default as EsriColour } from '@arcgis/core/Color';
import { default as EsriConfig } from '@arcgis/core/config';
import { default as EsriExtent } from '@arcgis/core/geometry/Extent';
import { default as EsriGeometry } from '@arcgis/core/geometry/Geometry';
import { default as EsriMultipoint } from '@arcgis/core/geometry/Multipoint';
import { default as EsriPoint } from '@arcgis/core/geometry/Point';
import { default as EsriPolygon } from '@arcgis/core/geometry/Polygon';
import { default as EsriPolyline } from '@arcgis/core/geometry/Polyline';
import { default as EsriSpatialReference } from '@arcgis/core/geometry/SpatialReference';
import { fromJSON as EsriGeometryFromJson } from '@arcgis/core/geometry/support/jsonUtils';
import { default as EsriGraphic } from '@arcgis/core/Graphic';
import { default as EsriFeatureLayer } from '@arcgis/core/layers/FeatureLayer';
import { default as EsriGraphicsLayer } from '@arcgis/core/layers/GraphicsLayer';
import { default as EsriImageryLayer } from '@arcgis/core/layers/ImageryLayer';
import { default as EsriMapImageLayer } from '@arcgis/core/layers/MapImageLayer';
import { default as EsriOpenStreetMapLayer } from '@arcgis/core/layers/OpenStreetMapLayer';
import { default as EsriTileLayer } from '@arcgis/core/layers/TileLayer';
import { default as EsriWMSLayer } from '@arcgis/core/layers/WMSLayer';
import { default as EsriField } from '@arcgis/core/layers/support/Field';
import { default as EsriLOD } from '@arcgis/core/layers/support/LOD';
import { default as EsriWMSSublayer } from '@arcgis/core/layers/support/WMSSublayer';
import { default as EsriMap } from '@arcgis/core/Map';
import { default as EsriClassBreaksRenderer } from '@arcgis/core/renderers/ClassBreaksRenderer';
import { default as EsriRenderer } from '@arcgis/core/renderers/Renderer';
import { default as EsriSimpleRenderer } from '@arcgis/core/renderers/SimpleRenderer';
import { default as EsriUniqueValueRenderer } from '@arcgis/core/renderers/UniqueValueRenderer';
import { default as EsriClassBreakInfo } from '@arcgis/core/renderers/support/ClassBreakInfo';
import { default as EsriUniqueValueInfo } from '@arcgis/core/renderers/support/UniqueValueInfo';
import { default as EsriRequest } from '@arcgis/core/request';
import { default as EsriQuery } from '@arcgis/core/rest/support/Query';
import { default as EsriPictureMarkerSymbol } from '@arcgis/core/symbols/PictureMarkerSymbol';
import { default as EsriSimpleFillSymbol } from '@arcgis/core/symbols/SimpleFillSymbol';
import { default as EsriSimpleLineSymbol } from '@arcgis/core/symbols/SimpleLineSymbol';
import { default as EsriSimpleMarkerSymbol } from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { default as EsriSymbol } from '@arcgis/core/symbols/Symbol';
import { fromJSON as EsriSymbolFromJson } from '@arcgis/core/symbols/support/jsonUtils';
import { default as EsriFeatureFilter } from '@arcgis/core/layers/support/FeatureFilter';
import { default as EsriMapView } from '@arcgis/core/views/MapView';
import { default as EsriColorBackground } from '@arcgis/core/webmap/background/ColorBackground';
declare class EsriAPI {
    static Basemap(prams: __esri.BasemapProperties): Promise<EsriBasemap>;
    static Map(prams: __esri.MapProperties): Promise<EsriMap>;
    static MapView(prams: __esri.MapViewProperties): Promise<EsriMapView>;
    static FeatureLayer(prams: __esri.FeatureLayerProperties): Promise<EsriFeatureLayer>;
    static GraphicsLayer(prams: __esri.GraphicsLayerProperties): Promise<EsriGraphicsLayer>;
    static ImageryLayer(prams: __esri.ImageryLayerProperties): Promise<EsriImageryLayer>;
    static MapImageLayer(prams: __esri.MapImageLayerProperties): Promise<EsriMapImageLayer>;
    static OpenStreetMapLayer(prams: __esri.OpenStreetMapLayerProperties): Promise<EsriOpenStreetMapLayer>;
    static TileLayer(prams: __esri.TileLayerProperties): Promise<EsriTileLayer>;
    static WMSLayer(prams: __esri.WMSLayerProperties): Promise<EsriWMSLayer>;
    static ColorBackground(prams: __esri.ColorBackgroundProperties): Promise<EsriColorBackground>;
    static FeatureFilter(prams: __esri.FeatureFilterProperties): Promise<EsriFeatureFilter>;
    static FieldFromJson(json: any): Promise<EsriField>;
    static Query(): Promise<EsriQuery>;
    static QueryByIds(url: string, query: EsriQuery, options?: __esri.RequestOptions): Promise<Array<number>>;
    static RendererFromJson(json: any): Promise<EsriRenderer>;
}
export { EsriAPI, type EsriBasemap, type EsriClassBreakInfo, type EsriClassBreaksRenderer, EsriColour, type EsriColorBackground, EsriConfig, EsriExtent, type EsriFeatureFilter, type EsriFeatureLayer, type EsriField, type EsriGeometry, EsriGeometryFromJson, EsriGraphic, type EsriGraphicsLayer, type EsriImageryLayer, type EsriLOD, type EsriMap, type EsriMapImageLayer, type EsriMapView, EsriMultipoint, type EsriOpenStreetMapLayer, EsriPictureMarkerSymbol, EsriPoint, EsriPolygon, EsriPolyline, type EsriQuery, type EsriRenderer, EsriRequest, EsriSimpleFillSymbol, EsriSimpleLineSymbol, EsriSimpleMarkerSymbol, type EsriSimpleRenderer, EsriSpatialReference, type EsriSymbol, EsriSymbolFromJson, type EsriTileLayer, type EsriUniqueValueInfo, type EsriUniqueValueRenderer, type EsriWMSLayer, type EsriWMSSublayer };