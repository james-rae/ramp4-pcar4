import{G as S,bj as f,bk as d,bl as I,U as g,as as w,s as b,E as O,k as i,o,bm as v,u as T,q as P,bn as E,A as L}from"./main-CXlQVgQI.js";import{t as F}from"./loadAll-CFI5n8K4.js";import{S as M}from"./MultiOriginJSONSupport-tiI99tpl.js";import{i as R}from"./scaleUtils-CsR4bO_U.js";import{f as j}from"./Layer-DdkevTSe.js";import{i as _}from"./APIKeyMixin-B2MTxb7C.js";import{m as N,f as U,t as q}from"./SublayersOwner-C1MOio55.js";import{l as J}from"./ArcGISService-Cv_OSTpA.js";import{l as A}from"./BlendLayer-BZS-DREF.js";import{e as k}from"./CustomParametersMixin-DS3jLnRi.js";import{b as V}from"./OperationalLayer-DqCYeuxm.js";import{j as z}from"./PortalLayer-YysUJqD0.js";import{f as G}from"./RefreshableLayer-Cv6ZstuE.js";import{t as Z}from"./ScaleRangeLayer-BS5oUrLM.js";import{l as $}from"./TemporalLayer-Dg5y9s-c.js";import{y as B}from"./commonProperties-DqgsStC1.js";import{y as C}from"./ExportImageParameters-D1MNm9UX.js";import{t as D}from"./imageBitmapUtils-CrBTJfo9.js";import{e as x}from"./sublayerUtils-BfDqnM-d.js";import{t as H}from"./versionUtils-Cg4jAQzD.js";import{p as K}from"./TimeExtent-C7FYOlbe.js";let t=class extends A($(Z(N(U(J(V(z(M(G(_(k(j)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new C({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(S).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,a){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;const m=f(a.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(m===d.PORTAL_ITEM){const s=this.createSublayersForOrigin("service").sublayers;n=x(l,s,d.SERVICE)}else if(m>d.PORTAL_ITEM){const s=this.createSublayersForOrigin("portal-item");n=x(l,s.sublayers,f(s.origin))}}const h=[],c={writeSublayerStructure:n,...a};let y=n||this.hasVisibleLayersForOrigin(m);l.forEach(s=>{const u=s.write({},c);h.push(u),y=y||s.originOf("visible")==="user"}),h.some(s=>Object.keys(s).length>1)&&(r.layers=h),y&&(r.visibleLayers=l.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,r,p,a){const l=a?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=a?.floors??null,this._exportImageParameters.scale=R({extent:e,width:r})*l;const n=this._exportImageParameters.toJSON(),m=!a?.rotation||this.version<10.3?{}:{rotation:-a.rotation},h=e?.spatialReference,c=I(h);n.dpi*=l;const y={};if(a?.timeExtent){const{start:s,end:u}=a.timeExtent.toJSON();y.time=s&&u&&s===u?""+s:`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+p,...n,...m,...y}}async fetchImage(e,r,p,a){const{data:l}=await this._fetchImage("image",e,r,p,a);return l}async fetchImageBitmap(e,r,p,a){const{data:l,url:n}=await this._fetchImage("blob",e,r,p,a);return D(l,n,a?.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await g(this.url,r),{extent:a,fullExtent:l,timeExtent:n}=p,m=a||l;return{fullExtent:m&&w.fromJSON(m),timeExtent:n&&K.fromJSON({start:n[0],end:n[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return H(this,e)}async _fetchImage(e,r,p,a,l){const n={responseType:e,signal:l?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,a,l),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(n.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:h}=await g(m,n);return{data:h,url:m}}catch(h){throw O(h)?h:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(e==null||!this.sublayersSourceJSON[e]?.visibleLayers)}};i([o(v("dateFieldsTimeReference"))],t.prototype,"dateFieldsTimeZone",void 0),i([o({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0),i([o()],t.prototype,"dpi",void 0),i([o()],t.prototype,"gdbVersion",void 0),i([o()],t.prototype,"imageFormat",void 0),i([T("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),i([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),i([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),i([o()],t.prototype,"imageTransparency",void 0),i([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),i([o({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),i([o(v("preferredTimeReference"))],t.prototype,"preferredTimeZone",void 0),i([o()],t.prototype,"sourceJSON",void 0),i([o({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),i([P("sublayers",{layers:{type:[q]},visibleLayers:{type:[E]}})],t.prototype,"writeSublayers",null),i([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),i([o({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),i([o(B)],t.prototype,"url",void 0),t=i([L("esri.layers.MapImageLayer")],t);const W=t;export{W as default};