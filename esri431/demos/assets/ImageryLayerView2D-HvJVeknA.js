import { bT as r, bU as m$2, bV as a, ez as b$1, cx as b$2, G as n$2, a2 as d$1, m3 as M, aQ as E, fy as k, aA as w$1, m4 as m$3, iL as f$2, cC as d$3, hL as A, U, ch as c$1, s, J as s$1, fV as b$3, D as j$1, cs as c$2, f9 as C$1, a1 as V, bn as e, Q as has } from './main-jdFDoOPu.js';
import { d as d$2, f as f$1, a as d$4 } from './RasterVFDisplayObject-C9ek2twu.js';
import { j as j$2, y as y$1 } from './LayerView-BOLJrt05.js';
import { F } from './GraphicsView2D-B2PWs52b.js';
import { h } from './HighlightGraphicContainer-B125ip_k.js';
import { a as a$1 } from './BitmapContainer-BDMgPT19.js';
import { n as n$1 } from './Container-CGyTFWyQ.js';
import { l } from './Bitmap-DL72MdPx.js';
import { _ } from './ExportStrategy-_Kj4mn_J.js';
import { K } from './rasterProjectionHelper-hno-QnhH.js';
import { n } from './WGLContainer-BUclEOgO.js';
import { i } from './timeSupport-D_mI4xo9.js';
import { p as p$1 } from './popupUtils-BdW6RFNo.js';
import { i as i$1 } from './RefreshableLayerView-BHga9aHT.js';
import './preload-helper-dJJaZANz.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexArrayObject-DvEAXDKn.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
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
import './vec3f32-0Jah-02g.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m$1=class m extends b$1{constructor(){super(...arguments),this.attached=!1,this.container=new n$1,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{b$2(t)||n$2.getLogger(this).error(t);}));}hitTest(t){return new d$1({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new _({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...i,extent:e.extent};})).catch((t=>{b$2(t)||n$2.getLogger(this).error(t);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return {extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=M(i,e);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=t=>this.layer.applyFilter(t),o}};r([m$2()],m$1.prototype,"attached",void 0),r([m$2()],m$1.prototype,"container",void 0),r([m$2()],m$1.prototype,"layer",void 0),r([m$2()],m$1.prototype,"strategy",void 0),r([m$2()],m$1.prototype,"timeExtent",void 0),r([m$2()],m$1.prototype,"view",void 0),r([m$2()],m$1.prototype,"updateRequested",void 0),r([m$2()],m$1.prototype,"updating",null),r([m$2()],m$1.prototype,"type",void 0),m$1=r([a("esri.views.2d.layers.imagery.ImageryView2D")],m$1);const d=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t extends n{constructor(){super(...arguments),this.symbolTypes=["triangle"];}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$2],target:()=>this.children,drawPhase:E.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===E.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends b$1{constructor(e){super(e),this._loading=null,this.update=k(((e,t)=>this._update(e,t).catch((e=>{b$2(e)||n$2.getLogger(this).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:o}=e.state,s=new w$1({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:o}),[a,l]=e.state.size;this._loading=this.fetchPixels(s,a,l,i);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,i){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:o}=e,s=new f$1(o);s.offset=[0,0],s.symbolizerParameters=t,s.rawPixelData=e,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=o.width*t.symbolTileSize,s.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(s);}};r([m$2()],c.prototype,"fetchPixels",void 0),r([m$2()],c.prototype,"container",void 0),r([m$2()],c.prototype,"_loading",void 0),r([m$2()],c.prototype,"updating",null),c=r([a("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class extends b$1{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:o,width:n,height:l}=m$3(t,e,r,a,s);if(null!=s&&!s.intersects(t))return {extent:o,pixelBlock:null};const m={bbox:`${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===m.bbox)return t}}const{pixelData:c}=await this.layer.fetchImage(o,n,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=m;const p=c?.pixelBlock;if(null==p)return {extent:o,pixelBlock:null};return {extent:o,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?f$2(p,"vector-uv"):p}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new p({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(d$3((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),A),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new d$1({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch((t=>{b$2(t)||n$2.getLogger(this).error(t);}));}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return K(this.layer.fullExtent,t)}catch(e){try{const e=(await U(this.layer.url,{query:{option:"footprints",outSR:c$1(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?w$1.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};r([m$2()],f.prototype,"attached",void 0),r([m$2()],f.prototype,"container",void 0),r([m$2()],f.prototype,"layer",void 0),r([m$2()],f.prototype,"timeExtent",void 0),r([m$2()],f.prototype,"type",void 0),r([m$2()],f.prototype,"view",void 0),r([m$2()],f.prototype,"updating",null),f=r([a("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=m=>{let u=class extends m{constructor(){super(...arguments),this.view=null;}get timeExtent(){return i(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,o){const{layer:s$2}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$2});const{popupEnabled:p}=s$2,m=p$1(s$2,o);if(!p||null==m)return [];const u=await m.getRequiredFields();s$1(o);const c=new b$3;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=u,c.outSpatialReference=e.spatialReference;const{resolution:l,spatialReference:y}=this.view,h="2d"===this.view.type?new j$1(l,l,y):new j$1(.5*l,.5*l,y),{returnTopmostRaster:d,showNoDataRecords:f}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:h,showNoDataRecords:f,signal:o?.signal};return s$2.queryVisibleRasters(c,w).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return r([m$2()],u.prototype,"layer",void 0),r([m$2()],u.prototype,"suspended",void 0),r([m$2({readOnly:!0})],u.prototype,"timeExtent",null),r([m$2()],u.prototype,"view",void 0),u=r([a("esri.views.layers.ImageryLayerView")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let v=class extends(m(i$1(j$2(y$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c$2,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new F({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([d$3((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),C$1),d$3((()=>this.timeExtent),(e=>{const{subview:i}=this;i&&(i.timeExtent=e,"redraw"in i?this.requestUpdate():i.redrawOrRefetch());}),C$1),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),d$3((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e$1,s){if(!((Array.isArray(e$1)?e$1[0]:V.isCollection(e$1)?e$1.at(0):e$1)instanceof d$1))return e();let a=[];return Array.isArray(e$1)||V.isCollection(e$1)?a=e$1.map((e=>e.clone())):e$1 instanceof d$1&&(a=[e$1.clone()]),this._highlightGraphics.addMany(a),e((()=>this._highlightGraphics.removeMany(a)))}async doRefresh(){this.requestUpdate();}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return has("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new d({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0));}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};r([m$2()],v.prototype,"pixelData",null),r([m$2()],v.prototype,"subview",void 0),v=r([a("esri.views.2d.layers.ImageryLayerView2D")],v);const b=v;

export { b as default };
