import{aa as d,gE as m,gF as p,gG as g,fY as _,T as h,gH as b,a2 as w,_ as B,X as A,s as I,fl as R}from"./main-DTtQVgOw.js";import{o as S,i as T}from"./Indices-EOt5HY4t.js";import{E as u}from"./enums-DBi1-Mm2.js";function c(r,t){l(r.typedBuffer,t.typedBuffer,r.typedBufferStride,t.typedBufferStride)}function l(r,t,s=2,a=s){const n=t.length/2;let e=0,i=0;if(!d(t)||m(t)){for(let o=0;o<n;++o)r[e]=t[i],r[e+1]=t[i+1],e+=s,i+=a;return}const f=p(t);if(g(t))for(let o=0;o<n;++o)r[e]=Math.max(t[i]/f,-1),r[e+1]=Math.max(t[i+1]/f,-1),e+=s,i+=a;else for(let o=0;o<n;++o)r[e]=t[i]/f,r[e+1]=t[i+1]/f,e+=s,i+=a}function y(r,t,s,a){const n=r.typedBuffer,e=r.typedBufferStride,i=a?.count??r.count;let f=(a?.dstIndex??0)*e;for(let o=0;o<i;++o)n[f]=t,n[f+1]=s,f+=e}Object.freeze(Object.defineProperty({__proto__:null,fill:y,normalizeIntegerBuffer:l,normalizeIntegerBufferView:c},Symbol.toStringTag,{value:"Module"}));class q{constructor(t){this._streamDataRequester=t}async loadJSON(t,s){return this._load("json",t,s)}async loadBinary(t,s){return _(t)?(h(s),b(t)):this._load("binary",t,s)}async loadImage(t,s){return this._load("image",t,s)}async _load(t,s,a){if(this._streamDataRequester==null)return(await w(s,{responseType:j[t]})).data;const n=await B(this._streamDataRequester.request(s,t,a));if(n.ok===!0)return n.value;throw A(n.error),new I("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const j={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function E(r,t){switch(t){case u.TRIANGLES:return G(r);case u.TRIANGLE_STRIP:return N(r);case u.TRIANGLE_FAN:return v(r)}}function G(r){return typeof r=="number"?S(r):R(r)?new Uint16Array(r):r}function N(r){const t=typeof r=="number"?r:r.length;if(t<3)return[];const s=t-2,a=T(3*s);if(typeof r=="number"){let n=0;for(let e=0;e<s;e+=1)e%2==0?(a[n++]=e,a[n++]=e+1,a[n++]=e+2):(a[n++]=e+1,a[n++]=e,a[n++]=e+2)}else{let n=0;for(let e=0;e<s;e+=1)e%2==0?(a[n++]=r[e],a[n++]=r[e+1],a[n++]=r[e+2]):(a[n++]=r[e+1],a[n++]=r[e],a[n++]=r[e+2])}return a}function v(r){const t=typeof r=="number"?r:r.length;if(t<3)return new Uint16Array(0);const s=t-2,a=s<=65536?new Uint16Array(3*s):new Uint32Array(3*s);if(typeof r=="number"){let f=0;for(let o=0;o<s;++o)a[f++]=0,a[f++]=o+1,a[f++]=o+2;return a}const n=r[0];let e=r[1],i=0;for(let f=0;f<s;++f){const o=r[f+2];a[i++]=n,a[i++]=e,a[i++]=o,e=o}return a}export{l as a,c as b,y as l,q as n,E as o};
