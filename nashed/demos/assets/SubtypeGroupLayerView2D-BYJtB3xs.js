import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DYTaXxEw.js';
import { X } from './FeatureLayerView2D-QyaMzmOt.js';
import './preload-helper-dJJaZANz.js';
import './Container-CELDWgSa.js';
import './highlightReasons-DskexsVc.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BWJx4779.js';
import './LayerView-DT29pWgZ.js';
import './TechniqueInstance-BT_uJ3Y0.js';
import './UpdateTracking2D-CJQ10V8Q.js';
import './TurboLine-D-D1Pmi4.js';
import './enums-DZmWLm_j.js';
import './earcut-DrUL8MwJ.js';
import './GeometryUtils-CVtxGUat.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-uUwV0Ygm.js';
import './Program-Cs4ZK4OE.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DddMWdIw.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Djm45SHQ.js';
import './WGLContainer-BIeCSDh5.js';
import './ProgramTemplate-DD_IT0AN.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CgVfxgTq.js';
import './floatRGBA-CbsqIqgn.js';
import './FeatureCommandQueue-CYx4dEr5.js';
import './HighlightCounter-BOCgKi-M.js';
import './popupUtils-Cqa2c5ix.js';
import './RefreshableLayerView-CKDr1IS3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
