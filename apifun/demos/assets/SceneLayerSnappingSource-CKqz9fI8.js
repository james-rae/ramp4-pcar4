import{ac as w,fq as b,B as o,D as s,N as y,aN as f,aK as L,l as H,gu as E,e8 as _,g6 as x,X as $,c2 as I}from"./main-CcTJZah4.js";import{h as O}from"./UpdatingHandles-CRkfwhGD.js";import{h as k}from"./WorkerHandle-Cd__kgBY.js";import{t as h}from"./workerHelper-9rOoWW1z.js";import{f as V}from"./edgeProcessing-DVPgn9zd.js";import{V as A}from"./sphere-B_OJFjwD.js";import{b as v,n as D}from"./hitTestSelectUtils-Cm4nfxhx.js";import{c as R}from"./RouteLayerInteraction-U2HDkN7Y.js";import{r as P}from"./VertexSnappingCandidate-CnnLBhAx.js";import"./preload-helper-ExcqyqRp.js";import"./workers-B-WWhFsm.js";import"./Queue-Bhp-js6j.js";import"./intl-DiBhrFNw.js";import"./InterleavedLayout-B2khWTjK.js";import"./BufferView-DZslrVDM.js";import"./vec2-maR1OrZI.js";import"./common-DQOJ18NT.js";import"./vec32-D4ob7-3U.js";import"./vec42-CKs01hkn.js";import"./types-D0PSWh4d.js";import"./vec2f64-DohEyf3f.js";import"./vec4f64-o2zAXfmz.js";import"./deduplicate-CD7rzKBH.js";import"./Indices-TRVfGyko.js";import"./VertexAttribute-Cq4MnHjR.js";import"./glUtil-BuljoYCz.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-CP3pxnA3.js";import"./mat4-I_M_KIEV.js";import"./mat3-CruJiiUv.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DJilfJKg.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./Cyclical-CZYqtx8C.js";import"./quantityUtils-CUqPTH-C.js";import"./projectVectorToVector-fvun3xW4.js";import"./projectBuffer-DwB7xYJN.js";import"./projectPointToVector-D6P7t9ma.js";import"./projection-nLxG4Uci.js";import"./geodesicUtils-BPvODm7Q.js";import"./TimeExtent-C9S2Kh-G.js";import"./Query-CotcSkQi.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";import"./MapView-BzwjjI_-.js";import"./CollectionFlattener-C3wIrk5j.js";import"./TileInfo-BSaKYsG9.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-2piyLhQV.js";import"./uuid-Cl5lrJ4c.js";import"./signal-CHZdDeRG.js";import"./Map-DgU7-KW8.js";import"./Basemap-ZtwLtrEj.js";import"./loadAll-CKcCjm1o.js";import"./PortalItem-DtQGXcdD.js";import"./writeUtils-DMWpEYvj.js";import"./mat4f32-DcsiF_Rp.js";import"./TablesMixin-BCRXHVdJ.js";import"./Layer-BTj8V0Sm.js";import"./GraphicsCollection-CSS9ISBf.js";import"./HeightModelInfo-C4kqNqDg.js";import"./timeZoneUtils-ZVFmM1ie.js";import"./ReactiveMap-C0hf8mXz.js";import"./HighlightDefaults-DzS__Pad.js";import"./ViewingMode-HRfKv6NR.js";import"./Tile-CX8RR_ob.js";import"./TileKey-DSJnkexI.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-Bg7D-T7i.js";import"./normalizeUtilsCommon-DsrTeGXA.js";import"./utils-38kRF6MD.js";import"./utils-C0gkSWhl.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-EGVPE_qU.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CPtb4TQS.js";import"./Texture-CAz7g1Ei.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-D2KqOp3F.js";import"./capabilities-Du2wdNlQ.js";import"./Version-D4DaVQR7.js";import"./ColorBackground-DPQ8rOwB.js";import"./elevationInfoUtils-P3gCYznn.js";import"./ElevationInfo-Bz-jcguF.js";import"./lengthUtils-CCWuB1s4.js";import"./GraphicsLayer-yDHLDjiJ.js";import"./BlendLayer-BnJD7T_l.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-D8kEhXrY.js";import"./parser-Rrcba7UU.js";import"./ScaleRangeLayer-DRGr6lxT.js";import"./Stop-bbsY_0sI.js";import"./networkEnums-BDKq7eff.js";import"./PointSnappingHint-DGnsSAG7.js";class B extends k{constructor(e){super("EdgeProcessingWorker","extract",{extract:r=>[r.dataBuffer],extractComponentsEdgeLocations:r=>[r.dataBuffer],extractEdgeLocations:r=>[r.dataBuffer]},e)}async process(e,r,i){return i?V(e):j(await this.invoke(new g(e),r))}async extractEdgeLocations(e,r){const i=await this.invokeMethod("extractEdgeLocations",new g(e),r);return h(i)}async extractComponentsEdgeLocations(e,r){const i=await this.invokeMethod("extractComponentsEdgeLocations",new g(e),r);return h(i)}}function j(t){return{regular:{instancesData:h(t.regular.instancesData),lodInfo:{lengths:new Float32Array(t.regular.lodInfo.lengths)}},silhouette:{instancesData:h(t.silhouette.instancesData),lodInfo:{lengths:new Float32Array(t.silhouette.lodInfo.lengths)}},averageEdgeLength:t.averageEdgeLength}}class g{constructor(e){this.dataBuffer=e.data.buffer,this.writerSettings=e.writerSettings,this.skipDeduplicate=e.skipDeduplicate,this.indices=w(e.indices)?e.indices.buffer:e.indices,this.indicesType=w(e.indices)?b(e.indices)?"Uint32Array":"Uint16Array":"Array",this.indicesLength=e.indicesLength}}let d=class extends f{constructor(t){super(t),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new W(this.schedule,{fetchAllEdgeLocations:(t,e)=>this._fetchAllEdgeLocations(t,e)})}async fetchCandidates(t,e){const r=t.coordinateHelper,{point:i}=t,n=M;this.renderCoordsHelper.toRenderCoords(i,r.spatialReference,n);const l=t.distance,c=typeof l=="number"?l:l.distance,m=await this._workerHandle.invoke({bounds:A(n[0],n[1],n[2],c),returnEdge:t.returnEdge,returnVertex:t.vertexMode!=="none"},e);return m.candidates.sort((u,C)=>u.distance-C.distance),m.candidates.map(u=>this._convertCandidate(r,u))}async add(t,e){this._ids.add(t.id),await this._workerHandle.invokeMethod("add",t,e)}async remove(t,e){this._ids.delete(t.id),await this._workerHandle.invokeMethod("remove",t,e)}_convertCandidate(t,e){switch(e.type){case"edge":return new R({objectId:e.objectId,targetPoint:v(this._convertRenderCoordinate(t,e.target)),edgeStart:this._convertRenderCoordinate(t,e.start),edgeEnd:this._convertRenderCoordinate(t,e.end),isDraped:!1});case"vertex":return new P({objectId:e.objectId,targetPoint:v(this._convertRenderCoordinate(t,e.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:t},e){const r=L();return this.renderCoordsHelper.fromRenderCoords(e,r,t),D(r)}async _fetchAllEdgeLocations(t,e){const r=[],i=[];for(const{id:n,uid:l}of t.components)this._ids.has(n)&&r.push((async()=>{const c=await this.fetchEdgeLocations(n,e.signal),m=c.locations.buffer;return i.push(m),{id:n,uid:l,objectIds:c.objectIds,locations:m,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(r)).filter(({id:n})=>this._ids.has(n))},transferList:i}}};o([s({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),o([s({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),o([s({constructOnly:!0})],d.prototype,"schedule",void 0),o([s({readOnly:!0})],d.prototype,"availability",void 0),d=o([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],d);let W=class extends k{constructor(e,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:r})}};const M=L();let a=class extends f{get updating(){return this._updatingHandles.updating}constructor(t){super(t),this.availability=1,this._updatingHandles=new O,this._abortController=new AbortController}destroy(){this._tracker=H(this._tracker),this._abortController=E(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:t}=this,e=t.resourceController;this._edgeWorker=new B(S(e)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:S(e),fetchEdgeLocations:async(r,i)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,i)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([_(this._workerHandle),_(this._edgeWorker)])}async fetchCandidates(t,e){return this._workerHandle.fetchCandidates(t,e)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const t=this._abortController?.signal,e=await this.getLayerView();e==null||x(t)||(this._tracker=e.trackSnappingSources({add:(r,i)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:i},t))},remove:r=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:r},t))}}))}};function S(t){return e=>t.immediate.schedule(e)}o([s({constructOnly:!0})],a.prototype,"getLayerView",void 0),o([s({constructOnly:!0})],a.prototype,"view",void 0),o([s({readOnly:!0})],a.prototype,"updating",null),o([s({readOnly:!0})],a.prototype,"availability",void 0),a=o([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],a);let p=class extends f{get updating(){return this._i3sSources.some(t=>t.updating)}constructor(t){super(t),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(t=>t.destroy()),this._i3sSources.length=0}initialize(){const{view:t}=this,e=this.layerSource.layer;this._i3sSources=e.type==="building-scene"?this._getBuildingSceneI3SSources(t,e):[this._getSceneLayerI3SSource(t,e)]}async fetchCandidates(t,e){const r=await Promise.all(this._i3sSources.map(i=>i.fetchCandidates(t,e)));return $(e),r.flat()}refresh(){this._i3sSources.forEach(t=>t.refresh())}_getBuildingSceneI3SSources(t,e){return e.allSublayers.toArray().map(r=>r.type==="building-component"?new a({getLayerView:async()=>(await t.whenLayerView(e)).whenSublayerView(r),view:t}):null).filter(I)}_getSceneLayerI3SSource(t,e){return new a({getLayerView:async()=>{const r=await t.whenLayerView(e);return r.type==="scene-layer-graphics-3d"?void 0:r},view:t})}};o([s({constructOnly:!0})],p.prototype,"layerSource",void 0),o([s({constructOnly:!0})],p.prototype,"view",void 0),o([s({readOnly:!0})],p.prototype,"updating",null),o([s({readOnly:!0})],p.prototype,"availability",void 0),p=o([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],p);export{p as SceneLayerSnappingSource};
