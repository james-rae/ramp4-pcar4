import{d4 as p,d5 as f,U as u}from"./main-DFutu5rJ.js";import{t as i}from"./query-CkurbQ2v.js";import{a as l}from"./AttachmentInfo--YtmRi0N.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function I(s,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:n,attachmentInfos:c}=a;for(const r of c){const{id:h}=r,d=p(f(`${s.path}/${o}/attachments/${h}`)),m=l.fromJSON(r);m.set({url:d,parentObjectId:o,parentGlobalId:n}),e[o]?e[o].push(m):e[o]=[m]}}return e}function j(s,t,e){let a={query:i({...s.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),u(s.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function b(s,t,e){const{objectIds:a}=t,o=[];for(const n of a)o.push(u(s.path+"/"+n+"/attachments",e));return Promise.all(o).then(n=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:n[r].data.attachmentInfos})))}export{j as executeAttachmentQuery,b as fetchAttachments,I as processAttachmentQueryResult};
