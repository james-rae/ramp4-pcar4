import { eB as w, ex as F, eC as I, el as A, j2 as M, a8 as C, cz as Q, j3 as U, j4 as D, bm as S, bW as V, bQ as t, bR as r, eF as O, hQ as N, hu as P, bS as _, j5 as Z, eM as c, hk as G, hm as E, ho as k, hp as z, T as g, eU as J, j6 as H, hs as K, ht as W, hr as X, hR as Y, hS as ee, hv as te, cB as re, hw as ie, hx as ne, f7 as oe, eL as ae, cD as se, j7 as le, j8 as pe, hi as de, hl as ye, ey as ue, eN as he, ez as ce, eA as me, eO as fe, eP as ge, B as be, s as f, fH as ve, I as we, aw as Fe, j9 as Ie, fS as h, ja as Oe, jb as _e, jc as je, U as Te, jd as Se, e as L, je as x, S as Ee, eE as Le, hM as xe, hA as $e } from "./main-DZxT3i7S.js";
import { g as $ } from "./utils-3zMy94Kq.js";
import Re from "./FeatureLayerSource-fdRzzoyt.js";
import { a as Ce } from "./fetchService-BbX6Wqej.js";
let d = class extends w(F(I(c))) {
  constructor(e) {
    super(e), this._layerCache = new A(20, (i) => i.destroy()), this._oidToReference = new M(), this._layerToReference = /* @__PURE__ */ new Map(), this.legendEnabled = !0, this.layers = new C(), this.maximumVisibleSublayers = 10, this.opacity = 1, this.parent = null, this.persistenceEnabled = !0, this.title = "Layers in view", this.type = "catalog-dynamic-group", this.visible = !0;
  }
  initialize() {
    this.addHandles([this.layers.on("after-add", ({ item: e }) => {
      e.parent = this;
    }), this.layers.on("after-remove", ({ item: e }) => {
      e.parent = null;
    }), Q(() => this._orderBy, () => {
      this._updateLayerSortValues(), this._sortAllLayers();
    })]);
  }
  load(e) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  destroy() {
    this._layerCache.destroy(), this._oidToReference.clear(), this._layerToReference.clear();
  }
  get _orderBy() {
    return this.parent ? this.parent.orderBy?.find((e) => !e.valueExpression && e.field) ?? new U({ field: this.parent.objectIdField }) : null;
  }
  get _referenceComparator() {
    const e = this._orderBy;
    if (!this.parent || !e) return () => 0;
    const i = this.parent.fieldsIndex.get(e.field), a = $(i?.toJSON().type, e.order === "descending"), o = $("esriFieldTypeOID", e.order === "descending");
    return (l, p) => a(p.sortValue, l.sortValue) || o(p.objectId, l.objectId);
  }
  get fullExtent() {
    return this.parent?.fullExtent ?? null;
  }
  get updating() {
    return D(this._oidToReference, ({ pending: e }) => e != null);
  }
  acquireLayer(e) {
    if (this.destroyed) return S();
    const i = this._getLayerReference(e);
    return i.count++, S(() => {
      i.count--, i.count || this._destroyLayerReference(i);
    });
  }
  _getLayerReference(e) {
    const i = e.getObjectId();
    return V(this._oidToReference, i, () => {
      const a = e.getObjectId(), o = `${a}`, l = e.getAttribute(this.parent.itemSourceField), p = new Ve(e, a, l), y = this._layerCache.pop(o);
      return y ? (this._addLayer(p, y), p) : (p.pending = this.parent.createLayerFromFootprint(e).then((u) => {
        p.count ? this._addLayer(p, u) : (this.destroyed || this._layerCache.get(o) || this._layerCache.put(o, u), p.layer = null);
      }).catch(() => {
      }).finally(() => {
        p.pending = null;
      }), p);
    });
  }
  _destroyLayerReference(e) {
    e.layer && (this._layerToReference.delete(e.layer), this.layers.remove(e.layer), this.destroyed ? e.layer.destroy() : this._layerCache.put(`${e.objectId}`, e.layer), e.layer = null), this._oidToReference.delete(e.objectId);
  }
  _addLayer(e, i) {
    e.layer = i, i.persistenceEnabled = !1, this._layerToReference.set(i, e), this._updateLayerSortValue(e), this.layers.add(i), this._sortAllLayers();
  }
  _updateLayerSortValues() {
    for (const e of this._layerToReference.values()) this._updateLayerSortValue(e);
  }
  _updateLayerSortValue(e) {
    this._orderBy && (e.sortValue = e.footprint.getAttribute(this._orderBy.field));
  }
  _sortAllLayers() {
    this.layers.sort((e, i) => this._referenceComparator(this._layerToReference.get(e), this._layerToReference.get(i)));
  }
};
t([r()], d.prototype, "_orderBy", null), t([r({ readOnly: !0 })], d.prototype, "_referenceComparator", null), t([r(O)], d.prototype, "legendEnabled", void 0), t([r({ type: ["show", "hide", "hide-children"], json: { write: !0 } })], d.prototype, "listMode", void 0), t([r({ readOnly: !0 })], d.prototype, "fullExtent", null), t([r({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], d.prototype, "id", void 0), t([r({ readOnly: !0 })], d.prototype, "layers", void 0), t([r({ type: N, range: { min: 0, max: 50 }, json: { write: !0, default: 10 } })], d.prototype, "maximumVisibleSublayers", void 0), t([r(P)], d.prototype, "opacity", void 0), t([r({ clonable: !1 })], d.prototype, "parent", void 0), t([r({ type: String, nonNullable: !0, json: { write: { ignoreOrigin: !0, isRequired: !0 } } })], d.prototype, "title", void 0), t([r({ json: { read: !1 } })], d.prototype, "type", void 0), t([r({ readOnly: !0 })], d.prototype, "updating", null), t([r({ type: Boolean, json: { name: "visibility", write: !0 } })], d.prototype, "visible", void 0), d = t([_("esri.layers.catalog.CatalogDynamicGroupLayer")], d);
const q = d;
class Ve {
  constructor(i, a, o) {
    this.footprint = i, this.objectId = a, this.itemSource = o, this.count = 0, this.layer = null, this.sortValue = void 0, this._pending = Z(null);
  }
  get pending() {
    return this._pending.value;
  }
  set pending(i) {
    this._pending.value = i;
  }
}
function Pe() {
  const e = new ae({ style: "solid", color: [0, 0, 0, 0], outline: { style: "solid", color: [96, 96, 96, 0.75], width: 0.75 } });
  return new se({ symbol: e });
}
let n = class extends w(G(F(I(c)))) {
  constructor(e) {
    super(e), this.attributeTableTemplate = null, this.charts = null, this.editingEnabled = !0, this.elevationInfo = null, this.formTemplate = null, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.maxScale = 0, this.minScale = 0, this.opacity = 1, this.parent = null, this.persistenceEnabled = !0, this.popupEnabled = !0, this.popupTemplate = null, this.title = "Footprints", this.type = "catalog-footprint", this.visible = !0;
  }
  load(e) {
    return this.addResolvingPromise(this._doLoad(e)), Promise.resolve(this);
  }
  async _doLoad(e) {
    await this.parent.load(e), E(this.renderer, this.fieldsIndex), this.addHandles([this.parent.on("apply-edits", (i) => this.emit("apply-edits", i)), this.parent.on("edits", (i) => this.emit("edits", i)), this.parent.on("refresh", (i) => this.emit("refresh", i))]);
  }
  get apiKey() {
    return this.parent?.apiKey;
  }
  get capabilities() {
    return this.parent?.capabilities;
  }
  get customParameters() {
    return this.parent?.customParameters;
  }
  get dateFieldsTimeZone() {
    return this.parent?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this.parent?.datesInUnknownTimezone ?? !1;
  }
  get definitionExpression() {
    return this.parent?.definitionExpression;
  }
  get editingInfo() {
    return this.parent?.editingInfo;
  }
  get effectiveCapabilities() {
    return this.parent?.effectiveCapabilities;
  }
  get createQueryVersion() {
    return this.parent?.createQueryVersion;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get displayField() {
    return this.parent?.displayField;
  }
  get effectiveEditingEnabled() {
    return !1;
  }
  get fields() {
    return this.parent?.fields;
  }
  get fieldsIndex() {
    return this.parent?.fieldsIndex;
  }
  get fullExtent() {
    return this.parent?.fullExtent;
  }
  get geometryFieldsInfo() {
    return this.parent?.geometryFieldsInfo;
  }
  get geometryType() {
    return this.parent?.geometryType;
  }
  get globalIdField() {
    return this.parent?.globalIdField;
  }
  get hasM() {
    return this.parent?.hasM ?? !1;
  }
  get hasZ() {
    return this.parent?.hasZ ?? !1;
  }
  get objectIdField() {
    return this.parent?.objectIdField;
  }
  get orderBy() {
    return this.parent?.orderBy ?? null;
  }
  get outFields() {
    return this.parent?.outFields;
  }
  get parsedUrl() {
    return this.parent?.parsedUrl ?? null;
  }
  get preferredTimeZone() {
    return this.parent?.preferredTimeZone ?? null;
  }
  set renderer(e) {
    E(e, this.fieldsIndex), this._set("renderer", e);
  }
  get renderer() {
    return this._isOverridden("renderer") ? this._get("renderer") : Pe();
  }
  get returnM() {
    return this.parent?.returnM;
  }
  get returnZ() {
    return this.parent?.returnZ;
  }
  get source() {
    return this.parent?.source;
  }
  get timeExtent() {
    return this.parent?.timeExtent;
  }
  get timeInfo() {
    return this.parent?.timeInfo;
  }
  get timeOffset() {
    return this.parent?.timeOffset;
  }
  get typeIdField() {
    return this.parent?.typeIdField;
  }
  get types() {
    return this.parent?.types;
  }
  get useViewTime() {
    return this.parent?.useViewTime ?? !0;
  }
  get version() {
    return this.parent?.version;
  }
  async applyEdits(e, i) {
    return await this.load(), this.parent.applyEdits(e, i);
  }
  createPopupTemplate(e) {
    const i = { fields: this.fields, objectIdField: this.objectIdField, title: this.title };
    return k(i, e);
  }
  createQuery() {
    return this.parent?.createQuery();
  }
  getField(e) {
    return this.parent?.getField(e);
  }
  getFieldDomain(e, i) {
    return this.parent?.getFieldDomain(e, i);
  }
  async queryExtent(e, i) {
    return await this.load(), this.parent.queryExtent(e, i);
  }
  async queryFeatures(e, i) {
    return await this.load(), this.parent.queryFeatures(e, i);
  }
  async queryFeatureCount(e, i) {
    return await this.load(), this.parent.queryFeatureCount(e, i);
  }
  async queryObjectIds(e, i) {
    return await this.load(), this.parent.queryObjectIds(e, i);
  }
};
t([r(z)], n.prototype, "attributeTableTemplate", void 0), t([r({ readOnly: !0 })], n.prototype, "apiKey", null), t([r({ readOnly: !0 })], n.prototype, "capabilities", null), t([r({ readOnly: !0 })], n.prototype, "customParameters", null), t([r()], n.prototype, "dateFieldsTimeZone", null), t([r({ readOnly: !0 })], n.prototype, "datesInUnknownTimezone", null), t([r({ readOnly: !0 })], n.prototype, "definitionExpression", null), t([r({ readOnly: !0 })], n.prototype, "editingInfo", null), t([r({ readOnly: !0 })], n.prototype, "effectiveCapabilities", null), t([r({ json: { origins: { "web-scene": { write: !1 } }, write: !0 } })], n.prototype, "charts", void 0), t([r({ readOnly: !0 })], n.prototype, "createQueryVersion", null), t([r({ readOnly: !0 })], n.prototype, "defaultPopupTemplate", null), t([r()], n.prototype, "displayField", null), t([r({ type: Boolean, nonNullable: !0, json: { name: "enableEditing", write: !0, origins: { "web-scene": { read: !1, write: !1 } } } })], n.prototype, "editingEnabled", void 0), t([r({ readOnly: !0 })], n.prototype, "effectiveEditingEnabled", null), t([r((() => {
  const e = g(J);
  return e.json.origins["web-map"] = { read: !1, write: !1 }, e;
})())], n.prototype, "elevationInfo", void 0), t([r({ readOnly: !0 })], n.prototype, "fields", null), t([r({ readOnly: !0 })], n.prototype, "fieldsIndex", null), t([r({ type: H, json: { name: "formInfo", write: !0, origins: { "web-scene": { read: !1, write: !1 } } } })], n.prototype, "formTemplate", void 0), t([r({ readOnly: !0 })], n.prototype, "fullExtent", null), t([r({ readOnly: !0 })], n.prototype, "geometryFieldsInfo", null), t([r({ readOnly: !0 })], n.prototype, "geometryType", null), t([r({ readOnly: !0 })], n.prototype, "globalIdField", null), t([r({ readOnly: !0 })], n.prototype, "hasM", null), t([r({ readOnly: !0 })], n.prototype, "hasZ", null), t([r({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], n.prototype, "id", void 0), t([r({ type: [K], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: W, write: !0 } })], n.prototype, "labelingInfo", void 0), t([r(X)], n.prototype, "labelsVisible", void 0), t([r(O)], n.prototype, "legendEnabled", void 0), t([r({ type: ["show", "hide"], json: { write: !0 } })], n.prototype, "listMode", void 0), t([r((() => {
  const e = g(Y);
  return e.json.origins.service.read = !1, e;
})())], n.prototype, "maxScale", void 0), t([r((() => {
  const e = g(ee);
  return e.json.origins.service.read = !1, e;
})())], n.prototype, "minScale", void 0), t([r({ readOnly: !0 })], n.prototype, "objectIdField", null), t([r(P)], n.prototype, "opacity", void 0), t([r({ readOnly: !0 })], n.prototype, "orderBy", null), t([r({ readOnly: !0 })], n.prototype, "outFields", null), t([r({ clonable: !1 })], n.prototype, "parent", void 0), t([r({ readOnly: !0 })], n.prototype, "parsedUrl", null), t([r(te)], n.prototype, "popupEnabled", void 0), t([r({ type: re, json: { name: "popupInfo", write: !0 } })], n.prototype, "popupTemplate", void 0), t([r({ readOnly: !0 })], n.prototype, "preferredTimeZone", null), t([r({ types: ie, json: { origins: { "web-scene": { types: ne } }, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy(e, i) {
  return { ignoreOrigin: this.originIdOf(i) < oe.PORTAL_ITEM };
} } } })], n.prototype, "renderer", null), t([r({ readOnly: !0 })], n.prototype, "returnM", null), t([r({ readOnly: !0 })], n.prototype, "returnZ", null), t([r({ readOnly: !0 })], n.prototype, "source", null), t([r({ readOnly: !0 })], n.prototype, "timeExtent", null), t([r({ readOnly: !0 })], n.prototype, "timeInfo", null), t([r({ readOnly: !0 })], n.prototype, "timeOffset", null), t([r({ type: String, nonNullable: !0, json: { write: { ignoreOrigin: !0, isRequired: !0 } } })], n.prototype, "title", void 0), t([r({ json: { read: !1 } })], n.prototype, "type", void 0), t([r({ readOnly: !0 })], n.prototype, "typeIdField", null), t([r({ readOnly: !0 })], n.prototype, "types", null), t([r({ readOnly: !0 })], n.prototype, "useViewTime", null), t([r({ type: Boolean, json: { name: "visibility", write: !0 } })], n.prototype, "visible", void 0), n = t([_("esri.layers.catalog.CatalogFootprintLayer")], n);
const B = n, b = $e();
function qe(e) {
  return typeof e == "object" && e != null && "itemId" in e && "portalUrl" in e;
}
function Be(e) {
  return typeof e == "object" && e != null && "url" in e;
}
function Ae(e) {
  if (e == null) return !0;
  const i = Object.keys(e);
  return !i.length || i.length === 1 && i[0] === "id";
}
function R(e, i, a, o) {
  const l = e.write({}, o);
  Ae(l) || (i[a] = l);
}
let s = class extends le(pe(F(de(ye(w(ue(he(ce(me(I(fe(ge(c))))))))))))) {
  constructor(e) {
    super(e), this.legendEnabled = !0, this._portals = /* @__PURE__ */ new Map(), this._layerToFootprint = /* @__PURE__ */ new WeakMap(), this.drawOrderField = "cd_draworder", this.dynamicGroupLayer = new q({ parent: this }), this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.floorInfo = null, this.footprintLayer = new B({ parent: this }), this.itemNameField = "cd_itemname", this.itemSourceField = "cd_itemsource", this.itemTypeField = "cd_itemtype", this.layers = new C([this.dynamicGroupLayer, this.footprintLayer]), this.maxScaleField = "cd_maxscale", this.minScaleField = "cd_minscale", this.orderBy = null, this.outFields = null, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Catalog Layer"]), this.source = new Re({ layer: this, supportedSourceTypes: this.supportedSourceTypes }), this.type = "catalog", this.typeIdField = null, this.types = null;
  }
  load(e) {
    const i = e != null ? e.signal : null, a = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e).catch(be).then(async () => {
      const { url: o, source: l, portalItem: p } = this;
      if (!o) throw new f("catalog-layer:missing-url", "Catalog layer must be created with a url");
      if (this.layerId == null) {
        const u = await this._fetchFirstValidLayerId(i);
        if (u == null) throw new f("catalog-layer:missing-layerId", "There is no Catalog Layer in the service", { service: o });
        this.layerId = u;
      }
      await l.load({ signal: i });
      const { sourceJSON: y } = l;
      y && (this.sourceJSON = y, this.read(y, { origin: "service", portalItem: p, portal: p?.portal, url: this.parsedUrl }));
    }).then(() => {
      const o = [this.itemNameField, this.itemSourceField, this.itemTypeField, this.minScaleField, this.maxScaleField], l = o.filter((p) => !this.fieldsIndex.has(p));
      if (l.length) throw new f("catalog-layer:missing-fields", "There are missing fields to operate properly", { requiredFields: o, missingFields: l });
    }).then(() => ve(this, "load", e));
    return this.addResolvingPromise(a), Promise.resolve(this);
  }
  destroy() {
    this.footprintLayer.destroy(), this.dynamicGroupLayer.destroy();
    for (const e of this._portals.values()) e.destroy();
    this._portals.clear();
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && this.capabilities != null && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get effectiveEditingEnabled() {
    return !1;
  }
  get parsedUrl() {
    const e = we(this.url);
    return e != null && this.layerId != null && (e.path = Fe(e.path, this.layerId.toString())), e;
  }
  async applyEdits(e, i) {
    return Ie(this, e, i);
  }
  on(e, i) {
    return super.on(e, i);
  }
  async createLayerFromFootprint(e) {
    const i = await this._createLayer(e);
    return this._configureLayer(i, e), this._layerToFootprint.set(i, e), i;
  }
  createFootprintFromLayer(e) {
    return this._layerToFootprint.get(e)?.clone();
  }
  createQuery() {
    const e = new h(), i = this.capabilities?.query;
    e.returnGeometry = !0, i && (e.compactGeometryEnabled = i.supportsCompactGeometry, e.defaultSpatialReferenceEnabled = i.supportsDefaultSpatialReference), e.outFields = ["*"];
    const { timeOffset: a, timeExtent: o } = this;
    return e.timeExtent = a != null && o != null ? o.offset(-a.value, a.unit) : o || null, e.where = this.definitionExpression || "1=1", e;
  }
  getFeatureType(e) {
    return Oe(this.types, this.typeIdField, e);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, i) {
    const a = i?.feature, o = this.getFeatureType(a);
    if (o) {
      const l = o.domains && o.domains[e];
      if (l && l.type !== "inherited") return l;
    }
    return this.getField(e)?.domain;
  }
  async hasDataChanged() {
    return _e(this);
  }
  async queryFeatures(e, i) {
    const a = await this.load(), o = await a.source.queryFeatures(h.from(e) ?? a.createQuery(), i);
    if (o?.features) for (const l of o.features) l.layer = l.sourceLayer = a.footprintLayer;
    return o;
  }
  async queryObjectIds(e, i) {
    return (await this.load()).source.queryObjectIds(h.from(e) ?? this.createQuery(), i);
  }
  async queryFeatureCount(e, i) {
    return (await this.load()).source.queryFeatureCount(h.from(e) ?? this.createQuery(), i);
  }
  async queryExtent(e, i) {
    return (await this.load()).source.queryExtent(h.from(e) ?? this.createQuery(), i);
  }
  serviceSupportsSpatialReference(e) {
    return this.loaded && je(this, e);
  }
  read(e, i) {
    if (super.read(e, i), e) {
      const { footprintLayer: a, dynamicGroupLayer: o } = e;
      a && this.footprintLayer.read(a, i), o && this.dynamicGroupLayer.read(o, i);
    }
  }
  async _fetchFirstValidLayerId(e) {
    const { data: i } = await Te(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e });
    if (Array.isArray(i?.layers)) return i.layers.find(({ type: a }) => this.supportedSourceTypes.has(a))?.id;
  }
  async _createLayer(e) {
    const i = e.getAttribute(this.itemSourceField);
    if (!i) throw new f("catalog-layer:item-source-missing", `The footprint is missing the "${this.itemSourceField}" attribute`);
    const a = JSON.parse(i);
    if (qe(a)) {
      const { itemId: o, portalUrl: l } = a, p = Se(l), y = this.portalItem?.portal, u = L.getDefault();
      let m, j = !0;
      y && x(l, y.url) ? m = y : x(l, u.url) ? m = u : (m = V(this._portals, p, () => new L({ url: p })), j = !1);
      const T = await c.fromPortalItem(new Ee({ id: o, portal: m }));
      return j || await v(T), T;
    }
    return Be(a) ? c.fromArcGISServerUrl({ url: a.url }) : new (await Ce.UnsupportedLayer())();
  }
  _configureLayer(e, i) {
    const a = i.getAttribute(this.itemNameField);
    a && (e.title = a);
    const o = i.getAttribute(this.maxScaleField);
    o != null && "maxScale" in e && (e.maxScale = o);
    const l = i.getAttribute(this.minScaleField);
    l != null && "minScale" in e && (e.minScale = l);
  }
};
async function v(e) {
  if ("portalItem" in e && e.portalItem) {
    try {
      await e.load();
    } catch {
    }
    e.portalItem = null, e.type === "group" && await Promise.allSettled([...e.layers.map((i) => v(i)), ...e.tables.map((i) => v(i))]);
  }
}
t([r(O)], s.prototype, "legendEnabled", void 0), t([r({ readOnly: !0 })], s.prototype, "createQueryVersion", null), t([r({ readOnly: !0 })], s.prototype, "drawOrderField", void 0), t([r({ type: q, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0, writer: R } } })], s.prototype, "dynamicGroupLayer", void 0), t([r({ readOnly: !0 })], s.prototype, "editingEnabled", null), t([r({ readOnly: !0 })], s.prototype, "effectiveEditingEnabled", null), t([r({ json: { origins: { "web-scene": { name: "layerDefinition.elevationInfo", read: !1, write: !1 } } } })], s.prototype, "elevationInfo", void 0), t([r({ ...b.fields, readOnly: !0, json: { origins: { service: { read: !0 } }, read: !1 } })], s.prototype, "fields", void 0), t([r(b.fieldsIndex)], s.prototype, "fieldsIndex", void 0), t([r({ json: { origins: { "web-scene": { name: "layerDefinition.floorInfo", read: !1, write: !1 } } } })], s.prototype, "floorInfo", void 0), t([r({ type: B, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0, writer: R } } })], s.prototype, "footprintLayer", void 0), t([r(Le)], s.prototype, "id", void 0), t([r({ readOnly: !0 })], s.prototype, "itemNameField", void 0), t([r({ readOnly: !0 })], s.prototype, "itemSourceField", void 0), t([r({ readOnly: !0 })], s.prototype, "itemTypeField", void 0), t([r({ readOnly: !0 })], s.prototype, "layers", void 0), t([r({ type: ["show", "hide", "hide-children"] })], s.prototype, "listMode", void 0), t([r({ readOnly: !0 })], s.prototype, "maxScaleField", void 0), t([r({ readOnly: !0 })], s.prototype, "minScaleField", void 0), t([r({ value: "CatalogLayer", type: ["CatalogLayer"] })], s.prototype, "operationalLayerType", void 0), t([r({ json: { origins: { "web-scene": { name: "layerDefinition.orderBy", write: !0, read: !0 } } } })], s.prototype, "orderBy", void 0), t([r(b.outFields)], s.prototype, "outFields", void 0), t([r({ readOnly: !0 })], s.prototype, "parsedUrl", null), t([r({ readOnly: !0 })], s.prototype, "source", void 0), t([r({ json: { read: !1 } })], s.prototype, "type", void 0), t([r({ type: String })], s.prototype, "typeIdField", void 0), t([r({ type: [xe] })], s.prototype, "types", void 0), s = t([_("esri.layers.CatalogLayer")], s);
const Ne = s;
export {
  Ne as default
};
//# sourceMappingURL=CatalogLayer-DLd-D3eI.js.map
