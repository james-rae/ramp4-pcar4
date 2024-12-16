import { fQ as p, gP as o } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function T(t){if(!t)return t;const{start:e,end:n}=t;return new p({start:null!=e?o(e,-e.getTimezoneOffset(),"minutes"):e,end:null!=n?o(n,-n.getTimezoneOffset(),"minutes"):n})}function w(t){if(!t)return t;const{start:e,end:n}=t;return new p({start:null!=e?o(e,e.getTimezoneOffset(),"minutes"):e,end:null!=n?o(n,n.getTimezoneOffset(),"minutes"):n})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i,n,s){if(null==i?.timeInfo)return null;const{datesInUnknownTimezone:l=!1,timeOffset:o,useViewTime:m}=i;let u=i.timeExtent;l&&(u=w(u));let r=m?n&&u?n.intersection(u):n||u:u;return !r||r.isEmpty||r.isAllTime?r:(o&&(r=r.offset(-o.value,o.unit)),l&&(r=T(r)),r.equals(s)?s:r)}

export { i };
