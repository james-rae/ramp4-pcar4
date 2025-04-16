import{s as i,fe as W,aW as Q,ho as Z,aq as ee,bz as te,hR as B,n as E}from"./main-BxgY9rsH.js";import{e as H,r as A}from"./mat4f64-CSKppSlJ.js";import{D as N,L as R,C as u,E as x}from"./enums-Dk3osxpS.js";import{r as k}from"./Version-FQ_QE7bS.js";import{g as re,c as oe,i as ne,b as se,f as ae}from"./mat4-D41khPIZ.js";import{v as ie}from"./quat-B5_fAr9y.js";import{e as ue}from"./quatf64-aQ5IuZRd.js";import{u as K,F as le,w as fe,q as ce,A as de,V as pe,B as me,g as he,d as Te,i as O,c as P,x as we,L as ge,O as xe,E as be}from"./BufferView-CM7WOdMZ.js";import{n as ye,t as _e,o as Se,r as Ee}from"./resourceUtils-BEu_K8aa.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./vec32-BAamZCaj.js";import"./vec42-CKs01hkn.js";import"./vec2-DGVIkCvT.js";import"./basicInterfaces-CZwQPxTp.js";function S(o,e){const r=o.count;e||(e=new o.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=o.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:S},Symbol.toStringTag,{value:"Module"}));function Ne(o={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...o}}function Re(o,e={}){return{data:o,parameters:{wrap:{s:N.REPEAT,t:N.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}let $=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const r=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,r,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var b,G;(function(o){o.SCALAR="SCALAR",o.VEC2="VEC2",o.VEC3="VEC3",o.VEC4="VEC4",o.MAT2="MAT2",o.MAT3="MAT3",o.MAT4="MAT4"})(b||(b={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(G||(G={}));const z={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Oe={pbrMetallicRoughness:z,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ae={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},j=(o={})=>{const e={...z,...o.pbrMetallicRoughness},r=Ce({...Ae,...o.extras});return{...Oe,...o,pbrMetallicRoughness:e,extras:r}};function Ce(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:o.ESRI_externalColorMixMode="tint"}return o}const ve={magFilter:R.LINEAR,minFilter:R.LINEAR_MIPMAP_LINEAR,wrapS:N.REPEAT,wrapT:N.REPEAT},Ie=o=>({...ve,...o});function Me(o){let e,r;return o.replace(/^(.*\/)?([^/]*)$/,(t,n,s)=>(e=n||"",r=s||"","")),{dirPart:e,filePart:r}}const y={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class h{constructor(e,r,t,n){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Me(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(W(r)){const a=Q(r);if(a&&a.mediaType!=="model/gltf-binary")try{const c=JSON.parse(a.isBase64?atob(a.data):a.data);return new h(e,r,c)}catch{}const f=Z(r);if(h._isGLBData(f))return this._fromGLBData(e,r,f)}if(Pe.test(r)||t?.expectedType==="gltf"){const a=await e.loadJSON(r,t);return new h(e,r,a)}const n=await e.loadBinary(r,t);if(h._isGLBData(n))return this._fromGLBData(e,r,n);if($e.test(r)||t?.expectedType==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new h(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new $(e);return r.remainingBytes()>=4&&r.readUint32()===y.MAGIC}static async _fromGLBData(e,r,t){const n=await h._parseGLBData(t);return new h(e,r,n.json,n.binaryData)}static async _parseGLBData(e){const r=new $(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),n=r.readUint32(),s=r.readUint32();if(t!==y.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(n!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,f,c=0;for(;r.remainingBytes()>=8;){const d=r.readUint32(),p=r.readUint32();if(c===0){if(p!==y.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(d<0)throw new i("gltf-loader-error","No JSON data found.");a=await ye(r.readUint8Array(d))}else if(c===1){if(p!==y.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");f=r.readUint8Array(d)}else E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");c+=1}if(!a)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:f}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,r);if(n.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const n=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(n),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if(t?.bufferView==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[b.MAT2,b.MAT3,b.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const n=this.json.bufferViews[t.bufferView],s=await this.getBuffer(n.buffer,r),a=Ue[t.type],f=De[t.componentType],c=a*f,d=n.byteStride||c;return{raw:s.buffer,byteStride:d,byteOffset:s.byteOffset+(n.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:d===c,componentCount:a,componentByteSize:f,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return S(m(Te,t));case u.UNSIGNED_SHORT:return S(m(he,t));case u.UNSIGNED_INT:return S(m(me,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(O,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(O,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return m(P,t)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return m(K,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return Be(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return m(P,t);if(t.componentType===u.UNSIGNED_BYTE)return m(we,t);if(t.componentType===u.UNSIGNED_SHORT)return m(ge,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return m(O,t);if(t.componentType===u.UNSIGNED_BYTE)return m(xe,t);if(t.componentType===u.UNSIGNED_SHORT)return m(be,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const s=e.material!=null?j(this.json.materials[e.material]):j(),a=s.pbrMetallicRoughness,f=this.hasVertexColors(e),c=this.getTexture(a.baseColorTexture,r),d=this.getTexture(s.normalTexture,r),p=t?this.getTexture(s.occlusionTexture,r):void 0,l=t?this.getTexture(s.emissiveTexture,r):void 0,w=t?this.getTexture(a.metallicRoughnessTexture,r):void 0,T=e.material!=null?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:a.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await c,normalTexture:await d,name:s.name,id:T,occlusionTexture:await p,emissiveTexture:await l,emissiveFactor:s.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await w,hasVertexColors:f,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode,colorTextureTransform:a?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:s.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:s.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:s.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:s.extras.ESRI_receiveAmbientOcclusion,receiveShadows:s.extras.ESRI_receiveShadows}}return n}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,n=this.json.textures[t],s=Ie(n.sampler!=null?this.json.samplers[n.sampler]:{}),a=V(n),f=this.json.images[a],c=await this._loadTextureImageData(t,n,r);return ee(this._textureCache,t,()=>{const d=l=>l===33071||l===33648||l===10497,p=l=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${l}`)};return{data:c,wrapS:d(s.wrapS)?s.wrapS:p(s.wrapS),wrapT:d(s.wrapT)?s.wrapT:p(s.wrapT),minFilter:s.minFilter,name:f.name,id:t}})}getNodeTransform(e){if(e===void 0)return Le;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?r=oe(H(),t,n.matrix):n.translation||n.rotation||n.scale?(r=A(t),n.translation&&ne(r,r,n.translation),n.rotation&&(_[3]=ie(_,n.rotation),se(r,r,_[3],_)),n.scale&&ae(r,r,n.scale)):r=A(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return te(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=k.parse(this.json.asset.version,"glTF");Fe.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const n=this._textureLoaders.get(e);if(n)return n;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,r){const t=V(e),n=this.json.images[t];if(n.uri){if(n.uri.endsWith(".ktx2")){const c=await this._context.loadBinary(this._resolveUri(n.uri),r);return new _e(new Uint8Array(c))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(n.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(n.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const f=a.byteOffset+(s.byteOffset||0);return Se(new Uint8Array(a.buffer,f,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await B(Array.from(this._bufferLoaders.values())),r=await B(Array.from(this._textureLoaders.values()));return e.reduce((t,n)=>t+(n?.byteLength??0),0)+r.reduce((t,n)=>t+(n?Ee(n)?n.data.byteLength:n.width*n.height*4:0),0)}}const Le=re(H(),Math.PI/2),Fe=new k(2,0,"glTF"),_=ue(),Ue={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},De={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function Be(o){switch(o.componentType){case u.BYTE:return new pe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_BYTE:return new de(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.SHORT:return new ce(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_SHORT:return new fe(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.UNSIGNED_INT:return new le(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount);case u.FLOAT:return new K(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}}function m(o,e){return new o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function V(o){if(o.extensions?.KHR_texture_basisu!=null)return o.extensions.KHR_texture_basisu.source;if(o.source!==null)return o.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const Pe=/\.gltf$/i,$e=/\.glb$/i;let Ge=0;async function lt(o,e,r={},t=!0){const n=await h.load(o,e,r),s="gltf_"+Ge++,a={lods:[],materials:new Map,textures:new Map,meta:je(n)},f=!(!n.json.asset.extras||n.json.asset.extras.ESRI_type!=="symbolResource"),c=n.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,d=new Map;await Ve(n,async(l,w,T,C)=>{const v=d.get(T)??0;d.set(T,v+1);const g=l.mode!==void 0?l.mode:x.TRIANGLES,I=g===x.TRIANGLES||g===x.TRIANGLE_STRIP||g===x.TRIANGLE_FAN?g:null;if(I==null)return void E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+x[g]+"). Skipping primitive.");if(!n.hasPositions(l))return void E.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const q=n.getPositionData(l,r),Y=n.getMaterial(l,r,t),M=n.hasNormals(l)?n.getNormalData(l,r):null,L=n.hasTangents(l)?n.getTangentData(l,r):null,F=n.hasTextureCoordinates(l)?n.getTextureCoordinates(l,r):null,U=n.hasVertexColors(l)?n.getVertexColors(l,r):null,J=n.getIndexData(l,r),X={name:C,transform:A(w),attributes:{position:await q,normal:M?await M:null,texCoord0:F?await F:null,color:U?await U:null,tangent:L?await L:null},indices:await J,primitiveType:I,material:ke(a,await Y,s)};let D=null;a.meta?.ESRI_lod!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(D=a.meta.ESRI_lod.thresholds[T]),a.lods[T]=a.lods[T]||{parts:[],name:C,lodThreshold:D},a.lods[T].parts[v]=X});for(const l of a.lods)l.parts=l.parts.filter(w=>!!w);const p=await n.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:f,uri:n.uri,ESRI_webstyle:c},customMeta:{},size:p}}function je(o){const e=o.json;let r=null;return e.nodes.forEach(t=>{const n=t.extras;n!=null&&(n.ESRI_proxyEllipsoid||n.ESRI_lod)&&(r=n)}),r}async function Ve(o,e){const r=o.json,t=r.scenes[r.scene||0].nodes,n=t.length>1,s=[];for(const f of t){const c=r.nodes[f];s.push(a(f,0)),He(c)&&!n&&c.extensions.MSFT_lod.ids.forEach((d,p)=>a(d,p+1))}async function a(f,c){const d=r.nodes[f],p=o.getNodeTransform(f);if(d.weights!=null&&E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),d.mesh!=null){const l=r.meshes[d.mesh];for(const w of l.primitives)s.push(e(w,p,c,l.name))}for(const l of d.children||[])s.push(a(l,c))}await Promise.all(s)}function He(o){return o.extensions?.MSFT_lod&&Array.isArray(o.extensions.MSFT_lod.ids)}function ke(o,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s?.name?"_"+s.name:""}`;if(s&&!o.textures.has(a)){const f=Re(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:Ke.has(s.minFilter),noUnpackFlip:!0});o.textures.set(a,f)}return a},n=`${r}_mat_${e.id}_${e.name}`;if(!o.materials.has(n)){const s=Ne({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});o.materials.set(n,s)}return n}const Ke=new Set([R.LINEAR_MIPMAP_LINEAR,R.LINEAR_MIPMAP_NEAREST]);export{lt as loadGLTF};
