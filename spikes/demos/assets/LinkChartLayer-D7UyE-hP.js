import{V as Y,aw as ce,s as Q,aG as Te,aB as Ee,n as R,aq as ye,G as Ne,bo as me,bx as ne,aV as ge,q as b,u as M,C as Ie}from"./main-Di-yv68k.js";import{S as De}from"./MultiOriginJSONSupport-BHYj0bCk.js";import{f as xe}from"./Layer-Lf0NR8Y2.js";import{o as U}from"./featureConversionUtils-CtH34dRT.js";import{s as _e}from"./OptimizedFeature-CIptWNVu.js";import{u as B,E as Re,A as Ae,b as Oe,v as ve,L as Se,m as Ge,h as Pe,a as He,f as $e,d as T,s as v,t as q,r as V,e as Fe,n as w,o as fe,g as Ue,c as Le,i as Be}from"./KnowledgeGraphSublayer-jTE6Yr-J.js";import{l as ze}from"./BlendLayer-BCBWzhMQ.js";import{b as We}from"./OperationalLayer-CyYORd59.js";import{t as je}from"./ScaleRangeLayer-Cncbty8c.js";import{F as Qe}from"./knowledgeGraphService-0m2P_nn1.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-BuwqwsNz.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./projection-CYLKhgpd.js";import"./projectBuffer-3mYoUKUF.js";import"./GraphicsLayer-DQgdmjeR.js";import"./GraphicsCollection-CxhW6Cez.js";import"./ElevationInfo-CddvbmPe.js";import"./lengthUtils-D9_7Z1Xc.js";import"./jsonUtils-CLaOP_2R.js";import"./parser-CInzATcp.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-VhU6idD3.js";import"./common-DQOJ18NT.js";import"./Relationship-C1V_UDQT.js";import"./Query-CNJoIC0c.js";import"./Field-CdNux_Nu.js";import"./fieldType-DHh5MaW3.js";import"./UniqueValueRenderer-DNYApujY.js";import"./RendererLegendOptions-Jo4JxJLL.js";import"./diffUtils-OpNb2_Xo.js";import"./colorRamps-D6xM6S7K.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-YegwCvK9.js";import"./compilerUtils-DvVWfSTH.js";import"./styleUtils-DMZ8V4nj.js";import"./jsonUtils-CZ9RWLS3.js";import"./LRUCache-Xvjg_CIH.js";import"./Version-DVVbAD23.js";import"./FieldsIndex-Cagnio6M.js";import"./UnknownTimeZone-gKJ2squl.js";import"./OverrideHelper-d_MfG4_c.js";import"./colorUtils-CCrrMix7.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DYjUP9Jk.js";import"./heatmapUtils-DdnAlafL.js";import"./workers-B-3l2v1Q.js";import"./FeatureStore-BaDDSrTS.js";import"./BoundsStore-sYrXtFfm.js";import"./PooledRBush-vC0agmqE.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-BYnuAh3A.js";import"./queryUtils-CoGkzqTT.js";import"./normalizeUtils-5syqU7Xm.js";import"./normalizeUtilsCommon-BlsSL0El.js";import"./utils-Cuy3r-Ev.js";import"./utils-Ci78jMpc.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-tV4eRmQB.js";import"./QueryEngine-W08Uh5XC.js";import"./WhereClause-C36j_OlL.js";import"./TimeOnly-BKxTx3yV.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Bi3aJzL6.js";import"./utils-D58PGvoU.js";import"./Basemap-CWy04dS9.js";import"./loadAll-DxfLEJdD.js";import"./PortalItem-C0wt6854.js";import"./writeUtils-CE4mn-WU.js";import"./utils-CMyDUgxS.js";import"./ClassBreaksDefinition-m9nxOknV.js";import"./Scheduler-CgoZzrFK.js";import"./signal-VGlfR4Ca.js";import"./clientSideDefaults-DDFQAdRG.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-CJJZ2Kvm.js";import"./FeatureEffectLayer-Cq96z9tS.js";import"./FeatureEffect-C0pg4nkZ.js";import"./FeatureFilter-EbM8hUhx.js";import"./FeatureReductionLayer-YWiJdZV9.js";import"./commonProperties-CCTAN90O.js";import"./FeatureReductionSelection-DnDffvxq.js";import"./featureLayerUtils-DZ2_TdDi.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-F3nPpUsk.js";import"./labelingInfo-XoJbgDtu.js";import"./labelUtils-pPZhCl16.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CAFRwMiB.js";import"./OrderByInfo-I4DTw-fg.js";import"./RefreshableLayer-BYxfUiqI.js";import"./TemporalLayer-DCDDGG1X.js";import"./TimeInfo-BrIOBRYx.js";import"./FeatureSet-CojwqzaF.js";import"./popupUtils-BAFY7oPf.js";var J;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(J||(J={}));let f=class extends We(ze(je(De(xe)))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(Y.ofType(B)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new ce({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(Y.ofType(B)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e?.inclusionModeDefinition,e?.dataPreloadedInLocalCache&&!e?.inclusionModeDefinition)throw new Q("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(Te(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),Ee))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:i,dataPreloadedInLocalCache:a,defaultLinkChartConfig:n}=e;return{url:t,title:i,dataPreloadedInLocalCache:a,defaultLinkChartConfig:n}}_initializeLayerProperties(e){if(!this.title&&this.url){const r=this.url.split("/");this.title=r[r.length-2]}const t=new Set;let i=[],a=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new Q("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach(r=>{r.name&&this._graphTypeLookup.set(r.name,r)}),e.knowledgeGraph.dataModel.relationshipTypes?.forEach(r=>{r.name&&this._graphTypeLookup.set(r.name,r)}),e.inclusionModeDefinition?.generateAllSublayers?(i=e.knowledgeGraph.dataModel.entityTypes??[],a=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((r,d)=>{const u=this._graphTypeLookup.get(d);if(!u)return R.getLogger(this).warn(`A named type, ${d}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(d);u.type==="relationship"?t.has(d)||(t.add(d),a.push(u)):u.type==="entity"?t.has(d)||(t.add(d),i.push(u)):(R.getLogger(this).warn(`A named type, ${d}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(d))}):(i=e.knowledgeGraph.dataModel.entityTypes??[],a=e.knowledgeGraph.dataModel.relationshipTypes??[]);const n=new Re({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=i,this.memberRelationshipTypes=a,this.dataManager=n}load(e){const t=async()=>{const i=[],a=[];this.loadLayerAssumingLocalCache(),await Le(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(n=>{n.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(n=>{a.push(n.refreshCachedQueryEngine()),i.push(new Promise(r=>{n.on("layerview-create",()=>{r(null)})}))}),this.tables.forEach(n=>{a.push(n.refreshCachedQueryEngine())}),await Promise.all(a)};return this.addResolvingPromise(new Promise(i=>{Qe(this.url).then(async a=>{if(this._initializeLayerProperties({knowledgeGraph:a,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})})),this.dataPreloadedInLocalCache){const n=Be.getInstance();for(const[r,d]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const u of d.members?.values()??[]){const L=n.readFromStoreById(`${r}__${u.id}`);L&&ye(this.dataManager.sublayerCaches,r,()=>new Map).set(u.id,L)}await t()}else{const n=this.defaultLinkChartConfig?.layoutMode==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,n,!0).then(async()=>{Ne(e),await t()}))}i(null)})})),Promise.resolve(this)}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):R.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}async addRecords(e,t){let i=[];t?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(i=await Ae(e,this.dataManager.knowledgeGraph));const a=e.concat(i).filter(n=>!this.sublayerIdsCache.get(n.typeName)?.has(n.id));await this._handleNewRecords(a)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:i=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let a=[];for(const r of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(r.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(r.typeName)?.members?.has(r.id)&&a.push(r);if(t){const r=new Set,d=[];for(const u of a)if(this.dataManager.nodeConnectionsLookup.has(u.id))for(const L of this.dataManager.nodeConnectionsLookup.get(u.id))r.add(L);for(const u of r)if(this.dataManager.memberIdTypeLookup.has(u))for(const L of this.dataManager.memberIdTypeLookup.get(u))this.dataManager.relationshipTypeNames.has(L)&&d.push({id:u,typeName:L});a=a.concat(d)}this.dataManager.removeFromLayer(a);for(const r of a)this.sublayerIdsCache.get(r.typeName)?.delete(r.id),this.dataManager.relationshipTypeNames.has(r.typeName)?this.relationshipLinkChartDiagramLookup.delete(r.id):this.entityLinkChartDiagramLookup.delete(r.id);i&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const n=[];return this.layers.forEach(r=>{n.push(r.refreshCachedQueryEngine())}),await Promise.all(n),this._refreshNamedTypes(),a}async expand(e,t){const i=await this.dataManager.getConnectedRecordIds(e,t),a=i.filter(n=>!this.sublayerIdsCache.get(n.typeName)?.has(n.id));return await this._handleNewRecords(i),{records:a}}loadLayerAssumingLocalCache(){const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===me.DEFAULTS?this._createSublayers(e,this.layers,t=>!!t.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===me.DEFAULTS?this._createSublayers(e,this.tables,t=>!t.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t,i)=>{const a=ye(this.sublayerIdsCache,i,()=>new Set);t.members?.forEach(({id:n,linkChartLocation:r})=>{if(a.add(n),r){const d=r instanceof _e?r:U(r);this.dataManager.relationshipTypeNames.has(i)?this.relationshipLinkChartDiagramLookup.set(n,d):this.entityLinkChartDiagramLookup.set(n,d)}})})}async calculateLinkChartLayout(e="RADIAL_TREE",t){const i=[],a=[],n=[];this.dataManager.sublayerCaches.forEach((o,l)=>{this.dataManager.entityTypeNames.has(l)?o.forEach(s=>{i.push({typeName:l,feature:s})}):this.dataManager.relationshipTypeNames.has(l)&&o.forEach(s=>{a.push({typeName:l,feature:s})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const r=new Map,d=new Map,u=new Map,L=new Map,k=new Uint8Array(i.length),y=new Float64Array(i.length),m=new Float64Array(i.length),g=new Float64Array(i.length),oe=new Float64Array(i.length),K=new Uint32Array(a.length),X=new Uint32Array(a.length),re=new Float64Array(a.length),se=new Float64Array(a.length),c=[],Ce="FORCE_DIRECTED",x=new ce({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let P,le="FORCE_DIRECTED",p=0,E=0;const be=Oe.apply;switch(le=e==="GEOGRAPHIC"?Ce:e,le){case"FORCE_DIRECTED":P=$e.apply;break;case"COMMUNITY":P=He.apply;break;case"HIERARCHICAL":P=Pe.apply;break;case"RADIAL_TREE":P=Ge.apply;break;case"SMART_TREE":P=Se.apply;break;default:P=ve.apply}let Z=!1;i.forEach(({typeName:o,feature:l})=>{if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"&&t?.lockedNodeLocations?.has(l.attributes[T])){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(o)?k[p]=v.IsGeographic:k[p]=v.None;const s=t.lockedNodeLocations.get(l.attributes[T]);y[p]=s.x,m[p]=s.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(o)){k[p]=v.IsGeographic;let s=null;const I=l.attributes[this.dataManager.geographicLookup.get(o).name];switch(this.dataManager.geographicLookup.get(o)?.geometryType){case"esriGeometryPoint":y[p]=I?.x,m[p]=I?.y;break;case"esriGeometryPolygon":s=I?.centroid,s?.x!=null&&s?.y!=null?(y[p]=s.x,m[p]=s.y):k[p]=v.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":s=I?.extent?.center,s?.x!=null&&s?.y!=null?(y[p]=s.x,m[p]=s.y):k[p]=v.IsMovable;break;default:k[p]=v.IsMovable}(y[p]==null||m[p]==null||Number.isNaN(y[p])||Number.isNaN(m[p]))&&(k[p]=v.IsMovable,y[p]=0,m[p]=0)}else if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){!Z&&t?.lockedNodeLocations?.has(l.attributes[T])&&(Z=!0);const s=t?.timeInfoByTypeName?.get(o),I=s?.startField,A=I&&s?.startField?l.attributes[I]:null;g[p]=A?new Date(A).getTime():NaN;const C=s?.endField,D=C&&s?.endField?l.attributes[C]:null;oe[p]=D?new Date(D).getTime():NaN,y[p]=0,m[p]=0,k[p]=v.IsMovable}else k[p]=v.IsMovable,y[p]=0,m[p]=0;L.set(l.attributes[T],p),c[p]={feature:l,typeName:o},p++}),Z&&R.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let he=!1;const ee=new Map;a.forEach(o=>{const l=o.feature.attributes[q],s=o.feature.attributes[V],I=L.get(l),A=L.get(s),C=t?.timeInfoByTypeName?.get(o.typeName),D=t?.timeInfoByTypeName?C?.startField:null,O=D?o.feature.attributes[D]:null,j=C?.endField,H=j?o.feature.attributes[j]:null;if(I!==void 0&&A!==void 0){let S=l+"-"+s;e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(S=S+"-"+O+"-"+H);const F=ee.get(S);F?.has(o.typeName)||(K[E]=I,X[E]=A,e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(re[E]=O?new Date(O).getTime():NaN,se[E]=H?new Date(H).getTime():NaN),F===void 0?ee.set(S,new Map([[o.typeName,E]])):F.set(o.typeName,E),E++),n.push(o)}else he=!0,this.relationshipLinkChartDiagramLookup.set(l,null)}),he&&R.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const pe=this._validateLayoutSettings(e,t),te=this._convertLayoutSettingsToCalculationSettings(pe);await Fe();let z=!1,N=null;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){let o;({success:z,links:N,graphics:o}=be(k,y,m,g,oe,K.subarray(0,E),X.subarray(0,E),re.subarray(0,E),se.subarray(0,E),e==="CHRONOLOGICAL_MULTIPLE",t?.chronologicalLayoutSettings??{})),z&&(this.chronologicalAuxiliaryGraphics=o)}else({success:z,links:N}=P(k,y,m,K.subarray(0,E),X.subarray(0,E),te.computationBudgetTime,te.idealEdgeLengthMultiplier,te.repulsionRadiusMultiplier));if(!z)throw new Q("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let o=0;o<c.length;o++){if(m[o]>84.9999?m[o]=84.9999:m[o]<-84.9999&&(m[o]=-84.9999),y[o]>179.9999?y[o]=179.9999:y[o]<-179.9999&&(y[o]=-179.9999),c[o].feature.attributes[w]=new ne(y[o],m[o]),r.has(c[o].typeName))r.get(c[o].typeName)?.set(c[o].feature.attributes[T],c[o].feature);else{const s=new Map;s.set(c[o].feature.attributes[T],c[o].feature),r.set(c[o].typeName,s)}u.set(c[o].feature.attributes[T],c[o].feature);const l=U(c[o].feature.attributes[w]);this.entityLinkChartDiagramLookup.set(c[o].feature.attributes[T],c[o].feature.attributes[w]?l:null),c[o].feature.attributes[w].x<x.xmin&&(x.xmin=c[o].feature.attributes[w].x),c[o].feature.attributes[w].x>x.xmax&&(x.xmax=c[o].feature.attributes[w].x),c[o].feature.attributes[w].y<x.ymin&&(x.ymin=c[o].feature.attributes[w].y),c[o].feature.attributes[w].y>x.ymax&&(x.ymax=c[o].feature.attributes[w].y)}if(this.linkChartExtent.xmin=x.xmin,this.linkChartExtent.xmax=x.xmax,this.linkChartExtent.ymin=x.ymin,this.linkChartExtent.ymax=x.ymax,!N)throw new Q("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const W=new Map,ae=new Map,ie=new Map,de=new Set;for(let o=0;o<n.length;o++){const l=[],s=n[o],I=s.feature.attributes[q],A=s.feature.attributes[V];let C=I+"-"+A;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){const h=t?.timeInfoByTypeName?.get(s.typeName),_=t?.timeInfoByTypeName?h?.startField:null,G=_?s.feature.attributes[_]:null,$=h?.endField;C+="-"+G+"-"+($?s.feature.attributes[$]:null)}const D=ee.get(C).get(s.typeName),O=D===0?0:N?.vertexEndIndex[D-1];if(!de.has(D)){if(de.add(D),N.types[D]===fe.Recursive){const h=[N.vertices[2*O],N.vertices[2*O+1]],_=[N.vertices[2*(O+1)],N.vertices[2*(O+1)+1]],G=[.5*(h[0]+_[0]),.5*(h[1]+_[1])],$=[G[0]-h[0],G[1]-h[1]],we=[G[0]+$[1],G[1]-$[0]],ke=[G[0]-$[1],G[1]+$[0]];l.push(h),l.push(we),l.push(_),l.push(ke),l.push(h)}else{if(N.types[D]!==fe.Regular){R.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let h=O;h<N.vertexEndIndex[D];h++)l.push([N.vertices[2*h],N.vertices[2*h+1]])}if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"){const h=c[L.get(I)]?.feature.attributes[w],_=c[L.get(A)]?.feature.attributes[w];l[0][0]===h.x&&l[0][1]===h.y||(l[0]=[h.x,h.y]),l[l.length-1][0]===_.x&&l[l.length-1][1]===_.y||(l[l.length-1]=[_.x,_.y])}for(let h=1;h<l.length-1;h++)l[h][1]>85.5?l[h][1]=85.5:l[h][1]<-85.5&&(l[h][1]=-85.5),l[h][0]>179.9999?l[h][0]=179.9999:l[h][0]<-179.9999&&(l[h][0]=-179.9999);W.has(C)?W.get(C).push(l):W.set(C,[l])}const j=W.get(C);ae.has(C)||(ae.set(C,new Map),ie.set(C,new Map));const H=ae.get(C),S=ie.get(C);H.has(s.typeName)||(H.set(s.typeName,j.shift()),S.set(s.typeName,0));const F=H.get(s.typeName);S.set(s.typeName,S.get(s.typeName)+1);const ue=new ge({paths:[F]});if(s.feature.attributes[w]=ue,d.has(s.typeName))d.get(s.typeName)?.set(s.feature.attributes[T],s.feature);else{const h=new Map;h.set(s.feature.attributes[T],s.feature),d.set(s.typeName,h)}u.set(s.feature.attributes[T],s.feature);const Me=U(s.feature.attributes[w]);this.relationshipLinkChartDiagramLookup.set(s.feature.attributes[T],s.feature.attributes[w]?Me:null)}for(const o of n)o.feature.attributes[Ue]=ie.get(o.feature.attributes[q]+"-"+o.feature.attributes[V])?.get(o.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:pe},{nodes:r,links:d,idMap:u}}async applyNewLinkChartLayout(e="RADIAL_TREE",t){const i=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach(a=>{i.push(a.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(t=>{t?.members?.forEach(i=>{const a=i.linkChartLocation;let n;const r=i.id;a&&(n="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]},e.set(r,new ne({x:n.x,y:n.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((t,i)=>{if(t.useAllData=!1,t.members&&t.members.size>0){if(!this.dataManager.sublayerCaches.get(i))return;const a=new Set(Array.from(this.dataManager.sublayerCaches.get(i).keys()));Array.from(t.members.keys()).filter(n=>!a.has(n)).forEach(n=>{t.members?.delete(n)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach(i=>{t.push(i.refreshCachedQueryEngine())}),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e){let t=[];for(const a of this.dataManager.relationshipTypeNames){const n=this.sublayerIdsCache.get(a);n&&(t=t.concat(Array.from(n.keys())))}const i=await this.dataManager.getRelationshipsBetweenNodes(e,t);return await this._handleNewRecords(i),{records:i}}async connectFromEntities(e){let t=[];for(const n of this.dataManager.relationshipTypeNames){const r=this.sublayerIdsCache.get(n);r&&(t=t.concat(Array.from(r.keys())))}let i=[];for(const n of this.dataManager.entityTypeNames){const r=this.sublayerIdsCache.get(n);r&&(i=i.concat(Array.from(r)))}const a=await this.dataManager.getRelationshipsFromNodes(e,i,t);return await this._handleNewRecords(a),{records:a}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="RADIAL_TREE",t){const i=new Map;this.layers.forEach(a=>{i.set(a.objectType.name,a.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:i,...t})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const a of e)this.sublayerIdsCache.has(a.typeName)||(this.sublayerIdsCache.set(a.typeName,new Set),t.push(a.typeName)),this.sublayerIdsCache.get(a.typeName).add(a.id);for(const a of t){const n=this._graphTypeLookup.get(a);if(n){const r=this._createSublayer(n);n.type==="entity"?this.dataManager.entityTypeNames.add(a):this.dataManager.relationshipTypeNames.add(a),r.geometryType?this.layers.push(r):this.tables.push(r),this.dataManager.sublayerCaches.set(a,new Map)}}await Le(this,t),await this.dataManager.refreshCacheContent(e.map(a=>a.id));const i=Object.assign({},this._currentLinkChartConfig.layoutOptions);i.lockedNodeLocations=new Map;for(const[a,n]of this.entityLinkChartDiagramLookup.entries())n&&i.lockedNodeLocations.set(a,new ne(n.coords[0],n.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,i)}_createSublayers(e,t,i){e.forEach(a=>{const n=this._createSublayer(a);i(n)&&t.push(n),this._updateSublayerCaches(a)})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(n=>n.type===i.graphType&&n.name===i.graphTypeName);a&&(i.objectType=a,i.read({title:a.name},{origin:"service"}),this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,t)=>{e?.members?.forEach(i=>{const a=i.linkChartLocation;let n;const r=i.id;if(!a)return;n="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]};const d=U(n);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(r,d):this.entityLinkChartDiagramLookup.set(r,d),this.linkChartExtent.xmin>n.x&&(this.linkChartExtent.xmin=n.x),this.linkChartExtent.xmax<n.x&&(this.linkChartExtent.xmax=n.x),this.linkChartExtent.ymin>n.y&&(this.linkChartExtent.ymin=n.y),this.linkChartExtent.ymax<n.y&&(this.linkChartExtent.ymax=n.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(t=>{const i=this.relationshipLinkChartDiagramLookup.get(t.attributes[q]),a=this.relationshipLinkChartDiagramLookup.get(t.attributes[V]);if(i&&a){const n=U(new ge({paths:[[[i.coords[0],i.coords[1]],[a.coords[0],a.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(t.attributes[T],n)}else this.relationshipLinkChartDiagramLookup.set(t.attributes[T],null)})})):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const i=g=>typeof g=="number"&&!isNaN(g),a=g=>i(g)&&g>=1,n=g=>i(g)&&g>=1,r=g=>Object.values(J).includes(g),d=g=>i(g)&&g>=0,u={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"]).has(e)||!t)return u;t.organicLayoutSettings??={};const{computationBudgetTime:L,repulsionRadiusMultiplier:k,idealEdgeLength:y,idealEdgeLengthType:m}=t.organicLayoutSettings;if(n(L)?u.organicLayoutSettings.computationBudgetTime=L:L!==void 0&&R.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),a(k)?u.organicLayoutSettings.repulsionRadiusMultiplier=k:k!==void 0&&R.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"),e==="GEOGRAPHIC"&&(y!==void 0||m!==void 0)&&(r(m)?u.organicLayoutSettings.idealEdgeLengthType=m:m!==void 0&&R.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),d(y)?u.organicLayoutSettings.idealEdgeLength=y:y!==void 0&&R.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),(e==="CHRONOLOGICAL_MULTIPLE"||e==="CHRONOLOGICAL_SINGLE")&&t.chronologicalLayoutSettings){const g=t.chronologicalLayoutSettings;g.durationLineWidth&&g.durationLineWidth<0&&R.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting")}return u}_convertLayoutSettingsToCalculationSettings(e){e.organicLayoutSettings??={};let t=e.organicLayoutSettings.idealEdgeLength;return e.organicLayoutSettings.idealEdgeLengthType===J.ABSOLUTE&&(t===void 0?t=-1:t*=-1),{computationBudgetTime:e.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:e.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}_createSublayer(e){return new B({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}};b([M()],f.prototype,"dataPreloadedInLocalCache",void 0),b([M()],f.prototype,"defaultLinkChartConfig",void 0),b([M()],f.prototype,"dataManager",void 0),b([M()],f.prototype,"inclusionModeDefinition",null),b([M()],f.prototype,"knowledgeGraph",void 0),b([M({type:Y.ofType(B),json:{write:{ignoreOrigin:!0}}})],f.prototype,"layers",void 0),b([M()],f.prototype,"entityLinkChartDiagramLookup",void 0),b([M()],f.prototype,"relationshipLinkChartDiagramLookup",void 0),b([M()],f.prototype,"linkChartExtent",void 0),b([M()],f.prototype,"memberEntityTypes",void 0),b([M()],f.prototype,"memberRelationshipTypes",void 0),b([M({type:["LinkChartLayer"]})],f.prototype,"operationalLayerType",void 0),b([M()],f.prototype,"sublayerIdsCache",void 0),b([M({type:Y.ofType(B),json:{write:{ignoreOrigin:!0}}})],f.prototype,"tables",void 0),b([M({json:{read:!1}})],f.prototype,"type",void 0),b([M({json:{read:!1}})],f.prototype,"chronologicalAuxiliaryGraphics",void 0),f=b([Ie("esri.layers.LinkChartLayer")],f);const Pa=f;export{Pa as default};
