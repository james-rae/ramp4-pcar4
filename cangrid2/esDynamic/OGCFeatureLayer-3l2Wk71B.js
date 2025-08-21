import { O as t, P as r, Q as $, fa as L, U as N, b4 as b, bx as m, gW as z, s as w, el as H, ek as J, gv as U, gw as k, e3 as W, gu as Z, gx as V, e7 as K, e5 as X, e6 as Y, e4 as ee, e8 as te, gy as x, gA as se, fn as R, gz as re, er as oe, dS as ie, b8 as ne, dT as I, gD as pe, gE as ae, gC as le, eb as ue, gG as de, W as ce, gH as ye, gI as he, gJ as fe, gX as ge, ec as me, gL as ve, ei as Se } from "./main-DHXLMse1.js";
import { R as Ce, x as F, C as O, P as be, O as we, N as xe, q as Re, v as Ie, k as Fe } from "./ogcFeatureUtils-BWP6mdUi.js";
let d = class extends L {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(e) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: e, layerDefinition: o, spatialReference: i, supportedCrs: n }, layer: { apiKey: l, customParameters: a, effectiveMaxRecordCount: p } } = this;
    return { type: "ogc-source", collection: e, layerDefinition: o, maxRecordCount: p, queryParameters: { apiKey: l, customParameters: a }, spatialReference: i, supportedCrs: n };
  }
  queryExtent(e, o = {}) {
    return null;
  }
  queryFeatureCount(e, o = {}) {
    return null;
  }
  queryFeatures(e, o = {}) {
    return this.queryFeaturesJSON(e, o).then((i) => N.fromJSON(i));
  }
  queryFeaturesJSON(e, o = {}) {
    const i = this.getSource();
    return this.load(o).then(() => Ce(i, e, o));
  }
  queryObjectIds(e, o = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e) {
    return !(!e.isWGS84 && !e.isWebMercator) || !!this.featureDefinition.supportedCrs[e.wkid];
  }
  _conformsToType(e, o) {
    const i = new RegExp(`^${b(o)}$`, "i");
    return e.conformsTo.some((n) => i.test(n)) ?? !1;
  }
  _getCapabilities(e, o) {
    return { analytics: { supportsCacheHint: !1 }, attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: e }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: !1, supportsDelete: !1, supportsEditing: !1, supportsChangeTracking: !1, supportsQuery: !1, supportsQueryAnalytics: !1, supportsQueryAttachments: !1, supportsQueryTopFeatures: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: !1, supportsExceedsLimitStatistics: !1, supportsAsyncConvert3D: !1 }, query: { maxRecordCount: o, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: !1, supportsCentroid: !1, supportsDisjointSpatialRelationship: !1, supportsDistance: !1, supportsDistinct: !1, supportsExtent: !1, supportsFormatPBF: !1, supportsGeometryProperties: !1, supportsHavingClause: !1, supportsHistoricMoment: !1, supportsMaxRecordCountFactor: !1, supportsOrderBy: !1, supportsPagination: !1, supportsPercentileStatistics: !1, supportsQuantization: !1, supportsQuantizationEditMode: !1, supportsQueryByAnonymous: !1, supportsQueryByOthers: !1, supportsQueryGeometry: !1, supportsResultType: !1, supportsStandardizedQueriesOnly: !1, supportsTopFeaturesQuery: !1, supportsStatistics: !1, supportsSpatialAggregationStatistics: !1, supportedSpatialAggregationStatistics: { envelope: !1, centroid: !1, convexHull: !1 }, supportsDefaultSpatialReference: !1, supportsFullTextSearch: !1, supportsCompactGeometry: !1, supportsSqlExpression: !1, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: !1, supportsOrderBy: !1, supportsPagination: !1, supportsCacheHint: !1 }, queryTopFeatures: { supportsCacheHint: !1 }, editing: { supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsGeometryUpdate: !1, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1, supportsUploadWithItemId: !1, supportsUpdateWithoutM: !1, supportsAsyncApplyEdits: !1, zDefault: void 0 } };
  }
  _getMaxRecordCount(e) {
    const o = e?.components?.parameters;
    return o?.limit?.schema?.maximum ?? o?.limitFeatures?.schema?.maximum;
  }
  _getStorageSpatialReference(e) {
    const o = e.storageCrs ?? F, i = O(o);
    return i == null ? m.WGS84 : new m({ wkid: i });
  }
  _getSupportedSpatialReferences(e, o) {
    const i = "#/crs", n = e.crs ?? [F], l = n.includes(i) ? n.filter((p) => p !== i).concat(o.crs ?? []) : n, a = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return l.filter((p) => !a.test(p));
  }
  async _loadOGCServices(e, o) {
    const i = o != null ? o.signal : null, { apiKey: n, collectionId: l, customParameters: a, fields: p, geometryType: D, hasZ: T, objectIdField: j, timeInfo: P, url: E } = e, _ = { fields: p?.map((u) => u.toJSON()), geometryType: z.toJSON(D), hasZ: T ?? !1, objectIdField: j, timeInfo: P?.toJSON() }, c = { apiKey: n, customParameters: a, signal: i }, h = await be(E, c), [v, S] = await Promise.all([we(h, c), xe(h, c)]);
    if (!this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")) throw new w("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const y = S.collections.find(({ id: u }) => u === l);
    if (!y) throw new w("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const q = this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await Re(h, c) : null, C = await Ie(y, _, c), A = this._getMaxRecordCount(q), G = this._getCapabilities(C.hasZ, A), Q = this._getStorageSpatialReference(y).toJSON(), M = this._getSupportedSpatialReferences(y, S), B = new RegExp(`^${b(Fe)}`, "i"), f = {};
    for (const u of M) {
      const g = O(u);
      g != null && (f[g] || (f[g] = u.replace(B, "")));
    }
    this.featureDefinition = { capabilities: G, collection: y, layerDefinition: C, spatialReference: Q, supportedCrs: f };
  }
};
t([r()], d.prototype, "featureDefinition", void 0), t([r({ constructOnly: !0 })], d.prototype, "layer", void 0), t([r()], d.prototype, "type", void 0), d = t([$("esri.layers.graphics.sources.OGCFeatureSource")], d);
const Oe = ve();
let s = class extends H(J(U(k(W(Z(V(K(X(Y(ee(te(Se)))))))))))) {
  constructor(e) {
    super(e), this.capabilities = null, this.collectionId = null, this.copyright = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new d({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }
  destroy() {
    this.source?.destroy();
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e).then(() => this._fetchService(e))), this.when();
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    return this.maxRecordCount ?? this.capabilities?.query.maxRecordCount ?? 5e3;
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  set renderer(e) {
    x(e, this.fieldsIndex), this._set("renderer", e);
  }
  on(e, o) {
    return super.on(e, o);
  }
  createPopupTemplate(e) {
    return se(this, e);
  }
  createQuery() {
    return new R();
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, o) {
    let i, n = !1;
    const l = o?.feature?.attributes, a = this.typeIdField && l?.[this.typeIdField];
    return a != null && this.types && (n = this.types.some((p) => p.id == a && (i = p.domains?.[e], i?.type === "inherited" && (i = this._getLayerDomain(e)), !0))), n || i || (i = this._getLayerDomain(e)), i;
  }
  queryFeatures(e, o) {
    return this.load().then(() => this.source.queryFeatures(R.from(e) || this.createQuery(), o)).then((i) => (i?.features?.forEach((n) => {
      n.layer = n.sourceLayer = this;
    }), i));
  }
  serviceSupportsSpatialReference(e) {
    return this.source?.serviceSupportsSpatialReference(e) ?? !1;
  }
  async _fetchService(e) {
    await this.source.load(e), this.read(this.source.featureDefinition, { origin: "service" }), x(this.renderer, this.fieldsIndex), re(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e) {
    if (!this.fields) return null;
    for (const o of this.fields) if (o.name === e && o.domain) return o.domain;
    return null;
  }
};
t([r({ readOnly: !0, json: { origins: { service: { read: !0 } } } })], s.prototype, "capabilities", void 0), t([r({ type: String, json: { write: !0 } })], s.prototype, "collectionId", void 0), t([r({ type: String })], s.prototype, "copyright", void 0), t([r({ readOnly: !0 })], s.prototype, "defaultPopupTemplate", null), t([r({ readOnly: !0, type: String, json: { origins: { service: { name: "collection.description" } } } })], s.prototype, "description", void 0), t([r({ type: String })], s.prototype, "displayField", void 0), t([r({ type: Number })], s.prototype, "effectiveMaxRecordCount", null), t([r(oe)], s.prototype, "elevationInfo", void 0), t([r({ type: [ie], json: { origins: { service: { name: "layerDefinition.fields" } } } })], s.prototype, "fields", void 0), t([r(Oe.fieldsIndex)], s.prototype, "fieldsIndex", void 0), t([r({ readOnly: !0, type: ne, json: { origins: { service: { name: "layerDefinition.extent" } } } })], s.prototype, "fullExtent", void 0), t([r({ type: I.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: I.read } } } } })], s.prototype, "geometryType", void 0), t([r({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], s.prototype, "hasZ", void 0), t([r({ type: Boolean, readOnly: !0 })], s.prototype, "isTable", null), t([r({ type: [pe], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: ae }, write: !0 } } } })], s.prototype, "labelingInfo", void 0), t([r(le)], s.prototype, "labelsVisible", void 0), t([r(ue)], s.prototype, "legendEnabled", void 0), t([r({ type: Number })], s.prototype, "maxRecordCount", void 0), t([r({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], s.prototype, "objectIdField", void 0), t([r({ type: ["OGCFeatureLayer"] })], s.prototype, "operationalLayerType", void 0), t([r(de)], s.prototype, "popupEnabled", void 0), t([r({ type: ce, json: { name: "popupInfo", write: !0 } })], s.prototype, "popupTemplate", void 0), t([r({ types: ye, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: !1 }, "web-scene": { types: he, name: "layerDefinition.drawingInfo.renderer", write: !0 } }, name: "layerDefinition.drawingInfo.renderer", write: !0 } })], s.prototype, "renderer", null), t([r(fe)], s.prototype, "screenSizePerspectiveEnabled", void 0), t([r({ readOnly: !0 })], s.prototype, "source", void 0), t([r({ readOnly: !0, type: m, json: { origins: { service: { read: !0 } } } })], s.prototype, "spatialReference", void 0), t([r({ type: String, json: { write: { enabled: !0, ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "collection.title" } } } })], s.prototype, "title", void 0), t([r({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0), t([r({ type: String, readOnly: !0 })], s.prototype, "typeIdField", void 0), t([r({ type: [ge] })], s.prototype, "types", void 0), t([r(me)], s.prototype, "url", void 0), s = t([$("esri.layers.OGCFeatureLayer")], s);
const Te = s;
export {
  Te as default
};
//# sourceMappingURL=OGCFeatureLayer-3l2Wk71B.js.map
