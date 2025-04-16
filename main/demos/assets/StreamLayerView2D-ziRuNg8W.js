import{q as i,u as n,C as c,aG as m,s as u,eQ as d,aJ as l}from"./main-C45WTWFO.js";import{d as h}from"./FeatureSet-CcVP0MSw.js";import{n as y,r as _}from"./FeatureLayerView2D-BizX_D1N.js";import g from"./FeatureFilter-C-rfD37S.js";import"./preload-helper-ExcqyqRp.js";import"./Field-Bo5KAoom.js";import"./fieldType-CzKcm5BS.js";import"./compilerUtils-CZkIm1oi.js";import"./Container-DYsPs31j.js";import"./MapView-DHRG6XQy.js";import"./Cyclical-BPGX0XxL.js";import"./CollectionFlattener-ahAQi7mz.js";import"./workers-TPg3hMhL.js";import"./projection-BnfuWpaw.js";import"./projectBuffer-F7pB9YVv.js";import"./TileInfo-v_-Q0eA4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-YXxbGicU.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-bydufHs_.js";import"./signal-DytgdVKm.js";import"./Map-C-GaZHQ6.js";import"./Basemap-Cc9xkLWW.js";import"./loadAll-BT210qk5.js";import"./PortalItem-BWasU-9O.js";import"./writeUtils-Uzaa2VPS.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-D__-bNYh.js";import"./common-DQOJ18NT.js";import"./TablesMixin-D2klvZ_Z.js";import"./Layer-DDoEY94q.js";import"./TimeExtent-DEVmKEPd.js";import"./GraphicsCollection-Dmd6mteT.js";import"./HeightModelInfo-Ca2_gN8U.js";import"./ReactiveMap-CFVW4IPw.js";import"./Query-BhJjV8cx.js";import"./arcgisLayerUrl--0hGhC8f.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-D08cz_eK.js";import"./TileKey-D81gjVbj.js";import"./QueueProcessor-CsKYU-ey.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CSDxHQTf.js";import"./normalizeUtilsCommon-CLxy382U.js";import"./utils-D_w-juwc.js";import"./utils-DPIpM5eS.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler--tNhKF8q.js";import"./vec32-CUgMqcgw.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-DtYhZVr_.js";import"./imageUtils-B-0oiuwX.js";import"./capabilities-A2uoe7dc.js";import"./Version-Bngs8ph3.js";import"./ColorBackground-9KrOlwld.js";import"./parser-Cx3v90Ld.js";import"./featureConversionUtils-CvMp17Lw.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-Bl3BKSg1.js";import"./LayerView-CMNxqaoi.js";import"./layerViewUtils-DMnDtb-z.js";import"./TechniqueInstance-DMuSRvcK.js";import"./UpdateTracking2D-DMTIuPGD.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-D3U-q0SO.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-Bh6VS8k8.js";import"./Program-CX7y-BZ9.js";import"./BufferObject-BT9ayBS_.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-BQE__kLA.js";import"./WGLContainer-BO5nKuun.js";import"./VertexArrayObject-DGaKfns5.js";import"./ProgramTemplate-C1gNGxmq.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-BhJ5lPyf.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-FP-S_jqE.js";import"./CircularArray-CujHzHWW.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-B690Fqin.js";import"./labelingInfo-C3buVVwv.js";import"./labelUtils-BynH2hFk.js";import"./heatmapUtils-B8gsHMDl.js";import"./SDFHelper-DBNGkRCl.js";import"./floatRGBA-Dv2S08mR.js";import"./HighlightCounter-Czi-fdpx.js";import"./FeatureEffect-BgMQt2kV.js";import"./jsonUtils-50pdFlv_.js";import"./floorFilterUtils-DKzVzLpH.js";import"./popupUtils-O7BmphBA.js";import"./RefreshableLayerView-BoPx-ZRP.js";const f=t=>{let e=class extends t{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return i([n()],e.prototype,"_isUserPaused",void 0),i([n({readOnly:!0})],e.prototype,"connectionStatus",null),i([n({type:g})],e.prototype,"filter",void 0),e=i([c("esri.views.layers.StreamLayerView")],e),e};let s=class extends f(_){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,async t=>{(await this.getWorker()).streamMessenger.updateCustomParameters(t)}),this.layer.on("send-message-to-socket",async t=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(t)}),this.layer.on("send-message-to-client",async t=>{(await this.getWorker()).streamMessenger.sendMessageToClient(t),this._isUserPaused&&"type"in t&&t.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new u("stream-controller",this.pipelineErrorString):null}on(t,e){if(Array.isArray(t))return d(t.map(o=>this.on(o,e)));const r=["data-received","message-received"].includes(t);r&&this.getWorker().then(o=>o.streamMessenger.enableEvent(t,!0));const a=super.on(t,e),p=this;return l(()=>{a.remove(),r&&(p._workerProxy.closed||p.hasEventListener(t)||p.getWorker().then(o=>o.streamMessenger.enableEvent(t,!1)))})}async queryLatestObservations(t,e){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return y(r.features.executeQueryForLatestObservations(this._cleanUpQuery(t),e).then(a=>{const p=h.fromJSON(a);return p.features.forEach(o=>{o.layer=this.layer,o.sourceLayer=this.layer}),p}),new h({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(t=>t.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(t=>t.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(t=>t.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const t=super._createClientOptions(),e=this;return{...t,get container(){return e.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};i([n()],s.prototype,"pipelineConnectionStatus",void 0),i([n()],s.prototype,"pipelineErrorString",void 0),i([n({readOnly:!0})],s.prototype,"connectionError",null),i([n({readOnly:!0})],s.prototype,"_streamConnectionStatus",null),s=i([c("esri.views.2d.layers.StreamLayerView2D")],s);const fe=s;export{fe as default};
