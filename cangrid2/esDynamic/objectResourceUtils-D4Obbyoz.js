import { a as Qo } from "./devEnvironmentUtils-Dc_oIuhN.js";
import { ct as wi, qT as ea, qU as ta, bL as Zr, cu as ra, kE as ia, bS as Mi, aH as Ge, dE as Nt, jf as gr, aG as C, je as oa, hQ as Ci, dG as Ae, h$ as he, aD as wr, fL as V, dJ as ue, dI as me, qV as aa, en as we, fq as na, D as Mr, s as St, da as sa, eA as Kr, lR as la, gm as ht, mK as mt, dK as Qr, qW as ca, jS as da, ma as ua, fE as Bt, mc as ha, hP as Et, iz as Ne, eX as ma, og as fa, aN as Oi, qX as pa, bB as va, eq as it, qY as ga, qZ as xa, dF as Dt, aF as kt, i0 as Ze, h_ as zt, q_ as Ri, q$ as Ii, a5 as Ta, cC as Yt, mG as xr, O as m, cx as $i, as as oe, hM as Cr, j9 as Or, P as G, Q as Rr, e2 as Pi, r0 as Li, S as Ni, T as _a, fH as Ve, fD as Xt, ja as ba, b0 as Ct, hC as Tr, aC as Sa, cA as Ea, a9 as ya, r1 as Aa, iC as Di, $ as wa, _ as Fi, mI as Bi, r2 as zi, jD as Gt, cy as ei, cz as Ma, cI as Ca, oi as ti } from "./main-DHXLMse1.js";
import { t as sr, e as yt, o as ct } from "./mat3f64-Dh9_zhFu.js";
import { o as Vt, r as Oa, e as Jt } from "./mat4f64-Dn1WEGBx.js";
import { x as Zt, c as _r, y as Ra, u as Ia, q as $a, i as Ut, L as Pa, O as La, E as Na } from "./BufferView-D_fLeXDB.js";
import { e as Da, f as Fa, l as ri, o as ii } from "./vec3-C9VLTIyn.js";
import { n as Ba, s as oi } from "./vec4-BY5DdInc.js";
import { l as za, n as Ga, g as qe, o as Va, h as Ua, t as ja, i as Ha } from "./DefaultMaterial_COLOR_GAMMA-KFo3nC0i.js";
import { r as lr } from "./resourceUtils-CJo0rpDH.js";
import { t as Wa } from "./NestedMap-CJlcHrNH.js";
import { t as qa, l as Gi } from "./Indices-DY3T2zoU.js";
import { t as Vi } from "./requestImageUtils-C_AbJRNu.js";
import { I as ka, L as Ya, t as Xe } from "./orientedBoundingBox-D36TMfp_.js";
import { t as Xa, u as vt, a as br, i as Ja, N as Me, s as X, O as Ui, e as Ce, n as At } from "./basicInterfaces-Dnf5pTeQ.js";
import { s as W } from "./Util-d5_9qOC-.js";
import { s as ji, _ as Hi, V as Ee } from "./sphere-DLzBE5sm.js";
import { v as Za } from "./lineSegment-rhK_3t7n.js";
import "./plane-Dj7ciS27.js";
import { e as p } from "./VertexAttribute-CAkzp1tV.js";
import { c as be, G as Fe, L as nt, D as Ue, R as ye, O as fe, X as ai, E as Ka, I as ne, t as Qa, _ as en, f as tn } from "./enums-DDkmfb-t.js";
import { c as ot, a as rn, e as Wi, d as on } from "./Texture-D-YIHT8g.js";
import { H as an } from "./InterleavedLayout-B7PwHE5d.js";
import { n as Te, a as Z, t as Kt, o as z, b as cr, r as dr } from "./NormalAttribute.glsl-C_qNZYZT.js";
import { o as s, n as wt } from "./interfaces-Aq8q9x0N.js";
import { l as qi, S as Ir, _ as $r, h as nn, o as sn } from "./renderState-DjM_esgh.js";
import { a as F } from "./BindType-9iOk18Ed.js";
import { o as ln, r as cn } from "./doublePrecisionUtils-BJbYwoii.js";
function Ot(t, e = !1) {
  return t <= wi ? e ? new Array(t).fill(0) : new Array(t) : new Float32Array(t);
}
function dn(t) {
  t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Te.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Te.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Te.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Te.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}
