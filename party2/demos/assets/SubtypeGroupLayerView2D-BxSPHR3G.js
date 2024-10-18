import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CkRHTxdx.js';
import { X } from './FeatureLayerView2D-CYjRX9jG.js';
import './preload-helper-dJJaZANz.js';
import './Container-7s3AOZlL.js';
import './highlightReasons-CpYSLrq6.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DBVsUset.js';
import './LayerView-D9-6Ii_3.js';
import './TechniqueInstance-BkEN8268.js';
import './UpdateTracking2D-C_Fvzahu.js';
import './TurboLine-C2lR1a0k.js';
import './enums-DZmWLm_j.js';
import './earcut-HUHjziyy.js';
import './GeometryUtils-CAZKip_y.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DduZRzkQ.js';
import './Program-CH5Z2JYV.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DtxZYYek.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BAs1H9rt.js';
import './WGLContainer-CDjxaK0Z.js';
import './ProgramTemplate-5LTJR9WX.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper--wsQqmWL.js';
import './floatRGBA-BS_x2qHQ.js';
import './FeatureCommandQueue-DYORICh8.js';
import './HighlightCounter-CCfS7DkO.js';
import './popupUtils-Ba3Wtl45.js';
import './RefreshableLayerView-DoU8tPVe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
