const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MediaLayerInteraction-Bh4OhUlh.js","./preload-helper-dJJaZANz.js","./main-jdFDoOPu.js","./main-CRG1_KF0.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { bo as d, h5 as n, h4 as r, cC as d$1, cD as P$1, aO as r$1, h6 as p, h7 as o, G as n$1, s as s$1, cS as p$1, cW as D, cX as m$1, h0 as o$1, bT as r$2, bU as m, bV as a, ez as b$1, a1 as V, hL as A, cz as v$1, cu as p$2, cv as g$1, cw as r$3, kD as s$2, cx as b$2, aA as w$1, bZ as r$4, b8 as u$1, kE as x$1 } from './main-jdFDoOPu.js';
import { j, m as m$2 } from './perspectiveUtils-CZznf46p.js';
import './floatRGBA-DHjcfk0_.js';
import './UpdateTracking2D-nlP-taLY.js';
import './GeometryUtils-BXKvwdJG.js';
import { e as e$1 } from './Container-CGyTFWyQ.js';
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
import './GraphicsView2D-B2PWs52b.js';
import './earcut-Bc6IkkPv.js';
import './vec3f32-0Jah-02g.js';
import { e as e$2 } from './mat3f64-DKAwfC1r.js';
import { f } from './utils-D_lAq_Qg.js';
import { u } from './OverlayContainer-6h9u5hpJ.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import './normalizeUtilsSync-gaQdI-2O.js';
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
import './grouping-DmkkZAiJ.js';
import './layerViewUtils-DUOa5TQu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const x=[1,1],g=e$2(),v={none:d.None,loop:d.Loop,oscillate:d.Oscillate};function b(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?v[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}let q$1 = class q extends e$1{constructor(n$2){super(),this.elementView=n$2,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=n(),this._handles=new r,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([d$1((()=>this.elementView.element.opacity),(e=>this.opacity=e),P$1),d$1((()=>[this.elementView.coords]),(()=>{this.requestRender();}),P$1),d$1((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._handles.remove("play"),this.texture=r$1(this.texture),this.requestRender();}),P$1),p((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&(this._handles.add([o(e.content,"play",(()=>this.requestRender())),o(e.content,"loadeddata",(()=>this.requestRender())),o(e.content,"loaded",(()=>this.requestRender()))]),"requestVideoFrameCallback"in e.content?e.content.requestVideoFrameCallback((()=>this.requestRender())):this._handles.add([o(e.content,"seeked",(()=>this.requestRender()))]),this.requestRender());}),P$1)]),n$2.element.load().catch((t=>{n$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$1("element-load-error","Element cannot be displayed",{element:n$2,error:t}));}));}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=r$1(this.texture);}get textureSize(){return x}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(null!=r){const e=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,s=e?r.naturalWidth:i?r.videoWidth:r.width,n=e?r.naturalHeight:i?r.videoHeight:r.height;if(this._updatePerspectiveTransform(s,n),this.texture)i&&(this.texture.setData(r),this.texture.generateMipmap(),"requestVideoFrameCallback"in r?r.requestVideoFrameCallback((()=>this.requestRender())):r.paused||this.requestRender());else {const e=new p$1;if(e.wrapMode=D.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=s,e.height=n,"getFrame"in r){const i=r=>{this.texture?this.texture.setData(r):this.texture=new m$1(t,e,r),this.requestRender();};"animationOptions"in this.elementView.element&&this._handles.add(f(r,b(this.elementView.element.animationOptions),null,i),"play");}else this.texture=new m$1(t,e,r);this.texture.generateMipmap(),i&&("requestVideoFrameCallback"in r?r.requestVideoFrameCallback((()=>this.requestRender())):r.paused||this.requestRender());}}super.beforeRender(e);}_createTransforms(){return null}draw(e,t){this.isReady&&null!=this.texture?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:x,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender();}updateDrawCoords(e,t,r,i){const{coords:s,bounds:n}=this.elementView;if(null==s||null==n)return;const[o,a,l,d]=s.rings[0],m=this._vertices,{x:h,y:p}=e;m.set([a[0]-h,a[1]-p,o[0]-h,o[1]-p,l[0]-h,l[1]-p,d[0]-h,d[1]-p]);let u=t;if(i){const[e,,t]=n,{worldWidth:r,xBounds:s}=i,[o,a]=s;e<o&&t>o?u=r:t>a&&e<a&&(u=-r);}this.wrapAroundShift=u,this.isWrapAround=0!==u;}_updatePerspectiveTransform(e,t){const r=this._vertices;j(g,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),o$1(this.perspectiveTransform,g[6]/g[8]*e,g[7]/g[8]*t);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e=class extends b$1{constructor(){super(...arguments),this.tool="transform";}};r$2([m()],e.prototype,"tool",void 0),e=r$2([a("esri.views.3d.layers.support.MediaLayerInteractionOptions")],e);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s=s=>{let i=class extends s{constructor(...e$1){super(...e$1),this.layer=null,this.interactive=!1,this.interactionOptions=new e,this.selectedElement=null;}};return r$2([m()],i.prototype,"layer",void 0),r$2([m()],i.prototype,"interactive",void 0),r$2([m()],i.prototype,"interactionOptions",void 0),r$2([m()],i.prototype,"selectedElement",void 0),i=r$2([a("esri.views.layers.MediaLayerView")],i),i};

