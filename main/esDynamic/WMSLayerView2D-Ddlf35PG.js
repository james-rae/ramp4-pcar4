import{k as i,o as m,A as b,C as F,s as f,D as S,E as C,n as R,aE as q,au as U}from"./main-BL33V88t.js";import{a as M}from"./BitmapContainer-C5bSKv6g.js";import{j as V,y as L}from"./LayerView-cy0EMMKV.js";import{_ as W}from"./ExportStrategy-NokF7yp9.js";import{i as A}from"./RefreshableLayerView-Ck46dkRb.js";import{a as H}from"./ExportWMSImageParameters-D6Qi3cK_.js";import{i as _}from"./timeSupport-p2PXzoQj.js";const z=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return _(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(a,s){const{layer:o}=this;if(!a)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:d}=o;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const r=this.createFetchPopupFeaturesQuery(a);if(!r)return[];const{extent:n,width:h,height:p,x:c,y:l}=r;if(!(n&&h&&p))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:h,height:p});const y=await o.fetchFeatureInfo(n,h,p,c,l);return S(s),y}};return i([m()],e.prototype,"exportImageParameters",void 0),i([m({readOnly:!0})],e.prototype,"exportImageVersion",null),i([m()],e.prototype,"layer",void 0),i([m({readOnly:!0})],e.prototype,"timeExtent",null),e=i([b("esri.views.layers.WMSLayerView")],e),e};let u=class extends z(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new M}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{C(e)||R.getLogger(this).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:a}=t;this.bitmapContainer=new M,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:a}=this,{x:s,y:o}=t,{spatialReference:d}=e;let r,n=0,h=0;if(a.children.some(y=>{const{width:w,height:v,resolution:E,x:g,y:x}=y,I=g+E*w,P=x-E*v;return s>=g&&s<=I&&o<=x&&o>=P&&(r=new U({xmin:g,ymin:P,xmax:I,ymax:x,spatialReference:d}),n=w,h=v,!0)}),!r)return null;const p=r.width/n,c=Math.round((s-r.xmin)/p),l=Math.round((r.ymax-o)/p);return{extent:r,width:n,height:h,x:c,y:l}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,a,s){return this.layer.fetchImageBitmap(t,e,a,{timeExtent:this.timeExtent,...s})}};i([m()],u.prototype,"strategy",void 0),i([m()],u.prototype,"updating",void 0),u=i([b("esri.views.2d.layers.WMSLayerView2D")],u);const B=u;export{B as default};
