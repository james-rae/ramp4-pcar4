import{d6 as b,D as c,U as g}from"./main-CvsyIoCL.js";import{c as N,p as A}from"./infoFor3D-DIuYZyyK.js";class i{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&b(this.parts,t.parts,(r,e)=>r.equals(e))}isOnService(t){return this.parts.every(r=>r.isOnService(t))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(r.length===1)return r[0].toBlob(t);const e=await Promise.all(r.map(n=>n.toBlob(t)));return c(t),new Blob(e)}}class v{constructor(t,r){this.partUrl=t,this.partHash=r}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(t){const{data:r}=await g(this.partUrl,{responseType:"blob"});return c(t),r}}function B(s){return H(s?.source)}function l(s){return Array.isArray(s)?s.every(t=>t instanceof i):!1}const f=/^(model\/gltf\+json)|(model\/gltf-binary)$/,h=/\.(gltf|glb)/i;function H(s){return s?Array.isArray(s)?s.some(p):p(s):!1}function p(s){if(s instanceof File){const{type:t,name:r}=s;return f.test(t)||h.test(r)}return f.test(s.assetMimeType)||h.test(s.assetName)}function M(s,t){if(!s)return!1;const{source:r}=s;return U(r,t)}function T(s,t){if(s===t)return!0;const{source:r}=s,{source:e}=t;if(r===e)return!0;if(l(r)&&l(e)){if(r.length!==e.length)return!1;const n=(a,u)=>a.assetName<u.assetName?-1:a.assetName>u.assetName?1:0,o=[...r].sort(n),y=[...e].sort(n);for(let a=0;a<o.length;++a)if(!o[a].equals(y[a]))return!1;return!0}return!1}function U(s,t){if(Array.isArray(s)){const r=s;return r.length>0&&r.every(e=>m(e,t))}return m(s,t)}function m(s,t){return s instanceof i&&s.isOnService(t)}function d(s,t){return s instanceof File?N(s,t):A(s.assetMimeType,s.assetName,t)}function q(s){return Array.isArray(s)?s:[s]}function O(s){return!!s.original}export{O as A,q as N,i as a,d as b,T as h,v as i,M as m,B as o};
