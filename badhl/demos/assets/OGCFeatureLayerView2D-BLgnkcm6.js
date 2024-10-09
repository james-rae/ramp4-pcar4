import { aW as e, aX as y, aY as c } from './main-AZ36x38Y.js';
import { X } from './FeatureLayerView2D-CC7j9Yhn.js';
import './preload-helper-dJJaZANz.js';
import './Container-B4aKeMVo.js';
import './highlightReasons-C-bvOsGC.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CiGIdJia.js';
import './LayerView-Hg0tw7WA.js';
import './TechniqueInstance-C5c8PobB.js';
import './UpdateTracking2D-E7rpPCbB.js';
import './TurboLine-DdUIQidE.js';
import './enums-DZmWLm_j.js';
import './earcut-ClmN06JG.js';
import './GeometryUtils-DMocKZtr.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Uhj6lVpM.js';
import './Program-B0PUXE61.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CngOO_Gt.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DHerS-Sw.js';
import './WGLContainer-C_GVvxak.js';
import './ProgramTemplate-BR_sLExp.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BEcj6oC_.js';
import './floatRGBA-CZm2bkwl.js';
import './FeatureCommandQueue-B9O2fC_D.js';
import './HighlightCounter-tsx2zdqh.js';
import './popupUtils-nveosjnV.js';
import './RefreshableLayerView-sMHHbydw.js';

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
