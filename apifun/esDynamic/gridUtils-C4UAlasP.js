import{cp as G,bj as h,M as m,bC as y,a6 as M,aQ as W}from"./main-DeRV24Di.js";import{y as w,R as S}from"./geodesicUtils-BToB7aOd.js";import{M as d}from"./normalizeUtils-Da1ioVmk.js";const j=50,Q=5;function k(e,a){return Math.log(e)/Math.log(a)}function q(e,a,s){const n=e===1?10:e;return n**(s?Math.round(k(j/a,n)):0)}function C(e){const{isGeographic:a,isWebMercator:s}=e;return!a&&!s}function P(e,a,s){const n=typeof e=="number"?null:e,t=s??n?.spatialReference;if(t==null||!G(t)||C(t))return h(t);let o=n?.x??e,c=n?.y??a;const u=1/Math.sqrt(2);let i=o+u,l=c+u;const{isWebMercator:x,isGeographic:b}=t;let f=b&&!w(t)?m.WGS84:t;if(x){let r=new y({x:o,y:c,spatialReference:t});M(r,!0,r),o=r.x,c=r.y,r=new y({x:i,y:l,spatialReference:t}),M(r,!0,r),i=r.x,l=r.y,f=m.WGS84}const R=new W({paths:[[[o,c],[i,l]]],spatialReference:f}),g=d(R,10);let p;try{[p]=S([g],"meters")}catch{return h(t)}return p}export{q as l,Q as t,P as u};
