import{s as i,fY as Q,aR as W,gH as Z,ax as ee,bF as te,ea as B,n as y}from"./main-DZMdXZ8-.js";import{e as P,r as O}from"./mat4f64-BaJwL7tQ.js";import{D as _,L as S,C as u,E as x}from"./enums-DBi1-Mm2.js";import{r as G}from"./Version-B5Et8XFV.js";import{g as re,c as oe,i as se,b as ae,f as ne}from"./mat4-DUR6ShZF.js";import{v as ie}from"./quat-DvsjDpgQ.js";import{e as ue}from"./quatf64-C16JxGFv.js";import{u as j,F as le,w as ce,q as fe,A as de,V as pe,B as me,g as he,d as Te,i as A,c as H,x as we,L as ge,O as xe,E as be}from"./BufferView-CDntOMZC.js";import{r as ye,t as _e,o as Se,n as Ee}from"./resourceUtils-B6jFXDsJ.js";function E(o,e){const r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:E},Symbol.toStringTag,{value:"Module"}));function Ne(o={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,colorTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,metallicRoughnessTexture:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...o}}function Re(o,e={}){return{data:o,parameters:{wrap:{s:_.REPEAT,t:_.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}let V=class{constructor(o){this._data=o,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const o=this._offset4;return this._offset4+=1,this._dataUint32[o]}readUint8Array(o){const e=4*this._offset4;return this._offset4+=o/4,new Uint8Array(this._data,e,o)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var b,k;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(b||(b={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(k||(k={}));const Y={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Oe={pbrMetallicRoughness:Y,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ae={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},K=(o={})=>{const e={...Y,...o.pbrMetallicRoughness},r=Ce({...Ae,...o.extras});return{...Oe,...o,pbrMetallicRoughness:e,extras:r}};function Ce(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:o.ESRI_externalColorMixMode="tint"}return o}const ve={magFilter:S.LINEAR,minFilter:S.LINEAR_MIPMAP_LINEAR,wrapS:_.REPEAT,wrapT:_.REPEAT},Ie=o=>({...ve,...o});function Me(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,s,a)=>(e=s||"",r=a||"","")),{dirPart:e,filePart:r}}const N={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class h{constructor(e,r,t,s){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=s,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Me(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(Q(r)){const n=W(r);if(n&&n.mediaType!=="model/gltf-binary")try{const f=JSON.parse(n.isBase64?atob(n.data):n.data);return new h(e,r,f)}catch{}const c=Z(r);if(h._isGLBData(c))return this._fromGLBData(e,r,c)}if(Pe.test(r)||t?.expectedType==="gltf"){const n=await e.loadJSON(r,t);return new h(e,r,n)}const s=await e.loadBinary(r,t);if(h._isGLBData(s))return this._fromGLBData(e,r,s);if(Ge.test(r)||t?.expectedType==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");const a=await e.loadJSON(r,t);return new h(e,r,a)}static _isGLBData(e){if(e==null)return!1;const r=new V(e);return r.remainingBytes()>=4&&r.readUint32()===N.MAGIC}static async _fromGLBData(e,r,t){const s=await h._parseGLBData(t);return new h(e,r,s.json,s.binaryData)}static async _parseGLBData(e){const r=new V(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),s=r.readUint32(),a=r.readUint32();if(t!==N.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<a)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(s!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let n,c,f=0;for(;r.remainingBytes()>=8;){const d=r.readUint32(),p=r.readUint32();if(f===0){if(p!==N.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(d<0)throw new i("gltf-loader-error","No JSON data found.");n=await ye(r.readUint8Array(d))}else if(f===1){if(p!==N.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");c=r.readUint8Array(d)}else y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!n)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:n,binaryData:c}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}const s=await this._getBufferLoader(e,r);if(s.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return s}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const s=this.json.buffers[e].uri,a=this._context.loadBinary(this._resolveUri(s),r).then(n=>new Uint8Array(n));return this._bufferLoaders.set(e,a),a}async getAccessor(e,r){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if(t?.bufferView==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[b.MAT2,b.MAT3,b.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const s=this.json.bufferViews[t.bufferView],a=await this.getBuffer(s.buffer,r),n=Ue[t.type],c=De[t.componentType],f=n*c,d=s.byteStride||f;return{raw:a.buffer,byteStride:d,byteOffset:a.byteOffset+(s.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:d===f,componentCount:n,componentByteSize:c,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return E(m(Te,t));case u.UNSIGNED_SHORT:return E(m(he,t));case u.UNSIGNED_INT:return E(m(me,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(A,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(A,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return m(H,t)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return m(j,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return Be(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return m(H,t);if(t.componentType===u.UNSIGNED_BYTE)return m(we,t);if(t.componentType===u.UNSIGNED_SHORT)return m(ge,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return m(A,t);if(t.componentType===u.UNSIGNED_BYTE)return m(xe,t);if(t.componentType===u.UNSIGNED_SHORT)return m(be,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){let s=e.material?this._materialCache.get(e.material):void 0;if(!s){const a=e.material!=null?K(this.json.materials[e.material]):K(),n=a.pbrMetallicRoughness,c=this.hasVertexColors(e),f=this.getTexture(n.baseColorTexture,r),d=this.getTexture(a.normalTexture,r),p=t?this.getTexture(a.occlusionTexture,r):void 0,l=t?this.getTexture(a.emissiveTexture,r):void 0,w=t?this.getTexture(n.metallicRoughnessTexture,r):void 0,T=e.material!=null?e.material:-1;s={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,color:n.baseColorFactor,doubleSided:!!a.doubleSided,colorTexture:await f,normalTexture:await d,name:a.name,id:T,occlusionTexture:await p,emissiveTexture:await l,emissiveFactor:a.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:await w,hasVertexColors:c,ESRI_externalColorMixMode:a.extras.ESRI_externalColorMixMode,colorTextureTransform:n?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:a.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:a.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:a.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:n?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:a.extras.ESRI_receiveAmbientOcclusion,receiveShadows:a.extras.ESRI_receiveShadows}}return s}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,s=this.json.textures[t],a=Ie(s.sampler!=null?this.json.samplers[s.sampler]:{}),n=$(s),c=this.json.images[n],f=await this._loadTextureImageData(t,s,r);return ee(this._textureCache,t,()=>{const d=l=>l===33071||l===33648||l===10497,p=l=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${l}`)};return{data:f,wrapS:d(a.wrapS)?a.wrapS:p(a.wrapS),wrapT:d(a.wrapT)?a.wrapT:p(a.wrapT),minFilter:a.minFilter,name:c.name,id:t}})}getNodeTransform(e){if(e===void 0)return Le;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),s=this.json.nodes[e];s.matrix?r=oe(P(),t,s.matrix):s.translation||s.rotation||s.scale?(r=O(t),s.translation&&se(r,r,s.translation),s.rotation&&(R[3]=ie(R,s.rotation),ae(r,r,R[3],R)),s.scale&&ne(r,r,s.scale)):r=O(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return te(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=G.parse(this.json.asset.version,"glTF");Fe.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const s=this._textureLoaders.get(e);if(s)return s;const a=this._createTextureLoader(r,t);return this._textureLoaders.set(e,a),a}async _createTextureLoader(e,r){const t=$(e),s=this.json.images[t];if(s.uri){if(s.uri.endsWith(".ktx2")){const f=await this._context.loadBinary(this._resolveUri(s.uri),r);return new _e(new Uint8Array(f))}return this._context.loadImage(this._resolveUri(s.uri),r)}if(s.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(s.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");const a=this.json.bufferViews[s.bufferView],n=await this.getBuffer(a.buffer,r);if(a.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const c=n.byteOffset+(a.byteOffset||0);return Se(new Uint8Array(n.buffer,c,a.byteLength),s.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await B(Array.from(this._bufferLoaders.values())),r=await B(Array.from(this._textureLoaders.values()));return e.reduce((t,s)=>t+(s?.byteLength??0),0)+r.reduce((t,s)=>t+(s?Ee(s)?s.data.byteLength:s.width*s.height*4:0),0)}}const Le=re(P(),Math.PI/2),Fe=new G(2,0,"glTF"),R=ue(),Ue={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},De={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function Be(o){switch(o.componentType){case u.BYTE:return new pe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_BYTE:return new de(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.SHORT:return new fe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_SHORT:return new ce(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_INT:return new le(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.FLOAT:return new j(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}function m(o,e){return new o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function $(o){if(o.extensions?.KHR_texture_basisu!=null)return o.extensions.KHR_texture_basisu.source;if(o.source!==null)return o.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const Pe=/\.gltf$/i,Ge=/\.glb$/i;let je=0;async function He(o,e,r={},t=!0){const s=await h.load(o,e,r),a="gltf_"+je++,n={lods:[],materials:new Map,textures:new Map,meta:Ve(s)},c=!(!s.json.asset.extras||s.json.asset.extras.ESRI_type!=="symbolResource"),f=s.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,d=new Map;await ke(s,async(l,w,T,C)=>{const v=d.get(T)??0;d.set(T,v+1);const g=l.mode!==void 0?l.mode:x.TRIANGLES,I=g===x.TRIANGLES||g===x.TRIANGLE_STRIP||g===x.TRIANGLE_FAN?g:null;if(I==null)return void y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+x[g]+"). Skipping primitive.");if(!s.hasPositions(l))return void y.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const z=s.getPositionData(l,r),J=s.getMaterial(l,r,t),M=s.hasNormals(l)?s.getNormalData(l,r):null,L=s.hasTangents(l)?s.getTangentData(l,r):null,F=s.hasTextureCoordinates(l)?s.getTextureCoordinates(l,r):null,U=s.hasVertexColors(l)?s.getVertexColors(l,r):null,q=s.getIndexData(l,r),X={name:C,transform:O(w),attributes:{position:await z,normal:M?await M:null,texCoord0:F?await F:null,color:U?await U:null,tangent:L?await L:null},indices:await q,primitiveType:I,material:Ke(n,await J,a)};let D=null;n.meta?.ESRI_lod!=null&&n.meta.ESRI_lod.metric==="screenSpaceRadius"&&(D=n.meta.ESRI_lod.thresholds[T]),n.lods[T]=n.lods[T]||{parts:[],name:C,lodThreshold:D},n.lods[T].parts[v]=X});for(const l of n.lods)l.parts=l.parts.filter(w=>!!w);const p=await s.getLoadedBuffersSize();return{model:n,meta:{isEsriSymbolResource:c,uri:s.uri,ESRI_webstyle:f},customMeta:{},cachedMemory:p}}function Ve(o){const e=o.json;let r=null;return e.nodes.forEach(t=>{const s=t.extras;s!=null&&(s.ESRI_proxyEllipsoid||s.ESRI_lod)&&(r=s)}),r}async function ke(o,e){const r=o.json,t=r.scenes[r.scene||0].nodes,s=t.length>1,a=[];for(const c of t){const f=r.nodes[c];a.push(n(c,0)),Ye(f)&&!s&&f.extensions.MSFT_lod.ids.forEach((d,p)=>n(d,p+1))}async function n(c,f){const d=r.nodes[c],p=o.getNodeTransform(c);if(d.weights!=null&&y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),d.mesh!=null){const l=r.meshes[d.mesh];for(const w of l.primitives)a.push(e(w,p,f,l.name))}for(const l of d.children||[])a.push(n(l,f))}await Promise.all(a)}function Ye(o){return o.extensions?.MSFT_lod&&Array.isArray(o.extensions.MSFT_lod.ids)}function Ke(o,e,r){const t=a=>{const n=`${r}_tex_${a&&a.id}${a?.name?"_"+a.name:""}`;if(a&&!o.textures.has(n)){const c=Re(a.data,{wrap:{s:a.wrapS,t:a.wrapT},mipmap:$e.has(a.minFilter),noUnpackFlip:!0});o.textures.set(n,c)}return n},s=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(s)){const a=Ne({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,colorTexture:e.colorTexture?t(e.colorTexture):void 0,normalTexture:e.normalTexture?t(e.normalTexture):void 0,occlusionTexture:e.occlusionTexture?t(e.occlusionTexture):void 0,emissiveTexture:e.emissiveTexture?t(e.emissiveTexture):void 0,metallicRoughnessTexture:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});o.materials.set(s,a)}return s}const $e=new Set([S.LINEAR_MIPMAP_LINEAR,S.LINEAR_MIPMAP_NEAREST]);export{He as loadGLTF};
