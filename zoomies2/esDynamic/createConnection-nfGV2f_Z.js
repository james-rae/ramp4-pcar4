import{bP as R,s as a,k as d,o as y,A as p,cn as S,n as c,eX as N,aM as b,U as L,b3 as O,B as x}from"./main-DyJf3FFo.js";import{o as k}from"./projection-CuZEvqR0.js";import{c as v}from"./query-Dnpb2r8P.js";import{b as E}from"./Query-D-1qVkkR.js";let w=class extends R.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new a("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([y({readOnly:!0})],w.prototype,"connectionError",null),w=d([p("esri.layers.support.StreamConnection")],w);const F=w;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends F{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=k(t,s,r),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(e){this._websocket!=null?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const s=S(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(c.getLogger(this).error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this).error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await N(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const r=JSON.parse(t.data);this._onMessage(r)}catch(r){return void c.getLogger(this).error(new a("websocket-connection","Failed to parse message, invalid JSON",{error:r}))}}}_createWebSocket(e){return new Promise((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=o=>this._onClose(o),s.onerror=o=>this._onError(o),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=o=>{s.onopen=s.onclose=null,r(o)}})}async _handshake(e=1e4){const t=this._websocket;if(t==null)return;const r=b(),s=t.onmessage,{filter:o,outFields:n,spatialReference:u}=this._config;return r.timeout(e),t.onmessage=h=>{let l=null;try{l=JSON.parse(h.data)}catch{}l&&typeof l=="object"||(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),r.reject(),this.destroy()),l.spatialReference?.wkid!==u?.wkid&&(c.getLogger(this).error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,h.data)),r.reject(),this.destroy()),l.format!=="json"&&(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),r.reject(),this.destroy()),o&&l.filter!==o&&c.getLogger(this).error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),n&&l.outFields!==n&&c.getLogger(this).error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const i of this._outstandingMessages)t.send(JSON.stringify(i));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:n,format:"json",spatialReference:{wkid:u.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&c.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};d([y()],f.prototype,"connectionStatus",null),d([y()],f.prototype,"errorString",void 0),f=d([p("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const M=1e4,P={maxQueryDepth:5,maxRecordCountFactor:3};let m=class extends f{constructor(e){super({...P,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this).error(new a("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=L(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return S(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this).error(new a("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=b(),u=()=>{o||(this.destroyed||this._websocket!==r||c.getLogger(this).error(new a("geoevent-connection","Server timed out when setting filter")),n.reject())},h=l=>{const i=JSON.parse(l.data);i.filter&&(i.error&&(c.getLogger(this).error(new a("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=h,r.send(s),setTimeout(u,M),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e?.geometry)try{const s=O(e.geometry);if(s.type!=="extent")throw new a(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e?.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return c.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const u in o)e.attributes[u]=o[u];return n&&(e.geometry=n),e.geometry||e.centroid||c.getLogger(this).error(new a("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await import("./FeatureLayer-DGYIA1t9.js")).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,h=t.capabilities.query.maxRecordCount,l=s?h*u:h,i=new E;if(i.outFields=this._config.outFields??["*"],i.where=this._config.filter?.where??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=x.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=u),o)return i.num=l,t.destroy(),this._queryPages(e,i);const C=await v(e,i,this._config.sourceSpatialReference);return t.destroy(),C.data}async _queryPages(e,t,r=[],s=0){t.start=t.num!=null?s*t.num:null;const{data:o}=await v(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};m=d([p("esri.layers.graphics.sources.connections.GeoEventConnection")],m);const W=m;let _=class extends F{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=k(t,s,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([y()],_.prototype,"connectionStatus",void 0),d([y()],_.prototype,"errorString",void 0),_=d([p("esri.layers.support.ClientSideConnection")],_);function q(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t),e!=null&&(r.where=e),r}function T(e,t,r,s,o,n,u,h,l){const i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:q(o,n),maxReconnectionAttempts:u,maxReconnectionInterval:h,customParameters:l};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(i):new W(i):new _(i)}export{T as createConnection};
