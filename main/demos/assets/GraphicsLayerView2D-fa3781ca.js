import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-05d2582d.js';
import { t as t$2 } from './highlightReasons-da8ba3fd.js';
import { m as m$1, u as u$2 } from './LayerView-3d35064e.js';
import { t as t$1 } from './GraphicContainer-47890242.js';
import { $ } from './GraphicsView2D-4b23358c.js';
import { t } from './HighlightCounter-9d0f0c3f.js';
import './preload-helper-a4975f27.js';
import './Container-0b9790b3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-4e427183.js';
import './AGraphicContainer-f1bba336.js';
import './TechniqueInstance-90b68b9e.js';
import './UpdateTracking2D-d14e4640.js';
import './TurboLine-3b5198a9.js';
import './enums-d24bcbbf.js';
import './earcut-c2d62f00.js';
import './GeometryUtils-b572a7a2.js';
import './Rect-09e0f861.js';
import './LabelMetric-ba07641f.js';
import './Program-802f889f.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-29d57c12.js';
import './constants-412c3a33.js';
import './TileContainer-8f366cf7.js';
import './WGLContainer-2590c49b.js';
import './ProgramTemplate-a116d9de.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-eadcd66d.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-cf1fb91c.js';
import './TimeOnly-120574c3.js';
import './timeSupport-67ef13dd.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-fd84fa1e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
