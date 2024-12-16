import { ez as Te, ex as Ee, eB as Ne, eC as Ie, a8 as q, aA as ye, s as Q, cz as De, f6 as xe, G as _, bW as pe, J as Re, f7 as ge, dx as _e, dF as U, D as ne, b3 as fe, bQ as b, bR as M, bS as Ae, eM as Oe } from "./main-DZxT3i7S.js";
import { u as B, E as ve, A as Se, b as Ge, v as Pe, L as He, m as $e, h as Fe, a as Ue, f as Be, d as T, s as v, t as V, r as Y, e as ze, n as w, o as me, g as We, c as Le, i as je } from "./KnowledgeGraphSublayer-jMgF5Hrc.js";
import { F as Qe } from "./knowledgeGraphService-9wJAFHhQ.js";
var J;
(function(e) {
  e.MULTIPLIER = "multiplier", e.ABSOLUTE = "absoluteValue";
})(J || (J = {}));
let m = class extends Te(Ee(Ne(Ie(Oe)))) {
  constructor(e) {
    if (super(e), this.dataPreloadedInLocalCache = !1, this.defaultLinkChartConfig = null, this._currentLinkChartConfig = { layoutMode: "RADIAL_TREE" }, this._graphTypeLookup = /* @__PURE__ */ new Map(), this.dataManager = null, this.knowledgeGraph = null, this.layers = new (q.ofType(B))(), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.linkChartExtent = new ye({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 }), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.operationalLayerType = "LinkChartLayer", this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new (q.ofType(B))(), this.type = "link-chart", this.chronologicalAuxiliaryGraphics = null, this._originalInclusionList = e?.inclusionModeDefinition, e?.dataPreloadedInLocalCache && !e?.inclusionModeDefinition) throw new Q("knowledge-graph:linkchart-layer-constructor", "If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
    this.addHandles(De(() => this.layers.concat(this.tables), (t, i) => this._handleSublayersChange(t, i), xe));
  }
  normalizeCtorArgs(e) {
    if (!e) return {};
    const { url: t, title: i, dataPreloadedInLocalCache: a, defaultLinkChartConfig: n } = e;
    return { url: t, title: i, dataPreloadedInLocalCache: a, defaultLinkChartConfig: n };
  }
  _initializeLayerProperties(e) {
    if (!this.title && this.url) {
      const o = this.url.split("/");
      this.title = o[o.length - 2];
    }
    const t = /* @__PURE__ */ new Set();
    let i = [], a = [];
    if (e.inclusionModeDefinition && (!e.inclusionModeDefinition.namedTypeDefinitions || e.inclusionModeDefinition.namedTypeDefinitions.size < 1)) throw new Q("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
    e.knowledgeGraph.dataModel.entityTypes?.forEach((o) => {
      o.name && this._graphTypeLookup.set(o.name, o);
    }), e.knowledgeGraph.dataModel.relationshipTypes?.forEach((o) => {
      o.name && this._graphTypeLookup.set(o.name, o);
    }), e.inclusionModeDefinition?.generateAllSublayers ? (i = e.knowledgeGraph.dataModel.entityTypes ?? [], a = e.knowledgeGraph.dataModel.relationshipTypes ?? []) : e.inclusionModeDefinition?.namedTypeDefinitions && e.inclusionModeDefinition?.namedTypeDefinitions.size > 0 ? e.inclusionModeDefinition?.namedTypeDefinitions.forEach((o, u) => {
      const c = this._graphTypeLookup.get(u);
      if (!c) return _.getLogger(this).warn(`A named type, ${u}, was in the inclusion list that wasn't in the data model and will be removed`), void e.inclusionModeDefinition?.namedTypeDefinitions.delete(u);
      c.type === "relationship" ? t.has(u) || (t.add(u), a.push(c)) : c.type === "entity" ? t.has(u) || (t.add(u), i.push(c)) : (_.getLogger(this).warn(`A named type, ${u}, was in the inclusion list that wasn't properly modeled and will be removed`), e.inclusionModeDefinition?.namedTypeDefinitions.delete(u));
    }) : (i = e.knowledgeGraph.dataModel.entityTypes ?? [], a = e.knowledgeGraph.dataModel.relationshipTypes ?? []);
    const n = new ve({ knowledgeGraph: e.knowledgeGraph, inclusionModeDefinition: e.inclusionModeDefinition });
    this.knowledgeGraph = e.knowledgeGraph, this.memberEntityTypes = i, this.memberRelationshipTypes = a, this.dataManager = n;
  }
  load(e) {
    const t = async () => {
      const i = [], a = [];
      this.loadLayerAssumingLocalCache(), await Le(this), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = !1), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((n) => {
        n.useAllData = !1;
      }), await this._initializeDiagram(), this.layers.forEach((n) => {
        a.push(n.refreshCachedQueryEngine()), i.push(new Promise((o) => {
          n.on("layerview-create", () => {
            o(null);
          });
        }));
      }), this.tables.forEach((n) => {
        a.push(n.refreshCachedQueryEngine());
      }), await Promise.all(a);
    };
    return this.addResolvingPromise(new Promise((i) => {
      Qe(this.url).then(async (a) => {
        if (this._initializeLayerProperties({ knowledgeGraph: a, inclusionModeDefinition: this._originalInclusionList }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size || (this.dataManager.inclusionModeDefinition = { generateAllSublayers: !1, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((n) => {
          n.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name, { useAllData: !0 });
        }), this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((n) => {
          n.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name, { useAllData: !0 });
        })), this.dataPreloadedInLocalCache) {
          const n = je.getInstance();
          for (const [o, u] of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions ?? []) for (const c of u.members?.values() ?? []) {
            const L = n.readFromStoreById(`${o}__${c.id}`);
            L && pe(this.dataManager.sublayerCaches, o, () => /* @__PURE__ */ new Map()).set(c.id, L);
          }
          await t();
        } else {
          const n = this.defaultLinkChartConfig?.layoutMode === "GEOGRAPHIC";
          this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0, !1, n, !0).then(async () => {
            Re(e), await t();
          }));
        }
        i(null);
      });
    })), Promise.resolve(this);
  }
  set inclusionModeDefinition(e) {
    this.loadStatus !== "loaded" && this.loadStatus !== "failed" ? this._set("inclusionModeDefinition", e) : _.getLogger(this).error("#inclusionModeDefinition", "inclusionModeDefinition cannot be changed after the layer is loaded.");
  }
  async addRecords(e, t) {
    let i = [];
    t?.cascadeAddRelationshipEndNodes && this.dataManager.knowledgeGraph.dataModel && (i = await Se(e, this.dataManager.knowledgeGraph));
    const a = e.concat(i).filter((n) => !this.sublayerIdsCache.get(n.typeName)?.has(n.id));
    await this._handleNewRecords(a);
  }
  async removeRecords(e, { cascadeRemoveRelationships: t = !0, recalculateLayout: i = !1 } = { cascadeRemoveRelationships: !0, recalculateLayout: !1 }) {
    let a = [];
    for (const o of e) this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(o.typeName)?.useAllData === !1 && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(o.typeName)?.members?.has(o.id) && a.push(o);
    if (t) {
      const o = /* @__PURE__ */ new Set(), u = [];
      for (const c of a) if (this.dataManager.nodeConnectionsLookup.has(c.id)) for (const L of this.dataManager.nodeConnectionsLookup.get(c.id)) o.add(L);
      for (const c of o) if (this.dataManager.memberIdTypeLookup.has(c)) for (const L of this.dataManager.memberIdTypeLookup.get(c)) this.dataManager.relationshipTypeNames.has(L) && u.push({ id: c, typeName: L });
      a = a.concat(u);
    }
    this.dataManager.removeFromLayer(a);
    for (const o of a) this.sublayerIdsCache.get(o.typeName)?.delete(o.id), this.dataManager.relationshipTypeNames.has(o.typeName) ? this.relationshipLinkChartDiagramLookup.delete(o.id) : this.entityLinkChartDiagramLookup.delete(o.id);
    i && await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode, this._currentLinkChartConfig.layoutOptions);
    const n = [];
    return this.layers.forEach((o) => {
      n.push(o.refreshCachedQueryEngine());
    }), await Promise.all(n), this._refreshNamedTypes(), a;
  }
  async expand(e, t) {
    const i = await this.dataManager.getConnectedRecordIds(e, t), a = i.filter((n) => !this.sublayerIdsCache.get(n.typeName)?.has(n.id));
    return await this._handleNewRecords(i), { records: a };
  }
  loadLayerAssumingLocalCache() {
    const e = [...this.memberRelationshipTypes, ...this.memberEntityTypes];
    this.originIdOf("layers") === ge.DEFAULTS ? this._createSublayers(e, this.layers, (t) => !!t.geometryType) : this._updateSublayers(e, this.layers), this.originIdOf("tables") === ge.DEFAULTS ? this._createSublayers(e, this.tables, (t) => !t.geometryType) : this._updateSublayers(e, this.tables), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t, i) => {
      const a = pe(this.sublayerIdsCache, i, () => /* @__PURE__ */ new Set());
      t.members?.forEach(({ id: n, linkChartLocation: o }) => {
        if (a.add(n), o) {
          const u = o instanceof _e ? o : U(o);
          this.dataManager.relationshipTypeNames.has(i) ? this.relationshipLinkChartDiagramLookup.set(n, u) : this.entityLinkChartDiagramLookup.set(n, u);
        }
      });
    });
  }
  async calculateLinkChartLayout(e = "RADIAL_TREE", t) {
    const i = [], a = [], n = [];
    this.dataManager.sublayerCaches.forEach((s, l) => {
      this.dataManager.entityTypeNames.has(l) ? s.forEach((r) => {
        i.push({ typeName: l, feature: r });
      }) : this.dataManager.relationshipTypeNames.has(l) && s.forEach((r) => {
        a.push({ typeName: l, feature: r });
      });
    }), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map();
    const o = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), k = new Uint8Array(i.length), p = new Float64Array(i.length), g = new Float64Array(i.length), f = new Float64Array(i.length), se = new Float64Array(i.length), K = new Uint32Array(a.length), X = new Uint32Array(a.length), oe = new Float64Array(a.length), re = new Float64Array(a.length), y = [], Ce = "FORCE_DIRECTED", x = new ye({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 });
    let P, le = "FORCE_DIRECTED", d = 0, E = 0;
    const be = Ge.apply;
    switch (le = e === "GEOGRAPHIC" ? Ce : e, le) {
      case "FORCE_DIRECTED":
        P = Be.apply;
        break;
      case "COMMUNITY":
        P = Ue.apply;
        break;
      case "HIERARCHICAL":
        P = Fe.apply;
        break;
      case "RADIAL_TREE":
        P = $e.apply;
        break;
      case "SMART_TREE":
        P = He.apply;
        break;
      default:
        P = Pe.apply;
    }
    let Z = !1;
    i.forEach(({ typeName: s, feature: l }) => {
      if (e !== "CHRONOLOGICAL_SINGLE" && e !== "CHRONOLOGICAL_MULTIPLE" && t?.lockedNodeLocations?.has(l.attributes[T])) {
        e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(s) ? k[d] = v.IsGeographic : k[d] = v.None;
        const r = t.lockedNodeLocations.get(l.attributes[T]);
        p[d] = r.x, g[d] = r.y;
      } else if (e === "GEOGRAPHIC" && this.dataManager.geographicLookup.has(s)) {
        k[d] = v.IsGeographic;
        let r = null;
        const I = l.attributes[this.dataManager.geographicLookup.get(s).name];
        switch (this.dataManager.geographicLookup.get(s)?.geometryType) {
          case "esriGeometryPoint":
            p[d] = I?.x, g[d] = I?.y;
            break;
          case "esriGeometryPolygon":
            r = I?.centroid, r?.x != null && r?.y != null ? (p[d] = r.x, g[d] = r.y) : k[d] = v.IsMovable;
            break;
          case "esriGeometryPolyline":
          case "esriGeometryMultipoint":
            r = I?.extent?.center, r?.x != null && r?.y != null ? (p[d] = r.x, g[d] = r.y) : k[d] = v.IsMovable;
            break;
          default:
            k[d] = v.IsMovable;
        }
        (p[d] == null || g[d] == null || Number.isNaN(p[d]) || Number.isNaN(g[d])) && (k[d] = v.IsMovable, p[d] = 0, g[d] = 0);
      } else if (e === "CHRONOLOGICAL_SINGLE" || e === "CHRONOLOGICAL_MULTIPLE") {
        !Z && t?.lockedNodeLocations?.has(l.attributes[T]) && (Z = !0);
        const r = t?.timeInfoByTypeName?.get(s), I = r?.startField, A = I && r?.startField ? l.attributes[I] : null;
        f[d] = A ? new Date(A).getTime() : NaN;
        const C = r?.endField, D = C && r?.endField ? l.attributes[C] : null;
        se[d] = D ? new Date(D).getTime() : NaN, p[d] = 0, g[d] = 0, k[d] = v.IsMovable;
      } else k[d] = v.IsMovable, p[d] = 0, g[d] = 0;
      L.set(l.attributes[T], d), y[d] = { feature: l, typeName: s }, d++;
    }), Z && _.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");
    let he = !1;
    const ee = /* @__PURE__ */ new Map();
    a.forEach((s) => {
      const l = s.feature.attributes[V], r = s.feature.attributes[Y], I = L.get(l), A = L.get(r), C = t?.timeInfoByTypeName?.get(s.typeName), D = t?.timeInfoByTypeName ? C?.startField : null, O = D ? s.feature.attributes[D] : null, j = C?.endField, H = j ? s.feature.attributes[j] : null;
      if (I !== void 0 && A !== void 0) {
        let S = l + "-" + r;
        e !== "CHRONOLOGICAL_SINGLE" && e !== "CHRONOLOGICAL_MULTIPLE" || (S = S + "-" + O + "-" + H);
        const F = ee.get(S);
        F?.has(s.typeName) || (K[E] = I, X[E] = A, e !== "CHRONOLOGICAL_SINGLE" && e !== "CHRONOLOGICAL_MULTIPLE" || (oe[E] = O ? new Date(O).getTime() : NaN, re[E] = H ? new Date(H).getTime() : NaN), F === void 0 ? ee.set(S, /* @__PURE__ */ new Map([[s.typeName, E]])) : F.set(s.typeName, E), E++), n.push(s);
      } else he = !0, this.relationshipLinkChartDiagramLookup.set(l, null);
    }), he && _.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");
    const de = this._validateLayoutSettings(e, t), te = this._convertLayoutSettingsToCalculationSettings(de);
    await ze();
    let z = !1, N = null;
    if (e === "CHRONOLOGICAL_SINGLE" || e === "CHRONOLOGICAL_MULTIPLE") {
      let s;
      ({ success: z, links: N, graphics: s } = be(k, p, g, f, se, K.subarray(0, E), X.subarray(0, E), oe.subarray(0, E), re.subarray(0, E), e === "CHRONOLOGICAL_MULTIPLE", t?.chronologicalLayoutSettings ?? {})), z && (this.chronologicalAuxiliaryGraphics = s);
    } else ({ success: z, links: N } = P(k, p, g, K.subarray(0, E), X.subarray(0, E), te.computationBudgetTime, te.idealEdgeLengthMultiplier, te.repulsionRadiusMultiplier));
    if (!z) throw new Q("knowledge-graph:layout-failed", "Attempting to arrange the records in the specified layout failed");
    for (let s = 0; s < y.length; s++) {
      if (g[s] > 84.9999 ? g[s] = 84.9999 : g[s] < -84.9999 && (g[s] = -84.9999), p[s] > 179.9999 ? p[s] = 179.9999 : p[s] < -179.9999 && (p[s] = -179.9999), y[s].feature.attributes[w] = new ne(p[s], g[s]), o.has(y[s].typeName))
        o.get(y[s].typeName)?.set(y[s].feature.attributes[T], y[s].feature);
      else {
        const r = /* @__PURE__ */ new Map();
        r.set(y[s].feature.attributes[T], y[s].feature), o.set(y[s].typeName, r);
      }
      c.set(y[s].feature.attributes[T], y[s].feature);
      const l = U(y[s].feature.attributes[w]);
      this.entityLinkChartDiagramLookup.set(y[s].feature.attributes[T], y[s].feature.attributes[w] ? l : null), y[s].feature.attributes[w].x < x.xmin && (x.xmin = y[s].feature.attributes[w].x), y[s].feature.attributes[w].x > x.xmax && (x.xmax = y[s].feature.attributes[w].x), y[s].feature.attributes[w].y < x.ymin && (x.ymin = y[s].feature.attributes[w].y), y[s].feature.attributes[w].y > x.ymax && (x.ymax = y[s].feature.attributes[w].y);
    }
    if (this.linkChartExtent.xmin = x.xmin, this.linkChartExtent.xmax = x.xmax, this.linkChartExtent.ymin = x.ymin, this.linkChartExtent.ymax = x.ymax, !N) throw new Q("knowledge-graph:layout-failed", "Attempting to retrieve link geometry from diagram engine failed");
    const W = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set();
    for (let s = 0; s < n.length; s++) {
      const l = [], r = n[s], I = r.feature.attributes[V], A = r.feature.attributes[Y];
      let C = I + "-" + A;
      if (e === "CHRONOLOGICAL_SINGLE" || e === "CHRONOLOGICAL_MULTIPLE") {
        const h = t?.timeInfoByTypeName?.get(r.typeName), R = t?.timeInfoByTypeName ? h?.startField : null, G = R ? r.feature.attributes[R] : null, $ = h?.endField;
        C += "-" + G + "-" + ($ ? r.feature.attributes[$] : null);
      }
      const D = ee.get(C).get(r.typeName), O = D === 0 ? 0 : N?.vertexEndIndex[D - 1];
      if (!ue.has(D)) {
        if (ue.add(D), N.types[D] === me.Recursive) {
          const h = [N.vertices[2 * O], N.vertices[2 * O + 1]], R = [N.vertices[2 * (O + 1)], N.vertices[2 * (O + 1) + 1]], G = [0.5 * (h[0] + R[0]), 0.5 * (h[1] + R[1])], $ = [G[0] - h[0], G[1] - h[1]], we = [G[0] + $[1], G[1] - $[0]], ke = [G[0] - $[1], G[1] + $[0]];
          l.push(h), l.push(we), l.push(R), l.push(ke), l.push(h);
        } else {
          if (N.types[D] !== me.Regular) {
            _.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");
            continue;
          }
          for (let h = O; h < N.vertexEndIndex[D]; h++) l.push([N.vertices[2 * h], N.vertices[2 * h + 1]]);
        }
        if (e !== "CHRONOLOGICAL_SINGLE" && e !== "CHRONOLOGICAL_MULTIPLE") {
          const h = y[L.get(I)]?.feature.attributes[w], R = y[L.get(A)]?.feature.attributes[w];
          l[0][0] === h.x && l[0][1] === h.y || (l[0] = [h.x, h.y]), l[l.length - 1][0] === R.x && l[l.length - 1][1] === R.y || (l[l.length - 1] = [R.x, R.y]);
        }
        for (let h = 1; h < l.length - 1; h++) l[h][1] > 85.5 ? l[h][1] = 85.5 : l[h][1] < -85.5 && (l[h][1] = -85.5), l[h][0] > 179.9999 ? l[h][0] = 179.9999 : l[h][0] < -179.9999 && (l[h][0] = -179.9999);
        W.has(C) ? W.get(C).push(l) : W.set(C, [l]);
      }
      const j = W.get(C);
      ae.has(C) || (ae.set(C, /* @__PURE__ */ new Map()), ie.set(C, /* @__PURE__ */ new Map()));
      const H = ae.get(C), S = ie.get(C);
      H.has(r.typeName) || (H.set(r.typeName, j.shift()), S.set(r.typeName, 0));
      const F = H.get(r.typeName);
      S.set(r.typeName, S.get(r.typeName) + 1);
      const ce = new fe({ paths: [F] });
      if (r.feature.attributes[w] = ce, u.has(r.typeName))
        u.get(r.typeName)?.set(r.feature.attributes[T], r.feature);
      else {
        const h = /* @__PURE__ */ new Map();
        h.set(r.feature.attributes[T], r.feature), u.set(r.typeName, h);
      }
      c.set(r.feature.attributes[T], r.feature);
      const Me = U(r.feature.attributes[w]);
      this.relationshipLinkChartDiagramLookup.set(r.feature.attributes[T], r.feature.attributes[w] ? Me : null);
    }
    for (const s of n) s.feature.attributes[We] = ie.get(s.feature.attributes[V] + "-" + s.feature.attributes[Y])?.get(s.typeName) ?? null;
    return this._currentLinkChartConfig = { layoutMode: e, layoutOptions: de }, { nodes: o, links: u, idMap: c };
  }
  async applyNewLinkChartLayout(e = "RADIAL_TREE", t) {
    const i = [];
    await this._calculateLayoutWithSublayerTimeInfo(e, t), this.layers.forEach((a) => {
      i.push(a.refreshCachedQueryEngine());
    }), await Promise.all(i), this._refreshNamedTypes();
  }
  getCurrentNodeLocations() {
    const e = /* @__PURE__ */ new Map();
    return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t) => {
      t?.members?.forEach((i) => {
        const a = i.linkChartLocation;
        let n;
        const o = i.id;
        a && (n = "x" in a ? { x: a.x, y: a.y } : { x: a.coords[0], y: a.coords[1] }, e.set(o, new ne({ x: n.x, y: n.y })));
      });
    }), e;
  }
  async synchronizeInclusionListWithCache() {
    return new Promise((e) => {
      this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((t, i) => {
        if (t.useAllData = !1, t.members && t.members.size > 0) {
          if (!this.dataManager.sublayerCaches.get(i)) return;
          const a = new Set(Array.from(this.dataManager.sublayerCaches.get(i).keys()));
          Array.from(t.members.keys()).filter((n) => !a.has(n)).forEach((n) => {
            t.members?.delete(n);
          });
        }
      }), e();
    });
  }
  async refreshLinkChartCache(e) {
    await this.dataManager.refreshCacheContent(e);
    const t = [];
    this.layers.forEach((i) => {
      t.push(i.refreshCachedQueryEngine());
    }), await Promise.all(t), this._refreshNamedTypes();
  }
  async connectBetweenEntities(e) {
    let t = [];
    for (const a of this.dataManager.relationshipTypeNames) {
      const n = this.sublayerIdsCache.get(a);
      n && (t = t.concat(Array.from(n.keys())));
    }
    const i = await this.dataManager.getRelationshipsBetweenNodes(e, t);
    return await this._handleNewRecords(i), { records: i };
  }
  async connectFromEntities(e) {
    let t = [];
    for (const n of this.dataManager.relationshipTypeNames) {
      const o = this.sublayerIdsCache.get(n);
      o && (t = t.concat(Array.from(o.keys())));
    }
    let i = [];
    for (const n of this.dataManager.entityTypeNames) {
      const o = this.sublayerIdsCache.get(n);
      o && (i = i.concat(Array.from(o)));
    }
    const a = await this.dataManager.getRelationshipsFromNodes(e, i, t);
    return await this._handleNewRecords(a), { records: a };
  }
  getCurrentLayout() {
    return this._currentLinkChartConfig.layoutMode;
  }
  async _calculateLayoutWithSublayerTimeInfo(e = "RADIAL_TREE", t) {
    const i = /* @__PURE__ */ new Map();
    this.layers.forEach((a) => {
      i.set(a.objectType.name, a.timeInfo);
    }), await this.calculateLinkChartLayout(e, { timeInfoByTypeName: i, ...t });
  }
  async _handleNewRecords(e) {
    const t = [];
    this.dataManager.addToLayer(e);
    for (const a of e) this.sublayerIdsCache.has(a.typeName) || (this.sublayerIdsCache.set(a.typeName, /* @__PURE__ */ new Set()), t.push(a.typeName)), this.sublayerIdsCache.get(a.typeName).add(a.id);
    for (const a of t) {
      const n = this._graphTypeLookup.get(a);
      if (n) {
        const o = this._createSublayer(n);
        n.type === "entity" ? this.dataManager.entityTypeNames.add(a) : this.dataManager.relationshipTypeNames.add(a), o.geometryType ? this.layers.push(o) : this.tables.push(o), this.dataManager.sublayerCaches.set(a, /* @__PURE__ */ new Map());
      }
    }
    await Le(this, t), await this.dataManager.refreshCacheContent(e.map((a) => a.id));
    const i = Object.assign({}, this._currentLinkChartConfig.layoutOptions);
    i.lockedNodeLocations = /* @__PURE__ */ new Map();
    for (const [a, n] of this.entityLinkChartDiagramLookup.entries()) n && i.lockedNodeLocations.set(a, new ne(n.coords[0], n.coords[1]));
    await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode, i);
  }
  _createSublayers(e, t, i) {
    e.forEach((a) => {
      const n = this._createSublayer(a);
      i(n) && t.push(n), this._updateSublayerCaches(a);
    });
  }
  _updateSublayers(e, t) {
    t.forEach((i) => {
      i.parentCompositeLayer = this;
      const a = e.find((n) => n.type === i.graphType && n.name === i.graphTypeName);
      a && (i.objectType = a, i.read({ title: a.name }, { origin: "service" }), this._updateSublayerCaches(a));
    });
  }
  _updateSublayerCaches(e) {
    const t = this.dataManager.sublayerCaches;
    t.has(e.name) || t.set(e.name, /* @__PURE__ */ new Map());
  }
  async _initializeDiagram() {
    this.defaultLinkChartConfig ? this.defaultLinkChartConfig.doNotRecalculateLayout ? (this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e, t) => {
      e?.members?.forEach((i) => {
        const a = i.linkChartLocation;
        let n;
        const o = i.id;
        if (!a) return;
        n = "x" in a ? { x: a.x, y: a.y } : { x: a.coords[0], y: a.coords[1] };
        const u = U(n);
        this.dataManager.relationshipTypeNames.has(t) ? this.relationshipLinkChartDiagramLookup.set(o, u) : this.entityLinkChartDiagramLookup.set(o, u), this.linkChartExtent.xmin > n.x && (this.linkChartExtent.xmin = n.x), this.linkChartExtent.xmax < n.x && (this.linkChartExtent.xmax = n.x), this.linkChartExtent.ymin > n.y && (this.linkChartExtent.ymin = n.y), this.linkChartExtent.ymax < n.y && (this.linkChartExtent.ymax = n.y);
      });
    }), this.memberRelationshipTypes.forEach((e) => {
      e.name && this.dataManager.sublayerCaches.get(e.name)?.forEach((t) => {
        const i = this.relationshipLinkChartDiagramLookup.get(t.attributes[V]), a = this.relationshipLinkChartDiagramLookup.get(t.attributes[Y]);
        if (i && a) {
          const n = U(new fe({ paths: [[[i.coords[0], i.coords[1]], [a.coords[0], a.coords[1]]]] }));
          this.relationshipLinkChartDiagramLookup.set(t.attributes[T], n);
        } else this.relationshipLinkChartDiagramLookup.set(t.attributes[T], null);
      });
    })) : await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode, { lockedNodeLocations: this.getCurrentNodeLocations(), ...this.defaultLinkChartConfig.layoutOptions || {} }) : await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE", { lockedNodeLocations: this.getCurrentNodeLocations() });
  }
  _refreshNamedTypes() {
    for (const e of this.layers) e.emit("refresh", { dataChanged: !0 });
    for (const e of this.tables) e.emit("refresh", { dataChanged: !0 });
  }
  _validateLayoutSettings(e, t) {
    const i = (f) => typeof f == "number" && !isNaN(f), a = (f) => i(f) && f >= 1, n = (f) => i(f) && f >= 1, o = (f) => Object.values(J).includes(f), u = (f) => i(f) && f >= 0, c = { organicLayoutSettings: {}, chronologicalLayoutSettings: {} };
    if (!(/* @__PURE__ */ new Set(["FORCE_DIRECTED", "COMMUNITY", "GEOGRAPHIC", "CHRONOLOGICAL_MULTIPLE", "CHRONOLOGICAL_SINGLE"])).has(e) || !t) return c;
    t.organicLayoutSettings ??= {};
    const { computationBudgetTime: L, repulsionRadiusMultiplier: k, idealEdgeLength: p, idealEdgeLengthType: g } = t.organicLayoutSettings;
    if (n(L) ? c.organicLayoutSettings.computationBudgetTime = L : L !== void 0 && _.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"), a(k) ? c.organicLayoutSettings.repulsionRadiusMultiplier = k : k !== void 0 && _.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"), e === "GEOGRAPHIC" && (p !== void 0 || g !== void 0) && (o(g) ? c.organicLayoutSettings.idealEdgeLengthType = g : g !== void 0 && _.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'), u(p) ? c.organicLayoutSettings.idealEdgeLength = p : p !== void 0 && _.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")), (e === "CHRONOLOGICAL_MULTIPLE" || e === "CHRONOLOGICAL_SINGLE") && t.chronologicalLayoutSettings) {
      const f = t.chronologicalLayoutSettings;
      f.durationLineWidth && f.durationLineWidth < 0 && _.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting");
    }
    return c;
  }
  _convertLayoutSettingsToCalculationSettings(e) {
    e.organicLayoutSettings ??= {};
    let t = e.organicLayoutSettings.idealEdgeLength;
    return e.organicLayoutSettings.idealEdgeLengthType === J.ABSOLUTE && (t === void 0 ? t = -1 : t *= -1), { computationBudgetTime: e.organicLayoutSettings.computationBudgetTime, repulsionRadiusMultiplier: e.organicLayoutSettings.repulsionRadiusMultiplier, idealEdgeLengthMultiplier: t };
  }
  _createSublayer(e) {
    return new B({ objectType: e, parentCompositeLayer: this, graphType: e.type });
  }
  _handleSublayersChange(e, t) {
    t && (t.forEach((i) => {
      i.parent = null;
    }), this.removeHandles("sublayers-owner")), e && (e.forEach((i) => {
      i.parent = this;
    }), this.addHandles([e.on("after-add", ({ item: i }) => {
      i.parent = this;
    }), e.on("after-remove", ({ item: i }) => {
      i.parent = null;
    })], "sublayers-owner"));
  }
};
b([M()], m.prototype, "dataPreloadedInLocalCache", void 0), b([M()], m.prototype, "defaultLinkChartConfig", void 0), b([M()], m.prototype, "dataManager", void 0), b([M()], m.prototype, "inclusionModeDefinition", null), b([M()], m.prototype, "knowledgeGraph", void 0), b([M({ type: q.ofType(B), json: { write: { ignoreOrigin: !0 } } })], m.prototype, "layers", void 0), b([M()], m.prototype, "entityLinkChartDiagramLookup", void 0), b([M()], m.prototype, "relationshipLinkChartDiagramLookup", void 0), b([M()], m.prototype, "linkChartExtent", void 0), b([M()], m.prototype, "memberEntityTypes", void 0), b([M()], m.prototype, "memberRelationshipTypes", void 0), b([M({ type: ["LinkChartLayer"] })], m.prototype, "operationalLayerType", void 0), b([M()], m.prototype, "sublayerIdsCache", void 0), b([M({ type: q.ofType(B), json: { write: { ignoreOrigin: !0 } } })], m.prototype, "tables", void 0), b([M({ json: { read: !1 } })], m.prototype, "type", void 0), b([M({ json: { read: !1 } })], m.prototype, "chronologicalAuxiliaryGraphics", void 0), m = b([Ae("esri.layers.LinkChartLayer")], m);
const Je = m;
export {
  Je as default
};
//# sourceMappingURL=LinkChartLayer-CfG0MnWp.js.map
