import { bT as r, bU as m, d7 as t, bV as a$1, a1 as V, cC as d$1, f9 as C$1, d6 as n$1 } from './main-jdFDoOPu.js';
import { y as y$1, j as j$1 } from './LayerView-BOLJrt05.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './layerViewUtils-DUOa5TQu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let h=class extends y$1{constructor(i){super(i),this.type="group",this.layerViews=new V;}destroy(){this.layerViews.length=0;}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i;}));}initialize(){this.addHandles([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),d$1((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)));}),C$1),d$1((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}));}),C$1)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]});}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",n$1(i,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return !!e?.visible}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i;}));}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((i=>d$1((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible);}),(()=>this._applyExclusiveVisibility(e?i:null)))),C$1))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)));}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e());}};r([m({readOnly:!0})],h.prototype,"creatingLayerViews",null),r([m({cast:t})],h.prototype,"layerViews",null),r([m({readOnly:!0})],h.prototype,"updatingProgress",null),r([m()],h.prototype,"view",void 0),h=r([a$1("esri.views.layers.GroupLayerView")],h);const n=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends(j$1(n)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=r([a$1("esri.views.2d.layers.GroupLayerView2D")],a);const o=a;

export { o as default };
