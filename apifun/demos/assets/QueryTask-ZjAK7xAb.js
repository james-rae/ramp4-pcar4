const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./meshFeatureSet-XNmAOWnG.js","./main-CcTJZah4.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./Mesh-D_iERPmz.js","./axisAngleDegrees-CuYl0LkC.js","./mat4-I_M_KIEV.js","./common-DQOJ18NT.js","./quat-DAA9UZ3A.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec32-D4ob7-3U.js","./vec42-CKs01hkn.js","./MeshComponent-Cd1RY7_C.js","./imageUtils-D2KqOp3F.js","./meshProperties-C4iW0Ukm.js","./MeshLocalVertexSpace-D-Mxwhot.js","./MeshTransform-BDNW2zxz.js","./mat4f64-Dk4dwAN8.js","./MeshVertexAttributes-b2-qBU6r.js","./meshVertexSpaceUtils-D_fO4xGi.js","./triangulationUtils-YYXFxn_r.js","./earcut-Lltz9D9k.js","./Indices-TRVfGyko.js","./plane-DJilfJKg.js","./vec2f64-DohEyf3f.js","./vec4f64-o2zAXfmz.js","./deduplicate-CD7rzKBH.js","./projectPointToVector-D6P7t9ma.js","./projection-nLxG4Uci.js","./projectBuffer-DwB7xYJN.js","./vertexSpaceConversion-BgFgstzH.js","./mat3-CruJiiUv.js","./spatialReferenceEllipsoidUtils-CsSyVIf9.js","./computeTranslationToOriginAndRotation-CTqTKM0w.js","./vec3-CHxyJkts.js","./BufferView-DZslrVDM.js","./vec2-maR1OrZI.js","./vec4-BJnMXj40.js","./External-D-EF7psY.js","./infoFor3D-DhzudQro.js","./FeatureSet-xTHFBdFq.js","./Field-BlXPfS0o.js","./fieldType-DC231FMv.js","./meshFeatureAttributes-B5nmVroh.js","./RelationshipQuery-rh0JZJ0l.js","./Query-CotcSkQi.js","./TimeExtent-C9S2Kh-G.js","./executeRelationshipQuery-DIDJQ5s3.js","./utils-38kRF6MD.js","./query-BOs8Ywka.js","./normalizeUtils-Bg7D-T7i.js","./normalizeUtilsCommon-DsrTeGXA.js","./utils-C0gkSWhl.js","./pbfQueryUtils-CAoJJs_4.js","./pbf-B1cxttYy.js","./memoryEstimations-0WvAqt4K.js","./OptimizedFeature-BJjYcmbm.js","./OptimizedFeatureSet-Blu9Ckm7.js","./queryZScale-DXDtsMeP.js","./queryAttachments-BT77K0Wg.js","./AttachmentInfo-sPcnznpG.js","./executeAttributeBinsQuery-BIl3IB-P.js","./AttributeBinsFeatureSet-BJKiK9x1.js","./AttributeBinsQuery-e2l8_6l5.js","./queryUtils-B8or6zpZ.js","./json-Wa8cmqdu.js","./FixedIntervalBinParameters-BUjYp4xp.js","./NormalizationBinParametersMixin-C4xCbnZX.js","./timeZoneUtils-ZVFmM1ie.js","./executeTopFeaturesQuery-DLVg098Z.js","./queryTopFeatures-DMj9gklS.js","./TopFeaturesQuery-soaqOGMe.js","./executeForTopIds-9BnjAMBC.js","./executeForTopExtents-ConuiZxg.js","./executeForTopCount-pnM4mUHj.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./preload-helper-ExcqyqRp.js";import{B as a,D as n,N as O,aN as R,I as g,a_ as E,bD as c,s as d,bj as V}from"./main-CcTJZah4.js";import{d as v}from"./infoFor3D-DhzudQro.js";import{R as h,b as I}from"./Query-CotcSkQi.js";import{f as T}from"./utils-38kRF6MD.js";import{s as A,a as w}from"./executeForIds-2sSuf8mw.js";import{n as Q,a as P}from"./executeQueryPBF-BKCPWDoW.js";import{a as q}from"./executeQueryJSON-HGQA-ZyG.js";import{d as L}from"./FeatureSet-xTHFBdFq.js";let o=class extends R{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return g(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),i=e.outStatistics?.[0]!=null,u=E("featurelayer-pbf-statistics"),l=(!i||u)&&e.returnTrueCurves!==!0;let p;if(this.pbfSupported&&l)try{p=await Q(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await q(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return L.fromJSON(t);const{meshFeatureSetFromJSON:i}=await c(s(()=>import("./meshFeatureSet-XNmAOWnG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]),import.meta.url),r);return i(e,this.infoFor3D,t)}executeForCount(e,t){return A(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return P(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return w(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:i}]=await c(Promise.all([s(()=>import("./RelationshipQuery-rh0JZJ0l.js").then(u=>u.R),__vite__mapDeps([45,1,2,3,46,42,43,47]),import.meta.url),s(()=>import("./executeRelationshipQuery-DIDJQ5s3.js"),__vite__mapDeps([48,49,1,2,3,50,51,52,53,54,55,56,57,58,59,29,30,41,42,43,45,46,47]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:i}]=await c(Promise.all([s(()=>import("./RelationshipQuery-rh0JZJ0l.js").then(u=>u.R),__vite__mapDeps([45,1,2,3,46,42,43,47]),import.meta.url),s(()=>import("./executeRelationshipQuery-DIDJQ5s3.js"),__vite__mapDeps([48,49,1,2,3,50,51,52,53,54,55,56,57,58,59,29,30,41,42,43,45,46,47]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:i,processAttachmentQueryResult:u}=await c(s(()=>import("./queryAttachments-BT77K0Wg.js"),__vite__mapDeps([60,1,2,3,50,51,52,49,53,54,55,56,57,58,59,29,30,61]),import.meta.url),t),l=T(this.url);return u(l,await(this.queryAttachmentsSupported?r(l,e,t):i(l,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:r}=await c(s(()=>import("./executeAttributeBinsQuery-BIl3IB-P.js"),__vite__mapDeps([62,49,1,2,3,51,52,53,50,54,55,56,57,58,59,29,30,63,41,42,43,64,65,66,67,68,46,47,69]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await c(s(()=>import("./executeTopFeaturesQuery-DLVg098Z.js"),__vite__mapDeps([70,49,1,2,3,71,51,52,53,50,54,55,56,57,58,59,29,30,41,42,43,72,47]),import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await c(s(()=>import("./executeForTopIds-9BnjAMBC.js"),__vite__mapDeps([73,49,1,2,3,71,51,52,53,50,54,55,56,57,58,59,29,30,72,47]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await c(s(()=>import("./executeForTopExtents-ConuiZxg.js"),__vite__mapDeps([74,1,2,3,49,71,51,52,53,50,54,55,56,57,58,59,29,30,72,47]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await c(s(()=>import("./executeForTopCount-pnM4mUHj.js"),__vite__mapDeps([75,49,1,2,3,71,51,52,53,50,54,55,56,57,58,59,29,30,72,47]),import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=I.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?h.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=v(r),!t.formatOf3DObjects)throw new d("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!V(t.outSpatialReference,this.sourceSpatialReference))throw new d("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:i,originY:u,originZ:l,translationX:p,translationY:m,translationZ:y,scaleX:f,scaleY:_,scaleZ:S,rotationX:D,rotationY:b,rotationZ:F,rotationDeg:x}=r.transformFieldRoles;t.outFields.push(i,u,l,p,m,y,f,_,S,D,b,F,x)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([n({type:h})],o.prototype,"dynamicDataSource",void 0),a([n()],o.prototype,"fieldsIndex",void 0),a([n()],o.prototype,"gdbVersion",void 0),a([n()],o.prototype,"infoFor3D",void 0),a([n({readOnly:!0})],o.prototype,"parsedUrl",null),a([n()],o.prototype,"pbfSupported",void 0),a([n()],o.prototype,"queryAttachmentsSupported",void 0),a([n()],o.prototype,"sourceSpatialReference",void 0),a([n({type:String})],o.prototype,"url",void 0),o=a([O("esri.layers.graphics.sources.support.QueryTask")],o);const Z=o;export{Z as F};
