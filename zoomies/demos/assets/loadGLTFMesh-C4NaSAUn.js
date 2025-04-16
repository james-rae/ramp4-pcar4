import{s as D,U as L,aq as O,aE as B,eD as C,cs as P,dj as z}from"./main-vIJpOdvB.js";import{j as G,n as U}from"./mat3-XZDRtl20.js";import{e as E}from"./mat3f64-q3fE-ZOt.js";import{r as q}from"./vec4f64-CMoMXWBi.js";import{w as N,m as K,f as Q,c as V}from"./Mesh-BPYhslEL.js";import{p as k}from"./MeshVertexAttributes-bpvp6XaX.js";import{s as S}from"./meshVertexSpaceUtils-C3NtRuFp.js";import{c as F,x as j,L as H,O as R,i as I,E as J,T as W,u as X}from"./BufferView-Bi9j-zpP.js";import{t as Y,r as Z,u as ee,n as A}from"./vec3-D23Kgssw.js";import{f as te,o as re,u as M}from"./vec4-CUINEFMS.js";import{e as oe}from"./types-D0PSWh4d.js";import{loadGLTF as ne}from"./loader-TSIQHy1z.js";import{n as se,o as ae,f as ie,a as h,b as le,l as ue,e as ce,c as fe,d as me}from"./DefaultMaterial_COLOR_GAMMA-DQtchf-1.js";import{B as pe}from"./vertexSpaceConversion-DZGp_uZA.js";import{r as de}from"./resourceUtils-DVUP20DX.js";import{D as w}from"./enums-Dk3osxpS.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./MeshTransform-Df2x18Aj.js";import"./mat4-DddAqSdm.js";import"./mat4f64-CSKppSlJ.js";import"./quat-oTZP0S75.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-gSPtxhar.js";import"./vec42-CKs01hkn.js";import"./imageUtils-DXlpiZUP.js";import"./MeshLocalVertexSpace-CBNZLXBc.js";import"./earcut-Lltz9D9k.js";import"./Indices-tO6bcLRB.js";import"./plane-CH8irUYL.js";import"./vec2f64-B7N_6o8F.js";import"./deduplicate-gAfVktT7.js";import"./projectPointToVector-DaIrH8u0.js";import"./projection-DUpEFq3L.js";import"./projectBuffer-aZ5NGnsM.js";import"./spatialReferenceEllipsoidUtils-_xUB_06i.js";import"./computeTranslationToOriginAndRotation-3bo510T-.js";import"./External-BbFCOCNw.js";import"./infoFor3D-_5f2f6Um.js";import"./vec2-DGVIkCvT.js";import"./Version-DZB84Nzg.js";import"./basicInterfaces-CZwQPxTp.js";function xe(e,t,r){const l=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*c;for(let u=0;u<i;++u){for(let o=0;o<9;++o)l[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function ge(e,t,r){const l=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*c;for(let u=0;u<i;++u){for(let o=0;o<16;++o)l[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function $(e,t){return new e(new ArrayBuffer(t*e.ElementCount*oe(e.ElementType)))}async function gt(e,t,r){const l=new se($e(r)),n=(await ne(l,t,r,!0)).model,a=n.lods.shift(),c=new Map,i=new Map;n.textures.forEach((g,T)=>c.set(T,he(g))),n.materials.forEach((g,T)=>i.set(T,we(g,c)));const s=Te(a);for(const g of s.parts)be(s,g,i);const{position:m,normal:u,tangent:o,color:f,texCoord0:p}=s.vertexAttributes,d=S(e,r),b=e.spatialReference.isGeographic?S(e):d,v=pe({vertexAttributes:{position:m.typedBuffer,normal:u?.typedBuffer,tangent:o?.typedBuffer},vertexSpace:b,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r?.unitConversionDisabled?void 0:"meters"});if(!v)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new k({...v,color:f?.typedBuffer,uv:p?.typedBuffer})}}function $e(e){const t=e?.resolveFile;return t?{busy:!1,request:async(r,l,n)=>{const a=t?.(r)??r;return(await L(a,{responseType:l==="image"?"image":l==="binary"||l==="image+type"?"array-buffer":"json",signal:n?.signal,timeout:0})).data}}:null}function y(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${O(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function ye(e){return e!=null?e.toString():"-"}function Te(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},l=new Map,n=new Map,a=[];for(const c of e.parts){const{attributes:{position:i,normal:s,color:m,tangent:u,texCoord0:o}}=c,f=`
      ${y(i,l)}/
      ${y(s,l)}/
      ${y(m,l)}/
      ${y(u,l)}/
      ${y(o,l)}/
      ${ye(c.transform)}
    `;let p=!1;const d=O(n,f,()=>(p=!0,{start:t,length:i.count}));p&&(t+=i.count),s&&(r.normal=!0),m&&(r.color=!0),u&&(r.tangent=!0),o&&(r.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:d})}return{vertexAttributes:{position:$(W,t),normal:r.normal?$(I,t):null,tangent:r.tangent?$(F,t):null,color:r.color?$(j,t):null,texCoord0:r.texCoord0?$(X,t):null},parts:a,components:[]}}function he(e){return new N({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new B(Ee(e.color,e.opacity)),l=e.emissiveFactor?new B(Se(e.emissiveFactor)):null,n=a=>a?new V({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:z(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new K({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:l,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function be(e,t,r){t.writeVertices&&ve(e,t);const{indices:l,attributes:n,primitiveType:a,material:c}=t.gltf;let i=ae(l||n.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(i);for(let u=0;u<i.length;u++)m[u]+=s;i=m}e.components.push(new Q({name:t.gltf.name,faces:i,material:r.get(c),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:r,normal:l,tangent:n,color:a,texCoord0:c}=e.vertexAttributes,i=t.region.start,{attributes:s,transform:m}=t.gltf,u=s.position.count;if(Y(r.slice(i,u),s.position,m),s.normal!=null&&l!=null){const o=G(E(),m),f=l.slice(i,u);Z(f,s.normal,o),C(o)&&ee(f,f)}else l!=null&&ie(l,0,0,1,{dstIndex:i,count:u});if(s.tangent!=null&&n!=null){const o=U(E(),m),f=n.slice(i,u);te(f,s.tangent,o),C(o)&&re(f,f)}else n!=null&&h(n,0,0,1,1,{dstIndex:i,count:u});if(s.texCoord0!=null&&c!=null?le(c.slice(i,u),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:i,count:u}),s.color!=null&&a!=null){const o=s.color,f=a.slice(i,u);if(o.elementCount===4)o instanceof F?M(f,o,255):o instanceof j?ce(f,o):o instanceof H&&M(f,o,1/256);else{h(f,255,255,255,255);const p=R.fromTypedArray(f.typedBuffer,f.typedBufferStride);o instanceof I?A(p,o,255):o instanceof R?fe(p,o):o instanceof J&&A(p,o,1/256)}}else a!=null&&h(a.slice(i,u),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(e){return e**(1/me)*255}function Ee(e,t){return q(x(e[0]),x(e[1]),x(e[2]),t)}function Se(e){return P(x(e[0]),x(e[1]),x(e[2]))}export{gt as loadGLTFMesh};
