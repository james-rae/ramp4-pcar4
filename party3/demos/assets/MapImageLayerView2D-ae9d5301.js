import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-7c18c46c.js';
import { a } from './BitmapContainer-594b23ce.js';
import { m as m$1, u } from './LayerView-f7bb2890.js';
import { $ } from './GraphicsView2D-2fa45f57.js';
import { h } from './HighlightGraphicContainer-51df07ea.js';
import { v } from './ExportStrategy-9d1fc06e.js';
import { i } from './RefreshableLayerView-a9916ae6.js';
import { U, r } from './drapedUtils-9cf7332c.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-6ad8196e.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-88857f35.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-d232caf5.js';
import './Program-1dd417aa.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-6ca4bbed.js';
import './Container-3910e97b.js';
import './highlightReasons-2396947d.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-73ef781d.js';
import './UpdateTracking2D-1ac0e8f2.js';
import './TurboLine-56638b44.js';
import './GeometryUtils-8854b19d.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-cf848e37.js';
import './constants-412c3a33.js';
import './AttributeStore-bee2d1ce.js';
import './TimeOnly-7876ea04.js';
import './timeSupport-4712bb8e.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-248d98f9.js';
import './normalizeUtilsSync-ec4dc603.js';
import './AGraphicContainer-49194ecb.js';
import './TechniqueInstance-c6a1b6f4.js';
import './TileContainer-23d17761.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-2bfa75c2.js';
import './popupUtils-bd3ff69e.js';

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
