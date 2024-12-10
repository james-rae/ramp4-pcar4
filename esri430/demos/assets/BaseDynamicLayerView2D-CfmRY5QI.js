import { ax as b$1, G as n$1, bd as e, be as y, bf as a$1 } from './main-BKGHUZ-u.js';
import { a } from './BitmapContainer-DeaWZiZj.js';
import { f, y as y$1 } from './LayerView-X-OXhP3-.js';
import { _ } from './ExportStrategy-C6yN80DF.js';
import { i } from './RefreshableLayerView-Xw3J9Dhf.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-Bs_L6RaG.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-B0sUbD-h.js';
import './enums-CHdyfzUK.js';
import './Texture-D1GhKtg5.js';
import './enums-CwcDCDam.js';
import './Program-DJKlD9Om.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-ClHY-z3Y.js';
import './vec3f32-CmlAce5k.js';
import './Container-BQ4MSDU5.js';
import './highlightReasons-B6y7Mr8f.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-wmDFWHK9.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-CxPcODnn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(i(f(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],m.prototype,"_strategy",void 0),e([y()],m.prototype,"updating",void 0),m=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
