import{bv as C,j8 as T,aR as c,a2 as A,kv as d,kw as h}from"./main-DnRb_GMc.js";import"./mat4f64-Dn1WEGBx.js";import"./spatialReferenceEllipsoidUtils-DqTpRRNP.js";import"./sphere-Cmv53jqi.js";import{I as g}from"./I3SBinaryReader-DrexHbIz.js";import"./floatRGBA-BQ8z6cBM.js";import"./NormalAttribute.glsl-BR7MHqZW.js";import"./interfaces-Aq8q9x0N.js";import"./BindType-9iOk18Ed.js";import"./VertexAttribute-CAkzp1tV.js";import{I as D}from"./orientedBoundingBox-CkWZHOAI.js";function P(o,a,t,E){return{x:o,y:a,z:t,hasZ:t!=null,hasM:!1,spatialReference:E,type:"point"}}P(0,0,0,C.WGS84);var s;(function(o){o[o.INVISIBLE=0]="INVISIBLE",o[o.TRANSPARENT=1]="TRANSPARENT",o[o.OPAQUE=2]="OPAQUE"})(s||(s={}));var I;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(I||(I={}));var l,p;(function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"})(l||(l={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(p||(p={}));function _(o){return{...v,...o,type:l.Solid}}const v={color:T(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:s.OPAQUE,hasSlicePlane:!1};T(0,0,0,.2),s.OPAQUE,c();var N;async function L(o,a,t,E,m,R,U,O){const n=[];for(const r of a)if(r&&m.includes(r.name)){const e=`${o}/nodes/${t}/attributes/${r.key}/0`;n.push({url:e,storageInfo:r})}const f=await Promise.allSettled(n.map(r=>A(r.url,{responseType:"array-buffer",query:{...U,token:R},signal:O?.signal}).then(e=>g(r.storageInfo,e.data)))),u=[];for(const r of E){const e={};for(let i=0;i<f.length;i++){const S=f[i];if(S.status==="fulfilled"){const y=S.value;e[n[i].storageInfo.name]=$(y,r)}}u.push(e)}return u}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(N||(N={}));const k=-32768,x=-(2**31);function $(o,a){if(!o)return null;const t=o[a];return d(o)?t===k?null:t:h(o)?t===x?null:t:t!=t?null:t}_({color:[0,0,0,0],opacity:0}),c(),c(),new D,new Array(72);export{L as $};