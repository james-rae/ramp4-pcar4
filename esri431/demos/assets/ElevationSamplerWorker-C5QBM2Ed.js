import { Q as has } from './main-jdFDoOPu.js';
import { h } from './PooledRBush-DUcxEBYC.js';
import { b as a$1 } from './MeshLocalVertexSpace-Cc-jLTni.js';
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
class n{async createIndex(t,r){const n=new Array;if(!t.vertexAttributes?.position)return new h;const o=a(t),s=null!=r?await r.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return i().fromJSON(s)}createIndexThread(e){const t=i();if(!e)return {result:t.toJSON()};const r=new Float64Array(e.position);return e.components?s(t,r,e.components.map((e=>new Uint32Array(e)))):o(t,r)}}function o(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=c(t,o,o+3,o+6);return e.load(r),{result:e.toJSON()}}function s(e,t,r){let n=0;for(const a of r)n+=a.length/3;const o=new Array(n);let s=0;for(const a of r)for(let e=0;e<a.length;e+=3)o[s++]=c(t,3*a[e],3*a[e+1],3*a[e+2]);return e.load(o),{result:e.toJSON()}}function a(e){const{vertexAttributes:{position:n},vertexSpace:o,spatialReference:s,transform:a}=e,i=B({vertexAttributes:{position:n},vertexSpace:o,spatialReference:s,transform:a},a$1.absolute,{allowBufferReuse:!0})?.position;return i?!e.components||e.components.some((e=>!e.faces))?{position:i.buffer}:{position:i.buffer,components:e.components.map((e=>e.faces))}:null}function i(){return new h(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}function c(e,t,r,n){return {minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}

export { n as default };
