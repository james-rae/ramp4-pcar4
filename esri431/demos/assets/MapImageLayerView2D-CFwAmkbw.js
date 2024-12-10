import { bT as r, bU as m, bV as a, gZ as y$1, cs as c$1, cx as b$1, G as n$1, cC as d$1 } from './main-jdFDoOPu.js';
import { a as a$1 } from './BitmapContainer-BDMgPT19.js';
import { j as j$1, y as y$2 } from './LayerView-BOLJrt05.js';
import { F } from './GraphicsView2D-B2PWs52b.js';
import { h } from './HighlightGraphicContainer-B125ip_k.js';
import { _ } from './ExportStrategy-_Kj4mn_J.js';
import { i as i$1 } from './timeSupport-D_mI4xo9.js';
import { i as i$2 } from './RefreshableLayerView-BHga9aHT.js';
import { R } from './MapServiceLayerViewHelper-Yw6q2-lj.js';
import { r as r$1 } from './drapedUtils-CLmhxB3T.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-BUclEOgO.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './VertexArrayObject-DvEAXDKn.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './vec3f32-0Jah-02g.js';
import './Container-CGyTFWyQ.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';
import './layerViewUtils-DUOa5TQu.js';
import './UpdateTracking2D-nlP-taLY.js';
import './BidiEngine-SYarjht-.js';
import './GeometryUtils-BXKvwdJG.js';
import './Rect--0fzStUh.js';
import './BindType-DC_OuQGA.js';
import './Util-BoF0V3b-.js';
import './AttributeStore-mPOB5I49.js';
import './TimeOnly-CWeyHmrP.js';
import './timeSupport-B-_28reI.js';
import './FeatureCommandQueue-BYG4gPcz.js';
import './constants-D-RiuwZo.js';
import './normalizeUtilsSync-gaQdI-2O.js';
import './AGraphicContainer-CLc90K_e.js';
import './TechniqueInstance-Samk-rXg.js';
import './TileContainer-BA3pMXmd.js';
import './Bitmap-DL72MdPx.js';
import './languageUtils-B9ynR-fa.js';
import './ImmutableArray-JzRZGad4.js';
import './shared-DTvdxlgz.js';
import './number-CjhpDVXB.js';
import './popupUtils-BdW6RFNo.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=i=>{let p=class extends i{initialize(){this.exportImageParameters=new y$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return i$1(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return r([m()],p.prototype,"exportImageParameters",void 0),r([m({readOnly:!0})],p.prototype,"floors",null),r([m({readOnly:!0})],p.prototype,"exportImageVersion",null),r([m()],p.prototype,"layer",void 0),r([m()],p.prototype,"suspended",void 0),r([m({readOnly:!0})],p.prototype,"timeExtent",null),p=r([a("esri.views.layers.MapImageLayerView")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let y=class extends(i(i$2(j$1(y$2)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._highlightView=new F({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(t,e)=>r$1(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([m()],y.prototype,"strategy",void 0),r([m()],y.prototype,"updating",void 0),y=r([a("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
