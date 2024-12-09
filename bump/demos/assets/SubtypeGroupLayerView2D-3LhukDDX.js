import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-B2BaXj4F.js';
import { X } from './FeatureLayerView2D-CTBkIMyD.js';
import './preload-helper-dJJaZANz.js';
import './Container-tph1fhNa.js';
import './highlightReasons-mKXeHfSn.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BfcRt74t.js';
import './LayerView-CWlo3rL2.js';
import './TechniqueInstance-C-_A8AQN.js';
import './UpdateTracking2D-bJf0D-zV.js';
import './TurboLine-BSAKHMbr.js';
import './enums-DZmWLm_j.js';
import './earcut-D96kNmEU.js';
import './GeometryUtils-BFvlJb3H.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-0VQU6aJO.js';
import './Program-D8zoCcXZ.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BQLYmVOB.js';
import './constants-C0QDwCF4.js';
import './TileContainer-24JT4u7V.js';
import './WGLContainer-dTprUMuf.js';
import './ProgramTemplate-B2gci7Fx.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-_CpBWRPM.js';
import './floatRGBA-f9sG97LE.js';
import './FeatureCommandQueue-BVkJGsGS.js';
import './HighlightCounter-C5cG4Ku4.js';
import './popupUtils-BW2qTbJ8.js';
import './RefreshableLayerView-CV5fH9_9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
