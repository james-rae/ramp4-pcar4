import { bT as r, bU as m, bV as a, bW as f$1, hT as x, et as r$1, T as a$1, eQ as l$2, eC as b, eD as j, eE as t$1, eF as S$1, eR as e$1, eS as i$1, ay as y, fj as e$2, B as a$5, hr as p$4, m$ as i$2, s, aw as V$1, U as U$1, G as n$2, hy as l$3, cE as q, eG as o, eX as c$1, eI as d$2, fc as r$2, hD as s$1, eP as f } from './main-jdFDoOPu.js';
import { R, V as V$2 } from './SceneService-Cr16HD3W.js';
import { c as a$2, d as d$1, b as a$3, a as a$4 } from './PointCloudUniqueValueRenderer-Dd1BMHV1.js';
import { $, Z, w } from './elevationInfoUtils-CL4PiAnx.js';
import './preload-helper-dJJaZANz.js';
import './originUtils-DHNPWZlz.js';
import './multiOriginJSONSupportUtils-ThJwHdA9.js';
import './jsonContext-Cc_ThWol.js';
import './resourceUtils-D-R7C4TD.js';
import './resourceUtils-CpdVzHFD.js';
import './saveUtils-ByJ2hADu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends f$1{constructor(o){super(o),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([m({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),r([m({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=r([a("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;let p$3=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:a$1(this.requiredClearBits),requiredSetBits:a$1(this.requiredSetBits)})}};r([m({type:[x],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$3.prototype,"requiredClearBits",void 0),r([m({type:[x],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$3.prototype,"requiredSetBits",void 0),r([r$1({pointCloudBitfieldFilter:"bitfield"})],p$3.prototype,"type",void 0),p$3=d=r([a("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$3);const u$2=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n$1;let p$2=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:a$1(this.includedReturns)})}};r([m({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$2.prototype,"includedReturns",void 0),r([r$1({pointCloudReturnFilter:"return"})],p$2.prototype,"type",void 0),p$2=n$1=r([a("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$2);const u$1=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let p$1=l=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new l({field:this.field,mode:this.mode,values:a$1(this.values)})}};r([m({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"mode",void 0),r([r$1({pointCloudValueFilter:"value"})],p$1.prototype,"type",void 0),r([m({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"values",void 0),p$1=l=r([a("esri.layers.pointCloudFilters.PointCloudValueFilter")],p$1);const u=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let c=p=class extends a$2{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new p({...this.cloneProperties(),field:a$1(this.field)})}};r([r$1({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),r([m({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=p=r([a("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i={key:"type",base:a$2,typeMap:{"point-cloud-class-breaks":d$1,"point-cloud-rgb":n,"point-cloud-stretch":a$3,"point-cloud-unique-value":a$4},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O=s$1();let V=class extends(R(l$2(b(j(t$1(S$1(e$1(i$1(f))))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r?.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new y;return "FieldTypeInteger"===e.type&&((e=a$1(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new y({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o){e$2("layerDefinition.drawingInfo.renderer",e.write({},o),r);}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(a$5).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=p$4(this,e);return r&&(this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r)),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$2({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$2({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new s("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=V$1(this.parsedUrl?.path??"",`./statistics/${o.key}`);return U$1(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(V$2.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(V$2.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;$(n$2.getLogger(this),Z("Point cloud layers","absolute-height",e)),$(n$2.getLogger(this),w("Point cloud layers",e));}};r([m({type:["PointCloudLayer"]})],V.prototype,"operationalLayerType",void 0),r([m(l$3)],V.prototype,"popupEnabled",void 0),r([m({type:q,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),r([m({readOnly:!0,json:{read:!1}})],V.prototype,"defaultPopupTemplate",null),r([m({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],V.prototype,"opacity",void 0),r([m({type:["show","hide"]})],V.prototype,"listMode",void 0),r([m({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],V.prototype,"filters",void 0),r([m({type:[y]})],V.prototype,"fields",void 0),r([m(O.fieldsIndex)],V.prototype,"fieldsIndex",void 0),r([o("service","fields",["fields","attributeStorageInfo"])],V.prototype,"readServiceFields",null),r([m(O.outFields)],V.prototype,"outFields",void 0),r([m({readOnly:!0})],V.prototype,"attributeStorageInfo",void 0),r([m(c$1)],V.prototype,"elevationInfo",null),r([m({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),r([m(d$2)],V.prototype,"legendEnabled",void 0),r([m({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],V.prototype,"renderer",void 0),r([r$2("renderer")],V.prototype,"writeRenderer",null),r([m({json:{read:!1},readOnly:!0})],V.prototype,"type",void 0),V=r([a("esri.layers.PointCloudLayer")],V);const U=V;

export { U as default };
