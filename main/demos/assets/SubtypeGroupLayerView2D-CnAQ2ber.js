import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-Cr6PLPJi.js';
import { X } from './FeatureLayerView2D-1JHkB9ri.js';
import './preload-helper-dJJaZANz.js';
import './Container-CzKE2QIC.js';
import './highlightReasons-BIIJnykY.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bjrp8uC_.js';
import './LayerView-fvaQrBYs.js';
import './TechniqueInstance-DVdJ1jTv.js';
import './UpdateTracking2D-DDC_hLrK.js';
import './TurboLine-Ot-DVJkT.js';
import './enums-DZmWLm_j.js';
import './earcut-Cx5hWJuj.js';
import './GeometryUtils-leZjnUPk.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-kfi7KZ4g.js';
import './Program-BCF7N3bY.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DDUB6xXp.js';
import './constants-C0QDwCF4.js';
import './TileContainer-acotzzC_.js';
import './WGLContainer-B2pLzrSL.js';
import './ProgramTemplate-BgX-1cAX.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BulnIL_H.js';
import './floatRGBA-Ch4Vq0u_.js';
import './FeatureCommandQueue-KLXpJGOk.js';
import './HighlightCounter-TNO3nUfF.js';
import './popupUtils-mQzaS5q9.js';
import './RefreshableLayerView-DKYJKY1G.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
