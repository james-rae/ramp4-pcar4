import{H as e,n as a,q as o,u as p,C as s}from"./main-B3JhZOBP.js";import{a as n}from"./BitmapContainer-C_wnc-2c.js";import{j as h,y as d}from"./LayerView-3s9oxOPB.js";import{_ as u}from"./ExportStrategy-LQNFAbLa.js";import{i as y}from"./RefreshableLayerView-CNaakSBa.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-BTBIjqYB.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-Bjx6B30V.js";import"./enums-CmIX1y88.js";import"./Texture-BJCkBhYf.js";import"./enums-Dk3osxpS.js";import"./Program-DevywgoN.js";import"./BufferObject-DaTW5wrg.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-EIH2Bcs4.js";import"./ProgramTemplate-tjU63xbz.js";import"./Tile-BR0mmv-s.js";import"./common-DQOJ18NT.js";import"./TileKey-Cws8sSxr.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-CPMONWcQ.js";import"./workers-BAopfs7v.js";import"./ReactiveMap-CoJ5a55S.js";import"./signal-J4D4VE6c.js";import"./quickselect-QQC62dOK.js";import"./Query-BHclvDUo.js";import"./Field-DAb-Uvpi.js";import"./fieldType-DpVs7C-w.js";import"./TimeExtent-XypRjgMf.js";import"./mat3-XZDRtl20.js";import"./MapView-CUhzHRPm.js";import"./Cyclical-D8aPPCGV.js";import"./CollectionFlattener-COQs4NVR.js";import"./projection-Cg7AYUJP.js";import"./projectBuffer-cJZKDuOz.js";import"./TileInfo-C1HakHzH.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-IZtPbAhA.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DlYX9BdY.js";import"./Map-CX8VZBvW.js";import"./Basemap-DzEjs9BP.js";import"./loadAll-BmhdtUGN.js";import"./PortalItem-BNr21cEK.js";import"./writeUtils-Dp0H9KAv.js";import"./compilerUtils-Dhywe0Oj.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DmgL3kdu.js";import"./TablesMixin-DHNcogJs.js";import"./Layer-Bfzyxv9Q.js";import"./GraphicsCollection-Da47lKXk.js";import"./HeightModelInfo-CklbZVKt.js";import"./arcgisLayerUrl-wnNYJ4xv.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./normalizeUtils-Ccw-0zib.js";import"./normalizeUtilsCommon-CRMkDUZJ.js";import"./utils-B1EAmsCp.js";import"./utils-B09UzFcj.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DhNMmK5k.js";import"./vec32-DzWiU6o7.js";import"./imageUtils-ByFayyzL.js";import"./capabilities-A2uoe7dc.js";import"./Version-CfgmTCnl.js";import"./ColorBackground-DKKd3jh3.js";import"./vec3f32-nZdmKIgz.js";import"./Container-xOy10n2D.js";import"./parser-DLg6lUv-.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BBRdUUXQ.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-1AUB2mmK.js";import"./Bitmap-CrjjeOnq.js";let t=class extends y(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new u({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const zt=t;export{zt as default};