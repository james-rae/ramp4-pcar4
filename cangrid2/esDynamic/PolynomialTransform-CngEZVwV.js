import { O as l, P as m, Q as P, bX as $e, cs as os, np as vs, i3 as w, po as ot, pp as H, pq as As, f9 as it, pr as Ts, dY as J, aa as L, km as Ps, eV as Fs, ps as Ns, e9 as St, pt as Wt, pu as $s, pv as is, pw as as, px as Be, py as Is, eH as Mt, pz as Rs, dS as tt, pA as Cs, pB as Ie, pC as Qt, pD as ks, pE as us, nn as Jt, pF as ls, pG as _s, pH as Z, pI as Bs, pJ as jt, pK as js, pL as Ss, pM as Ms, pN as Os, pO as Yt, pP as Ds, pQ as Gs, pR as Es, s as Ot, mw as je, a3 as Se, b8 as zs } from "./main-DHXLMse1.js";
let qt = class extends $e {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
l([m({ json: { write: !0 } })], qt.prototype, "raster", void 0), qt = l([P("esri.layers.support.rasterFunctions.BaseFunctionArguments")], qt);
const D = qt;
var Zt;
let Pt = Zt = class extends D {
  constructor() {
    super(...arguments), this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new Zt({ raster: this.raster, raster2: this.raster2, operation: this.operation });
  }
};
l([m({ json: { write: !0 } })], Pt.prototype, "operation", void 0), l([m({ json: { write: !0 } })], Pt.prototype, "raster2", void 0), l([m({ readOnly: !0 })], Pt.prototype, "rasters", null), Pt = Zt = l([P("esri.layers.support.rasterFunctions.ArithmeticFunctionArguments")], Pt);
const Vs = Pt, Us = /* @__PURE__ */ new Set(["slope", "aspect", "curvature", "hillshade", "shadedrelief", "statistics"]);
let O = class extends $e {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0, this.id = -1, this.isNoopProcess = !1, this.rawInputBandIds = [], this.rawSourceRasterInfos = null, this.isInputBandIdsSwizzled = !1, this.swizzledBandSelection = [], this.isBranch = !1, this._bindingResult = null;
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  get flatWebGLFunctionChain() {
    const t = this.getWebGLProcessorDefinition();
    if (!t) return null;
    const e = [t], { parameters: s } = t;
    let n = s.rasters || s.raster && [s.raster];
    for (; n?.length; ) {
      e.unshift(...n);
      const u = [];
      for (let c = 0; c < n.length; c++) {
        const { parameters: p } = n[c], h = p.rasters || p.raster && [p.raster];
        h?.length && u.push(...h);
      }
      n = u;
    }
    for (let u = e.length - 1; u >= 0; u--) e[u].isNoopProcess && e.splice(u, 1);
    let r = !1;
    for (let u = 0; u < e.length; u++) {
      const c = e[u];
      c.id = e.length - u - 1;
      const { rasters: p } = c.parameters;
      r = r || p != null && p.length > 1;
    }
    const a = e.some(({ name: u }) => Us.has(u.toLowerCase())), { rawSourceRasterInfos: o } = this;
    return { functions: e, hasBranches: r, hasFocalFunction: a, isSourceSingleBand: o?.[0]?.bandCount === 1 };
  }
  bind(t, e = !1, s = -1) {
    this.id = s + 1;
    const n = this._getRasterValues();
    let r = !0;
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      if (o != null && this._isRasterFunctionValue(o)) {
        const u = o.bind(t, e, this.id + a);
        if (!u.success) return this._bindingResult = u, u;
        r = r && u.supportsGPU;
      }
    }
    return !this.rasterInfo || e ? (this.sourceRasterInfos = this._getSourceRasterInfos(t), this._bindingResult = this._bindSourceRasters(), this._bindingResult.success && this._patchRasterInfo(), this._bindingResult.supportsGPU = r && this._bindingResult.supportsGPU, this.processInputBandIds(), this._bindingResult) : (this._bindingResult = { success: !0, supportsGPU: !0 }, this.processInputBandIds(), this._bindingResult);
  }
  process(t) {
    const e = this._getRasterValues(), s = e.length === 0 ? t.pixelBlocks ?? t.primaryPixelBlocks : e.map((n) => this._readRasterValue(n, t));
    return this._processPixels({ ...t, pixelBlocks: s });
  }
  processInputBandIds() {
    const t = this._getRasterValues().filter(this._isRasterFunctionValue);
    let e;
    if (t.length > 1) {
      const r = t.map((o) => o.processInputBandIds()[0]);
      this.rawInputBandIds = r, this.isInputBandIdsSwizzled = this.rawInputBandIds.some((o, u) => o !== u);
      const a = t.filter((o) => o.functionName === "ExtractBand");
      return a.length && a.forEach((o, u) => {
        o.isInputBandIdsSwizzled = !0, o.swizzledBandSelection = [u, u, u];
      }), this.rawInputBandIds;
    }
    const s = t[0];
    if (s) {
      if (e = s.processInputBandIds(), s.isInputBandIdsSwizzled) return this.rawInputBandIds = e, e;
    } else {
      e = [];
      const { bandCount: r } = this.sourceRasterInfos[0];
      for (let a = 0; a < r; a++) e.push(a);
    }
    const n = this._getInputBandIds(e);
    return this.isInputBandIdsSwizzled = n.some((r, a) => r !== a), this.rawInputBandIds = n, this.rawInputBandIds;
  }
  getPrimaryRasters() {
    const t = [], e = [];
    return this._getPrimaryRasters(this, t, e), { rasters: t, rasterIds: e };
  }
  getWebGLProcessorDefinition() {
    const t = this._getWebGLParameters(), { raster: e, rasters: s } = this.functionArguments;
    return s && Array.isArray(s) && s.length ? (t.rasters = s.map((n) => this._isRasterFunctionValue(n) ? n.getWebGLProcessorDefinition() : typeof n == "number" ? { name: "Constant", parameters: { value: n }, pixelType: "f32", id: -1, isNoopProcess: !1 } : { name: "Identity", parameters: { value: n }, pixelType: "f32", id: -1, isNoopProcess: !1 }), t.rasters.some((n) => n != null) || (t.rasters = null)) : this._isRasterFunctionValue(e) && (t.raster = e.getWebGLProcessorDefinition()), { name: this.functionName, parameters: t, pixelType: this.outputPixelType, id: this.id, isNoopProcess: this.isNoopProcess };
  }
  getClippingGeometries() {
    const t = [];
    this.functionName === "Clip" && t.push(this.functionArguments);
    const { raster: e, rasters: s } = this.functionArguments;
    if (s && Array.isArray(s) && s.length) s.forEach((n) => {
      if (this._isRasterFunctionValue(n)) {
        const r = n.getClippingGeometries();
        t.push(...r);
      }
    });
    else if (this._isRasterFunctionValue(e)) {
      const n = e.getClippingGeometries();
      t.push(...n);
    }
    return t;
  }
  _getOutputPixelType(t) {
    return this.outputPixelType === "unknown" ? t : this.outputPixelType ?? t;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t) {
    return t;
  }
  _removeStatsHistColormapVAT(t) {
    t.statistics = null, t.histograms = null, t.colormap = null, t.attributeTable = null;
  }
  _getRasterValues() {
    const { rasterArgumentNames: t } = this;
    return t[0] === "rasters" ? this.functionArguments.rasters ?? [] : t.flatMap((e) => this.functionArguments[e]);
  }
  _getSourceRasterInfos(t) {
    const e = this._getRasterValues(), { rasterInfos: s, rasterIds: n } = t;
    if (e.length === 0) return s;
    const r = e.map((o) => o && typeof o == "object" && "bind" in o && o.rasterInfo ? o.rasterInfo : typeof o == "string" && n.includes(o) ? s[n.indexOf(o)] : typeof o != "number" ? s[0] : void 0), a = r.find((o) => o) ?? s[0];
    return r.forEach((o, u) => {
      o === void 0 && (r[u] = a);
    }), r;
  }
  _getPrimaryRasterId(t) {
    return t?.rasterId;
  }
  _getPrimaryRasters(t, e = [], s = []) {
    for (let n = 0; n < t.sourceRasters.length; n++) {
      const r = t.sourceRasters[n];
      if (typeof r != "number") if ("bind" in r) this._getPrimaryRasters(r, e, s);
      else {
        const a = r, o = this._getPrimaryRasterId(a);
        if (o == null) continue;
        s.includes(o) || (this.mainPrimaryRasterId === o ? (e.unshift(a), s.unshift(o)) : (e.push(a), s.push(o)));
      }
    }
  }
  _isRasterFunctionValue(t) {
    return t != null && typeof t == "object" && "getWebGLProcessorDefinition" in t;
  }
  _readRasterValue(t, e) {
    const { primaryPixelBlocks: s } = e;
    if (t == null || t === "$$") {
      const n = s[0];
      return n == null ? null : n.clone();
    }
    if (typeof t == "string") {
      const n = e.primaryRasterIds.indexOf(t);
      return n === -1 ? null : s[n];
    }
    if (typeof t == "number") {
      const n = s[0];
      if (n == null) return null;
      const { width: r, height: a, pixelType: o } = n, u = new Float32Array(r * a);
      u.fill(t);
      const c = this.sourceRasterInfos[0].bandCount, p = new Array(c).fill(u);
      return new w({ width: r, height: a, pixelType: o, pixels: p });
    }
    return t.process(e);
  }
  _patchRasterInfo() {
    const { rasterInfo: t } = this;
    if (!t?.keyProperties) return;
    const { bandCount: e, keyProperties: s, statistics: n, histograms: r } = t, a = s.BandProperties;
    a && a.length !== e && (t.keyProperties = { ...s, BandProperties: void 0 }), n && n.length !== e && (t.statistics = n.length > e ? n.slice(0, e) : null), r && r.length !== e && (t.histograms = r.length > e ? r.slice(0, e) : null), s.BAND_COUNT && Number(s.BAND_COUNT) !== e && (t.keyProperties = { ...s, BAND_COUNT: typeof s.BAND_COUNT == "string" ? String(e) : e });
  }
};
l([m({ json: { write: !0 } })], O.prototype, "functionName", void 0), l([m({ json: { write: !0 } })], O.prototype, "functionArguments", void 0), l([m()], O.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } }), os((i) => i?.toLowerCase())], O.prototype, "outputPixelType", void 0), l([m({ json: { write: !0 } })], O.prototype, "mainPrimaryRasterId", void 0), l([m()], O.prototype, "sourceRasters", void 0), l([m({ type: [vs], json: { write: !0 } })], O.prototype, "sourceRasterInfos", void 0), l([m({ json: { write: !0 } })], O.prototype, "rasterInfo", void 0), l([m({ json: { write: !0 } })], O.prototype, "readingBufferSize", void 0), l([m({ json: { write: !0 } })], O.prototype, "id", void 0), l([m()], O.prototype, "isNoopProcess", void 0), l([m()], O.prototype, "supportsGPU", null), l([m()], O.prototype, "rawInputBandIds", void 0), l([m()], O.prototype, "rawSourceRasterInfos", void 0), l([m()], O.prototype, "isInputBandIdsSwizzled", void 0), l([m()], O.prototype, "swizzledBandSelection", void 0), l([m()], O.prototype, "isBranch", void 0), l([m({ readOnly: !0 })], O.prototype, "flatWebGLFunctionChain", null), l([m()], O.prototype, "_bindingResult", void 0), O = l([P("esri.layers.support.rasterFunctions.BaseRasterFunction")], O);
const G = O, C = { userDefined: -1, lineDetectionHorizontal: 0, lineDetectionVertical: 1, lineDetectionLeftDiagonal: 2, lineDetectionRightDiagonal: 3, gradientNorth: 4, gradientWest: 5, gradientEast: 6, gradientSouth: 7, gradientNorthEast: 8, gradientNorthWest: 9, smoothArithmeticMean: 10, smoothing3x3: 11, smoothing5x5: 12, sharpening3x3: 13, sharpening5x5: 14, laplacian3x3: 15, laplacian5x5: 16, sobelHorizontal: 17, sobelVertical: 18, sharpen: 19, sharpen2: 20, pointSpread: 21, none: 255 }, Ls = { plus: 1, minus: 2, times: 3, sqrt: 4, power: 5, abs: 10, divide: 23, exp: 25, exp10: 26, exp2: 27, int: 30, float: 32, ln: 35, log10: 36, log2: 37, mod: 44, negate: 45, roundDown: 48, roundUp: 49, square: 53, floatDivide: 64, floorDivide: 65 }, U = { bitwiseAnd: 11, bitwiseLeftShift: 12, bitwiseNot: 13, bitwiseOr: 14, bitwiseRightShift: 15, bitwiseXOr: 16, booleanAnd: 17, booleanNot: 18, booleanOr: 19, booleanXOr: 20, equalTo: 24, greaterThan: 28, greaterThanEqual: 29, lessThan: 33, lessThanEqual: 34, isNull: 31, notEqual: 46 }, X = { acos: 6, asin: 7, atan: 8, atanh: 9, cos: 21, cosh: 22, sin: 51, sinh: 52, tan: 56, tanh: 57, acosh: 59, asinh: 60, atan2: 61 }, Ws = { majority: 38, max: 39, mean: 40, med: 41, min: 42, minority: 43, range: 47, stddev: 54, sum: 55, variety: 58, majorityIgnoreNoData: 66, maxIgnoreNoData: 67, meanIgnoreNoData: 68, medIgnoreNoData: 69, minIgnoreNoData: 70, minorityIgnoreNoData: 71, rangeIgnoreNoData: 72, stddevIgnoreNoData: 73, sumIgnoreNoData: 74, varietyIgnoreNoData: 75 }, cs = { setNull: 50, conditional: 78 }, Me = { ...Ls, ...U, ...X, ...Ws, ...cs }, ps = /* @__PURE__ */ new Map([[X.acos, { domain: [0, Math.PI], isInteger: !1 }], [X.asin, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: !1 }], [X.atan, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: !1 }], [X.cos, { domain: [-1, 1], isInteger: !1 }], [X.sin, { domain: [-1, 1], isInteger: !1 }], [U.booleanAnd, { domain: [0, 1], isInteger: !0 }], [U.booleanNot, { domain: [0, 1], isInteger: !0 }], [U.booleanOr, { domain: [0, 1], isInteger: !0 }], [U.booleanXOr, { domain: [0, 1], isInteger: !0 }], [U.equalTo, { domain: [0, 1], isInteger: !0 }], [U.notEqual, { domain: [0, 1], isInteger: !0 }], [U.greaterThan, { domain: [0, 1], isInteger: !0 }], [U.greaterThanEqual, { domain: [0, 1], isInteger: !0 }], [U.lessThan, { domain: [0, 1], isInteger: !0 }], [U.lessThanEqual, { domain: [0, 1], isInteger: !0 }], [U.isNull, { domain: [0, 1], isInteger: !0 }]]);
function Oe(i) {
  return ps.get(i);
}
const De = [0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2, 999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3];
function qs(i, t = !1) {
  const e = i.map((o) => o.mask), s = e.filter((o) => o != null), n = i[0].pixels[0].length;
  if (s.length === 0 || t && s.length !== e.length) return new Uint8Array(n).fill(255);
  const r = s[0], a = new Uint8Array(r);
  if (s.length === 1) return a;
  if (!t) {
    for (let o = 1; o < s.length; o++) {
      const u = s[o];
      for (let c = 0; c < a.length; c++) a[c] && (a[c] = u[c] ? 255 : 0);
    }
    return a;
  }
  for (let o = 1; o < s.length; o++) {
    const u = s[o];
    for (let c = 0; c < a.length; c++) a[c] === 0 && (a[c] = u[c] ? 255 : 0);
  }
  return a;
}
function Hs(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] + n[o]);
  return a;
}
function Xs(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand("f32", n);
  return r.set(s), r;
}
function Ks(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  for (let a = 0; a < n; a++) t && !t[a] || (r[a] = s[a] * s[a]);
  return r;
}
function Js(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] - n[o]);
  return a;
}
function Ys(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] * n[o]);
  return a;
}
function Qs(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  for (let a = 0; a < n; a++) t && !t[a] || (r[a] = Math.sign(s[a]) * Math.floor(Math.abs(s[a])));
  return r;
}
function hs(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] / n[o]);
  return a;
}
function Zs(i, t, e) {
  return hs(i, t, "f32");
}
function tn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = Math.floor(s[o] / n[o]));
  return a;
}
function en(i, t, e, s) {
  const n = i[0], r = n.length, a = w.createEmptyBand(e, r);
  if (s === X.atanh) {
    for (let u = 0; u < r; u++) if (t[u]) {
      const c = n[u];
      Math.abs(c) >= 1 ? t[u] = 0 : a[u] = Math.atanh(c);
    }
    return a;
  }
  const o = s === X.asin ? Math.asin : Math.acos;
  for (let u = 0; u < r; u++) if (t[u]) {
    const c = n[u];
    Math.abs(c) > 1 ? t[u] = 0 : a[u] = o(c);
  }
  return a;
}
function sn(i, t, e, s) {
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s(n[o]));
  return a;
}
function nn(i, t, e, s) {
  const [n, r] = i, a = n.length, o = w.createEmptyBand(e, a);
  for (let u = 0; u < a; u++) t && !t[u] || (o[u] = s(n[u], r[u]));
  return o;
}
function rn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] & n[o]);
  return a;
}
function on(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] << n[o]);
  return a;
}
function an(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  for (let a = 0; a < n; a++) t && !t[a] || (r[a] = ~s[a]);
  return r;
}
function un(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] | n[o]);
  return a;
}
function ln(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] >> n[o]);
  return a;
}
function cn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] ^ n[o]);
  return a;
}
function pn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] && n[o] ? 1 : 0);
  return a;
}
function hn(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  for (let a = 0; a < n; a++) t && !t[a] || (r[a] = s[a] ? 0 : 1);
  return r;
}
function mn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] || n[o] ? 1 : 0);
  return a;
}
function fn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = (s[o] ? 1 : 0) ^ (n[o] ? 1 : 0));
  return a;
}
function dn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] === n[o] ? 1 : 0);
  return a;
}
function Re(i, t, e, s) {
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r), o = s === Math.E;
  for (let u = 0; u < r; u++) t && !t[u] || (a[u] = o ? Math.exp(n[u]) : s ** n[u]);
  return a;
}
function gn(i, t, e) {
  return Re(i, t, e, 10);
}
function yn(i, t, e) {
  return Re(i, t, e, 2);
}
function xn(i, t, e) {
  return Re(i, t, e, Math.E);
}
function Ce(i, t, e, s) {
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (n[o] <= 0 ? t[o] = 0 : a[o] = s(n[o]));
  return a;
}
function bn(i, t, e) {
  return Ce(i, t, e, Math.log10);
}
function wn(i, t, e) {
  return Ce(i, t, e, Math.log2);
}
function vn(i, t, e) {
  return Ce(i, t, e, Math.log);
}
function An(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] > n[o] ? 1 : 0);
  return a;
}
function Tn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] >= n[o] ? 1 : 0);
  return a;
}
function Pn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] < n[o] ? 1 : 0);
  return a;
}
function Fn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] <= n[o] ? 1 : 0);
  return a;
}
function Nn(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  if (!t) return r;
  for (let a = 0; a < n; a++) r[a] = t[a] ? 0 : 1;
  return r;
}
function $n(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] % n[o]);
  return a;
}
function In(i, t, e) {
  const [s] = i, n = s.length, r = w.createEmptyBand(e, n);
  for (let a = 0; a < n; a++) t && !t[a] || (r[a] = -s[a]);
  return r;
}
function Rn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t && !t[o] || (a[o] = s[o] === n[o] ? 0 : 1);
  return a;
}
function Cn(i, t, e) {
  const [s, n] = i, r = s.length, a = w.createEmptyBand(e, r), o = new Uint8Array(r);
  for (let u = 0; u < r; u++) t != null && !t[u] || s[u] !== 0 || (a[u] = n[u], o[u] = 255);
  return { band: a, mask: o };
}
function Ge(i, t, e) {
  const [s, n, r] = i, a = s.length, o = w.createEmptyBand(e, a);
  for (let u = 0; u < a; u++) t && !t[u] || (o[u] = s[u] ? n[u] : r[u]);
  return o;
}
function Ee(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u = n[o];
    for (let c = 1; c < s; c++) {
      const p = i[c][o];
      u < p && (u = p);
    }
    a[o] = u;
  }
  return a;
}
function ze(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u = n[o];
    for (let c = 1; c < s; c++) {
      const p = i[c][o];
      u > p && (u = p);
    }
    a[o] = u;
  }
  return a;
}
function Ve(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u = n[o], c = u;
    for (let p = 1; p < s; p++) {
      const h = i[p][o];
      c < h ? c = h : u > h && (u = h);
    }
    a[o] = c - u;
  }
  return a;
}
function Ue(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u = 0;
    for (let c = 0; c < s; c++) u += i[c][o];
    a[o] = u / s;
  }
  return a;
}
function Le(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) for (let u = 0; u < s; u++) {
    const c = i[u];
    a[o] += c[o];
  }
  return a;
}
function We(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    const u = new Float32Array(s);
    let c = 0;
    for (let h = 0; h < s; h++) {
      const f = i[h];
      c += f[o], u[h] = f[o];
    }
    c /= s;
    let p = 0;
    for (let h = 0; h < s; h++) p += (u[h] - c) ** 2;
    a[o] = Math.sqrt(p / s);
  }
  return a;
}
function qe(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const n = Math.floor(s / 2), [r] = i, a = r.length, o = w.createEmptyBand(e, a), u = new Float32Array(s), c = s % 2 == 1;
  for (let p = 0; p < a; p++) if (!t || t[p]) {
    for (let h = 0; h < s; h++) u[h] = i[h][p];
    u.sort(), o[p] = c ? u[n] : (u[n] + u[n - 1]) / 2;
  }
  return o;
}
function ms(i, t, e) {
  const [s, n] = i;
  if (n == null) return s;
  const r = s.length, a = w.createEmptyBand(e, r);
  for (let o = 0; o < r; o++) t[o] && (s[o] === n[o] ? a[o] = s[o] : t[o] = 0);
  return a;
}
function He(i, t, e) {
  const s = i.length;
  if (s <= 2) return ms(i, t, e);
  const n = i[0].length, r = w.createEmptyBand(e, n), a = /* @__PURE__ */ new Map();
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u;
    a.clear();
    for (let h = 0; h < s; h++) u = i[h][o], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
    let c = 0, p = 0;
    for (const h of a.keys()) c = a.get(h), c > p && (p = c, u = h);
    r[o] = u;
  }
  return r;
}
function Xe(i, t, e) {
  const s = i.length;
  if (s <= 2) return ms(i, t, e);
  const n = i[0].length, r = w.createEmptyBand(e, n), a = /* @__PURE__ */ new Map();
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u;
    a.clear();
    for (let h = 0; h < s; h++) u = i[h][o], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
    let c = 0, p = i.length;
    for (const h of a.keys()) c = a.get(h), c < p && (p = c, u = h);
    r[o] = u;
  }
  return r;
}
function Ke(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [n] = i, r = n.length, a = w.createEmptyBand(e, r), o = /* @__PURE__ */ new Set();
  for (let u = 0; u < r; u++) if (!t || t[u]) {
    let c;
    o.clear();
    for (let p = 0; p < s; p++) c = i[p][u], o.add(c);
    a[u] = o.size;
  }
  return a;
}
const E = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
function kn() {
  E.size || (E.set(4, Math.sqrt), E.set(6, Math.acos), E.set(7, Math.asin), E.set(8, Math.atan), E.set(9, Math.atanh), E.set(10, Math.abs), E.set(21, Math.cos), E.set(22, Math.cosh), E.set(48, Math.floor), E.set(49, Math.ceil), E.set(51, Math.sin), E.set(52, Math.sinh), E.set(56, Math.tan), E.set(57, Math.tanh), E.set(59, Math.acosh), E.set(60, Math.asinh), E.set(65, Math.floor), Kt.set(5, Math.pow), Kt.set(61, Math.atan2), $.set(1, Hs), $.set(2, Js), $.set(3, Ys), $.set(11, rn), $.set(12, on), $.set(13, an), $.set(14, un), $.set(15, ln), $.set(16, cn), $.set(17, pn), $.set(18, hn), $.set(19, mn), $.set(20, fn), $.set(23, hs), $.set(24, dn), $.set(25, xn), $.set(26, gn), $.set(27, yn), $.set(28, An), $.set(29, Tn), $.set(30, Qs), $.set(31, Nn), $.set(32, Xs), $.set(33, Pn), $.set(34, Fn), $.set(35, vn), $.set(36, bn), $.set(37, wn), $.set(44, $n), $.set(45, In), $.set(46, Rn), $.set(53, Ks), $.set(64, Zs), $.set(65, tn), $.set(76, Ge), $.set(78, Ge), S.set(38, He), S.set(39, Ee), S.set(40, Ue), S.set(41, qe), S.set(42, ze), S.set(43, Xe), S.set(47, Ve), S.set(54, We), S.set(55, Le), S.set(58, Ke), S.set(66, He), S.set(67, Ee), S.set(68, Ue), S.set(69, qe), S.set(70, ze), S.set(71, Xe), S.set(72, Ve), S.set(73, We), S.set(74, Le), S.set(75, Ke));
}
function _n(i, t, e, s) {
  let [n, r] = ot(e);
  const a = H(e);
  a && (n -= 1e-5, r += 1e-5);
  for (let o = 0; o < t.length; o++) if (t[o]) {
    const u = i[o];
    isNaN(u) || u < n || u > r ? t[o] = 0 : s[o] = a ? Math.round(u) : u;
  }
}
function fs(i, t, e = {}) {
  kn();
  let s = qs(i, t >= 66 && t <= 75);
  const { outputPixelType: n = "f32" } = e, r = !S.has(t) || e.processAsMultiband, a = r ? i[0].pixels.length : 1, o = [];
  for (let c = 0; c < a; c++) {
    const p = S.has(t) && !r ? i.flatMap((d) => d.pixels) : i.map((d) => d.pixels[c]);
    let h, f = !0;
    if (t === cs.setNull) {
      const d = Cn(p, s, n);
      h = d.band, s = d.mask, f = !1;
    } else $.has(t) ? h = $.get(t)(p, s, "f64") : E.has(t) ? h = t === X.asin || t === X.acos || t === X.atanh ? en(p, s, "f64", t) : sn(p, s, "f64", E.get(t)) : Kt.has(t) ? h = nn(p, s, "f64", Kt.get(t)) : S.has(t) ? h = S.get(t)(p, s, "f64") : (h = p[0], f = !1);
    if (f && t !== U.isNull && !ps.has(t)) {
      const d = w.createEmptyBand(n, h.length);
      s || (s = new Uint8Array(h.length).fill(255)), _n(h, s, n, d), h = d;
    }
    o.push(h);
  }
  const u = i[0];
  return new w({ width: u.width, height: u.height, pixelType: n, mask: t === U.isNull ? null : s, pixels: o });
}
function Bn(i, t, e) {
  return fs(i, t = [null, 1, 2, 3, 23, 5, 44][t] ?? 1, { outputPixelType: e });
}
let Ft = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Arithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const { operation: t } = this.functionArguments;
    if (t < 1 || t > 6) return { success: !1, supportsGPU: !1, error: "unsupported operation" };
    const e = this.sourceRasterInfos[0].clone();
    return this.outputPixelType = this._getOutputPixelType(e.pixelType), e.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e), this.rasterInfo = e, { success: !0, supportsGPU: e.bandCount <= 3 };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e?.[0] == null || e?.[1] == null ? null : Bn(e, this.functionArguments.operation, this.outputPixelType);
  }
  _getWebGLParameters() {
    const { operation: t } = this.functionArguments, e = ["", "plus", "minus", "times", "divide", "power", "mod"][t], s = this.outputPixelType ?? "f32";
    let [n, r] = ot(s);
    const a = H(s);
    return a && (n -= 1e-4, r += 1e-4), { imageCount: 2, operationName: e, domainRange: [n, r], isOutputRounded: a };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Ft.prototype, "functionName", void 0), l([m({ type: Vs, json: { write: !0, name: "rasterFunctionArguments" } })], Ft.prototype, "functionArguments", void 0), l([m()], Ft.prototype, "rasterArgumentNames", void 0), Ft = l([P("esri.layers.support.rasterFunctions.ArithmeticFunction")], Ft);
