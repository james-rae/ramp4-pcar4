import{bp as k,c9 as q,g0 as H,aI as b,g1 as J,g2 as K,g3 as G,cg as E,g4 as z,cl as h,ca as Q,eM as V,g5 as W,D as Y,di as Z,e0 as _}from"./main-DnRb_GMc.js";import{e as nn}from"./mat3f64-Dh9_zhFu.js";import{o as tn,e as S}from"./mat4f64-Dn1WEGBx.js";import{a as A}from"./spatialReferenceEllipsoidUtils-DqTpRRNP.js";import{u as R}from"./computeTranslationToOriginAndRotation-PdUGpf6M.js";import{m as en}from"./meshVertexSpaceUtils-D4LH1_PJ.js";import{i as v,e as C,f as B}from"./vec3-BT3iEUAo.js";import{logProjectionError as x,transformNormal as D,transformTangent as I,projectFromPCPF as rn,projectNormalFromPCPF as on,projectTangentFromPCPF as an,projectToPCPF as ln,projectNormalToPCPF as sn,projectTangentToPCPF as cn}from"./projection-BjG5akMT.js";function P(n,t,e,o){if(k(n.spatialReference,e)){w[0]=n.x,w[1]=n.y;const a=n.z;return w[2]=a??o??0,q(w,n.spatialReference,0,t,e,0,1)}const r=H(n,e);return!!r&&(t[0]=r?.x,t[1]=r?.y,t[2]=r?.z??o??0,!0)}const w=b(),g=()=>Y.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function un(n,t,{vertexSpace:e,spatialReference:o}){if(e.type==="georeferenced"){const u=n;if(!P(t,u,o))return!1;const{origin:c}=e;return Z(n,u,c),!0}const r=A(o),a=n;if(!P(t,a,r))return!1;const{origin:i}=e,l=$;if(!R(o,i,l,r))return!1;const s=h($,l);return s!=null&&(_(n,a,s),!0)}function fn(n,t,e){const{vertexSpace:o,transform:r,vertexAttributes:a}=n,i=T(n.spatialReference,e,p.SOURCE|p.TARGET);if(en(o,t)&&(!r||J(r.localMatrix,tn))&&K(i,1)){const{position:l,normal:s,tangent:u}=a,c=e?.allowBufferReuse;return{position:c?l:l.slice(),normal:c?s:s?.slice(),tangent:c?u:u?.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?xn(n,n.vertexSpace,t.origin,e):pn(n,n.vertexSpace,t.origin,e);case"georeferenced":return t.type==="local"?mn(n,n.vertexSpace,t.origin,e):gn(n,n.vertexSpace,t.origin,e)}}function gn({vertexAttributes:n,transform:t,spatialReference:e},{origin:o},r,a){const{position:i,normal:l,tangent:s}=t?N(n,t.localMatrix):n,u=new Float64Array(i.length);let c=i;if(o&&(c=v(u,c,o)),r){const F=G(X,r);c=v(u,c,F)}T(e,a,p.NONE);const m=a?.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:l!==n.normal||m?l:l?.slice(),tangent:s!==n.tangent||m?s:s?.slice()}}function pn({spatialReference:n,vertexAttributes:t,transform:e},{origin:o},r,a){const i=A(n);if(!R(n,o,f,i))return x(g(),n,i),null;e&&E(f,f,e.localMatrix),L(f,n,a,p.SOURCE);const l=new Float64Array(t.position.length),s=Fn(t.position,f,n,l);if(!s)return null;const u=Rn(s,l,t.normal,f,n);if(t.normal&&!u)return null;const c=vn(s,l,t.tangent,f,n);if(t.tangent&&!c)return null;if(r){const m=G(X,r);v(s,s,m)}return{position:s,normal:u,tangent:c}}function mn({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const i=A(t);if(!R(t,r,f,i))return x(g(),t,i),null;const l=1/T(t,a,p.TARGET);z(f,f,[l,l,l]);const s=h(y,f),{position:u,normal:c,tangent:m}=An(n,o,e),F=new Float64Array(u.length),U=yn(u,t,s,F);if(!U)return null;const d=Q(En,s),j=wn(c,u,F,t,d,c!==n.normal?c:void 0);if(!j&&c)return null;const M=Tn(m,u,F,t,d,m!==n.tangent?m:void 0);return!M&&m?null:{position:U,normal:j,tangent:M}}function An(n,t,e){if(!t)return n;if(!e){const{position:r,normal:a,tangent:i}=n;return{position:v(new Float64Array(r.length),r,t),tangent:i,normal:a}}const o=N(n,e.localMatrix);return v(o.position,o.position,t),o}function xn({vertexAttributes:n,spatialReference:t,transform:e},{origin:o},r,a){const i=A(t);if(!R(t,o,f,i))return x(g(),t,i),null;if(e&&E(f,f,e.localMatrix),!R(t,r,y,i))return x(g(),i,t),null;h(y,y);const l=E(f,y,f);return L(l,t,a,p.SOURCE|p.TARGET),N(n,l)}function N(n,t){const e=new Float64Array(n.position.length);C(e,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,r=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&D(n.normal,o,t),r&&n.tangent&&I(n.tangent,r,t),{position:e,normal:o,tangent:r}}function Fn(n,t,e,o){C(o,n,t);const r=new Float64Array(n.length);return rn(o,r,e)?r:(x(g(),A(e),e),null)}function Rn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return D(e,a,o),on(a,n,t,r,a)?a:(x(g(),A(r),r),null)}function vn(n,t,e,o,r){if(e==null)return null;const a=new Float32Array(e.length);return I(e,a,o),an(a,n,t,r,a)?a:(x(g(),A(r),r),null)}function L(n,t,e,o){const r=T(t,e,o);r!==1&&z(n,n,[r,r,r])}function T(n,t,e){const o=!!(e&p.SOURCE),r=!!(e&p.TARGET),a=t?.sourceUnit,i=t?.targetUnit;if(!a&&!i)return 1;let l=O(a,n);!o&&a&&l!==1&&(g().warn("source unit conversion not supported"),l=1);let s=1/O(i,n);return!r&&i&&s!==1&&(g().warn("target unit conversion not supported"),s=1),l*s}function yn(n,t,e,o){const r=ln(n,t,o);if(!r)return x(g(),t,A(t)),null;const a=new Float64Array(r.length);return C(a,r,e),a}function wn(n,t,e,o,r,a){if(n==null)return null;const i=a??new Float32Array(n.length);return sn(n,t,e,o,i)?(B(i,i,r),i):(x(g(),o,A(o)),null)}function Tn(n,t,e,o,r,a){if(n==null)return null;const i=a??new Float32Array(n.length);return cn(n,t,e,o,i)?(B(i,i,r,4),i):(x(g(),o,A(o)),null)}function O(n,t){if(n==null)return 1;const e=V(t);return 1/W(e,"meters",n)}const f=S(),y=S(),En=nn(),X=b(),$=S();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{fn as M,un as N,O as X,P as c};