import { s as j, dA as q, bA as Y, $ as x, dg as ee, df as L, bg as ne, bx as k, dB as te, dl as ie, dk as ae, dC as E, de as re, I as K, D as se, dD as oe } from "./main-DHXLMse1.js";
import { E as le, I as ce, N as ue } from "./geojson-BzM0HpH3.js";
import { o as de } from "./clientSideDefaults-C568k-6Z.js";
import { p as fe } from "./sourceUtils-DZ9FKI5x.js";
const D = () => se.getLogger("esri.layers.ogc.ogcFeatureUtils"), J = "startindex", me = /* @__PURE__ */ new Set([J, "offset"]), _ = "http://www.opengis.net/def/crs/", xe = `${_}OGC/1.3/CRS84`;
var l;
async function $e(e, t, n = {}, i = 5) {
  const { links: a } = e, o = m(a, "items", l.geojson) || m(a, "http://www.opengis.net/def/rel/ogc/1.0/items", l.geojson);
  if (o == null) throw new j("ogc-feature-layer:missing-items-page", "Missing items url");
  const { apiKey: d, customParameters: g, signal: p } = n, u = q(o.href, e.landingPage.url), I = { limit: i, ...g, token: d }, $ = Y(u, I), G = { accept: l.geojson }, { data: S } = await x($, { signal: p, headers: G }), v = Ie($, i, S.links) ?? J;
  le(S);
  const f = ce(S, { geometryType: t.geometryType }), h = t.fields || f.fields || [], R = t.hasZ != null ? t.hasZ : f.hasZ, y = f.geometryType, w = t.objectIdField || f.objectIdFieldName || "OBJECTID";
  let s = t.timeInfo;
  const N = h.find(({ name: r }) => r === w);
  if (N) N.editable = !1, N.nullable = !1;
  else {
    if (!f.objectIdFieldType) throw new j("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    h.unshift({ name: w, alias: w, type: f.objectIdFieldType === "number" ? "esriFieldTypeOID" : "esriFieldTypeString", editable: !1, nullable: !1 });
  }
  if (w !== f.objectIdFieldName) {
    const r = h.find(({ name: c }) => c === f.objectIdFieldName);
    r && (r.type = "esriFieldTypeInteger");
  }
  h === f.fields && f.unknownFields.length > 0 && D().warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: f.unknownFields } });
  for (const r of h) {
    if (r.name == null && (r.name = r.alias), r.alias == null && (r.alias = r.name), r.type !== "esriFieldTypeOID" && r.type !== "esriFieldTypeGlobalID" && (r.editable = r.editable == null || !!r.editable, r.nullable = r.nullable == null || !!r.nullable), !r.name) throw new j("ogc-feature-layer:invalid-field-name", "field name is missing", { field: r });
    if (!ee.jsonValues.includes(r.type)) throw new j("ogc-feature-layer:invalid-field-type", `invalid type for field "${r.name}"`, { field: r });
  }
  if (s) {
    const r = new L(h);
    if (s.startTimeField) {
      const c = r.get(s.startTimeField);
      c ? (s.startTimeField = c.name, c.type = "esriFieldTypeDate") : s.startTimeField = null;
    }
    if (s.endTimeField) {
      const c = r.get(s.endTimeField);
      c ? (s.endTimeField = c.name, c.type = "esriFieldTypeDate") : s.endTimeField = null;
    }
    if (s.trackIdField) {
      const c = r.get(s.trackIdField);
      c ? s.trackIdField = c.name : (s.trackIdField = null, D().warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: s } }));
    }
    s.timeReference ||= { timeZoneIANA: ne }, s.startTimeField || s.endTimeField || (D().warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: s } }), s = void 0);
  }
  return { drawingInfo: y ? de(y) : null, extent: he(e), geometryType: y, fields: h, hasZ: !!R, objectIdField: w, paginationParameter: v, timeInfo: s };
}
async function Se(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "data", l.json) || m(n, "http://www.opengis.net/def/rel/ogc/1.0/data", l.json);
  if (a == null) throw new j("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.json }, query: { ...d, token: o } });
  for (const I of u.collections) I.landingPage = e;
  return u;
}
async function ve(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "conformance", l.json) || m(n, "http://www.opengis.net/def/rel/ogc/1.0/conformance", l.json);
  if (a == null) throw new j("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.json }, query: { ...d, token: o } });
  return u;
}
async function Ne(e, t = {}) {
  const { apiKey: n, customParameters: i, signal: a } = t, { data: o } = await x(e, { signal: a, headers: { accept: l.json }, query: { ...i, token: n } });
  return o.url = e, o;
}
async function Pe(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "service-desc", l.openapi);
  if (a == null) return D().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.openapi }, query: { ...d, token: o } });
  return u;
}
function Oe(e) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e), n = t?.groups;
  if (!n) return null;
  const { authority: i, code: a } = n;
  switch (i.toLowerCase()) {
    case "ogc":
      switch (a.toLowerCase()) {
        case "crs27":
          return k.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return k.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const o = Number.parseInt(a, 10);
      return Number.isNaN(o) ? null : o;
    }
    default:
      return null;
  }
}
async function qe(e, t, n) {
  const i = await ge(e, t, n);
  return te(i);
}
async function ge(e, t, n) {
  const { collection: { links: i, landingPage: { url: a } }, layerDefinition: o, maxRecordCount: d, queryParameters: { apiKey: g, customParameters: p }, spatialReference: u, supportedCrs: I } = e, $ = m(i, "items", l.geojson) || m(i, "http://www.opengis.net/def/rel/ogc/1.0/items", l.geojson);
  if ($ == null) throw new j("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: G, num: S, start: v, timeExtent: f, where: h } = t;
  if (t.objectIds) throw new j("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
  const R = k.fromJSON(u), y = t.outSpatialReference ?? R, w = y.isWGS84 ? null : z(y, I), s = be(G, I), N = ye(f), r = we(h), c = S ?? (v == null ? d : 10), B = v === 0 ? void 0 : v, { fields: A, geometryType: C, hasZ: W, objectIdField: P, paginationParameter: U } = o, Q = q($.href, a), { data: M } = await x(Q, { ...n, query: { ...p, ...s, crs: w, datetime: N, query: r, limit: c, [U]: B, token: g }, headers: { accept: l.geojson } }), O = ue(M, { geometryType: C, hasZ: W, objectIdField: P }), V = O.length === c && !!m(M.links ?? [], "next", l.geojson), H = new L(A);
  for (const b of O) {
    const T = {};
    fe(H, T, b.attributes), T[P] = b.attributes[P], b.attributes = T;
  }
  if (!w && y.isWebMercator) {
    for (const b of O) if (b.geometry != null && C != null) {
      const T = ie(b.geometry, C, W, !1);
      T.spatialReference = k.WGS84, b.geometry = ae(E(T, y));
    }
  }
  for (const b of O) b.objectId = b.attributes[P];
  const X = w || !w && y.isWebMercator ? y.toJSON() : re, F = new oe();
  return F.exceededTransferLimit = V, F.features = O, F.fields = A, F.geometryType = C, F.hasZ = W, F.objectIdFieldName = P, F.spatialReference = X, F;
}
function pe(e) {
  return e != null && e.type === "extent";
}
function z(e, t) {
  const { isWebMercator: n, wkid: i } = e;
  if (!i) return null;
  const a = n ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e.wkid];
  return a ? `${_}${a}` : null;
}
function Z(e) {
  if (e == null) return "";
  const { xmin: t, ymin: n, xmax: i, ymax: a } = e;
  return `${t},${n},${i},${a}`;
}
function ye(e) {
  if (e == null) return null;
  const { start: t, end: n } = e;
  return `${t != null ? t.toISOString() : ".."}/${n != null ? n.toISOString() : ".."}`;
}
function we(e) {
  return e != null && e && e !== "1=1" ? e : null;
}
function be(e, t) {
  if (!pe(e)) return null;
  const { spatialReference: n } = e;
  if (!n || n.isWGS84) return { bbox: Z(e) };
  const i = z(n, t);
  return i != null ? { bbox: Z(e), "bbox-crs": i } : n.isWebMercator ? { bbox: Z(E(e, k.WGS84)) } : null;
}
function he(e) {
  const t = e.extent?.spatial;
  if (!t) return null;
  const n = t.bbox[0], i = n.length === 4, [a, o] = n, d = i ? void 0 : n[2];
  return { xmin: a, ymin: o, xmax: i ? n[2] : n[3], ymax: i ? n[3] : n[4], zmin: d, zmax: i ? void 0 : n[5], spatialReference: k.WGS84.toJSON() };
}
function m(e, t, n) {
  return e.find(({ rel: i, type: a }) => i === t && a === n) ?? e.find(({ rel: i, type: a }) => i === t && !a);
}
function Ie(e, t, n) {
  if (!n) return;
  const i = m(n, "next", l.geojson), a = K(i?.href)?.query;
  if (!a) return;
  const o = K(e).query, d = Object.keys(o ?? {});
  return Object.entries(a).filter(([u]) => !d.includes(u)).find(([u, I]) => me.has(u.toLowerCase()) && Number.parseInt(I, 10) === t)?.[0];
}
(function(e) {
  e.json = "application/json", e.geojson = "application/geo+json", e.openapi = "application/vnd.oai.openapi+json;version=3.0";
})(l || (l = {}));
export {
  ge as $,
  Oe as C,
  Se as N,
  ve as O,
  Ne as P,
  qe as R,
  _ as k,
  Pe as q,
  $e as v,
  xe as x
};
//# sourceMappingURL=ogcFeatureUtils-BWP6mdUi.js.map
