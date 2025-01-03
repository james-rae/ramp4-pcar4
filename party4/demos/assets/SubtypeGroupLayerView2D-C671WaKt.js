import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BrCSy3vQ.js';
import { X } from './FeatureLayerView2D-C8nQKMZu.js';
import './preload-helper-dJJaZANz.js';
import './Container-CLYw8oez.js';
import './highlightReasons-B_JIF8g_.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CkHtk6o_.js';
import './LayerView-CRqFfVQn.js';
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
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BjWUrtw8.js';
import './floatRGBA-5d73q4TH.js';
import './FeatureCommandQueue-CUfEVM_3.js';
import './HighlightCounter-DpqSDa3p.js';
import './popupUtils-euWxh2UO.js';
import './RefreshableLayerView-DKbIJ6Sm.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
