import"./main-C45WTWFO.js";import{p as f,o as r}from"./TimeExtent-DEVmKEPd.js";import"./MapView-DHRG6XQy.js";function l(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?r(e,-e.getTimezoneOffset(),"minutes"):e,end:t!=null?r(t,-t.getTimezoneOffset(),"minutes"):t})}function T(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?r(e,e.getTimezoneOffset(),"minutes"):e,end:t!=null?r(t,t.getTimezoneOffset(),"minutes"):t})}function d(n,e,t){if(n?.timeInfo==null)return null;const{datesInUnknownTimezone:s=!1,timeOffset:o,useViewTime:m}=n;let u=n.timeExtent;s&&(u=T(u));let i=m?e&&u?e.intersection(u):e||u:u;return!i||i.isEmpty||i.isAllTime?i:(o&&(i=i.offset(-o.value,o.unit)),s&&(i=l(i)),i.equals(t)?t:i)}export{d as i};
