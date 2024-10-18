import { aW as e, aX as y, aY as c } from './main-DeqYYyRz.js';
import { X } from './FeatureLayerView2D-_yws5zUd.js';
import './preload-helper-dJJaZANz.js';
import './Container-B_JomOSD.js';
import './highlightReasons-Qg3izzKo.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CYLNAKaz.js';
import './LayerView-D6RLcVsK.js';
import './TechniqueInstance-sHncRvMR.js';
import './UpdateTracking2D-DTn7DQZx.js';
import './TurboLine-C056nSOT.js';
import './enums-DZmWLm_j.js';
import './earcut-Dywx_pu6.js';
import './GeometryUtils-B1zzZzIQ.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BI8mzEuc.js';
import './Program-BfvX8gam.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DotSqiFj.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DCvpE_wV.js';
import './WGLContainer-BStXV_Ut.js';
import './ProgramTemplate-BSuECy8o.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BRjlOga7.js';
import './floatRGBA-D_PCMZNw.js';
import './FeatureCommandQueue-BRGL8UBX.js';
import './HighlightCounter-CNyY67hm.js';
import './popupUtils-B-CA7EHy.js';
import './RefreshableLayerView-dBbHDVIg.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
