import{by as J,aT as k,a2 as U,b6 as $,I as B,Y as E,bR as L,aQ as T,d0 as z,bO as F,a6 as G,s as H,n as K}from"./main-DZMdXZ8-.js";import{r as A,o as O,i as R,s as X}from"./normalizeUtilsCommon-ByHC0qdf.js";import{f as V}from"./utils-DgxkW90G.js";import{r as Z,o as tt}from"./utils-CvkPZUJi.js";async function et(t,s,a,n){const e=V(t),i=s[0].spatialReference,r={...n,responseType:"json",query:{...e.query,f:"json",sr:J(i),target:JSON.stringify({geometryType:k(s[0]),geometries:s}),cutter:JSON.stringify(a)}},o=await U(e.path+"/cut",r),{cutIndexes:c,geometries:f=[]}=o.data;return{cutIndexes:c,geometries:f.map(u=>{const m=$(u);return m.spatialReference=i,m})}}async function st(t,s,a){const n=typeof t=="string"?B(t):t,e=s[0].spatialReference,i=k(s[0]),r={...a,query:{...n.query,f:"json",sr:J(e),geometries:JSON.stringify(Z(s))}},{data:o}=await U(n.path+"/simplify",r);return tt(o.geometries,i,e)}const C=()=>K.getLogger("esri.geometry.support.normalizeUtils");function nt(t){return t.type==="polygon"}function ot(t){return t[0].type==="polygon"}function rt(t){return t[0].type==="polyline"}function D(t){const s=[];let a=0,n=0;for(let e=0;e<t.length;e++){const i=t[e];let r=null;for(let o=0;o<i.length;o++)r=i[o],s.push(r),o===0?(a=r[0],n=a):(a=Math.min(a,r[0]),n=Math.max(n,r[0]));r&&s.push([(a+n)/2,0])}return s}function Q(t,s){if(!(t instanceof T||t instanceof F)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw C().error(e),new H(e)}const a=O(t),n=[];for(const e of a){const i=[];n.push(i),i.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const o=e[r][0],c=e[r][1],f=e[r+1][0],u=e[r+1][1],m=Math.sqrt((f-o)*(f-o)+(u-c)*(u-c)),p=(u-c)/m,d=(f-o)/m,g=m/s;if(g>1){for(let v=1;v<=g-1;v++){const I=v*s,l=d*I+o,h=p*I+c;i.push([l,h])}const b=(m+Math.floor(g-1)*s)/2,N=d*b+o,S=p*b+c;i.push([N,S])}i.push([f,u])}}return nt(t)?new F({rings:n,spatialReference:t.spatialReference}):new T({paths:n,spatialReference:t.spatialReference})}function W(t,s,a){if(s){const n=Q(t,1e6);t=G(n,!0)}return a&&(t=X(t,a)),t}function Y(t,s,a){if(Array.isArray(t)){const n=t[0];if(n>s){const e=R(n,s);t[0]=n+e*(-2*s)}else if(n<a){const e=R(n,a);t[0]=n+e*(-2*a)}}else{const n=t.x;if(n>s){const e=R(n,s);t=t.clone().offset(e*(-2*s),0)}else if(n<a){const e=R(n,a);t=t.clone().offset(e*(-2*a),0)}}return t}function it(t,s){let a=-1;for(let n=0;n<s.cutIndexes.length;n++){const e=s.cutIndexes[n],i=s.geometries[n],r=O(i);for(let o=0;o<r.length;o++){const c=r[o];c.some(f=>{if(f[0]<180)return!0;{let u=0;for(let p=0;p<c.length;p++){const d=c[p][0];u=d>u?d:u}u=Number(u.toFixed(9));const m=-360*R(u,180);for(let p=0;p<c.length;p++){const d=i.getPoint(o,p);i.setPoint(o,p,d.clone().offset(m,0))}return!0}})}if(e===a){if(ot(t))for(const o of O(i))t[e]=t[e].addRing(o);else if(rt(t))for(const o of O(i))t[e]=t[e].addPath(o)}else a=e,t[e]=i}return t}async function _(t,s,a){if(!Array.isArray(t))return _([t],s);s&&typeof s!="string"&&C().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n=typeof s=="string"?s:s?.url??E.geometryServiceUrl;let e,i,r,o,c,f,u,m,p=0;const d=[],g=[];for(const l of t)if(l!=null)if(e||(e=l.spatialReference,i=L(e),r=e.isWebMercator,f=r?102100:4326,o=A[f].maxX,c=A[f].minX,u=A[f].plus180Line,m=A[f].minus180Line),i)if(l.type==="mesh")g.push(l);else if(l.type==="point")g.push(Y(l.clone(),o,c));else if(l.type==="multipoint"){const h=l.clone();h.points=h.points.map(x=>Y(x,o,c)),g.push(h)}else if(l.type==="extent"){const h=l.clone()._normalize(!1,!1,i);g.push(h.rings?new F(h):h)}else if(l.extent){const h=l.extent,x=R(h.xmin,c)*(2*o);let M=x===0?l.clone():X(l.clone(),x);h.offset(x,0);let{xmin:w,xmax:y}=h;w=Number(w.toFixed(9)),y=Number(y.toFixed(9)),h.intersects(u)&&y!==o?(p=y>p?y:p,M=W(M,r),d.push(M),g.push("cut")):h.intersects(m)&&w!==c?(p=y*(2*o)>p?y*(2*o):p,M=W(M,r,360),d.push(M),g.push("cut")):g.push(M)}else g.push(l.clone());else g.push(l);else g.push(l);let b=R(p,o),N=-90;const S=b,v=new T;for(;b>0;){const l=360*b-180;v.addPath([[l,N],[l,-1*N]]),N*=-1,b--}if(d.length>0&&S>0){const l=it(d,await et(n,d,v,a)),h=[],x=[];for(let y=0;y<g.length;y++){const P=g[y];if(P!=="cut")x.push(P);else{const q=l.shift(),j=t[y];j!=null&&j.type==="polygon"&&j.rings&&j.rings.length>1&&q.rings.length>=j.rings.length?(h.push(q),x.push("simplify")):x.push(r?z(q):q)}}if(!h.length)return x;const M=await st(n,h,a),w=[];for(let y=0;y<x.length;y++){const P=x[y];P!=="simplify"?w.push(P):w.push(r?z(M.shift()):M.shift())}return w}const I=[];for(let l=0;l<g.length;l++){const h=g[l];if(h!=="cut")I.push(h);else{const x=d.shift();I.push(r===!0?z(x):x)}}return I}function at(t){if(!t)return null;const s=t.extent;if(!s)return null;const a=t.spatialReference&&L(t.spatialReference);if(!a)return s;const[n,e]=a.valid,i=2*e,{width:r}=s;let o,{xmin:c,xmax:f}=s;if([c,f]=[f,c],t.type==="extent"||r===0||r<=e||r>i||c<n||f>e)return s;switch(t.type){case"polygon":if(!(t.rings.length>1))return s;o=D(t.rings);break;case"polyline":if(!(t.paths.length>1))return s;o=D(t.paths);break;case"multipoint":o=t.points}const u=s.clone();for(let m=0;m<o.length;m++){let p=o[m][0];p<0?(p+=e,f=Math.max(p,f)):(p-=e,c=Math.min(p,c))}return u.xmin=c,u.xmax=f,u.width<r?(u.xmin-=e,u.xmax-=e,u):s}function ct(t,s,a){const n=L(a);if(n==null)return t;const[e,i]=n.valid,r=2*i;let o=0,c=0;s>i?o=Math.ceil(Math.abs(s-i)/r):s<e&&(o=-Math.ceil(Math.abs(s-e)/r)),t>i?c=Math.ceil(Math.abs(t-i)/r):t<e&&(c=-Math.ceil(Math.abs(t-e)/r));let f=t+(o-c)*r;const u=f-s;return u>i?f-=r:u<e&&(f+=r),f}function lt(t,s){const a=L(s);if(a){const[n,e]=a.valid,i=e-n;if(t<n)for(;t<n;)t+=i;if(t>e)for(;t>e;)t-=i}return t}export{lt as L,Q as M,ct as P,_ as R,at as v};
