import{s as D,a4 as G,az as O,aM as v,f9 as S,cF as V,dA as N,ck as U}from"./main-D_jCcUNd.js";import{j as k,n as q}from"./mat3-CruJiiUv.js";import{e as _}from"./mat3f64-q3fE-ZOt.js";import{r as K}from"./vec4f64-o2zAXfmz.js";import{w as Q,m as H,f as J,i as W}from"./MeshComponent-NmrowKl4.js";import{p as X}from"./MeshVertexAttributes-DHriiJoa.js";import{l as C}from"./meshVertexSpaceUtils-cTsxdkAH.js";import{c as j,x as F,L as Y,O as M,i as I,E as Z,T as ee,u as te}from"./BufferView-8Ead2OQr.js";import{e as re,f as oe,s as ne,u as R}from"./vec3-DUQfuNFc.js";import{n as se,u as ie,c as A}from"./vec4-BC-l1fae.js";import{e as le}from"./types-D0PSWh4d.js";import{loadGLTF as ae}from"./loader-D8KrUjsd.js";import{n as ue,o as fe,b as ce,l as pe}from"./indexUtils-aTgUm3Ug.js";import{B as me}from"./vertexSpaceConversion-CNxuDBYl.js";import{n as de}from"./resourceUtils-RC4iEbLT.js";import{D as h}from"./enums-Dk3osxpS.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./imageUtils-CV8e604h.js";import"./meshProperties-C4iW0Ukm.js";import"./vec32-CQFqDiXA.js";import"./MeshLocalVertexSpace-uKvE6H2j.js";import"./vec2-maR1OrZI.js";import"./vec42-CKs01hkn.js";import"./mat4f64-Dk4dwAN8.js";import"./Version-ZDKFRu5V.js";import"./mat4-CiVQetHb.js";import"./quat-BUXSyYw2.js";import"./quatf64-aQ5IuZRd.js";import"./Indices-Dr18ipVB.js";import"./spatialReferenceEllipsoidUtils-C6WSLmy-.js";import"./computeTranslationToOriginAndRotation-DU_ozVBd.js";import"./projectBuffer-B9jUCpdF.js";import"./projectPointToVector-DZVfzWzg.js";import"./projection-DswCNHiF.js";import"./basicInterfaces-CZwQPxTp.js";function ye(e,t,r){const l=e.typedBuffer,a=e.typedBufferStride,o=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let i=(r?.dstIndex??0)*a,c=(r?.srcIndex??0)*n;for(let f=0;f<s;++f){for(let u=0;u<9;++u)l[i+u]=o[c+u];i+=a,c+=n}}Object.freeze(Object.defineProperty({__proto__:null,copy:ye},Symbol.toStringTag,{value:"Module"}));function ge(e,t,r){const l=e.typedBuffer,a=e.typedBufferStride,o=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let i=(r?.dstIndex??0)*a,c=(r?.srcIndex??0)*n;for(let f=0;f<s;++f){for(let u=0;u<16;++u)l[i+u]=o[c+u];i+=a,c+=n}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t){P(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function P(e,t,r=3,l=r){const a=t.length/l;let o=0,n=0;for(let s=0;s<a;++s)e[o]=t[n],e[o+1]=t[n+1],e[o+2]=t[n+2],o+=r,n+=l}function z(e,t,r,l,a){const o=e.typedBuffer,n=e.typedBufferStride,s=a?.count??e.count;let i=(a?.dstIndex??0)*n;for(let c=0;c<s;++c)o[i]=t,o[i+1]=r,o[i+2]=l,i+=n}Object.freeze(Object.defineProperty({__proto__:null,copy:P,copyView:xe,fill:z},Symbol.toStringTag,{value:"Module"}));function $e(e,t){L(e.typedBuffer,t,e.typedBufferStride)}function L(e,t,r=4){const l=t.typedBuffer,a=t.typedBufferStride,o=t.count;let n=0,s=0;for(let i=0;i<o;++i)e[n]=l[s],e[n+1]=l[s+1],e[n+2]=l[s+2],e[n+3]=l[s+3],n+=r,s+=a}function T(e,t,r,l,a,o){const n=e.typedBuffer,s=e.typedBufferStride,i=o?.count??e.count;let c=(o?.dstIndex??0)*s;for(let f=0;f<i;++f)n[c]=t,n[c+1]=r,n[c+2]=l,n[c+3]=a,c+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:L,copyView:$e,fill:T},Symbol.toStringTag,{value:"Module"}));function x(e,t){return new e(new ArrayBuffer(t*e.ElementCount*le(e.ElementType)))}async function pt(e,t,r){const l=new ue(Te(r)),a=(await ae(l,t,r,!0)).model,o=a.lods.shift(),n=new Map,s=new Map;a.textures.forEach((g,b)=>n.set(b,Be(g))),a.materials.forEach((g,b)=>s.set(b,we(g,n)));const i=he(o);for(const g of i.parts)ve(i,g,s);const{position:c,normal:f,tangent:u,color:p,texCoord0:m}=i.vertexAttributes,d=C(e,r),B=e.spatialReference.isGeographic?C(e):d,w=me({vertexAttributes:{position:c.typedBuffer,normal:f?.typedBuffer,tangent:u?.typedBuffer},vertexSpace:B,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r?.unitConversionDisabled?void 0:"meters"});if(!w)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${B.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new X({...w,color:p?.typedBuffer,uv:m?.typedBuffer})}}function Te(e){const t=e?.resolveFile;return t?{busy:!1,request:async(r,l,a)=>{const o=t?.(r)??r;return(await G(o,{responseType:l==="image"?"image":l==="binary"||l==="image+type"?"array-buffer":"json",signal:a?.signal,timeout:0})).data}}:null}function $(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${O(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function be(e){return e!=null?e.toString():"-"}function he(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},l=new Map,a=new Map,o=[];for(const n of e.parts){const{position:s,normal:i,color:c,tangent:f,texCoord0:u}=n.attributes,p=`
      ${$(s,l)}/
      ${$(i,l)}/
      ${$(c,l)}/
      ${$(f,l)}/
      ${$(u,l)}/
      ${be(n.transform)}
    `;let m=!1;const d=O(a,p,()=>(m=!0,{start:t,length:s.count}));m&&(t+=s.count),i&&(r.normal=!0),c&&(r.color=!0),f&&(r.tangent=!0),u&&(r.texCoord0=!0),o.push({gltf:n,writeVertices:m,region:d})}return{vertexAttributes:{position:x(ee,t),normal:r.normal?x(I,t):null,tangent:r.tangent?x(j,t):null,color:r.color?x(F,t):null,texCoord0:r.texCoord0?x(te,t):null},parts:o,components:[]}}function Be(e){return new Q({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new v(Me(e.color,e.opacity)),l=e.emissiveFactor?new v(Re(e.emissiveFactor)):null,a=o=>o?new W({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:N(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new H({color:r,colorTexture:t.get(e.colorTexture),normalTexture:t.get(e.normalTexture),emissiveColor:l,emissiveTexture:t.get(e.emissiveTexture),occlusionTexture:t.get(e.occlusionTexture),alphaMode:_e(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.metallicRoughnessTexture),colorTextureTransform:a(e.colorTextureTransform),normalTextureTransform:a(e.normalTextureTransform),occlusionTextureTransform:a(e.occlusionTextureTransform),emissiveTextureTransform:a(e.emissiveTextureTransform),metallicRoughnessTextureTransform:a(e.metallicRoughnessTextureTransform)})}function ve(e,t,r){t.writeVertices&&Se(e,t);const{indices:l,attributes:a,primitiveType:o,material:n}=t.gltf;let s=fe(l||a.position.count,o);const i=t.region.start;if(i){const c=new Uint32Array(s);for(let f=0;f<s.length;f++)c[f]+=i;s=c}e.components.push(new J({name:t.gltf.name,faces:s,material:r.get(n),shading:a.normal?"source":"flat",trustSourceNormals:!0}))}function Se(e,t){const{position:r,normal:l,tangent:a,color:o,texCoord0:n}=e.vertexAttributes,s=t.region.start,{attributes:i,transform:c}=t.gltf,f=i.position.count;if(re(r.slice(s,f),i.position,c),i.normal!=null&&l!=null){const u=k(_(),c),p=l.slice(s,f);oe(p,i.normal,u),S(u)&&ne(p,p)}else l!=null&&z(l,0,0,1,{dstIndex:s,count:f});if(i.tangent!=null&&a!=null){const u=q(_(),c),p=a.slice(s,f);se(p,i.tangent,u),S(u)&&ie(p,p)}else a!=null&&T(a,0,0,1,1,{dstIndex:s,count:f});if(i.texCoord0!=null&&n!=null?ce(n.slice(s,f),i.texCoord0):n!=null&&pe(n,0,0,{dstIndex:s,count:f}),i.color!=null&&o!=null){const u=i.color,p=o.slice(s,f);if(u.elementCount===4)u instanceof j?A(p,u,1,255):(u instanceof F||u instanceof Y)&&A(p,u,1/255,255);else{T(p,255,255,255,255);const m=M.fromTypedArray(p.typedBuffer,p.typedBufferStride);u instanceof I?R(m,u,1,255):(u instanceof M||u instanceof Z)&&R(m,u,1/255,255)}}else o!=null&&T(o.slice(s,f),255,255,255,255)}function _e(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:E(e.s),vertical:E(e.t)}}function E(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function y(e){return e**(1/U)*255}function Me(e,t){return K(y(e[0]),y(e[1]),y(e[2]),t)}function Re(e){return V(y(e[0]),y(e[1]),y(e[2]))}export{pt as loadGLTFMesh};
