import{ax as n,k as s,o,A as a,v as d}from"./main-BL33V88t.js";var i;const r=new n({asc:"ascending",desc:"descending"});let e=i=class extends d{constructor(t){super(t),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};s([o({type:String,json:{write:!0}})],e.prototype,"field",void 0),s([o({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"valueExpression",void 0),s([o({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write}})],e.prototype,"order",void 0),e=i=s([a("esri.layers.support.OrderByInfo")],e);const p=e;export{p as a};
