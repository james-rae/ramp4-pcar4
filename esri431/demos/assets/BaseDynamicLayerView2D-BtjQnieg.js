import { cx as b$1, G as n$1, bT as r, bU as m$1, bV as a$1 } from './main-jdFDoOPu.js';
import { a } from './BitmapContainer-BDMgPT19.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import { _ } from './ExportStrategy-_Kj4mn_J.js';
import { i } from './RefreshableLayerView-BHga9aHT.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-BUclEOgO.js';
import './LabelMetric-25hMjtqs.js';
import './Program-DyGm5N0S.js';
import './BufferObject-Bn5F9NQg.js';
import './VertexElementDescriptor-HfVzOf0q.js';
import './VertexArrayObject-DvEAXDKn.js';
import './ProgramTemplate-CCbsr8Qc.js';
import './vec3f32-0Jah-02g.js';
import './Container-CGyTFWyQ.js';
import './StyleDefinition-ty_7nEaL.js';
import './config-BgJsIw3n.js';
import './earcut-Bc6IkkPv.js';
import './layerViewUtils-DUOa5TQu.js';
import './Bitmap-DL72MdPx.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends(i(j$1(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};r([m$1()],m.prototype,"_strategy",void 0),r([m$1()],m.prototype,"updating",void 0),m=r([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
