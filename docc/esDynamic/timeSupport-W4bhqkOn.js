import{kI as ie,d5 as T,kJ as P,kK as le,kL as oe,kM as ae,j$ as E,jh as ue,gi as ce,kN as fe,K as v,ag as me,kO as C,ar as F,gj as J,$ as pe,du as he,da as w,eO as ye,kP as ge,al as Ie,ey as Re,aM as x,aX as G,aY as Se,bp as Ne,kQ as de,ap as xe,cT as B,kR as Te,kS as be,kT as K,kU as _e,kV as we,s as A,cy as Ge}from"./main-DnRb_GMc.js";import{t as $}from"./json-BI97KiBB.js";const D=new T,Me=new T,O=new T,k={esriGeometryPoint:P,esriGeometryPolyline:le,esriGeometryPolygon:oe,esriGeometryMultipoint:ae};function Pe(e,t,n,s=e.hasZ,r=e.hasM){if(t==null)return null;const i=e.hasZ&&s,l=e.hasM&&r;if(n){const o=E(O,t,e.hasZ,e.hasM,"esriGeometryPoint",n,s,r);return P(o,i,l)}return P(t,i,l)}function b(e,t,n,s,r,i,l=t,o=n){const a=t&&l,u=n&&o,f=s!=null?"coords"in s?s:s.geometry:null;if(f==null)return null;if(r){let c=ue(Me,f,t,n,e,r,l,o);return i&&(c=E(O,c,a,u,e,i)),k[e]?.(c,a,u)??null}if(i){const c=E(O,f,t,n,e,i,l,o);return k[e]?.(c,a,u)??null}return ie(D,f,t,n,l,o),k[e]?.(D,a,u)??null}function Ee(e){return e&&W in e?JSON.parse(JSON.stringify(e,ve)):e}const W="_geVersion",ve=(e,t)=>e!==W?t:void 0;function V(e,t){return e?t?4:3:t?3:2}function Fe(e,t,n,s){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const r=e.coords,i=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:o,coords:a}=t,u=V(n,s);let f=0;for(const c of o){const m=Ae(l,a,f,c,n,s);m&&i.push(m),f+=c*u}if(i.sort((c,m)=>{let p=c[2]-m[2];return p===0&&n&&(p=c[4]-m[4]),p}),i.length){let c=6*i[0][2];r[0]=i[0][0]/c,r[1]=i[0][1]/c,n&&(c=6*i[0][4],r[2]=c!==0?i[0][3]/c:0),(r[0]<l[0]||r[0]>l[1]||r[1]<l[2]||r[1]>l[3]||n&&(r[2]<l[4]||r[2]>l[5]))&&(r.length=0)}if(!r.length){const c=t.lengths[0]?Oe(a,0,o[0],n,s):null;if(!c)return null;r[0]=c[0],r[1]=c[1],n&&c.length>2&&(r[2]=c[2])}return e}function Ae(e,t,n,s,r,i){const l=V(r,i);let o=n,a=n+l,u=0,f=0,c=0,m=0,p=0;for(let N=0,_=s-1;N<_;N++,o+=l,a+=l){const y=t[o],g=t[o+1],R=t[o+2],I=t[a],S=t[a+1],z=t[a+2];let d=y*S-I*g;m+=d,u+=(y+I)*d,f+=(g+S)*d,r&&(d=y*z-I*R,c+=(R+z)*d,p+=d),y<e[0]&&(e[0]=y),y>e[1]&&(e[1]=y),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),r&&(R<e[4]&&(e[4]=R),R>e[5]&&(e[5]=R))}if(m>0&&(m*=-1),p>0&&(p*=-1),!m)return null;const h=[u,f,.5*m];return r&&(h[3]=c,h[4]=.5*p),h}function Oe(e,t,n,s,r){const i=V(s,r);let l=t,o=t+i,a=0,u=0,f=0,c=0;for(let m=0,p=n-1;m<p;m++,l+=i,o+=i){const h=e[l],N=e[l+1],_=e[l+2],y=e[o],g=e[o+1],R=e[o+2],I=s?Ve(h,N,_,y,g,R):ke(h,N,y,g);if(I)if(a+=I,s){const S=je(h,N,_,y,g,R);u+=I*S[0],f+=I*S[1],c+=I*S[2]}else{const S=Ye(h,N,y,g);u+=I*S[0],f+=I*S[1]}}return a>0?s?[u/a,f/a,c/a]:[u/a,f/a]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function ke(e,t,n,s){const r=n-e,i=s-t;return Math.sqrt(r*r+i*i)}function Ve(e,t,n,s,r,i){const l=s-e,o=r-t,a=i-n;return Math.sqrt(l*l+o*o+a*a)}function Ye(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function je(e,t,n,s,r,i){return[e+.5*(s-e),t+.5*(r-t),n+.5*(i-n)]}const Y=[0,0];function L(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,Y),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,Y),[n.xmax,n.ymax]=e(t.xmax,t.ymax,Y),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:Q(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:Q(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:X(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function Q(e,t){const n=[];for(const s of e)n.push(X(s,t));return n}function X(e,t){const n=[];for(const s of e){const r=t(s[0],s[1],[0,0]);n.push(r),s.length>2&&r.push(s[2]),s.length>3&&r.push(s[3])}return n}async function M(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(s=>s.geometry!=null?s.geometry.spatialReference:null).filter(pe):[e];await he(n.map(s=>({source:s,dest:t})))}const H=L.bind(null,ce),ee=L.bind(null,fe);function j(e,t,n,s){if(!e||(n||(n=t,t=e.spatialReference),!w(t)||!w(n)||v(t,n)))return e;if(C(t,n)){const r=F(n)?H(e):ee(e);return r.spatialReference=n,r}return J($,[e],t,n,null,s)[0]}class qe{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,s,r){if(!t?.length||!n||!s||v(n,s))return t;const i={geometries:t,inSpatialReference:n,outSpatialReference:s,geographicTransformation:r,resolve:me()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:s,outSpatialReference:r,resolve:i,geographicTransformation:l}=t;C(s,r)?F(r)?i(n.map(H)):i(n.map(ee)):i(J($,n,s,r,l,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const Ue=new qe;function Ze(e,t,n,s){return Ue.push(e,t,n,s)}const ze=new ye({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),q=Object.freeze({});async function Ce(e,t,n){const{outFields:s,orderByFields:r,groupByFieldsForStatistics:i,outStatistics:l}=e;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),te(e,t,n)}async function te(e,t,n){if(!e)return null;let{where:s}=e;if(e.where=s=s?.trim(),(!s||/^1 *= *1$/.test(s)||t&&t===s)&&(e.where=null),!e.geometry)return e;let r=await Be(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:i}=e.geometry;r=ge(r),r.spatialReference=i}if(r){await M(r.spatialReference,n),r=Je(r,n);const i=(await Ie(Re(r)))[0];if(i==null)throw q;const l="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=l&&ne(r,n)?{densificationStep:8*l}:void 0,a=i.toJSON(),u=j(a,a.spatialReference,n,o);if(!u)throw q;u.spatialReference=n,e.geometry=u}return e}function ne(e,t){if(!e)return!1;const n=e.spatialReference;return(x(e)||G(e)||Se(e))&&!v(n,t)&&!Ne(n,t)}function Je(e,t){const n=e.spatialReference;return ne(e,t)&&x(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Be(e){const{distance:t,units:n}=e,s=e.geometry;if(t==null||"vertexAttributes"in s)return s;const r=s.spatialReference,i=n?ze.fromJSON(n):de(r),l=r&&(xe(r)||F(r))?s:await M(r,B).then(()=>j(s,B));return(await Ke())(l.spatialReference,l,t,i)}async function Ke(){return(await import("./geometryEngineJSON-CkglJ9p3.js").then(e=>e.g)).geodesicBuffer}function $e(e){return e==="mesh"?Te:be(e)}function se(e,t){return e?t?4:3:t?3:2}function De(e,t,n,s){return re(e,t,n,s.coords[0],s.coords[1])}function We(e,t,n,s,r,i){const l=se(r,i),{coords:o,lengths:a}=s;if(!a)return!1;for(let u=0,f=0;u<a.length;u++,f+=l)if(!re(e,t,n,o[f],o[f+1]))return!1;return!0}function re(e,t,n,s,r){if(!e)return!1;const i=se(t,n),{coords:l,lengths:o}=e;let a=!1,u=0;for(const f of o)a=Le(a,l,i,u,f,s,r),u+=f*i;return a}function Le(e,t,n,s,r,i,l){let o=e,a=s;for(let u=s,f=s+r*n;u<f;u+=n){a=u+n,a===f&&(a=s);const c=t[u],m=t[u+1],p=t[a],h=t[a+1];(m<l&&h>=l||h<l&&m>=l)&&c+(l-m)/(h-m)*(p-c)<i&&(o=!o)}return o}const U="unsupported-query",Qe={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},Z={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Xe(e){return e!=null&&Z.spatialRelationship[e]===!0}function He(e){return e!=null&&Z.queryGeometry[Ge(e)]===!0}function et(e){return e!=null&&Z.layerGeometry[e]===!0}function tt(){return import("./geometryEngineJSON-CkglJ9p3.js").then(e=>e.g)}function nt(e,t,n,s,r){if(G(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const i=K(new T,t,!1,!1);return Promise.resolve(l=>De(i,!1,!1,l))}if(G(t)&&n==="esriGeometryMultipoint"){const i=K(new T,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>We(i,!1,!1,l,s,r))}if(x(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(i=>_e(t,b(n,s,r,i)));if(x(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(i=>we(t,b(n,s,r,i)));if(x(t)&&e==="esriSpatialRelIntersects"){const i=$e(n);return Promise.resolve(l=>i(t,b(n,s,r,l)))}return tt().then(i=>{const l=i[Qe[e]].bind(null,t.spatialReference,t);return o=>l(b(n,s,r,o))})}async function st(e,t,n){const{spatialRel:s,geometry:r}=e;if(r){if(!Xe(s))throw new A(U,"Unsupported query spatial relationship",{query:e});if(w(r.spatialReference)&&w(n)){if(!He(r))throw new A(U,"Unsupported query geometry type",{query:e});if(!et(t))throw new A(U,"Unsupported layer geometry type",{query:e});if(e.outSR)return M(e.geometry?.spatialReference,e.outSR)}}}function rt(e){if(x(e))return!0;if(G(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function it(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:s,endTimeField:r}=e;let i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(s&&r)await t.forEach(o=>{const a=n.getAttribute(o,s),u=n.getAttribute(o,r);a==null||isNaN(a)||(i=Math.min(i,a)),u==null||isNaN(u)||(l=Math.max(l,u))});else{const o=s||r;await t.forEach(a=>{const u=n.getAttribute(a,o);u==null||isNaN(u)||(i=Math.min(i,u),l=Math.max(l,u))})}return{start:i,end:l}}function lt(e,t,n){if(!t||!e)return null;const{startTimeField:s,endTimeField:r}=e;if(!s&&!r)return null;const{start:i,end:l}=t;if(i===null&&l===null)return null;if(i===void 0&&l===void 0)return ut();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return s&&r?ot(o,s,r,i,l):at(o,s||r,i,l)}function ot(e,t,n,s,r){return s!=null&&r!=null?i=>{const l=e(i,t),o=e(i,n);return(l==null||l<=r)&&(o==null||o>=s)}:s!=null?i=>{const l=e(i,n);return l==null||l>=s}:r!=null?i=>{const l=e(i,t);return l==null||l<=r}:void 0}function at(e,t,n,s){return n!=null&&s!=null&&n===s?r=>e(r,t)===n:n!=null&&s!=null?r=>{const i=e(r,t);return i!=null&&i>=n&&i<=s}:n!=null?r=>{const i=e(r,t);return i!=null&&i>=n}:s!=null?r=>{const i=e(r,t);return i!=null&&i<=s}:void 0}function ut(){return()=>!1}export{rt as I,st as P,Ce as S,b as a,te as b,it as c,Ze as d,q as g,Ee as h,j,Fe as n,lt as t,nt as v,M as x,Pe as y};