import { dN as s, s as s$1, P as a } from './main-BKGHUZ-u.js';
import { l } from './MeshVertexAttributes-DYfjQU7l.js';
import { M } from './vertexSpaceConversion-BAxQZBds.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-C6N7b4Ad.js';
import './computeTranslationToOriginAndRotation-DObUuLZO.js';
import './meshVertexSpaceUtils-BDSvczZc.js';
import './MeshLocalVertexSpace-FDr_fmkb.js';
import './vec3-Qe_rExf8.js';
import './projection-D8GENGro.js';
import './DoubleArray-BX0WXpqd.js';
import './BufferView-DucAk1Io.js';
import './vec4-40-9IP4x.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
