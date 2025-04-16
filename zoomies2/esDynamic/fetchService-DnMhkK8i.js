import{U as l}from"./main-DyJf3FFo.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-DRaFH530.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-DnmIKhrq.js")).default,CSVLayer:async()=>(await import("./CSVLayer-CdxAEwdg.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-DJBRwRQG.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer--zMW0-Hf.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-CD3rn_yq.js")).default,FeatureLayer:async()=>(await import("./FeatureLayer-DGYIA1t9.js")).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-2VTUWsId.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-nDWWZPsR.js")).default,GroupLayer:async()=>(await import("./GroupLayer-CB3gB0MY.js")).default,ImageryLayer:async()=>(await import("./ImageryLayer-CsZ3Dx2_.js")).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-D8OBwZYr.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-CjN0WnBd.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-GnBAUP6E.js")).default,KMLLayer:async()=>(await import("./KMLLayer-C3S2-RGX.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-DI00Dm3m.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-D-crB9sC.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-CSr-5XQ0.js")).default,MapImageLayer:async()=>(await import("./MapImageLayer-BUmkEn9j.js")).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-BalU38iA.js")).default,MediaLayer:async()=>(await import("./MediaLayer-fPYGmarN.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-DmANQYBE.js")).default,OpenStreetMapLayer:async()=>(await import("./OpenStreetMapLayer-BA91YzMH.js")).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-CStSwfhx.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-BEwyxkp_.js")).default,RouteLayer:async()=>(await import("./RouteLayer-C7FRN-qq.js")).default,SceneLayer:async()=>(await import("./SceneLayer-BcsbWwaC.js")).default,StreamLayer:async()=>(await import("./StreamLayer-DoSL2USb.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-DKNDYrHB.js")).default,TileLayer:async()=>(await import("./TileLayer-QfenrGuY.js")).default,UnknownLayer:async()=>(await import("./UnknownLayer-CxNquk6m.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-DqKDBCjO.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-DWSDTa7o.js")).default,VideoLayer:async()=>(await import("./VideoLayer-D-zs3mlu.js")).default,ViewshedLayer:async()=>(await import("./ViewshedLayer-Dh1CwzRV.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-DscKpOUK.js")).default,WFSLayer:async()=>(await import("./WFSLayer-D04TA7sL.js")).default,WMSLayer:async()=>(await import("./WMSLayer-kQwEPr6_.js")).default,WMTSLayer:async()=>(await import("./WMTSLayer-lXV9DvfB.js")).default,WebTileLayer:async()=>(await import("./WebTileLayer-CN8Xg-FE.js").then(a=>a.W)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function S(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(S)}function g(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{d as a,p as b,g as i,o as t};
