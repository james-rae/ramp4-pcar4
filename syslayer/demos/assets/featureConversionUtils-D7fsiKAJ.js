import{ai as tn,aj as sn,ak as un,al as ln,s as j,n as cn,am as an,an as fn,ao as hn,ap as dn}from"./main-D_jCcUNd.js";import{e as I,s as v}from"./OptimizedFeature-jM_20Y6K.js";import{e as mn}from"./OptimizedFeatureSet-Blu9Ckm7.js";function b(n,r){return n?r?4:3:r?3:2}const z=()=>cn.getLogger("esri.layers.graphics.featureConversionUtils"),Y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},gn=(n,r,e,o,s,t)=>{n[e]=s,n[e+1]=t},B=(n,r,e,o,s,t)=>{n[e]=s,n[e+1]=t,n[e+2]=r[o+2]},yn=(n,r,e,o,s,t)=>{n[e]=s,n[e+1]=t,n[e+2]=r[o+3]},pn=(n,r,e,o,s,t)=>{n[e]=s,n[e+1]=t,n[e+2]=r[o+2],n[e+3]=r[o+3]};function _(n,r,e,o){if(n){if(e)return r&&o?pn:B;if(r&&o)return yn}else if(r&&o)return B;return gn}function L({scale:n,translate:r},e){return Math.round((e-r[0])/n[0])}function q({scale:n,translate:r},e){return Math.round((r[1]-e)/n[1])}function U({scale:n,translate:r},e){return Math.round((e-r[0])/n[0])}function R({scale:n,translate:r},e){return Math.round((e-r[1])/n[1])}function S({scale:n,translate:r},e,o){return e*n[o]+r[o]}function Yn(n,r,e){return n?r?e?O(n):A(n):e?C(n):E(n):null}function E(n){const r=n.coords;return{x:r[0],y:r[1]}}function K(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n}function A(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2]}}function bn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n}function C(n){const r=n.coords;return{x:r[0],y:r[1],m:r[2]}}function wn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.m,n}function O(n){const r=n.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function Mn(n,r){return n.coords[0]=r.x,n.coords[1]=r.y,n.coords[2]=r.z,n.coords[3]=r.m,n}function Gn(n,r,e,o){let s=E;e&&o?s=O:e?s=A:o&&(s=C);for(const t of r){const{geometry:u,attributes:l}=t,i=u!=null?s(u):null;n.push({attributes:l,geometry:i})}return n}function D(n,r){return n&&r?Mn:n?bn:r?wn:K}function In(n,r,e,o,s){const t=D(e,o);for(const{geometry:u,attributes:l}of r){const i=u!=null?t(new I,u):null;n.push(new v(i,l,null,s?l[s]:void 0))}return n}function Nn(n,r,e=D(r.z!=null,r.m!=null)){return e(n,r)}function Tn(n,r,e,o){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?Q(s,e,o):null});return n}function Q(n,r,e){if(n==null)return null;const o=b(r,e),s=[];for(let t=0;t<n.coords.length;t+=o){const u=[];for(let l=0;l<o;l++)u.push(n.coords[t+l]);s.push(u)}return r?e?{points:s,hasZ:r,hasM:e}:{points:s,hasZ:r}:e?{points:s,hasM:e}:{points:s}}function Pn(n,r,e,o,s){const t=b(e,o);for(const{geometry:u,attributes:l}of r){const i=u!=null?W(new I,u,t):null;n.push(new v(i,l,null,s?l[s]:void 0))}return n}function W(n,r,e=b(r.hasZ,r.hasM)){n.lengths[0]=r.points.length;const o=n.coords;let s=0;for(const t of r.points)for(let u=0;u<e;u++)o[s++]=t[u];return n}function Fn(n,r,e,o){for(const{geometry:s,attributes:t}of r)n.push({attributes:t,geometry:s!=null?X(s,e,o):null});return n}function X(n,r,e){if(!n)return null;const o=b(r,e),{coords:s,lengths:t}=n,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<o;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?e?{paths:u,hasZ:r,hasM:e}:{paths:u,hasZ:r}:e?{paths:u,hasM:e}:{paths:u}}function Zn(n,r,e,o,s){const t=b(e,o);for(const{geometry:u,attributes:l,centroid:i}of r){const c=u!=null?$(new I,u,t):null,a=i!=null?Nn(new I,i):null;n.push(new v(c,l,a,s?l[s]:void 0))}return n}function $(n,r,e=b(r.hasZ,r.hasM)){const{lengths:o,coords:s}=n;let t=0;for(const u of r.paths){for(const l of u)for(let i=0;i<e;i++)s[t++]=l[i];o.push(u.length)}return n}function xn(n,r,e,o){for(const{geometry:s,attributes:t,centroid:u}of r){const l=s!=null?nn(s,e,o):null;if(u!=null){const i=E(u);n.push({attributes:t,centroid:i,geometry:l})}else n.push({attributes:t,geometry:l})}return n}function nn(n,r,e){if(!n)return null;const o=b(r,e),{coords:s,lengths:t}=n,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<o;h++)f.push(s[l++]);c.push(f)}u.push(c)}return r?e?{rings:u,hasZ:r,hasM:e}:{rings:u,hasZ:r}:e?{rings:u,hasM:e}:{rings:u}}function vn(n,r,e,o,s){for(const{geometry:t,centroid:u,attributes:l}of r){const i=t!=null?rn(new I,t,e,o):null,c=s?l[s]:void 0;u!=null?n.push(new v(i,l,K(new I,u),c)):n.push(new v(i,l,null,c))}return n}function rn(n,r,e=r.hasZ,o=r.hasM){return kn(n,r.rings,e,o)}function kn(n,r,e,o){const s=b(e,o),{lengths:t,coords:u}=n;let l=0;P(n);for(const i of r){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];t.push(i.length)}return n}const x=[],k=[];function _n(n,r,e,o,s){x[0]=n;const[t]=en(k,x,r,e,o,s);return N(x),N(k),t}function en(n,r,e,o,s,t){if(N(n),!e){for(const u of r){const l=t?u.attributes[t]:void 0;n.push(new v(null,u.attributes,null,l))}return n}switch(e){case"esriGeometryPoint":return In(n,r,o,s,t);case"esriGeometryMultipoint":return Pn(n,r,o,s,t);case"esriGeometryPolyline":return Zn(n,r,o,s,t);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return vn(n,r,o,s,t);default:z().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${e}'`)),N(n)}return n}function An(n,r,e,o){k[0]=n,on(x,k,r,e,o);const s=x[0];return N(x),N(k),s}function Cn(n,r,e){if(n==null)return null;const o=new I;return"hasZ"in n&&r==null&&(r=n.hasZ),"hasM"in n&&e==null&&(e=n.hasM),tn(n)?D(r??n.z!=null,e??n.m!=null)(o,n):sn(n)?rn(o,n,r,e):un(n)?$(o,n,b(r,e)):ln(n)?W(o,n,b(r,e)):void z().error("convertFromGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${n}'`))}function jn(n,r,e,o){const s=n&&("coords"in n?n:n.geometry);if(s==null)return null;switch(r){case"esriGeometryPoint":{let t=E;return e&&o?t=O:e?t=A:o&&(t=C),t(s)}case"esriGeometryMultipoint":return Q(s,e,o);case"esriGeometryPolyline":return X(s,e,o);case"esriGeometryPolygon":return nn(s,e,o);default:return z().error("convertToGeometry:unknown-geometry",new j(`Unable to parse unknown geometry type '${r}'`)),null}}function zn(n,r){for(const e of r)n.push({attributes:e.attributes});return n}function on(n,r,e,o,s){if(N(n),e==null)return zn(n,r);switch(e){case"esriGeometryPoint":return Gn(n,r,o,s);case"esriGeometryMultipoint":return Tn(n,r,o,s);case"esriGeometryPolyline":return Fn(n,r,o,s);case"esriGeometryPolygon":return xn(n,r,o,s);default:z().error("convertToFeatureSet:unknown-geometry",new j(`Unable to parse unknown geometry type '${e}'`))}return n}function On(n){const{objectIdFieldName:r,spatialReference:e,transform:o,fields:s,hasM:t,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=n,m={features:on([],l,i,u,t),fields:s,geometryType:i,objectIdFieldName:r,spatialReference:e,uniqueIdField:a,queryGeometry:jn(f,h,!1,!1)};return o&&(m.transform=o),c&&(m.exceededTransferLimit=c),t&&(m.hasM=t),u&&(m.hasZ=u),m}function Dn(n,r){const e=new mn,{hasM:o,hasZ:s,features:t,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=n;return f&&(e.fields=f),e.geometryType=i??null,e.objectIdFieldName=u??r??null,e.spatialReference=l??null,e.objectIdFieldName?(t&&en(e.features,t,i,s,o,e.objectIdFieldName),c&&(e.exceededTransferLimit=c),o&&(e.hasM=o),s&&(e.hasZ=s),a&&(e.transform=a),e):(z().error(new j("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),e)}function Bn(n){const{transform:r,features:e,hasM:o,hasZ:s}=n;if(!r)return n;for(const t of e)t.geometry!=null&&J(t.geometry,t.geometry,o,s,r),t.centroid!=null&&J(t.centroid,t.centroid,o,s,r);return n.transform=null,n}function Hn(n,r){const{geometryType:e,features:o,hasM:s,hasZ:t}=r;if(!n)return r;for(let u=0;u<o.length;u++){const l=o[u],i=l.weakClone();i.geometry=new I,H(i.geometry,l.geometry,s,t,e,n),l.centroid&&(i.centroid=new I,H(i.centroid,l.centroid,s,t,"esriGeometryPoint",n)),o[u]=i}return r.transform=n,r}function H(n,r,e,o,s,t,u=e,l=o){if(P(n),!r?.coords.length)return null;const i=Y[s],{coords:c,lengths:a}=r,f=b(e,o),h=b(e&&u,o&&l),m=_(e,o,u,l);if(!a.length)return m(n.coords,c,0,0,L(t,c[0]),q(t,c[1])),P(n,f,0),n;let d,y,w,G,p=0,g=0,M=g;for(const F of a){if(F<i)continue;let T=0;g=M,w=d=L(t,c[p]),G=y=q(t,c[p+1]),m(n.coords,c,g,p,w,G),T++,p+=f,g+=h;for(let Z=1;Z<F;Z++,p+=f)w=L(t,c[p]),G=q(t,c[p+1]),w===d&&G===y||(m(n.coords,c,g,p,w-d,G-y),g+=h,T++,d=w,y=G);T>=i&&(n.lengths.push(T),M=g)}return N(n.coords,M),n.coords.length?n:null}function Jn(n,r,e,o,s,t,u=e,l=o){if(P(n),!r?.coords.length)return null;const i=Y[s],{coords:c,lengths:a}=r,f=b(e,o),h=b(e&&u,o&&l),m=_(e,o,u,l);if(!a.length)return m(n.coords,c,0,0,c[0],c[1]),P(n,f,0),n;let d=0;const y=t*t;for(const w of a){if(w<i){d+=w*f;continue}const G=n.coords.length/h,p=d,g=d+(w-1)*f;m(n.coords,c,n.coords.length,p,c[p],c[p+1]),V(n.coords,c,f,y,m,p,g),m(n.coords,c,n.coords.length,g,c[g],c[g+1]);const M=n.coords.length/h-G;M>=i?n.lengths.push(M):N(n.coords,G*h),d+=w*f}return n.coords.length?n:null}function En(n,r,e,o){const s=n[r],t=n[r+1],u=n[e],l=n[e+1],i=n[o],c=n[o+1];let a=u,f=l,h=i-a,m=c-f;if(h!==0||m!==0){const d=((s-a)*h+(t-f)*m)/(h*h+m*m);d>1?(a=i,f=c):d>0&&(a+=h*d,f+=m*d)}return h=s-a,m=t-f,h*h+m*m}function V(n,r,e,o,s,t,u){let l,i=o,c=0;for(let a=t+e;a<u;a+=e)l=En(r,a,t,u),l>i&&(c=a,i=l);i>o&&(c-t>e&&V(n,r,e,o,s,t,c),s(n,r,n.length,c,r[c],r[c+1]),u-c>e&&V(n,r,e,o,s,c,u))}function Kn(n,r,e,o){if(!r?.coords?.length)return null;const s=b(e,o);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(r&&r.coords){const c=r.coords;for(let a=0;a<c.length;a+=s){const f=c[a],h=c[a+1];t=Math.min(t,f),l=Math.max(l,f),u=Math.min(u,h),i=Math.max(i,h)}}return an(n)?fn(n,t,u,l,i):hn(t,u,l,i,n),n}function J(n,r,e,o,s){const{coords:t,lengths:u}=r,l=b(e,o);if(!t.length)return n!==r&&P(n),n;dn(s);const{originPosition:i,scale:c,translate:a}=s,f=Un;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const m=f.translate;if(m[0]=a[0]??0,m[1]=a[1]??0,m[2]=a[2]??0,m[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)n.coords[y]=S(f,t[y],y);return n!==r&&P(n,l,0),n}let d=0;for(let y=0;y<u.length;y++){const w=u[y];n.lengths[y]=w;for(let g=0;g<l;++g)n.coords[d+g]=S(f,t[d+g],g);let G=n.coords[d],p=n.coords[d+1];d+=l;for(let g=1;g<w;g++,d+=l){G+=t[d]*h[0],p+=t[d+1]*h[1],n.coords[d]=G,n.coords[d+1]=p;for(let M=2;M<l;++M)n.coords[d+M]=S(f,t[d+M],M)}}return n!==r&&P(n,t.length,u.length),n}function Qn(n,r,e,o,s,t){if(P(n),n.lengths.push(...r.lengths),e===s&&o===t)for(let u=0;u<r.coords.length;u++)n.coords.push(r.coords[u]);else{const u=b(e,o),l=_(e,o,s,t),i=r.coords;for(let c=0;c<i.length;c+=u)l(n.coords,i,n.coords.length,c,i[c],i[c+1])}return n}function Ln(n,r,e,o){let s=0,t=n[o*r],u=n[o*(r+1)];for(let l=1;l<e;l++){const i=t+n[o*(r+l)],c=u+n[o*(r+l)+1],a=(i-t)*(c+u);t=i,u=c,s+=a}return .5*s}function Wn(n,r){const{coords:e,lengths:o}=n;let s=0,t=0;for(let u=0;u<o.length;u++){const l=o[u];t+=Ln(e,s,l,r),s+=l}return Math.abs(t)}function qn(n,r,e,o){return n*o-e*r===0&&n*e+r*o>0}function Xn(n,r,e,o,s){const t=b(o,s);if(!n.lengths.length){if(n.coords.length<2)return null;const[f,h]=n.coords,m=U(r,f),d=R(r,h);return new I([],[m,d])}const u=new I([],[0,0]),l=Y[e],i=e==="esriGeometryPolygon"||e==="esriGeometryPolyline";let c=0,a=0;for(let f=0;f<n.lengths.length;f++){const h=n.lengths[f],m=a;let d=U(r,n.coords[t*c]),y=R(r,n.coords[t*c+1]);u.coords[a++]=d,u.coords[a++]=y;let w=0,G=0,p=1;for(let g=1;g<h;g++){const M=U(r,n.coords[t*(g+c)]),F=R(r,n.coords[t*(g+c)+1]);if(M!==d||F!==y){const T=M-d,Z=F-y;i&&qn(w,G,T,Z)?(u.coords[a-2]+=T,u.coords[a-1]+=Z,d+=T,y+=Z):(u.coords[a++]=M,u.coords[a++]=F,d=M,y=F,w=T,G=Z,p+=1)}}p<l?a=m:u.lengths.push(p),c+=h}return u.lengths.length===0?null:u}function P(n,r=0,e=0){N(n.lengths,e),N(n.coords,r)}function N(n,r=0){n.length!==r&&(n.length=r)}const Un={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{X as C,Xn as F,Wn as G,nn as K,J as M,q as N,Q as R,Nn as U,rn as W,kn as X,Bn as a,Qn as b,H as d,Dn as f,Hn as h,On as i,Yn as j,Jn as m,en as n,_n as o,Kn as p,An as r,Cn as s,jn as u,L as w};
