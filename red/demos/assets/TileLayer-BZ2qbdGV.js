import{J as _,D as v,I as S,U as c,by as T,s as u,bz as b,q as s,u as a,z as w,v as O,bA as $,C as R}from"./main-BZJ3Qd5K.js";import{t as U}from"./loadAll-BJTcBsCa.js";import{S as W}from"./MultiOriginJSONSupport-Dbt2BArL.js";import{f as P}from"./Layer-D8U3MG56.js";import{i as j}from"./APIKeyMixin-BQfsM8H_.js";import{p as A}from"./ArcGISCachedService-B8fR_QXe.js";import{m as I,f as L,t as B}from"./SublayersOwner-BDcxiiHU.js";import{l as C}from"./ArcGISService-ebms0QIb.js";import{l as M}from"./BlendLayer-BK9Uv26T.js";import{e as N}from"./CustomParametersMixin-BS7ATcqd.js";import{b as D}from"./OperationalLayer-D7TWu84q.js";import{j as k}from"./PortalLayer-BUIBI_RM.js";import{f as J}from"./RefreshableLayer-Ep8Ydd4M.js";import{t as q}from"./ScaleRangeLayer-CxwGkrfK.js";import{d as G,g as V,p as z}from"./arcgisLayerUrl-CmfT-saV.js";import{y as E}from"./commonProperties-DuTKtWhB.js";import{o as y}from"./imageBitmapUtils-uCfC8a96.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-ocVmLA2y.js";import"./TileInfo-BHdWfaF2.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-DZCg3iu-.js";import"./TilemapCache-DP0Vus0k.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-qDUDD3bO.js";import"./Version-UCJA5wmP.js";import"./portalItemUtils-KiX1C6hB.js";import"./projection-BNcXvFgQ.js";import"./projectBuffer-CIj7HyWF.js";import"./CollectionFlattener-CxdvVbCc.js";import"./UniqueValueRenderer-Cx_COm-f.js";import"./RendererLegendOptions-zTlWUdoe.js";import"./diffUtils-wsHQMnnB.js";import"./colorRamps-BhSsi93l.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CXW9Ht1U.js";import"./compilerUtils-CKkoRW9M.js";import"./lengthUtils-DoTmbXcg.js";import"./styleUtils-C6ozL5Hd.js";import"./jsonUtils-CoOyGl7a.js";import"./FieldsIndex-Yb6xEjsC.js";import"./UnknownTimeZone-DMPqWLGe.js";import"./OverrideHelper-BACbqaFQ.js";import"./colorUtils-CdXOKSOf.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-D7m1KQaI.js";import"./heatmapUtils-iP2R7ZHR.js";import"./QueryTask-CKQ2c6NS.js";import"./infoFor3D-_5f2f6Um.js";import"./Query-CjsolEdw.js";import"./Field-Di2Xz8nL.js";import"./fieldType-BaHTRhkB.js";import"./utils-znqEfDEN.js";import"./executeForIds-CQLuDTQN.js";import"./query-c409Dcd5.js";import"./normalizeUtils-BRl8DUYE.js";import"./normalizeUtilsCommon-F088jbvv.js";import"./utils-9t5l6xmc.js";import"./pbfQueryUtils-H-yeuF5-.js";import"./pbf-inAxyRM7.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-o89_d7rK.js";import"./executeQueryPBF-CJma0AMP.js";import"./featureConversionUtils-DTrc5loO.js";import"./FeatureSet-BSEezTkt.js";import"./executeQueryJSON-CinOAh2o.js";import"./featureLayerUtils-B8FqOQvZ.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-tGjDs237.js";import"./FeatureType-_7cBkJHd.js";import"./FeatureTemplate-4rOpZojr.js";import"./labelingInfo-BGeQhcDt.js";import"./labelUtils-qLMnU-T6.js";import"./LayerFloorInfo-Bxyv2sVs.js";import"./Relationship-CdCLc496.js";import"./serviceCapabilitiesUtils-BkkMiho5.js";import"./popupUtils-0335OjrW.js";import"./sublayerUtils-ChlQz_-7.js";import"./jsonUtils-tb2xzObw.js";import"./parser-DLwwPwXy.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Cm6-9mvg.js";import"./PortalItem-JiujPliF.js";import"./ElevationInfo-3FZ63WC2.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends M(q(I(A(L(D(k(C(W(J(j(N(P)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo?.spatialReference)&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],m={writeSublayerStructure:!1,...o};p.forEach(n=>{const h=n.write({},m);l.push(h)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,l=this.getTileUrl(e,r,t),m={responseType:"image",signal:p,query:{...this.refreshParameters}};return c(l,m).then(n=>n.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,p)}const l=this.getTileUrl(e,r,t),m={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:n}=await c(l,m);return y(n,e,r,t,p)}getTileUrl(e,r,t){const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=T({...this.parsedUrl?.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl?.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return U(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=G(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");c(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!V(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!z(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return c(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return b("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([w("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([O("sublayers",{layers:{type:[B]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([$("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(E)],i.prototype,"url",void 0),i=d=s([R("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ur=i;export{Ur as default};