import { aA as w$1, cL as z } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const o=t[r].size;"number"==typeof o&&(e+=o,n++);}return e/n}function n(t,n){return "number"==typeof t?t:t?.stops?.length?e(t.stops):n}function r$1(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:o}=e;return (n(r,t)+n(o,t))/2}));let o=0;const s=r.length;if(0===s)return t;for(let n=0;n<s;n++)o+=r[n];const f=Math.floor(o/s);return Math.max(f,t)}function o(e){const n=e?.renderer,o=e?.pointerType,s="touch"===o?9:6;if(!n)return s;const f="visualVariables"in n?r$1(s,n.visualVariables):s;if("simple"===n.type)return t(f,n.symbol);if("unique-value"===n.type){let e=f;return n.uniqueValueInfos?.forEach((n=>{e=t(e,n.symbol);})),e}if("class-breaks"===n.type){let e=f;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol);})),e}return "dot-density"===n.type||n.type,f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(t,r,i,a=new w$1){let o=0;if("2d"===i.type)o=r*(i.resolution??0);else if("3d"===i.type){const n=i.overlayPixelSizeInMapUnits(t),a=i.basemapSpatialReference;o=null==a||a.equals(i.spatialReference)?r*n:z(a)/z(i.spatialReference);}const s=t.x-o,l=t.y-o,m=t.x+o,p=t.y+o,{spatialReference:c}=i;return a.xmin=Math.min(s,m),a.ymin=Math.min(l,p),a.xmax=Math.max(s,m),a.ymax=Math.max(l,p),a.spatialReference=c,a}function i(e,n,i){const o$1=i.toMap(e);if(null==o$1)return !1;return r(o$1,o(),i,a).intersects(n)}const a=new w$1;

export { i, o, r };
