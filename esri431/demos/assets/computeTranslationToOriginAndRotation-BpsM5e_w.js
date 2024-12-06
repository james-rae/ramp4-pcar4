import { ej as s, gx as F, gy as ln, gz as en, gA as N, a6 as s$1, gB as q, gC as L$1, gD as o$1, f_ as s$2, ap as n$1 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(t,n,o){const r=Math.sin(t),a=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=o;return c[0]=-r,c[4]=-i*a,c[8]=s*a,c[12]=0,c[1]=a,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function o(o,r,a){return n(o,r,a),s(a,a),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function C(r,n$1,C,R){if(null==r||null==R)return !1;const p=F(r,ln),a=F(R,en);if(p===a&&!E(a)&&(p!==N.UNKNOWN||s$1(r,R)))return q(C,n$1),!0;if(E(a)){const r=L$1[p][N.LON_LAT],t=L$1[N.LON_LAT][a];return null!=r&&null!=t&&(r(n$1,0,A,0),t(A,0,L,0),n(_*A[0],_*A[1],C),C[12]=L[0],C[13]=L[1],C[14]=L[2],!0)}const O=E(p);if((a===N.WEB_MERCATOR||a===N.PLATE_CARREE||a===N.WGS84||a===N.CGCS2000)&&(p===N.WGS84||O||p===N.WEB_MERCATOR||p===N.CGCS2000)){const r=L$1[p][N.LON_LAT],t=L$1[N.LON_LAT][a];return null!=r&&null!=t&&(r(n$1,0,A,0),t(A,0,L,0),O?o(_*A[0],_*A[1],C):o$1(C),C[12]=L[0],C[13]=L[1],C[14]=L[2],!0)}return !1}function E(r){return r===N.SPHERICAL_ECEF||r===N.SPHERICAL_MARS_PCPF||r===N.SPHERICAL_MOON_PCPF||r===N.WGS84_ECEF}const _=s$2(1),A=n$1(),L=n$1();

export { C };
