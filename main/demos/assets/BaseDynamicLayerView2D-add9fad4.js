import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-e8896afa.js';
import { a } from './BitmapContainer-fdb0edeb.js';
import { m as m$1, u } from './LayerView-b9facdb7.js';
import { v } from './ExportStrategy-d7b08652.js';
import { i } from './RefreshableLayerView-4d36c020.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-1eacb699.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-38971afb.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-795e852f.js';
import './Program-7c7f88b0.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-e1f241e6.js';
import './Container-afa02df7.js';
import './highlightReasons-97ba5787.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-50387b57.js';
import './Bitmap-c65b7343.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
