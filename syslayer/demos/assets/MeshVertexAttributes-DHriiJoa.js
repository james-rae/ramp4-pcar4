import{B as r,D as a,bI as s,N as p,J as u,n,v as e}from"./main-D_jCcUNd.js";import{r as i,n as l}from"./meshProperties-C4iW0Ukm.js";var g;let o=g=class extends u{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return l(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},n.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&n.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),l(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},n.getLogger(this))}castUv(t){return l(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},n.getLogger(this))}castNormal(t){return l(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},n.getLogger(this))}castTangent(t){return l(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},n.getLogger(this))}clone(){const t={position:e(this.position),uv:e(this.uv),normal:e(this.normal),tangent:e(this.tangent),color:e(this.color)};return new g(t)}clonePositional(){const t={position:e(this.position),normal:e(this.normal),tangent:e(this.tangent),uv:this.uv,color:this.color};return new g(t)}get usedMemory(){return this.position.byteLength+(this.uv?.byteLength??0)+(this.normal?.byteLength??0)+(this.tangent?.byteLength??0)+(this.color?.byteLength??0)}};r([a({json:{write:i}})],o.prototype,"color",void 0),r([s("color")],o.prototype,"castColor",null),r([a({nonNullable:!0,json:{write:i}})],o.prototype,"position",void 0),r([s("position")],o.prototype,"castPosition",null),r([a({json:{write:i}})],o.prototype,"uv",void 0),r([s("uv")],o.prototype,"castUv",null),r([a({json:{write:i}})],o.prototype,"normal",void 0),r([s("normal")],o.prototype,"castNormal",null),r([a({json:{write:i}})],o.prototype,"tangent",void 0),r([s("tangent")],o.prototype,"castTangent",null),o=g=r([p("esri.geometry.support.MeshVertexAttributes")],o);export{o as p};
