import{q as e,bl as l,u as t,bs as U,C as p,A as u,D as P,cK as z,k as G,z as B,bB as C,er as K,i7 as L,ev as Q,a_ as H,az as x,aw as X,h as T,v as g,b2 as Z,b3 as J,by as W,aY as Y,cP as ee}from"./main-CUxU9bWS.js";import{y as te}from"./Field-7yKaqquJ.js";var O;let b=O=class extends u{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:i}=this;return new O({mapLayerId:r,gdbVersion:i})}};e([l({mapLayer:"map-layer"})],b.prototype,"type",void 0),e([t({type:U,json:{write:!0}})],b.prototype,"mapLayerId",void 0),e([t({type:String,json:{write:!0}})],b.prototype,"gdbVersion",void 0),b=O=e([p("esri.layers.support.source.MapLayerSource")],b);var $;let d=$=class extends u{constructor(r){super(r),this.type="query-table"}clone(){const{workspaceId:r,query:i,oidFields:s,spatialReference:h,geometryType:c}=this,m={workspaceId:r,query:i,oidFields:s,spatialReference:h?.clone()??void 0,geometryType:c};return new $(m)}};e([l({queryTable:"query-table"})],d.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"query",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"oidFields",void 0),e([t({type:P,json:{write:!0}})],d.prototype,"spatialReference",void 0),e([l(z)],d.prototype,"geometryType",void 0),d=$=e([p("esri.layers.support.source.QueryTableDataSource")],d);var V;let f=V=class extends u{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:i}=this;return new V({workspaceId:r,dataSourceName:i})}};e([l({raster:"raster"})],f.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"dataSourceName",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"workspaceId",void 0),f=V=e([p("esri.layers.support.source.RasterDataSource")],f);var D;let v=D=class extends u{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:i,dataSourceName:s}=this;return new D({workspaceId:r,gdbVersion:i,dataSourceName:s})}};e([l({table:"table"})],v.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"gdbVersion",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"dataSourceName",void 0),v=D=e([p("esri.layers.support.source.TableDataSource")],v);var M,N;const re=G()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let a=M=class extends u{constructor(r){super(r),this.type="join-table"}readLeftTableSource(r,i,s){return k()(r,i,s)}castLeftTableSource(r){return L(I(),r)}readRightTableSource(r,i,s){return k()(r,i,s)}castRightTableSource(r){return L(I(),r)}clone(){const{leftTableKey:r,rightTableKey:i,leftTableSource:s,rightTableSource:h,joinType:c}=this,m={leftTableKey:r,rightTableKey:i,leftTableSource:s?.clone()??void 0,rightTableSource:h?.clone()??void 0,joinType:c};return new M(m)}};e([l({joinTable:"join-table"})],a.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],a.prototype,"leftTableSource",void 0),e([B("leftTableSource")],a.prototype,"readLeftTableSource",null),e([C("leftTableSource")],a.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],a.prototype,"rightTableSource",void 0),e([B("rightTableSource")],a.prototype,"readRightTableSource",null),e([C("rightTableSource")],a.prototype,"castRightTableSource",null),e([l(re)],a.prototype,"joinType",void 0),a=M=e([p("esri.layers.support.source.JoinTableDataSource")],a);let R=null;function k(){return R||(R=Q({types:I()})),R}let F=null;function I(){return F||(F={key:"type",base:null,typeMap:{"data-layer":y,"map-layer":b}}),F}const oe={key:"type",base:null,typeMap:{"join-table":a,"query-table":d,raster:f,table:v}};let y=N=class extends u{constructor(r){super(r),this.type="data-layer"}clone(){const{fields:r,dataSource:i}=this;return new N({fields:r,dataSource:i})}};e([l({dataLayer:"data-layer"})],y.prototype,"type",void 0),e([t({type:[te],json:{write:!0}})],y.prototype,"fields",void 0),e([t({types:oe,json:{write:!0}})],y.prototype,"dataSource",void 0),y=N=e([p("esri.layers.support.source.DataLayerSource")],y),y.from=K(y);let w=class extends H(u){constructor(i){super(i),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};e([t({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.onFields!=null&&this.onFields.length>0}}}}})],w.prototype,"onFields",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"operator",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"searchTerm",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"searchType",void 0),w=e([p("esri.rest.support.FullTextSearch")],w);const ie=w;var _;const A=new x({upperLeft:"upper-left",lowerLeft:"lower-left"});let S=_=class extends u{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new _(T({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([t({type:X,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],S.prototype,"extent",void 0),e([t({type:["view","edit"],json:{write:!0}})],S.prototype,"mode",void 0),e([t({type:String,json:{read:A.read,write:A.write}})],S.prototype,"originPosition",void 0),e([t({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],S.prototype,"tolerance",void 0),S=_=e([p("esri.rest.support.QuantizationParameters")],S);const se=S,ae=new x({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});var E;const q=new x({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let n=E=class extends u{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,i){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(i.statisticParameters=T(r))}clone(){return new E({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:T(this.statisticParameters)})}};e([t({type:Number,json:{write:!0}})],n.prototype,"maxPointCount",void 0),e([t({type:Number,json:{write:!0}})],n.prototype,"maxRecordCount",void 0),e([t({type:Number,json:{write:!0}})],n.prototype,"maxVertexCount",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"outStatisticFieldName",void 0),e([t({type:String,json:{read:{source:"statisticType",reader:q.read},write:{target:"statisticType",writer:q.write}}})],n.prototype,"statisticType",void 0),e([t({type:Object})],n.prototype,"statisticParameters",void 0),e([g("statisticParameters")],n.prototype,"writeStatisticParameters",null),n=E=e([p("esri.rest.support.StatisticDefinition")],n);const ne=n;var j;const le=new x({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let o=j=class extends u{static from(r){return ee(j,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeParameterValues(r,i){if(r){const s={};for(const h in r){const c=r[h];Array.isArray(c)?s[h]=c.map(m=>m instanceof Date?m.getTime():m):c instanceof Date?s[h]=c.getTime():s[h]=c}i.parameterValues=s}}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,i.where="1=1"}writeWhere(r,i){i.where=r||"1=1"}clone(){return new j(T({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment!=null?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};o.MAX_MAX_RECORD_COUNT_FACTOR=5,e([t({json:{write:!0}})],o.prototype,"aggregateIds",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"compactGeometryEnabled",void 0),e([t({json:{write:!0}})],o.prototype,"datumTransformation",void 0),e([C("datumTransformation")],o.prototype,"castDatumTransformation",null),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"defaultSpatialReferenceEnabled",void 0),e([t({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],o.prototype,"distance",void 0),e([t({type:y,json:{write:!0}})],o.prototype,"dynamicDataSource",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"formatOf3DObjects",void 0),e([t({type:[ie],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.fullText!=null&&this.fullText.length>0}}}}})],o.prototype,"fullText",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),e([t({types:Z,json:{read:J,write:!0}})],o.prototype,"geometry",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"groupByFieldsForStatistics",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"having",void 0),e([t({type:Date})],o.prototype,"historicMoment",void 0),e([g("historicMoment")],o.prototype,"writeHistoricMoment",null),e([t({type:Number,json:{write:!0}})],o.prototype,"maxAllowableOffset",void 0),e([t({type:Number,cast:r=>r<1?1:r>o.MAX_MAX_RECORD_COUNT_FACTOR?o.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],o.prototype,"maxRecordCountFactor",void 0),e([t({type:["xyFootprint"],json:{write:!0}})],o.prototype,"multipatchOption",void 0),e([t({type:Number,json:{read:{source:"resultRecordCount"}}})],o.prototype,"num",void 0),e([t({json:{write:!0}})],o.prototype,"objectIds",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"outFields",void 0),e([t({type:P,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),e([t({type:[ne],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],o.prototype,"outStatistics",void 0),e([t({json:{write:!0}})],o.prototype,"parameterValues",void 0),e([g("parameterValues")],o.prototype,"writeParameterValues",null),e([t({type:W,json:{write:!0}})],o.prototype,"pixelSize",void 0),e([t({type:se,json:{write:!0}})],o.prototype,"quantizationParameters",void 0),e([t({type:[Object],json:{write:!0}})],o.prototype,"rangeValues",void 0),e([t({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],o.prototype,"relationParameter",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"resultType",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnCentroid",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnDistinctValues",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],o.prototype,"returnExceededLimitFeatures",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"returnGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnQueryGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],o.prototype,"returnZ",void 0),e([t({type:P,json:{write:!0}})],o.prototype,"sourceSpatialReference",void 0),e([l(ae,{ignoreUnknown:!1,name:"spatialRel"})],o.prototype,"spatialRelationship",void 0),e([t({type:Number,json:{read:{source:"resultOffset"}}})],o.prototype,"start",void 0),e([g("start"),g("num")],o.prototype,"writeStart",null),e([t({type:String,json:{write:!0}})],o.prototype,"sqlFormat",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"text",void 0),e([t({type:Y,json:{write:!0}})],o.prototype,"timeExtent",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"timeReferenceUnknownClient",void 0),e([l(le,{ignoreUnknown:!1}),t({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null&&this.distance>0}}}}})],o.prototype,"units",void 0),e([t({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],o.prototype,"where",void 0),e([g("where")],o.prototype,"writeWhere",null),o=j=e([p("esri.rest.support.Query")],o);const pe=o,ye=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));export{y as K,ye as Q,se as a,pe as b,b as c,ne as m,ae as s};