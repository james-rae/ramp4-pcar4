import{n as p}from"./projectBuffer-DWp04sKw.js";import{a as m}from"./MeshLocalVertexSpace-D7zmFLOj.js";import{bj as e}from"./main-CSU-shzQ.js";import{B as n}from"./vertexSpaceConversion-tNL8z8Be.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-DwljmHy8.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DjyHV4YJ.js";import"./spatialReferenceEllipsoidUtils-Bn7sdp4Z.js";import"./computeTranslationToOriginAndRotation-Bk0sLUxT.js";import"./projectPointToVector-D1sb1QcY.js";import"./projection-MdOxpSff.js";import"./meshVertexSpaceUtils-B7zV9SCV.js";import"./vec3-DO7zHhPx.js";import"./BufferView-kpt7dED5.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-D5geZbZW.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};
