import{ag as Z,bH as y,bI as c,bJ as u,bK as i,j as r,bL as h,bM as g,al as p,bN as l}from"./main-yxqK2SuK.js";import"./Basemap-DMCgqq44.js";import"./mat4f32-CiZjBg9k.js";import"./mat4-CA6EAWi-.js";function b(t){return Z(t)||y(t)||c(t)}function N(t,d){const{format:e,timeZoneOptions:n,fieldType:a}=d??{};let s,m;if(n&&({timeZone:s,timeZoneName:m}=u(n.layerTimeZone,n.datesInUnknownTimezone,n.viewTimeZone,i(e||"short-date-short-time"),a)),typeof t=="string"&&isNaN(Date.parse(a==="time-only"?`1970-01-01T${t}Z`:t)))return t;switch(a){case"date-only":{const o=i(e||"short-date");return typeof t=="string"?l(t,{...o}):r(t,{...o,timeZone:p})}case"time-only":{const o=i(e||"short-time");return typeof t=="string"?g(t,o):r(t,{...o,timeZone:p})}case"timestamp-offset":{if(!s&&typeof t=="string"&&new Date(t).toISOString()!==t)return t;const o=e||n?i(e||"short-date-short-time"):void 0,f=o?{...o,timeZone:s,timeZoneName:m}:void 0;return typeof t=="string"?h(t,f):r(t,f)}default:{const o=e||n?i(e||"short-date-short-time"):void 0;return r(typeof t=="string"?new Date(t):t,o?{...o,timeZone:s,timeZoneName:m}:void 0)}}}export{b as $,N as j};
