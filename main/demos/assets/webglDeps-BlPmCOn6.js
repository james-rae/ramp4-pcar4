import{E as y}from"./BufferObject-BT9ayBS_.js";import{r as c}from"./Program-CX7y-BZ9.js";import{x as F,s as v}from"./Program-CX7y-BZ9.js";import"./main-C45WTWFO.js";import{t as p}from"./NestedMap-CImDozOA.js";import{e as P,a as w}from"./ProgramTemplate-C1gNGxmq.js";import{m as C}from"./Texture-DtYhZVr_.js";import{o as B}from"./VertexArrayObject-DGaKfns5.js";import"./enums-Dk3osxpS.js";import"./preload-helper-ExcqyqRp.js";class b{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function m(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function h(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(m(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{y as BufferObject,F as FramebufferObject,c as Program,b as ProgramCache,v as Renderbuffer,P as ShaderCompiler,C as Texture,B as VertexArrayObject,w as createProgram,h as glslifyDefineMap};
