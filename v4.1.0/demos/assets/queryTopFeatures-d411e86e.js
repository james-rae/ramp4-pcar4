import{e$ as p,r as u,Y as m,bd as F,bI as f,U as E,V as x,cq as O}from"./main-e6c796d9.js";const a="Layer does not support extent calculation.";function g(o,n){const r=o.geometry,t=o.toJSON(),e=t;if(u(r)&&(e.geometry=JSON.stringify(r),e.geometryType=O(r),e.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(n?.returnCountOnly||n?.returnExtentOnly||n?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=t.outSR.wkid||JSON.stringify(t.outSR):r&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:i,end:s}=l;i==null&&s==null||(e.time=i===s?i:`${i??"null"},${s??"null"}`),delete t.timeExtent}return e}async function S(o,n,r,t){const e=await y(o,n,"json",t);return p(n,r,e.data),e}async function w(o,n,r){return u(n.timeExtent)&&n.timeExtent.isEmpty?{data:{objectIds:[]}}:y(o,n,"json",r,{returnIdsOnly:!0})}async function B(o,n,r){return u(n.timeExtent)&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:y(o,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function R(o,n,r){return u(n.timeExtent)&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):y(o,n,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function y(o,n,r,t={},e={}){const l=typeof o=="string"?m(o):o,i=n.geometry?[n.geometry]:[];return t.responseType=r==="pbf"?"array-buffer":"json",F(i,null,t).then(s=>{const d=s&&s[0];u(d)&&((n=n.clone()).geometry=d);const c=f({...l.query,f:r,...e,...g(n,e)});return E(x(l.path,"queryTopFeatures"),{...t,query:{...c,...t.query}})})}export{R as a,S as d,w as m,B as p};
