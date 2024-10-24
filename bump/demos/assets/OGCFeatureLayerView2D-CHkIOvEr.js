import { aW as e, aX as y, aY as c } from './main-D8rt8898.js';
import { X } from './FeatureLayerView2D-HTCXsWm4.js';
import './preload-helper-dJJaZANz.js';
import './Container-HhN7wN3p.js';
import './highlightReasons-CWF-4nsV.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BepXDdBt.js';
import './LayerView-C33IPi0A.js';
import './TechniqueInstance-BdqWlNpZ.js';
import './UpdateTracking2D-DdcYUBEU.js';
import './TurboLine-DVAm8qUm.js';
import './enums-DZmWLm_j.js';
import './earcut-ChlbmKOP.js';
import './GeometryUtils-DEGHmVof.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-pYuuNp8f.js';
import './Program-Hi_5fphd.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Nguv0hee.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Dqb8-oEx.js';
import './WGLContainer-B0Ow80p3.js';
import './ProgramTemplate-Catu3QHK.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D_8ew7nQ.js';
import './floatRGBA-DxAaRbvE.js';
import './FeatureCommandQueue-BkEY2mdt.js';
import './HighlightCounter-BDQkBfUC.js';
import './popupUtils-ELKZUNtn.js';
import './RefreshableLayerView-kJmpMZqk.js';

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
