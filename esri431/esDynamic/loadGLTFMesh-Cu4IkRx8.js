import { s as L, U as P, bW as O, h6 as B, gg as D, gh as C, gi as U, cU as h, iV as z, aq as G, eQ as q } from "./main-DZxT3i7S.js";
import { e as S } from "./mat3f64-Dh9_zhFu.js";
import { w as N, m as Q, f as V, c as K } from "./Mesh-C64CSjtZ.js";
import { p as W } from "./MeshVertexAttributes-Ckunuqz3.js";
import { s as E } from "./meshVertexSpaceUtils-f18buSHF.js";
import { c as F, x as I, L as k, O as R, i as j, E as H, T as J, u as X } from "./BufferView-5VozJqYL.js";
import { t as Y, r as Z, u as ee, n as A } from "./vec3-Bk8n8qxi.js";
import { f as te, o as re, u as M } from "./vec4-v5ppMnQI.js";
import { e as ne } from "./types-ChhhI6OU.js";
import { loadGLTF as oe } from "./loader-DUGMkKCS.js";
import { n as se, o as ae, f as le, a as w, b as ie, l as ue, e as ce, c as fe, d as me } from "./DefaultMaterial_COLOR_GAMMA-CzXzkH2e.js";
import { B as pe } from "./vertexSpaceConversion-Xm0UohEX.js";
import { r as de } from "./resourceUtils-CeYHTFuO.js";
function ge(e, t, r) {
  const i = e.typedBuffer, o = e.typedBufferStride, a = t.typedBuffer, c = t.typedBufferStride, l = r ? r.count : t.count;
  let s = (r?.dstIndex ?? 0) * o, m = (r?.srcIndex ?? 0) * c;
  for (let u = 0; u < l; ++u) {
    for (let n = 0; n < 9; ++n) i[s + n] = a[m + n];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: ge }, Symbol.toStringTag, { value: "Module" }));
function xe(e, t, r) {
  const i = e.typedBuffer, o = e.typedBufferStride, a = t.typedBuffer, c = t.typedBufferStride, l = r ? r.count : t.count;
  let s = (r?.dstIndex ?? 0) * o, m = (r?.srcIndex ?? 0) * c;
  for (let u = 0; u < l; ++u) {
    for (let n = 0; n < 16; ++n) i[s + n] = a[m + n];
    s += o, m += c;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: xe }, Symbol.toStringTag, { value: "Module" }));
