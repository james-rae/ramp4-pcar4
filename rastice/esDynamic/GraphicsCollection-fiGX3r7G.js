import{k as r,o as p,A as a,V as n,d4 as w,d3 as y,en as c,a$ as l,eo as _}from"./main-CvsyIoCL.js";let s=class extends n{constructor(e){super(e),this.addHandles([this.on("before-add",t=>{t.item==null&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(n.ofType(this.itemType.Type))(e):new n(e)}};function d(e,t){return{type:e,cast:w,set(h){const i=y(h,this._get(t),e);i.owner=this,this._set(t,i)}}}r([p()],s.prototype,"owner",null),s=r([a("esri.core.support.OwningCollection")],s);let o=class extends s{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([c({Type:l,ensureType:_(l)})],o.prototype,"itemType",void 0),o=r([a("esri.support.GraphicsCollection")],o);export{o as c,d as l,s as n};