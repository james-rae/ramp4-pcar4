import{c6 as a,c7 as e}from"./main-DnRb_GMc.js";function o(r,n=!1){return r<=a?n?new Array(r).fill(0):new Array(r):new Float64Array(r)}function y(r){return(e(r)?r.length:r.byteLength/8)<=a?Array.from(r):new Float64Array(r)}function u(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}function i(r,n){for(let t=0;t<n.length;++t)r[t]=n[t];return r}function s(r){return Array.isArray(r)?new Float64Array(r):r}export{u as a,y as e,i as o,o as t,s as y};