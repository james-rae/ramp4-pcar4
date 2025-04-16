const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./groupLayerUtils-JO7QbHSN.js","./utils-CgxYjhy1.js","./main-CcTJZah4.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./PortalItem-DtQGXcdD.js","./jsonContext-BicqT98t.js","./portalItemUtils-Fd61CzwC.js","./projection-nLxG4Uci.js","./projectBuffer-DwB7xYJN.js","./saveUtils-C9haepR4.js","./resourceUtils-BSBr2SsQ.js","./uuid-Cl5lrJ4c.js","./resourceUtils-Ba39zBei.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-ExcqyqRp.js";import{e7 as b,aO as d,bz as v,Z as c,eY as f,B as s,D as l,G as h,H as _,dq as w,aQ as g,aJ as m,N as L,n as I}from"./main-CcTJZah4.js";import{n as O}from"./CollectionFlattener-C3wIrk5j.js";import{t as S}from"./loadAll-CKcCjm1o.js";import{S as $}from"./MultiOriginJSONSupport-BylVNwAl.js";import{f as A}from"./Layer-BTj8V0Sm.js";import{p as V}from"./BlendLayer-BnJD7T_l.js";import{b as E}from"./OperationalLayer-C7KVMOuG.js";import{j as P}from"./PortalLayer-DqAer8_Y.js";import{t as M}from"./ScaleRangeLayer-DRGr6lxT.js";import{populateGroupLayer as C}from"./layersCreator-1iBbkGYE.js";import{a as G}from"./lazyLayerLoader-Com7e0WB.js";import T from"./PortalItem-DtQGXcdD.js";import{l as x,a as H,t as R}from"./TablesMixin-BCRXHVdJ.js";import{A as p}from"./interfaces-CL2NbQte.js";import{r as j}from"./saveUtils-C9haepR4.js";import{g as F}from"./writeUtils-DMWpEYvj.js";import"./TimeExtent-C9S2Kh-G.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-D8kEhXrY.js";import"./parser-Rrcba7UU.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-I_M_KIEV.js";import"./common-DQOJ18NT.js";import"./commonProperties-C6IYPhjR.js";import"./ElevationInfo-Bz-jcguF.js";import"./lengthUtils-CCWuB1s4.js";import"./portalItemUtils-Fd61CzwC.js";import"./projection-nLxG4Uci.js";import"./projectBuffer-DwB7xYJN.js";import"./loadUtils-DQPipvAx.js";import"./fetchService-C7XIliaE.js";import"./associatedFeatureServiceUtils-VQ-91zsW.js";import"./portalLayers-DATki-i9.js";import"./styleUtils-BNjKZJB-.js";const k=Symbol("WebScene");let r=class extends V(M(E(P(x(H($(A))))))){constructor(e){super(e),this.allLayers=new O({getCollections:()=>[this.layers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=R(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=b(async(t,i,o)=>{const{save:a,saveAs:n}=await u(()=>import("./groupLayerUtils-JO7QbHSN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url);switch(t){case p.SAVE:return a(this,i);case p.SAVE_AS:return n(this,o,i)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&k in e},e=>{const t="prevent-adding-tables";this.removeHandles(t),e&&(this.tables.removeAll(),this.addHandles(g(()=>this.tables,"before-add",i=>{i.preventDefault(),I.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),t))},w),d(()=>this.visible,this._onVisibilityChange.bind(this),m)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===v.USER}_writeLayers(e,t,i,o){const a=[];if(!e)return a;e.forEach(n=>{const y=F(n,o.webmap?o.webmap.getLayerJSONFromResourceInfo(n):null,o);y?.layerType&&a.push(y)}),t.layers=a}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,t,i){const{itemId:o,layerType:a}=t;if(a==="GroupLayer"&&o)return new T({id:o,portal:i?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}async beforeSave(){return j(this)}load(e){const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:G,populateGroupLayer:C},e).catch(i=>{if(c(i),this.sourceIsPortalItem)throw i});return this.addResolvingPromise(t),Promise.resolve(this)}async loadAll(){return S(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(p.SAVE_AS,t,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(d(()=>e.visible,t=>this._onChildVisibilityChange(e,t),m),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(t=>{t!==e&&(t.visible=!1)})}_enforceVisibility(e,t){if(!f(this).initialized)return;const i=this.layers;let o=i.find(a=>a.visible);switch(e){case"exclusive":i.length&&!o&&(o=i.at(0),o.visible=!0),this._turnOffOtherLayers(o);break;case"inherited":i.forEach(a=>{a.visible=t})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(t=>{t.visible=e})}_onChildVisibilityChange(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};s([l({readOnly:!0,dependsOn:[]})],r.prototype,"allLayers",void 0),s([l({readOnly:!0})],r.prototype,"allTables",void 0),s([l({json:{read:!0,write:!0}})],r.prototype,"blendMode",void 0),s([l()],r.prototype,"fullExtent",void 0),s([l({readOnly:!0})],r.prototype,"sourceIsPortalItem",null),s([l({json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"layers",void 0),s([h("layers")],r.prototype,"_writeLayers",null),s([l({type:["GroupLayer"]})],r.prototype,"operationalLayerType",void 0),s([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,t,i){return{enabled:e?.type==="Group Layer"&&i?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],r.prototype,"portalItem",null),s([_("web-map","portalItem",["itemId"])],r.prototype,"readPortalItem",null),s([h("web-map","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),s([l()],r.prototype,"spatialReference",void 0),s([l({json:{read:!1},readOnly:!0,value:"group"})],r.prototype,"type",void 0),s([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,t,i)=>{e!=="inherited"&&(t[i]=e)}}}}})],r.prototype,"visibilityMode",null),r=s([L("esri.layers.GroupLayer")],r);const Le=r;export{Le as default};
