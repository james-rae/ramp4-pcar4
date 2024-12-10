import { b2 as g$1 } from './main-jdFDoOPu.js';
import { c } from './projectPointToVector-CuNlzNiq.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,n,t,a){return {x:e,y:n,z:t,hasZ:null!=t,hasM:!1,spatialReference:a,type:"point"}}function n$1(e,n,t,a,l){e.x=n,e.y=t,e.z=a,e.hasZ=null!=a,e.spatialReference=l;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(r,t,e,n,i){return !(null==t||null==n||r.length<2)&&(a.x=r[0],a.y=r[1],a.z=r[2],a.spatialReference=t,c(a,e,n,i))}const a=e(0,0,0,g$1.WGS84);

export { n as a, e, n$1 as n };
