import{by as r,bI as c,bJ as h,bK as x,aw as m}from"./main-CUxU9bWS.js";import"./preload-helper-ExcqyqRp.js";const y={convertToGEGeometry:p,exportPoint:g,exportPolygon:u,exportPolyline:l,exportMultipoint:f,exportExtent:M};function p(t,e){if(e==null)return null;let a="cache"in e?e.cache._geVersion:void 0;return a==null&&(a=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=a)),a}function g(t,e,a){const o=t.hasZ(e),n=t.hasM(e),s=new r({x:t.getPointX(e),y:t.getPointY(e),spatialReference:a});return o&&(s.z=t.getPointZ(e)),n&&(s.m=t.getPointM(e)),s.cache._geVersion=e,s}function u(t,e,a){const o=new c({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function l(t,e,a){const o=new h({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:a});return o.cache._geVersion=e,o}function f(t,e,a){const o=new x({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:a});return o.cache._geVersion=e,o}function M(t,e,a){const o=t.hasZ(e),n=t.hasM(e),s=new m({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:a});if(o){const i=t.getZExtent(e);s.zmin=i.vmin,s.zmax=i.vmax}if(n){const i=t.getMExtent(e);s.mmin=i.vmin,s.mmax=i.vmax}return s.cache._geVersion=e,s}export{y as hydratedAdapter};
