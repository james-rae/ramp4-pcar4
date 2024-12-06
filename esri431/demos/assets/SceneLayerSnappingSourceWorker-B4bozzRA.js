import { he as q, ee as p, e1 as u, bT as r, bV as a$1, ap as n$1, J as s, dZ as t$1 } from './main-jdFDoOPu.js';
import { v, b as b$1, j as j$1 } from './lineSegment-mPW8N6M_.js';
import { E, U, i as it } from './sphere-CvWAdV_f.js';
import { Y } from './Octree-BExqX1cV.js';
import { m } from './edgeProcessing-d93lClLJ.js';
import './preload-helper-dJJaZANz.js';
import './plane-CBOt8dOS.js';
import './mat3f64-DKAwfC1r.js';
import './mat4f64-Cw8nJbLB.js';
import './quatf64-CvJnKmwc.js';
import './Util-BoF0V3b-.js';
import './deduplicate-BedirgWR.js';
import './Indices-Bo7FLkhm.js';
import './InterleavedLayout-RshuL9Ca.js';
import './BufferView-BjlYh8fP.js';
import './types-E8ca035p.js';
import './VertexAttribute-BxkhPj4z.js';
import './glUtil-DOHFqFFb.js';
import './VertexElementDescriptor-HfVzOf0q.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=1e3;function a(t,a,e){const m=E(),p$1=U(m);return q(p$1,p$1,t,.5),q(p$1,p$1,a,.5),m[3]=p(p$1,t),u(p$1,p$1,e),m}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class{constructor(){this._idToComponent=new Map,this._components=new Y((e=>e.bounds)),this._edges=new Y((e=>e.bounds)),this._tmpLineSegment=v(),this._tmpP1=n$1(),this._tmpP2=n$1(),this._tmpP3=n$1(),this.remoteClient=null;}async fetchCandidates(e,o){await Promise.resolve(),s(o),await this._ensureEdgeLocations(e,o);const s$1=[];return this._edges.forEachNeighbor((t$1=>(this._addCandidates(e,t$1,s$1),s$1.length<t)),e.bounds),{result:{candidates:s$1}}}async _ensureEdgeLocations(e,t){const o=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:s}=e;o.push({id:t,uid:s});}return !0}),e.bounds),!o.length)return;const s={components:o},n=await this.remoteClient.invoke("fetchAllEdgeLocations",s,t??{});for(const i of n.components)this._setFetchEdgeLocations(i);}async add(e){const t=new j(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((o=>(o.component===t&&e.push(o),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id);}return {result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const o=m.createView(e.locations),s=new Array(o.count),n=n$1(),r=n$1();for(let i=0;i<o.count;i++){o.position0.getVec(i,n),o.position1.getVec(i,r);const c=a(n,r,e.origin),d=new w(t,i,c);s[i]=d;}this._edges.add(s);const{objectIds:c,origin:d}=e;t.info={locations:o,objectIds:c,origin:d};}_addCandidates(e,t,o){const{info:n}=t.component,{origin:i,objectIds:r}=n,c=n.locations,d=c.position0.getVec(t.index,this._tmpP1),a=c.position1.getVec(t.index,this._tmpP2);u(d,d,i),u(a,a,i);const p=r[c.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,d,a,o),b(e,p,d,o),b(e,p,a,o);}_addEdgeCandidate(e,t,o,s,i){if(!e.returnEdge)return;const c=U(e.bounds),u=b$1(o,s,this._tmpLineSegment),h=j$1(u,c,this._tmpP3);it(e.bounds,h)&&i.push({type:"edge",objectId:t,target:t$1(h),distance:p(c,h),start:t$1(o),end:t$1(s)});}};f=r([a$1("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const _=f;function b(e,t,o,s){if(!e.returnVertex||!it(e.bounds,o))return;const i=U(e.bounds);s.push({type:"vertex",objectId:t,target:t$1(o),distance:p(i,o)});}class j{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++j.uid;}}j.uid=0;class w{constructor(e,t,o){this.component=e,this.index=t,this.bounds=o;}}

export { _ as default };
