import { o as G } from "./floatRGBA-dYp-2nX9.js";
import { aK as K } from "./main-DHXLMse1.js";
import { t as U } from "./UpdateTracking2D-DZd6CIsL.js";
import { D as j, t as q } from "./definitions-Doe0g1C2.js";
function $(n) {
  switch (n.type) {
    case "CIMPointSymbol": {
      const t = n.symbolLayers;
      if (!t || t.length !== 1) return null;
      const r = t[0];
      return r.type !== "CIMVectorMarker" ? null : $(r);
    }
    case "CIMVectorMarker": {
      const t = n.markerGraphics;
      if (!t || t.length !== 1) return null;
      const r = t[0];
      if (!r) return null;
      const o = r.geometry;
      if (!o) return null;
      const s = r.symbol;
      return !s || s.type !== "CIMPolygonSymbol" && s.type !== "CIMLineSymbol" || s.symbolLayers?.some((l) => !!l.effects) ? null : { type: "sdf", geom: o, asFill: s.type === "CIMPolygonSymbol" };
    }
  }
}
function z(n) {
  return n ? n.rings ? n.rings : n.paths ? n.paths : n.xmin !== void 0 && n.ymin !== void 0 && n.xmax !== void 0 && n.ymax !== void 0 ? [[[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]] : null : null;
}
function B(n) {
  let t = 1 / 0, r = -1 / 0, o = 1 / 0, s = -1 / 0;
  for (const l of n) for (const e of l) e[0] < t && (t = e[0]), e[0] > r && (r = e[0]), e[1] < o && (o = e[1]), e[1] > s && (s = e[1]);
  return new U(t, o, r - t, s - o);
}
function V(n) {
  let t = 1 / 0, r = -1 / 0, o = 1 / 0, s = -1 / 0;
  for (const l of n) for (const e of l) e[0] < t && (t = e[0]), e[0] > r && (r = e[0]), e[1] < o && (o = e[1]), e[1] > s && (s = e[1]);
  return [t, o, r, s];
}
function T(n) {
  return n ? n.rings ? V(n.rings) : n.paths ? V(n.paths) : K(n) ? [n.xmin, n.ymin, n.xmax, n.ymax] : null : null;
}
function W(n, t, r, o, s) {
  const [l, e, f, u] = n;
  if (f < l || u < e) return [0, 0, 0, 1];
  const a = f - l, i = u - e, m = j, c = q, x = Math.floor(0.5 * (0.5 * m - c)), y = (m - 2 * (x + c)) / Math.max(a, i), p = Math.round(a * y) + 2 * x, b = Math.round(i * y) + 2 * x;
  let w = 1;
  t && (w = b / y / (t.ymax - t.ymin));
  let h = 0, g = 0, d = 1;
  o && (s ? t && r && t.ymax - t.ymin > 0 && (d = (t.xmax - t.xmin) / (t.ymax - t.ymin), h = o.x / (r * d), g = o.y / r) : (h = o.x, g = o.y)), t && (h = 0.5 * (t.xmax + t.xmin) + h * (t.xmax - t.xmin), g = 0.5 * (t.ymax + t.ymin) + g * (t.ymax - t.ymin)), h -= l, g -= e, h *= y, g *= y, h += x, g += x;
  let M = h / p - 0.5, C = g / b - 0.5;
  return s && r && (M *= r * d, C *= r), [w, M, C, d];
}
function X(n) {
  const t = z(n.geom), r = B(t), o = j, s = q, l = Math.floor(0.5 * (0.5 * o - s)), e = (o - 2 * (l + s)) / Math.max(r.width, r.height), f = Math.round(r.width * e) + 2 * l, u = Math.round(r.height * e) + 2 * l, a = [];
  for (const m of t) if (m && m.length > 1) {
    const c = [];
    for (const x of m) {
      let [y, p] = x;
      y -= r.x, p -= r.y, y *= e, p *= e, y += l - 0.5, p += l - 0.5, n.asFill ? c.push([y, p]) : c.push([Math.round(y), Math.round(p)]);
    }
    if (n.asFill) {
      const x = c.length - 1;
      c[0][0] === c[x][0] && c[0][1] === c[x][1] || c.push(c[0]);
    }
    a.push(c);
  }
  const i = E(a, f, u, l);
  return n.asFill && H(a, f, u, l, i), [J(i, l), f, u];
}
function E(n, t, r, o) {
  const s = t * r, l = new Array(s), e = o * o + 1;
  for (let f = 0; f < s; ++f) l[f] = e;
  for (const f of n) {
    const u = f.length;
    for (let a = 1; a < u; ++a) {
      const i = f[a - 1], m = f[a];
      let c, x, y, p;
      i[0] < m[0] ? (c = i[0], x = m[0]) : (c = m[0], x = i[0]), i[1] < m[1] ? (y = i[1], p = m[1]) : (y = m[1], p = i[1]);
      let b = Math.floor(c) - o, w = Math.floor(x) + o, h = Math.floor(y) - o, g = Math.floor(p) + o;
      b < 0 && (b = 0), w > t && (w = t), h < 0 && (h = 0), g > r && (g = r);
      const d = m[0] - i[0], M = m[1] - i[1], C = d * d + M * M;
      for (let S = b; S < w; S++) for (let k = h; k < g; k++) {
        const L = S + 0.5, P = k + 0.5;
        let I, v, F = (L - i[0]) * d + (P - i[1]) * M;
        F < 0 ? (I = i[0], v = i[1]) : F > C ? (I = m[0], v = m[1]) : (F /= C, I = i[0] + F * d, v = i[1] + F * M);
        const A = (L - I) * (L - I) + (P - v) * (P - v), D = (r - k - 1) * t + S;
        A < l[D] && (l[D] = A);
      }
    }
  }
  for (let f = 0; f < s; ++f) l[f] = Math.sqrt(l[f]);
  return l;
}
function H(n, t, r, o, s) {
  for (const l of n) {
    const e = l.length;
    for (let f = 1; f < e; ++f) {
      const u = l[f - 1], a = l[f];
      let i, m, c, x;
      u[0] < a[0] ? (i = u[0], m = a[0]) : (i = a[0], m = u[0]), u[1] < a[1] ? (c = u[1], x = a[1]) : (c = a[1], x = u[1]);
      let y = Math.floor(i), p = Math.floor(m) + 1, b = Math.floor(c), w = Math.floor(x) + 1;
      y < o && (y = o), p > t - o && (p = t - o), b < o && (b = o), w > r - o && (w = r - o);
      for (let h = b; h < w; ++h) {
        if (u[1] > h == a[1] > h) continue;
        const g = h + 0.5, d = (r - h - 1) * t;
        for (let M = y; M < p; ++M)
          M + 0.5 < (a[0] - u[0]) * (g - u[1]) / (a[1] - u[1]) + u[0] && (s[d + M] = -s[d + M]);
        for (let M = o; M < y; ++M) s[d + M] = -s[d + M];
      }
    }
  }
}
function J(n, t) {
  const r = 2 * t, o = n.length, s = new Uint8Array(4 * o);
  for (let l = 0; l < o; ++l) {
    const e = 0.5 - n[l] / r;
    G(e, s, 4 * l);
  }
  return s;
}
export {
  W as a,
  X as c,
  $ as l,
  T as m
};
//# sourceMappingURL=SDFHelper-CLUKg7Gw.js.map
