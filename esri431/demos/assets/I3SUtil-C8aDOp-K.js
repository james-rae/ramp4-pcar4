import { iY as r, b8 as u$1, U, kT as c, kU as a } from './main-jdFDoOPu.js';
import './mat4f64-Cw8nJbLB.js';
import './projectVectorToVector-D7Op_XnY.js';
import './sphere-CvWAdV_f.js';
import { I as I$1 } from './I3SBinaryReader-KEtigKtt.js';
import './floatRGBA-DHjcfk0_.js';
import './NormalAttribute.glsl-DxbPQHnV.js';
import './interfaces-Cp1cox0n.js';
import './BindType-DC_OuQGA.js';
import './VertexAttribute-BxkhPj4z.js';
import { I } from './orientedBoundingBox-BLsytmCg.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A;!function(A){A[A.TRANSPARENT=0]="TRANSPARENT",A[A.OPAQUE=1]="OPAQUE";}(A||(A={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var x$1;!function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT";}(x$1||(x$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p,x;!function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT";}(p||(p={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE";}(x||(x={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function g(e){return {...m,...e,type:p.Solid}}const m={color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1};({color:r(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
u$1();var q;async function V(t,r,o,n,i,s,a,l){const c=[];for(const e of r)if(e&&i.includes(e.name)){const r=`${t}/nodes/${o}/attributes/${e.key}/0`;c.push({url:r,storageInfo:e});}const u=await Promise.allSettled(c.map((t=>U(t.url,{responseType:"array-buffer",query:{...a,token:s},signal:l?.signal}).then((e=>I$1(t.storageInfo,e.data)))))),f=[];for(const e of n){const t={};for(let r=0;r<u.length;r++){const o=u[r];if("fulfilled"===o.status){const n=o.value;t[c[r].storageInfo.name]=Q(n,e);}}f.push(t);}return f}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE";}(q||(q={}));const $=-32768,z=-(2**31);function Q(e,t){if(!e)return null;const r=e[t];if(c(e))return r===$?null:r;if(a(e))return r===z?null:r;return r!=r?null:r}g({color:[0,0,0,0],opacity:0});u$1();u$1();new I;({data:new Array(72),size:3,exclusive:!0,stride:3});

export { V };
