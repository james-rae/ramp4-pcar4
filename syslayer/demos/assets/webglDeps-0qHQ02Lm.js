import{E as v,o as w}from"./VertexArrayObject-7DpwrMVU.js";import{x as P,s as A}from"./FramebufferObject-DbcqNpl0.js";import{r as c}from"./ProgramTemplate-C4T-yrDm.js";import{e as q,a as B}from"./ProgramTemplate-C4T-yrDm.js";import"./main-D_jCcUNd.js";import{t as p}from"./NestedMap-CImDozOA.js";import{w as E}from"./Texture-DFHwtOk1.js";import"./enums-Dk3osxpS.js";import"./memoryEstimations-CE0MHqcd.js";import"./preload-helper-ExcqyqRp.js";import"./signal-0dLFd0qC.js";import"./getDataTypeBytes-DflDeYgv.js";class g{constructor(e){this._rctx=e,this._store=new p}dispose(){this._store.forAll(e=>e.dispose()),this._store.clear()}acquire(e,t,o,n){const r=this._store.get(e,t);if(r!=null)return r.ref(),r;const s=new c(this._rctx,e,t,o,n);return s.ref(),this._store.set(e,t,s),s}get test(){}}function m(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function y(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(m(o)){const{value:n,options:r,namespace:s}=o,f=s?`${s}_`:"";for(const a in r)e+=`#define ${f}${a} ${r[a].toFixed()}
`;e+=`#define ${t} ${f}${n}
`}else{const n=o.options;let r=0;for(const s in n)e+=`#define ${n[s]} ${(r++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{v as BufferObject,P as FramebufferObject,c as Program,g as ProgramCache,A as Renderbuffer,q as ShaderCompiler,E as Texture,w as VertexArrayObject,B as createProgram,y as glslifyDefineMap};
