import{B as r,D as o,aM as i,bv as u,G as n,N as p,J as c}from"./main-D_jCcUNd.js";var t;let e=t=class extends c{constructor(l){super(l),this.color=null,this.label=null,this.value=null}writeValue(l,s,a){s[a]=l??0}clone(){return new t({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};r([o({type:i,json:{type:[u],write:{isRequired:!0}}})],e.prototype,"color",void 0),r([o({type:String,json:{write:!0}})],e.prototype,"label",void 0),r([o({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),r([n("value")],e.prototype,"writeValue",null),e=t=r([p("esri.renderers.visualVariables.support.ColorStop")],e);const h=e;export{h as a};
