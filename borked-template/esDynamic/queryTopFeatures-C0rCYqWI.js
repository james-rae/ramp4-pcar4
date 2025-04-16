import { cA as p, I as m, ao as F, cy as f, a2 as E, aN as x, cB as j, cC as d } from "./main-9SanlBxi.js";
const a = "Layer does not support extent calculation.";
function O(o, n) {
  const r = o.geometry, t = o.toJSON(), e = t;
  if (r != null && (e.geometry = JSON.stringify(r), e.geometryType = j(r), e.inSR = d(r.spatialReference)), t.topFilter?.groupByFields && (e.topFilter.groupByFields = t.topFilter.groupByFields.join(",")), t.topFilter?.orderByFields && (e.topFilter.orderByFields = t.topFilter.orderByFields.join(",")), t.topFilter && (e.topFilter = JSON.stringify(e.topFilter)), t.objectIds && (e.objectIds = t.objectIds.join(",")), t.orderByFields && (e.orderByFields = t.orderByFields.join(",")), t.outFields && !(n?.returnCountOnly || n?.returnExtentOnly || n?.returnIdsOnly) ? t.outFields.includes("*") ? e.outFields = "*" : e.outFields = t.outFields.join(",") : delete e.outFields, t.outSR ? e.outSR = d(t.outSR) : r && t.returnGeometry && (e.outSR = e.inSR), t.returnGeometry && delete t.returnGeometry, t.timeExtent) {
    const u = t.timeExtent, { start: s, end: l } = u;
    s == null && l == null || (e.time = s === l ? s : `${s ?? "null"},${l ?? "null"}`), delete t.timeExtent;
  }
  return e;
}
async function B(o, n, r, t) {
  const e = await i(o, n, "json", t);
  return p(n, r, e.data), e;
}
async function S(o, n, r) {
  return n.timeExtent != null && n.timeExtent.isEmpty ? { data: { objectIds: [] } } : i(o, n, "json", r, { returnIdsOnly: !0 });
}
async function I(o, n, r) {
  return n.timeExtent != null && n.timeExtent.isEmpty ? { data: { count: 0, extent: null } } : i(o, n, "json", r, { returnExtentOnly: !0, returnCountOnly: !0 }).then((t) => {
    const e = t.data;
    if (e.hasOwnProperty("extent")) return t;
    if (e.features) throw new Error(a);
    if (e.hasOwnProperty("count")) throw new Error(a);
    return t;
  });
}
function R(o, n, r) {
  return n.timeExtent != null && n.timeExtent.isEmpty ? Promise.resolve({ data: { count: 0 } }) : i(o, n, "json", r, { returnIdsOnly: !0, returnCountOnly: !0 });
}
function i(o, n, r, t = {}, e = {}) {
  const u = typeof o == "string" ? m(o) : o, s = n.geometry ? [n.geometry] : [];
  return t.responseType = "json", F(s, null, t).then((l) => {
    const y = l?.[0];
    y != null && ((n = n.clone()).geometry = y);
    const c = f({ ...u.query, f: r, ...e, ...O(n, e) });
    return E(x(u.path, "queryTopFeatures"), { ...t, query: { ...c, ...t.query } });
  });
}
export {
  R as a,
  I as d,
  S as m,
  B as p
};
//# sourceMappingURL=queryTopFeatures-C0rCYqWI.js.map
