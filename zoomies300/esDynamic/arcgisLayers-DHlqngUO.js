import{s as m,bA as I,I as g,bB as v}from"./main-DqYc2eZZ.js";import{d as L,h as P}from"./arcgisLayerUrl-DsOKnOmO.js";import{s as O}from"./associatedFeatureServiceUtils-Rb8jX4fz.js";import{t as f,i as d,a as T,b as U}from"./fetchService-5yfIV5LG.js";const C={FeatureLayer:!0,SceneLayer:!0};async function F(r){const{properties:s,url:e}=r,t={...s,url:e},l=await J(e,s?.customParameters),{Constructor:a,layerId:o,sourceJSON:c,parsedUrl:i,layers:u,tables:n}=l;if(u.length+n.length===0)return o!=null&&(t.layerId=o),c!=null&&(t.sourceJSON=c),new a(t);const y=new(await import("./GroupLayer-Dpg-05nW.js")).default({title:i.title});return await N(y,l,t),y}function S(r,s){return r?r.find(({id:e})=>e===s):null}function b(r,s,e,t,l){const a={...l,layerId:s};return r!=null&&(a.url=r),e!=null&&(a.sourceJSON=e),"sublayerTitleMode"in t.prototype&&(a.sublayerTitleMode="service-name"),new t(a)}async function N(r,s,e){const t=s.sublayerConstructorProvider;for(const{id:l,serverUrl:a}of s.layers){const o=S(s.sublayerInfos,l),c=b(a,l,o,(o&&t?.(o))??s.Constructor,e);r.add(c)}if(s.tables.length){const l=await w("FeatureLayer");s.tables.forEach(({id:a,serverUrl:o})=>{const c=b(o,a,S(s.tableInfos,a),l,e);r.tables.add(c)})}}async function J(r,s){let e=L(r);if(e==null&&(e=await V(r,s)),e==null)throw new m("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:t,sublayer:l}=e;let a;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=t==="FeatureServer",i=t==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?l??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":if(l!=null){const{type:n}=await f(r,{customParameters:s});switch(a="FeatureLayer",n){case"Catalog Layer":a="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new m("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else a=await M(r,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await f(r,{customParameters:s}),{tileInfo:y,cacheType:p}=n;a=y?y?.format?.toUpperCase()!=="LERC"||p&&p.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await f(e.url.path,{customParameters:s});if(a="SceneLayer",n){const y=n?.layers;if(n?.layerType==="Voxel")a="VoxelLayer";else if(y?.length){const p=y[0]?.layerType;p!=null&&v[p]!=null&&(a=v[p])}}break}case"3DTilesServer":throw new m("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(a="FeatureLayer",l!=null){const n=await f(r,{customParameters:s});u.sourceJSON=n,a=d(n.type)}break;default:a=o[t]}if(C[a]&&l==null){const n=await k(r,t,s);if(c&&(u.sublayerInfos=n.layerInfos,u.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)u.layers=n.layers,u.tables=n.tables,c&&n.layerInfos?.length&&(u.sublayerConstructorProvider=await E(n.layerInfos));else if(c||i){const y=n.layerInfos?.[0]??n.tableInfos?.[0];if(u.layerId=n.layers[0]?.id??n.tables[0]?.id,u.sourceJSON=y,c){const p=y?.type;a=d(p)}}}return u.Constructor=await w(a),u}async function V(r,s){const e=await f(r,{customParameters:s});let t=null,l=null;const a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",l=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":h(e)?(t="SceneServer",l=e.id):e.hasOwnProperty("layers")&&h(e.layers?.[0])&&(t="SceneServer"),!t)return null;const o=l!=null?P(r):null;return{title:o!=null&&e.name||I(r),serverType:t,sublayer:l,url:{path:o!=null?o.serviceUrl:g(r).path}}}function h(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function k(r,s,e){let t,l,a=!1;switch(s){case"FeatureServer":{const i=await T(r,{customParameters:e});a=!!i.layersJSON,t=i.layersJSON||i.serviceJSON;break}case"SceneServer":{const i=await x(r,e);t=i.serviceInfo,l=i.tableServerUrl;break}default:t=await f(r,{customParameters:e})}const o=t?.layers,c=t?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:l,id:i.id})).reverse()||[],layerInfos:a?o:[],tableInfos:a?c:[]}}async function x(r,s){const e=await f(r,{customParameters:s});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:t}=await O(r),l=await f(t,{customParameters:s}).catch(()=>null);return l&&(e.tables=l.tables),{serviceInfo:e,tableServerUrl:t}}catch{return{serviceInfo:e}}}async function w(r){return(0,U[r])()}async function M(r,s){return(await f(r,{customParameters:s})).tileInfo}async function E(r){if(!r.length)return;const s=new Set,e=[];for(const{type:a}of r)s.has(a)||(s.add(a),e.push(w(d(a))));const t=await Promise.all(e),l=new Map;return Array.from(s).forEach((a,o)=>{l.set(a,t[o])}),a=>l.get(a.type)}export{F as fromUrl};
