import { o } from './floatRGBA-D_j_VhU9.js';
import { ay as m$1 } from './main-CGBWc59Z.js';
import { t } from './UpdateTracking2D-tfVHyc-s.js';
import { D as Dt, t as tt } from './definitions-BdwlvHBE.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function l$1(t){switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;if(!o||1!==o.length)return null;const n=o[0];return "CIMVectorMarker"!==n.type?null:l$1(n)}case"CIMVectorMarker":{const o=t.markerGraphics;if(!o||1!==o.length)return null;const n=o[0];if(!n)return null;const r=n.geometry;if(!r)return null;const e=n.symbol;return !e||"CIMPolygonSymbol"!==e.type&&"CIMLineSymbol"!==e.type||e.symbolLayers?.some((t=>!!t.effects))?null:{type:"sdf",geom:r,asFill:"CIMPolygonSymbol"===e.type}}}}function i(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function s(t$1){let o=1/0,r=-1/0,e=1/0,l=-1/0;for(const n of t$1)for(const t of n)t[0]<o&&(o=t[0]),t[0]>r&&(r=t[0]),t[1]<e&&(e=t[1]),t[1]>l&&(l=t[1]);return new t(o,e,r-o,l-e)}function f(t){let o=1/0,n=-1/0,r=1/0,e=-1/0;for(const l of t)for(const t of l)t[0]<o&&(o=t[0]),t[0]>n&&(n=t[0]),t[1]<r&&(r=t[1]),t[1]>e&&(e=t[1]);return [o,r,n,e]}function m(t){return t?t.rings?f(t.rings):t.paths?f(t.paths):m$1(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function a(t,o,n,l,i){const[s,f,m,a]=t;if(m<s||a<f)return [0,0,0,1];const c=m-s,u=a-f,y=Dt,h=tt,x=Math.floor(.5*(.5*y-h)),M=(y-2*(x+h))/Math.max(c,u),p=Math.round(c*M)+2*x,g=Math.round(u*M)+2*x;let d=1;if(o){d=g/M/(o.ymax-o.ymin);}let b=0,w=0,C=1;l&&(i?o&&n&&o.ymax-o.ymin>0&&(C=(o.xmax-o.xmin)/(o.ymax-o.ymin),b=l.x/(n*C),w=l.y/n):(b=l.x,w=l.y)),o&&(b=.5*(o.xmax+o.xmin)+b*(o.xmax-o.xmin),w=.5*(o.ymax+o.ymin)+w*(o.ymax-o.ymin)),b-=s,w-=f,b*=M,w*=M,b+=x,w+=x;let I=b/p-.5,j=w/g-.5;return i&&n&&(I*=n*C,j*=n),[d,I,j,C]}function c(t){const o=i(t.geom),n=s(o),l=Dt,f=tt,m=Math.floor(.5*(.5*l-f)),a=(l-2*(m+f))/Math.max(n.width,n.height),c=Math.round(n.width*a)+2*m,x=Math.round(n.height*a)+2*m,M=[];for(const r of o)if(r&&r.length>1){const o=[];for(const e of r){let[r,l]=e;r-=n.x,l-=n.y,r*=a,l*=a,r+=m-.5,l+=m-.5,t.asFill?o.push([r,l]):o.push([Math.round(r),Math.round(l)]);}if(t.asFill){const t=o.length-1;o[0][0]===o[t][0]&&o[0][1]===o[t][1]||o.push(o[0]);}M.push(o);}const p=u(M,c,x,m);return t.asFill&&y(M,c,x,m,p),[h(p,m),c,x]}function u(t,o,n,r){const e=o*n,l=new Array(e),i=r*r+1;for(let s=0;s<e;++s)l[s]=i;for(const s of t){const t=s.length;for(let e=1;e<t;++e){const t=s[e-1],i=s[e];let f,m,a,c;t[0]<i[0]?(f=t[0],m=i[0]):(f=i[0],m=t[0]),t[1]<i[1]?(a=t[1],c=i[1]):(a=i[1],c=t[1]);let u=Math.floor(f)-r,y=Math.floor(m)+r,h=Math.floor(a)-r,x=Math.floor(c)+r;u<0&&(u=0),y>o&&(y=o),h<0&&(h=0),x>n&&(x=n);const M=i[0]-t[0],p=i[1]-t[1],g=M*M+p*p;for(let r=u;r<y;r++)for(let e=h;e<x;e++){const s=r+.5,f=e+.5;let m,a,c=(s-t[0])*M+(f-t[1])*p;c<0?(m=t[0],a=t[1]):c>g?(m=i[0],a=i[1]):(c/=g,m=t[0]+c*M,a=t[1]+c*p);const u=(s-m)*(s-m)+(f-a)*(f-a),y=(n-e-1)*o+r;u<l[y]&&(l[y]=u);}}}for(let s=0;s<e;++s)l[s]=Math.sqrt(l[s]);return l}function y(t,o,n,r,e){for(const l of t){const t=l.length;for(let i=1;i<t;++i){const t=l[i-1],s=l[i];let f,m,a,c;t[0]<s[0]?(f=t[0],m=s[0]):(f=s[0],m=t[0]),t[1]<s[1]?(a=t[1],c=s[1]):(a=s[1],c=t[1]);let u=Math.floor(f),y=Math.floor(m)+1,h=Math.floor(a),x=Math.floor(c)+1;u<r&&(u=r),y>o-r&&(y=o-r),h<r&&(h=r),x>n-r&&(x=n-r);for(let l=h;l<x;++l){if(t[1]>l==s[1]>l)continue;const i=l+.5,f=(n-l-1)*o;for(let o=u;o<y;++o){o+.5<(s[0]-t[0])*(i-t[1])/(s[1]-t[1])+t[0]&&(e[f+o]=-e[f+o]);}for(let t=r;t<u;++t)e[f+t]=-e[f+t];}}}}function h(o$1,n){const r=2*n,e=o$1.length,l=new Uint8Array(4*e);for(let i=0;i<e;++i){const n=.5-o$1[i]/r;o(n,l,4*i);}return l}

export { a, c, l$1 as l, m };