import{bY as I,o as S,bh as T,b6 as h}from"./main-DeRV24Di.js";import{R as w}from"./normalizeUtils-Da1ioVmk.js";import{B as v,x as M,j as g}from"./queryUtils-BWEDx0K7.js";import{c as O,C as Q,V as j}from"./QueryEngine-C55J_uce.js";import{I as q}from"./timeSupport-DSR4Ymcf.js";async function E(e,s,o){const a=I(o),{point:t,distance:i,returnEdge:u,vertexMode:p}=s;if(!u&&p==="none")return{candidates:[]};let n=S(s.query);n=await e.schedule(()=>v(n,e.definitionExpression,e.spatialReference),a),n=await e.reschedule(()=>O(n,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference}),a);const l=!T(t.spatialReference,e.spatialReference);l&&await M(t.spatialReference,e.spatialReference);const m=typeof i=="number"?i:i.x,f=typeof i=="number"?i:i.y,d={xmin:t.x-m,xmax:t.x+m,ymin:t.y-f,ymax:t.y+f,spatialReference:t.spatialReference},r=l?g(d,e.spatialReference):d;if(!r)return{candidates:[]};const y=(await w(h(t),null,{signal:a}))[0],x=(await w(h(r),null,{signal:a}))[0];if(y==null||x==null)return{candidates:[]};const c=new Q(await e.reschedule(()=>e.searchFeatures(j(x.toJSON())),a),n,e);await e.reschedule(()=>e.executeObjectIdsQuery(c),a),await e.reschedule(()=>e.executeTimeQuery(c),a),await e.reschedule(()=>e.executeAttributesQuery(c),a),await e.reschedule(()=>J(e,c,a),a);const R=y.toJSON(),b=l?g(R,e.spatialReference):R,F=l?Math.max(r.xmax-r.xmin,r.ymax-r.ymin)/2:i;return c.createSnappingResponse({...s,point:b,distance:F},t.spatialReference)}async function J(e,s,o){const{query:a}=s,{spatialRel:t}=a;if(!s?.items?.length||!a.geometry||!t)return;const i=await q(t,a.geometry,e.geometryType,e.hasZ,e.hasM),u=await e.runSpatialFilter(s.items,p=>i(p.geometry),o);s.items=u}export{E as u};
