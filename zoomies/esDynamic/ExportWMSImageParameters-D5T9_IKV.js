import{k as a,o as t,A as c,aD as h}from"./main-DFutu5rJ.js";const b={visible:"visibleSublayers"};let r=class extends h{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",s=>this.notifyChange(b[s.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:s}=this,o=e?.sublayers,l=[],i=y=>{const{minScale:n,maxScale:p,sublayers:u,visible:m}=y;m&&(s===0||(n===0||s<=n)&&(p===0||s>=p))&&(u?u.forEach(i):l.push(y))};return o?.forEach(i),l}toJSON(){const{layer:e,layers:s}=this,{imageFormat:o,imageTransparency:l,version:i}=e;return{format:o,request:"GetMap",service:"WMS",styles:"",transparent:l?"TRUE":"FALSE",version:i,layers:s}}};a([t()],r.prototype,"layer",null),a([t({readOnly:!0})],r.prototype,"layers",null),a([t({type:Number})],r.prototype,"scale",void 0),a([t({readOnly:!0})],r.prototype,"version",null),a([t({readOnly:!0})],r.prototype,"visibleSublayers",null),r=a([c("esri.layers.support.ExportWMSImageParameters")],r);export{r as a};
