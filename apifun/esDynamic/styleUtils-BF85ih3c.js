import{s as c,a2 as d,a1 as w,R as p,X as h,C as g,ee as R,aY as U}from"./main-DeRV24Di.js";const i=new Map;async function N(e,s){try{return{data:(await y(e,s)).data,baseUrl:p(e),styleUrl:e}}catch(t){return h(t),null}}function $(e,s,t){const r=s.portal!=null?s.portal:g.getDefault();let o;const a=`${r.url} - ${r.user?.username} - ${e}`,n=i.get(a);if(n)return n;const l=k(e,r,t).then(u=>(o=u,u.fetchData())).then(u=>({data:u,baseUrl:o.itemUrl??"",styleName:e}));return i.set(a,l),l}function k(e,s,t){return s.load(t).then(()=>{const r=new R({disableExtraQuery:!0,query:`owner:${m} AND type:${b} AND typekeywords:"${e}"`});return s.queryItems(r,t)}).then(({results:r})=>{let o=null;const a=e.toLowerCase();if(r&&Array.isArray(r)){for(const n of r)if(n.typeKeywords?.some(l=>l.toLowerCase()===a)&&n.type===b&&n.owner===m){o=n;break}}if(!o)throw new c("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return o.load(t)})}function I(e,s,t){return e?.styleUrl!=null?N(e.styleUrl,t):e?.styleName!=null?$(e.styleName,s,t):Promise.reject(new c("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function j(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function q(e,s){for(const t of s)switch(t){case"cim":if(e.cimRef)return{format:t,url:encodeURI(e.cimRef)};break;case"web-gltf-basisu":{const r=f(e,"gltf_basisu");if(r)return{format:t,url:r};break}case"web-gltf":{const r=f(e,"gltf");if(r)return{format:t,url:r};break}case"web":{const r=f(e,"gltf");if(r)return{format:"web-gltf",url:r};if(e.webRef)return{format:t,url:encodeURI(e.webRef)};break}}}function f(e,s){if(!U("enable-feature:force-wosr"))return e.formatInfos?.find(t=>t.type===s)?.href}function y(e,s){const t={responseType:"json",query:{f:"json"},...s};return d(w(e),t)}const m="esri_en",b="Style",A="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{A as h,I as i,j as m,y as p,q as y};
