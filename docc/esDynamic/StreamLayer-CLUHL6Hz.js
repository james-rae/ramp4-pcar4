import{O as t,P as i,Q as g,bV as P,gt as O,gu as A,dI as E,gv as _,dM as k,dJ as D,dY as N,dK as U,dL as C,dN as L,dZ as V,bU as G,bv as f,eG as J,s as d,a1 as M,gw as v,gW as W,D as $,gX as z,dw as y,eH as Q,gy as q,f0 as H,gP as c,a2 as X,dv as Y,gx as Z,t as B,gY as K,b8 as ee,gA as te,gB as ie,gC as se,dQ as re,gZ as w,g_ as oe,g$ as ne,gE as ae,W as le,gF as de,gG as pe,dO as b,ad as ce,gH as ue,dR as he,gJ as ye,dX as me}from"./main-DnRb_GMc.js";var m;let a=m=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new m({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([i({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([i({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=m=t([g("esri.layers.support.PurgeOptions")],a);const S=a,I=ye();function x(e,r){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let s=class extends O(A(E(_(k(D(N(U(C(L(V(G(me)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new S,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=J(async(r,o,n)=>{const{save:l,saveAs:u}=await import("./streamLayerUtils-CQET9Y1Z.js");switch(r){case c.SAVE:return l(this,o);case c.SAVE_AS:return u(this,n,o)}})}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(M).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){v(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){r=r.layerDefinition||r;const n=r.drawingInfo?.renderer;if(n){const l=W(n,r,o)||void 0;return l||$.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}return z(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([import("./createConnection-BB287lsS.js"),this.load()]),o=this.geometryType?y.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:l=null,geometryDefinition:u=null,maxReconnectionAttempts:R=0,maxReconnectionInterval:j=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),p=r(this.parsedUrl,this.spatialReference,T,o,l,u,R,j,n??void 0),F=Q([this.on("send-message-to-socket",h=>p.sendMessageToSocket(h)),this.on("send-message-to-client",h=>p.sendMessageToClient(h))]);return p.once("destroy",F.remove),p}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return q(this,e)}createQuery(){const e=new H;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===e&&(o=n.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(c.SAVE_AS,r,e)}write(e,r){const o=r?.messages;return this.webSocketUrl?(o?.push(x(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o?.push(x(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:r}=await X(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}}else{if(!this.timeInfo?.trackIdField)throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const r=this.fields.find(o=>o.type==="oid")?.name;if(!r)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=r}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(r=>r.name===this.objectIdField)||this.fields.push(new Y({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),v(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),B(this,{origin:"service"})}};t([i({type:String})],s.prototype,"copyright",void 0),t([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i({type:String})],s.prototype,"displayField",void 0),t([i({type:K})],s.prototype,"elevationInfo",void 0),t([i({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],s.prototype,"featureReduction",null),t([i(I.fields)],s.prototype,"fields",void 0),t([i(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([i({type:ee,json:{name:"layerDefinition.definitionGeometry",write:!0}})],s.prototype,"geometryDefinition",void 0),t([i({type:y.apiValues,json:{read:{reader:y.read}}})],s.prototype,"geometryType",void 0),t([i(te)],s.prototype,"labelsVisible",void 0),t([i({type:[ie],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:se},write:!0}})],s.prototype,"labelingInfo",void 0),t([i(re)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],s.prototype,"listMode",void 0),t([i({type:w})],s.prototype,"maxReconnectionAttempts",void 0),t([i({type:w})],s.prototype,"maxReconnectionInterval",void 0),t([i(oe)],s.prototype,"maxScale",void 0),t([i(ne)],s.prototype,"minScale",void 0),t([i({type:String})],s.prototype,"objectIdField",void 0),t([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],s.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],s.prototype,"outFields",void 0),t([i(ae)],s.prototype,"popupEnabled",void 0),t([i({type:le,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),t([i({type:S})],s.prototype,"purgeOptions",void 0),t([i({json:{read:!1,write:!1}})],s.prototype,"refreshInterval",void 0),t([i({types:de,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:pe,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],s.prototype,"renderer",null),t([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],s.prototype,"readRenderer",null),t([i((()=>{const e=ce(ue);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],s.prototype,"screenSizePerspectiveEnabled",void 0),t([i()],s.prototype,"sourceJSON",void 0),t([i({type:f,json:{origins:{service:{read:{source:"spatialReference"}}}}})],s.prototype,"spatialReference",void 0),t([i({json:{read:!1}})],s.prototype,"type",void 0),t([i(he)],s.prototype,"url",void 0),t([i({type:Number})],s.prototype,"updateInterval",void 0),t([i({json:{read:!1,write:!1}})],s.prototype,"useViewTime",void 0),t([i({type:String})],s.prototype,"webSocketUrl",void 0),s=t([g("esri.layers.StreamLayer")],s);const ge=s;export{ge as default};