import { aX as e$1, aY as y$1, aZ as c$1, c2 as f$1, eP as y$2, eO as n$1, aI as M, aF as j, a4 as V, bu as n$2, ai as p$3, s as s$1, b3 as d$1, gs as A, a_ as v, jU as d$2, dY as s$2, jV as n$3, cV as o, dZ as S$1, jW as h$1, J as s$3, ba as u$1 } from './main-e8896afa.js';
import { h } from './Container-afa02df7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends f$1{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e$1([y$1({readOnly:!0})],t.prototype,"version",null),t=e$1([c$1("esri.views.layers.support.ClipArea")],t);const p$2=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var s;let i=s=class extends p$2{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null;}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom");}};e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),e$1([y$1({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),i=s=e$1([c$1("esri.views.layers.support.ClipRect")],i);const p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var y;const c={base:n$1,key:"type",typeMap:{extent:M,polygon:j}};let n=y=class extends p$2{constructor(o){super(o),this.type="geometry",this.geometry=null;}clone(){return new y({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry");}};e$1([y$1({types:c,json:{read:y$2,write:!0}})],n.prototype,"geometry",void 0),n=y=e$1([c$1("esri.views.layers.support.Geometry")],n);const a$1=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e=class extends p$2{constructor(r){super(r),this.type="path",this.path=[];}commitVersionProperties(){this.commitProperty("path");}};e$1([y$1({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e=e$1([c$1("esri.views.layers.support.Path")],e);const p=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f=V.ofType({key:"type",base:null,typeMap:{rect:p$1,path:p,geometry:a$1}}),m$1=t=>{let d=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null;}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([d$1((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e);}),A),d$1((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate();}),A),d$1((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e);}),A),d$1((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e);}),A),d$1((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e);}),A),d$1((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),A),v((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips);}),A),d$1((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t);}),A)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach();}),(()=>{})):this.when().then((()=>{this.processAttach();}),(()=>{})));}destroy(){this.processDetach(),this.updateRequested=!1;}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate());}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1);}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return !0;const{minScale:s,maxScale:i}=t;return d$2(e,s,i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate());}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1;}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return !0}canResume(){return !!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}addAttachHandles(e){this.addHandles(e,"attach");}};return e$1([y$1()],d.prototype,"attached",void 0),e$1([y$1({type:f,set(e){const t=n$2(e,this._get("clips"),f);this._set("clips",t);}})],d.prototype,"clips",void 0),e$1([y$1()],d.prototype,"container",void 0),e$1([y$1()],d.prototype,"moving",void 0),e$1([y$1({readOnly:!0})],d.prototype,"spatialReferenceSupported",null),e$1([y$1({readOnly:!0})],d.prototype,"updateParameters",void 0),e$1([y$1()],d.prototype,"updateRequested",void 0),e$1([y$1()],d.prototype,"updateSuspended",null),e$1([y$1()],d.prototype,"updating",null),e$1([y$1()],d.prototype,"view",void 0),e$1([y$1({readOnly:!0})],d.prototype,"visibleAtCurrentScale",void 0),e$1([y$1({type:p$3})],d.prototype,"highlightOptions",void 0),d=e$1([c$1("esri.views.2d.layers.LayerView2D")],d),d};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(s$2(n$3(o.EventedMixin(S$1)))){constructor(e){super(e),this._updatingHandles=new h$1,this.layer=null,this.parent=null;}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";s$3.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e);}}));}destroy(){this._updatingHandles=u$1(this._updatingHandles);}get fullOpacity(){return (this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return !this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return !this.suspended&&!0===this.layer?.legendEnabled}get updating(){return !(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return !0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e);}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{},t=this;return t.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return !1}};e$1([y$1()],d.prototype,"fullOpacity",null),e$1([y$1()],d.prototype,"layer",void 0),e$1([y$1()],d.prototype,"parent",void 0),e$1([y$1({readOnly:!0})],d.prototype,"suspended",null),e$1([y$1({readOnly:!0})],d.prototype,"suspendInfo",null),e$1([y$1({readOnly:!0})],d.prototype,"legendEnabled",null),e$1([y$1({type:Boolean,readOnly:!0})],d.prototype,"updating",null),e$1([y$1({readOnly:!0})],d.prototype,"updatingProgress",null),e$1([y$1()],d.prototype,"visible",null),e$1([y$1()],d.prototype,"view",void 0),d=e$1([c$1("esri.views.layers.LayerView")],d);const u=d;

export { a$1 as a, m$1 as m, u };