let ee = class {
  constructor(e, r, i, a, o = null) {
    if (this.name = e, this.type = r, this.arraySize = o, this.bind = { [F.Pass]: null, [F.Draw]: null }, a) switch (i) {
      case F.Pass:
        this.bind[F.Pass] = a;
        break;
      case F.Draw:
        this.bind[F.Draw] = a;
    }
  }
  equals(e) {
    return this.type === e.type && this.name === e.name && this.arraySize === e.arraySize;
  }
}, gt = class extends ee {
  constructor(e, r) {
    super(e, "sampler2D", F.Draw, (i, a, o) => i.bindTexture(e, r(a, o)));
  }
};
function ki({ code: t }, e) {
  e.doublePrecisionRequiresObfuscation ? t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`) : t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
}
let ce = class extends ee {
  constructor(e, r) {
    super(e, "vec3", F.Draw, (i, a, o, n) => i.setUniform3fv(e, r(a, o, n)));
  }
}, J = class extends ee {
  constructor(e, r) {
    super(e, "vec3", F.Pass, (i, a, o) => i.setUniform3fv(e, r(a, o)));
  }
}, se = class extends ee {
  constructor(e, r) {
    super(e, "float", F.Pass, (i, a, o) => i.setUniform1f(e, r(a, o)));
  }
}, Yi = class extends ee {
  constructor(e, r) {
    super(e, "mat3", F.Draw, (i, a, o) => i.setUniformMatrix3fv(e, r(a, o)));
  }
}, pe = class extends ee {
  constructor(e, r) {
    super(e, "mat3", F.Pass, (i, a, o) => i.setUniformMatrix3fv(e, r(a, o)));
  }
}, at = class extends ee {
  constructor(e, r) {
    super(e, "mat4", F.Pass, (i, a, o) => i.setUniformMatrix4fv(e, r(a, o)));
  }
};
function dt(t) {
  if (t == null) return null;
  const e = t.offset != null ? t.offset : ea, r = t.rotation != null ? t.rotation : 0, i = t.scale != null ? t.scale : ta, a = sr(1, 0, 0, 0, 1, 0, e[0], e[1], 1), o = sr(Math.cos(r), -Math.sin(r), 0, Math.sin(r), Math.cos(r), 0, 0, 0, 1), n = sr(i[0], 0, 0, 0, i[1], 0, 0, 0, 1), c = yt();
  return Zr(c, o, n), Zr(c, a, c), c;
}
let un = class {
  constructor() {
    this.geometries = new Array(), this.materials = new Array(), this.textures = new Array();
  }
}, hn = class {
  constructor(e, r, i) {
    this.name = e, this.lodThreshold = r, this.pivotOffset = i, this.stageResources = new un(), this.numberOfVertices = 0;
  }
};
function mn(t) {
  if (t.length < wi) return Array.from(t);
  if (ra(t)) return Float64Array.from(t);
  if (!("BYTES_PER_ELEMENT" in t)) return Array.from(t);
  switch (t.BYTES_PER_ELEMENT) {
    case 1:
      return Uint8Array.from(t);
    case 2:
      return ia(t) ? Uint16Array.from(t) : Int16Array.from(t);
    case 4:
      return Float32Array.from(t);
    default:
      return Float64Array.from(t);
  }
}
let fn = class Xi {
  constructor(e, r, i) {
    this.primitiveIndices = e, this._numIndexPerPrimitive = r, this.position = i, this._children = void 0, W(e.length >= 1), W(i.size === 3 || i.size === 4);
    const { data: a, size: o, indices: n } = i;
    W(n.length % this._numIndexPerPrimitive == 0), W(n.length >= e.length * this._numIndexPerPrimitive);
    const c = e.length;
    let l = o * n[this._numIndexPerPrimitive * e[0]];
    De.clear(), De.push(l);
    const u = Ge(a[l], a[l + 1], a[l + 2]), d = Nt(u);
    for (let f = 0; f < c; ++f) {
      const g = this._numIndexPerPrimitive * e[f];
      for (let S = 0; S < this._numIndexPerPrimitive; ++S) {
        l = o * n[g + S], De.push(l);
        let x = a[l];
        u[0] = Math.min(x, u[0]), d[0] = Math.max(x, d[0]), x = a[l + 1], u[1] = Math.min(x, u[1]), d[1] = Math.max(x, d[1]), x = a[l + 2], u[2] = Math.min(x, u[2]), d[2] = Math.max(x, d[2]);
      }
    }
    this.bbMin = u, this.bbMax = d;
    const h = gr(C(), this.bbMin, this.bbMax, 0.5);
    this.radius = 0.5 * Math.max(Math.max(d[0] - u[0], d[1] - u[1]), d[2] - u[2]);
    let v = this.radius * this.radius;
    for (let f = 0; f < De.length; ++f) {
      l = De.at(f);
      const g = a[l] - h[0], S = a[l + 1] - h[1], x = a[l + 2] - h[2], P = g * g + S * S + x * x;
      if (P <= v) continue;
      const M = Math.sqrt(P), I = 0.5 * (M - this.radius);
      this.radius = this.radius + I, v = this.radius * this.radius;
      const D = I / M;
      h[0] += g * D, h[1] += S * D, h[2] += x * D;
    }
    this.center = h, De.clear();
  }
  getChildren() {
    if (this._children || oa(this.bbMin, this.bbMax) <= 1) return this._children;
    const e = gr(C(), this.bbMin, this.bbMax, 0.5), r = this.primitiveIndices.length, i = new Uint8Array(r), a = new Array(8);
    for (let d = 0; d < 8; ++d) a[d] = 0;
    const { data: o, size: n, indices: c } = this.position;
    for (let d = 0; d < r; ++d) {
      let h = 0;
      const v = this._numIndexPerPrimitive * this.primitiveIndices[d];
      let f = n * c[v], g = o[f], S = o[f + 1], x = o[f + 2];
      for (let P = 1; P < this._numIndexPerPrimitive; ++P) {
        f = n * c[v + P];
        const M = o[f], I = o[f + 1], D = o[f + 2];
        M < g && (g = M), I < S && (S = I), D < x && (x = D);
      }
      g < e[0] && (h |= 1), S < e[1] && (h |= 2), x < e[2] && (h |= 4), i[d] = h, ++a[h];
    }
    let l = 0;
    for (let d = 0; d < 8; ++d) a[d] > 0 && ++l;
    if (l < 2) return;
    const u = new Array(8);
    for (let d = 0; d < 8; ++d) u[d] = a[d] > 0 ? new Uint32Array(a[d]) : void 0;
    for (let d = 0; d < 8; ++d) a[d] = 0;
    for (let d = 0; d < r; ++d) {
      const h = i[d];
      u[h][a[h]++] = this.primitiveIndices[d];
    }
    this._children = new Array();
    for (let d = 0; d < 8; ++d) u[d] !== void 0 && this._children.push(new Xi(u[d], this._numIndexPerPrimitive, this.position));
    return this._children;
  }
  static prune() {
    De.prune();
  }
};
const De = new Mi({ deallocator: null });
let Pr = class {
  constructor() {
    this.id = Ci();
  }
};
var Se;
(function(t) {
  t[t.Layer = 0] = "Layer", t[t.Object = 1] = "Object", t[t.Mesh = 2] = "Mesh", t[t.Line = 3] = "Line", t[t.Point = 4] = "Point", t[t.Material = 5] = "Material", t[t.Texture = 6] = "Texture", t[t.COUNT = 7] = "COUNT";
})(Se || (Se = {}));
function pn(t) {
  return t ? { p0: Nt(t.p0), p1: Nt(t.p1), p2: Nt(t.p2) } : { p0: C(), p1: C(), p2: C() };
}
function vn(t, e, r) {
  return Ae(ur, e, t), Ae(ni, r, t), 0.5 * he(wr(ur, ur, ni));
}
new ji(Za);
new ji(() => pn());
const ur = C(), ni = C();
function gn(t, e) {
  if (!t) return !1;
  const { size: r, data: i, indices: a } = t;
  V(e, 0, 0, 0), V(ae, 0, 0, 0);
  let o = 0, n = 0;
  for (let c = 0; c < a.length - 2; c += 3) {
    const l = a[c] * r, u = a[c + 1] * r, d = a[c + 2] * r;
    V(Y, i[l], i[l + 1], i[l + 2]), V(_e, i[u], i[u + 1], i[u + 2]), V(Rt, i[d], i[d + 1], i[d + 2]);
    const h = vn(Y, _e, Rt);
    h ? (ue(Y, Y, _e), ue(Y, Y, Rt), me(Y, Y, 1 / 3 * h), ue(e, e, Y), o += h) : (ue(ae, ae, Y), ue(ae, ae, _e), ue(ae, ae, Rt), n += 3);
  }
  return (n !== 0 || o !== 0) && (o !== 0 ? (me(e, e, 1 / o), !0) : n !== 0 && (me(e, ae, 1 / n), !0));
}
function xn(t, e) {
  if (!t) return !1;
  const { size: r, data: i, indices: a } = t;
  V(e, 0, 0, 0);
  let o = -1, n = 0;
  for (let c = 0; c < a.length; c++) {
    const l = a[c] * r;
    o !== l && (e[0] += i[l], e[1] += i[l + 1], e[2] += i[l + 2], n++), o = l;
  }
  return n > 1 && me(e, e, 1 / n), n > 0;
}
function Tn(t, e, r) {
  if (!t) return !1;
  V(r, 0, 0, 0), V(ae, 0, 0, 0);
  let i = 0, a = 0;
  const { size: o, data: n, indices: c } = t, l = c.length - 1, u = l + (e ? 2 : 0);
  for (let d = 0; d < u; d += 2) {
    const h = d < l ? d + 1 : 0, v = c[d < l ? d : l] * o, f = c[h] * o;
    Y[0] = n[v], Y[1] = n[v + 1], Y[2] = n[v + 2], _e[0] = n[f], _e[1] = n[f + 1], _e[2] = n[f + 2], me(Y, ue(Y, Y, _e), 0.5);
    const g = aa(Y, _e);
    g > 0 ? (ue(r, r, me(Y, Y, g)), i += g) : i === 0 && (ue(ae, ae, Y), a++);
  }
  return i !== 0 ? (me(r, r, 1 / i), !0) : a !== 0 && (me(r, ae, 1 / a), !0);
}
const Y = C(), _e = C(), Rt = C(), ae = C();
let _n = class {
  constructor(e) {
    this.channel = e, this.id = Ci();
  }
};
function bn(t, e) {
  return t == null && (t = []), t.push(e), t;
}
function Sn(t, e) {
  if (t == null) return null;
  const r = t.filter((i) => i !== e);
  return r.length === 0 ? null : r;
}
let Ji = class Zi extends Pr {
  constructor(e, r, i = null, a = Se.Mesh, o = null, n = -1) {
    super(), this.material = e, this.mapPositions = i, this.type = a, this.objectAndLayerIdColor = o, this.edgeIndicesLength = n, this.visible = !0, this._attributes = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [c, l] of r) this._attributes.set(c, { ...l, indices: qa(l.indices) }), c === p.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._attributes.get(c).indices.length : this.edgeIndicesLength);
  }
  instantiate(e = {}) {
    const r = new Zi(e.material || this.material, [], this.mapPositions, this.type, this.objectAndLayerIdColor, this.edgeIndicesLength);
    return this._attributes.forEach((i, a) => {
      i.exclusive = !1, r._attributes.set(a, i);
    }), r._boundingInfo = this._boundingInfo, r.transformation = e.transformation || this.transformation, r;
  }
  get attributes() {
    return this._attributes;
  }
  getMutableAttribute(e) {
    let r = this._attributes.get(e);
    return r && !r.exclusive && (r = { ...r, exclusive: !0, data: mn(r.data) }, this._attributes.set(e, r)), r;
  }
  setAttributeData(e, r) {
    const i = this._attributes.get(e);
    i && this._attributes.set(e, { ...i, exclusive: !0, data: r });
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
    return !!(this.type === Se.Mesh ? this._computeAttachmentOriginTriangles(e) : this.type === Se.Line ? this._computeAttachmentOriginLines(e) : this._computeAttachmentOriginPoints(e)) && (this._transformation != null && we(e, e, this._transformation), !0);
  }
  _computeAttachmentOriginTriangles(e) {
    const r = this.attributes.get(p.POSITION);
    return gn(r, e);
  }
  _computeAttachmentOriginLines(e) {
    const r = this.attributes.get(p.POSITION);
    return Tn(r, En(this.material.parameters, r), e);
  }
  _computeAttachmentOriginPoints(e) {
    const r = this.attributes.get(p.POSITION);
    return xn(r, e);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const e = this.attributes.get(p.POSITION);
    if (!e || e.indices.length === 0) return null;
    const r = this.type === Se.Mesh ? 3 : 1;
    W(e.indices.length % r == 0, "Indexing error: " + e.indices.length + " not divisible by " + r);
    const i = Gi(e.indices.length / r);
    return new fn(i, r, e);
  }
  get transformation() {
    return this._transformation ?? Vt;
  }
  set transformation(e) {
    this._transformation = e && e !== Vt ? Oa(e) : null;
  }
  addHighlight() {
    const e = new _n(Xa.Highlight);
    return this.highlights = bn(this.highlights, e), e;
  }
  removeHighlight(e) {
    this.highlights = Sn(this.highlights, e);
  }
};
function En(t, e) {
  return !(!("isClosed" in t) || !t.isClosed) && e.indices.length > 2;
}
function yn() {
  return si ??= (async () => {
    const t = await import("./basis_transcoder-BQKD9Nty.js"), e = await t.default({ locateFile: (r) => na(`esri/libs/basisu/${r}`) });
    return e.initializeBasis(), e;
  })(), si;
}
let si;
var Be;
(function(t) {
  t[t.ETC1_RGB = 0] = "ETC1_RGB", t[t.ETC2_RGBA = 1] = "ETC2_RGBA", t[t.BC1_RGB = 2] = "BC1_RGB", t[t.BC3_RGBA = 3] = "BC3_RGBA", t[t.BC4_R = 4] = "BC4_R", t[t.BC5_RG = 5] = "BC5_RG", t[t.BC7_M6_RGB = 6] = "BC7_M6_RGB", t[t.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", t[t.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", t[t.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", t[t.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", t[t.ATC_RGB = 11] = "ATC_RGB", t[t.ATC_RGBA = 12] = "ATC_RGBA", t[t.FXT1_RGB = 17] = "FXT1_RGB", t[t.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", t[t.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", t[t.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", t[t.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", t[t.RGBA32 = 13] = "RGBA32", t[t.RGB565 = 14] = "RGB565", t[t.BGR565 = 15] = "BGR565", t[t.RGBA4444 = 16] = "RGBA4444";
})(Be || (Be = {}));
let de = null, It = null;
async function Ki() {
  return It == null && (It = yn(), de = await It), It;
}
function An(t, e) {
  if (de == null) return t.byteLength;
  const r = new de.BasisFile(new Uint8Array(t)), i = eo(r) ? Qi(r.getNumLevels(0), r.getHasAlpha(), r.getImageWidth(0, 0), r.getImageHeight(0, 0), e) : 0;
  return r.close(), r.delete(), i;
}
function wn(t, e) {
  if (de == null) return t.byteLength;
  const r = new de.KTX2File(new Uint8Array(t)), i = to(r) ? Qi(r.getLevels(), r.getHasAlpha(), r.getWidth(), r.getHeight(), e) : 0;
  return r.close(), r.delete(), i;
}
function Qi(t, e, r, i, a) {
  const o = rn(e ? be.COMPRESSED_RGBA8_ETC2_EAC : be.COMPRESSED_RGB8_ETC2), n = a && t > 1 ? (4 ** t - 1) / (3 * 4 ** (t - 1)) : 1;
  return Math.ceil(r * i * o * n);
}
function eo(t) {
  return t.getNumImages() >= 1 && !t.isUASTC();
}
function to(t) {
  return t.getFaces() >= 1 && t.isETC1S();
}
async function Mn(t, e, r) {
  de == null && (de = await Ki());
  const i = new de.BasisFile(new Uint8Array(r));
  if (!eo(i)) return null;
  i.startTranscoding();
  const a = ro(t, e, i.getNumLevels(0), i.getHasAlpha(), i.getImageWidth(0, 0), i.getImageHeight(0, 0), (o, n) => i.getImageTranscodedSizeInBytes(0, o, n), (o, n, c) => i.transcodeImage(c, 0, o, n, 0, 0));
  return i.close(), i.delete(), a;
}
async function Cn(t, e, r) {
  de == null && (de = await Ki());
  const i = new de.KTX2File(new Uint8Array(r));
  if (!to(i)) return null;
  i.startTranscoding();
  const a = ro(t, e, i.getLevels(), i.getHasAlpha(), i.getWidth(), i.getHeight(), (o, n) => i.getImageTranscodedSizeInBytes(o, 0, 0, n), (o, n, c) => i.transcodeImage(c, o, 0, 0, n, 0, -1, -1));
  return i.close(), i.delete(), a;
}
function ro(t, e, r, i, a, o, n, c) {
  const { compressedTextureETC: l, compressedTextureS3TC: u } = t.capabilities, [d, h] = l ? i ? [Be.ETC2_RGBA, be.COMPRESSED_RGBA8_ETC2_EAC] : [Be.ETC1_RGB, be.COMPRESSED_RGB8_ETC2] : u ? i ? [Be.BC3_RGBA, be.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [Be.BC1_RGB, be.COMPRESSED_RGB_S3TC_DXT1_EXT] : [Be.RGBA32, Fe.RGBA], v = e.hasMipmap ? r : Math.min(1, r), f = [];
  for (let g = 0; g < v; g++) f.push(new Uint8Array(n(g, d))), c(g, d, f[g]);
  return e.internalFormat = h, e.hasMipmap = f.length > 1, e.samplingMode = e.hasMipmap ? nt.LINEAR_MIPMAP_LINEAR : nt.LINEAR, e.width = a, e.height = o, new ot(t, e, { type: "compressed", levels: f });
}
const $t = () => Mr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"), On = 542327876, Rn = 131072, In = 4;
function Lr(t) {
  return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24);
}
function $n(t) {
  return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}
const Pn = Lr("DXT1"), Ln = Lr("DXT3"), Nn = Lr("DXT5"), Dn = 31, Fn = 0, Bn = 1, zn = 2, Gn = 3, Vn = 4, Un = 7, jn = 20, Hn = 21;
function Wn(t, e, r) {
  const i = qn(r, e.hasMipmap ?? !1);
  if (i == null) throw new Error("DDS texture data is null");
  const { textureData: a, internalFormat: o, width: n, height: c } = i;
  return e.samplingMode = a.levels.length > 1 ? nt.LINEAR_MIPMAP_LINEAR : nt.LINEAR, e.hasMipmap = a.levels.length > 1, e.internalFormat = o, e.width = n, e.height = c, new ot(t, e, a);
}
function qn(t, e) {
  const r = new Int32Array(t, 0, Dn);
  if (r[Fn] !== On) return $t().error("Invalid magic number in DDS header"), null;
  if (!(r[jn] & In)) return $t().error("Unsupported format, must contain a FourCC code"), null;
  const i = r[Hn];
  let a, o;
  switch (i) {
    case Pn:
      a = 8, o = be.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case Ln:
      a = 16, o = be.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case Nn:
      a = 16, o = be.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return $t().error("Unsupported FourCC code:", $n(i)), null;
  }
  let n = 1, c = r[Vn], l = r[Gn];
  (3 & c || 3 & l) && ($t().warn("Rounding up compressed texture size to nearest multiple of 4."), c = c + 3 & -4, l = l + 3 & -4);
  const u = c, d = l;
  let h, v;
  r[zn] & Rn && e !== !1 && (n = Math.max(1, r[Un]));
  let f = r[Bn] + 4;
  const g = [];
  for (let S = 0; S < n; ++S) v = (c + 3 >> 2) * (l + 3 >> 2) * a, h = new Uint8Array(t, f, v), g.push(h), f += v, c = Math.max(1, c >> 1), l = Math.max(1, l >> 1);
  return { textureData: { type: "compressed", levels: g }, internalFormat: o, width: u, height: d };
}
function kn(t, e) {
  let o = t.width * t.height;
  if (o < 4096) return t instanceof ImageData ? io(t) : t;
  let n = t.width, c = t.height;
  do
    n = Math.ceil(n / 2), c = Math.ceil(c / 2), o = n * c;
  while (o > 1048576 || e != null && (n > e || c > e));
  return Nr(t, n, c);
}
function Yn(t, e) {
  const r = Math.max(t.width, t.height);
  if (r <= e) return t;
  const i = e / r;
  return Nr(t, Math.round(t.width * i), Math.round(t.height * i));
}
function Nr(t, e, r) {
  if (t instanceof ImageData) return Nr(io(t), e, r);
  const i = document.createElement("canvas");
  return i.width = e, i.height = r, i.getContext("2d").drawImage(t, 0, 0, i.width, i.height), i;
}
function io(t) {
  const e = document.createElement("canvas");
  e.width = t.width, e.height = t.height;
  const r = e.getContext("2d");
  if (r == null) throw new St("Failed to create 2d context from HTMLCanvasElement");
  return r.putImageData(t, 0, 0), e;
}
let oo = class extends Pr {
  get parameters() {
    return this._parameters;
  }
  constructor(e, r) {
    super(), this._data = e, this.type = Se.Texture, this._glTexture = null, this._loadingPromise = null, this._loadingController = null, this.events = new sa(), this._parameters = { ...Jn, ...r }, this._startPreload(e);
  }
  dispose() {
    this.unload(), this._data = this.frameUpdate = void 0;
  }
  _startPreload(e) {
    e != null && (e instanceof HTMLVideoElement ? (this.frameUpdate = (r) => this._frameUpdate(e, r), this._startPreloadVideoElement(e)) : e instanceof HTMLImageElement && this._startPreloadImageElement(e));
  }
  _startPreloadVideoElement(e) {
    if (!(Kr(e.src) || e.preload === "auto" && e.crossOrigin)) {
      e.preload = "auto", e.crossOrigin = "anonymous";
      const r = !e.paused;
      if (e.src = e.src, r && e.autoplay) {
        const i = () => {
          e.removeEventListener("canplay", i), e.play();
        };
        e.addEventListener("canplay", i);
      }
    }
  }
  _startPreloadImageElement(e) {
    la(e.src) || Kr(e.src) || e.crossOrigin || (e.crossOrigin = "anonymous", e.src = e.src);
  }
  _createDescriptor(e) {
    const r = new Wi();
    return r.wrapMode = this._parameters.wrap ?? Ue.REPEAT, r.flipped = !this._parameters.noUnpackFlip, r.samplingMode = this._parameters.mipmap ? nt.LINEAR_MIPMAP_LINEAR : nt.LINEAR, r.hasMipmap = !!this._parameters.mipmap, r.preMultiplyAlpha = !!this._parameters.preMultiplyAlpha, r.maxAnisotropy = this._parameters.maxAnisotropy ?? (this._parameters.mipmap ? e.parameters.maxMaxAnisotropy : 1), r;
  }
  get glTexture() {
    return this._glTexture;
  }
  get memoryEstimate() {
    return this._glTexture?.usedMemory || Xn(this._data, this._parameters);
  }
  load(e) {
    if (this._glTexture) return this._glTexture;
    if (this._loadingPromise) return this._loadingPromise;
    const r = this._data;
    return r == null ? (this._glTexture = new ot(e, this._createDescriptor(e), null), this._glTexture) : (this._parameters.reloadable || (this._data = void 0), typeof r == "string" ? this._loadFromURL(e, r) : r instanceof Image ? this._loadFromImageElement(e, r) : r instanceof HTMLVideoElement ? this._loadFromVideoElement(e, r) : r instanceof ImageData || r instanceof HTMLCanvasElement ? this._loadFromImage(e, r) : (ht(r) || mt(r)) && this._parameters.encoding === vt.DDS_ENCODING ? this._loadFromDDSData(e, r) : (ht(r) || mt(r)) && this._parameters.encoding === vt.KTX2_ENCODING ? this._loadFromKTX2(e, r) : (ht(r) || mt(r)) && this._parameters.encoding === vt.BASIS_ENCODING ? this._loadFromBasis(e, r) : mt(r) ? this._loadFromPixelData(e, r) : ht(r) ? this._loadFromPixelData(e, new Uint8Array(r)) : null);
  }
  _frameUpdate(e, r) {
    return this._glTexture == null || e.readyState < xt.HAVE_CURRENT_DATA || r === e.currentTime ? r : (this._glTexture.setData(e), this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this._parameters.updateCallback && this._parameters.updateCallback(), e.currentTime);
  }
  _loadFromDDSData(e, r) {
    return this._glTexture = Wn(e, this._createDescriptor(e), r), this._glTexture;
  }
  _loadFromKTX2(e, r) {
    return this._loadAsync(() => Cn(e, this._createDescriptor(e), r).then((i) => (this._glTexture = i, i)));
  }
  _loadFromBasis(e, r) {
    return this._loadAsync(() => Mn(e, this._createDescriptor(e), r).then((i) => (this._glTexture = i, i)));
  }
  _loadFromPixelData(e, r) {
    W(this._parameters.width > 0 && this._parameters.height > 0);
    const i = this._createDescriptor(e);
    return i.pixelFormat = this._parameters.components === 1 ? Fe.LUMINANCE : this._parameters.components === 3 ? Fe.RGB : Fe.RGBA, i.width = this._parameters.width ?? 0, i.height = this._parameters.height ?? 0, this._glTexture = new ot(e, i, r), this._glTexture;
  }
  _loadFromURL(e, r) {
    return this._loadAsync(async (i) => {
      const a = await Vi(r, { signal: i });
      return Qr(i), this._loadFromImage(e, a);
    });
  }
  _loadFromImageElement(e, r) {
    return r.complete ? this._loadFromImage(e, r) : this._loadAsync(async (i) => {
      const a = await ca(r, r.src, !1, i);
      return Qr(i), this._loadFromImage(e, a);
    });
  }
  _loadFromVideoElement(e, r) {
    return r.readyState >= xt.HAVE_CURRENT_DATA ? this._loadFromImage(e, r) : this._loadFromVideoElementAsync(e, r);
  }
  _loadFromVideoElementAsync(e, r) {
    return this._loadAsync((i) => new Promise((a, o) => {
      const n = () => {
        r.removeEventListener("loadeddata", c), r.removeEventListener("error", l), ha(u);
      }, c = () => {
        r.readyState >= xt.HAVE_CURRENT_DATA && (n(), a(this._loadFromImage(e, r)));
      }, l = (d) => {
        n(), o(d || new St("Failed to load video"));
      };
      r.addEventListener("loadeddata", c), r.addEventListener("error", l);
      const u = da(i, () => l(ua()));
    }));
  }
  _loadFromImage(e, r) {
    let i = r;
    if (!(i instanceof HTMLVideoElement)) {
      const { maxTextureSize: n } = e.parameters;
      i = this._parameters.downsampleUncompressed ? kn(i, n) : Yn(i, n);
    }
    const a = ao(i);
    this._parameters.width = a.width, this._parameters.height = a.height;
    const o = this._createDescriptor(e);
    return o.pixelFormat = this._parameters.components === 3 ? Fe.RGB : Fe.RGBA, o.width = a.width, o.height = a.height, this._glTexture = new ot(e, o, i), this._glTexture;
  }
  _loadAsync(e) {
    const r = new AbortController();
    this._loadingController = r;
    const i = e(r.signal);
    this._loadingPromise = i;
    const a = () => {
      this._loadingController === r && (this._loadingController = null), this._loadingPromise === i && (this._loadingPromise = null);
    };
    return i.then(a, a), i;
  }
  unload() {
    if (this._glTexture = Bt(this._glTexture), this._loadingController != null) {
      const e = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, e.abort();
    }
    this.events.emit("unloaded");
  }
};
function Xn(t, e) {
  if (t == null) return 0;
  if (ht(t) || mt(t)) return e.encoding === vt.KTX2_ENCODING ? wn(t, !!e.mipmap) : e.encoding === vt.BASIS_ENCODING ? An(t, !!e.mipmap) : t.byteLength;
  const { width: r, height: i } = t instanceof Image || t instanceof ImageData || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement ? ao(t) : e;
  return (e.mipmap ? 4 / 3 : 1) * r * i * (e.components || 4) || 0;
}
function ao(t) {
  return t instanceof HTMLVideoElement ? { width: t.videoWidth, height: t.videoHeight } : t;
}
var xt;
(function(t) {
  t[t.HAVE_NOTHING = 0] = "HAVE_NOTHING", t[t.HAVE_METADATA = 1] = "HAVE_METADATA", t[t.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", t[t.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", t[t.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
})(xt || (xt = {}));
const Jn = { wrap: { s: Ue.REPEAT, t: Ue.REPEAT }, mipmap: !0, noUnpackFlip: !1, preMultiplyAlpha: !1, downsampleUncompressed: !1 };
function Zn(t, e) {
  const r = t.fragment;
  switch (r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), e.doubleSidedMode) {
    case re.None:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case re.View:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case re.WindingOrder:
      r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      Et(e.doubleSidedMode);
    case re.COUNT:
  }
}
var re;
(function(t) {
  t[t.None = 0] = "None", t[t.View = 1] = "View", t[t.WindingOrder = 2] = "WindingOrder", t[t.COUNT = 3] = "COUNT";
})(re || (re = {}));
var k;
function ze(t, e) {
  switch (e.textureCoordinateType) {
    case k.Default:
      return t.attributes.add(p.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case k.Compressed:
      return t.attributes.add(p.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case k.Atlas:
      return t.attributes.add(p.UV0, "vec2"), t.varyings.add("vuv0", "vec2"), t.attributes.add(p.UVREGION, "vec4"), t.varyings.add("vuvRegion", "vec4"), void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      Et(e.textureCoordinateType);
    case k.None:
      return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);
    case k.COUNT:
      return;
  }
}
(function(t) {
  t[t.None = 0] = "None", t[t.Default = 1] = "Default", t[t.Atlas = 2] = "Atlas", t[t.Compressed = 3] = "Compressed", t[t.COUNT = 4] = "COUNT";
})(k || (k = {}));
function Kn(t) {
  t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);
}
function no(t, e) {
  switch (t.include(ze, e), e.textureCoordinateType) {
    case k.Default:
    case k.Compressed:
      return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);
    case k.Atlas:
      return t.include(Kn), void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);
    default:
      Et(e.textureCoordinateType);
    case k.None:
    case k.COUNT:
      return;
  }
}
let Q = class extends ee {
  constructor(e, r) {
    super(e, "sampler2D", F.Pass, (i, a, o) => i.bindTexture(e, r(a, o)));
  }
}, Qn = class {
  constructor(e) {
    this._material = e.material, this._techniques = e.techniques, this._output = e.output;
  }
  dispose() {
    this._techniques.release(this._technique);
  }
  get technique() {
    return this._technique;
  }
  get _stippleTextures() {
    return this._techniques.constructionContext.stippleTextures;
  }
  get _markerTextures() {
    return this._techniques.constructionContext.markerTextures;
  }
  ensureTechnique(e, r) {
    return this._technique = this._techniques.releaseAndAcquire(e, this._material.getConfiguration(this._output, r), this._technique), this._technique;
  }
  ensureResources(e) {
    return br.LOADED;
  }
}, es = class extends Qn {
  constructor(e) {
    super(e), this._numLoading = 0, this._disposed = !1, this._textures = e.textures, this._textureId = e.textureId, this._acquire(e.textureId, (r) => this._texture = r), this._acquire(e.normalTextureId, (r) => this._textureNormal = r), this._acquire(e.emissiveTextureId, (r) => this._textureEmissive = r), this._acquire(e.occlusionTextureId, (r) => this._textureOcclusion = r), this._acquire(e.metallicRoughnessTextureId, (r) => this._textureMetallicRoughness = r);
  }
  dispose() {
    this._texture = Ne(this._texture), this._textureNormal = Ne(this._textureNormal), this._textureEmissive = Ne(this._textureEmissive), this._textureOcclusion = Ne(this._textureOcclusion), this._textureMetallicRoughness = Ne(this._textureMetallicRoughness), this._disposed = !0;
  }
  ensureResources(e) {
    return this._numLoading === 0 ? br.LOADED : br.LOADING;
  }
  get textureBindParameters() {
    return new ts(this._texture != null ? this._texture.glTexture : null, this._textureNormal != null ? this._textureNormal.glTexture : null, this._textureEmissive != null ? this._textureEmissive.glTexture : null, this._textureOcclusion != null ? this._textureOcclusion.glTexture : null, this._textureMetallicRoughness != null ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e) {
    this._texture != null && e === this._texture.id || (this._texture = Ne(this._texture), this._textureId = e, this._acquire(this._textureId, (r) => this._texture = r));
  }
  _acquire(e, r) {
    if (e == null) return void r(null);
    const i = this._textures.acquire(e);
    if (ma(i)) return ++this._numLoading, void i.then((a) => {
      if (this._disposed) return Ne(a), void r(null);
      r(a);
    }).finally(() => --this._numLoading);
    r(i);
  }
}, ts = class extends wt {
  constructor(e = null, r = null, i = null, a = null, o = null, n, c) {
    super(), this.texture = e, this.textureNormal = r, this.textureEmissive = i, this.textureOcclusion = a, this.textureMetallicRoughness = o, this.scale = n, this.normalTextureTransformMatrix = c;
  }
};
var $;
(function(t) {
  t[t.Disabled = 0] = "Disabled", t[t.Normal = 1] = "Normal", t[t.Schematic = 2] = "Schematic", t[t.Water = 3] = "Water", t[t.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", t[t.Simplified = 5] = "Simplified", t[t.TerrainWithWater = 6] = "TerrainWithWater", t[t.COUNT = 7] = "COUNT";
})($ || ($ = {}));
function so(t, e) {
  const r = t.fragment, i = e.hasMetallicRoughnessTexture || e.hasEmissionTexture || e.hasOcclusionTexture;
  if (e.pbrMode === $.Normal && i && t.include(no, e), e.pbrMode !== $.Schematic) if (e.pbrMode !== $.Disabled) {
    if (e.pbrMode === $.Normal) {
      r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);
      const a = e.pbrTextureBindType;
      e.hasMetallicRoughnessTexture && (r.uniforms.add(a === F.Pass ? new Q("texMetallicRoughness", (o) => o.textureMetallicRoughness) : new gt("texMetallicRoughness", (o) => o.textureMetallicRoughness)), r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), e.hasEmissionTexture && (r.uniforms.add(a === F.Pass ? new Q("texEmission", (o) => o.textureEmissive) : new gt("texEmission", (o) => o.textureEmissive)), r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)), e.hasOcclusionTexture ? (r.uniforms.add(a === F.Pass ? new Q("texOcclusion", (o) => o.textureOcclusion) : new gt("texOcclusion", (o) => o.textureOcclusion)), r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : r.code.add(s`float getBakedOcclusion() { return 1.0; }`), a === F.Pass ? r.uniforms.add(new J("emissionFactor", (o) => o.emissiveFactor), new J("mrrFactors", (o) => o.mrrFactors)) : r.uniforms.add(new ce("emissionFactor", (o) => o.emissiveFactor), new ce("mrrFactors", (o) => o.mrrFactors)), r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture ? s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform ? s`metallicRoughnessUV` : "vuv0"});` : ""}

      ${e.hasEmissionTexture ? s`applyEmission(${e.hasEmissiveTextureTransform ? s`emissiveUV` : "vuv0"});` : ""}

      ${e.hasOcclusionTexture ? s`applyOcclusion(${e.hasOcclusionTextureTransform ? s`occlusionUV` : "vuv0"});` : ""}
    }
  `);
    }
  } else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);
  else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
}
const Qt = /* @__PURE__ */ new Map([[p.POSITION, 0], [p.NORMAL, 1], [p.NORMALCOMPRESSED, 1], [p.UV0, 2], [p.COLOR, 3], [p.COLORFEATUREATTRIBUTE, 3], [p.SIZE, 4], [p.TANGENT, 4], [p.CENTEROFFSETANDDISTANCE, 5], [p.SYMBOLCOLOR, 5], [p.FEATUREATTRIBUTE, 6], [p.INSTANCEFEATUREATTRIBUTE, 6], [p.INSTANCECOLOR, 7], [p.OBJECTANDLAYERIDCOLOR, 7], [p.INSTANCEOBJECTANDLAYERIDCOLOR, 7], [p.INSTANCEMODEL, 8], [p.INSTANCEMODELNORMAL, 12], [p.INSTANCEMODELORIGINHI, 11], [p.INSTANCEMODELORIGINLO, 15]]);
function rs(t) {
  return Math.abs(t * t * t);
}
function is(t, e, r) {
  const i = r.parameters;
  return hr.scale = Math.min(i.divisor / (e - i.offset), 1), hr.factor = rs(t), hr;
}
function os(t, e) {
  return fa(t * Math.max(e.scale, e.minScaleFactor), t, e.factor);
}
function as(t, e, r, i) {
  return os(t, is(e, r, i));
}
const hr = { scale: 0, factor: 0, minScaleFactor: 0 };
function ns(t, e, r, i, a) {
  let o = (r.screenLength || 0) * t.pixelRatio;
  a != null && (o = as(o, i, e, a));
  const n = o * Math.tan(0.5 * t.fovY) / (0.5 * t.fullHeight);
  return Oi(n * e, r.minWorldLength || 0, r.maxWorldLength != null ? r.maxWorldLength : 1 / 0);
}
function lo(t, e) {
  const r = e ? lo(e) : {};
  for (const i in t) {
    let a = t[i];
    a?.forEach && (a = ls(a)), a == null && i in r || (r[i] = a);
  }
  return r;
}
function ss(t, e) {
  let r = !1;
  for (const i in e) {
    const a = e[i];
    a !== void 0 && (Array.isArray(a) ? t[i] === null ? (t[i] = a.slice(), r = !0) : pa(t[i], a) && (r = !0) : t[i] !== a && (r = !0, t[i] = a));
  }
  return r;
}
function ls(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
}
const cs = { multiply: 1, ignore: 2, replace: 3, tint: 4 };
let ds = class extends Pr {
  constructor(e, r) {
    super(), this.type = Se.Material, this.supportsEdges = !1, this._visible = !0, this._renderPriority = 0, this._vertexAttributeLocations = Qt, this._pp0 = Ge(0, 0, 1), this._pp1 = Ge(0, 0, 0), this._parameters = lo(e, r), this.validateParameters(this._parameters);
  }
  get parameters() {
    return this._parameters;
  }
  update(e) {
    return !1;
  }
  setParameters(e, r = !0) {
    ss(this._parameters, e) && (this.validateParameters(this._parameters), r && this.parametersChanged());
  }
  validateParameters(e) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    e !== this._visible && (this._visible = e, this.parametersChanged());
  }
  shouldRender(e) {
    return this.isVisible() && this.isVisibleForOutput(e.output) && (!this.parameters.isDecoration || e.bindParameters.decorations === Ja.ON) && !!(this.parameters.renderOccluded & e.renderOccludedMask);
  }
  isVisibleForOutput(e) {
    return !0;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e) {
    e !== this._renderPriority && (this._renderPriority = e, this.parametersChanged());
  }
  get vertexAttributeLocations() {
    return this._vertexAttributeLocations;
  }
  isVisible() {
    return this._visible;
  }
  parametersChanged() {
    this.repository?.materialChanged(this);
  }
  queryRenderOccludedState(e) {
    return this.isVisible() && this.parameters.renderOccluded === e;
  }
  intersectDraped(e, r, i, a, o, n) {
    return this._pp0[0] = this._pp1[0] = a[0], this._pp0[1] = this._pp1[1] = a[1], this.intersect(e, r, i, this._pp0, this._pp1, o);
  }
};
var Sr;
(function(t) {
  t[t.None = 0] = "None", t[t.Occlude = 1] = "Occlude", t[t.Transparent = 2] = "Transparent", t[t.OccludeAndTransparent = 4] = "OccludeAndTransparent", t[t.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", t[t.Opaque = 16] = "Opaque";
})(Sr || (Sr = {}));
var ie;
(function(t) {
  t[t.ColorAlpha = 0] = "ColorAlpha", t[t.FrontFace = 1] = "FrontFace", t[t.NONE = 2] = "NONE", t[t.COUNT = 3] = "COUNT";
})(ie || (ie = {}));
const us = qi(ye.SRC_ALPHA, ye.ONE, ye.ONE_MINUS_SRC_ALPHA, ye.ONE_MINUS_SRC_ALPHA), hs = qi(ye.ONE, ye.ZERO, ye.ONE, ye.ONE_MINUS_SRC_ALPHA);
function ms(t) {
  return t === ie.FrontFace ? null : hs;
}
const fs = 5e5, ps = { factor: -1, units: -2 };
function vs(t) {
  return t ? ps : null;
}
function gs(t, e = fe.LESS) {
  return t === ie.NONE || t === ie.FrontFace ? e : fe.LEQUAL;
}
function xs(t) {
  return t === ie.ColorAlpha ? { buffers: [ai.COLOR_ATTACHMENT0, ai.COLOR_ATTACHMENT1] } : null;
}
let Ts = class {
  constructor(e = !1, r = !0) {
    this.isVerticalRay = e, this.normalRequired = r;
  }
};
const Pt = va();
function _s(t, e, r, i, a, o) {
  if (!t.visible) return;
  const n = it(Ls, i, r), c = (u, d, h) => {
    o(u, h, d, !1);
  }, l = new Ts(!1, e.options.normalRequired);
  if (t.boundingInfo) {
    W(t.type === Se.Mesh);
    const u = e.tolerance;
    co(t.boundingInfo, r, n, u, a, l, c);
  } else {
    const u = t.attributes.get(p.POSITION), d = u.indices;
    Es(r, n, 0, d.length / 3, d, u.data, u.stride, a, l, c);
  }
}
const bs = C();
function co(t, e, r, i, a, o, n) {
  if (t == null) return;
  const c = Os(r, bs);
  if (ga(Pt, t.bbMin), xa(Pt, t.bbMax), a?.applyToAabb(Pt), Rs(Pt, e, c, i)) {
    const { primitiveIndices: l, position: u } = t, d = l ? l.length : u.indices.length / 3;
    if (d > $s) {
      const h = t.getChildren();
      if (h !== void 0) {
        for (const v of h) co(v, e, r, i, a, o, n);
        return;
      }
    }
    Ss(e, r, 0, d, u.indices, u.data, u.stride, l, a, o, n);
  }
}
const ft = C();
function Ss(t, e, r, i, a, o, n, c, l, u, d) {
  const h = t[0], v = t[1], f = t[2], g = e[0], S = e[1], x = e[2], { normalRequired: P } = u;
  for (let M = r; M < i; ++M) {
    const I = c[M], D = 3 * I, U = n * a[D];
    let N = o[U], E = o[U + 1], w = o[U + 2];
    const O = n * a[D + 1];
    let A = o[O], b = o[O + 1], R = o[O + 2];
    const T = n * a[D + 2];
    let L = o[T], B = o[T + 1], j = o[T + 2];
    l != null && ([N, E, w] = l.applyToVertex(N, E, w, M), [A, b, R] = l.applyToVertex(A, b, R, M), [L, B, j] = l.applyToVertex(L, B, j, M));
    const K = A - N, Oe = b - E, Re = R - w, Ie = L - N, $e = B - E, ve = j - w, Pe = S * ve - $e * x, Le = x * Ie - ve * g, je = g * $e - Ie * S, le = K * Pe + Oe * Le + Re * je;
    if (Math.abs(le) <= Ps) continue;
    const He = h - N, ar = v - E, nr = f - w, We = He * Pe + ar * Le + nr * je;
    if (le > 0) {
      if (We < 0 || We > le) continue;
    } else if (We > 0 || We < le) continue;
    const kr = ar * Re - Oe * nr, Yr = nr * K - Re * He, Xr = He * Oe - K * ar, Mt = g * kr + S * Yr + x * Xr;
    if (le > 0) {
      if (Mt < 0 || We + Mt > le) continue;
    } else if (Mt > 0 || We + Mt < le) continue;
    const Jr = (Ie * kr + $e * Yr + ve * Xr) / le;
    Jr >= 0 && d(Jr, I, P ? Ms(K, Oe, Re, Ie, $e, ve, ft) : null);
  }
}
function Es(t, e, r, i, a, o, n, c, l, u) {
  const d = e, h = Ns, v = Math.abs(d[0]), f = Math.abs(d[1]), g = Math.abs(d[2]), S = v >= f ? v >= g ? 0 : 2 : f >= g ? 1 : 2, x = S, P = d[x] < 0 ? 2 : 1, M = (S + P) % 3, I = (S + (3 - P)) % 3, D = d[M] / d[x], U = d[I] / d[x], N = 1 / d[x], E = ys, w = As, O = ws, { normalRequired: A } = l;
  for (let b = r; b < i; ++b) {
    const R = 3 * b, T = n * a[R];
    V(h[0], o[T + 0], o[T + 1], o[T + 2]);
    const L = n * a[R + 1];
    V(h[1], o[L + 0], o[L + 1], o[L + 2]);
    const B = n * a[R + 2];
    V(h[2], o[B + 0], o[B + 1], o[B + 2]), c && (Dt(h[0], c.applyToVertex(h[0][0], h[0][1], h[0][2], b)), Dt(h[1], c.applyToVertex(h[1][0], h[1][1], h[1][2], b)), Dt(h[2], c.applyToVertex(h[2][0], h[2][1], h[2][2], b))), it(E, h[0], t), it(w, h[1], t), it(O, h[2], t);
    const j = E[M] - D * E[x], K = E[I] - U * E[x], Oe = w[M] - D * w[x], Re = w[I] - U * w[x], Ie = O[M] - D * O[x], $e = O[I] - U * O[x], ve = Ie * Re - $e * Oe, Pe = j * $e - K * Ie, Le = Oe * K - Re * j;
    if ((ve < 0 || Pe < 0 || Le < 0) && (ve > 0 || Pe > 0 || Le > 0)) continue;
    const je = ve + Pe + Le;
    if (je === 0) continue;
    const le = ve * (N * E[x]) + Pe * (N * w[x]) + Le * (N * O[x]);
    if (le * Math.sign(je) < 0) continue;
    const He = le / je;
    He >= 0 && u(He, b, A ? Cs(h) : null);
  }
}
const ys = C(), As = C(), ws = C();
function Ms(t, e, r, i, a, o, n) {
  return V(jt, t, e, r), V(Ht, i, a, o), wr(n, jt, Ht), kt(n, n), n;
}
function Cs(t) {
  return it(jt, t[1], t[0]), it(Ht, t[2], t[0]), wr(ft, jt, Ht), kt(ft, ft), ft;
}
const jt = C(), Ht = C();
function Os(t, e) {
  return V(e, 1 / t[0], 1 / t[1], 1 / t[2]);
}
function Rs(t, e, r, i) {
  return Is(t, e, r, i, 1 / 0);
}
function Is(t, e, r, i, a) {
  const o = (t[0] - i - e[0]) * r[0], n = (t[3] + i - e[0]) * r[0];
  let c = Math.min(o, n), l = Math.max(o, n);
  const u = (t[1] - i - e[1]) * r[1], d = (t[4] + i - e[1]) * r[1];
  if (l = Math.min(l, Math.max(u, d)), l < 0 || (c = Math.max(c, Math.min(u, d)), c > l)) return !1;
  const h = (t[2] - i - e[2]) * r[2], v = (t[5] + i - e[2]) * r[2];
  return l = Math.min(l, Math.max(h, v)), !(l < 0) && (c = Math.max(c, Math.min(h, v)), !(c > l) && c < a);
}
const $s = 1e3, Ps = 1e-7, Ls = C(), Ns = [C(), C(), C()];
var Tt;
(function(t) {
  t[t.INTEGRATED_MESH = 0] = "INTEGRATED_MESH", t[t.OPAQUE_TERRAIN = 1] = "OPAQUE_TERRAIN", t[t.OPAQUE_MATERIAL = 2] = "OPAQUE_MATERIAL", t[t.OPAQUE_NO_SSAO_DEPTH = 3] = "OPAQUE_NO_SSAO_DEPTH", t[t.TRANSPARENT_MATERIAL = 4] = "TRANSPARENT_MATERIAL", t[t.TRANSPARENT_NO_SSAO_DEPTH = 5] = "TRANSPARENT_NO_SSAO_DEPTH", t[t.TRANSPARENT_TERRAIN = 6] = "TRANSPARENT_TERRAIN", t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 7] = "TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL", t[t.OCCLUDED_TERRAIN = 8] = "OCCLUDED_TERRAIN", t[t.OCCLUDER_MATERIAL = 9] = "OCCLUDER_MATERIAL", t[t.TRANSPARENT_OCCLUDER_MATERIAL = 10] = "TRANSPARENT_OCCLUDER_MATERIAL", t[t.OCCLUSION_PIXELS = 11] = "OCCLUSION_PIXELS", t[t.OPAQUE_ENVIRONMENT = 12] = "OPAQUE_ENVIRONMENT", t[t.TRANSPARENT_ENVIRONMENT = 13] = "TRANSPARENT_ENVIRONMENT", t[t.LASERLINES = 14] = "LASERLINES", t[t.LASERLINES_CONTRAST_CONTROL = 15] = "LASERLINES_CONTRAST_CONTROL", t[t.HUD_MATERIAL = 16] = "HUD_MATERIAL", t[t.LABEL_MATERIAL = 17] = "LABEL_MATERIAL", t[t.LINE_CALLOUTS = 18] = "LINE_CALLOUTS", t[t.LINE_CALLOUTS_HUD_DEPTH = 19] = "LINE_CALLOUTS_HUD_DEPTH", t[t.DRAPED_MATERIAL = 20] = "DRAPED_MATERIAL", t[t.DRAPED_WATER = 21] = "DRAPED_WATER", t[t.VIEWSHED = 22] = "VIEWSHED", t[t.VOXEL = 23] = "VOXEL", t[t.MAX_SLOTS = 24] = "MAX_SLOTS";
})(Tt || (Tt = {}));
let Ds = class {
  constructor(e = 0) {
    this.componentLocalOriginLength = 0, this._totalOffset = 0, this._offset = 0, this._tmpVertex = C(), this._tmpMbs = Hi(), this._tmpObb = new ka(), this._resetOffset(e);
  }
  _resetOffset(e) {
    this._offset = e, this._totalOffset = e;
  }
  set offset(e) {
    this._resetOffset(e);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(e) {
    this._totalOffset = this._offset + e;
  }
  set localOrigin(e) {
    this.componentLocalOriginLength = he(e);
  }
  applyToVertex(e, r, i) {
    const a = V(uo, e, r, i), o = V(zs, e, r, i + this.componentLocalOriginLength), n = this._totalOffset / he(o);
    return Ze(this._tmpVertex, a, o, n), this._tmpVertex;
  }
  applyToAabb(e) {
    const r = this.componentLocalOriginLength, i = e[0], a = e[1], o = e[2] + r, n = e[3], c = e[4], l = e[5] + r, u = Math.abs(i), d = Math.abs(a), h = Math.abs(o), v = Math.abs(n), f = Math.abs(c), g = Math.abs(l), S = 0.5 * (1 + Math.sign(i * n)) * Math.min(u, v), x = 0.5 * (1 + Math.sign(a * c)) * Math.min(d, f), P = 0.5 * (1 + Math.sign(o * l)) * Math.min(h, g), M = Math.max(u, v), I = Math.max(d, f), D = Math.max(h, g), U = Math.sqrt(S * S + x * x + P * P), N = Math.sign(u + i), E = Math.sign(d + a), w = Math.sign(h + o), O = Math.sign(v + n), A = Math.sign(f + c), b = Math.sign(g + l), R = this._totalOffset;
    if (U < R) return e[0] -= (1 - N) * R, e[1] -= (1 - E) * R, e[2] -= (1 - w) * R, e[3] += O * R, e[4] += A * R, e[5] += b * R, e;
    const T = R / Math.sqrt(M * M + I * I + D * D), L = R / U, B = L - T, j = -B;
    return e[0] += i * (N * j + L), e[1] += a * (E * j + L), e[2] += o * (w * j + L), e[3] += n * (O * B + T), e[4] += c * (A * B + T), e[5] += l * (b * B + T), e;
  }
  applyToMbs(e) {
    const r = he(Ee(e)), i = this._totalOffset / r;
    return Ze(Ee(this._tmpMbs), Ee(e), Ee(e), i), this._tmpMbs[3] = e[3] + e[3] * this._totalOffset / r, this._tmpMbs;
  }
  applyToObb(e) {
    return Ya(e, this._totalOffset, this._totalOffset, zt.Global, this._tmpObb), this._tmpObb;
  }
}, Fs = class {
  constructor(e = 0) {
    this.offset = e, this.sphere = Hi(), this.tmpVertex = C();
  }
  applyToVertex(e, r, i) {
    const a = this.objectTransform.transform, o = V(uo, e, r, i), n = we(o, o, a), c = this.offset / he(n);
    Ze(n, n, n, c);
    const l = this.objectTransform.inverse;
    return we(this.tmpVertex, n, l), this.tmpVertex;
  }
  applyToMinMax(e, r) {
    const i = this.offset / he(e);
    Ze(e, e, e, i);
    const a = this.offset / he(r);
    Ze(r, r, r, a);
  }
  applyToAabb(e) {
    const r = this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
    e[0] += e[0] * r, e[1] += e[1] * r, e[2] += e[2] * r;
    const i = this.offset / Math.sqrt(e[3] * e[3] + e[4] * e[4] + e[5] * e[5]);
    return e[3] += e[3] * i, e[4] += e[4] * i, e[5] += e[5] * i, e;
  }
  applyToBoundingSphere(e) {
    const r = he(Ee(e)), i = this.offset / r;
    return Ze(Ee(this.sphere), Ee(e), Ee(e), i), this.sphere[3] = e[3] + e[3] * this.offset / r, this.sphere;
  }
};
const li = new Fs();
function Bs(t) {
  return t != null ? (li.offset = t, li) : null;
}
new Ds();
const uo = C(), zs = C();
function ci(t, e, r) {
  const { data: i, indices: a } = t, o = e.typedBuffer, n = e.typedBufferStride, c = a.length;
  r *= n;
  for (let l = 0; l < c; ++l) {
    const u = 2 * a[l];
    o[r] = i[u], o[r + 1] = i[u + 1], r += n;
  }
}
function ho(t, e, r, i) {
  const { data: a, indices: o } = t, n = e.typedBuffer, c = e.typedBufferStride, l = o.length;
  if (r *= c, i == null || i === 1) for (let u = 0; u < l; ++u) {
    const d = 3 * o[u];
    n[r] = a[d], n[r + 1] = a[d + 1], n[r + 2] = a[d + 2], r += c;
  }
  else for (let u = 0; u < l; ++u) {
    const d = 3 * o[u];
    for (let h = 0; h < i; ++h) n[r] = a[d], n[r + 1] = a[d + 1], n[r + 2] = a[d + 2], r += c;
  }
}
function mo(t, e, r, i = 1) {
  const { data: a, indices: o } = t, n = e.typedBuffer, c = e.typedBufferStride, l = o.length;
  if (r *= c, i === 1) for (let u = 0; u < l; ++u) {
    const d = 4 * o[u];
    n[r] = a[d], n[r + 1] = a[d + 1], n[r + 2] = a[d + 2], n[r + 3] = a[d + 3], r += c;
  }
  else for (let u = 0; u < l; ++u) {
    const d = 4 * o[u];
    for (let h = 0; h < i; ++h) n[r] = a[d], n[r + 1] = a[d + 1], n[r + 2] = a[d + 2], n[r + 3] = a[d + 3], r += c;
  }
}
function Gs(t, e, r, i, a = 1) {
  if (!e) return void ho(t, r, i, a);
  const { data: o, indices: n } = t, c = r.typedBuffer, l = r.typedBufferStride, u = n.length, d = e[0], h = e[1], v = e[2], f = e[4], g = e[5], S = e[6], x = e[8], P = e[9], M = e[10], I = e[12], D = e[13], U = e[14];
  i *= l;
  let N = 0, E = 0, w = 0;
  const O = Ri(e) ? (A) => {
    N = o[A] + I, E = o[A + 1] + D, w = o[A + 2] + U;
  } : (A) => {
    const b = o[A], R = o[A + 1], T = o[A + 2];
    N = d * b + f * R + x * T + I, E = h * b + g * R + P * T + D, w = v * b + S * R + M * T + U;
  };
  if (a === 1) for (let A = 0; A < u; ++A) O(3 * n[A]), c[i] = N, c[i + 1] = E, c[i + 2] = w, i += l;
  else for (let A = 0; A < u; ++A) {
    O(3 * n[A]);
    for (let b = 0; b < a; ++b) c[i] = N, c[i + 1] = E, c[i + 2] = w, i += l;
  }
}
function Vs(t, e, r, i, a = 1) {
  if (!e) return void ho(t, r, i, a);
  const { data: o, indices: n } = t, c = e, l = r.typedBuffer, u = r.typedBufferStride, d = n.length, h = c[0], v = c[1], f = c[2], g = c[4], S = c[5], x = c[6], P = c[8], M = c[9], I = c[10], D = !Ii(c), U = 1e-6, N = 1 - U;
  i *= u;
  let E = 0, w = 0, O = 0;
  const A = Ri(c) ? (b) => {
    E = o[b], w = o[b + 1], O = o[b + 2];
  } : (b) => {
    const R = o[b], T = o[b + 1], L = o[b + 2];
    E = h * R + g * T + P * L, w = v * R + S * T + M * L, O = f * R + x * T + I * L;
  };
  if (a === 1) if (D) for (let b = 0; b < d; ++b) {
    A(3 * n[b]);
    const R = E * E + w * w + O * O;
    if (R < N && R > U) {
      const T = 1 / Math.sqrt(R);
      l[i] = E * T, l[i + 1] = w * T, l[i + 2] = O * T;
    } else l[i] = E, l[i + 1] = w, l[i + 2] = O;
    i += u;
  }
  else for (let b = 0; b < d; ++b) A(3 * n[b]), l[i] = E, l[i + 1] = w, l[i + 2] = O, i += u;
  else for (let b = 0; b < d; ++b) {
    if (A(3 * n[b]), D) {
      const R = E * E + w * w + O * O;
      if (R < N && R > U) {
        const T = 1 / Math.sqrt(R);
        E *= T, w *= T, O *= T;
      }
    }
    for (let R = 0; R < a; ++R) l[i] = E, l[i + 1] = w, l[i + 2] = O, i += u;
  }
}
function Us(t, e, r, i, a = 1) {
  if (!e) return void mo(t, r, i, a);
  const { data: o, indices: n } = t, c = e, l = r.typedBuffer, u = r.typedBufferStride, d = n.length, h = c[0], v = c[1], f = c[2], g = c[4], S = c[5], x = c[6], P = c[8], M = c[9], I = c[10], D = !Ii(c), U = 1e-6, N = 1 - U;
  if (i *= u, a === 1) for (let E = 0; E < d; ++E) {
    const w = 4 * n[E], O = o[w], A = o[w + 1], b = o[w + 2], R = o[w + 3];
    let T = h * O + g * A + P * b, L = v * O + S * A + M * b, B = f * O + x * A + I * b;
    if (D) {
      const j = T * T + L * L + B * B;
      if (j < N && j > U) {
        const K = 1 / Math.sqrt(j);
        T *= K, L *= K, B *= K;
      }
    }
    l[i] = T, l[i + 1] = L, l[i + 2] = B, l[i + 3] = R, i += u;
  }
  else for (let E = 0; E < d; ++E) {
    const w = 4 * n[E], O = o[w], A = o[w + 1], b = o[w + 2], R = o[w + 3];
    let T = h * O + g * A + P * b, L = v * O + S * A + M * b, B = f * O + x * A + I * b;
    if (D) {
      const j = T * T + L * L + B * B;
      if (j < N && j > U) {
        const K = 1 / Math.sqrt(j);
        T *= K, L *= K, B *= K;
      }
    }
    for (let j = 0; j < a; ++j) l[i] = T, l[i + 1] = L, l[i + 2] = B, l[i + 3] = R, i += u;
  }
}
function js(t, e, r, i, a = 1) {
  const { data: o, indices: n } = t, c = r.typedBuffer, l = r.typedBufferStride, u = n.length;
  if (i *= l, e !== o.length || e !== 4) if (a !== 1) if (e !== 4) for (let d = 0; d < u; ++d) {
    const h = 3 * n[d];
    for (let v = 0; v < a; ++v) c[i] = o[h], c[i + 1] = o[h + 1], c[i + 2] = o[h + 2], c[i + 3] = 255, i += l;
  }
  else for (let d = 0; d < u; ++d) {
    const h = 4 * n[d];
    for (let v = 0; v < a; ++v) c[i] = o[h], c[i + 1] = o[h + 1], c[i + 2] = o[h + 2], c[i + 3] = o[h + 3], i += l;
  }
  else {
    if (e === 4) {
      for (let d = 0; d < u; ++d) {
        const h = 4 * n[d];
        c[i] = o[h], c[i + 1] = o[h + 1], c[i + 2] = o[h + 2], c[i + 3] = o[h + 3], i += l;
      }
      return;
    }
    for (let d = 0; d < u; ++d) {
      const h = 3 * n[d];
      c[i] = o[h], c[i + 1] = o[h + 1], c[i + 2] = o[h + 2], c[i + 3] = 255, i += l;
    }
  }
  else {
    c[i] = o[0], c[i + 1] = o[1], c[i + 2] = o[2], c[i + 3] = o[3];
    const d = new Uint32Array(r.typedBuffer.buffer, r.start), h = l / 4, v = d[i /= 4];
    i += h;
    const f = u * a;
    for (let g = 1; g < f; ++g) d[i] = v, i += h;
  }
}
function Hs(t, e, r) {
  const { data: i, indices: a } = t, o = e.typedBuffer, n = e.typedBufferStride, c = a.length, l = i[0];
  r *= n;
  for (let u = 0; u < c; ++u) o[r] = l, r += n;
}
function Ws(t, e, r, i, a = 1) {
  const o = e.typedBuffer, n = e.typedBufferStride;
  if (i *= n, a === 1) for (let c = 0; c < r; ++c) o[i] = t[0], o[i + 1] = t[1], o[i + 2] = t[2], o[i + 3] = t[3], i += n;
  else for (let c = 0; c < r; ++c) for (let l = 0; l < a; ++l) o[i] = t[0], o[i + 1] = t[1], o[i + 2] = t[2], o[i + 3] = t[3], i += n;
}
function qs(t, e, r, i, a, o) {
  for (const n of e.fields.keys()) {
    const c = t.attributes.get(n), l = c?.indices;
    if (c && l) ks(n, c, r, i, a, o);
    else if (n === p.OBJECTANDLAYERIDCOLOR && t.objectAndLayerIdColor != null) {
      const u = t.attributes.get(p.POSITION)?.indices;
      if (u) {
        const d = u.length, h = a.getField(n, Zt);
        Ws(t.objectAndLayerIdColor, h, d, o);
      }
    }
  }
}
function ks(t, e, r, i, a, o) {
  switch (t) {
    case p.POSITION: {
      W(e.size === 3);
      const n = a.getField(t, Ut);
      W(!!n, `No buffer view for ${t}`), n && Gs(e, r, n, o);
      break;
    }
    case p.NORMAL: {
      W(e.size === 3);
      const n = a.getField(t, Ut);
      W(!!n, `No buffer view for ${t}`), n && Vs(e, i, n, o);
      break;
    }
    case p.NORMALCOMPRESSED: {
      W(e.size === 2);
      const n = a.getField(t, $a);
      W(!!n, `No buffer view for ${t}`), n && ci(e, n, o);
      break;
    }
    case p.UV0: {
      W(e.size === 2);
      const n = a.getField(t, Ia);
      W(!!n, `No buffer view for ${t}`), n && ci(e, n, o);
      break;
    }
    case p.COLOR:
    case p.SYMBOLCOLOR: {
      const n = a.getField(t, Zt);
      W(!!n, `No buffer view for ${t}`), W(e.size === 3 || e.size === 4), !n || e.size !== 3 && e.size !== 4 || js(e, e.size, n, o);
      break;
    }
    case p.COLORFEATUREATTRIBUTE: {
      const n = a.getField(t, Ra);
      W(!!n, `No buffer view for ${t}`), W(e.size === 1), n && e.size === 1 && Hs(e, n, o);
      break;
    }
    case p.TANGENT: {
      W(e.size === 4);
      const n = a.getField(t, _r);
      W(!!n, `No buffer view for ${t}`), n && Us(e, r, n, o);
      break;
    }
    case p.PROFILERIGHT:
    case p.PROFILEUP:
    case p.PROFILEVERTEXANDNORMAL:
    case p.FEATUREVALUE: {
      W(e.size === 4);
      const n = a.getField(t, _r);
      W(!!n, `No buffer view for ${t}`), n && mo(e, n, o);
    }
  }
}
let Ys = class {
  constructor(e) {
    this.vertexBufferLayout = e;
  }
  elementCount(e) {
    return e.attributes.get(p.POSITION).indices.length;
  }
  write(e, r, i, a, o) {
    qs(i, this.vertexBufferLayout, e, r, a, o);
  }
};
function Dr(t) {
  t.attributes.add(p.POSITION, "vec3"), t.vertex.code.add(s`vec3 positionModel() { return position; }`);
}
function fo(t, e) {
  t.include(Dr);
  const r = t.vertex;
  r.include(ki, e), t.varyings.add("vPositionWorldCameraRelative", "vec3"), t.varyings.add("vPosition_view", "vec3"), r.uniforms.add(new J("transformWorldFromViewTH", (i) => i.transformWorldFromViewTH), new J("transformWorldFromViewTL", (i) => i.transformWorldFromViewTL), new pe("transformViewFromCameraRelativeRS", (i) => i.transformViewFromCameraRelativeRS), new at("transformProjFromView", (i) => i.transformProjFromView), new Yi("transformWorldFromModelRS", (i) => i.transformWorldFromModelRS), new ce("transformWorldFromModelTH", (i) => i.transformWorldFromModelTH), new ce("transformWorldFromModelTL", (i) => i.transformWorldFromModelTL)), r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`), r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical ? s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)` : s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `), t.fragment.uniforms.add(new J("transformWorldFromViewTL", (i) => i.transformWorldFromViewTL)), r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
