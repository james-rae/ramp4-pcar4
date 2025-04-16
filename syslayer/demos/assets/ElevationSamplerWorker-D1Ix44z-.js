import{a_ as f}from"./main-D_jCcUNd.js";import{s as p}from"./PooledRBush-mrnpLSLf.js";import{n as u}from"./MeshLocalVertexSpace-uKvE6H2j.js";import{B as l}from"./vertexSpaceConversion-CNxuDBYl.js";import"./preload-helper-ExcqyqRp.js";import"./quickselect-QQC62dOK.js";import"./mat3-CruJiiUv.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-CiVQetHb.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-CQFqDiXA.js";import"./spatialReferenceEllipsoidUtils-C6WSLmy-.js";import"./computeTranslationToOriginAndRotation-DU_ozVBd.js";import"./projectBuffer-B9jUCpdF.js";import"./projectPointToVector-DZVfzWzg.js";import"./projection-DswCNHiF.js";import"./meshVertexSpaceUtils-cTsxdkAH.js";import"./vec3-DUQfuNFc.js";import"./BufferView-8Ead2OQr.js";import"./vec2-maR1OrZI.js";import"./vec42-CKs01hkn.js";import"./vec4-BC-l1fae.js";class j{async createIndex(o,r){const n=new Array;if(!o.vertexAttributes?.position)return new p;const i=d(o),s=r!=null?await r.invoke("createIndexThread",i,{transferList:n}):this.createIndexThread(i).result;return m().fromJSON(s)}createIndexThread(o){const r=m();if(!o)return{result:r.toJSON()};const n=new Float64Array(o.position);return o.components?h(r,n,o.components.map(i=>new Uint32Array(i))):x(r,n)}}function x(t,o){const r=new Array(o.length/9);let n=0;for(let i=0;i<o.length;i+=9)r[n++]=c(o,i,i+3,i+6);return t.load(r),{result:t.toJSON()}}function h(t,o,r){let n=0;for(const e of r)n+=e.length/3;const i=new Array(n);let s=0;for(const e of r)for(let a=0;a<e.length;a+=3)i[s++]=c(o,3*e[a],3*e[a+1],3*e[a+2]);return t.load(i),{result:t.toJSON()}}function d(t){const{vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i}=t,s=l({vertexAttributes:{position:o},vertexSpace:r,spatialReference:n,transform:i},u.absolute,{allowBufferReuse:!0})?.position;return s?!t.components||t.components.some(e=>!e.faces)?{position:s.buffer}:{position:s.buffer,components:t.components.map(e=>e.faces)}:null}function m(){return new p(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,o,r,n){return{minX:Math.min(t[o],t[r],t[n]),maxX:Math.max(t[o],t[r],t[n]),minY:Math.min(t[o+1],t[r+1],t[n+1]),maxY:Math.max(t[o+1],t[r+1],t[n+1]),p0:[t[o],t[o+1],t[o+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[n],t[n+1],t[n+2]]}}export{j as default};
