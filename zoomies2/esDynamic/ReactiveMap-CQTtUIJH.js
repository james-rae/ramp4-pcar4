import{aQ as i,aR as t}from"./main-DyJf3FFo.js";class h{constructor(e){this._observable=new i,this._map=new Map(e)}get size(){return t(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(e){const s=this._map.delete(e);return s&&this._observable.notify(),s}entries(){return t(this._observable),this._map.entries()}forEach(e,s){t(this._observable),this._map.forEach((r,a)=>e.call(s,r,a,this),s)}get(e){return t(this._observable),this._map.get(e)}has(e){return t(this._observable),this._map.has(e)}keys(){return t(this._observable),this._map.keys()}set(e,s){return this._map.set(e,s),this._observable.notify(),this}values(){return t(this._observable),this._map.values()}[Symbol.iterator](){return t(this._observable),this._map[Symbol.iterator]()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}export{h as s};
