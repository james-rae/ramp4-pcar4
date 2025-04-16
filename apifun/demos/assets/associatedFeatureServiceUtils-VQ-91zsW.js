import{Q as p,s as c,C as $,Z as u,a4 as y,a0 as j}from"./main-CcTJZah4.js";import w from"./PortalItem-DtQGXcdD.js";async function q(e,n){const t=p(e);if(!t)throw new c("invalid-url","Invalid scene service url");const r={...n,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(r.sceneLayerItem??=await D(r),r.sceneLayerItem==null)return v(r.sceneServerUrl.replace("/SceneServer","/FeatureServer"),r);const a=await P(r);if(!a?.url)throw new c("related-service-not-found","Could not find feature service through portal item relationship");r.featureServiceItem=a;const o=await v(a.url,r);return o.portalItem=a,o}async function D(e){const n=(await h(e)).serviceItemId;if(!n)return null;const t=new w({id:n,apiKey:e.apiKey}),r=await A(e);r!=null&&(t.portal=new $({url:r}));try{return await t.load({signal:e.signal})}catch(a){return u(a),null}}async function h(e){if(e.rootDocument)return e.rootDocument;const n={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await y(e.sceneServerUrl,n);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function A(e){const n=j?.findServerInfo(e.sceneServerUrl);if(n?.owningSystemUrl)return n.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const r=(await y(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(r)return r}catch(r){u(r)}return null}async function v(e,n){const t=p(e);if(!t)throw new c("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,a=n.layerId;if(a==null)return{serverUrl:r};const o=h(n),f=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,S=(f?.layers?.[0]||f?.tables?.[0])?.customParameters,d=s=>{const U={query:{f:"json",...S},responseType:"json",authMode:s,signal:n.signal};return y(r,U)},g=d("anonymous").catch(()=>d("no-prompt")),[m,I]=await Promise.all([g,o]),l=I?.layers,i=m.data&&m.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(l)){for(let s=0;s<Math.min(l.length,i.length);s++)if(l[s].id===a)return{serverUrl:r,layerId:i[s].id}}else if(a!=null&&a<i.length)return{serverUrl:r,layerId:i[a].id};throw new Error("could not find matching associated sublayer")}async function P({sceneLayerItem:e,signal:n}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n})).find(a=>a.type==="Feature Service")||null;if(!t)return null;const r=new w({portal:t.portal,id:t.id});return await r.load(),r}catch(t){return u(t),null}}export{q as s};
