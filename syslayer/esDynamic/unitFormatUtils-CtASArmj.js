import{E as g}from"./ByteSizeUnit-DL8UhsB0.js";import{a as y}from"./Cyclical-8VFjzoDF.js";import{r as M,ab as e,aP as h,d7 as l,d8 as p,d9 as D,da as d,db as $,dc as S}from"./main-DZMdXZ8-.js";import{m as w}from"./quantityUtils-0yS6NTaP.js";import{l as m}from"./intl-woVdY3Iz.js";function b(t,n,r){return t.units[n][r]}function o(t,n,r,a=2,s="abbr"){return`${m(n,{minimumFractionDigits:a,maximumFractionDigits:a,signDisplay:n>0?"never":"exceptZero"})} ${b(t,r,s)}`}function u(t,n,r,a=2,s="abbr"){return`${m(n,{minimumFractionDigits:a,maximumFractionDigits:a,signDisplay:"exceptZero"})} ${b(t,r,s)}`}function T(t,n,r,a=2,s="abbr"){const i=l(n,r);return o(t,e(n,r,i),i,a,s)}function I(t,n,r,a=2,s="abbr"){const i=l(n,r);return u(t,e(n,r,i),i,a,s)}function v(t,n,r,a=2,s="abbr"){const i=D(n,r);return o(t,e(n,r,i),i,a,s)}function E(t,n,r,a=2,s="abbr"){const i=D(n,r);return u(t,e(n,r,i),i,a,s)}function L(t,n,r,a=2,s="abbr"){const i=p(n,r);return o(t,e(n,r,i),i,a,s)}function N(t,n,r,a=2,s="abbr"){const i=p(n,r);return u(t,e(n,r,i),i,a,s)}function O(t,n,r,a=2,s="abbr"){const i=d(n,r);return o(t,e(n,r,i),i,a,s)}function Y(t,n,r,a=2,s="abbr"){const i=d(n,r);return u(t,e(n,r,i),i,a,s)}function Z(t,n,r,a=2,s="abbr"){const i=$(n,r);return o(t,e(n,r,i),i,a,s)}function j(t,n,r,a=2,s="abbr"){const i=S(n,r);return o(t,e(n,r,i),i,a,s)}const k=(t,n)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:n,minimumFractionDigits:n,signDisplay:t>0?"never":"exceptZero"});function z(t,n,r,a,s,i=y,B=!0){let c=i.normalize(w(e(t,n,"degrees"),r,a),0,B);const f=k(c,s??2);return c=G(c,f),m(c,f)}const x=new Map;function G(t,n){const r=JSON.stringify(n);let a=x.get(r);return a||(a=new Intl.NumberFormat("en-US",n),x.set(r,a)),/^[-+]?360\.?0*°?$/.test(a.format(t))?0:t}const F=["B","kB","MB","GB","TB"];function J(t,n){let r=(n=Math.round(n))===0?0:Math.floor(Math.log(n)/Math.log(g.KILOBYTES));r=h(r,0,F.length-1);const a=m(n/g.KILOBYTES**r,{maximumFractionDigits:2});return M(t.units.bytes[F[r]],{fileSize:a})}export{Z as $,O as B,T as D,E as F,Y as M,J as T,b,L as d,o as g,N as h,j,u as p,z as w,I as x,v as y};
