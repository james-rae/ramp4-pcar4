import{ay as q,bf as x,gI as m,be as D,ft as F,B as W,s as fn,ce as g,O as H,bt as hn,as as pn,bA as dn,aR as mn,bB as gn,gJ as wn,D as yn,gK as _n,aP as N,aO as kn,gL as Rn,c9 as Q,cJ as V,eA as X}from"./main-umVzVZ3H.js";import{n as E,G as vn,E as jn}from"./projectBuffer-C4EMD_TQ.js";function Y(e,t,n,r,s,i){return L[0]=e,L[1]=t,L[2]=n,E(L,r,0,s,i,0)}const L=q();let Z=0;class j{static fromGE(t){const n=new j;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n}constructor(t){this.uid=Z++,t?(this._wkt=t.wkt!=null?t.wkt:null,this._wkid=t.wkid!=null?t.wkid:-1,this._isInverse=t.isInverse!=null&&t.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=Z++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=Z++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=Z++}getInverse(){const t=new j;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}let P=class I{static cacheKey(t,n){return[t.wkid?.toString()??"-1",t.wkt?.toString()??"",t.wkt2?.toString()??"",n.wkid?.toString()??"-1",n.wkt?.toString()??"",n.wkt2?.toString()??""].join()}static fromGE(t){const n=new I;let r="";for(const s of t.steps){const i=j.fromGE(s);n.steps.push(i),r+=i.uid.toString()+","}return n._cachedProjection={},n._gtlistentry=null,n._chain=r,n}constructor(t){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,t?.steps)for(const n of t.steps)n instanceof j?this.steps.push(n):this.steps.push(new j({wkid:n.wkid,wkt:n.wkt,isInverse:n.isInverse}))}getInverse(){const t=new I;t.steps=[];for(let n=this.steps.length-1;n>=0;n--){const r=this.steps[n];t.steps.push(r.getInverse())}return t}getGTListEntry(){let t="";for(const n of this.steps)t+=n.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,n,r){this._cachedProjection[I.cacheKey(t,n)]=r}getCachedGeTransformation(t,n){let r="";for(const i of this.steps)r+=i.uid.toString()+",";r!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=r);const s=this._cachedProjection[I.cacheKey(t,n)];return s===void 0?null:s}};function $(e,t,n){if(t==null||n==null||n.vcsWkid||x(t,n)||m(t)||m(n))return null;const r=D(t)/D(n);if(r===1)return null;switch(e){case"point":case"esriGeometryPoint":return s=>xn(s,r);case"polyline":case"esriGeometryPolyline":return s=>zn(s,r);case"polygon":case"esriGeometryPolygon":return s=>Pn(s,r);case"multipoint":case"esriGeometryMultipoint":return s=>Gn(s,r);case"extent":case"esriGeometryEnvelope":return s=>In(s,r);default:return null}}function xn(e,t){e?.z!=null&&(e.z*=t)}function Pn(e,t){if(e)for(const n of e.rings)for(const r of n)r.length>2&&(r[2]*=t)}function zn(e,t){if(e)for(const n of e.paths)for(const r of n)r.length>2&&(r[2]*=t)}function Gn(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}function In(e,t){e&&e.zmin!=null&&e.zmax!=null&&(e.zmin*=t,e.zmax*=t)}let d=null,w=null,z=null,b={};const T=new kn;function k(){return!!d&&Rn()}function U(){return!!k()||(N(T),R(),!1)}function nn(e,t){return!e||!t||y(e,t)||U()}function Sn(e,t){return!y(e,t)&&!k()}function R(e){return z==null&&(z=Promise.all([wn(),import("./geometryEngineBase-DueYg7ux.js").then(t=>t.g),import("./hydrated-B6K5kaKV.js")])),z.then(([,t,{hydratedAdapter:n}])=>{yn(e),w=n,d=t.default,d._enableProjection(_n),T.notify()})}function C(e,t,n=null,r=null){return Array.isArray(e)?e.length===0?[]:A(w,e,e[0].spatialReference,t,n,r):A(w,[e],e.spatialReference,t,n,r)[0]}function A(e,t,n,r,s=null,i=null){if(n==null||r==null)return t;if(y(n,r,s))return t.map(o=>G(o,n,r));if(s==null&&F(n))return t.map(o=>G(o,n,W.WGS84)).map(o=>v(o,r));if(s==null&&F(r))return t.map(o=>v(o,W.WGS84)).map(o=>G(o,W.WGS84,r));if(s==null){const o=P.cacheKey(n,r);b[o]!==void 0?s=b[o]:((s=B(n,r,void 0))==null&&(s=new P),b[o]=s)}if(d==null||e==null)throw new O;return i!=null?d._project(e,t,n,r,s,i):d._project(e,t,n,r,s)}function tn(e,t){const n=K([e],t);return n.pending!=null?{pending:n.pending,geometry:null}:n.geometries!=null?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function K(e,t){if(!k()){for(const n of e)if(n!=null&&!x(n.spatialReference,t)&&g(n.spatialReference)&&g(t)&&!y(n.spatialReference,t))return N(T),{pending:R(),geometries:null}}return{pending:null,geometries:e.map(n=>n==null?null:x(n.spatialReference,t)?n:g(n.spatialReference)&&g(t)?v(n,t):null)}}function B(e,t,n=null){if(e==null||t==null)return null;if(d==null||w==null)throw new O;const r=d._getTransformation(w,e,t,n,n?.spatialReference);return r!==null?P.fromGE(r):null}function Mn(e,t,n=null){if(d==null||w==null)throw new O;const r=d._getTransformationBySuitability(w,e,t,n,n?.spatialReference);if(r!==null){const s=[];for(const i of r)s.push(P.fromGE(i));return s}return[]}class O extends fn{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function En(){d=null,w=null,z=null,b={}}const Ln={get loadPromise(){return z}};function v(e,t){try{const n=C(e,t);return n==null?null:("xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax),$(n.type,e.spatialReference,t)?.(n),n)}catch(n){if(!(n instanceof O))throw n;return null}}async function Zn(e,t,n){const r=e.spatialReference;return r!=null&&t!=null&&await J(r,t,null,n),v(e,t)}function y(e,t,n){return!n&&(!!x(e,t)||g(e)&&g(t)&&!!vn(e,t,jn))}function en(e,t){if(x(e,t))return!0;if(!g(e)||!g(t))return!1;const n=Q(e)||V(e)||X(e),r=Q(t)||V(t)||X(t);return n&&r}async function J(e,t,n,r){if(k())return H(r);if(Array.isArray(e)){for(const{source:s,dest:i,geographicTransformation:o}of e)if(s&&i&&!y(s,i,o))return R(r)}else if(e&&t&&!y(e,t,n))return R(r);return H(r)}function G(e,t,n){return e?"x"in e?rn(e,t,new hn,n,0):"xmin"in e?un(e,t,new pn,n,0):"rings"in e?an(e,t,new dn,n,0):"paths"in e?on(e,t,new mn,n,0):"points"in e?sn(e,t,new gn,n,0):null:null}function bn(e,t,n=t.spatialReference,r=0){return n!=null&&e.spatialReference!=null&&rn(e,e.spatialReference,t,n,r)!=null}function rn(e,t,n,r,s){u[0]=e.x,u[1]=e.y;const i=e.z;return u[2]=i!==void 0?i:s,E(u,t,0,u,r,0)?(n.x=u[0],n.y=u[1],n.spatialReference=r,i!==void 0||m(r)?(n.z=u[2],n.hasZ=!0):(n.z=void 0,n.hasZ=!1),e.m===void 0?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}function An(e,t,n=t.spatialReference,r=0){return e.spatialReference!=null&&n!=null&&sn(e,e.spatialReference,t,n,r)!=null}function sn(e,t,n,r,s){const{points:i,hasZ:o,hasM:a}=e,l=[],h=i.length,p=[];for(const c of i)p.push(c[0],c[1],o?c[2]:s);if(!E(p,t,0,p,r,0,h))return null;const f=o||m(r);for(let c=0;c<h;++c){const _=3*c,S=p[_],M=p[_+1];f&&a?l.push([S,M,p[_+2],i[c][3]]):f?l.push([S,M,p[_+2]]):a?l.push([S,M,i[c][2]]):l.push([S,M])}return n.points=l,n.spatialReference=r,n.hasZ=o,n.hasM=a,n}function On(e,t,n=t.spatialReference,r=0){return e.spatialReference!=null&&n!=null&&on(e,e.spatialReference,t,n,r)!=null}function on(e,t,n,r,s){const{paths:i,hasZ:o,hasM:a}=e,l=[];if(!cn(i,o??!1,a??!1,t,l,r,s))return null;const h=o||m(r);return n.paths=l,n.spatialReference=r,n.hasZ=h,n.hasM=a,n}function ln(e,t,n=t.spatialReference,r=0){return e.spatialReference!=null&&n!=null&&an(e,e.spatialReference,t,n,r)!=null}function an(e,t,n,r,s){const{rings:i,hasZ:o,hasM:a}=e,l=[];if(!cn(i,o??!1,a??!1,t,l,r,s))return null;const h=o||m(r);return n.rings=l,n.spatialReference=r,n.hasZ=h,n.hasM=a,n}function Wn(e,t,n=t.spatialReference,r=0){return e.spatialReference!=null&&n!=null&&un(e,e.spatialReference,t,n,r)!=null}function un(e,t,n,r,s){const{xmin:i,ymin:o,xmax:a,ymax:l,hasZ:h,hasM:p}=e,f=h?e.zmin:s;if(!Y(i,o,f,t,u,r))return null;const c=h||m(r);n.xmin=u[0],n.ymin=u[1],c&&(n.zmin=u[2]);const _=h?e.zmax:s;return Y(a,l,_,t,u,r)?(n.xmax=u[0],n.ymax=u[1],c&&(n.zmax=u[2]),p&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=r,n):null}function cn(e,t,n,r,s,i,o=0){const a=new Array;for(const p of e)for(const f of p)a.push(f[0],f[1],t?f[2]:o);if(!E(a,r,0,a,i,0))return!1;let l=0;s.length=0;const h=t||m(i);for(const p of e){const f=new Array;for(const c of p)h&&n?f.push([a[l++],a[l++],a[l++],c[3]]):h?f.push([a[l++],a[l++],a[l++]]):n?(f.push([a[l++],a[l++],c[2]]),l++):(f.push([a[l++],a[l++]]),l++);s.push(f)}return!0}const u=q(),Tn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:y,getTransformation:B,getTransformations:Mn,initializeProjection:J,isEqualBaseGCS:en,isLoaded:k,isLoadedOrLoad:U,isLoadedOrLoadFor:nn,load:R,project:C,projectExtent:Wn,projectMany:A,projectMultipoint:An,projectOrLoad:tn,projectOrLoadMany:K,projectPoint:bn,projectPolygon:ln,projectPolyline:On,projectWithZConversion:Zn,projectWithoutEngine:G,requiresLoad:Sn,test:Ln,tryProjectWithZConversion:v,unload:En},Symbol.toStringTag,{value:"Module"}));export{nn as B,v as H,y as J,C as K,en as L,J as N,A as O,G as Q,tn as V,R as W,K as X,B as Y,k as _,ln as a,$ as o,Tn as p,P as s};