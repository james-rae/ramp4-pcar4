import { ax as b$1, G as n$1, bd as e, be as y, bf as a$1 } from './main-CGBWc59Z.js';
import { a } from './BitmapContainer-CGdxRshE.js';
import { f, y as y$1 } from './LayerView-DUMH7O5f.js';
import { _ } from './ExportStrategy-BcPpnXaD.js';
import { i } from './RefreshableLayerView-DjYf5VMN.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-DmNNClwO.js';
import './definitions-BdwlvHBE.js';
import './LabelMetric-DeEwVo6w.js';
import './enums-CHdyfzUK.js';
import './Texture-C4ft8TUm.js';
import './enums-CwcDCDam.js';
import './Program-DgbP8X_l.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './ProgramTemplate-B06R9gvz.js';
import './vec3f32-CmlAce5k.js';
import './Container-C6eOHu3y.js';
import './highlightReasons-CMNvxoUc.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-BQ3wmzD6.js';
import './layerViewUtils-CRtvGSrJ.js';
import './Bitmap-UR98pJoG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends(i(f(y$1))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||n$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],m.prototype,"_strategy",void 0),e([y()],m.prototype,"updating",void 0),m=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],m);const d=m;

export { d as default };
