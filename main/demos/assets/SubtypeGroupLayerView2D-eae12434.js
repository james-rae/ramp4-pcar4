import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-05d2582d.js';
import { X } from './FeatureLayerView2D-2d3f9bc8.js';
import './preload-helper-a4975f27.js';
import './Container-0b9790b3.js';
import './highlightReasons-da8ba3fd.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-4e427183.js';
import './LayerView-3d35064e.js';
import './TechniqueInstance-90b68b9e.js';
import './UpdateTracking2D-d14e4640.js';
import './TurboLine-3b5198a9.js';
import './enums-d24bcbbf.js';
import './earcut-c2d62f00.js';
import './GeometryUtils-b572a7a2.js';
import './Rect-09e0f861.js';
import './LabelMetric-ba07641f.js';
import './Program-802f889f.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-29d57c12.js';
import './constants-412c3a33.js';
import './TileContainer-8f366cf7.js';
import './WGLContainer-2590c49b.js';
import './ProgramTemplate-a116d9de.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-1cbf7bd4.js';
import './floatRGBA-337e50f9.js';
import './FeatureCommandQueue-eadcd66d.js';
import './HighlightCounter-9d0f0c3f.js';
import './popupUtils-d68839b4.js';
import './RefreshableLayerView-25222190.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
