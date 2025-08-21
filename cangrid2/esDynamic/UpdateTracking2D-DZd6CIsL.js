import { C as Co } from "./BidiEngine-rXjljmDh.js";
import { dt as wi, op as hs, aV as nt, aW as mt, aU as As, aK as ht, aT as Si, aa as ce, qB as Jt, bx as er, qC as $o, qD as Io, qE as ei, kY as Zr, qF as ko, qG as To, aP as pe, qH as zo, oO as Lo, qI as Ao, a1 as Fo, d8 as Nt, qJ as Eo, D as me, jk as ts, jj as Qr, oL as Mi, qK as No, or as he, fH as ds, lb as xr, jl as ui, ot as br, b5 as Oo, jw as gt, mi as Ro, p2 as v, pf as kt, a9 as si, qL as Go, o$ as Do, qM as se, p9 as tn, pa as en, pb as Vo, pc as Bo, p6 as pi, p8 as Ho, p7 as Xo, qN as Uo, qO as Yo, ju as qo, k0 as Wo, aX as sn, h9 as jo, qP as Ko, qQ as fs, qR as Jo, qS as Zo, s as rn, O as g, z as Qo, aO as ta, pn as R, P as Pr, Q as ea, e2 as sa, k9 as ia, im as ra, S as na } from "./main-DHXLMse1.js";
import { i as wr, g as oa, r as ms } from "./GeometryUtils-Bm16CC-p.js";
import { O as jt, P as Fs, R as $, k as W, B as Pe, A as _s, X as yt, o as Ot, Y as di, Z as we, K as gs, U as lt, w as It, a as ys, C as aa, l as ha, b as la, u as ca, y as ua, c as Sr, f as pa, T as da } from "./enums-BsbtGCGp.js";
import { e as fa, d as ma, A as nn, V as on, W as _a, X as ga, s as ya } from "./definitions-Doe0g1C2.js";
import { t as xa } from "./Rect-DD6XS68q.js";
import { i as Te, T as ba } from "./LabelMetric-BZ1wS013.js";
import { a as xs } from "./BindType-9iOk18Ed.js";
import { s as Pa } from "./Util-d5_9qOC-.js";
import "./Texture-D-YIHT8g.js";
import "./enums-DDkmfb-t.js";
import { r as wa } from "./Program-BYtVT21d.js";
import { l as an } from "./highlightReasons-CgkAwhlC.js";
var Mr;
(function(i) {
  i[i.Fill = 0] = "Fill", i[i.PatternFill = 1] = "PatternFill", i[i.ComplexFill = 2] = "ComplexFill", i[i.OutlineFill = 3] = "OutlineFill", i[i.PatternOutlineFill = 4] = "PatternOutlineFill", i[i.ComplexOutlineFill = 5] = "ComplexOutlineFill", i[i.Marker = 6] = "Marker", i[i.PieChart = 7] = "PieChart", i[i.Line = 8] = "Line", i[i.TexturedLine = 9] = "TexturedLine", i[i.Text = 10] = "Text", i[i.Label = 11] = "Label", i[i.Heatmap = 12] = "Heatmap", i[i.DotDensity = 13] = "DotDensity", i[i.Test = 14] = "Test";
})(Mr || (Mr = {}));
let O = class {
  static fromOptimized(t, e, s = !1, r = !1, n = 1) {
    return new vi().initialize(t, e, s, r, n);
  }
  static fromJSON(t, e = !1, s = !1) {
    const [r, n] = vr(t);
    return new Ci().initialize(r, n, e, s, 1);
  }
  static fromOptimizedCIM(t, e, s = !1, r = !1, n = 1) {
    return new Cr().initialize(t, e, s, r, n);
  }
  static fromJSONCIM(t, e = !1, s = !1, r = 1) {
    const [n, o] = vr(t);
    return new $r().initialize(n, o, e, s, r);
  }
  static fromFeatureSetReader(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimized(e, s) : null;
  }
  static fromFeatureSetReaderCIM(t) {
    const e = t.readGeometryForDisplay(), s = t.geometryType;
    return e && s ? this.fromOptimizedCIM(e, s) : null;
  }
  static createEmptyOptimized(t, e = !1, s = !1, r = 1) {
    return new vi().initialize(new wi(), t, e, s, r);
  }
  static createEmptyJSON(t, e = !1, s = !1) {
    return new Ci().initialize([], t, e, s, 1);
  }
  static createEmptyOptimizedCIM(t, e = !1, s = !1, r = 1) {
    return new Cr().initialize(new wi(), t, e, s, r);
  }
  static createEmptyJSONCIM(t, e = !1, s = !1, r = 1) {
    return new $r().initialize([], t, e, s, r);
  }
  asJSON() {
    const t = hs(this);
    return this.geometryType === "esriGeometryEnvelope" ? { xmin: t[0][0][0], ymin: t[0][0][1], xmax: t[0][2][0], ymax: t[0][2][1] } : this.geometryType === "esriGeometryMultipoint" ? { points: t.flat() } : this.geometryType === "esriGeometryPoint" ? { x: t[0][0][0], y: t[0][0][1] } : this.geometryType === "esriGeometryPolygon" ? { rings: t } : { paths: t };
  }
  getCurrentRingArea() {
    if (this.pathSize < 3) return 0;
    let t, e, s = 0;
    if (this.seekPathStart(), !this.nextPoint()) return 0;
    t = this.x, e = this.y;
    const r = t, n = e;
    for (; this.nextPoint(); ) s += (t - this.x) * (e + this.y), t = this.x, e = this.y;
    return s += (t - r) * (e + n), -0.5 * s;
  }
  invertY() {
    this.yFactor *= -1;
  }
}, vi = class hn extends O {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t, e, s, r, n) {
    return this.hasZ = s, this.hasM = r, this.geometryType = e, this._stride = 2 + Number(s) + Number(r), this._geometry = t, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = n, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPath(t) {
    if (t >= 0 && t < this.totalSize) {
      if (this._pathIndex < t) for (; this._pathIndex < t && this.nextPath(); ) ;
      else if (this._pathIndex > t) for (; this._pathIndex > t && this.prevPath(); ) ;
      return !0;
    }
    return !1;
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t) {
    const e = this._pathOffset + t * this._stride;
    return e >= 0 && e < this._end && (this._pointOffset = e, !0);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    return !(this.pathIndex >= this.totalSize - 1) && (this._pathIndex >= 0 && (this._pathOffset += this._stride * this.pathSize), this._pathIndex++, this._pointOffset = this._pathOffset - this._stride, this._end = this._pointOffset + this._stride + this._stride * this.pathSize, !0);
  }
  prevPath() {
    return !(this.pathIndex <= 0) && (this._pathIndex--, this._end = this._pathOffset, this._pathOffset -= this._stride * this.pathSize, this._pointOffset = this._pathOffset - this._stride, !0);
  }
  pathLength() {
    const t = this._end, e = this._stride, s = this._geometry.coords;
    let r = 0;
    for (let n = this._pathOffset + e; n < t; n += e) {
      const o = s[n - e], a = s[n - e + 1], h = s[n] - o, l = s[n + 1] - a;
      r += Math.sqrt(h * h + l * l);
    }
    return r;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t) {
    this.startPath(), this.pushPoints(t);
  }
  pushPoint(t) {
    for (let e = 0; e < this._stride; ++e) this._geometry.coords.push(t[e]);
    this._geometry.lengths[this.totalSize - 1]++;
  }
  pushXY(t, e) {
    this._geometry.coords.push(t, e), this._geometry.lengths[this.totalSize - 1]++;
  }
  pushPoints(t) {
    for (const e of t) for (let s = 0; s < this._stride; ++s) this._geometry.coords.push(e[s]);
    this._geometry.lengths[this.totalSize - 1] += t.length;
  }
  pushCursor(t) {
    const e = t.asOptimized();
    this._geometry.coords.push(...e.coords), this._geometry.lengths.push(...e.lengths);
  }
  asOptimized() {
    const t = this._geometry.clone();
    if (this.yFactor !== 1) for (let e = 1; e < t.coords.length; e += this._stride) t.coords[e] *= this.yFactor;
    return this.geometryType === "esriGeometryPoint" && (t.lengths.length = 0), t;
  }
  isClosed() {
    const t = this._geometry.coords, e = this._pathOffset, s = this._end - this._stride;
    for (let r = 0; r < this._stride; r++) if (t[e + r] !== t[s + r]) return !1;
    return !0;
  }
  clone() {
    return new hn().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.reduce((t, e) => t + e);
  }
  get pathSize() {
    const { lengths: t } = this._geometry;
    return this._geometry.isPoint ? 1 : this._pathIndex < 0 || this._pathIndex > t.length - 1 ? 0 : t[this._pathIndex];
  }
  get totalSize() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t) {
    this._geometry.coords[this._pointOffset] = t;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t) {
    this._geometry.coords[this._pointOffset + 2] = t;
  }
  get m() {
    const t = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t];
  }
  set m(t) {
    this._geometry.coords[this._pointOffset + 3] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get _coordIndex() {
    return this._pointOffset / this._stride;
  }
};
function Sa(i) {
  const t = [i.x, i.y];
  return i.z && t.push(i.z), i.m && t.push(i.m), t;
}
function vr(i) {
  return nt(i) ? [i.rings, "esriGeometryPolygon"] : mt(i) ? [i.paths, "esriGeometryPolyline"] : As(i) ? [[i.points], "esriGeometryMultipoint"] : ht(i) ? [[[[i.xmin, i.ymin], [i.xmin, i.ymax], [i.xmax, i.ymax], [i.xmax, i.ymin], [i.xmin, i.ymin]]], "esriGeometryEnvelope"] : Si(i) ? [[[Sa(i)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
let Ci = class ln extends O {
  initialize(t, e, s, r, n) {
    return this._paths = t, this.geometryType = e, this.hasZ = s, this.hasM = r, this._pathIndex = this._pointIndex = -1, this.yFactor = n, this._mIndex = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t) {
    return this._pathIndex = t, this._pointIndex = -1, t >= 0 && t < this.totalSize && (this._currentPath = this._paths[t], !0);
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t) {
    return t >= 0 && t < this._currentPath.length && (this._pointIndex = t, this._currentPoint = this._currentPath[this._pointIndex], !0);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.totalSize;
  }
  prevPath() {
    return this.pathIndex > 0 && (this._pointIndex = -1, this._pathIndex--, this._currentPath = this._paths[this._pathIndex], !0);
  }
  pathLength() {
    const t = this._currentPath.length, e = this._currentPath;
    let s = 0;
    for (let r = 1; r < t; r++) {
      const n = e[r - 1], o = e[r], a = n[0], h = n[1], l = o[0] - a, c = o[1] - h;
      s += Math.sqrt(l * l + c * c);
    }
    return s;
  }
  startPath() {
    this._paths.push([]);
  }
  pushPath(t) {
    this._paths.push(t);
  }
  pushPoint(t) {
    this._paths[this.totalSize - 1].push(t);
  }
  pushXY(t, e) {
    this._paths[this.totalSize - 1].push([t, e]);
  }
  pushPoints(t) {
    this._paths[this.totalSize - 1].push(...t);
  }
  pushCursor(t) {
    const e = hs(t);
    for (const s of e) this.pushPath(s);
  }
  asOptimized() {
    const t = new wi();
    if (this.geometryType === "esriGeometryPoint") t.coords.push(...this._paths[0][0]), t.lengths.length = 0;
    else for (const e of this._paths) {
      for (const s of e) t.coords.push(s[0]), t.coords.push(s[1] * this.yFactor), this.hasZ && t.coords.push(s[2]), this.hasM && t.coords.push(s[this._mIndex]);
      t.lengths.push(e.length);
    }
    return t;
  }
  isClosed() {
    const t = this._currentPath[0], e = this._currentPath[this._currentPath.length - 1];
    for (let s = 0; s < t.length; s++) if (t[s] !== e[s]) return !1;
    return !0;
  }
  clone() {
    return new ln().initialize(ce(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._paths.map((t) => t.length).reduce((t, e) => t + e);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t) {
    this._currentPoint[0] = t;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t) {
    this._currentPoint[1] = this.yFactor * t;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t) {
    this._currentPoint[2] = t;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t) {
    this._currentPoint[this._mIndex] = t;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
const bs = 4, Ps = 1;
let Cr = class cn extends vi {
  initialize(t, e, s, r, n) {
    return super.initialize(t, e, s, r, n), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.totalSize).fill(void 0).map((o) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t = new cn().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t._controlPoints = this._controlPoints, t;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this._coordIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this._coordIndex);
  }
  setControlPointAt(t) {
    this._controlPoints[this.pathIndex].add(t);
  }
  getControlPointAt(t) {
    return this._controlPoints[this.pathIndex].has(t);
  }
}, $r = class un extends Ci {
  initialize(t, e, s, r, n) {
    return super.initialize(t, e, s, r, n);
  }
  clone() {
    return new un().initialize(ce(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this._pointIndex][bs] = Ps;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this._pointIndex][bs] === Ps;
  }
  setControlPointAt(t) {
    this._paths[this.pathIndex][t][bs] = Ps;
  }
  getControlPointAt(t) {
    return this._paths[this.pathIndex][t][bs] === Ps;
  }
};
const Ma = 512;
let xt, va = class {
  constructor(t) {
    this._geometry = t;
  }
  next() {
    const t = this._geometry;
    return this._geometry = null, t;
  }
};
function ii(i, t) {
  xt || (xt = new oa(0, 0, 0, 1));
  const e = i.geometryType === "esriGeometryPolygon", s = e ? wr.Polygon : wr.LineString, r = e ? 3 : 2;
  let n, o;
  for (xt.reset(s), xt.setPixelMargin(t + 1), xt.setExtent(Ma); i.nextPath(); ) if (!(i.pathSize < r)) {
    for (i.nextPoint(), n = i.x, o = -i.y, xt.moveTo(n, o); i.nextPoint(); ) n = i.x, o = -i.y, xt.lineTo(n, o);
    e && xt.close();
  }
  const a = xt.result(!1);
  if (a) {
    const h = O.createEmptyOptimizedCIM(i.geometryType);
    for (const l of a) {
      h.startPath();
      for (const c of l) h.pushXY(c.x, -c.y);
    }
    return h.reset(), h;
  }
  return null;
}
let pn = class ze {
  static local() {
    return ze.instance === null && (ze.instance = new ze()), ze.instance;
  }
  execute(t, e, s, r, n) {
    return new Ca(t, e, s);
  }
};
pn.instance = null;
let Ca = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._angleTolerance = e.angleTolerance !== void 0 ? e.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.geometryType === "esriGeometryPolygon") this._isClosed = !0;
      else if (t.geometryType === "esriGeometryPolyline") this._isClosed = !1;
      else {
        if (t.geometryType !== "esriGeometryEnvelope") {
          t = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle) return t;
        this._isClosed = !0;
      }
      for (; t.nextPath(); ) this._processPath(t);
      return t.reset(), t;
    }
    return null;
  }
  _processPath(t) {
    if (t.nextPoint()) {
      const e = t.x, s = t.y;
      let r = e, n = s, o = t.pathSize, a = 0, h = 0, l = 0, c = 0, u = 0, f = 0;
      this._isClosed && ++o;
      for (let p = 1; t.nextPoint() || p < o; ++p) {
        let m, d;
        this._isClosed && p === o - 1 ? (m = e, d = s) : (m = t.x, d = t.y);
        const _ = m - r, y = d - n, x = Math.sqrt(_ * _ + y * y);
        p > 1 && x > 0 && l > 0 && (a * _ + h * y) / x / l <= this._maxCosAngle && t.setControlPointAt(p - 1), p === 1 && (c = _, u = y, f = x), x > 0 && (r = m, n = d, a = _, h = y, l = x);
      }
      this._isClosed && l > 0 && f > 0 && (a * c + h * u) / f / l <= this._maxCosAngle && t.setControlPointAt(0);
    }
  }
}, _e = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (this.rz == null || this.rz === 0 && this.rzCos !== 1 && this.rzSin !== 0) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t, e) {
    this.tx = t, this.ty = e;
  }
  setTranslateZ(t) {
    this.tz = t;
  }
  setRotateCS(t, e) {
    this.rz = void 0, this.rzCos = t, this.rzSin = e;
  }
  setRotate(t) {
    this.rz = t, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t) {
    this.ry = t;
  }
  setScale(t) {
    this.s = t;
  }
  setMeasure(t) {
    this.m = t;
  }
};
function fi(i, t) {
  i[4] = t;
}
let ls = class {
  constructor(t, e = !0, s = !0, r = 0) {
    this.isClosed = !1, this.geometryCursor = null, this.geometryCursor = !e && t.geometryType === "esriGeometryPolygon" || !s && t.geometryType === "esriGeometryPolyline" ? null : t, this.geomUnitsPerPoint = r, this.iterateMultiPath = !1, this.iteratePath = !1, this.internalPlacement = new _e();
  }
  next() {
    if (!this.geometryCursor) return null;
    const t = this.processMultiPath(this.geometryCursor);
    return this.iterateMultiPath && t || (this.geometryCursor = null), t;
  }
  processMultiPath(t) {
    for (; this.iteratePath || t.pathIndex < t.totalSize - 1; ) {
      this.iteratePath || t.nextPath(), this.iterateMultiPath = !0;
      const e = this.processPath(t);
      if (e) return e;
    }
    return this.iterateMultiPath = !1, null;
  }
}, ri = class {
  constructor(t, e, s, r = 0) {
    this.isClosed = !1, this._tileKey = null, this.inputGeometries = t, this.acceptPolygon = e, this.acceptPolyline = s, this.geomUnitsPerPoint = r, this.iteratePath = !1, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t = this.inputGeometries.next();
        for (; t && (this.isClosed = this.acceptPolygon && t.geometryType === "esriGeometryPolygon" || t.geometryType === "esriGeometryEnvelope", this.multiPathCursor = t, !this.multiPathCursor); ) t = this.inputGeometries.next();
        if (!this.multiPathCursor) return null;
        this._tileKey && this.isClippingRequired(this.multiPathCursor) && (this.multiPathCursor.reset(), this.multiPathCursor = ii(this.multiPathCursor, 256));
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t = this.processPath(this.multiPathCursor);
        if (t) return t;
      }
      this.multiPathCursor = null;
    }
  }
  isClippingRequired(t) {
    return !1;
  }
};
const rs = 0.03;
let zt = class {
  constructor(t = 0, e = !1) {
  }
  isEmpty(t) {
    if (!t.nextPoint()) return !0;
    let e, s, r, n;
    for (e = t.x, s = t.y; t.nextPoint(); e = s, s = n) if (r = t.x, n = t.y, r !== e || n !== s) return t.seekPathStart(), !1;
    return t.seekPathStart(), !0;
  }
  normalize(t) {
    const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    e !== 0 && (t[0] /= e, t[1] /= e);
  }
  getLength(t, e, s, r) {
    const n = s - t, o = r - e;
    return Math.sqrt(n * n + o * o);
  }
  getSegLength(t) {
    const [[e, s], [r, n]] = t;
    return this.getLength(e, s, r, n);
  }
  getCoord2D(t, e, s, r, n) {
    return [t + (s - t) * n, e + (r - e) * n];
  }
  getSegCoord2D(t, e) {
    const [[s, r], [n, o]] = t;
    return this.getCoord2D(s, r, n, o, e);
  }
  getAngle(t, e, s, r, n) {
    const o = s - t, a = r - e;
    return Math.atan2(a, o);
  }
  getAngleCS(t, e, s, r, n) {
    const o = s - t, a = r - e, h = Math.sqrt(o * o + a * a);
    return h > 0 ? [o / h, a / h] : [1, 0];
  }
  getSegAngleCS(t, e) {
    const [[s, r], [n, o]] = t;
    return this.getAngleCS(s, r, n, o, e);
  }
  cut(t, e, s, r, n, o) {
    return [n <= 0 ? [t, e] : this.getCoord2D(t, e, s, r, n), o >= 1 ? [s, r] : this.getCoord2D(t, e, s, r, o)];
  }
  getSubCurve(t, e, s) {
    const r = O.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r, t, e, s) ? r : null;
  }
  appendSubCurve(t, e, s, r) {
    t.startPath(), e.seekPathStart();
    let n = 0, o = !0;
    if (!e.nextPoint()) return !1;
    let a = e.x, h = e.y;
    for (; e.nextPoint(); ) {
      const l = this.getLength(a, h, e.x, e.y);
      if (l !== 0) {
        if (o) {
          if (n + l > s) {
            const c = (s - n) / l;
            let u = 1, f = !1;
            n + l >= r && (u = (r - n) / l, f = !0);
            const p = this.cut(a, h, e.x, e.y, c, u);
            if (p && t.pushPoints(p), f) break;
            o = !1;
          }
        } else {
          if (n + l > r) {
            const c = this.cut(a, h, e.x, e.y, 0, (r - n) / l);
            c && t.pushPoint(c[1]);
            break;
          }
          t.pushXY(e.x, e.y);
        }
        n += l, a = e.x, h = e.y;
      } else a = e.x, h = e.y;
    }
    return !0;
  }
  getCIMPointAlong(t, e) {
    if (!t.nextPoint()) return null;
    let s, r, n, o, a = 0;
    for (s = t.x, r = t.y; t.nextPoint(); s = n, r = o) {
      n = t.x, o = t.y;
      const h = this.getLength(s, r, n, o);
      if (h !== 0) {
        if (a + h > e) {
          const l = (e - a) / h;
          return this.getCoord2D(s, r, n, o, l);
        }
        a += h;
      }
    }
    return null;
  }
  offset(t, e, s, r, n) {
    if (!t || t.length < 2) return null;
    let o = 0, a = t[o++], h = o;
    for (; o < t.length; ) {
      const f = t[o];
      f[0] === a[0] && f[1] === a[1] || (o !== h && (t[h] = t[o]), a = t[h++]), o++;
    }
    const l = t[0][0] === t[h - 1][0] && t[0][1] === t[h - 1][1];
    if (l && --h, h < (l ? 3 : 2)) return null;
    const c = [];
    a = l ? t[h - 1] : null;
    let u = t[0];
    for (let f = 0; f < h; f++) {
      const p = f === h - 1 ? l ? t[0] : null : t[f + 1];
      if (a) if (p) {
        const m = [p[0] - u[0], p[1] - u[1]];
        this.normalize(m);
        const d = [u[0] - a[0], u[1] - a[1]];
        this.normalize(d);
        const _ = d[0] * m[1] - d[1] * m[0], y = d[0] * m[0] + d[1] * m[1];
        if (_ === 0 && y === 1) {
          u = p;
          continue;
        }
        if (_ >= 0 == e <= 0) {
          if (y < 1) {
            const x = [m[0] - d[0], m[1] - d[1]];
            this.normalize(x);
            const P = Math.sqrt((1 + y) / 2);
            if (P > 1 / r) {
              const w = -Math.abs(e) / P;
              c.push([u[0] - x[0] * w, u[1] - x[1] * w]);
            }
          }
        } else switch (s) {
          case jt.Mitered: {
            const x = Math.sqrt((1 + y) / 2);
            if (x > 0 && 1 / x < r) {
              const P = [m[0] - d[0], m[1] - d[1]];
              this.normalize(P);
              const w = Math.abs(e) / x;
              c.push([u[0] - P[0] * w, u[1] - P[1] * w]);
              break;
            }
          }
          case jt.Bevelled:
            c.push([u[0] + d[1] * e, u[1] - d[0] * e]), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
            break;
          case jt.Rounded:
            if (y < 1) {
              c.push([u[0] + d[1] * e, u[1] - d[0] * e]);
              const x = Math.floor(2.5 * (1 - y));
              if (x > 0) {
                const P = 1 / x;
                let w = P;
                for (let C = 1; C < x; C++, w += P) {
                  const I = [d[1] * (1 - w) + m[1] * w, -d[0] * (1 - w) - m[0] * w];
                  this.normalize(I), c.push([u[0] + I[0] * e, u[1] + I[1] * e]);
                }
              }
              c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
            }
            break;
          case jt.Square:
          default:
            if (_ < 0) c.push([u[0] + (d[1] + d[0]) * e, u[1] + (d[1] - d[0]) * e]), c.push([u[0] + (m[1] - m[0]) * e, u[1] - (m[0] + m[1]) * e]);
            else {
              const x = Math.sqrt((1 + Math.abs(y)) / 2), P = [m[0] - d[0], m[1] - d[1]];
              this.normalize(P);
              const w = e / x;
              c.push([u[0] - P[0] * w, u[1] - P[1] * w]);
            }
        }
      } else {
        const m = [u[0] - a[0], u[1] - a[1]];
        this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
      }
      else {
        const m = [p[0] - u[0], p[1] - u[1]];
        this.normalize(m), c.push([u[0] + m[1] * e, u[1] - m[0] * e]);
      }
      a = u, u = p;
    }
    return c.length < (l ? 3 : 2) ? null : (l && c.push([c[0][0], c[0][1]]), c);
  }
};
const mi = 1.7320508075688772, $a = 5, Ia = Fs.OpenEnded;
let dn = class Le {
  static local() {
    return Le.instance === null && (Le.instance = new Le()), Le.instance;
  }
  execute(t, e, s, r, n) {
    return new ka(t, e, s);
  }
};
dn.instance = null;
let ka = class extends ri {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new zt(), this._width = (e.width !== void 0 ? e.width : $a) * s, this._arrowType = e.geometricEffectArrowType !== void 0 ? e.geometricEffectArrowType : e.arrowType !== void 0 ? e.arrowType : Ia, this._offsetFlattenError = rs * s;
  }
  processPath(t) {
    const e = O.createEmptyOptimizedCIM(t.geometryType);
    switch (this._arrowType) {
      case Fs.OpenEnded:
      default:
        this._constructSimpleArrow(e, t, !0);
        break;
      case Fs.Block:
        this._constructSimpleArrow(e, t, !1);
        break;
      case Fs.Crossed:
        this._constructCrossedArrow(e, t);
    }
    return e;
  }
  _constructSimpleArrow(t, e, s) {
    const r = e.pathLength();
    let n = this._width;
    r < 2 * n && (n = r / 2);
    const o = this._curveHelper.getSubCurve(e, 0, r - n);
    if (!o || !o.nextPath()) return;
    o.seekPathStart();
    const a = n / 2;
    if (this._curveHelper.isEmpty(o)) return;
    const h = Jt(o), l = this._constructOffset(h, -a);
    if (!l) return;
    const c = this._constructOffset(h, a);
    if (!c) return;
    const u = this._constructArrowBasePoint(l, -a / 2);
    if (!u) return;
    const f = this._constructArrowBasePoint(c, a / 2);
    if (!f) return;
    e.seekInPath(e.pathSize - 1);
    const p = [e.x, e.y];
    t.pushPath(c), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(f), t.nextPoint(), t.setControlPoint(), t.pushPoint(p), t.nextPoint(), t.setControlPoint(), t.pushPoint(u), t.nextPoint(), t.setControlPoint(), t.pushPoints(l.reverse()), t.setControlPoint(), s || (t.setControlPointAt(0), t.setControlPointAt(t.pathSize - 1), t.pushPoint(c[0])), t.reset();
  }
  _constructCrossedArrow(t, e) {
    const s = e.pathLength();
    let r = this._width;
    s < r * (1 + mi + 1) && (r = s / (1 + mi + 1)), e.seekPathStart();
    const n = this._curveHelper.getSubCurve(e, 0, s - r * (1 + mi));
    if (!n) return;
    n.nextPath();
    const o = r / 2;
    if (this._curveHelper.isEmpty(n)) return;
    const a = Jt(n), h = this._constructOffset(a, o);
    if (!h) return;
    const l = this._constructOffset(a, -o);
    if (!l) return;
    const c = this._curveHelper.getSubCurve(e, 0, s - r);
    if (!c || (c.nextPath(), this._curveHelper.isEmpty(c))) return;
    const u = Jt(c), f = this._constructOffset(u, o);
    if (!f) return;
    const p = this._constructOffset(u, -o);
    if (!p) return;
    const m = f[f.length - 1], d = this._constructArrowBasePoint(f, o / 2);
    if (!d) return;
    const _ = p[p.length - 1], y = this._constructArrowBasePoint(p, -o / 2);
    if (!y) return;
    e.seekInPath(e.pathSize - 1);
    const x = [e.x, e.y];
    t.pushPath(h), t.nextPath(), t.nextPoint(), t.setControlPoint(), t.pushPoint(_), t.nextPoint(), t.setControlPoint(), t.pushPoint(y), t.nextPoint(), t.setControlPoint(), t.pushPoint(x), t.nextPoint(), t.setControlPoint(), t.pushPoint(d), t.nextPoint(), t.setControlPoint(), t.pushPoint(m), t.nextPoint(), t.setControlPoint(), t.pushPoints(l.reverse()), t.nextPoint(), t.setControlPoint(), t.reset();
  }
  _constructOffset(t, e) {
    return this._curveHelper.offset(t, e, jt.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t, e) {
    if (!t || t.length < 2) return null;
    const s = t[t.length - 2], r = t[t.length - 1], n = [r[0] - s[0], r[1] - s[1]];
    return this._curveHelper.normalize(n), [r[0] + n[1] * e, r[1] - n[0] * e];
  }
}, fn = class Ae {
  static local() {
    return Ae.instance === null && (Ae.instance = new Ae()), Ae.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Ta(t, e, s, r, n, o);
  }
};
fn.instance = null;
let Ta = class {
  constructor(t, e, s, r, n, o) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._curveHelper = new zt(), this._size = (e.size !== void 0 ? e.size : 1) * s, this._maxInflateSize = o * s, this._offsetFlattenError = rs * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._size === 0) return t;
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._size > 0) {
          const n = O.createEmptyOptimizedCIM(t.geometryType), o = hs(t)[0], a = this._curveHelper.offset(o, this._size, jt.Rounded, 4, this._offsetFlattenError);
          if (a) return n.pushPath(a), n;
        } else if (this._size < 0) {
          const n = t.asJSON();
          if (Math.min(n.xmax - n.xmin, n.ymax - n.ymin) + 2 * this._size > 0) return O.fromJSONCIM({ xmin: n.xmin - this._size, xmax: n.xmax + this._size, ymin: n.ymin - this._size, ymax: n.ymax + this._size });
        }
      }
      const e = this._geometryEngine;
      if (e == null) return null;
      const s = this._tileKey ? ii(t, this._maxInflateSize) : t;
      if (!s) continue;
      const r = e.buffer(er.WebMercator, s.asJSON(), this._size, 1);
      return r ? O.fromJSONCIM(r) : null;
    }
    return null;
  }
}, mn = class Fe {
  static local() {
    return Fe.instance === null && (Fe.instance = new Fe()), Fe.instance;
  }
  execute(t, e, s, r, n) {
    return new za(t, e, s);
  }
};
mn.instance = null;
let za = class {
  constructor(t, e, s) {
    this._defaultPointSize = 20, this._inputGeometries = t, this._geomUnitsPerPoint = s, this._rule = e.rule ?? $.FullGeometry, this._defaultSize = this._defaultPointSize * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      const e = this._processGeom(hs(t));
      if (e?.length) return O.fromJSONCIM({ paths: e });
    }
    return null;
  }
  _clone(t) {
    return [t[0], t[1]];
  }
  _mid(t, e) {
    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
  }
  _mix(t, e, s, r) {
    return [t[0] * e + s[0] * r, t[1] * e + s[1] * r];
  }
  _add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  }
  _add2(t, e, s) {
    return [t[0] + e, t[1] + s];
  }
  _sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  }
  _dist(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }
  _norm(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  _normalize(t, e = 1) {
    const s = e / this._norm(t);
    t[0] *= s, t[1] *= s;
  }
  _leftPerpendicular(t) {
    const e = -t[1], s = t[0];
    t[0] = e, t[1] = s;
  }
  _leftPerp(t) {
    return [-t[1], t[0]];
  }
  _rightPerpendicular(t) {
    const e = t[1], s = -t[0];
    t[0] = e, t[1] = s;
  }
  _rightPerp(t) {
    return [t[1], -t[0]];
  }
  _dotProduct(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }
  _crossProduct(t, e) {
    return t[0] * e[1] - t[1] * e[0];
  }
  _rotateDirect(t, e, s) {
    const r = t[0] * e - t[1] * s, n = t[0] * s + t[1] * e;
    t[0] = r, t[1] = n;
  }
  _makeCtrlPt(t) {
    const e = [t[0], t[1]];
    return fi(e, 1), e;
  }
  _addAngledTicks(t, e, s, r) {
    const n = this._sub(s, e);
    this._normalize(n);
    const o = this._crossProduct(n, this._sub(r, e));
    let a;
    a = o > 0 ? this._rightPerp(n) : this._leftPerp(n);
    const h = Math.abs(o) / 2, l = [];
    l.push([e[0] + (a[0] - n[0]) * h, e[1] + (a[1] - n[1]) * h]), l.push(e), l.push(s), l.push([s[0] + (a[0] + n[0]) * h, s[1] + (a[1] + n[1]) * h]), t.push(l);
  }
  _addBezier2(t, e, s, r, n) {
    if (n-- == 0) return void t.push(r);
    const o = this._mid(e, s), a = this._mid(s, r), h = this._mid(o, a);
    this._addBezier2(t, e, o, h, n), this._addBezier2(t, h, a, r, n);
  }
  _addBezier3(t, e, s, r, n, o) {
    if (o-- == 0) return void t.push(n);
    const a = this._mid(e, s), h = this._mid(s, r), l = this._mid(r, n), c = this._mid(a, h), u = this._mid(h, l), f = this._mid(c, u);
    this._addBezier3(t, e, a, c, f, o), this._addBezier3(t, f, u, l, n, o);
  }
  _add90DegArc(t, e, s, r, n) {
    const o = n ?? this._crossProduct(this._sub(s, e), this._sub(r, e)) > 0, a = this._mid(e, s), h = this._sub(a, e);
    o ? this._leftPerpendicular(h) : this._rightPerpendicular(h), a[0] += h[0], a[1] += h[1], this._addBezier3(t, e, this._mix(e, 0.33333, a, 0.66667), this._mix(s, 0.33333, a, 0.66667), s, 4);
  }
  _addArrow(t, e, s) {
    const r = e[0], n = e[1], o = e[e.length - 1], a = this._sub(r, n), h = this._norm(a);
    this._normalize(a);
    const l = Math.abs(this._crossProduct(a, this._sub(o, n)));
    let c = this._dotProduct(a, this._sub(o, n));
    c < 0.05 * h ? c = 0.05 * h : c > 0.95 * h && (c = 0.95 * h);
    const u = 0.5 * l, f = this._leftPerp(a), p = [n[0] + a[0] * c, n[1] + a[1] * c], m = e.length - 1, d = [];
    d.push(s ? [-f[0], -f[1]] : f);
    let _ = [-a[0], -a[1]];
    for (let y = 1; y < m - 1; y++) {
      const x = this._sub(e[y + 1], e[y]);
      this._normalize(x);
      const P = this._dotProduct(x, _), w = this._crossProduct(x, _), C = Math.sqrt((1 + P) / 2), I = this._sub(x, _);
      this._normalize(I), I[0] /= C, I[1] /= C, d.push(w < 0 ? [-I[0], -I[1]] : I), _ = x;
    }
    d.push(this._rightPerp(_));
    for (let y = d.length - 1; y > 0; y--) t.push([e[y][0] + d[y][0] * u, e[y][1] + d[y][1] * u]);
    t.push([p[0] + d[0][0] * u, p[1] + d[0][1] * u]), t.push([p[0] + d[0][0] * l, p[1] + d[0][1] * l]), t.push(r), t.push([p[0] - d[0][0] * l, p[1] - d[0][1] * l]), t.push([p[0] - d[0][0] * u, p[1] - d[0][1] * u]);
    for (let y = 1; y < d.length; y++) t.push([e[y][0] - d[y][0] * u, e[y][1] - d[y][1] * u]);
  }
  _cp2(t, e, s) {
    return t.length >= 2 ? t[1] : this._add2(t[0], e * this._defaultSize, s * this._defaultSize);
  }
  _cp3(t, e, s, r) {
    if (t.length >= 3) return t[2];
    const n = this._mix(t[0], 1 - s, e, s), o = this._sub(e, t[0]);
    return this._normalize(o), this._rightPerpendicular(o), [n[0] + o[0] * r * this._defaultSize, n[1] + o[1] * r * this._defaultSize];
  }
  _arrowPath(t) {
    if (t.length > 2) return t;
    const e = t[0], s = this._cp2(t, -4, 0), r = this._sub(e, s);
    this._normalize(r);
    const n = this._rightPerp(r);
    return [e, s, [e[0] + (n[0] - r[0]) * this._defaultSize, e[1] + (n[1] - r[1]) * this._defaultSize]];
  }
  _arrowLastSeg(t) {
    const e = t[0], s = this._cp2(t, -4, 0);
    let r;
    if (t.length >= 3) r = t[t.length - 1];
    else {
      const n = this._sub(e, s);
      this._normalize(n);
      const o = this._rightPerp(n);
      r = [e[0] + (o[0] - n[0]) * this._defaultSize, e[1] + (o[1] - n[1]) * this._defaultSize];
    }
    return [s, r];
  }
  _processGeom(t) {
    if (!t) return null;
    const e = [];
    for (const s of t) {
      if (!s || s.length === 0) continue;
      const r = s.length;
      let n = s[0];
      switch (this._rule) {
        case $.PerpendicularFromFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = [];
          h.push(a), h.push(this._mid(n, o)), e.push(h);
          break;
        }
        case $.ReversedFirstSegment: {
          const o = this._cp2(s, 0, -1);
          e.push([o, n]);
          break;
        }
        case $.PerpendicularToSecondSegment: {
          if (s.length < 3) return [];
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = [];
          h.push(this._mid(o, a)), h.push(n), e.push(h);
          break;
        }
        case $.SecondSegmentWithTicks: {
          if (s.length < 3) return [];
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          let l;
          l = this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerp(h) : this._leftPerp(h);
          const c = [];
          c.push([o[0] + (l[0] - h[0]) / 3, o[1] + (l[1] - h[1]) / 3]), c.push(o), c.push(a), c.push([a[0] + (l[0] + h[0]) / 3, a[1] + (l[1] + h[1]) / 3]), e.push(c);
          break;
        }
        case $.DoublePerpendicular: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 3), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push(n), u.push([a[0] + l[0] * c, a[1] + l[1] * c]), e.push(u);
          const f = [];
          f.push([a[0] - l[0] * c, a[1] - l[1] * c]), f.push(o), e.push(f);
          break;
        }
        case $.OppositeToFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 3), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push([a[0] + l[0] * c, a[1] + l[1] * c]), u.push([a[0] - l[0] * c, a[1] - l[1] * c]), e.push(u);
          break;
        }
        case $.TriplePerpendicular: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = this._mid(n, o), l = this._sub(h, a);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(n, a));
          this._leftPerpendicular(l);
          const u = [];
          u.push([a[0] + l[0] * c * 0.8, a[1] + l[1] * c * 0.8]), u.push([h[0] + 0.8 * (n[0] - h[0]), h[1] + 0.8 * (n[1] - h[1])]), e.push(u), e.push([a, h]);
          const f = [];
          f.push([a[0] - l[0] * c * 0.8, a[1] - l[1] * c * 0.8]), f.push([h[0] + 0.8 * (o[0] - h[0]), h[1] + 0.8 * (o[1] - h[1])]), e.push(f);
          break;
        }
        case $.HalfCircleFirstSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 4), h = this._mid(n, o);
          let l = this._sub(o, n);
          const c = Math.cos(Math.PI / 18), u = Math.sin(Math.PI / 18), f = Math.sqrt((1 + c) / 2), p = Math.sqrt((1 - c) / 2), m = [];
          let d;
          this._crossProduct(l, this._sub(a, n)) > 0 ? (m.push(n), l = this._sub(n, h), d = o) : (m.push(o), l = this._sub(o, h), d = n), this._rotateDirect(l, f, p), l[0] /= f, l[1] /= f;
          for (let _ = 1; _ <= 18; _++) m.push(this._add(h, l)), this._rotateDirect(l, c, u);
          m.push(d), e.push(m);
          break;
        }
        case $.HalfCircleSecondSegment: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 1, -1);
          let h = this._sub(n, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, o)) / 2;
          this._leftPerpendicular(h);
          const c = [o[0] + h[0] * l, o[1] + h[1] * l];
          h = this._sub(o, c);
          const u = Math.cos(Math.PI / 18);
          let f = Math.sin(Math.PI / 18);
          l > 0 && (f = -f);
          const p = [o];
          for (let m = 1; m <= 18; m++) this._rotateDirect(h, u, f), p.push(this._add(c, h));
          e.push(p);
          break;
        }
        case $.HalfCircleExtended: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 1, -1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const m = this._sub(n, o);
            h = this._add(a, m);
          }
          const l = this._dist(o, a) / 2 / 0.75, c = this._sub(o, n);
          this._normalize(c, l);
          const u = this._sub(a, h);
          this._normalize(u, l);
          const f = [h, a];
          e.push(f);
          const p = [this._clone(a)];
          this._addBezier3(p, a, this._add(a, u), this._add(o, c), o, 4), p.push(n), e.push(p);
          break;
        }
        case $.OpenCircle: {
          const o = this._cp2(s, -2, 0), a = this._sub(o, n), h = Math.cos(Math.PI / 18), l = -Math.sin(Math.PI / 18), c = [o];
          for (let u = 1; u <= 33; u++) this._rotateDirect(a, h, l), c.push(this._add(n, a));
          e.push(c);
          break;
        }
        case $.CoverageEdgesWithTicks: {
          const o = this._cp2(s, 0, -1);
          let a, h;
          if (r >= 3) a = s[2];
          else {
            const f = this._sub(o, n), p = this._leftPerp(f);
            a = [n[0] + p[0] - 0.25 * f[0], n[1] + p[1] - 0.25 * f[1]];
          }
          if (r >= 4) h = s[3];
          else {
            const f = this._mid(n, o), p = this._sub(n, o);
            this._normalize(p), this._leftPerpendicular(p);
            const m = this._crossProduct(p, this._sub(a, f));
            this._rightPerpendicular(p), h = [a[0] + p[0] * m * 2, a[1] + p[1] * m * 2];
          }
          const l = this._sub(o, n);
          let c, u;
          c = this._crossProduct(l, this._sub(a, n)) > 0 ? this._rightPerp(l) : this._leftPerp(l), u = [], u.push(a), u.push(n), u.push([n[0] + (c[0] - l[0]) / 3, n[1] + (c[1] - l[1]) / 3]), e.push(u), c = this._crossProduct(l, this._sub(h, o)) > 0 ? this._rightPerp(l) : this._leftPerp(l), u = [], u.push([o[0] + (c[0] + l[0]) / 3, o[1] + (c[1] + l[1]) / 3]), u.push(o), u.push(h), e.push(u);
          break;
        }
        case $.GapExtentWithDoubleTicks: {
          const o = this._cp2(s, 0, 2), a = this._cp3(s, o, 0, 1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const l = this._sub(o, n);
            h = this._add(a, l);
          }
          this._addAngledTicks(e, n, o, this._mid(a, h)), this._addAngledTicks(e, a, h, this._mid(n, o));
          break;
        }
        case $.GapExtentMidline: {
          const o = this._cp2(s, 2, 0), a = this._cp3(s, o, 0, 1);
          let h;
          if (r >= 4) h = s[3];
          else {
            const c = this._sub(o, n);
            h = this._add(a, c);
          }
          const l = [];
          l.push(this._mid(n, a)), l.push(this._mid(o, h)), e.push(l);
          break;
        }
        case $.Chevron: {
          const o = this._cp2(s, -1, -1);
          let a;
          if (r >= 3) a = s[2];
          else {
            const h = this._sub(o, n);
            this._leftPerpendicular(h), a = this._add(n, h);
          }
          e.push([o, this._makeCtrlPt(n), a]);
          break;
        }
        case $.PerpendicularWithArc: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n), l = this._norm(h);
          h[0] /= l, h[1] /= l;
          const c = this._crossProduct(h, this._sub(a, n));
          let u = this._dotProduct(h, this._sub(a, n));
          u < 0.05 * l ? u = 0.05 * l : u > 0.95 * l && (u = 0.95 * l);
          const f = [n[0] + h[0] * u, n[1] + h[1] * u];
          let p = this._leftPerp(h), m = [];
          if (m.push([f[0] - p[0] * c, f[1] - p[1] * c]), m.push([f[0] + p[0] * c, f[1] + p[1] * c]), e.push(m), r >= 4) {
            const x = s[3];
            let P = this._dotProduct(h, this._sub(x, n));
            P < 0.1 * l ? P = 0.1 * l : P > 0.9 * l && (P = 0.9 * l);
            const w = [n[0] + h[0] * P, n[1] + h[1] * P], C = this._crossProduct(h, this._sub(x, n)), I = [];
            I.push([w[0] - p[0] * C, w[1] - p[1] * C]), I.push([w[0] + p[0] * C, w[1] + p[1] * C]), e.push(I);
          }
          const d = [o[0] + p[0] * c, o[1] + p[1] * c];
          p = this._sub(o, d);
          const _ = Math.cos(Math.PI / 18);
          let y = Math.sin(Math.PI / 18);
          c < 0 && (y = -y), m = [n, o];
          for (let x = 1; x <= 9; x++) this._rotateDirect(p, _, y), m.push(this._add(d, p));
          e.push(m);
          break;
        }
        case $.ClosedHalfCircle: {
          const o = this._cp2(s, 2, 0), a = this._mid(n, o), h = this._sub(o, a), l = Math.cos(Math.PI / 18), c = Math.sin(Math.PI / 18), u = [n, o];
          for (let f = 1; f <= 18; f++) this._rotateDirect(h, l, c), u.push(this._add(a, h));
          e.push(u);
          break;
        }
        case $.TripleParallelExtended: {
          const o = this._cp2(s, 0, -2), a = this._cp3(s, o, 1, -2), h = this._mid(n, o), l = this._sub(a, o);
          this._normalize(l);
          const c = Math.abs(this._crossProduct(l, this._sub(h, o))) / 2, u = this._dist(o, a), f = [o, n];
          f.push([n[0] + l[0] * u * 0.5, n[1] + l[1] * u * 0.5]), e.push(f);
          const p = [];
          p.push([h[0] - l[0] * c, h[1] - l[1] * c]), p.push([h[0] + l[0] * u * 0.375, h[1] + l[1] * u * 0.375]), fi(p[p.length - 1], 1), p.push([h[0] + l[0] * u * 0.75, h[1] + l[1] * u * 0.75]), e.push(p);
          const m = [o, a];
          e.push(m);
          break;
        }
        case $.ParallelWithTicks: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(a, o);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h), this._addAngledTicks(e, n, o, a), this._addAngledTicks(e, this._mix(n, 1, h, l), this._mix(o, 1, h, l), this._mid(n, o));
          break;
        }
        case $.Parallel: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._leftPerp(h), c = this._crossProduct(h, this._sub(a, n));
          let u = [n, o];
          e.push(u), u = [], u.push([n[0] + l[0] * c, n[1] + l[1] * c]), u.push([o[0] + l[0] * c, o[1] + l[1] * c]), e.push(u);
          break;
        }
        case $.PerpendicularToFirstSegment: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._mid(n, o), l = this._sub(o, n);
          this._normalize(l);
          const c = this._crossProduct(l, this._sub(a, n));
          this._leftPerpendicular(l);
          const u = [];
          u.push([h[0] - l[0] * c * 0.25, h[1] - l[1] * c * 0.25]), u.push([h[0] + l[0] * c * 1.25, h[1] + l[1] * c * 1.25]), e.push(u);
          break;
        }
        case $.ParallelOffset: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] - h[0] * l, n[1] - h[1] * l]), c.push([o[0] - h[0] * l, o[1] - h[1] * l]), e.push(c);
          const u = [];
          u.push([n[0] + h[0] * l, n[1] + h[1] * l]), u.push([o[0] + h[0] * l, o[1] + h[1] * l]), e.push(u);
          break;
        }
        case $.OffsetOpposite: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] - h[0] * l, n[1] - h[1] * l]), c.push([o[0] - h[0] * l, o[1] - h[1] * l]), e.push(c);
          break;
        }
        case $.OffsetSame: {
          const o = this._cp2(s, 3, 0), a = this._cp3(s, o, 0.5, -1), h = this._sub(o, n);
          this._normalize(h);
          const l = this._crossProduct(h, this._sub(a, n));
          this._leftPerpendicular(h);
          const c = [];
          c.push([n[0] + h[0] * l, n[1] + h[1] * l]), c.push([o[0] + h[0] * l, o[1] + h[1] * l]), e.push(c);
          break;
        }
        case $.CircleWithArc: {
          let o = this._cp2(s, 3, 0);
          const a = this._cp3(s, o, 0.5, -1);
          let h, l;
          if (r >= 4) h = s[3], l = this._crossProduct(this._sub(h, o), this._sub(a, o)) > 0;
          else {
            h = o, l = this._crossProduct(this._sub(h, n), this._sub(a, n)) > 0;
            const m = 24 * this._geomUnitsPerPoint, d = this._sub(h, n);
            this._normalize(d, m);
            const _ = Math.sqrt(2) / 2;
            this._rotateDirect(d, _, l ? _ : -_), o = this._add(n, d);
          }
          const c = this._sub(o, n), u = Math.cos(Math.PI / 18), f = Math.sin(Math.PI / 18), p = [o];
          for (let m = 1; m <= 36; m++) this._rotateDirect(c, u, f), p.push(this._add(n, c));
          this._add90DegArc(p, o, h, a, l), fi(p[p.length - 8], 1), e.push(p);
          break;
        }
        case $.DoubleJog: {
          let o, a = this._cp2(s, -3, 1), h = this._cp3(s, a, -1, -0.5);
          if (r >= 4) o = s[3];
          else {
            const y = n;
            n = a, o = h;
            const x = this._dist(n, y), P = this._dist(o, y);
            let w = 30 * this._geomUnitsPerPoint;
            0.5 * x < w && (w = 0.5 * x), 0.5 * P < w && (w = 0.5 * P), a = this._mix(n, w / x, y, (x - w) / x), h = this._mix(o, w / P, y, (P - w) / P);
          }
          const l = this._mid(n, a), c = this._mid(o, h), u = this._dist(n, a), f = this._dist(h, o);
          let p = Math.min(u, f) / 8;
          p = Math.min(p, 24 * this._geomUnitsPerPoint);
          const m = Math.cos(Math.PI / 4);
          let d = this._sub(n, a);
          this._normalize(d, p), this._crossProduct(d, this._sub(o, a)) > 0 ? this._rotateDirect(d, m, -m) : this._rotateDirect(d, m, m);
          let _ = [];
          _.push(a), _.push(this._add(l, d)), _.push(this._sub(l, d)), _.push(n), e.push(_), d = this._sub(o, h), this._normalize(d, p), this._crossProduct(d, this._sub(n, h)) < 0 ? this._rotateDirect(d, m, m) : this._rotateDirect(d, m, -m), _ = [], _.push(h), _.push(this._add(c, d)), _.push(this._sub(c, d)), _.push(o), e.push(_);
          break;
        }
        case $.PerpendicularOffset: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerpendicular(h) : this._leftPerpendicular(h);
          const l = [h[0] / 8, h[1] / 8], c = this._sub(this._mid(o, a), l);
          e.push([c, n]);
          break;
        }
        case $.LineExcludingLastSegment: {
          const o = this._arrowPath(s), a = [];
          let h = o.length - 2;
          for (; h--; ) a.push(o[h]);
          e.push(a);
          break;
        }
        case $.MultivertexArrow: {
          const o = this._arrowPath(s), a = [];
          this._addArrow(a, o, !1), e.push(a);
          break;
        }
        case $.CrossedArrow: {
          const o = this._arrowPath(s), a = [];
          this._addArrow(a, o, !0), e.push(a);
          break;
        }
        case $.ChevronArrow: {
          const [o, a] = this._arrowLastSeg(s), h = 10 * this._geomUnitsPerPoint, l = this._sub(n, o), c = this._norm(l);
          this._normalize(l);
          const u = this._crossProduct(l, this._sub(a, o));
          let f = this._dotProduct(l, this._sub(a, o));
          f < 0.05 * c ? f = 0.05 * c : f > 0.95 * c - h && (f = 0.95 * c - h);
          const p = [o[0] + l[0] * f, o[1] + l[1] * f], m = this._leftPerp(l), d = [];
          d.push([p[0] + m[0] * u + l[0] * h, p[1] + m[1] * u + l[1] * h]), d.push(n), d.push([p[0] - m[0] * u + l[0] * h, p[1] - m[1] * u + l[1] * h]), e.push(d);
          break;
        }
        case $.ChevronArrowOffset: {
          const [o, a] = this._arrowLastSeg(s), h = this._sub(n, o), l = this._norm(h);
          this._normalize(h);
          const c = this._crossProduct(h, this._sub(a, o));
          let u = this._dotProduct(h, this._sub(a, o));
          u < 0.05 * l ? u = 0.05 * l : u > 0.95 * l && (u = 0.95 * l);
          const f = [o[0] + h[0] * u, o[1] + h[1] * u];
          this._leftPerpendicular(h);
          const p = [];
          p.push([f[0] + h[0] * c * 0.5, f[1] + h[1] * c * 0.5]), p.push(this._mid(f, n)), p.push([f[0] - h[0] * c * 0.5, f[1] - h[1] * c * 0.5]), e.push(p);
          break;
        }
        case $.PartialFirstSegment: {
          const [o, a] = this._arrowLastSeg(s), h = this._sub(n, o), l = this._norm(h);
          this._normalize(h);
          let c = this._dotProduct(h, this._sub(a, o));
          c < 0.05 * l ? c = 0.05 * l : c > 0.95 * l && (c = 0.95 * l);
          const u = [o[0] + h[0] * c, o[1] + h[1] * c];
          e.push([o, u]);
          break;
        }
        case $.Arch: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 1), h = this._sub(n, o), l = this._mix(a, 1, h, 0.55), c = this._mix(a, 1, h, -0.55), u = [n];
          this._addBezier2(u, n, l, a, 4), this._addBezier2(u, a, c, o, 4), e.push(u);
          break;
        }
        case $.CurvedParallelTicks: {
          const o = this._cp2(s, -4, 1), a = this._cp3(s, o, 0.882353, -1.94), h = this._sub(a, o);
          this._crossProduct(h, this._sub(n, o)) > 0 ? this._rightPerpendicular(h) : this._leftPerpendicular(h);
          const l = [h[0] / 8, h[1] / 8], c = this._sub(this._mid(o, a), l), u = this._sub(this._mix(o, 0.75, a, 0.25), l), f = this._sub(this._mix(o, 0.25, a, 0.75), l), p = [o];
          this._addBezier2(p, o, u, c, 3), this._addBezier2(p, c, f, a, 3), e.push(p);
          for (let m = 0; m < 8; m++) {
            const d = p[2 * m + 1], _ = [this._clone(d)];
            _.push(this._add(d, [h[0] / 4, h[1] / 4])), e.push(_);
          }
          break;
        }
        case $.Arc90Degrees: {
          const o = this._cp2(s, 0, -1), a = this._cp3(s, o, 0.5, 1), h = [o];
          this._add90DegArc(h, o, n, a), e.push(h);
          break;
        }
        case $.TipWithPerpendicularAndTicks: {
          const [o, a] = this._arrowLastSeg(s), h = 10 * this._geomUnitsPerPoint, l = this._sub(n, o), c = this._norm(l);
          this._normalize(l);
          let u = this._crossProduct(l, this._sub(a, o)), f = this._dotProduct(l, this._sub(a, o));
          f < 0.05 * c ? f = 0.05 * c : f > 0.95 * c - h && (f = 0.95 * c - h);
          const p = this._leftPerp(l), m = [n[0] - l[0] * h, n[1] - l[1] * h], d = 0.5 * Math.max(c - f - h, h);
          u = Math.abs(u);
          const _ = [];
          _.push([m[0] + p[0] * (u + d) - l[0] * d, m[1] + p[1] * (u + d) - l[1] * d]), _.push([m[0] + p[0] * u, m[1] + p[1] * u]), _.push([m[0] - p[0] * u, m[1] - p[1] * u]), _.push([m[0] - p[0] * (u + d) - l[0] * d, m[1] - p[1] * (u + d) - l[1] * d]), e.push(_), e.push([m, n]);
          break;
        }
        case $.FullGeometry:
        default:
          e.push(s);
      }
    }
    return e;
  }
}, _n = class Ee {
  static local() {
    return Ee.instance === null && (Ee.instance = new Ee()), Ee.instance;
  }
  execute(t, e, s, r, n) {
    return new La(t, e, s);
  }
};
_n.instance = null;
let La = class extends ri {
  constructor(t, e, s) {
    super(t, !0, !0), this._curveHelper = new zt(), this._beginCut = (e.beginCut !== void 0 ? e.beginCut : 1) * s, this._endCut = (e.endCut !== void 0 ? e.endCut : 1) * s, this._middleCut = (e.middleCut !== void 0 ? e.middleCut : 0) * s, this._invert = e.invert !== void 0 && e.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t) {
    const { _beginCut: e, _endCut: s, _middleCut: r } = this, n = t.pathLength(), o = O.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (e !== 0 || s !== 0 || r !== 0) if (e + s + r >= n) for (o.startPath(); t.nextPoint(); ) o.pushXY(t.x, t.y);
      else this._curveHelper.appendSubCurve(o, t, 0, e), this._curveHelper.appendSubCurve(o, t, 0.5 * (n - r), 0.5 * (n + r)), this._curveHelper.appendSubCurve(o, t, n - s, s);
    } else if (e === 0 && s === 0 && r === 0) for (o.startPath(); t.nextPoint(); ) o.pushXY(t.x, t.y);
    else e + s + r < n && (r === 0 ? this._curveHelper.appendSubCurve(o, t, e, n - s) : (this._curveHelper.appendSubCurve(o, t, e, 0.5 * (n - r)), this._curveHelper.appendSubCurve(o, t, 0.5 * (n + r), n - s)));
    return o.totalSize === 0 ? null : o;
  }
};
const Ir = 1e-7;
let ni = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return this._values.length === 0;
  }
  size() {
    return this._values.length;
  }
  init(t, e, s = !0) {
    if (this._setEmpty(), !t || t.length === 0) return !1;
    for (let r = 0; r < t.length; r++) {
      let n = Math.abs(t[r]);
      s && n < Ir && (n = Ir), this._values.push(n), this._length += n;
    }
    return e && 1 & t.length && (this._length *= 2), this._length !== 0 && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, !0);
  }
  scale(t) {
    const e = this._values ? this._values.length : 0;
    for (let s = 0; s < e; ++s) this._values[s] *= t;
    this._length *= t, this.extPtGap *= t, this.ctrlPtGap *= t;
  }
  addValue(t) {
    this._length += t, this._values.push(t);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
}, St = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var Et;
(function(i) {
  i[i.FAIL = 0] = "FAIL", i[i.END = 1] = "END", i[i.CONTINUE = 2] = "CONTINUE";
})(Et || (Et = {}));
let ws = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = !1, this.isPartEnd = !1;
  }
  isValid() {
    return this.segment !== null;
  }
  copyTo(t) {
    t.segment = this.segment, t.segmentLength = this.segmentLength, t.abscissa = this.abscissa, t.isPathEnd = this.isPathEnd, t.isPartEnd = this.isPartEnd;
  }
}, oi = class extends zt {
  constructor(t = 0, e = !1) {
    super(t, e), this._tolerance = rs, this._currentPosition = new ws();
  }
  updateTolerance(t) {
    this._tolerance = rs * t;
  }
  init(t, e, s = !0) {
    return s ? (this._patternLength = e.length(), this._partExtPtGap = e.extPtGap, this._partCtrlPtGap = e.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t, e = Et.FAIL) {
    const s = new ws();
    return !!this._nextPosition(t, s, null, e) && (s.copyTo(this._currentPosition), !0);
  }
  curPointAndAngle(t) {
    t.pt = this._getPoint(this._currentPosition);
    const [e, s] = this._getAngleCS(this._currentPosition);
    t.ca = e, t.sa = s;
  }
  nextPointAndAngle(t, e, s = Et.FAIL) {
    const r = new ws();
    if (!this._nextPosition(t, r, null, s)) return !1;
    r.copyTo(this._currentPosition), e.pt = this._getPoint(r);
    const [n, o] = this._getAngleCS(r);
    return e.ca = n, e.sa = o, !0;
  }
  nextCurve(t) {
    if (t === 0) return null;
    const e = O.createEmptyOptimizedCIM("esriGeometryPolyline");
    e.startPath(), e.nextPath();
    const s = new ws();
    return this._nextPosition(t, s, e, Et.END) ? (s.copyTo(this._currentPosition), e) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t) {
    return this._pathCursor.seekInPath(t), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t) {
    return [this.getPt(t), this.getPt(t + 1)];
  }
  _nextPosition(t, e, s, r) {
    if (this._currentPosition.isPathEnd) return !1;
    let n = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (n /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e); e.abscissa + t * this._partLengthRatio > e.segmentLength + this._tolerance; ) {
      if (s) {
        if (s.pathSize === 0) if (n === 0) {
          const a = e.segment[0];
          s.pushXY(a[0], a[1]);
        } else s.pushPoint(this.getSegCoord2D(e.segment, n));
        const o = e.segment[1];
        s.pushXY(o[0], o[1]);
      }
      if (n = 0, t -= (e.segmentLength - e.abscissa) / this._partLengthRatio, this._partSegCount) e.segment = this._nextSegment(), e.segmentLength = this.getSegLength(e.segment), e.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart()) return r !== Et.FAIL && (e.segmentLength = this.getSegLength(e.segment), e.isPartEnd = !0, r === Et.END ? (e.abscissa = e.segmentLength, e.isPathEnd = !0) : e.abscissa = e.segmentLength + t, !0);
        this._currentPosition.copyTo(e);
      }
    }
    if (e.abscissa += t * this._partLengthRatio, s) {
      s.pathSize === 0 && (n === 0 ? s.pushPoint(e.segment[0]) : s.pushPoint(this.getSegCoord2D(e.segment, n)));
      const o = e.abscissa / e.segmentLength;
      o === 1 ? s.pushPoint(e.segment[1]) : s.pushPoint(this.getSegCoord2D(e.segment, o));
    }
    return this._partSegCount || Math.abs(e.abscissa - e.segmentLength) < this._tolerance && (e.isPathEnd = this._partIsLast, e.isPartEnd = !0), !0;
  }
  _getPoint(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e);
  }
  _getAngleCS(t) {
    const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; ) this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment()) return !1;
    for (this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0; this._hasNextSegment(); ) if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
      this._partIsLast = !this._hasNextSegment();
      break;
    }
    let t = this._partSegCount;
    for (; t; ) this._previousSegment(), --t;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = !1, --this._partSegCount;
    const e = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e);
    let s = e + this._partSegCount + 1;
    if (s >= this._pathCursor.pathSize && (s = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s), this._patternLength > 0) {
      const r = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, n = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let o = Math.round((this._partLength - (r + n)) / this._patternLength);
      o <= 0 && (o = r + n > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (r + n + o * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else this._partLengthRatio = 1;
    return !0;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
};
const Aa = 1e3, kr = 1e-7;
let gn = class Ne {
  static local() {
    return Ne.instance === null && (Ne.instance = new Ne()), Ne.instance;
  }
  execute(t, e, s, r, n) {
    return new Fa(t, e, s, r);
  }
};
gn.instance = null;
let Fa = class extends ri {
  constructor(t, e, s, r) {
    super(t, !0, !0), this._firstCurve = null, this._walker = new oi(), this._walker.updateTolerance(s), this._endings = e.lineDashEnding, this._customDashPos = -(e.offsetAlongLine ?? 0) * s, this._offsetAtEnd = (e.customEndingOffset ?? 0) * s, this._tileKey = r;
    let n = $o(e).dashTemplate;
    n == null && (n = []), n.length % 2 && (n = [...n, ...n]);
    let o = 0;
    for (let a = 0; a < n.length; a++) {
      let h = Math.abs(n[a]);
      h < kr && (h = kr), o += h;
    }
    this._patternLength = o, this._numOfDashesPerPattern = n.length / 2, this._pattern = new ni(), this._pattern.init(n, !0), this._pattern.scale(s);
  }
  processPath(t) {
    if (this._pattern.length() === 0) {
      this.iteratePath = !1;
      const r = Jt(t);
      return O.fromJSONCIM({ paths: [r] });
    }
    if (!this.iteratePath) {
      let r = !0;
      switch (this._endings) {
        case W.HalfPattern:
        case W.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case W.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case W.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case W.NoConstraint:
          this.isClosed || (r = !1);
          break;
        case W.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const n = t.pathLength();
      if (this._pattern.isEmpty() || n < 0.1 * this._pattern.length()) {
        const o = Jt(t);
        return O.fromJSONCIM({ paths: [o] });
      }
      if (!this._walker.init(t, this._pattern, r)) {
        const o = Jt(t);
        return O.fromJSONCIM({ paths: [o] });
      }
    }
    let e;
    if (this.iteratePath) e = this._pattern.nextValue();
    else {
      let r;
      switch (this._endings) {
        case W.HalfPattern:
        default:
          r = 0.5 * this._pattern.firstValue();
          break;
        case W.HalfGap:
          r = 0.5 * -this._pattern.lastValue();
          break;
        case W.FullGap:
          r = -this._pattern.lastValue();
          break;
        case W.FullPattern:
          r = 0;
          break;
        case W.NoConstraint:
        case W.Custom:
          r = -this._customDashPos;
      }
      let n = r / this._pattern.length();
      n -= Math.floor(n), r = n * this._pattern.length(), this._pattern.reset(), e = this._pattern.nextValue();
      let o = !1;
      for (; r >= e; ) r -= e, e = this._pattern.nextValue(), o = !o;
      e -= r, o ? (this._walker.nextPosition(e), e = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(e), e = this._pattern.nextValue(), this._walker.nextPosition(e), e = this._pattern.nextValue());
    }
    let s = this._walker.nextCurve(e);
    if (s) if (this._walker.isPathEnd()) {
      if (this.iteratePath = !1, this._firstCurve) {
        for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); ) s.pushXY(this._firstCurve.x, this._firstCurve.y);
        this._firstCurve = null;
      }
    } else e = this._pattern.nextValue(), !this._walker.nextPosition(e) || this._walker.isPathEnd() ? (this.iteratePath = !1, this._firstCurve && (s.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = !0;
    else this.iteratePath = !1, s = this._firstCurve, this._firstCurve = null;
    return s?.reset(), s;
  }
  isClippingRequired(t) {
    const e = hs(t);
    let s = 0;
    for (const r of e) s += Io(r);
    return Math.round(this._numOfDashesPerPattern * (s / this._patternLength)) > Aa;
  }
}, yn = class Oe {
  static local() {
    return Oe.instance === null && (Oe.instance = new Oe()), Oe.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Ea(t, e, s, r, n, o);
  }
};
yn.instance = null;
let Ea = class {
  constructor(t, e, s, r, n, o) {
    switch (this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._maxInflateSize = o * s, this._width = (e.width !== void 0 ? e.width : 2) * s, e.method) {
      case Pe.Mitered:
      case Pe.Bevelled:
      case Pe.Rounded:
      case Pe.TrueBuffer:
      case Pe.Square:
    }
    this._option = e.option;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (t.geometryType === "esriGeometryEnvelope" && this._width > 0) {
        const e = t.asJSON();
        return Math.min(e.xmax - e.xmin, e.ymax - e.ymin) - 2 * this._width < 0 ? t : O.fromJSONCIM({ paths: [[[e.xmin + this._width, e.ymin + this._width], [e.xmax - this._width, e.ymin + this._width], [e.xmax - this._width, e.ymax - this._width], [e.xmin + this._width, e.ymax - this._width], [e.xmin + this._width, e.ymin + this._width]], [[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]] });
      }
      if (t.geometryType === "esriGeometryPolygon") {
        if (this._width === 0) return t.clone();
        const e = this._geometryEngine;
        if (e == null) return null;
        const s = this._tileKey ? ii(t, this._maxInflateSize) : t.clone();
        if (!s) continue;
        const r = e.buffer(er.WebMercator, s.asJSON(), -this._width, 1);
        if (r) {
          for (const n of r.rings) if (n) {
            s.startPath();
            for (const o of n.reverse()) s.pushXY(o[0], s.yFactor * o[1]);
          }
        }
        return s;
      }
    }
    return null;
  }
}, xn = class Re {
  static local() {
    return Re.instance === null && (Re.instance = new Re()), Re.instance;
  }
  execute(t, e, s, r, n) {
    return new Na(t, e, s);
  }
};
xn.instance = null;
let Na = class extends ri {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new zt(), this._length = (e.length !== void 0 ? e.length : 20) * s, this._angle = e.angle !== void 0 ? e.angle : 225, this._position = e.position !== void 0 ? e.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = !1;
  }
  processPath(t) {
    const e = O.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(t)) return null;
    t.seekInPath(0);
    const s = t.x, r = t.y;
    t.seekInPath(t.pathSize - 1);
    const n = t.x, o = t.y, a = [n - s, o - r];
    this._curveHelper.normalize(a);
    const h = s + (n - s) * this._position / 100, l = r + (o - r) * this._position / 100, c = Math.cos((90 - this._angle) / 180 * Math.PI);
    let u = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (u = -u), this._mirror = !this._mirror;
    const f = [h - this._length / 2 * c, l - this._length / 2 * u], p = [h + this._length / 2 * c, l + this._length / 2 * u];
    return e.pushPath([[s, r], f, p, [n, o]]), e;
  }
}, bn = class Ge {
  static local() {
    return Ge.instance === null && (Ge.instance = new Ge()), Ge.instance;
  }
  execute(t, e, s, r, n) {
    return new Oa(t, e, s);
  }
};
bn.instance = null;
let Oa = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (t.totalSize > 0) return this._move(t.clone(), this._offsetX, this._offsetY);
      t = this._inputGeometries.next();
    }
    return null;
  }
  _move(t, e, s) {
    for (; t.nextPath(); ) for (; t.nextPoint(); ) t.x = t.x + e, t.y = t.y + s;
    return t.reset(), t;
  }
};
const Ra = 10;
let Pn = class De {
  static local() {
    return De.instance === null && (De.instance = new De()), De.instance;
  }
  execute(t, e, s, r, n, o) {
    return new Ga(t, e, s, r, n, o);
  }
};
Pn.instance = null;
let Ga = class {
  constructor(t, e, s, r, n, o) {
    this._inputGeometries = t, this._tileKey = r, this._geometryEngine = n, this._curveHelper = new zt(), this._offset = (e.offset ?? 1) * s, this._method = e.method, this._maxInflateSize = Math.max(Math.abs(o * s), Ra), this._option = e.option, this._offsetFlattenError = rs * s;
  }
  next() {
    let t;
    for (; t = this._inputGeometries.next(); ) {
      if (this._offset === 0) return t.clone();
      if (t.geometryType === "esriGeometryEnvelope") {
        if (this._method === jt.Rounded && this._offset > 0) {
          const o = Jt(t), a = this._curveHelper.offset(o, -this._offset, this._method, 4, this._offsetFlattenError);
          if (a) {
            const h = O.createEmptyOptimizedCIM(t.geometryType);
            return h.pushPath(a), h;
          }
          return null;
        }
        const n = t.asJSON();
        if (ht(n) && Math.min(n.xmax - n.xmin, n.ymax - n.ymin) + 2 * this._offset > 0) return O.fromJSONCIM({ xmin: n.xmin - this._offset, xmax: n.xmax + this._offset, ymin: n.ymin - this._offset, ymax: n.ymax + this._offset });
      }
      const e = this._geometryEngine;
      if (e == null) continue;
      const s = this._tileKey ? ii(t, this._maxInflateSize) : t.clone();
      if (!s) continue;
      const r = e.offset(er.WebMercator, s.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return r ? O.fromJSONCIM(r) : null;
    }
    return null;
  }
}, wn = class Ve {
  static local() {
    return Ve.instance === null && (Ve.instance = new Ve()), Ve.instance;
  }
  execute(t, e, s, r, n) {
    return new Da(t, e, s);
  }
};
wn.instance = null;
let Da = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._reverse = e.reverse === void 0 || e.reverse;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (!this._reverse) return t;
      if (t.geometryType === "esriGeometryPolyline") return Va(t.clone());
      t = this._inputGeometries.next();
    }
    return null;
  }
};
function Va(i) {
  for (; i.nextPath(); ) for (let t = 0; t < i.pathSize / 2; t++) {
    i.seekInPath(t);
    const e = i.x, s = i.y;
    i.seekInPath(i.pathSize - t - 1);
    const r = i.x, n = i.y;
    i.x = e, i.y = s, i.seekInPath(t), i.x = r, i.y = n;
  }
  return i.reset(), i;
}
let Sn = class Be {
  static local() {
    return Be.instance === null && (Be.instance = new Be()), Be.instance;
  }
  execute(t, e, s, r, n) {
    return new Ba(t, e, s);
  }
};
Sn.instance = null;
let Ba = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._rotateAngle = e.angle !== void 0 ? e.angle * Math.PI / 180 : 0;
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._rotateAngle === 0 || t.geometryType === "esriGeometryPoint") return t;
      if (t.totalSize > 0) {
        const e = ei(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._rotate(t.clone(), s, r);
      }
      t = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t, e, s) {
    const r = Math.cos(this._rotateAngle), n = Math.sin(this._rotateAngle);
    for (; t.nextPath(); ) for (; t.nextPoint(); ) {
      const o = t.x - e, a = t.y - s;
      t.x = e + o * r - a * n, t.y = s + o * n + a * r;
    }
    return t.reset(), t;
  }
}, Mn = class He {
  static local() {
    return He.instance === null && (He.instance = new He()), He.instance;
  }
  execute(t, e, s, r, n) {
    return new Ha(t, e, s);
  }
};
Mn.instance = null;
let Ha = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._xFactor = e.xScaleFactor !== void 0 ? e.xScaleFactor : 1.15, this._yFactor = e.yScaleFactor !== void 0 ? e.yScaleFactor : 1.15;
  }
  next() {
    const t = this._inputGeometries.next();
    if (t) {
      if (this._xFactor === 1 && this._yFactor === 1 || t.geometryType === "esriGeometryPoint") return t;
      if (t.totalSize > 0) {
        const e = ei(t), s = (e[2] + e[0]) / 2, r = (e[3] + e[1]) / 2;
        return t.reset(), this._scaleCursor(t.clone(), s, r);
      }
    }
    return null;
  }
  _scaleCursor(t, e, s) {
    for (; t.nextPath(); ) for (; t.nextPoint(); ) t.x = e + (t.x - e) * this._xFactor, t.y = s + (t.y - s) * this._yFactor;
    return t.reset(), t;
  }
}, vn = class Xe {
  static local() {
    return Xe.instance === null && (Xe.instance = new Xe()), Xe.instance;
  }
  execute(t, e, s, r, n) {
    return new Xa(t, e, s);
  }
};
vn.instance = null;
let Xa = class {
  constructor(t, e, s) {
    this._inputGeometries = t, this._height = (e.amplitude !== void 0 ? e.amplitude : 2) * s, this._period = (e.period !== void 0 ? e.period : 3) * s, this._style = e.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new ni(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new oi(), this._walker.updateTolerance(s);
  }
  next() {
    let t = this._inputGeometries.next();
    for (; t; ) {
      if (this._height === 0 || this._period === 0) return t;
      const e = this._processGeom(t);
      if (e) return e;
      t = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(t) {
    const e = O.createEmptyOptimizedCIM(t.geometryType);
    for (; t.nextPath(); ) {
      e.startPath();
      const s = t.pathLength();
      if (this._walker.init(t, this._pattern)) switch (this._style) {
        case _s.Sinus:
        default:
          this._constructCurve(e, s, !1);
          break;
        case _s.Square:
          this._constructSquare(e, s);
          break;
        case _s.Triangle:
          this._constructTriangle(e, s);
          break;
        case _s.Random:
          this._constructCurve(e, s, !0);
      }
      else for (; t.nextPoint(); ) e.pushXY(t.x, t.y);
    }
    return e;
  }
  _constructCurve(t, e, s) {
    let r = Math.round(e / this._period);
    r === 0 && (r = 1);
    const n = r * 16 + 1, o = e / r, a = this._period / 16, h = 1 / n, l = 2 * Math.PI * e / o, c = 2 * Math.PI * Math.random(), u = 2 * Math.PI * Math.random(), f = 2 * Math.PI * Math.random(), p = 0.75 - Math.random() / 2, m = 0.75 - Math.random() / 2, d = new St();
    this._walker.curPointAndAngle(d), t.pushPoint(d.pt);
    let _ = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a, d)) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const y = _;
        let x;
        if (_ += h, s) {
          const P = this._height / 2 * (1 + 0.3 * Math.sin(p * l * y + c));
          x = P * Math.sin(l * y + u), x += P * Math.sin(m * l * y + f), x /= 2;
        } else x = 0.5 * this._height * Math.sin(0.5 * l * y);
        t.pushXY(d.pt[0] - x * d.sa, d.pt[1] + x * d.ca);
      }
    }
  }
  _constructSquare(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const n = new St();
        this._walker.curPointAndAngle(n);
        const o = new St();
        if (this._walker.nextPointAndAngle(this._period, o)) {
          const a = new St();
          this._walker.nextPointAndAngle(this._period, a) && (s ? (t.pushPoint(n.pt), s = !1) : t.pushPoint(n.pt), t.pushXY(n.pt[0] - this._height / 2 * n.sa, n.pt[1] + this._height / 2 * n.ca), t.pushXY(o.pt[0] - this._height / 2 * o.sa, o.pt[1] + this._height / 2 * o.ca), t.pushXY(o.pt[0] + this._height / 2 * o.sa, o.pt[1] - this._height / 2 * o.ca), t.pushXY(a.pt[0] + this._height / 2 * a.sa, a.pt[1] - this._height / 2 * a.ca), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t, e) {
    Math.round(e / this._period);
    let s = !0;
    for (; ; ) {
      let r = !1;
      if (this._walker.curPositionIsValid()) {
        const n = new St();
        this._walker.curPointAndAngle(n);
        const o = new St();
        if (this._walker.nextPointAndAngle(this._period / 2, o)) {
          const a = new St();
          this._walker.nextPointAndAngle(this._period, a) && (this._walker.nextPosition(this._period / 2) && (s ? (t.pushPoint(n.pt), s = !1) : t.pushPoint(n.pt), t.pushXY(o.pt[0] - this._height / 2 * o.sa, o.pt[1] + this._height / 2 * o.ca), t.pushXY(a.pt[0] + this._height / 2 * a.sa, a.pt[1] - this._height / 2 * a.ca)), r = !0);
        }
      }
      if (!r) {
        t.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
}, Cn = class Ue {
  static local() {
    return Ue.instance === null && (Ue.instance = new Ue()), Ue.instance;
  }
  execute(t, e, s, r, n) {
    return new Ua(t, e, s);
  }
};
Cn.instance = null;
let Ua = class extends ls {
  constructor(t, e, s) {
    super(t), this._geometryWalker = new oi(), this._geometryWalker.updateTolerance(s), this._angleToLine = e.angleToLine ?? !0, this._offset = (e.offset ? e.offset : 0) * s, this._originalEndings = e.endings, this._offsetAtEnd = (e.customEndingOffset ? e.customEndingOffset : 0) * s, this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s, this._pattern = new ni(), this._pattern.init(e.placementTemplate, !1), this._pattern.scale(s), this._endings = this._originalEndings;
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) e = this._pattern.nextValue();
    else {
      this._originalEndings === yt.WithFullGap && this.isClosed ? this._endings = yt.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let r, n = !0;
      switch (this._endings) {
        case yt.NoConstraint:
          r = -this._position, r = this._adjustPosition(r), n = !1;
          break;
        case yt.WithHalfGap:
        default:
          r = -this._pattern.lastValue() / 2;
          break;
        case yt.WithFullGap:
          r = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case yt.WithMarkers:
          r = 0;
          break;
        case yt.Custom:
          r = -this._position, r = this._adjustPosition(r), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t, this._pattern, n)) return null;
      this._pattern.reset();
      let o = 0;
      for (; r > o; ) r -= o, o = this._pattern.nextValue();
      o -= r, e = o, this.iteratePath = !0;
    }
    const s = new St();
    return this._geometryWalker.nextPointAndAngle(e, s) ? this._endings === yt.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = !1, null) : this._endings === yt.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = !1, this.isClosed) ? null : (this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca), this._angleToLine && this.internalPlacement.setRotateCS(s.ca, s.sa), this.internalPlacement) : (this.iteratePath = !1, null);
  }
  _adjustPosition(t) {
    let e = t / this._pattern.length();
    return e -= Math.floor(e), e * this._pattern.length();
  }
}, $n = class Ye {
  static local() {
    return Ye.instance === null && (Ye.instance = new Ye()), Ye.instance;
  }
  execute(t, e, s, r, n) {
    return new Ya(t, e, s);
  }
};
$n.instance = null;
let Ya = class extends ls {
  constructor(t, e, s) {
    super(t, !1, !0), this._curveHelper = new zt(), this._placePerPart = e.placePerPart ?? !1, this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._type = e.extremityPlacement, this._position = e.offsetAlongLine !== void 0 ? e.offsetAlongLine * s : 0, this._beginProcessed = !1;
  }
  processMultiPath(t) {
    return this._placePerPart ? super.processMultiPath(t) : this.processPath(t);
  }
  processPath(t) {
    let e;
    switch (this._type) {
      case Ot.Both:
      default:
        this._beginProcessed ? (e = this._atExtremities(t, this._position, !1), this._beginProcessed = !1, this.iterateMultiPath = !1, this.iteratePath = !1) : (e = this._atExtremities(t, this._position, !0), this._beginProcessed = !0, this.iterateMultiPath = !0, this.iteratePath = !0);
        break;
      case Ot.JustBegin:
        e = this._atExtremities(t, this._position, !0);
        break;
      case Ot.JustEnd:
        e = this._atExtremities(t, this._position, !1);
      case Ot.None:
    }
    return e;
  }
  _atExtremities(t, e, s) {
    if (this._placePerPart || (s ? t.seekPath(0) : t.seekPath(t.totalSize - 1)), s || t.seekPathEnd(), s ? t.nextPoint() : t.prevPoint()) {
      let r = 0, [n, o] = [0, 0], [a, h] = [t.x, t.y];
      for (; s ? t.nextPoint() : t.prevPoint(); ) {
        n = a, o = h, a = t.x, h = t.y;
        const l = this._curveHelper.getLength(n, o, a, h);
        if (r + l > e) {
          const c = (e - r) / l, [u, f] = this._curveHelper.getAngleCS(n, o, a, h, c), p = this._curveHelper.getCoord2D(n, o, a, h, c);
          return this.internalPlacement.setTranslate(p[0] - this._offset * f, p[1] + this._offset * u), this._angleToLine && this.internalPlacement.setRotateCS(-u, -f), this.internalPlacement;
        }
        r += l;
      }
    }
    return null;
  }
}, In = class qe {
  static local() {
    return qe.instance === null && (qe.instance = new qe()), qe.instance;
  }
  execute(t, e, s, r, n) {
    return new qa(t, e, s);
  }
};
In.instance = null;
let qa = class extends ls {
  constructor(t, e, s) {
    super(t), this._walker = new oi(), this._walker.updateTolerance(s), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._beginGap = e.beginPosition !== void 0 ? e.beginPosition * s : 0, this._endGap = e.endPosition !== void 0 ? e.endPosition * s : 0, this._flipFirst = e.flipFirst === void 0 || e.flipFirst, this._pattern = new ni(), this._pattern.init(e.positionArray, !1, !1), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0;
  }
  processPath(t) {
    if (this._pattern.isEmpty()) return null;
    let e;
    if (this.iteratePath) {
      const a = this._pattern.nextValue() * this._subPathLen, h = this._beginGap + a;
      e = h - this._prevPos, this._prevPos = h;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = !0, this._prevPos = 0, this._subPathLen = t.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = !1, null;
      if (!this._walker.init(t, this._pattern, !1)) return null;
      this._pattern.reset();
      const a = this._pattern.nextValue() * this._subPathLen, h = this._beginGap + a;
      e = h - this._prevPos, this._prevPos = h, this.iteratePath = !0;
    }
    const s = new St();
    if (!this._walker.nextPointAndAngle(e, s, Et.END)) return this.iteratePath = !1, null;
    this.internalPlacement.setTranslate(s.pt[0] - this._offset * s.sa, s.pt[1] + this._offset * s.ca);
    const r = this._isFirst && this._flipFirst;
    let n, o;
    return this._angleToLine ? (n = s.ca, o = s.sa) : (n = 1, o = 0), r && (n = -n, o = -o), this.internalPlacement.setRotateCS(n, o), this._isFirst = !1, this._posCount--, this._posCount === 0 && (this.iteratePath = !1), this.internalPlacement;
  }
};
const Lt = 512, Wa = 10, ut = 24, js = 1e-6;
let kn = class We {
  static local() {
    return We.instance === null && (We.instance = new We()), We.instance;
  }
  execute(t, e, s, r, n) {
    return new ja(t, e, s, r, n);
  }
};
kn.instance = null;
let ja = class Bt {
  constructor(t, e, s, r, n) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = !1, this._verticalSubdivision = !0, this._stepX = Math.abs(e.stepX ?? 16) * s, this._stepY = Math.abs(e.stepY ?? 16) * s, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, this._stepX !== 0 && this._stepY !== 0) {
      if (this._gridType = e.gridType ?? di.Fixed, this._gridType === di.Random) {
        const o = e.seed ?? 13, a = 1;
        this._randomLCG = new Zr(o * a), this._randomness = (e.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = !1, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = e.gridAngle ?? 0, this._shiftOddRows = e.shiftOddRows ?? !1, this._offsetX = (e.offsetX ?? 0) * s, this._offsetY = (e.offsetY ?? 0) * s, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
        else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
        else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, r != null) {
        const [o, a, h, l] = r.split("/"), c = parseFloat(o), u = parseFloat(a), f = parseFloat(h), p = parseFloat(l);
        this._graphicOriginX = -(p * 2 ** c + f) * Lt, this._graphicOriginY = u * Lt, this._testInsidePolygon = !0;
      }
      this._internalPlacement = new _e(), this._calculateMinMax(t), this._geometryCursor = t;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!Bt._randValues) {
      Bt._randValues = [];
      for (let t = 0; t < ut; t++) for (let e = 0; e < ut; e++) Bt._randValues.push(this._randomLCG.getFloat()), Bt._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t) {
    let e, s, r, n, o, a, h, l, c, u, f, p, m, d;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, h = l = m = f = Number.MAX_VALUE, c = u = d = p = -Number.MAX_VALUE;
    const _ = this._cosAngle !== 1;
    for (t.reset(); t.nextPath(); ) for (; t.nextPoint(); ) a = t.x, o = t.y, e = a - this._graphicOriginX - this._offsetX, s = o - this._graphicOriginY - this._offsetY, _ ? (r = this._cosAngle * e - this._sinAngle * s, n = this._sinAngle * e + this._cosAngle * s) : (r = e, n = s), h = Math.min(h, r), c = Math.max(c, r), l = Math.min(l, n), u = Math.max(u, n), f = Math.min(f, o), p = Math.max(p, o), m = Math.min(m, a), d = Math.max(d, a);
    f = f !== Number.MAX_VALUE ? f : -Lt - this._stepY, p = p !== -Number.MAX_VALUE ? p : this._stepY, m = m !== Number.MAX_VALUE ? m : -this._stepX, d = d !== -Number.MAX_VALUE ? d : Lt + this._stepX;
    const y = p - f, x = d - m;
    if (this._verticalSubdivision = y >= x, this._polygonMin = this._verticalSubdivision ? f : m, this._testInsidePolygon) {
      let P = 0 - this._graphicOriginX - this._offsetX - this._stepX, w = Lt - this._graphicOriginX - this._offsetX + this._stepX, C = -Lt - this._graphicOriginY - this._offsetY - this._stepY, I = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (_) {
        const X = [[P, C], [P, I], [w, C], [w, I]];
        P = C = Number.MAX_VALUE, w = I = -Number.MAX_VALUE;
        for (const F of X) {
          const z = this._cosAngle * F[0] - this._sinAngle * F[1], L = this._sinAngle * F[0] + this._cosAngle * F[1];
          P = Math.min(P, z), w = Math.max(w, z), C = Math.min(C, L), I = Math.max(I, L);
        }
      }
      h = h !== Number.MAX_VALUE ? Math.max(h, P) : P, l = l !== Number.MAX_VALUE ? Math.max(l, C) : C, c = c !== -Number.MAX_VALUE ? Math.min(c, w) : w, u = u !== -Number.MAX_VALUE ? Math.min(u, I) : I;
    }
    this._xMin = Math.round(h / this._stepX), this._xMax = Math.round(c / this._stepX), this._yMin = Math.round(l / this._stepY), this._yMax = Math.round(u / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t, m, d, f, p);
  }
  _buildAccelerationMap(t, e, s, r, n) {
    t.reset();
    const o = /* @__PURE__ */ new Map(), a = this._verticalSubdivision, h = a ? n - r : s - e;
    let l = Math.ceil(h / Wa);
    if (l <= 1) return;
    const c = Math.floor(h / l);
    let u, f, p, m, d, _, y, x, P, w, C;
    for (l++, this._delta = c, a ? (P = -Lt - 2 * this._stepY, w = 2 * this._stepY, C = r) : (P = -2 * this._stepX, w = Lt + 2 * this._stepX, C = e); t.nextPath(); ) if (!(t.pathSize < 2) && t.nextPoint()) for (u = t.x, f = t.y; t.nextPoint(); u = p, f = m) {
      if (p = t.x, m = t.y, a) {
        if (f === m || f < P && m < P || f > w && m > w) continue;
        d = Math.min(f, m), _ = Math.max(f, m);
      } else {
        if (u === p || u < P && p < P || u > w && p > w) continue;
        d = Math.min(u, p), _ = Math.max(u, p);
      }
      for (; d < _; ) y = Math.floor((d - C) / c), Tr(y, u, f, p, m, o), d += c;
      x = Math.floor((_ - C) / c), x > y && Tr(x, u, f, p, m, o);
    }
    this._accelerationMap = o;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax) return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t += 0.5 * this._stepX);
      const e = this._currentY * this._stepY + this._offsetY;
      let s, r;
      if (this._currentX++, this._gridType === di.Random) {
        const n = (this._currentX % ut + ut) % ut, o = (this._currentY % ut + ut) % ut;
        s = this._graphicOriginX + t + this._stepX * this._randomness * (0.5 - Bt._randValues[o * ut + n]) * 2 / 3, r = this._graphicOriginY + e + this._stepY * this._randomness * (0.5 - Bt._randValues[o * ut + n + 1]) * 2 / 3;
      } else s = this._graphicOriginX + this._cosAngle * t + this._sinAngle * e, r = this._graphicOriginY - this._sinAngle * t + this._cosAngle * e;
      if (!this._testInsidePolygon || this._isInsidePolygon(s, r, this._geometryCursor)) return this._internalPlacement.setTranslate(s, r), this._internalPlacement;
    }
  }
  _isInsidePolygon(t, e, s) {
    if (this._accelerationMap == null) return Ka(t, e, s);
    t += js, e += js;
    const r = this._verticalSubdivision, n = r ? e : t, o = Math.floor((n - this._polygonMin) / this._delta), a = this._accelerationMap.get(o);
    if (!a) return !1;
    let h, l, c, u = 0;
    for (const f of a) {
      if (h = f[0], l = f[1], r) {
        if (h[1] > e == l[1] > e) continue;
        c = (l[0] - h[0]) * (e - h[1]) - (l[1] - h[1]) * (t - h[0]);
      } else {
        if (h[0] > t == l[0] > t) continue;
        c = (l[1] - h[1]) * (t - h[0]) - (l[0] - h[0]) * (e - h[1]);
      }
      c > 0 ? u++ : u--;
    }
    return u !== 0;
  }
};
function Ka(i, t, e) {
  let s, r, n, o, a = 0;
  for (i += js, t += js, e.reset(); e.nextPath(); ) if (e.nextPoint()) for (s = e.x, r = e.y; e.nextPoint(); s = n, r = o)
    n = e.x, o = e.y, r > t != o > t && ((n - s) * (t - r) - (o - r) * (i - s) > 0 ? a++ : a--);
  return a !== 0;
}
function Tr(i, t, e, s, r, n) {
  let o = n.get(i);
  o || (o = [], n.set(i, o)), o.push([[t, e], [s, r]]);
}
const Ja = 1e-3;
let Tn = class je {
  static local() {
    return je.instance === null && (je.instance = new je()), je.instance;
  }
  execute(t, e, s, r, n) {
    return new Za(t, e, s);
  }
};
Tn.instance = null;
let Za = class extends ls {
  constructor(t, e, s) {
    super(t), this._curveHelper = new zt(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._relativeTo = e.relativeTo, this._position = e.startPointOffset !== void 0 ? e.startPointOffset * s : 0, this._epsilon = Ja * s;
  }
  processPath(t) {
    const e = this._position;
    if (this._relativeTo === we.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = !0), t.nextPoint()) {
        let [r, n] = [t.x, t.y], [o, a] = [0, 0];
        for (; t.nextPoint(); ) {
          o = t.x, a = t.y;
          const h = this._curveHelper.getLength(r, n, o, a);
          if (h < this._epsilon) {
            r = o, n = a;
            continue;
          }
          const l = 0.5 + this._position / h, [c, u] = this._curveHelper.getAngleCS(r, n, o, a, l), f = this._curveHelper.getCoord2D(r, n, o, a, l);
          return this.internalPlacement.setTranslate(f[0] - this._offset * u, f[1] + this._offset * c), this._angleToLine && this.internalPlacement.setRotateCS(c, u), this.internalPlacement;
        }
      }
      return this.iteratePath = !1, null;
    }
    const s = this._relativeTo === we.LineEnd;
    return this.onLine(t, e, s);
  }
  onLine(t, e, s) {
    let r, n = !1;
    switch (this._relativeTo) {
      case we.LineMiddle:
      default:
        t.seekPathStart(), r = t.pathLength() / 2 + e;
        break;
      case we.LineBeginning:
        r = e;
        break;
      case we.LineEnd:
        r = e, n = !0;
    }
    s ? t.seekPathEnd() : t.seekPathStart();
    let o = 0;
    if (s ? t.prevPoint() : t.nextPoint()) {
      let [a, h] = [t.x, t.y], [l, c] = [0, 0];
      for (; s ? t.prevPoint() : t.nextPoint(); ) {
        l = t.x, c = t.y;
        const u = this._curveHelper.getLength(a, h, l, c);
        if (o + u > r) {
          const f = (r - o) / u, [p, m] = this._curveHelper.getAngleCS(a, h, l, c, f), d = this._curveHelper.getCoord2D(a, h, l, c, f), _ = n ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(d[0] - _ * m, d[1] + _ * p), this._angleToLine && (n ? this.internalPlacement.setRotateCS(-p, -m) : this.internalPlacement.setRotateCS(p, m)), this.internalPlacement;
        }
        a = l, h = c, o += u;
      }
    }
    return null;
  }
};
const Qa = 1e-15;
let zn = class Ke {
  static local() {
    return Ke.instance === null && (Ke.instance = new Ke()), Ke.instance;
  }
  execute(t, e, s, r, n) {
    return new th(t, e, s);
  }
};
zn.instance = null;
let th = class extends ls {
  constructor(t, e, s) {
    super(t), this._curveHelper = new zt(), this._angleToLine = e.angleToLine === void 0 || e.angleToLine, this._offset = e.offset !== void 0 ? e.offset * s : 0, this._endPoints = e.placeOnEndPoints === void 0 || e.placeOnEndPoints, this._controlPoints = e.placeOnControlPoints === void 0 || e.placeOnControlPoints, this._regularVertices = e.placeOnRegularVertices === void 0 || e.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t) {
    if (this.iteratePath || (this._preparePath(t), this.iteratePath = !0), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = !1, null;
    const e = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e[2]);
    let s = e[0], r = e[1];
    if (this._offset !== 0) {
      const n = Math.cos(e[2]), o = Math.sin(e[2]);
      s -= this._offset * o, r += this._offset * n;
    }
    return this.internalPlacement.setTranslate(s, r), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t) {
    this._tags.length = 0, this._tagIterator = 0, t.seekPathStart();
    const e = t.isClosed();
    let s = 0, r = !1, n = 0, o = 0;
    if (t.seekPathStart(), t.nextPoint()) {
      let a = t.x, h = t.y, l = t.getControlPoint(), c = !0, u = t.nextPoint();
      for (; u; ) {
        const f = t.x, p = t.y, m = t.getControlPoint();
        (this._angleToLine || this._offset !== 0) && (n = this._curveHelper.getAngle(a, h, f, p, 0)), c ? (c = !1, e ? (s = n, r = l) : (this._endPoints || this._controlPoints && l) && this._tags.push([a, h, n])) : l ? this._controlPoints && this._tags.push([a, h, Ss(o, n)]) : this._regularVertices && this._tags.push([a, h, Ss(o, n)]), (this._angleToLine || this._offset !== 0) && (o = this._curveHelper.getAngle(a, h, f, p, 1)), u = t.nextPoint(), u || (e ? m || r ? this._controlPoints && this._tags.push([f, p, Ss(o, s)]) : this._regularVertices && this._tags.push([f, p, Ss(o, s)]) : (this._endPoints || this._controlPoints && m) && this._tags.push([f, p, o])), a = f, h = p, l = m;
      }
    }
    this._tagIterator = 0;
  }
};
function Ss(i, t) {
  const e = Math.PI;
  for (; Math.abs(t - i) > e + 2 * Qa; ) t - i > e ? t -= 2 * e : t += 2 * e;
  return (i + t) / 2;
}
const eh = 100 * 222045e-21;
function sh(i) {
  if (i.totalSize === 0) return null;
  const t = ei(i);
  if (!t) return null;
  const e = 4 * (Math.abs(t[0]) + Math.abs(t[2]) + Math.abs(t[1]) + Math.abs(t[3]) + 1) * eh;
  let s = 0, r = 0;
  i.reset();
  for (let z = 0; i.nextPath(); z++) {
    const L = i.getCurrentRingArea();
    L > r && (r = L, s = z);
  }
  if (i.seekPath(s), i.pathSize === 0) return null;
  i.seekPathStart();
  const n = ko(i);
  if (Math.abs(r) <= 2 * e * e) return [(n[0] + n[2]) / 2, (n[1] + n[3]) / 2];
  i.seekPathStart();
  const o = To(i, pe());
  if (o === null) return null;
  if (i.totalPoints < 4) return o;
  const a = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], h = [NaN, NaN, NaN, NaN], l = [NaN, NaN, NaN, NaN];
  let c = !1, u = Se(o, i, !0);
  u.distance === 0 && (c = !0, a[0][0] = o[0], a[0][1] = o[1], u = Se(o, i, !1)), h[0] = u.distance, l[0] = 0;
  const f = [NaN, NaN];
  let p = !1, m = 0.25, d = -1, _ = NaN;
  do
    if (_ = NaN, a[1] = _i(i, gi(n[0], n[2], m), e, t), isNaN(a[1][0]) || isNaN(a[1][1]) || (u = Se(a[1], i, !1), _ = u.distance), !isNaN(_) && _ > e && Es(a[1], i)) p = !0, h[1] = _, l[1] = Ht(a[1], o);
    else if (!isNaN(_) && _ > d && (d = _, f[0] = a[1][0], f[1] = a[1][1]), m -= 0.01, m < 0.1) {
      if (!(d >= 0)) break;
      p = !0, h[1] = d, a[1][0] = f[0], a[1][1] = f[1], l[1] = Ht(a[1], o);
    }
  while (!p);
  p = !1, m = 0.5, d = -1;
  let y = 0.01, x = 1;
  do
    if (_ = NaN, a[2] = _i(i, gi(n[0], n[2], m), e, t), isNaN(a[2][0]) || isNaN(a[2][1]) || (u = Se(a[2], i, !1), _ = u.distance), !isNaN(_) && _ > e && Es(a[2], i)) p = !0, h[2] = _, l[2] = Ht(a[2], o);
    else if (!isNaN(_) && _ > d) d = _, f[0] = a[2][0], f[1] = a[2][1];
    else if (_ > d && (d = _, f[0] = a[2][0], f[1] = a[2][1]), m = 0.5 + y * x, y += 0.01, x *= -1, m < 0.3 || m > 0.7) {
      if (!(d >= 0)) break;
      p = !0, h[2] = d, a[2][0] = f[0], a[2][1] = f[1], l[2] = Ht(a[2], o);
    }
  while (!p);
  p = !1, m = 0.75, d = -1;
  do
    if (_ = NaN, a[3] = _i(i, gi(n[0], n[2], m), e, t), isNaN(a[3][0]) || isNaN(a[3][1]) || (u = Se(a[3], i, !1), _ = u.distance), !isNaN(_) && _ > e && Es(a[3], i)) p = !0, h[3] = _, l[3] = Ht(a[3], o);
    else if (_ > d && (d = _, f[0] = a[3][0], f[1] = a[3][1]), m += 0.01, m > 0.9) {
      if (!(d >= 0)) break;
      p = !0, h[3] = d, a[3][0] = f[0], a[3][1] = f[1], l[3] = Ht(a[3], o);
    }
  while (!p);
  const P = [0, 1, 2, 3], w = c ? 0 : 1;
  let C;
  for (let z = w; z < 4; z++) for (let L = w; L < 3; L++) {
    const Y = l[L], j = l[L + 1];
    nh(Y, j) > 0 && (C = P[L], P[L] = P[L + 1], P[L + 1] = C, l[L] = j, l[L + 1] = Y);
  }
  let I = w, X = 0, F = 0;
  for (let z = w; z < 4; z++) {
    switch (z) {
      case 0:
        F = 2 * h[P[z]];
        break;
      case 1:
        F = 1.66666666 * h[P[z]];
        break;
      case 2:
        F = 1.33333333 * h[P[z]];
        break;
      case 3:
        F = h[P[z]];
    }
    F > X && (X = F, I = P[z]);
  }
  return a[I];
}
function Es(i, t) {
  let e, s, r, n, o = 0;
  for (t.reset(); t.nextPath() && t.nextPoint(); ) for (e = t.x, s = t.y; t.nextPoint(); e = r, s = n)
    r = t.x, n = t.y, s > i[1] != n > i[1] && ((r - e) * (i[1] - s) - (n - s) * (i[0] - e) > 0 ? o++ : o--);
  return o !== 0;
}
function Se(i, t, e) {
  if (e && Es(i, t)) return { coord: i, distance: 0 };
  let s = 1 / 0, r = 0, n = 0, o = [0, 0], a = [0, 0];
  const h = [0, 0];
  for (t.reset(); t.nextPath() && t.nextPoint(); ) if (!(t.pathSize < 2)) for (o[0] = t.x, o[1] = t.y; t.nextPoint(); o = a) {
    a = [t.x, t.y], zo(h, i, o, a);
    const l = Ht(i, h);
    l < s && (s = l, r = h[0], n = h[1]);
  }
  return { coord: [r, n], distance: Math.sqrt(s) };
}
function _i(i, t, e, s) {
  const r = [t, 0];
  let n = 1 / 0, o = 1 / 0, a = !1, h = !1;
  const l = [[t, s[1] - 1], [t, s[3] + 1]], c = [0, 0], u = [0, 0], f = [0, 0], p = [[0, 0], [0, 0]], m = pe();
  for (i.reset(); i.nextPath() && i.nextPoint(); ) if (!(i.pathSize < 2)) for (p[0][0] = i.x, p[0][1] = i.y; i.nextPoint(); p[0][0] = p[1][0], p[0][1] = p[1][1]) {
    if (p[1][0] = i.x, p[1][1] = i.y, ih(m, p) === null || (u[0] = l[0][0], u[1] = l[0][1], f[0] = l[1][0], f[1] = l[1][1], rh(m, u, f) === 0) || !Lo(l[0], l[1], p[0], p[1], c)) continue;
    const d = c[1];
    n > o ? d < n && (n = d, a = !0) : d < o && (o = d, h = !0);
  }
  return a && h ? r[1] = (n + o) / 2 : r[0] = r[1] = NaN, r;
}
function ih(i, t) {
  if (t.length < 2) return null;
  i || (i = pe());
  const [e, s] = t[0], [r, n] = t[1];
  return i[0] = Math.min(e, r), i[1] = Math.min(s, n), i[2] = Math.max(e, r), i[3] = Math.max(s, n), i;
}
const Ms = 1, vs = 4, zr = 3, Lr = 12;
function rh(i, t, e) {
  let s = pt(t, i), r = pt(e, i);
  const n = i[0], o = i[1], a = i[2], h = i[3];
  if (s & r) return 0;
  if (!(s | r)) return 4;
  const l = (s ? 1 : 0) | (r ? 2 : 0);
  do {
    const c = e[0] - t[0], u = e[1] - t[1];
    if (c > u) s & zr ? (s & Ms ? (t[1] += u * (n - t[0]) / c, t[0] = n) : (t[1] += u * (a - t[0]) / c, t[0] = a), s = pt(t, i)) : r & zr ? (r & Ms ? (e[1] += u * (n - e[0]) / c, e[0] = n) : (e[1] += u * (a - e[0]) / c, e[0] = a), r = pt(e, i)) : s ? (s & vs ? (t[0] += c * (o - t[1]) / u, t[1] = o) : (t[0] += c * (h - t[1]) / u, t[1] = h), s = pt(t, i)) : (r & vs ? (e[0] += c * (o - e[1]) / u, e[1] = o) : (e[0] += c * (h - e[1]) / u, e[1] = h), r = pt(e, i));
    else if (s & Lr ? (s & vs ? (t[0] += c * (o - t[1]) / u, t[1] = o) : (t[0] += c * (h - t[1]) / u, t[1] = h), s = pt(t, i)) : r & Lr ? (r & vs ? (e[0] += c * (o - e[1]) / u, e[1] = o) : (e[0] += c * (h - e[1]) / u, e[1] = h), r = pt(e, i)) : s ? (s & Ms ? (t[1] += u * (n - t[0]) / c, t[0] = n) : (t[1] += u * (a - t[0]) / c, t[0] = a), s = pt(t, i)) : (r & Ms ? (e[1] += u * (n - e[0]) / c, e[0] = n) : (e[1] += u * (a - e[0]) / c, e[0] = a), r = pt(e, i)), s & r) return 0;
  } while (s | r);
  return l;
}
function pt(i, t) {
  return (i[0] < t[0] ? 1 : 0) | (i[0] > t[2] ? 1 : 0) << 1 | (i[1] < t[1] ? 1 : 0) << 2 | (i[1] > t[3] ? 1 : 0) << 3;
}
function gi(i, t, e) {
  return i + (t - i) * e;
}
function Ht(i, t) {
  return (i[0] - t[0]) * (i[0] - t[0]) + (i[1] - t[1]) * (i[1] - t[1]);
}
function nh(i, t) {
  if (i < t) return -1;
  if (i > t) return 1;
  if (i === t) return 0;
  const e = isNaN(i), s = isNaN(t);
  return e < s ? -1 : e > s ? 1 : 0;
}
let Ln = class Je {
  static local() {
    return Je.instance === null && (Je.instance = new Je()), Je.instance;
  }
  execute(t, e, s, r, n) {
    return new oh(t, e, s);
  }
};
Ln.instance = null;
let oh = class {
  constructor(t, e, s) {
    this._geometryCursor = t, this._offsetX = e.offsetX !== void 0 ? e.offsetX * s : 0, this._offsetY = e.offsetY !== void 0 ? e.offsetY * s : 0, this._method = e.method !== void 0 ? e.method : gs.OnPolygon, this._internalPlacement = new _e();
  }
  next() {
    const t = this._geometryCursor;
    return this._geometryCursor = null, t ? this._polygonCenter(t) : null;
  }
  _polygonCenter(t) {
    let e = !1;
    switch (this._method) {
      case gs.CenterOfMass:
        {
          const s = Ao(t);
          s && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
        }
        break;
      case gs.BoundingBoxCenter:
        {
          const s = ei(t);
          s && (this._internalPlacement.setTranslate((s[2] + s[0]) / 2 + this._offsetX, (s[3] + s[1]) / 2 + this._offsetY), e = !0);
        }
        break;
      case gs.OnPolygon:
      default: {
        const s = sh(t);
        s !== null && (this._internalPlacement.setTranslate(s[0] + this._offsetX, s[1] + this._offsetY), e = !0);
      }
    }
    return e ? this._internalPlacement : null;
  }
};
function ah(i) {
  if (!i) return null;
  switch (i.type) {
    case "CIMGeometricEffectAddControlPoints":
      return pn.local();
    case "CIMGeometricEffectArrow":
      return dn.local();
    case "CIMGeometricEffectBuffer":
      return fn.local();
    case "CIMGeometricEffectControlMeasureLine":
      return mn.local();
    case "CIMGeometricEffectCut":
      return _n.local();
    case "CIMGeometricEffectDashes":
      return gn.local();
    case "CIMGeometricEffectDonut":
      return yn.local();
    case "CIMGeometricEffectJog":
      return xn.local();
    case "CIMGeometricEffectMove":
      return bn.local();
    case "CIMGeometricEffectOffset":
      return Pn.local();
    case "CIMGeometricEffectReverse":
      return wn.local();
    case "CIMGeometricEffectRotate":
      return Sn.local();
    case "CIMGeometricEffectScale":
      return Mn.local();
    case "CIMGeometricEffectWave":
      return vn.local();
  }
  return null;
}
function hh(i) {
  if (!i) return null;
  switch (i.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return Cn.local();
    case "CIMMarkerPlacementAtExtremities":
      return $n.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return In.local();
    case "CIMMarkerPlacementInsidePolygon":
      return kn.local();
    case "CIMMarkerPlacementOnLine":
      return Tn.local();
    case "CIMMarkerPlacementOnVertices":
      return zn.local();
    case "CIMMarkerPlacementPolygonCenter":
      return Ln.local();
  }
  return null;
}
const yi = new Co();
function lh(i) {
  if (i == null) return ["", !1];
  if (!yi.hasBidiChar(i)) return [i, !1];
  let t;
  return t = yi.checkContextual(i) === "rtl" ? "IDNNN" : "ICNNN", [yi.bidiTransform(i, t, "VLYSN"), !0];
}
const sr = "arial-unicode-ms", Ar = "woff2", Fr = /* @__PURE__ */ new Map(), ch = /* @__PURE__ */ new Set();
let uh = class {
  constructor(t, e) {
    this.fontFace = t, this.promise = e;
  }
};
async function Jc(i) {
  const t = fh(i), e = dh(i), s = Fr.get(t);
  if (s) return s.promise;
  const r = new FontFace(i.family, `url('${Fo.fontsUrl}/woff2/${e}.${Ar}') format('${Ar}')`, { style: i.style, weight: i.weight }), n = document.fonts;
  if (n.has(r) && r.status === "loading") return r.loaded;
  const o = r.load().then(() => (n.add(r), r));
  return Fr.set(t, new uh(r, o)), ch.add(r), o;
}
function ph(i) {
  if (!i) return sr;
  const t = i.toLowerCase().split(" ").join("-");
  switch (t) {
    case "serif":
      return "noto-serif";
    case "sans-serif":
      return "arial-unicode-ms";
    case "monospace":
      return "ubuntu-mono";
    case "fantasy":
      return "cabin-sketch";
    case "cursive":
      return "redressed";
    default:
      return t;
  }
}
function dh(i) {
  const t = An(i) + Fn(i);
  return ph(i.family) + (t.length > 0 ? t : "-regular");
}
function fh(i) {
  const t = An(i) + Fn(i);
  return (i.family || sr) + (t.length > 0 ? t : "-regular");
}
function An(i) {
  if (!i.weight) return "";
  switch (i.weight.toLowerCase()) {
    case "bold":
    case "bolder":
      return "-bold";
  }
  return "";
}
function Fn(i) {
  if (!i.style) return "";
  switch (i.style.toLowerCase()) {
    case "italic":
    case "oblique":
      return "-italic";
  }
  return "";
}
let mh = class {
  applyColorSubstituition(t, e) {
    if (!e) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, n = this._rasterizationCanvas, o = n.getContext("2d", { willReadFrequently: !0 });
    t !== n && (n.width = s, n.height = r, o.drawImage(t, 0, 0, s, r));
    const a = o.getImageData(0, 0, s, r).data;
    if (e) {
      for (const l of e) if (l && l.oldColor && l.oldColor.length === 4 && l.newColor && l.newColor.length === 4) {
        const [c, u, f, p] = l.oldColor, [m, d, _, y] = l.newColor;
        if (c === m && u === d && f === _ && p === y) continue;
        for (let x = 0; x < a.length; x += 4) c === a[x] && u === a[x + 1] && f === a[x + 2] && p === a[x + 3] && (a[x] = m, a[x + 1] = d, a[x + 2] = _, a[x + 3] = y);
      }
    }
    const h = new ImageData(a, s, r);
    return o.putImageData(h, 0, 0), n;
  }
  tintImageData(t, e) {
    if (!e || e.length < 4) return t;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: s, height: r } = t, n = this._rasterizationCanvas, o = n.getContext("2d", { willReadFrequently: !0 });
    t !== n && (n.width = s, n.height = r, o.drawImage(t, 0, 0, s, r));
    const a = o.getImageData(0, 0, s, r), h = new Uint8Array(a.data), l = [e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255];
    for (let u = 0; u < h.length; u += 4) h[u] *= l[0], h[u + 1] *= l[1], h[u + 2] *= l[2], h[u + 3] *= l[3];
    const c = new ImageData(new Uint8ClampedArray(h.buffer), s, r);
    return o.putImageData(c, 0, 0), n;
  }
};
function xi(i) {
  const t = i.getFrame(0);
  if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) return t;
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const s = e.getContext("2d");
  return t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0), e;
}
let _h = class En {
  constructor(t = 0, e = 0, s = 0, r = 0) {
    this.x = t, this.y = e, this.width = s, this.height = r;
  }
  static fromExtent(t) {
    return new En(t.xmin, -t.ymax, t.xmax - t.xmin, t.ymax - t.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t) {
    this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.width = Math.max(this.width, t.width), this.height = Math.max(this.height, t.height);
  }
};
function gh(i) {
  return `rgb(${i.slice(0, 3).toString()})`;
}
function bi(i) {
  return `rgba(${i.slice(0, 3).toString()},${i[3]})`;
}
let Nn = class {
  constructor(t) {
    t && (this._textRasterizationCanvas = t);
  }
  rasterizeText(t, e) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d", { willReadFrequently: !0 });
    Cs(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: n, weight: o } = e.font;
    this._lineThroughWidthOffset = n && n === "line-through" ? 0.1 * this._lineHeight : 0;
    const a = e.backgroundColor != null || e.borderLine != null, h = a ? Eo : 0, l = this._computeTextWidth(r, e) + 2 * h, c = this._lineHeight * this._textLines.length + 2 * h;
    if (s.width = l + 2 * this._lineThroughWidthOffset, s.height = c, s.width === 0 || s.height === 0) return s.width = s.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0, canvas: s };
    this._renderedLineHeight = Math.round(this._lineHeight * e.pixelRatio), this._renderedHaloSize = Nt(e.halo.size) * e.pixelRatio, this._renderedWidth = l * e.pixelRatio, this._renderedHeight = c * e.pixelRatio, this._lineThroughWidthOffset *= e.pixelRatio;
    const u = e.color ?? [0, 0, 0, 0], f = e.halo && e.halo.color ? e.halo.color : [0, 0, 0, 0];
    this._fillStyle = bi(u), this._haloStyle = gh(f);
    const p = this._renderedLineHeight, m = this._renderedHaloSize;
    r.save(), r.clearRect(0, 0, s.width, s.height), Cs(r, e);
    const d = h * e.pixelRatio, _ = yh(r.textAlign, this._renderedWidth - 2 * d) + m + d, y = m + d, x = m > 0;
    let P = this._lineThroughWidthOffset, w = 0;
    if (a) {
      r.save();
      const Y = e.backgroundColor ?? [0, 0, 0, 0], j = e.borderLine?.color ?? [0, 0, 0, 0], vo = 2 * Nt(e.borderLine?.size ?? 0);
      r.fillStyle = bi(Y), r.strokeStyle = bi(j), r.lineWidth = vo, r.fillRect(0, 0, s.width, s.height), r.strokeRect(0, 0, s.width, s.height), r.restore();
    }
    x && this._renderHalo(r, _, y, P, w, e), w += y, P += _;
    for (const Y of this._textLines) x ? (r.globalCompositeOperation = "destination-out", r.fillStyle = "rgb(0, 0, 0)", r.fillText(Y, P, w), r.globalCompositeOperation = "source-over", r.fillStyle = this._fillStyle, r.fillText(Y, P, w)) : (r.fillStyle = this._fillStyle, r.fillText(Y, P, w)), n && n !== "none" && this._renderDecoration(r, P, w, n, o), w += p;
    r.restore();
    const C = this._renderedWidth + 2 * this._lineThroughWidthOffset, I = this._renderedHeight, X = r.getImageData(0, 0, C, I), F = new Uint8Array(X.data);
    if (e.premultiplyColors) {
      let Y;
      for (let j = 0; j < F.length; j += 4) Y = F[j + 3] / 255, F[j] = F[j] * Y, F[j + 1] = F[j + 1] * Y, F[j + 2] = F[j + 2] * Y;
    }
    let z, L;
    switch (e.horizontalAlignment) {
      case "left":
        z = -0.5;
        break;
      case "right":
        z = 0.5;
        break;
      default:
        z = 0;
    }
    switch (e.verticalAlignment) {
      case "bottom":
        L = -0.5;
        break;
      case "top":
        L = 0.5;
        break;
      case "baseline":
        L = -1 / 6;
        break;
      default:
        L = 0;
    }
    return { size: [C, I], image: new Uint32Array(F.buffer), sdf: !1, simplePattern: !1, anchorX: z, anchorY: L, canvas: s };
  }
  _renderHalo(t, e, s, r, n, o) {
    const a = this._renderedWidth, h = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = a, this._haloRasterizationCanvas.height = h;
    const l = this._haloRasterizationCanvas, c = l.getContext("2d");
    c.clearRect(0, 0, a, h), Cs(c, o);
    const { decoration: u, weight: f } = o.font;
    c.fillStyle = this._haloStyle, c.strokeStyle = this._haloStyle, c.lineJoin = "round", this._renderHaloNative(c, e, s, u, f), t.globalAlpha = this._parameters.halo.color[3], t.drawImage(l, 0, 0, a, h, r, n, a, h), t.globalAlpha = 1;
  }
  _renderHaloNative(t, e, s, r, n) {
    const o = this._renderedLineHeight, a = this._renderedHaloSize;
    for (const h of this._textLines) {
      const l = 2 * a, c = 5, u = 0.1;
      for (let f = 0; f < c; f++) {
        const p = (1 - (c - 1) * u + f * u) * l;
        t.lineWidth = p, t.strokeText(h, e, s), r && r !== "none" && this._renderDecoration(t, e, s, r, n, p);
      }
      s += o;
    }
  }
  computeTextSize(t, e) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const s = this._textRasterizationCanvas, r = s.getContext("2d");
    Cs(r, e), this._parameters = e, this._textLines = t.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const n = this._computeTextWidth(r, e), o = this._lineHeight * this._textLines.length;
    return s.width = n, s.height = o, [n * e.pixelRatio, o * e.pixelRatio];
  }
  _computeTextWidth(t, e) {
    let s = 0;
    for (const n of this._textLines) s = Math.max(s, t.measureText(n).width);
    const r = e.font;
    return (r.style === "italic" || r.style === "oblique" || typeof r.weight == "string" && (r.weight === "bold" || r.weight === "bolder") || typeof r.weight == "number" && r.weight > 600) && (s += 0.3 * t.measureText("w").width), s += 2 * Nt(this._parameters.halo.size), Math.round(s);
  }
  _computeLineHeight() {
    let t = 1.275 * this._parameters.size;
    const e = this._parameters.font.decoration;
    return e && e === "underline" && (t *= 1.3), Math.round(t + 2 * Nt(this._parameters.halo.size));
  }
  _renderDecoration(t, e, s, r, n, o) {
    const a = 0.9 * this._lineHeight, h = n === "bold" ? 0.06 : n === "bolder" ? 0.09 : 0.04;
    switch (t.textAlign) {
      case "center":
        e -= this._renderedWidth / 2;
        break;
      case "right":
        e -= this._renderedWidth;
    }
    const l = t.textBaseline;
    if (r === "underline") switch (l) {
      case "top":
        s += a;
        break;
      case "middle":
        s += a / 2;
    }
    else if (r === "line-through") switch (l) {
      case "top":
        s += a / 1.5;
        break;
      case "middle":
        s += a / 3;
    }
    const c = o ? 1.5 * o : Math.ceil(a * h);
    t.save(), t.beginPath(), t.strokeStyle = t.fillStyle, t.lineWidth = c, t.moveTo(e - this._lineThroughWidthOffset, s), t.lineTo(e + this._renderedWidth + 2 * this._lineThroughWidthOffset, s), t.stroke(), t.restore();
  }
};
function Cs(i, t) {
  const e = Math.max(t.size, 0.5), s = t.font, r = `${s.style} ${s.weight} ${Nt(e * t.pixelRatio).toFixed(1)}px ${s.family}, sans-serif`;
  let n;
  switch (i.font = r, i.textBaseline = "top", t.horizontalAlignment) {
    case "left":
    default:
      n = "left";
      break;
    case "right":
      n = "right";
      break;
    case "center":
      n = "center";
  }
  i.textAlign = n;
}
function yh(i, t) {
  return i === "center" ? 0.5 * t : i === "right" ? t : 0;
}
const xh = () => me.getLogger("esri.views.2d.engine.webgl.alignmentUtils");
var _t, ot;
function bh(i) {
  if (!i) return _t.Center;
  switch (i) {
    case "Left":
    case "left":
      return _t.Left;
    case "Right":
    case "right":
      return _t.Right;
    case "Justify":
      return xh().warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), _t.Center;
    case "Center":
    case "center":
      return _t.Center;
  }
}
function Ph(i) {
  if (!i) return ot.Center;
  switch (i) {
    case "Top":
    case "top":
      return ot.Top;
    case "Center":
    case "middle":
      return ot.Center;
    case "Baseline":
    case "baseline":
      return ot.Baseline;
    case "Bottom":
    case "bottom":
      return ot.Bottom;
  }
}
function tu(i) {
  switch (i) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return ["right", "bottom"];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return ["center", "bottom"];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return ["left", "bottom"];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return ["right", "middle"];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return ["center", "middle"];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return ["left", "middle"];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return ["right", "top"];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return ["center", "top"];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return ["left", "top"];
    default:
      return console.debug(`Found invalid placement type ${i}`), ["center", "middle"];
  }
}
function eu(i) {
  switch (i) {
    case _t.Right:
    case "right":
      return -1;
    case _t.Center:
    case "center":
      return 0;
    case _t.Left:
    case "left":
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${i}`), 0;
  }
}
function su(i) {
  switch (i) {
    case ot.Top:
    case "top":
      return 1;
    case ot.Center:
    case "middle":
      return 0;
    case ot.Bottom:
    case ot.Baseline:
    case "baseline":
    case "bottom":
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${i}`), 0;
  }
}
(function(i) {
  i[i.Left = -1] = "Left", i[i.Center = 0] = "Center", i[i.Right = 1] = "Right";
})(_t || (_t = {})), function(i) {
  i[i.Top = 1] = "Top", i[i.Center = 0] = "Center", i[i.Bottom = -1] = "Bottom", i[i.Baseline = 2] = "Baseline";
}(ot || (ot = {}));
const ir = 22, On = 4, wh = ir + On, Sh = ir - 6, Er = 3, Mh = Math.PI / 180, At = 8, vh = 1.5;
let Rn = class {
  constructor(t, e, s, r) {
    this._rotationT = ts(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const n = s.rect, o = new Float32Array(8);
    t *= r, e *= r;
    const a = s.code ? n.width * r : s.metrics.width, h = s.code ? n.height * r : s.metrics.height;
    this.width = a, this.height = h, o[0] = t, o[1] = e, o[2] = t + a, o[3] = e, o[4] = t, o[5] = e + h, o[6] = t + a, o[7] = e + h, this._data = o, this._setTextureCoords(n), this._scale = r, this._mosaic = s, this.x = t, this.y = e, this.maxOffset = Math.max(t + a, e + h);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(t) {
    this._angle = t, Qr(this._rotationT, -t), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t, width: e } = this._mosaic.metrics, s = e * this._scale, r = Math.abs(t) * this._scale, n = new Float32Array(8);
      n[0] = this.x, n[1] = this.y, n[2] = this.x + s, n[3] = this.y, n[4] = this.x, n[5] = this.y + r, n[6] = this.x + s, n[7] = this.y + r;
      const o = Mi(ts(), this._rotationT, this._transform);
      No(n, n, o);
      let a = 1 / 0, h = 1 / 0, l = 0, c = 0;
      for (let d = 0; d < 4; d++) {
        const _ = n[2 * d], y = n[2 * d + 1];
        a = Math.min(a, _), h = Math.min(h, y), l = Math.max(l, _), c = Math.max(c, y);
      }
      const u = l - a, f = c - h, p = a + u / 2, m = h + f / 2;
      this._bounds = new Te(p, m, u, f);
    }
    return this._bounds;
  }
  setTransform(t) {
    this._transform = t, this._offsets = null;
  }
  _setOffsets() {
    this._offsets || (this._offsets = { topLeft: [0, 0], topRight: [0, 0], bottomLeft: [0, 0], bottomRight: [0, 0] });
    const t = Mi(ts(), this._rotationT, this._transform);
    this._offsets.topLeft[0] = this._data[0], this._offsets.topLeft[1] = this._data[1], this._offsets.topRight[0] = this._data[2], this._offsets.topRight[1] = this._data[3], this._offsets.bottomLeft[0] = this._data[4], this._offsets.bottomLeft[1] = this._data[5], this._offsets.bottomRight[0] = this._data[6], this._offsets.bottomRight[1] = this._data[7], he(this._offsets.topLeft, this._offsets.topLeft, t), he(this._offsets.topRight, this._offsets.topRight, t), he(this._offsets.bottomLeft, this._offsets.bottomLeft, t), he(this._offsets.bottomRight, this._offsets.bottomRight, t);
  }
  _setTextureCoords({ x: t, y: e, width: s, height: r }) {
    this._texcoords = { topLeft: [t, e], topRight: [t + s, e], bottomLeft: [t, e + r], bottomRight: [t + s, e + r] };
  }
};
const Ch = (i, t) => ({ code: 0, page: 0, sdf: !0, rect: new xa(0, 0, 11, 8), textureBinding: t, metrics: { advance: 0, height: 4, width: i, left: 0, top: 0 } });
function Me(i, t) {
  return i.forEach((e) => he(e, e, t)), { topLeft: i[0], topRight: i[1], bottomLeft: i[2], bottomRight: i[3] };
}
let $h = class {
  constructor(t, e, s) {
    this._rotation = 0, this._decorate(t, e, s), this.glyphs = t, this.bounds = this._createBounds(t), this.isMultiline = e.length > 1, this._hasRotation = s.angle !== 0, this._transform = this._createGlyphTransform(this.bounds, s), this._borderLineSizePx = s.borderLineSizePx, (s.borderLineSizePx || s.hasBackground) && ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const r of t) r.setTransform(this._transform);
  }
  setRotation(t) {
    if (t === 0 && this._rotation === 0) return;
    this._rotation = t;
    const e = this._transform, s = Qr(ts(), t);
    Mi(e, s, e);
    for (const r of this.glyphs) r.setTransform(this._transform);
  }
  _decorate(t, e, s) {
    if (!s.decoration || s.decoration === "none" || !t.length) return;
    const r = s.scale, n = s.decoration === "underline" ? wh : Sh, o = t[0].textureBinding;
    for (const a of e) {
      const h = a.startX * r, l = a.startY * r, c = (a.width + a.glyphWidthEnd) * r;
      t.push(new Rn(h, l + n * r, Ch(c, o), 1));
    }
  }
  shapeBackground(t) {
    const e = this._borderLineSizePx || 0, s = (vh + e) / 2, r = this._borderLineSizePx ? s : 0, { xmin: n, ymin: o, xmax: a, ymax: h, x: l, y: c, width: u, height: f } = this.bounds, p = [n - At, o - At], m = [a + At, o - At], d = [n - At, h + At], _ = [a + At, h + At], y = Me([[p[0] - s, p[1] - s], [m[0] + s, m[1] - s], [p[0] + r, p[1] + r], [m[0] - r, m[1] + r]], t), x = Me([[d[0] + r, d[1] - r], [_[0] - r, _[1] - r], [d[0] - s, d[1] + s], [_[0] + s, _[1] + s]], t), P = Me([[p[0] - s, p[1] - s], [p[0] + r, p[1] + r], [d[0] - s, d[1] + s], [d[0] + r, d[1] - r]], t), w = Me([[m[0] - r, m[1] + r], [m[0] + s, m[1] - s], [_[0] - r, _[1] - r], [_[0] + s, _[1] + s]], t), C = { main: Me([p, m, d, _], t), top: y, bot: x, left: P, right: w };
    return [new Te(l, c, u + 2 * s, f + 2 * s), C];
  }
  get boundsT() {
    const t = this.bounds, e = ds(xr(), t.x, t.y);
    if (he(e, e, this._transform), this._hasRotation) {
      const s = Math.max(t.width, t.height);
      return new Te(e[0], e[1], s, s);
    }
    return new Te(e[0], e[1], t.width, t.height);
  }
  _createBounds(t) {
    let e = 1 / 0, s = 1 / 0, r = 0, n = 0;
    for (const h of t) e = Math.min(e, h.xTopLeft), s = Math.min(s, h.yTopLeft), r = Math.max(r, h.xBottomRight), n = Math.max(n, h.yBottomRight);
    const o = r - e, a = n - s;
    return new Te(e + o / 2, s + a / 2, o, a);
  }
  _createGlyphTransform(t, e) {
    const s = Mh * e.angle, r = ts(), n = xr();
    return ui(r, r, ds(n, e.xOffset, -e.yOffset)), e.useCIMAngleBehavior ? br(r, r, s) : (ui(r, r, ds(n, t.x, t.y)), br(r, r, s), ui(r, r, ds(n, -t.x, -t.y))), r;
  }
}, $s = class {
  constructor(t, e, s, r, n, o) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(e, s)), this.end = Math.max(0, Math.max(e, s)), this.end < t.length && (this.glyphWidthEnd = t[this.end].metrics.width), this.width = r, this.yMin = n, this.yMax = o;
  }
};
const $i = (i) => i === 10, Nr = (i) => i === 32;
function Ih(i, t, e) {
  const s = new Array(), r = 1 / e.scale, n = e.maxLineWidth * r, o = t ? i.length - 1 : 0, a = t ? -1 : i.length, h = t ? -1 : 1;
  let l = o, c = 0, u = 0, f = l, p = f, m = 0, d = 1 / 0, _ = 0;
  for (; l !== a; ) {
    const { code: x, metrics: P } = i[l], w = Math.abs(P.top);
    if ($i(x) || Nr(x) || (d = Math.min(d, w), _ = Math.max(_, w + P.height)), $i(x)) l !== o && (s.push(new $s(i, f, l - h, c, d === 1 / 0 ? 0 : d, _)), d = 1 / 0, _ = 0), c = 0, f = l + h, p = l + h, u = 0;
    else if (Nr(x)) p = l + h, u = 0, m = P.advance, c += P.advance;
    else if (c > n) {
      if (p !== f) {
        const C = p - 2 * h;
        c -= m, s.push(new $s(i, f, C, c - u, d, _)), d = 1 / 0, _ = 0, f = p, c = u;
      } else s.push(new $s(i, f, l - h, c, d, _)), d = 1 / 0, _ = 0, f = l, p = l, c = 0;
      c += P.advance, u += P.advance;
    } else c += P.advance, u += P.advance;
    l += h;
  }
  const y = new $s(i, f, l - h, c, d, _);
  return y.start >= 0 && y.end < i.length && s.push(y), s;
}
function kh(i, t) {
  let e = 0;
  for (let n = 0; n < i.length; n++) {
    const { width: o } = i[n];
    e = Math.max(o, e);
  }
  const s = t.decoration === "underline" ? On : 0, r = i[0].yMin;
  return { x: 0, y: r, height: i[i.length - 1].yMax + t.lineHeight * (i.length - 1) + s - r, width: e };
}
function Gn(i, t) {
  const e = t.scale, s = new Array(), { glyphs: r, isRightToLeft: n } = i, o = Ih(r, n, t), a = o.length ? kh(o, t) : { x: 0, y: 0, height: 0, width: 0 }, h = bh(t.horizontalAlignment), l = Ph(t.verticalAlignment), c = l === ot.Baseline ? 1 : 0, u = c ? 0 : l - 1, f = (1 - c) * -a.y + u * (a.height / 2) + (c ? 1 : 0) * -ir;
  for (let p = 0; p < o.length; p++) {
    const { start: m, end: d, width: _ } = o[p];
    let y = -1 * (h + 1) * (_ / 2) - Er;
    const x = p * t.lineHeight + f - Er;
    o[p].startX = y, o[p].startY = x;
    for (let P = m; P <= d; P++) {
      const w = r[P];
      if ($i(w.code)) continue;
      const C = new Rn(y + w.metrics.left, x - w.metrics.top, w, e);
      y += w.metrics.advance, s.push(C);
    }
  }
  return new $h(s, o, t);
}
const ou = 50;
function au(i) {
  if (!i) return null;
  const { xmin: t, ymin: e, xmax: s, ymax: r, spatialReference: n } = i;
  return new Oo({ rings: [[[t, e], [t, r], [s, r], [s, e], [t, e]]], spatialReference: n });
}
function Dn(i) {
  return gt(Math.round(Nt(i)));
}
function Vn(i) {
  const t = gt(fa), e = gt(ma);
  return Math.max(t, Math.min(i || e, e));
}
const qt = Math.PI / 180, Bn = 0.5, Th = () => me.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
let Xt = class ft {
  constructor(t) {
    this._t = t;
  }
  static createIdentity() {
    return new ft([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t = this._t;
    return new ft(t.slice());
  }
  transform(t) {
    const e = this._t;
    return [e[0] * t[0] + e[1] * t[1] + e[2], e[3] * t[0] + e[4] * t[1] + e[5]];
  }
  static createScale(t, e) {
    return new ft([t, 0, 0, 0, e, 0]);
  }
  scale(t, e) {
    const s = this._t;
    return s[0] *= t, s[1] *= t, s[2] *= t, s[3] *= e, s[4] *= e, s[5] *= e, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t, e) {
    return new ft([0, 0, t, 0, 0, e]);
  }
  translate(t, e) {
    const s = this._t;
    return s[2] += t, s[5] += e, this;
  }
  static createRotate(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return new ft([e, -s, 0, s, e, 0]);
  }
  rotate(t) {
    return ft.multiply(this, ft.createRotate(t), this);
  }
  angle() {
    const t = this._t[0], e = this._t[3], s = Math.sqrt(t * t + e * e);
    return [t / s, e / s];
  }
  static multiply(t, e, s) {
    const r = t._t, n = e._t, o = r[0] * n[0] + r[3] * n[1], a = r[1] * n[0] + r[4] * n[1], h = r[2] * n[0] + r[5] * n[1] + n[2], l = r[0] * n[3] + r[3] * n[4], c = r[1] * n[3] + r[4] * n[4], u = r[2] * n[3] + r[5] * n[4] + n[5], f = s._t;
    return f[0] = o, f[1] = a, f[2] = h, f[3] = l, f[4] = c, f[5] = u, s;
  }
  invert() {
    const t = this._t;
    let e = t[0] * t[4] - t[1] * t[3];
    if (e === 0) return new ft([0, 0, 0, 0, 0, 0]);
    e = 1 / e;
    const s = (t[1] * t[5] - t[2] * t[4]) * e, r = (t[2] * t[3] - t[0] * t[5]) * e, n = t[4] * e, o = -t[1] * e, a = -t[3] * e, h = t[0] * e;
    return new ft([n, o, s, a, h, r]);
  }
}, rr = class {
  constructor(t, e) {
    this._resourceManager = t, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new qo(_e, void 0, void 0, 100), this._earlyReturn = !1, this._mapRotation = 0, this._transfos.push(e || Xt.createIdentity()), this._sizeTransfos.push(e ? e.scaleRatio() : 1);
  }
  setTransform(t, e) {
    this._transfos = [t || Xt.createIdentity()], this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t) {
    this._geomUnitsPerPoint = t;
  }
  transformPt(t) {
    return this._transfos[this._transfos.length - 1].transform(t);
  }
  transformSize(t) {
    return t * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t) {
    return this._transfos[this._transfos.length - 1].invert().transform(t);
  }
  reverseTransformSize(t) {
    return t / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t) {
    return t / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t, e) {
    const s = e ? t.scaleRatio() : 1;
    Xt.multiply(t, this.back(), t), this._transfos.push(t), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * s);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t, e, s) {
    if (t) switch (t.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this.drawMultiLayerSymbol(t, e);
        break;
      case "CIMTextSymbol":
        this.drawTextSymbol(t, e, s);
    }
  }
  drawMultiLayerSymbol(t, e) {
    if (!t || !e) return;
    const s = t.symbolLayers;
    if (!s) return;
    const r = t.effects;
    if (r && r.length > 0) {
      const n = this.executeEffects(r, e);
      if (n) {
        let o = n.next();
        for (; o; ) this.drawSymbolLayers(s, o.asJSON()), o = n.next();
      }
    } else this.drawSymbolLayers(s, e);
  }
  executeEffects(t, e) {
    const s = this._resourceManager.geometryEngine;
    let r = new va(O.fromJSONCIM(e));
    for (const n of t) {
      const o = ah(n);
      o && (r = o.execute(r, n, this.geomUnitsPerPoint(), null, s));
    }
    return r;
  }
  drawSymbolLayers(t, e) {
    let s = t.length;
    for (; s--; ) {
      const r = t[s];
      if (!r || r.enable === !1) continue;
      const n = r.effects;
      if (n && n.length > 0) {
        const o = this.executeEffects(n, e);
        if (o) {
          let a = null;
          for (; (a = o.next()) && (this.drawSymbolLayer(r, a.asJSON()), !this._earlyReturn); ) ;
        }
      } else this.drawSymbolLayer(r, e);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t, e) {
    switch (t.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e, t.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e, t);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e, t);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e, t);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e, t.color, t.width, t.capStyle, t.joinStyle, t.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e, t);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e, t);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t, e);
    }
  }
  drawHatchFill(t, e) {
    const s = Ah(e, t, this.geomUnitsPerPoint());
    s && (this.pushClipPath(t), this.drawMultiLayerSymbol(e.lineSymbol, s), this.popClipPath());
  }
  drawPictureFill(t, e) {
  }
  drawGradientFill(t, e) {
  }
  drawPictureStroke(t, e) {
  }
  drawGradientStroke(t, e) {
  }
  drawMarkerLayer(t, e) {
    const s = t.markerPlacement;
    if (s) {
      const r = hh(s);
      if (r) {
        const n = s.type === "CIMMarkerPlacementInsidePolygon" || s.type === "CIMMarkerPlacementPolygonCenter" && s.clipAtBoundary;
        n && this.pushClipPath(e);
        const o = r.execute(O.fromJSONCIM(e), s, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (o) {
          let a = null;
          for (; (a = o.next()) && (this.drawMarker(t, a), !this._earlyReturn); ) ;
        }
        n && this.popClipPath();
      }
    } else {
      const r = this._placementPool.acquire();
      if (Si(e)) r.tx = e.x, r.ty = e.y, this.drawMarker(t, r);
      else if (nt(e)) {
        const n = Wo(e);
        n && ([r.tx, r.ty] = n, this.drawMarker(t, r));
      } else for (const n of e.points) if (r.tx = n[0], r.ty = n[1], this.drawMarker(t, r), this._earlyReturn) break;
      this._placementPool.release(r);
    }
  }
  drawMarker(t, e) {
    switch (t.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t, e);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t, e);
    }
  }
  drawPictureMarker(t, e) {
    if (!t) return;
    const s = this._resourceManager.getResource(t.url), r = v(t.size, kt.CIMPictureMarker.size);
    if (s == null || r <= 0) return;
    const n = s.width, o = s.height;
    if (!n || !o) return;
    const a = n / o, h = v(t.scaleX, 1), l = Xt.createIdentity(), c = t.anchorPoint;
    if (c) {
      let _ = c.x, y = c.y;
      t.anchorPointUnits !== "Absolute" && (_ *= r * a * h, y *= r), l.translate(-_, -y);
    }
    let u = v(t.rotation);
    t.rotateClockwise && (u = -u), this._mapRotation && (u += this._mapRotation), u && l.rotate(u * qt);
    let f = v(t.offsetX), p = v(t.offsetY);
    if (f || p) {
      if (this._mapRotation) {
        const _ = qt * this._mapRotation, y = Math.cos(_), x = Math.sin(_), P = f * x + p * y;
        f = f * y - p * x, p = P;
      }
      l.translate(f, p);
    }
    const m = this.geomUnitsPerPoint();
    m !== 1 && l.scale(m, m);
    const d = e.getAngle();
    d && l.rotate(d), l.translate(e.tx, e.ty), this.push(l, !1), this.drawImage(t, r), this.pop();
  }
  drawVectorMarker(t, e) {
    if (!t) return;
    const s = t.markerGraphics;
    if (!s) return;
    const r = v(t.size, kt.CIMVectorMarker.size), n = t.frame, o = n ? n.ymax - n.ymin : 0, a = r && o ? r / o : 1, h = Xt.createIdentity();
    n && h.translate(0.5 * -(n.xmax + n.xmin), 0.5 * -(n.ymax + n.ymin));
    const l = t.anchorPoint;
    if (l) {
      let d = l.x, _ = l.y;
      t.anchorPointUnits !== "Absolute" ? n && (d *= n.xmax - n.xmin, _ *= n.ymax - n.ymin) : (d /= a, _ /= a), h.translate(-d, -_);
    }
    a !== 1 && h.scale(a, a);
    let c = v(t.rotation);
    t.rotateClockwise && (c = -c), this._mapRotation && (c += this._mapRotation), c && h.rotate(c * qt);
    let u = v(t.offsetX), f = v(t.offsetY);
    if (u || f) {
      if (this._mapRotation) {
        const d = qt * this._mapRotation, _ = Math.cos(d), y = Math.sin(d), x = u * y + f * _;
        u = u * _ - f * y, f = x;
      }
      h.translate(u, f);
    }
    const p = this.geomUnitsPerPoint();
    p !== 1 && h.scale(p, p);
    const m = e.getAngle();
    m && h.rotate(m), h.translate(e.tx, e.ty), this.push(h, t.scaleSymbolsProportionally);
    for (const d of s) {
      d?.symbol && d.geometry || Th().error("Invalid marker graphic", d);
      let _ = d.textString;
      if (typeof _ == "number" && (_ = _.toString()), this.drawSymbol(d.symbol, d.geometry, _), this._earlyReturn) break;
    }
    this.pop();
  }
  drawTextSymbol(t, e, s) {
    if (!t || !Si(e) || v(t.height, kt.CIMTextSymbol.height) <= 0) return;
    const r = Xt.createIdentity();
    let n = v(t.angle);
    n = -n, n && r.rotate(n * qt);
    const o = v(t.offsetX), a = v(t.offsetY);
    (o || a) && r.translate(o, a);
    const h = this.geomUnitsPerPoint();
    h !== 1 && r.scale(h, h), r.translate(e.x, e.y), this.push(r, !1), this.drawText(t, s), this.pop();
  }
}, zh = class extends rr {
  constructor(t, e) {
    super(t, e), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new _h(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return Ro(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t) {
    if (t && !(this._clipCount > 0)) if (nt(t)) this._processPath(t.rings, 0);
    else if (mt(t)) this._processPath(t.paths, 0);
    else if (ht(t)) {
      const e = Wt(t);
      e && this._processPath(e.rings, 0);
    } else console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t, e, s) {
    if (!t || this._clipCount > 0 || s == null || s <= 0) return;
    const r = Math.max(0.5 * this.transformSize(v(s, kt.CIMSolidStroke.width)), 0.5 * Bn);
    if (nt(t)) this._processPath(t.rings, r);
    else if (mt(t)) this._processPath(t.paths, r);
    else if (ht(t)) {
      const n = Wt(t);
      n && this._processPath(n.rings, r);
    } else console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t, e) {
    nt(e) && t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._processPath(e.rings, 0) : super.drawMarkerLayer(t, e);
  }
  drawHatchFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureFill(t, e) {
    this.drawSolidFill(t);
  }
  drawGradientFill(t, e) {
    this.drawSolidFill(t);
  }
  drawPictureStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  drawGradientStroke(t, e) {
    this.drawSolidStroke(t, null, e.width);
  }
  pushClipPath(t) {
    this.drawSolidFill(t), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t, e) {
    const { url: s } = t, r = v(t.scaleX, 1);
    let n = r * e, o = e;
    const a = this._resourceManager.getResource(s);
    if (a != null) {
      const h = a.height / a.width;
      n = r * (e ? h > 1 ? e : e / h : a.width), o = e ? h > 1 ? e * h : e : a.height;
    }
    this._merge(this.transformPt([-n / 2, -o / 2]), 0), this._merge(this.transformPt([-n / 2, o / 2]), 0), this._merge(this.transformPt([n / 2, -o / 2]), 0), this._merge(this.transformPt([n / 2, o / 2]), 0);
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new Nn());
    const s = Xn(t);
    let [r, n] = this._textRasterizer.computeTextSize(e, s);
    r = gt(r), n = gt(n);
    let o = 0;
    switch (t.horizontalAlignment) {
      case "Left":
        o = r / 2;
        break;
      case "Right":
        o = -r / 2;
    }
    let a = 0;
    switch (t.verticalAlignment) {
      case "Bottom":
        a = n / 2;
        break;
      case "Top":
        a = -n / 2;
        break;
      case "Baseline":
        a = n / 6;
    }
    this._merge(this.transformPt([-r / 2 + o, -n / 2 + a]), 0), this._merge(this.transformPt([-r / 2 + o, n / 2 + a]), 0), this._merge(this.transformPt([r / 2 + o, -n / 2 + a]), 0), this._merge(this.transformPt([r / 2 + o, n / 2 + a]), 0);
  }
  _processPath(t, e) {
    if (t) for (const s of t) {
      const r = s ? s.length : 0;
      if (r > 1) {
        this._merge(this.transformPt(s[0]), e);
        for (let n = 1; n < r; n++) this._merge(this.transformPt(s[n]), e);
      }
    }
  }
  _merge(t, e) {
    t[0] - e < this._xmin && (this._xmin = t[0] - e), t[0] + e > this._xmax && (this._xmax = t[0] + e), t[1] - e < this._ymin && (this._ymin = t[1] - e), t[1] + e > this._ymax && (this._ymax = t[1] + e);
  }
}, cu = class extends rr {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null;
  }
  hitTest(t, e, s, r, n, o) {
    const a = o * Nt(1);
    this.setTransform(), this.setGeomUnitsPerPoint(a), this._searchPoint = [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2], this._searchDistPoint = (t[2] - t[0]) / 2 / a, this._textInfo = r;
    const h = e && (e.type === "CIMPointSymbol" && e.angleAlignment !== "Map" || e.type === "CIMTextSymbol");
    if (this._mapRotation = h ? n : 0, !si("esri-mobile")) {
      const l = gt(_a * window.devicePixelRatio), c = gt(ga);
      !((e?.type === "CIMLineSymbol" || e?.type === "CIMPolygonSymbol") && e.symbolLayers?.some(Go)) && e?.type !== "CIMMeshSymbol" && (Do(e) ?? 0) < c && (this._searchDistPoint = l);
    }
    return this._earlyReturn = !1, this.drawSymbol(e, s), this._earlyReturn;
  }
  drawSolidFill(t, e) {
    this._hitTestFill(t);
  }
  drawHatchFill(t, e) {
    this._hitTestFill(t);
  }
  drawPictureFill(t, e) {
    this._hitTestFill(t);
  }
  drawGradientFill(t, e) {
    this._hitTestFill(t);
  }
  drawSolidStroke(t, e, s, r, n, o) {
    this._hitTestStroke(t, s);
  }
  drawPictureStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawGradientStroke(t, e) {
    this._hitTestStroke(t, e.width);
  }
  drawMarkerLayer(t, e) {
    t.markerPlacement && (t.markerPlacement.type === "CIMMarkerPlacementInsidePolygon" || t.markerPlacement.type === "CIMMarkerPlacementPolygonCenter" && t.markerPlacement.clipAtBoundary) ? this._hitTestFill(e) : super.drawMarkerLayer(t, e);
  }
  pushClipPath(t) {
  }
  popClipPath() {
  }
  drawImage(t, e) {
    const { url: s } = t, r = v(t.scaleX, 1), n = this._resourceManager.getResource(s);
    if (n == null || n.height === 0 || e === 0) return;
    const o = e * this.geomUnitsPerPoint(), a = o * r * (n.width / n.height), h = this.reverseTransformPt(this._searchPoint), l = this._searchDistPoint;
    Math.abs(h[0]) < a / 2 + l && Math.abs(h[1]) < o / 2 + l && (this._earlyReturn = !0);
  }
  drawText(t, e) {
    const s = this._textInfo;
    if (!s) return;
    const r = s.get(t);
    if (!r || !r.glyphMosaicItems.glyphs.length) return;
    const n = Dn(v(t.height, kt.CIMTextSymbol.height)), { lineGapType: o, lineGap: a } = t, h = o ? Hn(o, v(a), n) : 0, l = t.callout?.type === "CIMBackgroundCallout", c = Gn(r.glyphMosaicItems, { scale: n / nn, angle: 0, xOffset: 0, yOffset: 0, horizontalAlignment: t.horizontalAlignment, verticalAlignment: t.verticalAlignment, maxLineWidth: Vn(t.lineWidth), lineHeight: on * Math.max(0.25, Math.min(h || 1, 4)), decoration: t.font.decoration || "none", useCIMAngleBehavior: !0, hasBackground: l }), u = this.reverseTransformPt(this._searchPoint), f = u[0], p = u[1];
    for (const m of c.glyphs) if (f > m.xTopLeft && f < m.xBottomRight && p > -m.yBottomRight && p < -m.yTopLeft) {
      this._earlyReturn = !0;
      break;
    }
  }
  _hitTestFill(t) {
    let e = null;
    if (ht(t)) {
      const r = t;
      e = [[[r.xmin, r.ymin], [r.xmin, r.ymax], [r.xmax, r.ymax], [r.xmax, r.ymin], [r.xmin, r.ymin]]];
    } else if (nt(t)) e = t.rings;
    else {
      if (!mt(t)) return;
      e = t.paths;
    }
    const s = this.reverseTransformPt(this._searchPoint);
    Fh(s, e) && (this._earlyReturn = !0), !this._earlyReturn && Or(s, e, this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = !0);
  }
  _hitTestStroke(t, e) {
    let s = null;
    if (ht(t)) {
      const r = t;
      s = [[[r.xmin, r.ymin], [r.xmin, r.ymax], [r.xmax, r.ymax], [r.xmax, r.ymin], [r.xmin, r.ymin]]];
    } else if (nt(t)) s = t.rings;
    else {
      if (!mt(t)) return;
      s = t.paths;
    }
    Or(this.reverseTransformPt(this._searchPoint), s, v(e, kt.CIMSolidStroke.width) * this.geomUnitsPerPoint() / 2 + this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = !0);
  }
}, Lh = class extends rr {
  constructor(t, e, s, r) {
    super(e, s), this._applyAdditionalRenderProps = r, this._colorSubstitutionHelper = new mh(), this._ctx = t;
  }
  drawSolidFill(t, e) {
    if (!t) return;
    if (nt(t)) this._buildPath(t.rings, !0);
    else if (mt(t)) this._buildPath(t.paths, !0);
    else if (ht(t)) this._buildPath(Wt(t).rings, !0);
    else {
      if (!As(t)) return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const s = this._ctx;
    s.fillStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", s.fill("evenodd");
  }
  drawSolidStroke(t, e, s, r, n, o) {
    if (!t || !e || s === 0) return;
    if (nt(t)) this._buildPath(t.rings, !0);
    else if (mt(t)) this._buildPath(t.paths, !1);
    else {
      if (!ht(t)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(Wt(t).rings, !0);
    }
    const a = this._ctx;
    a.strokeStyle = typeof e == "string" ? e : "rgba(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + "," + (e[3] ?? 255) / 255 + ")", a.lineWidth = Math.max(this.transformSize(s), Bn), this._setCapStyle(r), this._setJoinStyle(n), a.miterLimit = o, a.stroke();
  }
  pushClipPath(t) {
    if (this._ctx.save(), nt(t)) this._buildPath(t.rings, !0);
    else if (mt(t)) this._buildPath(t.paths, !0);
    else {
      if (!ht(t)) return;
      this._buildPath(Wt(t).rings, !0);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t, e) {
    const { colorSubstitutions: s, url: r, tintColor: n } = t, o = v(t.scaleX, 1), a = this._resourceManager.getResource(r);
    if (a == null) return;
    let h = e * (a.width / a.height), l = e;
    e || (h = a.width, l = a.height);
    const c = se(r) || "src" in a && se(a.src);
    let u = "getFrame" in a ? xi(a) : a;
    s && (u = this._colorSubstitutionHelper.applyColorSubstituition(u, s)), this._applyAdditionalRenderProps && !c && n && (u = this._colorSubstitutionHelper.tintImageData(u, n));
    const f = this.transformPt([0, 0]), [p, m] = this.getTransformAngle(), d = this.transformSize(1), _ = this._ctx;
    _.save(), _.setTransform({ m11: o * d * p, m12: o * d * m, m21: -d * m, m22: d * p, m41: f[0], m42: f[1] }), _.drawImage(u, -h / 2, -l / 2, h, l), _.restore();
  }
  drawText(t, e) {
    if (!e || e.length === 0) return;
    this._textRasterizer || (this._textRasterizer = new Nn());
    const s = Xn(t);
    s.size *= this.transformSize(gt(1));
    const r = this._textRasterizer.rasterizeText(e, s);
    if (!r) return;
    const { size: n, anchorX: o, anchorY: a, canvas: h } = r, l = n[0] * (o + 0.5), c = n[1] * (a - 0.5), u = this._ctx, f = this.transformPt([0, 0]), [p, m] = this.getTransformAngle(), d = 1;
    u.save(), u.setTransform({ m11: d * p, m12: d * m, m21: -d * m, m22: d * p, m41: f[0] - d * l, m42: f[1] + d * c }), u.drawImage(h, 0, 0), u.restore();
  }
  drawPictureFill(t, e) {
    if (!t) return;
    let { colorSubstitutions: s, height: r, offsetX: n, offsetY: o, rotation: a, scaleX: h, tintColor: l, url: c } = e;
    const u = this._resourceManager.getResource(c);
    if (u == null) return;
    if (nt(t)) this._buildPath(t.rings, !0);
    else if (mt(t)) this._buildPath(t.paths, !0);
    else if (ht(t)) this._buildPath(Wt(t).rings, !0);
    else {
      if (!As(t)) return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const f = this._ctx, p = se(c) || "src" in u && se(u.src);
    let m, d = "getFrame" in u ? xi(u) : u;
    if (s && (d = this._colorSubstitutionHelper.applyColorSubstituition(d, s)), this._applyAdditionalRenderProps) {
      p || l && (d = this._colorSubstitutionHelper.tintImageData(d, l)), m = f.createPattern(d, "repeat");
      const _ = this.transformSize(1);
      a || (a = 0), n ? n *= _ : n = 0, o ? o *= _ : o = 0, r && (r *= _);
      const y = r ? r / u.height : 1, x = h && r ? h * r / u.width : 1;
      if (a !== 0 || y !== 1 || x !== 1 || n !== 0 || o !== 0) {
        const P = new DOMMatrix();
        P.rotateSelf(0, 0, -a).translateSelf(n, o).scaleSelf(x, y, 1), m.setTransform(P);
      }
    } else m = f.createPattern(d, "repeat");
    f.save(), f.fillStyle = m, f.fill("evenodd"), f.restore();
  }
  drawPictureStroke(t, e) {
    if (!t) return;
    let { colorSubstitutions: s, capStyle: r, joinStyle: n, miterLimit: o, tintColor: a, url: h, width: l } = e;
    const c = this._resourceManager.getResource(h);
    if (c == null) return;
    let u;
    if (nt(t)) u = t.rings;
    else if (mt(t)) u = t.paths;
    else {
      if (!ht(t)) return As(t) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      u = Wt(t).rings;
    }
    l || (l = c.width);
    const f = se(h) || "src" in c && se(c.src);
    let p = "getFrame" in c ? xi(c) : c;
    s && (p = this._colorSubstitutionHelper.applyColorSubstituition(p, s)), this._applyAdditionalRenderProps && (f || a && (p = this._colorSubstitutionHelper.tintImageData(p, a)));
    const m = Math.max(this.transformSize(Nt(l)), 0.5), d = m / p.width, _ = this._ctx, y = _.createPattern(p, "repeat-y");
    let x, P;
    _.save(), this._setCapStyle(r), this._setJoinStyle(n), o !== void 0 && (_.miterLimit = o), _.lineWidth = m;
    for (let w of u) if (w = ce(w), Oh(w), w && !(w.length <= 1)) {
      x = this.transformPt(w[0]);
      for (let C = 1; C < w.length; C++) {
        P = this.transformPt(w[C]);
        const I = Eh(x, P), X = new DOMMatrix();
        X.translateSelf(0, x[1] - m / 2).scaleSelf(d, d, 1).rotateSelf(0, 0, 90 - I), y.setTransform(X), _.strokeStyle = y, _.beginPath(), _.moveTo(x[0], x[1]), _.lineTo(P[0], P[1]), _.stroke(), x = P;
      }
    }
    _.restore();
  }
  _buildPath(t, e) {
    const s = this._ctx;
    if (s.beginPath(), t) for (const r of t) {
      const n = r ? r.length : 0;
      if (n > 1) {
        let o = this.transformPt(r[0]);
        s.moveTo(o[0], o[1]);
        for (let a = 1; a < n; a++) o = this.transformPt(r[a]), s.lineTo(o[0], o[1]);
        e && s.closePath();
      }
    }
  }
  _setCapStyle(t) {
    switch (t) {
      case lt.Butt:
        this._ctx.lineCap = "butt";
        break;
      case lt.Round:
        this._ctx.lineCap = "round";
        break;
      case lt.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t) {
    switch (t) {
      case It.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case It.Round:
        this._ctx.lineJoin = "round";
        break;
      case It.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
};
function Ah(i, t, e) {
  let s = v(i.separation, kt.CIMHatchFill.separation) * e, r = v(i.rotation);
  if (s === 0) return null;
  s < 0 && (s = -s);
  let n = 0;
  const o = 0.5 * s;
  for (; n > o; ) n -= s;
  for (; n < -o; ) n += s;
  const a = pe();
  sn(a, t), a[0] -= o, a[1] -= o, a[2] += o, a[3] += o;
  const h = [[a[0], a[1]], [a[0], a[3]], [a[2], a[3]], [a[2], a[1]]];
  for (; r > 180; ) r -= 180;
  for (; r < 0; ) r += 180;
  const l = Math.cos(r * qt), c = Math.sin(r * qt), u = -s * c, f = s * l;
  let p, m, d, _;
  n = v(i.offsetX) * e * c - v(i.offsetY) * e * l, p = d = Number.MAX_VALUE, m = _ = -Number.MAX_VALUE;
  for (const X of h) {
    const F = X[0], z = X[1], L = l * F + c * z, Y = -c * F + l * z;
    p = Math.min(p, L), d = Math.min(d, Y), m = Math.max(m, L), _ = Math.max(_, Y);
  }
  d = Math.floor(d / s) * s;
  let y = l * p - c * d - u * n / s, x = c * p + l * d - f * n / s, P = l * m - c * d - u * n / s, w = c * m + l * d - f * n / s;
  const C = 1 + Math.round((_ - d) / s), I = [];
  for (let X = 0; X < C; X++) y += u, x += f, P += u, w += f, I.push([[y, x], [P, w]]);
  return { paths: I };
}
function Fh(i, t) {
  let e = 0;
  for (const s of t) {
    const r = s.length;
    for (let n = 1; n < r; n++) {
      const o = s[n - 1], a = s[n];
      o[1] > i[1] != a[1] > i[1] && ((a[0] - o[0]) * (i[1] - o[1]) - (a[1] - o[1]) * (i[0] - o[0]) > 0 ? e++ : e--);
    }
  }
  return e !== 0;
}
function Or(i, t, e) {
  for (const s of t) {
    const r = s.length;
    for (let n = 1; n < r; n++) {
      const o = s[n - 1], a = s[n];
      let h = (a[0] - o[0]) * (a[0] - o[0]) + (a[1] - o[1]) * (a[1] - o[1]);
      if (h === 0) continue;
      h = Math.sqrt(h);
      const l = ((a[0] - o[0]) * (i[1] - o[1]) - (a[1] - o[1]) * (i[0] - o[0])) / h;
      if (Math.abs(l) < e) {
        const c = ((a[0] - o[0]) * (i[0] - o[0]) + (a[1] - o[1]) * (i[1] - o[1])) / h;
        if (c > -e && c < h + e) return !0;
      }
    }
  }
  return !1;
}
function Eh(i, t) {
  const e = t[0] - i[0], s = t[1] - i[1];
  return 180 / Math.PI * Math.atan2(s, e);
}
const Wt = (i) => i ? { spatialReference: i.spatialReference, rings: [[[i.xmin, i.ymin], [i.xmin, i.ymax], [i.xmax, i.ymax], [i.xmax, i.ymin], [i.xmin, i.ymin]]] } : null, Hn = (i, t, e) => {
  switch (i) {
    case "ExtraLeading":
      return 1 + t / e;
    case "Multiple":
      return t;
    case "Exact":
      return t / e;
  }
};
function Xn(i, t = 1) {
  const e = tn(i), s = en(i.fontStyleName), r = i.fontFamilyName ?? sr, { weight: n, style: o } = s, a = t * (i.height || 5), h = Vo(i.horizontalAlignment), l = Bo(i.verticalAlignment), c = pi(i), u = pi(i.haloSymbol), f = u != null ? t * (i.haloSize ?? 0) : 0, p = i.callout?.type === "CIMBackgroundCallout" ? i.callout.backgroundSymbol : null, m = pi(p), d = Ho(p), _ = Xo(p);
  return { color: c, size: a, horizontalAlignment: h, verticalAlignment: l, font: { family: r, style: Uo(o), weight: Yo(n), decoration: e }, halo: { size: f || 0, color: u, style: o }, backgroundColor: m, borderLine: d != null && _ != null ? { size: d, color: _ } : null, pixelRatio: 1, premultiplyColors: !0 };
}
const Nh = 1e-4;
function Oh(i) {
  let t, e, s, r, n, o = i[0], a = 1;
  for (; a < i.length; ) t = i[a][0] - o[0], e = i[a][1] - o[1], r = t !== 0 ? e / t : Math.PI / 2, s !== void 0 && r - s <= Nh ? (i.splice(a - 1, 1), o = n) : (n = o, o = i[a], a++), s = r;
}
const Un = Math.PI, Rh = Un / 2, Rr = Math.PI / 180, dt = 96 / 72, Gh = 1.4142135623730951, Gr = 4, Ks = () => me.getLogger("esri.symbols.cim.CIMSymbolHelper");
function du(i) {
  let t;
  switch (i.type) {
    case "cim":
      return i.data;
    case "web-style":
      return i;
    case "simple-marker": {
      const e = ie.fromSimpleMarker(i);
      if (!e) throw new Error("InternalError: Cannot convert symbol to CIM");
      t = e;
      break;
    }
    case "picture-marker":
      t = ie.fromPictureMarker(i);
      break;
    case "simple-line":
      t = ie.fromSimpleLineSymbol(i);
      break;
    case "simple-fill":
      t = ie.fromSimpleFillSymbol(i);
      break;
    case "picture-fill":
      t = ie.fromPictureFillSymbol(i);
      break;
    case "text":
      t = ie.fromTextSymbol(i);
  }
  return { type: "CIMSymbolReference", symbol: t };
}
function Ns(i, t, e) {
  switch (t.type) {
    case "CIMSymbolReference":
      return Ns(i, t.symbol, e);
    case "CIMPointSymbol":
      e == null && (e = { x: 0, y: 0 }), i.drawSymbol(t, e);
      break;
    case "CIMLineSymbol":
      e == null && (e = { paths: [[[0, 0], [10, 0]]] }), i.drawSymbol(t, e);
      break;
    case "CIMPolygonSymbol":
      e == null && (e = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), i.drawSymbol(t, e);
      break;
    case "CIMTextSymbol": {
      const s = { x: 0, y: 0 };
      i.drawSymbol(t, s);
      break;
    }
    case "CIMVectorMarker": {
      const s = new _e();
      i.drawMarker(t, s);
      break;
    }
  }
  return i.envelope();
}
function Dh(i) {
  if (!i) return 0;
  switch (i.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(i.offset);
    default:
      return 0;
  }
}
function Vh(i) {
  if (!i) return 0;
  switch (i.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * i.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(i.size);
    case "CIMGeometricEffectControlMeasureLine":
      return 500;
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(i.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * i.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(v(i.offsetX)), Math.abs(v(i.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(i.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(i.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(i.fromWidth), Math.abs(i.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(i.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(i.width);
  }
}
function Dr(i) {
  if (!i) return 0;
  let t = 0;
  for (const e of i) t += Vh(e);
  return t;
}
let fu = class {
  static getSymbolInflateSize(t, e, s, r, n) {
    return t || (t = [0, 0, 0, 0]), e ? this._getInflateSize(t, e, s, r, n) : t;
  }
  static safeSize(t) {
    const e = Math.max(Math.abs(t[0]), Math.abs(t[2])), s = Math.max(Math.abs(t[1]), Math.abs(t[3]));
    return Math.sqrt(e * e + s * s);
  }
  static _vectorMarkerBounds(t, e, s, r) {
    let n = !0;
    const o = pe();
    if (e?.markerGraphics) for (const a of e.markerGraphics) {
      const h = [0, 0, 0, 0];
      a.geometry && (sn(o, a.geometry), h[0] = 0, h[1] = 0, h[2] = 0, h[3] = 0, this.getSymbolInflateSize(h, a.symbol, s, 0, r), o[0] += h[0], o[1] += h[1], o[2] += h[2], o[3] += h[3], n ? (t[0] = o[0], t[1] = o[1], t[2] = o[2], t[3] = o[3], n = !1) : (t[0] = Math.min(t[0], o[0]), t[1] = Math.min(t[1], o[1]), t[2] = Math.max(t[2], o[2]), t[3] = Math.max(t[3], o[3])));
    }
    return t;
  }
  static _getInflateSize(t, e, s, r, n) {
    if (qh(e)) {
      const o = this._getLayersInflateSize(t, e.symbolLayers, s, r, n), a = Dr(e.effects);
      return a > 0 && (o[0] -= a, o[1] -= a, o[2] += a, o[3] += a), o;
    }
    return this._getTextInflatedSize(t, e, n);
  }
  static _getLayersInflateSize(t, e, s, r, n) {
    let o = !0;
    if (!e) return t;
    for (const a of e) {
      if (!a) continue;
      let h = [0, 0, 0, 0];
      switch (a.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const c = a;
          let u = c.width;
          u != null && (c.capStyle === lt.Square || c.joinStyle === It.Miter ? u /= Gh : u /= 2, h[0] = -u, h[1] = -u, h[2] = u, h[3] = u);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const c = a;
          if (a.type === "CIMVectorMarker") {
            const d = a;
            if (h = this._vectorMarkerBounds(h, d, s, n), d.frame) {
              const _ = (d.frame.xmin + d.frame.xmax) / 2, y = (d.frame.ymin + d.frame.ymax) / 2;
              if (h[0] -= _, h[1] -= y, h[2] -= _, h[3] -= y, d.size != null) {
                const x = d.size / (d.frame.ymax - d.frame.ymin);
                h[0] *= x, h[1] *= x, h[2] *= x, h[3] *= x;
              }
            }
          } else if (a.type === "CIMPictureMarker") {
            const d = a, _ = s.getResource(d.url);
            let y = 1;
            if (_ != null && _.height && (y = _.width / _.height), c.size != null) {
              const x = c.size / 2, P = c.size * y * d.scaleX / 2;
              h = [-P, -x, P, x];
            }
          } else if (c.size != null) {
            const d = c.size / 2;
            h = [-d, -d, d, d];
          }
          if (c.anchorPoint) {
            let d, _;
            c.anchorPointUnits === "Absolute" ? (d = c.anchorPoint.x, _ = c.anchorPoint.y) : (d = c.anchorPoint.x * (h[2] - h[0]), _ = c.anchorPoint.y * (h[3] - h[1]));
            const y = 1.25 * Math.sqrt(d * d + _ * _);
            h[0] -= y, h[1] -= y, h[2] += y, h[3] += y;
          }
          let u = v(c.rotation);
          if (c.rotateClockwise && (u = -u), r && (u -= r), u) {
            const d = Rr * u, _ = Math.cos(d), y = Math.sin(d), x = pe([ms, ms, -ms, -ms]);
            fs(x, [h[0] * _ - h[1] * y, h[0] * y + h[1] * _]), fs(x, [h[0] * _ - h[3] * y, h[0] * y + h[3] * _]), fs(x, [h[2] * _ - h[1] * y, h[2] * y + h[1] * _]), fs(x, [h[2] * _ - h[3] * y, h[2] * y + h[3] * _]), h = x;
          }
          let f = v(c.offsetX), p = v(c.offsetY);
          if (r) {
            const d = Rr * r, _ = Math.cos(d), y = Math.sin(d), x = f * y + p * _;
            f = f * _ - p * y, p = x;
          }
          h[0] += f, h[1] += p, h[2] += f, h[3] += p;
          const m = Dh(c.markerPlacement);
          m > 0 && (h[0] -= m, h[1] -= m, h[2] += m, h[3] += m);
          break;
        }
      }
      const l = Dr(a.effects);
      l > 0 && (h[0] -= l, h[1] -= l, h[2] += l, h[3] += l), o ? (t[0] = h[0], t[1] = h[1], t[2] = h[2], t[3] = h[3], o = !1) : (t[0] = Math.min(t[0], h[0]), t[1] = Math.min(t[1], h[1]), t[2] = Math.max(t[2], h[2]), t[3] = Math.max(t[3], h[3]));
    }
    return t;
  }
  static _getTextInflatedSize(t, e, s) {
    const r = Dn(e.height ?? kt.CIMTextSymbol.height);
    if (t[0] = -r / 2, t[1] = -r / 2, t[2] = r / 2, t[3] = r / 2, !s) return t;
    const n = s.get(e);
    if (!n || !n.glyphMosaicItems.glyphs.length) return t;
    const { lineGapType: o, lineGap: a } = e, h = o ? Hn(o, a ?? 0, r) : 0, l = e.callout?.type === "CIMBackgroundCallout", c = Gn(n.glyphMosaicItems, { scale: r / nn, angle: v(e.angle), xOffset: v(e.offsetX), yOffset: v(e.offsetY), horizontalAlignment: e.horizontalAlignment, verticalAlignment: e.verticalAlignment, maxLineWidth: Vn(e.lineWidth), lineHeight: on * Math.max(0.25, Math.min(h || 1, 4)), decoration: e.font.decoration || "none", useCIMAngleBehavior: !0, hasBackground: l }).boundsT, u = Math.sqrt(c.width * c.width + c.height * c.height);
    return t[0] -= c.x + u, t[1] -= c.y - u, t[2] += c.x + u, t[3] += -c.y + u, t;
  }
}, ie = class Os {
  static getEnvelope(t, e, s) {
    if (!t) return null;
    const r = new zh(s);
    if (Array.isArray(t)) {
      let n;
      for (const o of t) n ? n.union(Ns(r, o, e)) : n = Ns(r, o, e);
      return n;
    }
    return Ns(r, t, e);
  }
  static getTextureAnchor(t, e) {
    const s = this.getEnvelope(t, null, e);
    if (!s) return [0, 0, 0];
    const r = (s.x + 0.5 * s.width) * dt, n = (s.y + 0.5 * s.height) * dt, o = s.width * dt + 2, a = s.height * dt + 2;
    return [-r / o, -n / a, a];
  }
  static rasterize(t, e, s, r, n = !0) {
    const o = s || this.getEnvelope(e, null, r);
    if (!o) return [null, 0, 0, 0, 0];
    const a = (o.x + 0.5 * o.width) * dt, h = (o.y + 0.5 * o.height) * dt;
    t.width = o.width * dt, t.height = o.height * dt, s || (t.width += 2, t.height += 2);
    const l = t.getContext("2d", { willReadFrequently: !0 }), c = Xt.createScale(dt, -dt);
    c.translate(0.5 * t.width - a, 0.5 * t.height + h);
    const u = new Lh(l, r, c);
    switch (e.type) {
      case "CIMPointSymbol": {
        const m = { type: "point", x: 0, y: 0 };
        u.drawSymbol(e, m);
        break;
      }
      case "CIMVectorMarker": {
        const m = new _e();
        u.drawMarker(e, m);
        break;
      }
    }
    const f = l.getImageData(0, 0, t.width, t.height), p = new Uint8Array(f.data);
    if (n) {
      let m;
      for (let d = 0; d < p.length; d += 4) m = p[d + 3] / 255, p[d] = p[d] * m, p[d + 1] = p[d + 1] * m, p[d + 2] = p[d + 2] * m;
    }
    return [p, t.width, t.height, -a / t.width, -h / t.height];
  }
  static fromTextSymbol(t) {
    const { text: e } = t;
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: Os.createCIMTextSymbolfromTextSymbol(t), textString: e }], scaleSymbolsProportionally: !0, respectFrame: !0 }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(t) {
    const { height: e, outline: s, width: r, xoffset: n, xscale: o, yoffset: a, yscale: h } = t, l = [], c = { type: "CIMPolygonSymbol", symbolLayers: l };
    if (s) {
      const d = Vr(s);
      d && l.push(d);
    }
    let u = t.url;
    t.type === "esriPFS" && t.imageData && (u = t.imageData);
    const f = "angle" in t ? t.angle ?? 0 : 0, p = (r ?? 0) * (o || 1), m = (e ?? 0) * (h || 1);
    return l.push({ type: "CIMPictureFill", invertBackfaceTexture: !1, scaleX: 1, textureFilter: ys.Picture, tintColor: null, url: u, height: m, width: p, offsetX: v(n), offsetY: v(a), rotation: v(-f), colorSubstitutions: null }), c;
  }
  static fromSimpleFillSymbol(t) {
    const { color: e, style: s, outline: r } = t, n = [], o = { type: "CIMPolygonSymbol", symbolLayers: n };
    if (r) {
      const a = Vr(r);
      a && n.push(a);
    }
    if (s && s !== "solid" && s !== "none" && s !== "esriSFSSolid" && s !== "esriSFSNull") {
      const a = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: Q(e), capStyle: lt.Butt, joinStyle: It.Miter, width: 0.75 }] };
      let h = 0;
      const l = gt(Wh(s) ? 8 : 10);
      switch (s) {
        case "vertical":
        case "esriSFSVertical":
          h = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          h = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          h = 45;
          break;
        case "cross":
        case "esriSFSCross":
          h = 0;
      }
      n.push({ type: "CIMHatchFill", lineSymbol: a, offsetX: 0, offsetY: 0, rotation: h, separation: l }), s === "cross" || s === "esriSFSCross" ? n.push({ type: "CIMHatchFill", lineSymbol: ce(a), offsetX: 0, offsetY: 0, rotation: 90, separation: l }) : s !== "diagonal-cross" && s !== "esriSFSDiagonalCross" || n.push({ type: "CIMHatchFill", lineSymbol: ce(a), offsetX: 0, offsetY: 0, rotation: 45, separation: l });
    } else !s || s !== "solid" && s !== "esriSFSSolid" || n.push({ type: "CIMSolidFill", enable: !0, color: Q(e) });
    return o;
  }
  static fromSimpleLineSymbol(t) {
    const { cap: e, color: s, join: r, marker: n, miterLimit: o, style: a, width: h } = t;
    let l = null;
    a !== "solid" && a !== "none" && a !== "esriSLSSolid" && a !== "esriSLSNull" && (l = [{ type: "CIMGeometricEffectDashes", dashTemplate: Ii(a, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]);
    const c = [];
    if (n) {
      let u;
      switch (n.placement) {
        case "begin-end":
          u = Ot.Both;
          break;
        case "begin":
          u = Ot.JustBegin;
          break;
        case "end":
          u = Ot.JustEnd;
          break;
        default:
          u = Ot.None;
      }
      const f = Os.fromSimpleMarker(n, h, s).symbolLayers[0];
      f.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", placePerPart: !1, angleToLine: !0, offset: 0, extremityPlacement: u, offsetAlongLine: 0 }, c.push(f);
    }
    return c.push({ type: "CIMSolidStroke", color: a !== "none" && a !== "esriSLSNull" ? Q(s) : [0, 0, 0, 0], capStyle: qn(e), joinStyle: Wn(r), miterLimit: o, width: h, effects: l }), { type: "CIMLineSymbol", symbolLayers: c };
  }
  static fromPictureMarker(t) {
    const { angle: e, height: s, width: r, xoffset: n, yoffset: o } = t;
    let a = t.url;
    return t.type === "esriPMS" && t.imageData && (a = t.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: !1, scaleX: 1, textureFilter: ys.Picture, tintColor: null, url: a, size: s, width: r, offsetX: v(n), offsetY: v(o), rotation: v(-e) }] };
  }
  static createCIMTextSymbolfromTextSymbol(t) {
    const { angle: e, color: s, font: r, haloColor: n, haloSize: o, horizontalAlignment: a, kerning: h, lineWidth: l, text: c, verticalAlignment: u, xoffset: f, yoffset: p, backgroundColor: m, borderLineColor: d, borderLineSize: _ } = t;
    let y, x, P, w, C, I;
    r && (y = r.family, x = r.style, P = r.weight, w = r.size, C = r.decoration);
    let X = !1;
    return c && (X = lh(c)[1]), (m || _) && (I = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", color: Q(m) }, { type: "CIMSolidStroke", color: Q(d), width: _ }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMTextSymbol", angle: e, blockProgression: aa.BTT, depth3D: 1, extrapolateBaselines: !0, fontEffects: ha.Normal, fontEncoding: la.Unicode, fontFamilyName: y || "Arial", fontStyleName: Xh(x, P), fontType: ca.Unspecified, haloSize: o, height: w, hinting: ua.Default, horizontalAlignment: Bh(a ?? "center"), kerning: h, letterWidth: 100, ligatures: !0, lineGapType: "Multiple", lineWidth: l, offsetX: v(f), offsetY: v(p), strikethrough: C === "line-through", underline: C === "underline", symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: Q(s) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: !0, color: Q(n) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: X ? Sr.RTL : Sr.LTR, verticalAlignment: Hh(u ?? "baseline"), verticalGlyphOrientation: pa.Right, wordSpacing: 100, billboardMode3D: da.FaceNearPlane, callout: I };
  }
  static createPictureMarkerRasterizationParam(t) {
    const { angle: e, height: s, width: r, xoffset: n, yoffset: o } = t, a = t.url ?? t.source?.url ?? t.source?.imageData;
    return a ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureMarker", invertBackfaceTexture: !1, scaleX: 1, textureFilter: ys.Picture, tintColor: null, url: a, size: s, width: r, offsetX: v(n), offsetY: v(o), rotation: v(-e) } } : null;
  }
  static createPictureFillRasterizationParam(t) {
    const { width: e, height: s, xoffset: r, yoffset: n, url: o } = t;
    return o ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureFill", scaleX: 1, textureFilter: ys.Picture, tintColor: null, url: o, width: e, height: s, offsetX: v(r), offsetY: v(n), rotation: 0 } } : null;
  }
  static fromSimpleMarker(t, e, s) {
    const { style: r } = t, n = t.color ?? s;
    if (r === "path" || r === "esriSMSPath") {
      const u = [];
      if ("outline" in t && t.outline) {
        const m = t.outline;
        u.push({ type: "CIMSolidStroke", enable: !0, width: m.width, color: Q(m.color), path: t.path });
      }
      u.push({ type: "CIMSolidFill", enable: !0, color: Q(n), path: t.path });
      const [f, p] = ve("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: -v(t.angle), size: v(t.size || 6), offsetX: v(t.xoffset), offsetY: v(t.yoffset), scaleSymbolsProportionally: !1, frame: f, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: p, symbol: { type: "CIMPolygonSymbol", symbolLayers: u } }] }] };
    }
    const o = [];
    let a, h, l = t.size;
    if ("outline" in t && t.outline && t.outline.style !== "none" && t.outline.style !== "esriSLSNull") {
      const u = t.outline, f = u.style !== "solid" && u.style !== "esriSLSSolid";
      [a, h] = f ? ve(r, t.size) : ve(r);
      const p = u.width ?? jo.width;
      if (f) {
        const _ = p / t.size, y = (a.xmax - a.xmin) * _ / 2, x = (a.ymax - a.ymin) * _ / 2;
        a.xmin -= y, a.xmax += y, a.ymin -= x, a.ymax += x, l && (l += p);
      }
      const m = t.style !== "cross" && t.style !== "x" || t?.outline.style === "dot" || t?.outline.style === "short-dot" ? W.HalfGap : W.FullPattern, d = f ? [{ type: "CIMGeometricEffectAddControlPoints" }, { type: "CIMGeometricEffectDashes", dashTemplate: Ii(u.style, null).map((_) => u.width && u.width > 0 ? _ * u.width : _), lineDashEnding: m, controlPointEnding: W.FullPattern }] : void 0;
      o.push({ type: "CIMSolidStroke", capStyle: f ? lt.Round : lt.Butt, enable: !0, width: p, color: Q(u.color), effects: d });
    } else !e || t.type !== "line-marker" || t.style !== "cross" && t.style !== "x" ? [a, h] = ve(r) : ([a, h] = ve(r), o.push({ type: "CIMSolidStroke", enable: !0, width: e, color: Q(n) }));
    o.push({ type: "CIMSolidFill", enable: !0, color: Q(n) });
    const c = { type: "CIMPolygonSymbol", symbolLayers: o };
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, rotation: v(-t.angle), size: v(l || 6 * e), offsetX: v(t.xoffset), offsetY: v(t.yoffset), scaleSymbolsProportionally: !1, frame: a, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: h, symbol: c }] }] };
  }
  static fromCIMHatchFill(t, e) {
    const s = e * (t.separation ?? kt.CIMHatchFill.separation), r = s / 2, n = ce(t.lineSymbol);
    n.symbolLayers?.forEach((h) => {
      switch (h.type) {
        case "CIMSolidStroke":
          h.width != null && (h.width *= e), h.effects?.forEach((l) => {
            if (l.type === "CIMGeometricEffectDashes") {
              const c = l.dashTemplate;
              l.dashTemplate = c?.map((u) => u * e);
            }
          });
          break;
        case "CIMVectorMarker": {
          h.size != null && (h.size *= e);
          const l = h.markerPlacement;
          l != null && "placementTemplate" in l && (l.placementTemplate = l.placementTemplate.map((c) => c * e));
          break;
        }
      }
    });
    let o = this._getLineSymbolPeriod(n) || Gr;
    for (; o < Gr; ) o *= 2;
    const a = o / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -a, xmax: a, ymin: -r, ymax: r }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-a, 0], [a, 0]]] }, symbol: n }], size: s };
  }
  static fetchResources(t, e, s, r = null) {
    return t && e && Yn(t, (n) => {
      jh(n, e, s), "url" in n && n.url && s.push(e.fetchResource(n.url, { signal: r }));
    }), s;
  }
  static fetchFonts(t, e, s) {
    if (t && e) {
      if ("symbolLayers" in t && t.symbolLayers) {
        for (const r of t.symbolLayers) if (r.type === "CIMVectorMarker" && r.markerGraphics) for (const n of r.markerGraphics) n?.symbol && Os.fetchFonts(n.symbol, e, s);
      } else if (t.type === "CIMTextSymbol") {
        const { fontFamilyName: r, fontStyleName: n } = t;
        if (!r || r.toLowerCase() === "calcitewebcoreicons") return;
        const { style: o, weight: a } = en(n), h = tn(t), l = new Ko({ family: r, style: o, weight: a, decoration: h });
        s.push(e.loadFont(l).catch(() => {
          Ks().error(`Unsupported font ${r} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(t) {
    if (t) {
      const e = this._getEffectsRepeat(t.effects);
      if (e) return e;
      if (t.symbolLayers) {
        for (const s of t.symbolLayers) if (s) {
          const r = this._getEffectsRepeat(s.effects);
          if (r) return r;
          switch (s.type) {
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
            case "CIMVectorMarker":
            case "CIMObjectMarker3D":
            case "CIMglTFMarker3D": {
              const n = this._getPlacementRepeat(s.markerPlacement);
              if (n) return n;
            }
          }
        }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(t) {
    if (t) {
      for (const e of t) if (e) switch (e.type) {
        case "CIMGeometricEffectDashes": {
          const s = e.dashTemplate;
          if (s && s.length) {
            let r = 0;
            for (const n of s) r += n;
            return 1 & s.length && (r *= 2), r;
          }
          break;
        }
        case "CIMGeometricEffectWave":
          return e.period;
        default:
          Ks().error(`unsupported geometric effect type ${e.type}`);
      }
    }
    return 0;
  }
  static _getPlacementRepeat(t) {
    if (t) switch (t.type) {
      case "CIMMarkerPlacementAlongLineSameSize":
      case "CIMMarkerPlacementAlongLineRandomSize":
      case "CIMMarkerPlacementAlongLineVariableSize": {
        const e = t.placementTemplate;
        if (e && e.length) {
          let s = 0;
          for (const r of e) s += +r;
          return 1 & e.length && (s *= 2), s;
        }
        break;
      }
    }
    return 0;
  }
  static fromCIMInsidePolygon(t) {
    const e = t.markerPlacement, s = { ...t };
    s.markerPlacement = null, s.anchorPoint = null;
    const r = Math.abs(e.stepX), n = Math.abs(e.stepY), o = (e.randomness ?? 100) / 100;
    let a, h, l, c;
    if (e.gridType === "Random") {
      const u = gt(ya), f = Math.max(Math.floor(u / r), 1), p = Math.max(Math.floor(u / n), 1);
      a = f * r / 2, h = p * n / 2, l = 2 * h;
      const m = new Zr(e.seed), d = o * r / 1.5, _ = o * n / 1.5;
      c = [];
      for (let y = 0; y < f; y++) for (let x = 0; x < p; x++) {
        const P = y * r - a + d * (0.5 - m.getFloat()), w = x * n - h + _ * (0.5 - m.getFloat());
        c.push({ x: P, y: w }), y === 0 && c.push({ x: P + 2 * a, y: w }), x === 0 && c.push({ x: P, y: w + 2 * h });
      }
    } else e.shiftOddRows === !0 ? (a = r / 2, h = n, l = 2 * n, c = [{ x: -a, y: 0 }, { x: a, y: 0 }, { x: 0, y: h }, { x: 0, y: -h }]) : (a = r / 2, h = n / 2, l = n, c = [{ x: -r, y: 0 }, { x: 0, y: -n }, { x: -r, y: -n }, { x: 0, y: 0 }, { x: r, y: 0 }, { x: 0, y: n }, { x: r, y: n }, { x: -r, y: n }, { x: r, y: -n }]);
    return { type: "CIMVectorMarker", frame: { xmin: -a, xmax: a, ymin: -h, ymax: h }, markerGraphics: c.map((u) => ({ type: "CIMMarkerGraphic", geometry: u, symbol: { type: "CIMPointSymbol", symbolLayers: [s] } })), size: l };
  }
};
function Yn(i, t) {
  if (i) switch (i.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      const e = i.symbolLayers;
      if (!e) return;
      for (const s of e) if (t(s), s.type === "CIMVectorMarker") {
        const r = s.markerGraphics;
        if (!r) continue;
        for (const n of r) if (n) {
          const o = n.symbol;
          o && Yn(o, t);
        }
      }
      break;
    }
  }
}
const qn = (i) => {
  if (!i) return lt.Butt;
  switch (i) {
    case "butt":
      return lt.Butt;
    case "square":
      return lt.Square;
    case "round":
      return lt.Round;
  }
}, Wn = (i) => {
  if (!i) return It.Miter;
  switch (i) {
    case "miter":
      return It.Miter;
    case "round":
      return It.Round;
    case "bevel":
      return It.Bevel;
  }
}, Bh = (i) => {
  if (i == null) return "Center";
  switch (i) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
}, Hh = (i) => {
  if (i == null) return "Center";
  switch (i) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
}, Q = (i) => {
  if (!i) return [0, 0, 0, 0];
  const { r: t, g: e, b: s, a: r } = i;
  return [t, e, s, 255 * r];
}, Xh = (i, t) => {
  const e = Uh(t), s = Yh(i);
  return e && s ? `${e}-${s}` : `${e}${s}`;
}, Uh = (i) => {
  if (!i) return "";
  switch (i.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
}, Yh = (i) => {
  if (!i) return "";
  switch (i.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
}, Ii = (i, t) => {
  const e = si("safari") ? 1e-3 : 0, s = t === "butt";
  switch (i) {
    case "dash":
    case "esriSLSDash":
      return s ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return s ? [4, 3, 1, 3] : [3, 4, e, 4];
    case "dot":
    case "esriSLSDot":
      return s ? [1, 3] : [e, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return s ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return s ? [8, 3, 1, 3] : [7, 4, e, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return s ? [8, 3, 1, 3, 1, 3] : [7, 4, e, 4, e, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return s ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return s ? [4, 1, 1, 1] : [3, 2, e, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return s ? [4, 1, 1, 1, 1, 1] : [3, 2, e, 2, e, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return s ? [1, 1] : [e, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return Ks().error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return Ks().error(`Tried to rasterize SLS, but found an unexpected style: ${i}!`), [0, 0];
  }
};
function qh(i) {
  return i.symbolLayers !== void 0;
}
const ve = (i, t = 100) => {
  const e = t / 2;
  let s, r;
  const n = i;
  if (n === "circle" || n === "esriSMSCircle") {
    let a = Math.acos(1 - 0.25 / e), h = Math.ceil(Un / a / 4);
    h === 0 && (h = 1), a = Rh / h, h *= 4;
    const l = [];
    l.push([e, 0]);
    for (let c = 1; c < h; c++) l.push([e * Math.cos(c * a), -e * Math.sin(c * a)]);
    l.push([e, 0]), s = { rings: [l] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  } else if (n === "cross" || n === "esriSMSCross")
    s = { paths: [[[0, e], [0, -e]], [[e, 0], [-e, 0]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "diamond" || n === "esriSMSDiamond") s = { rings: [[[-e, 0], [0, e], [e, 0], [0, -e], [-e, 0]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "square" || n === "esriSMSSquare") s = { rings: [[[-e, -e], [-e, e], [e, e], [e, -e], [-e, -e]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "x" || n === "esriSMSX") s = { paths: [[[e, e], [-e, -e]], [[e, -e], [-e, e]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e };
  else if (n === "triangle" || n === "esriSMSTriangle") {
    const o = t * 0.5773502691896257, a = -o, h = 2 / 3 * t, l = h - t;
    s = { rings: [[[a, l], [0, h], [o, l], [a, l]]] }, r = { xmin: a, ymin: l, xmax: o, ymax: h };
  } else n === "arrow" && (s = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, r = { xmin: -e, ymin: -e, xmax: e, ymax: e });
  return [r, s];
}, Wh = (i) => i === "vertical" || i === "horizontal" || i === "cross" || i === "esriSFSCross" || i === "esriSFSVertical" || i === "esriSFSHorizontal";
function jh(i, t, e) {
  if (!(!i.effects || t.geometryEngine != null)) {
    if (t.geometryEnginePromise) return void e.push(t.geometryEnginePromise);
    Jo(i.effects) && (t.geometryEnginePromise = Zo(), e.push(t.geometryEnginePromise), t.geometryEnginePromise.then((s) => t.geometryEngine = s));
  }
}
function Vr(i) {
  if (!i) return null;
  let t = null;
  const { cap: e, color: s, join: r, miterLimit: n, style: o, width: a } = i;
  return o !== "solid" && o !== "none" && o !== "esriSLSSolid" && o !== "esriSLSNull" && (t = [{ type: "CIMGeometricEffectDashes", dashTemplate: Ii(o, e), lineDashEnding: "NoConstraint", scaleDash: !0, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: o !== "esriSLSNull" && o !== "none" ? Q(s) : [0, 0, 0, 0], capStyle: qn(e), joinStyle: Wn(r), miterLimit: n, width: a, effects: t };
}
var Br;
(function(i) {
  i[i.Geographic = 0] = "Geographic", i[i.Arithmatic = 1] = "Arithmatic";
})(Br || (Br = {}));
const _u = 3.14159265359 / 180, Kh = 3.14159265359 / 128, gu = 1, Jh = 1.1, Zh = 1, yu = 24, xu = 8, Qh = 1e-5, Hr = 0.05, tl = 1e-30, el = 4, sl = 0, il = 2, bu = 2, Pu = 3, wu = 0, Su = 3, rl = 16777216, nl = () => me.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
let jn = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(t, e) {
    this._includedModules.has(t) ? this._includedModules.get(t) : (this._includedModules.set(t, e), t(this.builder, e));
  }
}, ol = class extends jn {
  constructor() {
    super(...arguments), this.vertex = new Xr(), this.fragment = new Xr(), this.attributes = new ll(), this.varyings = new cl(), this.extensions = new ki(), this.constants = new Kn();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(t, e = !0) {
    const s = this.extensions.generateSource(t), r = this.attributes.generateSource(t), n = this.varyings.generateSource(t), o = t === "vertex" ? this.vertex : this.fragment, a = o.uniforms.generateSource(), h = o.code.generateSource(), l = t === "vertex" ? pl : ul(e), c = this.constants.generateSource().concat(o.constants.generateSource());
    return `${e ? "#version 300 es" : ""}
${s.join(`
`)}
${l}
${c.join(`
`)}
${a.join(`
`)}
${r.join(`
`)}
${n.join(`
`)}
${h.join(`
`)}`;
  }
  generateBindPass(t) {
    const e = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((n) => {
      const o = n.bind[xs.Pass];
      o && e.set(n.name, o);
    }), this.fragment.uniforms.entries.forEach((n) => {
      const o = n.bind[xs.Pass];
      o && e.set(n.name, o);
    });
    const s = Array.from(e.values()), r = s.length;
    return (n, o) => {
      for (let a = 0; a < r; ++a) s[a](t, n, o);
    };
  }
  generateBindDraw(t) {
    const e = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((n) => {
      const o = n.bind[xs.Draw];
      o && e.set(n.name, o);
    }), this.fragment.uniforms.entries.forEach((n) => {
      const o = n.bind[xs.Draw];
      o && e.set(n.name, o);
    });
    const s = Array.from(e.values()), r = s.length;
    return (n, o, a) => {
      for (let h = 0; h < r; ++h) s[h](t, n, o, a);
    };
  }
}, al = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(...t) {
    for (const e of t) this._add(e);
  }
  get(t) {
    return this._entries.get(t);
  }
  _add(t) {
    if (t != null) {
      if (this._entries.has(t.name) && !this._entries.get(t.name).equals(t)) throw new rn(`Duplicate uniform name ${t.name} for different uniform type`);
      this._entries.set(t.name, t);
    } else nl().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((t) => t.arraySize != null ? `uniform ${t.type} ${t.name}[${t.arraySize}];` : `uniform ${t.type} ${t.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}, hl = class {
  constructor() {
    this._entries = new Array();
  }
  add(t) {
    this._entries.push(t);
  }
  generateSource() {
    return this._entries;
  }
}, Xr = class extends jn {
  constructor() {
    super(...arguments), this.uniforms = new al(), this.code = new hl(), this.constants = new Kn();
  }
  get builder() {
    return this;
  }
}, ll = class {
  constructor() {
    this._entries = new Array();
  }
  add(t, e) {
    this._entries.push([t, e]);
  }
  generateSource(t) {
    return t === "fragment" ? [] : this._entries.map((e) => `in ${e[1]} ${e[0]};`);
  }
}, cl = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(t, e) {
    this._entries.has(t) && Pa(this._entries.get(t) === e), this._entries.set(t, e);
  }
  generateSource(t) {
    const e = new Array();
    return this._entries.forEach((s, r) => e.push(t === "vertex" ? `out ${s} ${r};` : `in ${s} ${r};`)), e;
  }
}, ki = class Ti {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(t) {
    this._entries.add(t);
  }
  generateSource(t) {
    const e = t === "vertex" ? Ti.ALLOWLIST_VERTEX : Ti.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((s) => e.includes(s)).map((s) => `#extension ${s} : enable`);
  }
};
ki.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], ki.ALLOWLIST_VERTEX = [];
let Kn = class E {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(t, e, s) {
    let r = "ERROR_CONSTRUCTOR_STRING";
    switch (e) {
      case "float":
        r = E._numberToFloatStr(s);
        break;
      case "int":
        r = E._numberToIntStr(s);
        break;
      case "bool":
        r = s.toString();
        break;
      case "vec2":
        r = `vec2(${E._numberToFloatStr(s[0])},                            ${E._numberToFloatStr(s[1])})`;
        break;
      case "vec3":
        r = `vec3(${E._numberToFloatStr(s[0])},                            ${E._numberToFloatStr(s[1])},                            ${E._numberToFloatStr(s[2])})`;
        break;
      case "vec4":
        r = `vec4(${E._numberToFloatStr(s[0])},                            ${E._numberToFloatStr(s[1])},                            ${E._numberToFloatStr(s[2])},                            ${E._numberToFloatStr(s[3])})`;
        break;
      case "ivec2":
        r = `ivec2(${E._numberToIntStr(s[0])},                             ${E._numberToIntStr(s[1])})`;
        break;
      case "ivec3":
        r = `ivec3(${E._numberToIntStr(s[0])},                             ${E._numberToIntStr(s[1])},                             ${E._numberToIntStr(s[2])})`;
        break;
      case "ivec4":
        r = `ivec4(${E._numberToIntStr(s[0])},                             ${E._numberToIntStr(s[1])},                             ${E._numberToIntStr(s[2])},                             ${E._numberToIntStr(s[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        r = `${e}(${Array.prototype.map.call(s, (n) => E._numberToFloatStr(n)).join(", ")})`;
    }
    return this._entries.add(`const ${e} ${t} = ${r};`), this;
  }
  static _numberToIntStr(t) {
    return t.toFixed(0);
  }
  static _numberToFloatStr(t) {
    return Number.isInteger(t) ? t.toFixed(1) : t.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
function ul(i = !0) {
  return `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif
${i ? "out vec4 fragColor;" : ""}
`;
}
const pl = `precision highp float;
precision highp sampler2D;`;
function dl(i) {
  return i.split(" ").map((t, e) => e > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t).join("");
}
function fl(i, t) {
  const e = [];
  for (e.push(t); e.length; ) {
    const s = e.pop();
    if (typeof s == "object" && !i.has(s.uid)) {
      i.add(s.uid);
      for (const r of s.children) e.push(r);
    }
  }
}
let te = class zi {
  constructor() {
    this.uid = zi.NodeCount++, this._debugName = null, this._isMutable = !1, this.isImplicit = !1;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = !0, this;
  }
  setDebugName(t) {
    return t = dl(t), this._debugName = t, this.isImplicit && this.children[0] instanceof zi && this.children[0].setDebugName(t), this;
  }
  get debugInfo() {
    return { name: this._debugName ?? "" };
  }
  cloneInto(t) {
    t._debugName = this._debugName, t._isMutable = this._isMutable, t.isImplicit = this.isImplicit, t.uid = this.uid;
  }
};
function S(i) {
  return typeof i == "object" ? i.clone() : i;
}
te.NodeCount = 0;
let D = class extends te {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
}, ml = class Jn extends te {
  constructor(t) {
    super(), this.child = t, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t = new Jn(S(this.child));
    return this.cloneInto(t), t;
  }
}, _l = class Zn extends te {
  constructor(t, e, s) {
    super(), this.property = t, this.target = e, this.returnType = s, this.shaderType = "property-access-node";
  }
  get children() {
    const t = [this.target];
    return typeof this.property != "string" && t.push(this.property), t;
  }
  clone() {
    const t = new Zn(this.property, S(this.target), this.returnType);
    return this.cloneInto(t), t;
  }
};
class nr extends te {
  constructor(t, e, s) {
    super(), this.condition = t, this.ifTrue = e, this.ifFalse = s, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t = S(this.ifTrue), e = this.ifFalse ? S(this.ifFalse) : null, s = new nr(this.condition, t, e);
    return this.cloneInto(s), s;
  }
}
let gl = class Qn extends te {
  constructor(t, e, s, r) {
    super(), this.captureList = t, this.returnType = e, this.generator = r, this.shaderType = "block-node", s && (this.subgraph = new ml(s));
  }
  get children() {
    return Object.keys(this.captureList).map((t) => this.captureList[t]).concat(this.subgraph ?? []);
  }
  clone() {
    const t = {};
    for (const s in this.captureList) t[s] = S(this.captureList[s]);
    const e = new Qn(t, this.returnType, this.subgraph ? S(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e), e;
  }
}, Kt = class to extends te {
  constructor(t, e, s, r, n, o = !1) {
    super(), this.token = t, this._children = e, this.isInfix = s, this.isPropertyAccess = r, this.returnType = n, this.isTernary = o, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t = new to(this.token, this._children.map(S), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t), t;
  }
};
var Ze, Li, Ai, Fi, Ei, Ni, Oi, Ri, Gi, Di, Vi, Bi, Hi, Xi;
function yl(i) {
  const t = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const e of t) if (e.includes(i)) return e.map((s) => wl[s]);
  throw new Error("Unable to find type family");
}
function eo(i) {
  return new Proxy(i, { get(t, e) {
    if (e === "constructor") return new Proxy(t.constructor, { construct: (s, r, n) => eo(new s(...r)) });
    if (e in t) return t[e];
    if (typeof e == "string") {
      const s = yl(i.type);
      return tt(i, e, s[e.length - 1]);
    }
  } });
}
function st(i) {
  return new Proxy(i, { construct: (t, e, s) => eo(new t(...e)) });
}
function xl(i) {
  return new Proxy(i, { get(t, e) {
    if (e in t) return t[e];
    if (typeof e == "string") {
      const s = parseInt(e, 10);
      if (!isNaN(s)) return tt(i, `[${s}]`, i.elementType.constructor);
    }
  } });
}
function bl(i) {
  return new Proxy(i, { construct: (t, e, s) => xl(new t(...e)) });
}
let Ui = class extends Error {
}, ct = Ze = class extends D {
  constructor(i, t) {
    super(), this.elementType = i, this.size = t, this.children = [], this.type = "array";
  }
  clone() {
    const i = new Ze(this.elementType, this.size);
    return super.cloneInto(i), i;
  }
  get(i) {
    if (typeof i == "number") {
      const t = new Gt(i);
      return t.isImplicit = !0, tt(this, t, this.elementType.constructor);
    }
    return tt(this, i, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(i, t, e) {
    return vl(this, i, t, e);
  }
  glslFindIndex(i, t, e) {
    return Cl(this, i, t, e);
  }
  static ofType(i, t) {
    const e = { construct: (s, r) => new Ze(new i(), t) };
    return new Proxy(Ze, e);
  }
};
ct.type = "array", ct = Ze = g([bl], ct);
let Mt = class so extends D {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  clone() {
    const t = new so();
    return t.children = this.children.map(S), super.cloneInto(t), t;
  }
};
Mt.type = "sampler2D";
let b = class oe extends D {
  constructor(t) {
    super(), this.type = "float", this.children = [t];
  }
  clone() {
    const t = new oe(S(this.children[0]));
    return super.cloneInto(t), t;
  }
  multiply(t) {
    return Dt(this, typeof t == "number" ? V(t, oe) : t);
  }
  divide(t) {
    return us(this, typeof t == "number" ? V(t, oe) : t);
  }
  add(t) {
    return ge(this, typeof t == "number" ? V(t, oe) : t);
  }
  subtract(t) {
    return ps(this, typeof t == "number" ? V(t, oe) : t);
  }
};
b.type = "float";
let T = Li = class extends D {
  constructor(i, t) {
    super(), this.type = "vec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new Li(S(this.children[0]), S(this.children[1]));
    return super.cloneInto(i), i;
  }
  get 0() {
    return tt(this, "[0]", b);
  }
  get 1() {
    return tt(this, "[1]", b);
  }
  get 2() {
    throw new Ui();
  }
  get 3() {
    throw new Ui();
  }
  multiply(i) {
    return Dt(this, typeof i == "number" ? V(i, b) : i);
  }
  divide(i) {
    return us(this, typeof i == "number" ? V(i, b) : i);
  }
  add(i) {
    return ge(this, typeof i == "number" ? V(i, b) : i);
  }
  subtract(i) {
    return ps(this, typeof i == "number" ? V(i, b) : i);
  }
};
T.type = "vec2", T = Li = g([st], T);
let B = Ai = class extends D {
  constructor(i, t, e) {
    super(), this.type = "vec3", this.children = [i, t, e].filter((s) => s != null);
  }
  get 0() {
    return tt(this, "[0]", b);
  }
  get 1() {
    return tt(this, "[1]", b);
  }
  get 2() {
    return tt(this, "[2]", b);
  }
  get 3() {
    throw new Ui();
  }
  clone() {
    const i = new Ai(S(this.children[0]), S(this.children[1]), S(this.children[2]));
    return super.cloneInto(i), i;
  }
  multiply(i) {
    return Dt(this, typeof i == "number" ? V(i, b) : i);
  }
  divide(i) {
    return us(this, typeof i == "number" ? V(i, b) : i);
  }
  add(i) {
    return ge(this, typeof i == "number" ? V(i, b) : i);
  }
  subtract(i) {
    return ps(this, typeof i == "number" ? V(i, b) : i);
  }
};
B.type = "vec3", B = Ai = g([st], B);
let A = Fi = class extends D {
  constructor(i, t, e, s) {
    super(), this.type = "vec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Fi(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]));
    return super.cloneInto(i), i;
  }
  get 0() {
    return tt(this, "[0]", b);
  }
  get 1() {
    return tt(this, "[1]", b);
  }
  get 2() {
    return tt(this, "[2]", b);
  }
  get 3() {
    return tt(this, "[3]", b);
  }
  multiply(i) {
    return Dt(this, typeof i == "number" ? V(i, b) : i);
  }
  divide(i) {
    return us(this, typeof i == "number" ? V(i, b) : i);
  }
  add(i) {
    return ge(this, typeof i == "number" ? V(i, b) : i);
  }
  subtract(i) {
    return ps(this, typeof i == "number" ? V(i, b) : i);
  }
};
A.type = "vec4", A = Fi = g([st], A);
let Rs = Ei = class extends D {
  constructor(i) {
    super(), this.type = "uint", this.children = [i];
  }
  clone() {
    const i = new Ei(S(this.children[0]));
    return super.cloneInto(i), i;
  }
};
Rs.type = "uint", Rs = Ei = g([st], Rs);
let Gs = Ni = class extends D {
  constructor(i, t) {
    super(), this.type = "uvec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new Ni(S(this.children[0]), S(this.children[1]));
    return super.cloneInto(i), i;
  }
};
Gs.type = "uvec2", Gs = Ni = g([st], Gs);
let Ds = Oi = class extends D {
  constructor(i, t, e) {
    super(), this.type = "uvec3", this.children = [i, t, e].filter((s) => s != null);
  }
  clone() {
    const i = new Oi(S(this.children[0]), S(this.children[1]), S(this.children[2]));
    return super.cloneInto(i), i;
  }
};
Ds.type = "uvec3", Ds = Oi = g([st], Ds);
let Vs = Ri = class extends D {
  constructor(i, t, e, s) {
    super(), this.type = "uvec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Ri(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]));
    return super.cloneInto(i), i;
  }
};
Vs.type = "uvec4", Vs = Ri = g([st], Vs);
class Z extends D {
  constructor(t) {
    super(), this.type = "bool", this.children = [t];
  }
  and(t) {
    return qi(this, t);
  }
  or(t) {
    return no(this, t);
  }
  clone() {
    const t = new Z(S(this.children[0]));
    return super.cloneInto(t), t;
  }
}
Z.type = "bool";
let Bs = Gi = class extends D {
  constructor(i, t) {
    super(), this.type = "bvec2", this.children = [i, t].filter((e) => e != null);
  }
  all() {
    return hr(this);
  }
  any() {
    return lr(this);
  }
  clone() {
    const i = new Gi(S(this.children[0]), S(this.children[1]));
    return super.cloneInto(i), i;
  }
};
Bs.type = "bvec2", Bs = Gi = g([st], Bs);
let Hs = Di = class extends D {
  constructor(i, t, e) {
    super(), this.type = "bvec3", this.children = [i, t, e].filter((s) => s != null);
  }
  all() {
    return hr(this);
  }
  any() {
    return lr(this);
  }
  clone() {
    const i = new Di(S(this.children[0]), S(this.children[1]), S(this.children[2]));
    return super.cloneInto(i), i;
  }
};
function V(i, t) {
  return typeof i == "number" ? new t(i) : i;
}
Hs.type = "bvec3", Hs = Di = g([st], Hs);
let Xs = Vi = class extends D {
  constructor(i, t, e, s) {
    super(), this.type = "bvec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  all() {
    return hr(this);
  }
  any() {
    return lr(this);
  }
  clone() {
    const i = new Vi(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]));
    return super.cloneInto(i), i;
  }
};
Xs.type = "bvec4", Xs = Vi = g([st], Xs);
let Gt = class ae extends D {
  constructor(t) {
    super(), this.type = "int", this.children = [t];
  }
  multiply(t) {
    return Dt(this, V(t, ae));
  }
  add(t) {
    return ge(this, V(t, ae));
  }
  subtract(t) {
    return ps(this, V(t, ae));
  }
  divide(t) {
    return us(this, V(t, ae));
  }
  clone() {
    const t = new ae(S(this.children[0]));
    return super.cloneInto(t), t;
  }
};
Gt.type = "int";
let Us = Bi = class extends D {
  constructor(i, t) {
    super(), this.type = "ivec2", this.children = [i, t].filter((e) => e != null);
  }
  clone() {
    const i = new Bi(S(this.children[0]), S(this.children[1]));
    return super.cloneInto(i), i;
  }
};
Us.type = "ivec2", Us = Bi = g([st], Us);
let Ys = Hi = class extends D {
  constructor(i, t, e) {
    super(), this.type = "ivec3", this.children = [i, t, e].filter((s) => s != null);
  }
  clone() {
    const i = new Hi(S(this.children[0]), S(this.children[1]), S(this.children[2]));
    return super.cloneInto(i), i;
  }
};
Ys.type = "ivec3", Ys = Hi = g([st], Ys);
let qs = Xi = class extends D {
  constructor(i, t, e, s) {
    super(), this.type = "ivec4", this.children = [i, t, e, s].filter((r) => r != null);
  }
  clone() {
    const i = new Xi(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]));
    return super.cloneInto(i), i;
  }
};
qs.type = "ivec4", qs = Xi = g([st], qs);
let Pl = class io extends D {
  constructor(t, e, s, r) {
    super(), this.type = "mat2", this.children = [t, e, s, r];
  }
  clone() {
    const t = new io(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]));
    return super.cloneInto(t), t;
  }
};
Pl.type = "mat2";
class J extends D {
  static identity() {
    return new J(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t) {
    const e = pr(t), s = oo(t);
    return new J(s, e, 0, Js(e), s, 0, 0, 0, 1);
  }
  constructor(t, e, s, r, n, o, a, h, l) {
    super(), this.type = "mat3", this.children = [t, e, s, r, n, o, a, h, l];
  }
  add(t) {
    return ge(this, t);
  }
  multiply(t) {
    return Dt(this, t);
  }
  clone() {
    const t = new J(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]), S(this.children[4]), S(this.children[5]), S(this.children[6]), S(this.children[7]), S(this.children[8]));
    return super.cloneInto(t), t;
  }
}
J.type = "mat3";
class es extends D {
  static identity() {
    return new es(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t, e, s, r, n, o, a, h, l, c, u, f, p, m, d, _) {
    super(), this.type = "mat4", this.children = [t, e, s, r, n, o, a, h, l, c, u, f, p, m, d, _];
  }
  static fromColumns(t, e, s, r) {
    return new es(t.x, t.y, t.z, t.w, e.x, e.y, e.z, e.w, s.x, s.y, s.z, s.w, r.x, r.y, r.z, r.w);
  }
  multiply(t) {
    return Dt(this, t);
  }
  clone() {
    const t = new es(S(this.children[0]), S(this.children[1]), S(this.children[2]), S(this.children[3]), S(this.children[4]), S(this.children[5]), S(this.children[6]), S(this.children[7]), S(this.children[8]), S(this.children[9]), S(this.children[10]), S(this.children[11]), S(this.children[12]), S(this.children[13]), S(this.children[14]), S(this.children[15]));
    return super.cloneInto(t), t;
  }
}
es.type = "mat4";
const wl = { float: b, vec2: T, vec3: B, vec4: A, int: Gt, ivec2: Us, ivec3: Ys, ivec4: qs, uint: Rs, uvec2: Gs, uvec3: Ds, uvec4: Vs, bool: Z, bvec2: Bs, bvec3: Hs, bvec4: Xs }, re = (...i) => new Gt(...i), N = (...i) => new b(...i), Yi = (...i) => new T(...i), Sl = (...i) => new B(...i), Ml = (...i) => new A(...i), Ur = (...i) => new J(...i);
function tt(i, t, e) {
  const s = new e(new _l(t, i, e));
  return s.isImplicit = !0, s;
}
function it(i, t, e, s = null) {
  if (s) {
    const n = new s(), o = new s(new Kt(i, [t, e], !0, !1, n));
    return o.isImplicit = !0, o;
  }
  if (t.type === "float" || t.type === "int") {
    const n = new e.constructor(new Kt(i, [t, e], !0, !1, e.constructor));
    return n.isImplicit = !0, n;
  }
  if ((t.type === "mat2" || t.type === "mat3" || t.type === "mat4") && e.type !== "float") {
    const n = new e.constructor(new Kt(i, [t, e], !0, !1, e.constructor));
    return n.isImplicit = !0, n;
  }
  const r = new t.constructor(new Kt(i, [t, e], !0, !1, t.constructor));
  return r.isImplicit = !0, r;
}
function at(i, t, e = t.constructor) {
  const s = new e(new Kt(i, [t], !1, !1, e));
  return s.isImplicit = !0, s;
}
function ee(i, t, e, s = t.constructor) {
  const r = new s(new Kt(i, [t, e], !1, !1, s));
  return r.isImplicit = !0, r;
}
function or(i, t, e, s, r = t.constructor) {
  const n = new r(new Kt(i, [t, e, s], !1, !1, r));
  return n.isImplicit = !0, n;
}
function Js(i) {
  return Dt(i, N(-1));
}
function ro(i, t, e, s) {
  return new t(new gl(i, t, e, s));
}
function vl(i, t, e = 0, s = i.size) {
  const r = new Gt(e).setMutable().setDebugName("FindIndexIterator"), n = t(i.get(r)).setDebugName("FindIndexPredicate");
  return ro({ iter: r }, Gt, n, ({ out: a, iter: h, subgraph: l }) => `
${a} = -1;

for (; ${h} < ${s}; ${h}++) {

${l.body}

  if (${l.varName}) {
    ${a} = ${h};
    break;
  }

}
`).setDebugName("FindIndexBlock");
}
function Cl(i, t, e = 0, s = i.size) {
  return ro({ array: i }, Gt, null, ({ out: n, array: o }) => `
${n} = -1;
for (int i = ${e}; i < ${s}; i++) {
  bool condition;
  ${t({ array: o, i: "i", out: "condition" })}
  if (condition) {
    ${n} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
}
function H(i, t, e) {
  const s = typeof t == "function" ? t() : t, r = typeof e == "function" ? e() : e, n = new s.constructor(new nr(i, s, r));
  return n.isImplicit = !0, n;
}
function cs(...i) {
  const t = i.map(([a, h]) => typeof h == "function" ? [a, h()] : [a, h]), e = t[0][1].constructor, s = t.findIndex((a) => a[0] === !0);
  if (s === -1) throw new Error("A cond must have a fallthrough case with `true`/; ");
  const r = t.slice(0, s), n = t[s][1], o = new e(r.reduceRight((a, h) => H(h[0], h[1], a), n));
  return o.isImplicit = !0, o;
}
function Dt(i, t) {
  return it("*", i, t);
}
function us(i, t) {
  return it("/", i, t);
}
function ge(i, t) {
  return it("+", i, t);
}
function ps(i, t) {
  return it("-", i, t);
}
function Au(i, t) {
  return it(">>", i, t);
}
function Fu(i, t) {
  return it("&", i, t);
}
function ar(i, t) {
  return it("==", i, t, Z);
}
function $l(i, t) {
  return it("<", i, t, Z);
}
function ai(i, t) {
  return it("<=", i, t, Z);
}
function et(i, t) {
  return it(">", i, t, Z);
}
function hi(i, t) {
  return it(">=", i, t, Z);
}
function no(...i) {
  return i.length <= 1 ? i[0] : i.slice(1).reduce((t, e) => Il(t, e), i[0]);
}
function Il(i, t) {
  return it("||", i, t, Z);
}
function qi(...i) {
  return i.length <= 1 ? i[0] : i.slice(1).reduce((t, e) => kl(t, e), i[0]);
}
function kl(i, t) {
  return it("&&", i, t, Z);
}
function Tl(i) {
  return at("abs", i);
}
function hr(i) {
  return at("all", i, Z);
}
function lr(i) {
  return at("any", i, Z);
}
function zl(i) {
  return at("ceil", i);
}
function cr(i, t, e) {
  return or("clamp", i, t, e, i.constructor);
}
function oo(i) {
  return at("cos", i);
}
function ao(i, t) {
  return ee("distance", i, t, b);
}
function ur(i, t) {
  return ee("dot", i, t, b);
}
function Ll(i) {
  return at("floor", i);
}
function ho(i) {
  return at("fract", i);
}
function lo(i) {
  return at("length", i, b);
}
function ue(i, t) {
  return ee("max", i, t);
}
function Wi(i, t) {
  return ee("min", i, t);
}
function ye(i, t, e) {
  return or("mix", i, t, e);
}
function xe(i, t) {
  return ee("mod", i, t);
}
function Al(i) {
  return at("normalize", i);
}
function Fl(i) {
  return i.type === "bool" ? at("!", i) : at("not", i);
}
function pr(i) {
  return at("sin", i);
}
function Eu(i, t, e) {
  return or("smoothstep", i, t, e);
}
function Rt(i, t) {
  return ee("step", i, t, t.constructor);
}
function vt(i, t) {
  return ee("texture2D", i, t, A);
}
const Ce = 5;
function U(i, t, e) {
  const s = t.split(`
`);
  for (const r of s) if (r.trim().length) {
    {
      let n = "";
      e != null && (n += `/*id:${e ?? "000"}*/   `), i.body += n.padEnd(14);
    }
    i.body += " ".repeat(i.indent) + r + `
`;
  }
}
let Yr = class {
  write(t) {
    for (const e of t.rootOutputNodes()) t.shouldPruneOutputNode(e) || (e.variableName = this._write(t, e.node));
    return t;
  }
  _createVarName(t, e) {
    let s = "";
    return typeof e != "boolean" && typeof e != "number" && e.debugInfo.name && (s = `${e.debugInfo.name}_`), `${s}v${t.varCount++}`;
  }
  _write(t, e, s = !1) {
    if (typeof e == "number" || typeof e == "boolean") return e.toString();
    let r = t.getEmit(e);
    if (r) return r;
    switch (e.shaderType) {
      case "scope-node":
        r = this._writeScopeNode(t, e);
        break;
      case "primitive-node":
        r = this._writePrimitiveNode(t, e, s);
        break;
      case "function-node":
        r = this._writeFunctionNode(t, e);
        break;
      case "property-access-node":
        r = this._writePropertyAccessNode(t, e);
        break;
      case "text-node":
        r = e.text;
        break;
      case "block-node":
        r = this._writeBlockNode(t, e);
        break;
      case "condition-node":
        r = this._writeConditionNode(t, e);
    }
    return t.setEmit(e, r), r;
  }
  _writeScopeNode(t, e) {
    const s = new e.child.constructor();
    s.setDebugName(e.debugInfo.name);
    const r = this._write(t, s, !0);
    return U(t, `{ /*ScopeStart: ${e.uid} ${e.debugInfo.name}*/`), t.indent += 2, U(t, `${r} = ${this._write(t, e.child)};`), t.indent -= 2, U(t, `} /*ScopeEnd: ${e.uid} ${e.debugInfo.name}*/`), r;
  }
  _writeConditionNode(t, e) {
    const s = new e.ifTrue.constructor(), r = this._write(t, s, !0);
    U(t, `if (${this._write(t, e.condition)}) {`), t.indent += 2;
    const n = t.createSubgraphContext(), o = this._write(n, e.ifTrue);
    if (t.body += n.body, o && U(t, `${r} = ${o};`), t.indent -= 2, U(t, "}"), e.ifFalse) {
      U(t, "else {"), t.indent += 2;
      const a = t.createSubgraphContext(), h = this._write(a, e.ifFalse);
      t.body += a.body, h && U(t, `${r} = ${h};`), t.indent -= 2, U(t, "}");
    }
    return r;
  }
  _writeBlockNode(t, e) {
    const { captureList: s, generator: r, returnType: n } = e, o = {};
    for (const c in s) {
      if (!s[c]) continue;
      const u = this._write(t, s[c]);
      o[c] = u;
    }
    const a = new n(), h = this._write(t, a, !0);
    if (o.out = h, e.subgraph) {
      const c = t.createSubgraphContext(), u = this._write(c, e.subgraph.child), f = c.body;
      o.subgraph = { varName: u, body: f };
    }
    const l = r(o);
    return U(t, `{
`), t.indent += 2, U(t, l), t.indent -= 2, U(t, `}
`), h;
  }
  _writePropertyAccessNode(t, e) {
    const s = this._write(t, e.target);
    return typeof e.property == "string" && e.property.includes("[") ? `${s}${e.property}` : typeof e.property != "string" ? `${s}[${this._write(t, e.property)}]` : `${s}.${e.property}`;
  }
  _writeFunctionNode(t, e) {
    const s = e.returnType.type;
    if (e.isInfix) {
      const [o, a] = e.children.map((l) => this._write(t, l)), h = this._createVarName(t, e);
      return U(t, `${s.padEnd(Ce)} ${h} = ${o} ${e.token} ${a};`, e.uid), h;
    }
    const r = e.children.map((o) => this._write(t, o)).join(", "), n = this._createVarName(t, e);
    return U(t, `${s.padEnd(Ce)} ${n} = ${e.token}(${r});`, e.uid), n;
  }
  _writePrimitiveNode(t, e, s = !1) {
    const r = t.getInput(e);
    if (r) return r.isUsed = !0, r.variableName;
    const n = e.children.length === 1 && e.children[0]?.type === e.type;
    if (e.isImplicit || n) return this._write(t, e.children[0]);
    const o = this._createVarName(t, e);
    if (s) return U(t, `${e.type.padEnd(Ce)} ${o};`, e.uid), o;
    const a = !e.debugInfo.name && !e.isMutable;
    if (a && e.type === "float" && typeof e.children[0] == "number") return Number.isInteger(e.children[0]) ? e.children[0].toFixed(1) : e.children[0].toString();
    if (a && e.type === "int" && typeof e.children[0] == "number" && Number.isInteger(e.children[0])) return e.children[0].toString();
    const h = e.children.map((l) => this._write(t, l)).join(", ");
    return e.type === "array" ? (U(t, `${e.type.padEnd(Ce)} ${o} = [${h}];`, e.uid), o) : a ? `${e.type}(${h})` : (U(t, `${e.type.padEnd(Ce)} ${o} = ${e.type}(${h});`, e.uid), o);
  }
}, ne = class co {
  constructor(t, e, s) {
    this.variableName = t, this.variableInputType = e, this.node = s, this.type = "shader-input", this.isUsed = !1;
  }
  clone() {
    return new co(this.variableName, this.variableInputType, S(this.node));
  }
}, $e = class uo {
  constructor(t, e, s) {
    this.outVariableName = t, this.outVariableType = e, this.node = s, this.type = "shader-output";
  }
  clone() {
    const t = new uo(this.outVariableName, this.outVariableType, S(this.node));
    return t.variableName = this.variableName, t;
  }
}, qr = class Ws {
  static createVertex(t, e, s, r, n, o) {
    const a = [];
    for (const l in t) {
      const c = t[l], u = s.get(l);
      u ? a.push(new ne(u, "builtin", c)) : a.push(new ne("a_" + l, "attribute", c));
    }
    for (const l of r) {
      const c = l.uniformHydrated;
      a.push(new ne(l.uniformName, "uniform", c));
    }
    const h = [];
    for (const l in e) {
      const c = e[l];
      l === "glPosition" ? h.push(new $e("gl_Position", "builtin", c)) : l === "glPointSize" ? h.push(new $e("gl_PointSize", "builtin", c)) : h.push(new $e("v_" + l, "varying", c));
    }
    return new Ws(a, h, n, o);
  }
  static createFragment(t, e, s, r, n, o) {
    const a = [], h = Array.from(n.rootOutputNodes());
    for (const c in t) {
      const u = t[c], f = s.get(c);
      if (f) {
        a.push(new ne(f, "builtin", u));
        continue;
      }
      const p = h.find((m) => m.node === u);
      p && a.push(new ne(p.outVariableName, p.outVariableType, u));
    }
    for (const c of r) {
      const u = c.uniformHydrated;
      a.push(new ne(c.uniformName, "uniform", u));
    }
    const l = [];
    for (const c in e) {
      const u = e[c], f = s.get(c);
      if (c === "discard") l.push(new $e(null, "discard", u));
      else {
        if (!f) throw new Error(`Member ${c} in shader fragment output shoule be tagged as builtin`);
        l.push(new $e(f, "builtin", u));
      }
    }
    return new Ws(a, l, o);
  }
  constructor(t, e, s, r) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const n of t) this._inputShaderTypesByNodeUid.set(n.node.uid, n);
    this._outputShaderTypes = e, this._transformFeedbackBindings = s, this._transformFeedbackNames = new Set(s.map((n) => "v_" + n.propertyKey)), this._usedInFragmentShader = r;
  }
  shouldPruneOutputNode(t) {
    return !!this._usedInFragmentShader && t.outVariableType !== "builtin" && !this._transformFeedbackNames.has(t.outVariableName) && !this._usedInFragmentShader.has(t.node.uid);
  }
  setEmit(t, e) {
    this._nodeEmitMap.set(t.uid, e);
  }
  getEmit(t) {
    return this._nodeEmitMap.get(t.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(t) {
    return this._inputShaderTypesByNodeUid.get(t.uid);
  }
  *rootOutputNodes() {
    for (const t of this._outputShaderTypes) yield t;
  }
  *nodes() {
    const t = [];
    for (const e of this._outputShaderTypes.values()) t.push(e.node);
    for (; t.length; ) {
      const e = t.pop();
      typeof e != "number" && typeof e != "boolean" && t.push(...e.children.filter(Boolean)), yield e;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const t of this.nodes()) typeof t != "number" && typeof t != "boolean" && (yield t);
  }
  createSubgraphContext() {
    const t = this.clone();
    return t.body = "", t.indent = this.indent + 2, t._nodeEmitMap = new Map(this._nodeEmitMap), t;
  }
  clone() {
    const t = new Ws([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return t._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, t.indent = this.indent, t.body = this.body, t.varCount = this.varCount, t._nodeEmitMap = this._nodeEmitMap, t;
  }
  insertVertexShader(t) {
    t.vertex.code.add(""), this._insertInputs(t, "vertex"), t.vertex.code.add(""), t.vertex.code.add("// OUTPUTS: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this.rootOutputNodes()) {
      const s = e.outVariableType === "builtin";
      this.shouldPruneOutputNode(e) || (s ? t.vertex.code.add(`// ${e.outVariableType.padEnd(7)} ${e.node.type.padEnd(9)} ${e.outVariableName};`) : t.vertex.code.add(`${e.outVariableType.padEnd(10)} ${e.node.type.padEnd(9)} ${e.outVariableName};`));
    }
    t.vertex.code.add(""), t.vertex.code.add("void main() {"), t.vertex.code.add("  " + this.body.split(`
`).join(`
  `));
    for (const e of this.rootOutputNodes()) this.shouldPruneOutputNode(e) || t.vertex.code.add(`  ${e.outVariableName} = ${e.variableName};`);
    t.vertex.code.add("}");
  }
  insertFragmentShader(t) {
    this._insertInputs(t, "fragment"), t.fragment.code.add(""), t.fragment.code.add("void main() {"), t.fragment.code.add("  " + this.body.split(`
`).join(`
  `));
    for (const e of this.rootOutputNodes()) e.outVariableType === "discard" ? (t.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"), t.fragment.code.add(`  if (${e.variableName}) {`), t.fragment.code.add("    discard;"), t.fragment.code.add("  }"), t.fragment.code.add("  ")) : t.fragment.code.add(`  ${e.outVariableName} = ${e.variableName};`);
    t.fragment.code.add("}");
  }
  _insertInputs(t, e) {
    t[e].code.add("// INPUTS: "), t[e].code.add("// --------------------------------------------------------- ");
    for (const s of this.inputs()) s.isUsed && s.variableInputType !== "builtin" && (s.node.type === "array" ? t[e].code.add(`${s.variableInputType.padEnd(10)} ${s.node.elementType.type.padEnd(9)} ${s.variableName}[${s.node.size}];`) : t[e].code.add(`${s.variableInputType.padEnd(10)} ${s.node.type.padEnd(9)} ${s.variableName};`));
  }
};
const El = () => me.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function Ie(i, t, e) {
  const s = t.length;
  if (s !== e) {
    const r = new rn("Invalid Uniform", `Invalid length, expected ${e} but got ${s}`, { uniformName: i, values: t });
    El().errorOnce(r);
  }
}
class Wr {
  constructor(t, e, s, r, n, o) {
    this._program = null, this._vao = null, this._temporaryTextures = [], this.vertexShader = t, this.fragmentShader = e, this._locations = s, this._locationInfo = r, this._uniformBindings = n, this._transformFeedbackBindings = o;
  }
  destroy() {
    this._program && this._program.dispose(), this.cleanupTemporaryTextures();
  }
  get locations() {
    return this._locations;
  }
  get locationInfo() {
    return this._locationInfo;
  }
  setUniforms(t) {
    this._uniforms = t;
  }
  cleanupTemporaryTextures() {
    for (const t of this._temporaryTextures) t.dispose();
    this._temporaryTextures = [];
  }
  bind(t) {
    const e = this._uniforms;
    if (!this._program) {
      const r = /* @__PURE__ */ new Map();
      for (const [o, a] of this._locations) r.set(o, a);
      const n = [];
      for (const o of this._transformFeedbackBindings ?? []) {
        const { index: a, propertyKey: h } = o;
        n[a] = `v_${h}`;
      }
      this._program = new wa(t, this.vertexShader, this.fragmentShader, r, /* @__PURE__ */ new Map(), n);
    }
    const s = this._program;
    t.useProgram(s);
    for (const r of this._uniformBindings) {
      const { shaderModulePath: n, uniformName: o, uniformType: a, uniformArrayLength: h } = r, l = Qo(n, e);
      if (l == null) {
        if (a === "sampler2D") continue;
        throw new Error(`Failed to find uniform value for ${n}`);
      }
      switch (a === "array" ? r.uniformArrayElementType : a) {
        case "sampler2D": {
          const { unit: c, texture: u } = l;
          if (s.setUniform1i(o, c), "type" in u) t.bindTexture(u, c);
          else {
            const f = ba(t, u.descriptor, u.data);
            t.bindTexture(f, c);
          }
          break;
        }
        case "int":
          if (!h) {
            s.setUniform1i(o, l);
            break;
          }
          Ie(r.uniformName, l, h), s.setUniform1iv(o, l);
          break;
        case "float":
          if (!h) {
            s.setUniform1f(o, l);
            break;
          }
          Ie(r.uniformName, l, h), s.setUniform1fv(o, l);
          break;
        case "vec2":
          if (!h) {
            s.setUniform2f(o, l[0], l[1]);
            break;
          }
          Ie(r.uniformName, l, h), s.setUniform2fv(o, l.flat());
          break;
        case "vec3":
          if (!h) {
            s.setUniform3f(o, l[0], l[1], l[2]);
            break;
          }
          Ie(r.uniformName, l, h), s.setUniform3fv(o, l.flat());
          break;
        case "vec4":
          if (!h) {
            s.setUniform4f(o, l[0], l[1], l[2], l[3]);
            break;
          }
          Ie(r.uniformName, l, h), s.setUniform4fv(o, l.flat());
          break;
        case "mat3":
          s.setUniformMatrix3fv(o, l.flat());
          break;
        case "mat4":
          s.setUniformMatrix4fv(o, l.flat());
          break;
        default:
          throw new Error(`Unable to set uniform for type ${a}`);
      }
    }
  }
}
function ke(i) {
  return new i();
}
function be(i, t, e) {
  const s = i.constructor[t] ?? [];
  i.constructor.hasOwnProperty(t) || Object.defineProperty(i.constructor, t, { value: s.slice() }), i.constructor[t].push(e);
}
function k(i, t) {
  return (e, s) => {
    be(e, "locations", { typeCtor: t, propertyKey: s, parameterIndex: null, index: i });
  };
}
const Nl = (i) => (t, e) => {
  be(t, "builtins", { builtin: i, propertyKey: e });
}, G = (i) => (t, e, s) => {
  be(t, "inputs", { inputCtor: i, propertyKey: e, parameterIndex: s });
}, M = (i) => (t, e) => {
  be(t, "uniforms", { typeCtor: i, propertyKey: e });
}, q = (i) => (t, e) => {
  be(t, "options", { typeCtor: i, propertyKey: e });
}, jr = (i, t) => {
  be(i, "defines", { propertyKey: t });
}, ji = (i, t) => (e, s) => {
  e.constructor.builtins.push({ builtin: i, propertyKey: s, typeCtor: t });
};
let Ki = class {
};
Ki.builtins = [], g([ji("gl_VertexID", Gt)], Ki.prototype, "glVertexID", void 0);
class Ol {
}
let ss = class {
};
ss.builtins = [], g([ji("gl_FragCoord", A)], ss.prototype, "glFragCoord", void 0), g([ji("gl_PointCoord", T)], ss.prototype, "glPointCoord", void 0);
let po = class {
};
g([Nl("gl_FragColor")], po.prototype, "glFragColor", void 0);
let rt = class {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
}, Rl = class {
  constructor() {
    this.logShader = !1, this.computeAttributes = {};
  }
  get vertexInput() {
    const t = this._shaderModuleClass.inputs.findLast((e) => e.propertyKey === "vertex" && e.parameterIndex === 0);
    if (!t) throw new Error("Unable to find vertex input parameter");
    return t;
  }
  get computeInput() {
    return this._shaderModuleClass.inputs.findLast((t) => t.propertyKey === "vertex" && t.parameterIndex === 1);
  }
  get fragmentInput() {
    const t = this._shaderModuleClass.inputs.findLast((e) => e.propertyKey === "fragment");
    if (!t) throw new Error("Unable to find fragment input parameter");
    return t;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    return [...this.vertexInput.inputCtor.locations, ...this.computeInput?.inputCtor.locations ?? []];
  }
  get locationsMap() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
    for (const s of this.locations) e.has(s.index) ? me.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${s.propertyKey} to ${s.index}. Index already in use`, { locationsMap: t }) : (t.set(s.propertyKey, s.index), e.add(s.index));
    return t;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t = this.locationsMap, e = Array.from(t.entries()).map(([n, o]) => `${n}.${o}`).join("."), s = ta(e), r = this.computeAttributes;
      this._locationInfo = { hash: s, locations: t, computeAttributeMap: r };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t = /* @__PURE__ */ new Map();
    for (const e of this.locations) t.set("a_" + e.propertyKey, e.index);
    return t;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t = /* @__PURE__ */ new Set();
      for (const e of this._options) t.add(e.propertyKey);
      this._optionPropertyKeys = t;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t, e, s, r) {
    try {
      const { vertex: n, fragment: o, uniformBindings: a } = this._generateShaders(t, e, s, r);
      return new Wr(n, o, this.renamedLocationsMap, this.locationInfo, a, this.transformFeedbackBindings);
    } catch {
      return new Wr("", "", this.renamedLocationsMap, this.locationInfo, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t) {
    const e = this._options.find((r) => r.propertyKey === t);
    if (e) return { type: "option", className: e.typeCtor };
    const s = this._uniforms.find((r) => r.propertyKey === t);
    if (!s) throw new Error(`Unable to find uniform class type for property: ${t}`);
    return { type: "required", className: s.typeCtor };
  }
  getShaderKey(t, e, s, r) {
    const n = Object.keys(t).map((l) => `${l}.${t[l]}`).join("."), o = Object.keys(s).map((l) => `${l}.${s[l]}`).join("."), a = Object.keys(r).map((l) => `${l}.${r[l]}`).join("."), h = Object.keys(e).filter((l) => this.optionPropertyKeys.has(l) && e[l]).join(".");
    return `${this.constructor.name}.${n}.${o}.${a}.${h}`;
  }
  _generateShaders(t, e, s, r) {
    const n = [];
    this._setDefines(s), this._setOptionalUniforms(n, e), this._setRequiredUniforms(n);
    const o = this._hydrateVertexInput(r), a = this._injectPackPrecisionFactor(o, t), h = this._hydrateComputeInput(), l = h && this._injectComputePackPrecisionFactor(h, t), c = this.vertex(a, l), u = this._hydrateFragmentInput(c), f = this.fragment(u), p = /* @__PURE__ */ new Set();
    for (const C in f) {
      const I = f[C];
      fl(p, I);
    }
    const m = this._getVertexInputBuiltins(), d = qr.createVertex({ ...o, ...h }, c, m, n, this.transformFeedbackBindings, p);
    new Yr().write(d);
    const _ = this._getFragmentInputBuiltins(f);
    _.set("glPointCoord", "gl_PointCoord");
    const y = qr.createFragment(u, f, _, n, d, this.transformFeedbackBindings);
    new Yr().write(y);
    const x = this._createShaderBuilder(d, y), P = x.generate("vertex", !1), w = x.generate("fragment", !1);
    return this.logShader && (console.log(P), console.log(w)), { vertex: P, fragment: w, uniformBindings: n };
  }
  _setDefines(t) {
    for (const e in t) this[e] = t[e];
  }
  _setOptionalUniforms(t, e) {
    for (const s of this._options)
      e[s.propertyKey] ? this[s.propertyKey] = this._hydrateUniformGroup(t, s) : this[s.propertyKey] = null;
  }
  _setRequiredUniforms(t) {
    for (const e of this._uniforms) this[e.propertyKey] = this._hydrateUniformGroup(t, e);
  }
  _hydrateUniformGroup(t, e) {
    const s = new e.typeCtor();
    for (const r of s._uniforms ?? []) {
      const n = ke(r.typeCtor), o = `u_${e.propertyKey}_${r.propertyKey}`, a = n.type, h = [e.propertyKey, r.propertyKey].join(".");
      if ("type" in r.typeCtor && r.typeCtor.type === "array") {
        const l = n;
        t.push({ shaderModulePath: h, uniformName: o, uniformType: a, uniformArrayLength: l.size, uniformArrayElementType: l.elementType.type, uniformHydrated: n });
      } else t.push({ shaderModulePath: h, uniformName: o, uniformType: a, uniformHydrated: n });
      s[r.propertyKey] = n;
    }
    return s;
  }
  _hydrateVertexInput(t) {
    const e = this.vertexInput.inputCtor, s = e.locations.reduce((r, n) => t[n.propertyKey] === !1 ? r : { ...r, [n.propertyKey]: ke(n.typeCtor) }, {});
    for (const { propertyKey: r, typeCtor: n } of e.builtins) {
      const o = ke(n);
      s[r] = o;
    }
    return s;
  }
  _hydrateComputeInput() {
    return this.computeInput == null ? null : this.computeInput.inputCtor.locations.reduce((t, e) => ({ ...t, [e.propertyKey]: ke(e.typeCtor) }), {});
  }
  _injectPackPrecisionFactor(t, e) {
    const s = {};
    for (const r in t) {
      const n = t[r], o = e[r];
      if (o) {
        if (n.type !== "float" && n.type !== "vec2" && n.type !== "vec3" && n.type !== "vec4") throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${n.type}`);
        s[r] = n.divide(new b(o));
      } else s[r] = n;
    }
    return s;
  }
  _injectComputePackPrecisionFactor(t, e) {
    const s = {}, r = /* @__PURE__ */ new Map();
    for (const n in this.computeAttributes) for (const o of this.computeAttributes[n] ?? []) r.set(o, n);
    for (const n in t) {
      const o = t[n], a = r.get(n);
      if (!a) continue;
      const h = e[a];
      if (h) {
        if (o.type !== "float" && o.type !== "vec2" && o.type !== "vec3" && o.type !== "vec4") throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${o.type}`);
        s[n] = o.divide(new b(h));
      } else s[n] = o;
    }
    return s;
  }
  _hydrateFragmentInput(t) {
    const e = {};
    for (const s in t) e[s] = t[s];
    for (const { propertyKey: s, typeCtor: r } of ss.builtins) {
      const n = ke(r);
      e[s] = n;
    }
    return e;
  }
  _getVertexInputBuiltins() {
    const t = this.vertexInput.inputCtor, e = /* @__PURE__ */ new Map();
    for (const { builtin: s, propertyKey: r } of t.builtins) e.set(r, s);
    return e;
  }
  _getFragmentInputBuiltins(t) {
    const e = t.constructor, s = /* @__PURE__ */ new Map();
    for (const r of e.builtins ?? []) s.set(r.propertyKey, r.builtin);
    return s;
  }
  _createShaderBuilder(t, e) {
    const s = new ol();
    return this._insertDebugInfo(s), t.insertVertexShader(s), e.insertFragmentShader(s), s;
  }
  _insertDebugInfo(t) {
    t.vertex.code.add("// DEFINES: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this._defines) this[e.propertyKey] ? t.vertex.code.add(`//   ${e.propertyKey}: true`) : t.vertex.code.add(`//   ${e.propertyKey}: false`);
    t.vertex.code.add(""), t.vertex.code.add("// OPTIONS: "), t.vertex.code.add("// --------------------------------------------------------- ");
    for (const e of this._options) this[e.propertyKey] ? t.vertex.code.add(`//   ${e.propertyKey}: true`) : t.vertex.code.add(`//   ${e.propertyKey}: false`);
  }
};
function Kr(i) {
  const t = N(12.9898), e = N(78.233), s = N(43758.5453), r = ur(i, Yi(t, e)), n = xe(r, N(3.14));
  return ho(pr(n).multiply(s));
}
function Qt(i) {
  return ar(i, N(tl));
}
function Gl(i, t) {
  return i.x.multiply(t.y).subtract(t.x.multiply(i.y));
}
function Dl(i) {
  return i.multiply(2).subtract(1);
}
function Vt(i, t) {
  const e = N(2 ** t);
  return xe(Ll(i.divide(e)), N(2));
}
function Bu(i, t) {
  return et(Vt(i, t), N(0.5));
}
function Pi(i, t) {
  return Vt(i, t + an.length);
}
function Vl(i, t) {
  return Vt(i, t);
}
function Bl(i) {
  const t = Vt(i.z, 7), e = N(1).subtract(t), s = i.xyz.subtract(Sl(0, 0, N(128)));
  return e.multiply(i).add(t.multiply(s));
}
function Hl(i) {
  const t = Ml(0.99609375, 0.0038909912109375, 1519918441772461e-20, 59371814131736755e-24);
  return ur(i, t);
}
function Hu(i) {
  return ue(ue(ue(i.x, i.y), i.z), i.w);
}
let Pt = class extends rt {
  getVisualVariableData(t) {
    if (!this._vvData) {
      const e = this.getAttributeDataCoords(t);
      this._vvData = vt(this.visualVariableData, e).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t) {
    if (!this._uv) {
      const e = Bl(t), s = this.size, r = re(e.x), n = re(e.y).multiply(re(256)), o = re(e.z).multiply(re(256)).multiply(re(256)), a = N(r.add(n).add(o)), h = xe(a, s), l = a.subtract(h).divide(s);
      this._uv = new T(h, l).add(0.5).divide(s);
    }
    return this._uv;
  }
  getFilterData(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.filterFlags, e).setDebugName("storage0");
  }
  getAnimationData(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.animation, e).setDebugName("storage1");
  }
  getVVData(t) {
    return this.getVisualVariableData(t);
  }
  getDataDrivenData0(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.dataDriven0, e).setDebugName("storage30");
  }
  getDataDrivenData1(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.dataDriven1, e).setDebugName("storage31");
  }
  getDataDrivenData2(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.dataDriven2, e).setDebugName("storage32");
  }
  getGPGPUData(t) {
    const e = this.getAttributeDataCoords(t);
    return vt(this.gpgpu, e).setDebugName("storage4");
  }
  getFilterFlags(t) {
    return si("webgl-ignores-sampler-precision") ? zl(this.getFilterData(t).x.multiply(N(255))) : this.getFilterData(t).x.multiply(N(255));
  }
  getAnimationValue(t) {
    return this.getAnimationData(t).x;
  }
  getSizeValue(t) {
    return this.getVisualVariableData(t).x;
  }
  getColorValue(t) {
    return this.getVisualVariableData(t).y;
  }
  getOpacityValue(t) {
    return this.getVisualVariableData(t).z;
  }
  getRotationValue(t) {
    return this.getVisualVariableData(t).w;
  }
};
g([M(Mt)], Pt.prototype, "filterFlags", void 0), g([M(Mt)], Pt.prototype, "animation", void 0), g([M(Mt)], Pt.prototype, "gpgpu", void 0), g([M(Mt)], Pt.prototype, "visualVariableData", void 0), g([M(Mt)], Pt.prototype, "dataDriven0", void 0), g([M(Mt)], Pt.prototype, "dataDriven1", void 0), g([M(Mt)], Pt.prototype, "dataDriven2", void 0), g([M(b)], Pt.prototype, "size", void 0);
let Ji = class extends rt {
};
g([M(b)], Ji.prototype, "activeReasons", void 0), g([M(b)], Ji.prototype, "highlightAll", void 0);
class Qe extends rt {
}
g([M(T)], Qe.prototype, "position", void 0), g([M(b)], Qe.prototype, "distance", void 0), g([M(b)], Qe.prototype, "smallSymbolDistance", void 0), g([M(b)], Qe.prototype, "smallSymbolSizeThreshold", void 0);
let K = class extends rt {
};
g([M(J)], K.prototype, "displayViewScreenMat3", void 0), g([M(J)], K.prototype, "displayViewMat3", void 0), g([M(J)], K.prototype, "displayMat3", void 0), g([M(J)], K.prototype, "viewMat3", void 0), g([M(J)], K.prototype, "tileMat3", void 0), g([M(b)], K.prototype, "displayZoomFactor", void 0), g([M(b)], K.prototype, "requiredZoomFactor", void 0), g([M(T)], K.prototype, "tileOffset", void 0), g([M(b)], K.prototype, "currentScale", void 0), g([M(b)], K.prototype, "currentZoom", void 0), g([M(b)], K.prototype, "metersPerSRUnit", void 0), g([M(b)], K.prototype, "rotation", void 0), g([M(b)], K.prototype, "pixelRatio", void 0);
let Zt = class extends Ki {
};
g([k(0, B)], Zt.prototype, "id", void 0), g([k(1, b)], Zt.prototype, "bitset", void 0), g([k(2, T)], Zt.prototype, "pos", void 0);
let Tt = class extends Ol {
};
g([k(14, T)], Tt.prototype, "nextPos1", void 0), g([k(15, T)], Tt.prototype, "nextPos2", void 0);
let li = class extends ss {
}, $t = class extends Rl {
  clip(t, e) {
    let s = new b(0);
    const r = this.storage.getFilterFlags(t);
    if (s = s.add(N(2).multiply(N(1).subtract(Pi(r, 0)))), this.inside ? s = s.add(N(2).multiply(N(1).subtract(Pi(r, 1)))) : this.outside ? s = s.add(N(2).multiply(Pi(r, 1))) : this.highlight && (s = s.add(N(2).multiply(N(1).subtract(this._checkHighlight(r))))), e != null) {
      const n = new b(1).subtract(Rt(e.x, this.view.currentZoom)), o = Rt(e.y, this.view.currentZoom);
      s = s.add(new b(2).multiply(n.add(o)));
    }
    return s;
  }
  getFragmentOutput(t, e, s = new b(1 / 255)) {
    const r = new po();
    return r.glFragColor = this._maybeWriteHittest(e) ?? this._maybeHighlight(t, s) ?? t, r;
  }
  _maybeHighlight(t, e) {
    return this.highlight ? new A(t.rgb, Rt(e, t.a)) : null;
  }
  _checkHighlight(t) {
    let e = this._checkHighlightBit(t, 0);
    for (let s = 1; s < an.length; s++) e = e.add(this._checkHighlightBit(t, s));
    return Rt(new b(0.1), e.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t, e) {
    return Vl(t, e).multiply(Vt(this.highlight.activeReasons, e));
  }
  maybeRunHittest(t, e, s) {
    if (this.hittestRequest == null) return null;
    const r = this.hittest(t, e, s);
    let n = H(et(r, this.hittestRequest.distance), new b(2), new b(0));
    const o = this.storage.getAttributeDataCoords(t.id), a = Dl(o);
    n = n.add(this.clip(t.id, t.zoomRange));
    const h = new A(new b(1 / 255), 0, 0, 0);
    return { glPointSize: new b(1), glPosition: new A(a, n, 1), color: h };
  }
  _maybeWriteHittest(t) {
    return this.hittestRequest != null ? t.color : null;
  }
};
g([jr], $t.prototype, "inside", void 0), g([jr], $t.prototype, "outside", void 0), g([q(Ji)], $t.prototype, "highlight", void 0), g([M(Pt)], $t.prototype, "storage", void 0), g([M(K)], $t.prototype, "view", void 0), g([q(Qe)], $t.prototype, "hittestRequest", void 0);
function Xl(i, t) {
  return ur(i, Al(t));
}
function is(i, t, e) {
  const s = e.subtract(t), r = Xl(i.subtract(t), s), n = cr(r.divide(lo(s)), new b(0), new b(1));
  return ao(i, t.add(n.multiply(e.subtract(t))));
}
function Ul(i) {
  const t = Tl(i);
  return Rt(t.x.add(t.y).add(t.z), new b(1.05));
}
function Yl(i, t, e, s) {
  const r = new J(e.x.multiply(s.y).subtract(s.x.multiply(e.y)), s.x.multiply(t.y).subtract(t.x.multiply(s.y)), t.x.multiply(e.y).subtract(e.x.multiply(t.y)), e.y.subtract(s.y), s.y.subtract(t.y), t.y.subtract(e.y), s.x.subtract(e.x), t.x.subtract(s.x), e.x.subtract(t.x)), n = t.x.multiply(e.y.subtract(s.y)), o = e.x.multiply(s.y.subtract(t.y)), a = s.x.multiply(t.y.subtract(e.y)), h = n.add(o).add(a);
  return new b(1).divide(h).multiply(r.multiply(new B(1, i)));
}
function ql(i, t, e, s) {
  return ar(Ul(Yl(i, t, e, s)), new b(1));
}
function Wl(i, t, e, s) {
  const r = e.subtract(t), n = s.subtract(t), o = Gl(r, n), a = qi($l(o, new b(Hr)), et(o, new b(-Hr)));
  return cs([qi(Fl(a), ql(i.xy, t, e, s)), new b(-1)], [!0, () => {
    const h = is(i, t, e), l = is(i, e, s), c = is(i, s, t);
    return Wi(Wi(h, l), c);
  }]);
}
function fo(i) {
  return i.distance.add(1);
}
function dr(i, t, e) {
  const { viewMat3: s, tileMat3: r } = i.view, n = s.multiply(r), o = n.multiply(new B(t.pos, 1)), a = n.multiply(new B(e.nextPos1, 1)), h = n.multiply(new B(e.nextPos2, 1));
  return Wl(i.hittestRequest.position, o.xy, a.xy, h.xy);
}
function Ju(i, t, e) {
  return ao(i, e).subtract(t);
}
let ns = class extends rt {
  getColor(t, e, s) {
    return cs([no(Qt(t), s), e], [ai(t, this.values.first()), this.colors.first()], [hi(t, this.values.last()), this.colors.last()], [!0, () => {
      const r = this.values.findIndex((l) => et(l, t)), n = this.values.get(r), o = r.subtract(1), a = this.values.get(o), h = t.subtract(a).divide(n.subtract(a));
      return ye(this.colors.get(o), this.colors.get(r), h);
    }]);
  }
};
g([M(ct.ofType(A, 8))], ns.prototype, "colors", void 0), g([M(ct.ofType(b, 8))], ns.prototype, "values", void 0);
let os = class extends rt {
  getOpacity(t) {
    return cs([Qt(t), new b(1)], [ai(t, this.opacityValues.first()), this.opacities.first()], [hi(t, this.opacityValues.last()), this.opacities.last()], [!0, () => {
      const e = this.opacityValues.findIndex((a) => et(a, t)), s = this.opacityValues.get(e), r = e.subtract(1), n = this.opacityValues.get(r), o = t.subtract(n).divide(s.subtract(n));
      return ye(this.opacities.get(r), this.opacities.get(e), o);
    }]);
  }
};
g([M(ct.ofType(b, 8))], os.prototype, "opacities", void 0), g([M(ct.ofType(b, 8))], os.prototype, "opacityValues", void 0);
function mo(i) {
  return i.visualVariableSizeMinMaxValue != null || i.visualVariableSizeScaleStops != null || i.visualVariableSizeStops != null || i.visualVariableSizeUnitValue != null;
}
function jl(i, t, e) {
  if (mo(i)) {
    const s = i.storage.getSizeValue(t);
    return i.visualVariableSizeMinMaxValue?.getSize(s, e) ?? i.visualVariableSizeScaleStops?.getSizeForViewScale(i.view.currentScale) ?? i.visualVariableSizeStops?.getSize(s, e) ?? i.visualVariableSizeUnitValue?.getSize(s, e);
  }
  return e;
}
function fr(i, t, e, s = new Z(!1)) {
  if (i.visualVariableColor == null) return e;
  const r = i.storage.getColorValue(t);
  return i.visualVariableColor.getColor(r, e, s);
}
function mr(i, t) {
  if (i.visualVariableOpacity == null) return new b(1);
  const e = i.storage.getOpacityValue(t);
  return i.visualVariableOpacity.getOpacity(e);
}
function tp(i, t) {
  if (i.visualVariableRotation == null) return J.identity();
  const e = i.storage.getRotationValue(t);
  return i.visualVariableRotation.getVVRotationMat3(e);
}
let as = class extends Zt {
};
g([k(3, A)], as.prototype, "color", void 0), g([k(4, T)], as.prototype, "zoomRange", void 0);
let le = class extends $t {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t, e) {
    const s = mr(this, t.id), r = fr(this, t.id, t.color).multiply(s), n = this.view.displayViewScreenMat3.multiply(new B(t.pos.xy, 1)), o = this.clip(t.id, t.zoomRange);
    return { glPosition: new A(n.xy, o, 1), color: r, ...this.maybeRunHittest(t, e, null) };
  }
  fragment(t) {
    return this.getFragmentOutput(t.color, t, new b(0));
  }
  hittest(t, e) {
    return dr(this, t, e);
  }
};
g([q(ns)], le.prototype, "visualVariableColor", void 0), g([q(os)], le.prototype, "visualVariableOpacity", void 0), g([R(0, G(as)), R(1, G(Tt))], le.prototype, "vertex", null), g([R(0, G(li))], le.prototype, "fragment", null);
let de = class extends rt {
  getPatternOffsetAtTileOrigin(t, e = new b(0), s = new b(1)) {
    const r = new T(rl).divide(t);
    let n = t.multiply(ho(this.maxIntsToLocalOrigin.multiply(r))).add(this.tileOffsetFromLocalOrigin).subtract(new b(0.5).multiply(t));
    return n = new T(n.x.multiply(s).subtract(n.y.multiply(e)), n.x.multiply(e).add(n.y.multiply(s))), xe(n, t);
  }
};
g([M(T)], de.prototype, "tileOffsetFromLocalOrigin", void 0), g([M(T)], de.prototype, "maxIntsToLocalOrigin", void 0);
let fe = class extends rt {
};
g([M(T)], fe.prototype, "size", void 0), g([M(Mt)], fe.prototype, "texture", void 0);
let Ut = class extends as {
};
g([k(5, A)], Ut.prototype, "tlbr", void 0), g([k(6, b)], Ut.prototype, "width", void 0), g([k(7, b)], Ut.prototype, "height", void 0), g([k(8, T)], Ut.prototype, "offset", void 0), g([k(9, T)], Ut.prototype, "scale", void 0), g([k(10, b)], Ut.prototype, "angle", void 0);
let Kl = class extends li {
};
function Jl(i, t, e, s, r) {
  const n = ar(Vt(r, il), N(1)), o = Hl(new A(i, 0));
  return H(n, Ur(s.divide(t.x), e.divide(t.y), 0, Js(e.divide(t.x)), s.divide(t.y), 0, Kr(Yi(o, 0)), Kr(Yi(0, o)), 1), Ur(s.divide(t.x), e.divide(t.y), 0, Js(e.divide(t.x)), s.divide(t.y), 0, 0, 0, 1));
}
function _o(i, t) {
  const e = i.view.requiredZoomFactor, s = new T(t.width, t.height), r = s.multiply(t.scale).multiply(e), n = t.angle.multiply(Kh), o = pr(n), a = oo(n), h = Jl(t.id, r, o, a, t.bitset), l = i.localTileOffset.getPatternOffsetAtTileOrigin(s, o, a), c = e.multiply(t.scale).multiply(t.offset.subtract(l)).divide(r), u = new B(t.pos, 1), f = h.multiply(u).xy.subtract(c), p = t.tlbr.divide(i.mosaicInfo.size.xyxy);
  let m = Vt(t.bitset, el);
  return i.visualVariableColor != null && (m = H(Qt(i.storage.getColorValue(t.id)), new b(0), m)), { tileTextureCoord: f, tlbr: p, sampleAlphaOnly: m };
}
function go(i, t) {
  const e = xe(t.tileTextureCoord, new b(1)), s = ye(t.tlbr.xy, t.tlbr.zw, e);
  let r = vt(i.mosaicInfo.texture, s);
  return r = H(et(t.sampleAlphaOnly, new b(0.5)), r.aaaa, r), t.color.multiply(r);
}
let Is = class extends le {
  vertex(t, e) {
    return { ...super.vertex(t, e), ..._o(this, t) };
  }
  fragment(t) {
    const e = go(this, t);
    return this.getFragmentOutput(e, t, new b(0));
  }
};
g([M(fe)], Is.prototype, "mosaicInfo", void 0), g([M(de)], Is.prototype, "localTileOffset", void 0), g([R(0, G(Ut)), R(1, G(Tt))], Is.prototype, "vertex", null), g([R(0, G(Kl))], Is.prototype, "fragment", null);
class _r extends rt {
  getSize(t, e) {
    const s = this.minMaxValueAndSize.xy, r = this.minMaxValueAndSize.zw;
    return H(Qt(t), e, () => {
      const n = t.subtract(s.x).divide(s.y.subtract(s.x)), o = cr(n, new b(0), new b(1));
      return r.x.add(o.multiply(r.y.subtract(r.x)));
    });
  }
}
g([M(A)], _r.prototype, "minMaxValueAndSize", void 0);
class Zs extends rt {
  getSizeForViewScale(t) {
    return cs([ai(t, this.values.first()), this.sizes.first()], [hi(t, this.values.last()), this.sizes.last()], [!0, () => {
      const e = this.values.findIndex((a) => et(a, t)), s = this.values.get(e), r = e.subtract(1), n = this.values.get(r), o = t.subtract(n).divide(s.subtract(n));
      return ye(this.sizes.get(r), this.sizes.get(e), o);
    }]);
  }
}
g([M(ct.ofType(b, 8))], Zs.prototype, "sizes", void 0), g([M(ct.ofType(b, 8))], Zs.prototype, "values", void 0);
let Qs = class extends rt {
  getSize(t, e) {
    const s = cs([Qt(t), e], [ai(t, this.values.first()), this.sizes.first()], [hi(t, this.values.last()), this.sizes.last()], [!0, () => {
      const r = this.values.findIndex((l) => et(l, t)), n = this.values.get(r), o = r.subtract(1), a = this.values.get(o), h = t.subtract(a).divide(n.subtract(a));
      return ye(this.sizes.get(o), this.sizes.get(r), h);
    }]);
    return H(Qt(s), e, s);
  }
};
g([M(ct.ofType(b, 8))], Qs.prototype, "sizes", void 0), g([M(ct.ofType(b, 8))], Qs.prototype, "values", void 0);
class gr extends rt {
  getSize(t, e) {
    return H(Qt(t), e, t.multiply(this.unitValueToPixelsRatio));
  }
}
g([M(b)], gr.prototype, "unitValueToPixelsRatio", void 0);
class Yt extends Zt {
}
g([k(3, A)], Yt.prototype, "color", void 0), g([k(4, T)], Yt.prototype, "offset", void 0), g([k(5, T)], Yt.prototype, "normal", void 0), g([k(6, b)], Yt.prototype, "halfWidth", void 0), g([k(7, b)], Yt.prototype, "referenceHalfWidth", void 0), g([k(8, T)], Yt.prototype, "zoomRange", void 0);
let yo = class extends li {
}, ti = class extends rt {
};
function xo(i) {
  return ue(new b(Jh).multiply(Rt(i, new b(Zh))), new b(1));
}
function Zl(i, t) {
  const { halfWidth: e, normal: s } = i, r = xo(e), n = lo(s).multiply(e);
  return cr(r.multiply(e.subtract(n)).divide(t.add(r).subtract(new b(1))), new b(0), new b(1));
}
function Ql(i, t) {
  const { id: e, halfWidth: s, referenceHalfWidth: r } = t;
  if (mo(i)) {
    const n = new b(2).multiply(r), o = jl(i, e, n);
    return new b(0.5).multiply(s.divide(ue(r, new b(Qh)))).multiply(o);
  }
  return s;
}
function bo(i, t) {
  const { id: e, offset: s, pos: r, normal: n, zoomRange: o } = t, { displayViewScreenMat3: a, displayViewMat3: h } = i.view, l = fr(i, e, t.color), c = mr(i, e), u = Ql(i, t), f = new b(0.5).multiply(i.antialiasingControls.antialiasing), p = ue(u.add(f), new b(0.45)).add(new b(0.1).multiply(f)), m = xo(p).multiply(p).multiply(s), d = h.multiply(new B(m, new b(0))), _ = a.multiply(new B(r, new b(1))).add(d), y = new b(2).multiply(Rt(u, new b(0))).add(i.clip(e, o)), x = new A(_.xy, y, 1);
  return { color: l, opacity: c, halfWidth: p, normal: n, scaledOffset: m, scaledHalfWidth: u, glPosition: new A(x.xy, y, 1) };
}
function ci(i, t) {
  const { opacity: e, color: s } = i, r = Zl(i, t);
  return e.multiply(s).multiply(r);
}
g([M(b)], ti.prototype, "antialiasing", void 0), g([M(b)], ti.prototype, "blur", void 0);
class bt extends $t {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t, e) {
    const s = bo(this, t);
    return { ...s, ...this.maybeRunHittest(t, e, s.halfWidth) };
  }
  fragment(t) {
    const e = ci(t, this.antialiasingControls.blur);
    return this.getFragmentOutput(e, t);
  }
  hittest(t, e, s) {
    const { viewMat3: r, tileMat3: n } = this.view, o = r.multiply(n), a = o.multiply(new B(t.pos, 1)), h = o.multiply(new B(e.nextPos1, 1)), l = o.multiply(new B(e.nextPos2, 1)), { distance: c, smallSymbolDistance: u, smallSymbolSizeThreshold: f } = this.hittestRequest, p = Rt(s, f.multiply(0.5)).multiply(c.subtract(u)), m = this.hittestRequest.position;
    return Wi(is(m, a.xy, h.xy), is(m, a.xy, l.xy)).subtract(s).add(p);
  }
}
g([M(ti)], bt.prototype, "antialiasingControls", void 0), g([q(ns)], bt.prototype, "visualVariableColor", void 0), g([q(os)], bt.prototype, "visualVariableOpacity", void 0), g([q(_r)], bt.prototype, "visualVariableSizeMinMaxValue", void 0), g([q(Zs)], bt.prototype, "visualVariableSizeScaleStops", void 0), g([q(Qs)], bt.prototype, "visualVariableSizeStops", void 0), g([q(gr)], bt.prototype, "visualVariableSizeUnitValue", void 0), g([R(0, G(Yt)), R(1, G(Tt))], bt.prototype, "vertex", null), g([R(0, G(yo))], bt.prototype, "fragment", null);
class Ft extends Zt {
}
g([k(3, T)], Ft.prototype, "offset", void 0), g([k(4, A)], Ft.prototype, "color", void 0), g([k(5, T)], Ft.prototype, "normal", void 0), g([k(6, b)], Ft.prototype, "halfWidth", void 0), g([k(7, b)], Ft.prototype, "referenceHalfWidth", void 0), g([k(8, T)], Ft.prototype, "zoomRange", void 0);
let Po = class extends yo {
};
function yr(i, t, e) {
  const { id: s, bitset: r } = t, n = Vt(r, sl), o = et(n, new b(0.5)), a = bo(i, t), h = H(o, a.halfWidth, new b(0)), l = mr(i, s), c = fr(i, s, t.color), u = H(o, t.color, c.multiply(l)), f = i.view.displayViewScreenMat3.multiply(new B(t.pos.xy, 1)), p = i.clip(t.id), m = new A(f.xy, p, 1), d = H(o, a.glPosition, m), _ = e && i.maybeRunHittest(t, e, o);
  return { isOutline: n, color: u, opacity: new b(1), halfWidth: h, normal: a.normal, glPosition: d, ..._ };
}
let Ct = class extends $t {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
};
g([M(ti)], Ct.prototype, "antialiasingControls", void 0), g([q(ns)], Ct.prototype, "visualVariableColor", void 0), g([q(os)], Ct.prototype, "visualVariableOpacity", void 0), g([q(_r)], Ct.prototype, "visualVariableSizeMinMaxValue", void 0), g([q(Zs)], Ct.prototype, "visualVariableSizeScaleStops", void 0), g([q(Qs)], Ct.prototype, "visualVariableSizeStops", void 0), g([q(gr)], Ct.prototype, "visualVariableSizeUnitValue", void 0);
class Zi extends Ct {
  vertex(t, e) {
    return yr(this, t, e);
  }
  fragment(t) {
    const { color: e, isOutline: s } = t, r = et(s, new b(0.5)), n = ci(t, this.antialiasingControls.blur), o = H(r, n, e), a = H(r, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
  hittest(t, e, s) {
    return H(s, fo(this.hittestRequest), dr(this, t, e));
  }
}
g([R(0, G(Ft)), R(1, G(Tt))], Zi.prototype, "vertex", null), g([R(0, G(Po))], Zi.prototype, "fragment", null);
class Qi extends as {
}
g([k(5, A)], Qi.prototype, "tlbr", void 0), g([k(6, b)], Qi.prototype, "inverseRasterizationScale", void 0);
class tc extends li {
}
function ec(i) {
  const t = new b(1), e = new b(0);
  return new J(t.divide(i.x), e.divide(i.y), 0, Js(e.divide(i.x)), t.divide(i.y), 0, 0, 0, 1);
}
function wo(i, t) {
  const e = t.tlbr.xy, s = t.tlbr.zw, r = s.x.subtract(e.x), n = e.y.subtract(s.y), o = new T(r, n).multiply(t.inverseRasterizationScale), a = o.multiply(i.view.requiredZoomFactor), h = ec(a), l = i.localTileOffset.getPatternOffsetAtTileOrigin(o).divide(a), c = new B(t.pos, 1);
  return { tileTextureCoord: h.multiply(c).xy.subtract(l), tlbr: t.tlbr.divide(i.mosaicInfo.size.xyxy) };
}
function So(i, t) {
  const e = xe(i.tileTextureCoord, new b(1)), s = ye(i.tlbr.xy, i.tlbr.zw, e), r = vt(t.texture, s);
  return i.color.multiply(r);
}
class ks extends le {
  vertex(t, e) {
    return { ...super.vertex(t, e), ...wo(this, t) };
  }
  fragment(t) {
    const e = So(t, this.mosaicInfo);
    return this.getFragmentOutput(e, t, new b(0));
  }
}
g([M(fe)], ks.prototype, "mosaicInfo", void 0), g([M(de)], ks.prototype, "localTileOffset", void 0), g([R(0, G(Qi)), R(1, G(Tt))], ks.prototype, "vertex", null), g([R(0, G(tc))], ks.prototype, "fragment", null);
class tr extends Ft {
}
g([k(9, A)], tr.prototype, "tlbr", void 0), g([k(10, b)], tr.prototype, "inverseRasterizationScale", void 0);
class Mo extends Po {
}
let Ts = class extends Zi {
  vertex(t, e) {
    return { ...yr(this, t, e), ...wo(this, t) };
  }
  fragment(t) {
    const { isOutline: e } = t, s = et(e, new b(0.5)), r = ci(t, this.antialiasingControls.blur), n = So(t, this.mosaicInfo), o = H(s, r, n), a = H(s, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
};
g([M(fe)], Ts.prototype, "mosaicInfo", void 0), g([M(de)], Ts.prototype, "localTileOffset", void 0), g([R(0, G(tr)), R(1, G(Tt))], Ts.prototype, "vertex", null), g([R(0, G(Mo))], Ts.prototype, "fragment", null);
const sc = 16, Jr = 1 / sc, ic = 128;
class wt extends Zt {
}
g([k(3, A)], wt.prototype, "color", void 0), g([k(4, A)], wt.prototype, "tlbr", void 0), g([k(5, b)], wt.prototype, "angle", void 0), g([k(6, b)], wt.prototype, "aux1", void 0), g([k(7, b)], wt.prototype, "aux2", void 0), g([k(8, T)], wt.prototype, "aux3", void 0), g([k(9, T)], wt.prototype, "aux4", void 0), g([k(10, T)], wt.prototype, "zoomRange", void 0);
class rc extends Mo {
}
class zs extends Ct {
  vertex(t, e) {
    const { aux1: s, aux2: r, aux3: n, aux4: o } = t, a = { ...t, width: s, height: r, offset: n, scale: o.multiply(Jr) }, h = { ...t, halfWidth: s, referenceHalfWidth: r, offset: n, normal: o.subtract(ic).multiply(Jr) }, l = yr(this, h), c = _o(this, a), u = et(l.isOutline, new b(0.5));
    return { ...l, ...c, ...this.maybeRunHittest(t, e, u) };
  }
  fragment(t) {
    const { isOutline: e } = t, s = et(e, new b(0.5)), r = ci(t, this.antialiasingControls.blur), n = go(this, t), o = H(s, r, n), a = H(s, new b(1 / 255), new b(0));
    return this.getFragmentOutput(o, t, a);
  }
  hittest(t, e, s) {
    return H(s, fo(this.hittestRequest), dr(this, t, e));
  }
}
g([M(fe)], zs.prototype, "mosaicInfo", void 0), g([M(de)], zs.prototype, "localTileOffset", void 0), g([R(0, G(wt)), R(1, G(Tt))], zs.prototype, "vertex", null), g([R(0, G(rc))], zs.prototype, "fragment", null);
const nc = 8388607, oc = 8388608, fp = (i) => i & nc;
function mp(i, t) {
  return ((t ? oc : 0) | i) >>> 0;
}
const _p = { bitset: { isSDF: 0, isMapAligned: 1, scaleSymbolsProportionally: 2, overrideOutlineColor: 3, colorLocked: 4 } };
let Ls = class extends sa {
  constructor(i) {
    super(i), this.debugName = "", this._updatingHandles = new ia(), this._idToUpdatingState = new ra();
  }
  get updating() {
    const i = this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t) => t);
    if (si("esri-2d-log-updating")) {
      const t = Array.from(this._idToUpdatingState.entries()).map(([e, s]) => `-> ${e}: ${s}`).join(`
`);
      console.log(`${this.debugName}: Updating: ${i}
-> Handles: ${this._updatingHandles.updating}
${t}`);
    }
    return i;
  }
  addUpdateTracking(i, t) {
    const e = na(() => t.updating, (s) => this._idToUpdatingState.set(i, s), { sync: !0 });
    this.addHandles(e);
  }
  addPromise(i) {
    return this._updatingHandles.addPromise(i);
  }
};
g([Pr({ constructOnly: !0 })], Ls.prototype, "debugName", void 0), g([Pr({ readOnly: !0 })], Ls.prototype, "updating", null), Ls = g([ea("esri.views.2d.layers.support.UpdateTracking2D")], Ls);
export {
  cu as $,
  ah as A,
  sl as B,
  il as C,
  bu as D,
  Pu as E,
  wu as F,
  dh as G,
  Su as H,
  lh as I,
  k as J,
  M as K,
  Ki as L,
  Rl as M,
  J as N,
  Gn as O,
  rt as P,
  Dr as Q,
  B as R,
  sc as S,
  vt as T,
  ue as U,
  b as V,
  du as W,
  Rt as X,
  A as Y,
  fu as Z,
  lo as _,
  bh as a,
  Bu as a$,
  Eu as a0,
  G as a1,
  T as a2,
  Mt as a3,
  po as a4,
  K as a5,
  li as a6,
  ct as a7,
  jr as a8,
  Zt as a9,
  yu as aA,
  jl as aB,
  tp as aC,
  no as aD,
  et as aE,
  Z as aF,
  xu as aG,
  Wl as aH,
  Gt as aI,
  Au as aJ,
  Fu as aK,
  ns as aL,
  os as aM,
  _r as aN,
  Zs as aO,
  Qs as aP,
  gr as aQ,
  fe as aR,
  bt as aS,
  Yt as aT,
  ho as aU,
  ye as aV,
  Hl as aW,
  cr as aX,
  bo as aY,
  Zl as aZ,
  Tt as a_,
  $t as aa,
  es as ab,
  ur as ac,
  Hu as ad,
  fo as ae,
  le as af,
  Is as ag,
  zs as ah,
  Zi as ai,
  ks as aj,
  Ts as ak,
  Ju as al,
  ss as am,
  H as an,
  Qt as ao,
  ar as ap,
  Br as aq,
  _u as ar,
  pr as as,
  oo as at,
  q as au,
  Ol as av,
  Tl as aw,
  Wi as ax,
  Ll as ay,
  Vt as az,
  ie as b,
  mr as b0,
  fr as b1,
  Kh as b2,
  $l as b3,
  gu as b4,
  ao as b5,
  Yl as b6,
  Js as b7,
  Ul as b8,
  Wr as b9,
  Ph as c,
  Ls as d,
  Mr as e,
  fp as f,
  O as g,
  sh as h,
  va as i,
  hh as j,
  tl as k,
  au as l,
  eu as m,
  nc as n,
  su as o,
  _p as p,
  el as q,
  tu as r,
  mp as s,
  _h as t,
  ou as u,
  Ii as v,
  ic as w,
  qn as x,
  ph as y,
  Jc as z
};
//# sourceMappingURL=UpdateTracking2D-DZd6CIsL.js.map
