import{fx as X,fk as j,fm as k,bi as x,fn as B,fl as J,bq as _,aV as K,fy as $,_ as R,aA as Z,ew as Q,a1 as w,d_ as ee,dX as q,dZ as U,bn as W,bh as V,bb as b,bc as M,bd as te}from"./main-Cvu-P-7v.js";import{i as F}from"./TelemetryDisplay-ecdldU8D.js";import{f as ie}from"./OverlayContainer-QnqEEMsH.js";import{s as re}from"./Container-C-dfBlfy.js";import{a as se,f as oe,y as ne}from"./LayerView-D1SnwW9J.js";import{c as H}from"./Program-uJonPo0k.js";import{D as ae,F as z,E as le}from"./enums-BlUEVwJR.js";import{e as he,c as me}from"./Texture-4Nxpb0xP.js";import{o as pe}from"./ProgramTemplate-1mBh-3QZ.js";import{t as ye}from"./GraphicContainer-CvBtgi5C.js";import{V as ce}from"./GraphicsView2D-KCw9JCxU.js";import"./preload-helper-ExcqyqRp.js";import"./vec3f32-nZdmKIgz.js";import"./WGLContainer-C9wn6NE2.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-DRkfSzIq.js";import"./enums-BRXbslMp.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-DmaWrvOv.js";import"./highlightReasons-BKEmulST.js";import"./layerViewUtils-CuYS5zdy.js";import"./AGraphicContainer-D7B1Jyka.js";import"./TechniqueInstance-CLJG_JK-.js";import"./UpdateTracking2D-BMs_o-J4.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-CQ3g_PNY.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-CKsY0PsD.js";import"./TileContainer-CSNo2B7F.js";import"./FeatureCommandQueue-CXmOOjCV.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-BoDlrtBn.js";import"./TimeOnly-BvBAZbsO.js";import"./timeSupport-YrqdeLtJ.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-D8FIvwO5.js";const C=2;class de extends re{constructor(e){super(),this.element=e,this._handles=new X,this.isWrapAround=!1,this.perspectiveTransform=j(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(k(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(B(t,"play",()=>this.requestRender()))},x))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=J(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:s}=e,{videoWidth:i,videoHeight:r}=t;if(i!==0&&r!==0){if(this.texture)t.paused||this.texture.setData(t);else{const o=new he;o.wrapMode=ae.CLAMP_TO_EDGE,o.preMultiplyAlpha=!0,o.width=i,o.height=r,this.texture=new me(s,o,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,s,i){const r=this.element,o=this._getFrameInfo();if(!r||!o)return;this._initializeData(e,o,s);const{controlPoints:a,horizon:h}=o,m=Math.sqrt(a.length),c=m,{x:n,y:p}=e,u=this._vertices,T=a[0],G=a[m-1],N=a[(c-1)*m],Y=a[(c-1)*m+m-1],O=_(h?h[0].mapPoint:T.mapPoint,s),P=_(h?h[1].mapPoint:G.mapPoint,s),f=_(N.mapPoint,s),D=_(Y.mapPoint,s);this.clipGeometry=h?new se({geometry:K.fromJSON({rings:[[[f.x,f.y],[D.x,D.y],[P.x,P.y],[O.x,O.y],[f.x,f.y]]],spatialReference:s})}):null;for(let y=0;y<a.length;y++){const L=a[y],{sourcePoint:A,mapPoint:S}=L;if(A==null||S==null)continue;const v=_(S,s);u[y*C+0]=v.x-n,u[y*C+1]=v.y-p}let E=t;if(i){const y=Math.min(O.x,P.x,f.x,D.x),L=Math.max(O.x,P.x,f.x,D.x),{worldWidth:A,xBounds:S}=i,[v,I]=S;y<v&&L>v?E=A:L>I&&y<I&&(E=-A)}this.wrapAroundShift=E,this.isWrapAround=E!==0}getVAO(e,t,s){if(this._vertices==null)return null;const i=this._vertices;if(this._vao)this._vbo.setData(i);else{this._vbo=H.createVertex(e,z.DYNAMIC_DRAW,i);const r=H.createVertex(e,z.STATIC_DRAW,this._texCoords);this._ibo=H.createIndex(e,z.DYNAMIC_DRAW,this._indices),this._vao=new pe(e,s,t,{geometry:this._vbo,tex:r},this._ibo)}return this._vao}draw(e){e.drawElements(le.TRIANGLE_STRIP,this._indices.length,e.gl.UNSIGNED_SHORT,0)}_initializeData(e,t,s){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:i}=t,r=Math.sqrt(i.length),o=r,a=new Float32Array(C*i.length),h=new Uint16Array(2*i.length);for(let n=0;n<i.length;n++){const p=i[n],{sourcePoint:u,mapPoint:T}=p;if(u==null||T==null)continue;const G=_(T,s);a[n*C+0]=G.x-e.x,a[n*C+1]=G.y-e.y,h[2*n+0]=u.x,h[2*n+1]=u.y}const m=new Uint16Array(o*r+(o-2)*(r+2));let c=0;for(let n=0;n<o;n++){for(let p=0;p<r;p++)m[c++]=n*r+p,m[c++]=(n+1)*r+p;n<o-2&&(m[c++]=(n+1)*r+(r-1),m[c++]=(n+1)*r)}this._vertices=a,this._texCoords=h,this._indices=m}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let s=null;if(t){const i=t.startX,r=t.startY,o=t.endX,a=t.endY;s=[{sourcePoint:$(i,r),mapPoint:new R(t.startLongitude,t.startLatitude)},{sourcePoint:$(o,a),mapPoint:new R(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:s}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e?.length;if(!t)return[];const s=new Array(t);for(let i=0;i<t;i++){const{x:r,y:o,lat:a,lon:h}=e[i];s[i]={sourcePoint:$(r,-o),mapPoint:new R(h,a)}}return s}}const g=new Z([255,127,0]);let d=class extends oe(ne){constructor(){super(...arguments),this._graphicsLayer=new Q,this._frameOutlineGraphic=new w({symbol:new ee({outline:{type:"simple-line",color:g}})}),this._sensorTrailGraphic=new w({symbol:new q({color:g})}),this._lineOfSightGraphic=new w({symbol:new q({color:g})}),this._sensorLocationGraphic=new w({symbol:new U({color:g})}),this._frameCenterGraphic=new w({symbol:new U({color:g})}),this._overlayContainer=null,this.layer=null,this.symbolColor=g,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=W(this._graphicsLayer)}initialize(){this.addHandles(V(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},x)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new F({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new ie,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new ce({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new ye(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([V(()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),x),V(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),x)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=W(this.graphicsView)}supportsSpatialReference(l){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(l){this.graphicsView.processUpdate(l)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:l}=this.layer,{visibleTelemetryElements:e}=this;l&&e&&(e.frameOutline&&l.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&l.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&l.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&l.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&l.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const l=new de(this.layer.videoElement);this.addAttachHandles([V(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{l.frameHorizonPoints=this.layer.frameHorizonPoints,l.groundControlPoints=this.layer.groundControlPoints},x)]),this._overlayContainer.addChild(l),this.view.stage.requestRender()}};b([M()],d.prototype,"graphicsView",void 0),b([M()],d.prototype,"layer",void 0),b([M()],d.prototype,"symbolColor",void 0),b([M({type:F})],d.prototype,"visibleTelemetryElements",void 0),d=b([te("esri.views.2d.layers.VideoLayerView2D")],d);const et=d;export{et as default};