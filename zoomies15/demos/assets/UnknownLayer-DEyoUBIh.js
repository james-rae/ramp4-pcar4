import{aK as p,q as t,u as n,C as a,s as l}from"./main-CSU-shzQ.js";import{S as y}from"./MultiOriginJSONSupport-ORoMeX8u.js";import{f as u}from"./Layer-DZ2y-x4m.js";import{j as m}from"./PortalLayer-DYKTVpqg.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-BRrTsw9F.js";import"./PortalItem-CRr--QBl.js";import"./portalItemUtils-BMeKO1q7.js";import"./projection-MdOxpSff.js";import"./projectBuffer-DWp04sKw.js";let r=class extends m(y(u)){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{p(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unknown layer type";s&&(i+=" "+s),o(new l("layer:unknown-layer-type",i,{layerType:s}))})}))}read(e,o){super.read({resourceInfo:e},o)}write(e,o){return null}};t([n({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([n({type:["show","hide"]})],r.prototype,"listMode",void 0),t([n({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([a("esri.layers.UnknownLayer")],r);const x=r;export{x as default};