const jn = Ft;
var te;
let ee = te = class extends D {
  clone() {
    return new te({ raster: this.raster });
  }
};
ee = te = l([P("esri.layers.support.rasterFunctions.AspectFunctionArguments")], ee);
const Sn = ee;
let at = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.isGCS = t.spatialReference?.isGeographic ?? !1, this.outputPixelType = this._getOutputPixelType("f32");
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.statistics = [{ min: -1, max: 360, avg: 180, stddev: 30 }], e.histograms = null, e.colormap = null, e.attributeTable = null, e.bandCount = 1, this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { extent: s, primaryPixelSizes: n } = t, r = n?.[0], a = r ?? (s ? { x: s.width / e.width, y: s.height / e.height } : { x: 1, y: 1 });
    return As(e, { resolution: a });
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], at.prototype, "functionName", void 0), l([m({ type: Sn, json: { write: !0, name: "rasterFunctionArguments" } })], at.prototype, "functionArguments", void 0), l([m()], at.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], at.prototype, "isGCS", void 0), at = l([P("esri.layers.support.rasterFunctions.AspectFunction")], at);
const Mn = at, On = /* @__PURE__ */ new Set(["+", "-", "*", "/", "(", ")"]);
function Dn(i, t) {
  (i = i.replaceAll(" ", "")).startsWith("-") && (i = "0" + i), i.startsWith("+") && (i = i.slice(1, i.length));
  const e = i.split(""), s = [], n = [];
  let r = "";
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    On.has(o) ? (r.length && n.push(Je(r, t)), s.push(o), r = "") : r = r.concat(o);
  }
  return r.length && n.push(Je(r, t)), { ops: s, nums: n };
}
function Je(i, t) {
  return i.toLowerCase().startsWith("b") ? t[parseInt(i.slice(1), 10) - 1] : parseFloat(i);
}
function Gn(i, t, e, s) {
  if (typeof e == "number" && typeof s == "number") return e + s;
  let n, r, a;
  typeof e == "number" ? (a = s, n = a.length, r = new Float32Array(n), r.fill(e)) : (n = e.length, r = e, s.constructor === Number ? (a = new Float32Array(n), a.fill(s)) : a = s);
  const o = new Float32Array(n);
  switch (t) {
    case "+":
      for (let u = 0; u < n; u++) (i == null || i[u]) && (o[u] = r[u] + a[u]);
      break;
    case "-":
      for (let u = 0; u < n; u++) (i == null || i[u]) && (o[u] = r[u] - a[u]);
      break;
    case "*":
      for (let u = 0; u < n; u++) (i == null || i[u]) && (o[u] = r[u] * a[u]);
      break;
    case "/":
      for (let u = 0; u < n; u++) (i == null || i[u]) && a[u] && (o[u] = r[u] / a[u]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return o;
}
function En(i, t) {
  i.splice(t, 1);
  let e = 0, s = 0;
  do {
    e = 0, s = 0;
    for (let n = 0; n < i.length; n++) if (i[n] === "(") e = n;
    else if (i[n] === ")") {
      s = n;
      break;
    }
    s === e + 1 && i.splice(e, 2);
  } while (s === e + 1);
  return i;
}
function zn(i) {
  if (i.length === 1) return { opIndex: 0, numIndex: 0 };
  let t = 0, e = 0;
  for (let a = 0; a < i.length; a++) if (i[a] === "(") t = a;
  else if (i[a] === ")") {
    e = a;
    break;
  }
  const s = e === 0 ? i : i.slice(t + 1, e);
  let n = -1;
  for (let a = 0; a < s.length; a++) if (s[a] === "*" || s[a] === "/") {
    n = a;
    break;
  }
  if (n > -1) e > 0 && (n += t + 1);
  else {
    for (let a = 0; a < s.length; a++) if (s[a] === "+" || s[a] === "-") {
      n = a;
      break;
    }
    e > 0 && (n += t + 1);
  }
  let r = 0;
  for (let a = 0; a < n; a++) i[a] === "(" && r++;
  return { opIndex: n, numIndex: n - r };
}
function Vn(i, t, e) {
  let s, { ops: n, nums: r } = Dn(e, t);
  if (n.length === 0) {
    const a = r.length === 1 ? r[0] : t[0];
    if (a instanceof Float32Array) return [a];
    const o = new Float32Array(t[0].length);
    return typeof a == "number" ? o.fill(a) : o.set(a), [o];
  }
  for (; n.length > 0; ) {
    const { numIndex: a, opIndex: o } = zn(n);
    if (s = Gn(i, n[o], r[a], r[a + 1]), n.length === 1) break;
    n = En(n, o), r.splice(a, 2, s);
  }
  return [s];
}
const Un = new it({ 0: "custom", 1: "ndvi", 2: "savi", 3: "tsavi", 4: "msavi", 5: "gemi", 6: "pvi", 7: "gvitm", 8: "sultan", 9: "vari", 10: "gndvi", 11: "sr", 12: "ndvi-re", 13: "sr-re", 14: "mtvi2", 15: "rtvi-core", 16: "ci-re", 17: "ci-g", 18: "ndwi", 19: "evi", 20: "iron-oxide", 21: "ferrous-minerals", 22: "clay-minerals", 23: "wndwi", 24: "bai", 25: "nbr", 26: "ndbi", 27: "ndmi", 28: "ndsi", 29: "mndwi" }, { useNumericKeys: !0 });
function Ln(i, t) {
  if (!Ts(i)) return i;
  const { equation: e, method: s } = t, n = t.bandIndexes.map((p) => p - 1), { pixels: r, mask: a } = i;
  let o;
  switch (s) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      o = Ye(a, r[n[0]], r[n[1]]);
      break;
    case "ndwi":
      o = Ye(a, r[n[1]], r[n[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      o = qn(a, r[n[0]], r[n[1]]);
      break;
    case "ci-g":
    case "ci-re":
      o = Hn(a, r[n[0]], r[n[1]]);
      break;
    case "savi":
      o = Xn(a, r[n[0]], r[n[1]], n[2] + 1);
      break;
    case "tsavi":
      o = Kn(a, r[n[0]], r[n[1]], n[2] + 1, n[3] + 1, n[4] + 1);
      break;
    case "msavi":
      o = Jn(a, r[n[0]], r[n[1]]);
      break;
    case "gemi":
      o = Yn(a, r[n[0]], r[n[1]]);
      break;
    case "pvi":
      o = Qn(a, r[n[0]], r[n[1]], n[2] + 1, n[3] + 1);
      break;
    case "gvitm":
      o = Zn(a, [r[n[0]], r[n[1]], r[n[2]], r[n[3]], r[n[4]], r[n[5]]]);
      break;
    case "sultan":
      o = tr(a, [r[n[0]], r[n[1]], r[n[2]], r[n[3]], r[n[4]]]);
      break;
    case "vari":
      o = er(a, [r[n[0]], r[n[1]], r[n[2]]]);
      break;
    case "mtvi2":
      o = sr(a, [r[n[0]], r[n[1]], r[n[2]]]);
      break;
    case "rtvi-core":
      o = nr(a, [r[n[0]], r[n[1]], r[n[2]]]);
      break;
    case "evi":
      o = rr(a, [r[n[0]], r[n[1]], r[n[2]]]);
      break;
    case "wndwi":
      o = or(a, [r[n[0]], r[n[1]], r[n[2]]], n[3] ? n[3] + 1 : 0.5);
      break;
    case "bai":
      o = ir(a, r[n[0]], r[n[1]]);
      break;
    case "custom":
      o = Vn(a, r, e);
      break;
    default:
      return i;
  }
  const u = a != null ? new Uint8Array(a.length) : null;
  a != null && u != null && u.set(a);
  const c = new w({ width: i.width, height: i.height, pixelType: "f32", pixels: o, mask: u });
  return c.updateStatistics(), c;
}
function Wn(i, t, e, s) {
  const { mask: n, pixels: r, width: a, height: o } = i, u = r[e], c = r[t], p = c.length, h = s ? new Uint8Array(p) : new Float32Array(p), f = s ? 100 : 1, d = s ? 100.5 : 0;
  for (let x = 0; x < p; x++) if (n == null || n[x]) {
    const y = u[x], b = c[x], A = y + b;
    A && (h[x] = (y - b) / A * f + d);
  }
  const g = new w({ width: a, height: o, mask: n, pixelType: s ? "u8" : "f32", pixels: [h] });
  return g.updateStatistics(), g;
}
function z(i) {
  const t = new Float32Array(9);
  return t[3 * i[0]] = 1, t[3 * i[1] + 1] = 1, t[3 * i[2] + 2] = 1, t;
}
function Ye(i, t, e) {
  const s = e.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) {
    const a = t[r], o = e[r], u = a + o;
    u && (n[r] = (a - o) / u);
  }
  return [n];
}
function qn(i, t, e) {
  const s = e.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) {
    const a = t[r], o = e[r];
    o && (n[r] = a / o);
  }
  return [n];
}
function Hn(i, t, e) {
  const s = t.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) {
    const a = t[r], o = e[r];
    o && (n[r] = a / o - 1);
  }
  return [n];
}
function Xn(i, t, e, s) {
  const n = e.length, r = new Float32Array(n);
  for (let a = 0; a < n; a++) if (i == null || i[a]) {
    const o = e[a], u = t[a], c = u + o + s;
    c && (r[a] = (u - o) / c * (1 + s));
  }
  return [r];
}
function Kn(i, t, e, s, n, r) {
  const a = e.length, o = new Float32Array(a), u = -n * s + r * (1 + s * s);
  for (let c = 0; c < a; c++) if (i == null || i[c]) {
    const p = e[c], h = t[c], f = n * h + p + u;
    f && (o[c] = s * (h - s * p - n) / f);
  }
  return [o];
}
function Jn(i, t, e) {
  const s = e.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) {
    const a = e[r], o = t[r], u = 2 * o + 1;
    n[r] = 0.5 * (u - Math.sqrt(u * u - 8 * (o - a)));
  }
  return [n];
}
function Yn(i, t, e) {
  const s = e.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) {
    const a = e[r], o = t[r];
    if (a !== 1 && o + a + 0.5 !== 0) {
      const u = (2 * (o * o - a * a) + 1.5 * o + 0.5 * a) / (o + a + 0.5);
      n[r] = u * (1 - 0.25 * u) - (a - 0.125) / (1 - a);
    }
  }
  return [n];
}
function Qn(i, t, e, s, n) {
  const r = e.length, a = new Float32Array(r), o = 1 / Math.sqrt(1 + s * s);
  for (let u = 0; u < r; u++) if (i == null || i[u]) {
    const c = e[u], p = t[u];
    a[u] = (p - s * c - n) * o;
  }
  return [a];
}
function Zn(i, t) {
  const [e, s, n, r, a, o] = t, u = e.length, c = new Float32Array(u);
  for (let p = 0; p < u; p++) (i == null || i[p]) && (c[p] = -0.2848 * e[p] - 0.2435 * s[p] - 0.5436 * n[p] + 0.7243 * r[p] + 0.084 * a[p] - 0.18 * o[p]);
  return [c];
}
function tr(i, t) {
  const [e, s, n, r, a] = t, o = e.length, u = new Float32Array(o), c = new Float32Array(o), p = new Float32Array(o);
  for (let h = 0; h < o; h++) (i == null || i[h]) && (u[h] = a[h] ? r[h] / a[h] * 100 : 0, c[h] = e[h] ? r[h] / e[h] * 100 : 0, p[h] = n[h] ? s[h] / n[h] * (r[h] / n[h]) * 100 : 0);
  return [u, c, p];
}
function er(i, t) {
  const [e, s, n] = t, r = e.length, a = new Float32Array(r);
  for (let o = 0; o < r; o++) if (i == null || i[o]) for (o = 0; o < r; o++) {
    const u = e[o], c = s[o], p = c + u - n[o];
    p && (a[o] = (c - u) / p);
  }
  return [a];
}
function sr(i, t) {
  const [e, s, n] = t, r = e.length, a = new Float32Array(r);
  for (let o = 0; o < r; o++) if (i == null || i[o]) for (o = 0; o < r; o++) {
    const u = e[o], c = s[o], p = n[o], h = Math.sqrt((2 * u + 1) ** 2 - (6 * u - 5 * Math.sqrt(c)) - 0.5);
    if (h) {
      const f = 1.5 * (1.2 * (u - p) - 2.5 * (c - p));
      a[o] = f / h;
    }
  }
  return [a];
}
function nr(i, t) {
  const [e, s, n] = t, r = e.length, a = new Float32Array(r);
  for (let o = 0; o < r; o++) if (i == null || i[o]) for (o = 0; o < r; o++) {
    const u = e[o], c = s[o], p = n[o];
    a[o] = 100 * (u - c) - 10 * (u - p);
  }
  return [a];
}
function rr(i, t) {
  const [e, s, n] = t, r = e.length, a = new Float32Array(r);
  for (let o = 0; o < r; o++) if (i == null || i[o]) for (o = 0; o < r; o++) {
    const u = e[o], c = s[o], p = u + 6 * c - 7.5 * n[o] + 1;
    p && (a[o] = 2.5 * (u - c) / p);
  }
  return [a];
}
function or(i, t, e = 0.5) {
  const [s, n, r] = t, a = n.length, o = new Float32Array(a);
  for (let u = 0; u < a; u++) if (i == null || i[u]) for (u = 0; u < a; u++) {
    const c = s[u], p = n[u], h = r[u], f = c + e * p + (1 - e) * h;
    f && (o[u] = (c - e * p - (1 - e) * h) / f);
  }
  return [o];
}
function ir(i, t, e) {
  const s = e.length, n = new Float32Array(s);
  for (let r = 0; r < s; r++) if (i == null || i[r]) for (r = 0; r < s; r++) {
    const a = (0.1 - t[r]) ** 2 + (0.06 - e[r]) ** 2;
    a && (n[r] = 1 / a);
  }
  return [n];
}
var se;
let Gt = se = class extends D {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new se({ method: this.method, bandIndexes: this.bandIndexes, raster: L(this.raster) });
  }
};
l([m({ json: { type: String, write: !0 } })], Gt.prototype, "bandIndexes", void 0), l([J(Un)], Gt.prototype, "method", void 0), Gt = se = l([P("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], Gt);
const ar = Gt, ur = /* @__PURE__ */ new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
let Nt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0];
    if (t.bandCount < 2) return { success: !1, supportsGPU: !1, error: "band-arithmetic-function: source raster has insufficient amount of raster bands" };
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.bandCount = this.functionArguments.method === "sultan" ? 3 : 1, this._removeStatsHistColormapVAT(e), e.keyProperties = { ...e.keyProperties, BandProperties: void 0 }, this.rasterInfo = e, { success: !0, supportsGPU: !["custom", "gvitm", "sultan"].includes(this.functionArguments.method) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { method: s, bandIndexes: n } = this.functionArguments, r = n.split(" ").map((a) => parseFloat(a));
    return Ln(e, { method: s, bandIndexes: r, equation: n });
  }
  _getWebGLParameters() {
    const t = this.functionArguments.bandIndexes.split(" ").map((o) => parseFloat(o) - 1);
    t.length === 2 && t.push(0);
    const e = this.isInputBandIdsSwizzled ? [0, 1, 2] : t;
    let s, n;
    const r = new Float32Array(3), { method: a } = this.functionArguments;
    switch (a) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        s = z([e[0], e[1], 0]), n = "ndxi";
        break;
      case "ndwi":
        s = z([e[1], e[0], 0]), n = "ndxi";
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        s = z([e[0], e[1], 0]), n = "sr";
        break;
      case "ci-g":
      case "ci-re":
        s = z([e[0], e[1], 0]), n = "ci";
        break;
      case "savi":
        s = z([e[0], e[1], 0]), n = "savi", r[0] = t[2] + 1;
        break;
      case "tsavi":
        s = z([e[0], e[1], 0]), n = "tsavi", r[0] = t[2] + 1, r[1] = t[3] + 1, r[2] = t[4] + 1;
        break;
      case "msavi":
        s = z([e[0], e[1], 0]), n = "msavi";
        break;
      case "gemi":
        s = z([e[0], e[1], 0]), n = "gemi";
        break;
      case "pvi":
        s = z([e[0], e[1], 0]), n = "tsavi", r[0] = t[2] + 1, r[1] = t[3] + 1;
        break;
      case "vari":
        s = z([e[0], e[1], e[2]]), n = "vari";
        break;
      case "mtvi2":
        s = z([e[0], e[1], e[2]]), n = "mtvi";
        break;
      case "rtvi-core":
        s = z([e[0], e[1], e[2]]), n = "rtvicore";
        break;
      case "evi":
        s = z([e[0], e[1], e[2]]), n = "evi";
        break;
      case "wndwi":
        s = z([e[0], e[1], 0]), n = "wndwi", r[0] = t[3] ? t[3] + 1 : 0.5;
        break;
      case "bai":
        s = z([e[1], e[0], 0]), n = "bai";
        break;
      default:
        s = z([0, 1, 2]), n = "custom";
    }
    return { bandIndexMat3: s, indexType: n, adjustments: r };
  }
  _getInputBandIds(t) {
    if (this.functionArguments.method === "custom") return t;
    const e = this.functionArguments.bandIndexes.split(" ").map((o) => parseFloat(o) - 1), s = t.length, n = e.map((o) => o >= s ? s - 1 : o), r = ur.has(this.functionArguments.method) ? 3 : 2, a = n.slice(0, r).map((o) => t[o]);
    return a.length === 2 && a.push(0), a;
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Nt.prototype, "functionName", void 0), l([m({ type: ar, json: { write: !0, name: "rasterFunctionArguments" } })], Nt.prototype, "functionArguments", void 0), l([m()], Nt.prototype, "rasterArgumentNames", void 0), Nt = l([P("esri.layers.support.rasterFunctions.BandArithmeticFunction")], Nt);
const lr = Nt;
var ne;
const Qe = new it({ 1: "outside", 2: "inside" }, { useNumericKeys: !0 });
let Et = ne = class extends D {
  constructor() {
    super(...arguments), this.clippingType = "outside";
  }
  clone() {
    return new ne({ clippingGeometry: this.clippingGeometry.clone(), clippingType: this.clippingType });
  }
};
l([m({ types: Ps, json: { read: Fs, write: !0 } })], Et.prototype, "clippingGeometry", void 0), l([m({ json: { read: Qe.read, write: Qe.write } })], Et.prototype, "clippingType", void 0), Et = ne = l([P("esri.layers.support.rasterFunctions.ClipFunctionArguments")], Et);
const cr = Et;
let ut = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Clip", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone();
    return this.outputPixelType = this._getOutputPixelType(t.pixelType), t.pixelType = this.outputPixelType, this.rasterInfo = t, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    return t.pixelBlocks?.[0];
  }
  _getWebGLParameters() {
    const { clippingGeometry: t, clippingType: e } = this.functionArguments;
    return { clippingGeometry: t.toJSON(), clippingType: e };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], ut.prototype, "functionName", void 0), l([m({ type: cr, json: { write: !0, name: "rasterFunctionArguments" } })], ut.prototype, "functionArguments", void 0), l([m()], ut.prototype, "rasterArgumentNames", void 0), l([m()], ut.prototype, "isNoopProcess", void 0), ut = l([P("esri.layers.support.rasterFunctions.ClipFunction")], ut);
