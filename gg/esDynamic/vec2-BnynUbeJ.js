import{o as G,e as w}from"./common-CYWrYyJl.js";function d(t,r){return t[0]=r[0],t[1]=r[1],t}function m(t,r,a){return t[0]=r,t[1]=a,t}function b(t,r,a){return t[0]=r[0]+a[0],t[1]=r[1]+a[1],t}function i(t,r,a){return t[0]=r[0]-a[0],t[1]=r[1]-a[1],t}function q(t,r,a){return t[0]=r[0]*a[0],t[1]=r[1]*a[1],t}function p(t,r,a){return t[0]=r[0]/a[0],t[1]=r[1]/a[1],t}function C(t,r){return t[0]=Math.ceil(r[0]),t[1]=Math.ceil(r[1]),t}function F(t,r){return t[0]=Math.floor(r[0]),t[1]=Math.floor(r[1]),t}function x(t,r,a){return t[0]=Math.min(r[0],a[0]),t[1]=Math.min(r[1],a[1]),t}function g(t,r,a){return t[0]=Math.max(r[0],a[0]),t[1]=Math.max(r[1],a[1]),t}function H(t,r){return t[0]=Math.round(r[0]),t[1]=Math.round(r[1]),t}function v(t,r,a){return t[0]=r[0]*a,t[1]=r[1]*a,t}function y(t,r,a,e){return t[0]=r[0]+a[0]*e,t[1]=r[1]+a[1]*e,t}function f(t,r){const a=r[0]-t[0],e=r[1]-t[1];return Math.sqrt(a*a+e*e)}function M(t,r){const a=r[0]-t[0],e=r[1]-t[1];return a*a+e*e}function h(t){const r=t[0],a=t[1];return Math.sqrt(r*r+a*a)}function l(t){const r=t[0],a=t[1];return r*r+a*a}function _(t,r){return t[0]=-r[0],t[1]=-r[1],t}function J(t,r){return t[0]=1/r[0],t[1]=1/r[1],t}function j(t,r){const a=r[0],e=r[1];let n=a*a+e*e;return n>0&&(n=1/Math.sqrt(n),t[0]=r[0]*n,t[1]=r[1]*n),t}function P(t,r){return t[0]*r[0]+t[1]*r[1]}function S(t,r,a){const e=r[0]*a[1]-r[1]*a[0];return t[0]=t[1]=0,t[2]=e,t}function A(t,r,a,e){const n=r[0],u=r[1];return t[0]=n+e*(a[0]-n),t[1]=u+e*(a[1]-u),t}function K(t,r=1){const a=2*G()*Math.PI;return t[0]=Math.cos(a)*r,t[1]=Math.sin(a)*r,t}function I(t,r,a){const e=r[0],n=r[1];return t[0]=a[0]*e+a[2]*n,t[1]=a[1]*e+a[3]*n,t}function L(t,r,a){const e=r[0],n=r[1];return t[0]=a[0]*e+a[2]*n+a[4],t[1]=a[1]*e+a[3]*n+a[5],t}function N(t,r,a){const e=r[0],n=r[1];return t[0]=a[0]*e+a[3]*n+a[6],t[1]=a[1]*e+a[4]*n+a[7],t}function Q(t,r,a){const e=r[0],n=r[1];return t[0]=a[0]*e+a[4]*n+a[12],t[1]=a[1]*e+a[5]*n+a[13],t}function z(t,r,a,e){const n=r[0]-a[0],u=r[1]-a[1],s=Math.sin(e),c=Math.cos(e);return t[0]=n*c-u*s+a[0],t[1]=n*s+u*c+a[1],t}function D(t,r){const a=t[0],e=t[1],n=r[0],u=r[1];let s=a*a+e*e;s>0&&(s=1/Math.sqrt(s));let c=n*n+u*u;c>0&&(c=1/Math.sqrt(c));const o=(a*n+e*u)*s*c;return o>1?0:o<-1?Math.PI:Math.acos(o)}function R(t){return"vec2("+t[0]+", "+t[1]+")"}function E(t,r){return t[0]===r[0]&&t[1]===r[1]}function O(t,r){const a=t[0],e=t[1],n=r[0],u=r[1],s=w();return Math.abs(a-n)<=s*Math.max(1,Math.abs(a),Math.abs(n))&&Math.abs(e-u)<=s*Math.max(1,Math.abs(e),Math.abs(u))}function T(t,r,a,e,n){let u=r[0]-a[0],s=r[1]-a[1];const c=(e[0]*u+e[1]*s)*(n-1);return u=e[0]*c,s=e[1]*c,t[0]=r[0]+u,t[1]=r[1]+s,t}const U=h,k=i,V=q,W=p,B=f,X=M,$=l;Object.freeze(Object.defineProperty({__proto__:null,add:b,angle:D,ceil:C,copy:d,cross:S,dist:B,distance:f,div:W,divide:p,dot:P,equals:O,exactEquals:E,floor:F,inverse:J,len:U,length:h,lerp:A,max:g,min:x,mul:V,multiply:q,negate:_,normalize:j,projectAndScale:T,random:K,rotate:z,round:H,scale:v,scaleAndAdd:y,set:m,sqrDist:X,sqrLen:$,squaredDistance:M,squaredLength:l,str:R,sub:k,subtract:i,transformMat2:I,transformMat2d:L,transformMat3:N,transformMat4:Q},Symbol.toStringTag,{value:"Module"}));export{k as B,E,B as G,z as I,D as L,g as M,I as P,L as S,O as T,A as _,M as b,y as d,i as e,x as f,P as j,T as k,v as l,f as m,m as o,l as p,h as q,d as r,b as u,j as v,_ as x,S as y};
