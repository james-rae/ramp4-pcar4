import { bT as r, bU as m, bV as a, a1 as V } from './main-jdFDoOPu.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './layerViewUtils-DUOa5TQu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{constructor(...r){super(...r),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((r=>r.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((r=>r.layer===this.layer?.footprintLayer))}isUpdating(){return !this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return r([m()],s.prototype,"layer",void 0),r([m()],s.prototype,"layerViews",void 0),r([m({readOnly:!0})],s.prototype,"dynamicGroupLayerView",null),r([m({readOnly:!0})],s.prototype,"footprintLayerView",null),s=r([a("esri.views.layers.CatalogLayerView")],s),s};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends(i(j$1(y$1))){constructor(){super(...arguments),this.layerViews=new V;}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};r([m()],l.prototype,"layerViews",void 0),l=r([a("esri.views.2d.layers.CatalogLayerView2D")],l);const c=l;

export { c as default };
