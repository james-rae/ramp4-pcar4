import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-Da2YJtfY.js';
import { X } from './FeatureLayerView2D-WkIHR9tp.js';
import './preload-helper-dJJaZANz.js';
import './Container-ATB6F2ds.js';
import './highlightReasons-B6RpZUjj.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CyQ4zmKN.js';
import './LayerView-YmDno4Ov.js';
import './TechniqueInstance-cXCES1pY.js';
import './UpdateTracking2D-_Kuyvtil.js';
import './TurboLine-XiC3GVJN.js';
import './enums-DZmWLm_j.js';
import './earcut-Djtgr63C.js';
import './GeometryUtils-C7cmDnyO.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CFUtnL7W.js';
import './Program-xc3OZrr4.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BURcqFAh.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BxOFiYuX.js';
import './WGLContainer-BYeDucDm.js';
import './ProgramTemplate-vG6v4_C3.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-9hHyX0dg.js';
import './floatRGBA-Cs18iuLp.js';
import './FeatureCommandQueue-CVNGmhuq.js';
import './HighlightCounter-CnrrI3o-.js';
import './popupUtils-BTeuya9L.js';
import './RefreshableLayerView-BIUknzYP.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
