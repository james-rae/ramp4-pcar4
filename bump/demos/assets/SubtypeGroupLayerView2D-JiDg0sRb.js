import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-D8rt8898.js';
import { X } from './FeatureLayerView2D-HTCXsWm4.js';
import './preload-helper-dJJaZANz.js';
import './Container-HhN7wN3p.js';
import './highlightReasons-CWF-4nsV.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BepXDdBt.js';
import './LayerView-C33IPi0A.js';
import './TechniqueInstance-BdqWlNpZ.js';
import './UpdateTracking2D-DdcYUBEU.js';
import './TurboLine-DVAm8qUm.js';
import './enums-DZmWLm_j.js';
import './earcut-ChlbmKOP.js';
import './GeometryUtils-DEGHmVof.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-pYuuNp8f.js';
import './Program-Hi_5fphd.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Nguv0hee.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Dqb8-oEx.js';
import './WGLContainer-B0Ow80p3.js';
import './ProgramTemplate-Catu3QHK.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D_8ew7nQ.js';
import './floatRGBA-DxAaRbvE.js';
import './FeatureCommandQueue-BkEY2mdt.js';
import './HighlightCounter-BDQkBfUC.js';
import './popupUtils-ELKZUNtn.js';
import './RefreshableLayerView-kJmpMZqk.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
