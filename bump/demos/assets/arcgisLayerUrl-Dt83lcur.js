import{I as a,X as m,T as o,Z as c,a0 as S,a1 as w}from"./main-CdIhtOSF.js";const v={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},d=Object.values(v),f=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${d.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),g=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${d.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),y=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function b(r){return f.test(r)}function p(r){if(r==null)return null;const e=a(r),t=e?.path.match(f)||e?.path.match(g);if(!t)return null;const[,s,n,l,u]=t,i=n.indexOf("/");return{title:h(i!==-1?n.slice(i+1):n),serverType:v[l.toLowerCase()],sublayer:u!=null&&u!==""?parseInt(u,10):null,url:{path:s}}}function C(r){const e=a(r).path.match(y);return e?{serviceUrl:e[1],sublayerId:Number(e[2])}:null}function h(r){return(r=r.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+r.slice(1)}function L(r,e){const t=[];if(r){const s=p(r);s!=null&&s.title&&t.push(s.title)}if(e){const s=h(e);t.push(s)}if(t.length===2){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function $(r){let e=m(r,!0);return!!e&&(e=e.toLowerCase(),e.endsWith(".arcgis.com")&&(e.startsWith("services")||e.startsWith("tiles")||e.startsWith("features")))}function j(r,e){return r&&o(c(r,e))}function x(r){let{url:e}=r;if(!e)return{url:e};e=c(e,r.logger);const t=a(e),s=p(t.path);let n;if(s!=null)s.sublayer!=null&&r.layer.layerId==null&&(n=s.sublayer),e=s.url.path;else if(r.nonStandardUrlAllowed){const l=C(t.path);l!=null&&(e=l.serviceUrl,n=l.sublayerId)}return{url:o(e),layerId:n}}function T(r,e,t,s,n){S(e,s,"url",n),s.url&&r.layerId!=null&&(s.url=w(s.url,t,r.layerId.toString()))}function U(r){if(!r)return!1;const e=r.toLowerCase(),t=e.includes("/services/"),s=e.includes("/mapserver/wmsserver"),n=e.includes("/imageserver/wmsserver"),l=e.includes("/wmsserver");return t&&(s||n||l)}export{T as C,x as S,U as b,p as d,$ as g,C as h,h as m,b as p,L as w,j as y};
