import { s as g, D as U, bN as b, lb as Y, aO as L } from "./main-DHXLMse1.js";
import "./enums-BsbtGCGp.js";
import { s as B, e as R, c as H } from "./Texture-D-YIHT8g.js";
import { U as u, C as h } from "./enums-DDkmfb-t.js";
import "./Program-BYtVT21d.js";
import { t as P } from "./VertexElementDescriptor-BAy1DPb3.js";
let y = class E {
  constructor(t, e, n, s, i, a, o) {
    this.instanceId = t, this.textureKey = e, this.indexStart = n, this.indexCount = s, this.vertexStart = i, this.vertexCount = a, this.overlaps = o;
  }
  updateBaseOffsets(t) {
    this.vertexStart += t.vertexFrom, this.indexStart += t.indexFrom;
  }
  clone() {
    return new E(this.instanceId, this.textureKey, this.indexStart, this.indexCount, this.vertexStart, this.vertexCount, this.overlaps);
  }
  static write(t, e, n, s, i, a, o, c) {
    t.push(e), t.push(n), t.push(s), t.push(i), t.push(a), t.push(o), t.push(c);
  }
  serialize(t) {
    return t.push(this.instanceId), t.push(this.textureKey), t.push(this.indexStart), t.push(this.indexCount), t.push(this.vertexStart), t.push(this.vertexCount), t.push(this.overlaps), t;
  }
  static deserialize(t) {
    const e = t.readInt32(), n = t.readInt32(), s = t.readInt32(), i = t.readInt32(), a = t.readInt32(), o = t.readInt32(), c = t.readInt32();
    return new E(e, n, s, i, a, o, c);
  }
};
y.byteSizeHint = 7 * Uint32Array.BYTES_PER_ELEMENT;
function I(r, t) {
  if (t !== null) {
    r.push(t.length);
    for (const e of t) e.serialize(r);
    return r;
  }
  r.push(0);
}
function S(r, t, e) {
  const n = r.readInt32(), s = new Array(n);
  for (let i = 0; i < s.length; i++) s[i] = t.deserialize(r, e);
  return s;
}
let k = class x {
  constructor(t, e) {
    this.id = t, this.sortKey = e, this.records = [];
  }
  serialize(t) {
    return t.push(this.id), t.writeF32(this.sortKey), I(t, this.records), t;
  }
  static deserialize(t) {
    const e = t.readInt32(), n = t.readF32(), s = new x(e, n);
    return s.records = S(t, y) ?? [], s;
  }
};
k.byteSizeHint = 2 * Uint32Array.BYTES_PER_ELEMENT + y.byteSizeHint;
const F = () => U.getLogger("esri.views.2d.engine.webgl.Utils");
function Q(r) {
  switch (r) {
    case u.UNSIGNED_BYTE:
      return 1;
    case u.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case u.FLOAT:
      return 4;
    default:
      return void F().error(new g("webgl-utils", `Unable to handle type ${r}`));
  }
}
function Z(r) {
  switch (r) {
    case u.UNSIGNED_BYTE:
      return Uint8Array;
    case u.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case u.FLOAT:
      return Float32Array;
    default:
      return void F().error(new g("webgl-utils", `Unable to handle type ${r}`));
  }
}
function v(r) {
  const t = {};
  for (const e in r) {
    const n = r[e];
    let s = 0;
    t[e] = n.map((i) => {
      const a = new P(i.name, i.count, i.type, s, 0, i.normalized || !1);
      return s += i.count * B(i.type), a;
    }), t[e]?.forEach((i) => i.stride = s);
  }
  return t;
}
const C = (r) => {
  const t = /* @__PURE__ */ new Map();
  for (const e in r) for (const n of r[e]) t.set(n.name, n.location);
  return t;
}, O = (r) => {
  const t = {};
  for (const e in r) {
    const n = r[e];
    t[e] = n?.length ? n[0].stride : 0;
  }
  return t;
}, d = /* @__PURE__ */ new Map(), tt = (r, t) => {
  if (!d.has(r)) {
    const e = v(t), n = { strides: O(e), bufferLayouts: e, attributes: C(t) };
    d.set(r, n);
  }
  return d.get(r);
}, et = (r) => r.includes("data:image/svg+xml");
function nt(r) {
  const t = [];
  for (let e = 0; e < r.length; e++) t.push(r.charCodeAt(e));
  return t;
}
function rt(r, t, e) {
  const n = new R(t.width, t.height);
  return n.dataType = t.dataType, t.depth && (n.depth = t.depth), t.flipped && (n.flipped = t.flipped), t.hasMipmap && (n.hasMipmap = t.hasMipmap), n.internalFormat = t.internalFormat, t.isImmutable && (n.isImmutable = t.isImmutable), t.isOpaque && (n.isOpaque = t.isOpaque), t.maxAnisotropy && (n.maxAnisotropy = t.maxAnisotropy), n.pixelFormat = t.pixelFormat, t.preMultiplyAlpha && (n.preMultiplyAlpha = t.preMultiplyAlpha), t.samplingMode && (n.samplingMode = t.samplingMode), t.target && (n.target = t.target), n.uniform = t.uniform, t.unpackAlignment && (n.unpackAlignment = t.unpackAlignment), t.wrapMode && (n.wrapMode = t.wrapMode), new H(r, n, e);
}
function st(r) {
  return "url" in r && "urlHash" in r ? { ...r, url: "" } : r;
}
let z = class p {
  constructor(t, e, n, s) {
    this.computedX = 0, this.computedY = 0, this.center = b(t, e), this.centerT = Y(), this.halfWidth = n / 2, this.halfHeight = s / 2, this.width = n, this.height = s;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t) {
    this.center[0] = t;
  }
  set y(t) {
    this.center[1] = t;
  }
  clone() {
    return new p(this.x, this.y, this.width, this.height);
  }
  serialize(t) {
    return t.writeF32(this.center[0]), t.writeF32(this.center[1]), t.push(this.width), t.push(this.height), t;
  }
  findCollisionDelta(t, e = 4) {
    const n = Math.abs(t.centerT[0] - this.centerT[0]), s = Math.abs(t.centerT[1] - this.centerT[1]), i = (t.halfWidth + this.halfWidth + e) / n, a = (t.halfHeight + this.halfHeight + e) / s, o = Math.min(i, a);
    return Math.log2(o);
  }
  extend(t) {
    const e = Math.min(this.xmin, t.xmin), n = Math.min(this.ymin, t.ymin), s = Math.max(this.xmax, t.xmax) - e, i = Math.max(this.ymax, t.ymax) - n, a = e + s / 2, o = n + i / 2;
    this.width = s, this.height = i, this.halfWidth = s / 2, this.halfHeight = i / 2, this.x = a, this.y = o;
  }
  static deserialize(t) {
    const e = t.readF32(), n = t.readF32(), s = t.readInt32(), i = t.readInt32();
    return new p(e, n, s, i);
  }
};
const M = new Float32Array(1), D = new Uint32Array(M.buffer);
function G(r) {
  return M[0] = r, D[0];
}
function it(r, t) {
  return 65535 & r | t << 16;
}
function m(r) {
  const t = G(r), e = t >>> 31;
  let n = t >>> 23 & 255, s = 8388607 & t;
  return n -= 127, n > 15 ? e << 15 | 31744 : n < -25 ? 0 : (n < -14 && (s += 8388608, s /= 2 ** (-14 - n), n = -15), n += 15, s /= 8192, s = $(s, 1023), e << 15 | n << 10 | s);
}
function $(r, t) {
  const e = Math.floor(r), n = r - e;
  return e < t && (n > 0.5 || n === 0.5 && e % 2 == 1) ? e + 1 : e;
}
function T(r) {
  let t = r >>> 15, e = r >> 10 & 31, n = 1023 & r;
  return t = t ? -1 : 1, e -= 15, n /= 1024, e > -15 ? n += 1 : e = -14, t * 2 ** e * n;
}
function at(r) {
  const t = r.map(({ name: e, count: n, type: s }) => `${e}.${n}.${s}`).join(",");
  return L(t);
}
function f(r, t, e, n, s, i, a) {
  if (r.primitiveName === t) {
    for (const o in r) if (o === e) {
      let c = n?.readWithDefault(s, i, r[o] && a);
      return r.type === "text" && (c = c.toString()), void (r[o] = c);
    }
  }
  if ("type" in r && r.type != null) switch (r.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      if (r.symbolLayers) for (const o of r.symbolLayers) f(o, t, e, n, s, i, a);
      break;
    case "CIMHatchFill":
      r.lineSymbol && f(r.lineSymbol, t, e, n, s, i, a);
      break;
    case "CIMSolidStroke":
    case "CIMSolidFill":
    case "CIMVectorMarker":
      if (r.type === "CIMVectorMarker" && r.markerGraphics) for (const o of r.markerGraphics) f(o, t, e, n, s, i, a), f(o.symbol, t, e, n, s, i, a);
  }
}
const W = 400;
function ot(r) {
  const t = r.width;
  return r.effects != null ? W : Math.max(1.25 * t, 8);
}
function ht(r, t, e, n) {
  const s = e.packPrecisionFactor ?? 1;
  switch (e.type) {
    case h.BYTE:
      if (e.count === 1) r.setInt8(n + e.offset, t * s);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int8Array.BYTES_PER_ELEMENT;
        r.setInt8(n + e.offset + a, t[i] * s);
      }
      break;
    case h.UNSIGNED_BYTE:
      if (e.count === 1) r.setUint8(n + e.offset, t * s);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint8Array.BYTES_PER_ELEMENT;
        r.setUint8(n + e.offset + a, t[i] * s);
      }
      break;
    case h.SHORT:
      if (e.count === 1) r.setInt16(n + e.offset, t * s, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int16Array.BYTES_PER_ELEMENT;
        r.setInt16(n + e.offset + a, t[i] * s, !0);
      }
      break;
    case h.UNSIGNED_SHORT:
      if (e.count === 1) r.setUint16(n + e.offset, t * s, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint16Array.BYTES_PER_ELEMENT;
        r.setUint16(n + e.offset + a, t[i] * s, !0);
      }
      break;
    case h.INT:
      if (e.count === 1) r.setInt32(n + e.offset, t * s, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int32Array.BYTES_PER_ELEMENT;
        r.setInt32(n + e.offset + a, t[i] * s, !0);
      }
      break;
    case h.UNSIGNED_INT:
      if (e.count === 1) r.setUint32(n + e.offset, t * s, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint32Array.BYTES_PER_ELEMENT;
        r.setUint32(n + e.offset + a, t[i] * s, !0);
      }
      break;
    case h.FLOAT:
      if (e.count === 1) r.setFloat32(n + e.offset, t * s, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Float32Array.BYTES_PER_ELEMENT;
        r.setFloat32(n + e.offset + a, t[i] * s, !0);
      }
      break;
    case h.HALF_FLOAT:
      if (e.count === 1) r.setUint16(n + e.offset, m(t * s), !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint16Array.BYTES_PER_ELEMENT;
        r.setUint16(n + e.offset + a, m(t[i] * s), !0);
      }
  }
}
function ct(r, t, e) {
  switch (t.type) {
    case h.BYTE: {
      if (t.count === 1) return r.getInt8(e + t.offset);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Int8Array.BYTES_PER_ELEMENT;
        n.push(r.getInt8(e + t.offset + i));
      }
      return n;
    }
    case h.UNSIGNED_BYTE: {
      if (t.count === 1) return r.getUint8(e + t.offset);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Uint8Array.BYTES_PER_ELEMENT;
        n.push(r.getUint8(e + t.offset + i));
      }
      return n;
    }
    case h.SHORT: {
      if (t.count === 1) return r.getInt16(e + t.offset, !0);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Int16Array.BYTES_PER_ELEMENT;
        n.push(r.getInt16(e + t.offset + i, !0));
      }
      return n;
    }
    case h.UNSIGNED_SHORT: {
      if (t.count === 1) return r.getUint16(e + t.offset, !0);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Uint16Array.BYTES_PER_ELEMENT;
        n.push(r.getUint16(e + t.offset + i, !0));
      }
      return n;
    }
    case h.INT: {
      if (t.count === 1) return r.getInt32(e + t.offset, !0);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Int32Array.BYTES_PER_ELEMENT;
        n.push(r.getInt32(e + t.offset + i, !0));
      }
      return n;
    }
    case h.UNSIGNED_INT: {
      if (t.count === 1) return r.getUint32(e + t.offset, !0);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Uint32Array.BYTES_PER_ELEMENT;
        n.push(r.getUint32(e + t.offset + i, !0));
      }
      return n;
    }
    case h.FLOAT: {
      if (t.count === 1) return r.getFloat32(e + t.offset, !0);
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Float32Array.BYTES_PER_ELEMENT;
        n.push(r.getFloat32(e + t.offset + i, !0));
      }
      return n;
    }
    case h.HALF_FLOAT: {
      if (t.count === 1) return T(r.getUint16(e + t.offset, !0));
      const n = [];
      for (let s = 0; s < t.count; s++) {
        const i = s * Uint16Array.BYTES_PER_ELEMENT;
        n.push(T(r.getUint16(e + t.offset + i, !0)));
      }
      return n;
    }
  }
}
class w {
  constructor(t, e, n, s, i, a, o, c, l = []) {
    this.entityTexel = t, this.anchorX = e, this.anchorY = n, this.directionX = s, this.directionY = i, this.maxScale = a, this.minScale = o, this.referenceBounds = c, this.bounds = l;
  }
  serialize(t) {
    t.push(this.entityTexel), t.writeF32(this.anchorX), t.writeF32(this.anchorY), t.writeF32(this.directionX), t.writeF32(this.directionY), t.writeF32(this.maxScale), t.writeF32(this.minScale), this.referenceBounds === null ? (t.writeF32(0), t.writeF32(0), t.writeF32(0)) : (t.writeF32(this.referenceBounds.size), t.writeF32(this.referenceBounds.offsetX), t.writeF32(this.referenceBounds.offsetY)), I(t, this.bounds);
  }
  static deserialize(t) {
    const e = t.readInt32(), n = t.readF32(), s = t.readF32(), i = t.readF32(), a = t.readF32(), o = t.readF32(), c = t.readF32(), l = t.readF32(), _ = t.readF32(), N = t.readF32(), A = S(t, z) ?? [];
    return new w(e, n, s, i, a, o, c, { size: l, offsetX: _, offsetY: N }, A);
  }
}
export {
  st as M,
  rt as T,
  at as a,
  tt as b,
  Q as c,
  Z as d,
  ht as e,
  it as f,
  ot as g,
  ct as h,
  z as i,
  nt as j,
  S as n,
  f as o,
  w as r,
  k as s,
  y as t,
  et as y
};
//# sourceMappingURL=LabelMetric-BZ1wS013.js.map
