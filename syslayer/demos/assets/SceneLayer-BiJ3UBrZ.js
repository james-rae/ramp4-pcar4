const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-DWU-5HBV.js","./main-D_jCcUNd.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./uuid-Cl5lrJ4c.js","./normalizeUtils-Gz60uU0X.js","./normalizeUtilsCommon-BboKzpCl.js","./utils-DlXSLgCK.js","./utils-3tCdmWBq.js","./EditBusLayer-ocM5IMyF.js","./infoFor3D-DhzudQro.js","./Mesh-CyfSAkTj.js","./axisAngleDegrees-h_eXVbTd.js","./mat4-CiVQetHb.js","./common-DQOJ18NT.js","./quat-BUXSyYw2.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec32-CQFqDiXA.js","./vec42-CKs01hkn.js","./MeshComponent-NmrowKl4.js","./imageUtils-CV8e604h.js","./meshProperties-C4iW0Ukm.js","./MeshLocalVertexSpace-uKvE6H2j.js","./MeshTransform-C5IMoCpq.js","./mat4f64-Dk4dwAN8.js","./MeshVertexAttributes-DHriiJoa.js","./meshVertexSpaceUtils-cTsxdkAH.js","./triangulationUtils-CJnZXsxi.js","./earcut-Lltz9D9k.js","./Indices-Dr18ipVB.js","./plane-DMcb58KL.js","./vec2f64-DohEyf3f.js","./vec4f64-o2zAXfmz.js","./deduplicate-DRGqT5BM.js","./projectPointToVector-DZVfzWzg.js","./projection-DswCNHiF.js","./projectBuffer-B9jUCpdF.js","./vertexSpaceConversion-CNxuDBYl.js","./mat3-CruJiiUv.js","./spatialReferenceEllipsoidUtils-C6WSLmy-.js","./computeTranslationToOriginAndRotation-DU_ozVBd.js","./vec3-DUQfuNFc.js","./BufferView-8Ead2OQr.js","./vec2-maR1OrZI.js","./vec4-BC-l1fae.js","./External-EQ4uqBVF.js"])))=>i.map(i=>d[i]);
import{_ as R}from"./preload-helper-ExcqyqRp.js";import{B as i,D as s,N as I,J as O,aY as C,V as N,bR as A,M as V,H as v,aQ as te,aJ as re,p as ie,a4 as B,v as se,s as d,bL as ae,aZ as oe,U as ne,fI as G,n as f,Z as le,iI as pe,b6 as de,b4 as Q,bE as ue,eY as k,bz as P,Y as ce,fJ as ye,iw as me,b9 as he}from"./main-D_jCcUNd.js";import{S as fe}from"./MultiOriginJSONSupport-CW6rZq6k.js";import{f as ge}from"./Layer-DXHV-tnm.js";import{i as we,m as ve,t as be}from"./meshSpatialReferenceScaleUtils-CcfbVEAj.js";import{i as Ie}from"./APIKeyMixin-D2PPxhoM.js";import{l as Le}from"./ArcGISService-BbYcf4hC.js";import{e as Se}from"./CustomParametersMixin-jN4v0L1t.js";import{F as Fe}from"./EditBusLayer-ocM5IMyF.js";import{b as _e}from"./OperationalLayer-Doyloi11.js";import{j as Te}from"./PortalLayer-Uffz25z-.js";import{t as Oe}from"./ScaleRangeLayer-8w7mUjfL.js";import{R as $e,V as J}from"./SceneService-C77g8yK9.js";import{f as Ee}from"./TemporalLayer-B9YdH416.js";import{d as M,l as xe}from"./TimeInfo-VA0PBbXY.js";import{p as z}from"./TimeExtent-BsjGA75b.js";import{s as je}from"./associatedFeatureServiceUtils-DrTq3qqO.js";import{t as Ae}from"./capabilities-De4i-OzG.js";import{c as Pe,p as Re,d as De,l as qe,s as Ne}from"./commonProperties-CoOKNqGE.js";import{N as Ue,Y as Ce,d as Ve,C as Ge,n as K}from"./labelingInfo-BjIQ8jVY.js";import{t as Qe,p as ke}from"./FeatureReductionSelection-pZOqb1JI.js";import{s as Je}from"./fieldProperties-B2CNuM9C.js";import{Z as Me}from"./FieldsIndex-B_iDwEMI.js";import{p as Y,a as ze,y as Ke,m as He}from"./I3SLayerDefinitions-BXjWfAL-.js";import{r as We,n as Ze}from"./infoFor3D-DhzudQro.js";import{p as Be}from"./LayerFloorInfo-0mOr8WaR.js";import{a as Ye}from"./lazyLayerLoader-Dy5ZySjL.js";import{v as Xe}from"./persistable-q_77IMYF.js";import{L as et,a as tt}from"./projection-DswCNHiF.js";import{t as rt}from"./styleUtils-DUsilyYV.js";import{u as it}from"./typeUtils-sYoC4L3e.js";import{b as st}from"./Query-C_GHDF0q.js";import{$ as H,P as at,w as ot}from"./elevationInfoUtils-DW7d7gyv.js";import{p as nt}from"./popupUtils-BqS1przm.js";import{V as lt}from"./I3SUtil-BKS2b8h4.js";import{n as pt,p as dt}from"./popupUtils-BfTqWsQk.js";import"./MeshTransform-C5IMoCpq.js";import"./mat4-CiVQetHb.js";import"./common-DQOJ18NT.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-BUXSyYw2.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-CQFqDiXA.js";import"./vec42-CKs01hkn.js";import"./axisAngleDegrees-h_eXVbTd.js";import"./uuid-Cl5lrJ4c.js";import"./layerContainerType-C5CzMsLd.js";import"./PortalItem-BEvvM5w1.js";import"./portalItemUtils-BahwO9FL.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./HeightModelInfo-DCYyjFn0.js";import"./jsonContext-D4Q6dN1N.js";import"./resourceUtils-wj945cbO.js";import"./resourceUtils-CNC1LYC1.js";import"./saveUtils-Baz_wP0W.js";import"./timeZoneUtils-6sWpKbTj.js";import"./ElevationInfo-tQKCRFIZ.js";import"./lengthUtils-BNIshbqa.js";import"./Field-Bc3jm0Qy.js";import"./fieldType-DdU3LEuk.js";import"./SimpleRenderer-kWIWRng4.js";import"./commonProperties-Dxn34wXK.js";import"./colorRamps-aDPmbH1X.js";import"./ColorStop-CbCoynyo.js";import"./visualVariableUtils-Dkp13P5X.js";import"./UniqueValueRenderer-CKVXbaX9.js";import"./defaultCIMValues-BHDX_8BB.js";import"./enums-CD-fX3vU.js";import"./RendererLegendOptions-CHBulSBq.js";import"./styleUtils-BXNV9BLc.js";import"./RelationshipQuery-gSCLUaXB.js";import"./NormalizationBinParametersMixin-CRVx_Lu9.js";import"./labelUtils-DAnCNhi5.js";import"./MD5-C9MwAd2G.js";import"./resourceExtension-1jSZOx3T.js";import"./projectBuffer-B9jUCpdF.js";import"./ClassBreaksRenderer-CaxSHQCK.js";import"./LRUCache-Dpz-QYf5.js";import"./MemCache-Dl-4GPDO.js";import"./Version-ZDKFRu5V.js";import"./utils-DVyeErJi.js";import"./heatmapUtils-DFX2PwUX.js";import"./vec4f64-o2zAXfmz.js";import"./projectVectorToVector-xmttXaOO.js";import"./projectPointToVector-DZVfzWzg.js";import"./sphere-BznZRj-C.js";import"./mat3-CruJiiUv.js";import"./plane-DMcb58KL.js";import"./vec2f64-DohEyf3f.js";import"./I3SBinaryReader-DundIiPa.js";import"./VertexAttribute-Cq4MnHjR.js";import"./edgeUtils-Ds4dD0Lc.js";import"./floatRGBA-Dexg0mPn.js";import"./NormalAttribute.glsl-D2nOgBdg.js";import"./glsl-BH37Aalp.js";import"./ShaderOutput-DnYY5J1_.js";import"./BindType-BBwFZqyN.js";import"./orientedBoundingBox-DvgBBBLY.js";import"./spatialReferenceEllipsoidUtils-C6WSLmy-.js";import"./computeTranslationToOriginAndRotation-DU_ozVBd.js";import"./ViewingMode-HRfKv6NR.js";function X({associatedLayer:e,serviceUpdateTimeStamp:t}){const r=e?.editingInfo?.lastEditDate,o=e?.serverGens,n=r!=null,l=t!=null,p=n&&l&&t.lastUpdate!==r.getTime();return n&&(p||!l&&o?.minServerGen!==o?.serverGen)}const ut=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const r=this.associatedLayer?.timeInfo;if(r==null)return null;const o=r.clone();return C(o,this.fieldsIndex),o}set timeInfo(r){C(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:o}=this;if(o==null)return;const{startTimeField:n,endTimeField:l}=o;if(n==null&&l==null||X({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const p=async h=>{let u=null;try{u=(await this.fetchStatistics?.(h,r))?.stats}catch{}if(u==null)return null;const{minTimeStr:w,min:$,maxTimeStr:E,max:x}=u,S=h===n?w??$:E??x;return S!=null?new Date(S):null},[c,y]=await Promise.all([p(n),p(l)]);if(n!=null&&c==null||l!=null&&y==null)return;const m=new z({start:c,end:y});this.setAtOrigin("timeInfo",new M({endField:l,startField:n,fullTimeExtent:m}),"service")}};return i([s({type:M,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([s({type:z,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([s({type:xe,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([s({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([s({type:L,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([I("esri.layers.mixins.TemporalSceneLayer")],t),t};let L=class extends O{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([s({type:String})],L.prototype,"endTimeField",void 0),i([s({type:String})],L.prototype,"startTimeField",void 0),L=i([I("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],L);let g=class extends O{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([s({type:String,json:{read:!0,write:{isRequired:!0}}})],g.prototype,"name",void 0),i([s({type:String,json:{read:!0,write:{isRequired:!0}}})],g.prototype,"field",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([s({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],g.prototype,"type",void 0),g=i([I("esri.layers.support.RangeInfo")],g);var _;let D=_=class extends O.JSONSupportMixin(N.ofType(A)){constructor(e){super(e)}clone(){return new _(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map(r=>{if(!t.equals(r.spatialReference)){if(!et(r.spatialReference,t))return e?.messages?.push(new V("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new A;tt(r,n,t),r=n}const o=r.toJSON(e);return delete o.spatialReference,o}).filter(r=>r!=null):(e?.messages?.push(new V("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(r=>r.toJSON(e)))}static fromJSON(e,t){const r=new _;return e.forEach(o=>r.add(A.fromJSON(o,t))),r}};D=_=i([I("esri.layers.support.PolygonCollection")],D);const T=D;var q;let b=q=class extends O{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new T,this._geometriesSource=null}initialize(){this.addHandles(te(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,re))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=T.fromJSON(e,r):this._geometriesSource={url:ie(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await B(r,{responseType:"json",signal:t?.signal}),l=e.toJSON(),p=n.data.map(c=>({...c,spatialReference:l}));this.geometries=T.fromJSON(p,o),this._geometriesSource=null}clone(){const e=new q({geometries:se(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([s({type:["disjoint","contains"],nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"spatialRelationship",void 0),i([s({type:T,nonNullable:!0,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),Xe({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],b.prototype,"geometries",void 0),i([v(["web-scene","portal-item"],"geometries")],b.prototype,"readGeometries",null),b=q=i([I("esri.layers.support.SceneFilter")],b);const ct=b;async function yt({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:o,path:n,customParameters:l,apiKey:p,signal:c}){if(t==null)throw new d(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=o.get(e);if(y==null)throw new d(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const m=t.find(w=>w.name===y.name);if(m==null)throw new d(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const h=ae(n,m.href),{data:u}=await B(h,{query:{f:"json",...l,token:p},responseType:"json",signal:c});return u}async function mt(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(ht(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function ht(e){const{BlobReader:t,ZipReader:r,BlobWriter:o}=await R(()=>import("./zipjs-wrapper-DlnhoglY.js"),[],import.meta.url),n=[];return(await new r(new t(e)).getEntries()).forEach(p=>{if(p.directory||/^__MACOS/i.test(p.filename))return;const c=new o,y=p.getData?.(c).then(m=>new File([m],p.filename));y&&n.push(y)}),Promise.all(n)}const ft=new Set(["3DObject","Point"]),W=Je();let a=class extends ut(Fe($e(Le(_e(Te(Oe(fe(Se(Ie(oe.ClonableMixin(ge))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new N,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null),this.associatedLayer=ne(this.associatedLayer)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getField(e)?.domain??null;return this.associatedLayer?Ue(this.associatedLayer,e,t,r):r}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get attributeTableTemplate(){return this.associatedLayer?.attributeTableTemplate??null}get fieldsIndex(){return new Me(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Y.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&Ce(this.associatedLayer)}get geometryType(){return gt[this.profile]||"mesh"}set renderer(e){G(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??Ae;const{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:p,supportsReturnServiceEditsInSourceSpatialReference:c},data:{supportsZ:y,supportsM:m,isVersioned:h,supportsAttachment:u},operations:{supportsEditing:w,supportsAdd:$,supportsUpdate:E,supportsDelete:x,supportsQuery:S,supportsQueryAttachments:U,supportsAsyncConvert3D:ee}}=e,F=e.operations.supportsChangeTracking,j=!!this.associatedLayer?.infoFor3D;return{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:c,supportsRollbackOnFailure:n,supportsGeometryUpdate:j&&p,supportsUploadWithItemId:l},data:{supportsAttachment:u,supportsZ:y,supportsM:m,isVersioned:h},operations:{supportsQuery:S,supportsQueryAttachments:U,supportsEditing:w&&F,supportsAdd:j&&$&&F,supportsDelete:j&&x&&F,supportsUpdate:E&&F,supportsAsyncConvert3D:ee}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return r!=null&&Z[r]?Z[r]:(f.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(le),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await rt(this,{origin:"service"},t),G(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){f.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new st;return this.geometryType==="mesh"?this.capabilities.query.supportsReturnMesh&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r?.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=pe(this.fieldsIndex,await pt(this,dt(this)));return lt(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new de;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(f.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return nt(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(J.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(J.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await R(()=>import("./editingSupport-DWU-5HBV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);let o=t;await this.load();const n=this.associatedLayer;if(!n)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,p=!!n.infoFor3D,c=o?.globalIdUsed??!0;if(p&&l==null)throw new d(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(p&&!c)throw new d(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return Q(n.url)&&p&&e.deleteFeatures!=null&&l!=null&&(o={...o,globalIdToObjectId:await Ve(n,e.deleteFeatures,l)}),r(this,n.source,e,o)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){t??={};const r=u=>{throw f.getLogger(this).error(".convertMesh()",u.message),u};await this.load(),this.infoFor3D||r(new d("invalid:layer","SceneLayer has no capability for mesh conversion"));const o=await this.extractAndFilterFiles(e),n=o.reduce((u,w)=>We(this.infoFor3D,w)?u+1:u,0);n===0&&r(new we),n>1&&r(new ve);const l=this.spatialReference,p=t.location??new ue({x:0,y:0,z:0,spatialReference:l}),c=p.spatialReference.isGeographic?"local":"georeferenced",{default:y}=await R(async()=>{const{default:u}=await import("./Mesh-CyfSAkTj.js");return{default:u}},__vite__mapDeps([11,2,1,3,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,10]),import.meta.url),m=y.createWithExternalSource(p,o,{vertexSpace:c,transform:be(p.spatialReference),unitConversionDisabled:!0}),[h]=await this.uploadAssets([m],{...t,useAssetOrigin:!t.location});return h}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await mt(e)).filter(r=>Ze(t,r)):e}validateLayer(e){if(e.layerType&&!ft.has(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const p=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some(n=>n.name===e.name),r=!!this.associatedLayer?.fields?.some(n=>n&&e.name===n.name),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=k(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===P.SERVICE||l===P.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");this.associatedLayer?.infoFor3D==null||!e||!Q(this.associatedLayer?.url)||!X(this)||k(this).setAtOrigin("fullExtent",e.clone(),P.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:o}=await je(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await Ye.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:o}),await this.associatedLayer.load()}catch(t){ce(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await ye(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?f.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):f.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&H(f.getLogger(this),at("Mesh scene layers","relative-to-scene",e)),H(f.getLogger(this),ot("Scene layers",e))}async fetchStatistics(e,t){return await yt({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};i([s({types:{key:"type",base:Qe,typeMap:{selection:ke}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),i([s({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),i([s({json:{read:!1}})],a.prototype,"associatedLayer",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),i([s({...W.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),i([s()],a.prototype,"types",null),i([s()],a.prototype,"typeIdField",null),i([s()],a.prototype,"templates",null),i([s()],a.prototype,"formTemplate",null),i([s()],a.prototype,"attributeTableTemplate",null),i([s({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),i([s({type:Be,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),i([s(W.outFields)],a.prototype,"outFields",void 0),i([s({type:Y,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),i([v("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),i([s({type:[ze],readOnly:!0})],a.prototype,"materialDefinitions",void 0),i([s({type:[Ke],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),i([s({type:[He],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),i([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),i([s({readOnly:!0})],a.prototype,"statisticsInfo",void 0),i([s({type:N.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),i([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),i([s({type:ct,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([s(Pe)],a.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({type:String})],a.prototype,"geometryType",null),i([s(Re)],a.prototype,"labelsVisible",void 0),i([s({type:[Ge],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:K},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K},write:!0}})],a.prototype,"labelingInfo",void 0),i([s(De)],a.prototype,"legendEnabled",void 0),i([s({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if(typeof e=="number"&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return r!==void 0?me(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),i([s({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),i([s({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),i([s({types:it,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),i([s({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),i([v("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),i([s(qe)],a.prototype,"popupEnabled",void 0),i([s({type:he,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),i([s({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),i([v("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),i([s({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),i([v("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),i([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),i([s({type:String,json:{read:!1}})],a.prototype,"profile",void 0),i([v("service","profile",["store.profile"])],a.prototype,"readProfile",null),i([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),i([s(Ne)],a.prototype,"screenSizePerspectiveEnabled",void 0),i([s({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),i([s(Ee)],a.prototype,"useViewTime",null),a=i([I("esri.layers.SceneLayer")],a);const Z={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},gt={"mesh-pyramids":"mesh",points:"point"},mi=a;export{mi as default};
