const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./uploadAssets-CwxR-RHc.js","./main-D_jCcUNd.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./uuid-Cl5lrJ4c.js","./External-EQ4uqBVF.js","./infoFor3D-DhzudQro.js","./meshSpatialReferenceScaleUtils-CcfbVEAj.js","./MeshTransform-C5IMoCpq.js","./mat4-CiVQetHb.js","./common-DQOJ18NT.js","./mat4f64-Dk4dwAN8.js","./quat-BUXSyYw2.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec32-CQFqDiXA.js","./vec42-CKs01hkn.js","./axisAngleDegrees-h_eXVbTd.js","./meshFeatureAttributes-aKTDioUU.js","./convertMeshVertexSpace-DhfKSw3p.js","./MeshVertexAttributes-DHriiJoa.js","./meshProperties-C4iW0Ukm.js","./vertexSpaceConversion-CNxuDBYl.js","./mat3-CruJiiUv.js","./spatialReferenceEllipsoidUtils-C6WSLmy-.js","./computeTranslationToOriginAndRotation-DU_ozVBd.js","./projectBuffer-B9jUCpdF.js","./projectPointToVector-DZVfzWzg.js","./projection-DswCNHiF.js","./meshVertexSpaceUtils-cTsxdkAH.js","./MeshLocalVertexSpace-uKvE6H2j.js","./vec3-DUQfuNFc.js","./BufferView-8Ead2OQr.js","./vec2-maR1OrZI.js","./vec4-BC-l1fae.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper-ExcqyqRp.js";import{bj as U,ff as N,fB as j,n as x,s as S,b6 as P,b8 as Q,aH as L,B as E,D as O,N as V,o as G,e7 as H,aO as B,a_ as D,a4 as f,c2 as v,bB as X,b4 as Z,bL as T,$,aa as z,fC as Y,aX as W,Z as K,O as tt}from"./main-D_jCcUNd.js";import{r as et}from"./uuid-Cl5lrJ4c.js";import{n as st}from"./MeshLocalVertexSpace-uKvE6H2j.js";import{t as at}from"./meshVertexSpaceUtils-cTsxdkAH.js";import{A as rt}from"./External-EQ4uqBVF.js";import{N as it,L as nt,$ as ot}from"./projection-DswCNHiF.js";import{N as ut}from"./MeshTransform-C5IMoCpq.js";import{isFeatureIdentifierArrayWithGlobalId as lt,isFeatureIdentifierArrayWithObjectId as dt}from"./editingSupport-DWU-5HBV.js";import{u as ct}from"./clientSideDefaults-B_17hLfr.js";import{F as pt}from"./QueryTask-oR-HQ9Mo.js";import{H as A}from"./labelingInfo-BjIQ8jVY.js";import{h as ht}from"./infoFor3D-DhzudQro.js";import{s as yt}from"./executeQueryJSON-BK1jVWwz.js";import{i as mt}from"./editsZScale-DcavZV5M.js";import{b as ft}from"./Query-C_GHDF0q.js";import{p as gt}from"./TimeExtent-BsjGA75b.js";import{i as wt,a as bt,o as qt,t as It}from"./EditBusLayer-ocM5IMyF.js";import"./vec32-CQFqDiXA.js";import"./common-DQOJ18NT.js";import"./projectBuffer-B9jUCpdF.js";import"./mat4-CiVQetHb.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-BUXSyYw2.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec42-CKs01hkn.js";import"./axisAngleDegrees-h_eXVbTd.js";import"./normalizeUtils-Gz60uU0X.js";import"./normalizeUtilsCommon-BboKzpCl.js";import"./utils-DlXSLgCK.js";import"./utils-3tCdmWBq.js";import"./QueryEngineCapabilities-DZTubngj.js";import"./executeForIds-DOK7oiCw.js";import"./query-B055u0pr.js";import"./pbfQueryUtils-pBbxWXea.js";import"./pbf-BuCHTg-s.js";import"./memoryEstimations-CE0MHqcd.js";import"./OptimizedFeature-jM_20Y6K.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-1Li2ynEg.js";import"./executeQueryPBF-ITzvmkaC.js";import"./featureConversionUtils-D7fsiKAJ.js";import"./FeatureSet-BMOnUC8p.js";import"./Field-Bc3jm0Qy.js";import"./fieldType-DdU3LEuk.js";import"./SimpleRenderer-kWIWRng4.js";import"./commonProperties-Dxn34wXK.js";import"./colorRamps-aDPmbH1X.js";import"./ColorStop-CbCoynyo.js";import"./visualVariableUtils-Dkp13P5X.js";import"./lengthUtils-BNIshbqa.js";import"./UniqueValueRenderer-CKVXbaX9.js";import"./defaultCIMValues-BHDX_8BB.js";import"./enums-CD-fX3vU.js";import"./RendererLegendOptions-CHBulSBq.js";import"./styleUtils-BXNV9BLc.js";import"./RelationshipQuery-gSCLUaXB.js";import"./NormalizationBinParametersMixin-CRVx_Lu9.js";import"./labelUtils-DAnCNhi5.js";async function J(e,t,s){const{geometry:r}=t,a={...t.attributes};if(s!=null&&r?.type==="mesh"){const{transformFieldRoles:i}=s,{origin:n,spatialReference:o,vertexSpace:u}=r,d=r.transform??new ut,l=u.type==="local",p=e.spatialReference,q=p.isGeographic,I=U(p,o),h=it(o,p)&&nt(o,p);if(!(l&&q&&h||!l&&!q&&I))return null;const c=ot(n,o,p);if(c==null)return null;if(a[i.originX]=c.x,a[i.originY]=c.y,a[i.originZ]=c.z??0,d!=null){const{translation:R,scale:y,rotation:g}=d,m=l?1:N(o)/N(p);a[i.translationX]=R[0]*m,a[i.translationY]=R[2]*m,a[i.translationZ]=-R[1]*m,a[i.scaleX]=y[0],a[i.scaleY]=y[2],a[i.scaleZ]=y[1],a[i.rotationX]=g[0],a[i.rotationY]=g[2],a[i.rotationZ]=-g[1],a[i.rotationDeg]=g[3]}return{attributes:a}}return r==null?{attributes:a}:r.type==="mesh"||r.type==="extent"?null:{geometry:r.toJSON(),attributes:a}}async function Rt(e,t){const s=await Promise.all((t.addAttachments??[]).map(i=>C(e,i))),r=await Promise.all((t.updateAttachments??[]).map(i=>C(e,i))),a=t.deleteAttachments??[];return s.length||r.length||a.length?{adds:s,updates:r,deletes:[...a]}:null}async function C(e,t){const{feature:s,attachment:r}=t,{globalId:a,name:i,contentType:n,data:o,uploadId:u}=r,d={globalId:a};if(s&&("attributes"in s?d.parentGlobalId=s.attributes?.[e.globalIdField]:s.globalId&&(d.parentGlobalId=s.globalId)),u)d.uploadId=u;else if(o){const l=await j(o);l&&(d.contentType=l.mediaType,d.data=l.data),o instanceof File&&(d.name=o.name)}return i&&(d.name=i),n&&(d.contentType=n),d}function St(e,t,s){if(!t||t.length===0)return[];if(s&&lt(t))return t.map(a=>a.globalId);if(dt(t))return t.map(a=>a.objectId);const r=s?e.globalIdField:e.objectIdField;return r?t.map(a=>a.getAttribute(r)):[]}function _t(e){const t=e?.assetMaps;if(t){for(const a of t.addResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`);for(const a of t.updateResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`)}const s=e?.attachments,r={addFeatureResults:e?.addResults?.map(b)??[],updateFeatureResults:e?.updateResults?.map(b)??[],deleteFeatureResults:e?.deleteResults?.map(b)??[],addAttachmentResults:s?.addResults?s.addResults.map(b):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(b):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(b):[]};return e?.editMoment&&(r.editMoment=e.editMoment),r}function b(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new S("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function F(e,t){return new P({attributes:e.attributes,geometry:Q({...e.geometry,spatialReference:t})})}function Et(e,t){return{adds:e?.adds?.map(s=>F(s,t))||[],updates:e?.updates?.map(s=>({original:F(s[0],t),current:F(s[1],t)}))||[],deletes:e?.deletes?.map(s=>F(s,t))||[],spatialReference:t}}function Ot(e){const t=e.details.raw,s=+t.code,r=+t.extendedCode;return s===500&&(r===-2147217144||r===-2147467261)}const At=new L({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Ft=new L({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let _=class extends G{constructor(e){super(e),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=H(async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,s=this._fetchService(t,{...e}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e)).then(()=>this._ensureLatestMetadata(e));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([B(()=>{const e=this.layer;return e&&"lastEditsEventDate"in e?e.lastEditsEventDate:null},e=>this._handleLastEditsEventChange(e))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:e,parsedUrl:t,gdbVersion:s,spatialReference:r,fieldsIndex:a}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=D("featurelayer-pbf")&&e?.query.supportsFormatPBF&&i==null,u=e?.operations?.supportsQueryAttachments??!1;return new pt({url:t.path,pbfSupported:o,fieldsIndex:a,infoFor3D:i,dynamicDataSource:n,gdbVersion:s,sourceSpatialReference:r,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:s}=this;await A(s,"editing");const r=e.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,i.query);try{const o=await f(a,{body:n});return b(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(e,t,s){await this.load();const{layer:r}=this;await A(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(s,n.query);try{const u=await f(i,{body:o});return b(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const{layer:s}=this;await A(s,"editing");const r="infoFor3D"in s?s.infoFor3D:null,a=r!=null,i=a||(t?.globalIdUsed??!1),n=a?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,o=e.addFeatures?.map(w=>J(this.layer,w,r))??[],u=(await Promise.all(o)).filter(v),d=e.updateFeatures?.map(w=>J(this.layer,w,r))??[],l=(await Promise.all(d)).filter(v),p=St(this.layer,e.deleteFeatures,i);mt(u,l,s.spatialReference);const q=await Rt(this.layer,e),I=s.capabilities.editing.supportsAsyncApplyEdits&&a,h=t?.gdbVersion||s.gdbVersion,c={gdbVersion:h,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:I};await wt(this.layer.url,h,!0);const R=bt(this.layer.url,h||null);if(await qt(s.url,h,s.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");t?.returnServiceEditsOption?(c.edits=JSON.stringify([{id:s.layerId,adds:u.length?u:null,updates:l.length?l:null,deletes:p.length?p:null,attachments:q,assetMaps:n}]),c.returnServiceEditsOption=At.toJSON(t?.returnServiceEditsOption),c.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(c.adds=u.length?JSON.stringify(u):null,c.updates=l.length?JSON.stringify(l):null,c.deletes=p.length?i?JSON.stringify(p):p.join(","):null,c.attachments=q&&JSON.stringify(q),c.assetMaps=n!=null?JSON.stringify(n):void 0);const y=this._getLayerRequestOptions({method:"post",query:c});R&&(y.authMode="immediate",y.query.returnEditMoment=!0,y.query.sessionId=It);const g=t?.returnServiceEditsOption?s.url:s.parsedUrl.path;let m;try{m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}catch(w){if(!Ot(w))throw w;y.authMode="immediate",m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}return this._createEditsResult(m)}async deleteAttachments(e,t){await this.load();const{layer:s}=this;await A(s,"editing");const r=e.attributes[s.objectIdField],a=s.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await f(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(b)}catch(i){throw this._createAttachmentErrorResult(r,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const s=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:i}=await f(`${a}/${r}`,s),{id:n,extent:o,fullExtent:u,timeExtent:d}=i,l=o||u;return{id:n,fullExtent:l&&X.fromJSON(l),timeExtent:d&&gt.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){await this.load();const s=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});if(e.outStatistics?.length&&s.features.length){const r=new Map;if(s.features.forEach(a=>{const i=a.attributes;e.outStatistics?.forEach(({outStatisticFieldName:n})=>{if(n){const o=n.toLowerCase();o&&o in i&&n!==o&&(i[n]=i[o],delete i[o],r.set(o,n))}})}),s.fields!=null)for(const a of s.fields){const i=r.get(a.name.toLowerCase());i!=null&&(a.name=i)}}return s}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryAttributeBins(e,t){return await this.load(),this.queryTask.executeAttributeBinsQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!Z(this.layer.url))return"unavailable";const e=T(this.layer.url,"status"),t=await f(e,{query:{f:"json"}});return Ft.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:s}=await M(()=>import("./uploadAssets-CwxR-RHc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url);return s(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}_handleLastEditsEventChange(e){const t=this.layer;if(e==null||!("capabilities"in t)||!("effectiveCapabilities"in t)||!(!t.capabilities?.operations?.supportsEditing&&t.effectiveCapabilities?.operations?.supportsEditing))return;const s=t.url;s!=null&&("layerId"in t&&T(s,t.layerId.toString()),this._getOrCreateEditInterceptor(s).before=r=>{const a=r.requestOptions.method??"auto";if(a==="auto"||a==="head"){const i=r.requestOptions.query??{};i._ts=e.getTime(),r.requestOptions.query=i}})}_getOrCreateEditInterceptor(e){return this._editInterceptor==null&&(this._editInterceptor={urls:e},$.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(z($.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,t){const s=(await f(e,t)).data.statusUrl;for(;;){const r=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return f(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await Y(xt)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};D("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const s=e.type;if(!this.supportedSourceTypes.has(s))throw new S("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(e,t){if(e.type!=="Table"&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const s=ct(e.geometryType).renderer;W("drawingInfo.renderer",s,e)}if(e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e.extent==null)try{const{data:s}=await f(this.layer.url,this._getLayerRequestOptions({signal:t}));s.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){K(s)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length||await this._areAllAssetsAlreadyMapped(t))return null;const s=e.addFeatures.filter(i=>i.geometry);if(t.length!==s.length+e.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,a=new Map;for(const i of t){const{geometry:n}=i,{vertexSpace:o}=n;if(at(o))r.push(n);else{const u=n.origin,{convertMeshVertexSpace:d}=await M(async()=>{const{convertMeshVertexSpace:p}=await import("./convertMeshVertexSpace-DhfKSw3p.js");return{convertMeshVertexSpace:p}},__vite__mapDeps([19,1,2,3,20,21,22,23,10,13,9,11,15,24,25,26,27,28,29,30,31,32,33,16,34]),import.meta.url),l=await d(n,new st({origin:[u.x,u.y,u.z??0]}));a.set(l,n),i.geometry=l,r.push(l)}}await this.uploadAssets(r);for(const[i,n]of a)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(t),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const a of e){const i=a.geometry,{metadata:n}=i,o=n.getExternalSourcesOnService(r),u=a.getAttribute(s);if(o.length===0){x.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(rt)??o[0];for(const l of d)l.parts.length===1?t.push({globalId:et(),parentGlobalId:u,assetName:l.assetName,assetHash:l.parts[0].partHash,flags:[]}):x.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(t))for(const n of t)r.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===s&&(a={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=_t(a);if(r.length>0){i.editedFeatureResults=[];for(const n of r){const{editedFeatures:o}=n,u=o?.spatialReference?new tt(o.spatialReference):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:Et(o,u)})}}return i}_createAttachmentErrorResult(e,t){const s=t.details.messages?.[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new S("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const a=t[r];a!=null&&(s.set?s.set(r,a):s.append(r,a))}return s}_getLayerRequestOptions(e={}){const{layer:t,layer:{parsedUrl:s,gdbVersion:r}}=this;return{...e,query:{gdbVersion:r,layer:"dynamicDataSource"in t&&t.dynamicDataSource?JSON.stringify({source:t.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _areAllAssetsAlreadyMapped(e){const{layer:t}=this,{globalIdField:s,parsedUrl:r}=t,a="infoFor3D"in t?t.infoFor3D:null;if(a==null||s==null)return!1;const i=ht(a);if(i==null)return!1;const n=T(r.path,`../${i.id}`),o=new Array;for(const h of e){if(!(h.geometry.metadata.getExternalSourcesOnService(r).length>0))return!1;o.push(h)}const u=o.map(h=>h.getAttribute(s)).filter(v);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:l}}=a,p=new ft({where:`${d} IN (${u.map(h=>`'${h}'`)})`,outFields:[l,d],returnGeometry:!1}),q=await yt(n,p),{features:I}=q;return I.length!==0&&!o.some(h=>{const c=h.getAttribute(s);if(!c)return!0;const{metadata:R}=h.geometry,y=I.filter(m=>m.getAttribute(d)===c);if(y.length===0)return!0;const g=y.map(m=>m.getAttribute(l));return R.getExternalSourcesOnService(r).flatMap(({source:m})=>m.flatMap(w=>w.parts.map(k=>k.partHash))).some(m=>g.every(w=>m!==w))})}};E([O()],_.prototype,"type",void 0),E([O({constructOnly:!0})],_.prototype,"layer",void 0),E([O({constructOnly:!0})],_.prototype,"supportedSourceTypes",void 0),E([O({readOnly:!0})],_.prototype,"queryTask",null),_=E([V("esri.layers.graphics.sources.FeatureLayerSource")],_);const xt=1e3,Je=_;export{Je as default};
