import{n as p}from"./projectBuffer-C1XIfvAy.js";import{a as m}from"./MeshLocalVertexSpace-B17LqmEn.js";import{bj as e}from"./main-DMwRPB7V.js";import{B as n}from"./vertexSpaceConversion-BJQl5Aa_.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-iXuXHClF.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-904KMvNW.js";import"./spatialReferenceEllipsoidUtils-DSN2Eiph.js";import"./computeTranslationToOriginAndRotation-B-I5ee8T.js";import"./projectPointToVector-CcSVJlQe.js";import"./projection-BGhmv4BS.js";import"./meshVertexSpaceUtils-IyP5rxEx.js";import"./vec3-KcP9P3EM.js";import"./BufferView-bkmZwSZA.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-DQp6MoIJ.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};