const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-5ScVeRQz.js","./geometryEngineBase-8g0RzW7z.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{_ as D}from"./preload-helper-ExcqyqRp.js";import{h9 as Z,ha as J,ab as v,cM as E,hb as W,hc as H,s as $,cj as O,aY as K}from"./main-DMwRPB7V.js";import{I as L,P as M,$ as k,H as z,U as B,a as F,h as Q,K as q}from"./featureConversionUtils-DRzlvKz4.js";import{s as T}from"./OptimizedFeature-CIptWNVu.js";import{x as X}from"./queryUtils-B32ImuGj.js";const C=new T,ee=new T,w=new T,b={esriGeometryPoint:M,esriGeometryPolyline:k,esriGeometryPolygon:z,esriGeometryMultipoint:B};function Ee(e,t,n,s=e.hasZ,i=e.hasM){if(t==null)return null;const r=e.hasZ&&s,l=e.hasM&&i;if(n){const o=F(w,t,e.hasZ,e.hasM,"esriGeometryPoint",n,s,i);return M(o,r,l)}return M(t,r,l)}function P(e,t,n,s,i,r,l=t,o=n){const u=t&&l,a=n&&o,f=s!=null?"coords"in s?s:s.geometry:null;if(f==null)return null;if(i){let c=Q(ee,f,t,n,e,i,l,o);return r&&(c=F(w,c,u,a,e,r)),b[e]?.(c,u,a)??null}if(r){const c=F(w,f,t,n,e,r,l,o);return b[e]?.(c,u,a)??null}return L(C,f,t,n,l,o),b[e]?.(C,u,a)??null}function $e(e){return e&&x in e?JSON.parse(JSON.stringify(e,te)):e}const x="_geVersion",te=(e,t)=>e!==x?t:void 0;function A(e,t){return e?t?4:3:t?3:2}function be(e,t,n,s){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,r=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:o,coords:u}=t,a=A(n,s);let f=0;for(const c of o){const m=re(l,u,f,c,n,s);m&&r.push(m),f+=c*a}if(r.sort((c,m)=>{let p=c[2]-m[2];return p===0&&n&&(p=c[4]-m[4]),p}),r.length){let c=6*r[0][2];i[0]=r[0][0]/c,i[1]=r[0][1]/c,n&&(c=6*r[0][4],i[2]=c!==0?r[0][3]/c:0),(i[0]<l[0]||i[0]>l[1]||i[1]<l[2]||i[1]>l[3]||n&&(i[2]<l[4]||i[2]>l[5]))&&(i.length=0)}if(!i.length){const c=t.lengths[0]?ne(u,0,o[0],n,s):null;if(!c)return null;i[0]=c[0],i[1]=c[1],n&&c.length>2&&(i[2]=c[2])}return e}function re(e,t,n,s,i,r){const l=A(i,r);let o=n,u=n+l,a=0,f=0,c=0,m=0,p=0;for(let d=0,G=s-1;d<G;d++,o+=l,u+=l){const h=t[o],N=t[o+1],g=t[o+2],y=t[u],R=t[u+1],Y=t[u+2];let S=h*R-y*N;m+=S,a+=(h+y)*S,f+=(N+R)*S,i&&(S=h*Y-y*g,c+=(g+Y)*S,p+=S),h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),N<e[2]&&(e[2]=N),N>e[3]&&(e[3]=N),i&&(g<e[4]&&(e[4]=g),g>e[5]&&(e[5]=g))}if(m>0&&(m*=-1),p>0&&(p*=-1),!m)return null;const I=[a,f,.5*m];return i&&(I[3]=c,I[4]=.5*p),I}function ne(e,t,n,s,i){const r=A(s,i);let l=t,o=t+r,u=0,a=0,f=0,c=0;for(let m=0,p=n-1;m<p;m++,l+=r,o+=r){const I=e[l],d=e[l+1],G=e[l+2],h=e[o],N=e[o+1],g=e[o+2],y=s?se(I,d,G,h,N,g):ie(I,d,h,N);if(y)if(u+=y,s){const R=oe(I,d,G,h,N,g);a+=y*R[0],f+=y*R[1],c+=y*R[2]}else{const R=le(I,d,h,N);a+=y*R[0],f+=y*R[1]}}return u>0?s?[a/u,f/u,c/u]:[a/u,f/u]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function ie(e,t,n,s){const i=n-e,r=s-t;return Math.sqrt(i*i+r*r)}function se(e,t,n,s,i,r){const l=s-e,o=i-t,u=r-n;return Math.sqrt(l*l+o*o+u*u)}function le(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function oe(e,t,n,s,i,r){return[e+.5*(s-e),t+.5*(i-t),n+.5*(r-n)]}function ue(e){return e==="mesh"?Z:J(e)}function j(e,t){return e?t?4:3:t?3:2}function ae(e,t,n,s){return U(e,t,n,s.coords[0],s.coords[1])}function ce(e,t,n,s,i,r){const l=j(i,r),{coords:o,lengths:u}=s;if(!u)return!1;for(let a=0,f=0;a<u.length;a++,f+=l)if(!U(e,t,n,o[f],o[f+1]))return!1;return!0}function U(e,t,n,s,i){if(!e)return!1;const r=j(t,n),{coords:l,lengths:o}=e;let u=!1,a=0;for(const f of o)u=fe(u,l,r,a,f,s,i),a+=f*r;return u}function fe(e,t,n,s,i,r,l){let o=e,u=s;for(let a=s,f=s+i*n;a<f;a+=n){u=a+n,u===f&&(u=s);const c=t[a],m=t[a+1],p=t[u],I=t[u+1];(m<l&&I>=l||I<l&&m>=l)&&c+(l-m)/(I-m)*(p-c)<r&&(o=!o)}return o}const _="unsupported-query",me={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},V={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function pe(e){return e!=null&&V.spatialRelationship[e]===!0}function Ie(e){return e!=null&&V.queryGeometry[K(e)]===!0}function he(e){return e!=null&&V.layerGeometry[e]===!0}function Ne(){return D(()=>import("./geometryEngineJSON-5ScVeRQz.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}function _e(e,t,n,s,i){if(v(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=q(new T,t,!1,!1);return Promise.resolve(l=>ae(r,!1,!1,l))}if(v(t)&&n==="esriGeometryMultipoint"){const r=q(new T,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>ce(r,!1,!1,l,s,i))}if(E(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>W(t,P(n,s,i,r)));if(E(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>H(t,P(n,s,i,r)));if(E(t)&&e==="esriSpatialRelIntersects"){const r=ue(n);return Promise.resolve(l=>r(t,P(n,s,i,l)))}return Ne().then(r=>{const l=r[me[e]].bind(null,t.spatialReference,t);return o=>l(P(n,s,i,o))})}async function ve(e,t,n){const{spatialRel:s,geometry:i}=e;if(i){if(!pe(s))throw new $(_,"Unsupported query spatial relationship",{query:e});if(O(i.spatialReference)&&O(n)){if(!Ie(i))throw new $(_,"Unsupported query geometry type",{query:e});if(!he(t))throw new $(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return X(e.geometry?.spatialReference,e.outSR)}}}function Me(e){if(E(e))return!0;if(v(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Fe(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:s,endTimeField:i}=e;let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(s&&i)await t.forEach(o=>{const u=n.getAttribute(o,s),a=n.getAttribute(o,i);u==null||isNaN(u)||(r=Math.min(r,u)),a==null||isNaN(a)||(l=Math.max(l,a))});else{const o=s||i;await t.forEach(u=>{const a=n.getAttribute(u,o);a==null||isNaN(a)||(r=Math.min(r,a),l=Math.max(l,a))})}return{start:r,end:l}}function we(e,t,n){if(!t||!e)return null;const{startTimeField:s,endTimeField:i}=e;if(!s&&!i)return null;const{start:r,end:l}=t;if(r===null&&l===null)return null;if(r===void 0&&l===void 0)return Re();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return s&&i?ye(o,s,i,r,l):ge(o,s||i,r,l)}function ye(e,t,n,s,i){return s!=null&&i!=null?r=>{const l=e(r,t),o=e(r,n);return(l==null||l<=i)&&(o==null||o>=s)}:s!=null?r=>{const l=e(r,n);return l==null||l>=s}:i!=null?r=>{const l=e(r,t);return l==null||l<=i}:void 0}function ge(e,t,n,s){return n!=null&&s!=null&&n===s?i=>e(i,t)===n:n!=null&&s!=null?i=>{const r=e(i,t);return r!=null&&r>=n&&r<=s}:n!=null?i=>{const r=e(i,t);return r!=null&&r>=n}:s!=null?i=>{const r=e(i,t);return r!=null&&r<=s}:void 0}function Re(){return()=>!1}export{Me as I,_e as P,P as a,Fe as b,$e as h,be as n,we as t,ve as v,Ee as y};