import{r as l,t as d,E as o,n as p}from"./main-BnINupoD.js";import{l as u}from"./intl-DLGcJ4sm.js";const m=()=>p.getLogger("esri.intl.substitute");function O(t,e,i={}){const{format:n={}}=i;return l(t,r=>b(r,e,n))}function b(t,e,i){let n,r;const a=t.indexOf(":");if(a===-1?n=t.trim():(n=t.slice(0,a).trim(),r=t.slice(a+1).trim()),!n)return"";const s=d(n,e);if(s==null)return"";const f=(r?i?.[r]:null)??i?.[n];return f?g(s,f):r?w(s,r):c(s)}function g(t,e){switch(e.type){case"date":return o(t,e.intlOptions);case"number":return u(t,e.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(t)}}function w(t,e){switch(e.toLowerCase()){case"dateformat":return o(t);case"numberformat":return u(t);default:return m().warn(`inline format is unsupported since 4.12: ${e}`),/^(dateformat|datestring)/i.test(e)?o(t):/^numberformat/i.test(e)?u(t):c(t)}}function c(t){switch(typeof t){case"string":return t;case"number":return u(t);case"boolean":return""+t;default:return t instanceof Date?o(t):""}}export{O as s};
