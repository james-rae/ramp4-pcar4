const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./featureLayerUtils-CkbWoQuW.js","./main-BTSMlyeL.js","./preload-helper-dJJaZANz.js","./main-ByE8X11X.css","./originUtils-CRfESh92.js","./multiOriginJSONSupportUtils-Dlz6FGm5.js","./utils-BWBjM3XF.js","./jsonContext-D-oOAKDM.js","./saveAPIKeyUtils-l0UIBsGO.js","./saveUtils-3Av8_w6U.js","./fetchService-DXMlQdob.js","./lazyLayerLoader-mMMkbQKA.js","./FeatureLayerSource-BKPh23KA.js","./meshVertexSpaceUtils-tzLtF62j.js","./MeshLocalVertexSpace-K2Z7Nvp3.js","./vec3-bfjuFE8x.js","./External-BiYXT5gp.js","./editingSupport-B2jSDOp8.js","./clientSideDefaults-zk2KxFh_.js","./QueryEngineCapabilities-CCudnOfH.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { gD as u, e2 as m, dW as i$1, dX as s, g7 as p, W as a, ew as o, H as s$1, b8 as m$1, s as s$2, g8 as p$1, gE as x, b3 as n, f9 as b, aW as e, aX as y, ex as r, gF as y$1, ga as m$2, gb as C, gc as i, e5 as c, gC as T, gB as S, ge as y$2, b6 as P, e3 as o$1, gi as p$2, aY as c$1, gG as p$3, gH as A, gI as w, gj as s$3, gJ as c$2, gK as u$1, gL as S$1, eZ as m$3, gM as D, gN as F, dZ as n$1, g6 as f, e1 as t, d_ as f$1, eA as l, d$ as u$2, e0 as j, eB as e$1, eC as i$2, a3 as V, b0 as k$1, b2 as d$1, fm as C$1, B as a$1, e$ as Q$1, gO as T$1, I, aA as V$1, gP as h, gQ as m$4, gR as w$1, gS as b$1, gT as h$1, gU as j$1, gV as I$1, gp as t$1, gW as q, gX as F$1, gY as A$1, gZ as O, g_ as P$1, g$ as E, gq as A$2, h0 as e$2, g1 as g, h1 as S$2, e4 as I$2, f$ as d, ec as b$2 } from './main-BTSMlyeL.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const G={key:"type",base:p$3,errorContext:"renderer",typeMap:{simple:m$1,"unique-value":A,"class-breaks":w}},N=s$3(),U=u({types:G});let $=0;function k(e){const t=e.json.write;return "object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function M(e){return new m$1({symbol:_(e)})}function _(e){switch(e){case"point":case"multipoint":return S$1.clone();case"polyline":return u$1.clone();case"polygon":case"multipatch":return c$2.clone();default:return null}}function B(e,t){return !!t&&("unique-value"===e?.type&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression)}function H(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function Q(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null;}const i={},o=H(e,t);if(null!=o){const{defaultValues:e}=o;for(const t in e)i[t]=e[t];}return i[t.subtypeField]=e,new p$2({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const z="esri.layers.support.SubtypeSublayer";let J=class extends(m(i$1(s(m$3)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${$++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0;}load(e){return p(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:o$1}=this;let n;if(i){n=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:s})=>{if(!s)return;const l=o$1?.fields?.find((e=>e.name===t));if(!l)return;const a={name:t};let p=!1;r!==l.alias&&(a.alias=r,p=!0),i!==l.editable&&(a.editable=i,p=!0),n.push(a),p&&e++;})),0===e&&n.length===i.length&&(n=null);}else n=a(e);n?.length&&o(r,n,t);}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:o,subtypeField:n}=e,s=o?.find((e=>e.code===r)),l=s?.defaultValues,a=s?.domains,p=[];for(const d of i){const e=d.clone(),{name:i}=e,o=t?.find((e=>e.name===i));if(e.visible=!t||!!o,o){const{alias:t,editable:r}=o;t&&(e.alias=t),!1===r&&(e.editable=!1);}const s=l?.[i]??null;e.defaultValue=i===n?r:s;const u=a?.[i]??null;e.domain=i===n?null:u?"inherited"===u.type?e.domain:u.clone():null,p.push(e);}return p}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return {minScale:e,maxScale:t}}get objectIdField(){return this.parent||s$1.getLogger(z).error(W("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){p(e,this.fieldsIndex),this._override("renderer",e);}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?M(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,n=U(i,t,r);let s;const{subtypeCode:l}=this;if(null!=l&&B(n,t.subtypeField)){const e=n.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(l)));e&&(s=new m$1({symbol:e.symbol}));}else "simple"!==n?.type||n.visualVariables?.length||(s=n);return s}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const o=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return o?void 0:U(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return [Q(this.subtypeCode,t)]}readTitleFromService(e,t){const r=H(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return !!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw W("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s$2("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw W("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s$2("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw W("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s$2("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw W("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:s}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:s,title:o};}return p$1(t,e)}createQuery(){if(!this.parent)throw W("createQuery");const e=x(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=n(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw W("queryAttachments");const i=e.clone();return i.where=K(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw W("queryFeatures");const i=b.from(e)??r.createQuery();return null!=e&&(i.where=K(i.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(i,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};e([y({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"effectiveCapabilities",null),e([y({json:{write:{ignoreOrigin:!0}}})],J.prototype,"charts",void 0),e([y({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],J.prototype,"editingEnabled",void 0),e([y({type:Boolean,readOnly:!0})],J.prototype,"effectiveEditingEnabled",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"elevationInfo",null),e([y({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],J.prototype,"fieldOverrides",void 0),e([r("fieldOverrides")],J.prototype,"writeFieldOverrides",null),e([y({...N.fields,readOnly:!0,json:{read:!1}})],J.prototype,"fields",null),e([y(N.fieldsIndex)],J.prototype,"fieldsIndex",void 0),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"floorInfo",null),e([y({type:y$1,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],J.prototype,"formTemplate",void 0),e([y({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],J.prototype,"id",void 0),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"geometryType",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),e([y(k(a(m$2)))],J.prototype,"labelsVisible",void 0),e([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:i},write:{ignoreOrigin:!0}}})],J.prototype,"labelingInfo",void 0),e([y({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],J.prototype,"layerType",void 0),e([y(k(a(c)))],J.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],J.prototype,"listMode",void 0),e([y((()=>{const e=a(T);return e.json.origins.service.read=!1,k(e)})())],J.prototype,"minScale",void 0),e([y((()=>{const e=a(S);return e.json.origins.service.read=!1,k(e)})())],J.prototype,"maxScale",void 0),e([y({readOnly:!0})],J.prototype,"effectiveScaleRange",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"objectIdField",null),e([y({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],J.prototype,"opacity",void 0),e([y({clonable:!1})],J.prototype,"parent",void 0),e([y(k(a(y$2)))],J.prototype,"popupEnabled",void 0),e([y({type:P,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],J.prototype,"popupTemplate",void 0),e([y({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),e([y({types:G,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],J.prototype,"renderer",null),e([o$1("service","renderer",["drawingInfo.renderer","subtypeField","type"])],J.prototype,"readRendererFromService",null),e([o$1("renderer",["layerDefinition.drawingInfo.renderer"])],J.prototype,"readRenderer",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"spatialReference",null),e([y({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],J.prototype,"subtypeCode",void 0),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"subtypeField",null),e([y({type:[p$2],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],J.prototype,"templates",void 0),e([o$1("service","templates",["geometryType","subtypeField","subtypes","type"])],J.prototype,"readTemplatesFromService",null),e([y({type:String,json:{write:{ignoreOrigin:!0}}})],J.prototype,"title",void 0),e([o$1("service","title",["subtypes"])],J.prototype,"readTitleFromService",null),e([y({readOnly:!0,json:{read:!1}})],J.prototype,"url",null),e([y({readOnly:!0})],J.prototype,"userHasUpdateItemPrivileges",null),e([y({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],J.prototype,"visible",void 0),J=e([c$1(z)],J);const K=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,n$1=e??"";return i.test(n$1)?n$1.replace(i,o):n(o,n$1)},W=e=>new s$2(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),X=J;

