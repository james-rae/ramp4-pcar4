import{e as W}from"./mat3f64-Dh9_zhFu.js";import{e as y}from"./quatf64-C16JxGFv.js";import{aA as Z,cp as I}from"./main-DMFDvFfW.js";import{e as b,o as $}from"./common-CYWrYyJl.js";import{P as k,_ as d,Y as w,A as B}from"./vec32-CMJR1yEU.js";import{a as C,s as D,o as F,m as G,j as H,_ as J,q as K,p as Q,y as U,E as V,L as tt}from"./vec42-D8CJyqHG.js";function nt(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function A(t,n,e){e*=.5;const s=Math.sin(e);return t[0]=s*n[0],t[1]=s*n[1],t[2]=s*n[2],t[3]=Math.cos(e),t}function j(t,n){const e=2*Math.acos(n[3]),s=Math.sin(e/2);return s>b()?(t[0]=n[0]/s,t[1]=n[1]/s,t[2]=n[2]/s):(t[0]=1,t[1]=0,t[2]=0),e}function _(t,n,e){const s=n[0],r=n[1],c=n[2],i=n[3],u=e[0],h=e[1],M=e[2],a=e[3];return t[0]=s*a+i*u+r*M-c*h,t[1]=r*a+i*h+c*u-s*M,t[2]=c*a+i*M+s*h-r*u,t[3]=i*a-s*u-r*h-c*M,t}function st(t,n,e){e*=.5;const s=n[0],r=n[1],c=n[2],i=n[3],u=Math.sin(e),h=Math.cos(e);return t[0]=s*h+i*u,t[1]=r*h+c*u,t[2]=c*h-r*u,t[3]=i*h-s*u,t}function rt(t,n,e){e*=.5;const s=n[0],r=n[1],c=n[2],i=n[3],u=Math.sin(e),h=Math.cos(e);return t[0]=s*h-c*u,t[1]=r*h+i*u,t[2]=c*h+s*u,t[3]=i*h-r*u,t}function et(t,n,e){e*=.5;const s=n[0],r=n[1],c=n[2],i=n[3],u=Math.sin(e),h=Math.cos(e);return t[0]=s*h+r*u,t[1]=r*h-s*u,t[2]=c*h+i*u,t[3]=i*h-c*u,t}function ct(t,n){const e=n[0],s=n[1],r=n[2];return t[0]=e,t[1]=s,t[2]=r,t[3]=Math.sqrt(Math.abs(1-e*e-s*s-r*r)),t}function P(t,n,e,s){const r=n[0],c=n[1],i=n[2],u=n[3];let h,M,a,l,o,m=e[0],p=e[1],q=e[2],g=e[3];return M=r*m+c*p+i*q+u*g,M<0&&(M=-M,m=-m,p=-p,q=-q,g=-g),1-M>b()?(h=Math.acos(M),a=Math.sin(h),l=Math.sin((1-s)*h)/a,o=Math.sin(s*h)/a):(l=1-s,o=s),t[0]=l*r+o*m,t[1]=l*c+o*p,t[2]=l*i+o*q,t[3]=l*u+o*g,t}function it(t){const n=$,e=n(),s=n(),r=n(),c=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=c*Math.sin(2*Math.PI*s),t[1]=c*Math.cos(2*Math.PI*s),t[2]=i*Math.sin(2*Math.PI*r),t[3]=i*Math.cos(2*Math.PI*r),t}function L(t,n){const e=n[0],s=n[1],r=n[2],c=n[3],i=e*e+s*s+r*r+c*c,u=i?1/i:0;return t[0]=-e*u,t[1]=-s*u,t[2]=-r*u,t[3]=c*u,t}function v(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function E(t,n){const e=n[0]+n[4]+n[8];let s;if(e>0)s=Math.sqrt(e+1),t[3]=.5*s,s=.5/s,t[0]=(n[5]-n[7])*s,t[1]=(n[6]-n[2])*s,t[2]=(n[1]-n[3])*s;else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const c=(r+1)%3,i=(r+2)%3;s=Math.sqrt(n[3*r+r]-n[3*c+c]-n[3*i+i]+1),t[r]=.5*s,s=.5/s,t[3]=(n[3*c+i]-n[3*i+c])*s,t[c]=(n[3*c+r]+n[3*r+c])*s,t[i]=(n[3*i+r]+n[3*r+i])*s}return t}function O(t,n,e,s){const r=.5*Math.PI/180;n*=r,e*=r,s*=r;const c=Math.sin(n),i=Math.cos(n),u=Math.sin(e),h=Math.cos(e),M=Math.sin(s),a=Math.cos(s);return t[0]=c*h*a-i*u*M,t[1]=i*u*a+c*h*M,t[2]=i*h*M-c*u*a,t[3]=i*h*a+c*u*M,t}function ut(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const ht=C,T=D,Mt=F,at=_,ft=G,lt=H,ot=J,z=K,mt=z,S=Q,pt=S,x=U,X=V,qt=tt;function Y(t,n,e){const s=k(n,e);return s<-.999999?(d(f,gt,n),w(f)<1e-6&&d(f,Pt,n),B(f,f),A(t,f,Math.PI),t):s>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(d(f,n,e),t[0]=f[0],t[1]=f[1],t[2]=f[2],t[3]=1+s,x(t,t))}const f=Z(),gt=I(1,0,0),Pt=I(0,1,0);function dt(t,n,e,s,r,c){return P(N,n,r,c),P(R,e,s,c),P(t,N,R,2*c*(1-c)),t}const N=y(),R=y();function At(t,n,e,s){const r=_t;return r[0]=e[0],r[3]=e[1],r[6]=e[2],r[1]=s[0],r[4]=s[1],r[7]=s[2],r[2]=-n[0],r[5]=-n[1],r[8]=-n[2],x(t,E(t,r))}const _t=W();Object.freeze(Object.defineProperty({__proto__:null,add:Mt,calculateW:ct,conjugate:v,copy:ht,dot:lt,equals:qt,exactEquals:X,fromEuler:O,fromMat3:E,getAxisAngle:j,identity:nt,invert:L,len:mt,length:z,lerp:ot,mul:at,multiply:_,normalize:x,random:it,rotateX:st,rotateY:rt,rotateZ:et,rotationTo:Y,scale:ft,set:T,setAxes:At,setAxisAngle:A,slerp:P,sqlerp:dt,sqrLen:pt,squaredLength:S,str:ut},Symbol.toStringTag,{value:"Module"}));export{L,X as N,v as O,Y as R,O as T,T as X,A as b,j as v,_ as x};