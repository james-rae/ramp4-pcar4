import{B as i,D as s,bR as T,G as I,N as h,J as _,M as L,v as N,V as b,I as R,a4 as M,aQ as $,p as J,Z as A,s as y,n as v,H as V,aJ as j}from"./main-D_jCcUNd.js";import{S as D}from"./MultiOriginJSONSupport-CW6rZq6k.js";import{v as c}from"./persistable-q_77IMYF.js";import{f as P}from"./Layer-DXHV-tnm.js";import{i as E}from"./APIKeyMixin-D2PPxhoM.js";import{l as K}from"./ArcGISService-BbYcf4hC.js";import{e as U}from"./CustomParametersMixin-jN4v0L1t.js";import{b as G}from"./OperationalLayer-Doyloi11.js";import{j as z}from"./PortalLayer-Uffz25z-.js";import{t as C}from"./ScaleRangeLayer-8w7mUjfL.js";import{R as H,V as S}from"./SceneService-C77g8yK9.js";import{c as Z}from"./commonProperties-CoOKNqGE.js";import{p as k,a as q,y as B,m as F}from"./I3SLayerDefinitions-BXjWfAL-.js";import{L as Q,a as W}from"./projection-DswCNHiF.js";import{$ as w,Z as X,w as Y}from"./elevationInfoUtils-DW7d7gyv.js";import"./preload-helper-ExcqyqRp.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-1jSZOx3T.js";import"./TimeExtent-BsjGA75b.js";import"./layerContainerType-C5CzMsLd.js";import"./PortalItem-BEvvM5w1.js";import"./portalItemUtils-BahwO9FL.js";import"./originUtils-CPX8CCAY.js";import"./HeightModelInfo-DCYyjFn0.js";import"./jsonContext-D4Q6dN1N.js";import"./resourceUtils-wj945cbO.js";import"./resourceUtils-CNC1LYC1.js";import"./saveUtils-Baz_wP0W.js";import"./ElevationInfo-tQKCRFIZ.js";import"./lengthUtils-BNIshbqa.js";import"./projectBuffer-B9jUCpdF.js";var f;let n=f=class extends _{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,a){if(a.layer?.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Q(e.spatialReference,a.layer.spatialReference))return void(a?.messages&&a.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));const l=new T;W(e,l,a.layer.spatialReference),t[r]=l.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}clone(){return new f({geometry:N(this.geometry),type:this.type})}};i([s({type:T}),c()],n.prototype,"geometry",void 0),i([I(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([s({type:["clip","mask","replace"],nonNullable:!0}),c()],n.prototype,"type",void 0),n=f=i([h("esri.layers.support.SceneModification")],n);const d=n;var p;let m=p=class extends _.JSONSupportMixin(b.ofType(d)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const r=new p;for(const a of e)r.add(d.fromJSON(a,t));return r}static async fromUrl(e,t,r){const a={url:R(e),origin:"service"},l=await M(e,{responseType:"json",signal:r?.signal}),x=t.toJSON(),u=[];for(const g of l.data)u.push(d.fromJSON({...g,geometry:{...g.geometry,spatialReference:x}},a));return new p({url:e,items:u})}};i([s({type:String})],m.prototype,"url",void 0),m=p=i([h("esri.layers.support.SceneModifications")],m);const O=m;let o=class extends H(K(G(z(C(D(U(E(P)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles($(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,j))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:J(e,r),context:r}}set elevationInfo(e){e!=null&&e.mode!=="absolute-height"||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){A(r)}if(await this._fetchService(t),this._modificationsSource!=null){const r=await O.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(S.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new y("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";w(v.getLogger(this),X(t,"absolute-height",e)),w(v.getLogger(this),Y(t,e))}};i([s({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([s({type:k,readOnly:!0})],o.prototype,"nodePages",void 0),i([s({type:[q],readOnly:!0})],o.prototype,"materialDefinitions",void 0),i([s({type:[B],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),i([s({type:[F],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),i([s({type:O}),c({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),i([V(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),i([s(Z)],o.prototype,"elevationInfo",null),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=i([h("esri.layers.IntegratedMeshLayer")],o);const Ae=o;export{Ae as default};
