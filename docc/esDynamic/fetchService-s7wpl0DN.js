import{a2 as l}from"./main-DnRb_GMc.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-lCw-D4eN.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-Dnrv-E2J.js")).default,CSVLayer:async()=>(await import("./CSVLayer-CsKp8Zic.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-CT3jF7y3.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer-BfYLh03I.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-Bd3Wp7df.js")).default,FeatureLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rx)).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-D_hI9waU.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-DjyBuciK.js")).default,GroupLayer:async()=>(await import("./GroupLayer-B9jeqGsL.js")).default,ImageryLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.ry)).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-CUVi15_m.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-DI1mce6f.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-C8WQxoTp.js")).default,KMLLayer:async()=>(await import("./KMLLayer-CMKauvKv.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-Lk0FseL-.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-BOS2H1Oi.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-nkCbLda8.js")).default,MapImageLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rz)).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-C6_GFZUp.js")).default,MediaLayer:async()=>(await import("./MediaLayer-CkjNqY3-.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-CKR3baJo.js")).default,OpenStreetMapLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rB)).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-KmHu_Dvj.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-LGL_V_Pc.js")).default,RouteLayer:async()=>(await import("./RouteLayer-BV24YHiF.js")).default,SceneLayer:async()=>(await import("./SceneLayer-_deKRtFK.js")).default,StreamLayer:async()=>(await import("./StreamLayer-CLUHL6Hz.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-BllDLC19.js")).default,TileLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rC)).default,UnknownLayer:async()=>(await import("./UnknownLayer-BZ6JomVb.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-DXb915Or.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-B92jCjNE.js")).default,VideoLayer:async()=>(await import("./VideoLayer-DPpR6d7c.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-Dc_hWHji.js")).default,WFSLayer:async()=>(await import("./WFSLayer-ClfanN3H.js")).default,WMSLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rD)).default,WMTSLayer:async()=>(await import("./WMTSLayer-jrh1IQwl.js")).default,WebTileLayer:async()=>(await import("./main-DnRb_GMc.js").then(a=>a.rA)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function h(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(h)}function S(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{p as a,o as b,S as i,d as t};