import{d7 as h,d8 as d,U as p}from"./main-CdIhtOSF.js";import{t as f}from"./query-DwRs8fIu.js";import{a as l}from"./AttachmentInfo-B6RFestC.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-qPTI-JWL.js";import"./normalizeUtilsCommon-BXVb4wIq.js";import"./utils-kWDIrouF.js";import"./utils-DUjqKEgR.js";import"./pbfQueryUtils-Bw_M9fGY.js";import"./pbf-C8cocHgP.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CqooJ_wi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function J(n,t){const o={};for(const a of t){const{parentObjectId:e,parentGlobalId:r,attachmentInfos:c}=a;for(const s of c){const{id:i}=s,u=h(d(`${n.path}/${e}/attachments/${i}`)),m=l.fromJSON(s);m.set({url:u,parentObjectId:e,parentGlobalId:r}),o[e]?o[e].push(m):o[e]=[m]}}return o}function N(n,t,o){let a={query:f({...n.query,f:"json",...y(t)})};return o&&(a={...o,...a,query:{...o.query,...a.query}}),p(n.path+"/queryAttachments",a).then(e=>e.data.attachmentGroups)}async function Q(n,t,o){const{objectIds:a}=t,e=[];for(const r of a)e.push(p(n.path+"/"+r+"/attachments",o));return Promise.all(e).then(r=>a.map((c,s)=>({parentObjectId:c,attachmentInfos:r[s].data.attachmentInfos})))}export{N as executeAttachmentQuery,Q as fetchAttachments,J as processAttachmentQueryResult};
