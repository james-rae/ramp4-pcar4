import{G as m,s,h as p}from"./main-B3JhZOBP.js";import{p as n}from"./MeshVertexAttributes-BecIOsc6.js";import{B as a}from"./vertexSpaceConversion-Cr6kTIkN.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-DmgL3kdu.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DzWiU6o7.js";import"./spatialReferenceEllipsoidUtils-DIwmgupy.js";import"./computeTranslationToOriginAndRotation-Cs8y2zOJ.js";import"./projectBuffer-cJZKDuOz.js";import"./projectPointToVector-7JhmrRdF.js";import"./projection-Cg7AYUJP.js";import"./meshVertexSpaceUtils-dnJC5Tse.js";import"./MeshLocalVertexSpace-C8Wn_wW_.js";import"./vec3-B7CdmHzb.js";import"./BufferView-CE0AiH3O.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-Cd0hfFDR.js";async function U(t,r,o){await Promise.resolve(),m(o);const e=a(t,r,{useEllipsoid:o?.useEllipsoid});if(!e)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:p(t.vertexAttributes.uv),color:p(t.vertexAttributes.color)}),r);return i.transform=null,i}export{U as convertMeshVertexSpace};