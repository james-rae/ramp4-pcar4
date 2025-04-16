import{k as s,bk as j,A as v,v as N,d9 as B,e as D,V as G,E as M,n as c,C as u,cW as P,s as U,D as b,f as I,o,q as H,bp as S,hs as W,gu as k,aC as q,aE as J,f1 as z,aH as Q,d0 as R,c$ as K,H as V,ef as T,bP as X,aD as Y,by as E}from"./main-yxqK2SuK.js";import{s as A,F as h}from"./Basemap-DMCgqq44.js";import{o as Z}from"./compilerUtils-8LakT67V.js";import{t as ee}from"./loadAll-CZ_LOrJ4.js";import{n as _}from"./CollectionFlattener-B4OPDgLP.js";import"./mat4f32-CiZjBg9k.js";import"./mat4-CA6EAWi-.js";import{n as te,l as re,t as ae}from"./TablesMixin-Ec43PY2P.js";var w;let f=w=class extends N{constructor(e){super(e),this.type="none"}clone(){return new w({type:this.type})}};s([j({none:"none",stayAbove:"stay-above"})],f.prototype,"type",void 0),f=w=s([v("esri.ground.NavigationConstraint")],f);var L;let d=L=class extends B(D){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new G;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&c.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},a=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>a(r.item))])}initialize(){this.when().catch(e=>{M(e)||c.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)u(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",P(e,this._get("layers")))}writeLayers(e,t,a,r){const i=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(l=>{if("write"in l){const y={};Z(l)().write(y,r)&&i.push(y)}else r?.messages&&r.messages.push(new U("layer:unsupported",`Layers (${l.title}, ${l.id}) of type '${l.declaredClass}' cannot be persisted in the ground`,{layer:l}))})),t.layers=i}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return ee(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await import("./ElevationQuery-DPzn24W_.js");b(t);const r=new a,i=this.layers.filter($).toArray();return r.queryAll(i,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await import("./ElevationQuery-DPzn24W_.js");b(t);const r=new a,i=this.layers.filter($).toArray();return r.createSamplerAll(i,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:I(this.surfaceColor),navigationConstraint:I(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new L({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,a){const r=t?.origin||"web-scene",i=t?.portal||null,l=t?.url||null,{populateOperationalLayers:y}=await import("./layersCreator-C7yE7O5_.js");b(a);const p=[];if(e.layers&&Array.isArray(e.layers)){const F={context:{origin:r,url:l,portal:i,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};p.push(y(this.layers,e.layers,F))}await Promise.allSettled(p)}};function se(e){return e&&"createElevationSampler"in e}function $(e){return e.type==="elevation"||se(e)}s([o({json:{read:!1}})],d.prototype,"layers",null),s([H("layers")],d.prototype,"writeLayers",null),s([o({readOnly:!0})],d.prototype,"resourceInfo",void 0),s([o({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:S,read:{reader:W,source:"transparency"},write:{writer:(e,t)=>{t.transparency=k(e)},target:"transparency"}}})],d.prototype,"opacity",void 0),s([o({type:q,json:{type:[S],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],d.prototype,"surfaceColor",void 0),s([o({type:f,json:{write:!0}})],d.prototype,"navigationConstraint",void 0),d=L=s([v("esri.Ground")],d);const m=d,g=new WeakMap;function O(e){return!e.destroyed&&(g.has(e)||e.addHandles([J(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||O(t))},t=>g.set(e,t),z),Q(()=>g.delete(e))]),g.get(e))}function oe(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ne(e){return!(!oe(e)||!R(e)?.operations?.supportsEditing||"editingEnabled"in e&&!K(e)||O(e))}const C=()=>c.getLogger("esri.support.basemapUtils");function ie(){return{}}function le(e){for(const t in e){const a=e[t];u(a),delete e[t]}}function de(e,t){let a;if(typeof e=="string"){const r=e in A,i=!r&&e.includes("/");if(!r&&!i){if(V.apiKey)C().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(A).filter(([y,p])=>p.classic||p.is3d).map(([y])=>`"${y}"`).sort().join(", ");C().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}t&&(a=t[e]),a||(a=r?h.fromId(e):new h({style:{id:e}}),t&&(t[e]=a))}else a=T(h,e);return a?.destroyed&&(C().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}const x={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function ye(e){let t=null;if(typeof e=="string")if(e in x){const a=x[e];t=new m({resourceInfo:{data:{layers:[a]}}})}else c.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=T(m,e);return t}let n=class extends te(re(X.EventedMixin(Y))){constructor(e){super(e),this.allLayers=new _({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=ae(this),this.basemap=null,this.editableLayers=new _({getCollections:()=>[this.allLayers],itemFilterFunction:ne}),this.ground=new m,this._basemapCache=ie()}destroy(){le(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=u(this.basemap),u(this.ground),this._set("ground",null)}castBasemap(e){return de(e,this._basemapCache)}castGround(e){return ye(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};s([o({readOnly:!0,dependsOn:[]})],n.prototype,"allLayers",void 0),s([o({readOnly:!0})],n.prototype,"allTables",void 0),s([o({type:h,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],n.prototype,"basemap",void 0),s([E("basemap")],n.prototype,"castBasemap",null),s([o({readOnly:!0})],n.prototype,"editableLayers",void 0),s([o({type:m,nonNullable:!0})],n.prototype,"ground",void 0),s([E("ground")],n.prototype,"castGround",null),s([o()],n.prototype,"undoRedo",void 0),n=s([v("esri.Map")],n);const pe=n;export{pe as default};
