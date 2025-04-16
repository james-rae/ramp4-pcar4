import{dK as b,dL as j,dM as N,dN as h,dO as P,bw as R,dP as x,dQ as S,dR as v,dS as A,s as O,bI as $,dT as F,bJ as J,dU as K}from"./main-DTtQVgOw.js";import{x as q}from"./MD5-CHHr-oed.js";import{i as z}from"./multiOriginJSONSupportUtils-DGETddQl.js";import{n as C}from"./uuid-Dj9mdEVg.js";import{p as y}from"./resourceExtension-B0mrymWI.js";function L(t){const r=t?.origins??[void 0];return(o,n)=>{const e=M(t,o,n);for(const a of r){const i=b(o,a,n);for(const s in e)i[s]=e[s]}}}function M(t,r,o){if(t?.type==="resource")return Q(t,r,o);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:e}=K;return{read:n,write:e}}}}function Q(t,r,o){const n=j(r,o);return{type:String,read:(e,a,i)=>{const s=N(e,a,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{isRequired:n.json?.write?.isRequired,writer(e,a,i,s){if(!s?.resources)return typeof e=="string"?void(a[i]=h(e,s)):void(a[i]=e.write({},s));const c=V(e),p=h(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},P.NO),d=n.type!==String&&(!z(this)||s?.origin&&this.originIdOf(o)>R(s.origin)),u={object:this,propertyName:o,value:e,targetUrl:p,dest:a,targetPropertyName:i,context:s,params:t};s?.portalItem&&p&&!x(p)?d&&t?.contentAddressed?g(u):d?T(u):G(u):s?.portalItem&&(p==null||S(p)!=null||v(p)||d)?g(u):a[i]=p}}}}function g(t){const{targetUrl:r,params:o,value:n,context:e,dest:a,targetPropertyName:i}=t;if(!e.portalItem)return;const s=A(r),c=U(n,r,e);if(o?.contentAddressed&&c.type!=="json")return void e.messages?.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c}));const p=o?.contentAddressed&&c.type==="json"?q(c.jsonString):s?.filename??C(),d=$(o?.prefix??s?.prefix,p),u=`${d}.${y(c)}`;if(o?.contentAddressed&&e.resources&&c.type==="json"){const m=e.resources.toKeep.find(({resource:f})=>f.path===u)??e.resources.toAdd.find(({resource:f})=>f.path===u);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const l=e.portalItem.resourceFromPath(u);v(r)&&e.resources&&e.resources.pendingOperations.push(F(r).then(m=>{l.path=`${d}.${y({type:"blob",blob:m})}`,a[i]=l.itemRelativeUrl}).catch(()=>{}));const I=o?.compress??!1;e.resources&&w({...t,resource:l,content:c,compress:I,updates:e.resources.toAdd}),a[i]=l.itemRelativeUrl}function T(t){const{context:r,targetUrl:o,params:n,value:e,dest:a,targetPropertyName:i}=t;if(!r.portalItem)return;const s=r.portalItem.resourceFromPath(o),c=U(e,o,r),p=y(c),d=J(s.path),u=n?.compress??!1;p===d?(r.resources&&w({...t,resource:s,content:c,compress:u,updates:r.resources.toUpdate}),a[i]=o):g(t)}function G({context:t,targetUrl:r,dest:o,targetPropertyName:n}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}function w({object:t,propertyName:r,updates:o,resource:n,content:e,compress:a}){const i=s=>{Y(t,r,s)};o.push({resource:n,content:e,compress:a,finish:i})}function U(t,r,o){return typeof t=="string"?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(o))}}function V(t){return t==null?null:typeof t=="string"?t:t.url}function Y(t,r,o){typeof t[r]=="string"?t[r]=o.url:t[r].url=o.url}export{L as v};
