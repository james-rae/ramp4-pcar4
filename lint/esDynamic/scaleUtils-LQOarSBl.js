import{bo as o,bp as i,bq as u}from"./main-umVzVZ3H.js";const s=96;function c(t,n){const r=t.extent,e=t.width,a=o(r?.spatialReference);return r&&e?r.width/e*a*i*s:0}function f(t,n){return t/(o(n)*i*s)}function b(t,n,r){return d(t,n)&&p(t,r)}function d(t,n){return n===0||u(t,n)||t<n}function p(t,n){return n===0||u(t,n)||t>n}export{b as d,c as i,f as o};