import{s as g,G as c,al as T,cb as E,n as y,B as _,H as R,bh as P}from"./main-COW1-tZE.js";import{o as q,r as I}from"./featureConversionUtils-5qY5C-9w.js";import{m as b}from"./FeatureStore-CyZZ-MnP.js";import{x as $,j}from"./queryUtils-gCQPggeV.js";import{V as N}from"./QueryEngine-u_mO_-Hk.js";import{E as O,N as Q}from"./geojson-TmKyKQED.js";import{p as M}from"./sourceUtils-BJQFOm1q.js";import{o as k,e as L,K as f}from"./wfsUtils-DInnLk34.js";import{Z as U}from"./FieldsIndex-CAs3Af8Z.js";import"./preload-helper-ExcqyqRp.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-CuCWVMHO.js";import"./PooledRBush-DbBNQw6i.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-DDlgikuI.js";import"./optimizedFeatureQueryEngineAdapter-Ct4XhJft.js";import"./projection-DpT9HzuS.js";import"./projectBuffer-DMMM1aK4.js";import"./normalizeUtils-DRInXqfr.js";import"./normalizeUtilsCommon-Bt8X9OJS.js";import"./utils-BOLWf6Zp.js";import"./utils-jdmhfIP2.js";import"./json-Wa8cmqdu.js";import"./LRUCache-eTKZ1PEg.js";import"./WhereClause-CfECb-3n.js";import"./TimeOnly-C4DXtAnK.js";import"./UnknownTimeZone-DnLCB85J.js";import"./fieldType-Rjx7u5H6.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-C-GWruip.js";import"./utils-DtZwPvW4.js";import"./TimeExtent-Netzf3WV.js";import"./heatmapUtils-Djxuv59e.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-DGPt984p.js";import"./Basemap-BFg7olai.js";import"./loadAll-BXarGv4S.js";import"./PortalItem-CVWNtsIU.js";import"./writeUtils-BdYrQHJ2.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BzgDrEGZ.js";import"./utils-DuDR9ObB.js";import"./ClassBreaksDefinition-CV5OQvrx.js";import"./Scheduler-D5n0c7-O.js";import"./signal-CB55nXCv.js";import"./date-Dw3OHnFv.js";import"./xmlUtils-CtUoQO7q.js";import"./arcgisLayerUrl-BpqSFS2S.js";import"./Field-BbM3YSMn.js";const x="esri.layers.WFSLayer";class Zt{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){const{getFeatureUrl:a,getFeatureOutputFormat:s,fields:n,geometryType:u,featureType:o,maxRecordCount:i,maxTotalRecordCount:h,maxPageCount:C,objectIdField:d,customParameters:F}=e,{spatialReference:p,getFeatureSpatialReference:l}=k(a,o,e.spatialReference);try{await $(l,p)}catch{throw new g("unsupported-projection","Projection not supported",{inSpatialReference:l,outSpatialReference:p})}c(t),this._customParameters=F,this._featureType=o,this._fieldsIndex=U.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some(S=>S.type==="esriFieldTypeDate")?{timeZoneIANA:T}:null}),this._geometryType=u,this._getFeatureUrl=a,this._getFeatureOutputFormat=s,this._getFeatureSpatialReference=l,this._maxRecordCount=i,this._maxTotalRecordCount=h,this._maxPageCount=C,this._objectIdField=d,this._spatialReference=p;let m=await this._snapshotFeatures(t);if(m.errors.length>0&&(this._supportsPagination=!1,m=await this._snapshotFeatures(t),m.errors.length>0))throw m.errors[0];return this._queryEngine=new N({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:p,timeInfo:null,featureStore:new b({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(m.features),{warnings:w(m),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new g("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e.customParameters,this._maxRecordCount=e.maxRecordCount,this._maxTotalRecordCount=e.maxTotalRecordCount,this._maxPageCount=e.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=E(t=>this._snapshotFeatures({signal:t})),this._snapshotTask.promise.then(t=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(t.features);for(const a of w(t))y.getLogger(x).warn(new _("wfs-layer:refresh-warning",a.message,a.details));t.errors?.length&&y.getLogger(x).warn(new _("wfs-layer:refresh-error","Refresh completed with errors",{errors:t.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e){const t=e?.signal,a=this._maxTotalRecordCount,s=this._maxPageCount,n=this._supportsPagination?await L(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:t}):void 0;let u=[];const o=[];if(n==null)try{u=await this._singleQuery(t)}catch(i){R(i)||o.push(i)}else{const i=Math.min(n,a),h=Z(this,Math.max(1,Math.min(Math.ceil(i/this._maxRecordCount),s)),t);await Promise.allSettled(Array.from({length:10}).map(()=>G(h,u,o)))}return c(t),{features:u,totalRecordCount:n,maxTotalRecordCount:a,maxPageCount:s,errors:o}}async _singleQuery(e){const t=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:e});return this._processGeoJSON(t,{signal:e})}async _pageQuery(e,t){const a=e*this._maxRecordCount,s=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:a,count:this._maxRecordCount,signal:t});return this._processGeoJSON(s,{startIndex:a,signal:t})}_processGeoJSON(e,t){O(e,this._getFeatureSpatialReference.wkid);const{startIndex:a,signal:s}=t;c(s);const n=Q(e,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!P(this._spatialReference,this._getFeatureSpatialReference))for(const o of n)o.geometry!=null&&(o.geometry=q(j(I(o.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=a??1;for(const o of n){const i={};M(this._fieldsIndex,i,o.attributes,!0),o.attributes=i,i[this._objectIdField]==null&&(o.objectId=i[this._objectIdField]=u++)}return n}}function*Z(r,e,t){for(let a=0;a<e;a++)yield r._pageQuery(a,t)}async function G(r,e,t){let a=r.next();for(;!a.done;){try{const s=await a.value;e.push(...s)}catch(s){R(s)||t.push(s)}a=r.next()}}function w(r){const e=[];return r.totalRecordCount!=null&&(r.features.length<r.totalRecordCount&&e.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${r.features.length} of ${r.totalRecordCount} in ${r.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount}}),r.totalRecordCount>r.maxTotalRecordCount&&e.push({name:"wfs-layer:large-dataset",message:`The number of ${r.totalRecordCount} features exceeds the maximum allowed of ${r.maxTotalRecordCount}.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount,maxTotalRecordCount:r.maxTotalRecordCount}})),e}export{Zt as default};