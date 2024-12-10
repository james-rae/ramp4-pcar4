import { bT as r$1, bU as m, h3 as d, bV as a, cC as d$1, s, gR as t, bn as e, bX as d$2 } from './main-jdFDoOPu.js';
import { n, r as re } from './FeatureLayerView2D-DFfMejHP.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './timeSupport-D_mI4xo9.js';
import './LayerView-BOLJrt05.js';
import './layerViewUtils-DUOa5TQu.js';
import './TechniqueInstance-Samk-rXg.js';
import './UpdateTracking2D-nlP-taLY.js';
import './BidiEngine-SYarjht-.js';
import './GeometryUtils-BXKvwdJG.js';
import './Rect--0fzStUh.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './BindType-DC_OuQGA.js';
import './Util-BoF0V3b-.js';
import './TileContainer-BA3pMXmd.js';
import './WGLContainer-BUclEOgO.js';
import './VertexArrayObject-DvEAXDKn.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './vec3f32-0Jah-02g.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';
import './FeatureCommandQueue-BYG4gPcz.js';
import './constants-D-RiuwZo.js';
import './CircularArray-DyZiGQlG.js';
import './SDFHelper-DpiTEPJi.js';
import './floatRGBA-DHjcfk0_.js';
import './HighlightCounter-Cjy4OhJF.js';
import './popupUtils-BdW6RFNo.js';
import './RefreshableLayerView-BHga9aHT.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r=r=>{let i=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}disconnect(){this._doDisconnect();}connect(){this._doConnect();}clear(){this._doClear();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return (this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return r$1([m()],i.prototype,"_isUserPaused",void 0),r$1([m({readOnly:!0})],i.prototype,"connectionStatus",null),r$1([m({type:d})],i.prototype,"filter",void 0),i=r$1([a("esri.views.layers.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends(r(re)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null;}initialize(){this.addHandles([d$1((()=>this.layer.customParameters),(async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e);})),this.layer.on("send-message-to-socket",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e);})),this.layer.on("send-message-to-client",(async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion();})),d$1((()=>this.layer.purgeOptions),(()=>this._update())),d$1((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume();}destroy(){this._doPause();}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e$1,r){if(Array.isArray(e$1))return t(e$1.map((e=>this.on(e,r))));const n=["data-received","message-received"].includes(e$1);n&&this.getWorker().then((r=>r.streamMessenger.enableEvent(e$1,!0)));const o=super.on(e$1,r),i=this;return e((()=>{o.remove(),n&&(i._workerProxy.closed||i.hasEventListener(e$1)||i.getWorker().then((r=>r.streamMessenger.enableEvent(e$1,!1))));}))}async queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const s$1=await this.getWorker();return n(s$1.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const r=d$2.fromJSON(e);return r.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),r})),new d$2({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null);}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval);}_doDisconnect(){this.getWorker().then((e=>e.streamMessenger.disconnect())),this._doPause();}_doConnect(){this.getWorker().then((e=>e.streamMessenger.connect())),this.resume();}_doClear(){this.getWorker().then((e=>e.streamMessenger.clear())),null==this._refreshInterval&&this.incrementSourceRefreshVersion();}_createClientOptions(){const e=super._createClientOptions(),r=this;return {...e,get container(){return r.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value);}}}};r$1([m()],p.prototype,"pipelineConnectionStatus",void 0),r$1([m()],p.prototype,"pipelineErrorString",void 0),r$1([m({readOnly:!0})],p.prototype,"connectionError",null),r$1([m({readOnly:!0})],p.prototype,"_streamConnectionStatus",null),p=r$1([a("esri.views.2d.layers.StreamLayerView2D")],p);const u=p;

export { u as default };
