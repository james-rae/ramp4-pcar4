import{b3 as te,aX as V,dF as re,j as ie,fF as $,Q as se,o as v,aV as ne,n as M,M as ae,s as g,bA as _,x as s,z as n,B as oe,b7 as le,D as T,K as N,gC as ue,gf as pe,ge as de,V as C,e4 as ye,aM as ce,aH as he,X as fe,I as be,bJ as me,gw as ge,bB as we,cL as ve,aW as Fe}from"./main-DeRV24Di.js";import{t as Se}from"./loadAll-C5TDEH1O.js";import{S as k}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as Ie}from"./Layer-BYwzhU09.js";import{i as Te}from"./APIKeyMixin-giwC8Loz.js";import{l as Oe}from"./ArcGISService-Dj4O_HhX.js";import{p as je}from"./BlendLayer-L3pb8nn4.js";import{e as Ce}from"./CustomParametersMixin-DSX_tBvo.js";import{a as Ee}from"./DisplayFilteredLayer-COq29YxK.js";import{F as xe}from"./EditBusLayer-DniK4c90.js";import{V as Le,R as Ae}from"./FeatureLayerBase-BNc3ygXf.js";import{b as qe}from"./OperationalLayer-aipQXicj.js";import{j as _e}from"./PortalLayer-DGPFQ0q_.js";import{f as Pe}from"./RefreshableLayer-Va5n0aza.js";import{t as De}from"./ScaleRangeLayer-DCHlWw-h.js";import{l as Ge}from"./TemporalLayer-DLflgYhm.js";import{a as Re,p as Ve,d as $e,j as Me,v as Ne,l as ke,u as Ue}from"./commonProperties-Bm8d6jM2.js";import{R as U,V as H,C as He,n as Qe,H as Be,Y as Je,F as Ze,P as ze,q as We,v as Xe,O as Ke,U as Ye,A as et,L as tt,E as rt,D as it,T as st,b as nt,B as at}from"./labelingInfo-RYYuvgkx.js";import{s as Q}from"./fieldProperties-CXdcSgEi.js";import{T as ot}from"./colorUtils-C43I3uKy.js";import{w as lt}from"./ClassBreaksRenderer-B2dbj-7U.js";import{p as ut}from"./commonProperties-jT9X4b9f.js";import{p as E}from"./SimpleRenderer-BKDnWKtv.js";import{A as pt}from"./UniqueValueRenderer-Bqiuouai.js";import{I as dt}from"./cimSymbolUtils-D7SfiO0B.js";import{h as yt,g as ct}from"./utils-Bp4BojFo.js";import{a as x}from"./layerContainerType-ChWdCT09.js";import{n as B}from"./FeatureTemplate-DFM9wnlX.js";import{u as ht}from"./TitleCreator-D-FiaP2p.js";import{b as J}from"./Query-ot-GJVWV.js";import{p as ft}from"./popupUtils-BJb0P8hy.js";import{d as bt}from"./TimeInfo-cNeglzDY.js";import{t as mt}from"./versionUtils-BQsyyXwK.js";import{A as L}from"./interfaces-Cwm0pihk.js";const Z={key:"type",base:ut,errorContext:"renderer",typeMap:{simple:E,"unique-value":pt,"class-breaks":lt}},P=te({types:Z});function gt(e,t){const r=e.drawingInfo?.renderer,i=r?P(r,e,t):null;if(i?.type==="simple")return yt(i.symbol,null)?i.symbol.clone():null}const wt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function vt(e,t){return ot(wt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const i=t.clone();return i.type==="cim"?dt(i,r):ct(i,r),new E({symbol:i})})}const z=Q();let Ft=0;function O(e,t){let r=e.json.write;return typeof r!="object"&&(r=e.json.write={}),r.ignoreOrigin=!0,t?.spatialOnly&&(r.layerContainerTypes=x),e}function f(e){const t={write:{ignoreOrigin:!0}};return e?.name&&(t.name=e.name),typeof t.write=="object"&&(e?.spatialOnly&&(t.write.layerContainerTypes=x),e?.target&&(t.write.target=e.target)),t}function St(e){return new E({symbol:It(e)})}function It(e){switch(e){case"point":case"multipoint":return de.clone();case"polyline":return pe.clone();case"polygon":case"multipatch":return ue.clone();default:return null}}function Tt(e,t){return!!t&&e?.type==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function W(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function Ot(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},o=W(e,t);if(o!=null){const{defaultValues:l}=o;for(const u in l)i[u]=l[u]}return i[t.subtypeField]=e,new B({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let a=class extends k(V.ClonableMixin(re.IdentifiableMixin(ie))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Ft++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return $(this.renderer,this.fieldsIndex),Promise.resolve(this)}get _titleCreator(){const e=this._get("_titleCreator");return se(e),new ht({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,displayField:this.parent?.displayField??"",fields:this.fields,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}get featureTitleFields(){return[...this._titleCreator.requiredFields]}writeFieldOverrides(e,t,r){const{fields:i,parent:o}=this;let l;if(i){l=[];let u=0;i.forEach(({name:d,alias:c,editable:S,visible:I})=>{if(!I)return;const h=o?.fields?.find(A=>A.name===d);if(!h)return;const m={name:d};let w=!1;c!==h.alias&&(m.alias=c,w=!0),S!==h.editable&&(m.editable=S,w=!0),l.push(m),w&&u++}),u===0&&l.length===i.length&&(l=null)}else l=v(e);l?.length&&ne(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:o,subtypeField:l}=e,u=o?.find(I=>I.code===r),d=u?.defaultValues,c=u?.domains,S=[];for(const I of i){const h=I.clone(),{name:m}=h,w=t?.find(j=>j.name===m);if(h.visible=!t?.length||!!w,w){const{alias:j,editable:ee}=w;j&&(h.alias=j),ee===!1&&(h.editable=!1)}const A=d?.[m]??null;h.defaultValue=m===l?r:A;const q=c?.[m]??null;h.domain=m===l?null:q?q.type==="inherited"?h.domain:q.clone():null,S.push(h)}return S}get floorInfo(){return this.parent?.floorInfo}get isTable(){return!!this.parent?.isTable}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?this.parent.globalIdField:(M.getLogger(this).error(y("globalIdField")),null)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||M.getLogger(this).error(y("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){return this.parent?.relationships}set renderer(e){$(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?St(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const i=t.drawingInfo?.renderer,o=P(i,t,r);let l;const{subtypeCode:u}=this;if(u!=null&&Tt(o,t.subtypeField)){const d=o.uniqueValueInfos?.find(({value:c})=>(c=typeof c=="number"?String(c):c)===String(u));d&&(l=new E({symbol:d.symbol}))}else o?.type!=="simple"||o.visualVariables?.length||(l=o);return l}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;return i?i.visualVariables?.some(o=>o.type!=="rotationInfo")?void 0:P(i,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference??ae.WGS84}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[Ot(this.subtypeCode,t)]}readTitleFromService(e,t){const r=W(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw y("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw y("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw y("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new g("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw y("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:l,editFieldsInfo:u,objectIdField:d}=r;t={displayField:l,editFieldsInfo:u,fields:i,objectIdField:d,title:o}}return ft(t,e)}createQuery(){if(!this.parent)throw y("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=_(t,this.parent.definitionExpression),e}getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){return this._titleCreator.getTitle(this,e,t)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains&&this.parent){const r=H(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw y("queryAttachments");const i=e.clone();return i.where=X(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw y("queryFeatureCount");return r.parent.queryFeatureCount(D(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw y("queryFeatures");return r.parent.queryFeatures(D(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw y("queryObjectIds");return r.parent.queryObjectIds(D(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw y("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw y("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};s([n({clonable:!1,readOnly:!0})],a.prototype,"_titleCreator",null),s([n({type:Re,json:f({name:"attributeTableInfo"})})],a.prototype,"attributeTableTemplate",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),s([n({json:f()})],a.prototype,"charts",void 0),s([n({type:Boolean,nonNullable:!0,json:f({name:"enableEditing"})})],a.prototype,"editingEnabled",void 0),s([n({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),s([n({clonable:!1,readOnly:!0})],a.prototype,"featureTitleFields",null),s([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),s([oe("fieldOverrides")],a.prototype,"writeFieldOverrides",null),s([n({...z.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),s([n(z.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),s([n({type:Le,json:f({name:"formInfo"})})],a.prototype,"formTemplate",void 0),s([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"isTable",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"globalIdField",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([n(O(v(Ve)))],a.prototype,"labelsVisible",void 0),s([n({type:[He],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Qe},write:{ignoreOrigin:!0,layerContainerTypes:x}}})],a.prototype,"labelingInfo",void 0),s([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,layerContainerTypes:x}}})],a.prototype,"layerType",void 0),s([n(O(v($e)))],a.prototype,"legendEnabled",void 0),s([n({type:["show","hide"]})],a.prototype,"listMode",void 0),s([n((()=>{const e=v(Me);return e.json.origins.service.read=!1,O(e,{spatialOnly:!0})})())],a.prototype,"minScale",void 0),s([n((()=>{const e=v(Ne);return e.json.origins.service.read=!1,O(e,{spatialOnly:!0})})())],a.prototype,"maxScale",void 0),s([n({readOnly:!0})],a.prototype,"effectiveScaleRange",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),s([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:f({spatialOnly:!0})})],a.prototype,"opacity",void 0),s([n({clonable:!1})],a.prototype,"parent",void 0),s([n(O(v(ke)))],a.prototype,"popupEnabled",void 0),s([n({type:le,json:f({name:"popupInfo"})})],a.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"relationships",null),s([n({types:Z,json:f({target:"layerDefinition.drawingInfo.renderer",spatialOnly:!0})})],a.prototype,"renderer",null),s([T("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),s([T("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),s([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"subtypeField",null),s([n({type:[B],json:f({name:"layerDefinition.templates"})})],a.prototype,"templates",void 0),s([T("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),s([n({type:String,json:f()})],a.prototype,"title",void 0),s([T("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),s([n({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),s([n({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),s([n({type:Boolean,nonNullable:!0,json:f({name:"visibility",spatialOnly:!0})})],a.prototype,"visible",void 0),a=s([N("esri.layers.support.SubtypeSublayer")],a);const D=(e,t,r)=>{if(!r)return t.createQuery();const i=J.from(r);return i.where=X(i.where,e.subtypeField,t.subtypeCode),i},X=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return i.test(l)?l.replace(i,o):_(o,l)},y=e=>new g(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),F=a,b="SubtypeGroupLayer",jt="esri.layers.SubtypeGroupLayer";function K(e,t){return new g("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function Y(e,t){const r=[];for(const i of e){const o=new F;o.read(i,t),r.push(o)}return r}const G=Q();function R(){return{name:"layerType",read:{enabled:!0},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0}}}let p=class extends Ae(Ee(xe(je(Ge(De(Pe(Oe(qe(_e(k(Ce(Te(V.ClonableMixin(Ie)))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(F)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer","Table"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=ye(async(t,r,i)=>{const{save:o,saveAs:l}=await import("./featureLayerUtils-DzA4--bg.js");switch(t){case L.SAVE:return o(this,r);case L.SAVE_AS:return l(this,i,r)}}),this.addHandles(ce(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),he))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(fe).then(async()=>{if(!this.url)throw new g("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new g("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Be(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Je(this)}get operationalLayerType(){return this.isTable?"SubtypeGroupTable":"SubtypeGroupLayer"}get parsedUrl(){const e=be(this.url);return e!=null&&this.layerId!=null&&(e.path=me(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ge(this.url,t):t}async addAttachment(e,t){const r=await Ze(this,e,t,b);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await ze(this,e,t,r,b);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return We(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await we(import("./FeatureLayerSource-DTGjYcMn.js"),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=_(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Xe(this,e,t,b);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return Ke(this,e,b)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains){const i=H(this,e);if(i)return i}const r=Ye(this,t?.feature);if(r){const i=r.domains?.[e];return i?.type==="inherited"?this._getLayerDomain(e):i}return this._getLayerDomain(e)}loadAll(){return Se(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return et(this,e,t,b)}async queryFeatures(e,t){const r=await this.load(),i=J.from(e)??r.createQuery(),o=i.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),i.outFields=o);const l=await r.source.queryFeatures(i,t);if(l?.features)for(const u of l.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return l}async queryObjectIds(e,t){return(await tt(this,e,t,b)).filter(ve)}async queryFeatureCount(e,t){return rt(this,e,t,b)}async queryExtent(e,t){return it(this,e,t,b)}async queryRelatedFeatures(e,t){return st(this,e,t,b)}async queryRelatedFeaturesCount(e,t){return nt(this,e,t,b)}async save(e){return this._debouncedSaveOperations(L.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(L.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:i,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return o?.push(K(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return o?.push(K(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(o?.push(new g("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&mt(this,e)}async getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){const r=this.findSublayerForFeature(e);return r?await r.getFeatureTitle(e,t):this.displayField&&this.fieldsIndex.has(this.displayField)?e.attributes[this.fieldsIndex.get(this.displayField).name]??"":this.objectIdField&&this.fieldsIndex.has(this.objectIdField)?e.attributes[this.fieldsIndex.get(this.objectIdField).name]??"":""}get featureTitleFields(){const e=new Set;for(const t of this.sublayers){const r=t.featureTitleFields;for(const i of r)e.add(i)}return[...e]}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!this.subtypes?.length)throw new g("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Fe(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return at(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};s([n({readOnly:!0})],p.prototype,"createQueryVersion",null),s([n({readOnly:!0})],p.prototype,"editingEnabled",null),s([n({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),s([n({...G.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),s([n(G.fieldsIndex)],p.prototype,"fieldsIndex",void 0),s([n(Ue)],p.prototype,"id",void 0),s([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),s([n({type:["SubtypeGroupLayer","SubtypeGroupTable"],json:{...R(),origins:{"web-document":R(),"portal-item":R()}}})],p.prototype,"operationalLayerType",null),s([n(G.outFields)],p.prototype,"outFields",void 0),s([n({readOnly:!0})],p.prototype,"parsedUrl",null),s([n({clonable:!1})],p.prototype,"source",null),s([n({type:C.ofType(F),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let i=null;if(this.useUniqueColorsForSublayers){const l=gt(t,r);i=l?vt(e.length,l):null}const o=e.map(({code:l},u)=>{const d=new F({subtypeCode:l});d.read(t,r);const c=i?.[u];return c&&d.read({drawingInfo:{renderer:c.toJSON()}},r),d});return new(C.ofType(F))(o)}}}},read:{source:["layers","tables"],reader(e,t,r){let i;return t.layerType==="SubtypeGroupLayer"&&t.layers?.length?i=Y(t.layers,r):t.layerType==="SubtypeGroupTable"&&t.tables?.length&&(i=Y(t.tables,r)),new(C.ofType(F))(i)}},write:{ignoreOrigin:!0,writer(e,t,r,i){const o=[];for(const l of e){const u=l.write({},i);o.push(u)}this.isTable?t.tables=o:t.layers=o}}}})],p.prototype,"sublayers",void 0),s([n()],p.prototype,"useUniqueColorsForSublayers",void 0),s([n({type:bt})],p.prototype,"timeInfo",void 0),s([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),s([T("service","title",["name"])],p.prototype,"readTitleFromService",null),s([n({json:{read:!1}})],p.prototype,"type",void 0),s([n({clonable:!1,readOnly:!0})],p.prototype,"featureTitleFields",null),p=s([N(jt)],p);const Ct=p;export{Ct as default};
