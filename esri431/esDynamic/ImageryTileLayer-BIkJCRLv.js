import { bQ as w, bR as b, eG as at, bS as X, bT as xt, oq as wt, gN as ee, or as ot, G as re, b2 as Ee, D as E, os as lt, aA as z, iP as Te, s as k, iK as It, U as ct, ot as ut, hg as bt, ou as Re, b1 as A, iQ as ht, iR as Rt, iS as vt, l8 as St, ov as Tt, ow as _t, ox as Ft, oy as Ct, oz as Ae, bU as Le, b4 as kt, hQ as Ot, eq as Pt, oA as Mt, oB as $t, oC as Me, oD as Nt, oE as Dt, eD as Bt, oF as Jt, oG as Et, iI as At, oH as Lt, iJ as He, iT as Ht, oI as Ue, oJ as zt, oK as Ve, oL as Ye, oM as Xe, b8 as Wt, oN as Gt, oO as jt, oP as qt, oQ as Ut, oR as Vt, oS as Ke, iL as Yt, oT as Xt, iH as we, h6 as Kt, oU as Qt, oV as Zt, iO as ei, oW as ve, iN as ti, iM as ii, et as ft, oX as si, cF as $e, oY as ze, oZ as ni, Q as ri, o_ as ai, o$ as oi, p0 as li, jS as ci, I as ui, nu as hi, p1 as fi, p2 as di, p3 as Qe, p4 as pi, p5 as mi, p6 as yi, p7 as pe, p8 as gi, p9 as xi, pa as wi, pb as Ii, ex as bi, eB as Ri, ez as vi, eA as Si, pc as Ti, eO as _i, hl as Fi, eN as Ci, ey as ki, eC as Oi, db as Pi, fv as Mi, B as $i, ay as ce, ho as Ni, hG as me, cz as Di, eF as Bi, cB as Ji, eM as Ei } from "./main-DZxT3i7S.js";
import { i as Ze, m as et, x as tt, h as Ai, s as Li } from "./RawBlockCache-CCRacHkC.js";
import { V as ye, v as Ne, I as it, l as st, a as Hi, e as _e, K as Ie, i as zi, t as Wi, C as Gi, D as De } from "./rasterProjectionHelper-CYzanw_V.js";
import { h as Be, l as ji, T as dt, y as We, c as qi, w as Ui } from "./PolynomialTransform-D-wBvm4_.js";
const nt = 8, Vi = 256;
let Yi = 0, B = class extends xt {
  constructor() {
    super(...arguments), this._tileFetchQueue = new wt({ concurrency: 32, process: (i, e) => this._fetchRawTile(i.pyramidLevel, i.row, i.col, { ...i.options, signal: e }) }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = !0, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  normalizeCtorArgs(i) {
    return i?.ioConfig && (i = { ...i, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: ee.create(), ...i.ioConfig } }), i;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: i } = this, e = ye(i.spatialReference);
    return e != null && i.extent.width >= e / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: i } = this.rasterInfo;
    return i == null || i.type === "gcs-shift";
  }
  set rasterJobHandler(i) {
    this._set("rasterJobHandler", i), this.datasetFormat === "Function" && this.primaryRasters?.rasters?.forEach((e) => e.rasterJobHandler = i);
  }
  get rasterId() {
    return this.url || "rasterId-" + Yi++;
  }
  set url(i) {
    this._set("url", ot(i, re.getLogger(this)));
  }
  async open(i) {
    return this._openPromise ??= Ne().then(() => this._open(i)), this._openPromise;
  }
  async fetchTile(i, e, n, t = {}) {
    const s = t.tileInfo || this.rasterInfo.storageInfo.tileInfo, a = this.getTileExtentFromTileInfo(i, e, n, s);
    return t = { noClip: !0, ...t }, this.fetchPixels(a, s.size[0], s.size[1], t);
  }
  async identify(i, e = {}) {
    i = Ee(E, i).clone().normalize();
    const { multidimensionalDefinition: n, timeExtent: t } = e, { rasterInfo: s } = this, { hasMultidimensionalTranspose: a, multidimensionalInfo: r } = s;
    let { transposedVariableName: l } = e;
    const o = r != null && a && (t != null || lt(n));
    o && !l && (l = n != null && n.length > 0 ? n[0].variableName ?? void 0 : r.variables[0].name, e = { ...e, transposedVariableName: l }), e = this._getRequestOptionsWithSliceId(e);
    const { spatialReference: c, extent: u } = s, { datumTransformation: d } = e;
    let h = it(i, c, d);
    if (!u.intersects(h)) return { location: h, value: null };
    if (s.transform != null) {
      const F = s.transform.inverseTransform(h);
      if (!s.nativeExtent.intersects(F)) return { location: F, value: null };
      h = F;
    }
    let f = 0;
    const y = l != null && r != null && s.hasMultidimensionalTranspose;
    if (this.datasetFormat === "Function") {
      const F = this.primaryRasters.rasters[0];
      if (y) return F.identify(h, e);
      const { pixelSize: M } = s, O = 3, $ = M.x * O / 2, N = M.y * O / 2, J = new z({ xmin: h.x - $, xmax: h.x + $, ymin: h.y - N, ymax: h.y + N, spatialReference: c }), H = { interpolation: "nearest", multidimensionalDefinition: n, sliceId: e.sliceId }, { pixelBlock: U } = await F.fetchPixels(J, O, O, H), { pixelBlock: W } = await this.fetchPixels(J, O, O, H);
      if (U == null) return { location: h, value: null };
      const G = Math.floor(O * O * 0.5), K = !U.mask || U.mask[G] ? U.pixels.map((q) => q[G]) : null;
      let te;
      return W != null && (te = !W.mask || W.mask[G] ? W.pixels.map((q) => q[G]) : void 0), { location: h, value: K, processedValue: te, pyramidLevel: 0 };
    }
    if (!y) {
      if (e.srcResolution)
        f = st(e.srcResolution, s, this.ioConfig.sampling).pyramidLevel;
      else if (f = await this.computeBestPyramidLevelForLocation(i, e), f == null) return { location: h, value: null };
    }
    const g = this.identifyPixelLocation(h, f, null, y);
    if (g === null) return { location: h, value: null };
    const { row: p, col: m, rowOffset: x, colOffset: R, blockWidth: I } = g, S = l ?? e.sliceId, T = Ze(this.rasterId, S), v = `${f}/${p}/${m}`;
    let C = et(T, null, v);
    C == null && (C = this.fetchRawTile(f, p, m, e), tt(T, null, v, C));
    const _ = await C;
    if (!_?.pixels?.length) return { location: h, value: null };
    const P = x * I + R;
    return this._processIdentifyResult(_, { srcLocation: h, position: P, pyramidLevel: f, useTransposedTile: !!y, requestSomeSlices: o, identifyOptions: e });
  }
  async fetchPixels(i, e, n, t = {}) {
    i = Hi(i), t = this._getRequestOptionsWithSliceId(t);
    const { _hasNoneOrGCSShiftTransform: s } = this;
    if (t.requestRawData && s) return this._fetchPixels(i, e, n, t);
    const a = ye(i.spatialReference), r = _e(i);
    if (a == null || r === 0 || r === 1 && this._isGlobalWrappableSource && s) return this._fetchPixels(i, e, n, t);
    if (r >= 3) return { extent: i, pixelBlock: null };
    const l = [], { xmin: o, xmax: c } = i, u = Math.round(a / (c - o) * e), d = u - Math.round((a / 2 - o) / (c - o) * e);
    let h = 0;
    const f = [];
    for (let m = 0; m <= r; m++) {
      const x = new z({ xmin: m === 0 ? o : -a / 2, xmax: m === r ? c - a * m : a / 2, ymin: i.ymin, ymax: i.ymax, spatialReference: i.spatialReference }), R = m === 0 ? u - d : m === r ? e - h : u;
      h += R, f.push(R);
      const I = t.disableWrapAround && m > 0 ? null : this._fetchPixels(x, R, n, t);
      l.push(I);
    }
    const y = (await Promise.all(l)).map((m) => m?.pixelBlock);
    let g = null;
    const p = { width: e, height: n };
    return this.rasterJobHandler ? g = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: y, srcMosaicSize: p, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: f }, t)).pixelBlock : g = Te(y, p, { blockWidths: f }), { extent: i, srcExtent: Ie(i, this.rasterInfo.spatialReference, t.datumTransformation), pixelBlock: g };
  }
  async fetchRawPixels(i, e, n, t = {}) {
    e = { x: Math.floor(e.x), y: Math.floor(e.y) };
    const s = await this._fetchRawTiles(i, e, n, t), { nativeExtent: a, nativePixelSize: r, storageInfo: l } = this.rasterInfo, o = 2 ** i, c = r.x * o, u = r.y * o, d = new z({ xmin: a.xmin + c * e.x, xmax: a.xmin + c * (e.x + n.width - 1), ymin: a.ymax - u * (e.y + n.height - 1), ymax: a.ymax - u * e.y, spatialReference: a.spatialReference });
    if (!s) return { extent: d, srcExtent: d, pixelBlock: null };
    const { pixelBlocks: h, mosaicSize: f } = s;
    if (h.length === 1 && h[0] != null && h[0].width === n.width && h[0].height === n.height) return { extent: d, srcExtent: d, pixelBlock: s.pixelBlocks[0] };
    const y = i > 0 ? l.pyramidBlockWidth : l.blockWidth, g = i > 0 ? l.pyramidBlockHeight : l.blockHeight, p = { x: e.x % y, y: e.y % g };
    let m;
    return this.rasterJobHandler ? m = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: h, srcMosaicSize: f, destDimension: n, clipOffset: p, clipSize: n, coefs: null, sampleSpacing: null, interpolation: t.interpolation, alignmentInfo: null, blockWidths: null }, t)).pixelBlock : m = Te(h, f, { clipOffset: p, clipSize: n }), { extent: d, srcExtent: d, pixelBlock: m };
  }
  fetchRawTile(i, e, n, t) {
    throw new k("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(i) {
    return Ie(this.rasterInfo.extent, i);
  }
  decodePixelBlock(i, e) {
    return !this.rasterJobHandler || e.useCanvas ? It(i, e) : this.rasterJobHandler.decode({ data: i, options: e });
  }
  async request(i, e, n = 0) {
    const { customFetchParameters: t } = this.ioConfig, { range: s, query: a, headers: r } = e;
    n = n ?? e.retryCount ?? this.ioConfig.retryCount;
    const l = s ? { Range: `bytes=${s.from}-${s.to}` } : null;
    try {
      return await ct(i, { ...e, query: { ...a, ...t }, headers: { ...r, ...l } });
    } catch (o) {
      if (n > 0) return n--, this.request(i, e, n);
      throw o;
    }
  }
  getSliceIndex(i) {
    const { multidimensionalInfo: e } = this.rasterInfo;
    return e == null || i == null || i.length === 0 ? null : ut(i, e);
  }
  getTileExtentFromTileInfo(i, e, n, t) {
    const s = t.lodAt(i);
    return this.getTileExtent({ x: s.resolution, y: s.resolution }, e, n, t.origin, t.spatialReference, t.size);
  }
  updateTileInfo() {
    const { storageInfo: i, spatialReference: e, extent: n, pixelSize: t } = this.rasterInfo, { pyramidResolutions: s } = i;
    if (!i.tileInfo) {
      const a = [], r = i.maximumPyramidLevel || 0;
      let l = (t.x + t.y) / 2, o = 1 / 0.0254 * 96 * l;
      for (let u = 0; u <= r && (a.unshift(new bt({ level: r - u, resolution: l, scale: o })), u !== r); u++) if (s) {
        const d = (s[u].x + s[u].y) / 2;
        o *= d / l, l = d;
      } else l *= 2, o *= 2;
      const c = new E({ x: n.xmin, y: n.ymax, spatialReference: e });
      i.tileInfo = new ee({ origin: c, size: [i.blockWidth, i.blockHeight], spatialReference: e, lods: a }), i.isVirtualTileInfo = !0;
    }
  }
  createRemoteDatasetStorageInfo(i, e = 512, n = 512, t) {
    const { width: s, height: a, nativeExtent: r, pixelSize: l, spatialReference: o } = i, c = new E({ x: r.xmin, y: r.ymax, spatialReference: o });
    t == null && (t = Math.max(0, Math.round(Math.log(Math.max(s, a)) / Math.LN2 - 8)));
    const u = this.computeBlockBoundary(r, 512, 512, { x: r.xmin, y: r.ymax }, [l], t);
    i.storageInfo = new Re({ blockWidth: e, blockHeight: n, pyramidBlockWidth: e, pyramidBlockHeight: n, origin: c, firstPyramidLevel: 1, maximumPyramidLevel: t, blockBoundary: u });
  }
  async computeBestPyramidLevelForLocation(i, e = {}) {
    return 0;
  }
  computeBlockBoundary(i, e, n, t, s, a = 0, r = 2) {
    if (s.length === 1 && a > 0) {
      s = [...s];
      let { x: u, y: d } = s[0];
      for (let h = 0; h < a; h++) u *= r, d *= r, s.push({ x: u, y: d });
    }
    const l = [], { x: o, y: c } = t;
    for (let u = 0; u < s.length; u++) {
      const { x: d, y: h } = s[u];
      l.push({ minCol: Math.floor((i.xmin - o + 0.1 * d) / e / d), maxCol: Math.floor((i.xmax - o - 0.1 * d) / e / d), minRow: Math.floor((c - i.ymax + 0.1 * h) / n / h), maxRow: Math.floor((c - i.ymin - 0.1 * h) / n / h) });
    }
    return l;
  }
  getPyramidPixelSize(i) {
    const { nativePixelSize: e } = this.rasterInfo, { pyramidResolutions: n, pyramidScalingFactor: t } = this.rasterInfo.storageInfo;
    if (i === 0) return e;
    if (n != null && n.length) return n[i - 1];
    const s = t ** i;
    return { x: e.x * s, y: e.y * s };
  }
  identifyPixelLocation(i, e, n, t) {
    const { spatialReference: s, nativeExtent: a, storageInfo: r } = this.rasterInfo, { maximumPyramidLevel: l, origin: o, transposeInfo: c } = r, u = t && c != null ? c.tileSize[0] : r.blockWidth, d = t && c != null ? c.tileSize[1] : r.blockHeight, h = it(i, s, n);
    if (!a.intersects(h) || e < 0 || e > l) return null;
    const f = this.getPyramidPixelSize(e), { x: y, y: g } = f, p = (o.y - h.y) / g / d, m = (h.x - o.x) / y / u, x = Math.min(d - 1, Math.floor((p - Math.floor(p)) * d)), R = Math.min(u - 1, Math.floor((m - Math.floor(m)) * u));
    return { pyramidLevel: e, row: Math.floor(p), col: Math.floor(m), rowOffset: x, colOffset: R, blockWidth: u, srcLocation: h };
  }
  getTileExtent(i, e, n, t, s, a) {
    const [r, l] = a, o = t.x + n * r * i.x, c = o + r * i.x, u = t.y - e * l * i.y, d = u - l * i.y;
    return new z({ xmin: o, xmax: c, ymin: d, ymax: u, spatialReference: s });
  }
  getBlockWidthHeight(i) {
    return { blockWidth: i > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: i > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(i, e, n) {
    const t = this.rasterInfo.storageInfo.blockBoundary[i];
    return !t || t.maxRow < e || t.maxCol < n || t.minRow > e || t.minCol > n;
  }
  updateImageSpaceRasterInfo(i) {
    const { pixelSize: e } = i, { width: n, height: t } = i, s = A.WebMercator;
    i.spatialReference = s, i.extent = i.nativeExtent = new z({ xmin: -0.5, ymax: 0.5, xmax: n - 0.5, ymin: 0.5 - t, spatialReference: s }), i.isPseudoSpatialReference = !0, i.transform = null, i.pixelSize = new E({ x: 1, y: 1, spatialReference: s });
    const { extent: a, storageInfo: r } = i;
    if (r) {
      r.origin = new E({ x: a.xmin, y: a.ymax, spatialReference: s });
      const { pyramidResolutions: l, tileInfo: o } = r;
      if (l && l.forEach((c) => {
        c.x /= e.x, c.y /= e.y;
      }), o) {
        o.origin = r.origin;
        const c = (i.nativePixelSize.x + i.nativePixelSize.y) / 2;
        o.lods.forEach((u, d) => {
          u.resolution = c * 2 ** d, u.scale = 96 * u.resolution / 0.0254;
        });
      }
    }
  }
  async _fetchPixels(i, e, n, t = {}) {
    let s = _e(i);
    if (s >= 2) return { extent: i, pixelBlock: null };
    const a = this._getSourceDataInfo(i, e, n, t), { pyramidLevel: r, srcResolution: l, srcExtent: o, srcWidth: c, srcHeight: u, ul: d } = a;
    if (c === 0 || u === 0) return { extent: i, srcExtent: o, pixelBlock: null };
    const { rasterInfo: h } = this, f = h.transform, y = f?.type === "gcs-shift", g = ye(i.spatialReference) != null;
    !y && g || (s = _e(a.srcExtent, y));
    const p = await this._fetchRawTiles(r, d, { width: c, height: u, wrapCount: s }, t);
    if (!p) return { extent: i, srcExtent: o, pixelBlock: null };
    const m = h.storageInfo, x = r > 0 ? m.pyramidBlockWidth : m.blockWidth, R = r > 0 ? m.pyramidBlockHeight : m.blockHeight;
    let { x: I, y: S } = h.pixelSize;
    if (r > 0) {
      const { pyramidResolutions: Q, pyramidScalingFactor: gt } = m;
      if (Q != null && Q[r - 1]) ({ x: I, y: S } = Q[r - 1]);
      else {
        const qe = gt ** r;
        I *= qe, S *= qe;
      }
    }
    const T = h.spatialReference, v = new E({ x: I, y: S, spatialReference: T }), C = x === c && R === u && d.x % x == 0 && d.y % R == 0, _ = new E({ x: (i.xmax - i.xmin) / e, y: (i.ymax - i.ymin) / n, spatialReference: i.spatialReference }), P = !i.spatialReference.equals(T), F = T.isGeographic ? 1e-9 : 1e-4, { datumTransformation: M } = t;
    if (!P && C && p.pixelBlocks.length === 1 && x === e && R === n && Xi(l, _, F)) return { extent: i, srcExtent: o, srcTilePixelSize: v, pixelBlock: p.pixelBlocks[0] };
    const O = g && ye(o.spatialReference) != null && this._hasNoneOrGCSShiftTransform, $ = t.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    $ && !this.rasterJobHandler && await Ne();
    const N = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: i, srcBufferExtent: p.extent, pixelSize: _.toJSON(), datumTransformation: M, rasterTransform: f, hasWrapAround: s > 0 || O, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1, includeGCSGrid: $ }, t) : zi({ projectedExtent: i, srcBufferExtent: p.extent, pixelSize: _, datumTransformation: M, rasterTransform: f, hasWrapAround: s > 0 || O, isAdaptive: !1, includeGCSGrid: $ });
    let J;
    const H = !t.requestRawData, U = { rows: N.spacing[0], cols: N.spacing[1] }, W = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(r, p.extent.xmin) : void 0, { pixelBlocks: G, mosaicSize: K, isPartiallyFilled: te } = p;
    let q = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: J, localNorthDirections: q } = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: G, srcMosaicSize: K, destDimension: H ? { width: e, height: n } : null, coefs: H ? N.coefficients : null, sampleSpacing: H ? U : null, projectDirections: $, gcsGrid: $ ? N.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: t.interpolation, alignmentInfo: W, blockWidths: null }, t));
    else {
      const Q = Te(G, K, { alignmentInfo: W });
      J = H ? ht(Q, { width: e, height: n }, N.coefficients, U, t.interpolation) : Q, $ && N.gcsGrid && (q = Rt({ width: e, height: n }, N.gcsGrid), J = vt(J, this.rasterInfo.dataType, q));
    }
    return t.requestRawData || $ ? { extent: i, srcExtent: o, srcTilePixelSize: v, pixelBlock: J, transformGrid: N, localNorthDirections: q, isPartiallyFilled: te } : { extent: i, srcExtent: o, srcTilePixelSize: v, pixelBlock: J };
  }
  async _fetchRawTiles(i, e, n, t) {
    const { origin: s, blockBoundary: a } = this.rasterInfo.storageInfo, { blockWidth: r, blockHeight: l } = this.getBlockWidthHeight(i);
    let { x: o, y: c } = e, { width: u, height: d, wrapCount: h } = n;
    const f = this._getRasterTileAlignmentInfo(i, 0);
    t.buffer && (o -= t.buffer.cols, c -= t.buffer.rows, u += 2 * t.buffer.cols, d += 2 * t.buffer.rows);
    let y = 0, g = 0, p = 0;
    h && f != null && ({ worldColumnCountFromOrigin: g, originColumnOffset: p, rightPadding: y } = f, g * f.blockWidth - y >= o + u && (y = 0));
    const m = Math.floor(o / r), x = Math.floor(c / l), R = Math.floor((o + u + y - 1) / r), I = Math.floor((c + d + y - 1) / l), S = a[i];
    if (!S) return null;
    const { minRow: T, minCol: v, maxCol: C, maxRow: _ } = S;
    if (h === 0 && (I < T || R < v || x > _ || m > C)) return null;
    const P = new Array();
    let F = !1;
    const M = this.ioConfig.allowPartialFill == null ? t.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let W = x; W <= I; W++) for (let G = m; G <= R; G++) {
      let K = G;
      if (!t.disableWrapAround && h && f != null && g <= G && (K = G - g - p), W >= T && K >= v && _ >= W && C >= K) {
        const te = this._tileFetchQueue.push({ pyramidLevel: i, row: W, col: K, options: t }, { signal: t.signal });
        M ? P.push(new Promise((q) => {
          te.then((Q) => q(Q)).catch(() => {
            F = !0, q(null);
          });
        })) : P.push(te);
      } else P.push(Promise.resolve(null));
    }
    if (P.length === 0) return null;
    const O = await Promise.all(P), $ = { height: (I - x + 1) * l, width: (R - m + 1) * r }, { spatialReference: N } = this.rasterInfo, J = this.getPyramidPixelSize(i), { x: H, y: U } = J;
    return { extent: new z({ xmin: s.x + m * r * H, xmax: s.x + (R + 1) * r * H, ymin: s.y - (I + 1) * l * U, ymax: s.y - x * l * U, spatialReference: N }), pixelBlocks: O, mosaicSize: $, isPartiallyFilled: F };
  }
  _fetchRawTile(i, e, n, t) {
    const s = this.rasterInfo.storageInfo.blockBoundary[i];
    if (!s) return Promise.resolve(null);
    const { minRow: a, minCol: r, maxCol: l, maxRow: o } = s;
    if (e < a || n < r || e > o || n > l) return Promise.resolve(null);
    const c = Ze(this.rasterId, t.sliceId), u = `${i}/${e}/${n}`;
    let d = et(c, t.registryId, u);
    if (d == null) {
      const h = new AbortController();
      d = this.fetchRawTile(i, e, n, { ...t, signal: h.signal }), tt(c, t.registryId, u, d, h), d.catch(() => Ai(c, t.registryId, u));
    }
    return t.signal && St(t, () => {
      Li(c, t.registryId, u);
    }), d;
  }
  _computeMagDirValues(i) {
    const { bandCount: e, dataType: n } = this.rasterInfo;
    if (!(e === 2 && n === "vector-magdir" || n === "vector-uv") || i?.length !== 2 || !i[0]?.length) return null;
    const t = i[0].length;
    if (n === "vector-magdir") {
      const o = i[1].map((c) => (c + 360) % 360);
      return [i[0], o];
    }
    const [s, a] = i, r = [], l = [];
    for (let o = 0; o < t; o++) {
      const [c, u] = Tt([s[o], a[o]]);
      r.push(c), l.push(u);
    }
    return [r, l];
  }
  _getRasterTileAlignmentInfo(i, e) {
    return this._rasterTileAlignmentInfo == null && (this._rasterTileAlignmentInfo = Wi(this.rasterInfo)), this._rasterTileAlignmentInfo.pyramidsInfo == null ? null : { startX: e, halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlignmentInfo.pyramidsInfo[i] };
  }
  _getSourceDataInfo(i, e, n, t = {}) {
    const s = { datumTransformation: t.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    t.srcResolution && (s.srcResolution = t.srcResolution, this._updateSourceDataInfo(i, s));
    const a = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: r, srcHeight: l, pyramidLevel: o } = s, c = r / e, u = l / n, d = o < a && c * u >= 16, h = o === a && this._requireTooManySrcTiles(r, l, e, n);
    if (d || h || r === 0 || l === 0) {
      const f = new E({ x: (i.xmax - i.xmin) / e, y: (i.ymax - i.ymin) / n, spatialReference: i.spatialReference });
      let y = Gi(f, this.rasterInfo.spatialReference, i, s.datumTransformation);
      const g = !y || t.srcResolution && y.x + y.y < t.srcResolution.x + t.srcResolution.y;
      if (d && t.srcResolution && g) {
        const p = Math.round(Math.log(Math.max(c, u)) / Math.LN2) - 1;
        if (a - o + 3 >= p) {
          const m = 2 ** p;
          y = { x: t.srcResolution.x * m, y: t.srcResolution.y * m };
        }
      }
      y && (s.srcResolution = y, this._updateSourceDataInfo(i, s));
    }
    return this._requireTooManySrcTiles(s.srcWidth, s.srcHeight, e, n) && (s.srcWidth = 0, s.srcHeight = 0), s;
  }
  _requireTooManySrcTiles(i, e, n, t) {
    const { tileInfo: s } = this.rasterInfo.storageInfo, a = Math.ceil(i / s.size[0]) * Math.ceil(e / s.size[1]), r = i / n, l = e / t, o = Math.max(1, (n + t) / 1024);
    return a >= Vi * o || r > nt || l > nt;
  }
  _updateSourceDataInfo(i, e) {
    e.srcWidth = 0, e.srcHeight = 0;
    const { rasterInfo: n } = this, t = n.spatialReference, { srcResolution: s, datumTransformation: a } = e, { pyramidLevel: r, pyramidResolution: l, excessiveReading: o } = st(s, n, this.ioConfig.sampling);
    if (o) return;
    let c = e.srcExtent || Ie(i, t, a);
    if (c == null) return;
    const u = n.transform;
    u && (c = u.inverseTransform(c)), e.srcExtent = c;
    const { x: d, y: h } = n.storageInfo.origin, f = Math.floor((c.xmin - d) / l.x + 0.1), y = Math.floor((h - c.ymax) / l.y + 0.1), g = Math.floor((c.xmax - d) / l.x - 0.1), p = Math.floor((h - c.ymin) / l.y - 0.1), m = c.width < 0.1 * l.x ? 0 : g - f + 1, x = c.height < 0.1 * l.y ? 0 : p - y + 1;
    e.pyramidLevel = r, e.pyramidResolution = l, e.srcWidth = m, e.srcHeight = x, e.ul = { x: f, y };
  }
  _getRequestOptionsWithSliceId(i) {
    return this.rasterInfo.multidimensionalInfo != null && i.sliceId == null && (i = { ...i, sliceId: this.getSliceIndex(i.multidimensionalDefinition) }), i;
  }
  _processIdentifyResult(i, e) {
    const { srcLocation: n, position: t, pyramidLevel: s, useTransposedTile: a } = e, r = i.pixels[0].length / i.width / i.height;
    if (!(!i.mask || i.mask[t])) return { location: n, value: null };
    const { multidimensionalInfo: l } = this.rasterInfo;
    if (l == null || !a) {
      const p = i.pixels.map((R) => R[t]), m = { location: n, value: p, pyramidLevel: s }, x = this._computeMagDirValues(p.map((R) => [R]));
      return x?.length && (m.magdirValue = x.map((R) => R[0])), m;
    }
    let o = i.pixels.map((p) => p.slice(t * r, t * r + r)), c = this._computeMagDirValues(o);
    const { requestSomeSlices: u, identifyOptions: d } = e;
    let h = _t(l, d.transposedVariableName);
    if (u) {
      const p = Ft(h, d.multidimensionalDefinition, d.timeExtent);
      o = o.map((m) => p.map((x) => m[x])), c = c?.map((m) => p.map((x) => m[x])), h = p.map((m) => h[m]);
    }
    const f = i.noDataValues || this.rasterInfo.noDataValue, y = { pixels: o, pixelType: i.pixelType };
    let g;
    return f != null && (Ct(y, f), g = y.mask), { location: n, value: null, dataSeries: h.map((p, m) => {
      const x = { value: g?.[m] === 0 ? null : o.map((R) => R[m]), multidimensionalDefinition: p.multidimensionalDefinition.map((R) => new Ae({ ...R, isSlice: !0 })) };
      return c?.length && (x.magdirValue = [c[0][m], c[1][m]]), x;
    }), pyramidLevel: s };
  }
};
function Xi(i, e, n) {
  return Math.abs(i.x - e.x) < n && Math.abs(i.y - e.y) < n;
}
w([b()], B.prototype, "_rasterTileAlignmentInfo", void 0), w([b()], B.prototype, "_tileFetchQueue", void 0), w([b({ readOnly: !0 })], B.prototype, "_isGlobalWrappableSource", null), w([b({ readOnly: !0 })], B.prototype, "_hasNoneOrGCSShiftTransform", null), w([b()], B.prototype, "_openPromise", void 0), w([b()], B.prototype, "rasterJobHandler", null), w([b({ readOnly: !0 })], B.prototype, "rasterId", null), w([b(at)], B.prototype, "url", null), w([b({ type: String, json: { write: !0 } })], B.prototype, "datasetName", void 0), w([b({ type: String, json: { write: !0 } })], B.prototype, "datasetFormat", void 0), w([b()], B.prototype, "hasUniqueSourceStorageInfo", void 0), w([b()], B.prototype, "rasterInfo", void 0), w([b()], B.prototype, "ioConfig", void 0), w([b()], B.prototype, "sourceJSON", void 0), B = w([X("esri.layers.support.rasterDatasets.BaseRaster")], B);
const ae = B, Ki = 40;
let ie = class extends ae {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  async fetchPixels(e, n, t, s = {}) {
    const { rasters: a, rasterIds: r } = this.primaryRasters;
    let l = !1;
    const { interpolation: o } = s, c = this.rasterFunction.flatWebGLFunctionChain?.hasFocalFunction;
    !s.requestRawData && c && (l = a.length === 1 && !s.skipRasterFunction, s = { ...s, interpolation: "bilinear", requestRawData: l });
    const u = a.map((I) => I.fetchPixels(e, n, t, s)), d = await Promise.all(u), h = d.map((I) => I.pixelBlock), f = l || s.requestRawData ? d.map((I) => I.srcTilePixelSize) : null;
    if (s.skipRasterFunction || h.every((I) => I == null)) return d[0];
    const y = d.find((I) => I.pixelBlock != null)?.extent ?? e;
    let g = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: y, primaryPixelBlocks: h, primaryPixelSizes: f, primaryRasterIds: r }) : this.rasterFunction.process({ extent: y, primaryPixelBlocks: h, primaryPixelSizes: f, primaryRasterIds: r });
    const { transformGrid: p } = d[0];
    if (!l || g == null || p == null) {
      const I = s.noClip ? null : this.getClippingGeometry(y.spatialReference);
      return s.noClip || s.requestRawData || g == null || !I || (g = await Be(g, y, I)), { ...d[0], pixelBlock: g };
    }
    const m = { rows: p.spacing[0], cols: p.spacing[1] };
    let x;
    this.rasterJobHandler ? x = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [g], srcMosaicSize: { width: g.width, height: g.height }, destDimension: { width: n, height: t }, coefs: p.coefficients, sampleSpacing: m, projectDirections: !1, gcsGrid: null, isUV: !1, interpolation: o, alignmentInfo: void 0, blockWidths: null }, s)).pixelBlock : x = ht(g, { width: n, height: t }, p.coefficients, m, o);
    const R = s.noClip ? null : this.getClippingGeometry(e.spatialReference);
    return s.noClip || s.requestRawData || x == null || R == null || (x = await Be(x, e, R)), { extent: e, srcExtent: d[0].srcExtent, pixelBlock: x };
  }
  getClippingGeometry(e) {
    const n = this._clippingGeometry.get("0");
    if (!e || !n) return n;
    const t = Zi(e);
    let s = this._clippingGeometry.get(t);
    return s != null || (s = e.equals(n.spatialReference) ? n : De(n, e), this._clippingGeometry.set(t, s)), s;
  }
  async _open(e) {
    const { rasterFunction: n } = this;
    this.primaryRasters?.rasters?.length ? n.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = n.getPrimaryRasters(), this.rasterJobHandler && this.primaryRasters.rasters?.forEach((u) => u.rasterJobHandler = this.rasterJobHandler));
    const { rasters: t, rasterIds: s } = this.primaryRasters, a = t.map((u) => u.rasterInfo ? void 0 : u.open(e));
    await Promise.all(a);
    const r = t.map(({ rasterInfo: u }) => u), l = n.bind({ rasterInfos: r, rasterIds: s });
    if (n.rawSourceRasterInfos = r, !l.success || r.length === 0) throw new k("raster-function:open", `cannot bind the function: ${l.error ?? ""}`);
    const o = n.functionName === "Table" ? n : n.functionArguments?.raster;
    o?.functionName === "Table" && (n.rasterInfo.attributeTable = Le.fromJSON(o.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const c = r[0];
    this.hasUniqueSourceStorageInfo = r.length === 1 || r.slice(1).every((u) => Qi(u, c)), this.set("sourceJSON", t[0].sourceJSON), this.set("rasterInfo", n.rasterInfo), await this._updateClipGeometry();
  }
  async syncJobHandler() {
    return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction);
  }
  async _updateClipGeometry() {
    const e = this.rasterFunction.getClippingGeometries()[0];
    let n = e?.clippingGeometry;
    if (n && e.clippingType === "inside") {
      const { extent: t } = this.rasterInfo, { difference: s, densify: a } = await import("./geometryEngine-DnF4ZSkY.js");
      let r = a(kt.fromExtent(t), 2 * (t.width + t.height) / Ki);
      r = De(r, n.spatialReference), n = s(r, n);
    }
    this._clippingGeometry.clear(), n && this._clippingGeometry.set("0", n);
  }
};
w([b({ type: String, json: { write: !0 } })], ie.prototype, "datasetFormat", void 0), w([b()], ie.prototype, "tileType", void 0), w([b()], ie.prototype, "rasterFunction", void 0), w([b()], ie.prototype, "primaryRasters", void 0), ie = w([X("esri.layers.support.rasterDatasets.FunctionRaster")], ie);
const pt = ie;
function Qi(i, e) {
  const { storageInfo: n, pixelSize: t, spatialReference: s, extent: a } = i, { storageInfo: r, pixelSize: l, spatialReference: o, extent: c } = e;
  return t.x === l.x && t.y === l.y && s.equals(o) && a.equals(c) && n.blockHeight === r.blockHeight && n.blockWidth === r.blockWidth && n.maximumPyramidLevel === r.maximumPyramidLevel;
}
function Zi(i) {
  return String(i.wkid ?? i.wkt ?? i.wkt2);
}
const es = (i) => {
  let e = class extends i {
    constructor(...t) {
      super(...t), this._isConstructedFromFunctionRaster = !1, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = null, this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = t[0]?.raster?.datasetFormat === "Function";
    }
    get fullExtent() {
      return this.serviceRasterInfo?.extent;
    }
    set multidimensionalDefinition(t) {
      this._set("multidimensionalDefinition", t), this.updateRenderer();
    }
    set rasterFunction(t) {
      t?.functionName?.toLowerCase() === "none" && (t = void 0), this._set("rasterFunction", t), this.updateRasterFunction();
    }
    get rasterInfo() {
      return Jt(re.getLogger(this), "rasterInfo", { replacement: "serviceRasterInfo", version: "4.29", warnOnce: !0 }), this._get("serviceRasterInfo");
    }
    set url(t) {
      this._set("url", ot(t, re.getLogger(this)));
    }
    get renderer() {
      if (this.type !== "imagery-tile") return this.internalRenderer;
      const { activePresetRendererName: t, presetRenderers: s } = this;
      return t ? s?.find(({ name: r }) => r === t)?.renderer.clone() : this.internalRenderer;
    }
    set renderer(t) {
      this.type === "imagery-tile" && (this.activePresetRendererName = null), this.internalRenderer = t;
    }
    set internalRenderer(t) {
      t == null && this.rasterFunction == null ? this._configDefaultRenderer("override") : (this._set("internalRenderer", t), this.updateRenderer());
    }
    readRenderer(t, s, a) {
      const r = s?.layerDefinition?.drawingInfo?.renderer;
      return Et(r, a) || void 0;
    }
    async convertVectorFieldData(t, s) {
      const { serviceRasterInfo: a } = this;
      if (t == null || !a) return null;
      const r = this._rasterJobHandler.instance, l = a.dataType;
      return r ? r.convertVectorFieldData({ pixelBlock: t, dataType: l }, s) : At(t, l);
    }
    async computeStatisticsHistograms(t, s) {
      await this.load(s), t = Ee(Lt, t).clone();
      const { serviceRasterInfo: a } = this;
      if (a == null) throw new k("imagery-tile-mixin:compute-statistics-histograms", "serviceRasterInfo must be specified");
      const { geometry: r } = t;
      if (r == null) throw new k("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let l = r;
      const { spatialReference: o } = a;
      r.spatialReference.equals(o) || (await Ne(), l = r.type === "extent" ? Ie(r, o) : De(r, o));
      const c = t.pixelSize ?? new E({ x: a.pixelSize.x, y: a.pixelSize.y, spatialReference: o }), { extent: u, width: d, height: h } = ji(a, l, c), f = await this.fetchPixels(u, d, h, { ...s, interpolation: "nearest" });
      if (f.pixelBlock == null) throw new k("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const y = await Be(f.pixelBlock, u, l), g = this._rasterJobHandler.instance;
      return g ? g.computeStatisticsHistograms({ pixelBlock: y }, s) : He(y);
    }
    async createFlowMesh(t, s) {
      const a = this._rasterJobHandler.instance;
      return a ? a.createFlowMesh(t, s) : Ht(t.meshType, t.simulationSettings, t.flowData, s.signal != null ? s.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(t) {
      const { multidimensionalInfo: s } = this.serviceRasterInfo ?? {};
      if (s == null) return t;
      let a = t.multidimensionalDefinition || this.multidimensionalDefinition;
      a?.length || (a = Ue(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset }));
      const r = t.timeExtent || this.timeExtent;
      if (a != null && r != null && (r.start != null || r.end != null)) {
        a = a.map((g) => g.clone());
        const l = s.variables.find(({ name: g }) => g === a[0].variableName)?.dimensions?.find(({ name: g }) => g === "StdTime"), o = a.find(({ dimensionName: g }) => g === "StdTime");
        if (!l || !o) return { ...t, multidimensionalDefinition: null };
        const { start: c, end: u } = r, d = c == null ? null : c.getTime(), h = u == null ? null : u.getTime(), f = d ?? h, y = h ?? d;
        if (l.values != null) {
          const g = l.values.filter((p) => {
            if (Array.isArray(p)) {
              if (f === y) return p[0] <= f && p[1] >= f;
              const m = p[0] <= f && p[1] > f || p[0] < y && p[1] >= y, x = p[0] >= f && p[1] <= y || p[0] < f && p[1] > y;
              return m || x;
            }
            return f === y ? p === f : p >= f && p <= y;
          });
          if (g.length) {
            const p = g.sort((m, x) => {
              const R = Array.isArray(m) ? m[0] : m, I = Array.isArray(m) ? m[1] : m, S = Array.isArray(x) ? x[0] : x, T = Array.isArray(x) ? x[1] : x;
              return f === y ? R - S : Math.abs(I - y) - Math.abs(T - y);
            })[0];
            o.values = [p];
          } else a = null;
        } else if (l.hasRegularIntervals && l.extent) {
          const [g, p] = l.extent;
          f > p || y < g ? a = null : o.values = f === y ? [f] : [Math.max(g, f), Math.min(p, y)];
        }
      }
      return a != null && zt(a, this.multidimensionalSubset) ? { ...t, multidimensionalDefinition: null } : { ...t, multidimensionalDefinition: a };
    }
    async updateRasterFunction() {
      if (!this.loaded || this.type !== "imagery-tile" || !this.rasterFunction && !this._cachedRasterFunctionJson || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson)) return;
      if (this._isConstructedFromFunctionRaster && this.raster.datasetFormat === "Function") {
        const u = this.raster.rasterFunction.toJSON();
        return !this.rasterFunction && u && this._set("rasterFunction", Me.fromJSON(u)), void (this._cachedRasterFunctionJson = this.rasterFunction?.toJSON());
      }
      let t, s = this.raster, a = !1;
      s.datasetFormat === "Function" ? (t = s.primaryRasters.rasters, s = t[0], a = !0) : t = [s];
      const { rasterFunction: r } = this;
      if (r) {
        const u = { raster: s };
        t.length > 1 && t.forEach((f) => u[f.url] = f);
        const d = dt(r.functionDefinition?.toJSON() ?? r.toJSON(), u), h = new pt({ rasterFunction: d });
        h.rasterJobHandler = this._rasterJobHandler.instance, await h.open(), this._cachedRasterFunctionJson = this.rasterFunction?.toJSON(), this.raster = h;
      } else this.raster = s, this._cachedRasterFunctionJson = null, await s.open();
      if (this._cachedRendererJson = null, !a && !r) return;
      const { bandIds: l } = this, { bandCount: o } = this.raster.rasterInfo, c = l?.length ? l.some((u) => u >= o) : o >= 3;
      l && (c || this.renderer && this.renderer.type !== "raster-stretch") && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
    async updateRenderer() {
      const { loaded: t, symbolizer: s } = this;
      if (!t || !s || !this.renderer) return;
      const { rasterInfo: a } = this.raster, r = Ve(a, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), l = r?.name, o = Ye({ ...this.renderer.toJSON(), variableName: l });
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(o)) return;
      const c = this._rasterJobHandler.instance;
      c && (s.rasterInfo = Xe(a, l), s.rendererJSON = o, s.bind(), await c.updateSymbolizer(s), this._cachedRendererJson = o);
    }
    async applyRenderer(t, s) {
      const a = t?.pixelBlock;
      if (!(a != null && a.pixels && a.pixels.length > 0)) return null;
      let r;
      await this.updateRenderer();
      const l = this._rasterJobHandler.instance, o = this.bandIds ?? [];
      return r = l ? await l.symbolize({ ...t, simpleStretchParams: s, bandIds: o }) : this.symbolizer.symbolize({ ...t, simpleStretchParams: s, bandIds: o }), r;
    }
    getTileUrl(t, s, a) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${t}/${s}/${a}` : "";
    }
    getCompatibleTileInfo(t, s, a = !1) {
      if (!this.loaded || s == null) return null;
      if (a && t.equals(this.spatialReference)) return this.tileInfo;
      const r = Wt(t);
      return ee.create({ size: 256, spatialReference: t, origin: r ? { x: r.origin[0], y: r.origin[1] } : { x: s.xmin, y: s.ymax } });
    }
    getCompatibleFullExtent(t) {
      return this.loaded ? (this._compatibleFullExtent?.spatialReference.equals(t) || (this._compatibleFullExtent = this.raster.computeExtent(t)), this._compatibleFullExtent) : null;
    }
    async fetchTile(t, s, a, r = {}) {
      if (n(this), r.requestAsImageElement) {
        const o = this.getTileUrl(t, s, a);
        return ct(o, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: r.signal }).then((c) => c.data);
      }
      const { serviceRasterInfo: l } = this;
      if (l.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null) {
        const o = r.tileInfo || l.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(t, s, a, o), pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), this.renderer?.type === "raster-shaded-relief" && (r = { ...r, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(t, s, a, r);
    }
    async fetchPixels(t, s, a, r = {}) {
      return this.serviceRasterInfo.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null ? { extent: t, pixelBlock: null } : (await this._initJobHandler(), await this.updateRasterFunction(), s = Math.round(s), a = Math.round(a), this.raster.fetchPixels(t, s, a, r));
    }
    async identify(t, s = {}) {
      await this.load();
      const { raster: a, serviceRasterInfo: r } = this;
      if (r?.multidimensionalInfo != null && !(r.hasMultidimensionalTranspose && (lt(s.multidimensionalDefinition) || s.transposedVariableName || s.timeExtent)) && (s = this.normalizeRasterFetchOptions(s)).multidimensionalDefinition == null)
        return { location: t, value: null };
      const l = this.multidimensionalSubset?.areaOfInterest;
      if (l && !l.contains(t)) throw new k("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      return a.identify(t, s);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      const t = this.serviceRasterInfo?.multidimensionalInfo;
      if (t == null || this.serviceRasterInfo?.dataType !== "standard-time") return !1;
      const s = this.multidimensionalDefinition, a = s?.[0]?.variableName;
      return t.variables.some((r) => r.name === a && (!s?.[0].dimensionName || r.dimensions.some((l) => l.name === "StdTime")));
    }
    getStandardTimeValue(t) {
      return new Date(24 * (t - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(t) {
      const s = t ?? this.serviceRasterInfo?.multidimensionalInfo;
      return Gt(this.multidimensionalSubset, s);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = Ue(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && this.raster.datasetFormat === "Function" && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null) return this._rasterJobHandler.connectionPromise;
      const t = new Xt();
      return this._rasterJobHandler.connectionPromise = t.initialize().then(async () => {
        n(this), this._rasterJobHandler.instance = t, this.raster.rasterJobHandler = t, this.raster.datasetFormat === "Function" && this.raster.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
        }), this.renderer && this.updateRenderer();
      }).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      if (this.interpolation == null) {
        n(this);
        const { raster: t } = this, s = jt(t.rasterInfo, t.tileType, this.sourceJSON?.defaultResamplingMethod);
        this._set("interpolation", s);
      }
    }
    _configDefaultRenderer(t = "no") {
      n(this);
      const { rasterInfo: s } = this.raster, a = Ve(s, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), r = a?.name, l = qt({ variableName: r, rasterFunctionName: this.rasterFunction?.functionName, presetRenderers: this.presetRenderers });
      if (!this.bandIds && s.bandCount > 1 && (this.bandIds = l?.bandIds ?? Ut(s)), !this.renderer || t === "override") {
        const d = Vt(this.raster), h = l?.renderer ?? Ke(s, { bandIds: this.bandIds, variableName: r, rasterFunctionColorRamp: d }), f = s.statistics, y = f && f.length > 0 ? f[0] : null, g = y?.max ?? 0, p = y?.min ?? 0;
        this.raster.datasetFormat === "WCSServer" && h.type === "raster-stretch" && (g > 1e24 || p < -1e24) && (h.dynamicRangeAdjustment = !0, h.customStatistics = null, h.stretchType === "none" && (h.stretchType = "min-max")), this.renderer = h;
      }
      const o = Ye({ ...this.renderer.toJSON(), variableName: r }), c = Xe(s, r);
      this.symbolizer ? (this.symbolizer.rendererJSON = o, this.symbolizer.rasterInfo = c) : this.symbolizer = new Yt({ rendererJSON: o, rasterInfo: c });
      const u = this.symbolizer.bind();
      if (u.success) {
        if (t === "auto") {
          const { colormap: d } = this.raster.rasterInfo, h = this.renderer;
          if (d != null && h.type === "raster-colormap") {
            const f = Ke(this.raster.rasterInfo);
            JSON.stringify(f) !== JSON.stringify(h) && this._configDefaultRenderer("override");
          } else if (h.type === "raster-stretch") {
            const f = this.bandIds?.length, y = h.customStatistics?.length;
            !h.dynamicRangeAdjustment && y && f && y !== f && this._configDefaultRenderer("override");
          }
        }
      } else re.getLogger(this).warn("imagery-tile-mixin", u.error || "The given renderer is not supported by the layer."), t === "auto" && this._configDefaultRenderer("override");
    }
  };
  function n(t) {
    if (!t.raster || !t.serviceRasterInfo) throw new k("imagery-tile", "no raster");
  }
  return w([b({ clonable: !1 })], e.prototype, "_cachedRendererJson", void 0), w([b({ clonable: !1 })], e.prototype, "_cachedRasterFunctionJson", void 0), w([b({ clonable: !1 })], e.prototype, "_compatibleFullExtent", void 0), w([b({ clonable: !1 })], e.prototype, "_isConstructedFromFunctionRaster", void 0), w([b({ clonable: !1 })], e.prototype, "_rasterJobHandler", void 0), w([b({ type: [Ot], json: { write: { overridePolicy() {
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.bandIds?.join(",") !== "0,1,2" };
  } } } })], e.prototype, "bandIds", void 0), w([b({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], e.prototype, "copyright", void 0), w([b({ json: { read: !1 } })], e.prototype, "fullExtent", null), w([b({ json: { write: { overridePolicy() {
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
  } } } }), Pt(Mt)], e.prototype, "interpolation", void 0), w([b()], e.prototype, "ioConfig", void 0), w([b({ type: [Ae], json: { write: !0 } })], e.prototype, "multidimensionalDefinition", null), w([b({ type: $t, json: { write: !0 } })], e.prototype, "multidimensionalSubset", void 0), w([b()], e.prototype, "raster", void 0), w([b({ type: Me, json: { name: "renderingRule", write: !0 } })], e.prototype, "rasterFunction", null), w([b({ readOnly: !0 })], e.prototype, "rasterInfo", null), w([b()], e.prototype, "serviceRasterInfo", void 0), w([b()], e.prototype, "sourceJSON", void 0), w([b({ readOnly: !0, type: A, json: { read: !1 } })], e.prototype, "spatialReference", void 0), w([b({ type: ee })], e.prototype, "tileInfo", void 0), w([b(at)], e.prototype, "url", null), w([b()], e.prototype, "renderer", null), w([b({ types: Nt, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    const t = this.renderer?.type === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || !t };
  } }, origins: { "web-scene": { types: Dt, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (t) => ({ enabled: t && t.type !== "vector-field" && t.type !== "flow" }) } } } } })], e.prototype, "internalRenderer", null), w([Bt("internalRenderer")], e.prototype, "readRenderer", null), w([b({ clonable: !1 })], e.prototype, "symbolizer", void 0), e = w([X("esri.layers.mixins.ImageryTileMixin")], e), e;
};
function mt(i) {
  return ["x", "e", "east", "long", "longitude"].includes(i.toLowerCase());
}
function yt(i) {
  return ["y", "n", "west", "lat", "latitude"].includes(i.toLowerCase());
}
function ts(i) {
  const { axes: e } = i.domain, n = Object.keys(e), t = [], s = [];
  let a = -1, r = -1, l = [];
  for (let x = 0; x < n.length; x++) {
    const R = n[x];
    mt(R) ? a = x : yt(R) && (r = x);
    const I = e[R], S = [];
    if ("values" in I) {
      I.values.forEach((v) => S.push(typeof v == "string" ? new Date(v).getTime() : v));
      const T = S[1] - S[0];
      t.push([S[0] - 0.5 * T, S[S.length - 1] + 0.5 * T]), s.push(T);
    } else {
      const { start: T, stop: v, num: C } = I, _ = (v - T) / (C - 1);
      t.push([T - 0.5 * _, v + 0.5 * _]), s.push(_);
      for (let P = 0; P < C; P++) S.push(T + _ * P);
    }
    l.push({ name: R, values: S, extent: [S[0], S[S.length - 1]] });
  }
  a > -1 && r === -1 ? r = a === 0 ? 1 : 0 : r > -1 && a === -1 ? a = r === 0 ? 1 : 0 : r === -1 && a === -1 && (a = 0, r = 1), l = l.filter((x, R) => !(R === a || R === r));
  const { referencing: o } = i.domain, c = o.find((x) => x.coordinates.includes(n[a])).system.id, u = c?.slice(c.lastIndexOf("/") + 1), d = u == null || u === "CRS84" ? 4326 : Number(u), h = new A({ wkid: d }), [f, y] = t[a], [g, p] = t[r], m = new z({ xmin: f, xmax: y, ymin: g, ymax: p, spatialReference: h });
  return { width: Math.round(m.width / s[a]), height: Math.round(m.height / s[r]), extent: m, dimensions: l };
}
function Fe(i) {
  const e = Zt();
  return e ? i[e] ?? Object.values(i)[0] : Object.values(i)[0];
}
function Ce() {
  return Math.round(255 * Math.random());
}
function is(i) {
  const e = {}, { parameters: n } = i;
  if (!n) return e;
  for (const [t, s] of Object.entries(n)) {
    const { type: a, description: r, unit: l, categoryEncoding: o, observedProperty: c } = s;
    if (a === "Parameter" && (e[t] = {}, r && (e[t].description = Fe(r)), l && (e[t].unit = l.label ? Fe(l.label) : null, e[t].symbol = l.symbol?.value), o)) {
      const u = Object.entries(o).map((f, y) => ({ OID: y, Value: Number(f[1]), ClassName: f[0].slice(f[0].lastIndexOf("/") + 1), Count: 1 }));
      let d = !1;
      c?.categories?.length && (c.categories.forEach((f) => {
        if (!f.id) return;
        const y = f.id.slice(f.id.lastIndexOf("/") + 1), g = u.find((m) => m.ClassName === y);
        if (!g) return;
        const p = f.label ? Fe(f.label) : null;
        if (g.Label = p, f.preferredColor) {
          const m = Kt.fromHex(f.preferredColor);
          m && (d = !0, g.Red = m.r, g.Green = m.g, g.Blue = m.b);
        }
      }), d && u.forEach((f) => {
        f.Red == null && (f.Red = Ce(), f.Green = Ce(), f.Blue = Ce());
      }));
      const h = { objectIdFieldName: "", fields: [{ name: "OID", type: "esriFieldTypeOID", alias: "OID", domain: null }, { name: "Value", type: "esriFieldTypeInteger", alias: "Value", domain: null }, { name: "Count", type: "esriFieldTypeDouble", alias: "Count", domain: null }, { name: "ClassName", type: "esriFieldTypeString", alias: "ClassName", domain: null, length: 50 }, { name: "Label", type: "esriFieldTypeString", alias: "Label", domain: null, length: 50 }], features: u.map((f) => ({ attributes: f })) };
      d && h.fields.push({ name: "Red", type: "esriFieldTypeInteger", alias: "Red", domain: null }, { name: "Green", type: "esriFieldTypeInteger", alias: "Green", domain: null }, { name: "Blue", type: "esriFieldTypeInteger", alias: "Blue", domain: null }), e[t].attributeTable = h;
    }
  }
  return e;
}
function ss(i) {
  let e = Number.MAX_VALUE, n = -Number.MAX_VALUE;
  for (let t = 0; t < i.length; t++) {
    const s = i[t];
    s != null && (s < e && (e = s), s > n && (n = s));
  }
  return Qt(e, n);
}
function ns(i, e, n) {
  const t = i.map((o, c) => ({ name: o, count: e[c] })).sort((o, c) => o.name > c.name ? -1 : 1), s = (a = 1, (o) => a *= o.count);
  var a;
  const r = [...t.slice(1), { name: "", count: 1 }].reverse().map(s).reverse();
  let l = 0;
  for (let o = i.length - 1; o >= 0; o--)
    l += r[t.findIndex(({ name: c }) => c === i[o])] * (n % e[o]), n = Math.floor(n / e[o]);
  return l;
}
function rs(i) {
  const { width: e, height: n, extent: t, dimensions: s } = ts(i), { ranges: a } = i, r = Object.keys(a).sort((h, f) => h < f ? -1 : 1), l = [];
  for (let h = 0; h < r.length; h++) {
    const f = r[h];
    s?.length && l.push({ name: f, dimensions: s });
  }
  const o = is(i);
  l.forEach((h) => o[h.name] && Object.assign(h, o[h.name]));
  const c = l.length ? { variables: l } : void 0, u = [];
  for (let h = 0; h < r.length; h++) {
    const f = r[h], { values: y, dataType: g, axisNames: p, shape: m } = a[f], x = m.length > 2 ? h * m.slice(0, -2).reduce((C, _) => C * _) : 0, R = p.slice(0, -2), I = m.slice(0, -2), S = g === "float" ? "f32" : ss(y), T = e * n, v = y.length / T;
    for (let C = 0; C < v; C++) {
      const _ = we.createEmptyBand(S, T), P = new Uint8Array(T).fill(255);
      let F = !1;
      const M = C * T;
      for (let O = 0; O < T; O++) {
        const $ = y[M + O];
        $ == null ? (P[O] = 0, F = !0) : _[O] = $;
      }
      if (h === 0 || s?.length) {
        const O = new we({ width: e, height: n, mask: F ? P : null, pixels: [_], pixelType: S });
        O.updateStatistics(), s?.length ? u[ns(R, I, C) + x] = O : u.push(O);
      } else {
        const O = u[C];
        O.pixels.push(_), F ? O.mask && (O.mask = we.combineBandMasks([O.mask, P])) : O.mask = F ? P : null;
      }
    }
  }
  const d = Object.values(o).find((h) => h.attributeTable)?.attributeTable;
  return { extent: t, pixelBlocks: u, multidimensionalInfo: c, attributeTable: d, bandNames: c ? void 0 : r };
}
let oe = class extends ae {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.source = null;
  }
  get url() {
    return "";
  }
  fetchRawTile(i, e, n, t = {}) {
    if (!this._pixelBlockTiles) {
      const { rasterInfo: a } = this, [r, l] = a.storageInfo.tileInfo.size, { sliceId: o } = t, { pixelBlocks: c } = this.source, u = { pixelBlock: o == null ? c[0] : c[o], useBilinear: a.dataType !== "thematic", tileSize: { width: r, height: l }, level: i, row: e, col: n }, d = this.rasterJobHandler ? this.rasterJobHandler.clipTile(u, t) : ei(u);
      return Promise.resolve(d);
    }
    const s = this._pixelBlockTiles.get(`${i}/${e}/${n}`);
    return Promise.resolve(s);
  }
  async _open(i) {
    const e = this.source, { pixelBlocks: n, attributeTable: t, statistics: s, histograms: a, name: r, nativeExtent: l, transform: o } = e, c = n[0], { width: u, height: d, pixelType: h } = c, f = e.extent ?? new z({ xmin: -0.5, ymin: 0.5, xmax: u - 0.5, ymax: d - 0.5, spatialReference: new A({ wkid: 3857 }) }), y = e.isPseudoSpatialReference ?? !e.extent, g = { x: f.width / u, y: f.height / d }, p = { ...e.keyProperties };
    t && (p.DataType = "Thematic");
    const m = new ve({ width: u, height: d, pixelType: h, extent: f, nativeExtent: l, attributeTable: t, transform: o, pixelSize: g, spatialReference: f.spatialReference, bandCount: c.pixels.length, keyProperties: p, multidimensionalInfo: e.multidimensionalInfo, statistics: s, isPseudoSpatialReference: y, histograms: a });
    this.ioConfig.skipMapInfo && this.updateImageSpaceRasterInfo(m), this.createRemoteDatasetStorageInfo(m, 512, 512), this._set("rasterInfo", m), this.updateTileInfo(), m.multidimensionalInfo ? await this._buildMDimStats(e.pixelBlocks, m.multidimensionalInfo) : await this._buildInMemoryRaster(c, { width: 512, height: 512 }, i), m.multidimensionalInfo || (this.source = null), this.datasetName = r;
  }
  async _buildInMemoryRaster(i, e, n) {
    const { rasterInfo: t } = this, s = t.storageInfo.maximumPyramidLevel ?? 0, a = t.dataType !== "thematic", r = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: i, tileSize: e, maximumPyramidLevel: s, useBilinear: a }, n) : Promise.resolve(ti(i, e, s, a)), l = t.statistics != null, o = t.histograms != null, c = this.ioConfig.skipStatistics || l ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: i }, n) : Promise.resolve(ii(i)), u = await ft([r, c]);
    if (!u[0].value && u[1].value) throw new k("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = u[0].value, l || (t.statistics = u[1].value?.statistics), o || (t.histograms = u[1].value?.histograms);
  }
  async _buildMDimStats(i, e, n) {
    for (let t = 0; t < e.variables.length; t++) {
      const s = e.variables[t];
      if (s.statistics) continue;
      const a = s.dimensions.map((c) => new Ae({ variableName: s.name, dimensionName: c.name, values: [c.values?.[0] ?? c.extent?.[0]], isSlice: !0 })), r = ut(a, e), l = r == null ? null : i[r];
      if (l == null) continue;
      const o = this.rasterJobHandler ? await this.rasterJobHandler.computeStatisticsHistograms({ pixelBlock: l }, n) : He(l);
      s.statistics = o.statistics, s.histograms || (s.histograms = o.histograms);
    }
  }
};
w([b({ type: String, json: { write: !0 } })], oe.prototype, "datasetFormat", void 0), w([b()], oe.prototype, "source", void 0), w([b()], oe.prototype, "url", null), oe = w([X("esri.layers.support.rasterDatasets.InMemoryRaster")], oe);
const Ge = oe;
let he = class extends ae {
  constructor() {
    super(...arguments), this.datasetFormat = "CovJSON";
  }
  fetchRawTile(e, n, t, s = {}) {
    return this._inMemoryRaster.fetchRawTile(e, n, t, s);
  }
  async _open(e) {
    const { extent: n, pixelBlocks: t, multidimensionalInfo: s, attributeTable: a, bandNames: r } = await this._fetchData(e), { statistics: l, histograms: o } = He(t[0]), c = r?.map((f) => ({ BandName: f })), u = { DataType: a ? "Thematic" : s ? "Scientific" : "Generic", BandProperties: c }, d = new Ge({ source: { extent: n, pixelBlocks: t, attributeTable: a ? Le.fromJSON(a) : null, multidimensionalInfo: s, statistics: l, histograms: o, keyProperties: u, isPseudoSpatialReference: !1 } });
    await d.open(), this._inMemoryRaster = d;
    const h = this.source ? "" : this.url.slice(this.url.lastIndexOf("/") + 1);
    this._set("datasetName", h.slice(0, h.indexOf("."))), this._set("rasterInfo", d.rasterInfo);
  }
  async _fetchData(e) {
    const n = this.source ?? (await this.request(this.url, { signal: e?.signal })).data, t = "imagery-tile-layer:open-coverage-json";
    if (n.type?.toLowerCase() !== "coverage" || n.domain?.domainType?.toLowerCase() !== "grid") throw new k(t, "Only coverage with Grid domain type is supported");
    if (!n.ranges) throw new k(t, "Missing ranges in the grid coverage data");
    if (!n.domain.referencing?.length) throw new k(t, "Missing domain referencing in the grid coverage data");
    const s = Object.values(n.ranges);
    for (let a = 0; a < s.length; a++) {
      const { axisNames: r, shape: l, type: o, values: c } = s[a];
      if (!(o.toLowerCase() === "ndarray" && c?.length && r?.length && l?.length)) throw new k(t, "Only ranges with valid NdArray, axisNames, shape, and inline values are supported");
      if (!(mt(r[r.length - 1]) && yt(r[r.length - 2]))) throw new k(t, "Only row-major ordered pixel values are supported. X axis must be the last axis.");
    }
    return rs(n);
  }
};
w([b({ type: String, json: { write: !0 } })], he.prototype, "datasetFormat", void 0), w([b({ constructOnly: !0 })], he.prototype, "source", void 0), he = w([X("esri.layers.support.rasterDatasets.CovJSONRaster")], he);
const as = he;
function ue(i, e) {
  if (!i || !e) return [];
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = [];
  if (e) {
    const a = ue(i, n);
    for (let r = 0; r < a.length; r++)
      ue(a[r], e).forEach((l) => t.push(l));
    return t;
  }
  const s = i.getElementsByTagNameNS("*", n);
  if (!s || s.length === 0) return [];
  for (let a = 0; a < s.length; a++) t.push(s[a] || s.item(a));
  return t;
}
function j(i, e) {
  if (!i || !e) return null;
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = ue(i, n);
  return t.length > 0 ? e ? j(t[0], e) : t[0] : null;
}
function Y(i, e = null) {
  const n = e ? j(i, e) : i;
  let t;
  return n ? (t = n.textContent || n.nodeValue, t ? t.trim() : null) : null;
}
function os(i, e) {
  const n = ue(i, e), t = [];
  let s;
  for (let a = 0; a < n.length; a++) s = n[a].textContent || n[a].nodeValue, s && (s = s.trim(), s !== "" && t.push(s));
  return t;
}
function ge(i, e) {
  return os(i, e).map((n) => Number(n));
}
function ne(i, e) {
  const n = Y(i, e);
  return Number(n);
}
function ke(i, e) {
  const n = i?.nodeName?.toLowerCase(), t = e.toLowerCase();
  return n.slice(n.lastIndexOf(":") + 1) === t;
}
function rt(i, e) {
  if (!i || !e) return null;
  const n = [];
  for (let t = 0; t < i.length; t++) n.push(i[t]), n.push(e[t]);
  return n;
}
function ls(i) {
  const e = j(i, "GeodataXform"), n = Se(ne(e, "SpatialReference/WKID") || Y(e, "SpatialReference/WKT"));
  if (e.getAttribute("xsi:type") !== "typens:PolynomialXform") return { spatialReference: n, transform: null };
  const t = ne(e, "PolynomialOrder") ?? 1, s = ge(e, "CoeffX/Double"), a = ge(e, "CoeffY/Double"), r = ge(e, "InverseCoeffX/Double"), l = ge(e, "InverseCoeffY/Double"), o = rt(s, a), c = rt(r, l);
  return { spatialReference: n, transform: o && c && o.length && c.length ? new We({ spatialReference: n, polynomialOrder: t, forwardCoefficients: o, inverseCoefficients: c }) : null };
}
function cs(i) {
  const e = ne(i, "NoDataValue"), n = j(i, "Histograms/HistItem"), t = ne(n, "HistMin"), s = ne(n, "HistMax"), a = ne(n, "BucketCount"), r = Y(n, "HistCounts")?.split("|").map((h) => Number(h));
  let l, o, c, u;
  ue(i, "Metadata/MDI").forEach((h) => {
    const f = Number(h.textContent ?? h.nodeValue);
    switch (h.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        l = f;
        break;
      case "STATISTICS_MAXIMUM":
        o = f;
        break;
      case "STATISTICS_MEAN":
        c = f;
        break;
      case "STATISTICS_STDDEV":
        u = f;
    }
  });
  const d = ne(i, "Metadata/SourceBandIndex");
  return { noDataValue: e, histogram: r?.length && t != null && s != null ? { min: t, max: s, size: a || r.length, counts: r } : null, sourceBandIndex: d, statistics: l != null && o != null ? { min: l, max: o, avg: c, stddev: u } : null };
}
function Se(i) {
  if (!i) return null;
  let e = Number(i);
  if (!isNaN(e) && e !== 0) return new A({ wkid: e });
  if (i = String(i).trim(), si(i)) return new A({ wkt2: i });
  const n = i.toUpperCase();
  if (n.startsWith("COMPD_CS")) {
    if (!n.includes("VERTCS") || !n.includes("GEOGCS") && !n.startsWith("PROJCS")) return null;
    const t = n.indexOf("VERTCS"), s = n.indexOf("PROJCS"), a = s > -1 ? s : n.indexOf("GEOGCS");
    if (a === -1) return null;
    const r = i.slice(a, i.lastIndexOf("]", t) + 1).trim(), l = i.slice(t, i.lastIndexOf("]")).trim();
    e = Oe(r);
    const o = new A(e ? { wkid: e } : { wkt: r }), c = Oe(l);
    return c && (o.vcsWkid = c), o;
  }
  return n.startsWith("GEOGCS") || n.startsWith("PROJCS") ? (e = Oe(i), new A(e !== 0 ? { wkid: e } : { wkt: i })) : null;
}
function Oe(i) {
  const e = i.replaceAll("]", "[").replaceAll('"', "").split("[").map((s) => s.trim()).filter((s) => s !== ""), n = e[e.length - 1].split(","), t = n[0]?.toLowerCase();
  if ((t === "epsg" || t === "esri") && i.endsWith('"]]')) {
    const s = Number(n[1]);
    if (!isNaN(s) && s !== 0) return s;
  }
  return 0;
}
function je(i) {
  if (i?.documentElement.tagName?.toLowerCase() !== "pamdataset") return {};
  const e = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  i.documentElement.childNodes.forEach((t) => {
    if (t.nodeType === 1) {
      if (ke(t, "SRS")) {
        if (!e.spatialReference) {
          const s = Y(t);
          e.spatialReference = Se(s);
        }
      } else if (ke(t, "Metadata")) if (t.getAttribute("domain") === "xml:ESRI") {
        const { spatialReference: s, transform: a } = ls(t);
        e.transform = a, e.spatialReference || (e.spatialReference = s);
      } else
        ue(t, "MDI").forEach((s) => e.metadata[s.getAttribute("key")] = Y(s));
      else if (ke(t, "PAMRasterBand")) {
        const s = cs(t);
        s.sourceBandIndex != null && e.rasterBands[s.sourceBandIndex] == null ? e.rasterBands[s.sourceBandIndex] = s : e.rasterBands.push(s);
      }
    }
  });
  const n = e.rasterBands;
  if (n.length) {
    const t = !!n[0].statistics;
    e.statistics = t ? n.map((a) => a.statistics).filter($e) : null;
    const s = !!n[0].histogram;
    e.histograms = s ? n.map((a) => a.histogram).filter($e) : null;
  }
  return e;
}
let be = class extends ae {
  fetchRawTile(i, e, n, t = {}) {
    return this._inMemoryRaster.fetchRawTile(i, e, n, t);
  }
  async _open(i) {
    const e = await this._fetchData(i);
    let { spatialReference: n, statistics: t, histograms: s, transform: a } = await this._fetchAuxiliaryData(i);
    const r = !n;
    r && (n = new A({ wkid: 3857 })), s?.length && t == null && (t = ze(s));
    const { width: l, height: o } = e;
    let c = new z({ xmin: -0.5, ymin: 0.5 - o, xmax: l - 0.5, ymax: 0.5, spatialReference: n });
    const u = a ? a.forwardTransform(c) : c;
    let d = !0;
    if (a) {
      const f = a.forwardCoefficients;
      d = f && f[1] === 0 && f[2] === 0, d && (a = null, c = u);
    }
    const h = new Ge({ source: { extent: u, nativeExtent: c, transform: a, pixelBlocks: [e], statistics: t, histograms: s, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: r }, ioConfig: { sampling: "closest", skipStatistics: !0 } });
    this.ioConfig.skipMapInfo && (h.ioConfig.skipMapInfo = !0), await h.open(), h.source = null, this._set("rasterInfo", h.rasterInfo), this._inMemoryRaster = h;
  }
  async _fetchData(i) {
    const { data: e } = await this.request(this.url, { responseType: "array-buffer", signal: i?.signal }), n = ni(e).toUpperCase();
    if (n !== "JPG" && n !== "PNG" && n !== "GIF" && n !== "BMP") throw new k("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", n);
    const t = n.toLowerCase(), s = t === "gif" || t === "bmp" || !ri("ios"), a = await this.decodePixelBlock(e, { format: t, useCanvas: s, hasNoZlibMask: !0 });
    if (a == null) throw new k("image-aux-raster:open", "the data cannot be decoded");
    return a;
  }
  async _fetchAuxiliaryData(i) {
    const e = i?.signal, { skipExtensions: n = [], skipMapInfo: t } = this.ioConfig, s = t || n.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: e }), a = this.datasetFormat, r = a === "JPG" ? "jgw" : a === "PNG" ? "pgw" : a === "BMP" ? "bpw" : null, l = r && n.includes(r) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + r, { responseType: "text", signal: e }), o = await ft([s, l]);
    if (e?.aborted) throw ai();
    const c = je(o[0].value?.data);
    if (!c.transform) {
      const u = o[1].value ? o[1].value.data.split(`
`).slice(0, 6).map((d) => Number(d)) : null;
      c.transform = u?.length === 6 ? new We({ forwardCoefficients: [u[4], u[5], u[0], -u[1], u[2], -u[3]] }) : null;
    }
    return c;
  }
};
w([b({ type: String, json: { write: !0 } })], be.prototype, "datasetFormat", void 0), be = w([X("esri.layers.support.rasterDatasets.ImageAuxRaster")], be);
const xe = be;
let fe = class extends ae {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async fetchRawTile(i, e, n, t = {}) {
    const { storageInfo: s, extent: a } = this.rasterInfo, { transposeInfo: r } = s, l = r != null && !!t.transposedVariableName;
    if (this._slices && !l && t.sliceId == null) return null;
    const o = l ? 0 : s.maximumPyramidLevel - i + this._levelOffset, c = `${this.url}/tile/${o}/${e}/${n}`, u = this._slices ? l ? { variable: t.transposedVariableName } : { sliceId: t.sliceId || 0 } : null, { data: d } = await this.request(c, { query: u, responseType: "array-buffer", signal: t.signal });
    if (!d) return null;
    const h = l ? r.tileSize : s.tileInfo.size, f = await this.decodePixelBlock(d, { width: h[0], height: h[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation", returnInterleaved: l, noDataValue: this.rasterInfo.noDataValue });
    if (f == null) return null;
    const y = s.blockBoundary[i];
    if (s.compression !== "jpg" || n > y.minCol && n < y.maxCol && e > y.minRow && e < y.maxRow) return f;
    const { origin: g, blockWidth: p, blockHeight: m } = s, { x, y: R } = this.getPyramidPixelSize(i), I = Math.round((a.xmin - g.x) / x) % p, S = Math.round((a.xmax - g.x) / x) % p || p, T = Math.round((g.y - a.ymax) / R) % m, v = Math.round((g.y - a.ymin) / R) % m || m, C = n === y.minCol ? I : 0, _ = e === y.minRow ? T : 0, P = n === y.maxCol ? S : p, F = e === y.maxRow ? v : m;
    return oi(f, { x: C, y: _ }, { width: P - C, height: F - _ }), f;
  }
  getSliceIndex(i) {
    if (!this._slices || i == null || i.length === 0) return null;
    const e = i;
    for (let n = 0; n < this._slices.length; n++) {
      const t = this._slices[n].multidimensionalDefinition;
      if (t.length === e.length && !t.some((s) => {
        const a = e.find((r) => s.variableName === r.variableName && r.dimensionName === s.dimensionName);
        return a ? (Array.isArray(s.values[0]) ? `${s.values[0][0]}-${s.values[0][1]}` : s.values[0]) !== (Array.isArray(a.values[0]) ? `${a.values[0][0]}-${a.values[0][1]}` : a.values[0]) : !0;
      })) return n;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(i, e) {
    const n = this.request(this.url + "/statistics", { query: { variable: i, f: "json" }, signal: e }).then((a) => a.data?.statistics), t = this.request(this.url + "/histograms", { query: { variable: i, f: "json" }, signal: e }).then((a) => a.data?.histograms), s = await Promise.all([n, t]);
    return s[0] && s[0].forEach((a) => {
      a.avg = a.mean, a.stddev = a.standardDeviation;
    }), s[1]?.[0]?.counts?.length || (s[1] = null), { statistics: s[0] || null, histograms: s[1] || null };
  }
  async computeBestPyramidLevelForLocation(i, e = {}) {
    if (!this._tilemapCache) return 0;
    let n = this.identifyPixelLocation(i, 0, e.datumTransformation);
    if (n === null) return null;
    let t = 0;
    const { maximumPyramidLevel: s } = this.rasterInfo.storageInfo;
    let a = s - t + this._levelOffset;
    const r = n.srcLocation;
    for (; a >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(a, n.row, n.col, e) === "available") break;
      } catch {
      }
      if (a--, t++, n = this.identifyPixelLocation(r, t, e.datumTransformation), n === null) return null;
    }
    return a === -1 || n == null ? null : t;
  }
  async _open(i) {
    const e = i?.signal, n = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: e });
    n.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const t = n.data;
    if (this.sourceJSON = t, !t) throw new k("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!t.tileInfo) throw new k("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const s = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = t.cacheType, this.tileType == null && (s.includes(t.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : t.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = t.name?.slice(t.name.indexOf("/") + 1) ?? "";
    const a = await this._fetchRasterInfo({ signal: e });
    if (a == null) throw new k("image-server-raster:open", "cannot initialize image service");
    li(a, t);
    const r = this.tileType === "Map" ? us(t.tileInfo, t) : ee.fromJSON(t.tileInfo);
    ci(r);
    const [l, o] = this._computeMinMaxLOD(a, r), { extent: c, pixelSize: u } = a, d = 0.5 / a.width * u.x, h = Math.max(u.x, u.y), { lods: f } = r;
    (this.tileType !== "Map" && t.maxScale !== 0 || Math.abs(u.x - u.y) > d || !f.some((v) => Math.abs(v.resolution - h) < d)) && (u.x = u.y = l.resolution, a.width = Math.ceil((c.xmax - c.xmin) / u.x - 0.1), a.height = Math.ceil((c.ymax - c.ymin) / u.y - 0.1));
    const y = l.level - o.level, [g, p] = r.size, m = [], x = [];
    f.forEach((v, C) => {
      v.level >= o.level && v.level <= l.level && m.push({ x: v.resolution, y: v.resolution }), C < f.length - 1 && x.push(Math.round(10 * v.resolution / f[C + 1].resolution) / 10);
    }), m.sort((v, C) => v.x - C.x);
    const R = this.computeBlockBoundary(c, g, p, r.origin, m, y), I = m.length > 1 ? m.slice(1) : null;
    let S;
    t.transposeInfo && (S = { tileSize: [t.transposeInfo.rows, t.transposeInfo.cols], packetSize: a.keyProperties?._yxs.PacketSize ?? 0 });
    const T = x.length <= 1 || x.length >= 3 && x.slice(0, -1).every((v) => v === x[0]) ? x[0] ?? 2 : Math.round(10 / (o.resolution / l.resolution) ** (-1 / y)) / 10;
    if (a.storageInfo = new Re({ blockWidth: r.size[0], blockHeight: r.size[1], pyramidBlockWidth: r.size[0], pyramidBlockHeight: r.size[1], pyramidResolutions: I, pyramidScalingFactor: T, compression: r.format, origin: r.origin, firstPyramidLevel: 1, maximumPyramidLevel: y, tileInfo: r, transposeInfo: S, blockBoundary: R }), hs(a), this._set("rasterInfo", a), t.capabilities.toLowerCase().includes("tilemap")) {
      const v = { tileInfo: a.storageInfo.tileInfo, parsedUrl: ui(this.url), url: this.url, tileServers: [] };
      this._tilemapCache = new hi({ layer: v });
    }
  }
  async _fetchRasterInfo(i) {
    const e = this.sourceJSON;
    if (this.tileType === "Map") {
      const r = e.fullExtent || e.extent, l = Math.ceil((r.xmax - r.xmin) / e.pixelSizeX - 0.1), o = Math.ceil((r.ymax - r.ymin) / e.pixelSizeY - 0.1), c = A.fromJSON(e.spatialReference || r.spatialReference), u = new E({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: c });
      return new ve({ width: l, height: o, bandCount: 3, extent: z.fromJSON(r), spatialReference: c, pixelSize: u, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const { signal: n } = i, t = fi(this.url, this.sourceJSON, { signal: n, query: this.ioConfig.customFetchParameters }), s = e.hasMultidimensions ? this.request(`${this.url}/slices`, { query: { f: "json" }, signal: n }).then((r) => r.data?.slices).catch(() => null) : null, a = await Promise.all([t, s]);
    return this._slices = a[1], a[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: i } = this;
    i.minScale && i.minScale < 0 && (i.minScale = 0), i.maxScale && i.maxScale < 0 && (i.maxScale = 0);
  }
  _computeMinMaxLOD(i, e) {
    const { pixelSize: n } = i, t = 0.5 / i.width * n.x, { lods: s } = e, a = e.lodAt(Math.max.apply(null, s.map((h) => h.level))), r = e.lodAt(Math.min.apply(null, s.map((h) => h.level))), { tileType: l } = this;
    if (l === "Map") return this._levelOffset = s[0].level, [a, r];
    if (l === "Raster")
      return [s.find((h) => h.resolution === n.x) ?? a, r];
    const { minScale: o, maxScale: c } = this.sourceJSON;
    let u = a;
    c > 0 && (u = s.find((h) => Math.abs(h.scale - c) < t), u || (u = s.filter((h) => h.scale > c).sort((h, f) => h.scale > f.scale ? 1 : -1)[0] ?? a));
    let d = r;
    return o > 0 && (d = s.find((h) => Math.abs(h.scale - o) < t) ?? r, this._levelOffset = d.level - r.level), [u, d];
  }
};
function us(i, e) {
  if (!i) return null;
  const { minScale: n, maxScale: t, minLOD: s, maxLOD: a } = e;
  if (s != null && a != null) return ee.fromJSON({ ...i, lods: i.lods.filter(({ level: r }) => r != null && r >= s && r <= a) });
  if (n !== 0 && t !== 0) {
    const r = (c) => Math.round(1e4 * c) / 1e4, l = n ? r(n) : 1 / 0, o = t ? r(t) : -1 / 0;
    return ee.fromJSON({ ...i, lods: i.lods.filter((c) => {
      const u = r(c.scale);
      return u <= l && u >= o;
    }) });
  }
  return ee.fromJSON(i);
}
function hs(i) {
  const { extent: e, spatialReference: n } = i;
  e.xmin > -1 && e.xmax > 181 && n?.wkid && n.isGeographic && (i.nativeExtent = i.extent, i.transform = new qi(), i.extent = i.transform.forwardTransform(e));
}
w([b({ type: String, json: { write: !0 } })], fe.prototype, "datasetFormat", void 0), w([b()], fe.prototype, "tileType", void 0), fe = w([X("esri.layers.support.rasterDatasets.ImageServerRaster")], fe);
const fs = fe, V = /* @__PURE__ */ new Map();
V.set("Int8", "s8"), V.set("UInt8", "u8"), V.set("Int16", "s16"), V.set("UInt16", "u16"), V.set("Int32", "s32"), V.set("UInt32", "u32"), V.set("Float32", "f32"), V.set("Float64", "f32"), V.set("Double64", "f32");
const Z = /* @__PURE__ */ new Map();
Z.set("none", { blobExtension: ".til", isOneSegment: !0, decoderFormat: "bip" }), Z.set("lerc", { blobExtension: ".lrc", isOneSegment: !1, decoderFormat: "lerc" }), Z.set("deflate", { blobExtension: ".pzp", isOneSegment: !0, decoderFormat: "deflate" }), Z.set("jpeg", { blobExtension: ".pjg", isOneSegment: !0, decoderFormat: "jpg" });
let le = class extends ae {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async fetchRawTile(i, e, n, t = {}) {
    const { blockWidth: s, blockHeight: a, blockBoundary: r } = this.rasterInfo.storageInfo, l = r[i];
    if (!l || l.maxRow < e || l.maxCol < n || l.minRow > e || l.minCol > n) return null;
    const { bandCount: o, pixelType: c } = this.rasterInfo, { ranges: u, actualTileWidth: d, actualTileHeight: h } = this._getTileLocation(i, e, n);
    if (!u || u.length === 0) return null;
    if (u[0].from === 0 && u[0].to === 0) {
      const F = new Uint8Array(s * a);
      return new we({ width: s, height: a, pixels: void 0, mask: F, validPixelCount: 0 });
    }
    const { bandIds: f } = this.ioConfig, y = this._getBandSegmentCount(), g = [];
    let p = 0;
    for (p = 0; p < y; p++) f && !f.includes(p) || g.push(this.request(this._files.data, { range: { from: u[p].from, to: u[p].to }, responseType: "array-buffer", signal: t.signal }));
    const m = await Promise.all(g), x = m.map((F) => F.data.byteLength).reduce((F, M) => F + M), R = new Uint8Array(x), I = [];
    let S = 0;
    for (p = 0; p < y; p++) I.push(S), R.set(new Uint8Array(m[p].data), S), S += m[p].data.byteLength;
    const T = Z.get(this.rasterInfo.storageInfo.compression).decoderFormat, v = await this.decodePixelBlock(R.buffer, { width: s, height: a, format: T, planes: f?.length || o, offsets: I, pixelType: c });
    if (v == null) return null;
    let { noDataValue: C } = this.rasterInfo;
    if (C != null && T !== "lerc" && !v.mask && (C = C[0], C != null)) {
      const F = v.width * v.height, M = new Uint8Array(F);
      if (Math.abs(C) > 1e24) for (p = 0; p < F; p++) Math.abs((v.pixels[0][p] - C) / C) > 1e-6 && (M[p] = 1);
      else for (p = 0; p < F; p++) v.pixels[0][p] !== C && (M[p] = 1);
      v.mask = M;
    }
    let _ = 0, P = 0;
    if (d !== s || h !== a) {
      let F = v.mask;
      if (F) for (p = 0; p < a; p++) if (P = p * s, p < h) for (_ = d; _ < s; _++) F[P + _] = 0;
      else for (_ = 0; _ < s; _++) F[P + _] = 0;
      else for (F = new Uint8Array(s * a), v.mask = F, p = 0; p < h; p++) for (P = p * s, _ = 0; _ < d; _++) F[P + _] = 1;
    }
    return v;
  }
  async _open(i) {
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e = i ? i.signal : null, n = await this.request(this.url, { responseType: "xml", signal: e }), { rasterInfo: t, files: s } = this._parseHeader(n.data), { skipMapInfo: a, skipExtensions: r = [] } = this.ioConfig;
    if (!r.includes("aux.xml") && !a) {
      const m = await this._fetchAuxiliaryData(i);
      m != null && (t.statistics = m.statistics ?? t.statistics, t.histograms = m.histograms, m.histograms && t.statistics == null && (t.statistics = ze(m.histograms)));
    }
    a && this.updateImageSpaceRasterInfo(t), this._set("rasterInfo", t), this._files = s;
    const l = await this.request(s.index, { responseType: "array-buffer", signal: e });
    this._storageIndex = ds(l.data);
    const { blockWidth: o, blockHeight: c } = this.rasterInfo.storageInfo, u = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: d, height: h } = this.rasterInfo, f = [], y = this._getBandSegmentCount();
    let g = 0, p = -1;
    for (; g < this._storageIndex.length; ) {
      p++;
      const m = Math.ceil(d / o / u ** p) - 1, x = Math.ceil(h / c / u ** p) - 1;
      g += (m + 1) * (x + 1) * y * 4, f.push({ maxRow: x, maxCol: m, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = f, p > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = p), this.updateTileInfo();
  }
  _getBandSegmentCount() {
    return Z.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(i, e, n) {
    const { blockWidth: t, blockHeight: s, pyramidScalingFactor: a } = this.rasterInfo.storageInfo, { width: r, height: l } = this.rasterInfo, o = this._getBandSegmentCount();
    let c, u, d, h = 0, f = 0;
    for (d = 0; d < i; d++) f = a ** d, c = Math.ceil(r / t / f), u = Math.ceil(l / s / f), h += c * u;
    f = a ** i, c = Math.ceil(r / t / f), u = Math.ceil(l / s / f), h += e * c + n, h *= 4 * o;
    const y = this._storageIndex.subarray(h, h + 4 * o);
    let g = 0, p = 0;
    const m = [];
    for (let x = 0; x < o; x++) g = y[4 * x] * 2 ** 32 + y[4 * x + 1], p = g + y[4 * x + 2] * 2 ** 32 + y[4 * x + 3], m.push({ from: g, to: p });
    return { ranges: m, actualTileWidth: n < c - 1 ? t : Math.ceil(r / f) - t * (c - 1), actualTileHeight: e < u - 1 ? s : Math.ceil(l / f) - s * (u - 1) };
  }
  _parseHeader(i) {
    const e = j(i, "MRF_META/Raster");
    if (!e) throw new k("mrf:open", "not a valid MRF format");
    const n = j(e, "Size"), t = parseInt(n.getAttribute("x"), 10), s = parseInt(n.getAttribute("y"), 10), a = parseInt(n.getAttribute("c"), 10), r = (Y(e, "Compression") || "none").toLowerCase();
    if (!Z.has(r)) throw new k("mrf:open", "currently does not support compression " + r);
    const l = Y(e, "DataType") || "UInt8", o = V.get(l);
    if (o == null) throw new k("mrf:open", "currently does not support pixel type " + l);
    const c = j(e, "PageSize"), u = parseInt(c.getAttribute("x"), 10), d = parseInt(c.getAttribute("y"), 10), h = j(e, "DataValues");
    let f, y;
    if (h && (y = h.getAttribute("NoData"), y != null && (f = y.trim().split(" ").map((F) => parseFloat(F)))), j(i, "MRF_META/CachedSource")) throw new k("mrf:open", "currently does not support MRF referencing other data files");
    const g = j(i, "MRF_META/GeoTags"), p = j(g, "BoundingBox");
    let m, x = !1;
    if (p != null) {
      const F = parseFloat(p.getAttribute("minx")), M = parseFloat(p.getAttribute("miny")), O = parseFloat(p.getAttribute("maxx")), $ = parseFloat(p.getAttribute("maxy")), N = Y(g, "Projection") || "";
      let J = A.WGS84;
      if (N !== "LOCAL_CS[]") if (N.toLowerCase().startsWith("epsg:")) {
        const H = Number(N.slice(5));
        isNaN(H) || H === 0 || (J = new A({ wkid: H }));
      } else J = Se(N) ?? A.WGS84;
      else x = !0, J = new A({ wkid: 3857 });
      m = new z(F, M, O, $), m.spatialReference = J;
    } else x = !0, m = new z({ xmin: -0.5, ymin: 0.5 - s, xmax: t - 0.5, ymax: 0.5, spatialReference: new A({ wkid: 3857 }) });
    const R = j(i, "MRF_META/Rsets"), I = parseInt(R?.getAttribute("scale") || "2", 10), S = m.spatialReference, T = new Re({ origin: new E({ x: m.xmin, y: m.ymax, spatialReference: S }), blockWidth: u, blockHeight: d, pyramidBlockWidth: u, pyramidBlockHeight: d, compression: r, pyramidScalingFactor: I }), v = new E({ x: m.width / t, y: m.height / s, spatialReference: S }), C = new ve({ width: t, height: s, extent: m, isPseudoSpatialReference: x, spatialReference: S, bandCount: a, pixelType: o, pixelSize: v, noDataValue: f, storageInfo: T }), _ = Y(i, "datafile"), P = Y(i, "IndexFile");
    return { rasterInfo: C, files: { mrf: this.url, index: P || this.url.replace(".mrf", ".idx"), data: _ || this.url.replace(".mrf", Z.get(r).blobExtension) } };
  }
  async _fetchAuxiliaryData(i) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: i?.signal });
      return je(e);
    } catch {
      return null;
    }
  }
};
function ds(i) {
  if (i.byteLength % 16 > 0) throw new Error("invalid array buffer must be multiples of 16");
  let e, n, t, s, a, r;
  if (di) {
    for (n = new Uint8Array(i), s = new ArrayBuffer(i.byteLength), t = new Uint8Array(s), a = 0; a < i.byteLength / 4; a++) for (r = 0; r < 4; r++) t[4 * a + r] = n[4 * a + 3 - r];
    e = new Uint32Array(s);
  } else e = new Uint32Array(i);
  return e;
}
w([b()], le.prototype, "_files", void 0), w([b()], le.prototype, "_storageIndex", void 0), w([b({ type: String, json: { write: !0 } })], le.prototype, "datasetFormat", void 0), le = w([X("esri.layers.support.rasterDatasets.MRFRaster")], le);
const ps = le;
function ms(i) {
  const e = i.fields, n = i.records, t = e.some((c) => c.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", s = [{ name: t, type: "esriFieldTypeOID", alias: "OID" }].concat(e.map((c) => ({ name: c.name, type: "esriFieldType" + c.typeName, alias: c.name }))), a = s.map((c) => c.name), r = [];
  let l = 0, o = 0;
  return n.forEach((c) => {
    const u = {};
    for (u[t] = l++, o = 1; o < a.length; o++) u[a[o]] = c[o - 1];
    r.push({ attributes: u });
  }), { displayFieldName: "", fields: s, features: r };
}
class ys {
  static get supportedVersions() {
    return [5];
  }
  static parse(e) {
    const n = new DataView(e), t = 3 & n.getUint8(0);
    if (t !== 3) return { header: { version: t }, recordSet: null };
    const s = n.getUint32(4, !0), a = n.getUint16(8, !0), r = n.getUint16(10, !0), l = { version: t, recordCount: s, headerByteCount: a, recordByteCount: r };
    let o = 32;
    const c = [], u = [];
    let d;
    if (t === 3) {
      for (; n.getUint8(o) !== 13; ) d = String.fromCharCode(n.getUint8(o + 11)).trim(), c.push({ name: Qe(new Uint8Array(e, o, 11)), type: d, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(d)], length: n.getUint8(o + 16) }), o += 32;
      if (o += 1, c.length > 0) for (; u.length < s && e.byteLength - o > r; ) {
        const h = [];
        n.getUint8(o) === 32 ? (o += 1, c.forEach((f) => {
          if (f.type === "C") h.push(Qe(new Uint8Array(e, o, f.length)).trim());
          else if (f.type === "N") h.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(e, o, f.length)).trim(), 10));
          else if (f.type === "F") h.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(e, o, f.length)).trim()));
          else if (f.type === "D") {
            const y = String.fromCharCode.apply(null, new Uint8Array(e, o, f.length)).trim();
            h.push(new Date(parseInt(y.slice(0, 4), 10), parseInt(y.slice(4, 6), 10) - 1, parseInt(y.slice(6, 8), 10)));
          }
          o += f.length;
        }), u.push(h)) : o += r;
      }
    }
    return { header: l, fields: c, records: u, recordSet: ms({ fields: c, records: u }) };
  }
}
const Je = (i, e) => i.get(e)?.values, de = (i, e) => i.get(e)?.values?.[0];
let se = class extends ae {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async fetchRawTile(i, e, n, t = {}) {
    if (!this._headerInfo?.isSupported || this.isBlockOutside(i, e, n)) return null;
    const s = await this._fetchRawTiffTile(i, e, n, !1, t);
    if (s != null && this._headerInfo.hasMaskBand) {
      const a = await this._fetchRawTiffTile(i, e, n, !0, t);
      a != null && a.pixels[0] instanceof Uint8Array && (s.mask = a.pixels[0]);
    }
    return s;
  }
  async _open(i) {
    const e = i ? i.signal : null, { data: n } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: e });
    if (!n) throw new k("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
    const { littleEndian: t, firstIFDPos: s, isBigTiff: a } = pi(n), r = [];
    await this._readIFDs(r, n, t, s, 0, a ? 8 : 4, e);
    const { imageInfo: l, rasterInfo: o } = gs(r), c = mi(r), u = yi(r);
    if (this._headerInfo = { littleEndian: t, isBigTiff: a, ifds: r, pyramidIFDs: c, maskIFDs: u, ...l }, this._set("rasterInfo", o), !l.isSupported) throw new k("tiffraster:open", "this tiff is not supported: " + l.message);
    if (!l.tileWidth) throw new k("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    o.isPseudoSpatialReference && re.getLogger(this).warn("The spatial reference for this tiff is unsupported. Only EPSG spatial reference codes and Esri WKTs are supported.");
    const d = r[0].get("PREDICTOR")?.values?.[0];
    if (r[0].get("SAMPLEFORMAT")?.values?.[0] === 3 && d === 2) throw new k("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floating point data");
    const { skipMapInfo: f, skipExtensions: y = [] } = this.ioConfig;
    if (!y.includes("aux.xml") && !f) {
      const g = await this._fetchAuxiliaryMetaData(i);
      g != null && xs(g, o);
    }
    y.includes("vat.dbf") || o.bandCount !== 1 || o.pixelType !== "u8" || f || (o.attributeTable = await this._fetchAuxiliaryTable(i), o.attributeTable != null && (o.keyProperties.DataType = "thematic")), f && this.updateImageSpaceRasterInfo(o), this.updateTileInfo();
  }
  async _readIFDs(i, e, n, t, s, a = 4, r) {
    if (!t) return null;
    (t >= e.byteLength || t < 0) && (e = (await this.request(this.url, { range: { from: t + s, to: t + s + this._bufferSize }, responseType: "array-buffer", signal: r })).data, s = t + s, t = 0);
    const l = await this._readIFD(e, n, t, s, pe.tiffTags, a, r);
    if (i.push(l.ifd), !l.nextIFD) return null;
    await this._readIFDs(i, e, n, l.nextIFD - s, s, a, r);
  }
  async _readIFD(i, e, n, t, s = pe.tiffTags, a = 4, r) {
    if (!i) return null;
    const l = gi(i, e, n, t, s, a);
    if (l.success) {
      const o = [];
      if (l.ifd?.forEach((c) => {
        c.values || o.push(c);
      }), o.length > 0) {
        const c = o.map((d) => d.offlineOffsetSize).filter($e), u = Math.min.apply(null, c.map((d) => d[0]));
        if (Math.min.apply(null, c.map((d) => d[0] + d[1])) - u <= this._bufferSize) {
          const { data: d } = await this.request(this.url, { range: { from: u, to: u + this._bufferSize }, responseType: "array-buffer", signal: r });
          i = d, t = u, o.forEach((h) => xi(i, e, h, t));
        }
      }
      if (l.ifd?.has("GEOKEYDIRECTORY")) {
        const c = l.ifd.get("GEOKEYDIRECTORY"), u = c?.values;
        if (u && u.length > 4) {
          const d = u[0] + "." + u[1] + "." + u[2], h = await this._readIFD(i, e, c.valueOffset + 6 - t, t, pe.geoKeys, 2, r);
          c.data = h.ifd, c.data && c.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [d] });
        }
      }
      return l;
    }
    if (l.requiredBufferSize && l.requiredBufferSize !== i.byteLength)
      return (i = (await this.request(this.url, { range: { from: t, to: t + l.requiredBufferSize + 4 }, responseType: "array-buffer", signal: r })).data).byteLength < l.requiredBufferSize ? null : this._readIFD(i, e, 0, t, pe.tiffTags, 4, r);
  }
  async _fetchRawTiffTile(i, e, n, t, s = {}) {
    const a = this._getTileLocation(i, e, n, t);
    if (!a) return null;
    const { ranges: r, actualTileWidth: l, actualTileHeight: o, ifd: c } = a, u = r.map((T) => this.request(this.url, { range: T, responseType: "array-buffer", signal: s.signal })), d = await Promise.all(u), h = d.map((T) => T.data.byteLength).reduce((T, v) => T + v), f = d.length === 1 ? d[0].data : new ArrayBuffer(h), y = [0], g = [0];
    if (d.length > 1) {
      const T = new Uint8Array(f);
      for (let v = 0, C = 0; v < d.length; v++) {
        const _ = d[v].data;
        T.set(new Uint8Array(_), C), y[v] = C, C += _.byteLength, g[v] = _.byteLength;
      }
    }
    const { blockWidth: p, blockHeight: m } = this.getBlockWidthHeight(i), x = await this.decodePixelBlock(f, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: c, offsets: y, sizes: g }, width: p, height: m, planes: null, pixelType: null });
    if (x == null) return null;
    let R, I, S;
    if (l !== p || o !== m) {
      let T = x.mask;
      if (T) for (R = 0; R < m; R++) if (S = R * p, R < o) for (I = l; I < p; I++) T[S + I] = 0;
      else for (I = 0; I < p; I++) T[S + I] = 0;
      else for (T = new Uint8Array(p * m), x.mask = T, R = 0; R < o; R++) for (S = R * p, I = 0; I < l; I++) T[S + I] = 1;
    }
    return x;
  }
  _getTileLocation(i, e, n, t = !1) {
    const { firstPyramidLevel: s, blockBoundary: a } = this.rasterInfo.storageInfo, r = i === 0 ? 0 : i - (s - 1), { _headerInfo: l } = this;
    if (!l) return null;
    const o = t ? l.maskIFDs[r] : r === 0 ? l?.ifds[0] : l?.pyramidIFDs[r - 1];
    if (!o) return null;
    const c = wi(o, l), u = Je(o, "TILEOFFSETS");
    if (u === void 0) return null;
    const d = Je(o, "TILEBYTECOUNTS"), { minRow: h, minCol: f, maxRow: y, maxCol: g } = a[r];
    if (e > y || n > g || e < h || n < f) return null;
    const p = de(o, "IMAGEWIDTH"), m = de(o, "IMAGELENGTH"), x = de(o, "TILEWIDTH"), R = de(o, "TILELENGTH"), I = [];
    if (c) {
      const { bandCount: S } = this.rasterInfo;
      for (let T = 0; T < S; T++) {
        const v = T * (y + 1) * (g + 1) + e * (g + 1) + n;
        I[T] = { from: u[v], to: u[v] + d[v] - 1 };
      }
    } else {
      const S = e * (g + 1) + n;
      I.push({ from: u[S], to: u[S] + d[S] - 1 });
    }
    for (let S = 0; S < I.length; S++) if (I[S].from == null || !I[S].to || I[S].to < 0) return null;
    return { ranges: I, ifd: o, actualTileWidth: n === g && p % x || x, actualTileHeight: e === y && m % R || R };
  }
  async _fetchAuxiliaryMetaData(i) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: i?.signal });
      return je(e);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(i) {
    try {
      const { data: e } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: i?.signal }), n = ys.parse(e);
      return n?.recordSet ? Le.fromJSON(n.recordSet) : null;
    } catch {
      return null;
    }
  }
};
function gs(i) {
  const e = Ii(i), { width: n, height: t, tileWidth: s, tileHeight: a, planes: r, pixelType: l, compression: o, firstPyramidLevel: c, maximumPyramidLevel: u, pyramidBlockWidth: d, pyramidBlockHeight: h, pyramidResolutions: f, tileBoundary: y, affine: g, metadata: p } = e, m = e.extent.spatialReference?.wkt || e.extent.spatialReference?.wkid;
  let x = Se(m), R = !!e.isPseudoGeographic;
  x == null && (R = !0, x = new A({ wkid: 3857 }));
  const I = new z({ ...e.extent, spatialReference: x }), S = new E(I ? { x: I.xmin, y: I.ymax, spatialReference: x } : { x: 0, y: 0 }), T = new Re({ blockWidth: s, blockHeight: a, pyramidBlockWidth: d, pyramidBlockHeight: h, compression: o, origin: S, firstPyramidLevel: c, maximumPyramidLevel: u, pyramidResolutions: f, blockBoundary: y }), v = new E({ x: (I.xmax - I.xmin) / n, y: (I.ymax - I.ymin) / t, spatialReference: x }), C = p ? { BandProperties: p.bandProperties, DataType: p.dataType } : {};
  let _ = null;
  const P = de(i[0], "PHOTOMETRICINTERPRETATION"), F = Je(i[0], "COLORMAP");
  if (P <= 3 && F?.length > 3 && F.length % 3 == 0) {
    _ = [];
    const O = F.length / 3;
    for (let $ = 0; $ < O; $++) _.push([$, F[$] >>> 8, F[$ + O] >>> 8, F[$ + 2 * O] >>> 8]);
  }
  const M = new ve({ width: n, height: t, bandCount: r, pixelType: l, pixelSize: v, storageInfo: T, spatialReference: x, isPseudoSpatialReference: R, keyProperties: C, extent: I, colormap: _, statistics: p ? p.statistics : null });
  if (g?.length && (M.nativeExtent = new z({ xmin: -0.5, ymin: 0.5 - t, xmax: n - 0.5, ymax: 0.5, spatialReference: x }), M.transform = new We({ polynomialOrder: 1, forwardCoefficients: [g[2] + g[0] / 2, g[5] - g[3] / 2, g[0], g[3], -g[1], -g[4]] }), M.extent = M.transform.forwardTransform(M.nativeExtent), M.pixelSize = new E({ x: (I.xmax - I.xmin) / n, y: (I.ymax - I.ymin) / t, spatialReference: x }), T.origin.x = -0.5, T.origin.y = 0.5), f) {
    const { x: O, y: $ } = M.pixelSize;
    f.forEach((N) => {
      N.x *= O, N.y *= $;
    });
  }
  return { imageInfo: e, rasterInfo: M };
}
function xs(i, e) {
  if (e.statistics = i.statistics ?? e.statistics, e.histograms = i.histograms, i.histograms && e.statistics == null && (e.statistics = ze(i.histograms)), i.transform && e.transform == null) {
    e.transform = i.transform, e.nativeExtent = e.extent;
    const n = e.transform.forwardTransform(e.nativeExtent);
    e.pixelSize = new E({ x: (n.xmax - n.xmin) / e.width, y: (n.ymax - n.ymin) / e.height, spatialReference: e.spatialReference }), e.extent = n;
  }
  e.isPseudoSpatialReference && i.spatialReference && (e.spatialReference = i.spatialReference, e.extent.spatialReference = e.nativeExtent.spatialReference = e.storageInfo.origin.spatialReference = e.spatialReference);
}
w([b()], se.prototype, "_files", void 0), w([b()], se.prototype, "_headerInfo", void 0), w([b()], se.prototype, "_bufferSize", void 0), w([b({ type: String, json: { write: !0 } })], se.prototype, "datasetFormat", void 0), se = w([X("esri.layers.support.rasterDatasets.TIFFRaster")], se);
const ws = se, L = /* @__PURE__ */ new Map();
L.set("MRF", { desc: "Meta Raster Format", constructor: ps }), L.set("TIFF", { desc: "GeoTIFF", constructor: ws }), L.set("RasterTileServer", { desc: "Raster Tile Server", constructor: fs }), L.set("JPG", { desc: "JPG Raster Format", constructor: xe }), L.set("PNG", { desc: "PNG Raster Format", constructor: xe }), L.set("GIF", { desc: "GIF Raster Format", constructor: xe }), L.set("BMP", { desc: "BMP Raster Format", constructor: xe }), L.set("CovJSON", { desc: "COVJSON Raster Format", constructor: as }), L.set("MEMORY", { desc: "In Memory Raster Format", constructor: Ge });
class Pe {
  static get supportedFormats() {
    const e = /* @__PURE__ */ new Set();
    return L.forEach((n, t) => e.add(t)), e;
  }
  static async open(e) {
    const { url: n, ioConfig: t, source: s, sourceJSON: a } = e;
    let r = e.datasetFormat ?? t?.datasetFormat;
    r == null && (n.includes(".") ? r = n.slice(n.lastIndexOf(".") + 1).toUpperCase() : s?.type?.toLowerCase() === "coverage" ? r = "CovJSON" : s?.extent && s.pixelblocks && (r = "MEMORY")), r === "OVR" || r === "TIF" ? r = "TIFF" : r === "JPG" || r === "JPEG" || r === "JFIF" ? r = "JPG" : r === "COVJSON" && (r = "CovJSON"), n.toLowerCase().includes("/imageserver") && !n.toLowerCase().includes("/wcsserver") && (r = "RasterTileServer");
    const l = { url: n, source: s, sourceJSON: a, datasetFormat: r, ioConfig: t ?? { bandIds: null, sampling: null } };
    if (Object.keys(l).forEach((d) => {
      l[d] == null && delete l[d];
    }), r) {
      if (!this.supportedFormats.has(r)) throw new k("rasterfactory:open", "not a supported format " + r);
      if (r === "CRF") throw new k("rasterfactory:open", `cannot open raster: ${n}`);
      const d = new (L.get(r)).constructor(l);
      return await d.open({ signal: e.signal }), d;
    }
    const o = Array.from(L.keys()).filter((d) => d !== "CovJSON" && d !== "Memory");
    let c = 0;
    const u = () => {
      if (r = o[c++], !r || r === "CRF") return null;
      const d = new (L.get(r)).constructor(l);
      return d.open({ signal: e.signal }).then(() => d).catch(() => u());
    };
    return u();
  }
  static register(e, n, t) {
    L.has(e.toUpperCase()) || L.set(e.toUpperCase(), { desc: n, constructor: t });
  }
}
let D = class extends bi(Ri(vi(Si(Ti(_i(es(Fi(Ci(ki(Oi(Pi(Ei)))))))))))) {
  constructor(...i) {
    super(...i), this._primaryRasters = [], this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null, this.source = void 0, this._debouncedSaveOperations = Mi(async (e, n, t) => {
      const { save: s, saveAs: a } = await import("./imageryUtils-1ExW_dRO.js");
      switch (e) {
        case me.SAVE:
          return s(this, n);
        case me.SAVE_AS:
          return a(this, t, n);
      }
    });
  }
  normalizeCtorArgs(i, e) {
    return typeof i == "string" ? { url: i, ...e } : i;
  }
  load(i) {
    const e = i != null ? i.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, i).catch($i).then(() => this._openRaster(e))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    const i = [new ce({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), new ce({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Pixel Value", domain: null, editable: !1, length: 50, type: "string" })], e = this.raster?.rasterInfo ?? this.serviceRasterInfo, n = e?.attributeTable, t = n != null ? n.fields : null, s = "Raster.";
    if (t) {
      const l = t.filter((o) => o.type !== "oid" && o.name.toLowerCase() !== "value").map((o) => {
        const c = o.clone();
        return c.name = s + o.name, c;
      });
      i.push(...l);
    }
    const a = e?.dataType, r = e?.multidimensionalInfo;
    if ((a === "vector-magdir" || a === "vector-uv") && r != null) {
      const l = r.variables[0].unit?.trim(), o = "Magnitude" + (l ? ` (${l})` : "");
      i.push(new ce({ name: "Raster.Magnitude", alias: o, domain: null, editable: !1, type: "double" })), i.push(new ce({ name: "Raster.Direction", alias: "Direction (°)", domain: null, editable: !1, type: "double" }));
    }
    return i;
  }
  createPopupTemplate(i) {
    const { rasterFields: e } = this, n = i?.visibleFieldNames ?? new Set(e.map(({ name: a }) => a).filter((a) => a.toLowerCase() !== "raster.servicepixelvalue.raw")), t = Ni({ fields: e, title: this.title }, { ...i, visibleFieldNames: n }), { rasterInfo: s } = this.raster;
    return t?.fieldInfos && s?.pixelType.startsWith("f") && t.fieldInfos.forEach(({ format: a, fieldName: r }) => {
      a && r && /^raster\.(item|service)pixelvalue/i.test(r) && (a.places = 2);
    }), t;
  }
  async generateRasterInfo(i, e) {
    if (i = Ee(Me, i), await this.load(), !i || i.functionName?.toLowerCase() === "none") return this.serviceRasterInfo;
    try {
      const { rasterInfo: n } = await this._openFunctionRaster(i, e);
      return n;
    } catch (n) {
      throw n instanceof k ? n : new k("imagery-tile-layer", "the given raster function is not supported");
    }
  }
  async save(i) {
    return this._debouncedSaveOperations(me.SAVE, i);
  }
  async saveAs(i, e) {
    return this._debouncedSaveOperations(me.SAVE_AS, e, i);
  }
  write(i, e) {
    const n = this._primaryRasters[0] ?? this.raster;
    if (this.loaded ? n.datasetFormat === "RasterTileServer" && (n.tileType === "Raster" || n.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return super.write(i, e);
    if (e?.messages) {
      const t = `${e.origin}/${e.layerContainerType || "operational-layers"}`;
      e.messages.push(new k("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${t}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(i) {
    let e = !1;
    if (this.raster) await this._openFromRaster(this.raster, i), e = this.raster.datasetFormat === "Function", !e && this.rasterFunction && (this._primaryRasters = [this.raster], await this._initializeWithFunctionRaster(this.rasterFunction));
    else {
      const { url: t, rasterFunction: s, source: a } = this;
      if (!t && !a) throw new k("imagery-tile-layer:open", "missing url or source parameter");
      a ? await this._openFromSource(a, i) : s ? await this._openFromUrlWithRasterFunction(t, s, i) : await this._openFromUrl(t, i);
    }
    const n = this.raster.rasterInfo;
    if (!n) throw new k("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this._set("serviceRasterInfo", e ? n : this._primaryRasters[0].rasterInfo), this._set("spatialReference", n.spatialReference), this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const t = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(t, { origin: "service" });
    } else this.read({ tileInfo: this.serviceRasterInfo?.storageInfo.tileInfo.toJSON() }, { origin: "service" });
    this.title || (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = !1), this._configDefaultSettings(), this.addHandles(Di(() => this.customParameters, (t) => {
      this.raster && (this.raster.ioConfig.customFetchParameters = t);
    }));
  }
  async _openFromRaster(i, e) {
    i.rasterInfo || await i.open({ signal: e }), this._primaryRasters = i.datasetFormat === "Function" ? i.primaryRasters.rasters : [i], this.url || (this.url = this._primaryRasters[0].url);
  }
  async _openFromUrlWithRasterFunction(i, e, n) {
    const t = [i];
    e && Ui(e.toJSON(), t);
    const s = await Promise.all(t.map((r) => Pe.open({ url: r, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: n }))), a = s.findIndex((r) => r == null);
    if (a > -1) throw new k("imagery-tile-layer:open", `cannot open raster: ${t[a]}`);
    return this._primaryRasters = s, this._initializeWithFunctionRaster(e);
  }
  async _openFromUrl(i, e) {
    const n = await Pe.open({ url: i, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (n == null) throw new k("imagery-tile-layer:open", `cannot open raster: ${i}`);
    this._primaryRasters = [n], this.raster = n;
  }
  async _openFromSource(i, e) {
    const n = "the tiled imagery data source is not supported", t = i.type?.toLowerCase() === "coverage" ? "CovJSON" : i.extent && i.pixelBlock ? "MEMORY" : null;
    if (!t) throw new k("imagery-tile-layer:open", n);
    t === "MEMORY" && (i = { ...i, pixelBlock: void 0, pixelBlocks: [i.pixelBlock] });
    const s = await Pe.open({ url: "", source: i, datasetFormat: t, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (s == null) throw new k("imagery-tile-layer:open", n);
    this._primaryRasters = [s], this.rasterFunction ? await this._initializeWithFunctionRaster(this.rasterFunction) : this.raster = s;
  }
  async _openFunctionRaster(i, e) {
    const n = { raster: this._primaryRasters[0] };
    this._primaryRasters.length > 1 && this._primaryRasters.forEach((a) => n[a.url] = a);
    const t = dt(i.functionDefinition?.toJSON() ?? i.toJSON(), n), s = new pt({ rasterFunction: t });
    return await s.open(e), s;
  }
  async _initializeWithFunctionRaster(i, e) {
    try {
      this.raster = await this._openFunctionRaster(i, e);
    } catch (n) {
      n instanceof k && re.getLogger(this).error("imagery-tile-layer:open", n.message), re.getLogger(this).warn("imagery-tile-layer:open", "the raster function cannot be applied and is removed"), this._set("rasterFunction", null), this.raster = this._primaryRasters[0];
    }
  }
};
w([b({ clonable: !1 })], D.prototype, "_primaryRasters", void 0), w([b(Bi)], D.prototype, "legendEnabled", void 0), w([b({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], D.prototype, "isReference", void 0), w([b({ type: ["show", "hide"] })], D.prototype, "listMode", void 0), w([b({ json: { read: !0, write: !0 } })], D.prototype, "blendMode", void 0), w([b()], D.prototype, "sourceJSON", void 0), w([b({ readOnly: !0, json: { origins: { service: { read: { source: "currentVersion" } } } } })], D.prototype, "version", void 0), w([b({ readOnly: !0, json: { read: !1 } })], D.prototype, "type", void 0), w([b({ type: ["ArcGISTiledImageServiceLayer"] })], D.prototype, "operationalLayerType", void 0), w([b({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (i, e) => !e.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(i, e, n) {
  e[n] = !i;
} } } })], D.prototype, "popupEnabled", void 0), w([b({ type: Ji, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], D.prototype, "popupTemplate", void 0), w([b({ readOnly: !0 })], D.prototype, "defaultPopupTemplate", null), w([b({ readOnly: !0, type: [ce] })], D.prototype, "fields", void 0), w([b({ readOnly: !0, type: [ce] })], D.prototype, "rasterFields", null), w([b({ constructOnly: !0 })], D.prototype, "source", void 0), D = w([X("esri.layers.ImageryTileLayer")], D);
const _s = D;
export {
  _s as default
};
//# sourceMappingURL=ImageryTileLayer-BIkJCRLv.js.map
