import{G as m,s,h as p}from"./main-C45WTWFO.js";import{p as n}from"./MeshVertexAttributes-B79g4BiE.js";import{B as a}from"./vertexSpaceConversion-BX3-2K5T.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-D__-bNYh.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-CUgMqcgw.js";import"./spatialReferenceEllipsoidUtils-D6Uoz8TV.js";import"./computeTranslationToOriginAndRotation-Ch2aT_Ri.js";import"./projectBuffer-F7pB9YVv.js";import"./projectPointToVector-DNREF0MM.js";import"./projection-BnfuWpaw.js";import"./meshVertexSpaceUtils-DlLzXyy1.js";import"./MeshLocalVertexSpace-CFj1gKsL.js";import"./vec3-DKPNk-CG.js";import"./BufferView-BPLNRYtr.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-CvXK-eag.js";async function U(t,r,o){await Promise.resolve(),m(o);const e=a(t,r,{useEllipsoid:o?.useEllipsoid});if(!e)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:p(t.vertexAttributes.uv),color:p(t.vertexAttributes.color)}),r);return i.transform=null,i}export{U as convertMeshVertexSpace};
