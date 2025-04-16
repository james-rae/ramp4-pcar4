import{X as S,bw as f,bx as c,by as I,a2 as g,bz as w,s as b,U as O,x as i,z as o,D as T,B as P,bt as E,K as L}from"./main-DZMdXZ8-.js";import{t as F}from"./loadAll-A2pnVvh-.js";import{S as M}from"./MultiOriginJSONSupport-PUW7Sd_D.js";import{i as R}from"./scaleUtils-B73M02tO.js";import{f as _}from"./Layer-xEvZCjQd.js";import{i as j}from"./APIKeyMixin-BskD_Ay4.js";import{m as N,f as U,s as J}from"./SublayersOwner-B9QkbEGw.js";import{l as q}from"./ArcGISService-vFaDTCDw.js";import{p as A}from"./BlendLayer-Gs5NpHRr.js";import{e as V}from"./CustomParametersMixin-DP_Acdbk.js";import{b as k}from"./OperationalLayer-C9HGRTRG.js";import{j as z}from"./PortalLayer-Dt1RSXVT.js";import{f as B}from"./RefreshableLayer-C9FNQZbJ.js";import{t as D}from"./ScaleRangeLayer-B47qjr3h.js";import{l as K}from"./TemporalLayer-CYdB4o6a.js";import{y as Z}from"./commonProperties-DpSgLFaT.js";import{y as $}from"./ExportImageParameters-S1XTaXnV.js";import{t as C}from"./imageBitmapUtils-BQFBKekU.js";import{e as v}from"./sublayerUtils-B5AS0hlo.js";import{t as G}from"./versionUtils-bHgQqkCW.js";import{p as H}from"./TimeExtent-Cf-Ev8sT.js";import{a as x}from"./timeZoneUtils-BsUgTrKq.js";let t=class extends A(K(D(N(U(q(k(z(M(B(j(V(_)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new $({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(S).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const l=r.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,l,a){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:s})=>s&&s.toArray().reverse()).toArray();let n=!1;const m=f(a.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(m===c.PORTAL_ITEM){const s=this.createSublayersForOrigin("service").sublayers;n=v(p,s,c.SERVICE)}else if(m>c.PORTAL_ITEM){const s=this.createSublayersForOrigin("portal-item");n=v(p,s.sublayers,f(s.origin))}}const h=[],d={writeSublayerStructure:n,...a};let y=n||this.hasVisibleLayersForOrigin(m);p.forEach(s=>{const u=s.write({},d);h.push(u),y=y||s.originOf("visible")==="user"}),h.some(s=>Object.keys(s).length>1)&&(r.layers=h),y&&(r.visibleLayers=p.filter(s=>s.visible).map(s=>s.id))}createExportImageParameters(e,r,l,a){const p=a?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=a?.floors??null,this._exportImageParameters.scale=R({extent:e,width:r})*p;const n=this._exportImageParameters.toJSON(),m=!a?.rotation||this.version<10.3?{}:{rotation:-a.rotation},h=e?.spatialReference,d=I(h);n.dpi*=p;const y={};if(a?.timeExtent){const{start:s,end:u}=a.timeExtent.toJSON();y.time=s&&u&&s===u?""+s:`${s??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:void 0,bboxSR:d,imageSR:d,size:r+","+l,...n,...m,...y}}async fetchImage(e,r,l,a){const{data:p}=await this._fetchImage("image",e,r,l,a);return p}async fetchImageBitmap(e,r,l,a){const{data:p,url:n}=await this._fetchImage("blob",e,r,l,a);return C(p,n,a?.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await g(this.url,r),{extent:a,fullExtent:p,timeExtent:n}=l,m=a||p;return{fullExtent:m&&w.fromJSON(m),timeExtent:n&&H.fromJSON({start:n[0],end:n[1]})}}loadAll(){return F(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return G(this,e)}async _fetchImage(e,r,l,a,p){const n={responseType:e,signal:p?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,l,a,p),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(n.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:h}=await g(m,n);return{data:h,url:m}}catch(h){throw O(h)?h:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:h})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:l}=await g(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(e==null||!this.sublayersSourceJSON[e]?.visibleLayers)}};i([o(x("dateFieldsTimeReference"))],t.prototype,"dateFieldsTimeZone",void 0),i([o({type:Boolean})],t.prototype,"datesInUnknownTimezone",void 0),i([o()],t.prototype,"dpi",void 0),i([o()],t.prototype,"gdbVersion",void 0),i([o()],t.prototype,"imageFormat",void 0),i([T("imageFormat",["supportedImageFormatTypes"])],t.prototype,"readImageFormat",null),i([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],t.prototype,"imageMaxHeight",void 0),i([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],t.prototype,"imageMaxWidth",void 0),i([o()],t.prototype,"imageTransparency",void 0),i([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"labelsVisible",void 0),i([o({type:["ArcGISMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),i([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),i([o(x("preferredTimeReference"))],t.prototype,"preferredTimeZone",void 0),i([o()],t.prototype,"sourceJSON",void 0),i([o({json:{write:{ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),i([P("sublayers",{layers:{type:[J]},visibleLayers:{type:[E]}})],t.prototype,"writeSublayers",null),i([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),i([o({json:{read:!1},readOnly:!0,value:"map-image"})],t.prototype,"type",void 0),i([o(Z)],t.prototype,"url",void 0),t=i([L("esri.layers.MapImageLayer")],t);const W=t;export{W as default};
