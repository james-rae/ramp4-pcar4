import { b2 as d$1, b4 as P$1, b5 as d, a3 as V, b6 as P, b7 as t, b8 as m, aW as e, aY as c } from './main-BrCSy3vQ.js';
import { m as m$1, u } from './LayerView-CRqFfVQn.js';
import { t as t$1 } from './GraphicContainer-BKcvacol.js';
import { $ } from './GraphicsView2D-Ckpt485j.js';
import './preload-helper-dJJaZANz.js';
import './Container-CLYw8oez.js';
import './highlightReasons-B_JIF8g_.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CkHtk6o_.js';
import './AGraphicContainer-DG_7WTC7.js';
import './TechniqueInstance-DnaIEQSK.js';
import './UpdateTracking2D-DXUkX5tq.js';
import './TurboLine-89odiCWK.js';
import './enums-DZmWLm_j.js';
import './earcut-CEbO7MzB.js';
import './GeometryUtils-C0hQ_cU7.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BRLV95Op.js';
import './Program-BYttGNwE.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BxKi28Po.js';
import './constants-C0QDwCF4.js';
import './TileContainer-VxLHLKnM.js';
import './WGLContainer-fPGNQw9x.js';
import './ProgramTemplate-Davy4NZK.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-CUfEVM_3.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-Bad7ohgh.js';
import './TimeOnly-CSK_r7_a.js';
import './timeSupport-BzYcwK4W.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-D2Bm1PCd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
