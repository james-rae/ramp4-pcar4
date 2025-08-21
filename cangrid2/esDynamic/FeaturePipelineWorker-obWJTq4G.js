import { pS as Ce, N as Te, mX as ct, da as Me, bB as qe, dc as ss, dm as rs, lo as lt, df as _t, pT as Q, pU as is, bx as O, dn as pt, ds as U, hO as ns, pV as as, pW as os, dt as F, j_ as G, bq as hs, pX as us, k3 as ds, b5 as cs, b8 as ls, kS as gt, em as Ue, lG as We, pY as _s, dl as ps, oI as Z, a9 as m, o5 as ft, ft as $e, bl as yt, dK as V, fn as mt, f4 as gs, fj as fs, fi as ys, O as W, P as K, Q as bt, e2 as It, S as fe, pZ as ms, p_ as bs, s as j, iB as Is, mA as Ss, D as ws, p$ as vs, m7 as St, jt as Ge, q0 as wt, q1 as xs, f2 as ie, jS as se, jT as ks, kY as vt, aN as Fs, f3 as xt, q2 as Ne, q3 as Be, $ as Cs, ls as Ts, fv as Ms, F as qs, d8 as $s, hL as Es, q4 as Os, ad as Rs } from "./main-DHXLMse1.js";
import { a as k } from "./definitions-Doe0g1C2.js";
import { n as Ve, M as Ee, p as Oe, c as kt, i as Re, d as As, a as Ps, b as js, e as Ds, f as Ls } from "./AttributeStore-D01xzPxl.js";
import { o as zs } from "./tileUtils-DrLrf-3T.js";
import { r as Us, W as Ws } from "./MeshWriterRegistry-ChAUVonf.js";
import { x as Gs, j as re } from "./timeSupport-D-Wjlxvj.js";
import { o as Ns, $ as Ft } from "./QueryEngine-DBC27w6p.js";
import { $ as Ye } from "./ogcFeatureUtils-BWP6mdUi.js";
import { t as Xe } from "./CircularArray-DaQg3PQl.js";
import { createConnection as Bs } from "./createConnection-Dtij8Zlx.js";
import { d as Vs } from "./UpdateTracking2D-DZd6CIsL.js";
let Ys = class {
  constructor(e) {
    this._client = e, this.layerView = this._client.createInvokeProxy(""), this.container = this._client.createInvokeProxy("container"), this._eventLog = this._client.createInvokeProxy("eventLog");
  }
  onEvent(e) {
    Ce(this._eventLog.onEvent(e));
  }
};
const ne = 1, Ae = 2, ae = 4, Pe = 8, je = 16, oe = 32, De = 64, he = 128;
function ce(u) {
  switch (u) {
    case ne:
    case Pe:
    case oe:
      return -1;
    case Ae:
    case De:
      return 0;
    case ae:
    case je:
    case he:
      return 1;
  }
}
function le(u) {
  switch (u) {
    case ne:
    case Ae:
    case ae:
      return -1;
    case Pe:
    case je:
      return 0;
    case oe:
    case De:
    case he:
      return 1;
  }
}
const Qe = ne | Pe | oe, Ze = ae | je | he, He = ne | Ae | ae, Je = oe | De | he;
let Xs = class {
  constructor(e, t, s, r = 0) {
    this.tileKey = e, this._bufferingEnabled = t, this._sizeHint = r, this._meshes = { self: new Ve(this.id, this._sizeHint), neighbors: new Array() }, this._currentRecordOverlaps = 0, this._currentEntityOverlaps = 0, this._copyBufferedDataIntoSelf = s && this._bufferingEnabled && e.level === 0;
  }
  get id() {
    return this.tileKey.id;
  }
  vertexCount() {
    return this._meshes.self.vertexCount();
  }
  indexCount() {
    return this._meshes.self.indexCount();
  }
  indexEnsureSize(e) {
    this._meshes.self.indexEnsureSize(e);
  }
  entityStart(e, t = e) {
    this._currentEntityOverlaps = 0, this._meshes.self.entityStart(e, t);
  }
  entityRecordCount() {
    return this._meshes.self.entityRecordCount();
  }
  entityEnd() {
    if (this._meshes.self.entityEnd(), this._bufferingEnabled) {
      if (this._copyBufferedDataIntoSelf) return;
      for (let e = 0; e < 8; e++) {
        const t = 1 << e;
        this._currentEntityOverlaps & t && this._meshes.neighbors[e].entityEnd();
      }
    }
  }
  recordStart(e, t, s) {
    this._currentRecordOverlaps = 0, this._meshes.self.recordStart(e, t, s);
  }
  recordEnd(e = 0) {
    const t = this._meshes.self.recordEnd(this._currentRecordOverlaps);
    return t && this._currentRecordOverlaps !== 0 ? (this._copyIntoNeighbors(), this._currentEntityOverlaps |= this._currentRecordOverlaps, !0) : t;
  }
  recordBounds(e, t, s, r) {
    this._bufferingEnabled && this._addOverlap(e, t, s, r);
  }
  recordCount() {
    return this._meshes.self.recordCount();
  }
  metricStart(e) {
    this._meshes.self.metricStart(e);
  }
  metricBoxWrite(e) {
    this._meshes.self.metricBoxWrite(e);
  }
  metricEnd() {
    this._meshes.self.metricEnd();
  }
  vertexWrite(e) {
    this._meshes.self.vertexWrite(e);
  }
  vertexWriteF32(e) {
    this._meshes.self.vertexWriteF32(e);
  }
  vertexWriteRegion(e) {
    this._meshes.self.vertexWriteRegion(e);
  }
  indexWrite(e) {
    this._meshes.self.indexWrite(e);
  }
  serialize(e) {
    const t = { message: [], transferList: [] }, s = this._meshes.self.serialize();
    return t.message.push({ tileId: this.tileKey.id, ...s.message }), t.transferList.push(...s.transferList), this._meshes.neighbors.forEach((r, i) => {
      const n = r.serialize(), a = 1 << i, o = ce(a), h = le(a), c = zs(new Te(this.tileKey), o, h, e);
      t.message.push({ tileId: c.id, ...n.message }), t.transferList.push(...n.transferList);
    }), t;
  }
  _addOverlap(e, t, s, r) {
    const i = Math.min(k / 2, s), n = Math.min(k / 2, r), a = 255 ^ ((e < 0 + i ? Ze : e >= k - i ? Qe : Ze | Qe) | (t < 0 + n ? Je : t >= k - n ? He : Je | He));
    this._currentRecordOverlaps |= a;
  }
  _copyIntoNeighbors() {
    for (let e = 0; e < 8; e++) {
      const t = 1 << e;
      if (this._currentRecordOverlaps & t) {
        if (this._copyBufferedDataIntoSelf) {
          const n = -ce(t) * k, a = -le(t) * k;
          if (a !== 0) continue;
          this._meshes.self.copyLast(n, a);
          continue;
        }
        if (!this._meshes.neighbors[e]) {
          const n = Math.floor(this._sizeHint / 16);
          this._meshes.neighbors[e] = new Ve(t, n);
        }
        const s = this._meshes.neighbors[e], r = -ce(t) * k, i = -le(t) * k;
        s.copyLastFrom(this._meshes.self, r, i);
      }
    }
  }
}, Qs = class {
}, D = class Ct {
  constructor() {
    this._defaultResult = null, this._backgroundFillResult = null;
  }
  static async from(e, t) {
    const s = new Ct();
    return s.setDefault(await e.createMeshWriters(t.meshes)), s;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(e) {
    this._defaultResult = e;
  }
  getBackgroundFill() {
    return this._backgroundFillResult;
  }
  setBackgroundFill(e) {
    this._backgroundFillResult = e;
  }
  match(e, t) {
    const s = this.doMatch(e, t) || this.getDefault();
    if (s && s.length > 0) {
      const r = this.getBackgroundFill();
      if (r) return [...r, ...s];
    }
    return s;
  }
  getSortKey(e, t) {
    return 0;
  }
  doMatch(e, t) {
    return null;
  }
  async fetchResources(e, t) {
  }
}, Zs = class Tt extends D {
  static async fromDictionaryRenderer(e, t) {
    return new Tt(e, t);
  }
  constructor(e, t) {
    super(), this._context = e, this._schema = t, this._hashToGroup = /* @__PURE__ */ new Map();
  }
  get fieldMap() {
    return this._schema.fieldMap;
  }
  async fetchResources(e, t) {
    const s = t.getCursor(), r = [];
    for (; s.next(); ) r.push(this._updateMeshWriterGroup(e, s));
    await Promise.all(r);
  }
  match(e, t) {
    const s = e.getAttributeHash();
    return this._hashToGroup.get(s);
  }
  async _updateMeshWriterGroup(e, t) {
    const s = t.readLegacyFeatureForDisplay(), r = t.getAttributeHash();
    if (this._hashToGroup.has(r)) return;
    this._hashToGroup.set(r, null);
    const i = await e.fetchDictionaryResourceImmediate({ type: "dictionary-request", feature: s });
    if (!i) return;
    const n = await this._context.createMeshWriters(i.meshes);
    this._hashToGroup.set(r, n);
  }
}, Hs = class Mt extends D {
  constructor(e, t) {
    super(), this._intervals = [], this._isMaxInclusive = t, this._field = e;
  }
  static async fromIntervalSchema(e, t) {
    const s = await e.storage.createComputedField(t), r = new Mt(s, t.isMaxInclusive);
    await Promise.all(t.intervals.map(async (a) => {
      const o = await e.createMeshWriters(a.meshes);
      r.add(a, o);
    }));
    const i = await e.createMeshWriters(t.defaultSymbol);
    r.setDefault(i);
    const n = await e.createMeshWriters(t.backgroundFill);
    return r.setBackgroundFill(n), r;
  }
  add(e, t) {
    this._intervals.push({ interval: e, result: t }), this._intervals.sort((s, r) => s.interval.min - r.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  doMatch(e, t) {
    const s = this._field?.read(e, t);
    if (s == null || isNaN(s) || s === 1 / 0 || s === -1 / 0) return null;
    for (let r = 0; r < this._intervals.length; r++) {
      const { interval: i, result: n } = this._intervals[r], a = s >= i.min, o = this._isMaxInclusive ? s <= i.max : s < i.max;
      if (a && o) return n;
    }
    return null;
  }
}, Js = class qt extends D {
  static async fromLabelSchema(e, t) {
    const s = t.classes.map(async (i) => {
      const n = await e.createMeshWriters(i.meshes);
      return { minScale: i.minScale, maxScale: i.maxScale, meshes: n, expression: null, where: await e.storage.createWhereClause(i.where) };
    }), r = await Promise.all(s);
    return new qt(r);
  }
  constructor(e) {
    super(), this._labels = e;
  }
  match(e, t) {
    if (!this._labels.length) return null;
    const s = this._getLabels(t.$view.scale), r = [];
    for (const i of s) i.where && !i.where(e) || r.push(...i.meshes);
    return r;
  }
  _getLabels(e) {
    return this._labels.filter((t) => this._validForTileScale(t, e));
  }
  _validForTileScale(e, t) {
    const s = t - t / 4, r = t + t / 2;
    return (!e.minScale || e.minScale >= s) && (!e.maxScale || e.maxScale <= r);
  }
}, Ks = class $t extends D {
  constructor(e, t) {
    super(), this._defaultSymbolSortKey = 0, this._nullResult = null, this._resultsMap = /* @__PURE__ */ new Map(), this._fields = [], this._fields = e, this._separator = t || "";
  }
  static async fromMatcherSchema(e, t) {
    const s = t.expression ? [e.storage.createComputedField({ expression: t.expression })] : [t.field ? e.storage.createComputedField({ field: t.field }) : null, t.field2 ? e.storage.createComputedField({ field: t.field2 }) : null, t.field3 ? e.storage.createComputedField({ field: t.field3 }) : null], r = (await Promise.all(s)).filter((o) => !!o), i = new $t(r, t.fieldDelimiter), n = await e.createMeshWriters(t.defaultSymbol);
    i.setDefault(n);
    const a = await e.createMeshWriters(t.backgroundFill);
    return i.setBackgroundFill(a), await Promise.all(t.map.map(async (o, h) => {
      const c = await e.createMeshWriters(o.symbol);
      o.value === "<Null>" ? i.setNullResult(c) : i.add(o.value, c, h + 1);
    })), i;
  }
  setNullResult(e) {
    this._nullResult = e;
  }
  getSortKey(e, t) {
    const s = this._getValueFromFields(e, t);
    if (s == null || s === "" || s === "<Null>") return 0;
    const r = this._resultsMap.get(s.toString());
    return r ? r.sortKey : this._defaultSymbolSortKey;
  }
  add(e, t, s) {
    this._resultsMap.set(e.toString(), { meshWriters: t, sortKey: s }), this._defaultSymbolSortKey = Math.max(this._defaultSymbolSortKey, s + 1);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  doMatch(e, t) {
    const s = this._getValueFromFields(e, t);
    if (this._nullResult !== null && (s == null || s === "" || s === "<Null>")) return this._nullResult;
    if (s == null) return null;
    const r = s.toString();
    return this._resultsMap.get(r)?.meshWriters;
  }
  _getValueFromFields(e, t) {
    const s = [];
    for (const r of this._fields) {
      const i = r.read(e, t);
      i == null || i === "" ? s.push("<Null>") : s.push(i);
    }
    return s.join(this._separator);
  }
};
async function Y(u, e) {
  switch (e.type) {
    case "simple":
    case "heatmap":
    case "dot-density":
    case "pie-chart":
      return D.from(u, e);
    case "interval":
      return Hs.fromIntervalSchema(u, e);
    case "dictionary":
      return Zs.fromDictionaryRenderer(u, e);
    case "label":
      return Js.fromLabelSchema(u, e);
    case "map":
      return Ks.fromMatcherSchema(u, e);
    case "subtype":
      return er.fromSubtypes(u, e);
    case "cluster":
      return tr.fromClusterSchema(u, e);
    default:
      throw new Error("Impl");
  }
}
let er = class Et extends D {
  constructor(e, t) {
    super(), this._subMatchers = e, this._subtypeField = t;
  }
  static async fromSubtypes(e, t) {
    const s = /* @__PURE__ */ new Map(), r = [];
    for (const i in t.renderers) {
      const n = parseInt(i, 10), a = Y(e, t.renderers[i]).then((o) => s.set(n, o));
      r.push(a);
    }
    return await Promise.all(r), new Et(s, t.subtypeField);
  }
  match(e, t) {
    const s = e.readAttribute(this._subtypeField), r = this._subMatchers.get(s);
    return r ? r.match(e, t) : null;
  }
}, tr = class Ot extends D {
  static async fromClusterSchema(e, t) {
    const [s, r] = await Promise.all([Y(e, t.feature), Y(e, t.cluster)]);
    return new Ot(s, r);
  }
  constructor(e, t) {
    super(), this._featureMatcher = e, this._clusterMatcher = t;
  }
  match(e, t) {
    return e.readAttribute("cluster_count") === 1 ? this._featureMatcher.match(e, t) : this._clusterMatcher.match(e, t);
  }
}, sr = class Rt extends Qs {
  static async create(e, t) {
    const s = await Y(e, t.symbology), r = t.labels ? await Y(e, t.labels) : null;
    return new Rt(s, r);
  }
  constructor(e, t) {
    super(), this._symbology = e, this._labels = t;
  }
  destroy() {
  }
  async enqueueMatcherRequests(e, t) {
    await Promise.all([this._symbology.fetchResources(e, t), this._labels?.fetchResources(e, t)]);
  }
  enqueueWriterRequests(e, t, s) {
    const r = this._symbology.match(t, s);
    if (r) {
      for (const i of r) i.enqueueRequest(e, t, s);
      if (this._labels) {
        const i = this._labels.match(t, s);
        if (!i) return;
        for (const n of i) n.enqueueRequest(e, t, s);
      }
    }
  }
  write(e, t, s, r, i) {
    const n = this._symbology.match(s, r);
    if (n) {
      for (const a of n) a.write(e, t, s, r, i);
      if (e.entityRecordCount() >= 1 && this._labels) {
        const a = this._labels.match(s, r);
        if (!a) return;
        for (const o of a) o.setReferences(n), o.write(e, t, s, r, i);
      }
    }
  }
  getSortKey(e, t) {
    return this._symbology.getSortKey(e, t);
  }
}, rr = class {
  constructor(e, t, s, r) {
    this.storage = e, this.proxy = t, this.viewParams = s, this.registry = r;
  }
  async createMeshWriters(e) {
    const t = e.map((s) => this.registry.createMeshWriter(this.storage, this.proxy, this.viewParams, s));
    return Promise.all(t);
  }
}, ir = class {
  constructor(e) {
    this._outstandingMessages = [], this._queue = new ct({ concurrency: e.concurrency, process: (t) => e.process(t) });
  }
  async push(e) {
    if (e.end) return await Promise.all(this._outstandingMessages), await this._queue.push(e), void (this._outstandingMessages = []);
    const t = this._queue.push(e);
    return this._outstandingMessages.push(t), t;
  }
}, At = class ye {
  static async create(e, t) {
    if (t.statisticType === "count") {
      const r = new Us(1);
      return new ye(t.name, t.alias, t.type, t.statisticType, r);
    }
    const s = await e.createComputedField({ expression: t.onStatisticExpression?.expression, field: t.onStatisticField });
    return new ye(t.name, t.alias, t.type, t.statisticType, s);
  }
  constructor(e, t, s, r, i) {
    this.name = e, this.alias = t, this.type = s, this.statisticType = r, this.computed = i;
  }
}, Le = class {
  constructor(e) {
    this.subscription = e, this.handledChunks = /* @__PURE__ */ new Set();
  }
  destroy() {
  }
}, Pt = class {
  constructor(e, t) {
    this._source = e, this._attributeStore = t, this._sendStates = /* @__PURE__ */ new Map();
  }
  destroy() {
  }
  get enablePixelBuffering() {
    return !0;
  }
  onSubscribe(e) {
    const t = this.createState(e);
    this._sendStates.set(e.key.id, t), this.updateChunks();
  }
  onUnsubscribe(e) {
    this._sendStates.get(e.key.id)?.destroy(), this._sendStates.delete(e.key.id);
  }
  invalidate() {
    const e = Array.from(this._sendStates.values());
    this._sendStates.clear();
    for (const t of e) t.destroy(), this.onSubscribe(t.subscription);
  }
  invalidateAttributeData() {
  }
  getFeatureObjectIdsForAggregate(e) {
    throw new Error("InternalError: AggregateId lookup not supported");
  }
  getDisplayIds(e) {
    return this.displayMap(e, (t) => t, (t) => t);
  }
  getDisplayAndObjectIds(e) {
    return this.displayMap(e, (t) => t, (t, s, r) => [t, r]);
  }
  afterUpdateChunks() {
  }
}, jt = class extends Pt {
  constructor(e, t, s, r) {
    super(e, t), this.spatialReference = s, this.aggregateFields = r, this.events = new Me(), this.featureAdapter = Ns;
  }
  get aggregateQueryEngine() {
    return this._aggregateQueryEngine || (this._aggregateQueryEngine = new Ft({ featureStore: this, fieldsIndex: this._metadata.fieldsIndex, geometryType: this._metadata.geometryType, objectIdField: this._metadata.objectIdField, spatialReference: this.spatialReference })), this._aggregateQueryEngine;
  }
  removeChunks(e) {
  }
  forEach(e) {
    return this.forEachAggregateWorldSpace(e);
  }
  forEachInBounds(e, t) {
  }
  forEachBounds(e, t) {
    const s = qe();
    for (const r of e) {
      const i = ss(s, r.geometry, !1, !1);
      i && t(i);
    }
  }
}, ze = class {
  constructor(e, t, s, r, i) {
    this.subscription = e, this.reader = t, this.clear = s, this.end = r, this.debugInfo = i, this.type = "append";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e, t, s) {
    return { type: "append", clear: this.clear, id: this.id, append: e, end: this.end, debugInfo: this.debugInfo, subscriptionVesrion: this.subscription.version, version: t, attributeEpoch: s };
  }
}, me = class {
  constructor(e, t, s, r, i) {
    this.subscription = e, this.reader = t, this.remove = s, this.end = r, this.debugInfo = i, this.type = "update";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e, t, s) {
    return { type: "update", id: this.id, modify: e, debugInfo: this.debugInfo, remove: this.remove, version: t, subscriptionVesrion: this.subscription.version, end: this.end, attributeEpoch: s };
  }
}, M = class P extends Ee {
  static fromFeatures(e, t) {
    const { objectIdField: s, geometryType: r } = t, i = rs([], e, r, !1, !1, s);
    for (let n = 0; n < i.length; n++) i[n].displayId = e[n].displayId;
    return P.fromOptimizedFeatures(i, t);
  }
  static fromFeatureSet(e, t) {
    const s = lt(e, t.objectIdField);
    return P.fromOptimizedFeatureSet(s, t);
  }
  static fromOptimizedFeatureSet(e, t) {
    const s = P.fromOptimizedFeatures(e.features, t);
    return s._exceededTransferLimit = e.exceededTransferLimit, s._transform = e.transform, s._fieldsIndex = new _t(e.fields), s;
  }
  static fromOptimizedFeatures(e, t, s) {
    const r = new P(e, t);
    return r._fieldsIndex = t.fieldsIndex, r._transform = s, r;
  }
  static empty(e) {
    return new P([], e);
  }
  constructor(e, t) {
    super(t), this._exceededTransferLimit = !1, this._featureIndex = -1, this._fieldsIndex = null, this._geometryType = t.geometryType, this._features = e;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  removeIds(e) {
    const t = new Set(e);
    this._features = this._features.filter((s) => !(s.objectId != null && t.has(s.objectId)));
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getInTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let e = "";
    for (const t in this._current.attributes) e += this._current.attributes[t];
    return e;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e) {
    this._featureIndex = e;
  }
  getObjectId() {
    return this._current?.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e) {
    this._current.displayId = e;
  }
  copy() {
    const e = new P(this._features, this.metadata);
    return this.copyInto(e), e;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); ) ;
    return this._featureIndex < this._features.length;
  }
  readGeometryArea() {
    return Q(this._current) ? is(this._current.geometry, 2) : 0;
  }
  _readX() {
    return Q(this._current) ? this._current.geometry.coords[0] : 0;
  }
  _readY() {
    return Q(this._current) ? this._current.geometry.coords[1] : 0;
  }
  _readGeometry() {
    return Q(this._current) ? this._current.geometry ?? null : null;
  }
  _readServerCentroid() {
    return this._current.centroid;
  }
  _readAttribute(e, t) {
    if (!this._fieldsIndex) {
      const i = this._current.attributes[e];
      if (i !== void 0) return i;
      const n = e.toLowerCase();
      for (const a in this._current.attributes) if (a.toLowerCase() === n) return this._current.attributes[a];
      return;
    }
    const s = this._fieldsIndex.get(e);
    if (!s) return;
    let r = this._current.attributes[s.name];
    return r == null ? r : (this.fields.get(e)?.type === "esriFieldTypeTimestampOffset" && (r = this.parseTimestampOffset(r)), t && this.fields.isDateField(e) ? new Date(r) : r);
  }
  _readAttributes() {
    return this._current.attributes;
  }
  copyInto(e) {
    super.copyInto(e), e._featureIndex = this._featureIndex, e._transform = this._transform, e._fieldsIndex = this._fieldsIndex;
  }
}, nr = class extends Le {
  constructor(e, t) {
    super(e), this.bins = /* @__PURE__ */ new Map(), this.featureCache = /* @__PURE__ */ new Map(), this.done = !1, this._store = t;
  }
  reset() {
    this.destroy(), this.done = !1;
  }
  destroy() {
    const e = this.subscription.tile.key.level;
    for (const t of this.featureCache.keys()) this._store.releaseDisplayIdForObjectId(`${t}.${e}`);
    this.bins.clear(), this.featureCache.clear(), this.handledChunks.clear();
  }
  get tile() {
    return this.subscription.tile;
  }
  *featuresWorldSpace() {
    for (const e of this.featureCache.values()) {
      const t = e.clone();
      t.geometry && ns(t.geometry, t.geometry, !1, !1, this.subscription.tile.transform), yield t;
    }
  }
}, ar = class Dt extends jt {
  static async create(e, t, s, r, i) {
    const n = new Oe({ spatialReference: t }), a = await Promise.all(e.fields.map(async (h) => At.create(n, h))), o = e.featureFilter ? await kt.create({ geometryType: s.metadata.geometryType, hasM: !1, hasZ: !1, timeInfo: s.metadata.timeInfo, fieldsIndex: s.metadata.fieldsIndex, spatialReference: t, filterJSON: e.featureFilter }) : null;
    return e.index.type === "geohash" && await Gs(t, O.WGS84), new Dt(e, o, i, a, t, s, r);
  }
  constructor(e, t, s, r, i, n, a) {
    super(n, a, i, r), this._schema = e, this._featureFilter = t, this._timeZone = s, this._metadata = new Re({ geometryType: "esriGeometryPolygon", objectIdField: "aggregateId", fields: e.fields, globalIdField: null, spatialReference: n.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  createState(e) {
    return new nr(e, this._attributeStore);
  }
  async *applyLocalEdit(e) {
    for (const t of this._sendStates.values())
      t.reset(), yield new ze(t.subscription, M.empty(this._source.metadata), !0, !1, {});
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((n) => [t(n), n])), i = [];
    for (const n of this._sendStates.values()) for (const a of n.featuresWorldSpace()) {
      const { objectId: o, displayId: h } = a, c = r.get(o);
      if (c != null) {
        const d = s(h, c, o);
        i.push(d), r.delete(o);
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [];
    for (const i of this._sendStates.values()) for (const n of i.featuresWorldSpace()) t.has(n.displayId) && !s.has(n.objectId) && (n.geometry && r.push({ ...pt(n, this._metadata.geometryType, !1, !1), displayId: n.displayId }), s.add(n.objectId));
    return { features: [], aggregates: r };
  }
  getFeatureObjectIdsForAggregate(e) {
    for (const t of this._sendStates.values()) for (const s of t.bins.values()) if (s.id === e) return Array.from(s.containedObjectIds);
    return [];
  }
  async *updateChunks() {
    if (this._source.chunks().length) for (const e of this._sendStates.values()) yield* this._update(e, this._source);
  }
  forEachAggregateWorldSpace(e) {
    for (const t of this._sendStates.values()) for (const s of t.featuresWorldSpace()) e(s);
  }
  _createIndexOptions(e) {
    switch (this._schema.index.type) {
      case "geohash":
        return { type: "geohash", fields: this.aggregateFields, featureFilter: this._featureFilter, geohashLevel: this._schema.index.fixBinLevel, spatialReference: this.spatialReference, timeZone: this._timeZone, scale: e.scale };
      case "grid": {
        const t = this._schema.index.fixedBinLevel, s = t != null ? e.tileInfoView.getLODInfoAt(t).scale : e.scale;
        return { type: "grid", fields: this.aggregateFields, cellSize: this._schema.index.size, featureFilter: this._featureFilter, spatialReference: this.spatialReference, timeZone: this._timeZone, scale: s };
      }
    }
  }
  async *_update(e, t) {
    const { handledChunks: s, subscription: r, bins: i, featureCache: n } = e, a = r.tile;
    if (e.done) return;
    for (const f of t.chunks()) {
      if (s.has(f.chunkId)) continue;
      s.add(f.chunkId);
      const p = f.queryInfo;
      if ("tileId" in p) {
        const y = new Te(p.tileId);
        if (y.level !== a.level || y.world !== a.key.world) continue;
      }
      f.getAggregateIndex(this._createIndexOptions(e.tile)).putBounded(i, e.tile.extent, e.tile.resolution);
    }
    const o = [], h = r.tile.transform, c = r.tile.key.level;
    for (const f of i.values()) {
      let p = n.get(f.id);
      if (p) p.attributes = f.getAttributes();
      else {
        const y = f.getGeometry(this.spatialReference, h);
        p = new U(y, f.getAttributes(), null), y || (p.centroid = f.getGeometricCentroid(this.spatialReference, h)), p.objectId = f.id, p.displayId = this._attributeStore.createDisplayIdForObjectId(`${p.objectId}.${c}`), n.set(f.id, p);
      }
      o.push(p);
    }
    this.events.emit("changed"), e.done = !t.updateTracking.updating;
    const d = M.fromOptimizedFeatures(o, this._metadata, h), _ = d.getCursor(), g = e.subscription.tile.createArcadeEvaluationOptions(this._timeZone);
    for (; _.next(); ) this._attributeStore.setAttributeData(_.getDisplayId(), _, g);
    yield new me(e.subscription, d, [], e.done, {});
  }
}, Lt = class {
  constructor(e) {
    this._statistics = e;
  }
  get statistics() {
    return this._statistics;
  }
};
const Ke = Math.PI / 180;
let zt = class be {
  static create(e) {
    return new be(e.map((t) => or(t)));
  }
  constructor(e) {
    this._statistics = e;
  }
  values() {
    return this._statistics.values();
  }
  insert(e, t) {
    for (const s of this._statistics) s.insert(e, t);
  }
  merge(e) {
    for (let t = 0; t < this._statistics.length; t++) {
      const s = this._statistics[t], r = e._statistics[t];
      if (s.field.name !== r.field.name) throw new Error("InternalError: Tried to merge incompatible statistics");
      s.merge(r);
    }
  }
  clone() {
    return new be(this._statistics.map((e) => e.clone()));
  }
};
function or(u) {
  switch (u.statisticType) {
    case "min":
      return new hr(u);
    case "max":
      return new ur(u);
    case "avg":
      return new cr(u);
    case "avg_angle":
      return new lr(u);
    case "sum":
    case "count":
      return new dr(u);
    case "mode":
      return new _r(u);
  }
}
let N = class {
  constructor(e) {
    this.field = e;
  }
  insert(e, t) {
    if (!this.field.computed) return;
    const s = this.field.computed.read(e, t);
    As(s) || this._insertValue(s);
  }
}, hr = class Ut extends N {
  constructor() {
    super(...arguments), this.type = "min", this.value = Number.MAX_VALUE;
  }
  _insertValue(e) {
    this.value = Math.min(this.value, e);
  }
  merge(e) {
    this.value = Math.min(this.value, e.value);
  }
  clone() {
    const e = new Ut(this.field);
    return e.value = this.value, e;
  }
}, ur = class Wt extends N {
  constructor() {
    super(...arguments), this.type = "max", this.value = Number.MIN_VALUE;
  }
  _insertValue(e) {
    this.value = Math.max(this.value, e);
  }
  merge(e) {
    this.value = Math.max(this.value, e.value);
  }
  clone() {
    const e = new Wt(this.field);
    return e.value = this.value, e;
  }
}, dr = class Gt extends N {
  constructor() {
    super(...arguments), this.type = "sum", this.value = 0;
  }
  _insertValue(e) {
    this.value += e;
  }
  merge(e) {
    this.value += e.value;
  }
  clone() {
    const e = new Gt(this.field);
    return e.value = this.value, e;
  }
}, cr = class Nt extends N {
  constructor() {
    super(...arguments), this.type = "avg", this._total = 0, this._count = 0;
  }
  get value() {
    return this._total / this._count;
  }
  _insertValue(e) {
    this._total += e, this._count += 1;
  }
  merge(e) {
    this._total += e._total, this._count += e._count;
  }
  clone() {
    const e = new Nt(this.field);
    return e._total = this._total, e._count = this._count, e;
  }
}, lr = class Bt extends N {
  constructor() {
    super(...arguments), this.type = "avg_angle", this._x = 0, this._y = 0, this._count = 0;
  }
  get value() {
    const e = this._x / this._count, t = this._y / this._count, s = 180 / Math.PI;
    return Math.atan2(t, e) * s;
  }
  _insertValue(e) {
    this._x = this._x + Math.cos(e * Ke), this._y = this._y + Math.sin(e * Ke), this._count += 1;
  }
  merge(e) {
    this._x += e._x, this._y += e._y, this._count += e._count;
  }
  clone() {
    const e = new Bt(this.field);
    return e._x = this._x, e._y = this._y, e._count = this._count, e;
  }
}, _r = class Vt extends N {
  constructor() {
    super(...arguments), this._frequencies = /* @__PURE__ */ new Map();
  }
  get value() {
    let e, t = 0;
    for (const [s, r] of this._frequencies.entries()) r > t && (t = r, e = s);
    return e;
  }
  _insertValue(e) {
    const t = this._frequencies.get(e);
    t != null ? this._frequencies.set(e, t + 1) : this._frequencies.set(e, 1);
  }
  merge(e) {
    for (const [t, s] of e._frequencies.entries()) {
      const r = this._frequencies.get(t);
      r != null ? this._frequencies.set(t, r + s) : this._frequencies.set(t, s);
    }
  }
  clone() {
    const e = new Vt(this.field);
    return e._frequencies = new Map(this._frequencies), e;
  }
}, Ie = class ee extends Lt {
  static createId(e, t) {
    return `${e}.${t}`;
  }
  static create(e, t, s, r) {
    return new ee(e, t, zt.create(s), r);
  }
  constructor(e, t, s, r) {
    super(s), this.gridX = e, this.gridY = t, this._worldUnitsPerCell = r, this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._objectIds = /* @__PURE__ */ new Set();
  }
  get id() {
    return ee.createId(this.gridX, this.gridY);
  }
  get containedObjectIds() {
    return this._objectIds;
  }
  get count() {
    return this._count;
  }
  get firstObjectId() {
    return this._objectIds.values().next().value;
  }
  get centroidXWorld() {
    return this._xWorldTotal / this._count;
  }
  get centroidYWorld() {
    return this._yWorldTotal / this._count;
  }
  clone() {
    const e = new ee(this.gridX, this.gridY, this._statistics.clone(), this._worldUnitsPerCell);
    return e._count = this._count, e._xWorldTotal = this._xWorldTotal, e._yWorldTotal = this._yWorldTotal, e._firstFeatureAttributes = this._firstFeatureAttributes, e._objectIds = new Set(this._objectIds), e;
  }
  insert(e, t, s, r) {
    this._count === 0 ? this._firstFeatureAttributes = e.readAttributes() : this._firstFeatureAttributes = null, this._count += 1, this._xWorldTotal += s, this._yWorldTotal += r, this._statistics.insert(e, t), this._objectIds.add(e.getObjectId());
  }
  merge(e) {
    if (e._count !== 0) {
      this._count += e._count, this._firstFeatureAttributes = e._firstFeatureAttributes, this._xWorldTotal += e._xWorldTotal, this._yWorldTotal += e._yWorldTotal, this._statistics.merge(e._statistics);
      for (const t of e._objectIds.values()) this._objectIds.add(t);
    }
  }
  getCentroidX(e) {
    return e == null ? this.centroidXWorld : as(e, this.centroidXWorld);
  }
  getCentroidY(e) {
    return e == null ? this.centroidYWorld : os(e, this.centroidYWorld);
  }
  getGeometry(e, t) {
    const s = this.gridX * this._worldUnitsPerCell, r = this.gridY * this._worldUnitsPerCell, i = new F([4], [s, r, s + this._worldUnitsPerCell, r, s + this._worldUnitsPerCell, r + this._worldUnitsPerCell, s, r + this._worldUnitsPerCell]);
    if (t != null) {
      const n = new F();
      return G(n, i, !1, !1, "esriGeometryPolygon", t);
    }
    return i;
  }
  getCentroid(e) {
    const t = new F([], [this.centroidXWorld, this.centroidYWorld]);
    if (e != null) {
      const s = new F();
      return G(s, t, !1, !1, "esriGeometryPoint", e);
    }
    return t;
  }
  getGeometricCentroid(e, t) {
    const s = this.gridX * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, r = this.gridY * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, i = new F([], [s, r]);
    if (t != null) {
      const n = new F();
      return G(n, i, !1, !1, "esriGeometryPoint", t);
    }
    return i;
  }
  getAttributes() {
    const e = { aggregateId: this.id };
    for (const t of this._statistics.values()) e[t.field.name] = t.value;
    return this._firstFeatureAttributes != null ? { ...e, ...this._firstFeatureAttributes } : e;
  }
}, Yt = class {
  constructor(e) {
    this._options = e;
  }
  insert(e, t) {
    const s = e.getCursor(), r = { $view: { scale: this._options.scale, timeZone: this._options.timeZone } };
    for (; s.next(); ) this._insertFeature(s, r, t);
  }
  _insertFeature(e, t, s) {
    const { featureFilter: r } = this._options;
    if (r !== null && !r.check(e)) return;
    let i = 0, n = 0;
    if (e.geometryType === "esriGeometryPoint") i = e.readXWorldSpace(), n = e.readYWorldSpace();
    else {
      if (s) {
        const o = e.readCentroidForDisplay();
        if (o == null) return;
        const [h, c] = o.coords;
        if (h < 0 || h > k || c < 0 || c > k) return;
      }
      const a = e.readCentroidWorldSpace();
      if (a == null) return;
      i = a.coords[0], n = a.coords[1];
    }
    this._insert(e, i, n, t);
  }
};
const pr = 96;
function Se(u, e) {
  return hs(u) * us * pr / e;
}
let gr = class extends Yt {
  constructor(e) {
    super(e), this._cells = /* @__PURE__ */ new Map(), this._pixelsPerMapUnit = Se(e.spatialReference, e.scale);
  }
  put(e) {
    for (const t of this._cells.values()) {
      const s = e.get(t.id);
      s ? s.merge(t) : e.set(t.id, t.clone());
    }
  }
  putBounded(e, t, s) {
    const r = [t.xmin, t.ymin, t.xmax, t.ymax], [i, n, a, o] = r, h = Math.floor(i * this._pixelsPerMapUnit / this._options.cellSize), c = Math.floor(n * this._pixelsPerMapUnit / this._options.cellSize), d = Math.ceil(a * this._pixelsPerMapUnit / this._options.cellSize), _ = Math.ceil(o * this._pixelsPerMapUnit / this._options.cellSize);
    for (let g = c; g <= _; g++) for (let l = h; l <= d; l++) {
      const f = `${l}.${g}`, p = this._cells.get(f);
      if (!p) continue;
      const y = e.get(p.id);
      y ? p && !e.has(p.id) && y.merge(p) : e.set(p.id, p.clone());
    }
  }
  _insert(e, t, s, r) {
    const i = t * this._pixelsPerMapUnit, n = s * this._pixelsPerMapUnit, a = Math.floor(i / this._options.cellSize), o = Math.floor(n / this._options.cellSize);
    this._getCellOrCreate(a, o).insert(e, r, t, s);
  }
  _getCellOrCreate(e, t) {
    const s = Ie.createId(e, t);
    let r = this._cells.get(s);
    if (!r) {
      const i = 1 * this._options.cellSize / this._pixelsPerMapUnit;
      r = Ie.create(e, t, this._options.fields, i), this._cells.set(s, r);
    }
    return r;
  }
}, fr = class {
  constructor(e, t) {
    this.inner = e, this.displayId = t;
  }
};
const H = 128;
let yr = class extends Le {
  constructor(e) {
    super(e), this.didSend = !1, this.done = !1;
  }
}, mr = class {
  constructor(e, t, s, r, i) {
    this._level = e, this._scale = t, this._indexOptions = s, this._clusterRadius = r, this._store = i, this._cells = /* @__PURE__ */ new Map(), this._handledChunks = /* @__PURE__ */ new Set(), this._statistics = /* @__PURE__ */ new Map(), this._clusters = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._clearClusters();
  }
  _clearClusters() {
    for (const e of this._clusters.values()) this._store.releaseDisplayIdForObjectId(e.inner.id);
    this._clusters.clear();
  }
  *aggregatesWorldSpace() {
    for (const e of this._clusters.values()) {
      const t = e.inner.getCentroid(null), s = new U(t, e.inner.getAttributes(), null);
      s.objectId = e.inner.id, s.displayId = e.displayId, yield s;
    }
  }
  clusters() {
    return this._clusters.values();
  }
  updateChunks(e, t) {
    let s = !1;
    for (const a of e) {
      const o = a.queryInfo;
      "tileId" in o && new Te(o.tileId).level !== this._level || this._handledChunks.has(a.normalizedChunkId) || (this._handledChunks.add(a.normalizedChunkId), s = !0, a.getAggregateIndex({ ...this._indexOptions, scale: this._scale }).put(this._cells));
    }
    const r = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 }, i = Se(this._indexOptions.spatialReference, this._scale), n = this._indexOptions.cellSize;
    for (const { subscription: a } of t) {
      const o = a.tile.bounds, h = Math.floor(o[0] * i / n), c = Math.floor(o[1] * i / n), d = Math.ceil(o[2] * i / n), _ = Math.ceil(o[3] * i / n);
      r.xMin = Math.min(r.xMin, h), r.yMin = Math.min(r.yMin, c), r.xMax = Math.max(r.xMax, d), r.yMax = Math.max(r.yMax, _);
    }
    return this._lastCellBounds != null && r.xMin === this._lastCellBounds.xMin && r.yMin === this._lastCellBounds.yMin && r.yMin === this._lastCellBounds.yMin && r.yMax === this._lastCellBounds.yMax || (s = !0, this._lastCellBounds = r), s && this._clusterCells(r), s;
  }
  async updateStatistics(e) {
    let t = !1;
    for (const s of this._clusters.values()) s.inner.count > 1 && (t = this._updateAggregateStatistics(this._statistics, s.inner) || t);
    if (t) {
      const s = Array.from(this._statistics.entries()).map(([r, i]) => ({ fieldName: r, minValue: i.minValue, maxValue: i.maxValue }));
      await e.container.updateStatistics(this._level, s);
    }
  }
  createAggregateFeatures(e, t) {
    const s = e.subscription, r = [], i = s.tile.transform;
    for (const n of this._clusters.values()) {
      let a = n.inner.getCentroidX(i);
      const o = n.inner.getCentroidY(i), h = s.tile.lod, c = h.wrap ? h.worldSize[0] : null, d = n.inner.count === 1 ? n.inner.firstObjectId : n.inner.id, _ = n.displayId;
      if (c != null) if (c === 1) {
        const g = new F([], [a, o]), l = new U(g, n.inner.getAttributes(), null);
        l.geometry.coords[0] -= k, l.objectId = d, l.displayId = _, r.push(l);
        const f = new F([], [a, o]), p = new U(f, n.inner.getAttributes(), null);
        p.geometry.coords[0] += k, p.objectId = d, p.displayId = _, r.push(p);
      } else a > k + k / 2 ? a -= c * k : a < -k / 2 && (a += c * k);
      if (a < k + H && a >= -H && o < k + H && o >= -H) {
        const g = new F([], [a, o]), l = new U(g, n.inner.getAttributes(), null);
        l.objectId = d, l.displayId = _, r.push(l);
      }
    }
    return M.fromOptimizedFeatures(r, t, s.tile.transform);
  }
  _clusterCells(e) {
    let t = Array.from(this._cells.values());
    t = t.sort((a, o) => o.count - a.count);
    const s = [];
    for (const a of this._clusters.values()) s.push(a.inner.id);
    this._clusters.clear();
    const r = this._clusterRadius * (1 / Se(this._indexOptions.spatialReference, this._scale)), i = 1 + this._clusterRadius / this._indexOptions.cellSize, n = /* @__PURE__ */ new Set();
    for (const a of t) {
      if (n.has(a.id) || a.gridX < e.xMin || a.gridX > e.xMax || a.gridY < e.yMin || a.gridY > e.yMax) continue;
      const o = this._store.createDisplayIdForObjectId(a.id), h = new fr(a.clone(), o);
      n.add(a.id), this._clusters.set(a.id, h);
      const c = a.centroidXWorld, d = a.centroidYWorld;
      for (let _ = a.gridY - i; _ <= a.gridY + i; _++) for (let g = a.gridX - i; g <= a.gridX + i; g++) {
        if (_ === a.gridY && g === a.gridX) continue;
        const l = this._cells.get(Ie.createId(g, _));
        if (!l || n.has(l.id)) continue;
        const f = Math.abs(l.centroidXWorld - c), p = Math.abs(l.centroidYWorld - d);
        f < r && p < r && (h.inner.merge(l), n.add(l.id));
      }
    }
    for (const a of s) this._store.releaseDisplayIdForObjectId(a);
  }
  _updateAggregateStatistics(e, t) {
    let s = !1;
    for (const r of t.statistics.values()) {
      if (r.field.type === "esriFieldTypeString") continue;
      const i = r.value, n = r.field, a = e.get(n.name);
      if (a) {
        const { minValue: o, maxValue: h } = a, c = Math.min(a.minValue, i), d = Math.max(a.maxValue, i);
        o === c && h === d || (a.minValue = c, a.maxValue = d, s = !0);
      } else e.set(n.name, { minValue: i, maxValue: i }), s = !0;
    }
    return s;
  }
}, br = class Xt extends jt {
  static async create(e, t, s, r, i, n) {
    const a = new Oe({ spatialReference: s }), o = { type: "grid", fields: await Promise.all(t.fields.map(async (h) => At.create(a, h))), spatialReference: s, featureFilter: t.featureFilter ? await kt.create({ geometryType: r.metadata.geometryType, hasM: !1, hasZ: !1, timeInfo: r.metadata.timeInfo, fieldsIndex: r.metadata.fieldsIndex, spatialReference: s, filterJSON: t.featureFilter }) : null, cellSize: t.clusterRadius / 4, timeZone: n };
    return new Xt(e, t.clusterRadius, o, t.fields, r, i);
  }
  constructor(e, t, s, r, i, n) {
    super(i, n, s.spatialReference, s.fields), this._connection = e, this._clusterRadius = t, this._indexOptions = s, this._cellsPerScale = /* @__PURE__ */ new Map(), this._metadata = new Re({ geometryType: "esriGeometryPoint", objectIdField: "aggregateId", fields: [...r, ...this._source.metadata.fieldsIndex.fields, { name: "aggregateId", alias: "aggregateId", type: "esriFieldTypeOID" }], globalIdField: null, spatialReference: i.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  get enablePixelBuffering() {
    return !1;
  }
  invalidate() {
    super.invalidate();
    for (const e of this._cellsPerScale.values()) e.destroy();
    this._cellsPerScale.clear();
  }
  onSubscribe(e) {
    super.onSubscribe(e), this._requiredLevel = e.tile.level, this._requiredScale = e.tile.scale;
  }
  createState(e) {
    return new yr(e);
  }
  async *applyLocalEdit(e) {
    for (const t of this._cellsPerScale.values()) t.destroy();
    this._cellsPerScale.clear();
    for (const t of this._sendStates.values()) t.done = !1;
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((a) => [t(a), a])), i = [], n = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const a of n.clusters()) {
      const o = r.get(a.inner.id);
      if (o == null) {
        if (a.inner.count === 1) {
          const h = r.get(a.inner.firstObjectId);
          if (h != null) {
            const c = s(a.displayId, h, a.inner.firstObjectId);
            i.push(c), r.delete(a.inner.firstObjectId);
          }
        }
      } else {
        const h = s(a.displayId, o, a.inner.id);
        i.push(h), r.delete(a.inner.id);
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [], i = [], n = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const a of n.aggregatesWorldSpace()) if (t.has(a.displayId) && !s.has(a.displayId)) {
      const o = pt(a, this._metadata.geometryType, !1, !1);
      if (s.add(a.displayId), o.attributes.cluster_count === 1) {
        r.push({ ...o, displayId: a.displayId });
        continue;
      }
      i.push({ ...o, displayId: a.displayId });
    }
    return { features: r, aggregates: i };
  }
  getFeatureObjectIdsForAggregate(e) {
    const t = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s of t.clusters()) if (s.inner.id === e) return Array.from(s.inner.containedObjectIds);
    return [];
  }
  async *updateChunks() {
    const e = this._source.chunks();
    if (!e.length) return;
    const t = this._getClusterState(this._requiredLevel, this._requiredScale), s = Array.from(this._sendStates.values()).filter((n) => n.subscription.tile.level === this._requiredLevel);
    if (t.updateChunks(e, s) || !this._source.updateTracking.updating) for (const n of s) n.subscription.tile.level === this._requiredLevel && (n.didSend = !1, n.done = !1);
    const r = Array.from(this._sendStates.values()).filter((n) => n.done).map((n) => n.subscription.tile.key), i = new Set(r);
    for (const n of this._sendStates.values())
      this._source.updateTracking.updating && (r.some((a) => a.containsChild(n.subscription.tile.key)) || n.subscription.tile.key.getChildKeys().every((a) => i.has(a))) || n.didSend || n.subscription.tile.level !== this._requiredLevel || (n.didSend = !0, yield* this._update(n, t, this._source));
    await t.updateStatistics(this._connection);
  }
  forEachAggregateWorldSpace(e) {
    if (this._requiredLevel == null || this._requiredScale == null) return;
    const t = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s of t.aggregatesWorldSpace()) e(s);
  }
  _getClusterState(e, t) {
    if (e == null || t == null) throw new Error("InternalError: Level and scale must be defined");
    let s = this._cellsPerScale.get(t);
    return s || (s = new mr(e, t, this._indexOptions, this._clusterRadius, this._attributeStore), this._cellsPerScale.set(t, s)), s;
  }
  async *_update(e, t, s) {
    if (e.done) return;
    const r = t.createAggregateFeatures(e, this._metadata);
    this.events.emit("changed"), e.done = !s.updateTracking.updating;
    const i = r.getCursor(), n = e.subscription.tile.createArcadeEvaluationOptions(this._indexOptions.timeZone);
    for (; i.next(); ) this._attributeStore.setAttributeData(i.getDisplayId(), i, n);
    yield new ze(e.subscription, r, !0, e.done, {});
  }
}, Ir = class Qt {
  static fromReader(e) {
    const t = [], s = e.copy(), r = qe();
    for (; s.next(); )
      s.getBounds(r) && t.push(s.getIndex());
    const i = ds(9, (n) => (s.setIndex(n), { minX: s.getBoundsXMin(), minY: s.getBoundsYMin(), maxX: s.getBoundsXMax(), maxY: s.getBoundsYMax() }));
    return i.load(t), new Qt(i);
  }
  constructor(e) {
    this._index = e;
  }
  search(e) {
    const t = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this._index.search(t);
  }
};
const Sr = 64;
function wr(u, e, t, s) {
  const r = [u.xmin, u.ymin, u.xmax, u.ymax], i = cs.fromExtent(ls.fromBounds(r, s)), n = re(i, s, O.WGS84, { densificationStep: e * Sr });
  if (!n) return null;
  const a = gt(new F(), n, !1, !1), o = a.coords.filter((p, y) => !(y % 2)), h = a.coords.filter((p, y) => y % 2), c = Math.min(...o), d = Math.min(...h), _ = Math.max(...o), g = Math.max(...h), l = we(c, d, t, O.WGS84), f = we(_, g, t, O.WGS84);
  return l && f ? { bounds: r, geohashBounds: { xLL: l[0], yLL: l[1], xTR: f[0], yTR: f[1] }, level: t } : null;
}
function we(u, e, t, s) {
  if (s.isWebMercator) {
    const n = Ue(u / We.radius), a = n - 360 * Math.floor((n + 180) / 360), o = [0, 0];
    return et(o, 0, Ue(Math.PI / 2 - 2 * Math.atan(Math.exp(-e / We.radius))), a, t), o;
  }
  const r = re({ x: u, y: e }, s, O.WGS84);
  if (!r) return null;
  const i = [0, 0];
  return et(i, 0, r.y, r.x, t), i;
}
function vr(u, e) {
  let t = -90, s = 90, r = -180, i = 180;
  for (let n = 0; n < e; n++) {
    const a = Math.ceil((n + 1) / 2), o = Math.floor((n + 1) / 2), h = 1 - n % 2, c = 30 - (3 * a + 2 * o), d = 30 - (2 * a + 3 * o), _ = 3 * h + 2 * (1 - h), g = 2 * h + 3 * (1 - h), l = 3 * h + 7 * (1 - h) << d, f = (7 * h + 3 * (1 - h) << c & u.geohashX) >> c, p = (l & u.geohashY) >> d;
    for (let y = _ - 1; y >= 0; y--) {
      const b = (r + i) / 2, I = f & 1 << y ? 1 : 0;
      r = (1 - I) * r + I * b, i = (1 - I) * b + I * i;
    }
    for (let y = g - 1; y >= 0; y--) {
      const b = (t + s) / 2, I = p & 1 << y ? 1 : 0;
      t = (1 - I) * t + I * b, s = (1 - I) * b + I * s;
    }
  }
  return [r, t, i, s];
}
function et(u, e, t, s, r) {
  r % 2 && (r += 1);
  let i = 0, n = 0, a = -90, o = 90, h = -180, c = 180;
  for (let d = 0; d < r / 2; d++) {
    for (let _ = 0; _ < 5; _++) {
      const g = (h + c) / 2, l = s > g ? 1 : 0;
      i |= l << 29 - (_ + 5 * d), h = (1 - l) * h + l * g, c = (1 - l) * g + l * c;
    }
    for (let _ = 0; _ < 5; _++) {
      const g = (a + o) / 2, l = t > g ? 1 : 0;
      n |= l << 29 - (_ + 5 * d), a = (1 - l) * a + l * g, o = (1 - l) * g + l * o;
    }
  }
  u[2 * e] = i, u[2 * e + 1] = n;
}
let tt = class ve extends Lt {
  static create(e, t, s, r) {
    const i = zt.create(e), n = new Array(32);
    for (let a = 0; a < n.length; a++) n[a] = null;
    return new ve(i, t, s, r, n);
  }
  constructor(e, t, s, r, i) {
    super(e), this.xNode = t, this.yNode = s, this.depth = r, this.children = i, this._objectIds = /* @__PURE__ */ new Set(), this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._xGeohashTotal = 0, this._yGeohashTotal = 0, this.next = null;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  get containedObjectIds() {
    return this._objectIds;
  }
  get count() {
    return this._count;
  }
  clone() {
    const e = new ve(this._statistics.clone(), this.xNode, this.yNode, this.depth, this.children);
    return e._count = this._count, e._xWorldTotal = this._xWorldTotal, e._yWorldTotal = this._yWorldTotal, e._xGeohashTotal = this._xGeohashTotal, e._yGeohashTotal = this._yGeohashTotal, e.next = this.next, e._objectIds = new Set(this._objectIds), e;
  }
  insert(e, t, s, r, i, n) {
    this._count += 1, this._xWorldTotal += t, this._yWorldTotal += s, this._xGeohashTotal += r, this._yGeohashTotal += i, this._statistics.insert(e, n), this._objectIds.add(e.getObjectId());
  }
  merge(e) {
    if (e._count !== 0) {
      this._count += e._count, this._xWorldTotal += e._xWorldTotal, this._yWorldTotal += e._yWorldTotal, this._xGeohashTotal += e._xWorldTotal, this._yGeohashTotal += e._yWorldTotal, this._statistics.merge(e._statistics);
      for (const t of e._objectIds.values()) this._objectIds.add(t);
    }
  }
  getCentroid(e) {
    throw new Error("getCentroid not supported for GeohashNode");
  }
  getGeometry(e, t) {
    const s = this._getLngLatBounds(), [r, i, n, a] = s, o = re({ rings: [[[r, i], [r, a], [n, a], [n, i], [r, i]]] }, O.WGS84, e), h = gt(new F(), o, !1, !1);
    return t != null ? G(new F(), h, !1, !1, "esriGeometryPolygon", t, !1, !1) : h;
  }
  getGeometricCentroid(e, t) {
    const s = this._getLngLatBounds(), [r, i, n, a] = s, o = re({ x: (r + n) / 2, y: (i + a) / 2 }, O.WGS84, e), h = _s(new F(), o);
    return t != null ? G(new F(), h, !1, !1, "esriGeometryPoint", t, !1, !1) : h;
  }
  getAttributes() {
    const e = { aggregateId: this.id };
    for (const t of this._statistics.values()) e[t.field.name] = t.value;
    return e.aggregateCount = this._count, e;
  }
  find(e, t, s, r, i, n) {
    if (r >= s) return this;
    const a = 1 - r % 2, o = 3 * a + 2 * (1 - a), h = 2 * a + 3 * (1 - a), c = 30 - i - o, d = 30 - n - h, _ = ((e & 7 * a + 3 * (1 - a) << c) >> c) + ((t & 3 * a + 7 * (1 - a) << d) >> d) * (8 * a + 4 * (1 - a)), g = this.children[_];
    return g == null ? null : g.find(e, t, s, r + 1, i + o, n + h);
  }
  _getLngLatBounds() {
    const e = this.depth, t = Math.ceil(e / 2), s = Math.floor(e / 2), r = 30 - (3 * t + 2 * s), i = 30 - (2 * t + 3 * s), n = this.xNode << r, a = this.yNode << i;
    return vr({ geohashX: n, geohashY: a }, this.depth);
  }
};
class xr {
  constructor(e) {
    this._fields = e, this._size = 0, this._depth = 0, this._root = tt.create(this._fields, 0, 0, 0);
  }
  destroy() {
  }
  get size() {
    return this._size;
  }
  get depth() {
    return this._depth;
  }
  find(e, t, s) {
    return this._root.find(e, t, s, 0, 0, 0);
  }
  insert(e, t, s, r, i, n, a) {
    let o = this._root, h = 0, c = 0, d = 0;
    for (; o !== null; ) {
      if (o.insert(e, t, s, r, i, a), h >= n) return;
      const _ = Math.ceil((h + 1) / 2), g = Math.floor((h + 1) / 2), l = 1 - h % 2, f = 30 - (3 * _ + 2 * g), p = 30 - (2 * _ + 3 * g), y = (r & 7 * l + 3 * (1 - l) << f) >> f, b = (i & 3 * l + 7 * (1 - l) << p) >> p, I = y + b * (8 * l + 4 * (1 - l));
      c = c << 3 * l + 2 * (1 - l) | y, d = d << 2 * l + 3 * (1 - l) | b, o.children[I] == null && (o.children[I] = tt.create(this._fields, c, d, h + 1), this._depth = Math.max(this._depth, h + 1), this._size += 1), h += 1, o = o.children[I];
    }
  }
  putBins(e, t) {
    for (const s of this.getNodes(t)) {
      const r = e.get(s.id);
      r ? r.merge(s) : e.set(s.id, s.clone());
    }
  }
  getNodes(e) {
    const t = [], { geohashBounds: s, level: r } = e;
    let i = this._root;
    for (; i !== null; ) {
      const n = i.depth, a = i.xNode, o = i.yNode;
      if (n >= r) {
        t.push(i), i = i.next;
        continue;
      }
      const h = Math.ceil((n + 1) / 2), c = Math.floor((n + 1) / 2), d = 1 - n % 2, _ = 30 - (3 * h + 2 * c), g = 30 - (2 * h + 3 * c), l = ~((1 << _) - 1), f = ~((1 << g) - 1), p = (s.xLL & l) >> _, y = (s.yLL & f) >> g, b = (s.xTR & l) >> _, I = (s.yTR & f) >> g, x = a << 3 * d + 2 * (1 - d), S = o << 2 * d + 3 * (1 - d), w = x + 8 * d + 4 * (1 - d), v = S + 4 * d + 8 * (1 - d), C = Math.max(x, p), E = Math.max(S, y), q = Math.min(w, b), T = Math.min(v, I);
      let $ = null, R = null;
      for (let A = E; A <= T; A++) for (let de = C; de <= q; de++) {
        const ts = de - x + (A - S) * (8 * d + 4 * (1 - d)), B = i.children[ts];
        B && ($ || ($ = B, $.next = i.next), R && (R.next = B), R = B, B.next = i.next);
      }
      i = $ || i.next;
    }
    return t;
  }
}
let kr = class extends Yt {
  constructor(e) {
    super(e), this._tree = new xr(this._options.fields);
  }
  put(e) {
    throw new Error("Geohash tree does not support put");
  }
  putBounded(e, t, s) {
    const { geohashLevel: r, spatialReference: i } = this._options, n = wr(t, s, r, i);
    n != null && this._tree.putBins(e, n);
  }
  _insert(e, t, s, r) {
    const { geohashLevel: i, spatialReference: n } = this._options, a = we(t, s, i, n);
    a && this._tree.insert(e, t, s, a[0], a[1], i, r);
  }
}, Fr = class xe extends Ee {
  static from(e, t) {
    return new xe(e.copy(), t);
  }
  constructor(e, t) {
    super(e.metadata), this._currentIndex = -1, this._displayTranslationX = 0, this._displayTranslationY = 0, this._displayScaleX = 1, this._displayScaleY = 1, this._reader = e, this._indices = t, this._isPoint = e.geometryType === "esriGeometryPoint";
  }
  setTransformForDisplay(e) {
    const t = this._reader.getInTransform();
    if (t == null) {
      const [d, _] = e.scale, [g, l] = e.translate;
      return this._displayTranslationX = -g / d, this._displayScaleX = 1 / d, this._displayTranslationY = l / _, this._displayScaleY = 1 / -_, void (this._displayTransform = e);
    }
    const [s, r] = t.scale, [i, n] = t.translate, [a, o] = e.scale, [h, c] = e.translate;
    if (this._displayScaleX = s / a, this._displayTranslationX = (i - h) / a, this._displayScaleY = r / o, this._displayTranslationY = (-n + c) / o, !this._isPoint && t) throw new Error("InternalError: Relative transformations not supported for non-point features");
    this._displayTransform = e;
  }
  getInTransform() {
    return this._reader.getInTransform();
  }
  get fields() {
    return this._reader.fields;
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new xe(this._reader.copy(), this._indices);
    return e._currentIndex = this._currentIndex, e._displayTransform = this._displayTransform, e._displayTranslationX = this._displayTranslationX, e._displayTranslationY = this._displayTranslationY, e._displayScaleX = this._displayScaleX, e._displayScaleY = this._displayScaleY, e;
  }
  get contextTimeZone() {
    return this._reader.contextTimeZone;
  }
  set contextTimeZone(e) {
    this._reader.contextTimeZone = e;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), !0);
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); ) ;
    return this._currentIndex < this._indices.length;
  }
  readXForDisplay() {
    return this._reader.readXForDisplay() * this._displayScaleX + this._displayTranslationX;
  }
  readYForDisplay() {
    return this._reader.readYForDisplay() * this._displayScaleY + this._displayTranslationY;
  }
  readGeometryForDisplay() {
    const e = this._reader.readGeometryForDisplay();
    if (!this._displayTransform) return e;
    const t = new F();
    return G(t, e, this.hasZ, this.hasM, this.geometryType, this._displayTransform), t.deltaDecode();
  }
  readCentroidForDisplay() {
    const e = this._reader.readCentroidForDisplay()?.clone();
    if (e) {
      const [t, s] = e.coords;
      e.coords[0] = t * this._displayScaleX + this._displayTranslationX, e.coords[1] = s * this._displayScaleY + this._displayTranslationY;
    }
    return e;
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  readAttribute(e, t = !1) {
    return this._reader.readAttribute(e, t);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e) {
    return this._reader.joinAttributes(e);
  }
  getBounds(e) {
    return this._reader.getBounds(e);
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e) {
    return this._reader.setDisplayId(e);
  }
  setIndex(e) {
    return this._reader.setIndex(e);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readXWorldSpace() {
    return this._reader.readXWorldSpace();
  }
  readYWorldSpace() {
    return this._reader.readYWorldSpace();
  }
  _readX() {
    return this._reader.readXForDisplay();
  }
  _readY() {
    return this._reader.readYForDisplay();
  }
  _readServerCentroid() {
    return this._reader._readServerCentroid();
  }
  readLegacyFeatureForDisplay() {
    const e = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e = this.readGeometryForDisplay();
    return ps(e, this.geometryType, !1, !1);
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readGeometryWorldSpace() {
    return this._reader.readGeometryWorldSpace();
  }
  _readGeometry() {
    return this._reader._readGeometry();
  }
  _readAttribute(e, t) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e) {
    return this._reader.field(e);
  }
  hasField(e) {
    return this._reader.hasField(e);
  }
  setField(e, t) {
    return this._reader.setField(e, t);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e = !1) {
    return this._reader.castToText(e);
  }
}, X = class {
  size() {
    return this.reader.getSize();
  }
  get fields() {
    return this.reader.fields;
  }
  invalidate() {
    this._aggregateIndex = null, this._aggregateIndexHash = null, this._spatialIndex = null;
  }
  queryFeaturesInBounds(e) {
    const t = this._getSpatialIndex().search(e);
    return Fr.from(this.reader, t);
  }
  getAggregateIndex(e) {
    const t = JSON.stringify(e);
    if (t !== this._aggregateIndexHash) {
      switch (this._aggregateIndexHash = t, e.type) {
        case "grid":
          this._aggregateIndex = new gr(e);
          break;
        case "geohash":
          this._aggregateIndex = new kr(e);
      }
      this._aggregateIndex.insert(this.reader, this.isTiled);
    }
    return this._aggregateIndex;
  }
  _getSpatialIndex() {
    return this._spatialIndex || (this._spatialIndex = Ir.fromReader(this.reader)), this._spatialIndex;
  }
}, ke = class extends X {
  constructor(e, t) {
    super(), this.metadata = e, this.removed = /* @__PURE__ */ new Set(), this.overriddenIds = /* @__PURE__ */ new Set(), this._features = [], this.chunkId = t, this.normalizedChunkId = t;
  }
  get reader() {
    return M.fromOptimizedFeatures(this._features, this.metadata);
  }
  get queryInfo() {
    return {};
  }
  get first() {
    return !1;
  }
  get end() {
    return !1;
  }
  get isTiled() {
    return !1;
  }
  applyOverrides(e) {
    super.invalidate();
    const { reader: t, removed: s } = e, r = [], i = /* @__PURE__ */ new Set(), n = t.getCursor(), a = new Set(s);
    for (this.overriddenIds.clear(); n.next(); ) {
      const o = n.readOptimizedFeatureWorldSpace(), h = o.objectId;
      r.push(o), i.add(h), this.overriddenIds.add(h), this.removed.delete(h);
    }
    for (const o of this._features) {
      const h = o.objectId;
      a.has(h) || i.has(h) || (r.push(o), this.overriddenIds.add(h));
    }
    this._features = r;
    for (const o of i.values()) this.removed.delete(o);
    for (const o of s) this.removed.add(o), this.overriddenIds.add(o);
  }
  removeOverrides(e) {
    this.invalidate();
    const t = e.reader.getCursor(), s = /* @__PURE__ */ new Set();
    for (; t.next(); ) {
      const r = t.getObjectId();
      this.overriddenIds.has(r) && (s.add(r), this.overriddenIds.delete(r));
    }
    this._features = this._features.filter((r) => !s.has(r.objectId));
  }
  getTileReader(e) {
    if (!this._features.length) return null;
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
}, Cr = class extends Le {
}, Tr = class extends Pt {
  constructor(e, t, s) {
    super(e, t), this._timeZone = s, this.handledChunks = /* @__PURE__ */ new Set(), this.handledChunksForIdCreation = /* @__PURE__ */ new Set(), this.handledChunksForAttributeData = /* @__PURE__ */ new Set(), this._streamLayerDeferredObjectIdsToRemove = [];
  }
  destroy() {
    super.destroy();
    for (const e of this._source.chunks()) this._cleanupChunkIds(e);
  }
  invalidateAttributeData() {
    this.handledChunksForAttributeData.clear();
  }
  onSubscribe(e) {
    super.onSubscribe(e), this._evalOptions = e.tile.createArcadeEvaluationOptions(this._timeZone);
  }
  createState(e) {
    return new Cr(e);
  }
  get aggregateQueryEngine() {
    return null;
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((n) => [t(n), n])), i = [];
    for (const n of this._source.chunks()) {
      const a = n.reader.getCursor();
      for (; a.next(); ) {
        const o = a.getObjectId(), h = a.getDisplayId(), c = r.get(o);
        if (c != null) {
          const d = s(h, c, o);
          i.push(d), r.delete(o);
        }
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [];
    for (const i of this._source.chunks()) {
      const n = i.reader.getCursor();
      for (; n.next(); ) {
        const a = n.getObjectId(), o = n.getDisplayId();
        t.has(o) && !s.has(a) && (r.push({ ...n.readLegacyFeatureWorldSpace(), displayId: o }), s.add(a));
      }
    }
    return { features: r, aggregates: [] };
  }
  async *applyLocalEdit(e) {
    const t = [], s = e.reader.getCursor();
    for (; s.next(); ) {
      const a = s.getObjectId();
      t.push(a);
      const o = this._attributeStore.createDisplayIdForObjectId(a);
      s.setDisplayId(o), this._attributeStore.setAttributeData(o, s, this._evalOptions);
    }
    const r = this.getDisplayIds(t), i = this.getDisplayIds(e.removed), n = new ke(this._source.metadata, "localEdit");
    n.applyOverrides(e), this.handledChunks.add(n.chunkId), this.handledChunksForAttributeData.add(n.chunkId), this.handledChunksForIdCreation.add(n.chunkId);
    for (const a of this._sendStates.values()) a.handledChunks.add(n.chunkId), yield new me(a.subscription, null, r, !1, n.queryInfo);
    for (const a of this._sendStates.values()) {
      const o = n.getTileReader(a.subscription.tile);
      yield new me(a.subscription, o, i, !1, n.queryInfo);
    }
    for (const a of e.removed) this._attributeStore.releaseDisplayIdForObjectId(a);
  }
  async *updateChunks() {
    if (this._source.chunks().length) {
      await this._updateAttributeData();
      for (const e of this._sendStates.values()) yield* this._update(e);
    }
  }
  removeChunks(e) {
    for (const t of e) this.handledChunks.delete(t.chunkId), this.handledChunksForAttributeData.delete(t.chunkId), this._cleanupChunkIds(t);
  }
  afterUpdateChunks() {
    for (const e of this._streamLayerDeferredObjectIdsToRemove) this._attributeStore.releaseDisplayIdForObjectId(e);
    this._streamLayerDeferredObjectIdsToRemove = [];
  }
  _cleanupChunkIds(e) {
    if (this.handledChunksForIdCreation.has(e.chunkId)) {
      const t = e.reader.getCursor();
      for (; t.next(); ) {
        const s = t.getObjectId();
        this._source.isStream ? this._streamLayerDeferredObjectIdsToRemove.push(s) : this._attributeStore.releaseDisplayIdForObjectId(s);
      }
      this.handledChunksForIdCreation.delete(e.chunkId);
    }
  }
  async _updateAttributeData() {
    for (const e of this._source.chunks()) {
      const { chunkId: t, reader: s } = e;
      if (!this.handledChunksForIdCreation.has(t)) {
        this.handledChunksForIdCreation.add(t);
        const r = s.getCursor();
        for (; r.next(); ) {
          const i = this._attributeStore.createDisplayIdForObjectId(r.getObjectId());
          r.setDisplayId(i);
        }
      }
    }
    for (const e of this._source.chunks()) if (!this.handledChunksForAttributeData.has(e.chunkId)) {
      this.handledChunksForAttributeData.add(e.chunkId);
      const t = e.reader.getCursor();
      for (; t.next(); ) {
        const s = t.getDisplayId();
        this._attributeStore.setAttributeData(s, t, this._evalOptions);
      }
    }
  }
  *_update(e) {
    const { subscription: t, handledChunks: s } = e;
    for (const r of this._source.chunks()) {
      const { chunkId: i } = r;
      if (s.has(i)) continue;
      s.add(i);
      const n = r.getTileReader(t.tile);
      n && (yield new ze(e.subscription, n, !1, r.end, r.queryInfo));
    }
  }
}, Mr = class {
  constructor(e, t) {
    this._connection = e, this._source = t, this._version = 1, this._registry = new Ws(), this._proxy = new Ps({ fetch: (s, r) => this._connection.layerView.fetch(s, r), fetchDictionary: (s, r) => this._connection.layerView.fetchDictionary(s, r) }), this._attributeStore = new js({ isLocal: !1, update: (s) => Ce(this._connection.container.updateAttributeView(s)) });
  }
  destroy() {
    this._proxy.destroy(), this._strategy?.destroy(), this._attributeStore.destroy();
  }
  get aggregateQueryEngine() {
    return this._strategy?.aggregateQueryEngine;
  }
  getDisplayFeatures(e) {
    return this._strategy ? this._strategy.getDisplayFeatures(e) : { features: [], aggregates: [] };
  }
  getFeatureObjectIdsForAggregate(e) {
    return this._strategy ? this._strategy.getFeatureObjectIdsForAggregate(e) : [];
  }
  onSubscribe(e) {
    this._strategy?.onSubscribe(e);
  }
  onUnsubscribe(e) {
    this._strategy?.onUnsubscribe(e);
  }
  async update(e, t, s, r, i) {
    const n = e.processor, a = Z(this._schema?.storage, n.storage), o = Z(this._schema?.mesh.properties, n.mesh.properties), h = Z(this._schema?.mesh.factory, n.mesh.factory), c = Z(this._schema?.mesh.strategy, n.mesh.strategy), d = o || h || c;
    if (!(a || d) && !r) return;
    m("esri-2d-update-debug") && console.debug(`Version[${this._version}] SymbolProcessor.update`, { changes: ft(this._schema, n), schema: n }), this._schema = n;
    const _ = O.fromJSON(this._source.service.outSpatialReference), g = new Oe({ fields: this._source.metadata.fieldsIndex, spatialReference: _ });
    if (await this._attributeStore.update(n.storage, g, this._source.metadata, _, t), this._strategy?.invalidateAttributeData(), !r && !d) return;
    (c || o) && await this._updateStrategy(n.mesh.strategy, _, i, n.mesh.properties.timeZone), this._updateSortKey(g, "sortKey" in n.mesh.properties ? n.mesh.properties.sortKey : null);
    const l = new rr(g, this._proxy, s, this._registry);
    return (h || n.mesh.factory.symbology.type === "dictionary") && (this._factory = await sr.create(l, n.mesh.factory)), this._invalidate(), this._version = t, this._connection.container.updateRenderState(this._version);
  }
  async applyLocalEdit(e) {
    if (!this._strategy) return;
    const t = this._strategy.applyLocalEdit(e);
    for await (const s of t) try {
      await this._process(s);
    } catch {
    }
  }
  async updateChunks() {
    await this._doUpdateChunks(), this._strategy?.afterUpdateChunks();
  }
  async removeChunks(e) {
    this._strategy?.removeChunks(e), this._attributeStore.incrementDisplayIdGeneration();
  }
  updateHighlight({ highlights: e }) {
    if (!this._strategy) return void this._attributeStore.setHighlight(e.map(({ objectId: s, highlightFlags: r }) => ({ objectId: s, highlightFlags: r, displayId: -1 })), e);
    const t = this._strategy.displayMap(e, ({ objectId: s }) => s, (s, { highlightFlags: r }, i) => ({ objectId: i, displayId: s, highlightFlags: r }));
    this._attributeStore.setHighlight(t, e);
  }
  async _doUpdateChunks() {
    if (!this._strategy) return;
    const e = this._strategy.updateChunks(), t = [], s = /* @__PURE__ */ new Map();
    for await (const r of e) {
      let i = s.get(r.id);
      i == null && (i = new ir({ concurrency: 16, process: (a) => this._process(a) }), s.set(r.id, i));
      const n = i.push(r).catch((a) => $e(a));
      t.push(n);
    }
    try {
      await Promise.all(t);
    } catch {
    }
    m("esri-2d-update-debug") && console.log("SendUpdates"), this._attributeStore.sendUpdates(), m("esri-2d-update-debug") && console.log("SendUpdates.await");
  }
  async _updateStrategy(e, t, s, r) {
    switch (this._strategy?.destroy(), e.type) {
      case "feature":
        this._strategy = new Tr(this._source, this._attributeStore, r);
        break;
      case "binning":
        this._strategy = await ar.create(e, t, this._source, this._attributeStore, r);
        break;
      case "cluster":
        this._strategy = await br.create(this._connection, e, t, this._source, this._attributeStore, r);
    }
    for (const i of s) this._strategy.onSubscribe(i);
  }
  async _updateSortKey(e, t) {
    if (this._sortInfo = yt(this._sortInfo?.computed), t != null) {
      const s = t.byRenderer ? null : await e.createComputedField(t);
      this._sortInfo = { ...t, computed: s };
    }
  }
  _invalidate() {
    this._strategy && this._strategy.invalidate();
  }
  async _process(e) {
    const t = e.subscription;
    if (m("esri-2d-update-debug")) {
      const o = t.tile;
      console.debug(`Version[${this._version}] Tile[${o.key.id}, end=${e.end}] Processor._process`);
    }
    await this._fetchResources(e), V(t.signal);
    const s = await this._write(e, t.tile.createArcadeEvaluationOptions(this._schema?.mesh.properties.timeZone)), r = t.tile.tileInfoView.tileInfo.isWrappable, { message: i, transferList: n } = s.serialize(r), a = { objectIdMap: null, inner: e.createMessage(i, this._version, this._attributeStore.epoch) };
    if (this._schema?.mesh.properties.returnMeshObjectId) {
      a.objectIdMap = {};
      const o = e.reader?.getCursor();
      if (o) for (; o.next(); ) a.objectIdMap[o.getDisplayId()] = o.getObjectId();
    }
    if (V(t.signal), await this._connection.container.onMessage(a, { signal: t.signal, transferList: n }), this._attributeStore.sendUpdates(), m("esri-2d-update-debug")) {
      const o = t.tile;
      console.debug(`Version[${this._version}] Tile[${o.key.id}, end=${e.end}] Processor._process.await`);
    }
  }
  async _fetchResources(e) {
    await this._fetchMatcherResources(e), await this._fetchWriterResources(e);
  }
  async _fetchMatcherResources(e) {
    if (e.reader) return this._factory.enqueueMatcherRequests(this._proxy, e.reader);
  }
  async _fetchWriterResources(e) {
    if (!e.reader) return;
    const t = e.reader.getCursor(), s = e.subscription.tile.createArcadeEvaluationOptions(this._schema.mesh.properties.timeZone);
    for (; t.next(); ) this._factory.enqueueWriterRequests(this._proxy, t, s);
    await this._proxy.fetchEnqueuedResources();
  }
  async _write(e, t) {
    const s = e.subscription.tile, r = e.reader?.getCursor(), i = r?.getSize() ?? 0, n = s.tileInfoView.tileInfo.isWrappable, a = new Xs(s.key, this._strategy.enablePixelBuffering, n, i);
    if (!r) return a;
    const o = s.createArcadeEvaluationOptions(this._schema.mesh.properties.timeZone);
    for (; r.next(); ) {
      const h = this._getSortKeyValue(r, t);
      a.entityStart(r.getDisplayId(), h), this._factory.write(a, this._proxy, r, o, s.level), a.entityEnd();
    }
    return a;
  }
  _getSortKeyValue(e, t) {
    if (!this._sortInfo) return 0;
    const { computed: s, order: r, byRenderer: i } = this._sortInfo, n = i ? this._factory.getSortKey(e, t) : s?.read(e, t);
    return n == null || isNaN(n) ? 0 : n * (r === "asc" ? -1 : 1);
  }
}, qr = class Zt {
  static from(e) {
    let t = 0, s = 0, r = 0;
    return e.forEach((i) => {
      const n = i._readGeometry();
      n && (s += n.isPoint ? 1 : n.lengths.reduce((a, o) => a + o, 0), r += n.isPoint ? 1 : n.lengths.length, t += 1);
    }), new Zt(t, s, r);
  }
  constructor(e, t, s) {
    this.featureCount = e, this.vertexCount = t, this.ringCount = s;
  }
  toJSON() {
    return { featureCount: this.featureCount, ringCount: this.featureCount, vertexCount: this.featureCount };
  }
};
const _e = 4;
function $r(u, e, t) {
  const s = u.orderByFields ?? t.objectIdField + " ASC", r = u.source, i = { returnCentroid: !(r !== null && typeof r == "object" && "path" in r && fs(r.path)) && t.geometryType === "esriGeometryPolygon", returnGeometry: !0, timeReferenceUnknownClient: t.timeReferenceUnknownClient ?? void 0, outSpatialReference: O.fromJSON(u.outSpatialReference), orderByFields: [s], where: e.mutable.dataFilter.definitionExpression ?? "1=1", outFields: e.mutable.availableFields };
  if (e.type === "feature") {
    const { gdbVersion: n, historicMoment: a, timeExtent: o } = e.mutable.dataFilter;
    return { ...i, gdbVersion: n, historicMoment: a ? new Date(a) : null, timeExtent: o ? ys.fromJSON(o) : null, outFields: e.mutable.availableFields };
  }
  return i;
}
let Er = class Ht {
  static fromSchema(e, t, s) {
    const r = t.type === "feature" ? t.mutable.dataFilter.queryScaleRanges : [];
    return new Ht($r(e, t, s), r, s.subtypeField, t.mutable.dataFilter.customParameters, s.geometryType, e.queryMetadata);
  }
  constructor(e, t, s, r, i, n) {
    this._queryParams = e, this._queryScaleRanges = t, this._subtypeField = s, this._customParameters = r, this._geometryType = i, this._queryMetadata = n;
  }
  get pageSize() {
    if (this._queryMetadata == null) throw new Error("InternalError: Service does not support paged queries");
    const e = this._queryMetadata.supportsMaxRecordCountFactor ? _e : null, t = (this._queryMetadata.maxRecordCount ?? 8e3) * (e ?? 1);
    return Math.min(8e3, t);
  }
  updateHistoricMoment(e) {
    this._queryParams.historicMoment = e;
  }
  updateFields(e) {
    this._queryParams.outFields = e;
  }
  createPatchFieldsQuery(e, t) {
    if (!t.getSize()) return null;
    const s = e.clone();
    if (this._queryParams.outFields[0] === "*") {
      if ((s.outFields ?? [])[0] === "*") return null;
      s.outFields = this._queryParams.outFields;
    } else {
      const r = new Set(this._queryParams.outFields), i = [];
      for (const n of r) t.hasField(n) || i.push(n);
      if (i.length === 0) return null;
      s.outFields = i;
    }
    return s.returnGeometry = !1, s.returnCentroid = !1, s.quantizationParameters = null, s.cacheHint = !0, { inner: s, customParameters: this._customParameters };
  }
  createQuery(e = {}) {
    if (!this._queryParams) throw new Error("InternalError: queryInfo should be defined");
    return { inner: new mt({ ...this._queryParams, ...e }), customParameters: this._customParameters };
  }
  createTileQuery(e, t) {
    if (this._queryMetadata == null) throw new Error("InternalError: Service does not support tile queries");
    const s = this.createQuery(t), r = s.inner;
    if (this._queryScaleRanges.length) {
      const i = this._queryScaleRanges.filter((n) => (!n.minScale || n.minScale >= e.maxScale) && (!n.maxScale || n.maxScale <= e.minScale)).map((n) => n.subtypeCode);
      if (i.length) {
        const n = `${this._subtypeField} IN (${i})`;
        r.where = gs(r.where, n);
      }
    }
    if (r.quantizationParameters = t.quantizationParameters ?? e.getQuantizationParameters(), r.resultType = "tile", r.geometry = e.extent, this._queryMetadata.supportsQuantization ? this._geometryType === "esriGeometryPolyline" && (r.maxAllowableOffset = e.resolution * m("feature-polyline-generalization-factor")) : this._geometryType !== "esriGeometryPolyline" && this._geometryType !== "esriGeometryPolygon" || (r.maxAllowableOffset = e.resolution, this._geometryType === "esriGeometryPolyline" && (r.maxAllowableOffset *= m("feature-polyline-generalization-factor"))), r.defaultSpatialReferenceEnabled = this._queryMetadata.supportsDefaultSpatialReference, r.compactGeometryEnabled = this._queryMetadata.supportsCompactGeometry, this._queryMetadata.supportsMaxRecordCountFactor && (r.maxRecordCountFactor = _e), m("esri-tiles-debug")) {
      const i = e.id.replaceAll("/", ".");
      s.customParameters = s.customParameters ? { ...s.customParameters, tileId: i } : { tileId: i };
    }
    return s;
  }
  createPagedTileQuery(e, t) {
    const s = this.pageSize;
    return this.createTileQuery(e, { start: s * t, num: s, returnExceededLimitFeatures: !0 });
  }
  createPagedQuery(e) {
    const t = this.pageSize;
    return this.createQuery({ start: t * e, num: t, returnExceededLimitFeatures: !0, maxRecordCountFactor: _e });
  }
};
const Or = 2500;
let te = class extends It {
  constructor(e) {
    super(), this._connection = e, this._enabledEventTypes = /* @__PURE__ */ new Set(), this._updateInfo = { websocket: 0, client: 0 }, this._lastTime = performance.now(), this._queuedCommands = [], this.addHandles([fe(() => this._strategy?.connectionStatus ?? "disconnected", (t) => {
      this._layerView.setProperty({ propertyName: "pipelineConnectionStatus", value: t });
    }, { initial: !0 }), fe(() => this._strategy?.errorString || null, (t) => this._layerView.setProperty({ propertyName: "pipelineErrorString", value: t }), { initial: !0 })]);
  }
  destroy() {
    this._strategy = null, this.removeAllHandles();
  }
  get _layerView() {
    return this._connection.layerView;
  }
  set strategy(e) {
    this._strategy == null && this._resetUpdateInfo(performance.now());
    const t = "event-handles";
    this.removeHandles(t), e != null && (this.addHandles([e.events.on("data-received", (s) => this._onFeature(s)), e.events.on("message-received", (s) => this._onWebSocketMessage(s)), e.events.on("features-updated", (s) => this._onUpdate(s)), e.events.on("tick", () => this._onTick())], t), this._queuedCommands.forEach((s) => s(e)), this._queuedCommands = []), this._strategy = e;
  }
  updateCustomParameters(e) {
    e != null && this._callOrEnqueue((t) => t.updateCustomParameters(e));
  }
  sendMessageToSocket(e) {
    this._callOrEnqueue((t) => t.sendMessageToSocket(e));
  }
  sendMessageToClient(e) {
    this._callOrEnqueue((t) => t.sendMessageToClient(e));
  }
  enableEvent(e, t) {
    t ? this._enabledEventTypes.add(e) : this._enabledEventTypes.delete(e);
  }
  disconnect() {
    this._strategy?.disconnect();
  }
  connect() {
    this._strategy?.connect();
  }
  clear() {
    this._strategy?.clear();
  }
  _onWebSocketMessage(e) {
    this._enabledEventTypes.has("message-received") && this._layerView.emitEvent({ name: "message-received", event: e });
  }
  _onFeature(e) {
    this._updateInfo.websocket++, this._enabledEventTypes.has("data-received") && this._layerView.emitEvent({ name: "data-received", event: { attributes: e.attributes, centroid: e.centroid, geometry: e.geometry } });
  }
  _onUpdate(e) {
    this._updateInfo.client += e;
  }
  _onTick() {
    const e = performance.now(), t = e - this._lastTime;
    if (t > Or) {
      const s = Math.round(this._updateInfo.client / (t / 1e3)), r = Math.round(this._updateInfo.websocket / (t / 1e3));
      this._resetUpdateInfo(e), this._layerView.emitEvent({ name: "update-rate", event: { client: s, websocket: r } });
    }
  }
  _resetUpdateInfo(e) {
    this._lastTime = e, this._updateInfo.client = 0, this._updateInfo.websocket = 0;
  }
  _callOrEnqueue(e) {
    this._strategy != null ? e(this._strategy) : this._queuedCommands.push(e);
  }
};
W([K()], te.prototype, "_strategy", void 0), te = W([bt("esri.views.2d.layers.features.sources.StreamMessenger")], te);
let Jt = class {
  constructor(e) {
    this._store = e, this._controller = new AbortController();
  }
  destroy() {
    this._controller.abort();
  }
  get _options() {
    return { signal: this._controller.signal };
  }
  unsafeSetQueryHistoricMoment(e) {
    throw new Error("InternalError: LoadStrategy does not support query info");
  }
  async queryOverride(e) {
    throw new Error("InternalError: LoadStrategy does not support fetching");
  }
  async queryByObjectId(e) {
    throw new Error("InternalError: LoadStrategy does not support fetching");
  }
};
const pe = 268435455;
let Rr = class {
  constructor() {
    this.hasFeatures = !1, this.exceededTransferLimit = !1, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
};
function Ar(u, e, t = !1) {
  const h = u.asUnsafe(), c = h.pos(), d = new Rr();
  let _ = 0, g = 0;
  const l = 1, f = 2, p = 4, y = 3;
  let b = null, I = null, x = null, S = !1;
  const w = [];
  for (; h.next(); ) switch (h.tag()) {
    case 1:
      b = h.getString();
      break;
    case 3:
      I = h.getString();
      break;
    case 12:
      x = h.processMessage(bs);
      break;
    case 9:
      if (d.exceededTransferLimit = h.getBool(), d.exceededTransferLimit) {
        d.offsets.geometry = t ? new Float64Array(8e3) : new Int32Array(8e3), d.centroid = t ? new Float64Array(16e3) : new Int32Array(16e3);
        for (let C = 0; C < d.centroid.length; C++) d.centroid[C] = pe;
      }
      break;
    case 13: {
      const C = h.processMessage(ms);
      C.index = _++, w.push(C);
      break;
    }
    case 15: {
      const C = h.getLength(), E = h.pos() + C;
      if (!d.exceededTransferLimit) {
        const T = d.offsets.geometry, $ = d.centroid;
        T.push(0), $.push(pe), $.push(pe);
      }
      !S && d.exceededTransferLimit && (S = !0, d.offsets.attributes = t ? new Float64Array(8e3 * _) : new Uint32Array(8e3 * _));
      let q = g * _;
      for (; h.pos() < E && h.next(); ) switch (h.tag()) {
        case l: {
          S ? d.offsets.attributes[q++] = h.pos() : d.offsets.attributes.push(h.pos());
          const T = h.getLength();
          h.skipLen(T);
          break;
        }
        case f:
          if (e) {
            const T = h.getLength(), $ = h.pos() + T;
            for (; h.pos() < $ && h.next(); ) switch (h.tag()) {
              case y: {
                h.getUInt32();
                const R = h.getSInt64(), A = h.getSInt64();
                d.centroid[2 * g] = R, d.centroid[2 * g + 1] = A;
                break;
              }
              default:
                h.skip();
            }
          } else {
            d.offsets.geometry[g] = h.pos();
            const T = h.getLength();
            d.vertexCount += T, h.skipLen(T);
          }
          break;
        case p: {
          const T = h.getLength(), $ = h.pos() + T;
          for (; h.pos() < $ && h.next(); ) switch (h.tag()) {
            case y: {
              h.getUInt32();
              const R = h.getSInt64(), A = h.getSInt64();
              d.centroid[2 * g] = R, d.centroid[2 * g + 1] = A;
              break;
            }
            default:
              h.skip();
          }
          break;
        }
        default:
          h.skip();
      }
      g++, d.hasFeatures = !0;
      break;
    }
    default:
      h.skip();
  }
  const v = b || I;
  if (!v) throw new j("FeatureSet has no objectId or globalId field name");
  return d.fields = new _t(w), d.featureCount = g, d.fieldCount = _, d.objectIdFieldIndex = d.fields.get(v)?.index, d.transform = x, d.displayIds = new Uint32Array(d.featureCount), d.groupIds = new Uint16Array(d.featureCount), h.move(c), d;
}
const Pr = !0, st = 268435455, rt = 128, it = 128e3, L = { small: { delta: new Int32Array(rt), decoded: new Int32Array(rt) }, large: { delta: new Int32Array(it), decoded: new Int32Array(it) } };
function nt(u) {
  return u <= L.small.delta.length ? L.small : (u <= L.large.delta.length || (L.large.delta = new Int32Array(Math.round(1.25 * u)), L.large.decoded = new Int32Array(Math.round(1.25 * u))), L.large);
}
function jr(u) {
  try {
    const t = new Ss(new Uint8Array(u), new DataView(u));
    for (; t.next(); ) {
      if (t.tag() === 2) return Dr(t.getMessage());
      t.skip();
    }
  } catch (e) {
    const t = new j("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: e });
    ws.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(t);
  }
  return null;
}
function Dr(u) {
  for (; u.next(); ) {
    if (u.tag() === 1) return u.getMessage();
    u.skip();
  }
  return null;
}
function Lr(u) {
  const c = u.getLength(), d = u.pos() + c;
  for (; u.pos() < d && u.next(); ) switch (u.tag()) {
    case 1:
      return u.getString();
    case 2:
      return u.getFloat();
    case 3:
      return u.getDouble();
    case 4:
      return u.getSInt32();
    case 5:
      return u.getUInt32();
    case 6:
      return u.getInt64();
    case 7:
      return u.getUInt64();
    case 8:
      return u.getSInt64();
    case 9:
      return u.getBool();
    default:
      return u.skip(), null;
  }
  return null;
}
function zr(u, e, t, s, r, i) {
  return 0.5 * Math.abs(u * s + t * i + r * e - u * i - t * e - r * s);
}
function ge(u, e, t, s) {
  return u * s - t * e === 0 && u * t + e * s > 0;
}
let Ur = class Fe extends Ee {
  static fromBuffer(e, t, s = !1) {
    const r = t.geometryType, i = jr(e), n = Ar(i, r === "esriGeometryPoint", s);
    return new Fe(i, n, t);
  }
  constructor(e, t, s) {
    super(s), this._hasNext = !1, this._isPoints = !1, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._parseCaches = new Array(), this._geometryType = s.geometryType, this._reader = e, this._header = t, this._hasNext = t.hasFeatures, this._isPoints = s.geometryType === "esriGeometryPoint";
  }
  get _size() {
    return this._header.featureCount;
  }
  get fields() {
    return this._header.fields;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  getSize() {
    return this._size;
  }
  getInTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e;
  }
  getAttributeHash() {
    let e = "";
    for (const t of this._header.fields.fields) e += this._readAttributeAtIndex(t.index) + ".";
    return e;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e) {
    this._header.displayIds[this._featureIndex] = e;
  }
  readGeometryArea() {
    return this._cache.area || this._readGeometry(!0), this._cache.area;
  }
  copy() {
    const e = this._reader.clone(), t = new Fe(e, this._header, this.metadata);
    return this.copyInto(t), t;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this._size && !this._getExists(); ) ;
    return this._featureIndex < this._size;
  }
  _readX() {
    return this._header.centroid[2 * this._featureIndex];
  }
  _readY() {
    return this._header.centroid[2 * this._featureIndex + 1];
  }
  _readServerCentroid() {
    const e = this._header.centroid[2 * this._featureIndex], t = this._header.centroid[2 * this._featureIndex + 1];
    return e === st ? null : new F([], [e, t]);
  }
  _readGeometry(e = !1) {
    if (this._cache.geometry === void 0) {
      let t = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === st) return null;
        const s = this._header.centroid[2 * this._featureIndex], r = this._header.centroid[2 * this._featureIndex + 1];
        t = new F([], [s, r]);
      } else {
        const s = this._header.offsets.geometry[this._featureIndex], r = this._reader;
        if (s === 0) return null;
        r.move(s);
        try {
          t = e ? this._parseGeometryForDisplay(r) : this._parseGeometry(r);
        } catch {
          return null;
        }
      }
      return t?.coords.length === 0 && (t = null), this._cache.geometry = t, t;
    }
    return this._cache.geometry;
  }
  _readAttribute(e, t) {
    const s = this._header.fields.get(e);
    if (s == null) return;
    let r = this._readAttributeAtIndex(s.index);
    this.fields.get(e)?.type === "esriFieldTypeTimestampOffset" && (r = this.parseTimestampOffset(r));
    const i = this._header.fields.isDateField(s.name);
    return t ? r == null ? r : i ? new Date(r) : r : r;
  }
  _readAttributes() {
    const e = {};
    for (const t of this._header.fields.fields) e[t.name] = this._readAttributeAtIndex(t.index);
    return e;
  }
  copyInto(e) {
    super.copyInto(e), e._featureIndex = this._featureIndex, e._featureOffset = this._featureOffset, e._hasNext = this._hasNext, e._parseCaches = this._parseCaches;
  }
  _readAttributeAtIndex(e) {
    let t = this._parseCaches[e];
    if (t || (t = new Ds(this.getSize()), this._parseCaches[e] = t), t.has(this._featureIndex)) return t.get(this._featureIndex);
    const s = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e], r = this._reader;
    r.move(s);
    const i = Lr(r);
    return t.set(this._featureIndex, i), i;
  }
  _readGeometryDeltaDecoded(e = !1) {
    if (this._cache.unquantGeometry === void 0) {
      const t = this._readGeometry(e);
      if (!t) return this._cache.unquantGeometry = void 0, null;
      if (!this.getInTransform()) return this._cache.unquantGeometry = t, t;
      const s = nt(t.coords.length).decoded, r = t.clone(s), i = r.coords;
      let n = 0;
      for (const a of r.lengths) {
        for (let o = 1; o < a; o++) {
          const h = 2 * (n + o), c = 2 * (n + o - 1);
          i[h] += i[c], i[h + 1] += i[c + 1];
        }
        n += a;
      }
      return this._cache.unquantGeometry = r, r;
    }
    return this._cache.unquantGeometry;
  }
  _parseGeometry(e) {
    const r = e.asUnsafe(), i = r.getLength(), n = r.pos() + i, a = [], o = [];
    for (; r.pos() < n && r.next(); ) switch (r.tag()) {
      case 2: {
        const h = r.getUInt32(), c = r.pos() + h;
        for (; r.pos() < c; ) o.push(r.getUInt32());
        break;
      }
      case 3: {
        const h = r.getUInt32(), c = r.pos() + h;
        for (a.push(r.getSInt64()), a.push(r.getSInt64()), this.hasZ && r.getSInt64(), this.hasM && r.getSInt64(); r.pos() < c; ) a.push(r.getSInt64()), a.push(r.getSInt64()), this.hasZ && r.getSInt64(), this.hasM && r.getSInt64();
        break;
      }
      default:
        r.skip();
    }
    return new F(o, a);
  }
  _parseGeometryForDisplay(e) {
    const r = e.asUnsafe(), i = r.getLength(), n = r.pos() + i, a = [], o = [];
    let h = 0, c = 0, d = null, _ = 0;
    const g = this.geometryType === "esriGeometryPolygon";
    for (; r.pos() < n && r.next(); ) switch (r.tag()) {
      case 2: {
        const l = r.getUInt32(), f = r.pos() + l;
        for (; r.pos() < f; ) {
          const p = r.getUInt32();
          a.push(p), h += p;
        }
        d = nt(2 * h).delta;
        break;
      }
      case 3: {
        r.getUInt32();
        const l = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
        Is(d);
        for (const f of a) if (c + l * f > d.length) for (let p = 0; p < f; p++) r.getSInt32(), r.getSInt32(), this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
        else if (g && Pr) {
          const p = this.getAreaSimplificationThreshold(f, this._header.vertexCount);
          let y = 2, b = 1;
          const I = !1;
          let x = r.getSInt32(), S = r.getSInt32();
          d[c++] = x, d[c++] = S, this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
          let w = r.getSInt32(), v = r.getSInt32();
          for (this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(); y < f; ) {
            let C = r.getSInt32(), E = r.getSInt32();
            this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
            const q = x + w, T = S + v;
            zr(x, S, q, T, q + C, T + E) >= p ? (_ += -0.5 * (q - x) * (T + S), b > 1 && ge(d[c - 2], d[c - 1], w, v) ? (d[c - 2] += w, d[c - 1] += v) : (d[c++] = w, d[c++] = v, b++), x = q, S = T) : (C += w, E += v), w = C, v = E, y++;
          }
          b < 3 || I ? c -= 2 * b : (_ += -0.5 * (x + w - x) * (S + v + S), ge(d[c - 2], d[c - 1], w, v) ? (d[c - 2] += w, d[c - 1] += v, o.push(b)) : (d[c++] = w, d[c++] = v, o.push(++b)));
        } else {
          let p = 0, y = r.getSInt32(), b = r.getSInt32();
          this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(), d[c++] = y, d[c++] = b, p += 1;
          for (let I = 1; I < f; I++) {
            const x = r.getSInt32(), S = r.getSInt32(), w = y + x, v = b + S;
            _ += -0.5 * (w - y) * (v + b), this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(), I > 2 && ge(d[c - 2], d[c - 1], x, S) ? (d[c - 2] += x, d[c - 1] += S) : (d[c++] = x, d[c++] = S, p += 1), y = w, b = v;
          }
          o.push(p);
        }
        break;
      }
      default:
        r.skip();
    }
    return this._cache.area = _, o.length ? new F(o, d) : d != null ? this._createQuantizedExtrudedGeometry(d[0], d[1]) : null;
  }
};
class ue {
  constructor(e, t) {
    this.service = e, this._metadata = t;
  }
  destroy() {
  }
}
function Wr(u, e) {
  switch (u.type) {
    case "memory":
      return new Nr(u, e);
    case "ogc":
      return new Yr(u, e);
    case "feature-service":
      return u.queryMetadata.supportsFormatPBF && m("featurelayer-pbf") ? new Br(u, e) : new Vr(u, e);
  }
}
async function Gr(u) {
  const e = new xs();
  return await e.open(u, {}), e;
}
let Nr = class extends ue {
  constructor(e, t) {
    super(e, t), this._portsOpen = Gr(e.source).then((s) => this.client = s);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e, t) {
    await this._portsOpen;
    const s = await this.client.invoke("queryFeatures", e.toJSON(), t);
    return M.fromFeatureSet(s, this._metadata);
  }
};
class Br extends ue {
  async executeQuery(e, t) {
    const { data: s } = await vs(this.service.source, e, t), r = !e.quantizationParameters;
    return Ur.fromBuffer(s, this._metadata, r);
  }
}
class Vr extends ue {
  async executeQuery(e, t) {
    const { source: s, queryMetadata: r } = this.service;
    if (e.quantizationParameters != null && !r.supportsQuantization) {
      const n = e.clone(), a = St(n.quantizationParameters);
      n.quantizationParameters = null;
      const { data: o } = await Ge(s, n, this._metadata.spatialReference, t), h = lt(o, this._metadata.objectIdField);
      return wt(a, h), M.fromOptimizedFeatureSet(h, this._metadata);
    }
    const { data: i } = await Ge(s, e, this._metadata.spatialReference, t);
    return this._metadata.geometryType === "esriGeometryPoint" && (i.features = i.features?.filter((n) => {
      if (n.geometry != null) {
        const a = n.geometry;
        return Number.isFinite(a.x) && Number.isFinite(a.y);
      }
      return !0;
    })), M.fromFeatureSet(i, this._metadata);
  }
}
let Yr = class extends ue {
  async executeQuery(e, t) {
    if (e.quantizationParameters && !this.service.queryMetadata.supportsQuantization) {
      const r = e.clone(), i = St(r.quantizationParameters);
      r.quantizationParameters = null;
      const n = await Ye(this.service.source, e, t);
      return wt(i, n), M.fromOptimizedFeatureSet(n, this._metadata);
    }
    const s = await Ye(this.service.source, e, t);
    return M.fromOptimizedFeatureSet(s, this._metadata);
  }
}, Kt = class extends Jt {
  constructor(e, t, s, r, i) {
    super(s), this._serviceInfo = e, this._queryInfo = t, this._metadata = r, this._connection = i, this._queue = new ct({ concurrency: 16, process: async (n) => {
      const a = { signal: n.options?.signal, query: n.query.customParameters };
      return this._adapter.executeQuery(n.query.inner, a);
    } }), this._adapter = Wr(e, r);
  }
  unsafeSetQueryHistoricMoment(e) {
    this._queryInfo.updateHistoricMoment(e);
  }
  async updateFields(e) {
    this._queryInfo.updateFields(e);
    const t = Array.from(this._store.chunks()).map(async (r) => {
      const i = mt.fromJSON(r.queryInfo.queryJSON);
      if (i) try {
        return await this._tryUpdateFields(r.reader, i), null;
      } catch (n) {
        return n;
      }
    }), s = (await Promise.all(t)).filter((r) => r);
    if (s.length) throw new j("featurelayer-query", "Encountered errors when downloading fields", { errors: s });
  }
  async queryByObjectId(e) {
    if (e.length === 0) return M.empty(this._metadata);
    const t = this._queryInfo.createQuery({ objectIds: e });
    return this._fetch(t);
  }
  async _fetch(e, t) {
    const s = await this._enqueue(e, t);
    return await this._tryUpdateFields(s, e.inner), s;
  }
  async _tryUpdateFields(e, t) {
    const s = this._queryInfo.createPatchFieldsQuery(t, e);
    if (!s) return;
    const r = await this._enqueue(s, this._options);
    e.joinAttributes(r);
  }
  async _enqueue(e, t) {
    return this._connection.onEvent({ type: "fetchStart" }), this._queue.push({ query: e, options: t }).finally(() => {
      this._connection.onEvent({ type: "fetchEnd", done: this._queue.length === 0 });
    });
  }
}, es = class extends Kt {
  constructor() {
    super(...arguments), this._chunksById = /* @__PURE__ */ new Map();
  }
  unload(e) {
    this._removeChunks(e.tile);
  }
  _addChunk(e) {
    const t = e.tile.id;
    this._chunksById.has(t) || this._chunksById.set(t, []);
    const s = e.size();
    (s || e.first || e.end) && (m("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] ATileLoadStrategy.addChunk [count=${s}]`), this._chunksById.get(t).push(e), this._store.insert(e));
  }
  _removeChunks(e) {
    const t = this._chunksById.get(e.key.id) ?? [];
    for (const s of t) m("esri-2d-update-debug") && console.debug(`Tile[${e.key.id}] Chunk[${s.chunkId}] ATileLoadStrategy.removeChunk`), this._store.remove(s);
    this._chunksById.delete(e.key.id);
  }
}, at = class extends X {
  constructor(e, t, s, r, i, n) {
    super(), this._reader = e, this._queryJSON = t, this._tile = s, this._sourceTile = r, this._sourceTileDepth = i, this._end = n, this.chunkId = `${this._tile.key.id}.${this._sourceTile?.key.id}${this._end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._sourceTile?.key.normalizedId}${this._end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "drill-down-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, sourceTileDepth: this._sourceTileDepth, sourceTileId: this._sourceTile?.key.id, size: this.size(), end: this.end };
  }
  get first() {
    return this._sourceTileDepth === 0;
  }
  get reader() {
    return this._reader;
  }
  get end() {
    return this._end;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return !0;
  }
  getTileReader(e) {
    return this._tile.key.id === e.key.id ? this.reader : null;
  }
}, Xr = class {
  constructor(e, t) {
    this.subscription = e, this._tileIdToResult = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._handles = ie([se(e.signal, () => this._controller.abort()), se(t, () => this._controller.abort())]);
  }
  destroy() {
    this._controller.abort(), this._handles.remove();
  }
  get(e) {
    return this._tileIdToResult.get(e);
  }
  set(e, t) {
    this._tileIdToResult.set(e, t);
  }
  get options() {
    return { signal: this._controller.signal };
  }
}, Qr = class extends es {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  destroy() {
    super.destroy();
    for (const e of this._loadStates.values()) e.destroy();
    this._loadStates.clear();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  async load(e) {
    this._loadStates.has(e.key.id) || this._loadStates.set(e.key.id, new Xr(e, this._options));
    const t = this._loadStates.get(e.key.id);
    let s;
    try {
      for await (const i of this._fetchChunkInfos(t, e.tile, 0)) {
        const { queryJSON: n, reader: a, sourceTile: o, sourceTileDepth: h, tile: c } = i, d = new at(a, n, c, o, h, !1);
        V(t.options), this._addChunk(d);
      }
    } catch (i) {
      s = i;
    }
    const r = new at(M.empty(this._metadata), null, e.tile, null, -1, !0);
    if (this._addChunk(r), s) throw s;
  }
  unload(e) {
    super.unload(e), this._loadStates.get(e.key.id)?.destroy(), this._loadStates.delete(e.key.id);
  }
  async *_fetchChunkInfos(e, t, s) {
    let r = e.get(t.id);
    const i = !!r;
    if (r || (r = await this._fetchChunkInfo(e, t, s), e.set(t.id, r)), r.reader.exceededTransferLimit && s < m("featurelayer-query-max-depth")) for (const n of t.createChildTiles()) yield* this._fetchChunkInfos(e, n, s + 1);
    else i || (yield r);
  }
  async _fetchChunkInfo(e, t, s) {
    const r = e.subscription.tile.getQuantizationParameters(), i = this._queryInfo.createTileQuery(t, { returnExceededLimitFeatures: !1, quantizationParameters: r });
    return { reader: await this._fetch(i, e.options), queryJSON: i.inner.toJSON(), tile: e.subscription.tile, sourceTile: t, sourceTileDepth: s };
  }
}, ot = class extends X {
  constructor(e, t, s, r, i) {
    super(), this._reader = e, this._queryJSON = t, this._tile = s, this._page = r, this._end = i, this.chunkId = `${this._tile.key.id}.${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._page}${this.end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "paged-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return this._page === 0;
  }
  get end() {
    return this._end;
  }
  get page() {
    return this._page;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return !0;
  }
  getTileReader(e) {
    return this._tile.key.id === e.key.id ? this.reader : null;
  }
}, Zr = class {
  constructor(e, t) {
    this.subscription = e, this._pages = /* @__PURE__ */ new Set(), this._controller = new AbortController(), this._done = !1, this._handles = ie([se(e.signal, () => this._controller.abort()), se(t, () => this._controller.abort())]);
  }
  destroy() {
    this._controller.abort(), this._handles.remove();
  }
  get pageStart() {
    let e = -1;
    for (const t of this._pages.values()) e = Math.max(e, t);
    return e + 1;
  }
  get done() {
    return this._done;
  }
  get options() {
    return { signal: this._controller.signal };
  }
  add(e, t) {
    this._pages.add(e), this._done = this._done || t;
  }
};
class Hr extends es {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  destroy() {
    super.destroy();
    for (const e of this._loadStates.values()) e.destroy();
    this._loadStates.clear();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  async load(e) {
    this._loadStates.has(e.key.id) || this._loadStates.set(e.key.id, new Zr(e, this._options));
    const t = this._loadStates.get(e.key.id);
    let s;
    try {
      await this._fetchPages(t);
    } catch (i) {
      s = i;
    }
    const r = new ot(M.empty(this._metadata), null, e.tile, -1, !0);
    if (ks(t.options) || this._addChunk(r), s) throw s;
  }
  unload(e) {
    super.unload(e), this._loadStates.get(e.key.id)?.destroy(), this._loadStates.delete(e.key.id);
  }
  async _fetchPages(e) {
    let r = 0, i = e.pageStart, n = 1;
    for (; r < 20 && !e.done; ) {
      const a = [];
      for (let h = 0; h < n; h++) a.push(this._fetchChunk(e, i++));
      const o = await Promise.all(a);
      for (const h of o) (h.size() !== 0 || h.first) && (e.add(h.page, !h.reader.exceededTransferLimit), V(e.options), this._addChunk(h));
      r++, n = Math.min(n + 1, 4);
    }
  }
  async _fetchChunk(e, t) {
    const s = e.subscription.tile, r = this._queryInfo.createPagedTileQuery(s, t), i = await this._fetch(r, e.options);
    return new ot(i, r.inner.toJSON(), s, t, !1);
  }
}
let ht = class extends X {
  constructor(e, t, s, r) {
    super(), this._reader = e, this._queryJSON = t, this._page = s, this._end = r, this.chunkId = `${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = this.chunkId;
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return this._page === 0;
  }
  get end() {
    return this._end;
  }
  get queryInfo() {
    return { type: "snapshot", chunkId: this.chunkId, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get isTiled() {
    return !1;
  }
  getTileReader(e) {
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
};
class Jr extends Kt {
  constructor(e, t, s, r, i, n) {
    super(e, t, s, i, n), this._random = new vt(1e3), this._featureCount = r;
  }
  get about() {
    return { willQueryAllFeatures: !0, willQueryFullResolutionGeometry: !0 };
  }
  load(e) {
    return this._promise == null && (this._promise = this._downloadPages(this._featureCount)), this._promise;
  }
  unload(e) {
  }
  async _downloadPages(e) {
    const t = Math.ceil(e / this._queryInfo.pageSize), s = Array.from({ length: t }, (a, o) => o).sort((a, o) => this._random.getInt() - this._random.getInt()), r = await Promise.all(s.map((a) => this._downloadPage(a))), i = new ht(M.empty(this._metadata), null, -1, !0);
    this._store.insert(i);
    const n = r.filter((a) => a);
    if (n.length) throw new j("featurelayer-query", "Encountered errors when downloading data", { errors: n });
  }
  async _downloadPage(e) {
    try {
      const t = this._queryInfo.createPagedQuery(e), s = await this._fetch(t, this._options), r = new ht(s, t.inner.toJSON(), e, !1);
      return V(this._options), this._store.insert(r), null;
    } catch (t) {
      return t;
    }
  }
}
const Kr = "__esri_stream_id__", ut = "__esri_timestamp__", dt = 1e3;
class ei {
  constructor(e, t, s, r, i = 128) {
    this._trackIdToObservations = /* @__PURE__ */ new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = /* @__PURE__ */ new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s, this._purgeOptions = r, this.store = e, this.objectIdField = t, this.purgeInterval = i, this._useGeneratedIds = this.objectIdField === Kr;
  }
  removeById(e) {
    this._removed.push(e);
  }
  removeByTrackId(e) {
    const t = this._trackIdToObservations.get(e);
    if (t) for (const s of t.entries) this._removed.push(s);
  }
  add(e) {
    if (this._useGeneratedIds) {
      const n = this._nextId();
      e.attributes[this.objectIdField] = n, e.objectId = n;
    } else e.objectId = e.attributes[this.objectIdField];
    const t = e.objectId;
    if (this._addOrUpdated.set(t, e), this._maxAge = Math.max(this._maxAge, e.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField) return this._trackIdLessObservations == null && (this._trackIdLessObservations = new Xe(1e5)), void this._trackIdLessObservations.enqueue(t);
    const s = e.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(s)) {
      const n = this._purgeOptions?.maxObservations != null ? this._purgeOptions.maxObservations : dt, a = Fs(n, 0, dt);
      this._trackIdToObservations.set(s, new Xe(a));
    }
    const r = this._trackIdToObservations.get(s), i = r?.enqueue(t);
    i != null && (this._addOrUpdated.has(i) ? this._addOrUpdated.delete(i) : this._removed.push(i));
  }
  checkForUpdates() {
    const e = this._getToAdd(), t = this._getToRemove(), s = performance.now();
    s - this._lastPurge >= this.purgeInterval && (this._purge(s), this._lastPurge = s);
    const r = [];
    if (t != null) for (const n of t) {
      const a = this.store.removeById(n);
      a != null && r.push(a);
    }
    const i = [];
    if (e != null) {
      const n = new Set(t ?? []);
      for (const a of e) n.has(a.objectId) || (a.attributes[ut] = s, this.store.add(a), i.push(a));
    }
    return !(!i.length && !r?.length) && (this.store.update(i, r), !0);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size) return null;
    const e = new Array(this._addOrUpdated.size);
    let t = 0;
    return this._addOrUpdated.forEach((s) => e[t++] = s), this._addOrUpdated.clear(), e;
  }
  _getToRemove() {
    const e = this._removed;
    return this._removed.length ? (this._removed = [], e) : null;
  }
  _nextId() {
    const e = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, e;
  }
  _purge(e) {
    const t = this._purgeOptions;
    t != null && (this._purgeSomeByDisplayCount(t), this._purgeByAge(t), this._purgeByAgeReceived(e, t), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(e) {
    if (!e.displayCount) return;
    let t = this.store.size;
    if (t > e.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const s of this._trackIdToObservations.values()) if (t > e.displayCount && s.size) {
          const r = s.dequeue();
          this._removed.push(r), t--;
        }
      }
      if (this._trackIdLessObservations != null) {
        let s = t - e.displayCount;
        for (; s-- > 0; ) {
          const r = this._trackIdLessObservations.dequeue();
          r != null && this._removed.push(r);
        }
      }
    }
  }
  _purgeByAge(e) {
    const t = this._timeInfo?.startTimeField;
    if (!e.age || !t) return;
    const s = 60 * e.age * 1e3, r = this._maxAge - s;
    this.store.forEach((i) => {
      i.attributes[t] < r && this._removed.push(i.objectId);
    });
  }
  _purgeByAgeReceived(e, t) {
    if (!t.ageReceived) return;
    const s = e - 60 * t.ageReceived * 1e3;
    this.store.forEach((r) => {
      r.attributes[ut] < s && this._removed.push(r.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((e, t) => {
      e.size === 0 && this._trackIdToObservations.delete(t);
    });
  }
}
let z = class extends It {
  constructor(u) {
    super(u);
  }
  get connectionStatus() {
    return this.connection?.connectionStatus;
  }
  get errorString() {
    return this.connection?.errorString;
  }
};
W([K()], z.prototype, "connection", void 0), W([K()], z.prototype, "connectionStatus", null), W([K()], z.prototype, "errorString", null), z = W([bt("esri.views.2d.layers.features.sources.StreamConnectionState")], z);
let ti = class {
  constructor(e, t) {
    this._metadata = e, this._onUpdate = t, this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  get size() {
    return this._objectIdToFeature.size;
  }
  get reader() {
    return M.fromFeatures([...this._objectIdToFeature.values()], this._metadata);
  }
  add(e) {
    this._objectIdToFeature.set(e.objectId, e);
  }
  forEach(e) {
    this._objectIdToFeature.forEach(e);
  }
  removeById(e) {
    const t = this._objectIdToFeature.get(e);
    return t ? (this._objectIdToFeature.delete(e), t) : null;
  }
  clear() {
    this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  update(e, t) {
    this._onUpdate(e?.length ?? 0);
  }
};
class si extends X {
  constructor(e) {
    super(), this._reader = e, this.chunkId = "stream-chunk", this.normalizedChunkId = "stream-chunk";
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return !0;
  }
  get end() {
    return !0;
  }
  get queryInfo() {
    return { type: "stream", chunkId: this.chunkId, size: this.size(), end: this.end };
  }
  get isTiled() {
    return !1;
  }
  getTileReader(e) {
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
}
class ri extends Jt {
  constructor(e, t, s, r, i) {
    super(s), this._service = e, this._dataFilter = t, this._streamOptions = r, this._metadata = i, this._connectionState = new z(), this._forceRefresh = !1, this.events = new Me();
    const { objectIdField: n, timeInfo: a } = this._metadata, { purgeOptions: o } = t;
    this._stagingStore = new ti(this._metadata, (h) => this.events.emit("features-updated", h)), this._manager = new ei(this._stagingStore, n, a, o), this.connect();
  }
  destroy() {
    super.destroy(), this.disconnect();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  get connectionStatus() {
    return this._connectionState.connectionStatus;
  }
  get errorString() {
    return this._connectionState?.errorString;
  }
  async refresh() {
    const e = this._chunk != null;
    this._manager.checkForUpdates() || !e || this._forceRefresh ? (this._chunk && this._store.remove(this._chunk), this._forceRefresh = !1, this._chunk = new si(this._stagingStore.reader), this._store.insert(this._chunk), this.events.emit("tick")) : this.events.emit("tick");
  }
  async updateFields(e) {
    throw new Error("Updating available fields not supported for StreamLayer");
  }
  async load(e) {
  }
  unload(e) {
  }
  disconnect() {
    this._connection = yt(this._connection), this._connectionState.connection = null, this._handlesGroup?.remove();
  }
  connect() {
    if (this._connection != null) return;
    const { geometryType: e, spatialReference: t } = this._metadata, { maxReconnectionAttempts: s, maxReconnectionInterval: r, geometryDefinition: i, definitionExpression: n, customParameters: a } = this._dataFilter;
    this._connection = Bs(this._service.source, t, this._streamOptions.outSR, e, n, i, s, r, a), this._handlesGroup = ie([this._connection.on("data-received", (o) => this._onFeature(o)), this._connection.on("message-received", (o) => this._onWebSocketMessage(o))]), this._connectionState.connection = this._connection;
  }
  clear() {
    this._manager.checkForUpdates(), this._stagingStore.clear(), this._forceRefresh = !0;
  }
  updateCustomParameters(e) {
    this._connection?.updateCustomParameters(e);
  }
  sendMessageToSocket(e) {
    this._connection?.sendMessageToSocket(e);
  }
  sendMessageToClient(e) {
    this._connection?.sendMessageToClient(e);
  }
  _onWebSocketMessage(e) {
    if ("type" in e) switch (e.type) {
      case "delete":
        if (e.objectIds) for (const t of e.objectIds) this._manager.removeById(t);
        if (e.trackIds) for (const t of e.trackIds) this._manager.removeByTrackId(t);
        break;
      case "clear":
        this.clear();
    }
    this.events.emit("message-received", e);
  }
  _onFeature(e) {
    try {
      this._manager.add(e), this.events.emit("data-received", e);
    } catch {
    }
  }
}
class ii {
  constructor(e) {
    this._onChange = e, this._chunks = /* @__PURE__ */ new Map(), this._chunksToRemove = [], this.events = new Me(), this.featureAdapter = new Ls();
  }
  destroy() {
    this.clear();
  }
  clear() {
    for (const e of this._chunks.values()) this._chunksToRemove.push(e);
    this._chunks.clear(), this._localEditChunk != null && this._chunksToRemove.push(this._localEditChunk), this._localEditChunk = null;
  }
  *chunks() {
    this._localEditChunk && (yield this._localEditChunk), this._localOverridesChunk && (yield this._localOverridesChunk), yield* this._chunks.values();
  }
  insert(e) {
    m("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] SourceChunkStore.insert`), this._localOverridesChunk?.overriddenIds.size && (e.reader.removeIds(this._localOverridesChunk.overriddenIds), e.invalidate()), this._localEditChunk?.overriddenIds.size && this._localEditChunk.removeOverrides(e), this._chunks.set(e.chunkId, e), this.events.emit("changed"), this._onChange();
  }
  remove(e) {
    m("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] SourceChunkStore.remove`), this._chunks.delete(e.chunkId), this._chunksToRemove.push(e);
  }
  cleanupRemovedChunks() {
    const e = this._chunksToRemove;
    return this._chunksToRemove = [], e;
  }
  applyLocalOverrides(e, t) {
    this._localOverridesChunk == null && (this._localOverridesChunk = new ke(t, "localOverride")), this._localOverridesChunk.applyOverrides(e);
    for (const s of this._chunks.values()) s.reader.removeIds(this._localOverridesChunk.overriddenIds), s.invalidate();
  }
  applyLocalEdit(e, t) {
    this._localEditChunk == null && (this._localEditChunk = new ke(t, "localEdit")), this._localEditChunk.applyOverrides(e);
    for (const s of this._chunks.values()) s.reader.removeIds(this._localEditChunk.overriddenIds), s.invalidate();
  }
  forEach(e) {
    const t = /* @__PURE__ */ new Set();
    for (const s of this.chunks()) {
      const r = s.reader.getCursor();
      for (; r.next(); ) {
        const i = r.getObjectId();
        t.has(i) || (e(r.copy()), t.add(i));
      }
    }
  }
  forEachUnsafe(e) {
    const t = /* @__PURE__ */ new Set();
    for (const s of this.chunks()) {
      const r = s.reader.getCursor();
      for (; r.next(); ) {
        const i = r.getObjectId();
        t.has(i) || (e(r), t.add(i));
      }
    }
  }
  forEachInBounds(e, t) {
    const s = /* @__PURE__ */ new Set();
    for (const r of this.chunks()) {
      const i = r.queryFeaturesInBounds(e);
      for (; i.next(); ) {
        const n = i.getObjectId();
        s.has(n) || (t(i.copy()), s.add(n));
      }
    }
  }
  forEachBounds(e, t) {
    const s = qe();
    for (const r of e)
      r.getBounds(s) && t(s);
  }
}
class ni {
  constructor(e, t, s, r, i) {
    this.service = e, this._aggregateAdapter = t, this._subscriptions = s, this._onChange = r, this._connection = i, this._updateTracking = new Vs({ debugName: "FeatureSource" }), this._didInvalidateData = !1, this._store = new ii(this._onChange), this._metadata = new Re(e.metadata);
  }
  destroy() {
    this._strategy?.destroy(), this._store.destroy(), this._streamMessenger?.destroy(), this.service.type === "memory" && this.service.source.map((e) => e.close());
  }
  get metadata() {
    if (!this._metadata) throw new Error("InternalError: Metadata not defined. Was update called?");
    return this._metadata;
  }
  get store() {
    return this._store;
  }
  get streamMessenger() {
    return this._streamMessenger == null && this._initStreamMessenger(), this._streamMessenger;
  }
  get statistics() {
    return qr.from(this._store);
  }
  get updateTracking() {
    return this._updateTracking;
  }
  get queryEngine() {
    if (!this._queryEngine) {
      if (!this._schema) return null;
      const { dataFilter: e } = this._schema.mutable, t = this._schema.mutable.availableFields, s = this._metadata;
      this._queryEngine = new Ft({ featureStore: this._store, fieldsIndex: s.fieldsIndex, geometryType: s.geometryType, objectIdField: s.objectIdField, hasM: !1, hasZ: !1, spatialReference: this.service.outSpatialReference, cacheSpatialQueries: !0, aggregateAdapter: this._aggregateAdapter, timeInfo: s.timeInfo, definitionExpression: e.definitionExpression, availableFields: t });
    }
    return this._queryEngine;
  }
  get isStream() {
    return this._schema.type === "stream";
  }
  chunks() {
    return Array.from(this._store.chunks());
  }
  cleanupRemovedChunks() {
    return this._store.cleanupRemovedChunks();
  }
  onSubscribe(e) {
    this._connection.onEvent({ type: "subscribe", tile: e.tile.id });
    const t = this._strategy?.load(e);
    t && (t.then(() => this._connection.onEvent({ type: "loaded", tile: e.tile.id })).catch((s) => this._connection.onEvent({ type: "error", tile: e.tile.id, error: s })), this._updateTracking.addPromise(t));
  }
  onResume(e) {
    this._updateTracking.addPromise(xt(this._strategy?.load(e)));
  }
  onUnsubscribe(e) {
    this._connection.onEvent({ type: "unsubscribe", tile: e.tile.id }), this._strategy?.unload(e);
  }
  getLocalEdit(e) {
    return this._updateTracking.addPromise(this._getGetLocalEdit(e));
  }
  applyLocalEdit(e) {
    this._didInvalidateData = !0, this._store.applyLocalEdit(e, this.metadata);
  }
  async update(e, t) {
    const s = e.source, r = ft(this._schema?.mutable, s.mutable);
    if (!r) return !1;
    if (m("esri-2d-update-debug") && console.debug(`Version[${t}] FeatureSource.update`, { changes: r }), this._schema = s, this._queryEngine?.destroy(), this._queryEngine = null, this.service.type === "feature-service" && this.service.queryMetadata.lastEditDate != null && (this._lastEditDate = this.service.queryMetadata.lastEditDate), this._streamMessenger == null && this._schema.type === "stream" && this._initStreamMessenger(), Ne(r, "sourceRefreshVersion") && this._strategy?.refresh) return await this._strategy.refresh(), !0;
    if (s.type === "feature" && Ne(r, "availableFields")) {
      if (await this._queryLastEditDateChanged() || this._didInvalidateData) this._didInvalidateData = !1, await this._updateStrategy(t);
      else {
        this._connection.onEvent({ type: "updateFieldsStart" });
        try {
          await this._strategy.updateFields(s.mutable.availableFields), this._connection.onEvent({ type: "updateFieldsEnd" });
        } catch (i) {
          this._connection.onEvent({ type: "updateFieldsError", error: i });
        }
      }
      return !1;
    }
    return !(!Be(r, "dataFilter") && !Be(r, "sourceRefreshVersion")) && (await this._updateStrategy(t), !0);
  }
  _initStreamMessenger() {
    this._streamMessenger == null && (this._streamMessenger = new te(this._connection));
  }
  async _getGetLocalEdit(e) {
    if (e.historicMoment && this._schema.type === "feature" && (this._schema.mutable.dataFilter.historicMoment = e.historicMoment, this._strategy.unsafeSetQueryHistoricMoment(new Date(e.historicMoment))), e.type === "edit-by-feature") {
      const r = [...e.added, ...e.updated].map((i) => U.fromJSON(i, this.metadata.objectIdField));
      return { reader: M.fromOptimizedFeatures(r, this.metadata), removed: this._resolveIdentifiers(e.removed) };
    }
    const t = this._resolveIdentifiers(e.removed);
    if (!e.updated.length && !e.added.length) return { reader: M.empty(this.metadata), removed: t };
    const s = this._resolveIdentifiers([...e.added, ...e.updated]);
    return { reader: await this._strategy.queryByObjectId(s), removed: t };
  }
  _resolveIdentifiers(e) {
    const t = [], s = [];
    for (const r of e) r.objectId != null && r.objectId !== -1 ? s.push(r.objectId) : t.push(r.globalId);
    if (t.length) {
      const r = new Set(t), i = this.metadata.globalIdField;
      if (i == null) throw new Error("InternalError: Recieved an edit with globalIds, but not supported by the service");
      this._store.forEachUnsafe((n) => {
        const a = n.readAttribute(i);
        r.has(a) && s.push(n.getObjectId());
      });
    }
    return s;
  }
  async _queryLastEditDateChanged() {
    if (this._lastEditDate == null) return !1;
    const e = this.service.source, t = { ...e.query, f: "json" }, s = (await Cs(e.path, { query: t, responseType: "json" })).data.editingInfo.lastEditDate;
    return s !== this._lastEditDate && (this._lastEditDate = s, !0);
  }
  async _createStrategy() {
    const e = "isSourceHosted" in this.service && this.service.isSourceHosted, t = Array.isArray(this.service.source), s = this.service.source && "collection" in this.service.source, r = e || t || s;
    if (this._schema.type === "stream") {
      const o = new ri(this.service, this._schema.mutable.dataFilter, this._store, { outSR: this.service.outSpatialReference }, this.metadata);
      return this._streamMessenger.strategy = o, o;
    }
    const i = this.service, n = Er.fromSchema(i, this._schema, this._metadata), a = await this._supportSnapshotMode(i, n);
    return a ? new Jr(i, n, this._store, a.featureCount, this.metadata, this._connection) : r ? new Hr(i, n, this._store, this.metadata, this._connection) : new Qr(i, n, this._store, this.metadata, this._connection);
  }
  async _updateStrategy(e) {
    const t = await this._createStrategy();
    this._connection.onEvent({ type: "updateStrategyStart", about: t.about });
    const s = !!this._strategy;
    this._store.clear(), this._strategy?.destroy(), this._strategy = t, m("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureSource.updateStrategy`, { strategy: t });
    const r = Array.from(this._subscriptions.values());
    if (!r.length) return void this._connection.onEvent({ type: "updateStrategyEnd" });
    const i = Promise.all(r.map((n) => this._strategy.load(n).then(() => this._connection.onEvent({ type: "loaded", tile: n.tile.id })).catch((a) => this._connection.onEvent({ type: "error", tile: n.tile.id, error: a }))));
    this._updateTracking.addPromise(i);
    try {
      s && await i;
    } catch (n) {
      $e(n);
    }
    this._connection.onEvent({ type: "updateStrategyEnd" }), m("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureSource.updateStrategyEnd`, { strategy: t });
  }
  async _supportSnapshotMode(e, t) {
    const { queryMetadata: s } = e, r = s.snapshotInfo;
    if (!r || !r.supportsSnapshotMinThreshold || !r.snapshotCountThresholds) return null;
    const i = e.source, n = t.createQuery();
    n.inner.orderByFields = [], n.inner.returnGeometry = !1;
    const a = (await Ts(i, n.inner, { query: n.customParameters })).data.count, { min: o, max: h } = r.snapshotCountThresholds;
    return a <= o || r.supportsSnapshotMaxThreshold && a < h ? { featureCount: a } : null;
  }
}
class ai {
  constructor(e, t) {
    this.tile = e, this.version = t, this._abortController = new AbortController();
  }
  get key() {
    return this.tile.key;
  }
  get signal() {
    return this._abortController.signal;
  }
  abort() {
    this._abortController.abort();
  }
}
class J {
  constructor(e) {
    this.inner = e, this.resolver = Rs();
  }
}
class sn {
  constructor() {
    this._aggregateAdapter = { getFeatureObjectIds: (e) => this._processor.getFeatureObjectIdsForAggregate(e) }, this._subscriptions = /* @__PURE__ */ new Map(), this._updateRequested = !1, this._updateSubscriptionRequests = [], this._updateHighlightRequests = [];
  }
  destroy() {
    this._subscriptions.clear(), this._processor.destroy(), this._source.destroy(), this._handles.remove(), this._updateLocalEditsRequest = null, this._tileInfoView = null;
  }
  onAttach(e) {
    m("esri-2d-update-debug") && console.debug("Pipeline.onAttach");
    const t = this._connection, s = Ms.fromJSON(e.tileInfoJSON);
    this._tileInfoView = new qs(s), this._source = new ni(e.service, this._aggregateAdapter, this._subscriptions, () => this._requestUpdate(), t), this._processor = new Mr(t, this._source), this._handles = ie([fe(() => this._source.updateTracking.updating, () => {
      this._requestUpdate(), xt(this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 }));
    })]);
  }
  onDetach() {
    m("esri-2d-update-debug") && console.debug("Pipeline.onDetach"), this.destroy();
  }
  set remoteClient(e) {
    this._connection = new Ys(e);
  }
  get features() {
    const e = this._source?.queryEngine;
    if (!e) throw new j("no-queryEngine", "No query engine defined");
    return e;
  }
  get aggregates() {
    const e = this._processor?.aggregateQueryEngine;
    if (!e) throw new j("no-queryEngine", "No aggregate query engine defined");
    return e;
  }
  get processor() {
    return this._processor;
  }
  get streamMessenger() {
    return this._source.streamMessenger;
  }
  getDisplayFeatures(e) {
    return this._processor.getDisplayFeatures(e);
  }
  async updateSchema(e, t) {
    return m("esri-2d-update-debug") && this._updateSchemaRequest && console.error("InternalError: Schema already updating"), this._updateSchemaRequest = new J({ schema: e, version: t }), this._requestUpdate(), this._updateSchemaRequest.resolver.promise;
  }
  updateSubscriptions(e) {
    const t = new J(e);
    return this._updateSubscriptionRequests.push(t), this._requestUpdate(), t.resolver.promise;
  }
  updateHighlight(e) {
    const t = new J(e);
    return this._updateHighlightRequests.push(t), this._requestUpdate(), t.resolver.promise;
  }
  async onEdits(e) {
    if (this._updateLocalEditsRequest != null) throw new j("InternalError - Already processing an edit");
    this._updateLocalEditsRequest = new J(e);
    const t = this._updateLocalEditsRequest.resolver.promise;
    return this._requestUpdate(), t;
  }
  queryStatistics() {
    return this._source.statistics.toJSON();
  }
  async queryVisibleFeatures(e, t) {
    return this.features.executeQuery(e, t);
  }
  async queryHeatmapStatistics(e) {
    const t = Math.round($s(e.radius));
    let s = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
    const i = typeof e.fieldOffset == "string", n = e.fieldOffset ?? 0, a = Array.from(this._subscriptions.values()), o = this._source.chunks(), h = t ** 2, c = 3 / (Math.PI * h), d = 2 * t, _ = Math.ceil(k / d);
    for (const g of a) {
      const l = g.tile, f = new Float64Array(_ * _);
      for (const p of o) {
        const y = p.getTileReader(l);
        if (!y) continue;
        const b = y.getCursor();
        for (; b.next(); ) {
          let I = 1;
          if (e.field != null) {
            const q = b.readAttribute(e.field);
            I = i ? -1 * +q : +q + n;
          }
          const x = b.readXForDisplay() / d, S = b.readYForDisplay() / d, w = Math.floor(x), v = Math.floor(S);
          if (w < 0 || v < 0 || w >= _ || v >= _) continue;
          const C = ((0.5 + w - x) * d) ** 2 + ((0.5 + v - S) * d) ** 2;
          if (C > h) continue;
          const E = I * (c * (1 - C / h) ** 2);
          f[v + w * _] += E;
        }
      }
      for (let p = 0; p < f.length; p++) s = Math.min(s, f[p]), r = Math.max(r, f[p]);
    }
    return { max: r, min: s };
  }
  async getSampleFeatures(e) {
    const t = this._source.chunks();
    if (t.reduce((o, h) => o + h.size(), 0) <= e.minFeatureCount) {
      if (!this._source.updateTracking.updating) {
        const o = [];
        return this._source.store.forEachUnsafe((h) => o.push(h.readLegacyFeatureWorldSpace())), o;
      }
      return null;
    }
    const s = /* @__PURE__ */ new Set(), r = [], i = t.map((o) => o.reader.getCursor()), n = new vt(), a = 3 * e.sampleSize;
    for (let o = 0; o < a && r.length < e.sampleSize; o++) {
      const h = i[n.getIntRange(0, t.length - 1)];
      if (h.getSize() === 0) continue;
      const c = n.getIntRange(0, h.getSize() - 1);
      h.setIndex(c);
      const d = h.getObjectId();
      s.has(d) || (s.add(d), r.push(h.readLegacyFeatureWorldSpace()));
    }
    return r.length >= e.sampleSize ? r : null;
  }
  _requestUpdate() {
    this._updateRequested || (this._updateRequested = !0, Es(() => this._scheduleNextUpdate()));
  }
  _scheduleNextUpdate() {
    this._updateRequested && (this._ongoingUpdate || (this._ongoingUpdate = Ce(this._doUpdate()).finally(() => {
      this._ongoingUpdate = null, this._scheduleNextUpdate();
    }), this._updateRequested = !1));
  }
  _subscribe(e) {
    const t = e.tileId;
    if (this._subscriptions.has(t)) return;
    m("esri-2d-update-debug") && console.debug(`Tile[${t}] Pipeline.subscribe`);
    const s = new Os(this._tileInfoView, t), r = new ai(s, e.version);
    this._subscriptions.set(t, r), this._source.onSubscribe(r), this._processor.onSubscribe(r);
  }
  _unsubscribe(e) {
    const t = this._subscriptions.get(e);
    t && (m("esri-2d-update-debug") && console.debug(`Tile[${e}] Pipeline.unsubscribe`), t.abort(), this._source.onUnsubscribe(t), this._processor.onUnsubscribe(t), this._subscriptions.delete(t.key.id));
  }
  async _doUpdate() {
    if (m("esri-2d-update-debug") && console.debug("Pipeline._doUpdateStart"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 }), this._updateSubscriptionRequests.length) {
      const r = this._updateSubscriptionRequests;
      this._updateSubscriptionRequests = [];
      for (const i of r) this._doUpdateSubscriptions(i.inner), i.resolver.resolve();
    }
    const e = this._updateSchemaRequest;
    if (this._updateSchemaRequest = null, e != null) {
      const { schema: r, version: i } = e.inner;
      await this._doUpdateSchema(r, i);
    }
    const t = this._updateLocalEditsRequest;
    if (this._updateLocalEditsRequest = null, t != null) {
      m("esri-2d-update-debug") && console.debug("Pipeline.applyEditOverride", t.inner);
      const r = await this._source.getLocalEdit(t.inner);
      await this._processor.applyLocalEdit(r), this._source.applyLocalEdit(r), m("esri-2d-update-debug") && console.debug("Pipeline.endEditOverride", t.inner);
    }
    if (this._updateHighlightRequests.length) {
      const r = this._updateHighlightRequests;
      this._updateHighlightRequests = [];
      for (const i of r) this._processor.updateHighlight(i.inner), i.resolver.resolve();
    }
    const s = this._source.cleanupRemovedChunks();
    this._processor.removeChunks(s);
    try {
      this._subscriptions.size && (m("esri-2d-update-debug") && console.debug("Pipeline.updateChunksStart"), await this._processor.updateChunks(), m("esri-2d-update-debug") && console.debug("Pipeline.updateChunksEnd"));
    } catch (r) {
      $e(r);
    }
    t?.resolver.resolve(), e?.resolver.resolve(), this._updateRequested ? (m("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=true]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 })) : (m("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=false, After flush]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: this._updateRequested }));
  }
  async _doUpdateSchema(e, t) {
    m("esri-2d-update-debug") && console.debug(`Version[${t}] Pipeline.updateStart`, { schema: e });
    const s = { tileInfo: this._tileInfoView?.tileInfo }, r = await this._source.update(e, t), i = Array.from(this._subscriptions.values());
    await this._processor.update(e, t, s, r, i), m("esri-2d-update-debug") && console.debug(`Version[${t}] Pipeline.updateEnd`);
  }
  _doUpdateSubscriptions(e) {
    m("esri-2d-update-debug") && console.debug("Pipeline.updateSubscriptions", e);
    for (const t of e.subscribe) this._subscribe(t);
    for (const t of e.unsubscribe) this._unsubscribe(t);
  }
}
export {
  sn as default
};
//# sourceMappingURL=FeaturePipelineWorker-obWJTq4G.js.map
