import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-0587906a.js';
import { X } from './FeatureLayerView2D-39800941.js';
import './preload-helper-a4975f27.js';
import './Container-954a45a5.js';
import './highlightReasons-176c7a29.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-588b6678.js';
import './LayerView-4caafb6e.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-0f2c9bf9.js';
import './floatRGBA-58ad93db.js';
import './FeatureCommandQueue-78ce7223.js';
import './HighlightCounter-c3b15fc2.js';
import './popupUtils-1121aa01.js';
import './RefreshableLayerView-e6efff20.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
