import{s as f,U as m}from"./main-DyJf3FFo.js";import{f as p,i as u,s as c}from"./utils--UsOW0Pk.js";async function h(i,s,o,r){if(!s)throw new f("post:missing-guid","guid for version is missing");const t=p(i),a=o.toJSON(),e=u(t.query,{query:c({...a,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const n=`${t.path}/versions/${s}/deleteForwardEdits`,{data:d}=await m(n,e);return d}export{h as deleteForwardEdits};
