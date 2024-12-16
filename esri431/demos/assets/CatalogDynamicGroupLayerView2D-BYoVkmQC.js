import { bT as r, bU as m, bV as a, a1 as V, fy as k, gR as t, bn as e, gS as d, G as n$1, gT as n$2 } from './main-jdFDoOPu.js';
import { j as j$1, y as y$1 } from './LayerView-BOLJrt05.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGyTFWyQ.js';
import './layerViewUtils-DUOa5TQu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=Symbol(),u=u=>{let y=class extends u{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=k((async()=>{const{layer:e,parent:r}=this,t=r?.footprintLayerView;let s=[];const i=this._createQuery();if(i&&t){const{features:r}=await t.queryFeatures(i);this.suspended||(s=r.map((r=>e.acquireLayer(r))));}this.removeHandles(l),this.addHandles(s,l);}));}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some((e=>e.updating))}enableLayerUpdates(){return t([this._updatingHandles.addWhen((()=>!1===this.parent?.footprintLayerView?.dataUpdating),(()=>this.updateLayers())),this._updatingHandles.add((()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended]),(()=>this.updateLayers())),e((()=>this.removeHandles(l)))])}updateLayers(){this.suspended?this.removeHandles(l):this._updatingHandles.addPromise(d(this._debouncedUpdate()).catch((e=>{n$1.getLogger(this).error(e);})));}_createQuery(){const e=this.parent?.footprintLayerView,r=this.layer?.parent;if(!e||!r||r.destroyed)return null;const{layer:{maximumVisibleSublayers:t},view:{scale:s}}=this;if(!t)return null;const{itemTypeField:i,itemSourceField:a,itemNameField:o,minScaleField:d,maxScaleField:p,objectIdField:l,orderBy:u}=r,y=n$2(`${d} IS NULL OR ${s} <= ${d} OR ${d} = 0`,`${p} IS NULL OR ${s} >= ${p}`),c=u?.find((e=>e.field&&!e.valueExpression)),m=e.createQuery();if(m.returnGeometry=!1,m.num=t,m.outFields=[l,a,o],m.where=n$2(m.where,y),null!=this.unsupportedItemTypes){const e=`${i} NOT IN (${this.unsupportedItemTypes.map((e=>`'${e}'`))})`;m.where=n$2(m.where,e);}return c?.field&&(m.orderByFields=[`${c.field} ${"descending"===c.order?"DESC":"ASC"}`],m.outFields.push(c.field)),m}};return r([m({readOnly:!0})],y.prototype,"creatingLayerViews",null),r([m()],y.prototype,"layer",void 0),r([m()],y.prototype,"layerViews",void 0),r([m({readOnly:!0})],y.prototype,"unsupportedItemTypes",void 0),r([m()],y.prototype,"parent",void 0),r([m({readOnly:!0})],y.prototype,"isUpdating",null),y=r([a("esri.views.layers.CatalogDynamicGroupLayerView")],y),y};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends(u(j$1(y$1))){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V;}attach(){this.addAttachHandles([this.layerViews.on("after-changes",(()=>this._updateStageChildren())),this.enableLayerUpdates()]);}detach(){this.container.removeAllChildren();}update(e){this.updateLayers();}viewChange(){}moveEnd(){this.requestUpdate();}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};i=r([a("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],i);const c=i;

export { c as default };
