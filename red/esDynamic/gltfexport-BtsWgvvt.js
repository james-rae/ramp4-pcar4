import{s as Y,D as U,fd as re,aU as ne,aA as N,fI as ie,cv as P,er as K,eI as ae,ao as oe,n as ce,eW as he}from"./main-BvLIKoYF.js";import{N as fe,T as ue}from"./quat-Cjo404lE.js";import{r as le,t as de,e as me}from"./quatf64-C16JxGFv.js";import{o as B,c as W,_ as _e,A as pe,H as j}from"./vec32-DC3fmUP8.js";import{m as ge}from"./Mesh-D0JnBOIs.js";import{B as we}from"./vertexSpaceConversion-Dr3BYH95.js";import{C as _,D as T}from"./enums-DBi1-Mm2.js";import{r as G}from"./resourceUtils-T_eg30H0.js";function Ee(t){const e=X(t);return e!=null?e.toDataURL():""}async function J(t,e){const s=X(t);if(s==null)throw new Y("imageToArrayBuffer","Unsupported image type");const r=Ae(t),n=await new Promise(a=>s.toBlob(a,r));if(U(e),!n)throw new Y("imageToArrayBuffer","Failed to encode image");const o=await n.arrayBuffer();return U(e),{data:o,type:r}}function Ae(t){if(!(t instanceof HTMLImageElement))return"image/png";const e=t.src;if(re(e)){const s=ne(e);return s?.mediaType==="image/jpeg"?s.mediaType:"image/png"}return/\.png$/i.test(e)?"image/png":/\.(jpg|jpeg)$/i.test(e)?"image/jpeg":"image/png"}function X(t){if(t instanceof HTMLCanvasElement)return t;if(t instanceof HTMLVideoElement)return null;const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");return t instanceof HTMLImageElement?s.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&s.putImageData(t,0,0),e}function Te(t){const e=[],s=new Uint8Array(t);for(let r=0;r<s.length;r++)e.push(String.fromCharCode(s[r]));return"data:application/octet-stream;base64,"+btoa(e.join(""))}function be(t){if(t.byteLength<8)return!1;const e=new Uint8Array(t);return e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71&&e[4]===13&&e[5]===10&&e[6]===26&&e[7]===10}var L;(function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"})(L||(L={}));let M=class I{constructor(e,s){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=I.HEADER_SIZE,this._length+=I.CHUNK_HEADER_SIZE;const r=Re(e);if(this._length+=Z(r.byteLength,4),s&&(this._length+=I.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const n=this._writeChunk(r,12,L.JSON,32);s&&this._writeChunk(s,n,L.BIN)}_writeHeader(){this._outView.setUint32(0,I.MAGIC,!0),this._outView.setUint32(4,I.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,s,r,n=0){const o=Z(e.byteLength,4);for(this._outView.setUint32(s,o,!0),this._outView.setUint32(s+=4,r,!0),ye(this._outView.buffer,e,s+=4,0,e.byteLength),s+=e.byteLength;s%4;)n&&this._outView.setUint8(s,n),s++;return s}};function ye(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}function Re(t){return new TextEncoder().encode(t).buffer}function Z(t,e){return e*Math.ceil(t/e)}M.HEADER_SIZE=12,M.CHUNK_HEADER_SIZE=8,M.MAGIC=1179937895,M.VERSION=2;var y,b,R,g,$,O,Q;(function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"})(y||(y={})),function(t){t[t.External=0]="External",t[t.DataURI=1]="DataURI",t[t.GLB=2]="GLB"}(b||(b={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(g||(g={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}($||($={})),function(t){t.OPAQUE="OPAQUE",t.MASK="MASK",t.BLEND="BLEND"}(O||(O={})),function(t){t[t.NoColor=0]="NoColor",t[t.FaceColor=1]="FaceColor",t[t.VertexColor=2]="VertexColor"}(Q||(Q={}));let xe=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case _.BYTE:return new Int8Array(t,e);case _.FLOAT:return new Float32Array(t,e);case _.SHORT:return new Int16Array(t,e);case _.UNSIGNED_BYTE:return new Uint8Array(t,e);case _.UNSIGNED_INT:return new Uint32Array(t,e);case _.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case _.UNSIGNED_BYTE:case _.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case _.BYTE:case _.UNSIGNED_BYTE:return 1;case _.SHORT:case _.UNSIGNED_SHORT:return 2;case _.UNSIGNED_INT:case _.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case g.SCALAR:return 1;case g.VEC2:return 2;case g.VEC3:return 3;case g.VEC4:case g.MAT2:return 4;case g.MAT3:return 9;case g.MAT4:return 16}}},q=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new xe(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function Ie(t,e){if(t.components)for(const s of t.components)s.faces&&s.shading==="smooth"&&Ne(s,e)}function Ne(t,e){e.normal==null&&(e.normal=new Float32Array(e.position.length));const s=t.faces,{position:r,normal:n}=e,o=s.length/3;for(let a=0;a<o;++a){const i=3*s[3*a],c=3*s[3*a+1],h=3*s[3*a+2],u=B(Me,r[i],r[i+1],r[i+2]),p=B(Se,r[c],r[c+1],r[c+2]),l=B(Be,r[h],r[h+1],r[h+2]),w=W(p,p,u),d=W(l,l,u),m=_e(w,w,d);n[i]+=m[0],n[i+1]+=m[1],n[i+2]+=m[2],n[c]+=m[0],n[c+1]+=m[1],n[c+2]+=m[2],n[h]+=m[0],n[h+1]+=m[1],n[h+2]+=m[2]}for(let a=0;a<n.length;a+=3)B(x,n[a],n[a+1],n[a+2]),pe(x,x),n[a]=x[0],n[a+1]=x[1],n[a+2]=x[2]}const Me=N(),Se=N(),Be=N(),x=N(),v=()=>ce.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Le{constructor(e,s){this.options=s,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:s.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const s=this.gltf.extras,r=s.output.buffer===y.GLB||s.output.image===b.GLB;r&&(s.binChunkBuffer=new q(this.gltf)),e.forEachScene(n=>{this._addScene(n)}),r&&s.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const s={};e.name&&(s.name=e.name),e.forEachNode(r=>{s.nodes||(s.nodes=[]),s.nodes.push(...this._addNodes(r))}),this.gltf.scenes.push(s)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const s={};e.name&&(s.name=e.name);const r=e.translation;j(r,ie)||(s.translation=P(r));const n=e.rotation;fe(n,le)||(s.rotation=de(n));const o=e.scale;j(o,K)||(s.scale=P(o));const a=this.gltf.nodes.length;if(this.gltf.nodes.push(s),e.mesh&&e.mesh.vertexAttributes.position){const i=this._createMeshes(e.mesh),c=[a];if(i.length===1)this._addMesh(s,i[0]);else for(const h of i){const u={};this._addMesh(u,h),c.push(this.gltf.nodes.length),this.gltf.nodes.push(u)}return c}return e.forEachNode(i=>{s.children||(s.children=[]),s.children.push(...this._addNodes(i))}),[a]}_addMesh(e,s){this.gltf.meshes??=[];const r=this.gltf.meshes.length;this.gltf.meshes.push(s),e.mesh=r}_createMeshes(e){const s=this.gltf.extras,r=s.output.buffer===y.GLB;let n;n=r?s.binChunkBuffer:new q(this.gltf);const o=this.options.origin,a=e.vertexSpace.clone();a.origin=[o.x,o.y,o.z??0];const i=we({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},a,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!i)return[];Ie(e,i),Oe(i);const{position:c,normal:h,tangent:u}=i,{uv:p,color:l}=e.vertexAttributes,w=n.addBufferView(_.FLOAT,g.VEC3,R.ARRAY_BUFFER);let d,m,E,A;h&&(d=n.addBufferView(_.FLOAT,g.VEC3,R.ARRAY_BUFFER)),p&&(m=n.addBufferView(_.FLOAT,g.VEC2,R.ARRAY_BUFFER)),u&&(E=n.addBufferView(_.FLOAT,g.VEC4,R.ARRAY_BUFFER)),l&&(A=n.addBufferView(_.UNSIGNED_BYTE,g.VEC4,R.ARRAY_BUFFER)),w.startAccessor("POSITION"),d&&d.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),E&&E.startAccessor("TANGENT"),A&&A.startAccessor("COLOR_0");const te=i.position.length/3;for(let f=0;f<te;++f)w.push(c[3*f]),w.push(c[3*f+1]),w.push(c[3*f+2]),d&&h!=null&&(d.push(h[3*f]),d.push(h[3*f+1]),d.push(h[3*f+2])),m&&p!=null&&(m.push(p[2*f]),m.push(p[2*f+1])),E&&u!=null&&(E.push(u[4*f]),E.push(u[4*f+1]),E.push(u[4*f+2]),E.push(u[4*f+3])),A&&l!=null&&(A.push(l[4*f]),A.push(l[4*f+1]),A.push(l[4*f+2]),A.push(l[4*f+3]));const se=w.endAccessor(),k=this._addAccessor(w.index,se);let C,V,z,F,S;if(d){const f=d.endAccessor();C=this._addAccessor(d.index,f)}if(m){const f=m.endAccessor();V=this._addAccessor(m.index,f)}if(E){const f=E.endAccessor();z=this._addAccessor(E.index,f)}if(A){const f=A.endAccessor();F=this._addAccessor(A.index,f)}const D=[];return e.components&&e.components.length>0&&e.components[0].faces?(S=n.addBufferView(_.UNSIGNED_INT,g.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(S,e.components,D,k,C,V,z,F)):this._addMeshVertexNonIndexed(e.components,D,k,C,V,z,F),w.finalize(),d&&d.finalize(),m&&m.finalize(),E&&E.finalize(),S&&S.finalize(),A&&A.finalize(),r||n.finalize(),D}_addMaterial(e){if(e===null)return;const s=this._materialMap.indexOf(e);if(s!==-1)return s;this.gltf.materials||(this.gltf.materials=[]);const r={};switch(e.alphaMode){case"mask":r.alphaMode=O.MASK;break;case"auto":case"blend":r.alphaMode=O.BLEND}r.alphaCutoff=e.alphaCutoff,e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};const n=i=>i**2.1,o=i=>{const c=i.toRgba();return c[0]=n(c[0]/255),c[1]=n(c[1]/255),c[2]=n(c[2]/255),c};if(e.color!=null&&(r.pbrMetallicRoughness.baseColorFactor=o(e.color)),e.colorTexture!=null&&(r.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),e.normalTexture!=null&&(r.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof ge){if(e.emissiveTexture!=null&&(r.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),e.emissiveColor!=null){const i=o(e.emissiveColor);r.emissiveFactor=[i[0],i[1],i[2]]}e.occlusionTexture!=null&&(r.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),e.metallicRoughnessTexture!=null&&(r.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1,v().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(r),this._materialMap.push(e),a}_createTextureInfo(e,s){const r={index:this._addTexture(e)};return s&&(r.extensions||(r.extensions={}),r.extensions.KHR_texture_transform={scale:s.scale,offset:s.offset,rotation:ae(s.rotation)}),r}_addTexture(e){const s=this.gltf.textures??[];return this.gltf.textures=s,oe(this._textureMap,e,()=>{const r={sampler:this._addSampler(e),source:this._addImage(e)},n=s.length;return s.push(r),n})}_addImage(e){const s=this._imageMap.get(e);if(s!=null)return s;this.gltf.images||(this.gltf.images=[]);const r={};if(e.url)r.uri=e.url;else{const o=e.data;r.extras=o;for(let i=0;i<this.gltf.images.length;++i)if(o===this.gltf.images[i].extras)return i;const a=this.gltf.extras;switch(a.output.image){case b.GLB:{const i=a.binChunkBuffer.addBufferView(_.UNSIGNED_BYTE,g.SCALAR);if(G(o))o.data!=null&&i.writeOutToBuffer(o.data,0);else{const c=J(o,this.options.signal).then(({data:h,type:u})=>(r.mimeType=u,h));a.promises.push(i.writeAsync(c).then(()=>{i.finalize()}))}r.bufferView=i.index;break}case b.DataURI:if(G(o)){v().warnOnce("Image export for basis compressed textures not available.");break}r.uri=Ee(o);break;default:if(G(o)){v().warnOnce("Image export for basis compressed textures not available.");break}a.promises.push(J(o,this.options.signal).then(({data:i,type:c})=>{r.uri=i,r.mimeType=c}))}}const n=this.gltf.images.length;return this.gltf.images.push(r),this._imageMap.set(e,n),n}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let s=T.REPEAT,r=T.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":s=T.CLAMP_TO_EDGE,r=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT,r=T.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=T.CLAMP_TO_EDGE;break;case"mirror":r=T.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":s=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT}}const n={wrapS:s,wrapT:r};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(n)===JSON.stringify(this.gltf.samplers[a]))return a;const o=this.gltf.samplers.length;return this.gltf.samplers.push(n),o}_addAccessor(e,s){this.gltf.accessors||(this.gltf.accessors=[]);const r={bufferView:e,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(r.normalized=!0);const n=this.gltf.accessors.length;return this.gltf.accessors.push(r),n}_addMeshVertexIndexed(e,s,r,n,o,a,i,c){const h=new Map;for(const u of s){e.startAccessor("INDICES");for(let d=0;d<u.faces.length;++d)e.push(u.faces[d]);const p=e.endAccessor(),l={attributes:{POSITION:n},indices:this._addAccessor(e.index,p),material:this._addMaterial(u.material)};o&&u.shading!=="flat"&&(l.attributes.NORMAL=o),a&&(l.attributes.TEXCOORD_0=a),i&&u.shading!=="flat"&&(l.attributes.TANGENT=i),c&&(l.attributes.COLOR_0=c);const w=h.get(u.name);if(w)w.primitives.push(l);else{const d={name:u.name,primitives:[l]};h.set(u.name,d),r.push(d)}}}_addMeshVertexNonIndexed(e,s,r,n,o,a,i){const c={primitives:[]};s.push(c);const h={attributes:{POSITION:r}};n&&(h.attributes.NORMAL=n),o&&(h.attributes.TEXCOORD_0=o),a&&(h.attributes.TANGENT=a),i&&(h.attributes.COLOR_0=i),e&&(h.material=this._addMaterial(e[0].material)),c.primitives.push(h)}}function Oe({position:t,normal:e,tangent:s}){H(t,3),H(e,3),H(s,4)}function H(t,e){if(t!=null)for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],o=t[r];t[s]=o,t[r]=-n}}class Ce{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){he(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class Ve{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class ze{constructor(e){this.mesh=e,this.name="",this.translation=N(),this.rotation=me(),this.scale=P(K),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){ue(this.rotation,e[0],e[1],e[2])}}const Fe="model.gltf",ee="model.glb";async function De(t,e){const s=new Le(t,e).gltf,r=s.extras.promises;let n=1,o=1,a=null;await Promise.allSettled(r),U(e.signal);const i=e.jsonSpacing??4,c=new Map,h=JSON.stringify(s,(u,p)=>{if(u!=="extras"){if(p instanceof ArrayBuffer){if(be(p))switch(e.output?.image){case b.DataURI:case b.GLB:break;case b.External:default:{const l=`img${o}.png`;return o++,c.set(l,p),l}}switch(e.output?.buffer){case y.DataURI:return Te(p);case y.GLB:if(a)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(a=p);case y.External:default:{const l=`data${n}.bin`;return n++,c.set(l,p),l}}}return p}},i);return e.output?.buffer===y.GLB||e.output?.image===b.GLB?c.set(ee,new M(h,a).buffer):c.set(Fe,h),c}async function Ue(t,e){const s=(await De(t,{output:{buffer:y.GLB,image:b.GLB},jsonSpacing:0,...e})).get(ee);if(!(s&&s instanceof ArrayBuffer))throw new Error("failed to export to glb");return s}async function Pe(t,e){const s=new Ce,r=new Ve;return s.addScene(r),r.addNode(new ze(t)),await Ue(s,{origin:t.origin,...e})}export{Pe as toBinaryGLTF};