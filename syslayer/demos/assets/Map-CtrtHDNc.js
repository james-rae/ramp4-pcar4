const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-admlNG9R.js","./main-D_jCcUNd.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./projection-DswCNHiF.js","./projectBuffer-B9jUCpdF.js","./TileKey-DZd6gJy7.js","./layersCreator-DAOzltk1.js","./loadUtils-CAet2hB5.js","./fetchService-DlBGyaO7.js","./associatedFeatureServiceUtils-DrTq3qqO.js","./PortalItem-BEvvM5w1.js","./lazyLayerLoader-Dy5ZySjL.js","./portalLayers-D-DN338k.js","./portalItemUtils-BahwO9FL.js","./styleUtils-DUsilyYV.js"])))=>i.map(i=>d[i]);
import{B as s,bk as D,D as o,N as I,J as j,o as G,V as P,Y as M,n as m,U as f,dn as R,iz as U,s as q,X as b,v as S,G as J,bv as C,iw as V,hg as z,aM as W,aO as k,dq as H,a9 as K,d9 as Q,dv as X,$ as Y,bK as N,c1 as Z,aN as ee,bI as E}from"./main-D_jCcUNd.js";import{a as T,F as c}from"./Basemap-BlwSpYU2.js";import{_ as w}from"./preload-helper-ExcqyqRp.js";import{t as te}from"./loadAll-jEhlaiuJ.js";import{n as O}from"./CollectionFlattener-B_TcI2U7.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CiVQetHb.js";import{l as re,a as ae,t as se}from"./TablesMixin-CzW1oJ3Z.js";import"./PortalItem-BEvvM5w1.js";import"./intl-Bp-1PIwe.js";import"./writeUtils-2a1LQLfC.js";import"./common-DQOJ18NT.js";import"./Layer-DXHV-tnm.js";import"./TimeExtent-BsjGA75b.js";var L;let h=L=class extends j{constructor(e){super(e),this.type="none"}clone(){return new L({type:this.type})}};s([D({none:"none",stayAbove:"stay-above"}),o({json:{write:{isRequired:!0}}})],h.prototype,"type",void 0),h=L=s([I("esri.ground.NavigationConstraint")],h);const oe=Symbol("GroundInstance");var F,_;let d=_=class extends j.JSONSupportMixin(G){constructor(e){super(e),this[F]=!0,this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new P;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&m.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},a=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>a(r.item))])}initialize(){this.when().catch(e=>{M(e)||m.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)f(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}get layers(){return this._get("layers")}set layers(e){this._set("layers",R(e,this._get("layers")))}writeLayers(e,t,a,r){const n=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(l=>{if("write"in l){const p={};U(l)().write(p,r)&&n.push(p)}else r?.messages&&r.messages.push(new q("layer:unsupported",`Layers (${l.title}, ${l.id}) of type '${l.declaredClass}' cannot be persisted in the ground`,{layer:l}))})),t.layers=n}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return te(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await w(()=>import("./ElevationQuery-admlNG9R.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);b(t);const r=new a,n=this.layers.filter(A).toArray();return r.queryAll(n,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await w(()=>import("./ElevationQuery-admlNG9R.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);b(t);const r=new a,n=this.layers.filter(A).toArray();return r.createSamplerAll(n,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:S(this.surfaceColor),navigationConstraint:S(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new _({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,a){const r=t?.origin||"web-scene",n=t?.portal||null,l=t?.url||null,{populateOperationalLayers:p}=await w(async()=>{const{populateOperationalLayers:v}=await import("./layersCreator-DAOzltk1.js");return{populateOperationalLayers:v}},__vite__mapDeps([7,1,2,3,8,9,10,11,12,13,14,4,5,15]),import.meta.url);b(a);const y=[];if(e.layers&&Array.isArray(e.layers)){const v={context:{origin:r,url:l,portal:n,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};y.push(p(this.layers,e.layers,v))}await Promise.allSettled(y)}};function ne(e){return e&&"createElevationSampler"in e}function A(e){return e.type==="elevation"||ne(e)}F=oe,s([o({json:{read:!1,write:{isRequired:!0}}})],d.prototype,"layers",null),s([J("layers")],d.prototype,"writeLayers",null),s([o({readOnly:!0})],d.prototype,"resourceInfo",void 0),s([o({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:C,read:{reader:V,source:"transparency"},write:{writer:(e,t)=>{t.transparency=z(e)},target:"transparency"}}})],d.prototype,"opacity",void 0),s([o({type:W,json:{type:[C],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],d.prototype,"surfaceColor",void 0),s([o({type:h,json:{write:!0}})],d.prototype,"navigationConstraint",void 0),d=_=s([I("esri.Ground")],d);const g=d,u=new WeakMap;function B(e){return!e.destroyed&&(u.has(e)||e.addHandles([k(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||B(t))},t=>u.set(e,t),H),K(()=>u.delete(e))]),u.get(e))}function ie(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function le(e){return!(!ie(e)||!Q(e)?.operations?.supportsEditing||"editingEnabled"in e&&!X(e)||B(e))}const $=()=>m.getLogger("esri.support.basemapUtils");function de(){return{}}function pe(e){for(const t in e){const a=e[t];f(a),delete e[t]}}function ye(e,t){let a;if(typeof e=="string"){const r=e in T,n=!r&&e.includes("/");if(!r&&!n){if(Y.apiKey)$().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(T).filter(([p,y])=>y.classic||y.is3d).map(([p])=>`"${p}"`).sort().join(", ");$().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}t&&(a=t[e]),a||(a=r?c.fromId(e):new c({style:{id:e}}),t&&(t[e]=a))}else a=N(c,e);return a?.destroyed&&($().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}const x={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function ue(e){let t=null;if(typeof e=="string")if(e in x){const a=x[e];t=new g({resourceInfo:{data:{layers:[a]}}})}else m.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=N(g,e);return t}let i=class extends re(ae(Z.EventedMixin(ee))){constructor(e){super(e),this.allLayers=new O({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=se(this),this.basemap=null,this.editableLayers=new O({getCollections:()=>[this.allLayers],itemFilterFunction:le}),this.ground=new g,this._basemapCache=de()}destroy(){pe(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=f(this.basemap),f(this.ground),this._set("ground",null)}castBasemap(e){return ye(e,this._basemapCache)}castGround(e){return ue(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};s([o({readOnly:!0,dependsOn:[]})],i.prototype,"allLayers",void 0),s([o({readOnly:!0})],i.prototype,"allTables",void 0),s([o({type:c,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],i.prototype,"basemap",void 0),s([E("basemap")],i.prototype,"castBasemap",null),s([o({readOnly:!0})],i.prototype,"editableLayers",void 0),s([o({type:g,nonNullable:!0})],i.prototype,"ground",void 0),s([E("ground")],i.prototype,"castGround",null),s([o()],i.prototype,"undoRedo",void 0),i=s([I("esri.Map")],i);const Ee=i;export{Ee as default};
