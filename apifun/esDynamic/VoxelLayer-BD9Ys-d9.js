import{aI as ot,cC as K,aX as R,G as g,gD as N,x as t,z as o,bG as le,K as m,dN as st,bt as V,aK as E,V as c,dk as ae,aP as pe,iJ as ue,o as Q,M as Te,n as T,bh as rt,bC as fe,dr as nt,O as lt,X as at,s as be,bz as qe,D as Ae,b7 as pt}from"./main-DeRV24Di.js";import{S as ut}from"./MultiOriginJSONSupport-B-tcjtAX.js";import{s as De,A as Se,Q as Pe,c as ct,i as dt,e as yt,u as ht}from"./vec32-BiJj_MLt.js";import{f as mt}from"./Layer-BYwzhU09.js";import{i as gt}from"./APIKeyMixin-giwC8Loz.js";import{l as vt}from"./ArcGISService-Dj4O_HhX.js";import{e as ft}from"./CustomParametersMixin-DSX_tBvo.js";import{b as bt}from"./OperationalLayer-aipQXicj.js";import{j as St}from"./PortalLayer-DGPFQ0q_.js";import{t as xt}from"./ScaleRangeLayer-DCHlWw-h.js";import{R as wt}from"./SceneService-BSZ0XI0o.js";import{d as Vt,y as jt}from"./commonProperties-Bm8d6jM2.js";import{y as J}from"./Field-Dcbw6k6h.js";import{Z as Nt}from"./FieldsIndex-BaSDCm-j.js";import{d as Le,l as zt}from"./TimeInfo-cNeglzDY.js";import{a as z}from"./Cyclical-eND5cvL7.js";import{v as It}from"./persistable-BfXoOf8c.js";import{b as xe,x as Rt}from"./quat-ChoDadUo.js";import{e as ce}from"./quatf64-C16JxGFv.js";import{c as Fe,u as Me}from"./common-CYWrYyJl.js";import{i as Ce,p as _e}from"./TimeExtent-Bh6vqv-J.js";import{p as Tt}from"./popupUtils-BJb0P8hy.js";const v=ot(),Oe=ce(),Be=ce(),Ee=ce(),$e=K(0,0,1),qt=K(0,1,0),At=K(1,0,0);function W(e){De(v,e),Se(v,v);const i=Math.atan2(v[1],v[0]),s=xe(ce(),$e,-i);Pe(v,v,s);const r=-1*Math.atan2(v[2],v[0]);return[Fe(i)+270,Fe(r)+90]}function de(e,i){return xe(Be,$e,Me(e-270)),xe(Ee,qt,Me(i-90)),Rt(Oe,Be,Ee),De(v,At),Pe(v,v,Oe),Se(v,v),[v[0],v[1],v[2]]}let q=class extends R.ClonableMixin(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=de(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=de(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{write:!0}})],q.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),le(e=>z.normalize(N(e),0,!0))],q.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),le(e=>z.normalize(N(e),0,!0))],q.prototype,"tilt",null),t([o({type:[Number],json:{write:{isRequired:!0}}})],q.prototype,"normal",void 0),t([o({type:[Number],json:{write:{isRequired:!0}}})],q.prototype,"point",void 0),q=t([m("esri.layers.voxel.VoxelSlice")],q);const ye=q;let b=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(i),0,!0)}};t([o({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),t([o({type:String,json:{origins:{service:{read:st},"web-scene":{write:{isRequired:!0}}},write:!0}}),It({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),t([o({type:[V],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),t([o({type:[ye],json:{write:!0}})],b.prototype,"slices",void 0),t([o({type:V,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=t([m("esri.layers.voxel.VoxelSection")],b);const we=b;let Y=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Y.prototype,"diffuseFactor",void 0),t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Y.prototype,"specularFactor",void 0),Y=t([m("esri.layers.voxel.VoxelSimpleShading")],Y);const ke=Y;let A=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],A.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],A.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],A.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],A.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],A.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"type",void 0),A=t([m("esri.layers.voxel.VoxelFormat")],A);const Ue=A;let j=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),t([o({type:Ue,json:{write:!0}})],j.prototype,"originalFormat",void 0),t([o({type:Ue,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=t([m("esri.layers.voxel.VoxelVariable")],j);const Dt=j;let C=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],C.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],C.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],C.prototype,"label",void 0),t([o({type:Boolean,json:{default:!1,write:!0}})],C.prototype,"colorLocked",void 0),C=t([m("esri.layers.voxel.VoxelIsosurface")],C);const Je=C;let H=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.color=null,this.position=0}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],H.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=t([m("esri.layers.voxel.VoxelColorStop")],H);const Ve=H;let ee=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};t([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],ee.prototype,"opacity",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],ee.prototype,"position",void 0),ee=t([m("esri.layers.voxel.VoxelOpacityStop")],ee);const je=ee;let te=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([o({type:Boolean,json:{default:!1,write:!0}})],te.prototype,"enabled",void 0),t([o({type:[Number],json:{write:{isRequired:!0}}})],te.prototype,"range",void 0),te=t([m("esri.layers.voxel.VoxelRangeFilter")],te);const Pt=te;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let D=class extends R.ClonableMixin(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(Ve)),this.opacityStops=new(c.ofType(je))}set colorStops(e){this._set("colorStops",ae(e,this._get("colorStops"),c.ofType(Ve)))}set opacityStops(e){this._set("opacityStops",ae(e,this._get("opacityStops"),c.ofType(je)))}getPreviousNext(e,i,s){let r=e;for(;--r>0&&i[r].type!==s&&i[r].type!==w.Both;);let n=e;const a=i.length;for(;++n<a&&i[n].type!==s&&i[n].type!==w.Both;);return[r,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],s=[],r=1e-5;for(const p of this.colorStops){if(!p.color)return e;s.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:w.Color})}if(this.opacityStops.length===0)for(const p of s)i.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const d=pe(u.position,0,1),h=Math.round(255*pe(1-u.opacity,0,1));let f=!1;for(const y of s)if(y.type===w.Color&&Math.abs(y.position-d)<r){y.color.a=h,y.type=w.Both,f=!0;break}f||s.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}s.sort((u,d)=>u.position<d.position?-1:1);const p=s.length;for(let u=0;u<p;++u){const d=s[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,f]=this.getPreviousNext(u,s,w.Alpha);if(h!==-1&&f!==p){const y=(d.position-s[h].position)/(s[f].position-s[h].position);d.color.a=Math.round(ue(s[h].color.a,s[f].color.a,y))}else d.color.a=h!==-1?s[h].color.a:s[f].color.a}else{const[h,f]=this.getPreviousNext(u,s,w.Color);if(h!==-1&&f!==p){const y=(d.position-s[h].position)/(s[f].position-s[h].position),F=s[h].color,oe=s[f].color;he.forEach(M=>{d.color[M]=Math.round(ue(F[M],oe[M],y))})}else h!==-1?he.forEach(y=>{d.color[y]=s[h].color[y]}):he.forEach(y=>{d.color[y]=s[f].color[y]})}}for(const u of s)i.push({color:u.color,position:u.position})}i[0].position=0,i[i.length-1].position=1;let n=0,a=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>i[a].position;)n=a++;const d=(u-i[n].position)/(i[a].position-i[n].position),h=i[n].color,f=i[a].color,y=new E;he.forEach(F=>{y[F]=Math.round(ue(h[F],f[F],d))}),y.a=pe(1-ue(h.a,f.a,d)/255,0,1),e.push(y)}return e}getColorForContinuousDataValue(e,i){const s=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||s.length<256)return null;let r=this.stretchRange[0],n=this.stretchRange[1];if(r>n){const p=r;r=n,n=p}e=pe(e,r,n);const a=s[Math.round((e-r)/(n-r)*(this._colorMapSize-1))].clone();return i||(a.a=1),a}};t([o({type:["linear","nearest"],json:{write:!0}})],D.prototype,"interpolation",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"stretchRange",void 0),t([o({type:c.ofType(Ve),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],D.prototype,"colorStops",null),t([o({type:c.ofType(je),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],D.prototype,"opacityStops",null),t([o({type:Pt,json:{write:!0}})],D.prototype,"rangeFilter",void 0),t([o({type:[E],clonable:!1,json:{read:!1}})],D.prototype,"rasterizedTransferFunction",null),D=t([m("esri.layers.voxel.VoxelTransferFunctionStyle")],D);const Lt=D,he=["r","g","b"];let $=class extends R.ClonableMixin(g){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],$.prototype,"color",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],$.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],$.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],$.prototype,"label",void 0),$=t([m("esri.layers.voxel.VoxelUniqueValue")],$);const We=$;var Ne;let _=Ne=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(We)),this.isosurfaces=new(c.ofType(Je))}clone(){return new Ne({variableId:this.variableId,label:this.label,transferFunction:Q(this.transferFunction),uniqueValues:Q(this.uniqueValues),isosurfaces:Q(this.isosurfaces)})}};t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"variableId",void 0),t([o({type:String,json:{write:!0}})],_.prototype,"label",void 0),t([o({type:Lt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],_.prototype,"transferFunction",void 0),t([o({type:c.ofType(We),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],_.prototype,"uniqueValues",void 0),t([o({type:c.ofType(Je),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&i}}}}})],_.prototype,"isosurfaces",void 0),_=Ne=t([m("esri.layers.voxel.VoxelVariableStyle")],_);const Xe=_;function Ge(e){const i=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(i==null)return{didParse:!1};const[,s,r,n,a,p,u,d,h,f,y,F,oe]=i;let M="seconds";const ge=s.charAt(0).toLowerCase();ge==="d"?M="days":ge==="h"?M="hours":ge==="m"&&(M="minutes");const X=parseInt(r,10);if(Number.isNaN(X))return{didParse:!1};const I=parseInt(n,10);if(Number.isNaN(I)||I<1||I>12)return{didParse:!1};const O=parseInt(a,10);if(Number.isNaN(O)||O<1||O>31)return{didParse:!1};if(I===2){const Z=X%4==0&&(X%100!=0||X%400==0);if(Z&&O>29||!Z&&O>28)return{didParse:!1}}else if((I===4||I===6||I===9||I===11)&&O>30)return{didParse:!1};const se=parseInt(p,10);if(Number.isNaN(se)||se<0||se>23)return{didParse:!1};const re=parseInt(u,10);if(Number.isNaN(re)||re<0||re>59)return{didParse:!1};const ne=parseInt(d,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let ve=1,B=0,U=0;if(y&&(ve=y==="-"?-1:1),F){if(B=parseInt(F,10),Number.isNaN(B)||B<0)return{didParse:!1};if(B!==0){const Z=ve*B;if(Z<-12||Z>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Qe=`${X}`.padStart(4,"0"),Ye=`${I}`.padStart(2,"0"),He=`${O}`.padStart(2,"0"),et=`${se}`.padStart(2,"0"),tt=`${re}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let G="Z";return B===0&&U===0||(G=ve>0?"+":"-",G+=`${B}`.padStart(2,"0"),G+=":",G+=`${U}`.padStart(2,"0")),{didParse:!0,unit:M,reference:new Date(`${Qe}-${Ye}-${He}T${et}:${tt}:${it}.000${G}`)}}let me=class extends g{constructor(){super(...arguments),this.values=null}};t([o({type:[Number],json:{write:!0}})],me.prototype,"values",void 0),me=t([m("esri.layers.voxel.VoxelIrregularSpacing")],me);const Ft=me;let ie=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([o({type:Number,json:{write:!0}})],ie.prototype,"scale",void 0),t([o({type:Number,json:{write:!0}})],ie.prototype,"offset",void 0),ie=t([m("esri.layers.voxel.VoxelRegularSpacing")],ie);const Mt=ie;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};t([o({type:Ft,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),t([o({type:Mt,json:{write:!0}})],S.prototype,"regularSpacing",void 0),t([o({type:Number,json:{write:!0}})],S.prototype,"size",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"unit",void 0),t([o({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=t([m("esri.layers.voxel.VoxelDimension")],S);const Ct=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Te.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let a=0;a<3;++a)n[a]<2?n[a]=1:n[a]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(i[1]-i[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const s=this.dimensions[3];i=s.quantity==="time",i&&s.unit!==null&&(i=Ge(s.unit).didParse)}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],i=[],s=Ge(e.unit);if(s.didParse){if(e.isRegular){const r=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let a=0;a<e.size;++a){const p=r+n*a;i.push(Ce(s.reference,p,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let r=0;r<e.irregularSpacing.values.length;++r){const n=e.irregularSpacing.values[r];i.push(Ce(s.reference,n,s.unit))}}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return T.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!rt(this.spatialReference,e.spatialReference))return T.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=K(e.x,e.y,e.z??0);ct(i,i,this.originInLayerSpace3D),dt(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,n=s.irregularSpacing.values,a=s.isPositiveUp?1:-1,p=n.reduce((u,d)=>Math.abs(a*d-r)<Math.abs(a*u-r)?d:u);for(let u=0;u<n.length;++u)if(n[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new fe({x:0,y:0,spatialReference:this.spatialReference});const i=nt(e);if(yt(i,i,this.voxelSizeInLayerSpaceSigned),ht(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new fe({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new fe({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([o({type:[Ct],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),t([o({type:Te,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),t([o({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),t([o({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),t([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),t([o({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=t([m("esri.layers.voxel.VoxelVolume")],x);const Ze=x;var ze;let k=ze=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new ze;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"apronWidth",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"brickSize",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"maxLodLevel",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"nodeSize",void 0),k=ze=t([m("esri.layers.voxel.VoxelVolumeIndex")],k);const _t=k;let P=class extends R.ClonableMixin(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=de(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=W(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=de(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{default:!0,write:!0}})],P.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],P.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),le(e=>z.normalize(N(e),0,!0))],P.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),le(e=>z.normalize(N(e),0,!0))],P.prototype,"tilt",null),t([o({type:[Number],json:{write:{isRequired:!0}}})],P.prototype,"normal",void 0),t([o({type:[Number],json:{write:{isRequired:!0}}})],P.prototype,"point",void 0),P=t([m("esri.layers.voxel.VoxelDynamicSection")],P);const Ie=P;var Re;let L=Re=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(ye)),this.dynamicSections=new(c.ofType(Ie))}set slices(e){this._set("slices",ae(e,this._get("slices"),c.ofType(ye)))}set dynamicSections(e){this._set("dynamicSections",ae(e,this._get("dynamicSections"),c.ofType(Ie)))}clone(){return new Re({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:Q(this.slices),dynamicSections:Q(this.dynamicSections)})}};t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"volumeId",void 0),t([o({type:Number,json:{default:1,write:!0}})],L.prototype,"verticalExaggeration",void 0),t([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],L.prototype,"exaggerationMode",void 0),t([o({type:Number,json:{default:0,write:!0}})],L.prototype,"verticalOffset",void 0),t([o({type:c.ofType(ye),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],L.prototype,"slices",null),t([o({type:c.ofType(Ie),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],L.prototype,"dynamicSections",null),L=Re=t([m("esri.layers.voxel.VoxelVolumeStyle")],L);const Ke=L;let l=class extends wt(vt(bt(St(xt(ut(ft(gt(mt)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new ke,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(c.ofType(Ke)),this.variableStyles=new(c.ofType(Xe)),this.sections=new(c.ofType(we))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",lt(e,T.getLogger(this)))}load(e){const i=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(at).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(e,i){super.read(e,i),i?.origin==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new be("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new be("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new be("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,s){if(e!=null&&typeof e=="object"){const r=qe.fromJSON(e,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(i.volumes)){const n=Ze.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const a=n.dimensions[2];if(a.isRegular){let p=a.regularSpacing.offset,u=a.regularSpacing.offset+a.regularSpacing.scale*(a.size-1);if(p>u){const d=p;p=u,u=d}r.zmin=p,r.zmax=u}}}return r}return null}get fields(){const e=[new J({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new J({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const s of this.variables){const r=new J({name:s.name,alias:s.description,domain:null,editable:!1,length:128,type:s.renderingFormat.continuity==="discrete"?"string":"double"});e.push(r)}const i=this.getVolume(null);if(i!=null){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const s=new J({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(s);const r=new J({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(r)}if(i.volumeType!=="xyt"){const s=new J({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(s)}}return e}get fieldsIndex(){return this.loaded?new Nt(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const i=this.fields;return Tt({fields:i,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=e??this.currentVariableId,!this.variableStyles||i===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===i);return s<0?null:this.variableStyles.at(s)}getVariable(e){let i=-1;if(i=e??this.currentVariableId,!this.variables||i===-1)return null;const s=this.variables.findIndex(r=>r.id===i);return s<0?null:this.variables.at(s)}getVolume(e){const i=this.getVariable(e);return i!=null?this.volumes.find(({id:s})=>s===i.volumeId):null}get timeInfo(){const e=this.getVolume(null);if(e?.volumeType!=="xyzt")return null;const i=e.timeStops;if(!i?.length)return null;const s=new _e({start:i[0],end:i.at(-1)});return new Le({fullTimeExtent:s,stops:i})}getVolumeStyle(e){const i=this.getVariable(e);return i!=null?this.volumeStyles.find(({volumeId:s})=>s===i.volumeId):null}getColorForContinuousDataValue(e,i,s){const r=this.getVariable(e);if(r==null||r.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const a=this.variableStyles.at(n);return a?.transferFunction?a.transferFunction.getColorForContinuousDataValue(i,s):null}getSections(){const e=[];for(const i of this.sections)e.push(new we({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const s=this._getVariable(i);if(s!=null){const r=i.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),T.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const a=this.getColorForContinuousDataValue(r.variableId,n.value,!1);a==null||a.equals(n.color)||(n.color=a)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else T.getLogger(this).error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const s=this._getVolumeFromVolumeId(i.volumeId);if(s!=null){const r=i.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else T.getLogger(this).error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const s of this.variables)if(s.id===i)return s;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,s){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=K(e.normal[0],e.normal[1],e.normal[2]);return Se(r,r),!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<1e-6)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};t([o({type:["Voxel"]})],l.prototype,"operationalLayerType",void 0),t([o(Vt)],l.prototype,"legendEnabled",void 0),t([o({json:{write:!0}})],l.prototype,"title",void 0),t([o(jt)],l.prototype,"url",null),t([o({type:c.ofType(we),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],l.prototype,"sections",void 0),t([o({type:V,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],l.prototype,"currentVariableId",void 0),t([o({type:c.ofType(Ke),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],l.prototype,"volumeStyles",void 0),t([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],l.prototype,"renderMode",void 0),t([o({type:c.ofType(Xe),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],l.prototype,"variableStyles",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],l.prototype,"enableSlices",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],l.prototype,"enableSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],l.prototype,"enableDynamicSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],l.prototype,"enableIsosurfaces",void 0),t([o({type:ke,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],l.prototype,"shading",void 0),t([o({type:["show","hide"]})],l.prototype,"listMode",void 0),t([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"opacity",void 0),t([o({type:c.ofType(Dt)})],l.prototype,"variables",void 0),t([o({type:c.ofType(Ze)})],l.prototype,"volumes",void 0),t([o({type:_t})],l.prototype,"index",void 0),t([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"minScale",void 0),t([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],l.prototype,"maxScale",void 0),t([o({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([o({readOnly:!0,json:{name:"serviceVersion"}})],l.prototype,"version",void 0),t([Ae("service","version")],l.prototype,"readVersion",null),t([o({type:qe})],l.prototype,"fullExtent",void 0),t([Ae("service","fullExtent",["fullExtent"])],l.prototype,"readFullExtent",null),t([o({readOnly:!0,clonable:!1,json:{read:!1}})],l.prototype,"fields",null),t([o({readOnly:!0})],l.prototype,"fieldsIndex",null),t([o({type:Boolean,json:{name:"disablePopup",read:{reader:(e,i)=>!i.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,i,s){i[s]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],l.prototype,"popupEnabled",void 0),t([o({type:pt,json:{name:"popupInfo",write:!0}})],l.prototype,"popupTemplate",void 0),t([o({readOnly:!0,json:{read:!1}})],l.prototype,"defaultPopupTemplate",null),t([o({type:Le,readOnly:!0,json:{read:!1}})],l.prototype,"timeInfo",null),t([o({type:_e,json:{read:!1}})],l.prototype,"timeExtent",void 0),t([o({type:zt,json:{read:!1}})],l.prototype,"timeOffset",void 0),t([o({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],l.prototype,"useViewTime",void 0),l=t([m("esri.layers.VoxelLayer")],l);const Ot=l;export{Ot as default};
