import{aF as w,bf as y,E as o,n as I,k as n,o as g,A as V}from"./main-umVzVZ3H.js";import{c as H}from"./GraphicsCollection-BcAouK8f.js";import"./colorUtils-B3kUF-MB.js";import"./utils-SPbpQbmm.js";import"./enums-CpSG_SL3.js";import"./floatRGBA-CZBv6qO6.js";import"./definitions-DJSdSb77.js";import"./UpdateTracking2D-mkJIAtL7.js";import"./GeometryUtils-KoUEGN6g.js";import"./vec2f32-CVhmN3Me.js";import"./OverrideHelper-BjfQ4rSH.js";import"./Container-DpsJNbhQ.js";import"./MapView-CX6kerzV.js";import"./WGLContainer-BPmhkemP.js";import"./Texture-DX-fpjig.js";import"./enums-DBi1-Mm2.js";import"./Program-DOsQnp_f.js";import"./LabelMetric-Bc9bIJDn.js";import"./StyleDefinition-Ct4HIk9T.js";import"./enums-qHpGJ28Q.js";import"./GridShader-Dy1BMyF8.js";import"./pbf-CwLQPFQS.js";import"./FeatureCommandQueue-CVswOCln.js";import"./PieChartMeshWriter-QEtm_4_v.js";import"./renderState-Dap0WV9P.js";import"./interfaces-DN2-jsJC.js";import"./testSVGPremultipliedAlpha-CPNX9gUH.js";import{F as v}from"./GraphicsView2D-DKvTYNcA.js";import"./earcut-XDcq3zAf.js";import"./vec3f32-BS0cezmI.js";import"./normalizeUtilsCommon-CKafXCAk.js";import"./UpdatingHandles-Dtcjkycq.js";import"./projectBuffer-C4EMD_TQ.js";import{r as T,o as u,n as f}from"./imageUtils-5Mh97tjW.js";import{j as q,y as U}from"./LayerView-DFxYTFQ3.js";import{h as C}from"./HighlightGraphicContainer-BXWbwbYX.js";import{h as b,p as Q,r as S}from"./Tile-FF85J6v6.js";import{e as d}from"./TileKey-B-oRAjmV.js";import{i as F}from"./RefreshableLayerView-CcKVU3Vc.js";import{_ as P,R as k}from"./MapServiceLayerViewHelper-D-0Q9KT1.js";import{r as E}from"./drapedUtils-CAJut3I9.js";import{g as L}from"./Scheduler-B24Zhu38.js";const A=[0,0];let a=class extends F(T(q(U))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new H,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new b(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,s)=>this.fetchTile(i,s),scheduler:this.scheduler,priority:L.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new S({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),P(this,this.layer)){const i=this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k({createFetchPopupFeaturesQueryGeometry:(s,h)=>E(s,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(s,h)=>{i.graphicUpdateHandler({graphic:s,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):w()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return y(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(A,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:s,resamplingLevel:h=0}=t;if(!i)try{return await this._fetchImage(e,s)}catch(r){if(!o(r)&&!this.resampling)return u(this._tileInfoView.tileInfo.size);if(h<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const m=new d(c),_=await this.fetchTile(m,{...t,resamplingLevel:h+1});return f(this._tileInfoView,_,m,e)}}throw r}const l=new d(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),!this.resampling&&l.level!==e.level)return u(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,s)}catch(r){if(o(r))throw r;return u(this._tileInfoView.tileInfo.size)}return this.resampling?f(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||I.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([V("esri.views.2d.layers.TileLayerView2D")],a);const z=a;export{z as default};