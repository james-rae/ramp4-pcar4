const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./featureLayerUtils-B9IxsPOY.js","./main-BxgY9rsH.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./utils-RIBJfWeJ.js","./PortalItem-BsyR8trZ.js","./jsonContext-B8pHXiZ1.js","./portalItemUtils-DzYGRPSn.js","./projection-DMFhF-YC.js","./projectBuffer-DIzlXyWh.js","./saveUtils-DGRmzCPU.js","./arcgisLayerUrl-ChGKuGlS.js","./fetchService-Cys6-iz_.js","./FeatureLayerSource-Z3HDBVAY.js","./uuid-Cl5lrJ4c.js","./MeshLocalVertexSpace-lZimXs-u.js","./meshVertexSpaceUtils-LYdd4sko.js","./vec32-BAamZCaj.js","./common-DQOJ18NT.js","./External-DVuCw3Ek.js","./infoFor3D-_5f2f6Um.js","./MeshTransform-CIPVgfwC.js","./mat4-D41khPIZ.js","./mat4f64-CSKppSlJ.js","./quat-B5_fAr9y.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec42-CKs01hkn.js","./editingSupport-DH6OJiCX.js","./normalizeUtils-CDWFGYLp.js","./normalizeUtilsCommon-fjqoXs3F.js","./utils-BcXZRZfk.js","./utils-Bg1Av-fZ.js","./EditBusLayer-ROeh0_TX.js","./clientSideDefaults-Dq9C1Agr.js","./QueryEngineCapabilities-DjYb9CEb.js","./capabilities-Y9lFlGVh.js","./QueryTask-BBhAyYeU.js","./Query-BUGEVyQ0.js","./Field-BV6jxk4Y.js","./fieldType-CDehaUIf.js","./TimeExtent-nXn1Yp-A.js","./executeForIds-DAtsBCJy.js","./query-DxIYqBWB.js","./pbfQueryUtils-C0cZy00B.js","./pbf-DgO7b-qM.js","./OptimizedFeature-CIptWNVu.js","./OptimizedFeatureSet-Blu9Ckm7.js","./queryZScale-DRSgTWp8.js","./executeQueryPBF-ebkCCtAL.js","./featureConversionUtils-CgGNTVeF.js","./FeatureSet-BCtQJPAQ.js","./executeQueryJSON-Cunk0NI3.js","./featureLayerUtils-mInrfbS3.js","./jsonUtils-hTCFmv9R.js","./UniqueValueRenderer-BPF4jlbt.js","./RendererLegendOptions-DELlULko.js","./diffUtils-Grevtp43.js","./colorRamps-BMppgk9L.js","./sizeVariableUtils-Cmcuvw-4.js","./visualVariableUtils-Dx-0KABk.js","./compilerUtils-PTx1wDU2.js","./lengthUtils-BAGGGarW.js","./styleUtils-DPoY-8Uh.js","./LRUCache-CN6Sfx03.js","./Version-FQ_QE7bS.js","./FieldsIndex-DaqQLNY4.js","./UnknownTimeZone-DDjxAEy3.js","./OverrideHelper-GHCIxlsx.js","./colorUtils-B0fOjMOh.js","./vec4f64-CMoMXWBi.js","./utils-QWndGYJy.js","./enums-CmIX1y88.js","./quantizationUtils-hLqXtqlC.js","./heatmapUtils-DN8zKnCf.js","./RelationshipQuery-7mqNyeFQ.js","./editsZScale-CSETnPFq.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./preload-helper-ExcqyqRp.js";import{em as K,b0 as G,dd as X,f3 as D,h as v,a_ as Y,n as ee,D as te,s as b,bv as x,q as i,u as o,v as re,b6 as ie,z as $,C as N,f$ as se,g0 as oe,g1 as ne,f as ae,V as q,dD as le,aG as pe,aB as ue,J as de,I as ye,a1 as ce,bw as he,a$ as me}from"./main-BxgY9rsH.js";import{t as fe}from"./loadAll-DkjYt7dC.js";import{S as k}from"./MultiOriginJSONSupport-D6n-cOa5.js";import{f as be}from"./Layer-BarL0RL3.js";import{i as ge}from"./APIKeyMixin-jiyoQaAc.js";import{l as ve}from"./ArcGISService-D1mVF7Ib.js";import{l as we}from"./BlendLayer-hEBUsbhh.js";import{e as Fe}from"./CustomParametersMixin-BERZ6lcW.js";import{F as Se}from"./EditBusLayer-ROeh0_TX.js";import{V as $e,B as Ie}from"./FeatureLayerBase-5uqsTVor.js";import{b as Oe}from"./OperationalLayer-PaMzBMjN.js";import{j as je}from"./PortalLayer-BRX6oPjW.js";import{f as Ee}from"./RefreshableLayer-DW4yXPZl.js";import{t as Te}from"./ScaleRangeLayer-D-L0QMXn.js";import{l as Ce}from"./TemporalLayer-B9yd5GsK.js";import{w as _e}from"./arcgisLayerUrl-ChGKuGlS.js";import{e as Ae,p as qe,d as Le,j as xe,v as Pe,l as De,u as Re}from"./commonProperties-KeSEgzBB.js";import{M,T as Q,J as Ve,Z as Ge,I as Ne,F as ke,q as Me,A as Qe,v as Ue,Q as He,S as Be,O as Je,P as ze,E as We,L as Ze,C as Ke,R as Xe}from"./featureLayerUtils-mInrfbS3.js";import{s as U}from"./fieldProperties-6zioXU5r.js";import{p as Ye,A as et,z as tt}from"./UniqueValueRenderer-BPF4jlbt.js";import{p as E}from"./jsonUtils-hTCFmv9R.js";import{O as rt}from"./colorUtils-B0fOjMOh.js";import{I as it}from"./cimSymbolUtils-DFb1FrSf.js";import{h as st,g as ot}from"./utils-DKfjKY-8.js";import{p as H}from"./FeatureTemplate-B6oq-Xdv.js";import{C as nt,n as at}from"./labelingInfo-DW8kaqu1.js";import{b as B}from"./Query-BUGEVyQ0.js";import{p as lt}from"./popupUtils-C7_sYsR_.js";import{d as pt}from"./TimeInfo-85ByaozC.js";import{t as ut}from"./versionUtils-CepMa1kv.js";import{A as O}from"./interfaces-CL2NbQte.js";import"./TimeExtent-nXn1Yp-A.js";import"./jsonUtils-JPkcGxoj.js";import"./parser-BUu-fTBs.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-D41khPIZ.js";import"./common-DQOJ18NT.js";import"./uuid-Cl5lrJ4c.js";import"./Field-BV6jxk4Y.js";import"./fieldType-CDehaUIf.js";import"./HeightModelInfo-C0vtfeQ9.js";import"./LayerFloorInfo-T9fTGXrP.js";import"./Relationship-Daa6XDil.js";import"./serviceCapabilitiesUtils-BmMEC5Jj.js";import"./PortalItem-BsyR8trZ.js";import"./portalItemUtils-DzYGRPSn.js";import"./projection-DMFhF-YC.js";import"./projectBuffer-DIzlXyWh.js";import"./ElevationInfo-DtAwlWvE.js";import"./lengthUtils-BAGGGarW.js";import"./RelationshipQuery-7mqNyeFQ.js";import"./FieldsIndex-DaqQLNY4.js";import"./UnknownTimeZone-DDjxAEy3.js";import"./RendererLegendOptions-DELlULko.js";import"./diffUtils-Grevtp43.js";import"./colorRamps-BMppgk9L.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Dx-0KABk.js";import"./compilerUtils-PTx1wDU2.js";import"./styleUtils-DPoY-8Uh.js";import"./LRUCache-CN6Sfx03.js";import"./Version-FQ_QE7bS.js";import"./OverrideHelper-GHCIxlsx.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-hLqXtqlC.js";import"./heatmapUtils-DN8zKnCf.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./labelUtils-BH4uN6k4.js";const J={key:"type",base:Ye,errorContext:"renderer",typeMap:{simple:E,"unique-value":et,"class-breaks":tt}},L=K({types:J});function dt(e,t){const r=e.drawingInfo?.renderer,s=r?L(r,e,t):null;if(s?.type==="simple")return st(s.symbol,null)?s.symbol.clone():null}const yt=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function ct(e,t){return rt(yt,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const s=t.clone();return s.type==="cim"?it(s,r):ot(s,r),new E({symbol:s})})}const R=U();let ht=0;function S(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function mt(e){return new E({symbol:ft(e)})}function ft(e){switch(e){case"point":case"multipoint":return ne.clone();case"polyline":return oe.clone();case"polygon":case"multipatch":return se.clone();default:return null}}function bt(e,t){return!!t&&e?.type==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function gt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},l=z(e,t);if(l!=null){const{defaultValues:a}=l;for(const u in a)s[u]=a[u]}return s[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let n=class extends k(G(X(ae))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ht++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return D(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:l}=this;let a;if(s){a=[];let u=0;s.forEach(({name:d,alias:y,editable:w,visible:F})=>{if(!F)return;const c=l?.fields?.find(T=>T.name===d);if(!c)return;const f={name:d};let g=!1;y!==c.alias&&(f.alias=y,g=!0),w!==c.editable&&(f.editable=w,g=!0),a.push(f),g&&u++}),u===0&&a.length===s.length&&(a=null)}else a=v(e);a?.length&&Y(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:l,subtypeField:a}=e,u=l?.find(F=>F.code===r),d=u?.defaultValues,y=u?.domains,w=[];for(const F of s){const c=F.clone(),{name:f}=c,g=t?.find(I=>I.name===f);if(c.visible=!t||!!g,g){const{alias:I,editable:Z}=g;I&&(c.alias=I),Z===!1&&(c.editable=!1)}const T=d?.[f]??null;c.defaultValue=f===a?r:T;const C=y?.[f]??null;c.domain=f===a?null:C?C.type==="inherited"?c.domain:C.clone():null,w.push(c)}return w}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||ee.getLogger(this).error(h("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){return this.parent?.relationships}set renderer(e){D(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?mt(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const s=t.drawingInfo?.renderer,l=L(s,t,r);let a;const{subtypeCode:u}=this;if(u!=null&&bt(l,t.subtypeField)){const d=l.uniqueValueInfos?.find(({value:y})=>(y=typeof y=="number"?String(y):y)===String(u));d&&(a=new E({symbol:d.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(a=l);return a}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;return s?s.visualVariables?.some(a=>a.type!=="rotationInfo")?void 0:L(s,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference??te.WGS84}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[gt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw h("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw h("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw h("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw h("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:l}=this;if(r){const{displayField:a,editFieldsInfo:u,objectIdField:d}=r;t={displayField:a,editFieldsInfo:u,fields:s,objectIdField:d,title:l}}return lt(t,e)}createQuery(){if(!this.parent)throw h("createQuery");const e=M(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=x(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains&&this.parent){const r=Q(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw h("queryAttachments");const s=e.clone();return s.where=W(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatureCount");return r.parent.queryFeatureCount(_(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryFeatures");return r.parent.queryFeatures(_(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw h("queryObjectIds");return r.parent.queryObjectIds(_(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw h("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({type:Ae,json:{name:"attributeTableInfo",write:{ignoreOrigin:!0}}})],n.prototype,"attributeTableTemplate",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"effectiveCapabilities",null),i([o({json:{write:{ignoreOrigin:!0}}})],n.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],n.prototype,"editingEnabled",void 0),i([o({type:Boolean,readOnly:!0})],n.prototype,"effectiveEditingEnabled",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"elevationInfo",null),i([o({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],n.prototype,"fieldOverrides",void 0),i([re("fieldOverrides")],n.prototype,"writeFieldOverrides",null),i([o({...R.fields,readOnly:!0,json:{read:!1}})],n.prototype,"fields",null),i([o(R.fieldsIndex)],n.prototype,"fieldsIndex",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"floorInfo",null),i([o({type:$e,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],n.prototype,"formTemplate",void 0),i([o({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"geometryType",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),i([o(S(v(qe)))],n.prototype,"labelsVisible",void 0),i([o({type:[nt],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:at},write:{ignoreOrigin:!0}}})],n.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"layerType",void 0),i([o(S(v(Le)))],n.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],n.prototype,"listMode",void 0),i([o((()=>{const e=v(xe);return e.json.origins.service.read=!1,S(e)})())],n.prototype,"minScale",void 0),i([o((()=>{const e=v(Pe);return e.json.origins.service.read=!1,S(e)})())],n.prototype,"maxScale",void 0),i([o({readOnly:!0})],n.prototype,"effectiveScaleRange",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"objectIdField",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],n.prototype,"opacity",void 0),i([o({clonable:!1})],n.prototype,"parent",void 0),i([o(S(v(De)))],n.prototype,"popupEnabled",void 0),i([o({type:ie,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],n.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"relationships",null),i([o({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],n.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],n.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],n.prototype,"readRenderer",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"spatialReference",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"subtypeCode",void 0),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"subtypeField",null),i([o({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],n.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],n.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],n.prototype,"title",void 0),i([$("service","title",["subtypes"])],n.prototype,"readTitleFromService",null),i([o({readOnly:!0,json:{read:!1}})],n.prototype,"url",null),i([o({readOnly:!0})],n.prototype,"userHasUpdateItemPrivileges",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],n.prototype,"visible",void 0),n=i([N("esri.layers.support.SubtypeSublayer")],n);const _=(e,t,r)=>{if(!r)return t.createQuery();const s=B.from(r);return s.where=W(s.where,e.subtypeField,t.subtypeCode),s},W=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,l):x(l,a)},h=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=n,m="SubtypeGroupLayer",vt="esri.layers.SubtypeGroupLayer";function V(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const A=U();let p=class extends Ie(Se(we(Ce(Te(Ee(ve(Oe(je(k(Fe(ge(G(be))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(q.ofType(j)),this.useUniqueColorsForSublayers=!0,this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=le(async(t,r,s)=>{const{save:l,saveAs:a}=await P(()=>import("./featureLayerUtils-B9IxsPOY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url);switch(t){case O.SAVE:return l(this,r);case O.SAVE_AS:return a(this,s,r)}}),this.addHandles(pe(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),ue))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(de).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ve(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ge(this)}get parsedUrl(){const e=ye(this.url);return e!=null&&this.layerId!=null&&(e.path=ce(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?_e(this.url,t):t}async addAttachment(e,t){const r=await Ne(this,e,t,m);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const s=await ke(this,e,t,r,m);return this.lastEditsEventDate=new Date,s}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await he(P(()=>import("./FeatureLayerSource-Z3HDBVAY.js"),__vite__mapDeps([15,2,1,3,16,17,18,19,20,21,22,10,11,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,13,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78]),import.meta.url),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=M(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=x(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){const r=await Qe(this,e,t,m);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return Ue(this,e,m)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){if(!t?.excludeImpliedDomains){const s=Q(this,e);if(s)return s}const r=He(this,t?.feature);if(r){const s=r.domains?.[e];return s?.type==="inherited"?this._getLayerDomain(e):s}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return fe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Be(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),s=B.from(e)??r.createQuery(),l=s.outFields??[];l.includes(this.subtypeField)||(l.push(this.subtypeField),s.outFields=l);const a=await r.source.queryFeatures(s,t);if(a?.features)for(const u of a.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return a}async queryObjectIds(e,t){return Je(this,e,t,m)}async queryFeatureCount(e,t){return ze(this,e,t,m)}async queryExtent(e,t){return We(this,e,t,m)}async queryRelatedFeatures(e,t){return Ze(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return Ke(this,e,t,m)}async save(e){return this._debouncedSaveOperations(O.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(O.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:s,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return l?.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return l?.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&ut(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),!this.subtypes?.length)throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),me(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Xe(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};i([o({readOnly:!0})],p.prototype,"createQueryVersion",null),i([o({readOnly:!0})],p.prototype,"editingEnabled",null),i([o({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([o({...A.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([o(A.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([o(Re)],p.prototype,"id",void 0),i([o({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([o(A.outFields)],p.prototype,"outFields",void 0),i([o({readOnly:!0})],p.prototype,"parsedUrl",null),i([o({clonable:!1})],p.prototype,"source",null),i([o({type:q.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader(e,t,r){let s=null;if(this.useUniqueColorsForSublayers){const a=dt(t,r);s=a?ct(e.length,a):null}const l=e.map(({code:a},u)=>{const d=new j({subtypeCode:a});d.read(t,r);const y=s?.[u];return y&&d.read({drawingInfo:{renderer:y.toJSON()}},r),d});return new(q.ofType(j))(l)}}}},name:"layers",write:{ignoreOrigin:!0}}})],p.prototype,"sublayers",void 0),i([o()],p.prototype,"useUniqueColorsForSublayers",void 0),i([o({type:pt})],p.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([$("service","title",["name"])],p.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],p.prototype,"type",void 0),p=i([N(vt)],p);const Rr=p;export{Rr as default};
