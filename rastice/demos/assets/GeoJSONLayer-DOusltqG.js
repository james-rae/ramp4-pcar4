const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-D_HXno-B.js","./main-CUxU9bWS.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./uuid-Cl5lrJ4c.js","./EditBusLayer-BIS5fdB9.js","./infoFor3D-_5f2f6Um.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./preload-helper-ExcqyqRp.js";import{q as r,u as i,C as O,f as w,dO as J,aw as F,s as y,bI as j,a$ as N,cK as I,n as f,D as E,J as R,fi as g,aZ as T,I as v,br as q,b4 as P}from"./main-CUxU9bWS.js";import"./UniqueValueRenderer-q-xEqSsg.js";import{m as k,u as D}from"./jsonUtils-DxQxwarO.js";import{S as Z}from"./MultiOriginJSONSupport--LuP6_0p.js";import{f as C}from"./Layer-VQ4_KGgj.js";import{p as G}from"./workers-7zdfU5xG.js";import{y as Q}from"./clientSideDefaults-DBiU2bAB.js";import{d as z}from"./FeatureSet-DfeeRncM.js";import{l as L}from"./BlendLayer-CRA6VAX4.js";import{e as V}from"./CustomParametersMixin-aqwVckPS.js";import{c as A}from"./FeatureEffectLayer-r5_lnCrP.js";import{c as U}from"./FeatureReductionLayer-BPwZjdKL.js";import{b as W}from"./OperationalLayer-CBtw9AoM.js";import{p as B}from"./OrderedLayer-B-2nc68t.js";import{j as M}from"./PortalLayer-COSV0Acm.js";import{f as K}from"./RefreshableLayer-DhBAjrgh.js";import{t as H}from"./ScaleRangeLayer-B2dXyvbe.js";import{l as X}from"./TemporalLayer-DnPxXc7H.js";import{T as Y,c as ee,u as te,p as re,d as ie,f as oe,l as se,s as ne,y as ae}from"./commonProperties-BWvpypTA.js";import{p as le}from"./FeatureTemplate-MAZrovrM.js";import{y as pe}from"./Field-7yKaqquJ.js";import{s as ue}from"./fieldProperties-DOrrvvOT.js";import{C as de,n as me}from"./labelingInfo-sXCz7XmM.js";import{b as d}from"./Query-gAxGVVkN.js";import{p as he}from"./popupUtils-DHmw5Q00.js";import"./RendererLegendOptions-ClFRbpMJ.js";import"./diffUtils-MlvZK1EN.js";import"./colorRamps-BcGQYd3C.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BMp8yUlC.js";import"./compilerUtils-MfGGJ6jp.js";import"./lengthUtils-D1bX0TD8.js";import"./styleUtils-BDJDtTPo.js";import"./LRUCache-uHJJcn0o.js";import"./Version-CNYnG8Q4.js";import"./FieldsIndex-DosTqN4i.js";import"./UnknownTimeZone-3zgfWq7J.js";import"./OverrideHelper-B8uiocSy.js";import"./colorUtils-Lyjc4zh-.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-4P_ZGotl.js";import"./heatmapUtils-DUymcvS2.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./jsonUtils-aqm3pfo-.js";import"./parser-D_L7gZcx.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DSQ66VqF.js";import"./FeatureEffect-Dd4zOEJp.js";import"./FeatureFilter-dAu7YW85.js";import"./fieldType-RAe-KhZA.js";import"./FeatureReductionSelection-CwFR_uSW.js";import"./featureLayerUtils-BNFY5TJB.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-DqTTQxFc.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-B5ab0BgK.js";import"./PortalItem-Ch5wKdnK.js";import"./portalItemUtils-BMjf2BVv.js";import"./projection-BIYcHcNR.js";import"./projectBuffer-B22kEXxF.js";import"./TimeInfo-C3qfLVA5.js";import"./ElevationInfo-M4dU7fC5.js";import"./labelUtils-CnZtiCO7.js";let l=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=J(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>z.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:F.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new y("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],m=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)m.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:m,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:h})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(h)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await G("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:m,objectIdField:a,url:p,timeInfo:h,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:p,customParameters:S,fields:t&&t.map(c=>c.toJSON()),geometryType:I.toJSON(m),hasZ:n,objectIdField:a,timeInfo:h?h.toJSON():null,spatialReference:x?null:s&&s.toJSON()},u=await this._connection.invoke("load",_,{signal:e});for(const c of u.warnings)f.getLogger(this.layer).warn("#load()",`${c.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:c});u.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${u.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:u.featureErrors}),this.sourceJSON=u.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([i()],l.prototype,"capabilities",void 0),r([i()],l.prototype,"type",void 0),r([i({constructOnly:!0})],l.prototype,"layer",void 0),r([i()],l.prototype,"sourceJSON",void 0),l=r([O("esri.layers.graphics.sources.GeoJSONSource")],l);const b=ue();let o=class extends B(V(U(A(L(X(H(K(W(M(Z(C))))))))))){constructor(e){super(e),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new l({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(R).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),T(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await $(()=>import("./editingSupport-D_HXno-B.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new d,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(d.from(e)||this.createQuery(),t)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(d.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(d.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(d.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i(Y)],o.prototype,"attributeTableTemplate",void 0),r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i(q("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(ee)],o.prototype,"elevationInfo",void 0),r([i({type:[pe],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(b.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:F,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(te)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(re)],o.prototype,"labelsVisible",void 0),r([i({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:me},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(ie)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(oe)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i(b.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(se)],o.prototype,"popupEnabled",void 0),r([i({type:P,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:k,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:D}}}})],o.prototype,"renderer",null),r([i(ne)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:E})],o.prototype,"spatialReference",void 0),r([i({type:[le]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(ae)],o.prototype,"url",null),o=r([O("esri.layers.GeoJSONLayer")],o);const Jt=o;export{Jt as default};
