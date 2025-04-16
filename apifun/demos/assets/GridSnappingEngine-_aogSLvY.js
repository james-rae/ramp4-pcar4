import{aN as O,d4 as U,n as V,ad as X,B as p,D as m,N as Y}from"./main-CcTJZah4.js";import{w as E}from"./vec32-D4ob7-3U.js";import{U as F,O as G}from"./projection-nLxG4Uci.js";import{P as N}from"./normalizeUtils-Bg7D-T7i.js";import{u as W}from"./scaleUtils-DdzsSHs-.js";import{l as B,u as H,t as I}from"./gridUtils-C0PVnuUJ.js";import{f as c,d as T,c as _}from"./hitTestSelectUtils-Cm4nfxhx.js";import{r as j,a as k}from"./RouteLayerInteraction-U2HDkN7Y.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./projectBuffer-DwB7xYJN.js";import"./normalizeUtilsCommon-DsrTeGXA.js";import"./utils-38kRF6MD.js";import"./utils-C0gkSWhl.js";import"./geodesicUtils-BPvODm7Q.js";import"./Cyclical-CZYqtx8C.js";import"./quantityUtils-CUqPTH-C.js";import"./vec2-maR1OrZI.js";import"./vec2f64-DohEyf3f.js";import"./projectVectorToVector-fvun3xW4.js";import"./projectPointToVector-D6P7t9ma.js";import"./TimeExtent-C9S2Kh-G.js";import"./Query-CotcSkQi.js";import"./Field-BlXPfS0o.js";import"./fieldType-DC231FMv.js";import"./MapView-BzwjjI_-.js";import"./CollectionFlattener-C3wIrk5j.js";import"./workers-B-WWhFsm.js";import"./Queue-Bhp-js6j.js";import"./intl-DiBhrFNw.js";import"./TileInfo-BSaKYsG9.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-2piyLhQV.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-CRkfwhGD.js";import"./signal-CHZdDeRG.js";import"./Map-DgU7-KW8.js";import"./Basemap-ZtwLtrEj.js";import"./loadAll-CKcCjm1o.js";import"./PortalItem-DtQGXcdD.js";import"./writeUtils-DMWpEYvj.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-I_M_KIEV.js";import"./TablesMixin-BCRXHVdJ.js";import"./Layer-BTj8V0Sm.js";import"./GraphicsCollection-CSS9ISBf.js";import"./HeightModelInfo-C4kqNqDg.js";import"./timeZoneUtils-ZVFmM1ie.js";import"./ReactiveMap-C0hf8mXz.js";import"./HighlightDefaults-DzS__Pad.js";import"./ViewingMode-HRfKv6NR.js";import"./Tile-CX8RR_ob.js";import"./TileKey-DSJnkexI.js";import"./quickselect-QQC62dOK.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-EGVPE_qU.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CPtb4TQS.js";import"./enums-Dk3osxpS.js";import"./Texture-CAz7g1Ei.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-D2KqOp3F.js";import"./capabilities-Du2wdNlQ.js";import"./Version-D4DaVQR7.js";import"./ColorBackground-DPQ8rOwB.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./plane-DJilfJKg.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-B_OJFjwD.js";import"./elevationInfoUtils-P3gCYznn.js";import"./ElevationInfo-Bz-jcguF.js";import"./lengthUtils-CCWuB1s4.js";import"./GraphicsLayer-yDHLDjiJ.js";import"./BlendLayer-BnJD7T_l.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-D8kEhXrY.js";import"./parser-Rrcba7UU.js";import"./ScaleRangeLayer-DRGr6lxT.js";import"./Stop-bbsY_0sI.js";import"./networkEnums-BDKq7eff.js";let n=class extends O{constructor(t){super(t),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:U(this.view.rotation??0)}get gridRotation(){return U(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:t,grid:i}=this;if(!i||!t||!F(i.center.spatialReference,t))return null;try{const r=G(i.center,t),e=t.isWrappable&&this.view?.center!=null?N(r.x,this.view.center.x,t):r.x;return c(e,r.y,r.z)}catch(r){return V.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:t,grid:i}=this;if(!i||!t)return 1;const{majorLineInterval:r,dynamicScaling:e}=i;return r<1?null:B(r,t,e)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:t}=this;return t?X(t.spacing,t.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:t}=this;return t==null?null:t*W(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:t}=this.view;return this.gridCenter?H(this.gridCenter[0],this.gridCenter[1],t):null}get pixelsPerStride(){const{gridMetersPerStride:t,viewMetersPerPixel:i}=this;return i&&t?t/i:null}get updating(){return this.grid!=null&&this.spatialReference!=null&&this.viewMetersPerSRUnit==null}async fetchCandidates(t,i,r){const{options:e,view:o}=this;if(!e?.effectiveGridEnabled||!o.grid||r.feature?.attributes&&T in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(t),a=e.distance*(r.pointer==="touch"?e.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,a)}fetchCandidatesSync(t,i){const r=[],{grid:e,effectiveViewRotation:o,gridRotation:s,gridCenter:a,viewMetersPerPixel:h,viewMetersPerSRUnit:d,offsetScaleFactor:S,spatialReference:g,gridMetersPerStride:C,pixelsPerStride:$}=this;if(!(e&&h&&d&&a&&g&&S&&C&&$)||!e.dynamicScaling&&$<I||!F(t.spatialReference,g))return r;const y=G(t,g),D=c(y.x,y.y,y.z),l=f(D,-s,a,-o),P=C/d*S,u=q(l,P,a),{shouldSnapX:w,shouldSnapY:v}=A(u,l,i,h,d);if(!w&&!v)return[];const L=c((w?u:l)[0],(v?u:l)[1]),M=f(L,s,a,o),b=f(u,s,a,o);if(v){const R=z(u,l,P,"y"),x=f(R,s,a,o);r.push(new j({lineStart:b,lineEnd:x,targetPoint:M,isDraped:!1}))}if(w){const R=z(u,l,P,"x"),x=f(R,s,a,o);r.push(new j({lineStart:b,lineEnd:x,targetPoint:M,isDraped:!1}))}return w&&v&&r.push(new k(M,r[0],r[1],!1)),r}};p([m({constructOnly:!0})],n.prototype,"view",void 0),p([m()],n.prototype,"options",void 0),p([m()],n.prototype,"grid",null),p([m()],n.prototype,"effectiveViewRotation",null),p([m()],n.prototype,"gridRotation",null),p([m()],n.prototype,"gridCenter",null),p([m()],n.prototype,"offsetScaleFactor",null),p([m()],n.prototype,"spatialReference",null),p([m()],n.prototype,"gridMetersPerStride",null),p([m()],n.prototype,"viewMetersPerPixel",null),p([m()],n.prototype,"viewMetersPerSRUnit",null),p([m()],n.prototype,"pixelsPerStride",null),p([m()],n.prototype,"updating",null),n=p([Y("esri.views.interactive.snapping.GridSnappingEngine")],n);const f=(t,i,r,e)=>{const o=_(t[0],t[1],t[2]);return E(o,E(o,o,r,i),r,e)},q=(t,i,r)=>{const e=(t[0]-r[0])/i,o=(t[1]-r[1])/i,s=Math.trunc(e),a=Math.trunc(o),h=Math.round(e%1),d=Math.round(o%1),S=r[0]+(s+h)*i,g=r[1]+(a+d)*i;return c(S,g)},A=(t,i,r,e,o)=>{if(e<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(t[0]-i[0])/e,a=(t[1]-i[1])/e;return{shouldSnapX:Math.abs(s*o)<r,shouldSnapY:Math.abs(a*o)<r}},z=(t,i,r,e)=>{if(e==="y"){const s=i[0]>t[0]?1:-1;return c(t[0]+r*s,t[1])}const o=i[1]>t[1]?1:-1;return c(t[0],t[1]+r*o)};export{n as GridSnappingEngine};
