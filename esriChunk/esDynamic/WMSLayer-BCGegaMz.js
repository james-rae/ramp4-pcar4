import{d8 as _e,aE as _,ax as N,aC as $,ed as je,V as k,k as a,o as u,as as O,u as R,bw as Te,A as se,s as ie,bO as A,B as E,I as ae,ar as Ce,al as qe,av as Ve,G as Be,cl as oe,U as G,bf as We,d2 as $e,b2 as ke,a$ as Ge,eq as De,H as He,f as Xe,q as D,bn as Je,dG as ze}from"./main-CXlQVgQI.js";import{n as Ze}from"./CollectionFlattener-D5qo3hl9.js";import{m as Qe,S as Ke}from"./MultiOriginJSONSupport-tiI99tpl.js";import{i as le}from"./scaleUtils-CsR4bO_U.js";import{f as Ye}from"./Layer-DdkevTSe.js";import{l as et}from"./BlendLayer-BZS-DREF.js";import{b as tt}from"./OperationalLayer-DqCYeuxm.js";import{j as rt}from"./PortalLayer-YysUJqD0.js";import{f as nt}from"./RefreshableLayer-Cv6ZstuE.js";import{t as st}from"./ScaleRangeLayer-BS5oUrLM.js";import{l as it}from"./TemporalLayer-Dg5y9s-c.js";import{o as H}from"./crsUtils-BLe27KvG.js";import{b as at}from"./arcgisLayerUrl-DZ5ZdaxU.js";import{d as ot,y as lt}from"./commonProperties-DqgsStC1.js";import{a as ue}from"./ExportWMSImageParameters-B63HdgEi.js";import{t as ut}from"./imageBitmapUtils-CrBTJfo9.js";var j;let pt=0,y=j=class extends _e(Qe){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([_(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),_(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),$(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),$(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return je(k.ofType(j),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new j;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map(t=>t.clone())??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],y.prototype,"description",void 0),a([u({readOnly:!0})],y.prototype,"dimensions",void 0),a([u({type:O,json:{name:"extent"}})],y.prototype,"fullExtent",void 0),a([u()],y.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],y.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],y.prototype,"legendUrl",void 0),a([R("legendUrl",["legendUrl","legendURL"])],y.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],y.prototype,"legendEnabled",void 0),a([u()],y.prototype,"layer",void 0),a([u()],y.prototype,"maxScale",void 0),a([u()],y.prototype,"minScale",void 0),a([u({readOnly:!0})],y.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"name",void 0),a([u()],y.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],y.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],y.prototype,"queryable",void 0),a([u()],y.prototype,"sublayers",void 0),a([Te("sublayers")],y.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],y.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],y.prototype,"visible",null),y=j=a([se("esri.layers.support.WMSSublayer")],y);const X=y,pe={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new ie("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=g("Capability",r),s=g("Service",r),l=n&&g("Request",n);if(!n||!s||!l)return null;const i=g("Layer",n);if(!i)return null;const m=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",o=w("Title",s,"")||w("Name",s,""),p=w("AccessConstraints",s,""),f=/^none$/i.test(p)?"":p,d=w("Abstract",s,""),x=parseInt(w("MaxWidth",s,"5000"),10),v=parseInt(w("MaxHeight",s,"5000"),10),S=fe(l,"GetMap"),I=de(l,"GetMap"),h=q(i,m,t);if(!h)return null;let Q,V=0;const Fe=Array.prototype.slice.call(n.childNodes),Oe=h.sublayers??[],K=b=>{b!=null&&Oe.push(b)};Fe.forEach(b=>{b.nodeName==="Layer"&&(V===0?Q=b:(V===1&&h.name&&(h.name="",K(q(Q,m,t))),K(q(b,m,t))),V++)});let F=h.sublayers,B=h.extent;const Re=h.fullExtents??[];if(F||(F=[]),F.length===0&&F.push(h),!B){const b=new O(F[0].extent);h.extent=b.toJSON(),B=h.extent}const Le=h.spatialReferences.length>0?h.spatialReferences:ce(h),Y=de(l,"GetFeatureInfo"),Pe=Y?fe(l,"GetFeatureInfo"):null,ee=me(F),Ae=h.minScale||0,Ue=h.maxScale||0,te=h.dimensions??[],Me=ee.reduce((b,P)=>b.concat(P.dimensions??[]),[]),re=te.concat(Me).filter(ge);let ne=null;if(re.length){const b=re.map(P=>{const{extent:W}=P;return ft(W)?W.map(M=>M.getTime()):W?.map(M=>[M.min.getTime(),M.max.getTime()])}).flat(2).filter(A);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:f,description:d,dimensions:te,extent:B,fullExtents:Re,featureInfoFormats:Pe,featureInfoUrl:Y,mapUrl:I,maxWidth:x,maxHeight:v,maxScale:Ue,minScale:Ae,layers:ee,spatialReferences:Le,supportedImageFormatTypes:S,timeInfo:ne,title:o,version:m}}function mt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function ce(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ce(t);if(r.length>0)return r}return[]}function me(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(me(r.sublayers)),delete r.sublayers);return t}function T(e,t,r){return t.getAttribute(e)??r}function dt(e,t,r,n){const s=g(e,r);return s?T(t,s,n):n}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(he(n)&&n.nodeName===e)return n}return null}function C(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];he(s)&&s.nodeName===e&&r.push(s)}return r}function w(e,t,r){return g(e,t)?.textContent??r}function U(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let m,o,p,f;r?(m=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(i)?Number.MAX_VALUE:i,f=isNaN(l)?Number.MAX_VALUE:l):(m=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(i)?Number.MAX_VALUE:i);const d=new E({wkid:t});return new O({xmin:m,ymin:o,xmax:p,ymax:f,spatialReference:d})}function de(e,t){const r=g(t,e);if(r){const n=g("DCPType",r);if(n){const s=g("HTTP",n);if(s){const l=g("Get",s);if(l){let i=dt("OnlineResource","xlink:href",l,null);if(i){const m=i.indexOf("&");return m!==-1&&m===i.length-1&&(i=i.slice(0,-1)),ht(i,["service","request"])}}}}}return null}function fe(e,t){const r=C("Operation",e);if(!r.length)return C("Format",g(t,e)).map(({textContent:s})=>s).filter(A);const n=[];for(const s of r)if(s.getAttribute("name")===t){const l=C("Format",s);for(const{textContent:i}of l)i!=null&&n.push(i)}return n}function ye(e,t,r){const n=g(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const l=Number(s);return isNaN(l)?r:l}function q(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=g("LatLonBoundingBox",e),l=g("EX_GeographicBoundingBox",e);let i=null;s&&(i=U(s,4326)),l&&(i=new O(0,0,0,0,new E({wkid:4326})),i.xmin=parseFloat(w("westBoundLongitude",l,"0")),i.ymin=parseFloat(w("southBoundLatitude",l,"0")),i.xmax=parseFloat(w("eastBoundLongitude",l,"0")),i.ymax=parseFloat(w("northBoundLatitude",l,"0"))),s||l||(i=new O(-180,-90,180,90,new E({wkid:4326}))),n.minScale=ye(e,"MaxScaleDenominator",0),n.maxScale=ye(e,"MinScaleDenominator",0);const m=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if(o.nodeName==="Name")n.name=o.textContent||"";else if(o.nodeName==="Title")n.title=o.textContent||"";else if(o.nodeName==="Abstract")n.description=o.textContent||"";else if(o.nodeName==="BoundingBox"){const p=o.getAttribute(m);if(p&&p.indexOf("EPSG:")===0){const d=parseInt(p.slice(5),10);d===0||isNaN(d)||i||(i=t==="1.3.0"?U(o,d,H(d)):U(o,d))}const f=p?.indexOf(":");if(f&&f>-1){let d=parseInt(p.slice(f+1),10);d===0||isNaN(d)||(d=pe[d]??d);const x=t==="1.3.0"?U(o,d,H(d)):U(o,d);x&&n.fullExtents&&n.fullExtents.push(x)}}else if(o.nodeName===m)(o.textContent?.split(" ")??[]).forEach(p=>{let f=NaN;if(p.includes(":")){const[d,x]=p.toUpperCase().split(":");d!=="CRS"&&d!=="EPSG"||(f=parseInt(x,10))}else f=parseInt(p,10);if(f!==0&&!isNaN(f)){const d=pe[f]??f;n.spatialReferences.includes(d)||n.spatialReferences.push(d)}});else if(o.nodeName!=="Style"||n.legendUrl){if(o.nodeName==="Layer"){const p=q(o,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=g("LegendURL",o);if(p){const f=g("OnlineResource",p);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=i?.toJSON(),n.dimensions=C("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const p=o.getAttribute("name"),f=o.getAttribute("units"),d=o.textContent,x=o.getAttribute("unitSymbol")??void 0,v=o.getAttribute("default")??void 0,S=T("default",o,"0")!=="0",I=T("nearestValue",o,"0")!=="0",h=T("current",o,"0")!=="0";return ge({name:p,units:f})?{name:"time",units:"ISO8601",extent:we(d),default:we(v),multipleValues:S,nearestValue:I,current:h}:yt({name:p,units:f})?{name:"elevation",units:f,extent:be(d),unitSymbol:x,default:be(v),multipleValues:S,nearestValue:I}:{name:p,units:f,extent:xe(d),unitSymbol:x,default:xe(v),multipleValues:S,nearestValue:I}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function he(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ge(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=ae(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function be(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(A):r.map(n=>parseFloat(n))}function xe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(A):r}function we(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:J(s[0]),max:J(s[1]),resolution:s.length>=3&&s[2]!=="0"?gt(s[2]):void 0}}).filter(A):r.map(n=>J(n))}function J(e){return Ce.fromISO(e,{zone:qe.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:L(r[1]),months:L(r[2]),days:L(r[3]),hours:L(r[4]),minutes:L(r[5]),seconds:L(r[6])}:null}function L(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function z(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function ve(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${z(t)}`:`${t?z(t):bt}/${r?z(r):xt}`}const Se=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&Se.has(r)?t.find(n=>Se.has(n))||t.find(n=>wt.has(n))||102100:r)}const Z=new Ve({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function Ie(e){return e==="text/html"}function Ne(e){return e==="text/plain"}let c=class extends et(it(nt(st(tt(rt(Ke(Ye))))))){constructor(...e){super(...e),this.allSublayers=new Ze({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([_(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),_(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),$(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Be).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new O({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(Ie)??this.featureInfoFormats.find(Ne)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(Ie(e)||Ne(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new E(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Ee(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Ee(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i??[]);for(const i of l)if(typeof i.parent?.id=="number"){const m=s.get(i.parent.id);m!=null?m.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const m={sublayer:i,...n},o=i.write({parentLayerId:typeof i.parent?.id=="number"?i.parent.id:-1},m);if(s.has(i.id)&&(o.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const p=i.write({},m);delete p.id,t.layers.push(p)}}t.visibleLayers=l.filter(({visible:i,sublayers:m})=>i&&!m).map(({name:i})=>i).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=ae(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=oe(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=n?.pixelRatio??1,l=le({extent:e,width:t})*s,i=new ue({layer:this,scale:l}),{xmin:m,ymin:o,xmax:p,ymax:f,spatialReference:d}=e,x=vt(d,this.spatialReferences),v=this.version==="1.3.0"&&H(x)?`${o},${m},${f},${p}`:`${m},${o},${p},${f}`,S=i.toJSON(),I=this.version==="1.3.0"?"crs":"srs";return{bbox:v,[I]:x==null||isNaN(x)?void 0:"EPSG:"+x,...S}}async fetchImage(e,t,r,n){const s=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const o=document.createElement("canvas");return o.width=t,o.height=r,o}const i=ve(n?.timeExtent),m={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n?.signal};return G(s??"",m).then(o=>o.data)}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const p=document.createElement("canvas");return p.width=t,p.height=r,p}const i=ve(n?.timeExtent),m={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n?.signal},{data:o}=await G(s,m);return ut(o,s,n?.signal)}fetchFeatureInfo(e,t,r,n,s){const l=le({extent:e,width:t}),i=new ue({layer:this,scale:l}),m=mt(i.visibleSublayers);if(this.featureInfoUrl==null||m==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const o=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},p={query_layers:m,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},f={...this.createExportImageParameters(e,t,r),...p},d=this._mixCustomParameters(f);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(d):this._defaultFetchFeatureInfoFunction(oe(this.featureInfoUrl,d))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return at(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?E.WebMercator:new E({wkid:t});return We(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=$e(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new ke({title:this.title,content:t}),n=new Ge({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await G(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(n)}if(this.parsedUrl){const t=new De(this.parsedUrl.path),{httpsDomains:r}=He.request;t.scheme!=="https"||t.port&&t.port!=="443"||!t.host||r.includes(t.host)||r.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new ie("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(ze(r,n,null,t))return!0;return!1})}function Ee(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=Xe(e)).forEach((l,i)=>l.id=i);for(const l of e){const i=new X;i.read(l,t),r&&!r.includes(i.name)&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const l of e){const i=l.id!=null?n.get(l.id):null;if(i)if(l.parentLayerId!=null&&l.parentLayerId>=0){const m=n.get(l.parentLayerId);if(!m)continue;m.sublayers||(m.sublayers=new k),m.sublayers.push(i)}else s.push(i)}return s}a([u({readOnly:!0})],c.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),a([u()],c.prototype,"description",void 0),a([u({readOnly:!0})],c.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),a([R(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),a([u()],c.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),a([u()],c.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:Z.jsonValues,read:{reader:Z.read,source:"format"},write:{writer:Z.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),a([R("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),a([u()],c.prototype,"imageTransparency",void 0),a([u(ot)],c.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),a([u({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),a([u()],c.prototype,"resourceInfo",void 0),a([u({type:E,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),a([R(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[Je],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),a([u({type:k.ofType(X),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),a([R(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),a([R("service","sublayers",["layers"])],c.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[X]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),a([u(lt)],c.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=a([se("esri.layers.WMSLayer")],c);const It=c;export{It as default};