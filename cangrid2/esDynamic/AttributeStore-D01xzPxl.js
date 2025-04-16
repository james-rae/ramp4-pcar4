import { s as ae, t as P, M as oe, d as he } from "./LabelMetric-BZ1wS013.js";
import { aO as ee, D as S, oj as ue, ok as de, b9 as le, B as ce, bd as _e, dr as fe, A as pe, ol as ye, kw as me, s as w, om as V, aP as ge, fn as be, aX as xe, df as Y, bx as Ie, a9 as m, iB as we, dl as R, hO as Z, eV as Se, on as Te, oo as Fe, dt as T, ds as Ee, o5 as Ae } from "./main-DHXLMse1.js";
import { n as c, g as Ce, h as ve, s as ze, k as Be, f as x } from "./UpdateTracking2D-DZd6CIsL.js";
import { m as F, n as H, a as X } from "./TimeOnly-CHaaijop.js";
import { b as De, v as Me, t as Re, n as Oe } from "./timeSupport-D-Wjlxvj.js";
import { l as O } from "./highlightReasons-CgkAwhlC.js";
import { b as $e, L as $ } from "./definitions-Doe0g1C2.js";
import { U as E } from "./enums-DDkmfb-t.js";
const Ge = 1.25;
let C = class {
  get length() {
    return this._pos;
  }
  constructor(e, t) {
    this._pos = 0;
    const r = t ? this._roundToNearest(t, e.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(r), this._buffer = new e(this._array), this._ctor = e, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(e, t) {
    const r = Math.round(e);
    return t === 1 ? r : r + (t - r % t);
  }
  _ensureSize(e) {
    if (this._pos + e >= this._buffer.length) {
      const t = this._roundToNearest((this._array.byteLength + e * this._buffer.BYTES_PER_ELEMENT) * Ge, this._buffer.BYTES_PER_ELEMENT), r = new ArrayBuffer(t), i = new this._ctor(r);
      i.set(this._buffer, 0), this._array = r, this._buffer = i, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(e) {
    this._ensureSize(e);
  }
  writeF32(e) {
    this._ensureSize(1);
    const t = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = e, this._pos++, t;
  }
  push(e) {
    this._ensureSize(1);
    const t = this._pos;
    return this._buffer[this._pos++] = e, t;
  }
  writeFixed(e) {
    this._buffer[this._pos++] = e;
  }
  setValue(e, t) {
    this._buffer[e] = t;
  }
  i1616Add(e, t, r) {
    this._i16View[2 * e] += t, this._i16View[2 * e + 1] += r;
  }
  getValue(e) {
    return this._buffer[e];
  }
  getValueF32(e) {
    return new Float32Array(this._array, 4 * e, 1)[0];
  }
  incr(e) {
    if (this._buffer.length < e) throw new Error("Increment index overflows the target buffer");
    this._buffer[e]++;
  }
  decr(e) {
    this._buffer[e]--;
  }
  writeRegion(e) {
    this._ensureSize(e.length);
    const t = this._pos;
    return this._buffer.set(e, this._pos), this._pos += e.length, t;
  }
  writeManyFrom(e, t, r) {
    this._ensureSize(r - t);
    for (let i = t; i !== r; i++) this.writeFixed(e._buffer[i]);
  }
  buffer() {
    const e = this._array.slice(0, 4 * this._pos);
    return this.destroy(), e;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(e) {
    this._pos = e;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};
const Ve = 6, je = 4;
let ke = class {
  constructor(e, t, r = 0) {
    const i = Ve * r * Uint32Array.BYTES_PER_ELEMENT, s = je * r * t.stride, a = t.stride / 4, o = t.attributes.find((h) => h.name === "pos" || h.name === "position");
    if (!o) throw new Error("InternalError: Unable to find position attribute");
    this.layout = { ...t, position: o }, this._indices = new C(Uint32Array, i), this._vertices = new C(Uint32Array, s), this._metrics = new C(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = a, this._instanceId = e;
  }
  serialize(e) {
    const t = this._indices.buffer(), r = this._vertices.buffer(), i = this._metrics.length ? this._metrics.buffer() : null;
    return e.push(t, r), { instanceId: this._instanceId, layout: this.layout, indices: t, vertices: r, metrics: i };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(e) {
    this._vertices.ensureSize(e);
  }
  indexEnsureSize(e) {
    this._indices.ensureSize(e);
  }
  writeIndex(e) {
    this._indices.push(e);
  }
  writeVertex(e) {
    this._vertices.push(e);
  }
  writeVertexRegion(e) {
    this._vertices.writeRegion(e);
  }
  writeVertexF32(e) {
    this._vertices.writeF32(e);
  }
  writeMetric(e) {
    this._metrics.incr(this._metricCountOffset), e.serialize(this._metrics);
  }
}, St = class {
  constructor(e, t = 0) {
    this._id = e, this._sizeHint = t, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._didEntityStart = !1, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = { metric: null, writer: null, start: 0, sortKey: 0, instanceId: 0, layoutHash: 0, indexStart: 0, vertexStart: 0, textureKey: 0, metricBoxLenPointer: 0 }, this._entities = new C(Uint32Array, this._sizeHint * ae.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const e = new Array(), t = [], r = this._entities.buffer();
    for (const i of this._instanceIdToVertexData.values()) t.push(i.serialize(e));
    return { message: { data: t, entities: r }, transferList: e };
  }
  vertexCount() {
    return this._current.writer?.vertexCount ?? 0;
  }
  indexCount() {
    return this._current.writer?.indexCount ?? 0;
  }
  vertexEnsureSize(e) {
    this._current.writer.vertexEnsureSize(e);
  }
  indexEnsureSize(e) {
    this._current.writer.indexEnsureSize(e);
  }
  vertexWrite(e) {
    this._current.writer.writeVertex(e);
  }
  vertexWriteRegion(e) {
    this._current.writer.writeVertexRegion(e);
  }
  vertexWriteF32(e) {
    this._current.writer.writeVertexF32(e);
  }
  recordBounds(e, t, r, i) {
  }
  indexWrite(e) {
    this._current.writer.writeIndex(e);
  }
  metricStart(e) {
    this._current.metric = e;
  }
  metricEnd() {
    const e = this._current.writer;
    this._current.metric.bounds.length && e.writeMetric(this._current.metric);
  }
  metricBoxWrite(e) {
    this._current.metric.bounds.push(e);
  }
  entityStart(e, t = e) {
    this._entityIdIndex = this._entities.push(e), this._entitySortKeyIndex = this._entities.writeF32(t), this._entityRecordCountOffset = this._entities.push(0), this._didEntityStart = !0;
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    this._didEntityStart && (this.entityRecordCount() === 0 ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset), this._didEntityStart = !1);
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(e, t, r = 0) {
    this._current.writer = this._getVertexWriter(e, t), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = e, this._current.layoutHash = t.hash, this._current.textureKey = r;
  }
  recordEnd(e = 0) {
    const t = this._current.vertexStart, r = this._current.writer.vertexCount - t;
    if (!r) return !1;
    const i = this._current.indexStart, s = this._current.writer.indexCount - i;
    return this._recordIndexStart = i, this._recordIndexCount = s, this._recordVertexStart = t, this._recordVertexCount = r, this._entities.incr(this._entityRecordCountOffset), P.write(this._entities, this._current.instanceId, this._current.textureKey, i, s, t, r, e), !0;
  }
  copyLast(e, t) {
    const r = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), P.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, r, this._recordVertexCount, 0);
    const i = this._current.writer.indexWriter, s = this._current.writer.vertexWriter, a = this._recordIndexStart + this._recordIndexCount, o = this._recordVertexCount;
    for (let f = this._recordIndexStart; f !== a; f++) {
      const l = i.getValue(f);
      i.push(l + o);
    }
    const h = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, u = this._recordVertexStart * h, d = (this._recordVertexStart + this._recordVertexCount) * h;
    for (let f = u; f !== d; f++) {
      const l = s.getValue(f);
      s.push(l);
    }
    const _ = this._current.writer.layout.position, y = _.packPrecisionFactor ?? 1, g = _.offset / Uint32Array.BYTES_PER_ELEMENT, p = e * y, D = t * y;
    for (let f = r * h; f <= s.length; f += h) s.i1616Add(f + g, p, D);
  }
  copyLastFrom(e, t, r) {
    const i = e._entities.getValue(e._entityIdIndex);
    if (i !== this._entities.getValue(this._entityIdIndex)) {
      const l = e._entities.getValueF32(e._entitySortKeyIndex);
      this.entityStart(i, l);
    }
    this.recordStart(e._current.instanceId, e._current.writer.layout, e._current.textureKey);
    const s = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, a = this._current.vertexStart, o = e._current.vertexStart - a, h = this._current.writer.indexWriter, u = this._current.writer.vertexWriter, d = e._current.writer.indexWriter, _ = e._current.writer.vertexWriter;
    for (let l = e._current.indexStart; l !== d.length; l++) {
      const M = d.getValue(l);
      h.push(M - o);
    }
    for (let l = e._current.vertexStart * s; l !== _.length; l++) {
      const M = _.getValue(l);
      u.push(M);
    }
    const y = this._current.writer.layout.position, g = y.packPrecisionFactor ?? 1, p = y.offset / Uint32Array.BYTES_PER_ELEMENT, D = t * g, f = r * g;
    for (let l = a * s; l <= u.length; l += s) u.i1616Add(l + p, D, f);
    this.recordEnd();
  }
  _getVertexWriter(e, t) {
    const r = this._instanceIdToVertexData;
    return r.has(e) || r.set(e, new ke(e, t, this._sizeHint)), r.get(e);
  }
}, Ne = class {
}, Et = class extends Ne {
  constructor(e) {
    super(), this._fetcher = e, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._controller.abort();
  }
  get _abortOptions() {
    return { signal: this._controller.signal };
  }
  enqueueRequest(e) {
    const t = oe(e.resource), r = ee(JSON.stringify(t));
    return this._pendingIds.has(r) || (this._pendingIds.add(r), this._pendingRequests.push({ ...e, resourceId: r })), r;
  }
  async fetchEnqueuedResources() {
    const e = this._pendingRequests;
    this._pendingIds.clear(), this._pendingRequests = [];
    const t = await this._fetcher.fetch(e, this._abortOptions);
    for (let r = 0; r < t.length; r++) {
      const i = e[r].resourceId;
      this._resourceIdToResource.set(i, t[r]);
    }
  }
  async fetchResourceImmediate(e) {
    const t = await this._fetcher.fetch([e], this._abortOptions);
    if (t.length !== 1) throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
    return t[0];
  }
  async fetchDictionaryResourceImmediate(e) {
    const t = await this._fetcher.fetchDictionary([e], this._abortOptions);
    if (t.length !== 1) throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
    return t[0];
  }
  getResource(e) {
    return this._resourceIdToResource.get(e);
  }
}, z = class {
  destroy() {
  }
}, We = class extends z {
  constructor(e) {
    super(), this._field = e;
  }
  resize(e) {
    throw new Error("Method not implemented.");
  }
  read(e, t) {
    return e.readAttribute(this._field);
  }
  readWithDefault(e, t) {
    return e.readAttribute(this._field);
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
};
function J(n, e, t) {
  if (n == null) return null;
  const r = e.readArcadeFeature();
  e.contextTimeZone = t.$view?.timeZone;
  try {
    return n.evaluate({ ...t, $feature: r }, n.services);
  } catch (i) {
    return S.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", i), null;
  }
}
function te(n) {
  return n == null || n === 1 / 0 || n === -1 / 0 || typeof n == "number" && isNaN(n);
}
function K(n, e, t, r) {
  if (n == null) return r ?? null;
  const i = e.readArcadeFeature();
  e.contextTimeZone = t.$view?.timeZone;
  const s = n.evaluate({ ...t, $feature: i }, n.services);
  return te(s) ? r ?? null : s;
}
let Le = class re extends z {
  static async create(e, t) {
    const r = await ue(e, t.spatialReference, t.fields), i = ee(e);
    return new re(r, i);
  }
  constructor(e, t) {
    super(), this._compiled = e, this._cacheKey = t;
  }
  resize(e) {
  }
  read(e, t) {
    return this.referencesScale() || t.$view.timeZone !== "system" ? J(this._compiled, e, t) : this._readCached(e, t);
  }
  readWithDefault(e, t, r) {
    return this.referencesScale() || t.$view.timeZone !== "system" ? K(this._compiled, e, t, r) : this._readWithDefaultCached(e, t, r);
  }
  referencesScale() {
    return this._compiled?.referencesScale() ?? !1;
  }
  referencesGeometry() {
    return this._compiled?.referencesGeometry() ?? !1;
  }
  _readCached(e, t) {
    if (e.setCache(this._cacheKey), e.hasCachedValue()) return e.getCachedValue();
    const r = J(this._compiled, e, t);
    return e.setCachedValue(r), r;
  }
  _readWithDefaultCached(e, t, r) {
    if (e.setCache(this._cacheKey), e.hasCachedValue()) return e.getCachedValue();
    const i = K(this._compiled, e, t, r);
    return e.setCachedValue(i), i;
  }
};
function Ue(n, e) {
  if (n == null) return "";
  const t = e.domain;
  if (t) {
    if (t.type === "codedValue" || t.type === "coded-value") {
      const i = n;
      for (const s of t.codedValues) if (s.code === i) return s.name;
    } else if (t.type === "range") {
      const { max: i, min: s } = de(e), a = +n;
      if (s != null && i != null && s <= a && a <= i) return t.name;
    }
  }
  let r = n;
  return le(e) ? r = ce(r, _e("short-date")) : fe(e) && (r = pe(+r)), r || "";
}
let Pe = class ie extends z {
  static async create(e, t) {
    const r = ye(e);
    return new ie((i) => r.replaceAll(/{[^}]*}/g, (s) => {
      const a = s.slice(1, -1), o = i.metadata.fieldsIndex.get(a);
      if (o == null) return s;
      const h = i.readAttribute(a);
      return h == null ? "" : Ue(h, o);
    }));
  }
  constructor(e) {
    super(), this._evaluator = e;
  }
  resize(e) {
  }
  read(e, t) {
    return this._evaluator(e);
  }
  readWithDefault(e, t, r) {
    const i = this._evaluator(e);
    return te(i) ? r : i;
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
};
class Ye extends z {
  constructor(e, t) {
    super(), this._field = e, this._normalizationInfo = t;
  }
  resize(e) {
    throw new Error("Method not implemented.");
  }
  read(e, t) {
    return this._readNormalized(e);
  }
  readWithDefault(e, t) {
    return this._readNormalized(e);
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
  _readNormalized(e) {
    const t = e.readAttribute(this._field);
    if (t == null) return null;
    const { normalizationField: r, normalizationTotal: i, normalizationType: s } = this._normalizationInfo, a = e.readAttribute(r);
    switch (s ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a ? a ? t / a : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(t) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return i ? t / i * 100 : null;
    }
  }
}
let k = class v {
  static fromBuffer(e, t) {
    return new v(e, t);
  }
  static create(e, t = 4294967295) {
    const r = new Uint32Array(Math.ceil(e / 32));
    return new v(r, t);
  }
  constructor(e, t) {
    this._mask = 0, this._buf = e, this._mask = t;
  }
  _getIndex(e) {
    return Math.floor(e / 32);
  }
  has(e) {
    const t = this._mask & e;
    return !!(this._buf[this._getIndex(t)] & 1 << t % 32);
  }
  hasRange(e, t) {
    let r = e, i = t;
    for (; r % 32 && r !== i; ) {
      if (this.has(r)) return !0;
      r++;
    }
    for (; i % 32 && r !== i; ) {
      if (this.has(r)) return !0;
      i--;
    }
    if (r === i) return !1;
    for (let s = r / 32; s !== i / 32; s++)
      if (this._buf[s]) return !0;
    return !1;
  }
  set(e) {
    const t = this._mask & e, r = this._getIndex(t), i = 1 << t % 32;
    this._buf[r] |= i;
  }
  setRange(e, t) {
    let r = e, i = t;
    for (; r % 32 && r !== i; ) this.set(r++);
    for (; i % 32 && r !== i; ) this.set(i--);
    if (r !== i) for (let s = r / 32; s !== i / 32; s++) this._buf[s] = 4294967295;
  }
  unset(e) {
    const t = this._mask & e, r = this._getIndex(t), i = 1 << t % 32;
    this._buf[r] &= 4294967295 ^ i;
  }
  resize(e) {
    const t = this._buf, r = new Uint32Array(Math.ceil(e / 32));
    r.set(t), this._buf = r;
  }
  or(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] |= e._buf[t];
    return this;
  }
  and(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] &= e._buf[t];
    return this;
  }
  xor(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= e._buf[t];
    return this;
  }
  ior(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] |= ~e._buf[t];
    return this;
  }
  iand(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] &= ~e._buf[t];
    return this;
  }
  ixor(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= ~e._buf[t];
    return this;
  }
  any() {
    for (let e = 0; e < this._buf.length; e++) if (this._buf[e]) return !0;
    return !1;
  }
  copy(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] = e._buf[t];
    return this;
  }
  clone() {
    return new v(this._buf.slice(), this._mask);
  }
  clear() {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] = 0;
    return this;
  }
  forEachSet(e) {
    for (let t = 0; t < this._buf.length; t++) {
      let r = this._buf[t], i = 32 * t;
      if (r) for (; r; )
        1 & r && e(i), r >>>= 1, i++;
    }
  }
  countSet() {
    let e = 0;
    return this.forEachSet((t) => {
      e++;
    }), e;
  }
};
const G = () => S.getLogger("esri.views.2d.layers.features.support.whereUtils"), Ze = { getAttribute: (n, e) => n.readAttribute(e) };
async function se(n, e) {
  try {
    const t = await me(n, e);
    if (!t.isStandardized) {
      const r = new w("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", t);
      G().error(r);
    }
    return (r) => {
      const i = r.readArcadeFeature();
      try {
        return t.testFeature(i, Ze);
      } catch {
        return G().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", n), !0;
      }
    };
  } catch {
    return G().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", n), (r) => !0;
  }
}
const Q = () => S.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage"), b = 4294967295;
function A(n, e, t) {
  if (!(n.length > e)) for (; n.length <= e; ) n.push(t);
}
let zt = class {
  constructor(e) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = e;
  }
  createBitset() {
    const e = this._bitsets.length;
    return this._bitsets.push(k.create(this._allocatedSize, c)), e + 1;
  }
  async createComputedField(e, t = !1) {
    if (e.expression) try {
      if (!this.compilationOptions) throw new Error("InternalError: Compilation options not defined");
      return t ? Pe.create(e.expression, this.compilationOptions) : await Le.create(e.expression, this.compilationOptions);
    } catch (i) {
      const s = new w("featurelayer", "Failed to compile arcade expression", { error: i, expression: e.expression });
      return Q().error(s), null;
    }
    if (e.normalizationType || e.normalizationField) return new Ye(e.field, e);
    if (e.field) return new We(e.field);
    const r = new w("featurelayer", "Unable to create computed field. No expression or field found", { info: e });
    return Q().error(r), null;
  }
  async createWhereClause(e) {
    return e ? se(e, this.compilationOptions.fields) : null;
  }
  getBitset(e) {
    return this._bitsets[e - 1];
  }
  getComputedNumeric(e, t) {
    return this.getComputedNumericAtIndex(e & c, 0);
  }
  setComputedNumeric(e, t, r) {
    return this.setComputedNumericAtIndex(e & c, r, 0);
  }
  getComputedString(e, t) {
    return this.getComputedStringAtIndex(e & c, 0);
  }
  setComputedString(e, t, r) {
    return this.setComputedStringAtIndex(e & c, 0, r);
  }
  getComputedNumericAtIndex(e, t) {
    const r = e & c;
    return this._ensureNumeric(t, r), this._numerics[t][r];
  }
  setComputedNumericAtIndex(e, t, r) {
    const i = e & c;
    this._ensureNumeric(t, i), this._numerics[t][i] = r;
  }
  getPackedChunkId(e) {
    const t = e & c;
    return this._ensureInstanceId(t), this._instanceIds[t];
  }
  setPackedChunkId(e, t) {
    const r = e & c;
    this._ensureInstanceId(r), this._instanceIds[r] = t;
  }
  getComputedStringAtIndex(e, t) {
    const r = e & c;
    return this._ensureString(t, r), this._strings[t][r];
  }
  setComputedStringAtIndex(e, t, r) {
    const i = e & c;
    this._ensureString(t, i), this._strings[t][i] = r;
  }
  getXMin(e) {
    return this._bounds[4 * (e & c)];
  }
  getYMin(e) {
    return this._bounds[4 * (e & c) + 1];
  }
  getXMax(e) {
    return this._bounds[4 * (e & c) + 2];
  }
  getYMax(e) {
    return this._bounds[4 * (e & c) + 3];
  }
  setBounds(e, t, r = !1) {
    const i = e & c;
    if (!r && !this._dirtyBitset.has(e)) return this._bounds[4 * i] !== b;
    this._dirtyBitset.unset(e);
    const s = t.readGeometryWorldSpace();
    if (A(this._bounds, 4 * i + 4, 0), !s || !s.coords.length) return this._bounds[4 * i] = b, this._bounds[4 * i + 1] = b, this._bounds[4 * i + 2] = b, this._bounds[4 * i + 3] = b, !1;
    let a = 1 / 0, o = 1 / 0, h = -1 / 0, u = -1 / 0;
    return s.forEachVertex((d, _) => {
      a = Math.min(a, d), o = Math.min(o, _), h = Math.max(h, d), u = Math.max(u, _);
    }), this._bounds[4 * i] = a, this._bounds[4 * i + 1] = o, this._bounds[4 * i + 2] = h, this._bounds[4 * i + 3] = u, !0;
  }
  getBounds(e, t) {
    const r = this.getXMin(t), i = this.getYMin(t), s = this.getXMax(t), a = this.getYMax(t);
    return V(e, r, i, s, a), r !== b;
  }
  _ensureNumeric(e, t) {
    this._numerics[e] || (this._numerics[e] = []), A(this._numerics[e], t, 0);
  }
  _ensureInstanceId(e) {
    A(this._instanceIds, e, 0);
  }
  _ensureString(e, t) {
    this._strings[e] || (this._strings[e] = []), A(this._strings[e], t, null);
  }
}, j = class {
  getObjectId(e) {
    return e.getObjectId();
  }
  getAttributes(e) {
    return e.readAttributes();
  }
  getAttribute(e, t) {
    return e.readAttribute(t);
  }
  getAttributeAsTimestamp(e, t) {
    return e.readAttributeAsTimestamp(t);
  }
  cloneWithGeometry(e, t) {
    return e;
  }
  getGeometry(e) {
    return e.readGeometryWorldSpace();
  }
  getCentroid(e, t) {
    return e.readCentroidForDisplay();
  }
};
j.Shared = new j();
const I = 1, He = 2;
class N {
  constructor(e) {
    this._geometryBounds = ge(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = e;
  }
  static async create(e) {
    const t = new N(e);
    return await t.update(e.filterJSON, e.spatialReference), t;
  }
  get hash() {
    return this._hash;
  }
  check(e) {
    return this._applyFilter(e);
  }
  clear() {
    const e = this._resetAllHiddenIds();
    return this.update(), { show: e, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((e, t) => {
      this._idToVisibility.set(t, 0);
    });
  }
  setKnownIds(e) {
    for (const t of e) this._idToVisibility.set(t, I);
  }
  setTrue(e) {
    const t = [], r = [], i = new Set(e);
    return this._idToVisibility.forEach((s, a) => {
      const o = !!(this._idToVisibility.get(a) & I), h = i.has(a);
      !o && h ? t.push(a) : o && !h && r.push(a), this._idToVisibility.set(a, h ? I | He : 0);
    }), { show: t, hide: r };
  }
  createQuery() {
    const { geometry: e, spatialRel: t, where: r, timeExtent: i, objectIds: s } = this;
    return be.fromJSON({ geometry: e, spatialRel: t, where: r, timeExtent: i, objectIds: s });
  }
  async update(e, t) {
    this._hash = JSON.stringify(e);
    const r = await De(e, null, t);
    await Promise.all([this._setGeometryFilter(r), this._setIdFilter(r), this._setAttributeFilter(r), this._setTimeFilter(r)]);
  }
  async _setAttributeFilter(e) {
    if (!e?.where) return this._clause = null, void (this.where = null);
    this._clause = await se(e.where, this._serviceInfo.fieldsIndex), this.where = e.where;
  }
  _setIdFilter(e) {
    this._idsToShow = e?.objectIds && new Set(e.objectIds), this._idsToHide = e?.hiddenIds && new Set(e.hiddenIds), this.objectIds = e?.objectIds;
  }
  async _setGeometryFilter(e) {
    if (!e?.geometry) return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const t = e.geometry, r = e.spatialRel || "esriSpatialRelIntersects", i = await Me(r, t, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    xe(this._geometryBounds, t), this._spatialQueryOperator = i, this.geometry = t, this.spatialRel = r;
  }
  _setTimeFilter(e) {
    if (this.timeExtent = this._timeOperator = null, e?.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = e.timeExtent, this._timeOperator = Re(this._serviceInfo.timeInfo, e.timeExtent, j.Shared);
    else {
      const t = new w("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", e.timeExtent);
      S.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t);
    }
  }
  _applyFilter(e) {
    return this._filterByGeometry(e) && this._filterById(e) && this._filterByTime(e) && this._filterByExpression(e);
  }
  _filterByExpression(e) {
    return !this.where || this._clause(e);
  }
  _filterById(e) {
    return (!this._idsToHide?.size || !this._idsToHide.has(e.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(e.getObjectId()));
  }
  _filterByGeometry(e) {
    if (!this.geometry) return !0;
    const t = e.readGeometryWorldSpace();
    return !!t && this._spatialQueryOperator(t);
  }
  _filterByTime(e) {
    return this._timeOperator == null || this._timeOperator(e);
  }
  _resetAllHiddenIds() {
    const e = [];
    return this._idToVisibility.forEach((t, r) => {
      t & I || (this._idToVisibility.set(r, I), e.push(r));
    }), e;
  }
}
class W {
  static minimal(e, t, r = []) {
    return new W({ geometryType: e, fields: r, objectIdField: t, subtypes: null, subtypeField: null, types: null, globalIdField: null, spatialReference: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null });
  }
  constructor(e) {
    this._options = e, this._fieldsIndex = "fieldsIndex" in e ? Y.fromJSON(e.fieldsIndex) : new Y(e.fields), e.spatialReference && (this._spatialReference = Ie.fromJSON(e.spatialReference)), this._arcadeSchema = { fields: this.fieldsIndex.fields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, objectIdField: this.objectIdField, globalIdField: this._options.globalIdField, spatialReference: this._spatialReference, timeInfo: this._options.timeInfo, typeIdField: this._options.typeIdField ?? void 0, types: this._options.types ?? void 0, subtypeField: this._options.subtypeField, subtypes: this._options.subtypes ?? void 0 };
  }
  get fieldsIndex() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._options.geometryType;
  }
  get subtypeField() {
    return this._options.subtypeField;
  }
  get timeInfo() {
    return this._options.timeInfo;
  }
  get objectIdField() {
    return this._options.objectIdField;
  }
  get globalIdField() {
    return this._options.globalIdField;
  }
  get arcadeSchema() {
    return this._arcadeSchema;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  get timeReferenceUnknownClient() {
    return this._options.timeReferenceUnknownClient;
  }
}
let Mt = class ne extends W {
  static create(e) {
    return new ne({ fields: [], objectIdField: "uid", geometryType: null, spatialReference: e, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, typeIdField: null, types: null, timeReferenceUnknownClient: null });
  }
};
class Xe {
  constructor(e) {
    this._valid = k.create(e), this._data = new Array(e);
  }
  has(e) {
    return this._valid.has(e);
  }
  set(e, t) {
    this._valid.set(e), this._data[e] = t;
  }
  get(e) {
    return this._data[e];
  }
}
const B = m("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5], Je = B[0], Ke = B[1], Qe = B[2], qe = B[3], L = m("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4], et = L[0], tt = L[1], rt = L[2], it = m("featurelayer-simplify-mobile-factor") ?? 2, st = m("esri-mobile"), q = 4294967295;
function nt(n, e, t) {
  if (!(n.length > e)) for (; n.length <= e; ) n.push(t);
}
class Rt {
  constructor(e) {
    this.metadata = e, this.type = "FeatureSetReader", this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  get isEmpty() {
    return this._deleted != null && this._deleted.countSet() === this.getSize();
  }
  getAreaSimplificationThreshold(e, t) {
    let r = 1;
    const i = st ? it : 1;
    t > 4e6 ? r = rt * i : t > 1e6 ? r = tt * i : t > 5e5 ? r = et * i : t > 1e5 && (r = i);
    let s = 0;
    return e > 4e3 ? s = qe * r : e > 2e3 ? s = Qe * r : e > 100 ? s = Ke : e > 15 && (s = Je), s;
  }
  parseTimestampOffset(e) {
    return e;
  }
  getBounds(e) {
    if (nt(this._boundsBuffer, 4 * this.getIndex() + 4, 0), this.getBoundsXMin() === q) return !1;
    if (this.getBoundsXMin() === 0) {
      const a = this.readGeometryWorldSpace();
      if (!a) return this.setBoundsXMin(q), !1;
      let o = 1 / 0, h = 1 / 0, u = -1 / 0, d = -1 / 0;
      return a.forEachVertex((_, y) => {
        o = Math.min(o, _), h = Math.min(h, y), u = Math.max(u, _), d = Math.max(d, y);
      }), this.setBoundsXMin(o), this.setBoundsYMin(h), this.setBoundsXMax(u), this.setBoundsYMax(d), V(e, o, h, u, d), !0;
    }
    const t = this.getBoundsXMin(), r = this.getBoundsYMin(), i = this.getBoundsXMax(), s = this.getBoundsYMax();
    return V(e, t, r, i, s), !0;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e) {
    this._boundsBuffer[4 * this.getIndex()] = e;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e;
  }
  readAttributeAsTimestamp(e) {
    const t = this.readAttribute(e);
    return typeof t == "string" ? new Date(t).getTime() : typeof t == "number" || t == null ? t : null;
  }
  readAttribute(e, t = !1) {
    const r = this._readAttribute(e, t);
    if (r !== void 0) return r;
    for (const i of this._joined) {
      i.setIndex(this.getIndex());
      const s = i._readAttribute(e, t);
      if (s !== void 0) return s;
    }
  }
  readAttributes() {
    const e = this._readAttributes();
    for (const t of this._joined) {
      t.setIndex(this.getIndex());
      const r = t._readAttributes();
      for (const i of Object.keys(r)) e[i] = r[i];
    }
    return e;
  }
  joinAttributes(e) {
    this._joined.push(e);
  }
  removeIds(e) {
    if (this._objectIdToIndex == null) {
      const r = /* @__PURE__ */ new Map(), i = this.getCursor();
      for (; i.next(); ) {
        const s = i.getObjectId();
        we(s), r.set(s, i.getIndex());
      }
      this._objectIdToIndex = r;
    }
    const t = this._objectIdToIndex;
    for (const r of e.values()) t.has(r) && this._removeAtIndex(t.get(r));
  }
  readOptimizedFeatureWorldSpace() {
    const e = this.readGeometryWorldSpace(), t = this.readAttributes(), r = this.readCentroidWorldSpace(), i = new Ee(e, t, r);
    return i.objectId = this.getObjectId(), i.displayId = this.getDisplayId(), i;
  }
  readLegacyFeatureForDisplay() {
    const e = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyFeatureWorldSpace() {
    const e = this.readCentroidWorldSpace();
    return { attributes: this.readAttributes(), geometry: this._readLegacyGeometryWorldSpace(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e = this.readGeometryForDisplay();
    return R(e, this.geometryType, !1, !1);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e = this._readX(), t = this.getInTransform();
    return t == null ? e : e * t.scale[0] + t.translate[0];
  }
  readYWorldSpace() {
    const e = this._readY(), t = this.getInTransform();
    return t == null ? e : t.translate[1] - e * t.scale[1];
  }
  readGeometryForDisplay() {
    const e = this._readGeometryDeltaDecoded(!0);
    if (!e) {
      const t = this._createGeometryFromServerCentroid();
      return t ? t.deltaDecode() : null;
    }
    return e;
  }
  readGeometryWorldSpace() {
    let e = this._readGeometry();
    if (e || (e = this._createGeometryFromServerCentroid()), !e) return null;
    const t = e.clone(), r = this.getInTransform();
    return r != null && Z(t, t, this.hasZ, this.hasM, r), t;
  }
  readCentroidForDisplay() {
    const e = this.readGeometryForDisplay();
    return e ? this._computeDisplayCentroid(e) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e = this.readGeometryForDisplay(), t = e ? this._computeDisplayCentroid(e) : this._readServerCentroid();
    if (!t) return null;
    const r = t.clone(), i = this.getInTransform();
    return i != null && Z(r, r, this.hasZ, this.hasM, i), r;
  }
  setCache(e) {
    let t = this._caches.get(e);
    t == null && (t = new Xe(this.getSize()), this._caches.set(e, t)), this._activeCache = t;
  }
  setCachedValue(e) {
    this._activeCache.set(this.getIndex(), e);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  _readGeometryDeltaDecoded(e) {
    const t = this._readGeometry(e);
    return this.geometryType !== "esriGeometryPoint" && t && this.getInTransform() ? t.deltaDecode() : t;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e) {
    this._contextTimeZone = e;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e) {
    return this.fields.has(e) || this._joined.some((t) => t.hasField(e));
  }
  geometry() {
    const e = this.readGeometryWorldSpace(), t = R(e, this.geometryType, this.hasZ, this.hasM), r = Se(t);
    if (r) {
      if (!this.metadata.spatialReference) throw new Error("InternalError: Expected spatial reference to be defined");
      r.spatialReference = this.metadata.spatialReference;
    }
    return r;
  }
  autocastArcadeDate(e, t) {
    return t && t instanceof Date ? this.isUnknownDateTimeField(e) ? F.unknownDateJSToArcadeDate(t) : F.dateJSAndZoneToArcadeDate(t, this.contextTimeZone ?? Te) : t;
  }
  isUnknownDateTimeField(e) {
    return this.metadata.fieldsIndex.getTimeZone(e) === Fe;
  }
  field(e) {
    let t = this.fields.get(e);
    if (t) switch (t.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return X.fromReader(this.readAttribute(e, !1));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return H.fromReader(this.readAttribute(e, !1));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return F.fromReaderAsTimeStampOffset(this.readAttribute(e, !1));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(e, this.readAttribute(e, !0));
      default:
        return this.readAttribute(e, !1);
    }
    for (const r of this._joined) if (r.setIndex(this.getIndex()), t = r.fields.get(e), t) switch (t.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return X.fromReader(r._readAttribute(e, !1));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return H.fromReader(r._readAttribute(e, !1));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return F.fromReaderAsTimeStampOffset(r._readAttribute(e, !1));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(e, r._readAttribute(e, !0));
      default:
        return this.readAttribute(e, !1);
    }
    throw new Error(`Field ${e} does not exist`);
  }
  setField(e, t) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e) => e.name);
  }
  castToText(e = !1) {
    if (!e) return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t = this.readLegacyFeatureForDisplay();
    if (!t) return JSON.stringify(null);
    const r = { geometry: t.geometry, attributes: { ...t.attributes ?? {} } };
    for (const i in r.attributes) {
      const s = r.attributes[i];
      s instanceof Date && (r.attributes[i] = s.getTime());
    }
    return JSON.stringify(r);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e = null) {
    return { attributes: this._readAttributes(), geometry: e?.keepGeometryType === !0 ? this.geometry() : this.geometry()?.toJSON() ?? null };
  }
  castAsJsonAsync(e = null, t = null) {
    return Promise.resolve(this.castAsJson(t));
  }
  _getExists() {
    return this._deleted == null || !this._deleted.has(this.getIndex());
  }
  _computeDisplayCentroid(e) {
    if (this.getInTransform() == null) return Oe(new T(), e, this.hasM, this.hasZ);
    const t = Ce.fromOptimized(e, this.geometryType);
    t.yFactor *= -1;
    const r = ve(t);
    return r ? (r[1] *= -1, new T([], r)) : null;
  }
  copyInto(e) {
    e._joined = this._joined, e._deleted = this._deleted, e._objectIdToIndex = this._objectIdToIndex, e._boundsBuffer = this._boundsBuffer, e._activeCache = this._activeCache, e._caches = this._caches, e._contextTimeZone = this._contextTimeZone;
  }
  _readLegacyGeometryWorldSpace() {
    const e = this.readGeometryWorldSpace();
    return R(e, this.geometryType, !1, !1);
  }
  _createGeometryFromServerCentroid() {
    const e = this._readServerCentroid();
    if (!e) return null;
    const [t, r] = e.coords;
    return this._createQuantizedExtrudedGeometry(t, r);
  }
  _createQuantizedExtrudedGeometry(e, t) {
    return this.geometryType === "esriGeometryPolyline" ? this._createQuantizedExtrudedLine(e, t) : this._createQuantizedExtrudedQuad(e, t);
  }
  _createQuantizedExtrudedQuad(e, t) {
    return new T([5], [e - 1, t, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createQuantizedExtrudedLine(e, t) {
    return new T([2], [e - 1, t + 1, 1, -1]);
  }
  _removeAtIndex(e) {
    this._deleted == null && (this._deleted = k.create(this.getSize())), this._deleted.set(e);
  }
}
const at = (n, e) => () => null, ot = !1;
class ht {
  constructor(e) {
    this.data = e, this._referenceCount = 0;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return this._referenceCount === 0;
  }
}
class ut {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  createIdForObjectId(e) {
    let t = this._objectIdToDisplayId.get(e);
    return t ? t.increment() : (t = new ht(ze(this._getFreeId(), !1)), t.increment(), this._objectIdToDisplayId.set(e, t)), t.data;
  }
  releaseIdForObjectId(e) {
    const t = this._objectIdToDisplayId.get(e);
    t && (t.decrement(), t.empty() && (this._objectIdToDisplayId.delete(e), this._freeIds.push(t.data)));
  }
  releaseAll() {
    for (const e of this._objectIdToDisplayId.values()) this._freeIds.push(e.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
}
function dt(n, e) {
  if (!n || !e) return n;
  switch (e) {
    case "radius":
    case "distance":
      return 2 * n;
    case "diameter":
    case "width":
      return n;
    case "area":
      return Math.sqrt(n);
  }
  return n;
}
const U = () => S.getLogger("esri.views.layers.2d.features.support.AttributeStore"), lt = at(ot, U());
m("esri-shared-array-buffer"), m("esri-atomics");
class ct {
  constructor(e, t, r) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: i, layout: s, textureOnly: a } = t;
    this.textureOnly = a || !1, this.pixelType = i, this.layout = s, this._resetRange(), this.size = e, this.isLocal = r, a || (this.data = this._initData(i, e));
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(e, t) {
    const r = this.data;
    for (let i = 0; i < this.size * this.size; i++) r[i * this.texelSize + e] &= ~t;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(e, t) {
    const r = this.data;
    for (let i = 0; i < this.size * this.size; i++) r[i * this.texelSize + e] |= 255 & t;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(e, t, r) {
    const i = this.data;
    for (const s of r) i[s * this.texelSize + e] |= t, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s);
  }
  setComponentTexel(e, t, r) {
    this.data[r * this.texelSize + e] |= t, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
  }
  unsetComponentTexel(e, t, r) {
    this.data[r * this.texelSize + e] &= ~t, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
  }
  getData(e, t) {
    const r = x(e);
    return this.data[r * this.texelSize + t];
  }
  setData(e, t, r) {
    const i = x(e), s = 1 << t;
    this.layout & s ? this.data != null && (this.data[i * this.texelSize + t] = r, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i)) : U().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(e) {
    if (this.size = e, !this.textureOnly) {
      const t = this._initData(this.pixelType, e), r = this.data;
      t.set(r), this.data = t;
    }
  }
  toMessage() {
    const e = this.dirtyStart, t = this.dirtyEnd, r = this.texelSize;
    if (e > t) return null;
    this._resetRange();
    const i = !this.isLocal, s = this.pixelType, a = this.layout, o = this.data;
    return { start: e, end: t, data: i && o.slice(e * r, (t + 1) * r) || null, pixelType: s, layout: a };
  }
  _initData(e, t) {
    const r = ArrayBuffer, i = he(e), s = new i(new r(t * t * 4 * i.BYTES_PER_ELEMENT));
    for (let a = 0; a < s.length; a += 4) s[a + 1] = 255;
    return s;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class Ot {
  constructor(e) {
    this._client = e, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = $e, this._idsToHighlight = /* @__PURE__ */ new Map(), this._referencesScale = !1, this._referencesGeometry = !1, this._initialized = !1, this.version = 0, this._idGenerator = new ut(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (this._blockDescriptors != null) return;
    const e = E.FLOAT;
    this._blockDescriptors = [{ pixelType: E.UNSIGNED_BYTE, layout: 1 }, { pixelType: E.UNSIGNED_BYTE, layout: 15, textureOnly: !0 }, { pixelType: E.UNSIGNED_BYTE, layout: 15, textureOnly: !0 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get referencesScale() {
    return this._referencesScale;
  }
  get referencesGeometry() {
    return this._referencesGeometry;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(e) {
    return this._idGenerator.createIdForObjectId(e);
  }
  releaseDisplayIdForObjectId(e) {
    return this._idGenerator.releaseIdForObjectId(e);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  async update(e, t, r, i, s = 0) {
    const a = Ae(this._schema, e);
    if (this.version = s, a && (m("esri-2d-update-debug") && console.debug(`Version[${s}] AttributeStore.update`, { changed: a }), this._schema = e, this._attributeComputeInfo = null, this._initialize(), e != null)) if (r && (this._filters = await Promise.all(e.filters.map((o) => o ? N.create({ geometryType: r.geometryType, hasM: !1, hasZ: !1, timeInfo: r.timeInfo, fieldsIndex: r.fieldsIndex, spatialReference: i ?? r.spatialReference, filterJSON: o }) : null))), e.type !== "subtype") this._attributeComputeInfo = { isSubtype: !1, map: /* @__PURE__ */ new Map() }, await Promise.all(e.bindings.map(async (o) => {
      const h = await this._bind(t, o);
      this._referencesGeometry = this._referencesGeometry || (h?.referencesGeometry() ?? !1), this._referencesScale = this._referencesScale || (h?.referencesScale() ?? !1);
    }));
    else {
      this._attributeComputeInfo = { isSubtype: !0, subtypeField: e.subtypeField, map: /* @__PURE__ */ new Map() }, this._referencesScale = !1, this._referencesGeometry = !1;
      for (const o in e.bindings) {
        const h = e.bindings[o];
        await Promise.all(h.map(async (u) => {
          const d = await this._bind(t, u, parseInt(o, 10));
          this._referencesGeometry = this._referencesGeometry || (d?.referencesGeometry() ?? !1), this._referencesScale = this._referencesScale || (d?.referencesScale() ?? !1);
        }));
      }
    }
  }
  setHighlight(e, t) {
    const r = this._getBlock(0);
    r.unsetComponentAllTexels(0, (1 << O.length) - 1);
    for (const { displayId: i, highlightFlags: s } of e) {
      if (i == null) continue;
      const a = x(i);
      r.setComponent(0, s, [a]);
    }
    this._idsToHighlight.clear();
    for (const { objectId: i, highlightFlags: s } of e) this._idsToHighlight.set(i, s);
    for (const { objectId: i, highlightFlags: s } of t) this._idsToHighlight.set(i, s);
  }
  setData(e, t, r, i) {
    const s = x(e);
    this._ensureSizeForTexel(s), this._getBlock(t).setData(e, r, i);
  }
  getData(e, t, r) {
    return this._getBlock(t).getData(e, r);
  }
  getHighlightFlags(e) {
    return this._idsToHighlight.get(e) || 0;
  }
  unsetAttributeData(e) {
    const t = x(e);
    this._getBlock(0).setData(t, 0, 0);
  }
  setAttributeData(e, t, r) {
    const i = x(e);
    this._ensureSizeForTexel(i), this._getBlock(0).setData(i, 0, this.getFilterFlags(t));
    const s = this._attributeComputeInfo, a = 1, o = 4;
    let h = null;
    s && (h = s.isSubtype ? s.map.get(t.readAttribute(s.subtypeField)) : s.map, h?.size && h.forEach((u, d) => {
      const _ = d * a % o, y = Math.floor(d * a / o), g = this._getBlock(y + $.VV);
      let p = u.field?.read(t, r);
      u.valueRepresentation && (p = dt(p, u.valueRepresentation)), (p === null || isNaN(p) || p === 1 / 0 || p === -1 / 0) && (p = Be), g.setData(i, _, p);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  sendUpdates() {
    const e = this._blocks.map((r) => r != null ? r.toMessage() : null), t = this._getInitArgs();
    m("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), this._client.update({ initArgs: t, blockData: e, version: this.version, sendUpdateEpoch: this._epoch }), this._epoch += 1, m("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(e) {
    for (; e >= this._size * this._size; ) if (this._expand()) return;
  }
  async _bind(e, t, r) {
    const i = await e.createComputedField(t), { valueRepresentation: s } = t, a = this._attributeComputeInfo;
    if (a.isSubtype) {
      const o = a.map.get(r) ?? /* @__PURE__ */ new Map();
      o.set(t.binding, { field: i, valueRepresentation: s }), a.map.set(r, o);
    } else a.map.set(t.binding, { field: i, valueRepresentation: s });
    return i;
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = !0, this._getBlock($.Animation), this._getBlock($.GPGPU), { blockSize: this._size, blockDescriptors: this._blocks.map((e) => e != null ? { textureOnly: e.textureOnly, buffer: e.buffer, pixelType: e.pixelType } : null) });
  }
  _getBlock(e) {
    const t = this._blocks[e];
    if (t != null) return t;
    const r = new ct(this._size, this._blockDescriptors[e], this._client.isLocal);
    return this._blocks[e] = r, this._initialized = !1, r;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const e = this._size <<= 1;
      lt("Expanding block size to", e, this._blocks);
      for (const t of this._blocks) t?.expand(e);
      return this._initialized = !1, this._size = e, 0;
    }
    return U().error(new w("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  isVisible(e) {
    return !!(this._getBlock(0).getData(e, 0) & 1 << O.length);
  }
  getFilterFlags(e) {
    let t = 0;
    for (let i = 0; i < this._filters.length; i++) {
      const s = !!(1 << i), a = this._filters[i];
      t |= (!s || a == null || a.check(e) ? 1 : 0) << i;
    }
    let r = 0;
    if (this._idsToHighlight.size) {
      const i = e.getObjectId();
      r = this.getHighlightFlags(i);
    }
    return t << O.length | r;
  }
}
export {
  Rt as M,
  Et as a,
  Ot as b,
  N as c,
  te as d,
  Xe as e,
  j as f,
  W as i,
  Mt as l,
  St as n,
  zt as p,
  z as s,
  k as t
};
//# sourceMappingURL=AttributeStore-D01xzPxl.js.map
