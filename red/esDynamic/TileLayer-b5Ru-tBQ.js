import{G as _,B as f,I as S,U as u,bw as T,s as h,bx as b,k as i,o,u as w,q as O,by as R,A as U}from"./main-BvLIKoYF.js";import{t as W}from"./loadAll-LdnH0rw0.js";import{S as P}from"./MultiOriginJSONSupport-nWIxMRLU.js";import{f as j}from"./Layer-CYkJM6Bb.js";import{i as A}from"./APIKeyMixin-D1unWhsz.js";import{p as L}from"./ArcGISCachedService-t6d9-ln0.js";import{m as B,f as M,t as k}from"./SublayersOwner-Dte6hdrO.js";import{l as I}from"./ArcGISService-Bvhv72Bz.js";import{l as N}from"./BlendLayer-C84puTR7.js";import{e as C}from"./CustomParametersMixin-NnkQcJRm.js";import{b as D}from"./OperationalLayer-6K_uWm8j.js";import{j as J}from"./PortalLayer-CCfGH-Tf.js";import{f as q}from"./RefreshableLayer-B7R_tjLd.js";import{t as G}from"./ScaleRangeLayer-SnZ9kCTh.js";import{d as $,g as V,p as x}from"./arcgisLayerUrl-BrgteNl3.js";import{y as E}from"./commonProperties-C2p06-I_.js";import{o as m}from"./imageBitmapUtils-CDb1QYjq.js";var y;const v=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let s=y=class extends N(G(B(L(M(D(J(I(P(q(A(C(j)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo?.spatialReference)&&f.fromJSON(e)}writeSublayers(e,r,t,a){if(!this.loaded||!e)return;const n=e.slice().reverse().flatten(({sublayers:p})=>p&&p.toArray().reverse()).toArray(),l=[],c={writeSublayerStructure:!1,...a};n.forEach(p=>{const d=p.write({},c);l.push(d)}),l.some(p=>Object.keys(p).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,a={}){const{signal:n}=a,l=this.getTileUrl(e,r,t),c={responseType:"image",signal:n,query:{...this.refreshParameters}};return u(l,c).then(p=>p.data)}async fetchImageBitmapTile(e,r,t,a={}){const{signal:n}=a;if(this.fetchTile!==y.prototype.fetchTile){const d=await this.fetchTile(e,r,t,a);return m(d,e,r,t,n)}const l=this.getTileUrl(e,r,t),c={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:p}=await u(l,c);return m(p,e,r,t,n)}getTileUrl(e,r,t){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,n=T({...this.parsedUrl?.query,blankTile:!a&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl?.path}/tile/${e}/${r}/${t}${n?"?"+n:""}`}loadAll(){return W(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new h("tile-layer:undefined-url","layer's url is not defined");const a=$(this.parsedUrl.path);if(a!=null&&a.serverType==="ImageServer")throw new h("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!V(t))return this._fetchServerVersion(t,e).then(a=>{this.read({currentVersion:a})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!x(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(a=>{if(a.data&&a.data.currentVersion)return a.data.currentVersion;throw new h("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,a=v.length;t<a;t++)if(r=v[t],r.toLowerCase().includes(e))return b("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};i([o({readOnly:!0})],s.prototype,"attributionDataUrl",null),i([o({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([o({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),i([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([o({type:Boolean})],s.prototype,"resampling",void 0),i([o()],s.prototype,"sourceJSON",void 0),i([o({type:f})],s.prototype,"spatialReference",void 0),i([w("spatialReference",["spatialReference","tileInfo"])],s.prototype,"readSpatialReference",null),i([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),i([o({readOnly:!0})],s.prototype,"sublayers",void 0),i([O("sublayers",{layers:{type:[k]}})],s.prototype,"writeSublayers",null),i([o({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([o()],s.prototype,"tileServers",null),i([R("tileServers")],s.prototype,"castTileServers",null),i([o({readOnly:!0,json:{read:!1}})],s.prototype,"type",void 0),i([o(E)],s.prototype,"url",void 0),s=y=i([U("esri.layers.TileLayer")],s);const g=Symbol("default-fetch-tile");s.prototype.fetchTile[g]=!0;const K=s;export{K as default};