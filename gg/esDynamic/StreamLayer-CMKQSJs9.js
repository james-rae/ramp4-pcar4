import{x as t,z as i,K as f,G as P,aX as A,M as v,e4 as O,s as l,X as E,fF as g,n as k,cQ as h,fu as D,a2 as C,aW as N,bz as U,bt as w,b7 as _,D as b,o as L}from"./main-DTtQVgOw.js";import{S as V}from"./MultiOriginJSONSupport-DgnZY84g.js";import{f as G}from"./Layer-CUAj4zsr.js";import{l as M}from"./ArcGISService-hc2TicMi.js";import{p as z}from"./BlendLayer-gFatdXRq.js";import{e as J}from"./CustomParametersMixin-DXOU1X8n.js";import{a as W}from"./DisplayFilteredLayer-DJz7D4ha.js";import{c as $}from"./FeatureEffectLayer-D0NLS62h.js";import{d as q}from"./FeatureReductionLayer-C5HdCJUW.js";import{b as Q}from"./OperationalLayer-BQGhF-8c.js";import{j as X}from"./PortalLayer-PvE5uZwd.js";import{f as K}from"./RefreshableLayer-B0nMU_EQ.js";import{t as B}from"./ScaleRangeLayer-DeP4VAu4.js";import{l as H}from"./TemporalLayer-CLZuoFn6.js";import{e as Y}from"./TrackableLayer-CWZWKbRL.js";import{p as Z,d as ee,v as te,j as ie,l as re,s as se,y as oe}from"./commonProperties-CtbRdzW5.js";import{t as ne,C as ae,n as pe}from"./labelingInfo-B3Pnx1im.js";import{y as le}from"./Field-CWWKrSVq.js";import{s as de}from"./fieldProperties-Dd-unnFC.js";import{_ as me}from"./streamLayerUtils-Dae818Yl.js";import{read as ce}from"./jsonUtils-BuL62z74.js";import{t as ue}from"./styleUtils-C1DdmUuL.js";import{m as he,u as ye}from"./typeUtils-CcUWywig.js";import{b as fe}from"./Query-BggNhcBe.js";import{p as ve}from"./popupUtils-QsUJL-eg.js";import{h as ge}from"./ElevationInfo-4gSCtt9l.js";import{A as m}from"./interfaces-Cwm0pihk.js";var y;let a=y=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=t([f("esri.layers.support.PurgeOptions")],a);const S=a,I=de();function x(e,s){return new l("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${s}`,{layer:e})}let r=class extends W(q($(z(H(Y(B(K(M(Q(X(V(J(A.ClonableMixin(G)))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=O(async(s,o,n)=>{const{save:p,saveAs:c}=await import("./streamLayerUtils-DuCaV2T3.js");switch(s){case m.SAVE:return p(this,o);case m.SAVE_AS:return c(this,n,o)}})}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(E).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const s=this._normalizeFeatureReduction(e);this._set("featureReduction",s)}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,s,o){s=s.layerDefinition||s;const n=s.drawingInfo?.renderer;if(n){const p=ce(n,s,o)||void 0;return p||k.getLogger(this).error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),p}return ne(s,o)}async connect(e){const[{createConnection:s}]=await Promise.all([import("./createConnection-vGe6F9_L.js"),this.load()]),o=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:p=null,geometryDefinition:c=null,maxReconnectionAttempts:j=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=s(this.parsedUrl,this.spatialReference,T,o,p,c,j,R,n??void 0),F=D([this.on("send-message-to-socket",u=>d.sendMessageToSocket(u)),this.on("send-message-to-client",u=>d.sendMessageToClient(u))]);return d.once("destroy",F.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return ve(this,e)}createQuery(){const e=new fe;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,s){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===e&&(o=n.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(m.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(m.SAVE_AS,s,e)}write(e,s){const o=s?.messages;return this.webSocketUrl?(o?.push(x(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,s):(o?.push(x(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:s}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=s}}else{if(!this.timeInfo?.trackIdField)throw new l("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const s=this.fields.find(o=>o.type==="oid")?.name;if(!s)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=s}if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(s=>s.name===this.objectIdField)||this.fields.push(new le({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),g(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField=me),ue(this,{origin:"service"})}};t([i({type:String})],r.prototype,"copyright",void 0),t([i({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],r.prototype,"definitionExpression",void 0),t([i({type:String})],r.prototype,"displayField",void 0),t([i({type:ge})],r.prototype,"elevationInfo",void 0),t([i({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],r.prototype,"featureReduction",null),t([i(I.fields)],r.prototype,"fields",void 0),t([i(I.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([i({type:U,json:{name:"layerDefinition.definitionGeometry",write:!0}})],r.prototype,"geometryDefinition",void 0),t([i({type:h.apiValues,json:{read:{reader:h.read}}})],r.prototype,"geometryType",void 0),t([i(Z)],r.prototype,"labelsVisible",void 0),t([i({type:[ae],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pe},write:!0}})],r.prototype,"labelingInfo",void 0),t([i(ee)],r.prototype,"legendEnabled",void 0),t([i({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],r.prototype,"listMode",void 0),t([i({type:w})],r.prototype,"maxReconnectionAttempts",void 0),t([i({type:w})],r.prototype,"maxReconnectionInterval",void 0),t([i(te)],r.prototype,"maxScale",void 0),t([i(ie)],r.prototype,"minScale",void 0),t([i({type:String})],r.prototype,"objectIdField",void 0),t([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],r.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],r.prototype,"outFields",void 0),t([i(re)],r.prototype,"popupEnabled",void 0),t([i({type:_,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([i({type:S})],r.prototype,"purgeOptions",void 0),t([i({json:{read:!1,write:!1}})],r.prototype,"refreshInterval",void 0),t([i({types:he,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ye,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",null),t([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],r.prototype,"readRenderer",null),t([i((()=>{const e=L(se);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],r.prototype,"screenSizePerspectiveEnabled",void 0),t([i()],r.prototype,"sourceJSON",void 0),t([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],r.prototype,"spatialReference",void 0),t([i({json:{read:!1}})],r.prototype,"type",void 0),t([i(oe)],r.prototype,"url",void 0),t([i({type:Number})],r.prototype,"updateInterval",void 0),t([i({json:{read:!1,write:!1}})],r.prototype,"useViewTime",void 0),t([i({type:String})],r.prototype,"webSocketUrl",void 0),r=t([f("esri.layers.StreamLayer")],r);const we=r;export{we as default};
