import"./main-DZMdXZ8-.js";import{p as f,o as u}from"./TimeExtent-Cf-Ev8sT.js";import"./MapView-BOxwLRAa.js";function l(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?u(e,-e.getTimezoneOffset(),"minutes"):e,end:t!=null?u(t,-t.getTimezoneOffset(),"minutes"):t})}function a(n){if(!n)return n;const{start:e,end:t}=n;return new f({start:e!=null?u(e,e.getTimezoneOffset(),"minutes"):e,end:t!=null?u(t,t.getTimezoneOffset(),"minutes"):t})}function c(n,e,t){if(n?.timeInfo==null)return null;const{datesInUnknownTimezone:o=!1,timeOffset:r,useViewTime:m}=n;let s=n.timeExtent;o&&(s=a(s));let i=m?e&&s?e.intersection(s):e||s:s;return!i||i.isEmpty||i.isAllTime?i:(r&&(i=i.offset(-r.value,r.unit)),o&&(i=l(i)),i.equals(t)?t:i)}export{c as i};
