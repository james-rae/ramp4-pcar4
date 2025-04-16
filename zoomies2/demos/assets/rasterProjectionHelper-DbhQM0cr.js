const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngine-ajgJZL_p.js","./main-BxgY9rsH.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./geometryEngineBase-8g0RzW7z.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-R0KgKBXN.js"])))=>i.map(i=>d[i]);
import{_ as Nn}from"./preload-helper-ExcqyqRp.js";import{aw as A,bs as I,bT as _n,bF as tn,bx as E,bI as vn,s as yn,ct as T,cu as v,cv as rn,cw as Tn,cx as Cn,D as dn}from"./main-BxgY9rsH.js";import{_ as B,W as zn,K as z,J as Wn,Y as an}from"./projection-DMFhF-YC.js";var nn;function wn(n,t,i){return!Wn(n,t,i)}function W(n,t,i){const o=wn(n,t,i);if(o&&!B())throw new yn("rasterprojectionhelper-project","projection engine is not loaded");return o}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(nn||(nn={}));const ln=(n,t,i,o=0)=>{if(i[0]===1)return[0,0];let r=1,e=-1,s=1,l=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(r=r>n[u]?n[u]:r,e=e>n[u]?e:n[u],s=s>n[u+1]?n[u+1]:s,l=l>n[u+1]?l:n[u+1]);const{cols:a,rows:c}=t,f=(e-r)/a/i[0],w=(l-s)/c/i[1],m=2*o;let x=0,h=!1,p=[0,0];for(let u=0;u<a-3;u++){for(let M=0;M<c-3;M++){const y=u*c*2+2*M,g=(n[y]+n[y+4]+n[y+4*c]+n[y+4*c+4])/4,d=(n[y+1]+n[y+5]+n[y+4*c+1]+n[y+4*c+5])/4,R=Math.abs((g-n[y+2*c+2])/f),P=Math.abs((d-n[y+2*c+3])/w);if(R+P>x&&(x=R+P,p=[R,P]),m&&x>m){h=!0;break}}if(h)break}return p},Ln={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},Y=32,q=4,V=q,H=new Map,Q=new Map,J=500;let K=null;async function Dn(){K&&B()||(B()||await zn(),K=await Nn(()=>import("./geometryEngine-ajgJZL_p.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url))}function In(n,t,i){return W(n.spatialReference,t),i?an(t,n.spatialReference,n):an(n.spatialReference,t,n)}function Xn(n,t,i,o=null){const r=n.spatialReference;if(!r||!t||r.equals(t))return n;W(r,t,o);const e=i.center,s=new A({xmin:e.x-n.x/2,xmax:e.x+n.x/2,ymin:e.y-n.y/2,ymax:e.y+n.y/2,spatialReference:r}),l=z(s,t,o),a=N(t);return l==null||a!=null&&l.width>=a?F(n,r,t):{x:l.width,y:l.height}}function F(n,t,i){const o=I(t)/I(i);return{x:n.x*o,y:n.y*o}}function cn(n,t,i){const{spatialReference:o}=i;if(!o||!t||o.equals(t))return n;if(o.isGeographic&&t.isGeographic)return F(n,o,t);if(W(o,t),!K)throw new yn("raster-projection-helper:project-dataset-resolution","geometry engine is not loaded");let{x:r,y:e}=n;const s=(r+e)/2*I(o);let l=1;s>30&&(l=30/s,r*=l,e*=l);const a=256,c=r*a/2,f=e*a/2,{x:w,y:m}=i.center,x=[];for(let b=0;b<=a;b++)x.push([w-c,m-f+b*e]);for(let b=1;b<=a;b++)x.push([w-c+b*r,m+f]);for(let b=1;b<=a;b++)x.push([w+c,m+f-b*e]);for(let b=1;b<a;b++)x.push([w+c-b*r,m-f]);x.push(x[0]);const h=new tn({rings:[x],spatialReference:o}),p=z(h,t);if(!p)return F(n,o,t);const u=p.extent,M=N(t);if(u==null||M!=null&&u.width>=M)return F(n,o,t);const y=K.planarArea(p),g=r*e*a*a,d=Math.sqrt(y/g)/l,R={x:u.width/l/a,y:u.height/l/a},P={x:r*d,y:e*d},G=R.x*R.y;return Math.abs(G-P.x*P.y)/G<.1?R:P}function k(n,t=.01){return I(n)?t/I(n):0}function fn(n,t,i=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;W(r,t,i);const e=z(n,t,i);return o&&e&&Mn([n],[e],r,t),e}function Mn(n,t,i,o){const r=D(i,!0),e=D(o,!0),s=k(i,J),l=k(o,J);if(s&&r!=null&&e!=null)for(let a=0;a<n.length;a++){const c=t[a];if(!c)continue;const{x:f}=n[a],{x:w}=c;w>=e[1]-l&&Math.abs(f-r[0])<s?c.x-=e[1]-e[0]:w<=e[0]+l&&Math.abs(f-r[1])<s&&(c.x+=e[1]-e[0])}}function On(n){const{inSR:t,outSR:i,datumTransformation:o,preferPE:r}=n;if(t.equals(i)){const{points:e}=en(n,null);return e}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?jn(n):W(t,i,o)&&r&&(t.isGeographic||O(t)!=null)?un(n):$n(n)}function $n(n){const{points:t}=en(n,null),{inSR:i,outSR:o,datumTransformation:r}=n,e=t.map(l=>new E(l[0],l[1],i)),s=z(e,o,r);return r&&Mn(e,s,i,o),s.map(l=>l?[l.x,l.y]:[NaN,NaN])}function un(n){const{inSR:t,outSR:i,datumTransformation:o}=n,r=O(t),{points:e,mask:s}=en(n,r);if(!t.isGeographic){const a=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,t.wkt2||t.wkt);rn.projToGeog(a,e.length,e)}if(o!=null&&o.steps.length){let a;if(i.isGeographic&&(a=e.map(([f])=>f>179.9955?1:f<-179.9955?-1:0)),o.steps.forEach(f=>{const w=f.wkid?T.geogtran(f.wkid):T.fromString(v.PE_TYPE_GEOGTRAN,f.wkt);Tn.geogToGeog(w,e.length,e,null,f.isInverse?v.PE_TRANSFORM_2_TO_1:v.PE_TRANSFORM_1_TO_2)}),a)for(let f=0;f<e.length;f++){const w=a[f],m=e[f][0],x=m>179.9955?1:m<-179.9955?-1:0;w&&x&&w!==x&&(e[f][0]=w>0?m+360:m-360)}}if(!i.isGeographic){const a=O(i,!0),c=a!=null&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];An(e,c);const f=i.wkid?T.coordsys(i.wkid):T.fromString(i.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,i.wkt2||i.wkt);rn.geogToProj(f,e.length,e)}let l=e;if(s&&e.length!==s.length){l=[];for(let a=0,c=0;a<s.length;a++)s[a]?l.push(e[c++]):l.push([NaN,NaN])}return l}function jn(n){const{cols:t,rows:i,xres:o,yres:r,usePixelCenter:e,inSR:s,outSR:l}=n;let{xmin:a,ymax:c}=n;e&&(a+=o/2,c-=r/2);const f=[],w=[],m=Math.max(t,i);for(let h=0;h<m;h++){const p=a+o*Math.min(t,h),u=c-r*Math.min(i,h),M=z(new E({x:p,y:u,spatialReference:s}),l);h<=t&&f.push(M.x),h<=i&&w.push(M.y)}const x=[];for(let h=0;h<t;h++)for(let p=0;p<i;p++)x.push([f[h],w[p]]);return x}function O(n,t=!1){let i=n.wkid||n.wkt2||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),H.has(i)){const s=H.get(i);return t?s?.gcs:s?.pcs}const o=n.wkid?T.coordsys(n.wkid):T.fromString(n.isGeographic?v.PE_TYPE_GEOGCS:v.PE_TYPE_PROJCS,n.wkt2||n.wkt),r=xn(o,k(n,1e-4)),e=xn(o,0,!0);return H.set(i,{pcs:r,gcs:e}),t?e:r}function xn(n,t=0,i=!1){const o=Cn.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!o||!r?.length)return null;let e=!1,s=r.find(u=>u.getInclusive()===1&&u.getKind()===1);if(!s){if(s=r.find(u=>u.getInclusive()===1&&u.getKind()===0),!s)return null;e=!0}const l=i?0:(o.getNorthPoleLocation()===2?1:0)|(o.getSouthPoleLocation()===2?2:0),a=o.isPannableRectangle(),c=s.getCoord();if(e)return{isEnvelope:e,isPannable:a,vertices:c,coef:null,bbox:[c[0][0]-t,c[0][1]-t,c[1][0]+t,c[1][1]+t],poleLocation:l};let f=0;const w=[];let[m,x]=c[0],[h,p]=c[0];for(let u=0,M=c.length;u<M;u++){f++,f===M&&(f=0);const[y,g]=c[u],[d,R]=c[f];if(R===g)w.push([y,d,g,R,2]);else{const P=(d-y)/(R-g||1e-4),G=y-P*g;g<R?w.push([P,G,g,R,0]):w.push([P,G,R,g,1])}m=m<y?m:y,x=x<g?x:g,h=h>y?h:y,p=p>g?p:g}return{isEnvelope:!1,isPannable:a,vertices:c,coef:w,bbox:[m,x,h,p],poleLocation:l}}function en(n,t){const i=[],{cols:o,rows:r,xres:e,yres:s,usePixelCenter:l}=n;let{xmin:a,ymax:c}=n;if(l&&(a+=e/2,c-=s/2),t==null){for(let x=0;x<o;x++)for(let h=0;h<r;h++)i.push([a+e*x,c-s*h]);return{points:i}}const f=new Uint8Array(o*r);if(t.isEnvelope){const{bbox:[x,h,p,u]}=t;for(let M=0,y=0;M<o;M++){const g=a+e*M,d=t.isPannable||g>=x&&g<=p;for(let R=0;R<r;R++,y++){const P=c-s*R;d&&P>=h&&P<=u&&(i.push([g,P]),f[y]=1)}}return{points:i,mask:f}}const w=t.coef,m=[];for(let x=0;x<r;x++){const h=c-s*x,p=[],u=[];for(let y=0;y<w.length;y++){const[g,d,R,P,G]=w[y];if(h===R&&R===P)p.push(g),p.push(d),u.push(2),u.push(2);else if(h>=R&&h<=P){const b=g*h+d;p.push(b),u.push(G)}}let M=p;if(p.length>2){let y=u[0]===2?0:u[0],g=p[0];M=[];for(let d=1;d<u.length;d++)u[d]===2&&d!==u.length-1||(u[d]!==y&&(M.push(y===0?Math.min(g,p[d-1]):Math.max(g,p[d-1])),y=u[d],g=p[d]),d===u.length-1&&M.push(u[d]===0?Math.min(g,p[d]):Math.max(g,p[d])));M.sort((d,R)=>d-R)}else p[0]>p[1]&&(M=[p[1],p[0]]);m.push(M)}for(let x=0,h=0;x<o;x++){const p=a+e*x;for(let u=0;u<r;u++,h++){const M=c-s*u,y=m[u];if(y.length===2)p>=y[0]&&p<=y[1]&&(i.push([p,M]),f[h]=1);else if(y.length>2){let g=!1;for(let d=0;d<y.length;d+=2)if(p>=y[d]&&p<=y[d+1]){g=!0;break}g&&(i.push([p,M]),f[h]=1)}}}return{points:i,mask:f}}function An(n,t){const[i,o]=t;for(let r=0;r<n.length;r++){const e=n[r][1];(e<i||e>o)&&(n[r]=[NaN,NaN])}}function Rn(n,t){const i=N(n[0].spatialReference);if(n.length<2||i==null||(t=t??k(n[0].spatialReference),(n=n.filter(l=>l.width>t)).length===1))return n[0];let{xmin:o,xmax:r,ymin:e,ymax:s}=n[0];for(let l=1;l<n.length;l++){const a=n[l];r=a.xmax+i*l,e=Math.min(e,a.ymin),s=Math.max(s,a.ymax)}return new A({xmin:o,xmax:r,ymin:e,ymax:s,spatialReference:n[0].spatialReference})}function bn(n,t,i=null,o=!0){const r=n.spatialReference;if(r.equals(t))return n;const e=Pn(n),s=N(r,!0),l=N(t);if(e===0||s==null||l==null){const c=hn(n,t,i,o);if(s==null&&l!=null&&Math.abs(c.width-l)<k(t)&&B()){const f=O(r);if(f!=null&&f.poleLocation===nn.None&&n.width<(f.bbox[2]-f.bbox[0])/2)return Fn(n,t)||c}return c}const a=n.clone().normalize();if(a.length===1&&n.xmax<s&&n.xmax-s/2>k(r)){const{xmin:c,xmax:f}=n;for(let w=0;w<=e;w++){const m=w===0?c:-s/2,x=w===e?f-s*w:s/2;a[w]=new A({xmin:m,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return Rn(a.map(c=>hn(c,t,i,o)).filter(_n))}function Un(n,t,i){if(n.type==="extent"){const{xmin:o,ymin:r,xmax:e,ymax:s,spatialReference:l}=n;n=new tn({rings:[[[o,s],[e,s],[e,r],[o,r],[o,s]]],spatialReference:l})}return n.spatialReference.equals(t)?n:(W(n.spatialReference,t,i),z(n,t,i))}function Fn(n,t){const i=N(t);if(i==null)return null;let{xmin:o,ymin:r,xmax:e,ymax:s}=n;const l=n.spatialReference,a=new tn({spatialReference:l,rings:[[[o,r],[e,r],[e,s],[o,s],[o,r]]]}),c=z(a,t);if(c.rings.length!==2||!c.rings[0].length||!c.rings[1].length)return null;const{rings:f}=c,w=k(l),m=new A({spatialReference:t});for(let x=0;x<2;x++){o=e=f[x][0][0],r=s=f[x][0][1];for(let h=0;h<f[x].length;h++)o=o>f[x][h][0]?f[x][h][0]:o,e=e<f[x][h][0]?f[x][h][0]:e,r=r>f[x][h][1]?f[x][h][1]:r,s=s<f[x][h][1]?f[x][h][1]:s;if(x===0)m.ymin=r,m.ymax=s,m.xmin=o,m.xmax=e;else if(m.ymin=Math.min(m.ymin,r),m.ymax=Math.max(m.ymax,s),Math.abs(e-i/2)<w)m.xmin=o,m.xmax=m.xmax+i;else{if(!(Math.abs(o+i/2)<w))return null;m.xmax=e+i}}return m}function hn(n,t,i=null,o=!0,r=!0){const e=n.spatialReference;if(e.equals(t)||!t)return n;W(e,t,i);const s=z(n,t,i);if(r&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508342787e-6,s.ymax),s.ymin=Math.max(-20037508342787e-6,s.ymin),s.ymin>=s.ymax))return null;if(!o||!s)return s;const l=D(e,!0),a=D(t,!0);if(l==null||a==null)return s;const c=k(e,.001),f=k(e,J),w=k(t,.001);if(Math.abs(s.xmin-a[0])<w&&Math.abs(s.xmax-a[1])<w){const m=Math.abs(n.xmin-l[0]),x=Math.abs(l[1]-n.xmax);if(m<c&&x>f){s.xmin=a[0];const h=[];h.push(new E(n.xmax,n.ymin,e)),h.push(new E(n.xmax,(n.ymin+n.ymax)/2,e)),h.push(new E(n.xmax,n.ymax,e));const p=h.map(u=>fn(u,t,i)).filter(u=>!isNaN(u?.x)).map(u=>u.x);s.xmax=Math.max.apply(null,p)}if(x<c&&m>f){s.xmax=a[1];const h=[];h.push(new E(n.xmin,n.ymin,e)),h.push(new E(n.xmin,(n.ymin+n.ymax)/2,e)),h.push(new E(n.xmin,n.ymax,e));const p=h.map(u=>fn(u,t,i)).filter(u=>!isNaN(u?.x)).map(u=>u.x);s.xmin=Math.min.apply(null,p)}}else{const m=k(t,.001);Math.abs(s.xmin-a[0])<m&&(s.xmin=a[0]),Math.abs(s.xmax-a[1])<m&&(s.xmax=a[1])}return s}function N(n,t=!1){if(!n)return null;const i=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Ln[n.wkid]||null}function D(n,t=!1){if(n.isGeographic)return[-180,180];const i=N(n,t);return i!=null?[-i/2,i/2]:null}function mn(n,t,i,o){let r=(n-t)/i;return r-Math.floor(r)!=0?r=Math.floor(r):o&&(r-=1),r}function Pn(n,t=!1){const i=N(n.spatialReference);if(i==null)return 0;const o=t?0:-(i/2),r=k(n.spatialReference),e=!t&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,s=!t&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return mn(e,o,i,!0)-mn(s,o,i,!1)}function Vn(n){const t=n.storageInfo.origin.x,i=N(n.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const o=i/2,{nativePixelSize:r,storageInfo:e,extent:s}=n,{maximumPyramidLevel:l,blockWidth:a,pyramidScalingFactor:c}=e;let f=r.x;const w=[],m=n.transform!=null&&n.transform.type==="gcs-shift",x=t+(m?0:o),h=m?i-t:o-t;for(let p=0;p<=l;p++){const u=(s.xmax-t)/f/a,M=u-Math.floor(u)==0?u:Math.ceil(u),y=h/f/a,g=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(x/f/a),R=Math.round(x/f)%a,P=(a-Math.round(h/f)%a)%a;w.push({resolutionX:f,blockWidth:a,datasetColumnCount:M,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:P,originColumnOffset:d}),f*=c}return{originX:t,halfWorldWidth:o,pyramidsInfo:w,hasGCSSShiftTransform:m}}function Bn(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt2||n.wkt);let i;return Q.has(t)?i=Q.get(t):(i=(n.wkid?T.coordsys(n.wkid):T.fromString(v.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),Q.set(t,i)),new dn({wkid:i})}function Hn(n){const t=n.isAdaptive&&n.spacing==null;let i=n.spacing||[Y,Y],o=Z(n),r={cols:o.size[0]+1,rows:o.size[1]+1};const e=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;let s=o.outofBoundPointCount===o.offsets.length/2||t&&e?[0,0]:ln(o.offsets,r,i,V);const l=(s[0]+s[1])/2,a=n.projectedExtent.spatialReference,c=n.srcBufferExtent.spatialReference;if(t&&(e||l>V)&&(wn(a,c,n.datumTransformation)&&(a.isGeographic||O(a)),i=[q,q],o=Z({...n,spacing:i}),r={cols:o.size[0]+1,rows:o.size[1]+1},s=ln(o.offsets,r,i,V)),o.error=s,i[0]>1&&(o.coefficients=pn(o.offsets,r,e)),n.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(c.isGeographic)o.gcsGrid={offsets:o.offsets,coefficients:o.coefficients,spacing:i};else{const f=O(a);if(f!=null&&!f.isEnvelope){const w=Bn(a),m=bn(n.projectedExtent,w),{offsets:x}=Z({...n,srcBufferExtent:m,spacing:i}),h=pn(x,r,e);o.gcsGrid={offsets:x,coefficients:h,spacing:i}}}return o}function Z(n){const{projectedExtent:t,srcBufferExtent:i,pixelSize:o,datumTransformation:r,rasterTransform:e}=n,s=t.spatialReference,l=i.spatialReference,a=W(s,l),{xmin:c,ymin:f,xmax:w,ymax:m}=t,x=N(l),h=x!=null&&(n.hasWrapAround||e?.type==="gcs-shift"),p=n.spacing||[Y,Y],u=p[0]*o.x,M=p[1]*o.y,y=p[0]===1,g=Math.ceil((w-c)/u-.1/p[0])+(y?0:1),d=Math.ceil((m-f)/M-.1/p[1])+(y?0:1),R=On({cols:g,rows:d,xmin:c,ymax:m,xres:u,yres:M,inSR:s,outSR:l,datumTransformation:r,preferPE:p[0]<=q,usePixelCenter:y}),P=[];let G,b=0;const _=y?-1:NaN,{xmin:L,xmax:$,ymax:X,width:Sn,height:Gn}=i,kn=k(l,J),En=x!=null&&L>0&&$>x/2;let on=!1;if(a){const C=O(s);on=C!=null&&C.poleLocation>0}for(let C=0;C<g;C++){const U=[];for(let j=0;j<d;j++){let S=R[C*d+j];if(h&&S[0]>$&&S[0]>x/2-kn?S[0]-=x:h&&C===0&&S[0]<0&&En&&!e&&(S[0]+=x),!S||isNaN(S[0])||isNaN(S[1]))P.push(_),P.push(_),U.push(null),b++;else{if(e){const sn=e.inverseTransform(new E({x:S[0],y:S[1],spatialReference:l}));S=[sn.x,sn.y]}U.push(S),C>0&&h&&G[j]&&S[0]<G[j][0]&&(S[0]+=x,on&&S[0]>$&&S[0]>x&&(S[0]-=x)),P.push((S[0]-L)/Sn),P.push((X-S[1])/Gn)}}G=U}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:b,spacing:p,size:y?[g,d]:[g-1,d-1]}}function pn(n,t,i){const{cols:o,rows:r}=t,e=new Float32Array((o-1)*(r-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),l=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<o-1;a++){for(let c=0;c<r-1;c++){let f=a*r*2+2*c;const w=n[f],m=n[f+1],x=n[f+2],h=n[f+3];f+=2*r;const p=n[f],u=n[f+1],M=n[f+2],y=n[f+3];let g=0,d=12*(c*(o-1)+a);for(let R=0;R<3;R++)e[d++]=s[g++]*w+s[g++]*x+s[g++]*M;g=0;for(let R=0;R<3;R++)e[d++]=s[g++]*m+s[g++]*h+s[g++]*y;g=0;for(let R=0;R<3;R++)e[d++]=l[g++]*w+l[g++]*p+l[g++]*M;g=0;for(let R=0;R<3;R++)e[d++]=l[g++]*m+l[g++]*u+l[g++]*y}if(i)for(let c=0;c<e.length;c++)isNaN(e[c])&&(e[c]=-1)}return e}function Yn(n,t){const i=n.clone().normalize();return i.length===1?i[0]:Rn(i,t)}function Qn(n){const{spatialReference:t}=n,i=vn(t);if(!i)return n;const[o,r]=i.valid,e=r-o;let s=0;if(n.xmin<o){const l=o-n.xmin;s=Math.ceil(l/e)}else if(n.xmin>r){const l=n.xmin-r;s=-Math.ceil(l/e)}return new A({spatialReference:n.spatialReference,xmin:n.xmin+s*e,ymin:n.ymin,xmax:n.xmax+s*e,ymax:n.ymax})}function Zn(n,t,i){const{storageInfo:o,pixelSize:r}=t;let e=0,s=!1;const{pyramidResolutions:l}=o,a=o.tileInfo.format?.toLowerCase()==="mixed"?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,c=(n.x+n.y)/2/a;if(l!=null&&l.length){const h=l[l.length-1],p=(h.x+h.y)/2,u=(r.x+r.y)/2;if(c<=u)e=0;else if(c>=p)e=l.length,s=c/p>8;else{let y,g=u;for(let d=1;d<=l.length;d++){if(y=(l[d-1].x+l[d-1].y)/2,c<=y){c===y?e=d:i==="down"?(e=d-1,s=c/g>8):e=i==="up"||c-g>y-c||c/g>2?d:d-1;break}g=y}}const M=e===0?r:l[e-1];return s&&Math.min(M.x,M.y)*I(t.spatialReference)>19567&&(s=!1),{pyramidLevel:e,pyramidResolution:new E({x:M.x,y:M.y,spatialReference:t.spatialReference}),excessiveReading:s}}const f=Math.log(n.x/r.x)/Math.LN2,w=Math.log(n.y/r.y)/Math.LN2,m=t.storageInfo.maximumPyramidLevel||0;e=i==="down"?Math.floor(Math.min(f,w)):i==="up"?Math.ceil(Math.max(f,w)):Math.round((f+w)/2),e<0?e=0:e>m&&(s=e>m+3,e=m);const x=2**e;return{pyramidLevel:e,pyramidResolution:new E({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function gn(n,t){const{pixelSize:i,extent:o}=n,r=In(o,t,!1);return bn(Yn(o,(i.x+i.y)/16),t,r)}function nt(n,t,i){const o=i?.tileSize,r=i?.alignGlobalDatasetWithAGOL,{extent:e,spatialReference:s,pixelSize:l}=n,a=cn(l,t,e);if(a==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(a.x+a.y)/2,f=I(t),w=c*f*96*39.37,m=t.isGeographic?256/o*2958287637958547e-7:256/o*591657527591555e-6;let x=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const h=gn(n,t),p=Math.min(Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2),Math.ceil(Math.log(m/2/w)/Math.LN2));if(!x&&r&&(t.isGeographic||t.isWebMercator)){const b=N(t);if(x=Pn(h)>0||b!=null&&h.width>b/4,!x&&b!=null){let _=-1;if(p<3)_=2**p*c*o;else if(n.storageInfo){const{maximumPyramidLevel:$=0,pyramidScalingFactor:X=2}=n.storageInfo;_=X**$*c*o}const L=Math.ceil(b/_);x=L===1||L===2&&b/2-h.xmax<_}}let u,M=w;const y=1.001,g=Math.min(2,Math.max(1.414,n.storageInfo?.pyramidScalingFactor||2));if(x){M=m;const b=t.isGeographic?1341104507446289e-21:.29858214164761665,_=b*(96*f*39.37),L=t.isGeographic?4326:3857;u=cn({x:b,y:b},s,gn(n,new dn({wkid:L}))),u.x*=M/_,u.y*=M/_}else{u={x:l.x,y:l.y};let b=0;for(;M<m*(y/2)&&b<p;)b++,M*=g,u.x*=g,u.y*=g;Math.max(M,m)/Math.min(M,m)<=y&&(M=m)}const d=[M],R=[{x:u.x,y:u.y}],P=70.5310735,G=Math.min(P,w)/y;for(;M>=G;)M/=g,u.x/=g,u.y/=g,d.push(M),R.push({x:u.x,y:u.y});return{projectedPixelSize:a,scales:d,srcResolutions:R,isCustomTilingScheme:!x}}export{Xn as C,Un as D,fn as I,bn as K,N as V,Qn as a,gn as c,Pn as e,nt as f,Hn as i,In as j,Zn as l,Vn as t,Dn as v,wn as w};
