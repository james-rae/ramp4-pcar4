import { L as v, c as S, h as w, d as N, l as O, a as d, i as R, u as f, f as c } from "./main-DZxT3i7S.js";
import { P as x, $ as D } from "./utils-BVp7JbW3.js";
import { t as J, a as M, i as Y } from "./fetchService-BbX6Wqej.js";
const T = "Feature Service", $ = "feature-layer-utils", _ = `${$}-save`, g = `${$}-save-as`;
function h(e) {
  return { isValid: v(e) && (!("dynamicDataSource" in e) || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function A(e) {
  const t = [], a = [];
  for (const { layer: r, layerJSON: o } of e) r.isTable ? a.push(o) : t.push(o);
  return { layers: t, tables: a };
}
function L(e) {
  return A([e]);
}
async function F(e, t) {
  return /\/\d+\/?$/.test(e.url) ? L(t[0]) : G(t, e);
}
async function G(e, t) {
  if (e.reverse(), !t) return A(e);
  const a = await K(t, e);
  for (const r of e) b(r.layer, r.layerJSON, a);
  return U(a, e), a;
}
async function K(e, t) {
  let a = await e.fetchData("json");
  if (j(a)) return a;
  a ||= {}, B(a);
  const { layer: { url: r, customParameters: o, apiKey: s } } = t[0];
  return await V(a, { url: r ?? "", customParameters: o, apiKey: s }, t.map((n) => n.layer.layerId)), a;
}
function j(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function B(e) {
  e.layers ||= [], e.tables ||= [];
}
function U(e, t) {
  const a = [], r = [];
  for (const { layer: o } of t) {
    const { isTable: s, layerId: n } = o;
    s ? r.push(n) : a.push(n);
  }
  p(e.layers, a), p(e.tables, r);
}
function p(e, t) {
  if (e.length < 2) return;
  const a = [];
  for (const { id: r } of e) a.push(r);
  S(a.sort(m), t.slice().sort(m)) && e.sort((r, o) => {
    const s = t.indexOf(r.id), n = t.indexOf(o.id);
    return s < n ? -1 : s > n ? 1 : 0;
  });
}
function m(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
async function V(e, t, a) {
  const { url: r, customParameters: o, apiKey: s } = t, { serviceJSON: n, layersJSON: i } = await J(r, { customParameters: o, apiKey: s }), l = I(e.layers, n.layers, a), u = I(e.tables, n.tables, a);
  e.layers = l.itemResources, e.tables = u.itemResources;
  const y = [...l.added, ...u.added], P = i ? [...i.layers, ...i.tables] : [];
  await k(e, y, r, P);
}
function I(e, t, a) {
  const r = w(e, t, (s, n) => s.id === n.id);
  e = e.filter((s) => !r.removed.some((n) => n.id === s.id));
  const o = r.added;
  return o.forEach(({ id: s }) => {
    e.push({ id: s });
  }), { itemResources: e, added: o.filter(({ id: s }) => !a.includes(s)) };
}
async function k(e, t, a, r) {
  const o = await q(t), s = t.map(({ id: n, type: i }) => new (o.get(i))({ url: a, layerId: n, sourceJSON: r.find(({ id: l }) => l === n) }));
  await Promise.allSettled(s.map((n) => n.load())), s.forEach((n) => {
    const { layerId: i, loaded: l, defaultPopupTemplate: u } = n;
    if (!l || u == null) return;
    const y = { id: i, popupInfo: u.toJSON() };
    n.operationalLayerType !== "ArcGISFeatureLayer" && (y.layerType = n.operationalLayerType), b(n, y, e);
  });
}
async function q(e) {
  const t = [];
  e.forEach(({ type: o }) => {
    const s = Y(o), n = M[s];
    t.push(n());
  });
  const a = await Promise.all(t), r = /* @__PURE__ */ new Map();
  return e.forEach(({ type: o }, s) => {
    r.set(o, a[s]);
  }), r;
}
function b(e, t, a) {
  e.isTable ? E(a.tables, t) : E(a.layers, t);
}
function E(e, t) {
  const a = e.findIndex(({ id: r }) => r === t.id);
  a === -1 ? e.push(t) : e[a] = t;
}
function z(e, t) {
  const a = e.layers.some((r) => r.layerType === "OrientedImageryLayer");
  f(t, c.ORIENTED_IMAGERY_LAYER, a);
}
function X(e, t) {
  const a = e.some((r) => r.type === "oriented-imagery");
  f(t, c.ORIENTED_IMAGERY_LAYER, a);
}
async function Z(e, t, a) {
  z(a, t);
}
async function C(e, t) {
  const { url: a, layerId: r, title: o, fullExtent: s, isTable: n } = e, i = N(a);
  t.url = (i?.serverType === "FeatureServer" ? a : `${a}/${r}`) ?? null, t.title ||= o, t.extent = null, n || s == null || (t.extent = await O(s)), d(t, c.METADATA), d(t, c.MULTI_LAYER), R(t, c.SINGLE_LAYER), f(t, c.TABLE, n), X([e], t);
}
async function ee(e, t) {
  return x({ layer: e, itemType: T, validateLayer: h, createItemData: (a, r) => F(r, [a]), errorNamePrefix: _, setItemProperties: Z }, t);
}
async function te(e, t, a) {
  return D({ layer: e, itemType: T, validateLayer: h, createItemData: (r, o) => Promise.resolve(L(r)), errorNamePrefix: g, newItem: t, setItemProperties: C }, a);
}
export {
  ee as save,
  te as saveAs
};
//# sourceMappingURL=featureLayerUtils-CwO4zzUC.js.map
