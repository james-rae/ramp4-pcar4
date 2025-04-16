import{s as u,b as S}from"./main-DyJf3FFo.js";import{d as T}from"./arcgisLayerUrl-Ch65F_j6.js";import{t as L,b as v,a as F}from"./fetchService-DnMhkK8i.js";import{l as p,a as M,o as P,u as d,t as f,c as G,n as x,i as D,e as m}from"./portalLayers-CV9ZknZf.js";import{populateGroupLayer as k}from"./layersCreator-eF3i9D18.js";import{e as w}from"./jsonContext-BHSNnI0s.js";import{s as A}from"./portalItemUtils-DmXZ9o_3.js";import{t as C}from"./styleUtils-CprvDeyB.js";async function E(t,a){const r=t.instance.portalItem;if(r?.id)return await r.load(a),O(t),t.validateItem&&t.validateItem(r),R(t,a)}function O(t){const a=t.instance.portalItem;if(!a?.type||!t.supportedTypes.includes(a.type))throw new u("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:t.supportedTypes.join(", ")})}async function R(t,a){const r=t.instance,e=r.portalItem;if(!e)return;const{url:o,title:s}=e,n=w(e,"portal-item");if(r.type==="group")return j(r,n,t);o&&r.type!=="media"&&r.read({url:o},n);const l=new m,i=await I(t,l,a);return i&&r.read(i,n),r.resourceReferences={portalItem:e,paths:n.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:s},n),C(r,n)}async function j(t,a,r){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:o,type:s}=e;if(s==="Group Layer"){if(!A(e,"Map"))throw new u("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return J(t)}return t.read({title:o},a),N(t,r)}async function J(t){const a=t.portalItem,r=await a.fetchData("json");if(!r)return;const e=w(a,"web-map");t.read(r,e),await k(t,r,{context:e}),t.resourceReferences={portalItem:a,paths:e.readResourcePaths??[]}}async function N(t,a){let r;const{portalItem:e}=t;if(!e)return;const o=e.type,s=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=s.FeatureLayer;break;case"Stream Service":r=s.StreamLayer;break;case"Scene Service":r=s.SceneLayer;break;default:throw new u("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const n=new m;let[l,i]=await Promise.all([r(),I(a,n)]),c=()=>l;if(o==="Feature Service"){const b=p(i)?.customParameters;i=e.url?await M(i,e.url,n):{},c=await Q(i,s)||c;const g=await K(e.url,{customParameters:b,loadContext:n});return await y(t,c,i,g)}return o==="Scene Service"&&e.url&&(i=await P(e,i,n)),d(i)>0?await y(t,c,i):await $(t,c)}async function $(t,a){const{portalItem:r}=t;if(!r?.url)return;const e=await L(r.url);e&&y(t,a,{layers:e.layers?.map(f),tables:e.tables?.map(f)})}async function y(t,a,r,e){let o=r.layers||[];const s=r.tables||[];if(t.portalItem?.type==="Feature Collection"?(o.forEach((n,l)=>{n.id=l,n?.layerDefinition?.type==="Table"&&s.push(n)}),o=o.filter(n=>n?.layerDefinition?.type!=="Table")):(o.reverse(),s.reverse()),o.forEach(n=>{const l=e?.(n);if(l||!e){const i=h(t,a(n),r,n,l);t.add(i)}}),s.length){const n=await v.FeatureLayer();s.forEach(l=>{const i=e?.(l);if(i||!e){const c=h(t,n,r,l,i);t.tables.add(c)}})}}function h(t,a,r,e,o){const s=t.portalItem,n={portalItem:s.clone(),layerId:e.id};e.url!=null&&(n.url=e.url);const l=new a(n);if("sourceJSON"in l&&(l.sourceJSON=o),l.type!=="subtype-group"&&l.type!=="catalog"&&(l.sublayerTitleMode="service-name"),s.type==="Feature Collection"){const i={origin:"portal-item",portal:s.portal||S.getDefault()};l.read(e,i);const c=r.showLegend;c!=null&&l.read({showLegend:c},i)}return l}async function I(t,a,r){if(t.supportsData===!1)return;const e=t.instance,o=e.portalItem;if(!o)return;let s=null;try{s=await o.fetchData("json",r)}catch{}if(B(e)){let n=null;const l=await q(o,s,a);if((s?.layers||s?.tables)&&l>0){if(e.layerId==null){const i=G(e.type),c=i?x(s,i)[0]:p(s);c&&(e.layerId=c.id)}n=z(s,e),n?.layerType==="OrientedImageryLayer"&&e.type==="oriented-imagery"&&e.supportedSourceTypes.add("Feature Layer"),n&&s.showLegend!=null&&(n.showLegend=s.showLegend)}return l>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),n}return s}async function q(t,a,r){if(a?.layers&&a?.tables)return d(a);const e=T(t.url);if(!e)return 1;const o=await r.fetchServiceMetadata(e.url.path,{customParameters:p(a)?.customParameters}).catch(()=>null);return(a?.layers?.length??o?.layers?.length??0)+(a?.tables?.length??o?.tables?.length??0)}function z(t,a){const{layerId:r}=a,e=t.layers?.find(o=>o.id===r)||t.tables?.find(o=>o.id===r);return e&&H(e,a)?e:null}function B(t){return t.type!=="stream"&&"layerId"in t}function H(t,a){const r="layerType"in t&&t.layerType,{type:e}=a;return!(e==="feature"&&r&&t.layerType!=="ArcGISFeatureLayer"||e==="catalog"&&!r||e==="oriented-imagery"&&!r||e==="subtype-group"&&!r)}async function K(t,a){const{layersJSON:r}=await F(t,a);if(!r)return null;const e=[...r.layers,...r.tables];return o=>e.find(s=>s.id===o.id)}async function Q(t,a){const{layers:r}=t;if(!r?.length)return;const e=new Set,o=[];for(const{layerType:l}of r){const i=l??"ArcGISFeatureLayer";if(e.has(i))continue;e.add(i);const c=a[D(i)];o.push(c())}const s=await Promise.all(o),n=new Map;return Array.from(e).forEach((l,i)=>{n.set(l,s[i])}),({layerType:l})=>{const i=l??"ArcGISFeatureLayer";return n.get(i)}}export{E as load};
