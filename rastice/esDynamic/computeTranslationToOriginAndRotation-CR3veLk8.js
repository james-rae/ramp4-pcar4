import{bf as N,eR as O,aA as l}from"./main-CvsyIoCL.js";import{s as S,q as M,o as P}from"./mat4-TiYsN5VX.js";import{F as R,l as T,e as m,N as o,L as c}from"./projectBuffer-BLp74htV.js";function E(u,C,s){const i=Math.sin(u),r=Math.cos(u),a=Math.sin(C),t=Math.cos(C),n=s;return n[0]=-i,n[4]=-a*r,n[8]=t*r,n[12]=0,n[1]=r,n[5]=-a*i,n[9]=t*i,n[13]=0,n[2]=0,n[6]=t,n[10]=a,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function W(u,C,s){return E(u,C,s),S(s,s),s}function h(u,C,s,i){if(u==null||i==null)return!1;const r=R(u,T),a=R(i,m);if(r===a&&!e(a)&&(r!==o.UNKNOWN||N(u,i)))return M(s,C),!0;if(e(a)){const n=c[r][o.LON_LAT],L=c[o.LON_LAT][a];return n!=null&&L!=null&&(n(C,0,A,0),L(A,0,_,0),E(f*A[0],f*A[1],s),s[12]=_[0],s[13]=_[1],s[14]=_[2],!0)}const t=e(r);if((a===o.WEB_MERCATOR||a===o.PLATE_CARREE||a===o.WGS84||a===o.CGCS2000)&&(r===o.WGS84||t||r===o.WEB_MERCATOR||r===o.CGCS2000)){const n=c[r][o.LON_LAT],L=c[o.LON_LAT][a];return n!=null&&L!=null&&(n(C,0,A,0),L(A,0,_,0),t?W(f*A[0],f*A[1],s):P(s),s[12]=_[0],s[13]=_[1],s[14]=_[2],!0)}return!1}function e(u){return u===o.SPHERICAL_ECEF||u===o.SPHERICAL_MARS_PCPF||u===o.SPHERICAL_MOON_PCPF||u===o.WGS84_ECEF}const f=O(1),A=l(),_=l();export{h as C};