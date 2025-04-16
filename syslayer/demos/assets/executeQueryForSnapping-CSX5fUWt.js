import{b$ as F,v as I,bj as S,b8 as w}from"./main-D_jCcUNd.js";import{R as h}from"./normalizeUtils-Gz60uU0X.js";import{B as T,x as j,j as g}from"./queryUtils-l6R_KoUl.js";import{c as Q,C as q,V as E}from"./QueryEngine-QyEGOQJM.js";import{I as M}from"./timeSupport-Db8sj5rC.js";async function U(e,n,m){const a=F(m),{point:t,distance:i,returnEdge:p,vertexMode:u}=n;if(!p&&u==="none")return{candidates:[]};let s=I(n.query);s=await e.schedule(()=>T(s,e.definitionExpression,e.spatialReference),a),s=await e.reschedule(()=>Q(s,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference}),a);const o=!S(t.spatialReference,e.spatialReference);o&&await j(t.spatialReference,e.spatialReference);const f=typeof i=="number"?i:i.x,d=typeof i=="number"?i:i.y,y={xmin:t.x-f,xmax:t.x+f,ymin:t.y-d,ymax:t.y+d,spatialReference:t.spatialReference},r=o?g(y,e.spatialReference):y;if(!r)return{candidates:[]};const x=(await h(w(t),null,{signal:a}))[0],c=(await h(w(r),null,{signal:a}))[0];if(x==null||c==null)return{candidates:[]};const l=new q(await e.reschedule(()=>e.searchFeatures(E(c.toJSON())),a),s,e);await e.reschedule(()=>e.executeObjectIdsQuery(l),a),await e.reschedule(()=>e.executeTimeQuery(l),a),await e.reschedule(()=>e.executeAttributesQuery(l),a),await e.reschedule(()=>O(e,l,a),a);const R=x.toJSON(),b=o?g(R,e.spatialReference):R,v=o?Math.max(r.xmax-r.xmin,r.ymax-r.ymin)/2:i;return l.createSnappingResponse({...n,point:b,distance:v},t.spatialReference)}async function O(e,n,m){const{query:a}=n,{spatialRel:t}=a;if(!n?.items?.length||!a.geometry||!t)return;const i=await M(t,a.geometry,e.geometryType,e.hasZ,e.hasM),p=await e.runSpatialFilter(n.items,u=>i(u.geometry),m);n.items=p}export{U as u};
