import{aC as h,bg as w,f as q,bh as A}from"./main-CvsyIoCL.js";import"./vec42-D8CJyqHG.js";import"./vec4f64-hf2nxvhQ.js";function x(n){return"r"in n&&"g"in n&&"b"in n}function k(n){return"h"in n&&"s"in n&&"v"in n}function y(n){return"l"in n&&"a"in n&&"b"in n}function z(n){return"l"in n&&"c"in n&&"h"in n}function B(n){return"x"in n&&"y"in n&&"z"in n}const E=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],I=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function v(n,r){const o=[];let e,u;if(n[0].length!==r.length)throw new Error("dimensions do not match");const t=n.length,a=n[0].length;let c=0;for(e=0;e<t;e++){for(c=0,u=0;u<a;u++)c+=n[e][u]*r[u];o.push(c)}return o}function H(n){const r=[n.r/255,n.g/255,n.b/255].map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4),o=v(E,r);return{x:100*o[0],y:100*o[1],z:100*o[2]}}function b(n){const r=v(I,[n.x/100,n.y/100,n.z/100]).map(o=>{const e=o<=.0031308?12.92*o:1.055*o**.4166666666666667-.055;return Math.min(1,Math.max(e,0))});return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function C(n){const r=[n.x/95.047,n.y/100,n.z/108.883].map(o=>o>.008856451679035631?o**.3333333333333333:7.787037037037035*o+.13793103448275862);return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function L(n){const r=n.l,o=[(r+16)/116+n.a/500,(r+16)/116,(r+16)/116-n.b/200].map(e=>e>6/29?e**3:3*(6/29)**2*(e-4/29));return{x:95.047*o[0],y:100*o[1],z:108.883*o[2]}}function O(n){const r=n.l,o=n.a,e=n.b,u=Math.sqrt(o*o+e*e);let t=Math.atan2(e,o);return t=t>0?t:t+2*Math.PI,{l:r,c:u,h:t}}function P(n){const r=n.l,o=n.c,e=n.h;return{l:r,a:o*Math.cos(e),b:o*Math.sin(e)}}function R(n){return C(H(n))}function j(n){return b(L(n))}function D(n){return O(C(H(n)))}function F(n){return b(L(P(n)))}function G(n){const r=n.r,o=n.g,e=n.b,u=Math.max(r,o,e),t=u-Math.min(r,o,e);let a=u,c=t===0?0:u===r?(o-e)/t%6:u===o?(e-r)/t+2:(r-o)/t+4,i=t===0?0:t/a;return c<0&&(c+=6),c*=60,i*=100,a*=100/255,{h:c,s:i,v:a}}function Q(n){const r=(n.h+360)%360/60,o=n.s/100,e=n.v/100*255,u=e*o,t=u*(1-Math.abs(r%2-1));let a;switch(Math.floor(r)){case 0:a={r:u,g:t,b:0};break;case 1:a={r:t,g:u,b:0};break;case 2:a={r:0,g:u,b:t};break;case 3:a={r:0,g:t,b:u};break;case 4:a={r:t,g:0,b:u};break;case 5:case 6:a={r:u,g:0,b:t};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+e-u),a.g=Math.round(a.g+e-u),a.b=Math.round(a.b+e-u),a}function l(n){return x(n)?n:z(n)?F(n):y(n)?j(n):B(n)?b(n):k(n)?Q(n):n}function S(n){return k(n)?n:G(l(n))}function T(n){return y(n)?n:R(l(n))}function U(n){return z(n)?n:D(l(n))}function V(n,r){const{r:o,g:e,b:u}=n;return .2126*o+.7152*e+.0722*u}var M;function W(n,r=M.High){return V(n)>r?new h([0,0,0,n.a]):new h([255,255,255,n.a])}function X(n,r,o={}){if(n.length===0||r<=0)return[];if((n=n.map(e=>typeof e=="string"?new h(e):e)).length===1||r===1){const e=[],u=n[0];for(let t=0;t<r;t++)e.push(u.clone());return e}if(o.shuffle&&(n=w(q(n),o.seed)),n.length>=r){const e=[],u=(n.length-1)/(r-1);for(let t=0;t<r;t++){const a=Math.round(t*u);e.push(n[a].clone())}return e}return Y(n,r,o)}function Y(n,r,o={}){const e=[],u=n.length-1,t=Math.ceil((r-n.length)/u);n:for(let a=0;a<u;a++){const c=n[a],i=n[a+1];for(let s=1;s<=t;s++){const f=s/(t+1);if(e.push($(c,i,f,o)),e.length+n.length===r)break n}}return[...n.map(a=>a.clone()),...w(e,o.seed??1)]}(function(n){n[n.Low=160]="Low",n[n.High=225]="High"})(M||(M={}));const m=(n,r)=>{const o=Math.floor(10*r())-5;return Math.min(255,Math.max(0,n+o))};function $(n,r,o,e={}){const u=n.r,t=n.g,a=n.b,c=r.r,i=r.g,s=r.b,f=Math.round(u+(c-u)*o),d=Math.round(t+(i-t)*o),p=Math.round(a+(s-a)*o);if(!e.offset)return new h([f,d,p]);const g=A(e.seed);return new h([m(f,g),m(d,g),m(p,g)])}export{l as A,S as B,T as C,U as H,X as O,W as R,x as c};