import{E as s,b3 as a,V as g,bT as l,aJ as e,q as h,u as n,C as c}from"./main-C45WTWFO.js";import{j as d,y as u}from"./LayerView-CMNxqaoi.js";import{t as w}from"./GraphicContainer-DraqZxor.js";import{F as y}from"./GraphicsView2D-DZ5OYpQt.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DYsPs31j.js";import"./MapView-DHRG6XQy.js";import"./Cyclical-BPGX0XxL.js";import"./CollectionFlattener-ahAQi7mz.js";import"./workers-TPg3hMhL.js";import"./projection-BnfuWpaw.js";import"./projectBuffer-F7pB9YVv.js";import"./TileInfo-v_-Q0eA4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-YXxbGicU.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-bydufHs_.js";import"./signal-DytgdVKm.js";import"./Map-C-GaZHQ6.js";import"./Basemap-Cc9xkLWW.js";import"./loadAll-BT210qk5.js";import"./PortalItem-BWasU-9O.js";import"./writeUtils-Uzaa2VPS.js";import"./compilerUtils-CZkIm1oi.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-D__-bNYh.js";import"./common-DQOJ18NT.js";import"./TablesMixin-D2klvZ_Z.js";import"./Layer-DDoEY94q.js";import"./TimeExtent-DEVmKEPd.js";import"./GraphicsCollection-Dmd6mteT.js";import"./HeightModelInfo-Ca2_gN8U.js";import"./ReactiveMap-CFVW4IPw.js";import"./Query-BhJjV8cx.js";import"./Field-Bo5KAoom.js";import"./fieldType-CzKcm5BS.js";import"./arcgisLayerUrl--0hGhC8f.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-D08cz_eK.js";import"./TileKey-D81gjVbj.js";import"./QueueProcessor-CsKYU-ey.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CSDxHQTf.js";import"./normalizeUtilsCommon-CLxy382U.js";import"./utils-D_w-juwc.js";import"./utils-DPIpM5eS.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler--tNhKF8q.js";import"./vec32-CUgMqcgw.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DtYhZVr_.js";import"./imageUtils-B-0oiuwX.js";import"./capabilities-A2uoe7dc.js";import"./Version-Bngs8ph3.js";import"./ColorBackground-9KrOlwld.js";import"./parser-Cx3v90Ld.js";import"./layerViewUtils-DMnDtb-z.js";import"./AGraphicContainer-KsLeeFT4.js";import"./TechniqueInstance-DMuSRvcK.js";import"./UpdateTracking2D-DMTIuPGD.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-D3U-q0SO.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-Bh6VS8k8.js";import"./Program-CX7y-BZ9.js";import"./BufferObject-BT9ayBS_.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-BQE__kLA.js";import"./WGLContainer-BO5nKuun.js";import"./VertexArrayObject-DGaKfns5.js";import"./ProgramTemplate-C1gNGxmq.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-CvMp17Lw.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-BhJ5lPyf.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-FP-S_jqE.js";import"./FieldsIndex-Tcaxvyqr.js";import"./UnknownTimeZone-BwkM8Za9.js";import"./OverrideHelper-5KGCu7Kn.js";import"./colorUtils-DcjH_uxR.js";import"./quantizationUtils-BDDEQ0S1.js";import"./AttributeStore-aKu19wI4.js";import"./TimeOnly-CaNhrHxA.js";import"./timeSupport-C45Qepaj.js";import"./queryUtils-zI4Ac-UN.js";import"./json-Wa8cmqdu.js";import"./labelUtils-BynH2hFk.js";import"./diffUtils-Cpoeukbl.js";import"./normalizeUtilsSync-B86ZqaWg.js";let m=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=s(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof a?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(o=>o&&o.uid):g.isCollection(i)&&i.length>0&&(r=i.map(o=>o&&o.uid).toArray());const p=r?.filter(l);return p?.length?(this._addHighlight(p,t),e(()=>this._removeHighlight(p,t))):e()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const r=this._highlightCounter.getHighlightGroups(t),p=this._getHighlightBits(r);i.push({objectId:t,highlightFlags:p})}this.graphicsView?.setHighlight(i)}};h([n()],m.prototype,"graphicsView",void 0),m=h([c("esri.views.2d.layers.GraphicsLayerView2D")],m);const yt=m;export{yt as default};
