import { i6 as D$1, a_ as I$1, i7 as E, au as l$1, as as r$1, i8 as a, b6 as r$2, i9 as G, ia as J, ib as T$1, ic as K, id as A, ie as H, ig as s$2, ih as a$2 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(t,u){return {type:D$1(u),value:t,unit:u}}function i(n){return {value:n}}function a$1(t,u){return {type:D$1(u),value:t,unit:u}}function l(t,u){return {type:D$1(u),value:t,unit:u}}function o(t,u,e="arithmetic"){return {type:D$1(u),value:t,unit:u,rotationType:e}}function s$1(n,t){const u=f(n,t);return "angle"===n.type?o(u,t,n.rotationType):r(u,t)}function f(n,t){return I$1(n.value,n.unit,t)}function m(n,t,u){if(t===u)return n;switch(u){case"arithmetic":case"geographic":return 90-n}}const h$1=a$1(0,"meters"),d$1=l(0,"square-meters");o(0,"radians");const U$1=o(0,"degrees"),j$1=o(0,"degrees","geographic");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function b(t,n,i){return t.units[n][i]}function g(t,n,i,r=2,o="abbr"){return `${l$1(n,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:n>0?"never":"exceptZero"})} ${b(t,i,o)}`}function p(t,n,i,r=2,o="abbr"){return `${l$1(n,{minimumFractionDigits:r,maximumFractionDigits:r,signDisplay:"exceptZero"})} ${b(t,i,o)}`}function D(t,n,i,r=2,o="abbr"){const u=G(n,i);return g(t,I$1(n,i,u),u,r,o)}function x(t,n,i,r=2,o="abbr"){const u=G(n,i);return p(t,I$1(n,i,u),u,r,o)}function y(t,n,i,r=2,o="abbr"){const e=J(n,i);return g(t,I$1(n,i,e),e,r,o)}function F(t,n,i,r=2,o="abbr"){const e=J(n,i);return p(t,I$1(n,i,e),e,r,o)}function d(t,n,i,r=2,o="abbr"){const e=T$1(n,i);return g(t,I$1(n,i,e),e,r,o)}function h(t,n,i,r=2,o="abbr"){const e=T$1(n,i);return p(t,I$1(n,i,e),e,r,o)}function B(t,n,i,r=2,o="abbr"){const e=K(n,i);return g(t,I$1(n,i,e),e,r,o)}function M(t,n,i,r=2,o="abbr"){const e=K(n,i);return p(t,I$1(n,i,e),e,r,o)}function $(t,n,i,r=2,o="abbr"){const e=A(n,i);return g(t,I$1(n,i,e),e,r,o)}function j(t,n,i,r=2,o="abbr"){const e=H(n,i);return g(t,I$1(n,i,e),e,r,o)}const U=(t,n)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:n,minimumFractionDigits:n,signDisplay:t>0?"never":"exceptZero"});function w(t,i,o,e,u,c=a,a$1=!0){let m$1=c.normalize(m(I$1(t,i,"degrees"),o,e),0,a$1);const f=U(m$1,u??2);return m$1=I(m$1,f),l$1(m$1,f)}const z=new Map;function I(t,n){const i=JSON.stringify(n);let r=z.get(i);return r||(r=new Intl.NumberFormat("en-US",n),z.set(i,r)),/^[-+]?360\.?0*°?$/.test(r.format(t))?0:t}const O=["B","kB","MB","GB","TB"];function T(n,r){let e=0===(r=Math.round(r))?0:Math.floor(Math.log(r)/Math.log(E.KILOBYTES));e=r$2(e,0,O.length-1);const s=l$1(r/E.KILOBYTES**e,{maximumFractionDigits:2});return r$1(n.units.bytes[O[e]],{fileSize:s})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(t){this._observable=new s$2,this._set=new Set(t);}get size(){return a$2(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify());}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return a$2(this._observable),this._set.entries()}forEach(e,s){a$2(this._observable),this._set.forEach(((t,r)=>e.call(s,t,r,this)),s);}has(e){return a$2(this._observable),this._set.has(e)}keys(){return a$2(this._observable),this._set.keys()}values(){return a$2(this._observable),this._set.values()}[Symbol.iterator](){return a$2(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}

export { $, B, D, F, M, T, U$1 as U, a$1 as a, s$1 as b, b as c, d, d$1 as e, f, g, h, i, j, h$1 as k, l, m, j$1 as n, o, p, s, w, x, y };
