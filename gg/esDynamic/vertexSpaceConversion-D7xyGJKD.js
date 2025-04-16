import{f6 as X,f7 as gn,f8 as yn,f9 as Rn,fa as En,aI as L,ad as dn,d0 as Fn,fb as Nn,fc as On,ab as _n,n as hn,fd as wn}from"./main-DTtQVgOw.js";import{j as b,n as H}from"./mat3-DOnW3DjW.js";import{e as J}from"./mat3f64-Dh9_zhFu.js";import{h as S,B as Mn,n as Pn,c as V,f as K}from"./mat4-DTP_Am9Z.js";import{e as v,o as Q}from"./mat4f64-BaJwL7tQ.js";import{N as Z,A as Cn,y as nn,c as Sn,E as vn}from"./vec32-E5gJqT0h.js";import{a as tn,w as xn}from"./spatialReferenceEllipsoidUtils-BL69ONT0.js";import{m as _}from"./computeTranslationToOriginAndRotation-DXFF9maP.js";import{c as rn}from"./projectPointToVector-COdzAngR.js";import{t as Gn,p as Un}from"./meshVertexSpaceUtils-D-hJLOD8.js";import{n as B,d as en,a as h,r as D}from"./vec3-CZ4zbe5r.js";import{o as on}from"./projectBuffer-B__kCbkz.js";import{i as N,T as O}from"./BufferView-DRopjhqu.js";import{o as Ln}from"./vec4-BMTdfgsL.js";const bn="Projection may be possible after calling projection.load().";function g(n,t,r,o){n.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${o?" ":""}${o}`)}function an(n,t,r,o,e,s){return x(F.TO_PCPF,N.fromTypedArray(n),A.NORMAL,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(s))?s:null}function sn(n,t,r,o,e,s){return x(F.FROM_PCPF,N.fromTypedArray(n),A.NORMAL,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(s))?s:null}function ln(n,t,r,o){return on(n,t,0,r,o,0)?r:null}function un(n,t,r,o){return on(n,t,0,r,o,0)?r:null}function k(n,t,r){return b(p,r),B(t,n,p),X(p)&&en(t,t),t}function j(n,t,r){return H(p,r),Ln(t,n,p),X(p)&&en(t,t,4),t}function Vn(n,t,r,o){const e=t===A.NORMAL;return cn(n,t,r,(s,a)=>{const l=Math.cos(Fn(s));a[0]=e?l:1/l,a[1]=1},o)}function Bn(n,t,r,o){const e=t===A.NORMAL;return cn(n,t,r,(s,a)=>{const l=Math.cosh(-s/dn.radius);a[0]=1,a[1]=e?l:1/l},o)}function cn(n,t,r,o,e){const s=t===A.NORMAL?3:4,a=[0,0];for(let l=0,c=1;l<n.length;l+=s,c+=3){o(r[c],a);const i=n[l]*a[0],f=n[l+1]*a[1],u=n[l+2],y=1/Math.sqrt(i*i+f*f+u*u);e[l]=i*y,e[l+1]=f*y,e[l+2]=u*y,s===4&&(e[l+3]=n[l+3])}return e}function fn(n,t,r,o,e,s){if(!x(F.TO_PCPF,N.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),A.TANGENT,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)s[a]=n[a];return s}function pn(n,t,r,o,e,s){if(!x(F.FROM_PCPF,N.fromTypedArray(n,16),A.TANGENT,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(s,16)))return null;for(let a=3;a<n.length;a+=4)s[a]=n[a];return s}var A,F;function mn(n,t,r,o,e){switch(_(o,r,w,o),n===F.FROM_PCPF&&S(w,w),t){case A.NORMAL:return b(e,w);case A.TANGENT:return H(e,w)}}function x(n,t,r,o,e,s,a,l){if(!t)return;const c=o.count;if(Dn(e))for(let i=0;i<c;i++)s.getVec(i,G),t.getVec(i,E),Z(E,E,mn(n,r,G,a,p)),l.setVec(i,E);else for(let i=0;i<c;i++){s.getVec(i,G),t.getVec(i,E);const f=gn(o.get(i,1));let u=Math.cos(f);r===A.TANGENT!=(n===F.TO_PCPF)&&(u=1/u),mn(n,r,G,a,p),n===F.TO_PCPF?(p[0]*=u,p[1]*=u,p[2]*=u,p[3]*=u,p[4]*=u,p[5]*=u):(p[0]*=u,p[3]*=u,p[6]*=u,p[1]*=u,p[4]*=u,p[7]*=u),Z(E,E,p),Cn(E,E),l.setVec(i,E)}return l}function Dn(n){return n.isWGS84||yn(n)||Rn(n)||En(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(A||(A={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const G=L(),E=L(),w=v(),p=J(),T=()=>hn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function kn(n,t,{vertexSpace:r,spatialReference:o}){if(r.type==="georeferenced"){const i=n;if(!rn(t,i,o))return!1;const{origin:f}=r;return Sn(n,i,f),!0}const e=tn(o),s=n;if(!rn(t,s,e))return!1;const{origin:a}=r,l=Tn;if(!_(o,a,l,e))return!1;const c=S(Tn,l);return c!=null&&(vn(n,s,c),!0)}function jn(n,t,r){const{vertexSpace:o,transform:e,vertexAttributes:s}=n,a=Gn(o)?e:null,l=U(n.spatialReference,r,d.SOURCE_AND_TARGET);if(Un(o,t)&&(!a||Mn(a.localMatrix,Q))&&M(l)){const{position:c,normal:i,tangent:f}=s,u=r?.allowBufferReuse;return{position:u?c:c.slice(),normal:u?i:i?.slice(),tangent:u?f:f?.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?Wn(n,n.vertexSpace,t.origin,r):Yn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?qn(n,n.vertexSpace,t.origin,r):$n(n,n.vertexSpace,t.origin,r)}}function $n({vertexAttributes:n,transform:t,spatialReference:r},{origin:o},e,s){const a=U(r,s,d.SOURCE_AND_TARGET),l=o||!M(a)?Pn(m,t?.localMatrix??Q):null;l&&q(l,r,s,d.SOURCE_AND_TARGET);const{position:c,normal:i,tangent:f}=l?Y(n,l):n,u=s?.allowBufferReuse,y=u?c:new Float64Array(c.length);let R=c;if(o&&(R=h(y,R,o)),e){const C=nn(An,e);R=h(y,R,C)}return{position:R!==n.position||u?R:R.slice(),normal:i!==n.normal||u?i:i?.slice(),tangent:f!==n.tangent||u?f:f?.slice()}}function $(n,t){return t?.useEllipsoid&&wn(n)?xn:tn(n)}function Yn({spatialReference:n,vertexAttributes:t,transform:r},{origin:o},e,s){const a=$(n,s);if(!_(n,o,m,a))return g(T(),n,a),null;r&&V(m,m,r.localMatrix),q(m,n,s,d.SOURCE);const l=new Float64Array(t.position.length),c=zn(t.position,m,n,l,a);if(!c)return null;const i=Xn(c,n,l,a,t.normal,m);if(t.normal&&!i)return null;const f=Hn(c,n,l,a,t.tangent,m);if(t.tangent&&!f)return null;if(e){const u=nn(An,e);h(c,c,u)}return{position:c,normal:i,tangent:f}}function qn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,s){const a=$(t,s);if(!_(t,e,m,a))return g(T(),t,a),null;const l=1/U(t,s,d.TARGET);K(m,m,[l,l,l]);const c=S(P,m),{position:i,normal:f,tangent:u}=In(n,o,r),y=new Float64Array(i.length),R=Jn(i,t,c,y,a);if(!R)return null;const C=b(Zn,c),W=Kn(f,i,t,y,a,C,f!==n.normal?f:void 0);if(!W&&f)return null;const z=Qn(u,i,t,y,a,C,u!==n.tangent?u:void 0);return!z&&u?null:{position:R,normal:W,tangent:z}}function In(n,t,r){if(!t)return n;if(!r){const{position:e,normal:s,tangent:a}=n;return{position:h(new Float64Array(e.length),e,t),tangent:a,normal:s}}const o=Y(n,r.localMatrix);return h(o.position,o.position,t),o}function Wn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,s){const a=$(t,s);if(!_(t,o,m,a))return g(T(),t,a),null;if(r&&V(m,m,r.localMatrix),!_(t,e,P,a))return g(T(),a,t),null;S(P,P);const l=V(m,P,m);return q(l,t,s,d.SOURCE_AND_TARGET),Y(n,l)}function Y(n,t){const r=new Float64Array(n.position.length);D(r,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&k(n.normal,o,t),e&&n.tangent&&j(n.tangent,e,t),{position:r,normal:o,tangent:e}}function zn(n,t,r,o,e){D(o,n,t);const s=new Float64Array(n.length);return un(o,e,s,r)?s:(g(T(),e,r),null)}function Xn(n,t,r,o,e,s){if(e==null)return null;const a=new Float32Array(e.length);return k(e,a,s),sn(a,n,t,r,o,a)?a:(g(T(),o,t),null)}function Hn(n,t,r,o,e,s){if(e==null)return null;const a=new Float32Array(e.length);return j(e,a,s),pn(a,n,t,r,o,a)?a:(g(T(),o,t),null)}function q(n,t,r,o){const e=U(t,r,o);M(e)||K(n,n,[e,e,e])}function U(n,t,r){const o=!!(r&d.SOURCE),e=!!(r&d.TARGET),s=t?.sourceUnit,a=t?.targetUnit;if(!s&&!a)return 1;let l=I(s,n);o||!s||M(l)||(T().warn("source unit conversion not supported"),l=1);let c=1/I(a,n);return e||!a||M(c)||(T().warn("target unit conversion not supported"),c=1),l*c}function M(n){return Nn(n,1)}function Jn(n,t,r,o,e){const s=ln(n,t,o,e);if(!s)return g(T(),t,e),null;const a=new Float64Array(s.length);return D(a,s,r),a}function Kn(n,t,r,o,e,s,a){if(n==null)return null;const l=a??new Float32Array(n.length);return an(n,t,r,o,e,l)?(B(l,l,s),l):(g(T(),r,e),null)}function Qn(n,t,r,o,e,s,a){if(n==null)return null;const l=a??new Float32Array(n.length);return fn(n,t,r,o,e,l)?(B(l,l,s,4),l):(g(T(),r,e),null)}function I(n,t){if(n==null)return 1;const r=On(t);return 1/_n(r,"meters",n)}const m=v(),P=v(),Zn=J(),An=L(),Tn=v();var d;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(d||(d={}));export{jn as B,j as C,an as E,g as F,pn as G,Bn as L,bn as O,sn as R,A as V,k as _,Vn as b,ln as g,un as h,kn as k,I as n,fn as w};
