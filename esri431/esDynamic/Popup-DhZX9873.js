import { ck as un, as as lt, cj as ss, av as Mi, Z as os, qQ as rs, G, dn as as, dp as hn, sU as Ai, au as Ve, sV as $t, Q as ai, a8 as re, c9 as ls, bQ as r, bR as a, gf as Ke, a1 as qe, bS as T, ew as pe, cz as v, cA as N, s as L, o4 as Ci, g1 as ds, l1 as Q, l2 as ee, cw as dt, l3 as Ie, l4 as u, sW as C, sX as $i, sY as Ei, sZ as _e, s_ as cs, b5 as us, mW as hs, s$ as pn, h6 as mn, t0 as ps, jk as je, t1 as li, bW as ms, jx as fs, et as De, o3 as gs, fS as rt, fT as Vt, dM as ys, U as vs, gB as Yt, cF as Nt, t2 as ws, t3 as _s, t4 as bs, fb as fn, t5 as Is, D as di, t6 as Fs, t7 as gn, t8 as Ms, t9 as xi, db as yn, ev as ci, gP as xe, fv as Xe, cE as vn, fQ as Pt, fE as ui, bT as wn, eD as ki, f9 as Ti, b3 as As, j2 as _n, ta as bn, tb as Et, q3 as In, cu as xt, hJ as Fn, ds as Cs, h3 as at, fd as $s, tc as Es, td as ut, te as Mn, tf as xs, tg as ks, jn as Dt, th as Ts, ti as Ls, gK as Ns, tj as Ps, eL as Ss, cI as Os, f6 as Rs, fs as Vs, e7 as Ds, eM as Li, tk as An, l6 as Bs, oF as gt } from "./main-DZxT3i7S.js";
import { s as ae } from "./substitute-BBJmR2W2.js";
import { T as qs, s as js } from "./ReactiveSet-1Be3xlst.js";
import { $ as Ws, j as Cn } from "./utils-CGnCHnho.js";
import { j as zs } from "./shared-BBl_3BOa.js";
import { n as Ni } from "./layerViewUtils-D3p_A1CQ.js";
function hi(e, t, i, n) {
  let s = null, o = 1e3;
  typeof t == "number" ? (o = t, n = i) : (s = t ?? null, o = i);
  let l, d = 0;
  const c = () => {
    d = 0, e.apply(n, l);
  }, h = (...p) => {
    s && s.apply(n, p), l = p, o ? d || (d = setTimeout(c, o)) : c();
  };
  return h.remove = () => {
    d && (clearTimeout(d), d = 0);
  }, h.forceUpdate = () => {
    d && (clearTimeout(d), c());
  }, h.hasPendingUpdates = () => !!d, h;
}
function Kt(e) {
  switch (e?.type) {
    case "point":
      return e;
    case "extent":
      return e.center;
    case "polygon":
      return e.centroid;
    case "multipoint":
    case "polyline":
      return e.extent?.center;
    default:
      return null;
  }
}
function Hs(e) {
  return e ? { backgroundImage: `url(${e})` } : {};
}
function Us({ action: e, feature: t }) {
  const i = t?.attributes, n = "image" in e ? e.image : void 0;
  return n && i ? ae(n, i) : n ?? "";
}
const Zs = "esri.widgets.Feature.support.featureUtils", ei = () => G.getLogger(Zs), Gs = /href=(""|'')/gi, Qs = /(\{([^{\r\n]+)\})/g, Js = /'/g, $n = /^\s*expression\//i, Xs = /(\n)/gi, Ys = /[\u00A0-\u9999<>&]/gim, Ks = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi, eo = /^(?:mailto:|tel:)/, En = "relationships/", Pi = un("short-date-short-time");
function xn(e) {
  if (e != null) return (e.sourceLayer || e.layer) ?? void 0;
}
async function kt({ type: e, value: t, event: i }) {
  try {
    return typeof t == "function" ? t(i) : await t;
  } catch (n) {
    return void ei().error("error", `An error occurred when calling the "${e}" function`, { error: n, graphic: i.graphic, value: t });
  }
}
function kn(e = "") {
  if (e) return !eo.test(e.trim().toLowerCase());
}
function pi(e) {
  return !!e && $n.test(e);
}
function to(e, t) {
  if (!t || !pi(t) || !e) return;
  const i = t.replace($n, "").toLowerCase();
  return e.find(({ name: n }) => n.toLowerCase() === i);
}
function Tn(e, t) {
  const i = to(t, e?.fieldName);
  return i ? i.title || null : e ? e.label || e.fieldName : null;
}
function io(e, t) {
  return `{${t.get(e.toLowerCase())?.fieldName || e}}`;
}
function no(e) {
  return e.replaceAll(Gs, "");
}
function ct(e, t) {
  const i = mi(t, e);
  return i ? i.name : e;
}
function so(e, t) {
  return e && e.map((i) => ct(i, t));
}
function mi(e, t) {
  return e && typeof e.getField == "function" && t ? e.getField(t) ?? null : null;
}
function Ln(e) {
  return `${e}`.trim();
}
function Se({ attributes: e, globalAttributes: t, layer: i, text: n, expressionAttributes: s, fieldInfoMap: o }) {
  return n ? ti({ formattedAttributes: t, template: lo(n, { ...t, ...s, ...e }, i), fieldInfoMap: o }) : "";
}
function ti({ formattedAttributes: e, template: t, fieldInfoMap: i }) {
  return Ln(no(lt(lt(t, (n) => io(n, i)), e)));
}
function oo(e, t, i = !1) {
  const n = t[e];
  if (typeof n == "string") {
    const s = "%27", o = (i ? encodeURIComponent(n) : n).replaceAll(Js, s);
    t[e] = o;
  }
}
function ro(e, t = !1) {
  const i = { ...e };
  return Object.keys(i).forEach((n) => oo(n, i, t)), i;
}
function ao(e, t, i) {
  const n = (t = Ln(t)) && t[0] !== "{";
  return lt(e, ro(i, n || !1));
}
function ii(e, t) {
  return e.replaceAll(Qs, (i, n, s) => {
    const o = mi(t, s);
    return o ? `{${o.name}}` : n;
  });
}
function lo(e, t, i) {
  const n = ii(e, i);
  return n && n.replaceAll(Ks, (s, o, l) => ao(s, o || l, t));
}
function co(e, t) {
  if (typeof e == "string" && t && t.dateFormat == null && (t.places != null || t.digitSeparator != null)) {
    const i = Number(e);
    if (!isNaN(i)) return i;
  }
  return e;
}
function Nn(e) {
  return e != null && typeof e == "object" && "fieldsIndex" in e && "geometryType" in e && "getField" in e && "load" in e && "loaded" in e && "objectIdField" in e && "spatialReference" in e && "type" in e && (e.type === "feature" || e.type === "scene" || e.type === "subtype-sublayer" || e.type === "sublayer") && "when" in e;
}
function uo(e) {
  return e != null && typeof e == "object" && "createQuery" in e && "queryFeatureCount" in e && "queryObjectIds" in e && "queryRelatedFeatures" in e && "queryRelatedFeaturesCount" in e && "relationships" in e;
}
function ho(e) {
  return !!(e && typeof e == "object" && "createQuery" in e && "queryFeatureCount" in e && "type" in e) && (e.type === "subtype-sublayer" && "parent" in e && e.parent && typeof e.parent == "object" ? "globalIdField" in e.parent : "globalIdField" in e);
}
function Pn(e) {
  return Nn(e) && uo(e);
}
function po(e) {
  return Nn(e) && ho(e);
}
function mo(e, t) {
  const { fieldInfos: i, fieldName: n, preventPlacesFormatting: s, layer: o, timeZone: l } = t, d = Sn(i, n), c = mi(o, n);
  if (d && !Ai(n)) {
    const p = c?.type, m = d.format?.dateFormat;
    if (p === "date" || p === "date-only" || p === "time-only" || p === "timestamp-offset" || m) return Cn(e, { format: m, fieldType: p, timeZoneOptions: { layerTimeZone: o && "preferredTimeZone" in o ? o.preferredTimeZone : null, viewTimeZone: l, datesInUnknownTimezone: !(!o || !("datesInUnknownTimezone" in o)) && !!o.datesInUnknownTimezone } });
  }
  const h = d?.format;
  return typeof e == "string" && Ai(n) && h ? fo(e, h) : typeof (e = co(e, h)) == "string" || e == null || h == null ? ht(e) : Ve(e, s ? { ...$t(h), minimumFractionDigits: 0, maximumFractionDigits: 20 } : $t(h));
}
function fo(e, t) {
  return e = e.trim(), /\d{2}-\d{2}/.test(e) ? e : e.includes(",") ? Bt(e, ",", ", ", t) : e.includes(";") ? Bt(e, ";", "; ", t) : e.includes(" ") ? Bt(e, " ", " ", t) : Ve(Number(e), $t(t));
}
function Bt(e, t, i, n) {
  return e.trim().split(t).map((s) => Ve(Number(s), $t(n))).join(i);
}
function Sn(e, t) {
  if (e?.length && t) return e.find((i) => i.fieldName?.toLowerCase() === t.toLowerCase());
}
function go({ fieldName: e, graphic: t, layer: i }) {
  if (be(e) || !i || typeof i.getFeatureType != "function") return null;
  const { typeIdField: n } = i;
  if (!n || e !== n) return null;
  const s = i.getFeatureType(t);
  return s ? s.name : null;
}
function yo({ fieldName: e, value: t, graphic: i, layer: n }) {
  if (be(e) || !n || typeof n.getFieldDomain != "function") return null;
  const s = i && n.getFieldDomain(e, { feature: i, excludeImpliedDomains: ai("esri-widget-legacy-field-domain-calculation") });
  return s && s.type === "coded-value" ? s.getName(t) : null;
}
function vo(e, t, i, n) {
  const { creatorField: s, creationDateField: o, editorField: l, editDateField: d } = e;
  if (!t) return;
  const c = ss(n && "preferredTimeZone" in n ? n.preferredTimeZone : null, !(!n || !("datesInUnknownTimezone" in n)) && !!n.datesInUnknownTimezone, i, Pi, "date"), h = { ...Pi, ...c }, p = t[d];
  if (typeof p == "number") {
    const f = t[l];
    return { type: "edit", date: Mi(p, h), user: f };
  }
  const m = t[o];
  if (typeof m == "number") {
    const f = t[s];
    return { type: "create", date: Mi(m, h), user: f };
  }
  return null;
}
function wo(e, t) {
  const i = /* @__PURE__ */ new Map();
  if (!e) return i;
  for (const n of e) {
    if (!n.fieldName) continue;
    const s = ct(n.fieldName, t);
    n.fieldName = s, i.set(s.toLowerCase(), n);
  }
  return i;
}
function Si(e) {
  const t = [];
  if (!e) return t;
  const { fieldInfos: i, content: n } = e;
  return i && t.push(...i), n && Array.isArray(n) && n.forEach((s) => {
    if (s.type === "fields") {
      const o = s?.fieldInfos;
      o && t.push(...o);
    }
  }), t;
}
function fi(e) {
  return e.replaceAll(Ys, (t) => `&#${t.charCodeAt(0)};`);
}
function ht(e) {
  return typeof e == "string" ? e.replaceAll(Xs, '<br class="esri-text-new-line" />') : e;
}
function On(e) {
  const { value: t, fieldName: i, fieldInfos: n, fieldInfoMap: s, layer: o, graphic: l, timeZone: d } = e;
  if (t == null) return "";
  const c = yo({ fieldName: i, value: t, graphic: l, layer: o });
  if (c) return c;
  const h = go({ fieldName: i, graphic: l, layer: o });
  if (h) return h;
  if (s.get(i.toLowerCase())) return mo(t, { fieldInfos: n || Array.from(s.values()), fieldName: i, layer: o, timeZone: d });
  const p = o?.fieldsIndex?.get(i);
  return p && (Ws(p) || as(p)) ? Cn(t, { fieldType: p.type, timeZoneOptions: { layerTimeZone: o && "preferredTimeZone" in o ? o.preferredTimeZone : null, viewTimeZone: d, datesInUnknownTimezone: !(!o || !("datesInUnknownTimezone" in o)) && !!o.datesInUnknownTimezone } }) : ht(t);
}
function qt({ fieldInfos: e, attributes: t, layer: i, graphic: n, fieldInfoMap: s, relatedInfos: o, timeZone: l }) {
  const d = {};
  return o?.forEach((c) => Fo({ attributes: d, relatedInfo: c, fieldInfoMap: s, fieldInfos: e, layer: i, timeZone: l })), t && Object.keys(t).forEach((c) => {
    const h = t[c];
    d[c] = On({ fieldName: c, fieldInfos: e, fieldInfoMap: s, layer: i, value: h, graphic: n, timeZone: l });
  }), d;
}
async function Rn(e, t) {
  const { layer: i, graphic: n, outFields: s, objectIds: o, returnGeometry: l, spatialReference: d } = e, c = o[0];
  if (typeof c != "number" && typeof c != "string") {
    const p = "Could not query required fields for the specified feature. The feature's ID is invalid.", m = { layer: i, graphic: n, objectId: c, requiredFields: s };
    return ei().warn(p, m), null;
  }
  if (!os(i)?.operations?.supportsQuery) {
    const p = "The specified layer cannot be queried. The following fields will not be available.", m = { layer: i, graphic: n, requiredFields: s, returnGeometry: l };
    return ei().warn(p, m), null;
  }
  const h = i.createQuery();
  return h.objectIds = o, h.outFields = s?.length ? s : [i.objectIdField], h.returnGeometry = !!l, h.returnZ = !!l, h.returnM = !!l, h.outSpatialReference = d, (await i.queryFeatures(h, t)).features[0];
}
async function _o(e) {
  if (!e.expressionInfos?.length) return !1;
  const t = await hn(), { arcadeUtils: { hasGeometryFunctions: i } } = t;
  return i(e);
}
async function bo({ graphic: e, popupTemplate: t, layer: i, spatialReference: n }, s) {
  if (!i || !t || (typeof i.load == "function" && await i.load(s), !e.attributes)) return;
  const o = i.objectIdField, l = e.attributes[o];
  if (l == null) return;
  const d = [l], c = await t.getRequiredFields(i.fieldsIndex), h = rs(c, e), p = h ? [] : c.includes(o) ? c : [...c, o], m = t.returnGeometry || await _o(t);
  if (h && !m) return;
  const f = await Rn({ layer: i, graphic: e, outFields: p, objectIds: d, returnGeometry: m, spatialReference: n }, s);
  f && (f.geometry && (e.geometry = f.geometry), f.attributes && (e.attributes = { ...e.attributes, ...f.attributes }));
}
function be(e = "") {
  return !!e && e.includes(En);
}
function Io(e) {
  return e ? `${En}${e.layerId}/${e.fieldName}` : "";
}
function Oi({ attributes: e, graphic: t, relatedInfo: i, fieldInfos: n, fieldInfoMap: s, layer: o, timeZone: l }) {
  e && t && i && Object.keys(t.attributes).forEach((d) => {
    const c = Io({ layerId: i.relation.id.toString(), fieldName: d }), h = t.attributes[d];
    e[c] = On({ fieldName: c, fieldInfos: n, fieldInfoMap: s, layer: o, value: h, graphic: t, timeZone: l });
  });
}
function Fo({ attributes: e, relatedInfo: t, fieldInfoMap: i, fieldInfos: n, layer: s, timeZone: o }) {
  e && t && (t.relatedFeatures?.forEach((l) => Oi({ attributes: e, graphic: l, relatedInfo: t, fieldInfoMap: i, fieldInfos: n, layer: s, timeZone: o })), t.relatedStatsFeatures?.forEach((l) => Oi({ attributes: e, graphic: l, relatedInfo: t, fieldInfoMap: i, fieldInfos: n, layer: s, timeZone: o })));
}
const Ri = (e) => {
  if (!e) return !1;
  const t = e.toUpperCase();
  return t.includes("CURRENT_TIMESTAMP") || t.includes("CURRENT_DATE") || t.includes("CURRENT_TIME");
}, Vn = ({ layer: e, method: t, query: i, definitionExpression: n }) => {
  if (!e.capabilities?.query?.supportsCacheHint || t === "attachments") return;
  const s = i.where != null ? i.where : null, o = i.geometry != null ? i.geometry : null;
  Ri(n) || Ri(s) || o?.type === "extent" || i.resultType === "tile" || (i.cacheHint = !0);
}, Mo = ({ query: e, layer: t, method: i }) => {
  Vn({ layer: t, method: i, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
}, Ao = ({ queryPayload: e, layer: t, method: i }) => {
  Vn({ layer: t, method: i, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
};
function Co(e, t, i) {
  return e && t && i ? t.type === "sublayer" ? Qe({ layers: t.layer?.sublayers, map: e, relatedLayer: t, relationship: i }) || Qe({ layers: t.layer?.subtables, map: e, relatedLayer: t, relationship: i }) : Qe({ layers: e.allLayers, map: e, relatedLayer: t, relationship: i }) || Qe({ layers: e.allTables, map: e, relatedLayer: t, relationship: i }) : null;
}
function Vi(e, t) {
  return e && "utilityNetworks" in e && t ? e.utilityNetworks?.find((i) => i.isUtilityLayer(t)) : null;
}
function Di(e, t) {
  return e?.allTables.find((i) => i.type === "feature" && i.layerId === t.id && i.url === t.layer?.url);
}
function Qe({ map: e, relationship: t, relationship: { relatedTableId: i }, relatedLayer: n, layers: s }) {
  if (!s) return null;
  for (const o of s) {
    if (o.type === "map-image") {
      const d = Qe({ layers: o.sublayers, map: e, relatedLayer: n, relationship: t }) || Qe({ layers: o.subtables, map: e, relatedLayer: n, relationship: t });
      if (d) return d;
      continue;
    }
    if (!Pn(o)) continue;
    if (n.type === "sublayer") {
      if (o !== n && o.id === i) return o.isTable ? Di(e, o) : o;
      continue;
    }
    const l = n.type === "scene" && n.associatedLayer ? n.associatedLayer.url : n.url;
    if (!l) return null;
    if (o.type !== "sublayer") {
      if (o !== n && o.url === l && o.layerId === i) return o;
    } else if (o !== n && o.layer?.url === l && o.id === i) return o.isTable ? Di(e, o) : o;
  }
  return null;
}
const Bi = { editing: !1, operations: { add: !0, update: !0, delete: !0 } }, Dn = re.ofType(ls);
let te = class extends pe {
  constructor(t) {
    super(t), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...Bi }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new Dn(), this.fileInfos = new re(), this.graphic = null, this.mode = "view", this.filesEnabled = !1, this.addHandles(v(() => this.graphic, () => this._graphicChanged(), N));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t) {
    return { ...Bi, ...t };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t } = this;
    if (!t) return !1;
    const i = t.layer || t.sourceLayer;
    return i?.loaded && "capabilities" in i && i.capabilities && "operations" in i.capabilities && "supportsResizeAttachments" in i.capabilities.operations && i.capabilities.operations.supportsResizeAttachments || !1;
  }
  async getAttachments() {
    const { _attachmentLayer: t, attachmentInfos: i } = this;
    if (!t || typeof t.queryAttachments != "function") throw new L("invalid-layer", "getAttachments(): A valid layer is required.");
    const n = this._getObjectId();
    if (typeof n != "number") throw new L("invalid-object-id", "getAttachments(): Numeric object id is required");
    const s = new Ci({ objectIds: [n], returnMetadata: !0 }), o = [], l = t.queryAttachments(s).then((c) => c[n] || o).catch(() => o);
    this._getAttachmentsPromise = l, this.notifyChange("state");
    const d = await l;
    return i.destroyAll(), d.length && i.addMany(d), this._getAttachmentsPromise = null, this.notifyChange("state"), d;
  }
  async addAttachment(t, i = this.graphic) {
    const { _attachmentLayer: n, attachmentInfos: s, capabilities: o } = this;
    if (!i) throw new L("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: i });
    if (!t) throw new L("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t });
    if (!o.operations?.add) throw new L("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!n || typeof n.addAttachment != "function") throw new L("invalid-layer", "addAttachment(): A valid layer is required.");
    const l = n.addAttachment(i, t).then((c) => this._queryAttachment(c.objectId, i)), d = await l;
    return s.add(d), d;
  }
  async deleteAttachment(t) {
    const { _attachmentLayer: i, attachmentInfos: n, graphic: s, capabilities: o } = this;
    if (!t) throw new L("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t });
    if (!o.operations?.delete) throw new L("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!i || typeof i.deleteAttachments != "function") throw new L("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!s) throw new L("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const l = i.deleteAttachments(s, [t.id]).then(() => t), d = await l;
    return n.remove(d), d.destroy(), d;
  }
  async updateAttachment(t, i = this.activeAttachmentInfo) {
    const { _attachmentLayer: n, attachmentInfos: s, graphic: o, capabilities: l } = this;
    if (!t) throw new L("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t });
    if (!i) throw new L("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: i });
    if (!l.operations?.update) throw new L("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const d = s.indexOf(i);
    if (!n || typeof n.updateAttachment != "function") throw new L("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!o) throw new L("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c = n.updateAttachment(o, i.id, t).then((p) => this._queryAttachment(p.objectId)), h = await c;
    return s.splice(d, 1, h), h;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t) => this.addAttachment(t.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t, i) {
    if (!t || !i) return null;
    const n = { file: t, form: i };
    return this.fileInfos.add(n), n;
  }
  updateFile(t, i, n = this.activeFileInfo) {
    if (!t || !i || !n) return null;
    const s = this.fileInfos.indexOf(n);
    return s > -1 && this.fileInfos.splice(s, 1, { file: t, form: i }), this.fileInfos.items[s];
  }
  deleteFile(t) {
    const i = this.fileInfos.find((n) => n.file === t);
    return i ? (this.fileInfos.remove(i), i) : null;
  }
  async _queryAttachment(t, i) {
    const { _attachmentLayer: n } = this;
    if (!t || !n?.queryAttachments) throw new L("invalid-attachment-id", "Could not query attachment.");
    const s = this._getObjectId(i);
    if (typeof s != "number") throw new L("invalid-object-id", "getAttachments(): Numeric object id is required");
    const o = new Ci({ objectIds: [s], attachmentsWhere: `AttachmentId=${t}`, returnMetadata: !0 });
    return n.queryAttachments(o).then((l) => l[s][0]);
  }
  _getObjectId(t = this.graphic) {
    return t?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => this.attachmentInfos.destroyAll()));
  }
  _setAttachmentLayer() {
    const { graphic: t } = this, i = xn(t);
    this._attachmentLayer = i ? i.type === "scene" && i.associatedLayer != null ? i.associatedLayer : i : null;
  }
};
r([a()], te.prototype, "capabilities", void 0), r([Ke("capabilities")], te.prototype, "castCapabilities", null), r([a()], te.prototype, "activeAttachmentInfo", void 0), r([a()], te.prototype, "activeFileInfo", void 0), r([a({ readOnly: !0, type: Dn })], te.prototype, "attachmentInfos", void 0), r([a()], te.prototype, "fileInfos", void 0), r([a({ type: qe })], te.prototype, "graphic", void 0), r([a()], te.prototype, "mode", void 0), r([a({ readOnly: !0 })], te.prototype, "state", null), r([a()], te.prototype, "filesEnabled", void 0), r([a({ readOnly: !0 })], te.prototype, "supportsResizeAttachments", null), te = r([T("esri.widgets.Attachments.AttachmentsViewModel")], te);
const gi = te;
function qi(e) {
  const t = e.toLowerCase();
  return t === "image/bmp" || t === "image/emf" || t === "image/exif" || t === "image/gif" || t === "image/x-icon" || t === "image/jpeg" || t === "image/png" || t === "image/tiff" || t === "image/x-wmf";
}
function $o(e) {
  const t = ds("esri/themes/base/images/files/");
  return e ? e === "text/plain" ? `${t}text-32.svg` : e === "application/pdf" ? `${t}pdf-32.svg` : e === "text/csv" ? `${t}csv-32.svg` : e === "application/gpx+xml" ? `${t}gpx-32.svg` : e === "application/x-dwf" ? `${t}cad-32.svg` : e === "application/postscript" || e === "application/json" || e === "text/xml" || e === "model/vrml" ? `${t}code-32.svg` : e === "application/x-zip-compressed" || e === "application/x-7z-compressed" || e === "application/x-gzip" || e === "application/x-tar" || e === "application/x-gtar" || e === "application/x-bzip2" || e === "application/gzip" || e === "application/x-compress" || e === "application/x-apple-diskimage" || e === "application/x-rar-compressed" || e === "application/zip" ? `${t}zip-32.svg` : e.includes("image/") ? `${t}image-32.svg` : e.includes("audio/") ? `${t}sound-32.svg` : e.includes("video/") ? `${t}video-32.svg` : e.includes("msexcel") || e.includes("ms-excel") || e.includes("spreadsheetml") ? `${t}excel-32.svg` : e.includes("msword") || e.includes("ms-word") || e.includes("wordprocessingml") ? `${t}word-32.svg` : e.includes("powerpoint") || e.includes("presentationml") ? `${t}report-32.svg` : `${t}generic-32.svg` : `${t}generic-32.svg`;
}
const we = { close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", locateCircled: "esri-icon-locate-circled", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" }, ji = { addButton: !0, addSubmitButton: !0, cancelAddButton: !0, cancelUpdateButton: !0, deleteButton: !0, errorMessage: !0, progressBar: !0, updateButton: !0 }, k = "esri-attachments", F = { base: k, loaderContainer: `${k}__loader-container`, loader: `${k}__loader`, fadeIn: `${k}--fade-in`, container: `${k}__container`, containerList: `${k}__container--list`, containerPreview: `${k}__container--preview`, actions: `${k}__actions`, deleteButton: `${k}__delete-button`, addAttachmentButton: `${k}__add-attachment-button`, errorMessage: `${k}__error-message`, items: `${k}__items`, item: `${k}__item`, itemButton: `${k}__item-button`, itemMask: `${k}__item-mask`, itemMaskIcon: `${k}__item-mask--icon`, itemImage: `${k}__image`, itemImageResizable: `${k}__image--resizable`, itemLabel: `${k}__label`, itemFilename: `${k}__filename`, itemChevronIcon: `${k}__item-chevron-icon`, itemLink: `${k}__item-link`, itemLinkOverlay: `${k}__item-link-overlay`, itemLinkOverlayIcon: `${k}__item-link-overlay-icon`, itemEditIcon: `${k}__item-edit-icon`, itemAddIcon: `${k}__item-add-icon`, itemAddButton: `${k}__item-add-button`, formNode: `${k}__form-node`, fileFieldset: `${k}__file-fieldset`, fileLabel: `${k}__file-label`, fileName: `${k}__file-name`, fileInput: `${k}__file-input`, metadata: `${k}__metadata`, metadataFieldset: `${k}__metadata-fieldset`, progressBar: `${k}__progress-bar` }, jt = window.CSS;
let U = class extends ee {
  constructor(t, i) {
    super(t, i), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = !1, this.viewModel = null, this.visibleElements = { ...ji }, this._supportsImageOrientation = jt && jt.supports && jt.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(t) {
    return t?.viewModel || (t = { viewModel: new gi(), ...t }), t;
  }
  initialize() {
    this.addHandles([dt(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), dt(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), v(() => this.viewModel?.mode, () => this._modeChanged(), N)]);
  }
  loadDependencies() {
    return Ie({ icon: () => import("./calcite-icon-DNGdToul.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(t) {
    this.viewModel.capabilities = t;
  }
  get effectiveDisplayType() {
    const { displayType: t } = this;
    return t && t !== "auto" ? t : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(t) {
    this.viewModel.graphic = t;
  }
  get icon() {
    return "attachment";
  }
  set icon(t) {
    this._overrideIfSome("icon", t);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t) {
    this._overrideIfSome("label", t);
  }
  castVisibleElements(t) {
    return { ...ji, ...t };
  }
  addAttachment() {
    const { _addAttachmentForm: t, viewModel: i } = this;
    return this._set("submitting", !0), this._set("error", null), i.addAttachment(t).then((n) => (this._set("submitting", !1), this._set("error", null), i.mode = "view", n)).catch((n) => {
      throw this._set("submitting", !1), this._set("error", new L("attachments:add-attachment", this.messages.addErrorMessage, n)), n;
    });
  }
  deleteAttachment(t) {
    const { viewModel: i } = this;
    return this._set("submitting", !0), this._set("error", null), i.deleteAttachment(t).then((n) => (this._set("submitting", !1), this._set("error", null), i.mode = "view", n)).catch((n) => {
      throw this._set("submitting", !1), this._set("error", new L("attachments:delete-attachment", this.messages.deleteErrorMessage, n)), n;
    });
  }
  updateAttachment() {
    const { viewModel: t } = this, { _updateAttachmentForm: i } = this;
    return this._set("submitting", !0), this._set("error", null), t.updateAttachment(i).then((n) => (this._set("submitting", !1), this._set("error", null), t.mode = "view", n)).catch((n) => {
      throw this._set("submitting", !1), this._set("error", new L("attachments:update-attachment", this.messages.updateErrorMessage, n)), n;
    });
  }
  addFile() {
    const t = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", t;
  }
  updateFile() {
    const { viewModel: t } = this, i = t.updateFile(this.selectedFile, this._updateAttachmentForm, t.activeFileInfo);
    return t.mode = "view", i;
  }
  deleteFile(t) {
    const i = this.viewModel.deleteFile(t || this.viewModel.activeFileInfo?.file);
    return this.viewModel.mode = "view", i;
  }
  render() {
    const { submitting: t, viewModel: i } = this, { state: n } = i;
    return u("div", { class: this.classes(F.base, C.widget) }, t ? this._renderProgressBar() : null, n === "loading" ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: t, visibleElements: i } = this;
    return t && i.errorMessage ? u("div", { class: F.errorMessage, key: "error-message" }, t.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: t, mode: i, activeAttachmentInfo: n } = this.viewModel;
    return i === "add" ? this._renderAddForm() : i === "edit" ? this._renderDetailsForm(n || t) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return u("div", { class: F.loaderContainer, key: "loader" }, u("div", { class: F.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? u("div", { class: F.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: t, selectedFile: i } = this, n = t || !i, s = this.visibleElements.cancelAddButton ? u("button", { bind: this, class: this.classes(C.button, C.buttonTertiary, C.buttonSmall, C.buttonHalf, t && C.buttonDisabled), disabled: t, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, o = this.visibleElements.addSubmitButton ? u("button", { class: this.classes(C.button, C.buttonSecondary, C.buttonSmall, C.buttonHalf, { [C.buttonDisabled]: n }), disabled: n, type: "submit" }, this.messages.add) : null, l = i ? u("span", { class: F.fileName, key: "file-name" }, i.name) : null, d = u("form", { afterCreate: $i, afterRemoved: Ei, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, u("fieldset", { class: F.fileFieldset }, l, u("label", { class: this.classes(F.fileLabel, C.button, C.buttonSecondary) }, i ? this.messages.changeFile : this.messages.selectFile, u("input", { bind: this, class: F.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), o, s);
    return u("div", { class: F.formNode, key: "add-form-container" }, d);
  }
  _renderDetailsForm(t) {
    const { visibleElements: i, viewModel: n, selectedFile: s, submitting: o } = this, { capabilities: l } = n, d = o || !s;
    let c, h, p, m;
    s ? (c = s.type, h = s.name, p = s.size) : t && "file" in t ? (c = t.file.type, h = t.file.name, p = t.file.size) : t && "contentType" in t && (c = t.contentType, h = t.name, p = t.size, m = t.url);
    const f = l.editing && l.operations?.delete && i.deleteButton ? u("button", { bind: this, class: this.classes(C.button, C.buttonSmall, C.buttonTertiary, F.deleteButton, { [C.buttonDisabled]: o }), disabled: o, key: "delete-button", onclick: (X) => this._submitDeleteAttachment(X, t), type: "button" }, this.messages.delete) : void 0, g = l.editing && l.operations?.update && i.updateButton ? u("button", { class: this.classes(C.button, C.buttonSmall, C.buttonThird, { [C.buttonDisabled]: d }), disabled: d, key: "update-button", type: "submit" }, this.messages.update) : void 0, y = this.visibleElements.cancelUpdateButton ? u("button", { bind: this, class: this.classes(C.button, C.buttonSmall, C.buttonTertiary, C.buttonThird, { [C.buttonDisabled]: o }), disabled: o, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, _ = l.editing && l.operations?.update ? u("fieldset", { class: F.fileFieldset, key: "file" }, u("span", { class: F.fileName, key: "file-name" }, h), u("label", { class: this.classes(F.fileLabel, C.button, C.buttonSecondary) }, this.messages.changeFile, u("input", { bind: this, class: F.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, b = u("fieldset", { class: F.metadataFieldset, key: "size" }, u("label", null, qs(this.messagesUnits, p ?? 0))), M = u("fieldset", { class: F.metadataFieldset, key: "content-type" }, u("label", null, c)), w = m != null ? u("a", { class: F.itemLink, href: m, rel: "noreferrer", target: "_blank" }, this._renderImageMask(t, 400), u("div", { class: F.itemLinkOverlay }, u("span", { class: F.itemLinkOverlayIcon }, u("calcite-icon", { icon: "launch" })))) : this._renderImageMask(t, 400), I = u("form", { afterCreate: $i, afterRemoved: Ei, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (X) => this._submitUpdateAttachment(X, t) }, u("div", { class: F.metadata }, b, M), _, u("div", { class: F.actions }, f, y, g));
    return u("div", { class: F.formNode, key: "edit-form-container" }, w, I);
  }
  _renderImageMask(t, i) {
    return t ? "file" in t ? this._renderGenericImageMask(t.file.name, t.file.type) : this._renderImageMaskForAttachment(t, i) : null;
  }
  _renderGenericImageMask(t, i) {
    const { supportsResizeAttachments: n } = this.viewModel, s = $o(i), o = { [F.itemImageResizable]: n };
    return u("div", { class: this.classes(F.itemMaskIcon, F.itemMask), key: s }, u("img", { alt: t, class: this.classes(o, F.itemImage), src: s, title: t }));
  }
  _renderImageMaskForAttachment(t, i) {
    const { supportsResizeAttachments: n } = this.viewModel;
    if (!t) return null;
    const { contentType: s, name: o, url: l } = t;
    if (!n || !qi(s)) return this._renderGenericImageMask(o, s);
    const d = this._getCSSTransform(t), c = d ? { transform: d, "image-orientation": "none" } : {}, h = `${l}${l?.includes("?") ? "&" : "?"}w=${i}`, p = { [F.itemImageResizable]: n };
    return u("div", { class: this.classes(F.itemMask), key: h }, u("img", { alt: o, class: this.classes(p, F.itemImage), src: h, styles: c, title: o }));
  }
  _renderFile(t) {
    const { file: i } = t;
    return u("li", { class: F.item, key: i }, u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F.itemButton, key: "details-button", onclick: () => this._startEditFile(t), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(t), u("label", { class: F.itemLabel }, u("span", { class: F.itemFilename }, i.name || this.messages.noTitle), u("span", { "aria-hidden": "true", class: this.classes(F.itemChevronIcon, _e(this.container) ? we.left : we.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: t, displayType: i }) {
    const { viewModel: n, effectiveDisplayType: s } = this, { capabilities: o, supportsResizeAttachments: l } = n, { contentType: d, name: c, url: h } = t, p = this._renderImageMask(t, i === "list" ? 48 : 400), m = o.editing ? u("span", { "aria-hidden": "true", class: this.classes(F.itemChevronIcon, _e(this.container) ? we.left : we.right) }) : null, f = [p, s === "preview" && l && qi(d) ? null : u("label", { class: F.itemLabel }, u("span", { class: F.itemFilename }, c || this.messages.noTitle), m)], g = o.editing ? u("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F.itemButton, "data-attachment-info-id": t.id, key: "details-button", onclick: () => this._startEditAttachment(t), title: this.messages.attachmentDetails, type: "button" }, f) : u("a", { class: F.itemButton, href: h ?? void 0, key: "details-link", rel: "noreferrer", target: "_blank" }, f);
    return u("li", { class: F.item, key: t }, g);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: t, viewModel: i, visibleElements: n } = this, { attachmentInfos: s, capabilities: o, fileInfos: l } = i, d = !!s?.length, c = !!l?.length, h = { [F.containerList]: t !== "preview", [F.containerPreview]: t === "preview" }, p = o.editing && o.operations?.add && n.addButton ? u("button", { bind: this, class: this.classes(C.button, C.buttonTertiary, F.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, u("span", { "aria-hidden": "true", class: this.classes(F.itemAddIcon, we.plus) }), this.messages.add) : void 0, m = d ? u("ul", { class: F.items, key: "attachments-list" }, s.toArray().map((y) => this._renderAttachmentInfo({ attachmentInfo: y, displayType: t }))) : void 0, f = c ? u("ul", { class: F.items, key: "file-list" }, l.toArray().map((y) => this._renderFile(y))) : void 0, g = c || d ? void 0 : u("div", { class: C.empty }, this.messages.noAttachments);
    return u("div", { class: this.classes(F.container, h), key: "attachments-container" }, m, f, g, p);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(t) {
    const i = t.target, n = i.files?.item(0);
    this._set("selectedFile", n);
  }
  _submitDeleteAttachment(t, i) {
    t.preventDefault(), i && ("file" in i ? this.deleteFile(i.file) : i && this.deleteAttachment(i));
  }
  _submitAddAttachment(t) {
    t.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(t, i) {
    t.preventDefault(), i && "file" in i ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(t) {
    const { viewModel: i } = this;
    i.activeFileInfo = null, i.activeAttachmentInfo = t, i.mode = "edit";
  }
  _startEditFile(t) {
    const { viewModel: i } = this;
    i.activeAttachmentInfo = null, i.activeFileInfo = t, i.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(t) {
    t.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(t) {
    const { orientationInfo: i } = t;
    return !this._supportsImageOrientation && i ? [i.rotation ? `rotate(${i.rotation}deg)` : "", i.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
r([a()], U.prototype, "capabilities", null), r([a()], U.prototype, "displayType", void 0), r([a({ readOnly: !0 })], U.prototype, "effectiveDisplayType", null), r([a()], U.prototype, "graphic", null), r([a()], U.prototype, "icon", null), r([a()], U.prototype, "label", null), r([a(), Q("esri/widgets/Attachments/t9n/Attachments")], U.prototype, "messages", void 0), r([a(), Q("esri/core/t9n/Units")], U.prototype, "messagesUnits", void 0), r([a({ readOnly: !0 })], U.prototype, "selectedFile", void 0), r([a({ readOnly: !0 })], U.prototype, "submitting", void 0), r([a({ readOnly: !0 })], U.prototype, "error", void 0), r([a({ type: gi })], U.prototype, "viewModel", void 0), r([a()], U.prototype, "visibleElements", void 0), r([Ke("visibleElements")], U.prototype, "castVisibleElements", null), U = r([T("esri.widgets.Attachments")], U);
const Eo = U;
let nt = class extends gi {
  constructor(t) {
    super(t), this.description = null, this.title = null;
  }
};
r([a()], nt.prototype, "description", void 0), r([a()], nt.prototype, "title", void 0), nt = r([T("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], nt);
const yi = nt;
function vi({ level: e, class: t, ...i }, n) {
  const s = xo(e);
  return u(`h${s}`, { ...i, "aria-level": String(s), class: cs(C.heading, t), role: "heading" }, n);
}
function xo(e) {
  return us(Math.ceil(e), 1, 6);
}
const Wt = "esri-feature-element-info", zt = { base: Wt, title: `${Wt}__title`, description: `${Wt}__description` };
let Ue = class extends ee {
  constructor(t, i) {
    super(t, i), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return u("div", { class: zt.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: t } = this;
    return t ? u(vi, { class: zt.title, innerHTML: t, level: this.headingLevel }) : null;
  }
  _renderDescription() {
    const { description: t } = this;
    return t ? u("div", { class: zt.description, innerHTML: t, key: "description" }) : null;
  }
};
r([a()], Ue.prototype, "description", void 0), r([a()], Ue.prototype, "headingLevel", void 0), r([a()], Ue.prototype, "title", void 0), Ue = r([T("esri.widgets.Feature.support.FeatureElementInfo")], Ue);
const pt = Ue, ko = { base: "esri-feature-attachments" };
let me = class extends ee {
  constructor(t, i) {
    super(t, i), this._featureElementInfo = null, this.attachmentsWidget = new Eo(), this.headingLevel = 2, this.viewModel = new yi();
  }
  initialize() {
    this._featureElementInfo = new pt(), this.addHandles([v(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), N), v(() => this.viewModel, (t) => this.attachmentsWidget.viewModel = t, N)]);
  }
  destroy() {
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), this._featureElementInfo?.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(t) {
    this.viewModel.description = t;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(t) {
    this.attachmentsWidget.displayType = t;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(t) {
    this.viewModel.graphic = t;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  render() {
    const { attachmentsWidget: t } = this;
    return u("div", { class: ko.base }, this._featureElementInfo?.render(), t?.render());
  }
  _setupFeatureElementInfo() {
    const { description: t, title: i, headingLevel: n } = this;
    this._featureElementInfo?.set({ description: t, title: i, headingLevel: n });
  }
};
r([a({ readOnly: !0 })], me.prototype, "attachmentsWidget", void 0), r([a()], me.prototype, "description", null), r([a()], me.prototype, "displayType", null), r([a()], me.prototype, "graphic", null), r([a()], me.prototype, "headingLevel", void 0), r([a()], me.prototype, "title", null), r([a({ type: yi })], me.prototype, "viewModel", void 0), me = r([T("esri.widgets.Feature.FeatureAttachments")], me);
const To = me;
let Ce = class extends pe {
  constructor(t) {
    super(t), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(v(() => this.creator, (i) => {
      this._destroyContent(), this._createContent(i);
    }, N));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t, graphic: i, destroyer: n } = this;
    t && i && (kt({ type: "content", value: n, event: { graphic: i } }), this._set("created", null));
  }
  async _createContent(t) {
    const i = this.graphic;
    if (!i || !t) return;
    const n = kt({ type: "content", value: t, event: { graphic: i } });
    this._loadingPromise = n, this.notifyChange("state");
    const s = await n;
    n === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", s));
  }
};
r([a({ readOnly: !0 })], Ce.prototype, "created", void 0), r([a()], Ce.prototype, "creator", void 0), r([a()], Ce.prototype, "destroyer", void 0), r([a({ type: qe })], Ce.prototype, "graphic", void 0), r([a({ readOnly: !0 })], Ce.prototype, "state", null), Ce = r([T("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], Ce);
const Tt = Ce;
function Bn(e) {
  return (t) => {
    t.hasOwnProperty("_delegatedEventNames") || (t._delegatedEventNames = t._delegatedEventNames ? t._delegatedEventNames.slice() : []);
    const i = t._delegatedEventNames, n = Array.isArray(e) ? e : Lo(e);
    i.push(...n);
  };
}
function Lo(e) {
  return e.split(",").map((t) => t.trim());
}
function qn(e) {
  return e && typeof e.render == "function";
}
function No(e) {
  return e && typeof e.postMixInProperties == "function" && typeof e.buildRendering == "function" && typeof e.postCreate == "function" && typeof e.startup == "function";
}
const Ht = "esri-feature-content", Ut = { base: Ht, loaderContainer: `${Ht}__loader-container`, loader: `${Ht}__loader` };
let Ze = class extends ee {
  constructor(t, i) {
    super(t, i), this.viewModel = null, this._addTargetToAnchors = (n) => {
      Array.from(n.querySelectorAll("a")).forEach((s) => {
        kn(s.href) && !s.hasAttribute("target") && s.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    return this.viewModel?.creator;
  }
  set creator(t) {
    this.viewModel && (this.viewModel.creator = t);
  }
  get graphic() {
    return this.viewModel?.graphic;
  }
  set graphic(t) {
    this.viewModel && (this.viewModel.graphic = t);
  }
  render() {
    const t = this.viewModel?.state;
    return u("div", { class: Ut.base }, t === "loading" ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return u("div", { class: Ut.loaderContainer, key: "loader" }, u("div", { class: Ut.loader }));
  }
  _renderCreated() {
    const t = this.viewModel?.created;
    return t ? t instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: t, key: t }) : qn(t) ? u("div", { key: t }, !t.destroyed && t.render()) : u("div", { afterCreate: this._addTargetToAnchors, innerHTML: t, key: t }) : null;
  }
  _attachToNode(t) {
    const i = this;
    t.appendChild(i);
  }
};
r([a()], Ze.prototype, "creator", null), r([a()], Ze.prototype, "graphic", null), r([a({ type: Tt })], Ze.prototype, "viewModel", void 0), Ze = r([T("esri.widgets.Feature.FeatureContent")], Ze);
const bt = Ze;
let ve = class extends pe {
  constructor(t) {
    super(t), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: t, fieldInfos: i } = this, n = [];
    return i?.forEach((s) => {
      if (!(!s.hasOwnProperty("visible") || s.visible)) return;
      const o = s.clone();
      o.label = Tn(o, t), n.push(o);
    }), n;
  }
};
r([a()], ve.prototype, "attributes", void 0), r([a({ type: [hs] })], ve.prototype, "expressionInfos", void 0), r([a()], ve.prototype, "description", void 0), r([a({ type: [pn] })], ve.prototype, "fieldInfos", void 0), r([a({ readOnly: !0 })], ve.prototype, "formattedFieldInfos", null), r([a()], ve.prototype, "title", void 0), ve = r([T("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], ve);
const St = ve, Po = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function So(e, t) {
  if (typeof t != "string" || !t) return t;
  const i = Po.find((c) => c.pattern.test(t));
  if (!i) return t;
  const n = t.match(i.pattern), s = n?.[2], o = lt(lt(i.label, { messages: e, hierPart: s }), { appName: i.appName }), l = i.target ? ` target="${i.target}"` : "", d = i.target === "_blank" ? ' rel="noreferrer"' : "";
  return t.replace(i.pattern, `<a${l} href="$1"${d}>${o}</a>`);
}
const yt = "esri-feature-fields", vt = { base: yt, fieldHeader: `${yt}__field-header`, fieldData: `${yt}__field-data`, fieldDataDate: `${yt}__field-data--date` };
let ce = class extends ee {
  constructor(t, i) {
    super(t, i), this._featureElementInfo = null, this.viewModel = new St(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new pt(), this.addHandles(v(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), N));
  }
  destroy() {
    this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(t) {
    this.viewModel.attributes = t;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(t) {
    this.viewModel.description = t;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(t) {
    this.viewModel.expressionInfos = t;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(t) {
    this.viewModel.fieldInfos = t;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  render() {
    return u("div", { class: vt.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(t, i) {
    const { attributes: n } = this.viewModel, s = t.fieldName || "", o = t.label || s, l = n ? n[s] == null ? "" : n[s] : "", d = !!t.format?.dateFormat, c = typeof l == "number" && !d ? this._forceLTR(l) : So(this.messagesURIUtils, l), h = { [vt.fieldDataDate]: d };
    return u("tr", { key: `fields-element-info-row-${s}-${i}` }, u("th", { class: vt.fieldHeader, innerHTML: o, key: `fields-element-info-row-header-${s}-${i}` }), u("td", { class: this.classes(vt.fieldData, h), innerHTML: c, key: `fields-element-info-row-data-${s}-${i}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: t } = this.viewModel;
    return t?.length ? u("table", { class: C.table, summary: this.messages.fieldsSummary }, u("tbody", null, t.map((i, n) => this._renderFieldInfo(i, n)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: t, title: i } = this;
    this._featureElementInfo?.set({ description: t, title: i });
  }
  _forceLTR(t) {
    return `&lrm;${t}`;
  }
};
r([a()], ce.prototype, "attributes", null), r([a()], ce.prototype, "description", null), r([a()], ce.prototype, "expressionInfos", null), r([a()], ce.prototype, "fieldInfos", null), r([a()], ce.prototype, "title", null), r([a({ type: St, nonNullable: !0 })], ce.prototype, "viewModel", void 0), r([a(), Q("esri/widgets/Feature/t9n/Feature")], ce.prototype, "messages", void 0), r([a(), Q("esri/widgets/support/t9n/uriUtils")], ce.prototype, "messagesURIUtils", void 0), ce = r([T("esri.widgets.Feature.FeatureFields")], ce);
const jn = ce, Oo = { maximumFractionDigits: 20 };
function Ro(e) {
  return Ve(e, Oo);
}
const Vo = "<", Do = ">";
function Bo(e, t, i, n) {
  let s = "";
  return t === 0 ? s = `${Vo} ` : t === i && (s = `${Do} `), s + Ro(e);
}
const qo = new mn([64, 64, 64]);
function jo(e, t) {
  const i = [], n = e.length - 1;
  return e.length === 5 ? i.push(0, 2, 4) : i.push(0, n), e.map((s, o) => i.includes(o) ? Bo(s, o, n) : null);
}
async function Wo(e, t, i) {
  let n = !1, s = [], o = [];
  if (e.stops) {
    const h = e.stops;
    s = h.map((p) => p.value), n = h.some((p) => !!p.label), n && (o = h.map((p) => p.label));
  }
  const l = s[0], d = s[s.length - 1];
  if (l == null && d == null) return null;
  const c = n ? null : jo(s);
  return (await Promise.all(s.map(async (h, p) => ({ value: h, color: e.type === "opacity" ? await zo(h, e) : (await import("./main-DZxT3i7S.js").then((m) => m.vg)).getColor(e, h), label: n ? o[p] : c?.[p] ?? "" })))).reverse();
}
async function zo(e, t, i) {
  const n = new mn(qo), s = (await import("./main-DZxT3i7S.js").then((o) => o.vg)).getOpacity(t, e);
  return s != null && (n.a = s), n;
}
function Ho(e) {
  if (!e.colorStops) return [];
  const t = [...e.colorStops].filter((n) => n.color?.a > 0);
  let i = t.length - 1;
  if (t && t[0]) {
    const n = t[i];
    n && n.ratio !== 1 && (t.push(new ps({ ratio: 1, color: n.color })), i++);
  }
  return t.map((n, s) => {
    let o = "";
    return s === 0 ? o = e.legendOptions?.minLabel || "low" : s === i && (o = e.legendOptions?.maxLabel || "high"), { color: n.color, label: o, ratio: n.ratio };
  }).reverse();
}
un("short-date");
async function se(e, t, i) {
  ms(e, t, () => []).push(...i);
}
async function Uo(e) {
  const t = /* @__PURE__ */ new Map();
  if (!e) return t;
  if ("visualVariables" in e && e.visualVariables) {
    const i = e.visualVariables.filter((n) => n.type === "color");
    for (const n of i) {
      const s = (await Wo(n) ?? []).map((o) => o.color);
      await se(t, n.field || n.valueExpression, s);
    }
  }
  if (e.type === "heatmap") {
    const i = Ho(e).map((n) => n.color);
    await se(t, e.field || e.valueExpression, i);
  } else if (e.type === "pie-chart") {
    for (const i of e.attributes) await se(t, i.field || i.valueExpression, [i.color]);
    await se(t, "default", [e?.othersCategory?.color, je(e.backgroundFillSymbol, null)]);
  } else if (e.type === "dot-density") {
    for (const i of e.attributes) await se(t, i.field || i.valueExpression, [i.color]);
    await se(t, "default", [e.backgroundColor]);
  } else if (e.type === "unique-value") if (e.authoringInfo?.type === "predominance") for (const i of e.uniqueValueInfos ?? []) await se(t, i.value.toString(), [je(i.symbol, null)]);
  else {
    const i = (e.uniqueValueInfos ?? []).map((d) => je(d.symbol, null)), { field: n, field2: s, field3: o, valueExpression: l } = e;
    (n || l) && await se(t, n || l, i), s && await se(t, s, i), o && await se(t, o, i);
  }
  else if (e.type === "class-breaks") {
    const i = e.classBreakInfos.map((o) => je(o.symbol, null)), { field: n, valueExpression: s } = e;
    await se(t, n ?? s, i);
  } else e.type === "simple" && await se(t, "default", [je(e.symbol, null)]);
  return "defaultSymbol" in e && e.defaultSymbol && await se(t, "default", [je(e.defaultSymbol, null)]), t.forEach((i, n) => {
    const s = li(i.filter(Boolean), (o, l) => JSON.stringify(o) === JSON.stringify(l));
    t.set(n, s);
  }), t;
}
const Zo = "esri.widgets.Feature.support.relatedFeatureUtils", Wi = () => G.getLogger(Zo), zi = /* @__PURE__ */ new Map();
function It(e) {
  if (!be(e)) return null;
  const [t, i] = e.split("/").slice(1);
  return { layerId: t, fieldName: i };
}
function Go(e, t) {
  if (!t.relationships) return null;
  let i = null;
  const { relationships: n } = t;
  return n.some((s) => s.id === parseInt(e, 10) && (i = s, !0)), i;
}
function Qo({ originRelationship: e, relationships: t, layerId: i }) {
  return t.find(({ relatedTableId: n, id: s }) => `${n}` === i && s === e?.id) ?? null;
}
function Jo(e, t) {
  const i = t.toLowerCase();
  for (const n in e) if (n.toLowerCase() === i) return e[n];
  return null;
}
function Xo(e, t) {
  const i = Go(e, t);
  if (i)
    return { url: `${t.url}/${i.relatedTableId}`, sourceSpatialReference: t.spatialReference, relation: i, relatedFields: [], outStatistics: [] };
}
function Yo(e, t) {
  if (!t || !e) return;
  const { features: i, statsFeatures: n } = e, s = i?.value;
  t.relatedFeatures = s ? s.features : [];
  const o = n?.value;
  t.relatedStatsFeatures = o ? o.features : [];
}
function Ko(e, t, i, n) {
  const s = new Yt();
  return s.outFields = ["*"], s.relationshipId = typeof t.id == "number" ? t.id : parseInt(t.id, 10), s.objectIds = [e.attributes[i.objectIdField]], s.gdbVersion = i.gdbVersion ?? null, s.historicMoment = i.historicMoment ?? null, i.queryRelatedFeatures?.(s, n) ?? Promise.resolve({});
}
function er(e, t, i) {
  let n = 0;
  const s = [];
  for (; n < t.length; ) s.push(`${e} IN (${t.slice(n, i + n)})`), n += i;
  return s.join(" OR ");
}
function tr(e) {
  return e ? li(e) : void 0;
}
function ir(e) {
  return e ? li(e, (t, i) => JSON.stringify(t.toJSON()) === JSON.stringify(i.toJSON())) : void 0;
}
async function nr(e, t, i, n) {
  const s = i.layerId.toString(), { layerInfo: o, relation: l, relatedFields: d, outStatistics: c, url: h, sourceSpatialReference: p } = t, m = tr(d), f = ir(c);
  if (!o || !l) return null;
  const g = Qo({ originRelationship: l, relationships: o.relationships, layerId: s });
  if (g?.relationshipTableId && g.keyFieldInRelationshipTable) {
    const _ = (await Ko(e, g, i, n))[e.attributes[i.objectIdField]];
    if (!_) return null;
    const b = _.features.map((M) => M.attributes[o.objectIdField]);
    if (f?.length && o.supportsStatistics) {
      const M = new rt();
      M.where = er(o.objectIdField, b, 1e3), M.outFields = m, M.outStatistics = f, M.sourceSpatialReference = p;
      const w = { features: Promise.resolve(_), statsFeatures: Vt(h, M) };
      return De(w);
    }
  }
  const y = g?.keyField;
  if (y) {
    const _ = ys(lr(o.fields, y)), b = Jo(e.attributes, l.keyField), M = _ ? `${y}=${b}` : `${y}='${b}'`, w = i.historicMoment, I = i.gdbVersion, X = Vt(h, new rt({ where: M, outFields: m, sourceSpatialReference: p, historicMoment: w, gdbVersion: I }), n), le = f?.length && o.supportsStatistics ? Vt(h, new rt({ where: M, outFields: m, outStatistics: f, sourceSpatialReference: p }), n) : null, ge = { features: X };
    return le && (ge.statsFeatures = le), De(ge);
  }
  return null;
}
function sr(e, t) {
  return vs(e, { query: { f: "json" }, signal: t?.signal });
}
function or({ relatedInfos: e, layer: t }, i) {
  const n = {};
  return e.forEach((s, o) => {
    const { relation: l } = s;
    if (!l) {
      const m = new L("relation-required", "A relation is required on a layer to retrieve related records.");
      throw Wi().error(m), m;
    }
    const { relatedTableId: d } = l;
    if (typeof d != "number") {
      const m = new L("A related table ID is required on a layer to retrieve related records.");
      throw Wi().error(m), m;
    }
    const c = `${t.url}/${d}`, h = zi.get(c), p = h ?? sr(c);
    h || zi.set(c, p), n[o] = p;
  }), fs(De(n), i);
}
function rr({ graphic: e, relatedInfos: t, layer: i }, n) {
  const s = {};
  return t.forEach((o, l) => {
    o.layerInfo && (s[l] = nr(e, o, i, n));
  }), De(s);
}
function ar({ relatedInfo: e, fieldName: t, fieldInfo: i }) {
  if (e.relatedFields?.push(t), i.statisticType) {
    const n = new gs({ statisticType: i.statisticType, onStatisticField: t, outStatisticFieldName: t });
    e.outStatistics?.push(n);
  }
}
function lr(e, t) {
  if (e != null) {
    t = t.toLowerCase();
    for (const i of e) if (i && i.name.toLowerCase() === t) return i;
  }
  return null;
}
const Hi = { chartAnimation: !0 };
let j = class extends pe {
  constructor(t) {
    super(t), this.abilities = { ...Hi }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = !1, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t) {
    return { ...Hi, ...t };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t) {
    this._setContentElementMedia(t);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t) {
    const { formattedMediaInfoCount: i } = this, n = (t + i) % i;
    this.activeMediaInfoIndex = n;
  }
  _pageContentElementMedia(t) {
    const { activeMediaInfoIndex: i } = this, n = i + t;
    this._setContentElementMedia(n);
  }
  _formatMediaInfos() {
    const { mediaInfos: t, layer: i } = this, n = this.attributes ?? {}, s = this.formattedAttributes ?? {}, o = this.expressionAttributes ?? {}, l = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t?.map((d) => {
      const c = d?.clone();
      return c ? (c.title = Se({ attributes: n, fieldInfoMap: l, globalAttributes: s, expressionAttributes: o, layer: i, text: c.title }), c.caption = Se({ attributes: n, fieldInfoMap: l, globalAttributes: s, expressionAttributes: o, layer: i, text: c.caption }), c.altText = Se({ attributes: n, fieldInfoMap: l, globalAttributes: s, expressionAttributes: o, layer: i, text: c.altText }), c.type === "image" ? c.value ? (this._setImageValue({ value: c.value, formattedAttributes: s, layer: i }), c.value.sourceURL ? c : void 0) : void 0 : c.type === "pie-chart" || c.type === "line-chart" || c.type === "column-chart" || c.type === "bar-chart" ? c.value ? (this._setChartValue({ value: c.value, chartType: c.type, attributes: n, formattedAttributes: s, layer: i, expressionAttributes: o }), c) : void 0 : null) : null;
    }).filter(Nt) ?? [];
  }
  _setImageValue(t) {
    const i = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: n, formattedAttributes: s, layer: o } = t, { linkURL: l, sourceURL: d } = n;
    if (d) {
      const c = ii(d, o);
      n.sourceURL = ti({ formattedAttributes: s, template: c, fieldInfoMap: i });
    }
    if (l) {
      const c = ii(l, o);
      n.linkURL = ti({ formattedAttributes: s, template: c, fieldInfoMap: i });
    }
  }
  _setChartValue(t) {
    const { value: i, attributes: n, formattedAttributes: s, chartType: o, layer: l, expressionAttributes: d } = t, { popupTemplate: c, relatedInfos: h } = this, { fields: p, normalizeField: m } = i, f = l;
    if (i.fields = so(p, f), m && (i.normalizeField = ct(m, f)), !p.some((y) => !!(s[y] != null || be(y) && h?.size))) return;
    const g = c?.fieldInfos ?? [];
    p.forEach((y, _) => {
      const b = i.colors?.[_];
      if (be(y)) return void (i.series = [...i.series, ...this._getRelatedChartInfos({ fieldInfos: g, fieldName: y, formattedAttributes: s, chartType: o, value: i, color: b })]);
      const M = this._getChartOption({ value: i, attributes: n, chartType: o, formattedAttributes: s, expressionAttributes: d, fieldName: y, fieldInfos: g, color: b });
      i.series.push(M);
    });
  }
  _getRelatedChartInfos(t) {
    const { fieldInfos: i, fieldName: n, formattedAttributes: s, chartType: o, value: l, color: d } = t, c = [], h = It(n), p = h && this.relatedInfos?.get(h.layerId.toString());
    if (!p) return c;
    const { relatedFeatures: m, relation: f } = p;
    if (!f || !m) return c;
    const { cardinality: g } = f;
    return m.forEach((y) => {
      const { attributes: _ } = y;
      _ && Object.keys(_).forEach((b) => {
        b === h.fieldName && c.push(this._getChartOption({ value: l, attributes: _, formattedAttributes: s, fieldName: n, chartType: o, relatedFieldName: b, hasMultipleRelatedFeatures: m?.length > 1, fieldInfos: i, color: d }));
      });
    }), g === "one-to-many" || g === "many-to-many" ? c : [c[0]];
  }
  _getTooltip({ label: t, value: i, chartType: n }) {
    return n === "pie-chart" ? `${t}` : `${t}: ${i}`;
  }
  _getChartOption(t) {
    const { value: i, attributes: n, formattedAttributes: s, expressionAttributes: o, fieldName: l, relatedFieldName: d, fieldInfos: c, chartType: h, hasMultipleRelatedFeatures: p, color: m } = t, f = this.layer, g = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: y, tooltipField: _ } = i, b = y ? be(y) ? n[It(y).fieldName] : n[y] : null, M = pi(l) && o && o[l] !== void 0 ? o[l] : d && n[d] !== void 0 ? n[d] : n[l] !== void 0 ? n[l] : s[l], w = new ws({ fieldName: l, color: m, value: M === void 0 ? null : M && b ? M / b : M });
    if (be(l)) {
      const de = g.get(l.toLowerCase()), ft = _ && g.get(_.toLowerCase()), ye = de?.fieldName ?? l, Rt = p && _ ? It(_).fieldName : ft?.fieldName ?? _, is = p && Rt ? n[Rt] : s[Rt] ?? de?.label ?? de?.fieldName ?? d, ns = p && d ? n[d] : s[ye];
      return w.tooltip = this._getTooltip({ label: is, value: ns, chartType: h }), w;
    }
    const I = Sn(c, l), X = ct(l, f), le = _ && s[_] !== void 0 ? s[_] : Tn(I || new pn({ fieldName: X }), this.popupTemplate?.expressionInfos), ge = s[X];
    return w.tooltip = this._getTooltip({ label: le, value: ge, chartType: h }), w;
  }
};
r([a()], j.prototype, "abilities", void 0), r([Ke("abilities")], j.prototype, "castAbilities", null), r([a()], j.prototype, "activeMediaInfoIndex", void 0), r([a({ readOnly: !0 })], j.prototype, "activeMediaInfo", null), r([a()], j.prototype, "attributes", void 0), r([a()], j.prototype, "description", void 0), r([a()], j.prototype, "fieldInfoMap", void 0), r([a()], j.prototype, "formattedAttributes", void 0), r([a()], j.prototype, "expressionAttributes", void 0), r([a({ readOnly: !0 })], j.prototype, "formattedMediaInfos", null), r([a()], j.prototype, "isAggregate", void 0), r([a()], j.prototype, "layer", void 0), r([a({ readOnly: !0 })], j.prototype, "formattedMediaInfoCount", null), r([a()], j.prototype, "mediaInfos", void 0), r([a()], j.prototype, "popupTemplate", void 0), r([a()], j.prototype, "relatedInfos", void 0), r([a()], j.prototype, "title", void 0), j = r([T("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], j);
const Oe = j, q = "esri-feature-media", Y = { base: q, mediaContainer: `${q}__container`, mediaItemContainer: `${q}__item-container`, mediaItem: `${q}__item`, mediaItemText: `${q}__item-text`, mediaItemTitle: `${q}__item-title`, mediaItemCaption: `${q}__item-caption`, mediaNavigation: `${q}__item-navigation`, mediaPagination: `${q}__pagination`, mediaPaginationText: `${q}__pagination-text`, mediaPrevious: `${q}__previous`, mediaPreviousIconLTR: `${q}__previous-icon`, mediaPreviousIconRTL: `${q}__previous-icon--rtl`, mediaNext: `${q}__next`, mediaNextIconLTR: `${q}__next-icon`, mediaNextIconRTL: `${q}__next-icon--rtl`, mediaChart: `${q}__chart`, mediaPaginationButton: `${q}__pagination-button`, mediaPaginationIcon: `${q}__pagination-icon`, mediaChartRendered: `${q}__chart--rendered` }, Zt = 15, Fe = "category", et = "value", dr = "rgba(50, 50, 50, 1)", cr = 250, ur = 500, hr = 200;
let K = class extends ee {
  constructor(e, t) {
    super(e, t), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new Oe(), this.messages = null, this._disposeChart = (i) => {
      this._chartRootMap.get(i)?.dispose(), this._chartRootMap.delete(i);
    }, this._createChart = async (i) => {
      const { destroyed: n, viewModel: s } = this;
      if (n || !s || !i) return;
      const { createRoot: o } = await import("./chartUtilsAm5-CHjay-f2.js"), l = await o(i);
      this._chartRootMap.set(i, l), this._renderChart({ mediaInfo: s.activeMediaInfo, root: l });
    };
  }
  initialize() {
    this._featureElementInfo = new pt(), this.addHandles([v(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), N), v(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), N)]);
  }
  loadDependencies() {
    return Ie({ icon: () => import("./calcite-icon-DNGdToul.js") });
  }
  destroy() {
    this._clearMediaRefreshTimer(), this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e) {
    this.viewModel.attributes = e;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e) {
    this.viewModel.activeMediaInfoIndex = e;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e) {
    this.viewModel.fieldInfoMap = e;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e) {
    this.viewModel.layer = e;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e) {
    this.viewModel.mediaInfos = e;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e) {
    this.viewModel.popupTemplate = e;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e) {
    this.viewModel.relatedInfos = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  render() {
    return u("div", { bind: this, class: Y.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e, activeMediaInfoIndex: t } = this.viewModel, i = this._renderMediaText();
    return e ? u("div", { class: Y.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), u("div", { class: Y.mediaNavigation }, i, e > 1 ? u("div", { class: Y.mediaPagination }, this._renderMediaPageButton("previous"), u("span", { class: Y.mediaPaginationText }, ae(this.messages.pageText, { index: t + 1, total: e })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e } = this.viewModel;
    if (!e) return null;
    const t = e && e.title ? u("div", { class: Y.mediaItemTitle, innerHTML: e.title, key: "media-title" }) : null, i = e && e.caption ? u("div", { class: Y.mediaItemCaption, innerHTML: e.caption, key: "media-caption" }) : null;
    return t || i ? u("div", { class: Y.mediaItemText, key: "media-text" }, t, i) : null;
  }
  _renderImageMediaInfo(e) {
    if (!e.value) return null;
    const { _refreshIntervalInfo: t } = this, { activeMediaInfoIndex: i, formattedMediaInfoCount: n } = this.viewModel, { value: s, refreshInterval: o, altText: l, title: d, type: c } = e, { sourceURL: h, linkURL: p } = s, m = kn(p ?? void 0) ? "_blank" : "_self", f = m === "_blank" ? "noreferrer" : "", g = o ? t : null, y = g ? g.timestamp : 0, _ = g ? g.sourceURL : h, b = u("img", { alt: l || d, key: `media-${c}-${i}-${n}-${y}`, src: _ ?? void 0 });
    return (p ? u("a", { href: p, rel: f, target: m, title: d }, b) : null) ?? b;
  }
  _renderChartMediaInfo(e) {
    const { activeMediaInfoIndex: t, formattedMediaInfoCount: i } = this.viewModel;
    return u("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: Y.mediaChart, key: `media-${e.type}-${t}-${i}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? e.type === "image" ? this._renderImageMediaInfo(e) : e.type.includes("chart") ? this._renderChartMediaInfo(e) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e } = this.viewModel;
    return e ? u("div", { class: Y.mediaItemContainer, key: "media-container" }, u("div", { class: Y.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const t = e === "previous", i = t ? this.messages.previous : this.messages.next, n = t ? "chevron-left" : "chevron-right", s = t ? "media-previous" : "media-next", o = t ? this._previous : this._next;
    return u("button", { "aria-label": i, bind: this, class: Y.mediaPaginationButton, key: s, onclick: o, tabIndex: 0, title: i, type: "button" }, u("calcite-icon", { class: Y.mediaPaginationIcon, icon: n, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    const { description: e, title: t } = this;
    this._featureElementInfo?.set({ description: e, title: t });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const { isAggregate: e, layer: t } = this.viewModel;
    return e && t?.featureReduction && "renderer" in t.featureReduction ? t.featureReduction.renderer : t?.renderer;
  }
  async _getSeriesColors(e) {
    const { colorAm5: t } = await import("./chartCommon-YbdxofP1.js"), i = /* @__PURE__ */ new Map();
    return e.forEach((n) => {
      n.color && i.set(n, t(n.color.toCss(!0)));
    }), i;
  }
  async _getRendererColors() {
    const { colorAm5: e } = await import("./chartCommon-YbdxofP1.js"), t = /* @__PURE__ */ new Map(), i = this._getRenderer(), n = "default";
    if (!i) return t;
    const s = await Uo(i);
    return s.delete(n), Array.from(s.values()).every((o) => o?.length === 1) && Array.from(s.keys()).forEach((o) => {
      const l = s.get(o)?.[0]?.toCss(!0);
      l && t.set(o, e(l));
    }), t;
  }
  _handleMediaKeyup(e) {
    const { key: t } = e;
    t === "ArrowLeft" && (e.stopPropagation(), this.viewModel.previous()), t === "ArrowRight" && (e.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && !!this.viewModel.abilities.chartAnimation && !_s();
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? cr : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? ur : 0;
  }
  async _renderChart(e) {
    const { root: t, mediaInfo: i } = e, { value: n, type: s } = i, { ResponsiveThemeAm5: o, DarkThemeAm5: l, AnimatedThemeAm5: d, ColorSetAm5: c, ThemeAm5: h, esriChartColorSet: p } = await import("./chartCommon-YbdxofP1.js"), m = h.new(t);
    m.rule("ColorSet").set("colors", p), m.rule("ColorSet").set("reuse", !0);
    const f = [o.new(t), m];
    bs() && f.push(l.new(t)), this._canAnimateChart() && f.push(d.new(t)), t.setThemes(f);
    const g = await this._getRendererColors(), y = await this._getSeriesColors(n.series), _ = c.new(t, {}), b = y.get(n.series[0]), M = b ? { lineSettings: { stroke: b } } : void 0, w = n.series.map((I, X) => {
      const le = y.get(I) || g.get(I.fieldName) || _.getIndex(X);
      return { [Fe]: I.tooltip, [et]: I.value, columnSettings: { fill: le, stroke: le }, ...M };
    }).filter((I) => s !== "pie-chart" || I.value != null && I.value > 0);
    s === "pie-chart" ? this._createPieChart(e, w) : this._createXYChart(e, w);
  }
  _getDirection() {
    return _e(this.container) ? "rtl" : "ltr";
  }
  async _customizeChartTooltip(e, t = "horizontal") {
    const { colorAm5: i } = await import("./chartCommon-YbdxofP1.js");
    e.setAll({ pointerOrientation: t }), e.get("background")?.setAll({ stroke: i(dr) }), e.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: hr });
  }
  async _createPieChart(e, t) {
    const { TooltipAm5: i } = await import("./chartCommon-YbdxofP1.js"), { PieChartAm5: n, PieSeriesAm5: s } = await import("./pieChart-lcHJdDhJ.js"), { mediaInfo: o, root: l } = e, { title: d } = o, c = 5, h = o?.altText || o?.title || "", p = l.container.children.push(n.new(l, { ariaLabel: h, focusable: !0, paddingBottom: c, paddingTop: c, paddingLeft: c, paddingRight: c })), m = `{category}: {valuePercentTotal.formatNumber('0.00')}%
 ({value})`, f = i.new(l, { labelText: m }), g = p.series.push(s.new(l, { name: d, valueField: et, categoryField: Fe, tooltip: f }));
    g.ticks.template.set("forceHidden", !0), g.labels.template.set("forceHidden", !0), g.slices.template.states.create("active", { shiftRadius: c }), this._customizeChartTooltip(f), g.slices.template.setAll({ ariaLabel: m, focusable: !0, templateField: "columnSettings" }), g.data.setAll(t), g.appear(this._getChartSeriesAnimationMS()), p.appear(this._getChartAnimationMS()), p.root.dom.classList.toggle(Y.mediaChartRendered, !0);
  }
  _getMinSeriesValue(e) {
    let t = 0;
    return e.forEach((i) => t = Math.min(i.value, t)), t;
  }
  async _createColumnChart(e, t, i) {
    const { TooltipAm5: n, ScrollbarAm5: s } = await import("./chartCommon-YbdxofP1.js"), { CategoryAxisAm5: o, AxisRendererXAm5: l, ValueAxisAm5: d, AxisRendererYAm5: c, ColumnSeriesAm5: h } = await import("./xyChart-Cvb5UsKA.js"), { mediaInfo: p, root: m } = t, { value: f, title: g } = p;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const y = e.xAxes.push(o.new(m, { renderer: l.new(m, { inversed: _e(this.container) }), categoryField: Fe }));
    y.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const _ = e.yAxes.push(d.new(m, { renderer: c.new(m, { inside: !1 }), min: this._getMinSeriesValue(f.series) }));
    _.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const b = "{categoryX}", M = n.new(m, { labelText: b }), w = e.series.push(h.new(m, { name: g, xAxis: y, yAxis: _, valueYField: et, categoryXField: Fe, tooltip: M }));
    this._customizeChartTooltip(M), w.columns.template.setAll({ ariaLabel: b, focusable: !0, templateField: "columnSettings" }), f.series.length > Zt && e.set("scrollbarX", s.new(m, { orientation: "horizontal" })), y.data.setAll(i), w.data.setAll(i), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e, t, i) {
    const { TooltipAm5: n, ScrollbarAm5: s } = await import("./chartCommon-YbdxofP1.js"), { CategoryAxisAm5: o, AxisRendererXAm5: l, ValueAxisAm5: d, AxisRendererYAm5: c, ColumnSeriesAm5: h } = await import("./xyChart-Cvb5UsKA.js"), { mediaInfo: p, root: m } = t, { value: f, title: g } = p;
    e.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const y = e.yAxes.push(o.new(m, { renderer: c.new(m, { inversed: !0 }), categoryField: Fe }));
    y.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const _ = e.xAxes.push(d.new(m, { renderer: l.new(m, { inside: !1, inversed: _e(this.container) }), min: this._getMinSeriesValue(f.series) }));
    _.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const b = "{categoryY}", M = n.new(m, { labelText: b }), w = e.series.push(h.new(m, { name: g, xAxis: _, yAxis: y, valueXField: et, categoryYField: Fe, tooltip: M }));
    this._customizeChartTooltip(M, "vertical"), w.columns.template.setAll({ ariaLabel: b, focusable: !0, templateField: "columnSettings" }), f.series.length > Zt && e.set("scrollbarY", s.new(m, { orientation: "vertical" })), y.data.setAll(i), w.data.setAll(i), w.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e, t, i) {
    const { TooltipAm5: n, ScrollbarAm5: s } = await import("./chartCommon-YbdxofP1.js"), { CategoryAxisAm5: o, AxisRendererXAm5: l, ValueAxisAm5: d, AxisRendererYAm5: c, LineSeriesAm5: h } = await import("./xyChart-Cvb5UsKA.js"), { root: p, mediaInfo: m } = t, { value: f, title: g } = m;
    e.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const y = e.xAxes.push(o.new(p, { renderer: l.new(p, { inversed: _e(this.container) }), categoryField: Fe }));
    y.get("renderer").labels.template.setAll({ forceHidden: !0 });
    const _ = e.yAxes.push(d.new(p, { renderer: c.new(p, { inside: !1 }), min: this._getMinSeriesValue(f.series) }));
    _.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const b = "{categoryX}", M = i[0]?.lineSettings?.stroke, w = n.new(p, { getFillFromSprite: !M, labelText: b });
    M && w.get("background")?.setAll({ fill: M });
    const I = e.series.push(h.new(p, { name: g, xAxis: y, yAxis: _, valueYField: et, categoryXField: Fe, tooltip: w }));
    I.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(w, "vertical"), f.series.length > Zt && e.set("scrollbarX", s.new(p, { orientation: "horizontal" })), y.data.setAll(i), I.data.setAll(i), I.appear(this._getChartSeriesAnimationMS()), e.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e, t) {
    const { XYChartAm5: i, XYCursorAm5: n } = await import("./xyChart-Cvb5UsKA.js"), { root: s, mediaInfo: o } = e, { type: l } = o, d = o?.altText || o?.title || "", c = s.container.children.push(i.new(s, { ariaLabel: d, focusable: !0, panX: !0, panY: !0 }));
    c.set("cursor", n.new(s, {})), l === "column-chart" && await this._createColumnChart(c, e, t), l === "bar-chart" && await this._createBarChart(c, e, t), l === "line-chart" && await this._createLineChart(c, e, t), c.root.dom.classList.toggle(Y.mediaChartRendered, !0);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e } = this;
    e && (clearTimeout(e), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e) {
    const t = Date.now();
    this._refreshIntervalInfo = { timestamp: t, sourceURL: e && this._getImageSource(e, t) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e } = this.viewModel;
    e?.type === "image" && e?.refreshInterval > 0 && this._setRefreshTimeout(e);
  }
  _setRefreshTimeout(e) {
    const { refreshInterval: t, value: i } = e, n = 6e4 * t;
    this._updateMediaInfoTimestamp(i.sourceURL);
    const s = setInterval(() => {
      this._updateMediaInfoTimestamp(i.sourceURL);
    }, n);
    this._refreshTimer = s;
  }
  _getImageSource(e, t) {
    const i = e.includes("?") ? "&" : "?", [n, s = ""] = e.split("#");
    return `${n}${i}timestamp=${t}${s ? "#" : ""}${s}`;
  }
};
r([a()], K.prototype, "_refreshIntervalInfo", void 0), r([a()], K.prototype, "attributes", null), r([a()], K.prototype, "activeMediaInfoIndex", null), r([a()], K.prototype, "description", null), r([a()], K.prototype, "fieldInfoMap", null), r([a()], K.prototype, "layer", null), r([a()], K.prototype, "mediaInfos", null), r([a()], K.prototype, "popupTemplate", null), r([a()], K.prototype, "relatedInfos", null), r([a()], K.prototype, "title", null), r([a({ type: Oe })], K.prototype, "viewModel", void 0), r([a(), Q("esri/widgets/Feature/t9n/Feature")], K.prototype, "messages", void 0), K = r([T("esri.widgets.Feature.FeatureMedia")], K);
const Wn = K, pr = "esri.widgets.Feature.support.arcadeFeatureUtils", Ui = () => G.getLogger(pr);
function mr(e) {
  return typeof e == "string" ? ht(fi(e)) : Array.isArray(e) ? fr(e) : e?.declaredClass === "esri.arcade.Dictionary" ? gr(e) : e;
}
function fr(e) {
  return `<ul class="esri-widget__list">${e.map((t) => `<li>${typeof t == "string" ? ht(fi(t)) : t}</li>`).join("")}</ul>`;
}
function gr(e) {
  const t = e.keys().map((i) => {
    const n = e.field(i);
    return `<tr><th>${i}</th><td>${typeof n == "string" ? ht(fi(n)) : n}</td></tr>`;
  }).join("");
  return `<table class="${C.table}">${t}</table>`;
}
function zn() {
  return import("./arcade-CgBtnu5_.js");
}
function yr(e) {
  return "createQuery" in e && "queryFeatures" in e;
}
async function vr({ graphic: e, view: t, options: i }) {
  const { isAggregate: n, layer: s } = e;
  if (!n || !s || t?.type !== "2d") return [];
  const o = await t.whenLayerView(s);
  if (!yr(o)) return [];
  const l = o.createQuery(), d = e.getObjectId();
  l.aggregateIds = d != null ? [d] : [];
  const { features: c } = await o.queryFeatures(l, i);
  return c;
}
function wr({ layer: e, aggregatedFeatures: t, interceptor: i }) {
  const { fields: n, objectIdField: s, geometryType: o, spatialReference: l, displayField: d } = e;
  return new fn({ fields: n, objectIdField: s, geometryType: o, spatialReference: l, displayField: d, interceptor: i, ...e.type === "feature" ? { templates: e.templates, typeIdField: e.typeIdField, types: e.types } : null, source: t });
}
async function Hn({ expressionInfo: e, arcade: t, interceptor: i, spatialReference: n, map: s, graphic: o, location: l, view: d, options: c }) {
  if (!e?.expression) return null;
  const { isAggregate: h } = o, p = (o.sourceLayer || o.layer) ?? void 0, m = h ? "feature-reduction-popup" : "popup", f = t.createArcadeProfile(m), g = t.createArcadeExecutor(e.expression, f).catch((I) => Ui().error("arcade-executor-error", { error: I, expressionInfo: e })), [y, _] = await Promise.all([vr({ graphic: o, view: d, options: c }), g]);
  if (!_) return null;
  const b = m === "feature-reduction-popup" ? wr({ layer: p, aggregatedFeatures: y, interceptor: i }) : void 0, M = { ...m === "feature-reduction-popup" ? { $aggregatedFeatures: b } : { $datastore: p?.url, $layer: p != null && zs(p) ? p : p?.type === "scene" && p.associatedLayer != null ? p.associatedLayer : void 0, $map: s, $userInput: l, $graph: p?.type === "knowledge-graph-sublayer" ? p?.parentCompositeLayer?.knowledgeGraph : void 0 }, $feature: o }, w = { abortSignal: c?.signal ?? void 0, interceptor: i ?? void 0, rawOutput: !0, spatialReference: n ?? void 0, timeZone: d?.timeZone };
  return await _.executeAsync(M, w).catch((I) => Ui().error("arcade-execution-error", { error: I, graphic: o, expressionInfo: e })).finally(() => b?.destroy());
}
async function _r({ expressionInfos: e, spatialReference: t, graphic: i, interceptor: n, map: s, view: o, location: l, options: d }) {
  if (!e?.length) return {};
  const c = await zn(), h = {};
  for (const f of e) h[`expression/${f.name}`] = Hn({ expressionInfo: f, arcade: c, interceptor: n, spatialReference: t, map: s, graphic: i, location: l, view: o, options: d });
  const p = await De(h), m = {};
  for (const f in p) m[f] = mr(p[f].value);
  return m;
}
const br = 1;
let ie = class extends pe {
  constructor(t) {
    super(t), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: i } = this;
      i && i.abort(), this._abortController = null;
    }, this._createVM = () => {
      const i = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const n = i === "fields" ? new St() : i === "media" ? new Oe() : i === "text" ? new Tt() : null;
      this._set("contentElementViewModel", n);
    }, this._compile = async () => {
      this._cancelQuery();
      const i = new AbortController();
      this._abortController = i, await this._compileExpression(), this._abortController === i && (this._abortController = null);
    }, this._compileThrottled = hi(this._compile, br, this), this._compileExpression = async () => {
      const { expressionInfo: i, graphic: n, interceptor: s, spatialReference: o, map: l, location: d, view: c, _abortController: h } = this;
      if (!i || !n) return void this._set("contentElement", null);
      const p = await zn();
      if (h !== this._abortController) return;
      const m = await Hn({ arcade: p, expressionInfo: i, graphic: n, location: d, interceptor: s, map: l, spatialReference: o, view: c });
      if (!m || m.declaredClass !== "esri.arcade.Dictionary") return void this._set("contentElement", null);
      const f = await m.castAsJsonAsync(h?.signal), g = f?.type, y = g === "media" ? Fs.fromJSON(f) : g === "text" ? gn.fromJSON(f) : g === "fields" ? Ms.fromJSON(f) : null;
      y.type === "media" && !y.mediaInfos || y.type === "fields" && !y.fieldInfos || y.type === "text" && !y.text ? this._set("contentElement", null) : this._set("contentElement", y);
    }, this.addHandles([v(() => [this.expressionInfo, this.graphic, this.map, this.spatialReference, this.view], () => this._compileThrottled(), N), v(() => [this.contentElement], () => this._createVM(), N)]);
  }
  initialize() {
    this.addHandles(this._compileThrottled);
  }
  destroy() {
    this._cancelQuery(), this.contentElementViewModel?.destroy(), this._set("contentElementViewModel", null), this._set("contentElement", null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(t) {
    this._override("spatialReference", t);
  }
  get state() {
    const { _abortController: t, contentElement: i, contentElementViewModel: n } = this;
    return t ? "loading" : i || n ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(t) {
    this._override("map", t);
  }
};
r([a()], ie.prototype, "_abortController", void 0), r([a({ type: Is })], ie.prototype, "expressionInfo", void 0), r([a({ type: qe })], ie.prototype, "graphic", void 0), r([a({ readOnly: !0 })], ie.prototype, "contentElement", void 0), r([a({ readOnly: !0 })], ie.prototype, "contentElementViewModel", void 0), r([a()], ie.prototype, "interceptor", void 0), r([a({ type: di })], ie.prototype, "location", void 0), r([a()], ie.prototype, "spatialReference", null), r([a({ readOnly: !0 })], ie.prototype, "state", null), r([a()], ie.prototype, "map", null), r([a()], ie.prototype, "view", void 0), ie = r([T("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], ie);
const wi = ie, Zi = "esri-feature", Gi = { base: `${Zi}-expression`, loadingSpinnerContainer: `${Zi}__loading-container` };
let Ft = class extends ee {
  constructor(t, i) {
    super(t, i), this._contentWidget = null, this.viewModel = new wi();
  }
  initialize() {
    this.addHandles(v(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), N));
  }
  loadDependencies() {
    return Ie({ loader: () => import("./calcite-loader-jYuw63YL.js") });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: t } = this.viewModel;
    return u("div", { class: Gi.base }, t === "loading" ? this._renderLoading() : t === "disabled" ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return u("div", { class: Gi.loadingSpinnerContainer, key: "loading-container" }, u("calcite-loader", { inline: !0, label: "" }));
  }
  _destroyContentWidget() {
    const { _contentWidget: t } = this;
    t && (t.viewModel = null, t.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: t, contentElement: i } = this.viewModel, n = i?.type;
    this._destroyContentWidget();
    const s = t ? n === "fields" ? new jn({ viewModel: t }) : n === "media" ? new Wn({ viewModel: t }) : n === "text" ? new bt({ viewModel: t }) : null : null;
    this._contentWidget = s, this.scheduleRender();
  }
};
r([a({ type: wi })], Ft.prototype, "viewModel", void 0), Ft = r([T("esri.widgets.Feature.FeatureExpression")], Ft);
const Ir = Ft;
var Qi;
(function(e) {
  e.TOO_SHORT = "length-validation-error::too-short", e.TOO_LONG = "length-validation-error::too-long";
})(Qi || (Qi = {}));
const Fr = (e) => {
  const t = [];
  if (e.formTemplate) {
    const { description: i, title: n } = e.formTemplate;
    e.fields?.forEach((s) => {
      const o = n && xi(n, s.name), l = i && xi(i, s.name);
      (o || l) && t.push(s.name);
    });
  }
  return t;
}, Gt = 100;
let P = class extends yn(ci(pe)) {
  constructor(t) {
    super(t), this._loaded = !1, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = !1, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: i } = this;
      i && i.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: i } = this;
      i && i.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: i } = this;
      i && i.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const i = new AbortController();
      this._queryAbortController = i, await xe(this._query()), this._queryAbortController === i && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = !1, this._cancelQueryFeatureCount();
      const i = new AbortController();
      this._queryFeatureCountAbortController = i, await xe(this._queryFeatureCount()), this._queryFeatureCountAbortController === i && (this._queryFeatureCountAbortController = null), this._loaded = !0;
    }, this._queryPageController = async () => {
      const i = new AbortController();
      this._queryPageAbortController = i, await xe(this._queryPage()), this._queryPageAbortController === i && (this._queryPageAbortController = null);
    }, this._queryDebounced = Xe(this._queryController, Gt), this._queryFeatureCountDebounced = Xe(this._queryFeatureCountController, Gt), this._queryPageDebounced = Xe(this._queryPageController, Gt), this._query = async () => {
      const { _queryAbortController: i, relatedFeatures: n } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, n.destroyAll(), this.destroyed || n.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: i?.signal }))));
    }, this.addHandles([v(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), N), v(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), v(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(t) {
    const { featuresPerPage: i, featureCount: n } = this, s = 1, o = Math.ceil(n / i) || 1;
    this._set("featurePage", Math.min(Math.max(t, s), o));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: t, relatedLayer: i } = this;
    return t && i?.loaded ? t.map((n) => {
      const s = n.clone();
      return s.field = ct(n.field, i), s;
    }) : t ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && this.relationshipId != null && typeof this.objectId == "number";
  }
  get canQuery() {
    const t = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && this.relationshipId != null && this.objectId != null && t?.supportsCount && t?.supportsPagination);
  }
  get itemDescriptionFieldName() {
    return this.orderByFieldsFixedCasing[0]?.field || null;
  }
  set displayCount(t) {
    this._set("displayCount", Math.min(Math.max(t, 0), 10));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new re();
  }
  get relatedLayer() {
    const { layer: t, map: i, relationship: n } = this;
    return t?.loaded && i && n ? Co(i, t, n) ?? null : null;
  }
  get relationship() {
    const { relationshipId: t, layer: i } = this;
    return t != null ? i?.relationships?.find(({ id: n }) => n === t) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new re();
  }
  get state() {
    const { _queryAbortController: t, _queryFeatureCountAbortController: i, _queryPageAbortController: n, canQuery: s, _loaded: o, canLoad: l } = this;
    return i || l && !o ? "loading" : t || n ? "querying" : s ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(t) {
    return this.relatedFeatures.find((i) => i.getObjectId() === t);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: t, relatedLayer: i, relationshipId: n, objectId: s, _queryFeatureCountAbortController: o, canQuery: l, supportsCacheHint: d } = this;
    if (await t?.load(), await i?.load(), !l || !t || !i || s == null) return void this._set("featureCount", 0);
    const c = i.createQuery(), { historicMoment: h, gdbVersion: p } = t, m = new Yt({ cacheHint: d, gdbVersion: p, historicMoment: h, relationshipId: n, returnGeometry: !1, objectIds: [s], where: c.where ?? void 0 }), f = await t.queryRelatedFeaturesCount(m, { signal: o?.signal });
    this._set("featureCount", f[s] || 0);
  }
  _sliceFeatures(t) {
    const { showAllEnabled: i, displayCount: n } = this;
    return i ? t : n ? t.slice(0, n) : [];
  }
  async _queryPage() {
    const { relatedFeatures: t, featurePage: i, showAllEnabled: n, _queryPageAbortController: s, featureCount: o } = this;
    !n || i < 2 || !o || t.addMany(await this._queryRelatedFeatures({ signal: s?.signal }));
  }
  async _queryRelatedFeatures(t) {
    const { orderByFieldsFixedCasing: i, showAllEnabled: n, featuresPerPage: s, displayCount: o, layer: l, relationshipId: d, featurePage: c, featureCount: h, relatedLayer: p, supportsCacheHint: m } = this, { canQuery: f, objectId: g } = this;
    if (!f || !l || !p || g == null) return [];
    const y = n ? ((c - 1) * s + h) % h : 0, _ = n ? s : o, b = p.objectIdField, M = [...i.map((ye) => ye.field), ...Fr(p), b].filter(Nt), w = i.map((ye) => `${ye.field} ${ye.order}`), I = p.createQuery(), { historicMoment: X, gdbVersion: le } = l, ge = new Yt({ orderByFields: w, start: y, num: _, outFields: M, cacheHint: m, historicMoment: X, gdbVersion: le, relationshipId: d, returnGeometry: !1, objectIds: [g], where: I.where ?? void 0 }), de = await l.queryRelatedFeatures(ge, { signal: t?.signal }), ft = de[g]?.features || [];
    return ft.forEach((ye) => {
      ye.sourceLayer = p, ye.layer = p;
    }), ft;
  }
};
r([a()], P.prototype, "_loaded", void 0), r([a()], P.prototype, "_queryAbortController", void 0), r([a()], P.prototype, "_queryPageAbortController", void 0), r([a()], P.prototype, "_queryFeatureCountAbortController", void 0), r([a({ value: 1 })], P.prototype, "featurePage", null), r([a()], P.prototype, "featuresPerPage", void 0), r([a({ readOnly: !0 })], P.prototype, "orderByFieldsFixedCasing", null), r([a({ readOnly: !0 })], P.prototype, "supportsCacheHint", null), r([a({ readOnly: !0 })], P.prototype, "canLoad", null), r([a({ readOnly: !0 })], P.prototype, "canQuery", null), r([a()], P.prototype, "description", void 0), r([a({ readOnly: !0 })], P.prototype, "itemDescriptionFieldName", null), r([a({ value: 3 })], P.prototype, "displayCount", null), r([a({ type: qe })], P.prototype, "graphic", void 0), r([a()], P.prototype, "layer", void 0), r([a()], P.prototype, "map", void 0), r([a({ readOnly: !0 })], P.prototype, "objectId", null), r([a({ readOnly: !0 })], P.prototype, "objectIdField", null), r([a()], P.prototype, "orderByFields", void 0), r([a({ readOnly: !0 })], P.prototype, "relatedFeatures", null), r([a({ readOnly: !0 })], P.prototype, "relatedLayer", null), r([a({ readOnly: !0 })], P.prototype, "relationship", null), r([a()], P.prototype, "featureCount", void 0), r([a({ readOnly: !0 })], P.prototype, "relatedFeatureViewModels", null), r([a()], P.prototype, "relationshipId", void 0), r([a()], P.prototype, "showAllEnabled", void 0), r([a()], P.prototype, "state", null), r([a()], P.prototype, "title", void 0), P = r([T("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], P);
const _i = P;
var ni;
const Mt = "esri-feature", tt = `${Mt}-relationship`, Me = { base: tt, listContainer: `${tt}__list`, listItem: `${tt}__list-item`, listItemHidden: `${tt}__list-item--hidden`, listContainerQuerying: `${tt}__list--querying`, featureObserver: `${Mt}__feature-observer`, stickySpinnerContainer: `${Mt}__sticky-loading-container`, loadingSpinnerContainer: `${Mt}__loading-container` }, Ji = { title: !0, description: !0 };
let W = ni = class extends ee {
  constructor(e, t) {
    super(e, t), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([i]) => {
      i?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.flowItems = null, this.flowType = "feature-relationship", this.headingLevel = 2, this.viewModel = new _i(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...Ji }, this._increaseFeaturePage = () => {
      const { state: i, showAllEnabled: n, relatedFeatures: s, featuresPerPage: o, featurePage: l } = this.viewModel;
      i === "ready" && n && s.length >= o * l && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new pt(), this.addHandles([v(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), N), v(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), dt(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return Ie({ icon: () => import("./calcite-icon-DNGdToul.js"), list: () => import("./calcite-list-PPvzMcEs.js"), "list-item": () => import("./calcite-list-item-BUtf0P5M.js"), loader: () => import("./calcite-loader-jYuw63YL.js"), notice: () => import("./calcite-notice-6L3_r-5-.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = vn(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e, featureCount: t, displayCount: i, state: n } = this.viewModel;
    return !e && !!t && n === "ready" && (t > i || i === 0);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e) {
    this.viewModel.description = e;
  }
  get featureCountDescription() {
    const { messages: e } = this, { featureCount: t } = this.viewModel;
    return ae(e?.numberRecords, { number: t });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  castVisibleElements(e) {
    return { ...Ji, ...e };
  }
  render() {
    const { state: e } = this.viewModel;
    return u("div", { class: this.classes(Me.base, C.widget) }, this._featureElementInfo?.render(), e === "loading" ? this._renderLoading() : e === "disabled" ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  async _selectRecord(e) {
    const { flowItems: t, featureVisibleElements: i } = this;
    if (!t) return;
    e.abilities = { relationshipContent: !0 };
    const { default: n } = await Promise.resolve().then(() => Gn);
    t.push(new n({ flowItems: t, flowType: this.flowType, viewModel: e, visibleElements: i }));
  }
  _showAllRecords() {
    const { flowItems: e } = this;
    if (!e) return;
    const { viewModel: t, featureVisibleElements: i } = this;
    t.showAllEnabled = !0;
    const n = new ni({ flowItems: e, featureVisibleElements: i, visibleElements: { title: !1, description: !1 }, viewModel: t });
    e.push(n);
  }
  _renderStickyLoading() {
    return this.viewModel.state === "querying" ? u("div", { class: Me.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return u("calcite-loader", { inline: !0, label: "" });
  }
  _renderLoading() {
    return u("div", { class: Me.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return u("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e = _e(this.container) ? "chevron-left" : "chevron-right";
    return u("calcite-icon", { icon: e, scale: "s", slot: "content-end" });
  }
  _renderRelatedFeature(e) {
    const { itemDescriptionFieldName: t } = this.viewModel, i = e.title;
    e.description = t && e.formattedAttributes?.global[t];
    const n = e.state === "loading";
    return u("calcite-list-item", { class: this.classes(Me.listItem, { [Me.listItemHidden]: n }), description: e.description ?? "", key: e.uid, label: i, onCalciteListItemSelect: () => this._selectRecord(e) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? u("calcite-list-item", { description: this.featureCountDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this._showAllRecords() }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return u("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return u("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: Me.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: e } = this.viewModel;
    return u("calcite-list", null, e.toArray().map((t) => this._renderRelatedFeature(t)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e } = this, { state: t } = this.viewModel;
    return u("div", { class: this.classes(Me.listContainer, { [Me.listContainerQuerying]: t === "querying" }), key: "list-container" }, e ? this._renderList() : t === "ready" ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return u("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e } = this.viewModel, t = "related-feature-viewmodels";
    this.removeHandles(t), e?.forEach((i) => {
      this.addHandles(v(() => [i.title, i.state], () => this.scheduleRender(), N), t);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e, visibleElements: t } = this, i = t.description && this.description, n = t.title && this.title;
    this._featureElementInfo?.set({ description: i, title: n, headingLevel: e });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e, showAllEnabled: t } = this.viewModel;
    await Pt(0), this._relatedFeatureIntersectionObserverNode && e === "ready" && t && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e) {
    this._relatedFeatureIntersectionObserverNode = e;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
r([a()], W.prototype, "_relatedFeatureIntersectionObserverNode", void 0), r([a({ readOnly: !0 })], W.prototype, "displayShowAllButton", null), r([a({ readOnly: !0 })], W.prototype, "displayListItems", null), r([a()], W.prototype, "description", null), r([a({ readOnly: !0 })], W.prototype, "featureCountDescription", null), r([a()], W.prototype, "featureVisibleElements", void 0), r([a()], W.prototype, "flowItems", void 0), r([a()], W.prototype, "flowType", void 0), r([a()], W.prototype, "headingLevel", void 0), r([a()], W.prototype, "title", null), r([a({ type: _i })], W.prototype, "viewModel", void 0), r([a(), Q("esri/widgets/Feature/t9n/Feature")], W.prototype, "messages", void 0), r([a(), Q("esri/t9n/common")], W.prototype, "messagesCommon", void 0), r([a()], W.prototype, "visibleElements", void 0), r([Ke("visibleElements")], W.prototype, "castVisibleElements", null), W = ni = r([T("esri.widgets.Feature.FeatureRelationship")], W);
const Mr = W;
var Xi;
(function(e) {
  e[e.RTJunctionJunctionConnectivity = 1] = "RTJunctionJunctionConnectivity", e[e.RTAttachment = 2] = "RTAttachment", e[e.RTContainment = 3] = "RTContainment", e[e.RTJunctionEdgeConnectivity = 4] = "RTJunctionEdgeConnectivity", e[e.RTEdgeJunctionEdgeConnectivity = 5] = "RTEdgeJunctionEdgeConnectivity";
})(Xi || (Xi = {}));
new ui({ connected: "connected", upstream: "upstream", downstream: "downstream", shortestPath: "shortest-path", subnetwork: "subnetwork", subnetworkController: "subnetwork-controller", loops: "loops", isolation: "isolation" });
const wt = new ui({ junctionJunctionConnectivity: "junction-junction-connectivity", connectivity: "connectivity", attachment: "attachment", containment: "containment", junctionEdgeFromConnectivity: "junction-edge-from-connectivity", junctionMidspanConnectivity: "junction-midspan-connectivity", junctionEdgeToConnectivity: "junction-edge-to-connectivity" }), Ar = Array.from({ length: 33 }, (e, t) => 2 * t), Cr = /* @__PURE__ */ new Map([[1, "connectivity"], [2, "containment"], [3, "attachment"], [4, "junction-edge-from-connectivity"], [5, "junction-midspan-connectivity"], [6, "junction-edge-to-connectivity"]]);
new ui({ normal: "normal", rebuild: "rebuild", forceRebuild: "force-rebuild" });
let ue = class extends wn {
  constructor(t) {
    super(t), this.assetGroupCode = null, this.assetTypeCode = null, this.globalId = null, this.networkSourceId = null, this.objectId = null, this.positionFrom = null, this.positionTo = null, this.terminalId = null;
  }
};
r([a({ type: Number, json: { write: !0 } })], ue.prototype, "assetGroupCode", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "assetTypeCode", void 0), r([a({ type: String, json: { write: !0 } })], ue.prototype, "globalId", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "networkSourceId", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "objectId", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "positionFrom", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "positionTo", void 0), r([a({ type: Number, json: { write: !0 } })], ue.prototype, "terminalId", void 0), ue = r([T("esri.rest.networks.support.NetworkElement")], ue);
const Ye = ue;
let Z = class extends wn {
  constructor(t) {
    super(t), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(t, i) {
    return new Ye({ globalId: i.fromGlobalId, networkSourceId: i.fromNetworkSourceId, terminalId: i.fromTerminalId });
  }
  writeFromNetworkElement(t, i) {
    t && (i.fromGlobalId = t.globalId, i.fromNetworkSourceId = t.networkSourceId, i.fromTerminalId = t.terminalId);
  }
  readToNetworkElement(t, i) {
    return new Ye({ globalId: i.toGlobalId, networkSourceId: i.toNetworkSourceId, terminalId: i.toTerminalId });
  }
  writeToNetworkElement(t, i) {
    t && (i.toGlobalId = t.globalId, i.toNetworkSourceId = t.networkSourceId, i.toTerminalId = t.terminalId);
  }
};
r([a({ type: String, json: { write: !0 } })], Z.prototype, "globalId", void 0), r([a({ type: wt.apiValues, json: { type: wt.jsonValues, read: wt.read, write: wt.write } })], Z.prototype, "associationType", void 0), r([a({ type: Ye, json: { write: { target: { fromGlobalId: { type: String }, fromNetworkSourceId: { type: Number }, fromTerminalId: { type: Number } } }, read: { source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId"] } } })], Z.prototype, "fromNetworkElement", void 0), r([ki("fromNetworkElement")], Z.prototype, "readFromNetworkElement", null), r([Ti("fromNetworkElement")], Z.prototype, "writeFromNetworkElement", null), r([a({ type: Ye, json: { write: { target: { toGlobalId: { type: String }, toNetworkSourceId: { type: Number }, toTerminalId: { type: Number } } }, read: { source: ["toGlobalId", "toNetworkSourceId", "toTerminalId"] } } })], Z.prototype, "toNetworkElement", void 0), r([ki("toNetworkElement")], Z.prototype, "readToNetworkElement", null), r([Ti("toNetworkElement")], Z.prototype, "writeToNetworkElement", null), r([a({ type: As, json: { write: !0 } })], Z.prototype, "geometry", void 0), r([a({ type: String, json: { write: !0 } })], Z.prototype, "errorMessage", void 0), r([a({ type: Number, json: { write: !0 } })], Z.prototype, "percentAlong", void 0), r([a({ type: Number, json: { write: !0 } })], Z.prototype, "errorCode", void 0), r([a({ type: Boolean, json: { write: !0 } })], Z.prototype, "isContentVisible", void 0), r([a({ type: Number, json: { write: !0 } })], Z.prototype, "status", void 0), Z = r([T("esri.rest.networks.support.Association")], Z);
const $r = Z, O = { fromGlobalId: "fromglobalid", fromNetworkSourceId: "fromnetworksourceid", fromTerminalId: "fromterminalid", toGlobalId: "toglobalid", toNetworkSourceId: "tonetworksourceid", toTerminalId: "toterminalid", associationType: "associationtype", globalId: "globalid", status: "status", isContentVisible: "iscontentvisible", percentAlong: "percentalong", assetGroup: "assetgroup", assetType: "assettype" }, Yi = 100;
let $ = class extends yn(ci(pe)) {
  constructor(t) {
    super(t), this._loaded = !1, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.networkSourceIdsInUse = /* @__PURE__ */ new Set(), this.description = null, this.graphic = null, this.layer = null, this.map = null, this.featureCount = 0, this.associationTypes = null, this.showAllEnabled = !1, this.title = null, this.attachmentsFeatureCount = 0, this.structureFeatureCount = 0, this.contentFeatureCount = 0, this.containerFeatureCount = 0, this.connectivityFeatureCount = 0, this._cancelQuery = () => {
      const { _queryAbortController: i } = this;
      i && i.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: i } = this;
      i && i.abort(), this._queryFeatureCountAbortController = null;
    }, this._queryController = async (i) => {
      this._cancelQuery();
      const n = new AbortController();
      this._queryAbortController = n, await xe(this._query(i)), this._queryAbortController === n && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = !1, this._cancelQueryFeatureCount();
      const i = new AbortController();
      this._queryFeatureCountAbortController = i, await xe(this._queryFeatureCount()), this._queryFeatureCountAbortController === i && (this._queryFeatureCountAbortController = null), this._loaded = !0;
    }, this._queryDebounced = Xe(this._queryController, Yi), this._queryFeatureCountDebounced = Xe(this._queryFeatureCountController, Yi);
  }
  initialize() {
    this.associationTypes?.forEach((t) => {
      t.open = !1;
    }), this.addHandles([...this.associationTypes?.map((t) => v(() => t.open, () => {
      t.open && this._queryDebounced(t);
    })) ?? [], v(() => [this.graphic, this.layer, this.map, this.associationTypes, this.objectId, this.globalId, this.canQuery], () => this._queryFeatureCountDebounced(), N)]);
  }
  destroy() {
    this._cancelQuery(), this._cancelQueryFeatureCount(), this._destroyAssociatedFeatureViewModels();
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.query?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && !!this.associationTypes && typeof this.globalId == "string";
  }
  get canQuery() {
    const t = this.layer?.capabilities?.query;
    return !!this.associationTypes && typeof this.globalId == "string" && !!t?.supportsPagination;
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get globalId() {
    return (this.globalIdField && this.graphic?.attributes?.[this.globalIdField]) ?? null;
  }
  get globalIdField() {
    const { layer: t } = this;
    return t?.type === "subtype-sublayer" && t?.parent ? t.parent.globalIdField ?? null : t?.globalIdField ?? null;
  }
  get state() {
    const { _queryAbortController: t, _queryFeatureCountAbortController: i, _queryPageAbortController: n, canQuery: s, _loaded: o, canLoad: l } = this;
    return i || l && !o ? "loading" : t || n ? "querying" : s && this.featureCount !== 0 ? "ready" : "disabled";
  }
  get utilityNetwork() {
    const { layer: t, map: i } = this;
    return t?.loaded && i ? t?.type === "subtype-sublayer" && t?.parent ? Vi(i, t.parent) ?? null : Vi(i, t) ?? null : null;
  }
  get associationsLayer() {
    const { utilityNetwork: t } = this;
    return t?.loaded ? new fn({ url: t.networkSystemLayers.associationsTableUrl, gdbVersion: t.gdbVersion }) : null;
  }
  get attachmentsAssociations() {
    return this._get("attachmentsAssociations") || new re();
  }
  get structureAssociations() {
    return this._get("structureAssociations") || new re();
  }
  get contentAssociations() {
    return this._get("contentAssociations") || new re();
  }
  get containerAssociations() {
    return this._get("containerAssociations") || new re();
  }
  get connectivityAssociations() {
    return this._get("connectivityAssociations") || new re();
  }
  get associationFeatures() {
    return this._get("associationFeatures") || new _n();
  }
  get associationViewModels() {
    return this._get("associationViewModels") || /* @__PURE__ */ new Map();
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyAssociatedFeatureViewModels() {
    this.associationViewModels.forEach((t) => t.destroyAll());
  }
  _generateGlobalIdWhereClause(t, i) {
    const { globalId: n, networkSourceIdsInUse: s } = this, { associatedNetworkSourceId: o } = t, l = i.fieldsIndex.get(O.fromGlobalId), d = i.fieldsIndex.get(O.toGlobalId), c = i.fieldsIndex.get(O.fromNetworkSourceId), h = i.fieldsIndex.get(O.toNetworkSourceId), p = o != null, m = `(${Array.from(s.values())})`, f = p ? ` AND ${h.name} = ${o} AND ${h.name} IN ${m}` : "", g = p ? ` AND ${c.name} = ${o} AND ${c.name} IN ${m}` : "";
    switch (t.type) {
      case "connectivity":
        return `((${l.name} = '${n}'${f}) OR (${d.name} = '${n}'${g}))`;
      case "attachment":
      case "content":
        return `${l.name} = '${n}'${f}`;
      case "container":
      case "structure":
        return `${d.name} = '${n}'${g}`;
      default:
        return "";
    }
  }
  _generateNetworkSourceIdWhereClause(t) {
    const { networkSourceIdsInUse: i } = this, n = `(${Array.from(i.values())})`, s = t.fieldsIndex.get(O.fromNetworkSourceId), o = t.fieldsIndex.get(O.toNetworkSourceId);
    return `(${s.name} IN ${n} AND ${o.name} IN ${n})`;
  }
  _generateAssociationTypeWhereClause(t, i) {
    const n = i.fieldsIndex.get(O.associationType);
    switch (t.type) {
      case "attachment":
      case "structure":
        return `${n.name} = 3`;
      case "connectivity":
        return `${n.name} IN  (1, 4, 5, 6)`;
      case "container":
      case "content":
        return `${n.name} = 2`;
      default:
        return "";
    }
  }
  _generateWhereClause(t, i) {
    const n = i.fieldsIndex.get(O.status), s = `(${Ar.join(",")})`, o = `${n.name} IN ${s}`;
    return `(${this._generateGlobalIdWhereClause(t, i)} AND ${o} AND ${this._generateAssociationTypeWhereClause(t, i)})`;
  }
  async _loadUtiltyNetworks() {
    const t = this.map;
    if (!t) return;
    await Promise.allSettled(t.utilityNetworks?.map(async (s) => {
      await s.load();
    }) ?? []);
    const i = (s) => {
      if ("layerId" in s && n.isUtilityLayer(s)) {
        const o = n.getSourceIdByLayerId(s.layerId);
        o !== null && this.networkSourceIdsInUse.add(o);
      }
    }, n = this.utilityNetwork;
    this._set("networkSourceIdsInUse", /* @__PURE__ */ new Set()), t.allLayers.forEach(i), t.allTables.forEach(i);
  }
  async _findLayersBySourceId(t) {
    const { utilityNetwork: i, map: n } = this, s = (h) => {
      const p = h;
      return h.url && p.layerId === o ? h.url.replace(/\/\d+$/, "") === i?.featureServiceUrl : !1;
    };
    await i?.load();
    const o = i.getLayerIdBySourceId(t), l = n.allLayers.filter(s), d = n.allTables.filter(s), c = l.concat(d).toArray();
    return await Promise.allSettled(c.map((h) => h.load())), c;
  }
  _clearAssociations() {
    this.attachmentsAssociations.removeAll(), this.structureAssociations.removeAll(), this.contentAssociations.removeAll(), this.containerAssociations.removeAll(), this.connectivityAssociations.removeAll();
  }
  _clearFeatures() {
    this.associationFeatures.forEach((t) => t.removeAll()), this.associationFeatures.clear();
  }
  _getAssociationsByType(t) {
    switch (t) {
      case "attachment":
        return this.attachmentsAssociations;
      case "structure":
        return this.structureAssociations;
      case "connectivity":
        return this.connectivityAssociations;
      case "container":
        return this.containerAssociations;
      case "content":
        return this.contentAssociations;
    }
  }
  _createAssociationFromFeature(t, i) {
    if (!t) return null;
    const n = Cr.get(i.attributes[t.fieldsIndex.get(O.associationType).name]);
    return new $r({ globalId: i.attributes[t.fieldsIndex.get(O.globalId).name], fromNetworkElement: new Ye({ globalId: i.attributes[t.fieldsIndex.get(O.fromGlobalId).name], networkSourceId: i.attributes[t.fieldsIndex.get(O.fromNetworkSourceId).name], terminalId: i.attributes[t.fieldsIndex.get(O.fromTerminalId).name] }), toNetworkElement: new Ye({ globalId: i.attributes[t.fieldsIndex.get(O.toGlobalId).name], networkSourceId: i.attributes[t.fieldsIndex.get(O.toNetworkSourceId).name], terminalId: i.attributes[t.fieldsIndex.get(O.toTerminalId).name] }), associationType: n, status: i.attributes[t.fieldsIndex.get(O.status).name], isContentVisible: i.attributes[t.fieldsIndex.get(O.isContentVisible).name], percentAlong: i.attributes[t.fieldsIndex.get(O.percentAlong).name] });
  }
  async _queryLayer(t, i, n, s, o) {
    const l = t.fieldsIndex.get(O.assetGroup), d = t.fieldsIndex.get(O.assetType), c = n != null, h = s != null, p = "(" + i.map((_) => `'${_}'`).join(", ") + ")", m = c ? ` AND ${l?.name} = ${n}` : "", f = c && h ? ` AND ${d?.name} = ${s}` : "", g = `${t.globalIdField} IN ${p}` + m + f, y = new rt({ outFields: ["*"], cacheHint: this.supportsCacheHint, where: g });
    return await this._queryAll(y, t, { signal: o?.signal });
  }
  async _createAssociationFeatureObjects(t, i, n, s, o, l) {
    if (t.length === 0) return [];
    const d = /* @__PURE__ */ new Map();
    for (const [h, p] of i) {
      const m = await this._findLayersBySourceId(h);
      for (const f of m)
        (await this._queryLayer(f, p, s, o, l)).forEach((g) => {
          if (g.getEffectivePopupTemplate() && g.layer) {
            const y = d.get(g.attributes[f.globalIdField]) ?? [];
            y.push(g), d.set(g.attributes[f.globalIdField], y);
          }
        });
    }
    const c = [];
    return t.toArray().forEach((h) => {
      const p = h.fromNetworkElement.globalId === n ? h.toNetworkElement : h.fromNetworkElement;
      (d.get(p.globalId) ?? []).forEach((m) => {
        const f = this.utilityNetwork?.getTerminalById(p?.terminalId)?.name;
        c.push({ association: h, feature: m, terminalName: f });
      });
    }), c;
  }
  _parseFeatureObjects(t, i) {
    t.forEach((n) => {
      const s = n?.feature, o = s.layer, l = i.get(o) ?? new re();
      l.add(n), i.set(o, l);
    });
  }
  async _queryAll(t, i, n) {
    const s = [];
    let o = 0, l = !1;
    t.num = i.sourceJSON?.maxRecordCount ?? 2e3;
    do {
      t.start = o;
      const d = await i.queryFeatures(t, n);
      s.push(...d.features), l = d.exceededTransferLimit, l && (o += d.features.length);
    } while (l);
    return s;
  }
  async _queryAssociatedFeatureCount(t) {
    const { layer: i, globalId: n, supportsCacheHint: s, associationTypes: o, associationsLayer: l, utilityNetwork: d, canQuery: c } = this;
    if (await Promise.allSettled([i?.load(), d?.load(), l?.load()]), this._clearAssociations(), !(c && i && o && l)) return;
    const h = l.fieldsIndex.get(O.toGlobalId).name, p = l.fieldsIndex.get(O.fromGlobalId).name, m = o.map((w) => this._generateWhereClause(w, l)), f = this._generateNetworkSourceIdWhereClause(l), g = m.join(" OR "), y = new rt({ outFields: ["*"], cacheHint: s, returnGeometry: !1, where: `(${g}) AND (${f})` }), _ = await this._queryAll(y, l, { signal: t?.signal }), b = /* @__PURE__ */ new Map();
    o.forEach((w) => {
      b.set(w.type, []);
    }), _.forEach((w) => {
      const I = l.fieldsIndex.get(O.associationType);
      switch (w.attributes[I.name]) {
        case 1:
        case 4:
        case 5:
        case 6:
          w.attributes[p] === n ? b.get("connectivity").push(w.attributes[h]) : b.get("connectivity").push(w.attributes[p]), this.connectivityAssociations.add(this._createAssociationFromFeature(l, w));
          break;
        case 2:
          w.attributes[p] === n ? (b.get("content").push(w.attributes[h]), this.contentAssociations.add(this._createAssociationFromFeature(l, w))) : (b.get("container").push(w.attributes[p]), this.containerAssociations.add(this._createAssociationFromFeature(l, w)));
          break;
        case 3:
          w.attributes[p] === n ? (b.get("attachment").push(w.attributes[h]), this.attachmentsAssociations.add(this._createAssociationFromFeature(l, w))) : (b.get("structure").push(w.attributes[p]), this.structureAssociations.add(this._createAssociationFromFeature(l, w)));
      }
    });
    const M = o.map(async (w) => {
      const { associatedNetworkSourceId: I, associatedAssetGroup: X, associatedAssetType: le } = w, ge = b.get(w.type), de = X != null ? await this._countAssociatedFeatures(I, ge, X, le, t) : ge.length;
      switch (w.type) {
        case "attachment":
          this._set("attachmentsFeatureCount", de);
          break;
        case "structure":
          this._set("structureFeatureCount", de);
          break;
        case "content":
          this._set("contentFeatureCount", de);
          break;
        case "container":
          this._set("containerFeatureCount", de);
          break;
        case "connectivity":
          this._set("connectivityFeatureCount", de);
      }
    });
    await Promise.allSettled(M);
  }
  async _countAssociatedFeatureCount(t, i, n, s, o) {
    const l = t.fieldsIndex.get(O.assetGroup), d = t.fieldsIndex.get(O.assetType), c = s != null, h = "(" + i.map((g) => `'${g}'`).join(", ") + ")", p = ` AND ${l?.name} = ${n}`, m = c ? ` AND ${d?.name} = ${s}` : "", f = `${t.globalIdField} IN ${h}` + p + m;
    return t.queryFeatureCount({ where: f, outFields: ["*"], returnGeometry: !1 }, { signal: o?.signal });
  }
  async _countAssociatedFeatures(t, i, n, s, o) {
    if (i.length === 0) return 0;
    const l = (await this._findLayersBySourceId(t)).map(async (d) => this._countAssociatedFeatureCount(d, i, n, s, o));
    return (await Promise.all(l)).reduce((d, c) => d + c, 0);
  }
  async _queryAssociatedFeatures(t, i) {
    const { layer: n, globalId: s, associationTypes: o, associationsLayer: l, utilityNetwork: d, canQuery: c, associationFeatures: h } = this;
    if (await Promise.allSettled([n?.load(), d?.load(), l?.load()]), !(c && n && o && l)) return;
    const p = this._getAssociationsByType(t.type), { associatedAssetGroup: m, associatedAssetType: f } = t, g = /* @__PURE__ */ new Map();
    p.forEach((_) => {
      const { networkSourceId: b, elementGlobalId: M } = _.fromNetworkElement.globalId === s ? { networkSourceId: _.toNetworkElement.networkSourceId, elementGlobalId: _.toNetworkElement.globalId } : { networkSourceId: _.fromNetworkElement.networkSourceId, elementGlobalId: _.fromNetworkElement.globalId }, w = g.get(b) || [];
      w.push(M), g.set(b, w);
    });
    const y = await this._createAssociationFeatureObjects(p, g, s, m, f, i);
    this._parseFeatureObjects(y, h);
  }
  async _queryFeatureCount() {
    await this._loadUtiltyNetworks();
    const { _queryFeatureCountAbortController: t, canQuery: i } = this;
    i ? (await this._queryAssociatedFeatureCount(t), this._set("featureCount", this.attachmentsFeatureCount + this.structureFeatureCount + this.contentFeatureCount + this.containerFeatureCount + this.connectivityFeatureCount)) : this._set("featureCount", 0);
  }
  async _query(t) {
    await this._loadUtiltyNetworks();
    const { _queryAbortController: i } = this;
    this.featureCount && (this._destroyAssociatedFeatureViewModels(), this._clearFeatures(), this.destroyed || await this._queryAssociatedFeatures(t, { signal: i?.signal }));
  }
};
r([a()], $.prototype, "_loaded", void 0), r([a()], $.prototype, "_queryAbortController", void 0), r([a()], $.prototype, "_queryPageAbortController", void 0), r([a()], $.prototype, "_queryFeatureCountAbortController", void 0), r([a({ readOnly: !0 })], $.prototype, "supportsCacheHint", null), r([a({ readOnly: !0 })], $.prototype, "canLoad", null), r([a({ readOnly: !0 })], $.prototype, "canQuery", null), r([a()], $.prototype, "networkSourceIdsInUse", void 0), r([a()], $.prototype, "description", void 0), r([a({ type: qe })], $.prototype, "graphic", void 0), r([a()], $.prototype, "layer", void 0), r([a()], $.prototype, "map", void 0), r([a({ readOnly: !0 })], $.prototype, "objectId", null), r([a({ readOnly: !0 })], $.prototype, "objectIdField", null), r([a({ readOnly: !0 })], $.prototype, "globalId", null), r([a({ readOnly: !0 })], $.prototype, "globalIdField", null), r([a()], $.prototype, "featureCount", void 0), r([a()], $.prototype, "associationTypes", void 0), r([a()], $.prototype, "showAllEnabled", void 0), r([a()], $.prototype, "state", null), r([a()], $.prototype, "title", void 0), r([a({ readOnly: !0 })], $.prototype, "utilityNetwork", null), r([a({ readOnly: !0 })], $.prototype, "associationsLayer", null), r([a({ readOnly: !0 })], $.prototype, "attachmentsFeatureCount", void 0), r([a({ readOnly: !0 })], $.prototype, "structureFeatureCount", void 0), r([a({ readOnly: !0 })], $.prototype, "attachmentsAssociations", null), r([a({ readOnly: !0 })], $.prototype, "structureAssociations", null), r([a({ readOnly: !0 })], $.prototype, "contentFeatureCount", void 0), r([a({ readOnly: !0 })], $.prototype, "containerFeatureCount", void 0), r([a({ readOnly: !0 })], $.prototype, "contentAssociations", null), r([a({ readOnly: !0 })], $.prototype, "containerAssociations", null), r([a({ readOnly: !0 })], $.prototype, "connectivityFeatureCount", void 0), r([a({ readOnly: !0 })], $.prototype, "connectivityAssociations", null), r([a({ readOnly: !0 })], $.prototype, "associationFeatures", null), r([a({ readOnly: !0 })], $.prototype, "associationViewModels", null), $ = r([T("esri.widgets.Feature.FeatureUtilityNetworkAssociations.FeatureUtilityNetworkAssociationsViewModel")], $);
const mt = $;
let st = class extends pe {
  constructor(t) {
    super(t), this.title = !0, this.description = !0;
  }
};
r([a({ type: Boolean, nonNullable: !0 })], st.prototype, "title", void 0), r([a({ type: Boolean, nonNullable: !0 })], st.prototype, "description", void 0), st = r([T("esri.widgets.Feature.FeatureUtilityNetworkAssociations.VisibleElements")], st);
const Ot = st;
var si;
const ot = "esri-feature", We = `${ot}-relationship`, ze = { base: We, listContainer: `${We}__list`, listItem: `${We}__list-item`, listItemHidden: `${We}__list-item--hidden`, listContainerQuerying: `${We}__list--querying`, featureObserver: `${ot}__feature-observer`, stickySpinnerContainer: `${ot}__sticky-loading-container`, loadingSpinnerContainer: `${ot}__loading-container`, expander: `${We}__expander`, filterContainer: `${ot}__filter-container` };
let R = si = class extends ee {
  constructor(e, t) {
    super(e, t), this.flowType = "feature-utility-network-association-type", this.description = null, this.headingLevel = 2, this.title = null, this.viewModel = new mt(), this.parentFeatureViewModel = null, this.listType = null, this.selectedLayer = null, this.flowItems = null, this.messages = null, this.messagesCommon = null, this.visibleElements = new Ot(), this._featuresPerPage = 50, this._maxNumFeatures = 1e3, this._currentFeaturePage = 1, this._previewDisplayCount = 3, this._associatedFeatureIntersectionObserverNode = null, this._associatedFeatureIntersectionObserver = new IntersectionObserver(([i]) => {
      i?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this._tooltipReferenceMap = new _n(), this._filterText = "";
  }
  initialize() {
    this.addHandles([v(() => [this._associatedFeatureIntersectionObserverNode], () => this._handleAssociatedFeatureObserverChange())]);
  }
  loadDependencies() {
    return Ie({ chip: () => import("./calcite-chip-CHjeIocJ.js"), icon: () => import("./calcite-icon-DNGdToul.js"), input: () => import("./calcite-input-Dc6Y-a67.js"), loader: () => import("./calcite-loader-jYuw63YL.js"), list: () => import("./calcite-list-PPvzMcEs.js"), "list-item": () => import("./calcite-list-item-BUtf0P5M.js"), tooltip: () => import("./calcite-tooltip-Bw261MQU.js") });
  }
  destroy() {
    this._tooltipReferenceMap.clear();
  }
  get _numAssociatedFeatures() {
    const e = this.viewModel.associationViewModels;
    return this.selectedLayer ? e.get(this.selectedLayer).length : 0;
  }
  set currentFeaturePage(e) {
    const { _featuresPerPage: t, _numAssociatedFeatures: i } = this, n = 1, s = Math.ceil(i / t) || 1;
    this._currentFeaturePage = Math.max(Math.min(e, s), n);
  }
  get currentFeaturePage() {
    return this._currentFeaturePage;
  }
  render() {
    const e = this.viewModel.associationViewModels, { state: t, showAllEnabled: i } = this.viewModel, { state: n } = this.parentFeatureViewModel ?? {};
    return u("div", { class: this.classes(ze.base, C.widget) }, t === "loading" || t === "querying" || n === "loading" ? this._renderLoading() : u("calcite-list", null, i && this.selectedLayer ? u(bn, null, this._renderFilter(), this._renderAssociatedFeatureListPage(), this._renderFeatureObserver()) : Array.from(e.keys(), (s) => this._renderTypeList(s, e.get(s)))));
  }
  _renderFilter() {
    return u("div", { class: ze.filterContainer, key: "filter" }, u("calcite-input", { icon: "search", placeholder: this.messages.associationFilterPlaceholder, type: "search", onCalciteInputInput: (e) => {
      this._filterText = e.target.value.trim().toLowerCase(), this._currentFeaturePage = 1;
    } }));
  }
  _showAllAssociations(e) {
    const { flowItems: t, viewModel: i, description: n } = this;
    if (!t || !e) return;
    i.showAllEnabled = !0;
    const s = new si({ selectedLayer: e, title: e?.title, flowItems: t, parentFeatureViewModel: this.parentFeatureViewModel, featureVisibleElements: this.featureVisibleElements, description: n, visibleElements: { title: !1, description: !1 }, viewModel: i });
    t.push(s);
  }
  _renderAssociatedFeatureListPage() {
    const { currentFeaturePage: e, _featuresPerPage: t, _maxNumFeatures: i, _filterText: n } = this, s = Math.min(e * t, i), o = this.viewModel.associationViewModels.get(this.selectedLayer).filter((l) => Et(l.featureViewModel).toLowerCase().includes(n)).slice(0, s);
    return [...this._renderTooltips(o), ...this._renderAssociatedFeatureList(o)];
  }
  async _handleAssociatedFeatureObserverChange() {
    this._associatedFeatureIntersectionObserverNode && this._associatedFeatureIntersectionObserver.unobserve(this._associatedFeatureIntersectionObserverNode);
    const { state: e, showAllEnabled: t } = this.viewModel;
    await Pt(0), this._associatedFeatureIntersectionObserverNode && e === "ready" && t && this._associatedFeatureIntersectionObserver.observe(this._associatedFeatureIntersectionObserverNode);
  }
  _associatedFeatureIntersectionObserverCreated(e) {
    this._associatedFeatureIntersectionObserverNode = e;
  }
  _renderFeatureObserver() {
    return u("div", { afterCreate: this._associatedFeatureIntersectionObserverCreated, bind: this, class: ze.featureObserver, key: "feature-observer" });
  }
  _increaseFeaturePage() {
    this.currentFeaturePage++;
  }
  _renderLoading() {
    return u("div", { class: ze.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderLoadingIcon() {
    return u("calcite-loader", { inline: !0, label: "" });
  }
  isConnectivity(e) {
    return ["connectivity", "junction-junction-connectivity", "junction-edge-from-connectivity", "junction-midspan-connectivity", "junction-edge-to-connectivity"].includes(e.association.associationType);
  }
  _getConnectivityTooltip(e) {
    switch (e) {
      case "connectivity":
      case "junction-junction-connectivity":
        return this.messages.associationsJunctionJunction;
      case "junction-edge-from-connectivity":
        return this.messages.associationsJunctionEdgeFrom;
      case "junction-midspan-connectivity":
        return this.messages.associationsJunctionEdgeMidspan;
      case "junction-edge-to-connectivity":
        return this.messages.associationsJunctionEdgeTo;
      default:
        return "";
    }
  }
  _renderItemTooltip(e) {
    const { _tooltipReferenceMap: t } = this;
    return this.isConnectivity(e) ? u("calcite-tooltip", { key: `tooltip-${e.featureViewModel.uid}`, referenceElement: t.get(e.featureViewModel.uid) }, this._getConnectivityTooltip(e.association.associationType)) : null;
  }
  _renderConnectivityIcon(e, t) {
    let i;
    switch (e) {
      case "junction-edge-from-connectivity":
        i = "connection-end-left";
        break;
      case "junction-edge-to-connectivity":
        i = "connection-end-right";
        break;
      case "junction-midspan-connectivity":
        i = "connection-middle";
        break;
      default:
        i = "connection-to-connection";
    }
    return u("calcite-icon", { afterCreate: (n) => this._tooltipReferenceMap.set(t, n), afterRemoved: () => this._tooltipReferenceMap.delete(t), icon: i, scale: "s", slot: "content-start" });
  }
  _formatPercentAlong(e) {
    return `${Ve(e.association.percentAlong, { style: "percent", maximumFractionDigits: 2 })}`;
  }
  _renderAssociatedFeature(e) {
    const { featureViewModel: t } = e, i = Et(t), n = t.state === "loading", s = this._findFlowItem(t), o = s < 0 && this._isParentFeature(t), l = o || s >= 0, d = this.isConnectivity(e), c = d && e.association.associationType === "junction-midspan-connectivity";
    return u("calcite-list-item", { class: this.classes(ze.listItem, { [ze.listItemHidden]: n }), description: e.terminalName ?? "", key: `associated-feature-type-${t.uid}`, label: i, onCalciteListItemSelect: () => this._handleFeatureClick(o, s, t) }, d ? this._renderConnectivityIcon(e.association.associationType, e.featureViewModel.uid) : null, c ? u("calcite-chip", { scale: "s", slot: "content-end", value: e.association.percentAlong }, this._formatPercentAlong(e)) : null, this._renderChevronIconNode(l));
  }
  async _selectAssociation(e) {
    const { flowItems: t, featureVisibleElements: i } = this;
    if (!t) return;
    e.abilities = { utilityNetworkAssociationsContent: !0 };
    const { default: n } = await Promise.resolve().then(() => Gn);
    t.push(new n({ flowItems: t, flowType: "feature-association", viewModel: e, visibleElements: i }));
  }
  _handleFeatureClick(e, t, i) {
    if (e) this.flowItems.drain((n) => {
      "showAllEnabled" in n.viewModel && (n.viewModel.showAllEnabled = !1), n.viewModel = null, n.destroy();
    });
    else if (t < 0 || !this.flowItems) this._selectAssociation(i);
    else for (; this.flowItems.length > t + 1; ) {
      const n = this.flowItems.pop();
      n && ("showAllEnabled" in n.viewModel && (n.viewModel.showAllEnabled = !1), n.viewModel = null, n.destroy());
    }
  }
  _featureViewModelMatch(e, t) {
    const i = e.graphic, n = i?.layer;
    let s = null;
    n?.type === "subtype-sublayer" && n.parent ? s = n.parent.globalIdField ?? null : n && "globalIdField" in n && (s = n.globalIdField);
    const o = s ? i?.attributes[s] : null, l = t.graphic, d = l?.layer;
    let c = null;
    d?.type === "subtype-sublayer" && d.parent ? c = d.parent.globalIdField ?? null : d && "globalIdField" in d && (c = d.globalIdField);
    const h = c ? l?.attributes[c] : null;
    return o && h && o === h;
  }
  _isParentFeature(e) {
    const t = this.flowItems?.getItemAt(0);
    if (!t) return !1;
    const i = t.parentFeatureViewModel;
    return this._featureViewModelMatch(i, e);
  }
  _findFlowItem(e) {
    return this.flowItems?.findIndex((t) => {
      if (t.flowType !== "feature") return !1;
      const i = t.viewModel;
      return this._featureViewModelMatch(i, e);
    }) ?? -1;
  }
  _renderTooltips(e) {
    return e.toArray().map((t) => this._renderItemTooltip(t));
  }
  _renderAssociatedFeatureList(e) {
    return e.toArray().map((t) => this._renderAssociatedFeature(t));
  }
  _renderChevronIconNode(e) {
    return u("calcite-icon", { flipRtl: !0, icon: e ? "move-up" : "chevron-right", scale: "s", slot: "content-end" });
  }
  _renderTypeList(e, t) {
    const { messages: i } = this, n = t.slice(0, this._previewDisplayCount), s = n.length < t.length;
    return u("calcite-list-item", { key: "show-all", label: e.title, open: !0, value: e.id }, u("calcite-chip", { scale: "s", slot: "actions-end", value: e.id }, t.length), u("calcite-list", { group: e.id }, [this._renderTooltips(n), this._renderAssociatedFeatureList(n)], s ? u("calcite-list-item", { description: ae(i?.numberRecords, { number: t.length.toString() }), key: "show-all-item", label: i.showAll, onCalciteListItemSelect: () => this._showAllAssociations(e) }, u("calcite-icon", { icon: "list", scale: "s", slot: "content-end" })) : null));
  }
};
r([a()], R.prototype, "flowType", void 0), r([a()], R.prototype, "description", void 0), r([a()], R.prototype, "headingLevel", void 0), r([a()], R.prototype, "title", void 0), r([a({ type: mt })], R.prototype, "viewModel", void 0), r([a()], R.prototype, "parentFeatureViewModel", void 0), r([a()], R.prototype, "listType", void 0), r([a()], R.prototype, "selectedLayer", void 0), r([a()], R.prototype, "featureVisibleElements", void 0), r([a()], R.prototype, "flowItems", void 0), r([a(), Q("esri/widgets/Feature/t9n/Feature")], R.prototype, "messages", void 0), r([a(), Q("esri/t9n/common")], R.prototype, "messagesCommon", void 0), r([a({ type: Ot, nonNullable: !0 })], R.prototype, "visibleElements", void 0), r([a()], R.prototype, "_featuresPerPage", void 0), r([a()], R.prototype, "_maxNumFeatures", void 0), r([a()], R.prototype, "_numAssociatedFeatures", null), r([a()], R.prototype, "_currentFeaturePage", void 0), r([a()], R.prototype, "currentFeaturePage", null), r([a()], R.prototype, "_previewDisplayCount", void 0), r([a()], R.prototype, "_associatedFeatureIntersectionObserverNode", void 0), r([a()], R.prototype, "_tooltipReferenceMap", void 0), r([a()], R.prototype, "_filterText", void 0), R = si = r([T("esri.widgets.Feature.FeatureUtilityNetworkAssociationType")], R);
const Er = R, At = "esri-feature", He = `${At}-relationship`, it = { base: He, listContainer: `${He}__list`, listItem: `${He}__list-item`, listItemHidden: `${He}__list-item--hidden`, listContainerQuerying: `${He}__list--querying`, featureObserver: `${At}__feature-observer`, stickySpinnerContainer: `${At}__sticky-loading-container`, loadingSpinnerContainer: `${At}__loading-container`, expander: `${He}__expander` };
let ne = class extends ee {
  constructor(t, i) {
    super(t, i), this._featureElementInfo = null, this.flowType = "feature-utility-network-associations", this.flowItems = null, this.parentFeatureViewModel = null, this.headingLevel = 2, this.viewModel = new mt(), this.messages = null, this.messagesCommon = null, this.visibleElements = new Ot();
  }
  initialize() {
    this._featureElementInfo = new pt(), this.addHandles([v(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), N)]);
  }
  loadDependencies() {
    return Ie({ chip: () => import("./calcite-chip-CHjeIocJ.js"), icon: () => import("./calcite-icon-DNGdToul.js"), loader: () => import("./calcite-loader-jYuw63YL.js"), notice: () => import("./calcite-notice-6L3_r-5-.js"), list: () => import("./calcite-list-PPvzMcEs.js"), "list-item": () => import("./calcite-list-item-BUtf0P5M.js") });
  }
  destroy() {
    this._featureElementInfo = vn(this._featureElementInfo);
  }
  get description() {
    return this.viewModel.description;
  }
  set description(t) {
    this.viewModel.description = t;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(t) {
    this.viewModel.title = t;
  }
  render() {
    const { state: t } = this.viewModel;
    return u("div", { class: this.classes(it.base, C.widget) }, this._featureElementInfo?.render(), t === "loading" ? this._renderLoading() : t === "disabled" ? this._renderAssociationNotFound() : this._renderContent());
  }
  _renderStickyLoading() {
    return this.viewModel.state === "querying" ? u("div", { class: it.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return u("calcite-loader", { inline: !0, label: "" });
  }
  _renderLoading() {
    return u("div", { class: it.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderAssociationNotFound() {
    return u("calcite-notice", { icon: "exclamation-mark-triangle", key: "association-not-found", kind: "danger", open: !0, scale: "s", width: "full" }, u("div", { slot: "message" }, this.messages?.noAssociations));
  }
  _setupFeatureElementInfo() {
    const { headingLevel: t, visibleElements: i } = this, n = i.description && this.description, s = i.title && this.title;
    this._featureElementInfo?.set({ description: n, title: s, headingLevel: t });
  }
  _getAssociationTypeTitle(t) {
    const { messages: i } = this;
    if (t.title) return t.title;
    switch (t.type) {
      case "attachment":
        return i.associationsAttachments;
      case "connectivity":
        return i.associationsConnectivity;
      case "structure":
        return i.associationsStructure;
      case "content":
        return i.associationsContents;
      case "container":
        return i.associationsContainer;
    }
  }
  _selectAssociationType(t) {
    const { viewModel: i, flowItems: n, parentFeatureViewModel: s } = this;
    if (!n) return;
    const { associationTypes: o } = i;
    o.forEach((d) => {
      d.type === t.type ? d.open = !0 : d.open = !1;
    });
    const l = new Er({ viewModel: i, parentFeatureViewModel: s, listType: t, title: this._getAssociationTypeTitle(t), featureVisibleElements: this.featureVisibleElements, description: this.parentFeatureViewModel?.title, flowItems: n });
    n.push(l);
  }
  _renderAssociationType(t) {
    const i = this._getAssociationTypeTitle(t);
    return u("calcite-list-item", { description: t.description, key: `association-type-${t.type}`, label: i, value: t.type, onCalciteListItemSelect: () => this._selectAssociationType(t) }, u("calcite-chip", { scale: "s", slot: "content-end", value: t.type }, this._getFeatureCount(t.type)), u("calcite-icon", { flipRtl: !0, icon: "chevron-right", scale: "s", slot: "content-end" }));
  }
  _getFeatureCount(t) {
    switch (t) {
      case "attachment":
        return this.viewModel.attachmentsFeatureCount;
      case "structure":
        return this.viewModel.structureFeatureCount;
      case "content":
        return this.viewModel.contentFeatureCount;
      case "container":
        return this.viewModel.containerFeatureCount;
      case "connectivity":
        return this.viewModel.connectivityFeatureCount;
    }
  }
  _renderAssociations(t) {
    return u("div", null, this._getFeatureCount(t.type) > 0 ? this._renderAssociationType(t) : null);
  }
  _renderContent() {
    const { state: t, associationTypes: i } = this.viewModel;
    return u("div", { class: this.classes(it.listContainer, { [it.listContainerQuerying]: t === "querying" }), key: "list-container" }, t === "ready" ? u("calcite-list", null, i.map((n) => this._renderAssociations(n))) : null, this._renderStickyLoading());
  }
};
r([a()], ne.prototype, "flowType", void 0), r([a()], ne.prototype, "flowItems", void 0), r([a()], ne.prototype, "parentFeatureViewModel", void 0), r([a()], ne.prototype, "featureVisibleElements", void 0), r([a()], ne.prototype, "description", null), r([a()], ne.prototype, "headingLevel", void 0), r([a()], ne.prototype, "title", null), r([a({ type: mt })], ne.prototype, "viewModel", void 0), r([a(), Q("esri/widgets/Feature/t9n/Feature")], ne.prototype, "messages", void 0), r([a(), Q("esri/t9n/common")], ne.prototype, "messagesCommon", void 0), r([a({ type: Ot, nonNullable: !0 })], ne.prototype, "visibleElements", void 0), ne = r([T("esri.widgets.Feature.FeatureUtilityNetworkAssociations")], ne);
const xr = ne;
let kr = class {
  constructor(t, i) {
    this.preLayerQueryCallback = t, this.preRequestCallback = i, this.preLayerQueryCallback || (this.preLayerQueryCallback = (n) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (n) => {
    });
  }
};
var Ge;
const Tr = 1, Ki = "content-view-models", en = "relationship-view-models", Lr = "association-view-models", tn = { attachmentsContent: !0, chartAnimation: !0, customContent: !0, expressionContent: !0, fieldsContent: !0, mediaContent: !0, textContent: !0, relationshipContent: !0, utilityNetworkAssociationsContent: !0 };
let S = Ge = class extends ci(pe) {
  constructor(e) {
    super(e), this._error = null, this._featureAbortController = null, this._associationVMAbortController = null, this._graphicChangedThrottled = hi(this._graphicChanged, Tr, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...tn }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = !1, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (t) => {
      const { abilities: i } = this;
      return t.type === "attachments" && !!i.attachmentsContent || t.type === "custom" && !!i.customContent || t.type === "fields" && !!i.fieldsContent || t.type === "media" && !!i.mediaContent || t.type === "text" && !!i.textContent || t.type === "expression" && !!i.expressionContent || t.type === "relationship" && !!i.relationshipContent || t.type === "utility-network-associations" && !!i.utilityNetworkAssociationsContent;
    }, this.addHandles(v(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), N));
  }
  initialize() {
    this.addHandles(this._graphicChangedThrottled);
  }
  destroy() {
    this._clear(), this._cancelFeatureQuery(), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return this.graphic != null ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return wo(Si(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return xn(this.graphic);
  }
  castAbilities(e) {
    return { ...tn, ...e };
  }
  get isTable() {
    return this._sourceLayer?.isTable || !1;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(e) {
    this._featureAbortController = new AbortController(), this._set("graphic", e?.clone() ?? null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e) {
    this._override("spatialReference", e);
  }
  get timeZone() {
    return this.view?.timeZone ?? In;
  }
  set timeZone(e) {
    this._overrideIfSome("timeZone", e);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(e) {
    this._override("map", e);
  }
  get waitingForContent() {
    return !(!this._featureAbortController && !this._associationVMAbortController);
  }
  setActiveMedia(e, t) {
    const i = this.contentViewModels[e];
    i instanceof Oe && i.setActiveMedia(t);
  }
  nextMedia(e) {
    const t = this.contentViewModels[e];
    t instanceof Oe && t.next();
  }
  previousMedia(e) {
    const t = this.contentViewModels[e];
    t instanceof Oe && t.previous();
  }
  async updateGeometry() {
    const { graphic: e, spatialReference: t, _sourceLayer: i } = this;
    await i?.load();
    const n = i?.objectIdField;
    if (!n || !e || !i) return;
    const s = e?.attributes?.[n];
    if (s == null) return;
    const o = [s];
    if (!e.geometry) {
      const l = await Rn({ layer: i, graphic: e, outFields: [], objectIds: o, returnGeometry: !0, spatialReference: t }), d = l?.geometry;
      d && (e.geometry = d);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  async _graphicChanged() {
    this._cancelFeatureQuery(), this._error = null, this._clear();
    const { graphic: e } = this;
    if (!e) return;
    const t = new AbortController();
    this._featureAbortController = t;
    try {
      await this._queryFeature({ signal: t.signal });
    } catch (i) {
      xt(i) || (this._error = i, G.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i, graphic: e, popupTemplate: this._effectivePopupTemplate }));
    }
    this._featureAbortController === t && (this._featureAbortController = null);
  }
  _cancelFeatureQuery() {
    const { _featureAbortController: e } = this;
    e && e.abort(), this._featureAbortController = null;
  }
  _compileContentElement(e, t) {
    return e.type === "attachments" ? this._compileAttachments(e, t) : e.type === "custom" ? this._compileCustom(e, t) : e.type === "fields" ? this._compileFields(e, t) : e.type === "media" ? this._compileMedia(e, t) : e.type === "text" ? this._compileText(e, t) : e.type === "expression" ? this._compileExpression(e, t) : e.type === "relationship" ? this._compileRelationship(e, t) : e.type === "utility-network-associations" ? this._compileUtilityNetworkAssociation(e, t) : void 0;
  }
  _compileContent(e) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e) ? e.filter(this._isAllowedContentType).map((t, i) => this._compileContentElement(t, i)).filter(Nt) : typeof e == "string" ? this._compileText(new gn({ text: e }), 0).text : e;
  }
  _destroyContentViewModels() {
    this.removeHandles(en), this.removeHandles(Ki), this.contentViewModels.forEach((e) => e && !e.destroyed && e.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e, t) {
    const i = e?.graphic?.getObjectId(), n = t?.getObjectId();
    return i != null && n != null && i === n;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e, relatedFeatures: t, map: i }) {
    const { view: n, spatialReference: s, timeZone: o } = this;
    t?.filter(Boolean).forEach((l) => {
      e.some((d) => this._matchesFeature(d, l)) || e.add(new Ge({ abilities: { relationshipContent: !1 }, map: i, view: n, spatialReference: s, timeZone: o, graphic: l }));
    }), e.forEach((l) => {
      t?.find((c) => this._matchesFeature(l, c)) || e.remove(l);
    });
  }
  _setExpressionContentVM(e, t) {
    const i = this.formattedAttributes, { contentElement: n, contentElementViewModel: s } = e, o = n?.type;
    s && o && (o === "fields" && (this._createFieldsFormattedAttributes({ contentElement: n, contentElementIndex: t, formattedAttributes: i }), s.set(this._createFieldsVMParams(n, t))), o === "media" && (this._createMediaFormattedAttributes({ contentElement: n, contentElementIndex: t, formattedAttributes: i }), s.set(this._createMediaVMParams(n, t))), o === "text" && s.set(this._createTextVMParams(n)));
  }
  _compileRelationship(e, t) {
    const { displayCount: i, orderByFields: n, relationshipId: s, title: o, description: l } = e, { _sourceLayer: d, graphic: c, map: h } = this;
    if (!Pn(d)) return;
    const p = new _i({ displayCount: i, graphic: c, orderByFields: n, relationshipId: s, layer: d, map: h, ...this._compileTitleAndDesc({ title: o, description: l }) });
    return this.contentViewModels[t] = p, this.addHandles(dt(() => p.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(p)), en), e;
  }
  _matchesGlobalFeature(e, t) {
    const i = e?.association.globalId, n = t?.association.globalId;
    return i != null && n != null && i === n;
  }
  async _setUpUtilityNetworkAssociationsViewModels(e, t, i) {
    const { view: n, spatialReference: s, timeZone: o } = this;
    e.forEach((d, c) => {
      const h = t.get(c);
      h ? d.forEach((p) => {
        h.find((m) => this._matchesGlobalFeature(p, m)) || (d.remove(p), d.length === 0 && e.delete(c));
      }) : (d.removeAll(), e.delete(c));
    }), t.forEach((d, c) => {
      const h = e.get(c) || new re();
      d?.filter(Boolean).forEach((p) => {
        h.some((m) => this._matchesGlobalFeature(m, p)) || h.add({ association: p.association, featureViewModel: new Ge({ abilities: { utilityNetworkAssociationsContent: !1 }, map: i, view: n, spatialReference: s, timeZone: o, graphic: p.feature }), terminalName: p.terminalName });
      }), e.set(c, h);
    });
    const l = new AbortController();
    this._associationVMAbortController = l, await this._sortListObjectsByTitle(e, { signal: l.signal }), this._associationVMAbortController === l && (this._associationVMAbortController = null);
  }
  async _sortListObjectsByTitle(e, t) {
    for (const i of e.values()) {
      const n = i.map((s) => Fn(() => s.featureViewModel.state === "ready", t?.signal));
      await Promise.all(n), i.sort(this._compareByFeatureTitle);
    }
  }
  _compareByFeatureTitle(e, t) {
    const i = Et(e.featureViewModel), n = Et(t.featureViewModel);
    return i.localeCompare(n, void 0, { numeric: !0 });
  }
  _compileUtilityNetworkAssociation(e, t) {
    const { title: i, description: n, associationTypes: s } = e, { _sourceLayer: o, graphic: l, map: d } = this;
    if (!po(o)) return;
    const c = new mt({ graphic: l, associationTypes: s, layer: o, map: d, ...this._compileTitleAndDesc({ title: i, description: n }) });
    return this.contentViewModels[t] = c, this.addHandles([v(() => c.associationFeatures.values(), () => this._setUpUtilityNetworkAssociationsViewModels(c.associationViewModels, c.associationFeatures, c.map))], Lr), e;
  }
  _compileExpression(e, t) {
    const { expressionInfo: i } = e, { graphic: n, map: s, spatialReference: o, view: l, location: d } = this, c = new wi({ expressionInfo: i, graphic: n, interceptor: Ge.interceptor, map: s, spatialReference: o, view: l, location: d });
    return this.contentViewModels[t] = c, this.addHandles(v(() => c.contentElementViewModel, () => this._setExpressionContentVM(c, t), N), Ki), e;
  }
  _compileAttachments(e, t) {
    const { graphic: i } = this, { description: n, title: s } = e;
    return this.contentViewModels[t] = new yi({ graphic: i, ...this._compileTitleAndDesc({ title: s, description: n }) }), e;
  }
  _compileCustom(e, t) {
    const { graphic: i } = this, { creator: n, destroyer: s } = e;
    return this.contentViewModels[t] = new Tt({ graphic: i, creator: n, destroyer: s }), e;
  }
  _compileTitleAndDesc({ title: e, description: t }) {
    const { _fieldInfoMap: i, _sourceLayer: n, graphic: s, formattedAttributes: o } = this, l = s?.attributes, d = this._expressionAttributes, c = o.global;
    return { title: Se({ attributes: l, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: n, text: e }), description: Se({ attributes: l, fieldInfoMap: i, globalAttributes: c, expressionAttributes: d, layer: n, text: t }) };
  }
  _createFieldsVMParams(e, t) {
    const i = this._effectivePopupTemplate, n = this.formattedAttributes, s = { ...n?.global, ...n?.content[t] }, o = e?.fieldInfos || i?.fieldInfos, l = o?.filter(({ fieldName: p }) => !!p && (pi(p) || be(p) || s.hasOwnProperty(p))), d = i?.expressionInfos, { description: c, title: h } = e;
    return { attributes: s, expressionInfos: d, fieldInfos: l, ...this._compileTitleAndDesc({ title: h, description: c }) };
  }
  _compileFields(e, t) {
    const i = e.clone(), n = new St(this._createFieldsVMParams(e, t));
    return this.contentViewModels[t] = n, i.fieldInfos = n.formattedFieldInfos.slice(), i;
  }
  _createMediaVMParams(e, t) {
    const { abilities: i, graphic: n, _fieldInfoMap: s, _effectivePopupTemplate: o, relatedInfos: l, _sourceLayer: d, _expressionAttributes: c } = this, h = this.formattedAttributes, p = n?.attributes ?? {}, { description: m, mediaInfos: f, title: g } = e;
    return { abilities: { chartAnimation: i.chartAnimation }, activeMediaInfoIndex: e.activeMediaInfoIndex || 0, attributes: p, isAggregate: n?.isAggregate, layer: d, fieldInfoMap: s, formattedAttributes: { ...h?.global, ...h?.content[t] }, expressionAttributes: c, mediaInfos: f, popupTemplate: o, relatedInfos: l, ...this._compileTitleAndDesc({ title: g, description: m }) };
  }
  _compileMedia(e, t) {
    const i = e.clone(), n = new Oe(this._createMediaVMParams(e, t));
    return i.mediaInfos = n.formattedMediaInfos.slice(), this.contentViewModels[t] = n, i;
  }
  _createTextVMParams(e) {
    const { graphic: t, _fieldInfoMap: i, _sourceLayer: n, _expressionAttributes: s } = this;
    if (e && e.text) {
      const o = t?.attributes ?? {}, l = this.formattedAttributes?.global ?? {};
      e.text = Se({ attributes: o, fieldInfoMap: i, globalAttributes: l, expressionAttributes: s, layer: n, text: e.text });
    }
    return { graphic: t, creator: e.text };
  }
  _compileText(e, t) {
    const i = e.clone();
    return this.contentViewModels[t] = new Tt(this._createTextVMParams(i)), i;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e, _sourceLayer: t, graphic: i, timeZone: n } = this;
    if (!e) return;
    const { lastEditInfoEnabled: s } = e, o = t?.editFieldsInfo;
    return s && o ? vo(o, i?.attributes, n, t) : void 0;
  }
  _compileTitle(e) {
    const { _fieldInfoMap: t, _sourceLayer: i, graphic: n, _expressionAttributes: s } = this, o = n?.attributes ?? {}, l = this.formattedAttributes?.global ?? {};
    return Se({ attributes: o, fieldInfoMap: t, globalAttributes: l, expressionAttributes: s, layer: i, text: e });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e, graphic: t } = this;
    return t ? kt({ type: "title", value: e?.title, event: { graphic: t } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: e, graphic: t } = this;
    return t ? kt({ type: "content", value: e?.content, event: { graphic: t } }) : null;
  }
  async _queryFeature(e) {
    const { _featureAbortController: t, _sourceLayer: i, graphic: n, _effectivePopupTemplate: s } = this, o = this.map, l = this.view, d = this.spatialReference, c = this.location;
    if (t !== this._featureAbortController || !n) return;
    await bo({ graphic: n, popupTemplate: s, layer: i, spatialReference: d }, e);
    const { content: { value: h }, title: { value: p } } = await De({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: m } } = await De({ checkForRelatedFeatures: this._checkForRelatedFeatures(e), expressionAttributes: _r({ expressionInfos: s?.expressionInfos, spatialReference: d, graphic: n, map: o, interceptor: Ge.interceptor, view: l, options: e, location: c }) });
    t === this._featureAbortController && n && (this._expressionAttributes = m, this._graphicExpressionAttributes = { ...n.attributes, ...m }, this._set("formattedAttributes", this._createFormattedAttributes(h)), this._set("title", this._compileTitle(p)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(h) || null));
  }
  _createMediaFormattedAttributes({ contentElement: e, contentElementIndex: t, formattedAttributes: i }) {
    const { _effectivePopupTemplate: n, graphic: s, relatedInfos: o, _sourceLayer: l, _fieldInfoMap: d, _graphicExpressionAttributes: c, timeZone: h } = this;
    i.content[t] = qt({ fieldInfos: n?.fieldInfos, graphic: s, attributes: { ...c, ...e.attributes }, layer: l, fieldInfoMap: d, relatedInfos: o, timeZone: h });
  }
  _createFieldsFormattedAttributes({ contentElement: e, contentElementIndex: t, formattedAttributes: i }) {
    if (e.fieldInfos) {
      const { graphic: n, relatedInfos: s, _sourceLayer: o, _fieldInfoMap: l, _graphicExpressionAttributes: d, timeZone: c } = this;
      i.content[t] = qt({ fieldInfos: e.fieldInfos, graphic: n, attributes: { ...d, ...e.attributes }, layer: o, fieldInfoMap: l, relatedInfos: s, timeZone: c });
    }
  }
  _createFormattedAttributes(e) {
    const { _effectivePopupTemplate: t, graphic: i, relatedInfos: n, _sourceLayer: s, _fieldInfoMap: o, _graphicExpressionAttributes: l, timeZone: d } = this, c = t?.fieldInfos, h = { global: qt({ fieldInfos: c, graphic: i, attributes: l, layer: s, fieldInfoMap: o, relatedInfos: n, timeZone: d }), content: [] };
    return Array.isArray(e) && e.forEach((p, m) => {
      p.type === "fields" && this._createFieldsFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h }), p.type === "media" && this._createMediaFormattedAttributes({ contentElement: p, contentElementIndex: m, formattedAttributes: h });
    }), h;
  }
  _checkForRelatedFeatures(e) {
    const { graphic: t, _effectivePopupTemplate: i } = this;
    return this._queryRelatedInfos(t, Si(i), e);
  }
  async _queryRelatedInfos(e, t, i) {
    const { relatedInfos: n, _sourceLayer: s } = this;
    n.clear();
    const o = s?.associatedLayer != null ? await s?.associatedLayer.load(i) : s;
    if (!o || !e || !t.filter((h) => !!h.fieldName && be(h.fieldName))?.length) return;
    t.forEach((h) => this._configureRelatedInfo(h, o));
    const d = await or({ relatedInfos: n, layer: o }, i);
    Object.keys(d).forEach((h) => {
      const p = n.get(h.toString()), m = d[h]?.value;
      p && m && (p.layerInfo = m.data);
    });
    const c = await rr({ graphic: e, relatedInfos: n, layer: o }, i);
    Object.keys(c).forEach((h) => {
      Yo(c[h]?.value, n.get(h.toString()));
    });
  }
  _configureRelatedInfo(e, t) {
    const { relatedInfos: i } = this, n = It(e.fieldName || "");
    if (!n) return;
    const { layerId: s, fieldName: o } = n;
    if (!s) return;
    const l = i.get(s.toString()) || Xo(s, t);
    l && (ar({ relatedInfo: l, fieldName: o, fieldInfo: e }), this.relatedInfos.set(s, l));
  }
};
S.interceptor = new kr(Mo, Ao), r([a()], S.prototype, "_error", void 0), r([a()], S.prototype, "_featureAbortController", void 0), r([a()], S.prototype, "_associationVMAbortController", void 0), r([a({ readOnly: !0 })], S.prototype, "_effectivePopupTemplate", null), r([a({ readOnly: !0 })], S.prototype, "_fieldInfoMap", null), r([a({ readOnly: !0 })], S.prototype, "_sourceLayer", null), r([a()], S.prototype, "abilities", void 0), r([Ke("abilities")], S.prototype, "castAbilities", null), r([a({ readOnly: !0 })], S.prototype, "content", void 0), r([a({ readOnly: !0 })], S.prototype, "contentViewModels", void 0), r([a()], S.prototype, "description", void 0), r([a({ type: Boolean })], S.prototype, "defaultPopupTemplateEnabled", void 0), r([a({ readOnly: !0 })], S.prototype, "isTable", null), r([a({ readOnly: !0 })], S.prototype, "state", null), r([a({ readOnly: !0 })], S.prototype, "formattedAttributes", void 0), r([a({ type: qe, value: null })], S.prototype, "graphic", null), r([a({ readOnly: !0 })], S.prototype, "lastEditInfo", void 0), r([a({ type: di })], S.prototype, "location", void 0), r([a({ readOnly: !0 })], S.prototype, "relatedInfos", void 0), r([a()], S.prototype, "spatialReference", null), r([a()], S.prototype, "timeZone", null), r([a({ readOnly: !0 })], S.prototype, "title", void 0), r([a()], S.prototype, "map", null), r([a({ readOnly: !0 })], S.prototype, "waitingForContent", null), r([a()], S.prototype, "view", void 0), S = Ge = r([T("esri.widgets.Feature.FeatureViewModel")], S);
const bi = S, H = "esri-feature", V = { base: H, container: `${H}__size-container`, title: `${H}__title`, main: `${H}__main-container`, btn: `${H}__button`, icon: `${H}__icon`, content: `${H}__content`, contentNode: `${H}__content-node`, contentNodeText: `${H}__content-node--text`, contentElement: `${H}__content-element`, text: `${H}__text`, lastEditedInfo: `${H}__last-edited-info`, fields: `${H}__fields`, fieldHeader: `${H}__field-header`, fieldData: `${H}__field-data`, fieldDataDate: `${H}__field-data--date`, loadingSpinnerContainer: `${H}__loading-container` }, Un = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.renderNodeContent = (i) => qn(i) && !i.destroyed ? u("div", { class: V.contentNode, key: i }, i.render()) : i instanceof HTMLElement ? u("div", { afterCreate: this._attachToNode, bind: i, class: V.contentNode, key: i }) : No(i) ? u("div", { afterCreate: this._attachToNode, bind: i.domNode, class: V.contentNode, key: i }) : null;
    }
    _attachToNode(i) {
      const n = this;
      i.appendChild(n);
    }
  };
  return t = r([T("esri.widgets.Feature.support.FeatureContentMixin")], t), t;
}, nn = { title: !0, content: !0, lastEditedInfo: !0 };
let D = class extends Un(ee) {
  constructor(e, t) {
    super(e, t), this._contentWidgets = [], this.flowType = "feature", this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...nn }, this.viewModel = new bi();
  }
  initialize() {
    this.addHandles(v(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), N));
  }
  loadDependencies() {
    return Ie({ notice: () => import("./calcite-notice-6L3_r-5-.js"), loader: () => import("./calcite-loader-jYuw63YL.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e) {
    this.viewModel.graphic = e;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e) {
    this.viewModel.defaultPopupTemplateEnabled = e;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get icon() {
    return "polygon";
  }
  set icon(e) {
    this._overrideIfSome("icon", e);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e) {
    this.viewModel.spatialReference = e;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e) {
    this.viewModel.timeZone = e;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e) {
    return { ...nn, ...e };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e) {
    this.viewModel.map = e;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e) {
    this.viewModel.view = e;
  }
  setActiveMedia(e, t) {
    return this.viewModel.setActiveMedia(e, t);
  }
  nextMedia(e) {
    return this.viewModel.nextMedia(e);
  }
  previousMedia(e) {
    return this.viewModel.previousMedia(e);
  }
  render() {
    const { state: e } = this.viewModel, t = u("div", { class: V.container, key: "container" }, this._renderTitle(), e === "error" ? this._renderError() : e === "loading" ? this._renderLoading() : this._renderContentContainer());
    return u("div", { class: this.classes(V.base, C.widget) }, t);
  }
  _renderError() {
    const { messagesCommon: e, messages: t, visibleElements: i } = this;
    return u("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: !0, scale: "s" }, i.title ? u("div", { key: "error-title", slot: "title" }, e.errorMessage) : null, u("div", { key: "error-message", slot: "message" }, t.loadingError));
  }
  _renderLoading() {
    return u("div", { class: V.loadingSpinnerContainer, key: "loading-container" }, u("calcite-loader", { inline: !0, label: "" }));
  }
  _renderContentContainer() {
    const { visibleElements: e } = this;
    return e.content ? u("div", { class: V.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e, title: t } = this;
    return e.title ? u(vi, { class: V.title, innerHTML: t, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e = this.viewModel.content, t = "content";
    if (!e) return null;
    if (Array.isArray(e)) return e.length ? u("div", { class: V.contentNode, key: `${t}-content-elements` }, e.map(this._renderContentElement, this)) : null;
    if (typeof e == "string") {
      const i = this._contentWidgets[0];
      return !i || i.destroyed ? null : u("div", { class: this.classes(V.contentNode, V.contentNodeText), key: `${t}-content` }, i.render());
    }
    return this.renderNodeContent(e);
  }
  _renderContentElement(e, t) {
    const { visibleElements: i } = this;
    if (typeof i.content != "boolean" && !i.content?.[e.type]) return null;
    switch (e.type) {
      case "attachments":
        return this._renderAttachments(t);
      case "custom":
        return this._renderCustom(e, t);
      case "fields":
        return this._renderFields(t);
      case "media":
        return this._renderMedia(t);
      case "text":
        return this._renderText(e, t);
      case "expression":
        return this._renderExpression(t);
      case "relationship":
        return this._renderRelationship(t);
      case "utility-network-associations":
        return this._renderAssociation(t);
      default:
        return null;
    }
  }
  _renderAttachments(e) {
    const t = this._contentWidgets[e];
    if (!t || t.destroyed) return null;
    const { state: i, attachmentInfos: n } = t.viewModel;
    return i === "loading" || n.length > 0 ? u("div", { class: this.classes(V.contentElement), key: this._buildKey("attachments-element", e) }, t.render()) : null;
  }
  _renderRelationship(e) {
    const t = this._contentWidgets[e];
    return t && !t.destroyed && this.flowItems ? u("div", { class: V.contentElement, key: this._buildKey("relationship-element", e) }, t.render()) : null;
  }
  _renderAssociation(e) {
    const t = this._contentWidgets[e];
    return t && !t.destroyed && this.flowItems ? u("div", { class: V.contentElement, key: this._buildKey("utility-network-association-element", e) }, t.render()) : null;
  }
  _renderExpression(e) {
    const t = this._contentWidgets[e];
    return t && !t.destroyed && t.viewModel.contentElement ? u("div", { class: V.contentElement, key: this._buildKey("expression-element", e) }, t.render()) : null;
  }
  _renderCustom(e, t) {
    const { creator: i } = e, n = this._contentWidgets[t];
    return !n || n.destroyed ? null : i ? u("div", { class: V.contentElement, key: this._buildKey("custom-element", t) }, n.render()) : null;
  }
  _renderFields(e) {
    const t = this._contentWidgets[e];
    return !t || t.destroyed ? null : u("div", { class: V.contentElement, key: this._buildKey("fields-element", e) }, t.render());
  }
  _renderMedia(e) {
    const t = this._contentWidgets[e];
    return !t || t.destroyed ? null : u("div", { class: V.contentElement, key: this._buildKey("media-element", e) }, t.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e, messages: t } = this, { lastEditInfo: i } = this.viewModel;
    if (!i || !e.lastEditedInfo) return null;
    const { date: n, user: s } = i, o = i.type === "edit" ? s ? t.lastEditedByUser : t.lastEdited : s ? t.lastCreatedByUser : t.lastCreated, l = ae(o, { date: n, user: s });
    return u("div", { class: this.classes(V.lastEditedInfo, V.contentElement), key: "edit-info-element" }, l);
  }
  _renderText(e, t) {
    const i = e.text, n = this._contentWidgets[t];
    return !n || n.destroyed ? null : i ? u("div", { class: this.classes(V.contentElement, V.text), key: this._buildKey("text-element", t) }, n.render()) : null;
  }
  _buildKey(e, ...t) {
    return `${e}__${this.viewModel?.graphic?.uid || "0"}-${t.join("-")}`;
  }
  _destroyContentWidget(e) {
    e && (e.viewModel = null, !e.destroyed && e.destroy());
  }
  _destroyContentWidgets() {
    this._contentWidgets.forEach((e) => this._destroyContentWidget(e)), this._contentWidgets = [];
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e, visibleElements: t, flowItems: i, viewModel: n } = this, s = n?.content, { contentViewModels: o } = n;
    if (Array.isArray(s)) s.forEach((l, d) => {
      if (l.type === "attachments" && (this._contentWidgets[d] = new To({ displayType: l.displayType, headingLevel: t.title && e < 6 ? e + 1 : e, viewModel: o[d] })), l.type === "fields" && (this._contentWidgets[d] = new jn({ viewModel: o[d] })), l.type === "media" && (this._contentWidgets[d] = new Wn({ viewModel: o[d] })), l.type === "text" && (this._contentWidgets[d] = new bt({ viewModel: o[d] })), l.type === "custom" && (this._contentWidgets[d] = new bt({ viewModel: o[d] })), l.type === "expression" && (this._contentWidgets[d] = new Ir({ viewModel: o[d] })), l.type === "relationship") {
        const c = new Mr({ flowItems: i, featureVisibleElements: t, viewModel: o[d] });
        this._contentWidgets[d] = c;
      }
      if (l.type === "utility-network-associations") {
        const c = new xr({ flowItems: i, parentFeatureViewModel: n, featureVisibleElements: t, viewModel: o[d] });
        this._contentWidgets[d] = c;
      }
    }, this);
    else {
      const l = o[0];
      l && !l.destroyed && (this._contentWidgets[0] = new bt({ viewModel: l }));
    }
    this.scheduleRender();
  }
};
r([a()], D.prototype, "flowType", void 0), r([a()], D.prototype, "graphic", null), r([a()], D.prototype, "defaultPopupTemplateEnabled", null), r([a()], D.prototype, "flowItems", void 0), r([a()], D.prototype, "headingLevel", void 0), r([a({ readOnly: !0 })], D.prototype, "isTable", null), r([a()], D.prototype, "icon", null), r([a()], D.prototype, "label", null), r([a()], D.prototype, "location", null), r([a(), Q("esri/widgets/Feature/t9n/Feature")], D.prototype, "messages", void 0), r([a(), Q("esri/t9n/common")], D.prototype, "messagesCommon", void 0), r([a()], D.prototype, "spatialReference", null), r([a()], D.prototype, "timeZone", null), r([a({ readOnly: !0 })], D.prototype, "title", null), r([a()], D.prototype, "visibleElements", void 0), r([Ke("visibleElements")], D.prototype, "castVisibleElements", null), r([a()], D.prototype, "map", null), r([a()], D.prototype, "view", null), r([a({ type: bi })], D.prototype, "viewModel", void 0), D = r([T("esri.widgets.Feature")], D);
const Zn = D, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" }));
let Te = class extends Cs.EventedAccessor {
  constructor(t) {
    super(t), this.location = null, this.screenLocationEnabled = !1, this.view = null, this.addHandles([at(() => {
      const i = this.screenLocationEnabled ? this.view : null;
      return i ? [i.size, i.type === "3d" ? i.camera : i.viewpoint] : null;
    }, () => this.notifyChange("screenLocation")), v(() => this.screenLocation, (i, n) => {
      i != null && n != null && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null;
  }
  get screenLocation() {
    const { location: t, view: i, screenLocationEnabled: n } = this, s = i?.spatialReference, o = s ? $s(t, s).geometry : null;
    return n && o && i?.ready ? i.toScreen(o) : null;
  }
};
r([a()], Te.prototype, "location", void 0), r([a()], Te.prototype, "screenLocation", null), r([a()], Te.prototype, "screenLocationEnabled", void 0), r([a()], Te.prototype, "view", void 0), Te = r([T("esri.widgets.support.AnchorElementViewModel")], Te);
const Qn = Te;
let Ct = class extends Qn {
  constructor(t) {
    super(t), this.visible = !1;
  }
};
r([a()], Ct.prototype, "visible", void 0), Ct = r([T("esri.widgets.Spinner.SpinnerViewModel")], Ct);
const Jn = Ct, Qt = "esri-spinner", Jt = { base: Qt, spinnerStart: `${Qt}--start`, spinnerFinish: `${Qt}--finish` };
let Le = class extends ee {
  constructor(t, i) {
    super(t, i), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new Jn();
  }
  initialize() {
    this.addHandles(v(() => this.visible, (t) => this._visibleChange(t)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(t) {
    this.viewModel.location = t;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t) {
    this.viewModel.view = t;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(t) {
    this.viewModel.visible = t;
  }
  show(t) {
    const { location: i, promise: n } = t ?? {};
    i && (this.viewModel.location = i), this.visible = !0;
    const s = () => this.hide();
    n && n.catch(() => {
    }).then(s);
  }
  hide() {
    this.visible = !1;
  }
  render() {
    const { visible: t } = this, { screenLocation: i } = this.viewModel, n = !!i, s = t && n, o = !t && n, l = { [Jt.spinnerStart]: s, [Jt.spinnerFinish]: o }, d = this._getPositionStyles();
    return u("div", { class: this.classes(Jt.base, l), styles: d });
  }
  _visibleChange(t) {
    if (t) return void (this.viewModel.screenLocationEnabled = !0);
    const i = Pt(this._animationDelay);
    this._animationPromise = i, i.catch(() => {
    }).then(() => {
      this._animationPromise === i && (this.viewModel.screenLocationEnabled = !1, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const { screenLocation: t, view: i } = this.viewModel;
    if (i == null || t == null) return {};
    const { padding: n } = i;
    return { left: t.x - n.left + "px", top: t.y - n.top + "px" };
  }
};
r([a()], Le.prototype, "location", null), r([a()], Le.prototype, "view", null), r([a({ type: Jn })], Le.prototype, "viewModel", void 0), r([a()], Le.prototype, "visible", null), Le = r([T("esri.widgets.Spinner")], Le);
const Nr = Le, J = "esri-features", z = { icon: `${J}__icon`, actionImage: `${J}__action-image`, base: J, container: `${J}__container`, contentContainer: `${J}__content-container`, contentFeature: `${J}__content-feature`, flowItemCollapsed: `${J}__flow-item--collapsed`, header: `${J}__header`, footer: `${J}__footer`, featureMenuObserver: `${J}__feature-menu-observer`, actionExit: `${J}__action--exit`, loader: `${J}__loader`, featuresHeading: `${J}__heading`, paginationActionBar: `${J}__pagination-action-bar`, paginationPrevious: `${J}__pagination-previous`, paginationNext: `${J}__pagination-next` }, Re = re.ofType({ key: "type", defaultKeyValue: "button", base: Es, typeMap: { button: ut, toggle: Mn } }), Ee = new ut({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: we.zoomInMagnifyingGlass }), sn = new ut({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: we.trash }), Je = new ut({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: we.zoomInMagnifyingGlass }), $e = new Mn({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: we.table, value: !1 }), Ae = Ee.clone();
let Ne = class extends ee {
  constructor(t, i) {
    super(t, i), this.messages = null, this.closed = !1, this.closable = !0, this._handleOpenFeature = (n) => {
      this.emit("open-feature", { feature: n });
    }, this._handleZoomToFeature = (n) => {
      this.emit("zoom-to-feature", { featureWidget: n });
    };
  }
  loadDependencies() {
    return Ie({ action: () => import("./calcite-action-DctYC7Rh.js"), "action-bar": () => import("./calcite-action-bar-BgF0qlv7.js"), "action-group": () => import("./calcite-action-group-DhTIvmV9.js"), "flow-item": () => import("./calcite-flow-item-BYxZFtTs.js") });
  }
  render() {
    const { flowItems: t } = this, i = t?.toArray();
    return u(bn, null, i?.map((n) => this._renderFlowItem(n)));
  }
  _handleCloseClick() {
    this.emit("close");
  }
  _handleExitClick() {
    this.emit("exit");
  }
  _handleDrillInBackClick() {
    const t = this.flowItems?.pop();
    t && ("showAllEnabled" in t.viewModel && (t.viewModel.showAllEnabled = !1), t && (t.viewModel = null, t.destroy()));
  }
  _getExitMessage(t) {
    switch (t.flowType) {
      case "feature":
      case "feature-association":
        return "";
      case "feature-relationship":
        return this.messages.exitRelatedRecords;
      case "feature-utility-network-associations":
      case "feature-utility-network-association-type":
        return this.messages.exitAssociations;
    }
  }
  _renderFlowItem(t) {
    const { messages: i, closable: n, closed: s } = this, o = "graphic" in t && !t.isTable, l = t.flowType === "feature-association", d = this._getExitMessage(t), c = i.selectFeature;
    return u("calcite-flow-item", { bind: this, closable: n, closed: s, description: this._getDrillInFlowItemDescription(t), heading: t.title ?? "", key: `flow-item-${t.viewModel.uid}`, onCalciteFlowItemBack: (h) => {
      h.preventDefault(), this._handleDrillInBackClick();
    }, onCalciteFlowItemClose: this._handleCloseClick }, u("calcite-action", { appearance: "transparent", bind: this, class: z.actionExit, icon: "move-up", key: "exit-action", onclick: this._handleExitClick, slot: "header-actions-start", text: d, title: d }), o ? u("calcite-action", { appearance: "transparent", bind: this, icon: "zoom-to-object", key: "open-feature-action", onclick: () => this._handleOpenFeature(t), slot: "header-actions-end", text: c, title: c }) : null, l ? u("calcite-action-bar", { expandDisabled: !0, expanded: !0, key: "header-action-bar", scale: "s", slot: "action-bar" }, u("calcite-action-group", { overlayPositioning: "fixed", scale: "s" }, this._renderDefaultActions(t))) : null, u("div", { class: z.container }, t.render()));
  }
  _renderDefaultActions(t) {
    const i = this._getActionTitle(Ae);
    return u("calcite-action", { active: Ae.active, appearance: "solid", bind: this, "data-action-uid": Ae.uid, disabled: Ae.disabled, icon: Ae.icon ?? "question", indicator: Ae.indicator, key: `action-${Ae.uid}`, loading: Ae.active, onclick: () => this._handleZoomToFeature(t), scale: "s", text: i, textEnabled: !0, title: i });
  }
  _getActionTitle(t) {
    const { messages: i } = this, { id: n } = t, s = t.title ?? "";
    return n === "zoom-to-feature" ? ae(s, { messages: i }) : s;
  }
  _getDrillInFlowItemDescription(t) {
    switch (t.flowType) {
      case "feature":
      case "feature-association":
      case "feature-utility-network-associations":
        return t.viewModel.description ?? "";
      case "feature-relationship":
        return t.featureCountDescription;
      case "feature-utility-network-association-type":
        return t.description ?? "";
    }
  }
};
r([a()], Ne.prototype, "flowItems", void 0), r([a(), Q("esri/widgets/Features/t9n/Features")], Ne.prototype, "messages", void 0), r([a()], Ne.prototype, "closed", void 0), r([a()], Ne.prototype, "closable", void 0), Ne = r([T("esri.widgets.Features.FeaturesDrillIn")], Ne);
const Pr = Ne, Sr = "OBJECTID";
var Be;
(function(e) {
  e[e.size = 22] = "size", e[e.lineWidth = 50] = "lineWidth", e[e.maxSize = 120] = "maxSize", e[e.maxOutlineSize = 80] = "maxOutlineSize", e[e.tallSymbolWidth = 20] = "tallSymbolWidth";
})(Be || (Be = {}));
const on = ai("android");
ai("chrome") || on && on >= 4;
xs();
Be.size;
Be.maxSize;
Be.maxOutlineSize;
Be.lineWidth;
Be.tallSymbolWidth;
function Xn(e) {
  return e && "opacity" in e ? e.opacity * Xn(e.parent) : 1;
}
async function rn(e, t) {
  if (!e) return;
  const i = e.sourceLayer, n = (t != null && t.useSourceLayer ? i : e.layer) ?? i, s = Xn(n);
  if (e.symbol != null && (t == null || t.ignoreGraphicSymbol !== !0)) {
    const I = e.symbol.type === "web-style" ? await ks(e.symbol, { ...t, cache: t != null ? t.webStyleCache : null }) : e.symbol.clone();
    return Dt(I, null, s), I;
  }
  const o = t?.renderer ?? Or(n);
  let l = o && "getSymbolAsync" in o ? await o.getSymbolAsync(e, t) : null;
  if (!l) return;
  if (l = l.type === "web-style" ? await l.fetchSymbol({ ...t, cache: t != null ? t.webStyleCache : null }) : l.clone(), !o || !("visualVariables" in o) || !o.visualVariables?.length) return Dt(l, null, s), l;
  if ("arcadeRequiredForVisualVariables" in o && o.arcadeRequiredForVisualVariables && t?.arcade == null) {
    const I = { ...t };
    I.arcade = await hn(), t = I;
  }
  const { getColor: d, getOpacity: c, getAllSizes: h, getRotationAngle: p } = await import("./main-DZxT3i7S.js").then((I) => I.vg), m = [], f = [], g = [], y = [];
  for (const I of o.visualVariables) switch (I.type) {
    case "color":
      m.push(I);
      break;
    case "opacity":
      f.push(I);
      break;
    case "rotation":
      y.push(I);
      break;
    case "size":
      I.target || g.push(I);
  }
  const _ = !!m.length && m[m.length - 1], b = _ ? d(_, e, t) : null, M = !!f.length && f[f.length - 1];
  let w = M ? c(M, e, t) : null;
  if (s != null && (w = w != null ? w * s : s), Dt(l, b, w), g.length) {
    const I = h(g, e, t);
    await Ts(l, I);
  }
  for (const I of y) Ls(l, p(I, e, t), I.axis);
  return l;
}
function Or(e) {
  if (e) return "renderer" in e ? e.renderer : void 0;
}
const Rr = "esri.widgets.Popup.PopupViewModel", Lt = () => G.getLogger(Rr), Vr = (e) => {
  const { event: t, view: i, viewModel: n } = e, { action: s } = t;
  if (!s) return Promise.reject(new L("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: o, id: l } = s;
  if (!l) return Promise.reject(new L("trigger-action:invalid-action", "action.id is missing"));
  if (o) return Promise.reject(new L("trigger-action:invalid-action", "Action is disabled"));
  if (l === Ee.id) return Kn(n).catch(Ns);
  if (l === Je.id) return Br(n);
  if (l === $e.id) return n.browseClusterEnabled = !n.browseClusterEnabled, n.featureMenuOpen = n.browseClusterEnabled, Promise.resolve();
  if (l === sn.id) {
    n.visible = !1;
    const { selectedFeature: d } = n;
    if (!d) return Promise.reject(new L(`trigger-action:${sn.id}`, "selectedFeature is required", { selectedFeature: d }));
    const { sourceLayer: c } = d;
    return c ? c.remove(d) : i?.graphics.remove(d), Promise.resolve();
  }
  return Promise.resolve();
};
function Yn(e) {
  const { selectedFeature: t, location: i, view: n } = e;
  return n ? t ?? i ?? null : null;
}
function Pe(e) {
  return !!e && e.isAggregate && e.sourceLayer?.featureReduction?.type === "cluster";
}
async function Dr(e, t) {
  if (t?.type !== "3d" || !e || e.declaredClass !== "esri.Graphic") return !0;
  const i = t.getViewForGraphic(e);
  if (i && "whenGraphicBounds" in i) {
    let n = null;
    try {
      n = await i.whenGraphicBounds(e, { useViewElevation: !0 });
    } catch {
    }
    return !n || !n.boundingBox || n.boundingBox[0] === n.boundingBox[3] && n.boundingBox[1] === n.boundingBox[4] && n.boundingBox[2] === n.boundingBox[5];
  }
  return !0;
}
async function Kn(e, t) {
  const { location: i, selectedFeature: n, view: s, zoomFactor: o } = e;
  await t?.viewModel?.updateGeometry();
  const l = t?.graphic, d = l?.geometry ? l : Yn(e);
  if (!s || !d) {
    const m = new L("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: d, view: s });
    throw Lt().error(m), m;
  }
  const c = s.scale / o, h = l?.geometry ?? e.selectedFeature?.geometry ?? i, p = h != null && h.type === "point" && await Dr(l ?? n, s);
  Ee.active = !0, Ee.disabled = !0;
  try {
    await e.zoomTo({ target: { target: d, scale: p ? c : void 0 } });
  } catch (m) {
    if (xt(m)) return;
    const f = new L("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: l ?? n });
    Lt().error(f);
  } finally {
    Ee.active = !1, Ee.disabled = !1, e.zoomToLocation = null, p && (e.location = h);
  }
}
async function Br(e) {
  const { selectedFeature: t, view: i } = e;
  if (i?.type !== "2d") {
    const l = new L("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: i });
    throw Lt().error(l), l;
  }
  if (!t || !Pe(t)) {
    const l = new L("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: t });
    throw Lt().error(l), l;
  }
  const [n, s] = await Ii(i, t);
  Je.active = !0, Je.disabled = !0;
  const { extent: o } = await n.queryExtent(s);
  o && await e.zoomTo({ target: o }), Je.active = !1, Je.disabled = !1;
}
async function qr(e) {
  const { view: t, selectedFeature: i } = e;
  if (!t || !i) return;
  const [n, s] = await Ii(t, i), { extent: o } = await n.queryExtent(s);
  e.selectedClusterBoundaryFeature.geometry = o, t.graphics.add(e.selectedClusterBoundaryFeature);
}
async function jr(e) {
  const { selectedFeature: t, view: i } = e;
  if (!i || !t) return;
  const [n, s] = await Ii(i, t);
  $e.active = !0, $e.disabled = !0;
  const { features: o } = await n.queryFeatures(s);
  $e.active = !1, $e.disabled = !1, $e.value = !0, e?.open({ features: [t].concat(o), featureMenuOpen: !0 });
}
async function Ii(e, t) {
  const i = await e.whenLayerView(t.sourceLayer), n = i.createQuery(), s = t.getObjectId();
  return n.aggregateIds = s != null ? [s] : [], [i, n];
}
function Wr(e) {
  $e.value = !1;
  const t = e.features.filter((i) => Pe(i));
  t.length && (e.features = t);
}
const Xt = "location-scale-handle", zr = () => [Ee.clone()], Hr = () => [Je.clone(), $e.clone()];
let _t = null;
function Ur(e, t) {
  return e === "building-scene" || t === "2d" && (e === "map-image" || e === "tile" || e === "imagery" || e === "imagery-tile");
}
let A = class extends Ps(Qn) {
  constructor(e) {
    super(e), this._pendingPromises = new js(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this.actions = new Re(), this.activeFeature = null, this.autoCloseEnabled = !1, this.browseClusterEnabled = !1, this.content = null, this.defaultPopupTemplateEnabled = !1, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = !1, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = !0, this.includeDefaultActions = !0, this.selectedClusterBoundaryFeature = new qe({ symbol: new Ss({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = !1, this.view = null, this.visible = !1, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = Xe(async (t) => {
      const { spatialReference: i } = this, n = this.selectedFeature?.geometry?.type, s = this.location ?? t;
      if (n && n !== "mesh" && i && s && this.selectedFeature) if (n !== "point") try {
        const o = this.selectedFeature;
        let l = o.geometry;
        const d = this._getHighlightLayer(o), c = o.getObjectId();
        if (!d || !this.view) return;
        if (c) {
          const h = this.view?.allLayerViews.find((f) => f.layer.uid === d.uid);
          if (!h || !("queryFeatures" in h)) return;
          const p = h.createQuery();
          p.outSpatialReference = i, p.objectIds = [c], p.returnGeometry = !0;
          const { features: m } = await h.queryFeatures(p);
          l = m[0]?.geometry;
        }
        if (!l || l.type === "mesh") return;
        if (l = Os(l, i), _t || (_t = await import("./geometryEngineAsync-DyUykqWV.js")), !await _t.intersects(l, s)) {
          const h = (await _t.nearestCoordinate(l, s)).coordinate ?? s;
          this.selectedFeature === o && (this.location = h);
        }
      } catch (o) {
        xt(o) || G.getLogger(this).error(o);
      }
      else this.location = Kt(this.selectedFeature.geometry) ?? s;
    });
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), v(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), v(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), v(() => this.view?.animation?.state, (e) => this._animationStateChange(e)), v(() => this.location, (e) => this._locationChange(e)), v(() => this.selectedFeature, (e) => this._selectedFeatureChange(e)), v(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), v(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), v(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e) => Vr({ event: e, viewModel: this, view: this.view })), at(() => !this.waitingForResult, () => this._waitingForResultChange(), Rs), v(() => [this.features, this.map, this.spatialReference, this.timeZone], () => this._updateFeatureVMs()), v(() => this.view?.scale, () => this._viewScaleChange()), at(() => !this.visible, () => this.browseClusterEnabled = !1), v(() => this.browseClusterEnabled, (e) => e ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = !1, this.view = null, this.map = null, this.spatialReference = null, this.timeZone = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e = this._get("allActions") || new Re();
    e.removeAll();
    const { actions: t, defaultActions: i, defaultPopupTemplateEnabled: n, includeDefaultActions: s, selectedFeature: o } = this, l = s ? i.concat(t) : t, d = o && (typeof o.getEffectivePopupTemplate == "function" && o.getEffectivePopupTemplate(n) || o.popupTemplate), c = d?.actions;
    return (d?.overwriteActions ? c : c?.concat(l) ?? l)?.filter(Boolean).forEach((p) => e.add(p)), e;
  }
  get defaultActions() {
    const e = this._get("defaultActions") || new Re();
    return e.removeAll(), e.addMany(Pe(this.selectedFeature) ? Hr() : zr()), e;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(e) {
    const t = e || [];
    this._set("features", t);
    const { pendingPromisesCount: i, promiseCount: n, selectedFeatureIndex: s } = this, o = n && t.length;
    o && i && s === -1 ? this.selectedFeatureIndex = 0 : o && s !== -1 || (this.selectedFeatureIndex = t.length ? 0 : -1);
  }
  set location(e) {
    let t = e;
    const i = this.spatialReference?.isWebMercator;
    e?.spatialReference?.isWGS84 && i && (t = Vs(e)), this._set("location", t);
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e) {
    this._override("map", e);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(e) {
    this._pendingPromises.clear(), this.features = [], Array.isArray(e) && e.length ? (this._set("promises", e), (e = e.slice()).forEach((t) => this._pendingPromises.add(t)), e.reduce((t, i) => t.finally(() => i.then((n) => {
      this._pendingPromises.has(i) && this._updateFeatures(n);
    }).finally(() => this._pendingPromises.delete(i)).catch(() => {
    })), Promise.resolve())) : this._set("promises", []);
  }
  get selectedFeature() {
    const { features: e, selectedFeatureIndex: t } = this;
    return t === -1 ? null : e[t] || null;
  }
  get selectedFeatureIndex() {
    const e = this._get("selectedFeatureIndex");
    return typeof e == "number" ? e : -1;
  }
  set selectedFeatureIndex(e) {
    const { featureCount: t } = this;
    e = isNaN(e) || e < -1 || !t ? -1 : (e + t) % t, this.activeFeature = null, this._set("selectedFeatureIndex", e);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e) {
    this._override("spatialReference", e);
  }
  get state() {
    const { view: e, map: t } = this;
    return e ? e.ready ? "ready" : "disabled" : t ? "ready" : "disabled";
  }
  get timeZone() {
    return this.view?.timeZone ?? In;
  }
  set timeZone(e) {
    this._overrideIfSome("timeZone", e);
  }
  get waitingForContents() {
    return this.featureViewModels.some((e) => e.waitingForContent);
  }
  get waitingForResult() {
    return !(!(this._fetchFeaturesController || this.pendingPromisesCount > 0) || this.featureCount !== 0);
  }
  centerAtLocation() {
    const { view: e } = this, t = Yn(this);
    return t && e ? this.callGoTo({ target: { target: t, scale: e.scale } }) : Promise.reject(new L("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: t, view: e }));
  }
  zoomTo(e) {
    return this.callGoTo(e);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(e, t) {
    const { view: i } = this;
    if (!i || !e) throw new L("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: e, view: i });
    return i.fetchPopupFeatures(e, { pointerType: t?.event?.pointerType, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: t?.signal });
  }
  open(e) {
    const t = { updateLocationEnabled: !1, promises: [], fetchFeatures: !1, ...e, visible: !0 }, { fetchFeatures: i } = t;
    delete t.fetchFeatures, i && this._setFetchFeaturesPromises(t.location);
    const n = ["actionsMenuOpen", "collapsed"];
    for (const s of n) delete t[s];
    this.set(t);
  }
  triggerAction(e) {
    const t = this.allActions.at(e);
    t && !t.disabled && this.emit("trigger-action", { action: t });
  }
  next() {
    return this.selectedFeatureIndex++, this;
  }
  previous() {
    return this.selectedFeatureIndex--, this;
  }
  disableClusterBrowsing() {
    Wr(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: e, selectedFeature: t } = this;
    e?.type === "2d" ? Pe(t) ? (await qr(this), await jr(this)) : G.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t) : G.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t);
  }
  handleViewClick(e) {
    this._fetchFeaturesAndOpen(e);
  }
  _animationStateChange(e) {
    this.zoomToLocation || (Ee.disabled = e === "waiting-for-target");
  }
  _clearBrowsedClusterGraphics() {
    const e = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(Nt);
    this.view?.graphics?.removeMany(e), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (Pe(this.selectedFeature)) return this.browseClusterEnabled = !1, this.visible = !1, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e) {
    const { selectedFeature: t, updateLocationEnabled: i, view: n } = this;
    n && i && e && (!t || t.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: e, featureCount: t, featurePage: i, featuresPerPage: n, featureViewModels: s } = this;
    if (i === null) return;
    const o = ((i - 1) * n + t) % t, l = o + n;
    s.slice(o, l).forEach((d, c) => {
      d && (d.graphic ??= e[o + c]);
    });
  }
  async _selectedFeatureChange(e) {
    const { location: t, updateLocationEnabled: i, view: n } = this;
    if (!e || !n) return;
    if (this.browseClusterEnabled)
      return this._selectedClusterFeature && (n.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), Pe(e) ? void 0 : (e.symbol = await rn(e), this._selectedClusterFeature = e, void n.graphics.add(this._selectedClusterFeature));
    const s = e.sourceLayer?.type;
    if (s !== "map-image" && s !== "imagery" && s !== "imagery-tile" || (e.symbol = await rn(e)), !i && t || !e.geometry) {
      if (i && !e.geometry) {
        await this.centerAtLocation();
        const o = n.center?.clone();
        o && (this.location = o);
      }
    } else this.location = Kt(e.geometry);
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = !1);
  }
  async _setFetchFeaturesPromises(e) {
    const { pendingFeatures: t } = await this._fetchFeaturesWithController({ mapPoint: e });
    this.promises = t;
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e) => e && !e.destroyed && e.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: e, features: t, featureViewModels: i, view: n, spatialReference: s, map: o, timeZone: l, location: d } = this;
    if (Pe(e) || (this.browseClusterEnabled = !1), this._destroyFeatureVMs(), !t?.length) return;
    const c = i.slice(), h = [];
    t.forEach((p, m) => {
      if (!p) return;
      let f = null;
      if (c.some((g, y) => (g && g.graphic === p && (f = g, c.splice(y, 1)), !!f)), f) h[m] = f;
      else {
        const g = new bi({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: s, graphic: p === e ? p : null, location: d, map: o, view: n, timeZone: l });
        h[m] = g;
      }
    }), c.forEach((p) => p && !p.destroyed && p.destroy()), this._set("featureViewModels", h);
  }
  async _getScreenPoint(e, t) {
    const { spatialReference: i, view: n } = this;
    if (!n) return null;
    await n?.when();
    const s = e?.spatialReference;
    return s && i ? (await Ds(s, i, null, t), n.toScreen(e)) : null;
  }
  _cancelFetchingFeatures() {
    const e = this._fetchFeaturesController;
    e && e.abort(), this._fetchFeaturesController = null;
  }
  async _projectScreenPointAndFetchFeatures({ mapPoint: e, screenPoint: t, event: i, signal: n }) {
    return this.fetchFeatures(t ?? await this._getScreenPoint(e ?? this.location, { signal: n }), { signal: n, event: i });
  }
  _fetchFeaturesWithController({ mapPoint: e, screenPoint: t, event: i }) {
    this._cancelFetchingFeatures();
    const n = new AbortController(), { signal: s } = n;
    this._fetchFeaturesController = n;
    const o = this._projectScreenPointAndFetchFeatures({ mapPoint: e, screenPoint: t, signal: s, event: i });
    return o.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null;
    }), o;
  }
  async _fetchFeaturesAndOpen(e) {
    const { mapPoint: t, screenPoint: i } = e, { view: n } = this;
    this.removeHandles(Xt), this.addHandles([v(() => this.view?.scale, () => this._debouncedLocationUpdate(t).catch((o) => {
      xt(o) || G.getLogger(this).error(o);
    })), at(() => !this.visible, () => {
      this.removeHandles(Xt);
    }, { once: !0 })], Xt);
    const { pendingFeatures: s } = await this._fetchFeaturesWithController({ mapPoint: t, screenPoint: i, event: e });
    n?.popup && "open" in n.popup && n.popup.open({ location: t ?? void 0, promises: s });
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = !1);
  }
  async _getLayerView(e, t) {
    return await e.when(), e.whenLayerView(t);
  }
  _getHighlightLayer(e) {
    const { layer: t, sourceLayer: i } = e;
    return i && "layer" in i && i.layer ? i.layer : i?.type === "map-notes" || i?.type === "subtype-group" ? i : t;
  }
  _getHighlightTarget(e, t, i) {
    if (Ur(t.type, i)) return e;
    const n = e.getObjectId();
    if (n != null) return n;
    const s = t.type === "imagery" ? void 0 : "objectIdField" in t ? t.objectIdField || Sr : null, o = e.attributes;
    return o && s && o[s] || e;
  }
  _mapIncludesLayer(e) {
    return !!this.map?.allLayers?.includes(e);
  }
  async _highlightActiveFeature() {
    const e = "highlight-active-feature";
    this.removeHandles(e);
    const { highlightEnabled: t, view: i, activeFeature: n, visible: s } = this;
    if (!(n && i && t && s)) return;
    const o = this._getHighlightLayer(n);
    if (!(o && o instanceof Li && this._mapIncludesLayer(o))) return;
    const l = this._getLayerView(i, o);
    this._highlightActiveFeaturePromise = l;
    const d = await l;
    if (!(d && Ni(d) && this._highlightActiveFeaturePromise === l && this.activeFeature && this.highlightEnabled)) return;
    const c = d.highlight(this._getHighlightTarget(n, o, i.type));
    this.addHandles(c, e);
  }
  async _highlightSelectedFeature() {
    const e = "highlight-selected-feature";
    this.removeHandles(e);
    const { selectedFeature: t, highlightEnabled: i, view: n, visible: s } = this;
    if (!(t && n && i && s)) return;
    const o = this._getHighlightLayer(t);
    if (!(o && o instanceof Li && this._mapIncludesLayer(o))) return;
    const l = this._getLayerView(n, o);
    this._highlightSelectedFeaturePromise = l;
    const d = await l;
    if (!(d && Ni(d) && this._highlightSelectedFeaturePromise === l && this.selectedFeature && this.highlightEnabled && this.visible)) return;
    const c = d.highlight(this._getHighlightTarget(t, o, n.type));
    this.addHandles(c, e);
  }
  _updateFeatures(e) {
    const { features: t } = this, i = e.filter((n) => !t.includes(n));
    i?.length && (this.features = t.concat(i));
  }
};
r([a()], A.prototype, "_fetchFeaturesController", void 0), r([a({ type: Re })], A.prototype, "actions", void 0), r([a({ readOnly: !0 })], A.prototype, "active", null), r([a()], A.prototype, "activeFeature", void 0), r([a({ readOnly: !0 })], A.prototype, "allActions", null), r([a()], A.prototype, "autoCloseEnabled", void 0), r([a()], A.prototype, "browseClusterEnabled", void 0), r([a()], A.prototype, "content", void 0), r([a({ type: Re, readOnly: !0 })], A.prototype, "defaultActions", null), r([a({ type: Boolean })], A.prototype, "defaultPopupTemplateEnabled", void 0), r([a({ readOnly: !0 })], A.prototype, "featureCount", null), r([a()], A.prototype, "featurePage", void 0), r([a({ value: [] })], A.prototype, "features", null), r([a()], A.prototype, "featuresPerPage", void 0), r([a()], A.prototype, "featureMenuOpen", void 0), r([a()], A.prototype, "featureViewModelAbilities", void 0), r([a({ readOnly: !0 })], A.prototype, "featureViewModels", void 0), r([a()], A.prototype, "highlightEnabled", void 0), r([a()], A.prototype, "includeDefaultActions", void 0), r([a({ type: di })], A.prototype, "location", null), r([a()], A.prototype, "map", null), r([a({ readOnly: !0 })], A.prototype, "pendingPromisesCount", null), r([a({ readOnly: !0 })], A.prototype, "promiseCount", null), r([a()], A.prototype, "promises", null), r([a({ readOnly: !0 })], A.prototype, "selectedClusterBoundaryFeature", void 0), r([a({ value: null, readOnly: !0 })], A.prototype, "selectedFeature", null), r([a({ value: -1 })], A.prototype, "selectedFeatureIndex", null), r([a({ readOnly: !0 })], A.prototype, "selectedFeatureViewModel", null), r([a({ readOnly: !0 })], A.prototype, "state", null), r([a()], A.prototype, "timeZone", null), r([a()], A.prototype, "title", void 0), r([a()], A.prototype, "updateLocationEnabled", void 0), r([a()], A.prototype, "view", void 0), r([a()], A.prototype, "visible", void 0), r([a({ readOnly: !0 })], A.prototype, "waitingForContents", null), r([a({ readOnly: !0 })], A.prototype, "waitingForResult", null), r([a()], A.prototype, "zoomFactor", void 0), r([a()], A.prototype, "zoomToLocation", void 0), r([a()], A.prototype, "centerAtLocation", null), A = r([T("esri.widgets.Features.FeaturesViewModel")], A);
const Fi = A;
let he = class extends pe {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !1, this.featureNavigation = !0, this.featureListLayerTitle = !0, this.flow = !0, this.heading = !0, this.spinner = !0;
  }
};
r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "actionBar", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "closeButton", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "collapseButton", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "featureNavigation", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "featureListLayerTitle", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "flow", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "heading", void 0), r([a({ type: Boolean, nonNullable: !0 })], he.prototype, "spinner", void 0), he = r([T("esri.widgets.Features.FeaturesVisibleElements")], he);
const es = he, an = "selected-index", Zr = 0, ln = "features-spinner";
function dn(e) {
  return e?.declaredClass.startsWith("esri.layers.") ?? !1;
}
let E = class extends Un(ee) {
  constructor(e, t) {
    super(e, t), this._featureMenuIntersectionObserverCallback = ([i]) => {
      i?.isIntersecting && this.viewModel.featurePage != null && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._featureMenuIntersectionObserverNode = null, this._spinner = null, this._feature = null, this._focusAbortController = null, this._drillInFlowItems = new re(), this._drillInWidget = new Pr({ flowItems: this._drillInFlowItems }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this._actionBarMenuNode = null, this.collapsed = !1, this.featureNavigationTop = !1, this.headerActions = new Re(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = !1, this.viewModel = new Fi(), this.visibleElements = new es(), this._renderAction = (i, n) => {
      const s = this._getActionTitle(i), { type: o, active: l, uid: d, disabled: c, indicator: h } = i;
      return i.visible ? u("calcite-action", { active: o === "toggle" && i.value, appearance: "solid", bind: this, "data-action-uid": d, disabled: c, icon: this._getActionIcon(i), indicator: h, key: `action-${n}`, loading: l, onclick: this._triggerAction, scale: "s", text: s, title: this._hideActionText ? s : void 0 }, this._getFallbackIcon(i)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = !0, this._focusFlowItemNode("menu-flow-item");
    }, this._previousFeature = () => {
      this.viewModel.selectedFeatureIndex--;
    }, this._nextFeature = () => {
      this.viewModel.selectedFeatureIndex++;
    }, this._handleFeatureMenuBack = () => {
      this.featureMenuOpen && (this._focusFlowItemNode("root-flow-item"), this.featureMenuOpen = !1);
    }, this._displaySpinnerThrottled = hi(() => this._displaySpinner(), Zr), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, v(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), v(() => this.viewModel?.active, (i) => this._drillInWidget.closed = !i), v(() => this.visibleElements?.closeButton, (i) => this._drillInWidget.closable = i), v(() => this.visibleElements?.spinner, (i) => this._spinnerEnabledChange(i)), v(() => this.viewModel?.view, (i, n) => this._viewChange(i, n)), v(() => this.viewModel?.view?.ready, (i, n) => this._viewReadyChange(i ?? !1, n ?? !1)), v(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), v(() => this.viewModel?.screenLocation, () => this._closeOpenActionMenu()), v(() => this.selectedFeatureWidget, () => this._destroyDrillInFlowItemWidgets()), v(() => {
      const i = this.selectedFeatureWidget?.viewModel;
      return [i?.title, i?.state];
    }, () => this._setTitleFromFeatureWidget()), v(() => {
      const i = this.selectedFeatureWidget?.viewModel;
      return [i?.content, i?.state];
    }, () => this._setContentFromFeatureWidget()), v(() => this.viewModel?.featureViewModels, () => this._featureMenuViewportScrollTop()), this._drillInWidget.on("close", () => this.close()), this._drillInWidget.on("exit", () => this._destroyDrillInFlowItemWidgets()), this._drillInWidget.on("open-feature", ({ feature: i }) => this._openRelatedFeature(i)), this._drillInWidget.on("zoom-to-feature", ({ featureWidget: i }) => Kn(this.viewModel, i))]);
  }
  loadDependencies() {
    return Ie({ action: () => import("./calcite-action-DctYC7Rh.js"), "action-bar": () => import("./calcite-action-bar-BgF0qlv7.js"), "action-group": () => import("./calcite-action-group-DhTIvmV9.js"), button: () => import("./calcite-button-SSzGhU31.js"), flow: () => import("./calcite-flow-D3ymkmcQ.js"), "flow-item": () => import("./calcite-flow-item-BYxZFtTs.js"), list: () => import("./calcite-list-PPvzMcEs.js"), "list-item": () => import("./calcite-list-item-BUtf0P5M.js"), "list-item-group": () => import("./calcite-list-item-group-CyK_OWAz.js"), loader: () => import("./calcite-loader-jYuw63YL.js") });
  }
  destroy() {
    this._destroyDrillInFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver?.disconnect(), this._drillInWidget?.destroy(), this._focusAbortController?.abort();
  }
  get _hideActionText() {
    if (!this.responsiveActionsEnabled) return !1;
    const e = this.view?.widthBreakpoint;
    return e === "xsmall" || e === "small" || e === "medium";
  }
  get _featureNavigationVisible() {
    return this.viewModel.active && this.viewModel.featureCount > 1 && this.visibleElements.featureNavigation;
  }
  get _isCollapsed() {
    return this._collapseEnabled && this.collapsed;
  }
  get _collapseEnabled() {
    return this.visibleElements.collapseButton && !!this.title && !!this.content;
  }
  get active() {
    return this.viewModel.active;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e) {
    this.viewModel.content = e;
  }
  get icon() {
    return null;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e) {
    this.viewModel.featureMenuOpen = e;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e) {
    this.viewModel.features = e;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e) {
    this.viewModel.goToOverride = e;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e) {
    this.viewModel.map = e;
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e) {
    this.viewModel.promises = e;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedDrillInFeature() {
    const e = Array.from(this._drillInFlowItems).at(-1);
    if (!e) return null;
    const { flowType: t } = e;
    return t === "feature-association" || t === "feature-relationship" ? e.graphic ?? null : null;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e) {
    this.viewModel.selectedFeatureIndex = e;
  }
  get selectedFeatureWidget() {
    const { _feature: e, headingLevel: t, _drillInFlowItems: i, timeZone: n, spatialReference: s, map: o } = this, { selectedFeatureViewModel: l } = this.viewModel, d = { title: !1 };
    return l ? (e ? (e.viewModel = l, e.visibleElements = d) : this._feature = new Zn({ flowItems: i, headingLevel: t + 1, timeZone: n, spatialReference: s, map: o, viewModel: l, visibleElements: d }), this._feature) : null;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e) {
    this.viewModel.spatialReference = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e) {
    this.viewModel.timeZone = e;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e) {
    this.viewModel.updateLocationEnabled = e;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e) {
    this.viewModel.view = e;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e) {
    this.viewModel.visible = e;
  }
  blur() {
    const { active: e } = this.viewModel;
    e ? this._rootFlowItemNode?.blur() : G.getLogger(this).warn("Features can only be blurred when currently active.");
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.viewModel.visible = !1;
  }
  fetchFeatures(e, t) {
    return this.viewModel.fetchFeatures(e, t);
  }
  focus() {
    const { active: e } = this.viewModel;
    e ? this._focusFlowItemNode(this.featureMenuOpen ? "menu-flow-item" : "root-flow-item") : G.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(e) {
    this.removeHandles(an);
    const t = { collapsed: e?.collapsed ?? !1 };
    this.set(t), this.viewModel.open(e), this.addHandles(at(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), { once: !0 }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(e) {
    return this.viewModel.triggerAction(e);
  }
  render() {
    return u("div", { bind: this, class: this.classes(z.base, C.widget, C.panel), onkeydown: this._onMainKeydown }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? u("div", { class: z.header, key: "header-actions" }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : u("div", { class: z.footer, key: "footer-actions", slot: "footer" }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const { messages: e, viewModel: t } = this, { featureCount: i, selectedFeatureIndex: n, pendingPromisesCount: s } = t;
    return u("calcite-action", { appearance: "solid", bind: this, icon: "list", key: "feature-menu-button", label: e.selectFeature, loading: s > 0, onclick: this._openFeatureMenu, scale: "s", text: ae(e.pageText, { index: Ve(n + 1), total: Ve(i) }), textEnabled: !0, title: e.selectFeature });
  }
  _renderPagination() {
    const { previous: e, next: t } = this.messagesCommon.pagination;
    return u("calcite-action-bar", { class: z.paginationActionBar, expandDisabled: !0, key: "pagination-action-bar", layout: "horizontal", overflowActionsDisabled: !0, scale: "s" }, u("calcite-action-group", { scale: "s" }, u("calcite-action", { appearance: "solid", class: z.paginationPrevious, icon: "chevron-left", iconFlipRtl: !0, label: e, onclick: this._previousFeature, scale: "s", text: e, title: e }), u("calcite-action", { appearance: "solid", icon: "chevron-right", iconFlipRtl: !0, label: t, onclick: this._nextFeature, scale: "s", text: t, title: t })));
  }
  _renderFeatureMenuItem(e) {
    const { selectedFeatureViewModel: t, featureViewModels: i } = this.viewModel, n = e === t, s = i.indexOf(e);
    return u("calcite-list-item", { bind: this, "data-feature-index": s, key: `feature-menu-item-${e.uid}`, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onmouseleave: this._removeActiveFeature, onmouseover: this._setActiveFeature, selected: n, onCalciteListItemSelect: this._selectFeature }, u("span", { innerHTML: e.title || this.messagesCommon.untitled, slot: "content" }));
  }
  _groupResultsByLayer() {
    const { featureViewModels: e } = this.viewModel, t = /* @__PURE__ */ new Map();
    return e.forEach((i) => {
      const n = i?.graphic;
      if (!n) return;
      const { layer: s, sourceLayer: o } = n, l = (dn(s) ? s : null) || (dn(o) ? o : null), d = t.get(l) ?? [];
      t.set(l, [...d, i]);
    }), t;
  }
  _renderFeatureMenu() {
    const { featureViewModels: e } = this.viewModel, t = this._groupResultsByLayer();
    return e.length ? u("calcite-list", { selectionAppearance: "icon", selectionMode: "single" }, Array.from(t.keys(), (i) => {
      const n = t.get(i)?.map((o) => this._renderFeatureMenuItem(o)), s = i ? i.title ?? this.messagesCommon.untitled : null;
      return this.visibleElements.featureListLayerTitle && s !== null ? u("calcite-list-item-group", { heading: s, key: i?.uid || "map-graphics" }, n) : n;
    })) : null;
  }
  _renderHeaderAction(e, t) {
    const i = e.title || "";
    return e.visible ? u("calcite-action", { active: e.type === "toggle" && e.value, appearance: "solid", bind: this, "data-action-uid": e.uid, disabled: e.disabled, icon: e.icon ?? void 0, indicator: e.indicator, key: `header-action-${t}`, loading: e.active, onclick: this._triggerHeaderAction, slot: "header-actions-end", text: i, title: i }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((e, t) => this._renderHeaderAction(e, t)).toArray();
  }
  _renderContentFeature() {
    const { headingLevel: e, visibleElements: t, _isCollapsed: i, _collapseEnabled: n, featureNavigationTop: s } = this, { title: o, active: l } = this.viewModel, d = t.heading && o ? o : "";
    return u("calcite-flow-item", { afterCreate: this._storeRootFlowItemNode, bind: this, class: this.classes({ [z.contentFeature]: !0, [z.flowItemCollapsed]: i }), closable: t.closeButton, closed: !l, collapsed: i, collapseDirection: s ? "down" : "up", collapsible: n, headingLevel: e, key: "root-flow-item", onCalciteFlowItemClose: this.close, onCalciteFlowItemToggle: this._handleCollapseToggle }, d ? u(vi, { class: this.classes(z.featuresHeading, C.heading), innerHTML: d, key: "header-content", level: this.headingLevel, slot: "header-content" }) : null, this._renderHeaderActions(), this._renderActionBar(), i ? null : u("div", { class: this.classes(z.container, z.contentContainer) }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const { viewModel: e, featureMenuOpen: t, messages: i, messagesCommon: n } = this, { active: s, featureViewModels: o, pendingPromisesCount: l } = e;
    return t ? u("calcite-flow-item", { afterCreate: this._storeFeatureMenuFlowItemNode, bind: this, closable: !1, closed: !s, description: ae(i.total, { total: o.length }), heading: i.selectFeature, key: "feature-menu", loading: e.waitingForContents, onCalciteFlowItemBack: (d) => {
      d.preventDefault(), this._handleFeatureMenuBack();
    } }, l > 0 ? u("calcite-loader", { class: z.loader, inline: !0, key: "feature-menu-loader", label: n.loading, slot: "header-actions-end" }) : null, u("div", { class: z.container }, this._renderFeatureMenu()), u("div", { afterCreate: this._featureMenuIntersectionObserverCreated, bind: this, class: z.featureMenuObserver }), u("calcite-button", { appearance: "transparent", onclick: this._handleFeatureMenuBack, slot: "footer-actions", width: "full" }, n.back)) : null;
  }
  _renderContentContainer() {
    const e = [this._renderContentFeature(), this._renderFeatureMenuContainer(), this._drillInWidget.render()];
    return this.visibleElements.flow ? u("calcite-flow", { key: "content-container" }, e) : e;
  }
  _getFallbackIcon(e) {
    const { className: t, icon: i } = e;
    if (i) return null;
    const n = Us({ action: e, feature: this.selectedFeature }), s = { [z.icon]: !!t, [z.actionImage]: !!n };
    return t && (s[t] = !0), n || t ? u("span", { "aria-hidden": "true", class: this.classes(z.icon, s), key: "icon", styles: Hs(n) }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? u("calcite-action-bar", { expandDisabled: !0, expanded: !this._hideActionText, key: "header-action-bar", scale: "s", slot: "action-bar" }, u("calcite-action-group", { afterCreate: (e) => this._actionBarMenuNode = e, overlayPositioning: "fixed", scale: "s" }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const e = this.viewModel?.content;
    return e ? typeof e == "string" ? u("div", { class: V.contentNode, innerHTML: e, key: e }) : this.renderNodeContent(e) : null;
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  async _openRelatedFeature(e) {
    await e.viewModel.updateGeometry();
    const t = e.graphic, i = t?.geometry;
    if (i == null || t == null) return;
    this._destroyDrillInFlowItemWidgets(), await this.viewModel.zoomTo({ target: i });
    const n = Kt(i);
    this.open({ features: [t], location: n ?? void 0 });
  }
  async _focusFlowItemNode(e) {
    this._focusAbortController?.abort(), this._focusAbortController = new AbortController();
    const t = this._focusAbortController.signal;
    await xe(An(t));
    const i = e === "menu-flow-item" ? this._featureMenuViewportNode : this._rootFlowItemNode;
    Bs(i);
  }
  _storeRootFlowItemNode(e) {
    this._rootFlowItemNode = e;
  }
  _storeFeatureMenuFlowItemNode(e) {
    this._featureMenuViewportNode = e;
  }
  _setActiveFeature(e) {
    const { viewModel: t } = this, i = e.currentTarget["data-feature-index"];
    t.activeFeature = t.features?.[i] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _selectFeature(e) {
    const t = e.currentTarget["data-feature-index"];
    isNaN(t) || (this.viewModel.selectedFeatureIndex = t), this._handleFeatureMenuBack();
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(e) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(e), this._featureMenuIntersectionObserverNode = e;
  }
  _getActionIcon(e) {
    return e.icon ? e.icon : e.image || e.className ? void 0 : "question";
  }
  _getActionTitle(e) {
    const { messages: t, selectedFeature: i, messagesCommon: n } = this, { id: s } = e, o = i?.attributes, l = e.title ?? "", d = s === "zoom-to-feature" ? ae(l, { messages: t }) : s === "remove-selected-feature" ? ae(l, { messages: n }) : s === "zoom-to-clustered-features" || s === "browse-clustered-features" ? ae(l, { messages: t }) : e.title;
    return d && o ? ae(d, o) : d ?? "";
  }
  _onMainKeydown(e) {
    const { key: t } = e;
    t === "ArrowLeft" && (e.stopPropagation(), this._handleFeatureMenuBack(), this.previous()), t === "ArrowRight" && (e.stopPropagation(), this._handleFeatureMenuBack(), this.next());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && this._featureMenuViewportNode.scrollContentTo({ top: 0 });
  }
  _setContentFromFeatureWidget() {
    const { selectedFeatureWidget: e } = this;
    e && (this.viewModel.content = e);
  }
  _setTitleFromFeatureWidget() {
    const { selectedFeatureWidget: e, messagesCommon: t } = this, i = e?.viewModel;
    e && (this.viewModel.title = i?.state === "error" ? t?.errorMessage : i?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const e = v(() => this.viewModel?.selectedFeatureIndex, (t, i) => this._selectedFeatureIndexUpdated(t, i));
    this.addHandles(e, an);
  }
  _selectedFeatureIndexUpdated(e, t) {
    const { featureCount: i } = this.viewModel;
    i && e !== t && e !== -1 && (this._destroyDrillInFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _triggerHeaderAction(e) {
    const t = e.currentTarget;
    if (t.disabled) return;
    const i = t.dataset.actionUid, n = this.headerActions.find(({ uid: s }) => s === i);
    n && !n.disabled && (n?.type === "toggle" && (n.value = !n.value), this.emit("trigger-header-action", { action: n }));
  }
  _triggerAction(e) {
    const t = e.currentTarget;
    if (t.disabled) return;
    const i = t.dataset.actionUid, { allActions: n } = this.viewModel, s = n.findIndex((l) => l.uid === i), o = n.at(s);
    o && o.type === "toggle" && (o.value = !o.value), this.viewModel.triggerAction(s);
  }
  _createSpinner(e) {
    e && (this._spinner = new Nr({ view: e }), e.ui.add(this._spinner, { key: ln, position: "manual", internal: !0 }));
  }
  _wireUpView(e) {
    this._destroySpinner(), e && this.visibleElements?.spinner && this._createSpinner(e);
  }
  _hideSpinner() {
    const { _spinner: e } = this;
    e && (e.location = null, e.hide());
  }
  _viewReadyChange(e, t) {
    e ? this._wireUpView(this.viewModel?.view) : t && this.viewModel.clear();
  }
  _viewChange(e, t) {
    e && t && this.viewModel.clear();
  }
  _destroySelectedFeatureWidget() {
    const { _feature: e } = this;
    e && (e.viewModel = null, !e.destroyed && e.destroy()), this._feature = null;
  }
  _closeOpenActionMenu() {
    const { _actionBarMenuNode: e } = this;
    e && (e.menuOpen = !1);
  }
  _destroyDrillInFlowItemWidgets() {
    this._drillInFlowItems.drain((e) => {
      "showAllEnabled" in e.viewModel && (e.viewModel.showAllEnabled = !1), e.viewModel = null, e.destroy();
    });
  }
  _toggleScreenLocationEnabled() {
    const { viewModel: e } = this;
    e && (e.screenLocationEnabled = e.active);
  }
  _displaySpinner() {
    const { _spinner: e } = this;
    if (!e) return;
    const { location: t, waitingForResult: i } = this.viewModel;
    i && t ? e.show({ location: t }) : e.hide();
  }
  _destroySpinner() {
    const { _spinner: e, view: t } = this;
    e && (t?.ui?.remove(e, ln), e.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(e) {
    this._destroySpinner(), e && this._createSpinner(this.viewModel?.view);
  }
};
r([a()], E.prototype, "_drillInFlowItems", void 0), r([a()], E.prototype, "_hideActionText", null), r([a()], E.prototype, "_featureNavigationVisible", null), r([a()], E.prototype, "_isCollapsed", null), r([a()], E.prototype, "_collapseEnabled", null), r([a({ readOnly: !0 })], E.prototype, "active", null), r([a()], E.prototype, "collapsed", void 0), r([a()], E.prototype, "content", null), r([a()], E.prototype, "icon", null), r([a()], E.prototype, "featureMenuOpen", null), r([a()], E.prototype, "featureNavigationTop", void 0), r([a()], E.prototype, "features", null), r([a()], E.prototype, "goToOverride", null), r([a({ type: Re })], E.prototype, "headerActions", void 0), r([a()], E.prototype, "headingLevel", void 0), r([a()], E.prototype, "location", null), r([a()], E.prototype, "label", null), r([a()], E.prototype, "map", null), r([a(), Q("esri/widgets/Features/t9n/Features")], E.prototype, "messages", void 0), r([a(), Q("esri/t9n/common")], E.prototype, "messagesCommon", void 0), r([a()], E.prototype, "promises", null), r([a()], E.prototype, "responsiveActionsEnabled", void 0), r([a({ readOnly: !0 })], E.prototype, "selectedFeature", null), r([a({ readOnly: !0 })], E.prototype, "selectedDrillInFeature", null), r([a()], E.prototype, "selectedFeatureIndex", null), r([a({ readOnly: !0 })], E.prototype, "selectedFeatureWidget", null), r([a()], E.prototype, "spatialReference", null), r([a()], E.prototype, "title", null), r([a()], E.prototype, "timeZone", null), r([a()], E.prototype, "updateLocationEnabled", null), r([a()], E.prototype, "view", null), r([a({ type: Fi }), Bn(["triggerAction", "trigger-action"])], E.prototype, "viewModel", void 0), r([a({ type: es, nonNullable: !0 })], E.prototype, "visibleElements", void 0), r([a()], E.prototype, "visible", null), E = r([T("esri.widgets.Features")], E);
const Gr = E, oe = "esri-popup", ke = `${oe}--is-docked`, B = { base: oe, baseHidden: `${oe}--hidden`, main: `${oe}__main-container`, shadow: `${oe}--shadow`, isDocked: ke, isDockedTopLeft: `${ke}-top-left`, isDockedTopCenter: `${ke}-top-center`, isDockedTopRight: `${ke}-top-right`, isDockedBottomLeft: `${ke}-bottom-left`, isDockedBottomCenter: `${ke}-bottom-center`, isDockedBottomRight: `${ke}-bottom-right`, alignTopCenter: `${oe}--aligned-top-center`, alignBottomCenter: `${oe}--aligned-bottom-center`, alignTopLeft: `${oe}--aligned-top-left`, alignBottomLeft: `${oe}--aligned-bottom-left`, alignTopRight: `${oe}--aligned-top-right`, alignBottomRight: `${oe}--aligned-bottom-right`, pointer: `${oe}__pointer`, pointerDirection: `${oe}__pointer-direction` };
let oi = class extends Fi {
  constructor(e) {
    super(e);
  }
};
oi = r([T("esri.widgets.Popup.PopupViewModel")], oi);
const ts = oi;
let fe = class extends pe {
  constructor() {
    super(...arguments), this.actionBar = !0, this.closeButton = !0, this.collapseButton = !0, this.featureNavigation = !0, this.featureListLayerTitle = !0, this.heading = !0, this.spinner = !0;
  }
};
r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "actionBar", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "closeButton", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "collapseButton", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "featureNavigation", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "featureListLayerTitle", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "heading", void 0), r([a({ type: Boolean, nonNullable: !0 })], fe.prototype, "spinner", void 0), fe = r([T("esri.widgets.Popup.PopupVisibleElements")], fe);
const ri = fe, Qr = 200, cn = { buttonEnabled: !0, position: "auto", breakpoint: { width: 544 } };
let x = class extends ee {
  constructor(e, t) {
    super(e, t), this._dockAction = new ut({ id: "popup-dock-action" }), this._featuresWidget = new Gr({ responsiveActionsEnabled: !0 }), this._containerNode = null, this._mainContainerNode = null, this._pointerOffsetInPx = 16, this._focusAbortController = null, this.alignment = "auto", this.dockEnabled = !1, this.headingLevel = 2, this.messages = null, this.viewModel = new ts(), this.visibleElements = new ri();
  }
  initialize() {
    this.addHandles([v(() => [this.viewModel?.view?.widthBreakpoint, this.dockEnabled], () => this._handleDockIcon(), N), v(() => [this.dockEnabled, this.messages?.undock, this.messages?.dock], () => this._handleDockEnabled(), N), v(() => this.dockOptions, (e) => {
      const { _dockAction: t } = this, i = this._featuresWidget.headerActions;
      i.remove(t), e.buttonEnabled && i.add(t);
    }, N), v(() => this.viewModel?.screenLocation, () => this._positionContainer()), v(() => [this.viewModel?.active, this.dockEnabled], () => this._toggleScreenLocationEnabled()), v(() => [this.viewModel?.screenLocation, this.viewModel?.view?.padding, this.viewModel?.view?.size, this.viewModel?.active, this.viewModel?.location, this.alignment], () => this.reposition()), v(() => this.viewModel?.view?.size, (e, t) => this._updateDockEnabledForViewSize(e, t)), v(() => this.viewModel?.view, (e, t) => this._viewChange(e, t)), v(() => this.viewModel?.view?.ready, (e, t) => this._viewReadyChange(e ?? !1, t ?? !1)), v(() => this.viewModel, () => this._featuresWidget.viewModel = this.viewModel, N), v(() => this._featureNavigationTop, (e) => this._featuresWidget.featureNavigationTop = e, N), v(() => this.headingLevel, (e) => this._featuresWidget.headingLevel = e, N), v(() => this.visibleElements.actionBar, (e) => this._featuresWidget.visibleElements.actionBar = !!e, N), v(() => this.visibleElements.closeButton, (e) => this._featuresWidget.visibleElements.closeButton = !!e, N), v(() => this.visibleElements.collapseButton, (e) => this._featuresWidget.visibleElements.collapseButton = !!e, N), v(() => this.visibleElements.heading, (e) => this._featuresWidget.visibleElements.heading = !!e, N), v(() => this.visibleElements.spinner, (e) => this._featuresWidget.visibleElements.spinner = !!e, N), v(() => this.visibleElements.featureNavigation, (e) => this._featuresWidget.visibleElements.featureNavigation = !!e, N), v(() => this.visibleElements.featureListLayerTitle, (e) => this._featuresWidget.visibleElements.featureListLayerTitle = !!e, N), dt(() => this._featuresWidget, "trigger-header-action", (e) => {
      e.action === this._dockAction && (this.dockEnabled = !this.dockEnabled);
    })]);
  }
  normalizeCtorArgs(e) {
    const t = { ...e };
    return e?.visibleElements != null && (t.visibleElements = new ri(e.visibleElements), e.collapseEnabled != null && (t.visibleElements.collapseButton = e.collapseEnabled), e.spinnerEnabled != null && (t.visibleElements.spinner = e.spinnerEnabled)), t;
  }
  destroy() {
    this._dockAction.destroy(), this._featuresWidget?.destroy(), this._focusAbortController?.abort();
  }
  get _featureNavigationTop() {
    const { currentAlignment: e, currentDockPosition: t } = this;
    return e === "bottom-left" || e === "bottom-center" || e === "bottom-right" || t === "top-left" || t === "top-center" || t === "top-right";
  }
  get actions() {
    return this.viewModel.actions;
  }
  set actions(e) {
    this.viewModel.actions = e;
  }
  get active() {
    return this.viewModel.active;
  }
  get autoCloseEnabled() {
    return this.viewModel.autoCloseEnabled;
  }
  set autoCloseEnabled(e) {
    this.viewModel.autoCloseEnabled = e;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e) {
    this.viewModel.defaultPopupTemplateEnabled = e;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e) {
    this.viewModel.content = e;
  }
  get collapsed() {
    return this._featuresWidget.collapsed;
  }
  set collapsed(e) {
    this._featuresWidget.collapsed = e;
  }
  get collapseEnabled() {
    return gt(G.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton;
  }
  set collapseEnabled(e) {
    gt(G.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton = e;
  }
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || cn;
  }
  set dockOptions(e) {
    const t = { ...cn }, i = this.viewModel?.view?.breakpoints, n = {};
    i && (n.width = i.xsmall, n.height = i.xsmall);
    const s = { ...t, ...e }, o = { ...t.breakpoint, ...n }, { breakpoint: l } = s;
    typeof l == "object" ? s.breakpoint = { ...o, ...l } : l && (s.breakpoint = o), this._set("dockOptions", s), this._setCurrentDockPosition(), this.reposition();
  }
  get featureCount() {
    return this.viewModel.featureCount;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e) {
    this.viewModel.featureMenuOpen = e;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e) {
    this.viewModel.features = e;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e) {
    this.viewModel.goToOverride = e;
  }
  get highlightEnabled() {
    return this.viewModel.highlightEnabled;
  }
  set highlightEnabled(e) {
    this.viewModel.highlightEnabled = e;
  }
  get icon() {
    return "popup";
  }
  set icon(e) {
    this._overrideIfSome("icon", e);
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e) {
    this.viewModel.location = e;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e) {
    this._overrideIfSome("label", e);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e) {
    this.viewModel.promises = e;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e) {
    this.viewModel.selectedFeatureIndex = e;
  }
  get selectedFeatureWidget() {
    return this._featuresWidget.selectedFeatureWidget;
  }
  get spinnerEnabled() {
    return gt(G.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner;
  }
  set spinnerEnabled(e) {
    gt(G.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner = e;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e) {
    this.viewModel.title = e;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e) {
    this.viewModel.updateLocationEnabled = e;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e) {
    this.viewModel.view = e;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e) {
    this.viewModel.visible = e;
  }
  blur() {
    const { active: e } = this.viewModel;
    e || G.getLogger(this).warn("Popup can only be blurred when currently active."), this._featuresWidget.blur();
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.visible = !1;
  }
  fetchFeatures(e, t) {
    return this.viewModel.fetchFeatures(e, t);
  }
  focus() {
    const { active: e } = this.viewModel;
    e || G.getLogger(this).warn("Popup can only be focused when currently active."), this._handleFocus();
  }
  next() {
    return this.viewModel.next();
  }
  open(e) {
    const t = !!e && !!e.featureMenuOpen, i = { collapsed: !!e && !!e.collapsed, featureMenuOpen: t };
    this.set(i), this.viewModel.open(e), e?.shouldFocus && this._handleFocus(!0);
  }
  previous() {
    return this.viewModel.previous();
  }
  reposition() {
    this.renderNow(), this._positionContainer(), this._setCurrentAlignment();
  }
  triggerAction(e) {
    return this.viewModel.triggerAction(e);
  }
  render() {
    const { dockEnabled: e, currentAlignment: t, currentDockPosition: i } = this, { active: n, screenLocation: s } = this.viewModel, o = n && e, l = n && !e, d = this.selectedFeature?.layer?.title, c = this.selectedFeature?.layer?.id, h = { [B.alignTopCenter]: t === "top-center", [B.alignBottomCenter]: t === "bottom-center", [B.alignTopLeft]: t === "top-left", [B.alignBottomLeft]: t === "bottom-left", [B.alignTopRight]: t === "top-right", [B.alignBottomRight]: t === "bottom-right", [B.isDocked]: o, [B.shadow]: l, [B.isDockedTopLeft]: i === "top-left", [B.isDockedTopCenter]: i === "top-center", [B.isDockedTopRight]: i === "top-right", [B.isDockedBottomLeft]: i === "bottom-left", [B.isDockedBottomCenter]: i === "bottom-center", [B.isDockedBottomRight]: i === "bottom-right" };
    return u("div", { afterCreate: this._positionContainer, afterUpdate: this._positionContainer, bind: this, class: this.classes(B.base, h, { [B.baseHidden]: !s && !e }), "data-layer-id": c, "data-layer-title": d, role: "presentation" }, n ? [this._renderMainContainer(), this._renderPointer()] : null);
  }
  _renderPointer() {
    return this.dockEnabled ? null : u("div", { class: B.pointer, key: "popup-pointer", role: "presentation" }, u("div", { class: this.classes(B.pointerDirection, B.shadow) }));
  }
  _renderMainContainer() {
    const { dockEnabled: e } = this, t = { [B.shadow]: e };
    return u("div", { afterCreate: this._setMainContainerNode, afterUpdate: this._setMainContainerNode, bind: this, class: this.classes(B.main, C.widget, t) }, this._featuresWidget.render());
  }
  _getAnimationDurationMS() {
    const { _containerNode: e } = this;
    return e ? 1e3 * parseFloat(window.getComputedStyle(e).animationDuration) : Qr;
  }
  async _handleFocus(e = !1) {
    this._focusAbortController?.abort(), this._focusAbortController = new AbortController();
    const t = this._focusAbortController.signal;
    e && await Fn(() => this.viewModel?.active === !0, { signal: t }), await xe(An(t)), await xe(Pt(this._getAnimationDurationMS(), t)), this._featuresWidget.focus();
  }
  _isOutsideView(e) {
    const { popupHeight: t, popupWidth: i, screenLocation: n, side: s, view: o } = e;
    if (isNaN(i) || isNaN(t) || !o || !n) return !1;
    const l = o.padding;
    return s === "right" && n.x + i / 2 > o.width - l.right || s === "left" && n.x - i / 2 < l.left || s === "top" && n.y - t < l.top || s === "bottom" && n.y + t > o.height - l.bottom;
  }
  _calculateAutoAlignment(e) {
    if (e !== "auto") return e;
    const { _pointerOffsetInPx: t, _containerNode: i, _mainContainerNode: n, viewModel: s } = this, { screenLocation: o, view: l } = s;
    if (o == null || !l || !i) return "top-center";
    function d(I) {
      return parseInt(I.replaceAll(/[^-\d.]/g, ""), 10);
    }
    const c = n ? window.getComputedStyle(n, null) : null, h = c ? d(c.getPropertyValue("max-height")) : 0, p = c ? d(c.getPropertyValue("height")) : 0, { height: m, width: f } = i.getBoundingClientRect(), g = f + t, y = Math.max(m, h, p) + t, _ = this._isOutsideView({ popupHeight: y, popupWidth: g, screenLocation: o, side: "right", view: l }), b = this._isOutsideView({ popupHeight: y, popupWidth: g, screenLocation: o, side: "left", view: l }), M = this._isOutsideView({ popupHeight: y, popupWidth: g, screenLocation: o, side: "top", view: l }), w = this._isOutsideView({ popupHeight: y, popupWidth: g, screenLocation: o, side: "bottom", view: l });
    return b ? M ? "bottom-right" : "top-right" : _ ? M ? "bottom-left" : "top-left" : M ? w ? "top-center" : "bottom-center" : "top-center";
  }
  _callCurrentAlignment(e) {
    return typeof e == "function" ? e.call(this) : e;
  }
  _getCurrentAlignment() {
    const { alignment: e, dockEnabled: t } = this;
    return t || !this.viewModel.active ? null : this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(e)));
  }
  _setCurrentAlignment() {
    this._set("currentAlignment", this._getCurrentAlignment());
  }
  _setCurrentDockPosition() {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }
  _calculatePositionResult(e) {
    const t = ["left", "right"];
    return _e(this.container) && t.reverse(), e?.replace(/leading/gi, t[0]).replaceAll(/trailing/gi, t[1]);
  }
  _callDockPosition(e) {
    return typeof e == "function" ? e.call(this) : e;
  }
  _getDockPosition() {
    return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition(this.dockOptions?.position)));
  }
  _getCurrentDockPosition() {
    return this.dockEnabled && this.viewModel.active ? this._getDockPosition() : null;
  }
  _calculateAutoDockPosition(e) {
    if (e !== "auto") return e;
    const t = this.viewModel?.view, i = _e(this.container) ? "top-left" : "top-right";
    if (!t) return i;
    const n = t.padding || { left: 0, right: 0, top: 0, bottom: 0 }, s = t.width - n.left - n.right, { breakpoints: o } = t;
    return o && s <= o.xsmall ? "bottom-center" : i;
  }
  _getDockIcon() {
    const e = this._getDockPosition();
    if (this.dockEnabled) return "minimize";
    switch (e) {
      case "top-left":
      case "bottom-left":
        return "dock-left";
      case "top-center":
        return "maximize";
      case "bottom-center":
        return "dock-bottom";
      default:
        return "dock-right";
    }
  }
  _handleDockIcon() {
    this._dockAction.icon = this._getDockIcon();
  }
  _handleDockEnabled() {
    this._dockAction.title = this.dockEnabled ? this.messages?.undock : this.messages?.dock;
  }
  _setMainContainerNode(e) {
    this._mainContainerNode = e;
  }
  _positionContainer(e = this._containerNode) {
    if (e && (this._containerNode = e), !this._containerNode) return;
    const { screenLocation: t } = this.viewModel, { width: i } = this._containerNode.getBoundingClientRect(), n = this._calculatePositionStyle(t, i);
    n && Object.assign(this._containerNode.style, n);
  }
  _calculateFullWidth(e) {
    const { currentAlignment: t, _pointerOffsetInPx: i } = this;
    return t === "top-left" || t === "bottom-left" || t === "top-right" || t === "bottom-right" ? e + i : e;
  }
  _calculateAlignmentPosition(e, t, i, n) {
    const { currentAlignment: s, _pointerOffsetInPx: o } = this;
    if (!i) return;
    const { padding: l } = i, d = n / 2, c = i.height - t, h = i.width - e;
    return s === "bottom-center" ? { top: t + o - l.top, left: e - d - l.left } : s === "top-left" ? { bottom: c + o - l.bottom, right: h + o - l.right } : s === "bottom-left" ? { top: t + o - l.top, right: h + o - l.right } : s === "top-right" ? { bottom: c + o - l.bottom, left: e + o - l.left } : s === "bottom-right" ? { top: t + o - l.top, left: e + o - l.left } : s === "top-center" ? { bottom: c + o - l.bottom, left: e - d - l.left } : void 0;
  }
  _calculatePositionStyle(e, t) {
    const { dockEnabled: i, view: n } = this;
    if (!n) return;
    if (i) return { left: "", top: "", right: "", bottom: "" };
    if (e == null || !t) return;
    const s = this._calculateFullWidth(t), o = this._calculateAlignmentPosition(e.x, e.y, n, s);
    return o ? { top: o.top !== void 0 ? `${o.top}px` : "auto", left: o.left !== void 0 ? `${o.left}px` : "auto", bottom: o.bottom !== void 0 ? `${o.bottom}px` : "auto", right: o.right !== void 0 ? `${o.right}px` : "auto" } : void 0;
  }
  _viewChange(e, t) {
    e && t && (this.close(), this.clear());
  }
  _viewReadyChange(e, t) {
    e ? this._wireUpView() : t && (this.close(), this.clear());
  }
  _wireUpView() {
    this._setDockEnabledForViewSize(this.dockOptions);
  }
  _dockingThresholdCrossed(e, t, i) {
    const [n, s] = e, [o, l] = t, { width: d = 0, height: c = 0 } = i ?? {};
    return n <= d && o > d || n > d && o <= d || s <= c && l > c || s > c && l <= c;
  }
  _updateDockEnabledForViewSize(e, t) {
    if (!e || !t) return;
    const i = this.viewModel?.view?.padding || { left: 0, right: 0, top: 0, bottom: 0 }, n = i.left + i.right, s = i.top + i.bottom, o = [], l = [];
    o[0] = e[0] - n, o[1] = e[1] - s, l[0] = t[0] - n, l[1] = t[1] - s;
    const { dockOptions: d } = this, c = d.breakpoint;
    this._dockingThresholdCrossed(o, l, c) && this._setDockEnabledForViewSize(d), this._setCurrentDockPosition();
  }
  _toggleScreenLocationEnabled() {
    const { dockEnabled: e, viewModel: t } = this;
    if (!t) return;
    const i = t.active && !e;
    t.screenLocationEnabled = i;
  }
  _shouldDockAtCurrentViewSize(e) {
    const t = e.breakpoint, i = this.viewModel?.view?.ui;
    if (!i) return !1;
    const { width: n, height: s } = i;
    if (isNaN(n) || isNaN(s) || !t) return !1;
    const o = t.hasOwnProperty("width") && n <= (t.width ?? 0), l = t.hasOwnProperty("height") && s <= (t.height ?? 0);
    return o || l;
  }
  _setDockEnabledForViewSize(e) {
    e.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(e));
  }
};
r([a({ readOnly: !0 })], x.prototype, "_featureNavigationTop", null), r([a()], x.prototype, "actions", null), r([a({ readOnly: !0 })], x.prototype, "active", null), r([a()], x.prototype, "alignment", void 0), r([a()], x.prototype, "autoCloseEnabled", null), r([a()], x.prototype, "defaultPopupTemplateEnabled", null), r([a()], x.prototype, "content", null), r([a()], x.prototype, "collapsed", null), r([a()], x.prototype, "collapseEnabled", null), r([a({ readOnly: !0 })], x.prototype, "currentAlignment", null), r([a({ readOnly: !0 })], x.prototype, "currentDockPosition", null), r([a()], x.prototype, "dockOptions", null), r([a()], x.prototype, "dockEnabled", void 0), r([a({ readOnly: !0 })], x.prototype, "featureCount", null), r([a()], x.prototype, "featureMenuOpen", null), r([a()], x.prototype, "features", null), r([a()], x.prototype, "goToOverride", null), r([a()], x.prototype, "headingLevel", void 0), r([a()], x.prototype, "highlightEnabled", null), r([a()], x.prototype, "icon", null), r([a()], x.prototype, "location", null), r([a()], x.prototype, "label", null), r([a(), Q("esri/widgets/Popup/t9n/Popup")], x.prototype, "messages", void 0), r([a()], x.prototype, "promises", null), r([a({ readOnly: !0 })], x.prototype, "selectedFeature", null), r([a()], x.prototype, "selectedFeatureIndex", null), r([a({ readOnly: !0 })], x.prototype, "selectedFeatureWidget", null), r([a()], x.prototype, "spinnerEnabled", null), r([a()], x.prototype, "title", null), r([a()], x.prototype, "updateLocationEnabled", null), r([a()], x.prototype, "view", null), r([a({ type: ts }), Bn(["triggerAction", "trigger-action"])], x.prototype, "viewModel", void 0), r([a()], x.prototype, "visible", null), r([a({ type: ri, nonNullable: !0 })], x.prototype, "visibleElements", void 0), x = r([T("esri.widgets.Popup")], x);
const Ca = x;
export {
  Ca as default
};
//# sourceMappingURL=Popup-DhZX9873.js.map
