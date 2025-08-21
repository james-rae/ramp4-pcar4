import { C as h } from "./enums-DDkmfb-t.js";
import { dt as te, op as ee, a9 as se, aM as ie, s as re, D as oe, d8 as y, oq as $t, aN as _t, or as Z, jk as ne, os as ae, jl as ce, ot as ue } from "./main-DHXLMse1.js";
import { Q as gt, A as kt, i as Pt, g as v, C as le, q as It, B as At, S as J, w as St, j as he, m as pe, o as fe, F as de, H as xe, O as me, D as ye, E as _e, p as R } from "./UpdateTracking2D-DZd6CIsL.js";
import { g as Nt, i as Dt, l as ge } from "./GeometryUtils-Bm16CC-p.js";
import { a as K, c as it, t as D, R as ke, d as Pe, e as Se, V as we, A as be } from "./definitions-Doe0g1C2.js";
import { a as ve, i as Te, c as Ee } from "./TurboLine-CjdL1QjA.js";
import { a as Me, e as $e, f as Ie, g as zt } from "./LabelMetric-BZ1wS013.js";
import "./earcut-Bpn9o5EZ.js";
import { t as q } from "./constants-DVpDF9P6.js";
import { U as rt, e as ot, w as nt, n as at, i as Bt } from "./enums-BsbtGCGp.js";
function Ae(e, t, s, i, r, o, n) {
  ht = 0;
  const a = (i - s) * o, c = r && r.length, l = c ? (r[0] - s) * o : a;
  let u, f, p, d, x, m = Yt(t, s, i, 0, l, o, !0);
  if (m && m.next !== m.prev) {
    if (c && (m = Be(t, s, i, r, m, o)), a > 80 * o) {
      u = p = t[0 + s * o], f = d = t[1 + s * o];
      for (let _ = o; _ < l; _ += o) {
        const P = t[_ + s * o], w = t[_ + 1 + s * o];
        u = Math.min(u, P), f = Math.min(f, w), p = Math.max(p, P), d = Math.max(d, w);
      }
      x = Math.max(p - u, d - f), x = x !== 0 ? 1 / x : 0;
    }
    C(m, e, o, u, f, x, n, 0);
  }
}
function Yt(e, t, s, i, r, o, n) {
  let a;
  if (n === Le(e, t, s, i, r, o) > 0) for (let c = i; c < r; c += o) a = wt(c + t * o, e[c + t * o], e[c + 1 + t * o], a);
  else for (let c = r - o; c >= i; c -= o) a = wt(c + t * o, e[c + t * o], e[c + 1 + t * o], a);
  return a && $(a, a.next) && (O(a), a = a.next), a;
}
function L(e, t = e) {
  if (!e) return e;
  let s, i = e;
  do
    if (s = !1, i.steiner || !$(i, i.next) && k(i.prev, i, i.next) !== 0) i = i.next;
    else {
      if (O(i), i = t = i.prev, i === i.next) break;
      s = !0;
    }
  while (s || i !== t);
  return t;
}
function C(e, t, s, i, r, o, n, a) {
  if (!e) return;
  !a && o && (e = Ft(e, i, r, o));
  let c = e;
  for (; e.prev !== e.next; ) {
    const l = e.prev, u = e.next;
    if (o ? De(e, i, r, o) : Ne(e)) t.push(l.index / s + n), t.push(e.index / s + n), t.push(u.index / s + n), O(e), e = u.next, c = u.next;
    else if ((e = u) === c) {
      a ? a === 1 ? C(e = Oe(e, t, s, n), t, s, i, r, o, n, 2) : a === 2 && We(e, t, s, i, r, o, n) : C(L(e), t, s, i, r, o, n, 1);
      break;
    }
  }
}
function Ne(e) {
  const t = e.prev, s = e, i = e.next;
  if (k(t, s, i) >= 0) return !1;
  let r = e.next.next;
  const o = r;
  let n = 0;
  for (; r !== e.prev && (n === 0 || r !== o); ) {
    if (n++, N(t.x, t.y, s.x, s.y, i.x, i.y, r.x, r.y) && k(r.prev, r, r.next) >= 0) return !1;
    r = r.next;
  }
  return !0;
}
function De(e, t, s, i) {
  const r = e.prev, o = e, n = e.next;
  if (k(r, o, n) >= 0) return !1;
  const a = r.x < o.x ? r.x < n.x ? r.x : n.x : o.x < n.x ? o.x : n.x, c = r.y < o.y ? r.y < n.y ? r.y : n.y : o.y < n.y ? o.y : n.y, l = r.x > o.x ? r.x > n.x ? r.x : n.x : o.x > n.x ? o.x : n.x, u = r.y > o.y ? r.y > n.y ? r.y : n.y : o.y > n.y ? o.y : n.y, f = ut(a, c, t, s, i), p = ut(l, u, t, s, i);
  let d = e.prevZ, x = e.nextZ;
  for (; d && d.z >= f && x && x.z <= p; ) {
    if (d !== e.prev && d !== e.next && N(r.x, r.y, o.x, o.y, n.x, n.y, d.x, d.y) && k(d.prev, d, d.next) >= 0 || (d = d.prevZ, x !== e.prev && x !== e.next && N(r.x, r.y, o.x, o.y, n.x, n.y, x.x, x.y) && k(x.prev, x, x.next) >= 0)) return !1;
    x = x.nextZ;
  }
  for (; d && d.z >= f; ) {
    if (d !== e.prev && d !== e.next && N(r.x, r.y, o.x, o.y, n.x, n.y, d.x, d.y) && k(d.prev, d, d.next) >= 0) return !1;
    d = d.prevZ;
  }
  for (; x && x.z <= p; ) {
    if (x !== e.prev && x !== e.next && N(r.x, r.y, o.x, o.y, n.x, n.y, x.x, x.y) && k(x.prev, x, x.next) >= 0) return !1;
    x = x.nextZ;
  }
  return !0;
}
function wt(e, t, s, i) {
  const r = z.create(e, t, s);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function O(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function ze(e) {
  let t = e, s = e;
  do
    (t.x < s.x || t.x === s.x && t.y < s.y) && (s = t), t = t.next;
  while (t !== e);
  return s;
}
function Be(e, t, s, i, r, o) {
  const n = new Array();
  for (let a = 0, c = i.length; a < c; a++) {
    const l = Yt(e, t, s, i[a] * o, a < c - 1 ? i[a + 1] * o : s * o, o, !1);
    l === l.next && (l.steiner = !0), n.push(ze(l));
  }
  n.sort(Ce);
  for (const a of n) r = Ye(a, r);
  return r;
}
function Ye(e, t) {
  const s = Fe(e, t);
  if (!s) return t;
  const i = Gt(s, e);
  return L(i, i.next), L(s, s.next);
}
function Fe(e, t) {
  let s = t;
  const i = e.x, r = e.y;
  let o, n = -1 / 0;
  do {
    if (r <= s.y && r >= s.next.y && s.next.y !== s.y) {
      const p = s.x + (r - s.y) * (s.next.x - s.x) / (s.next.y - s.y);
      if (p <= i && p > n) {
        if (n = p, p === i) {
          if (r === s.y) return s;
          if (r === s.next.y) return s.next;
        }
        o = s.x < s.next.x ? s : s.next;
      }
    }
    s = s.next;
  } while (s !== t);
  if (!o) return null;
  if (i === n) return o.prev;
  const a = o, c = o.x, l = o.y;
  let u, f = 1 / 0;
  for (s = o.next; s !== a; ) i >= s.x && s.x >= c && i !== s.x && N(r < l ? i : n, r, c, l, r < l ? n : i, r, s.x, s.y) && (u = Math.abs(r - s.y) / (i - s.x), (u < f || u === f && s.x > o.x) && W(s, e) && (o = s, f = u)), s = s.next;
  return o;
}
function Ft(e, t, s, i) {
  let r;
  for (; r !== e; r = r.next) {
    if (r = r || e, r.z === null && (r.z = ut(r.x, r.y, t, s, i)), r.prev.next !== r || r.next.prev !== r) return r.prev.next = r, r.next.prev = r, Ft(e, t, s, i);
    r.prevZ = r.prev, r.nextZ = r.next;
  }
  return e.prevZ.nextZ = null, e.prevZ = null, Re(e);
}
function Re(e) {
  let t, s = 1;
  for (; ; ) {
    let i, r = e;
    e = null, t = null;
    let o = 0;
    for (; r; ) {
      o++, i = r;
      let n = 0;
      for (; n < s && i; n++) i = i.nextZ;
      let a = s;
      for (; n > 0 || a > 0 && i; ) {
        let c;
        n === 0 ? (c = i, i = i.nextZ, a--) : a !== 0 && i ? r.z <= i.z ? (c = r, r = r.nextZ, n--) : (c = i, i = i.nextZ, a--) : (c = r, r = r.nextZ, n--), t ? t.nextZ = c : e = c, c.prevZ = t, t = c;
      }
      r = i;
    }
    if (t.nextZ = null, s *= 2, o < 2) return e;
  }
}
function k(e, t, s) {
  return (t.y - e.y) * (s.x - t.x) - (t.x - e.x) * (s.y - t.y);
}
function Rt(e, t, s, i) {
  return !!($(e, t) && $(s, i) || $(e, i) && $(s, t)) || k(e, t, s) > 0 != k(e, t, i) > 0 && k(s, i, e) > 0 != k(s, i, t) > 0;
}
function Ge(e, t) {
  let s = e;
  do {
    if (s.index !== e.index && s.next.index !== e.index && s.index !== t.index && s.next.index !== t.index && Rt(s, s.next, e, t)) return !0;
    s = s.next;
  } while (s !== e);
  return !1;
}
function Le(e, t, s, i, r, o) {
  let n = 0;
  for (let a = i, c = r - o; a < r; a += o) n += (e[c + t * o] - e[a + t * o]) * (e[a + 1 + t * o] + e[c + 1 + t * o]), c = a;
  return n;
}
function N(e, t, s, i, r, o, n, a) {
  return (r - n) * (t - a) - (e - n) * (o - a) >= 0 && (e - n) * (i - a) - (s - n) * (t - a) >= 0 && (s - n) * (o - a) - (r - n) * (i - a) >= 0;
}
function W(e, t) {
  return k(e.prev, e, e.next) < 0 ? k(e, t, e.next) >= 0 && k(e, e.prev, t) >= 0 : k(e, t, e.prev) < 0 || k(e, e.next, t) < 0;
}
function ut(e, t, s, i, r) {
  return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - s) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function $(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Ce(e, t) {
  return e.x - t.x;
}
function Oe(e, t, s, i) {
  let r = e;
  do {
    const o = r.prev, n = r.next.next;
    !$(o, n) && Rt(o, r, r.next, n) && W(o, n) && W(n, o) && (t.push(o.index / s + i), t.push(r.index / s + i), t.push(n.index / s + i), O(r), O(r.next), r = e = n), r = r.next;
  } while (r !== e);
  return r;
}
function We(e, t, s, i, r, o, n) {
  let a = e;
  do {
    let c = a.next.next;
    for (; c !== a.prev; ) {
      if (a.index !== c.index && Ue(a, c)) {
        let l = Gt(a, c);
        return a = L(a, a.next), l = L(l, l.next), C(a, t, s, i, r, o, n, 0), void C(l, t, s, i, r, o, n, 0);
      }
      c = c.next;
    }
    a = a.next;
  } while (a !== e);
}
function Ue(e, t) {
  return e.next.index !== t.index && e.prev.index !== t.index && !Ge(e, t) && W(e, t) && W(t, e) && He(e, t);
}
function He(e, t) {
  let s = e, i = !1;
  const r = (e.x + t.x) / 2, o = (e.y + t.y) / 2;
  do
    s.y > o != s.next.y > o && s.next.y !== s.y && r < (s.next.x - s.x) * (o - s.y) / (s.next.y - s.y) + s.x && (i = !i), s = s.next;
  while (s !== e);
  return i;
}
function Gt(e, t) {
  const s = z.create(e.index, e.x, e.y), i = z.create(t.index, t.x, t.y), r = e.next, o = t.prev;
  return e.next = t, t.prev = e, s.next = r, r.prev = s, i.next = s, s.prev = i, o.next = i, i.prev = o, i;
}
class z {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }
  static create(t, s, i) {
    const r = ht < lt.length ? lt[ht++] : new z();
    return r.index = t, r.x = s, r.y = i, r.prev = null, r.next = null, r.z = null, r.prevZ = null, r.nextZ = null, r.steiner = !1, r;
  }
}
const lt = [], Xe = 8096;
let ht = 0;
for (let e = 0; e < Xe; e++) lt.push(new z());
const Ve = 1e-5, M = new Nt(0, 0, 0, 1, 0), pt = new Nt(0, 0, 0, 1, 0);
function bt(e, t, s) {
  let i = 0;
  for (let r = 1; r < s; r++) {
    const o = e[2 * (t + r - 1)], n = e[2 * (t + r - 1) + 1];
    i += (e[2 * (t + r)] - o) * (e[2 * (t + r) + 1] + n);
  }
  return i;
}
function Ze(e, t, s, i, r) {
  let o = 0;
  const n = 2;
  for (let a = s; a < i; a += 3) {
    const c = (e[a] - r) * n, l = (e[a + 1] - r) * n, u = (e[a + 2] - r) * n;
    o += Math.abs((t[c] - t[u]) * (t[l + 1] - t[c + 1]) - (t[c] - t[l]) * (t[u + 1] - t[c + 1]));
  }
  return o;
}
function qe(e, t) {
  const { coords: s, lengths: i, hasIndeterminateRingOrder: r } = t, o = 0, n = e;
  if (r) return !1;
  let a = 0;
  for (let c = 0; c < i.length; ) {
    let l = c, u = i[c], f = bt(s, a, u);
    const p = [];
    for (; ++l < i.length; ) {
      const _ = i[l], P = bt(s, a + u, _);
      if (!(P > 0)) break;
      f += P, p.push(a + u), u += _;
    }
    const d = n.length;
    Ae(n, s, a, a + u, p, 2, o);
    const x = Ze(n, s, d, n.length, o), m = Math.abs(f);
    if (Math.abs((x - m) / Math.max(1e-7, m)) > Ve) return n.length = 0, !1;
    c = l, a += u;
  }
  return !0;
}
function Qe(e) {
  const { coords: t, lengths: s } = e, { buffer: i } = ve(t, s);
  return i;
}
function je(e, t, s) {
  let i = 0;
  for (let r = 0; r < e.lengths.length; r++) {
    const o = e.lengths[r];
    for (let n = 0; n < o; n++) {
      const a = e.coords[2 * (n + i)], c = e.coords[2 * (n + i) + 1];
      if (a < t || a > s || c < t || c > s) return !0;
    }
    i += o;
  }
  return !1;
}
function Lt(e, t) {
  if (e == null) return null;
  if (!je(e, -128, K + 128)) return e;
  M.setPixelMargin(t), M.reset(Dt.Polygon);
  let s = 0;
  for (let n = 0; n < e.lengths.length; n++) {
    const a = e.lengths[n];
    let c = e.coords[2 * (0 + s)], l = e.coords[2 * (0 + s) + 1];
    M.moveTo(c, l);
    for (let u = 1; u < a; u++) c = e.coords[2 * (u + s)], l = e.coords[2 * (u + s) + 1], M.lineTo(c, l);
    M.close(), s += a;
  }
  const i = M.result(!1);
  if (!i) return null;
  const r = [], o = [];
  for (const n of i) {
    let a = 0;
    for (const c of n) o.push(c.x), o.push(c.y), a++;
    r.push(a);
  }
  return new te(r, o);
}
function Je(e, t) {
  pt.setPixelMargin(t);
  const s = pt, i = -t, r = K + t;
  let o = [], n = !1;
  if (!e.nextPath()) return null;
  let a = !0;
  for (; a; ) {
    e.seekPathStart();
    const c = [];
    if (!e.pathSize) return null;
    s.reset(Dt.LineString), e.nextPoint();
    let l = e.x, u = e.y;
    if (n) s.moveTo(l, u);
    else {
      if (l < i || l > r || u < i || u > r) {
        n = !0;
        continue;
      }
      c.push({ x: l, y: u });
    }
    let f = !1;
    for (; e.nextPoint(); ) if (l = e.x, u = e.y, n) s.lineTo(l, u);
    else {
      if (l < i || l > r || u < i || u > r) {
        f = !0;
        break;
      }
      c.push({ x: l, y: u });
    }
    if (f) n = !0;
    else {
      if (n) {
        const p = s.resultWithStarts();
        if (p) for (const d of p) o.push(d);
      } else o.push({ line: c, start: 0 });
      a = e.nextPath(), n = !1;
    }
  }
  return o = o.filter((c) => c.line.length > 1), o.length === 0 ? null : o;
}
M.setExtent(K), pt.setExtent(K);
const Ke = 96 / 72;
let ts = class {
  static executeEffects(t, s, i, r) {
    const o = Ke, n = gt(t);
    let a = new Pt(s);
    for (const c of t) {
      const l = kt(c);
      l && (a = l.execute(a, c, o, i, r, n));
    }
    return a;
  }
  static applyEffects(t, s, i) {
    if (!t) return s;
    const r = gt(t);
    let o, n = new Pt(v.fromJSONCIM(s));
    for (const l of t) {
      const u = kt(l);
      u && (n = u.execute(n, l, 1, null, i, r));
    }
    const a = [];
    let c = null;
    for (; o = n.next(); ) a.push(...ee(o)), c = o.geometryType;
    return a.length === 0 || c === null ? null : c === "esriGeometryPolygon" ? { rings: a } : { paths: a };
  }
}, Ct = null;
function xt() {
  return Ct;
}
async function es() {
  Ct = await import("./geometryEngineJSON-COitQzIC.js").then((e) => e.g);
}
function Ot(e) {
  switch (e) {
    case h.BYTE:
    case h.UNSIGNED_BYTE:
      return 1;
    case h.SHORT:
    case h.UNSIGNED_SHORT:
    case h.HALF_FLOAT:
      return 2;
    case h.FLOAT:
    case h.INT:
    case h.UNSIGNED_INT:
      return 4;
  }
}
function ss(e) {
  const t = [], s = [], i = [];
  for (const r of e) {
    const o = Ot(r.type) * r.count;
    switch (o % 2 || o % 4 || 4) {
      case 4:
        t.push(r);
        continue;
      case 2:
        s.push(r);
        continue;
      case 1:
        i.push(r);
        continue;
      default:
        throw new Error("Found unexpected dataType byte count");
    }
  }
  return t.push(...s), t.push(...i), t;
}
let is = class Wt {
  static fromVertexSpec(t, s) {
    const { attributes: i, optionalAttributes: r } = t;
    let o, n, a;
    const c = [];
    for (const m in i) {
      const _ = i[m];
      _.pack === "position" ? o = { ..._, name: m, offset: 0 } : _.pack === "id" ? n = { ..._, name: m, offset: 4 } : m === "bitset" ? a = { ..._, name: m, offset: 7 } : c.push({ ..._, name: m });
    }
    for (const m in r) if (s[m] === !0) {
      const _ = r[m];
      c.push({ ..._, name: m });
    }
    const l = ss(c), u = [];
    let f = 8, p = 1;
    for (const m of l) u.push({ ...m, offset: f }), f += Ot(m.type) * m.count, m.packAlternating && (p = Math.max(m.packAlternating.count, p));
    const d = Uint32Array.BYTES_PER_ELEMENT, x = f % d;
    return new Wt(o, n, a, u, f + (x ? d - x : 0), p);
  }
  constructor(t, s, i, r, o, n) {
    this.position = t, this.id = s, this.bitset = i, this.standardAttributes = r, this.stride = o, this.packVertexCount = n, r.push(i), this._attributes = [t, s, i, ...r];
  }
  get attributeLayout() {
    if (!this._attributeLayout) {
      const t = Me(this._attributes), s = this._attributes.map((i) => ({ name: i.name, count: i.count, offset: i.offset, type: i.type, packPrecisionFactor: i.packPrecisionFactor, normalized: i.normalized ?? !1 }));
      this._attributeLayout = { attributes: s, hash: t, stride: this.stride };
    }
    return this._attributeLayout;
  }
}, rs = class Ut {
  static fromVertexSpec(t, s) {
    const i = is.fromVertexSpec(t, s);
    return new Ut(i);
  }
  constructor(t) {
    this._spec = t, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t, s, i, r, o, n) {
    for (let a = 0; a < this._spec.packVertexCount; a++) {
      const c = a * this._spec.stride;
      this._packPosition(i, r, c), this._packId(s, c);
      const l = this._spec.bitset;
      if (n) {
        if (l.packTessellation) {
          const u = l.packTessellation(n, o);
          this._pack(u, l, c);
        }
        for (const u of this._spec.standardAttributes) if (u.packTessellation != null) {
          const f = u.packTessellation(n, o);
          this._pack(f, u, c);
        } else if (u.packAlternating?.packTessellation) {
          const f = u.packAlternating.packTessellation(n, o);
          for (let p = 0; p < this._spec.packVertexCount; p++) {
            const d = f[p];
            this._pack(d, u, p * this._spec.stride);
          }
        }
      }
    }
    t.vertexWriteRegion(this._packedU32View);
  }
  pack(t, s) {
    for (const i of this._spec.standardAttributes) if (i.pack && typeof i.pack != "string") {
      const r = i.pack(t, s);
      for (let o = 0; o < this._spec.packVertexCount; o++) this._pack(r, i, o * this._spec.stride);
    } else if (i.packAlternating?.pack) {
      const r = i.packAlternating.pack(t, s);
      for (let o = 0; o < this._spec.packVertexCount; o++) {
        const n = r[o];
        this._pack(n, i, o * this._spec.stride);
      }
    }
  }
  _packPosition(t, s, i) {
    const { offset: r } = this._spec.position, o = this._spec.position.packPrecisionFactor ?? 1, n = Ie(t * o, s * o);
    this._dataView.setUint32(i + r, n, !0);
  }
  _packId(t, s) {
    const i = t * (this._spec.id.packPrecisionFactor ?? 1), r = 4278190080 & this._dataView.getUint32(s + this._spec.id.offset, !0);
    this._dataView.setUint32(s + this._spec.id.offset, i | r, !0);
  }
  _pack(t, s, i) {
    $e(this._dataView, t, s, i);
  }
};
function os(e) {
  if (!e) return !1;
  for (const t of e) switch (t.effect.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return !0;
  }
  return !1;
}
let B = class {
  constructor(t, s, i, r) {
    this._instanceId = t, this._evaluator = s, this._enabledOptionalAttributes = i, this._viewParams = r, this._evaluator.evaluator = (o) => this.vertexSpec.createComputedParams(o);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const t = rs.fromVertexSpec(this.vertexSpec, this._enabledOptionalAttributes);
      this._evaluator.hasDynamicProperties || t.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = t;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  setReferences(t) {
    this._references = t;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  async loadDependencies() {
    os(this._evaluator.inputMeshParams.effects?.effectInfos) && await es();
  }
  enqueueRequest(t, s, i) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(t, s, i);
  }
  write(t, s, i, r, o) {
    this.ensurePacked(s, i, r);
    const n = this.evaluatedMeshParams.effects;
    if (!n || n.length === 0) return void this._write(t, i, void 0, o);
    const a = i.readGeometryForDisplay()?.clone();
    if (!a) return;
    const c = v.fromOptimizedCIM(a, i.geometryType), l = xt();
    c.invertY();
    const u = t.id || "", f = ts.executeEffects(n, c, u, l);
    let p;
    for (; p = f.next(); ) p.invertY(), this._write(t, i, p, o);
  }
  ensurePacked(t, s, i) {
    if (!this._evaluator.hasDynamicProperties) return;
    const r = this._evaluator.evaluateMeshParams(t, s, i);
    this._vertexPack.pack(r, this._viewParams);
  }
  _writeVertex(t, s, i, r, o) {
    const n = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(t, s, i, r, n, o);
  }
};
const ns = 100, as = se("featurelayer-fast-triangulation-enabled");
let Ht = class extends B {
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), Te()]);
  }
  _write(t, s, i) {
    const r = i?.asOptimized() ?? s.readGeometryForDisplay(), o = this._clip(r);
    o && (t.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t, s, o), t.recordEnd());
  }
  _clip(t) {
    if (!t) return null;
    const s = this.hasEffects;
    return Lt(t, s ? 256 : 8);
  }
  _writeGeometry(t, s, i) {
    const r = i.maxLength > ns, o = [], n = this.createTesselationParams(s);
    if (!r && as && qe(o, i)) return void (o.length && this._writeVertices(t, s, i.coords, n, o));
    const a = Qe(i);
    this._writeVertices(t, s, a, n);
  }
  _writeVertices(t, s, i, r, o) {
    const n = s.getDisplayId(), a = t.vertexCount(), c = this.hasEffects;
    let l = 0;
    if (o) for (const u of o) {
      const f = i[2 * u], p = i[2 * u + 1];
      c && t.recordBounds(f, p, 0, 0), this._writeVertex(t, n, f, p, r), l++;
    }
    else for (let u = 0; u < i.length; u += 2) {
      const f = Math.round(i[u]), p = Math.round(i[u + 1]);
      c && t.recordBounds(f, p, 0, 0), this._writeVertex(t, n, f, p, r), l++;
    }
    t.indexEnsureSize(l);
    for (let u = 0; u < l; u++) t.indexWrite(u + a);
  }
};
const cs = { createComputedParams: (e) => e, optionalAttributes: {}, attributes: { id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1 }, pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, inverseArea: { type: h.FLOAT, count: 1, packTessellation: ({ inverseArea: e }) => e } } };
let si = class extends Ht {
  constructor() {
    super(...arguments), this.vertexSpec = cs;
  }
  createTesselationParams(t) {
    return { inverseArea: 1 / t.readGeometryArea() };
  }
};
const us = () => oe.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils"), ls = 0, hs = 100;
function U(e, t) {
  return [!!e?.minScale && t.scaleToZoom(e.minScale) || ls, !!e?.maxScale && t.scaleToZoom(e.maxScale) || hs];
}
function G(e) {
  return 1 << e;
}
function H(e) {
  let t = 0;
  for (const [s, i] of e) i && (t |= 1 << s);
  return t;
}
function g(e) {
  let t;
  if (!e) return [0, 0, 0, 0];
  if (typeof e == "string") {
    const n = ie.fromString(e);
    if (!n) return us().errorOnce(new re("mapview:mesh-processing", "Unable to parse string into color", { color: e })), [0, 0, 0, 0];
    t = n.toArray();
  } else t = e;
  const [s, i, r, o] = t;
  return [s * (o / 255), i * (o / 255), r * (o / 255), o];
}
function ps(e) {
  switch (e) {
    case "butt":
    case rt.Butt:
      return ot.BUTT;
    case "round":
    case rt.Round:
      return ot.ROUND;
    case "square":
    case rt.Square:
      return ot.SQUARE;
  }
}
function fs(e) {
  switch (e) {
    case "bevel":
    case nt.Bevel:
      return at.BEVEL;
    case "miter":
    case nt.Miter:
      return at.MITER;
    case "round":
    case nt.Round:
      return at.ROUND;
  }
}
function ct(e, t) {
  return Math.round(Math.min(Math.sqrt(e * t), 255));
}
function Q(e, t) {
  return Math.round(e * t) / t;
}
const ft = { createComputedParams: (e) => e, optionalAttributes: { zoomRange: { type: h.SHORT, count: 2, packPrecisionFactor: it, pack: ({ scaleInfo: e }, { tileInfo: t }) => U(e, t) } }, attributes: { id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1 }, pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: e }) => g(e) } } };
let Xt = class extends Ht {
  constructor() {
    super(...arguments), this.vertexSpec = ft;
  }
  createTesselationParams(t) {
    return null;
  }
};
const I = { createComputedParams: (e) => e, optionalAttributes: ft.optionalAttributes, attributes: { ...ft.attributes, tlbr: { count: 4, type: h.UNSIGNED_SHORT, pack: ({ sprite: e }) => {
  const { rect: t, width: s, height: i } = e, r = t.x + D, o = t.y + D;
  return [r, o, r + s, o + i];
} }, inverseRasterizationScale: { count: 1, type: h.BYTE, packPrecisionFactor: 16, pack: ({ sprite: e }) => 1 / e.rasterizationScale } } };
let ds = class extends Xt {
  constructor() {
    super(...arguments), this.vertexSpec = I;
  }
  _write(t, s, i) {
    const r = i?.asOptimized() ?? s.readGeometryForDisplay(), o = this._clip(r);
    if (!o) return;
    const n = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, n), this._writeGeometry(t, s, o), t.recordEnd();
  }
};
function tt(e) {
  const { sprite: t, aspectRatio: s, scaleProportionally: i } = e, r = y(e.height), o = r > 0 ? r : t.height;
  let n = r * s;
  return n <= 0 ? n = t.width : i && (n *= t.width / t.height), { width: n, height: o };
}
function Vt(e) {
  const { applyRandomOffset: t, sampleAlphaOnly: s } = e;
  return H([[le, t], [It, s]]);
}
const Zt = { createComputedParams: (e) => e, optionalAttributes: I.optionalAttributes, attributes: { ...I.attributes, bitset: { count: 1, type: h.UNSIGNED_BYTE, pack: Vt }, width: { count: 1, type: h.HALF_FLOAT, pack: (e) => tt(e).width }, height: { count: 1, type: h.HALF_FLOAT, pack: (e) => tt(e).height }, offset: { count: 2, type: h.HALF_FLOAT, pack: ({ offsetX: e, offsetY: t }) => [y(e), -y(t)] }, scale: { count: 2, type: h.UNSIGNED_BYTE, packPrecisionFactor: 16, pack: ({ scaleX: e, scaleY: t }) => [e, t] }, angle: { count: 1, type: h.UNSIGNED_BYTE, pack: ({ angle: e }) => ge(e) } } };
let ni = class extends ds {
  constructor() {
    super(...arguments), this.vertexSpec = Zt;
  }
}, xs = class {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0;
  }
};
const A = { createComputedParams: (e) => e, optionalAttributes: { zoomRange: { type: h.SHORT, count: 2, packPrecisionFactor: it, pack: ({ scaleInfo: e }, { tileInfo: t }) => U(e, t) } }, attributes: { id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, bitset: { type: h.UNSIGNED_BYTE, count: 1 }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: e }) => g(e) }, offset: { type: h.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ extrusionOffsetX: e, extrusionOffsetY: t }) => [Q(e, 16), Q(t, 16)] }, normal: { type: h.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: e, normalY: t }) => [Q(e, 16), Q(t, 16)] }, halfWidth: { type: h.HALF_FLOAT, count: 1, pack: ({ width: e }) => y(0.5 * e) }, referenceHalfWidth: { type: h.HALF_FLOAT, count: 1, pack: ({ referenceWidth: e }) => y(0.5 * e) } } };
let ms = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0;
  }
};
const vt = 65535;
let qt = class extends B {
  constructor(t, s, i, r) {
    super(t, s, i, r), this.vertexSpec = A, this._currentWrite = new ms(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: vt, textured: !1 }, this._tessParams = new xs(), this._initializeTessellator();
  }
  writeLineVertices(t, s, i) {
    const r = this._getLines(s);
    r != null && this._writeVertices(t, i, r);
  }
  _initializeTessellator() {
    this._lineTessellator = new Ee(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), !0);
  }
  _write(t, s, i) {
    const r = i ?? v.fromFeatureSetReaderCIM(s);
    r && this._writeGeometry(t, s, r);
  }
  _writeGeometry(t, s, i, r) {
    t.recordStart(this.instanceId, this.attributeLayout, r), this.writeLineVertices(t, i, s), t.recordEnd();
  }
  _getLines(t) {
    return Je(t, zt(this.evaluatedMeshParams));
  }
  _writeVertices(t, s, i) {
    const { _currentWrite: r, _tessellationOptions: o, evaluatedMeshParams: n } = this, { width: a, capType: c, joinType: l, miterLimit: u, hasSizeVV: f } = n, p = y(0.5 * a);
    o.halfWidth = p, o.capType = ps(c), o.joinType = fs(l), o.miterLimit = u;
    const d = !f;
    r.out = t, r.id = s.getDisplayId(), r.vertexCount = 0, r.indexCount = 0, r.vertexFrom = t.vertexCount(), r.vertexBounds = d && p < ke ? 0 : 1;
    for (const { line: x, start: m } of i) o.initialDistance = m % vt, this._lineTessellator.tessellate(x, o, d);
  }
  _writeTesselatedVertex(t, s, i, r, o, n, a, c, l, u, f) {
    const { out: p, id: d, vertexBounds: x } = this._currentWrite;
    return this.hasEffects && p.recordBounds(t, s, x, x), this._tessParams.extrusionOffsetX = a, this._tessParams.extrusionOffsetY = c, this._tessParams.normalX = l, this._tessParams.normalY = u, this._tessParams.directionX = o, this._tessParams.directionY = n, this._tessParams.distance = f, this._writeVertex(p, d, t, s, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t, s, i) {
    const { out: r } = this._currentWrite;
    r.indexEnsureSize(3), r.indexWrite(t), r.indexWrite(s), r.indexWrite(i), this._currentWrite.indexCount += 3;
  }
};
const Qt = { createComputedParams: (e) => e, optionalAttributes: A.optionalAttributes, attributes: { ...A.attributes, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: (e) => 0 }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: e }) => g(e) } } }, mt = { createComputedParams: (e) => e, optionalAttributes: A.optionalAttributes, attributes: { ...A.attributes, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: (e) => H([[At, !0]]) }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ outlineColor: e }) => g(e) } } };
let yt = class extends qt {
  constructor() {
    super(...arguments), this.vertexSpec = mt;
  }
}, jt = class extends Xt {
  constructor(t, s, i, r) {
    super(t, s, i, r), this.vertexSpec = Qt, this._lineMeshWriter = this._createOutlineWriter(t, s, i, r);
  }
  _createOutlineWriter(t, s, i, r) {
    return new yt(t, s, i, r);
  }
  _write(t, s, i) {
    const r = i?.asOptimized() ?? s.readGeometryForDisplay(), o = this._clip(r);
    o && (t.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t, s, o), this._lineMeshWriter.writeLineVertices(t, v.fromOptimizedCIM(o, "esriGeometryPolyline"), s), t.recordEnd());
  }
  _clip(t) {
    return t ? Lt(t, zt(this.evaluatedMeshParams)) : null;
  }
  ensurePacked(t, s, i) {
    super.ensurePacked(t, s, i), this._lineMeshWriter.ensurePacked(t, s, i);
  }
  enqueueRequest(t, s, i) {
    super.enqueueRequest(t, s, i), this._lineMeshWriter.enqueueRequest(t, s, i);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const et = Zt, ys = mt, _s = { createComputedParams: (e) => e, optionalAttributes: et.optionalAttributes, attributes: { ...et.attributes, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: (e) => Vt(e) }, aux1: { count: 1, type: h.HALF_FLOAT, pack: (e) => tt(e).width }, aux2: { count: 1, type: h.HALF_FLOAT, pack: (e) => tt(e).height }, aux3: { count: 2, type: h.HALF_FLOAT, pack: ({ offsetX: e, offsetY: t }) => [y(e), y(t)] }, aux4: { count: 2, type: h.UNSIGNED_BYTE, pack: ({ scaleX: e, scaleY: t }) => [e * J, t * J] } } }, gs = { createComputedParams: (e) => e, optionalAttributes: et.optionalAttributes, attributes: { ...et.attributes, color: ys.attributes.color, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: (e) => H([[At, !0]]) }, aux1: { count: 1, type: h.HALF_FLOAT, pack: (e) => y(0.5 * e.width) }, aux2: { count: 1, type: h.HALF_FLOAT, pack: (e) => y(0.5 * e.referenceWidth) }, aux3: { count: 2, type: h.HALF_FLOAT, packTessellation: ({ extrusionOffsetX: e, extrusionOffsetY: t }) => [e, t] }, aux4: { count: 2, type: h.UNSIGNED_BYTE, packTessellation: ({ normalX: e, normalY: t }) => [e * J + St, t * J + St] } } };
