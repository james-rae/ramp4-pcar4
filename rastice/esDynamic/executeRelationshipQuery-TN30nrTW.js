import{U as m,bo as j,bi as l}from"./main-CvsyIoCL.js";import{t as p}from"./query-Bnww9Pn6.js";import{d as R}from"./FeatureSet-DxgFy-Vy.js";import{d as f}from"./RelationshipQuery-BQkjr2lc.js";function b(r,o){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!o?.returnCountOnly?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=j(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function F(r,o,e){const n=await y(r,o,e),t=n.data,s=t.geometryType,a=t.spatialReference,c={};for(const d of t.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!t.hasZ,hasM:!!t.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=u;else for(const i of Object.keys(d))i!=="relatedRecords"&&(c[d[i]]=u)}return{...n,data:c}}async function h(r,o,e){const n=await y(r,o,e,{returnCountOnly:!0}),t=n.data,s={};for(const a of t.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,o,e={},n){const t=p({...r.query,f:"json",...n,...b(o,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...t}})}async function S(r,o,e){o=f.from(o);const n=l(r);return F(n,o,e).then(t=>{const s=t.data,a={};return Object.keys(s).forEach(c=>a[c]=R.fromJSON(s[c])),a})}async function I(r,o,e){o=f.from(o);const n=l(r);return h(n,o,{...e}).then(t=>t.data)}export{S as executeRelationshipQuery,I as executeRelationshipQueryForCount};
