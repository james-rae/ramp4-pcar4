import{d7 as G,fp as H,k as t,o as i,bt as J,bw as U,fZ as k,A as z,f_ as X,V as q,cV as Z,aC as M,e$ as D,cU as $,as as B,eG as R,aN as A,q as I}from"./main-umVzVZ3H.js";import{c as K,b as Q}from"./featureReferenceUtils-Dw00jHO_.js";import{a as g}from"./Cyclical-DshqiaFC.js";import{c as W}from"./Analysis-C2A1JX6h.js";import{X as Y}from"./projection-BM_fbYrD.js";import{S as ee}from"./MultiOriginJSONSupport-BePZ9xpp.js";import{f as te}from"./Layer-BtCA9TIh.js";import{b as ie}from"./OperationalLayer-4BcYHUkF.js";let o=class extends G(X){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&K(this.feature,e.feature)}};t([i({type:J,json:{write:!0}})],o.prototype,"observer",void 0),t([i({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),U(e=>g.normalize(k(e),void 0,!0))],o.prototype,"heading",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),t([i(Q)],o.prototype,"feature",void 0),t([i({json:{read:!1}})],o.prototype,"isValid",null),o=t([z("esri.analysis.Viewshed")],o);const L=o,F=q.ofType(L);let p=class extends W{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(M(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},D))}get viewsheds(){return this._get("viewsheds")||new F}set viewsheds(e){this._set("viewsheds",$(e,this.viewsheds,F))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const r=this.viewsheds.filter(s=>s.observer!=null),y=r.map(s=>s.observer).toArray(),l=Y(y,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,u)=>{const x=r.at(u);return s!=null&&x!=null?this._computeViewshedExtent(this.viewsheds.at(u),s):null}).filter(s=>s!=null).reduce((s,u)=>se(s,u),null)}}_computeViewshedExtent(e,r){const{farDistance:y,heading:l,tilt:s,horizontalFieldOfView:u,verticalFieldOfView:x}=e,{spatialReference:E}=r,b=u/2,V=x/2,O=y/E.metersPerUnit,C=[g.normalize(l-b),l,g.normalize(l+b)],d=B.fromPoint(r),f=m=>{const h=C.map(a=>g.normalize(a-m));if(h[0]>h[2]||u===360)return O;const c=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,v)=>a>v?v:a);return c>90?0:O*Math.cos(R(c))};d.xmax+=f(90),d.xmin-=f(-90),d.ymax+=f(0),d.ymin-=f(180);const w=r.z;if(w!=null){let m=w,h=w;const c=s-90,a=A(c+V,-90,90),v=A(c-V,-90,90),N=E?.isGeographic?y:O;m+=N*_(a),h+=N*_(v);const S=P(V)*N,j=_(c)*S*(1-P(b));s<90&&(m-=j),s>90&&(h-=j),d.zmax=Math.max(m,w),d.zmin=Math.min(h,w)}return d}clear(){this.viewsheds.removeAll()}};function se(e,r){return e==null?r:r==null?e:e.union(r)}function P(e){return Math.cos(R(e))}function _(e){return Math.sin(R(e))}t([i({type:["viewshed"]})],p.prototype,"type",void 0),t([i({cast:Z,type:F,nonNullable:!0})],p.prototype,"viewsheds",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i()],p.prototype,"_extent",void 0),t([i({readOnly:!0})],p.prototype,"extent",null),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([z("esri.analysis.ViewshedAnalysis")],p);const T=p;let n=class extends ie(ee(te)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new T,this.opacity=1}initialize(){this.addHandles(M(()=>this.source,(e,r)=>{r!=null&&r.parent===this&&(r.parent=null),e!=null&&(e.parent=this)},D))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new T)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,y,l){r.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:q.ofType(L),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([I("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([z("esri.layers.ViewshedLayer")],n);const re=n;export{re as default};