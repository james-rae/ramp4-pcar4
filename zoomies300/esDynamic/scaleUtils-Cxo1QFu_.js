import{bq as o,br as i,bs as s}from"./main-DqYc2eZZ.js";const u=96;function c(r,t){const n=r.extent,e=r.width,a=o(n?.spatialReference);return n&&e?n.width/e*a*i*u:0}function f(r,t){return r/(o(t)*i*u)}function b(r,t,n){return d(r,t)&&m(r,n)}function d(r,t){return t===0||s(r,t)||r<t}function m(r,t){return t===0||s(r,t)||r>t}export{b as d,c as i,f as o};
