import{V as i,cW as l,k as a,o as r,cX as n,A as h}from"./main-uRGA0thB.js";import{j as d,y as o}from"./LayerView-ciwaAsET.js";let t=class extends d(o){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",l(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,s)=>e+s.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,s)=>this.container.addChildAt(e.container,s))}};a([r({cast:n})],t.prototype,"layerViews",null),a([r({readOnly:!0})],t.prototype,"updatingProgress",null),t=a([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const c=t;export{c as default};
