import{ao as st,D as g,bg as it,f as P,ci as D,bS as z,ca as v,el as M,eR as w,hc as O,k as d,o as f,A as x,aD as N,hC as U,hD as rt,hE as R,cZ as nt,az as j,aF as at,G as B,n as q,au as ot,hF as lt,dx as ut,hG as k,hH as ct,hI as V,hJ as J,bP as ht,aM as dt,B as S,aE as $,f2 as ft,b3 as _t}from"./main-DaZH2qzH.js";import{h as L}from"./UpdatingHandles-DPFk7Hc9.js";import{m as pt}from"./FeatureStore-CerprKWq.js";import{V as gt}from"./QueryEngine-9D9L2zDH.js";import{z as b}from"./TileInfo-CEE8pIWC.js";import{b as I}from"./Query-CcjqOd6H.js";import{n as yt,h as mt}from"./ElevationInfo-erg4WATj.js";import{e as G}from"./LRUCache-lITImZiS.js";import{e as Q}from"./uuid-Dj9mdEVg.js";import{i as Ft,c as Ct,g as Et}from"./featureConversionUtils-Dce1sc_3.js";import{g as Tt}from"./arcgisLayerUrl-CE-CBuff.js";import{a as vt}from"./pbfQueryUtils-DcGpryV2.js";import{x as St,f as bt,c as It,S as wt}from"./query-C53mQ9lf.js";import{E as Ot}from"./ByteSizeUnit-DL8UhsB0.js";import{o as xt}from"./BoundsStore-lEcr_Lgv.js";import{t as Rt}from"./TileKey-B_6qmYK-.js";function Z(t=!1,e){if(t){const{elevationInfo:s,alignPointsInFeatures:i}=e;return new Pt(s,i)}return new At}let At=class{async alignCandidates(t,e,s){return t}notifyElevationSourceChange(){}};const Ht=1024;let Pt=class{constructor(t,e){this._elevationInfo=t,this._alignPointsInFeatures=e,this._alignmentsCache=new G(Ht),this._cacheVersion=0}async alignCandidates(t,e,s){const i=this._elevationInfo;return i==null||i.mode!=="absolute-height"||i.featureExpressionInfo?this._alignComputedElevationCandidates(t,e,s):(zt(t,e,i),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(t,e,s){const i=new Map;for(const p of t)st(i,p.objectId,Mt).push(p);const[r,n,a]=this._prepareQuery(i,e),o=await this._alignPointsInFeatures(r,s);if(g(s),a!==this._cacheVersion)return this._alignComputedElevationCandidates(t,e,s);this._applyCacheAndResponse(r,o,n);const{drapedObjectIds:l,failedObjectIds:c}=o,h=[];for(const p of t){const{objectId:y}=p;l.has(y)&&p.type==="edge"&&(p.draped=!0),c.has(y)||h.push(p)}return h}_prepareQuery(t,e){const s=[],i=[];for(const[r,n]of t){const a=[];for(const o of n)this._addToQueriesOrCachedResult(r,o.target,a,i),o.type==="edge"&&(this._addToQueriesOrCachedResult(r,o.start,a,i),this._addToQueriesOrCachedResult(r,o.end,a,i));a.length!==0&&s.push({objectId:r,points:a})}return[{spatialReference:e.toJSON(),pointsInFeatures:s},i,this._cacheVersion]}_addToQueriesOrCachedResult(t,e,s,i){const r=W(t,e),n=this._alignmentsCache.get(r);n==null?s.push(e):i.push(new Dt(e,n))}_applyCacheAndResponse(t,{elevations:e,drapedObjectIds:s,failedObjectIds:i},r){for(const o of r)o.apply();let n=0;const a=this._alignmentsCache;for(const{objectId:o,points:l}of t.pointsInFeatures){if(i.has(o)){n+=l.length;continue}const c=!s.has(o);for(const h of l){const p=W(o,h),y=e[n++];h.z=y,c&&a.put(p,y,1)}}}};class Dt{constructor(e,s){this.point=e,this.z=s}apply(){this.point.z=this.z}}function W(t,{x:e,y:s,z:i,spatialReference:r}){return`${t}-${e}-${s}-${i??0}}-wkid:${r?.wkid}`}function zt(t,e,s){const{offset:i,unit:r}=s;if(i==null)return;const n=it(e),a=i*(yt(r??"meters")/n);for(const o of t)switch(o.type){case"edge":o.start.z+=a,o.end.z+=a;continue;case"vertex":o.target.z+=a;continue}}function Mt(){return[]}let Nt=class{filter(t,e){return e}notifyElevationSourceChange(){}},Ut=class{filter(t,e){const{point:s,distance:i}=t,{z:r}=s;if(r==null||e.length===0)return e;const n=Vt(i),a=this._updateCandidatesTo3D(e,s,n).filter(jt);return a.sort(Jt),a}_updateCandidatesTo3D(t,e,s){for(const i of t)switch(i.type){case"edge":Bt(i,e,s);continue;case"vertex":kt(i,e,s);continue}return t}};function jt(t){return t.distance<=1}function K(t=!1){return t?new Ut:new Nt}function Bt(t,e,{x:s,y:i,z:r}){const{start:n,end:a,target:o}=t;t.draped||qt(o,e,n,a);const l=(e.x-o.x)/s,c=(e.y-o.y)/i,h=(e.z-o.z)/r;t.distance=Math.sqrt(l*l+c*c+h*h)}function qt(t,e,s,i){const r=i.x-s.x,n=i.y-s.y,a=i.z-s.z,o=r*r+n*n+a*a,l=(e.x-s.x)*r+(e.y-s.y)*n+a*(e.z-s.z),c=Math.min(1,Math.max(0,l/o)),h=s.x+r*c,p=s.y+n*c,y=s.z+a*c;t.x=h,t.y=p,t.z=y}function kt(t,e,{x:s,y:i,z:r}){const{target:n}=t,a=(e.x-n.x)/s,o=(e.y-n.y)/i,l=(e.z-n.z)/r,c=Math.sqrt(a*a+o*o+l*l);t.distance=c}function Vt(t){return typeof t=="number"?{x:t,y:t,z:t}:t}function Jt(t,e){return t.distance-e.distance}function X(t=!1,e){return t?new Gt(e):new $t}class $t{async fetch(){return[]}notifySymbologyChange(){}}const Lt=1024;let Gt=class{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new G(Lt),this._cacheVersion=0}async fetch(t,e){if(t.length===0)return[];const s=[],i=[],r=this._candidatesCache;for(const h of t){const p=Y(h),y=r.get(p);if(y)for(const E of y)i.push(P(E));else s.push(h),r.put(p,[],1)}if(s.length===0)return i;const n=this._cacheVersion,{candidates:a,sourceCandidateIndices:o}=await this._getSymbologyCandidates(s,e);if(g(e),n!==this._cacheVersion)return this.fetch(t,e);const l=[],{length:c}=a;for(let h=0;h<c;++h){const p=a[h],y=Y(s[o[h]]),E=r.get(y);E.push(p),r.put(y,E,E.length),l.push(P(p))}return i.concat(l)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}};function Y(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,i=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return D(i).toString()}case"edge":{const{objectId:e,start:s,end:i}=t,r=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return D(r).toString()}default:return""}}class Qt{constructor(e,s){this.data=e,this.resolution=s,this.state={type:u.CREATED},this.alive=!0}process(e){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case u.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case u.CREATED:return"created";case u.FETCH_COUNT:return"fetch-count";case u.FETCHED_COUNT:return"fetched-count";case u.FETCH_FEATURES:return"fetch-features";case u.FETCHED_FEATURES:return"fetched-features";case u.DONE:return"done"}}_gotoFetchCount(e,s){return{type:u.FETCH_COUNT,previous:e,task:v(async i=>{const r=await M(s.fetchCount(this,i));this.state.type===u.FETCH_COUNT&&(this.state=Zt(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(e,s){return{type:u.FETCH_FEATURES,previous:e,task:v(async i=>{const r=await M(s.fetchFeatures(this,e.featureCount,i));this.state.type===u.FETCH_FEATURES&&(this.state=Wt(this.state,r.ok?r.value:[]))})}}_goToDone(e,s){return s.finish(this,e.features),{type:u.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:u.CREATED},e.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:e.task.abort()}}intersects(e){return e==null||!this.data.extent||(w(e,tt),O(this.data.extent,tt))}}function Zt(t,e){return{type:u.FETCHED_COUNT,featureCount:e,previous:t}}function Wt(t,e){return{type:u.FETCHED_FEATURES,previous:t,features:e}}var u;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(u||(u={}));const tt=z();let _=class extends N{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const e=this._get("outFields"),s=U(t,this._mandatoryOutFields);rt(s,e)||(this._set("outFields",s),R(s,e)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const e=this._get("filter"),s=this._filterProperties(t);JSON.stringify(e)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(t){const e=this._get("customParameters");JSON.stringify(e)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const e=this._get("tileInfo");e!==t&&(t!=null&&e!=null&&JSON.stringify(t)===JSON.stringify(e)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this._historicMoment=null,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new L}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,e)=>{nt(t,e,({id:s},{id:i})=>s===i)||this._process()},j),this.addHandles(at(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}async handleEdits(t){if(t.historicMoment&&(this._historicMoment=t.historicMoment),!t.addedFeatures.length&&!t.updatedFeatures.length&&!t.deletedFeatures.length)return;for(const i of this._pendingTiles.values())i.reset();const e={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))},s=v(async i=>{try{await this.store.processEdits(e,(r,n)=>this._queryFeaturesById(r,n),i),this._processPendingTiles()}catch(r){B(r),q.getLogger(this).warn("Failed to apply edits",r)}});this.addHandles(s),await this._updatingHandles.addPromise(s.promise)}setHistoricMoment(t){t?.getTime()!==this._historicMoment?.getTime()&&(this._historicMoment=t,this.refresh())}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!Tt(this.url))return;const t=v(async e=>{try{const s=await St(this.url,new I({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=ot.fromJSON(s.data?.extent)}catch(s){B(s),q.getLogger(this).warn("Failed to fetch data extent",s)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(t)}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const t of this._pendingTiles.values())t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:e,resolution:s}of t.missingTiles){const i=this._pendingTiles.get(e.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(e,s)}}_collectMissingTilesInfo(){let t=null;for(let e=this.tilesOfInterest.length-1;e>=0;e--){const s=this.tilesOfInterest[e],i=this.store.process(s,(r,n)=>this._verifyTileComplexity(r,n),this.outFields);t==null?t=i:t.prepend(i)}return t}_deletePendingTiles(){for(const t of this._pendingTiles.values())t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(e,s)=>this._fetchCount(e,s),fetchFeatures:(e,s,i)=>this._fetchFeatures(e,s,i),finish:(e,s)=>this._finishPendingTile(e,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const e of this._pendingTiles.values())this._verifyTileComplexity(this.store.getFeatureCount(e.data),e.resolution)&&this._updatingHandles.addPromise(e.process(t))}_verifyTileComplexity(t,e){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,e)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Xt}_verifyFeatureDensity(t,e){if(this.tileInfo==null)return!1;const s=this.tileSize*e;return t*(Yt/(s*s))<te}_ensureFetchAllCounts(t){let e=!0;for(const s of this._pendingTiles.values())s.state.type<u.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(t)),s.state.type<=u.FETCH_COUNT&&(e=!1);return e}_finishPendingTile(t,e){this.store.add(t.data,e),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,e){const s=new Qt(t,e);return this._pendingTiles.set(t.id,s),s}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,e){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:A,signal:e})}async _fetchFeatures(t,e,s){let i=0;const r=[];let n=0,a=e;for(;;){const o=this._createFeaturesQuery(t),l=this._setPagingParameters(o,i,a),{features:c,exceededTransferLimit:h}=await this._queryFeatures(o,s);l&&(i+=o.num),n+=c.length;for(const p of c)r.push(p);if(a=e-n,!l||!h||a<=0)return r}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const e=this.globalIdField,s=this.objectIdField;if(e==null)throw new Error("Expected globalIdField to be defined");let i=null;const r=t&&Q(t);if(this.store.featureStore.forEach(n=>{r===Q(n.attributes[e])&&(i=n.objectId??n.attributes[s])}),i==null)throw new Error(`Expected to find a feature with globalId ${t}`);return i}_queryFeaturesById(t,e){const s=this._createFeaturesQuery();return s.objectIds=t,this._queryFeatures(s,e)}_queryFeatures(t,e){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,e):this._queryFeaturesJSON(t,e)}async _queryFeaturesPBF(t,e){const{sourceSpatialReference:s}=this,{data:i}=await bt(this.url,t,new vt({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:A,signal:e});return Ft(i)}async _queryFeaturesJSON(t,e){const{sourceSpatialReference:s}=this,{data:i}=await It(this.url,t,s,{query:this._configuration.customParameters,timeout:A,signal:e});return Ct(i,this.objectIdField)}_createCountQuery(t){const e=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0),e}_createFeaturesQuery(t=null){const e=this._createBaseQuery(t),s=t?.data!=null?this.store.getAttributesForTile(t?.data?.id):null,i=U(lt(this.outFields,s??new Set),this._mandatoryOutFields);return e.outFields=Array.from(i),e.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?e.resultType="tile":this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0)),e}_createBaseQuery(t){const e=new I({returnZ:this.hasZ,returnM:!1,historicMoment:this._historicMoment,geometry:this.tileInfo!=null&&t!=null?ut(t.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(e.where=s.where,e.gdbVersion=s.gdbVersion,e.timeExtent=s.timeExtent),e.outSpatialReference=this.spatialReference,e}_setPagingParameters(t,e,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,l=i?I.MAX_MAX_RECORD_COUNT_FACTOR:1,c=l*((o||r)&&n?n:a||Kt);return t.start=e,i?(t.maxRecordCountFactor=Math.min(l,Math.ceil(s/c)),t.num=Math.min(s,t.maxRecordCountFactor*c)):t.num=Math.min(s,c),!0}};d([f({constructOnly:!0})],_.prototype,"url",void 0),d([f({constructOnly:!0})],_.prototype,"objectIdField",void 0),d([f({constructOnly:!0})],_.prototype,"globalIdField",void 0),d([f({constructOnly:!0})],_.prototype,"capabilities",void 0),d([f({constructOnly:!0})],_.prototype,"sourceSpatialReference",void 0),d([f({constructOnly:!0})],_.prototype,"spatialReference",void 0),d([f({constructOnly:!0})],_.prototype,"store",void 0),d([f({readOnly:!0})],_.prototype,"_minimumVerticesPerFeature",null),d([f()],_.prototype,"_mandatoryOutFields",null),d([f()],_.prototype,"outFields",null),d([f()],_.prototype,"suspended",void 0),d([f()],_.prototype,"_historicMoment",void 0),d([f()],_.prototype,"filter",null),d([f()],_.prototype,"customParameters",null),d([f({readOnly:!0})],_.prototype,"_configuration",null),d([f()],_.prototype,"tileInfo",null),d([f()],_.prototype,"tileSize",null),d([f()],_.prototype,"tilesOfInterest",void 0),d([f({readOnly:!0})],_.prototype,"updating",null),d([f({readOnly:!0})],_.prototype,"availability",void 0),d([f()],_.prototype,"hasZ",null),_=d([x("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],_);const Kt=2e3,A=6e5,Xt=1e6,Yt=25,te=1;class ee{constructor(){this._store=new Map,this._byteSize=0}set(e,s){this.delete(e),this._store.set(e,s),this._byteSize+=s.byteSize}delete(e){const s=this._store.get(e);return!!this._store.delete(e)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,s){for(const[i,r]of this._store){if(this._byteSize<=e)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const s=this._store.get(e);s&&(this._store.delete(e),this._store.set(e,s))}}let F=class extends N{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*Ot.MEGABYTES,this._tileBounds=new xt,this._tiles=new ee,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=z()}add(t,e){for(const r of e)this._referenceFeature(r.objectId);const s=this.featureStore.upsertMany(e),i=s.map(r=>new Set(Object.keys(r.attributes))).reduce((r,n)=>k(r,n),new Set(Object.keys(s[0]?.attributes??[])));this._addTileStorage(t,new Set(s.map(r=>r.objectId)),ie(s),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,r=>this._removeTileStorage(r))}getAttributesForTile(t){return t?this._tiles.get(t)?.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,s){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,s)}_addTileStorage(t,e,s,i){const r=t.id;this._tiles.set(r,new ae(t,e,s,i)),this._tileBounds.set(r,t.extent),this._tileFeatureCounts.set(r,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const i of t.objectIds)this._unreferenceFeature(i)===C.REMOVED&&e.push(i);this.featureStore.removeManyById(e);const s=t.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const e of this._tiles.values()){for(const s of t)e.objectIds.delete(s);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,s){if(!t.length)return;const i=(await e(t,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=Et(this._tmpBoundingRect,a.geometry,r,n);o!=null&&this._tileBounds.forEachInBounds(o,l=>{const c=this._tiles.get(l);this.featureStore.add(a);const h=a.objectId;c.objectIds.has(h)||(c.objectIds.add(h),this._referenceFeature(h),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(t,e=()=>!0,s){if(this.tileInfo==null||!t.extent||this.extent!=null&&!O(w(this.extent,this._tmpBoundingRect),t.extent))return new H(t);const i=this.getAttributesForTile(t.id);if(R(s,i))return new H(t);const r=this._createTileTree(t,this.tileInfo);return this._simplify(r,e,null,0,1),this._collectMissingTiles(t,r,this.tileInfo,s)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,s,i){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await wt(e,s,i);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const s=new et(t.level,t.row,t.col);return e.updateTileInfo(s,b.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,i=>{const r=this._tiles.get(i)?.data;r&&se(t,r)&&this._populateChildren(s,r,e,this._tileFeatureCounts.get(r.id)||0)}),s}_populateChildren(t,e,s,i){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,a=e.col>>r,o=t.row<<1,l=a-(t.col<<1)+(n-o<<1),c=t.children[l];if(c!=null)this._populateChildren(c,e,s,i);else{const h=new et(t.level+1,n,a);s.updateTileInfo(h,b.ExtrapolateOptions.POWER_OF_TWO),t.children[l]=h,this._populateChildren(h,e,s,i)}}_simplify(t,e,s,i,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),s!=null&&(s.children[i]=null),n);const a=r/2,o=a*a;let l=0;for(let c=0;c<t.children.length;c++){const h=t.children[c];l+=h!=null?this._simplify(h,e,t,c,a):o}return l===0?this._mergeChildren(t):1-l/n<le&&(this._purge(t),s!=null&&(s.children[i]=null),l=n),l}_mergeChildren(t){const e=new Set;let s,i=0;this._forEachLeaf(t,r=>{const n=this._tiles.get(r.id);if(n){s=s?k(s,n.attributeKeys):new Set(n.attributeKeys),i+=n.byteSize;for(const a of n.objectIds)e.has(a)||(e.add(a),this._referenceFeature(a));this._remove(r)}}),this._addTileStorage(t,e,i,s??new Set),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const s of t.children)s!=null&&(s.isLeaf?e(s):this._forEachLeaf(s,e))}_purge(t){if(t!=null)if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const s=t.children[e];this._purge(s),t.children[e]=null}}_collectMissingTiles(t,e,s,i){const r=new oe(s,t,this.extent);return this._collectMissingTilesRecurse(e,r,1,i),r.info}_collectMissingTilesRecurse(t,e,s,i){const r=this.getAttributesForTile(t.id),n=r&&!R(i,r);if(n&&e.addMissing(t.level,t.row,t.col,s),t.isLeaf)return;if(!t.hasChildren)return void(n||e.addMissing(t.level,t.row,t.col,s));const a=s/2;for(let o=0;o<t.children.length;o++){const l=t.children[o];l==null?e.addMissing(t.level+1,(t.row<<1)+((2&o)>>1),(t.col<<1)+(1&o),a):this._collectMissingTilesRecurse(l,e,a,i)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?C.ADDED:C.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),C.REMOVED):(e>0&&this._refCounts.set(t,e),C.UNCHANGED)}get test(){}};function se(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const s=t.level<e.level,i=s?t:e,r=s?e:t,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}function ie(t){return t.reduce((e,s)=>e+re(s),0)}function re(t){return 32+ne(t.geometry)+ct(t.attributes)}function ne(t){if(t==null)return 0;const e=V(t.lengths,4);return 32+V(t.coords,8)+e}d([f({constructOnly:!0})],F.prototype,"featureStore",void 0),d([f()],F.prototype,"tileInfo",void 0),d([f()],F.prototype,"extent",void 0),d([f()],F.prototype,"maximumByteSize",void 0),F=d([x("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);let ae=class{constructor(t,e,s,i){this.data=t,this.objectIds=e,this.byteSize=s,this.attributeKeys=i}};class et{constructor(e,s,i){this.level=e,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}let H=class{constructor(t,e=[]){this.missingTiles=e,this.fullArea=0,this.coveredArea=0,this.fullArea=J(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}},oe=class{constructor(t,e,s){this._tileInfo=t,this._extent=null,this.info=new H(e),s!=null&&(this._extent=w(s))}addMissing(t,e,s,i){const r=new Rt(null,t,e,s);this._tileInfo.updateTileInfo(r,b.ExtrapolateOptions.POWER_OF_TWO),r.extent==null||this._extent!=null&&!O(this._extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=J(r.extent))}};const le=.18751;var C;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(C||(C={}));let T=class extends ht.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=dt(),this._elevationAligner=Z(),this._elevationFilter=K(),this._symbologyCandidatesFetcher=X(),this._updatingHandles=new L,this._alignPointsInFeatures=async(t,e)=>{const s={query:t},i=await this.remoteClient.invoke("alignElevation",s,{signal:e});return g(e),i},this._getSymbologyCandidates=async(t,e)=>{const s={candidates:t,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:e});return g(e),i}}get updating(){return this._isInitializing||this._updatingHandles.updating||this._featureFetcher.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:s,timeInfo:i,fieldsIndex:r}=t.serviceInfo,{hasZ:n}=t,a=S.fromJSON(t.spatialReference);this._spatialReference=a,this._featureStore=new pt({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new gt({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new _({store:new F({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:S.fromJSON(t.serviceInfo.spatialReference),customParameters:t.configuration.customParameters});const o=t.configuration.viewType==="3d";return this._elevationAligner=Z(o,{elevationInfo:t.elevationInfo!=null?mt.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=K(o),this.addHandles([$(()=>this._featureFetcher.availability,l=>this.emit("notify-availability",{availability:l}),j),$(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),m}async setSuspended(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),this._featureFetcher.suspended=t,m}async updateOutFields(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),this._featureFetcher.outFields=new Set(t??[]),m}async fetchCandidates(t,e){await this._whenSetup.promise,g(e);const s=ce(t),i=e?.signal,r=await this._queryEngine.executeQueryForSnapping(s,i);g(i);const n=await this._elevationAligner.alignCandidates(r.candidates,S.fromJSON(t.point.spatialReference)??S.WGS84,i);g(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);g(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=t.tileInfo!=null?b.fromJSON(t.tileInfo):null,m}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),this._featureFetcher.refresh(),m}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),await ft(()=>!this.updating,e),g(e),m}async getDebugInfo(t,e){return g(e),{result:this._featureFetcher.debugInfo}}async handleEdits(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(e),await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(t)),g(e),m}async setHistoricMoment(t,e){return this._featureFetcher.setHistoricMoment(t.moment),m}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),m}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),m}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=X(t,this._getSymbologyCandidates),m}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=t.filter!=null?I.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};d([f({readOnly:!0})],T.prototype,"updating",null),d([f()],T.prototype,"_isInitializing",void 0),T=d([x("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],T);const ue=T;function ce(t){if(!t.filter)return{...t,query:{where:"1=1"}};const{distance:e,units:s,spatialRel:i,where:r,timeExtent:n,objectIds:a}=t.filter,o={geometry:t.filter.geometry?_t(t.filter.geometry):void 0,distance:e,units:s,spatialRel:i,timeExtent:n,objectIds:a,where:r??"1=1"};return{...t,query:o}}const m={result:{}};export{ue as default};