function $(e, t) {
  return new e(new ArrayBuffer(t * e.ElementCount * ne(e.ElementType)));
}
async function Ge(e, t, r) {
  const i = new se($e(r)), o = (await oe(i, t, r, !0)).model, a = o.lods.shift(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  o.textures.forEach((x, T) => c.set(T, he(x))), o.materials.forEach((x, T) => l.set(T, we(x, c)));
  const s = Te(a);
  for (const x of s.parts) be(s, x, l);
  const { position: m, normal: u, tangent: n, color: f, texCoord0: p } = s.vertexAttributes, d = E(e, r), b = e.spatialReference.isGeographic ? E(e) : d, v = pe({ vertexAttributes: { position: m.typedBuffer, normal: u?.typedBuffer, tangent: n?.typedBuffer }, vertexSpace: b, spatialReference: e.spatialReference }, d, { allowBufferReuse: !0, sourceUnit: r?.unitConversionDisabled ? void 0 : "meters" });
  if (!v) throw new L("load-gltf-mesh:vertex-space-projection", `Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);
  return { transform: null, vertexSpace: d, components: s.components, spatialReference: e.spatialReference, vertexAttributes: new W({ ...v, color: f?.typedBuffer, uv: p?.typedBuffer }) };
}
function $e(e) {
  const t = e?.resolveFile;
  return t ? { busy: !1, request: async (r, i, o) => {
    const a = t?.(r) ?? r;
    return (await P(a, { responseType: i === "image" ? "image" : i === "binary" || i === "image+type" ? "array-buffer" : "json", signal: o?.signal, timeout: 0 })).data;
  } } : null;
}
function y(e, t) {
  if (e == null) return "-";
  const r = e.typedBuffer;
  return `${O(t, r.buffer, () => t.size)}/${r.byteOffset}/${r.byteLength}`;
}
function ye(e) {
  return e != null ? e.toString() : "-";
}
function Te(e) {
  let t = 0;
  const r = { color: !1, tangent: !1, normal: !1, texCoord0: !1 }, i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = [];
  for (const c of e.parts) {
    const { attributes: { position: l, normal: s, color: m, tangent: u, texCoord0: n } } = c, f = `
      ${y(l, i)}/
      ${y(s, i)}/
      ${y(m, i)}/
      ${y(u, i)}/
      ${y(n, i)}/
      ${ye(c.transform)}
    `;
    let p = !1;
    const d = O(o, f, () => (p = !0, { start: t, length: l.count }));
    p && (t += l.count), s && (r.normal = !0), m && (r.color = !0), u && (r.tangent = !0), n && (r.texCoord0 = !0), a.push({ gltf: c, writeVertices: p, region: d });
  }
  return { vertexAttributes: { position: $(J, t), normal: r.normal ? $(j, t) : null, tangent: r.tangent ? $(F, t) : null, color: r.color ? $(I, t) : null, texCoord0: r.texCoord0 ? $(X, t) : null }, parts: a, components: [] };
}
function he(e) {
  return new N({ data: (de(e.data), e.data), wrap: Ce(e.parameters.wrap) });
}
function we(e, t) {
  const r = new B(Se(e.color, e.opacity)), i = e.emissiveFactor ? new B(Ee(e.emissiveFactor)) : null, o = (a) => a ? new K({ scale: a.scale ? [a.scale[0], a.scale[1]] : [1, 1], rotation: q(a.rotation ?? 0), offset: a.offset ? [a.offset[0], a.offset[1]] : [0, 0] }) : null;
  return new Q({ color: r, colorTexture: t.get(e.textureColor), normalTexture: t.get(e.textureNormal), emissiveColor: i, emissiveTexture: t.get(e.textureEmissive), occlusionTexture: t.get(e.textureOcclusion), alphaMode: Be(e.alphaMode), alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, metallic: e.metallicFactor, roughness: e.roughnessFactor, metallicRoughnessTexture: t.get(e.textureMetallicRoughness), colorTextureTransform: o(e.colorTextureTransform), normalTextureTransform: o(e.normalTextureTransform), occlusionTextureTransform: o(e.occlusionTextureTransform), emissiveTextureTransform: o(e.emissiveTextureTransform), metallicRoughnessTextureTransform: o(e.metallicRoughnessTextureTransform) });
}
function be(e, t, r) {
  t.writeVertices && ve(e, t);
  const { indices: i, attributes: o, primitiveType: a, material: c } = t.gltf;
  let l = ae(i || o.position.count, a);
  const s = t.region.start;
  if (s) {
    const m = new Uint32Array(l);
    for (let u = 0; u < l.length; u++) m[u] += s;
    l = m;
  }
  e.components.push(new V({ name: t.gltf.name, faces: l, material: r.get(c), shading: o.normal ? "source" : "flat", trustSourceNormals: !0 }));
}
function ve(e, t) {
  const { position: r, normal: i, tangent: o, color: a, texCoord0: c } = e.vertexAttributes, l = t.region.start, { attributes: s, transform: m } = t.gltf, u = s.position.count;
  if (Y(r.slice(l, u), s.position, m), s.normal != null && i != null) {
    const n = D(S(), m), f = i.slice(l, u);
    Z(f, s.normal, n), C(n) && ee(f, f);
  } else i != null && le(i, 0, 0, 1, { dstIndex: l, count: u });
  if (s.tangent != null && o != null) {
    const n = U(S(), m), f = o.slice(l, u);
    te(f, s.tangent, n), C(n) && re(f, f);
  } else o != null && w(o, 0, 0, 1, 1, { dstIndex: l, count: u });
  if (s.texCoord0 != null && c != null ? ie(c.slice(l, u), s.texCoord0) : c != null && ue(c, 0, 0, { dstIndex: l, count: u }), s.color != null && a != null) {
    const n = s.color, f = a.slice(l, u);
    if (n.elementCount === 4) n instanceof F ? M(f, n, 255) : n instanceof I ? ce(f, n) : n instanceof k && M(f, n, 1 / 256);
    else {
      w(f, 255, 255, 255, 255);
      const p = R.fromTypedArray(f.typedBuffer, f.typedBufferStride);
      n instanceof j ? A(p, n, 255) : n instanceof R ? fe(p, n) : n instanceof H && A(p, n, 1 / 256);
    }
  } else a != null && w(a.slice(l, u), 255, 255, 255, 255);
}
function Be(e) {
  switch (e) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function Ce(e) {
  return { horizontal: _(e.s), vertical: _(e.t) };
}
function _(e) {
  switch (e) {
    case h.CLAMP_TO_EDGE:
      return "clamp";
    case h.MIRRORED_REPEAT:
      return "mirror";
    case h.REPEAT:
      return "repeat";
  }
}
function g(e) {
  return e ** (1 / me) * 255;
}
function Se(e, t) {
  return z(g(e[0]), g(e[1]), g(e[2]), t);
}
function Ee(e) {
  return G(g(e[0]), g(e[1]), g(e[2]));
}
export {
  Ge as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-Cu4IkRx8.js.map
