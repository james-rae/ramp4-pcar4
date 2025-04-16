import{U as R,bP as x,k as E,o as L,A as T,aM as D,f as m}from"./main-DyJf3FFo.js";import{o as $}from"./uuid-Dj9mdEVg.js";const j=$(),V=new Map,A=new Map;async function P(e,n,d){if(!e||!d)return!1;if(!n)return!0;const i=new URL(e).host;let s=V.get(i);if(!s){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");s=(await R(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return s===n}async function W(e,n,d=!1){if(!e||!n)return!0;const i=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),s=A.get(i)?.entries();if(s){for(const[t,a]of s)if(a.name===n){const o=!a.stack?.hasForwardEdits();if(!o&&d){const[{deleteForwardEdits:h},{default:u}]=await Promise.all([import("./deleteForwardEdits-CMYJwMdq.js"),import("./DeleteForwardEditsParameters-Bjz5yoTJ.js")]),c=await h(i,t,new u({sessionId:j,moment:a.moment}));return c.success&&a.stack?.clearForwardEdits(),c.success}return o}}return!0}function H(e,n){if(!e)return!1;const d=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),i=A.get(d)?.entries();if(i){for(const[s,t]of i)if(t.name===n)return t.lockType==="edit"}return!1}const g=new x.EventEmitter;function N(e){return g.on("apply-edits",new WeakRef(e))}function q(e){return g.on("update-moment",new WeakRef(e))}function z(e,n,d=null,i=!1){const s=D();return i=n==null||i,g.emit("apply-edits",{serviceUrl:e,layerId:n,gdbVersion:d,mayReceiveServiceEdits:i,result:s.promise}),s}const S=Symbol();function B(e){return e!=null&&typeof e=="object"&&S in e}function p(e){return e!=null&&typeof e=="object"&&"gdbVersion"in e}function M(e,n,d){const i=new URL(e).host,s=V.get(i),t=a=>!a||a===s;return t(n)&&t(d)||n===d}const C=e=>{var n;let d=class extends e{constructor(...i){super(...i),this[n]=!0,this._applyEditsHandler=s=>{const{serviceUrl:t,layerId:a,gdbVersion:o,mayReceiveServiceEdits:h,result:u}=s,c=t===this.url,f=a!=null&&this.layerId!=null&&a===this.layerId,U=p(this),_=p(this)&&M(t,o,this.gdbVersion);if(!c||U&&!_||!f&&!h)return;const k=u.then(r=>{if(this.lastEditsEventDate=new Date,f&&(r.addedFeatures.length||r.updatedFeatures.length||r.deletedFeatures.length||r.addedAttachments.length||r.updatedAttachments.length||r.deletedAttachments.length))return this.emit("edits",m(r)),r;const I=r.editedFeatures?.find(({layerId:F})=>F===this.layerId);if(I){const{adds:F,updates:y,deletes:v}=I.editedFeatures,w={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:F?F.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],deletedFeatures:v?v.map(({attributes:l})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],updatedFeatures:y?y.map(({current:{attributes:l}})=>({objectId:this.objectIdField&&l[this.objectIdField],globalId:this.globalIdField&&l[this.globalIdField]})):[],editedFeatures:m(r.editedFeatures),exceededTransferLimit:!1,historicMoment:m(r.historicMoment)};return this.emit("edits",w),w}const b={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:m(r.editedFeatures),exceededTransferLimit:!1,historicMoment:m(r.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,o,b.historicMoment)&&this.emit("edits",b),b}).then(r=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,o,r.historicMoment)&&(this.historicMoment=r.historicMoment),r));this.emit("apply-edits",{result:k})},this._updateMomentHandler=s=>{const{serviceUrl:t,gdbVersion:a,moment:o}=s,h=t===this.url,u=p(this),c=p(this)&&M(t,a,this.gdbVersion),f=p(this)&&!M(t,this.gdbVersion,null);h&&u&&c&&f&&"historicMoment"in this&&this.historicMoment!==o&&(this.historicMoment=o)},this.when().then(()=>{this.addHandles(N(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(q(this._updateMomentHandler))},()=>{})}_shouldUpdateHistoricMoment(i,s,t){return"historicMoment"in this&&this.historicMoment!==t&&H(i,s)}};return n=S,E([L()],d.prototype,"lastEditsEventDate",void 0),d=E([T("esri.layers.mixins.EditBusLayer")],d),d};export{C as F,H as a,z as c,W as i,P as o,B as p,j as t};
