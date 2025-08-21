import { J as w, K as S, L as Dt, P as ne, M as Lt, N as K, R as _, T as ee, U as ve, V as l, X as H, Y as V, _ as Bt, a0 as kt, a1 as A, a2 as v, a3 as U, a4 as lt, a5 as Si, a6 as ze, a7 as Y, a8 as ge, a9 as Be, aa as ke, ab as Oe, ac as Ke, ad as yt, ae as ut, e as B, af as Nt, ag as Vi, ah as _i, ai as zi, aj as $i, ak as Mi, al as Ti, am as Pi, an as J, ao as bt, ap as ct, aq as Ze, ar as vt, as as gt, at as xt, au as D, av as Ut, aw as Ht, ax as Ye, ay as Ri, az as oe, aA as wt, aB as Qe, aC as Gt, aD as Ai, aE as _e, aF as St, aG as Fi, aH as qt, aI as qe, aJ as Ci, aK as Ii, F as Oi, H as Ei, aL as Wt, aM as jt, aN as Xt, aO as Kt, aP as Zt, aQ as Yt, aR as pt, aS as Qt, aT as Di, aU as Vt, aV as Je, aW as Jt, aX as et, aY as Li, aZ as Bi, D as ki, E as Ni, q as Ui, a_ as Hi, a$ as Gi, b0 as qi, b1 as Wi, b2 as ji, b3 as Xi, b4 as Ki, b5 as Zi, b6 as ie, b7 as ce, b8 as se, p as we, b9 as Yi, b as Qi, d as Ji } from "./UpdateTracking2D-DZd6CIsL.js";
import { O as c, pn as F, kY as es, s as Pe, fE as _t, D as ei, aO as ts, lE as dt, jv as zt, d8 as be, bq as is, ov as ss, pf as as, bm as rs, mX as os, f3 as ns } from "./main-DHXLMse1.js";
import { a as N, J as $t, K as ls, c as Mt, U as us, p as cs } from "./definitions-Doe0g1C2.js";
import { E as le, S as ue, f as tt, p as M, y as E, d as C, M as L, e as ps, g as G, w as Ne, L as Me } from "./Container-JHAmVaDa.js";
import { C as X, F as Tt, L as xe, D as it, B as ti, E as ds, U as Ee, _ as st, G as pe, P as Pt, O as fs, I as We } from "./enums-DDkmfb-t.js";
import { c as Rt, s as hs, i as ii, E as si } from "./Program-BYtVT21d.js";
import { o as ms } from "./ProgramTemplate-DogOLZ0L.js";
import { t as ys } from "./VertexElementDescriptor-BAy1DPb3.js";
import { a as ai } from "./LabelMetric-BZ1wS013.js";
import { e as De, c as ri } from "./Texture-D-YIHT8g.js";
import { o as bs } from "./constants-DVpDF9P6.js";
import { c as At } from "./WGLContainer-Cfx415Pj.js";
let vs = class {
  constructor() {
    this.drawPhase = le.MAP | le.HITTEST | le.HIGHLIGHT | le.DEBUG;
  }
  startup() {
  }
  shutdown(e) {
  }
}, k = class extends vs {
  constructor() {
    super(...arguments), this.overrideStencilRef = null, this.symbologyPlane = ue.FILL, this.postProcessingEnabled = !1;
  }
  postProcess(e, t) {
  }
}, oi = class extends Dt {
};
c([w(0, v)], oi.prototype, "pos", void 0);
let gs = class extends ze {
}, ni = class extends ne {
};
c([S(l)], ni.prototype, "dotSize", void 0);
let Re = class extends ne {
};
c([S(U)], Re.prototype, "locations", void 0), c([S(l)], Re.prototype, "pixelRatio", void 0), c([S(l)], Re.prototype, "tileZoomFactor", void 0);
const xs = 1e-6;
class fe extends Lt {
  vertex(e) {
    const t = new K(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new _(e.pos.xy.divide(N), 1)), i = ee(this.draw.locations, t.xy), a = ve(this.instance.dotSize.divide(2), new l(1));
    let r = new l(0);
    r = r.add(H(i.a, new l(xs)).multiply(2));
    let o = a.add(this.instance.dotSize);
    const n = this.view.displayViewScreenMat3.multiply(new _(e.pos.add(0.5), 1)), u = new V(n.xy, r, 1), p = this.instance.dotSize.divide(o), d = new l(-1).divide(a.divide(o));
    return o = o.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), { glPosition: u, glPointSize: o, color: i, ratio: p, invEdgeRatio: d };
  }
  fragment(e) {
    const t = Bt(e.glPointCoord.subtract(0.5)).multiply(2), i = kt(new l(0), new l(1), e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)), a = new lt();
    return a.glFragColor = e.color.multiply(i), a;
  }
}
c([S(ni)], fe.prototype, "instance", void 0), c([S(Re)], fe.prototype, "draw", void 0), c([S(Si)], fe.prototype, "view", void 0), c([F(0, A(oi))], fe.prototype, "vertex", null), c([F(0, A(gs))], fe.prototype, "fragment", null);
class li extends Be {
}
c([w(3, l)], li.prototype, "inverseArea", void 0);
let Ae = class extends ne {
};
c([S(Y.ofType(V, 2))], Ae.prototype, "isActive", void 0), c([S(Y.ofType(V, 8))], Ae.prototype, "colors", void 0), c([S(l)], Ae.prototype, "dotValue", void 0);
let he = class extends ne {
};
c([S(U)], he.prototype, "dotTexture0", void 0), c([S(U)], he.prototype, "dotTexture1", void 0), c([S(l)], he.prototype, "tileZoomFactor", void 0), c([S(l)], he.prototype, "pixelRatio", void 0), c([S(l)], he.prototype, "tileDotsOverArea", void 0);
let me = class extends ke {
  _dotThreshold(e, t, i) {
    return e.divide(t).divide(i);
  }
  vertex(e) {
    const t = new K(2 / N, 0, 0, 0, -2 / N, 0, -1, 1, 1).multiply(new _(e.pos, 1)), i = this.clip(e.id), a = new V(t.xy, i, 1), r = this.storage.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea), o = this.storage.getDataDrivenData0(e.id).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea), n = this.draw.tileZoomFactor.multiply(N).divide(this.draw.pixelRatio), u = this._dotThreshold(r, this.instance.dotValue, this.draw.tileDotsOverArea), p = this._dotThreshold(o, this.instance.dotValue, this.draw.tileDotsOverArea), d = e.pos.add(0.5).divide(n);
    return { glPosition: a, color: new V(0, 0, 0, 0), textureCoords: d, thresholds0: u, thresholds1: p };
  }
  fragment(e) {
    const t = new lt(), i = ee(this.draw.dotTexture0, e.textureCoords), a = ee(this.draw.dotTexture1, e.textureCoords), r = e.thresholds0.subtract(i), o = e.thresholds1.subtract(a);
    let n;
    const u = Oe.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), p = Oe.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const d = H(new l(0), r), f = H(new l(0), o), h = Ke(d, r).add(Ke(f, o)), m = H(h, new l(0)), b = new l(1).subtract(m), y = h.add(m), g = r.multiply(d).divide(y), x = o.multiply(f).divide(y), T = u.multiply(g).add(p.multiply(x));
      n = b.multiply(T);
    } else {
      const d = ve(yt(r), yt(o)), f = H(d, new l(0)), h = new l(1).subtract(f), m = H(d, r), b = H(d, o), y = u.multiply(m).add(p.multiply(b));
      n = h.multiply(y);
    }
    return t.glFragColor = n, t;
  }
  hittest(e) {
    return ut(this.hittestRequest);
  }
};
c([ge], me.prototype, "blending", void 0), c([S(Ae)], me.prototype, "instance", void 0), c([S(he)], me.prototype, "draw", void 0), c([F(0, A(li))], me.prototype, "vertex", null), c([F(0, A(ze))], me.prototype, "fragment", null);
const at = { [X.BYTE]: 1, [X.UNSIGNED_BYTE]: 1, [X.SHORT]: 2, [X.UNSIGNED_SHORT]: 2, [X.HALF_FLOAT]: 2, [X.INT]: 4, [X.UNSIGNED_INT]: 4, [X.FLOAT]: 4 };
let ws = class {
  constructor(e, t) {
    this._boundPart = null;
    const i = [];
    for (const r of t.vertex) {
      const o = Rt.createVertex(e, Tt.STATIC_DRAW, r);
      i.push(o);
    }
    const a = [];
    for (const r of t.index || []) {
      const o = Rt.createIndex(e, Tt.STATIC_DRAW, r);
      a.push(o);
    }
    this.groups = [];
    for (const r of t.groups) {
      let o;
      if (r.index != null) {
        if (!t.index) throw new Error("No index data.");
        const { BYTES_PER_ELEMENT: h } = t.index[r.index];
        h === 2 ? o = X.UNSIGNED_SHORT : h === 4 && (o = X.UNSIGNED_INT);
      }
      const n = r.index != null ? a[r.index] : null, u = /* @__PURE__ */ new Map(), p = {}, d = {};
      for (const h of r.attributes) {
        const { name: m, count: b, type: y, offset: g, normalized: x, divisor: T, stride: q, vertex: Z, location: P } = h, $ = `vertex-buffer-${Z}`;
        let R = p[$];
        R || (R = p[$] = []);
        const I = new ys(m, b, y, g, q, x, T);
        R.push(I), u.set(m, P), d[$] = i[Z];
      }
      const f = new ms(e, u, p, d, n);
      this.groups.push({ ...r, vertexArray: f, locations: u, layout: p, indexing: o });
    }
    this.parts = t.parts;
  }
  bind(e, t) {
    this._boundPart = t;
    const { group: i } = this.parts[this._boundPart], { vertexArray: a } = this.groups[i];
    e.bindVAO(a);
  }
  draw(e) {
    if (this._boundPart == null) throw new Error("Mesh.bind() has not been called.");
    const { start: t, count: i } = this.parts[this._boundPart], { group: a } = this.parts[this._boundPart], { indexing: r, primitive: o } = this.groups[a];
    r ? e.drawElements(o, i, r, t * at[r]) : e.drawArrays(o, t, i);
  }
  unbind(e) {
    this._boundPart = null, e.bindVAO(null);
  }
  destroy() {
    for (const { vertexArray: e } of this.groups) e.dispose();
  }
}, Ss = class ui extends ws {
  static create(e, t) {
    const i = [];
    let { stride: a, hash: r } = t.layout;
    if (a == null) {
      a = 0;
      for (const { count: h, type: m, offset: b } of t.layout.attributes) {
        if (b != null) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        a += h * at[m];
      }
    }
    let o = 0, n = 0;
    for (const { count: h, name: m, offset: b, type: y, normalized: g } of t.layout.attributes) {
      b != null && (n = b);
      const x = { name: m, location: o, vertex: 0, count: h, type: y, offset: n, stride: a, divisor: 0, normalized: g != null && g };
      i.push(x), o++, n += h * at[y];
    }
    const u = { attributes: i, primitive: t.primitive };
    t.index != null && (u.index = 0);
    let { count: p } = t;
    if (p == null && (p = t.index ? t.index.length : t.vertex.byteLength / a, Math.floor(p) !== p)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${a}.`);
    const d = { start: 0, count: p, group: 0, primitive: t.primitive }, f = { vertex: [t.vertex], parts: [d], groups: [u] };
    return t.index != null && (f.index = [t.index]), r == null && (r = ai(i)), new ui(e, f, { hash: r, attributes: i, stride: a });
  }
  constructor(e, t, i) {
    super(e, t), this.layout = i;
  }
  bind(e, t = 0) {
    super.bind(e, t);
  }
}, Vs = class {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(e) {
    if (this._dotFBO == null) {
      const t = N, i = N, a = new De(t, i);
      a.samplingMode = xe.NEAREST, a.wrapMode = it.CLAMP_TO_EDGE;
      const r = new hs(e, new ii(ti.DEPTH_STENCIL, t, i));
      this._dotFBO = new si(e, a, r);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(e) {
    if (this._dotMesh == null) {
      const t = N, i = t * t, a = 2, r = new Int16Array(i * a);
      for (let u = 0; u < t; u++) for (let p = 0; p < t; p++) r[a * (p + u * t)] = p, r[a * (p + u * t) + 1] = u;
      const o = [{ count: 2, type: X.UNSIGNED_SHORT, name: "a_position", offset: 0 }], n = { hash: ai(o), attributes: o, stride: 4 };
      this._dotMesh = Ss.create(e, { primitive: ds.POINTS, vertex: r, count: i, layout: n });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e, t, i) {
    if (this._dotTextureSize === t && this._seed === i || (this._disposeTextures(), this._dotTextureSize = t, this._seed = i), this._dotTextures === null) {
      const a = new es(i);
      this._dotTextures = [this._allocDotDensityTexture(e, t, a), this._allocDotDensityTexture(e, t, a)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let e = 0; e < this._dotTextures.length; e++) this._dotTextures[e].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(e, t, i) {
    const a = new Float32Array(t * t * 4);
    for (let o = 0; o < a.length; o++) a[o] = i.getFloat();
    const r = new De();
    return r.dataType = Ee.FLOAT, r.samplingMode = xe.NEAREST, r.width = t, r.height = t, new ri(e, r, a);
  }
}, _s = class extends k {
  constructor() {
    super(...arguments), this.type = B.DotDensity, this.shaders = { polygon: new me(), point: new fe(), fill: new Nt() }, this._resources = /* @__PURE__ */ new Map();
  }
  render(e, t) {
    tt(e) || M(e) ? this._renderPolygons(e, t) : this._renderDotDensity(e, t);
  }
  _renderPolygons(e, t) {
    const { painter: i } = e;
    i.setShader({ shader: this.shaders.fill, uniforms: { ...E(e, t.target), visualVariableColor: null, visualVariableOpacity: null }, defines: { ...C(e) }, optionalAttributes: { zoomRange: !1 }, useComputeBuffer: M(e) }), i.setPipelineState(L(e)), i.submitDraw(e, t);
  }
  _renderDotDensity(e, t) {
    const { context: i, painter: a, requiredLevel: r } = e, o = t.instance.getInput().uniforms, n = this._getOrCreateResourcesRecord(i), u = n.getDotDensityTextures(i, N, o.seed), p = 1 / 2 ** (r - t.target.key.level), d = N, f = d * window.devicePixelRatio * d * window.devicePixelRatio, h = 1 / p * (1 / p), m = o.dotScale ? e.state.scale / o.dotScale : 1, b = o.dotValue * m * h;
    a.setShader({ shader: this.shaders.polygon, uniforms: { ...E(e, t.target), instance: { isActive: o.isActive, colors: o.colors, dotValue: Math.max(1, b) }, draw: { dotTexture0: { unit: $t, texture: u[0] }, dotTexture1: { unit: ls, texture: u[1] }, tileZoomFactor: p, pixelRatio: window.devicePixelRatio, tileDotsOverArea: f / (N * window.devicePixelRatio * N * window.devicePixelRatio) } }, defines: { ...C(e), blending: o.blending }, optionalAttributes: {}, useComputeBuffer: !1 }), a.setPipelineState(L(e));
    const y = i.getViewport();
    i.setViewport(0, 0, N, N);
    const g = i.getBoundFramebufferObject(), x = n.getFBO(i);
    i.bindFramebuffer(x), i.setClearColor(0, 0, 0, 0), a.setPipelineState({ color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 }), a.updatePipelineState(i), i.clear(st.COLOR_BUFFER_BIT), a.submitDraw(e, t), i.bindFramebuffer(g), i.setViewport(y.x, y.y, y.width, y.height);
    const T = n.getFBO(i).colorTexture;
    a.setShader({ shader: this.shaders.point, uniforms: { view: ps(e, t.target), instance: { dotSize: o.dotSize }, draw: { locations: { unit: $t, texture: T }, tileZoomFactor: 1, pixelRatio: window.devicePixelRatio } }, defines: { ...C(e) }, optionalAttributes: {}, useComputeBuffer: !1 }), a.setPipelineState({ color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 }), a.submitDrawMesh(i, n.getDotDensityMesh(i));
  }
  shutdown(e) {
    super.shutdown(e), this._resources.get(e)?.destroy(), this._resources.delete(e);
  }
  _getOrCreateResourcesRecord(e) {
    let t = this._resources.get(e);
    return t == null && (t = new Vs(), this._resources.set(e, t)), t;
  }
}, zs = class extends k {
  constructor() {
    super(...arguments), this.type = B.ComplexFill, this.shaders = { geometry: new Vi() };
  }
  render(e, t) {
    const { context: i, painter: a } = e, r = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, r.uniforms), ...E(e, t.target), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ne(t.target) }, defines: { ...C(e) }, optionalAttributes: r.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
};
function $e(s) {
  const e = 1 / s;
  return { antialiasing: e, blur: 0 + e };
}
let $s = class extends k {
  constructor() {
    super(...arguments), this.type = B.ComplexOutlineFill, this.shaders = { geometry: new _i() };
  }
  render(e, t) {
    const { context: i, painter: a, pixelRatio: r } = e, o = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, o.uniforms), ...E(e, t.target), antialiasingControls: $e(r), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ne(t.target) }, defines: { ...C(e) }, optionalAttributes: o.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
}, Ms = class extends k {
  constructor() {
    super(...arguments), this.type = B.Fill, this.shaders = { geometry: new Nt() };
  }
  render(e, t) {
    const { painter: i } = e, a = t.instance.getInput();
    i.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, a.uniforms), ...E(e, t.target) }, defines: C(e), optionalAttributes: a.optionalAttributes, useComputeBuffer: M(e) }), i.setPipelineState(L(e)), i.submitDraw(e, t);
  }
}, Ts = class extends k {
  constructor() {
    super(...arguments), this.type = B.OutlineFill, this.shaders = { geometry: new zi() };
  }
  render(e, t) {
    const { painter: i, pixelRatio: a } = e, r = t.instance.getInput();
    i.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, r.uniforms), ...E(e, t.target), antialiasingControls: $e(a) }, defines: { ...C(e) }, optionalAttributes: r.optionalAttributes, useComputeBuffer: M(e) }), i.setPipelineState(L(e)), i.submitDraw(e, t);
  }
}, Ps = class extends k {
  constructor() {
    super(...arguments), this.type = B.PatternFill, this.shaders = { geometry: new $i() };
  }
  render(e, t) {
    const { context: i, painter: a } = e, r = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, r.uniforms), ...E(e, t.target), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ne(t.target) }, defines: { ...C(e) }, optionalAttributes: r.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
}, Rs = class extends k {
  constructor() {
    super(...arguments), this.type = B.PatternOutlineFill, this.shaders = { geometry: new Mi() };
  }
  render(e, t) {
    const { context: i, painter: a, pixelRatio: r } = e, o = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, o.uniforms), ...E(e, t.target), antialiasingControls: $e(r), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ne(t.target) }, defines: { ...C(e) }, optionalAttributes: o.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
}, Ft = class {
  constructor(e, t, i, a) {
    this.dataType = e, this.samplingMode = t, this.pixelFormat = i, this.internalFormat = a;
  }
};
function As(s, e) {
  const { textureFloatLinear: t, colorBufferFloat: i } = s.capabilities, a = i?.textureFloat, r = i?.textureHalfFloat, o = i?.floatBlend, n = s.driverTest.floatBufferBlend.result;
  if (!a && !r) throw new Pe("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(o && n || r)) throw new Pe("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (n ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const u = a && o && n, p = r, d = t, f = !!i?.R32F, h = !!i?.R16F;
  if (u && d) return d || e.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new Ft(Ee.FLOAT, d ? xe.LINEAR : xe.NEAREST, f ? pe.RED : pe.RGBA, f ? Pt.R32F : pe.RGBA);
  if (p) return new Ft(Ee.HALF_FLOAT, xe.LINEAR, h ? pe.RED : pe.RGBA, h ? Pt.R16F : pe.RGBA);
  throw new Pe("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
const Fs = () => ei.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
let Cs = class {
  destroy() {
    this._accumulateFramebuffer = _t(this._accumulateFramebuffer), this._resolveGradientTexture = _t(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return this._accumulateFramebuffer != null && this._resolveGradientTexture != null;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e) {
    if (this._qualityProfile == null) {
      const t = As(e, Fs());
      this._qualityProfile = { ...t, defines: { usesHalfFloatPrecision: t.dataType !== Ee.FLOAT } };
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e, t, i) {
    if (this._accumulateFramebuffer == null) {
      const { dataType: a, samplingMode: r, pixelFormat: o, internalFormat: n } = this.loadQualityProfile(e), u = new De(t, i);
      u.pixelFormat = o, u.internalFormat = n, u.dataType = a, u.samplingMode = r, u.wrapMode = it.CLAMP_TO_EDGE;
      const p = new ii(ti.DEPTH_STENCIL, t, i);
      this._accumulateFramebuffer = new si(e, u, p);
    } else {
      const { width: a, height: r } = this._accumulateFramebuffer;
      a === t && r === i || this._accumulateFramebuffer.resize(t, i);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e, t, i) {
    if (this._resolveGradientTexture == null) {
      const a = new De();
      a.wrapMode = it.CLAMP_TO_EDGE, this._resolveGradientTexture = new ri(e, a);
    } else this._prevGradientHash !== t && (this._resolveGradientTexture.resize(i.length / 4, 1), this._resolveGradientTexture.setData(i), this._prevGradientHash = t);
    return this._resolveGradientTexture;
  }
};
function ci(s) {
  return s ? 0.25 : 1;
}
let pi = class extends Be {
};
c([w(5, v)], pi.prototype, "offset", void 0);
let Is = class extends ze {
}, rt = class extends ne {
};
c([S(l)], rt.prototype, "radius", void 0), c([S(l)], rt.prototype, "isFieldActive", void 0);
class Se extends ke {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = !1;
  }
  vertex(e) {
    const { radius: t, isFieldActive: i } = this.kernelControls, a = e.offset, r = i.multiply(this.storage.getVVData(e.id).x).add(new l(1).subtract(i)), o = this.view.displayViewScreenMat3.multiply(new _(e.pos, 1)).add(this.view.displayViewMat3.multiply(new _(a, 0)).multiply(t)), n = this.clip(e.id);
    return { glPosition: new V(o.xy, n, 1), offset: a, fieldValue: r, color: new V(0), ...this.maybeRunHittest(e, {}, null) };
  }
  fragment(e) {
    const { offset: t, fieldValue: i } = e, a = Bt(t), r = H(a, new l(1)), o = new l(1).subtract(a.multiply(a)), n = o.multiply(o), u = r.multiply(n).multiply(i).multiply(new l(ci(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new V(u), e);
  }
  hittest(e) {
    const { viewMat3: t, tileMat3: i } = this.view, a = t.multiply(i).multiply(new _(e.pos, 1));
    return Ti(a.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
}
c([ge], Se.prototype, "usesHalfFloatPrecision", void 0), c([S(rt)], Se.prototype, "kernelControls", void 0), c([F(0, A(pi))], Se.prototype, "vertex", null), c([F(0, A(Is))], Se.prototype, "fragment", null);
let di = class extends Dt {
};
c([w(0, v)], di.prototype, "pos", void 0);
let Os = class extends Pi {
}, Fe = class extends ne {
};
c([S(U)], Fe.prototype, "texture", void 0), c([S(v)], Fe.prototype, "minAndInvRange", void 0), c([S(l)], Fe.prototype, "normalization", void 0);
let fi = class extends ne {
};
c([S(U)], fi.prototype, "texture", void 0);
let ye = class extends Lt {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = !1;
  }
  vertex(e) {
    return { glPosition: new V(e.pos.multiply(2).subtract(1), 1, 1), uv: e.pos };
  }
  fragment(e) {
    const { accumulatedDensity: t, gradient: i } = this;
    let a = ee(t.texture, e.uv).r.multiply(new l(ci(this.usesHalfFloatPrecision)));
    a = a.multiply(t.normalization), a = a.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);
    const r = ee(i.texture, new v(a, 0.5)), o = new lt();
    return o.glFragColor = new V(r.rgb.multiply(r.a), r.a), o;
  }
};
c([ge], ye.prototype, "usesHalfFloatPrecision", void 0), c([S(Fe)], ye.prototype, "accumulatedDensity", void 0), c([S(fi)], ye.prototype, "gradient", void 0), c([F(0, A(di))], ye.prototype, "vertex", null), c([F(0, A(Os))], ye.prototype, "fragment", null);
let Es = class extends k {
  constructor() {
    super(...arguments), this.type = B.Heatmap, this.shaders = { accumulate: new Se(), resolve: new ye() }, this.postProcessingEnabled = !0, this._isBound = !1, this._resources = /* @__PURE__ */ new Map(), this.overrideStencilRef = hi;
  }
  shutdown(e) {
    super.shutdown(e), this._resources.get(e)?.destroy(), this._resources.delete(e), this._prevFBO = null, this._unbind();
  }
  render(e, t) {
    const { context: i, painter: a, state: r } = e, o = t.instance.getInput(), { isFieldActive: n } = o.uniforms, u = this._getOrCreateResourcesRecord(i), p = u.loadQualityProfile(i);
    if (tt(e)) return;
    M(e) || this._bind(e, u, o), a.setShader({ shader: this.shaders.accumulate, uniforms: { ...E(e, t.target), kernelControls: { radius: Ct(o, r), isFieldActive: n ? 1 : 0 } }, defines: { ...C(e), ...p.defines }, optionalAttributes: {}, useComputeBuffer: M(e) });
    const d = M(e) ? Ls : mi;
    a.setPipelineState(d), a.submitDraw(e, t);
  }
  postProcess(e, t) {
    if (M(e) || tt(e)) return;
    const { context: i, painter: a } = e, r = this._resources.get(i);
    if (this._prevFBO == null || this._prevViewport == null || !r?.initialized) return;
    const { defines: o } = r.loadQualityProfile(i), { minDensity: n, maxDensity: u, radius: p } = t.getInput().uniforms, d = 8, f = 9, h = r.accumulateFramebuffer, m = r.resolveGradientTexture;
    a.setShader({ shader: this.shaders.resolve, uniforms: { accumulatedDensity: { texture: { unit: d, texture: h.colorTexture }, minAndInvRange: [n, 1 / (u - n)], normalization: 3 / (p * p * Math.PI) }, gradient: { texture: { unit: f, texture: m } } }, defines: o, optionalAttributes: {}, useComputeBuffer: !1 }), i.bindFramebuffer(this._prevFBO), i.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), i.bindTexture(h.colorTexture, d), i.bindTexture(m, f), a.setPipelineState(Bs), a.submitDrawQuad(i), this._unbind();
  }
  _getOrCreateResourcesRecord(e) {
    let t = this._resources.get(e);
    return t == null && (t = new Cs(), this._resources.set(e, t)), t;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = !1;
  }
  _bind(e, t, i) {
    if (this._isBound) return;
    const { context: a, state: r, pixelRatio: o } = e, n = a.getBoundFramebufferObject(), u = a.getViewport();
    this._prevFBO = n, this._prevViewport = u;
    const { gradient: p, gradientHash: d } = i.uniforms;
    t.ensureResolveGradientTexture(a, d, p);
    const { width: f, height: h } = u, m = Ds(Ct(i, r), o), b = f * m, y = h * m, g = t.ensureAccumulateFBO(a, b, y);
    a.blitFramebuffer(n, g, 0, 0, n.width, n.height, 0, 0, g.width, g.height, st.STENCIL_BUFFER_BIT, xe.NEAREST), a.bindFramebuffer(g), a.setViewport(0, 0, g.width, g.height), a.setColorMask(!0, !0, !0, !0), a.setClearColor(0, 0, 0, 0), a.clear(st.COLOR_BUFFER_BIT), this._isBound = !0;
  }
};
function Ds(s, e) {
  const t = e > 1.5 ? 0.25 : 0.5;
  return s < 1 / (2 * t) ? 1 : t;
}
function hi(s) {
  return s.key.level + 1;
}
const mi = { color: { write: [!0, !0, !0, !0], blendMode: "additive" }, depth: !1, stencil: { write: !1, test: { ref: hi, compare: fs.GEQUAL, mask: 255, op: { fail: We.KEEP, zFail: We.KEEP, zPass: We.REPLACE } } } }, Ls = { ...mi, stencil: !1 }, Bs = { color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 };
function Ct(s, e) {
  const { referenceScale: t, radius: i } = s.uniforms;
  return i * (t !== 0 ? t / e.scale : 1);
}
let ft = class extends ne {
  getVVRotationMat4(e) {
    return J(bt(e), Oe.identity(), () => {
      const t = this._getNormalizedAngle(e).multiply(vt), i = gt(t), a = xt(t);
      return new Oe(a, i, 0, 0, i.multiply(new l(-1)), a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(e) {
    return J(bt(e), K.identity(), () => {
      const t = this._getNormalizedAngle(e).multiply(vt), i = gt(t), a = xt(t);
      return new K(a, i, 0, i.multiply(new l(-1)), a, 0, 0, 0, 1);
    });
  }
  _getNormalizedAngle(e) {
    const t = ct(this.rotationType, new l(Ze.Arithmatic));
    return J(t, new l(90).subtract(e), e);
  }
};
c([S(l)], ft.prototype, "rotationType", void 0);
const ks = 360 / 254;
let W = class extends Be {
};
c([w(3, V)], W.prototype, "color", void 0), c([w(4, v)], W.prototype, "offset", void 0), c([w(5, v)], W.prototype, "textureUV", void 0), c([w(6, l)], W.prototype, "fontSize", void 0), c([w(7, l)], W.prototype, "referenceSize", void 0), c([w(8, l)], W.prototype, "haloFontSize", void 0), c([w(9, V)], W.prototype, "haloColor", void 0), c([w(10, v)], W.prototype, "zoomRange", void 0), c([w(11, l)], W.prototype, "clipAngle", void 0), c([w(12, V)], W.prototype, "referenceSymbol", void 0);
let ot = class extends Ut {
};
c([w(13, v)], ot.prototype, "offsetNextVertex1", void 0), c([w(14, v)], ot.prototype, "offsetNextVertex2", void 0);
let Ns = class extends ze {
}, O = class extends ke {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"] }, this.isHaloPass = !1, this.isBackgroundPass = !1, this.isLabel = !1;
  }
  clipLabel(e, t, i) {
    const a = t.multiply(ks), r = Ht(this.view.rotation.subtract(a)), o = Ye(new l(360).subtract(r), r);
    let n = new l(0);
    const u = Ri(this.view.currentZoom.multiply(Mt)).divide(Mt), p = e.x, d = e.y, f = new l(1).subtract(H(p, u)).multiply(2), h = H(new l(90), o).multiply(2), m = new l(2).multiply(new l(1).subtract(H(u, d)));
    return n = n.add(i.multiply(f)), n = n.add(i.multiply(h)), n = n.add(m), n;
  }
  vertex(e, t) {
    const i = oe(e.bitset, Oi), a = new l(1).subtract(i);
    let r = e.fontSize, o = r.divide(wt);
    const n = this.isHaloPass ? e.haloColor : this._getVertexColor(e), u = this.isLabel ? this.storage.getAnimationValue(e.id) : new l(1), p = this.isLabel ? n.multiply(u) : n, d = this.view.displayViewScreenMat3.multiply(new _(e.pos, 1));
    let f = e.offset, h = new l(1), m = K.identity(), b = new v(0);
    if (this.isLabel) {
      if (!e.referenceSymbol) throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const $ = e.referenceSymbol, R = $.xy, I = $.z, z = this._unpackDirection($.w), He = Qe(this, e.id, I).divide(2), Ge = z.multiply(He.add(us));
      b = R.add(Ge), f = f.add(b);
    } else
      h = Qe(this, e.id, e.referenceSize).divide(e.referenceSize), r = r.multiply(h), o = o.multiply(h), f = f.multiply(h), m = Gt(this, e.id), f = m.multiply(new _(f, 0)).xy;
    const y = oe(e.bitset, Ei), g = this._getViewRotationMatrix(y).multiply(new _(f, 0));
    let x = this.isLabel ? this.clipLabel(e.zoomRange, e.clipAngle, y) : this.clip(e.id, e.zoomRange);
    x = this.isBackgroundPass ? x.add(a.multiply(2)) : x.add(i.multiply(2));
    const T = this.isLabel ? Ai(_e(x, new l(1)), ct(u, new l(0))) : new St(!1), q = new V(d.xy.add(g.xy), x, 1), Z = e.textureUV.divide(this.mosaicInfo.size);
    let P = new l(0);
    return this.isHaloPass && (P = e.haloFontSize.divide(o).divide(Fi)), { glPosition: q, color: p, size: o, textureUV: Z, antialiasingWidth: new l(0.105 * wt).divide(r).divide(this.view.pixelRatio), haloDistanceOffset: P, ...this.maybeRunHittest(e, t, { vvSizeAdjustment: h, vvRotation: m, labelOffset: b, labelClipped: T }) };
  }
  _getViewRotationMatrix(e) {
    const t = this.view.displayViewMat3, i = this.view.displayMat3, a = new l(1).subtract(e);
    return t.multiply(e).add(i.multiply(a));
  }
  fragment(e) {
    const t = new l(0.25), i = new l(1).subtract(t), a = ee(this.mosaicInfo.texture, e.textureUV).a;
    let r = i.subtract(e.haloDistanceOffset);
    this.highlight && (r = r.divide(2));
    const o = e.antialiasingWidth, n = kt(r.subtract(o), r.add(o), a);
    return this.getFragmentOutput(e.color.multiply(n), e);
  }
  hittest(e, t, { vvSizeAdjustment: i, vvRotation: a, labelOffset: r, labelClipped: o }) {
    let n, u, p;
    this.isLabel ? (n = new _(e.offset.add(r), 0), u = new _(t.offsetNextVertex1.add(r), 0), p = new _(t.offsetNextVertex2.add(r), 0)) : (n = a.multiply(new _(e.offset.multiply(i), 0)), u = a.multiply(new _(t.offsetNextVertex1.multiply(i), 0)), p = a.multiply(new _(t.offsetNextVertex2.multiply(i), 0)));
    const { viewMat3: d, tileMat3: f } = this.view, h = d.multiply(f).multiply(new _(e.pos, 1)), m = h.add(f.multiply(n)).xy, b = h.add(f.multiply(u)).xy, y = h.add(f.multiply(p)).xy, g = qt(this.hittestRequest.position, m.xy, b.xy, y.xy);
    return this.isLabel ? J(o, ut(this.hittestRequest), g) : g;
  }
  _unpackDirection(e) {
    const t = new qe(e), i = Ci(t, new qe(2)), a = Ii(t, new qe(3));
    return new v(new l(i).subtract(1), new l(a).subtract(1));
  }
  _getVertexColor(e) {
    let t = e.color;
    if (this.visualVariableColor) {
      const i = this.storage.getColorValue(e.id);
      t = this.visualVariableColor.getColor(i, e.color, new St(!1));
    }
    if (this.visualVariableOpacity) {
      const i = this.storage.getOpacityValue(e.id), a = this.visualVariableOpacity.getOpacity(i);
      t = t.multiply(a);
    }
    return t;
  }
};
c([D(Wt)], O.prototype, "visualVariableColor", void 0), c([D(jt)], O.prototype, "visualVariableOpacity", void 0), c([D(ft)], O.prototype, "visualVariableRotation", void 0), c([D(Xt)], O.prototype, "visualVariableSizeMinMaxValue", void 0), c([D(Kt)], O.prototype, "visualVariableSizeScaleStops", void 0), c([D(Zt)], O.prototype, "visualVariableSizeStops", void 0), c([D(Yt)], O.prototype, "visualVariableSizeUnitValue", void 0), c([S(pt)], O.prototype, "mosaicInfo", void 0), c([ge], O.prototype, "isHaloPass", void 0), c([ge], O.prototype, "isBackgroundPass", void 0), c([ge], O.prototype, "isLabel", void 0), c([F(0, A(W)), F(1, A(ot))], O.prototype, "vertex", null), c([F(0, A(Ns))], O.prototype, "fragment", null);
let Us = class extends k {
  constructor() {
    super(...arguments), this.type = B.Label, this.shaders = { geometry: new O() }, this.drawPhase = le.LABEL | le.LABEL_ALPHA | le.HITTEST, this.symbologyPlane = ue.TEXT;
  }
  render(e, t) {
    const { context: i, painter: a } = e, r = C(e), o = { ...L(e) }, n = t.instance.getInput(), u = { shader: this.shaders.geometry, uniforms: { ...G(e, t.target, n.uniforms), ...E(e, t.target), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...r, isHaloPass: !1, isBackgroundPass: !0, isLabel: !0 }, optionalAttributes: n.optionalAttributes, useComputeBuffer: M(e) };
    a.setShader(u), a.setPipelineState(o), a.submitDraw(e, t), a.setShader({ ...u, defines: { ...r, isHaloPass: !0, isBackgroundPass: !1, isLabel: !0 } }), a.setPipelineState(o), a.submitDraw(e, t), a.setShader({ ...u, defines: { ...r, isHaloPass: !1, isBackgroundPass: !1, isLabel: !0 } }), a.setPipelineState(o), a.submitDraw(e, t);
  }
}, Hs = class extends k {
  constructor() {
    super(...arguments), this.type = B.Line, this.shaders = { geometry: new Qt() }, this.symbologyPlane = ue.LINE;
  }
  render(e, t) {
    const { painter: i, pixelRatio: a } = e, r = t.instance.getInput();
    i.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, r.uniforms), ...E(e, t.target), antialiasingControls: $e(a) }, defines: { ...C(e) }, optionalAttributes: r.optionalAttributes, useComputeBuffer: M(e) }), i.setPipelineState(L(e)), i.submitDraw(e, t);
  }
};
class Ce extends Di {
}
c([w(9, l)], Ce.prototype, "accumulatedDistance", void 0), c([w(10, v)], Ce.prototype, "segmentDirection", void 0), c([w(11, V)], Ce.prototype, "tlbr", void 0);
class nt extends Qt {
  _getLineWidthRatio(e, t) {
    const i = new l(bs), a = oe(e.bitset, ki);
    return a.multiply(ve(t, new l(0.25))).add(new l(1).subtract(a)).divide(i);
  }
  _getSDFAlpha(e) {
    const { halfWidth: t, normal: i, tlbr: a, patternSize: r, accumulatedDistance: o, lineWidthRatio: n } = e, u = r.x.multiply(new l(2)).multiply(n), p = Vt(o.divide(u)), d = new l(0.25).multiply(i.y).add(new l(0.5)), f = Je(a.xy, a.zw, new v(p, d)), h = Jt(ee(this.mosaicInfo.texture, f)).subtract(new l(0.5)).multiply(t), m = et(new l(0.5).subtract(h), new l(0), new l(1));
    return new V(m);
  }
  _getPatternColor(e) {
    const { halfWidth: t, normal: i, color: a, accumulatedDistance: r, patternSize: o, sampleAlphaOnly: n, tlbr: u } = e, p = o.y.multiply(new l(2).multiply(t).divide(o.x)), d = Vt(r.divide(p)), f = new l(0.5).multiply(i.y).add(new l(0.5)), h = Je(u.xy, u.zw, new v(f, d));
    let m = ee(this.mosaicInfo.texture, h);
    return this.visualVariableColor != null && (m = J(_e(n, new l(0.5)), new V(a.a), a)), m;
  }
  vertex(e, t) {
    const { segmentDirection: i, tlbr: a, bitset: r } = e, o = Li(this, e), n = e.accumulatedDistance.divide(this.view.displayZoomFactor).add(Ke(i, o.scaledOffset)), u = new v(a.z.subtract(a.x), a.w.subtract(a.y)), p = a.divide(this.mosaicInfo.size.xyxy), d = oe(r, Ni), f = oe(r, Ui), h = J(_e(d, new l(0.5)), this._getLineWidthRatio(e, o.scaledHalfWidth), new l(1));
    return { ...o, tlbr: p, patternSize: u, accumulatedDistance: n, isSDF: d, sampleAlphaOnly: f, lineWidthRatio: h, ...this.maybeRunHittest(e, t, o.halfWidth) };
  }
  fragment(e) {
    const { color: t, opacity: i, isSDF: a } = e, r = Bi(e, this.antialiasingControls.blur), o = J(_e(a, new l(0.5)), this._getSDFAlpha(e), this._getPatternColor(e)), n = t.multiply(i).multiply(r).multiply(o);
    return this.getFragmentOutput(n, e);
  }
}
c([S(pt)], nt.prototype, "mosaicInfo", void 0), c([F(0, A(Ce)), F(1, A(Hi))], nt.prototype, "vertex", null);
let Gs = class extends k {
  constructor() {
    super(...arguments), this.type = B.TexturedLine, this.shaders = { geometry: new nt() }, this.symbologyPlane = ue.LINE;
  }
  render(e, t) {
    const { context: i, painter: a, pixelRatio: r } = e, o = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, o.uniforms), ...E(e, t.target), antialiasingControls: $e(r), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...C(e) }, optionalAttributes: o.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
};
class re extends Be {
}
c([w(3, V)], re.prototype, "color", void 0), c([w(4, V)], re.prototype, "outlineColor", void 0), c([w(5, v)], re.prototype, "offset", void 0), c([w(6, v)], re.prototype, "textureUV", void 0), c([w(7, V)], re.prototype, "sizing", void 0), c([w(8, l)], re.prototype, "placementAngle", void 0), c([w(9, l)], re.prototype, "sizeRatio", void 0), c([w(10, v)], re.prototype, "zoomRange", void 0);
class Ve extends Ut {
}
c([w(12, v)], Ve.prototype, "offsetNextVertex1", void 0), c([w(13, v)], Ve.prototype, "offsetNextVertex2", void 0), c([w(14, v)], Ve.prototype, "textureUVNextVertex1", void 0), c([w(15, v)], Ve.prototype, "textureUVNextVertex2", void 0);
class qs extends ze {
}
function ae(s, e, t, i) {
  return e.multiply(s.x).add(t.multiply(s.y)).add(i.multiply(s.z));
}
function je(s) {
  return s.multiply(s).divide(128);
}
class j extends ke {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(e, t) {
    const i = je(e.sizing.x), a = je(e.sizing.y), r = je(e.sizing.z), o = e.placementAngle, n = oe(e.bitset, we.bitset.isSDF), u = oe(e.bitset, we.bitset.isMapAligned), p = oe(e.bitset, we.bitset.scaleSymbolsProportionally), d = Gi(e.bitset, we.bitset.colorLocked), f = qi(this, e.id), h = Wi(this, e.id, e.color, d).multiply(f), m = this.view.displayViewScreenMat3.multiply(new _(e.pos.xy, 1)), b = Qe(this, e.id, r).divide(r), y = i.multiply(b), g = e.offset.xy.multiply(b);
    let x = a.multiply(p.multiply(b.subtract(1)).add(1));
    x = Ye(x, ve(y.subtract(0.99), new l(0)));
    const T = ve(x, new l(1)), q = Ye(x, new l(1)), Z = K.fromRotation(o.multiply(ji)), P = Gt(this, e.id), $ = this._getViewRotationMatrix(u).multiply(P).multiply(Z).multiply(new _(g.xy, 0)), R = this.clip(e.id, e.zoomRange), I = new V(m.xy.add($.xy), R, 1), z = e.textureUV.divide(this.mosaicInfo.size), He = e.outlineColor.multiply(q), Ge = oe(e.bitset, we.bitset.overrideOutlineColor), mt = e.sizeRatio.multiply(y).multiply(0.5);
    return { glPosition: I, color: h, textureUV: z, outlineColor: He, outlineSize: T, distanceToPx: mt, isSDF: n, overrideOutlineColor: Ge, ...this.maybeRunHittest(e, t, { pos: e.pos, size: y, sizeCorrection: b, isMapAligned: u, vvRotationMat3: P, placementMat3: Z, outlineSize: T, distanceToPx: mt, isSDF: n }) };
  }
  fragment(e) {
    const t = this._getColor(e.textureUV, e);
    return this.getFragmentOutput(t, e);
  }
  hittest(e, t, i) {
    return J(Xi(i.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(e, t, i), this._hittestMarker(e, t, i));
  }
  _getViewRotationMatrix(e) {
    const t = this.view.displayViewMat3, i = this.view.displayMat3, a = new l(1).subtract(e);
    return t.multiply(e).add(i.multiply(a));
  }
  _getViewScreenMatrix(e) {
    const t = this.view.viewMat3.multiply(this.view.tileMat3), i = this.view.tileMat3, a = new l(1).subtract(e);
    return t.multiply(e).add(i.multiply(a));
  }
  _getColor(e, t) {
    return J(ct(t.isSDF, new l(1)), this._getSDFColor(e, t), this._getSpriteColor(e, t));
  }
  _getSpriteColor(e, t) {
    return ee(this.mosaicInfo.texture, e).multiply(t.color);
  }
  _getSDFColor(e, t) {
    const i = ee(this.mosaicInfo.texture, e), a = new l(0.5).subtract(Jt(i)).multiply(t.distanceToPx).multiply(Ki), r = et(new l(0.5).subtract(a), new l(0), new l(1)), o = t.color.multiply(r);
    let n = t.outlineSize;
    this.highlight && (n = ve(n, t.overrideOutlineColor.multiply(4)));
    const u = n.multiply(0.5), p = Ht(a).subtract(u), d = et(new l(0.5).subtract(p), new l(0), new l(1)), f = Je(t.outlineColor, t.color, t.overrideOutlineColor).multiply(d);
    return new l(1).subtract(f.a).multiply(o).add(f);
  }
  _hittestSmallMarker(e, t, i) {
    const { position: a, distance: r, smallSymbolDistance: o } = this.hittestRequest, n = r.subtract(o), { viewMat3: u, tileMat3: p } = this.view, d = u.multiply(p).multiply(new _(i.pos, 1)).xy, f = i.size.multiply(0.5);
    return Zi(d, a).subtract(f).add(n);
  }
  _hittestMarker(e, t, i) {
    const { pos: a, sizeCorrection: r, isMapAligned: o } = i, n = new _(e.offset.multiply(r), 0), u = new _(t.offsetNextVertex1.multiply(r), 0), p = new _(t.offsetNextVertex2.multiply(r), 0), { viewMat3: d, tileMat3: f } = this.view, h = d.multiply(f).multiply(new _(a, 1)), m = this._getViewScreenMatrix(o).multiply(i.vvRotationMat3).multiply(i.placementMat3), b = h.add(m.multiply(n)).xy, y = h.add(m.multiply(u)).xy, g = h.add(m.multiply(p)).xy, x = this.hittestRequest.position, T = this.hittestRequest.distance, q = qt(x, b, y, g);
    return J(_e(q, T), q, this._hittestSamples(b, y, g, e, t, i));
  }
  _hittestSamples(e, t, i, a, r, o) {
    const { outlineSize: n, isSDF: u, distanceToPx: p } = o, d = this.hittestRequest.position, f = this.hittestRequest.distance, h = ie(d.add(new v(ce(f), ce(f))), e, t, i), m = ie(d.add(new v(0, ce(f))), e, t, i), b = ie(d.add(new v(f, ce(f))), e, t, i), y = ie(d.add(new v(ce(f), 0)), e, t, i), g = ie(d, e, t, i), x = ie(d.add(new v(f, 0)), e, t, i), T = ie(d.add(new v(ce(f), f)), e, t, i), q = ie(d.add(new v(0, f)), e, t, i), Z = ie(d.add(new v(f, f)), e, t, i), P = a.textureUV.divide(this.mosaicInfo.size), $ = r.textureUVNextVertex1.divide(this.mosaicInfo.size), R = r.textureUVNextVertex2.divide(this.mosaicInfo.size), I = { color: new V(1), outlineColor: new V(1), overrideOutlineColor: new l(1), outlineSize: n, distanceToPx: p, isSDF: u };
    let z = new l(0);
    return z = z.add(se(h).multiply(this._getColor(ae(h, P, $, R), I).a)), z = z.add(se(m).multiply(this._getColor(ae(m, P, $, R), I).a)), z = z.add(se(b).multiply(this._getColor(ae(b, P, $, R), I).a)), z = z.add(se(y).multiply(this._getColor(ae(y, P, $, R), I).a)), z = z.add(se(g).multiply(this._getColor(ae(g, P, $, R), I).a)), z = z.add(se(x).multiply(this._getColor(ae(x, P, $, R), I).a)), z = z.add(se(T).multiply(this._getColor(ae(T, P, $, R), I).a)), z = z.add(se(q).multiply(this._getColor(ae(q, P, $, R), I).a)), z = z.add(se(Z).multiply(this._getColor(ae(Z, P, $, R), I).a)), H(z, new l(0.05)).multiply(ut(this.hittestRequest));
  }
}
c([D(Wt)], j.prototype, "visualVariableColor", void 0), c([D(jt)], j.prototype, "visualVariableOpacity", void 0), c([D(ft)], j.prototype, "visualVariableRotation", void 0), c([D(Xt)], j.prototype, "visualVariableSizeMinMaxValue", void 0), c([D(Kt)], j.prototype, "visualVariableSizeScaleStops", void 0), c([D(Zt)], j.prototype, "visualVariableSizeStops", void 0), c([D(Yt)], j.prototype, "visualVariableSizeUnitValue", void 0), c([S(pt)], j.prototype, "mosaicInfo", void 0), c([F(0, A(re)), F(1, A(Ve))], j.prototype, "vertex", null), c([F(0, A(qs))], j.prototype, "fragment", null);
let Ws = class extends k {
  constructor() {
    super(...arguments), this.type = B.Marker, this.shaders = { geometry: new j() }, this.symbologyPlane = ue.MARKER;
  }
  render(e, t) {
    const { context: i, painter: a } = e, r = t.instance.getInput();
    a.setShader({ shader: this.shaders.geometry, uniforms: { ...G(e, t.target, r.uniforms), ...E(e, t.target), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey, !0) }, defines: { ...C(e) }, optionalAttributes: r.optionalAttributes, useComputeBuffer: M(e) }), a.setPipelineState(L(e)), a.submitDraw(e, t);
  }
}, js = class {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const e = /* @__PURE__ */ new Map();
    for (const t in this.locations) e.set(t, this.locations[t].index);
    return e;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const e = new Set(Object.keys(this.options));
      this._optionPropertyKeys = e;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const e = this.locationsMap, t = Array.from(e.entries()).map(([a, r]) => `${a}.${r}`).join("."), i = ts(t);
      this._locationInfo = { hash: i, locations: e, computeAttributeMap: this.computeAttributes };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, i] of this.locationsMap.entries()) e.set("a_" + t, i);
    return e;
  }
  getShaderKey(e, t, i) {
    return `${Object.keys(e).map((a) => `${a}.${e[a]}`).join(".")}.${Object.keys(i).filter((a) => i[a]).map((a) => `${a}_${i[a].toString()}`).join(".")}.${Object.keys(t).filter((a) => this.optionPropertyKeys.has(a)).join(".")}`;
  }
  getProgram(e, t, i, a) {
    let r = "", o = "";
    for (const n in i) if (i[n]) {
      const u = typeof i[n] == "boolean" ? `#define ${n}
` : `#define ${n} ${i[n]}
`;
      r += u, o += u;
    }
    return r += this.vertexShader, o += this.fragmentShader, new Yi(r, o, this.renamedLocationsMap, this.locationInfo, this._getUniformBindings(t), this._transformFeedbackBindings);
  }
  _getUniformBindings(e) {
    const t = [];
    for (const i in this.required) {
      const a = this.required[i];
      t.push({ uniformHydrated: null, shaderModulePath: i, uniformName: i, uniformType: a.type, uniformArrayElementType: It(a), uniformArrayLength: Ot(a) });
    }
    for (const i in e) {
      const a = this.options[i];
      if (e[i]) for (const r in a) {
        const o = a[r];
        t.push({ uniformHydrated: null, shaderModulePath: `${i}.${r}`, uniformName: r, uniformType: o.type, uniformArrayElementType: It(o), uniformArrayLength: Ot(o) });
      }
    }
    return t;
  }
};
const It = (s) => s.type === "array" ? s.elementType?.type : void 0, Ot = (s) => s.type === "array" ? s.size : void 0, Xs = { hittestDist: l, hittestPos: v }, Ks = { filterFlags: U, animation: U, visualVariableData: U, dataDriven0: U, dataDriven1: U, dataDriven2: U, gpgpu: U, size: l }, Zs = { displayViewScreenMat3: K, displayViewMat3: K, displayMat3: K, viewMat3: K, tileMat3: K, displayZoomFactor: l, requiredZoomFactor: l, tileOffset: v, currentScale: l, currentZoom: l, metersPerSRUnit: l };
let Ys = class extends js {
  constructor() {
    super(...arguments), this.vertexShader = At("materials/pie/pie.vert"), this.fragmentShader = At("materials/pie/pie.frag"), this.required = { ...Ks, ...Zs, outlineWidth: l, colors: Y, defaultColor: V, othersColor: V, outlineColor: V, donutRatio: l, sectorThreshold: l }, this.options = { hittestUniforms: Xs, visualVariableSizeMinMaxValue: { minMaxValueAndSize: V }, visualVariableSizeScaleStops: { sizes: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 }, values: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 } }, visualVariableSizeStops: { sizes: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 }, values: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 } }, visualVariableSizeUnitValue: { unitValueToPixelsRatio: l }, visualVariableOpacity: { opacities: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 }, opacityValues: { ...Y.ofType(l, 8), type: "array", elementType: l, size: 8 } } }, this.locations = { pos: { index: 0, type: v }, id: { index: 1, type: _ }, bitset: { index: 2, type: l }, offset: { index: 3, type: v }, texCoords: { index: 4, type: v }, size: { index: 5, type: v }, referenceSize: { index: 6, type: l }, zoomRange: { index: 7, type: v } }, this.defines = { VV_SIZE_MIN_MAX_VALUE: "boolean", VV_SIZE_SCALE_STOPS: "boolean", VV_SIZE_FIELD_STOPS: "boolean", VV_SIZE_UNIT_VALUE: "boolean", VV_OPACITY: "boolean", HITTEST: "boolean", numberOfFields: "number", highlight: "boolean", inside: "boolean", outside: "boolean" };
  }
  setNumberOfFields(e) {
    this.required.colors = { ...Y.ofType(V, e), type: "array", elementType: V, size: e };
  }
}, Qs = class extends k {
  constructor() {
    super(...arguments), this.type = B.PieChart, this.shaders = { geometry: new Ys() }, this.symbologyPlane = ue.MARKER;
  }
  render(e, t) {
    const { painter: i } = e, { instance: a, target: r } = t, o = this.shaders.geometry, n = a.getInput(), u = n.uniforms.numberOfFields, p = M(e), d = E(e, r), f = C(e);
    o.setNumberOfFields(u), i.setShader({ shader: o, uniforms: { ...G(e, t.target, n.uniforms.shader), ...d.storage, ...d.view, hittestUniforms: d.hittestRequest ? { hittestDist: d.hittestRequest?.distance, hittestPos: d.hittestRequest?.position } : null }, defines: { VV_SIZE_MIN_MAX_VALUE: !!n.uniforms.shader.visualVariableSizeMinMaxValue, VV_SIZE_SCALE_STOPS: !!n.uniforms.shader.visualVariableSizeScaleStops, VV_SIZE_FIELD_STOPS: !!n.uniforms.shader.visualVariableSizeStops, VV_SIZE_UNIT_VALUE: !!n.uniforms.shader.visualVariableSizeUnitValue, VV_OPACITY: !!n.uniforms.shader.visualVariableOpacity, HITTEST: p, highlight: d.highlight ? 1 : 0, ...f, numberOfFields: u }, optionalAttributes: {}, useComputeBuffer: p }), i.setPipelineState(L(e)), i.submitDraw(e, t);
  }
}, Js = class extends k {
  constructor() {
    super(...arguments), this.type = B.Text, this.shaders = { geometry: new O() }, this.symbologyPlane = ue.TEXT;
  }
  render(e, t) {
    const { context: i, painter: a } = e, r = C(e), o = t.instance.getInput(), n = { shader: this.shaders.geometry, uniforms: { ...G(e, t.target, o.uniforms), ...E(e, t.target), mosaicInfo: a.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...r, isHaloPass: !1, isBackgroundPass: !0, isLabel: !1 }, optionalAttributes: o.optionalAttributes, useComputeBuffer: M(e) };
    a.setShader(n), a.setPipelineState(L(e)), a.submitDraw(e, t), a.setShader({ ...n, defines: { ...r, isHaloPass: !0, isBackgroundPass: !1, isLabel: !1 } }), a.submitDraw(e, t), a.setShader({ ...n, defines: { ...r, isHaloPass: !1, isBackgroundPass: !1, isLabel: !1 } }), a.submitDraw(e, t);
  }
};
const te = { fill: new Ms(), patternFill: new Ps(), complexFill: new zs(), outlineFill: new Ts(), patternOutlineFill: new Rs(), complexOutlineFill: new $s(), marker: new Ws(), pieChart: new Qs(), line: new Hs(), texturedLine: new Gs(), text: new Js(), label: new Us(), heatmap: new Es(), dotDensity: new _s() };
function Dr() {
  for (const s in te)
    te[s].startup();
}
function Lr(s) {
  for (const e in te)
    te[e].shutdown(s);
}
function Le(s, e) {
  const t = s.slice(0, e), i = e - t.length;
  for (let a = 0; a < i; a++) {
    const r = t[t.length - 1];
    t.push(r);
  }
  return t;
}
function ea(s) {
  if (!s) return [0, 0, 0, 0];
  const { r: e, g: t, b: i, a } = s;
  return [e * (a / 255), t * (a / 255), i * (a / 255), a];
}
const Ie = 8, yi = Ie - 2, bi = () => ei.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function vi(s) {
  return s.map((e) => ta(e) ? ia(e.clone()) : e);
}
function ta(s) {
  return (s.type === "size" || s.type === "color" || s.type === "opacity") && s.stops != null;
}
function ia(s) {
  return s.stops = ra(s.type, s.stops ?? []), s;
}
function de(s, e, t) {
  return (1 - t) * s + t * e;
}
function sa(s, e) {
  const [t, ...i] = e, a = i.pop(), r = i[0].value, o = i[i.length - 1].value, n = (o - r) / yi, u = [];
  for (let p = r; p < o; p += n) {
    let d = 0;
    for (; p >= i[d].value; ) d++;
    const f = i[d], h = e[d - 1], m = p - h.value, b = f.value === h.value ? 1 : m / (f.value - h.value);
    if (s === "color") {
      const y = i[d], g = e[d - 1], x = y.color.clone();
      x.r = de(g.color.r, x.r, b), x.g = de(g.color.g, x.g, b), x.b = de(g.color.b, x.b, b), x.a = de(g.color.a, x.a, b), u.push({ value: p, color: x, label: y.label });
    } else if (s === "size") {
      const y = i[d], g = e[d - 1], x = zt(y.size), T = de(zt(g.size), x, b);
      u.push({ value: p, size: T, label: y.label });
    } else {
      const y = i[d], g = de(e[d - 1].opacity, y.opacity, b);
      u.push({ value: p, opacity: g, label: y.label });
    }
  }
  return [t, ...u, a];
}
function aa(s) {
  const [e, ...t] = s, i = t.pop();
  for (; t.length > yi; ) {
    let a = 0, r = 0;
    for (let o = 1; o < t.length; o++) {
      const n = t[o - 1], u = t[o], p = Math.abs(u.value - n.value);
      p > r && (r = p, a = o);
    }
    t.splice(a, 1);
  }
  return [e, ...t, i];
}
function ra(s, e) {
  return e.length <= Ie ? e : (bi().warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${Ie}. Displayed stops will be simplified.`), e.length > 2 * Ie ? sa(s, e) : aa(e));
}
function oa() {
  const { supportsColorBufferFloat: s, supportsColorBufferFloatBlend: e, supportsColorBufferHalfFloat: t } = dt();
  return s && e || t;
}
function Br(s) {
  if (!s) return !0;
  switch (s.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!oa()) {
        const e = dt(), t = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((i) => !e[i]).join(", ");
        return bi().errorOnce(new Pe("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${t}`)), !1;
      }
  }
  return !0;
}
const na = 1.25, Te = 128, la = 128;
function ua(s) {
  if (!s.stops?.length) return null;
  const e = s.stops.sort((r, o) => r.value - o.value), t = Le(e, 8), i = t.map(({ value: r }) => r), a = t.map(({ color: r }) => ea(r));
  return { values: i, colors: a };
}
function ca(s) {
  if (!s.stops?.length) return null;
  const e = s.stops.sort((i, a) => i.value - a.value), t = Le(e, 8);
  return { opacityValues: t.map(({ value: i }) => i), opacities: t.map(({ opacity: i }) => i) };
}
function pa(s) {
  return { rotationType: s.rotationType === "geographic" ? Ze.Geographic : Ze.Arithmatic };
}
function Xe(s) {
  if (!s.stops?.length) return null;
  if (s.stops.some((i) => i.useMaxValue || i.useMinValue)) return (i, a) => {
    const r = i.statisticsByLevel.get(a.key.level), o = s.stops.map((u) => ({ value: u.useMaxValue ? r?.get(s.field)?.maxValue ?? 0 : u.useMinValue ? r?.get(s.field)?.minValue ?? 0 : u.value, size: u.size ? be(u.size) : cs })).sort((u, p) => u.value - p.value), n = Le(o, 8);
    return { values: n.map(({ value: u }) => u), sizes: n.map(({ size: u }) => u) };
  };
  const e = s.stops.sort((i, a) => i.value - a.value), t = Le(e, 8);
  return { values: t.map(({ value: i }) => i), sizes: t.map(({ size: i }) => be(i)) };
}
function da(s) {
  return (e) => {
    const { state: t } = e;
    return { unitValueToPixelsRatio: is(t.spatialReference) / ss[s.valueUnit ?? "meters"] / t.resolution };
  };
}
function Et(s, e) {
  const t = e.length;
  if (s < e[0].value || t === 1) return e[0].size;
  for (let i = 1; i < t; i++) if (s < e[i].value) {
    const a = (s - e[i - 1].value) / (e[i].value - e[i - 1].value);
    return e[i - 1].size + a * (e[i].size - e[i - 1].size);
  }
  return e[t - 1].size;
}
function fa(s) {
  const { minDataValue: e, maxDataValue: t, minSize: i, maxSize: a } = s;
  if (typeof i == "object" && typeof a == "object") return (r, o) => {
    const n = r.state.scale, u = be(Et(n, i.stops)), p = be(Et(n, a.stops));
    return { minMaxValueAndSize: [e, t, u, p] };
  };
  if (typeof i == "object" || typeof a == "object") throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return { minMaxValueAndSize: [e, t, be(i), be(a)] };
}
const ht = { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: null, visualVariableSizeStops: null, visualVariableSizeScaleStops: null, visualVariableSizeOutlineScaleStops: null, visualVariableSizeUnitValue: null, visualVariableSizeMinMaxValue: null };
function gi(s, e = la, t = na) {
  if (s.visualVariableSizeMinMaxValue) return s.visualVariableSizeMinMaxValue instanceof Function ? Te : Math.max(s.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * t, e);
  if (s.visualVariableSizeScaleStops) {
    if (s.visualVariableSizeScaleStops instanceof Function) return Te;
    const i = s.visualVariableSizeScaleStops.sizes;
    return Math.max(i[i.length - 1] * t, e);
  }
  if (s.visualVariableSizeStops) {
    if (s.visualVariableSizeStops instanceof Function) return Te;
    const i = s.visualVariableSizeStops.sizes;
    return Math.max(i[i.length - 1] * t, e);
  }
  return s.visualVariableSizeUnitValue ? 2 * Te : 0;
}
function kr(s) {
  const e = { ...ht };
  if (!s || !("visualVariables" in s) || !s.visualVariables) return e;
  for (const t of vi(s.visualVariables)) switch (t.type) {
    case "color":
      e.visualVariableColor = ua(t);
      break;
    case "opacity":
      e.visualVariableOpacity = ca(t);
      break;
    case "rotation":
      e.visualVariableRotation = pa(t);
      break;
    case "size":
      switch (ha(t)) {
        case "field-stops":
          e.visualVariableSizeStops = Xe(t);
          break;
        case "scale-stops":
          t.target === "outline" ? e.visualVariableSizeOutlineScaleStops = Xe(t) : e.visualVariableSizeScaleStops = Xe(t);
          break;
        case "min-max":
          e.visualVariableSizeMinMaxValue = fa(t);
          break;
        case "unit-value":
          e.visualVariableSizeUnitValue = da(t);
      }
      break;
  }
  return e;
}
function ha(s) {
  return typeof s.minDataValue == "number" && typeof s.maxDataValue == "number" && s.minSize != null && s.maxSize != null ? "min-max" : s?.valueExpression === "$view.scale" && Array.isArray(s.stops) ? "scale-stops" : s.field == null && s?.valueExpression === "$view.scale" || !(Array.isArray(s.stops) || "levels" in s && s.levels) ? s.field != null || s?.valueExpression !== "$view.scale" ? "unit-value" : null : "field-stops";
}
function ma(s) {
  return !!(s.visualVariableSizeMinMaxValue || s.visualVariableSizeScaleStops || s.visualVariableSizeStops || s.visualVariableSizeUnitValue || s.visualVariableSizeOutlineScaleStops);
}
function Nr(s) {
  return !!s.visualVariableRotation;
}
function ya(s) {
  return s.minScale || s.maxScale ? { minScale: s.minScale ?? 0, maxScale: s.maxScale ?? 0 } : null;
}
function Q(s) {
  if (s == null) return null;
  if (Array.isArray(s)) {
    const [e, t, i, a] = s;
    return [e, t, i, 255 * a];
  }
  return typeof s == "string" ? s : { ...s, defaultValue: Q(s?.defaultValue) };
}
async function Ur(s, e) {
  const { cimResourceManager: t, cimAnalyzer: i, scaleExpression: a } = e.schemaOptions;
  await Promise.all(Qi.fetchResources(s.symbol, t, []));
  const r = i.analyzeSymbolReference(s, !1), o = { scaleInfo: ya(s), scaleExpression: a }, n = [];
  for (const u of r) switch (u.type) {
    case "marker":
      n.push(...ba(u, e, o));
      break;
    case "fill":
      n.push(...wa(u, e, o));
      break;
    case "line":
      n.push(...Va(u, e, o));
      break;
    case "text":
      n.push(...$a(u, e, o));
  }
  return n;
}
function ba(s, e, t) {
  const { uniforms: i, schemaOptions: a } = e, { store: r } = a, o = s.isOutline ? { ...ht, visualVariableSizeScaleStops: i.visualVariableSizeOutlineScaleStops } : { visualVariableColor: i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue, visualVariableRotation: i.visualVariableRotation };
  return va(r.ensureInstance(te.marker, { uniforms: o, optionalAttributes: { zoomRange: !!t.scaleInfo } }), s, i, t);
}
function va(s, e, t, { scaleInfo: i, scaleExpression: a }) {
  const r = ma(t);
  return [s.createMeshInfo({ size: e.size, scaleX: e.scaleX, anchorX: e.anchorPoint.x, anchorY: e.anchorPoint.y, angle: e.rotation, color: Q(e.color) ?? [0, 0, 0, 0], colorLocked: e.colorLocked, frameHeight: e.frameHeight, widthRatio: e.widthRatio, scaleInfo: i, offsetX: e.offsetX, offsetY: e.offsetY, outlineColor: Q(e.outlineColor) ?? [0, 0, 0, 0], outlineSize: e.outlineWidth, referenceSize: e.referenceSize || as.CIMVectorMarker.size, rotateClockwise: e.rotateClockwise, scaleFactor: a ?? 1, sizeRatio: e.sizeRatio, alignment: e.alignment, isAbsoluteAnchorPoint: e.isAbsoluteAnchorPoint, scaleSymbolsProportionally: e.scaleSymbolsProportionally, sprite: e.spriteRasterizationParam, hasSizeVV: r, placement: e.markerPlacement, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null, transforms: e.transform, minPixelBuffer: gi(t) })];
}
function ga(s, e, t) {
  const { uniforms: i, schemaOptions: a } = e, { store: r } = a;
  return xa(r.ensureInstance(te.fill, { uniforms: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity }, optionalAttributes: { zoomRange: !!t.scaleInfo } }), s, t);
}
function xa(s, e, { scaleInfo: t }) {
  return [s.createMeshInfo({ color: Q(e.color) ?? [0, 0, 0, 0], scaleInfo: t, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null })];
}
function wa(s, e, t) {
  if (!s.spriteRasterizationParam) return ga(s, e, t);
  const { uniforms: i, schemaOptions: a } = e, { store: r } = a;
  return Sa(r.ensureInstance(te.complexFill, { uniforms: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity }, optionalAttributes: { zoomRange: !!t.scaleInfo } }), s, i.visualVariableColor != null, t);
}
function Sa(s, e, t, { scaleInfo: i }) {
  if (!e.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const a = !!e.hasUnresolvedReplacementColor && (!t || e.colorLocked), r = e.sampleAlphaOnly && !a, o = e.spriteRasterizationParam;
  return [s.createMeshInfo({ color: Q(e.color) ?? [0, 0, 0, 0], height: e.height, aspectRatio: e.scaleX, offsetX: e.offsetX, offsetY: e.offsetY, scaleX: 1, scaleY: 1, angle: e.angle, applyRandomOffset: e.applyRandomOffset, sampleAlphaOnly: r, scaleProportionally: o.resource.type === "CIMHatchFill", sprite: o, scaleInfo: i, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null })];
}
function Va(s, e, t) {
  const { uniforms: i, schemaOptions: a } = e, { store: r } = a, o = s.isOutline ? { ...ht, visualVariableSizeScaleStops: i.visualVariableSizeOutlineScaleStops } : { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue }, n = { uniforms: o, optionalAttributes: { zoomRange: !!t.scaleInfo } }, u = !!(o.visualVariableSizeMinMaxValue || o.visualVariableSizeScaleStops || o.visualVariableSizeStops || o.visualVariableSizeUnitValue);
  return s.spriteRasterizationParam ? za(r.ensureInstance(te.texturedLine, n), s, u, t) : _a(r.ensureInstance(te.line, n), s, u, t);
}
function xi(s, e, { scaleInfo: t }) {
  return { color: Q(s.color) ?? [0, 0, 0, 0], width: s.width, referenceWidth: s.referenceWidth, capType: s.cap, joinType: s.join, miterLimit: s.miterLimit, scaleInfo: t, hasSizeVV: e, effects: s.effects ? { type: "cim-effect-infos", effectInfos: s.effects } : null };
}
function _a(s, e, t, i) {
  if (e.spriteRasterizationParam) throw new Error("InternalError: Sprite should not be defined");
  const a = xi(e, t, i);
  return [s.createMeshInfo(a)];
}
function za(s, e, t, i) {
  const { spriteRasterizationParam: a, scaleDash: r, sampleAlphaOnly: o } = e;
  if (!a) throw new Error("InternalError: Sprite should be defined");
  return [s.createMeshInfo({ ...xi(e, t, i), shouldScaleDash: r ?? !1, shouldSampleAlphaOnly: o, isSDF: a.resource.type !== "CIMPictureStroke", sprite: a })];
}
function $a(s, e, t) {
  const { uniforms: i, schemaOptions: a } = e, { store: r } = a;
  return Ma(r.ensureInstance(te.text, { uniforms: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableRotation: i.visualVariableRotation, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !!t.scaleInfo, referenceSymbol: !1, clipAngle: !1 } }), s, i, t);
}
function Ma(s, e, t, { scaleInfo: i, scaleExpression: a }) {
  return [s.createMeshInfo({ boxBackgroundColor: Q(e.backgroundColor), boxBorderLineColor: Q(e.borderLineColor), boxBorderLineSize: e.borderLineWidth ?? 0, color: Q(e.color) ?? [0, 0, 0, 0], offsetX: e.offsetX, offsetY: e.offsetY, postAngle: e.angle, fontSize: e.size, referenceSize: e.referenceSize, decoration: e.decoration, haloColor: Q(e.outlineColor) ?? [0, 0, 0, 0], haloFontSize: e.outlineSize, lineWidth: e.lineWidth || 512, lineHeightRatio: 1, horizontalAlignment: e.horizontalAlignment ?? "center", verticalAlignment: e.verticalAlignment ?? "baseline", useCIMAngleBehavior: !1, glyphs: e.textRasterizationParam, scaleInfo: i, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null, placement: e.markerPlacement, transforms: e.transform, scaleFactor: a ?? 1, minPixelBuffer: gi(t), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: !1 })];
}
function Hr(s, e) {
  return { type: "simple", filters: e, capabilities: { maxTextureSize: dt().maxTextureSize }, bindings: Ta(s) };
}
function Ue(s) {
  switch (s) {
    case "opacity":
      return Me.OPACITY;
    case "color":
      return Me.COLOR;
    case "rotation":
      return Me.ROTATION;
    case "size":
      return Me.SIZE;
    default:
      return null;
  }
}
function Ta(s) {
  if (!s) return [];
  switch (s.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return wi(s);
    case "dot-density":
      return Pa(s);
    case "pie-chart":
      return Ra(s);
    case "heatmap":
      return Aa(s);
  }
}
function Pa(s) {
  const e = [];
  for (const t of s.attributes) e.push({ binding: e.length, expression: t.valueExpression, field: t.field });
  return e;
}
function Ra(s) {
  const e = wi(s);
  let t = 4;
  for (const i of s.attributes) e.push({ binding: t++, expression: i.valueExpression, field: i.field });
  return e;
}
function Aa({ valueExpression: s, field: e }) {
  return s || e ? [{ binding: 0, expression: s, field: e }] : [];
}
function wi(s) {
  return !("visualVariables" in s) || !s.visualVariables?.length ? [] : vi(s.visualVariables).map((e) => Ea(e)).filter(rs);
}
function Fa(s) {
  return s.valueExpression === "$view.scale" ? null : { binding: Ue(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression, valueRepresentation: s.valueRepresentation };
}
function Ca(s) {
  return { binding: Ue(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression };
}
function Ia(s) {
  return { binding: Ue(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression };
}
function Oa(s) {
  return { binding: Ue(s.type), expression: s.valueExpression, field: s.field };
}
function Ea(s) {
  switch (s.type) {
    case "size":
      return Fa(s);
    case "color":
      return Ca(s);
    case "opacity":
      return Ia(s);
    case "rotation":
      return Oa(s);
  }
}
class Gr {
  constructor(e) {
    this.updateTracking = new Ji({ debugName: "FeatureCommandQueue" }), this._queueProcessor = new os({ concurrency: 1, process: e.process });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  async push(e) {
    return ns(this.updateTracking.addPromise(this._doPush(e)));
  }
  async _doPush(e) {
    const t = this._queueProcessor, i = t.last();
    switch (e.type) {
      case "update":
      case "highlight":
        return i?.type === e.type ? void 0 : t.push(e);
      case "edit-by-id":
      case "edit-by-feature":
        return t.push(e);
    }
  }
}
export {
  kr as M,
  Dr as T,
  _a as a,
  Sa as b,
  Gr as c,
  Hr as d,
  ea as e,
  gi as f,
  ma as g,
  te as h,
  Nr as i,
  wi as j,
  Br as m,
  Ur as n,
  xa as p,
  ya as t,
  va as u,
  Lr as w,
  ht as x,
  Ma as y,
  za as z
};
//# sourceMappingURL=FeatureCommandQueue-DbgU6j82.js.map
