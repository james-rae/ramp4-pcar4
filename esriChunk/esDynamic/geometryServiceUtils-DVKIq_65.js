import{H as a,s as i,b as g}from"./main-CXlQVgQI.js";import{p as u,n as m}from"./project-C_yr_Zzs.js";async function l(e=null,o){if(a.geometryServiceUrl)return a.geometryServiceUrl;if(!e)throw new i("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||g.getDefault():e,await r.load({signal:o});const t=r.helperServices?.geometry?.url;if(!t)throw new i("internal:geometry-service-url-not-configured");return t}async function f(e,o,r=null,t){const s=await l(r,t),c=new u({geometries:[e],outSpatialReference:o}),n=await m(s,c,{signal:t});if(n&&Array.isArray(n)&&n.length===1)return n[0];throw new i("internal:geometry-service-projection-failed")}export{l as getGeometryServiceURL,f as projectGeometry};