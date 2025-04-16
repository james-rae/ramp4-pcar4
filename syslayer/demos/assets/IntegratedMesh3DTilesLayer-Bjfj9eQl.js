import{O as b,bB as A,dA as $,cF as u,ch as _,s as D,Z as M,a4 as V,n as S,B as c,D as d,N as j,aK as g}from"./main-D_jCcUNd.js";import{S as z}from"./MultiOriginJSONSupport-CW6rZq6k.js";import{c as U,u as p,E,s as I,l as R,d as T,R as f}from"./vec32-CQFqDiXA.js";import{o as L}from"./projectBuffer-B9jUCpdF.js";import{f as X}from"./Layer-DXHV-tnm.js";import{i as P}from"./APIKeyMixin-D2PPxhoM.js";import{l as F}from"./ArcGISService-BbYcf4hC.js";import{e as W}from"./CustomParametersMixin-jN4v0L1t.js";import{b as k}from"./OperationalLayer-Doyloi11.js";import{j as G}from"./PortalLayer-Uffz25z-.js";import{t as K}from"./ScaleRangeLayer-8w7mUjfL.js";import{c as q,y as B}from"./commonProperties-CoOKNqGE.js";import{$ as N,Z as O,w as Z}from"./elevationInfoUtils-DW7d7gyv.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./TimeExtent-BsjGA75b.js";import"./layerContainerType-C5CzMsLd.js";import"./PortalItem-BEvvM5w1.js";import"./portalItemUtils-BahwO9FL.js";import"./projection-DswCNHiF.js";import"./ElevationInfo-tQKCRFIZ.js";import"./lengthUtils-BNIshbqa.js";let m=class extends F(k(G(K(z(W(P(X))))))){constructor(r){super(r),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(r){r!=null&&r.mode!=="absolute-height"||this._set("elevationInfo",r),this._validateElevationInfo(r)}_verifyArray(r,i){if(!Array.isArray(r)||r.length<i)return!1;for(const n of r)if(typeof n!="number")return!1;return!0}_initFullExtent(r){const i=r.root?.boundingVolume;if(!i)return;if(i.box){const t=i?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=r.root?.transform,x=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=$(t[0]),s=$(t[1]),o=t[4],a=$(t[2]),e=$(t[3]),y=t[5];this.fullExtent=new A({xmin:l,ymin:s,zmin:o,xmax:a,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=u(t[0],t[1],t[2]),s=t[3]/Math.sqrt(3),o=g();U(o,l,u(s,s,s));const a=g();if(p(a,l,u(s,s,s)),n&&this._verifyArray(n,16)){const v=n;E(x,o,v),I(o,x),E(x,a,v),I(a,x)}L(o,_,0,o,b.WGS84,0),L(a,_,0,a,b.WGS84,0);const e=g(),y=g();R(e,o,a),T(y,o,a),this.fullExtent=new A({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=u(t[0],t[1],t[2]),s=u(t[3],t[4],t[5]),o=u(t[6],t[7],t[8]),a=u(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(g());if(p(e[0],l,s),p(e[0],e[0],o),p(e[0],e[0],a),f(e[1],l,s),p(e[1],e[1],o),p(e[1],e[1],a),p(e[2],l,s),f(e[2],e[2],o),p(e[2],e[2],a),f(e[3],l,s),f(e[3],e[3],o),p(e[3],e[3],a),p(e[4],l,s),p(e[4],e[4],o),f(e[4],e[4],a),f(e[5],l,s),p(e[5],e[5],o),f(e[5],e[5],a),p(e[6],l,s),f(e[6],e[6],o),f(e[6],e[6],a),f(e[7],l,s),f(e[7],e[7],o),f(e[7],e[7],a),n&&this._verifyArray(n,16)){const h=n;for(let w=0;w<8;++w)E(e[w],e[w],h)}const y=u(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)L(e[h],_,0,e[h],b.WGS84,0),R(v,v,e[h]),T(y,y,e[h]);this.fullExtent=new A({xmin:v[0],ymin:v[1],zmin:v[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(r){return this.addResolvingPromise(this._doLoad(r)),this}async _doLoad(r){const i=r!=null?r.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{if(n.typeKeywords?.includes("IntegratedMesh"))return!0;throw new D("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},r)}catch(n){M(n)}this.url&&await V(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(x=>{this._initFullExtent(x.data)},x=>{M(x)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(r){const i="Integrated mesh 3d tiles layers";N(S.getLogger(this),O(i,"absolute-height",r)),N(S.getLogger(this),Z(i,r))}};c([d({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),c([d({type:b})],m.prototype,"spatialReference",void 0),c([d({type:A})],m.prototype,"fullExtent",void 0),c([d(q)],m.prototype,"elevationInfo",null),c([d({type:["show","hide"]})],m.prototype,"listMode",void 0),c([d(B)],m.prototype,"url",void 0),c([d({readOnly:!0})],m.prototype,"type",void 0),c([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),c([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),c([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=c([j("esri.layers.IntegratedMesh3DTilesLayer")],m);const xe=m;export{xe as default};
