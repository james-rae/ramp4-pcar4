const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./disjointOperator-CtWXRrg8.js","./ProjectionTransformation-BpVP6XuM.js","./Transformation2D-DZfKTQC6.js","./SimpleGeometryCursor-B92kdZ15.js","./main-CcTJZah4.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./jsonConverter-BWKGkJid.js","./intersectsOperator-Bi-tNWw0.js","./OperatorIntersects-BD3ZdYCi.js","./touchesOperator-BdcX7-sC.js","./OperatorTouches-jk0cYKRd.js","./crossesOperator-BwCy8B6U.js","./OperatorCrosses-BzrD53pV.js","./withinOperator-BLkzVIEu.js","./OperatorWithin-C3OGOy_I.js","./containsOperator-x1xRigNj.js","./overlapsOperator-CWrEBYbC.js","./OperatorOverlaps-opd5mdI4.js","./equalsOperator-DNkizD60.js","./apiConverter-CAoEv1Jc.js","./relateOperator-Cw6dy3uF.js","./intersectionOperator-CSVep3bL.js","./operatorIntersection-CezQ75-j.js","./unionOperator-C9kjuOdx.js","./operatorUnion-CxvkpITy.js","./differenceOperator-Nip4cmLk.js","./symmetricDifferenceOperator-B3o8lbPv.js","./clipOperator-VHNy4vod.js","./cutOperator-BOp6URRC.js","./areaOperator-DetDPSHR.js","./unitConversion-BMuQrkcF.js","./geodeticAreaOperator-BrdviXzP.js","./geodeticCurveType-CirnHLSB.js","./lengthOperator-Dv8M0WZp.js","./geodeticLengthOperator-DOXWlWEa.js","./distanceOperator-NfuTM0Q8.js","./densifyOperator-tiaxgNwj.js","./geodeticDensifyOperator-D9URG9uX.js","./operatorGeodeticDensify-BOwaSVMB.js","./generalizeOperator-n-FPto6f.js","./OperatorGeneralize-BERB2gjK.js","./bufferOperator-CCNUIZOW.js","./operatorBuffer-CJBWniU-.js","./GeometryCleaner-BEJM7I4l-DUttS_B6.js","./geodesicBufferOperator-CZFbYAsy.js","./operatorGeodesicBuffer-BHa6i7j2.js","./offsetOperator-BcmE7dMC.js","./operatorOffset-Buo-BUt4.js","./affineTransformOperator-B6izGbFU.js","./Transformation-3q_IvHh0.js","./centroidOperator-C9Z3OdDI.js","./Centroid-DZi-eb9F-C0A_cHQ1.js","./labelPointOperator-C-Jd3cx8.js","./OperatorProximity-XBueRTbn.js","./simplifyOperator-DoGEjLVW.js","./operatorSimplify-DpOeNPhu.js","./convexHullOperator-zDEoEdz6.js","./operatorConvexHull-b73htj3c.js","./proximityOperator-CjWTGhCv.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-ExcqyqRp.js";import{b8 as c}from"./main-CcTJZah4.js";function _(t,e){let i;return{loaded:!1,load:()=>i??=e().then(r=>{p[t]={loaded:!0,execute:r}})}}function m(t){return t==null?null:t.toJSON()}const p={disjoint:_("disjoint",()=>a(()=>import("./disjointOperator-CtWXRrg8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),intersects:_("intersects",()=>a(()=>import("./intersectsOperator-Bi-tNWw0.js"),__vite__mapDeps([8,9,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),touches:_("touches",()=>a(()=>import("./touchesOperator-BdcX7-sC.js"),__vite__mapDeps([10,11,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),crosses:_("crosses",()=>a(()=>import("./crossesOperator-BwCy8B6U.js"),__vite__mapDeps([12,13,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),within:_("within",()=>a(()=>import("./withinOperator-BLkzVIEu.js"),__vite__mapDeps([14,15,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),contains:_("contains",()=>a(()=>import("./containsOperator-x1xRigNj.js"),__vite__mapDeps([16,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),overlaps:_("overlaps",()=>a(()=>import("./overlapsOperator-CWrEBYbC.js"),__vite__mapDeps([17,18,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),equals:_("equals",async()=>{const t=await a(()=>import("./equalsOperator-DNkizD60.js").then(e=>e.e),__vite__mapDeps([19,1,2,3,4,5,6,20,7]),import.meta.url);return(e,i)=>t.execute(c(e),c(i))}),relate:_("relate",async()=>{const t=await a(()=>import("./relateOperator-Cw6dy3uF.js").then(e=>e.r),__vite__mapDeps([21,1,2,3,4,5,6,20,7]),import.meta.url);return(e,i,r)=>t.execute(c(e),c(i),r)}),intersection:_("intersection",()=>a(()=>import("./intersectionOperator-CSVep3bL.js"),__vite__mapDeps([22,4,5,6,23,3,2,1,7]),import.meta.url).then(t=>t.execute)),union:_("union",()=>a(()=>import("./unionOperator-C9kjuOdx.js"),__vite__mapDeps([24,25,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.executeMany)),difference:_("difference",async()=>{const t=await a(()=>import("./differenceOperator-Nip4cmLk.js").then(e=>e.d),__vite__mapDeps([26,2,1,3,4,5,6,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),symmetricDifference:_("symmetricDifference",async()=>{const t=await a(()=>import("./symmetricDifferenceOperator-B3o8lbPv.js").then(e=>e.s),__vite__mapDeps([27,4,5,6,2,1,3,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),clip:_("clip",async()=>{const t=await a(()=>import("./clipOperator-VHNy4vod.js").then(e=>e.c),__vite__mapDeps([28,2,1,3,4,5,6,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),cut:_("cut",async()=>{const t=await a(()=>import("./cutOperator-BOp6URRC.js").then(e=>e.c),__vite__mapDeps([29,4,5,6,2,1,3,7,20]),import.meta.url);return(e,i)=>t.execute(c(e),c(i)).map(r=>m(r))}),area:_("area",async()=>{const t=await a(()=>import("./areaOperator-DetDPSHR.js").then(r=>r.a),__vite__mapDeps([30,4,5,6,2,1,3,7,20]),import.meta.url),{convertFromSpatialReferenceUnit:e,toAreaUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toAreaUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toAreaUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n)=>{const o=t.execute(c(r));return e(r.spatialReference,i(n),o)}}),geodeticArea:_("geodeticArea",async()=>{const t=await a(()=>import("./geodeticAreaOperator-BrdviXzP.js").then(n=>n.g),__vite__mapDeps([32,4,5,6,33]),import.meta.url),{convert:e,squareMeters:i,toAreaUnit:r}=await a(async()=>{const{convert:n,squareMeters:o,toAreaUnit:u}=await import("./unitConversion-BMuQrkcF.js").then(s=>s.e);return{convert:n,squareMeters:o,toAreaUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o)=>{const u=t.execute(c(n));return e(i,r(o),u)}}),length:_("length",async()=>{const t=await a(()=>import("./lengthOperator-Dv8M0WZp.js"),__vite__mapDeps([34,4,5,6,7,2,1,3]),import.meta.url),{convertFromSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n)=>{const o=t.execute(r);return e(r.spatialReference,i(n),o)}}),geodeticLength:_("geodeticLength",async()=>{const t=await a(()=>import("./geodeticLengthOperator-DOXWlWEa.js").then(n=>n.g),__vite__mapDeps([35,4,5,6,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BMuQrkcF.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o)=>{const u=t.execute(c(n));return e(i,r(o),u)}}),distance:_("distance",async()=>{const t=await a(()=>import("./distanceOperator-NfuTM0Q8.js").then(r=>r.d),__vite__mapDeps([36,2,4,5,6,1,3,20,7]),import.meta.url),{convertFromSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>{const u=t.execute(c(r),c(n));return e(r.spatialReference,i(o),u)}}),densify:_("densify",async()=>{const t=await a(()=>import("./densifyOperator-tiaxgNwj.js").then(r=>r.d),__vite__mapDeps([37,4,5,6,2,1,3,7,20]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>(n=e(i(o),r.spatialReference,n),m(t.execute(c(r),n)))}),geodeticDensify:_("geodeticDensify",async()=>{const t=await a(()=>import("./geodeticDensifyOperator-D9URG9uX.js").then(n=>n.a),__vite__mapDeps([38,4,5,6,39,3,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BMuQrkcF.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o,u)=>(o=e(r(u),i,o),m(t.execute(c(n),o)))}),generalize:_("generalize",async()=>{const t=await a(()=>import("./generalizeOperator-n-FPto6f.js").then(r=>r.g),__vite__mapDeps([40,4,5,6,2,1,3,7,41,20]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o,u)=>(n=e(i(o),r.spatialReference,n),m(t.execute(c(r),n,u)))}),buffer:_("buffer",async()=>{const t=await a(()=>import("./bufferOperator-CCNUIZOW.js"),__vite__mapDeps([42,4,5,6,43,3,2,1,44,41,7]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>(n=e(i(o),r.spatialReference,n),t.execute(r,n))}),geodesicBuffer:_("geodesicBuffer",async()=>{const t=await a(()=>import("./geodesicBufferOperator-CZFbYAsy.js"),__vite__mapDeps([45,5,4,6,46,3,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BMuQrkcF.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o,u)=>(o=e(r(u),i,o),t.execute(n,o))}),offset:_("offset",async()=>{const t=await a(()=>import("./offsetOperator-BcmE7dMC.js"),__vite__mapDeps([47,4,5,6,48,3,1,2,7]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BMuQrkcF.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o,u)=>(n=e(i(o),r.spatialReference,n),t.execute(r,n,u))}),rotate:_("rotate",async()=>{const t=await a(()=>import("./affineTransformOperator-B6izGbFU.js"),__vite__mapDeps([49,4,5,6,3,2,20,1,7]),import.meta.url),{default:e}=await a(async()=>{const{default:i}=await import("./Transformation-3q_IvHh0.js");return{default:i}},__vite__mapDeps([50,2,4,5,6]),import.meta.url);return(i,r,n,o)=>{const u=new e().rotate(r,n,o);return m(t.execute(c(i),u))}}),centroid:_("centroid",async()=>{const t=await a(()=>import("./centroidOperator-C9Z3OdDI.js").then(e=>e.c),__vite__mapDeps([51,52,2,20,1,3,4,5,6,7]),import.meta.url);return e=>m(t.execute(c(e)))}),labelPoint:_("labelPoint",async()=>{const t=await a(()=>import("./labelPointOperator-C-Jd3cx8.js").then(e=>e.l),__vite__mapDeps([53,2,1,3,4,5,6,7,52,54,20]),import.meta.url);return e=>m(t.execute(c(e)))}),simplify:_("simplify",()=>a(()=>import("./simplifyOperator-DoGEjLVW.js"),__vite__mapDeps([55,56,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.execute)),isSimple:_("isSimple",()=>a(()=>import("./simplifyOperator-DoGEjLVW.js"),__vite__mapDeps([55,56,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.isSimple)),convexHull:_("convexHull",()=>a(()=>import("./convexHullOperator-zDEoEdz6.js"),__vite__mapDeps([57,58,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.execute)),getNearestCoordinate:_("getNearestCoordinate",async()=>{const t=await a(()=>import("./proximityOperator-CjWTGhCv.js").then(e=>e.p),__vite__mapDeps([59,2,1,3,4,5,6,7,54,20]),import.meta.url);return(e,i,r)=>{const n=t.getNearestCoordinate(c(e),c(i),r);return{...n,coordinate:m(n.coordinate)}}}),getNearestVertex:_("getNearestVertex",async()=>{const t=await a(()=>import("./proximityOperator-CjWTGhCv.js").then(e=>e.p),__vite__mapDeps([59,2,1,3,4,5,6,7,54,20]),import.meta.url);return(e,i)=>{const r=t.getNearestVertex(c(e),c(i));return{...r,coordinate:m(r.coordinate)}}})};function l(t,e){const i=p[t];return i.loaded?i.execute.apply(void 0,e):i.load().then(()=>l(t,e))}export{l as invokeGeometryOp};
