import { bd as e, be as y, cv as s, bf as a, b_ as f$1, G as n$1, P as a$1 } from './main-CGBWc59Z.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var i;let l=i=class extends f$1{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null;}castColor(t){return c(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},n$1.getLogger(this))}castPosition(t){t&&t instanceof Float32Array&&n$1.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return c(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},n$1.getLogger(this))}castUv(t){return c(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},n$1.getLogger(this))}castNormal(t){return c(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},n$1.getLogger(this))}castTangent(t){return c(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},n$1.getLogger(this))}clone(){const t={position:a$1(this.position),uv:a$1(this.uv),normal:a$1(this.normal),tangent:a$1(this.tangent),color:a$1(this.color)};return new i(t)}clonePositional(){const t={position:a$1(this.position),normal:a$1(this.normal),tangent:a$1(this.tangent),uv:this.uv,color:this.color};return new i(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};function g(t,r,o,e){const{loggerTag:n,stride:s}=r;return t.length%s!=0?(e.error(n,`Invalid array length, expected a multiple of ${s}`),new o([])):t}function c(t,r,o,e,n){if(!t)return t;if(t instanceof r)return g(t,e,r,n);for(const s of o)if(t instanceof s)return g(new r(t),e,r,n);if(Array.isArray(t))return g(new r(t),e,r,n);{const e=o.map((t=>`'${t.name}'`));return n.error(`Failed to set property, expected one of ${e}, but got ${t.constructor.name}`),new r([])}}function p(t,r,o){r[o]=u(t);}function u(t){const r=new Array(t.length);for(let o=0;o<t.length;o++)r[o]=t[o];return r}e([y({json:{write:p}})],l.prototype,"color",void 0),e([s("color")],l.prototype,"castColor",null),e([y({nonNullable:!0,json:{write:p}})],l.prototype,"position",void 0),e([s("position")],l.prototype,"castPosition",null),e([y({json:{write:p}})],l.prototype,"uv",void 0),e([s("uv")],l.prototype,"castUv",null),e([y({json:{write:p}})],l.prototype,"normal",void 0),e([s("normal")],l.prototype,"castNormal",null),e([y({json:{write:p}})],l.prototype,"tangent",void 0),e([s("tangent")],l.prototype,"castTangent",null),l=i=e([a("esri.geometry.support.MeshVertexAttributes")],l);

export { c, l };
