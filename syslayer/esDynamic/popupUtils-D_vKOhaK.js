import{de as c,aZ as h}from"./main-DZMdXZ8-.js";async function I(e,n=e.popupTemplate){if(n==null)return[];const a=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=n,{objectIdField:p,typeIdField:u,globalIdField:d,relationships:s}=e;if(a.includes("*"))return["*"];const f=o?c(e):[],l=h(e.fieldsIndex,[...a,...f]);return u&&l.push(u),l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p),l&&d&&e.fieldsIndex?.has(d)&&!l.includes(d)&&l.push(d),s&&s.forEach(r=>{const{keyField:t}=r;l&&t&&e.fieldsIndex?.has(t)&&!l.includes(t)&&l.push(t)}),l}function i(e,n){return e.popupTemplate?e.popupTemplate:n!=null&&n.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}function m(e,n){return i(e,{defaultPopupTemplateEnabled:n})!=null}export{I as n,i as p,m as u};
