import{af as O,g8 as m,g9 as B,dA as S0,aR as C0,d4 as l0,bj as R0,bl as u0,ga as f0,cn as E0,cx as _0,gb as A0,ch as P0,gc as O0,cf as M0,cg as r0,fc as N0,fd as s0,gd as i0}from"./main-D_jCcUNd.js";const k0=Math.PI/180,w0=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i,s=O.radius,P=O.eccentricitySquared,c0={a1:s*P,a2:s*P*s*P,a3:s*P*P/2,a4:s*P*s*P*2.5,a5:s*P+s*P*P/2,a6:1-P},y0={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:O.radius,f:O.flattening},4490:{a:6378137,f:1/298.257222101},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:m.radius,f:m.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:B.radius,f:B.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:B.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};var a;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=7]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=9]="GCSMOON2000",e[e.LON_LAT=10]="LON_LAT",e[e.PLATE_CARREE=11]="PLATE_CARREE"})(a||(a={}));const L0={[a.WGS84]:{[a.CGCS2000]:l,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:l,[a.WGS84_ECEF]:d},[a.CGCS2000]:{[a.CGCS2000]:l,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:l,[a.WGS84_ECEF]:d},[a.GCSMARS2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:l,[a.GCSMOON2000]:null,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.GCSMOON2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:l,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.WEB_MERCATOR]:{[a.CGCS2000]:g,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:g,[a.SPHERICAL_ECEF]:I0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:l,[a.PLATE_CARREE]:H0,[a.WGS84]:g,[a.WGS84_ECEF]:W0},[a.WGS84_ECEF]:{[a.CGCS2000]:h,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:h,[a.SPHERICAL_ECEF]:j0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:q0,[a.PLATE_CARREE]:T0,[a.WGS84]:h,[a.WGS84_ECEF]:l},[a.SPHERICAL_ECEF]:{[a.CGCS2000]:T,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:T,[a.SPHERICAL_ECEF]:l,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:K0,[a.PLATE_CARREE]:d0,[a.WGS84]:T,[a.WGS84_ECEF]:B0},[a.SPHERICAL_MARS_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:a0,[a.GCSMOON2000]:null,[a.LON_LAT]:a0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:l,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.SPHERICAL_MOON_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:$,[a.LON_LAT]:$,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:l,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.UNKNOWN]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:null,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:l,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.LON_LAT]:{[a.CGCS2000]:l,[a.GCSMARS2000]:l,[a.GCSMOON2000]:l,[a.LON_LAT]:l,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:l,[a.WGS84_ECEF]:d},[a.PLATE_CARREE]:{[a.CGCS2000]:H,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:H,[a.SPHERICAL_ECEF]:h0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:p0,[a.PLATE_CARREE]:l,[a.WGS84]:H,[a.WGS84_ECEF]:U0}};function o0(e,S){return G0(e,S)?.projector}function G0(e,S){if(e==null||S==null)return null;if(M.source.spatialReference===e&&M.dest.spatialReference===S)return M;const t=X(e,M.source),n=X(S,M.dest);return t===a.UNKNOWN&&n===a.UNKNOWN?R0(e,S)?M.projector=l:M.projector=null:M.projector=L0[t][n],M}function X(e,S){return e?S.spatialReference===e?S.spatialReferenceId:(S.spatialReference=e,"metersPerUnit"in S&&(S.metersPerUnit=u0(e,1)),f0(e)?S.spatialReferenceId=a.SPHERICAL_ECEF:E0(e)?S.spatialReferenceId=a.WGS84:_0(e)?S.spatialReferenceId=a.WEB_MERCATOR:A0(e)?S.spatialReferenceId=a.PLATE_CARREE:e.wkt===P0.wkt?S.spatialReferenceId=a.WGS84_ECEF:e.wkid===O0.CGCS2000?S.spatialReferenceId=a.CGCS2000:e.wkt===M0.wkt?S.spatialReferenceId=a.SPHERICAL_MARS_PCPF:e.wkt===r0.wkt?S.spatialReferenceId=a.SPHERICAL_MOON_PCPF:N0(e)?S.spatialReferenceId=a.GCSMARS2000:s0(e)?S.spatialReferenceId=a.GCSMOON2000:S.spatialReferenceId=a.UNKNOWN):a.UNKNOWN}function l(e,S,t,n){e!==t&&(t[n++]=e[S++],t[n++]=e[S++],t[n]=e[S])}function g(e,S,t,n){t[n]=U*(e[S]/L),t[n+1]=U*(n0-2*Math.atan(Math.exp(-e[S+1]/L))),t[n+2]=e[S+2]}function I0(e,S,t,n){const u=e[S]/L,R=n0-2*Math.atan(Math.exp(-e[S+1]/L)),f=L+e[S+2],C=Math.cos(R)*f;t[n]=Math.cos(u)*C,t[n+1]=Math.sin(u)*C,t[n+2]=Math.sin(R)*f}function W0(e,S,t,n){g(e,S,t,n),d(t,n,t,n)}function F0(e,S,t,n,u){const R=.4999999*Math.PI,f=C0(p*e[S+1],-R,R),C=Math.sin(f);t[n++]=p*e[S]*u.radius,t[n++]=u.halfSemiMajorAxis*Math.log((1+C)/(1-C)),t[n]=e[S+2]}function W(e,S,t,n){F0(e,S,t,n,O)}function F(e,S,t,n){t[n]=e[S]*e0,t[n+1]=e[S+1]*e0,t[n+2]=e[S+2]}function H(e,S,t,n){t[n]=e[S]*t0,t[n+1]=e[S+1]*t0,t[n+2]=e[S+2]}function H0(e,S,t,n){g(e,S,t,n),F(t,n,t,n)}function T0(e,S,t,n){h(e,S,t,n),F(t,n,t,n)}function d0(e,S,t,n){T(e,S,t,n),F(t,n,t,n)}function h0(e,S,t,n){H(e,S,t,n),j(t,n,t,n)}function p0(e,S,t,n){H(e,S,t,n),W(t,n,t,n)}function U0(e,S,t,n){H(e,S,t,n),d(t,n,t,n)}function z(e,S,t,n,u){const R=u+e[S+2],f=p*e[S+1],C=p*e[S],E=Math.cos(f)*R;t[n]=Math.cos(C)*E,t[n+1]=Math.sin(C)*E,t[n+2]=Math.sin(f)*R}function Y(e,S,t,n){z(e,S,t,n,m.radius)}function Z(e,S,t,n){z(e,S,t,n,B.radius)}function j(e,S,t,n){z(e,S,t,n,O.radius)}function Q(e,S,t,n,u){const R=e[S],f=e[S+1],C=e[S+2],E=Math.sqrt(R*R+f*f+C*C),A=i0(C/(E===0?1:E)),_=Math.atan2(f,R);t[n++]=U*_,t[n++]=U*A,t[n]=E-u}function $(e,S,t,n){Q(e,S,t,n,m.radius)}function a0(e,S,t,n){Q(e,S,t,n,B.radius)}function T(e,S,t,n){Q(e,S,t,n,O.radius)}function K0(e,S,t,n){T(e,S,t,n),W(t,n,t,n)}function B0(e,S,t,n){T(e,S,t,n),d(t,n,t,n)}function g0(e,S,t,n,u){const R=p*e[S],f=p*e[S+1],C=e[S+2],E=Math.sin(f),A=Math.cos(f),_=u.radius/Math.sqrt(1-u.eccentricitySquared*E*E);t[n++]=(_+C)*A*Math.cos(R),t[n++]=(_+C)*A*Math.sin(R),t[n++]=(_*(1-u.eccentricitySquared)+C)*E}function d(e,S,t,n){g0(e,S,t,n,O)}function h(e,S,t,n){const u=c0,R=e[S],f=e[S+1],C=e[S+2];let E,A,_,i,c,b,q,r,N,K,k,w,y,o,G,x,D,v,I,J,V;E=Math.abs(C),A=R*R+f*f,_=Math.sqrt(A),i=A+C*C,c=Math.sqrt(i),J=Math.atan2(f,R),b=C*C/i,q=A/i,o=u.a2/c,G=u.a3-u.a4/c,q>.3?(r=E/c*(1+q*(u.a1+o+b*G)/c),I=Math.asin(r),K=r*r,N=Math.sqrt(1-K)):(N=_/c*(1-b*(u.a5-o-q*G)/c),I=Math.acos(N),K=1-N*N,r=Math.sqrt(K)),k=1-O.eccentricitySquared*K,w=O.radius/Math.sqrt(k),y=u.a6*w,o=_-w*N,G=E-y*r,D=N*o+r*G,x=N*G-r*o,v=x/(y/k+D),I+=v,V=D+x*v/2,C<0&&(I=-I),t[n++]=U*J,t[n++]=U*I,t[n]=V}function j0(e,S,t,n){h(e,S,t,n),j(t,n,t,n)}function q0(e,S,t,n){h(e,S,t,n),W(t,n,t,n)}const M={source:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},projector:l},p=l0(1),U=S0(1),n0=.5*Math.PI,L=O.radius,e0=L*Math.PI/180,t0=180/(L*Math.PI);function m0(e,S,t,n,u,R,f=Math.floor(e.length/3)){const C=o0(S,u);if(C==null)return!1;if(C===l){if(e===n&&t===R)return!0;const A=t+3*f;for(let _=t,i=R;_<A;_++,i++)n[i]=e[_];return!0}const E=t+3*f;for(let A=t,_=R;A<E;A+=3,_+=3)C(e,A,n,_);return!0}const x0=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:m0},Symbol.toStringTag,{value:"Module"}));export{G0 as F,o0 as G,L0 as L,a as N,y0 as d,F0 as h,k0 as i,m0 as o,x0 as p,w0 as t,Q as v};
