import{ev as j,ew as O,bQ as A,cg as y,bh as c,ex as g,cL as m,aM as N,ax as J,ey as T,b3 as B,cJ as R,a9 as q,aa as K,ez as P,cK as k,c8 as S}from"./main-yxqK2SuK.js";import{N as E,O as _,J as I}from"./projection-DFcZYgpP.js";import{R as L}from"./normalizeUtils-DCrdkYWL.js";import{t as w}from"./json-BI97KiBB.js";const u=[0,0];function d(t,s){if(!s)return null;if("x"in s){const i={x:0,y:0};return[i.x,i.y]=t(s.x,s.y,u),s.z!=null&&(i.z=s.z),s.m!=null&&(i.m=s.m),i}if("xmin"in s){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=t(s.xmin,s.ymin,u),[i.xmax,i.ymax]=t(s.xmax,s.ymax,u),s.hasZ&&(i.zmin=s.zmin,i.zmax=s.zmax,i.hasZ=!0),s.hasM&&(i.mmin=s.mmin,i.mmax=s.mmax,i.hasM=!0),i}return"rings"in s?{rings:b(s.rings,t),hasM:s.hasM,hasZ:s.hasZ}:"paths"in s?{paths:b(s.paths,t),hasM:s.hasM,hasZ:s.hasZ}:"points"in s?{points:M(s.points,t),hasM:s.hasM,hasZ:s.hasZ}:null}function b(t,s){const i=[];for(const e of t)i.push(M(e,s));return i}function M(t,s){const i=[];for(const e of t){const a=s(e[0],e[1],[0,0]);i.push(a),e.length>2&&a.push(e[2]),e.length>3&&a.push(e[3])}return i}async function f(t,s){if(!t||!s)return;const i=Array.isArray(t)?t.map(e=>e.geometry!=null?e.geometry.spatialReference:null).filter(A):[t];await E(i.map(e=>({source:e,dest:s})))}const z=d.bind(null,j),F=d.bind(null,O);function h(t,s,i,e){if(!t||(i||(i=s,s=t.spatialReference),!y(s)||!y(i)||c(s,i)))return t;if(g(s,i)){const a=m(i)?z(t):F(t);return a.spatialReference=i,a}return _(w,[t],s,i,null,e)[0]}class Q{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,i,e,a){if(!s?.length||!i||!e||c(i,e))return s;const n={geometries:s,inSpatialReference:i,outSpatialReference:e,geographicTransformation:a,resolve:N()};return this._jobs.push(n),this._timer??=setTimeout(this._process,10),n.resolve.promise}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:i,inSpatialReference:e,outSpatialReference:a,resolve:n,geographicTransformation:o}=s;g(e,a)?m(a)?n(i.map(z)):n(i.map(F)):n(_(w,i,e,a,o,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const $=new Q;function C(t,s,i,e){return $.push(t,s,i,e)}const Z=new J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),p=Object.freeze({});async function D(t,s,i){const{outFields:e,orderByFields:a,groupByFieldsForStatistics:n,outStatistics:o}=t;if(e)for(let r=0;r<e.length;r++)e[r]=e[r].trim();if(a)for(let r=0;r<a.length;r++)a[r]=a[r].trim();if(n)for(let r=0;r<n.length;r++)n[r]=n[r].trim();if(o)for(let r=0;r<o.length;r++)o[r].onStatisticField&&(o[r].onStatisticField=o[r].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),v(t,s,i)}async function v(t,s,i){if(!t)return null;let{where:e}=t;if(t.where=e=e?.trim(),(!e||/^1 *= *1$/.test(e)||s&&s===e)&&(t.where=null),!t.geometry)return t;let a=await Y(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:n}=t.geometry;a=T(a),a.spatialReference=n}if(a){await f(a.spatialReference,i),a=G(a,i);const n=(await L(B(a)))[0];if(n==null)throw p;const o="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,r=o&&U(a,i)?{densificationStep:8*o}:void 0,x=n.toJSON(),l=h(x,x.spatialReference,i,r);if(!l)throw p;l.spatialReference=i,t.geometry=l}return t}function U(t,s){if(!t)return!1;const i=t.spatialReference;return(R(t)||q(t)||K(t))&&!c(i,s)&&!I(i,s)}function G(t,s){const i=t.spatialReference;return U(t,s)&&R(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function Y(t){const{distance:s,units:i}=t,e=t.geometry;if(s==null||"vertexAttributes"in e)return e;const a=e.spatialReference,n=i?Z.fromJSON(i):P(a),o=a&&(k(a)||m(a))?e:await f(a,S).then(()=>h(e,S));return(await H())(o.spatialReference,o,s,n)}async function H(){return(await import("./geometryEngineJSON-CGn_tfx8.js").then(t=>t.g)).geodesicBuffer}export{Z as R,D as S,v as a,C as b,p as g,h as j,f as x};
