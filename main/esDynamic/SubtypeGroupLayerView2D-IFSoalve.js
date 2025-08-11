import{ab as o,e1 as u,ao as l,v as p,z as g}from"./main-K6kS0XWo.js";import{c as h}from"./FeatureLayerView2D-8T9N3xhR.js";let e=class extends h{initialize(){this.addHandles([o(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(d=>d.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredPromise!=null,t=!this._workerProxy,r=this.dataUpdating,n=a&&(i||s||t||r);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),n}};e=p([g("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const c=e;export{c as default};
