import{k as l,o as d,u as w,q as U,A as E,C as _,D as H,E as b,n as $,G as n,H as F,J as L,W as M,K as m,b as y,L as I,_ as T,U as k,M as D,N as O,s as S}from"./main-DqYc2eZZ.js";import g from"./PortalItem-uW9i6LAa.js";import{E as v}from"./portalItemUtils-zo-GZTtO.js";const C=P=>{let a=class extends P{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=_(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,t,e){if(t.itemId)return new g({id:t.itemId,portal:e?.portal})}writePortalItem(r,t){r?.id&&(t.itemId=r.id)}async loadFromPortal(r,t){if(this.portalItem?.id)try{const{load:e}=await import("./layersLoader-Bs-zHFs0.js");return H(t),await e({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},t)}catch(e){throw b(e)||$.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${e}`),e}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(t=>(n(t),!0)))}async setUserPrivileges(r,t){if(!F.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:e,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(r,t);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){n(e)}}async _fetchUserPrivileges(r,t){let e=this.portalItem;if(!r||!e||!e.loaded||e.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=r===e.id;if(i&&e.portal.user)return v(e);let s,p;if(i)s=e.portal.url;else try{s=await L(this.url,t)}catch(o){n(o)}if(!s||!M(s,e.portal.url))return this._fetchFallbackUserPrivileges(t);try{const o=t!=null?t.signal:null;p=await m?.getCredential(`${s}/sharing`,{prompt:!1,signal:o})}catch(o){n(o)}const c=!0,u=!1,f=!1;if(!p)return{features:{edit:c,fullEdit:u},content:{updateItem:f}};try{if(i?await e.reload():(e=new g({id:r,portal:{url:s}}),await e.load(t)),e.portal.user)return v(e)}catch(o){n(o)}return{features:{edit:c,fullEdit:u},content:{updateItem:f}}}async _fetchFallbackUserPrivileges(r){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(r)}catch(e){n(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){const t=this.url?m?.findCredential(this.url):null;if(!t)return!0;const e=h.credential===t?h.user:await this._fetchEditingUser(r);return h.credential=t,h.user=e,e?.privileges==null||e.privileges.includes("features:user:edit")}async _fetchEditingUser(r){const t=this.portalItem?.portal?.user;if(t)return t;const e=m?.findServerInfo(this.url??"");if(!e?.owningSystemUrl)return null;const i=`${e.owningSystemUrl}/sharing/rest`,s=y.getDefault();if(s&&s.loaded&&I(s.restUrl)===I(i))return s.user;const p=`${i}/community/self`,c=r!=null?r.signal:null,u=await T(k(p,{authMode:"no-prompt",query:{f:"json"},signal:c}));return u.ok?D.fromJSON(u.value.data):null}read(r,t){t&&(t.layer=this),super.read(r,t)}write(r,t){const e=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||y.getDefault());return e&&i&&!O(i.restUrl,e.restUrl)?(t.messages&&t.messages.push(new S("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...t,layer:this})}};return l([d({type:g})],a.prototype,"portalItem",null),l([w("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),l([U("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),l([d({clonable:!1})],a.prototype,"resourceReferences",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),l([d({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=l([E("esri.layers.mixins.PortalLayer")],a),a},h={credential:null,user:null};export{C as j};
