import{a7 as g,bh as w,U as n,a5 as y,n as I,x as c,z as f,K as T}from"./main-DZMdXZ8-.js";import{c as V}from"./GraphicsCollection-BEOs2L8s.js";import"./colorUtils-BLT_0YbP.js";import"./defaultCIMValues-DUAYza-o.js";import"./enums-DxQQJdPW.js";import"./floatRGBA-CtatqtDS.js";import"./definitions-CBIQmVpq.js";import"./UpdateTracking2D-D6PuhIJZ.js";import"./GeometryUtils-xSad-1_W.js";import"./vec2f32-CVhmN3Me.js";import"./OverrideHelper-BqpcWnqz.js";import"./Container-B7RYlw65.js";import{u as H}from"./MapView-BOxwLRAa.js";import"./WGLContainer-BDBs2IMd.js";import"./enums-DBi1-Mm2.js";import"./Texture-C9phCDgS.js";import"./Utils-D7wkBPaj.js";import"./StyleDefinition-BC-vhS9a.js";import"./enums-qHpGJ28Q.js";import"./GridShader-DqRMlKtM.js";import"./pbf-CHn1bxpl.js";import"./TechniqueType-GommNIdJ.js";import"./FramebufferObject-BZrv9O7A.js";import"./FeatureCommandQueue-CFAeKH3E.js";import"./PieChartMeshWriter-ByiqbNdE.js";import"./renderState-eEtyJpmy.js";import"./glsl-o28TenZV.js";import"./testSVGPremultipliedAlpha-C0w6a4_1.js";import{A as v}from"./GraphicsView2D-CNefVh93.js";import"./earcut-XDcq3zAf.js";import"./vec3f32-BS0cezmI.js";import"./normalizeUtilsCommon-ByHC0qdf.js";import"./UpdatingHandles-CNYH3nQl.js";import"./projectBuffer-BDDtTR8S.js";import{r as C,o as p,n as d}from"./imageUtils-BSokxMff.js";import{S as U,y as q}from"./LayerView-BQYKry8N.js";import{h as b}from"./HighlightGraphicContainer-DN57gHSK.js";import{h as S,p as Q,r as G}from"./Tile-BFOIEFmi.js";import{e as _}from"./TileKey-0fr9RTWT.js";import{i as L}from"./RefreshableLayerView-D5evyhSJ.js";import{P,S as k}from"./MapServiceLayerViewHelper-DnejEylY.js";import{r as z}from"./drapedUtils-1FchwV6u.js";import{c as F}from"./HighlightDefaults-DSw1bc-y.js";import{g as A}from"./Scheduler-mUDFHWi5.js";const E=[0,0];let l=class extends L(C(U(q))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new V,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new S(this.layer.tileInfo,this.layer.fullExtent,i?.effectiveMinLOD,i?.effectiveMaxLOD),this._fetchQueue=new Q({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,h)=>this.fetchTile(t,h),scheduler:this.scheduler,priority:A.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new G({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),P(this,this.layer)){const t=this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new b(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k({createFetchPopupFeaturesQueryGeometry:(h,s)=>z(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{t.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,i):[]}highlight(e,i){const t=H(e);if(t.length===0)return g();const h=i?.name??F;return this._addHighlightGraphics(t,h),g(()=>!this.destroyed&&this._removeHighlightGraphics(t,h))}_processHighlight(){const e=this._getHighlights();this._highlightView?.setHighlight(e)}_addHighlightGraphics(e,i){this._highlightGraphics.addMany(e),this._addHighlights(e.map(t=>t.uid),i)}_removeHighlightGraphics(e,i){this._highlightGraphics.removeMany(e),this._removeHighlights(e.map(t=>t.uid),i)}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return w(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const i=this._bitmapView.createTile(e),t=i.bitmap;return[t.x,t.y]=this._tileInfoView.getTileCoords(E,i.key),t.resolution=this._tileInfoView.getTileResolution(i.key),[t.width,t.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,i={}){return this.tilemapCache?this._fetchTileWithTilemapCache(e,i):this._fetchTileWithoutTilemapCache(e,i)}async _fetchTileWithoutTilemapCache(e,i={}){const{signal:t,resamplingLevel:h=0}=i;try{return await this._fetchImage(e,t)}catch(s){if(n(s))throw s;if(!this.resampling)return p(this._tileInfoView.tileInfo.size);if(h<3){const r=this._tileInfoView.getTileParentId(e.id);if(r){const a=new _(r),o=await this._fetchTileWithoutTilemapCache(a,{...i,resamplingLevel:h+1});return d(this._tileInfoView,o,a,e)}}return p(this._tileInfoView.tileInfo.size)}}async _fetchTileWithTilemapCache(e,i={}){const t=this.tilemapCache,{signal:h,resamplingLevel:s=0}=i,r=new _(0,0,0,0);let a,o=null;try{if(o=await t.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:h}),!this.resampling&&r.level!==e.level)return await y(i),p(this._tileInfoView.tileInfo.size);a=await this._fetchImage(r,h)}catch(m){if(n(m))throw m;if(this.resampling&&o==="unknown"&&s<3){const u=this._tileInfoView.getTileParentId(e.id);if(u){r.set(u);try{a=await this._fetchTileWithTilemapCache(r,{...i,resamplingLevel:s+1})}catch{}}}}return a?this.resampling?d(this._tileInfoView,a,r,e):a:p(this._tileInfoView.tileInfo.size)}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const i=await this._fetchQueue.push(e.key);e.bitmap.source=i,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(i){n(i)||I.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(e,i){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:i})}};c([f()],l.prototype,"resampling",null),c([f()],l.prototype,"tilemapCache",null),l=c([T("esri.views.2d.layers.TileLayerView2D")],l);const W=l;export{W as default};
