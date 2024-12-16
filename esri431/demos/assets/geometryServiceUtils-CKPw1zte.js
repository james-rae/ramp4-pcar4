import { d0 as s, s as s$1, e as b } from './main-jdFDoOPu.js';
import { p, n as n$1 } from './project-CWA73lcx.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function n(o=null,i){if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!o)throw new s$1("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||b.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s$1("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new p({geometries:[r],outSpatialReference:t}),m=await n$1(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s$1("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };
