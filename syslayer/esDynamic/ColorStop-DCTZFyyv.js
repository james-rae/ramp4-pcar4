import{x as o,z as l,aK as i,bt as u,B as n,K as p,G as c}from"./main-DZMdXZ8-.js";var r;let e=r=class extends c{constructor(t){super(t),this.color=null,this.label=null,this.value=null}writeValue(t,s,a){s[a]=t??0}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};o([l({type:i,json:{type:[u],write:{isRequired:!0}}})],e.prototype,"color",void 0),o([l({type:String,json:{write:!0}})],e.prototype,"label",void 0),o([l({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),o([n("value")],e.prototype,"writeValue",null),e=r=o([p("esri.renderers.visualVariables.support.ColorStop")],e);const v=e;export{v as a};
