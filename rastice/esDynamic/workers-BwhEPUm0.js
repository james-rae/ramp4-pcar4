import{aQ as ce,aR as L,aZ as a,E as A,s as E,fE as he,aN as P,aK as ue,aJ as m,aH as de,aO as C,f6 as pe,iz as T,aM as fe,f0 as ge,D as W,iA as me,U as _e,gU as U,H as O,by as _,av as x,eT as be,n as F,aL as ye}from"./main-CvsyIoCL.js";const q="20241122",B="f6f7099a0e79cf518abdcf87c5aa8b6f24ecdcd8";let K=class{constructor(e=t=>t.values().next().value){this._peeker=e,this._observable=new ce,this._items=new Set}get length(){return L(this._observable),this._items.size}clear(){this.length!==0&&(this._items.clear(),this._observable.notify())}last(){if(this.length===0)return;let e;for(e of this._items);return e}peek(){if(this.length!==0)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return L(this._observable),this._items.has(e)}pop(){if(this.length===0)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(this.length===0)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const t=this.length;return this._items.forEach(r=>{e(r)||this._items.delete(r)}),t!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){L(this._observable),yield*this._items}};const Q=new FinalizationRegistry(e=>{e.close()});function ke(e,t){Q.register(e,t,t)}function ve(e){Q.unregister(e)}function V(e,t){return new Proxy({},{get:(r,s,o)=>(...n)=>{let i,l;const c=n[n.length-1];return we(c)&&(i=c.signal,l=c.transferList,n.pop()),e.apply(t?`${t}.${s.toString()}`:s.toString(),n,{transferList:l,signal:i})}})}function we(e){return typeof e=="object"&&!Array.isArray(e)&&e!=null&&("signal"in e||"transferList"in e||Object.keys(e).length===0)}const Ee={statsWorker:()=>import("./statsWorker-BTtJ9FSR.js"),geometryEngineWorker:()=>import("./geometryEngineWorker-DR57qxa2.js"),CSVSourceWorker:()=>import("./CSVSourceWorker-BNSpy0Xu.js"),EdgeProcessingWorker:()=>import("./EdgeProcessingWorker-DROZzeD3.js"),ElevationSamplerWorker:()=>import("./ElevationSamplerWorker-DNU7gtSm.js"),FeatureServiceSnappingSourceWorker:()=>import("./FeatureServiceSnappingSourceWorker-78niLbqo.js"),GeoJSONSourceWorker:()=>import("./GeoJSONSourceWorker-DBqSKIqk.js"),LercWorker:()=>import("./LercWorker-Dt2hbupO.js"),MemorySourceWorker:()=>import("./MemorySourceWorker-CrcH5YOW.js"),PBFDecoderWorker:()=>import("./PBFDecoderWorker-C12caOYJ.js"),FeaturePipelineWorker:()=>import("./FeaturePipelineWorker-7KvBqh6o.js"),PointCloudWorker:()=>import("./PointCloudWorker-CarIShfX.js"),RasterWorker:()=>import("./RasterWorker-nD9eEKW0.js"),SceneLayerSnappingSourceWorker:()=>import("./SceneLayerSnappingSourceWorker-Dlj8nwLD.js"),SceneLayerWorker:()=>import("./SceneLayerWorker-B3mtQXF0.js"),WFSSourceWorker:()=>import("./WFSSourceWorker-B9ly1CKO.js"),WorkerTileHandler:()=>import("./WorkerTileHandler-DoXk0T0H.js"),Lyr3DWorker:()=>import("./Lyr3DWorker-B4emC84r.js"),Feature3DPipelineWorker:()=>import("./HUDMaterial.glsl--lj73S0V.js").then(e=>e.F)},$="worker:port-closed";var h;(function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.OPEN=1]="OPEN",e[e.OPENED=2]="OPENED",e[e.RESPONSE=3]="RESPONSE",e[e.INVOKE=4]="INVOKE",e[e.ABORT=5]="ABORT",e[e.CLOSE=6]="CLOSE",e[e.OPEN_PORT=7]="OPEN_PORT",e[e.ON=8]="ON"})(h||(h={}));let Pe=0;function z(){return Pe++}function Oe(e){return e&&typeof e=="object"&&("result"in e||"transferList"in e)}function b(e){return e?typeof e=="string"?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function R(e,t,r,s){if(t.type===h.OPEN_PORT)return void e.postMessage(t,[t.port]);if(t.type!==h.INVOKE&&t.type!==h.RESPONSE)return void e.postMessage(t);let o;if(Oe(r)?(o=G(r.transferList),t.data=r.result):(o=G(s),t.data=r),o){if(a("ff")){for(const n of o)if("byteLength"in n&&n.byteLength>267386880){const i="Worker call with large ArrayBuffer would crash Firefox";switch(t.type){case h.INVOKE:throw i;case h.RESPONSE:return void R(e,{type:h.RESPONSE,jobId:t.jobId,error:b(i)})}}}e.postMessage(t,o)}else e.postMessage(t)}function y(e){if(!e)return null;const t=e.data;return t?typeof t=="string"?JSON.parse(t):t:null}function G(e){if(!e?.length)return null;if(a("esri-workers-arraybuffer-transfer"))return e;const t=e.filter(r=>!Se(r));return t.length?t:null}function Se(e){return e instanceof ArrayBuffer||e?.constructor?.name==="ArrayBuffer"}async function Me(e){try{return await e}catch(t){const r=t?.name===$;if(!(A(t)||r))throw t;return}}const{CLOSE:Z,ABORT:X,INVOKE:Y,RESPONSE:k,OPEN_PORT:ee,ON:Ne}=h,Ie=2;class je{constructor(t){this._invoke=t,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(t){t.type===h.ABORT?this._cancelledJobIds.add(t.jobId):(this._invokeMessages.push(t),this._timer===null&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const t of this._invokeMessages)this._cancelledJobIds.has(t.jobId)||this._invoke(t);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class d{static connect(t,r){const s=new MessageChannel;let o;o=typeof t=="function"?new t:"default"in t&&typeof t.default=="function"?new t.default:t;const n=new d(s.port1,{channel:s,client:o,schedule:r});return typeof o=="object"&&"remoteClient"in o&&(o.remoteClient=n),d.clients.set(n,o),s.port2}static loadWorker(t){const r=Ee[t];return r?r():Promise.resolve(null)}constructor(t,r,s){this._port=t,this._jobQueue=s,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new je(o=>this._onInvokeMessage(o)),this._client=r.client,this._onMessage=this._onMessage.bind(this),this._channel=r.channel,this._schedule=r.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:Z}),this._close()}isBusy(){return this._outJobs.size>0}invoke(t,r,s){return this.apply(t,[r],s)}apply(t,r,s){const o=s?.signal,n=s?.transferList;if(!this._port)return Promise.reject(new E($,`Cannot call invoke('${t}'), port is closed`,{methodName:t,data:r}));const i=z();return new Promise((l,c)=>{if(he(o))return this._processWork(),void c(P());const p=ue(o,()=>{const f=this._outJobs.get(i);f&&(this._outJobs.delete(i),this._processWork(),m(f.abortHandle),this._post({type:X,jobId:i}),c(P()))}),u={resolve:l,reject:c,abortHandle:p,debugInfo:t};this._outJobs.set(i,u),this._post({type:Y,jobId:i,methodName:t,abortable:o!=null},r,n)})}createInvokeProxy(t){return V(this,t)}on(t,r){const s=new MessageChannel;function o(n){r(n.data)}return this._port.postMessage({type:h.ON,eventType:t,port:s.port2},[s.port2]),s.port1.addEventListener("message",o),s.port1.start(),de(()=>{s.port1.postMessage({type:h.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",o)})}jobAdded(){this._processWork()}openPort(){const t=new MessageChannel;return this._post({type:ee,port:t.port2}),t.port1}_processWork(){if(this._outJobs.size>=Ie)return;const t=this._jobQueue?.pop();if(!t)return;const{methodName:r,data:s,invokeOptions:o,resolver:n}=t;this.apply(r,s,o).then(i=>n.resolve(i)).catch(i=>n.reject(i))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(t=>{m(t.abortHandle),t.reject(P(`Worker closing, aborting job calling '${t.debugInfo}'`))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(t){this._schedule!=null?this._schedule(()=>this._processMessage(t,!0)):this._processMessage(t,!1)}_processMessage(t,r){const s=y(t);if(s)switch(s.type){case k:this._onResponseMessage(s);break;case Y:r?this._onInvokeMessage(s):this._invokeQueue.push(s);break;case X:this._onAbortMessage(s);break;case Z:this._onCloseMessage();break;case ee:this._onOpenPortMessage(s);break;case Ne:this._onOnMessage(s)}}_onAbortMessage(t){const r=this._inJobs,s=t.jobId,o=r.get(s);this._invokeQueue.push(t),o&&(o.controller&&o.controller.abort(),r.delete(s))}_onCloseMessage(){const t=this._client;this._close(),t&&"destroy"in t&&d.clients.get(this)===t&&t.destroy(),d.clients.delete(this),t?.remoteClient&&(t.remoteClient=null)}_onInvokeMessage(t){const{methodName:r,jobId:s,data:o=[],abortable:n}=t,i=n?new AbortController:null,l=this._inJobs;let c,p=this._client,u=p[r];try{if(!u&&r&&r.includes(".")){const f=r.split(".");for(let w=0;w<f.length-1;w++)p=p[f[w]],u=p[f[w+1]]}if(typeof u!="function")throw new TypeError(`${r} is not a function`);o.push({client:this,signal:i?i.signal:null}),c=u.apply(p,o)}catch(f){return void this._post({type:k,jobId:s,error:b(f)})}C(c)?(l.set(s,{controller:i,promise:c}),c.then(f=>{l.has(s)&&(l.delete(s),this._post({type:k,jobId:s},f))},f=>{l.has(s)&&(l.delete(s),A(f)||this._post({type:k,jobId:s,error:b(f||{message:`Error encountered at method ${r}`})}))})):this._post({type:k,jobId:s},c)}_onOpenPortMessage(t){new d(t.port,{client:this._client})}_onOnMessage(t){const{port:r}=t,s=this._client.on(t.eventType,n=>{r.postMessage(n)}),o=pe(t.port,"message",n=>{y(n)?.type===h.CLOSE&&(o.remove(),s.remove(),r.close())})}_onResponseMessage(t){const{jobId:r,error:s,data:o}=t,n=this._outJobs;if(!n.has(r))return;const i=n.get(r);n.delete(r),this._processWork(),m(i.abortHandle),s?i.reject(E.fromJSON(JSON.parse(s))):i.resolve(o)}_post(t,r,s){return R(this._port,t,r,s)}}d.kernelInfo={buildDate:q,fullVersion:T,revision:B},d.clients=new Map;let te=class{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new K}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,t){return new Promise((r,s)=>{let o=!0;const n=i=>{W(t.signal),o&&(o=!1,i())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let i=0;i<e.length;++i){const l=e[i];C(l)?this._clientPromises[i]=l.then(c=>(this._clients[i]=new d(c,t,this._ongoingJobsQueue),n(r),this._clients[i]),()=>(n(s),null)):(this._clients[i]=new d(l,t,this._ongoingJobsQueue),this._clientPromises[i]=Promise.resolve(this._clients[i]),n(r))}})}broadcast(e,t,r){const s=new Array(this._clientPromises.length);for(let o=0;o<this._clientPromises.length;++o){const n=this._clientPromises[o];s[o]=n.then(i=>i?.invoke(e,t,r))}return s}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject(P(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then(r=>r?.close());this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,ve(this)}invoke(e,t,r){return this.apply(e,[t],r)}apply(e,t,r){const s=fe();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:r,resolver:s});for(let o=0;o<this._clientPromises.length;o++){const n=this._clients[o];n?n.jobAdded():this._clientPromises[o].then(i=>i?.jobAdded())}return s.promise}createInvokeProxy(e){return V(this,e)}on(e,t){return Promise.all(this._clientPromises).then(()=>ge(this._clients.map(r=>r.on(e,t))))}openPorts(){return new Promise(e=>{const t=new Array(this._clientPromises.length);let r=t.length;for(let s=0;s<this._clientPromises.length;++s)this._clientPromises[s].then(o=>{o&&(t[s]=o.openPort()),--r==0&&e(t)})})}get test(){}};const Je={async request(e,t){const r=e.options,s=r.responseType;r.signal=t?.signal,r.responseType=s==="native"||s==="native-request-init"?"native-request-init":s&&["blob","json","text"].includes(s)&&me(e.url)?.after?s:"array-buffer";const o=await _e(e.url,r),n={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete n.data.signal,n;case"blob":n.data=await n.data.arrayBuffer();break;case"json":n.data=new TextEncoder().encode(JSON.stringify(n.data)).buffer;break;case"text":n.data=new TextEncoder().encode(n.data).buffer}return{result:n,transferList:[n.data]}}},se={};function Le(e){const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.slice()||[],paths:{...se.paths,...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=se.baseUrl),t}class Ae{constructor(){const t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(r=>{this[r]=(...s)=>t[r](...s)})}}let S=class{constructor(){this._dispatcher=new Ae,this._workerPostMessage({type:h.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){U(()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,r){this._dispatcher.addEventListener(e,t,r)}removeEventListener(e,t,r){this._dispatcher.removeEventListener(e,t,r)}_workerPostMessage(e){U(()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))})}async _workerMessageHandler(e){const t=y(e);if(t&&t.type===h.OPEN){const{modulePath:r,jobId:s}=t;let o=await d.loadWorker(r);o||(o=await import(r));const n=d.connect(o);this._workerPostMessage({type:h.OPENED,jobId:s,data:n})}}};const H=()=>F.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:Ce}=h,We='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let M,N;const re="Failed to create Worker. Fallback to execute module in main thread";async function Re(){if(!a("esri-workers"))return oe(new S);if(!M&&!N)try{const t=We.split("{CONFIGURATION}").join(He());M=URL.createObjectURL(new Blob([t],{type:"text/javascript"}))}catch(t){N=t||{}}let e;if(M)try{e=new Worker(M,{name:"esri-worker-"+De++})}catch{H().warn(re,N),e=new S}else H().warn(re,N),e=new S;return oe(e)}async function oe(e){return new Promise(t=>{function r(o){const n=y(o);n&&n.type===Ce&&(e.removeEventListener("message",r),e.removeEventListener("error",s),t(e))}function s(o){o.preventDefault(),e.removeEventListener("message",r),e.removeEventListener("error",s),H().warn("Failed to create Worker. Fallback to execute module in main thread",o),(e=new S).addEventListener("message",r),e.addEventListener("error",s)}e.addEventListener("message",r),e.addEventListener("error",s)})}function He(){let e;if(O.default!=null){const s={...O};delete s.default,e=JSON.parse(JSON.stringify(s))}else e=JSON.parse(JSON.stringify(O));e.assetsPath=_(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?_(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=x(),e.has={"esri-csp-restrictions":a("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":a("esri-2d-update-debug"),"esri-2d-log-updating":a("esri-2d-log-updating"),"featurelayer-pbf":a("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":a("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":a("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":a("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":a("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":a("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":a("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":a("featurelayer-snapshot-enabled"),"esri-atomics":a("esri-atomics"),"esri-shared-array-buffer":a("esri-shared-array-buffer"),"esri-tiles-debug":a("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":a("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":a("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=_(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=_(e.workers.workerPath):e.workers.workerPath=_(be("esri/core/workers/RemoteClient.js")),e.workers.useDynamicImport=!1;const t=O.workers.loaderConfig,r=Le({baseUrl:t?.baseUrl,locale:x(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]});return JSON.stringify({esriConfig:e,loaderConfig:r,kernelInfo:{buildDate:q,fullVersion:T,revision:B}})}let De=0;const{ABORT:ne,INVOKE:Te,OPEN:Ue,OPENED:xe,RESPONSE:v}=h;class D{static async create(t){const r=await Re();return new D(r,t)}constructor(t,r){this._outJobs=new Map,this._inJobs=new Map,this.worker=t,this.id=r,t.addEventListener("message",this._onMessage.bind(this)),t.addEventListener("error",s=>{s.preventDefault(),F.getLogger("esri.core.workers.WorkerOwner").error(s)})}terminate(){this.worker.terminate()}async open(t,r={}){const{signal:s}=r,o=z();return new Promise((n,i)=>{const l={resolve:n,reject:i,abortHandle:ye(s,()=>{this._outJobs.delete(o),this._post({type:ne,jobId:o})})};this._outJobs.set(o,l),this._post({type:Ue,jobId:o,modulePath:t})})}_onMessage(t){const r=y(t);if(r)switch(r.type){case xe:this._onOpenedMessage(r);break;case v:this._onResponseMessage(r);break;case ne:this._onAbortMessage(r);break;case Te:this._onInvokeMessage(r)}}_onAbortMessage(t){const r=this._inJobs,s=t.jobId,o=r.get(s);o&&(o.controller&&o.controller.abort(),r.delete(s))}_onInvokeMessage(t){const{methodName:r,jobId:s,data:o,abortable:n}=t,i=n?new AbortController:null,l=this._inJobs,c=Je[r];let p;try{if(typeof c!="function")throw new TypeError(`${r} is not a function`);p=c.call(null,o,{signal:i?i.signal:null})}catch(u){return void this._post({type:v,jobId:s,error:b(u)})}C(p)?(l.set(s,{controller:i,promise:p}),p.then(u=>{l.has(s)&&(l.delete(s),this._post({type:v,jobId:s},u))},u=>{l.has(s)&&(l.delete(s),u||(u={message:"Error encountered at method"+r}),A(u)||this._post({type:v,jobId:s,error:b(u||{message:`Error encountered at method ${r}`})}))})):this._post({type:v,jobId:s},p)}_onOpenedMessage(t){const{jobId:r,data:s}=t,o=this._outJobs.get(r);o&&(this._outJobs.delete(r),m(o.abortHandle),o.resolve(s))}_onResponseMessage(t){const{jobId:r,error:s,data:o}=t,n=this._outJobs.get(r);n&&(this._outJobs.delete(r),m(n.abortHandle),s?n.reject(E.fromJSON(JSON.parse(s))):n.resolve(o))}_post(t,r,s){return R(this.worker,t,r,s)}}const ie=a("host-browser")?Math.min(navigator.hardwareConcurrency-1,a("workers-pool-size")??8):0;let g=a("esri-mobile")?Math.min(ie,3):ie;g||(g=a("safari")&&a("mac")?7:2);let ae=0;const I=[];function Fe(){le()}async function j(e,t){const r=new te,{registryTarget:s,...o}=t;return await r.open(e,o),s&&ke(s,r),r}async function qe(e,t={}){if(typeof e!="string")throw new E("workers:undefined-module","modulePath is missing");let r=t.strategy||"distributed";if(a("host-webworker")&&!a("esri-workers")&&(r="local"),r==="local"){let s=await d.loadWorker(e);s||(s=await import(e)),W(t.signal);const o=t.client||s;return j([d.connect(s,t.schedule)],{...t,client:o})}if(await le(),W(t.signal),r==="dedicated"){const s=ae++%g;return j([await I[s].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const s=Math.min(t.maxNumWorkers,g);if(s<g){const o=new Array(s);for(let n=0;n<s;++n){const i=ae++%g;o[n]=I[i].open(e,t)}return j(o,t)}}return j(I.map(s=>s.open(e,t)),t)}let J=null;async function le(){if(J)return J;new AbortController;const e=[];for(let t=0;t<g;t++){const r=D.create(t).then(s=>(I[t]=s,s));e.push(r)}return J=Promise.all(e),J}export{d as E,Me as O,te as c,Fe as m,qe as p,K as s};
