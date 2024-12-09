import { a as Ae } from "./devEnvironmentUtils-CxrVv3RG.js";
import { eb as P, d$ as C, dZ as L, mj as Me, ap as G, ir as Oe, ei as ee, mk as Re, ml as _e, gJ as re, mm as Be, jT as me, U as Ce, B as fe, s as Se, mn as ge, fZ as ne, mo as pe, kF as W, cU as ie, G as Ee, mp as Pe, gg as Le, gh as oe, gi as Fe, eg as Ne, dY as Ge, mq as ae, ed as Ue, ao as ke, iX as je } from "./main-DZxT3i7S.js";
import { t as X, e as xe } from "./mat3f64-Dh9_zhFu.js";
import { o as ue, r as qe, e as De } from "./mat4f64-Dn1WEGBx.js";
import { r as He, e as H, o as Ve, a as ze, C as be, B as Z, s as We, t as Ze, n as Je, b as Ke, c as V } from "./AttributeArray-BtnSbwfp.js";
import { c as Qe, x as ye, L as Xe, i as $e, O as Ye, E as et } from "./BufferView-5VozJqYL.js";
import { e as tt, f as st, l as le, o as ce } from "./vec3-Bk8n8qxi.js";
import { n as rt, s as he } from "./vec4-v5ppMnQI.js";
import { n as nt, d as U, o as it, g as ot, t as at, h as ut } from "./DefaultMaterial_COLOR_GAMMA-CzXzkH2e.js";
import { r as Y } from "./resourceUtils-CeYHTFuO.js";
import { t as lt } from "./NestedMap-Ddo7BfvO.js";
import { t as ct, l as we } from "./Indices-63AB7QEp.js";
import { t as ht } from "./requestImageUtils-CC_XkkTG.js";
import { t as j } from "./orientedBoundingBox-Dt2pL5Yb.js";
import { t as dt, e as te, i as O, n as mt } from "./basicInterfaces-Dsf65ICa.js";
import { S as ft } from "./triangle-COwGjH-R.js";
import { s as gt } from "./Util-w2rx0wX_.js";
import { e as v } from "./VertexAttribute-DqD5S0a2.js";
import { a as de } from "./NormalAttribute.glsl-zjlmf2fv.js";
function pt(n, e) {
  if (!n) return !1;
  const { size: t, data: s, indices: l } = n;
  P(e, 0, 0, 0), P(w, 0, 0, 0);
  let u = 0, i = 0;
  for (let a = 0; a < l.length - 2; a += 3) {
    const c = l[a] * t, r = l[a + 1] * t, o = l[a + 2] * t;
    P(p, s[c], s[c + 1], s[c + 2]), P(S, s[r], s[r + 1], s[r + 2]), P(z, s[o], s[o + 1], s[o + 2]);
    const h = ft(p, S, z);
    h ? (C(p, p, S), C(p, p, z), L(p, p, 1 / 3 * h), C(e, e, p), u += h) : (C(w, w, p), C(w, w, S), C(w, w, z), i += 3);
  }
  return (i !== 0 || u !== 0) && (u !== 0 ? (L(e, e, 1 / u), !0) : i !== 0 && (L(e, w, 1 / i), !0));
}
function xt(n, e) {
  if (!n) return !1;
  const { size: t, data: s, indices: l } = n;
  P(e, 0, 0, 0);
  let u = -1, i = 0;
  for (let a = 0; a < l.length; a++) {
    const c = l[a] * t;
    u !== c && (e[0] += s[c], e[1] += s[c + 1], e[2] += s[c + 2], i++), u = c;
  }
  return i > 1 && L(e, e, 1 / i), i > 0;
}
function bt(n, e, t) {
  if (!n) return !1;
  P(t, 0, 0, 0), P(w, 0, 0, 0);
  let s = 0, l = 0;
  const { size: u, data: i, indices: a } = n, c = a.length - 1, r = c + (e ? 2 : 0);
  for (let o = 0; o < r; o += 2) {
    const h = o < c ? o + 1 : 0, m = a[o < c ? o : c] * u, f = a[h] * u;
    p[0] = i[m], p[1] = i[m + 1], p[2] = i[m + 2], S[0] = i[f], S[1] = i[f + 1], S[2] = i[f + 2], L(p, C(p, p, S), 0.5);
    const d = Me(p, S);
    d > 0 ? (C(t, t, L(p, p, d)), s += d) : s === 0 && (C(w, w, p), l++);
  }
  return s !== 0 ? (L(t, t, 1 / s), !0) : l !== 0 && (L(t, w, 1 / l), !0);
}
const p = G(), S = G(), z = G(), w = G();
class yt {
  constructor() {
    this.uid = Oe();
  }
}
class $t extends yt {
  constructor(e) {
    super(), this.highlightGroupName = e, this.channel = dt.Highlight;
  }
}
class J extends He {
  constructor(e, t, s = null, l = H.Mesh, u = null, i = -1) {
    super(), this.material = e, this.mapPositions = s, this.type = l, this.objectAndLayerIdColor = u, this.edgeIndicesLength = i, this.highlights = /* @__PURE__ */ new Set(), this._highlightGroupCounts = /* @__PURE__ */ new Map(), this.visible = !0, this._attributes = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [a, c] of t) this._attributes.set(a, { ...c, indices: ct(c.indices) }), a === v.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._attributes.get(a).indices.length : this.edgeIndicesLength);
  }
  instantiate(e = {}) {
    const t = new J(e.material || this.material, [], this.mapPositions, this.type, this.objectAndLayerIdColor, this.edgeIndicesLength);
    return this._attributes.forEach((s, l) => {
      s.exclusive = !1, t._attributes.set(l, s);
    }), t._boundingInfo = this._boundingInfo, t.transformation = e.transformation || this.transformation, t;
  }
  get attributes() {
    return this._attributes;
  }
  getMutableAttribute(e) {
    let t = this._attributes.get(e);
    return t && !t.exclusive && (t = { ...t, exclusive: !0, data: Ve(t.data) }, this._attributes.set(e, t)), t;
  }
  setAttributeData(e, t) {
    const s = this._attributes.get(e);
    s && this._attributes.set(e, { ...s, exclusive: !0, data: t });
  }
  get indexCount() {
    return this._attributes.values().next().value.indices?.length ?? 0;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return this._boundingInfo == null && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(e) {
    return !!(this.type === H.Mesh ? this._computeAttachmentOriginTriangles(e) : this.type === H.Line ? this._computeAttachmentOriginLines(e) : this._computeAttachmentOriginPoints(e)) && (this._transformation != null && ee(e, e, this._transformation), !0);
  }
  _computeAttachmentOriginTriangles(e) {
    const t = this.attributes.get(v.POSITION);
    return pt(t, e);
  }
  _computeAttachmentOriginLines(e) {
    const t = this.attributes.get(v.POSITION);
    return bt(t, wt(this.material.parameters, t), e);
  }
  _computeAttachmentOriginPoints(e) {
    const t = this.attributes.get(v.POSITION);
    return xt(t, e);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const e = this.attributes.get(v.POSITION);
    if (!e || e.indices.length === 0) return null;
    const t = this.type === H.Mesh ? 3 : 1;
    gt(e.indices.length % t == 0, "Indexing error: " + e.indices.length + " not divisible by " + t);
    const s = we(e.indices.length / t);
    return new ze(s, t, e);
  }
  get transformation() {
    return this._transformation ?? ue;
  }
  set transformation(e) {
    this._transformation = e && e !== ue ? qe(e) : null;
  }
  get highlightGroups() {
    return this._highlightGroupCounts;
  }
  get hasHighlights() {
    return this._highlightGroupCounts.size > 0;
  }
  foreachHighlightGroup(e) {
    this._highlightGroupCounts.forEach((t, s) => e(s));
  }
  allocateIdAndHighlight(e) {
    const t = new $t(e);
    return this.addHighlight(t);
  }
  addHighlight(e) {
    this.highlights.add(e);
    const { highlightGroupName: t } = e, s = (this._highlightGroupCounts.get(t) ?? 0) + 1;
    return this._highlightGroupCounts.set(t, s), e;
  }
  removeHighlight(e) {
    if (this.highlights.delete(e)) {
      const { highlightGroupName: t } = e, s = this._highlightGroupCounts.get(t) ?? 0;
      s <= 1 ? this._highlightGroupCounts.delete(t) : this._highlightGroupCounts.set(t, s - 1);
    }
  }
}
function wt(n, e) {
  return !(!("isClosed" in n) || !n.isClosed) && e.indices.length > 2;
}
function q(n) {
  if (n == null) return null;
  const e = n.offset != null ? n.offset : Re, t = n.rotation != null ? n.rotation : 0, s = n.scale != null ? n.scale : _e, l = X(1, 0, 0, 0, 1, 0, e[0], e[1], 1), u = X(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1), i = X(s[0], 0, 0, 0, s[1], 0, 0, 0, 1), a = xe();
  return re(a, u, i), re(a, l, a), a;
}
class vt {
  constructor() {
    this.geometries = new Array(), this.materials = new Array(), this.textures = new Array();
  }
}
class Tt {
  constructor(e, t, s) {
    this.name = e, this.lodThreshold = t, this.pivotOffset = s, this.stageResources = new vt(), this.numberOfVertices = 0;
  }
}
const B = () => Ee.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
async function It(n, e) {
  const t = await At(n, e), s = await Bt(t.textureDefinitions ?? {}, e);
  let l = 0;
  for (const u in s) if (s.hasOwnProperty(u)) {
    const i = s[u];
    l += i?.image ? i.image.width * i.image.height * 4 : 0;
  }
  return { resource: t, textures: s, size: l + Be(t) };
}
async function At(n, e) {
  const t = e?.streamDataRequester;
  if (t) return Mt(n, t, e);
  const s = await me(Ce(n, e));
  if (s.ok === !0) return s.value.data;
  fe(s.error), ve(s.error);
}
async function Mt(n, e, t) {
  const s = await me(e.request(n, "json", t));
  if (s.ok === !0) return s.value;
  fe(s.error), ve(s.error.details.url);
}
function ve(n) {
  throw new Se("", `Request for object resource failed: ${n}`);
}
function Ot(n) {
  const e = n.params, t = e.topology;
  let s = !0;
  switch (e.vertexAttributes || (B().warn("Geometry must specify vertex attributes"), s = !1), e.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const u = e.faces;
      if (u) {
        if (e.vertexAttributes) for (const i in e.vertexAttributes) {
          const a = u[i];
          a?.values ? (a.valueType != null && a.valueType !== "UInt32" && (B().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`), s = !1), a.valuesPerElement != null && a.valuesPerElement !== 1 && (B().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`), s = !1)) : (B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`), s = !1);
        }
      } else B().warn("Indexed geometries must specify faces"), s = !1;
      break;
    }
    default:
      B().warn(`Unsupported topology '${t}'`), s = !1;
  }
  n.params.material || (B().warn("Geometry requires material"), s = !1);
  const l = n.params.vertexAttributes;
  for (const u in l)
    l[u].values || (B().warn("Geometries with externally defined attributes are not yet supported"), s = !1);
  return s;
}
function Rt(n, e) {
  const t = new Array(), s = new Array(), l = new Array(), u = new lt(), i = n.resource, a = ge.parse(i.version || "1.0", "wosr");
  St.validate(a);
  const c = i.model.name, r = i.model.geometries, o = i.materialDefinitions ?? {}, h = n.textures;
  let m = 0;
  const f = /* @__PURE__ */ new Map();
  for (let d = 0; d < r.length; d++) {
    const g = r[d];
    if (!Ot(g)) continue;
    const b = Ct(g), T = g.params.vertexAttributes, A = [], I = (x) => {
      if (g.params.topology === "PerAttributeArray") return null;
      const M = g.params.faces;
      for (const _ in M) if (_ === x) return M[_].values;
      return null;
    }, F = T[v.POSITION], D = F.values.length / F.valuesPerElement;
    for (const x in T) {
      const M = T[x], _ = M.values, Q = I(x) ?? we(D);
      A.push([x, new j(_, Q, M.valuesPerElement, !0)]);
    }
    const R = b.texture, y = h && h[R];
    if (y && !f.has(R)) {
      const { image: x, parameters: M } = y, _ = new be(x, M);
      s.push(_), f.set(R, _);
    }
    const N = f.get(R), K = N ? N.id : void 0, E = b.material;
    let $ = u.get(E, R);
    if ($ == null) {
      const x = o[E.slice(E.lastIndexOf("/") + 1)].params;
      x.transparency === 1 && (x.transparency = 0);
      const M = y && y.alphaChannelUsage, _ = x.transparency > 0 || M === "transparency" || M === "maskAndTransparency", Q = y ? Te(y.alphaChannelUsage) : void 0, se = { ambient: ne(x.diffuse), diffuse: ne(x.diffuse), opacity: 1 - (x.transparency || 0), transparent: _, textureAlphaMode: Q, textureAlphaCutoff: 0.33, textureId: K, initTextureTransparent: !0, doubleSided: !0, cullFace: te.None, colorMixMode: x.externalColorMixMode || "tint", textureAlphaPremultiplied: y?.parameters.preMultiplyAlpha ?? !1 };
      e?.materialParameters && Object.assign(se, e.materialParameters), $ = new Z(se, e), u.set(E, R, $);
    }
    l.push($);
    const Ie = new J($, A);
    m += A.find((x) => x[0] === v.POSITION)?.[1]?.indices.length ?? 0, t.push(Ie);
  }
  return { engineResources: [{ name: c, stageResources: { textures: s, materials: l, geometries: t }, pivotOffset: i.model.pivotOffset, numberOfVertices: m, lodThreshold: null }], referenceBoundingBox: _t(t) };
}
function _t(n) {
  const e = pe();
  return n.forEach((t) => {
    const s = t.boundingInfo;
    s != null && (W(e, s.bbMin), W(e, s.bbMax));
  }), e;
}
async function Bt(n, e) {
  const t = new Array();
  for (const u in n) {
    const i = n[u], a = i.images[0].data;
    if (!a) {
      B().warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const c = i.encoding + ";base64," + a, r = "/textureDefinitions/" + u, o = i.channels === "rgba" ? i.alphaChannelUsage || "transparency" : "none", h = { noUnpackFlip: !0, wrap: { s: ie.REPEAT, t: ie.REPEAT }, preMultiplyAlpha: Te(o) !== O.Opaque }, m = e?.disableTextures ? Promise.resolve(null) : ht(c, e);
    t.push(m.then((f) => ({ refId: r, image: f, parameters: h, alphaChannelUsage: o })));
  }
  const s = await Promise.all(t), l = {};
  for (const u of s) l[u.refId] = u;
  return l;
}
function Te(n) {
  switch (n) {
    case "mask":
      return O.Mask;
    case "maskAndTransparency":
      return O.MaskBlend;
    case "none":
      return O.Opaque;
    default:
      return O.Blend;
  }
}
function Ct(n) {
  const e = n.params;
  return { id: 1, material: e.material, texture: e.texture, region: e.texture };
}
const St = new ge(1, 2, "wosr");
async function ns(n, e) {
  const t = Et(Ae(n));
  if (t.fileType === "wosr") {
    const h = await (e.cache ? e.cache.loadWOSR(t.url, e) : It(t.url, e)), { engineResources: m, referenceBoundingBox: f } = Rt(h, e);
    return { lods: m, referenceBoundingBox: f, isEsriSymbolResource: !1, isWosr: !0 };
  }
  let s;
  if (e.cache) s = await e.cache.loadGLTF(t.url, e, !!e.usePBR);
  else {
    const { loadGLTF: h } = await import("./loader-DUGMkKCS.js");
    s = await h(new nt(e.streamDataRequester), t.url, e, e.usePBR);
  }
  const l = s.model.meta?.ESRI_proxyEllipsoid, u = s.meta.isEsriSymbolResource && l != null && s.meta.ESRI_webstyle === "EsriRealisticTreesStyle";
  u && !s.customMeta.esriTreeRendering && (s.customMeta.esriTreeRendering = !0, Gt(s, l));
  const i = !!e.usePBR, a = s.meta.isEsriSymbolResource ? { usePBR: i, isSchematic: !1, treeRendering: u, mrrFactors: We } : { usePBR: i, isSchematic: !1, treeRendering: !1, mrrFactors: Ze }, c = { ...e.materialParameters, treeRendering: u }, { engineResources: r, referenceBoundingBox: o } = Pt(s, a, c, e, t.specifiedLodIndex);
  return { lods: r, referenceBoundingBox: o, isEsriSymbolResource: s.meta.isEsriSymbolResource, isWosr: !1 };
}
function Et(n) {
  const e = n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  return e ? { fileType: "gltf", url: e[1], specifiedLodIndex: e[4] != null ? Number(e[4]) : null } : n.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: n, specifiedLodIndex: null } : { fileType: "unknown", url: n, specifiedLodIndex: null };
}
function Pt(n, e, t, s, l) {
  const u = n.model, i = new Array(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), r = u.lods.length, o = pe();
  return u.lods.forEach((h, m) => {
    const f = s.skipHighLods === !0 && (r > 1 && m === 0 || r > 3 && m === 1) || s.skipHighLods === !1 && l != null && m !== l;
    if (f && m !== 0) return;
    const d = new Tt(h.name, h.lodThreshold, [0, 0, 0]);
    h.parts.forEach((g) => {
      const b = f ? new Z({}, s) : Lt(u, g, d, e, t, a, c, s), { geometry: T, vertexCount: A } = Ft(g, b ?? new Z({}, s)), I = T.boundingInfo;
      I != null && m === 0 && (W(o, I.bbMin), W(o, I.bbMax)), b != null && (d.stageResources.geometries.push(T), d.numberOfVertices += A);
    }), f || i.push(d);
  }), { engineResources: i, referenceBoundingBox: o };
}
function Lt(n, e, t, s, l, u, i, a) {
  const c = e.material + (e.attributes.normal ? "_normal" : "") + (e.attributes.color ? "_color" : "") + (e.attributes.texCoord0 ? "_texCoord0" : "") + (e.attributes.tangent ? "_tangent" : ""), r = n.materials.get(e.material), o = e.attributes.texCoord0 != null, h = e.attributes.normal != null;
  if (r == null) return null;
  const m = Nt(r.alphaMode);
  if (!u.has(c)) {
    if (o) {
      const y = (N, K = !1) => {
        if (N != null && !i.has(N)) {
          const E = n.textures.get(N);
          if (E != null) {
            const $ = E.data;
            i.set(N, new be(Y($) ? $.data : $, { ...E.parameters, preMultiplyAlpha: !Y($) && K, encoding: Y($) && $.encoding != null ? $.encoding : void 0 }));
          }
        }
      };
      y(r.textureColor, m !== O.Opaque), y(r.textureNormal), y(r.textureOcclusion), y(r.textureEmissive), y(r.textureMetallicRoughness);
    }
    const d = r.color[0] ** (1 / U), g = r.color[1] ** (1 / U), b = r.color[2] ** (1 / U), T = r.emissiveFactor[0] ** (1 / U), A = r.emissiveFactor[1] ** (1 / U), I = r.emissiveFactor[2] ** (1 / U), F = r.textureColor != null && o ? i.get(r.textureColor) : null, D = Je({ normalTexture: r.textureNormal, metallicRoughnessTexture: r.textureMetallicRoughness, metallicFactor: r.metallicFactor, roughnessFactor: r.roughnessFactor, emissiveTexture: r.textureEmissive, emissiveFactor: r.emissiveFactor, occlusionTexture: r.textureOcclusion }), R = r.normalTextureTransform?.scale != null ? r.normalTextureTransform?.scale : Pe;
    u.set(c, new Z({ ...s, transparent: m === O.Blend, customDepthTest: mt.Lequal, textureAlphaMode: m, textureAlphaCutoff: r.alphaCutoff, diffuse: [d, g, b], ambient: [d, g, b], opacity: r.opacity, doubleSided: r.doubleSided, doubleSidedType: "winding-order", cullFace: r.doubleSided ? te.None : te.Back, hasVertexColors: !!e.attributes.color, hasVertexTangents: !!e.attributes.tangent, normalType: h ? de.Attribute : de.ScreenDerivative, castShadows: !0, receiveShadows: r.receiveShadows, receiveAmbientOcclusion: r.receiveAmbientOcclustion, textureId: F?.id, colorMixMode: r.colorMixMode, normalTextureId: r.textureNormal != null && o ? i.get(r.textureNormal).id : void 0, textureAlphaPremultiplied: F != null && !!F.parameters.preMultiplyAlpha, occlusionTextureId: r.textureOcclusion != null && o ? i.get(r.textureOcclusion).id : void 0, emissiveTextureId: r.textureEmissive != null && o ? i.get(r.textureEmissive).id : void 0, metallicRoughnessTextureId: r.textureMetallicRoughness != null && o ? i.get(r.textureMetallicRoughness).id : void 0, emissiveFactor: [T, A, I], mrrFactors: D ? Ke : [r.metallicFactor, r.roughnessFactor, s.mrrFactors[2]], isSchematic: D, colorTextureTransformMatrix: q(r.colorTextureTransform), normalTextureTransformMatrix: q(r.normalTextureTransform), scale: [R[0], R[1]], occlusionTextureTransformMatrix: q(r.occlusionTextureTransform), emissiveTextureTransformMatrix: q(r.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: q(r.metallicRoughnessTextureTransform), ...l }, a));
  }
  const f = u.get(c);
  if (t.stageResources.materials.push(f), o) {
    const d = (g) => {
      g != null && t.stageResources.textures.push(i.get(g));
    };
    d(r.textureColor), d(r.textureNormal), d(r.textureOcclusion), d(r.textureEmissive), d(r.textureMetallicRoughness);
  }
  return f;
}
function Ft(n, e) {
  const t = n.attributes.position.count, s = it(n.indices || t, n.primitiveType), l = V(3 * t), { typedBuffer: u, typedBufferStride: i } = n.attributes.position;
  tt(l, u, n.transform, 3, i);
  const a = [[v.POSITION, new j(l, s, 3, !0)]];
  if (n.attributes.normal != null) {
    const r = V(3 * t), { typedBuffer: o, typedBufferStride: h } = n.attributes.normal;
    Le(k, n.transform), st(r, o, k, 3, h), oe(k) && le(r, r), a.push([v.NORMAL, new j(r, s, 3, !0)]);
  }
  if (n.attributes.tangent != null) {
    const r = V(4 * t), { typedBuffer: o, typedBufferStride: h } = n.attributes.tangent;
    Fe(k, n.transform), rt(r, o, k, 4, h), oe(k) && le(r, r, 4), a.push([v.TANGENT, new j(r, s, 4, !0)]);
  }
  if (n.attributes.texCoord0 != null) {
    const r = V(2 * t), { typedBuffer: o, typedBufferStride: h } = n.attributes.texCoord0;
    ot(r, o, 2, h), a.push([v.UV0, new j(r, s, 2, !0)]);
  }
  const c = n.attributes.color;
  if (c != null) {
    const r = new Uint8Array(4 * t);
    c.elementCount === 4 ? c instanceof Qe ? he(r, c, 255) : c instanceof ye ? at(r, c) : c instanceof Xe && he(r, c, 1 / 256) : (r.fill(255), c instanceof $e ? ce(r, c.typedBuffer, 255, 4, c.typedBufferStride) : n.attributes.color instanceof Ye ? ut(r, c.typedBuffer, 4, n.attributes.color.typedBufferStride) : n.attributes.color instanceof et && ce(r, c.typedBuffer, 1 / 256, 4, c.typedBufferStride)), a.push([v.COLOR, new j(r, s, 4, !0)]);
  }
  return { geometry: new J(e, a), vertexCount: t };
}
const k = xe();
function Nt(n) {
  switch (n) {
    case "BLEND":
      return O.Blend;
    case "MASK":
      return O.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return O.Opaque;
  }
}
function Gt(n, e) {
  for (let t = 0; t < n.model.lods.length; ++t) {
    const s = n.model.lods[t];
    for (const l of s.parts) {
      const u = l.attributes.normal;
      if (u == null) return;
      const i = l.attributes.position, a = i.count, c = G(), r = G(), o = G(), h = new Uint8Array(4 * a), m = new Float64Array(3 * a), f = Ne(De(), l.transform);
      let d = 0, g = 0;
      for (let b = 0; b < a; b++) {
        i.getVec(b, r), u.getVec(b, c), ee(r, r, l.transform), Ge(o, r, e.center), ae(o, o, e.radius);
        const T = o[2], A = Ue(o), I = Math.min(0.45 + 0.55 * A * A, 1);
        ae(o, o, e.radius), f !== null && ee(o, o, f), ke(o, o), t + 1 !== n.model.lods.length && n.model.lods.length > 1 && je(o, o, c, T > -1 ? 0.2 : Math.min(-4 * T - 3.8, 1)), m[d] = o[0], m[d + 1] = o[1], m[d + 2] = o[2], d += 3, h[g] = 255 * I, h[g + 1] = 255 * I, h[g + 2] = 255 * I, h[g + 3] = 255, g += 4;
      }
      l.attributes.normal = new $e(m), l.attributes.color = new ye(h);
    }
  }
}
export {
  ns as fetch,
  Et as parseUrl
};
//# sourceMappingURL=objectResourceUtils-Bc7EK1_T.js.map
