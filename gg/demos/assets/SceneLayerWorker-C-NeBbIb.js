const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-BB6LKGW6.js","./_commonjsHelpers-DCkdB7M8.js","./projectBuffer-aZbPqVLL.js","./main-BnINupoD.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./projection-BG6zqujR.js","./projectMeshVertexPositions-CWViQfJu.js","./MeshLocalVertexSpace-B2PsF4Bn.js","./vertexSpaceConversion-Dfp1lOnH.js","./mat3-CruJiiUv.js","./common-DQOJ18NT.js","./mat3f64-q3fE-ZOt.js","./mat4-pV3Yd6bK.js","./mat4f64-Dk4dwAN8.js","./vec32-zaCIH5IA.js","./spatialReferenceEllipsoidUtils-CE9BWFiu.js","./computeTranslationToOriginAndRotation-KUf4u5Ih.js","./projectPointToVector-CuwXeZBj.js","./meshVertexSpaceUtils-Cu5hxcNO.js","./vec3-B0ZJ5Qf0.js","./BufferView-BKKI6ML5.js","./vec2-maR1OrZI.js","./vec42-CKs01hkn.js","./vec4-b3nqEzCp.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./preload-helper-ExcqyqRp.js";import{cA as W,ab as X,O as $,f9 as Z}from"./main-BnINupoD.js";import{n as ee,a as te}from"./MeshLocalVertexSpace-B2PsF4Bn.js";import{n as re,d as oe}from"./vec3-B0ZJ5Qf0.js";import"./workers-CaNtZf3r.js";import"./projectBuffer-aZbPqVLL.js";import"./projectVectorToVector-C1vq4539.js";import"./vec4f64-o2zAXfmz.js";import"./sphere-PuK9bi4-.js";import"./I3SUtil-BIXtZNHg.js";import"./Queue-BiooWvlh.js";import"./intl-DLGcJ4sm.js";import"./projectPointToVector-CuwXeZBj.js";import"./projection-BG6zqujR.js";import"./mat4-pV3Yd6bK.js";import"./common-DQOJ18NT.js";import"./vec32-zaCIH5IA.js";import"./vec42-CKs01hkn.js";import"./mat3-CruJiiUv.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BbrtMSGO.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-DohEyf3f.js";import"./Query-m9ojnq6M.js";import"./Field-cvJSbcPM.js";import"./fieldType-CHya0v-j.js";import"./TimeExtent-Drrkeg7H.js";import"./I3SBinaryReader-B2XeqF08.js";import"./VertexAttribute-Cq4MnHjR.js";import"./edgeUtils-Bq0jCyKj.js";import"./floatRGBA-B9I-rn2n.js";import"./NormalAttribute.glsl-CuQPb439.js";import"./glsl-BH37Aalp.js";import"./ShaderOutput-DnYY5J1_.js";import"./BindType-BBwFZqyN.js";import"./orientedBoundingBox-DdPiufkV.js";import"./quat-CIKxPwc8.js";import"./spatialReferenceEllipsoidUtils-CE9BWFiu.js";import"./computeTranslationToOriginAndRotation-KUf4u5Ih.js";import"./ViewingMode-HRfKv6NR.js";var I,B;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(I||(I={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(B||(B={}));function ne(){return U||(U=new Promise(e=>P(()=>import("./i3s-BB6LKGW6.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:ie,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),U}function ie(e){return W(`esri/libs/i3s/${e}`)}let U;class ae{constructor(t,r,a,i,c,s){this.layout=t,this.interleavedVertexData=r,this.indices=a,this.hasColors=i,this.hasModifications=c,this.positionData=s}}let se=class{constructor(t,r,a,i,c,s,f){this.componentOffsets=t,this.featureIds=r,this.anchorIds=a,this.anchors=i,this.transformedGeometry=c,this.globalTrafo=s,this.obb=f}};new X({deallocator:null});var V,b,k,H,Y;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(V||(V={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(b||(b={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(k||(k={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(H||(H={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(Y||(Y={}));async function Ze(e){o=await w();const t=[e.geometryBuffer];return{result:J(o,e,t),transferList:t}}async function et(e){o=await w();const t=[e.geometryBuffer],{geometryBuffer:r}=e,a=r.byteLength,i=o._malloc(a),c=new Uint8Array(o.HEAPU8.buffer,i,a);c.set(new Uint8Array(r));const s=o.dracoDecompressPointCloudData(i,c.byteLength);if(o._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const f=s.featureIds?.length>0?s.featureIds.slice():null,m=s.positions.slice();return f&&t.push(f.buffer),t.push(m.buffer),{result:{positions:m,featureIds:f},transferList:t}}async function tt(e){await w(),le(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function rt(e){await w(),ce(e)}async function ot(e){o=await w(),o.setLegacySchema(e.context,e.jsonSchema)}async function nt(e){const{localMatrix:t,origin:r,positions:a,vertexSpace:i}=e,c=$.fromJSON(e.inSpatialReference),s=$.fromJSON(e.outSpatialReference);let f;const[{projectBuffer:m},{initializeProjection:N}]=await Promise.all([P(()=>import("./projectBuffer-aZbPqVLL.js").then(l=>l.p),__vite__mapDeps([2,3,4,5]),import.meta.url),P(()=>import("./projection-BG6zqujR.js").then(l=>l.p),__vite__mapDeps([6,4,3,5,2]),import.meta.url)]);await N(c,s);const g=[0,0,0];if(!m(r,c,0,g,s,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(f=new Float64Array(a.length),!m(a,c,0,f,s,0,f.length/3))throw new Error("Failed to project")}else{const l=i.type==="georeferenced"?ee.fromJSON(i):te.fromJSON(i),{projectMeshVertexPositions:u}=await P(async()=>{const{projectMeshVertexPositions:p}=await import("./projectMeshVertexPositions-CWViQfJu.js");return{projectMeshVertexPositions:p}},__vite__mapDeps([7,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,6,19,20,21,22,23,24]),import.meta.url),d=u({vertexAttributes:{position:a},transform:t?{localMatrix:t}:void 0,vertexSpace:l,spatialReference:c},s);if(!d)throw new Error("Failed to project");f=d}const R=f.length,[E,A,_]=g;for(let l=0;l<R;l+=3)f[l]-=E,f[l+1]-=A,f[l+2]-=_;return{result:{projected:f,original:a,projectedOrigin:g},transferList:[f.buffer,a.buffer]}}async function it({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return re(r,t,e),Z(e)&&oe(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function at(e){z(e)}let fe,o;function ce(e){if(!o)return;const t=e.modifications,r=o._malloc(8*t.length),a=new Float64Array(o.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];o.setModifications(e.context,r,t.length,e.isGeodetic),o._free(r)}function J(e,t,r){const{context:a,globalTrafo:i,mbs:c,obbData:s,elevationOffset:f,geometryBuffer:m,geometryDescriptor:N,indexToVertexProjector:g,vertexToRenderProjector:R}=t,E=e._malloc(m.byteLength),A=33,_=e._malloc(A*Float64Array.BYTES_PER_ELEMENT),l=new Uint8Array(e.HEAPU8.buffer,E,m.byteLength);l.set(new Uint8Array(m));const u=new Float64Array(e.HEAPU8.buffer,_,A);L(u,[NaN,NaN,NaN]);let d=u.byteOffset+3*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,d);L(p,i),d+=16*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,d),L(p,c),d+=4*u.BYTES_PER_ELEMENT,s&&(p=new Float64Array(u.buffer,d),L(p,s));const x=N,G={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:x.featureIndex},n=e.process(a,!!t.obbData,E,l.byteLength,x,G,_,f,g,R,t.normalReferenceFrame);if(e._free(_),e._free(E),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;const M=n.componentOffsets.length>0?n.componentOffsets.slice():null,S=n.featureIds.length>0?n.featureIds.slice():null,q=n.anchorIds.length>0?Array.from(n.anchorIds):null,K=n.anchors.length>0?Array.from(n.anchors):null,F=n.interleavedVertedData.slice().buffer,O=n.indicesType===I.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),v=n.positions.slice(),{buffer:T,byteOffset:D,byteLength:C}=n.positionIndices,j=n.positionIndicesType===I.Int16?new Uint16Array(T,D,C/2).slice():new Uint32Array(T,D,C/4).slice(),Q=new ae(t.layouts[0],F,O,n.hasColors,n.hasModifications,{data:v,indices:j});return S&&r.push(S.buffer),M&&r.push(M.buffer),r.push(F),r.push(O.buffer),r.push(v.buffer),r.push(j.buffer),new se(M,S,q,K,Q,i,n.obb)}function st(e){return e===0?b.Unmodified:e===1?b.PotentiallyModified:e===2?b.Culled:b.Unknown}function le(e){if(!o)return;const{context:t,buffer:r}=e,a=o._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,c=new Float64Array(o.HEAPU8.buffer,a,i),s=new Float64Array(r);c.set(s),o.filterOBBs(t,a,i),s.set(c),o._free(a)}function z(e){o&&o.destroy(e)===0&&(o=null)}function L(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function ft(){o||await w()}async function w(){return o||(o=await(fe??=ne())),o}const ct={transform:(e,t)=>o&&J(o,e,t),destroy:z};export{at as destroyContext,et as dracoDecompressPointCloudData,tt as filterObbsForModifications,le as filterObbsForModificationsSync,ft as initialize,st as interpretObbModificationResults,Ze as process,nt as project,ot as setLegacySchema,rt as setModifications,ce as setModificationsSync,ct as test,it as transformNormals};
