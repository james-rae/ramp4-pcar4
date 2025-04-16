import{X as m,s,v as p}from"./main-BnINupoD.js";import{p as n}from"./MeshVertexAttributes-CzB19k0q.js";import{B as c}from"./vertexSpaceConversion-Dfp1lOnH.js";import"./preload-helper-ExcqyqRp.js";import"./meshProperties-C4iW0Ukm.js";import"./mat3-CruJiiUv.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-pV3Yd6bK.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-zaCIH5IA.js";import"./spatialReferenceEllipsoidUtils-CE9BWFiu.js";import"./computeTranslationToOriginAndRotation-KUf4u5Ih.js";import"./projectBuffer-aZbPqVLL.js";import"./projectPointToVector-CuwXeZBj.js";import"./projection-BG6zqujR.js";import"./meshVertexSpaceUtils-Cu5hxcNO.js";import"./MeshLocalVertexSpace-B2PsF4Bn.js";import"./vec3-B0ZJ5Qf0.js";import"./BufferView-BKKI6ML5.js";import"./vec2-maR1OrZI.js";import"./vec42-CKs01hkn.js";import"./vec4-b3nqEzCp.js";async function g(t,r,o){await Promise.resolve(),m(o);const e=c(t,r,{useEllipsoid:o?.useEllipsoid});if(!e)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:p(t.vertexAttributes.uv),color:p(t.vertexAttributes.color)}),r);return i.transform=null,i}export{g as convertMeshVertexSpace};
