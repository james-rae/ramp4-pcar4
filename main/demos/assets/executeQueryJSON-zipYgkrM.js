import{f as m}from"./utils-DrUkmw0x.js";import{c}from"./query-VKD_R4TO.js";import{d as e}from"./FeatureSet-kItFYqY4.js";import{b as p}from"./Query-5sYd3NzA.js";async function S(r,o,t){const n=await s(r,o,t);return e.fromJSON(n)}async function s(r,o,t){const n=m(r),f={...t},a=p.from(o),{data:i}=await c(n,a,a.sourceSpatialReference,f);return i}export{s as a,S as s};