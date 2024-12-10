import { dF as We, fo as Ye, dw as ge, g1 as ze, s as q, U as Ze, bW as j, bQ as d, bR as y, bS as me, ew as Ke, G as X, fS as H, e7 as ue, dy as F, cI as te, aA as ne, nm as Te, b4 as Ge, hA as Xe, hj as et, hk as tt, ex as nt, hi as it, hl as rt, eB as at, ey as ot, eC as st, nn as lt, ay as ee, e8 as U, hm as pt, cC as le, b1 as dt, ho as yt, bU as ut, hn as ct, b3 as ht, D as mt, T as C, no as ft, np as gt, nq as Tt, nr as bt, hr as wt, hs as Et, ht as It, eF as Nt, hR as Lt, hS as Dt, hu as _t, ns as Mt, hv as Rt, cB as St, hw as vt, jH as $t, f9 as Ct, n4 as kt, f7 as At, eM as Ot } from "./main-DZxT3i7S.js";
import { W as xt, M as Q, r as Ue } from "./knowledgeGraphService-9wJAFHhQ.js";
import { s as B } from "./GraphQueryStreaming-DY2WMXnT.js";
import { m as jt } from "./FeatureStore-zvkXSx1l.js";
import { V as Ft } from "./QueryEngine-DVmSGTfj.js";
import { y as qt, u as pe } from "./clientSideDefaults-ppWQ35EG.js";
const x = "ESRI__ID", ce = "ESRI__OriginID", he = "ESRI__DestID", He = "ESRI__LayoutGeometry", be = "ESRI__AggregationCount", z = "LC.ESRI__IsSpatial", Pt = { initializeLayersFromClientData: async (e, t) => {
  if (t || (t = [...e.layers, ...e.tables].map((a) => a.graphTypeName)), t?.length === 0) return;
  const i = /* @__PURE__ */ new Map();
  for (const a of t) i.set(a, we(e, a));
  const n = await xt(e.dataManager.knowledgeGraph, Array.from(i.values()));
  for (const a of [...e.layers, ...e.tables]) {
    const r = a.objectType.name;
    if (r === null) continue;
    const s = n.get(we(e, r));
    if (s) {
      const p = JSON.parse(s);
      p === null || typeof p != "object" || p.hasOwnProperty("showLabels") || (p.showLabels = !1), a.read(p, { origin: "service" });
    }
  }
} }, we = (e, t) => e.type === "knowledge-graph" ? `${t}/Map` : `${t}/LinkChart/LinkChartSubLayer`;
async function nn(e, t) {
  return Pt.initializeLayersFromClientData(e, t);
}
let de = class G {
  constructor() {
    this._featureLookup = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return G.instance || (G.instance = new G()), G.instance;
  }
  static resetInstance() {
    G.instance && (G.instance = null);
  }
  deleteFromStore(t) {
    t.forEach((i) => {
      this._featureLookup.delete(i);
    });
  }
  readFromStoreByList(t) {
    const i = [];
    return t.forEach((n) => {
      const a = this.readFromStoreById(n);
      a && i.push(a);
    }), i;
  }
  readFromStoreById(t) {
    return this._featureLookup.get(t) ?? null;
  }
  writeToStore(t, i, n) {
    const a = [];
    return t.forEach((r) => {
      if (!r?.id) return;
      r.properties || (r.properties = []);
      let s, p = null;
      if (n && r.properties[n] && (p = We(r.properties[n])), "originId" in r && "destinationId" in r && (r.properties[ce] = r.originId, r.properties[he] = r.destinationId), r.properties[i] = r.id, r.id && this._featureLookup.has(r.id) && this._featureLookup.get(r.id).attributes) {
        const o = this._featureLookup.get(r.id), l = JSON.parse(JSON.stringify(Object.assign(o.attributes, r.properties)));
        n && r.properties[n] && (l[n] = Ye(r.properties[n])), s = new ge(p ? JSON.parse(JSON.stringify(p)) : o?.geometry ? JSON.parse(JSON.stringify(o.geometry)) : null, l, null, r.properties[i]);
      } else s = new ge(p ? JSON.parse(JSON.stringify(p)) : null, r.properties, null, r.properties[i]);
      this._featureLookup.set(`${r.typeName ? `${r.typeName}__${r.id}` : r.id}`, s), a.push(s);
    }), a;
  }
}, ye, E = null;
function rn() {
  return ye || (ye = import("./lclayout-BBUCNmnC.js").then((e) => e.l).then(({ default: e }) => e({ locateFile: (t) => ze(`esri/libs/linkchartlayout/${t}`) })).then((e) => {
    Bt(e);
  }), ye);
}
function Bt(e) {
  E = e;
}
var Ee, Ie, Z, K;
function Gt(e) {
  const t = Object.keys(Z).filter((n) => isNaN(parseInt(n, 10))).indexOf(e.timeDirection), i = Object.keys(K).filter((n) => isNaN(parseInt(n, 10))).indexOf(e.eventsTicksVisualization);
  return { timeDirection: { value: t > -1 ? t : Z.right }, timeBannerUTCOffsetInMinutes: e.timeBannerUTCOffsetInMinutes, eventsTicksVisualization: { value: i > -1 ? i : K.startAndEnd }, showDurationLineForNonZeroDurationEntityEvents: e.showDurationLineForNonZeroDurationEntityEvents, durationLineWidth: e.durationLineWidth, entityPositionAtDurationRatio: e.entityPositionAtDurationRatio, showNonZeroDurationIntervalBounds: e.showNonZeroDurationIntervalBounds, separateTimeOverlaps: e.separateTimeOverlaps, separateTimelineOverlaps: e.separateTimelineOverlaps, moveFirstBends: e.moveFirstBends, secondBendRatio: e.secondBendRatio, lineSeparationMultiplier: e.lineSeparationMultiplier, spaceSeparatedLinesEvenly: e.spaceSeparatedLinesEvenly, useBezierCurves: e.useBezierCurves, separatedLineShapeRatio: e.separatedLineShapeRatio };
}
function P(e, t, i, n, a, r) {
  const s = i.length, p = a.length, o = Float64Array.BYTES_PER_ELEMENT, l = Uint32Array.BYTES_PER_ELEMENT, m = Uint8Array.BYTES_PER_ELEMENT, T = 16, u = T + s * (m + 2 * o) + p * (2 * l), b = E._malloc(u);
  try {
    const g = b + T - b % T, c = g + s * o, N = c + s * o, L = N + p * l, D = L + p * l, w = () => [E.HEAPF64.subarray(g >> 3, (g >> 3) + s), E.HEAPF64.subarray(c >> 3, (c >> 3) + s), E.HEAPU32.subarray(N >> 2, (N >> 2) + p), E.HEAPU32.subarray(L >> 2, (L >> 2) + p), E.HEAPU8.subarray(D, D + s)], [M, I, h, $, _] = w();
    M.set(i), I.set(n), h.set(a), $.set(r), _.set(t);
    let v = e(s, D, g, c, p, N, L), S = null, A = null;
    if (v) {
      const ae = E.getLayoutLinksTypes(), oe = E.getLayoutLinksVerticesEndIndices(), se = E.getLayoutLinksVertices(), fe = E.countLayoutLinksVertices();
      !p || ae && oe ? fe && !se ? v = !1 : (S = { types: new Uint8Array(E.HEAPU8.subarray(ae, ae + p)), vertexEndIndex: new Uint32Array(E.HEAPU32.subarray(oe >> 2, (oe >> 2) + p)), vertices: new Float64Array(E.HEAPF64.subarray(se >> 3, (se >> 3) + 2 * fe)) }, A = E.getAuxiliaryGraphicElements()) : v = !1;
    }
    const [R, V, W, re, Ve] = w();
    return i.set(R), n.set(V), a.set(W), r.set(re), t.set(Ve), { success: v, links: S, graphics: A };
  } finally {
    E._free(b), E.cleanupLayout();
  }
}
(function(e) {
  e[e.None = 0] = "None", e[e.IsMovable = 1] = "IsMovable", e[e.IsGeographic = 2] = "IsGeographic", e[e.IsRoot = 4] = "IsRoot", e[e.IsOld = 8] = "IsOld";
})(Ee || (Ee = {})), function(e) {
  e[e.Regular = 0] = "Regular", e[e.Curved = 1] = "Curved", e[e.Recursive = 2] = "Recursive";
}(Ie || (Ie = {})), function(e) {
  e[e.right = 0] = "right", e[e.left = 1] = "left", e[e.top = 2] = "top", e[e.bottom = 3] = "bottom";
}(Z || (Z = {})), function(e) {
  e[e.none = 0] = "none", e[e.startOnly = 1] = "startOnly", e[e.startAndEnd = 2] = "startAndEnd";
}(K || (K = {}));
const Ne = 2, Le = 1, De = -1;
var _e, Me, Re, Se, ve, $e, Ce, ke, Ae;
(function(e) {
  function t() {
    return E.getMinIdealEdgeLength();
  }
  function i(n, a, r, s, p, o = Ne, l = Le, m = De) {
    return P((T, u, b, g, c, N, L) => E.applyForceDirectedLayout(T, u, b, g, c, N, L, o, l, m), n, a, r, s, p);
  }
  e.getMinIdealEdgeLength = t, e.apply = i;
})(_e || (_e = {})), function(e) {
  function t(i, n, a, r, s, p = Ne, o = Le, l = De) {
    return P((m, T, u, b, g, c, N) => E.applyCommunityLayout(m, T, u, b, g, c, N, p, o, l), i, n, a, r, s);
  }
  e.apply = t;
}(Me || (Me = {})), function(e) {
  function t(i, n, a, r, s) {
    return P(E.applySimpleLayout, i, n, a, r, s);
  }
  e.apply = t;
}(Re || (Re = {})), function(e) {
  function t(i, n, a, r, s) {
    return P(E.applyHierarchicalLayout, i, n, a, r, s);
  }
  e.apply = t;
}(Se || (Se = {})), function(e) {
  function t(i, n, a, r, s) {
    return P(E.applyRadialTreeLayout, i, n, a, r, s);
  }
  e.apply = t;
}(ve || (ve = {})), function(e) {
  function t(i, n, a, r, s) {
    return P(E.applySmartTreeLayout, i, n, a, r, s);
  }
  e.apply = t;
}($e || ($e = {})), function(e) {
  function t(i, n, a, r, s, p, o, l, m, T, u) {
    const b = { timeDirection: Z.right, timeBannerUTCOffsetInMinutes: 0, eventsTicksVisualization: K.startAndEnd, showDurationLineForNonZeroDurationEntityEvents: !0, durationLineWidth: 5, entityPositionAtDurationRatio: 1, showNonZeroDurationIntervalBounds: !1, separateTimeOverlaps: !0, separateTimelineOverlaps: !0, moveFirstBends: !0, secondBendRatio: 0.3, lineSeparationMultiplier: 1, spaceSeparatedLinesEvenly: !1, useBezierCurves: !1, separatedLineShapeRatio: 0 };
    return P((g, c, N, L, D, w, M) => {
      if (r.length !== g || s.length !== g || l.length !== D || m.length !== D) return !1;
      const I = Float64Array.BYTES_PER_ELEMENT, h = 16, $ = E._malloc(h + g * I), _ = E._malloc(h + g * I), v = E._malloc(h + D * I), S = E._malloc(h + D * I), A = $ + h - $ % h, R = _ + h - _ % h, V = v + h - v % h, W = S + h - S % h;
      try {
        E.HEAPF64.subarray(A >> 3, (A >> 3) + g).set(r), E.HEAPF64.subarray(R >> 3, (R >> 3) + g).set(s), E.HEAPF64.subarray(V >> 3, (V >> 3) + D).set(l), E.HEAPF64.subarray(W >> 3, (W >> 3) + D).set(m);
        const re = Gt(Object.assign(b, u));
        return E.applyChronologicalLayout(g, c, N, L, A, R, D, w, M, V, W, T, re);
      } finally {
        E._free($), E._free(_), E._free(v), E._free(S);
      }
    }, i, n, a, p, o);
  }
  e.apply = t;
}(Ce || (Ce = {})), function(e) {
  e[e.Undirected = 0] = "Undirected", e[e.Directed = 1] = "Directed", e[e.Reversed = 2] = "Reversed";
}(ke || (ke = {})), function(e) {
  e[e.ByCC_Raw = 0] = "ByCC_Raw", e[e.ByCC_NormalizeGlobally = 1] = "ByCC_NormalizeGlobally", e[e.ByCC_NormalizeByCC = 2] = "ByCC_NormalizeByCC";
}(Ae || (Ae = {}));
var ie;
(function(e) {
  e.ELEMENTUID = "ELEMENTUID", e.TYPENAME = "TYPENAME";
})(ie || (ie = {}));
ie.ELEMENTUID, ie.TYPENAME;
var Oe, xe;
(function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME";
})(Oe || (Oe = {})), function(e) {
  e[e.ELEMENTUID = 0] = "ELEMENTUID", e[e.TYPENAME = 1] = "TYPENAME", e[e.FROMUID = 2] = "FROMUID", e[e.TOUID = 3] = "TOUID";
}(xe || (xe = {}));
var je, Fe, qe, J;
(function(e) {
  e[e.featureResult = 0] = "featureResult", e[e.countResult = 1] = "countResult", e[e.idsResult = 2] = "idsResult";
})(je || (je = {})), function(e) {
  e[e.upperLeft = 0] = "upperLeft", e[e.lowerLeft = 1] = "lowerLeft";
}(Fe || (Fe = {})), function(e) {
  e[e.sqlTypeBigInt = 0] = "sqlTypeBigInt", e[e.sqlTypeBinary = 1] = "sqlTypeBinary", e[e.sqlTypeBit = 2] = "sqlTypeBit", e[e.sqlTypeChar = 3] = "sqlTypeChar", e[e.sqlTypeDate = 4] = "sqlTypeDate", e[e.sqlTypeDecimal = 5] = "sqlTypeDecimal", e[e.sqlTypeDouble = 6] = "sqlTypeDouble", e[e.sqlTypeFloat = 7] = "sqlTypeFloat", e[e.sqlTypeGeometry = 8] = "sqlTypeGeometry", e[e.sqlTypeGUID = 9] = "sqlTypeGUID", e[e.sqlTypeInteger = 10] = "sqlTypeInteger", e[e.sqlTypeLongNVarchar = 11] = "sqlTypeLongNVarchar", e[e.sqlTypeLongVarbinary = 12] = "sqlTypeLongVarbinary", e[e.sqlTypeLongVarchar = 13] = "sqlTypeLongVarchar", e[e.sqlTypeNChar = 14] = "sqlTypeNChar", e[e.sqlTypeNVarChar = 15] = "sqlTypeNVarChar", e[e.sqlTypeOther = 16] = "sqlTypeOther", e[e.sqlTypeReal = 17] = "sqlTypeReal", e[e.sqlTypeSmallInt = 18] = "sqlTypeSmallInt", e[e.sqlTypeSqlXml = 19] = "sqlTypeSqlXml", e[e.sqlTypeTime = 20] = "sqlTypeTime", e[e.sqlTypeTimestamp = 21] = "sqlTypeTimestamp", e[e.sqlTypeTimestamp2 = 22] = "sqlTypeTimestamp2", e[e.sqlTypeTinyInt = 23] = "sqlTypeTinyInt", e[e.sqlTypeVarbinary = 24] = "sqlTypeVarbinary", e[e.sqlTypeVarchar = 25] = "sqlTypeVarchar";
}(qe || (qe = {})), function(e) {
  e[e.OID_ARRAY = 0] = "OID_ARRAY", e[e.GLOBALID_ARRAY = 1] = "GLOBALID_ARRAY", e[e.STRING_ARRAY = 2] = "STRING_ARRAY", e[e.IDENTIFIER_ARRAY = 3] = "IDENTIFIER_ARRAY";
}(J || (J = {}));
function Ut(e) {
  if (!e.spatialReference.isWGS84) throw new q("knowledge-graph:layer-support-utils", "The extentToInBoundsRings function only supports WGS84 spatial references.");
  return e.clone().normalize().map((t) => [[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]);
}
async function an(e, t) {
  const i = [], n = /* @__PURE__ */ new Map(), a = [];
  if (t.dataModel?.relationshipTypes) for (const r of t.dataModel.relationshipTypes) r.name && n.set(r.name, []);
  for (const r of e) n.has(r.typeName) && n.get(r.typeName)?.push(r.id);
  for (const [r, s] of n) {
    if (s.length < 1) continue;
    const p = new B({ openCypherQuery: `MATCH (n)-[r:${r}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`, bindParameters: { ids: s } });
    a.push(Q(t, p).then(async (o) => {
      const l = o.resultRowsStream.getReader();
      for (; ; ) {
        const { done: m, value: T } = await l.read();
        if (m) break;
        for (const u of T) i.push({ id: u[0], typeName: u[1] }), i.push({ id: u[2], typeName: u[3] });
      }
    }));
  }
  return await Promise.all(a), i;
}
async function on(e, t) {
  t ??= !1;
  const i = { generateAllSublayers: t, namedTypeDefinitions: /* @__PURE__ */ new Map() };
  return await Qt(e).then((n) => {
    Vt(n, i);
  }), i;
}
async function sn(e) {
  const t = await Ue(), i = new t.MapOfObjectIdentifierSets();
  Ht(i, t, e);
  const n = new t.MapOfObjectIdentifierSetsEncoder();
  try {
    n.set_map_of_identifier_sets(i), n.encode();
    const a = n.get_encoding_result();
    if (a.error.error_code !== 0) throw new q("knowledge-graph:layer-support-utils", a.error.error_message);
    const r = structuredClone(a.get_byte_buffer());
    return n.delete(), r;
  } finally {
    i.delete();
  }
}
function Ht(e, t, i) {
  for (const [n, a] of i.namedTypeDefinitions) {
    if (!a.members || a.useAllData) continue;
    const r = a.members.keys();
    let s = !1, p = !0;
    const o = new t.ObjectIdArray(), l = new t.StringArray(), m = new t.GlobalIdArray(), T = new t.IdentifierArray(), u = new t.ObjectIdentifierSet();
    for (const b of r) p && (s = !isNaN(Number(b)), p = !1), s ? o.add_objectid(Number(b)) : (l.add_string(b), m.add_globalid(b)), T.add_identifier(b);
    u.set_oid_array(o), u.set_string_array(l), u.set_globalid_array(m), u.set_identifier_array(T), o.delete(), l.delete(), m.delete(), T.delete(), e.put_identifier_set(n, u), u.delete();
  }
  return e;
}
async function Qt(e) {
  const t = await Ze(e, { responseType: "array-buffer" }), i = await t.data;
  return Jt(new Uint8Array(i));
}
async function Jt(e) {
  const t = new (await Ue()).MapOfObjectIdentifierSetsDecoder(), i = t.decode(new Uint8Array(e)), n = /* @__PURE__ */ new Map();
  if (i.error_code !== 0) throw new q("knowledge-graph:layer-support-utils", i.error_message);
  const a = t.get_map_of_identifier_sets(), r = a.keys, s = r.size();
  for (let p = 0; p < s; p++) {
    const o = r.get(p), l = a.query_identifier_set(o), m = [];
    if (l.id_array_type.value === J.GLOBALID_ARRAY) {
      const T = l.get_globalid_array(), u = T.count();
      for (let b = 0; b < u; b++) m.push(T.get_globalid_at(b));
    } else if (l.id_array_type.value === J.IDENTIFIER_ARRAY) {
      const T = l.get_identifier_array(), u = T.count();
      for (let b = 0; b < u; b++) m.push(T.get_identifier_at(b).toString());
    } else if (l.id_array_type.value === J.STRING_ARRAY) {
      const T = l.get_string_array(), u = T.count();
      for (let b = 0; b < u; b++) m.push(T.get_string_at(b));
    } else {
      if (l.id_array_type.value !== J.OID_ARRAY) throw new q("knowledge-graph:layer-support-utils", "Tried to encode an unexpected ID Array type.");
      {
        const T = l.get_oid_array(), u = T.count();
        for (let b = 0; b < u; b++) m.push(T.get_objectid_at(b).toString());
      }
    }
    n.set(o, m);
  }
  return t.delete(), n;
}
function Vt(e, t) {
  for (const [i, n] of e) {
    const a = j(t.namedTypeDefinitions, i, () => ({ useAllData: !1, members: /* @__PURE__ */ new Map() }));
    for (const r of n) a.members.has(r) || a.members.set(r, { id: r });
  }
  return t;
}
let O = class extends Ke {
  constructor(e) {
    super(e), this._processingCacheUpdatesLookup = /* @__PURE__ */ new Map(), this.knowledgeGraph = null, this.inclusionModeDefinition = { generateAllSublayers: !0, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.entityTypeNames = /* @__PURE__ */ new Set(), this.relationshipTypeNames = /* @__PURE__ */ new Set(), this.geographicLookup = /* @__PURE__ */ new Map(), this.sublayerCaches = /* @__PURE__ */ new Map(), this.nodeConnectionsLookup = /* @__PURE__ */ new Map(), this.relationshipConnectionsLookup = /* @__PURE__ */ new Map(), this.memberIdTypeLookup = /* @__PURE__ */ new Map();
    const t = /* @__PURE__ */ new Map();
    e.knowledgeGraph.dataModel.entityTypes?.forEach((i) => {
      i.name && (t.set(i.name, "entity"), this._processingCacheUpdatesLookup.set(i.name, []), e.inclusionModeDefinition && !e.inclusionModeDefinition?.generateAllSublayers || this.entityTypeNames.add(i.name), i.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(i.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), e.knowledgeGraph.dataModel.relationshipTypes?.forEach((i) => {
      i.name && (t.set(i.name, "relationship"), this._processingCacheUpdatesLookup.set(i.name, []), e.inclusionModeDefinition && !e.inclusionModeDefinition?.generateAllSublayers || this.relationshipTypeNames.add(i.name), i.properties?.forEach((n) => {
        n.geometryType && n.geometryType !== "esriGeometryNull" && this.geographicLookup.set(i.name, { name: n.name ?? "", geometryType: n.geometryType });
      }));
    }), e.inclusionModeDefinition?.namedTypeDefinitions.forEach((i, n) => {
      if (t.get(n) === "entity") this.entityTypeNames.add(n);
      else {
        if (t.get(n) !== "relationship") return X.getLogger(this).warn(`A named type, ${n}, was in the inclusion list that wasn't in the data model and will be removed`), void e.inclusionModeDefinition?.namedTypeDefinitions.delete(n);
        this.relationshipTypeNames.add(n);
      }
      const a = /* @__PURE__ */ new Map();
      i.members?.forEach((r) => {
        j(this.memberIdTypeLookup, r.id, () => /* @__PURE__ */ new Set()).add(n);
        const s = this.getById(r.id);
        s && a.set(r.id, s);
      }), this.sublayerCaches.set(n, a);
    });
  }
  addToLayer(e) {
    e.forEach(({ typeName: t, id: i }) => {
      if (!this.inclusionModeDefinition) throw new q("knowledge-graph:layer-data-manager", "You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");
      if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
        if (this.inclusionModeDefinition.namedTypeDefinitions.has(t)) {
          const n = this.inclusionModeDefinition.namedTypeDefinitions.get(t);
          n.members || (n.members = /* @__PURE__ */ new Map()), n.members.set(i, { id: i }), j(this.memberIdTypeLookup, i, () => /* @__PURE__ */ new Set()).add(t);
        }
      } else {
        const n = /* @__PURE__ */ new Map();
        n.set(i, { id: i }), this.inclusionModeDefinition.namedTypeDefinitions.set(t, { useAllData: !1, members: n }), j(this.memberIdTypeLookup, i, () => /* @__PURE__ */ new Set()).add(t);
      }
    });
  }
  getById(e) {
    return de.getInstance().readFromStoreById(e);
  }
  async getData(e, t, i) {
    if (t.objectType.name && this.inclusionModeDefinition?.namedTypeDefinitions && this.inclusionModeDefinition.namedTypeDefinitions.size > 0 && !this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name)) return [];
    let n;
    if (n = e || new H({ where: "1=1", outFields: ["*"] }), t.parentCompositeLayer.type === "link-chart") {
      const a = t.parentCompositeLayer, r = this._processingCacheUpdatesLookup.get(t.objectType.name ?? ""), s = n.outFields;
      s && s.length === 1 && s[0] === x && n.where === "1=1" || await Promise.all(r ?? []);
      const p = this.sublayerCaches.has(t.objectType.name ?? "") ? Array.from(this.sublayerCaches.get(t.objectType.name)?.values()) : [], o = [];
      return p.forEach((l) => {
        if (this.relationshipTypeNames.has(t.objectType.name)) {
          l.geometry = a.relationshipLinkChartDiagramLookup.get(l.attributes[t.objectIdField]);
          const m = this.memberIdTypeLookup.get(l.attributes[ce]), T = this.memberIdTypeLookup.get(l.attributes[he]), u = this._isEndEntitySpatial(m, l, ce), b = this._isEndEntitySpatial(T, l, he);
          l.attributes[z] = Number(u && b);
        } else {
          l.geometry = a.entityLinkChartDiagramLookup.get(l.attributes[t.objectIdField]);
          const m = this.geographicLookup.get(t.objectType.name);
          m && l.attributes[m.name] ? l.attributes[z] = 1 : l.attributes[z] = 0;
        }
        l.attributes[He] = l.geometry, o.push(l);
      }), o;
    }
    return this.retrieveDataFromService(n, t, i);
  }
  async getConnectedRecordIds(e, t) {
    const i = [];
    let n = "";
    const a = [], r = /* @__PURE__ */ new Map();
    if (e.forEach((m) => {
      if (this.memberIdTypeLookup.has(m)) for (const T of this.memberIdTypeLookup.get(m)) {
        if (!this.entityTypeNames.has(T)) return;
        r.has(T) ? r.get(T)?.push(m) : r.set(T, [m]);
      }
    }), t && t?.length !== 0) {
      for (const m of t) n = n + m + "|";
      n = n.slice(0, -1);
    }
    const s = {};
    let p = "", o = -1;
    for (const [m, T] of r) {
      o++, o !== 0 && (p += " UNION ");
      const u = `${m}_ids`;
      s[u] = T, p += t && t?.length !== 0 ? `MATCH (n:${m}) WHERE id(n) IN $${u} WITH n MATCH (n)-[r:${n}]-(m) RETURN id(r), type(r), id(m), labels(m)[0]` : `MATCH (n:${m}) WHERE id(n) IN $${u} WITH n MATCH (n)-[r]-(m) RETURN id(r), type(r), id(m), labels(m)[0]`;
    }
    if (!p) return i;
    const l = new Promise((m) => {
      (async () => {
        const T = (await Q(this.knowledgeGraph, new B({ openCypherQuery: p, bindParameters: s }))).resultRowsStream.getReader();
        try {
          for (; ; ) {
            const { done: u, value: b } = await T.read();
            if (u) break;
            for (let g = 0; g < b.length; g++) {
              const c = b[g];
              i.push({ id: c[0], typeName: c[1] }), i.push({ id: c[2], typeName: c[3] });
            }
          }
        } catch (u) {
          if (u.name !== "AbortError") throw u;
          X.getLogger(this).info("Request aborted as expected");
        }
      })().then(() => {
        m();
      });
    });
    return a.push(l), this.refreshCacheContent(), await Promise.all(a), i;
  }
  async getRelationshipsBetweenNodes(e, t) {
    const i = [], n = "MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)", a = (await Q(this.knowledgeGraph, new B({ openCypherQuery: n, bindParameters: { nodeIds: e, relationshipExclusionIds: t } }))).resultRowsStream.getReader();
    try {
      for (; ; ) {
        const { done: r, value: s } = await a.read();
        if (r) break;
        for (let p = 0; p < s.length; p++) {
          const o = s[p];
          i.push({ id: o[0], typeName: o[1] });
        }
      }
    } catch (r) {
      if (r.name !== "AbortError") throw r;
      X.getLogger(this).info("Request aborted as expected");
    }
    return i;
  }
  async getRelationshipsFromNodes(e, t, i) {
    const n = [], a = "MATCH (n)-[r]-(m) WHERE id(n) IN $targetEntityIds AND id(m) in $possibleConnectionEntityIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)", r = (await Q(this.knowledgeGraph, new B({ openCypherQuery: a, bindParameters: { targetEntityIds: e, possibleConnectionEntityIds: t, relationshipExclusionIds: i } }))).resultRowsStream.getReader();
    try {
      for (; ; ) {
        const { done: s, value: p } = await r.read();
        if (s) break;
        for (let o = 0; o < p.length; o++) {
          const l = p[o];
          n.push({ id: l[0], typeName: l[1] });
        }
      }
    } catch (s) {
      if (s.name !== "AbortError") throw s;
      X.getLogger(this).info("Request aborted as expected");
    }
    return n;
  }
  async refreshCacheContent(e, t, i, n = !0) {
    const a = de.getInstance(), r = [], s = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
    this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && p.set(o.name, o);
    }), this.knowledgeGraph.dataModel.relationshipTypes?.forEach((o) => {
      o.name && p.set(o.name, o);
    }), e || this.inclusionModeDefinition ? e ? e.forEach((o) => {
      if (this.memberIdTypeLookup.has(o)) for (const l of this.memberIdTypeLookup.get(o)) s.has(l) ? s.get(l)?.push(o) : s.set(l, [o]);
    }) : this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((o, l) => {
      o.useAllData ? s.set(l, null) : o.members && o.members.forEach((m) => {
        s.has(l) && s.get(l) !== null ? s.get(l)?.push(m.id) : s.set(l, [m.id]);
      });
    }) : (this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && s.set(o.name, null);
    }), this.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && s.set(o.name, null);
    }));
    for (const [o, l] of s) {
      const m = new Promise((T) => {
        (async () => {
          const b = /* @__PURE__ */ new Set(), g = [];
          let c, N = "", L = !1;
          if (t || p.get(o)?.properties?.forEach((w) => {
            w.name && b.add(w.name);
          }), i && this.geographicLookup.has(o)) {
            const w = this.geographicLookup.get(o)?.name;
            w && b.add(w);
          }
          if (this.entityTypeNames.has(o)) N = `MATCH (n:${o}) ${l ? "WHERE id(n) IN $ids " : ""}return ID(n)`, b.forEach((w) => {
            N += `, n.${w}`, g.push(w);
          });
          else {
            if (!this.relationshipTypeNames.has(o)) throw new q("knowledge-graph:layer-data-manager", `The graph type of ${o} could not be determined. Was this type set in the KG data model and inclusion definition?`);
            L = !0, N = `MATCH ()-[n:${o}]->() ${l ? "WHERE id(n) IN $ids " : ""}return ID(n), id(startNode(n)), id(endNode(n))`, b.forEach((w) => {
              N += `, n.${w}`, g.push(w);
            });
          }
          c = new B(l ? { openCypherQuery: N, bindParameters: { ids: l } } : { openCypherQuery: N });
          const D = (await Q(this.knowledgeGraph, c)).resultRowsStream.getReader();
          for (; ; ) {
            const { done: w, value: M } = await D.read();
            if (w) break;
            const I = [];
            for (let _ = 0; _ < M.length; _++) {
              const v = M[_];
              let S = 0, A = 0;
              const R = { properties: {} };
              for (R.id = v[S], S++, A++, L && (R.originId = v[S], S++, A++, R.destinationId = v[S], S++, A++, j(this.nodeConnectionsLookup, R.originId, () => /* @__PURE__ */ new Set()).add(R.id), j(this.nodeConnectionsLookup, R.destinationId, () => /* @__PURE__ */ new Set()).add(R.id), j(this.relationshipConnectionsLookup, R.id, () => [R.originId, R.destinationId])); S < v.length; S++) R.properties[g[S - A]] = v[S];
              I.push(R);
            }
            const h = a.writeToStore(I, x, this.geographicLookup.get(o)?.name);
            this.sublayerCaches.has(o) || this.sublayerCaches.set(o, /* @__PURE__ */ new Map()), n && !this.inclusionModeDefinition?.namedTypeDefinitions.has(o) && this.inclusionModeDefinition?.namedTypeDefinitions.set(o, { useAllData: !1, members: /* @__PURE__ */ new Map() }), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members && (this.inclusionModeDefinition.namedTypeDefinitions.get(o).members = /* @__PURE__ */ new Map());
            const $ = this.sublayerCaches.get(o);
            h.forEach((_) => {
              $?.set(_.attributes[x], _), n && !this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members.has(_.attributes[x]) && (this.inclusionModeDefinition?.namedTypeDefinitions.get(o).members.set(_.attributes[x], { id: _.attributes[x] }), j(this.memberIdTypeLookup, _.attributes[x], () => /* @__PURE__ */ new Set()).add(o));
            });
          }
        })().then(() => {
          T(null);
        });
      });
      r.push(m), this._processingCacheUpdatesLookup.get(o)?.push(m);
    }
    await Promise.all(r);
  }
  removeFromLayer(e) {
    const t = /* @__PURE__ */ new Set(), i = new Set(e.map((n) => n.id));
    for (const n of e) t.add(n.typeName), this.memberIdTypeLookup.get(n.id)?.size === 1 ? this.memberIdTypeLookup.delete(n.id) : this.memberIdTypeLookup.get(n.id)?.delete(n.typeName), this.inclusionModeDefinition?.namedTypeDefinitions.forEach((a, r) => {
      r === n.typeName && a.members?.has(n.id) && a.members.delete(n.id);
    });
    t.forEach((n) => {
      this.sublayerCaches.get(n)?.forEach((a, r) => {
        i.has(r) && this.sublayerCaches.get(n)?.delete(r);
      });
    });
  }
  async retrieveDataFromService(e, t, i) {
    const n = de.getInstance(), a = /* @__PURE__ */ new Set(), r = [];
    let s, p = "", o = [];
    const l = t.graphType === "relationship", m = this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData, T = t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);
    let u = !m && T ? Array.from(T).sort() : null;
    if (this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData) this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData && e.objectIds != null && (u = e.objectIds);
    else if (e.objectIds != null && u && u.length > 0) {
      const g = e.objectIds;
      e.objectIds = u.filter((c) => g.includes(c));
    } else if (e.objectIds != null) u = e.objectIds;
    else {
      if (this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name) && (!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members || this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size < 1)) return e.objectIds = [], [];
      e.objectIds = u;
    }
    if (e.outFields != null) {
      const g = e.outFields;
      g.includes("*") ? t.fields.forEach((c) => {
        a.add(c.name);
      }) : g.forEach((c) => {
        c !== x && c !== t.geometryFieldName && a.add(c);
      });
    }
    if (e.geometry != null) {
      const g = e.geometry;
      let c;
      const N = t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition, L = N?.spatialReference, D = N?.serviceCapabilities?.geometryCapabilities;
      let w = D?.geometryMaxBoundingRectangleSizeX, M = D?.geometryMaxBoundingRectangleSizeY;
      if (g.type === "point") {
        let I = g;
        I.spatialReference?.isWGS84 || (await ue(I.spatialReference, F), I = te(I, F)), c = new ne({ spatialReference: F, xmin: I.x - 1e-4, ymin: I.y - 1e-4, xmax: I.x + 1e-4, ymax: I.y + 1e-4 });
      } else g?.extent?.spatialReference && !g.spatialReference?.isWGS84 ? (await ue(g.extent.spatialReference, F), c = te(g.extent, F)) : c = g.extent;
      if (w && M && L) {
        if (L.wkid !== 4326) {
          const I = new ne({ spatialReference: L, xmax: w, ymax: M }), h = te(I, F);
          w = h.xmax, M = h.ymax;
        }
        if (c.xmax - c.xmin > w) throw new q("knowledge-graph:layer-data-manager", `Extent x bounds should be within ${w}° latitude, limit exceeded`);
        if (c.ymax - c.ymin > M) throw new q("knowledge-graph:layer-data-manager", `Extent y bounds should be within ${M}° longitude, limit exceeded`);
      }
      if (e.where != null && e.where !== "1=1") {
        const I = await Te(e.where.toUpperCase(), t.fieldsIndex);
        t.fields.forEach((h) => {
          I.fieldNames.includes(h.name) && a.add(h.name);
        });
      }
      p = l ? `Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))` : `Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`, t.geometryFieldName && a.add(t.geometryFieldName), a.forEach((I) => {
        p += `, n.${I}`, r.push(I);
      }), s = new B({ openCypherQuery: p, bindParameters: { param_filter_geom: new Ge({ rings: Ut(c) }) } });
    } else {
      let g = "";
      if (e.where != null && e.where !== "1=1") {
        const L = await Te(e.where, t.fieldsIndex);
        t.fields.forEach((h) => {
          L.fieldNames.includes(h.name) && a.add(h.name);
        });
        const D = /* @__PURE__ */ new Set(["column-reference", "string", "number", "binary-expression"]), w = /* @__PURE__ */ new Set(["=", "<", "<=", "<>", ">", ">=", "AND", "OR", "LIKE"]);
        let M = !1;
        const I = (h) => {
          if (h.type === "column-reference") return `n.${h.column}`;
          if (h.type === "string") return `'${h.value}'`;
          if (h.type === "number") return `${h.value}`;
          if (h.type === "binary-expression" && D.has(h.left.type) && D.has(h.right.type) && w.has(h.operator)) return `${I(h.left)} ${h.operator} ${I(h.right)}`;
          if (h.type === "binary-expression" && h.operator === "LIKE") {
            let $ = "";
            if (h.left.type === "function" && h.left.args.value[0].type === "column-reference") $ += `lower(n.${h.left.args.value[0].column})`;
            else {
              if (h.left.type !== "column-reference") return M = !0, "";
              $ += `lower(n.${h.left.column})`;
            }
            if ($ += " CONTAINS (", h.right.type !== "string") return M = !0, "";
            {
              let _ = h.right.value;
              _.charAt(0) === "%" && (_ = _.slice(1)), _.charAt(_.length - 1) === "%" && (_ = _.slice(0, -1)), $ += `'${_.toLowerCase()}')`;
            }
            return $;
          }
          return M = !0, "";
        };
        g = I(L.parseTree), M && (g = "");
      }
      let c = "";
      c = l ? `Match ()-[n:${t.objectType.name}]->()` : `Match (n:${t.objectType.name})`;
      let N = !1;
      u && (N = !0, c += " WHERE ID(n) IN $ids"), g && (c += N ? " AND" : " WHERE", c += ` ${g}`), c += " return ID(n)", l && (c += ", id(startNode(n)), id(endNode(n))"), e.returnGeometry && t.geometryFieldName && a.add(t.geometryFieldName), a.forEach((L) => {
        c += `, n.${L}`, r.push(L);
      }), s = new B(u ? { openCypherQuery: c, bindParameters: { ids: u } } : { openCypherQuery: c });
    }
    const b = (await Q(t.parentCompositeLayer.dataManager.knowledgeGraph, s, i)).resultRowsStream.getReader();
    for (; ; ) {
      const { done: g, value: c } = await b.read();
      if (g) break;
      const N = [];
      for (let L = 0; L < c.length; L++) {
        const D = c[L];
        let w = 0, M = 0;
        const I = { properties: {} };
        for (I.id = D[w], w++, M++, l && (I.originId = D[w], w++, M++, I.destinationId = D[w], w++, M++); w < D.length; w++) I.properties[r[w - M]] = D[w];
        N.push(I);
      }
      o = o.concat(n.writeToStore(N, x, t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name));
    }
    return o;
  }
  _isEndEntitySpatial(e, t, i) {
    for (const n of e ?? []) if (this.entityTypeNames.has(n)) {
      const a = this.geographicLookup.get(n), r = a && this.sublayerCaches.get(n)?.get(t.attributes[i]);
      if (a && r?.attributes[a.name]) return !0;
    }
    return !1;
  }
};
d([y()], O.prototype, "knowledgeGraph", void 0), d([y()], O.prototype, "inclusionModeDefinition", void 0), d([y()], O.prototype, "entityTypeNames", void 0), d([y()], O.prototype, "relationshipTypeNames", void 0), d([y()], O.prototype, "geographicLookup", void 0), d([y()], O.prototype, "sublayerCaches", void 0), d([y()], O.prototype, "nodeConnectionsLookup", void 0), d([y()], O.prototype, "relationshipConnectionsLookup", void 0), d([y()], O.prototype, "memberIdTypeLookup", void 0), O = d([me("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")], O);
const Pe = Xe(), Wt = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.fields = [], this.fieldsIndex = null;
    }
  };
  return d([y(Pe.fields)], t.prototype, "fields", void 0), d([y(Pe.fieldsIndex)], t.prototype, "fieldsIndex", void 0), t = d([me("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")], t), t;
};
function k(e) {
  if (!e.json) return e;
  e.json.write = Be(e.json.write);
  const t = e.json.origins;
  if (!t) return e;
  let i;
  for (i in t) {
    const n = t[i];
    n && (n.write = Be(n.write));
  }
  return e;
}
function Be(e) {
  return typeof e == "object" && e ? (e.enabled !== !1 && (e.overridePolicy = Yt(e)), e) : e === !0 ? Y() : e;
}
function Yt(e) {
  const { target: t, writer: i, overridePolicy: n, ...a } = e;
  return function(r, s) {
    const p = Qe.call(this, r, s);
    return p.enabled ? { ...a, ...p } : p;
  };
}
function Y() {
  return { overridePolicy: Qe };
}
function Qe(e, t) {
  const i = !!this.geometryType;
  let n = { enabled: i };
  return i && (n = { ...n, ...Je.call(this, e, t) }), n;
}
function Je(e, t) {
  return { ignoreOrigin: this.originIdOf(t) > At.DEFAULTS };
}
let f = class extends Wt(et(tt(nt(it(rt(at(ot(st(Ot))))))))) {
  constructor(e) {
    super(e), this.blendMode = "normal", this.capabilities = qt(!1, !1), this.charts = null, this.definitionExpression = null, this.displayField = "", this.effect = null, this.elevationInfo = null, this.featureEffect = null, this.graphType = null, this.labelsVisible = !0, this.labelingInfo = null, this.layerType = null, this.legendEnabled = !0, this.maxScale = 0, this.minScale = 0, this.objectIdField = x, this.objectType = null, this.opacity = 1, this.orderBy = null, this.parent = null, this.parentCompositeLayer = null, this.persistenceEnabled = !0, this.popupEnabled = !0, this.popupTemplate = null, this.refreshInterval = 0, this.source = { openPorts: () => this.load().then(() => {
      const t = new MessageChannel();
      return new lt(t.port1, { channel: t, client: { queryFeatures: (i, n = {}) => {
        const a = H.fromJSON(i);
        return this.queryFeaturesJSON(a, n);
      } } }), [t.port2];
    }) }, this.type = "knowledge-graph-sublayer", this.useViewTime = !0, this.visible = !0;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const t = this._normalizeFeatureReduction(e);
    this._set("featureReduction", t);
  }
  get fields() {
    const e = [];
    return this.objectType?.properties?.forEach((t) => {
      const i = t.fieldType === "esriFieldTypeOID" ? "esriFieldTypeInteger" : t.fieldType;
      e.push(ee.fromJSON({ name: t.name, type: i, alias: t.alias, defaultValue: t.defaultValue, editable: t.editable, nullable: t.nullable }));
    }), e.push(ee.fromJSON({ name: this.objectIdField, type: "esriFieldTypeString", alias: this.objectIdField, editable: !1 }), ee.fromJSON({ name: be, type: "esriFieldTypeInteger", alias: be, editable: !1 }), ee.fromJSON({ name: z, type: "esriFieldTypeInteger", alias: z, editable: !1 })), e;
  }
  get geometryType() {
    if (this.parentCompositeLayer?.type === "link-chart") return this.graphType === "relationship" ? "polyline" : "point";
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.geometryType;
    return t && t !== "esriGeometryNull" ? U.fromJSON(t) : null;
  }
  get geometryFieldName() {
    return this.parentCompositeLayer?.type === "link-chart" ? He : this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name)?.name ?? null;
  }
  get graphTypeName() {
    return this.objectType?.name;
  }
  get hasM() {
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.name;
    return (t ? this.objectType?.properties?.[t] : null)?.hasM ?? !1;
  }
  get hasZ() {
    const e = this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name), t = e?.name;
    return (t ? this.objectType?.properties?.[t] : null)?.hasZ ?? !1;
  }
  set renderer(e) {
    pt(e, this.fieldsIndex), this._set("renderer", e);
  }
  get renderer() {
    return this._isOverridden("renderer") ? this._get("renderer") : this.parentCompositeLayer?.type === "link-chart" ? this.graphType === "relationship" ? le(pe(U.toJSON("polyline")).renderer) : le(pe(U.toJSON("point")).renderer) : le(pe(U.toJSON(this.geometryType)).renderer);
  }
  get spatialReference() {
    return this.parentCompositeLayer?.dataManager?.knowledgeGraph?.dataModel?.spatialReference ?? dt.WGS84;
  }
  set timeInfo(e) {
    this._set("timeInfo", e);
  }
  get title() {
    return this._isOverridden("title") ? this._get("title") : this.graphTypeName;
  }
  set title(e) {
    this._set("title", e);
  }
  writeTitle(e, t) {
    t.title = e ?? "Layer";
  }
  createPopupTemplate(e) {
    return yt(this, e);
  }
  createQuery() {
    return new H({ where: "1=1", outFields: ["*"] });
  }
  getField(e) {
    for (let t = 0; t < this.fields.length; t++) if (this.fields[t].name === e) return this.fields[t];
    return null;
  }
  getFieldDomain(e, t) {
    return null;
  }
  async queryFeatures(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e), a = ut.fromJSON(await n.executeQuery(i.toJSON(), t?.signal));
    return a.features.forEach((r) => {
      r.sourceLayer = this;
    }), a;
  }
  async queryFeaturesJSON(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e);
    return await n.executeQuery(i.toJSON(), t?.signal);
  }
  async queryFeatureCount(e, t) {
    const { resolvedQuery: i, queryEngine: n } = await this._setupQueryObjects(e);
    return n.executeQueryForCount(i.toJSON(), t?.signal);
  }
  async queryExtent(e = {}, t) {
    const i = { ...e, returnGeometry: !0 }, { resolvedQuery: n, queryEngine: a } = await this._setupQueryObjects(i), r = await a.executeQueryForExtent(n.toJSON(), t?.signal);
    let s;
    return s = r.extent?.xmin != null && r.extent?.xmax != null && r.extent?.ymin != null && r.extent?.ymax != null ? new ne(r.extent) : new ne(), { count: r.count, extent: s };
  }
  async queryObjectIds(e, t) {
    const i = H.from(e);
    let n;
    if (this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) n = this._cachedQueryEngine;
    else {
      const a = await this.parentCompositeLayer.dataManager.getData(i, this, t);
      n = this.loadQueryEngine(a);
    }
    return n.executeQueryForIds(i.toJSON(), t?.signal);
  }
  loadQueryEngine(e) {
    const t = new jt({ geometryType: U.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ }), i = new Ft({ fieldsIndex: this.fieldsIndex.toJSON(), geometryType: U.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: this.spatialReference.toJSON(), timeInfo: this.timeInfo?.toJSON(), featureStore: t });
    return i.featureStore.addMany(e), i;
  }
  async refreshCachedQueryEngine() {
    const e = await this.parentCompositeLayer.dataManager.getData(new H({ where: "1=1", outFields: [x] }), this);
    this._cachedQueryEngine = this.loadQueryEngine(e);
  }
  load(e) {
    return this.addResolvingPromise(this.parent.load(e).then(() => {
      ct(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }
  async _setupQueryObjects(e, t) {
    const i = H.from(e), n = i.geometry;
    let a;
    if (n && !n.spatialReference?.isWGS84 && (await ue(n.spatialReference, F), i.geometry = te(n instanceof Ge || n instanceof ht || n instanceof mt ? n : n.extent, F)), this.parentCompositeLayer.type === "link-chart" && this._cachedQueryEngine) a = this._cachedQueryEngine;
    else {
      const r = await this.parentCompositeLayer.dataManager.getData(i, this, t);
      a = this.loadQueryEngine(r);
    }
    return { resolvedQuery: i, queryEngine: a };
  }
};
d([y(k(C(ft)))], f.prototype, "blendMode", void 0), d([y()], f.prototype, "capabilities", void 0), d([y({ json: { origins: { "web-scene": { write: !1 } }, write: Y() } })], f.prototype, "charts", void 0), d([y({ readOnly: !0 })], f.prototype, "defaultPopupTemplate", null), d([y({ type: String, json: { origins: { service: { read: !1 } }, name: "layerDefinition.definitionExpression", write: { ignoreOrigin: !0 } } })], f.prototype, "definitionExpression", void 0), d([y()], f.prototype, "displayField", void 0), d([y(k(C(gt)))], f.prototype, "effect", void 0), d([y()], f.prototype, "elevationInfo", void 0), d([y(k(C(Tt)))], f.prototype, "featureEffect", void 0), d([y(k(C(bt)))], f.prototype, "featureReduction", null), d([y()], f.prototype, "fields", null), d([y()], f.prototype, "geometryType", null), d([y()], f.prototype, "geometryFieldName", null), d([y({ type: ["entity", "relationship"], nonNullable: !0, json: { write: { isRequired: !0, ignoreOrigin: !0 } } })], f.prototype, "graphType", void 0), d([y({ type: String, nonNullable: !0, json: { write: { isRequired: !0, ignoreOrigin: !0 } } })], f.prototype, "graphTypeName", null), d([y()], f.prototype, "hasM", null), d([y()], f.prototype, "hasZ", null), d([y({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], f.prototype, "id", void 0), d([y(k(C(wt)))], f.prototype, "labelsVisible", void 0), d([y({ type: [Et], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: It, write: Y() } })], f.prototype, "labelingInfo", void 0), d([y({ readOnly: !0, json: { read: !1, write: { writer(e, t) {
  switch (this.parentCompositeLayer.type) {
    case "link-chart":
      t.layerType = "LinkChartSubLayer";
      break;
    case "knowledge-graph":
      t.layerType = this.geometryType ? "KnowledgeGraphSubLayer" : "KnowledgeGraphSubTable";
  }
}, isRequired: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } })], f.prototype, "layerType", void 0), d([y(k(C(Nt)))], f.prototype, "legendEnabled", void 0), d([y(k(C(Lt)))], f.prototype, "maxScale", void 0), d([y(k(C(Dt)))], f.prototype, "minScale", void 0), d([y()], f.prototype, "objectIdField", void 0), d([y()], f.prototype, "objectType", void 0), d([y(k(C(_t)))], f.prototype, "opacity", void 0), d([y(k(C(Mt)))], f.prototype, "orderBy", void 0), d([y({ clonable: !1 })], f.prototype, "parent", void 0), d([y()], f.prototype, "parentCompositeLayer", void 0), d([y(k(C(Rt)))], f.prototype, "popupEnabled", void 0), d([y({ type: St, json: { name: "popupInfo", write: { ignoreOrigin: !0 } } })], f.prototype, "popupTemplate", void 0), d([y({ type: Number, json: { write: { overridePolicy: Je } } })], f.prototype, "refreshInterval", void 0), d([y({ types: vt, json: { name: "layerDefinition.drawingInfo.renderer", write: Y() } })], f.prototype, "renderer", null), d([y()], f.prototype, "source", void 0), d([y()], f.prototype, "spatialReference", null), d([y({ type: $t, json: { name: "layerDefinition.timeInfo", write: !0, origins: { "web-document": { name: "layerDefinition.timeInfo", read: !0, write: !0 }, "portal-item": { name: "layerDefinition.timeInfo", read: !0, write: !0 } } } })], f.prototype, "timeInfo", null), d([y({ type: String, json: { write: { isRequired: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } })], f.prototype, "title", null), d([Ct("title")], f.prototype, "writeTitle", null), d([y({ json: { read: !1 } })], f.prototype, "type", void 0), d([y(k(C(kt)))], f.prototype, "useViewTime", void 0), d([y({ type: Boolean, json: { name: "visibility", write: Y() } })], f.prototype, "visible", void 0), f = d([me("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")], f);
const ln = f;
export {
  an as A,
  O as E,
  on as F,
  $e as L,
  sn as R,
  Me as a,
  Ce as b,
  nn as c,
  x as d,
  rn as e,
  _e as f,
  be as g,
  Se as h,
  de as i,
  ve as m,
  He as n,
  Ie as o,
  he as r,
  Ee as s,
  ce as t,
  ln as u,
  Re as v
};
//# sourceMappingURL=KnowledgeGraphSublayer-jMgF5Hrc.js.map