const Y="SubtypeGroupLayer",ee="esri.layers.SubtypeGroupLayer";function re(e,r){return new s$2("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}const te=s$3();let se=class extends(D(F(n$1(f(t(f$1(l(u$2(j(m(e$1(i$2(i$1(b$2)))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(V.ofType(X)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=k$1((async(e,r,t)=>{const{save:s,saveAs:i}=await __vitePreload(() => import('./featureLayerUtils-CkbWoQuW.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]):void 0,import.meta.url);switch(e){case A$2.SAVE:return s(this,r);case A$2.SAVE_AS:return i(this,t,r)}})),this.addHandles(d$1((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),C$1));}destroy(){this.source?.destroy();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(a$1).then((async()=>{if(!this.url)throw new s$2("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s$2("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(r))})).then((()=>Q$1(this,"load",e)));return this.addResolvingPromise(t),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return T$1(this)}get parsedUrl(){const e=I(this.url);return null!=e&&null!=this.layerId&&(e.path=V$1(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e);}readTitleFromService(e,{name:r}){return this.url?h(this.url,r):r}async addAttachment(e,r){return m$4(this,e,r,Y)}async updateAttachment(e,r,t){return w$1(this,e,r,t,Y)}async applyEdits(e,r){return b$1(this,e,r)}on(e,r){return super.on(e,r)}async createGraphicsSource(e){const{default:r}=await h$1(__vitePreload(() => import('./FeatureLayerSource-BKPh23KA.js'),true?__vite__mapDeps([12,2,1,3,13,14,15,16,17,18,19]):void 0,import.meta.url),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=x(this),r=this.sublayers.map((e=>e.subtypeCode));return e.where=n(`${this.subtypeField} IN (${r.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,r){return j$1(this,e,r,Y)}async fetchRecomputedExtents(e){return I$1(this,e,Y)}findSublayerForFeature(e){const r=this.fieldsIndex.get(this.subtypeField),t=e.attributes[r.name];return this.findSublayerForSubtypeCode(t)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,r){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return t$1(this,(e=>{e(this.sublayers);}))}async queryAttachments(e,r){return q(this,e,r,Y)}async queryFeatures(e,r){const t=await this.load(),s=b.from(e)??t.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const o=await t.source.queryFeatures(s,r);if(o?.features)for(const a of o.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return o}async queryObjectIds(e,r){return F$1(this,e,r,Y)}async queryFeatureCount(e,r){return A$1(this,e,r,Y)}async queryExtent(e,r){return O(this,e,r,Y)}async queryRelatedFeatures(e,r){return P$1(this,e,r,Y)}async queryRelatedFeaturesCount(e,r){return E(this,e,r,Y)}async save(e){return this._debouncedSaveOperations(A$2.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(A$2.SAVE_AS,r,e)}write(e,r){const{origin:t,layerContainerType:i,messages:o}=r;if(this.isTable){if("web-scene"===t||"web-map"===t&&"tables"!==i)return o?.push(re(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===t&&"tables"===i)return o?.push(re(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,r):(o?.push(new s$2("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return !!this.loaded&&e$2(this,e)}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s$2("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new s$2("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),g(this.timeInfo,this.fieldsIndex);}async hasDataChanged(){return S$2(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null;})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e);})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e);})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode);}))],"sublayers-owner"));}};e([y({readOnly:!0})],se.prototype,"createQueryVersion",null),e([y({readOnly:!0})],se.prototype,"editingEnabled",null),e([y({readOnly:!0})],se.prototype,"effectiveEditingEnabled",null),e([y({...te.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],se.prototype,"fields",void 0),e([y(te.fieldsIndex)],se.prototype,"fieldsIndex",void 0),e([y(I$2)],se.prototype,"id",void 0),e([y({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],se.prototype,"listMode",void 0),e([y({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],se.prototype,"operationalLayerType",void 0),e([y(te.outFields)],se.prototype,"outFields",void 0),e([y({readOnly:!0})],se.prototype,"parsedUrl",null),e([y({clonable:!1})],se.prototype,"source",null),e([y({type:V.ofType(X),json:{origins:{service:{read:{source:"subtypes",reader:(e,r,s)=>{const i=e.map((({code:e})=>{const t=new X({subtypeCode:e});return t.read(r,s),t}));return new(V.ofType(X))(i)}}}},name:"layers",write:{ignoreOrigin:!0}}})],se.prototype,"sublayers",void 0),e([y({type:d})],se.prototype,"timeInfo",void 0),e([y({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],se.prototype,"title",void 0),e([o$1("service","title",["name"])],se.prototype,"readTitleFromService",null),e([y({json:{read:!1}})],se.prototype,"type",void 0),se=e([c$1(ee)],se);const ie=se;

export { ie as default };
