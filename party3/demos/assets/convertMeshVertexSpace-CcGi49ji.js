import { dN as s, s as s$1, P as a } from './main-BWr6aa-W.js';
import { l } from './MeshVertexAttributes-CStEdEZw.js';
import { M } from './vertexSpaceConversion-DyExy20o.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-BxBnKTYh.js';
import './computeTranslationToOriginAndRotation-Brscl8-L.js';
import './meshVertexSpaceUtils-i1Mk5IC8.js';
import './MeshLocalVertexSpace-Da38Hpy8.js';
import './vec3-CtJL1I6_.js';
import './projection-BUl1Dg3U.js';
import './DoubleArray-DL7bUX_l.js';
import './BufferView-BnDFYoMD.js';
import './vec4-DwCziT7c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
