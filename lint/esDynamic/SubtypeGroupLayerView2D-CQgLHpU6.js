import{k as o,A as u,aC as l,cP as p,aZ as g}from"./main-umVzVZ3H.js";import{r as h}from"./FeatureLayerView2D-BCvgZoHG.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const i=this.layer.sublayers.some(n=>n.renderer!=null),s=this._commandsQueue.updateTracking.updating,a=this._updatingRequiredFieldsPromise!=null,t=!this._workerProxy,r=this.dataUpdating,d=i&&(s||a||t||r);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${i}
  -> hasPendingCommand ${s}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),d}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const c=e;export{c as default};