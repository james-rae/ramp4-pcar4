import{eS as X,aF as Y,cR as v,eT as j,cF as B,bC as J,eU as z,bv as H,aC as K,b1 as C,df as N,dc as q,de as F,C as U,aE as M,k as x,o as V,A as Q}from"./main-BL33V88t.js";import Z from"./GraphicsLayer-D2cwd-ke.js";import{l as W}from"./TelemetryDisplay-DM25Vefv.js";import{u as $}from"./OverlayContainer-CavmZblc.js";import{n as ee}from"./vec2f64-CeODonrJ.js";import{K as g}from"./projection-B-DtKyrC.js";import{e as te}from"./Container-BQSZw8eL.js";import{a as ie,j as re,y as se}from"./LayerView-cy0EMMKV.js";import{D as ne}from"./enums-DBi1-Mm2.js";import{p as ae,m as oe}from"./Texture-CPZ73x3d.js";import{t as le}from"./GraphicContainer-Cs0IIP57.js";import{F as he}from"./GraphicsView2D-DcUp7Ncn.js";const b=2;class me extends te{constructor(e){super(),this.element=e,this._handles=new X,this.isWrapAround=!1,this.perspectiveTransform=ee(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(Y(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(j(t,"play",()=>this.requestRender()))},v))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=B(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:s}=e,{videoWidth:o,videoHeight:r}=t;if(o!==0&&r!==0){if(this.texture)t.paused||this.texture.setData(t);else{const i=new ae;i.wrapMode=ne.CLAMP_TO_EDGE,i.preMultiplyAlpha=!0,i.width=o,i.height=r,this.texture=new oe(s,i,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,s,o){const r=this.element,i=this._getFrameInfo();if(!r||!i)return;this._initializeData(e,i,s);const{controlPoints:l,horizon:m}=i,h=Math.sqrt(l.length),y=h,{x:n,y:p}=e,u=this._vertices,T=l[0],G=l[h-1],k=l[(y-1)*h],I=l[(y-1)*h+h-1],O=g(m?m[0].mapPoint:T.mapPoint,s),P=g(m?m[1].mapPoint:G.mapPoint,s),f=g(k.mapPoint,s),L=g(I.mapPoint,s);this.clipGeometry=m?new ie({geometry:J.fromJSON({rings:[[[f.x,f.y],[L.x,L.y],[P.x,P.y],[O.x,O.y],[f.x,f.y]]],spatialReference:s})}):null;for(let c=0;c<l.length;c++){const E=l[c],{sourcePoint:S,mapPoint:A}=E;if(S==null||A==null)continue;const w=g(A,s);u[c*b+0]=w.x-n,u[c*b+1]=w.y-p}let D=t;if(o){const c=Math.min(O.x,P.x,f.x,L.x),E=Math.max(O.x,P.x,f.x,L.x),{worldWidth:S,xBounds:A}=o,[w,R]=A;c<w&&E>w?D=S:E>R&&c<R&&(D=-S)}this.wrapAroundShift=D,this.isWrapAround=D!==0}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,s){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:o}=t,r=Math.sqrt(o.length),i=r,l=new Float32Array(b*o.length),m=new Uint16Array(2*o.length);for(let n=0;n<o.length;n++){const p=o[n],{sourcePoint:u,mapPoint:T}=p;if(u==null||T==null)continue;const G=g(T,s);l[n*b+0]=G.x-e.x,l[n*b+1]=G.y-e.y,m[2*n+0]=u.x,m[2*n+1]=u.y}const h=new Uint16Array(i*r+(i-2)*(r+2));let y=0;for(let n=0;n<i;n++){for(let p=0;p<r;p++)h[y++]=n*r+p,h[y++]=(n+1)*r+p;n<i-2&&(h[y++]=(n+1)*r+(r-1),h[y++]=(n+1)*r)}this._vertices=l,this._texCoords=m,this._indices=h}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let s=null;if(t){const o=t.startX,r=t.startY,i=t.endX,l=t.endY;s=[{sourcePoint:z(o,r),mapPoint:new H(t.startLongitude,t.startLatitude)},{sourcePoint:z(i,l),mapPoint:new H(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:s}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e?.length;if(!t)return[];const s=new Array(t),o=Math.max(...e.map(({x:i})=>i)),r=this.element.videoWidth/o;for(let i=0;i<t;i++){const{x:l,y:m,lat:h,lon:y}=e[i];s[i]={sourcePoint:z(l*r,-m*r),mapPoint:new H(y,h)}}return s}}const _=new K([255,127,0]);let d=class extends re(se){constructor(){super(...arguments),this._graphicsLayer=new Z,this._frameOutlineGraphic=new C({symbol:new N({outline:{type:"simple-line",color:_}})}),this._sensorTrailGraphic=new C({symbol:new q({color:_})}),this._lineOfSightGraphic=new C({symbol:new q({color:_})}),this._sensorLocationGraphic=new C({symbol:new F({color:_})}),this._frameCenterGraphic=new C({symbol:new F({color:_,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=U(this._graphicsLayer)}initialize(){this.addHandles(M(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},v)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new W({frame:this.layer.telemetryDisplay?.frame??!1,frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new $,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new he({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new le(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([M(()=>[this.layer.telemetryDisplay?.frame,this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),v),M(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),v)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=U(this.graphicsView)}supportsSpatialReference(a){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(a){this.graphicsView.processUpdate(a)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:a}=this.layer,{visibleTelemetryElements:e}=this;a&&e&&(e.frameOutline&&a.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&a.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&a.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&a.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&a.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const a=new me(this.layer.videoElement);this.addAttachHandles([M(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{const{visibleTelemetryElements:e}=this;e?.frame?(a.frameHorizonPoints=this.layer.frameHorizonPoints,a.groundControlPoints=this.layer.groundControlPoints,a.opacity=1):a.opacity=0},v)]),this._overlayContainer.addChild(a),this.view.stage.requestRender()}};x([V()],d.prototype,"graphicsView",void 0),x([V()],d.prototype,"layer",void 0),x([V()],d.prototype,"symbolColor",void 0),x([V({type:W})],d.prototype,"visibleTelemetryElements",void 0),d=x([Q("esri.views.2d.layers.VideoLayerView2D")],d);const ye=d;export{ye as default};
