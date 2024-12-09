import { a2 as d$1, a1 as V, F, bn as e, cC as d$2, cD as P$1, cz as v$1, bT as r, bV as a } from './main-jdFDoOPu.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import { t } from './GraphicContainer-89utXrMH.js';
import { F as F$1 } from './GraphicsView2D-B2PWs52b.js';
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
const d="sublayers",u="layerView",f=new Set(["default"]);let m=class extends(j$1(y$1)){constructor(){super(...arguments),this._highlightIds=new Map;}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys();}async hitTest(i,e){return Array.from(this.graphicsViews(),(e=>{const s=e.hitTest(i);if(null!=this._graphicsViewsFeatureCollectionMap){const i=this._graphicsViewsFeatureCollectionMap.get(e);for(const e of s)!e.popupTemplate&&i.popupTemplate&&(e.popupTemplate=i.popupTemplate),e.sourceLayer=e.layer=this.layer;}return s})).flat().map((e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i})))}highlight(i){let h;"number"==typeof i?h=[i]:i instanceof d$1?h=[i.uid]:Array.isArray(i)&&i.length>0?h="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&(h=i.map((i=>i&&i.uid)).toArray());const a=h?.filter(F);return a?.length?(this._addHighlight(a),e((()=>this._removeHighlight(a)))):e()}update(i){for(const e of this.graphicsViews())e.processUpdate(i);}attach(){const i=this.view,e=()=>this.requestUpdate(),s=this.layer.featureCollections;if(null!=s&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t$1 of s){const s=new t(this.view.featuresTilingScheme),r=new F$1({view:i,graphics:t$1.source,renderer:t$1.renderer,requestUpdateCallback:e,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t$1),this.container.addChild(r.container),this.addHandles([d$2((()=>t$1.visible),(i=>r.container.visible=i),P$1),d$2((()=>r.updating),(()=>this.notifyChange("updating")),P$1)],u);}this._updateHighlight();}else null!=this.layer.sublayers&&this.addHandles(v$1((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d);}detach(){this._destroyGraphicsViews(),this.removeHandles(d);}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange();}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(u);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const i=[],e=this.view,s=()=>this.requestUpdate();for(const t$1 of this.layer.sublayers){const r=new t(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new F$1({view:e,graphics:t$1.graphics,requestUpdateCallback:s,container:r});this.addHandles([t$1.on("graphic-update",a.graphicUpdateHandler),d$2((()=>t$1.visible),(i=>a.container.visible=i),P$1),d$2((()=>a.updating),(()=>this.notifyChange("updating")),P$1)],u),this.container.addChild(a.container),i.push(a);}this._graphicsViews=i,this._updateHighlight();}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),e=this._getHighlightBits(f);for(const s of this.graphicsViews())s.setHighlight(i.map((i=>({objectId:i,highlightFlags:e}))));}};m=r([a("esri.views.2d.layers.MapNotesLayerView2D")],m);const w=m;

export { w as default };
