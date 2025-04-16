import{a8 as rt,a9 as ut,aa as lt,ab as ct,s as Z,n as it,ac as at,ad as ft,ae as ht,af as dt}from"./main-DFutu5rJ.js";import{s as N,e as T}from"./OptimizedFeature-EIithYlr.js";import{e as mt}from"./OptimizedFeatureSet-DfZGBuxJ.js";function p(t,e){return t?e?4:3:e?3:2}const x=()=>it.getLogger("esri.layers.graphics.featureConversionUtils"),Q={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},gt=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s},J=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2]},yt=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+3]},pt=(t,e,o,n,r,s)=>{t[o]=r,t[o+1]=s,t[o+2]=e[n+2],t[o+3]=e[n+3]};function U(t,e,o,n){if(t){if(o)return e&&n?pt:J;if(e&&n)return yt}else if(e&&n)return J;return gt}function j({scale:t,translate:e},o){return Math.round((o-e[0])/t[0])}function z({scale:t,translate:e},o){return Math.round((e[1]-o)/t[1])}function q({scale:t,translate:e},o,n){return o*t[n]+e[n]}function bt(t,e,o){return t?e?o?R(t):L(t):o?$(t):E(t):null}function E(t){const e=t.coords;return{x:e[0],y:e[1]}}function W(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function L(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function wt(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function $(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function Mt(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function R(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function It(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function Gt(t,e,o,n){let r=E;o&&n?r=R:o?r=L:n&&(r=$);for(const s of e){const{geometry:u,attributes:l}=s,i=u!=null?r(u):null;t.push({attributes:l,geometry:i})}return t}function S(t,e){return t&&e?It:t?wt:e?Mt:W}function Nt(t,e,o,n,r){const s=S(o,n);for(const{geometry:u,attributes:l}of e){const i=u!=null?s(new N,u):null;t.push(new T(i,l,null,r?l[r]:void 0))}return t}function X(t,e,o=S(e.z!=null,e.m!=null)){return o(t,e)}function Pt(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:r!=null?V(r,o,n):null});return t}function V(t,e,o){if(t==null)return null;const n=p(e,o),r=[];for(let s=0;s<t.coords.length;s+=n){const u=[];for(let l=0;l<n;l++)u.push(t.coords[s+l]);r.push(u)}return e?o?{points:r,hasZ:e,hasM:o}:{points:r,hasZ:e}:o?{points:r,hasM:o}:{points:r}}function Tt(t,e,o,n,r){const s=p(o,n);for(const{geometry:u,attributes:l}of e){const i=u!=null?tt(new N,u,s):null;t.push(new T(i,l,null,r?l[r]:void 0))}return t}function tt(t,e,o=p(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const n=t.coords;let r=0;for(const s of e.points)for(let u=0;u<o;u++)n[r++]=s[u];return t}function Ft(t,e,o,n){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:r!=null?Y(r,o,n):null});return t}function Y(t,e,o){if(!t)return null;const n=p(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const i of s){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<n;h++)f.push(r[l++]);c.push(f)}u.push(c)}return e?o?{paths:u,hasZ:e,hasM:o}:{paths:u,hasZ:e}:o?{paths:u,hasM:o}:{paths:u}}function Zt(t,e,o,n,r){const s=p(o,n);for(const{geometry:u,attributes:l,centroid:i}of e){const c=u!=null?et(new N,u,s):null,a=i!=null?X(new N,i):null;t.push(new T(c,l,a,r?l[r]:void 0))}return t}function et(t,e,o=p(e.hasZ,e.hasM)){const{lengths:n,coords:r}=t;let s=0;for(const u of e.paths){for(const l of u)for(let i=0;i<o;i++)r[s++]=l[i];n.push(u.length)}return t}function xt(t,e,o,n){for(const{geometry:r,attributes:s,centroid:u}of e){const l=r!=null?_(r,o,n):null;if(u!=null){const i=E(u);t.push({attributes:s,centroid:i,geometry:l})}else t.push({attributes:s,geometry:l})}return t}function _(t,e,o){if(!t)return null;const n=p(e,o),{coords:r,lengths:s}=t,u=[];let l=0;for(const i of s){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<n;h++)f.push(r[l++]);c.push(f)}u.push(c)}return e?o?{rings:u,hasZ:e,hasM:o}:{rings:u,hasZ:e}:o?{rings:u,hasM:o}:{rings:u}}function vt(t,e,o,n,r){for(const{geometry:s,centroid:u,attributes:l}of e){const i=s!=null?O(new N,s,o,n):null,c=r?l[r]:void 0;u!=null?t.push(new T(i,l,W(new N,u),c)):t.push(new T(i,l,null,c))}return t}function O(t,e,o=e.hasZ,n=e.hasM){return ot(t,e.rings,o,n)}function ot(t,e,o,n){const r=p(o,n),{lengths:s,coords:u}=t;let l=0;P(t);for(const i of e){for(const c of i)for(let a=0;a<r;a++)u[l++]=c[a];s.push(i.length)}return t}const F=[],v=[];function kt(t,e,o,n,r){F[0]=t;const[s]=A(v,F,e,o,n,r);return G(F),G(v),s}function A(t,e,o,n,r,s){if(G(t),!o){for(const u of e){const l=s?u.attributes[s]:void 0;t.push(new T(null,u.attributes,null,l))}return t}switch(o){case"esriGeometryPoint":return Nt(t,e,n,r,s);case"esriGeometryMultipoint":return Tt(t,e,n,r,s);case"esriGeometryPolyline":return Zt(t,e,n,r,s);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return vt(t,e,n,r,s);default:x().error("convertToFeatureSet:unknown-geometry",new Z(`Unable to parse unknown geometry type '${o}'`)),G(t)}return t}function jt(t,e,o,n){v[0]=t,st(F,v,e,o,n);const r=F[0];return G(F),G(v),r}function zt(t,e,o){if(t==null)return null;const n=new N;return"hasZ"in t&&e==null&&(e=t.hasZ),"hasM"in t&&o==null&&(o=t.hasM),rt(t)?S(e??t.z!=null,o??t.m!=null)(n,t):ut(t)?O(n,t,e,o):lt(t)?et(n,t,p(e,o)):ct(t)?tt(n,t,p(e,o)):void x().error("convertFromGeometry:unknown-geometry",new Z(`Unable to parse unknown geometry type '${t}'`))}function nt(t,e,o,n){const r=t&&("coords"in t?t:t.geometry);if(r==null)return null;switch(e){case"esriGeometryPoint":{let s=E;return o&&n?s=R:o?s=L:n&&(s=$),s(r)}case"esriGeometryMultipoint":return V(r,o,n);case"esriGeometryPolyline":return Y(r,o,n);case"esriGeometryPolygon":return _(r,o,n);default:return x().error("convertToGeometry:unknown-geometry",new Z(`Unable to parse unknown geometry type '${e}'`)),null}}function Et(t,e){for(const o of e)t.push({attributes:o.attributes});return t}function st(t,e,o,n,r){if(G(t),o==null)return Et(t,e);switch(o){case"esriGeometryPoint":return Gt(t,e,n,r);case"esriGeometryMultipoint":return Pt(t,e,n,r);case"esriGeometryPolyline":return Ft(t,e,n,r);case"esriGeometryPolygon":return xt(t,e,n,r);default:x().error("convertToFeatureSet:unknown-geometry",new Z(`Unable to parse unknown geometry type '${o}'`))}return t}function Ut(t){const{objectIdFieldName:e,spatialReference:o,transform:n,fields:r,hasM:s,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=t,d={features:st([],l,i,u,s),fields:r,geometryType:i,objectIdFieldName:e,spatialReference:o,uniqueIdField:a,queryGeometry:nt(f,h,!1,!1)};return n&&(d.transform=n),c&&(d.exceededTransferLimit=c),s&&(d.hasM=s),u&&(d.hasZ=u),d}function qt(t,e){const o=new mt,{hasM:n,hasZ:r,features:s,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=t;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=u??e??null,o.spatialReference=l??null,o.objectIdFieldName?(s&&A(o.features,s,i,r,n,o.objectIdFieldName),c&&(o.exceededTransferLimit=c),n&&(o.hasM=n),r&&(o.hasZ=r),a&&(o.transform=a),o):(x().error(new Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Lt(t){const{transform:e,features:o,hasM:n,hasZ:r}=t;if(!e)return t;for(const s of o)s.geometry!=null&&D(s.geometry,s.geometry,n,r,e),s.centroid!=null&&D(s.centroid,s.centroid,n,r,e);return t.transform=null,t}function $t(t,e){const{geometryType:o,features:n,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<n.length;u++){const l=n[u],i=l.weakClone();i.geometry=new N,C(i.geometry,l.geometry,r,s,o,t),l.centroid&&(i.centroid=new N,C(i.centroid,l.centroid,r,s,"esriGeometryPoint",t)),n[u]=i}return e.transform=t,e}function C(t,e,o,n,r,s,u=o,l=n){if(P(t),!e?.coords.length)return null;const i=Q[r],{coords:c,lengths:a}=e,f=p(o,n),h=p(o&&u,n&&l),d=U(o,n,u,l);if(!a.length)return d(t.coords,c,0,0,j(s,c[0]),z(s,c[1])),P(t,f,0),t;let m,y,w,M,b=0,g=0,I=g;for(const H of a){if(H<i)continue;let k=0;g=I,w=m=j(s,c[b]),M=y=z(s,c[b+1]),d(t.coords,c,g,b,w,M),k++,b+=f,g+=h;for(let K=1;K<H;K++,b+=f)w=j(s,c[b]),M=z(s,c[b+1]),w===m&&M===y||(d(t.coords,c,g,b,w-m,M-y),g+=h,k++,m=w,y=M);k>=i&&(t.lengths.push(k),I=g)}return G(t.coords,I),t.coords.length?t:null}function Rt(t,e,o,n,r,s,u=o,l=n){if(P(t),!e?.coords.length)return null;const i=Q[r],{coords:c,lengths:a}=e,f=p(o,n),h=p(o&&u,n&&l),d=U(o,n,u,l);if(!a.length)return d(t.coords,c,0,0,c[0],c[1]),P(t,f,0),t;let m=0;const y=s*s;for(const w of a){if(w<i){m+=w*f;continue}const M=t.coords.length/h,b=m,g=m+(w-1)*f;d(t.coords,c,t.coords.length,b,c[b],c[b+1]),B(t.coords,c,f,y,d,b,g),d(t.coords,c,t.coords.length,g,c[g],c[g+1]);const I=t.coords.length/h-M;I>=i?t.lengths.push(I):G(t.coords,M*h),m+=w*f}return t.coords.length?t:null}function St(t,e,o,n){const r=t[e],s=t[e+1],u=t[o],l=t[o+1],i=t[n],c=t[n+1];let a=u,f=l,h=i-a,d=c-f;if(h!==0||d!==0){const m=((r-a)*h+(s-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=r-a,d=s-f,h*h+d*d}function B(t,e,o,n,r,s,u){let l,i=n,c=0;for(let a=s+o;a<u;a+=o)l=St(e,a,s,u),l>i&&(c=a,i=l);i>n&&(c-s>o&&B(t,e,o,n,r,s,c),r(t,e,t.length,c,e[c],e[c+1]),u-c>o&&B(t,e,o,n,r,c,u))}function Vt(t,e,o,n){if(!e?.coords?.length)return null;const r=p(o,n);let s=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(e&&e.coords){const c=e.coords;for(let a=0;a<c.length;a+=r){const f=c[a],h=c[a+1];s=Math.min(s,f),l=Math.max(l,f),u=Math.min(u,h),i=Math.max(i,h)}}return at(t)?ft(t,s,u,l,i):ht(s,u,l,i,t),t}function D(t,e,o,n,r){const{coords:s,lengths:u}=e,l=p(o,n);if(!s.length)return t!==e&&P(t),t;dt(r);const{originPosition:i,scale:c,translate:a}=r,f=At;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)t.coords[y]=q(f,s[y],y);return t!==e&&P(t,l,0),t}let m=0;for(let y=0;y<u.length;y++){const w=u[y];t.lengths[y]=w;for(let g=0;g<l;++g)t.coords[m+g]=q(f,s[m+g],g);let M=t.coords[m],b=t.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){M+=s[m]*h[0],b+=s[m+1]*h[1],t.coords[m]=M,t.coords[m+1]=b;for(let I=2;I<l;++I)t.coords[m+I]=q(f,s[m+I],I)}}return t!==e&&P(t,s.length,u.length),t}function Yt(t,e,o,n,r,s){if(P(t),t.lengths.push(...e.lengths),o===r&&n===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=p(o,n),l=U(o,n,r,s),i=e.coords;for(let c=0;c<i.length;c+=u)l(t.coords,i,t.coords.length,c,i[c],i[c+1])}return t}function _t(t,e,o,n){let r=0,s=t[n*e],u=t[n*(e+1)];for(let l=1;l<o;l++){const i=s+t[n*(e+l)],c=u+t[n*(e+l)+1],a=(i-s)*(c+u);s=i,u=c,r+=a}return .5*r}function Ot(t,e){const{coords:o,lengths:n}=t;let r=0,s=0;for(let u=0;u<n.length;u++){const l=n[u];s+=_t(o,r,l,e),r+=l}return Math.abs(s)}function P(t,e=0,o=0){G(t.lengths,o),G(t.coords,e)}function G(t,e=0){t.length!==e&&(t.length=e)}const At={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{Y as $,_ as H,Yt as I,O as K,j as N,X as O,bt as P,ot as Q,V as U,C as a,Ot as b,qt as c,A as e,$t as f,Vt as g,Rt as h,Lt as i,Ut as l,jt as n,zt as o,D as p,nt as r,kt as t,z as w};
