import{aa as _,fn as b,x as s,z as n,K as y,aL as w,aI as v,l as H,gr as E,e5 as S,g5 as x,T as I,b$ as O}from"./main-DeRV24Di.js";import{h as V}from"./UpdatingHandles-DXqHbR5O.js";import{h as m}from"./WorkerHandle-BIIFcIZa.js";import{t as p}from"./workerHelper-C2QrOo7z.js";import{f as A}from"./edgeProcessing-CoRF2AL3.js";import{V as R}from"./sphere-DSL4BLiT.js";import{b as L,n as D}from"./hitTestSelectUtils-C7VcKGnb.js";import{c as P}from"./RouteLayerInteraction-B3eU62fh.js";import{r as j}from"./VertexSnappingCandidate-hSBNOPHx.js";class B extends m{constructor(t){super("EdgeProcessingWorker","extract",{extract:r=>[r.dataBuffer],extractComponentsEdgeLocations:r=>[r.dataBuffer],extractEdgeLocations:r=>[r.dataBuffer]},t)}async process(t,r,i){return i?A(t):W(await this.invoke(new f(t),r))}async extractEdgeLocations(t,r){const i=await this.invokeMethod("extractEdgeLocations",new f(t),r);return p(i)}async extractComponentsEdgeLocations(t,r){const i=await this.invokeMethod("extractComponentsEdgeLocations",new f(t),r);return p(i)}}function W(e){return{regular:{instancesData:p(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:p(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}class f{constructor(t){this.dataBuffer=t.data.buffer,this.writerSettings=t.writerSettings,this.skipDeduplicate=t.skipDeduplicate,this.indices=_(t.indices)?t.indices.buffer:t.indices,this.indicesType=_(t.indices)?b(t.indices)?"Uint32Array":"Uint16Array":"Array",this.indicesLength=t.indicesLength}}let d=class extends w{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new z(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:i}=e,a=M;this.renderCoordsHelper.toRenderCoords(i,r.spatialReference,a);const h=e.distance,l=typeof h=="number"?h:h.distance,u=await this._workerHandle.invoke({bounds:R(a[0],a[1],a[2],l),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return u.candidates.sort((g,C)=>g.distance-C.distance),u.candidates.map(g=>this._convertCandidate(r,g))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new P({objectId:t.objectId,targetPoint:L(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new j({objectId:t.objectId,targetPoint:L(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=v();return this.renderCoordsHelper.fromRenderCoords(t,r,e),D(r)}async _fetchAllEdgeLocations(e,t){const r=[],i=[];for(const{id:a,uid:h}of e.components)this._ids.has(a)&&r.push((async()=>{const l=await this.fetchEdgeLocations(a,t.signal),u=l.locations.buffer;return i.push(u),{id:a,uid:h,objectIds:l.objectIds,locations:u,origin:l.origin,type:l.type}})());return{result:{components:(await Promise.all(r)).filter(({id:a})=>this._ids.has(a))},transferList:i}}};s([n({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),s([n({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),s([n({constructOnly:!0})],d.prototype,"schedule",void 0),s([n({readOnly:!0})],d.prototype,"availability",void 0),d=s([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],d);let z=class extends m{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}};const M=v();let o=class extends w{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new V,this._abortController=new AbortController}destroy(){this._tracker=H(this._tracker),this._abortController=E(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new B(k(t)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:k(t),fetchEdgeLocations:async(r,i)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,i)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([S(this._workerHandle),S(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=this._abortController?.signal,t=await this.getLayerView();t==null||x(e)||(this._tracker=t.trackSnappingSources({add:(r,i)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:i},e))},remove:r=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:r},e))}}))}};function k(e){return t=>e.immediate.schedule(t)}s([n({constructOnly:!0})],o.prototype,"getLayerView",void 0),s([n({constructOnly:!0})],o.prototype,"view",void 0),s([n({readOnly:!0})],o.prototype,"updating",null),s([n({readOnly:!0})],o.prototype,"availability",void 0),o=s([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],o);let c=class extends w{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map(i=>i.fetchCandidates(e,t)));return I(t),r.flat()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new o({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null).filter(O)}_getSceneLayerI3SSource(e,t){return new o({getLayerView:async()=>{const r=await e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r},view:e})}};s([n({constructOnly:!0})],c.prototype,"layerSource",void 0),s([n({constructOnly:!0})],c.prototype,"view",void 0),s([n({readOnly:!0})],c.prototype,"updating",null),s([n({readOnly:!0})],c.prototype,"availability",void 0),c=s([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],c);export{c as SceneLayerSnappingSource};
