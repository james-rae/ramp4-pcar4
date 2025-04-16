const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./deleteForwardEdits-Lq5x1YJI.js","./main-CSU-shzQ.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./utils-CfEQ_ax_.js","./DeleteForwardEditsParameters-CcAdoTRK.js"])))=>i.map(i=>d[i]);
import{U,bS as L,q as E,u as R,C as T,aO as k,h as m}from"./main-CSU-shzQ.js";import{_ as w}from"./preload-helper-ExcqyqRp.js";import{o as x}from"./uuid-Cl5lrJ4c.js";const D=x(),j=new Map,V=new Map;async function N(e,n,d){if(!e||!d)return!1;if(!n)return!0;const s=new URL(e).host;let i=j.get(s);if(!i){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");i=(await U(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return i===n}async function z(e,n,d=!1){if(!e||!n)return!0;const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=V.get(s)?.entries();if(i){for(const[t,o]of i)if(o.name===n){const a=!o.stack?.hasForwardEdits();if(!a&&d){const[{deleteForwardEdits:h},{default:u}]=await Promise.all([w(()=>import("./deleteForwardEdits-Lq5x1YJI.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),w(()=>import("./DeleteForwardEditsParameters-CcAdoTRK.js"),__vite__mapDeps([5,1,2,3]),import.meta.url)]),c=await h(s,t,new u({sessionId:D,moment:o.moment}));return c.success&&o.stack?.clearForwardEdits(),c.success}return a}}return!0}function P(e,n){if(!e)return!1;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),s=V.get(d)?.entries();if(s){for(const[i,t]of s)if(t.name===n)return t.lockType==="edit"}return!1}const I=new L.EventEmitter;function O(e){return I.on("apply-edits",new WeakRef(e))}function q(e){return I.on("update-moment",new WeakRef(e))}function G(e,n,d=null,s=!1){const i=k();return s=n==null||s,I.emit("apply-edits",{serviceUrl:e,layerId:n,gdbVersion:d,mayReceiveServiceEdits:s,result:i.promise}),i}const A=Symbol();function J(e){return e!=null&&typeof e=="object"&&A in e}function p(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function g(e,n,d){const s=new URL(e).host,i=j.get(s),t=o=>!o||o===i;return t(n)&&t(d)||n===d}const K=e=>{var n;let d=class extends e{constructor(...s){super(...s),this[n]=!0,this._applyEditsHandler=i=>{const{serviceUrl:t,layerId:o,gdbVersion:a,mayReceiveServiceEdits:h,result:u}=i,c=t===this.url,f=o!=null&&this.layerId!=null&&o===this.layerId,S=p(this),$=p(this)&&g(t,a,this.gdbVersion);if(!c||S&&!$||!f&&!h)return;const H=u.then(r=>{if(this.lastEditsEventDate=new Date,f&&(r.addedFeatures.length||r.updatedFeatures.length||r.deletedFeatures.length||r.addedAttachments.length||r.updatedAttachments.length||r.deletedAttachments.length))return this.emit("edits",m(r)),r;const M=r.editedFeatures?.find(({layerId:F})=>F===this.layerId);if(M){const{adds:F,updates:y,deletes:v}=M.editedFeatures,_={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],deletedFeatures:v?v.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],updatedFeatures:y?y.map(({current:{attributes:l}})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],editedFeatures:m(r.editedFeatures),exceededTransferLimit:!1,historicMoment:m(r.historicMoment)};return this.emit("edits",_),_}const b={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:m(r.editedFeatures),exceededTransferLimit:!1,historicMoment:m(r.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,a,b.historicMoment)&&this.emit("edits",b),b}).then(r=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,a,r.historicMoment)&&(this.historicMoment=r.historicMoment),r));this.emit("apply-edits",{result:H})},this._updateMomentHandler=i=>{const{serviceUrl:t,gdbVersion:o,moment:a}=i,h=t===this.url,u=p(this),c=p(this)&&g(t,o,this.gdbVersion),f=p(this)&&!g(t,this.gdbVersion,null);h&&u&&c&&f&&"historicMoment"in this&&this.historicMoment!==a&&(this.historicMoment=a)},this.when().then(()=>{this.addHandles(O(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(s,i,t){return"historicMoment"in this&&this.historicMoment!==t&&P(s,i)}};return n=A,E([R()],d.prototype,"lastEditsEventDate",void 0),d=E([T("esri.layers.mixins.EditBusLayer")],d),d};export{K as F,P as a,G as c,z as i,N as o,J as p,D as t};
