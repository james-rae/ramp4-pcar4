const d=[["binary","application/octet-stream","bin",""]];function y(n,r){return l(r.name,n?.supportedFormats??[])!=null}function C(n,r){if(!n)return!1;const t=m(r,n.supportedFormats??[]);return t!=null&&n.editFormats.includes(t)}function c(n,r){return s(b(n,r))}function f(n,r){return s(l(n,r))}function L(n,r){return p(w(n,r))}function m(n,r){return f(n.name,r)??c(n.type,r)}function u(n,r,t){return c(n,t)??f(r,t)}function a({supportedFormats:n}){return u("model/gltf-binary","glb",n)}function j(n){const r=a(n);return r!=null&&n.editFormats.includes(r)}function F({supportedFormats:n}){return u("model/gltf+json","gltf",n)}function h(n){if(!n)return null;const r=a(n),t=F(n);let o=null;for(const e of n.queryFormats){if(e===r)return e;e===t&&(o=e)}return o}function R({supportedFormats:n}){return u("application/esri3do-SR_world","wld",n)}function S({supportedFormats:n}){return u("application/esri3do-SR_prj","prj",n)}function i(n){return[...d,...n]}function w(n,r){return i(r).find(t=>s(t)===n)}function b(n,r){const t=n.toLowerCase();return i(r).find(o=>p(o)===t)}function l(n,r){const t=n.toLowerCase();return i(r).find(o=>g(o).some(e=>t.endsWith(e)))}function s(n){return n?.[0]}function p(n){return n?.[1].toLowerCase()}function g(n){return n?.[2].split(",").map(r=>r.toLowerCase())??[]}function _(n){return n.tables?.find(r=>r.role==="assetMaps")}export{S as F,a,m as c,h as d,u as f,_ as h,R as m,y as n,j as p,C as r,L as s,c as u};
