import{f as i}from"./utils-DgxkW90G.js";import{c}from"./query-NbjOIaXG.js";import{d as e}from"./FeatureSet-lQsmd6by.js";import{b as p}from"./Query-Cch4zrNj.js";async function u(a,r,o){const t=await s(a,r,o);return e.fromJSON(t)}async function s(a,r,o){const t=i(a),f={...o},n=p.from(r),{data:m}=await c(t,n,n.sourceSpatialReference,f);return m}export{s as a,u as s};
