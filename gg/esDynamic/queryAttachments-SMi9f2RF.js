import{dz as i,dA as p,a2 as m}from"./main-DTtQVgOw.js";import{t as f}from"./query-DJY5G47Q.js";import{a as l}from"./AttachmentInfo-DHMM3X6C.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t}function I(n,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:s,attachmentInfos:c}=a;for(const r of c){const{id:u}=r,h=i(p(`${n.path}/${o}/attachments/${u}`)),d=l.fromJSON(r);d.set({url:h,parentObjectId:o,parentGlobalId:s}),e[o]?e[o].push(d):e[o]=[d]}}return e}function j(n,t,e){let a={query:f({...n.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),m(n.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function b(n,t,e){const{objectIds:a}=t,o=[];for(const s of a)o.push(m(n.path+"/"+s+"/attachments",e));return Promise.all(o).then(s=>a.map((c,r)=>({parentObjectId:c,attachmentInfos:s[r].data.attachmentInfos})))}export{j as executeAttachmentQuery,b as fetchAttachments,I as processAttachmentQueryResult};
