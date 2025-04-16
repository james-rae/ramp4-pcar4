import{E as s,b3 as a,V as g,bT as l,aJ as e,q as h,u as n,C as c}from"./main-Di-yv68k.js";import{j as d,y as u}from"./LayerView-DXFIL_Fd.js";import{t as w}from"./GraphicContainer-C_Xmu_nr.js";import{F as y}from"./GraphicsView2D-BpxkYvw0.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./preload-helper-ExcqyqRp.js";import"./Container-Cqlz-mbA.js";import"./MapView-CqP-Pe8W.js";import"./Cyclical-DG3WnzjN.js";import"./CollectionFlattener-BPwcoMJm.js";import"./workers-B-3l2v1Q.js";import"./projection-CYLKhgpd.js";import"./projectBuffer-3mYoUKUF.js";import"./TileInfo-BFL9y0OI.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-CO1Ae7vD.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BjRQGvMV.js";import"./signal-VGlfR4Ca.js";import"./Map-5bZukfVD.js";import"./Basemap-CWy04dS9.js";import"./loadAll-DxfLEJdD.js";import"./PortalItem-C0wt6854.js";import"./writeUtils-CE4mn-WU.js";import"./compilerUtils-DvVWfSTH.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-VhU6idD3.js";import"./common-DQOJ18NT.js";import"./TablesMixin-Bc9o4POZ.js";import"./Layer-Lf0NR8Y2.js";import"./TimeExtent-BuwqwsNz.js";import"./GraphicsCollection-CxhW6Cez.js";import"./HeightModelInfo-o60UN0OS.js";import"./ReactiveMap-_r6XfeKU.js";import"./Query-CNJoIC0c.js";import"./Field-CdNux_Nu.js";import"./fieldType-DHh5MaW3.js";import"./arcgisLayerUrl-DycqnCy7.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-pHhKkPKV.js";import"./TileKey-BQB9a93j.js";import"./QueueProcessor-BwALueiD.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-5syqU7Xm.js";import"./normalizeUtilsCommon-BlsSL0El.js";import"./utils-Cuy3r-Ev.js";import"./utils-Ci78jMpc.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-CgoZzrFK.js";import"./vec32-ZrCxljfK.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BvWxdaDi.js";import"./imageUtils-LNQsIgFc.js";import"./capabilities-A2uoe7dc.js";import"./Version-DVVbAD23.js";import"./ColorBackground-oFbxnaci.js";import"./parser-CInzATcp.js";import"./layerViewUtils-CmF6_rTD.js";import"./AGraphicContainer-DrRLJZLt.js";import"./TechniqueInstance-Cxr6-bd-.js";import"./UpdateTracking2D-DcGiRbbC.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-V875XQlq.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-Q32FpsQJ.js";import"./Program-Cz6HmNFS.js";import"./BufferObject-B19RY9rJ.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-D_vMKSl8.js";import"./WGLContainer-Dmn0SQms.js";import"./VertexArrayObject-DfL_T1N6.js";import"./ProgramTemplate-x3IYSClq.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-CtH34dRT.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CtMJOmkx.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-D9_7Z1Xc.js";import"./FieldsIndex-Cagnio6M.js";import"./UnknownTimeZone-gKJ2squl.js";import"./OverrideHelper-d_MfG4_c.js";import"./colorUtils-CCrrMix7.js";import"./quantizationUtils-DYjUP9Jk.js";import"./AttributeStore-CLEhMt_f.js";import"./TimeOnly-BKxTx3yV.js";import"./timeSupport-BYnuAh3A.js";import"./queryUtils-CoGkzqTT.js";import"./json-Wa8cmqdu.js";import"./labelUtils-pPZhCl16.js";import"./diffUtils-OpNb2_Xo.js";import"./normalizeUtilsSync-BAGxUnfW.js";let m=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=s(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof a?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(o=>o&&o.uid):g.isCollection(i)&&i.length>0&&(r=i.map(o=>o&&o.uid).toArray());const p=r?.filter(l);return p?.length?(this._addHighlight(p,t),e(()=>this._removeHighlight(p,t))):e()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const r=this._highlightCounter.getHighlightGroups(t),p=this._getHighlightBits(r);i.push({objectId:t,highlightFlags:p})}this.graphicsView?.setHighlight(i)}};h([n()],m.prototype,"graphicsView",void 0),m=h([c("esri.views.2d.layers.GraphicsLayerView2D")],m);const yt=m;export{yt as default};
