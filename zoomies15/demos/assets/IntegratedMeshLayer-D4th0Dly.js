import{q as i,u as s,bF as T,v as O,C as h,A as x,B as L,h as N,dc as R,V as b,I as $,U as M,aI as A,p as J,J as V,s as y,n as v,z as j,aB as D}from"./main-CSU-shzQ.js";import{S as E}from"./MultiOriginJSONSupport-ORoMeX8u.js";import{j as c}from"./persistable-fLrjG16w.js";import{f as P}from"./Layer-DZ2y-x4m.js";import{i as U}from"./APIKeyMixin-CQ_Ik1Ji.js";import{l as K}from"./ArcGISService-Des1ollc.js";import{e as z}from"./CustomParametersMixin-3RXs_ahH.js";import{b as C}from"./OperationalLayer-B9a74oJJ.js";import{j as q}from"./PortalLayer-DYKTVpqg.js";import{t as B}from"./ScaleRangeLayer-D2-8ewd6.js";import{R as F,V as S}from"./SceneService-Ddenv3F7.js";import{c as G}from"./commonProperties-QhC0Nf0s.js";import{p as k,a as H,y as Z,m as Q}from"./I3SLayerDefinitions-B2vTTxcS.js";import{J as W,a as X}from"./projection-MdOxpSff.js";import{$ as w,Z as Y,w as ee}from"./elevationInfoUtils-CBXfipe1.js";import"./preload-helper-ExcqyqRp.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-ONIBN_cf.js";import"./TimeExtent-BRrTsw9F.js";import"./arcgisLayerUrl-BWpDvkMR.js";import"./PortalItem-CRr--QBl.js";import"./portalItemUtils-BMeKO1q7.js";import"./originUtils-CPX8CCAY.js";import"./HeightModelInfo-hpOYsOen.js";import"./jsonContext-DAeQsQsR.js";import"./resourceUtils-ClTPesUP.js";import"./resourceUtils-DsZpPE1e.js";import"./saveUtils-DYgRbA3r.js";import"./ElevationInfo-C-cpQqJK.js";import"./lengthUtils-BKTffzkd.js";import"./projectBuffer-DWp04sKw.js";var f;let n=f=class extends x{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,a){if(a.layer?.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!W(e.spatialReference,a.layer.spatialReference))return void(a?.messages&&a.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));const l=new T;X(e,l,a.layer.spatialReference),t[r]=l.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}clone(){return new f({geometry:N(this.geometry),type:this.type})}};i([s({type:T}),c()],n.prototype,"geometry",void 0),i([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),i([s({type:["clip","mask","replace"],nonNullable:!0}),c()],n.prototype,"type",void 0),n=f=i([h("esri.layers.support.SceneModification")],n);const d=n;var p;let m=p=class extends R(b.ofType(d)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const r=new p;for(const a of e)r.add(d.fromJSON(a,t));return r}static async fromUrl(e,t,r){const a={url:$(e),origin:"service"},l=await M(e,{responseType:"json",signal:r?.signal}),I=t.toJSON(),u=[];for(const g of l.data)u.push(d.fromJSON({...g,geometry:{...g.geometry,spatialReference:I}},a));return new p({url:e,items:u})}};i([s({type:String})],m.prototype,"url",void 0),m=p=i([h("esri.layers.support.SceneModifications")],m);const _=m;let o=class extends F(K(C(q(B(E(z(U(P)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(A(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,D))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:J(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){V(r)}if(await this._fetchService(t),this._modificationsSource!=null){const r=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(S.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new y("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";w(v.getLogger(this),Y(t,"absolute-height",e)),w(v.getLogger(this),ee(t,e))}};i([s({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([s({type:k,readOnly:!0})],o.prototype,"nodePages",void 0),i([s({type:[H],readOnly:!0})],o.prototype,"materialDefinitions",void 0),i([s({type:[Z],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),i([s({type:[Q],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),i([s({type:_}),c({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),i([j(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),i([s(G)],o.prototype,"elevationInfo",null),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=i([h("esri.layers.IntegratedMeshLayer")],o);const Ve=o;export{Ve as default};
