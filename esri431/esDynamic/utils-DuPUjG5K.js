import { dj as C, b8 as G, D as z, dk as D, dl as O, dm as E, dn as V, dp as A, b1 as L, dq as P, dr as R } from "./main-DZxT3i7S.js";
import { $ as U } from "./utils-CGnCHnho.js";
import { m as T, B as Y } from "./utils-3zMy94Kq.js";
let c = null;
const _ = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function k(t, e, s) {
  return t.x < 0 ? t.x += e : t.x > s && (t.x -= e), t;
}
function H(t, e, s, r) {
  const a = C(s) ? G(s) : null, u = a ? Math.round((a.valid[1] - a.valid[0]) / e.scale[0]) : null;
  return t.map((o) => {
    const i = new z(o.geometry);
    return D(e, i, i), o.geometry = a ? k(i, u ?? 0, r[0]) : i, o;
  });
}
function J(t, e = 18, s, r, a) {
  const u = new Float64Array(r * a);
  e = Math.round(P(e));
  let o = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
  const N = R(s);
  for (const { geometry: p, attributes: g } of t) {
    const { x, y: m } = p, b = Math.max(0, x - e), M = Math.max(0, m - e), F = Math.min(a, m + e), w = Math.min(r, x + e), $ = +N(g);
    for (let f = M; f < F; f++) for (let d = b; d < w; d++) {
      const y = f * r + d, I = O(d - x, f - m, e) * $, l = u[y] += I;
      o = Math.min(o, l), i = Math.max(i, l);
    }
  }
  return { min: o, max: i };
}
function q(t) {
  const e = _.exec(t);
  if (!e) return null;
  const { hh: s, mm: r, ss: a, ms: u } = e.groups;
  return Number(s) * E.hours + Number(r) * E.minutes + Number(a) * E.seconds + Number(u || 0);
}
async function K(t, e, s = !0) {
  if (!e) return [];
  const { field: r, field2: a, field3: u, fieldDelimiter: o, fieldInfos: i, timeZone: N } = t, p = r && i?.find((l) => l.name.toLowerCase() === r.toLowerCase()), g = !!p && V(p), x = !!p && U(p), m = t.valueExpression, b = t.normalizationType, M = t.normalizationField, F = t.normalizationTotal, w = [], $ = t.viewInfoParams;
  let f = null, d = null;
  if (m) {
    if (!c) {
      const { arcadeUtils: l } = await A();
      c = l;
    }
    c.hasGeometryOperations(m) && await c.enableGeometryOperations(), f = c.createFunction(m), d = $ ? c.getViewInfo({ viewingMode: $.viewingMode, scale: $.scale, spatialReference: new L($.spatialReference) }) : null;
  }
  const y = t.fieldInfos, I = !(e[0] && "declaredClass" in e[0] && e[0].declaredClass === "esri.Graphic") && y ? { fields: y } : null;
  return e.forEach((l) => {
    const h = l.attributes;
    let n;
    if (m) {
      const v = I ? { ...l, layer: I } : l, j = c.createExecContext(v, d, N);
      n = c.executeFunction(f, j);
    } else h && (n = h[r], a ? (n = `${T(n)}${o}${T(h[a])}`, u && (n = `${n}${o}${T(h[u])}`)) : typeof n == "string" && s && (x ? n = n ? new Date(n).getTime() : null : g && (n = n ? q(n) : null)));
    if (b && typeof n == "number" && isFinite(n)) {
      const v = h && parseFloat(h[M]);
      n = Y(n, b, v, F);
    }
    w.push(n);
  }), w;
}
export {
  q as I,
  K as b,
  J as w,
  H as x
};
//# sourceMappingURL=utils-DuPUjG5K.js.map
