import{n as i}from"./projectBuffer-DhxITeKF.js";import{a as n}from"./MeshLocalVertexSpace-Bpi4WVos.js";import{bf as s}from"./main-CXlQVgQI.js";import{B as a}from"./vertexSpaceConversion-CNqNMILG.js";function p(e,r){const o=a(e,n.absolute);if(!o)return null;let t=o.position;return s(e.spatialReference,r)||(t=new Float64Array(o.position.length),i(o.position,e.spatialReference,0,t,r,0))?t:null}export{p as projectMeshVertexPositions};