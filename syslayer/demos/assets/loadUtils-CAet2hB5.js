import{t as i,i as o}from"./fetchService-DlBGyaO7.js";import{s as y}from"./associatedFeatureServiceUtils-DrTq3qqO.js";class p{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await i(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function u(e){const t={id:e.id,name:e.name},a=o(e.type);return a!=="FeatureLayer"&&(t.layerType=a),t}async function b(e,t,a){if(e?.layers==null||e?.tables==null){const r=await a.fetchServiceMetadata(t,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(u),e.tables=e.tables||r?.tables?.map(u)}return e}function l(e){if(!e)return null;const{layers:t,tables:a}=e;return t?.length?t[0]:a?.length?a[0]:null}function h(e,t){return t==null?null:[...e.layers||[],...e.tables||[]].find(a=>a.id===t)}function d(e,t){return[...e.layers||[],...e.tables||[]].filter(({layerType:a})=>a?t.includes(a):t.includes("ArcGISFeatureLayer"))}function g(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function L(e){switch(e){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function w(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function S(e,t,a){if(!e?.url)return t??{};if(t??={},!t.layers){const n=await a.fetchServiceMetadata(e.url);t.layers=n.layers?.map(u)}const{serverUrl:r,portalItem:s}=await y(e.url,{sceneLayerItem:e,customParameters:l(t)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const n=await s.fetchData().catch(()=>null);if(n?.tables)t.tables=n.tables.map(u);else{const c=await a.fetchServiceMetadata(r,{customParameters:l(n)?.customParameters}).catch(()=>null);t.tables=c?.tables?.map(u)}}if(t.tables)for(const n of t.tables)n.url=`${r}/${n.id}`;return t}export{b as a,L as c,p as e,w as i,l,d as n,S as o,h as s,u as t,g as u};
