import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-C80GNj-k.js';
import { X } from './FeatureLayerView2D-VwZwhAVB.js';
import './preload-helper-dJJaZANz.js';
import './Container-B8xueVBd.js';
import './highlightReasons-uKu8gdcb.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-_Ue9j7Je.js';
import './LayerView-CrXLKgQx.js';
import './TechniqueInstance-CJBGDKSE.js';
import './UpdateTracking2D-DKePQ3b6.js';
import './TurboLine-CZvJYckU.js';
import './enums-DZmWLm_j.js';
import './earcut-BCwbs-Lh.js';
import './GeometryUtils-CGm6UWVV.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C1nuZpmE.js';
import './Program-FnOad3qS.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-hGmJb1LD.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CyeYIkSX.js';
import './WGLContainer-DkTQxIyE.js';
import './ProgramTemplate-BWZTcMqp.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BYBj3Ar_.js';
import './floatRGBA-DUFrC9T7.js';
import './FeatureCommandQueue-BgndmiR2.js';
import './HighlightCounter-u-bJbjBp.js';
import './popupUtils-fuG-WWOL.js';
import './RefreshableLayerView-wkIfxEJX.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
