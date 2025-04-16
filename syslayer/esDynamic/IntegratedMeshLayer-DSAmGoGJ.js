import{x as i,z as s,bO as v,B as I,K as d,G as S,J as L,o as N,V as b,I as R,a2 as M,aO as J,p as A,X as V,s as c,n as w,D,aH as j}from"./main-DZMdXZ8-.js";import{S as E}from"./MultiOriginJSONSupport-PUW7Sd_D.js";import{v as m}from"./persistable-B_M1mQw6.js";import{f as K}from"./Layer-xEvZCjQd.js";import{i as P}from"./APIKeyMixin-BskD_Ay4.js";import{l as U}from"./ArcGISService-vFaDTCDw.js";import{e as z}from"./CustomParametersMixin-DP_Acdbk.js";import{b as G}from"./OperationalLayer-C9HGRTRG.js";import{j as H}from"./PortalLayer-Dt1RSXVT.js";import{t as k}from"./ScaleRangeLayer-B47qjr3h.js";import{R as q,V as O}from"./SceneService-Bq0jN3cs.js";import{c as B}from"./commonProperties-DpSgLFaT.js";import{p as C,a as F,y as X,m as Z}from"./I3SLayerDefinitions-DoHRaoeW.js";import{L as $,a as Q}from"./projection-CvUYdcFf.js";import{$ as T,Z as W,w as Y}from"./elevationInfoUtils-4TtQoyrk.js";var h;let n=h=class extends S{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,a){if(a.layer?.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!$(e.spatialReference,a.layer.spatialReference))return void(a?.messages&&a.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));const l=new v;Q(e,l,a.layer.spatialReference),t[r]=l.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};i([s({type:v}),m()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([s({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=i([d("esri.layers.support.SceneModification")],n);const f=n;var p;let y=p=class extends S.JSONSupportMixin(b.ofType(f)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const r=new p;for(const a of e)r.add(f.fromJSON(a,t));return r}static async fromUrl(e,t,r){const a={url:R(e),origin:"service"},l=await M(e,{responseType:"json",signal:r?.signal}),x=t.toJSON(),u=[];for(const g of l.data)u.push(f.fromJSON({...g,geometry:{...g.geometry,spatialReference:x}},a));return new p({url:e,items:u})}};i([s({type:String})],y.prototype,"url",void 0),y=p=i([d("esri.layers.support.SceneModifications")],y);const _=y;let o=class extends q(U(G(H(k(E(z(P(K)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(J(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,j))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:A(e,r),context:r}}set elevationInfo(e){e!=null&&e.mode!=="absolute-height"||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){V(r)}if(await this._fetchService(t),this._modificationsSource!=null){const r=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(O.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(O.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new c("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new c("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new c("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";T(w.getLogger(this),W(t,"absolute-height",e)),T(w.getLogger(this),Y(t,e))}};i([s({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([s({type:C,readOnly:!0})],o.prototype,"nodePages",void 0),i([s({type:[F],readOnly:!0})],o.prototype,"materialDefinitions",void 0),i([s({type:[X],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),i([s({type:[Z],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),i([s({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),i([D(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),i([s(B)],o.prototype,"elevationInfo",null),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=i([d("esri.layers.IntegratedMeshLayer")],o);const ee=o;export{ee as default};
