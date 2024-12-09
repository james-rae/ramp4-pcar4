import { a1 as V$1, d8 as n, cD as P$1, F as F$1, bn as e, cC as d$1, bT as r, bU as m, bV as a } from './main-jdFDoOPu.js';
import { c, y, C, T, j as j$2, S, w } from './Stop-DsK1Z_J1.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import { t } from './GraphicContainer-89utXrMH.js';
import { F as F$2 } from './GraphicsView2D-B2PWs52b.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './layerViewUtils-DUOa5TQu.js';
import './AGraphicContainer-CLc90K_e.js';
import './TechniqueInstance-Samk-rXg.js';
import './UpdateTracking2D-nlP-taLY.js';
import './BidiEngine-SYarjht-.js';
import './GeometryUtils-BXKvwdJG.js';
import './Rect--0fzStUh.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './BindType-DC_OuQGA.js';
import './Util-BoF0V3b-.js';
import './TileContainer-BA3pMXmd.js';
import './WGLContainer-BUclEOgO.js';
import './VertexArrayObject-DvEAXDKn.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './vec3f32-0Jah-02g.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';
import './FeatureCommandQueue-BYG4gPcz.js';
import './constants-D-RiuwZo.js';
import './AttributeStore-mPOB5I49.js';
import './TimeOnly-CWeyHmrP.js';
import './timeSupport-B-_28reI.js';
import './normalizeUtilsSync-gaQdI-2O.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const k=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(t){return t instanceof c||t instanceof y||t instanceof C||t instanceof T||t instanceof j$2||t instanceof S||t instanceof w}function V(t){return V$1.isCollection(t)&&t.length&&M(t.at(0))}function G(t){return Array.isArray(t)&&t.length>0&&M(t[0])}const I=new Set(["default"]);let v=class extends(j$1(y$1)){constructor(){super(...arguments),this._graphics=new V$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new n({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new V$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),P$1);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter((({popupTemplate:t})=>!!t))}highlight(t){let r;r=M(t)?[this._getNetworkFeatureUid(t)]:G(t)?t.map((t=>this._getNetworkFeatureUid(t))):V(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const i=r.filter(F$1);return i.length?(this._addHighlight(i),e((()=>this._removeHighlight(i)))):e()}async hitTest(t,r){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(F$1).map((t=>this._networkGraphicMap.get(t)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t$1=this.view,e=()=>this.requestUpdate(),r=new t(t$1.featuresTilingScheme);this._graphicsView=new F$2({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t$1}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return k.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t.removed)this.removeHandles(e);}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const e=this._createGraphic(t);return null==e.symbol?null:(this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),e)})).filter(F$1));for(const e of t.added)this.addHandles([d$1((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),d$1((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,j.graphic=s,j.property=e,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=this._getHighlightBits(I);this._graphicsView.setHighlight(t.map((t=>({objectId:t,highlightFlags:e}))));}};r([m()],v.prototype,"_graphics",void 0),r([m()],v.prototype,"_routeItems",null),v=r([a("esri.views.2d.layers.RouteLayerView2D")],v);const F=v;

export { F as default };
