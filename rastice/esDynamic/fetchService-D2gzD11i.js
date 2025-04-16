import{U as l}from"./main-CvsyIoCL.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-B0fLg6z5.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-lcjX-yOP.js")).default,CSVLayer:async()=>(await import("./CSVLayer-3lbzOBug.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-CrkZn90y.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer-9c1aMLHv.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-uXBZ30oS.js")).default,FeatureLayer:async()=>(await import("./FeatureLayer-DdabZQxC.js")).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-BV1nBcQG.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-DaAVeOoP.js")).default,GroupLayer:async()=>(await import("./GroupLayer-JFTTPMVv.js")).default,ImageryLayer:async()=>(await import("./ImageryLayer-BqDQglXR.js")).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-BdJ46ODn.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-CTSLgYgJ.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-C7VKI0h_.js")).default,KMLLayer:async()=>(await import("./KMLLayer-2O8Ww5-d.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-BPZm9WqZ.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-C8s0xcwe.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-VJhS16OM.js")).default,MapImageLayer:async()=>(await import("./MapImageLayer-TK_n-S19.js")).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-CwI3qnQr.js")).default,MediaLayer:async()=>(await import("./MediaLayer-B7RFpkjx.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-CgCcvUl-.js")).default,OpenStreetMapLayer:async()=>(await import("./OpenStreetMapLayer-DTJaRIxa.js")).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-D7zE04MC.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-BcXEbIKV.js")).default,RouteLayer:async()=>(await import("./RouteLayer-UYwQ9OJp.js")).default,SceneLayer:async()=>(await import("./SceneLayer-DKweUUcA.js")).default,StreamLayer:async()=>(await import("./StreamLayer-JOBorUeP.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-BoqETXm2.js")).default,TileLayer:async()=>(await import("./TileLayer-CW3063XR.js")).default,UnknownLayer:async()=>(await import("./UnknownLayer-ivDpywdQ.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-ewJZFtPB.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-D7s4nqC2.js")).default,VideoLayer:async()=>(await import("./VideoLayer-CYBsQgiV.js")).default,ViewshedLayer:async()=>(await import("./ViewshedLayer-BN-PGxT5.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-DiW4cqFN.js")).default,WFSLayer:async()=>(await import("./WFSLayer-BBUuFSQE.js")).default,WMSLayer:async()=>(await import("./WMSLayer-DZ-FSY6i.js")).default,WMTSLayer:async()=>(await import("./WMTSLayer-B7HW7MAP.js")).default,WebTileLayer:async()=>(await import("./WebTileLayer-C45DzOoC.js").then(a=>a.W)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function S(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(S)}function g(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{d as a,p as b,g as i,o as t};
