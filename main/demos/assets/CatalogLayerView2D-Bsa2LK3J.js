import{q as r,u as o,C as a,V as m}from"./main-C45WTWFO.js";import{j as s,y as n}from"./LayerView-CMNxqaoi.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DYsPs31j.js";import"./MapView-DHRG6XQy.js";import"./Cyclical-BPGX0XxL.js";import"./CollectionFlattener-ahAQi7mz.js";import"./workers-TPg3hMhL.js";import"./projection-BnfuWpaw.js";import"./projectBuffer-F7pB9YVv.js";import"./TileInfo-v_-Q0eA4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-YXxbGicU.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-bydufHs_.js";import"./signal-DytgdVKm.js";import"./Map-C-GaZHQ6.js";import"./Basemap-Cc9xkLWW.js";import"./loadAll-BT210qk5.js";import"./PortalItem-BWasU-9O.js";import"./writeUtils-Uzaa2VPS.js";import"./compilerUtils-CZkIm1oi.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-D__-bNYh.js";import"./common-DQOJ18NT.js";import"./TablesMixin-D2klvZ_Z.js";import"./Layer-DDoEY94q.js";import"./TimeExtent-DEVmKEPd.js";import"./GraphicsCollection-Dmd6mteT.js";import"./HeightModelInfo-Ca2_gN8U.js";import"./ReactiveMap-CFVW4IPw.js";import"./Query-BhJjV8cx.js";import"./Field-Bo5KAoom.js";import"./fieldType-CzKcm5BS.js";import"./arcgisLayerUrl--0hGhC8f.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-D08cz_eK.js";import"./TileKey-D81gjVbj.js";import"./QueueProcessor-CsKYU-ey.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CSDxHQTf.js";import"./normalizeUtilsCommon-CLxy382U.js";import"./utils-D_w-juwc.js";import"./utils-DPIpM5eS.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler--tNhKF8q.js";import"./vec32-CUgMqcgw.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DtYhZVr_.js";import"./imageUtils-B-0oiuwX.js";import"./capabilities-A2uoe7dc.js";import"./Version-Bngs8ph3.js";import"./ColorBackground-9KrOlwld.js";import"./parser-Cx3v90Ld.js";import"./layerViewUtils-DMnDtb-z.js";const l=e=>{let t=class extends e{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([a("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(s(n)){constructor(){super(...arguments),this.layerViews=new m}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([a("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
