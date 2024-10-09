import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-AZ36x38Y.js';
import { X } from './FeatureLayerView2D-CC7j9Yhn.js';
import './preload-helper-dJJaZANz.js';
import './Container-B4aKeMVo.js';
import './highlightReasons-C-bvOsGC.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CiGIdJia.js';
import './LayerView-Hg0tw7WA.js';
import './TechniqueInstance-C5c8PobB.js';
import './UpdateTracking2D-E7rpPCbB.js';
import './TurboLine-DdUIQidE.js';
import './enums-DZmWLm_j.js';
import './earcut-ClmN06JG.js';
import './GeometryUtils-DMocKZtr.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Uhj6lVpM.js';
import './Program-B0PUXE61.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CngOO_Gt.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DHerS-Sw.js';
import './WGLContainer-C_GVvxak.js';
import './ProgramTemplate-BR_sLExp.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BEcj6oC_.js';
import './floatRGBA-CZm2bkwl.js';
import './FeatureCommandQueue-B9O2fC_D.js';
import './HighlightCounter-tsx2zdqh.js';
import './popupUtils-nveosjnV.js';
import './RefreshableLayerView-sMHHbydw.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
