import{n as p}from"./projectBuffer-CIj7HyWF.js";import{a as m}from"./MeshLocalVertexSpace-CzopkskX.js";import{bj as e}from"./main-BZJ3Qd5K.js";import{B as n}from"./vertexSpaceConversion-Dg5vygTe.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-Cm6-9mvg.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DyUBzsnt.js";import"./spatialReferenceEllipsoidUtils-CUKf_pZ0.js";import"./computeTranslationToOriginAndRotation-B141dYMf.js";import"./projectPointToVector-Bd0X_Hlc.js";import"./projection-BNcXvFgQ.js";import"./meshVertexSpaceUtils-DLaOI3DG.js";import"./vec3-9MSbEAvr.js";import"./BufferView-DmAB74bu.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-CCPuOwT8.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};