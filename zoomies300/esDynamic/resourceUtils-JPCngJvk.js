import{Z as d,s as m,U as b,bz as R}from"./main-DqYc2eZZ.js";async function x(e,t={},s){await e.load(s);const o=d(e.itemUrl,"resources"),{start:c=1,num:f=10,sortOrder:l="asc",sortField:u="resource"}=t,i={query:{start:c,num:f,sortOrder:l,sortField:u,token:e.apiKey},signal:s?.signal},a=await e.portal.request(o,i);return{total:a.total,nextStart:a.nextStart,resources:a.resources.map(({created:n,size:p,resource:r})=>({created:new Date(n),size:p,resource:e.resourceFromPath(r)}))}}async function q(e,t,s,o){const c=new Map;for(const{resource:l,content:u,compress:i,access:a}of t){if(!l.hasPath())throw new m(`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");const[n,p]=h(l.path),r=`${n}/${i??""}/${a??""}`;c.has(r)||c.set(r,{prefix:n,compress:i,access:a,files:[]}),c.get(r).files.push({fileName:p,content:u})}await e.load(o);const f=d(e.userItemUrl,s==="add"?"addResources":"updateResources");for(const{prefix:l,compress:u,access:i,files:a}of c.values())for(let n=0;n<a.length;n+=25){const p=a.slice(n,n+25),r=new FormData;l&&l!=="."&&r.append("resourcesPrefix",l),u&&r.append("compress","true"),i&&r.append("access",i);let g=0;for(const{fileName:y,content:v}of p)r.append("file"+ ++g,v,y);r.append("f","json"),await e.portal.request(f,{method:"post",body:r,signal:o?.signal})}}async function P(e,t,s){if(!t.hasPath())throw new m("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const o=d(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:s?.signal}),t.portalItem=null}async function F(e,t){await e.load(t);const s=d(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function h(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function w(e){const[t,s]=I(e),[o,c]=h(t);return[o,c,s]}function I(e){const t=R(e);return t==null?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function U(e){return e.type==="blob"?e.blob:e.type==="json"?new Blob([e.jsonString],{type:"application/json"}):(await b(e.url,{responseType:"blob"})).data}function O(e,t){if(!e.hasPath())return null;const[s,,o]=w(e.path);return e.portalItem.resourceFromPath(d(s,t+o))}export{q as addOrUpdateResources,U as contentToBlob,x as fetchResources,O as getSiblingOfSameTypeI,F as removeAllResources,P as removeResource,w as splitPrefixFileNameAndExtension};
