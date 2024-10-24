import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-SD2PuOzt.js';
import { X } from './FeatureLayerView2D-BWkfGg8F.js';
import './preload-helper-dJJaZANz.js';
import './Container-DVhIaGQN.js';
import './highlightReasons-BHsHU6PZ.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DUucMCs_.js';
import './LayerView-BgPZm_96.js';
import './TechniqueInstance-Dqt7E-xe.js';
import './UpdateTracking2D-CJw821Bs.js';
import './TurboLine-DcR-BYgd.js';
import './enums-DZmWLm_j.js';
import './earcut-Cbw3hwTE.js';
import './GeometryUtils-CSxzSTGK.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-rOaCyRTV.js';
import './Program-DI_AGV4m.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CD1rWveV.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Bllu946-.js';
import './WGLContainer-B6g3gRZ5.js';
import './ProgramTemplate-lcw1zkoT.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BPEOzqI2.js';
import './floatRGBA-CENn4ox2.js';
import './FeatureCommandQueue-CeewCRyt.js';
import './HighlightCounter-CItYFN6j.js';
import './popupUtils-Ba5Oc7dt.js';
import './RefreshableLayerView-BBG1-inh.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
