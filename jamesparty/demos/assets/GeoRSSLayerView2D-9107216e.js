import { b3 as d$1, b5 as P$1, b6 as d, a4 as V, b7 as P, b8 as t, b9 as m, aX as e, aZ as c } from './main-0587906a.js';
import { m as m$1, u } from './LayerView-4caafb6e.js';
import { t as t$1 } from './GraphicContainer-e8a9560c.js';
import { $ } from './GraphicsView2D-864c16a6.js';
import './preload-helper-a4975f27.js';
import './Container-954a45a5.js';
import './highlightReasons-176c7a29.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-588b6678.js';
import './AGraphicContainer-0f9d6248.js';
import './TechniqueInstance-d3ed9674.js';
import './UpdateTracking2D-363d79a0.js';
import './TurboLine-77ffe8cf.js';
import './enums-d24bcbbf.js';
import './earcut-d54efca7.js';
import './GeometryUtils-7485168a.js';
import './Rect-09e0f861.js';
import './LabelMetric-e597ef41.js';
import './Program-e82211e6.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-412cffc5.js';
import './constants-412c3a33.js';
import './TileContainer-4f5fe321.js';
import './WGLContainer-d70b7cac.js';
import './ProgramTemplate-512bd558.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-78ce7223.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-a79e8cb5.js';
import './TimeOnly-513ae539.js';
import './timeSupport-8fc6be5e.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-4b3ec187.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