class Xs extends wt {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = C(), this.transformWorldFromViewTL = C(), this.transformViewFromCameraRelativeRS = yt(), this.transformProjFromView = Jt();
  }
}
function po(t, e) {
  switch (e.normalType) {
    case Z.Attribute:
    case Z.Compressed:
      t.include(Kt, e), t.varyings.add("vNormalWorld", "vec3"), t.varyings.add("vNormalView", "vec3"), t.vertex.uniforms.add(new Yi("transformNormalGlobalFromModel", (r) => r.transformNormalGlobalFromModel), new pe("transformNormalViewFromGlobal", (r) => r.transformNormalViewFromGlobal)), t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);
      break;
    case Z.Ground:
      t.include(fo, e), t.varyings.add("vNormalWorld", "vec3"), t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical ? s`normalize(vPositionWorldCameraRelative);` : s`vec3(0.0, 0.0, 1.0);`}
        }
        `);
      break;
    case Z.ScreenDerivative:
      t.vertex.code.add(s`void forwardNormal() {}`);
      break;
    default:
      Et(e.normalType);
    case Z.COUNT:
  }
}
let Js = class extends Xs {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = yt();
  }
};
const Zs = 0.1, Fr = 1e-3;
let er = class {
  constructor(e, r) {
    this._module = e, this._loadModule = r;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._loadModule(), this._module;
  }
}, Br = class {
  constructor(e, r, i) {
    this.release = i, this.initializeConfiguration(e, r), this._configuration = r.snapshot(), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e);
  }
  destroy() {
    this._program = Bt(this._program), this._pipeline = this._configuration = null;
  }
  reload(e) {
    Bt(this._program), this._program = this.initializeProgram(e), this._pipeline = this.initializePipeline(e);
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.compiled;
  }
  get key() {
    return this._configuration.key;
  }
  get configuration() {
    return this._configuration;
  }
  ensureAttributeLocations(e) {
    this.program.assertCompatibleVertexAttributeLocations(e);
  }
  get primitiveType() {
    return Ka.TRIANGLES;
  }
  getPipeline(e, r, i) {
    return this._pipeline;
  }
  initializeConfiguration(e, r) {
  }
}, zr = class {
  constructor(e, r, i) {
    this._context = e, this._locations = i, this._textures = /* @__PURE__ */ new Map(), this._freeTextureUnits = new Mi({ deallocator: null }), this._glProgram = e.programCache.acquire(r.generate("vertex"), r.generate("fragment"), i), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bindPass = r.generateBindPass(this), this.bindDraw = r.generateBindDraw(this), this._fragmentUniforms = on() ? r.fragmentUniforms : null;
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get hasTransformFeedbackVaryings() {
    return this._glProgram.hasTransformFeedbackVaryings;
  }
  get compiled() {
    return this._glProgram.compiled;
  }
  setUniform1b(e, r) {
    this._glProgram.setUniform1i(e, r ? 1 : 0);
  }
  setUniform1i(e, r) {
    this._glProgram.setUniform1i(e, r);
  }
  setUniform1f(e, r) {
    this._glProgram.setUniform1f(e, r);
  }
  setUniform2fv(e, r) {
    this._glProgram.setUniform2fv(e, r);
  }
  setUniform3fv(e, r) {
    this._glProgram.setUniform3fv(e, r);
  }
  setUniform4fv(e, r) {
    this._glProgram.setUniform4fv(e, r);
  }
  setUniformMatrix3fv(e, r) {
    this._glProgram.setUniformMatrix3fv(e, r);
  }
  setUniformMatrix4fv(e, r) {
    this._glProgram.setUniformMatrix4fv(e, r);
  }
  setUniform1fv(e, r) {
    this._glProgram.setUniform1fv(e, r);
  }
  setUniform1iv(e, r) {
    this._glProgram.setUniform1iv(e, r);
  }
  setUniform2iv(e, r) {
    this._glProgram.setUniform3iv(e, r);
  }
  setUniform3iv(e, r) {
    this._glProgram.setUniform3iv(e, r);
  }
  setUniform4iv(e, r) {
    this._glProgram.setUniform4iv(e, r);
  }
  assertCompatibleVertexAttributeLocations(e) {
    e.locations !== this._locations && console.error("VertexAttributeLocations are incompatible");
  }
  stop() {
    this._textures.clear(), this._freeTextureUnits.clear();
  }
  bindTexture(e, r) {
    if (r?.glName == null) {
      const a = this._textures.get(e);
      return a && (this._context.bindTexture(null, a.unit), this._freeTextureUnit(a), this._textures.delete(e)), null;
    }
    let i = this._textures.get(e);
    return i == null ? (i = this._allocTextureUnit(r), this._textures.set(e, i)) : i.texture = r, this._context.useProgram(this), this.setUniform1i(e, i.unit), this._context.bindTexture(r, i.unit), i.unit;
  }
  rebindTextures() {
    this._context.useProgram(this), this._textures.forEach((e, r) => {
      this._context.bindTexture(e.texture, e.unit), this.setUniform1i(r, e.unit);
    }), this._fragmentUniforms?.forEach((e) => {
      e.type !== "sampler2D" && e.type !== "samplerCube" || this._textures.has(e.name) || console.error(`Texture sampler ${e.name} has no bound texture`);
    });
  }
  _allocTextureUnit(e) {
    return { texture: e, unit: this._freeTextureUnits.length === 0 ? this._textures.size : this._freeTextureUnits.pop() };
  }
  _freeTextureUnit(e) {
    this._freeTextureUnits.push(e.unit);
  }
};
fe.LESS;
fe.ALWAYS;
const Ks = { mask: 255 }, Qs = { function: { func: fe.ALWAYS, ref: Me.OutlineVisualElementMask, mask: Me.OutlineVisualElementMask }, operation: { fail: ne.KEEP, zFail: ne.KEEP, zPass: ne.ZERO } }, el = { function: { func: fe.ALWAYS, ref: Me.OutlineVisualElementMask, mask: Me.OutlineVisualElementMask }, operation: { fail: ne.KEEP, zFail: ne.KEEP, zPass: ne.REPLACE } };
fe.EQUAL, Me.OutlineVisualElementMask, Me.OutlineVisualElementMask, ne.KEEP, ne.KEEP, ne.KEEP;
fe.NOTEQUAL, Me.OutlineVisualElementMask, Me.OutlineVisualElementMask, ne.KEEP, ne.KEEP, ne.KEEP;
function tl({ normalTexture: t, metallicRoughnessTexture: e, metallicFactor: r, roughnessFactor: i, emissiveTexture: a, emissiveFactor: o, occlusionTexture: n }) {
  return t == null && e == null && a == null && (o == null || Ta(o, Yt)) && n == null && (i == null || i === 1) && (r == null || r === 1);
}
const vo = [1, 1, 0.5], rl = [0, 0.6, 0.2], il = [0, 1, 0.2];
let st = class extends ee {
  constructor(e, r) {
    super(e, "vec2", F.Pass, (i, a, o) => i.setUniform2fv(e, r(a, o)));
  }
};
function di(t) {
  t.varyings.add("linearDepth", "float");
}
function go(t) {
  t.vertex.uniforms.add(new st("nearFar", (e, r) => r.camera.nearFar));
}
function xo(t) {
  t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function To(t, e) {
  const { vertex: r } = t;
  switch (e.output) {
    case z.Color:
      if (e.receiveShadows) return di(t), void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case z.Shadow:
    case z.ShadowHighlight:
    case z.ShadowExcludeHighlight:
    case z.ViewshedShadow:
      return t.include(fo, e), di(t), go(t), xo(t), void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  r.code.add(s`void forwardLinearDepth() {}`);
}
function _o(t) {
  t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}
function Ke(t, e) {
  ol(t, e, new ce("slicePlaneOrigin", (r, i) => al(e, r, i)), new ce("slicePlaneBasis1", (r, i) => ui(e, r, i, i.slicePlane?.basis1)), new ce("slicePlaneBasis2", (r, i) => ui(e, r, i, i.slicePlane?.basis2)));
}
function ol(t, e, ...r) {
  if (!e.hasSlicePlane) {
    const n = s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
    return e.hasSliceInVertexProgram && t.vertex.code.add(n), void t.fragment.code.add(n);
  }
  e.hasSliceInVertexProgram && t.vertex.uniforms.add(...r), t.fragment.uniforms.add(...r);
  const i = s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`, a = s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`, o = e.hasSliceHighlight ? s`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      ` : s`#define highlightSlice(_color_, _pos_) (_color_)`;
  e.hasSliceInVertexProgram && t.vertex.code.add(i), t.fragment.code.add(i), t.fragment.code.add(o);
}
function bo(t, e, r) {
  return t.instancedDoublePrecision ? V(nl, r.camera.viewInverseTransposeMatrix[3], r.camera.viewInverseTransposeMatrix[7], r.camera.viewInverseTransposeMatrix[11]) : e.slicePlaneLocalOrigin;
}
function So(t, e) {
  return t != null ? Ae(Wt, e.origin, t) : e.origin;
}
function Eo(t, e, r) {
  return t.hasSliceTranslatedView ? e != null ? xr(sl, r.camera.viewMatrix, e) : r.camera.viewMatrix : null;
}
function al(t, e, r) {
  if (r.slicePlane == null) return Yt;
  const i = bo(t, e, r), a = So(i, r.slicePlane), o = Eo(t, i, r);
  return o != null ? we(Wt, a, o) : a;
}
function ui(t, e, r, i) {
  if (i == null || r.slicePlane == null) return Yt;
  const a = bo(t, e, r), o = So(a, r.slicePlane), n = Eo(t, a, r);
  return n != null ? (ue(ut, i, o), we(Wt, o, n), we(ut, ut, n), Ae(ut, ut, Wt)) : i;
}
const nl = C(), Wt = C(), ut = C(), sl = Jt();
function Qe(t) {
  xo(t), t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`), t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}
let ll = class extends ee {
  constructor(e, r) {
    super(e, "mat4", F.Draw, (i, a, o) => i.setUniformMatrix4fv(e, r(a, o)));
  }
};
function bt(t, e) {
  e.instancedDoublePrecision ? t.constants.add("cameraPosition", "vec3", Yt) : t.uniforms.add(new ce("cameraPosition", (r, i) => V(yo, i.camera.viewInverseTransposeMatrix[3] - r.origin[0], i.camera.viewInverseTransposeMatrix[7] - r.origin[1], i.camera.viewInverseTransposeMatrix[11] - r.origin[2])));
}
function et(t, e) {
  if (!e.instancedDoublePrecision) return void t.uniforms.add(new at("proj", (i, a) => a.camera.projectionMatrix), new ll("view", (i, a) => xr(hi, a.camera.viewMatrix, i.origin)), new ce("localOrigin", (i) => i.origin));
  const r = (i) => V(yo, i.camera.viewInverseTransposeMatrix[3], i.camera.viewInverseTransposeMatrix[7], i.camera.viewInverseTransposeMatrix[11]);
  t.uniforms.add(new at("proj", (i, a) => a.camera.projectionMatrix), new at("view", (i, a) => xr(hi, a.camera.viewMatrix, r(a))), new J("localOrigin", (i, a) => r(a)));
}
const hi = Jt(), yo = C();
function cl(t) {
  t.uniforms.add(new at("viewNormal", (e, r) => r.camera.viewInverseTransposeMatrix));
}
let dl = class extends wt {
  constructor() {
    super(), this._key = "", this._keyDirty = !1, this._parameterBits = this._parameterBits ? this._parameterBits.map(() => 0) : [], this._parameterNames || (this._parameterNames = []);
  }
  get key() {
    return this._keyDirty && (this._keyDirty = !1, this._key = String.fromCharCode.apply(String, this._parameterBits)), this._key;
  }
  snapshot() {
    const e = this._parameterNames, r = { key: this.key };
    for (const i of e) r[i] = this[i];
    return r;
  }
};
function _(t = {}) {
  return (e, r) => {
    if (e._parameterNames = e._parameterNames ?? [], e._parameterNames.push(r), t.constValue != null) Object.defineProperty(e, r, { get: () => t.constValue });
    else {
      const i = e._parameterNames.length - 1, a = t.count || 2, o = Math.ceil(Math.log2(a)), n = e._parameterBits ?? [0];
      let c = 0;
      for (; n[c] + o > 16; ) c++, c >= n.length && n.push(0);
      e._parameterBits = n;
      const l = n[c], u = (1 << o) - 1 << l;
      n[c] += o, Object.defineProperty(e, r, { get() {
        return this[i];
      }, set(d) {
        if (this[i] !== d && (this[i] = d, this._keyDirty = !0, this._parameterBits[c] = this._parameterBits[c] & ~u | +d << l & u, typeof d != "number" && typeof d != "boolean")) throw new Error("Configuration value for " + r + " must be boolean or number, got " + typeof d);
      } });
    }
  };
}
let Er = class extends dl {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = !1, this.hasModelTransformation = !1;
  }
};
m([_()], Er.prototype, "instancedDoublePrecision", void 0), m([_()], Er.prototype, "hasModelTransformation", void 0);
const mi = yt();
function Ao(t, e) {
  const r = e.hasModelTransformation, i = e.instancedDoublePrecision;
  r && (t.vertex.uniforms.add(new at("model", (o) => o.modelTransformation ?? Vt)), t.vertex.uniforms.add(new pe("normalLocalOriginFromModel", (o) => ($i(mi, o.modelTransformation ?? Vt), mi)))), e.instanced && i && (t.attributes.add(p.INSTANCEMODELORIGINHI, "vec3"), t.attributes.add(p.INSTANCEMODELORIGINLO, "vec3"), t.attributes.add(p.INSTANCEMODEL, "mat3"), t.attributes.add(p.INSTANCEMODELNORMAL, "mat3"));
  const a = t.vertex;
  i && (a.include(ki, e), a.uniforms.add(new ce("viewOriginHi", (o, n) => ln(V(Lt, n.camera.viewInverseTransposeMatrix[3], n.camera.viewInverseTransposeMatrix[7], n.camera.viewInverseTransposeMatrix[11]), Lt)), new ce("viewOriginLo", (o, n) => cn(V(Lt, n.camera.viewInverseTransposeMatrix[3], n.camera.viewInverseTransposeMatrix[7], n.camera.viewInverseTransposeMatrix[11]), Lt)))), a.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r ? i ? "(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz" : "(model * localPosition()).xyz" : i ? "instanceModel * localPosition().xyz" : "localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i ? s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), a.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r ? i ? "normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)" : "normalLocalOriginFromModel * _normal.xyz" : i ? "instanceModelNormal * _normal.xyz" : "_normal.xyz"});
    }
    `), e.output === z.Normal && (cl(a), a.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r ? i ? "vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)" : "vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)" : i ? "vec4(instanceModelNormal * _normal.xyz, 1.0)" : "_normal"}).xyz);
    }
    `)), e.hasVertexTangents && a.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r ? i ? "return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);" : "return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);" : i ? "return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}
    }`);
}
const Lt = C();
let wo = class extends ee {
  constructor(e, r) {
    super(e, "int", F.Pass, (i, a, o) => i.setUniform1i(e, r(a, o)));
  }
};
function Mo(t, e) {
  e.hasSymbolColors ? (t.include(dn), t.attributes.add(p.SYMBOLCOLOR, "vec4"), t.varyings.add("colorMixMode", "mediump float"), t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (t.fragment.uniforms.add(new wo("colorMixMode", (r) => cs[r.colorMixMode])), t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}
function Co(t, e) {
  e.hasVertexColors ? (t.attributes.add(p.COLOR, "vec4"), t.varyings.add("vColor", "vec4"), t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`), t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}
function ul(t) {
  t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`), t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function hl(t) {
  t.uniforms.add(new J("screenSizePerspectiveAlignment", (e) => ml(e.screenSizePerspectiveAlignment || e.screenSizePerspective)));
}
function ml(t) {
  return V(fl, t.parameters.divisor, t.parameters.offset, t.minScaleFactor);
}
const fl = C();
let te = class extends ee {
  constructor(e, r) {
    super(e, "vec4", F.Pass, (i, a, o) => i.setUniform4fv(e, r(a, o)));
  }
};
function Oo(t, e) {
  const r = t.vertex;
  e.hasVerticalOffset ? (vl(r), e.hasScreenSizePerspective && (t.include(ul), hl(r), bt(t.vertex, e)), r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical ? s`vec3 worldNormal = normalize(worldPos + localOrigin);` : s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective ? s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
const pl = Cr();
function vl(t) {
  t.uniforms.add(new te("verticalOffset", (e, r) => {
    const { minWorldLength: i, maxWorldLength: a, screenLength: o } = e.verticalOffset, n = Math.tan(0.5 * r.camera.fovY) / (0.5 * r.camera.fullViewport[3]), c = r.camera.pixelRatio || 1;
    return oe(pl, o * c, n, i, a);
  }));
}
function gl(t, e) {
  const r = e.output === z.ObjectAndLayerIdColor, i = e.objectAndLayerIdColorInstanced;
  r && (t.varyings.add("objectAndLayerIdColorVarying", "vec4"), i ? t.attributes.add(p.INSTANCEOBJECTANDLAYERIDCOLOR, "vec4") : t.attributes.add(p.OBJECTANDLAYERIDCOLOR, "vec4")), t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r ? i ? s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;` : s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;` : s``} }`), t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r ? s`fragColor = objectAndLayerIdColorVarying;` : s``} }`);
}
function Ro(t) {
  t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`);
}
function xl(t, e) {
  switch (e.output) {
    case z.Shadow:
    case z.ShadowHighlight:
    case z.ShadowExcludeHighlight:
    case z.ViewshedShadow:
      t.fragment.include(Ro), t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);
  }
}
const Tl = Or(1, 1, 0, 1), _l = Or(1, 0, 1, 1);
function bl(t) {
  t.fragment.uniforms.add(new Q("depthTexture", (e, r) => r.mainDepth)), t.fragment.constants.add("occludedHighlightFlag", "vec4", Tl).add("unoccludedHighlightFlag", "vec4", _l), t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`);
}
let Sl = class extends ee {
  constructor(e, r, i) {
    super(e, "vec4", F.Pass, (a, o, n) => a.setUniform4fv(e, r(o, n)), i);
  }
}, El = class extends ee {
  constructor(e, r, i) {
    super(e, "float", F.Pass, (a, o, n) => a.setUniform1fv(e, r(o, n)), i);
  }
}, H = class extends Pi {
  constructor() {
    super(...arguments), this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR = !1, this.DECONFLICTOR_SHOW_VISIBLE = !1, this.DECONFLICTOR_SHOW_INVISIBLE = !1, this.DECONFLICTOR_SHOW_GRID = !1, this.LABELS_SHOW_BORDER = !1, this.TEXT_SHOW_BASELINE = !1, this.TEXT_SHOW_BORDER = !1, this.OVERLAY_DRAW_DEBUG_TEXTURE = !1, this.OVERLAY_SHOW_CENTER = !1, this.SHOW_POI = !1, this.TESTS_DISABLE_OPTIMIZATIONS = !1, this.TESTS_DISABLE_FAST_UPDATES = !1, this.DRAW_MESH_GEOMETRY_NORMALS = !1, this.FEATURE_TILE_FETCH_SHOW_TILES = !1, this.FEATURE_TILE_TREE_SHOW_TILES = !1, this.TERRAIN_TILE_TREE_SHOW_TILES = !1, this.I3S_TREE_SHOW_TILES = !1, this.I3S_SHOW_MODIFICATIONS = !1, this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES = !1, this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL = !1, this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES = !1, this.LINE_WIREFRAMES = !1;
  }
};
m([G()], H.prototype, "SCENEVIEW_HITTEST_RETURN_INTERSECTOR", void 0), m([G()], H.prototype, "DECONFLICTOR_SHOW_VISIBLE", void 0), m([G()], H.prototype, "DECONFLICTOR_SHOW_INVISIBLE", void 0), m([G()], H.prototype, "DECONFLICTOR_SHOW_GRID", void 0), m([G()], H.prototype, "LABELS_SHOW_BORDER", void 0), m([G()], H.prototype, "TEXT_SHOW_BASELINE", void 0), m([G()], H.prototype, "TEXT_SHOW_BORDER", void 0), m([G()], H.prototype, "OVERLAY_DRAW_DEBUG_TEXTURE", void 0), m([G()], H.prototype, "OVERLAY_SHOW_CENTER", void 0), m([G()], H.prototype, "SHOW_POI", void 0), m([G()], H.prototype, "TESTS_DISABLE_OPTIMIZATIONS", void 0), m([G()], H.prototype, "TESTS_DISABLE_FAST_UPDATES", void 0), m([G()], H.prototype, "DRAW_MESH_GEOMETRY_NORMALS", void 0), m([G()], H.prototype, "FEATURE_TILE_FETCH_SHOW_TILES", void 0), m([G()], H.prototype, "FEATURE_TILE_TREE_SHOW_TILES", void 0), m([G()], H.prototype, "TERRAIN_TILE_TREE_SHOW_TILES", void 0), m([G()], H.prototype, "I3S_TREE_SHOW_TILES", void 0), m([G()], H.prototype, "I3S_SHOW_MODIFICATIONS", void 0), m([G()], H.prototype, "LOD_INSTANCE_RENDERER_DISABLE_UPDATES", void 0), m([G()], H.prototype, "LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL", void 0), m([G()], H.prototype, "EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES", void 0), m([G()], H.prototype, "LINE_WIREFRAMES", void 0), H = m([Rr("esri.views.3d.support.debugFlags")], H);
new H();
var fi, pi;
(function(t) {
  t[t.Undefined = 0] = "Undefined", t[t.DefinedSize = 1] = "DefinedSize", t[t.DefinedScale = 2] = "DefinedScale";
})(fi || (fi = {})), function(t) {
  t[t.Undefined = 0] = "Undefined", t[t.DefinedAngle = 1] = "DefinedAngle";
}(pi || (pi = {}));
const mr = 8;
function _t(t, e) {
  const { vertex: r, attributes: i } = t;
  e.hasVvInstancing && (e.vvSize || e.vvColor) && i.add(p.INSTANCEFEATUREATTRIBUTE, "vec4"), e.vvSize ? (r.uniforms.add(new J("vvSizeMinSize", (a) => a.vvSize.minSize)), r.uniforms.add(new J("vvSizeMaxSize", (a) => a.vvSize.maxSize)), r.uniforms.add(new J("vvSizeOffset", (a) => a.vvSize.offset)), r.uniforms.add(new J("vvSizeFactor", (a) => a.vvSize.factor)), r.uniforms.add(new pe("vvSymbolRotationMatrix", (a) => a.vvSymbolRotationMatrix)), r.uniforms.add(new J("vvSymbolAnchor", (a) => a.vvSymbolAnchor)), r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing ? s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), e.vvColor ? (r.constants.add("vvColorNumber", "int", mr), r.uniforms.add(new El("vvColorValues", (a) => a.vvColor.values, mr), new Sl("vvColorColors", (a) => a.vvColor.colors, mr)), r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing ? s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }` : "vec4 vvColor() { return vec4(1.0); }"}
    `)) : r.code.add(s`vec4 vvColor() { return vec4(1.0); }`);
}
function yl(t) {
  t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Fr)}) { discard; } }
  `);
}
function tt(t, e) {
  Al(t, e, new se("textureAlphaCutoff", (r) => r.textureAlphaCutoff));
}
function Al(t, e, r) {
  const i = t.fragment;
  switch (e.alphaDiscardMode !== X.Mask && e.alphaDiscardMode !== X.MaskBlend || i.uniforms.add(r), e.alphaDiscardMode) {
    case X.Blend:
      return t.include(yl);
    case X.Opaque:
      i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
      break;
    case X.Mask:
      i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);
      break;
    case X.MaskBlend:
      t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);
  }
}
function Io(t, e) {
  const { vertex: r, fragment: i } = t, a = e.hasColorTexture && e.alphaDiscardMode !== X.Opaque;
  switch (e.output) {
    case z.Depth:
      et(r, e), t.include(Qe, e), t.include(Ke, e), t.include(ze, e), a && i.uniforms.add(new Q("tex", (o) => o.texture)), r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`), t.include(tt, e), i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
          }
        `);
      break;
    case z.Shadow:
    case z.ShadowHighlight:
    case z.ShadowExcludeHighlight:
    case z.ViewshedShadow:
    case z.ObjectAndLayerIdColor:
      et(r, e), t.include(Qe, e), t.include(ze, e), t.include(_t, e), t.include(xl, e), t.include(Ke, e), t.include(gl, e), go(t), t.varyings.add("depth", "float"), a && i.uniforms.add(new Q("tex", (o) => o.texture)), r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`), t.include(tt, e), i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            ${e.output === z.ObjectAndLayerIdColor ? s`outputObjectAndLayerIdColor();` : s`outputDepth(depth);`}
          }
        `);
      break;
    case z.Normal: {
      et(r, e), t.include(Qe, e), t.include(Kt, e), t.include(po, e), t.include(ze, e), t.include(_t, e), a && i.uniforms.add(new Q("tex", (n) => n.texture)), e.normalType === Z.ScreenDerivative && t.varyings.add("vPositionView", "vec3");
      const o = e.normalType === Z.Attribute || e.normalType === Z.Compressed;
      r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o ? s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `), t.include(Ke, e), t.include(tt, e), i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}

            ${e.normalType === Z.ScreenDerivative ? s`vec3 normal = screenDerivativeNormal(vPositionView);` : s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);
      break;
    }
    case z.Highlight:
      et(r, e), t.include(Qe, e), t.include(ze, e), t.include(_t, e), a && i.uniforms.add(new Q("tex", (o) => o.texture)), r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`), t.include(Ke, e), t.include(tt, e), t.include(bl, e), i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a ? s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            outputHighlight();
          }
        `);
  }
}
function wl(t, e) {
  const r = t.fragment;
  e.hasVertexTangents ? (t.attributes.add(p.TANGENT, "vec4"), t.varyings.add("vTangent", "vec4"), e.doubleSidedMode === re.WindingOrder ? r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`), e.textureCoordinateType !== k.None && (t.include(no, e), r.uniforms.add(e.pbrTextureBindType === F.Pass ? new Q("normalTexture", (i) => i.textureNormal) : new gt("normalTexture", (i) => i.textureNormal)), e.hasNormalTextureTransform && (r.uniforms.add(new st("scale", (i) => i.scale ?? Li)), r.uniforms.add(new pe("normalTextureTransformMatrix", (i) => i.normalTextureTransformMatrix ?? ct))), r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`), e.hasNormalTextureTransform && r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`), r.code.add(s`return tangentSpace * rawNormal;
}`));
}
var rt, vi;
(function(t) {
  t[t.RED = 0] = "RED", t[t.RG = 1] = "RG", t[t.RGBA4 = 2] = "RGBA4", t[t.RGBA = 3] = "RGBA", t[t.RGBA_MIPMAP = 4] = "RGBA_MIPMAP", t[t.R16F = 5] = "R16F", t[t.RGBA16F = 6] = "RGBA16F";
})(rt || (rt = {})), function(t) {
  t[t.DEPTH_STENCIL_TEXTURE = 0] = "DEPTH_STENCIL_TEXTURE", t[t.DEPTH16_BUFFER = 1] = "DEPTH16_BUFFER";
}(vi || (vi = {}));
let Je = class extends Pi {
  constructor(e) {
    super(e), this.view = null, this.consumes = { required: [] }, this.produces = "composite-color", this._context = null, this._dirty = !0;
  }
  initialize() {
    this.addHandles([Ni(() => this.view.ready, (e) => {
      e && this.view._stage?.renderer.addRenderNode(this);
    }, _a)]);
  }
  destroy() {
    this.view._stage?.renderer?.removeRenderNode(this);
  }
  render() {
    throw new St("RenderNode:render-function-not-implemented", "render() is not implemented.");
  }
  get camera() {
    return this.view.state.camera.clone();
  }
  get sunLight() {
    return this.bindParameters.lighting.legacy;
  }
  get gl() {
    return this.view._stage.renderView.renderingContext.gl;
  }
  acquireOutputFramebuffer() {
    const e = this._frameBuffer?.getTexture()?.descriptor, r = this.view._stage.renderer.fboCache.acquire(e?.width ?? 640, e?.height ?? 480, this.produces);
    return r.fbo?.initializeAndBind(), r;
  }
  bindRenderTarget() {
    return this._frameBuffer?.fbo?.initializeAndBind(), this._frameBuffer;
  }
  requestRender(e) {
    e === Ui.UPDATE && this.view._stage?.renderView.requestRender(e), this._dirty = !0;
  }
  resetWebGLState() {
    this.renderingContext.resetState(), this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo);
  }
  get fboCache() {
    return this.view._stage.renderer.fboCache;
  }
  get bindParameters() {
    return this._context.bindParameters;
  }
  get renderingContext() {
    return this.view._stage.renderView.renderingContext;
  }
  updateAnimation() {
    return !!this._dirty && (this._dirty = !1, !0);
  }
  doRender(e, r) {
    this._context = r, this._frameBuffer = e.find(({ name: i }) => i === this.produces);
    try {
      return this.render(e);
    } finally {
      this._frameBuffer = null;
    }
  }
};
m([G({ constructOnly: !0 })], Je.prototype, "view", void 0), m([G({ constructOnly: !0 })], Je.prototype, "consumes", void 0), m([G()], Je.prototype, "produces", void 0), Je = m([Rr("esri.views.3d.webgl.RenderNode")], Je);
const Ml = Je, Cl = 3e5, gi = 5e5;
function $o(t, e = !0) {
  t.attributes.add(p.POSITION, "vec2"), e && t.varyings.add("uv", "vec2"), t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e ? s`uv = position * 0.5 + vec2(0.5);` : ""}
    }
  `);
}
function Gr(t) {
  t.uniforms.add(new st("zProjectionMap", (e, r) => Ol(r.camera))), t.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`), t.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`), t.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`);
}
function Ol(t) {
  const e = t.projectionMatrix;
  return Ve(Rl, e[14], e[10]);
}
const Rl = Xt();
let Il = class extends ee {
  constructor(e, r) {
    super(e, "vec2", F.Draw, (i, a, o, n) => i.setUniform2fv(e, r(a, o, n)));
  }
};
const $l = () => Mr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
let Po = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e, r) {
    this._includedModules.has(e) ? this._includedModules.get(e) : (this._includedModules.set(e, r), e(this.builder, r));
  }
}, tr = class extends Po {
  constructor() {
    super(...arguments), this.vertex = new xi(), this.fragment = new xi(), this.attributes = new Nl(), this.varyings = new Dl(), this.extensions = new lt(), this.constants = new Lo(), this.outputs = new yr();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e) {
    const r = this.extensions.generateSource(e), i = this.attributes.generateSource(e), a = this.varyings.generateSource(e), o = e === "vertex" ? this.vertex : this.fragment, n = o.uniforms.generateSource(), c = o.code.generateSource(), l = e === "vertex" ? Bl : Fl, u = this.constants.generateSource().concat(o.constants.generateSource()), d = this.outputs.generateSource(e);
    return `#version 300 es
