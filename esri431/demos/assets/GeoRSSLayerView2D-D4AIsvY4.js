import { cC as d$1, cD as P$1, bX as d, a1 as V, cE as q, cF as t, cG as p$1, bT as r, bV as a } from './main-jdFDoOPu.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import { t as t$1 } from './GraphicContainer-89utXrMH.js';
import { F } from './GraphicsView2D-B2PWs52b.js';
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
let y=class extends(j$1(y$1)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?q.fromJSON(i):null,y=t(n.renderer),g=new F({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p$1({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p$1({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p$1({symbol:e});}),P$1)]);}detach(){this._clear();}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=r([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
