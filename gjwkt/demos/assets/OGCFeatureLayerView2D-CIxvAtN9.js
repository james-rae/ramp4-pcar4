import { aW as e, aX as y, aY as c } from './main-C80GNj-k.js';
import { X } from './FeatureLayerView2D-VwZwhAVB.js';
import './preload-helper-dJJaZANz.js';
import './Container-B8xueVBd.js';
import './highlightReasons-uKu8gdcb.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-_Ue9j7Je.js';
import './LayerView-CrXLKgQx.js';
import './TechniqueInstance-CJBGDKSE.js';
import './UpdateTracking2D-DKePQ3b6.js';
import './TurboLine-CZvJYckU.js';
import './enums-DZmWLm_j.js';
import './earcut-BCwbs-Lh.js';
import './GeometryUtils-CGm6UWVV.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C1nuZpmE.js';
import './Program-FnOad3qS.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-hGmJb1LD.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CyeYIkSX.js';
import './WGLContainer-DkTQxIyE.js';
import './ProgramTemplate-BWZTcMqp.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BYBj3Ar_.js';
import './floatRGBA-DUFrC9T7.js';
import './FeatureCommandQueue-BgndmiR2.js';
import './HighlightCounter-u-bJbjBp.js';
import './popupUtils-fuG-WWOL.js';
import './RefreshableLayerView-wkIfxEJX.js';

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
