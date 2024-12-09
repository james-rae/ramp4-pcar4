import { s, b as i, e as b, I, p, R as Rt, g as p$1, m, j as p$2, x, k as c$1, n as i$1, o as h$1, y } from './main-jdFDoOPu.js';
import { c, a } from './devEnvironmentUtils-CCD0JvbY.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function g(t,e,r,o){const n=t.name;return null==n?Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===t.styleName?d(n,e,o):i(t,e,o).then((t=>h(t,n,e,r,y,o)))}function j(t,e){return e.items.find((e=>e.name===t))}function h(u,y,c$2,g,h,d){const U=null!=c$2?.portal?c$2.portal:b.getDefault(),N={portal:U,url:I(u.baseUrl),origin:"portal-item"},w=j(y,u.data);if(!w){const t=`The symbol name '${y}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:y}))}let S=p(h(w,g),N),D=w.thumbnail?.href??null;const O=w.thumbnail?.imageData;c()&&(S=a(S)??"",D=a(D));const P={portal:U,url:I(Rt(S)),origin:"portal-item"};return p$1(S,d).then((e=>{const r="cimRef"===g?m(e.data):e.data,l=p$2(r,P);if(l&&x(l)){if(D){const t=p(D,N);l.thumbnail=new c$1({url:t});}else O&&(l.thumbnail=new c$1({url:`data:image/png;base64,${O}`}));u.styleUrl?l.styleOrigin=new i$1({portal:c$2.portal,styleUrl:u.styleUrl,name:y}):u.styleName&&(l.styleOrigin=new i$1({portal:c$2.portal,styleName:u.styleName,name:y}));}return l}))}function d(t,e,r){const l=h$1.replaceAll(/\{SymbolName\}/gi,t),i=null!=e.portal?e.portal:b.getDefault();return p$1(l,r).then((t=>{const e=m(t.data);return p$2(e,{portal:i,url:I(Rt(l)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as getStyleItemFromStyle, g as resolveWebStyleSymbol };
