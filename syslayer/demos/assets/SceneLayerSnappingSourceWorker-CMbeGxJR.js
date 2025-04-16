import{B as L,N as v,aK as p,X as y,cL as m}from"./main-D_jCcUNd.js";import{q as l,p as _,u as h}from"./vec32-CQFqDiXA.js";import{v as x,b as $,j}from"./lineSegment-B5fpbkLu.js";import{E as P,U as f,i as C}from"./sphere-BznZRj-C.js";import{b}from"./Octree-vx8eQxm3.js";import{m as S}from"./edgeProcessing-gYbtgof9.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./plane-DMcb58KL.js";import"./vec42-CKs01hkn.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-DohEyf3f.js";import"./vec4f64-o2zAXfmz.js";import"./mat4-CiVQetHb.js";import"./mat3-CruJiiUv.js";import"./InterleavedLayout-CKyd0f5p.js";import"./BufferView-8Ead2OQr.js";import"./vec2-maR1OrZI.js";import"./types-D0PSWh4d.js";import"./deduplicate-DRGqT5BM.js";import"./Indices-Dr18ipVB.js";import"./VertexAttribute-Cq4MnHjR.js";import"./glUtil-BuljoYCz.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-CZhsOHpq.js";const I=1e3;function V(t,o,i){const n=P(),e=f(n);return l(e,e,t,.5),l(e,e,o,.5),n[3]=_(e,t),h(e,e,i),n}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=x(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),y(o),await this._ensureEdgeLocations(t,o);const i=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(t,n,i),i.length<I),t.bounds),{result:{candidates:i}}}async _ensureEdgeLocations(t,o){const i=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;i.push({id:c,uid:r})}return!0},t.bounds),!i.length)return;const n={components:i},e=await this.remoteClient.invoke("fetchAllEdgeLocations",n,o??{});for(const s of e.components)this._setFetchEdgeLocations(s)}async add(t){const o=new u(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const i=[];this._edges.forEachNeighbor(n=>(n.component===o&&i.push(n),!0),o.bounds),this._edges.remove(i),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const i=S.createView(t.locations),n=new Array(i.count),e=p(),s=p();for(let d=0;d<i.count;d++){i.position0.getVec(d,e),i.position1.getVec(d,s);const a=V(e,s,t.origin),E=new T(o,d,a);n[d]=E}this._edges.add(n);const{objectIds:c,origin:r}=t;o.info={locations:i,objectIds:c,origin:r}}_addCandidates(t,o,i){const{info:n}=o.component,{origin:e,objectIds:s}=n,c=n.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,e),h(d,d,e);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,i),w(t,a,r,i),w(t,a,d,i)}_addEdgeCandidate(t,o,i,n,e){if(!t.returnEdge)return;const s=f(t.bounds),c=$(i,n,this._tmpLineSegment),r=j(c,s,this._tmpP3);C(t.bounds,r)&&e.push({type:"edge",objectId:o,target:m(r),distance:_(s,r),start:m(i),end:m(n)})}};g=L([v("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const dt=g;function w(t,o,i,n){if(!t.returnVertex||!C(t.bounds,i))return;const e=f(t.bounds);n.push({type:"vertex",objectId:o,target:m(i),distance:_(e,i)})}class u{constructor(o,i){this.id=o,this.bounds=i,this.info=null,this.uid=++u.uid}}u.uid=0;class T{constructor(o,i,n){this.component=o,this.index=i,this.bounds=n}}export{dt as default};
