const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./symbolLayerUtils-Dys-1ZHB.js","./preload-helper-ExcqyqRp.js","./main-Di-yv68k.js","./main-yQhLLpS1.css","./LRUCache-Xvjg_CIH.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./preload-helper-ExcqyqRp.js";import{aE as a,x as h,er as m,es as d,et as k,eu as g}from"./main-Di-yv68k.js";import"./parser-CInzATcp.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-VhU6idD3.js";import{C as z}from"./cimSymbolUtils-b9is3hoK.js";import{e as S}from"./LRUCache-Xvjg_CIH.js";import"./utils-QWndGYJy.js";new S(1e3);new a([128,128,128]);const x=new a("white");function B(t,o){if(!t)return null;let n=null;return h(t)?n=_(t):m(t)&&(n=t.type==="cim"?z(t):t.color?new a(t.color):null),n?f(n,o):null}function _(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(l=>{l.type==="object"&&l.resource?.href||(n=l.type==="water"?l.color:l.material?l.material.color:null)}),n?new a(n):null}function f(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new a(n)}function v(t,o,n){const l=t.symbolLayers;if(!l)return;const r=i=>f(o=o??i??(n!=null?x:null),n);l.forEach(i=>{if(i.type!=="object"||!i.resource?.href||o)if(i.type==="water")i.color=r(i.color);else{const c=i.material!=null?i.material.color:null,u=r(c);i.material==null?i.material=new d({color:u}):i.material.color=u,n!=null&&"outline"in i&&i.outline?.color!=null&&(i.outline.color=f(i.outline.color,n))}})}function E(t,o,n){(o=o??t.color)&&(t.color=f(o,n)),n!=null&&"outline"in t&&t.outline?.color&&(t.outline.color=f(t.outline.color,n))}function F(t,o,n){t&&(o||n!=null)&&(o&&(o=new a(o)),h(t)?v(t,o,n):m(t)&&E(t,o,n))}async function L(t,o){const n=t.symbolLayers;n&&await k(n,async l=>j(l,o))}async function j(t,o){switch(t.type){case"extrude":C(t,o);break;case"icon":case"line":case"text":$(t,o);break;case"path":O(t,o);break;case"object":await R(t,o)}}function $(t,o){const n=y(o);n!=null&&(t.size=n)}function y(t){for(const o of t)if(typeof o=="number")return o;return null}function C(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function R(t,o){const{resourceSize:n,symbolSize:l}=await D(t),r=w(o,n,l);t.width=s(o[0],l[0],n[0],r),t.depth=s(o[1],l[1],n[1],r),t.height=s(o[2],l[2],n[2],r)}function O(t,o){const n=w(o,g,[t.width,void 0,t.height]);t.width=s(o[0],t.width,1,n),t.height=s(o[2],t.height,1,n)}function w(t,o,n){for(let l=0;l<3;l++){const r=t[l];switch(r){case"symbol-value":{const i=n[l];return i!=null?i/o[l]:1}case"proportional":break;default:if(r&&o[l])return r/o[l]}}return 1}async function D(t){const{computeObjectLayerResourceSize:o}=await b(()=>import("./symbolLayerUtils-Dys-1ZHB.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),n=await o(t,10),{width:l,height:r,depth:i}=t,c=[l,i,r];let u=1;for(let e=0;e<3;e++){const p=c[e];if(p!=null){u=p/n[e];break}}for(let e=0;e<3;e++)c[e]==null&&(c[e]=n[e]*u);return{resourceSize:n,symbolSize:c}}function s(t,o,n,l){switch(t){case"proportional":return n*l;case"symbol-value":return o??n;default:return t}}function I(t,o){const n=y(o);if(n!=null)switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const l=t.width/t.height;l>1?(t.width=n,t.height=n*l):(t.width=n*l,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function G(t,o){if(t&&o)return h(t)?L(t,o):void(m(t)&&I(t,o))}function H(t,o,n){if(t&&o!=null)if(h(t)){const l=t.symbolLayers;l&&l.forEach(r=>{if(r.type==="object")switch(n){case"tilt":r.tilt=(r.tilt??0)+o;break;case"roll":r.roll=(r.roll??0)+o;break;default:r.heading=(r.heading??0)+o}r.type==="icon"&&(r.angle+=o)})}else m(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=o))}async function J(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{H as D,J as N,G as R,F as g,B as h};
