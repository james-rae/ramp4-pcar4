import{T as n,s as a,o as i}from"./main-DTtQVgOw.js";import{p as c}from"./MeshVertexAttributes-9_EMp27s.js";import{B as l}from"./vertexSpaceConversion-D7xyGJKD.js";async function p(e,r,t){await Promise.resolve(),n(t);const o=l(e,r,{useEllipsoid:t?.useEllipsoid});if(!o)throw new a("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const s=e.cloneAndModifyVertexAttributes(new c({...o,uv:i(e.vertexAttributes.uv),color:i(e.vertexAttributes.color)}),r);return s.transform=null,s}export{p as convertMeshVertexSpace};
