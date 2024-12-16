import { bQ as u, bR as f, hh as Ut, f9 as Wt, eD as Nt, bS as P, bT as ve, eY as We, b2 as Se, pn as zt, db as Pt, h6 as rt, gf as Ne, G as ae, T as Te, s as re, fX as Ht, ek as C, cJ as Bt, mF as kt, eb as pe, po as Gt, pp as Vt, pq as _e, lg as le, E as Zt, dY as qt, d$ as Yt, ap as S, aq as Re, pr as Xt, kG as ze, ps as Me, b_ as Jt, aA as Kt, b$ as Qt, jx as st, J as we, D as _, R as en, pt as tn, n8 as nn, l9 as rn, o_ as sn, jK as on, a8 as an, cw as ln, gj as Ce, ao as cn, pu as ot, o5 as un, it as $e, gq as at, pv as it, gr as lt, pw as ct, px as ut, gi as pn, ej as hn, ei as fn, dZ as mn, fF as dn, mh as gn, cz as yn, c$ as xn, py as vn, b4 as wn, pz as $n, fn as bn } from "./main-DZxT3i7S.js";
import { j as pt, N as se, z as ht, w as he, k as ft, d as Tn } from "./MeshTransform-CZ8nt7DI.js";
import { r as An, n as Sn, p as fe } from "./MeshVertexAttributes-Ckunuqz3.js";
import { a as De, b as me } from "./MeshLocalVertexSpace-DrcjSCL-.js";
import { a as ie, s as de, g as mt, u as Rn } from "./meshVertexSpaceUtils-f18buSHF.js";
import { e as Mn } from "./earcut-XDcq3zAf.js";
import { t as dt } from "./Indices-63AB7QEp.js";
import { M as Cn, O as Dn, v as Fn } from "./plane-D2096W83.js";
import { e as Pe } from "./deduplicate-DFnnTL10.js";
import { c as I } from "./projectPointToVector-BM3JDlis.js";
import { F as $, B as Fe, O as W, n as Ln, k as gt, g as yt, E as xt, w as vt, h as wt, R as $t, G as bt } from "./vertexSpaceConversion-Xm0UohEX.js";
import { e as be } from "./mat4f64-Dn1WEGBx.js";
import { a as Ee } from "./spatialReferenceEllipsoidUtils-CUWjrXGC.js";
import { C as Tt } from "./computeTranslationToOriginAndRotation-D64v_Kvj.js";
import { e as He, i as jn } from "./vec3-Bk8n8qxi.js";
import { o as Be, h as On, m as _n } from "./External-xJgS1C18.js";
import { e as At } from "./mat3f64-Dh9_zhFu.js";
import { b as En } from "./quat-BFf8_asR.js";
import { e as In, r as Un } from "./quatf64-C16JxGFv.js";
var V;
const Ae = /* @__PURE__ */ new WeakMap();
let Wn = 0, j = V = class extends ve {
  constructor(e) {
    super(e), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(e) {
    this._set("url", e), e && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(e) {
    this._set("data", e), e && this._set("url", null);
  }
  writeData(e, t, n, r) {
    if (e instanceof HTMLImageElement) {
      const s = { type: "image-element", src: We(e.src, r), crossOrigin: e.crossOrigin };
      t[n] = s;
    } else if (e instanceof HTMLCanvasElement) {
      const s = { type: "canvas-element", imageData: ke(e.getContext("2d").getImageData(0, 0, e.width, e.height)) };
      t[n] = s;
    } else if (e instanceof HTMLVideoElement) {
      const s = { type: "video-element", src: We(e.src, r), autoplay: e.autoplay, loop: e.loop, muted: e.muted, crossOrigin: e.crossOrigin, preload: e.preload };
      t[n] = s;
    } else if (e instanceof ImageData) {
      const s = { type: "image-data", imageData: ke(e) };
      t[n] = s;
    }
  }
  readData(e) {
    switch (e.type) {
      case "image-element": {
        const t = new Image();
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t;
      }
      case "canvas-element": {
        const t = Ge(e.imageData), n = document.createElement("canvas");
        return n.width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), n;
      }
      case "image-data":
        return Ge(e.imageData);
      case "video-element": {
        const t = document.createElement("video");
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t.autoplay = e.autoplay, t.loop = e.loop, t.muted = e.muted, t.preload = e.preload, t;
      }
      default:
        return;
    }
  }
  get transparent() {
    const { data: e, url: t } = this;
    return e instanceof HTMLCanvasElement ? Ve(e.getContext("2d").getImageData(0, 0, e.width, e.height)) : e instanceof ImageData ? Ve(e) : !(!t?.toLowerCase().endsWith(".png") && !t?.toLocaleLowerCase().startsWith("data:image/png;"));
  }
  set transparent(e) {
    this._overrideIfSome("transparent", e);
  }
  get contentHash() {
    const e = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", t = (n = "") => `d:${n},t:${this.transparent},w:${e}`;
    return this.url != null ? t(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? t(this.data.src) : (Ae.has(this.data) || Ae.set(this.data, ++Wn), t(Ae.get(this.data))) : t();
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.url != null ? this.url.length : 0, this.data != null) {
      const t = this.data;
      "data" in t ? e += t.data.byteLength : t instanceof HTMLImageElement ? e += t.naturalWidth * t.naturalHeight * 3 : t instanceof HTMLCanvasElement && (e += t.width * t.height * 3);
    }
    return e;
  }
  clone() {
    const e = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new V(e);
  }
  cloneWithDeduplication(e) {
    const t = e.get(this);
    if (t) return t;
    const n = this.clone();
    return e.set(this, n), n;
  }
  _cloneWrap() {
    return typeof this.wrap == "string" ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  static from(e) {
    return typeof e == "string" ? new V({ url: e }) : e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageData || e instanceof HTMLVideoElement ? new V({ data: e }) : Se(V, e);
  }
};
function ke(e) {
  let t = "";
  for (let n = 0; n < e.data.length; n++) t += String.fromCharCode(e.data[n]);
  return { data: btoa(t), width: e.width, height: e.height };
}
function Ge(e) {
  const t = atob(e.data), n = new Uint8ClampedArray(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return zt(n, e.width, e.height);
}
function Ve(e) {
  for (let t = 3; t < e.data.length; t += 4) if (e.data[t] !== 255) return !0;
  return !1;
}
u([f({ type: String, json: { write: Ut } })], j.prototype, "url", null), u([f({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), f()], j.prototype, "data", null), u([Wt("data")], j.prototype, "writeData", null), u([Nt("data")], j.prototype, "readData", null), u([f({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], j.prototype, "transparent", null), u([f({ json: { write: !0 } })], j.prototype, "wrap", void 0), u([f({ readOnly: !0 })], j.prototype, "contentHash", null), j = V = u([P("esri.geometry.support.MeshTexture")], j);
const te = j;
let Z = class extends Pt(ve) {
  constructor(t) {
    super(t), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
u([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Z.prototype, "offset", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 } })], Z.prototype, "rotation", void 0), u([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Z.prototype, "scale", void 0), Z = u([P("esri.geometry.support.MeshTextureTransform")], Z);
const ne = Z;
var Le;
let D = Le = class extends ve {
  constructor(e) {
    super(e), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = !0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new Le(this.clonePropertiesWithDeduplication(t));
    return e?.set(this, r), r;
  }
  clonePropertiesWithDeduplication(e) {
    return { color: this.color != null ? this.color.clone() : null, colorTexture: this.colorTexture?.cloneWithDeduplication(e), normalTexture: this.normalTexture?.cloneWithDeduplication(e), alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: this.colorTextureTransform?.clone(), normalTextureTransform: this.normalTextureTransform?.clone() };
  }
  get memoryUsage() {
    return this.getMemoryUsage();
  }
  getMemoryUsage() {
    let e = 0;
    return e += this.color != null ? 16 : 0, this.colorTexture != null && (e += this.colorTexture.memoryUsage), e += this.colorTextureTransform != null ? 20 : 0, this.normalTexture != null && (e += this.normalTexture.memoryUsage), e += this.normalTextureTransform != null ? 20 : 0, e;
  }
};
u([f({ type: rt, json: { write: !0 } })], D.prototype, "color", void 0), u([f({ type: te, json: { write: !0 } })], D.prototype, "colorTexture", void 0), u([f({ type: ne, json: { write: !0 } })], D.prototype, "colorTextureTransform", void 0), u([f({ type: te, json: { write: !0 } })], D.prototype, "normalTexture", void 0), u([f({ type: ne, json: { write: !0 } })], D.prototype, "normalTextureTransform", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], D.prototype, "alphaMode", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], D.prototype, "alphaCutoff", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], D.prototype, "doubleSided", void 0), D = Le = u([P("esri.geometry.support.MeshMaterial")], D);
const Ie = D;
var je;
let R = je = class extends Ie {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new je(this.clonePropertiesWithDeduplication(t));
    return e?.set(this, r), r;
  }
  getMemoryUsage() {
    let e = super.getMemoryUsage();
    return e += this.emissiveColor != null ? 16 : 0, this.emissiveTexture != null && (e += this.emissiveTexture.memoryUsage), e += this.emissiveTextureTransform != null ? 20 : 0, this.occlusionTexture != null && (e += this.occlusionTexture.memoryUsage), e += this.occlusionTextureTransform != null ? 20 : 0, this.metallicRoughnessTexture != null && (e += this.metallicRoughnessTexture.memoryUsage), e += this.metallicRoughnessTextureTransform != null ? 20 : 0, e;
  }
  clonePropertiesWithDeduplication(e) {
    return { ...super.clonePropertiesWithDeduplication(e), emissiveColor: this.emissiveColor?.clone(), emissiveTexture: this.emissiveTexture?.cloneWithDeduplication(e), emissiveTextureTransform: this.emissiveTextureTransform?.clone(), occlusionTexture: this.occlusionTexture?.cloneWithDeduplication(e), occlusionTextureTransform: this.occlusionTextureTransform?.clone(), metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: this.metallicRoughnessTexture?.cloneWithDeduplication(e), metallicRoughnessTextureTransform: this.metallicRoughnessTextureTransform?.clone() };
  }
};
u([f({ type: rt, json: { write: !0 } })], R.prototype, "emissiveColor", void 0), u([f({ type: te, json: { write: !0 } })], R.prototype, "emissiveTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "emissiveTextureTransform", void 0), u([f({ type: te, json: { write: !0 } })], R.prototype, "occlusionTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "occlusionTextureTransform", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "metallic", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "roughness", void 0), u([f({ type: te, json: { write: !0 } })], R.prototype, "metallicRoughnessTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "metallicRoughnessTextureTransform", void 0), R = je = u([P("esri.geometry.support.MeshMaterialMetallicRoughness")], R);
const Nn = R;
var Q;
let O = Q = class extends ve {
  static from(e) {
    return Se(Q, e);
  }
  constructor(e) {
    super(e), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = !1;
  }
  castFaces(e) {
    return Sn(e, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, ae.getLogger(this));
  }
  castMaterial(e) {
    return Se(e && typeof e == "object" && ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e) ? Nn : Ie, e);
  }
  clone() {
    return new Q({ faces: Te(this.faces), shading: this.shading, material: Te(this.material), trustSourceNormals: this.trustSourceNormals, name: this.name });
  }
  cloneWithDeduplication(e, t) {
    const n = { faces: Te(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(e, t) : null, trustSourceNormals: this.trustSourceNormals, name: this.name };
    return new Q(n);
  }
  get memoryUsage() {
    let e = 0;
    return this.faces != null && (e += this.faces.byteLength), this.material != null && (e += this.material.memoryUsage), e;
  }
};
u([f({ json: { write: An } })], O.prototype, "faces", void 0), u([Ne("faces")], O.prototype, "castFaces", null), u([f({ type: Ie, json: { write: !0 } })], O.prototype, "material", void 0), u([Ne("material")], O.prototype, "castMaterial", null), u([f({ json: { write: !0 } })], O.prototype, "name", void 0), u([f({ type: String, json: { write: !0 } })], O.prototype, "shading", void 0), u([f({ type: Boolean })], O.prototype, "trustSourceNormals", void 0), O = Q = u([P("esri.geometry.support.MeshComponent")], O);
const J = O, zn = "Mesh must be loaded before applying operations", Pn = "Provided component is not part of the list of components", Hn = "Expected polygon to be a Polygon instance", ee = "Expected location to be a Point instance";
class Ze extends re {
  constructor() {
    super("invalid-input:location", ee);
  }
}
function Bn(e, t, n) {
  const r = kn(qe, e, t, n) ? Dn(qe) : [0, 0, 1];
  return Math.abs(r[2]) > Math.cos(Ht(80)) ? C.Z : Math.abs(r[1]) > Math.abs(r[0]) ? C.Y : C.X;
}
function kn(e, t, n, r) {
  const s = ((i) => !Array.isArray(i[0]))(t) ? (i, a) => t[3 * i + a] : (i, a) => t[i][a], o = r ? Bt(r) / kt(r) : 1;
  return Fn(e, (i, a) => pe(i, s(a, 0) * o, s(a, 1) * o, s(a, 2)), n);
}
const qe = Cn();
function Gn(e) {
  const t = Zn(e.rings, e.hasZ, ge.CCW_IS_HOLE, e.spatialReference), n = new Array();
  let r = 0, s = 0;
  for (const a of t.polygons) {
    const c = a.count, l = a.index, h = Gt(t.position, 3 * l, 3 * c), d = a.holeIndices.map((p) => p - l), m = dt(Mn(h, d, 3));
    n.push({ position: h, faces: m }), r += h.length, s += m.length;
  }
  const o = Vn(n, r, s), i = Array.isArray(o.position) ? Pe(o.position, 3, { originalIndices: o.faces }) : Pe(o.position.buffer, 6, { originalIndices: o.faces });
  return o.position = Vt(new Float64Array(i.buffer)), o.faces = i.indices, o;
}
function Vn(e, t, n) {
  if (e.length === 1) return e[0];
  const r = _e(t), s = new Array(n);
  let o = 0, i = 0, a = 0;
  for (const c of e) {
    for (let l = 0; l < c.position.length; l++) r[o++] = c.position[l];
    for (const l of c.faces) s[i++] = l + a;
    a = o / 3;
  }
  return { position: r, faces: dt(s) };
}
function Zn(e, t, n, r) {
  const s = e.length, o = new Array(s), i = new Array(s), a = new Array(s);
  let c = 0;
  for (let g = 0; g < s; ++g) c += e[g].length;
  let l = 0, h = 0, d = 0;
  const m = _e(3 * c);
  let p = 0;
  for (let g = s - 1; g >= 0; g--) {
    const y = e[g], b = n === ge.CCW_IS_HOLE && qn(y, t, r);
    if (b && s !== 1) o[l++] = y;
    else {
      let F = y.length;
      for (let x = 0; x < l; ++x) F += o[x].length;
      const w = { index: p, pathLengths: new Array(l + 1), count: F, holeIndices: new Array(l) };
      w.pathLengths[0] = y.length, y.length > 0 && (a[d++] = { index: p, count: y.length }), p = b ? ce(y, y.length - 1, -1, m, p, y.length, t) : ce(y, 0, 1, m, p, y.length, t);
      for (let x = 0; x < l; ++x) {
        const A = o[x];
        w.holeIndices[x] = p, w.pathLengths[x + 1] = A.length, A.length > 0 && (a[d++] = { index: p, count: A.length }), p = ce(A, 0, 1, m, p, A.length, t);
      }
      l = 0, w.count > 0 && (i[h++] = w);
    }
  }
  for (let g = 0; g < l; ++g) {
    const y = o[g];
    y.length > 0 && (a[d++] = { index: p, count: y.length }), p = ce(y, 0, 1, m, p, y.length, t);
  }
  return i.length = h, a.length = d, { position: m, polygons: i, outlines: a };
}
function ce(e, t, n, r, s, o, i) {
  s *= 3;
  for (let a = 0; a < o; ++a) {
    const c = e[t];
    r[s++] = c[0], r[s++] = c[1], r[s++] = i && c[2] ? c[2] : 0, t += n;
  }
  return s / 3;
}
function qn(e, t, n) {
  if (!t) return !le(e);
  const r = e.length - 1;
  switch (Bn(e, r, n)) {
    case C.X:
      return !le(e, C.Y, C.Z);
    case C.Y:
      return !le(e, C.X, C.Z);
    case C.Z:
      return !le(e, C.X, C.Y);
  }
}
var ge;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
})(ge || (ge = {}));
function Ue(e, t, n, r) {
  if (r !== void 0) {
    Zt(e(), "option: geographic", { replacement: "Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.", version: "4.30", warnOnce: !0 });
    const s = t.type === "local";
    if (!ie(t) || r === s) return n.isGeographic || n.isWebMercator && r;
    e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`);
  }
  switch (t.type) {
    case "georeferenced":
      return n.isGeographic;
    case "local":
      return n.isGeographic || n.isWebMercator;
  }
}
const oe = () => ae.getLogger("esri.geometry.support.meshUtils.centerAt");
function Yn(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r } = e, s = n?.origin ?? e.origin, o = Ue(oe, r, s.spatialReference, n?.geographic);
  ie(r) ? Xn(e, t, s) : o ? Jn(e, t, s) : Kn(e, t, s);
}
function Xn(e, t, n) {
  const { vertexSpace: r } = e;
  if (!ie(r)) return;
  const s = Rt, o = St;
  if (!I(t, o, e.spatialReference)) return void $(oe(), t.spatialReference, e.spatialReference, W);
  if (!I(n, s, e.spatialReference)) {
    const a = e.origin;
    return s[0] = a.x, s[1] = a.y, s[2] = a.z, void $(oe(), n.spatialReference, e.spatialReference, W);
  }
  const i = qt(er, o, s);
  r.origin = Yt(S(), r.origin, i);
}
function Jn(e, t, n) {
  const r = Re(n.x, n.y, n.z ?? 0), s = Fe(e, new De({ origin: r }));
  if (!s) return;
  const o = Re(t.x, t.y, t.z ?? 0), i = Fe({ vertexAttributes: s, spatialReference: e.spatialReference, vertexSpace: new De({ origin: o }) }, me.absolute);
  if (!i) return;
  const { position: a, normal: c, tangent: l } = i;
  e.vertexAttributes.position = a, e.vertexAttributes.normal = c, e.vertexAttributes.tangent = l, e.vertexAttributesChanged();
}
function Kn(e, t, n) {
  const r = Rt, s = St;
  if (I(t, s, e.spatialReference)) {
    if (!I(n, r, e.spatialReference)) {
      const o = e.origin;
      return r[0] = o.x, r[1] = o.y, r[2] = o.z, void $(oe(), n.spatialReference, e.spatialReference, W);
    }
    Qn(e.vertexAttributes.position, s, r), e.vertexAttributesChanged();
  } else $(oe(), t.spatialReference, e.spatialReference, W);
}
function Qn(e, t, n) {
  if (e) for (let r = 0; r < e.length; r += 3) for (let s = 0; s < 3; s++) e[r + s] += t[s] - n[s];
}
const St = S(), Rt = S(), er = S();
function tr(e) {
  const { spatialReference: t, vertexSpace: n, untransformedBounds: r } = e, s = Xt(r, nr);
  if (ie(n) && e.transform && He(s, s, e.transform.localMatrix), n.type === "georeferenced") {
    const a = n.origin;
    return a && jn(s, s, a), ze(Me(s), t);
  }
  const o = Ee(t), i = n.origin;
  if (!Jt(o, t)) {
    const [a, c, l] = i;
    return new Kt({ xmin: a, ymin: c, zmin: l, xmax: a, ymax: c, zmax: l, spatialReference: t });
  }
  return Tt(t, i, Ye, o), He(s, s, Ye), Qt(s, o, 0, s, t, 0), ze(Me(s), t);
}
const Ye = be(), nr = _e(24);
async function rr(e, t, n) {
  const { source: r } = t, { loadGLTFMesh: s } = await st(import("./loadGLTFMesh-Cu4IkRx8.js"), n), o = await or(r, n);
  we(n);
  const i = s(new _({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), o.url, { resolveFile: sr(o), signal: n?.signal, expectedType: o.type, unitConversionDisabled: t.unitConversionDisabled });
  i.then(() => o.dispose(), () => o.dispose());
  const { vertexAttributes: a, components: c } = await i;
  e.vertexAttributes = a, e.components = c;
}
function sr(e) {
  const t = en(e.url);
  return (n) => {
    const r = tn(n, t, t), s = r ? r.replace(/^ *\.\//, "") : null;
    return (s ? e.files.get(s) : null) ?? n;
  };
}
async function or(e, t) {
  if (Array.isArray(e)) {
    if (!e.length) throw new re("mesh-load-external:missing-assets", "There must be at least one file to load");
    return e[0] instanceof File ? ir(e) : lr(e, t);
  }
  return Mt(e);
}
async function ar(e, t) {
  const { parts: n, assetMimeType: r, assetName: s } = e;
  if (n.length === 1) return new ye(n[0].partUrl);
  const o = await e.toBlob(t);
  return we(t), ye.fromBlob(o, jt(s, r));
}
function Mt(e) {
  return ye.fromBlob(e, jt(e.name, e.type));
}
function ir(e) {
  return Ft(e.map((t) => ({ name: t.name, mimeType: t.type, source: Mt(t) })));
}
async function lr(e, t) {
  const n = await nn(e.map(async (r) => {
    const s = await ar(r);
    return we(t), { name: r.assetName, mimeType: r.assetMimeType, source: s };
  }));
  if (rn(t)) throw n.forEach((r) => r.source.dispose()), sn();
  return Ft(n);
}
const Ct = /^model\/gltf\+json$/, Dt = /^model\/gltf-binary$/, Oe = /\.gltf$/i, cr = /\.glb$/i;
function Xe({ mimeType: e, source: t, name: n }) {
  return Ct.test(e) || Oe.test(n) ? { url: t.url, type: "gltf" } : Dt.test(e) || cr.test(n) ? { url: t.url, type: "glb" } : null;
}
function Ft(e) {
  const t = /* @__PURE__ */ new Map();
  let n = null, r = null;
  for (const o of e) {
    const { source: i, name: a } = o;
    n ??= Xe(o), a === "ESRI3DO_NORM.glb" && (r = Xe(o)), t.set(a, i.url), i.files.forEach((c, l) => t.set(l, c));
  }
  const s = r ?? n;
  if (s == null) throw new re("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new ye(s.url, () => e.forEach(({ source: o }) => o.dispose()), t, s.type);
}
let ye = class Lt {
  constructor(t, n = () => {
  }, r = /* @__PURE__ */ new Map(), s) {
    this.url = t, this.dispose = n, this.files = r, this.type = s;
  }
  static fromBlob(t, n) {
    const r = URL.createObjectURL(t);
    return new Lt(r, () => URL.revokeObjectURL(r), void 0, n);
  }
};
function jt(e, t) {
  return Ct.test(t) || Oe.test(e) ? "gltf" : Dt.test(t) || Oe.test(e) ? "glb" : void 0;
}
let E = class extends on {
  constructor(e) {
    super(e), this.externalSources = new an(), this._explicitDisplaySource = null, this.georeferenced = !1, this.addHandles(ln(() => this.externalSources, "after-remove", ({ item: t }) => {
      t === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: !0, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e) {
    if (e != null && !Be(e)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e, e && this.externalSources.every((t) => !On(t, e)) && this.externalSources.add(e);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e) {
    return this.externalSources.items.filter((t) => _n(t, e));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(Be);
  }
};
u([f()], E.prototype, "externalSources", void 0), u([f()], E.prototype, "displaySource", null), u([f()], E.prototype, "_implicitDisplaySource", null), u([f()], E.prototype, "_explicitDisplaySource", void 0), u([f()], E.prototype, "georeferenced", void 0), E = u([P("esri.geometry.support.meshUtils.Metadata")], E);
function ur() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = vr, r = 4 * e.length, s = new Float64Array(3 * r), o = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(2 * e.length * 3);
  let c = 0, l = 0, h = 0, d = 0;
  for (let m = 0; m < e.length; m++) {
    const p = e[m], g = c / 3;
    for (const b of t) a[d++] = g + b;
    const y = p.corners;
    for (let b = 0; b < 4; b++) {
      const F = y[b];
      let w = 0;
      i[h++] = 0.25 * n[b][0] + p.uvOrigin[0], i[h++] = p.uvOrigin[1] - 0.25 * n[b][1];
      for (let x = 0; x < 3; x++) p.axis[x] !== 0 ? (s[c++] = 0.5 * p.axis[x], o[l++] = p.axis[x]) : (s[c++] = 0.5 * F[w++], o[l++] = 0);
    }
  }
  return { position: s, normal: o, uv: i, faces: a };
}
function pr(e, t) {
  const n = e.components[0], r = n.faces, s = wr[t], o = 6 * s, i = new Array(6), a = new Array(r.length - 6);
  let c = 0, l = 0;
  for (let h = 0; h < r.length; h++) h >= o && h < o + 6 ? i[c++] = r[h] : a[l++] = r[h];
  if (e.vertexAttributes.uv != null) {
    const h = new Float32Array(e.vertexAttributes.uv), d = 4 * s * 2, m = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let p = 0; p < m.length; p++) h[d + p] = m[p];
    e.vertexAttributes.uv = h;
  }
  return e.components = [new J({ faces: i, material: n.material }), new J({ faces: a })], e;
}
function hr(e = 0) {
  const t = Math.round(8 * 2 ** e), n = 2 * t, r = (t - 1) * (n + 1) + 2 * n, s = new Float64Array(3 * r), o = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * ((t - 1) * n * 2));
  let c = 0, l = 0, h = 0, d = 0;
  for (let m = 0; m <= t; m++) {
    const p = m / t * Math.PI + 0.5 * Math.PI, g = Math.cos(p), y = Math.sin(p);
    v[2] = y;
    const b = m === 0 || m === t, F = b ? n - 1 : n;
    for (let w = 0; w <= F; w++) {
      const x = w / F * 2 * Math.PI;
      v[0] = -Math.sin(x) * g, v[1] = Math.cos(x) * g;
      for (let A = 0; A < 3; A++) s[c] = 0.5 * v[A], o[c] = v[A], ++c;
      i[l++] = (w + (b ? 0.5 : 0)) / n, i[l++] = m / t, m !== 0 && w !== n && (m !== t && (a[h++] = d, a[h++] = d + 1, a[h++] = d - n), m !== 1 && (a[h++] = d, a[h++] = d - n, a[h++] = d - n - 1)), d++;
    }
  }
  return { position: s, normal: o, uv: i, faces: a };
}
function fr(e = 0) {
  const n = Math.round(16 * 2 ** e), r = 4 * (n + 1) + 2 * n, s = new Float64Array(3 * r), o = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * (4 * n));
  let c = 0, l = 0, h = 0, d = 0, m = 0;
  for (let p = 0; p <= 5; p++) {
    const g = p === 0 || p === 5, y = p <= 1 || p >= 4, b = p === 2 || p === 4, F = g ? n - 1 : n;
    for (let w = 0; w <= F; w++) {
      const x = w / F * 2 * Math.PI, A = g ? 0 : 0.5;
      v[0] = A * Math.sin(x), v[1] = A * -Math.cos(x), v[2] = p <= 2 ? 0.5 : -0.5;
      for (let H = 0; H < 3; H++) s[c++] = v[H], o[l++] = y ? H === 2 ? p <= 1 ? 1 : -1 : 0 : H === 2 ? 0 : v[H] / A;
      i[h++] = (w + (g ? 0.5 : 0)) / n, i[h++] = p <= 1 ? 1 * p / 3 : p <= 3 ? 1 * (p - 2) / 3 + 1 / 3 : 1 * (p - 4) / 3 + 2 / 3, b || p === 0 || w === n || (p !== 5 && (a[d++] = m, a[d++] = m + 1, a[d++] = m - n), p !== 1 && (a[d++] = m, a[d++] = m - n, a[d++] = m - n - 1)), m++;
    }
  }
  return { position: s, normal: o, uv: i, faces: a };
}
function mr(e, t) {
  const n = typeof t == "number" ? t : t != null ? t.width : 1, r = typeof t == "number" ? t : t != null ? t.height : 1;
  switch (e) {
    case "up":
    case "down":
      return { width: n, depth: r };
    case "north":
    case "south":
      return { width: n, height: r };
    case "east":
    case "west":
      return { depth: n, height: r };
  }
}
function dr(e) {
  const t = K.facingAxisOrderSwap[e], n = K.position, r = K.normal, s = new Float64Array(n.length), o = new Float32Array(r.length);
  let i = 0;
  for (let a = 0; a < 4; a++) {
    const c = i;
    for (let l = 0; l < 3; l++) {
      const h = t[l], d = Math.abs(h) - 1, m = h >= 0 ? 1 : -1;
      s[i] = n[c + d] * m, o[i] = r[c + d] * m, i++;
    }
  }
  return { position: s, normal: o, uv: new Float32Array(K.uv), faces: new Uint32Array(K.faces), isPlane: !0 };
}
const B = 1, k = 2, G = 3, K = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [G, B, k], west: [-G, -B, k], north: [-B, G, k], south: [B, -G, k], up: [B, k, G], down: [B, -k, -G] } };
function ue(e, t, n) {
  e.isPlane || gr(e), xr(e, yr(n?.size, n?.unit, t.spatialReference));
  const r = de(t, n), s = t.spatialReference.isGeographic ? de(t) : r, o = Fe({ vertexAttributes: e, vertexSpace: s, spatialReference: t.spatialReference }, r, { allowBufferReuse: !0 });
  return { vertexAttributes: new fe({ ...o, uv: e.uv }), vertexSpace: r, components: [new J({ faces: e.faces, material: n?.material || null })], spatialReference: t.spatialReference };
}
function gr(e) {
  for (let t = 0; t < e.position.length; t += 3) e.position[t + 2] += 0.5;
}
function yr(e, t, n) {
  const r = Ln(t, n);
  if (e == null && r === 1) return null;
  if (e == null) return [r, r, r];
  if (typeof e == "number") {
    const s = e * r;
    return [s, s, s];
  }
  return [e.width != null ? e.width * r : r, e.depth != null ? e.depth * r : r, e.height != null ? e.height * r : r];
}
function xr(e, t) {
  if (t != null) {
    U[0] = t[0], U[4] = t[1], U[8] = t[2];
    for (let n = 0; n < e.position.length; n += 3) {
      for (let r = 0; r < 3; r++) v[r] = e.position[n + r];
      Ce(v, v, U);
      for (let r = 0; r < 3; r++) e.position[n + r] = v[r];
    }
    if (t[0] !== t[1] || t[1] !== t[2]) {
      U[0] = 1 / t[0], U[4] = 1 / t[1], U[8] = 1 / t[2];
      for (let n = 0; n < e.normal.length; n += 3) {
        for (let r = 0; r < 3; r++) v[r] = e.normal[n + r];
        Ce(v, v, U), cn(v, v);
        for (let r = 0; r < 3; r++) e.normal[n + r] = v[r];
      }
    }
  }
}
const vr = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, wr = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, v = S(), U = At(), N = () => ae.getLogger("esri.geometry.support.meshUtils.rotate");
function $r(e, t, n) {
  if (!e.vertexAttributes?.position || t[3] === 0) return;
  const { spatialReference: r, vertexSpace: s } = e, o = n?.origin ?? e.origin, i = n?.geographic, a = Ue(N, s, r, i);
  mt(e) ? br(e, t, o) : a ? Tr(e, t, o) : Ar(e, t, o);
}
function br(e, t, n) {
  e.transform ??= new se();
  const { vertexSpace: r, transform: s, spatialReference: o } = e, [i, a, c] = r.origin, l = new _({ x: i, y: a, z: c, spatialReference: o }), h = q;
  if (l.equals(n)) pe(h, 0, 0, 0);
  else if (!gt(h, n, e)) return void $(N(), n.spatialReference, o, W);
  En(et, he(t), ht(t));
  const d = ot(Je, et, $e, un, h), { localMatrix: m } = s, p = at(Je, d, m);
  s.scale = it(S(), p), lt(p, p, ct(q, s.scale));
  const g = s.rotationAxis;
  s.rotation = ft(p), s.rotationAngle === 0 && (s.rotationAxis = g), s.translation = ut(S(), p);
}
function Tr(e, t, n) {
  const r = e.spatialReference, s = Ee(r), o = Ot;
  if (!I(n, o, s) && ($(N(), n.spatialReference, s, "Falling back to mesh origin"), !I(e.origin, o, s))) return void $(N(), e.origin.spatialReference, s);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), h = a != null ? new Float32Array(a.length) : null, d = c != null ? new Float32Array(c.length) : null;
  Tt(s, o, xe, s), pn(Qe, xe);
  const m = Ke;
  Ce(he(Ke), he(t), Qe), m[3] = t[3], yt(i, r, l, s) && (a == null || h == null || xt(a, i, r, l, s, h)) && (c == null || d == null || vt(c, i, r, l, s, d)) ? (X(l, m, 3, o), wt(l, s, i, r) && (a == null || h == null || (X(h, m, 3), $t(h, i, r, l, s, a))) && (c == null || d == null || (X(d, m, 4), bt(d, i, r, l, s, c))) ? e.vertexAttributesChanged() : $(N(), s, r)) : $(N(), r, s);
}
function Ar(e, t, n) {
  const r = Ot;
  if (!I(n, r, e.spatialReference)) {
    const s = e.origin;
    return r[0] = s.x, r[1] = s.y, r[2] = s.z, void $(N(), n.spatialReference, e.spatialReference, W);
  }
  X(e.vertexAttributes.position, t, 3, r), X(e.vertexAttributes.normal, t, 3), X(e.vertexAttributes.tangent, t, 4), e.vertexAttributesChanged();
}
function X(e, t, n, r = $e) {
  if (e != null) {
    hn(xe, ht(t), he(t));
    for (let s = 0; s < e.length; s += n) {
      for (let o = 0; o < 3; o++) q[o] = e[s + o] - r[o];
      fn(q, q, xe);
      for (let o = 0; o < 3; o++) e[s + o] = q[o] + r[o];
    }
  }
}
const q = S(), Je = be(), Ke = pt(), xe = be(), Qe = At(), Ot = S(), et = In(), z = () => ae.getLogger("esri.geometry.support.meshUtils.scale");
function Sr(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r, spatialReference: s } = e, o = n?.origin ?? e.origin, i = n?.geographic, a = Ue(z, r, s, i);
  mt(e) ? Rr(e, t, o) : a ? Mr(e, t, o) : Cr(e, t, o);
}
function Rr(e, t, n) {
  e.transform ??= new se();
  const { vertexSpace: r, transform: s, spatialReference: o } = e, [i, a, c] = r.origin, l = new _({ x: i, y: a, z: c, spatialReference: o }), h = Y;
  if (l.equals(n)) pe(h, 0, 0, 0);
  else if (!gt(h, n, e)) return void $(z(), n.spatialReference, o, W);
  const d = pe(Dr, t, t, t), m = ot(tt, Un, $e, d, h), { localMatrix: p } = s, g = at(tt, m, p);
  s.scale = it(S(), g), lt(g, g, ct(Y, s.scale));
  const y = s.rotationAxis;
  s.rotation = ft(g), s.rotationAngle === 0 && (s.rotationAxis = y), s.translation = ut(S(), g);
}
function Mr(e, t, n) {
  const r = e.spatialReference, s = Ee(r), o = Et;
  if (!I(n, o, s) && ($(z(), n.spatialReference, s, "Falling back to mesh origin"), !I(e.origin, o, s))) return void $(z(), e.origin.spatialReference, s);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), h = a != null ? new Float32Array(a.length) : null, d = c != null ? new Float32Array(c.length) : null;
  yt(i, r, l, s) && (a == null || h == null || xt(a, i, r, l, s, h)) && (c == null || d == null || vt(c, i, r, l, s, d)) ? (_t(l, t, o), wt(l, s, i, r) && (a == null || h == null || $t(h, i, r, l, s, a)) && (c == null || d == null || bt(d, i, r, l, s, c)) ? e.vertexAttributesChanged() : $(z(), s, r)) : $(z(), r, s);
}
function Cr(e, t, n) {
  const r = Et;
  if (!I(n, r, e.spatialReference)) {
    const s = e.origin;
    return r[0] = s.x, r[1] = s.y, r[2] = s.z, void $(z(), n.spatialReference, e.spatialReference, W);
  }
  _t(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function _t(e, t, n = $e) {
  if (e) for (let r = 0; r < e.length; r += 3) {
    for (let s = 0; s < 3; s++) Y[s] = e[r + s] - n[s];
    mn(Y, Y, t);
    for (let s = 0; s < 3; s++) e[r + s] = Y[s] + n[s];
  }
}
const Y = S(), Dr = S(), tt = be(), Et = S();
var M;
const It = "esri.geometry.Mesh";
function L() {
  return ae.getLogger(It);
}
const Fr = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: me, local: De } };
let T = M = class extends dn.LoadableMixin(gn(bn)) {
  constructor(e) {
    super(e), this.components = null, this.vertexSpace = new me(), this.transform = null, this.metadata = new E(), this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new fe(), this.type = "mesh";
  }
  initialize() {
    (this.metadata.externalSources.length === 0 || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(yn(() => ({ vertexAttributes: this.vertexAttributes, components: this.components?.map((e) => e.clone()) }), () => this._clearSources(), { once: !0, sync: !0 }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : this.metadata.displaySource?.extent != null;
  }
  get _transformedExtent() {
    const { spatialReference: e, vertexSpace: t } = this, n = this;
    return tr({ get transform() {
      return n.transform;
    }, vertexSpace: t, spatialReference: e, untransformedBounds: this._untransformedBounds });
  }
  get _untransformedBounds() {
    const { vertexAttributes: { position: e }, components: t } = this;
    return e.length === 0 || t?.length === 0 ? xn(vn) : Me(e);
  }
  get origin() {
    const e = Rn(this.vertexSpace, this.spatialReference);
    if (e != null) return e;
    const { center: t, zmin: n } = this._transformedExtent;
    return new _({ x: t.x, y: t.y, z: n, spatialReference: this.spatialReference });
  }
  get extent() {
    return this.loaded || this.metadata?.displaySource?.extent == null ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(J.from(e)), this.notifyChange("components"));
  }
  removeComponent(e) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1) return this.components.splice(t, 1), void this.notifyChange("components");
      }
      L().error("removeComponent()", Pn);
    }
  }
  rotate(e, t, n, r) {
    return Tn(e, t, n, nt), $r(this, nt, r), this;
  }
  offset(e, t, n) {
    if (!this._checkIfLoaded("offset()")) return this;
    const { vertexSpace: r, vertexAttributes: s } = this, o = s?.position;
    if (!o) return this;
    if (ie(r)) {
      const [i, a, c] = r.origin;
      r.origin = Re(i + e, a + t, c + n);
    } else {
      for (let i = 0; i < o.length; i += 3) o[i] += e, o[i + 1] += t, o[i + 2] += n;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e, t) {
    return this._checkIfLoaded("scale()") ? (Sr(this, e, t), this) : this;
  }
  centerAt(e, t) {
    return this._checkIfLoaded("centerAt()") ? (Yn(this, e, t), this) : this;
  }
  load(e) {
    const { metadata: { displaySource: t } } = this;
    return t && this.addResolvingPromise(rr(this, t, e)), Promise.resolve(this);
  }
  addExternalSources(e) {
    this.metadata.externalSources.addMany(e);
  }
  updateDisplaySource(e) {
    this.metadata.displaySource = e;
  }
  clone() {
    return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(), this.vertexSpace.clone(), { preserveMetadata: !0 });
  }
  cloneAndModifyVertexAttributes(e, t, n) {
    let r = null;
    if (this.components) {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      r = this.components.map((a) => a.cloneWithDeduplication(o, i));
    }
    const s = { components: r, spatialReference: this.spatialReference, vertexAttributes: e, vertexSpace: t, transform: this.transform?.clone() ?? null, metadata: n?.preserveMetadata ? this.metadata.clone() : new E() };
    return new M(s);
  }
  cloneShallow() {
    return new M({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const [{ toBinaryGLTF: t }] = await Promise.all([import("./gltfexport-DEZ26aYQ.js"), this.load(e)]);
    return we(e), await t(this, e);
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.vertexAttributes.memoryUsage, this.components != null) for (const t of this.components) e += t.memoryUsage;
    return e;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e) {
    return !!this.loaded || (L().error(e, zn), !1);
  }
  static createBox(e, t) {
    if (!(e instanceof _)) return L().error(".createBox()", ee), null;
    const n = new M(ue(ur(), e, t));
    return t?.imageFace && t.imageFace !== "all" ? pr(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof _ ? new M(ue(hr(t?.densificationFactor || 0), e, t)) : (L().error(".createSphere()", ee), null);
  }
  static createCylinder(e, t) {
    return e instanceof _ ? new M(ue(fr(t?.densificationFactor || 0), e, t)) : (L().error(".createCylinder()", ee), null);
  }
  static createPlane(e, t) {
    if (!(e instanceof _)) return L().error(".createPlane()", ee), null;
    const n = t?.facing ?? "up", r = mr(n, t?.size);
    return new M(ue(dr(n), e, { ...t, size: r }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof wn)) return L().error(".createFromPolygon()", Hn), null;
    const n = Gn(e);
    return new M({ vertexAttributes: new fe({ position: n.position }), components: [new J({ faces: n.faces, shading: "flat", material: t?.material ?? null })], spatialReference: e.spatialReference, vertexSpace: new me() });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof _)) {
      const s = new Ze();
      throw L().error(".createfromGLTF()", s.message), s;
    }
    const { loadGLTFMesh: r } = await st(import("./loadGLTFMesh-Cu4IkRx8.js"), n);
    return new M(await r(e, t, n));
  }
  static async createFromFiles(e, t, n) {
    $n(L(), "`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'", { replacement: "SceneLayer.convertMesh", version: "4.29" });
    const r = (s) => L().error(".createFromFiles()", s.message);
    if (!(e instanceof _)) {
      const s = new Ze();
      throw r(s), s;
    }
    if (!n?.layer) throw new re("invalid:no-layer", "SceneLayer required for file to mesh conversion.");
    return n.layer.convertMesh(t, { location: e, ...n });
  }
  static createWithExternalSource(e, t, n) {
    const r = n?.extent ?? null, { spatialReference: s } = e, o = n?.transform?.clone() ?? new se(), i = de(e, n), a = n?.unitConversionDisabled, c = { source: t, extent: r, unitConversionDisabled: a }, l = new E();
    return l.externalSources.push(c), new M({ metadata: l, transform: o, vertexSpace: i, spatialReference: s });
  }
  static createIncomplete(e, t) {
    const { spatialReference: n } = e, r = t?.transform?.clone() ?? new se(), s = de(e, t), o = new M({ transform: r, vertexSpace: s, spatialReference: n });
    return o.addResolvingPromise(Promise.reject(new re("mesh-incomplete", "Mesh resources are not complete"))), o;
  }
};
u([f({ type: [J], json: { write: !0 } })], T.prototype, "components", void 0), u([f({ nonNullable: !0, types: Fr, constructOnly: !0, json: { write: !0 } })], T.prototype, "vertexSpace", void 0), u([f({ type: se, json: { write: !0 } })], T.prototype, "transform", void 0), u([f({ constructOnly: !0 })], T.prototype, "metadata", void 0), u([f()], T.prototype, "hasExtent", null), u([f()], T.prototype, "_transformedExtent", null), u([f()], T.prototype, "_untransformedBounds", null), u([f()], T.prototype, "origin", null), u([f({ readOnly: !0, json: { read: !1 } })], T.prototype, "extent", null), u([f({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], T.prototype, "hasZ", void 0), u([f({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], T.prototype, "hasM", void 0), u([f({ type: fe, nonNullable: !0, json: { write: !0 } })], T.prototype, "vertexAttributes", void 0), T = M = u([P(It)], T);
const nt = pt(), Jr = T;
export {
  Jr as $,
  ne as c,
  J as f,
  Nn as m,
  te as w
};
//# sourceMappingURL=Mesh-C64CSjtZ.js.map
