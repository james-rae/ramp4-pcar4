import{bb as e,bc as t,bd as d,bY as R,eC as $,eF as A,aY as C,aV as O,a0 as P,bH as q,az as x,s as _,bh as l,gV as o,be as E,dK as V,kd as T,cS as H,dL as I,ke as U,G as j,bn as L}from"./main-Cvu-P-7v.js";import{h as N}from"./Container-C-dfBlfy.js";import{c as M,i as w}from"./layerViewUtils-CuYS5zdy.js";let u=class extends R{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([t({readOnly:!0})],u.prototype,"version",null),u=e([d("esri.views.layers.support.ClipArea")],u);const f=u;var g;let p=g=class extends f{constructor(s){super(s),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};e([t({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=g=e([d("esri.views.layers.support.ClipRect")],p);const k=p;var m;const z={base:A,key:"type",typeMap:{extent:C,polygon:O}};let c=m=class extends f{constructor(s){super(s),this.type="geometry",this.geometry=null}clone(){return new m({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};e([t({types:z,json:{read:$,write:!0}})],c.prototype,"geometry",void 0),c=m=e([d("esri.views.layers.support.Geometry")],c);const D=c;let y=class extends f{constructor(s){super(s),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};e([t({type:[[[Number]]],json:{write:!0}})],y.prototype,"path",void 0),y=e([d("esri.views.layers.support.Path")],y);const F=y,v=P.ofType({key:"type",base:null,typeMap:{rect:k,path:F,geometry:D}}),K=s=>{let i=class extends s{constructor(){super(...arguments),this.attached=!1,this.clips=new v,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const r=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new _("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new N),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([l(()=>this.suspended,a=>{this.container&&(this.container.visible=!a)},o),l(()=>this.updateSuspended,a=>{this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},o),l(()=>this.layer?.opacity??1,a=>{this.container&&(this.container.opacity=a)},o),l(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},o),l(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},o),l(()=>this.highlightOptions,a=>this.container.highlightOptions=a,o),E(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},o),l(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:a,scaleRange:S})=>{const b=M(S,a);b!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=b)},o)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const r=this.view?.spatialReference;return r==null||this.supportsSpatialReference(r)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(r){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",r),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(r))):this.updateRequested=!1}hitTest(r,h){return Promise.resolve(null)}supportsSpatialReference(r){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const r=super.getSuspendInfo(),h=!this.spatialReferenceSupported;return h&&(r.spatialReferenceNotSupported=h),r}addAttachHandles(r){this.addHandles(r,"attach")}};return e([t()],i.prototype,"attached",void 0),e([t({type:v,set(r){const h=q(r,this._get("clips"),v);this._set("clips",h)}})],i.prototype,"clips",void 0),e([t()],i.prototype,"container",void 0),e([t({type:x})],i.prototype,"highlightOptions",void 0),e([t()],i.prototype,"moving",void 0),e([t({readOnly:!0})],i.prototype,"spatialReferenceSupported",null),e([t({readOnly:!0})],i.prototype,"updateParameters",void 0),e([t()],i.prototype,"updateRequested",void 0),e([t()],i.prototype,"updating",null),e([t()],i.prototype,"view",void 0),e([t()],i.prototype,"_visibleAtCurrentScale",void 0),e([t({readOnly:!0})],i.prototype,"visibleAtCurrentScale",null),i=e([d("esri.views.2d.layers.LayerView2D")],i),i};let n=class extends V(T(H.EventedMixin(I))){constructor(s){super(s),this._updatingHandles=new U,this.layer=null,this.parent=null}initialize(){this.when().catch(s=>{if(s.name!=="layerview:create-error"){const i=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";j.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${i}')`,s)}})}destroy(){this._updatingHandles=L(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return this.layer?.visible===!0}set visible(s){this._overrideIfSome("visible",s)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const s=this.view.timeExtent,i=this.layer?.visibilityTimeExtent;return!s||!i||!s.intersection(i).isEmpty}canResume(){const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&w(s)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const s=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return w(r)&&this.visibleAtCurrentScale||(s.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(s.outsideVisibilityTimeExtent=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};e([t()],n.prototype,"view",void 0),e([t()],n.prototype,"fullOpacity",null),e([t()],n.prototype,"layer",void 0),e([t()],n.prototype,"parent",void 0),e([t({readOnly:!0})],n.prototype,"suspended",null),e([t({readOnly:!0})],n.prototype,"suspendInfo",null),e([t({readOnly:!0})],n.prototype,"legendEnabled",null),e([t({type:Boolean,readOnly:!0})],n.prototype,"updating",null),e([t({readOnly:!0})],n.prototype,"updatingProgress",null),e([t()],n.prototype,"updateSuspended",null),e([t()],n.prototype,"visible",null),e([t({readOnly:!0})],n.prototype,"visibleAtCurrentScale",null),e([t({readOnly:!0})],n.prototype,"visibleAtCurrentTimeExtent",null),n=e([d("esri.views.layers.LayerView")],n);const J=n;export{D as a,K as f,J as y};