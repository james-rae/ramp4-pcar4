import{ej as W,a_ as D,da as Y,f0 as R,f as v,aY as K,n as X,B as ee,s as b,bt as q,k as i,o as n,q as te,b4 as re,u as S,A as G,fY as ie,fZ as se,f_ as ne,e as oe,V as L,dA as ae,aE as le,az as ue,G as pe,I as de,Z as ye,bu as ce,aZ as he}from"./main-DyJf3FFo.js";import{t as fe}from"./loadAll-Bs9iu8r1.js";import{S as V}from"./MultiOriginJSONSupport-Ld4olNaD.js";import{f as me}from"./Layer-T_GCFI6Y.js";import{i as be}from"./APIKeyMixin-BbtwP6X3.js";import{l as ge}from"./ArcGISService-3EUBY6Rn.js";import{l as ve}from"./BlendLayer-DhpFc4wQ.js";import{e as we}from"./CustomParametersMixin-DO49EAYM.js";import{F as Fe}from"./EditBusLayer-B4mpuJiT.js";import{V as Se,B as Ie}from"./FeatureLayerBase-DwDocj9i.js";import{b as Oe}from"./OperationalLayer-Ci0vpWOe.js";import{j as je}from"./PortalLayer-CBKqyWJk.js";import{f as Ee}from"./RefreshableLayer-mpLfI5Gm.js";import{t as Te}from"./ScaleRangeLayer-B-rcqGlY.js";import{l as Ce}from"./TemporalLayer-CiTNTYEf.js";import{w as Ae}from"./arcgisLayerUrl-Ch65F_j6.js";import{e as qe,p as Le,d as xe,j as _e,v as Pe,l as De,u as Re}from"./commonProperties-piIkDmNC.js";import{M as $,T as N,J as Ge,Z as Ve,I as $e,F as Ne,q as ke,A as Me,v as Ue,Q as Qe,S as He,O as Be,P as Ze,E as Je,L as ze,C as We,R as Ye}from"./featureLayerUtils-Cn1rmC27.js";import{s as k}from"./fieldProperties-CH94xLgn.js";import{p as Ke,A as Xe,z as et}from"./UniqueValueRenderer-Opzeajyg.js";import{p as j}from"./jsonUtils-BOshmfJ0.js";import{O as tt}from"./colorUtils-tsfSwOU6.js";import{I as rt}from"./cimSymbolUtils-Dgpiaypl.js";import{h as it,g as st}from"./utils-D5YVqPOJ.js";import{p as M}from"./FeatureTemplate-DtPtO-DQ.js";import{C as nt,n as ot}from"./labelingInfo-CimE0Mwv.js";import{b as U}from"./Query-D-1qVkkR.js";import{p as at}from"./popupUtils-CSvrRQie.js";import{d as lt}from"./TimeInfo-D0ZHVnMO.js";import{t as ut}from"./versionUtils-CybZ4a-I.js";import{A as E}from"./interfaces-Cwm0pihk.js";const Q={key:"type",base:Ke,errorContext:"renderer",typeMap:{simple:j,"unique-value":Xe,"class-breaks":et}},x=W({types:Q});function pt(e,t){const r=e.drawingInfo?.renderer,s=r?x(r,e,t):null;if(s?.type==="simple")return it(s.symbol,null)?s.symbol.clone():null}const dt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function yt(e,t){return tt(dt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const s=t.clone();return s.type==="cim"?rt(s,r):st(s,r),new j({symbol:s})})}const H=k();let ct=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ht(e){return new j({symbol:ft(e)})}function ft(e){switch(e){case"point":case"multipoint":return ne.clone();case"polyline":return se.clone();case"polygon":case"multipatch":return ie.clone();default:return null}}function mt(e,t){return!!t&&e?.type==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function B(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function bt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},l=B(e,t);if(l!=null){const{defaultValues:a}=l;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new M({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let o=class extends V(D(Y(oe))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ct++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return R(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:l}=this;let a;if(s){a=[];let p=0;s.forEach(({name:d,alias:y,editable:w,visible:F})=>{if(!F)return;const c=l?.fields?.find(C=>C.name===d);if(!c)return;const m={name:d};let g=!1;y!==c.alias&&(m.alias=y,g=!0),w!==c.editable&&(m.editable=w,g=!0),a.push(m),g&&p++}),p===0&&a.length===s.length&&(a=null)}else a=v(e);a?.length&&K(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:l,subtypeField:a}=e,p=l?.find(F=>F.code===r),d=p?.defaultValues,y=p?.domains,w=[];for(const F of s){const c=F.clone(),{name:m}=c,g=t?.find(O=>O.name===m);if(c.visible=!t||!!g,g){const{alias:O,editable:z}=g;O&&(c.alias=O),z===!1&&(c.editable=!1)}const C=d?.[m]??null;c.defaultValue=m===a?r:C;const A=y?.[m]??null;c.domain=m===a?null:A?A.type==="inherited"?c.domain:A.clone():null,w.push(c)}return w}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||X.getLogger(this).error(h("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){return this.parent?.relationships}set renderer(e){R(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ht(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const s=t.drawingInfo?.renderer,l=x(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&mt(l,t.subtypeField)){const d=l.uniqueValueInfos?.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(p));d&&(a=new j({symbol:d.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(a=l);return a}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;return s?s.visualVariables?.some(l=>l.type!=="rotationInfo")?void 0:x(s,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference??ee.WGS84}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[bt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=B(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw h("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:l}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:d}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:d,title:l}}return at(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=$(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=q(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains&&this.parent){const r=N(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const s=e.clone();return s.where=Z(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(_(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(_(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(_(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({type:qe,json:{name:"attributeTableInfo",write:{ignoreOrigin:!0}}})],o.prototype,"attributeTableTemplate",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],o.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],o.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],o.prototype,"fieldOverrides",void 0),i([te("fieldOverrides")],o.prototype,"writeFieldOverrides",null),i([n({...H.fields,readOnly:!0,json:{read:!1}})],o.prototype,"fields",null),i([n(H.fieldsIndex)],o.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"floorInfo",null),i([n({type:Se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],o.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),i([n(I(v(Le)))],o.prototype,"labelsVisible",void 0),i([n({type:[nt],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ot},write:{ignoreOrigin:!0}}})],o.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"layerType",void 0),i([n(I(v(xe)))],o.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],o.prototype,"listMode",void 0),i([n((()=>{const e=v(_e);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"minScale",void 0),i([n((()=>{const e=v(Pe);return e.json.origins.service.read=!1,I(e)})())],o.prototype,"maxScale",void 0),i([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],o.prototype,"opacity",void 0),i([n({clonable:!1})],o.prototype,"parent",void 0),i([n(I(v(De)))],o.prototype,"popupEnabled",void 0),i([n({type:re,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],o.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"relationships",null),i([n({types:Q,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],o.prototype,"renderer",null),i([S("service","renderer",["drawingInfo.renderer","subtypeField","type"])],o.prototype,"readRendererFromService",null),i([S("renderer",["layerDefinition.drawingInfo.renderer"])],o.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"subtypeCode",void 0),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"subtypeField",null),i([n({type:[M],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],o.prototype,"templates",void 0),i([S("service","templates",["geometryType","subtypeField","subtypes","type"])],o.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],o.prototype,"title",void 0),i([S("service","title",["subtypes"])],o.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],o.prototype,"url",null),i([n({readOnly:!0})],o.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],o.prototype,"visible",void 0),o=i([G("esri.layers.support.SubtypeSublayer")],o);const _=(e,t,r)=>{if(!r)return t.createQuery();const s=U.from(r);return s.where=Z(s.where,e.subtypeField,t.subtypeCode),s},Z=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,l):q(l,a)},h=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=o,f="SubtypeGroupLayer",gt="esri.layers.SubtypeGroupLayer";function J(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const P=k();let u=class extends Ie(Fe(ve(Ce(Te(Ee(ge(Oe(je(V(we(be(D(me))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(L.ofType(T)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=ae(async(t,r,s)=>{const{save:l,saveAs:a}=await import("./featureLayerUtils-DQF1ppoM.js");switch(t){case E.SAVE:return l(this,r);case E.SAVE_AS:return a(this,s,r)}}),this.addHandles(le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),ue))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(pe).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ge(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=de(this.url);return e!=null&&this.layerId!=null&&(e.path=ye(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ae(this.url,t):t}async addAttachment(e,t){const r=await $e(this,e,t,f);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const s=await Ne(this,e,t,r,f);return this.lastEditsEventDate=new Date,s}async applyEdits(e,t){return ke(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await ce(import("./FeatureLayerSource-C8-oqAWN.js"),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=$(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=q(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Me(this,e,t,f);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return Ue(this,e,f)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains){const s=N(this,e);if(s)return s}const r=Qe(this,t?.feature);if(r){const s=r.domains?.[e];return s?.type==="inherited"?this._getLayerDomain(e):s}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return fe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return He(this,e,t,f)}async queryFeatures(e,t){const r=await this.load(),s=U.from(e)??r.createQuery(),l=s.outFields??[];l.includes(this.subtypeField)||(l.push(this.subtypeField),s.outFields=l);const a=await r.source.queryFeatures(s,t);if(a?.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Be(this,e,t,f)}async queryFeatureCount(e,t){return Ze(this,e,t,f)}async queryExtent(e,t){return Je(this,e,t,f)}async queryRelatedFeatures(e,t){return ze(this,e,t,f)}async queryRelatedFeaturesCount(e,t){return We(this,e,t,f)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:s,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return l?.push(J(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return l?.push(J(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&ut(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!this.subtypes?.length)throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),he(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ye(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([n({readOnly:!0})],u.prototype,"createQueryVersion",null),i([n({readOnly:!0})],u.prototype,"editingEnabled",null),i([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([n({...P.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([n(P.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([n(Re)],u.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),i([n(P.outFields)],u.prototype,"outFields",void 0),i([n({readOnly:!0})],u.prototype,"parsedUrl",null),i([n({clonable:!1})],u.prototype,"source",null),i([n({type:L.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let s=null;if(this.useUniqueColorsForSublayers){const a=pt(t,r);s=a?yt(e.length,a):null}const l=e.map(({code:a},p)=>{const d=new T({subtypeCode:a});d.read(t,r);const y=s?.[p];return y&&d.read({drawingInfo:{renderer:y.toJSON()}},r),d});return new(L.ofType(T))(l)}}}},name:"layers",write:{ignoreOrigin:!0}}})],u.prototype,"sublayers",void 0),i([n()],u.prototype,"useUniqueColorsForSublayers",void 0),i([n({type:lt})],u.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([S("service","title",["name"])],u.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],u.prototype,"type",void 0),u=i([G(gt)],u);const vt=u;export{vt as default};
