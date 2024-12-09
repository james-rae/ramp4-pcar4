import { I as c, a0 as f, ca as y, U as S, aw as l, ce as o, cd as R, a5 as m, gC as g, bN as p, bU as N } from "./main-DZxT3i7S.js";
function d(a) {
  const t = a.geometry, n = a.toJSON(), e = n;
  let r, i, s;
  return t != null && (i = t.spatialReference, s = o(i), e.geometryType = R(t), e.geometry = JSON.stringify(t), e.inSR = s), n.outSR ? (e.outSR = o(n.outSR), r = a.outSpatialReference) : t && (e.outSR = e.inSR, r = i), e.bin &&= JSON.stringify(e.bin), e.quantizationParameters &&= JSON.stringify(e.quantizationParameters), e.outStatistics &&= JSON.stringify(e.outStatistics), e.outTimeReference &&= JSON.stringify(e.outTimeReference), a.defaultSpatialReference && m(i, r) && (e.defaultSR = e.inSR, delete e.inSR, delete e.outSR), e;
}
async function J(a, t, n) {
  return O(a, t, n);
}
async function O(a, t, n = {}) {
  const e = typeof a == "string" ? c(a) : a, r = t.geometry ? [t.geometry] : [], i = await f(r, null, { signal: n.signal }), s = i?.[0];
  s != null && ((t = t.clone()).geometry = s);
  const u = y({ ...e.query, f: "json", ...d(t) });
  return S(l(e.path, "queryBins"), { ...n, query: { ...u, ...n.query } });
}
async function b(a, t, n) {
  const { data: e } = await J(p(a), g.from(t), n);
  return N.fromJSON(e);
}
export {
  b as executeBinsQuery
};
//# sourceMappingURL=executeBinsQuery-DhX5aiL_.js.map
