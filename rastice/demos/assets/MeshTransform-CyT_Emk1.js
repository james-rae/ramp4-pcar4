import{dv as d,fe as w,ff as q,fg as B,eU as C,q as s,u as a,C as I,A as U,aC as k,fh as z,cx as D,cE as l}from"./main-CUxU9bWS.js";import{j as E,P as F,h as G,B as H}from"./mat4-DSQ66VqF.js";import{e as y}from"./mat4f64-CSKppSlJ.js";import{v,b as p,x as P}from"./quat-BLwdfhAm.js";import{e as m}from"./quatf64-aQ5IuZRd.js";import{s as T}from"./vec32-BFI0q0ON.js";function i(t=j){return[t[0],t[1],t[2],t[3]]}function c(t,o,r=i()){return T(r,t),r[3]=o,r}function V(t,o=i()){const r=E(e,t);return M(o,d(v(o,r))),o}function A(t,o,r=i()){return p(e,t,f(t)),p($,o,f(o)),P(e,$,e),M(r,d(v(r,e)))}function W(t,o,r,x=i()){return c(w,t,u),c(q,o,g),c(B,r,N),A(u,g,u),A(u,N,x),x}function X(t){return t}function J(t){return t[3]}function f(t){return C(t[3])}function M(t,o){return t[3]=o,t}const j=[0,0,1,0],e=m(),$=m();i();const u=i(),g=i(),N=i();var h;let n=h=class extends U{constructor(t){super(t),this.translation=k(),this.rotationAxis=z(j),this.rotationAngle=0,this.scale=D(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=J(t)}get localMatrix(){const t=y();return p(b,this.rotation,f(this.rotation)),F(t,b,this.translation,this.scale),t}get localMatrixInverse(){return G(y(),this.localMatrix)}equals(t){return this===t||t!=null&&H(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new h(t)}};s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"translation",void 0),s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAxis",void 0),s([a({type:Number,nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAngle",void 0),s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"scale",void 0),s([a()],n.prototype,"rotation",null),s([a()],n.prototype,"localMatrix",null),s([a()],n.prototype,"localMatrixInverse",null),n=h=s([I("esri.geometry.support.MeshTransform")],n);const b=m(),Y=n;export{Y as N,W as d,i as j,V as k,X as w,f as z};
