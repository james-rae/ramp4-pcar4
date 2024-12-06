import { cs as c$1, ct as h, cu as p, cv as g, cw as r$1, bn as e, a6 as s, cx as b$1, cy as e$1, G as n$1, bT as r$3, bU as m, bV as a } from './main-jdFDoOPu.js';
import './floatRGBA-DHjcfk0_.js';
import './UpdateTracking2D-nlP-taLY.js';
import './GeometryUtils-BXKvwdJG.js';
import './Container-CGyTFWyQ.js';
import './WGLContainer-BUclEOgO.js';
import './Program-DyGm5N0S.js';
import './LabelMetric-25hMjtqs.js';
import './StyleDefinition-ty_7nEaL.js';
import './enums-Bif2192J.js';
import './GridShader-DddMQQlP.js';
import './FeatureCommandQueue-BYG4gPcz.js';
import './PieChartMeshWriter-DajPcY1S.js';
import './renderState-C20Rdq9l.js';
import './interfaces-Cp1cox0n.js';
import './testSVGPremultipliedAlpha-DxUufaeQ.js';
import { F } from './GraphicsView2D-B2PWs52b.js';
import './earcut-Bc6IkkPv.js';
import './vec3f32-0Jah-02g.js';
import { r, o, n } from './imageUtils-HL0392Aw.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import { h as h$1 } from './HighlightGraphicContainer-B125ip_k.js';
import { i } from './RefreshableLayerView-BHga9aHT.js';
import { _, R } from './MapServiceLayerViewHelper-Yw6q2-lj.js';
import { r as r$2 } from './drapedUtils-CLmhxB3T.js';
import './preload-helper-dJJaZANz.js';
import './BidiEngine-SYarjht-.js';
import './Rect--0fzStUh.js';
import './BindType-DC_OuQGA.js';
import './Util-BoF0V3b-.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexArrayObject-DvEAXDKn.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './config-BgJsIw3n.js';
import './CircularArray-DyZiGQlG.js';
import './AttributeStore-mPOB5I49.js';
import './TimeOnly-CWeyHmrP.js';
import './timeSupport-B-_28reI.js';
import './constants-D-RiuwZo.js';
import './TurboLine-D-QaGAkL.js';
import './basicInterfaces-Cirm-D74.js';
import './normalizeUtilsSync-gaQdI-2O.js';
import './Bitmap-DL72MdPx.js';
import './TileContainer-BA3pMXmd.js';
import './layerViewUtils-DUOa5TQu.js';
import './AGraphicContainer-CLc90K_e.js';
import './TechniqueInstance-Samk-rXg.js';
import './languageUtils-B9ynR-fa.js';
import './ImmutableArray-JzRZGad4.js';
import './shared-DTvdxlgz.js';
import './number-CjhpDVXB.js';
import './popupUtils-BdW6RFNo.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const V=[0,0];let G=class extends(i(r(j$1(y$1)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c$1,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t),scheduler:this.scheduler,priority:g.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),_(this,this.layer)){const e=this._highlightView=new F({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h$1(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$2(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this._updatingHandles});}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e$1){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e$1):e()}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return s(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))));}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(V,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:r,resamplingLevel:o$1=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(n$1){if(!b$1(n$1)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:o$1+1});return n(this._tileInfoView,r,s,e)}}throw n$1}const l=new e$1(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),!this.resampling&&l.level!==e.level)return o(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r);}catch(n){if(b$1(n))throw n;return o(this._tileInfoView.tileInfo.size)}return this.resampling?n(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){b$1(t)||n$1.getLogger(this).error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};r$3([m()],G.prototype,"resampling",null),r$3([m()],G.prototype,"tilemapCache",null),G=r$3([a("esri.views.2d.layers.TileLayerView2D")],G);const I=G;

export { I as default };
