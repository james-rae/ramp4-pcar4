import { ex as M, eB as T, ey as _, eN as S, ez as D, eA as L, eC as v, eO as A, a8 as y, cz as C, f6 as E, B as N, s as g, f7 as p, f8 as k, G as u, p as $, e_ as G, eY as b, e$ as R, bW as I, bQ as o, bR as r, eD as O, f9 as U, eG as z, bS as F, er as j, aw as P, eM as x } from "./main-DZxT3i7S.js";
import { u as l, c as w, E as K, F as B, R as H } from "./KnowledgeGraphSublayer-jMgF5Hrc.js";
import { F as V } from "./knowledgeGraphService-9wJAFHhQ.js";
let n = class extends M(T(_(S(D(L(v(A(x)))))))) {
  constructor(e) {
    super(e), this._graphTypeLookup = /* @__PURE__ */ new Map(), this._namedTypesModified = !1, this.dataManager = null, this.definitionSetMap = null, this.knowledgeGraph = null, this.layers = new (y.ofType(l))(), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.operationalLayerType = "KnowledgeGraphLayer", this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new (y.ofType(l))(), this.type = "knowledge-graph", this.url = null, this.addHandles(C(() => this.layers.concat(this.tables), (t, i) => this._handleSublayersChange(t, i), E));
  }
  load(e) {
    return this.addResolvingPromise(this._doLoad(e)), Promise.resolve(this);
  }
  async _doLoad(e) {
    try {
      await this.loadFromPortal({ supportedTypes: ["Knowledge Graph Layer"] }, e);
    } catch (t) {
      N(t);
    }
    await this._fetchMetadata(), await this._initializeLayerProperties(), this.loadLayerAssumingLocalCache(), await w(this);
  }
  async _fetchMetadata() {
    if (!this.url) throw new g("knowledge-graph:missing-url", "KnowledgeGraphLayer must be created with a url");
    const e = await V(this.url);
    this.knowledgeGraph = e, this._forEachGraphType((t) => {
      t.name && this._graphTypeLookup.set(t.name, t);
    });
  }
  async _initializeLayerProperties() {
    this.originIdOf("inclusionModeDefinition") === p.USER ? this._validateInclusionModeDefinition() : await this._initializeInclusionModeDefinition(), this._setMemberTypes(), this.dataManager = new K({ knowledgeGraph: this.knowledgeGraph, inclusionModeDefinition: this.inclusionModeDefinition });
  }
  async _initializeInclusionModeDefinition() {
    const e = this.definitionSetMap ? await B(this.definitionSetMap, !0) : { generateAllSublayers: !0, namedTypeDefinitions: /* @__PURE__ */ new Map() };
    [...this.layers.toArray(), ...this.tables.toArray()].forEach((t) => {
      const i = this._graphTypeLookup.get(t.graphTypeName);
      i && !e.namedTypeDefinitions.has(i.name) && e.namedTypeDefinitions.set(i.name, { useAllData: !0 });
    }), this.setAtOrigin("inclusionModeDefinition", e, k(this.originIdOf("definitionSetMap")));
  }
  _validateInclusionModeDefinition() {
    const { inclusionModeDefinition: e } = this;
    if (!e) return;
    const { namedTypeDefinitions: t } = e;
    if (t?.size > 0) t.forEach((i, a) => {
      const s = this._graphTypeLookup.get(a);
      if (!s) return u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`), void t.delete(a);
      s.type !== "relationship" && s.type !== "entity" && (u.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`), t.delete(a));
    });
    else if (!e.generateAllSublayers) throw new g("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
  }
  _setMemberTypes() {
    let e = [], t = [];
    const { inclusionModeDefinition: i } = this, a = i?.namedTypeDefinitions;
    !i || i.generateAllSublayers ? (e = this.knowledgeGraph.dataModel?.entityTypes ?? [], t = this.knowledgeGraph.dataModel?.relationshipTypes ?? []) : a && a.size > 0 && a.forEach((s, d) => {
      const h = this._graphTypeLookup.get(d);
      switch (h?.type) {
        case "relationship":
          t.push(h);
          break;
        case "entity":
          e.push(h);
      }
    }), this.memberEntityTypes = e, this.memberRelationshipTypes = t;
  }
  _forEachGraphType(e) {
    [...this.knowledgeGraph.dataModel?.entityTypes ?? [], ...this.knowledgeGraph.dataModel?.relationshipTypes ?? []].forEach((t) => {
      e(t);
    });
  }
  _refreshNamedTypes() {
    this._namedTypesModified = !0;
    for (const e of this.layers) e.emit("refresh", { dataChanged: !0 });
    for (const e of this.tables) e.emit("refresh", { dataChanged: !0 });
  }
  async _handleNewRecords(e) {
    const t = [];
    this.dataManager.addToLayer(e);
    for (const i of e) this.sublayerIdsCache.has(i.typeName) || (this.sublayerIdsCache.set(i.typeName, /* @__PURE__ */ new Set()), t.push(i.typeName)), this.sublayerIdsCache.get(i.typeName).add(i.id);
    for (const i of t) {
      const a = this._graphTypeLookup.get(i);
      a && (this._addSublayer(a), a.type === "entity" ? this.dataManager.entityTypeNames.add(i) : this.dataManager.relationshipTypeNames.add(i), this.dataManager.sublayerCaches.set(i, /* @__PURE__ */ new Map()));
    }
    await w(this, t), this._refreshNamedTypes();
  }
  _createSublayers(e, t, i) {
    e.forEach((a) => {
      const s = this._createSublayer(a);
      i(s) && t.push(s), this._updateSublayerCaches(a);
    });
  }
  _addSublayer(e) {
    const t = this._createSublayer(e);
    return t.geometryType ? this.layers.push(t) : this.tables.push(t), t;
  }
  _createSublayer(e) {
    return new l({ objectType: e, parentCompositeLayer: this, graphType: e.type });
  }
  _updateSublayers(e, t) {
    t.forEach((i) => {
      i.parentCompositeLayer = this;
      const a = e.find((s) => s.type === i.graphType && s.name === i.graphTypeName);
      a && (i.objectType = a, this._updateSublayerCaches(a));
    });
  }
  _updateSublayerCaches(e) {
    const t = this.dataManager.sublayerCaches;
    t.has(e.name) || t.set(e.name, /* @__PURE__ */ new Map());
  }
  _saveUrlAsNewResource(e, t, i, a) {
    e[t] = "<pending>", i.pendingOperations.push(Y(this.inclusionModeDefinition).then((s) => {
      const d = Q(a);
      e[t] = d.itemRelativeUrl, i.toAdd.push({ resource: d, content: { type: "blob", blob: s }, compress: !1, finish: (h) => {
        this.definitionSetMap = h.url;
      } });
    }));
  }
  _displaysAllRecords(e) {
    for (const [, { useAllData: t }] of e.namedTypeDefinitions) if (!t) return !1;
    return !0;
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
  readDefinitionSetMap(e, t, i) {
    return $(e, i);
  }
  writeDefinitionSetMap(e, t, i, a) {
    const s = a?.portalItem, d = a?.resources, h = G(a?.origin);
    if (!s || !d || h == null) return void (e && (t[i] = b(e, a)));
    const { inclusionModeDefinition: f } = this;
    if (!f || this._displaysAllRecords(f)) return void (this.definitionSetMap = null);
    const c = this.originIdOf("inclusionModeDefinition");
    if (c === p.USER || this._namedTypesModified || h < c) this._saveUrlAsNewResource(t, i, d, s);
    else if (h === c && e) {
      const m = b(e, a);
      R(m) ? this._saveUrlAsNewResource(t, i, d, s) : t[i] = m;
    }
  }
  set inclusionModeDefinition(e) {
    this.loadStatus !== "loaded" && this.loadStatus !== "failed" ? this._set("inclusionModeDefinition", e) : u.getLogger(this).error("#inclusionModeDefinition", "inclusionModeDefinition cannot be changed after the layer is loaded.");
  }
  loadLayerAssumingLocalCache() {
    const e = [...this.memberEntityTypes, ...this.memberRelationshipTypes];
    this.originIdOf("layers") === p.DEFAULTS ? this._createSublayers(e, this.layers, (t) => !!t.geometryType) : this._updateSublayers(e, this.layers), this.originIdOf("tables") === p.DEFAULTS ? this._createSublayers(e, this.tables, (t) => !t.geometryType) : this._updateSublayers(e, this.tables), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t, i) => {
      const a = I(this.sublayerIdsCache, i, () => /* @__PURE__ */ new Set());
      t.members?.forEach((s) => {
        a.add(s.id);
      });
    });
  }
  async addRecords(e) {
    await this._handleNewRecords(e);
  }
  async removeRecords(e) {
    const t = [];
    for (const i of e) this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData === !1 && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id) && t.push(i);
    this.dataManager.removeFromLayer(t);
    for (const i of t) this.sublayerIdsCache.get(i.typeName)?.delete(i.id);
    return this._refreshNamedTypes(), t;
  }
};
o([r()], n.prototype, "dataManager", void 0), o([r({ json: { write: { ignoreOrigin: !0, writerEnsuresNonNull: !0 } } })], n.prototype, "definitionSetMap", void 0), o([O("definitionSetMap")], n.prototype, "readDefinitionSetMap", null), o([U("definitionSetMap")], n.prototype, "writeDefinitionSetMap", null), o([r()], n.prototype, "inclusionModeDefinition", null), o([r()], n.prototype, "knowledgeGraph", void 0), o([r({ type: y.ofType(l), json: { write: { ignoreOrigin: !0 } } })], n.prototype, "layers", void 0), o([r()], n.prototype, "memberEntityTypes", void 0), o([r()], n.prototype, "memberRelationshipTypes", void 0), o([r({ type: ["KnowledgeGraphLayer"] })], n.prototype, "operationalLayerType", void 0), o([r()], n.prototype, "sublayerIdsCache", void 0), o([r({ type: y.ofType(l), json: { write: { ignoreOrigin: !0 } } })], n.prototype, "tables", void 0), o([r({ json: { read: !1 } })], n.prototype, "type", void 0), o([r(z)], n.prototype, "url", void 0), n = o([F("esri.layers.KnowledgeGraphLayer")], n);
const X = n;
async function Y(e) {
  const t = await H(e);
  return new Blob([t], { type: "application/x-protobuf" });
}
function Q(e) {
  const t = `definitionSetMap-${j()}.dat`, i = P("knowledgeGraphLayer", t);
  return e.resourceFromPath(i);
}
export {
  X as default
};
//# sourceMappingURL=KnowledgeGraphLayer-BvS77qtA.js.map