const pr = ut;
var re;
let K = re = class extends D {
  castColormapName(i) {
    if (!i) return null;
    const t = i.toLowerCase();
    return $s.includes(t) ? t : null;
  }
  readColorRamp(i) {
    return is(i);
  }
  readColorRampName(i, t) {
    if (!i) return null;
    const e = Wt.jsonValues.find((s) => s.toLowerCase() === i.toLowerCase());
    return e ? Wt.fromJSON(e) : null;
  }
  clone() {
    return new re({ colormap: L(this.colormap), colormapName: this.colormapName, colorRamp: this.colorRamp?.clone(), colorRampName: this.colorRampName });
  }
};
l([m({ type: [[Number]], json: { write: !0 } })], K.prototype, "colormap", void 0), l([m({ type: String, json: { write: !0 } })], K.prototype, "colormapName", void 0), l([os("colormapName")], K.prototype, "castColormapName", null), l([m({ types: Ns, json: { write: !0 } })], K.prototype, "colorRamp", void 0), l([St("colorRamp")], K.prototype, "readColorRamp", null), l([m({ type: Wt.apiValues, json: { type: Wt.jsonValues, write: Wt.write } })], K.prototype, "colorRampName", void 0), l([St("colorRampName")], K.prototype, "readColorRampName", null), K = re = l([P("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], K);
const hr = K, mr = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [112, 75, 3], [113, 76, 3], [114, 77, 3], [115, 77, 3], [116, 78, 3], [117, 79, 3], [118, 79, 3], [119, 80, 3], [121, 81, 4], [122, 82, 4], [123, 82, 4], [124, 83, 4], [125, 84, 4], [126, 84, 4], [127, 85, 4], [128, 86, 4], [129, 86, 4], [130, 87, 4], [131, 88, 4], [132, 89, 4], [133, 89, 4], [134, 90, 4], [135, 91, 4], [136, 91, 4], [137, 92, 4], [138, 93, 4], [139, 94, 4], [140, 94, 4], [142, 95, 5], [143, 96, 5], [144, 96, 5], [145, 97, 5], [146, 98, 5], [147, 99, 5], [148, 99, 5], [149, 100, 5], [150, 101, 5], [151, 101, 5], [152, 102, 5], [153, 103, 5], [154, 104, 5], [155, 104, 5], [156, 105, 5], [157, 106, 5], [158, 106, 5], [159, 107, 5], [160, 108, 5], [161, 108, 5], [162, 109, 5], [164, 110, 6], [165, 111, 6], [166, 111, 6], [167, 112, 6], [168, 113, 6], [169, 113, 6], [170, 114, 6], [171, 115, 6], [172, 116, 6], [173, 116, 6], [174, 117, 6], [245, 0, 0], [245, 5, 0], [245, 10, 0], [246, 15, 0], [246, 20, 0], [246, 25, 0], [246, 30, 0], [247, 35, 0], [247, 40, 0], [247, 45, 0], [247, 50, 0], [247, 55, 0], [248, 60, 0], [248, 65, 0], [248, 70, 0], [248, 75, 0], [249, 81, 0], [249, 86, 0], [249, 91, 0], [249, 96, 0], [250, 101, 0], [250, 106, 0], [250, 111, 0], [250, 116, 0], [250, 121, 0], [251, 126, 0], [251, 131, 0], [251, 136, 0], [251, 141, 0], [252, 146, 0], [252, 151, 0], [252, 156, 0], [252, 156, 0], [251, 159, 0], [250, 162, 0], [249, 165, 0], [248, 168, 0], [247, 171, 0], [246, 174, 0], [245, 177, 0], [245, 179, 0], [244, 182, 0], [243, 185, 0], [242, 188, 0], [241, 191, 0], [240, 194, 0], [239, 197, 0], [238, 200, 0], [237, 203, 0], [236, 206, 0], [235, 209, 0], [234, 212, 0], [233, 215, 0], [232, 218, 0], [231, 221, 0], [230, 224, 0], [230, 226, 0], [229, 229, 0], [228, 232, 0], [227, 235, 0], [226, 238, 0], [225, 241, 0], [224, 244, 0], [223, 247, 0], [165, 247, 0], [163, 244, 0], [161, 240, 0], [158, 237, 0], [156, 233, 1], [154, 230, 1], [152, 227, 1], [149, 223, 1], [147, 220, 1], [145, 216, 1], [143, 213, 1], [140, 210, 2], [138, 206, 2], [136, 203, 2], [134, 200, 2], [132, 196, 2], [129, 193, 2], [127, 189, 2], [125, 186, 3], [123, 183, 3], [120, 179, 3], [118, 176, 3], [116, 172, 3], [114, 169, 3], [111, 166, 3], [109, 162, 4], [107, 159, 4], [105, 155, 4], [103, 152, 4], [100, 149, 4], [98, 145, 4], [96, 142, 4], [94, 138, 5], [91, 135, 5], [89, 132, 5], [87, 128, 5], [85, 125, 5], [82, 121, 5], [80, 118, 5], [78, 115, 6], [76, 111, 6], [73, 108, 6], [71, 105, 6], [69, 101, 6], [67, 98, 6], [65, 94, 6], [62, 91, 7], [60, 88, 7], [58, 84, 7], [56, 81, 7], [53, 77, 7], [51, 74, 7], [49, 71, 7], [47, 67, 8], [44, 64, 8], [42, 60, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8]], fr = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [245, 20, 0], [245, 24, 0], [245, 29, 0], [245, 31, 0], [247, 33, 0], [247, 33, 0], [247, 37, 0], [247, 41, 0], [247, 41, 0], [247, 41, 0], [247, 45, 0], [247, 45, 0], [247, 47, 0], [247, 49, 0], [247, 49, 0], [247, 54, 0], [247, 54, 0], [247, 56, 0], [247, 58, 0], [247, 58, 0], [250, 62, 0], [250, 62, 0], [250, 62, 0], [250, 67, 0], [250, 67, 0], [250, 67, 0], [250, 69, 0], [250, 71, 0], [250, 71, 0], [250, 75, 0], [250, 75, 0], [250, 78, 0], [250, 79, 0], [250, 79, 0], [250, 79, 0], [250, 81, 0], [250, 83, 0], [250, 83, 0], [250, 87, 0], [250, 87, 0], [250, 90, 0], [250, 92, 0], [252, 93, 0], [252, 93, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 105, 0], [252, 105, 0], [252, 107, 0], [252, 109, 0], [252, 109, 0], [252, 113, 13], [255, 118, 20], [255, 119, 23], [255, 121, 25], [255, 126, 33], [255, 132, 38], [255, 133, 40], [255, 135, 43], [255, 141, 48], [255, 144, 54], [255, 150, 59], [255, 152, 61], [255, 153, 64], [255, 159, 69], [255, 163, 77], [255, 165, 79], [255, 168, 82], [255, 174, 87], [255, 176, 92], [255, 181, 97], [255, 183, 99], [255, 186, 102], [255, 191, 107], [255, 197, 115], [255, 201, 120], [255, 203, 123], [255, 205, 125], [255, 209, 130], [255, 214, 138], [255, 216, 141], [255, 218, 143], [255, 224, 150], [255, 228, 156], [255, 234, 163], [255, 236, 165], [255, 238, 168], [255, 243, 173], [255, 248, 181], [255, 252, 186], [253, 252, 186], [250, 252, 187], [244, 250, 180], [238, 247, 176], [234, 246, 173], [231, 245, 169], [223, 240, 163], [217, 237, 157], [211, 235, 150], [205, 233, 146], [200, 230, 142], [195, 227, 136], [189, 224, 132], [184, 222, 126], [180, 220, 123], [174, 217, 119], [169, 214, 114], [163, 212, 108], [160, 210, 105], [154, 207, 101], [148, 204, 96], [143, 201, 93], [138, 199, 88], [134, 197, 84], [130, 194, 81], [126, 191, 77], [117, 189, 70], [115, 186, 68], [112, 184, 64], [106, 181, 60], [100, 179, 55], [94, 176, 49], [92, 174, 47], [90, 173, 45], [81, 168, 37], [75, 166, 33], [71, 163, 28], [66, 160, 24], [62, 158, 21], [56, 156, 14], [51, 153, 0], [51, 153, 0], [51, 153, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [49, 148, 0], [49, 148, 0], [49, 148, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [44, 133, 0], [44, 133, 0], [44, 133, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [42, 128, 0], [42, 128, 0], [42, 128, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0]];
function ke(i, t) {
  const e = [], s = [];
  for (let r = 0; r < i.length - 1; r++) e.push({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: i[r].slice(1), toColor: i[r + 1].slice(1) }), s.push(i[r + 1][0] - i[r][0]);
  const n = i[i.length - 1][0];
  return as({ type: "multipart", colorRamps: e }, { numColors: n, weights: t = t ?? s });
}
function dr() {
  return ke([[0, 0, 191, 191], [51, 0, 0, 255], [102, 255, 0, 255], [153, 255, 0, 127], [204, 191, 63, 127], [256, 20, 20, 20]]);
}
function gr() {
  const i = ke([[0, 255, 255, 255], [70, 0, 255, 0], [80, 205, 173, 193], [100, 150, 150, 150], [110, 120, 51, 100], [130, 120, 100, 200], [140, 28, 3, 144], [160, 6, 0, 55], [180, 10, 25, 30], [201, 6, 7, 27]]);
  for (let t = i.length; t < 256; t++) i.push([6, 27, 7]);
  return i;
}
function yr() {
  return as({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: [0, 0, 0], toColor: [255, 255, 255] });
}
function xr() {
  const i = [];
  for (let t = 0; t < 256; t++) {
    const e = [];
    for (let s = 0; s < 3; s++) e.push(Math.round(255 * Math.random()));
    i.push(e);
  }
  return i;
}
function br() {
  return ke([[0, 38, 41, 54], [69, 79, 82, 90], [131, 156, 156, 156], [256, 253, 253, 241]], [0.268, 0.238, 0.495]);
}
function wr(i) {
  let t;
  switch (i) {
    case "elevation":
      t = dr();
      break;
    case "gray":
      t = yr();
      break;
    case "hillshade":
      t = br();
      break;
    case "ndvi":
      t = mr;
      break;
    case "ndvi2":
      t = gr();
      break;
    case "ndvi3":
      t = fr;
      break;
    case "random":
      t = xr();
  }
  return t ? (t = t.map((e, s) => [s, ...e]), t) : null;
}
let Y = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1) return { success: !1, supportsGPU: !1, error: "colormap-function: source data must be single band" };
    let { colormap: e, colormapName: s, colorRamp: n, colorRampName: r } = this.functionArguments;
    if (!e?.length) if (n) this.colorRamp = n, e = Be(n, { interpolateAlpha: !0 });
    else if (r) {
      const u = Is(r);
      u && (e = Be(u), this.colorRamp = is(u));
    } else s && (e = wr(s));
    if (!e?.length) return { success: !1, supportsGPU: !1, error: "colormap-function: missing colormap argument" };
    const a = this._getOutputPixelType(t.pixelType);
    this.outputPixelType = a.startsWith("f") ? "s32" : a;
    const o = t.clone();
    return o.pixelType = this.outputPixelType, o.colormap = e, o.bandCount = 1, this.rasterInfo = o, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    let e = t.pixelBlocks?.[0];
    return !e || H(e.pixelType) || (e = e.clone(), e.clamp(this.outputPixelType)), e;
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Y.prototype, "functionName", void 0), l([m({ type: hr, json: { write: !0, name: "rasterFunctionArguments" } })], Y.prototype, "functionArguments", void 0), l([m()], Y.prototype, "rasterArgumentNames", void 0), l([m()], Y.prototype, "isNoopProcess", void 0), l([m({ json: { write: !0 } })], Y.prototype, "indexedColormap", void 0), l([m()], Y.prototype, "colorRamp", void 0), Y = l([P("esri.layers.support.rasterFunctions.ColormapFunction")], Y);
const vr = Y;
var oe;
let zt = oe = class extends D {
  constructor() {
    super(...arguments), this.rasters = [];
  }
  writeRasters(i, t) {
    t.rasters = i.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new oe({ rasters: L(this.rasters) });
  }
};
l([m({ json: { write: !0 } })], zt.prototype, "rasters", void 0), l([Mt("rasters")], zt.prototype, "writeRasters", null), zt = oe = l([P("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")], zt);
const Ar = zt;
let $t = class extends G {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const s = e.clone();
    if (s.attributeTable = null, s.colormap = null, s.pixelType = this.outputPixelType, s.bandCount = t.map(({ bandCount: r }) => r).reduce((r, a) => r + a), t.every(({ statistics: r }) => r != null && r.length)) {
      const r = [];
      t.forEach(({ statistics: a }) => a != null && r.push(...a)), s.statistics = r;
    }
    if (t.every(({ histograms: r }) => r != null && r.length)) {
      const r = [];
      t.forEach(({ histograms: a }) => a != null && r.push(...a)), s.histograms = r;
    }
    s.bandCount > 1 && (s.colormap = null, s.attributeTable = null);
    const n = t.every((r) => r.keyProperties.BandProperties?.length) ? t.flatMap((r) => r.keyProperties.BandProperties) : void 0;
    return s.keyProperties = { ...s.keyProperties, BandProperties: n }, this.rasterInfo = s, { success: !0, supportsGPU: s.bandCount <= 3 };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e ? e?.[0] == null ? null : Rs(e) : null;
  }
  _getWebGLParameters() {
    return { bandCount: this.rasterInfo.bandCount };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], $t.prototype, "functionName", void 0), l([m({ type: Ar, json: { write: !0, name: "rasterFunctionArguments" } })], $t.prototype, "functionArguments", void 0), l([m()], $t.prototype, "rasterArgumentNames", void 0), $t = l([P("esri.layers.support.rasterFunctions.CompositeBandFunction")], $t);
const Tr = $t, Pr = new it({ 0: "difference", 1: "relative-difference", 2: "categorical", 3: "euclidean-distance", 4: "angle-difference", 5: "band-with-most-change" }, { useNumericKeys: !0 }), Fr = new it({ 0: "all", 1: "changed", 2: "unchanged" }, { useNumericKeys: !0 });
function Nr(i, t, e, s) {
  const [n, r] = i, a = H(e) && !H(n.pixelType) && !H(r.pixelType), o = [n.mask, r.mask].filter((g) => g), u = w.combineBandMasks(o), c = i.map((g) => g.pixels[0]), { width: p, height: h } = n, f = w.createEmptyBand(e, p * h);
  switch (t) {
    case "difference":
    case "relative-difference":
      $r({ bands: c, mask: u, outBand: f, isRoundingNeeded: a, isRelative: t === "relative-difference" });
      break;
    case "categorical":
      Ir({ bands: c, mask: u, outBand: f, ...s });
      break;
    case "euclidean-distance":
      Rr({ pixels: i.map((g) => g.pixels), mask: u, outBand: f });
      break;
    case "angle-difference":
      Cr({ pixels: i.map((g) => g.pixels), mask: u, outBand: f });
      break;
    case "band-with-most-change":
      kr({ pixels: i.map((g) => g.pixels), mask: u, outBand: f });
  }
  const d = new w({ width: p, height: h, pixels: [f], pixelType: e, mask: u });
  return d.updateStatistics(), d;
}
function $r(i) {
  const { bands: [t, e], mask: s, isRelative: n, isRoundingNeeded: r, outBand: a } = i, o = t.length;
  for (let u = 0; u < o; u++) if (!s || s[u]) {
    let c = t[u] - e[u];
    if (n) {
      const p = Math.max(Math.abs(t[u]) - Math.abs(e[u]));
      c = p > 0 ? c / p : 0;
    }
    a[u] = r ? Math.round(c) : c;
  }
}
function Ir(i) {
  const { bands: [t, e], categoryIndexLookups: [s, n], classNames: [r, a], mask: o, keepMethod: u, outBand: c } = i, p = t.length, h = r.length, f = a.length, d = h * f, g = d + 1, x = d + 2;
  for (let y = 0; y < p; y++) if (!o || o[y]) {
    const b = t[y], A = e[y], I = s[b], v = n[A], N = r[I], T = a[v];
    c[y] = I == null || v == null ? d : u === "changed" && N === T ? g : u === "unchanged" && N !== T ? x : I * f + v;
  }
}
function Rr(i) {
  const { pixels: [t, e], mask: s, outBand: n } = i, r = t[0].length, a = t.length;
  for (let o = 0; o < r; o++) if (!s || s[o]) {
    let u = 0;
    for (let c = 0; c < a; c++) {
      const p = t[c][o] - e[c][o];
      u += p * p;
    }
    n[o] = Math.sqrt(u);
  }
}
function Cr(i) {
  const { pixels: [t, e], mask: s, outBand: n } = i, r = t[0].length, a = t.length;
  for (let o = 0; o < r; o++) if (!s || s[o]) {
    let u = 0, c = 0, p = 0;
    for (let f = 0; f < a; f++) {
      const d = t[f][o], g = e[f][o];
      u += d * g, c += d * d, p += g * g;
    }
    const h = Math.sqrt(c * p);
    n[o] = h ? Math.acos(u / h) : 1.5707963267948966;
  }
}
function kr(i) {
  const { pixels: [t, e], mask: s, outBand: n } = i, r = t[0].length, a = t.length;
  for (let o = 0; o < r; o++) if (!s || s[o]) {
    let u = 0, c = 0;
    for (let p = 0; p < a; p++) {
      const h = Math.abs(t[p][o] - e[p][o]);
      h > u && (u = h, c = p);
    }
    n[o] = c;
  }
}
var ie;
let lt = ie = class extends D {
  constructor() {
    super(...arguments), this.method = "difference", this.keepMethod = "all", this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new ie({ raster: this.raster, raster2: this.raster2, method: this.method, keepMethod: this.keepMethod });
  }
};
l([J(Pr)], lt.prototype, "method", void 0), l([J(Fr)], lt.prototype, "keepMethod", void 0), l([m({ json: { write: !0 } })], lt.prototype, "raster2", void 0), l([m({ readOnly: !0 })], lt.prototype, "rasters", null), lt = ie = l([P("esri.layers.support.rasterFunctions.ComputeChangeFunctionArguments")], lt);
const _r = lt;
let ct = class extends G {
  constructor() {
    super(...arguments), this.functionName = "ComputeChange", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const { method: t } = this.functionArguments, e = this.sourceRasterInfos[0].clone();
    if (this.outputPixelType = this._getOutputPixelType(e.pixelType), e.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e), t === "categorical") {
      const s = this.sourceRasterInfos.map((a) => a.attributeTable), n = this._getFieldNames(s, "value"), r = s.map((a) => this._getClassFieldName(a));
      if (n[0] == null || n[1] == null || r[0] == null || r[1] == null) return { success: !1, supportsGPU: !1, error: "both inputs must have proper attribute table with value and class fields" };
      this._updateAttributeTable(e, n, r);
    }
    return e.bandCount = 1, this.rasterInfo = e, { success: !0, supportsGPU: t === "difference" || t === "relative-difference" };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    if (e?.[0] == null || e?.[1] == null) return null;
    const { method: s } = this.functionArguments;
    return Nr(e, s, this.outputPixelType, this._categoryConfig);
  }
  _getWebGLParameters() {
    const t = this.outputPixelType ?? "f32";
    let [e, s] = ot(t);
    const n = H(t);
    return n && (e -= 1e-4, s += 1e-4), { method: this.functionArguments.method, domainRange: [e, s], isOutputRounded: n };
  }
  _updateAttributeTable(t, e, s) {
    const n = this.sourceRasterInfos.map((v) => v.attributeTable), r = n.map((v, N) => v.features.map((T) => T.attributes[e[N]])), a = n.map((v, N) => v.features.map((T) => T.attributes[s[N]])), o = r.map((v) => {
      const N = [];
      return v.forEach((T, F) => N[T] = F), N;
    }), { keepMethod: u } = this.functionArguments;
    this._categoryConfig = { categoryIndexLookups: o, classNames: a, keepMethod: u };
    const c = n[0].clone();
    c.fields = [new tt({ name: "OID", type: "oid" }), new tt({ name: "Value", type: "integer" }), new tt({ name: "ClassName", type: "string" }), new tt({ name: "Class_From", type: "string" }), new tt({ name: "Class_To", type: "string" })];
    const p = this._getFieldNames(n, "red"), h = this._getFieldNames(n, "green"), f = this._getFieldNames(n, "blue"), d = [], g = p.length === 2 && h.length === 2 && f.length === 2;
    g && (d.push(...n.map((v, N) => v.features.map((T) => [T.attributes[p[N]], T.attributes[h[N]], T.attributes[f[N]]]))), c.fields.push(new tt({ name: "Red", type: "integer" }), new tt({ name: "Green", type: "integer" }), new tt({ name: "Blue", type: "integer" })));
    const x = c.features[0].clone();
    x.geometry = null;
    const y = [], [b, A] = r.map((v) => v.length);
    let I = 1;
    for (let v = 0; v < b; v++) {
      const N = a[0][v];
      for (let T = 0; T < A; T++) {
        const F = a[1][T];
        if (u === "changed" && N === F || u === "unchanged" && N !== F) continue;
        const R = x.clone();
        R.attributes = { OID: I++, Value: v * A + T, ClassName: N === F ? N : `${N} -> ${F}`, Class_From: N, Class_To: F }, g && (R.attributes.Red = d[0][v][0] + d[1][T][0] >> 1, R.attributes.Green = d[0][v][1] + d[1][T][1] >> 1, R.attributes.Blue = d[0][v][2] + d[1][T][2] >> 1), y.push(R);
      }
    }
    if (u === "changed") {
      const v = x.clone();
      v.attributes = { OID: I++, Value: b * A + 1, ClassName: "No Change", Class_From: "Same", Class_To: "Same" }, y.push(v);
    } else if (u === "unchanged") {
      const v = x.clone();
      v.attributes = { OID: I++, Value: b * A + 2, ClassName: "Changed", Class_From: "Any", Class_To: "Any" }, y.push(v);
    }
    c.features = y, t.attributeTable = c;
  }
  _getFieldNames(t, e) {
    return t.map(({ fields: s }) => s.find((n) => n.name.toLowerCase() === e)?.name).filter((s) => s);
  }
  _getClassFieldName(t) {
    return (t.fields.find((s) => s.type === "string" && s.name.toLowerCase().startsWith("class")) ?? t.fields.find((s) => s.type === "string" && s.name.toLowerCase().includes("class") || s.name.toLowerCase().includes("type") || s.name.toLowerCase().includes("name")) ?? t.fields.find((s) => s.type === "string"))?.name;
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], ct.prototype, "functionName", void 0), l([m({ type: _r, json: { write: !0, name: "rasterFunctionArguments" } })], ct.prototype, "functionArguments", void 0), l([m()], ct.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], ct.prototype, "_categoryConfig", void 0), ct = l([P("esri.layers.support.rasterFunctions.ComputeChangeFunction")], ct);
const Br = ct;
var ae;
let Vt = ae = class extends D {
  constructor() {
    super(...arguments), this.contrastOffset = 0, this.brightnessOffset = 0;
  }
  clone() {
    return new ae({ contrastOffset: this.contrastOffset, brightnessOffset: this.brightnessOffset, raster: this.raster });
  }
};
l([m({ json: { write: !0 } })], Vt.prototype, "contrastOffset", void 0), l([m({ json: { write: !0 } })], Vt.prototype, "brightnessOffset", void 0), Vt = ae = l([P("esri.layers.support.rasterFunctions.ContrastBrightnessFunctionArguments")], Vt);
const jr = Vt;
let pt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "ContrastBrightness", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0];
    if (e.pixelType !== "u8") return { success: !1, supportsGPU: !1, error: "Only unsigned 8 bit raster is supported by ContrastBrightness function." };
    this.outputPixelType = this._getOutputPixelType("u8");
    const s = e.clone();
    this._removeStatsHistColormapVAT(s), this.rasterInfo = s;
    const { contrastOffset: n, brightnessOffset: r } = this.functionArguments;
    return this.lookup = Cs(n, r), { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    return e == null ? null : Ie(e, { lut: e.pixels.map(() => this.lookup), offset: 0, outputPixelType: "u8" });
  }
  _getWebGLParameters() {
    const { contrastOffset: t, brightnessOffset: e } = this.functionArguments;
    return { contrastOffset: t, brightnessOffset: e };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], pt.prototype, "functionName", void 0), l([m({ type: jr, json: { write: !0, name: "rasterFunctionArguments" } })], pt.prototype, "functionArguments", void 0), l([m()], pt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], pt.prototype, "lookup", void 0), pt = l([P("esri.layers.support.rasterFunctions.ContrastBrightnessFunction")], pt);
