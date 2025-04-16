import{bO as d,bP as f,bQ as g,bR as l,n as i,s as a,bS as u}from"./main-BL33V88t.js";import{g as h}from"./featureConversionUtils-Ck3qvDOC.js";import{o as m}from"./BoundsStore-DXCu_qEp.js";import{h as y}from"./timeSupport-BYEdQ93f.js";import{o as _}from"./optimizedFeatureQueryEngineAdapter-B_na_xtH.js";const c=d();class I{constructor(e){this.geometryInfo=e,this._boundsStore=new m,this._featuresById=new Map,this.events=new f,this.featureAdapter=_}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry!=null&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(this.fullBounds==null)return null;const[t,s,r,o]=this.fullBounds;return{xmin:t,ymin:s,xmax:r,ymax:o,spatialReference:y(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map(s=>this._upsert(s));return this._emitChanged(),t.filter(g)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const s=this._featuresById.get(t);s&&this._remove(s)}this._emitChanged()}forEachBounds(e,t){for(const s of e){const r=this._boundsStore.get(s.objectId);r&&t(l(c,r))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,s=>{t(this._featuresById.get(s))})}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(t==null)return void i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:e}));const s=this._featuresById.get(t);let r;if(s?(e.displayId=s.displayId,r=this._boundsStore.get(t),this._boundsStore.delete(t)):this.onFeatureAdd!=null&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);r=h(r??u(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),r!=null&&this._boundsStore.set(t,r),this._featuresById.set(t,e)}_upsert(e){const t=e?.objectId;if(t==null)return i.getLogger("esri.layers.graphics.data.FeatureStore").error(new a("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const s=this._featuresById.get(t);if(!s)return this._add(e),e;const{geometry:r,attributes:o}=e;for(const n in o)s.attributes[n]=o[n];return r&&(s.geometry=r,this._boundsStore.set(t,h(u(),r,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),s}_remove(e){this.onFeatureRemove!=null&&this.onFeatureRemove(e);const t=e.objectId;return this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{I as m};
