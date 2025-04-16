import{x as s,bi as N,z as o,K as v,G as S,j as B,V as M,U,n as u,Q as c,dk as q,iu as D,s as J,T as b,o as C,B as P,bt as T,it as R,hd as z,aK as K,aM as Q,dm as W,a7 as k,d6 as H,ds as V,Y as X,bI as _,b_ as Y,aL as Z,bG as E}from"./main-DeRV24Di.js";import{a as A,F as h}from"./Basemap-DYFB-4oq.js";import{t as ee}from"./loadAll-C5TDEH1O.js";import{n as x}from"./CollectionFlattener-D0TWeodg.js";import"./mat4f32-CiZjBg9k.js";import"./mat4-BNOzHJAq.js";import{l as te,a as re,t as ae}from"./TablesMixin-CrJfHwI4.js";var w;let f=w=class extends S{constructor(e){super(e),this.type="none"}clone(){return new w({type:this.type})}};s([N({none:"none",stayAbove:"stay-above"}),o({json:{write:{isRequired:!0}}})],f.prototype,"type",void 0),f=w=s([v("esri.ground.NavigationConstraint")],f);const se=Symbol("GroundInstance");var O,L;let d=L=class extends S.JSONSupportMixin(B){constructor(e){super(e),this[O]=!0,this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new M;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&u.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},a=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>a(r.item))])}initialize(){this.when().catch(e=>{U(e)||u.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)c(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}get layers(){return this._get("layers")}set layers(e){this._set("layers",q(e,this._get("layers")))}writeLayers(e,t,a,r){const i=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(l=>{if("write"in l){const y={};D(l)().write(y,r)&&i.push(y)}else r?.messages&&r.messages.push(new J("layer:unsupported",`Layers (${l.title}, ${l.id}) of type '${l.declaredClass}' cannot be persisted in the ground`,{layer:l}))})),t.layers=i}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return ee(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await import("./ElevationQuery-C-tP_uPe.js");b(t);const r=new a,i=this.layers.filter($).toArray();return r.queryAll(i,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await import("./ElevationQuery-C-tP_uPe.js");b(t);const r=new a,i=this.layers.filter($).toArray();return r.createSamplerAll(i,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:C(this.surfaceColor),navigationConstraint:C(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new L({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,a){const r=t?.origin||"web-scene",i=t?.portal||null,l=t?.url||null,{populateOperationalLayers:y}=await import("./layersCreator-5dB7hEzN.js");b(a);const p=[];if(e.layers&&Array.isArray(e.layers)){const G={context:{origin:r,url:l,portal:i,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};p.push(y(this.layers,e.layers,G))}await Promise.allSettled(p)}};function oe(e){return e&&"createElevationSampler"in e}function $(e){return e.type==="elevation"||oe(e)}O=se,s([o({json:{read:!1,write:{isRequired:!0}}})],d.prototype,"layers",null),s([P("layers")],d.prototype,"writeLayers",null),s([o({readOnly:!0})],d.prototype,"resourceInfo",void 0),s([o({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:T,read:{reader:R,source:"transparency"},write:{writer:(e,t)=>{t.transparency=z(e)},target:"transparency"}}})],d.prototype,"opacity",void 0),s([o({type:K,json:{type:[T],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],d.prototype,"surfaceColor",void 0),s([o({type:f,json:{write:!0}})],d.prototype,"navigationConstraint",void 0),d=L=s([v("esri.Ground")],d);const m=d,g=new WeakMap;function j(e){return!e.destroyed&&(g.has(e)||e.addHandles([Q(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||j(t))},t=>g.set(e,t),W),k(()=>g.delete(e))]),g.get(e))}function ne(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ie(e){return!(!ne(e)||!H(e)?.operations?.supportsEditing||"editingEnabled"in e&&!V(e)||j(e))}const I=()=>u.getLogger("esri.support.basemapUtils");function le(){return{}}function de(e){for(const t in e){const a=e[t];c(a),delete e[t]}}function ye(e,t){let a;if(typeof e=="string"){const r=e in A,i=!r&&e.includes("/");if(!r&&!i){if(X.apiKey)I().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(A).filter(([y,p])=>p.classic||p.is3d).map(([y])=>`"${y}"`).sort().join(", ");I().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}t&&(a=t[e]),a||(a=r?h.fromId(e):new h({style:{id:e}}),t&&(t[e]=a))}else a=_(h,e);return a?.destroyed&&(I().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}const F={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function pe(e){let t=null;if(typeof e=="string")if(e in F){const a=F[e];t=new m({resourceInfo:{data:{layers:[a]}}})}else u.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=_(m,e);return t}let n=class extends te(re(Y.EventedMixin(Z))){constructor(e){super(e),this.allLayers=new x({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=ae(this),this.basemap=null,this.editableLayers=new x({getCollections:()=>[this.allLayers],itemFilterFunction:ie}),this.ground=new m,this._basemapCache=le()}destroy(){de(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=c(this.basemap),c(this.ground),this._set("ground",null)}castBasemap(e){return ye(e,this._basemapCache)}castGround(e){return pe(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};s([o({readOnly:!0,dependsOn:[]})],n.prototype,"allLayers",void 0),s([o({readOnly:!0})],n.prototype,"allTables",void 0),s([o({type:h,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],n.prototype,"basemap",void 0),s([E("basemap")],n.prototype,"castBasemap",null),s([o({readOnly:!0})],n.prototype,"editableLayers",void 0),s([o({type:m,nonNullable:!0})],n.prototype,"ground",void 0),s([E("ground")],n.prototype,"castGround",null),s([o()],n.prototype,"undoRedo",void 0),n=s([v("esri.Map")],n);const ue=n;export{ue as default};
