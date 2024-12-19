import { s as s$1, U, bZ as r$1, h9 as l$1, gj as j, gk as A, gl as n$1, cW as D, iY as r$4, aq as r$5, eT as M } from './main-jdFDoOPu.js';
import { e as e$3 } from './mat3f64-DKAwfC1r.js';
import { w, m, f, c } from './Mesh-CfyCXhs5.js';
import { p } from './MeshVertexAttributes-awLD9HEN.js';
import { s } from './meshVertexSpaceUtils-Bwktraru.js';
import { c as c$1, x, L, O, i, E, T, u as u$2 } from './BufferView-BjlYh8fP.js';
import { t, r as r$3, u, n as n$2 } from './vec3-c5XtCcIT.js';
import { f as f$2, o as o$1, u as u$1 } from './vec4-C0O756iN.js';
import { e as e$2 } from './types-E8ca035p.js';
import { loadGLTF as l } from './loader-CJSkou-p.js';
import { n, o, f as f$1, a as f$3, b as o$2, l as l$2, e as e$4, c as e$5, d as o$3 } from './DefaultMaterial_COLOR_GAMMA-D4GohJt3.js';
import { B } from './vertexSpaceConversion-3qARGX09.js';
import { r as r$2 } from './resourceUtils-Bxezfq1B.js';
import './preload-helper-dJJaZANz.js';
import './MeshTransform-2R18FMnE.js';
import './mat4f64-Cw8nJbLB.js';
import './quat-CBMGRihX.js';
import './quatf64-CvJnKmwc.js';
import './MeshLocalVertexSpace-Cc-jLTni.js';
import './earcut-Bc6IkkPv.js';
import './Indices-Bo7FLkhm.js';
import './plane-CBOt8dOS.js';
import './deduplicate-BedirgWR.js';
import './projectPointToVector-CuNlzNiq.js';
import './spatialReferenceEllipsoidUtils-Cmgcuzrm.js';
import './computeTranslationToOriginAndRotation-BpsM5e_w.js';
import './External-DpdFjME1.js';
import './basicInterfaces-Cirm-D74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$1(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<9;++e)r[u+e]=d[l+e];u+=f,l+=n;}}Object.freeze(Object.defineProperty({__proto__:null,copy:e$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)r[u+e]=d[l+e];u+=f,l+=n;}}Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$2(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function K(e,t,o){const n$1=new n(Q(o)),s$2=(await l(n$1,t,o,!0)).model,a=s$2.lods.shift(),i=new Map,l$1=new Map;s$2.textures.forEach(((e,t)=>i.set(t,X(e)))),s$2.materials.forEach(((e,t)=>l$1.set(t,Y(e,i))));const c=W(a);for(const r of c.parts)Z(c,r,l$1);const{position:u,normal:f,tangent:m,color:p$1,texCoord0:d}=c.vertexAttributes,h=s(e,o),T=e.spatialReference.isGeographic?s(e):h,v=B({vertexAttributes:{position:u.typedBuffer,normal:f?.typedBuffer,tangent:m?.typedBuffer},vertexSpace:T,spatialReference:e.spatialReference},h,{allowBufferReuse:!0,sourceUnit:o?.unitConversionDisabled?void 0:"meters"});if(!v)throw new s$1("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${T.type} to ${h.type}`);return {transform:null,vertexSpace:h,components:c.components,spatialReference:e.spatialReference,vertexAttributes:new p({...v,color:p$1?.typedBuffer,uv:d?.typedBuffer})}}function Q(e){const r=e?.resolveFile;return r?{busy:!1,request:async(e,o,n)=>{const s=r?.(e)??e,a="image"===o?"image":"binary"===o||"image+type"===o?"array-buffer":"json";return (await U(s,{responseType:a,signal:n?.signal,timeout:0})).data}}:null}function H(e,t){if(null==e)return "-";const r=e.typedBuffer;return `${r$1(t,r.buffer,(()=>t.size))}/${r.byteOffset}/${r.byteLength}`}function J(e){return null!=e?e.toString():"-"}function W(e){let t=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},r$2=new Map,n=new Map,s=[];for(const a of e.parts){const{attributes:{position:e,normal:i,color:l,tangent:c,texCoord0:u}}=a,f=`\n      ${H(e,r$2)}/\n      ${H(i,r$2)}/\n      ${H(l,r$2)}/\n      ${H(c,r$2)}/\n      ${H(u,r$2)}/\n      ${J(a.transform)}\n    `;let m=!1;const p=r$1(n,f,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),i&&(has.normal=!0),l&&(has.color=!0),c&&(has.tangent=!0),u&&(has.texCoord0=!0),s.push({gltf:a,writeVertices:m,region:p});}return {vertexAttributes:{position:r(T,t),normal:has.normal?r(i,t):null,tangent:has.tangent?r(c$1,t):null,color:has.color?r(x,t):null,texCoord0:has.texCoord0?r(u$2,t):null},parts:s,components:[]}}function X(e){return new w({data:(r$2(e.data),e.data),wrap:re(e.parameters.wrap)})}function Y(t,r){const o=new l$1(se(t.color,t.opacity)),n=t.emissiveFactor?new l$1(ae(t.emissiveFactor)):null,a=e=>e?new c({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:M(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new m({color:o,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:n,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:te(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:a(t.colorTextureTransform),normalTextureTransform:a(t.normalTextureTransform),occlusionTextureTransform:a(t.occlusionTextureTransform),emissiveTextureTransform:a(t.emissiveTextureTransform),metallicRoughnessTextureTransform:a(t.metallicRoughnessTextureTransform)})}function Z(e,t,r){t.writeVertices&&ee(e,t);const{indices:o$1,attributes:n,primitiveType:s,material:a}=t.gltf;let i=o(o$1||n.position.count,s);const l=t.region.start;if(l){const e=new Uint32Array(i);for(let t=0;t<i.length;t++)e[t]+=l;i=e;}e.components.push(new f({name:t.gltf.name,faces:i,material:r.get(a),shading:n.normal?"source":"flat",trustSourceNormals:!0}));}function ee(e,t$1){const{position:r,normal:o,tangent:s,color:c,texCoord0:u$2}=e.vertexAttributes,f=t$1.region.start,{attributes:m,transform:p}=t$1.gltf,d=m.position.count;if(t(r.slice(f,d),m.position,p),null!=m.normal&&null!=o){const e=j(e$3(),p),t=o.slice(f,d);r$3(t,m.normal,e),A(e)&&u(t,t);}else null!=o&&f$1(o,0,0,1,{dstIndex:f,count:d});if(null!=m.tangent&&null!=s){const e=n$1(e$3(),p),t=s.slice(f,d);f$2(t,m.tangent,e),A(e)&&o$1(t,t);}else null!=s&&f$3(s,0,0,1,1,{dstIndex:f,count:d});if(null!=m.texCoord0&&null!=u$2?o$2(u$2.slice(f,d),m.texCoord0):null!=u$2&&l$2(u$2,0,0,{dstIndex:f,count:d}),null!=m.color&&null!=c){const e=m.color,t=c.slice(f,d);if(4===e.elementCount)e instanceof c$1?u$1(t,e,255):e instanceof x?e$4(t,e):e instanceof L&&u$1(t,e,1/256);else {f$3(t,255,255,255,255);const r=O.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof i?n$2(r,e,255):e instanceof O?e$5(r,e):e instanceof E&&n$2(r,e,1/256);}}else null!=c&&f$3(c.slice(f,d),255,255,255,255);}function te(e){switch(e){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function re(e){return {horizontal:oe(e.s),vertical:oe(e.t)}}function oe(e){switch(e){case D.CLAMP_TO_EDGE:return "clamp";case D.MIRRORED_REPEAT:return "mirror";case D.REPEAT:return "repeat"}}function ne(e){return e**(1/o$3)*255}function se(e,t){return r$4(ne(e[0]),ne(e[1]),ne(e[2]),t)}function ae(e){return r$5(ne(e[0]),ne(e[1]),ne(e[2]))}

export { K as loadGLTFMesh };
