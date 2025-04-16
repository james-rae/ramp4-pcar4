import{f8 as I,aH as X,d1 as b,f9 as Y,cO as k,bI as B,fa as V,by as z,aE as J,b1 as v,du as K,dr as q,dt as R,E as U,aG as M,q as C,u as $,C as N}from"./main-CUxU9bWS.js";import Q from"./GraphicsLayer-CAJ20FIa.js";import{l as W}from"./TelemetryDisplay-CINhzVTJ.js";import{u as Z}from"./OverlayContainer-DoLt4MS9.js";import{n as tt}from"./vec2f64-B7N_6o8F.js";import{K as g}from"./projection-BIYcHcNR.js";import{e as et}from"./Container-C7mjs0vM.js";import{a as it,j as rt,y as st}from"./LayerView-D_4KcN__.js";import{D as ot}from"./enums-Dk3osxpS.js";import{p as nt,m as at}from"./Texture-DNIxGOOy.js";import{t as lt}from"./GraphicContainer-C8IlUGdO.js";import{F as mt}from"./GraphicsView2D-BshY6eNS.js";import"./preload-helper-ExcqyqRp.js";import"./GraphicsCollection-dYEmqNuB.js";import"./Layer-VQ4_KGgj.js";import"./BlendLayer-CRA6VAX4.js";import"./jsonUtils-aqm3pfo-.js";import"./parser-D_L7gZcx.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DSQ66VqF.js";import"./common-DQOJ18NT.js";import"./ScaleRangeLayer-B2dXyvbe.js";import"./ElevationInfo-M4dU7fC5.js";import"./lengthUtils-D1bX0TD8.js";import"./mat3-XZDRtl20.js";import"./MapView-C80OvaVE.js";import"./Cyclical-BRtivmO1.js";import"./CollectionFlattener-CE6YYo8f.js";import"./workers-7zdfU5xG.js";import"./TileInfo-DJ4jjAIs.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DFPvIuq9.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DKBfkAng.js";import"./signal-C5ejA8hs.js";import"./Map-B4HXk9gg.js";import"./Basemap-CQf1Qo_D.js";import"./loadAll-BdmQpFfa.js";import"./PortalItem-Ch5wKdnK.js";import"./writeUtils-C8gXbBL-.js";import"./compilerUtils-MfGGJ6jp.js";import"./TablesMixin-CisELdLf.js";import"./HeightModelInfo-Bs21Ef5D.js";import"./ReactiveMap-DinfbfJz.js";import"./Query-gAxGVVkN.js";import"./Field-7yKaqquJ.js";import"./fieldType-RAe-KhZA.js";import"./arcgisLayerUrl-Dpu7DwcZ.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2-DGVIkCvT.js";import"./Tile-DOtUVU7h.js";import"./TileKey-Dkvv_foX.js";import"./QueueProcessor-CPy5oGqB.js";import"./quickselect-QQC62dOK.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-C8rSErFt.js";import"./vec32-BFI0q0ON.js";import"./definitions-C0Jy3zs7.js";import"./imageUtils-CHVqqeVq.js";import"./capabilities-A2uoe7dc.js";import"./Version-CNYnG8Q4.js";import"./ColorBackground-CZD_imWe.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-Cb7DfFRU.js";import"./LabelMetric-CbEgObZ0.js";import"./enums-CmIX1y88.js";import"./Program-DwY7YdDp.js";import"./BufferObject-DEySkd40.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-DyW2Rd4i.js";import"./ProgramTemplate-BX-q2_CH.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-gwo6XIWk.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-BvKNg9dQ.js";import"./UpdateTracking2D-CrJ_ss8x.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-EAvci0xo.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./constants-F8oTIn7N.js";import"./projectBuffer-B22kEXxF.js";import"./layerViewUtils-CMSpQZ1g.js";import"./AGraphicContainer-KAb39wAd.js";import"./TechniqueInstance-CrXFqeep.js";import"./TileContainer-Dq3keeaN.js";import"./FieldsIndex-DosTqN4i.js";import"./UnknownTimeZone-3zgfWq7J.js";import"./OverrideHelper-B8uiocSy.js";import"./colorUtils-Lyjc4zh-.js";import"./quantizationUtils-4P_ZGotl.js";import"./AttributeStore-DRbloVc_.js";import"./TimeOnly-UPu6MbGY.js";import"./timeSupport-BiBsHvcr.js";import"./queryUtils-x_fRYjy-.js";import"./json-Wa8cmqdu.js";import"./labelUtils-CnZtiCO7.js";import"./diffUtils-MlvZK1EN.js";import"./normalizeUtilsSync-VmYnSQBX.js";const x=2;class ht extends et{constructor(t){super(),this.element=t,this._handles=new I,this.isWrapAround=!1,this.perspectiveTransform=tt(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(X(()=>this.element,()=>{const e=this.element;this.ready(),e&&this._handles.add(Y(e,"play",()=>this.requestRender()))},b))}getMesh(t){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=k(this.texture)}get textureSize(){if(!this.texture)return[1,1];const t=this.texture.descriptor;return[t.width,t.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(t){const e=this.element;if(e==null)return;const{context:s}=t,{videoWidth:a,videoHeight:r}=e;if(a!==0&&r!==0){if(this.texture)e.paused||this.texture.setData(e);else{const i=new nt;i.wrapMode=ot.CLAMP_TO_EDGE,i.preMultiplyAlpha=!0,i.width=a,i.height=r,this.texture=new at(s,i,e)}e.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(t)}}_createTransforms(){return null}updateDrawCoords(t,e,s,a){const r=this.element,i=this._getFrameInfo();if(!r||!i)return;this._initializeData(t,i,s);const{controlPoints:l,horizon:h}=i,m=Math.sqrt(l.length),p=m,{x:o,y}=t,u=this._vertices,T=l[0],G=l[m-1],F=l[(p-1)*m],j=l[(p-1)*m+m-1],O=g(h?h[0].mapPoint:T.mapPoint,s),P=g(h?h[1].mapPoint:G.mapPoint,s),f=g(F.mapPoint,s),E=g(j.mapPoint,s);this.clipGeometry=h?new it({geometry:B.fromJSON({rings:[[[f.x,f.y],[E.x,E.y],[P.x,P.y],[O.x,O.y],[f.x,f.y]]],spatialReference:s})}):null;for(let c=0;c<l.length;c++){const L=l[c],{sourcePoint:S,mapPoint:A}=L;if(S==null||A==null)continue;const w=g(A,s);u[c*x+0]=w.x-o,u[c*x+1]=w.y-y}let D=e;if(a){const c=Math.min(O.x,P.x,f.x,E.x),L=Math.max(O.x,P.x,f.x,E.x),{worldWidth:S,xBounds:A}=a,[w,H]=A;c<w&&L>w?D=S:L>H&&c<H&&(D=-S)}this.wrapAroundShift=D,this.isWrapAround=D!==0}draw(t,e){this.isReady&&this._vertices&&this._indices&&this._texCoords?e.render(t,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(t,e,s){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:a}=e,r=Math.sqrt(a.length),i=r,l=new Float32Array(x*a.length),h=new Uint16Array(2*a.length);for(let o=0;o<a.length;o++){const y=a[o],{sourcePoint:u,mapPoint:T}=y;if(u==null||T==null)continue;const G=g(T,s);l[o*x+0]=G.x-t.x,l[o*x+1]=G.y-t.y,h[2*o+0]=u.x,h[2*o+1]=u.y}const m=new Uint16Array(i*r+(i-2)*(r+2));let p=0;for(let o=0;o<i;o++){for(let y=0;y<r;y++)m[p++]=o*r+y,m[p++]=(o+1)*r+y;o<i-2&&(m[p++]=(o+1)*r+(r-1),m[p++]=(o+1)*r)}this._vertices=l,this._texCoords=h,this._indices=m}_getFrameInfo(){if(!this.groundControlPoints)return null;const t=this._getFrameControlPoints(),e=this.frameHorizonPoints;let s=null;if(e){const a=e.startX,r=e.startY,i=e.endX,l=e.endY;s=[{sourcePoint:V(a,r),mapPoint:new z(e.startLongitude,e.startLatitude)},{sourcePoint:V(i,l),mapPoint:new z(e.endLongitude,e.endLatitude)}]}return{controlPoints:t,horizon:s}}_getFrameControlPoints(){const t=this.groundControlPoints,e=t?.length;if(!e)return[];const s=new Array(e),a=Math.max(...t.map(({x:i})=>i)),r=this.element.videoWidth/a;for(let i=0;i<e;i++){const{x:l,y:h,lat:m,lon:p}=t[i];s[i]={sourcePoint:V(l*r,-h*r),mapPoint:new z(p,m)}}return s}}const _=new J([255,127,0]);let d=class extends rt(st){constructor(){super(...arguments),this._graphicsLayer=new Q,this._frameOutlineGraphic=new v({symbol:new K({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new v({symbol:new q({color:_})}),this._lineOfSightGraphic=new v({symbol:new q({color:_})}),this._sensorLocationGraphic=new v({symbol:new R({color:_})}),this._frameCenterGraphic=new v({symbol:new R({color:_,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=U(this._graphicsLayer)}initialize(){this.addHandles(M(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},b)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new W({frame:this.layer.telemetryDisplay?.frame??!1,frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new Z,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new mt({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new lt(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([M(()=>[this.layer.telemetryDisplay?.frame,this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),b),M(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),b)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=U(this.graphicsView)}supportsSpatialReference(n){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(n){this.graphicsView.processUpdate(n)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:n}=this.layer,{visibleTelemetryElements:t}=this;n&&t&&(t.frameOutline&&n.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&n.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&n.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&n.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&n.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const n=new ht(this.layer.videoElement);this.addAttachHandles([M(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{const{visibleTelemetryElements:t}=this;t?.frame?(n.frameHorizonPoints=this.layer.frameHorizonPoints,n.groundControlPoints=this.layer.groundControlPoints,n.opacity=1):n.opacity=0},b)]),this._overlayContainer.addChild(n),this.view.stage.requestRender()}};C([$()],d.prototype,"graphicsView",void 0),C([$()],d.prototype,"layer",void 0),C([$()],d.prototype,"symbolColor",void 0),C([$({type:W})],d.prototype,"visibleTelemetryElements",void 0),d=C([N("esri.views.2d.layers.VideoLayerView2D")],d);const hi=d;export{hi as default};
