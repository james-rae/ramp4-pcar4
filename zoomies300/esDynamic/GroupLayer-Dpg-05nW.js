import{dA as u,aE as p,bm as m,G as c,bf as v,k as r,o as l,q as h,u as f,f1 as w,aG as g,az as b,A as _,n as I}from"./main-DqYc2eZZ.js";import{n as L}from"./CollectionFlattener-gdMiQntC.js";import{t as O}from"./loadAll-_aefdi6e.js";import{S}from"./MultiOriginJSONSupport-BjQYN9UY.js";import{f as A}from"./Layer-CVf4mOVm.js";import{l as V}from"./BlendLayer-BB0TVk7x.js";import{b as M}from"./OperationalLayer-_noFZqj2.js";import{j as E}from"./PortalLayer-CTDwOpsf.js";import{t as P}from"./ScaleRangeLayer-HutIBJAb.js";import{b as x}from"./fetchService-5yfIV5LG.js";import C from"./PortalItem-uW9i6LAa.js";import{n as G,l as T,t as j}from"./TablesMixin-Dn4leGXG.js";import{A as d}from"./interfaces-Cwm0pihk.js";import{r as H}from"./saveUtils-Cw8DZRP2.js";import{f as R}from"./writeUtils-DnwCRzdB.js";const F=Symbol("WebScene");let s=class extends V(P(M(E(G(T(S(A))))))){constructor(e){super(e),this.allLayers=new L({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=j(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=u(async(i,t,a)=>{const{save:o,saveAs:n}=await import("./groupLayerUtils-Be54pt_d.js");switch(i){case d.SAVE:return o(this,t);case d.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([p(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&F in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(g(()=>this.tables,"before-add",t=>{t.preventDefault(),I.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},w),p(()=>this.visible,this._onVisibilityChange.bind(this),b)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===m.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const y=R(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);y?.layerType&&o.push(y)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new C({id:a,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return H(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:x},e).catch(t=>{if(c(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return O(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(d.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(d.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(p(()=>e.visible,i=>this._onChildVisibilityChange(e,i),b),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!v(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([h("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:e?.type==="Group Layer"&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([f("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([h("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([_("esri.layers.GroupLayer")],s);const k=s;export{k as default};
