import{by as p,cf as u,n as l}from"./main-CUxU9bWS.js";import{H as f}from"./vec32-BFI0q0ON.js";import{b as s,a as d}from"./MeshLocalVertexSpace-ApOnyoKG.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function w(e){return c(e.vertexSpace)}function S(e,n){if(!c(e))return null;const[r,i,o]=e.origin;return new p({x:r,y:i,z:o,spatialReference:n})}function $(e,n){const{x:r,y:i,z:o,spatialReference:g}=e,t=[r,i,o??0];return n?.geographic!==void 0&&(u(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(n?.vertexSpace??v(n?.geographic)??m(g))==="local"?new s({origin:t}):new d({origin:t})}function m(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function v(e){return e==null?void 0:e?"local":"georeferenced"}function b(e,n){return e.type===n.type&&(e.origin===n.origin||e.origin!=null&&n.origin!=null&&f(e.origin,n.origin))}export{c as a,w as g,b as m,$ as s,S as u};
