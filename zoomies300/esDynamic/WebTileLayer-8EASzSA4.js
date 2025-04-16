import{v as I,f as v,k as l,o as s,A as w,au as g,B as m,bv as x,es as h,s as M,et as U,eu as W,L as D,U as b,r as L,u as T,q as E}from"./main-DqYc2eZZ.js";import{S as O}from"./MultiOriginJSONSupport-BjQYN9UY.js";import{f as z}from"./Layer-CVf4mOVm.js";import{l as A}from"./BlendLayer-BB0TVk7x.js";import{b as q}from"./OperationalLayer-_noFZqj2.js";import{j as V}from"./PortalLayer-CTDwOpsf.js";import{f as _}from"./RefreshableLayer-BcfZsb9u.js";import{t as $}from"./ScaleRangeLayer-HutIBJAb.js";import{o as j}from"./imageBitmapUtils-Byh6bcxv.js";import{z as S,p as r}from"./TileInfo-D5gk93W7.js";var f;let u=f=class extends I{constructor(e){super(e)}clone(){return new f({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([s({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),l([s({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),l([s({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),l([s({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),l([s({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=f=l([w("esri.layers.support.WMTSLayerInfo")],u);var d;let o=d=class extends A(_($(q(V(O(z)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new g(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,m.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=m.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new x({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:m.WebMercator}),spatialReference:m.WebMercator,lods:[new r({level:0,scale:591657527591555e-6,resolution:156543.033928}),new r({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new r({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new r({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new r({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new r({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new r({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new r({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new r({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new r({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new r({level:10,scale:577790.554289,resolution:152.874056570411}),new r({level:11,scale:288895.277144,resolution:76.4370282850732}),new r({level:12,scale:144447.638572,resolution:38.2185141425366}),new r({level:13,scale:72223.819286,resolution:19.1092570712683}),new r({level:14,scale:36111.909643,resolution:9.55462853563415}),new r({level:15,scale:18055.954822,resolution:4.77731426794937}),new r({level:16,scale:9027.977411,resolution:2.38865713397468}),new r({level:17,scale:4513.988705,resolution:1.19432856685505}),new r({level:18,scale:2256.994353,resolution:.597164283559817}),new r({level:19,scale:1128.497176,resolution:.298582141647617}),new r({level:20,scale:564.248588,resolution:.14929107082380833}),new r({level:21,scale:282.124294,resolution:.07464553541190416}),new r({level:22,scale:141.062147,resolution:.03732276770595208}),new r({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let i="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const a=new h(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&a.authority?.includes("{subDomain}")&&(i="is missing 'subDomains' property")}else i="spatialReference must match tileInfo.spatialReference";else i="is missing the required 'urlTemplate' property value";if(i)throw new M("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${i}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||m.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:i}=this,a=new h(t),n=a.scheme?a.scheme+"://":"//",c=n+a.authority+"/",p=a.authority;if(p?.includes("{subDomain}")){if(i&&i.length>0&&p.split(".").length>1)for(const y of i)e.push(n+p.replaceAll(/\{subDomain\}/gi,y)+"/")}else e.push(c);return e.map(U)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new h(e),i=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.slice(i.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){W(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=D(e)),t.templateUrl=e}fetchTile(e,t,i,a={}){const{signal:n}=a,c=this.getTileUrl(e,t,i),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return b(c,p).then(y=>y.data)}async fetchImageBitmapTile(e,t,i,a={}){const{signal:n}=a;if(this.fetchTile!==d.prototype.fetchTile){const P=await this.fetchTile(e,t,i,a);return j(P,e,t,i,n)}const c=this.getTileUrl(e,t,i),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:y}=await b(c,p);return j(y,e,t,i,n)}getTileUrl(e,t,i){const{levelValues:a,tileServers:n,urlPath:c}=this;if(!a||!n||!c)return"";const p=a[e];return n[t%n.length]+L(c,{level:p,z:p,col:i,x:i,row:t,y:t})}};l([s({type:String,value:"",json:{write:!0}})],o.prototype,"copyright",void 0),l([s({type:g,json:{write:!0},nonNullable:!0})],o.prototype,"fullExtent",void 0),l([s({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),l([s({type:["show","hide"]})],o.prototype,"listMode",void 0),l([s({json:{read:!0,write:!0}})],o.prototype,"blendMode",void 0),l([s()],o.prototype,"levelValues",null),l([s({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],o.prototype,"isReference",void 0),l([s({type:["WebTiledLayer"],value:"WebTiledLayer"})],o.prototype,"operationalLayerType",void 0),l([s({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"popupEnabled",void 0),l([s({type:m})],o.prototype,"spatialReference",void 0),l([T("spatialReference",["spatialReference","fullExtent.spatialReference"])],o.prototype,"readSpatialReference",null),l([s({type:[String],json:{write:!0}})],o.prototype,"subDomains",void 0),l([s({type:S,json:{write:!0}})],o.prototype,"tileInfo",void 0),l([s({readOnly:!0})],o.prototype,"tileServers",null),l([s({json:{read:!1}})],o.prototype,"type",void 0),l([s()],o.prototype,"urlPath",null),l([s({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],o.prototype,"urlTemplate",void 0),l([T("urlTemplate",["urlTemplate","templateUrl"])],o.prototype,"readUrlTemplate",null),l([E("urlTemplate",{templateUrl:{type:String}})],o.prototype,"writeUrlTemplate",null),l([s({type:u,json:{write:!0}})],o.prototype,"wmtsInfo",void 0),o=d=l([w("esri.layers.WebTileLayer")],o);const R=o,B=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{R as I,B as W,u as p};
