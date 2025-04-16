import{x as e,z as t,K as I,aL as X,co as Y,aX as D,G as O,aF as _,o as B,s as Q,aV as Z}from"./main-DTtQVgOw.js";import ee from"./FeatureLayer-226KTIoK.js";import{f as te}from"./TemporalLayer-CLZuoFn6.js";import{p as ie}from"./TimeExtent-BEjCyW0L.js";import{A as q}from"./interfaces-Cwm0pihk.js";let v=class extends X{set horizontalWKID(i){i?Y({wkid:+i})?this._set("horizontalWKID",+i):this._set("horizontalWKID",i):this._set("horizontalWKID",null)}set verticalWKID(i){i?this._set("verticalWKID",isFinite(i)&&Y({wkid:+i})?+i:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:i,focalLength:o,principalOffsetPoint:r,radialDistortionCoefficients:s,tangentialDistortionCoefficients:y}=this;return i?.length>1&&!Number.isNaN(o)&&r?.length>1&&s?.length>1&&y?.length>1}};e([t({json:{write:!0}})],v.prototype,"affineTransformations",void 0),e([t({json:{write:!0}})],v.prototype,"focalLength",void 0),e([t({json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),e([t({json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),e([t({json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),e([t({json:{write:!0}})],v.prototype,"horizontalWKID",null),e([t({json:{write:!0}})],v.prototype,"verticalWKID",null),e([t({json:{write:!0}})],v.prototype,"x",void 0),e([t({json:{write:!0}})],v.prototype,"y",void 0),e([t({json:{write:!0}})],v.prototype,"z",void 0),e([t({json:{write:!0}})],v.prototype,"type",void 0),v=e([I("esri.layers.orientedImagery.core.CameraOrientation")],v);const $=v;let f=class extends D.ClonableMixin(O.JSONSupportMixin($)){constructor(){super(...arguments),this.type=1}toString(){const{type:i,horizontalWKID:o,verticalWKID:r,x:s,y,z:c,heading:u,pitch:d,roll:m,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[i,o,r,s,y,c,u,d,m];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>Number.isNaN(n)?"":n).join("|")}};e([t({json:{write:!0}})],f.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],f.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],f.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],f.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],f.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"heading",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],f.prototype,"z",void 0),f=e([I("esri.layers.orientedImagery.core.CameraOrientationHPR")],f);const oe=f;let S=class extends D.ClonableMixin(O.JSONSupportMixin($)){constructor(){super(...arguments),this.type=4}toString(){const{type:i,latitude:o,longitude:r,ellipsoidRadius:s,squaredEccentricity:y,properties:c}=this,u=`${c}`.split("|");return u.splice(1,1),`${i}|${o}|${r}|${s}|${y}|${u.join("|")}`}};e([t({json:{write:!0}})],S.prototype,"type",void 0),e([t({json:{write:!0},type:Number})],S.prototype,"latitude",void 0),e([t({json:{write:!0},type:Number})],S.prototype,"longitude",void 0),e([t({json:{write:!0},type:Number})],S.prototype,"ellipsoidRadius",void 0),e([t({json:{write:!0},type:Number})],S.prototype,"squaredEccentricity",void 0),e([t({json:{write:!0}})],S.prototype,"properties",void 0),S=e([I("esri.layers.orientedImagery.core.CameraOrientationLTP")],S);const re=S;let h=class extends D.ClonableMixin(O.JSONSupportMixin($)){constructor(){super(...arguments),this.type=2}toString(){const{type:i,horizontalWKID:o,verticalWKID:r,x:s,y,z:c,omega:u,phi:d,kappa:m,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[i,o,r,s,y,c,u,d,m];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>isNaN(n)?"":n).join("|")}};e([t({json:{write:!0}})],h.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],h.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],h.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],h.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],h.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"omega",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"phi",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"kappa",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],h.prototype,"z",void 0),h=e([I("esri.layers.orientedImagery.core.CameraOrientationOPK")],h);const ne=h;let g=class extends D.ClonableMixin(O.JSONSupportMixin($)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:i,focalLength:o,principalOffsetPoint:r,radialDistortionCoefficients:s,tangentialDistortionCoefficients:y}=this;return i?.length>1||!Number.isNaN(o)||r?.length>1||s?.length>1||y?.length>1}toString(){const{type:i,horizontalWKID:o,verticalWKID:r,x:s,y,z:c,yaw:u,pitch:d,roll:m,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[i,o,r,s,y,c,u,d,m];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>Number.isNaN(n)?"":n).join("|")}};e([t({json:{write:!0}})],g.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],g.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"yaw",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],g.prototype,"z",void 0),g=e([I("esri.layers.orientedImagery.core.CameraOrientationYPR")],g);const ae=g;var x;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(x||(x={}));const W=new Map;W.set(`${x.OPK}`,{desc:"Using Omega Phi Kappa",constructor:ne}),W.set(`${x.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:oe}),W.set(`${x.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:ae}),W.set(`${x.LTP}`,{desc:"Using Local Tangent Plane",constructor:re});let C=class extends D.ClonableMixin(O){constructor(){super(...arguments),this.url=null}};e([t({type:Number,json:{write:!0}})],C.prototype,"lod",void 0),e([t({type:String,json:{write:!0}})],C.prototype,"rasterFunction",void 0),e([t({type:String,json:{write:!0}})],C.prototype,"url",void 0),C=e([I("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],C);let V=class extends D.ClonableMixin(O){constructor(){super(...arguments),this.constantElevation=null}};e([t({type:Number,json:{write:!0}})],V.prototype,"constantElevation",void 0),V=e([I("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],V);const se=i=>i!=null&&typeof i.constantElevation=="number";function pe(i,o,r){return o&&(i=`${o}${i}`),r&&(i+=`${r}`),i}function le(i,o,r){let{url:s}=i;return s?(s=pe(s,o,r),new C({...i,url:s})):null}function ye(i,o,r){return i&&(se(i)?new V(i):le(i,o,r))}const A=new _({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),U=new _({Feet:"feet",Meter:"meter"}),k=new _({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),F=new Map;function ce(i){const[o,r,s,y,c,u,d,m,j,P,w,b,N,p,n,T,E,z,K,L,R,M]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:c,omega:u,phi:d,kappa:m,...G([j,P,w,b,N,p],[T,E],[z,K,L],[R,M],n)}}F.set(`${x.HPR}`,ue),F.set(`${x.YPR}`,de),F.set(`${x.OPK}`,ce),F.set(`${x.LTP}`,me);const H=i=>{const o=i.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(o.length===i.length)return o};function G(i,o,r,s,y){const c=H(i),u=H(o),d=H(r),m=H(s);return{affineTransformations:c?.length===6?c:void 0,focalLength:c?.length===6?parseFloat(y):void 0,principalOffsetPoint:u?.length!==2?[0,0]:u,radialDistortionCoefficients:d?.length!==3?[0,0,0]:d,tangentialDistortionCoefficients:m?.length!==2?[0,0]:m}}function ue(i){const[o,r,s,y,c,u,d,m,j,P,w,b,N,p,n,T,E,z,K,L,R,M]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:c,heading:u,pitch:d,roll:m,...G([j,P,w,b,N,p],[T,E],[z,K,L],[R,M],n)}}function de(i){const[o,r,s,y,c,u,d,m,j,P,w,b,N,p,n,T,E,z,K,L,R,M]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:c,yaw:u,pitch:d,roll:m,...G([j,P,w,b,N,p],[T,E],[z,K,L],[R,M],n)}}function me(i){const[o,r,s,y,c,...u]=i.slice(1),d=F.get(c),m=W.get(c)?.constructor;return!d||!m?null:{latitude:o,longitude:r,ellipsoidRadius:s,squaredEccentricity:y,properties:new m(d([c,"",...u]))}}function fe(i){return Array.isArray(i)&&i?.length===9&&!i.some(isNaN)}const he=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","imageGeometryField","imageReferenceField","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),J=(i,o)=>!he.has(o)&&i,ge=(i,o,r)=>{const s=`orientedImageryProperties.${i}`;return{name:s,write:o?{ignoreOrigin:!0,target:s,writer:o}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:s,reader:r}:{ignoreOrigin:!0}}};function ve(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function l(i,o,r,s){const{name:y,write:c,read:u}=ge(i,o,r),d={name:y,write:c,read:u,origins:{service:{name:`orientedImageryInfo.${y}`,write:o,read:r},"web-scene":{name:y,write:J(c,i),read:J(u,i)},"web-map":{name:y,write:c,read:u}}};return s&&d.origins&&(d.type=s,d.origins["web-map"].type=s,d.origins["web-scene"].type=s),d}let a=class extends ee{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imageGeometryField="ImageGeometry",this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageReferenceField="OIObjectID",this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:o,demPathSuffix:r}=this;return ye(i,o,r)}async save(i){return this._debouncedSaveOperations(q.SAVE,i)}async saveAs(i,o){return this._debouncedSaveOperations(q.SAVE_AS,o,i)}findFirstValidLayerId(i){return i.layers?.find(o=>this.supportedSourceTypes.has(o.type))?.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Q("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([t({type:Number,json:l("cameraHeading")})],a.prototype,"cameraHeading",void 0),e([t({type:Number,json:l("cameraHeight")})],a.prototype,"cameraHeight",void 0),e([t({type:Number,json:l("cameraPitch")})],a.prototype,"cameraPitch",void 0),e([t({type:Number,json:l("cameraRoll")})],a.prototype,"cameraRoll",void 0),e([t({type:Number,json:l("coveragePercent")})],a.prototype,"coveragePercent",void 0),e([t({type:String,json:l("demPathPrefix")})],a.prototype,"demPathPrefix",void 0),e([t({type:String,json:l("demPathSuffix")})],a.prototype,"demPathSuffix",void 0),e([t({type:String,json:l("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0),e([t({type:String,json:l("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0),e([t({type:Object,json:l("elevationSource")})],a.prototype,"elevationSource",void 0),e([t({readOnly:!0})],a.prototype,"effectiveElevationSource",null),e([t({type:Number,json:l("farDistance")})],a.prototype,"farDistance",void 0),e([t()],a.prototype,"geometryType",void 0),e([t({type:Number,json:l("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0),e([t({type:String,json:l("horizontalMeasurementUnit")})],a.prototype,"horizontalMeasurementUnit",void 0),e([t({type:String,json:{...l("imageGeometryField"),default:"ImageGeometry"}})],a.prototype,"imageGeometryField",void 0),e([t({type:String,json:l("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0),e([t({type:String,json:l("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0),e([t({type:String,json:{...l("imageReferenceField"),default:"OIObjectID"}})],a.prototype,"imageReferenceField",void 0),e([t({type:Number,json:l("imageRotation")})],a.prototype,"imageRotation",void 0),e([t({type:Number,json:l("maximumDistance")})],a.prototype,"maximumDistance",void 0),e([t({type:Number,json:l("nearDistance")})],a.prototype,"nearDistance",void 0),e([t({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],a.prototype,"operationalLayerType",void 0),e([t({json:{...l("orientationAccuracy",(i,o,r)=>{Z(r,i.join(";"),o)},i=>{const o=i?.split(";")?.map(Number);return fe(o)?o:[0,0,0,0,0,0,0,0,0]},String)}})],a.prototype,"orientationAccuracy",void 0),e([t({json:{...l("orientedImageryType",k.write,k.read,k.jsonValues.slice(1))}})],a.prototype,"orientedImageryType",void 0),e([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),e([t({type:A.apiValues,json:{...l("timeIntervalUnit",A.write,A.read,A.jsonValues)}})],a.prototype,"timeIntervalUnit",void 0),e([t(ve(B(te)))],a.prototype,"useViewTime",void 0),e([t({type:Number,json:l("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0),e([t({type:U.apiValues,json:{...l("verticalMeasurementUnit",U.write,U.read,U.jsonValues)}})],a.prototype,"verticalMeasurementUnit",void 0),e([t({type:String,json:l("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0),e([t({type:String,json:l("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0),e([t({type:ie,json:{origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"visibilityTimeExtent",void 0),a=e([I("esri.layers.OrientedImageryLayer")],a);const we=a;export{we as default};
