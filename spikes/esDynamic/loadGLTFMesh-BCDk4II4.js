import{s as L,U as P,ao as C,aC as S,eA as A,cp as D,dg as z}from"./main-DaZH2qzH.js";import{j as G,n as U}from"./mat3-CC4Foazl.js";import{e as E}from"./mat3f64-Dh9_zhFu.js";import{r as N}from"./vec4f64-hf2nxvhQ.js";import{w as q,m as K,f as V,c as k}from"./Mesh-CKmNj6jt.js";import{p as Q}from"./MeshVertexAttributes-Bp5wNDfG.js";import{s as R}from"./meshVertexSpaceUtils-BoWwLw2S.js";import{c as M,x as $,L as H,O as _,i as O,E as J,T as W,u as X}from"./BufferView-DvER9GLG.js";import{t as Y,r as Z,u as ee,n as F}from"./vec3-c1J7iIQj.js";import{f as te,o as oe,u as I}from"./vec4-COKLTxca.js";import{e as re}from"./types-ChhhI6OU.js";import{loadGLTF as ne}from"./loader-BhbivhDS.js";import{n as se,o as ae,f as le,a as w,b as ie,l as ue,e as ce,c as fe,d as me}from"./DefaultMaterial_COLOR_GAMMA-DWxTru2J.js";import{B as pe}from"./vertexSpaceConversion-B2SlF3j-.js";import{r as de}from"./resourceUtils-CgGYeAE9.js";import{D as b}from"./enums-DBi1-Mm2.js";function xe(e,t,o){const i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,l=o?o.count:t.count;let s=(o?.dstIndex??0)*n,m=(o?.srcIndex??0)*c;for(let u=0;u<l;++u){for(let r=0;r<9;++r)i[s+r]=a[m+r];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function ge(e,t,o){const i=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,l=o?o.count:t.count;let s=(o?.dstIndex??0)*n,m=(o?.srcIndex??0)*c;for(let u=0;u<l;++u){for(let r=0;r<16;++r)i[s+r]=a[m+r];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*re(e.ElementType)))}async function ye(e,t,o){const i=new se(Te(o)),n=(await ne(i,t,o,!0)).model,a=n.lods.shift(),c=new Map,l=new Map;n.textures.forEach((g,h)=>c.set(h,be(g))),n.materials.forEach((g,h)=>l.set(h,ve(g,c)));const s=we(a);for(const g of s.parts)Be(s,g,l);const{position:m,normal:u,tangent:r,color:f,texCoord0:p}=s.vertexAttributes,d=R(e,o),v=e.spatialReference.isGeographic?R(e):d,B=pe({vertexAttributes:{position:m.typedBuffer,normal:u?.typedBuffer,tangent:r?.typedBuffer},vertexSpace:v,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:o?.unitConversionDisabled?void 0:"meters"});if(!B)throw new L("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${v.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new Q({...B,color:f?.typedBuffer,uv:p?.typedBuffer})}}function Te(e){const t=e?.resolveFile;return t?{busy:!1,request:async(o,i,n)=>{const a=t?.(o)??o;return(await P(a,{responseType:i==="image"?"image":i==="binary"||i==="image+type"?"array-buffer":"json",signal:n?.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const o=e.typedBuffer;return`${C(t,o.buffer,()=>t.size)}/${o.byteOffset}/${o.byteLength}`}function he(e){return e!=null?e.toString():"-"}function we(e){let t=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,n=new Map,a=[];for(const c of e.parts){const{attributes:{position:l,normal:s,color:m,tangent:u,texCoord0:r}}=c,f=`
      ${T(l,i)}/
      ${T(s,i)}/
      ${T(m,i)}/
      ${T(u,i)}/
      ${T(r,i)}/
      ${he(c.transform)}
    `;let p=!1;const d=C(n,f,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),s&&(o.normal=!0),m&&(o.color=!0),u&&(o.tangent=!0),r&&(o.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:d})}return{vertexAttributes:{position:y(W,t),normal:o.normal?y(O,t):null,tangent:o.tangent?y(M,t):null,color:o.color?y($,t):null,texCoord0:o.texCoord0?y(X,t):null},parts:a,components:[]}}function be(e){return new q({data:(de(e.data),e.data),wrap:Ae(e.parameters.wrap)})}function ve(e,t){const o=new S(Ee(e.color,e.opacity)),i=e.emissiveFactor?new S(Re(e.emissiveFactor)):null,n=a=>a?new k({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:z(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new K({color:o,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:i,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Se(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function Be(e,t,o){t.writeVertices&&Ce(e,t);const{indices:i,attributes:n,primitiveType:a,material:c}=t.gltf;let l=ae(i||n.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(l);for(let u=0;u<l.length;u++)m[u]+=s;l=m}e.components.push(new V({name:t.gltf.name,faces:l,material:o.get(c),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function Ce(e,t){const{position:o,normal:i,tangent:n,color:a,texCoord0:c}=e.vertexAttributes,l=t.region.start,{attributes:s,transform:m}=t.gltf,u=s.position.count;if(Y(o.slice(l,u),s.position,m),s.normal!=null&&i!=null){const r=G(E(),m),f=i.slice(l,u);Z(f,s.normal,r),A(r)&&ee(f,f)}else i!=null&&le(i,0,0,1,{dstIndex:l,count:u});if(s.tangent!=null&&n!=null){const r=U(E(),m),f=n.slice(l,u);te(f,s.tangent,r),A(r)&&oe(f,f)}else n!=null&&w(n,0,0,1,1,{dstIndex:l,count:u});if(s.texCoord0!=null&&c!=null?ie(c.slice(l,u),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:l,count:u}),s.color!=null&&a!=null){const r=s.color,f=a.slice(l,u);if(r.elementCount===4)r instanceof M?I(f,r,255):r instanceof $?ce(f,r):r instanceof H&&I(f,r,1/256);else{w(f,255,255,255,255);const p=_.fromTypedArray(f.typedBuffer,f.typedBufferStride);r instanceof O?F(p,r,255):r instanceof _?fe(p,r):r instanceof J&&F(p,r,1/256)}}else a!=null&&w(a.slice(l,u),255,255,255,255)}function Se(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ae(e){return{horizontal:j(e.s),vertical:j(e.t)}}function j(e){switch(e){case b.CLAMP_TO_EDGE:return"clamp";case b.MIRRORED_REPEAT:return"mirror";case b.REPEAT:return"repeat"}}function x(e){return e**(1/me)*255}function Ee(e,t){return N(x(e[0]),x(e[1]),x(e[2]),t)}function Re(e){return D(x(e[0]),x(e[1]),x(e[2]))}export{ye as loadGLTFMesh};
