import { ex as u$2, h9 as l$1, bT as r$1, bU as m, hT as x, kV as o, kW as e, bV as a$1, jN as l$2, D as j$1, gi as s, i8 as a$2, jM as a$3, a1 as V, d7 as t$1, cC as d$2, hL as A, d6 as n$1, jO as X, aA as w$1, eC as b, eF as S$1, fc as r$2, eP as f$1 } from './main-jdFDoOPu.js';
import { c as c$1 } from './Analysis-Dcq3wCjb.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends(u$2(l$2)){constructor(o){super(o),this.type="simple",this.color=new l$1("black"),this.lineSize=2,this.fontSize=10,this.textColor=new l$1("black"),this.textBackgroundColor=new l$1([255,255,255,.6]);}};r$1([m({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),r$1([m({type:l$1,nonNullable:!0,json:{type:[x],write:{isRequired:!0}}})],c.prototype,"color",void 0),r$1([m({type:Number,cast:o,nonNullable:!0,range:{min:e(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),r$1([m({type:Number,cast:o,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),r$1([m({type:l$1,nonNullable:!0,json:{type:[x],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),r$1([m({type:l$1,nonNullable:!0,json:{type:[x],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=r$1([a$1("esri.analysis.DimensionSimpleStyle")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct";}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$2)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0;}};r$1([m({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),r$1([m({type:j$1,json:{write:!0}})],l.prototype,"startPoint",void 0),r$1([m({type:j$1,json:{write:!0}})],l.prototype,"endPoint",void 0),r$1([m({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),r$1([m({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),r$1([m({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>a$2.normalize(a$3(o),0,!0)))],l.prototype,"orientation",void 0),l=r$1([a$1("esri.analysis.LengthDimension")],l);const u$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d$1=V.ofType(u$1);let f=class extends c$1{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null;}initialize(){this.addHandles(d$2((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null);}),A));}get dimensions(){return this._get("dimensions")||new d$1}set dimensions(e){this._set("dimensions",n$1(e,this.dimensions,d$1));}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return {pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=X(t,e);if(null!=n.pending)return {pending:n.pending,extent:null};let o=null;return null!=n.geometries&&(o=n.geometries.reduce(((e,t)=>null==e?null!=t?w$1.fromPoint(t):null:null!=t?e.union(w$1.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll();}};r$1([m({type:["dimension"]})],f.prototype,"type",void 0),r$1([m({cast:t$1,type:d$1,nonNullable:!0})],f.prototype,"dimensions",null),r$1([m({readOnly:!0})],f.prototype,"spatialReference",null),r$1([m({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],f.prototype,"style",void 0),r$1([m({value:null,readOnly:!0})],f.prototype,"extent",void 0),r$1([m({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=r$1([a$1("esri.analysis.DimensionAnalysis")],f);const y=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends(b(S$1(f$1))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new y,this.opacity=1,e){const{source:s,style:t}=e;s&&t&&(s.style=t);}}initialize(){this.addHandles([d$2((()=>this.source),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this);}),A)]);}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e;}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new y);}get analysis(){return this.source}set analysis(e){this.source=e;}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e;}writeDimensions(e,s,t,r){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>null!=e&&null!=s)).map((e=>e.toJSON(r))).toJSON();}};r$1([m({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),r$1([m({type:["ArcGISDimensionLayer"]})],u.prototype,"operationalLayerType",void 0),r$1([m({nonNullable:!0})],u.prototype,"source",void 0),r$1([m({readOnly:!0})],u.prototype,"spatialReference",null),r$1([m({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],u.prototype,"style",null),r$1([m({readOnly:!0})],u.prototype,"fullExtent",null),r$1([m({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),r$1([m({type:["show","hide"]})],u.prototype,"listMode",void 0),r$1([m({type:V.ofType(u$1),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],u.prototype,"dimensions",null),r$1([r$2("web-scene","dimensions")],u.prototype,"writeDimensions",null),u=r$1([a$1("esri.layers.DimensionLayer")],u);const d=u;

export { d as default };
