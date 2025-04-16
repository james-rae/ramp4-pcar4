import{cL as D,aK as L,dz as P,h$ as G}from"./main-D_jCcUNd.js";import{y as z,i as J}from"./memoryEstimations-CE0MHqcd.js";import{n as B}from"./mat4-CiVQetHb.js";import{e as H,o as V}from"./mat4f64-Dk4dwAN8.js";import{u as j,E as $,g as R,r as X,s as E,A as K}from"./vec32-CQFqDiXA.js";import{z as Q}from"./vec42-CKs01hkn.js";import{n as k}from"./vec4f64-o2zAXfmz.js";import{b as p,S as q,v as T}from"./sphere-BznZRj-C.js";import{l as S}from"./ViewingMode-HRfKv6NR.js";import{s as F,e as w,i as f}from"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-L_n7myzv.js";import{b as Y,d as I}from"./Geometry-Bw9QQWO0.js";import{e as Z}from"./VertexAttribute-Cq4MnHjR.js";class tt{constructor(t,r,e){this.object=t,this.geometryId=r,this.triangleNr=e}}class rt extends tt{constructor(t,r,e,s){super(t,r,e),this.center=s!=null?D(s):null}}class et{constructor(t){this.layerUid=t}}let st=class extends et{constructor(t,r){super(t),this.graphicUid=r}};function U(n){return n?.dist!=null}const M=1e-5;class it{constructor(t){this.options=new F,this._results=new nt,this.transform=new Y,this.tolerance=M,this.verticalOffset=null,this._ray=p(),this._rayEnd=L(),this._rayBeginTransformed=L(),this._rayEndTransformed=L(),this.viewingMode=t??S.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,r,e){this.resetWithRay(q(t,r,this._ray),e)}resetWithRay(t,r){this.camera=r,t!==this._ray&&T(t,this._ray),this.options.verticalOffset!==0?this.viewingMode===S.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,j(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(t=null,r,e,s,i){this.point=r,this.filterPredicate=s,this.tolerance=e??M;const a=I(this.verticalOffset);if(t&&t.length>0){const o=i?h=>{i(h)&&this.intersectObject(h)}:h=>{this.intersectObject(h)};for(const h of t){const l=h.getSpatialQueryAccelerator?.();l!=null?(a!=null?l.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,o,a):l.forEachAlongRay(this._ray.origin,this._ray.direction,o),this.options.selectionMode&&this.options.hud&&l.forEachDegenerateObject(o)):h.objects.forAll(u=>o(u))}}this.sortResults()}intersectObject(t){const r=t.geometries;if(!r)return;const e=t.effectiveTransformation,s=I(this.verticalOffset);for(const i of r){if(!i.visible)continue;const{material:a,id:o}=i;if(!a.visible)continue;this.transform.setAndInvalidateLazyTransforms(e,i.transformation),$(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),$(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const h=this.transform.transform;s!=null&&(s.objectTransform=this.transform),a.intersect(i,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(l,u,d,y,g,b)=>{if(l>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,l))return;const c=y?this._results.hud:this._results,x=y?m=>{const W=new rt(t,o,d,b);m.set(f.HUD,W,l,u,V,g)}:m=>m.set(f.OBJECT,{object:t,geometryId:o,triangleNr:d},l,u,h,g);if((c.min.drapedLayerOrder==null||g>=c.min.drapedLayerOrder)&&(c.min.dist==null||l<c.min.dist)&&x(c.min),this.options.store!==w.MIN&&(c.max.drapedLayerOrder==null||g<c.max.drapedLayerOrder)&&(c.max.dist==null||l>c.max.dist)&&x(c.max),this.options.store===w.ALL)if(y){const m=new A(this._ray);x(m),this._results.hud.all.push(m)}else{const m=new O(this._ray);x(m),this._results.all.push(m)}}})}}sortResults(t=this._results.all){t.sort((r,e)=>r.dist!==e.dist?(r.dist??0)-(e.dist??0):r.drapedLayerOrder!==e.drapedLayerOrder?N(r.drapedLayerOrder,e.drapedLayerOrder):N(r.drapedLayerGraphicOrder,e.drapedLayerGraphicOrder))}}function N(n,t){return(t??-Number.MAX_VALUE)-(n??-Number.MAX_VALUE)}function Et(n){return new it(n)}class nt{constructor(){this.min=new O(p()),this.max=new O(p()),this.hud={min:new A(p()),max:new A(p()),all:new Array},this.ground=new O(p()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}class O{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(R(v,this.ray.direction,this.dist),X(v)):null}withinDistance(t){return!!U(this)&&this.distanceInRenderSpace<=t}getIntersectionPoint(t){return!!U(this)&&(R(v,this.ray.direction,this.dist),j(t,this.ray.origin,v),!0)}getTransformedNormal(t){return E(_,this.normal),_[3]=0,Q(_,_,this.transformation),E(t,_),K(t,t)}constructor(t){this.intersector=f.OBJECT,this.normal=L(),this.transformation=H(),this._ray=p(),this.init(t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=f.OBJECT,T(t,this._ray)}set(t,r,e,s,i,a,o){this.intersector=t,this.dist=e,E(this.normal,s??P),B(this.transformation,i??V),this.target=r,this.drapedLayerOrder=a,this.drapedLayerGraphicOrder=o}copy(t){T(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,E(this.normal,t.normal),B(this.transformation,t.transformation)}}class A extends O{constructor(){super(...arguments),this.intersector=f.HUD}}function at(n){return new O(n)}const v=L(),_=k();class ot extends st{constructor(t,r,e,s,i){super(t,r),this.layerUid=t,this.graphicUid=r,this.triangleNr=e,this.baseBoundingSphere=s,this.numLodLevels=i}}class ht{constructor(t,r,e,s){this.material=t,this.bufferWriter=t.createBufferWriter(),this.vertexBufferLayout=this.bufferWriter.vertexBufferLayout,this.buffer=r,this.elementCount=e,this.boundingInfo=s}get numTriangles(){return this.elementCount/3}get numVertices(){return this.elementCount}computeUsedMemory(){return this.buffer.byteLength+z}getRenderGeometry(){return this}intersect(t,r,e,s,i,a,o,h){const l=this.bufferWriter,u=this.buffer;l.intersect(u,t,e,s,(d,y,g,b,c)=>C(d,y,g,c,t,r,a,o,i,h))}}class vt{constructor(t){this.engineGeometry=t}get material(){return this.engineGeometry.material}get numVertices(){return this.engineGeometry.attributes.get(Z.POSITION).indices.length}get numTriangles(){return this.engineGeometry.indexCount/3}get boundingInfo(){return this.engineGeometry.boundingInfo}computeUsedMemory(){return Array.from(this.engineGeometry.attributes.values()).reduce((t,r)=>t+J(r.data,r.indices),0)}getRenderGeometry(){const t=this.material,r=this.engineGeometry,e=r.attributes,s=r.boundingInfo,i=t.createBufferWriter(),a=i.vertexBufferLayout,o=i.elementCount(e),h=a.createBuffer(o);return i.write(null,null,e,null,h,0),new ht(t,h.buffer,o,s)}intersect(t,r,e,s,i,a,o,h){const l=this.engineGeometry;this.material.intersect(l,t.transform.transform,t,e,s,(u,d,y,g,b)=>C(u,d,y,b,t,r,a,o,i,h))}}function C(n,t,r,e,s,i,a,o,h,l){if(n<0||i&&!i(s.rayBegin,s.rayEnd,n))return;const u=new ot(a.layerUid,a.graphicUid(h),r,o,l);if((s.results.min.drapedLayerOrder==null||e>=s.results.min.drapedLayerOrder)&&(s.results.min.dist==null||n<s.results.min.dist)&&s.results.min.set(f.LOD,u,n,t,s.transform.transform,e),s.options.store!==w.MIN&&(s.results.max.drapedLayerOrder==null||e>=s.results.max.drapedLayerOrder)&&(s.results.max.dist==null||n>s.results.max.dist)&&s.results.max.set(f.LOD,u,n,t,s.transform.transform,e),s.options.store===w.ALL){const d=at(s.results.min.ray);d.set(f.LOD,u,n,t,s.transform.transform,e),s.results.all.push(d)}}class Gt{constructor(t,r=null){this.geometry=t,this.textures=r}get material(){return this.geometry.material}get numTriangles(){return this.geometry.numTriangles}}class wt{constructor(t,r,e){this.components=t,this.minScreenSpaceRadius=r,this.pivotOffset=e;const s=G(this.components.map(i=>i.geometry));this.numVertices=s.reduce((i,a)=>i+a.numVertices,0)}}class Tt{constructor(t){this.levels=t,this.levels.sort((r,e)=>r.minScreenSpaceRadius===e.minScreenSpaceRadius?r.numVertices-e.numVertices:r.minScreenSpaceRadius-e.minScreenSpaceRadius)}getMaterials(){const t=[];return this.levels.forEach(r=>r.components.forEach(e=>t.push(e.geometry.material))),G(t)}getTextures(){const t=new Array;return this.levels.forEach(r=>r.components.forEach(e=>{e.textures!=null&&t.push(...e.textures)})),G(t)}getGeometries(){const t=new Array;return this.levels.forEach(r=>r.components.forEach(e=>{t.push(e.geometry)})),G(t)}getEngineGeometries(){return this.getGeometries().map(t=>t.engineGeometry).filter(t=>t!=null)}computeUsedMemory(){const t=this.getGeometries(),r=this.getTextures(),e=t.reduce((s,i)=>s+i.computeUsedMemory(),0);return r.reduce((s,i)=>s+i.memoryEstimate,0)+e}}export{Et as T,vt as a,wt as f,Tt as h,Gt as l,ht as m};
