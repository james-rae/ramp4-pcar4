import{h as r}from"./MemCache-Dl-4GPDO.js";class o{constructor(t,e){this._storage=new r,this.id="",this.name="",this.size=0,this._storage.maxSize=t,this._storage.register(this),e&&this._storage.registerRemoveFunc("",e)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}export{o as e};
