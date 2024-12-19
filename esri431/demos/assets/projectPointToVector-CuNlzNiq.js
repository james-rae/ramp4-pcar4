import { c1 as J, c2 as n, c3 as H, ap as n$1 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(e,o,c,i){if(J(e.spatialReference,c)){f[0]=e.x,f[1]=e.y;const r=e.z;return f[2]=r??i??0,n(f,e.spatialReference,0,o,c,0)}const s=H(e,c);return !!s&&(o[0]=s?.x,o[1]=s?.y,o[2]=s?.z??i??0,!0)}const f=n$1();

export { c };
