import{aY as u}from"./main-DTtQVgOw.js";import{s as c}from"./PooledRBush-DVDA7xNj.js";import{n as p}from"./MeshLocalVertexSpace-BYqfVYId.js";import{B as l}from"./vertexSpaceConversion-D7xyGJKD.js";class x{async createIndex(r,n){const t=new Array;if(!r.vertexAttributes?.position)return new c;const o=w(r),a=n!=null?await n.invoke("createIndexThread",o,{transferList:t}):this.createIndexThread(o).result;return f().fromJSON(a)}createIndexThread(r){const n=f();if(!r)return{result:n.toJSON()};const t=new Float64Array(r.position);return r.components?d(n,t,r.components.map(o=>new Uint32Array(o))):h(n,t)}}function h(e,r){const n=new Array(r.length/9);let t=0;for(let o=0;o<r.length;o+=9)n[t++]=m(r,o,o+3,o+6);return e.load(n),{result:e.toJSON()}}function d(e,r,n){let t=0;for(const s of n)t+=s.length/3;const o=new Array(t);let a=0;for(const s of n)for(let i=0;i<s.length;i+=3)o[a++]=m(r,3*s[i],3*s[i+1],3*s[i+2]);return e.load(o),{result:e.toJSON()}}function w(e){const{vertexAttributes:{position:r},vertexSpace:n,spatialReference:t,transform:o}=e,a=l({vertexAttributes:{position:r},vertexSpace:n,spatialReference:t,transform:o},p.absolute,{allowBufferReuse:!0})?.position;return a?!e.components||e.components.some(s=>!s.faces)?{position:a.buffer}:{position:a.buffer,components:e.components.map(s=>s.faces)}:null}function f(){return new c(9,u("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}function m(e,r,n,t){return{minX:Math.min(e[r],e[n],e[t]),maxX:Math.max(e[r],e[n],e[t]),minY:Math.min(e[r+1],e[n+1],e[t+1]),maxY:Math.max(e[r+1],e[n+1],e[t+1]),p0:[e[r],e[r+1],e[r+2]],p1:[e[n],e[n+1],e[n+2]],p2:[e[t],e[t+1],e[t+2]]}}export{x as default};
