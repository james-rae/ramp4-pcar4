import { oY as $t, oZ as Dt, o_ as k, o$ as Lt, k7 as oe, p0 as Nt, p1 as me, p2 as S, p3 as Pe, p4 as Te, p5 as ie, aO as zt, aa as Ft, p6 as fe, p7 as Ce, p8 as Xe, p9 as Ut, pa as Vt, pb as Gt, pc as Ht, d8 as K, pd as Wt, pe as qt, D as Le, pf as B, jw as Xt, da as jt, fx as je, f2 as Yt, fG as Kt, a9 as U, os as Jt, pg as Qt, ot as Zt, gh as ei, jl as ti, ph as ii, fE as P, pi as ri, ft as si, $ as ue, mA as Ye, jS as ai, ma as ni, s as J, mX as oi, dK as Ne, M as Ke, a1 as li, ad as hi, fr as ci, aG as Ee, bI as Ue, fL as Re, mr as ui, bO as Je, bP as di, bM as pi, lN as _i, lP as mi, kG as fi, iq as gi, pj as yi, pk as vi, mc as Qe, pl as bi, fQ as wi, k9 as xi, bl as Mi, fy as Si, S as ze, T as Oi, aN as Ze, dj as Pi, pm as Ti } from "./main-DHXLMse1.js";
import { y as Ci, b as re, z as Ei, t as Ri, G as zi, I as Fi } from "./UpdateTracking2D-DZd6CIsL.js";
import { i as be } from "./enums-BsbtGCGp.js";
import { m as et, a as tt, l as ki, c as Bi } from "./SDFHelper-CLUKg7Gw.js";
import { l as it } from "./PieChartMeshWriter-C3D4PA7D.js";
import { s as Ai, i as rt, t as V, n as Fe, l as Ii, m as st, u as $i, o as Di, L as $e, H as le, I as Li, S as at, T as Ni, W as Ui, X as Vi, w as Gi } from "./definitions-Doe0g1C2.js";
import { A as ge, E as D, t as Hi, i as Wi, o as nt, h as qi, s as Xi } from "./Container-JHAmVaDa.js";
import { d as ji, e as ot, a as W, c as lt, h as ht, i as Yi, m as Ki } from "./WGLContainer-Cfx415Pj.js";
import { L as A } from "./enums-qHpGJ28Q.js";
import { a as Ji, e as we, o as Ve } from "./ProgramTemplate-DogOLZ0L.js";
import { glslifyDefineMap as Me } from "./webglDeps-1iVd6x9t.js";
import { e as ct, r as Qi, t as Zi, a as er, n as tr, b as ir, c as rr } from "./MagnifierPrograms-C8LYlaYf.js";
import { d as Ua, y as Va } from "./MagnifierPrograms-C8LYlaYf.js";
import { c as Ge, E as L, i as He, s as sr } from "./Program-BYtVT21d.js";
import { R as v, E as ce, F as We, G as z, D as E, L as N, O as De, I as ke, C as ut, B as qe, U as kt, T as dt, N as Be, P as ar } from "./enums-DDkmfb-t.js";
import { o as nr, y as or } from "./RenderingContext-BH0S1gLs.js";
import { p as lr, s as hr } from "./imageUtils-Do1PjTTB.js";
import { e as cr, i as ur } from "./rasterizingUtils-EEfujMLh.js";
import { t as $ } from "./Rect-DD6XS68q.js";
import { e as R, c as G } from "./Texture-D-YIHT8g.js";
import { o as dr } from "./floatRGBA-dYp-2nX9.js";
import { j as pr, M as _r, y as mr } from "./LabelMetric-BZ1wS013.js";
import { f as fr } from "./utils-DfaQU0Vk.js";
import { t as pt } from "./VertexElementDescriptor-BAy1DPb3.js";
import { T as gr, w as yr } from "./FeatureCommandQueue-DbgU6j82.js";
import { W as vr } from "./MeshWriterRegistry-ChAUVonf.js";
import { V as Ha } from "./GraphicsView2D-kwtVWAm4.js";
import { t as qa } from "./GraphicContainer-MTI2zRzd.js";
import { t as _t } from "./requestImageUtils-C_AbJRNu.js";
const br = () => Le.getLogger("esri.symbols.cim.cimAnalyzer");
function wr(h) {
  const e = h.markerPlacement;
  return e && e.angleToLine ? be.MAP : be.SCREEN;
}
class xr {
  constructor(e) {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [], e && (this._resourceManager = e);
  }
  analyzeSymbolReference(e, t, i) {
    if (this._cimLayers = i ?? [], !e) return this._cimLayers;
    if (this._reset(), e.primitiveOverrides) {
      this._primitiveOverrides = e.primitiveOverrides;
      for (const r of this._primitiveOverrides) {
        const a = r.valueExpressionInfo;
        if (a) this._setPoMap(r.primitiveName, r.propertyName, a);
        else if (r.value != null) {
          let s = r.value;
          r.propertyName.includes("Color") && ($t(s) && (s = Dt(s)), s = k(s)), this._setPoMap(r.primitiveName, r.propertyName, s);
        }
      }
    }
    return this._analyzeSymbol(e.symbol, t), this._cimLayers;
  }
  _reset() {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [];
  }
  _analyzeSymbol(e, t) {
    switch (e?.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this._analyzeMultiLayerSymbol(e, t);
    }
  }
  _analyzeMultiLayerSymbol(e, t) {
    const i = e?.symbolLayers;
    if (!i) return;
    const r = e.effects;
    let a = be.SCREEN;
    const s = Lt(e) ?? 0;
    e.type === "CIMPointSymbol" && e.angleAlignment === "Map" && (a = be.MAP);
    const n = e.type === "CIMPolygonSymbol";
    let l = i.length;
    for (; l--; ) {
      const o = i[l];
      if (!o || o.enable === !1) continue;
      let c;
      r?.length && (c = [...r]);
      const u = o.effects;
      u?.length && (r ? c.push(...u) : c = [...u]);
      let d = null;
      if (c) {
        d = [];
        for (const f of c) {
          const _ = oe.findEffectOverrides(f, this._primitiveOverrides);
          _ && d.push(_);
        }
      }
      const p = [];
      switch (oe.findApplicableOverrides(o, this._primitiveOverrides, p), o.type) {
        case "CIMSolidFill":
          this._analyzeSolidFill(o, d);
          break;
        case "CIMPictureFill":
          this._analyzePictureFill(o, d);
          break;
        case "CIMHatchFill":
          this._analyzeHatchFill(o, d);
          break;
        case "CIMGradientFill":
          this._analyzeGradientFill(o, d);
          break;
        case "CIMSolidStroke":
          this._analyzeSolidStroke(o, d, n, s);
          break;
        case "CIMPictureStroke":
          this._analyzePictureStroke(o, d, n, s);
          break;
        case "CIMGradientStroke":
          this._analyzeGradientStroke(o, d, n, s);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker": {
          e.type !== "CIMLineSymbol" && e.type !== "CIMPolygonSymbol" || (a = wr(o));
          const f = [], _ = o.primitiveName;
          _ && f.push(_);
          const m = n && Nt(o.markerPlacement);
          this._analyzeMarker(o, d, null, f, a, s, t, [], !1, m);
          break;
        }
        default:
          br().error("Cannot analyze CIM layer", o.type);
      }
    }
  }
  _analyzeSolidFill(e, t) {
    const { primitiveName: i, type: r } = e, a = k(e.color);
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e.colorLocked, color: this._getValueOrOverrideExpression(r, i, "Color", a), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t, applyRandomOffset: !1, sampleAlphaOnly: !0, hasUnresolvedReplacementColor: !1 });
  }
  _analyzePictureFill(e, t) {
    const { primitiveName: i, type: r } = e, a = me(e), s = S(e.height, B.CIMPictureFill.height);
    let n = S(e.scaleX, 1);
    if ("width" in e && typeof e.width == "number") {
      const o = e.width;
      let c = 1;
      const u = this._resourceManager.getResource(e.url);
      u != null && (c = u.width / u.height), n /= c * (s / o);
    }
    const l = { type: "sprite-rasterization-param", resource: e, overrides: this._getPrimitiveMaterialOverrides(i, r) };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: l, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(r, i, "TintColor", a), height: this._getValueOrOverrideExpression(r, i, "Height", s), scaleX: this._getValueOrOverrideExpression(r, i, "ScaleX", n), angle: this._getValueOrOverrideExpression(r, i, "Rotation", S(e.rotation)), offsetX: this._getValueOrOverrideExpression(r, i, "OffsetX", S(e.offsetX)), offsetY: this._getValueOrOverrideExpression(r, i, "OffsetY", S(e.offsetY)), applyRandomOffset: !1, sampleAlphaOnly: !1, hasUnresolvedReplacementColor: !1 });
  }
  _analyzeHatchFill(e, t) {
    const { primitiveName: i, type: r } = e, a = this._analyzeMaterialOverrides(i, ["Rotation", "OffsetX", "OffsetY"]), s = Pe(a);
    let n = [255, 255, 255, 1], l = !1;
    if (e.lineSymbol?.symbolLayers) for (const c of e.lineSymbol.symbolLayers) {
      if (c.type !== "CIMSolidStroke") continue;
      const u = c.primitiveName ?? i;
      l || !u || c.colorLocked || this._poMap[u]?.Color == null && this._poMap[u]?.StrokeColor == null || (n = k(c.color), n = this._maybeGetValueOrOverrideExpression(u, "StrokeColor") ?? this._getValueOrOverrideExpression(r, u, "Color", n), l = !0);
      const d = this._maybeGetValueOrOverrideExpression(u, "StrokeWidth");
      if (d) {
        let p = null, f = null;
        typeof d == "number" ? p = d : f = d.valueExpressionInfo;
        let _ = s.find((m) => m.propertyName === "strokeWidth");
        _ ? _.propertyName = "width" : (_ = { type: "CIMPrimitiveOverride", primitiveName: u, propertyName: "width", valueExpressionInfo: f, value: p, defaultValue: Te(r, "width") }, s.push(_));
      }
    }
    const o = { type: "sprite-rasterization-param", resource: e, overrides: s };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: o, colorLocked: !!e.colorLocked, effects: t, color: n, height: this._getValueOrOverrideExpression(r, i, "Separation", S(e.separation, B.CIMHatchFill.separation)), scaleX: 1, angle: this._getValueOrOverrideExpression(r, i, "Rotation", S(e.rotation)), offsetX: this._getValueOrOverrideExpression(r, i, "OffsetX", S(e.offsetX)), offsetY: this._getValueOrOverrideExpression(r, i, "OffsetY", S(e.offsetY)), applyRandomOffset: !1, sampleAlphaOnly: !0, hasUnresolvedReplacementColor: !l });
  }
  _analyzeGradientFill(e, t) {
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e.colorLocked, effects: t, color: [128, 128, 128, 1], height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: !1, sampleAlphaOnly: !1, hasUnresolvedReplacementColor: !1 });
  }
  _analyzeSolidStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = k(e.color), l = S(e.width, B.CIMSolidStroke.width), o = ie(e.capStyle, B.CIMSolidStroke.capstyle), c = ie(e.joinStyle, B.CIMSolidStroke.joinstyle), u = e.miterLimit;
    let d, p, f = [];
    if (this._analyzePrimitiveOverrides(a, t, null, null) && (f = this._getPrimitiveMaterialOverrides(a, s)), t && Array.isArray(t) && t.length > 0) {
      const m = t[t.length - 1].effect;
      m && m.type === "CIMGeometricEffectDashes" && m.lineDashEnding === "NoConstraint" && m.offsetAlongLine === null && (d = m.dashTemplate, p = m.scaleDash, (t = [...t]).pop());
    }
    const _ = d !== void 0 ? { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: d, capStyle: o }, overrides: f } : null;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: _, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(s, a, "Color", n), width: this._getValueOrOverrideExpression(s, a, "Width", l), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", o), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", c), miterLimit: u && this._getValueOrOverrideExpression(s, a, "MiterLimit", u), referenceWidth: r, zOrder: Ae(e.name), dashTemplate: d, scaleDash: p, sampleAlphaOnly: !0 });
  }
  _analyzePictureStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = me(e), l = S(e.width, B.CIMPictureStroke.width), o = ie(e.capStyle, B.CIMPictureStroke.capstyle), c = ie(e.joinStyle, B.CIMPictureStroke.joinstyle), u = e.miterLimit, d = { type: "sprite-rasterization-param", resource: e, overrides: this._getPrimitiveMaterialOverrides(a, s) };
    this._cimLayers.push({ type: "line", spriteRasterizationParam: d, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(s, a, "TintColor", n), width: this._getValueOrOverrideExpression(s, a, "Width", l), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", o), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", c), miterLimit: u && this._getValueOrOverrideExpression(s, a, "MiterLimit", u), referenceWidth: r, zOrder: Ae(e.name), dashTemplate: null, scaleDash: !1, sampleAlphaOnly: !1 });
  }
  _analyzeGradientStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = S(e.width, B.CIMSolidStroke.width), l = ie(e.capStyle, B.CIMGradientStroke.capstyle), o = ie(e.joinStyle, B.CIMGradientStroke.joinstyle), c = e.miterLimit;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: null, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: [128, 128, 128, 1], width: this._getValueOrOverrideExpression(s, a, "Width", n), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", l), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", o), miterLimit: c && this._getValueOrOverrideExpression(s, a, "MiterLimit", c), referenceWidth: r, zOrder: Ae(e.name), dashTemplate: null, scaleDash: !1, sampleAlphaOnly: !1 });
  }
  _analyzeMarker(e, t, i, r, a, s, n, l, o = !1, c = !1) {
    if (o ||= !!e.colorLocked, this._analyzeMarkerInsidePolygon(e, t, o)) return;
    const u = S(e.size, B.CIMVectorMarker.size), d = S(e.rotation), p = S(e.offsetX), f = S(e.offsetY), { primitiveName: _, type: m } = e, g = this._getValueOrOverrideExpression(m, _, "Size", u), y = this._getValueOrOverrideExpression(m, _, "Rotation", d), x = this._getValueOrOverrideExpression(m, _, "OffsetX", p), w = this._getValueOrOverrideExpression(m, _, "OffsetY", f);
    switch (e.type) {
      case "CIMPictureMarker":
        this._analyzePictureMarker(e, t, i, r, a, s, g, y, x, w, l, o, c);
        break;
      case "CIMVectorMarker":
        this._analyzeVectorMarker(e, t, i, r, a, s, g, y, x, w, l, n, o, c);
    }
  }
  _analyzeMarkerInsidePolygon(e, t, i) {
    const { markerPlacement: r, type: a } = e;
    if (!r || r.type !== "CIMMarkerPlacementInsidePolygon") return !1;
    if (a === "CIMVectorMarker" || a === "CIMPictureMarker") {
      const d = e.primitiveName;
      if (d && this._analyzePrimitiveOverrides([d], t, null, null)) return !1;
      const p = r.primitiveName;
      if (p && this._analyzePrimitiveOverrides([p], t, null, null)) return !1;
      if (a === "CIMVectorMarker") {
        const { markerGraphics: f } = e;
        if (f) for (const _ of f) {
          const { symbol: m } = _;
          if (m?.type === "CIMPolygonSymbol" && m.symbolLayers) {
            const { symbolLayers: g } = m;
            for (const y of g) if (y.type === "CIMSolidStroke") return !1;
          }
        }
      } else {
        const { animatedSymbolProperties: f } = e;
        if (f) return !1;
      }
    }
    const s = Math.abs(r.stepX), n = Math.abs(r.stepY);
    if (s === 0 || n === 0) return !0;
    let l, o;
    if (r.gridType === "Random") {
      const d = Xt(Ai), p = Math.max(Math.floor(d / s), 1);
      l = n * Math.max(Math.floor(d / n), 1), o = p * s / l;
    } else r.shiftOddRows ? (l = 2 * n, o = s / n * 0.5) : (l = n, o = s / n);
    const c = me(e), u = e.type === "CIMCharacterMarker" ? null : { type: "sprite-rasterization-param", resource: e, overrides: [] };
    return this._cimLayers.push({ type: "fill", spriteRasterizationParam: u, colorLocked: i, effects: t, color: c, height: l, scaleX: o, angle: r.gridAngle, offsetX: S(r.offsetX), offsetY: S(r.offsetY), applyRandomOffset: r.gridType === "Random", sampleAlphaOnly: e.type !== "CIMPictureMarker", hasUnresolvedReplacementColor: !0 }), !0;
  }
  _analyzePictureMarker(e, t, i, r, a, s, n, l, o, c, u, d, p) {
    const { animatedSymbolProperties: f, primitiveName: _, type: m } = e;
    let g = S(e.scaleX, 1);
    const y = me(e);
    i || (i = this._createMarkerPlacementOverrideExpression(e.markerPlacement));
    const x = this._createGIFAnimatedSymbolPropertiesOverrideExpression(f), w = e.anchorPoint ?? { x: 0, y: 0 };
    if ("width" in e && typeof e.width == "number") {
      const O = e.width;
      let F = 1;
      const C = this._resourceManager.getResource(e.url);
      C != null && (F = C.width / C.height), g /= F * (S(e.size) / O);
    }
    const M = [...r];
    let b;
    e.primitiveName && M.push(e.primitiveName), f || x ? b = { type: "animated", url: e.url, urlHash: "H" + zt(e.url), playAnimation: e.animatedSymbolProperties?.playAnimation, reverseAnimation: e.animatedSymbolProperties?.reverseAnimation, randomizeStartTime: e.animatedSymbolProperties?.randomizeStartTime, randomizeStartSeed: e.animatedSymbolProperties?.randomizeStartSeed, startTimeOffset: e.animatedSymbolProperties?.startTimeOffset, duration: e.animatedSymbolProperties?.duration, repeatType: e.animatedSymbolProperties?.repeatType, repeatDelay: e.animatedSymbolProperties?.repeatDelay } : (b = Ft(e), b.markerPlacement = null);
    const T = { type: "sprite-rasterization-param", resource: b, overrides: this._getMaterialOverrides(M, m) };
    x && T.overrides.push(...x.overrides), this._cimLayers.push({ type: "marker", spriteRasterizationParam: T, colorLocked: d, effects: t, scaleSymbolsProportionally: !1, alignment: a, size: n, scaleX: this._getValueOrOverrideExpression(m, _, "ScaleX", g), rotation: l, offsetX: o, offsetY: c, transform: { type: "cim-marker-transform-param", params: u }, color: this._getValueOrOverrideExpression(m, _, "TintColor", y), anchorPoint: { x: w.x, y: w.y }, isAbsoluteAnchorPoint: e.anchorPointUnits !== "Relative", outlineColor: [0, 0, 0, 0], outlineWidth: 0, frameHeight: 0, widthRatio: 1, rotateClockwise: !!e.rotateClockwise, referenceSize: s, sizeRatio: 1, isOutline: p, markerPlacement: i });
  }
  _analyzeVectorMarker(e, t, i, r, a, s, n, l, o, c, u, d, p, f) {
    const _ = e.markerGraphics;
    if (!_) return;
    const m = e.frame;
    let g = 0;
    if (g = m ? m.ymax - m.ymin : s, g) {
      const y = { offsetX: o, offsetY: c, rotation: l, size: n, frameHeight: g, rotateClockWise: !!e.rotateClockwise };
      u = [...u, y];
    }
    i || (i = this._createMarkerPlacementOverrideExpression(e.markerPlacement));
    for (const y of _) if (y) {
      const x = y.symbol;
      if (!x) continue;
      const w = y.primitiveName;
      let M;
      if (w && r.push(w), (x.type === "CIMPointSymbol" || x.type === "CIMTextSymbol") && m) {
        let b = 0, T = 0;
        const O = y.geometry;
        "x" in O && "y" in O && (b += O.x - 0.5 * (m.xmin + m.xmax), T += O.y - 0.5 * (m.ymin + m.ymax));
        const F = e.anchorPoint;
        F && (e.anchorPointUnits === "Absolute" ? (b -= F.x, T -= F.y) : m && (b -= (m.xmax - m.xmin) * F.x, T -= (m.ymax - m.ymin) * F.y));
        const C = { offsetX: b, offsetY: T, rotation: 0, size: 0, frameHeight: 0, rotateClockWise: !1 };
        M = [...u, C];
      }
      switch (x.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          d || Or(x) ? this._analyzeMultiLayerGraphicNonSDF(e, t, i, y, r, a, s, M ?? u, g, p, f) : this._analyzeMultiLayerGraphic(e, t, i, y, r, a, s, M ?? u, g, p, f);
          break;
        case "CIMTextSymbol":
          this._analyzeTextGraphic(t, i, y, r, a, s, M ?? u, p);
      }
      w && r.pop();
    }
  }
  _analyzeMultiLayerGraphic(e, t, i, r, a, s, n, l, o, c, u) {
    const d = r.symbol, p = d.symbolLayers;
    if (!p) return;
    let f = p.length;
    if (Sr(p)) return void this._analyzeCompositeMarkerGraphic(e, t, i, r, p, s, n, l, o, c, u);
    const _ = this._resourceManager.geometryEngine, m = it.applyEffects(d.effects, r.geometry, _);
    if (m) for (; f--; ) {
      const g = p[f];
      if (!g || g.enable === !1) continue;
      const y = g.primitiveName;
      switch (y && a.push(y), g.type) {
        case "CIMSolidFill":
        case "CIMSolidStroke": {
          const x = it.applyEffects(g.effects, m, _), w = et(x);
          if (!w) continue;
          const M = e.anchorPointUnits !== "Relative", [b, T, O, F] = tt(w, e.frame, e.size, e.anchorPoint, M), C = g.type === "CIMSolidFill", Q = { type: "sdf", geom: x, asFill: C }, { path: q } = g, Z = C ? k(fe(g)) : q == null ? k(Ce(g)) : [0, 0, 0, 0], ee = C ? [0, 0, 0, 0] : k(Ce(g)), se = Xe(g) ?? 0;
          if (!C && !se) break;
          const te = r.primitiveName;
          let ae = null;
          C && !g.colorLocked && (ae = this._maybeGetValueOrOverrideExpression(te, "FillColor"));
          let de = null;
          C || g.colorLocked || (de = this._maybeGetValueOrOverrideExpression(te, "StrokeColor"));
          const pe = ae ?? this._getValueOrOverrideExpression(g.type, y, "Color", Z), Oe = de ?? this._getValueOrOverrideExpression(g.type, y, "Color", ee), X = this._maybeGetValueOrOverrideExpression(te, "StrokeWidth") ?? this._getValueOrOverrideExpression(g.type, y, "Width", se), _e = q ? { type: "sprite-rasterization-param", resource: { type: "path", path: q, asFill: C }, overrides: [] } : { type: "sprite-rasterization-param", resource: Q, overrides: [] };
          this._cimLayers.push({ type: "marker", spriteRasterizationParam: _e, colorLocked: !!g.colorLocked || !!c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: s, anchorPoint: { x: T, y: O }, isAbsoluteAnchorPoint: M, size: o, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: l }, frameHeight: o, widthRatio: F, rotateClockwise: !1, referenceSize: n, sizeRatio: b, color: pe, outlineColor: Oe, outlineWidth: X, isOutline: u, markerPlacement: i });
          break;
        }
        case "CIMPictureMarker":
        case "CIMVectorMarker":
          g.markerPlacement ? this._analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, l, o, !!g.colorLocked || !!c, u) : this._analyzeMarker(g, t, i, a, s, n, !1, l, c, u);
          break;
        default:
          this._analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, l, o, !!g.colorLocked || !!c, u);
      }
      y && a.pop();
    }
  }
  _analyzeTextGraphic(e, t, i, r, a, s, n, l) {
    const o = [];
    oe.findApplicableOverrides(i, this._primitiveOverrides, o);
    const c = i.geometry;
    if (!("x" in c) || !("y" in c)) return;
    const u = i.symbol, d = Ut(u), p = Vt(u.fontStyleName), f = Ci(u.fontFamilyName);
    u.font = { family: f, decoration: d, ...p };
    const _ = S(u.height, B.CIMTextSymbol.height), m = S(u.angle), g = S(u.offsetX), y = S(u.offsetY), x = k(fe(u));
    let w = k(Ce(u)), M = Xe(u) ?? 0;
    M || (w = k(fe(u.haloSymbol)), M = S(u.haloSize));
    let b = !1;
    if (u.symbol?.symbolLayers) for (const X of u.symbol.symbolLayers)
      k(fe(X)) != null && (b = !!X.colorLocked);
    const T = i.primitiveName;
    let O = null;
    b || (O = this._maybeGetValueOrOverrideExpression(T, "FillColor"));
    const F = this._maybeGetValueOrOverrideExpression(T, "TextSize"), C = this._maybeGetValueOrOverrideExpression(T, "TextAngle"), Q = this._maybeGetValueOrOverrideExpression(T, "TextOffsetX"), q = this._maybeGetValueOrOverrideExpression(T, "TextOffsetY");
    let Z = null, ee = null, se = 0;
    if (u.callout && u.callout.type === "CIMBackgroundCallout") {
      const X = u.callout;
      if (X.backgroundSymbol) {
        const _e = X.backgroundSymbol.symbolLayers;
        if (_e) for (const ne of _e) ne.type === "CIMSolidFill" ? Z = k(ne.color) : ne.type === "CIMSolidStroke" && (ee = k(ne.color), se = S(ne.width, B.CIMSolidStroke.width));
      }
    }
    const te = this._getValueOrOverrideExpression(u.type, i.primitiveName, "TextString", i.textString ?? "");
    if (te == null) return;
    const { fontStyleName: ae } = u, de = f + (ae ? "-" + ae.toLowerCase() : "-regular"), pe = this._getMaterialOverrides(r, u.type);
    pe.push(...this._getPrimitiveMaterialOverrides(i.primitiveName, u.type));
    const Oe = { type: "text-rasterization-param", resource: { type: "text", textString: i.textString ?? "", font: u.font, symbol: u, primitiveName: i.primitiveName }, overrides: pe };
    this._cimLayers.push({ type: "text", lineWidth: u.lineWidth, textRasterizationParam: Oe, colorLocked: !!l || !!b, effects: e, alignment: a, anchorPoint: { x: 0, y: 0 }, isAbsoluteAnchorPoint: !1, fontName: de, decoration: d, weight: p.weight, style: p.style, size: F ?? _, angle: C ?? m, offsetX: Q ?? g, offsetY: q ?? y, transform: { type: "cim-marker-transform-param", params: n }, horizontalAlignment: Gt(u.horizontalAlignment), verticalAlignment: Ht(u.verticalAlignment), text: te, color: O ?? this._getValueOrOverrideExpression(u.type, i.primitiveName, "Color", x), outlineColor: w, outlineSize: M, backgroundColor: Z, borderLineColor: ee, borderLineWidth: se, referenceSize: s, sizeRatio: 1, markerPlacement: t });
  }
  _analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, l, o, c, u) {
    const d = Mr(e, r), p = e.primitiveName, f = this._analyzeMaterialOverrides(p, ["Rotation", "OffsetX", "OffsetY"]), _ = Pe(f), [m, g, y] = re.getTextureAnchor(d, this._resourceManager), x = this._getMaterialOverrides(a, e.type);
    x.push(..._);
    const w = { type: "sprite-rasterization-param", resource: { ...d, avoidSDFRasterization: !0 }, overrides: x };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: w, colorLocked: c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: s, anchorPoint: { x: m, y: g }, isAbsoluteAnchorPoint: !1, size: o, rotation: 0, offsetX: 0, offsetY: 0, transform: { type: "cim-marker-transform-param", params: l }, color: [255, 255, 255, 1], outlineColor: [0, 0, 0, 0], outlineWidth: 0, scaleX: 1, frameHeight: o, widthRatio: 1, rotateClockwise: !!e.rotateClockwise, referenceSize: n, sizeRatio: y / K(e.size), isOutline: u, markerPlacement: i });
  }
  _createMarkerPlacementOverrideExpression(e) {
    if (!e) return null;
    const t = [];
    return oe.findApplicableOverrides(e, this._primitiveOverrides, t), { type: "cim-marker-placement-param", placement: e, overrides: mt(t) };
  }
  _createGIFAnimatedSymbolPropertiesOverrideExpression(e) {
    if (!e) return null;
    const t = [];
    return oe.findApplicableOverrides(e, this._primitiveOverrides, t), { type: "cim-gif-animation-params", animation: e, overrides: mt(t) };
  }
  _analyzeCompositeMarkerGraphic(e, t, i, r, a, s, n, l, o, c, u) {
    const d = r.geometry, p = a[0], f = a[1], _ = et(d);
    if (!_) return;
    const m = e.anchorPointUnits !== "Relative", [g, y, x, w] = tt(_, e.frame, e.size, e.anchorPoint, m), { path: M } = f, b = f.primitiveName, T = p.primitiveName, O = r.primitiveName;
    let F = null;
    f.colorLocked || c || (F = this._maybeGetValueOrOverrideExpression(O, "FillColor"));
    const C = F ?? this._getValueOrOverrideExpression(f.type, b, "Color", k(f.color));
    let Q = null;
    p.colorLocked || c || (Q = this._maybeGetValueOrOverrideExpression(O, "StrokeColor"));
    const q = Q ?? this._getValueOrOverrideExpression(p.type, T, "Color", k(p.color)), Z = this._maybeGetValueOrOverrideExpression(O, "StrokeWidth") ?? this._getValueOrOverrideExpression(p.type, T, "Width", S(p.width, B.CIMSolidStroke.width)), ee = { type: "sprite-rasterization-param", resource: M ? { type: "path", path: M, asFill: !0 } : { type: "sdf", geom: d, asFill: !0 }, overrides: [] };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: ee, colorLocked: c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: s, anchorPoint: { x: y, y: x }, isAbsoluteAnchorPoint: m, size: o, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: l }, frameHeight: o, widthRatio: w, rotateClockwise: !1, referenceSize: n, sizeRatio: g, color: C, outlineColor: q, outlineWidth: Z, isOutline: u, markerPlacement: i });
  }
  _setPoMap(e, t, i) {
    let r;
    this._poMap[e] ? r = this._poMap[e] : (r = {}, this._poMap[e] = r), r[t] = i;
  }
  _maybeGetValueOrOverrideExpression(e, t, i) {
    return this._getValueOrOverrideExpression("", e, t, i, !1);
  }
  _getValueOrOverrideExpression(e, t, i, r, a = !0) {
    if (a && !Wt(r) && (r = Te(e, i.toLowerCase())), t == null) return r;
    const s = this._poMap[t];
    if (s == null) return r;
    const n = s[i];
    return typeof n == "string" || typeof n == "number" || Array.isArray(n) ? n : n ? { valueExpressionInfo: n, defaultValue: r } : r;
  }
  _analyzePrimitiveOverrides(e, t, i, r) {
    if (e == null) return !1;
    typeof e == "string" && (e = [e]);
    for (const a of this._primitiveOverrides) if (e.includes(a.primitiveName) && a.valueExpressionInfo) return !0;
    if (t != null) {
      for (const a of t) if (a?.overrides.length > 0) return !0;
    }
    if (i != null) {
      for (const a of i) if (a?.overrides.length > 0) return !0;
    }
    if (r != null) {
      for (const a of r) if (a?.overrides.length > 0) return !0;
    }
    return !1;
  }
  _getMaterialOverrides(e, t) {
    if (!e) return [];
    const i = [];
    for (const r of e) i.push(...this._getPrimitiveMaterialOverrides(r, t));
    return i;
  }
  _getPrimitiveMaterialOverrides(e, t) {
    if (!e) return [];
    const i = Pe(this._primitiveOverrides.filter((r) => r.primitiveName === e));
    return i.forEach((r) => r.defaultValue = Te(t, r.propertyName.toLowerCase())), i;
  }
  _analyzeMaterialOverrides(e, t) {
    return this._primitiveOverrides.filter((i) => i.primitiveName !== e || !t.includes(i.propertyName));
  }
}
function Mr(h, e) {
  return { type: h.type, enable: !0, name: h.name, colorLocked: h.colorLocked, primitiveName: h.primitiveName, anchorPoint: h.anchorPoint, anchorPointUnits: h.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: h.rotateClockwise, rotation: 0, size: h.size, billboardMode3D: h.billboardMode3D, depth3D: h.depth3D, frame: h.frame, markerGraphics: [e], scaleSymbolsProportionally: h.scaleSymbolsProportionally, respectFrame: h.respectFrame, clippingPath: h.clippingPath };
}
function Ae(h) {
  if (h && h.indexOf("Level_") === 0) {
    const e = parseInt(h.substr(6), 10);
    if (!isNaN(e)) return e;
  }
  return 0;
}
const Sr = (h) => h && h.length === 2 && h[0].enable && h[1].enable && h[0].type === "CIMSolidStroke" && h[1].type === "CIMSolidFill" && h[0].path == null && h[1].path == null && !h[0].effects && !h[1].effects;
function Or(h) {
  const e = h.symbolLayers;
  if (!e || e.length !== 2) return !1;
  const t = e.find((r) => r.effects?.find((a) => a.type === "CIMGeometricEffectDashes" && a.dashTemplate != null)), i = e.find((r) => r.effects?.find((a) => a.type === "CIMGeometricEffectAddControlPoints"));
  return !!t || !!i;
}
function mt(h) {
  return Ft(h).map((e) => ({ ...e, propertyName: qt(e.propertyName) }));
}
let Pr = class {
  constructor(e) {
    this.events = new jt(), this._hasMajorPerformanceCaveat = !1, this._lastRenderFrameCounter = 0, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("style", "width: 100%; height:100%; display:block; willChange:transform");
    const t = { failIfMajorPerformanceCaveat: !0, alpha: !0, antialias: !1, depth: !0, stencil: !0 };
    e.appendChild(this._canvas);
    let i = je(this._canvas, t);
    i || (i = je(this._canvas, { ...t, failIfMajorPerformanceCaveat: !1 }), this._hasMajorPerformanceCaveat = !0), this._gl = i, this._handles = Yt([Kt(this._canvas, "webglcontextlost", (r) => this.events.emit("webgl-context-lost", r))]);
  }
  destroy() {
    this._canvas.parentNode?.removeChild(this._canvas), this._canvas = null, this._handles.remove(), this._gl = null;
  }
  get gl() {
    return this._gl;
  }
  render(e, t) {
    if (this._hasMajorPerformanceCaveat || U("esri-force-performance-mode")) {
      if (++this._lastRenderFrameCounter >= U("esri-performance-mode-frames-between-render") && (t(), this._lastRenderViewState = e.state.clone(), this._lastRenderFrameCounter = 0), this._lastRenderViewState) {
        const [i, r, a, s, n, l] = this._computeViewTransform(this._lastRenderViewState, e.state);
        this._canvas.style.transform = `matrix(${i}, ${r}, ${a}, ${s}, ${n}, ${l})`;
      }
    } else t();
  }
  resize(e) {
    const t = this._canvas, i = t.style, { state: { size: r }, pixelRatio: a } = e, s = r[0], n = r[1], l = Math.round(s * a), o = Math.round(n * a);
    t.width === l && t.height === o || (t.width = l, t.height = o), i.width = s + "px", i.height = n + "px";
  }
  _computeViewTransform(e, t) {
    const [i, r] = e.center, [a, s] = t.center, [n, l] = e.toScreen([0, 0], a, s), [o, c] = e.toScreen([0, 0], i, r), u = o - n, d = c - l, p = e.scale / t.scale, f = t.rotation - e.rotation, _ = ii();
    return Jt(_), Qt(_, _, [p, p]), Zt(_, _, ei(f)), ti(_, _, [u, d]), _;
  }
};
const Tr = { background: { "background.frag": `#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`, "background.vert": `precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}` }, circle: { "circle.frag": `precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`, "circle.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, fill: { "fill.frag": `precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`, "fill.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, icon: { "icon.frag": `precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`, "icon.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}` }, line: { "line.frag": `precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`, "line.vert": `precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}` }, outline: { "outline.frag": `varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`, "outline.vert": `attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, text: { "text.frag": `uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`, "text.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}` }, util: { "encoding.glsl": `const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`, "util.glsl": `float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}` } };
function Cr(h) {
  let e = Tr;
  return h.split("/").forEach((t) => {
    e && (e = e[t]);
  }), e;
}
const Er = new Ji(Cr);
function I(h) {
  return Er.resolveIncludes(h);
}
const ft = (h) => Me({ PATTERN: h.pattern }), Rr = { shaders: (h) => ({ vertexShader: ft(h) + I("background/background.vert"), fragmentShader: ft(h) + I("background/background.frag") }) }, zr = { shaders: (h) => ({ vertexShader: I("circle/circle.vert"), fragmentShader: I("circle/circle.frag") }) }, gt = (h) => Me({ PATTERN: h.pattern }), Fr = { shaders: (h) => ({ vertexShader: gt(h) + I("fill/fill.vert"), fragmentShader: gt(h) + I("fill/fill.frag") }) }, kr = { shaders: (h) => ({ vertexShader: I("outline/outline.vert"), fragmentShader: I("outline/outline.frag") }) }, yt = (h) => Me({ SDF: h.sdf }), Br = { shaders: (h) => ({ vertexShader: yt(h) + I("icon/icon.vert"), fragmentShader: yt(h) + I("icon/icon.frag") }) }, vt = (h) => Me({ PATTERN: h.pattern, SDF: h.sdf }), Ar = { shaders: (h) => ({ vertexShader: vt(h) + I("line/line.vert"), fragmentShader: vt(h) + I("line/line.frag") }) }, Ir = { shaders: (h) => ({ vertexShader: I("text/text.vert"), fragmentShader: I("text/text.frag") }) };
let $r = class {
  constructor() {
    this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getMaterialProgram(e, t, i) {
    const r = t.key << 3 | this._getMaterialOptionsValue(t.type, i);
    if (this._programByKey.has(r)) return this._programByKey.get(r);
    const a = this._getProgramTemplate(t.type), { shaders: s } = a, { vertexShader: n, fragmentShader: l } = s(i), o = t.getShaderHeader(), c = t.getShaderMain(), u = n.replace("#pragma header", o).replace("#pragma main", c), d = e.programCache.acquire(u, l, t.getAttributeLocations());
    return this._programByKey.set(r, d), d;
  }
  _getMaterialOptionsValue(e, t) {
    switch (e) {
      case A.BACKGROUND:
        return (t.pattern ? 1 : 0) << 1;
      case A.FILL:
        return (t.pattern ? 1 : 0) << 1;
      case A.OUTLINE:
        return 0;
      case A.LINE: {
        const i = t;
        return (i.sdf ? 1 : 0) << 2 | (i.pattern ? 1 : 0) << 1;
      }
      case A.ICON:
        return (t.sdf ? 1 : 0) << 1;
      case A.CIRCLE:
      case A.TEXT:
      default:
        return 0;
    }
  }
  _getProgramTemplate(e) {
    switch (e) {
      case A.BACKGROUND:
        return Rr;
      case A.CIRCLE:
        return zr;
      case A.FILL:
        return Fr;
      case A.ICON:
        return Br;
      case A.LINE:
        return Ar;
      case A.OUTLINE:
        return kr;
      case A.TEXT:
        return Ir;
      default:
        return null;
    }
  }
}, Bt = class {
  constructor() {
    this._initialized = !1;
  }
  dispose() {
    this._program = P(this._program), this._vertexArrayObject = P(this._vertexArrayObject);
  }
  render(e, t, i, r) {
    e && (this._initialized || this._initialize(e), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), e.bindVAO(this._vertexArrayObject), e.useProgram(this._program), t.setSamplingMode(i), e.bindTexture(t, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", r), e.drawArrays(ce.TRIANGLE_STRIP, 0, 4), e.bindTexture(null, 0), e.bindVAO());
  }
  _initialize(e) {
    if (this._initialized) return !0;
    const t = we(e, ct);
    if (!t) return !1;
    const i = new Int8Array(16);
    i[0] = -1, i[1] = -1, i[2] = 0, i[3] = 0, i[4] = 1, i[5] = -1, i[6] = 1, i[7] = 0, i[8] = -1, i[9] = 1, i[10] = 0, i[11] = 1, i[12] = 1, i[13] = 1, i[14] = 1, i[15] = 1;
    const r = ct.attributes, a = new Ve(e, r, ji, { geometry: Ge.createVertex(e, We.STATIC_DRAW, i) });
    return this._program = t, this._vertexArrayObject = a, this._initialized = !0, !0;
  }
};
class Dr {
  constructor(e) {
    this._rctx = e, this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getProgram(e, t = []) {
    const i = e.vsPath + "." + e.fsPath + JSON.stringify(t);
    if (this._programByKey.has(i)) return this._programByKey.get(i);
    const r = { ...t.map((c) => typeof c == "string" ? { name: c, value: !0 } : c).reduce((c, u) => ({ ...c, [u.name]: u.value }), {}) }, { vsPath: a, fsPath: s, attributes: n } = e, l = nr(a, s, n, r), o = this._rctx.programCache.acquire(l.shaders.vertexShader, l.shaders.fragmentShader, l.attributes);
    if (!o) throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(i, o), o;
  }
}
let Lr = class {
  constructor() {
    this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null, this.geometryEnginePromise = null;
  }
  destroy() {
    this._inFlightResourceMap.clear(), this._resourceMap.clear();
  }
  getResource(e) {
    return this._resourceMap.get(e) ?? null;
  }
  async fetchResource(e, t) {
    const i = this._resourceMap.get(e);
    if (i) return { width: i.width, height: i.height };
    let r = this._inFlightResourceMap.get(e);
    return r ? r.then((a) => ({ width: a.width, height: a.height })) : (r = lr(e, t), this._inFlightResourceMap.set(e, r), r.then((a) => (this._inFlightResourceMap.delete(e), this._resourceMap.set(e, a), { width: a.width, height: a.height }), () => ({ width: 0, height: 0 })));
  }
  deleteResource(e) {
    this._inFlightResourceMap.delete(e), this._resourceMap.delete(e);
  }
  loadFont(e) {
    return Ei(e);
  }
};
const Nr = 512;
let Ur = class {
  constructor(e) {
    this._resourceManager = e, this._cachedRasterizationCanvas = null;
  }
  dispose() {
    this._cachedRasterizationCanvas = null;
  }
  get _canvas() {
    return this._cachedRasterizationCanvas || (this._cachedRasterizationCanvas = document.createElement("canvas")), this._cachedRasterizationCanvas;
  }
  rasterizeJSONResource(e) {
    switch (e.type) {
      case "dash": {
        const t = e.dashTemplate, i = e.capStyle, [r, a, s] = ur(t, i);
        return { size: [a, s], image: new Uint32Array(r.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 };
      }
      case "fill-style": {
        const [t, i, r, a] = cr(this._canvas, e, rt);
        return { size: [i, r], image: new Uint32Array(t.buffer), sdf: !1, simplePattern: !0, anchorX: 0, anchorY: 0, rasterizationScale: a };
      }
      case "sdf":
        return bt(e);
      case "CIMHatchFill":
      case "CIMVectorMarker":
      case "CIMPictureMarker":
        return this._rasterizeCIMJSONResource(e);
    }
  }
  _rasterizeCIMJSONResource(e) {
    switch (e.type) {
      case "CIMHatchFill": {
        const t = re.fromCIMHatchFill(e, rt);
        return this._rasterizeCIMVectorMarker(t);
      }
      case "CIMPictureMarker": {
        const t = re.fromCIMInsidePolygon(e);
        return this._rasterizeCIMVectorMarker(t);
      }
      case "CIMVectorMarker": {
        if (e.markerPlacement?.type === "CIMMarkerPlacementInsidePolygon") {
          const i = re.fromCIMInsidePolygon(e);
          return this._rasterizeCIMVectorMarker(i);
        }
        const t = ki(e);
        return t && !e.avoidSDFRasterization ? bt(t) : this._rasterizeCIMVectorMarker(e, !1);
      }
    }
  }
  _rasterizeCIMVectorMarker(e, t = !0) {
    const i = t ? Ri.fromExtent(e.frame) : null, [r, a, s, n, l] = re.rasterize(this._canvas, e, i, this._resourceManager);
    return r ? { size: [a, s], image: new Uint32Array(r.buffer), sdf: !1, simplePattern: !1, anchorX: n, anchorY: l } : null;
  }
  rasterizeImageResource(e, t, i, r) {
    this._canvas.width = e, this._canvas.height = t;
    const a = this._canvas.getContext("2d", { willReadFrequently: !0 });
    i instanceof ImageData ? a.putImageData(i, 0, 0) : (i.setAttribute("width", `${e}px`), i.setAttribute("height", `${t}px`), a.drawImage(i, 0, 0, e, t));
    const s = a.getImageData(0, 0, e, t), n = new Uint8Array(s.data);
    if (r) {
      for (const p of r) if (p && p.oldColor && p.oldColor.length === 4 && p.newColor && p.newColor.length === 4) {
        const [f, _, m, g] = p.oldColor, [y, x, w, M] = p.newColor;
        if (f === y && _ === x && m === w && g === M) continue;
        for (let b = 0; b < n.length; b += 4) f === n[b] && _ === n[b + 1] && m === n[b + 2] && g === n[b + 3] && (n[b] = y, n[b + 1] = x, n[b + 2] = w, n[b + 3] = M);
      }
    }
    let l;
    for (let p = 0; p < n.length; p += 4) l = n[p + 3] / 255, n[p] = n[p] * l, n[p + 1] = n[p + 1] * l, n[p + 2] = n[p + 2] * l;
    let o = n, c = e, u = t;
    const d = Nr;
    if (c >= d || u >= d) {
      const p = c / u;
      p > 1 ? (c = d, u = Math.round(d / p)) : (u = d, c = Math.round(d * p)), o = new Uint8Array(4 * c * u);
      const f = new Uint8ClampedArray(o.buffer);
      ri(n, e, t, f, c, u, !1);
    }
    return { size: [c, u], image: new Uint32Array(o.buffer), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0 };
  }
};
function bt(h) {
  if (!h) return null;
  const [e, t, i] = Bi(h);
  return e ? { size: [t, i], image: new Uint32Array(e.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 } : null;
}
let xe = class {
  constructor(e, t) {
    this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = t, this._free.push(new $(0, 0, e, t));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, t) {
    if (e > this._width || t > this._height) return new $();
    let i = null, r = -1;
    for (let a = 0; a < this._free.length; ++a) {
      const s = this._free[a];
      e <= s.width && t <= s.height && (i === null || s.y <= i.y && s.x <= i.x) && (i = s, r = a);
    }
    return i === null ? new $() : (this._free.splice(r, 1), i.width < i.height ? (i.width > e && this._free.push(new $(i.x + e, i.y, i.width - e, t)), i.height > t && this._free.push(new $(i.x, i.y + t, i.width, i.height - t))) : (i.width > e && this._free.push(new $(i.x + e, i.y, i.width - e, i.height)), i.height > t && this._free.push(new $(i.x, i.y + t, e, i.height - t))), new $(i.x, i.y, e, t));
  }
  release(e) {
    for (let t = 0; t < this._free.length; ++t) {
      const i = this._free[t];
      if (i.y === e.y && i.height === e.height && i.x + i.width === e.x) i.width += e.width;
      else if (i.x === e.x && i.width === e.width && i.y + i.height === e.y) i.height += e.height;
      else if (e.y === i.y && e.height === i.height && e.x + e.width === i.x) i.x = e.x, i.width += e.width;
      else {
        if (e.x !== i.x || e.width !== i.width || e.y + e.height !== i.y) continue;
        i.y = e.y, i.height += e.height;
      }
      this._free.splice(t, 1), this.release(e);
    }
    this._free.push(e);
  }
};
const Vr = 256, Gr = (h) => Math.floor(h / 256);
function Hr(h) {
  const e = /* @__PURE__ */ new Set();
  for (const t of h) e.add(Gr(t));
  return e;
}
function Wr(h, e, t) {
  return h.has(e) || h.set(e, t().then(() => {
    h.delete(e);
  }).catch((i) => {
    h.delete(e), si(i);
  })), h.get(e);
}
const qr = (h) => ({ rect: new $(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: h, sdf: !0 });
let Xr = class {
  constructor(e, t, i) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this._preloadCache = {}, this.width = e, this.height = t, this._glyphSource = i, this._binPack = new xe(e - 4, t - 4), this._glyphData.push(new Uint8Array(e * t)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyphs();
  }
  dispose() {
    this._binPack = null;
    for (const e of this._textures) e && e.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyphs() {
    const e = [117, 149, 181, 207, 207, 181, 149, 117], t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (let l = 0; l < 11; l++) {
        const o = s >= 3 && s < 5 && l >= 3 && l < 8 ? 255 : 0;
        t.push(n), i.push(o);
      }
    }
    const r = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(t) }, a = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(i) };
    this._recordGlyph(r), this._recordGlyph(a);
  }
  getTexture(e, t) {
    if (!this._textures[t]) {
      const i = new R();
      i.pixelFormat = z.ALPHA, i.wrapMode = E.CLAMP_TO_EDGE, i.width = this.width, i.height = this.height, this._textures[t] = new G(e, i, new Uint8Array(this.width * this.height));
    }
    return this._dirties[t] && (this._textures[t].setData(this._glyphData[t]), this._dirties[t] = !1), this._textures[t];
  }
  async getGlyphItems(e, t, i) {
    const r = this._getGlyphCache(e);
    return await this._fetchRanges(e, t, i), t.map((a) => this._getMosaicItem(r, e, a));
  }
  bind(e, t, i, r) {
    const a = this.getTexture(e, i);
    a.setSamplingMode(t), e.bindTexture(a, r);
  }
  preloadASCIIGlyphCache(e) {
    const t = this._preloadCache[e];
    if (t != null) return t;
    const i = this._glyphSource.preloadASCIIRange(e).then(() => {
      const r = this._getGlyphCache(e);
      for (let a = 0; a < 256; a++) this._getMosaicItem(r, e, a);
    });
    return this._preloadCache[e] = i, i;
  }
  _getGlyphCache(e) {
    return this._glyphCache[e] || (this._glyphCache[e] = {}), this._glyphCache[e];
  }
  _invalidate() {
    this._dirties[this._currentPage] = !0;
  }
  async _fetchRanges(e, t, i) {
    const r = Hr(t), a = [];
    r.forEach((s) => {
      a.push(this._fetchRange(e, s, i));
    }), await Promise.all(a);
  }
  async _fetchRange(e, t, i) {
    if (t > Vr) return;
    const r = e + t;
    return Wr(this._rangePromises, r, () => this._glyphSource.getRange(e, t, i));
  }
  _getMosaicItem(e, t, i) {
    if (!e[i]) {
      const r = this._glyphSource.getGlyph(t, i);
      if (!r?.metrics) return qr(i);
      const a = this._recordGlyph(r), s = this._currentPage, n = r.metrics;
      e[i] = { rect: a, page: s, metrics: n, code: i, sdf: !0 }, this._invalidate();
    }
    return e[i];
  }
  _recordGlyph(e) {
    const t = e.metrics;
    let i;
    if (t.width === 0) i = new $(0, 0, 0, 0);
    else {
      const a = t.width + 6, s = t.height + 2 * 3;
      i = this._binPack.allocate(a, s), i.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyphs(), this._binPack = new xe(this.width - 4, this.height - 4), i = this._binPack.allocate(a, s));
      const n = this._glyphData[this._currentPage], l = e.bitmap;
      let o, c;
      if (l) for (let u = 0; u < s; u++) {
        o = a * u, c = this.width * (i.y + u) + i.x;
        for (let d = 0; d < a; d++) n[c + d] = l[o + d];
      }
      U("esri-glyph-debug") && this._showDebugPage(n);
    }
    return i;
  }
  _showDebugPage(e) {
    const t = document.createElement("canvas"), i = t.getContext("2d"), r = new ImageData(this.width, this.height), a = r.data;
    t.width = this.width, t.height = this.height, t.style.border = "1px solid black";
    for (let s = 0; s < e.length; ++s) a[4 * s] = e[s], a[4 * s + 1] = 0, a[4 * s + 2] = 0, a[4 * s + 3] = 255;
    i.putImageData(r, 0, 0), document.body.appendChild(t);
  }
}, wt = class {
  constructor(e) {
    for (this._metrics = [], this._bitmaps = []; e.next(); ) switch (e.tag()) {
      case 1: {
        const t = e.getMessage();
        for (; t.next(); ) switch (t.tag()) {
          case 3: {
            const i = t.getMessage();
            let r, a, s, n, l, o, c;
            for (; i.next(); ) switch (i.tag()) {
              case 1:
                r = i.getUInt32();
                break;
              case 2:
                a = i.getBytes();
                break;
              case 3:
                s = i.getUInt32();
                break;
              case 4:
                n = i.getUInt32();
                break;
              case 5:
                l = i.getSInt32();
                break;
              case 6:
                o = i.getSInt32();
                break;
              case 7:
                c = i.getUInt32();
                break;
              default:
                i.skip();
            }
            i.release(), r && (this._metrics[r] = { width: s, height: n, left: l, top: o, advance: c }, this._bitmaps[r] = a);
            break;
          }
          default:
            t.skip();
        }
        t.release();
        break;
      }
      default:
        e.skip();
    }
  }
  getMetrics(e) {
    return this._metrics[e];
  }
  getBitmap(e) {
    return this._bitmaps[e];
  }
}, jr = class {
  constructor() {
    this._ranges = [];
  }
  getRange(e) {
    return this._ranges[e];
  }
  addRange(e, t) {
    this._ranges[e] = t;
  }
}, Yr = class {
  constructor(e) {
    this._glyphInfo = {}, this._baseURL = e;
  }
  getRange(e, t, i) {
    const r = this._getFontStack(e);
    if (r.getRange(t)) return Promise.resolve();
    const a = 256 * t, s = a + 255, n = this._baseURL.replace("{fontstack}", e).replace("{range}", a + "-" + s);
    return ue(n, { responseType: "array-buffer", ...i }).then((l) => {
      r.addRange(t, new wt(new Ye(new Uint8Array(l.data), new DataView(l.data))));
    });
  }
  async preloadASCIIRange(e) {
    const t = this._getFontStack(e), i = 0, r = 255, a = this._baseURL.replace("{fontstack}", e).replace("{range}", i + "-" + r), s = await ue(a, { responseType: "array-buffer" }), n = new wt(new Ye(new Uint8Array(s.data), new DataView(s.data)));
    for (let l = i; l <= r; l++) t.getRange(l) || t.addRange(l, n);
  }
  getGlyph(e, t) {
    const i = this._getFontStack(e);
    if (!i) return;
    const r = Math.floor(t / 256), a = i.getRange(r);
    return a ? { metrics: a.getMetrics(t), bitmap: a.getBitmap(t) } : void 0;
  }
  _getFontStack(e) {
    let t = this._glyphInfo[e];
    return t || (t = this._glyphInfo[e] = new jr()), t;
  }
};
const he = 1e20;
let Kr = class {
  constructor(e, t = 2) {
    this._textureSize = e, this._rasterizationScale = t, this._canvasSize = this._textureSize * this._rasterizationScale, this._svg = null;
    const { _canvasSize: i } = this, r = document.createElement("canvas");
    r.width = r.height = i, this._context = r.getContext("2d", { willReadFrequently: !1 }), this._gridOuter = new Float64Array(i * i), this._gridInner = new Float64Array(i * i), this._f = new Float64Array(i), this._d = new Float64Array(i), this._z = new Float64Array(i + 1), this._v = new Int16Array(i);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(e, t, i) {
    const { _canvasSize: r, _textureSize: a, _rasterizationScale: s } = this, n = a / 4;
    this._initSVG();
    const l = this.createSVGString(e, t);
    return new Promise((o, c) => {
      const u = new Image();
      u.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(l), u.onload = () => {
        u.onload = null, this._context.clearRect(0, 0, r, r), this._context.drawImage(u, 0, 0, r, r);
        const p = this._context.getImageData(0, 0, r, r), f = new Uint8Array(a * a * 4);
        for (let _ = 0; _ < r * r; _++) {
          const m = p.data[4 * _ + 3] / 255;
          this._gridOuter[_] = m === 1 ? 0 : m === 0 ? he : Math.max(0, 0.5 - m) ** 2, this._gridInner[_] = m === 1 ? he : m === 0 ? 0 : Math.max(0, m - 0.5) ** 2;
        }
        this._edt(this._gridOuter, r, r), this._edt(this._gridInner, r, r);
        for (let _ = 0; _ < a * a; _++) {
          let m = 0;
          for (let g = 0; g < s; g++) {
            const y = Math.floor(_ / a) * s + g;
            for (let x = 0; x < s; x++) {
              const w = y * r + (_ % a * s + x);
              m += this._gridOuter[w] - this._gridInner[w];
            }
          }
          m /= s * s, m /= s, dr(0.5 - m / (2 * n), f, 4 * _);
        }
        o(f);
      };
      const d = i?.signal;
      d && ai(d, () => c(ni()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      e.setAttribute("style", "position: absolute;"), e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("aria-hidden", "true"), e.setAttribute("role", "presentation"), document.body.appendChild(e), this._svg = e;
    }
    return this._svg;
  }
  createSVGString(e, t) {
    const i = this._initSVG(), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
    r.setAttribute("d", e), i.appendChild(r);
    const a = r.getBBox(), s = a.width / a.height, n = this._canvasSize / 2;
    let l, o, c;
    if (s > 1) {
      l = n / a.width;
      const f = n * (1 / s);
      o = this._canvasSize / 4, c = n - f / 2;
    } else
      l = n / a.height, o = n - n * s / 2, c = this._canvasSize / 4;
    const u = -a.x * l + o, d = -a.y * l + c;
    r.setAttribute("style", `transform: matrix(${l}, 0, 0, ${l}, ${u}, ${d})`), r.setAttribute("stroke-width", "" + 0.5 / l);
    const p = `<svg style="fill:${t ? "red" : "none"}; stroke:${t ? "none" : "red"}" height="${this._canvasSize}" width="${this._canvasSize}" xmlns="http://www.w3.org/2000/svg">${i.innerHTML}</svg>`;
    return i.removeChild(r), p;
  }
  _edt(e, t, i) {
    const r = this._f, a = this._d, s = this._v, n = this._z;
    for (let l = 0; l < t; l++) {
      for (let o = 0; o < i; o++) r[o] = e[o * t + l];
      this._edt1d(r, a, s, n, i);
      for (let o = 0; o < i; o++) e[o * t + l] = a[o];
    }
    for (let l = 0; l < i; l++) {
      for (let o = 0; o < t; o++) r[o] = e[l * t + o];
      this._edt1d(r, a, s, n, t);
      for (let o = 0; o < t; o++) e[l * t + o] = Math.sqrt(a[o]);
    }
  }
  _edt1d(e, t, i, r, a) {
    i[0] = 0, r[0] = -he, r[1] = +he;
    for (let s = 1, n = 0; s < a; s++) {
      let l = (e[s] + s * s - (e[i[n]] + i[n] * i[n])) / (2 * s - 2 * i[n]);
      for (; l <= r[n]; ) n--, l = (e[s] + s * s - (e[i[n]] + i[n] * i[n])) / (2 * s - 2 * i[n]);
      n++, i[n] = s, r[n] = l, r[n + 1] = +he;
    }
    for (let s = 0, n = 0; s < a; s++) {
      for (; r[n + 1] < s; ) n++;
      t[s] = (s - i[n]) * (s - i[n]) + e[i[n]];
    }
  }
};
function H(h) {
  return h && h.type === "static";
}
let Jr = class At {
  constructor(e, t, i = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = /* @__PURE__ */ new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, this._pageWidth = e, this._pageHeight = t, i > 0 && (this._maxItemSize = i), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new xe(this._pageWidth, this._pageHeight);
    const r = Math.floor(this._pageWidth), a = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(r * a) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 });
  }
  getWidth(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[0];
  }
  getHeight(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[1];
  }
  getPageTexture(e) {
    return e < this._mosaicPages.length ? this._mosaicPages[e].texture : null;
  }
  has(e) {
    return this._mosaicRects.has(e);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(e) {
    return this._mosaicRects.get(e);
  }
  addSpriteItem(e, t, i, r, a, s, n = 1) {
    if (this._mosaicRects.has(e)) return this._mosaicRects.get(e);
    let l, o, c;
    if (H(i) ? [l, o, c] = this._allocateImage(t[0], t[1]) : (l = new $(0, 0, t[0], t[1]), o = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: i, size: [t[0] + 2 * V, t[1] + 2 * V], dirty: !0, texture: void 0 })), l.width <= 0 || l.height <= 0) return null;
    const u = { type: "sprite", rect: l, width: t[0], height: t[1], sdf: a, simplePattern: s, rasterizationScale: n, page: o };
    return this._mosaicRects.set(e, u), H(i) && (U("esri-mosaic-debug") && this._showDebugSprite(t, i.data), this._copy({ rect: l, spriteSize: t, spriteData: i.data, page: o, pageSize: c, repeat: r, sdf: a })), u;
  }
  hasItemsToProcess() {
    return this._spriteCopyQueue.length !== 0;
  }
  processNextItem() {
    const e = this._spriteCopyQueue.pop();
    e && this._copy(e);
  }
  getMosaicItemPosition(e) {
    const t = this.getSpriteItem(e), i = t?.rect;
    if (!i) return null;
    i.width = t.width, i.height = t.height;
    const r = t.width, a = t.height, s = V, n = this._mosaicPages[t.page].size;
    return { size: [t.width, t.height], tl: [(i.x + s) / n[0], (i.y + s) / n[1]], br: [(i.x + s + r) / n[0], (i.y + s + a) / n[1]], page: t.page };
  }
  bind(e, t, i = 0, r = 0) {
    const a = this._mosaicPages[i], s = a.mosaicsData;
    let n = a.texture;
    n || (n = xt(e, a.size), a.texture = n), n.setSamplingMode(t), H(s) ? (e.bindTexture(n, r), a.dirty && (n.setData(new Uint8Array(s.data.buffer)), n.generateMipmap(), U("esri-mosaic-debug") && this._showDebugPage(i))) : (s.data.loadFrame(n), e.bindTexture(n, r), n.generateMipmap()), a.dirty = !1;
  }
  getTexture(e, t = 0) {
    const i = this._mosaicPages[t], r = i.mosaicsData;
    let a = i.texture;
    return a || (a = xt(e, i.size), i.texture = a), H(r) ? i.dirty && (a.setData(new Uint8Array(r.data.buffer)), a.generateMipmap(), U("esri-mosaic-debug") && this._showDebugPage(t)) : (r.data.loadFrame(a), a.generateMipmap()), i.dirty = !1, a;
  }
  dispose() {
    this._binPack = null;
    for (const e of this._mosaicPages) {
      const t = e.texture;
      t && t.dispose();
      const i = e.mosaicsData;
      H(i) || i.data.destroy();
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
  static _copyBits(e, t, i, r, a, s, n, l, o, c, u) {
    let d = r * t + i, p = l * s + n;
    if (u) {
      p -= s;
      for (let f = -1; f <= c; f++, d = ((f + c) % c + r) * t + i, p += s) for (let _ = -1; _ <= o; _++) a[p + _] = e[d + (_ + o) % o];
    } else for (let f = 0; f < c; f++) {
      for (let _ = 0; _ < o; _++) a[p + _] = e[d + _];
      d += t, p += s;
    }
  }
  _copy(e) {
    if (e.page >= this._mosaicPages.length) return;
    const t = this._mosaicPages[e.page], i = t.mosaicsData;
    if (!H(t.mosaicsData)) throw new J("mapview-invalid-resource", "unsuitable data type!");
    const r = e.spriteData, a = i.data;
    At._copyBits(r, e.spriteSize[0], 0, 0, a, e.pageSize[0], e.rect.x + V, e.rect.y + V, e.spriteSize[0], e.spriteSize[1], e.repeat), t.dirty = !0;
  }
  _allocateImage(e, t) {
    e += 2 * V, t += 2 * V;
    const i = Math.max(e, t);
    if (this._maxItemSize && this._maxItemSize < i) {
      const a = 2 ** Math.ceil(ot(e)), s = 2 ** Math.ceil(ot(t)), n = new $(0, 0, e, t);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(a * s) }, size: [a, s], dirty: !0, texture: void 0 }), [n, this._mosaicPages.length - 1, [a, s]];
    }
    const r = this._binPack.allocate(e, t);
    if (r.width <= 0) {
      const a = this._mosaicPages[this._currentPage];
      return !a.dirty && H(a.mosaicsData) && (a.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 }), this._binPack = new xe(this._pageWidth, this._pageHeight), this._allocateImage(e, t);
    }
    return [r, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _showDebugSprite([e, t], i) {
    const r = document.createElement("canvas");
    r.width = e, r.height = t, r.setAttribute("style", `position: absolute; top: ${4 + 204 * Qr++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);
    const a = r.getContext("2d"), s = new ImageData(e, t);
    s.data.set(new Uint8Array(i.buffer)), a.putImageData(s, 0, 0), document.body.appendChild(r);
  }
  _showDebugPage(e) {
    const t = this._mosaicPages[e], { size: [i, r], mosaicsData: a } = t;
    if (!H(a)) return;
    const s = `mosaicDebugPage${e}`, n = document.getElementById(s) ?? document.createElement("canvas");
    n.id = s, n.width = i, n.height = r, n.setAttribute("style", `position: absolute; top: ${4 + 204 * e}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);
    const l = n.getContext("2d"), o = new ImageData(i, r);
    o.data.set(new Uint8Array(a.data.buffer)), l.putImageData(o, 0, 0), document.body.appendChild(n);
  }
}, Qr = 0;
function xt(h, e) {
  const t = new R();
  return t.width = e[0], t.height = e[1], t.wrapMode = E.CLAMP_TO_EDGE, new G(h, t, null);
}
let Zr = class {
  constructor(e, t, i, r) {
    this._animation = e, this._frameData = null;
    const a = (s) => {
      this._frameData = s, t.requestRender();
    };
    this.frameCount = this._animation.frameDurations.length, this.width = this._animation.width, this.height = this._animation.height, this._playHandle = fr(this._animation, i, r, a);
  }
  destroy() {
    this._playHandle.remove();
  }
  loadFrame(e) {
    const t = this._frameData;
    if (t == null) return;
    const i = "width" in t ? t.width : t.codedWidth, r = "height" in t ? t.height : t.codedHeight;
    e.updateData(0, V, V, i, r, t), this._frameData = null;
  }
};
const Mt = "arial-unicode-ms-regular", es = () => Le.getLogger("esri.views.2d.engine.webgl.TextureManager"), j = (h, e, t) => es().error(new J(h, e, t));
let ts = class It {
  static fromMosaic(e, t) {
    return new It(e, t.page, t.sdf);
  }
  constructor(e, t, i) {
    this.mosaicType = e, this.page = t, this.sdf = i;
  }
};
class is {
  constructor(e) {
    this._requestRender = e, this._resourceManager = new Lr(), this._invalidFontsMap = /* @__PURE__ */ new Map(), this._sdfConverter = new Kr(Fe), this._bindingInfos = new Array(), this._hashToBindingIndex = /* @__PURE__ */ new Map(), this._ongoingRasterizations = /* @__PURE__ */ new Map(), this._imageRequestQueue = new oi({ concurrency: 10, process: async (t, i) => {
      Ne(i);
      try {
        return await ue(t, { responseType: "image", signal: i });
      } catch (r) {
        throw Ke(r) ? r : new J("mapview-invalid-resource", `Could not fetch requested resource at ${t}`, r);
      }
    } }), this._spriteMosaic = new Jr(2048, 2048, 500), this._glyphSource = new Yr(`${li.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new Xr(1024, 1024, this._glyphSource), this._rasterizer = new Ur(this.resourceManager);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null, this._resourceManager.destroy();
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  get resourceManager() {
    return this._resourceManager;
  }
  async rasterizeItem(e, t) {
    if (e == null) return j("mapview-null-resource", "Unable to rasterize null resource"), null;
    if (e.type !== "cim-rasterization-info") return j("mapview-unexpected-resource", "Unable to rasterize resource"), null;
    const { resource: i } = e;
    if (i.type === "text") {
      const a = await this._rasterizeText(i, t);
      for (const s of a.glyphs) this._setTextureBinding(ge.GLYPH, s);
      return a;
    }
    const r = await this._rasterizeSprite(i, t);
    return r && this._setTextureBinding(ge.SPRITE, r), r;
  }
  getMosaicInfo(e, t, i = !1) {
    const r = this._getTextureBindingInfo(e, t, i);
    return r ? { size: r.size, texture: { texture: r.texture, unit: r.type === "sprite" ? Ii : st } } : (j("mapview-invalid-resource", `Unable to find resource for ${t}`), { size: [0, 0], texture: { texture: null, unit: 0 } });
  }
  _getTextureBindingInfo(e, t, i) {
    const r = this._bindingInfos[t - 1], a = r.page, s = i ? N.LINEAR_MIPMAP_LINEAR : N.LINEAR;
    switch (r.mosaicType) {
      case ge.SPRITE: {
        const n = [this.sprites.getWidth(a), this.sprites.getHeight(a)], l = this._spriteMosaic.getTexture(e, a);
        return l.setSamplingMode(s), { type: "sprite", texture: l, size: n };
      }
      case ge.GLYPH: {
        const n = [this.glyphs.width, this.glyphs.height], l = this._glyphMosaic.getTexture(e, a);
        return this._glyphMosaic.bind(e, s, a, st), l.setSamplingMode(s), { type: "glyph", texture: l, size: n };
      }
      default:
        return j("mapview-texture-manager", `Cannot handle unknown type ${r.mosaicType}`), null;
    }
  }
  _hashMosaic(e, t) {
    return 1 | e << 1 | (t.sdf ? 1 : 0) << 2 | t.page << 3;
  }
  _setTextureBinding(e, t) {
    const i = this._hashMosaic(e, t);
    if (!this._hashToBindingIndex.has(i)) {
      const r = ts.fromMosaic(e, t), a = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i, a), this._bindingInfos.push(r);
    }
    t.textureBinding = this._hashToBindingIndex.get(i);
  }
  async _rasterizeText(e, t) {
    const { font: i, textString: r } = e, a = zi(i), s = this._invalidFontsMap.has(a), [n, l] = Fi(r), o = pr(n);
    try {
      const c = s ? Mt : a;
      return U("esri-2d-stabilize-glyphs") && await this._glyphMosaic.preloadASCIIGlyphCache(c), { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(c, o, t), isRightToLeft: l };
    } catch {
      return j("mapview-invalid-resource", `Couldn't find font ${a}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(a, !0), { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(Mt, o, t), isRightToLeft: l };
    }
  }
  _hashSpriteResource(e) {
    switch (e.type) {
      case "path":
        return `path:${e.path}.${e.asFill ? 1 : 0}`;
      case "CIMPictureMarker":
        return `${e.type}:${e.url}:${e.size}`;
      case "CIMPictureFill":
        return `${e.type}:${e.url}:${e.height}`;
      case "CIMPictureStroke":
        return `${e.type}:${e.url}:${e.width}`;
      case "dash":
        return `dash:${e.capStyle}.${e.dashTemplate.join("")}`;
      case "sdf":
        return `sdf:${JSON.stringify(e.geom)}.${e.asFill ? 1 : 0}`;
      case "fill-style":
        return `fill_style:${e.style}`;
      case "animated":
        return JSON.stringify(_r(e));
      case "CIMHatchFill":
      case "CIMVectorMarker":
        return JSON.stringify(e);
    }
  }
  async _rasterizeSprite(e, t) {
    if (!e) return null;
    const i = zt(this._hashSpriteResource(e));
    if (this._spriteMosaic.has(i)) return this._spriteMosaic.getSpriteItem(i);
    if ("url" in e && e.url || e.type === "CIMPictureFill" || e.type === "CIMPictureStroke" || e.type === "CIMPictureMarker" || e.type === "CIMVectorMarker") {
      const r = [];
      re.fetchResources({ type: "CIMPointSymbol", symbolLayers: [e] }, this._resourceManager, r), r.length > 0 && await Promise.all(r);
    }
    switch (e.type) {
      case "CIMPictureMarker":
        return e.markerPlacement?.type === "CIMMarkerPlacementInsidePolygon" ? this._rasterizeJSONResource(i, e) : this._handleAsyncResource(i, e, t);
      case "animated":
      case "CIMPictureFill":
      case "CIMPictureStroke":
      case "path":
        return this._handleAsyncResource(i, e, t);
      case "sdf":
      case "dash":
      case "fill-style":
      case "CIMVectorMarker":
      case "CIMHatchFill":
        return this._rasterizeJSONResource(i, e);
    }
  }
  _rasterizeJSONResource(e, t) {
    const i = this._rasterizer.rasterizeJSONResource(t);
    if (i) {
      const { size: r, image: a, sdf: s, simplePattern: n, rasterizationScale: l } = i;
      return this._addItemToMosaic(e, r, { type: "static", data: a }, ye(t), s, n, l);
    }
    return null;
  }
  async _handleAsyncResource(e, t, i) {
    if (this._ongoingRasterizations.has(e)) return this._ongoingRasterizations.get(e);
    let r;
    return r = t.type === "path" ? this._handleSVG(t, e, i) : this._handleImage(t, e, i), this._ongoingRasterizations.set(e, r), r.finally(() => this._ongoingRasterizations.delete(e)), r;
  }
  async _handleSVG(e, t, i) {
    const r = [Fe, Fe], { asFill: a } = e, s = await this._sdfConverter.draw(e.path, a, i);
    return this._addItemToMosaic(t, r, { type: "static", data: new Uint32Array(s.buffer) }, !1, !0, !0);
  }
  async _handleGIFOrPNG(e, t, i) {
    const r = e.url, a = this.resourceManager.getResource(r);
    if (a == null) return null;
    const { width: s, height: n } = a;
    if (a instanceof HTMLImageElement) {
      if (e.type === "animated") return j("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
      const d = "colorSubstitutions" in e ? e.colorSubstitutions : void 0, { size: p, sdf: f, image: _ } = this._rasterizer.rasterizeImageResource(s, n, a, d);
      return this._addItemToMosaic(t, p, { type: "static", data: _ }, ye(e), f, !1);
    }
    let l, o, c;
    e.type === "animated" ? (l = !1, o = { playAnimation: e.playAnimation, reverseAnimation: e.reverseAnimation, randomizeStartTime: e.randomizeStartTime, randomizeStartSeed: e.randomizeStartSeed, startTimeOffset: e.startTimeOffset, duration: e.duration, repeatType: e.repeatType, repeatDelay: e.repeatDelay }, c = e.startGroup || 0) : (l = ye(e), o = {}, c = 0);
    const u = new Zr(a, this._requestRender, o, c);
    return this._addItemToMosaic(t, [u.width, u.height], { type: "animated", data: u }, l, !1, !1);
  }
  async _handleImage(e, t, i) {
    const r = e.url;
    if (ss(r) || ns(r)) return this._handleGIFOrPNG(e, t, i);
    if (e.type === "animated") return j("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
    try {
      let a;
      const s = this.resourceManager.getResource(r);
      if (s != null && s instanceof HTMLImageElement) a = s;
      else {
        const { data: p } = await this._imageRequestQueue.push(r, { ...i });
        a = p;
      }
      if (mr(r)) {
        if ("width" in e && "height" in e) a.width = K(e.width), a.height = K(e.height);
        else if ("cim" in e) {
          const p = e;
          a.width = K(p.width ?? p.scaleX * p.size), a.height = K(p.size);
        }
      }
      if (!a.width || !a.height) return null;
      const n = a.width, l = a.height, o = "colorSubstitutions" in e ? e.colorSubstitutions : void 0, { size: c, sdf: u, image: d } = this._rasterizer.rasterizeImageResource(n, l, a, o);
      return this._addItemToMosaic(t, c, { type: "static", data: d }, ye(e), u, !1);
    } catch (a) {
      throw Ke(a) ? a : new J("mapview-invalid-resource", `Could not fetch requested resource at ${r}. ${a.message}`);
    }
  }
  _addItemToMosaic(e, t, i, r, a, s, n) {
    return this._spriteMosaic.addSpriteItem(e, t, i, r, a, s, n);
  }
}
function ye(h) {
  switch (h.type) {
    case "CIMVectorMarker":
    case "CIMPictureMarker":
      return os(h);
    default:
      return !0;
  }
}
const rs = (h) => h != null && h.startsWith("data:image/gif"), ss = (h) => h && (h.includes(".gif") || rs(h)), as = (h) => h != null && h.startsWith("data:image/png"), ns = (h) => h && (h.includes(".png") || as(h)), os = (h) => h && "markerPlacement" in h && h.markerPlacement && h.markerPlacement.type === "CIMMarkerPlacementInsidePolygon";
let ls = class {
  constructor(e) {
    this._queue = [], this._refreshable = e;
  }
  destroy() {
    this._queue = [];
  }
  enqueueTextureUpdate(e, t) {
    const i = hi(), r = e, a = Di, s = Math.ceil(r.height / a);
    Ne(t);
    for (let n = 0; n < s; n++) {
      const l = n * a, o = n === s - 1, c = o ? r.height - a * n : a;
      this._queue.push({ type: "chunk", request: e, resolver: i, chunk: n, chunkOffset: l, destHeight: c, chunkIsLast: o, options: t });
    }
    return ci(t, (n) => i.reject(n)), i.promise;
  }
  upload() {
    let e = 0;
    for (; this._queue.length; ) {
      const t = performance.now(), i = this._queue.shift();
      if (i) {
        if (i.options.signal != null && i.options.signal.aborted) continue;
        switch (i.type) {
          case "chunk":
            this._uploadChunk(i);
            break;
          case "no-chunk":
            this._uploadNoChunk(i);
        }
        const r = performance.now() - t;
        if (e += r, e + r >= $i) break;
      }
    }
    this._queue.length && this._refreshable.requestRender();
  }
  _uploadChunk(e) {
    const { request: t, resolver: i, chunkOffset: r, chunkIsLast: a, destHeight: s } = e, { data: n, texture: l, width: o } = t;
    n != null && (l.updateData(0, 0, r, o, s, n, r), a && i.resolve());
  }
  _uploadNoChunk(e) {
    const { request: t, resolver: i } = e, { data: r, texture: a } = t;
    a.setData(r), i.resolve();
  }
};
const hs = _i(-0.5, -0.5);
let cs = class {
  constructor() {
    this._centerNdc = Ee(), this._pxToNdc = Ee(), this._worldDimensionsPx = Ee(), this._mat3 = Ue(), this._initialized = !1;
  }
  dispose() {
    this._program = P(this._program), this._quad = P(this._quad);
  }
  render(e, t, i) {
    const { context: r } = e, a = this._updateGeometry(e, i);
    if (t != null) {
      const { r: s, g: n, b: l, a: o } = t;
      r.setClearColor(o * s / 255, o * n / 255, o * l / 255, o);
    } else r.setClearColor(0, 0, 0, 0);
    if (r.setStencilFunction(De.ALWAYS, 0, 255), r.setStencilWriteMask(255), !a) return r.setClearStencil(1), void r.clear(r.gl.STENCIL_BUFFER_BIT | r.gl.COLOR_BUFFER_BIT);
    r.setClearStencil(0), r.clear(r.gl.STENCIL_BUFFER_BIT | r.gl.COLOR_BUFFER_BIT), this._initialized || this._initialize(r), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.setColorMask(!1, !1, !1, !1), r.setBlendingEnabled(!1), r.setStencilOp(ke.KEEP, ke.KEEP, ke.REPLACE), r.setStencilFunction(De.ALWAYS, 1, 255), r.setStencilTestEnabled(!0), r.useProgram(this._program), this._program.setUniformMatrix3fv("u_worldExtent", this._mat3), this._quad.draw(), this._quad.unbind();
  }
  _initialize(e) {
    if (this._initialized) return;
    const t = we(e, Qi);
    t && (this._program = t, this._quad = new W(e, [0, 0, 1, 0, 0, 1, 1, 1]), this._initialized = !0);
  }
  _updateGeometry(e, t) {
    const { state: i, pixelRatio: r } = e, { size: a, rotation: s } = i, n = Math.round(a[0] * r), l = Math.round(a[1] * r);
    if (!i.spatialReference.isWrappable) return !1;
    const o = mi(s), c = Math.abs(Math.cos(o)), u = Math.abs(Math.sin(o)), d = Math.round(n * c + l * u), p = Math.round(r * i.worldScreenWidth);
    if (d <= p) return !1;
    const f = n * u + l * c, _ = (t.left - t.right) * r / n, m = (t.bottom - t.top) * r / l;
    Re(this._worldDimensionsPx, p, f, 1), Re(this._pxToNdc, 2 / n, -2 / l, 1), Re(this._centerNdc, _, m, 1);
    const g = this._mat3;
    return ui(g, this._centerNdc), Je(g, g, this._pxToNdc), s !== 0 && di(g, g, o), Je(g, g, this._worldDimensionsPx), pi(g, g, hs), !0;
  }
}, Se = class {
  constructor() {
    this.name = this.constructor.name;
  }
  createOptions(e, t) {
    return null;
  }
}, us = class extends Se {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(e, t) {
    if (!t?.size) return;
    const { context: i, renderingOptions: r } = e;
    this._quad || (this._quad = new W(i, [0, 0, 1, 0, 0, 1, 1, 1]));
    const a = i.getBoundFramebufferObject(), { x: s, y: n, width: l, height: o } = i.getViewport(), c = t.getBlock($e.Animation);
    if (c == null) return;
    const u = t.getUniforms(i);
    i.setViewport(0, 0, t.size, t.size);
    const d = u.filterFlags, p = u.animation, f = U("featurelayer-animation-enabled") ? r.labelsAnimationTime : 1, _ = c.getFBO(i, 1);
    i.unbindTexture(_.colorTexture), this._computeDelta(e, _, p, d, f);
    const m = c.getFBO(i);
    i.unbindTexture(m.colorTexture), this._updateAnimationState(e, _, m), i.bindFramebuffer(a), i.setViewport(s, n, l, o);
  }
  _computeDelta(e, t, i, r, a) {
    const { context: s, painter: n, displayLevel: l } = e, o = n.materialManager.getProgram(this._desc, ["delta"]);
    if (s.bindFramebuffer(t), s.setColorMask(!0, !0, !0, !0), s.setClearColor(0, 0, 0, 0), s.clear(s.gl.COLOR_BUFFER_BIT), s.useProgram(o), !("type" in r.texture) || !("type" in i.texture)) throw new Error("InternalError: Expected to find texture");
    s.bindTexture(r.texture, r.unit), s.bindTexture(i.texture, i.unit), o.setUniform1i("u_maskTexture", r.unit), o.setUniform1i("u_sourceTexture", i.unit), o.setUniform1f("u_timeDelta", e.deltaTime), o.setUniform1f("u_animationTime", a), o.setUniform1f("u_zoomLevel", Math.round(10 * l)), this._quad.draw();
  }
  _updateAnimationState(e, t, i) {
    const { context: r, painter: a } = e, s = a.materialManager.getProgram(this._desc, ["update"]);
    r.bindTexture(t.colorTexture, 1), r.useProgram(s), s.setUniform1i("u_sourceTexture", 1), r.bindFramebuffer(i), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.clear(r.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
};
const ds = (h) => h.replace("-", "_").toUpperCase(), St = (h) => `#define ${ds(h)}
`;
function Ot(h) {
  return { attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: St(h) + lt("blend/blend.vert"), fragmentShader: St(h) + lt("blend/blend.frag") } };
}
const Pt = () => Le.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
let ps = class {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e) {
    this._backBufferTexture = P(this._backBufferTexture), this._quad = P(this._quad);
  }
  draw(e, t, i, r, a) {
    const { context: s, drawPhase: n } = e;
    if (this._setupShader(s), r && r !== "normal" && n !== D.LABEL) return void this._drawBlended(e, t, i, r, a);
    const l = Ot("normal"), o = s.programCache.acquire(l.shaders.vertexShader, l.shaders.fragmentShader, l.attributes);
    if (!o) return void Pt().error(new J("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    s.useProgram(o), t.setSamplingMode(i), s.bindTexture(t, 0), o.setUniform1i("u_layerTexture", 0), o.setUniform1f("u_opacity", a), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA);
    const c = this._quad;
    c.draw(), c.unbind(), o.dispose();
  }
  _drawBlended(e, t, i, r, a) {
    const { context: s, state: n, pixelRatio: l, inFadeTransition: o } = e, { size: c } = n, u = s.getBoundFramebufferObject();
    let d, p;
    u != null ? (d = u.width, p = u.height) : (d = Math.round(l * c[0]), p = Math.round(l * c[1])), this._createOrResizeTexture(e, d, p);
    const f = this._backBufferTexture;
    u.copyToTexture(0, 0, d, p, 0, 0, f), s.setStencilTestEnabled(!1), s.setStencilWriteMask(0), s.setBlendingEnabled(!0), s.setDepthTestEnabled(!1), s.setDepthWriteEnabled(!1);
    const _ = Ot(r), m = s.programCache.acquire(_.shaders.vertexShader, _.shaders.fragmentShader, _.attributes);
    if (!m) return void Pt().error(new J("mapview-BlendEffect", `Error creating shader program for blend mode ${r}`));
    s.useProgram(m), f.setSamplingMode(i), s.bindTexture(f, 0), m.setUniform1i("u_backbufferTexture", 0), t.setSamplingMode(i), s.bindTexture(t, 1), m.setUniform1i("u_layerTexture", 1), m.setUniform1f("u_opacity", a), m.setUniform1f("u_inFadeOpacity", o ? 1 : 0), s.setBlendFunction(v.ONE, v.ZERO);
    const g = this._quad;
    g.draw(), g.unbind(), m.dispose(), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e) {
    this._quad || (this._quad = new W(e, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e, t, i) {
    const { context: r } = e;
    if (this._backBufferTexture === null || t !== this._size[0] || i !== this._size[1]) {
      if (this._backBufferTexture) this._backBufferTexture.resize(t, i);
      else {
        const a = new R();
        a.internalFormat = z.RGBA, a.wrapMode = E.CLAMP_TO_EDGE, a.width = t, a.height = i, this._backBufferTexture = new G(r, a);
      }
      this._size[0] = t, this._size[1] = i;
    }
  }
}, Tt = class extends Se {
  constructor(e) {
    super(), this.name = this.constructor.name, this.defines = [e];
  }
  dispose() {
  }
  bind({ context: e, painter: t }) {
    this._prev = e.getBoundFramebufferObject();
    const i = t.getFbos().effect0;
    e.bindFramebuffer(i), e.setColorMask(!0, !0, !0, !0), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e, t) {
    const { context: i, painter: r } = e, a = r.getPostProcessingEffects(t), s = i.getBoundFramebufferObject();
    for (const { postProcessingEffect: n, effect: l } of a) n.draw(e, s, l);
    i.bindFramebuffer(this._prev), i.setStencilTestEnabled(!1), r.blitTexture(i, s.colorTexture, N.NEAREST), i.setStencilTestEnabled(!0);
  }
}, _s = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e, t) {
    e.bindTexture(t, le), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", Hi), e.bindVAO(this._resources.quadVAO), e.drawArrays(ce.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  finalBlur(e, t) {
    e.bindTexture(t, le), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", Wi), e.bindVAO(this._resources.quadVAO), e.drawArrays(ce.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  renderHighlight(e, t, i) {
    e.bindTexture(t, le), e.useProgram(this._resources.highlightProgram), i.applyHighlightOptions(e, this._resources.highlightProgram), e.bindVAO(this._resources.quadVAO), e.setBlendingEnabled(!0), e.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), e.drawArrays(ce.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const r = Ge.createVertex(e, We.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), a = new Ve(e, /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new pt("a_position", 2, ut.BYTE, 0, 4), new pt("a_texcoord", 2, ut.UNSIGNED_BYTE, 2, 4)] }, { geometry: r }), s = we(e, Zi), n = we(e, er);
    e.useProgram(s), s.setUniform1i("u_texture", le), s.setUniform1i("u_shade", Li), s.setUniform1f("u_sigma", nt), e.useProgram(n), n.setUniform1i("u_texture", le), n.setUniform1f("u_sigma", nt), this._resources = { quadGeometry: r, quadVAO: a, highlightProgram: s, blurProgram: n };
  }
  setup(e, t, i) {
    this._resources ? (this._width = t, this._height = i) : this._initialize(e, t, i);
  }
};
function Ct(h, e, t) {
  const i = new R(e, t);
  return i.wrapMode = E.CLAMP_TO_EDGE, new L(h, i, new He(qe.STENCIL_INDEX8, e, t));
}
let ms = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const r = Ct(e, t, i), a = Ct(e, t, i);
    this._resources = { sharedBlur1Fbo: r, sharedBlur2Fbo: a };
  }
  setup(e, t, i) {
    !this._resources || this._width === t && this._height === i || this.dispose(), this._resources || this._initialize(e, t, i);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Fbo.colorTexture;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Fbo.colorTexture;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
};
const Y = 4, ve = 4 / Y;
let fs = class extends Se {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new _s(), this._width = void 0, this._height = void 0, this._boundFBO = null, this._hlSurfaces = new ms(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new Bt();
  }
  dispose() {
    this._hlSurfaces?.dispose(), this._hlRenderer?.dispose(), this._boundFBO = null;
  }
  bind(e) {
    const { context: t, painter: i } = e, { width: r, height: a } = t.getViewport(), s = i.getFbos().effect0;
    this.setup(e, r, a), t.bindFramebuffer(s), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e }, t, i) {
    this._width = t, this._height = i;
    const r = t % Y, a = i % Y;
    t += r < Y / 2 ? -r : Y - r, i += a < Y / 2 ? -a : Y - a, this._adjustedWidth = t, this._adjustedHeight = i, this._boundFBO = e.getBoundFramebufferObject();
    const s = Math.round(t * ve), n = Math.round(i * ve);
    this._hlRenderer.setup(e, s, n), this._hlSurfaces.setup(e, s, n);
  }
  draw(e) {
    const { context: t, passOptions: i } = e, r = i.activeGradient, a = t.getBoundFramebufferObject();
    t.setViewport(0, 0, this._adjustedWidth * ve, this._adjustedHeight * ve), t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t.setStencilTestEnabled(!1), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(t, a.colorTexture, N.NEAREST, 1), t.setStencilTestEnabled(!1), t.setBlendingEnabled(!1), t.setColorMask(!1, !1, !1, !0), t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(t, this._hlSurfaces.sharedBlur1Tex), t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(t, this._hlSurfaces.sharedBlur2Tex), t.bindFramebuffer(this._boundFBO), t.setBlendingEnabled(!0), t.setColorMask(!0, !0, !0, !0), t.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(t, this._hlSurfaces.sharedBlur1Tex, r), this._boundFBO = null;
  }
}, gs = class extends Se {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    this._fbo != null && this._fbo.dispose();
  }
  createOptions({ pixelRatio: e }, t) {
    if (!t.length) return null;
    const i = t.shift(), r = i.x, a = i.y;
    this._outstanding = i;
    const s = U("esri-mobile");
    return { type: "hittest", distance: (s ? at : Ni) * e, smallSymbolDistance: (s ? at : Ui) * e, smallSymbolSizeThreshold: Vi, position: [r, a] };
  }
  bind(e) {
    const { context: t, attributeView: i } = e;
    if (!i.size) return;
    const r = i.getBlock($e.GPGPU);
    if (r == null) return;
    const a = r.getFBO(t);
    t.setViewport(0, 0, i.size, i.size), t.bindFramebuffer(a), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e) {
    if (this._outstanding == null) return;
    const t = this._outstanding;
    this._outstanding = null, this._resolve(e, t.resolvers);
  }
  async _resolve(e, t) {
    const { context: i, attributeView: r } = e, a = r.getBlock($e.GPGPU);
    if (a == null) return void t.forEach((o) => o.resolve([]));
    const s = a.getFBO(i), n = new Uint8Array(s.width * s.height * 4);
    try {
      await s.readPixelsAsync(0, 0, s.width, s.height, z.RGBA, kt.UNSIGNED_BYTE, n);
    } catch {
      return void t.forEach((c) => c.resolve([]));
    }
    const l = [];
    for (let o = 0; o < n.length; o += 4) {
      const c = o / 4;
      n[o] && l.push(c);
    }
    t.forEach((o) => o.resolve(l));
  }
};
const Ie = 5, ys = [1, 0], vs = [0, 1], bs = [1, 0.8, 0.6, 0.4, 0.2], ws = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let xs = class {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(Ie), this._nMips = Ie, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad = P(this._quad), this._intensityFBO = P(this._intensityFBO), this._compositeFBO = P(this._compositeFBO), this._mipsFBOs) {
      for (let e = 0; e < this._nMips; e++) this._mipsFBOs[e] && (this._mipsFBOs[e].horizontal.dispose(), this._mipsFBOs[e].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(e, t, i) {
    const { width: r, height: a } = t, { context: s, painter: n } = e, { materialManager: l } = n, o = s.gl, c = this._programDesc, { strength: u, radius: d, threshold: p } = i;
    this._quad || (this._quad = new W(s, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(e, r, a), s.setStencilTestEnabled(!1), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilWriteMask(0);
    const f = this._quad;
    f.bind(), s.bindFramebuffer(this._intensityFBO);
    const _ = l.getProgram(c.luminosityHighPass);
    s.useProgram(_), s.bindTexture(t.colorTexture, 0), _.setUniform1i("u_texture", 0), _.setUniform3fv("u_defaultColor", [0, 0, 0]), _.setUniform1f("u_defaultOpacity", 0), _.setUniform1f("u_luminosityThreshold", p), _.setUniform1f("u_smoothWidth", 0.01);
    const m = [Math.round(r / 2), Math.round(a / 2)];
    s.setViewport(0, 0, m[0], m[1]), s.setClearColor(0, 0, 0, 0), s.clear(o.COLOR_BUFFER_BIT), f.draw(), s.setBlendingEnabled(!1);
    let g = this._intensityFBO.colorTexture;
    for (let w = 0; w < this._nMips; w++) {
      const M = l.getProgram(c.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[w] }]);
      s.useProgram(M), s.bindTexture(g, w + 1), M.setUniform1i("u_colorTexture", w + 1), M.setUniform2fv("u_texSize", m), M.setUniform2fv("u_direction", ys), s.setViewport(0, 0, m[0], m[1]);
      const b = this._mipsFBOs[w];
      s.bindFramebuffer(b.horizontal), f.draw(), g = b.horizontal.colorTexture, s.bindFramebuffer(b.vertical), s.bindTexture(g, w + 1), M.setUniform2fv("u_direction", vs), f.draw(), g = b.vertical.colorTexture, m[0] = Math.round(m[0] / 2), m[1] = Math.round(m[1] / 2);
    }
    s.setViewport(0, 0, r, a);
    const y = l.getProgram(c.composite, [{ name: "nummips", value: Ie }]);
    s.bindFramebuffer(this._compositeFBO), s.useProgram(y), y.setUniform1f("u_bloomStrength", u), y.setUniform1f("u_bloomRadius", d), y.setUniform1fv("u_bloomFactors", bs), y.setUniform3fv("u_bloomTintColors", ws), s.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), y.setUniform1i("u_blurTexture1", 1), s.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), y.setUniform1i("u_blurTexture2", 2), s.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), y.setUniform1i("u_blurTexture3", 3), s.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), y.setUniform1i("u_blurTexture4", 4), s.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), y.setUniform1i("u_blurTexture5", 5), f.draw(), s.bindFramebuffer(t), s.setBlendingEnabled(!0);
    const x = l.getProgram(c.blit);
    s.useProgram(x), s.bindTexture(this._compositeFBO.colorTexture, 6), x.setUniform1i("u_texture", 6), s.setBlendFunction(v.ONE, v.ONE), f.draw(), f.unbind(), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilTestEnabled(!0);
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (this._compositeFBO && this._size[0] === t && this._size[1] === i) return;
    this._size[0] = t, this._size[1] = i;
    const a = [Math.round(t / 2), Math.round(i / 2)];
    if (this._compositeFBO) this._compositeFBO.resize(t, i);
    else {
      const s = new R(t, i);
      s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, this._compositeFBO = new L(r, s);
    }
    if (this._intensityFBO) this._intensityFBO.resize(a[0], a[1]);
    else {
      const s = new R(a[0], a[1]);
      s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, this._intensityFBO = new L(r, s);
    }
    for (let s = 0; s < this._nMips; s++) {
      if (this._mipsFBOs[s]) this._mipsFBOs[s].horizontal.resize(a[0], a[1]), this._mipsFBOs[s].vertical.resize(a[0], a[1]);
      else {
        const n = new R(a[0], a[1]);
        n.internalFormat = z.RGBA, n.wrapMode = E.CLAMP_TO_EDGE, this._mipsFBOs[s] = { horizontal: new L(r, n), vertical: new L(r, n) };
      }
      a[0] = Math.round(a[0] / 2), a[1] = Math.round(a[1] / 2);
    }
  }
};
const Ms = [1, 0], Ss = [0, 1];
let Os = class {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(e, t, i) {
    const { context: r } = e, { type: a, radius: s } = i;
    if (s === 0) return;
    this._createOrResizeResources(e), this._quad || (this._quad = new W(r, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const n = this._quad;
    n.bind(), a === "blur" ? this._gaussianBlur(e, t, s) : this._radialBlur(e, t), n.unbind();
  }
  _gaussianBlur(e, t, i) {
    const { context: r, state: a, painter: s, pixelRatio: n } = e, { size: l } = a, { materialManager: o } = s, c = this._programDesc, u = this._quad, d = [Math.round(n * l[0]), Math.round(n * l[1])], p = this._blurFBO, f = o.getProgram(c.gaussianBlur, [{ name: "radius", value: Math.ceil(i) }]);
    r.useProgram(f), r.setBlendingEnabled(!1), r.bindFramebuffer(p), r.bindTexture(t.colorTexture, 4), f.setUniform1i("u_colorTexture", 4), f.setUniform2fv("u_texSize", d), f.setUniform2fv("u_direction", Ms), f.setUniform1f("u_sigma", i), u.draw(), r.bindFramebuffer(t), r.setStencilWriteMask(0), r.setStencilTestEnabled(!1), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.bindTexture(p?.colorTexture, 5), f.setUniform1i("u_colorTexture", 5), f.setUniform2fv("u_direction", Ss), u.draw(), r.setBlendingEnabled(!0), r.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), r.setStencilTestEnabled(!0);
  }
  _radialBlur(e, t) {
    const { context: i, painter: r } = e, { materialManager: a } = r, s = this._programDesc, n = this._quad, l = this._blurFBO;
    i.bindFramebuffer(l);
    const o = a.getProgram(s.radialBlur);
    i.useProgram(o), i.setBlendingEnabled(!1), i.bindTexture(t.colorTexture, 4), o.setUniform1i("u_colorTexture", 4), n.draw(), i.bindFramebuffer(t), i.setStencilWriteMask(0), i.setStencilTestEnabled(!1), i.setDepthWriteEnabled(!1), i.setDepthTestEnabled(!1), i.setBlendingEnabled(!0);
    const c = a.getProgram(s.blit);
    i.useProgram(c), i.bindTexture(l?.colorTexture, 5), c.setUniform1i("u_texture", 5), i.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), n.draw();
  }
  _createOrResizeResources(e) {
    const { context: t, state: i, pixelRatio: r } = e, { size: a } = i, s = Math.round(r * a[0]), n = Math.round(r * a[1]);
    if (!this._blurFBO || this._size[0] !== s || this._size[1] !== n) if (this._size[0] = s, this._size[1] = n, this._blurFBO) this._blurFBO.resize(s, n);
    else {
      const l = new R(s, n);
      l.internalFormat = z.RGBA, l.wrapMode = E.CLAMP_TO_EDGE, this._blurFBO = new L(t, l);
    }
  }
};
class Ps {
  constructor() {
    this._layerFBOTexture = null, this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture);
  }
  draw(e, t, i) {
    const { width: r, height: a } = t;
    this._createOrResizeResources(e, r, a);
    const { context: s, painter: n } = e, { materialManager: l } = n, o = this._programDesc, c = this._quad, u = i.colorMatrix;
    c.bind();
    const d = this._layerFBOTexture;
    s.bindFramebuffer(t), t.copyToTexture(0, 0, r, a, 0, 0, d), s.setBlendingEnabled(!1), s.setStencilTestEnabled(!1);
    const p = l.getProgram(o);
    s.useProgram(p), s.bindTexture(d, 2), p.setUniformMatrix4fv("u_coefficients", u), p.setUniform1i("u_colorTexture", 2), c.draw(), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilTestEnabled(!0), c.unbind();
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (!this._layerFBOTexture || this._size[0] !== t || this._size[1] !== i) {
      if (this._size[0] = t, this._size[1] = i, this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
      else {
        const a = new R();
        a.internalFormat = z.RGBA, a.wrapMode = E.CLAMP_TO_EDGE, a.width = t, a.height = i, this._layerFBOTexture = new G(r, a);
      }
      this._quad || (this._quad = new W(r, [-1, -1, 1, -1, -1, 1, 1, 1]));
    }
  }
}
const Ts = [1, 0], Cs = [0, 1];
class Es {
  constructor() {
    this._layerFBOTexture = null, this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._quad = null, this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture), this._horizontalBlurFBO = P(this._horizontalBlurFBO), this._verticalBlurFBO = P(this._verticalBlurFBO);
  }
  draw(e, t, i) {
    const { context: r, state: a, painter: s } = e, { materialManager: n } = s, l = this._programDesc, o = t.width, c = t.height, u = [Math.round(o), Math.round(c)], { blurRadius: d, offsetX: p, offsetY: f, color: _ } = i, m = [K(p), K(f)];
    this._createOrResizeResources(e, o, c, u);
    const g = this._horizontalBlurFBO, y = this._verticalBlurFBO;
    r.setStencilWriteMask(0), r.setStencilTestEnabled(!1), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1);
    const x = this._layerFBOTexture;
    t.copyToTexture(0, 0, o, c, 0, 0, x), this._quad || (this._quad = new W(r, [-1, -1, 1, -1, -1, 1, 1, 1])), r.setViewport(0, 0, u[0], u[1]);
    const w = this._quad;
    w.bind(), r.setBlendingEnabled(!1);
    const M = n.getProgram(l.blur, [{ name: "radius", value: Math.ceil(d) }]);
    r.useProgram(M), r.bindFramebuffer(g), r.bindTexture(t.colorTexture, 4), M.setUniform1i("u_colorTexture", 4), M.setUniform2fv("u_texSize", u), M.setUniform2fv("u_direction", Ts), M.setUniform1f("u_sigma", d), w.draw(), r.bindFramebuffer(y), r.bindTexture(g?.colorTexture, 5), M.setUniform1i("u_colorTexture", 5), M.setUniform2fv("u_direction", Cs), w.draw(), r.bindFramebuffer(t), r.setViewport(0, 0, o, c);
    const b = n.getProgram(l.composite);
    r.useProgram(b), r.bindTexture(y?.colorTexture, 2), b.setUniform1i("u_blurTexture", 2), r.bindTexture(x, 3), b.setUniform1i("u_layerFBOTexture", 3), b.setUniform4fv("u_shadowColor", [_[3] * (_[0] / 255), _[3] * (_[1] / 255), _[3] * (_[2] / 255), _[3]]), b.setUniformMatrix3fv("u_displayViewMat3", a.displayMat3), b.setUniform2fv("u_shadowOffset", m), w.draw(), r.setBlendingEnabled(!0), r.setStencilTestEnabled(!0), r.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), w.unbind();
  }
  _createOrResizeResources(e, t, i, r) {
    const { context: a } = e;
    if (!this._horizontalBlurFBO || this._size[0] !== t || this._size[1] !== i) {
      if (this._size[0] = t, this._size[1] = i, this._horizontalBlurFBO) this._horizontalBlurFBO.resize(r[0], r[1]);
      else {
        const s = new R(r[0], r[1]);
        s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, this._horizontalBlurFBO = new L(a, s);
      }
      if (this._verticalBlurFBO) this._verticalBlurFBO.resize(r[0], r[1]);
      else {
        const s = new R(r[0], r[1]);
        s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, this._verticalBlurFBO = new L(a, s);
      }
      if (this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
      else {
        const s = new R();
        s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, s.width = t, s.height = i, this._layerFBOTexture = new G(a, s);
      }
    }
  }
}
class Rs {
  constructor() {
    this._size = [0, 0], this._layerFBOTexture = null;
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture);
  }
  draw(e, t, i) {
    const { width: r, height: a } = t;
    this._createOrResizeResources(e, r, a);
    const { context: s, painter: n } = e, { amount: l } = i, o = s.gl, c = this._layerFBOTexture;
    s.bindFramebuffer(t), t.copyToTexture(0, 0, r, a, 0, 0, c), s.setBlendingEnabled(!0), s.setStencilTestEnabled(!1), s.setDepthTestEnabled(!1), s.setClearColor(0, 0, 0, 0), s.clear(o.COLOR_BUFFER_BIT), n.blitTexture(s, c, N.NEAREST, l);
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (!this._layerFBOTexture || this._size[0] !== t || this._size[1] !== i) if (this._size[0] = t, this._size[1] = i, this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
    else {
      const a = new R();
      a.internalFormat = z.RGBA, a.wrapMode = E.CLAMP_TO_EDGE, a.samplingMode = N.NEAREST, a.width = t, a.height = i, this._layerFBOTexture = new G(r, a);
    }
  }
}
function zs(h) {
  switch (h) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return h;
    default:
      return "colorize";
  }
}
const Fs = { colorize: () => new Ps(), blur: () => new Os(), bloom: () => new xs(), opacity: () => new Rs(), "drop-shadow": () => new Es() };
class ks {
  constructor() {
    this._effectMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._effectMap.forEach((e) => e.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(e) {
    if (!e || e.length === 0) return [];
    const t = [];
    for (const i of e) {
      const r = zs(i.type);
      let a = this._effectMap.get(r);
      a || (a = Fs[r](), this._effectMap.set(r, a)), t.push({ postProcessingEffect: a, effect: i });
    }
    return t;
  }
}
class Bs {
  constructor(e, t) {
    this.brushes = e, this.name = t.name, this.drawPhase = t.drawPhase || D.MAP, this._targetFn = t.target, this.effects = t.effects || [], this.enableDefaultDraw = t.enableDefaultDraw ?? (() => !0), this.forceDrawByDisplayOrder = !!t.forceDrawByDisplayOrder;
  }
  render(e) {
    const { context: t, profiler: i } = e, r = this._targetFn(), a = this.drawPhase & e.drawPhase;
    if (i.recordPassStart(this.name), a) {
      this.enableDefaultDraw() && this._doRender(e, r), i.recordPassEnd();
      for (const s of this.effects) {
        if (!s.enable()) continue;
        const n = s.apply, l = s.args?.(), o = t.getViewport(), c = t.getBoundFramebufferObject(), u = e.passOptions;
        this._bindEffect(e, n, l), this._doRender(e, r, n.defines), this._drawAndUnbindEffect(e, n, o, c, u, l);
      }
    }
  }
  _doRender(e, t, i) {
    if (t == null) return;
    const { profiler: r, context: a } = e;
    for (const s of this.brushes) {
      if (r.recordBrushStart(s.name), s.brushEffect != null) {
        const n = a.getViewport(), l = a.getBoundFramebufferObject(), o = e.passOptions;
        this._bindEffect(e, s.brushEffect), this._drawWithBrush(s, e, t, i), this._drawAndUnbindEffect(e, s.brushEffect, n, l, o);
      } else this._drawWithBrush(s, e, t, i);
      r.recordBrushEnd();
    }
  }
  _drawWithBrush(e, t, i, r) {
    fi(i) ? (e.prepareState(t, r), e.drawMany(t, i, r)) : i.visible && (e.prepareState(t, r), e.draw(t, i, r));
  }
  _bindEffect(e, t, i) {
    const { profiler: r } = e;
    r.recordPassStart(this.name + "." + t.name), t.bind(e, i);
    const a = t.createOptions(e, i);
    e.passOptions = a;
  }
  _drawAndUnbindEffect(e, t, i, r, a, s) {
    const { profiler: n, context: l } = e;
    e.passOptions = a, n.recordBrushStart(t.name), t.draw(e, s), t.unbind(e, s), l.bindFramebuffer(r);
    const { x: o, y: c, width: u, height: d } = i;
    l.setViewport(o, c, u, d), n.recordBrushEnd(), n.recordPassEnd();
  }
}
class Et {
  constructor() {
    this._programCache = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const e of this._programCache.values()) e.destroy();
    this._programCache.clear();
  }
  getProgram(e, t, i, r, a) {
    const s = e.getShaderKey(t, i, r, a);
    let n = this._programCache.get(s);
    return n || (n = e.getProgram(t, i, r, a), this._programCache.set(s, n)), n;
  }
}
let As = class {
  constructor(e, t) {
    this.context = e, this._currentPipelineStateNeedsUpdate = !1, this._blitRenderer = new Bt(), this._worldExtentRenderer = new cs(), this._brushCache = /* @__PURE__ */ new Map(), this._lastWidth = null, this._lastHeight = null, this._vtlMaterialManager = new $r(), this._blendEffect = new ps(), this._stencilBuf = null, this._prevBeforeLayerFBOStack = [], this._fboPool = [], this.effects = { highlight: new fs(), hittest: new gs(), integrate: new us(), insideEffect: new Tt("inside"), outsideEffect: new Tt("outside") }, this._programCache = new Et(), this._shaderState = { shader: null, uniforms: null, defines: null, optionalAttributes: null, useComputeBuffer: !1 }, this.materialManager = new Dr(e), this.textureManager = new is(t), this.textureUploadManager = new ls(t), this._effectsManager = new ks(), this._quadMesh = new W(e, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  dispose() {
    if (this._programCache.destroy(), this.materialManager.dispose(), this.textureManager.dispose(), this.textureUploadManager.destroy(), this._blitRenderer = P(this._blitRenderer), this._worldExtentRenderer = P(this._worldExtentRenderer), this._quadMesh.dispose(), this._brushCache && (this._brushCache.forEach((e) => e.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos) {
      let e;
      for (e in this._fbos) this._fbos[e] && this._fbos[e].dispose();
    }
    for (const e of this._fboPool) e.dispose();
    if (this._fboPool.length = 0, this.effects) {
      let e;
      for (e in this.effects) this.effects[e] && this.effects[e].dispose();
    }
    this._effectsManager.dispose(), this._blendEffect.dispose(this.context), this._vtlMaterialManager = P(this._vtlMaterialManager);
  }
  clearShaderCache() {
    this._programCache.destroy(), this._programCache = new Et();
  }
  get blitRenderer() {
    return this._blitRenderer;
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getFbos() {
    if (!this._fbos) throw new Error("InternalError: Painter FBOs not initialized");
    return this._fbos;
  }
  acquireFbo(e, t) {
    let i;
    if (this._fboPool.length > 0) i = this._fboPool.pop();
    else {
      const r = new R(e, t);
      r.samplingMode = N.NEAREST, r.wrapMode = E.CLAMP_TO_EDGE, i = new L(this.context, r, this._stencilBuf);
    }
    return i.width === e && i.height === t || i.resize(e, t), i;
  }
  releaseFbo(e) {
    this._fboPool.push(e);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderPhases(e, t, i) {
    const { context: r } = e;
    this._worldExtentRenderer.render(e, t, i);
    const { width: a, height: s } = r.getViewport();
    if (this.updateFBOs(a, s), this._prevFBO = r.getBoundFramebufferObject(), r.bindFramebuffer(this.getFbos().output), r.setColorMask(!0, !0, !0, !0), t != null) {
      const { r: n, g: l, b: o, a: c } = t;
      r.setClearColor(c * n / 255, c * l / 255, c * o / 255, c);
    } else r.setClearColor(0, 0, 0, 0);
    r.setDepthWriteEnabled(!0), r.setClearDepth(1), r.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT), r.setDepthWriteEnabled(!1);
  }
  afterRenderPhases(e) {
    const { context: t } = e;
    t.bindFramebuffer(this._prevFBO), t.setStencilFunction(De.EQUAL, 1, 255), t.setStencilTestEnabled(!0), t.setDepthTestEnabled(!1), this.blitTexture(t, this.getFbos().output.colorTexture, N.NEAREST);
  }
  beforeRenderLayer(e, t, i) {
    const { context: r, blendMode: a, effects: s, drawPhase: n, requireFBO: l } = e;
    if (l || Rt(n, a, s, i)) {
      const o = r.getBoundFramebufferObject();
      this._prevBeforeLayerFBOStack.push(o);
      const { width: c, height: u } = r.getViewport(), d = this.acquireFbo(c, u);
      r.bindFramebuffer(d), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.setDepthWriteEnabled(!0), r.setClearDepth(1), r.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT), r.setDepthWriteEnabled(!1);
    }
    r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.setStencilTestEnabled(!0), r.setClearStencil(t), r.setStencilWriteMask(255), r.clear(r.gl.STENCIL_BUFFER_BIT);
  }
  afterRenderLayer(e, t) {
    const { context: i, blendMode: r, effects: a, requireFBO: s, drawPhase: n } = e;
    if (s || Rt(n, r, a, t)) {
      const l = i.getBoundFramebufferObject();
      a != null && a.length > 0 && n === D.MAP && (i.setColorMask(!0, !0, !0, !0), this._applyEffects(e, a, l)), i.bindFramebuffer(this._prevBeforeLayerFBOStack.pop()), i.setStencilTestEnabled(!1), i.setStencilWriteMask(0), i.setBlendingEnabled(!0), i.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), i.setColorMask(!0, !0, !0, !0);
      const o = r == null || n === D.HIGHLIGHT ? "normal" : r;
      this._blendEffect.draw(e, l.colorTexture, N.NEAREST, o, t), this.releaseFbo(l);
    }
  }
  renderObject(e, t, i, r) {
    const a = ht[i];
    if (!a) return;
    let s = this._brushCache.get(a);
    s === void 0 && (s = new a(), this._brushCache.set(a, s)), s.prepareState(e), s.draw(e, t, r);
  }
  renderObjects(e, t, i, r) {
    const a = ht[i];
    if (!a) return;
    let s = this._brushCache.get(a);
    s === void 0 && (s = new a(), this._brushCache.set(a, s)), s.drawMany(e, t, r);
  }
  registerRenderPass(e) {
    const t = e.brushes.map((i) => (this._brushCache.has(i) || this._brushCache.set(i, new i()), this._brushCache.get(i)));
    return new Bs(t, e);
  }
  blitTexture(e, t, i, r = 1) {
    e.setBlendingEnabled(!0), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), e.setColorMask(!0, !0, !0, !0), this._blitRenderer.render(e, t, i, r), this._currentPipelineStateNeedsUpdate = !0;
  }
  getPostProcessingEffects(e) {
    return this._effectsManager.getPostProcessingEffects(e);
  }
  updateFBOs(e, t) {
    if (e !== this._lastWidth || t !== this._lastHeight) {
      if (this._lastWidth = e, this._lastHeight = t, this._fbos) {
        let a;
        for (a in this._fbos) this._fbos[a].resize(e, t);
        return;
      }
      const i = new R(e, t);
      i.samplingMode = N.NEAREST, i.wrapMode = E.CLAMP_TO_EDGE;
      const r = new He(qe.DEPTH_STENCIL, e, t);
      this._stencilBuf = new sr(this.context, r), this._fbos = { output: new L(this.context, i, this._stencilBuf), effect0: new L(this.context, i, this._stencilBuf) };
    }
  }
  _applyEffects(e, t, i) {
    const { context: r } = e, a = this._effectsManager.getPostProcessingEffects(t);
    for (const { postProcessingEffect: s, effect: n } of a) r.bindFramebuffer(i), s.draw(e, i, n);
    this._currentPipelineStateNeedsUpdate = !0;
  }
  setShader(e) {
    this._shaderState.shader = e.shader, this._shaderState.uniforms = e.uniforms, this._shaderState.defines = e.defines, this._shaderState.optionalAttributes = e.optionalAttributes, this._shaderState.useComputeBuffer = e.useComputeBuffer ?? !1;
  }
  setPipelineState(e) {
    e !== this._currentPipelineState && (this._currentPipelineState = e, this._currentPipelineStateNeedsUpdate = !0);
  }
  submitDraw(e, t) {
    const { shader: i, uniforms: r, defines: a, optionalAttributes: s } = this._shaderState, n = e.context, l = t.getAttributePrecisionPackFactors(), o = this._programCache.getProgram(i, l, r, a ?? {}, s ?? {});
    return o.setUniforms(r), o.bind(n), this.updatePipelineState(n), this.setStencilRef(n, t), t.draw(e, i.locationInfo), o.cleanupTemporaryTextures(), { vertexShader: o.vertexShader, fragmentShader: o.fragmentShader };
  }
  submitDrawQuad(e) {
    const { shader: t, uniforms: i, defines: r, optionalAttributes: a } = this._shaderState, s = this._programCache.getProgram(t, {}, i, r ?? {}, a ?? {});
    s.setUniforms(i), s.bind(e), this.updatePipelineState(e), this._quadMesh.draw(), e.bindVAO(null), s.cleanupTemporaryTextures();
  }
  submitDrawMesh(e, t, i) {
    const { shader: r, uniforms: a, defines: s, optionalAttributes: n } = this._shaderState, l = this._programCache.getProgram(r, {}, a, s ?? {}, n ?? {});
    if (l.setUniforms(a), l.bind(e), this.updatePipelineState(e), i) for (const o of i) t.bind(e, o), t.draw(e);
    else for (let o = 0; o < t.parts.length; o++) t.bind(e, o), t.draw(e);
    t.unbind(e), l.cleanupTemporaryTextures();
  }
  updatePipelineState(e) {
    this._currentPipelineStateNeedsUpdate && (this._currentPipelineStateNeedsUpdate = !1, this._updatePipelineState(e));
  }
  _updatePipelineState(e) {
    if (this._currentPipelineState == null) throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { color: t, depth: i, stencil: r } = this._currentPipelineState;
    if (t) {
      const { blendMode: a, write: s } = t;
      switch (e.setColorMask(...s), e.setBlendingEnabled(!0), e.setBlendEquation(dt.ADD), a) {
        case "composite":
          e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA);
          break;
        case "additive":
          e.setBlendFunctionSeparate(v.ONE, v.ONE, v.ONE, v.ONE);
          break;
        case "custom": {
          const { blendParameters: n } = t, { dstAlpha: l, dstRGB: o, srcAlpha: c, srcRGB: u } = n;
          e.setBlendFunctionSeparate(u, o, c, l);
          break;
        }
        case "delete":
          e.setBlendEquation(dt.REVERSE_SUBTRACT), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA);
      }
    }
    if (i) {
      const { test: a, write: s } = i;
      s ? (e.setDepthWriteEnabled(!0), e.setDepthRange(s.zNear, s.zFar)) : e.setDepthWriteEnabled(!1), a ? (e.setDepthTestEnabled(!0), e.setDepthFunction(a)) : e.setDepthTestEnabled(!1);
    } else e.setDepthTestEnabled(!1), e.setDepthWriteEnabled(!1);
    if (r) {
      const { test: a, write: s } = r;
      if (a) {
        const { compare: n, mask: l, op: o, ref: c } = a;
        e.setStencilTestEnabled(!0), typeof c != "function" && e.setStencilFunctionSeparate(Be.FRONT_AND_BACK, n, c, l), e.setStencilOpSeparate(Be.FRONT_AND_BACK, o.fail, o.zFail, o.zPass);
      } else e.setStencilTestEnabled(!1);
      if (s) {
        const { mask: n } = s;
        e.setStencilWriteMask(n);
      } else e.setStencilWriteMask(0);
    } else e.setStencilTestEnabled(!1), e.setStencilWriteMask(0);
  }
  setStencilRef(e, t) {
    if (this._currentPipelineState == null) throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { stencil: i } = this._currentPipelineState;
    if (i) {
      const { test: r } = i;
      if (r) {
        const { compare: a, mask: s, ref: n } = r;
        if (typeof n == "function") {
          const l = t.getStencilReference();
          if (l === null) throw new Error("InternalError: Stencil reference expected for target but not defined");
          e.setStencilFunctionSeparate(Be.FRONT_AND_BACK, a, l, s);
        }
      }
    }
  }
};
function Rt(h, e, t, i) {
  return h !== D.LABEL_ALPHA && h !== D.LABEL && h !== D.HIGHLIGHT && (i !== 1 || e != null && e !== "normal" || t != null && t.length > 0);
}
let Is = class {
  constructor() {
    this._candidateTiles = [];
  }
  schedule(e) {
    this._candidateTiles.includes(e) || this._candidateTiles.push(e);
  }
  reshuffle(e) {
    const t = [];
    for (const i of this._candidateTiles) e > 0 ? (i.reshuffle(), e--) : t.push(i);
    this._candidateTiles = t;
  }
};
const $s = 2e3;
class $a extends qi {
  constructor(e, t) {
    super(), this.meshWriterRegistry = new vr(), this._trash = /* @__PURE__ */ new Set(), this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this._renderRequested = gi(!1), this.stage = this, this._stationary = !0, this._reshuffleManager = new Is(), this._canvas = new Pr(e), this.context = new or(this._canvas.gl, t.contextOptions ?? {}), this.painter = new As(this.context, this), this._cimAnalyzer = new xr(this.painter.textureManager.resourceManager), U("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), e.appendChild(this._debugOutput));
    const i = () => this._highlightGradient;
    this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: !1, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: !1, effects: null, context: this.context, painter: this.painter, timeline: t.timeline || new yi(), renderingOptions: t.renderingOptions, requestRender: () => this.requestRender(), allowDelayedRender: !1, requireFBO: !1, profiler: new tr(this.context, this._debugOutput), dataUploadCounter: 0, get highlightGradient() {
      return i();
    }, reshuffleManager: this._reshuffleManager, backgroundColor: t.backgroundColor }, this._taskHandle = vi({ render: (r) => this.renderFrame(r) }), this._taskHandle.pause(), this._lostWebGLContextHandle = this._canvas.events.on("webgl-context-lost", (r) => this.emit("webgl-error", { error: new J("webgl-context-lost", r.statusMessage) })), this._bufferPool = new Yi(), gr();
  }
  destroy() {
    yr(this.context), this.removeAllChildren(), this._emptyTrash(), this._taskHandle = Qe(this._taskHandle), this._lostWebGLContextHandle = Qe(this._lostWebGLContextHandle), this._canvas.destroy(), this._debugOutput?.parentNode?.removeChild(this._debugOutput), this._bufferPool.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get textureManager() {
    return this.painter.textureManager;
  }
  get backgroundColor() {
    return this._renderParameters.backgroundColor;
  }
  set backgroundColor(e) {
    this._renderParameters.backgroundColor = e, this.requestRender();
  }
  get bufferPool() {
    return this._bufferPool;
  }
  get cimAnalyzer() {
    return this._cimAnalyzer;
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e) {
    this._renderingOptions = e, this.requestRender();
  }
  get renderRequested() {
    return this._renderRequested.value;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e) {
    this._stationary !== e && (this._stationary = e, this.requestRender());
  }
  trashDisplayObject(e) {
    this._trash.add(e), this.requestRender();
  }
  untrashDisplayObject(e) {
    return this._trash.delete(e);
  }
  requestRender() {
    this._renderRemainingTime = $s, this.renderRequested || (this._renderRequested.value = !0, this._taskHandle.resume());
  }
  renderFrame(e) {
    const t = this._lastFrameRenderTime ? e.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e.time, this._renderRequested.value = !1, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e.time, this._renderParameters.deltaTime = e.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash();
  }
  _createTransforms() {
    return { displayViewScreenMat3: Ue() };
  }
  renderChildren(e) {
    for (const t of this.children) t.beforeRender(e);
    this._reshuffleManager.reshuffle(Gi), this._canvas.render(e, () => this._renderChildren(this.children, e));
    for (const t of this.children) t.afterRender(e);
  }
  _renderChildren(e, t) {
    const i = this.context;
    this.painter.textureUploadManager.upload(), i.resetInfo(), t.profiler.recordStart("drawLayers"), t.dataUploadCounter = 0, this.painter.beforeRenderPhases(t, t.backgroundColor, this.state.padding), t.drawPhase = D.MAP;
    for (const r of e) r.processRender(t);
    if (this.children.some((r) => r.hasHighlight)) {
      t.drawPhase = D.HIGHLIGHT;
      for (const r of e) r.processRender(t);
    }
    if (this.children.some((r) => r.hasLabels)) {
      t.drawPhase = D.LABEL;
      for (const r of e) r.processRender(t);
    }
    if (U("esri-tiles-debug")) {
      t.drawPhase = D.DEBUG;
      for (const r of e) r.processRender(t);
    }
    this.painter.afterRenderPhases(t), t.profiler.recordEnd("drawLayers"), i.logInfo();
  }
  doRender(e) {
    const t = this.context, { state: i, pixelRatio: r } = e;
    this._canvas.resize(e), t.setViewport(0, 0, r * i.size[0], r * i.size[1]), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), this.renderChildren(e);
  }
  async takeScreenshot(e, t, i, r) {
    const a = Math.round(this.state.size[0] * e.resolutionScale), s = Math.round(this.state.size[1] * e.resolutionScale), n = e.resolutionScale, l = this.context, o = this._state.clone();
    if (r != null) {
      const y = o.viewpoint;
      o.viewpoint.rotation = r, o.viewpoint = y;
    }
    const c = { ...this._renderParameters, drawPhase: null, globalOpacity: 1, stationary: !0, state: o, pixelRatio: n, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: !1, backgroundColor: i }, u = new R(a, s);
    u.wrapMode = E.CLAMP_TO_EDGE, u.internalFormat = ar.RGBA8, u.isImmutable = !0;
    const d = new L(l, u, new He(qe.DEPTH_STENCIL, a, s)), p = l.getBoundFramebufferObject(), f = l.getViewport();
    l.bindFramebuffer(d), l.setViewport(0, 0, a, s), this._renderChildren(t ?? this.children, c);
    const _ = this._readbackScreenshot(d, { ...e.cropArea, y: s - (e.cropArea.y + e.cropArea.height) });
    l.bindFramebuffer(p), l.setViewport(f.x, f.y, f.width, f.height), this.requestRender();
    const m = await _;
    let g;
    return e.outputScale === 1 ? g = m : (g = new ImageData(Math.round(m.width * e.outputScale), Math.round(m.height * e.outputScale)), bi(m, g)), d.dispose(), g;
  }
  async _readbackScreenshot(e, t) {
    const i = hr(t.width, t.height, document.createElement("canvas"));
    return await e.readPixelsAsync(t.x, t.y, t.width, t.height, z.RGBA, kt.UNSIGNED_BYTE, new Uint8Array(i.data.buffer)), i;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e = Array.from(this._trash);
      this._trash.clear();
      for (const t of e) t.processDetach();
    }
  }
}
async function Ds(h) {
  const e = import("./mask-svg-DxA9o6hM.js"), t = import("./overlay-svg-C7fxD_NX.js"), i = _t((await e).default, { signal: h }), r = _t((await t).default, { signal: h }), a = { mask: await i, overlay: await r };
  return Ne(h), a;
}
class Da extends Xi {
  constructor() {
    super(), this._handles = new wi(), this._resourcePixelRatio = 1, this.updatingHandles = new xi(), this.visible = !1;
  }
  destroy() {
    this._handles = Mi(this._handles), this._disposeRenderResources(), this._resourcesTask = Si(this._resourcesTask);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    this._backgroundColor = e, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e) {
    this._magnifier = e, this._handles.removeAll(), this._handles.add([ze(() => e.version, () => {
      this.visible = e.visible && e.position != null && e.size > 0, this.requestRender();
    }, Oi), ze(() => [e.maskUrl, e.overlayUrl], () => this._reloadResources()), ze(() => e.size, () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: Ue() };
  }
  doRender(e) {
    const t = e.context;
    if (!this._resourcesTask) return void this._reloadResources();
    if (e.drawPhase !== D.MAP || !this._canRender()) return;
    this._updateResources(e);
    const i = this._magnifier;
    if (i.position == null) return;
    const r = e.pixelRatio, a = i.size * r, s = 1 / i.factor, n = Math.ceil(s * a);
    this._readbackTexture.resize(n, n);
    const { size: l } = e.state, o = r * l[0], c = r * l[1], u = 0.5 * n, d = 0.5 * n, p = Ze(r * i.position.x, u, o - u - 1), f = Ze(c - r * i.position.y, d, c - d - 1);
    t.setBlendingEnabled(!0);
    const _ = p - u, m = f - d, g = this._readbackTexture;
    t.bindTexture(g, 0), t.gl.copyTexImage2D(g.descriptor.target, 0, g.descriptor.pixelFormat, _, m, n, n, 0);
    const y = this.backgroundColor, x = y ? [y.a * y.r / 255, y.a * y.g / 255, y.a * y.b / 255, y.a] : [1, 1, 1, 1], w = (p + i.offset.x * r) / o * 2 - 1, M = (f - i.offset.y * r) / c * 2 - 1, b = a / o * 2, T = a / c * 2, O = this._program;
    t.bindVAO(this._vertexArrayObject), t.bindTexture(this._overlayTexture, 6), t.bindTexture(this._maskTexture, 7), t.useProgram(O), O.setUniform4fv("u_background", x), O.setUniform1i("u_readbackTexture", 0), O.setUniform1i("u_overlayTexture", 6), O.setUniform1i("u_maskTexture", 7), O.setUniform4f("u_drawPos", w, M, b, T), O.setUniform1i("u_maskEnabled", i.maskEnabled ? 1 : 0), O.setUniform1i("u_overlayEnabled", i.overlayEnabled ? 1 : 0), t.setStencilTestEnabled(!1), t.setColorMask(!0, !0, !0, !0), t.drawArrays(ce.TRIANGLE_STRIP, 0, 4), t.bindVAO();
  }
  _canRender() {
    return this._mask && this._overlay && this._magnifier != null;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const e = this._magnifier != null ? this._magnifier.maskUrl : null, t = this._magnifier != null ? this._magnifier.overlayUrl : null;
    this._resourcesTask = Pi(async (i) => {
      const r = e == null || t == null ? Ds(i) : null, a = e != null ? ue(e, { responseType: "image", signal: i }).then((o) => o.data) : r.then((o) => o.mask), s = t != null ? ue(t, { responseType: "image", signal: i }).then((o) => o.data) : r.then((o) => o.overlay), [n, l] = await Promise.all([a, s]);
      this._mask = n, this._overlay = l, this._disposeRenderResources(), this.requestRender();
    }), this.updatingHandles.addPromise(this._resourcesTask.promise);
  }
  _disposeRenderResources() {
    this._readbackTexture = P(this._readbackTexture), this._overlayTexture = P(this._overlayTexture), this._maskTexture = P(this._maskTexture), this._vertexArrayObject = P(this._vertexArrayObject), this._program = P(this._program);
  }
  _updateResources(e) {
    if (e.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture) return;
    const t = e.context;
    this._resourcePixelRatio = e.pixelRatio;
    const i = Math.ceil(this._magnifier.size * e.pixelRatio);
    this._program = ir(t);
    const r = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), a = rr.attributes;
    this._vertexArrayObject = new Ve(t, a, Ki, { geometry: Ge.createVertex(t, We.STATIC_DRAW, r) }), this._overlay.width = i, this._overlay.height = i;
    const s = new R();
    s.internalFormat = z.RGBA, s.wrapMode = E.CLAMP_TO_EDGE, s.samplingMode = N.NEAREST, s.flipped = !0, s.preMultiplyAlpha = !Ti(this._overlay.src) || !e.context.driverTest.svgPremultipliesAlpha.result, this._overlayTexture = new G(t, s, this._overlay), this._mask.width = i, this._mask.height = i, s.pixelFormat = s.internalFormat = z.ALPHA, this._maskTexture = new G(t, s, this._mask);
    const n = 1 / this._magnifier.factor;
    s.pixelFormat = s.internalFormat = z.RGBA, s.width = s.height = Math.ceil(n * i), s.samplingMode = N.LINEAR, s.flipped = !1, this._readbackTexture = new G(t, s);
  }
}
export {
  qa as GraphicContainer,
  Ha as GraphicsView2D,
  Ua as LabelManager,
  Da as MagnifierView2D,
  Va as MapViewNavigation,
  $a as Stage
};
//# sourceMappingURL=mapViewDeps-BBfFGIIh.js.map
