import { cd as X, ce as Y, lW as ee, lX as te, lY as I, gQ as H, bQ as a, bR as p, lZ as re, fo as se, f9 as Q, aA as J, b1 as ie, fN as oe, bS as P, bT as z, b2 as ne, a1 as q, eD as ae, hL as le, bN as pe, a0 as ue, bP as ye, bO as ce, U as he, bm as B, ew as de, fv as fe, cw as me, s as T, a8 as ge, cF as _, eK as A, bW as be, cJ as we, Q as ve, l_ as xe, J as M, l$ as $e, dp as Se } from "./main-DZxT3i7S.js";
import { H as Fe } from "./languageUtils-1MI-6f47.js";
import { o as L } from "./drapedUtils-CnzC1wPs.js";
import { n as Oe, p as je } from "./popupUtils-D5nSZ2Tz.js";
function Re(t, e) {
  const { dpi: s, gdbVersion: o, geometry: r, geometryPrecision: n, height: i, historicMoment: d, layerOption: u, mapExtent: l, maxAllowableOffset: y, returnFieldName: c, returnGeometry: m, returnUnformattedValues: x, returnZ: f, spatialReference: S, timeExtent: b, tolerance: g, width: w } = t.toJSON(), { dynamicLayers: O, layerDefs: j, layerIds: G } = Ne(t), k = e?.geometry != null ? e.geometry : null, v = { historicMoment: d, geometryPrecision: n, maxAllowableOffset: y, returnFieldName: c, returnGeometry: m, returnUnformattedValues: x, returnZ: f, tolerance: g }, R = k?.toJSON() || r;
  v.imageDisplay = `${w},${i},${s}`, o && (v.gdbVersion = o), R && (delete R.spatialReference, v.geometry = JSON.stringify(R), v.geometryType = X(R));
  const V = S ?? R?.spatialReference ?? l?.spatialReference;
  if (V && (v.sr = Y(V)), v.time = b ? [b.start, b.end].join(",") : null, l) {
    const { xmin: Z, ymin: W, xmax: C, ymax: K } = l;
    v.mapExtent = `${Z},${W},${C},${K}`;
  }
  return j && (v.layerDefs = j), O && !j && (v.dynamicLayers = O), v.layers = u === "popup" ? "visible" : u, G && !O && (v.layers += `:${G.join(",")}`), v;
}
function Ne(t) {
  const { mapExtent: e, floors: s, width: o, sublayers: r, layerIds: n, layerOption: i, gdbVersion: d } = t, u = r?.find((f) => f.layer != null)?.layer?.serviceSublayers, l = i === "popup", y = {}, c = ee({ extent: e, width: o, spatialReference: e?.spatialReference }), m = [], x = (f) => {
    const S = c === 0, b = f.minScale === 0 || c <= f.minScale, g = f.maxScale === 0 || c >= f.maxScale;
    if (f.visible && (S || b && g)) if (f.sublayers) f.sublayers.forEach(x);
    else {
      if (n?.includes(f.id) === !1 || l && (!f.popupTemplate || !f.popupEnabled)) return;
      m.unshift(f);
    }
  };
  if (r?.forEach(x), r && !m.length) y.layerIds = [];
  else {
    const f = te(m, u, d), S = m.map((b) => {
      const g = I(s, b);
      return b.toExportImageJSON(g);
    });
    if (f) y.dynamicLayers = JSON.stringify(S);
    else {
      if (r) {
        let g = m.map(({ id: w }) => w);
        n && (g = g.filter((w) => n.includes(w))), y.layerIds = g;
      } else n?.length && (y.layerIds = n);
      const b = Ee(s, m);
      if (b != null && b.length) {
        const g = {};
        for (const w of b) w.definitionExpression && (g[w.id] = w.definitionExpression);
        Object.keys(g).length && (y.layerDefs = JSON.stringify(g));
      }
    }
  }
  return y;
}
function Ee(t, e) {
  const s = !!t?.length, o = e.filter((r) => r.definitionExpression != null || s && r.floorInfo != null);
  return o.length ? o.map((r) => {
    const n = I(t, r), i = H(n, r.definitionExpression);
    return { id: r.id, definitionExpression: i ?? void 0 };
  }) : null;
}
var E;
let h = E = class extends z {
  static from(t) {
    return ne(E, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = !0, this.returnGeometry = !1, this.returnM = !1, this.returnUnformattedValues = !0, this.returnZ = !1, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
};
a([p({ type: Number, json: { write: !0 } })], h.prototype, "dpi", void 0), a([p()], h.prototype, "floors", void 0), a([p({ type: String, json: { write: !0 } })], h.prototype, "gdbVersion", void 0), a([p({ types: re, json: { read: se, write: !0 } })], h.prototype, "geometry", void 0), a([p({ type: Number, json: { write: !0 } })], h.prototype, "geometryPrecision", void 0), a([p({ type: Number, json: { write: !0 } })], h.prototype, "height", void 0), a([p({ type: Date })], h.prototype, "historicMoment", void 0), a([Q("historicMoment")], h.prototype, "writeHistoricMoment", null), a([p({ type: [Number], json: { write: !0 } })], h.prototype, "layerIds", void 0), a([p({ type: ["top", "visible", "all", "popup"], json: { write: !0 } })], h.prototype, "layerOption", void 0), a([p({ type: J, json: { write: !0 } })], h.prototype, "mapExtent", void 0), a([p({ type: Number, json: { write: !0 } })], h.prototype, "maxAllowableOffset", void 0), a([p({ type: Boolean, json: { write: !0 } })], h.prototype, "returnFieldName", void 0), a([p({ type: Boolean, json: { write: !0 } })], h.prototype, "returnGeometry", void 0), a([p({ type: Boolean, json: { write: !0 } })], h.prototype, "returnM", void 0), a([p({ type: Boolean, json: { write: !0 } })], h.prototype, "returnUnformattedValues", void 0), a([p({ type: Boolean, json: { write: !0 } })], h.prototype, "returnZ", void 0), a([p({ type: ie, json: { write: !0 } })], h.prototype, "spatialReference", void 0), a([p()], h.prototype, "sublayers", void 0), a([p({ type: oe, json: { write: !0 } })], h.prototype, "timeExtent", void 0), a([p({ type: Number, json: { write: !0 } })], h.prototype, "tolerance", void 0), a([p({ type: Number, json: { write: !0 } })], h.prototype, "width", void 0), h = E = a([P("esri.rest.support.IdentifyParameters")], h);
const D = h;
let $ = class extends z {
  constructor(t) {
    super(t), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(t, e) {
    return q.fromJSON({ attributes: { ...e.attributes }, geometry: { ...e.geometry } });
  }
  writeFeature(t, e) {
    if (!t) return;
    const { attributes: s, geometry: o } = t;
    s && (e.attributes = { ...s }), o != null && (e.geometry = o.toJSON(), e.geometryType = le.toJSON(o.type));
  }
};
a([p({ type: String, json: { write: !0 } })], $.prototype, "displayFieldName", void 0), a([p({ type: q })], $.prototype, "feature", void 0), a([ae("feature", ["attributes", "geometry"])], $.prototype, "readFeature", null), a([Q("feature")], $.prototype, "writeFeature", null), a([p({ type: Number, json: { write: !0 } })], $.prototype, "layerId", void 0), a([p({ type: String, json: { write: !0 } })], $.prototype, "layerName", void 0), $ = a([P("esri.rest.support.IdentifyResult")], $);
const Ie = $;
async function Pe(t, e, s) {
  const o = (e = Ve(e)).geometry ? [e.geometry] : [], r = pe(t);
  return r.path += "/identify", ue(o).then((n) => {
    const i = Re(e, { geometry: n?.[0] }), d = ye({ ...r.query, f: "json", ...i }), u = ce(d, s);
    return he(r.path, u).then(Ge).then((l) => Te(l, e.sublayers));
  });
}
function Ge(t) {
  const e = t.data;
  return e.results = e.results || [], e.exceededTransferLimit = !!e.exceededTransferLimit, e.results = e.results.map((s) => Ie.fromJSON(s)), e;
}
function Ve(t) {
  return t = D.from(t);
}
function Te(t, e) {
  if (!e?.length) return t;
  const s = /* @__PURE__ */ new Map();
  function o(r) {
    s.set(r.id, r), r.sublayers && r.sublayers.forEach(o);
  }
  e.forEach(o);
  for (const r of t.results) r.feature.sourceLayer = s.get(r.layerId);
  return t;
}
const U = B();
let N = null;
function ze(t, e) {
  return e.type === "tile" || e.type === "map-image";
}
let F = class extends de {
  constructor(t) {
    super(t), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = fe(async (e) => {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(() => {
      }));
    });
  }
  initialize() {
    const t = (e) => {
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([me(() => this.highlightGraphics, "change", (e) => t(e.added), { onListenerAdd: (e) => t(e) })]);
  }
  async fetchPopupFeaturesAtLocation(t, e) {
    const { layerView: { layer: s, view: { scale: o } } } = this;
    if (!t) throw new T("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: s });
    const r = _e(s.sublayers, o, e);
    if (!r.length) return [];
    const n = await Me(s, r);
    if (!((s.capabilities?.operations?.supportsIdentify ?? !0) && s.version >= 10.5) && !n) throw new T("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: s });
    return n ? this._fetchPopupFeaturesUsingQueries(t, r, e) : this._fetchPopupFeaturesUsingIdentify(t, r, e);
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  highlight(t) {
    const e = this.highlightGraphics;
    if (!t || !e) return U;
    let s = Fe(t) ? [t] : ge.isCollection(t) ? t.toArray() : Array.isArray(t) ? t : [];
    if (s = s?.filter(_), (s?.length ?? 0) === 0) return U;
    for (const o of s) {
      const { sourceLayer: r } = o;
      r != null && "geometryType" in r && r.geometryType === "point" && (o.visible = !1);
    }
    return e.addMany(s), B(() => e.removeMany(s ?? []));
  }
  async _updateHighlightedFeaturesSymbols(t) {
    const { layerView: { view: e }, highlightGraphics: s, highlightGraphicUpdated: o } = this;
    if (s && o) for (const r of t) {
      const n = r.sourceLayer && "renderer" in r.sourceLayer && r.sourceLayer.renderer;
      r.sourceLayer && "geometryType" in r.sourceLayer && r.sourceLayer.geometryType === "point" && n && "getSymbolAsync" in n && n.getSymbolAsync(r).then(async (i) => {
        i ||= new A();
        let d = null;
        const u = "visualVariables" in n ? n.visualVariables?.find((l) => l.type === "size") : void 0;
        u && (N || (N = (await import("./main-DZxT3i7S.js").then((l) => l.vg)).getSize), d = N(u, r, { view: e.type, scale: e.scale, shape: i.type === "simple-marker" ? i.style : null })), d ||= "width" in i && "height" in i && i.width != null && i.height != null ? Math.max(i.width, i.height) : "size" in i ? i.size : 16, s.includes(r) && (r.symbol = new A({ style: "square", size: d, xoffset: "xoffset" in i ? i.xoffset : 0, yoffset: "yoffset" in i ? i.yoffset : 0 }), o(r, "symbol"), r.visible = !0);
      });
    }
  }
  async _updateHighlightedFeaturesGeometries(t) {
    const { layerView: { layer: e, view: s }, highlightGraphics: o, highlightGraphicUpdated: r } = this;
    if (this._highlightGeometriesResolution = t, !r || !o?.length || !e.capabilities.operations.supportsQuery) return;
    const n = this._getTargetResolution(t), i = /* @__PURE__ */ new Map();
    for (const l of o) if (!this._featuresResolutions.has(l) || this._featuresResolutions.get(l) > n) {
      const y = l.sourceLayer;
      be(i, y, () => /* @__PURE__ */ new Map()).set(l.getObjectId(), l);
    }
    const d = Array.from(i, ([l, y]) => {
      const c = l.createQuery();
      return c.objectIds = [...y.keys()], c.outFields = [l.objectIdField], c.returnGeometry = !0, c.maxAllowableOffset = n, c.outSpatialReference = s.spatialReference, l.queryFeatures(c);
    }), u = await Promise.all(d);
    if (!this.destroyed) for (const { features: l } of u) for (const y of l) {
      const c = y.sourceLayer, m = i.get(c).get(y.getObjectId());
      m && o.includes(m) && (m.geometry = y.geometry, r(m, "geometry"), this._featuresResolutions.set(m, n));
    }
  }
  _getTargetResolution(t) {
    const e = t * we(this.layerView.view.spatialReference), s = e / 16;
    return s <= 10 ? 0 : t / e * s;
  }
  async _fetchPopupFeaturesUsingIdentify(t, e, s) {
    const o = await this._createIdentifyParameters(t, e, s);
    if (o == null) return [];
    const { results: r } = await Pe(this.layerView.layer.parsedUrl, o, s);
    return r.map((n) => n.feature);
  }
  async _createIdentifyParameters(t, e, s) {
    const { floors: o, layer: r, timeExtent: n, view: { spatialReference: i, scale: d } } = this.layerView;
    if (!e.length) return null;
    await Promise.all(e.map(({ sublayer: x }) => x.load(s).catch(() => {
    })));
    const u = Math.min(ve("mapservice-popup-identify-max-tolerance"), r.allSublayers.reduce((x, f) => f.renderer ? L({ renderer: f.renderer, pointerType: s?.pointerType }) : x, 2)), l = this.createFetchPopupFeaturesQueryGeometry(t, u), y = xe(d, i), c = Math.round(l.width / y), m = new J({ xmin: l.center.x - y * c, ymin: l.center.y - y * c, xmax: l.center.x + y * c, ymax: l.center.y + y * c, spatialReference: l.spatialReference });
    return new D({ floors: o, gdbVersion: "gdbVersion" in r ? r.gdbVersion : void 0, geometry: t, height: c, layerOption: "popup", mapExtent: m, returnGeometry: !0, spatialReference: i, sublayers: r.sublayers, timeExtent: n, tolerance: u, width: c });
  }
  async _fetchPopupFeaturesUsingQueries(t, e, s) {
    const { layerView: { floors: o, timeExtent: r } } = this, n = e.map(async ({ sublayer: i, popupTemplate: d }) => {
      if (await i.load(s).catch(() => {
      }), i.capabilities && !i.capabilities.operations.supportsQuery) return [];
      const u = i.createQuery(), l = L({ renderer: i.renderer, pointerType: s?.pointerType }), y = this.createFetchPopupFeaturesQueryGeometry(t, l), c = /* @__PURE__ */ new Set(), [m] = await Promise.all([Oe(i, d), i.renderer?.collectRequiredFields(c, i.fieldsIndex)]);
      M(s), $e(c, i.fieldsIndex, m);
      const x = Array.from(c).sort();
      u.geometry = y, u.outFields = x, u.timeExtent = r;
      const f = I(o, i);
      u.where = H(u.where, f);
      const S = this._getTargetResolution(y.width / l), b = await Ae(d);
      M(s);
      const g = i.geometryType === "point" || b && b.arcadeUtils.hasGeometryOperations(d);
      g || (u.maxAllowableOffset = S);
      let { features: w } = await i.queryFeatures(u, s);
      const O = g ? 0 : S;
      w = await Le(i, w, s);
      for (const j of w) this._featuresResolutions.set(j, O);
      return w;
    });
    return (await Promise.allSettled(n)).reduce((i, d) => d.status === "fulfilled" ? [...i, ...d.value] : i, []).filter(_);
  }
};
function _e(t, e, s) {
  const o = [];
  if (!t) return o;
  const r = (n) => {
    const i = n.minScale === 0 || e <= n.minScale, d = n.maxScale === 0 || e >= n.maxScale;
    if (n.visible && i && d) {
      if (n.sublayers) n.sublayers.forEach(r);
      else if (n.popupEnabled) {
        const u = je(n, { ...s, defaultPopupTemplateEnabled: !1 });
        u != null && o.unshift({ sublayer: n, popupTemplate: u });
      }
    }
  };
  return t.map(r), o;
}
function Ae(t) {
  return t.expressionInfos?.length || Array.isArray(t.content) && t.content.some((e) => e.type === "expression") ? Se() : Promise.resolve();
}
async function Me(t, e) {
  if (t.capabilities?.operations?.supportsQuery) return !0;
  try {
    return await Promise.any(e.map(({ sublayer: s }) => s.load().then(() => s.capabilities.operations.supportsQuery)));
  } catch {
    return !1;
  }
}
async function Le(t, e, s) {
  const o = t.renderer;
  return o && "defaultSymbol" in o && !o.defaultSymbol && (e = o.valueExpression ? await Promise.all(e.map((r) => o.getSymbolAsync(r, s).then((n) => n ? r : null))).then((r) => r.filter((n) => n != null)) : e.filter((r) => o.getSymbol(r) != null)), e;
}
a([p({ constructOnly: !0 })], F.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), a([p({ constructOnly: !0 })], F.prototype, "layerView", void 0), a([p({ constructOnly: !0 })], F.prototype, "highlightGraphics", void 0), a([p({ constructOnly: !0 })], F.prototype, "highlightGraphicUpdated", void 0), a([p({ constructOnly: !0 })], F.prototype, "updatingHandles", void 0), F = a([P("esri.views.layers.support.MapServiceLayerViewHelper")], F);
export {
  F as R,
  ze as _
};
//# sourceMappingURL=MapServiceLayerViewHelper-Dl7suQZe.js.map
