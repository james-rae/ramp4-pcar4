import{q as r,u as o,C as y,A as B,br as S,bm as h,h as u,a_ as V,J as _,hP as x,s as l,a1 as N,U as L,n as C,b6 as A,z as E,v as O}from"./main-vIJpOdvB.js";import{S as D}from"./MultiOriginJSONSupport-y2pq0SOK.js";import{f as K}from"./Layer-CTALTC0x.js";import{i as k}from"./APIKeyMixin-BWg7dTz0.js";import{l as G}from"./ArcGISService-CfRxzNlN.js";import{e as M}from"./CustomParametersMixin-DQdElbfq.js";import{b as U}from"./OperationalLayer-DbQlyIvp.js";import{j as z}from"./PortalLayer-BclQFzk5.js";import{t as J}from"./ScaleRangeLayer-CcG2dkTH.js";import{R as Z,V as P}from"./SceneService-8n2T2mml.js";import{l as H,c as Q,d as W}from"./commonProperties-CZL2keaz.js";import{y as g}from"./Field-cqyKZlb5.js";import{s as X}from"./fieldProperties-D1z2VFmz.js";import{c as q,d as Y,b as ee,a as te}from"./PointCloudUniqueValueRenderer-BWgNWQ8Z.js";import{$ as T,Z as re,w as oe}from"./elevationInfoUtils-CNLK2hx1.js";import{p as ie}from"./popupUtils-D262UbSY.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CvPeYCj0.js";import"./arcgisLayerUrl-f6zkGlVo.js";import"./PortalItem-Bd16B4N_.js";import"./portalItemUtils-DYa2oLns.js";import"./projection-DUpEFq3L.js";import"./projectBuffer-aZ5NGnsM.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-DfhxKHZT.js";import"./jsonContext-BMxET5gh.js";import"./resourceUtils-DmLx3E2M.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-cc-zcWwB.js";import"./saveUtils-Ctw28ECw.js";import"./ElevationInfo-DzpztGQ_.js";import"./lengthUtils-BvR-RB4g.js";import"./fieldType-Bz-x3gqO.js";import"./FieldsIndex-NmDIYC-a.js";import"./UnknownTimeZone-5nk00Oib.js";import"./RendererLegendOptions-DYRyBDWC.js";let c=class extends B{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const v=c;var b;let p=b=class extends v{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),r([o({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),r([h({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=b=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const se=p;var w;let f=w=class extends v{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new w({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([h({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=w=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const ne=f;var I;let d=I=class extends v{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"mode",void 0),r([h({pointCloudValueFilter:"value"})],d.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"values",void 0),d=I=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],d);const ae=d,le={key:"type",base:v,typeMap:{value:ae,bitfield:se,return:ne}};var $;let m=$=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new $({...this.cloneProperties(),field:u(this.field)})}};r([h({pointCloudRGBRenderer:"point-cloud-rgb"})],m.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],m.prototype,"field",void 0),m=$=r([y("esri.renderers.PointCloudRGBRenderer")],m);const pe=m,F={key:"type",base:q,typeMap:{"point-cloud-class-breaks":Y,"point-cloud-rgb":pe,"point-cloud-stretch":ee,"point-cloud-unique-value":te},errorContext:"renderer"},R=X();let i=class extends Z(G(U(z(J(D(M(k(K)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new g;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new g({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){V("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=ie(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=N(this.parsedUrl?.path??"",`./statistics/${s.key}`);return L(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(j=>j.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;T(C.getLogger(this),re("Point cloud layers","absolute-height",e)),T(C.getLogger(this),oe("Point cloud layers",e))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(H)],i.prototype,"popupEnabled",void 0),r([o({type:A,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[le],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[g]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([E("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(Q)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(W)],i.prototype,"legendEnabled",void 0),r([o({types:F,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:F},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([O("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([y("esri.layers.PointCloudLayer")],i);const Je=i;export{Je as default};
