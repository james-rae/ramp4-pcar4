import{q as o,u as h,C as b,E as C,s as w,G as F,H as M,n as S,aE as q,au as R}from"./main-COW1-tZE.js";import{a as $}from"./BitmapContainer-NMdhkFlH.js";import{j as U,y as V}from"./LayerView-xTAtWcwm.js";import{_ as L}from"./ExportStrategy-ByxWtraS.js";import{i as W}from"./RefreshableLayerView-B60YMwFT.js";import{a as H}from"./ExportWMSImageParameters-D2IRrXid.js";import{i as A}from"./timeSupport-BWkB02L6.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-DRCDUKVF.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-D3bSe_40.js";import"./enums-CmIX1y88.js";import"./Texture--asVm2-A.js";import"./enums-Dk3osxpS.js";import"./Program-CE2nQUgQ.js";import"./BufferObject-DqNyl9Fb.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-B2fuYuT_.js";import"./ProgramTemplate-SlXibsaW.js";import"./Tile-I-Q46_7K.js";import"./common-DQOJ18NT.js";import"./TileKey-DvBkMp2g.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-_frMHHHh.js";import"./workers-CrxYpYBd.js";import"./ReactiveMap-CHo1u0ag.js";import"./signal-CB55nXCv.js";import"./quickselect-QQC62dOK.js";import"./Query-B7QuQNj2.js";import"./Field-BbM3YSMn.js";import"./fieldType-Rjx7u5H6.js";import"./TimeExtent-Netzf3WV.js";import"./mat3-XZDRtl20.js";import"./MapView-olfEHvT7.js";import"./Cyclical-CXR1Mgoj.js";import"./CollectionFlattener-CzxrB051.js";import"./projection-DpT9HzuS.js";import"./projectBuffer-DMMM1aK4.js";import"./TileInfo-BzzHJ4Qv.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DWazfSEa.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-uXfAL07Q.js";import"./Map-CovqW1PP.js";import"./Basemap-BFg7olai.js";import"./loadAll-BXarGv4S.js";import"./PortalItem-CVWNtsIU.js";import"./writeUtils-BdYrQHJ2.js";import"./compilerUtils-BcPYoKGk.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BzgDrEGZ.js";import"./TablesMixin-DXZZhiue.js";import"./Layer-CFBN5JUD.js";import"./GraphicsCollection-Cqsdmz2o.js";import"./HeightModelInfo-DFZOXrWA.js";import"./arcgisLayerUrl-BpqSFS2S.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./normalizeUtils-DRInXqfr.js";import"./normalizeUtilsCommon-Bt8X9OJS.js";import"./utils-BOLWf6Zp.js";import"./utils-jdmhfIP2.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-D5n0c7-O.js";import"./vec32-B0I2fEOr.js";import"./imageUtils-Cw2cuccP.js";import"./capabilities-A2uoe7dc.js";import"./Version-FrwNEhGv.js";import"./ColorBackground-BnkfuRzp.js";import"./vec3f32-nZdmKIgz.js";import"./Container-DXP60BuT.js";import"./parser-kRZUYWHW.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-5qY5C-9w.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-gdwuhhU_.js";import"./Bitmap-Dz30_ZQm.js";const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=C(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return A(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,p){const{layer:a}=this;if(!i)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:d}=a;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const r=this.createFetchPopupFeaturesQuery(i);if(!r)return[];const{extent:m,width:s,height:n,x:c,y}=r;if(!(m&&s&&n))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:m,width:s,height:n});const g=await a.fetchFeatureInfo(m,s,n,c,y);return F(p),g}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([b("esri.views.layers.WMSLayerView")],t),t};let u=class extends _(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{M(t)||S.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=C(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:p,y:a}=e,{spatialReference:d}=t;let r,m=0,s=0;if(i.children.some(g=>{const{width:f,height:v,resolution:E,x:l,y:x}=g,I=l+E*f,P=x-E*v;return p>=l&&p<=I&&a<=x&&a>=P&&(r=new R({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),m=f,s=v,!0)}),!r)return null;const n=r.width/m,c=Math.round((p-r.xmin)/n),y=Math.round((r.ymax-a)/n);return{extent:r,width:m,height:s,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,p){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...p})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([b("esri.views.2d.layers.WMSLayerView2D")],u);const de=u;export{de as default};