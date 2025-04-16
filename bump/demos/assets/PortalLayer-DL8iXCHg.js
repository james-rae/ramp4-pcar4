const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./layersLoader-CFf9GC39.js","./main-CdIhtOSF.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./arcgisLayerUrl-Dt83lcur.js","./fetchService-uOsRhs15.js","./portalLayers-CcZRFZO2.js","./associatedFeatureServiceUtils-0F49xoX9.js","./PortalItem-cdYEWUwg.js","./portalItemUtils-Bh5bujq4.js","./projection-CnhLv0Zh.js","./projectBuffer-DZLir_15.js","./layersCreator-CnW9qni4.js","./styleUtils-DIzC_ixg.js","./jsonContext-BVlB2WA0.js"])))=>i.map(i=>d[i]);
import{_}from"./preload-helper-ExcqyqRp.js";import{q as l,u as d,z as w,v as E,C as U,E as $,G as H,H as b,n as F,J as n,K as L,L as O,W as T,M as m,b as y,N as v,_ as M,U as S,O as D,Q as R,s as k}from"./main-CdIhtOSF.js";import g from"./PortalItem-cdYEWUwg.js";import{E as I}from"./portalItemUtils-Bh5bujq4.js";const j=P=>{let a=class extends P{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=$(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,e,t){if(e.itemId)return new g({id:e.itemId,portal:t?.portal})}writePortalItem(r,e){r?.id&&(e.itemId=r.id)}async loadFromPortal(r,e){if(this.portalItem?.id)try{const{load:t}=await _(()=>import("./layersLoader-CFf9GC39.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url);return H(e),await t({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},e)}catch(t){throw b(t)||F.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${t}`),t}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(e=>(n(e),!0)))}async setUserPrivileges(r,e){if(!L.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:t,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(r,e);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(t){n(t)}}async _fetchUserPrivileges(r,e){let t=this.portalItem;if(!r||!t||!t.loaded||t.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=r===t.id;if(i&&t.portal.user)return I(t);let s,p;if(i)s=t.portal.url;else try{s=await O(this.url,e)}catch(o){n(o)}if(!s||!T(s,t.portal.url))return this._fetchFallbackUserPrivileges(e);try{const o=e!=null?e.signal:null;p=await m?.getCredential(`${s}/sharing`,{prompt:!1,signal:o})}catch(o){n(o)}const c=!0,u=!1,f=!1;if(!p)return{features:{edit:c,fullEdit:u},content:{updateItem:f}};try{if(i?await t.reload():(t=new g({id:r,portal:{url:s}}),await t.load(e)),t.portal.user)return I(t)}catch(o){n(o)}return{features:{edit:c,fullEdit:u},content:{updateItem:f}}}async _fetchFallbackUserPrivileges(r){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(r)}catch(t){n(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){const e=this.url?m?.findCredential(this.url):null;if(!e)return!0;const t=h.credential===e?h.user:await this._fetchEditingUser(r);return h.credential=e,h.user=t,t?.privileges==null||t.privileges.includes("features:user:edit")}async _fetchEditingUser(r){const e=this.portalItem?.portal?.user;if(e)return e;const t=m?.findServerInfo(this.url??"");if(!t?.owningSystemUrl)return null;const i=`${t.owningSystemUrl}/sharing/rest`,s=y.getDefault();if(s&&s.loaded&&v(s.restUrl)===v(i))return s.user;const p=`${i}/community/self`,c=r!=null?r.signal:null,u=await M(S(p,{authMode:"no-prompt",query:{f:"json"},signal:c}));return u.ok?D.fromJSON(u.value.data):null}read(r,e){e&&(e.layer=this),super.read(r,e)}write(r,e){const t=e?.portal,i=this.portalItem?.id&&(this.portalItem.portal||y.getDefault());return t&&i&&!R(i.restUrl,t.restUrl)?(e.messages&&e.messages.push(new k("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...e,layer:this})}};return l([d({type:g})],a.prototype,"portalItem",null),l([w("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),l([E("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),l([d({clonable:!1})],a.prototype,"resourceReferences",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=l([U("esri.layers.mixins.PortalLayer")],a),a},h={credential:null,user:null};export{j};
