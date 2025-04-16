import { cx as y, mH as l$4, mI as I, mJ as b, lX as tt, dN as s$1, mK as nt, U, iL as _$1, A as a$1, s as s$2, mL as g, Y as ot, cu as r$2, cG as c$3, mM as i$2, mN as b$1, gb as f$3, dD as _, mO as r$4, mP as g$1, G as n$5, mQ as u$3 } from './main-CGBWc59Z.js';
import { e as e$3, r as r$3 } from './mat4f64-UGgSIQpQ.js';
import { D, L, C, E as E$2 } from './enums-CwcDCDam.js';
import { v } from './quat-DLeKk01g.js';
import { e as e$4 } from './quatf64-C3zJJInI.js';
import { c as c$2, u as u$2, F, w, q as q$1, A as A$1, V, B, g as g$2, d as d$1, i as i$3, x, L as L$1, O, E as E$1 } from './BufferView-Bzzf7vi9.js';
import { n as n$4, t as t$4, o as o$3, r as r$5 } from './resourceUtils-CiKqQ4GB.js';
import { l as l$5, i as i$4 } from './Indices-rp446347.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function o$2(e,t){n$3(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride);}function n$3(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if(y(n)||l$4(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=I(n);if(b(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u;}function l$3(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n;}Object.freeze(Object.defineProperty({__proto__:null,fill:l$3,normalizeIntegerBuffer:n$3,normalizeIntegerBufferView:o$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e$2(e,f){t$3(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride);}function t$3(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o;}function f$2(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u;}Object.freeze(Object.defineProperty({__proto__:null,copy:t$3,copyView:e$2,fill:f$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e$1(e,f){t$2(e.typedBuffer,f,e.typedBufferStride);}function t$2(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r;}function f$1(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c;}Object.freeze(Object.defineProperty({__proto__:null,copy:t$2,copyView:e$1,fill:f$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let n$2 = class n{constructor(r){this._streamDataRequester=r;}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return tt(r)?(s$1(e),nt(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,o,i){if(null==this._streamDataRequester)return (await U(o,{responseType:m$1[a]})).data;const n=await _$1(this._streamDataRequester.request(o,a,i));if(!0===n.ok)return n.value;throw a$1(n.error),new s$2("",`Request for resource failed: ${n.error}`)}};const m$1={image:"image",binary:"array-buffer",json:"json","image+type":void 0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function r$1(e={}){return {color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l$2(r,l={}){return {data:r,parameters:{wrap:{s:D.REPEAT,t:D.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}Object.freeze(Object.defineProperty({__proto__:null,makeDense:e},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t$1 = class t{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4));}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const s=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,s,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4";}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";}(E||(E={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},l$1={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},i$1=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...l$1,...e.extras});return {...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:o.ESRI_externalColorMixMode="tint";}return o}const c$1={magFilter:L.LINEAR,minFilter:L.LINEAR_MIPMAP_LINEAR,wrapS:D.REPEAT,wrapT:D.REPEAT},n$1=e=>({...c$1,...e});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const k={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Y{constructor(t,r$1,o,n){if(this._context=t,this.uri=r$1,this.json=o,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=r(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new s$2("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new s$2("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new s$2("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents();}static async load(t,r,o){if(tt(r)){const e=ot(r);if(e&&"model/gltf-binary"!==e.mediaType)try{const o=JSON.parse(e.isBase64?atob(e.data):e.data);return new Y(t,r,o)}catch{}const o=nt(r);if(Y._isGLBData(o))return this._fromGLBData(t,r,o)}if(ee.test(r)||"gltf"===o?.expectedType){const e=await t.loadJSON(r,o);return new Y(t,r,e)}const i=await t.loadBinary(r,o);if(Y._isGLBData(i))return this._fromGLBData(t,r,i);if(te.test(r)||"glb"===o?.expectedType)throw new s$2("gltf-loader-invalid-glb","This is not a valid glb file.");const u=await t.loadJSON(r,o);return new Y(t,r,u)}static _isGLBData(e){if(null==e)return !1;const t=new t$1(e);return t.remainingBytes()>=4&&t.readUint32()===k.MAGIC}static async _fromGLBData(e,t,r){const o=await Y._parseGLBData(r);return new Y(e,t,o.json,o.binaryData)}static async _parseGLBData(r){const o=new t$1(r);if(o.remainingBytes()<12)throw new s$2("gltf-loader-error","glb binary data is insufficiently large.");const n=o.readUint32(),s=o.readUint32(),a=o.readUint32();if(n!==k.MAGIC)throw new s$2("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(r.byteLength<a)throw new s$2("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==s)throw new s$2("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let i,u,f=0;for(;o.remainingBytes()>=8;){const r=o.readUint32(),n=o.readUint32();if(0===f){if(n!==k.CHUNK_TYPE_JSON)throw new s$2("gltf-loader-error","First glb chunk must be JSON.");if(r<0)throw new s$2("gltf-loader-error","No JSON data found.");i=await n$4(o.readUint8Array(r));}else if(1===f){if(n!==k.CHUNK_TYPE_BIN)throw new s$2("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");u=o.readUint8Array(r);}else n$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1;}if(!i)throw new s$2("gltf-loader-error","No glb JSON chunk detected.");return {json:i,binaryData:u}}async getBuffer(t,r){const o=this.json.buffers[t];if(null==o.uri){if(null==this._glbBuffer)throw new s$2("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,r);if(n.byteLength!==o.byteLength)throw new s$2("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(t,r){if(!this.json.accessors)throw new s$2("gltf-loader-unsupported-feature","Accessors missing.");const o=this.json.accessors[t];if(null==o?.bufferView)throw new s$2("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(o.type in[A.MAT2,A.MAT3,A.MAT4])throw new s$2("gltf-loader-unsupported-feature",`AttributeType ${o.type} is not supported`);const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,r),a=X[o.type],i=$[o.componentType],u=a*i,f=n.byteStride||u;return {raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===u,componentCount:a,componentByteSize:i,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e$1,t){if(null==e$1.indices)return;const r=await this.getAccessor(e$1.indices,t);if(r.isDenselyPacked)switch(r.componentType){case C.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case C.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case C.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case C.UNSIGNED_BYTE:return e(Q(d$1,r));case C.UNSIGNED_SHORT:return e(Q(g$2,r));case C.UNSIGNED_INT:return e(Q(B,r))}}async getPositionData(t,r){if(null==t.attributes.POSITION)throw new s$2("gltf-loader-unsupported-feature","No POSITION vertex data found.");const o=await this.getAccessor(t.attributes.POSITION,r);if(o.componentType!==C.FLOAT)throw new s$2("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+C[o.componentType]);if(3!==o.componentCount)throw new s$2("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return Q(i$3,o)}async getNormalData(t,r){if(null==t.attributes.NORMAL)throw new s$2("gltf-loader-error","No NORMAL vertex data found.");const o=await this.getAccessor(t.attributes.NORMAL,r);if(o.componentType!==C.FLOAT)throw new s$2("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+C[o.componentType]);if(3!==o.componentCount)throw new s$2("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return Q(i$3,o)}async getTangentData(t,r){if(null==t.attributes.TANGENT)throw new s$2("gltf-loader-error","No TANGENT vertex data found.");const o=await this.getAccessor(t.attributes.TANGENT,r);if(o.componentType!==C.FLOAT)throw new s$2("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+C[o.componentType]);if(4!==o.componentCount)throw new s$2("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed());return new c$2(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(t,r){if(null==t.attributes.TEXCOORD_0)throw new s$2("gltf-loader-error","No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==o.componentCount)throw new s$2("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed());if(o.componentType===C.FLOAT)return Q(u$2,o);if(!o.normalized)throw new s$2("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return W(o)}async getVertexColors(t,r){if(null==t.attributes.COLOR_0)throw new s$2("gltf-loader-error","No COLOR_0 vertex data found.");const o=await this.getAccessor(t.attributes.COLOR_0,r);if(4!==o.componentCount&&3!==o.componentCount)throw new s$2("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed());if(4===o.componentCount){if(o.componentType===C.FLOAT)return Q(c$2,o);if(o.componentType===C.UNSIGNED_BYTE)return Q(x,o);if(o.componentType===C.UNSIGNED_SHORT)return Q(L$1,o)}else if(3===o.componentCount){if(o.componentType===C.FLOAT)return Q(i$3,o);if(o.componentType===C.UNSIGNED_BYTE)return Q(O,o);if(o.componentType===C.UNSIGNED_SHORT)return Q(E$1,o)}throw new s$2("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+C[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?i$1(this.json.materials[e.material]):i$1(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),f=r?this.getTexture(n.occlusionTexture,t):void 0,l=r?this.getTexture(n.emissiveTexture,t):void 0,d=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,c=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:c,occlusionTexture:await f,emissiveTexture:await l,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:n.extras.ESRI_receiveAmbientOcclusion,receiveShadows:n.extras.ESRI_receiveShadows};}return o}async getTexture(t,o){if(!t)return;if(0!==(t.texCoord||0))throw new s$2("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const n=t.index,s=this.json.textures[n],a=n$1(null!=s.sampler?this.json.samplers[s.sampler]:{}),i=Z(s),u=this.json.images[i],f=await this._loadTextureImageData(n,s,o);return r$2(this._textureCache,n,(()=>{const t=e=>33071===e||33648===e||10497===e,r=t=>{throw new s$2("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return {data:f,wrapS:t(a.wrapS)?a.wrapS:r(a.wrapS),wrapT:t(a.wrapT)?a.wrapT:r(a.wrapT),minFilter:a.minFilter,name:u.name,id:n}}))}getNodeTransform(e){if(void 0===e)return q;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=c$3(e$3(),r,o.matrix):o.translation||o.rotation||o.scale?(t=r$3(r),o.translation&&i$2(t,t,o.translation),o.rotation&&(z[3]=v(z,o.rotation),b$1(t,t,z[3],z)),o.scale&&f$3(t,t,o.scale)):t=r$3(r),this._nodeTransformCache.set(e,t);}return t}_resolveUri(e){return _(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=r$4.parse(this.json.asset.version,"glTF");J.validate(e);}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new s$2("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t);}));}));}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}async _createTextureLoader(t,r){const o=Z(t),n=this.json.images[o];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),r);return new t$4(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(null==n.bufferView)throw new s$2("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new s$2("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(null!=s.byteStride)throw new s$2("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return o$3(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await g$1(Array.from(this._bufferLoaders.values())),t=await g$1(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?r$5(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const q=g(e$3(),Math.PI/2),J=new r$4(2,0,"glTF"),z=e$4(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$={[C.BYTE]:1,[C.UNSIGNED_BYTE]:1,[C.SHORT]:2,[C.UNSIGNED_SHORT]:2,[C.HALF_FLOAT]:2,[C.FLOAT]:4,[C.INT]:4,[C.UNSIGNED_INT]:4};function W(e){switch(e.componentType){case C.BYTE:return new V(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_BYTE:return new A$1(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.SHORT:return new q$1(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_SHORT:return new w(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.UNSIGNED_INT:return new F(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case C.FLOAT:return new u$2(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}function Q(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}function Z(t){if(null!=t.extensions?.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new s$2("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const ee=/\.gltf$/i,te=/\.glb$/i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let n=0;async function l(o,r,a={},l=!0){const m=await Y.load(o,r,a),p="gltf_"+n++,T={lods:[],materials:new Map,textures:new Map,meta:u$1(m)},f=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),x=m.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,g=new Map;await c(m,(async(o,r,s,n)=>{const u=g.get(s)??0;g.set(s,u+1);const c=void 0!==o.mode?o.mode:E$2.TRIANGLES,f=c===E$2.TRIANGLES||c===E$2.TRIANGLE_STRIP||c===E$2.TRIANGLE_FAN?c:null;if(null==f)return void n$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+E$2[c]+"). Skipping primitive.");if(!m.hasPositions(o))return void n$5.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const x=m.getPositionData(o,a),h=m.getMaterial(o,a,l),w=m.hasNormals(o)?m.getNormalData(o,a):null,v=m.hasTangents(o)?m.getTangentData(o,a):null,S=m.hasTextureCoordinates(o)?m.getTextureCoordinates(o,a):null,R=m.hasVertexColors(o)?m.getVertexColors(o,a):null,_=m.getIndexData(o,a),E={name:n,transform:r$3(r),attributes:{position:await x,normal:w?await w:null,texCoord0:S?await S:null,color:R?await R:null,tangent:v?await v:null},indices:await _,primitiveType:f,material:d(T,await h,p)};let I=null;null!=T.meta?.ESRI_lod&&"screenSpaceRadius"===T.meta.ESRI_lod.metric&&(I=T.meta.ESRI_lod.thresholds[s]),T.lods[s]=T.lods[s]||{parts:[],name:n,lodThreshold:I},T.lods[s].parts[u]=E;}));for(const e of T.lods)e.parts=e.parts.filter((e=>!!e));const h=await m.getLoadedBuffersSize();return {model:T,meta:{isEsriSymbolResource:f,uri:m.uri,ESRI_webstyle:x},customMeta:{},size:h}}function u$1(e){const t=e.json;let o=null;return t.nodes.forEach((e=>{const t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(o=t);})),o}async function c(t,o){const r=t.json,s=r.scenes[r.scene||0].nodes,a=s.length>1,i=[];for(const e of s){const t=r.nodes[e];if(i.push(n(e,0)),m(t)&&!a){t.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)));}}async function n(s,a){const l=r.nodes[s],u=t.getNodeTransform(s);if(null!=l.weights&&n$5.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=l.mesh){const e=r.meshes[l.mesh];for(const t of e.primitives)i.push(o(t,u,a,e.name));}for(const e of l.children||[])i.push(n(e,a));}await Promise.all(i);}function m(e){return e.extensions?.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,t,s){const a=t=>{const o=`${s}_tex_${t&&t.id}${t?.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const s=l$2(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:p.has(t.minFilter),noUnpackFlip:!0});e.textures.set(o,s);}return o},i=`${s}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=r$1({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?a(t.colorTexture):void 0,textureNormal:t.normalTexture?a(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?a(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?a(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?a(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(i,r);}return i}const p=new Set([L.LINEAR_MIPMAP_LINEAR,L.LINEAR_MIPMAP_NEAREST]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function o$1(r,t){switch(t){case E$2.TRIANGLES:return f(r);case E$2.TRIANGLE_STRIP:return u(r);case E$2.TRIANGLE_FAN:return i(r)}}function f(e){return "number"==typeof e?l$5(e):u$3(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return [];const n=t-2,o=i$4(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2);}else {let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2]);}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t;}return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=2.1;

export { f$1 as a, o$2 as b, l$3 as c, e$2 as d, e$1 as e, f$2 as f, o as g, n$3 as h, t$3 as i, l, n$2 as n, o$1 as o, t$2 as t };