${r.join(`
`)}

${l}

${u.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${a.join(`
`)}

${d.join(`
`)}

${c.join(`
`)}`;
  }
  generateBindPass(e) {
    const r = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((o) => {
      const n = o.bind[F.Pass];
      n && r.set(o.name, n);
    }), this.fragment.uniforms.entries.forEach((o) => {
      const n = o.bind[F.Pass];
      n && r.set(o.name, n);
    });
    const i = Array.from(r.values()), a = i.length;
    return (o, n) => {
      for (let c = 0; c < a; ++c) i[c](e, o, n);
    };
  }
  generateBindDraw(e) {
    const r = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((o) => {
      const n = o.bind[F.Draw];
      n && r.set(o.name, n);
    }), this.fragment.uniforms.entries.forEach((o) => {
      const n = o.bind[F.Draw];
      n && r.set(o.name, n);
    });
    const i = Array.from(r.values()), a = i.length;
    return (o, n, c) => {
      for (let l = 0; l < a; ++l) i[l](e, o, n, c);
    };
  }
}, Pl = class {
  constructor(e) {
    this._stage = e, this._entries = /* @__PURE__ */ new Map();
  }
  add(...e) {
    for (const r of e) this._add(r);
    return this._stage;
  }
  get(e) {
    return this._entries.get(e);
  }
  _add(e) {
    if (e != null) {
      if (this._entries.has(e.name) && !this._entries.get(e.name).equals(e)) throw new St(`Duplicate uniform name ${e.name} for different uniform type`);
      this._entries.set(e.name, e);
    } else $l().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e) => e.arraySize != null ? `uniform ${e.type} ${e.name}[${e.arraySize}];` : `uniform ${e.type} ${e.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
}, Ll = class {
  constructor(e) {
    this._stage = e, this._entries = new Array();
  }
  add(e) {
    return this._entries.push(e), this._stage;
  }
  generateSource() {
    return this._entries;
  }
}, xi = class extends Po {
  constructor() {
    super(...arguments), this.uniforms = new Pl(this), this.code = new Ll(this), this.constants = new Lo();
  }
  get builder() {
    return this;
  }
}, Nl = class {
  constructor() {
    this._entries = new Array();
  }
  add(e, r) {
    this._entries.push([e, r]);
  }
  generateSource(e) {
    return e === "fragment" ? [] : this._entries.map((r) => `in ${r[1]} ${r[0]};`);
  }
}, Dl = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, r) {
    this._entries.has(e) && W(this._entries.get(e) === r), this._entries.set(e, r);
  }
  generateSource(e) {
    const r = new Array();
    return this._entries.forEach((i, a) => r.push(e === "vertex" ? `out ${i} ${a};` : `in ${i} ${a};`)), r;
  }
};
class lt {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e) {
    this._entries.add(e);
  }
  generateSource(e) {
    const r = e === "vertex" ? lt.ALLOWLIST_VERTEX : lt.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((i) => r.includes(i)).map((i) => `#extension ${i} : enable`);
  }
}
lt.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], lt.ALLOWLIST_VERTEX = [];
let yr = class Ar {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, r, i = 0) {
    const a = this._entries.get(i);
    a ? W(a.name === e && a.type === r, `Fragment shader output location ${i} occupied`) : this._entries.set(i, { name: e, type: r });
  }
  generateSource(e) {
    if (e === "vertex") return [];
    this._entries.size === 0 && this._entries.set(0, { name: Ar.DEFAULT_NAME, type: Ar.DEFAULT_TYPE });
    const r = new Array();
    return this._entries.forEach((i, a) => r.push(`layout(location = ${a}) out ${i.type} ${i.name};`)), r;
  }
};
yr.DEFAULT_TYPE = "vec4", yr.DEFAULT_NAME = "fragColor";
let Lo = class q {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e, r, i) {
    let a = "ERROR_CONSTRUCTOR_STRING";
    switch (r) {
      case "float":
        a = q._numberToFloatStr(i);
        break;
      case "int":
        a = q._numberToIntStr(i);
        break;
      case "bool":
        a = i.toString();
        break;
      case "vec2":
        a = `vec2(${q._numberToFloatStr(i[0])},                            ${q._numberToFloatStr(i[1])})`;
        break;
      case "vec3":
        a = `vec3(${q._numberToFloatStr(i[0])},                            ${q._numberToFloatStr(i[1])},                            ${q._numberToFloatStr(i[2])})`;
        break;
      case "vec4":
        a = `vec4(${q._numberToFloatStr(i[0])},                            ${q._numberToFloatStr(i[1])},                            ${q._numberToFloatStr(i[2])},                            ${q._numberToFloatStr(i[3])})`;
        break;
      case "ivec2":
        a = `ivec2(${q._numberToIntStr(i[0])},                             ${q._numberToIntStr(i[1])})`;
        break;
      case "ivec3":
        a = `ivec3(${q._numberToIntStr(i[0])},                             ${q._numberToIntStr(i[1])},                             ${q._numberToIntStr(i[2])})`;
        break;
      case "ivec4":
        a = `ivec4(${q._numberToIntStr(i[0])},                             ${q._numberToIntStr(i[1])},                             ${q._numberToIntStr(i[2])},                             ${q._numberToIntStr(i[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        a = `${r}(${Array.prototype.map.call(i, (o) => q._numberToFloatStr(o)).join(", ")})`;
    }
    return this._entries.add(`const ${r} ${e} = ${a};`), this;
  }
  static _numberToIntStr(e) {
    return e.toFixed(0);
  }
  static _numberToFloatStr(e) {
    return Number.isInteger(e) ? e.toFixed(1) : e.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
const Fl = `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`, Bl = `precision highp float;
precision highp sampler2D;`, fr = 4;
function No() {
  const t = new tr(), e = t.fragment;
  t.include($o);
  const r = (fr + 1) / 2, i = 1 / (2 * r * r);
  return e.include(Gr), e.uniforms.add(new Q("depthMap", (a) => a.depthTexture), new gt("tex", (a) => a.colorTexture), new Il("blurSize", (a) => a.blurSize), new se("projScale", (a, o) => {
    const n = ba(o.camera.eye, o.camera.center);
    return n > 5e4 ? Math.max(0, a.projScale - (n - 5e4)) : a.projScale;
  })), e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `), t.outputs.add("fragBlur", "float"), e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(fr)}; r <= ${s.int(fr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `), t;
}
const zl = Object.freeze(Object.defineProperty({ __proto__: null, build: No }, Symbol.toStringTag, { value: "Module" }));
let Do = class Fo extends Br {
  initializeProgram(e) {
    return new zr(e.rctx, Fo.shader.get().build(), Qt);
  }
  initializePipeline() {
    return Ir({ colorWrite: $r });
  }
};
Do.shader = new er(zl, () => Promise.resolve().then(() => Dc));
const Gl = "eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";
let Vl = class extends wt {
  constructor() {
    super(...arguments), this.projScale = 1;
  }
}, Ul = class extends Vl {
  constructor() {
    super(...arguments), this.intensity = 1;
  }
}, jl = class extends wt {
}, Hl = class extends jl {
  constructor() {
    super(...arguments), this.blurSize = Xt();
  }
};
function Wl(t) {
  t.fragment.uniforms.add(new te("projInfo", (e, r) => ql(r.camera))), t.fragment.uniforms.add(new st("zScale", (e, r) => kl(r.camera))), t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function ql(t) {
  const e = t.projectionMatrix;
  return e[11] === 0 ? oe(Ti, 2 / (t.fullWidth * e[0]), 2 / (t.fullHeight * e[5]), (1 + e[12]) / e[0], (1 + e[13]) / e[5]) : oe(Ti, -2 / (t.fullWidth * e[0]), -2 / (t.fullHeight * e[5]), (1 - e[8]) / e[0], (1 - e[9]) / e[5]);
}
const Ti = Cr();
function kl(t) {
  return t.projectionMatrix[11] === 0 ? Ve(_i, 0, 1) : Ve(_i, 1, 0);
}
const _i = Xt(), bi = 16;
function Bo() {
  const t = new tr(), e = t.fragment;
  return t.include($o), t.include(Wl), e.include(Gr), e.uniforms.add(new se("radius", (r, i) => rr(i.camera))).code.add(s`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`), e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), e.uniforms.add(new Q("normalMap", (r) => r.normalTexture), new Q("depthMap", (r) => r.depthTexture), new se("projScale", (r) => r.projScale), new Q("rnm", (r) => r.noiseTexture), new st("rnmScale", (r, i) => Ve(Si, i.camera.fullWidth / r.noiseTexture.descriptor.width, i.camera.fullHeight / r.noiseTexture.descriptor.height)), new se("intensity", (r) => r.intensity), new st("screenSize", (r, i) => Ve(Si, i.camera.fullWidth, i.camera.fullHeight))), t.outputs.add("fragOcclusion", "float"), e.code.add(s`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(bi)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(bi)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `), t;
}
function rr(t) {
  return Math.max(10, 20 * t.computeScreenPixelSizeAtDist(Math.abs(4 * t.relativeElevation)));
}
const Si = Xt(), Yl = Object.freeze(Object.defineProperty({ __proto__: null, build: Bo, getRadius: rr }, Symbol.toStringTag, { value: "Module" }));
let zo = class Go extends Br {
  initializeProgram(e) {
    return new zr(e.rctx, Go.shader.get().build(), Qt);
  }
  initializePipeline() {
    return Ir({ colorWrite: $r });
  }
};
zo.shader = new er(Yl, () => Promise.resolve().then(() => Fc));
const pt = 2;
let ke = class extends Ml {
  constructor(t) {
    super(t), this.consumes = { required: ["normals"] }, this.produces = "ssao", this.isEnabled = () => !1, this._enableTime = Ct(0), this._passParameters = new Ul(), this._drawParameters = new Hl();
  }
  initialize() {
    const t = Uint8Array.from(atob(Gl), (r) => r.charCodeAt(0)), e = new Wi();
    e.wrapMode = Ue.CLAMP_TO_EDGE, e.pixelFormat = Fe.RGB, e.wrapMode = Ue.REPEAT, e.hasMipmap = !0, e.width = 32, e.height = 32, this._passParameters.noiseTexture = new ot(this.renderingContext, e, t), this._ssaoTechnique = this.techniques.acquire(zo), this._blurTechnique = this.techniques.acquire(Do), this.addHandles(Ni(() => this.isEnabled(), () => this._enableTime = Ct(0)));
  }
  destroy() {
    this._passParameters.noiseTexture = Bt(this._passParameters.noiseTexture), this._blurTechnique.release(), this._ssaoTechnique.release();
  }
  render(t) {
    const e = this.bindParameters, r = t.find(({ name: D }) => D === "normals"), i = r?.getTexture(), a = r?.getTexture(Qa), o = this.fboCache, n = e.camera, c = n.fullViewport[2], l = n.fullViewport[3], u = Math.round(c / pt), d = Math.round(l / pt);
    if (!this._ssaoTechnique.compiled || !this._blurTechnique.compiled) return this._enableTime = Ct(performance.now()), this.requestRender(), o.acquire(u, d, "ssao", rt.RED);
    this._enableTime === 0 && (this._enableTime = Ct(performance.now()));
    const h = this.renderingContext, v = this.view.qualitySettings.fadeDuration, f = n.relativeElevation, g = Oi((gi - f) / (gi - Cl), 0, 1), S = v > 0 ? Math.min(v, performance.now() - this._enableTime) / v : 1, x = S * g;
    this._passParameters.normalTexture = i, this._passParameters.depthTexture = a, this._passParameters.projScale = 1 / n.computeScreenPixelSizeAtDist(1), this._passParameters.intensity = 4 * Xl / rr(n) ** 6 * x;
    const P = o.acquire(c, l, "ssao input", rt.RG);
    h.unbindTexture(P.fbo.colorTexture), h.bindFramebuffer(P.fbo), h.setViewport(0, 0, c, l), h.bindTechnique(this._ssaoTechnique, e, this._passParameters, this._drawParameters), h.screen.draw();
    const M = o.acquire(u, d, "ssao blur", rt.RED);
    h.unbindTexture(M.fbo.colorTexture), h.bindFramebuffer(M.fbo), this._drawParameters.colorTexture = P.getTexture(), Ve(this._drawParameters.blurSize, 0, pt / l), h.bindTechnique(this._blurTechnique, e, this._passParameters, this._drawParameters), h.setViewport(0, 0, u, d), h.screen.draw(), P.release();
    const I = o.acquire(u, d, "ssao", rt.RED);
    return h.unbindTexture(I.fbo.colorTexture), h.bindFramebuffer(I.fbo), h.setViewport(0, 0, c, l), h.setClearColor(1, 1, 1, 0), h.clear(en.COLOR_BUFFER_BIT), this._drawParameters.colorTexture = M.getTexture(), Ve(this._drawParameters.blurSize, pt / c, 0), h.bindTechnique(this._blurTechnique, e, this._passParameters, this._drawParameters), h.setViewport(0, 0, u, d), h.screen.draw(), h.setViewport4fv(n.fullViewport), M.release(), S < 1 && this.requestRender(Ui.UPDATE), I;
  }
};
m([G()], ke.prototype, "consumes", void 0), m([G()], ke.prototype, "produces", void 0), m([G({ constructOnly: !0 })], ke.prototype, "techniques", void 0), m([G({ constructOnly: !0 })], ke.prototype, "isEnabled", void 0), ke = m([Rr("esri.views.3d.webgl-engine.effects.ssao.SSAO")], ke);
const Xl = 0.5;
function Vr(t, e) {
  const r = t.fragment;
  e.receiveAmbientOcclusion ? (r.uniforms.add(new Q("ssaoTex", (i, a) => a.ssao?.getTexture())), r.constants.add("blurSizePixelsInverse", "float", 1 / pt), r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)) : r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);
}
function Jl(t, e) {
  const r = t.fragment, i = e.lightingSphericalHarmonicsOrder !== void 0 ? e.lightingSphericalHarmonicsOrder : 2;
  i === 0 ? (r.uniforms.add(new J("lightingAmbientSH0", (a, o) => V(Ei, o.lighting.sh.r[0], o.lighting.sh.g[0], o.lighting.sh.b[0]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : i === 1 ? (r.uniforms.add(new te("lightingAmbientSH_R", (a, o) => oe(ge, o.lighting.sh.r[0], o.lighting.sh.r[1], o.lighting.sh.r[2], o.lighting.sh.r[3])), new te("lightingAmbientSH_G", (a, o) => oe(ge, o.lighting.sh.g[0], o.lighting.sh.g[1], o.lighting.sh.g[2], o.lighting.sh.g[3])), new te("lightingAmbientSH_B", (a, o) => oe(ge, o.lighting.sh.b[0], o.lighting.sh.b[1], o.lighting.sh.b[2], o.lighting.sh.b[3]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)) : i === 2 && (r.uniforms.add(new J("lightingAmbientSH0", (a, o) => V(Ei, o.lighting.sh.r[0], o.lighting.sh.g[0], o.lighting.sh.b[0])), new te("lightingAmbientSH_R1", (a, o) => oe(ge, o.lighting.sh.r[1], o.lighting.sh.r[2], o.lighting.sh.r[3], o.lighting.sh.r[4])), new te("lightingAmbientSH_G1", (a, o) => oe(ge, o.lighting.sh.g[1], o.lighting.sh.g[2], o.lighting.sh.g[3], o.lighting.sh.g[4])), new te("lightingAmbientSH_B1", (a, o) => oe(ge, o.lighting.sh.b[1], o.lighting.sh.b[2], o.lighting.sh.b[3], o.lighting.sh.b[4])), new te("lightingAmbientSH_R2", (a, o) => oe(ge, o.lighting.sh.r[5], o.lighting.sh.r[6], o.lighting.sh.r[7], o.lighting.sh.r[8])), new te("lightingAmbientSH_G2", (a, o) => oe(ge, o.lighting.sh.g[5], o.lighting.sh.g[6], o.lighting.sh.g[7], o.lighting.sh.g[8])), new te("lightingAmbientSH_B2", (a, o) => oe(ge, o.lighting.sh.b[5], o.lighting.sh.b[6], o.lighting.sh.b[7], o.lighting.sh.b[8]))), r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic || r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
const Ei = C(), ge = Cr();
function Ur(t) {
  t.uniforms.add(new J("mainLightDirection", (e, r) => r.lighting.mainLight.direction));
}
function ir(t) {
  t.uniforms.add(new J("mainLightIntensity", (e, r) => r.lighting.mainLight.intensity));
}
function yi(t) {
  Ur(t.fragment), ir(t.fragment), t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);
}
function Zl(t) {
  const e = t.fragment.code;
  e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`), e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`), e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
}
function Vo(t) {
  t.vertex.code.add(s`const float PI = 3.141592653589793;`), t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}
function jr(t, e) {
  const r = t.fragment.code;
  t.include(Vo), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic && e.pbrMode !== $.Simplified && e.pbrMode !== $.TerrainWithWater || (r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`), r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)), e.pbrMode !== $.Normal && e.pbrMode !== $.Schematic || (t.include(Zl), r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`), r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`), r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`), r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
}
let Kl = class extends ee {
  constructor(e, r) {
    super(e, "bool", F.Pass, (i, a, o) => i.setUniform1b(e, r(a, o)));
  }
};
const Ql = 0.4;
function Hr(t) {
  t.constants.add("ambientBoostFactor", "float", Ql);
}
function Wr(t) {
  t.uniforms.add(new se("lightingGlobalFactor", (e, r) => r.lighting.globalFactor));
}
function Uo(t, e) {
  const r = t.fragment;
  switch (t.include(Vr, e), e.pbrMode !== $.Disabled && t.include(jr, e), t.include(Jl, e), t.include(Vo), r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode === $.Disabled ? "" : "const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `), Hr(r), Wr(r), Ur(r), r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical ? s`normalize(vPosWorld)` : s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `), ir(r), r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`), e.pbrMode) {
    case $.Disabled:
    case $.WaterOnIntegratedMesh:
    case $.Water:
      t.include(yi), r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);
      break;
    case $.Normal:
    case $.Schematic:
      r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`), r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`), e.useFillLights ? r.uniforms.add(new Kl("hasFillLights", (i, a) => a.enableFillLights)) : r.constants.add("hasFillLights", "bool", !1), r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`), r.uniforms.add(new se("lightingSpecularStrength", (i, a) => a.lighting.mainLight.specularStrength), new se("lightingEnvironmentStrength", (i, a) => a.lighting.mainLight.environmentStrength)), r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`), r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode !== $.Schematic || e.hasColorTexture ? s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));` : s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);
      break;
    case $.Simplified:
    case $.TerrainWithWater:
      t.include(yi), r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);
      break;
    default:
      Et(e.pbrMode);
    case $.COUNT:
  }
}
function jo(t, e) {
  if (!e.multipassEnabled) return;
  t.fragment.include(Gr), t.fragment.uniforms.add(new Q("terrainDepthTexture", (i, a) => a.multipassTerrain.depth?.attachment));
  const r = e.occlusionPass;
  t.fragment.code.add(s`
   ${r ? "bool" : "void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r ? s`return fragmentDepth < linearDepth && depth < 1.0;` : s`
          if(fragmentDepth ${e.cullAboveGround ? ">" : "<="} linearDepth){
            discard;
          }`}
    }`);
}
class ec extends ee {
  constructor(e, r, i) {
    super(e, "mat4", F.Draw, (a, o, n, c) => a.setUniformMatrix4fv(e, r(o, n, c)), i);
  }
}
let tc = class extends ee {
  constructor(e, r, i) {
    super(e, "mat4", F.Pass, (a, o, n) => a.setUniformMatrix4fv(e, r(o, n)), i);
  }
};
function Ho(t, e) {
  e.receiveShadows && (t.fragment.uniforms.add(new tc("shadowMapMatrix", (r, i) => i.shadowMap.getShadowMapMatrices(r.origin), 4)), qo(t));
}
function Wo(t, e) {
  e.receiveShadows && (t.fragment.uniforms.add(new ec("shadowMapMatrix", (r, i) => i.shadowMap.getShadowMapMatrices(r.origin), 4)), qo(t));
}
function qo(t) {
  const e = t.fragment;
  e.include(Ro), e.uniforms.add(new Q("shadowMap", (r, i) => i.shadowMap.depthTexture), new wo("numCascades", (r, i) => i.shadowMap.numCascades), new te("cascadeDistances", (r, i) => i.shadowMap.cascadeDistances)), e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`);
}
function rc(t, e) {
  e.hasColorTextureTransform ? (t.vertex.uniforms.add(new pe("colorTextureTransformMatrix", (r) => r.colorTextureTransformMatrix ?? ct)), t.varyings.add("colorUV", "vec2"), t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t.vertex.code.add(s`void forwardColorUV(){}`);
}
function ic(t, e) {
  e.hasNormalTextureTransform && e.textureCoordinateType !== k.None ? (t.vertex.uniforms.add(new pe("normalTextureTransformMatrix", (r) => r.normalTextureTransformMatrix ?? ct)), t.varyings.add("normalUV", "vec2"), t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t.vertex.code.add(s`void forwardNormalUV(){}`);
}
function oc(t, e) {
  e.hasEmissionTextureTransform && e.textureCoordinateType !== k.None ? (t.vertex.uniforms.add(new pe("emissiveTextureTransformMatrix", (r) => r.emissiveTextureTransformMatrix ?? ct)), t.varyings.add("emissiveUV", "vec2"), t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t.vertex.code.add(s`void forwardEmissiveUV(){}`);
}
function ac(t, e) {
  e.hasOcclusionTextureTransform && e.textureCoordinateType !== k.None ? (t.vertex.uniforms.add(new pe("occlusionTextureTransformMatrix", (r) => r.occlusionTextureTransformMatrix ?? ct)), t.varyings.add("occlusionUV", "vec2"), t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t.vertex.code.add(s`void forwardOcclusionUV(){}`);
}
function nc(t, e) {
  e.hasMetallicRoughnessTextureTransform && e.textureCoordinateType !== k.None ? (t.vertex.uniforms.add(new pe("metallicRoughnessTextureTransformMatrix", (r) => r.metallicRoughnessTextureTransformMatrix ?? ct)), t.varyings.add("metallicRoughnessUV", "vec2"), t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`);
}
function sc(t) {
  t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
}
function ko(t) {
  t.include(sc), t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Te.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Te.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Te.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(Te.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Te.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}
function Yo(t) {
  const e = new tr(), { vertex: r, fragment: i, varyings: a } = e;
  if (et(r, t), e.include(Dr), a.add("vpos", "vec3"), e.include(_t, t), e.include(Ao, t), e.include(Oo, t), e.include(rc, t), t.output === z.Color) {
    e.include(ic, t), e.include(oc, t), e.include(ac, t), e.include(nc, t), bt(r, t), e.include(Kt, t), e.include(Qe, t);
    const o = t.normalType === Z.Attribute || t.normalType === Z.Compressed;
    o && t.offsetBackfaces && e.include(_o), e.include(wl, t), e.include(po, t), t.instancedColor && e.attributes.add(p.INSTANCECOLOR, "vec4"), a.add("vPositionLocal", "vec3"), e.include(ze, t), e.include(To, t), e.include(Mo, t), e.include(Co, t), r.uniforms.add(new te("externalColor", (n) => n.externalColor)), a.add("vcolorExt", "vec4"), t.multipassEnabled && a.add("depth", "float"), r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Fr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o ? s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o && t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${t.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `), e.include(Ke, t), e.include(Uo, t), e.include(Vr, t), e.include(tt, t), e.include(t.instancedDoublePrecision ? Ho : Wo, t), e.include(jo, t), bt(i, t), i.uniforms.add(r.uniforms.get("localOrigin"), new J("ambient", (n) => n.ambient), new J("diffuse", (n) => n.diffuse), new se("opacity", (n) => n.opacity), new se("layerOpacity", (n) => n.layerOpacity)), t.hasColorTexture && i.uniforms.add(new Q("tex", (n) => n.texture)), e.include(so, t), e.include(jr, t), i.include(ko), e.include(Zn, t), Hr(i), Wr(i), ir(i), t.transparencyPassType === ie.ColorAlpha && (e.outputs.add("fragColor", "vec4", 0), e.outputs.add("fragAlpha", "float", 1)), i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled ? "terrainDepthTest(depth);" : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType === Z.ScreenDerivative ? s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);` : s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode === $.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows ? "readShadowMap(vpos, linearDepth)" : t.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors ? s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture ? s`
                mat3 tangentSpace = ${t.hasVertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform ? s`normalUV` : "vuv0"});` : s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical ? s`normalize(posWorld);` : s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover ? s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);` : ""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover ? s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType === ie.ColorAlpha ? s`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;` : ""}
      }
    `);
  }
  return e.include(Io, t), e;
}
const lc = Object.freeze(Object.defineProperty({ __proto__: null, build: Yo }, Symbol.toStringTag, { value: "Module" }));
let cc = class extends Js {
  constructor() {
    super(...arguments), this.isSchematic = !1, this.usePBR = !1, this.mrrFactors = Tr(vo), this.hasVertexColors = !1, this.hasSymbolColors = !1, this.doubleSided = !1, this.doubleSidedType = "normal", this.cullFace = Ce.Back, this.isInstanced = !1, this.hasInstancedColor = !1, this.emissiveFactor = Ge(0, 0, 0), this.instancedDoublePrecision = !1, this.normalType = Z.Attribute, this.receiveShadows = !0, this.receiveAmbientOcclusion = !0, this.castShadows = !0, this.shadowMappingEnabled = !1, this.ambient = Ge(0.2, 0.2, 0.2), this.diffuse = Ge(0.8, 0.8, 0.8), this.externalColor = Or(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = C(), this.hasSlicePlane = !1, this.hasSliceHighlight = !0, this.offsetTransparentBackfaces = !1, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.modelTransformation = null, this.transparent = !1, this.writeDepth = !0, this.customDepthTest = At.Less, this.textureAlphaMode = X.Blend, this.textureAlphaCutoff = Zs, this.textureAlphaPremultiplied = !1, this.hasOccludees = !1, this.renderOccluded = Sr.Occlude, this.isDecoration = !1;
  }
}, qr = class Xo extends Br {
  initializeConfiguration(e, r) {
    r.spherical = e.viewingMode === zt.Global, r.doublePrecisionRequiresObfuscation = e.rctx.driverTest.doublePrecisionRequiresObfuscation.result, r.textureCoordinateType = r.hasColorTexture || r.hasMetallicRoughnessTexture || r.hasEmissionTexture || r.hasOcclusionTexture || r.hasNormalTexture ? k.Default : k.None, r.objectAndLayerIdColorInstanced = r.instanced;
  }
  initializeProgram(e) {
    return this._initializeProgram(e, Xo.shader);
  }
  _initializeProgram(e, r) {
    return new zr(e.rctx, r.get().build(this.configuration), Qt);
  }
  _makePipeline(e, r) {
    const i = this.configuration, a = e === ie.NONE, o = e === ie.FrontFace;
    return Ir({ blending: i.output === z.Color && i.transparent ? a ? us : ms(e) : null, culling: uc(i) ? nn(i.cullFace) : null, depthTest: { func: gs(e, dc(i.customDepthTest)) }, depthWrite: (a || o) && i.writeDepth ? sn : null, drawBuffers: i.output === z.Depth ? { buffers: [tn.NONE] } : xs(e), colorWrite: $r, stencilWrite: i.hasOccludees ? Ks : null, stencilTest: i.hasOccludees ? r ? el : Qs : null, polygonOffset: a || o ? null : vs(i.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._makePipeline(this.configuration.transparencyPassType, !0), this._makePipeline(this.configuration.transparencyPassType, !1);
  }
  getPipeline(e) {
    return e ? this._occludeePipelineState : super.getPipeline();
  }
};
function dc(t) {
  return t === At.Lequal ? fe.LEQUAL : fe.LESS;
}
function uc(t) {
  return t.cullFace !== Ce.None || !t.hasSlicePlane && !t.transparent && !t.doubleSidedMode;
}
qr.shader = new er(lc, () => Promise.resolve().then(() => Bc));
let Ft = class extends Er {
};
m([_({ constValue: !0 })], Ft.prototype, "hasSliceHighlight", void 0), m([_({ constValue: !1 })], Ft.prototype, "hasSliceInVertexProgram", void 0), m([_({ constValue: F.Pass })], Ft.prototype, "pbrTextureBindType", void 0);
class y extends Ft {
  constructor() {
    super(...arguments), this.output = z.Color, this.alphaDiscardMode = X.Opaque, this.doubleSidedMode = re.None, this.pbrMode = $.Disabled, this.cullFace = Ce.None, this.transparencyPassType = ie.NONE, this.normalType = Z.Attribute, this.textureCoordinateType = k.None, this.customDepthTest = At.Less, this.spherical = !1, this.hasVertexColors = !1, this.hasSymbolColors = !1, this.hasVerticalOffset = !1, this.hasSlicePlane = !1, this.hasSliceHighlight = !0, this.hasColorTexture = !1, this.hasMetallicRoughnessTexture = !1, this.hasEmissionTexture = !1, this.hasOcclusionTexture = !1, this.hasNormalTexture = !1, this.hasScreenSizePerspective = !1, this.hasVertexTangents = !1, this.hasOccludees = !1, this.multipassEnabled = !1, this.hasModelTransformation = !1, this.offsetBackfaces = !1, this.vvSize = !1, this.vvColor = !1, this.receiveShadows = !1, this.receiveAmbientOcclusion = !1, this.textureAlphaPremultiplied = !1, this.instanced = !1, this.instancedColor = !1, this.objectAndLayerIdColorInstanced = !1, this.instancedDoublePrecision = !1, this.doublePrecisionRequiresObfuscation = !1, this.writeDepth = !0, this.transparent = !1, this.enableOffset = !0, this.cullAboveGround = !1, this.snowCover = !1, this.hasColorTextureTransform = !1, this.hasEmissionTextureTransform = !1, this.hasNormalTextureTransform = !1, this.hasOcclusionTextureTransform = !1, this.hasMetallicRoughnessTextureTransform = !1;
  }
}
m([_({ count: z.COUNT })], y.prototype, "output", void 0), m([_({ count: X.COUNT })], y.prototype, "alphaDiscardMode", void 0), m([_({ count: re.COUNT })], y.prototype, "doubleSidedMode", void 0), m([_({ count: $.COUNT })], y.prototype, "pbrMode", void 0), m([_({ count: Ce.COUNT })], y.prototype, "cullFace", void 0), m([_({ count: ie.COUNT })], y.prototype, "transparencyPassType", void 0), m([_({ count: Z.COUNT })], y.prototype, "normalType", void 0), m([_({ count: k.COUNT })], y.prototype, "textureCoordinateType", void 0), m([_({ count: At.COUNT })], y.prototype, "customDepthTest", void 0), m([_()], y.prototype, "spherical", void 0), m([_()], y.prototype, "hasVertexColors", void 0), m([_()], y.prototype, "hasSymbolColors", void 0), m([_()], y.prototype, "hasVerticalOffset", void 0), m([_()], y.prototype, "hasSlicePlane", void 0), m([_()], y.prototype, "hasSliceHighlight", void 0), m([_()], y.prototype, "hasColorTexture", void 0), m([_()], y.prototype, "hasMetallicRoughnessTexture", void 0), m([_()], y.prototype, "hasEmissionTexture", void 0), m([_()], y.prototype, "hasOcclusionTexture", void 0), m([_()], y.prototype, "hasNormalTexture", void 0), m([_()], y.prototype, "hasScreenSizePerspective", void 0), m([_()], y.prototype, "hasVertexTangents", void 0), m([_()], y.prototype, "hasOccludees", void 0), m([_()], y.prototype, "multipassEnabled", void 0), m([_()], y.prototype, "hasModelTransformation", void 0), m([_()], y.prototype, "offsetBackfaces", void 0), m([_()], y.prototype, "vvSize", void 0), m([_()], y.prototype, "vvColor", void 0), m([_()], y.prototype, "receiveShadows", void 0), m([_()], y.prototype, "receiveAmbientOcclusion", void 0), m([_()], y.prototype, "textureAlphaPremultiplied", void 0), m([_()], y.prototype, "instanced", void 0), m([_()], y.prototype, "instancedColor", void 0), m([_()], y.prototype, "objectAndLayerIdColorInstanced", void 0), m([_()], y.prototype, "instancedDoublePrecision", void 0), m([_()], y.prototype, "doublePrecisionRequiresObfuscation", void 0), m([_()], y.prototype, "writeDepth", void 0), m([_()], y.prototype, "transparent", void 0), m([_()], y.prototype, "enableOffset", void 0), m([_()], y.prototype, "cullAboveGround", void 0), m([_()], y.prototype, "snowCover", void 0), m([_()], y.prototype, "hasColorTextureTransform", void 0), m([_()], y.prototype, "hasEmissionTextureTransform", void 0), m([_()], y.prototype, "hasNormalTextureTransform", void 0), m([_()], y.prototype, "hasOcclusionTextureTransform", void 0), m([_()], y.prototype, "hasMetallicRoughnessTextureTransform", void 0), m([_({ constValue: !1 })], y.prototype, "occlusionPass", void 0), m([_({ constValue: !0 })], y.prototype, "hasVvInstancing", void 0), m([_({ constValue: !1 })], y.prototype, "useCustomDTRExponentForWater", void 0), m([_({ constValue: !1 })], y.prototype, "supportsTextureAtlas", void 0), m([_({ constValue: !0 })], y.prototype, "useFillLights", void 0);
function Jo(t) {
  const e = new tr(), { vertex: r, fragment: i, varyings: a } = e;
  return et(r, t), e.include(Dr), a.add("vpos", "vec3"), e.include(_t, t), e.include(Ao, t), e.include(Oo, t), t.output === z.Color && (bt(e.vertex, t), e.include(Kt, t), e.include(Qe, t), t.offsetBackfaces && e.include(_o), t.instancedColor && e.attributes.add(p.INSTANCECOLOR, "vec4"), a.add("vNormalWorld", "vec3"), a.add("localvpos", "vec3"), t.multipassEnabled && a.add("depth", "float"), e.include(ze, t), e.include(To, t), e.include(Mo, t), e.include(Co, t), r.uniforms.add(new te("externalColor", (o) => o.externalColor)), a.add("vcolorExt", "vec4"), r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Fr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${t.multipassEnabled ? s`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), t.output === z.Color && (e.include(Ke, t), e.include(Uo, t), e.include(Vr, t), e.include(tt, t), e.include(t.instancedDoublePrecision ? Ho : Wo, t), e.include(jo, t), bt(e.fragment, t), Ur(i), Hr(i), Wr(i), i.uniforms.add(r.uniforms.get("localOrigin"), r.uniforms.get("view"), new J("ambient", (o) => o.ambient), new J("diffuse", (o) => o.diffuse), new se("opacity", (o) => o.opacity), new se("layerOpacity", (o) => o.layerOpacity)), t.hasColorTexture && i.uniforms.add(new Q("tex", (o) => o.texture)), e.include(so, t), e.include(jr, t), i.include(ko), t.transparencyPassType === ie.ColorAlpha && (e.outputs.add("fragColor", "vec4", 0), e.outputs.add("fragAlpha", "float", 1)), ir(i), i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled ? s`terrainDepthTest(depth);` : ""}
        ${t.hasColorTexture ? s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform ? s`colorUV` : s`vuv0`});
                ${t.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode === $.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : t.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors ? s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover ? s`albedo = mix(albedo, vec3(1), 0.9);` : s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? t.spherical ? s`vec3 normalGround = normalize(vpos + localOrigin);` : s`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : s``}
        ${t.pbrMode === $.Normal || t.pbrMode === $.Schematic ? s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover ? s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType === ie.ColorAlpha ? s`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;` : ""}
      }
    `)), e.include(Io, t), e;
}
const hc = Object.freeze(Object.defineProperty({ __proto__: null, build: Jo }, Symbol.toStringTag, { value: "Module" }));
class or extends qr {
  initializeConfiguration(e, r) {
    super.initializeConfiguration(e, r), r.hasMetallicRoughnessTexture = !1, r.hasEmissionTexture = !1, r.hasOcclusionTexture = !1, r.hasNormalTexture = !1, r.hasModelTransformation = !1, r.normalType = Z.Attribute, r.doubleSidedMode = re.WindingOrder, r.hasVertexTangents = !1;
  }
  initializeProgram(e) {
    return this._initializeProgram(e, or.shader);
  }
}
or.shader = new er(hc, () => Promise.resolve().then(() => zc));
let qt = class extends ds {
  constructor(e) {
    super(e, pc), this.supportsEdges = !0, this.produces = /* @__PURE__ */ new Map([[Tt.OPAQUE_MATERIAL, (r) => (cr(r) || dr(r)) && !this.parameters.transparent], [Tt.TRANSPARENT_MATERIAL, (r) => (cr(r) || dr(r)) && this.parameters.transparent && this.parameters.writeDepth], [Tt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (r) => (cr(r) || dr(r)) && this.parameters.transparent && !this.parameters.writeDepth]]), this._configuration = new y(), this._vertexBufferLayout = vc(this.parameters);
  }
  isVisibleForOutput(e) {
    return e !== z.Shadow && e !== z.ShadowExcludeHighlight && e !== z.ShadowHighlight || this.parameters.castShadows;
  }
  isVisible() {
    const e = this.parameters;
    if (!super.isVisible() || e.layerOpacity === 0) return !1;
    const { hasInstancedColor: r, hasVertexColors: i, hasSymbolColors: a, vvColor: o } = e, n = e.colorMixMode === "replace", c = e.opacity > 0, l = e.externalColor && e.externalColor[3] > 0, u = r || o || a;
    return i && u ? n || c : i ? n ? l : c : u ? n || c : n ? l : c;
  }
  getConfiguration(e, r) {
    return this._configuration.output = e, this._configuration.hasNormalTexture = !!this.parameters.normalTextureId, this._configuration.hasColorTexture = !!this.parameters.textureId, this._configuration.hasVertexTangents = this.parameters.hasVertexTangents, this._configuration.instanced = this.parameters.isInstanced, this._configuration.instancedDoublePrecision = this.parameters.instancedDoublePrecision, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.hasVerticalOffset = this.parameters.verticalOffset != null, this._configuration.hasScreenSizePerspective = this.parameters.screenSizePerspective != null, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasSliceHighlight = this.parameters.hasSliceHighlight, this._configuration.alphaDiscardMode = this.parameters.textureAlphaMode, this._configuration.normalType = this.parameters.normalType, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this.parameters.customDepthTest != null && (this._configuration.customDepthTest = this.parameters.customDepthTest), this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.cullFace = this.parameters.hasSlicePlane ? Ce.None : this.parameters.cullFace, this._configuration.multipassEnabled = r.multipassEnabled, this._configuration.cullAboveGround = r.multipassTerrain.cullAboveGround, this._configuration.hasModelTransformation = this.parameters.modelTransformation != null, e === z.Color && (this._configuration.hasVertexColors = this.parameters.hasVertexColors, this._configuration.hasSymbolColors = this.parameters.hasSymbolColors, this.parameters.treeRendering ? this._configuration.doubleSidedMode = re.WindingOrder : this._configuration.doubleSidedMode = this.parameters.doubleSided && this.parameters.doubleSidedType === "normal" ? re.View : this.parameters.doubleSided && this.parameters.doubleSidedType === "winding-order" ? re.WindingOrder : re.None, this._configuration.instancedColor = this.parameters.hasInstancedColor, this._configuration.receiveShadows = this.parameters.receiveShadows && this.parameters.shadowMappingEnabled, this._configuration.receiveAmbientOcclusion = this.parameters.receiveAmbientOcclusion && r.ssao != null, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.textureAlphaPremultiplied = !!this.parameters.textureAlphaPremultiplied, this._configuration.pbrMode = this.parameters.usePBR ? this.parameters.isSchematic ? $.Schematic : $.Normal : $.Disabled, this._configuration.hasMetallicRoughnessTexture = !!this.parameters.metallicRoughnessTextureId, this._configuration.hasEmissionTexture = !!this.parameters.emissiveTextureId, this._configuration.hasOcclusionTexture = !!this.parameters.occlusionTextureId, this._configuration.offsetBackfaces = !(!this.parameters.transparent || !this.parameters.offsetTransparentBackfaces), this._configuration.transparencyPassType = r.transparencyPassType, this._configuration.enableOffset = r.camera.relativeElevation < fs, this._configuration.snowCover = this.hasSnowCover(r), this._configuration.hasColorTextureTransform = !!this.parameters.colorTextureTransformMatrix, this._configuration.hasNormalTextureTransform = !!this.parameters.normalTextureTransformMatrix, this._configuration.hasEmissionTextureTransform = !!this.parameters.emissiveTextureTransformMatrix, this._configuration.hasOcclusionTextureTransform = !!this.parameters.occlusionTextureTransformMatrix, this._configuration.hasMetallicRoughnessTextureTransform = !!this.parameters.metallicRoughnessTextureTransformMatrix), this._configuration;
  }
  hasSnowCover(e) {
    return e.weather != null && e.weatherVisible && e.weather.type === "snowy" && e.weather.snowCover === "enabled";
  }
  intersect(e, r, i, a, o, n) {
    if (this.parameters.verticalOffset != null) {
      const c = i.camera;
      V(vr, r[12], r[13], r[14]);
      let l = null;
      switch (i.viewingMode) {
        case zt.Global:
          l = kt(Ai, vr);
          break;
        case zt.Local:
          l = Dt(Ai, Tc);
      }
      let u = 0;
      const d = Ae(_c, vr, c.eye), h = he(d), v = me(d, d, 1 / h);
      let f = null;
      this.parameters.screenSizePerspective && (f = Sa(l, v)), u += ns(c, h, this.parameters.verticalOffset, f ?? 0, this.parameters.screenSizePerspective), me(l, l, u), Ea(pr, l, i.transform.inverseRotation), a = Ae(gc, a, pr), o = Ae(xc, o, pr);
    }
    _s(e, i, a, o, Bs(i.verticalOffset), n);
  }
  createGLMaterial(e) {
    return new mc(e);
  }
  createBufferWriter() {
    return new Ys(this._vertexBufferLayout);
  }
}, mc = class extends es {
  constructor(e) {
    super({ ...e, ...e.material.parameters });
  }
  _updateShadowState(e) {
    e.shadowMap.enabled !== this._material.parameters.shadowMappingEnabled && this._material.setParameters({ shadowMappingEnabled: e.shadowMap.enabled });
  }
  _updateOccludeeState(e) {
    e.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({ hasOccludees: e.hasOccludees });
  }
  beginSlot(e) {
    this._output === z.Color && (this._updateShadowState(e), this._updateOccludeeState(e));
    const r = this._material.parameters;
    this.updateTexture(r.textureId);
    const i = e.camera.viewInverseTransposeMatrix;
    return V(r.origin, i[3], i[7], i[11]), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(r.treeRendering ? or : qr, e);
  }
};
class fc extends cc {
  constructor() {
    super(...arguments), this.initTextureTransparent = !1, this.treeRendering = !1, this.hasVertexTangents = !1;
  }
}
const pc = new fc();
function vc(t) {
  const e = an().vec3f(p.POSITION);
  return t.normalType === Z.Compressed ? e.vec2i16(p.NORMALCOMPRESSED, { glNormalized: !0 }) : e.vec3f(p.NORMAL), t.hasVertexTangents && e.vec4f(p.TANGENT), (t.textureId || t.normalTextureId || t.metallicRoughnessTextureId || t.emissiveTextureId || t.occlusionTextureId) && e.vec2f(p.UV0), t.hasVertexColors && e.vec4u8(p.COLOR), t.hasSymbolColors && e.vec4u8(p.SYMBOLCOLOR), ya("enable-feature:objectAndLayerId-rendering") && e.vec4u8(p.OBJECTANDLAYERIDCOLOR), e;
}
const gc = C(), xc = C(), Tc = Ge(0, 0, 1), Ai = C(), pr = C(), vr = C(), _c = C(), xe = () => Mr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
async function bc(t, e) {
  const r = await Sc(t, e), i = await Mc(r.textureDefinitions ?? {}, e);
  let a = 0;
  for (const o in i) if (i.hasOwnProperty(o)) {
    const n = i[o];
    a += n?.image ? n.image.width * n.image.height * 4 : 0;
  }
  return { resource: r, textures: i, size: a + Aa(r) };
}
async function Sc(t, e) {
  const r = e?.streamDataRequester;
  if (r) return Ec(t, r, e);
  const i = await Di(wa(t, e));
  if (i.ok === !0) return i.value.data;
  Fi(i.error), Zo(i.error);
}
async function Ec(t, e, r) {
  const i = await Di(e.request(t, "json", r));
  if (i.ok === !0) return i.value;
  Fi(i.error), Zo(i.error.details.url);
}
function Zo(t) {
  throw new St("", `Request for object resource failed: ${t}`);
}
function yc(t) {
  const e = t.params, r = e.topology;
  let i = !0;
  switch (e.vertexAttributes || (xe().warn("Geometry must specify vertex attributes"), i = !1), e.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const o = e.faces;
      if (o) {
        if (e.vertexAttributes) for (const n in e.vertexAttributes) {
          const c = o[n];
          c?.values ? (c.valueType != null && c.valueType !== "UInt32" && (xe().warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`), i = !1), c.valuesPerElement != null && c.valuesPerElement !== 1 && (xe().warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`), i = !1)) : (xe().warn(`Indexed geometry does not specify face indices for '${n}' attribute`), i = !1);
        }
      } else xe().warn("Indexed geometries must specify faces"), i = !1;
      break;
    }
    default:
      xe().warn(`Unsupported topology '${r}'`), i = !1;
  }
  t.params.material || (xe().warn("Geometry requires material"), i = !1);
  const a = t.params.vertexAttributes;
  for (const o in a)
    a[o].values || (xe().warn("Geometries with externally defined attributes are not yet supported"), i = !1);
  return i;
}
function Ac(t, e) {
  const r = new Array(), i = new Array(), a = new Array(), o = new Wa(), n = t.resource, c = Bi.parse(n.version || "1.0", "wosr");
  Oc.validate(c);
  const l = n.model.name, u = n.model.geometries, d = n.materialDefinitions ?? {}, h = t.textures;
  let v = 0;
  const f = /* @__PURE__ */ new Map();
  for (let g = 0; g < u.length; g++) {
    const S = u[g];
    if (!yc(S)) continue;
    const x = Cc(S), P = S.params.vertexAttributes, M = [], I = (T) => {
      if (S.params.topology === "PerAttributeArray") return null;
      const L = S.params.faces;
      for (const B in L) if (B === T) return L[B].values;
      return null;
    }, D = P[p.POSITION], U = D.values.length / D.valuesPerElement;
    for (const T in P) {
      const L = P[T], B = L.values, j = I(T) ?? Gi(U);
      M.push([T, new Xe(B, j, L.valuesPerElement, !0)]);
    }
    const N = x.texture, E = h && h[N];
    if (E && !f.has(N)) {
      const { image: T, parameters: L } = E, B = new oo(T, L);
      i.push(B), f.set(N, B);
    }
    const w = f.get(N), O = w ? w.id : void 0, A = x.material;
    let b = o.get(A, N);
    if (b == null) {
      const T = d[A.substring(A.lastIndexOf("/") + 1)].params;
      T.transparency === 1 && (T.transparency = 0);
      const L = E && E.alphaChannelUsage, B = T.transparency > 0 || L === "transparency" || L === "maskAndTransparency", j = E ? Ko(E.alphaChannelUsage) : void 0, K = { ambient: Tr(T.diffuse), diffuse: Tr(T.diffuse), opacity: 1 - (T.transparency || 0), transparent: B, textureAlphaMode: j, textureAlphaCutoff: 0.33, textureId: O, initTextureTransparent: !0, doubleSided: !0, cullFace: Ce.None, colorMixMode: T.externalColorMixMode || "tint", textureAlphaPremultiplied: E?.parameters.preMultiplyAlpha ?? !1 };
      e?.materialParameters && Object.assign(K, e.materialParameters), b = new qt(K), o.set(A, N, b);
    }
    a.push(b);
    const R = new Ji(b, M);
    v += M.find((T) => T[0] === p.POSITION)?.[1]?.indices.length ?? 0, r.push(R);
  }
  return { engineResources: [{ name: l, stageResources: { textures: i, materials: a, geometries: r }, pivotOffset: n.model.pivotOffset, numberOfVertices: v, lodThreshold: null }], referenceBoundingBox: wc(r) };
}
function wc(t) {
  const e = zi();
  return t.forEach((r) => {
    const i = r.boundingInfo;
    i != null && (Gt(e, i.bbMin), Gt(e, i.bbMax));
  }), e;
}
async function Mc(t, e) {
  const r = new Array();
  for (const o in t) {
    const n = t[o], c = n.images[0].data;
    if (!c) {
      xe().warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const l = n.encoding + ";base64," + c, u = "/textureDefinitions/" + o, d = n.channels === "rgba" ? n.alphaChannelUsage || "transparency" : "none", h = { noUnpackFlip: !0, wrap: { s: Ue.REPEAT, t: Ue.REPEAT }, preMultiplyAlpha: Ko(d) !== X.Opaque }, v = e?.disableTextures ? Promise.resolve(null) : Vi(l, e);
    r.push(v.then((f) => ({ refId: u, image: f, parameters: h, alphaChannelUsage: d })));
  }
  const i = await Promise.all(r), a = {};
  for (const o of i) a[o.refId] = o;
  return a;
}
function Ko(t) {
  switch (t) {
    case "mask":
      return X.Mask;
    case "maskAndTransparency":
      return X.MaskBlend;
    case "none":
      return X.Opaque;
    default:
      return X.Blend;
  }
}
function Cc(t) {
  const e = t.params;
  return { id: 1, material: e.material, texture: e.texture, region: e.texture };
}
const Oc = new Bi(1, 2, "wosr");
async function mu(t, e) {
  const r = Rc(Qo(t));
  if (r.fileType === "wosr") {
    const h = await (e.cache ? e.cache.loadWOSR(r.url, e) : bc(r.url, e)), { engineResources: v, referenceBoundingBox: f } = Ac(h, e);
    return { lods: v, referenceBoundingBox: f, isEsriSymbolResource: !1, isWosr: !0 };
  }
  const i = await (e.cache ? e.cache.loadGLTF(r.url, e, !!e.usePBR) : za(new Ga(e.streamDataRequester), r.url, e, e.usePBR)), a = i.model.meta?.ESRI_proxyEllipsoid, o = i.meta.isEsriSymbolResource && a != null && i.meta.ESRI_webstyle === "EsriRealisticTreesStyle";
  o && !i.customMeta.esriTreeRendering && (i.customMeta.esriTreeRendering = !0, Nc(i, a));
  const n = !!e.usePBR, c = i.meta.isEsriSymbolResource ? { usePBR: n, isSchematic: !1, treeRendering: o, mrrFactors: [...il] } : { usePBR: n, isSchematic: !1, treeRendering: !1, mrrFactors: [...vo] }, l = { ...e.materialParameters, treeRendering: o }, { engineResources: u, referenceBoundingBox: d } = Ic(i, c, l, e.skipHighLods && r.specifiedLodIndex == null ? { skipHighLods: !0 } : { skipHighLods: !1, singleLodIndex: r.specifiedLodIndex });
  return { lods: u, referenceBoundingBox: d, isEsriSymbolResource: i.meta.isEsriSymbolResource, isWosr: !1 };
}
function Rc(t) {
  const e = t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  return e ? { fileType: "gltf", url: e[1], specifiedLodIndex: e[4] != null ? Number(e[4]) : null } : t.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: t, specifiedLodIndex: null } : { fileType: "unknown", url: t, specifiedLodIndex: null };
}
function Ic(t, e, r, i) {
  const a = t.model, o = new Array(), n = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = a.lods.length, u = zi();
  return a.lods.forEach((d, h) => {
    const v = i.skipHighLods === !0 && (l > 1 && h === 0 || l > 3 && h === 1) || i.skipHighLods === !1 && i.singleLodIndex != null && h !== i.singleLodIndex;
    if (v && h !== 0) return;
    const f = new hn(d.name, d.lodThreshold, [0, 0, 0]);
    d.parts.forEach((g) => {
      const S = v ? new qt({}) : $c(a, g, f, e, r, n, c), { geometry: x, vertexCount: P } = Pc(g, S ?? new qt({})), M = x.boundingInfo;
      M != null && h === 0 && (Gt(u, M.bbMin), Gt(u, M.bbMax)), S != null && (f.stageResources.geometries.push(x), f.numberOfVertices += P);
    }), v || o.push(f);
  }), { engineResources: o, referenceBoundingBox: u };
}
function $c(t, e, r, i, a, o, n) {
  const c = e.material + (e.attributes.normal ? "_normal" : "") + (e.attributes.color ? "_color" : "") + (e.attributes.texCoord0 ? "_texCoord0" : "") + (e.attributes.tangent ? "_tangent" : ""), l = t.materials.get(e.material), u = e.attributes.texCoord0 != null, d = e.attributes.normal != null;
  if (l == null) return null;
  const h = Lc(l.alphaMode);
  if (!o.has(c)) {
    if (u) {
      const N = (E, w = !1) => {
        if (E != null && !n.has(E)) {
          const O = t.textures.get(E);
          if (O != null) {
            const A = O.data;
            n.set(E, new oo(lr(A) ? A.data : A, { ...O.parameters, preMultiplyAlpha: !lr(A) && w, encoding: lr(A) && A.encoding != null ? A.encoding : void 0 }));
          }
        }
      };
      N(l.textureColor, h !== X.Opaque), N(l.textureNormal), N(l.textureOcclusion), N(l.textureEmissive), N(l.textureMetallicRoughness);
    }
    const f = l.color[0] ** (1 / qe), g = l.color[1] ** (1 / qe), S = l.color[2] ** (1 / qe), x = l.emissiveFactor[0] ** (1 / qe), P = l.emissiveFactor[1] ** (1 / qe), M = l.emissiveFactor[2] ** (1 / qe), I = l.textureColor != null && u ? n.get(l.textureColor) : null, D = tl({ normalTexture: l.textureNormal, metallicRoughnessTexture: l.textureMetallicRoughness, metallicFactor: l.metallicFactor, roughnessFactor: l.roughnessFactor, emissiveTexture: l.textureEmissive, emissiveFactor: l.emissiveFactor, occlusionTexture: l.textureOcclusion }), U = l.normalTextureTransform?.scale != null ? l.normalTextureTransform?.scale : Li;
    o.set(c, new qt({ ...i, transparent: h === X.Blend, customDepthTest: At.Lequal, textureAlphaMode: h, textureAlphaCutoff: l.alphaCutoff, diffuse: [f, g, S], ambient: [f, g, S], opacity: l.opacity, doubleSided: l.doubleSided, doubleSidedType: "winding-order", cullFace: l.doubleSided ? Ce.None : Ce.Back, hasVertexColors: !!e.attributes.color, hasVertexTangents: !!e.attributes.tangent, normalType: d ? Z.Attribute : Z.ScreenDerivative, castShadows: !0, receiveShadows: l.receiveShadows, receiveAmbientOcclusion: l.receiveAmbientOcclustion, textureId: I?.id, colorMixMode: l.colorMixMode, normalTextureId: l.textureNormal != null && u ? n.get(l.textureNormal).id : void 0, textureAlphaPremultiplied: I != null && !!I.parameters.preMultiplyAlpha, occlusionTextureId: l.textureOcclusion != null && u ? n.get(l.textureOcclusion).id : void 0, emissiveTextureId: l.textureEmissive != null && u ? n.get(l.textureEmissive).id : void 0, metallicRoughnessTextureId: l.textureMetallicRoughness != null && u ? n.get(l.textureMetallicRoughness).id : void 0, emissiveFactor: [x, P, M], mrrFactors: D ? [...rl] : [l.metallicFactor, l.roughnessFactor, i.mrrFactors[2]], isSchematic: D, colorTextureTransformMatrix: dt(l.colorTextureTransform), normalTextureTransformMatrix: dt(l.normalTextureTransform), scale: [U[0], U[1]], occlusionTextureTransformMatrix: dt(l.occlusionTextureTransform), emissiveTextureTransformMatrix: dt(l.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: dt(l.metallicRoughnessTextureTransform), ...a }));
  }
  const v = o.get(c);
  if (r.stageResources.materials.push(v), u) {
    const f = (g) => {
      g != null && r.stageResources.textures.push(n.get(g));
    };
    f(l.textureColor), f(l.textureNormal), f(l.textureOcclusion), f(l.textureEmissive), f(l.textureMetallicRoughness);
  }
  return v;
}
function Pc(t, e) {
  const r = t.attributes.position.count, i = Va(t.indices || r, t.primitiveType), a = Ot(3 * r), { typedBuffer: o, typedBufferStride: n } = t.attributes.position;
  Da(a, o, t.transform, 3, n);
  const c = [[p.POSITION, new Xe(a, i, 3, !0)]];
  if (t.attributes.normal != null) {
    const u = Ot(3 * r), { typedBuffer: d, typedBufferStride: h } = t.attributes.normal;
    $i(Ye, t.transform), Fa(u, d, Ye, 3, h), ei(Ye) && ri(u, u), c.push([p.NORMAL, new Xe(u, i, 3, !0)]);
  }
  if (t.attributes.tangent != null) {
    const u = Ot(4 * r), { typedBuffer: d, typedBufferStride: h } = t.attributes.tangent;
    Ma(Ye, t.transform), Ba(u, d, Ye, 4, h), ei(Ye) && ri(u, u, 4), c.push([p.TANGENT, new Xe(u, i, 4, !0)]);
  }
  if (t.attributes.texCoord0 != null) {
    const u = Ot(2 * r), { typedBuffer: d, typedBufferStride: h } = t.attributes.texCoord0;
    Ua(u, d, 2, h), c.push([p.UV0, new Xe(u, i, 2, !0)]);
  }
  const l = t.attributes.color;
  if (l != null) {
    const u = new Uint8Array(4 * r);
    l.elementCount === 4 ? l instanceof _r ? oi(u, l, 255) : l instanceof Zt ? ja(u, l) : l instanceof Pa && oi(u, l, 1 / 256) : (u.fill(255), l instanceof Ut ? ii(u, l.typedBuffer, 255, 4, l.typedBufferStride) : t.attributes.color instanceof La ? Ha(u, l.typedBuffer, 4, t.attributes.color.typedBufferStride) : t.attributes.color instanceof Na && ii(u, l.typedBuffer, 1 / 256, 4, l.typedBufferStride)), c.push([p.COLOR, new Xe(u, i, 4, !0)]);
  }
  return { geometry: new Ji(e, c), vertexCount: r };
}
const Ye = yt();
function Lc(t) {
  switch (t) {
    case "BLEND":
      return X.Blend;
    case "MASK":
      return X.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return X.Opaque;
  }
}
function Nc(t, e) {
  for (let r = 0; r < t.model.lods.length; ++r) {
    const i = t.model.lods[r];
    for (const a of i.parts) {
      const o = a.attributes.normal;
      if (o == null) return;
      const n = a.attributes.position, c = n.count, l = C(), u = C(), d = C(), h = new Uint8Array(4 * c), v = new Float64Array(3 * c), f = Ca(Jt(), a.transform);
      let g = 0, S = 0;
      for (let x = 0; x < c; x++) {
        n.getVec(x, u), o.getVec(x, l), we(u, u, a.transform), Ae(d, u, e.center), ti(d, d, e.radius);
        const P = d[2], M = he(d), I = Math.min(0.45 + 0.55 * M * M, 1);
        ti(d, d, e.radius), f !== null && we(d, d, f), kt(d, d), r + 1 !== t.model.lods.length && t.model.lods.length > 1 && gr(d, d, l, P > -1 ? 0.2 : Math.min(-4 * P - 3.8, 1)), v[g] = d[0], v[g + 1] = d[1], v[g + 2] = d[2], g += 3, h[S] = 255 * I, h[S + 1] = 255 * I, h[S + 2] = 255 * I, h[S + 3] = 255, S += 4;
      }
      a.attributes.normal = new Ut(v), a.attributes.color = new Zt(h);
    }
  }
}
const Dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  build: No
}, Symbol.toStringTag, { value: "Module" })), Fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  build: Bo,
  getRadius: rr
}, Symbol.toStringTag, { value: "Module" })), Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  build: Yo
}, Symbol.toStringTag, { value: "Module" })), zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  build: Jo
}, Symbol.toStringTag, { value: "Module" }));
export {
  mu as fetch,
  Ic as gltfToEngineResources,
  Rc as parseUrl
};
//# sourceMappingURL=objectResourceUtils-D4Obbyoz.js.map
