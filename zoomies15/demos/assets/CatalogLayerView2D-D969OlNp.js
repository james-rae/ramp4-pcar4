import{q as r,u as o,C as a,V as m}from"./main-CSU-shzQ.js";import{j as s,y as n}from"./LayerView-RQpnbz_2.js";import"./preload-helper-ExcqyqRp.js";import"./Container-D2IbHLj1.js";import"./MapView-Da0puqNa.js";import"./Cyclical-Bl5pLRSh.js";import"./CollectionFlattener-1F6Z9Ogr.js";import"./workers-BshVnteK.js";import"./projection-MdOxpSff.js";import"./projectBuffer-DWp04sKw.js";import"./TileInfo-C5JSaH5A.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-kXcoRwlp.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DcgbIJRU.js";import"./signal-DDAKL708.js";import"./Map-DrLh1igi.js";import"./Basemap-qn4WxssG.js";import"./loadAll-DhUAqmTH.js";import"./PortalItem-CRr--QBl.js";import"./writeUtils-BGdTdSOQ.js";import"./compilerUtils-BV5w6cfm.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DwljmHy8.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DuRhr5As.js";import"./Layer-DZ2y-x4m.js";import"./TimeExtent-BRrTsw9F.js";import"./GraphicsCollection-D4LT_U-5.js";import"./HeightModelInfo-hpOYsOen.js";import"./ReactiveMap-DdZwXcLl.js";import"./Query-DFE3ljsS.js";import"./Field-7msA76tZ.js";import"./fieldType-B6Ymwmlz.js";import"./arcgisLayerUrl-BWpDvkMR.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DPoKuTre.js";import"./TileKey-CllW8aNT.js";import"./QueueProcessor-CbmhMXHK.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-BWhZRLw-.js";import"./normalizeUtilsCommon-DlpGi9hT.js";import"./utils-CfEQ_ax_.js";import"./utils-6OB6GEKd.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DOAurUC4.js";import"./vec32-DjyHV4YJ.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-MQzG0iOB.js";import"./imageUtils-CbjFfj_l.js";import"./capabilities-A2uoe7dc.js";import"./Version-D4zpY9GK.js";import"./ColorBackground-C3RUK4uj.js";import"./parser-CqpJb3Wh.js";import"./layerViewUtils-BIGfa9Na.js";const l=e=>{let t=class extends e{constructor(...i){super(...i),this.layerViews=new m}get dynamicGroupLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(i=>i.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"layerViews",void 0),r([o({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),r([o({readOnly:!0})],t.prototype,"footprintLayerView",null),t=r([a("esri.views.layers.CatalogLayerView")],t),t};let p=class extends l(s(n)){constructor(){super(...arguments),this.layerViews=new m}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([o()],p.prototype,"layerViews",void 0),p=r([a("esri.views.2d.layers.CatalogLayerView2D")],p);const Vt=p;export{Vt as default};
