import { e2 as s, fX as m, fY as y$2, fZ as N$1, f_ as s$1, f$ as j$1, eT as M, bT as r, bU as m$1, bW as f$1, ap as n$1, g0 as u, aq as r$1, dZ as t, g1 as P, ei as h, g2 as B$1, bV as a } from './main-jdFDoOPu.js';
import { e } from './mat4f64-Cw8nJbLB.js';
import { v, b, x } from './quat-CBMGRihX.js';
import { e as e$1 } from './quatf64-CvJnKmwc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function j(r=B){return [r[0],r[1],r[2],r[3]]}function q(r,t,n=j()){return s(w(n),r),n[3]=t,n}function k(t,i=j()){const u=j$1(C,t);return A$1(i,M(v(i,u))),i}function U(t,n,c=j()){return b(C,w(t),z(t)),b(D,w(n),z(n)),x(C,D,C),A$1(c,M(v(w(c),C)))}function d$1(r,t,n,o=j()){return q(m,r,F),q(y$2,t,G),q(N$1,n,H),U(F,G,F),U(F,H,o),o}function w(r){return r}function y$1(r){return r[3]}function z(r){return s$1(r[3])}function A$1(r,t){return r[3]=t,r}const B=[0,0,1,0],C=e$1(),D=e$1();j();const F=j(),G=j(),H=j();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var y;let A=y=class extends f$1{constructor(t){super(t),this.translation=n$1(),this.rotationAxis=u(B),this.rotationAngle=0,this.scale=r$1(1,1,1);}get rotation(){return q(this.rotationAxis,this.rotationAngle)}set rotation(t$1){this.rotationAxis=t(w(t$1)),this.rotationAngle=y$1(t$1);}get localMatrix(){const t=e();return b(d,w(this.rotation),z(this.rotation)),P(t,d,this.translation,this.scale),t}get localMatrixInverse(){return h(e(),this.localMatrix)}equals(t){return this===t||null!=t&&B$1(this.localMatrix,t.localMatrix)}clone(){const t$1={translation:t(this.translation),rotationAxis:t(this.rotationAxis),rotationAngle:this.rotationAngle,scale:t(this.scale)};return new y(t$1)}};r([m$1({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),r([m$1({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAxis",void 0),r([m$1({type:Number,nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAngle",void 0),r([m$1({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),r([m$1()],A.prototype,"rotation",null),r([m$1()],A.prototype,"localMatrix",null),r([m$1()],A.prototype,"localMatrixInverse",null),A=y=r([a("esri.geometry.support.MeshTransform")],A);const d=e$1(),N=A;

export { N, d$1 as d, j, k, w, z };