const Sr = pt;
function _e(i, t, e, s, n) {
  const r = Math.floor(s / 2);
  for (let o = 0; o < r; o++) for (let u = 0; u < t; u++) i[o * t + u] = i[(n - 1 - o) * t + u], i[(e - 1 - o) * t + u] = i[(e - n + o) * t + u];
  const a = Math.floor(n / 2);
  for (let o = 0; o < e; o++) {
    const u = o * t;
    for (let c = 0; c < a; c++) i[u + c] = i[u + n - 1 - c], i[u + t - c - 1] = i[u + t + c - n];
  }
}
const j = /* @__PURE__ */ new Map();
function Mr(i) {
  const t = Math.sqrt(i.length), e = i.slice(0, t), s = [1];
  for (let n = 1; n < t; n++) {
    let r = null;
    for (let a = 0; a < t; a++) {
      const o = i[a + n * t], u = i[a];
      if (r == null) if (u === 0) {
        if (o) return { separable: !1, row: null, col: null };
      } else r = o / u;
      else if (o / u !== r) return { separable: !1, row: null, col: null };
    }
    if (r == null) return { separable: !1, row: null, col: null };
    s.push(r);
  }
  return { separable: !0, row: e, col: s };
}
function Ze(i, t, e, s, n, r, a) {
  const o = new Float32Array(t * e), u = r.length, c = a ? 0 : s, p = a ? s : 0, h = a ? 1 : t;
  for (let f = c; f < e - c; f++) {
    const d = f * t;
    for (let g = p; g < t - p; g++) {
      if (n && !n[d + g]) continue;
      let x = 0;
      for (let y = 0; y < u; y++) x += i[d + g + (y - s) * h] * r[y];
      o[d + g] = x;
    }
  }
  return o;
}
function Or(i, t, e, s, n, r, a) {
  const o = new Float32Array(t * e), u = Math.floor(s / 2), c = Math.floor(n / 2);
  for (let p = u; p < e - u; p++) {
    const h = p * t;
    for (let f = c; f < t - c; f++) {
      if (r && !r[h + f]) continue;
      let d = 0;
      for (let g = 0; g < s; g++) for (let x = 0; x < n; x++) d += i[h + f + (g - u) * t + x - c] * a[g * n + x];
      o[h + f] = d;
    }
  }
  return o;
}
function Dr(i, t, e = !0) {
  const { pixels: s, width: n, height: r, pixelType: a, mask: o } = i, u = s.length, c = [], { kernel: p, rows: h, cols: f } = t;
  for (let d = 0; d < u; d++) {
    const g = Or(s[d], n, r, h, f, o, p);
    e && _e(g, n, r, h, f), c.push(g);
  }
  return new w({ width: n, height: r, pixelType: a, pixels: c, mask: o });
}
function Gr(i, t, e, s = !0) {
  const { pixels: n, width: r, height: a, pixelType: o, mask: u } = i, c = n.length, p = [], h = t.length, f = e.length, d = Math.floor(h / 2), g = Math.floor(f / 2);
  for (let x = 0; x < c; x++) {
    let y = Ze(n[x], r, a, d, u, t, !0);
    y = Ze(y, r, a, g, u, e, !1), s && _e(y, r, a, h, f), p.push(y);
  }
  return new w({ width: r, height: a, pixelType: o, pixels: p, mask: u });
}
function Er(i, t) {
  const e = Mr(t.kernel), s = t.mirrorEdges !== !1, n = e.separable ? Gr(i, e.row, e.col, s) : Dr(i, t, s), { outputPixelType: r } = t;
  return r && n.clamp(r), n;
}
j.set(C.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]), j.set(C.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), j.set(C.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), j.set(C.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), j.set(C.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), j.set(C.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), j.set(C.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), j.set(C.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), j.set(C.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), j.set(C.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), j.set(C.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), j.set(C.smoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), j.set(C.smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), j.set(C.smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), j.set(C.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), j.set(C.sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), j.set(C.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), j.set(C.laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), j.set(C.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), j.set(C.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), j.set(C.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), j.set(C.sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), j.set(C.pointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);
var ue;
let ht = ue = class extends D {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set convolutionType(i) {
    this._set("convolutionType", i);
    const t = j.get(i);
    if (!t || i === C.userDefined || i === C.none) return;
    const e = Math.sqrt(t.length);
    this._set("kernel", t), this._set("cols", e), this._set("rows", e);
  }
  clone() {
    return new ue({ cols: this.cols, rows: this.rows, kernel: [...this.kernel], convolutionType: this.convolutionType, raster: L(this.raster) });
  }
};
l([m({ json: { type: Number, write: !0 } })], ht.prototype, "rows", void 0), l([m({ json: { type: Number, write: !0 } })], ht.prototype, "cols", void 0), l([m({ json: { name: "type", type: Number, write: !0 } })], ht.prototype, "convolutionType", null), l([m({ json: { type: [Number], write: !0 } })], ht.prototype, "kernel", void 0), ht = ue = l([P("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")], ht);
const zr = ht, ts = 25;
let mt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  get _normalizedKernel() {
    const { kernel: t, convolutionType: e } = this.functionArguments, s = t.reduce((n, r) => n + r);
    return e === -1 || s === 0 || s === 1 ? t : t.map((n) => n / s);
  }
  _bindSourceRasters() {
    const { convolutionType: t, rows: e, cols: s, kernel: n } = this.functionArguments;
    if (!Object.values(C).includes(t)) return { success: !1, supportsGPU: !1, error: `convolution-function: the specified kernel type is not supported ${t}` };
    if (t !== C.none && e * s !== n.length) return { success: !1, supportsGPU: !1, error: "convolution-function: the specified rows and cols do not match the length of the kernel" };
    const r = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(r.pixelType);
    const a = r.clone();
    a.pixelType = this.outputPixelType;
    const o = [C.none, C.sharpen, C.sharpen2, C.sharpening3x3, C.sharpening5x5];
    return (t === -1 || this.outputPixelType !== "u8" && !o.includes(t)) && (a.statistics = null, a.histograms = null), a.colormap = null, a.attributeTable = null, this.rasterInfo = a, { success: !0, supportsGPU: n.length <= ts };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null || this.functionArguments.convolutionType === C.none) return e;
    const { rows: s, cols: n } = this.functionArguments, { _normalizedKernel: r } = this;
    return Er(e, { kernel: r, rows: s, cols: n, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const t = new Float32Array(ts);
    return t.set(this._normalizedKernel), { kernelRows: this.functionArguments.rows, kernelCols: this.functionArguments.cols, kernel: t, clampRange: ot(this.outputPixelType) };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], mt.prototype, "functionName", void 0), l([m({ type: zr, json: { write: !0, name: "rasterFunctionArguments" } })], mt.prototype, "functionArguments", void 0), l([m()], mt.prototype, "rasterArgumentNames", void 0), l([m()], mt.prototype, "_normalizedKernel", null), mt = l([P("esri.layers.support.rasterFunctions.ConvolutionFunction")], mt);
