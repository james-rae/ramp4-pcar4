import{aI as n,q as o,u as i,C as a,s as l}from"./main-COW1-tZE.js";import{S as d}from"./MultiOriginJSONSupport-wq02YiVE.js";import{f as u}from"./Layer-CFBN5JUD.js";import{j as y}from"./PortalLayer-DJP2OzmZ.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-Netzf3WV.js";import"./PortalItem-CVWNtsIU.js";import"./portalItemUtils-BeGRt5kl.js";import"./projection-DpT9HzuS.js";import"./projectBuffer-DMMM1aK4.js";let t=class extends y(d(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,s)=>{n(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let p="Unsupported layer type";r&&(p+=" "+r),s(new l("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,s){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,s)}write(e,s){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};o([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),o([i({type:["show","hide"]})],t.prototype,"listMode",void 0),o([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),o([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=o([a("esri.layers.UnsupportedLayer")],t);const $=t;export{$ as default};