import{y as ln,c as on,d as cn,N,x as fn,Z as dn,t as B,g as un,r as C}from"./arcadeUtils-BIZMB8qN.js";import{o as d,i as h,k as W,g as V,t as H,d as E,a as i,r as s,E as g,X as P,A as J,K as M,Y as w,a0 as K,a1 as j,a2 as k,h as b,S as wn,z as q,B as S}from"./languageUtils-B0BjhYMX.js";import{c as I,r as T,b as p}from"./TimeOnly-C4DXtAnK.js";import{l as X}from"./portalUtils-BxgJpEfp.js";import{M as hn,U as Y,cI as u,au as L,aT as A,bv as O,bD as D,bE as G,b3 as Q,b as _,bq as mn}from"./main-COW1-tZE.js";import{disjoint as pn,intersects as yn,touches as vn,crosses as gn,within as Pn,contains as In,overlaps as An,equals as Fn,relate as bn,intersect as Rn,union as Nn,difference as Sn,symmetricDifference as On,clip as Dn,cut as jn,planarArea as x,geodesicArea as $,planarLength as U,geodesicLength as z,distance as Tn,densify as nn,geodesicDensify as en,generalize as Ln,buffer as Cn,geodesicBuffer as Jn,offset as Mn,rotate as tn,simplify as rn,isSimple as Un,convexHull as Zn,nearestCoordinate as En,nearestVertex as kn}from"./geometryEngineAsync-DauiOn7Y.js";import"./preload-helper-ExcqyqRp.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-5qY5C-9w.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-CAs3Af8Z.js";import"./UnknownTimeZone-DnLCB85J.js";import"./number-20stla5E.js";import"./shared-Z76MXpfN.js";import"./Field-BbM3YSMn.js";import"./fieldType-Rjx7u5H6.js";import"./uuid-Cl5lrJ4c.js";import"./Query-B7QuQNj2.js";import"./TimeExtent-Netzf3WV.js";import"./workers-CrxYpYBd.js";async function an(a,e,t){if(!hn?.findCredential(a.restUrl))return null;if(a.loadStatus==="loaded"&&e===""&&a.user?.sourceJSON&&t===!1)return a.user.sourceJSON;const c={responseType:"json",query:{f:"json"}};if(t&&(c.query.returnUserLicenseTypeExtensions=!0),e===""){const r=await Y(a.restUrl+"/community/self",c);if(r.data){const l=r.data;if(l?.username)return l}return null}const n=await Y(a.restUrl+"/community/users/"+e,c);if(n.data){const r=n.data;return r.error?null:r}return null}function F(a,e,t){if(h(a,2,2,e,t),!(a[0]instanceof u&&a[1]instanceof u)){if(!(a[0]instanceof u&&a[1]===null)){if(!(a[1]instanceof u&&a[0]===null)){if(a[0]!==null||a[1]!==null)throw new i(e,s.InvalidParameter,t)}}}}async function sn(a,e){if(a.type!=="polygon"&&a.type!=="polyline"&&a.type!=="extent")return 0;let t=1;(a.spatialReference.vcsWkid||a.spatialReference.latestVcsWkid)&&(t=un(a.spatialReference)/mn(a.spatialReference));let o=0;if(a.type==="polyline")for(const n of a.paths)for(let r=1;r<n.length;r++)o+=C(n[r],n[r-1],t);else if(a.type==="polygon")for(const n of a.rings){for(let r=1;r<n.length;r++)o+=C(n[r],n[r-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(o+=C(n[0],n[n.length-1],t))}else a.type==="extent"&&(o+=2*C([a.xmin,a.ymin,0],[a.xmax,a.ymin,0],t),o+=2*C([a.xmin,a.ymin,0],[a.xmin,a.ymax,0],t),o*=2,o+=4*Math.abs(w(a.zmax,0)*t-w(a.zmin,0)*t));const c=new A({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:[[[0,0],[0,o]]]});return U(c,e)}function le(a){a.mode==="async"&&(a.functions.disjoint=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]===null||n[1]===null||pn(n[0],n[1])))},a.functions.intersects=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&yn(n[0],n[1])))},a.functions.touches=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&vn(n[0],n[1])))},a.functions.crosses=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&gn(n[0],n[1])))},a.functions.within=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},a.functions.contains=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},a.functions.overlaps=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},a.functions.equals=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(h(n,2,2,e,t),n[0]===n[1]||(n[0]instanceof u&&n[1]instanceof u?Fn(n[0],n[1]):(W(n[0])&&W(n[1])||!!(V(n[0])&&V(n[1])||H(n[0])&&H(n[1])))&&n[0].equals(n[1]))))},a.functions.relate=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,3,3,e,t),n[0]instanceof u&&n[1]instanceof u)return bn(n[0],n[1],E(n[2]));if(n[0]instanceof u&&n[1]===null||n[1]instanceof u&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new i(e,s.InvalidParameter,t)})},a.functions.intersection=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]===null||n[1]===null?null:Rn(n[0],n[1])))},a.functions.union=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{const r=[];if((n=d(n)).length===0)throw new i(e,s.WrongNumberOfParameters,t);if(n.length===1)if(g(n[0])){const l=d(n[0]);for(let f=0;f<l.length;f++)if(l[f]!==null){if(!(l[f]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(l[f])}}else{if(!P(n[0])){if(n[0]instanceof u)return J(I(n[0]),e.spatialReference);if(n[0]===null)return null;throw new i(e,s.InvalidParameter,t)}{const l=d(n[0].toArray());for(let f=0;f<l.length;f++)if(l[f]!==null){if(!(l[f]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(l[f])}}}else for(let l=0;l<n.length;l++)if(n[l]!==null){if(!(n[l]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(n[l])}return r.length===0?null:Nn(r)})},a.functions.difference=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]===null?null:n[1]===null?I(n[0]):Sn(n[0],n[1])))},a.functions.symmetricdifference=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>(F(n=d(n),e,t),n[0]===null&&n[1]===null?null:n[0]===null?I(n[1]):n[1]===null?I(n[0]):On(n[0],n[1])))},a.functions.clip=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[1]instanceof L)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[1]===null?null:Dn(n[0],n[1])})},a.functions.cut=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[1]instanceof A)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return[];if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[1]===null?[I(n[0])]:jn(n[0],n[1])})},a.functions.area=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(M(n[0])){const r=await n[0].sumArea(T(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(g(n[0])||P(n[0])){const r=K(n[0],e.spatialReference);return r===null?0:x(r,T(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return x(n[0],T(w(n[1],-1)))})},a.functions.areageodetic=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(M(n[0])){const r=await n[0].sumArea(T(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(g(n[0])||P(n[0])){const r=K(n[0],e.spatialReference);return r===null?0:$(r,T(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return $(n[0],T(w(n[1],-1)))})},a.functions.length=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(M(n[0])){const r=await n[0].sumLength(p(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(g(n[0])||P(n[0])){const r=j(n[0],e.spatialReference);return r===null?0:U(r,p(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return U(n[0],p(w(n[1],-1)))})},a.functions.length3d=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(g(n[0])||P(n[0])){const r=j(n[0],e.spatialReference);return r===null?0:r.hasZ===!0?sn(r,p(w(n[1],-1))):U(r,p(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[0].hasZ===!0?sn(n[0],p(w(n[1],-1))):U(n[0],p(w(n[1],-1)))})},a.functions.lengthgeodetic=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(M(n[0])){const r=await n[0].sumLength(p(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(g(n[0])||P(n[0])){const r=j(n[0],e.spatialReference);return r===null?0:z(r,p(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return z(n[0],p(w(n[1],-1)))})},a.functions.distance=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{n=d(n),h(n,2,3,e,t);let r=n[0];(g(n[0])||P(n[0]))&&(r=k(n[0],e.spatialReference));let l=n[1];if((g(n[1])||P(n[1]))&&(l=k(n[1],e.spatialReference)),!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(l instanceof u))throw new i(e,s.InvalidParameter,t);return Tn(r,l,p(w(n[2],-1)))})},a.functions.distancegeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{n=d(n),h(n,2,3,e,t);const r=n[0],l=n[1];if(!(r instanceof O))throw new i(e,s.InvalidParameter,t);if(!(l instanceof O))throw new i(e,s.InvalidParameter,t);const f=new A({paths:[],spatialReference:r.spatialReference});return f.addPath([r,l]),z(f,p(w(n[2],-1)))})},a.functions.densify=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);if(r<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof D||n[0]instanceof A?nn(n[0],r,p(w(n[2],-1))):n[0]instanceof L?nn(D.fromExtent(n[0]),r,p(w(n[2],-1))):n[0]})},a.functions.densifygeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);if(r<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof D||n[0]instanceof A?en(n[0],r,p(w(n[2],-1))):n[0]instanceof L?en(D.fromExtent(n[0]),r,p(w(n[2],-1))):n[0]})},a.functions.generalize=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,4,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return Ln(n[0],r,wn(w(n[2],!0)),p(w(n[3],-1)))})},a.functions.buffer=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return r===0?I(n[0]):Cn(n[0],r,p(w(n[2],-1)))})},a.functions.buffergeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return r===0?I(n[0]):Jn(n[0],r,p(w(n[2],-1)))})},a.functions.offset=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,6,e,t),n[0]===null)return null;if(!(n[0]instanceof D||n[0]instanceof A))throw new i(e,s.InvalidParameter,t);const r=b(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);const l=b(w(n[4],10));if(isNaN(l))throw new i(e,s.InvalidParameter,t);const f=b(w(n[5],0));if(isNaN(f))throw new i(e,s.InvalidParameter,t);return Mn(n[0],r,p(w(n[2],-1)),E(w(n[3],"round")).toLowerCase(),l,f)})},a.functions.rotate=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=n[0]instanceof L?D.fromExtent(n[0]):n[0],l=b(n[1]);if(isNaN(l))throw new i(e,s.InvalidParameter,t);const f=w(n[2],null);if(f===null)return tn(r,l);if(f instanceof O)return tn(r,l,f);throw new i(e,s.InvalidParameter,t)})},a.functions.centroid=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;let r=n[0];if((g(n[0])||P(n[0]))&&(r=k(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);return r instanceof O?J(I(r),e.spatialReference):r instanceof D?r.centroid:r instanceof A?ln(r):r instanceof G?on(r):r instanceof L?r.center:null})},a.functions.measuretocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((g(n[0])||P(n[0]))&&(r=j(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof A))throw new i(e,s.InvalidParameter,t);if(q(n[1]===!1))throw new i(e,s.InvalidParameter,t);const l=cn(r,n[1]);return l?N.convertObjectToArcadeDictionary(l,S(e),!1,!0):null})},a.functions.pointtocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((g(n[0])||P(n[0]))&&(r=j(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof A))throw new i(e,s.InvalidParameter,t);const l=n[1];if(l===null)return null;if(!(l instanceof O))throw new i(e,s.InvalidParameter,t);if(q(n[1]===!1))throw new i(e,s.InvalidParameter,t);const f=fn(r,l);return f?N.convertObjectToArcadeDictionary(f,S(e),!1,!0):null})},a.functions.distancetocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((g(n[0])||P(n[0]))&&(r=j(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof A))throw new i(e,s.InvalidParameter,t);if(q(n[1]===!1))throw new i(e,s.InvalidParameter,t);const l=dn(r,n[1]);return l?N.convertObjectToArcadeDictionary(l,S(e),!1,!0):null})},a.functions.multiparttosinglepart=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);if(n[0]instanceof O)return[J(I(n[0]),e.spatialReference)];if(n[0]instanceof L)return[J(I(n[0]),e.spatialReference)];const r=await rn(n[0]);if(r instanceof D){const l=[],f=[];for(let m=0;m<r.rings.length;m++)if(r.isClockwise(r.rings[m])){const y=Q({rings:[r.rings[m]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});l.push(y)}else f.push({ring:r.rings[m],pt:r.getPoint(m,0)});for(let m=0;m<f.length;m++)for(let y=0;y<l.length;y++)if(l[y].contains(f[m].pt)){l[y].addRing(f[m].ring);break}return l}if(r instanceof A){const l=[];for(let f=0;f<r.paths.length;f++){const m=Q({paths:[r.paths[f]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});l.push(m)}return l}if(n[0]instanceof G){const l=[],f=J(I(n[0]),e.spatialReference);for(let m=0;m<f.points.length;m++)l.push(f.getPoint(m));return l}return null})},a.functions.issimple=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return!0;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return Un(n[0])})},a.functions.simplify=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return rn(n[0])})},a.functions.convexhull=function(e,t){return a.standardFunctionAsync(e,t,(o,c,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return Zn(n[0])})},a.functions.getuser=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{h(n,0,2,e,t);let r=w(n[1],""),l=r===!0;if(r=r===!0||r===!1?"":E(r),n.length===0||n[0]instanceof B){let m;m=e.services?.portal?e.services.portal:_.getDefault(),n.length>0&&(m=X(n[0],m));const y=await an(m,r,l);if(y){const R=JSON.parse(JSON.stringify(y));for(const v of["lastLogin","created","modified"])R[v]!==void 0&&R[v]!==null&&(R[v]=new Date(R[v]));return N.convertObjectToArcadeDictionary(R,S(e))}return null}let f=null;if(M(n[0])&&(f=n[0]),f){if(l=!1,r)return null;await f.load();const m=await f.getOwningSystemUrl();if(!m){if(!r){const v=await f.getIdentityUser();return v?N.convertObjectToArcadeDictionary({username:v},S(e)):null}return null}let y;y=e.services?.portal?e.services.portal:_.getDefault(),y=X(new B(m),y);const R=await an(y,r,l);if(R){const v=JSON.parse(JSON.stringify(R));for(const Z of["lastLogin","created","modified"])v[Z]!==void 0&&v[Z]!==null&&(v[Z]=new Date(v[Z]));return N.convertObjectToArcadeDictionary(v,S(e))}return null}throw new i(e,s.InvalidParameter,t)})},a.functions.nearestcoordinate=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[0]instanceof u||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof O||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const r=await En(n[0],n[1]);return r===null?null:N.convertObjectToArcadeDictionary({coordinate:r.coordinate,distance:r.distance,sideOfLine:r.distance===0?"straddle":r.isRightSide?"right":"left"},S(e),!1,!0)})},a.functions.nearestvertex=function(e,t){return a.standardFunctionAsync(e,t,async(o,c,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[0]instanceof u||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof O||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const r=await kn(n[0],n[1]);return r===null?null:N.convertObjectToArcadeDictionary({coordinate:r.coordinate,distance:r.distance,sideOfLine:r.distance===0?"straddle":r.isRightSide?"right":"left"},S(e),!1,!0)})})}export{le as registerFunctions};