const Vr = mt;
var le;
const ds = new it({ 0: "standard", 1: "platform", 2: "profile" }, { useNumericKeys: !0 });
let It = le = class extends D {
  constructor() {
    super(...arguments), this.curvatureType = "standard", this.zFactor = 1;
  }
  readCurvatureType(i, t) {
    return ds.fromJSON(t.type ?? t.curvatureType ?? 0);
  }
  clone() {
    return new le({ curvatureType: this.curvatureType, zFactor: this.zFactor, raster: this.raster });
  }
};
l([m({ json: { write: { target: "type" } } }), J(ds)], It.prototype, "curvatureType", void 0), l([St("curvatureType", ["type", "curvatureType"])], It.prototype, "readCurvatureType", null), l([m({ type: Number, json: { write: !0 } })], It.prototype, "zFactor", void 0), It = le = l([P("esri.layers.support.rasterFunctions.CurvatureFunctionArguments")], It);
const Ur = It;
let ft = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Curvature", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.bandCount = 1, this._removeStatsHistColormapVAT(t), this.rasterInfo = t, this.isGCS = t.spatialReference?.isGeographic ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { zFactor: s, curvatureType: n } = this.functionArguments, { extent: r, primaryPixelSizes: a } = t, o = a?.[0], u = o ?? (r ? { x: r.width / e.width, y: r.height / e.height } : { x: 1, y: 1 }), c = this.isGCS && s >= 1 ? s * Qt : s;
    return ks(e, { zFactor: c, curvatureType: n, resolution: u });
  }
  _getWebGLParameters() {
    const { zFactor: t, curvatureType: e } = this.functionArguments;
    return { curvatureType: e, zFactor: this.isGCS && t >= 1 ? t * Qt : t };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], ft.prototype, "functionName", void 0), l([m({ type: Ur, json: { write: !0, name: "rasterFunctionArguments" } })], ft.prototype, "functionArguments", void 0), l([m()], ft.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], ft.prototype, "isGCS", void 0), ft = l([P("esri.layers.support.rasterFunctions.CurvatureFunction")], ft);
const Lr = ft;
var ce;
let Q = ce = class extends D {
  constructor() {
    super(...arguments), this.bandIds = [], this.bandNames = [], this.bandWavelengths = [], this.missingBandAction = us.bestMatch;
  }
  clone() {
    return new ce({ bandIds: this.bandIds?.slice(), bandNames: this.bandNames?.slice(), bandWavelengths: this.bandWavelengths?.slice(), missingBandAction: this.missingBandAction, method: this.method, wavelengthMatchTolerance: this.wavelengthMatchTolerance });
  }
};
l([m({ json: { write: !0 } })], Q.prototype, "bandIds", void 0), l([m({ json: { write: !0 } })], Q.prototype, "bandNames", void 0), l([m({ json: { write: !0 } })], Q.prototype, "bandWavelengths", void 0), l([J({ 0: "name", 1: "wavelength", 2: "id" })], Q.prototype, "method", void 0), l([m({ json: { write: !0 } })], Q.prototype, "missingBandAction", void 0), l([m({ json: { write: !0 } })], Q.prototype, "wavelengthMatchTolerance", void 0), Q = ce = l([P("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")], Q);
const Wr = Q;
let Rt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { functionArguments: t, sourceRasterInfos: e } = this, s = e[0], { method: n, bandNames: r, bandWavelengths: a, bandIds: o, missingBandAction: u } = t, c = r?.length && (n === "name" || n !== "id" && !o?.length), p = a?.length && (n === "wavelength" || n !== "id" && !o?.length), h = u === us.fail, f = c ? Hr(s, r) : p ? Kr(s, a, this.functionArguments, h) : Xr(s, o, h);
    if (f == null)
      return { success: !1, supportsGPU: !1, error: `extract-band-function: Invalid ${c ? "band names" : p ? "band wavelengths" : "band ids"} for the imagery data source` };
    this.functionArguments.bandIds = f, this.functionArguments.method = "id", this.outputPixelType = this._getOutputPixelType("f32");
    const d = s.clone();
    d.pixelType = this.outputPixelType, d.bandCount = f.length;
    const { statistics: g, histograms: x } = d;
    g != null && g.length && (d.statistics = f.map((b) => g[b] || g[g.length - 1])), x != null && x.length && (d.histograms = f.map((b) => x[b] || x[x.length - 1]));
    let y = d.keyProperties?.BandProperties;
    return y?.length && (y = f.map((b) => b >= y.length ? y[y.length - 1] : y[b]), d.keyProperties = { ...d.keyProperties, BandProperties: y }), this.rasterInfo = d, { success: !0, supportsGPU: d.bandCount <= 3 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const s = e.pixels.length, n = this.functionArguments.bandIds.map((r) => r >= s ? s - 1 : r);
    return e.extractBands(n);
  }
  _getWebGLParameters() {
    let t;
    if (this.isInputBandIdsSwizzled) t = this.swizzledBandSelection.length ? this.swizzledBandSelection : [0, 1, 2];
    else {
      t = [...this.functionArguments.bandIds], t.length === 0 ? t = [0, 1, 2] : t.length < 3 && (t[1] = t[1] ?? t[0], t[2] = t[2] ?? t[1]);
      for (let e = 0; e < 3; e++) t[e] = Math.min(t[e], 2);
    }
    return { bandIndexMat3: z(t) };
  }
  _getInputBandIds(t) {
    const e = t.length;
    return this.functionArguments.bandIds.map((s) => s >= e ? e - 1 : s).map((s) => t[s]);
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Rt.prototype, "functionName", void 0), l([m({ type: Wr, json: { write: !0, name: "rasterFunctionArguments" } })], Rt.prototype, "functionArguments", void 0), l([m()], Rt.prototype, "rasterArgumentNames", void 0), Rt = l([P("esri.layers.support.rasterFunctions.ExtractBandFunction")], Rt);
const qr = Rt;
function Hr(i, t) {
  const e = i.bandInfos.map(({ name: n }) => n.toLowerCase()), s = [];
  for (let n = 0; n < t.length; n++) {
    const r = t[n].toLowerCase();
    let a = e.indexOf(r);
    if (a === -1 && r === "nearinfrared" && (a = e.findIndex((o) => o.startsWith("nearinfrared_1")), a === -1 && (a = e.findIndex((o) => o.startsWith("nearinfrared")))), a === -1) return null;
    s.push(a);
  }
  return s;
}
function Xr(i, t, e) {
  const { bandCount: s } = i;
  return !t?.length || e && t.some((n) => n < 0 || n >= s) ? null : t;
}
function Kr(i, t, { wavelengthMatchTolerance: e }, s) {
  const { bandInfos: n } = i, r = [];
  for (let o = 0; o < n.length; o++) {
    const { minWavelength: u, maxWavelength: c } = n[o];
    if (!u || !c) return null;
    r.push({ minWavelength: u, maxWavelength: c });
  }
  const a = [];
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    let c = !1, p = -1, h = Number.MAX_VALUE;
    for (let f = 0; f < r.length; f++) {
      const d = r[f], g = u >= d.minWavelength && u <= d.maxWavelength, x = Math.abs(u - (d.minWavelength + d.maxWavelength) / 2);
      g ? x < h && (c = !0, p = f, h = x) : !c && x < h && (p = f, h = x);
    }
    if (!c && e && h < e && (c = !0), !c && s) return null;
    a.push(p);
  }
  return a;
}
function Jr(i, t, e) {
  const { pixels: s, width: n, height: r, mask: a, bandMasks: o } = i, u = n * r, c = o?.length ? w.combineBandMasks(o) : a, p = Math.min(t.length, s.length), h = e.startsWith("f"), f = !h && e !== i.pixelType, [d, g] = ot(e), x = w.createEmptyBand(e, u);
  for (let b = 0; b < r; b++) {
    let A = b * n;
    for (let I = 0; I < n; I++, A++) if (!c || c[A]) {
      let v = 0;
      for (let N = 0; N < p; N++) v += t[N] * s[N][A];
      h || (v = Math.round(v), f && (v = v > g ? g : v < d ? d : v)), x[A] = v;
    }
  }
  const y = new w({ width: n, height: r, pixels: [x], pixelType: e, mask: c });
  return y.updateStatistics(), y;
}
var pe;
let Ht = pe = class extends D {
  clone() {
    return new pe({ conversionParameters: [...this.conversionParameters], raster: this.raster });
  }
};
l([m({ type: [Number], json: { write: !0 } })], Ht.prototype, "conversionParameters", void 0), Ht = pe = l([P("esri.layers.support.rasterFunctions.GrayscaleFunctionArguments")], Ht);
const Yr = Ht;
let dt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Grayscale", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  get _normalizedWeights() {
    const { conversionParameters: t } = this.functionArguments, e = t.reduce((s, n) => s + n);
    return t.map((s) => s / e);
  }
  _bindSourceRasters() {
    const { conversionParameters: t } = this.functionArguments;
    if (!t?.length) return { success: !1, supportsGPU: !1, error: "missing valid conversion parameters." };
    const e = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e.pixelType), e.pixelType = this.outputPixelType;
    const s = t.length === 3 || e.bandCount === 3 && t.length > 3;
    return e.bandCount = 1, this._removeStatsHistColormapVAT(e), this.rasterInfo = e, { success: !0, supportsGPU: s };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    return e == null ? null : Jr(e, this._normalizedWeights, this.outputPixelType);
  }
  _getWebGLParameters() {
    return { weights: this._normalizedWeights };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], dt.prototype, "functionName", void 0), l([m({ type: Yr, json: { write: !0, name: "rasterFunctionArguments" } })], dt.prototype, "functionArguments", void 0), l([m()], dt.prototype, "rasterArgumentNames", void 0), l([m()], dt.prototype, "_normalizedWeights", null), dt = l([P("esri.layers.support.rasterFunctions.GrayscaleFunction")], dt);
