import{c2 as m,hl as _,hm as B,hn as b,fe as g,G as h,ho as S,U as $,_ as w,J as I,s as j,cm as A}from"./main-CdIhtOSF.js";import{l as R,i as T}from"./Indices-BEgCq6AU.js";import{E as l}from"./enums-Dk3osxpS.js";function O(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,f=2,n=f){const o=t.length/2;let r=0,u=0;if(m(t)||_(t)){for(let s=0;s<o;++s)e[r]=t[u],e[r+1]=t[u+1],r+=f,u+=n;return}const a=B(t);if(b(t))for(let s=0;s<o;++s)e[r]=Math.max(t[u]/a,-1),e[r+1]=Math.max(t[u+1]/a,-1),r+=f,u+=n;else for(let s=0;s<o;++s)e[r]=t[u]/a,e[r+1]=t[u+1]/a,r+=f,u+=n}function q(e,t,f,n){const o=e.typedBuffer,r=e.typedBufferStride,u=n?.count??e.count;let a=(n?.dstIndex??0)*r;for(let s=0;s<u;++s)o[a]=t,o[a+1]=f,a+=r}Object.freeze(Object.defineProperty({__proto__:null,fill:q,normalizeIntegerBuffer:d,normalizeIntegerBufferView:O},Symbol.toStringTag,{value:"Module"}));function x(e,t){y(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function y(e,t,f=3,n=f){const o=t.length/n;let r=0,u=0;for(let a=0;a<o;++a)e[r]=t[u],e[r+1]=t[u+1],e[r+2]=t[u+2],r+=f,u+=n}function v(e,t,f,n,o){const r=e.typedBuffer,u=e.typedBufferStride,a=o?.count??e.count;let s=(o?.dstIndex??0)*u;for(let i=0;i<a;++i)r[s]=t,r[s+1]=f,r[s+2]=n,s+=u}Object.freeze(Object.defineProperty({__proto__:null,copy:y,copyView:x,fill:v},Symbol.toStringTag,{value:"Module"}));function z(e,t){p(e.typedBuffer,t,e.typedBufferStride)}function p(e,t,f=4){const n=t.typedBuffer,o=t.typedBufferStride,r=t.count;let u=0,a=0;for(let s=0;s<r;++s)e[u]=n[a],e[u+1]=n[a+1],e[u+2]=n[a+2],e[u+3]=n[a+3],u+=f,a+=o}function M(e,t,f,n,o,r){const u=e.typedBuffer,a=e.typedBufferStride,s=r?.count??e.count;let i=(r?.dstIndex??0)*a;for(let c=0;c<s;++c)u[i]=t,u[i+1]=f,u[i+2]=n,u[i+3]=o,i+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:p,copyView:z,fill:M},Symbol.toStringTag,{value:"Module"}));class V{constructor(t){this._streamDataRequester=t}async loadJSON(t,f){return this._load("json",t,f)}async loadBinary(t,f){return g(t)?(h(f),S(t)):this._load("binary",t,f)}async loadImage(t,f){return this._load("image",t,f)}async _load(t,f,n){if(this._streamDataRequester==null)return(await $(f,{responseType:N[t]})).data;const o=await w(this._streamDataRequester.request(f,t,n));if(o.ok===!0)return o.value;throw I(o.error),new j("glt-loader-request-error",`Request for resource failed: ${o.error}`)}}const N={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function J(e,t){switch(t){case l.TRIANGLES:return U(e);case l.TRIANGLE_STRIP:return E(e);case l.TRIANGLE_FAN:return G(e)}}function U(e){return typeof e=="number"?R(e):A(e)?new Uint16Array(e):e}function E(e){const t=typeof e=="number"?e:e.length;if(t<3)return[];const f=t-2,n=T(3*f);if(typeof e=="number"){let o=0;for(let r=0;r<f;r+=1)r%2==0?(n[o++]=r,n[o++]=r+1,n[o++]=r+2):(n[o++]=r+1,n[o++]=r,n[o++]=r+2)}else{let o=0;for(let r=0;r<f;r+=1)r%2==0?(n[o++]=e[r],n[o++]=e[r+1],n[o++]=e[r+2]):(n[o++]=e[r+1],n[o++]=e[r],n[o++]=e[r+2])}return n}function G(e){const t=typeof e=="number"?e:e.length;if(t<3)return new Uint16Array(0);const f=t-2,n=f<=65536?new Uint16Array(3*f):new Uint32Array(3*f);if(typeof e=="number"){let a=0;for(let s=0;s<f;++s)n[a++]=0,n[a++]=s+1,n[a++]=s+2;return n}const o=e[0];let r=e[1],u=0;for(let a=0;a<f;++a){const s=e[a+2];n[u++]=o,n[u++]=r,n[u++]=s,r=s}return n}const k=2.1;export{M as a,O as b,x as c,k as d,z as e,v as f,d as g,y as h,q as l,V as n,J as o,p as t};
