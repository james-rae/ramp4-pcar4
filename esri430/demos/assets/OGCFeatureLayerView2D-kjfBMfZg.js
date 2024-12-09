import { bd as e, be as y, bf as a$1 } from './main-BKGHUZ-u.js';
import { r as re } from './FeatureLayerView2D-CT-a1rmP.js';
import './preload-helper-dJJaZANz.js';
import './Container-BQ4MSDU5.js';
import './highlightReasons-B6y7Mr8f.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-D1GhKtg5.js';
import './timeSupport-Bt_vQMCy.js';
import './LayerView-X-OXhP3-.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-CJtnmI4E.js';
import './UpdateTracking2D-Dmw8h0n9.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-C6Mx35BO.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-B0sUbD-h.js';
import './Program-DJKlD9Om.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-DneM8isA.js';
import './TileContainer-BDzVhYu8.js';
import './WGLContainer-Bs_L6RaG.js';
import './ProgramTemplate-ClHY-z3Y.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-wmDFWHK9.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-AfDr250Y.js';
import './floatRGBA-BxO-iCwH.js';
import './FeatureCommandQueue-BXyKDrVM.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-BULwEQMC.js';
import './popupUtils-5ITeHoZT.js';
import './RefreshableLayerView-Xw3J9Dhf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends(o(re)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
