import{aM as h,df as n,V as g,b7 as f,x as w,K as d}from"./main-DeRV24Di.js";import{p as y}from"./SimpleRenderer-BKDnWKtv.js";import{fromJSON as u}from"./jsonUtils-9Jf2jVcg.js";import{d as b}from"./FeatureSet-bQDdN7-L.js";import{S as V,y as S}from"./LayerView-BxXRbEg_.js";import{t as _}from"./GraphicContainer-aZ5CqxiO.js";import{A as T}from"./GraphicsView2D-Z6rnnVfh.js";let c=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const r=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const s=this._popupTemplates.get(i),o=i.hitTest(e);for(const a of o)a.layer=r,a.sourceLayer=r,a.popupTemplate=s;return o}).map(i=>({type:"graphic",graphic:i,layer:r,mapPoint:e}))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.addAttachHandles([h(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:t,featureSet:r,layerDefinition:i}of e){const s=b.fromJSON(r),o=new g(s.features),a=i.drawingInfo,m=t?f.fromJSON(t):null,p=u(a.renderer),l=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:o,renderer:p,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[s.geometryType]=l,this._popupTemplates.set(l,m),s.geometryType!=="polygon"||this.layer.polygonSymbol?s.geometryType!=="polyline"||this.layer.lineSymbol?s.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=p.symbol):this.layer.lineSymbol=p.symbol:this.layer.polygonSymbol=p.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}},n),h(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new y({symbol:e})},n),h(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new y({symbol:e})},n),h(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new y({symbol:e})},n)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};c=w([d("esri.views.2d.layers.GeoRSSLayerView2D")],c);const v=c;export{v as default};
