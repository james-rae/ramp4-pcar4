import{f as u}from"./utils-BcXZRZfk.js";import{I as s,U as f,a1 as y,bp as a,aY as c,bj as S}from"./main-BxgY9rsH.js";import{R as l}from"./normalizeUtils-CDWFGYLp.js";import{t as R}from"./query-DxIYqBWB.js";import g from"./BinsQuery-DqzPVK9P.js";import{d as J}from"./FeatureSet-BCtQJPAQ.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtilsCommon-fjqoXs3F.js";import"./utils-Bg1Av-fZ.js";import"./pbfQueryUtils-C0cZy00B.js";import"./pbf-DgO7b-qM.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-DRSgTWp8.js";import"./projection-DMFhF-YC.js";import"./projectBuffer-DIzlXyWh.js";import"./queryUtils-DaAZpYzn.js";import"./json-Wa8cmqdu.js";import"./Query-BUGEVyQ0.js";import"./Field-BV6jxk4Y.js";import"./fieldType-CDehaUIf.js";import"./TimeExtent-nXn1Yp-A.js";function N(e){const r=e.geometry,i=e.toJSON(),t=i;let n,o,m;return r!=null&&(o=r.spatialReference,m=a(o),t.geometryType=c(r),t.geometry=JSON.stringify(r),t.inSR=m),i.outSR?(t.outSR=a(i.outSR),n=e.outSpatialReference):r&&(t.outSR=t.inSR,n=o),t.bin&&=JSON.stringify(t.bin),t.quantizationParameters&&=JSON.stringify(t.quantizationParameters),t.outStatistics&&=JSON.stringify(t.outStatistics),t.outTimeReference&&=JSON.stringify(t.outTimeReference),e.defaultSpatialReference&&S(o,n)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function O(e,r,i){return d(e,r,i)}async function d(e,r,i={}){const t=typeof e=="string"?s(e):e,n=r.geometry?[r.geometry]:[],o=await l(n,null,{signal:i.signal}),m=o?.[0];m!=null&&((r=r.clone()).geometry=m);const p=R({...t.query,f:"json",...N(r)});return f(y(t.path,"queryBins"),{...i,query:{...p,...i.query}})}async function F(e,r,i){const{data:t}=await O(u(e),g.from(r),i);return J.fromJSON(t)}export{F as executeBinsQuery};
