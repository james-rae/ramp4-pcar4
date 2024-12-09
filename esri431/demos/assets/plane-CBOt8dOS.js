import { al as P$1, ef as r$1, eh as b$1, ao as A, am as _, ap as n$1, kF as t$1, h5 as n, iE as n$2, ed as o$1, d_ as c$1, d$ as g$1, e1 as u$1, b6 as r$2, H as H$1 } from './main-jdFDoOPu.js';
import { e } from './mat3f64-DKAwfC1r.js';
import { e as e$1 } from './mat4f64-Cw8nJbLB.js';
import { e as e$2 } from './quatf64-CvJnKmwc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f$1(t,n){return P$1(t,n)/r$1(t)}function a(n,s){const c=P$1(n,s)/(r$1(n)*r$1(s));return -b$1(c)}function u(n,o,e){A(m$2,n),A(h$1,o);const i=P$1(m$2,h$1),f=b$1(i),a=_(m$2,m$2,h$1);return P$1(a,e)<0?2*Math.PI-f:f}const m$2=n$1(),h$1=n$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m$1 = class m{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0;}get(){return 0===this._itemsPtr&&t$1((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0;}static createVec2f64(){return new m(n)}static createVec3f64(){return new m(n$1)}static createVec4f64(){return new m(n$2)}static createMat3f64(){return new m(e)}static createMat4f64(){return new m(e$1)}static createQuatf64(){return new m(e$2)}get test(){}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=m$1.createVec2f64(),c=m$1.createVec3f64(),r=m$1.createVec4f64();m$1.createMat3f64();const f=m$1.createMat4f64(),o=m$1.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function m(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,r))}function g(t,s){const r=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),o=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),a=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return o$1(t,r,o,a),t}function q$1(t,s,a){Math.abs(t[0])>Math.abs(t[1])?o$1(s,0,1,0):o$1(s,1,0,0),_(a,t,s),_(s,a,t),A(a,a),A(s,s);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function M(t=$){return [t[0],t[1],t[2],t[3]]}function D(t=$[0],n=$[1],r$1=$[2],o=$[3]){return U(t,n,r$1,o,r.get())}function h(t,n){return U(n[0],n[1],n[2],n[3],t)}function O(t){return t}function U(t,n,r,o,c=M()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function l(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function p(t,n,r,o=M()){const c=r[0]-n[0],e=r[1]-n[1],u=r[2]-n[2],I=t[0]-n[0],i=t[1]-n[1],f=t[2]-n[2],s=e*f-u*i,N=u*I-c*f,E=c*i-e*I,a=s*s+N*N+E*E,T=Math.abs(a-1)>1e-5&&a>1e-12?1/Math.sqrt(a):1;return o[0]=s*T,o[1]=N*T,o[2]=E*T,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function v(t,n,u,I=0,i=Math.floor(u*(1/3)),f=Math.floor(u*(2/3))){if(u<3)return !1;n(R,I);let s=i,N=!1;for(;s<u-1&&!N;)n(j,s),s++,N=!H$1(R,j);if(!N)return !1;for(s=Math.max(s,f),N=!1;s<u&&!N;)n(b,s),s++,c$1(d,R,j),A(d,d),c$1(X,j,b),A(X,X),N=!H$1(R,b)&&!H$1(j,b)&&Math.abs(P$1(d,X))<F;return N?(p(R,j,b,t),!0):(0!==I||1!==i||2!==f)&&v(t,n,u,0,1,2)}const F=.99619469809,R=n$1(),j=n$1(),b=n$1(),d=n$1(),X=n$1();function y(t,n,r){return n!==t&&h(t,n),t[3]=-P$1(O(t),r),t}function P(t,n,r,o){return _(b,n,t),l(r,b,o)}function k(t,n,r,c$2){return Y(Z(t,n,c$1(c.get(),r,n),nt,c$2))}function x(t,n,r){return null!=n&&Y(Z(t,n.origin,n.direction,rt,r))}function q(t,n,r){return Y(Z(t,n.origin,n.vector,tt.NONE,r))}function w(t,n,r){return Y(Z(t,n.origin,n.vector,tt.CLAMP,r))}function z(t,n){return V(t,n)>=0}function H(t,n,r){const c$2=g$1(c.get(),O(t),-t[3]),e=K(t,c$1(c.get(),n,c$2),c.get());return u$1(r,e,c$2),r}function J(t,n,r,c$2){const e=O(t),I=c.get(),i=c.get();q$1(e,I,i);const f=c$1(c.get(),r,n),s=f$1(I,f),N=f$1(i,f),E=f$1(e,f);return o$1(c$2,s,N,E)}function K(t,n,r){const c$2=g$1(c.get(),O(t),P$1(O(t),n));return c$1(r,n,c$2),r}function Q(t,n){return Math.abs(V(t,n))}function V(t,n){return P$1(O(t),n)+t[3]}var W;function Y(t){return t===W.INTERSECTS_INSIDE_OUT||t===W.INTERSECTS_OUTSIDE_IN}function Z(n,r,o,c,u){const I=P$1(O(n),o),s=V(n,r);if(0===I)return s>=0?W.INSIDE:W.OUTSIDE;let N=-s/I;return c&tt.CLAMP&&(N=r$2(N,0,1)),!(c&tt.INFINITE_MIN)&&N<0||!(c&tt.INFINITE_MAX)&&N>1?s>=0?W.INSIDE:W.OUTSIDE:(u$1(u,r,g$1(u,o,N)),s>=0?W.INTERSECTS_INSIDE_OUT:W.INTERSECTS_OUTSIDE_IN)}!function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE";}(W||(W={}));const $=[0,0,1,0];var tt;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX";}(tt||(tt={}));const nt=tt.INFINITE_MIN|tt.INFINITE_MAX,rt=tt.INFINITE_MAX;

export { D, H, J, M, O, P, Q, U, V, f as a, a as b, c, q$1 as d, f$1 as f, g, h, k, l, m, o, p, q, r, t, u, v, w, x, y, z };
