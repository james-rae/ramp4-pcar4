import { lG as D, dx as G, lH as M, lI as J, lJ as Z, lK as H, lr as F, lq as K, lL as W, lM as L, bd as w, lN as q, aS as E, lO as k, lP as z, s as $, dR as O, dD as B, cd as Q } from "./main-DZxT3i7S.js";
const C = new G(), X = new G(), A = new G(), b = { esriGeometryPoint: M, esriGeometryPolyline: J, esriGeometryPolygon: Z, esriGeometryMultipoint: H };
function Re(e, t, n, s = e.hasZ, i = e.hasM) {
  if (t == null) return null;
  const r = e.hasZ && s, l = e.hasM && i;
  if (n) {
    const o = F(A, t, e.hasZ, e.hasM, "esriGeometryPoint", n, s, i);
    return M(o, r, l);
  }
  return M(t, r, l);
}
function P(e, t, n, s, i, r, l = t, o = n) {
  const u = t && l, a = n && o, f = s != null ? "coords" in s ? s : s.geometry : null;
  if (f == null) return null;
  if (i) {
    let c = K(X, f, t, n, e, i, l, o);
    return r && (c = F(A, c, u, a, e, r)), b[e]?.(c, u, a) ?? null;
  }
  if (r) {
    const c = F(A, f, t, n, e, r, l, o);
    return b[e]?.(c, u, a) ?? null;
  }
  return D(C, f, t, n, l, o), b[e]?.(C, u, a) ?? null;
}
function Se(e) {
  return e && x in e ? JSON.parse(JSON.stringify(e, ee)) : e;
}
const x = "_geVersion", ee = (e, t) => e !== x ? t : void 0;
function V(e, t) {
  return e ? t ? 4 : 3 : t ? 3 : 2;
}
function Ge(e, t, n, s) {
  if (!t?.lengths.length) return null;
  e.lengths.length && (e.lengths.length = 0), e.coords.length && (e.coords.length = 0);
  const i = e.coords, r = [], l = n ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: o, coords: u } = t, a = V(n, s);
  let f = 0;
  for (const c of o) {
    const p = te(l, u, f, c, n, s);
    p && r.push(p), f += c * a;
  }
  if (r.sort((c, p) => {
    let I = c[2] - p[2];
    return I === 0 && n && (I = c[4] - p[4]), I;
  }), r.length) {
    let c = 6 * r[0][2];
    i[0] = r[0][0] / c, i[1] = r[0][1] / c, n && (c = 6 * r[0][4], i[2] = c !== 0 ? r[0][3] / c : 0), (i[0] < l[0] || i[0] > l[1] || i[1] < l[2] || i[1] > l[3] || n && (i[2] < l[4] || i[2] > l[5])) && (i.length = 0);
  }
  if (!i.length) {
    const c = t.lengths[0] ? re(u, 0, o[0], n, s) : null;
    if (!c) return null;
    i[0] = c[0], i[1] = c[1], n && c.length > 2 && (i[2] = c[2]);
  }
  return e;
}
function te(e, t, n, s, i, r) {
  const l = V(i, r);
  let o = n, u = n + l, a = 0, f = 0, c = 0, p = 0, I = 0;
  for (let R = 0, T = s - 1; R < T; R++, o += l, u += l) {
    const N = t[o], h = t[o + 1], g = t[o + 2], y = t[u], d = t[u + 1], Y = t[u + 2];
    let S = N * d - y * h;
    p += S, a += (N + y) * S, f += (h + d) * S, i && (S = N * Y - y * g, c += (g + Y) * S, I += S), N < e[0] && (e[0] = N), N > e[1] && (e[1] = N), h < e[2] && (e[2] = h), h > e[3] && (e[3] = h), i && (g < e[4] && (e[4] = g), g > e[5] && (e[5] = g));
  }
  if (p > 0 && (p *= -1), I > 0 && (I *= -1), !p) return null;
  const m = [a, f, 0.5 * p];
  return i && (m[3] = c, m[4] = 0.5 * I), m;
}
function re(e, t, n, s, i) {
  const r = V(s, i);
  let l = t, o = t + r, u = 0, a = 0, f = 0, c = 0;
  for (let p = 0, I = n - 1; p < I; p++, l += r, o += r) {
    const m = e[l], R = e[l + 1], T = e[l + 2], N = e[o], h = e[o + 1], g = e[o + 2], y = s ? ie(m, R, T, N, h, g) : ne(m, R, N, h);
    if (y) if (u += y, s) {
      const d = le(m, R, T, N, h, g);
      a += y * d[0], f += y * d[1], c += y * d[2];
    } else {
      const d = se(m, R, N, h);
      a += y * d[0], f += y * d[1];
    }
  }
  return u > 0 ? s ? [a / u, f / u, c / u] : [a / u, f / u] : n > 0 ? s ? [e[t], e[t + 1], e[t + 2]] : [e[t], e[t + 1]] : null;
}
function ne(e, t, n, s) {
  const i = n - e, r = s - t;
  return Math.sqrt(i * i + r * r);
}
function ie(e, t, n, s, i, r) {
  const l = s - e, o = i - t, u = r - n;
  return Math.sqrt(l * l + o * o + u * u);
}
function se(e, t, n, s) {
  return [e + 0.5 * (n - e), t + 0.5 * (s - t)];
}
function le(e, t, n, s, i, r) {
  return [e + 0.5 * (s - e), t + 0.5 * (i - t), n + 0.5 * (r - n)];
}
function oe(e) {
  return e === "mesh" ? W : L(e);
}
function j(e, t) {
  return e ? t ? 4 : 3 : t ? 3 : 2;
}
function ue(e, t, n, s) {
  return U(e, t, n, s.coords[0], s.coords[1]);
}
function ae(e, t, n, s, i, r) {
  const l = j(i, r), { coords: o, lengths: u } = s;
  if (!u) return !1;
  for (let a = 0, f = 0; a < u.length; a++, f += l) if (!U(e, t, n, o[f], o[f + 1])) return !1;
  return !0;
}
function U(e, t, n, s, i) {
  if (!e) return !1;
  const r = j(t, n), { coords: l, lengths: o } = e;
  let u = !1, a = 0;
  for (const f of o) u = ce(u, l, r, a, f, s, i), a += f * r;
  return u;
}
function ce(e, t, n, s, i, r, l) {
  let o = e, u = s;
  for (let a = s, f = s + i * n; a < f; a += n) {
    u = a + n, u === f && (u = s);
    const c = t[a], p = t[a + 1], I = t[u], m = t[u + 1];
    (p < l && m >= l || m < l && p >= l) && c + (l - p) / (m - p) * (I - c) < r && (o = !o);
  }
  return o;
}
const v = "unsupported-query", fe = { esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "intersects", esriSpatialRelIndexIntersects: null, esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: null }, _ = { spatialRelationship: { esriSpatialRelIntersects: !0, esriSpatialRelContains: !0, esriSpatialRelWithin: !0, esriSpatialRelCrosses: !0, esriSpatialRelDisjoint: !0, esriSpatialRelTouches: !0, esriSpatialRelOverlaps: !0, esriSpatialRelEnvelopeIntersects: !0, esriSpatialRelIndexIntersects: !1, esriSpatialRelRelation: !1 }, queryGeometry: { esriGeometryPoint: !0, esriGeometryMultiPatch: !1, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !0 }, layerGeometry: { esriGeometryPoint: !0, esriGeometryMultiPatch: !0, esriGeometryMultipoint: !0, esriGeometryPolyline: !0, esriGeometryPolygon: !0, esriGeometryEnvelope: !1 } };
function pe(e) {
  return e != null && _.spatialRelationship[e] === !0;
}
function Ie(e) {
  return e != null && _.queryGeometry[Q(e)] === !0;
}
function me(e) {
  return e != null && _.layerGeometry[e] === !0;
}
function Ne() {
  return import("./geometryEngineJSON-CDiQO0Dv.js").then((e) => e.g);
}
function Te(e, t, n, s, i) {
  if (w(t) && n === "esriGeometryPoint" && (e === "esriSpatialRelIntersects" || e === "esriSpatialRelContains")) {
    const r = q(new G(), t, !1, !1);
    return Promise.resolve((l) => ue(r, !1, !1, l));
  }
  if (w(t) && n === "esriGeometryMultipoint") {
    const r = q(new G(), t, !1, !1);
    if (e === "esriSpatialRelContains") return Promise.resolve((l) => ae(r, !1, !1, l, s, i));
  }
  if (E(t) && n === "esriGeometryPoint" && (e === "esriSpatialRelIntersects" || e === "esriSpatialRelContains")) return Promise.resolve((r) => k(t, P(n, s, i, r)));
  if (E(t) && n === "esriGeometryMultipoint" && e === "esriSpatialRelContains") return Promise.resolve((r) => z(t, P(n, s, i, r)));
  if (E(t) && e === "esriSpatialRelIntersects") {
    const r = oe(n);
    return Promise.resolve((l) => r(t, P(n, s, i, l)));
  }
  return Ne().then((r) => {
    const l = r[fe[e]].bind(null, t.spatialReference, t);
    return (o) => l(P(n, s, i, o));
  });
}
async function Pe(e, t, n) {
  const { spatialRel: s, geometry: i } = e;
  if (i) {
    if (!pe(s)) throw new $(v, "Unsupported query spatial relationship", { query: e });
    if (O(i.spatialReference) && O(n)) {
      if (!Ie(i)) throw new $(v, "Unsupported query geometry type", { query: e });
      if (!me(t)) throw new $(v, "Unsupported layer geometry type", { query: e });
      if (e.outSR) return B(e.geometry?.spatialReference, e.outSR);
    }
  }
}
function Ee(e) {
  if (E(e)) return !0;
  if (w(e)) {
    for (const t of e.rings)
      if (t.length !== 5 || t[0][0] !== t[1][0] || t[0][0] !== t[4][0] || t[2][0] !== t[3][0] || t[0][1] !== t[3][1] || t[0][1] !== t[4][1] || t[1][1] !== t[2][1]) return !1;
    return !0;
  }
  return !1;
}
async function $e(e, t) {
  if (!e) return null;
  const n = t.featureAdapter, { startTimeField: s, endTimeField: i } = e;
  let r = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY;
  if (s && i) await t.forEach((o) => {
    const u = n.getAttribute(o, s), a = n.getAttribute(o, i);
    u == null || isNaN(u) || (r = Math.min(r, u)), a == null || isNaN(a) || (l = Math.max(l, a));
  });
  else {
    const o = s || i;
    await t.forEach((u) => {
      const a = n.getAttribute(u, o);
      a == null || isNaN(a) || (r = Math.min(r, a), l = Math.max(l, a));
    });
  }
  return { start: r, end: l };
}
function be(e, t, n) {
  if (!t || !e) return null;
  const { startTimeField: s, endTimeField: i } = e;
  if (!s && !i) return null;
  const { start: r, end: l } = t;
  if (r === null && l === null) return null;
  if (r === void 0 && l === void 0) return ge();
  const o = n.getAttributeAsTimestamp?.bind(n) ?? n.getAttribute.bind(n);
  return s && i ? he(o, s, i, r, l) : ye(o, s || i, r, l);
}
function he(e, t, n, s, i) {
  return s != null && i != null ? (r) => {
    const l = e(r, t), o = e(r, n);
    return (l == null || l <= i) && (o == null || o >= s);
  } : s != null ? (r) => {
    const l = e(r, n);
    return l == null || l >= s;
  } : i != null ? (r) => {
    const l = e(r, t);
    return l == null || l <= i;
  } : void 0;
}
function ye(e, t, n, s) {
  return n != null && s != null && n === s ? (i) => e(i, t) === n : n != null && s != null ? (i) => {
    const r = e(i, t);
    return r != null && r >= n && r <= s;
  } : n != null ? (i) => {
    const r = e(i, t);
    return r != null && r >= n;
  } : s != null ? (i) => {
    const r = e(i, t);
    return r != null && r <= s;
  } : void 0;
}
function ge() {
  return () => !1;
}
export {
  Ee as I,
  Te as P,
  P as a,
  $e as b,
  Se as h,
  Ge as n,
  be as t,
  Pe as v,
  Re as y
};
//# sourceMappingURL=timeSupport-CfffRxwA.js.map