const Qr = dt;
var he;
let gt = he = class extends D {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = !0;
  }
  writeRasters(i, t) {
    t.rasters = i.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new he({ operation: this.operation, processAsMultiband: this.processAsMultiband, rasters: L(this.rasters) });
  }
};
l([m({ json: { write: !0 } })], gt.prototype, "operation", void 0), l([m({ json: { write: !0 } })], gt.prototype, "rasters", void 0), l([Mt("rasters")], gt.prototype, "writeRasters", null), l([m({ json: { write: !0 } })], gt.prototype, "processAsMultiband", void 0), gt = he = l([P("esri.layers.support.rasterFunctions.LocalFunctionArguments")], gt);
const Zr = gt;
let Ct = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0], { bandCount: s } = e, { processAsMultiband: n } = this.functionArguments;
    if (t.some((c) => c.bandCount !== s)) return { success: !1, supportsGPU: !1, error: "local-function: input rasters do not have same band count" };
    const { operation: r, rasters: a } = this.functionArguments, o = De[r];
    if (!(o === 999 || a.length === o || a.length <= 1 && o === 1)) return { success: !1, supportsGPU: !1, error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${o}` };
    const u = e.clone();
    return u.bandCount = o !== 999 || n ? s : 1, this._removeStatsHistColormapVAT(u), this._updateStatistics(u), this._updatePixelType(u), this.rasterInfo = u, { success: !0, supportsGPU: u.bandCount === 1 && o <= 3 && (r < 11 || r > 16) };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e == null || e.some((s) => s == null) ? null : fs(e, this.functionArguments.operation, { processAsMultiband: this.functionArguments.processAsMultiband, outputPixelType: this.outputPixelType ?? void 0 });
  }
  _getWebGLParameters() {
    const { operation: t } = this.functionArguments, e = De[t], s = Object.keys(Me).find((u) => Me[u] === t)?.toLowerCase() ?? "undefined", n = this.outputPixelType ?? "f32";
    let [r, a] = ot(n);
    const o = H(n);
    return o && (r -= 1e-4, a += 1e-4), { imageCount: e, operationName: s, domainRange: [r, a], isOutputRounded: o };
  }
  _updateStatistics(t) {
    const e = this.sourceRasterInfos[0], { operation: s } = this.functionArguments, n = Oe(s)?.domain;
    if (n) {
      t.statistics = [];
      for (let r = 0; r < t.bandCount; r++) t.statistics[r] = { min: n[0], max: n[1], avg: (n[0] + n[1]) / 2, stddev: (n[0] + n[1]) / 10 };
    } else s === 45 && e.statistics?.length && (t.statistics = e.statistics.map((r) => ({ min: -r.max, max: -r.min, avg: r.avg != null ? -r.avg : void 0, stddev: r.stddev != null ? -r.stddev : void 0 })));
  }
  _updatePixelType(t) {
    const { statistics: e, pixelType: s } = this.sourceRasterInfos[0], { operation: n } = this.functionArguments, { domain: r, isInteger: a } = Oe(n) ?? { domain: null, isInteger: !1 };
    let o = "f32";
    if (r && a) o = Jt(r[0], r[1]);
    else if (n === 30) {
      const u = e?.[0];
      o = u ? Jt(u.min, u.max) : H(s) ? s : "s32";
    } else if (n === 45 && H(s)) {
      const u = e?.map(({ max: f }) => -f), c = e?.map(({ min: f }) => -f), p = u?.length ? Math.min(...u) : null, h = c?.length ? Math.min(...c) : null;
      o = p != null && h != null ? Jt(p, h) : s.startsWith("s") ? s.replace("s", "u") : s === "u1" || s === "u2" || s === "u4" ? "s8" : s === "u8" ? "s16" : "s32";
    }
    t.pixelType = this.outputPixelType = this._getOutputPixelType(o);
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Ct.prototype, "functionName", void 0), l([m({ type: Zr, json: { write: !0, name: "rasterFunctionArguments" } })], Ct.prototype, "functionArguments", void 0), l([m()], Ct.prototype, "rasterArgumentNames", void 0), Ct = l([P("esri.layers.support.rasterFunctions.LocalFunction")], Ct);
const to = Ct;
var me;
let yt = me = class extends D {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = ls.matchAny;
  }
  get normalizedNoDataValues() {
    const { noDataValues: i } = this;
    if (!i?.length) return null;
    let t = !1;
    const e = i.map((s) => {
      if (typeof s == "number") return t = !0, [s];
      if (typeof s == "string") {
        const n = s.trim().split(" ").filter((r) => r.trim() !== "").map((r) => Number(r));
        return t = t || n.length > 0, n.length === 0 ? null : n;
      }
      return null;
    });
    return t ? e : null;
  }
  clone() {
    return new me({ includedRanges: this.includedRanges?.slice() ?? [], noDataValues: this.noDataValues?.slice() ?? [], noDataInterpretation: this.noDataInterpretation });
  }
};
l([m({ json: { write: !0 } })], yt.prototype, "includedRanges", void 0), l([m({ json: { write: !0 } })], yt.prototype, "noDataValues", void 0), l([m()], yt.prototype, "normalizedNoDataValues", null), l([m({ json: { write: !0 } })], yt.prototype, "noDataInterpretation", void 0), yt = me = l([P("esri.layers.support.rasterFunctions.MaskFunctionArguments")], yt);
const eo = yt;
let xt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, this.rasterInfo = t;
    const { includedRanges: s, normalizedNoDataValues: n } = this.functionArguments;
    if (!s?.length && !n?.length) return { success: !1, supportsGPU: !1, error: "missing includedRanges or noDataValues argument" };
    let r = [];
    for (let o = 0; o < t.bandCount; o++) {
      const u = _s(e, s?.slice(2 * o, 2 * o + 2), n?.[o]);
      if (u == null) {
        r = null;
        break;
      }
      r.push(u);
    }
    this.lookups = r;
    const a = n != null && n.every((o) => o?.length === n[0]?.length);
    return { success: !0, supportsGPU: (!s || s.length <= 2 * Z) && (!n || a && n[0].length <= Z) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { outputPixelType: s, lookups: n } = this, { includedRanges: r, noDataInterpretation: a, normalizedNoDataValues: o } = this.functionArguments, u = a === ls.matchAll;
    return Bs(e, { includedRanges: r, noDataValues: o, outputPixelType: s, matchAll: u, lookups: n });
  }
  _getWebGLParameters() {
    const { includedRanges: t, normalizedNoDataValues: e } = this.functionArguments, s = new Float32Array(Z);
    s.fill(jt), e?.[0]?.length && s.set(e[0]);
    const n = new Float32Array(Z);
    for (let r = 0; r < n.length; r += 2) n[r] = t?.[r] ?? -jt, n[r + 1] = t?.[r + 1] ?? jt;
    return t?.length && n.set(t), { bandCount: this.sourceRasterInfos[0].bandCount, noDataValues: s, includedRanges: n };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], xt.prototype, "functionName", void 0), l([m({ type: eo, json: { write: !0, name: "rasterFunctionArguments" } })], xt.prototype, "functionArguments", void 0), l([m()], xt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], xt.prototype, "lookups", void 0), xt = l([P("esri.layers.support.rasterFunctions.MaskFunction")], xt);
const so = xt;
var fe;
let kt = fe = class extends D {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scientificOutput = !1;
  }
  clone() {
    const { visibleBandID: i, infraredBandID: t, scientificOutput: e } = this;
    return new fe({ visibleBandID: i, infraredBandID: t, scientificOutput: e });
  }
};
l([m({ json: { write: !0 } })], kt.prototype, "visibleBandID", void 0), l([m({ json: { write: !0 } })], kt.prototype, "infraredBandID", void 0), l([m({ json: { write: !0 } })], kt.prototype, "scientificOutput", void 0), kt = fe = l([P("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], kt);
const no = kt;
let _t = class extends G {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { scientificOutput: t, visibleBandID: e, infraredBandID: s } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t ? "f32" : "u8");
    const n = this.sourceRasterInfos[0], r = Math.max(e, s);
    if (n.bandCount < 2 || r >= n.bandCount) return { success: !1, supportsGPU: !1, error: "ndvi-function: source raster has insufficient amount of raster bands" };
    const a = n.clone();
    a.pixelType = this.outputPixelType, a.colormap = null, a.histograms = null, a.bandCount = 1, a.keyProperties = { ...a.keyProperties, BandProperties: void 0 };
    const [o, u, c, p] = t ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return a.statistics = [{ min: o, max: u, avg: c, stddev: p }], this.rasterInfo = a, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { visibleBandID: s, infraredBandID: n, scientificOutput: r } = this.functionArguments;
    return Wn(e, s, n, !r);
  }
  _getWebGLParameters() {
    const { visibleBandID: t, infraredBandID: e, scientificOutput: s } = this.functionArguments, n = this.isInputBandIdsSwizzled ? [0, 1, 2] : [e, t, 0];
    return { bandIndexMat3: z(n), scaled: !s };
  }
  _getInputBandIds(t) {
    const { visibleBandID: e, infraredBandID: s } = this.functionArguments;
    return [s, e, 0].map((n) => t[n]);
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], _t.prototype, "functionName", void 0), l([m({ type: no, json: { write: !0, name: "rasterFunctionArguments" } })], _t.prototype, "functionArguments", void 0), l([m()], _t.prototype, "rasterArgumentNames", void 0), _t = l([P("esri.layers.support.rasterFunctions.NDVIFunction")], _t);
const ro = _t;
var de;
let et = de = class extends D {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = !1, this.isLastInputRangeInclusive = !1;
  }
  clone() {
    return new de({ inputRanges: [...this.inputRanges], outputValues: [...this.outputValues], noDataRanges: [...this.noDataRanges], allowUnmatched: this.allowUnmatched, isLastInputRangeInclusive: this.isLastInputRangeInclusive });
  }
};
l([m({ json: { write: !0 } })], et.prototype, "inputRanges", void 0), l([m({ json: { write: !0 } })], et.prototype, "outputValues", void 0), l([m({ json: { write: !0 } })], et.prototype, "noDataRanges", void 0), l([m({ json: { write: !0 } })], et.prototype, "allowUnmatched", void 0), l([m({ json: { write: !0 } })], et.prototype, "isLastInputRangeInclusive", void 0), et = de = l([P("esri.layers.support.rasterFunctions.RemapFunctionArguments")], et);
const oo = et;
let bt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, t.colormap = null, t.histograms = null, t.bandCount = 1, t.attributeTable = null;
    const { statistics: s } = t, { allowUnmatched: n, outputValues: r, inputRanges: a, noDataRanges: o, isLastInputRangeInclusive: u } = this.functionArguments;
    if (s != null && s.length && r?.length) if (n) {
      const c = Math.min.apply(null, [...r, s[0].min]), p = Math.max.apply(null, [...r, s[0].max]);
      t.statistics = [{ ...s[0], min: c, max: p }];
    } else {
      let c = r[0], p = c;
      for (let h = 0; h < r.length; h++) c = c > r[h] ? r[h] : c, p = p > r[h] ? p : r[h];
      t.statistics = [{ ...s[0], min: c, max: p }];
    }
    return this.rasterInfo = t, this.lookup = n ? null : js({ srcPixelType: e, inputRanges: a, outputValues: r, noDataRanges: o, allowUnmatched: n, isLastInputRangeInclusive: u, outputPixelType: this.outputPixelType }), { success: !0, supportsGPU: (!r || r.length <= Z) && (!o || o.length <= Z) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { lookup: s, outputPixelType: n } = this;
    if (s) {
      const p = Ie(e, { lut: [s.lut], offset: s.offset, outputPixelType: n });
      return p != null && s.mask && (p.mask = Ss(e.pixels[0], e.mask, s.mask, s.offset, "u8")), p;
    }
    const { inputRanges: r, outputValues: a, noDataRanges: o, allowUnmatched: u, isLastInputRangeInclusive: c } = this.functionArguments;
    return Ms(e, { inputRanges: r, outputValues: a, noDataRanges: o, outputPixelType: n, allowUnmatched: u, isLastInputRangeInclusive: c });
  }
  _getWebGLParameters() {
    const { allowUnmatched: t, noDataRanges: e, isLastInputRangeInclusive: s } = this.functionArguments, n = new Float32Array(3 * Z), r = 1e-5, a = this.functionArguments.inputRanges ?? [], o = this.functionArguments.outputValues ?? [], u = o.length;
    for (let p = 0; p < Z; p++) n[3 * p] = a[2 * p] ?? jt - 1, n[3 * p + 1] = a[2 * p + 1] ?? jt, n[3 * p + 2] = o[p] ?? 0, p < u && (p > 0 && (n[3 * p] -= r), (p < u - 1 || !s) && (n[3 * p + 1] -= r));
    const c = new Float32Array(2 * Z);
    return c.fill(jt), e?.length && c.set(e), { allowUnmatched: t, rangeMaps: n, noDataRanges: c, clampRange: ot(this.outputPixelType) };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], bt.prototype, "functionName", void 0), l([m({ type: oo, json: { write: !0, name: "rasterFunctionArguments" } })], bt.prototype, "functionArguments", void 0), l([m()], bt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], bt.prototype, "lookup", void 0), bt = l([P("esri.layers.support.rasterFunctions.RemapFunction")], bt);
const io = bt;
var ge;
const ao = new it({ 1: "degree", 2: "percent-rise", 3: "adjusted" }, { useNumericKeys: !0 });
let st = ge = class extends D {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.removeEdgeEffect = !1;
  }
  clone() {
    return new ge({ slopeType: this.slopeType, zFactor: this.zFactor, pixelSizePower: this.pixelSizePower, pixelSizeFactor: this.pixelSizeFactor, removeEdgeEffect: this.removeEdgeEffect, raster: this.raster });
  }
};
l([J(ao)], st.prototype, "slopeType", void 0), l([m({ type: Number, json: { write: !0 } })], st.prototype, "zFactor", void 0), l([m({ type: Number, json: { name: "psPower", write: !0 } })], st.prototype, "pixelSizePower", void 0), l([m({ type: Number, json: { name: "psZFactor", write: !0 } })], st.prototype, "pixelSizeFactor", void 0), l([m({ type: Boolean, json: { write: !0 } })], st.prototype, "removeEdgeEffect", void 0), st = ge = l([P("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], st);
const uo = st;
let wt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.statistics = this.functionArguments.slopeType !== "percent-rise" ? [{ min: 0, max: 90, avg: 1, stddev: 1 }] : null, t.histograms = null, t.colormap = null, t.attributeTable = null, t.bandCount = 1, this.rasterInfo = t, this.isGCS = t.spatialReference?.isGeographic ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { zFactor: s, slopeType: n, pixelSizePower: r, pixelSizeFactor: a } = this.functionArguments, { isGCS: o } = this, { extent: u, primaryPixelSizes: c } = t, p = c?.[0], h = p ?? (u ? { x: u.width / e.width, y: u.height / e.height } : { x: 1, y: 1 });
    return Os(e, { zFactor: s, slopeType: n, pixelSizePower: r, pixelSizeFactor: a, isGCS: o, resolution: h });
  }
  _getWebGLParameters() {
    const { zFactor: t, slopeType: e, pixelSizeFactor: s, pixelSizePower: n } = this.functionArguments;
    return { zFactor: this.isGCS && t >= 1 ? t * Qt : t, slopeType: e, pixelSizeFactor: s ?? 0, pixelSizePower: n ?? 0 };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], wt.prototype, "functionName", void 0), l([m({ type: uo, json: { write: !0, name: "rasterFunctionArguments" } })], wt.prototype, "functionArguments", void 0), l([m()], wt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], wt.prototype, "isGCS", void 0), wt = l([P("esri.layers.support.rasterFunctions.SlopeFunction")], wt);
const lo = wt, es = new it({ 1: "min", 2: "max", 3: "mean", 4: "stddev", 5: "median", 6: "majority", 7: "minority" }, { useNumericKeys: !0 });
function co(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: n, height: r, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { statisticsType: u, kernelRows: c, kernelCols: p } = t, h = u === "stddev", f = n * r, d = new Float64Array(f), g = new Float64Array(f), x = new Uint32Array(f);
  for (let T = 0; T < r; T++) {
    const F = T * n;
    let R = 0, k = 0, _ = 0;
    for (let B = 0; B < p; B++) a && !a[F + B] || (R += s[F + B], h && (k += s[F + B] ** 2), _++);
    d[F] = R, g[F] = k, x[F] = _;
    for (let B = 1; B <= n - p; B++) {
      const W = F + B - 1, Dt = W + p;
      a ? (a[W] && (_--, R -= s[W], h && (k -= s[W] ** 2)), a[Dt] && (_++, R += s[Dt], h && (k += s[Dt] ** 2))) : (R -= s[W], R += s[Dt], h && (k -= s[W] ** 2, k += s[Dt] ** 2)), d[F + B] = R, x[F + B] = _, h && (g[F + B] = k);
    }
  }
  const y = new Float64Array(f), b = new Float64Array(f), A = new Uint32Array(f), I = c * n;
  for (let T = 0; T <= n - p; T++) {
    let F = 0, R = 0, k = 0;
    for (let _ = 0; _ < c; _++) {
      const B = _ * n + T;
      F += d[B], k += x[B], h && (R += g[B]);
    }
    y[T] = F, b[T] = R, A[T] = k;
    for (let _ = 1; _ <= r - c; _++) {
      const B = (_ - 1) * n + T, W = B + I;
      F -= d[B], F += d[W], k -= x[B], k += x[W], h && (R -= g[B], R += g[W]), y[_ * n + T] = F, b[_ * n + T] = R, A[_ * n + T] = k;
    }
  }
  const v = Math.floor(c / 2), N = Math.floor(p / 2);
  for (let T = v; T < r - v; T++) {
    const F = T * n;
    for (let R = N; R < n - N; R++) {
      const k = (T - v) * n + R - N, _ = A[k];
      if (_ === 0 || e && (!a || a[F + R])) continue;
      const B = y[k] / _, W = h ? Math.sqrt((b[k] - y[k] * B) / _) : B;
      o[F + R] = W, a && (a[F + R] = 255);
    }
  }
}
function po(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: n, height: r, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c, statisticsType: p } = t, h = Math.floor(u / 2), f = Math.floor(c / 2), d = p === "min", g = o.slice(), x = new Uint32Array(n * r);
  for (let y = h; y < r - h; y++) {
    const b = y * n;
    for (let A = f; A < n - f; A++) {
      let I = d ? Number.MAX_VALUE : -Number.MAX_VALUE, v = 0;
      for (let N = 0; N < u; N++) for (let T = 0; T < c; T++) {
        const F = b + A + (N - h) * n + T - f;
        a && !a[F] || (I = d ? Math.min(I, s[F]) : Math.max(I, s[F]), v++);
      }
      a ? (g[b + A] = v === 0 ? 0 : I, x[b + A] = v) : o[b + A] = v === 0 ? 0 : I;
    }
  }
  if (a) for (let y = h; y < r - h; y++) {
    const b = y * n;
    for (let A = f; A < n - f; A++) if (x[b + A]) {
      if (e && a[b + A]) continue;
      o[b + A] = g[b + A], a[b + A] = 255;
    }
  }
}
function ho(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: n, height: r, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c } = t, p = Math.floor(u / 2), h = Math.floor(c / 2), f = o.slice(), d = new Uint32Array(n * r);
  for (let g = p; g < r - p; g++) {
    const x = g * n;
    for (let y = h; y < n - h; y++) {
      if (e && a?.[x + y]) continue;
      const b = [];
      for (let A = 0; A < u; A++) for (let I = 0; I < c; I++) {
        const v = x + y + (A - p) * n + I - h;
        a && !a[v] || b.push(s[v]);
      }
      b.length && (b.sort((A, I) => A - I), a ? (f[x + y] = b[Math.floor((b.length - 1) / 2)], d[x + y] = b.length) : o[x + y] = b[Math.floor((b.length - 1) / 2)]);
    }
  }
  if (a) for (let g = p; g < r - p; g++) {
    const x = g * n;
    for (let y = h; y < n - h; y++) if (d[x + y]) {
      if (e && a[x + y]) continue;
      o[x + y] = f[x + y], a[x + y] = 255;
    }
  }
}
function mo(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: n, height: r, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c } = t, p = Math.floor(u / 2), h = Math.floor(c / 2), f = t.statisticsType === "majority", d = u * c, g = o.slice(), x = new Uint32Array(n * r);
  for (let y = p; y < r - p; y++) {
    const b = y * n;
    for (let A = h; A < n - h; A++) {
      if (e && a?.[b + A]) continue;
      const I = /* @__PURE__ */ new Map();
      for (let F = 0; F < u; F++) for (let R = 0; R < c; R++) {
        const k = b + A + (F - p) * n + R - h;
        if (a && !a[k]) continue;
        const _ = s[k];
        I.set(_, I.has(_) ? I.get(_) + 1 : 1);
      }
      if (I.size === 0) continue;
      let v = 0, N = 0, T = f ? 0 : d + 1;
      for (const F of I.keys()) N = I.get(F), f === N > T && (T = N, v = F);
      a ? (g[b + A] = v, x[b + A] = I.size) : o[b + A] = v;
    }
  }
  if (a) for (let y = p; y < r - p; y++) {
    const b = y * n;
    for (let A = h; A < n - h; A++) if (x[b + A]) {
      if (e && a[b + A]) continue;
      o[b + A] = g[b + A], a[b + A] = 255;
    }
  }
}
function fo(i, t) {
  const { mask: e } = i, { fillNoDataOnly: s } = t;
  if (s && !e) return i;
  const { pixels: n, width: r, height: a, bandMasks: o, pixelType: u } = i, c = n.length, p = r * a, h = [], { kernelRows: f, kernelCols: d, statisticsType: g, mirrorEdges: x } = t;
  if (s && !e) return i;
  const y = t.outputPixelType ?? u, b = [];
  for (let v = 0; v < c; v++) {
    const N = n[v], T = w.createEmptyBand(y, p);
    s && T.set(N);
    const F = o?.[v] ?? e, R = F?.slice() ?? null, k = { band: N, width: r, height: a, mask: R, outBand: T };
    switch (g) {
      case "min":
      case "max":
        po(k, t);
        break;
      case "mean":
      case "stddev":
        co(k, t);
        break;
      case "median":
        ho(k, t);
        break;
      case "majority":
      case "minority":
        mo(k, t);
    }
    x && !s && _e(T, r, a, f, d), h.push(T), R && b.push(R);
  }
  let A = b[0] ?? e;
  b.length !== c && (b.length = 0), c > 1 && o?.length && (A = w.combineBandMasks(o));
  const I = new w({ pixelType: y, width: r, height: a, pixels: h, bandMasks: o && b.length ? b : null, mask: A });
  return I.updateStatistics(), I;
}
var ye;
let vt = ye = class extends D {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.fillNoDataOnly = !1, this.statisticsType = "min";
  }
  clone() {
    return new ye({ rows: this.rows, cols: this.cols, fillNoDataOnly: this.fillNoDataOnly, statisticsType: this.statisticsType, raster: L(this.raster) });
  }
};
l([m({ json: { write: !0, read: { source: ["kernelRows", "rows"], reader: (i, t) => Number(i ?? t?.kernelRows ?? 3) } } })], vt.prototype, "rows", void 0), l([m({ json: { write: !0, read: { source: ["kernelCols", "cols"], reader: (i, t) => Number(i ?? t?.kernelCols ?? 3) } } })], vt.prototype, "cols", void 0), l([m({ json: { write: !0 } })], vt.prototype, "fillNoDataOnly", void 0), l([m({ json: { read: { source: ["statisticsType", "type"], reader: (i, t) => es.fromJSON(t?.statisticsType ?? t?.type) ?? "min" }, write: { target: "type" } } }), J(es)], vt.prototype, "statisticsType", void 0), vt = ye = l([P("esri.layers.support.rasterFunctions.StatisticsFunctionArguments")], vt);
const go = vt;
let Bt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Statistics", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { type: t } = this.functionArguments.toJSON();
    if (t < 1 || t > 7) return { success: !1, supportsGPU: !1, error: `statistics-function: the given statistics type is not supported ${t}` };
    const e = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const s = e.clone();
    s.pixelType = this.outputPixelType;
    const { statisticsType: n } = this.functionArguments;
    return n === "stddev" && this._removeStatsHistColormapVAT(s), this.rasterInfo = s, { success: !0, supportsGPU: s.bandCount <= 3 && t < 5 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { statisticsType: s, rows: n, cols: r, fillNoDataOnly: a } = this.functionArguments;
    return fo(e, { kernelRows: n, kernelCols: r, fillNoDataOnly: a, outputPixelType: this.outputPixelType, statisticsType: s, mirrorEdges: !0 });
  }
  _getWebGLParameters() {
    const { rows: t, cols: e, statisticsType: s, fillNoDataOnly: n } = this.functionArguments;
    return { fillNoDataOnly: n, kernelRows: t, kernelCols: e, statisticsType: s, clampRange: ot(this.outputPixelType) };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Bt.prototype, "functionName", void 0), l([m({ type: go, json: { write: !0, name: "rasterFunctionArguments" } })], Bt.prototype, "functionArguments", void 0), l([m()], Bt.prototype, "rasterArgumentNames", void 0), Bt = l([P("esri.layers.support.rasterFunctions.StatisticsFunction")], Bt);
const yo = Bt;
var xe;
let At = xe = class extends D {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  readStatistics(i, t) {
    if (!i?.length) return null;
    const e = [];
    return i.forEach((s) => {
      const n = { min: s.min, max: s.max, avg: s.avg ?? s.mean, stddev: s.stddev ?? s.standardDeviation };
      e.push(n);
    }), e;
  }
  writeStatistics(i, t, e) {
    if (!i?.length) return;
    const s = [];
    i.forEach((n) => {
      const r = { ...n, mean: n.avg, standardDeviation: n.stddev };
      delete r.avg, delete r.stddev, s.push(r);
    }), t[e] = s;
  }
  clone() {
    return new xe({ statistics: L(this.statistics), histograms: L(this.histograms) });
  }
};
l([m({ json: { write: !0 } })], At.prototype, "statistics", void 0), l([St("statistics")], At.prototype, "readStatistics", null), l([Mt("statistics")], At.prototype, "writeStatistics", null), l([m({ json: { write: !0 } })], At.prototype, "histograms", void 0), At = xe = l([P("esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")], At);
const xo = At;
let nt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistogram", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const e = t.clone(), { statistics: s, histograms: n } = this.functionArguments;
    return n && (e.histograms = n), s && (e.statistics = s), this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    return t.pixelBlocks?.[0];
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], nt.prototype, "functionName", void 0), l([m({ type: xo, json: { write: !0, name: "rasterFunctionArguments" } })], nt.prototype, "functionArguments", void 0), l([m()], nt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], nt.prototype, "indexedColormap", void 0), l([m()], nt.prototype, "isNoopProcess", void 0), nt = l([P("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")], nt);
const bo = nt;
var be;
const wo = new it({ 0: "none", 3: "standard-deviation", 4: "histogram-equalization", 5: "min-max", 6: "percent-clip", 9: "sigmoid" }, { useNumericKeys: !0 });
let V = be = class extends D {
  constructor() {
    super(...arguments), this.computeGamma = !1, this.dynamicRangeAdjustment = !1, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = !1;
  }
  writeStatistics(i, t, e) {
    i?.length && (Array.isArray(i[0]) || (i = i.map((s) => [s.min, s.max, s.avg, s.stddev])), t[e] = i);
  }
  clone() {
    return new be({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: L(this.statistics), gamma: L(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, histograms: L(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment, raster: this.raster });
  }
};
l([m({ type: Boolean, json: { write: !0 } })], V.prototype, "computeGamma", void 0), l([m({ type: Boolean, json: { name: "dra", write: !0 } })], V.prototype, "dynamicRangeAdjustment", void 0), l([m({ type: [Number], json: { write: !0 } })], V.prototype, "gamma", void 0), l([m()], V.prototype, "histograms", void 0), l([m({ type: Number, json: { write: !0 } })], V.prototype, "maxPercent", void 0), l([m({ type: Number, json: { write: !0 } })], V.prototype, "minPercent", void 0), l([m({ type: Number, json: { write: !0 } })], V.prototype, "numberOfStandardDeviations", void 0), l([m({ type: Number, json: { name: "max", write: !0 } })], V.prototype, "outputMax", void 0), l([m({ type: Number, json: { name: "min", write: !0 } })], V.prototype, "outputMin", void 0), l([m({ type: Number, json: { write: !0 } })], V.prototype, "sigmoidStrengthLevel", void 0), l([m({ json: { type: [[Number]], write: !0 } })], V.prototype, "statistics", void 0), l([Mt("statistics")], V.prototype, "writeStatistics", null), l([J(wo)], V.prototype, "stretchType", void 0), l([m({ type: Boolean, json: { write: !0 } })], V.prototype, "useGamma", void 0), V = be = l([P("esri.layers.support.rasterFunctions.StretchFunctionArguments")], V);
const vo = V;
let rt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t = this.sourceRasterInfos[0], { pixelType: e } = t, { functionArguments: s } = this, { dynamicRangeAdjustment: n, gamma: r, useGamma: a } = s;
    if (!n && ["u8", "u16", "s8", "s16"].includes(e)) {
      const p = Yt(s.toJSON(), { rasterInfo: t }), h = H(this.outputPixelType) ? "round" : "float";
      this.lookup = Ds({ pixelType: e, ...p, gamma: a ? r : null, rounding: h }), this.cutOffs = p;
    } else n || (this.cutOffs = Yt(s.toJSON(), { rasterInfo: t }));
    this.outputPixelType = this._getOutputPixelType(e);
    const o = t.clone();
    o.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(o), this.outputPixelType === "u8" && (o.keyProperties.DataType = "processed");
    const { outputMin: u = 0, outputMax: c = 255 } = this.functionArguments;
    o.statistics = [];
    for (let p = 0; p < o.bandCount; p++) o.statistics[p] = { min: u, max: c };
    return this.rasterInfo = o, { success: !0, supportsGPU: !n };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { lookup: s } = this;
    if (s) return Ie(e, { ...s, outputPixelType: this.rasterInfo.pixelType });
    const { functionArguments: n } = this, r = this.cutOffs || Yt(n.toJSON(), { rasterInfo: this.sourceRasterInfos[0], pixelBlock: e }), a = n.useGamma ? n.gamma : null;
    return Gs(e, { ...r, gamma: a, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const { outputMin: t = 0, outputMax: e = 255, gamma: s, useGamma: n } = this.functionArguments, r = this.rasterInfo.bandCount >= 2 ? 3 : 1, a = n && s?.length ? Es(r, s) : [1, 1, 1], { minCutOff: o, maxCutOff: u } = this.cutOffs ?? { minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255] };
    o.length === 1 && (o[1] = o[2] = o[0], u[1] = u[2] = u[0]);
    const c = new Float32Array(r);
    let p;
    for (p = 0; p < r; p++) c[p] = (e - t) / (u[p] - o[p]);
    const h = H(this.outputPixelType);
    return { bandCount: r, outMin: t, outMax: e, minCutOff: o, maxCutOff: u, factor: c, useGamma: n, gamma: n && s ? s : [1, 1, 1], gammaCorrection: n && a ? a : [1, 1, 1], stretchType: this.functionArguments.stretchType, isOutputRounded: h, type: "stretch" };
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], rt.prototype, "functionName", void 0), l([m({ type: vo, json: { write: !0, name: "rasterFunctionArguments" } })], rt.prototype, "functionArguments", void 0), l([m()], rt.prototype, "rasterArgumentNames", void 0), l([m({ json: { write: !0 } })], rt.prototype, "lookup", void 0), l([m({ json: { write: !0 } })], rt.prototype, "cutOffs", void 0), rt = l([P("esri.layers.support.rasterFunctions.StretchFunction")], rt);
const Ao = rt;
var we;
let Xt = we = class extends D {
  constructor() {
    super(...arguments), this.attributeTableAsRecordSet = null;
  }
  clone() {
    return new we({ attributeTableAsRecordSet: L(this.attributeTableAsRecordSet) });
  }
};
l([m({ json: { write: !0 } })], Xt.prototype, "attributeTableAsRecordSet", void 0), Xt = we = l([P("esri.layers.support.rasterFunctions.TableFunctionArguments")], Xt);
const To = Xt;
let Tt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Table", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const i = this.sourceRasterInfos[0];
    if (i.bandCount > 1 || i.pixelType.startsWith("f")) return { success: !1, supportsGPU: !1, error: "table-function: Source data must be single band and integer pixel type." };
    const { attributeTableAsRecordSet: t } = this.functionArguments;
    if (!t) return { success: !1, supportsGPU: !1, error: "table-function: Missing attributeTableAsRecordSet argument." };
    this.outputPixelType = this._getOutputPixelType(i.pixelType);
    const e = i.clone();
    return e.pixelType = this.outputPixelType, e.bandCount = 1, e.dataType !== "thematic" && (e.keyProperties = e.keyProperties ? { ...e.keyProperties, DataType: "thematic" } : { DataType: "thematic" }), this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(i) {
    return i.pixelBlocks?.[0];
  }
};
l([m({ json: { write: !0, name: "rasterFunction" } })], Tt.prototype, "functionName", void 0), l([m({ type: To, json: { write: !0, name: "rasterFunctionArguments" } })], Tt.prototype, "functionArguments", void 0), l([m()], Tt.prototype, "rasterArgumentNames", void 0), l([m()], Tt.prototype, "isNoopProcess", void 0), Tt = l([P("esri.layers.support.rasterFunctions.TableFunction")], Tt);
const Po = Tt, M = /* @__PURE__ */ new Map();
function Fo(i, t) {
  const { rasterFunctionArguments: e } = i;
  e && (e.rasters || [e.raster, e.raster2]).forEach((s) => {
    s && typeof s != "number" && (typeof s == "string" ? s.startsWith("http") && (t.includes(s) || t.push(s)) : "rasterFunctionArguments" in s && Fo(s, t));
  });
}
function ei(i, t) {
  if (t = t ?? {}, "function" in (i = L(i)) && "arguments" in i && i.arguments) {
    const e = xs(i, /* @__PURE__ */ new Map(), t);
    if (Te(e), !e.renderingRule) throw new Ot("raster-function-helper", "Unsupported raster function json.");
    i = e.renderingRule;
  }
  if ("rasterFunction" in i) return gs(i = ve(i), t);
  throw new Ot("raster-function-helper", "unsupported raster function json.");
}
function No(i, t) {
  return t[0] === "rasters" && Array.isArray(i.rasters) ? i.rasters : t.map((e) => i[e]);
}
function ss(i) {
  return !!(i && typeof i == "object" && i.rasterFunction && i.rasterFunctionArguments);
}
function ve(i) {
  const { rasterFunction: t, rasterFunctionArguments: e } = i, s = {};
  for (const n in e) {
    let r = e[n];
    const a = n.toLowerCase();
    if (a === "rasters" && Array.isArray(r)) s.rasters = r.map((o) => ss(o) ? ve(o) : o);
    else switch (ss(r) && (r = ve(r)), a) {
      case "dra":
        s.dra = r;
        break;
      case "pspower":
        s.psPower = r;
        break;
      case "pszfactor":
        s.psZFactor = r;
        break;
      case "bandids":
        s.bandIds = r;
        break;
      default:
        s[n[0].toLowerCase() + n.slice(1)] = r;
    }
  }
  return t !== "Local" || s.rasters?.length || (s.rasters = ["$$"]), { ...i, rasterFunctionArguments: s };
}
function gs(i, t) {
  const { rasterFunction: e, rasterFunctionArguments: s } = i, n = i.outputPixelType?.toLowerCase();
  if (e == null || !M.has(e)) throw new Ot("raster-function-helper", `unsupported raster function: ${e}`);
  const r = M.get(e), a = (typeof r.ctor == "function" ? r.ctor : r.ctor.default).fromJSON({ ...i, outputPixelType: n }), { rasterArgumentNames: o } = a, u = [], c = No(s, o), p = o[0] === "rasters" || o.length > 1, h = [];
  for (let f = 0; f < c.length; f++) {
    const d = c[f];
    let g;
    d == null || typeof d == "string" && d.startsWith("$") ? u.push(t?.raster) : typeof d == "string" ? t[d] && u.push(t[d]) : typeof d != "number" && "rasterFunction" in d && (g = gs(d, t), p || (a.functionArguments[o[f]] = g), u.push(g)), p && h.push(g ?? d);
  }
  if (p && (o[0] === "rasters" ? a.functionArguments.rasters = h : o.forEach((f, d) => {
    a.functionArguments[f] = h[d];
  })), t) {
    a.sourceRasters = u;
    const f = t.raster?.url;
    f && (a.mainPrimaryRasterId = f);
  }
  return a;
}
function ys(i, t) {
  if (i && t) for (const e in i) {
    const s = i[e];
    s && typeof s == "object" && "type" in s && (s.type === "RasterFunctionTemplate" ? ys(s.arguments, t) : s.type === "RasterFunctionVariable" && t[s.name] != null && (s.value = t[s.name]));
  }
}
function Ae(i, t) {
  if (!i || typeof i != "object") return i;
  const { value: e } = i;
  if (!e || typeof e != "object") return i.isDataset ? "$$" : e;
  if (Array.isArray(e)) return e.length === 0 ? [] : e.map((n) => typeof n == "object" && n.type === "RasterFunctionVariable" ? Ae(n, t) : n);
  if ("value" in e && ["number", "string", "boolean"].includes(typeof e.value)) return e.value;
  if (i.isDataset && e.type !== "Scalar") return "$$";
  if (!("type" in e)) return e;
  let s = e;
  switch (e.type) {
    case "Scalar":
      s = e.value;
      break;
    case "AlgorithmicColorRamp":
      s = ns(e);
      break;
    case "MultiPartColorRamp":
      s = { type: "multipart", colorRamps: e.ArrayOfColorRamp.map(ns) };
      break;
    case "ArgumentArray":
      if (e.elements?.length && e.elements[0].type !== "RasterStatistics") {
        const n = [];
        for (let r = 0; r < e.elements.length; r++) {
          const a = e.elements[r], { type: o } = a;
          if (o) if (o === "RasterFunctionTemplate") {
            const { renderingRule: u } = xs(a, t);
            n.push(u), a._object_id != null && t.set(a._object_id, u);
          } else {
            if (o !== "RasterFunctionVariable") throw new Ot("raster-function-helper", "unsupported raster function json.");
            {
              const u = Ae(a, t);
              n.push(u), a._object_id != null && t.set(a._object_id, u);
            }
          }
          else n.push(a);
        }
        s = n;
      } else s = e.elements;
  }
  return e._object_id != null && t.set(e._object_id, s), s;
}
function ns(i) {
  const t = i.algorithm ?? "esriHSVAlgorithm";
  let { FromColor: e, ToColor: s } = i;
  if (!Array.isArray(e)) {
    const { r: n, g: r, b: a } = je({ h: e.Hue, s: e.Saturation, v: e.Value });
    e = [n, r, a, e.AlphaValue];
  }
  if (!Array.isArray(s)) {
    const { r: n, g: r, b: a } = je({ h: s.Hue, s: s.Saturation, v: s.Value });
    s = [n, r, a, s.AlphaValue];
  }
  return { type: "algorithmic", algorithm: t, fromColor: e, toColor: s };
}
function xs(i, t, e) {
  e && ys(i, e);
  const s = { renderingRule: {}, templates: t };
  return bs(i, s), s;
}
function bs(i, t) {
  if (!i || !t.renderingRule) return;
  const { renderingRule: e, templates: s } = t, { function: n, arguments: r, _object_id: a } = i;
  if (!n || !r) return;
  a != null && s.set(a, e), e.rasterFunction = n.type.replace("Function", ""), e.outputPixelType = n.pixelType;
  const o = {};
  e.rasterFunctionArguments = o;
  for (const u in r) {
    if (u === "type" || u === "object_id" || u === "_object_ref_id") continue;
    const c = r[u];
    c && typeof c == "object" && "type" in c && (c.type === "RasterFunctionTemplate" || c.type === "RasterFunctionVariable") ? (c.type === "RasterFunctionVariable" ? o[u] = Ae(c, s) : (e.rasterFunctionArguments[u] = {}, bs(c, { renderingRule: e.rasterFunctionArguments[u], templates: s })), c._object_id != null && s.set(c._object_id, o[u])) : o[u] = c;
  }
  switch (o.DEM && !o.Raster && (o.Raster = o.DEM, delete o.DEM), e.rasterFunction) {
    case "Stretch":
      $o(o);
      break;
    case "Colormap":
      Io(o);
      break;
    case "Convolution":
      Ro(o);
      break;
    case "Mask":
      Co(o);
  }
}
function Te(i) {
  const { renderingRule: t, templates: e } = i;
  if (typeof t != "object" || !t?.rasterFunctionArguments || !e.size) return;
  const { rasterFunctionArguments: s } = t;
  for (const n in s) {
    const r = s[n], a = n === "_object_ref_id" ? r : r && typeof r == "object" && "_object_ref_id" in r ? r._object_ref_id : null;
    if (a == null) r && typeof r == "object" && (r.rasterFunctionArguments && Te({ renderingRule: r, templates: e }), Array.isArray(r) && r.forEach((o, u) => {
      if (typeof o == "object") if (o._object_ref_id != null) {
        if (!e.has(o._object_ref_id)) throw new Ot("raster-function-helper", `unsupported raster function json. _object_ref_id: ${r} does not exist`);
        const c = e.get(a);
        c && typeof c == "object" ? Object.assign(o, c) : r[u] = c;
      } else Te({ renderingRule: o, templates: e });
    }));
    else {
      if (!e.has(a)) throw new Ot("raster-function-helper", `unsupported raster function json. _object_ref_id: ${a} does not exist`);
      const o = e.get(a);
      n !== "_object_ref_id" ? s[n] = o : o && typeof o == "object" && Object.assign(s, o);
    }
  }
}
function $o(i) {
  i.Statistics?.length && typeof i.Statistics == "object" && (i.Statistics = i.Statistics.map((t) => [t.min, t.max, t.mean, t.standardDeviation])), i.NumberOfStandardDeviation != null && (i.NumberOfStandardDeviations = i.NumberOfStandardDeviation, delete i.NumberOfStandardDeviation);
}
function Io(i) {
  i.ColorRamp?.type?.toLowerCase() === "randomcolorramp" && (delete i.ColorRamp, i.ColormapName = "Random"), i.ColorSchemeType === 0 && delete i.ColorRamp;
}
function Ro(i) {
  i.ConvolutionType != null && (i.Type = i.ConvolutionType, delete i.ConvolutionType);
}
function Co(i) {
  i.NoDataValues?.length && typeof i.NoDataValues[0] == "string" && (i.NoDataValues = i.NoDataValues.filter((t) => t !== "").map((t) => Number(t)));
}
M.set("Arithmetic", { desc: "Arithmetic Function", ctor: jn, rasterArgumentNames: ["rasters"] }), M.set("Aspect", { desc: "Aspect Function", ctor: Mn, rasterArgumentNames: ["raster"] }), M.set("BandArithmetic", { desc: "Band Arithmetic Function", ctor: lr, rasterArgumentNames: ["raster"] }), M.set("Colormap", { desc: "Colormap Function", ctor: vr, rasterArgumentNames: ["raster"] }), M.set("CompositeBand", { desc: "CompositeBand Function", ctor: Tr, rasterArgumentNames: ["rasters"] }), M.set("ComputeChange", { desc: "ComputeChange Function", ctor: Br, rasterArgumentNames: ["rasters"] }), M.set("Convolution", { desc: "Convolution Function", ctor: Vr, rasterArgumentNames: ["raster"] }), M.set("ContrastBrightness", { desc: "Contrast Brightness Function", ctor: Sr, rasterArgumentNames: ["raster"] }), M.set("ExtractBand", { desc: "ExtractBand Function", ctor: qr, rasterArgumentNames: ["raster"] }), M.set("Curvature", { desc: "Curvature Function", ctor: Lr, rasterArgumentNames: ["raster"] }), M.set("Grayscale", { desc: "Grayscale Function", ctor: Qr, rasterArgumentNames: ["raster"] }), M.set("Clip", { desc: "Clip Function", ctor: pr, rasterArgumentNames: ["raster"] }), M.set("Local", { desc: "Local Function", ctor: to, rasterArgumentNames: ["rasters"] }), M.set("Mask", { desc: "Mask Function", ctor: so, rasterArgumentNames: ["raster"] }), M.set("NDVI", { desc: "NDVI Function", ctor: ro, rasterArgumentNames: ["raster"] }), M.set("Remap", { desc: "Remap Function", ctor: io, rasterArgumentNames: ["raster"] }), M.set("Slope", { desc: "Slope Function", ctor: lo, rasterArgumentNames: ["raster"] }), M.set("Statistics", { desc: "Focal Statistics Function", ctor: yo, rasterArgumentNames: ["raster"] }), M.set("StatisticsHistogram", { desc: "Statistics Histogram Function", ctor: bo, rasterArgumentNames: ["raster"] }), M.set("Stretch", { desc: "Stretch Function", ctor: Ao, rasterArgumentNames: ["raster"] }), M.set("Table", { desc: "Attribute Table Function", ctor: Po, rasterArgumentNames: ["raster"] });
let Ut = class extends $e {
  get affectsPixelSize() {
    return !1;
  }
  forwardTransform(i) {
    return i;
  }
  inverseTransform(i) {
    return i;
  }
};
l([m()], Ut.prototype, "affectsPixelSize", null), l([m({ json: { write: !0 } })], Ut.prototype, "spatialReference", void 0), Ut = l([P("esri.layers.support.rasterTransforms.BaseRasterTransform")], Ut);
const ws = Ut;
var Pe;
let Lt = Pe = class extends ws {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(i) {
    return (i = i.clone()).type === "point" ? (i.x > 180 + this.tolerance && (i.x -= 360), i) : (i.xmin >= 180 - this.tolerance ? (i.xmax -= 360, i.xmin -= 360) : i.xmax > 180 + this.tolerance && (i.xmin = -180, i.xmax = 180), i);
  }
  inverseTransform(i) {
    return (i = i.clone()).type === "point" ? (i.x < -this.tolerance && (i.x += 360), i) : (i.xmin < -this.tolerance && (i.xmin += 360, i.xmax += 360), i);
  }
  clone() {
    return new Pe({ tolerance: this.tolerance });
  }
};
l([J({ GCSShiftXform: "gcs-shift" })], Lt.prototype, "type", void 0), l([m()], Lt.prototype, "tolerance", void 0), Lt = Pe = l([P("esri.layers.support.rasterTransforms.GCSShiftTransform")], Lt);
const si = Lt;
var Fe;
function Ne(i, t, e) {
  const { x: s, y: n } = t;
  if (e < 2)
    return { x: i[0] + s * i[2] + n * i[4], y: i[1] + s * i[3] + n * i[5] };
  if (e === 2) {
    const f = s * s, d = n * n, g = s * n;
    return { x: i[0] + s * i[2] + n * i[4] + f * i[6] + g * i[8] + d * i[10], y: i[1] + s * i[3] + n * i[5] + f * i[7] + g * i[9] + d * i[11] };
  }
  const r = s * s, a = n * n, o = s * n, u = r * s, c = r * n, p = s * a, h = n * a;
  return { x: i[0] + s * i[2] + n * i[4] + r * i[6] + o * i[8] + a * i[10] + u * i[12] + c * i[14] + p * i[16] + h * i[18], y: i[1] + s * i[3] + n * i[5] + r * i[7] + o * i[9] + a * i[11] + u * i[13] + c * i[15] + p * i[17] + h * i[19] };
}
function rs(i, t, e) {
  const { xmin: s, ymin: n, xmax: r, ymax: a, spatialReference: o } = t;
  let u = [];
  if (e < 2) u.push({ x: s, y: a }), u.push({ x: r, y: a }), u.push({ x: s, y: n }), u.push({ x: r, y: n });
  else {
    let h = 10;
    for (let f = 0; f < h; f++) u.push({ x: s, y: n + (a - n) * f / (h - 1) }), u.push({ x: r, y: n + (a - n) * f / (h - 1) });
    h = 8;
    for (let f = 1; f <= h; f++) u.push({ x: s + (r - s) * f / h, y: n }), u.push({ x: s + (r - s) * f / h, y: a });
  }
  u = u.map((h) => Ne(i, h, e));
  const c = u.map((h) => h.x), p = u.map((h) => h.y);
  return new zs({ xmin: Math.min.apply(null, c), xmax: Math.max.apply(null, c), ymin: Math.min.apply(null, p), ymax: Math.max.apply(null, p), spatialReference: o });
}
function ko(i) {
  const [t, e, s, n, r, a] = i, o = s * a - r * n, u = r * n - s * a;
  return [(r * e - t * a) / o, (s * e - t * n) / u, a / o, n / u, -r / o, -s / u];
}
let q = Fe = class extends ws {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(i, t) {
    const { coeffX: e, coeffY: s } = t;
    if (!e?.length || !s?.length || e.length !== s.length) return null;
    const n = [];
    for (let r = 0; r < e.length; r++) n.push(e[r]), n.push(s[r]);
    return n;
  }
  writeForwardCoefficients(i, t, e) {
    const s = [], n = [];
    for (let r = 0; r < i?.length; r++) r % 2 == 0 ? s.push(i[r]) : n.push(i[r]);
    t.coeffX = s, t.coeffY = n;
  }
  get inverseCoefficients() {
    let i = this._get("inverseCoefficients");
    const t = this._get("forwardCoefficients");
    return !i && t && this.polynomialOrder < 2 && (i = ko(t)), i;
  }
  set inverseCoefficients(i) {
    this._set("inverseCoefficients", i);
  }
  readInverseCoefficients(i, t) {
    const { inverseCoeffX: e, inverseCoeffY: s } = t;
    if (!e?.length || !s?.length || e.length !== s.length) return null;
    const n = [];
    for (let r = 0; r < e.length; r++) n.push(e[r]), n.push(s[r]);
    return n;
  }
  writeInverseCoefficients(i, t, e) {
    const s = [], n = [];
    for (let r = 0; r < i?.length; r++) r % 2 == 0 ? s.push(i[r]) : n.push(i[r]);
    t.inverseCoeffX = s, t.inverseCoeffY = n;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(i) {
    if (i.type === "point") {
      const t = Ne(this.forwardCoefficients, i, this.polynomialOrder);
      return new Se({ x: t.x, y: t.y, spatialReference: i.spatialReference });
    }
    return rs(this.forwardCoefficients, i, this.polynomialOrder);
  }
  inverseTransform(i) {
    if (i.type === "point") {
      const t = Ne(this.inverseCoefficients, i, this.polynomialOrder);
      return new Se({ x: t.x, y: t.y, spatialReference: i.spatialReference });
    }
    return rs(this.inverseCoefficients, i, this.polynomialOrder);
  }
  clone() {
    return new Fe({ polynomialOrder: this.polynomialOrder, forwardCoefficients: this.forwardCoefficients ? [...this.forwardCoefficients] : null, inverseCoefficients: this.inverseCoefficients ? [...this.inverseCoefficients] : null });
  }
};
l([m({ json: { write: !0 } })], q.prototype, "polynomialOrder", void 0), l([m()], q.prototype, "forwardCoefficients", void 0), l([St("forwardCoefficients", ["coeffX", "coeffY"])], q.prototype, "readForwardCoefficients", null), l([Mt("forwardCoefficients")], q.prototype, "writeForwardCoefficients", null), l([m({ json: { write: !0 } })], q.prototype, "inverseCoefficients", null), l([St("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], q.prototype, "readInverseCoefficients", null), l([Mt("inverseCoefficients")], q.prototype, "writeInverseCoefficients", null), l([m()], q.prototype, "affectsPixelSize", null), l([J({ PolynomialXform: "polynomial" })], q.prototype, "type", void 0), q = Fe = l([P("esri.layers.support.rasterTransforms.PolynomialTransform")], q);
const ni = q;
export {
  Fo as R,
  ei as S,
  ws as a,
  si as c,
  ni as y
};
//# sourceMappingURL=PolynomialTransform-CngEZVwV.js.map
