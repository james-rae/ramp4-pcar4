import{n as i}from"./projectBuffer-C4EMD_TQ.js";import{a as n}from"./MeshLocalVertexSpace-C_RB2HUZ.js";import{bf as s}from"./main-umVzVZ3H.js";import{B as a}from"./vertexSpaceConversion-C0VK05zs.js";function p(e,r){const o=a(e,n.absolute);if(!o)return null;let t=o.position;return s(e.spatialReference,r)||(t=new Float64Array(o.position.length),i(o.position,e.spatialReference,0,t,r,0))?t:null}export{p as projectMeshVertexPositions};