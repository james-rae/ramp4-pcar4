import{r as l,t as d,E as o,n as p}from"./main-DTtQVgOw.js";import{l as a}from"./intl-DfZFz_rd.js";const m=()=>p.getLogger("esri.intl.substitute");function b(r,t,s={}){const{format:n={}}=s;return l(r,e=>g(e,t,n))}function g(r,t,s){let n,e;const u=r.indexOf(":");if(u===-1?n=r.trim():(n=r.slice(0,u).trim(),e=r.slice(u+1).trim()),!n)return"";const i=d(n,t);if(i==null)return"";const f=(e?s?.[e]:null)??s?.[n];return f?w(i,f):e?y(i,e):c(i)}function w(r,t){switch(t.type){case"date":return o(r,t.intlOptions);case"number":return a(r,t.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(r)}}function y(r,t){switch(t.toLowerCase()){case"dateformat":return o(r);case"numberformat":return a(r);default:return m().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?o(r):/^numberformat/i.test(t)?a(r):c(r)}}function c(r){switch(typeof r){case"string":return r;case"number":return a(r);case"boolean":return""+r;default:return r instanceof Date?o(r):""}}export{b as s};
