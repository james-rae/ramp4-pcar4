import{B as m,V as i}from"./ProjectionTransformation-CsWIlYdI.js";import{getSpatialReference as f,fromGeometry as r,fromSpatialReference as a}from"./apiConverter-Qw9OhhcY.js";import"./Transformation2D-Dqu-RtOz.js";import"./main-DeRV24Di.js";import"./jsonConverter-CQl8IXeu.js";class y extends m{getOperatorType(){return 2}execute(t,s,p,l){return i(t,s,p,3,l)}}const o=new y;function c(e){const t=f(e);return o.accelerateGeometry(r(e),a(t),1)}function n(e,t){return o.execute(r(e),r(t),a(e.spatialReference),null)}const u=o.supportsCurves(),_=Object.freeze(Object.defineProperty({__proto__:null,accelerateGeometry:c,execute:n,supportsCurves:u},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null,accelerateGeometry:c,execute:n,supportsCurves:u},Symbol.toStringTag,{value:"Module"}));export{S as e,_ as l};
