import{s as P,bE as p}from"./main-CvsyIoCL.js";import{s as S}from"./associatedFeatureServiceUtils-B1JJuS3F.js";import{t as T,i as h,b as C}from"./fetchService-D2gzD11i.js";import N from"./PortalItem-BnAblOC3.js";import{s as d}from"./portalItemUtils-DiteebIM.js";class g{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(a,r){const t=this._serviceMetadatas.get(a);if(t)return t;const s=await T(a,r);return this._serviceMetadatas.set(a,s),s}async fetchItemData(a){const{id:r}=a;if(!r)return null;const{_itemDatas:t}=this;if(t.has(r))return t.get(r);const s=await a.fetchData();return t.set(r,s),s}async fetchCustomParameters(a,r){const t=await this.fetchItemData(a);return t&&typeof t=="object"&&(r?r(t):t.customParameters)||null}}function l(e){const a={id:e.id,name:e.name},r=h(e.type);return r!=="FeatureLayer"&&(a.layerType=r),a}async function b(e,a,r){if(e?.layers==null||e?.tables==null){const t=await r.fetchServiceMetadata(a,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(l),e.tables=e.tables||t?.tables?.map(l)}return e}function o(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function G(e,a){return a==null?null:[...e.layers||[],...e.tables||[]].find(r=>r.id===a)}function F(e,a){return[...e.layers||[],...e.tables||[]].filter(({layerType:r})=>r?r===a:a==="ArcGISFeatureLayer")}function m(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function D(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function I(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function v(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const n=await r.fetchServiceMetadata(e.url);a.layers=n.layers?.map(l)}const{serverUrl:t,portalItem:s}=await S(e.url,{sceneLayerItem:e,customParameters:o(a)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(t==null)return a.tables=[],a;if(!a.tables&&s){const n=await s.fetchData().catch(()=>null);if(n?.tables)a.tables=n.tables.map(l);else{const c=await r.fetchServiceMetadata(t,{customParameters:o(n)?.customParameters}).catch(()=>null);a.tables=c?.tables?.map(l)}}if(a.tables)for(const n of a.tables)n.url=`${t}/${n.id}`;return a}async function O(e){let{portalItem:a}=e;!a||a instanceof N||(a=new N(a));const r=await j(a);return new r.constructor({portalItem:a,...r.properties})}async function j(e){await e.load();const a=new g;return _(await L(e,a))}async function L(e,a){switch(e.type){case"3DTiles Service":return U();case"CSV":return E();case"Feature Collection":return $(e);case"Feature Service":return V(e,a);case"Feed":return Q();case"GeoJson":return A();case"Group Layer":return X();case"Image Service":return J(e,a);case"KML":return R();case"Knowledge Graph Layer":return z();case"Map Service":return K(e,a);case"Media Layer":return Y();case"Scene Service":return W(e,a);case"Stream Service":return k();case"Vector Tile Service":return x();case"WFS":return q();case"WMS":return B();case"WMTS":return H();default:throw new P("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function _(e){const a=e.className,r=C[a];return{constructor:await r(),properties:e.properties}}async function K(e,a){return await Z(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function V(e,a){const r=await M(e,a);if(typeof r=="object"){const{sourceJSON:t,className:s}=r,n={sourceJSON:t};return r.id!=null&&(n.layerId=r.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function W(e,a){const r=await M(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:t}=await S(e.url,{sceneLayerItem:e});return(await a.fetchServiceMetadata(t))?.tables??[]}catch{return[]}});if(typeof r=="object"){const t={};let s;if(r.id!=null?(t.layerId=r.id,s=`${e.url}/layers/${r.id}`):s=e.url,e.typeKeywords?.length){for(const c of Object.keys(p))if(e.typeKeywords.includes(c))return{className:p[c]}}const n=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,c=>o(c)?.customParameters)});return{className:p[n?.layerType]||"SceneLayer",properties:t}}return r===!1&&(await a.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function $(e){await e.load();const a=d(e,"Map Notes"),r=d(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(d(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return m(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function J(e,a){await e.load();const r=e.typeKeywords?.map(f=>f.toLowerCase())??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),s=t?.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),c=n.cacheType?.toLowerCase(),y=n.capabilities?.toLowerCase().includes("tilesonly"),u=n.tileInfo?.format?.toLowerCase()??"",i=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(u);return c==="map"||i||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function k(){return{className:"StreamLayer"}}function x(){return{className:"VectorTileLayer"}}function A(){return{className:"GeoJSONLayer"}}function U(){return{className:"IntegratedMesh3DTilesLayer"}}function E(){return{className:"CSVLayer"}}function R(){return{className:"KMLLayer"}}function z(){return{className:"KnowledgeGraphLayer"}}function q(){return{className:"WFSLayer"}}function B(){return{className:"WMSLayer"}}function H(){return{className:"WMTSLayer"}}function Q(){return{className:"StreamLayer"}}function X(){return{className:"GroupLayer"}}function Y(){return{className:"MediaLayer"}}async function Z(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function M(e,a,r){const{url:t,type:s}=e,n=s==="Feature Service";if(!t)return{};if(/\/\d+$/.test(t)){if(n){const u=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,i=>o(i)?.customParameters)});return{id:u.id,className:h(u.type),sourceJSON:u}}return{}}await e.load();let c=await a.fetchItemData(e);if(n){const u=await b(c,t,a),i=w(u);if(typeof i=="object"){const f=G(u,i.id);i.className=I(f?.layerType)}return i}if(s==="Scene Service"&&(c=await v(e,c,a)),m(c)>0)return w(c);const y=await a.fetchServiceMetadata(t);return r&&(y.tables=await r()),w(y)}function w(e){return m(e)===1&&{id:o(e)?.id}}const ee=Object.freeze(Object.defineProperty({__proto__:null,fromItem:O,selectLayerClassPath:L},Symbol.toStringTag,{value:"Module"}));export{L,b as a,D as c,g as e,I as i,o as l,F as n,v as o,ee as p,l as t,m as u};
