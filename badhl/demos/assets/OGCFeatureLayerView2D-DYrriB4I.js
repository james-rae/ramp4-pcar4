import { aW as e, aX as y, aY as c } from './main-CqCpezy9.js';
import { X } from './FeatureLayerView2D-CShV6gJH.js';
import './preload-helper-dJJaZANz.js';
import './Container-DxERH07A.js';
import './highlightReasons-DoWM-YD7.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-D3zuyP37.js';
import './LayerView-COQgueGi.js';
import './TechniqueInstance-PEbY6M5b.js';
import './UpdateTracking2D-BDaAyfUf.js';
import './TurboLine-CRiVNMOh.js';
import './enums-DZmWLm_j.js';
import './earcut-CJCUw5Gy.js';
import './GeometryUtils-BZlTeDHq.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C_ElLr12.js';
import './Program-C0FYGol2.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CS_LpWm0.js';
import './constants-C0QDwCF4.js';
import './TileContainer-H0kJbAzT.js';
import './WGLContainer-U9FDRyq_.js';
import './ProgramTemplate-CZ1uOrbv.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DRwG0UE4.js';
import './floatRGBA-DG-aXTkH.js';
import './FeatureCommandQueue-X4WkftNn.js';
import './HighlightCounter-X-6WX9-i.js';
import './popupUtils-ClmsqOsY.js';
import './RefreshableLayerView-Bwor5wLn.js';

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
