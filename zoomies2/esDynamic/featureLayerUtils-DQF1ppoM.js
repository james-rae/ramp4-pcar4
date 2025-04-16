import{cY as S,cZ as w,c_ as N}from"./main-DyJf3FFo.js";import{P as O,$ as R}from"./utils-AfLqvFtu.js";import{d as x}from"./arcgisLayerUrl-Ch65F_j6.js";import{a as D,b as Y,i as _}from"./fetchService-DnMhkK8i.js";import{l as J,a as d,i as M,u as f,f as l}from"./portalItemUtils-DmXZ9o_3.js";const m="Feature Service",p="feature-layer-utils",$=`${p}-save`,g=`${p}-save-as`;function I(e){return{isValid:S(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function E(e){const r=[],t=[];for(const{layer:a,layerJSON:o}of e)a.isTable?t.push(o):r.push(o);return{layers:r,tables:t}}function T(e){return E([e])}async function F(e,r){return/\/\d+\/?$/.test(e.url)?T(r[0]):G(r,e)}async function G(e,r){if(e.reverse(),!r)return E(e);const t=await K(r,e);for(const a of e)v(a.layer,a.layerJSON,t);return U(t,e),t}async function K(e,r){let t=await e.fetchData("json");if(j(t))return t;t||={},B(t);const{layer:{url:a,customParameters:o,apiKey:n}}=r[0];return await V(t,{url:a??"",customParameters:o,apiKey:n},r.map(s=>s.layer.layerId)),t}function j(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function B(e){e.layers||=[],e.tables||=[]}function U(e,r){const t=[],a=[];for(const{layer:o}of r){const{isTable:n,layerId:s}=o;n?a.push(s):t.push(s)}b(e.layers,t),b(e.tables,a)}function b(e,r){if(e.length<2)return;const t=[];for(const{id:a}of e)t.push(a);w(t.sort(A),r.slice().sort(A))&&e.sort((a,o)=>{const n=r.indexOf(a.id),s=r.indexOf(o.id);return n<s?-1:n>s?1:0})}function A(e,r){return e<r?-1:e>r?1:0}async function V(e,r,t){const{url:a,customParameters:o,apiKey:n}=r,{serviceJSON:s,layersJSON:i}=await D(a,{customParameters:o,apiKey:n}),c=h(e.layers,s.layers,t),u=h(e.tables,s.tables,t);e.layers=c.itemResources,e.tables=u.itemResources;const y=[...c.added,...u.added],P=i?[...i.layers,...i.tables]:[];await Z(e,y,a,P)}function h(e,r,t){const a=N(e,r,(n,s)=>n.id===s.id);e=e.filter(n=>!a.removed.some(s=>s.id===n.id));const o=a.added;return o.forEach(({id:n})=>{e.push({id:n})}),{itemResources:e,added:o.filter(({id:n})=>!t.includes(n))}}async function Z(e,r,t,a){const o=await k(r),n=r.map(({id:s,type:i})=>new(o.get(i))({url:t,layerId:s,sourceJSON:a.find(({id:c})=>c===s)}));await Promise.allSettled(n.map(s=>s.load())),n.forEach(s=>{const{layerId:i,loaded:c,defaultPopupTemplate:u}=s;if(!c||u==null)return;const y={id:i,popupInfo:u.toJSON()};s.operationalLayerType!=="ArcGISFeatureLayer"&&(y.layerType=s.operationalLayerType),v(s,y,e)})}async function k(e){const r=[];e.forEach(({type:o})=>{const n=_(o),s=Y[n];r.push(s())});const t=await Promise.all(r),a=new Map;return e.forEach(({type:o},n)=>{a.set(o,t[n])}),a}function v(e,r,t){e.isTable?L(t.tables,r):L(t.layers,r)}function L(e,r){const t=e.findIndex(({id:a})=>a===r.id);t===-1?e.push(r):e[t]=r}function q(e,r){const t=e.layers.some(a=>a.layerType==="OrientedImageryLayer");f(r,l.ORIENTED_IMAGERY_LAYER,t)}function z(e,r){const t=e.some(a=>a.type==="oriented-imagery");f(r,l.ORIENTED_IMAGERY_LAYER,t)}async function C(e,r,t){q(t,r)}async function X(e,r){const{url:t,layerId:a,title:o,fullExtent:n,isTable:s}=e,i=x(t);r.url=(i?.serverType==="FeatureServer"?t:`${t}/${a}`)??null,r.title||=o,r.extent=null,s||n==null||(r.extent=await J(n)),d(r,l.METADATA),d(r,l.MULTI_LAYER),M(r,l.SINGLE_LAYER),f(r,l.TABLE,s),z([e],r)}async function H(e,r){return O({layer:e,itemType:m,validateLayer:I,createItemData:(t,a)=>F(a,[t]),errorNamePrefix:$,setItemProperties:C},r)}async function Q(e,r,t){return R({layer:e,itemType:m,validateLayer:I,createItemData:(a,o)=>Promise.resolve(T(a)),errorNamePrefix:g,newItem:r,setItemProperties:X},t)}export{H as save,Q as saveAs};
