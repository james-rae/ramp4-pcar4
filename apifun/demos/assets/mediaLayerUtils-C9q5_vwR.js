import{B as s,D as l,N as R,aN as S,gx as p,bR as V,aK as w}from"./main-CcTJZah4.js";import{X as D}from"./projection-nLxG4Uci.js";import{p as J}from"./normalizeUtilsSync-BbTYU8f2.js";import{u as y,i as g,c as b,r as i}from"./mat3-CruJiiUv.js";import{e as c}from"./mat3f64-q3fE-ZOt.js";import{o as d}from"./vec2-maR1OrZI.js";import{o as h,N as x}from"./vec32-D4ob7-3U.js";let t=class extends S{constructor(o){super(o)}get bounds(){const o=this.coords;return o?.extent==null?null:p(o.extent)}get coords(){const o=this.element.georeference?.coords;return D(o,this.spatialReference).geometry}get normalizedCoords(){return V.fromJSON(J(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?p(o):null}};s([l()],t.prototype,"spatialReference",void 0),s([l()],t.prototype,"element",void 0),s([l()],t.prototype,"bounds",null),s([l()],t.prototype,"coords",null),s([l()],t.prototype,"normalizedCoords",null),s([l()],t.prototype,"normalizedBounds",null),t=s([R("esri.layers.support.MediaElementView")],t);const r=w(),u=c(),a=c(),m=c();function P(o,e,n){return h(r,e[0],e[1],1),x(r,r,y(u,n)),r[2]===0?d(o,r[0],r[1]):d(o,r[0]/r[2],r[1]/r[2])}function Q(o,e,n){return f(a,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),f(m,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),g(o,b(a,a),m),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,e,n,z,$,j,C,N,v){i(o,e,z,j,n,$,C,1,1,1),h(r,N,v,1),b(u,o);const[B,E,I]=x(r,r,y(u,u));return i(u,B,0,0,0,E,0,0,0,I),g(o,u,o)}const K=Symbol("ImageElementInstance"),M=Symbol("VideoElementInstance");function O(o){return o!=null&&typeof o=="object"&&K in o}function X(o){return o!=null&&typeof o=="object"&&M in o}function T(o){return O(o)||X(o)}export{T as c,M as e,Q as j,t as m,K as n,X as o,P as p};
