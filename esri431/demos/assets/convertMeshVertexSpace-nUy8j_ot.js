import { J as s, s as s$1, T as a$1 } from './main-jdFDoOPu.js';
import { p } from './MeshVertexAttributes-awLD9HEN.js';
import { B } from './vertexSpaceConversion-3qARGX09.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-DKAwfC1r.js';
import './mat4f64-Cw8nJbLB.js';
import './spatialReferenceEllipsoidUtils-Cmgcuzrm.js';
import './computeTranslationToOriginAndRotation-BpsM5e_w.js';
import './projectPointToVector-CuNlzNiq.js';
import './meshVertexSpaceUtils-Bwktraru.js';
import './MeshLocalVertexSpace-Cc-jLTni.js';
import './vec3-c5XtCcIT.js';
import './BufferView-BjlYh8fP.js';
import './vec4-C0O756iN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const l=B(i,n,{useEllipsoid:c?.useEllipsoid});if(!l)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const m=i.cloneAndModifyVertexAttributes(new p({...l,uv:a$1(i.vertexAttributes.uv),color:a$1(i.vertexAttributes.color)}),n);return m.transform=null,m}

export { i as convertMeshVertexSpace };
