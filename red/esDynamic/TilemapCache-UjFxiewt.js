import{c0 as T,f as z,fn as q,U as _,s as u,bX as L,k as d,o as y,aD as S,aE as x,cR as P,E as A,fo as M,fp as U,aK as C,bw as I,A as k,aH as E,aN as j}from"./main-BvLIKoYF.js";import{E as H}from"./ByteSizeUnit-DL8UhsB0.js";import{e as R}from"./LRUCache-D4YyHk2B.js";import{t as N}from"./TileKey-B_6qmYK-.js";function F(t,e=!1){return t<=T?e?new Array(t).fill(0):new Array(t):new Uint32Array(t)}class w{constructor(e){J(e);const{location:a,data:i}=e;this.location=Object.freeze(z(a));const l=this.location.width,s=this.location.height;let o=!0,r=!0;const c=Math.ceil(l*s/32),n=F(c);let h=0;for(let p=0;p<i.length;p++){const m=p%32;i[p]?(r=!1,n[h]|=1<<m):o=!1,m===31&&++h}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+q(n))}getAvailability(e,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const i=(e-this.location.top)*this.location.width+(a-this.location.left),l=i%32,s=i>>5,o=this._availability;return s<0||s>o.length?"unknown":o[s]&1<<l?"available":"unavailable"}static fromDefinition(e,a){const i=e.service.request||_,{row:l,col:s,width:o,height:r}=e,c={query:{f:"json"}};return a=a?{...c,...a}:c,i(K(e),a).then(n=>n.data).catch(n=>{if(n?.details?.httpStatus===422)return{location:{top:l,left:s,width:o,height:r},valid:!0,data:new Array(o*r).fill(0)};throw n}).then(n=>{if(n.location&&(n.location.top!==l||n.location.left!==s||n.location.width!==o||n.location.height!==r))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:n,definition:{top:l,left:s,width:o,height:r}});return w.fromJSON(n)})}static fromJSON(e){return Object.freeze(new w(e))}}function D(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function K(t){let e;if(t.service.tileServers?.length){const i=t.service.tileServers;e=`${i&&i.length?i[t.row%i.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}else e=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;const a=t.service.query;return a&&(e=`${e}?${a}`),e}function J(t){if(!t?.location)throw new u("tilemap:missing-location","Location missing from tilemap response");if(t.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var v;function O(t,e,a){return new u("tile-map:tile-unavailable","Tile is not available",{level:t,row:e,col:a})}let f=v=class extends S{constructor(t){super(t),this._pendingTilemapRequests={},this.request=_,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new R(2*H.MEGABYTES),this.addHandles(x(()=>{const{layer:t}=this;return[t?.parsedUrl,t?.tileServers,t?.apiKey,t?.customParameters]},()=>this._initializeTilemapDefinition(),P))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(t,e,a){if(!this.layer.tileInfo.lodAt(t)||t<this.effectiveMinLOD||t>this.effectiveMaxLOD)return"unavailable";const i=this._tilemapFromCache(t,e,a,this._tmpTilemapDefinition);return i?i.getAvailability(e,a):"unknown"}fetchAvailability(t,e,a,i){return!this.layer.tileInfo.lodAt(t)||t<this.effectiveMinLOD||t>this.effectiveMaxLOD?Promise.reject(O(t,e,a)):this._fetchTilemap(t,e,a,i).catch(l=>l).then(l=>{if(l instanceof w){const s=l.getAvailability(e,a);if(s==="unavailable")throw O(t,e,a);return s}if(A(l))throw l;return"unknown"})}fetchAvailabilityUpsample(t,e,a,i,l){i.level=t,i.row=e,i.col=a;const s=this.layer.tileInfo;s.updateTileInfo(i);const o=this.fetchAvailability(t,e,a,l).catch(r=>{if(A(r))throw r;if(s.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw r});return this._fetchAvailabilityUpsamplePrefetch(i.id,t,e,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(t,e,a,i,l,s){if(!this._prefetchingEnabled||t==null)return;const o=`prefetch-${t}`;if(this.hasHandles(o))return;const r=new AbortController;s.then(()=>r.abort(),()=>r.abort());let c=!1;const n=E(()=>{c||(c=!0,r.abort())});if(this.addHandles(n,o),await M(10,r.signal).catch(()=>{}),c||(c=!0,this.removeHandles(o)),U(r))return;const h=new N(t,e,a,i),p={...l,signal:r.signal},m=this.layer.tileInfo;for(let $=0;v._prefetches.length<v._maxPrefetch&&m.upsampleTile(h);++$){const b=this.fetchAvailability(h.level,h.row,h.col,p);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_fetchTilemap(t,e,a,i){if(!this.layer.tileInfo.lodAt(t)||t<this.effectiveMinLOD||t>this.effectiveMaxLOD)return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${t} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(t,e,a,l);if(s)return Promise.resolve(s);const o=i?.signal;return i={...i,signal:null},new Promise((r,c)=>{C(o,()=>c(j()));const n=D(l);let h=this._pendingTilemapRequests[n];if(!h){h=w.fromDefinition(l,i).then(m=>(this._tilemapCache.put(n,m,m.byteSize),m));const p=()=>{delete this._pendingTilemapRequests[n]};this._pendingTilemapRequests[n]=h,h.then(p,p)}h.then(r,c)})}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:e,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:I({...t.query,...a,token:e??t.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(t,e,a,i){i.level=t,i.row=e-e%this.size,i.col=a-a%this.size;const l=D(i);return this._tilemapCache.get(l)}get test(){}};f._maxPrefetch=4,f._prefetches=new L({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],f.prototype,"layer",void 0),d([y({constructOnly:!0})],f.prototype,"minLOD",void 0),d([y({constructOnly:!0})],f.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],f.prototype,"request",void 0),d([y({constructOnly:!0})],f.prototype,"size",void 0),f=v=d([k("esri.layers.support.TilemapCache")],f);export{f as T};