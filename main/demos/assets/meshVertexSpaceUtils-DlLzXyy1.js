import{bx as p,ca as u,n as l}from"./main-C45WTWFO.js";import{H as s}from"./vec32-CUgMqcgw.js";import{b as f,a as d}from"./MeshLocalVertexSpace-CFj1gKsL.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function y(e){return c(e.vertexSpace)}function S(e,n){if(!c(e))return null;const[r,i,o]=e.origin;return new p({x:r,y:i,z:o,spatialReference:n})}function $(e,n){const{x:r,y:i,z:o,spatialReference:g}=e,t=[r,i,o??0];return n?.geographic!==void 0&&(u(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(n?.vertexSpace??v(n?.geographic)??m(g))==="local"?new f({origin:t}):new d({origin:t})}function m(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function v(e){return e==null?void 0:e?"local":"georeferenced"}function b(e,n){return e.type===n.type&&(e.origin===n.origin||e.origin!=null&&n.origin!=null&&s(e.origin,n.origin))}export{c as a,y as g,b as m,$ as s,S as u};
