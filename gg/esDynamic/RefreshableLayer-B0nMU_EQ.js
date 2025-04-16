import{V as c,aG as u,aH as m,x as a,z as i,bG as p,K as v,e4 as g,eP as y,n as I}from"./main-DTtQVgOw.js";import{a as b}from"./layerContainerType-ChWdCT09.js";const n=new c,o=new WeakMap;function w(r){D(r)&&n.push(new WeakRef(r))}function C(r){const e=n.find(s=>s.deref()===r);e&&n.remove(e)}function D(r){return r!=null&&typeof r=="object"&&"refreshInterval"in r&&"refresh"in r}function l(r,e){return Number.isFinite(r)&&Number.isFinite(e)?e<=0?r:l(e,r%e):0}let f=0,h=0;function R(){const r=Date.now();let e=!1;for(const s of n){const t=s.deref();t?t.refreshInterval&&r-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,r),t.refresh(r)):e=!0}if(e)for(let s=n.length-1;s>=0;s--)n.at(s).deref()||n.removeAt(s)}u(()=>{const r=Date.now();let e=0;for(const s of n){const t=s.deref();t&&(e=l(Math.round(6e4*t.refreshInterval),e),t.refreshInterval?o.get(t)||o.set(t,r):o.delete(t))}if(e!==h){if(h=e,clearInterval(f),h===0)return void(f=0);f=setInterval(R,h)}},m);const d=.1,T=r=>{let e=class extends r{constructor(...s){super(...s),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=g(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||w(this)},()=>{})}destroy(){C(this)}castRefreshInterval(s){return s>=d?s:s<=0?0:d}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(s=Date.now()){y(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",s),this.emit("refresh",{dataChanged:t})},t=>{I.getLogger(this).error(t),this.emit("refresh",{dataChanged:!1,error:t})})}async hasDataChanged(){return!0}get test(){}};return a([i({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:b}}}}})],e.prototype,"refreshInterval",void 0),a([p("refreshInterval")],e.prototype,"castRefreshInterval",null),a([i({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),a([i({readOnly:!0})],e.prototype,"refreshParameters",null),e=a([v("esri.layers.mixins.RefreshableLayer")],e),e};export{T as f};
