import { b2 as g$1, c4 as T, c5 as G, c6 as p$1, c7 as u, c8 as I, c9 as p$2 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=new g$1(T),l=new g$1(G),f=new g$1(p$1),w=new g$1(u);function a(e){const t=c.get(e);if(t)return t;let s=p;if(e)if(e===l)s=l;else if(e===f)s=f;else {const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)I(t)||I(n)?s=l:(p$2(t)||p$2(n))&&(s=f);else {const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===m&&(s=f);}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),m=f.wkt.toUpperCase();

export { a, w };
