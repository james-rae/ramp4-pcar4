import{f}from"./utils-38kRF6MD.js";import{I as l,a4 as c,bL as y,bA as s,aV as S,bj as R}from"./main-CcTJZah4.js";import{R as g}from"./normalizeUtils-Bg7D-T7i.js";import{t as d}from"./query-BOs8Ywka.js";import{c as x}from"./AttributeBinsFeatureSet-BJKiK9x1.js";import J from"./AttributeBinsQuery-e2l8_6l5.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtilsCommon-DsrTeGXA.js";import"./utils-C0gkSWhl.js";import"./pbfQueryUtils-CAoJJs_4.js";import"./pbf-B1cxttYy.js";import"./memoryEstimations-0WvAqt4K.js";import"./OptimizedFeature-BJjYcmbm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-DXDtsMeP.js";import"./projection-nLxG4Uci.js";import"./projectBuffer-DwB7xYJN.js";import"./FeatureSet-xTHFBdFq.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";import"./queryUtils-B8or6zpZ.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-BUjYp4xp.js";import"./NormalizationBinParametersMixin-C4xCbnZX.js";import"./Query-CotcSkQi.js";import"./TimeExtent-C9S2Kh-G.js";import"./timeZoneUtils-ZVFmM1ie.js";function N(r){const e=r.geometry,i=r.toJSON(),t=i;let n,o,m;if(e!=null&&(o=e.spatialReference,m=s(o),t.geometryType=S(e),t.geometry=JSON.stringify(e),t.inSR=m),i.outSR?(t.outSR=s(i.outSR),n=r.outSpatialReference):e&&(t.outSR=t.inSR,n=o),t.bin&&=JSON.stringify(t.bin),t.quantizationParameters&&=JSON.stringify(t.quantizationParameters),t.outStatistics&&=JSON.stringify(t.outStatistics),t.outTimeReference&&=JSON.stringify(t.outTimeReference),i.timeExtent){const u=i.timeExtent,{start:a,end:p}=u;a==null&&p==null||(t.time=a===p?a:`${a??"null"},${p??"null"}`),delete i.timeExtent}return r.defaultSpatialReference&&R(o,n)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function O(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await b(r,e,i)}async function b(r,e,i={}){const t=typeof r=="string"?l(r):r,n=e.geometry?[e.geometry]:[],o=await g(n,null,{signal:i.signal}),m=o?.[0];m!=null&&((e=e.clone()).geometry=m);const u=d({...t.query,f:"json",...N(e)});return c(y(t.path,"queryBins"),{...i,query:{...u,...i.query}})}async function Y(r,e,i){const{data:t}=await O(f(r),J.from(e),i);return x.fromJSON(t)}export{Y as executeAttributeBinsQuery};
