import{_ as H,a2 as ge,X as K,s as ye,dq as Q,ff as X,hp as N,n as Te,f6 as Y,cg as J,aI as $}from"./main-DTtQVgOw.js";import{a as be}from"./devEnvironmentUtils-CxrVv3RG.js";import{i as Z,j as we,n as ve}from"./mat3-DOnW3DjW.js";import{t as V,e as ee}from"./mat3f64-Dh9_zhFu.js";import{h as Ae}from"./mat4-DTP_Am9Z.js";import{e as Re}from"./mat4f64-BaJwL7tQ.js";import{s as Me}from"./vec2f64-CEUyUoff.js";import{E as te,c as Be,i as re,r as Se,A as Ie,I as Oe}from"./vec32-E5gJqT0h.js";import{N as se,f as ne,n as j}from"./Geometry-Dm1jkOPr.js";import{c as oe,x as Pe,L as Ee,i as ae,O as Ce,E as Fe}from"./BufferView-DRopjhqu.js";import{r as Ue,n as ke,d as ie,l as le}from"./vec3-CZ4zbe5r.js";import{o as Le,d as ue}from"./vec4-BMTdfgsL.js";import{n as _e,o as qe,a as Ne}from"./indexUtils-Cd-DTbbe.js";import{n as G}from"./resourceUtils-DUgKsICq.js";import{i as je,f as De}from"./vec2f32-CVhmN3Me.js";import{u as $e}from"./memoryEstimations-DzSM9ZVz.js";import{t as Ve}from"./NestedMap-Ddo7BfvO.js";import{r as ce}from"./Version-DjkwJXVg.js";import{o as Ge}from"./Indices-EOt5HY4t.js";import{t as ze}from"./requestImageUtils-CIn1gr1-.js";import{t as C}from"./orientedBoundingBox-B-7pfhxK.js";import{e as z,i as R,n as We}from"./basicInterfaces-Dsf65ICa.js";import{e as E}from"./VertexAttribute-DFC3a3eR.js";import{z as D,s as He,t as Ke,n as Qe,o as Xe}from"./DefaultMaterial-oFCsi6Z4.js";import{D as me}from"./enums-DBi1-Mm2.js";import{a as fe}from"./NormalAttribute.glsl-BcRH_H8f.js";function F(t){if(t==null)return null;const e=t.offset!=null?t.offset:je,n=t.rotation!=null?t.rotation:0,r=t.scale!=null?t.scale:De,c=V(1,0,0,0,1,0,e[0],e[1],1),i=V(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),o=V(r[0],0,0,0,r[1],0,0,0,1),u=ee();return Z(u,i,o),Z(u,c,u),u}class Ye{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Je{constructor(e,n,r){this.name=e,this.lodThreshold=n,this.pivotOffset=r,this.stageResources=new Ye,this.numberOfVertices=0}}const B=()=>Te.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class Ze{constructor(e,n,r){this.resource=e,this.textures=n,this.cachedMemory=r}}async function et(t,e){const n=await tt(t,e),r=await at(n.textureDefinitions??{},e);let c=0;for(const i in r)if(r.hasOwnProperty(i)){const o=r[i];c+=o?.image?o.image.width*o.image.height*4:0}return new Ze(n,r,c+$e(n))}async function tt(t,e){const n=e?.streamDataRequester;if(n)return rt(t,n,e);const r=await H(ge(t,e));if(r.ok===!0)return r.value.data;K(r.error),de(r.error)}async function rt(t,e,n){const r=await H(e.request(t,"json",n));if(r.ok===!0)return r.value;K(r.error),de(r.error.details.url)}function de(t){throw new ye("",`Request for object resource failed: ${t}`)}function st(t){const e=t.params,n=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const o in e.vertexAttributes){const u=i[o];u?.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),r=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${n}'`),r=!1}t.params.material||(B().warn("Geometry requires material"),r=!1);const c=t.params.vertexAttributes;for(const i in c)c[i].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function nt(t,e){const n=new Array,r=new Array,c=new Array,i=new Ve,o=t.resource,u=ce.parse(o.version||"1.0","wosr");lt.validate(u);const s=o.model.name,a=o.model.geometries,l=o.materialDefinitions??{},m=t.textures;let h=0;const x=new Map;for(let d=0;d<a.length;d++){const g=a[d];if(!st(g))continue;const T=it(g),w=g.params.vertexAttributes,p=[],y=f=>{if(g.params.topology==="PerAttributeArray")return null;const v=g.params.faces;for(const b in v)if(b===f)return v[b].values;return null},k=w[E.POSITION],_=k.values.length/k.valuesPerElement;for(const f in w){const v=w[f],b=v.values,A=y(f)??Ge(_);p.push([f,new C(b,A,v.valuesPerElement,!0)])}const S=T.texture,M=m&&m[S];if(M&&!x.has(S)){const{image:f,parameters:v}=M,b=new se(f,v);r.push(b),x.set(S,b)}const q=x.get(S),L=q?q.id:void 0,O=T.material;let I=i.get(O,S);if(I==null){const f=l[O.slice(O.lastIndexOf("/")+1)].params;f.transparency===1&&(f.transparency=0);const v=M&&M.alphaChannelUsage,b=f.transparency>0||v==="transparency"||v==="maskAndTransparency",A=M?pe(M.alphaChannelUsage):void 0,W={ambient:Q(f.diffuse),diffuse:Q(f.diffuse),opacity:1-(f.transparency||0),transparent:b,textureAlphaMode:A,textureAlphaCutoff:.33,textureId:L,doubleSided:!0,cullFace:z.None,colorMixMode:f.externalColorMixMode||"tint",textureAlphaPremultiplied:M?.parameters.preMultiplyAlpha??!1};e?.materialParameters&&Object.assign(W,e.materialParameters),I=new D(W,e),i.set(O,S,I)}c.push(I);const P=new ne(I,p);h+=p.find(f=>f[0]===E.POSITION)?.[1]?.indices.length??0,n.push(P)}return{engineResources:[{name:s,stageResources:{textures:r,materials:c,geometries:n},pivotOffset:o.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:ot(n)}}function ot(t){const e=X();return t.forEach(n=>{const r=n.boundingInfo;r!=null&&(N(e,r.bbMin),N(e,r.bbMax))}),e}async function at(t,e){const n=new Array;for(const i in t){const o=t[i],u=o.images[0].data;if(!u){B().warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+u,a="/textureDefinitions/"+i,l=o.channels==="rgba"?o.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:me.REPEAT,t:me.REPEAT},preMultiplyAlpha:pe(l)!==R.Opaque},h=e?.disableTextures?Promise.resolve(null):ze(s,e);n.push(h.then(x=>({refId:a,image:x,parameters:m,alphaChannelUsage:l})))}const r=await Promise.all(n),c={};for(const i of r)c[i.refId]=i;return c}function pe(t){switch(t){case"mask":return R.Mask;case"maskAndTransparency":return R.MaskBlend;case"none":return R.Opaque;default:return R.Blend}}function it(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const lt=new ce(1,2,"wosr");async function he(t,e){const n=xe(be(t));if(n.fileType==="wosr"){const m=await(e.cache?e.cache.loadWOSR(n.url,e):et(n.url,e)),{engineResources:h,referenceBoundingBox:x}=nt(m,e);return{lods:h,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(n.url,e,!!e.usePBR);else{const{loadGLTF:m}=await import("./loader-DBDB4fX6.js");r=await m(new _e(e.streamDataRequester),n.url,e,e.usePBR)}const c=r.model.meta?.ESRI_proxyEllipsoid,i=r.meta.isEsriSymbolResource&&c!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,dt(r,c));const o=!!e.usePBR,u=r.meta.isEsriSymbolResource?{usePBR:o,isSchematic:!1,treeRendering:i,mrrFactors:He}:{usePBR:o,isSchematic:!1,treeRendering:!1,mrrFactors:Ke},s={...e.materialParameters,treeRendering:i},{engineResources:a,referenceBoundingBox:l}=ut(r,u,s,e,n.specifiedLodIndex);return{lods:a,referenceBoundingBox:l,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function xe(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function ut(t,e,n,r,c){const i=t.model,o=new Array,u=new Map,s=new Map,a=i.lods.length,l=X();return i.lods.forEach((m,h)=>{const x=r.skipHighLods===!0&&(a>1&&h===0||a>3&&h===1)||r.skipHighLods===!1&&c!=null&&h!==c;if(x&&h!==0)return;const d=new Je(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(g=>{const T=x?new D({},r):ct(i,g,d,e,n,u,s,r),{geometry:w,vertexCount:p}=mt(g,T??new D({},r)),y=w.boundingInfo;y!=null&&h===0&&(N(l,y.bbMin),N(l,y.bbMax)),T!=null&&(d.stageResources.geometries.push(w),d.numberOfVertices+=p)}),x||o.push(d)}),{engineResources:o,referenceBoundingBox:l}}function ct(t,e,n,r,c,i,o,u){const s=t.materials.get(e.material);if(s==null)return null;const{normal:a,color:l,texCoord0:m,tangent:h}=e.attributes,x=e.material+(a?"_normal":"")+(l?"_color":"")+(m?"_texCoord0":"")+(h?"_tangent":""),d=e.attributes.texCoord0!=null,g=e.attributes.normal!=null,T=ft(s.alphaMode);if(!i.has(x)){if(d){const P=(f,v=!1)=>{if(f!=null&&!o.has(f)){const b=t.textures.get(f);if(b){const A=b.data;o.set(f,new se(G(A)?A.data:A,{...b.parameters,preMultiplyAlpha:!G(A)&&v,encoding:G(A)?A.encoding:void 0}))}}};P(s.colorTexture,T!==R.Opaque),P(s.normalTexture),P(s.occlusionTexture),P(s.emissiveTexture),P(s.metallicRoughnessTexture)}const p=1/J,y=s.color[0]**p,k=s.color[1]**p,_=s.color[2]**p,S=s.emissiveFactor[0]**p,M=s.emissiveFactor[1]**p,q=s.emissiveFactor[2]**p,L=s.colorTexture!=null&&d?o.get(s.colorTexture):null,O=Qe(s),I=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:Me;i.set(x,new D({...r,transparent:T===R.Blend,customDepthTest:We.Lequal,textureAlphaMode:T,textureAlphaCutoff:s.alphaCutoff,diffuse:[y,k,_],ambient:[y,k,_],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?z.None:z.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:g?fe.Attribute:fe.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:L?.id,colorMixMode:s.colorMixMode,normalTextureId:s.normalTexture!=null&&d?o.get(s.normalTexture).id:void 0,textureAlphaPremultiplied:L!=null&&!!L.parameters.preMultiplyAlpha,occlusionTextureId:s.occlusionTexture!=null&&d?o.get(s.occlusionTexture).id:void 0,emissiveTextureId:s.emissiveTexture!=null&&d?o.get(s.emissiveTexture).id:void 0,metallicRoughnessTextureId:s.metallicRoughnessTexture!=null&&d?o.get(s.metallicRoughnessTexture).id:void 0,emissiveFactor:[S,M,q],mrrFactors:O?Xe:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:O,colorTextureTransformMatrix:F(s.colorTextureTransform),normalTextureTransformMatrix:F(s.normalTextureTransform),scale:[I[0],I[1]],occlusionTextureTransformMatrix:F(s.occlusionTextureTransform),emissiveTextureTransformMatrix:F(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:F(s.metallicRoughnessTextureTransform),...c},u))}const w=i.get(x);if(n.stageResources.materials.push(w),d){const p=y=>{y!=null&&n.stageResources.textures.push(o.get(y))};p(s.colorTexture),p(s.normalTexture),p(s.occlusionTexture),p(s.emissiveTexture),p(s.metallicRoughnessTexture)}return w}function mt(t,e){const n=t.attributes.position.count,r=qe(t.indices||n,t.primitiveType),c=j(3*n),{typedBuffer:i,typedBufferStride:o}=t.attributes.position;Ue(c,i,t.transform,3,o);const u=[[E.POSITION,new C(c,r,3,!0)]];if(t.attributes.normal!=null){const a=j(3*n),{typedBuffer:l,typedBufferStride:m}=t.attributes.normal;we(U,t.transform),ke(a,l,U,3,m),Y(U)&&ie(a,a),u.push([E.NORMAL,new C(a,r,3,!0)])}if(t.attributes.tangent!=null){const a=j(4*n),{typedBuffer:l,typedBufferStride:m}=t.attributes.tangent;ve(U,t.transform),Le(a,l,U,4,m),Y(U)&&ie(a,a,4),u.push([E.TANGENT,new C(a,r,4,!0)])}if(t.attributes.texCoord0!=null){const a=j(2*n),{typedBuffer:l,typedBufferStride:m}=t.attributes.texCoord0;Ne(a,l,2,m),u.push([E.UV0,new C(a,r,2,!0)])}const s=t.attributes.color;if(s!=null){const a=new Uint8Array(4*n);s.elementCount===4?s instanceof oe?ue(a,s,1,255):(s instanceof Pe||s instanceof Ee)&&ue(a,s,1/255,255):(a.fill(255),s instanceof ae?le(a,s.typedBuffer,1,255,4,s.typedBufferStride):(t.attributes.color instanceof Ce||t.attributes.color instanceof Fe)&&le(a,s.typedBuffer,1/255,255,4,t.attributes.color.typedBufferStride)),u.push([E.COLOR,new C(a,r,4,!0)])}return{geometry:new ne(e,u),vertexCount:n}}const U=ee();function ft(t){switch(t){case"BLEND":return R.Blend;case"MASK":return R.Mask;case"OPAQUE":case null:case void 0:return R.Opaque}}function dt(t,e){for(let n=0;n<t.model.lods.length;++n){const r=t.model.lods[n];for(const c of r.parts){const i=c.attributes.normal;if(i==null)return;const o=c.attributes.position,u=o.count,s=$(),a=$(),l=$(),m=new Float32Array(4*u),h=new Float32Array(3*u),x=Ae(Re(),c.transform);let d=0,g=0;for(let T=0;T<u;T++){o.getVec(T,a),i.getVec(T,s),te(a,a,c.transform),Be(l,a,e.center),re(l,l,e.radius);const w=l[2],p=Se(l),y=Math.min(.45+.55*p*p,1)**J;re(l,l,e.radius),x!==null&&te(l,l,x),Ie(l,l),n+1!==t.model.lods.length&&t.model.lods.length>1&&Oe(l,l,s,w>-1?.2:Math.min(-4*w-3.8,1)),h[d]=l[0],h[d+1]=l[1],h[d+2]=l[2],d+=3,m[g]=y,m[g+1]=y,m[g+2]=y,m[g+3]=1,g+=4}c.attributes.normal=new ae(h),c.attributes.color=new oe(m)}}}const pt=Object.freeze(Object.defineProperty({__proto__:null,fetch:he,parseUrl:xe},Symbol.toStringTag,{value:"Module"}));export{he as Y,pt as o,F as s};
