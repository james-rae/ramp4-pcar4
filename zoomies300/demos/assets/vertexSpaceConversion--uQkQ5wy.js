import{eD as z,eE as sn,eF as cn,eG as fn,eH as pn,aC as L,eI as mn,eJ as An,a3 as gn,n as Tn,eK as yn}from"./main-Di-bOCuA.js";import{j as V,n as Q}from"./mat3-XZDRtl20.js";import{e as X}from"./mat3f64-q3fE-ZOt.js";import{h as S,B as En,n as Rn,c as U,f as Z}from"./mat4-BOemVfAI.js";import{e as v,o as nn}from"./mat4f64-CSKppSlJ.js";import{N as W,A as Fn,y as rn,c as Nn,E as $n}from"./vec32-BS8FjKab.js";import{a as tn,w as dn}from"./spatialReferenceEllipsoidUtils-hElfClsc.js";import{C as O}from"./computeTranslationToOriginAndRotation-CPal3dOt.js";import{c as q}from"./projectPointToVector-Ci_hf00W.js";import{a as On,m as _n}from"./meshVertexSpaceUtils-fkqNhkRS.js";import{f as B,l as en,i as C,e as D}from"./vec3-BNH8513T.js";import{n as on}from"./projectBuffer-zW0fznMI.js";import{i as N,T as $}from"./BufferView-DK8As6KS.js";import{n as wn}from"./vec4-BU53DteS.js";const lr="Projection may be possible after calling projection.load().";function y(n,r,t,e){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function Cn(n,r,t,e,o,l){return G(F.TO_PCPF,N.fromTypedArray(n),R.NORMAL,$.fromTypedArray(r),t,$.fromTypedArray(e),o,N.fromTypedArray(l))?l:null}function Pn(n,r,t,e,o,l){return G(F.FROM_PCPF,N.fromTypedArray(n),R.NORMAL,$.fromTypedArray(r),t,$.fromTypedArray(e),o,N.fromTypedArray(l))?l:null}function hn(n,r,t,e){return on(n,r,0,t,e,0)?t:null}function xn(n,r,t,e){return on(n,r,0,t,e,0)?t:null}function an(n,r,t){return V(f,t),B(r,n,f),z(f)&&en(r,r),r}function ln(n,r,t){return Q(f,t),wn(r,n,f),z(f)&&en(r,r,4),r}function Sn(n,r,t,e,o,l){if(!G(F.TO_PCPF,N.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),R.TANGENT,$.fromTypedArray(r),t,$.fromTypedArray(e),o,N.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function vn(n,r,t,e,o,l){if(!G(F.FROM_PCPF,N.fromTypedArray(n,16),R.TANGENT,$.fromTypedArray(r),t,$.fromTypedArray(e),o,N.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var R,F;function H(n,r,t,e,o){switch(O(e,t,_,e),n===F.FROM_PCPF&&S(_,_),r){case R.NORMAL:return V(o,_);case R.TANGENT:return Q(o,_)}}function G(n,r,t,e,o,l,a,i){if(!r)return;const c=e.count;if(Gn(o))for(let u=0;u<c;u++)l.getVec(u,x),r.getVec(u,T),W(T,T,H(n,t,x,a,f)),i.setVec(u,T);else for(let u=0;u<c;u++){l.getVec(u,x),r.getVec(u,T);const p=sn(e.get(u,1));let s=Math.cos(p);t===R.TANGENT!=(n===F.TO_PCPF)&&(s=1/s),H(n,t,x,a,f),n===F.TO_PCPF?(f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s):(f[0]*=s,f[3]*=s,f[6]*=s,f[1]*=s,f[4]*=s,f[7]*=s),W(T,T,f),Fn(T,T),i.setVec(u,T)}return i}function Gn(n){return n.isWGS84||cn(n)||fn(n)||pn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(R||(R={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const x=L(),T=L(),_=v(),f=X(),A=()=>Tn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function ir(n,r,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const u=n;if(!q(r,u,e))return!1;const{origin:p}=t;return Nn(n,u,p),!0}const o=tn(e),l=n;if(!q(r,l,o))return!1;const{origin:a}=t,i=K;if(!O(e,a,i,o))return!1;const c=S(K,i);return c!=null&&($n(n,l,c),!0)}function ur(n,r,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=n,a=On(e)?o:null,i=M(n.spatialReference,t,E.SOURCE_AND_TARGET);if(_n(e,r)&&(!a||En(a.localMatrix,nn))&&P(i)){const{position:c,normal:u,tangent:p}=l,s=t?.allowBufferReuse;return{position:s?c:c.slice(),normal:s?u:u?.slice(),tangent:s?p:p?.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?Bn(n,n.vertexSpace,r.origin,t):Un(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?Ln(n,n.vertexSpace,r.origin,t):Mn(n,n.vertexSpace,r.origin,t)}}function Mn({vertexAttributes:n,transform:r,spatialReference:t},{origin:e},o,l){const a=M(t,l,E.SOURCE_AND_TARGET),i=e||!P(a)?Rn(m,r?.localMatrix??nn):null;i&&j(i,t,l,E.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:p}=i?k(n,i):n,s=l?.allowBufferReuse,d=s?c:new Float64Array(c.length);let g=c;if(e&&(g=C(d,g,e)),o){const h=rn(un,o);g=C(d,g,h)}return{position:g!==n.position||s?g:g.slice(),normal:u!==n.normal||s?u:u?.slice(),tangent:p!==n.tangent||s?p:p?.slice()}}function b(n,r){return r?.useEllipsoid&&yn(n)?dn:tn(n)}function Un({spatialReference:n,vertexAttributes:r,transform:t},{origin:e},o,l){const a=b(n,l);if(!O(n,e,m,a))return y(A(),n,a),null;t&&U(m,m,t.localMatrix),j(m,n,l,E.SOURCE);const i=new Float64Array(r.position.length),c=Dn(r.position,m,n,i,a);if(!c)return null;const u=bn(c,n,i,a,r.normal,m);if(r.normal&&!u)return null;const p=kn(c,n,i,a,r.tangent,m);if(r.tangent&&!p)return null;if(o){const s=rn(un,o);C(c,c,s)}return{position:c,normal:u,tangent:p}}function Ln({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=b(r,l);if(!O(r,o,m,a))return y(A(),r,a),null;const i=1/M(r,l,E.TARGET);Z(m,m,[i,i,i]);const c=S(w,m),{position:u,normal:p,tangent:s}=Vn(n,e,t),d=new Float64Array(u.length),g=jn(u,r,c,d,a);if(!g)return null;const h=V(Wn,c),Y=Yn(p,u,r,d,a,h,p!==n.normal?p:void 0);if(!Y&&p)return null;const I=In(s,u,r,d,a,h,s!==n.tangent?s:void 0);return!I&&s?null:{position:g,normal:Y,tangent:I}}function Vn(n,r,t){if(!r)return n;if(!t){const{position:o,normal:l,tangent:a}=n;return{position:C(new Float64Array(o.length),o,r),tangent:a,normal:l}}const e=k(n,t.localMatrix);return C(e.position,e.position,r),e}function Bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:e},o,l){const a=b(r,l);if(!O(r,e,m,a))return y(A(),r,a),null;if(t&&U(m,m,t.localMatrix),!O(r,o,w,a))return y(A(),a,r),null;S(w,w);const i=U(m,w,m);return j(i,r,l,E.SOURCE_AND_TARGET),k(n,i)}function k(n,r){const t=new Float64Array(n.position.length);D(t,n.position,r);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&an(n.normal,e,r),o&&n.tangent&&ln(n.tangent,o,r),{position:t,normal:e,tangent:o}}function Dn(n,r,t,e,o){D(e,n,r);const l=new Float64Array(n.length);return xn(e,o,l,t)?l:(y(A(),o,t),null)}function bn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return an(o,a,l),Pn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function kn(n,r,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ln(o,a,l),vn(a,n,r,t,e,a)?a:(y(A(),e,r),null)}function j(n,r,t,e){const o=M(r,t,e);P(o)||Z(n,n,[o,o,o])}function M(n,r,t){const e=!!(t&E.SOURCE),o=!!(t&E.TARGET),l=r?.sourceUnit,a=r?.targetUnit;if(!l&&!a)return 1;let i=J(l,n);e||!l||P(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/J(a,n);return o||!a||P(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function P(n){return mn(n,1)}function jn(n,r,t,e,o){const l=hn(n,r,e,o);if(!l)return y(A(),r,o),null;const a=new Float64Array(l.length);return D(a,l,t),a}function Yn(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Cn(n,r,t,e,o,i)?(B(i,i,l),i):(y(A(),t,o),null)}function In(n,r,t,e,o,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Sn(n,r,t,e,o,i)?(B(i,i,l,4),i):(y(A(),t,o),null)}function J(n,r){if(n==null)return 1;const t=An(r);return 1/gn(t,"meters",n)}const m=v(),w=v(),Wn=X(),un=L(),K=v();var E;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(E||(E={}));export{ur as B,Cn as E,y as F,vn as G,lr as O,Pn as R,hn as g,xn as h,ir as k,J as n,Sn as w};
