import{cq as g,cr as y,cs as _,ab as b}from"./main-DTtQVgOw.js";import{e as v}from"./geodeticCurveType-D_etKnbP.js";let n;function l(){return!!n&&_()}async function S(){if(!l()){const[e,r]=await Promise.all([import("./OperatorGeodeticLength-25zYukUb.js"),import("./ProjectionTransformation-CkLIEJPn.js").then(t=>t.aW).then(t=>t.aG).then(({injectPe:t})=>t),g()]);n=new e.OperatorGeodeticLength,r(y)}}function O(e,r,t){return n.execute(e,r,t,null)}function P(){return n.supportsCurves()}let a,f,p,u;function i(){return!!a&&l()}async function s(){if(!i()){const[e]=await Promise.all([import("./apiConverter-BXitZEpd.js"),S()]);a=e.fromGeometry,f=e.fromSpatialReference,p=e.getSpatialReference,u=P()}}function m(e,r={}){const{curveType:t="geodesic",unit:c}=r,d=p(e);let o=O(a(e),f(d),v[t]);return o&&c&&(o=b(o,"meters",c)),o}const h=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:i,load:s,get supportsCurves(){return u}},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,execute:m,isLoaded:i,load:s,get supportsCurves(){return u}},Symbol.toStringTag,{value:"Module"}));export{h as f,j as g,s as m};
