import{V as n,eh as l,f as m,r as d,ei as v,b as R,U as I}from"./main-e6c796d9.js";import"./preload-helper-388ac9d5.js";async function F(e,t={},a){await e.load(a);const r=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:u="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:u,token:e.apiKey},signal:l(a,"signal")},s=await e.portal.request(r,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:w,size:g,resource:y})=>({created:new Date(w),size:g,resource:e.resourceFromPath(y)}))}}async function U(e,t,a,r){if(!e.hasPath())throw new m(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(r);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,u]=h(e.path),p=await b(a),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),d(r)&&r.compress&&s.append("compress","true"),s.append("fileName",u),s.append("file",p,u),s.append("f","json"),d(r)&&r.access&&s.append("access",r.access),await o.portal.request(c,{method:"post",body:s,signal:l(r,"signal")}),e}async function O(e,t,a){if(!t.hasPath())throw new m("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=n(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:l(a,"signal")}),t.portalItem=null}async function S(e,t){await e.load(t);const a=n(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:l(t,"signal")})}function h(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function f(e){const[t,a]=P(e),[r,o]=h(t);return[r,o,a]}function P(e){const t=v(e);return R(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function b(e){return e instanceof Blob?e:(await I(e.url,{responseType:"blob"})).data}function $(e,t){if(!e.hasPath())return null;const[a,,r]=f(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}function T(e,t){if(!e.hasPath())return null;const[a,,r]=f(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}export{U as addOrUpdateResource,b as contentToBlob,F as fetchResources,$ as getSiblingOfSameType,T as getSiblingOfSameTypeI,S as removeAllResources,O as removeResource,f as splitPrefixFileNameAndExtension};
