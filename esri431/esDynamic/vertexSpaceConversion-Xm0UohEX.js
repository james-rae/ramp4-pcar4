import { b$ as J, gg as L, gh as K, gi as Q, gj as W, gk as un, ao as cn, gl as fn, gm as gn, gn as pn, ap as V, eg as S, f$ as mn, go as An, gp as X, gq as U, gr as nn, gs as Tn, fC as yn, aZ as Rn, G as En, dY as Fn, ei as $n, gt as dn } from "./main-DZxT3i7S.js";
import { e as rn } from "./mat3f64-Dh9_zhFu.js";
import { e as v, o as tn } from "./mat4f64-Dn1WEGBx.js";
import { a as en, w as Nn } from "./spatialReferenceEllipsoidUtils-CUWjrXGC.js";
import { C as O } from "./computeTranslationToOriginAndRotation-D64v_Kvj.js";
import { c as I } from "./projectPointToVector-BM3JDlis.js";
import { a as On, m as _n } from "./meshVertexSpaceUtils-f18buSHF.js";
import { f as b, l as on, i as C, e as B } from "./vec3-Bk8n8qxi.js";
import { i as $, T as d } from "./BufferView-5VozJqYL.js";
import { n as wn } from "./vec4-v5ppMnQI.js";
const tr = "Projection may be possible after calling projection.load().";
function y(n, r, t, e) {
  n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${e ? " " : ""}${e}`);
}
function Cn(n, r, t, e, o, l) {
  return G(F.TO_PCPF, $.fromTypedArray(n), E.NORMAL, d.fromTypedArray(r), t, d.fromTypedArray(e), o, $.fromTypedArray(l)) ? l : null;
}
function Pn(n, r, t, e, o, l) {
  return G(F.FROM_PCPF, $.fromTypedArray(n), E.NORMAL, d.fromTypedArray(r), t, d.fromTypedArray(e), o, $.fromTypedArray(l)) ? l : null;
}
function hn(n, r, t, e) {
  return J(n, r, 0, t, e, 0) ? t : null;
}
function xn(n, r, t, e) {
  return J(n, r, 0, t, e, 0) ? t : null;
}
function an(n, r, t) {
  return L(f, t), b(r, n, f), K(f) && on(r, r), r;
}
function ln(n, r, t) {
  return Q(f, t), wn(r, n, f), K(f) && on(r, r, 4), r;
}
function Sn(n, r, t, e, o, l) {
  if (!G(F.TO_PCPF, $.fromTypedArray(n, 4 * Float32Array.BYTES_PER_ELEMENT), E.TANGENT, d.fromTypedArray(r), t, d.fromTypedArray(e), o, $.fromTypedArray(l, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let a = 3; a < n.length; a += 4) l[a] = n[a];
  return l;
}
function vn(n, r, t, e, o, l) {
  if (!G(F.FROM_PCPF, $.fromTypedArray(n, 16), E.TANGENT, d.fromTypedArray(r), t, d.fromTypedArray(e), o, $.fromTypedArray(l, 16))) return null;
  for (let a = 3; a < n.length; a += 4) l[a] = n[a];
  return l;
}
var E, F;
function Z(n, r, t, e, o) {
  switch (O(e, t, _, e), n === F.FROM_PCPF && S(_, _), r) {
    case E.NORMAL:
      return L(o, _);
    case E.TANGENT:
      return Q(o, _);
  }
}
function G(n, r, t, e, o, l, a, i) {
  if (!r) return;
  const c = e.count;
  if (Gn(o)) for (let s = 0; s < c; s++) l.getVec(s, x), r.getVec(s, T), W(T, T, Z(n, t, x, a, f)), i.setVec(s, T);
  else for (let s = 0; s < c; s++) {
    l.getVec(s, x), r.getVec(s, T);
    const g = un(e.get(s, 1));
    let u = Math.cos(g);
    t === E.TANGENT != (n === F.TO_PCPF) && (u = 1 / u), Z(n, t, x, a, f), n === F.TO_PCPF ? (f[0] *= u, f[1] *= u, f[2] *= u, f[3] *= u, f[4] *= u, f[5] *= u) : (f[0] *= u, f[3] *= u, f[6] *= u, f[1] *= u, f[4] *= u, f[7] *= u), W(T, T, f), cn(T, T), i.setVec(s, T);
  }
  return i;
}
function Gn(n) {
  return n.isWGS84 || fn(n) || gn(n) || pn(n);
}
(function(n) {
  n[n.NORMAL = 0] = "NORMAL", n[n.TANGENT = 1] = "TANGENT";
})(E || (E = {})), function(n) {
  n[n.TO_PCPF = 0] = "TO_PCPF", n[n.FROM_PCPF = 1] = "FROM_PCPF";
}(F || (F = {}));
const x = V(), T = V(), _ = v(), f = rn(), m = () => En.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function er(n, r, { vertexSpace: t, spatialReference: e }) {
  if (t.type === "georeferenced") {
    const s = n;
    if (!I(r, s, e)) return !1;
    const { origin: g } = t;
    return Fn(n, s, g), !0;
  }
  const o = en(e), l = n;
  if (!I(r, l, o)) return !1;
  const { origin: a } = t, i = H;
  if (!O(e, a, i, o)) return !1;
  const c = S(H, i);
  return c != null && ($n(n, l, c), !0);
}
function or(n, r, t) {
  const { vertexSpace: e, transform: o, vertexAttributes: l } = n, a = On(e) ? o : null, i = M(n.spatialReference, t, R.SOURCE_AND_TARGET);
  if (_n(e, r) && (!a || mn(a.localMatrix, tn)) && P(i)) {
    const { position: c, normal: s, tangent: g } = l, u = t?.allowBufferReuse;
    return { position: u ? c : c.slice(), normal: u ? s : s?.slice(), tangent: u ? g : g?.slice() };
  }
  switch (n.vertexSpace.type) {
    case "local":
      return r.type === "local" ? bn(n, n.vertexSpace, r.origin, t) : Un(n, n.vertexSpace, r.origin, t);
    case "georeferenced":
      return r.type === "local" ? Ln(n, n.vertexSpace, r.origin, t) : Mn(n, n.vertexSpace, r.origin, t);
  }
}
function Mn({ vertexAttributes: n, transform: r, spatialReference: t }, { origin: e }, o, l) {
  const a = M(t, l, R.SOURCE_AND_TARGET), i = e || !P(a) ? An(p, r?.localMatrix ?? tn) : null;
  i && j(i, t, l, R.SOURCE_AND_TARGET);
  const { position: c, normal: s, tangent: g } = i ? k(n, i) : n, u = l?.allowBufferReuse, N = u ? c : new Float64Array(c.length);
  let A = c;
  if (e && (A = C(N, A, e)), o) {
    const h = X(sn, o);
    A = C(N, A, h);
  }
  return { position: A !== n.position || u ? A : A.slice(), normal: s !== n.normal || u ? s : s?.slice(), tangent: g !== n.tangent || u ? g : g?.slice() };
}
function D(n, r) {
  return r?.useEllipsoid && dn(n) ? Nn : en(n);
}
function Un({ spatialReference: n, vertexAttributes: r, transform: t }, { origin: e }, o, l) {
  const a = D(n, l);
  if (!O(n, e, p, a)) return y(m(), n, a), null;
  t && U(p, p, t.localMatrix), j(p, n, l, R.SOURCE);
  const i = new Float64Array(r.position.length), c = Bn(r.position, p, n, i, a);
  if (!c) return null;
  const s = Dn(c, n, i, a, r.normal, p);
  if (r.normal && !s) return null;
  const g = kn(c, n, i, a, r.tangent, p);
  if (r.tangent && !g) return null;
  if (o) {
    const u = X(sn, o);
    C(c, c, u);
  }
  return { position: c, normal: s, tangent: g };
}
function Ln({ vertexAttributes: n, spatialReference: r, transform: t }, { origin: e }, o, l) {
  const a = D(r, l);
  if (!O(r, o, p, a)) return y(m(), r, a), null;
  const i = 1 / M(r, l, R.TARGET);
  nn(p, p, [i, i, i]);
  const c = S(w, p), { position: s, normal: g, tangent: u } = Vn(n, e, t), N = new Float64Array(s.length), A = jn(s, r, c, N, a);
  if (!A) return null;
  const h = L(Wn, c), Y = Yn(g, s, r, N, a, h, g !== n.normal ? g : void 0);
  if (!Y && g) return null;
  const q = qn(u, s, r, N, a, h, u !== n.tangent ? u : void 0);
  return !q && u ? null : { position: A, normal: Y, tangent: q };
}
function Vn(n, r, t) {
  if (!r) return n;
  if (!t) {
    const { position: o, normal: l, tangent: a } = n;
    return { position: C(new Float64Array(o.length), o, r), tangent: a, normal: l };
  }
  const e = k(n, t.localMatrix);
  return C(e.position, e.position, r), e;
}
function bn({ vertexAttributes: n, spatialReference: r, transform: t }, { origin: e }, o, l) {
  const a = D(r, l);
  if (!O(r, e, p, a)) return y(m(), r, a), null;
  if (t && U(p, p, t.localMatrix), !O(r, o, w, a)) return y(m(), a, r), null;
  S(w, w);
  const i = U(p, w, p);
  return j(i, r, l, R.SOURCE_AND_TARGET), k(n, i);
}
function k(n, r) {
  const t = new Float64Array(n.position.length);
  B(t, n.position, r);
  const e = n.normal ? new Float32Array(n.normal.length) : null, o = n.tangent ? new Float32Array(n.tangent.length) : null;
  return e && n.normal && an(n.normal, e, r), o && n.tangent && ln(n.tangent, o, r), { position: t, normal: e, tangent: o };
}
function Bn(n, r, t, e, o) {
  B(e, n, r);
  const l = new Float64Array(n.length);
  return xn(e, o, l, t) ? l : (y(m(), o, t), null);
}
function Dn(n, r, t, e, o, l) {
  if (o == null) return null;
  const a = new Float32Array(o.length);
  return an(o, a, l), Pn(a, n, r, t, e, a) ? a : (y(m(), e, r), null);
}
function kn(n, r, t, e, o, l) {
  if (o == null) return null;
  const a = new Float32Array(o.length);
  return ln(o, a, l), vn(a, n, r, t, e, a) ? a : (y(m(), e, r), null);
}
function j(n, r, t, e) {
  const o = M(r, t, e);
  P(o) || nn(n, n, [o, o, o]);
}
function M(n, r, t) {
  const e = !!(t & R.SOURCE), o = !!(t & R.TARGET), l = r?.sourceUnit, a = r?.targetUnit;
  if (!l && !a) return 1;
  let i = z(l, n);
  e || !l || P(i) || (m().warn("source unit conversion not supported"), i = 1);
  let c = 1 / z(a, n);
  return o || !a || P(c) || (m().warn("target unit conversion not supported"), c = 1), i * c;
}
function P(n) {
  return Tn(n, 1);
}
function jn(n, r, t, e, o) {
  const l = hn(n, r, e, o);
  if (!l) return y(m(), r, o), null;
  const a = new Float64Array(l.length);
  return B(a, l, t), a;
}
function Yn(n, r, t, e, o, l, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return Cn(n, r, t, e, o, i) ? (b(i, i, l), i) : (y(m(), t, o), null);
}
function qn(n, r, t, e, o, l, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return Sn(n, r, t, e, o, i) ? (b(i, i, l, 4), i) : (y(m(), t, o), null);
}
function z(n, r) {
  if (n == null) return 1;
  const t = yn(r);
  return 1 / Rn(t, "meters", n);
}
const p = v(), w = v(), Wn = rn(), sn = V(), H = v();
var R;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.SOURCE = 1] = "SOURCE", n[n.TARGET = 2] = "TARGET", n[n.SOURCE_AND_TARGET = 3] = "SOURCE_AND_TARGET";
})(R || (R = {}));
export {
  or as B,
  Cn as E,
  y as F,
  vn as G,
  tr as O,
  Pn as R,
  hn as g,
  xn as h,
  er as k,
  z as n,
  Sn as w
};
//# sourceMappingURL=vertexSpaceConversion-Xm0UohEX.js.map
