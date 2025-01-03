import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-BWr6aa-W.js';
import { r as re } from './FeatureLayerView2D-CpIacCR9.js';
import './preload-helper-dJJaZANz.js';
import './Container-BjrXfkaa.js';
import './highlightReasons-Dm4JZEw-.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-BS9kshVh.js';
import './timeSupport-BAn-iL6P.js';
import './LayerView-i88hOP0O.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-iSXGeaTf.js';
import './UpdateTracking2D-BPu26epC.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-AnqvCTs3.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-DlOIrmF5.js';
import './Program-COuPMRXx.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util--I5k8wBV.js';
import './TileContainer-ppXYJF0G.js';
import './WGLContainer-B6I2tyww.js';
import './ProgramTemplate-BLd-Jzzi.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-2MrC14cn.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-DSRPPi35.js';
import './floatRGBA-D4bvQTHL.js';
import './FeatureCommandQueue-BfQEO-lA.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-BK2nHeOR.js';
import './popupUtils-hWxb7hSS.js';
import './RefreshableLayerView-SupmT_5_.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
