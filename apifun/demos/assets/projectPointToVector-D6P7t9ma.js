import{aK as o}from"./main-CcTJZah4.js";import{L as s,I as c,Q as p}from"./projection-nLxG4Uci.js";import{o as m}from"./projectBuffer-DwB7xYJN.js";function u(r,n,t,e){if(s(r.spatialReference,t)){f[0]=r.x,f[1]=r.y;const i=r.z;return f[2]=i??e??0,m(f,r.spatialReference,0,n,t,0)}const a=c(r,t);return!!a&&(n[0]=a?.x,n[1]=a?.y,n[2]=a?.z??e??0,!0)}async function R(r,n,t,e,a){return await p(r.spatialReference,t,null,a),u(r,n,t,e)}const f=o();export{u as c,R as i};
