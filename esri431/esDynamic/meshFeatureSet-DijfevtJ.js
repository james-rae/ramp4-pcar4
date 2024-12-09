import { bU as h, b1 as y, a1 as S, aA as g, bV as N, bW as m, G as b } from "./main-DZxT3i7S.js";
import { $ as E } from "./Mesh-C64CSjtZ.js";
import { i as D, a as M } from "./External-xJgS1C18.js";
import { n as F, i as T } from "./meshFeatureAttributes-D2bRF033.js";
const w = () => b.getLogger("esri.rest.support.meshFeatureSet");
function R(e, s, t) {
  const r = t.features;
  t.features = [], delete t.geometryType;
  const n = h.fromJSON(t);
  if (n.geometryType = "mesh", !t.assetMaps) return n;
  const a = O(s, t.assetMaps), u = e.sourceSpatialReference ?? y.WGS84, f = t.globalIdFieldName, { outFields: o } = e, l = o != null && o.length > 0 ? I(o.includes("*") ? null : new Set(o)) : () => ({});
  for (const i of r) {
    const c = L(i, f, u, s, a);
    n.features.push(new S({ geometry: c, attributes: l(i) }));
  }
  return n;
}
function I(e) {
  return ({ attributes: s }) => {
    if (!s) return {};
    if (!e) return s;
    for (const t in s) e.has(t) || delete s[t];
    return s;
  };
}
function L(e, s, t, r, n) {
  const a = e.attributes[s], u = n.get(a);
  if (u == null || !e.geometry) return null;
  const f = F(e.attributes, t, r.transformFieldRoles), o = g.fromJSON(e.geometry);
  o.spatialReference = t;
  const l = T(e.attributes, r.transformFieldRoles), i = t.isGeographic ? "local" : "georeferenced", c = P(u);
  return c ? E.createWithExternalSource(f, c, { extent: o, transform: l, vertexSpace: i, unitConversionDisabled: !0 }) : E.createIncomplete(f, { extent: o, transform: l, vertexSpace: i });
}
var p;
function O(e, s) {
  const t = /* @__PURE__ */ new Map();
  for (const r of s) {
    const n = r.parentGlobalId;
    if (n == null) continue;
    const a = r.assetName, u = r.assetType, f = r.assetHash, o = r.assetURL, l = r.conversionStatus, i = r.seqNo, c = N(u, e.supportedFormats);
    if (!c) {
      w().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${u}, but it does not list it as a supported type`);
      continue;
    }
    const d = m(t, n, () => ({ files: /* @__PURE__ */ new Map() }));
    m(d.files, a, () => ({ name: a, type: u, mimeType: c, status: $(l), parts: [] })).parts[i] = { hash: f, url: o };
  }
  return t;
}
function P(e) {
  const s = Array.from(e.files.values()), t = new Array();
  for (const r of s) {
    if (r.status !== p.COMPLETED) return null;
    const n = new Array();
    for (const a of r.parts) {
      if (!a) return null;
      n.push(new D(a.url, a.hash));
    }
    t.push(new M(r.name, r.mimeType, n));
  }
  return t;
}
function $(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return p.COMPLETED;
    case "INPROGRESS":
      return p.PENDING;
    default:
      return p.FAILED;
  }
}
(function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
})(p || (p = {}));
export {
  O as assetMapFromAssetMapsJSON,
  L as extractMesh,
  R as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-DijfevtJ.js.map
