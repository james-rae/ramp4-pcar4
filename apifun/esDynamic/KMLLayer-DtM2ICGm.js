import{b_ as k,G as L,j as O,aO as v,aM as p,aH as u,fG as c,bz as h,bI as _,V as d,x as s,z as l,fH as M,D as b,K as m,M as g,bN as F,X as j,B as I}from"./main-DeRV24Di.js";import{n as N}from"./CollectionFlattener-D0TWeodg.js";import{S as K}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{f as C}from"./Layer-BYwzhU09.js";import{p as P}from"./BlendLayer-L3pb8nn4.js";import{b as R}from"./OperationalLayer-aipQXicj.js";import{j as T}from"./PortalLayer-DGPFQ0q_.js";import{f as z}from"./RefreshableLayer-Va5n0aza.js";import{t as J}from"./ScaleRangeLayer-DCHlWw-h.js";import{y as H}from"./commonProperties-Bm8d6jM2.js";import{j as A,S,g as w,d as x}from"./kmlUtils-BLUn0X7u.js";var y;let a=y=class extends k.EventedMixin(L.JSONSupportMixin(O)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},u),v(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},u),p(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},u),p(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},u)])}initialize(){c(()=>this.networkLink).then(()=>c(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,r=this._fetchService(this._get("networkLink")?.href??"",t).then(i=>{const n=A(i.sublayers);this.fullExtent=h.fromJSON(n),this.sourceJSON=i;const f=_(d.ofType(y),S(y,i));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return w(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>x(r.data))}};s([l()],a.prototype,"description",void 0),s([l({type:h})],a.prototype,"fullExtent",void 0),s([l()],a.prototype,"id",void 0),s([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([l({type:d.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>M(e)}}})],a.prototype,"title",void 0),s([l({value:!0})],a.prototype,"visible",null),s([b("visible",["visibility"])],a.prototype,"readVisible",null),s([l()],a.prototype,"sourceJSON",void 0),s([l()],a.prototype,"layer",void 0),a=y=s([m("esri.layers.support.KMLSublayer")],a);const E=a,G=["kml","xml"];let o=class extends P(z(J(R(T(K(C)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new N({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=g.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([p(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},u),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return S(E,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?F(this.url,G)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(j).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:w(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=x(t.data);this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const i of r.sublayers.items)t(i),i.visible&&i.fullExtent&&(e!=null?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],o.prototype,"allSublayers",void 0),s([l({type:g})],o.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([l({})],o.prototype,"resourceInfo",void 0),s([l({type:d.ofType(E),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([b(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([b("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([I("sublayers")],o.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([l(H)],o.prototype,"url",void 0),s([l({readOnly:!0})],o.prototype,"visibleSublayers",null),s([l({type:h})],o.prototype,"extent",void 0),s([l()],o.prototype,"fullExtent",null),o=s([m("esri.layers.KMLLayer")],o);const V=o;export{V as default};
