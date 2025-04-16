const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-5ScVeRQz.js","./geometryEngineBase-8g0RzW7z.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{_ as F}from"./preload-helper-ExcqyqRp.js";import{ey as U,ez as v,bT as Z,cj as h,bj as m,eA as g,cO as u,aO as A,az as N,eB as T,b5 as B,cM as R,ab as P,ac as $,eC as E,cN as J,cb as p}from"./main-vIJpOdvB.js";import{N as q,O as _,J as I}from"./projection-DUpEFq3L.js";import{R as L}from"./normalizeUtils-CXoq44eX.js";import{t as S}from"./json-Wa8cmqdu.js";const c=[0,0];function d(e,t){if(!t)return null;if("x"in t){const i={x:0,y:0};return[i.x,i.y]=e(t.x,t.y,c),t.z!=null&&(i.z=t.z),t.m!=null&&(i.m=t.m),i}if("xmin"in t){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=e(t.xmin,t.ymin,c),[i.xmax,i.ymax]=e(t.xmax,t.ymax,c),t.hasZ&&(i.zmin=t.zmin,i.zmax=t.zmax,i.hasZ=!0),t.hasM&&(i.mmin=t.mmin,i.mmax=t.mmax,i.hasM=!0),i}return"rings"in t?{rings:x(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:x(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:w(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function x(e,t){const i=[];for(const n of e)i.push(w(n,t));return i}function w(e,t){const i=[];for(const n of e){const s=t(n[0],n[1],[0,0]);i.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return i}async function b(e,t){if(!e||!t)return;const i=Array.isArray(e)?e.map(n=>n.geometry!=null?n.geometry.spatialReference:null).filter(Z):[e];await q(i.map(n=>({source:n,dest:t})))}const M=d.bind(null,U),z=d.bind(null,v);function O(e,t,i,n){if(!e||(i||(i=t,t=e.spatialReference),!h(t)||!h(i)||m(t,i)))return e;if(g(t,i)){const s=u(i)?M(e):z(e);return s.spatialReference=i,s}return _(S,[e],t,i,null,n)[0]}class k{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,i,n,s){if(!t?.length||!i||!n||m(i,n))return t;const r={geometries:t,inSpatialReference:i,outSpatialReference:n,geographicTransformation:s,resolve:A()};return this._jobs.push(r),this._timer??=setTimeout(this._process,10),r.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:i,inSpatialReference:n,outSpatialReference:s,resolve:r,geographicTransformation:o}=t;g(n,s)?u(s)?r(i.map(M)):r(i.map(z)):r(_(S,i,n,s,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const C=new k;function te(e,t,i,n){return C.push(e,t,i,n)}const D=new N({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),y=Object.freeze({});async function ie(e,t,i){const{outFields:n,orderByFields:s,groupByFieldsForStatistics:r,outStatistics:o}=e;if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(s)for(let a=0;a<s.length;a++)s[a]=s[a].trim();if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(o)for(let a=0;a<o.length;a++)o[a].onStatisticField&&(o[a].onStatisticField=o[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),K(e,t,i)}async function K(e,t,i){if(!e)return null;let{where:n}=e;if(e.where=n=n?.trim(),(!n||/^1 *= *1$/.test(n)||t&&t===n)&&(e.where=null),!e.geometry)return e;let s=await G(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:r}=e.geometry;s=T(s),s.spatialReference=r}if(s){await b(s.spatialReference,i),s=V(s,i);const r=(await L(B(s)))[0];if(r==null)throw y;const o="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,a=o&&j(s,i)?{densificationStep:8*o}:void 0,f=r.toJSON(),l=O(f,f.spatialReference,i,a);if(!l)throw y;l.spatialReference=i,e.geometry=l}return e}function j(e,t){if(!e)return!1;const i=e.spatialReference;return(R(e)||P(e)||$(e))&&!m(i,t)&&!I(i,t)}function V(e,t){const i=e.spatialReference;return j(e,t)&&R(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function G(e){const{distance:t,units:i}=e,n=e.geometry;if(t==null||"vertexAttributes"in n)return n;const s=n.spatialReference,r=i?D.fromJSON(i):E(s),o=s&&(J(s)||u(s))?n:await b(s,p).then(()=>O(n,p));return(await H())(o.spatialReference,o,t,r)}async function H(){return(await F(async()=>{const{geodesicBuffer:e}=await import("./geometryEngineJSON-5ScVeRQz.js").then(t=>t.g);return{geodesicBuffer:e}},__vite__mapDeps([0,1,2,3]),import.meta.url)).geodesicBuffer}export{D as R,ie as S,K as a,te as b,y as g,O as j,b as x};
