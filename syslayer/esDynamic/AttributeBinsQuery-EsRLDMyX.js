import{aF as l,aX as u,G as d,n as y,x as t,z as o,bi as r,M as a,b5 as m,b6 as c,K as h,bI as v}from"./main-DZMdXZ8-.js";import{g as s}from"./queryUtils-a7r62voq.js";import{u as w,c as b,a as f,m as j,b as g}from"./FixedIntervalBinParameters-Bef0U3pM.js";import{m as S,s as R}from"./Query-Cch4zrNj.js";import{p as T}from"./TimeExtent-Cf-Ev8sT.js";import{p as x}from"./timeZoneUtils-BsUgTrKq.js";const B=new l({asc:"ascending",desc:"descending"}),A={base:w,key:"type",typeMap:{"auto-interval":b,date:f,"fixed-boundaries":j,"fixed-interval":g}};let e=class extends u.ClonableMixin(d){constructor(i){super(i),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.timeExtent=null,this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(i){this._set("outTimeZone",i),i&&!x(i)&&y.getLogger(this).warn("#outTimeZone",`the parsed value '${i}' may not be a valid IANA time zone`)}};t([o({types:A,json:{name:"bin",write:!0}})],e.prototype,"binParameters",void 0),t([r(B)],e.prototype,"binOrder",void 0),t([o({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0),t([o({json:{write:!0}})],e.prototype,"datumTransformation",void 0),t([o({type:a,json:{name:"defaultSR",write:!0}})],e.prototype,"defaultSpatialReference",void 0),t([o({type:Number,json:{write:{overridePolicy:i=>({enabled:i>0})}}})],e.prototype,"distance",void 0),t([o({types:m,json:{read:c,write:!0}})],e.prototype,"geometry",void 0),t([o({type:String,json:{write:!0}})],e.prototype,"lowerBoundaryAlias",void 0),t([o({type:a,json:{name:"outSR",write:!0}})],e.prototype,"outSpatialReference",void 0),t([o({type:[S],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],e.prototype,"outStatistics",void 0),t([o({value:null,json:{name:"outTimeReference",read:{reader:i=>i.ianaTimeZone},write:{writer:(i,n,p)=>{i&&(n[p]={ianaTimeZone:i})}}}})],e.prototype,"outTimeZone",null),t([o({type:Boolean,json:{write:!0}})],e.prototype,"returnDistinctValues",void 0),t([r(R,{name:"spatialRel"})],e.prototype,"spatialRelationship",void 0),t([o({type:T,json:{write:!0}})],e.prototype,"timeExtent",void 0),t([o({type:String,json:{write:!0}})],e.prototype,"upperBoundaryAlias",void 0),t([o({type:String,json:{read:s.read,write:{writer:s.write,overridePolicy(i){return{enabled:i!=null&&this.distance!=null}}}}})],e.prototype,"units",void 0),t([o({type:String,json:{write:!0}})],e.prototype,"where",void 0),e=t([h("esri.rest.support.AttributeBinsQuery")],e);const Z=e;e.from=v(e);export{Z as default};
