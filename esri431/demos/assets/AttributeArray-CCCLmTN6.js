const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HUDMaterial.glsl-Ch1dz9zu.js","./main-jdFDoOPu.js","./preload-helper-dJJaZANz.js","./main-CRG1_KF0.css","./QueryEngine-BdnYaqLM.js","./WhereClause-Cmgb1p74.js","./TimeOnly-CWeyHmrP.js","./timeSupport-B-_28reI.js","./QueryEngineCapabilities-Dh6IsAQ1.js","./utils-BCQ0Q03W.js","./utils-BRboXXE6.js","./utils-Crc5AT6Y.js","./PooledRBush-DUcxEBYC.js","./Indices-Bo7FLkhm.js","./glUtil-DOHFqFFb.js","./VertexElementDescriptor-HfVzOf0q.js","./NormalAttribute.glsl-DxbPQHnV.js","./interfaces-Cp1cox0n.js","./VertexAttribute-BxkhPj4z.js","./basicInterfaces-Cirm-D74.js","./NestedMap-Ch8IuLl0.js","./mat4f64-Cw8nJbLB.js","./Util-BoF0V3b-.js","./InterleavedLayout-RshuL9Ca.js","./BufferView-BjlYh8fP.js","./types-E8ca035p.js","./Octree-BExqX1cV.js","./sphere-CvWAdV_f.js","./mat3f64-DKAwfC1r.js","./plane-CBOt8dOS.js","./quatf64-CvJnKmwc.js","./IntersectorInterfaces-DPeWXlfT.js","./BufferObject-Bn5F9NQg.js","./boundedPlane-_F0novMl.js","./lineSegment-mPW8N6M_.js","./VertexArrayObject-DvEAXDKn.js","./doublePrecisionUtils-D_5e9yUd.js","./floatRGBA-DHjcfk0_.js","./renderState-C20Rdq9l.js","./projectVectorToVector-D7Op_XnY.js","./projectPointToVector-CuNlzNiq.js","./computeTranslationToOriginAndRotation-BpsM5e_w.js","./MeshLocalVertexSpace-Cc-jLTni.js","./vec3f32-0Jah-02g.js","./orientedBoundingBox-BLsytmCg.js","./quat-CBMGRihX.js","./spatialReferenceEllipsoidUtils-Cmgcuzrm.js","./triangle-KKJHoQSk.js","./BindType-DC_OuQGA.js"])))=>i.map(i=>d[i]);
import { b$ as U$2, Q as has, bT as r$6, bU as m$b, bV as a$g, ez as b$3, ap as n$d, it as n$e, iE as n$f, iu as e$q, ef as r$7, ed as o$p, he as q$4, iH as l$a, ek as E$5, q5 as o$q, b6 as r$8, c as c$b, d9 as l$b, lp as a$i, hX as E$6, aO as r$9, aq as r$a, aW as R$5, ij as O$7, gU as X, ik as I$3, H as H$3, iw as _$4, iG as e$r, e1 as u$a, d_ as c$d, nb as i$g, gj as j$1, ab as s$b, t_ as o$u, mu as l$c, cC as d$f, cD as P$2, s as s$c, h0 as o$w, h5 as n$h, G as n$i, bp as n$j, cS as p$a, cW as D$1, cZ as G$1, cX as m$c, lm as t$j, h$ as _$5, jT as t$k, ft as S$6, iY as r$e, ob as f$f, g4 as n$l, t$ as c$e, cV as L$1, lk as u$c, du as o$x, f4 as Z, m9 as tt, aJ as u$d, hc as t$l, J as s$e, u0 as i$i, lb as m$d, p3 as u$f, mC as l$d, d1 as u$g, eW as R$6, u1 as S$7, u2 as Z$1, e2 as s$f, am as _$6, ao as A$4, u3 as H$4, u4 as G$2, d$ as g$6, al as P$3, gm as N$4, dZ as t$o, i_ as I$4, i$ as v$6, b_ as y$4, aK as i$k } from './main-jdFDoOPu.js';
import { t as t$m } from './requestImageUtils-BD2doz0P.js';
import { s as s$a, i as i$h, a as a$j, O as O$8, e as e$s, n as n$k, u as u$e } from './basicInterfaces-Cirm-D74.js';
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { s as s$d } from './Util-BoF0V3b-.js';
import { H as H$5 } from './InterleavedLayout-RshuL9Ca.js';
import { n as n$c, a as a$h, t as t$i, S as S$5, b as n$g, u as u$b, c as t$n, o as o$y, r as r$f } from './NormalAttribute.glsl-DxbPQHnV.js';
import { o as o$o, t as t$h, r as r$d } from './interfaces-Cp1cox0n.js';
import { e as e$n } from './VertexAttribute-BxkhPj4z.js';
import { a as a$f } from './BindType-DC_OuQGA.js';
import './boundedPlane-_F0novMl.js';
import { E as E$4, U as U$3 } from './sphere-CvWAdV_f.js';
import { B as B$4, o as o$r, g as g$5, r as r$b, c as c$c, p as p$9, f as f$e } from './renderState-C20Rdq9l.js';
import { e as e$o, o as o$v } from './mat3f64-DKAwfC1r.js';
import { e as e$p, o as o$s } from './mat4f64-Cw8nJbLB.js';
import { I as I$2, L } from './orientedBoundingBox-BLsytmCg.js';
import { x as x$2, c as c$f, y as y$3, u as u$h, q as q$5, i as i$j } from './BufferView-BjlYh8fP.js';
import { o as o$t, r as r$c } from './doublePrecisionUtils-D_5e9yUd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$g(n,t=!1){return n<=U$2?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$m(e){e.vertex.code.add(o$o`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o$o.int(n$c.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o$o.int(n$c.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o$o.int(n$c.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o$o.int(n$c.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a$e = class a{constructor(a,i,e,r,t=null){if(this.name=a,this.type=i,this.arraySize=t,this.bind={[a$f.Pass]:null,[a$f.Draw]:null},r)switch(e){case a$f.Pass:this.bind[a$f.Pass]=r;break;case a$f.Draw:this.bind[a$f.Draw]=r;}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s$9 = class s extends a$e{constructor(r,s){super(r,"sampler2D",a$f.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$l(){return !!has("enable-feature:objectAndLayerId-rendering")}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c$a({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(o$o`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add(o$o`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$n = class o extends a$e{constructor(r,o){super(r,"vec3",a$f.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$k = class e extends a$e{constructor(r,e){super(r,"vec3",a$f.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$m = class o extends a$e{constructor(r,o){super(r,"float",a$f.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$l = class o extends a$e{constructor(r,o){super(r,"mat3",a$f.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$j = class e extends a$e{constructor(r,e){super(r,"mat3",a$f.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$i = class e extends a$e{constructor(r,e){super(r,"mat4",a$f.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let T$5=class T extends b$3{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1;}};r$6([m$b()],T$5.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),r$6([m$b()],T$5.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),r$6([m$b()],T$5.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),r$6([m$b()],T$5.prototype,"DECONFLICTOR_SHOW_GRID",void 0),r$6([m$b()],T$5.prototype,"LABELS_SHOW_BORDER",void 0),r$6([m$b()],T$5.prototype,"TEXT_SHOW_BASELINE",void 0),r$6([m$b()],T$5.prototype,"TEXT_SHOW_BORDER",void 0),r$6([m$b()],T$5.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),r$6([m$b()],T$5.prototype,"OVERLAY_SHOW_CENTER",void 0),r$6([m$b()],T$5.prototype,"SHOW_POI",void 0),r$6([m$b()],T$5.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),r$6([m$b()],T$5.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),r$6([m$b()],T$5.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),r$6([m$b()],T$5.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),r$6([m$b()],T$5.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),r$6([m$b()],T$5.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),r$6([m$b()],T$5.prototype,"I3S_TREE_SHOW_TILES",void 0),r$6([m$b()],T$5.prototype,"I3S_SHOW_MODIFICATIONS",void 0),r$6([m$b()],T$5.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),r$6([m$b()],T$5.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),r$6([m$b()],T$5.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),r$6([m$b()],T$5.prototype,"LINE_WIREFRAMES",void 0),T$5=r$6([a$g("esri.views.3d.support.debugFlags")],T$5);const t$f=new T$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A$3;!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",A[A.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",A[A.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",A[A.HUD_MATERIAL=12]="HUD_MATERIAL",A[A.LABEL_MATERIAL=13]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=14]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",A[A.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",A[A.DRAPED_WATER=17]="DRAPED_WATER",A[A.VOXEL=18]="VOXEL",A[A.MAX_SLOTS=19]="MAX_SLOTS";}(A$3||(A$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o$k(o){o.attributes.add(e$n.POSITION,"vec3"),o.vertex.code.add(o$o`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function v$5(r,o){r.include(o$k);const e=r.vertex;e.include(c$a,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new e$k("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$k("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$j("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$i("transformProjFromView",(r=>r.transformProjFromView)),new o$l("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$n("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$n("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(o$o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(o$o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?o$o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o$o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$k("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(o$o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(o$o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}let F$3 = class F extends t$h{constructor(){super(...arguments),this.transformWorldFromViewTH=n$d(),this.transformWorldFromViewTL=n$d(),this.transformViewFromCameraRelativeRS=e$o(),this.transformProjFromView=e$p();}};let W$2 = class W extends t$h{constructor(){super(...arguments),this.transformWorldFromModelRS=e$o(),this.transformWorldFromModelTH=n$d(),this.transformWorldFromModelTL=n$d();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c$9(o,a){switch(a.normalType){case a$h.Attribute:case a$h.Compressed:o.include(t$i,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new o$l("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$j("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add(o$o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a$h.ScreenDerivative:o.vertex.code.add(o$o`void forwardNormal() {}`);break;default:n$e(a.normalType);case a$h.COUNT:}}let f$d = class f extends F$3{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$o();}};let n$b = class n extends W$2{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e$o(),this.toMapSpace=n$f();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O$6=new Map([[e$n.POSITION,0],[e$n.NORMAL,1],[e$n.NORMALCOMPRESSED,1],[e$n.UV0,2],[e$n.COLOR,3],[e$n.COLORFEATUREATTRIBUTE,3],[e$n.SIZE,4],[e$n.TANGENT,4],[e$n.CENTEROFFSETANDDISTANCE,5],[e$n.SYMBOLCOLOR,5],[e$n.FEATUREATTRIBUTE,6],[e$n.INSTANCEFEATUREATTRIBUTE,6],[e$n.INSTANCECOLOR,7],[e$n.OBJECTANDLAYERIDCOLOR,7],[e$n.INSTANCEOBJECTANDLAYERIDCOLOR,7],[e$n.ROTATION,8],[e$n.INSTANCEMODEL,8],[e$n.INSTANCEMODELNORMAL,12],[e$n.INSTANCEMODELORIGINHI,11],[e$n.INSTANCEMODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let r$5 = class r{constructor(){this.id=e$q();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let x$1 = class x{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=n$d(),this._tmpMbs=E$4(),this._tmpObb=new I$2,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=r$7(t);}applyToVertex(t,s,r){const e=o$p(q$3,t,s,r),i=o$p(z$2,t,s,r+this.componentLocalOriginLength),o=this._totalOffset/r$7(i);return q$4(this._tmpVertex,e,i,o),this._tmpVertex}applyToAabb(t){const s=this.componentLocalOriginLength,r=t[0],e=t[1],i=t[2]+s,o=t[3],a=t[4],n=t[5]+s,h=Math.abs(r),f=Math.abs(e),l=Math.abs(i),m=Math.abs(o),p=Math.abs(a),c=Math.abs(n),_=.5*(1+Math.sign(r*o))*Math.min(h,m),u=.5*(1+Math.sign(e*a))*Math.min(f,p),g=.5*(1+Math.sign(i*n))*Math.min(l,c),M=Math.max(h,m),b=Math.max(f,p),v=Math.max(l,c),T=Math.sqrt(_*_+u*u+g*g),x=Math.sign(h+r),O=Math.sign(f+e),y=Math.sign(l+i),d=Math.sign(m+o),V=Math.sign(p+a),L=Math.sign(c+n),j=this._totalOffset;if(T<j)return t[0]-=(1-x)*j,t[1]-=(1-O)*j,t[2]-=(1-y)*j,t[3]+=d*j,t[4]+=V*j,t[5]+=L*j,t;const I=j/Math.sqrt(M*M+b*b+v*v),w=j/T,q=w-I,z=-q;return t[0]+=r*(x*z+w),t[1]+=e*(O*z+w),t[2]+=i*(y*z+w),t[3]+=o*(d*q+I),t[4]+=a*(V*q+I),t[5]+=n*(L*q+I),t}applyToMbs(t){const s=r$7(U$3(t)),r=this._totalOffset/s;return q$4(U$3(this._tmpMbs),U$3(t),U$3(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/s,this._tmpMbs}applyToObb(t){return L(t,this._totalOffset,this._totalOffset,l$a.Global,this._tmpObb),this._tmpObb}};let O$5 = class O{constructor(t=0){this.offset=t,this.sphere=E$4(),this.tmpVertex=n$d();}applyToVertex(t,s,r){const e=this.objectTransform.transform,i=o$p(q$3,t,s,r),o=E$5(i,i,e),a=this.offset/r$7(o);q$4(o,o,o,a);const h=this.objectTransform.inverse;return E$5(this.tmpVertex,o,h),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/r$7(t);q$4(t,t,t,r);const e=this.offset/r$7(s);q$4(s,s,s,e);}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=r$7(U$3(t)),r=this.offset/s;return q$4(U$3(this.sphere),U$3(t),U$3(t),r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}};const y$2=new O$5;function d$e(t){return null!=t?(y$2.offset=t,y$2):null}new x$1;const q$3=n$d(),z$2=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u$9(e){return Math.abs(e*e*e)}function f$c(e,t,a){const r=a.parameters;return C$4.scale=Math.min(r.divisor/(t-r.offset),1),C$4.factor=u$9(e),C$4}function m$a(t,a){return o$q(t*Math.max(a.scale,a.minScaleFactor),t,a.factor)}function h$b(e,t,a){const r=f$c(e,t,a);return r.minScaleFactor=0,m$a(1,r)}function d$d(e,t,a,r){r.scale=h$b(e,t,a),r.factor=0,r.minScaleFactor=a.minScaleFactor;}function p$8(e,t,a=[0,0]){const r=Math.min(Math.max(t.scale,t.minScaleFactor),1);return a[0]=e[0]*r,a[1]=e[1]*r,a}function v$4(e,t,a,r){return m$a(e,f$c(t,a,r))}const C$4={scale:0,factor:0,minScaleFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i$f(r,i,n,o,l){let s=(n.screenLength||0)*r.pixelRatio;null!=l&&(s=v$4(s,o,i,l));const a=s*Math.tan(.5*r.fovY)/(.5*r.fullHeight);return r$8(a*i,n.minWorldLength||0,null!=n.maxWorldLength?n.maxWorldLength:1/0)}function n$a(t,e){let i=!1;for(const n in e){const o=e[n];void 0!==o&&(Array.isArray(o)?Array.isArray(t[n])&&c$b(o,t[n])||(t[n]=o.slice(),i=!0):t[n]!==o&&(i=!0,t[n]=o));}return i}const o$j={multiply:1,ignore:2,replace:3,tint:4};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t$e = class t{constructor(t,o){this._module=t,this._load=o;}get(){return this._module}async reload(){return this._module=await this._load(),this._module}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let r$4 = class r{constructor(r,i,s){this._context=r,this._locations=s,this._textures=new Map,this._freeTextureUnits=new l$b({deallocator:null}),this._glProgram=r.programCache.acquire(i.generate("vertex"),i.generate("fragment"),s),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBindPass(this),this.bindDraw=i.generateBindDraw(this),this._fragmentUniforms=a$i()?i.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform2iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,e){if(null==e?.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),this._fragmentUniforms?.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n$9 = class n{constructor(o,s,a,n,l=O$6){this.release=n,this.locations=l,this.primitiveType=E$6.TRIANGLES,this.key=s.key,this._program=new r$4(o.rctx,a.get().build(s),l),this._pipeline=this.initializePipeline(s),this.reload=async e=>{if(e&&await a.reload(),!this.key.equals(s.key))throw new Error("Configuration was changed after construction, cannot reload shader");r$9(this._program),this._program=new r$4(o.rctx,a.get().build(s),l),this._pipeline=this.initializePipeline(s);};}destroy(){this._program=r$9(this._program),this._pipeline=null;}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}getPipeline(i,e){return this._pipeline}initializePipeline(i){return B$4({blending:o$r,colorWrite:g$5})}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e$h;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT";}(e$h||(e$h={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n$8 = class n extends r$5{constructor(r,t){super(),this.type=e$h.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=O$6,this._pp0=r$a(0,0,1),this._pp1=r$a(0,0,0),this._parameters=new t,n$a(this._parameters,r),this.validateParameters(this._parameters);}get parameters(){return this._parameters}update(e){return !1}setParameters(e,r=!0){n$a(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged());}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged());}_parametersChanged(){this.repository?.materialChanged(this);}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return !1}intersectDraped(e,r,t,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,r,t,this._pp0,this._pp1,i)}};var p$7;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(p$7||(p$7={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var o$i;!function(o){o[o.NONE=0]="NONE",o[o.ColorAlpha=1]="ColorAlpha",o[o.FrontFace=2]="FrontFace",o[o.COUNT=3]="COUNT";}(o$i||(o$i={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O$4=r$b(R$5.ONE,R$5.ZERO,R$5.ONE,R$5.ONE_MINUS_SRC_ALPHA);function T$4(r){return r===o$i.FrontFace?null:O$4}function a$d(r){switch(r){case o$i.NONE:return c$c;case o$i.ColorAlpha:return O$4;case o$i.FrontFace:case o$i.COUNT:return null}}function l$9(r){if(r.draped)return null;switch(r.oitPass){case o$i.NONE:case o$i.FrontFace:return r.writeDepth?p$9:null;case o$i.ColorAlpha:case o$i.COUNT:return null}}const A$2=5e5,C$3={factor:-1,units:-2};function N$3(r){return r?C$3:null}function f$b(r,n=O$7.LESS){return r===o$i.NONE||r===o$i.FrontFace?n:O$7.LEQUAL}function i$e(n,t){const u=S$5(t);return n===o$i.ColorAlpha?u?{buffers:[X.COLOR_ATTACHMENT0,X.COLOR_ATTACHMENT1,X.COLOR_ATTACHMENT2]}:{buffers:[X.COLOR_ATTACHMENT0,X.COLOR_ATTACHMENT1]}:u?{buffers:[X.COLOR_ATTACHMENT0,X.COLOR_ATTACHMENT1]}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
({func:O$7.LESS});({func:O$7.ALWAYS});const e$g={mask:255},f$a={function:{func:O$7.ALWAYS,ref:s$a.OutlineVisualElementMask,mask:s$a.OutlineVisualElementMask},operation:{fail:I$3.KEEP,zFail:I$3.KEEP,zPass:I$3.ZERO}},o$h={function:{func:O$7.ALWAYS,ref:s$a.OutlineVisualElementMask,mask:s$a.OutlineVisualElementMask},operation:{fail:I$3.KEEP,zFail:I$3.KEEP,zPass:I$3.REPLACE}};({function:{func:O$7.EQUAL,ref:s$a.OutlineVisualElementMask,mask:s$a.OutlineVisualElementMask},operation:{fail:I$3.KEEP,zFail:I$3.KEEP,zPass:I$3.KEEP}});({function:{func:O$7.NOTEQUAL,ref:s$a.OutlineVisualElementMask,mask:s$a.OutlineVisualElementMask},operation:{fail:I$3.KEEP,zFail:I$3.KEEP,zPass:I$3.KEEP}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n$7({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==s||H$3(s,_$4))&&null==c&&(null==t||1===t)&&(null==r||1===r)}const t$d=e$r(1,1,.5),o$g=e$r(0,.6,.2),s$8=e$r(0,1,.2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$f = class e extends a$e{constructor(r,e){super(r,"vec2",a$f.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$c(e){e.varyings.add("linearDepth","float");}function i$d(e){e.vertex.uniforms.add(new e$f("nearFar",((e,a)=>a.camera.nearFar)));}function d$c(e){e.vertex.code.add(o$o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);}function n$6(r,n){const{vertex:s}=r;switch(n.output){case n$g.Color:case n$g.ColorEmission:if(n.receiveShadows)return t$c(r),void s.code.add(o$o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case n$g.Shadow:case n$g.ShadowHighlight:case n$g.ShadowExcludeHighlight:case n$g.ViewshedShadow:return r.include(v$5,n),t$c(r),i$d(r),d$c(r),void s.code.add(o$o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(o$o`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$e(e){e.vertex.code.add(o$o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function P$1(e,s){m$9(e,s,new o$n("slicePlaneOrigin",((e,i)=>g$4(s,e,i))),new o$n("slicePlaneBasis1",((e,i)=>I$1(s,e,i,i.slicePlane?.basis1))),new o$n("slicePlaneBasis2",((e,i)=>I$1(s,e,i,i.slicePlane?.basis2))));}function m$9(e,s,...i){if(!s.hasSlicePlane){const i=o$o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}const a=o$o`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=o$o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=s.hasSliceHighlight?o$o`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o$o`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i).code.add(a),e.fragment.uniforms.add(...i).code.add(a),e.fragment.code.add(o);}function p$6(e,s,i){return e.instancedDoublePrecision?o$p(b$2,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function h$a(e,s){return null!=e?c$d(B$3,s.origin,e):s.origin}function H$2(s,i,a){return s.hasSliceTranslatedView?null!=i?i$g(S$4,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g$4(e,s,a){if(null==a.slicePlane)return _$4;const l=p$6(e,s,a),o=h$a(l,a.slicePlane),r=H$2(e,l,a);return null!=r?E$5(B$3,o,r):o}function I$1(e,s,o,r){if(null==r||null==o.slicePlane)return _$4;const t=p$6(e,s,o),n=h$a(t,o.slicePlane),f=H$2(e,t,o);return null!=f?(u$a(v$3,r,n),E$5(B$3,n,f),E$5(v$3,v$3,f),c$d(v$3,v$3,B$3)):r}const b$2=n$d(),B$3=n$d(),v$3=n$d(),S$4=e$p();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o$f(o){d$c(o),o.vertex.code.add(o$o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(o$o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$e = class o extends a$e{constructor(r,o){super(r,"mat4",a$f.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f$9(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",_$4):r.uniforms.add(new o$n("cameraPosition",((r,e)=>o$p(v$2,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function d$b(e,a){if(!a.instancedDoublePrecision)return void e.uniforms.add(new e$i("proj",((r,e)=>e.camera.projectionMatrix)),new o$e("view",((e,i)=>i$g(l$8,i.camera.viewMatrix,e.origin))),new o$n("localOrigin",(r=>r.origin)));const o=r=>o$p(v$2,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new e$i("proj",((r,e)=>e.camera.projectionMatrix)),new e$i("view",((e,i)=>i$g(l$8,i.camera.viewMatrix,o(i)))),new e$k("localOrigin",((r,e)=>o(e))));}const l$8=e$p(),v$2=n$d();function p$5(r){r.uniforms.add(new e$i("viewNormal",((r,e)=>e.camera.viewInverseTransposeMatrix)));}function w$2(r){r.uniforms.add(new o$m("pixelRatio",((r,e)=>e.camera.pixelRatio/e.overlayStretch)));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f$8=e$o();function M$2(r,n){const m=n.hasModelTransformation,x=n.instancedDoublePrecision;m&&(r.vertex.uniforms.add(new e$i("model",(e=>e.modelTransformation??o$s))),r.vertex.uniforms.add(new e$j("normalLocalOriginFromModel",(r=>(j$1(f$8,r.modelTransformation??o$s),f$8))))),n.instanced&&x&&(r.attributes.add(e$n.INSTANCEMODELORIGINHI,"vec3"),r.attributes.add(e$n.INSTANCEMODELORIGINLO,"vec3"),r.attributes.add(e$n.INSTANCEMODEL,"mat3"),r.attributes.add(e$n.INSTANCEMODELNORMAL,"mat3"));const M=r.vertex;x&&(M.include(c$a,n),M.uniforms.add(new o$n("viewOriginHi",((e,r)=>o$t(o$p(O$3,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),O$3))),new o$n("viewOriginLo",((e,r)=>r$c(o$p(O$3,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),O$3))))),M.code.add(o$o`
    vec3 getVertexInLocalOriginSpace() {
      return ${m?x?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":x?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${x?o$o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),M.code.add(o$o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${m?x?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":x?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),n.output===n$g.Normal&&(p$5(M),M.code.add(o$o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${m?x?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":x?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n.hasVertexTangents&&M.code.add(o$o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${m?x?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":x?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`);}const O$3=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$d = class e extends a$e{constructor(r,e){super(r,"int",a$f.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i$c(i,t){t.hasSymbolColors?(i.include(e$m),i.attributes.add(e$n.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(o$o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$d("colorMixMode",(o=>o$j[o.colorMixMode]))),i.vertex.code.add(o$o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d$a;function o$d(o,v){switch(v.textureCoordinateType){case d$a.Default:return o.attributes.add(e$n.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d$a.Compressed:return o.attributes.add(e$n.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d$a.Atlas:return o.attributes.add(e$n.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(e$n.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(o$o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$e(v.textureCoordinateType);case d$a.None:return void o.vertex.code.add(o$o`void forwardTextureCoordinates() {}`);case d$a.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT";}(d$a||(d$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$c(e,d){d.hasVertexColors?(e.attributes.add(e$n.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o$o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o$o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o$o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s$7(e){e.vertex.code.add(o$o`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o$o`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(o$o`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o$o`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o$o`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o$o`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function t$b(e){e.uniforms.add(new e$k("screenSizePerspective",(e=>i$b(e.screenSizePerspective))));}function o$c(e){e.uniforms.add(new e$k("screenSizePerspectiveAlignment",(e=>i$b(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function i$b(a){return o$p(n$5,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const n$5=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$b = class e extends a$e{constructor(r,e){super(r,"vec4",a$f.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a$c(e,r){const c=e.vertex;r.hasVerticalOffset?(f$7(c),r.hasScreenSizePerspective&&(e.include(s$7),o$c(c),f$9(e.vertex,r)),c.code.add(o$o`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?o$o`vec3 worldNormal = normalize(worldPos + localOrigin);`:o$o`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?o$o`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o$o`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(o$o`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const s$6=n$f();function f$7(r){r.uniforms.add(new e$b("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,i=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return s$b(s$6,c*a,i,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$a(e,t){if(t.output!==n$g.ObjectAndLayerIdColor)return e.vertex.code.add(o$o`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(o$o`void outputObjectAndLayerIdColor() {}`);const a=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(a?e$n.INSTANCEOBJECTANDLAYERIDCOLOR:e$n.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(o$o`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${a?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(o$o`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a$b(a){a.code.add(o$o`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$9(e,d){switch(d.output){case n$g.Shadow:case n$g.ShadowHighlight:case n$g.ShadowExcludeHighlight:case n$g.ViewshedShadow:e.fragment.include(a$b),e.fragment.code.add(o$o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$8 = class e extends a$e{constructor(r,e){super(r,"ivec2",a$f.Pass,((s,o,i)=>s.setUniform2iv(r,e(o,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s$5 = class s extends a$e{constructor(r,s){super(r,"sampler2D",a$f.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function g$3(g,d){const{fragment:c}=g;d.output===n$g.Highlight?(c.uniforms.add(new s$5("depthTexture",((i,e)=>e.mainDepth)),new s$5("highlightTexture",((i,e)=>e.highlightMixTexture)),new e$d("highlightLevel",((i,e)=>e.highlightLevel)),new e$8("highlightMixOrigin",((i,e)=>e.highlightMixOrigin))),g.outputs.add("fragHighlight","vec2",0),c.code.add(o$o`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),d.canHaveOverlay&&(c.constants.add("occlusionAndMask","int",85),c.code.add(o$o`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):c.code.add(o$o`void calculateOcclusionAndOutputHighlight() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$7 = class e extends a$e{constructor(r,e,o){super(r,"vec4",a$f.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$b = class o extends a$e{constructor(r,o,e){super(r,"float",a$f.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var h$9,y$1;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale";}(h$9||(h$9={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle";}(y$1||(y$1={}));function W$1(t,o,i){if(!o.vvSize)return o$p(t,1,1,1),t;for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=r$8(s,o.vvSize.minSize[n],o.vvSize.maxSize[n]);}return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e$6=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l$7(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(e$n.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new e$k("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new e$k("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new e$k("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new e$k("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new e$j("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new e$k("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add(o$o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add(o$o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?o$o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add(o$o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",e$6),s.uniforms.add(new o$b("vvColorValues",(e=>e.vvColor.values),e$6),new e$7("vvColorColors",(e=>e.vvColor.colors),e$6)),s.code.add(o$o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?o$o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add(o$o`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$a(o,a){f$6(o,a,new o$m("textureAlphaCutoff",(o=>o.textureAlphaCutoff)));}function f$6(a,r,t){const s=a.fragment;switch(r.alphaDiscardMode){case i$h.Blend:a.fragment.code.add(o$o`
        #define discardOrAdjustAlpha(color) { if (color.a < ${o$o.float(o$u)}) { discard; } }
      `);break;case i$h.Opaque:s.code.add(o$o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case i$h.Mask:s.uniforms.add(t).code.add(o$o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case i$h.MaskBlend:s.uniforms.add(t).code.add(o$o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function h$8(h,O){const{vertex:j,fragment:w}=h,b=O.hasColorTexture&&O.alphaDiscardMode!==i$h.Opaque,{output:C,normalType:V,hasColorTextureTransform:A}=O;switch(C){case n$g.Depth:d$b(j,O),h.include(o$f,O),h.include(P$1,O),h.include(o$d,O),b&&w.uniforms.add(new s$5("tex",(e=>e.texture))),j.main.add(o$o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),h.include(t$a,O),w.main.add(o$o`
          discardBySlice(vpos);
          ${r$d(b,o$o`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case n$g.Shadow:case n$g.ShadowHighlight:case n$g.ShadowExcludeHighlight:case n$g.ViewshedShadow:case n$g.ObjectAndLayerIdColor:d$b(j,O),h.include(o$f,O),h.include(o$d,O),h.include(l$7,O),h.include(e$9,O),h.include(P$1,O),h.include(e$a,O),i$d(h),h.varyings.add("depth","float"),b&&w.uniforms.add(new s$5("tex",(e=>e.texture))),j.main.add(o$o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),h.include(t$a,O),w.main.add(o$o`
          discardBySlice(vpos);
          ${r$d(b,o$o`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${C===n$g.ObjectAndLayerIdColor?o$o`outputObjectAndLayerIdColor();`:o$o`outputDepth(depth);`}`);break;case n$g.Normal:{d$b(j,O),h.include(o$f,O),h.include(t$i,O),h.include(c$9,O),h.include(o$d,O),h.include(l$7,O),b&&w.uniforms.add(new s$5("tex",(e=>e.texture))),V===a$h.ScreenDerivative&&h.varyings.add("vPositionView","vec3");const e=V===a$h.Attribute||V===a$h.Compressed;j.main.add(o$o`
          vpos = getVertexInLocalOriginSpace();
          ${e?o$o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:o$o`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),h.include(P$1,O),h.include(t$a,O),w.main.add(o$o`
          discardBySlice(vpos);
          ${r$d(b,o$o`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${V===a$h.ScreenDerivative?o$o`vec3 normal = screenDerivativeNormal(vPositionView);`:o$o`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case n$g.Highlight:d$b(j,O),h.include(o$f,O),h.include(o$d,O),h.include(l$7,O),b&&w.uniforms.add(new s$5("tex",(e=>e.texture))),j.main.add(o$o`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),h.include(P$1,O),h.include(t$a,O),h.include(g$3,O),w.main.add(o$o`
          discardBySlice(vpos);
          ${r$d(b,o$o`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$5(e){e.fragment.code.add(o$o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u$8(u,n){const{textureCoordinateType:s}=n;if(s===d$a.None||s===d$a.COUNT)return;u.include(o$d,n);const i=s===d$a.Atlas;i&&u.include(e$5),u.fragment.code.add(o$o`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e$4(e,o){const n=e.fragment;switch(n.code.add(o$o`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$a.None:n.code.add(o$o`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$a.View:n.code.add(o$o`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$a.WindingOrder:n.code.add(o$o`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$e(o.doubleSidedMode);case i$a.COUNT:}}var i$a;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$a||(i$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function T$3(T,u){const x=T.fragment;u.hasVertexTangents?(T.attributes.add(e$n.TANGENT,"vec4"),T.varyings.add("vTangent","vec4"),u.doubleSidedMode===i$a.WindingOrder?x.code.add(o$o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):x.code.add(o$o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):x.code.add(o$o`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),u.textureCoordinateType!==d$a.None&&(T.include(u$8,u),x.uniforms.add(u.bindType===a$f.Pass?new s$5("normalTexture",(e=>e.textureNormal)):new s$9("normalTexture",(e=>e.textureNormal))),u.hasNormalTextureTransform&&(x.uniforms.add(new e$f("scale",(e=>e.scale??l$c))),x.uniforms.add(new e$j("normalTextureTransformMatrix",(t=>t.normalTextureTransformMatrix??o$v)))),x.code.add(o$o`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u.hasNormalTextureTransform&&x.code.add(o$o`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),x.code.add(o$o`return tangentSpace * rawNormal;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n$4,t$9;!function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color";}(n$4||(n$4={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color";}(t$9||(t$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var R$4,E$3;!function(R){R[R.RED=0]="RED",R[R.RG=1]="RG",R[R.RGBA4=2]="RGBA4",R[R.RGBA=3]="RGBA",R[R.RGBA_MIPMAP=4]="RGBA_MIPMAP",R[R.R16F=5]="R16F",R[R.RGBA16F=6]="RGBA16F";}(R$4||(R$4={})),function(R){R[R.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",R[R.DEPTH16_BUFFER=1]="DEPTH16_BUFFER";}(E$3||(E$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u$7=class u extends b$3{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=n$4.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0;}initialize(){this.addHandles([d$f((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this);}),P$2)]);}destroy(){this.view._stage?.renderer?.removeRenderNode(this);}precompile(){}render(){throw new s$c("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,r=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return r.fbo?.initializeAndBind(),r}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===a$j.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0;}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo);}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return !!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null;}}};r$6([m$b({constructOnly:!0})],u$7.prototype,"view",void 0),r$6([m$b({constructOnly:!0})],u$7.prototype,"consumes",void 0),r$6([m$b()],u$7.prototype,"produces",void 0),u$7=r$6([a$g("esri.views.3d.webgl.RenderNode")],u$7);const c$8=u$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e$3=3e5,o$a=5e5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i$9(i,o=!0){i.attributes.add(e$n.POSITION,"vec2"),o&&i.varyings.add("uv","vec2"),i.vertex.main.add(o$o`
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?o$o`uv = position * 0.5 + vec2(0.5);`:""}
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a$a(e){e.uniforms.add(new e$f("zProjectionMap",((e,t)=>c$7(t.camera)))),e.code.add(o$o`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(o$o`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(o$o`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`);}function c$7(t){const r=t.projectionMatrix;return o$w(d$9,r[14],r[10])}const d$9=n$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$9 = class o extends a$e{constructor(r,o){super(r,"vec2",a$f.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s$4=()=>n$i.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let i$8 = class i{constructor(){this._includedModules=new Map;}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t));}};let o$8 = class o extends i$8{constructor(){super(...arguments),this.vertex=new h$7,this.fragment=new h$7,this.attributes=new m$8,this.varyings=new _$3,this.extensions=new d$8,this.outputs=new l$6;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a=s.main.generateSource(),u="vertex"===e?S$3:f$5,c=s.constants.generateSource(),h=this.outputs.generateSource(e);return `#version 300 es\n${t.join("\n")}\n\n${u}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${h.join("\n")}\n\n${o.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Pass];n&&t.set(e.name,n);})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Pass];n&&t.set(e.name,n);}));const n=Array.from(t.values()),s=n.length;return (t,r)=>{for(let i=0;i<s;++i)n[i](e,t,r);}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Draw];n&&t.set(e.name,n);})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Draw];n&&t.set(e.name,n);}));const n=Array.from(t.values()),s=n.length;return (t,r,i)=>{for(let o=0;o<s;++o)n[o](e,i,t,r);}}};let a$9 = class a{constructor(e){this._stage=e,this._entries=new Map;}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new s$c(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t);}else s$4().error(`Trying to add null Uniform from ${(new Error).stack}.`);}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}};let u$6 = class u{constructor(e){this._stage=e,this._bodies=new Array;}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return [`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new s$c("Shader does not contain main function body.")}};let c$6 = class c{constructor(e){this._stage=e,this._entries=new Array;}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}};let h$7 = class h extends i$8{constructor(){super(...arguments),this.uniforms=new a$9(this),this.main=new u$6(this),this.code=new c$6(this),this.constants=new g$2(this);}get builder(){return this}};let m$8 = class m{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}};let _$3 = class _{constructor(){this._entries=new Map;}add(e,t){this._entries.has(e)&&s$d(this._entries.get(e)===t),this._entries.set(e,t);}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}};let d$8 = class d{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}};d$8.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d$8.ALLOWLIST_VERTEX=[];let l$6 = class l{constructor(){this._entries=new Map;}add(e,t,r=0){const s=this._entries.get(r);s?s$d(s.name===e&&s.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t});}generateSource(e){if("vertex"===e)return [];0===this._entries.size&&this._entries.set(0,{name:l.DEFAULT_NAME,type:l.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}};l$6.DEFAULT_TYPE="vec4",l$6.DEFAULT_NAME="fragColor";let g$2 = class g{constructor(e){this._stage=e,this._entries=new Set;}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=g._numberToFloatStr(r);break;case"int":n=g._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${t} ${e} = ${n};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const f$5="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",S$3="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d$7=4;function i$7(){const i=new o$8,f=i.fragment;i.include(i$9);const u=(d$7+1)/2,c=1/(2*u*u);return f.include(a$a),f.uniforms.add(new s$5("depthMap",(e=>e.depthTexture)),new s$9("tex",(e=>e.colorTexture)),new o$9("blurSize",(e=>e.blurSize)),new o$m("projScale",((e,r)=>{const o=r.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),f.code.add(o$o`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o$o.float(c)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),i.outputs.add("fragBlur","float"),f.main.add(o$o`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${o$o.int(d$7)}; r <= ${o$o.int(d$7)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),i}const f$4=Object.freeze(Object.defineProperty({__proto__:null,build:i$7},Symbol.toStringTag,{value:"Module"}));

let l$5 = class l extends n$9{constructor(r,s,i){super(r,s,new t$e(f$4,(()=>__vitePreload(() => import('./HUDMaterial.glsl-Ch1dz9zu.js').then(n => n.S),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]):void 0,import.meta.url))),i);}initializePipeline(){return B$4({colorWrite:g$5})}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e$2="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let r$3 = class r extends t$h{constructor(){super(...arguments),this.projScale=1;}};let t$8 = class t extends r$3{constructor(){super(...arguments),this.intensity=1;}};let c$5 = class c extends t$h{};let o$7 = class o extends c$5{constructor(){super(...arguments),this.blurSize=n$h();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f$3(r){r.fragment.uniforms.add(new e$b("projInfo",((r,o)=>c$4(o.camera)))),r.fragment.uniforms.add(new e$f("zScale",((r,o)=>m$7(o.camera)))),r.fragment.code.add(o$o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}function c$4(r){const o=r.projectionMatrix;return 0===o[11]?s$b(n$3,2/(r.fullWidth*o[0]),2/(r.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):s$b(n$3,-2/(r.fullWidth*o[0]),-2/(r.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const n$3=n$f();function m$7(o){return 0===o.projectionMatrix[11]?o$w(l$4,0,1):o$w(l$4,1,0)}const l$4=n$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u$5=16;function f$2(){const r=new o$8,f=r.fragment;return r.include(i$9),r.include(f$3),f.include(a$a),f.uniforms.add(new o$m("radius",((e,r)=>d$6(r.camera)))).code.add(o$o`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),f.code.add(o$o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),f.uniforms.add(new s$5("normalMap",(e=>e.normalTexture)),new s$5("depthMap",(e=>e.depthTexture)),new o$m("projScale",(e=>e.projScale)),new s$5("rnm",(e=>e.noiseTexture)),new e$f("rnmScale",((r,t)=>o$w(m$6,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new o$m("intensity",(e=>e.intensity)),new e$f("screenSize",((r,t)=>o$w(m$6,t.camera.fullWidth,t.camera.fullHeight)))),r.outputs.add("fragOcclusion","float"),f.main.add(o$o`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o$o.int(u$5)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o$o.int(u$5)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),r}function d$6(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const m$6=n$h(),v$1=Object.freeze(Object.defineProperty({__proto__:null,build:f$2,getRadius:d$6},Symbol.toStringTag,{value:"Module"}));

let t$7 = class t extends n$9{constructor(r,s,i){super(r,s,new t$e(v$1,(()=>__vitePreload(() => import('./HUDMaterial.glsl-Ch1dz9zu.js').then(n => n.a),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]):void 0,import.meta.url))),i);}initializePipeline(){return B$4({colorWrite:g$5})}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const A$1=2;let O$2=class O extends c$8{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=t$9.SSAO,this.isEnabled=()=>!1,this._enableTime=n$j(0),this._passParameters=new t$8,this._drawParameters=new o$7;}initialize(){const e=Uint8Array.from(atob(e$2),(e=>e.charCodeAt(0))),r=new p$a;r.wrapMode=D$1.CLAMP_TO_EDGE,r.pixelFormat=G$1.RGB,r.wrapMode=D$1.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new m$c(this.renderingContext,r,e),this.techniques.precompile(t$7),this.techniques.precompile(l$5),this.addHandles(d$f((()=>this.isEnabled()),(()=>this._enableTime=n$j(0))));}destroy(){this._passParameters.noiseTexture=r$9(this._passParameters.noiseTexture);}render(e){const s=this.bindParameters,t=e.find((({name:e})=>"normals"===e)),o=t?.getTexture(),a=t?.getTexture(t$j),p=this.fboCache,d=s.camera,f=d.fullViewport[2],b=d.fullViewport[3],_=Math.round(f/A$1),P=Math.round(b/A$1),x=this.techniques.acquire(t$7),q=this.techniques.acquire(l$5);if(!x.compiled||!q.compiled)return this._enableTime=n$j(performance.now()),this.requestRender(a$j.UPDATE),x.release(),q.release(),p.acquire(_,P,t$9.SSAO,R$4.RED);0===this._enableTime&&(this._enableTime=n$j(performance.now()));const O=this.renderingContext,E=this.view.qualitySettings.fadeDuration,v=d.relativeElevation,R=r$8((o$a-v)/(o$a-e$3),0,1),C=E>0?Math.min(E,performance.now()-this._enableTime)/E:1,D=C*R;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*y/d$6(d)**6*D;const V=p.acquire(f,b,"ssao input",R$4.RG);O.bindFramebuffer(V.fbo),O.setViewport(0,0,f,b),O.bindTechnique(x,s,this._passParameters,this._drawParameters),O.screen.draw(),x.release();const M=p.acquire(_,P,"ssao blur",R$4.RED);O.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=V.getTexture(),o$w(this._drawParameters.blurSize,0,A$1/b),O.bindTechnique(q,s,this._passParameters,this._drawParameters),O.setViewport(0,0,_,P),O.screen.draw(),V.release();const L=p.acquire(_,P,t$9.SSAO,R$4.RED);return O.bindFramebuffer(L.fbo),O.setViewport(0,0,f,b),O.setClearColor(1,1,1,0),O.clear(_$5.COLOR),this._drawParameters.colorTexture=M.getTexture(),o$w(this._drawParameters.blurSize,A$1/f,0),O.bindTechnique(q,s,this._passParameters,this._drawParameters),O.setViewport(0,0,_,P),O.screen.draw(),q.release(),O.setViewport4fv(d.fullViewport),M.release(),C<1&&this.requestRender(a$j.UPDATE),L}};r$6([m$b()],O$2.prototype,"consumes",void 0),r$6([m$b()],O$2.prototype,"produces",void 0),r$6([m$b({constructOnly:!0})],O$2.prototype,"techniques",void 0),r$6([m$b({constructOnly:!0})],O$2.prototype,"isEnabled",void 0),O$2=r$6([a$g("esri.views.3d.webgl-engine.effects.ssao.SSAO")],O$2);const y=.5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$6(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new s$5("ssaoTex",((e,s)=>s.ssao?.getTexture()))),a.constants.add("blurSizePixelsInverse","float",1/A$1),a.code.add(o$o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(o$o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t$5 = class t{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output;}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(t){return O$8.LOADED}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u$4 = class u extends t$5{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){super.dispose(),this._texture=t$k(this._texture),this._textureNormal=t$k(this._textureNormal),this._textureEmissive=t$k(this._textureEmissive),this._textureOcclusion=t$k(this._textureOcclusion),this._textureMetallicRoughness=t$k(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?O$8.LOADED:O$8.LOADING}get textureBindParameters(){return new h$6(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=t$k(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(s,i){if(null==s)return void i(null);const r=this._textures.acquire(s);if(S$6(r))return ++this._numLoading,void r.then((e=>{if(this._disposed)return t$k(e),void i(null);i(e);})).finally((()=>--this._numLoading));i(r);}};let l$3 = class l extends t$h{constructor(t=null){super(),this.textureEmissive=t;}};let h$6 = class h extends l$3{constructor(t=null,e=null,s=null,i=null,r=null,u,l){super(s),this.texture=t,this.textureNormal=e,this.textureOcclusion=i,this.textureMetallicRoughness=r,this.scale=u,this.normalTextureTransformMatrix=l;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n$2;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT";}(n$2||(n$2={}));function m$5(l,u){const d=u.pbrMode,m=l.fragment;if(d!==n$2.Schematic&&d!==n$2.Disabled&&d!==n$2.Normal)return void m.code.add(o$o`void applyPBRFactors() {}`);if(d===n$2.Disabled)return void m.code.add(o$o`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(d===n$2.Schematic)return void m.code.add(o$o`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:p,hasMetallicRoughnessTextureTransform:h,hasOcclusionTexture:f,hasOcclusionTextureTransform:v,bindType:x}=u;(p||f)&&l.include(u$8,u),m.code.add(o$o`vec3 mrr;
float occlusion;`),p&&m.uniforms.add(x===a$f.Pass?new s$5("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new s$9("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&m.uniforms.add(x===a$f.Pass?new s$5("texOcclusion",(e=>e.textureOcclusion)):new s$9("texOcclusion",(e=>e.textureOcclusion))),m.uniforms.add(x===a$f.Pass?new e$k("mrrFactors",(e=>e.mrrFactors)):new o$n("mrrFactors",(e=>e.mrrFactors))),m.code.add(o$o`
    ${r$d(p,o$o`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${r$d(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${r$d(p,`applyMetallicRoughness(${h?"metallicRoughnessUV":"vuv0"});`)}
      ${r$d(f,`applyOcclusion(${v?"occlusionUV":"vuv0"});`)}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r$2(n,g){const r=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new e$k("lightingAmbientSH0",((n,t)=>o$p(a$8,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(o$o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new e$b("lightingAmbientSH_R",((i,n)=>s$b(m$4,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$b("lightingAmbientSH_G",((i,n)=>s$b(m$4,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$b("lightingAmbientSH_B",((i,n)=>s$b(m$4,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),r.code.add(o$o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new e$k("lightingAmbientSH0",((n,t)=>o$p(a$8,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$b("lightingAmbientSH_R1",((i,n)=>s$b(m$4,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$b("lightingAmbientSH_G1",((i,n)=>s$b(m$4,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$b("lightingAmbientSH_B1",((i,n)=>s$b(m$4,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$b("lightingAmbientSH_R2",((i,n)=>s$b(m$4,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$b("lightingAmbientSH_G2",((i,n)=>s$b(m$4,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$b("lightingAmbientSH_B2",((i,n)=>s$b(m$4,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),r.code.add(o$o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==n$2.Normal&&g.pbrMode!==n$2.Schematic||r.code.add(o$o`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$8=n$d(),m$4=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$4(n){n.uniforms.add(new e$k("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)));}function a$7(n){n.uniforms.add(new e$k("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)));}function o$6(i){t$4(i.fragment),a$7(i.fragment),i.fragment.code.add(o$o`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$3(t){const a=t.fragment.code;a.add(o$o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(o$o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(o$o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t$2(t){const a=3.141592653589793,n=.3183098861837907;t.vertex.constants.add("PI","float",a),t.fragment.constants.add("PI","float",a),t.fragment.constants.add("LIGHT_NORMALIZATION","float",n),t.fragment.constants.add("INV_PI","float",n),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n$1(n,r){const l=n.fragment.code;n.include(t$2),r.pbrMode!==n$2.Normal&&r.pbrMode!==n$2.Schematic&&r.pbrMode!==n$2.Simplified&&r.pbrMode!==n$2.TerrainWithWater||(l.add(o$o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(o$o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==n$2.Normal&&r.pbrMode!==n$2.Schematic||(n.include(t$3),l.add(o$o`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(o$o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(o$o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(o$o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s$3 = class s extends a$e{constructor(o,s){super(o,"bool",a$f.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l$2=.4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function h$5(i){i.constants.add("ambientBoostFactor","float",l$2);}function u$3(i){i.uniforms.add(new o$m("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)));}function p$4(g,p){const v=g.fragment;switch(g.include(t$6,p),p.pbrMode!==n$2.Disabled&&g.include(n$1,p),g.include(r$2,p),g.include(t$2),v.code.add(o$o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===n$2.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h$5(v),u$3(v),t$4(v),v.code.add(o$o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?o$o`normalize(vPosWorld)`:o$o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),a$7(v),v.code.add(o$o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case n$2.Disabled:case n$2.WaterOnIntegratedMesh:case n$2.Water:g.include(o$6),v.code.add(o$o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case n$2.Normal:case n$2.Schematic:v.code.add(o$o`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add(o$o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new s$3("hasFillLights",((i,n)=>n.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add(o$o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new o$m("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new o$m("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))).code.add(o$o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add(o$o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode!==n$2.Schematic||p.hasColorTexture?o$o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:o$o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case n$2.Simplified:case n$2.TerrainWithWater:t$4(v),a$7(v),v.code.add(o$o`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:n$e(p.pbrMode);case n$2.COUNT:}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$5 = class o extends a$e{constructor(r,o,s){super(r,"mat4",a$f.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e$1 = class e extends a$e{constructor(r,e,o){super(r,"mat4",a$f.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function m$3(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new e$1("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f$1(e));}function x(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new o$5("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f$1(e));}function f$1(e){const s=e.fragment;s.include(a$b),s.uniforms.add(new s$5("shadowMap",((e,s)=>s.shadowMap.depthTexture)),new e$d("numCascades",((e,s)=>s.shadowMap.numCascades)),new e$b("cascadeDistances",((e,s)=>s.shadowMap.cascadeDistances))).code.add(o$o`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a$6(a,{occlusionPass:n,terrainDepthTest:i,cullAboveTerrain:o}){i?(a.fragment.include(a$a),a.fragment.uniforms.add(new s$5("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(o$o`
   ${n?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${n?o$o`return fragmentDepth < linearDepth && depth < 1.0;`:o$o`if(fragmentDepth ${o?">":"<="} linearDepth) discard;`}
    }`)):n?a.fragment.code.add(o$o`#define terrainDepthTest(fragmentDepth) false`):a.fragment.code.add(o$o`#define terrainDepthTest(fragmentDepth) {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s$2(e,s){s.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new e$j("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o$v))).code.add(o$o`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o$o`void forwardColorUV(){}`);}function i$6(s,i){i.hasNormalTextureTransform&&i.textureCoordinateType!==d$a.None?(s.varyings.add("normalUV","vec2"),s.vertex.uniforms.add(new e$j("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o$v))).code.add(o$o`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add(o$o`void forwardNormalUV(){}`);}function t$1(s,i){i.hasEmissionTextureTransform&&i.textureCoordinateType!==d$a.None?(s.varyings.add("emissiveUV","vec2"),s.vertex.uniforms.add(new e$j("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o$v))).code.add(o$o`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add(o$o`void forwardEmissiveUV(){}`);}function d$5(s,i){i.hasOcclusionTextureTransform&&i.textureCoordinateType!==d$a.None?(s.varyings.add("occlusionUV","vec2"),s.vertex.uniforms.add(new e$j("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o$v))).code.add(o$o`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add(o$o`void forwardOcclusionUV(){}`);}function n(s,i){i.hasMetallicRoughnessTextureTransform&&i.textureCoordinateType!==d$a.None?(s.varyings.add("metallicRoughnessUV","vec2"),s.vertex.uniforms.add(new e$j("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o$v))).code.add(o$o`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add(o$o`void forwardMetallicRoughnessUV(){}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){e.code.add(o$o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i$5(i){i.include(e),i.code.add(o$o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o$o.int(n$c.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o$o.int(n$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$o.int(n$c.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o$o.int(n$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$o.int(n$c.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d$4;!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT";}(d$4||(d$4={}));function c$3(u,f){if(!u$b(f.output))return;const{emissionSource:c,hasEmissiveTextureTransform:x,bindType:l}=f,p=c===d$4.Texture;p&&(u.include(u$8,f),u.fragment.uniforms.add(l===a$f.Pass?new s$5("texEmission",(e=>e.textureEmissive)):new s$9("texEmission",(e=>e.textureEmissive))));const v=c===d$4.Value||p;v&&u.fragment.uniforms.add(l===a$f.Pass?new e$k("emissionFactor",(e=>e.emissiveFactor)):new o$n("emissionFactor",(e=>e.emissiveFactor))),u.fragment.code.add(o$o`
    vec4 getEmissions() {
      vec4 emissions = ${v?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${r$d(p,`emissions *= textureLookup(texEmission, ${x?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d$3(d,f){d.include(g$3,f),d.include(c$3,f),d.fragment.include(e);const p=f.output===n$g.ObjectAndLayerIdColor,c=S$5(f.output),g=u$b(f.output)&&f.oitPass===o$i.ColorAlpha,h=u$b(f.output)&&f.oitPass!==o$i.ColorAlpha,m=f.discardInvisibleFragments;let C=0;(h||c||g)&&d.outputs.add("fragColor","vec4",C++),c&&d.outputs.add("fragEmission","vec4",C++),g&&d.outputs.add("fragAlpha","float",C++),d.fragment.code.add(o$o`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${r$d(p,o$o`finalColor.a = 1.0;`)}

      ${r$d(m,o$o`if (finalColor.a < ${o$o.float(o$u)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${r$d(g,o$o`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${r$d(h,"fragColor = finalColor;")}
      ${r$d(c,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${r$d(p,"outputObjectAndLayerIdColor();")}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function J$1(J){const K=new o$8,{vertex:Q,fragment:X,varyings:Y}=K,{output:Z,normalType:ee,offsetBackfaces:re,instancedColor:oe,spherical:ie,receiveShadows:ae,snowCover:le,pbrMode:se,textureAlphaPremultiplied:te,instancedDoublePrecision:ne,hasVertexColors:de,hasVertexTangents:ce,hasColorTexture:me,hasNormalTexture:ge,hasNormalTextureTransform:ve,hasColorTextureTransform:ue}=J;if(d$b(Q,J),K.include(o$k),Y.add("vpos","vec3"),K.include(l$7,J),K.include(M$2,J),K.include(a$c,J),K.include(s$2,J),!u$b(Z))return K.include(h$8,J),K;K.include(i$6,J),K.include(t$1,J),K.include(d$5,J),K.include(n,J),f$9(Q,J),K.include(t$i,J),K.include(o$f,J);const be=ee===a$h.Attribute||ee===a$h.Compressed;return be&&re&&K.include(e$e),K.include(T$3,J),K.include(c$9,J),oe&&K.attributes.add(e$n.INSTANCECOLOR,"vec4"),Y.add("vPositionLocal","vec3"),K.include(o$d,J),K.include(n$6,J),K.include(i$c,J),K.include(e$c,J),Q.uniforms.add(new e$b("externalColor",(e=>e.externalColor))),Y.add("vcolorExt","vec4"),J.terrainDepthTest&&Y.add("depth","float"),Q.main.add(o$o`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${r$d(oe,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${o$o.float(o$u)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${r$d(be,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${r$d(ce,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${r$d(be&&re,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${r$d(J.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),K.include(p$4,J),K.include(t$6,J),K.include(t$a,J),K.include(ne?m$3:x,J),K.include(a$6,J),K.include(P$1,J),K.include(d$3,J),f$9(X,J),X.uniforms.add(Q.uniforms.get("localOrigin"),new e$k("ambient",(e=>e.ambient)),new e$k("diffuse",(e=>e.diffuse)),new o$m("opacity",(e=>e.opacity)),new o$m("layerOpacity",(e=>e.layerOpacity))),me&&X.uniforms.add(new s$5("tex",(e=>e.texture))),K.include(m$5,J),K.include(n$1,J),X.include(i$5),K.include(e$4,J),h$5(X),u$3(X),a$7(X),X.main.add(o$o`
      discardBySlice(vpos);
      ${r$d(J.terrainDepthTest,"terrainDepthTest(depth);")}
      ${me?o$o`
              vec4 texColor = texture(tex, ${ue?"colorUV":"vuv0"});
              ${r$d(te,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:o$o`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${ee===a$h.ScreenDerivative?o$o`vec3 normal = screenDerivativeNormal(vPositionLocal);`:o$o`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${ae?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":r$d(ie,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${r$d(de,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${r$d(de,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${ge?`mat3 tangentSpace = computeTangentSpace(${ce?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ve?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${ie?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${r$d(le,o$o`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${se===n$2.Normal||se===n$2.Schematic?o$o`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${r$d(le,o$o`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${le?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),K}const K=Object.freeze(Object.defineProperty({__proto__:null,build:J$1},Symbol.toStringTag,{value:"Module"}));

let F$2 = class F extends f$d{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=t$d,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=e$s.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=_$4,this.instancedDoublePrecision=!1,this.normalType=a$h.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=e$r(.2,.2,.2),this.diffuse=e$r(.8,.8,.8),this.externalColor=r$e(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$d(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=n$k.Less,this.textureAlphaMode=i$h.Blend,this.textureAlphaCutoff=o$u,this.textureAlphaPremultiplied=!1,this.renderOccluded=p$7.Occlude,this.isDecoration=!1;}};let N$2 = class N extends n$b{constructor(){super(...arguments),this.origin=n$d(),this.slicePlaneLocalOrigin=this.origin;}};let k$2 = class k extends n$9{constructor(e,t,i,s=new t$e(K,(()=>__vitePreload(() => import('./HUDMaterial.glsl-Ch1dz9zu.js').then(n => n.D),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]):void 0,import.meta.url)))){super(e,t,s,i),this.type="DefaultMaterialTechnique";}_makePipeline(e,t){const{oitPass:i,output:s,transparent:o,cullFace:a,customDepthTest:n,hasOccludees:h,enableOffset:c}=e,u=i===o$i.NONE,m=i===o$i.FrontFace;return B$4({blending:u$b(s)&&o?a$d(i):null,culling:B$2(e)?f$e(a):null,depthTest:{func:f$b(i,q$2(n))},depthWrite:l$9(e),drawBuffers:s===n$g.Depth?{buffers:[f$f.NONE]}:i$e(i,s),colorWrite:g$5,stencilWrite:h?e$g:null,stencilTest:h?t?o$h:f$a:null,polygonOffset:u||m?null:N$3(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function q$2(e){return e===n$k.Lequal?O$7.LEQUAL:O$7.LESS}function B$2(e){return e.cullFace!==e$s.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}

function i$4(){return t??=(async()=>{const i=await __vitePreload(() => import('./basis_transcoder-BprY9LJH.js'),true?[]:void 0,import.meta.url),t=await i.default({locateFile:i=>n$l(`esri/libs/basisu/${i}`)});return t.initializeBasis(),t})(),t}let t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var _$2;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$2||(_$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l$1=null,o$4=null;async function g$1(){return null==o$4&&(o$4=i$4(),l$1=await o$4),o$4}function u$2(e,t){if(null==l$1)return e.byteLength;const n=new l$1.BasisFile(new Uint8Array(e)),s=E$2(n)?m$2(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c$2(e,t){if(null==l$1)return e.byteLength;const n=new l$1.KTX2File(new Uint8Array(e)),s=T$2(n)?m$2(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m$2(e,t,s,r,i){const l=u$c(t?c$e.COMPRESSED_RGBA8_ETC2_EAC:c$e.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function E$2(e){return e.getNumImages()>=1&&!e.isUASTC()}function T$2(e){return e.getFaces()>=1&&e.isETC1S()}async function h$4(e,t,n){null==l$1&&(l$1=await g$1());const s=new l$1.BasisFile(new Uint8Array(n));if(!E$2(s))return null;s.startTranscoding();const r=p$3(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _$1(e,t,n){null==l$1&&(l$1=await g$1());const s=new l$1.KTX2File(new Uint8Array(n));if(!T$2(s))return null;s.startTranscoding();const r=p$3(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p$3(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[_$2.ETC2_RGBA,c$e.COMPRESSED_RGBA8_ETC2_EAC]:[_$2.ETC1_RGB,c$e.COMPRESSED_RGB8_ETC2]:T?o?[_$2.BC3_RGBA,c$e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$2.BC1_RGB,c$e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$2.RGBA32,G$1.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?L$1.LINEAR_MIPMAP_LINEAR:L$1.LINEAR,a.width=g,a.height=u,new m$c(e,a,{type:"compressed",levels:A})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o$3=()=>n$i.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a$5=542327876,i$3=131072,s$1=4;function l(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function u$1(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$1=l("DXT1"),h$3=l("DXT3"),m$1=l("DXT5"),f=31,d$2=0,p$2=1,g=2,D=3,C$2=4,w$1=7,T$1=20,_=21;function E$1(e,r,o){const a=S$2(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:s,width:l,height:u}=a;return r.samplingMode=i.levels.length>1?L$1.LINEAR_MIPMAP_LINEAR:L$1.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=s,r.width=l,r.height=u,new m$c(e,r,i)}function S$2(e,t){const n=new Int32Array(e.buffer,e.byteOffset,f);if(n[d$2]!==a$5)return o$3().error("Invalid magic number in DDS header"),null;if(!(n[T$1]&s$1))return o$3().error("Unsupported format, must contain a FourCC code"),null;const l=n[_];let E,S;switch(l){case c$1:E=8,S=c$e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$3:E=16,S=c$e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case m$1:E=16,S=c$e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return o$3().error("Unsupported FourCC code:",u$1(l)),null}let b=1,A=n[C$2],M=n[D];(3&A||3&M)&&(o$3().warn("Rounding up compressed texture size to nearest multiple of 4."),A=A+3&-4,M=M+3&-4);const x=A,R=M;let X,I;n[g]&i$3&&!1!==t&&(b=Math.max(1,n[w$1]));let v=e.byteOffset+n[p$2]+4;const y=[];for(let r=0;r<b;++r)I=(A+3>>2)*(M+3>>2)*E,X=new Uint8Array(e.buffer,v,I),y.push(X),v+=I,A=Math.max(1,A>>1),M=Math.max(1,M>>1);return {textureData:{type:"compressed",levels:y},internalFormat:S,width:x,height:R}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r$1(t,e){const n=1048576,i=4096,r=2;let h=t.width*t.height;if(h<i)return t instanceof ImageData?a$4(t):t;let c=t.width,u=t.height;do{c=Math.ceil(c/r),u=Math.ceil(u/r),h=c*u;}while(h>n||null!=e&&(c>e||u>e));return o$2(t,c,u)}function h$2(t,e){const n=Math.max(t.width,t.height);if(n<=e)return t;const i=e/n;return o$2(t,Math.round(t.width*i),Math.round(t.height*i))}function o$2(t,e,n){if(t instanceof ImageData)return o$2(a$4(t),e,n);const i=document.createElement("canvas");i.width=e,i.height=n;return i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function a$4(e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");if(null==i)throw new s$c("Failed to create 2d context from HTMLCanvasElement");return i.putImageData(e,0,0),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let C$1 = class C extends r$5{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=e$h.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new o$x,this._parameters={...M$1,...r},this._startPreload(e);}dispose(){this.unload(),this._data=this.frameUpdate=void 0;}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e));}_startPreloadVideoElement(e){if(!(Z(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play();};e.addEventListener("canplay",t);}}}_startPreloadImageElement(e){tt(e.src)||Z(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src);}_createDescriptor(e){const t=new p$a;return t.wrapMode=this._parameters.wrap??D$1.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?L$1.LINEAR_MIPMAP_LINEAR:L$1.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||H$1(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new m$c(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):u$d(t)&&this._parameters.encoding===u$e.DDS_ENCODING?this._loadFromDDSData(e,t):t$l(t)&&this._parameters.encoding===u$e.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):(t$l(t)||u$d(t))&&this._parameters.encoding===u$e.KTX2_ENCODING?this._loadFromKTX2(e,t):(t$l(t)||u$d(t))&&this._parameters.encoding===u$e.BASIS_ENCODING?this._loadFromBasis(e,t):u$d(t)?this._loadFromPixelData(e,t):t$l(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<V$1.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=E$1(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>_$1(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>h$4(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){s$d(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?G$1.LUMINANCE:3===this._parameters.components?G$1.RGB:G$1.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new m$c(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const s=await t$m(t,{signal:r});return s$e(r),this._loadFromImage(e,s)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const s=await i$i(t,t.src,!1,r);return s$e(r),this._loadFromImage(e,s)}))}_loadFromVideoElement(e,t){return t.readyState>=V$1.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(t,r){return this._loadAsync((a=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",_),l$d(p);},h=()=>{r.readyState>=V$1.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(t,r)));},_=t=>{m(),l(t||new s$c("Failed to load video"));};r.addEventListener("loadeddata",h),r.addEventListener("error",_);const p=m$d(a,(()=>_(u$f())));}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?r$1(r,t):h$2(r,t);}const s=R$3(r);this._parameters.width=s.width,this._parameters.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this._parameters.components?G$1.RGB:G$1.RGBA,a.width=s.width,a.height=s.height,this._glTexture=new m$c(e,a,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const s=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(s,s),r}unload(){if(this._glTexture=r$9(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort();}this.events.emit("unloaded");}};function H$1(e,t){if(null==e)return 0;if(t$l(e)||u$d(e))return t.encoding===u$e.KTX2_ENCODING?c$2(e,!!t.mipmap):t.encoding===u$e.BASIS_ENCODING?u$2(e,!!t.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R$3(e):t;return (t.mipmap?4/3:1)*r*s*(t.components||4)||0}function R$3(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var V$1;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(V$1||(V$1={}));const M$1={wrap:{s:D$1.REPEAT,t:D$1.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class m{constructor(t=!1,n=!0){this.isVerticalRay=t,this.normalRequired=n;}}const h$1=u$g();function p$1(n,o,i,e,s,c){if(!n.visible)return;const r=R$6(S$1,e,i),a=(t,n,o)=>{c(t,o,n,!1);},h=new m(!1,o.options.normalRequired);if(n.boundingInfo){s$d(n.type===e$h.Mesh);const t=o.tolerance;b$1(n.boundingInfo,i,r,t,s,h,a);}else {const t=n.attributes.get(e$n.POSITION),o=t.indices;V(i,r,0,o.length/3,o,t.data,t.stride,s,h,a);}}const M=n$d();function b$1(t,n,o,i,e,s,c){if(null==t)return;const f=C(o,M);if(S$7(h$1,t.bbMin),Z$1(h$1,t.bbMax),null!=e&&e.applyToAabb(h$1),k$1(h$1,n,f,i)){const{primitiveIndices:r,position:a}=t,f=r?r.length:a.indices.length/3;if(f>N$1){const r=t.getChildren();if(void 0!==r){for(const t of r)b$1(t,n,o,i,e,s,c);return}}T(n,o,0,f,a.indices,a.data,a.stride,r,e,s,c);}}const d$1=n$d();function T(t,n,o,i,e,s,c,r,a,f,u){const l=t[0],m=t[1],h=t[2],p=n[0],M=n[1],b=n[2],{normalRequired:x}=f;for(let g=o;g<i;++g){const t=r[g],n=3*t,o=c*e[n];let i=s[o],f=s[o+1],y=s[o+2];const T=c*e[n+1];let V=s[T],j=s[T+1],q=s[T+2];const v=c*e[n+2];let R=s[v],O=s[v+1],A=s[v+2];null!=a&&([i,f,y]=a.applyToVertex(i,f,y,g),[V,j,q]=a.applyToVertex(V,j,q,g),[R,O,A]=a.applyToVertex(R,O,A,g));const B=V-i,C=j-f,k=q-y,w=R-i,N=O-f,S=A-y,U=M*S-N*b,z=b*w-S*p,D=p*N-w*M,E=B*U+C*z+k*D;if(Math.abs(E)<=P)continue;const F=l-i,G=m-f,H=h-y,J=F*U+G*z+H*D;if(E>0){if(J<0||J>E)continue}else if(J>0||J<E)continue;const K=G*k-C*H,L=H*B-k*F,Q=F*C-B*G,W=p*K+M*L+b*Q;if(E>0){if(W<0||J+W>E)continue}else if(W>0||J+W<E)continue;const X=(w*K+N*L+S*Q)/E;if(X>=0){u(X,t,x?I(B,C,k,w,N,S,d$1):null);}}}function V(i,e,s,c,r,a,f,u,l,m){const h=e,p=U$1,M=Math.abs(h[0]),b=Math.abs(h[1]),d=Math.abs(h[2]),x=M>=b?M>=d?0:2:b>=d?1:2,g=x,y=h[g]<0?2:1,T=(x+y)%3,V=(x+(3-y))%3,I=h[T]/h[g],O=h[V]/h[g],A=1/h[g],B=j,C=q$1,k=v,{normalRequired:w}=l;for(let j=s;j<c;++j){const e=3*j,s=f*r[e];o$p(p[0],a[s+0],a[s+1],a[s+2]);const c=f*r[e+1];o$p(p[1],a[c+0],a[c+1],a[c+2]);const l=f*r[e+2];o$p(p[2],a[l+0],a[l+1],a[l+2]),u&&(s$f(p[0],u.applyToVertex(p[0][0],p[0][1],p[0][2],j)),s$f(p[1],u.applyToVertex(p[1][0],p[1][1],p[1][2],j)),s$f(p[2],u.applyToVertex(p[2][0],p[2][1],p[2][2],j))),R$6(B,p[0],i),R$6(C,p[1],i),R$6(k,p[2],i);const h=B[T]-I*B[g],M=B[V]-O*B[g],b=C[T]-I*C[g],d=C[V]-O*C[g],x=k[T]-I*k[g],y=k[V]-O*k[g],q=x*d-y*b,v=h*y-M*x,N=b*M-d*h;if((q<0||v<0||N<0)&&(q>0||v>0||N>0))continue;const P=q+v+N;if(0===P)continue;const S=q*(A*B[g])+v*(A*C[g])+N*(A*k[g]);if(S*Math.sign(P)<0)continue;const U=S/P;if(U>=0){m(U,j,w?R$2(p):null);}}}const j=n$d(),q$1=n$d(),v=n$d();function I(t,o,s,c,r,a,f){return o$p(O$1,t,o,s),o$p(A,c,r,a),_$6(f,O$1,A),A$4(f,f),f}function R$2(n){return R$6(O$1,n[1],n[0]),R$6(A,n[2],n[0]),_$6(d$1,O$1,A),A$4(d$1,d$1),d$1}const O$1=n$d(),A=n$d();function C(t,o){return o$p(o,1/t[0],1/t[1],1/t[2])}function k$1(t,n,o,i){return w(t,n,o,i,1/0)}function w(t,n,o,i,e){const s=(t[0]-i-n[0])*o[0],c=(t[3]+i-n[0])*o[0];let r=Math.min(s,c),a=Math.max(s,c);const f=(t[1]-i-n[1])*o[1],u=(t[4]+i-n[1])*o[1];if(a=Math.min(a,Math.max(f,u)),a<0)return !1;if(r=Math.max(r,Math.min(f,u)),r>a)return !1;const l=(t[2]-i-n[2])*o[2],m=(t[5]+i-n[2])*o[2];return a=Math.min(a,Math.max(l,m)),!(a<0)&&(r=Math.max(r,Math.min(l,m)),!(r>a)&&r<e)}const N$1=1e3,P=1e-7,S$1=n$d(),U$1=[n$d(),n$d(),n$d()];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l)s[f]=r[i[l]],f+=n;else for(let l=0;l<c;++l){const e=r[i[l]];for(let t=0;t<o;t++)s[f]=e,f+=n;}}function u(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=2*r[c];i[f]=o[e],i[f+1]=o[e+1],f+=s;}}function a$3(e,t,f,o){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,null==o||1===o)for(let l=0;l<c;++l){const e=3*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n;}else for(let l=0;l<c;++l){const e=3*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n;}}function p(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l){const e=4*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n;}else for(let l=0;l<c;++l){const e=4*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n;}}function B$1(e,t,f){const o=e.typedBuffer,r=e.typedBufferStride;t*=r;for(let i=0;i<f;++i)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=r;}function b(t,f,o,r,i=1){if(!f)return void a$3(t,o,r,i);const{data:s,indices:n}=t,c=o.typedBuffer,l=o.typedBufferStride,d=n.length,u=f[0],p=f[1],B=f[2],y=f[4],g=f[5],b=f[6],O=f[8],h=f[9],S=f[10],N=f[12],R=f[13],E=f[14];r*=l;let F=0,z=0,A=0;const L=H$4(f)?e=>{F=s[e]+N,z=s[e+1]+R,A=s[e+2]+E;}:e=>{const t=s[e],f=s[e+1],o=s[e+2];F=u*t+y*f+O*o+N,z=p*t+g*f+h*o+R,A=B*t+b*f+S*o+E;};if(1===i)for(let e=0;e<d;++e)L(3*n[e]),c[r]=F,c[r+1]=z,c[r+2]=A,r+=l;else for(let e=0;e<d;++e){L(3*n[e]);for(let e=0;e<i;++e)c[r]=F,c[r+1]=z,c[r+2]=A,r+=l;}}function O(f,o,r,i,s=1){if(!o)return void a$3(f,r,i,s);const{data:n,indices:c}=f,l=o,d=r.typedBuffer,u=r.typedBufferStride,p=c.length,B=l[0],y=l[1],g=l[2],b=l[4],O=l[5],h=l[6],S=l[8],N=l[9],R=l[10],E=!G$2(l),F=1e-6,z=1-F;i*=u;let A=0,L=0,m=0;const T=H$4(l)?e=>{A=n[e],L=n[e+1],m=n[e+2];}:e=>{const t=n[e],f=n[e+1],o=n[e+2];A=B*t+b*f+S*o,L=y*t+O*f+N*o,m=g*t+h*f+R*o;};if(1===s)if(E)for(let e=0;e<p;++e){T(3*c[e]);const t=A*A+L*L+m*m;if(t<z&&t>F){const e=1/Math.sqrt(t);d[i]=A*e,d[i+1]=L*e,d[i+2]=m*e;}else d[i]=A,d[i+1]=L,d[i+2]=m;i+=u;}else for(let e=0;e<p;++e)T(3*c[e]),d[i]=A,d[i+1]=L,d[i+2]=m,i+=u;else for(let e=0;e<p;++e){if(T(3*c[e]),E){const e=A*A+L*L+m*m;if(e<z&&e>F){const t=1/Math.sqrt(e);A*=t,L*=t,m*=t;}}for(let e=0;e<s;++e)d[i]=A,d[i+1]=L,d[i+2]=m,i+=u;}}function h(e,f,o,r,i=1){if(!f)return void p(e,o,r,i);const{data:s,indices:n}=e,c=f,l=o.typedBuffer,d=o.typedBufferStride,u=n.length,a=c[0],B=c[1],y=c[2],g=c[4],b=c[5],O=c[6],h=c[8],S=c[9],N=c[10],R=!G$2(c),E=1e-6,F=1-E;if(r*=d,1===i)for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],i=s[e+2],c=s[e+3];let u=a*f+g*o+h*i,p=B*f+b*o+S*i,z=y*f+O*o+N*i;if(R){const e=u*u+p*p+z*z;if(e<F&&e>E){const t=1/Math.sqrt(e);u*=t,p*=t,z*=t;}}l[r]=u,l[r+1]=p,l[r+2]=z,l[r+3]=c,r+=d;}else for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],c=s[e+2],u=s[e+3];let p=a*f+g*o+h*c,z=B*f+b*o+S*c,A=y*f+O*o+N*c;if(R){const e=p*p+z*z+A*A;if(e<F&&e>E){const t=1/Math.sqrt(e);p*=t,z*=t,A*=t;}}for(let t=0;t<i;++t)l[r]=p,l[r+1]=z,l[r+2]=A,l[r+3]=u,r+=d;}}function S(e,t,f,o,r=1){const{data:i,indices:s}=e,n=f.typedBuffer,c=f.typedBufferStride,l=s.length;if(o*=c,t!==i.length||4!==t)if(1!==r)if(4!==t)for(let d=0;d<l;++d){const e=3*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=255,o+=c;}else for(let d=0;d<l;++d){const e=4*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=i[e+3],o+=c;}else {if(4===t){for(let e=0;e<l;++e){const t=4*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=i[t+3],o+=c;}return}for(let e=0;e<l;++e){const t=3*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=255,o+=c;}}else {n[o]=i[0],n[o+1]=i[1],n[o+2]=i[2],n[o+3]=i[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,s=e[o/=4];o+=t;const d=l*r;for(let f=1;f<d;++f)e[o]=s,o+=t;}}function N(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length,c=o[0];f*=s;for(let l=0;l<n;++l)i[f]=c,f+=s;}function R$1(e,t,f,o,r=1){const i=t.typedBuffer,s=t.typedBufferStride;if(o*=s,1===r)for(let n=0;n<f;++n)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;else for(let n=0;n<f;++n)for(let t=0;t<r;++t)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;}function E(e,t,o,r,i,s,n){for(const c of o.fields.keys()){const o=e.get(c),d=o?.indices;if(o&&d)F$1(c,o,r,i,s,n);else if(c===e$n.OBJECTANDLAYERIDCOLOR&&null!=t){const o=e.get(e$n.POSITION)?.indices;if(o){const e=o.length;R$1(t,s.getField(c,x$2),e,n);}}}}function F$1(e,t,d,a,B,y){switch(e){case e$n.POSITION:{s$d(3===t.size);const f=B.getField(e,i$j);s$d(!!f,`No buffer view for ${e}`),f&&b(t,d,f,y);break}case e$n.NORMAL:{s$d(3===t.size);const f=B.getField(e,i$j);s$d(!!f,`No buffer view for ${e}`),f&&O(t,a,f,y);break}case e$n.NORMALCOMPRESSED:{s$d(2===t.size);const f=B.getField(e,q$5);s$d(!!f,`No buffer view for ${e}`),f&&u(t,f,y);break}case e$n.UV0:{s$d(2===t.size);const f=B.getField(e,u$h);s$d(!!f,`No buffer view for ${e}`),f&&u(t,f,y);break}case e$n.COLOR:case e$n.SYMBOLCOLOR:{const o=B.getField(e,x$2);s$d(!!o,`No buffer view for ${e}`),s$d(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||S(t,t.size,o,y);break}case e$n.COLORFEATUREATTRIBUTE:{const f=B.getField(e,y$3);s$d(!!f,`No buffer view for ${e}`),s$d(1===t.size),f&&1===t.size&&N(t,f,y);break}case e$n.TANGENT:{s$d(4===t.size);const f=B.getField(e,c$f);s$d(!!f,`No buffer view for ${e}`),f&&h(t,d,f,y);break}case e$n.PROFILERIGHT:case e$n.PROFILEUP:case e$n.PROFILEVERTEXANDNORMAL:case e$n.FEATUREVALUE:{s$d(4===t.size);const f=B.getField(e,c$f);s$d(!!f,`No buffer view for ${e}`),f&&p(t,f,y);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(t){this.vertexBufferLayout=t;}elementCount(e){return e.get(e$n.POSITION).indices.length}write(t,r,i,o,s,u){E(i,o,this.vertexBufferLayout,t,r,s,u);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(t){this._bits=[...t];}equals(s){return c$b(this._bits,s.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a$2 = class a extends t$h{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[];}get key(){return this._key??=new s(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}};function i$2(t={}){return (r,a)=>{r.hasOwnProperty("_parameterNames")||Object.defineProperty(r,"_parameterNames",{value:r._parameterNames?.slice()??[],configurable:!0,writable:!0}),r.hasOwnProperty("_parameterBits")||Object.defineProperty(r,"_parameterBits",{value:r._parameterBits?.slice()??[0],configurable:!0,writable:!0}),r._parameterNames.push(a);const i=t.count||2,s=Math.ceil(Math.log2(i)),o=r._parameterBits;let n=0;for(;o[n]+s>16;)n++,n>=o.length&&o.push(0);const p=o[n],m=(1<<s)-1<<p;o[n]+=s,t.count?Object.defineProperty(r,a,{get(){return (this._parameterBits[n]&m)>>p},set(r){if(this[a]!==r){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+r<<p&m,"number"!=typeof r)throw new s$c(`Configuration value for ${a} must be a number, got ${typeof r}`);if(null==t.count)throw new s$c(`Configuration value for ${a} must provide a count option`)}}}):Object.defineProperty(r,a,{get(){return !!((this._parameterBits[n]&m)>>p)},set(t){if(this[a]!==t&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+t<<p&m,"boolean"!=typeof t))throw new s$c(`Configuration value for ${a} must be boolean, got ${typeof t}`)}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i$1 = class i extends a$2{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1;}};r$6([i$2()],i$1.prototype,"instancedDoublePrecision",void 0),r$6([i$2()],i$1.prototype,"hasModelTransformation",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a$1 = class a extends i$1{constructor(){super(...arguments),this.output=n$g.Color,this.oitPass=o$i.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=a$f.Pass,this.writeDepth=!0;}};r$6([i$2({count:n$g.COUNT})],a$1.prototype,"output",void 0),r$6([i$2({count:o$i.COUNT})],a$1.prototype,"oitPass",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c extends a$1{constructor(e,o){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=o,this.alphaDiscardMode=i$h.Opaque,this.doubleSidedMode=i$a.None,this.pbrMode=n$2.Disabled,this.cullFace=e$s.None,this.normalType=a$h.Attribute,this.customDepthTest=n$k.Less,this.emissionSource=d$4.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0;}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===d$4.Texture||this.hasOcclusionTexture||this.hasNormalTexture?d$a.Default:d$a.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}r$6([i$2({count:i$h.COUNT})],c.prototype,"alphaDiscardMode",void 0),r$6([i$2({count:i$a.COUNT})],c.prototype,"doubleSidedMode",void 0),r$6([i$2({count:n$2.COUNT})],c.prototype,"pbrMode",void 0),r$6([i$2({count:e$s.COUNT})],c.prototype,"cullFace",void 0),r$6([i$2({count:a$h.COUNT})],c.prototype,"normalType",void 0),r$6([i$2({count:n$k.COUNT})],c.prototype,"customDepthTest",void 0),r$6([i$2({count:d$4.COUNT})],c.prototype,"emissionSource",void 0),r$6([i$2()],c.prototype,"hasVertexColors",void 0),r$6([i$2()],c.prototype,"hasSymbolColors",void 0),r$6([i$2()],c.prototype,"hasVerticalOffset",void 0),r$6([i$2()],c.prototype,"hasSlicePlane",void 0),r$6([i$2()],c.prototype,"hasSliceHighlight",void 0),r$6([i$2()],c.prototype,"hasColorTexture",void 0),r$6([i$2()],c.prototype,"hasMetallicRoughnessTexture",void 0),r$6([i$2()],c.prototype,"hasOcclusionTexture",void 0),r$6([i$2()],c.prototype,"hasNormalTexture",void 0),r$6([i$2()],c.prototype,"hasScreenSizePerspective",void 0),r$6([i$2()],c.prototype,"hasVertexTangents",void 0),r$6([i$2()],c.prototype,"hasOccludees",void 0),r$6([i$2()],c.prototype,"hasModelTransformation",void 0),r$6([i$2()],c.prototype,"offsetBackfaces",void 0),r$6([i$2()],c.prototype,"vvSize",void 0),r$6([i$2()],c.prototype,"vvColor",void 0),r$6([i$2()],c.prototype,"receiveShadows",void 0),r$6([i$2()],c.prototype,"receiveAmbientOcclusion",void 0),r$6([i$2()],c.prototype,"textureAlphaPremultiplied",void 0),r$6([i$2()],c.prototype,"instanced",void 0),r$6([i$2()],c.prototype,"instancedColor",void 0),r$6([i$2()],c.prototype,"writeDepth",void 0),r$6([i$2()],c.prototype,"transparent",void 0),r$6([i$2()],c.prototype,"enableOffset",void 0),r$6([i$2()],c.prototype,"terrainDepthTest",void 0),r$6([i$2()],c.prototype,"cullAboveTerrain",void 0),r$6([i$2()],c.prototype,"snowCover",void 0),r$6([i$2()],c.prototype,"hasColorTextureTransform",void 0),r$6([i$2()],c.prototype,"hasEmissionTextureTransform",void 0),r$6([i$2()],c.prototype,"hasNormalTextureTransform",void 0),r$6([i$2()],c.prototype,"hasOcclusionTextureTransform",void 0),r$6([i$2()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function R(R){const z=new o$8,{vertex:k,fragment:G,varyings:U}=z,{output:W,offsetBackfaces:H,instancedColor:q,pbrMode:J,snowCover:K,spherical:Q}=R,X=J===n$2.Normal||J===n$2.Schematic;if(d$b(k,R),z.include(o$k),U.add("vpos","vec3"),z.include(l$7,R),z.include(M$2,R),z.include(a$c,R),W===n$g.Color&&(f$9(z.vertex,R),z.include(t$i,R),z.include(o$f,R),H&&z.include(e$e),q&&z.attributes.add(e$n.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),R.terrainDepthTest&&U.add("depth","float"),z.include(o$d,R),z.include(n$6,R),z.include(i$c,R),z.include(e$c,R),k.uniforms.add(new e$b("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),k.main.add(o$o`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${r$d(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${o$o.float(o$u)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${r$d(H,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${r$d(R.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),W===n$g.Color){const{hasColorTexture:e,hasColorTextureTransform:r,receiveShadows:i}=R;z.include(p$4,R),z.include(t$6,R),z.include(t$a,R),z.include(R.instancedDoublePrecision?m$3:x,R),z.include(a$6,R),z.include(P$1,R),z.include(d$3,R),f$9(z.fragment,R),t$4(G),h$5(G),u$3(G),G.uniforms.add(k.uniforms.get("localOrigin"),k.uniforms.get("view"),new e$k("ambient",(e=>e.ambient)),new e$k("diffuse",(e=>e.diffuse)),new o$m("opacity",(e=>e.opacity)),new o$m("layerOpacity",(e=>e.layerOpacity))),e&&G.uniforms.add(new s$5("tex",(e=>e.texture))),z.include(m$5,R),z.include(n$1,R),G.include(i$5),a$7(G),G.main.add(o$o`
      discardBySlice(vpos);
      ${r$d(R.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${e?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${r$d(e,`${r$d(R.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":Q?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${R.hasVertexColors?o$o`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$o`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${r$d(K,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${o$o`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${r$d(X,`vec3 normalGround = ${Q?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${X?o$o`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${r$d(K,o$o`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${K?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`);}return z.include(h$8,R),z}const z$1=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}));

class i extends k$2{constructor(r,i,t){super(r,i,t,new t$e(z$1,(()=>__vitePreload(() => import('./HUDMaterial.glsl-Ch1dz9zu.js').then(n => n.R),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]):void 0,import.meta.url)))),this.type="RealisticTreeTechnique";}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class B extends n$8{constructor(e,r){super(e,z),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[A$3.OPAQUE_MATERIAL,e=>(t$n(e)||o$y(e))&&!this.parameters.transparent],[A$3.TRANSPARENT_MATERIAL,e=>(t$n(e)||o$y(e))&&this.parameters.transparent&&this.parameters.writeDepth],[A$3.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(r$f(e)||o$y(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=U(this.parameters),this._configuration=new c(r.spherical,r.doublePrecisionRequiresObfuscation);}isVisibleForOutput(e){return e!==n$g.Shadow&&e!==n$g.ShadowExcludeHighlight&&e!==n$g.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<o$u)return !1;const{hasInstancedColor:r,hasVertexColors:t,hasSymbolColors:i,vvColor:s}=e,a=r||s||i,o="replace"===e.colorMixMode,n=e.opacity>=o$u;if(t&&a)return o||n;const c=e.externalColor&&e.externalColor[3]>=o$u;return t?o?c:n:a?o||n:o?c:n}get hasEmissions(){return !!this.parameters.emissiveTextureId||!H$3(this.parameters.emissiveFactor,_$4)}getConfiguration(e,r){const t=this.parameters,{treeRendering:i,doubleSided:s,doubleSidedType:a}=t;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!t.normalTextureId,this._configuration.hasColorTexture=!!t.textureId,this._configuration.hasVertexTangents=!i&&t.hasVertexTangents,this._configuration.instanced=t.isInstanced,this._configuration.instancedDoublePrecision=t.instancedDoublePrecision,this._configuration.vvSize=!!t.vvSize,this._configuration.hasVerticalOffset=null!=t.verticalOffset,this._configuration.hasScreenSizePerspective=null!=t.screenSizePerspective,this._configuration.hasSlicePlane=t.hasSlicePlane,this._configuration.hasSliceHighlight=t.hasSliceHighlight,this._configuration.alphaDiscardMode=t.textureAlphaMode,this._configuration.normalType=i?a$h.Attribute:t.normalType,this._configuration.transparent=t.transparent,this._configuration.writeDepth=t.writeDepth,null!=t.customDepthTest&&(this._configuration.customDepthTest=t.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=t.hasSlicePlane?e$s.None:t.cullFace,this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=t.modelTransformation,this._configuration.hasVertexColors=t.hasVertexColors,this._configuration.hasSymbolColors=t.hasSymbolColors,this._configuration.doubleSidedMode=i?i$a.WindingOrder:s&&"normal"===a?i$a.View:s&&"winding-order"===a?i$a.WindingOrder:i$a.None,this._configuration.instancedColor=t.hasInstancedColor,this._configuration.receiveShadows=t.receiveShadows&&t.receiveShadows,this._configuration.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=r.ssao,this._configuration.vvColor=!!t.vvColor,this._configuration.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,this._configuration.pbrMode=t.usePBR?t.isSchematic?n$2.Schematic:n$2.Normal:n$2.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!t.metallicRoughnessTextureId,this._configuration.emissionSource=i?d$4.None:null!=t.emissiveTextureId?d$4.Texture:t.usePBR?d$4.Value:d$4.None,this._configuration.hasOcclusionTexture=!i&&!!t.occlusionTextureId,this._configuration.offsetBackfaces=!(!t.transparent||!t.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<A$2,this._configuration.snowCover=H(r),this._configuration.hasColorTextureTransform=!!t.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,l,u,h,m,p){if(null!=this.parameters.verticalOffset){const e=u.camera;o$p(J,l[12],l[13],l[14]);let p=null;switch(u.viewingMode){case l$a.Global:p=A$4(G,J);break;case l$a.Local:p=s$f(G,F);}let d=0;const g=c$d(Q,J,e.eye),T=r$7(g),x=g$6(g,g,1/T);let v=null;this.parameters.screenSizePerspective&&(v=P$3(p,x)),d+=i$f(e,T,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),g$6(p,p,d),N$4(Y,p,u.transform.inverseRotation),h=c$d(W,h,Y),m=c$d(k,m,Y);}p$1(e,u,h,m,d$e(u.verticalOffset),p);}createGLMaterial(e){return new q(e)}createBufferWriter(){return new r(this._vertexBufferLayout)}}class q extends u$4{constructor(e){super({...e,...e.material.parameters});}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const i$1=e.camera.viewInverseTransposeMatrix;return o$p(t.origin,i$1[3],i$1[7],i$1[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?i:k$2,e)}}class z extends F$2{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}function H(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}function U(e){const r=H$5().vec3f(e$n.POSITION);e.normalType===a$h.Compressed?r.vec2i16(e$n.NORMALCOMPRESSED,{glNormalized:!0}):r.vec3f(e$n.NORMAL),e.hasVertexTangents&&r.vec4f(e$n.TANGENT);return (e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&r.vec2f(e$n.UV0),e.hasVertexColors&&r.vec4u8(e$n.COLOR),e.hasSymbolColors&&r.vec4u8(e$n.SYMBOLCOLOR),e$l()&&r.vec4u8(e$n.OBJECTANDLAYERIDCOLOR),r}const W=n$d(),k=n$d(),F=r$a(0,0,1),G=n$d(),Y=n$d(),J=n$d(),Q=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let o$1 = class o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,s$d(i.length>=1),s$d(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;s$d(m.length%this._numIndexPerPrimitive==0),s$d(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=r$a(c[u],c[u+1],c[u+2]),x=t$o(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2]);}}this.bbMin=f,this.bbMax=x;const P=I$4(n$d(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=v)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o;}this.center=P,a.clear();}getChildren(){if(this._children||v$6(this.bbMin,this.bbMax)<=1)return this._children;const i=I$4(n$d(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r);}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e];}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t];}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){a.prune();}};const a=new l$b({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(o){if(o.length<U$2)return Array.from(o);if(y$4(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return i$k(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}

export { u$4 as $, A$3 as A, B, C$1 as C, l$7 as D, e$a as E, e as F, e$f as G, t$b as H, g$3 as I, o$i as J, n$9 as K, t$e as L, i$e as M, N$2 as N, O$6 as O, P$1 as P, i$2 as Q, a$1 as R, d$a as S, T$4 as T, d$4 as U, n$8 as V, m$a as W, p$8 as X, d$d as Y, i$f as Z, W$1 as _, o$1 as a, h$6 as a0, p$7 as a1, e$l as a2, b as a3, O as a4, S as a5, d as a6, p as a7, B$1 as a8, R$1 as a9, i$7 as aa, f$2 as ab, d$6 as ac, J$1 as ad, R as ae, o$g as b, t$g as c, a$e as d, e$h as e, n$b as f, t$f as g, o$j as h, s$7 as i, d$b as j, f$9 as k, e$b as l, o$m as m, n$7 as n, o, f$7 as p, p$5 as q, r$5 as r, s$8 as s, t$d as t, o$c as u, s$3 as v, w$2 as w, a$6 as x, s$5 as y, o$8 as z };
