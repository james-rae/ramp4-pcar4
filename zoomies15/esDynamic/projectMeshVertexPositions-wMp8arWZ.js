import{n as i}from"./projectBuffer-BhrzUXIF.js";import{a as n}from"./MeshLocalVertexSpace-DwVRetvf.js";import{bh as s}from"./main-yxqK2SuK.js";import{B as a}from"./vertexSpaceConversion-C1Xpc9MT.js";function p(e,r){const o=a(e,n.absolute);if(!o)return null;let t=o.position;return s(e.spatialReference,r)||(t=new Float64Array(o.position.length),i(o.position,e.spatialReference,0,t,r,0))?t:null}export{p as projectMeshVertexPositions};
