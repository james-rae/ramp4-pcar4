import { dN as s, s as s$1, P as a } from './main-CGBWc59Z.js';
import { l } from './MeshVertexAttributes-B0EBN-p-.js';
import { M } from './vertexSpaceConversion-Bt8i3J0F.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-CSBdmRmv.js';
import './computeTranslationToOriginAndRotation-DPVyOv1o.js';
import './meshVertexSpaceUtils-Do5BvCCu.js';
import './MeshLocalVertexSpace-yWnyenS-.js';
import './vec3-BxZ5yrM4.js';
import './projection-Do8NJvYY.js';
import './DoubleArray-SfjR8s0J.js';
import './BufferView-Bzzf7vi9.js';
import './vec4-DpWUWysZ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
