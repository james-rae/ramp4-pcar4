import{V as m,cU as u,bT as h,aJ as g,aG as c,q as n,u as d,C as _}from"./main-CdIhtOSF.js";import{n as w}from"./CollectionFlattener-CIIavhfx.js";import{c as y,y as f,C as k,T as M,j as V,S as F,w as G}from"./Stop-CXmGf1G0.js";import{j as I,y as v}from"./LayerView-CZPr-VSV.js";import{t as H}from"./GraphicContainer-B0NMoIBf.js";import{F as C}from"./GraphicsView2D-BQMGRvsy.js";import"./preload-helper-ExcqyqRp.js";import"./Container-VurvxIZJ.js";import"./MapView-UasAHzXy.js";import"./Cyclical-Bkirp5_S.js";import"./workers-CMm6V5yi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./TileInfo-qYdaiZI8.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-COiP7qzb.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CM-QEsCI.js";import"./signal-ogpULOU9.js";import"./Map-DKUWZFu0.js";import"./Basemap-CBXQimG5.js";import"./loadAll-Ci6LpPk3.js";import"./PortalItem-cdYEWUwg.js";import"./writeUtils-BAirZmA6.js";import"./compilerUtils-C4GVPLLz.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CEtQ2yPT.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DBF8yaoP.js";import"./Layer-cvHs5bqh.js";import"./TimeExtent-D0MhnQJi.js";import"./GraphicsCollection-CkeFT_xN.js";import"./HeightModelInfo-DTTEyk5D.js";import"./ReactiveMap-Dw-UUYq-.js";import"./Query-sr5_9KZo.js";import"./Field-DaVZknBl.js";import"./fieldType-5Ab7WXr4.js";import"./arcgisLayerUrl-Dt83lcur.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DTSW8hoq.js";import"./TileKey-DLWnnM96.js";import"./QueueProcessor-Cvimwt7a.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-qPTI-JWL.js";import"./normalizeUtilsCommon-BXVb4wIq.js";import"./utils-kWDIrouF.js";import"./utils-DUjqKEgR.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D51l5ngo.js";import"./vec32-BatRAtRG.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BIwfU-T7.js";import"./imageUtils-K0WbGinX.js";import"./capabilities-A2uoe7dc.js";import"./Version-B1o4xmLe.js";import"./ColorBackground-DtkB2Toy.js";import"./parser-BsklBJ1C.js";import"./layerViewUtils-D5m9W0Vr.js";import"./AGraphicContainer-CVJztqAJ.js";import"./TechniqueInstance-Drr4aliE.js";import"./UpdateTracking2D-CReKaHP1.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-CFDHoCG-.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-D6uxnGIZ.js";import"./Program-0KSgZX18.js";import"./BufferObject-CH89vdLU.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-BLI7z0qR.js";import"./WGLContainer-C46aAKJA.js";import"./VertexArrayObject-0zgq10Cr.js";import"./ProgramTemplate-CDufFKL1.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DKHnGSG2.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-DDBklkrg.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-Xx-yI75s.js";import"./FieldsIndex-B-O4mYNl.js";import"./UnknownTimeZone-COaZEnuO.js";import"./OverrideHelper-Cz7iN3Od.js";import"./colorUtils-D0tDVuIw.js";import"./quantizationUtils-BwjzOVpi.js";import"./AttributeStore-Dm_PKbKl.js";import"./TimeOnly-cd2n4C2r.js";import"./timeSupport-BIId3Ed6.js";import"./queryUtils-XQClIT0W.js";import"./json-Wa8cmqdu.js";import"./labelUtils-CTMfEewA.js";import"./diffUtils-Ckw3sVu6.js";import"./normalizeUtilsSync-TDgRtthE.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],s={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof F||t instanceof G}function b(t){return m.isCollection(t)&&t.length&&l(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&l(t[0])}const T=new Set(["default"]);let p=class extends I(v){constructor(){super(...arguments),this._graphics=new m,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new m([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter(({popupTemplate:r})=>!!r)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(e=>this._getNetworkFeatureUid(e)):b(t)?t.map(e=>this._getNetworkFeatureUid(e)).toArray():[t.uid];const r=i.filter(h);return r.length?(this._addHighlight(r),g(()=>this._removeHighlight(r))):g()}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(h).map(o=>this._networkGraphicMap.get(o));if(!r.length)return null;const{layer:e}=this;return r.reverse().map(o=>({type:"route",layer:e,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new H(t.featuresTilingScheme);this._graphicsView=new C({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return U.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return r.symbol==null?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(h));for(const i of t.added)this.addHandles([c(()=>i.geometry,(r,e)=>{this._updateGraphic(i,"geometry",r,e)}),c(()=>i.symbol,(r,e)=>{this._updateGraphic(i,"symbol",r,e)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,e){if(!this._networkFeatureMap.has(t)){const a=this._createGraphic(t);return this._networkFeatureMap.set(t,a),this._networkGraphicMap.set(a,t),void this._graphics.add(a)}const o=this._networkFeatureMap.get(t);o[i]=r,s.graphic=o,s.property=i,s.oldValue=e,s.newValue=r,this._graphicsView.graphicUpdateHandler(s)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=this._getHighlightBits(T);this._graphicsView.setHighlight(t.map(r=>({objectId:r,highlightFlags:i})))}};n([d()],p.prototype,"_graphics",void 0),n([d()],p.prototype,"_routeItems",null),p=n([_("esri.views.2d.layers.RouteLayerView2D")],p);const $i=p;export{$i as default};
