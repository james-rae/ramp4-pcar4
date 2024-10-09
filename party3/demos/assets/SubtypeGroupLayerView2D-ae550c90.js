import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-7c18c46c.js';
import { X } from './FeatureLayerView2D-f3d2f23a.js';
import './preload-helper-a4975f27.js';
import './Container-3910e97b.js';
import './highlightReasons-2396947d.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-d232caf5.js';
import './LayerView-f7bb2890.js';
import './TechniqueInstance-c6a1b6f4.js';
import './UpdateTracking2D-1ac0e8f2.js';
import './TurboLine-56638b44.js';
import './enums-d24bcbbf.js';
import './earcut-73ef781d.js';
import './GeometryUtils-8854b19d.js';
import './Rect-09e0f861.js';
import './LabelMetric-88857f35.js';
import './Program-1dd417aa.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-cf848e37.js';
import './constants-412c3a33.js';
import './TileContainer-23d17761.js';
import './WGLContainer-6ad8196e.js';
import './ProgramTemplate-6ca4bbed.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-96e12097.js';
import './floatRGBA-967c3cd7.js';
import './FeatureCommandQueue-248d98f9.js';
import './HighlightCounter-07fb38fe.js';
import './popupUtils-bd3ff69e.js';
import './RefreshableLayerView-a9916ae6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
