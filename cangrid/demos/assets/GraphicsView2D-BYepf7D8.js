import { cE as p$3, d2 as ot, k3 as ht, da as e, k4 as at, k5 as o, k6 as l$1, aE as j, ak as u$3, k7 as m, ag as m$1, V as has, h5 as L, k8 as E, k9 as i, al as s$1, as as a$3, cS as u$4, dX as s$2, cZ as Z, b2 as d$2, q, ka as d$3, J as s$5, ar as s$6, kb as O$1, aq as f, kc as y$1, kd as N, ke as f$1, ij as n$3, aW as e$1, aX as y$2, aY as c$1, dY as S$1 } from './main-BTSMlyeL.js';
import { W, J, d as d$1, U, K, n as n$2 } from './UpdateTracking2D-CheeO-eZ.js';
import { a as a$1, O } from './definitions-slUvtMCM.js';
import { b as b$1 } from './WGLContainer-mgfhTYoc.js';
import { M, p as p$4, b, s as s$3, a as s$4, n, c as n$1 } from './AttributeStore-z36yU6Rv.js';
import { s, y, z, a as h, p as p$2, S, u as u$2, x, b as a$4, t as t$1 } from './FeatureCommandQueue-B8ce-tch.js';
import { a as a$2 } from './normalizeUtilsSync-CKEbQ_DI.js';
import { x as x$1, j as j$1 } from './timeSupport-BOfwCNDE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function l(l,o,p){const m=[],u={scaleInfo:s(l),scaleExpression:null};for(const e of o)switch(e.type){case"marker":m.push(...u$2(p.instances.marker,e,x,u));break;case"fill":null==e.spriteRasterizationParam?m.push(...p$2(p.instances.fill,e,u)):m.push(...S(p.instances.complexFill,e,!1,u));break;case"line":e.spriteRasterizationParam?m.push(...z(p.instances.texturedLine,e,!1,u)):m.push(...h(p.instances.line,e,!1,u));break;case"text":m.push(...y(p.instances.text,e,x,u));}return m}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class c extends M{static from(t,e,r){return new c(t,e,r)}constructor(t,e,r){super(r),this._items=t,this._tile=e,this._index=-1,this._cachedGeometry=null;const s=e.lod;s.wrap&&(this._wrappingInfo={worldSizeX:s.worldSize[0]});}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(t){return null!=this._current.attributes[t]}field(t){return this.readAttribute(t)}get geometryType(){const t=p$3(this._current.geometry);return "esriGeometryPoint"===t?"esriGeometryMultipoint":t}getCursor(){return this.copy()}copy(){const t=new c(this._items,this._tile,this.metadata);return this.copyInto(t),t}copyInto(t){super.copyInto(t),t._cachedGeometry=this._cachedGeometry,t._index=this._index;}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return !!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return !1}get hasM(){return !1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(t){this._index=t;}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let t=ot(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(t=ht(new e,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=at(new e,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry);}return this._cachedGeometry}_wrapGeometry(t){if(!this._wrappingInfo)return;const{worldSizeX:e}=this._wrappingInfo;if(t.isPoint)return 1===e?(t.coords.push(a$1,0),t.coords.push(2*-a$1,0),void t.lengths.push(3)):2===e?(t.coords.push(2*a$1,0),t.coords.push(4*-a$1,0),void t.lengths.push(3)):void this._wrapVertex(t.coords,0,2,e);if("esriGeometryMultipoint"!==this.geometryType);else {if(1===e){const e=t.coords.slice();e[0]-=512;const r=t.coords.slice();r[0]+=512,t.coords.push(...e,...r);const s=t.lengths[0];return void t.lengths.push(s,s)}this._wrapVertex(t.coords,0,2,e);}}_wrapVertex(t,e,r,s){const i=e*r,o=t[i];o<-a$1*(s-2)?t[i]=o+a$1*s:o>a$1*(s-1)&&(t[i]=o-a$1*s);}_readX(){const t=this._readGeometry();return null!=t?t.coords[0]:0}_readY(){const t=this._readGeometry();return null!=t?t.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const t=l$1(this._current.projectedGeometry),r=new e([],t);return at(new e,r,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e$1=this._current.projectedGeometry,r=o(e$1.paths,this.hasZ),s=new e([],r);return at(new e,s,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(t,e){const r=this._current.attributes[t];if(void 0!==r)return r;const s=t.toLowerCase();for(const i in this._current.attributes)if(i.toLowerCase()===s)return this._current.attributes[i]}_readAttributes(){return this._current.attributes}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const a=50;function u$1(e){if(!e)return null;const{xmin:t,ymin:i,xmax:r,ymax:o,spatialReference:s}=e;return new j({rings:[[[t,i],[t,o],[r,o],[r,i],[t,i]]],spatialReference:s})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$1 = class p{static fromGraphic(t,e,s,r){return new p(t.geometry,e,t.attributes,t.visible,t.uid,s,r)}constructor(e,s,r,i,o,m,p){this.geometry=e,this.symbol=s,this.attributes=r,this.visible=i,this.objectId=o,this.zOrder=m,this.displayId=p,this.bounds=u$3(),this.prevBounds=u$3(),this.size=[0,0,0,0];}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}update(e,s,r){return (this.geometry!==e.geometry||this.attributes!==e.attributes||this.symbol!==s||this.zOrder!==r||this.visible!==e.visible)&&(this.prevBounds=this.bounds,this.bounds=u$3(),this.zOrder=r,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=s,this.visible=e.visible,this.symbolResource=null,this.projectedGeometry=null,!0)}async projectAndNormalize(t){let p=this.geometry;if(!p||!p.spatialReference||"mesh"===p.type)return;"extent"===p.type&&(p=u$1(p)),await x$1(p.spatialReference,t);const h=a$2(p);if(!h)return;const a=j$1(h,p.spatialReference,t);a&&m(a),this.projectedGeometry=m$1(a)?u$1(a):a;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(t,e,d){this.added=t,this.updated=e,this.removed=d;}hasAnyUpdate(){return !!(this.added.length||this.updated.length||this.removed.length)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u=1e-5;function d(e,t){return t.zOrder-e.zOrder}class p{constructor(e,t,s,o,i){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new W(t),this._tileInfoView=s,this._store=i;const r=s.getClosestInfoForScale(o);this._resolution=this._tileInfoView.getTileResolution(r.level);}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t$1,s){const o=[],i=[],r=[],n=new Set,m=[];let l=0;for(const c of e.items){l++;const e=c.uid,r=this._items.get(e),h=t$1(c);if(n.add(e),r){r.update(c,h,l)&&(i.push(r),m.push(this._updateItem(r,s)));continue}const u=this._store.createDisplayIdForObjectId(e),d=p$1.fromGraphic(c,h,l,u);m.push(this._updateItem(d,s)),this._items.set(d.objectId,d),o.push(d);}for(const[a,c]of this._items.entries())n.has(a)||(this._store.releaseDisplayIdForObjectId(a),this._items.delete(a),r.push(c));return await Promise.all(m),this._index=null,new t(o,i,r)}updateLevel(e){this._resolution!==e&&(this._index=null,this._boundsDirty=!0,this._resolution=e);}hitTest(e,t,i,n,m){const l=has("esri-mobile"),a$1=has(l?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance"),h=a$1+(l?0:has("hittest-2d-small-symbol-tolerance"));e=L(e,this._tileInfoView.spatialReference);const u=n*window.devicePixelRatio*h,p=u$3();p[0]=e-u,p[1]=t-u,p[2]=e+u,p[3]=t+u;const _=n*window.devicePixelRatio*a$1,f=u$3();f[0]=e-_,f[1]=t-_,f[2]=e+_,f[3]=t+_;const b=.5*n*(h+a),y=this._searchIndex(e-b,t-b,e+b,t+b);if(!y||0===y.length)return [];const I=[],g=u$3(),j=u$3();for(const s of y){if(!s.visible)continue;const{projectedGeometry:e,symbolResource:t}=s;this._getSymbolBounds(g,t,e,j,m),j[3]=j[2]=j[1]=j[0]=0,E(g,p)&&I.push(s);}if(0===I.length)return [];const x=this._hittestDrawHelper,w=[];for(const s of I){const{projectedGeometry:e,symbolResource:t}=s;if(!t)continue;const{textInfo:o,symbolInfo:i}=t,r=i.cimSymbol;x.hitTest(f,r.symbol,e,o,m,n)&&w.push(s);}return w.sort(d),w.map((e=>e.objectId))}queryItems(e){return 0===this._items.size?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null;}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);const{size:s}=e;s[0]=s[1]=s[2]=s[3]=0,this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0);}_searchIndex(e,s,o,i$1){return this._boundsDirty&&(this._items.forEach((e=>this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0))),this._boundsDirty=!1),this._index||(this._index=i(9,(e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}))),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:s,maxX:o,maxY:i$1})}_searchForItems(e){const t=this._tileInfoView.spatialReference,o=e.bounds,i=s$1(t);if(i&&t.isWrappable){const[t,r]=i.valid,n=Math.abs(o[2]-r)<u,m=Math.abs(o[0]-t)<u;if((!n||!m)&&(n||m)){const i=e.resolution;let m;m=u$3(n?[t,o[1],t+i*a,o[3]]:[r-i*a,o[1],r,o[3]]);const l=this._searchIndex(o[0],o[1],o[2],o[3]),a$1=this._searchIndex(m[0],m[1],m[2],m[3]);return [...new Set([...l,...a$1])]}}return this._searchIndex(o[0],o[1],o[2],o[3])}_getSymbolBounds(t,o,r,n,m){if(!o||!o.symbolInfo.linearCIM||!r)return null;if(t||(t=u$3()),a$3(t,r),!n||0===n[0]&&0===n[1]&&0===n[2]&&0===n[3]){const{textInfo:t,symbolInfo:s}=o,i=s.cimSymbol;n||(n=[0,0,0,0]);const r=J.getSymbolInflateSize(n,i.symbol,this._cimResourceManager,m,t);n[0]=u$4(r[0]),n[1]=u$4(r[1]),n[2]=u$4(r[2]),n[3]=u$4(r[3]);}const a=this._resolution,c=J.safeSize(n);return t[0]-=c*a,t[1]-=c*a,t[2]+=c*a,t[3]+=c*a,t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class F{static getOrCreate(e,t,s){let r=t.get(e.id);return r||(r=new F(e,s),t.set(e.id,r)),r}static fromItems(e,t,s){const r=new F(e,s);return r.addedOrModified.push(...t),r}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[];}get reader(){return this._reader||(this._reader=c.from(this.addedOrModified,this.tile,this.metadata)),this._reader}}let V=class extends(s$2(S$1)){constructor(e){super(e),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new d$1({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new a$4({process:e=>{switch(e.type){case"processed-edit":throw new Error("InternalError: Unsupported command");case"update":return this._update()}}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this);}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy();}_initAttributeStore(){this._storage=new p$4({spatialReference:this.view.spatialReference,fields:new Z}),this._attributeStore=new b({isLocal:!0,update:async e=>{has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e});const t=this.container.attributeView.requestUpdate(e);this.container.requestRender(),await t,has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e});}});const e=t$1(null,[]);this._attributeStore.update(e,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight;}initialize(){this._initAttributeStore(),this._metadata=s$3.create(this.view.spatialReference),this._resourceProxy=new s$4({fetch:e=>Promise.all(e.map((e=>this.view.stage.textureManager.rasterizeItem(e)))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([d$2((()=>this._effectiveRenderer),(()=>this._pushUpdate())),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.addHandles([this.graphics.on("change",(()=>this._pushUpdate()))]),this._graphicStore=new p(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate();}))]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const e=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:e,removed:[]});}get _effectiveRenderer(){return "function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const e=!this._attached||this._updateTracking.updating;return has("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${e}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`),e}hitTest(e){if(!this.view||this.view.suspended)return [];const{resolution:t,rotation:r}=this.view.state,i=this._graphicStore.hitTest(e.x,e.y,2,t,r),o=new Set(i),a=this.graphics.items.reduce(((e,t)=>(o.has(t.uid)&&e.set(t.uid,t),e)),new Map);return i.map((e=>a.get(e))).filter(q)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating");}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e));}viewChange(){this.requestUpdate();}setHighlight(e){const t=[];for(const{objectId:s,highlightFlags:r}of e){const e=this._graphicStore.getItem(s)?.displayId;t.push({objectId:s,highlightFlags:r,displayId:e});}this._attributeStore.setHighlight(t,e),this._pushUpdate();}graphicUpdateHandler(e){this._pushUpdate();}update(e){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(e.state.resolution);}_pushUpdate(){d$3(this._commandQueue.push({type:"update"}));}async _update(){try{has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const e=await this._graphicStore.update(this.graphics,(e=>this._getSymbolForGraphic(e)),(e=>this._ensureSymbolResource(e)));if(!e.hasAnyUpdate())return void await this._attributeStore.sendUpdates();e.removed.length&&(this._cleanupRequired=!0),has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,e);const t=this._createTileMessages(e);await this._fetchResources(t),this._write(t);for(const s of e.added)this._setFilterState(s);for(const s of e.updated)this._setFilterState(s);has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,e),await this._attributeStore.sendUpdates(),has("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,e);}catch(e){}this._cleanupSharedResources();}_createTileMessages(e){const t=new Map;for(const s of e.added){const e=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const r of e){F.getOrCreate(r,t,this._metadata).addedOrModified.push(s);}}for(const s of e.updated){const e=this.view.graphicsTileStore.getIntersectingTiles(s.prevBounds),r=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const i of e){F.getOrCreate(i,t,this._metadata).removed.push(s.displayId);}for(const i of r){F.getOrCreate(i,t,this._metadata).addedOrModified.push(s);}}for(const s of e.removed){const e=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const r of e){F.getOrCreate(r,t,this._metadata).removed.push(s.displayId);}}return Array.from(t.values())}async _fetchResources(e){for(const{tile:t,reader:s}of e){has("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.id}] GraphicsView fetchResources`,e);const r=s.getCursor();for(;r.next();)for(const e of r.getMeshWriters())e.enqueueRequest(this._resourceProxy,r,t.createArcadeEvaluationOptions(this.view.timeZone));}await this._resourceProxy.fetchEnqueuedResources();}_write(e){for(const t of e){has("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView write`,t);const e=this._writeMeshes(t);let s=this._tiles.get(t.tile.key);s||(s=this._createFeatureTile(t.tile.key)),has("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView onTileData`,t),this.container.onTileData(s,{type:"update",modify:e,remove:t.removed,end:!1,attributeEpoch:this._attributeStore.epoch}),this.container.requestRender();}}_writeMeshes(e){const t=new n(e.tile.id),s=e.reader.getCursor();for(;s.next();){t.entityStart(s.getDisplayId(),s.getZOrder());for(const r of s.getMeshWriters())r.write(t,this._resourceProxy,s,e.tile.createArcadeEvaluationOptions(this.view.timeZone),e.tile.level);t.entityEnd();}return {...t.serialize().message,tileId:e.tile.id}}_setFilterState(e){const t=e.displayId,s=this._attributeStore.getHighlightFlags(e.objectId);this._attributeStore.setData(t,0,0,s|(e.visible?O:0));}_getSymbolForGraphic(e){return null!=e.symbol?e.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(e):this._getNullSymbol(e)}async _ensureSymbolResource(e){if(!e.symbol)return;const t=await this._getSymbolInfo(e.symbol);if(!t)return;const s=t.linearCIM.filter((e=>"text"===e.type));if(s.length>0){const r=await this._getTextResources(e,s);e.symbolResource={symbolInfo:t,textInfo:r};}else e.symbolResource={symbolInfo:t};}_getSymbolInfo(e){const t=e.hash();return this._hashToSymbolInfo.has(t)||this._hashToSymbolInfo.set(t,this._createSymbolInfo(t,e).catch((e=>null))),this._hashToSymbolInfo.get(t)}async _createSymbolInfo(e,t){const s=await this._convertToCIMSymbol(t),r=await this._createLinearCIM(s);if("text"===t.type)for(const i of r)"text"===i.type&&(i.lineWidth=t.lineWidth);return {hash:e,cimSymbol:s,linearCIM:r,meshWriters:await this._createMeshWriters(s,r)}}async _convertToCIMSymbol(e){const t=U(e);if("web-style"===t.type){return (await t.fetchCIMSymbol()).data}return t}async _createLinearCIM(e){return await Promise.all(K.fetchResources(e.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(e,!1)}async _createMeshWriters(e,t){s$5(this._controller.signal);const s=this.container.instanceStore,r=await l(e,t,s);return Promise.all(r.map((e=>n$1(this._storage,this._resourceProxy,e.meshWriterName,n$2(e.id),e.options,{tileInfo:this.view.featuresTilingScheme.tileInfo},e.optionalAttributes))))}_onTileUpdate(e){if(e.added&&e.added.length>0)for(const t of e.added)this._updateTracking.addPromise(this._addTile(t));if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key);}_createFeatureTile(e){const t=this.view.featuresTilingScheme.getTileBounds(u$3(),e),s=this.view.featuresTilingScheme.getTileResolution(e.level),r=new b$1(e,s,t[0],t[3]);return this._tiles.set(e,r),this.container.addChild(r),r}async _addTile(e){if(!this._attached)return;const t=this._graphicStore.queryItems(e);if(!t.length)return;const s=this._createFeatureTile(e.key),r=F.fromItems(e,t,this._metadata);await this._fetchResources([r]);const i=this._writeMeshes(r);s.onMessage({type:"append",append:i,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch});}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e);}_getNullSymbol(e){const t=e.geometry;return s$6(t)?O$1:f(t)||m$1(t)?y$1:this.defaultPointSymbolEnabled?N:null}async _getTextResources(e,t){const s=new Array,r=new Array;for(let i=0;i<t.length;i++){const o=t[i],{resource:a,overrides:n}=o.textRasterizationParam;if(n?.length>0){const t=f$1.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:n,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:a.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:a.symbol,textString:a.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},e,this.view.spatialReference,null,p$3(e.projectedGeometry),null,null);t.then((e=>{const t=e.symbolLayers[0],{textString:s}=t.markerGraphics[0];r.push({type:"cim-rasterization-info",resource:{type:"text",textString:s||"",font:a.font}}),o.text=a.textString=s||"";})),s.push(t);}else r.push({type:"cim-rasterization-info",resource:a});}s.length>0&&await Promise.all(s);const o=r.map((e=>this.view.stage.textureManager.rasterizeItem(e))),a=await Promise.all(o);n$3(a);const n=new Map;for(let i=0;i<t.length;i++){const e=t[i];n.set(e.textRasterizationParam.resource.symbol,{text:e.text,glyphMosaicItems:a[i]});}return n}_cleanupSharedResources(){if(!this._cleanupRequired)return;const e=performance.now();if(e-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=e;const t=new Set;for(const r of this._graphicStore.items()){const e=r.symbolResource?.symbolInfo.hash;t.add(e);}const s=new Set(this._hashToSymbolInfo.keys());for(const r of s.values())t.has(r)||this._hashToSymbolInfo.delete(r);}};e$1([y$2()],V.prototype,"_effectiveRenderer",null),e$1([y$2({constructOnly:!0})],V.prototype,"layerId",void 0),e$1([y$2({constructOnly:!0})],V.prototype,"requestUpdateCallback",void 0),e$1([y$2()],V.prototype,"container",void 0),e$1([y$2({constructOnly:!0})],V.prototype,"graphics",void 0),e$1([y$2()],V.prototype,"renderer",void 0),e$1([y$2()],V.prototype,"_updateTracking",void 0),e$1([y$2()],V.prototype,"updating",null),e$1([y$2()],V.prototype,"view",void 0),e$1([y$2()],V.prototype,"updateRequested",void 0),e$1([y$2()],V.prototype,"defaultPointSymbolEnabled",void 0),V=e$1([c$1("esri.views.2d.layers.support.GraphicsView2D")],V);const $=V;

export { $ };
