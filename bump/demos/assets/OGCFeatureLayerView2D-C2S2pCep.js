import { aW as e, aX as y, aY as c } from './main-B2BaXj4F.js';
import { X } from './FeatureLayerView2D-CTBkIMyD.js';
import './preload-helper-dJJaZANz.js';
import './Container-tph1fhNa.js';
import './highlightReasons-mKXeHfSn.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BfcRt74t.js';
import './LayerView-CWlo3rL2.js';
import './TechniqueInstance-C-_A8AQN.js';
import './UpdateTracking2D-bJf0D-zV.js';
import './TurboLine-BSAKHMbr.js';
import './enums-DZmWLm_j.js';
import './earcut-D96kNmEU.js';
import './GeometryUtils-BFvlJb3H.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-0VQU6aJO.js';
import './Program-D8zoCcXZ.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BQLYmVOB.js';
import './constants-C0QDwCF4.js';
import './TileContainer-24JT4u7V.js';
import './WGLContainer-dTprUMuf.js';
import './ProgramTemplate-B2gci7Fx.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-_CpBWRPM.js';
import './floatRGBA-f9sG97LE.js';
import './FeatureCommandQueue-BVkJGsGS.js';
import './HighlightCounter-C5cG4Ku4.js';
import './popupUtils-BW2qTbJ8.js';
import './RefreshableLayerView-CV5fH9_9.js';

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
