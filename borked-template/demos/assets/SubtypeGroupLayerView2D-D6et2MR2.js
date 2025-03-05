import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DFC4KtAD.js';
import { X } from './FeatureLayerView2D-B1zi4wH1.js';
import './preload-helper-dJJaZANz.js';
import './Container-BGau2zQS.js';
import './highlightReasons-DCAJ03Ni.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BFvzbVfI.js';
import './LayerView-DIHstbhh.js';
import './TechniqueInstance-CNQJE-6e.js';
import './UpdateTracking2D-BiDoVAP_.js';
import './TurboLine-Ba2US4qp.js';
import './enums-DZmWLm_j.js';
import './earcut-DoZ-fl-g.js';
import './GeometryUtils-Dntwx-BH.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BWX5Mnm3.js';
import './Program-CfyJV7Rd.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DbDP6OLq.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CQ3f5pvk.js';
import './WGLContainer-DK-MZV_O.js';
import './ProgramTemplate-CDiszpIA.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CRC-H3zT.js';
import './floatRGBA-iu4S7MiJ.js';
import './FeatureCommandQueue-DtKPSRDx.js';
import './HighlightCounter-BXHu3aCx.js';
import './popupUtils-CDGXAMFf.js';
import './RefreshableLayerView-4zMcZD81.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
