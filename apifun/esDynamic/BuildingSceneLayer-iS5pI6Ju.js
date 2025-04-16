import{dF as de,x as t,z as s,D as S,bt as ce,K as p,j as Z,hb as $,n as w,a2 as z,cL as he,iD as me,s as x,b4 as fe,bz as ge,M as G,b7 as be,bi as H,aF as ve,V as f,J as Se,G as c,o as d,jo as we,bJ as xe,X as Fe}from"./main-DeRV24Di.js";import{n as Ie}from"./CollectionFlattener-D0TWeodg.js";import{a as Oe,t as Le}from"./loadAll-C5TDEH1O.js";import{m as je,S as Te}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as qe}from"./Layer-BYwzhU09.js";import X from"./FeatureLayer-BOnkaWhc.js";import{m as P,l as Be,g as Ee,d as Ae,c as Pe}from"./commonProperties-Bm8d6jM2.js";import{t as Re}from"./capabilities-D32I06-e.js";import{N as _e}from"./labelingInfo-RYYuvgkx.js";import{s as Ne}from"./fieldProperties-CXdcSgEi.js";import{Z as Me}from"./FieldsIndex-BaSDCm-j.js";import{r as ke,R as De,V as W}from"./SceneService-BSZ0XI0o.js";import{p as Ke,a as Qe,y as Ve,m as Ue}from"./I3SLayerDefinitions-DRcP-MkN.js";import{u as Ce}from"./typeUtils-CeD2lZh3.js";import{b as Je}from"./Query-ot-GJVWV.js";import{p as Ze}from"./popupUtils-BJb0P8hy.js";import{h as $e}from"./ElevationInfo-b86CcKpg.js";import{V as ze}from"./I3SUtil-a0yfqSNs.js";import{n as Ge,p as He}from"./popupUtils-9REljG2c.js";import{i as Xe}from"./APIKeyMixin-giwC8Loz.js";import{l as We}from"./ArcGISService-Dj4O_HhX.js";import{e as Ye}from"./CustomParametersMixin-DSX_tBvo.js";import{b as et}from"./OperationalLayer-aipQXicj.js";import{j as tt}from"./PortalLayer-DGPFQ0q_.js";import{t as rt}from"./ScaleRangeLayer-DCHlWw-h.js";import{s as st}from"./associatedFeatureServiceUtils-BMvIgD3V.js";import{n as it}from"./uuid-Dj9mdEVg.js";import{$ as Y,Z as ot,w as at}from"./elevationInfoUtils-BQ7PwI-0.js";let y=class extends de.IdentifiableMixin(je){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,r){return typeof r.alias=="string"?r.alias:typeof r.name=="string"?r.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([s({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([S("service","title",["alias","name"])],y.prototype,"readTitle",null),t([s()],y.prototype,"layer",void 0),t([s({type:ce,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,isRequired:!0}}})],y.prototype,"id",void 0),t([S("service","id")],y.prototype,"readIdOnlyOnce",null),t([s(P(String))],y.prototype,"modelName",void 0),t([s(P(Boolean))],y.prototype,"isEmpty",void 0),t([s({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([s({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([s({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ee=y,te=Ne();let o=class extends Z.LoadableMixin($.EsriPromiseMixin(ee)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new Me(this.fields)}readAssociatedLayer(e,r){const i=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return i!=null&&typeof a=="number"?new X({portalItem:i,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,i=this._fetchService(r).then(()=>{this.indexInfo=ke(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,w.getLogger(this),r)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return Ze(this,e)}async _fetchService(e){const r=(await z(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){const i=this.getField(e)?.domain??null;return this.associatedLayer?_e(this.associatedLayer,e,r,i):i}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Re,{query:r,data:{supportsZ:i,supportsM:a,isVersioned:l}}=e;return{query:r,data:{supportsZ:i,supportsM:a,isVersioned:l}}}createQuery(){const e=new Je;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),r)).then(i=>{if(i?.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}async queryObjectIds(e,r){return(await(await this._getAssociatedLayerForQuery()).queryObjectIds(e||this.createQuery(),r)).filter(he)}async queryCachedAttributes(e,r){const i=me(this.fieldsIndex,await Ge(this,He(this)));return ze(this.parsedUrl.path,this.attributeStorageInfo,e,r,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||i.length===0)throw new x("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new fe({attributes:i[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new x("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([s({readOnly:!0})],o.prototype,"parsedUrl",null),t([s({type:Ke,readOnly:!0})],o.prototype,"nodePages",void 0),t([s({type:[Qe],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([s({type:[Ve],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([s({type:[Ue],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([s({readOnly:!0})],o.prototype,"store",void 0),t([s({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([s({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([s(te.fields)],o.prototype,"fields",void 0),t([s({readOnly:!0})],o.prototype,"fieldsIndex",null),t([s({readOnly:!0,type:X})],o.prototype,"associatedLayer",void 0),t([S("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([s(te.outFields)],o.prototype,"outFields",void 0),t([s({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([s({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([s({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([s({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([s({readOnly:!0,type:ge})],o.prototype,"fullExtent",null),t([s({readOnly:!0,type:G})],o.prototype,"spatialReference",null),t([s({readOnly:!0})],o.prototype,"version",null),t([s({readOnly:!0,type:$e})],o.prototype,"elevationInfo",null),t([s({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([s({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([s({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([s({types:Ce,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([s(Be)],o.prototype,"popupEnabled",void 0),t([s({type:be,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([s()],o.prototype,"types",null),t([s()],o.prototype,"typeIdField",null),t([s({json:{write:!1}}),H(new ve({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([s()],o.prototype,"geometryType",null),t([s()],o.prototype,"profile",null),t([s({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),t([s({readOnly:!0})],o.prototype,"statisticsInfo",void 0),o=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const R=o;var _;const re={type:f,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:se}}},read:!1}};function se(e,r,i){if(e&&Array.isArray(e))return new f(e.map(a=>{const l=nt(a);if(l){const v=new l;return v.read(a,i),v}return i?.messages&&a&&i.messages.push(new Se("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i})),null}))}let h=_=class extends ee{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return Oe(this,e=>_.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function nt(e){return e.layerType==="group"?h:R}t([s({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),t([s(re)],h.prototype,"sublayers",void 0),h=_=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),function(e){function r(i,a){i.forEach(l=>{a(l),l.type==="building-group"&&r(l.sublayers,a)})}e.sublayersProperty=re,e.readSublayers=se,e.forEachSublayer=r}(h||(h={}));const g=h;let j=class extends c{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],j.prototype,"type",void 0),j=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],j);const ie=j;var N;let F=N=class extends c{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new N({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([s({type:String,json:{write:{isRequired:!0}}})],F.prototype,"filterType",void 0),t([s({type:[String],json:{write:{isRequired:!0}}})],F.prototype,"filterValues",void 0),F=N=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],F);const lt=F;var M;const pt=f.ofType(lt);let T=M=class extends c{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([s({type:pt,json:{write:{isRequired:!0}}})],T.prototype,"filterTypes",void 0),T=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],T);const yt=T;var k;const ut=f.ofType(yt);let I=k=class extends ie{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([s({type:["checkbox"]})],I.prototype,"type",void 0),t([s({type:ut,json:{write:{isRequired:!0}}})],I.prototype,"filterBlocks",void 0),I=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],I);const oe=I;let q=class extends c{};t([s({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],q.prototype,"type",void 0),q=t([p("esri.layers.support.BuildingFilterMode")],q);const B=q;var D;let E=D=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new D}};t([s({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],E.prototype,"type",void 0),E=D=t([p("esri.layers.support.BuildingFilterModeSolid")],E);const K=E;var Q;let O=Q=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Q({edges:d(this.edges)})}};t([H({wireFrame:"wire-frame"})],O.prototype,"type",void 0),t([s(we)],O.prototype,"edges",void 0),O=Q=t([p("esri.layers.support.BuildingFilterModeWireFrame")],O);const ae=O;var V;let A=V=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new V}};t([s({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],A.prototype,"type",void 0),A=V=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const ne=A;var U;const dt={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:K,"wire-frame":ae,"x-ray":ne}},json:{read:e=>{switch(e?.type){case"solid":return K.fromJSON(e);case"wireFrame":return ae.fromJSON(e);case"x-ray":return ne.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let b=U=class extends c{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new K,this.title=""}clone(){return new U({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"filterExpression",void 0),t([s(dt)],b.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"title",void 0),b=U=t([p("esri.layers.support.BuildingFilterBlock")],b);const ct=b;var C;const ht=f.ofType(ct);let m=C=class extends c{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=it(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],m.prototype,"description",void 0),t([s({type:ht,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:ie,typeMap:{checkbox:oe}},json:{read:e=>e?.type==="checkbox"?oe.fromJSON(e):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=C=t([p("esri.layers.support.BuildingFilter")],m);const mt=m;let u=class extends c{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],u.prototype,"fieldName",void 0),t([s({type:String})],u.prototype,"modelName",void 0),t([s({type:String})],u.prototype,"label",void 0),t([s({type:Number})],u.prototype,"min",void 0),t([s({type:Number})],u.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],u);let L=class extends Z.LoadableMixin($.EsriPromiseMixin(c)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(w.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await z(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],L.prototype,"url",void 0),t([s({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],L.prototype,"fields",null),L=t([p("esri.layers.support.BuildingSummaryStatistics")],L);const le=L,pe=f.ofType(mt),ye=d(g.sublayersProperty),J=ye.json?.origins;J&&(J["web-scene"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},J["portal-item"]={type:[R],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let n=class extends De(We(et(tt(rt(Te(Ye(Xe(qe)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Ie({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new pe,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const a=g.readSublayers(e,r,i);return g.forEachSublayer(a,l=>l.layer=this),this._allSublayerOverrides&&(ft(a,this._allSublayerOverrides),this._allSublayerOverrides=null),a}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?bt(this.sublayers,e,r):this._allSublayerOverrides&&vt(this._allSublayerOverrides,e,r)),e}read(e,r){if(super.read(e,r),(r?.origin==="web-scene"||r?.origin==="portal-item")&&Array.isArray(e?.sublayers)){const i=gt(e.sublayers,r);this.sublayers?ue(this.sublayers,i):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(r.origin,i))}}readSummaryStatistics(e,r){if(typeof r.statisticsHRef=="string"){const i=xe(this.parsedUrl?.path,r.statisticsHRef);return new le({url:i})}return null}set elevationInfo(e){e!=null&&e.mode!=="absolute-height"||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Fe).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Le(this,e=>{g.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(W.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(W.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new x("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await st(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){w.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(e){const r="Building scene layers";Y(w.getLogger(this),ot(r,"absolute-height",e)),Y(w.getLogger(this),at(r,e))}};function ft(e,r){r.forEach(i=>ue(e,i))}function ue(e,r){const{overrides:i,context:a}=r;g.forEachSublayer(e,l=>l.read(i.get(l.id),a))}function gt(e,r){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):r.messages?.push(new x("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:r}}function bt(e,r,i){const a=[];g.forEachSublayer(e,l=>{const v=l.write({},i);Object.keys(v).length>1&&a.push(v)}),a.length>0&&(r.sublayers=a)}function vt(e,r,i){const a=i?.origin&&e.get(i.origin);a&&(r.sublayers=[],a.overrides.forEach(l=>{r.sublayers.push(d(l))}))}t([s({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],n.prototype,"allSublayers",void 0),t([s(ye)],n.prototype,"sublayers",void 0),t([S("service","sublayers")],n.prototype,"readSublayers",null),t([s({type:pe,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:le})],n.prototype,"summaryStatistics",void 0),t([S("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([s(Ee)],n.prototype,"fullExtent",void 0),t([s(Ae)],n.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([s(P(G))],n.prototype,"spatialReference",void 0),t([s(Pe)],n.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([s()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([p("esri.layers.BuildingSceneLayer")],n);const St=n;export{St as default};
