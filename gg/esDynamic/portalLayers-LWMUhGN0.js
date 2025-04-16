import{s as S,bK as m}from"./main-DTtQVgOw.js";import{s as h}from"./associatedFeatureServiceUtils-Q0EZM2Lc.js";import{i as I}from"./fetchService-DglDHCd7.js";import{l as y,u as f,a as v,s as M,i as g,o as T,e as C}from"./loadUtils-CVjolCfL.js";import{a as G}from"./lazyLayerLoader-RnFUQYbg.js";import w from"./PortalItem-C7yLXxDn.js";import{s as p}from"./portalItemUtils-BEgLtkVw.js";async function P(e){let{portalItem:a}=e;!a||a instanceof w||(a=new w(a));const r=await b(a);return new r.constructor({portalItem:a,...r.properties})}async function b(e){await e.load();const a=new C;return K(await L(e,a))}async function L(e,a){switch(e.type){case"3DTiles Service":return e.typeKeywords.includes("3DObject")?$():x();case"CSV":return U();case"Feature Collection":return D(e);case"Feature Service":return W(e,a);case"Feed":return H();case"GeoJson":return k();case"Group Layer":return Q();case"Image Service":return O(e,a);case"KML":return A();case"Knowledge Graph Layer":return R();case"Map Service":return F(e,a);case"Media Layer":return X();case"Scene Service":return j(e,a);case"Stream Service":return V();case"Vector Tile Service":return J();case"WCS":return E();case"WFS":return q();case"WMS":return z();case"WMTS":return B();default:throw new S("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function K(e){const a=e.className,r=G[a];return{constructor:await r(),properties:e.properties}}async function F(e,a){return await Y(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function W(e,a){const r=await N(e,a);if(typeof r=="object"){const{sourceJSON:t,className:n}=r,c={sourceJSON:t};return r.id!=null&&(c.layerId=r.id),{className:n||"FeatureLayer",properties:c}}return{className:"GroupLayer"}}async function j(e,a){const r=await N(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:t}=await h(e.url,{sceneLayerItem:e});return(await a.fetchServiceMetadata(t))?.tables??[]}catch{return[]}});if(typeof r=="object"){const t={};let n;if(r.id!=null?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length){for(const s of Object.keys(m))if(e.typeKeywords.includes(s))return{className:m[s]}}const c=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,s=>y(s)?.customParameters)});return{className:m[c?.layerType]||"SceneLayer",properties:t}}return r===!1&&(await a.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function D(e){await e.load();const a=p(e,"Map Notes"),r=p(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return f(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function O(e,a){await e.load();const r=e.typeKeywords?.map(l=>l.toLowerCase())??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if(n==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(n==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=c.cacheType?.toLowerCase(),u=c.capabilities?.toLowerCase().includes("tilesonly"),i=c.tileInfo?.format?.toLowerCase()??"",o=s==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return s==="map"||o||u?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function V(){return{className:"StreamLayer"}}function J(){return{className:"VectorTileLayer"}}function k(){return{className:"GeoJSONLayer"}}function x(){return{className:"IntegratedMesh3DTilesLayer"}}function $(){return{className:"UnsupportedLayer"}}function U(){return{className:"CSVLayer"}}function A(){return{className:"KMLLayer"}}function R(){return{className:"KnowledgeGraphLayer"}}function E(){return{className:"WCSLayer"}}function q(){return{className:"WFSLayer"}}function z(){return{className:"WMSLayer"}}function B(){return{className:"WMTSLayer"}}function H(){return{className:"StreamLayer"}}function Q(){return{className:"GroupLayer"}}function X(){return{className:"MediaLayer"}}async function Y(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function N(e,a,r){const{url:t,type:n}=e,c=n==="Feature Service";if(!t)return{};if(/\/\d+$/.test(t)){if(c){const i=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,o=>y(o)?.customParameters)});return{id:i.id,className:I(i.type),sourceJSON:i}}return{}}await e.load();let s=await a.fetchItemData(e);if(c){const i=await v(s,t,a),o=d(i);if(typeof o=="object"){const l=M(i,o.id);o.className=g(l?.layerType)}return o}if(n==="Scene Service"&&(s=await T(e,s,a)),f(s)>0)return d(s);const u=await a.fetchServiceMetadata(t);return r&&(u.tables=await r()),d(u)}function d(e){return f(e)===1&&{id:y(e)?.id}}export{P as fromItem,L as selectLayerClassPath};
