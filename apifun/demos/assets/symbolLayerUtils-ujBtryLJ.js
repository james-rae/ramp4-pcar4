const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./objectResourceUtils-DkABRcOQ.js","./preload-helper-ExcqyqRp.js","./main-CcTJZah4.js","./main-gKmidBZg.css","./devEnvironmentUtils-8WtPGj6h.js","./mat3-CruJiiUv.js","./common-DQOJ18NT.js","./mat3f64-q3fE-ZOt.js","./mat4-I_M_KIEV.js","./mat4f64-Dk4dwAN8.js","./vec2f64-DohEyf3f.js","./vec32-D4ob7-3U.js","./Geometry-DfEMvi8b.js","./Texture-CAz7g1Ei.js","./signal-CHZdDeRG.js","./enums-Dk3osxpS.js","./getDataTypeBytes-DflDeYgv.js","./renderState-z3Gwc6C8.js","./basicInterfaces-CZwQPxTp.js","./ShaderOutput-DnYY5J1_.js","./BindType-BBwFZqyN.js","./glsl-BH37Aalp.js","./VertexAttribute-Cq4MnHjR.js","./vec42-CKs01hkn.js","./vec4f64-o2zAXfmz.js","./lengthUtils-CCWuB1s4.js","./boundedPlane-CowNizB-.js","./sphere-B_OJFjwD.js","./plane-DJilfJKg.js","./quatf64-aQ5IuZRd.js","./lineSegment-CPlv_Odm.js","./ViewingMode-HRfKv6NR.js","./projectBuffer-DwB7xYJN.js","./vec2-maR1OrZI.js","./orientedBoundingBox-BIRt6Glb.js","./quat-DAA9UZ3A.js","./spatialReferenceEllipsoidUtils-CsSyVIf9.js","./computeTranslationToOriginAndRotation-CTqTKM0w.js","./requestImageUtils-DKHo0NXL.js","./TextureFormat-1mYWTFa-.js","./InterleavedLayout-B2khWTjK.js","./BufferView-DZslrVDM.js","./types-D0PSWh4d.js","./Indices-TRVfGyko.js","./triangle-Bz-rnGmP.js","./vec3-CHxyJkts.js","./vec4-BJnMXj40.js","./indexUtils-ZXrXBcEm.js","./resourceUtils--iGtP5eL.js","./vec2f32-BbH2jxlN.js","./memoryEstimations-0WvAqt4K.js","./NestedMap-CImDozOA.js","./Version-D4DaVQR7.js","./DefaultMaterial-bRy8PGcM.js","./NormalAttribute.glsl-DP36OND6.js","./doublePrecisionUtils-B0owpBza.js","./ShaderBuilder-dsjoC4CY.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./preload-helper-ExcqyqRp.js";import{s as t,a4 as p,dB as u,c0 as v,dC as y,aK as c}from"./main-CcTJZah4.js";import{e as b}from"./LRUCache-kGdwl_8C.js";import"./MemCache-Cfj7HrRr.js";let n=l();function l(){return new b(50)}function T(){n=l()}async function $(e,r){if(e.resource?.href)return w(e.resource.href).then(i=>[i.width,i.height]);if(e.resource?.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(e){return p(e,{responseType:"image"}).then(r=>r.data)}async function x(e,r=null){if(!e.isPrimitive){const o=e.resource?.href;if(!o)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const s=n.get(o);if(s!==void 0)return s;const{fetch:m}=await d(()=>import("./objectResourceUtils-DkABRcOQ.js").then(h=>h.o),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]),import.meta.url),f=await m(o,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),a=u(f.referenceBoundingBox,c());return n.put(o,a),a}if(!e.resource?.primitive)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const i=v(y(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return u(i,c())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
