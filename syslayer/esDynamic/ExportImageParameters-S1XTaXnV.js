import{x as i,z as l,K as m,aL as u,bA as c}from"./main-DZMdXZ8-.js";import{d as p}from"./scaleUtils-B73M02tO.js";import{n as y}from"./floorFilterUtils-4r-vVdzs.js";import{i as b}from"./sublayerUtils-B5AS0hlo.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let r=class extends u{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const a=y(this.floors,s);return s.toExportImageJSON(a)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(d[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,s=this.visibleSublayers.filter(a=>a.definitionExpression!=null||e&&a.floorInfo!=null);return s.length?JSON.stringify(s.reduce((a,n)=>{const o=y(this.floors,n),t=c(o,n.definitionExpression);return t!=null&&(a[n.id]=t),a},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,a=this.scale,n=t=>{t.visible&&(a===0||p(a,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(n):e.unshift(t))};s&&s.forEach(n);const o=this._get("visibleSublayers");return!o||o.length!==e.length||o.some((t,h)=>e[h]!==t)?e:o}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};i([l({readOnly:!0})],r.prototype,"dynamicLayers",null),i([l()],r.prototype,"floors",void 0),i([l({readOnly:!0})],r.prototype,"hasDynamicLayers",null),i([l()],r.prototype,"layer",null),i([l({readOnly:!0})],r.prototype,"layers",null),i([l({readOnly:!0})],r.prototype,"layerDefs",null),i([l({type:Number})],r.prototype,"scale",void 0),i([l({readOnly:!0})],r.prototype,"version",null),i([l({readOnly:!0})],r.prototype,"visibleSublayers",null),r=i([m("esri.layers.support.ExportImageParameters")],r);export{r as y};
