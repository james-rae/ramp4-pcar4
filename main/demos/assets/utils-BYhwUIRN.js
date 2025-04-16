import{b as P,s as c}from"./main-C45WTWFO.js";import{i as d}from"./originUtils-CPX8CCAY.js";import h from"./PortalItem-BWasU-9O.js";import{o as x}from"./jsonContext-Diga-tYt.js";import{i as N,f as S}from"./portalItemUtils-CpgfsoE_.js";import{t as b}from"./saveUtils-DYlTezXp.js";function g(e,r,a){const t=a(e);if(!t.isValid)throw new c(`${r}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:r,errorNamePrefix:a,validateLayer:t}=e;await r.load(),g(r,a,t)}function u(e,r){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`}function w(e){const{item:r,errorNamePrefix:a,layer:t,validateItem:i}=e;if(O(e),i){const n=i(r);if(!n.isValid)throw new c(`${a}:invalid-parameters`,n.errorMessage,{layer:t})}}function O(e){const{item:r,itemType:a,additionalItemType:t,errorNamePrefix:i,layer:n}=e,s=[a];if(t&&s.push(t),!s.includes(r.type)){const p=s.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:r,layer:n})}}function J(e){const{layer:r,errorNamePrefix:a}=e,{portalItem:t}=r;if(!t)throw new c(`${a}:portal-item-not-set`,u(r,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${a}:portal-item-not-loaded`,u(r,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function E(e){const{newItem:r,itemType:a}=e;let t=h.from(r);return t.id&&(t=t.clone(),t.id=null),t.type??=a,t.portal??=P.getDefault(),w({...e,item:t}),t}function I(e){return x(e,"portal-item")}async function $(e,r,a){"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},r);return await Promise.all(r.resources?.pendingOperations??[]),b(r,{errorName:"layer-write:unsupported"},a),t}function v(e){N(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((r,a,t)=>t.indexOf(r)===a))}async function U(e,r,a){const t=e.portal;await t.signIn(),await t.user.addItem({item:e,data:r,folder:a?.folder})}async function R(e,r){const{layer:a,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e),J(e);const o=a.portalItem,l=i?i(o):I(o),f=await $(a,l,{...r,supplementalUnsupportedErrors:p}),m=await t({layer:a,layerJSON:f},o);return await n?.(a,o,m),v(o),await o.update({data:m}),d(l),await s?.(o,l),o}async function V(e,r){const{layer:a,createItemData:t,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await y(e);const o=E(e),l=i?i(o):I(o),f=await $(a,l,{...r,supplementalUnsupportedErrors:p}),m=await t({layer:a,layerJSON:f},o);return await n(a,o,m),v(o),await U(o,m,r),a.portalItem=o,d(l),await s?.(o,l),o}export{V as $,v as I,R as P,E as d,J as f,u as m,g as p,U as v,$ as w,I as y};
