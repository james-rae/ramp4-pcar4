import{bD as n,J as p,U as y,ce as m,K as u,q as o,u as i,z as d,aw as h,C as c,de as a,df as f,dg as S,dh as g,di as v}from"./main-CdIhtOSF.js";import{S as b}from"./MultiOriginJSONSupport-DgeO1CjU.js";import{f as C}from"./Layer-cvHs5bqh.js";import{l as G}from"./BlendLayer-YcmQ_Qkh.js";import{b as w}from"./OperationalLayer-ChTa0Wxj.js";import{j as P}from"./PortalLayer-DL8iXCHg.js";import{f as _}from"./RefreshableLayer-MDHsoCEG.js";import{t as x}from"./ScaleRangeLayer-Dh5qhmeW.js";import{u as R,d as k,y as $}from"./commonProperties-8NI_P-D4.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-D0MhnQJi.js";import"./jsonUtils-CzZqQOU8.js";import"./parser-BsklBJ1C.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CEtQ2yPT.js";import"./common-DQOJ18NT.js";import"./PortalItem-cdYEWUwg.js";import"./portalItemUtils-Bh5bujq4.js";import"./projection-CnhLv0Zh.js";import"./projectBuffer-DZLir_15.js";import"./ElevationInfo-k5kGeWR0.js";import"./lengthUtils-Xx-yI75s.js";const j=["atom","xml"],F={base:a,key:"type",typeMap:{"simple-line":f},errorContext:"symbol"},E={base:a,key:"type",typeMap:{"picture-marker":S,"simple-marker":g},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"simple-fill":v},errorContext:"symbol"};let t=class extends G(_(w(P(x(b(C)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(s=>{const l=s.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?n(this.url,j)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(p).then(()=>this._fetchService(r)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:s}=await y(u.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:m(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return s}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([i()],t.prototype,"description",void 0),o([i()],t.prototype,"featureCollections",void 0),o([d("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([i({type:h,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([i(R)],t.prototype,"id",void 0),o([i(k)],t.prototype,"legendEnabled",void 0),o([i({types:F,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],t.prototype,"listMode",void 0),o([i({types:E,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([i({types:M,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([i($)],t.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([c("esri.layers.GeoRSSLayer")],t);const oe=t;export{oe as default};