let G=class extends(j$1(s(y$1))){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new V;}initialize(){this.addHandles([d$1((()=>[this.interactive,this.suspended]),(async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await __vitePreload(() => import('./MediaLayerInteraction-Bh4OhUlh.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions);}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive);}),A),d$1((()=>this.interactionOptions),(e=>{this._interaction&&(this._interaction.options=e);}),A),d$1((()=>this.selectedElement),(e=>{this._interaction&&(this._interaction.selectedElement=e);}),A)]);}attach(){this.addAttachHandles([v$1((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate();})),v$1((()=>this.layer.effectiveSource),"change",(({element:e})=>this._elementUpdateHandler(e)))]),this._overlayContainer=new u,this.container.addChild(this._overlayContainer),this._fetchQueue=new p$2({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:g$1.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new r$3({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy();}supportsSpatialReference(e){return !0}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e);}async hitTest(e,t){const i=[],r=e.normalize(),s=[r.x,r.y];for(const{elementView:{normalizedCoords:o,element:n}}of this._elementReferences.values())null!=o&&s$2(o.rings,s)&&i.push({type:"media",element:n,layer:this.layer,mapPoint:e,sourcePoint:n.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)));}_acquireTile(e){const t=new C(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,r]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,r),this.requestUpdate();}),(e=>{b$2(e)||n$1.getLogger(this).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return [];this.view.featuresTilingScheme.getTileBounds(S,e,!0);const r=new w$1({xmin:S[0],ymin:S[1],xmax:S[2],ymax:S[3],spatialReference:this.view.spatialReference});return i.queryElements(r,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i);}_referenceElement(e,i){r$4(this._elementReferences,i.uid,(()=>{const e=new m$2({element:i,spatialReference:this.view.spatialReference}),s=new q$1(e);return this._overlayContainer.addChild(s),this.elements.add(i),this._updatingHandles.addPromise(i.load().catch((e=>{n$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$1("element-load-error","Element cannot be displayed",{element:i,error:e}));}))),{debugGraphic:null,elementView:e,overlay:s,tiles:new Set}})).tiles.add(e);}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i);}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic));}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const i=t.elementView.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const r=[],s=[];for(const e of this._tileStrategy.tiles){const o=R(this.view.featuresTilingScheme,e,i);t.tiles.has(e)?o||s.push(e):o&&r.push(e);}for(const t of r)this._referenceElement(t,e);for(const t of s)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new m$2({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=i)for(const r of this._tileStrategy.tiles){R(this.view.featuresTilingScheme,r,i)&&this._referenceElement(r,e);}}};r$2([m()],G.prototype,"layer",void 0),r$2([m({readOnly:!0})],G.prototype,"elements",void 0),G=r$2([a("esri.views.2d.layers.MediaLayerView2D")],G);const S=u$1(),q={xmin:0,ymin:0,xmax:0,ymax:0};function R(e,t,i){return e.getTileBounds(S,t.key,!0),q.xmin=S[0],q.ymin=S[1],q.xmax=S[2],q.ymax=S[3],x$1(q,i)}class C{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const r of e)i.has(r)?i.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const T=G;

export { T as default };
