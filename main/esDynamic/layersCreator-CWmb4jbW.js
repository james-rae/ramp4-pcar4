import{V as A}from"./main-C9JjxZR3.js";import{L as b,e as w}from"./portalLayers-DXb-PhaT.js";import{b as n}from"./fetchService-JZK9Nz_D.js";import d from"./PortalItem-C9RS7nHR.js";import{t as v}from"./styleUtils-pYfnsHy_.js";function h(e){return p(e,"notes")}function C(e){return p(e,"markup")}function F(e){return p(e,"route")}function p(e,a){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===a}async function I(e,a,t){if(!a)return;const r=a.map(y=>x(y,t)),i=await Promise.allSettled(r);for(const y of i)y.status==="rejected"||y.value&&e.add(y.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},O={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},k={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},g={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={...g,LinkChartLayer:"LinkChartLayer"},D={...T},U={...m};async function x(e,a){return E(await R(e,a),e,a)}async function E(e,a,t){const r=new e;return r.read(a,t.context),r.type==="group"&&(a.layerType==="GroupLayer"?await f(r,a,t):u(a)?N(r,a,t.context):G(a)&&await J(r,a,t.context)),await v(r,t.context),r}async function R(e,a){const t=a.context,r=K(t);let i=e.layerType||e.type;!i&&a?.defaultLayerType&&(i=a.defaultLayerType);const y=r[i];let L=y?n[y]:n.UnknownLayer;if(u(e)){const l=t?.portal;if(e.itemId){const o=new d({id:e.itemId,portal:l});await o.load();const s=(await b(o,new w)).className||"UnknownLayer";L=n[s]}}else i==="ArcGISFeatureLayer"?h(e)||C(e)?L=n.MapNotesLayer:F(e)?L=n.RouteLayer:G(e)&&(L=n.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?L=n.WMTSLayer:i==="WFS"&&e.wfsInfo?.version!=="2.0.0"&&(L=n.UnsupportedLayer);return L()}function G(e){return e.layerType!=="ArcGISFeatureLayer"||u(e)?!1:(e.featureCollection?.layers?.length??0)>1}function u(e){return e.type==="Feature Collection"}function K(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=k;break;case"ground":a=O;break;case"tables":a=V;break;default:a=W}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=U;break;case"tables":a=D;break;default:a=B}break;default:switch(e.layerContainerType){case"basemap":a=m;break;case"tables":a=T;break;default:a=g}}return a}async function f(e,a,t){const r=new A,i=I(r,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,e.type==="group")return e.layers.addMany(r),e}catch(y){e.destroy();for(const L of r)L.destroy();throw y}}catch(y){throw y}}function N(e,a,t){a.itemId&&(e.portalItem=new d({id:a.itemId,portal:t?.portal}),e.when(()=>{const r=i=>{const y=i.layerId;M(i,e,a,y,t);const L=a.featureCollection?.layers?.[y];L&&i.read(L,t)};e.layers?.forEach(r),e.tables?.forEach(r)}))}async function J(e,a,t){const r=n.FeatureLayer,i=await r(),y=a.featureCollection,L=y?.showLegend,l=y?.layers?.map((o,s)=>{const c=new i;c.read(o,t);const S={...t,ignoreDefaults:!0};return M(c,e,a,s,S),L!=null&&c.read({showLegend:L},S),c});e.layers.addMany(l??[])}function M(e,a,t,r,i){e.read({id:`${a.id}-sublayer-${r}`,visibility:t.visibleLayers?.includes(r)??!0},i)}export{f as populateGroupLayer,I as populateOperationalLayers};