import{J as S,bn as g,bo as d,bp as I,U as f,aw as w,s as b,H as $,q as o,u as a,bq as v,z as O,v as T,br as P,C as E}from"./main-C45WTWFO.js";import{t as L}from"./loadAll-BT210qk5.js";import{S as F}from"./MultiOriginJSONSupport-byZ2PGw9.js";import{i as M}from"./scaleUtils-DpFLKaL4.js";import{f as R}from"./Layer-DDoEY94q.js";import{i as q}from"./APIKeyMixin-BceUz8Si.js";import{m as J,f as _,t as j}from"./SublayersOwner-B4iVyvWH.js";import{l as N}from"./ArcGISService-S1l6btPN.js";import{l as U}from"./BlendLayer-BIxLTR1N.js";import{e as A}from"./CustomParametersMixin-BfbaPWVO.js";import{b as V}from"./OperationalLayer-Ce3sZKAy.js";import{j as k}from"./PortalLayer-CzwTgdyz.js";import{f as z}from"./RefreshableLayer-l0VYUDp9.js";import{t as C}from"./ScaleRangeLayer-U8f0yfLG.js";import{l as H}from"./TemporalLayer-BDi8GLkm.js";import{y as Z}from"./commonProperties-Cx0hHvk-.js";import{y as B}from"./ExportImageParameters-BvGAspyF.js";import{t as D}from"./imageBitmapUtils-vhKXHCEQ.js";import{e as x}from"./sublayerUtils-D5-kNfVM.js";import{t as G}from"./versionUtils-DSPrGwfV.js";import{p as K}from"./TimeExtent-DEVmKEPd.js";import"./preload-helper-ExcqyqRp.js";import"./Version-Bngs8ph3.js";import"./arcgisLayerUrl--0hGhC8f.js";import"./portalItemUtils-CpgfsoE_.js";import"./projection-BnfuWpaw.js";import"./projectBuffer-F7pB9YVv.js";import"./CollectionFlattener-ahAQi7mz.js";import"./UniqueValueRenderer-COdHaa9j.js";import"./RendererLegendOptions-ChHkZLAT.js";import"./diffUtils-Cpoeukbl.js";import"./colorRamps-BkkfhOPQ.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BWM9Luyr.js";import"./compilerUtils-CZkIm1oi.js";import"./lengthUtils-FP-S_jqE.js";import"./styleUtils-fqsgTuuo.js";import"./jsonUtils-DE_69DGn.js";import"./LRUCache-CJsGnEBa.js";import"./FieldsIndex-Tcaxvyqr.js";import"./UnknownTimeZone-BwkM8Za9.js";import"./OverrideHelper-5KGCu7Kn.js";import"./colorUtils-DcjH_uxR.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BDDEQ0S1.js";import"./heatmapUtils-B8gsHMDl.js";import"./QueryTask-CAxtFzim.js";import"./infoFor3D-_5f2f6Um.js";import"./Query-BhJjV8cx.js";import"./Field-Bo5KAoom.js";import"./fieldType-CzKcm5BS.js";import"./utils-D_w-juwc.js";import"./executeForIds-lyl1_d6d.js";import"./query-wxP4emsl.js";import"./normalizeUtils-CSDxHQTf.js";import"./normalizeUtilsCommon-CLxy382U.js";import"./utils-DPIpM5eS.js";import"./pbfQueryUtils-B9OnYhe5.js";import"./pbf-CMIHHjDa.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-DxDf1Sbb.js";import"./executeQueryPBF-RvgZ9KCT.js";import"./featureConversionUtils-CvMp17Lw.js";import"./FeatureSet-CcVP0MSw.js";import"./executeQueryJSON-BgY6OkGd.js";import"./featureLayerUtils-2Feo30KR.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-Bh5MOF3p.js";import"./FeatureType-BueThvHb.js";import"./FeatureTemplate-Cuux5EKY.js";import"./labelingInfo-C3buVVwv.js";import"./labelUtils-BynH2hFk.js";import"./LayerFloorInfo-UygWlFD9.js";import"./Relationship-CBiJZoO0.js";import"./serviceCapabilitiesUtils-BtCfrMQ9.js";import"./popupUtils-DCXE65fO.js";import"./jsonUtils-50pdFlv_.js";import"./parser-Cx3v90Ld.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-D__-bNYh.js";import"./PortalItem-BWasU-9O.js";import"./TimeInfo-B6EVxIF-.js";import"./ElevationInfo-BU_30ODg.js";import"./floorFilterUtils-DKzVzLpH.js";let r=class extends U(H(C(J(_(N(V(k(F(z(q(A(R)))))))))))){constructor(...t){super(...t),this._exportImageParameters=new B({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(S).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(t,e){const n=e.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(t,e,n,s){if(!this.loaded||!t)return;const m=t.slice().reverse().flatten(({sublayers:i})=>i&&i.toArray().reverse()).toArray();let p=!1;const l=g(s.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(l===d.PORTAL_ITEM){const i=this.createSublayersForOrigin("service").sublayers;p=x(m,i,d.SERVICE)}else if(l>d.PORTAL_ITEM){const i=this.createSublayersForOrigin("portal-item");p=x(m,i.sublayers,g(i.origin))}}const h=[],c={writeSublayerStructure:p,...s};let y=p||this.hasVisibleLayersForOrigin(l);m.forEach(i=>{const u=i.write({},c);h.push(u),y=y||i.originOf("visible")==="user"}),h.some(i=>Object.keys(i).length>1)&&(e.layers=h),y&&(e.visibleLayers=m.filter(i=>i.visible).map(i=>i.id))}createExportImageParameters(t,e,n,s){const m=s?.pixelRatio||1;t&&this.version>=10&&(t=t.clone().shiftCentralMeridian()),this._exportImageParameters.floors=s?.floors??null,this._exportImageParameters.scale=M({extent:t,width:e})*m;const p=this._exportImageParameters.toJSON(),l=!s?.rotation||this.version<10.3?{}:{rotation:-s.rotation},h=t?.spatialReference,c=I(h);p.dpi*=m;const y={};if(s?.timeExtent){const{start:i,end:u}=s.timeExtent.toJSON();y.time=i&&u&&i===u?""+i:`${i??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:t&&t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,bboxSR:c,imageSR:c,size:e+","+n,...p,...l,...y}}async fetchImage(t,e,n,s){const{data:m}=await this._fetchImage("image",t,e,n,s);return m}async fetchImageBitmap(t,e,n,s){const{data:m,url:p}=await this._fetchImage("blob",t,e,n,s);return D(m,p,s?.signal)}async fetchRecomputedExtents(t={}){const e={...t,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await f(this.url,e),{extent:s,fullExtent:m,timeExtent:p}=n,l=s||m;return{fullExtent:l&&w.fromJSON(l),timeExtent:p&&K.fromJSON({start:p[0],end:p[1]})}}loadAll(){return L(this,t=>{t(this.allSublayers),t(this.subtables)})}serviceSupportsSpatialReference(t){return G(this,t)}async _fetchImage(t,e,n,s,m){const p={responseType:t,signal:m?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,n,s,m),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(p.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:h}=await f(l,p);return{data:h,url:l}}catch(h){throw $(h)?h:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:h})}}async _fetchService(t){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:e,ssl:n}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:t});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e,this.read(e,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(t){return!(t==null||!this.sublayersSourceJSON[t]?.visibleLayers)}};o([a(v("dateFieldsTimeReference"))],r.prototype,"dateFieldsTimeZone",void 0),o([a({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),o([a()],r.prototype,"dpi",void 0),o([a()],r.prototype,"gdbVersion",void 0),o([a()],r.prototype,"imageFormat",void 0),o([O("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),o([a({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),o([a({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),o([a()],r.prototype,"imageTransparency",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),o([a({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),o([a({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),o([a({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),o([a(v("preferredTimeReference"))],r.prototype,"preferredTimeZone",void 0),o([a()],r.prototype,"sourceJSON",void 0),o([a({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),o([T("sublayers",{layers:{type:[j]},visibleLayers:{type:[P]}})],r.prototype,"writeSublayers",null),o([a({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),o([a(Z)],r.prototype,"url",void 0),r=o([E("esri.layers.MapImageLayer")],r);const Mr=r;export{Mr as default};
