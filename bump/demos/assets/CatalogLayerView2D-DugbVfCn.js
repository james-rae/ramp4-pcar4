import{q as r,u as o,C as a,V as m}from"./main-CdIhtOSF.js";import{j as s,y as n}from"./LayerView-CZPr-VSV.js";import"./preload-helper-ExcqyqRp.js";import"./Container-VurvxIZJ.js";import"./MapView-UasAHzXy.js";import"./Cyclical-Bkirp5_S.js";import"./CollectionFlattener-CIIavhfx.js";import"./workers-CMm6V5yi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./TileInfo-qYdaiZI8.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-COiP7qzb.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CM-QEsCI.js";import"./signal-ogpULOU9.js";import"./Map-DKUWZFu0.js";import"./Basemap-CBXQimG5.js";import"./loadAll-Ci6LpPk3.js";import"./PortalItem-cdYEWUwg.js";import"./writeUtils-BAirZmA6.js";import"./compilerUtils-C4GVPLLz.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CEtQ2yPT.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DBF8yaoP.js";import"./Layer-cvHs5bqh.js";import"./TimeExtent-D0MhnQJi.js";import"./GraphicsCollection-CkeFT_xN.js";import"./HeightModelInfo-DTTEyk5D.js";import"./ReactiveMap-Dw-UUYq-.js";import"./Query-sr5_9KZo.js";import"./Field-DaVZknBl.js";import"./fieldType-5Ab7WXr4.js";import"./arcgisLayerUrl-Dt83lcur.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DTSW8hoq.js";import"./TileKey-DLWnnM96.js";import"./QueueProcessor-Cvimwt7a.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-qPTI-JWL.js";import"./normalizeUtilsCommon-BXVb4wIq.js";import"./utils-kWDIrouF.js";import"./utils-DUjqKEgR.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D51l5ngo.js";import"./vec32-BatRAtRG.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BIwfU-T7.js";import"./imageUtils-K0WbGinX.js";import"./capabilities-A2uoe7dc.js";import"./Version-B1o4xmLe.js";import"./ColorBackground-DtkB2Toy.js";import"./parser-BsklBJ1C.js";import"./layerViewUtils-D5m9W0Vr.js";const l=e=>{let t=class extends e{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([a("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(s(n)){constructor(){super(...arguments),this.layerViews=new m}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([a("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
