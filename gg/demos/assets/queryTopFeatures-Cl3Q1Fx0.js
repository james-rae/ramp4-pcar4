import{I as c,a4 as p,bK as F,aV as f,bA as d}from"./main-BnINupoD.js";import{R as E}from"./normalizeUtils-DNVOrS5x.js";import{t as x}from"./query-Bxh4sFiA.js";import{t as j}from"./queryZScale-SGlBKaWR.js";const a="Layer does not support extent calculation.";function O(o,r){const n=o.geometry,t=o.toJSON(),e=t;if(n!=null&&(e.geometry=JSON.stringify(n),e.geometryType=f(n),e.inSR=d(n.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=d(t.outSR):n&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const s=t.timeExtent,{start:i,end:l}=s;i==null&&l==null||(e.time=i===l?i:`${i??"null"},${l??"null"}`),delete t.timeExtent}return e}async function R(o,r,n,t){const e=await u(o,r,"json",t);return j(r,n,e.data),e}async function h(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:u(o,r,"json",n,{returnIdsOnly:!0})}async function w(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:u(o,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function $(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):u(o,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function u(o,r,n,t={},e={}){const s=typeof o=="string"?c(o):o,i=r.geometry?[r.geometry]:[];return t.responseType="json",E(i,null,t).then(l=>{const y=l?.[0];y!=null&&((r=r.clone()).geometry=y);const m=x({...s.query,f:n,...e,...O(r,e)});return p(F(s.path,"queryTopFeatures"),{...t,query:{...m,...t.query}})})}export{$ as c,w as d,h as m,R as p};
