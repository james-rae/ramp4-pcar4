import{x as r,z as s,K as a}from"./main-DZMdXZ8-.js";function p(i){return"portalItem"in i}const n=i=>{let e=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):p(this)?this.portalItem?.apiKey:null}set apiKey(t){t!=null?this._override("apiKey",t):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([s({type:String})],e.prototype,"apiKey",null),e=r([a("esri.layers.mixins.APIKeyMixin")],e),e};export{n as i};
