import{dh as j,di as b,dj as N,dk as h,dl as P,bl as x,dm as A,dn as S,dp as v,dq as R,s as $,Z as O,dr as F,bz as z,ds as J}from"./main-C9JjxZR3.js";import{x as K}from"./MD5-CHHr-oed.js";import{i as k}from"./multiOriginJSONSupportUtils-DGETddQl.js";import{n as q}from"./uuid-Dj9mdEVg.js";import{p as y}from"./resourceExtension-CBIBWs-3.js";function C(t){const r=t?.origins??[void 0];return(o,n)=>{const e=Z(t,o,n);for(const a of r){const i=j(o,a,n);for(const s in e)i[s]=e[s]}}}function Z(t,r,o){if(t?.type==="resource")return B(t,r,o);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:e}=J;return{read:n,write:e}}}}function B(t,r,o){const n=b(r,o);return{type:String,read:(e,a,i)=>{const s=N(e,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(e,a,i,s){if(!s?.resources)return typeof e=="string"?void(a[i]=h(e,s)):void(a[i]=e.write({},s));const c=V(e),p=h(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),d=n.type!==String&&(!k(this)||s?.origin&&this.originIdOf(o)>x(s.origin)),u={object:this,propertyName:o,value:e,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:t};s?.portalItem&&p&&!A(p)?d&&t?.contentAddressed?g(u):d?H(u):Q(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||d)?g(u):a[i]=p}}}}function g(t){const{targetUrl:r,params:o,value:n,context:e,dest:a,targetPropertyName:i}=t;if(!e.portalItem)return;const s=R(r),c=w(n,r,e);if(o?.contentAddressed&&c.type!=="json")return void e.messages?.push(new $("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));const p=o?.contentAddressed&&c.type==="json"?K(c.jsonString):s?.filename??q(),d=O(o?.prefix??s?.prefix,p),u=`${d}.${y(c)}`;if(o?.contentAddressed&&e.resources&&c.type==="json"){const m=e.resources.toKeep.find(({resource:f})=>f.path===u)??e.resources.toAdd.find(({resource:f})=>f.path===u);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const l=e.portalItem.resourceFromPath(u);v(r)&&e.resources&&e.resources.pendingOperations.push(F(r).then(m=>{l.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=l.itemRelativeUrl}).catch(()=>{}));const I=o?.compress??!1;e.resources&&U({...t,resource:l,content:c,compress:I,updates:e.resources.toAdd}),a[i]=l.itemRelativeUrl}function H(t){const{context:r,targetUrl:o,params:n,value:e,dest:a,targetPropertyName:i}=t;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),c=w(e,o,r),p=y(c),d=z(s.path),u=n?.compress??!1;p===d?(r.resources&&U({...t,resource:s,content:c,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(t)}function Q({context:t,targetUrl:r,dest:o,targetPropertyName:n}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function U({object:t,propertyName:r,updates:o,resource:n,content:e,compress:a}){const i=s=>{Y(t,r,s)};o.push({resource:n,content:e,compress:a,finish:i})}function w(t,r,o){return typeof t=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(o))}}function V(t){return t==null?null:typeof t=="string"?t:t.url}function Y(t,r,o){typeof t[r]=="string"?t[r]=o.url:t[r].url=o.url}export{C as j};