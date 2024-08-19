import { aX as e, aY as y, aZ as c } from './main-e8896afa.js';
import { X } from './FeatureLayerView2D-b0a4c108.js';
import './preload-helper-a4975f27.js';
import './Container-afa02df7.js';
import './highlightReasons-97ba5787.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-795e852f.js';
import './LayerView-b9facdb7.js';
import './TechniqueInstance-ad7057ec.js';
import './UpdateTracking2D-2fb6ac7a.js';
import './TurboLine-ee2f2f8e.js';
import './enums-d24bcbbf.js';
import './earcut-50387b57.js';
import './GeometryUtils-dcb300d5.js';
import './Rect-09e0f861.js';
import './LabelMetric-38971afb.js';
import './Program-7c7f88b0.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-28ab0ae2.js';
import './constants-412c3a33.js';
import './TileContainer-3dd0f9b0.js';
import './WGLContainer-1eacb699.js';
import './ProgramTemplate-e1f241e6.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-2db52edf.js';
import './floatRGBA-d20b31a6.js';
import './FeatureCommandQueue-507799d2.js';
import './HighlightCounter-8a053a2f.js';
import './popupUtils-ae8a2208.js';
import './RefreshableLayerView-4d36c020.js';

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
