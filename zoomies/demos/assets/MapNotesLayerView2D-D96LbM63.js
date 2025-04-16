import{b3 as u,V as f,bT as w,aJ as n,aG as p,cU as h,aI as y,q as _,C as V}from"./main-vIJpOdvB.js";import{j as v,y as C}from"./LayerView-BNboiUe4.js";import{t as c}from"./GraphicContainer-N10mxzo2.js";import{F as g}from"./GraphicsView2D-BqzZYquq.js";import"./preload-helper-ExcqyqRp.js";import"./Container-B7y66kXL.js";import"./MapView-hWvE-eny.js";import"./Cyclical-CBXgk0zM.js";import"./CollectionFlattener-BYkOQ07q.js";import"./workers-bcHhicnU.js";import"./projection-DUpEFq3L.js";import"./projectBuffer-aZ5NGnsM.js";import"./TileInfo-CUvN-OKb.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DEe8suzU.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CQ8xqsEr.js";import"./signal-D-PbuAaj.js";import"./Map-qqDUIE-e.js";import"./Basemap-B47iptDR.js";import"./loadAll-U-E2yCLR.js";import"./PortalItem-Bd16B4N_.js";import"./writeUtils-lEDU74_5.js";import"./compilerUtils-Bb3nuaZ2.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DddAqSdm.js";import"./common-DQOJ18NT.js";import"./TablesMixin-B1hxcQRC.js";import"./Layer-CTALTC0x.js";import"./TimeExtent-CvPeYCj0.js";import"./GraphicsCollection-CYKpx_ws.js";import"./HeightModelInfo-DfhxKHZT.js";import"./ReactiveMap-D6Uz0B4Z.js";import"./Query-c2ltiIPp.js";import"./Field-cqyKZlb5.js";import"./fieldType-Bz-x3gqO.js";import"./arcgisLayerUrl-f6zkGlVo.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DmnJ15TJ.js";import"./TileKey-DOCG2GmL.js";import"./QueueProcessor-Du_2mIez.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CXoq44eX.js";import"./normalizeUtilsCommon-Dkn8-liH.js";import"./utils-De1xqMvB.js";import"./utils-Dx-maw32.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DJG9Pz3C.js";import"./vec32-gSPtxhar.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BIbIiVdY.js";import"./imageUtils-DXlpiZUP.js";import"./capabilities-A2uoe7dc.js";import"./Version-DZB84Nzg.js";import"./ColorBackground-hGDKSyKf.js";import"./parser-DkauTbU_.js";import"./layerViewUtils-UlMXaOTl.js";import"./AGraphicContainer-B_5gS7aO.js";import"./TechniqueInstance-Bj3rT0pi.js";import"./UpdateTracking2D-V4CU09gw.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils--CmJvvbp.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BCwI6-Xy.js";import"./Program-DmdLGaWn.js";import"./BufferObject-Dee41XAl.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-YdTOMC5m.js";import"./WGLContainer-Cd6dAmGp.js";import"./VertexArrayObject-Bm0IsYWg.js";import"./ProgramTemplate-BOardkIo.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DdC5AzaX.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-NtZpr0z_.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-BvR-RB4g.js";import"./FieldsIndex-NmDIYC-a.js";import"./UnknownTimeZone-5nk00Oib.js";import"./OverrideHelper-8zS7uQGQ.js";import"./colorUtils-BcTGMMO0.js";import"./quantizationUtils-BjzHLefI.js";import"./AttributeStore-l_LF9Onn.js";import"./TimeOnly-C6JJdED1.js";import"./timeSupport-aSThFlDn.js";import"./queryUtils-ljdof9mt.js";import"./json-Wa8cmqdu.js";import"./labelUtils-B-bTQKCj.js";import"./diffUtils-DIvWfLt6.js";import"./normalizeUtilsSync-Bj8Lh8TX.js";const d="sublayers",m="layerView",b=new Set(["default"]);let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),r=>{const e=r.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const o=this._graphicsViewsFeatureCollectionMap.get(r);for(const s of e)!s.popupTemplate&&o.popupTemplate&&(s.popupTemplate=o.popupTemplate),s.sourceLayer=s.layer=this.layer}return e}).flat().map(r=>({type:"graphic",graphic:r,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):f.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray());const r=t?.filter(w);return r?.length?(this._addHighlight(r),n(()=>this._removeHighlight(r))):n()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),r=this.layer.featureCollections;if(r!=null&&r.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const e of r){const o=new c(this.view.featuresTilingScheme),s=new g({view:i,graphics:e.source,renderer:e.renderer,requestUpdateCallback:t,container:o});this._graphicsViewsFeatureCollectionMap.set(s,e),this.container.addChild(s.container),this.addHandles([p(()=>e.visible,a=>s.container.visible=a,h),p(()=>s.updating,()=>this.notifyChange("updating"),h)],m)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(m);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,r=()=>this.requestUpdate();for(const e of this.layer.sublayers){const o=new c(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const s=new g({view:t,graphics:e.graphics,requestUpdateCallback:r,container:o});this.addHandles([e.on("graphic-update",s.graphicUpdateHandler),p(()=>e.visible,a=>s.container.visible=a,h),p(()=>s.updating,()=>this.notifyChange("updating"),h)],m),this.container.addChild(s.container),i.push(s)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(b);for(const r of this.graphicsViews())r.setHighlight(i.map(e=>({objectId:e,highlightFlags:t})))}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const vt=l;export{vt as default};
