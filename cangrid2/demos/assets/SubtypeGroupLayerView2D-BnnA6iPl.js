import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-CGBWc59Z.js';
import { r as re } from './FeatureLayerView2D-C_Dfu1dd.js';
import './preload-helper-dJJaZANz.js';
import './Container-C6eOHu3y.js';
import './highlightReasons-CMNvxoUc.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-C4ft8TUm.js';
import './timeSupport-mRAhXLI9.js';
import './LayerView-DUMH7O5f.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-B7SszBst.js';
import './UpdateTracking2D-tfVHyc-s.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-MaZzdDt5.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-DeEwVo6w.js';
import './Program-DgbP8X_l.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-CcmvHQeM.js';
import './TileContainer-Bi7pVBFp.js';
import './WGLContainer-DmNNClwO.js';
import './ProgramTemplate-B06R9gvz.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-BQ3wmzD6.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BLpz8wm6.js';
import './floatRGBA-D_j_VhU9.js';
import './FeatureCommandQueue-BfkJGkV1.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-DOjPv-Sy.js';
import './popupUtils-5nWm5qmp.js';
import './RefreshableLayerView-DjYf5VMN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
