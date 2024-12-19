import { bT as r, bV as a$1, cC as d$1, cD as P$1, Q as has } from './main-jdFDoOPu.js';
import { r as re } from './FeatureLayerView2D-DFfMejHP.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './timeSupport-D_mI4xo9.js';
import './LayerView-BOLJrt05.js';
import './layerViewUtils-DUOa5TQu.js';
import './TechniqueInstance-Samk-rXg.js';
import './UpdateTracking2D-nlP-taLY.js';
import './BidiEngine-SYarjht-.js';
import './GeometryUtils-BXKvwdJG.js';
import './Rect--0fzStUh.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './BindType-DC_OuQGA.js';
import './Util-BoF0V3b-.js';
import './TileContainer-BA3pMXmd.js';
import './WGLContainer-BUclEOgO.js';
import './VertexArrayObject-DvEAXDKn.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './vec3f32-0Jah-02g.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';
import './FeatureCommandQueue-BYG4gPcz.js';
import './constants-D-RiuwZo.js';
import './CircularArray-DyZiGQlG.js';
import './SDFHelper-DpiTEPJi.js';
import './floatRGBA-DHjcfk0_.js';
import './HighlightCounter-Cjy4OhJF.js';
import './popupUtils-BdW6RFNo.js';
import './RefreshableLayerView-BHga9aHT.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=r([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
