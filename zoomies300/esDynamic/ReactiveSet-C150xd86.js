import{E as _}from"./ByteSizeUnit-DL8UhsB0.js";import{a as z}from"./Cyclical-BRC5wkLn.js";import{fO as f,a1 as a,l as h,r as M,aP as $,fP as y,fQ as p,fR as v,fS as d,fT as E,fU as k,aQ as O,aR as o}from"./main-DqYc2eZZ.js";function I(n,t){return{type:f(t),value:n,unit:t}}function U(n){return{value:n}}function D(n,t){return{type:f(t),value:n,unit:t}}function S(n,t){return{type:f(t),value:n,unit:t}}function c(n,t,s="arithmetic"){return{type:f(t),value:n,unit:t,rotationType:s}}function K(n,t){const s=x(n,t);return n.type==="angle"?c(s,t,n.rotationType):I(s,t)}function x(n,t){return a(n.value,n.unit,t)}function F(n,t,s){if(t===s)return n;switch(s){case"arithmetic":case"geographic":return 90-n}}const L=D(0,"meters"),N=S(0,"square-meters");c(0,"radians");const P=c(0,"degrees"),Q=c(0,"degrees","geographic");function m(n,t,s){return n.units[t][s]}function u(n,t,s,e=2,i="abbr"){return`${h(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:t>0?"never":"exceptZero"})} ${m(n,s,i)}`}function b(n,t,s,e=2,i="abbr"){return`${h(t,{minimumFractionDigits:e,maximumFractionDigits:e,signDisplay:"exceptZero"})} ${m(n,s,i)}`}function R(n,t,s,e=2,i="abbr"){const r=y(t,s);return u(n,a(t,s,r),r,e,i)}function Y(n,t,s,e=2,i="abbr"){const r=y(t,s);return b(n,a(t,s,r),r,e,i)}function Z(n,t,s,e=2,i="abbr"){const r=p(t,s);return u(n,a(t,s,r),r,e,i)}function q(n,t,s,e=2,i="abbr"){const r=p(t,s);return b(n,a(t,s,r),r,e,i)}function J(n,t,s,e=2,i="abbr"){const r=v(t,s);return u(n,a(t,s,r),r,e,i)}function j(n,t,s,e=2,i="abbr"){const r=v(t,s);return b(n,a(t,s,r),r,e,i)}function A(n,t,s,e=2,i="abbr"){const r=d(t,s);return u(n,a(t,s,r),r,e,i)}function C(n,t,s,e=2,i="abbr"){const r=d(t,s);return b(n,a(t,s,r),r,e,i)}function G(n,t,s,e=2,i="abbr"){const r=E(t,s);return u(n,a(t,s,r),r,e,i)}function H(n,t,s,e=2,i="abbr"){const r=k(t,s);return u(n,a(t,s,r),r,e,i)}const V=(n,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:n>0?"never":"exceptZero"});function W(n,t,s,e,i,r=z,w=!0){let l=r.normalize(F(a(n,t,"degrees"),s,e),0,w);const g=V(l,i??2);return l=X(l,g),h(l,g)}const T=new Map;function X(n,t){const s=JSON.stringify(t);let e=T.get(s);return e||(e=new Intl.NumberFormat("en-US",t),T.set(s,e)),/^[-+]?360\.?0*°?$/.test(e.format(n))?0:n}const B=["B","kB","MB","GB","TB"];function tt(n,t){let s=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(_.KILOBYTES));s=$(s,0,B.length-1);const e=h(t/_.KILOBYTES**s,{maximumFractionDigits:2});return M(n.units.bytes[B[s]],{fileSize:e})}class st{constructor(t){this._observable=new O,this._set=new Set(t)}get size(){return o(this._observable),this._set.size}add(t){const s=this._set.size;return this._set.add(t),this._set.size!==s&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const s=this._set.delete(t);return s&&this._observable.notify(),s}entries(){return o(this._observable),this._set.entries()}forEach(t,s){o(this._observable),this._set.forEach((e,i)=>t.call(s,e,i,this),s)}has(t){return o(this._observable),this._set.has(t)}keys(){return o(this._observable),this._set.keys()}values(){return o(this._observable),this._set.values()}[Symbol.iterator](){return o(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{G as $,A as B,R as D,q as F,C as M,tt as T,P as U,D as a,K as b,m as c,J as d,N as e,x as f,u as g,j as h,U as i,H as j,L as k,S as l,F as m,Q as n,c as o,b as p,st as s,W as w,Y as x,Z as y};
