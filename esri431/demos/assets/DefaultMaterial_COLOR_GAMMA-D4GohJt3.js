import { b_ as y, m6 as l$1, m7 as I, m8 as b, m9 as tt, J as s, ma as nt, U, j_ as _$1, B as a, s as s$1, hX as E, aJ as u$1 } from './main-jdFDoOPu.js';
import { l as l$2, i as i$1 } from './Indices-Bo7FLkhm.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o$2(e,t){n$1(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride);}function n$1(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if(y(n)||l$1(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=I(n);if(b(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u;}function l(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n;}Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:n$1,normalizeIntegerBufferView:o$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$1(e,f){t$1(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride);}function t$1(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o;}function f$2(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u;}Object.freeze(Object.defineProperty({__proto__:null,copy:t$1,copyView:e$1,fill:f$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f,e.typedBufferStride);}function t(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r;}function f$1(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c;}Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{constructor(r){this._streamDataRequester=r;}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return tt(r)?(s(e),nt(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a$1,s,i){if(null==this._streamDataRequester)return (await U(s,{responseType:m[a$1]})).data;const n=await _$1(this._streamDataRequester.request(s,a$1,i));if(!0===n.ok)return n.value;throw a(n.error),new s$1("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o$1(r,t){switch(t){case E.TRIANGLES:return f(r);case E.TRIANGLE_STRIP:return u(r);case E.TRIANGLE_FAN:return i(r)}}function f(e){return "number"==typeof e?l$2(e):u$1(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return [];const n=t-2,o=i$1(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2);}else {let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2]);}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t;}return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=2.1;

export { f$1 as a, o$2 as b, e$1 as c, o as d, e, f$2 as f, n$1 as g, t$1 as h, l, n, o$1 as o, t };
