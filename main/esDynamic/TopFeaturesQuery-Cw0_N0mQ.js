import{k as t,o as i,A as p,v as a,ax as d,b2 as c,b3 as v,B as m,q as u,ef as w,f as S}from"./main-C9JjxZR3.js";import{p as R}from"./TimeExtent-DYN5sxvS.js";var s;let o=s=class extends a{constructor(r){super(r),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new s({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};t([i({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),t([i({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),t([i({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=s=t([p("esri.rest.support.TopFilter")],o);const j=o;var n;const y=new d({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new d({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=n=class extends a{constructor(r){super(r),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(r,l){l.resultOffset=this.start,l.resultRecordCount=this.num||10}clone(){return new n(S({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};t([i({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0),t([i({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],e.prototype,"distance",void 0),t([i({types:c,json:{read:v,write:!0}})],e.prototype,"geometry",void 0),t([i({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),t([i({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),t([i({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),t([i({json:{write:!0}})],e.prototype,"objectIds",void 0),t([i({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),t([i({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),t([i({type:m,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),t([i({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),t([i({json:{write:!0}})],e.prototype,"returnGeometry",void 0),t([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],e.prototype,"returnM",void 0),t([i({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],e.prototype,"returnZ",void 0),t([i({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),t([u("start"),u("num")],e.prototype,"writeStart",null),t([i({type:String,json:{read:{source:"spatialRel",reader:y.read},write:{target:"spatialRel",writer:y.write}}})],e.prototype,"spatialRelationship",void 0),t([i({type:R,json:{write:!0}})],e.prototype,"timeExtent",void 0),t([i({type:j,json:{write:!0}})],e.prototype,"topFilter",void 0),t([i({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(r){return{enabled:r!=null&&this.distance!=null&&this.distance>0}}}}})],e.prototype,"units",void 0),t([i({type:String,json:{write:!0}})],e.prototype,"where",void 0),e=n=t([p("esri.rest.support.TopFeaturesQuery")],e),e.from=w(e);const F=e;export{F as default};