import{k as c,V as f,o as u,_ as e}from"./main-CcTJZah4.js";async function A(n,t){return await n.load(),d(n,t)}async function d(n,t){const i=[],r=(...o)=>{for(const a of o)a!=null&&(Array.isArray(a)?r(...a):f.isCollection(a)?a.forEach(s=>r(s)):u.isLoadable(a)&&i.push(a))};t(r);let l=null;if(await c(i,async o=>{const a=await e(y(o)?o.loadAll():o.load());a.ok!==!1||l||(l=a)}),l)throw l.error;return n}function y(n){return"loadAll"in n&&typeof n.loadAll=="function"}export{d as a,A as t};
