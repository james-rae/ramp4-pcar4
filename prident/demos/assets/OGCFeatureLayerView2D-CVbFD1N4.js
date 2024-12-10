import { aW as e, aX as y, aY as c } from './main-Da2YJtfY.js';
import { X } from './FeatureLayerView2D-WkIHR9tp.js';
import './preload-helper-dJJaZANz.js';
import './Container-ATB6F2ds.js';
import './highlightReasons-B6RpZUjj.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CyQ4zmKN.js';
import './LayerView-YmDno4Ov.js';
import './TechniqueInstance-cXCES1pY.js';
import './UpdateTracking2D-_Kuyvtil.js';
import './TurboLine-XiC3GVJN.js';
import './enums-DZmWLm_j.js';
import './earcut-Djtgr63C.js';
import './GeometryUtils-C7cmDnyO.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CFUtnL7W.js';
import './Program-xc3OZrr4.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BURcqFAh.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BxOFiYuX.js';
import './WGLContainer-BYeDucDm.js';
import './ProgramTemplate-vG6v4_C3.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-9hHyX0dg.js';
import './floatRGBA-Cs18iuLp.js';
import './FeatureCommandQueue-CVNGmhuq.js';
import './HighlightCounter-CnrrI3o-.js';
import './popupUtils-BTeuya9L.js';
import './RefreshableLayerView-BIUknzYP.js';

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
