import { a1 as V, d6 as n$1, bT as r, bU as m, d7 as t, bV as a } from './main-jdFDoOPu.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './layerViewUtils-DUOa5TQu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n=class extends(j$1(y$1)){constructor(e){super(e),this.layerViews=new V;}set layerViews(e){this._set("layerViews",n$1(e,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};r([m({cast:t})],n.prototype,"layerViews",null),r([m({readOnly:!0})],n.prototype,"updatingProgress",null),n=r([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;

export { c as default };
