import{B as t,D as e,N as p,J as h,bE as v,aN as G,O as g,aS as w}from"./main-CcTJZah4.js";let a=class extends h{constructor(o){super(o),this.properties=null}};t([e({json:{write:!0}})],a.prototype,"properties",void 0),a=t([p("esri.rest.knowledgeGraph.GraphObject")],a);const y=a;let i=class extends y{constructor(o){super(o),this.typeName=null,this.id=null}};t([e({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([p("esri.rest.knowledgeGraph.GraphNamedObject")],i);const m=i;let l=class extends m{constructor(o){super(o),this.layoutGeometry=null}};t([e({type:v,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=t([p("esri.rest.knowledgeGraph.Entity")],l);const k=l;let u=class extends G{constructor(o){super(o),this.openCypherQuery=""}};t([e()],u.prototype,"openCypherQuery",void 0),u=t([p("esri.rest.knowledgeGraph.GraphQuery")],u);const j=u;let s=class extends j{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([e()],s.prototype,"bindParameters",void 0),t([e()],s.prototype,"bindGeometryQuantizationParameters",void 0),t([e()],s.prototype,"outputQuantizationParameters",void 0),t([e({type:g})],s.prototype,"outputSpatialReference",void 0),t([e()],s.prototype,"provenanceBehavior",void 0),s=t([p("esri.rest.knowledgeGraph.GraphQueryStreaming")],s);const Q=s;let c=class extends y{constructor(r){super(r)}};c=t([p("esri.rest.knowledgeGraph.ObjectValue")],c);const N=c;let d=class extends h{constructor(o){super(o),this.path=[]}};t([e({type:[y],json:{write:!0}})],d.prototype,"path",void 0),d=t([p("esri.rest.knowledgeGraph.Path")],d);const I=d;let n=class extends m{constructor(r){super(r),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([e({type:String,json:{write:!0}})],n.prototype,"originId",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"destinationId",void 0),t([e({type:w,json:{write:!0}})],n.prototype,"layoutGeometry",void 0),n=t([p("esri.rest.knowledgeGraph.Relationship")],n);const O=n;export{O as a,I as b,k as c,Q as p,N as t};
