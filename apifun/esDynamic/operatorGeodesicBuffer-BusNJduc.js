import{s as i}from"./SimpleGeometryCursor-DSF_YyIm.js";import{cr as f,cs as m,ct as p}from"./main-DeRV24Di.js";let r;function o(){return!!r&&p()}async function l(){if(!o()){const[t,e]=await Promise.all([import("./OperatorGeodesicBuffer-Bok8ICXy.js"),import("./ProjectionTransformation-CsWIlYdI.js").then(n=>n.aW).then(n=>n.aG).then(({injectPe:n})=>n),f()]);r=new t.OperatorGeodesicBuffer,e(m)}}function w(t,e,n,s,a){return r.execute(t,e,n,s,a,!1,null)}function x(t,e,n,s,a,u){const c=r.executeMany(new i(t),e,n,s,a,!1,u,null);return Array.from(c)}function y(){return r.supportsCurves()}export{y as a,x as c,w as i,o as s,l as u};
