import{x as u,z as h,K as C,aL as I,fM as b,aM as F,dl as H,bA as T,fN as x,aY as N,n as D,fO as k,e5 as U,aH as $,b_ as K,ea as Q,T as R,bj as X,bg as Y,aI as O}from"./main-DTtQVgOw.js";import{b as E}from"./vec2-BnynUbeJ.js";import{v as q,s as B}from"./vec32-E5gJqT0h.js";import{e as J}from"./common-CYWrYyJl.js";import{h as W}from"./UpdatingHandles-BcSpm-kR.js";import{j as V}from"./elevationInfoUtils-CV74d8v4.js";import{h as j,i as P,E as Z,N as z,s as m,b as ee,j as te,k as re}from"./hitTestSelectUtils-BgQh8Y0d.js";import _ from"./FeatureFilter-DUrNT3PE.js";import{o as ae}from"./floorFilterUtils-4r-vVdzs.js";import{i as ie}from"./layerViewUtils-DmnqGlP8.js";import{d as ne,o as se,s as A,n as oe,c as le,b as ue}from"./RouteLayerInteraction-D4AHYnl7.js";let y=class extends I{set attributeRulesEnabled(e){this._set("attributeRulesEnabled",e),e&&this.loadRules()}get layerView(){return this.view?.allLayerViews?.find(e=>e.layer===this.layer)}get valid(){const{_valid:e,snappingSource:t,layer:r}=this;return!(!t||!r)&&e}get subtypeFilter(){const{layer:e,snappingSource:t}=this;if(!b(e)||!e.subtypes?.length||!t)return{mode:"not-in-use",filter:null};const r=t.layerSource.sublayerSources.filter(i=>i.enabled&&i.layer.visible&&ie(this.view?.scale,i.layer.effectiveScaleRange.minScale,i.layer.effectiveScaleRange.maxScale)).map(i=>i.layer.subtypeCode);if(!r.length)return{mode:"none-visible",filter:null};if(r.length===e.subtypes.length)return{mode:"all-visible",filter:null};const a=e.fieldsIndex.get(e.subtypeField)?.name??e.subtypeField;return r.length===1?{mode:"in-use",filter:`${a} = ${r.getItemAt(0)}`}:{mode:"in-use",filter:`${a} IN (${r.join(", ")})`}}get floorFilter(){const{view:e,layer:t}=this;return e&&t?ae({view:e,layer:t}):null}constructor(e){super(e),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);const{layer:e,snappingSource:t}=this;if("refresh"in e){const r=e;this.addHandles(r.on("refresh",()=>t.refresh()))}this.loadRules(),this.addHandles([F(()=>t.updating,r=>t.layerSource.updating=r,H),F(()=>t.availability,r=>t.layerSource.availability=r,H)])}getFetchCandidatesParameters(e,t,r){if(!this.valid)return[];const{layer:a,layerView:i,floorFilter:o,rulesTable:l,subtypeFilter:n}=this,s={distance:r,mode:this.view?.type??"2d",point:e,coordinateHelper:t.coordinateHelper,...ce(),filter:i&&"filter"in i?i.filter:null};if(o&&(s.filter=L(s.filter,o)),n.mode!=="not-in-use"&&n.mode!=="all-visible"){if(n.mode==="none-visible")return[];s.filter?s.filter.where=T(s.filter.where,n.mode):s.filter=new _({where:n.filter})}if(!this.attributeRulesEnabled)return[s];const d=t.feature,p=d?.sourceLayer?.type==="subtype-sublayer"?d.sourceLayer.parent:d?.sourceLayer;if(l&&d&&j(this.view?.map)&&(x(a)||b(a))&&(x(p)||b(p))&&this.view.map.utilityNetworks?.find(c=>c.isUtilityLayer(p))){if(l.loadStatus!=="loaded")return[];const c=[],w=a.layerId,S=l.getFeatureSQL(p,d)?.[w];if(!S)return[];const f=S.anyVertex;let v=S.endVertex;return v&&f&&v===f&&(v=""),v&&c.push({...s,returnEdge:!1,vertexMode:"ends",filter:L(s.filter,v)}),f&&c.push({...s,returnEdge:N("snapping-include-edges-when-applying-any-vertex-rule")??!1,vertexMode:"all",filter:L(s.filter,f)}),c}return[s]}async loadRules(){this._valid=null;const{layer:e,view:t,attributeRulesEnabled:r}=this;if(r&&e&&t&&j(t?.map)&&(x(e)||b(e)))try{await Promise.allSettled(t.map.utilityNetworks?.map(i=>i.load())??[]);const a=t.map.utilityNetworks?.find(i=>i.isUtilityLayer(e));a&&(this.rulesTable=await a.getRulesTable(),await this.rulesTable?.load())}catch{return this._valid=!1,void D.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",e.title)}this._valid=!0}remove(){this.destroy()}destroy(){this.snappingSource?.destroy()}};function ce(){return{returnEdge:!0,vertexMode:"all"}}function L(e,t){return e==null?new _({where:t}):e.where?new _({where:T(e.where,t)}):new _({where:t})}u([h({constructOnly:!0})],y.prototype,"layer",void 0),u([h({constructOnly:!0})],y.prototype,"snappingSource",void 0),u([h({constructOnly:!0})],y.prototype,"view",void 0),u([h({value:!1})],y.prototype,"attributeRulesEnabled",null),u([h()],y.prototype,"layerView",null),u([h()],y.prototype,"rulesTable",void 0),u([h()],y.prototype,"valid",null),u([h()],y.prototype,"subtypeFilter",null),u([h()],y.prototype,"floorFilter",null),u([h()],y.prototype,"_valid",void 0),y=u([C("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],y);let g=class extends I{get updating(){return this._snappingSources.some(e=>e?.valid==null||e.valid===!0&&e.snappingSource?.updating===!0)||this._updatingHandles.updating}constructor(e){super(e),this.options=null,this._domain=P.FEATURE,this._updatingHandles=new W,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){const e=k(()=>this.options?._effectiveFeatureSources,(t,r)=>this._createSourceInfo(t,r));this._snappingSources=e,this.addHandles([U(e),F(()=>({rulesEnabled:!!this.options?.attributeRulesEnabled,sources:this._snappingSources.filter(K)}),({rulesEnabled:t,sources:r})=>{for(const a of r)a.attributeRulesEnabled=t},$)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}async fetchCandidates(e,t,r,a){if(!(t&this._domain&&this.options!=null&&this.options.effectiveFeatureEnabled))return[];const i=[],o=this._computeScreenSizeDistanceParameters(e,r);for(const n of this._snappingSources){if(!n?.valid||!n.snappingSource?.layerSource?.enabled||n.layerView?.suspended)continue;const s=n.getFetchCandidatesParameters(e,r,o);for(const d of s)i.push(n.snappingSource.fetchCandidates(d,a).then(p=>p.filter(c=>!this._candidateIsExcluded(n.snappingSource,c,r.excludeFeature))))}const l=(await Q(i)).flat();return this._addRightAngleCandidates(l,e,o,r),R(a),Z(e,l),l}_addRightAngleCandidates(e,t,r,a){const i=a.vertexHandle!=null?a.vertexHandle.rightEdge?.rightVertex?.pos:a.editGeometryOperations!=null&&a.editGeometryOperations.data.type==="polygon"?a.editGeometryOperations.data.components[0]?.getFirstVertex()?.pos:null,o=a.vertexHandle!=null?a.vertexHandle.leftEdge?.leftVertex?.pos:a.editGeometryOperations!=null?a.editGeometryOperations.data.components[0]?.getLastVertex()?.pos:null,{view:l}=this,n=z(i,l,a),s=z(o,l,a),d=e.length;for(let p=0;p<d;p++)this._addRightAngleCandidate(e[p],s,t,r,e),this._addRightAngleCandidate(e[p],n,t,r,e)}_addRightAngleCandidate(e,t,r,a,i){if(t==null||!de(e))return;const o=e.constraint.closestTo(t),l=(o[0]-r[0])/a.x,n=(o[1]-r[1])/a.y,{start:s,end:d}=e.constraint;if(l*l+n*n<=1){const p=E(m(o),m(s))>E(m(o),m(d))?s:d,c=new ne({targetPoint:ee(o),otherVertex:t,otherVertexType:se.NEXT,previousVertex:p,constraint:new te(t,o),objectId:e.objectId,isDraped:e.isDraped,domain:P.FEATURE});i.push(c)}}_computeScreenSizeDistanceParameters(e,t){let r=this.options!=null?this.options.distance*(t.pointer==="touch"?this.options.touchSensitivityMultiplier:1):0;return this.view==null?{x:r,y:r,z:r,distance:r}:this.view.type==="2d"?(r*=this.view.resolution,{x:r,y:r,z:r,distance:r}):this._computeScreenSizeDistanceParameters3D(e,r,this.view,t)}_computeScreenSizeDistanceParameters3D(e,t,r,a){const{spatialReference:i}=a;r.renderCoordsHelper.toRenderCoords(e,i,G);const o=r.state.camera.computeScreenPixelSizeAt(G),l=o*r.renderCoordsHelper.unitInMeters,n=l/X(i),s=l/Y(i),d=t*n,p=t*s,c=A(e,i,V,r),w=c?M(c,e,n,0,0,r,a):0,S=c?M(c,e,0,n,0,r,a):0,f=c?M(c,e,0,0,s,r,a):0;return{x:w===0?0:d/w,y:S===0?0:d/S,z:f===0?0:p/f,distance:o*t}}_candidateIsExcluded(e,t,r){if(r==null)return!1;const a=this._getCandidateObjectId(t);if(a==null)return!1;const i=e.layerSource.layer;return i.type==="graphics"?r.uid===a:r.sourceLayer===i&&!(!r.attributes||!("objectIdField"in i))&&r.attributes[i.objectIdField]===a}_getCandidateObjectId(e){return e instanceof oe?e.objectId:null}async _createSourceInfo(e,t){const r=e.layer;r.loaded||(await r.load(),R(t));const{view:a}=this,i=await this._createFeatureSnappingSourceType(e);return R(t),new y(i==null?{}:{snappingSource:i,view:a,layer:r})}async _createFeatureSnappingSourceType(e){switch(e.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(e);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(e);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(e);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(e)}return null}async _createFeatureSnappingSourceSceneLayer(e){const{view:t}=this;return t==null||t.type!=="3d"?null:new(await this._getSourceModule("scene")).SceneLayerSnappingSource({layerSource:e,view:t})}async _createFeatureSnappingSourceFeatureLayer(e){switch(e.layer.source?.type){case"feature-layer":case"oriented-imagery":return new(await this._getSourceModule("featureService")).FeatureServiceSnappingSource({spatialReference:this.spatialReference,view:this.view,layerSource:e});case"memory":case"csv":case"geojson":case"wfs":return e.layer.geometryType==="mesh"?null:new(await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({layerSource:e,view:this.view})}return null}async _createFeatureSnappingSourceGraphicsLayer(e){return new(await this._getSourceModule("graphics")).GraphicsSnappingSource({getGraphicsLayers:()=>[e.layer],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _createFeatureSnappingSourceMapNotesLayer(e){return new(await this._getSourceModule("notes")).GraphicsSnappingSource({getGraphicsLayers:()=>e.layer.sublayers?.toArray()??[],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _getSourceModule(e){const t=this._sourceModules[e];if(t.loader==null){const r=this._loadSourceModule(e),a={module:null,loader:r};this._sourceModules[e]=a;const i=await r,o={module:i,loader:r};return this._sourceModules[e]=o,i}return t.module==null?t.loader:t.module}_loadSourceModule(e){const t=this._updatingHandles;switch(e){case"featureService":return t.addPromise(import("./FeatureServiceSnappingSource-XN0Bomky.js"));case"featureCollection":return t.addPromise(import("./FeatureCollectionSnappingSource-BuVWGg_2.js"));case"graphics":case"notes":return t.addPromise(import("./GraphicsSnappingSource-BX3Jg7pR.js"));case"scene":return t.addPromise(import("./SceneLayerSnappingSource-D9VFtsBL.js"))}}get test(){}};function de(e){return(e instanceof le||e instanceof ue)&&!pe(e)}function pe({constraint:{start:e,end:t}}){const r=q(e,t),a=E(m(e),m(t));return r<J()||a/r<ye}function M(e,t,r,a,i,o,{spatialReference:l}){const n=B(he,t);n[0]+=r,n[1]+=a,n[2]+=i;const s=A(n,l,V,o);return s?re(s,e):1/0}u([h({constructOnly:!0})],g.prototype,"spatialReference",void 0),u([h({constructOnly:!0})],g.prototype,"view",void 0),u([h()],g.prototype,"options",void 0),u([h({readOnly:!0})],g.prototype,"updating",null),u([h()],g.prototype,"_snappingSources",void 0),g=u([C("esri.views.interactive.snapping.FeatureSnappingEngine")],g);const G=O(),he=O(),ye=1e-4;export{g as FeatureSnappingEngine};
