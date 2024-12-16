import { kF as t, dZ as t$1, ap as n$1, e2 as s$1, d_ as c, am as _$1, ao as A, al as P$1, e1 as u, d$ as g, ef as r, kG as l, ed as o, iE as n$2, ak as L$1, aa as a, iY as r$1, a9 as e, ee as p, el as p$1, ek as E$1, e0 as j, eh as b, em as n$3, i$ as v$1, i_ as I$1, he as q$1 } from './main-jdFDoOPu.js';
import './mat3f64-DKAwfC1r.js';
import { c as c$1, a as f, b as a$1 } from './plane-CBOt8dOS.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function b$1(i){return i?h(t$1(i.origin),t$1(i.direction)):h(n$1(),n$1())}function h(i,r){return {origin:i,direction:r}}function k$1(i,r){const n=O$1.get();return n.origin=i,n.direction=r,n}function v(i,r=b$1()){return q(i.origin,i.direction,r)}function S(i,r,n=b$1()){return s$1(n.origin,i),c(n.direction,r,i),n}function q(i,r,n=b$1()){return s$1(n.origin,i),s$1(n.direction,r),n}function w$1(i,r){const n=_$1(c$1.get(),A(c$1.get(),i.direction),c(c$1.get(),r,i.origin));return P$1(n,n)}function y(i,r,n){const t=P$1(i.direction,c(n,r,i.origin));return u(n,i.origin,g(n,i.direction,t)),n}const O$1=new s((()=>b$1()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,a){const c=r(n),i=l(n[2]/c),r$1=Math.atan2(n[1]/c,n[0]/c);return o(a,c,i,r$1),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const C=E();function E(){return n$2()}const _=L$1,k=L$1;function w(t,r){return a(r,t)}function O(t,r){return r$1(t[0],t[1],t[2],r)}function T(t){return t}function z(t){t[0]=t[1]=t[2]=t[3]=0;}function L(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function N(t){return t[3]}function U(t){return t}function V(t,r,n,s){return r$1(t,r,n,s)}function Z(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function B(t,r,n){return t!==n&&w(t,n),n}function D(t,r){return r}function F(t,r,n){if(null==r)return !1;if(!Y(t,r,X))return !1;let{t0:s,t1:o}=X;if((s<0||o<s&&o>0)&&(s=o),s<0)return !1;if(n){const{origin:t,direction:o}=r;n[0]=t[0]+o[0]*s,n[1]=t[1]+o[1]*s,n[2]=t[2]+o[2]*s;}return !0}function I(t,r,n){const s=S(r,n);if(!Y(t,s,X))return [];const{origin:o,direction:e$1}=s,{t0:i,t1:a}=X,c=r=>{const n=n$1();return q$1(n,o,e$1,r),$(t,n,n)};return Math.abs(i-a)<e()?[c(i)]:[c(i),c(a)]}const X={t0:0,t1:0};function Y(t,r,n){const{origin:s,direction:o}=r,e=G;e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return !1;const a=2*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]),c=a*a-4*i*(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]-t[3]*t[3]);if(c<0)return !1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const G=n$1();function H(t,r){return F(t,r,null)}function J(t,r$1,i){if(F(t,r$1,i))return i;const a=K(t,r$1,c$1.get());return u(i,r$1.origin,g(c$1.get(),r$1.direction,p(r$1.origin,a)/r(r$1.direction))),i}function K(t,n,o){const c=c$1.get(),u=f.get();_$1(c,n.origin,n.direction);const f$1=N(t);_$1(o,c,n.origin),g(o,o,1/r(o)*f$1);const m=rt(t,n.origin),l=a$1(n.origin,o);return p$1(u,l+m,c),E$1(o,o,u),o}function Q(t,r,n,s){const o=N(t),e=o*o,i=r+.5*Math.PI,a=n*n+e-2*Math.cos(i)*n*o,c=Math.sqrt(a),u=a-e;if(u<=0)return .5;const f=Math.sqrt(u),m=Math.acos(f/c)-Math.asin(o/(c/Math.sin(i)));return Math.min(1,(m+.5*s)/s)}function W(t,r,n){return F(t,r,n)?n:(y(r,U(t),n),$(t,n,n))}function $(t,r$1,o){const i=c(c$1.get(),r$1,U(t)),a=g(c$1.get(),i,t[3]/r(i));return u(o,a,U(t))}function tt(t,r){const n=c(c$1.get(),r,U(t)),s=j(n),o=t[3]*t[3];return Math.sqrt(Math.abs(s-o))}function rt(r$1,n){const s=c(c$1.get(),n,U(r$1)),o=r(s),i=N(r$1),a=i+Math.abs(i-o);return b(i/a)}const nt=n$1();function st(t,r,n$1,s){const o$1=c(nt,r,U(t));switch(n$1){case n$3.X:{const t=n(o$1,nt)[2];return o(s,-Math.sin(t),Math.cos(t),0)}case n$3.Y:{const t=n(o$1,nt),r=t[1],n$1=t[2],e=Math.sin(r);return o(s,-e*Math.cos(n$1),-e*Math.sin(n$1),Math.cos(r))}case n$3.Z:return A(s,o$1);default:return}}function ot(t,r$1){const n=c(ct,r$1,U(t));return r(n)-t[3]}function et(t,r,o,e){const i=ot(t,r),a=st(t,r,n$3.Z,ct),c=g(ct,a,o-i);return u(e,r,c)}function it(t,r){const n=v$1(U(t),r),s=N(t);return n<=s*s}function at(t,r,n=n$2()){const s=p(U(t),U(r)),e=t[3],i=r[3];return s+i<e?(a(n,t),n):s+e<i?(a(n,r),n):(I$1(n,U(t),U(r),(s+i-e)/(2*s)),n[3]=(s+e+i)/2,n)}const ct=n$1(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:C,altitudeAt:ot,angleToSilhouette:rt,axisAt:st,cameraFrustumCoverage:Q,clear:z,closestPoint:W,closestPointOnSilhouette:K,containsPoint:it,copy:w,create:E,distanceToSilhouette:tt,elevate:Z,equals:k,exactEquals:_,fromCenterAndRadius:O,fromRadius:L,fromValues:V,getCenter:U,getExtent:D,getRadius:N,intersectLine:I,intersectRay:F,intersectRayClosestSilhouette:J,intersectsRay:H,projectPoint:$,setAltitudeAt:et,setExtent:B,tmpSphere:ut,union:at,wrap:T},Symbol.toStringTag,{value:"Module"}));

export { $, E, H, I, N, O, T, U, V, _, w as a, b$1 as b, ft as f, it as i, k$1 as k, s, v, w$1 as w };
