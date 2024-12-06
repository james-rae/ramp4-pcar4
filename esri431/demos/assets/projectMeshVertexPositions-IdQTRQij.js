import { a6 as s, c2 as n$1 } from './main-jdFDoOPu.js';
import { b as a } from './MeshLocalVertexSpace-Cc-jLTni.js';
import { B } from './vertexSpaceConversion-3qARGX09.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-DKAwfC1r.js';
import './mat4f64-Cw8nJbLB.js';
import './spatialReferenceEllipsoidUtils-Cmgcuzrm.js';
import './computeTranslationToOriginAndRotation-BpsM5e_w.js';
import './projectPointToVector-CuNlzNiq.js';
import './meshVertexSpaceUtils-Bwktraru.js';
import './vec3-c5XtCcIT.js';
import './BufferView-BjlYh8fP.js';
import './vec4-C0O756iN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,i){const p=B(n,a.absolute);if(!p)return null;let s$1=p.position;return s(n.spatialReference,i)||(s$1=new Float64Array(p.position.length),n$1(p.position,n.spatialReference,0,s$1,i,0))?s$1:null}

export { n as projectMeshVertexPositions };
