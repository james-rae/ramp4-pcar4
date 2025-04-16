import{aZ as O,J as P,B as t,D as e,N as m,bE as S,H as c,G as T,aN as I,O as $,aO as h,dh as w,aR as x,Q as N,s as v,a4 as f,aS as U,bB as g}from"./main-BnINupoD.js";import{S as j}from"./MultiOriginJSONSupport-CGej6qDM.js";import{f as E}from"./Layer-CwalWWQV.js";import{p as J}from"./BlendLayer-BxUnbfFb.js";import{e as R}from"./CustomParametersMixin-BBMivYZR.js";import{t as F}from"./ScaleRangeLayer-B8obctTT.js";import{y as L}from"./commonProperties-Bl81uyDg.js";import{A as k}from"./serviceCapabilitiesUtils-8T3KnEeG.js";import{C as H,L as M,f as _,g as q,P as V,d as z,n as B,l as D}from"./VideoController-mgWt1IEG.js";import{l as b}from"./TelemetryDisplay-DqUOpY1R.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-Drrkeg7H.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-BsukQQP4.js";import"./parser-MOfMo6qv.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-pV3Yd6bK.js";import"./common-DQOJ18NT.js";import"./ElevationInfo-Cbv7unv8.js";import"./lengthUtils-CI7g6Q2A.js";import"./infoFor3D-DhzudQro.js";import"./mat3f64-q3fE-ZOt.js";import"./mat3-CruJiiUv.js";import"./vec32-zaCIH5IA.js";import"./spatialReferenceEllipsoidUtils-CE9BWFiu.js";import"./projectBuffer-aZbPqVLL.js";import"./_commonjsHelpers-DCkdB7M8.js";let l=class extends O.ClonableMixin(P){constructor(o){super(o),this.framerate=null,this.containerFormat=null,this.gop=null,this.aspectRatio=null,this.klv=null}};t([e({type:String})],l.prototype,"framerate",void 0),t([e({type:String})],l.prototype,"containerFormat",void 0),t([e({type:Number})],l.prototype,"gop",void 0),t([e({type:String})],l.prototype,"aspectRatio",void 0),t([e({type:Object})],l.prototype,"klv",void 0),l=t([m("esri.layers.support.PlaybackInfo")],l);const G=l;let y=class extends I{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};function Q(o){return o?.sourcePoint!=null&&o.mapPoint!=null}t([e()],y.prototype,"sourcePoint",void 0),t([e({type:S})],y.prototype,"mapPoint",void 0),y=t([m("esri.layers.support.VideoFrame.ControlPoint")],y);let s=class extends O.ClonableMixin(P){constructor(o){super(o),this.frame=null,this.controlPoints=null}readControlPoints(o){return o.map(i=>({sourcePoint:{x:i.frameX,y:i.frameY},mapPoint:new S(i.point)}))}writeControlPoints(o,i){o!=null&&Q(o[0])&&(i.controlPoints=o.map(n=>{const a=n.sourcePoint,u=n.mapPoint;return{frameX:a.x,frameY:a.y,point:u.toJSON()}}))}};t([e({type:String})],s.prototype,"frame",void 0),t([e({type:[y],json:{write:{allowNull:!1,isRequired:!0}}})],s.prototype,"controlPoints",void 0),t([c("controlPoints")],s.prototype,"readControlPoints",null),t([T("controlPoints")],s.prototype,"writeControlPoints",null),s=t([m("esri.layers.support.VideoFrame")],s);const W=s;let r=class extends J(F(j(R(E)))){constructor(o){super(o),this._trailPoints=[],this.capabilities=null,this.connectionInfo=null,this.controller=new H,this.copyright=null,this.created=null,this.description=null,this.elevationSource=null,this.frame=null,this.frameCount=null,this.fullExtent=null,this.initialExtent=null,this.layerId=null,this.playbackInfo=null,this.posterUrl=null,this.qualities=null,this.serviceItemId=null,this.sourceJSON=null,this.sourceQuality=null,this.sourceType=null,this.spatialReference=$.WGS84,this.telemetryDisplay=null,this.title=null,this.type="video",this.url=null,this.videoLayersInfo=null,this.videoTimeExtent=null}initialize(){this.telemetryDisplay=new b({frame:!1,frameCenter:!1,frameOutline:!0,lineOfSight:!0,sensorLocation:!0,sensorTrail:!0}),this.addHandles([h(()=>this.metadata,()=>{this.notifyChange("telemetry"),this.notifyChange("groundControlPoints"),this.notifyChange("frameHorizonPoints")}),h(()=>this.telemetry?.sensorLocation,o=>this._setSensorTrail(o),w)])}load(o){const i=o!=null?o.signal:null;return this.addResolvingPromise(this._fetchService(i)),Promise.resolve(this)}get buffered(){return this.controller.buffered}readCapabilitiesFromService(o,i){return k(i)}readConnectionInfo(o,i){const n=Object.values(i.connectionUrl);return n?.length&&(this.controller.playerUrl=n[0]),i.connectionUrl}get currentTime(){return this.controller.currentTime}get duration(){return this.controller.duration}get ended(){return this.controller.ended}get frameHorizonPoints(){return M(this.metadata)}get groundControlPoints(){return _(this.metadata)}get loop(){return this.controller.loop}set loop(o){this.controller.loop=o}get metadata(){return this.controller?.currentMetadata}get mimeType(){return this.controller?.mimeType}get muted(){return this.controller.muted}set muted(o){this.controller.muted=o}get playbackRate(){return this.controller.rate}set playbackRate(o){this.controller.rate=o}get playerUrl(){return this.controller.playerUrl}get playing(){return this.controller.playing}get state(){return this.controller.state}get telemetry(){return q(this.metadata)}get videoElement(){return this.controller?.element}get videoHeight(){return this.controller?.videoHeight}readLayerInfosFromService(o,i){return V(i)}get videoWidth(){return this.controller?.videoWidth}get waiting(){return this.controller.waiting}play(){this.controller.play()}pause(){this.controller.pause()}reset(){this.controller.reset()}setCurrentTime(o){if(!this.duration)return;const i=x(o,0,this.duration);this.controller.setCurrentTime(i)}toGround(o,i){return this.controller?.sensorModel?.metadataSupportsTransforms?this.controller.sensorModel.transformImageToGeo(o,i):null}toVideo(o){if(!this.controller?.sensorModel?.metadataSupportsTransforms)return null;const i=this.controller.sensorModel.transformGeoToImage(o.x,o.y,o.z);return{x:i[0],y:i[1]}}async _fetchService(o){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const i=N(this.parsedUrl?.path);if(i==null)throw new v("arcgis-layers:url-mismatch","The url is not a valid arcgis resource");let n=null;const{data:a,ssl:u}=await f(i.url.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:o}),p=a;if(this.url=i.url.path,u&&(this.url=this.url.replace(/^http:/i,"https:")),!p?.currentVersion)return p.currentVersion="11.2",this.sourceJSON=p,void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});let d=i?.sublayer;if(d==null&&p.layers?.length&&(d=p.layers[0].id),d==null)throw new v("arcgis-layers:url-mismatch","The url is not a valid arcgis resource");this.url=`${i.url.path}/${d}`,n=await f(this.url,{query:{f:"json",...this.customParameters},signal:o});const C={...p,...n.data};this.sourceJSON=C,this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl})}_setSensorTrail(o){if(!o)return;const i=z(o,this._trailPoints);this._trailPoints=[...i];const n=this._trailPoints.map(u=>u.toArray()),a=new U({hasZ:o.hasZ,paths:[n]});this.telemetry.sensorTrail=a.clone()}};t([e({readOnly:!0})],r.prototype,"buffered",null),t([e({readOnly:!0,json:{read:!1}})],r.prototype,"capabilities",void 0),t([c("service","capabilities",["supportsAppend","supportsCoverageQuery","supportsExportClip","supportsExportFrameset","supportsMensuration","supportsUpdate"])],r.prototype,"readCapabilitiesFromService",null),t([e({readOnly:!0})],r.prototype,"connectionInfo",void 0),t([c("connectionInfo",["connectionUrl"])],r.prototype,"readConnectionInfo",null),t([e()],r.prototype,"controller",void 0),t([e({type:String})],r.prototype,"copyright",void 0),t([e({readOnly:!0,type:Date})],r.prototype,"created",void 0),t([e({type:Number})],r.prototype,"currentTime",null),t([e({type:String})],r.prototype,"description",void 0),t([e({type:Number})],r.prototype,"duration",null),t([e({readOnly:!0})],r.prototype,"elevationSource",void 0),t([e({type:Boolean})],r.prototype,"ended",null),t([e({type:W})],r.prototype,"frame",void 0),t([e({readOnly:!0,type:Number})],r.prototype,"frameCount",void 0),t([e({type:g})],r.prototype,"fullExtent",void 0),t([e({readOnly:!0})],r.prototype,"frameHorizonPoints",null),t([e({readOnly:!0})],r.prototype,"groundControlPoints",null),t([e({type:g})],r.prototype,"initialExtent",void 0),t([e({readOnly:!0,json:{read:{source:"id"}}})],r.prototype,"layerId",void 0),t([e({type:Boolean})],r.prototype,"loop",null),t([e({readOnly:!0})],r.prototype,"metadata",null),t([e({readOnly:!0})],r.prototype,"mimeType",null),t([e({type:Boolean})],r.prototype,"muted",null),t([e({type:G})],r.prototype,"playbackInfo",void 0),t([e({type:Number})],r.prototype,"playbackRate",null),t([e({type:String})],r.prototype,"playerUrl",null),t([e({readOnly:!0})],r.prototype,"playing",null),t([e({readOnly:!0,json:{read:{source:"poster"}}})],r.prototype,"posterUrl",void 0),t([e({readOnly:!0})],r.prototype,"qualities",void 0),t([e({readOnly:!0})],r.prototype,"serviceItemId",void 0),t([e()],r.prototype,"sourceJSON",void 0),t([e({readOnly:!0})],r.prototype,"sourceQuality",void 0),t([e({readOnly:!0,json:{name:"serviceType"}})],r.prototype,"sourceType",void 0),t([e()],r.prototype,"spatialReference",void 0),t([e({readOnly:!0,type:String})],r.prototype,"state",null),t([e({readOnly:!0,type:B})],r.prototype,"telemetry",null),t([e({type:b})],r.prototype,"telemetryDisplay",void 0),t([e({readOnly:!1,json:{read:{source:"name"}}})],r.prototype,"title",void 0),t([e({readOnly:!0})],r.prototype,"type",void 0),t([e(L)],r.prototype,"url",void 0),t([e({readOnly:!0})],r.prototype,"videoElement",null),t([e({readOnly:!0})],r.prototype,"videoHeight",null),t([e({readOnly:!0,json:{read:!1}})],r.prototype,"videoLayersInfo",void 0),t([c("service","videoLayersInfo",["id","name","poster","serviceType","type"])],r.prototype,"readLayerInfosFromService",null),t([e({readOnly:!0,nonNullable:!1,json:{read:{reader:D,source:"time"}}})],r.prototype,"videoTimeExtent",void 0),t([e({readOnly:!0})],r.prototype,"videoWidth",null),t([e({readOnly:!0})],r.prototype,"waiting",null),r=t([m("esri.layers.VideoLayer")],r);const bt=r;export{bt as default};
