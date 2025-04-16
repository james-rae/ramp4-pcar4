import{x as o,z as d,D as w,B as U,K as _,Q as E,T as H,U as b,n as $,X as u,Y as F,Z as c,$ as L,a0 as T,C as v,a1 as I,_ as D,a2 as M,a3 as O,a4 as S,s as x}from"./main-DTtQVgOw.js";import m from"./PortalItem-C7yLXxDn.js";import{f as C}from"./portalItemUtils-BEgLtkVw.js";const k=P=>{let s=class extends P{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=E(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,t,e){if(t.itemId)return new m({id:t.itemId,portal:e?.portal})}writePortalItem(r,t){r?.id&&(t.itemId=r.id)}async loadFromPortal(r,t){if(this.portalItem?.id)try{const{load:e}=await import("./layersLoader-CJdj5P6P.js");return H(t),await e({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap,populateGroupLayer:r.populateGroupLayer},t)}catch(e){throw b(e)||$.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${e}`),e}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(t=>(u(t),!0)))}async setUserPrivileges(r,t){if(!F.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:e,fullEdit:i},content:{updateItem:a}}=await this._fetchUserPrivileges(r,t);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",a)}catch(e){u(e)}}async _fetchUserPrivileges(r,t){let e=this.portalItem;if(!r||!e||!e.loaded||e.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=!c?.findCredential(this.url),a=r===e.id;if(a&&e.portal.user)return this._getUserPrivileges(e,i);let l,h;if(a)l=e.portal.url;else try{l=await L(this.url,t)}catch(n){u(n)}if(!l||!T(l,e.portal.url))return this._fetchFallbackUserPrivileges(t);try{const n=t!=null?t.signal:null;h=await c?.getCredential(`${l}/sharing`,{prompt:!1,signal:n})}catch(n){u(n)}const p=!0,f=!1,y=!1;if(!h)return{features:{edit:p,fullEdit:f},content:{updateItem:y}};try{if(a?await e.reload():(e=new m({id:r,portal:{url:l}}),await e.load(t)),e.portal.user)return this._getUserPrivileges(e,i)}catch(n){u(n)}return{features:{edit:p,fullEdit:f},content:{updateItem:y}}}_getUserPrivileges(r,t){const e=C(r);return t&&(e.features.edit=!0),e}async _fetchFallbackUserPrivileges(r){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(r)}catch(e){u(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){const t=this.url?c?.findCredential(this.url):null;if(!t)return!0;const e=g.credential===t?g.user:await this._fetchEditingUser(r);return g.credential=t,g.user=e,e?.privileges==null||e.privileges.includes("features:user:edit")}async _fetchEditingUser(r){const t=this.portalItem?.portal?.user;if(t)return t;const e=c?.findServerInfo(this.url??"");if(!e?.owningSystemUrl)return null;const i=`${e.owningSystemUrl}/sharing/rest`,a=v.getDefault();if(a&&a.loaded&&I(a.restUrl)===I(i))return a.user;const l=`${i}/community/self`,h=r!=null?r.signal:null,p=await D(M(l,{authMode:"no-prompt",query:{f:"json"},signal:h}));return p.ok?O.fromJSON(p.value.data):null}read(r,t){t&&(t.layer=this),super.read(r,t)}write(r,t){const e=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.getDefault());return e&&i&&!S(i.restUrl,e.restUrl)?(t.messages&&t.messages.push(new x("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...t,layer:this})}};return o([d({type:m})],s.prototype,"portalItem",null),o([w("web-document","portalItem",["itemId"])],s.prototype,"readPortalItem",null),o([U("web-document","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),o([d({clonable:!1})],s.prototype,"resourceReferences",void 0),o([d({type:Boolean,readOnly:!0})],s.prototype,"userHasEditingPrivileges",void 0),o([d({type:Boolean,readOnly:!0})],s.prototype,"userHasFullEditingPrivileges",void 0),o([d({type:Boolean,readOnly:!0})],s.prototype,"userHasUpdateItemPrivileges",void 0),s=o([_("esri.layers.mixins.PortalLayer")],s),s},g={credential:null,user:null};export{k as j};
