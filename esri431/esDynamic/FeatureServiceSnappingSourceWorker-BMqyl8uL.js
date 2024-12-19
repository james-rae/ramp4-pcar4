import { el as K, bW as ie, J as y, mF as re, ep as ne, T as P, b6 as z, b7 as X, dE as w, mG as M, gX as R, lw as A, bQ as h, bR as f, bS as H, ew as Y, mH as D, mI as ae, mJ as x, fu as ee, c as oe, f6 as te, h3 as le, B as N, G as j, fO as ue, mK as ce, fS as b, aA as he, mL as U, mM as de, mN as fe, mO as _e, kP as pe, mP as ge, mQ as ye, ff as me, i4 as Fe, mR as q, du as Ce, mS as Ee, gN as I, mT as Te, mU as B, mV as se, hf as Se, ds as ve, X as be, b1 as v, hP as we, cz as V, hJ as Ie, fo as Oe } from "./main-DZxT3i7S.js";
import { m as xe } from "./FeatureStore-zvkXSx1l.js";
import { V as $e } from "./QueryEngine-DVmSGTfj.js";
import { o as Re } from "./BoundsStore-BNsv8i0M.js";
function k(t = !1, e) {
  if (t) {
    const { elevationInfo: s, alignPointsInFeatures: i } = e;
    return new Pe(s, i);
  }
  return new Ae();
}
let Ae = class {
  async alignCandidates(e, s, i) {
    return e;
  }
  notifyElevationSourceChange() {
  }
};
const He = 1024;
let Pe = class {
  constructor(e, s) {
    this._elevationInfo = e, this._alignPointsInFeatures = s, this._alignmentsCache = new K(He), this._cacheVersion = 0;
  }
  async alignCandidates(e, s, i) {
    const r = this._elevationInfo;
    return r == null || r.mode !== "absolute-height" || r.featureExpressionInfo ? this._alignComputedElevationCandidates(e, s, i) : (Me(e, s, r), e);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  async _alignComputedElevationCandidates(e, s, i) {
    const r = /* @__PURE__ */ new Map();
    for (const p of e) ie(r, p.objectId, De).push(p);
    const [n, a, o] = this._prepareQuery(r, s), l = await this._alignPointsInFeatures(n, i);
    if (y(i), o !== this._cacheVersion) return this._alignComputedElevationCandidates(e, s, i);
    this._applyCacheAndResponse(n, l, a);
    const { drapedObjectIds: c, failedObjectIds: d } = l, g = [];
    for (const p of e) {
      const { objectId: m } = p;
      c.has(m) && p.type === "edge" && (p.draped = !0), d.has(m) || g.push(p);
    }
    return g;
  }
  _prepareQuery(e, s) {
    const i = [], r = [];
    for (const [n, a] of e) {
      const o = [];
      for (const l of a) this._addToQueriesOrCachedResult(n, l.target, o, r), l.type === "edge" && (this._addToQueriesOrCachedResult(n, l.start, o, r), this._addToQueriesOrCachedResult(n, l.end, o, r));
      o.length !== 0 && i.push({ objectId: n, points: o });
    }
    return [{ spatialReference: s.toJSON(), pointsInFeatures: i }, r, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e, s, i, r) {
    const n = J(e, s), a = this._alignmentsCache.get(n);
    a == null ? i.push(s) : r.push(new ze(s, a));
  }
  _applyCacheAndResponse(e, { elevations: s, drapedObjectIds: i, failedObjectIds: r }, n) {
    for (const l of n) l.apply();
    let a = 0;
    const o = this._alignmentsCache;
    for (const { objectId: l, points: c } of e.pointsInFeatures) {
      if (r.has(l)) {
        a += c.length;
        continue;
      }
      const d = !i.has(l);
      for (const g of c) {
        const p = J(l, g), m = s[a++];
        g.z = m, d && o.put(p, m, 1);
      }
    }
  }
};
class ze {
  constructor(e, s) {
    this.point = e, this.z = s;
  }
  apply() {
    this.point.z = this.z;
  }
}
function J(t, { x: e, y: s, z: i, spatialReference: r }) {
  return `${t}-${e}-${s}-${i ?? 0}}-wkid:${r?.wkid}`;
}
function Me(t, e, s) {
  const { offset: i, unit: r } = s;
  if (i == null) return;
  const n = re(e), a = i * (ne(r ?? "meters") / n);
  for (const o of t) switch (o.type) {
    case "edge":
      o.start.z += a, o.end.z += a;
      continue;
    case "vertex":
      o.target.z += a;
      continue;
  }
}
function De() {
  return [];
}
let Ne = class {
  filter(e, s) {
    return s;
  }
  notifyElevationSourceChange() {
  }
}, je = class {
  filter(e, s) {
    const { point: i, distance: r } = e, { z: n } = i;
    if (n == null || s.length === 0) return s;
    const a = ke(r), o = this._updateCandidatesTo3D(s, i, a).filter(Ue);
    return o.sort(Je), o;
  }
  _updateCandidatesTo3D(e, s, i) {
    for (const r of e) switch (r.type) {
      case "edge":
        qe(r, s, i);
        continue;
      case "vertex":
        Ve(r, s, i);
        continue;
    }
    return e;
  }
};
function Ue(t) {
  return t.distance <= 1;
}
function L(t = !1) {
  return t ? new je() : new Ne();
}
function qe(t, e, { x: s, y: i, z: r }) {
  const { start: n, end: a, target: o } = t;
  t.draped || Be(o, e, n, a);
  const l = (e.x - o.x) / s, c = (e.y - o.y) / i, d = (e.z - o.z) / r;
  t.distance = Math.sqrt(l * l + c * c + d * d);
}
function Be(t, e, s, i) {
  const r = i.x - s.x, n = i.y - s.y, a = i.z - s.z, o = r * r + n * n + a * a, l = (e.x - s.x) * r + (e.y - s.y) * n + a * (e.z - s.z), c = Math.min(1, Math.max(0, l / o)), d = s.x + r * c, g = s.y + n * c, p = s.z + a * c;
  t.x = d, t.y = g, t.z = p;
}
function Ve(t, e, { x: s, y: i, z: r }) {
  const { target: n } = t, a = (e.x - n.x) / s, o = (e.y - n.y) / i, l = (e.z - n.z) / r, c = Math.sqrt(a * a + o * o + l * l);
  t.distance = c;
}
function ke(t) {
  return typeof t == "number" ? { x: t, y: t, z: t } : t;
}
function Je(t, e) {
  return t.distance - e.distance;
}
function Q(t = !1, e) {
  return t ? new Ge(e) : new Le();
}
class Le {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const Qe = 1024;
let Ge = class {
  constructor(e) {
    this._getSymbologyCandidates = e, this._candidatesCache = new K(Qe), this._cacheVersion = 0;
  }
  async fetch(e, s) {
    if (e.length === 0) return [];
    const i = [], r = [], n = this._candidatesCache;
    for (const g of e) {
      const p = G(g), m = n.get(p);
      if (m) for (const T of m) r.push(P(T));
      else i.push(g), n.put(p, [], 1);
    }
    if (i.length === 0) return r;
    const a = this._cacheVersion, { candidates: o, sourceCandidateIndices: l } = await this._getSymbologyCandidates(i, s);
    if (y(s), a !== this._cacheVersion) return this.fetch(e, s);
    const c = [], { length: d } = o;
    for (let g = 0; g < d; ++g) {
      const p = o[g], m = G(i[l[g]]), T = n.get(m);
      T.push(p), n.put(m, T, T.length), c.push(P(p));
    }
    return r.concat(c);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
};
function G(t) {
  switch (t.type) {
    case "vertex": {
      const { objectId: e, target: s } = t, i = `${e}-vertex-${s.x}-${s.y}-${s.z ?? 0}`;
      return z(i).toString();
    }
    case "edge": {
      const { objectId: e, start: s, end: i } = t, r = `${e}-edge-${s.x}-${s.y}-${s.z ?? 0}-to-${i.x}-${i.y}-${i.z ?? 0}`;
      return z(r).toString();
    }
    default:
      return "";
  }
}
class We {
  constructor(e, s) {
    this.data = e, this.resolution = s, this.state = { type: u.CREATED }, this.alive = !0;
  }
  process(e) {
    switch (this.state.type) {
      case u.CREATED:
        return this.state = this._gotoFetchCount(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, e);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(e, s) {
    return { type: u.FETCH_COUNT, previous: e, task: w(async (i) => {
      const r = await M(s.fetchCount(this, i));
      this.state.type === u.FETCH_COUNT && (this.state = Ze(this.state, r.ok ? r.value : 1 / 0));
    }) };
  }
  _gotoFetchFeatures(e, s) {
    return { type: u.FETCH_FEATURES, previous: e, task: w(async (i) => {
      const r = await M(s.fetchFeatures(this, e.featureCount, i));
      this.state.type === u.FETCH_FEATURES && (this.state = Ke(this.state, r.ok ? r.value : []));
    }) };
  }
  _goToDone(e, s) {
    return s.finish(this, e.features), { type: u.DONE, previous: e };
  }
  reset() {
    const e = this.state;
    switch (this.state = { type: u.CREATED }, e.type) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        e.task.abort();
    }
  }
  intersects(e) {
    return e == null || !this.data.extent || (R(e, W), A(this.data.extent, W));
  }
}
function Ze(t, e) {
  return { type: u.FETCHED_COUNT, featureCount: e, previous: t };
}
function Ke(t, e) {
  return { type: u.FETCHED_FEATURES, previous: t, features: e };
}
var u;
(function(t) {
  t[t.CREATED = 0] = "CREATED", t[t.FETCH_COUNT = 1] = "FETCH_COUNT", t[t.FETCHED_COUNT = 2] = "FETCHED_COUNT", t[t.FETCH_FEATURES = 3] = "FETCH_FEATURES", t[t.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", t[t.DONE = 5] = "DONE";
})(u || (u = {}));
const W = X();
let _ = class extends Y {
  get _minimumVerticesPerFeature() {
    switch (this.store?.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  get _mandatoryOutFields() {
    const e = /* @__PURE__ */ new Set();
    return this.objectIdField && e.add(this.objectIdField), this.globalIdField && e.add(this.globalIdField), e;
  }
  set outFields(e) {
    const s = this._get("outFields"), i = D(e, this._mandatoryOutFields);
    ae(i, s) || (this._set("outFields", i), x(i, s) || this.refresh());
  }
  get outFields() {
    return this._get("outFields") ?? this._mandatoryOutFields;
  }
  set filter(e) {
    const s = this._get("filter"), i = this._filterProperties(e);
    JSON.stringify(s) !== JSON.stringify(i) && this._set("filter", i);
  }
  set customParameters(e) {
    const s = this._get("customParameters");
    JSON.stringify(s) !== JSON.stringify(e) && this._set("customParameters", e);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(e) {
    const s = this._get("tileInfo");
    s !== e && (e != null && s != null && JSON.stringify(e) === JSON.stringify(s) || (this._set("tileInfo", e), this.store.tileInfo = e));
  }
  set tileSize(e) {
    this._get("tileSize") !== e && this._set("tileSize", e);
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(e) {
    super(e), this.suspended = !0, this._historicMoment = null, this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = /* @__PURE__ */ new Map(), this._updatingHandles = new ee();
  }
  initialize() {
    this._initializeFetchExtent(), this._updatingHandles.add(() => this._configuration, () => this.refresh()), this._updatingHandles.add(() => this.tilesOfInterest, (e, s) => {
      oe(e, s, ({ id: i }, { id: r }) => i === r) || this._process();
    }, te), this.addHandles(le(() => !this.suspended, () => this._process()));
  }
  destroy() {
    this._pendingTiles.forEach((e) => this._deletePendingTile(e)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._updatingHandles.destroy();
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((e) => this._deletePendingTile(e)), this._process();
  }
  async handleEdits(e) {
    if (e.historicMoment && (this._historicMoment = e.historicMoment), !e.addedFeatures.length && !e.updatedFeatures.length && !e.deletedFeatures.length) return;
    for (const r of this._pendingTiles.values()) r.reset();
    const s = { ...e, deletedFeatures: e.deletedFeatures.map(({ objectId: r, globalId: n }) => r && r !== -1 ? r : this._lookupObjectIdByGlobalId(n)) }, i = w(async (r) => {
      try {
        await this.store.processEdits(s, (n, a) => this._queryFeaturesById(n, a), r), this._processPendingTiles();
      } catch (n) {
        N(n), j.getLogger(this).warn("Failed to apply edits", n);
      }
    });
    this.addHandles(i), await this._updatingHandles.addPromise(i.promise);
  }
  setHistoricMoment(e) {
    e?.getTime() !== this._historicMoment?.getTime() && (this._historicMoment = e, this.refresh());
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !ue(this.url)) return;
    const e = w(async (s) => {
      try {
        const i = await ce(this.url, new b({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: this.capabilities.query.supportsCacheHint ?? void 0 }), { query: this._configuration.customParameters, signal: s });
        this.store.extent = he.fromJSON(i.data?.extent);
      } catch (i) {
        N(i), j.getLogger(this).warn("Failed to fetch data extent", i);
      }
    });
    this._updatingHandles.addPromise(e.promise.then(() => this._process())), this.addHandles(e);
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((e) => e.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const e of this._pendingTiles.values()) e.alive = !1;
  }
  _createPendingTiles() {
    if (this.suspended) return;
    const e = this._collectMissingTilesInfo();
    if (this._setAvailability(e == null ? 1 : e.coveredArea / e.fullArea), e != null) for (const { data: s, resolution: i } of e.missingTiles) {
      const r = this._pendingTiles.get(s.id);
      r ? (r.resolution = i, r.alive = !0) : this._createPendingTile(s, i);
    }
  }
  _collectMissingTilesInfo() {
    let e = null;
    for (let s = this.tilesOfInterest.length - 1; s >= 0; s--) {
      const i = this.tilesOfInterest[s], r = this.store.process(i, (n, a) => this._verifyTileComplexity(n, a), this.outFields);
      e == null ? e = r : e.prepend(r);
    }
    return e;
  }
  _deletePendingTiles() {
    for (const e of this._pendingTiles.values()) e.alive || this._deletePendingTile(e);
  }
  _processPendingTiles() {
    const e = { fetchCount: (s, i) => this._fetchCount(s, i), fetchFeatures: (s, i, r) => this._fetchFeatures(s, i, r), finish: (s, i) => this._finishPendingTile(s, i), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(e)) for (const s of this._pendingTiles.values()) this._verifyTileComplexity(this.store.getFeatureCount(s.data), s.resolution) && this._updatingHandles.addPromise(s.process(e));
  }
  _verifyTileComplexity(e, s) {
    return this._verifyVertexComplexity(e) && this._verifyFeatureDensity(e, s);
  }
  _verifyVertexComplexity(e) {
    return e * this._minimumVerticesPerFeature < Ye;
  }
  _verifyFeatureDensity(e, s) {
    if (this.tileInfo == null) return !1;
    const i = this.tileSize * s;
    return e * (et / (i * i)) < tt;
  }
  _ensureFetchAllCounts(e) {
    let s = !0;
    for (const i of this._pendingTiles.values()) i.state.type < u.FETCHED_COUNT && this._updatingHandles.addPromise(i.process(e)), i.state.type <= u.FETCH_COUNT && (s = !1);
    return s;
  }
  _finishPendingTile(e, s) {
    this.store.add(e.data, s), this._deletePendingTile(e), this._updateAvailability();
  }
  _updateAvailability() {
    const e = this._collectMissingTilesInfo();
    this._setAvailability(e == null ? 1 : e.coveredArea / e.fullArea);
  }
  _setAvailability(e) {
    this._set("availability", e);
  }
  _createPendingTile(e, s) {
    const i = new We(e, s);
    return this._pendingTiles.set(e.id, i), i;
  }
  _deletePendingTile(e) {
    e.reset(), this._pendingTiles.delete(e.data.id);
  }
  async _fetchCount(e, s) {
    return this.store.fetchCount(e.data, this.url, this._createCountQuery(e), { query: this.customParameters, timeout: O, signal: s });
  }
  async _fetchFeatures(e, s, i) {
    let r = 0;
    const n = [];
    let a = 0, o = s;
    for (; ; ) {
      const l = this._createFeaturesQuery(e), c = this._setPagingParameters(l, r, o), { features: d, exceededTransferLimit: g } = await this._queryFeatures(l, i);
      c && (r += l.num), a += d.length;
      for (const p of d) n.push(p);
      if (o = s - a, !c || !g || o <= 0) return n;
    }
  }
  _filterProperties(e) {
    return e == null ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: e.where || "1=1", timeExtent: e.timeExtent, gdbVersion: e.gdbVersion };
  }
  _lookupObjectIdByGlobalId(e) {
    const s = this.globalIdField, i = this.objectIdField;
    if (s == null) throw new Error("Expected globalIdField to be defined");
    let r = null;
    const n = e && U(e);
    if (this.store.featureStore.forEach((a) => {
      n === U(a.attributes[s]) && (r = a.objectId ?? a.attributes[i]);
    }), r == null) throw new Error(`Expected to find a feature with globalId ${e}`);
    return r;
  }
  _queryFeaturesById(e, s) {
    const i = this._createFeaturesQuery();
    return i.objectIds = e, this._queryFeatures(i, s);
  }
  _queryFeatures(e, s) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(e, s) : this._queryFeaturesJSON(e, s);
  }
  async _queryFeaturesPBF(e, s) {
    const { sourceSpatialReference: i } = this, { data: r } = await de(this.url, e, new fe({ sourceSpatialReference: i }), { query: this._configuration.customParameters, timeout: O, signal: s });
    return _e(r);
  }
  async _queryFeaturesJSON(e, s) {
    const { sourceSpatialReference: i } = this, { data: r } = await pe(this.url, e, i, { query: this._configuration.customParameters, timeout: O, signal: s });
    return ge(r, this.objectIdField);
  }
  _createCountQuery(e) {
    const s = this._createBaseQuery(e);
    return this.capabilities.query.supportsCacheHint && (s.cacheHint = !0), s;
  }
  _createFeaturesQuery(e = null) {
    const s = this._createBaseQuery(e), i = e?.data != null ? this.store.getAttributesForTile(e?.data?.id) : null, r = D(ye(this.outFields, i ?? /* @__PURE__ */ new Set()), this._mandatoryOutFields);
    return s.outFields = Array.from(r), s.returnGeometry = !0, e != null && (this.capabilities.query.supportsResultType ? s.resultType = "tile" : this.capabilities.query.supportsCacheHint && (s.cacheHint = !0)), s;
  }
  _createBaseQuery(e) {
    const s = new b({ returnZ: this.hasZ, returnM: !1, historicMoment: this._historicMoment, geometry: this.tileInfo != null && e != null ? me(e.data.extent, this.tileInfo.spatialReference) : void 0 }), i = this._configuration.filter;
    return i != null && (s.where = i.where, s.gdbVersion = i.gdbVersion, s.timeExtent = i.timeExtent), s.outSpatialReference = this.spatialReference, s;
  }
  _setPagingParameters(e, s, i) {
    if (!this.capabilities.query.supportsPagination) return !1;
    const { supportsMaxRecordCountFactor: r, supportsCacheHint: n, tileMaxRecordCount: a, maxRecordCount: o, supportsResultType: l } = this.capabilities.query, c = r ? b.MAX_MAX_RECORD_COUNT_FACTOR : 1, d = c * ((l || n) && a ? a : o || Xe);
    return e.start = s, r ? (e.maxRecordCountFactor = Math.min(c, Math.ceil(i / d)), e.num = Math.min(i, e.maxRecordCountFactor * d)) : e.num = Math.min(i, d), !0;
  }
};
h([f({ constructOnly: !0 })], _.prototype, "url", void 0), h([f({ constructOnly: !0 })], _.prototype, "objectIdField", void 0), h([f({ constructOnly: !0 })], _.prototype, "globalIdField", void 0), h([f({ constructOnly: !0 })], _.prototype, "capabilities", void 0), h([f({ constructOnly: !0 })], _.prototype, "sourceSpatialReference", void 0), h([f({ constructOnly: !0 })], _.prototype, "spatialReference", void 0), h([f({ constructOnly: !0 })], _.prototype, "store", void 0), h([f({ readOnly: !0 })], _.prototype, "_minimumVerticesPerFeature", null), h([f()], _.prototype, "_mandatoryOutFields", null), h([f()], _.prototype, "outFields", null), h([f()], _.prototype, "suspended", void 0), h([f()], _.prototype, "_historicMoment", void 0), h([f()], _.prototype, "filter", null), h([f()], _.prototype, "customParameters", null), h([f({ readOnly: !0 })], _.prototype, "_configuration", null), h([f()], _.prototype, "tileInfo", null), h([f()], _.prototype, "tileSize", null), h([f()], _.prototype, "tilesOfInterest", void 0), h([f({ readOnly: !0 })], _.prototype, "updating", null), h([f({ readOnly: !0 })], _.prototype, "availability", void 0), h([f()], _.prototype, "hasZ", null), _ = h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], _);
const Xe = 2e3, O = 6e5, Ye = 1e6, et = 25, tt = 1;
class st {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(e, s) {
    this.delete(e), this._store.set(e, s), this._byteSize += s.byteSize;
  }
  delete(e) {
    const s = this._store.get(e);
    return !!this._store.delete(e) && (s != null && (this._byteSize -= s.byteSize), !0);
  }
  get(e) {
    return this._used(e), this._store.get(e);
  }
  has(e) {
    return this._used(e), this._store.has(e);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(e, s) {
    for (const [i, r] of this._store) {
      if (this._byteSize <= e) break;
      this.delete(i), s(r);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(e) {
    const s = this._store.get(e);
    s && (this._store.delete(e), this._store.set(e, s));
  }
}
let C = class extends Y {
  constructor(t) {
    super(t), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * Fe.MEGABYTES, this._tileBounds = new Re(), this._tiles = new st(), this._refCounts = /* @__PURE__ */ new Map(), this._tileFeatureCounts = /* @__PURE__ */ new Map(), this._tmpBoundingRect = X();
  }
  add(t, e) {
    for (const r of e) this._referenceFeature(r.objectId);
    const s = this.featureStore.upsertMany(e), i = s.map((r) => new Set(Object.keys(r.attributes))).reduce((r, n) => q(r, n), new Set(Object.keys(s[0]?.attributes ?? [])));
    this._addTileStorage(t, new Set(s.map((r) => r.objectId)), rt(s), i), this._tiles.applyByteSizeLimit(this.maximumByteSize, (r) => this._removeTileStorage(r));
  }
  getAttributesForTile(t) {
    return t ? this._tiles.get(t)?.attributeKeys : null;
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(t, e, s) {
    return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)), this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures), e, s);
  }
  _addTileStorage(t, e, s, i) {
    const r = t.id;
    this._tiles.set(r, new ot(t, e, s, i)), this._tileBounds.set(r, t.extent), this._tileFeatureCounts.set(r, e.size);
  }
  _remove({ id: t }) {
    const e = this._tiles.get(t);
    e && this._removeTileStorage(e);
  }
  _removeTileStorage(t) {
    const e = [];
    for (const i of t.objectIds) this._unreferenceFeature(i) === E.REMOVED && e.push(i);
    this.featureStore.removeManyById(e);
    const s = t.data.id;
    this._tiles.delete(s), this._tileBounds.delete(s);
  }
  _processEditsDelete(t) {
    this.featureStore.removeManyById(t);
    for (const e of this._tiles.values()) {
      for (const s of t) e.objectIds.delete(s);
      this._tileFeatureCounts.set(e.data.id, e.objectIds.size);
    }
    for (const e of t) this._refCounts.delete(e);
  }
  async _processEditsRefetch(t, e, s) {
    if (!t.length) return;
    const i = (await e(t, s)).features, { hasZ: r, hasM: n } = this.featureStore;
    for (const a of i) {
      const o = Ce(this._tmpBoundingRect, a.geometry, r, n);
      o != null && this._tileBounds.forEachInBounds(o, (l) => {
        const c = this._tiles.get(l);
        this.featureStore.add(a);
        const d = a.objectId;
        c.objectIds.has(d) || (c.objectIds.add(d), this._referenceFeature(d), this._tileFeatureCounts.set(c.data.id, c.objectIds.size));
      });
    }
  }
  process(t, e = () => !0, s) {
    if (this.tileInfo == null || !t.extent || this.extent != null && !A(R(this.extent, this._tmpBoundingRect), t.extent)) return new $(t);
    const i = this.getAttributesForTile(t.id);
    if (x(s, i)) return new $(t);
    const r = this._createTileTree(t, this.tileInfo);
    return this._simplify(r, e, null, 0, 1), this._collectMissingTiles(t, r, this.tileInfo, s);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: t }) => ({ data: t, featureCount: this._tileFeatureCounts.get(t.id) || 0 }));
  }
  getFeatureCount(t) {
    return this._tileFeatureCounts.get(t.id) ?? 0;
  }
  async fetchCount(t, e, s, i) {
    const r = this._tileFeatureCounts.get(t.id);
    if (r != null) return r;
    const n = await Ee(e, s, i);
    return this._tileFeatureCounts.set(t.id, n.data.count), n.data.count;
  }
  _createTileTree(t, e) {
    const s = new Z(t.level, t.row, t.col);
    return e.updateTileInfo(s, I.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(t.extent, (i) => {
      const r = this._tiles.get(i)?.data;
      r && it(t, r) && this._populateChildren(s, r, e, this._tileFeatureCounts.get(r.id) || 0);
    }), s;
  }
  _populateChildren(t, e, s, i) {
    const r = e.level - t.level - 1;
    if (r < 0) return void (t.isLeaf = !0);
    const n = e.row >> r, a = e.col >> r, o = t.row << 1, l = a - (t.col << 1) + (n - o << 1), c = t.children[l];
    if (c != null) this._populateChildren(c, e, s, i);
    else {
      const d = new Z(t.level + 1, n, a);
      s.updateTileInfo(d, I.ExtrapolateOptions.POWER_OF_TWO), t.children[l] = d, this._populateChildren(d, e, s, i);
    }
  }
  _simplify(t, e, s, i, r) {
    const n = r * r;
    if (t.isLeaf) return e(this.getFeatureCount(t), r) ? 0 : (this._remove(t), s != null && (s.children[i] = null), n);
    const a = r / 2, o = a * a;
    let l = 0;
    for (let c = 0; c < t.children.length; c++) {
      const d = t.children[c];
      l += d != null ? this._simplify(d, e, t, c, a) : o;
    }
    return l === 0 ? this._mergeChildren(t) : 1 - l / n < ut && (this._purge(t), s != null && (s.children[i] = null), l = n), l;
  }
  _mergeChildren(t) {
    const e = /* @__PURE__ */ new Set();
    let s, i = 0;
    this._forEachLeaf(t, (r) => {
      const n = this._tiles.get(r.id);
      if (n) {
        s = s ? q(s, n.attributeKeys) : new Set(n.attributeKeys), i += n.byteSize;
        for (const a of n.objectIds) e.has(a) || (e.add(a), this._referenceFeature(a));
        this._remove(r);
      }
    }), this._addTileStorage(t, e, i, s ?? /* @__PURE__ */ new Set()), t.isLeaf = !0, t.children[0] = t.children[1] = t.children[2] = t.children[3] = null, this._tileFeatureCounts.set(t.id, e.size);
  }
  _forEachLeaf(t, e) {
    for (const s of t.children) s != null && (s.isLeaf ? e(s) : this._forEachLeaf(s, e));
  }
  _purge(t) {
    if (t != null) if (t.isLeaf) this._remove(t);
    else for (let e = 0; e < t.children.length; e++) {
      const s = t.children[e];
      this._purge(s), t.children[e] = null;
    }
  }
  _collectMissingTiles(t, e, s, i) {
    const r = new lt(s, t, this.extent);
    return this._collectMissingTilesRecurse(e, r, 1, i), r.info;
  }
  _collectMissingTilesRecurse(t, e, s, i) {
    const r = this.getAttributesForTile(t.id), n = r && !x(i, r);
    if (n && e.addMissing(t.level, t.row, t.col, s), t.isLeaf) return;
    if (!t.hasChildren) return void (n || e.addMissing(t.level, t.row, t.col, s));
    const a = s / 2;
    for (let o = 0; o < t.children.length; o++) {
      const l = t.children[o];
      l == null ? e.addMissing(t.level + 1, (t.row << 1) + ((2 & o) >> 1), (t.col << 1) + (1 & o), a) : this._collectMissingTilesRecurse(l, e, a, i);
    }
  }
  _referenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) + 1;
    return this._refCounts.set(t, e), e === 1 ? E.ADDED : E.UNCHANGED;
  }
  _unreferenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) - 1;
    return e === 0 ? (this._refCounts.delete(t), E.REMOVED) : (e > 0 && this._refCounts.set(t, e), E.UNCHANGED);
  }
  get test() {
  }
};
function it(t, e) {
  if (!t || !e) return !1;
  if (t.level === e.level) return t.row === e.row && t.col === e.col;
  const s = t.level < e.level, i = s ? t : e, r = s ? e : t, n = 1 << r.level - i.level;
  return Math.floor(r.row / n) === i.row && Math.floor(r.col / n) === i.col;
}
function rt(t) {
  return t.reduce((e, s) => e + nt(s), 0);
}
function nt(t) {
  return 32 + at(t.geometry) + Te(t.attributes);
}
function at(t) {
  if (t == null) return 0;
  const e = B(t.lengths, 4);
  return 32 + B(t.coords, 8) + e;
}
h([f({ constructOnly: !0 })], C.prototype, "featureStore", void 0), h([f()], C.prototype, "tileInfo", void 0), h([f()], C.prototype, "extent", void 0), h([f()], C.prototype, "maximumByteSize", void 0), C = h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], C);
let ot = class {
  constructor(e, s, i, r) {
    this.data = e, this.objectIds = s, this.byteSize = i, this.attributeKeys = r;
  }
};
class Z {
  constructor(e, s, i) {
    this.level = e, this.row = s, this.col = i, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (this.children[0] != null || this.children[1] != null || this.children[2] != null || this.children[3] != null);
  }
}
let $ = class {
  constructor(e, s = []) {
    this.missingTiles = s, this.fullArea = 0, this.coveredArea = 0, this.fullArea = se(e.extent), this.coveredArea = this.fullArea;
  }
  prepend(e) {
    this.missingTiles = e.missingTiles.concat(this.missingTiles), this.coveredArea += e.coveredArea, this.fullArea += e.fullArea;
  }
}, lt = class {
  constructor(e, s, i) {
    this._tileInfo = e, this._extent = null, this.info = new $(s), i != null && (this._extent = R(i));
  }
  addMissing(e, s, i, r) {
    const n = new Se(null, e, s, i);
    this._tileInfo.updateTileInfo(n, I.ExtrapolateOptions.POWER_OF_TWO), n.extent == null || this._extent != null && !A(this._extent, n.extent) || (this.info.missingTiles.push({ data: n, resolution: r }), this.info.coveredArea -= se(n.extent));
  }
};
const ut = 0.18751;
var E;
(function(t) {
  t[t.ADDED = 0] = "ADDED", t[t.REMOVED = 1] = "REMOVED", t[t.UNCHANGED = 2] = "UNCHANGED";
})(E || (E = {}));
let S = class extends ve.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = !0, this.remoteClient = null, this._whenSetup = be(), this._elevationAligner = k(), this._elevationFilter = L(), this._symbologyCandidatesFetcher = Q(), this._updatingHandles = new ee(), this._alignPointsInFeatures = async (t, e) => {
      const s = { query: t }, i = await this.remoteClient.invoke("alignElevation", s, { signal: e });
      return y(e), i;
    }, this._getSymbologyCandidates = async (t, e) => {
      const s = { candidates: t, spatialReference: this._spatialReference.toJSON() }, i = await this.remoteClient.invoke("getSymbologyCandidates", s, { signal: e });
      return y(e), i;
    };
  }
  get updating() {
    return this._isInitializing || this._updatingHandles.updating || this._featureFetcher.updating;
  }
  destroy() {
    this._featureFetcher?.destroy(), this._queryEngine?.destroy(), this._featureStore?.clear();
  }
  async setup(t) {
    if (this.destroyed) return { result: {} };
    const { geometryType: e, objectIdField: s, timeInfo: i, fieldsIndex: r } = t.serviceInfo, { hasZ: n } = t, a = v.fromJSON(t.spatialReference);
    this._spatialReference = a, this._featureStore = new xe({ ...t.serviceInfo, hasZ: n, hasM: !1 }), this._queryEngine = new $e({ spatialReference: t.spatialReference, featureStore: this._featureStore, geometryType: e, fieldsIndex: r, hasZ: n, hasM: !1, objectIdField: s, timeInfo: i }), this._featureFetcher = new _({ store: new C({ featureStore: this._featureStore }), url: t.serviceInfo.url, objectIdField: t.serviceInfo.objectIdField, globalIdField: t.serviceInfo.globalIdField, capabilities: t.serviceInfo.capabilities, spatialReference: a, sourceSpatialReference: v.fromJSON(t.serviceInfo.spatialReference), customParameters: t.configuration.customParameters });
    const o = t.configuration.viewType === "3d";
    return this._elevationAligner = k(o, { elevationInfo: t.elevationInfo != null ? we.fromJSON(t.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures }), this._elevationFilter = L(o), this.addHandles([V(() => this._featureFetcher.availability, (l) => this.emit("notify-availability", { availability: l }), te), V(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = !1, this.configure(t.configuration);
  }
  async configure(t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(t), F;
  }
  async setSuspended(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.suspended = t, F;
  }
  async updateOutFields(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.outFields = new Set(t ?? []), F;
  }
  async fetchCandidates(t, e) {
    await this._whenSetup.promise, y(e);
    const s = ct(t), i = e?.signal, r = await this._queryEngine.executeQueryForSnapping(s, i);
    y(i);
    const n = await this._elevationAligner.alignCandidates(r.candidates, v.fromJSON(t.point.spatialReference) ?? v.WGS84, i);
    y(i);
    const a = await this._symbologyCandidatesFetcher.fetch(n, i);
    y(i);
    const o = a.length === 0 ? n : n.concat(a);
    return { result: { candidates: this._elevationFilter.filter(s, o) } };
  }
  async updateTiles(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.tileSize = t.tileSize, this._featureFetcher.tilesOfInterest = t.tiles, this._featureFetcher.tileInfo = t.tileInfo != null ? I.fromJSON(t.tileInfo) : null, F;
  }
  async refresh(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.refresh(), F;
  }
  async whenNotUpdating(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), await Ie(() => !this.updating, e), y(e), F;
  }
  async getDebugInfo(t, e) {
    return y(e), { result: this._featureFetcher.debugInfo };
  }
  async handleEdits(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(t)), y(e), F;
  }
  async setHistoricMoment(t, e) {
    return this._featureFetcher.setHistoricMoment(t.moment), F;
  }
  async notifyElevationSourceChange(t, e) {
    return this._elevationAligner.notifyElevationSourceChange(), F;
  }
  async notifySymbologyChange(t, e) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), F;
  }
  async setSymbologySnappingSupported(t) {
    return this._symbologyCandidatesFetcher = Q(t, this._getSymbologyCandidates), F;
  }
  _updateFeatureFetcherConfiguration(t) {
    this._featureFetcher.filter = t.filter != null ? b.fromJSON(t.filter) : null, this._featureFetcher.customParameters = t.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
h([f({ readOnly: !0 })], S.prototype, "updating", null), h([f()], S.prototype, "_isInitializing", void 0), S = h([H("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], S);
const vt = S;
function ct(t) {
  if (!t.filter) return { ...t, query: { where: "1=1" } };
  const { distance: e, units: s, spatialRel: i, where: r, timeExtent: n, objectIds: a } = t.filter, o = { geometry: t.filter.geometry ? Oe(t.filter.geometry) : void 0, distance: e, units: s, spatialRel: i, timeExtent: n, objectIds: a, where: r ?? "1=1" };
  return { ...t, query: o };
}
const F = { result: {} };
export {
  vt as default
};
//# sourceMappingURL=FeatureServiceSnappingSourceWorker-BMqyl8uL.js.map
