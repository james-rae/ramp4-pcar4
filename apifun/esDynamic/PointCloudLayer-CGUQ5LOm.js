import{x as r,z as i,K as l,G as V,bt as x,bi as m,o as d,aV as _,X as N,iC as C,s as p,bJ as L,a2 as E,n as P,b7 as A,D as O,B as D}from"./main-DeRV24Di.js";import{S as K}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as $}from"./Layer-BYwzhU09.js";import{i as G}from"./APIKeyMixin-giwC8Loz.js";import{l as k}from"./ArcGISService-Dj4O_HhX.js";import{e as M}from"./CustomParametersMixin-DSX_tBvo.js";import{b as z}from"./OperationalLayer-aipQXicj.js";import{j as U}from"./PortalLayer-DGPFQ0q_.js";import{t as J}from"./ScaleRangeLayer-DCHlWw-h.js";import{R as X,V as R}from"./SceneService-BSZ0XI0o.js";import{l as Z,c as H,d as Q}from"./commonProperties-Bm8d6jM2.js";import{y as g}from"./Field-Dcbw6k6h.js";import{s as W}from"./fieldProperties-CXdcSgEi.js";import{c as T,b as Y,a as ee,d as te}from"./PointCloudUniqueValueRenderer-BvSgb9Gv.js";import{$ as F,Z as re,w as ie}from"./elevationInfoUtils-BQ7PwI-0.js";import{p as oe}from"./popupUtils-BJb0P8hy.js";let c=class extends V{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],c.prototype,"type",void 0),c=r([l("esri.layers.pointCloudFilters.PointCloudFilter")],c);const v=c;var b;let u=b=class extends v{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:d(this.requiredClearBits),requiredSetBits:d(this.requiredSetBits)})}};r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],u.prototype,"requiredClearBits",void 0),r([i({type:[x],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],u.prototype,"requiredSetBits",void 0),r([m({pointCloudBitfieldFilter:"bitfield"})],u.prototype,"type",void 0),u=b=r([l("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],u);const se=u;var w;let f=w=class extends v{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new w({field:this.field,includedReturns:d(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([m({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=w=r([l("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const ne=f;var I;let y=I=class extends v{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:d(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"mode",void 0),r([m({pointCloudValueFilter:"value"})],y.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"values",void 0),y=I=r([l("esri.layers.pointCloudFilters.PointCloudValueFilter")],y);const ae=y,le={key:"type",base:v,typeMap:{value:ae,bitfield:se,return:ne}};var S;let h=S=class extends T{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new S({...this.cloneProperties(),field:d(this.field)})}};r([m({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([i({type:String,json:{write:{isRequired:!0}}})],h.prototype,"field",void 0),h=S=r([l("esri.renderers.PointCloudRGBRenderer")],h);const de=h,q={key:"type",base:T,typeMap:{"point-cloud-class-breaks":Y,"point-cloud-rgb":de,"point-cloud-stretch":ee,"point-cloud-unique-value":te},errorContext:"renderer"},j=W();let o=class extends X(k(z(U(J(K(M(G($)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new g;return s.type==="FieldTypeInteger"&&((s=d(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new g({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){e!=null&&e.mode!=="absolute-height"||this._set("elevationInfo",e),this._validateElevationInfo(e)}writeRenderer(e,t,n,s){_("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(N).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=oe(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new C({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new p("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new p("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=L(this.parsedUrl?.path??"",`./statistics/${s.key}`);return E(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(B=>B.data)}throw new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(R.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(R.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(e){F(P.getLogger(this),re("Point cloud layers","absolute-height",e)),F(P.getLogger(this),ie("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(Z)],o.prototype,"popupEnabled",void 0),r([i({type:A,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[le],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[g]})],o.prototype,"fields",void 0),r([i(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([O("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(j.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(H)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(Q)],o.prototype,"legendEnabled",void 0),r([i({types:q,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:q},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([D("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([l("esri.layers.PointCloudLayer")],o);const pe=o;export{pe as default};
