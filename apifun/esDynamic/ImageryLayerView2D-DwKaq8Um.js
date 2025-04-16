import{x as a,z as n,K as x,aL as R,U as f,n as b,b4 as _,e4 as T,bz as E,aM as P,dm as F,a2 as A,by as U,s as C,T as H,bC as S,aH as q,V as D,a7 as V,b$ as $,aY as L}from"./main-DeRV24Di.js";import{c as M}from"./GraphicsCollection-CpIg1SBz.js";import{d as O,f as G,a as j}from"./RasterVFDisplayObject-FI6LGLKF.js";import{S as N,y as J}from"./LayerView-BxXRbEg_.js";import{A as W}from"./GraphicsView2D-Z6rnnVfh.js";import{h as K}from"./HighlightGraphicContainer-DFGEWApQ.js";import{M as Y,m as Q,f as X}from"./dataUtils-DUgkUnhn.js";import{r as Z}from"./BitmapContainer-Dgy4qmej.js";import{n as ee}from"./Container-DEm-wcU8.js";import{l as te}from"./BitmapTechnique-BxDQIB_e.js";import{_ as ie}from"./ExportStrategy-n_Yz7Vto.js";import{V as se,j as re,O as ae}from"./rasterProjectionHelper-CeJsLRny.js";import{E as B}from"./MapView-DhGV5yf-.js";import{n as ne}from"./WGLContainer-BdpTDWrW.js";import{i as oe}from"./timeSupport-DGKOX5Uv.js";import{b as he}from"./Query-ot-GJVWV.js";import{p as le}from"./popupUtils-9REljG2c.js";import{i as ce}from"./RefreshableLayerView-6a9u_Mvr.js";import{c as pe}from"./HighlightDefaults-Cl_j1T-N.js";let l=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ee,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{f(t)||b.getLogger(this).error(t)})}hitTest(e){return new _({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new ie({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=s=>this.layer.pixelFilter?this.layer.applyFilter(s):{...i,extent:t.extent}}).catch(e=>{f(e)||b.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(t)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),s=Y(i,t);return s!=null?{extent:s.extent,pixelBlock:s.pixelBlock}:null}return null}async _fetchImage(e,t,i,s){(s=s||{}).timeExtent=this.timeExtent,s.requestAsImageElement=!0,s.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,s);if(r.imageBitmap)return r.imageBitmap;const o=await this.layer.applyRenderer(r.pixelData,{signal:s.signal}),h=new te(o.pixelBlock,o.extent?.clone(),r.pixelData.pixelBlock);return h.filter=m=>this.layer.applyFilter(m),h}};a([n()],l.prototype,"attached",void 0),a([n()],l.prototype,"container",void 0),a([n()],l.prototype,"layer",void 0),a([n()],l.prototype,"strategy",void 0),a([n()],l.prototype,"timeExtent",void 0),a([n()],l.prototype,"view",void 0),a([n()],l.prototype,"updateRequested",void 0),a([n()],l.prototype,"updating",null),a([n()],l.prototype,"type",void 0),l=a([x("esri.views.2d.layers.imagery.ImageryView2D")],l);const de=l;class ue extends ne{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[O],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=T((t,i)=>this._update(t,i).catch(s=>{f(s)||b.getLogger(this).error(s)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:s,spatialReference:r}=e.state,o=new E({xmin:s.xmin,ymin:s.ymin,xmax:s.xmax,ymax:s.ymax,spatialReference:r}),[h,m]=e.state.size;this._loading=this.fetchPixels(o,h,m,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(h=>h.destroy()),void this.container.removeAllChildren();const{extent:s,pixelBlock:r}=e,o=new G(r);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=s.xmin,o.y=s.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=r.width*t.symbolTileSize,o.height=r.height*t.symbolTileSize,this.container.children.forEach(h=>h.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};a([n()],y.prototype,"fetchPixels",void 0),a([n()],y.prototype,"container",void 0),a([n()],y.prototype,"_loading",void 0),a([n()],y.prototype,"updating",null),y=a([x("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const me=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ue,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,s)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:h,width:m,height:p}=Q(e,t,i,o,r);if(r!=null&&!r.intersects(e))return{extent:h,pixelBlock:null};const d={bbox:`${h.xmin}, ${h.ymin}, ${h.xmax}, ${h.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:v}=await this.layer.fetchImage(h,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:s});this._dataParameters=d;const g=v?.pixelBlock;return g==null?{extent:h,pixelBlock:null}:{extent:h,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?X(g,"vector-uv"):g}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new me({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(P(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),F),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new _({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{f(t)||b.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,s=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&s&&r}async _getProjectedFullExtent(e){try{return se(this.layer.fullExtent,e)}catch{try{const t=(await A(this.layer.url,{query:{option:"footprints",outSR:U(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?E.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){e?.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([n()],c.prototype,"attached",void 0),a([n()],c.prototype,"container",void 0),a([n()],c.prototype,"layer",void 0),a([n()],c.prototype,"timeExtent",void 0),a([n()],c.prototype,"type",void 0),a([n()],c.prototype,"view",void 0),a([n()],c.prototype,"updating",null),c=a([x("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const ye=c,ge=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return oe(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,s){const{layer:r}=this;if(!i)throw new C("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:o}=r,h=le(r,s);if(!o||h==null)return[];const m=await h.getRequiredFields();H(s);const p=new he;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=m,p.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:v}=this.view,g=this.view.type==="2d"?new S(d,d,v):new S(.5*d,.5*d,v),{returnTopmostRaster:u,showNoDataRecords:k}=h.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},z={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:g,showNoDataRecords:k,signal:s?.signal};return r.queryVisibleRasters(p,z).then(I=>I)}async getSourceScale(){return await re(),await this.layer.load(),ae(this.layer.serviceRasterInfo,this.view.spatialReference)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return a([n()],t.prototype,"layer",void 0),a([n()],t.prototype,"suspended",void 0),a([n({readOnly:!0})],t.prototype,"timeExtent",null),a([n()],t.prototype,"view",void 0),t=a([x("esri.views.layers.ImageryLayerView")],t),t};let w=class extends ge(ce(N(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new M,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([P(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},q),P(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},q),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),P(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:D.isCollection(e)?e.at(0):e)instanceof _))return V();let i=[];if(Array.isArray(e)||D.isCollection(e)?i=e.map(r=>r.clone()):e instanceof _&&(i=[e.clone()]),!i?.filter($)?.length)return V();const s=t?.name??pe;return this._addHighlightGraphics(i,s),V(()=>!this.destroyed&&this._removeHighlightGraphics(i,s))}_addHighlightGraphics(e,t){this._highlightGraphics.addMany(e),this._addHighlights(e.map(i=>i.uid),t)}_removeHighlightGraphics(e,t){this._highlightGraphics.removeMany(e),this._removeHighlights(e.map(i=>i.uid),t)}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return L("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`),e}_processHighlight(){const e=this._getHighlights();this._highlightView?.setHighlight(e)}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:i}=this.subview;if(i===t)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=t==="imagery"?new de({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ye({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([n()],w.prototype,"pixelData",null),a([n()],w.prototype,"subview",void 0),w=a([x("esri.views.2d.layers.ImageryLayerView2D")],w);const xe=w;export{xe as default};
