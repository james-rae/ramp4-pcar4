import{ds as A,fb as k,fc as B,fd as I,eR as q,k as a,o as i,A as z,v as P,aA as R,fe as T,cu as C,cB as l}from"./main-CvsyIoCL.js";import{j as D,P as E,h as F,B as G}from"./mat4-TiYsN5VX.js";import{e as y}from"./mat4f64-Dn1WEGBx.js";import{v as b,b as h,x as H}from"./quat-7gXfdV-2.js";import{e as f}from"./quatf64-C16JxGFv.js";import{s as U}from"./vec32-BM7zTNHg.js";function s(t=d){return[t[0],t[1],t[2],t[3]]}function u(t,o,n=s()){return U(n,t),n[3]=o,n}function V(t,o=s()){const n=D(e,t);return N(o,A(b(o,n))),o}function g(t,o,n=s()){return h(e,t,c(t)),h(v,o,c(o)),H(e,v,e),N(n,A(b(n,e)))}function W(t,o,n,x=s()){return u(k,t,p),u(B,o,M),u(I,n,j),g(p,M,p),g(p,j,x),x}function X(t){return t}function Y(t){return t[3]}function c(t){return q(t[3])}function N(t,o){return t[3]=o,t}const d=[0,0,1,0],e=f(),v=f();s();const p=s(),M=s(),j=s();var m;let r=m=class extends P{constructor(t){super(t),this.translation=R(),this.rotationAxis=T(d),this.rotationAngle=0,this.scale=C(1,1,1)}get rotation(){return u(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=Y(t)}get localMatrix(){const t=y();return h(w,this.rotation,c(this.rotation)),E(t,w,this.translation,this.scale),t}get localMatrixInverse(){return F(y(),this.localMatrix)}equals(t){return this===t||t!=null&&G(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new m(t)}};a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),a([i({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),a([i()],r.prototype,"rotation",null),a([i()],r.prototype,"localMatrix",null),a([i()],r.prototype,"localMatrixInverse",null),r=m=a([z("esri.geometry.support.MeshTransform")],r);const w=f(),$=r;export{$ as N,W as d,s as j,V as k,X as w,c as z};