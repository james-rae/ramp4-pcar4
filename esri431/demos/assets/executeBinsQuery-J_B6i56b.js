import { I, a0 as R, cd as t, U, aw as V$1, ch as c, cg as p, a6 as s, gF as R$1, bQ as f, bX as d } from './main-jdFDoOPu.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(t){const e=t.geometry,r=t.toJSON(),i=r;let u,a,l;return null!=e&&(a=e.spatialReference,l=c(a),i.geometryType=p(e),i.geometry=JSON.stringify(e),i.inSR=l),r.outSR?(i.outSR=c(r.outSR),u=t.outSpatialReference):e&&(i.outSR=i.inSR,u=a),i.bin&&=JSON.stringify(i.bin),i.quantizationParameters&&=JSON.stringify(i.quantizationParameters),i.outStatistics&&=JSON.stringify(i.outStatistics),i.outTimeReference&&=JSON.stringify(i.outTimeReference),t.defaultSpatialReference&&s(a,u)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}async function l(t,e,r){return m(t,e,r)}async function m(o,n,s={}){const l="string"==typeof o?I(o):o,m=n.geometry?[n.geometry]:[],f=await R(m,null,{signal:s.signal}),y=f?.[0];null!=y&&((n=n.clone()).geometry=y);const p=t({...l.query,f:"json",...a(n)});return U(V$1(l.path,"queryBins"),{...s,query:{...p,...s.query}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function e(e,i,m){const{data:p}=await l(f(e),R$1.from(i),m);return d.fromJSON(p)}

export { e as executeBinsQuery };
