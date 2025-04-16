import{aL as b,T as p,aM as c,de as h,aO as V,bA as F,x as r,z as o,K as E,bB as D}from"./main-DTtQVgOw.js";import{t as C}from"./memoize-DZv29EwT.js";import{y as A}from"./elevationInfoUtils-CV74d8v4.js";import{y as I}from"./hitTestSelectUtils-BgQh8Y0d.js";import{o as x,i as z}from"./queryEngineUtils-BeVstSsX.js";import{i as d,r as G,n as v}from"./symbologySnappingCandidates-BpuCW1IR.js";let n=class extends b{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return d();const a=async(l,s)=>(await D(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(l,s);return d(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:a})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,a)=>{const l=await e.whenLayerView(t);return p(a),l.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},a)}):v()}get _layerView(){const{view:e}=this;if(e==null)return null;const{layer:t}=this.layerSource;return e.allLayerViews.find(i=>i.layer===t)}get _layerView3D(){const{view:e}=this;return e==null||e.type==="2d"?null:this._layerView}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:a}=t;A(i,a)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>this._layerView3D!=null?this._layerView3D.layer?.renderer:null,()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),V(()=>this._layerView3D?.layer,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=C(z)}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,a=i.source;if(!a?.querySnapping)return[];const l=i.createQuery();this._layerView&&"effectiveDisplayFilter"in this._layerView&&(l.where=F(l.where,this._layerView.effectiveDisplayFilter?.where));const s=I(e,this.view?.type??"2d",l),w=await a.querySnapping(s,{signal:t});p(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(w.candidates,u,t);p(t);const g=await this._symbologySnappingFetcher.fetch(y,t);p(t);const S=g.length===0?y:[...y,...g],f=this._snappingElevationFilter.filter(s,S),_=this._memoizedMakeGetGroundElevation(this.view,u);return f.map(m=>x(m,_))}};r([o({constructOnly:!0})],n.prototype,"layerSource",void 0),r([o({constructOnly:!0})],n.prototype,"view",void 0),r([o()],n.prototype,"_snappingElevationAligner",null),r([o()],n.prototype,"_snappingElevationFilter",null),r([o()],n.prototype,"_symbologySnappingFetcher",null),r([o()],n.prototype,"_layerView",null),r([o()],n.prototype,"_layerView3D",null),r([o()],n.prototype,"_symbologySnappingSupported",null),n=r([E("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],n);export{n as FeatureCollectionSnappingSource};
