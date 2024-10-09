import { aW as e, aX as y$1, fs as j, aY as c, ft as m, aR as c$1, af as b$1, H as s$1, b2 as d$1 } from './main-D2cJ7bNM.js';
import { a } from './BitmapContainer-jHydsD2s.js';
import { m as m$1, u } from './LayerView-DURcf9g9.js';
import { $ } from './GraphicsView2D-OnH2NJ7_.js';
import { h } from './HighlightGraphicContainer-CWMx3Vzf.js';
import { v } from './ExportStrategy-DeR22a23.js';
import { i } from './RefreshableLayerView-DLh4VD7s.js';
import { U, r } from './drapedUtils-Chlsftom.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-BP5QZwP7.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-qYMnBcJ5.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-DBhxKdTN.js';
import './Program-B2o5QTIO.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-e_PvMuXc.js';
import './Container-CJXKnGG8.js';
import './highlightReasons-Cg0SKt_r.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-BzsD4yK7.js';
import './UpdateTracking2D-CwgEye9r.js';
import './TurboLine-BGtAi1UN.js';
import './GeometryUtils-COso6lit.js';
import './Rect-9uT7dZO1.js';
import './BindType-KnpK3yZX.js';
import './Util-CtKOPbo0.js';
import './constants-C0QDwCF4.js';
import './AttributeStore-DuZKnQhs.js';
import './TimeOnly-b6ti-VMe.js';
import './timeSupport-DrcKBkFm.js';
import './json-Beimr7gP.js';
import './FeatureCommandQueue-BGfCth9r.js';
import './normalizeUtilsSync-D850F96b.js';
import './AGraphicContainer-DRg79E4o.js';
import './TechniqueInstance-B6CMQG-b.js';
import './TileContainer-Bava2Sht.js';
import './vec3f32-CLbqcArJ.js';
import './Bitmap-DkPn0-x1.js';
import './popupUtils-CpVBNih4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
