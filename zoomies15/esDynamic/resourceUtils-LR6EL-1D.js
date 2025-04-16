import{d7 as S,D as y,s as v,d8 as b}from"./main-yxqK2SuK.js";import{n as E}from"./uuid-Dj9mdEVg.js";import{getSiblingOfSameTypeI as R,contentToBlob as m}from"./resourceUtils-4uoW2t67.js";async function T(r,t,o){const s=await w(r,t,o);await I(s,t,o)}async function F(r,t,o,s,a){const c=await w(o,s,a);await r.update({data:t}),await I(c,s,a)}async function w(r,t,o){if(!t?.resources)return;const s=t.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,f=[];a.forEach(e=>{s.delete(e),r.paths.push(e)});const p=[],h=[],u=[];for(const e of t.resources.toUpdate)if(s.delete(e.resource.path),a.has(e.resource.path)||c.has(e.resource.path)){const{resource:n,content:g,finish:d}=e,i=R(n,E());r.paths.push(i.path),p.push({resource:i,content:await m(g),compress:e.compress}),d&&u.push(()=>d(i))}else{r.paths.push(e.resource.path),h.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource)),c.add(e.resource.path)}for(const e of t.resources.toAdd)if(r.paths.push(e.resource.path),s.has(e.resource.path))s.delete(e.resource.path);else{p.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource))}if(p.length||h.length){const{addOrUpdateResources:e}=await import("./resourceUtils-4uoW2t67.js");await e(t.portalItem,p,"add",o),await e(t.portalItem,h,"update",o)}if(u.forEach(e=>e()),f.length===0)return s;const l=await S(f);if(y(o),l.length>0)throw new v("save:resources","Failed to save one or more resources",{errors:l});return s}async function I(r,t,o){if(!r||!t.portalItem)return;const s=[];for(const a of r){const c=t.portalItem.resourceFromPath(a);s.push(c.portalItem.removeResource(c,o))}await b(s)}export{F as n,T as p};
