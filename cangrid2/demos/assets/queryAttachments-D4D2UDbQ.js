import { cS as S, cT as m$1, cU as a$1, cV as t, U } from './main-CGBWc59Z.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function s(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a(o,n){const s={};for(const a of n){const{parentObjectId:n,parentGlobalId:c,attachmentInfos:m}=a;for(const a of m){const{id:m}=a,p=S(m$1(`${o.path}/${n}/attachments/${m}`)),i=a$1.fromJSON(a);i.set({url:p,parentObjectId:n,parentGlobalId:c}),s[n]?s[n].push(i):s[n]=[i];}}return s}function c(t$1,e,r){let a={query:t({...t$1.query,f:"json",...s(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),U(t$1.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function m(t,e,n){const{objectIds:r}=e,s=[];for(const a of r)s.push(U(t.path+"/"+a+"/attachments",n));return Promise.all(s).then((t=>r.map(((o,e)=>({parentObjectId:o,attachmentInfos:t[e].data.attachmentInfos})))))}

export { c as executeAttachmentQuery, m as fetchAttachments, a as processAttachmentQueryResult };
