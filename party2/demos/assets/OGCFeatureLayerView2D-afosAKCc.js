import { aW as e, aX as y, aY as c } from './main-CkRHTxdx.js';
import { X } from './FeatureLayerView2D-CYjRX9jG.js';
import './preload-helper-dJJaZANz.js';
import './Container-7s3AOZlL.js';
import './highlightReasons-CpYSLrq6.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DBVsUset.js';
import './LayerView-D9-6Ii_3.js';
import './TechniqueInstance-BkEN8268.js';
import './UpdateTracking2D-C_Fvzahu.js';
import './TurboLine-C2lR1a0k.js';
import './enums-DZmWLm_j.js';
import './earcut-HUHjziyy.js';
import './GeometryUtils-CAZKip_y.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DduZRzkQ.js';
import './Program-CH5Z2JYV.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DtxZYYek.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BAs1H9rt.js';
import './WGLContainer-CDjxaK0Z.js';
import './ProgramTemplate-5LTJR9WX.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper--wsQqmWL.js';
import './floatRGBA-BS_x2qHQ.js';
import './FeatureCommandQueue-DYORICh8.js';
import './HighlightCounter-CCfS7DkO.js';
import './popupUtils-Ba3Wtl45.js';
import './RefreshableLayerView-DoU8tPVe.js';

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
