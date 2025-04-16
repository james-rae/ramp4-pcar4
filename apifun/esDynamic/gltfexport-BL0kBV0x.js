import{aI as M,s as j,T as P,fY as ne,aR as ie,gl as ae,cI as G,eZ as J,d1 as oe,ax as ce,ch as he,n as fe,a8 as ue}from"./main-DeRV24Di.js";import{N as le,T as de}from"./quat-ChoDadUo.js";import{r as me,t as _e,e as pe}from"./quatf64-C16JxGFv.js";import{o as O,c as K,_ as ge,A as we,H as W}from"./vec32-BiJj_MLt.js";import{m as Ee}from"./MeshComponent-5n8euUek.js";import{B as Ae}from"./vertexSpaceConversion-C5b3gcwx.js";import{C as m,D as T}from"./enums-DBi1-Mm2.js";import{n as v}from"./resourceUtils-Rq_PaSG_.js";var B;(function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"})(B||(B={}));let S=class N{constructor(e,s){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=N.HEADER_SIZE,this._length+=N.CHUNK_HEADER_SIZE;const r=be(e);if(this._length+=X(r.byteLength,4),s&&(this._length+=N.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const n=this._writeChunk(r,12,B.JSON,32);s&&this._writeChunk(s,n,B.BIN)}_writeHeader(){this._outView.setUint32(0,N.MAGIC,!0),this._outView.setUint32(4,N.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,s,r,n=0){const i=X(e.byteLength,4);for(this._outView.setUint32(s,i,!0),this._outView.setUint32(s+=4,r,!0),Te(this._outView.buffer,e,s+=4,0,e.byteLength),s+=e.byteLength;s%4;)n&&this._outView.setUint8(s,n),s++;return s}};function Te(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}function be(t){return new TextEncoder().encode(t).buffer}function X(t,e){return e*Math.ceil(t/e)}S.HEADER_SIZE=12,S.CHUNK_HEADER_SIZE=8,S.MAGIC=1179937895,S.VERSION=2;var y,b,R,p,Z,C,$;(function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"})(y||(y={})),function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(b||(b={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(p||(p={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(Z||(Z={})),function(t){t.OPAQUE="OPAQUE",t.MASK="MASK",t.BLEND="BLEND"}(C||(C={})),function(t){t[t.NoColor=0]="NoColor",t[t.FaceColor=1]="FaceColor",t[t.VertexColor=2]="VertexColor"}($||($={}));let ye=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const i=this._getElementSize();i>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=i),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case m.BYTE:return new Int8Array(t,e);case m.FLOAT:return new Float32Array(t,e);case m.SHORT:return new Int16Array(t,e);case m.UNSIGNED_BYTE:return new Uint8Array(t,e);case m.UNSIGNED_INT:return new Uint32Array(t,e);case m.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case m.UNSIGNED_BYTE:case m.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case m.BYTE:case m.UNSIGNED_BYTE:return 1;case m.SHORT:case m.UNSIGNED_SHORT:return 2;case m.UNSIGNED_INT:case m.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case p.SCALAR:return 1;case p.VEC2:return 2;case p.VEC3:return 3;case p.VEC4:case p.MAT2:return 4;case p.MAT3:return 9;case p.MAT4:return 16}}},Q=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new ye(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function Re(t,e){if(t.components)for(const s of t.components)s.faces&&s.shading==="smooth"&&xe(s.faces,e)}function xe(t,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const{position:s,normal:r}=e,n=t.length/3;for(let i=0;i<n;++i){const o=3*t[3*i],a=3*t[3*i+1],c=3*t[3*i+2],l=O(Ie,s[o],s[o+1],s[o+2]),f=O(Ne,s[a],s[a+1],s[a+2]),_=O(Me,s[c],s[c+1],s[c+2]),d=K(f,f,l),E=K(_,_,l),h=ge(d,d,E);r[o]+=h[0],r[o+1]+=h[1],r[o+2]+=h[2],r[a]+=h[0],r[a+1]+=h[1],r[a+2]+=h[2],r[c]+=h[0],r[c+1]+=h[1],r[c+2]+=h[2]}for(let i=0;i<r.length;i+=3)O(x,r[i],r[i+1],r[i+2]),we(x,x),r[i]=x[0],r[i+1]=x[1],r[i+2]=x[2]}const Ie=M(),Ne=M(),Me=M(),x=M();function Se(t){const e=ee(t);return e!=null?e.toDataURL():""}async function q(t,e){const s=ee(t);if(s==null)throw new j("imageToArrayBuffer","Unsupported image type");const r=Le(t),n=await new Promise(o=>s.toBlob(o,r));if(P(e),!n)throw new j("imageToArrayBuffer","Failed to encode image");const i=await n.arrayBuffer();return P(e),{data:i,type:r}}function Le(t){if(!(t instanceof HTMLImageElement))return"image/png";const e=t.src;if(ne(e)){const s=ie(e);return s?.mediaType==="image/jpeg"?s.mediaType:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function ee(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");return t instanceof HTMLImageElement?s.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&s.putImageData(t,0,0),e}function Oe(t){const e=[],s=new Uint8Array(t);for(let r=0;r<s.length;r++)e.push(String.fromCharCode(s[r]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function Be(t){if(t.byteLength<8)return!1;const e=new Uint8Array(t);return e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71&&e[4]===13&&e[5]===10&&e[6]===26&&e[7]===10}const H=()=>fe.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Ce{constructor(e,s){this.options=s,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:s.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const s=this.gltf.extras,r=s.output.buffer===y.GLB||s.output.image===b.GLB;r&&(s.binChunkBuffer=new Q(this.gltf)),e.forEachScene(n=>{this._addScene(n)}),r&&s.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const s={};e.name&&(s.name=e.name),e.forEachNode(r=>{s.nodes||(s.nodes=[]),s.nodes.push(...this._addNodes(r))}),this.gltf.scenes.push(s)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const s={};e.name&&(s.name=e.name);const r=e.translation;W(r,ae)||(s.translation=G(r));const n=e.rotation;le(n,me)||(s.rotation=_e(n));const i=e.scale;W(i,J)||(s.scale=G(i));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(s),e.mesh&&e.mesh.vertexAttributes.position){const a=this._createMeshes(e.mesh),c=[o];if(a.length===1)this._addMesh(s,a[0]);else for(const l of a){const f={};this._addMesh(f,l),c.push(this.gltf.nodes.length),this.gltf.nodes.push(f)}return c}return e.forEachNode(a=>{s.children||(s.children=[]),s.children.push(...this._addNodes(a))}),[o]}_addMesh(e,s){this.gltf.meshes??=[];const r=this.gltf.meshes.length;this.gltf.meshes.push(s),e.mesh=r}_createMeshes(e){const s=this.gltf.extras,r=s.output.buffer===y.GLB;let n;n=r?s.binChunkBuffer:new Q(this.gltf);const i=this.options.origin,o=e.vertexSpace.clone();o.origin=[i.x,i.y,i.z??0];const a=Ae({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!a)return[];Re(e,a),Ve(a);const{position:c,normal:l,tangent:f}=a,{uv:_,color:d}=e.vertexAttributes,E=n.addBufferView(m.FLOAT,p.VEC3,R.ARRAY_BUFFER);let h,A,g,w;l&&(h=n.addBufferView(m.FLOAT,p.VEC3,R.ARRAY_BUFFER)),_&&(A=n.addBufferView(m.FLOAT,p.VEC2,R.ARRAY_BUFFER)),f&&(g=n.addBufferView(m.FLOAT,p.VEC4,R.ARRAY_BUFFER)),d&&(w=n.addBufferView(m.FLOAT,p.VEC4,R.ARRAY_BUFFER)),E.startAccessor("POSITION"),h&&h.startAccessor("NORMAL"),A&&A.startAccessor("TEXCOORD_0"),g&&g.startAccessor("TANGENT"),w&&w.startAccessor("COLOR_0");const se=a.position.length/3;for(let u=0;u<se;++u)E.push(c[3*u]),E.push(c[3*u+1]),E.push(c[3*u+2]),h&&l!=null&&(h.push(l[3*u]),h.push(l[3*u+1]),h.push(l[3*u+2])),A&&_!=null&&(A.push(_[2*u]),A.push(_[2*u+1])),g&&f!=null&&(g.push(f[4*u]),g.push(f[4*u+1]),g.push(f[4*u+2]),g.push(f[4*u+3])),w&&d!=null&&(w.push(I(d[4*u]/255)),w.push(I(d[4*u+1]/255)),w.push(I(d[4*u+2]/255)),w.push(d[4*u+3]/255));const re=E.endAccessor(),Y=this._addAccessor(E.index,re);let V,F,z,D,L;if(h){const u=h.endAccessor();V=this._addAccessor(h.index,u)}if(A){const u=A.endAccessor();F=this._addAccessor(A.index,u)}if(g){const u=g.endAccessor();z=this._addAccessor(g.index,u)}if(w){const u=w.endAccessor();D=this._addAccessor(w.index,u)}const U=[];return e.components&&e.components.length>0&&e.components[0].faces?(L=n.addBufferView(m.UNSIGNED_INT,p.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(L,e.components,U,Y,V,F,z,D)):this._addMeshVertexNonIndexed(e.components,U,Y,V,F,z,D),E.finalize(),h&&h.finalize(),A&&A.finalize(),g&&g.finalize(),L&&L.finalize(),w&&w.finalize(),r||n.finalize(),U}_addMaterial(e){if(e==null)return;const s=this._materialMap.indexOf(e);if(s!==-1)return s;this.gltf.materials||(this.gltf.materials=[]);const r={};switch(e.alphaMode){case"mask":r.alphaMode=C.MASK;break;case"auto":case"blend":r.alphaMode=C.BLEND}r.alphaCutoff=e.alphaCutoff,e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};const n=o=>{const a=o.toRgba();return a[0]=I(a[0]/255),a[1]=I(a[1]/255),a[2]=I(a[2]/255),a};if(e.color!=null&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),e.colorTexture!=null&&(r.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(r.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof Ee){if(e.emissiveTexture!=null&&(r.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){const o=n(e.emissiveColor);r.emissiveFactor=[o[0],o[1],o[2]]}e.occlusionTexture!=null&&(r.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(r.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1,H().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const i=this.gltf.materials.length;return this.gltf.materials.push(r),this._materialMap.push(e),i}_createTextureInfo(e,s){const r={index:this._addTexture(e)};return s&&(r.extensions||(r.extensions={}),r.extensions.KHR_texture_transform={scale:s.scale,offset:s.offset,rotation:oe(s.rotation)}),r}_addTexture(e){const s=this.gltf.textures??[];return this.gltf.textures=s,ce(this._textureMap,e,()=>{const r={sampler:this._addSampler(e),source:this._addImage(e)},n=s.length;return s.push(r),n})}_addImage(e){const s=this._imageMap.get(e);if(s!=null)return s;this.gltf.images||(this.gltf.images=[]);const r={};if(e.url)r.uri=e.url;else{const i=e.data;r.extras=i;for(let a=0;a<this.gltf.images.length;++a)if(i===this.gltf.images[a].extras)return a;const o=this.gltf.extras;switch(o.output.image){case b.GLB:{const a=o.binChunkBuffer.addBufferView(m.UNSIGNED_BYTE,p.SCALAR);if(v(i))i.data!=null&&a.writeOutToBuffer(i.data,0);else{const c=q(i,this.options.signal).then(({data:l,type:f})=>(r.mimeType=f,l));o.promises.push(a.writeAsync(c).then(()=>{a.finalize()}))}r.bufferView=a.index;break}case b.DataURI:if(v(i)){H().warnOnce("Image export for basis compressed textures not available.");break}r.uri=Se(i);break;default:if(v(i)){H().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(q(i,this.options.signal).then(({data:a,type:c})=>{r.uri=a,r.mimeType=c}))}}const n=this.gltf.images.length;return this.gltf.images.push(r),this._imageMap.set(e,n),n}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let s=T.REPEAT,r=T.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":s=T.CLAMP_TO_EDGE,r=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT,r=T.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=T.CLAMP_TO_EDGE;break;case"mirror":r=T.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":s=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT}}const n={wrapS:s,wrapT:r};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(n)===JSON.stringify(this.gltf.samplers[o]))return o;const i=this.gltf.samplers.length;return this.gltf.samplers.push(n),i}_addAccessor(e,s){this.gltf.accessors||(this.gltf.accessors=[]);const r={bufferView:e,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(r.normalized=!0);const n=this.gltf.accessors.length;return this.gltf.accessors.push(r),n}_addMeshVertexIndexed(e,s,r,n,i,o,a,c){const l=new Map;for(const f of s){if(e.startAccessor("INDICES"),f.faces)for(let h=0;h<f.faces.length;++h)e.push(f.faces[h]);const _=e.endAccessor(),d={attributes:{POSITION:n},indices:this._addAccessor(e.index,_),material:this._addMaterial(f.material)};i&&f.shading!=="flat"&&(d.attributes.NORMAL=i),o&&(d.attributes.TEXCOORD_0=o),a&&f.shading!=="flat"&&(d.attributes.TANGENT=a),c&&(d.attributes.COLOR_0=c);const E=l.get(f.name);if(E)E.primitives.push(d);else{const h={name:f.name,primitives:[d]};l.set(f.name,h),r.push(h)}}}_addMeshVertexNonIndexed(e,s,r,n,i,o,a){const c={primitives:[]};s.push(c);const l={attributes:{POSITION:r}};n&&(l.attributes.NORMAL=n),i&&(l.attributes.TEXCOORD_0=i),o&&(l.attributes.TANGENT=o),a&&(l.attributes.COLOR_0=a),e&&(l.material=this._addMaterial(e[0].material)),c.primitives.push(l)}}function Ve({position:t,normal:e,tangent:s}){k(t,3),k(e,3),k(s,4)}function k(t,e){if(t!=null)for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],i=t[r];t[s]=i,t[r]=-n}}function I(t){return t**he}class Fe{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){ue(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class ze{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class De{constructor(e){this.mesh=e,this.name="",this.translation=M(),this.rotation=pe(),this.scale=G(J),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){de(this.rotation,e[0],e[1],e[2])}}const Ue="model.gltf",te="model.glb";async function Pe(t,e){const s=new Ce(t,e).gltf,r=s.extras.promises;let n=1,i=1,o=null;await Promise.allSettled(r),P(e.signal);const a=e.jsonSpacing??4,c=new Map,l=JSON.stringify(s,(f,_)=>{if(f!=="extras"){if(_ instanceof ArrayBuffer){if(Be(_))switch(e.output?.image){case b.DataURI:case b.GLB:break;case b.External:default:{const d=`img${i}.png`;return i++,c.set(d,_),d}}switch(e.output?.buffer){case y.DataURI:return Oe(_);case y.GLB:if(o)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(o=_);case y.External:default:{const d=`data${n}.bin`;return n++,c.set(d,_),d}}}return _}},a);return e.output?.buffer===y.GLB||e.output?.image===b.GLB?c.set(te,new S(l,o).buffer):c.set(Ue,l),c}async function Ge(t,e){const s=(await Pe(t,{output:{buffer:y.GLB,image:b.GLB},jsonSpacing:0,...e})).get(te);if(!(s&&s instanceof ArrayBuffer))throw new Error("failed to export to glb");return s}async function ve(t,e){const s=new Fe,r=new ze;return s.addScene(r),r.addNode(new De(t)),await Ge(s,{origin:t.origin,...e})}export{ve as toBinaryGLTF};
