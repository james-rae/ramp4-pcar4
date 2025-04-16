import{q as i,u as a,C as f,V,dD as b,eQ as F,aJ as U,ej as _,n as x,bv as w}from"./main-CdIhtOSF.js";import{j as H,y as I}from"./LayerView-CZPr-VSV.js";import"./preload-helper-ExcqyqRp.js";import"./Container-VurvxIZJ.js";import"./MapView-UasAHzXy.js";import"./Cyclical-Bkirp5_S.js";import"./CollectionFlattener-CIIavhfx.js";import"./workers-CMm6V5yi.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./TileInfo-qYdaiZI8.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-COiP7qzb.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CM-QEsCI.js";import"./signal-ogpULOU9.js";import"./Map-DKUWZFu0.js";import"./Basemap-CBXQimG5.js";import"./loadAll-Ci6LpPk3.js";import"./PortalItem-cdYEWUwg.js";import"./writeUtils-BAirZmA6.js";import"./compilerUtils-C4GVPLLz.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CEtQ2yPT.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DBF8yaoP.js";import"./Layer-cvHs5bqh.js";import"./TimeExtent-D0MhnQJi.js";import"./GraphicsCollection-CkeFT_xN.js";import"./HeightModelInfo-DTTEyk5D.js";import"./ReactiveMap-Dw-UUYq-.js";import"./Query-sr5_9KZo.js";import"./Field-DaVZknBl.js";import"./fieldType-5Ab7WXr4.js";import"./arcgisLayerUrl-Dt83lcur.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DTSW8hoq.js";import"./TileKey-DLWnnM96.js";import"./QueueProcessor-Cvimwt7a.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-qPTI-JWL.js";import"./normalizeUtilsCommon-BXVb4wIq.js";import"./utils-kWDIrouF.js";import"./utils-DUjqKEgR.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D51l5ngo.js";import"./vec32-BatRAtRG.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BIwfU-T7.js";import"./imageUtils-K0WbGinX.js";import"./capabilities-A2uoe7dc.js";import"./Version-B1o4xmLe.js";import"./ColorBackground-DtkB2Toy.js";import"./parser-BsklBJ1C.js";import"./layerViewUtils-D5m9W0Vr.js";const y=Symbol(),O=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=b(async()=>{const{layer:r,parent:s}=this,o=s?.footprintLayerView;let p=[];const d=this._createQuery();if(d&&o){const{features:u}=await o.queryFeatures(d);this.suspended||(p=u.map(h=>r.acquireLayer(h)))}this.removeHandles(y),this.addHandles(p,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(_(this._debouncedUpdate()).catch(r=>{x.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:o},view:{scale:p}}=this;if(!o)return null;const{itemTypeField:d,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:v,orderBy:$}=s,S=w(`${c} IS NULL OR ${p} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${p} >= ${L}`),m=$?.find(l=>l.field&&!l.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=o,t.outFields=[v,u,h],t.where=w(t.where,S),this.unsupportedItemTypes!=null){const l=`${d} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,l)}return m?.field&&(t.orderByFields=[`${m.field} ${m.order==="descending"?"DESC":"ASC"}`],t.outFields.push(m.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};g=i([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const qe=g;export{qe as default};
