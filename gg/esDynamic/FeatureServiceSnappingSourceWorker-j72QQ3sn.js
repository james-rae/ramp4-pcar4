import{c0 as R,a_ as T,hD as H,gu as w,hR as b,x as o,z as u,K as I,aL as x,hS as A,hT as Z,hU as O,dn as K,aN as W,X as M,n as D,b2 as Q,bz as X,hV as Y,dZ as $,hW as N,hX as U,bZ as ee,L as te,T as _,M as E,aM as B,aH as se,fG as ie,b6 as re}from"./main-DTtQVgOw.js";import{h as j}from"./UpdatingHandles-BcSpm-kR.js";import{u as ne}from"./executeQueryForSnapping-JBthhOD2.js";import{f as ae}from"./FeatureStore-BaxZqrCY.js";import{L as oe}from"./QueryEngine-BhHVxVdF.js";import{z as C}from"./TileInfo-CX3xxCCQ.js";import{b as v}from"./Query-BggNhcBe.js";import{h as le}from"./ElevationInfo-4gSCtt9l.js";import{i as z,r as q,n as L}from"./symbologySnappingCandidates-BpuCW1IR.js";import{e as k}from"./uuid-Dj9mdEVg.js";import{a as ue,f as he,p as ce}from"./featureConversionUtils-C_AE9BPE.js";import{a as de}from"./pbfQueryUtils-Dgm3VftL.js";import{x as fe,f as _e,c as pe,S as ge}from"./query-DJY5G47Q.js";import{E as ye}from"./ByteSizeUnit-DL8UhsB0.js";import{o as me}from"./BoundsStore-CB9B6KaO.js";import{t as Fe}from"./TileKey-B_6qmYK-.js";class Te{constructor(t,s){this.data=t,this.resolution=s,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,s){return{type:a.FETCH_COUNT,previous:t,task:T(async i=>{const r=await H(s.fetchCount(this,i));this.state.type===a.FETCH_COUNT&&(this.state=Ee(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(t,s){return{type:a.FETCH_FEATURES,previous:t,task:T(async i=>{const r=await H(s.fetchFeatures(this,t.featureCount,i));this.state.type===a.FETCH_FEATURES&&(this.state=Ce(this.state,r.ok?r.value:[]))})}}_goToDone(t,s){return s.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return t==null||!this.data.extent||(w(t,J),b(this.data.extent,J))}}function Ee(e,t){return{type:a.FETCHED_COUNT,featureCount:t,previous:e}}function Ce(e,t){return{type:a.FETCHED_FEATURES,previous:e,features:t}}var a;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(a||(a={}));const J=R();let c=class extends x{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const e=new Set;return this.objectIdField&&e.add(this.objectIdField),this.globalIdField&&e.add(this.globalIdField),e}set outFields(e){const t=this._get("outFields"),s=A(e,this._mandatoryOutFields);Z(s,t)||(this._set("outFields",s),O(s,t)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(e!=null&&t!=null&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.suspended=!0,this._historicMoment=null,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new j}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,()=>{this._updatePriorities(),this._process()},{sync:!0,initial:!0,equals:(e,t)=>K(e,t,({id:s},{id:i})=>s===i)}),this.addHandles(W(()=>!this.suspended,()=>this._process()))}_updatePriorities(){this.store.setPriorityOrderByKey(this.tilesOfInterest.map(e=>e.id??"")??[])}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}async handleEdits(e){if(e.historicMoment&&(this._historicMoment=e.historicMoment),!e.addedFeatures.length&&!e.updatedFeatures.length&&!e.deletedFeatures.length)return;for(const i of this._pendingTiles.values())i.reset();const t={...e,deletedFeatures:e.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))},s=T(async i=>{try{await this.store.processEdits(t,(r,n)=>this._queryFeaturesById(r,n),i),this._processPendingTiles()}catch(r){M(r),D.getLogger(this).warn("Failed to apply edits",r)}});this.addHandles(s),await this._updatingHandles.addPromise(s.promise)}setHistoricMoment(e){e?.getTime()!==this._historicMoment?.getTime()&&(this._historicMoment=e,this.refresh())}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!Q(this.url))return;const e=T(async t=>{try{const s=await fe(this.url,new v({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:t});this.store.extent=X.fromJSON(s.data?.extent)}catch(s){M(s),D.getLogger(this).warn("Failed to fetch data extent",s)}});this._updatingHandles.addPromise(e.promise.then(()=>this._process())),this.addHandles(e)}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const e of this._pendingTiles.values())e.alive=!1}_createPendingTiles(){if(this.suspended)return;const e=this._collectMissingTilesInfo();if(this._setAvailability(e==null?1:e.coveredArea/e.fullArea),e!=null)for(const{data:t,resolution:s}of e.missingTiles){const i=this._pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(const t of this.tilesOfInterest){const s=this.store.process(t,(i,r)=>this._verifyTileComplexity(i,r),this.outFields);e==null?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const e of this._pendingTiles.values())e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,i)=>this._fetchFeatures(t,s,i),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const t of this._pendingTiles.values())this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this._updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<Se}_verifyFeatureDensity(e,t){if(this.tileInfo==null)return!1;const s=this.tileSize*t;return e*(we/(s*s))<be}_ensureFetchAllCounts(e){let t=!0;for(const s of this._pendingTiles.values())s.state.type<a.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(e==null?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new Te(e,t);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:P,signal:t})}async _fetchFeatures(e,t,s){let i=0;const r=[];let n=0,l=t;for(;;){const h=this._createFeaturesQuery(e),d=this._setPagingParameters(h,i,l),{features:f,exceededTransferLimit:p}=await this._queryFeatures(h,s);d&&(i+=h.num),n+=f.length;for(const G of f)r.push(G);if(l=t-n,!d||!p||l<=0)return r}}_filterProperties(e){return e==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(t==null)throw new Error("Expected globalIdField to be defined");let i=null;const r=e&&k(e);if(this.store.featureStore.forEach(n=>{r===k(n.attributes[t])&&(i=n.objectId??n.attributes[s])}),i==null)throw new Error(`Expected to find a feature with globalId ${e}`);return i}_queryFeaturesById(e,t){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await _e(this.url,e,new de({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:P,signal:t});return ue(i)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await pe(this.url,e,s,{query:this._configuration.customParameters,timeout:P,signal:t});return he(i,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e),s=e?.data!=null?this.store.getAttributesForTile(e?.data?.id):null,i=A(Y(this.outFields,s??new Set),this._mandatoryOutFields);return t.outFields=Array.from(i),t.returnGeometry=!0,e!=null&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new v({returnZ:this.hasZ,returnM:!1,historicMoment:this._historicMoment,geometry:this.tileInfo!=null&&e!=null?$(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:l,supportsResultType:h}=this.capabilities.query,d=i?v.MAX_MAX_RECORD_COUNT_FACTOR:1,f=d*((h||r)&&n?n:l||ve);return e.start=t,i?(e.maxRecordCountFactor=Math.min(d,Math.ceil(s/f)),e.num=Math.min(s,e.maxRecordCountFactor*f)):e.num=Math.min(s,f),!0}};o([u({constructOnly:!0})],c.prototype,"url",void 0),o([u({constructOnly:!0})],c.prototype,"objectIdField",void 0),o([u({constructOnly:!0})],c.prototype,"globalIdField",void 0),o([u({constructOnly:!0})],c.prototype,"capabilities",void 0),o([u({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),o([u({constructOnly:!0})],c.prototype,"spatialReference",void 0),o([u({constructOnly:!0})],c.prototype,"store",void 0),o([u({readOnly:!0})],c.prototype,"_minimumVerticesPerFeature",null),o([u()],c.prototype,"_mandatoryOutFields",null),o([u()],c.prototype,"outFields",null),o([u()],c.prototype,"suspended",void 0),o([u()],c.prototype,"_historicMoment",void 0),o([u()],c.prototype,"filter",null),o([u()],c.prototype,"customParameters",null),o([u({readOnly:!0})],c.prototype,"_configuration",null),o([u()],c.prototype,"tileInfo",null),o([u()],c.prototype,"tileSize",null),o([u()],c.prototype,"tilesOfInterest",void 0),o([u({readOnly:!0})],c.prototype,"updating",null),o([u({readOnly:!0})],c.prototype,"availability",void 0),o([u()],c.prototype,"hasZ",null),c=o([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const ve=2e3,P=6e5,Se=1e6,we=25,be=1;class Ie{constructor(){this._store=new Map,this._priorities=new Map}get size(){return this._store.size}setPriorityOrderByKey(t){this._priorities.clear();for(let s=t.length-1;s>=0;s--)this._priorities.set(t[s],t.length-s)}hasLowerPriority(t){const s=this._priorities.get(t);if(s==null)return!0;for(const[i]of this._store){const r=this._priorities.get(i);if(r==null||r<s)return!0}return!1}someFromLowestToHighestPriority(t){const{_priorities:s}=this;for(const[i,r]of this._store)if(!s.has(i)&&t(r,i))return!0;for(const[i]of s){const r=this._store.get(i);if(r&&t(r,i))return!0}return!1}set(t,s){this._store.set(t,s)}delete(t){return this._store.delete(t)}get(t){return this._store.get(t)}has(t){return this._store.has(t)}clear(){this._store.clear()}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}}let y=class extends x{setPriorityOrderByKey(e){this._tiles.setPriorityOrderByKey(e)}get _memoryLimitExceeded(){return this.featureStore.usedMemory>=this.maximumByteSize}constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ye.MEGABYTES,this._tileBounds=new me,this._tiles=new Ie,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=R()}add(e,t){for(const n of t)this._referenceFeature(n.objectId);const s=this.featureStore.upsertMany(t),i=s.map(n=>new Set(Object.keys(n.attributes))).reduce((n,l)=>N(n,l),new Set(Object.keys(s[0]?.attributes??[]))),r=this._memoryLimitExceeded;this._addTileStorage(e,new Set(s.map(n=>n.objectId)),i),r&&this._applyCacheMemoryLimits()}_applyCacheMemoryLimits(){if(!this._memoryLimitExceeded)return;const{_tiles:e,featureStore:t,maximumByteSize:s}=this;e.someFromLowestToHighestPriority(i=>!this._memoryLimitExceeded||t.usedMemory-this._estimateRemoveTileMemoryReduction(i)<s||(this._removeTileStorage(i),!1))}_estimateRemoveTileMemoryReduction(e){let t=0;for(const s of e.objectIds)if(this._refCounts.get(s)===1){const i=this.featureStore.getFeature(s);i&&(t+=this.featureStore.estimateFeatureUsedMemory?.(i)??0)}return t}getAttributesForTile(e){return e?this._tiles.get(e)?.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){const i=e.id;this._tiles.set(i,new Pe(e,t,s)),this._tileBounds.set(i,e.extent),this._tileFeatureCounts.set(i,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===m.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const t of this._tiles.values()){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,s){if(!e.length)return;const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const l of i){const h=ce(this._tmpBoundingRect,l.geometry,r,n);h!=null&&this._tileBounds.forEachInBounds(h,d=>{const f=this._tiles.get(d);this.featureStore.add(l);const p=l.objectId;f.objectIds.has(p)||(f.objectIds.add(p),this._referenceFeature(p),this._tileFeatureCounts.set(f.data.id,f.objectIds.size))})}}process(e,t=()=>!0,s){if(this.tileInfo==null||!e.extent||this.extent!=null&&!b(w(this.extent,this._tmpBoundingRect),e.extent))return new S(e);if(this._memoryLimitExceeded&&!this._tiles.hasLowerPriority(e.id??""))return new S(e);const i=this.getAttributesForTile(e.id);if(O(s,i))return new S(e);const r=this._createTileTree(e,this.tileInfo);return this._simplify(r,t,null,0,1),this._collectMissingTiles(e,r,this.tileInfo,s)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){return this._tileFeatureCounts.get(e.id)??0}async fetchCount(e,t,s,i){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await ge(t,s,i);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const s=new V(e.level,e.row,e.col);return t.updateTileInfo(s,C.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,i=>{const r=this._tiles.get(i)?.data;r&&Oe(e,r)&&this._populateChildren(s,r,t,this._tileFeatureCounts.get(r.id)||0)}),s}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,l=t.col>>r,h=e.row<<1,d=l-(e.col<<1)+(n-h<<1),f=e.children[d];if(f!=null)this._populateChildren(f,t,s,i);else{const p=new V(e.level+1,n,l);s.updateTileInfo(p,C.ExtrapolateOptions.POWER_OF_TWO),e.children[d]=p,this._populateChildren(p,t,s,i)}}_simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),s!=null&&(s.children[i]=null),n);const l=r/2,h=l*l;let d=0;for(let f=0;f<e.children.length;f++){const p=e.children[f];d+=p!=null?this._simplify(p,t,e,f,l):h}return d===0?this._mergeChildren(e):1-d/n<He&&(this._purge(e),s!=null&&(s.children[i]=null),d=n),d}_mergeChildren(e){const t=new Set;let s;this._forEachLeaf(e,i=>{const r=this._tiles.get(i.id);if(r){s=s?N(s,r.attributeKeys):new Set(r.attributeKeys);for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(e,t,s??new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)s!=null&&(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(e!=null)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s,i){const r=new Re(s,e,this.extent);return this._collectMissingTilesRecurse(t,r,1,i),r.info}_collectMissingTilesRecurse(e,t,s,i){const r=this.getAttributesForTile(e.id),n=r&&!O(i,r);if(n&&t.addMissing(e.level,e.row,e.col,s),e.isLeaf)return;if(!e.hasChildren)return void(n||t.addMissing(e.level,e.row,e.col,s));const l=s/2;for(let h=0;h<e.children.length;h++){const d=e.children[h];d==null?t.addMissing(e.level+1,(e.row<<1)+((2&h)>>1),(e.col<<1)+(1&h),l):this._collectMissingTilesRecurse(d,t,l,i)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?m.ADDED:m.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),m.REMOVED):(t>0&&this._refCounts.set(e,t),m.UNCHANGED)}get test(){}};function Oe(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}o([u({constructOnly:!0})],y.prototype,"featureStore",void 0),o([u()],y.prototype,"tileInfo",void 0),o([u()],y.prototype,"extent",void 0),o([u()],y.prototype,"maximumByteSize",void 0),y=o([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],y);class Pe{constructor(t,s,i){this.data=t,this.objectIds=s,this.attributeKeys=i}}let V=class{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}};class S{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=U(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class Re{constructor(t,s,i){this._tileInfo=t,this._extent=null,this.info=new S(s),i!=null&&(this._extent=w(i))}addMissing(t,s,i,r){const n=new Fe(null,t,s,i);this._tileInfo.updateTileInfo(n,C.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!b(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=U(n.extent))}}const He=.18751;var m;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(m||(m={}));let F=class extends ee.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=te(),this._elevationAligner=z(),this._elevationFilter=q(),this._symbologyCandidatesFetcher=L(),this._updatingHandles=new j,this._alignPointsInFeatures=async(e,t)=>{const s={query:e},i=await this.remoteClient.invoke("alignElevation",s,{signal:t});return _(t),i},this._getSymbologyCandidates=async(e,t)=>{const s={candidates:e,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:t});return _(t),i}}get updating(){return this._isInitializing||this._updatingHandles.updating||this._featureFetcher.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:s,timeInfo:i,fieldsIndex:r}=e.serviceInfo,{hasZ:n}=e,l=E.fromJSON(e.spatialReference);this._spatialReference=l,this._featureStore=new ae({...e.serviceInfo,hasZ:n,hasM:!1}),this._featureStore.estimateFeatureUsedMemory=d=>d.usedMemory,this._queryEngine=new oe({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new c({store:new y({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:l,sourceSpatialReference:E.fromJSON(e.serviceInfo.spatialReference),customParameters:e.configuration.customParameters});const h=e.configuration.viewType==="3d";return this._elevationAligner=z(h,{elevationInfo:e.elevationInfo!=null?le.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=q(h),this.addHandles([B(()=>this._featureFetcher.availability,d=>this.emit("notify-availability",{availability:d}),se),B(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),g}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.suspended=e,g}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.outFields=new Set(e??[]),g}async fetchCandidates(e,t){await this._whenSetup.promise,_(t);const s=Ae(e),i=t?.signal,r=await ne(this._queryEngine,s,i);_(i);const n=await this._elevationAligner.alignCandidates(r.candidates,E.fromJSON(e.point.spatialReference)??E.WGS84,i);_(i);const l=await this._symbologyCandidatesFetcher.fetch(n,i);_(i);const h=l.length===0?n:n.concat(l);return{result:{candidates:this._elevationFilter.filter(s,h)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=e.tileInfo!=null?C.fromJSON(e.tileInfo):null,g}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),this._featureFetcher.refresh(),g}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),await ie(()=>!this.updating,t),_(t),g}async getDebugInfo(e,t){return _(t),{result:this._featureFetcher.debugInfo}}async handleEdits(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(t),await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(e)),_(t),g}async setHistoricMoment(e,t){return this._featureFetcher.setHistoricMoment(e.moment),g}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),g}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),g}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=L(e,this._getSymbologyCandidates),g}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=e.filter!=null?v.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};o([u({readOnly:!0})],F.prototype,"updating",null),o([u()],F.prototype,"_isInitializing",void 0),F=o([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],F);const xe=F;function Ae(e){if(!e.filter)return{...e,query:{where:"1=1"}};const{distance:t,units:s,spatialRel:i,where:r,timeExtent:n,objectIds:l}=e.filter,h={geometry:e.filter.geometry?re(e.filter.geometry):void 0,distance:t,units:s,spatialRel:i,timeExtent:n,objectIds:l,where:r??"1=1"};return{...e,query:h}}const g={result:{}};export{xe as default};
