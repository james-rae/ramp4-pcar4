import{n as p}from"./projectBuffer-cJZKDuOz.js";import{a as m}from"./MeshLocalVertexSpace-C8Wn_wW_.js";import{bh as e}from"./main-B3JhZOBP.js";import{B as n}from"./vertexSpaceConversion-Cr6kTIkN.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-DmgL3kdu.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DzWiU6o7.js";import"./spatialReferenceEllipsoidUtils-DIwmgupy.js";import"./computeTranslationToOriginAndRotation-Cs8y2zOJ.js";import"./projectPointToVector-7JhmrRdF.js";import"./projection-Cg7AYUJP.js";import"./meshVertexSpaceUtils-dnJC5Tse.js";import"./vec3-B7CdmHzb.js";import"./BufferView-CE0AiH3O.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-Cd0hfFDR.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};