import{V as A}from"./main-DTtQVgOw.js";import{e as b}from"./loadUtils-CVjolCfL.js";import{a as n}from"./lazyLayerLoader-RnFUQYbg.js";import d from"./PortalItem-C7yLXxDn.js";import{selectLayerClassPath as w}from"./portalLayers-LWMUhGN0.js";import{t as v}from"./styleUtils-C1DdmUuL.js";function C(e){return p(e,"notes")}function h(e){return p(e,"markup")}function W(e){return p(e,"route")}function p(e,a){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===a}async function I(e,a,y){if(!a)return;const r=a.map(t=>x(t,y)),i=await Promise.allSettled(r);for(const t of i)t.status==="rejected"||t.value&&e.add(t.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...g,LinkChartLayer:"LinkChartLayer"},D={...T},U={...m};async function x(e,a){return E(await R(e,a),e,a)}async function E(e,a,y){const r=new e;return r.read(a,y.context),r.type==="group"&&(a.layerType==="GroupLayer"?await f(r,a,y):S(a)?N(r,a,y.context):G(a)&&await J(r,a,y.context)),await v(r,y.context),r}async function R(e,a){const y=a.context,r=K(y);let i=e.layerType||e.type;!i&&a?.defaultLayerType&&(i=a.defaultLayerType);const t=r[i];let L=t?n[t]:n.UnknownLayer;if(S(e)){const l=y?.portal;if(e.itemId){const o=new d({id:e.itemId,portal:l});await o.load();const s=(await w(o,new b)).className||"UnknownLayer";L=n[s]}}else i==="ArcGISFeatureLayer"?C(e)||h(e)?L=n.MapNotesLayer:W(e)?L=n.RouteLayer:G(e)&&(L=n.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?L=n.WMTSLayer:i==="WFS"&&e.wfsInfo?.version!=="2.0.0"&&(L=n.UnsupportedLayer);return L()}function G(e){return e.layerType!=="ArcGISFeatureLayer"||S(e)?!1:(e.featureCollection?.layers?.length??0)>1}function S(e){return e.type==="Feature Collection"}function K(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=k;break;case"ground":a=O;break;case"tables":a=V;break;default:a=F}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=U;break;case"tables":a=D;break;default:a=B}break;default:switch(e.layerContainerType){case"basemap":a=m;break;case"tables":a=T;break;default:a=g}}return a}async function f(e,a,y){const r=new A,i=I(r,Array.isArray(a.layers)?a.layers:[],y);try{try{if(await i,e.type==="group")return e.layers.addMany(r),e}catch(t){e.destroy();for(const L of r)L.destroy();throw t}}catch(t){throw t}}function N(e,a,y){a.itemId&&(e.portalItem=new d({id:a.itemId,portal:y?.portal}),e.when(()=>{const r=i=>{const t=i.layerId;M(i,e,a,t,y);const L=a.featureCollection?.layers?.[t];L&&i.read(L,y)};e.layers?.forEach(r),e.tables?.forEach(r)}))}async function J(e,a,y){const r=n.FeatureLayer,i=await r(),t=a.featureCollection,L=t?.showLegend,l=t?.layers?.map((o,s)=>{const c=new i;c.read(o,y);const u={...y,ignoreDefaults:!0};return M(c,e,a,s,u),L!=null&&c.read({showLegend:L},u),c});e.layers.addMany(l??[])}function M(e,a,y,r,i){e.read({id:`${a.id}-sublayer-${r}`,visibility:y.visibleLayers?.includes(r)??!0},i)}export{f as populateGroupLayer,I as populateOperationalLayers};
