import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-BTSMlyeL.js';
import { X } from './FeatureLayerView2D-B5fHpZxA.js';
import './preload-helper-dJJaZANz.js';
import './Container-TpwbExrd.js';
import './highlightReasons-heOFSWQ_.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BL8MMbJz.js';
import './LayerView-BIWl0LTH.js';
import './TechniqueInstance-WffufdVM.js';
import './UpdateTracking2D-CheeO-eZ.js';
import './TurboLine-BzP5GSeS.js';
import './enums-DZmWLm_j.js';
import './earcut-CLxM1RdS.js';
import './GeometryUtils-CPWP0EPF.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B7eifbZX.js';
import './Program-BoMLNoyR.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CDnr3nri.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CDwQYAVA.js';
import './WGLContainer-mgfhTYoc.js';
import './ProgramTemplate-FBwizGc8.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DywggOHq.js';
import './floatRGBA-DnmWBgnQ.js';
import './FeatureCommandQueue-B8ce-tch.js';
import './HighlightCounter-bWIMY7lq.js';
import './popupUtils-BH7m-HOF.js';
import './RefreshableLayerView-x9AgLRaj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
