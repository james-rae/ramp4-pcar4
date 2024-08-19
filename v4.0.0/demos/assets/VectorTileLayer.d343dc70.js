import{a6 as G,d as _,az as H,U as w,s as q,b3 as C,cO as j,b2 as Y,m as b,lJ as V,G as L,aF as U,lp as X,lq as Z,M as Q,aA as E,lY as K,ma as ee,mb as z,aB as F,aK as te,mc as J,fd as M,kh as re,ki as se,du as ie,dv as oe,dw as le,dx as ae,kT as ne,kv as ue,dy as ce,dD as pe,cb as B,ae as he,md as ye,c8 as k,bO as de,K as p,N as h,k as me,cY as fe,dC as ge,O as Ae}from"./main.efb50b2c.js";import{e as Se}from"./jsonContext.4a2dd7f6.js";import{l as we}from"./StyleRepository.3f478fb9.js";import"./preload-helper.387dac8f.js";import"./StyleDefinition.627ffe6c.js";import"./enums.6e42a319.js";import"./enums.2a1fad7f.js";import"./enums.de935fa5.js";import"./VertexElementDescriptor.d386088d.js";import"./GeometryUtils.814cb798.js";import"./Geometry.b68345ae.js";let R=null;function ve(e){if(R)return R;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return R=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),R}const xe=G.getLogger("esri.layers.support.SpriteSource"),Ue=1.15;class D{constructor(t,r,s,i){this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=s,this._spriteImageFormat=i,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>Ue;const r=_(this.baseURL),s=r.query?"?"+H(r.query):"",i=this._isRetina?"@2x":"",l=`${r.path}${i}.${this._spriteImageFormat}${s}`,o=`${r.path}${i}.json${s}`;return Promise.all([w(o,t),w(l,{responseType:"image",...t})]).then(([a,n])=>{const u=Object.keys(a.data);if(!u||u.length===0||u.length===1&&u[0]==="_ssl"||!n||!n.data)return this._spritesData=this.image=null,this.width=this.height=0,null;this._spritesData=a.data;const y=n.data,A=Math.max(this.maxTextureSize,4096);if(y.width>A||y.height>A){const g=`Sprite resource for style ${r.path} is bigger than the maximum allowed of ${A} pixels}`;throw xe.error(g),new q("SpriteSource",g)}this.width=y.width,this.height=y.height;const d=document.createElement("canvas"),m=d.getContext("2d");d.width=y.width,d.height=y.height,m.drawImage(y,0,0,y.width,y.height);const I=m.getImageData(0,0,y.width,y.height),f=new Uint8Array(I.data);let T;for(let g=0;g<f.length;g+=4)T=f[g+3]/255,f[g]=f[g]*T,f[g+1]=f[g+1]*T,f[g+2]=f[g+2]*T;this.image=f})}}class be{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=w(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return C(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new j(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let l,o,a=t,n=s.pop();if(a===1)return n;for(;s.length;)if(l=s.pop(),o=(1&l.col)+((1&l.row)<<1),a){if(a[o]===0){n=null;break}if(a[o]===1){n=l;break}n=l,a=a[o]}return n}}class _e{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=w(this._tileIndexUrl,{query:{...t?.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:l}=t,o=new j(t);return this._tilemap.fetchAvailabilityUpsample(s,i,l,o,r).then(()=>(o.world=t.world,o)).catch(a=>{if(Y(a))throw a;return null})}}const $=new Map;function Ie(e,t,r,s,i){return Te(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Te(e,t){const r=$.get(e);if(r)return r.then(i=>b(i));const s=w(e,{responseType:"array-buffer",...t}).then(({data:i})=>($.delete(e),i)).catch(i=>{throw $.delete(e),i});return $.set(e,s),s}class Re{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=_(this.sourceUrl),l=b(s),o=l.tiles;if(i)for(let d=0;d<o.length;d++){const m=_(o[d]);m&&(V(m.path)||(m.path=L(i.path,m.path)),o[d]=U(m.path,{...i.query,...m.query}))}this.tileServers=o;const a=s.capabilities&&s.capabilities.split(",").map(d=>d.toLowerCase().trim()),n=s?.exportTilesAllowed===!0,u=a?.includes("tilemap")===!0,y=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=X(l.tileInfo,l,null,{ignoreMinMaxLOD:!0});const A=s.tileMap?U(L(i.path,s.tileMap),i.query):null;u?(this.type="vector-tile",this.tilemap=new _e(new Z({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),A)):A&&(this.tilemap=new be(A)),this.fullExtent=Q.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){return this.tilemap?.dataKey(t,r)??t}requestTile(t,r,s,i){const l=this.tileServers[r%this.tileServers.length];return Ie(l,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,l=s.lods,o=Math.min(i.length,l.length);for(let a=0;a<o;a++){const n=i[a],u=l[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const O=E.defaults&&E.defaults.io.corsEnabledServers;async function $e(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await S(r,"esri",e,i,t);const l={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&x(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&x(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return v(l.spriteUrl),v(l.glyphsUrl),l}function v(e){if(!e)return;const t=ee(e);O&&!O.includes(t)&&O.push(t)}function x(...e){let t;for(let r=0;r<e.length;++r)z(e[r])?t&&(t=t.split("://")[0]+":"+e[r].trim()):t=V(e[r])?e[r]:L(t,e[r]);return K(t)}async function S(e,t,r,s,i){let l,o,a;if(C(i),typeof r=="string"){const u=F(r);v(u),a=await w(u,{...i,responseType:"json",query:{f:"json",...i?.query}}),a.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else a={data:r},l=r.jsonUrl||null,o=s;const n=a.data;if(W(n))return e.styleUrl=l||null,Be(e,n,o,i);if(Pe(n))return e.sourceUrl?N(e,n,o,!1,t,i):(e.sourceUrl=l||null,N(e,n,o,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function W(e){return!!e.sources}function Pe(e){return!W(e)}async function Be(e,t,r,s){const i=r?te(r):J();e.styleBase=i,e.style=t,e.styleUrl&&v(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await S(e,"esri",x(i,o.url),void 0,s):l.push(S(e,"esri",o,i,s))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(S(e,o,x(i,t.sources[o].url),void 0,s)):t.sources[o].tiles&&l.push(S(e,o,t.sources[o],i,s)));await Promise.all(l)}async function N(e,t,r,s,i,l){const o=r?K(r)+"/":J(),a=Oe(t,o),n=new Re(i,U(o,l?.query),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(n))return;n.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(n.fullExtent):u.fullExtent=n.fullExtent.clone()),u.tileInfo.lods.length<n.tileInfo.lods.length&&(u.tileInfo=n.tileInfo)}if(s?(e.sourceBase=o,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&v(e.sourceUrl)):v(o),e.sourceNameToSource[i]=n,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?S(e,"",x(o,t.defaultStyles,"root.json"),void 0,l):S(e,"",t.defaultStyles,x(o,"root.json"),l)}}function Oe(e,t){if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,l=2958287637957775e-7;const o=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let u=0;u<=n;u++)u>=a&&o.push({level:u,scale:l,resolution:i}),i/=2,l/=2;for(const u of e.tiles)v(x(t,u));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:{wkid:102100}}}}const Le=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,Me={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function Ee(e){const t=e?.match(Le);if(!t)return null;const[,r,s,i]=t;if(!r)return null;let l=null,o=null,a=null;const{devext:n,qaext:u,www:y}=Me;if(s)if(l=r,i)switch(i.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=n);break;case"qa":({customBaseUrl:o,portalHostname:a}=u);break;default:return null}else({customBaseUrl:o,portalHostname:a}=y);else switch(r.toLowerCase()){case"devext":({customBaseUrl:o,portalHostname:a}=n);break;case"qaext":({customBaseUrl:o,portalHostname:a}=u);break;case"www":({customBaseUrl:o,portalHostname:a}=y);break;default:return null}return{customBaseUrl:o,isPortal:!1,portalHostname:a,urlKey:l}}const P=1e-6;function ke(e,t){if(e===t)return!0;if(!e&&t!=null||e!=null&&!t||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=P||Math.abs(r.y-s.y)>=P)return!1;let i,l;e.lods[0].scale>t.lods[0].scale?(i=e,l=t):(l=e,i=t);for(let o=i.lods[0].scale;o>=l.lods[l.lods.length-1].scale-P;o/=2)if(Math.abs(o-l.lods[0].scale)<P)return!0;return!1}function De(e,t){if(e===t)return e;if(!e&&t!=null)return t;if(e!=null&&!t)return e;const r=e.size[0],s=e.format,i=e.dpi,l={x:e.origin.x,y:e.origin.y},o=e.spatialReference.toJSON(),a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,y=a.resolution,A=n.scale,d=[];let m=u,I=y,f=0;for(;m>A;)d.push({level:f,resolution:I,scale:m}),f++,m/=2,I/=2;return new M({size:[r,r],dpi:i,format:s||"pbf",origin:l,lods:d,spatialReference:o})}let c=class extends re(se(ie(oe(le(ae(ne(ue(ce(pe))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(B).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await w(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Se(this.portalItem))}).catch(B).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&_(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?U(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get parsedUrl(){return this.serviceUrl?_(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&z(e)&&(e=`https:${e}`);const r=he(Ee(e));t.styleUrl=ye(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new M;if(e.length>1)for(let r=0;r<e.length;r++)ke(t,e[r].tileInfo)&&(t=De(t,e[r].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=k("2d").maxTextureSize,s=this.currentStyleInfo?.spriteUrl?U(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,i=new D(s,e,r,this.currentStyleInfo.spriteFormat);await i.load(t),this._spriteSourceMap.set(e,i)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t="png",r=1,s){const i=k("2d").maxTextureSize,l=e?U(e,{...this.customParameters,token:this.apiKey}):null;if(!l)return null;const o=new D(l,r,i,t);try{return await o.load(s),this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,o),this.currentStyleInfo.spriteUrl=l,this.emit("spriteSource-change",{spriteSource:o}),o}catch(a){B(a)}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=de(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return b(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return b(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return b(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new q("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await $e(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await ve("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new we(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const l of r)if(l.toLowerCase().includes(s))return F(`//static.arcgis.com/attribution/Vector${i}/${l}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};p([h({readOnly:!0})],c.prototype,"attributionDataUrl",null),p([h({type:["show","hide"]})],c.prototype,"listMode",void 0),p([h({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),p([h({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),p([h({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),p([h({json:{read:!1},readOnly:!0,type:Q})],c.prototype,"fullExtent",null),p([h()],c.prototype,"style",void 0),p([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),p([h({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),p([h({readOnly:!0})],c.prototype,"parsedUrl",null),p([h({readOnly:!0})],c.prototype,"serviceUrl",null),p([h({type:me,readOnly:!0})],c.prototype,"spatialReference",null),p([h({readOnly:!0})],c.prototype,"styleRepository",void 0),p([h({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),p([h({readOnly:!0})],c.prototype,"primarySource",void 0),p([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),p([fe(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),p([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:M})],c.prototype,"tileInfo",null),p([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),p([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),p([h({readOnly:!0})],c.prototype,"version",void 0),p([ge("version",["version","currentVersion"])],c.prototype,"readVersion",null),p([h({type:Boolean})],c.prototype,"symbolCollisionBoxesVisible",void 0),p([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),c=p([Ae("esri.layers.VectorTileLayer")],c);const Ge=c;export{Ge as default};
