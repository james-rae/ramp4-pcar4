import{U as l}from"./main-C9JjxZR3.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-DUSVxu2n.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-Dc2emfNc.js")).default,CSVLayer:async()=>(await import("./CSVLayer-5BmTBRrB.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-CuTyi_FY.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer-DyvIsVm1.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-DnZhqBZu.js")).default,FeatureLayer:async()=>(await import("./FeatureLayer-BLJyGD1K.js")).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-BRYwT6_F.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-DHhcNJFe.js")).default,GroupLayer:async()=>(await import("./GroupLayer-eAtj4qu_.js")).default,ImageryLayer:async()=>(await import("./ImageryLayer-BAmkLObg.js")).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-DxANXvhw.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-D_XQpOcF.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-OBnMo_Yr.js")).default,KMLLayer:async()=>(await import("./KMLLayer-lv-2CVTG.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-DZrUsa3Z.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-DLHQCj6A.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-Dq1y3F8t.js")).default,MapImageLayer:async()=>(await import("./MapImageLayer-CeJ2ekY8.js")).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-D2Qnm2sn.js")).default,MediaLayer:async()=>(await import("./MediaLayer-Dj5X6hoY.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-C6r_oE4Y.js")).default,OpenStreetMapLayer:async()=>(await import("./OpenStreetMapLayer-eJYFiwcL.js")).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-CLbEddMe.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-cIeEpXhT.js")).default,RouteLayer:async()=>(await import("./RouteLayer-pZMIKHyA.js")).default,SceneLayer:async()=>(await import("./SceneLayer-DTAkz4oi.js")).default,StreamLayer:async()=>(await import("./StreamLayer-BI5T33rq.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-DX6YRhkb.js")).default,TileLayer:async()=>(await import("./TileLayer-mK0fuxjv.js")).default,UnknownLayer:async()=>(await import("./UnknownLayer-CA-69yzE.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-Cj7H9CrE.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-By_jNp_3.js")).default,VideoLayer:async()=>(await import("./VideoLayer-Cey33FJv.js")).default,ViewshedLayer:async()=>(await import("./ViewshedLayer-DCozALMY.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-BOtP4cY0.js")).default,WFSLayer:async()=>(await import("./WFSLayer-DuksE-Dg.js")).default,WMSLayer:async()=>(await import("./WMSLayer-Dn7xdDQQ.js")).default,WMTSLayer:async()=>(await import("./WMTSLayer-Ce7C-X2Y.js")).default,WebTileLayer:async()=>(await import("./WebTileLayer-DKlbjv6O.js").then(a=>a.W)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function S(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(S)}function g(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{d as a,p as b,g as i,o as t};