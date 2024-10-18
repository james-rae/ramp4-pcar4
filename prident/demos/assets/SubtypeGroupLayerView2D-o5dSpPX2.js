import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CSEAIzT4.js';
import { X } from './FeatureLayerView2D-YDUtMHN_.js';
import './preload-helper-dJJaZANz.js';
import './Container-DMl2r8Cz.js';
import './highlightReasons-_krTng88.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-d5PPlQew.js';
import './LayerView-CCkf9vOZ.js';
import './TechniqueInstance-Blq4ZvAs.js';
import './UpdateTracking2D-BzVYKhpZ.js';
import './TurboLine-LISiGAO_.js';
import './enums-DZmWLm_j.js';
import './earcut-qq4tzbdS.js';
import './GeometryUtils-D3RbrQxp.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BzyRRUMe.js';
import './Program-DxfVcybT.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-V0AdjxyB.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DaGCcAXb.js';
import './WGLContainer-Db1dEPhh.js';
import './ProgramTemplate-CnXGyhuQ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BAMhLzvO.js';
import './floatRGBA-Cz59ymxq.js';
import './FeatureCommandQueue-mqf6eGEm.js';
import './HighlightCounter-Ba88XJZy.js';
import './popupUtils-PoR7P9Jb.js';
import './RefreshableLayerView-rtWSnEd2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