class ks extends yt {
  constructor() {
    super(...arguments), this.vertexSpec = gs;
  }
}
let fi = class extends jt {
  constructor() {
    super(...arguments), this.vertexSpec = _s;
  }
  _createOutlineWriter(t, s, i, r) {
    return new ks(t, s, i, r);
  }
  _write(t, s, i) {
    const r = i?.asOptimized() ?? s.readGeometryForDisplay(), o = this._clip(r);
    if (!o) return;
    const n = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, n), this._writeGeometry(t, s, o), this._lineMeshWriter.writeLineVertices(t, v.fromOptimizedCIM(o, "esriGeometryPolyline"), s), t.recordEnd();
  }
  ensurePacked(t, s, i) {
    super.ensurePacked(t, s, i), this._lineMeshWriter.ensurePacked(t, s, i);
  }
  enqueueRequest(t, s, i) {
    super.enqueueRequest(t, s, i), this._lineMeshWriter.enqueueRequest(t, s, i);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const Ps = { optionalAttributes: I.optionalAttributes, createComputedParams: (e) => e, attributes: { ...I.attributes, ...Qt.attributes } }, Ss = { optionalAttributes: I.optionalAttributes, createComputedParams: (e) => e, attributes: { ...I.attributes, ...mt.attributes } };
class ws extends yt {
  constructor() {
    super(...arguments), this.vertexSpec = Ss;
  }
}
class xi extends jt {
  constructor() {
    super(...arguments), this.vertexSpec = Ps;
  }
  _createOutlineWriter(t, s, i, r) {
    return new ws(t, s, i, r);
  }
  _write(t, s, i) {
    const r = i?.asOptimized() ?? s.readGeometryForDisplay(), o = this._clip(r);
    if (!o) return;
    const n = this.evaluatedMeshParams.sprite?.textureBinding;
    t.recordStart(this.instanceId, this.attributeLayout, n), this._writeGeometry(t, s, o), this._lineMeshWriter.writeLineVertices(t, v.fromOptimizedCIM(o, "esriGeometryPolyline"), s), t.recordEnd();
  }
  ensurePacked(t, s, i) {
    super.ensurePacked(t, s, i), this._lineMeshWriter.ensurePacked(t, s, i);
  }
  enqueueRequest(t, s, i) {
    super.enqueueRequest(t, s, i), this._lineMeshWriter.enqueueRequest(t, s, i);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
}
const bs = { createComputedParams: (e) => e, optionalAttributes: {}, attributes: { pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1 }, offset: { type: h.BYTE, count: 2, packAlternating: { count: 4, pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]] } } } };
class mi extends B {
  constructor() {
    super(...arguments), this.vertexSpec = bs;
  }
  _write(t, s) {
    t.recordStart(this.instanceId, this.attributeLayout);
    const i = s.getDisplayId();
    if (s.geometryType === "esriGeometryPoint") {
      const r = s.readXForDisplay(), o = s.readYForDisplay();
      this._writeQuad(t, i, r, o);
    } else s.geometryType === "esriGeometryMultipoint" && s.readGeometryForDisplay()?.forEachVertex((o, n) => {
      o >= 0 && o <= 512 && n >= 0 && n <= 512 && this._writeQuad(t, i, o, n);
    });
    t.recordEnd();
  }
  _writeQuad(t, s, i, r) {
    const o = t.vertexCount();
    this._writeVertex(t, s, i, r), t.indexWrite(o + 0), t.indexWrite(o + 1), t.indexWrite(o + 2), t.indexWrite(o + 1), t.indexWrite(o + 3), t.indexWrite(o + 2);
  }
}
class Jt {
  static getPlacement(t, s, i, r, o, n) {
    const a = he(i);
    return a ? (s === -1 && t.invertY(), a.execute(t, i, r, o, n)) : null;
  }
}
const Tt = 96;
let vs = class {
  constructor(t) {
    const { offsetX: s, offsetY: i, postAngle: r, fontSize: o, scaleFactor: n, transforms: a } = t;
    if (this.offsetX = s, this.offsetY = i, this.postAngle = r, this.fontSize = Math.min(o, Tt), this.transforms = a, a && a.infos.length > 1) {
      const c = $t(o, r, !1, s, i, a);
      this.fontSize = Math.min(c.size, Tt), this.postAngle = c.rotation, this.offsetX = c.offsetX, this.offsetY = c.offsetY;
    }
    n && (this.fontSize *= n, this.offsetX *= n, this.offsetY *= n);
  }
};
const Ts = 28, E = [4, 4], j = [16, 4], Es = { topLeft: j, topRight: j, bottomLeft: j, bottomRight: j }, st = [4, 2], S = [4, 6], Et = { topLeft: st, topRight: st, bottomLeft: S, bottomRight: S }, Mt = { topLeft: st, topRight: S, bottomLeft: st, bottomRight: S }, Ms = { topLeft: S, topRight: S, bottomLeft: E, bottomRight: E }, $s = { topLeft: E, topRight: E, bottomLeft: S, bottomRight: S }, Is = { topLeft: S, topRight: E, bottomLeft: S, bottomRight: E }, As = { topLeft: E, topRight: S, bottomLeft: E, bottomRight: S }, Ns = { createComputedParams: (e) => e, optionalAttributes: { zoomRange: { type: h.UNSIGNED_SHORT, count: 2, packPrecisionFactor: it, packTessellation: ({ minZoom: e, maxZoom: t }) => [e || 0, t || Ts] }, clipAngle: { type: h.UNSIGNED_BYTE, count: 1, packTessellation: ({ clipAngle: e }) => Ds(e || 0) }, referenceSymbol: { type: h.BYTE, count: 4, packPrecisionFactor: 1, packTessellation: (e, t) => {
  if (!e.referenceBounds) return [0, 0, 0, 0];
  const s = pe(t.horizontalAlignment), i = fe(t.verticalAlignment), { offsetX: r, offsetY: o, size: n } = e.referenceBounds;
  return [y(r), -y(o), y(n), s + 1 << 2 | i + 1];
} } }, attributes: { pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1, packTessellation: ({ isBackground: e, mapAligned: t }) => H([[de, e], [xe, !!t]]) }, offset: { type: h.SHORT, count: 2, packPrecisionFactor: 8, packAlternating: { count: 4, packTessellation: ({ offsets: e }) => {
  const { bottomLeft: t, bottomRight: s, topLeft: i, topRight: r } = e;
  return [i, r, t, s];
} } }, textureUV: { type: h.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, packTessellation: ({ texcoords: e }) => {
  const { bottomLeft: t, bottomRight: s, topLeft: i, topRight: r } = e;
  return [i, r, t, s];
} } }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, packTessellation: ({ color: e }) => e }, fontSize: { type: h.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: e }) => y(e) }, referenceSize: { type: h.UNSIGNED_BYTE, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: e }, { referenceSize: t }) => y(t ?? e) }, haloColor: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ haloColor: e }) => g(e) }, haloFontSize: { type: h.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, pack: ({ haloFontSize: e }) => y(e) } } };
class _i extends B {
  constructor() {
    super(...arguments), this.vertexSpec = Ns, this._textMeshParamsPropsInitialized = !1;
  }
  ensurePacked(t, s, i) {
    super.ensurePacked(t, s, i), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new vs(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = !0);
  }
  _write(t, s, i) {
    const r = this._getShaping();
    if (!r) return;
    const o = s.getDisplayId();
    if (this.evaluatedMeshParams.placement != null) return this._writePlacedTextMarkers(t, s, r, i);
    if (i?.nextPath()) return i.nextPoint(), this._writeGlyphs(t, o, i.x, i.y, r, 0);
    if (s.geometryType === "esriGeometryPolygon") {
      const c = s.readCentroidForDisplay();
      if (!c) return;
      const [l, u] = c.coords;
      return this._writeGlyphs(t, o, l, u, r, 0);
    }
    if (s.geometryType === "esriGeometryMultipoint")
      return void s.readGeometryForDisplay()?.forEachVertex((l, u) => this._writeGlyphs(t, o, l, u, r, 0));
    const n = s.readXForDisplay(), a = s.readYForDisplay();
    return this._writeGlyphs(t, o, n, a, r, 0);
  }
  _writePlacedTextMarkers(t, s, i, r) {
    const o = r ?? v.fromFeatureSetReaderCIM(s);
    if (!o) return;
    const n = -1, a = Jt.getPlacement(o, n, this.evaluatedMeshParams.placement, y(1), t.id, xt());
    if (!a) return;
    const c = s.getDisplayId();
    let l = a.next();
    for (; l != null; ) {
      const u = l.tx, f = -l.ty, p = -l.getAngle();
      this._writeGlyphs(t, c, u, f, i, p), l = a.next();
    }
  }
  _getShaping(t) {
    const s = this._textMeshTransformProps, i = this.evaluatedMeshParams;
    if (!i.glyphs?.glyphs.length) return null;
    const r = Math.round(y(s.fontSize)), o = y(s.offsetX), n = y(s.offsetY), a = _t(y(i.lineWidth), Se, Pe), c = we * _t(i.lineHeightRatio, 0.25, 4);
    return me(i.glyphs, { scale: r / be, angle: s.postAngle, xOffset: o, yOffset: n, horizontalAlignment: i.horizontalAlignment, verticalAlignment: t || i.verticalAlignment, maxLineWidth: a, lineHeight: c, decoration: i.decoration, borderLineSizePx: y(i.boxBorderLineSize), hasBackground: !!i.boxBackgroundColor, useCIMAngleBehavior: i.useCIMAngleBehavior });
  }
  _writeGlyphs(t, s, i, r, o, n, a, c) {
    const l = this.evaluatedMeshParams, u = this._textMeshTransformProps, f = u.fontSize, p = y(u.offsetX), d = y(u.offsetY), [x, m] = U(l.scaleInfo, this.getTileInfo());
    n !== 0 && o.setRotation(n);
    const _ = o.bounds, P = i + _.x + p, w = r + _.y - d, Y = 2 * (l.minPixelBuffer ? l.minPixelBuffer / f : 1), b = Math.max(_.width, _.height) * Y;
    o.textBox && (t.recordStart(this.instanceId, this.attributeLayout, o.glyphs[0].textureBinding), t.recordBounds(P, w, b, b), this._writeTextBox(t, s, i, r, o.textBox, a, c), t.recordEnd());
    for (const T of o.glyphs) {
      t.recordStart(this.instanceId, this.attributeLayout, T.textureBinding), t.recordBounds(P, w, b, b);
      const { texcoords: F, offsets: X } = T;
      this._writeQuad(t, s, i, r, { texcoords: F, offsets: X, fontSize: f, color: g(l.color), isBackground: !1, referenceBounds: a, minZoom: x, maxZoom: m, ...c }), t.recordEnd();
    }
    n !== 0 && o.setRotation(-n);
  }
  _writeTextBox(t, s, i, r, o, n, a) {
    const c = this.evaluatedMeshParams, { fontSize: l } = this._textMeshTransformProps, { boxBackgroundColor: u, boxBorderLineColor: f } = c, p = { isBackground: !0, fontSize: l, referenceBounds: n, ...a };
    u && (this._writeQuad(t, s, i, r, { texcoords: Es, offsets: o.main, color: g(u), ...p }), f || (this._writeQuad(t, s, i, r, { texcoords: Ms, offsets: o.top, color: g(u), ...p }), this._writeQuad(t, s, i, r, { texcoords: $s, offsets: o.bot, color: g(u), ...p }), this._writeQuad(t, s, i, r, { texcoords: Is, offsets: o.left, color: g(u), ...p }), this._writeQuad(t, s, i, r, { texcoords: As, offsets: o.right, color: g(u), ...p }))), f && (this._writeQuad(t, s, i, r, { texcoords: Et, offsets: o.top, color: g(f), ...p }), this._writeQuad(t, s, i, r, { texcoords: Et, offsets: o.bot, color: g(f), ...p }), this._writeQuad(t, s, i, r, { texcoords: Mt, offsets: o.left, color: g(f), ...p }), this._writeQuad(t, s, i, r, { texcoords: Mt, offsets: o.right, color: g(f), ...p }));
  }
  _writeQuad(t, s, i, r, o) {
    const n = t.vertexCount();
    this._writeVertex(t, s, i, r, o), t.indexWrite(n + 0), t.indexWrite(n + 1), t.indexWrite(n + 2), t.indexWrite(n + 1), t.indexWrite(n + 3), t.indexWrite(n + 2);
  }
}
const Ds = (e) => Math.round(e * (254 / 360)), zs = { createComputedParams: (e) => e, optionalAttributes: A.optionalAttributes, attributes: { ...A.attributes, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: ({ shouldSampleAlphaOnly: e, shouldScaleDash: t, isSDF: s }) => H([[It, e], [ye, t], [_e, s]]) }, tlbr: { type: h.UNSIGNED_SHORT, count: 4, pack: ({ sprite: e }) => {
  const { rect: t, width: s, height: i } = e, r = t.x + D, o = t.y + D;
  return [r, o, r + s, o + i];
} }, accumulatedDistance: { type: h.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: e }) => e }, segmentDirection: { type: h.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: e, directionY: t }) => [e, t] } } };
class gi extends qt {
  constructor(t, s, i, r) {
    super(t, s, i, r), this.vertexSpec = zs, this._tessellationOptions.textured = !0;
  }
  _write(t, s, i) {
    const r = i ?? v.fromFeatureSetReaderCIM(s);
    if (!r) return;
    const { sprite: o } = this.evaluatedMeshParams;
    this._writeGeometry(t, s, r, o?.textureBinding);
  }
}
let Bs = class dt {
  static from(t) {
    return "width" in t ? this.fromSimpleMeshParams(t) : this.fromComplexMeshParams(t);
  }
  static fromSimpleMeshParams(t) {
    const s = new dt(t.sprite, t.color, t.outlineColor, t.minPixelBuffer, t.placement, t.scaleInfo, t.effects), { type: i, width: r, height: o, angle: n, alignment: a, outlineSize: c, referenceSize: l, sprite: u, overrideOutlineColor: f } = t;
    s.rawWidth = y(r), s.rawHeight = y(o), s.angle = n, s.alignment = a, s.outlineSize = y(c), s.referenceSize = y(l), s.overrideOutlineColor = f, s.offsetX = y(t.offsetX), s.offsetY = y(t.offsetY), i !== "simple" || u.sdf || (s.rawWidth = u.width, s.rawHeight = u.height);
    const p = 2;
    return s.sizeRatio = u.sdf ? p : 1, s._computeSize(t, !1), s;
  }
  static fromComplexMeshParams(t) {
    const s = new dt(t.sprite, t.color, t.outlineColor, t.minPixelBuffer, t.placement, t.scaleInfo, t.effects);
    let { alignment: i, transforms: r, size: o, scaleX: n, anchorX: a, anchorY: c, angle: l, colorLocked: u, frameHeight: f, widthRatio: p, offsetX: d, offsetY: x, outlineSize: m, referenceSize: _, scaleFactor: P, sizeRatio: w, isAbsoluteAnchorPoint: Y, rotateClockwise: b, scaleSymbolsProportionally: T, sprite: F } = t;
    if (r && r.infos.length > 0) {
      const V = $t(o, l, b, d, x, r);
      o = V.size, l = V.rotation, d = V.offsetX, x = V.offsetY, b = !1;
    }
    P && (o *= P, d *= P, x *= P);
    const X = n * (F.width / F.height);
    s.alignment = i, s.rawHeight = y(o), s.rawWidth = s.rawHeight * X, s.referenceSize = y(_), s.sizeRatio = w, s.angle = l, s.rotateClockwise = b, s.anchorX = a, s.anchorY = c, s.offsetX = y(d), s.offsetY = y(x), Y && o && (F.sdf ? s.anchorX = a / (o * p) : s.anchorX = a / (o * X), s.anchorY = c / o);
    const Kt = T && f ? o / f : 1;
    return s.outlineSize = m === 0 || isNaN(m) ? 0 : y(m) * Kt, s.scaleSymbolsProportionally = T, s.colorLocked = u, s._computeSize(t, !0), s;
  }
  constructor(t, s, i, r, o, n, a) {
    this.sprite = t, this.color = s, this.outlineColor = i, this.minPixelBuffer = r, this.placement = o, this.scaleInfo = n, this.effects = a, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.alignment = Bt.SCREEN, this.scaleSymbolsProportionally = !1, this.overrideOutlineColor = !1, this.colorLocked = !1, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = !0;
  }
  get boundsInfo() {
    return { size: Math.max(this.computedHeight, this.computedWidth), offsetX: this.offsetX, offsetY: this.offsetY };
  }
  _computeSize(t, s) {
    const { sprite: i, hasSizeVV: r } = t, o = !!i.sdf, { rawWidth: n, rawHeight: a, sizeRatio: c, outlineSize: l } = this, u = n * c, f = a * c;
    if (o && !r) {
      const Y = s && n > a ? u : n, b = a, T = l + 2 * 1;
      this.computedWidth = Math.min(Y + T, u), this.computedHeight = Math.min(b + T, f);
    } else this.computedWidth = u, this.computedHeight = f;
    const p = o ? Math.max(i.width, i.height) / Math.max(u, f) : 1, d = 0.5 * (u - this.computedWidth) * p, x = 0.5 * (f - this.computedHeight) * p, m = i.rect.x + D + d, _ = i.rect.y + D + x, P = m + i.width - 2 * d, w = _ + i.height - 2 * x;
    this.texXmin = Math.floor(m), this.texYmin = Math.floor(_), this.texXmax = Math.ceil(P), this.texYmax = Math.ceil(w), this.computedWidth *= (this.texXmax - this.texXmin) / (P - m), this.computedHeight *= (this.texYmax - this.texYmin) / (w - _), this.anchorX *= u / this.computedWidth, this.anchorY *= f / this.computedHeight;
  }
};
const Ys = 3.14159265359 / 180, Fs = 128 / Math.PI;
function Rs(e, t) {
  return e %= t, Math.abs(e >= 0 ? e : e + t);
}
function Gs(e) {
  return Rs(e * Fs, 256);
}
function Ls(e, t, s, i, r = !1) {
  const o = ne(), n = r ? 1 : -1;
  return ae(o), (t || s) && ce(o, o, [t, -s]), i && ue(o, o, n * Ys * -i), o;
}
const Cs = { createComputedParams: (e) => Bs.from(e), optionalAttributes: { zoomRange: { type: h.SHORT, count: 2, packPrecisionFactor: it, pack: ({ scaleInfo: e }, { tileInfo: t }) => U(e, t) } }, attributes: { pos: { type: h.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: ({ sprite: e, alignment: t, scaleSymbolsProportionally: s, overrideOutlineColor: i, colorLocked: r }) => {
  let o = 0;
  return e.sdf && (o |= G(R.bitset.isSDF)), t === Bt.MAP && (o |= G(R.bitset.isMapAligned)), s && (o |= G(R.bitset.scaleSymbolsProportionally)), i && (o |= G(R.bitset.overrideOutlineColor)), r && (o |= G(R.bitset.colorLocked)), o;
} }, offset: { type: h.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ angle: e, computedWidth: t, computedHeight: s, anchorX: i, anchorY: r, offsetX: o, offsetY: n, rotateClockwise: a }) => {
  const c = Ls(0, o, n, -e, a), l = -(0.5 + i) * t, u = -(0.5 - r) * s, f = [l, u], p = [l + t, u], d = [l, u + s], x = [l + t, u + s];
  return Z(f, f, c), Z(p, p, c), Z(d, d, c), Z(x, x, c), [f, p, d, x];
} } }, textureUV: { type: h.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ texXmax: e, texXmin: t, texYmax: s, texYmin: i }) => [[t, i], [e, i], [t, s], [e, s]] } }, color: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ color: e }) => g(e) }, outlineColor: { type: h.UNSIGNED_BYTE, count: 4, normalized: !0, pack: ({ outlineColor: e }) => g(e) }, sizing: { type: h.UNSIGNED_BYTE, count: 4, pack: ({ rawWidth: e, rawHeight: t, outlineSize: s, referenceSize: i }) => {
  const r = Math.max(e, t);
  return [ct(r, 128), ct(s, 128), ct(i, 128), 0];
} }, placementAngle: { type: h.UNSIGNED_BYTE, count: 1, packTessellation: ({ placementAngle: e }) => Gs(e) }, sizeRatio: { type: h.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 64, pack: ({ sizeRatio: e }) => e } } };
class ki extends B {
  constructor() {
    super(...arguments), this.vertexSpec = Cs;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(t, s, i) {
    const r = this.evaluatedMeshParams.sprite?.textureBinding, o = s.getDisplayId();
    t.recordStart(this.instanceId, this.attributeLayout, r);
    const n = this.evaluatedMeshParams.minPixelBuffer, a = Math.max(this.evaluatedMeshParams.computedWidth, n), c = Math.max(this.evaluatedMeshParams.computedHeight, n), l = this.evaluatedMeshParams.offsetX, u = -this.evaluatedMeshParams.offsetY;
    if (this.evaluatedMeshParams.placement != null) this._writePlacedMarkers(t, s, i, a, c);
    else if (i?.nextPath()) {
      i.nextPoint();
      const f = i.x, p = i.y;
      t.recordBounds(f + l, p + u, a, c), this._writeQuad(t, o, f, p);
    } else if (s.geometryType === "esriGeometryPolygon") {
      const f = s.readCentroidForDisplay();
      if (!f) return;
      const [p, d] = f.coords;
      t.recordBounds(p + l, d + u, a, c), this._writeQuad(t, o, p, d);
    } else if (s.geometryType === "esriGeometryPoint") {
      const f = s.readXForDisplay(), p = s.readYForDisplay();
      t.recordBounds(f + l, p + u, a, c), this._writeQuad(t, o, f, p);
    } else
      s.readGeometryForDisplay()?.forEachVertex((p, d) => {
        t.recordBounds(p + l, d + u, a, c), Math.abs(p) > q || Math.abs(d) > q || this._writeQuad(t, o, p, d);
      });
    t.recordEnd();
  }
  _writePlacedMarkers(t, s, i, r, o) {
    const n = i ?? v.fromFeatureSetReaderCIM(s)?.clone();
    if (!n) return;
    const a = -1, c = Jt.getPlacement(n, a, this.evaluatedMeshParams.placement, y(1), t.id, xt());
    if (!c) return;
    const l = s.getDisplayId();
    let u = c.next();
    const f = this.evaluatedMeshParams.offsetX, p = -this.evaluatedMeshParams.offsetY;
    for (; u != null; ) {
      const d = u.tx, x = -u.ty;
      if (Math.abs(d) > q || Math.abs(x) > q) {
        u = c.next();
        continue;
      }
      const m = -u.getAngle();
      t.recordBounds(d + f, x + p, r, o), this._writeQuad(t, l, d, x, m), u = c.next();
    }
  }
  _writeQuad(t, s, i, r, o) {
    const n = t.vertexCount(), a = o == null ? null : { placementAngle: o };
    this._writeVertex(t, s, i, r, a), t.indexWrite(n + 0), t.indexWrite(n + 1), t.indexWrite(n + 2), t.indexWrite(n + 1), t.indexWrite(n + 3), t.indexWrite(n + 2);
  }
}
const Os = { createComputedParams: (e) => e, optionalAttributes: {}, attributes: { pos: { type: h.SHORT, count: 2, packPrecisionFactor: 10, pack: "position" }, id: { type: h.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: h.UNSIGNED_BYTE, count: 1, pack: (e) => 0 }, offset: { type: h.SHORT, count: 2, packPrecisionFactor: 16, packAlternating: { count: 4, pack: ({ size: e }) => {
  const t = y(e), s = -t / 2, i = -t / 2;
  return [[s, i], [s + t, i], [s, i + t], [s + t, i + t]];
} } }, texCoords: { type: h.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]] } }, size: { type: h.UNSIGNED_BYTE, count: 2, pack: ({ size: e }) => [e, e] }, referenceSize: { type: h.UNSIGNED_BYTE, count: 1, pack: ({ size: e }) => y(e) }, zoomRange: { type: h.UNSIGNED_BYTE, count: 2, pack: ({ scaleInfo: e }, { tileInfo: t }) => U(e, t) } } };
class Pi extends B {
  constructor() {
    super(...arguments), this.vertexSpec = Os;
  }
  _write(t, s) {
    const i = s.getDisplayId(), r = this.evaluatedMeshParams.minPixelBuffer, o = Math.max(y(this.evaluatedMeshParams.size), r);
    let n, a;
    if (s.geometryType === "esriGeometryPoint") n = s.readXForDisplay(), a = s.readYForDisplay();
    else {
      const l = s.readCentroidForDisplay();
      if (!l) return;
      n = l?.coords[0], a = l?.coords[1];
    }
    t.recordStart(this.instanceId, this.attributeLayout), t.recordBounds(n, a, o, o);
    const c = t.vertexCount();
    this._writeVertex(t, i, n, a), t.indexWrite(c + 0), t.indexWrite(c + 1), t.indexWrite(c + 2), t.indexWrite(c + 1), t.indexWrite(c + 3), t.indexWrite(c + 2), t.recordEnd();
  }
}
export {
  _i as N,
  Ts as S,
  qt as T,
  fi as _,
  gi as a,
  ni as b,
  xi as c,
  si as d,
  Xt as e,
  g,
  jt as h,
  mi as i,
  ts as l,
  U as m,
  ds as o,
  Pi as s,
  ki as v
};
//# sourceMappingURL=PieChartMeshWriter-C3D4PA7D.js.map
