import{x as i,z as n,K as g,aL as w,I as O,aY as R,bB as u,s as d,bh as Q}from"./main-DeRV24Di.js";import{d as V}from"./infoFor3D-BeWnZejW.js";import{R as m,b as _}from"./Query-ot-GJVWV.js";import{f as q}from"./utils-C8s4qYBR.js";import{s as I,a as v}from"./executeForIds-kESm9TOH.js";import{n as T,a as j}from"./executeQueryPBF-BhkAfkuM.js";import{a as A}from"./executeQueryJSON-DJD1MUb5.js";import{d as z}from"./FeatureSet-bQDdN7-L.js";let o=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return O(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),s=e.outStatistics?.[0]!=null,a=R("featurelayer-pbf-statistics"),c=(!s||a)&&e.returnTrueCurves!==!0;let l;if(this.pbfSupported&&c)try{l=await T(this.url,r,t)}catch(p){if(p.name!=="query:parsing-pbf")throw p;this.pbfSupported=!1}return this.pbfSupported&&c||(l=await A(this.url,r,t)),this._normalizeFields(l.fields),l}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return z.fromJSON(t);const{meshFeatureSetFromJSON:s}=await u(import("./meshFeatureSet-DpXE08jb.js"),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return I(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return j(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return v(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await u(Promise.all([import("./RelationshipQuery-DHbKKB74.js").then(a=>a.R),import("./executeRelationshipQuery-CLxi2JOj.js")]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await u(Promise.all([import("./RelationshipQuery-DHbKKB74.js").then(a=>a.R),import("./executeRelationshipQuery-CLxi2JOj.js")]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:a}=await u(import("./queryAttachments-C8Q1tI50.js"),t),c=q(this.url);return a(c,await(this.queryAttachmentsSupported?r(c,e,t):s(c,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:r}=await u(import("./executeAttributeBinsQuery-DqkJuHuN.js"),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await u(import("./executeTopFeaturesQuery-BaMn8Nnk.js"),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await u(import("./executeForTopIds-BZ6Q6CFM.js"),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await u(import("./executeForTopExtents-DhB7lSUv.js"),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await u(import("./executeForTopCount-Bq3uYMur.js"),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?m.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=V(r),!t.formatOf3DObjects)throw new d("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!Q(t.outSpatialReference,this.sourceSpatialReference))throw new d("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:s,originY:a,originZ:c,translationX:l,translationY:p,translationZ:h,scaleX:y,scaleY:f,scaleZ:S,rotationX:F,rotationY:b,rotationZ:x,rotationDeg:D}=r.transformFieldRoles;t.outFields.push(s,a,c,l,p,h,y,f,S,F,b,x,D)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};i([n({type:m})],o.prototype,"dynamicDataSource",void 0),i([n()],o.prototype,"fieldsIndex",void 0),i([n()],o.prototype,"gdbVersion",void 0),i([n()],o.prototype,"infoFor3D",void 0),i([n({readOnly:!0})],o.prototype,"parsedUrl",null),i([n()],o.prototype,"pbfSupported",void 0),i([n()],o.prototype,"queryAttachmentsSupported",void 0),i([n()],o.prototype,"sourceSpatialReference",void 0),i([n({type:String})],o.prototype,"url",void 0),o=i([g("esri.layers.graphics.sources.support.QueryTask")],o);const C=o;export{C as F};
