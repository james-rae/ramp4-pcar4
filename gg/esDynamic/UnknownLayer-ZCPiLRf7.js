import{A as i,x as s,z as t,K as p,s as l}from"./main-DTtQVgOw.js";import{S as y}from"./MultiOriginJSONSupport-DgnZY84g.js";import{f as u}from"./Layer-CUAj4zsr.js";import{j as d}from"./PortalLayer-PvE5uZwd.js";let e=class extends d(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new l("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const f=e;export{f as default};
