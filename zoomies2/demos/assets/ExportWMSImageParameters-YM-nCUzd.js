import{q as a,u as t,C as c,aF as h}from"./main-BxgY9rsH.js";const b={visible:"visibleSublayers"};let s=class extends h{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",r=>this.notifyChange(b[r.propertyName]))],"layer"))}get layers(){return this.visibleSublayers.filter(({name:e})=>e).map(({name:e})=>e).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,o=e?.sublayers,l=[],i=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:m}=n;m&&(r===0||(y===0||r<=y)&&(p===0||r>=p))&&(u?u.forEach(i):l.push(n))};return o?.forEach(i),l}toJSON(){const{layer:e,layers:r}=this,{imageFormat:o,imageTransparency:l,version:i}=e;return{format:o,request:"GetMap",service:"WMS",styles:"",transparent:l?"TRUE":"FALSE",version:i,layers:r}}};a([t()],s.prototype,"layer",null),a([t({readOnly:!0})],s.prototype,"layers",null),a([t({type:Number})],s.prototype,"scale",void 0),a([t({readOnly:!0})],s.prototype,"version",null),a([t({readOnly:!0})],s.prototype,"visibleSublayers",null),s=a([c("esri.layers.support.ExportWMSImageParameters")],s);export{s as a};
