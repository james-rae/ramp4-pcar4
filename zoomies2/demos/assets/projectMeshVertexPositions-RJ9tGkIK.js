import{n as p}from"./projectBuffer-DIzlXyWh.js";import{a as m}from"./MeshLocalVertexSpace-lZimXs-u.js";import{bj as e}from"./main-BxgY9rsH.js";import{B as n}from"./vertexSpaceConversion-B239TwZ7.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-D41khPIZ.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-BAamZCaj.js";import"./spatialReferenceEllipsoidUtils-Bo_0__da.js";import"./computeTranslationToOriginAndRotation-R8nGl4e0.js";import"./projectPointToVector-C1p6-7ZP.js";import"./projection-DMFhF-YC.js";import"./meshVertexSpaceUtils-LYdd4sko.js";import"./vec3-Z1o8a0jW.js";import"./BufferView-CM7WOdMZ.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-IyQ2yvI4.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};
