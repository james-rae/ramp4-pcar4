import{aC as a,x as h,eo as m,ep as b,eq as d,er as g}from"./main-DaZH2qzH.js";import"./parser-Nr47FofT.js";import"./mat4f32-CiZjBg9k.js";import"./mat4-CF3QiBVL.js";import{C as k}from"./cimSymbolUtils-Dx00QNLb.js";import{e as z}from"./LRUCache-lITImZiS.js";import"./utils-SPbpQbmm.js";new z(1e3),new a([128,128,128]);const S=new a("white");function x(e,o){if(!e)return null;let l=null;return h(e)?l=j(e):m(e)&&(l=e.type==="cim"?k(e):e.color?new a(e.color):null),l?s(l,o):null}function j(e){const o=e.symbolLayers;if(!o)return null;let l=null;return o.forEach(r=>{r.type==="object"&&r.resource?.href||(l=r.type==="water"?r.color:r.material?r.material.color:null)}),l?new a(l):null}function s(e,o){if(o==null||e==null)return e;const l=e.toRgba();return l[3]=l[3]*o,new a(l)}function L(e,o,l){const r=e.symbolLayers;if(!r)return;const n=i=>s(o=o??i??(l!=null?S:null),l);r.forEach(i=>{if(i.type!=="object"||!i.resource?.href||o)if(i.type==="water")i.color=n(i.color);else{const c=i.material!=null?i.material.color:null,u=n(c);i.material==null?i.material=new b({color:u}):i.material.color=u,l!=null&&"outline"in i&&i.outline?.color!=null&&(i.outline.color=s(i.outline.color,l))}})}function v(e,o,l){(o=o??e.color)&&(e.color=s(o,l)),l!=null&&"outline"in e&&e.outline?.color&&(e.outline.color=s(e.outline.color,l))}function C(e,o,l){e&&(o||l!=null)&&(o&&(o=new a(o)),h(e)?L(e,o,l):m(e)&&v(e,o,l))}async function E(e,o){const l=e.symbolLayers;l&&await d(l,async r=>R(r,o))}async function R(e,o){switch(e.type){case"extrude":M(e,o);break;case"icon":case"line":case"text":q(e,o);break;case"path":D(e,o);break;case"object":await O(e,o)}}function q(e,o){const l=y(o);l!=null&&(e.size=l)}function y(e){for(const o of e)if(typeof o=="number")return o;return null}function M(e,o){e.size=typeof o[2]=="number"?o[2]:0}async function O(e,o){const{resourceSize:l,symbolSize:r}=await G(e),n=w(o,l,r);e.width=f(o[0],r[0],l[0],n),e.depth=f(o[1],r[1],l[1],n),e.height=f(o[2],r[2],l[2],n)}function D(e,o){const l=w(o,g,[e.width,void 0,e.height]);e.width=f(o[0],e.width,1,l),e.height=f(o[2],e.height,1,l)}function w(e,o,l){for(let r=0;r<3;r++){const n=e[r];switch(n){case"symbol-value":{const i=l[r];return i!=null?i/o[r]:1}case"proportional":break;default:if(n&&o[r])return n/o[r]}}return 1}async function G(e){const{computeObjectLayerResourceSize:o}=await import("./symbolLayerUtils-K2BS-Nw5.js"),l=await o(e,10),{width:r,height:n,depth:i}=e,c=[r,i,n];let u=1;for(let t=0;t<3;t++){const p=c[t];if(p!=null){u=p/l[t];break}}for(let t=0;t<3;t++)c[t]==null&&(c[t]=l[t]*u);return{resourceSize:l,symbolSize:c}}function f(e,o,l,r){switch(e){case"proportional":return l*r;case"symbol-value":return o??l;default:return e}}function H(e,o){const l=y(o);if(l!=null)switch(e.type){case"simple-marker":e.size=l;break;case"picture-marker":{const r=e.width/e.height;r>1?(e.width=l,e.height=l*r):(e.width=l*r,e.height=l);break}case"simple-line":e.width=l;break;case"text":e.font.size=l}}async function I(e,o){if(e&&o)return h(e)?E(e,o):void(m(e)&&H(e,o))}function J(e,o,l){if(e&&o!=null)if(h(e)){const r=e.symbolLayers;r&&r.forEach(n=>{if(n.type==="object")switch(l){case"tilt":n.tilt=(n.tilt??0)+o;break;case"roll":n.roll=(n.roll??0)+o;break;default:n.heading=(n.heading??0)+o}n.type==="icon"&&(n.angle+=o)})}else m(e)&&(e.type!=="simple-marker"&&e.type!=="picture-marker"&&e.type!=="text"||(e.angle+=o))}async function K(e,o){return await e.fetchSymbol(o)||e.fetchCIMSymbol(o)}export{J as D,K as N,I as R,C as g,x as h};
