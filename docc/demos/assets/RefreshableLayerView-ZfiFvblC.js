import{bb as i,bd as t,be as h,ax as d,G as l}from"./main-Cvu-P-7v.js";const o=s=>{let e=class extends s{initialize(){this.addHandles(h(()=>this.layer,"refresh",r=>{this.doRefresh(r.dataChanged).catch(a=>{d(a)||l.getLogger(this).error(a)})}),"RefreshableLayerView")}};return e=i([t("esri.views.layers.RefreshableLayerView")],e),e};export{o as i};