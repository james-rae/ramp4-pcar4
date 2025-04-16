import{U as h,s as c,k as n,o as p,B as S,u as y,au as w,q as L,A as O,dL as U,n as x,I as K,b as V}from"./main-CvsyIoCL.js";import{i as A}from"./originUtils-BLsWtgV9.js";import{v as M}from"./HeightModelInfo-Cq4hjtNj.js";import{w as q,d as C,m as k,S as z,C as $}from"./arcgisLayerUrl-DTYtYqC5.js";import{u as F,y as J}from"./commonProperties-D3cJE1_Y.js";import B from"./PortalItem-BnAblOC3.js";import{o as R}from"./jsonContext-iNVNY3BQ.js";import{p as D,n as Z}from"./resourceUtils-BDV_k-nt.js";import{t as H}from"./saveUtils-Ba8iECRb.js";async function T(o,s,t,e,i,r,a){let l=null;if(t!=null){const u=`${o}/nodepages/`,N=u+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await h(N,{query:{f:"json",...e,token:i},responseType:"json",signal:a})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:u}}catch(E){r?.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",N,E),l=E}}if(!s)return null;const d=s?.split("/").pop(),v=`${o}/nodes/`,g=v+d;try{return{type:"node",rootNode:(await h(g,{query:{f:"json",...e,token:i},responseType:"json",signal:a})).data,urlPrefix:v}}catch(u){throw new c("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:g})}}let G=null;function Q(){return G}const W=o=>{let s=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=U(async(t,e,i)=>{switch(t){case f.SAVE:return this._save(e);case f.SAVE_AS:return this._saveAs(i,e)}})}readSpatialReference(t,e){return b(e)}readFullExtent(t,e,i){if(t!=null&&typeof t=="object"){const l=t.spatialReference==null?{...t,spatialReference:b(e)}:t;return w.fromJSON(l,i)}const r=e.store,a=b(e);return a==null||r?.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<I)?null:new w({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(t){const e={major:Number.NaN,minor:Number.NaN,versionString:t},i=t.split(".");return i.length>=2&&(e.major=parseInt(i[0],10),e.minor=parseInt(i[1],10)),e}readVersion(t,e){const i=e.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(t){return this.sublayerTitleMode!=="item-title"?void 0:t}readTitleService(t,e){const i=this.portalItem?.title;if(this.sublayerTitleMode==="item-title")return this.url?q(this.url,e.name):e.name;let r=e.name;if(!r&&this.url){const a=C(this.url);a!=null&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),k(r)}set url(t){if(t==null)return void this._set("url",t);const e=z({layer:this,url:t,nonStandardUrlAllowed:!1,logger:x.getLogger(this)});this._set("url",e.url),e.layerId!=null&&this._set("layerId",e.layerId)}writeUrl(t,e,i,r){$(this,t,"layers",e,r)}get parsedUrl(){const t=this._get("url"),e=K(t);return e&&this.layerId!=null&&(e.path=`${e.path}/layers/${this.layerId}`),e}async _fetchIndexAndUpdateExtent(t,e){this.indexInfo=T(this.parsedUrl?.path??"",this.rootNode,t,this.customParameters,this.apiKey,x.getLogger(this),e),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(t){if(t?.type==="page"){const e=t.rootIndex%t.pageSize,i=t.rootPage?.nodes?.[e];if(i?.obb?.center==null||i.obb.halfSize==null)throw new c("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<I||this.fullExtent==null||this.fullExtent.hasZ)return;const r=i.obb.halfSize,a=i.obb.center[2],l=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this.fullExtent.zmin=a-l,this.fullExtent.zmax=a+l}else if(t?.type==="node"){const e=t.rootNode?.mbs;if(!Array.isArray(e)||e.length!==4||e[0]<I)return;const i=e[2],r=e[3],{fullExtent:a}=this;a&&(a.zmin=i-r,a.zmax=i+r)}}async _fetchService(t){if(this.url==null)throw new c("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const e=await this._fetchFirstLayerId(t);e!=null&&(this.layerId=e)}return this._fetchServiceLayer(t)}async _fetchFirstLayerId(t){const e=await h(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t});if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id}async _fetchServiceLayer(t){const e=await h(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t});e.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(e.data.layerType&&e.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=e.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(t){const e=(await h(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t})).data;this.read(e,this._getServiceContext()),this.validateLayer(e)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(t){}async _saveAs(t,e){const i={...P,...e};let r=B.from(t);if(!r)throw new c("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");r.id&&(r=r.clone(),r.id=null);const a=r.portal||V.getDefault();await this._ensureLoadBeforeSave(),r.type=_,r.portal=a;const l=R(r,"portal-item",!0),d={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(d,l,i),this.url&&(r.url=this.url),r.title||(r.title=this.title),j(r,i,m.newItem),await a.signIn(),await a.user.addItem({item:r,folder:i?.folder,data:d}),await D(this.resourceReferences,l),this.portalItem=r,A(l),l.portalItem=r,r}async _save(t){const e={...P,...t};if(!this.portalItem)throw new c("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==_)throw new c("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`);await this._ensureLoadBeforeSave();const i=R(this.portalItem,"portal-item",!0),r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,e),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),j(this.portalItem,e,m.existingItem),await Z(this.portalItem,r,this.resourceReferences,i),A(i),this.portalItem}async _validateAgainstJSONSchema(t,e,i){const r=i?.validationOptions;H(e,{errorName:"sceneservice:save"},{ignoreUnsupported:r?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=r?.enabled,l=Q();if(a&&l){const d=(await l()).validate(t,i.portalItemLayerType);if(!d.length)return;const v=`Layer item did not validate:
${d.join(`
`)}`;if(x.getLogger(this).error(`_validateAgainstJSONSchema(): ${v}`),r.failPolicy==="throw"){const g=d.map(u=>new c("sceneservice:schema-validation",u));throw new c("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:g})}}}};return n([p(F)],s.prototype,"id",void 0),n([p({type:S})],s.prototype,"spatialReference",void 0),n([y("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),n([p({type:w})],s.prototype,"fullExtent",void 0),n([y("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),n([p({readOnly:!0,type:M})],s.prototype,"heightModelInfo",void 0),n([p({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),n([p({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),n([p({readOnly:!0})],s.prototype,"version",void 0),n([y("version",["store.version"])],s.prototype,"readVersion",null),n([p({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),n([p({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),n([p({type:String})],s.prototype,"title",void 0),n([y("portal-item","title")],s.prototype,"readTitlePortalItem",null),n([y("service","title",["name"])],s.prototype,"readTitleService",null),n([p({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),n([p(J)],s.prototype,"url",null),n([L("url")],s.prototype,"writeUrl",null),n([p()],s.prototype,"parsedUrl",null),n([p({readOnly:!0})],s.prototype,"store",void 0),n([p({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=n([O("esri.layers.mixins.SceneService")],s),s},I=-1e38;function b(o){if(o.spatialReference!=null)return S.fromJSON(o.spatialReference);const s=o.store,t=s.indexCRS||s.geographicCRS,e=t&&parseInt(t.slice(t.lastIndexOf("/")+1),10);return e!=null?new S(e):null}function j(o,s,t){o.typeKeywords||(o.typeKeywords=[]);const e=s.getTypeKeywords();for(const i of e)o.typeKeywords.push(i);o.typeKeywords&&(o.typeKeywords=o.typeKeywords.filter((i,r,a)=>a.indexOf(i)===r),t===m.newItem&&(o.typeKeywords=o.typeKeywords.filter(i=>i!=="Hosted Service")))}var m;(function(o){o[o.existingItem=0]="existingItem",o[o.newItem=1]="newItem"})(m||(m={}));const _="Scene Service",P={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var f;(function(o){o[o.SAVE=0]="SAVE",o[o.SAVE_AS=1]="SAVE_AS"})(f||(f={}));export{W as R,f as V,T as r};
