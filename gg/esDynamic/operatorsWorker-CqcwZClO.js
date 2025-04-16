import{b6 as c}from"./main-DTtQVgOw.js";function a(e,t){let r;return{loaded:!1,load:()=>r??=t().then(n=>{p[e]={loaded:!0,execute:n}})}}function u(e){return e==null?null:e.toJSON()}const p={disjoint:a("disjoint",()=>import("./disjointOperator-Bg3UHhdU.js").then(e=>e.execute)),intersects:a("intersects",()=>import("./intersectsOperator-BznldJOF.js").then(e=>e.execute)),touches:a("touches",()=>import("./touchesOperator-Cdkqh-W8.js").then(e=>e.execute)),crosses:a("crosses",()=>import("./crossesOperator-DSxfswar.js").then(e=>e.execute)),within:a("within",()=>import("./withinOperator-CWq0NFLq.js").then(e=>e.execute)),contains:a("contains",()=>import("./containsOperator-B_JiinWe.js").then(e=>e.execute)),overlaps:a("overlaps",()=>import("./overlapsOperator-Ci9EePOr.js").then(e=>e.execute)),equals:a("equals",async()=>{const e=await import("./equalsOperator-BI668j0a.js").then(t=>t.e);return(t,r)=>e.execute(c(t),c(r))}),relate:a("relate",async()=>{const e=await import("./relateOperator-CIOxgI-Y.js").then(t=>t.r);return(t,r,n)=>e.execute(c(t),c(r),n)}),intersection:a("intersection",()=>import("./intersectionOperator-BCPP6nVw.js").then(e=>e.execute)),union:a("union",()=>import("./unionOperator-C8vg2z0g.js").then(e=>e.executeMany)),difference:a("difference",async()=>{const e=await import("./differenceOperator-wHUPM-0_.js").then(t=>t.d);return(t,r)=>u(e.execute(c(t),c(r)))}),symmetricDifference:a("symmetricDifference",async()=>{const e=await import("./symmetricDifferenceOperator-7zeqSrED.js").then(t=>t.s);return(t,r)=>u(e.execute(c(t),c(r)))}),clip:a("clip",async()=>{const e=await import("./clipOperator-DZCJiRy4.js").then(t=>t.c);return(t,r)=>u(e.execute(c(t),c(r)))}),cut:a("cut",async()=>{const e=await import("./cutOperator-DTgLSiiD.js").then(t=>t.c);return(t,r)=>e.execute(c(t),c(r)).map(n=>u(n))}),area:a("area",async()=>{const e=await import("./areaOperator-Go4oWLPg.js").then(n=>n.a),{convertFromSpatialReferenceUnit:t,toAreaUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i)=>{const o=e.execute(c(n));return t(n.spatialReference,r(i),o)}}),geodeticArea:a("geodeticArea",async()=>{const e=await import("./geodeticAreaOperator-D60_pkBM.js").then(i=>i.g),{convert:t,squareMeters:r,toAreaUnit:n}=await import("./unitConversion-B97yy1Mu.js").then(i=>i.e);return await e.load(),(i,o)=>{const s=e.execute(c(i));return t(r,n(o),s)}}),length:a("length",async()=>{const e=await import("./lengthOperator-BTeeLNbL.js"),{convertFromSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i)=>{const o=e.execute(n);return t(n.spatialReference,r(i),o)}}),geodeticLength:a("geodeticLength",async()=>{const e=await import("./geodeticLengthOperator-CtDuwdLB.js").then(i=>i.g),{convert:t,meters:r,toLengthUnit:n}=await import("./unitConversion-B97yy1Mu.js").then(i=>i.e);return await e.load(),(i,o)=>{const s=e.execute(c(i));return t(r,n(o),s)}}),distance:a("distance",async()=>{const e=await import("./distanceOperator-DxuONjGd.js").then(n=>n.d),{convertFromSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i,o)=>{const s=e.execute(c(n),c(i));return t(n.spatialReference,r(o),s)}}),densify:a("densify",async()=>{const e=await import("./densifyOperator-BDtXJQnl.js").then(n=>n.d),{convertToSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i,o)=>(i=t(r(o),n.spatialReference,i),u(e.execute(c(n),i)))}),geodeticDensify:a("geodeticDensify",async()=>{const e=await import("./geodeticDensifyOperator-lLiGD45K.js").then(i=>i.a),{convert:t,meters:r,toLengthUnit:n}=await import("./unitConversion-B97yy1Mu.js").then(i=>i.e);return await e.load(),(i,o,s)=>(o=t(n(s),r,o),u(e.execute(c(i),o)))}),generalize:a("generalize",async()=>{const e=await import("./generalizeOperator-Dxyo1M0E.js").then(n=>n.g),{convertToSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i,o,s)=>(i=t(r(o),n.spatialReference,i),u(e.execute(c(n),i,s)))}),buffer:a("buffer",async()=>{const e=await import("./bufferOperator-0MlYQElm.js"),{convertToSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i,o)=>(i=t(r(o),n.spatialReference,i),e.execute(n,i))}),geodesicBuffer:a("geodesicBuffer",async()=>{const e=await import("./geodesicBufferOperator-B3u-pSCw.js"),{convert:t,meters:r,toLengthUnit:n}=await import("./unitConversion-B97yy1Mu.js").then(i=>i.e);return await e.load(),(i,o,s)=>(o=t(n(s),r,o),e.execute(i,o))}),offset:a("offset",async()=>{const e=await import("./offsetOperator-DTMkd4T5.js"),{convertToSpatialReferenceUnit:t,toLengthUnit:r}=await import("./unitConversion-B97yy1Mu.js").then(n=>n.e);return(n,i,o,s)=>(i=t(r(o),n.spatialReference,i),e.execute(n,i,s))}),rotate:a("rotate",async()=>{const e=await import("./affineTransformOperator-Cs8AJF5s.js"),{default:t}=await import("./Transformation-BfBbXJzf.js");return(r,n,i,o)=>{const s=new t().rotate(n,i,o);return u(e.execute(c(r),s))}}),centroid:a("centroid",async()=>{const e=await import("./centroidOperator-CEXhCQK9.js").then(t=>t.c);return t=>u(e.execute(c(t)))}),labelPoint:a("labelPoint",async()=>{const e=await import("./labelPointOperator-TL7Sr1FH.js").then(t=>t.l);return t=>u(e.execute(c(t)))}),simplify:a("simplify",()=>import("./simplifyOperator-qREY-XoE.js").then(e=>e.execute)),isSimple:a("isSimple",()=>import("./simplifyOperator-qREY-XoE.js").then(e=>e.isSimple)),convexHull:a("convexHull",()=>import("./convexHullOperator-B2yWShYl.js").then(e=>e.execute)),getNearestCoordinate:a("getNearestCoordinate",async()=>{const e=await import("./proximityOperator-B8yideQP.js").then(t=>t.p);return(t,r,n)=>{const i=e.getNearestCoordinate(c(t),c(r),n);return{...i,coordinate:u(i.coordinate)}}}),getNearestVertex:a("getNearestVertex",async()=>{const e=await import("./proximityOperator-B8yideQP.js").then(t=>t.p);return(t,r)=>{const n=e.getNearestVertex(c(t),c(r));return{...n,coordinate:u(n.coordinate)}}})};function m(e,t){const r=p[e];return r.loaded?r.execute.apply(void 0,t):r.load().then(()=>m(e,t))}export{m as invokeGeometryOp};
