import"./main-BnINupoD.js";import{p as f,o as u}from"./TimeExtent-Drrkeg7H.js";import"./MapView-CMsxA34N.js";function l(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?u(e,-e.getTimezoneOffset(),"minutes"):e,end:t!=null?u(t,-t.getTimezoneOffset(),"minutes"):t})}function a(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?u(e,e.getTimezoneOffset(),"minutes"):e,end:t!=null?u(t,t.getTimezoneOffset(),"minutes"):t})}function d(n,e,t){if(n?.timeInfo==null)return null;const{datesInUnknownTimezone:o=!1,timeOffset:s,useViewTime:m}=n;let r=n.timeExtent;o&&(r=a(r));let i=m?e&&r?e.intersection(r):e||r:r;return!i||i.isEmpty||i.isAllTime?i:(s&&(i=i.offset(-s.value,s.unit)),o&&(i=l(i)),i.equals(t)?t:i)}export{d as i};
