import{X as m,s,v as p}from"./main-CcTJZah4.js";import{p as n}from"./MeshVertexAttributes-b2-qBU6r.js";import{B as c}from"./vertexSpaceConversion-BgFgstzH.js";import"./preload-helper-ExcqyqRp.js";import"./meshProperties-C4iW0Ukm.js";import"./mat3-CruJiiUv.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-I_M_KIEV.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-D4ob7-3U.js";import"./spatialReferenceEllipsoidUtils-CsSyVIf9.js";import"./computeTranslationToOriginAndRotation-CTqTKM0w.js";import"./projectBuffer-DwB7xYJN.js";import"./projectPointToVector-D6P7t9ma.js";import"./projection-nLxG4Uci.js";import"./meshVertexSpaceUtils-D_fO4xGi.js";import"./MeshLocalVertexSpace-D-Mxwhot.js";import"./vec3-CHxyJkts.js";import"./BufferView-DZslrVDM.js";import"./vec2-maR1OrZI.js";import"./vec42-CKs01hkn.js";import"./vec4-BJnMXj40.js";async function g(t,r,o){await Promise.resolve(),m(o);const e=c(t,r,{useEllipsoid:o?.useEllipsoid});if(!e)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:p(t.vertexAttributes.uv),color:p(t.vertexAttributes.color)}),r);return i.transform=null,i}export{g as convertMeshVertexSpace};
