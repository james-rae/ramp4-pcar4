import{bj as i,bk as o,bl as e}from"./main-DTtQVgOw.js";const I=96;function a(r,n){const t=r.extent,u=r.width,c=i(t?.spatialReference);return t&&u?t.width/u*c*o*I:0}function f(r,n){return r/(i(n)*o*I)}function s(r,n,t){return N(r,n)&&b(r,t)}function N(r,n){return n===0||e(r,n)||r<n}function b(r,n){return n===0||e(r,n)||r>n}function m(r,n){return e(r,n)?0:(r||Number.POSITIVE_INFINITY)>(n||Number.POSITIVE_INFINITY)?1:-1}export{s as d,a as i,m as p,f as u};
