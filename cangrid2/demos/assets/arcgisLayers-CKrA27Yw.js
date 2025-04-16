const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-DbFRMtBK.js","./preload-helper-dJJaZANz.js","./main-CGBWc59Z.js","./main-CY4W0263.css","./fetchService-BSiheFNT.js","./saveUtils-BK0O4joz.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { d as d$1, s, n as h$1, o as bt, I as I$1, q as g$1 } from './main-CGBWc59Z.js';
import { s as s$1 } from './associatedFeatureServiceUtils-1k47Utu4.js';
import { b as t, i, t as t$1, a } from './fetchService-BSiheFNT.js';

const y={FeatureLayer:!0,SceneLayer:!0};async function f(e){const{properties:r,url:a}=e,t={...r,url:a},s=await w(a,r?.customParameters),{Constructor:l,layerId:o,sourceJSON:n,parsedUrl:c,layers:i,tables:u}=s;if(i.length+u.length===0)return null!=o&&(t.layerId=o),null!=n&&(t.sourceJSON=n),new l(t);const y=new((await __vitePreload(async () => { const {default: __vite_default__} = await import('./GroupLayer-DbFRMtBK.js');return { default: __vite_default__ }},true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url)).default)({title:c.title});return await d(y,s,t),y}function p(e,r){return e?e.find((({id:e})=>e===r)):null}function m(e,r,a,t,s){const l={...s,layerId:r};return null!=e&&(l.url=e),null!=a&&(l.sourceJSON=a),"sublayerTitleMode"in t.prototype&&(l.sublayerTitleMode="service-name"),new t(l)}async function d(e,r,a){const t=r.sublayerConstructorProvider;for(const{id:s,serverUrl:l}of r.layers){const o=p(r.sublayerInfos,s),n=m(l,s,o,(o&&t?.(o))??r.Constructor,a);e.add(n);}if(r.tables.length){const t=await I("FeatureLayer");r.tables.forEach((({id:s,serverUrl:l})=>{const o=m(l,s,p(r.tableInfos,s),t,a);e.tables.add(o);}));}}async function w(r,a){let s$1=d$1(r);if(null==s$1&&(s$1=await v(r,a)),null==s$1)throw new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:l,sublayer:n}=s$1;let i$1;const f={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},p="FeatureServer"===l,m="SceneServer"===l,d={parsedUrl:s$1,Constructor:null,layerId:p||m?n??void 0:void 0,layers:[],tables:[]};switch(l){case"MapServer":if(null!=n){const{type:t$1}=await t(r,{customParameters:a});switch(i$1="FeatureLayer",t$1){case"Catalog Layer":i$1="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new s("arcgis-layers:unsupported",`fromUrl() not supported for "${t$1}" layers`)}}else {i$1=await L(r,a)?"TileLayer":"MapImageLayer";}break;case"ImageServer":{const e=await t(r,{customParameters:a}),{tileInfo:t$1,cacheType:s}=e;i$1=t$1?"LERC"!==t$1?.format?.toUpperCase()||s&&"elevation"!==s.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await t(s$1.url.path,{customParameters:a});if(i$1="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)i$1="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=g$1[e]&&(i$1=g$1[e]);}}break}case"3DTilesServer":throw new s("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(i$1="FeatureLayer",null!=n){const e=await t(r,{customParameters:a});d.sourceJSON=e,i$1=i(e.type);}break;default:i$1=f[l];}if(y[i$1]&&null==n){const e=await b(r,l,a);p&&(d.sublayerInfos=e.layerInfos,d.tableInfos=e.tableInfos);if(1!==e.layers.length+e.tables.length)d.layers=e.layers,d.tables=e.tables,p&&e.layerInfos?.length&&(d.sublayerConstructorProvider=await g(e.layerInfos));else if(p||m){const r=e.layerInfos?.[0]??e.tableInfos?.[0];if(d.layerId=e.layers[0]?.id??e.tables[0]?.id,d.sourceJSON=r,p){const e=r?.type;i$1=i(e);}}}return d.Constructor=await I(i$1),d}async function v(e,t$1){const l=await t(e,{customParameters:t$1});let o=null,n=null;const c=l.type;if("Feature Layer"===c||"Table"===c?(o="FeatureServer",n=l.id??null):"indexedVector"===c?o="VectorTileServer":l.hasOwnProperty("mapName")?o="MapServer":l.hasOwnProperty("bandCount")&&l.hasOwnProperty("pixelSizeX")?o="ImageServer":l.hasOwnProperty("maxRecordCount")&&l.hasOwnProperty("allowGeometryUpdates")?o="FeatureServer":l.hasOwnProperty("streamUrls")?o="StreamServer":S(l)?(o="SceneServer",n=l.id):l.hasOwnProperty("layers")&&S(l.layers?.[0])&&(o="SceneServer"),!o)return null;const i=null!=n?h$1(e):null;return {title:null!=i&&l.name||bt(e),serverType:o,sublayer:n,url:{path:null!=i?i.serviceUrl:I$1(e).path}}}function S(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function b(e,r,a){let t$2,s,l=!1;switch(r){case"FeatureServer":{const r=await t$1(e,{customParameters:a});l=!!r.layersJSON,t$2=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await h(e,a);t$2=r.serviceInfo,s=r.tableServerUrl;break}default:t$2=await t(e,{customParameters:a});}const o=t$2?.layers,c=t$2?.tables;return {layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:s,id:e.id}))).reverse()||[],layerInfos:l?o:[],tableInfos:l?c:[]}}async function h(e,r){const a=await t(e,{customParameters:r}),t$1=a.layers?.[0];if(!t$1)return {serviceInfo:a};try{const{serverUrl:t$1}=await s$1(e),s=await t(t$1,{customParameters:r}).catch((()=>null));return s&&(a.tables=s.tables),{serviceInfo:a,tableServerUrl:t$1}}catch{return {serviceInfo:a}}}async function I(e){return (0, a[e])()}async function L(e,r){return (await t(e,{customParameters:r})).tileInfo}async function g(e){if(!e.length)return;const r=new Set,a=[];for(const{type:l}of e)r.has(l)||(r.add(l),a.push(I(i(l))));const t=await Promise.all(a),s=new Map;return Array.from(r).forEach(((e,r)=>{s.set(e,t[r]);})),e=>s.get(e.type)}

export { f as fromUrl };
