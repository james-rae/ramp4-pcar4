import { aW as e, aX as y, aY as c } from './main-BTSMlyeL.js';
import { X } from './FeatureLayerView2D-B5fHpZxA.js';
import './preload-helper-dJJaZANz.js';
import './Container-TpwbExrd.js';
import './highlightReasons-heOFSWQ_.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BL8MMbJz.js';
import './LayerView-BIWl0LTH.js';
import './TechniqueInstance-WffufdVM.js';
import './UpdateTracking2D-CheeO-eZ.js';
import './TurboLine-BzP5GSeS.js';
import './enums-DZmWLm_j.js';
import './earcut-CLxM1RdS.js';
import './GeometryUtils-CPWP0EPF.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B7eifbZX.js';
import './Program-BoMLNoyR.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CDnr3nri.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CDwQYAVA.js';
import './WGLContainer-mgfhTYoc.js';
import './ProgramTemplate-FBwizGc8.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DywggOHq.js';
import './floatRGBA-DnmWBgnQ.js';
import './FeatureCommandQueue-B8ce-tch.js';
import './HighlightCounter-bWIMY7lq.js';
import './popupUtils-BH7m-HOF.js';
import './RefreshableLayerView-x9AgLRaj.js';

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
