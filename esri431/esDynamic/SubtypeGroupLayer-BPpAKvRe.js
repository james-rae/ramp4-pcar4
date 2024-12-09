import { jg as Z, jh as K, cD as E, ji as X, jj as Y, jk as ee, jl as te, jm as re, jn as se, eC as G, db as V, ev as ie, hm as P, T as v, fg as ne, G as ae, b1 as oe, s as m, ho as le, jo as N, gQ as _, jp as k, bQ as s, bR as n, jq as ue, f9 as pe, j6 as de, hr as ye, hs as ce, ht as he, eF as be, hS as fe, hR as me, hv as ge, cB as ve, eD as S, hz as M, bS as Q, fS as H, hA as U, jr as we, js as Fe, jt as je, fF as Se, j7 as $e, j8 as Ie, ex as Oe, hl as Ee, eB as Te, ey as Ce, eN as Ae, ez as qe, eA as xe, eO as Le, eP as _e, a8 as x, fv as Pe, cz as De, f6 as Re, B as Ge, fH as Ve, ju as Ne, I as ke, aw as Me, i_ as Qe, jv as He, jw as Ue, j9 as Be, jx as ze, jy as Je, jz as We, jA as Ze, hF as Ke, jB as Xe, jC as Ye, jD as et, jE as tt, jF as rt, jG as st, hG as I, jc as it, hn as nt, jb as at, eE as ot, jH as lt, eM as ut } from "./main-DZxT3i7S.js";
const B = { key: "type", base: K, errorContext: "renderer", typeMap: { simple: E, "unique-value": X, "class-breaks": Y } }, L = Z({ types: B });
function pt(e, t) {
  const r = e.drawingInfo?.renderer, i = r ? L(r, e, t) : null;
  if (i?.type === "simple")
    return ee(i.symbol, null) ? i.symbol.clone() : null;
}
const dt = ["#ed5151", "#149ece", "#a7c636", "#9e559c", "#fc921f", "#ffde3e", "#f789d8", "#b7814a", "#3caf99", "#6b6bd6", "#b54779", "#7f7f7f"];
function yt(e, t) {
  return te(dt, e, { offset: !0, shuffle: !0 }).reverse().map((r) => {
    const i = t.clone();
    return i.type === "cim" ? re(i, r) : se(i, r), new E({ symbol: i });
  });
}
const D = U();
let ct = 0;
function j(e) {
  const t = e.json.write;
  return typeof t == "object" ? t.ignoreOrigin = !0 : e.json.write = { ignoreOrigin: !0 }, e;
}
function ht(e) {
  return new E({ symbol: bt(e) });
}
function bt(e) {
  switch (e) {
    case "point":
    case "multipoint":
      return je.clone();
    case "polyline":
      return Fe.clone();
    case "polygon":
    case "multipatch":
      return we.clone();
    default:
      return null;
  }
}
function ft(e, t) {
  return !!t && e?.type === "unique-value" && e.field != null && e.field.toLowerCase() === t.toLowerCase() && !e.field2 && !e.field3 && !e.valueExpression;
}
function z(e, t) {
  return e == null ? null : t.subtypes?.find((r) => r.code === e);
}
function mt(e, t) {
  let r = null;
  switch (t.geometryType) {
    case "esriGeometryPoint":
    case "esriGeometryMultipoint":
      r = "point";
      break;
    case "esriGeometryPolyline":
      r = "line";
      break;
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      r = "polygon";
      break;
    default:
      t.type, r = null;
  }
  const i = {}, l = z(e, t);
  if (l != null) {
    const { defaultValues: o } = l;
    for (const p in o) i[p] = o[p];
  }
  return i[t.subtypeField] = e, new M({ name: "New Feature", drawingTool: r, prototype: { attributes: i } });
}
let a = class extends G(V(ie(Se))) {
  constructor(e) {
    super(e), this.attributeTableTemplate = null, this.charts = null, this.editingEnabled = !0, this.fieldOverrides = null, this.fieldsIndex = null, this.formTemplate = null, this.id = `${Date.now().toString(16)}-subtype-sublayer-${ct++}`, this.type = "subtype-sublayer", this.labelsVisible = !0, this.labelingInfo = null, this.layerType = "ArcGISFeatureLayer", this.legendEnabled = !0, this.listMode = "show", this.minScale = 0, this.maxScale = 0, this.opacity = 1, this.parent = null, this.popupEnabled = !0, this.popupTemplate = null, this.subtypeCode = null, this.templates = null, this.title = null, this.visible = !0;
  }
  load(e) {
    return P(this.renderer, this.fieldsIndex), Promise.resolve(this);
  }
  get capabilities() {
    return this.parent?.capabilities;
  }
  get effectiveCapabilities() {
    return this.parent?.effectiveCapabilities;
  }
  get effectiveEditingEnabled() {
    const { parent: e } = this;
    return e ? e.effectiveEditingEnabled && this.editingEnabled : this.editingEnabled;
  }
  get elevationInfo() {
    return this.parent?.elevationInfo;
  }
  writeFieldOverrides(e, t, r) {
    const { fields: i, parent: l } = this;
    let o;
    if (i) {
      o = [];
      let p = 0;
      i.forEach(({ name: d, alias: y, editable: w, visible: F }) => {
        if (!F) return;
        const c = l?.fields?.find((T) => T.name === d);
        if (!c) return;
        const f = { name: d };
        let g = !1;
        y !== c.alias && (f.alias = y, g = !0), w !== c.editable && (f.editable = w, g = !0), o.push(f), g && p++;
      }), p === 0 && o.length === i.length && (o = null);
    } else o = v(e);
    o?.length && ne(r, o, t);
  }
  get fields() {
    const { parent: e, fieldOverrides: t, subtypeCode: r } = this, i = e?.fields;
    if (!e || !i?.length) return null;
    const { subtypes: l, subtypeField: o } = e, p = l?.find((F) => F.code === r), d = p?.defaultValues, y = p?.domains, w = [];
    for (const F of i) {
      const c = F.clone(), { name: f } = c, g = t?.find(($) => $.name === f);
      if (c.visible = !t || !!g, g) {
        const { alias: $, editable: W } = g;
        $ && (c.alias = $), W === !1 && (c.editable = !1);
      }
      const T = d?.[f] ?? null;
      c.defaultValue = f === o ? r : T;
      const C = y?.[f] ?? null;
      c.domain = f === o ? null : C ? C.type === "inherited" ? c.domain : C.clone() : null, w.push(c);
    }
    return w;
  }
  get floorInfo() {
    return this.parent?.floorInfo;
  }
  get geometryType() {
    return this.parent?.geometryType;
  }
  get effectiveScaleRange() {
    const { minScale: e, maxScale: t } = this;
    return { minScale: e, maxScale: t };
  }
  get objectIdField() {
    return this.parent || ae.getLogger(this).error(h("objectIdField")), this.parent?.objectIdField;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get relationships() {
    return this.parent?.relationships;
  }
  set renderer(e) {
    P(e, this.fieldsIndex), this._override("renderer", e);
  }
  get renderer() {
    if (this._isOverridden("renderer")) return this._get("renderer");
    const { parent: e } = this;
    return e && !e.isTable && e.geometryType !== "mesh" ? ht(e.geometryType) : null;
  }
  readRendererFromService(e, t, r) {
    if (t.type === "Table") return null;
    const i = t.drawingInfo?.renderer, l = L(i, t, r);
    let o;
    const { subtypeCode: p } = this;
    if (p != null && ft(l, t.subtypeField)) {
      const d = l.uniqueValueInfos?.find(({ value: y }) => (y = typeof y == "number" ? String(y) : y) === String(p));
      d && (o = new E({ symbol: d.symbol }));
    } else l?.type !== "simple" || l.visualVariables?.length || (o = l);
    return o;
  }
  readRenderer(e, t, r) {
    const i = t?.layerDefinition?.drawingInfo?.renderer;
    return i ? i.visualVariables?.some((o) => o.type !== "rotationInfo") ? void 0 : L(i, t, r) || void 0 : void 0;
  }
  get spatialReference() {
    return this.parent?.spatialReference ?? oe.WGS84;
  }
  get subtypeField() {
    return this.parent?.subtypeField;
  }
  readTemplatesFromService(e, t) {
    return [mt(this.subtypeCode, t)];
  }
  readTitleFromService(e, t) {
    const r = z(this.subtypeCode, t);
    return r != null ? r.name : null;
  }
  get url() {
    return this.parent?.url;
  }
  get userHasUpdateItemPrivileges() {
    return !!this.parent?.userHasUpdateItemPrivileges;
  }
  async addAttachment(e, t) {
    const { parent: r } = this;
    if (!r) throw h("addAttachment");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode) throw new m("subtype-sublayer:addAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return r.addAttachment(e, t);
  }
  async updateAttachment(e, t, r) {
    const { parent: i } = this;
    if (!i) throw h("updateAttachment");
    if (e.getAttribute(i.subtypeField) !== this.subtypeCode) throw new m("subtype-sublayer:updateAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return i.updateAttachment(e, t, r);
  }
  async deleteAttachments(e, t) {
    const { parent: r } = this;
    if (!r) throw h("deleteAttachments");
    if (e.getAttribute(r.subtypeField) !== this.subtypeCode) throw new m("subtype-sublayer:deleteAttachments", "The feature provided does not belong to this SubtypeSublayer");
    return r.deleteAttachments(e, t);
  }
  async applyEdits(e, t) {
    if (!this.parent) throw h("applyEdits");
    return this.parent.applyEdits(e, t);
  }
  createPopupTemplate(e) {
    let t = this;
    const { parent: r, fields: i, title: l } = this;
    if (r) {
      const { displayField: o, editFieldsInfo: p, objectIdField: d } = r;
      t = { displayField: o, editFieldsInfo: p, fields: i, objectIdField: d, title: l };
    }
    return le(t, e);
  }
  createQuery() {
    if (!this.parent) throw h("createQuery");
    const e = N(this.parent), t = `${this.parent.subtypeField}=${this.subtypeCode}`;
    return e.where = _(t, this.parent.definitionExpression), e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    if (!t?.excludeImpliedDomains && this.parent) {
      const r = k(this.parent, e);
      if (r) return r;
    }
    return this._getLayerDomain(e);
  }
  async queryAttachments(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryAttachments");
    const i = e.clone();
    return i.where = J(i.where, r.parent.subtypeField, r.subtypeCode), r.parent.queryAttachments(e, t);
  }
  async queryFeatureCount(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryFeatureCount");
    return r.parent.queryFeatureCount(A(r.parent, r, e), t);
  }
  async queryFeatures(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryFeatures");
    return r.parent.queryFeatures(A(r.parent, r, e), t);
  }
  async queryObjectIds(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryObjectIds");
    return r.parent.queryObjectIds(A(r.parent, r, e), t);
  }
  async queryRelatedFeatures(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryRelatedFeatures");
    return r.parent.queryRelatedFeatures(e, t);
  }
  async queryRelatedFeaturesCount(e, t) {
    const r = await this.load();
    if (!r.parent) throw h("queryRelatedFeaturesCount");
    return r.parent.queryRelatedFeaturesCount(e, t);
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
};
s([n({ type: ue, json: { name: "attributeTableInfo", write: { ignoreOrigin: !0 } } })], a.prototype, "attributeTableTemplate", void 0), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "capabilities", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "effectiveCapabilities", null), s([n({ json: { write: { ignoreOrigin: !0 } } })], a.prototype, "charts", void 0), s([n({ type: Boolean, nonNullable: !0, json: { name: "enableEditing", write: { ignoreOrigin: !0 } } })], a.prototype, "editingEnabled", void 0), s([n({ type: Boolean, readOnly: !0 })], a.prototype, "effectiveEditingEnabled", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "elevationInfo", null), s([n({ json: { name: "layerDefinition.fieldOverrides", origins: { service: { read: !1 } }, write: { ignoreOrigin: !0, allowNull: !0 } } })], a.prototype, "fieldOverrides", void 0), s([pe("fieldOverrides")], a.prototype, "writeFieldOverrides", null), s([n({ ...D.fields, readOnly: !0, json: { read: !1 } })], a.prototype, "fields", null), s([n(D.fieldsIndex)], a.prototype, "fieldsIndex", void 0), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "floorInfo", null), s([n({ type: de, json: { name: "formInfo", write: { ignoreOrigin: !0 } } })], a.prototype, "formTemplate", void 0), s([n({ type: String, clonable: !1, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], a.prototype, "id", void 0), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "geometryType", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "type", void 0), s([n(j(v(ye)))], a.prototype, "labelsVisible", void 0), s([n({ type: [ce], json: { name: "layerDefinition.drawingInfo.labelingInfo", origins: { service: { read: !1 } }, read: { reader: he }, write: { ignoreOrigin: !0 } } })], a.prototype, "labelingInfo", void 0), s([n({ type: ["ArcGISFeatureLayer"], readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0 } } })], a.prototype, "layerType", void 0), s([n(j(v(be)))], a.prototype, "legendEnabled", void 0), s([n({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), s([n((() => {
  const e = v(fe);
  return e.json.origins.service.read = !1, j(e);
})())], a.prototype, "minScale", void 0), s([n((() => {
  const e = v(me);
  return e.json.origins.service.read = !1, j(e);
})())], a.prototype, "maxScale", void 0), s([n({ readOnly: !0 })], a.prototype, "effectiveScaleRange", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "objectIdField", null), s([n({ type: Number, range: { min: 0, max: 1 }, nonNullable: !0, json: { write: { ignoreOrigin: !0 } } })], a.prototype, "opacity", void 0), s([n({ clonable: !1 })], a.prototype, "parent", void 0), s([n(j(v(ge)))], a.prototype, "popupEnabled", void 0), s([n({ type: ve, json: { name: "popupInfo", write: { ignoreOrigin: !0 } } })], a.prototype, "popupTemplate", void 0), s([n({ readOnly: !0 })], a.prototype, "defaultPopupTemplate", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "relationships", null), s([n({ types: B, json: { write: { target: "layerDefinition.drawingInfo.renderer", ignoreOrigin: !0 } } })], a.prototype, "renderer", null), s([S("service", "renderer", ["drawingInfo.renderer", "subtypeField", "type"])], a.prototype, "readRendererFromService", null), s([S("renderer", ["layerDefinition.drawingInfo.renderer"])], a.prototype, "readRenderer", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "spatialReference", null), s([n({ type: Number, json: { origins: { service: { read: !1 } }, write: { ignoreOrigin: !0 } } })], a.prototype, "subtypeCode", void 0), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "subtypeField", null), s([n({ type: [M], json: { name: "layerDefinition.templates", write: { ignoreOrigin: !0 } } })], a.prototype, "templates", void 0), s([S("service", "templates", ["geometryType", "subtypeField", "subtypes", "type"])], a.prototype, "readTemplatesFromService", null), s([n({ type: String, json: { write: { ignoreOrigin: !0 } } })], a.prototype, "title", void 0), s([S("service", "title", ["subtypes"])], a.prototype, "readTitleFromService", null), s([n({ readOnly: !0, json: { read: !1 } })], a.prototype, "url", null), s([n({ readOnly: !0 })], a.prototype, "userHasUpdateItemPrivileges", null), s([n({ type: Boolean, nonNullable: !0, json: { name: "visibility", write: { ignoreOrigin: !0 } } })], a.prototype, "visible", void 0), a = s([Q("esri.layers.support.SubtypeSublayer")], a);
const A = (e, t, r) => {
  if (!r) return t.createQuery();
  const i = H.from(r);
  return i.where = J(i.where, e.subtypeField, t.subtypeCode), i;
}, J = (e, t, r) => {
  const i = new RegExp(`${t}\\s*=\\s*\\d+`), l = `${t}=${r}`, o = e ?? "";
  return i.test(o) ? o.replace(i, l) : _(l, o);
}, h = (e) => new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`), O = a, b = "SubtypeGroupLayer", gt = "esri.layers.SubtypeGroupLayer";
function R(e, t) {
  return new m("layer:unsupported", `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`, { layer: e });
}
const q = U();
let u = class extends $e(Ie(Oe(Ee(Te(Ce(Ae(qe(xe(G(Le(_e(V(ut))))))))))))) {
  constructor(...e) {
    super(...e), this._sublayerLookup = /* @__PURE__ */ new Map(), this.fields = null, this.fieldsIndex = null, this.outFields = null, this.sublayers = new (x.ofType(O))(), this.useUniqueColorsForSublayers = !0, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Feature Layer"]), this.timeInfo = null, this.title = "Layer", this.type = "subtype-group", this._debouncedSaveOperations = Pe(async (t, r, i) => {
      const { save: l, saveAs: o } = await import("./featureLayerUtils-CwO4zzUC.js");
      switch (t) {
        case I.SAVE:
          return l(this, r);
        case I.SAVE_AS:
          return o(this, i, r);
      }
    }), this.addHandles(De(() => this.sublayers, (t, r) => this._handleSublayersChange(t, r), Re));
  }
  destroy() {
    this.source?.destroy();
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = e != null ? e.signal : null, r = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e).catch(Ge).then(async () => {
      if (!this.url) throw new m("subtype-grouplayer:missing-url-or-source", "SubtypeGroupLayer must be created with either a url or a portal item");
      if (this.layerId == null) throw new m("subtype-grouplayer:missing-layerid", "layerId is required for a SubtypeGroupLayer created with url");
      return this._initLayerProperties(await this.createGraphicsSource(t));
    }).then(() => Ve(this, "load", e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("gdbVersion"), this.commitProperty("historicMoment"), this.commitProperty("returnZ"), this.commitProperty("capabilities"), this.commitProperty("returnM"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && this.capabilities != null && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get effectiveEditingEnabled() {
    return Ne(this);
  }
  get parsedUrl() {
    const e = ke(this.url);
    return e != null && this.layerId != null && (e.path = Me(e.path, this.layerId.toString())), e;
  }
  set source(e) {
    this._get("source") !== e && this._set("source", e);
  }
  readTitleFromService(e, { name: t }) {
    return this.url ? Qe(this.url, t) : t;
  }
  async addAttachment(e, t) {
    const r = await He(this, e, t, b);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), r;
  }
  async updateAttachment(e, t, r) {
    const i = await Ue(this, e, t, r, b);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), i;
  }
  async applyEdits(e, t) {
    return Be(this, e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  async createGraphicsSource(e) {
    const { default: t } = await ze(import("./FeatureLayerSource-fdRzzoyt.js"), e);
    return new t({ layer: this, supportedSourceTypes: this.supportedSourceTypes }).load({ signal: e });
  }
  createQuery() {
    const e = N(this), t = this.sublayers.map((r) => r.subtypeCode);
    return e.where = _(`${this.subtypeField} IN (${t.join(",")})`, this.definitionExpression), e;
  }
  async deleteAttachments(e, t) {
    const r = await Je(this, e, t, b);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), r;
  }
  async fetchRecomputedExtents(e) {
    return We(this, e, b);
  }
  findSublayerForFeature(e) {
    const t = this.fieldsIndex.get(this.subtypeField), r = e.attributes[t.name];
    return this.findSublayerForSubtypeCode(r);
  }
  findSublayerForSubtypeCode(e) {
    return this._sublayerLookup.get(e);
  }
  getFieldDomain(e, t) {
    if (!t?.excludeImpliedDomains) {
      const i = k(this, e);
      if (i) return i;
    }
    const r = Ze(this, t?.feature);
    if (r) {
      const i = r.domains?.[e];
      return i?.type === "inherited" ? this._getLayerDomain(e) : i;
    }
    return this._getLayerDomain(e);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  loadAll() {
    return Ke(this, (e) => {
      e(this.sublayers);
    });
  }
  async queryAttachments(e, t) {
    return Xe(this, e, t, b);
  }
  async queryFeatures(e, t) {
    const r = await this.load(), i = H.from(e) ?? r.createQuery(), l = i.outFields ?? [];
    l.includes(this.subtypeField) || (l.push(this.subtypeField), i.outFields = l);
    const o = await r.source.queryFeatures(i, t);
    if (o?.features) for (const p of o.features) p.layer = p.sourceLayer = this.findSublayerForFeature(p);
    return o;
  }
  async queryObjectIds(e, t) {
    return Ye(this, e, t, b);
  }
  async queryFeatureCount(e, t) {
    return et(this, e, t, b);
  }
  async queryExtent(e, t) {
    return tt(this, e, t, b);
  }
  async queryRelatedFeatures(e, t) {
    return rt(this, e, t, b);
  }
  async queryRelatedFeaturesCount(e, t) {
    return st(this, e, t, b);
  }
  async save(e) {
    return this._debouncedSaveOperations(I.SAVE, e);
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(I.SAVE_AS, t, e);
  }
  write(e, t) {
    const { origin: r, layerContainerType: i, messages: l } = t;
    if (this.isTable) {
      if (r === "web-scene" || r === "web-map" && i !== "tables") return l?.push(R(this, "using a table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && r === "web-map" && i === "tables") return l?.push(R(this, "using a non-table source cannot be written to tables in web maps")), null;
    return this.sublayers?.length ? super.write(e, t) : (l?.push(new m("web-document-write:invalid-property", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`, { layer: this })), null);
  }
  serviceSupportsSpatialReference(e) {
    return !!this.loaded && it(this, e);
  }
  _getLayerDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t ? t.domain : null;
  }
  async _initLayerProperties(e) {
    this._set("source", e);
    const { sourceJSON: t } = e;
    if (t && (this.sourceJSON = t, this.read(t, { origin: "service", url: this.parsedUrl })), !this.subtypes?.length) throw new m("subtype-grouplayer:missing-subtypes", "SubtypeGroupLayer must be created using a layer with subtypes");
    this._verifyFields(), nt(this.timeInfo, this.fieldsIndex);
  }
  async hasDataChanged() {
    return at(this);
  }
  _verifyFields() {
    const e = this.parsedUrl?.path ?? "undefined";
    this.objectIdField || console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: " + e + ")"), this.isTable || e.search(/\/FeatureServer\//i) !== -1 || this.fields?.some((t) => t.type === "geometry") || console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e + ")");
  }
  _handleSublayersChange(e, t) {
    t && (t.forEach((r) => {
      r.parent = null;
    }), this.removeHandles("sublayers-owner"), this._sublayerLookup.clear()), e && (e.forEach((r) => {
      r.parent = this, this._sublayerLookup.set(r.subtypeCode, r);
    }), this.addHandles([e.on("after-add", ({ item: r }) => {
      r.parent = this, this._sublayerLookup.set(r.subtypeCode, r);
    }), e.on("after-remove", ({ item: r }) => {
      r.parent = null, this._sublayerLookup.delete(r.subtypeCode);
    })], "sublayers-owner"));
  }
};
s([n({ readOnly: !0 })], u.prototype, "createQueryVersion", null), s([n({ readOnly: !0 })], u.prototype, "editingEnabled", null), s([n({ readOnly: !0 })], u.prototype, "effectiveEditingEnabled", null), s([n({ ...q.fields, readOnly: !0, json: { origins: { service: { read: !0 } }, read: !1 } })], u.prototype, "fields", void 0), s([n(q.fieldsIndex)], u.prototype, "fieldsIndex", void 0), s([n(ot)], u.prototype, "id", void 0), s([n({ type: ["show", "hide", "hide-children"], json: { origins: { "portal-item": { read: !1, write: !1 } } } })], u.prototype, "listMode", void 0), s([n({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"], json: { origins: { "portal-item": { name: "layerType", write: { enabled: !0, ignoreOrigin: !0 } } } } })], u.prototype, "operationalLayerType", void 0), s([n(q.outFields)], u.prototype, "outFields", void 0), s([n({ readOnly: !0 })], u.prototype, "parsedUrl", null), s([n({ clonable: !1 })], u.prototype, "source", null), s([n({ type: x.ofType(O), json: { origins: { service: { read: { source: "subtypes", reader(e, t, r) {
  let i = null;
  if (this.useUniqueColorsForSublayers) {
    const o = pt(t, r);
    i = o ? yt(e.length, o) : null;
  }
  const l = e.map(({ code: o }, p) => {
    const d = new O({ subtypeCode: o });
    d.read(t, r);
    const y = i?.[p];
    return y && d.read({ drawingInfo: { renderer: y.toJSON() } }, r), d;
  });
  return new (x.ofType(O))(l);
} } } }, name: "layers", write: { ignoreOrigin: !0 } } })], u.prototype, "sublayers", void 0), s([n()], u.prototype, "useUniqueColorsForSublayers", void 0), s([n({ type: lt })], u.prototype, "timeInfo", void 0), s([n({ json: { origins: { "portal-item": { write: { enabled: !0, ignoreOrigin: !0, writerEnsuresNonNull: !0 } } } } })], u.prototype, "title", void 0), s([S("service", "title", ["name"])], u.prototype, "readTitleFromService", null), s([n({ json: { read: !1 } })], u.prototype, "type", void 0), u = s([Q(gt)], u);
const wt = u;
export {
  wt as default
};
//# sourceMappingURL=SubtypeGroupLayer-BPpAKvRe.js.map
