const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OperatorGeodeticArea-CPBSEEHp.js","./Transformation2D-DZfKTQC6.js","./ProjectionTransformation-BzHRnDvu.js","./SimpleGeometryCursor-B92kdZ15.js","./main-D_jCcUNd.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./OperatorShapePreservingLength-DnzTEtiZ.js","./apiConverter-CNRXrEwL.js","./jsonConverter-Bep-Se61.js"])))=>i.map(i=>d[i]);
import{cu as v,cv as g,cw as O,ad as P}from"./main-D_jCcUNd.js";import{_ as i}from"./preload-helper-ExcqyqRp.js";import{e as y}from"./geodeticCurveType-CirnHLSB.js";let n;function l(){return!!n&&O()}async function b(){if(!l()){const[e,r]=await Promise.all([i(()=>import("./OperatorGeodeticArea-CPBSEEHp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),i(()=>import("./ProjectionTransformation-BzHRnDvu.js").then(t=>t.aW),__vite__mapDeps([2,1,3,4,5,6]),import.meta.url).then(t=>t.aG).then(({injectPe:t})=>t),v()]);n=new e.OperatorGeodeticArea,r(g)}}function E(e,r,t){return n.execute(e,r,t,null)}function S(){return n.supportsCurves()}let u,_,p,a;function c(){return!!u&&l()}async function m(){if(!c()){const[e]=await Promise.all([i(()=>import("./apiConverter-CNRXrEwL.js"),__vite__mapDeps([8,1,2,3,4,5,6,9]),import.meta.url),b()]);u=e.fromGeometry,_=e.fromSpatialReference,p=e.getSpatialReference,a=S()}}function f(e,r={}){const{curveType:t="geodesic",unit:s}=r,d=p(e);let o=E(u(e),_(d),y[t]);return o&&s&&(o=P(o,"square-meters",s)),o}const A=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:c,load:m,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"})),L=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:c,load:m,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"}));export{A as f,L as g,m};
