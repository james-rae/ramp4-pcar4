import{dh as r,a$ as c}from"./main-CcTJZah4.js";async function I(e,u=e.popupTemplate){if(u==null)return[];const a=await u.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=u,{objectIdField:d,typeIdField:n,globalIdField:t,relationships:s}=e;if(a.includes("*"))return["*"];const o=i?r(e):[],l=c(e.fieldsIndex,[...a,...o]);return n&&l.push(n),l&&d&&e.fieldsIndex?.has(d)&&!l.includes(d)&&l.push(d),l&&t&&e.fieldsIndex?.has(t)&&!l.includes(t)&&l.push(t),s&&s.forEach(f=>{const{keyField:p}=f;l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p)}),l}function h(e,u){return e.popupTemplate?e.popupTemplate:u!=null&&u.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function T(e,u){return h(e,{defaultPopupTemplateEnabled:u})!=null}export{I as n,h as p,T as u};
