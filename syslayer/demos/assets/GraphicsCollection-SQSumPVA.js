import{B as r,D as p,N as a,V as n,dp as w,dn as c,eR as y,b6 as l,bK as _}from"./main-D_jCcUNd.js";let s=class extends n{constructor(t){super(t),this.addHandles([this.on("before-add",e=>{e.item==null&&e.preventDefault()}),this.on("after-add",e=>this._own(e.item)),this.on("after-remove",e=>this._release(e.item))])}get owner(){return this._get("owner")}set owner(t){t!==this._get("owner")&&(this._releaseAll(),this._set("owner",t),this._ownAll())}_ownAll(){for(const t of this.items)this._own(t)}_releaseAll(){for(const t of this.items)this._release(t)}_createNewInstance(t){return this.itemType?new(n.ofType(this.itemType.Type))(t):new n(t)}};function u(t,e){return{type:t,cast:w,set(h){const i=c(h,this._get(e),t);i.owner=this,this._set(e,i)}}}r([p()],s.prototype,"owner",null),s=r([a("esri.core.support.OwningCollection")],s);let o=class extends s{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([y({Type:l,ensureType:_(l)})],o.prototype,"itemType",void 0),o=r([a("esri.support.GraphicsCollection")],o);export{o as c,u as l,s as n};
