import{ab as d}from"./main-DeRV24Di.js";import{i as v,a as S,u as x,c as j,s as O}from"./operatorGeodeticDensify-DRTKyYCl.js";import{e as y}from"./geodeticCurveType-D_etKnbP.js";let a,u,c,i,p;function l(){return!!a&&O()}async function m(){if(!l()){const[e]=await Promise.all([import("./apiConverter-Qw9OhhcY.js"),v()]);a=e.fromGeometry,u=e.fromSpatialReference,c=e.getSpatialReference,i=e.toGeometry,p=S()}}function g(e,t,n={}){const{curveType:s="geodesic",unit:o}=n;o&&(t=d(t,o,"meters"));const r=c(e);return i(x(a(e),t,u(r),y[s]),r)}function _(e,t,n={}){const{curveType:s="geodesic",unit:o}=n;o&&(t=d(t,o,"meters"));const r=e.map(a),f=c(e);return j(r,t,u(f),y[s]).map(b=>i(b,f))}const M=Object.freeze(Object.defineProperty({__proto__:null,execute:g,executeMany:_,isLoaded:l,load:m,get supportsCurves(){return p}},Symbol.toStringTag,{value:"Module"})),T=Object.freeze(Object.defineProperty({__proto__:null,execute:g,executeMany:_,isLoaded:l,load:m,get supportsCurves(){return p}},Symbol.toStringTag,{value:"Module"}));export{T as a,M as g,m as l};
