import{G as S,bl as f,bm as d,bn as I,U as g,au as w,s as b,E as O,k as i,o,bo as v,u as T,q as P,bp as E,A as L}from"./main-DaZH2qzH.js";import{t as F}from"./loadAll-NQx3aD_a.js";import{S as M}from"./MultiOriginJSONSupport-BMRgewNY.js";import{i as R}from"./scaleUtils-3CWvXWTy.js";import{f as _}from"./Layer-DbM0uHSE.js";import{i as j}from"./APIKeyMixin-BwTOJW_v.js";import{m as N,f as U,t as q}from"./SublayersOwner-C6k8xUOh.js";import{l as J}from"./ArcGISService-pYSM0R7P.js";import{l as A}from"./BlendLayer-CXfLWy5f.js";import{e as k}from"./CustomParametersMixin-BfL-cVRH.js";import{b as V}from"./OperationalLayer-BDPzPnyT.js";import{j as z}from"./PortalLayer-DxhSSDeI.js";import{f as G}from"./RefreshableLayer-CcXdOliy.js";import{t as Z}from"./ScaleRangeLayer-B6qkSIcH.js";import{l as $}from"./TemporalLayer-Bg8Ibe7m.js";import{y as B}from"./commonProperties-CNeWdTKN.js";import{y as C}from"./ExportImageParameters-Bn2X-JA8.js";import{t as D}from"./imageBitmapUtils-CDikhvHB.js";import{e as x}from"./sublayerUtils-00M3GJHZ.js";import{t as H}from"./versionUtils-NguPMv56.js";import{p as K}from"./TimeExtent-Ce0DTrDh.js";let t=class extends A($(Z(N(U(J(V(z(M(G(j(k(_)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new C({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(S).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const l=r.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,l,a){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;const m=f(a.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(m===d.PORTAL_ITEM){const s=this.createSublayersForOrigin("service").sublayers;n=x(p,s,d.SERVICE)}else if(m>d.PORTAL_ITEM){const s=this.createSublayersForOrigin("portal-item");n=x(p,s.sublayers,f(s.origin))}}const h=[],c={writeSublayerStructure:n,...a};let y=n||this.hasVisibleLayersForOrigin(m);p.forEach(s=>{const u=s.write({},c);h.push(u),y=y||s.originOf("visible")==="user"}),h.some(s=>Object.keys(s).length>1)&&(r.layers=h),y&&(r.visibleLayers=p.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,r,l,a){const p=a?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=a?.floors??null,this._exportImageParameters.scale=R({extent:e,width:r})*p;const n=this._exportImageParameters.toJSON(),m=!a?.rotation||this.version<10.3?{}:{rotation:-a.rotation},h=e?.spatialReference,c=I(h);n.dpi*=p;const y={};if(a?.timeExtent){const{start:s,end:u}=a.timeExtent.toJSON();y.time=s&&u&&s===u?""+s:`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+l,...n,...m,...y}}async fetchImage(e,r,l,a){const{data:p}=await this._fetchImage("image",e,r,l,a);return p}async fetchImageBitmap(e,r,l,a){const{data:p,url:n}=await this._fetchImage("blob",e,r,l,a);return D(p,n,a?.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await g(this.url,r),{extent:a,fullExtent:p,timeExtent:n}=l,m=a||p;return{fullExtent:m&&w.fromJSON(m),timeExtent:n&&K.fromJSON({start:n[0],end:n[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return H(this,e)}async _fetchImage(e,r,l,a,p){const n={responseType:e,signal:p?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,l,a,p),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(n.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:h}=await g(m,n);return{data:h,url:m}}catch(h){throw O(h)?h:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:l}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(e==null||!this.sublayersSourceJSON[e]?.visibleLayers)}};i([o(v("dateFieldsTimeReference"))],t.prototype,"dateFieldsTimeZone",void 0),i([o({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0),i([o()],t.prototype,"dpi",void 0),i([o()],t.prototype,"gdbVersion",void 0),i([o()],t.prototype,"imageFormat",void 0),i([T("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),i([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),i([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),i([o()],t.prototype,"imageTransparency",void 0),i([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),i([o({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),i([o(v("preferredTimeReference"))],t.prototype,"preferredTimeZone",void 0),i([o()],t.prototype,"sourceJSON",void 0),i([o({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),i([P("sublayers",{layers:{type:[q]},visibleLayers:{type:[E]}})],t.prototype,"writeSublayers",null),i([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),i([o({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),i([o(B)],t.prototype,"url",void 0),t=i([L("esri.layers.MapImageLayer")],t);const W=t;export{W as default};
