import{r as x}from"./main-BL33V88t.js";const r="__begin__",l="__end__",f=new RegExp(r,"ig"),g=new RegExp(l,"ig"),o=new RegExp("^"+r,"i"),a=new RegExp(l+"$","i"),s='"',E=s+" + ",w=" + "+s;function i(n){return n.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function $(n){return n.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function t(n){const e={expression:"",type:"none"};return n.labelExpressionInfo?n.labelExpressionInfo.value?(e.expression=n.labelExpressionInfo.value,e.type="conventional"):n.labelExpressionInfo.expression&&(e.expression=n.labelExpressionInfo.expression,e.type="arcade"):n.labelExpression!=null&&(e.expression=i(n.labelExpression),e.type="conventional"),e}function b(n){const e=t(n);if(!e)return null;switch(e.type){case"conventional":return p(e.expression);case"arcade":return e.expression}return null}function m(n){const e=t(n);if(!e)return null;switch(e.type){case"conventional":return _(e.expression);case"arcade":return u(e.expression)}return null}function p(n){let e;return n?(e=x(n,c=>r+'$feature["'+c+'"]'+l),e=o.test(e)?e.replace(o,""):s+e,e=a.test(e)?e.replace(a,""):e+s,e=e.replaceAll(f,E).replaceAll(g,w)):e='""',e}const R=/^\s*\{([^}]+)\}\s*$/i;function _(n){return n?.match(R)?.[1].trim()||null}const y=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,A=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,v=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function u(n){if(!n)return null;let e=y.exec(n)||A.exec(n);return e?e[1]||e[3]:(e=v.exec(n),e?e[2]:null)}export{p as E,u as _,b as f,m as g,i as p,$ as u,t as x};
