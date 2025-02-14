import{k as o,A as u,aa as l,cP as p,az as g}from"./main-Buuj46IZ.js";import{r as h}from"./FeatureLayerView2D-DjZGGpbc.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(n=>n.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._workerProxy,r=this.dataUpdating,d=a&&(i||s||t||r);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),d}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const c=e;export{c as default};
