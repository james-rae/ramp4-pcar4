import { m as Ie } from "./TimeOnly-CHaaijop.js";
import { a as E, v as De, w as X, B as x, N as v, b as c, r as m, G as P, m as N, y as Te, A as ue, X as de, W as ce, P as L, F as k, U as A, H as j, I as be, Q as M, _ as Ee, g as O, D as Ne, K as Ae, S as _, T as Y, V as xe, $ as q } from "./arcadeUtils-CLnCYna2.js";
import { q as Se, G as me, d as Le, c as B, e as Ce, a as ve, b as Pe, T as ee, E as Ze, N as $e, O as Re, B as U, f as Ue, k as K, L as C, I as ne } from "./featureSetUtils-CzN1ySVc.js";
import { t as Me } from "./ImmutableArray-CiJxhY8_.js";
import { l as ke } from "./portalUtils-BKQPJG5p.js";
import { u as Oe, D as ye } from "./SpatialFilter-CPFX1_KV.js";
import { C as pe, eX as ze, eJ as te, dS as G } from "./main-DHXLMse1.js";
import { O as b } from "./WhereClause-DzsyYw2j.js";
function He(r) {
  if (r.length === 1) {
    if (A(r[0])) return q("distinct", r[0], -1);
    if (M(r[0])) return q("distinct", r[0].toArray(), -1);
  }
  return q("distinct", r, -1);
}
async function ae(r, n, a) {
  const p = r.getVariables();
  if (p.length > 0) {
    const I = [];
    for (let t = 0; t < p.length; t++) {
      const s = { name: p[t] };
      I.push(await n.evaluateIdentifier(a, s));
    }
    const e = {};
    for (let t = 0; t < p.length; t++) e[p[t]] = I[t];
    return r.parameters = e, r;
  }
  return r;
}
function d(r, n, a = null) {
  for (const p in r) if (p.toLowerCase() === n.toLowerCase()) return r[p];
  return a;
}
function we(r) {
  if (r === null) return null;
  const n = { type: d(r, "type", ""), name: d(r, "name", "") };
  if (n.type === "range") n.range = d(r, "range", []);
  else {
    n.codedValues = [];
    for (const a of d(r, "codedValues", [])) n.codedValues.push({ name: d(a, "name", ""), code: d(a, "code", null) });
  }
  return n;
}
function ie(r) {
  if (r === null) return null;
  const n = {}, a = d(r, "wkt");
  a !== null && (n.wkt = a);
  const p = d(r, "wkid");
  return p !== null && (n.wkid = p), n;
}
function he(r) {
  if (r === null) return null;
  const n = { hasZ: d(r, "hasz", !1), hasM: d(r, "hasm", !1) }, a = d(r, "spatialreference");
  a != null && (n.spatialReference = ie(a));
  const p = d(r, "x", null);
  if (p !== null) return n.x = p, n.y = d(r, "y", null), n.hasZ && (n.z = d(r, "z", null)), n.hasM && (n.m = d(r, "m", null)), n;
  const I = d(r, "rings", null);
  if (I !== null) return n.rings = I, n;
  const e = d(r, "paths", null);
  if (e !== null) return n.paths = e, n;
  const t = d(r, "points", null);
  if (t !== null) return n.points = t, n;
  for (const s of ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]) {
    const o = d(r, s, null);
    o !== null && (n[s] = o);
  }
  return n;
}
function We(r, n) {
  for (const a of n) if (a === r) return !0;
  return !1;
}
function Ge(r) {
  return !!r.layerDefinition && !!r.featureSet && We(r.layerDefinition.geometryType, ["", null, "esriGeometryNull", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) !== !1 && A(r.layerDefinition.fields) !== !1 && A(r.featureSet.features) !== !1;
}
function z(r) {
  return r?.toLowerCase() === "utc" ? "UTC" : r?.toLowerCase() === "unknown" ? "Unknown" : r;
}
function Ye(r) {
  r.mode === "async" && (r.functions.timezone = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 1, 2, n, a), De(e[0]) || X(e[0])) return "Unknown";
      if (x(e[0])) {
        if (await e[0].load(), e.length === 1 || e[1] === null) return e[0].datesInUnknownTimezone ? z("unknown") : z(e[0].dateFieldsTimeZone);
        if (!(e[1] instanceof v) || e[1].hasField("type") === !1) throw new c(n, m.InvalidParameter, a);
        const o = e[1].field("type");
        if (P(o) === !1) throw new c(n, m.InvalidParameter, a);
        switch (N(o).toLowerCase()) {
          case "preferredtimezone":
            return z(e[0].preferredTimeZone);
          case "editfieldsinfo":
            return z(e[0].editFieldsInfo?.timeZone ?? null);
          case "timeinfo":
            return z(e[0].timeInfo?.timeZone ?? null);
          case "field":
            if (e[1].hasField("fieldname") && P(e[1].field("fieldname"))) return z(e[0].fieldTimeZone(N(e[1].field("fieldname"))));
        }
        throw new c(n, m.InvalidParameter, a);
      }
      const t = Te(e[0], ue(n));
      if (t === null) return null;
      const s = t.timeZone;
      return s === "system" ? Ie.systemTimeZoneCanonicalName : s.toLowerCase() === "utc" ? "UTC" : s.toLowerCase() === "unknown" ? "Unknown" : s;
    });
  }, r.functions.sqltimestamp = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      E(e, 1, 3, n, a);
      const t = e[0];
      if (de(t)) {
        if (e.length === 1) return t.toSQLWithKeyword();
        if (e.length === 2) return t.changeTimeZone(N(e[1])).toSQLWithKeyword();
        throw new c(n, m.InvalidParameter, a);
      }
      if (X(t)) return t.toSQLWithKeyword();
      if (x(t)) {
        if (e.length !== 3) throw new c(n, m.InvalidParameter, a);
        await t.load();
        const s = N(e[1]);
        if (X(e[2])) return e[2].toSQLWithKeyword();
        if (de(e[2]) === !1) throw new c(n, m.InvalidParameter, a);
        const o = t.fieldTimeZone(s);
        return o === null ? e[2].toSQLWithKeyword() : e[2].changeTimeZone(o).toSQLWithKeyword();
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "sqltimestamp", min: 2, max: 4 }), r.functions.featuresetbyid = function(n, a) {
    return r.standardFunctionAsync(n, a, (p, I, e) => {
      if (E(e, 2, 4, n, a), ce(e[0])) {
        const t = N(e[1]);
        let s = L(e[2], null);
        const o = k(L(e[3], !0));
        if (s === null && (s = ["*"]), A(s) === !1) throw new c(n, m.InvalidParameter, a);
        return e[0].featureSetById(t, o, s);
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "featuresetbyid", min: 2, max: 4 }), r.functions.getfeatureset = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 1, 2, n, a), j(e[0])) {
        let t = L(e[1], "datasource");
        return t === null && (t = "datasource"), t = N(t).toLowerCase(), Se(e[0].fullSchema(), t, n.lrucache, n.interceptor, n.spatialReference ?? null);
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "getfeatureset", min: 1, max: 2 }), r.functions.featuresetbyportalitem = function(n, a) {
    return r.standardFunctionAsync(n, a, (p, I, e) => {
      if (E(e, 2, 5, n, a), e[0] === null) throw new c(n, m.PortalRequired, a);
      if (e[0] instanceof be) {
        const f = N(e[1]), i = N(e[2]);
        let l = L(e[3], null);
        const u = k(L(e[4], !0));
        if (l === null && (l = ["*"]), A(l) === !1) throw new c(n, m.InvalidParameter, a);
        let w;
        return w = n.services?.portal ? n.services.portal : pe.getDefault(), w = ke(e[0], w), me(f, i, n.spatialReference ?? null, l, u, w, n.lrucache, n.interceptor);
      }
      if (P(e[0]) === !1) throw new c(n, m.PortalRequired, a);
      const t = N(e[0]), s = N(e[1]);
      let o = L(e[2], null);
      const y = k(L(e[3], !0));
      if (o === null && (o = ["*"]), A(o) === !1) throw new c(n, m.InvalidParameter, a);
      return me(t, s, n.spatialReference ?? null, o, y, n.services?.portal ?? pe.getDefault(), n.lrucache, n.interceptor);
    });
  }, r.signatures.push({ name: "featuresetbyportalitem", min: 2, max: 5 }), r.functions.featuresetbyname = function(n, a) {
    return r.standardFunctionAsync(n, a, (p, I, e) => {
      if (E(e, 2, 4, n, a), ce(e[0])) {
        const t = N(e[1]);
        let s = L(e[2], null);
        const o = k(L(e[3], !0));
        if (s === null && (s = ["*"]), A(s) === !1) throw new c(n, m.InvalidParameter, a);
        return e[0].featureSetByName(t, o, s);
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "featuresetbyname", min: 2, max: 4 }), r.functions.featureset = function(n, a) {
    return r.standardFunction(n, a, (p, I, e) => {
      E(e, 1, 1, n, a);
      const t = { layerDefinition: { geometryType: "", objectIdField: "", globalIdField: "", typeIdField: "", hasM: !1, hasZ: !1, fields: [] }, featureSet: { geometryType: "", features: [] } };
      if (P(e[0])) {
        const s = JSON.parse(e[0]);
        s.layerDefinition !== void 0 ? (t.layerDefinition = s.layerDefinition, t.featureSet = s.featureSet, s.layerDefinition.spatialReference && (t.layerDefinition.spatialReference = s.layerDefinition.spatialReference)) : (t.featureSet.features = s.features, t.featureSet.geometryType = s.geometryType, t.layerDefinition.geometryType = t.featureSet.geometryType, t.layerDefinition.objectIdField = s.objectIdFieldName ?? "", t.layerDefinition.typeIdField = s.typeIdFieldName, t.layerDefinition.globalIdField = s.globalIdFieldName, t.layerDefinition.fields = s.fields, s.spatialReference && (t.layerDefinition.spatialReference = s.spatialReference));
      } else {
        if (!(e[0] instanceof v)) throw new c(n, m.InvalidParameter, a);
        {
          const s = JSON.parse(e[0].castToText(!0)), o = d(s, "layerdefinition");
          if (o !== null) {
            t.layerDefinition.geometryType = d(o, "geometrytype", ""), t.featureSet.geometryType = t.layerDefinition.geometryType, t.layerDefinition.globalIdField = d(o, "globalidfield", ""), t.layerDefinition.objectIdField = d(o, "objectidfield", ""), t.layerDefinition.typeIdField = d(o, "typeidfield", ""), t.layerDefinition.hasZ = d(o, "hasz", !1) === !0, t.layerDefinition.hasM = d(o, "hasm", !1) === !0;
            const y = d(o, "spatialreference");
            y && (t.layerDefinition.spatialReference = ie(y));
            const f = [];
            for (const l of d(o, "fields", [])) {
              const u = { name: d(l, "name", ""), alias: d(l, "alias", ""), type: d(l, "type", ""), nullable: d(l, "nullable", !0), editable: d(l, "editable", !0), length: d(l, "length", null), domain: we(d(l, "domain")) };
              f.push(u);
            }
            t.layerDefinition.fields = f;
            const i = d(s, "featureset");
            if (i) {
              const l = {};
              for (const u of f) l[u.name.toLowerCase()] = u.name;
              for (const u of d(i, "features", [])) {
                const w = {}, D = d(u, "attributes", {});
                for (const g in D) w[l[g.toLowerCase()]] = D[g];
                t.featureSet.features.push({ attributes: w, geometry: he(d(u, "geometry")) });
              }
            }
          } else {
            t.layerDefinition.hasZ = d(s, "hasz", !1) === !0, t.layerDefinition.hasM = d(s, "hasm", !1) === !0, t.layerDefinition.geometryType = d(s, "geometrytype", ""), t.featureSet.geometryType = t.layerDefinition.geometryType, t.layerDefinition.objectIdField = d(s, "objectidfieldname", ""), t.layerDefinition.typeIdField = d(s, "typeidfieldname", "");
            const y = d(s, "spatialreference");
            y && (t.layerDefinition.spatialReference = ie(y));
            const f = [], i = d(s, "fields", null);
            if (!A(i)) throw new c(n, m.InvalidParameter, a);
            for (const w of i) {
              const D = { name: d(w, "name", ""), alias: d(w, "alias", ""), type: d(w, "type", ""), nullable: d(w, "nullable", !0), editable: d(w, "editable", !0), length: d(w, "length", null), domain: we(d(w, "domain")) };
              f.push(D);
            }
            t.layerDefinition.fields = f;
            const l = {};
            for (const w of f) l[w.name.toLowerCase()] = w.name;
            let u = d(s, "features", null);
            if (A(u)) for (const w of u) {
              const D = {}, g = d(w, "attributes", {});
              for (const T in g) D[l[T.toLowerCase()]] = g[T];
              t.featureSet.features.push({ attributes: D, geometry: he(d(w, "geometry", null)) });
            }
            else u = null, t.featureSet.features = u;
          }
        }
      }
      if (Ge(t) === !1) throw new c(n, m.InvalidParameter, a);
      return t.layerDefinition.geometryType || (t.layerDefinition.geometryType = "esriGeometryNull"), Le.create(t, n.spatialReference);
    });
  }, r.signatures.push({ name: "featureset", min: 1, max: 1 }), r.functions.filter = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 2, 2, n, a), A(e[0]) || M(e[0])) {
        const t = [];
        let s, o = e[0];
        if (o instanceof Me && (o = o.toArray()), !Ee(e[1])) throw new c(n, m.InvalidParameter, a);
        s = e[1].createFunction(n);
        for (const y of o) {
          const f = s(y);
          ze(f) ? await f === !0 && t.push(y) : f === !0 && t.push(y);
        }
        return t;
      }
      if (x(e[0])) {
        const t = await e[0].load(), s = b.create(e[1], t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC), o = s.getVariables();
        if (o.length > 0) {
          const y = [];
          for (let i = 0; i < o.length; i++) {
            const l = { name: o[i] };
            y.push(await r.evaluateIdentifier(n, l));
          }
          const f = {};
          for (let i = 0; i < o.length; i++) f[o[i]] = y[i];
          return s.parameters = f, new B({ parentfeatureset: e[0], whereclause: s });
        }
        return new B({ parentfeatureset: e[0], whereclause: s });
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "filter", min: 2, max: 2 }), r.functions.orderby = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 2, 2, n, a), x(e[0])) {
        const t = new Ce(e[1]);
        return new ve({ parentfeatureset: e[0], orderbyclause: t });
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "orderby", min: 2, max: 2 }), r.functions.top = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 2, 2, n, a), x(e[0])) return new Pe({ parentfeatureset: e[0], topnum: e[1] });
      if (A(e[0])) return O(e[1]) >= e[0].length ? e[0].slice(0) : e[0].slice(0, O(e[1]));
      if (M(e[0])) return O(e[1]) >= e[0].length() ? e[0].slice(0) : e[0].slice(0, O(e[1]));
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "top", min: 2, max: 2 }), r.functions.first = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 1, 1, n, a), x(e[0])) {
        const t = await e[0].first(p.abortSignal);
        if (t !== null) {
          const s = Ne.createFromGraphicLikeObject(t.geometry, t.attributes, e[0], n.timeZone);
          return s._underlyingGraphic = t, s;
        }
        return t;
      }
      return A(e[0]) ? e[0].length === 0 ? null : e[0][0] : M(e[0]) ? e[0].length() === 0 ? null : e[0].get(0) : null;
    });
  }, r.signatures.push({ name: "first", min: 1, max: 1 }), r.functions.attachments = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      E(e, 1, 2, n, a);
      const t = { minsize: -1, maxsize: -1, types: null, returnMetadata: !1 };
      if (e.length > 1) {
        if (e[1] instanceof v) {
          if (e[1].hasField("minsize") && (t.minsize = O(e[1].field("minsize"))), e[1].hasField("metadata") && (t.returnMetadata = k(e[1].field("metadata"))), e[1].hasField("maxsize") && (t.maxsize = O(e[1].field("maxsize"))), e[1].hasField("types")) {
            const s = Ae(e[1].field("types"), !1);
            s.length > 0 && (t.types = s);
          }
        } else if (e[1] !== null) throw new c(n, m.InvalidParameter, a);
      }
      if (j(e[0])) {
        let s = e[0]._layer;
        return s instanceof te && (s = ee(s, n.spatialReference, ["*"], !0, n.lrucache, n.interceptor)), s === null ? [] : x(s) === !1 ? [] : (await s.load(), s.queryAttachments(e[0].field(s.objectIdField), t.minsize, t.maxsize, t.types, t.returnMetadata));
      }
      if (e[0] === null) return [];
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "attachments", min: 1, max: 2 }), r.functions.featuresetbyrelationshipname = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      E(e, 2, 4, n, a);
      const t = e[0], s = N(e[1]);
      let o = L(e[2], null);
      const y = k(L(e[3], !0));
      if (o === null && (o = ["*"]), A(o) === !1) throw new c(n, m.InvalidParameter, a);
      if (e[0] === null) return null;
      if (!j(e[0])) throw new c(n, m.InvalidParameter, a);
      let f = t._layer;
      if (f instanceof te && (f = ee(f, n.spatialReference, ["*"], !0, n.lrucache, n.interceptor)), f === null || x(f) === !1) return null;
      f = await f.load();
      const i = f.relationshipMetaData().filter((g) => g.name === s);
      if (i.length === 0) return null;
      if (i[0].relationshipTableId !== void 0 && i[0].relationshipTableId !== null && i[0].relationshipTableId > -1) return Ze(f, i[0], t.field(f.objectIdField), f.spatialReference, o, y, n.lrucache, n.interceptor);
      let l = f.serviceUrl();
      if (!l) return null;
      l = l.charAt(l.length - 1) === "/" ? l + i[0].relatedTableId.toString() : l + "/" + i[0].relatedTableId.toString();
      const u = await $e(l, f.spatialReference, o, y, n.lrucache, n.interceptor);
      await u.load();
      let w = u.relationshipMetaData();
      if (w = w.filter((g) => g.id === i[0].id), t.hasField(i[0].keyField) === !1 || t.field(i[0].keyField) === null) {
        const g = await f.getFeatureByObjectId(t.field(f.objectIdField), [i[0].keyField]);
        if (g) {
          const T = b.create(w[0].keyField + "= @id", u.getFieldsIndex(), u.dateFieldsTimeZoneDefaultUTC);
          return T.parameters = { id: g.attributes[i[0].keyField] }, u.filter(T);
        }
        return new Oe({ parentfeatureset: u });
      }
      const D = b.create(w[0].keyField + "= @id", u.getFieldsIndex(), u.dateFieldsTimeZoneDefaultUTC);
      return D.parameters = { id: t.field(i[0].keyField) }, u.filter(D);
    });
  }, r.signatures.push({ name: "featuresetbyrelationshipname", min: 2, max: 4 }), r.functions.featuresetbyassociation = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      E(e, 2, 3, n, a);
      const t = e[0], s = N(L(e[1], "")).toLowerCase(), o = P(e[2]) ? N(e[2]) : null;
      if (e[0] === null) return null;
      if (!j(e[0])) throw new c(n, m.InvalidParameter, a);
      let y = t._layer;
      if (y instanceof te && (y = ee(y, n.spatialReference, ["*"], !0, n.lrucache, n.interceptor)), y === null || x(y) === !1) return null;
      await y.load();
      const f = y.serviceUrl(), i = await Re(f, n.spatialReference);
      let l = null, u = null, w = !1;
      if (o !== null && o !== "" && o !== void 0) {
        for (const F of i.terminals) F.terminalName === o && (u = F.terminalId);
        u === null && (w = !0);
      }
      const D = i.associations.getFieldsIndex(), g = D.get("TOGLOBALID").name, T = D.get("FROMGLOBALID").name, V = D.get("TOTERMINALID").name, Q = D.get("FROMTERMINALID").name, H = D.get("FROMNETWORKSOURCEID").name, W = D.get("TONETWORKSOURCEID").name, R = D.get("ASSOCIATIONTYPE").name, ge = D.get("ISCONTENTVISIBLE").name, Fe = D.get("OBJECTID").name;
      for (const F of y.fields) if (F.type === "global-id") {
        l = t.field(F.name);
        break;
      }
      let Z = null, re = new U(new G({ name: "percentalong", alias: "percentalong", type: "double" }), b.create("0", i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC)), se = new U(new G({ name: "side", alias: "side", type: "string" }), b.create("''", i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC));
      const S = "globalid", le = "globalId", oe = {};
      for (const F in i.lkp) oe[F] = i.lkp[F].sourceId;
      const $ = new Ue(new G({ name: "classname", alias: "classname", type: "string" }), null, oe);
      let h = "";
      switch (s) {
        case "midspan": {
          h = `((${g}='${l}') OR ( ${T}='${l}')) AND (${R} IN (5))`, $.codefield = b.create(`CASE WHEN (${g}='${l}') THEN ${H} ELSE ${W} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC);
          const F = Y(C.findField(i.associations.fields, T));
          F.name = S, F.alias = S, Z = new U(F, b.create(`CASE WHEN (${T}='${l}') THEN ${g} ELSE ${T} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC)), re = i.unVersion >= 4 ? new ne(C.findField(i.associations.fields, D.get("PERCENTALONG").name)) : new U(new G({ name: "percentalong", alias: "percentalong", type: "double" }), b.create("0", i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "junctionedge": {
          h = `((${g}='${l}') OR ( ${T}='${l}')) AND (${R} IN (4,6))`, $.codefield = b.create(`CASE WHEN (${g}='${l}') THEN ${H} ELSE ${W} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC);
          const F = Y(C.findField(i.associations.fields, T));
          F.name = S, F.alias = S, Z = new U(F, b.create(`CASE WHEN (${T}='${l}') THEN ${g} ELSE ${T} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC)), se = new U(new G({ name: "side", alias: "side", type: "string" }), b.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "connected": {
          let F = `${g}='@T'`, fe = `${T}='@T'`;
          u !== null && (F += ` AND ${V}=@A`, fe += ` AND ${Q}=@A`), h = "((" + F + ") OR (" + fe + "))", h = _(h, "@T", l ?? ""), F = _(F, "@T", l ?? ""), u !== null && (F = _(F, "@A", u.toString()), h = _(h, "@A", u.toString())), $.codefield = b.create("CASE WHEN " + F + ` THEN ${H} ELSE ${W} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC);
          const J = Y(C.findField(i.associations.fields, T));
          J.name = S, J.alias = S, Z = new U(J, b.create("CASE WHEN " + F + ` THEN ${T} ELSE ${g} END`, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "container":
          h = `${g}='${l}' AND ${R} = 2`, u !== null && (h += ` AND ${V} = ` + u.toString()), $.codefield = H, h = "( " + h + " )", Z = new K(C.findField(i.associations.fields, T), S, S);
          break;
        case "content":
          h = `(${T}='${l}' AND ${R} = 2)`, u !== null && (h += ` AND ${Q} = ` + u.toString()), $.codefield = W, h = "( " + h + " )", Z = new K(C.findField(i.associations.fields, g), S, S);
          break;
        case "structure":
          h = `(${g}='${l}' AND ${R} = 3)`, u !== null && (h += ` AND ${V} = ` + u.toString()), $.codefield = H, h = "( " + h + " )", Z = new K(C.findField(i.associations.fields, T), S, le);
          break;
        case "attached":
          h = `(${T}='${l}' AND ${R} = 3)`, u !== null && (h += ` AND ${Q} = ` + u.toString()), $.codefield = W, h = "( " + h + " )", Z = new K(C.findField(i.associations.fields, g), S, le);
          break;
        default:
          throw new c(n, m.InvalidParameter, a);
      }
      return w && (h = "1 <> 1"), new C({ parentfeatureset: i.associations, adaptedFields: [new ne(C.findField(i.associations.fields, Fe)), new ne(C.findField(i.associations.fields, ge)), Z, se, $, re], extraFilter: h ? b.create(h, i.associations.getFieldsIndex(), i.associations.dateFieldsTimeZoneDefaultUTC) : null });
    });
  }, r.signatures.push({ name: "featuresetbyassociation", min: 2, max: 6 }), r.functions.groupby = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 3, 3, n, a), !x(e[0])) throw new c(n, m.InvalidParameter, a);
      const t = await e[0].load(), s = [], o = [];
      let y = !1, f = [];
      if (P(e[1])) f.push(e[1]);
      else if (e[1] instanceof v) f.push(e[1]);
      else if (A(e[1])) f = e[1];
      else {
        if (!M(e[1])) throw new c(n, m.InvalidParameter, a);
        f = e[1].toArray();
      }
      for (const i of f) if (P(i)) {
        const l = b.create(N(i), t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC), u = ye(l) === !0 ? N(i) : "%%%%FIELDNAME";
        s.push({ name: u, expression: l }), u === "%%%%FIELDNAME" && (y = !0);
      } else {
        if (!(i instanceof v)) throw new c(n, m.InvalidParameter, a);
        {
          const l = i.hasField("name") ? i.field("name") : "%%%%FIELDNAME", u = i.hasField("expression") ? i.field("expression") : "";
          if (l === "%%%%FIELDNAME" && (y = !0), !l) throw new c(n, m.InvalidParameter, a);
          s.push({ name: l, expression: b.create(u || l, t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC) });
        }
      }
      if (f = [], P(e[2])) f.push(e[2]);
      else if (A(e[2])) f = e[2];
      else if (M(e[2])) f = e[2].toArray();
      else {
        if (!(e[2] instanceof v)) throw new c(n, m.InvalidParameter, a);
        f.push(e[2]);
      }
      for (const i of f) {
        if (!(i instanceof v)) throw new c(n, m.InvalidParameter, a);
        {
          const l = i.hasField("name") ? i.field("name") : "", u = i.hasField("statistic") ? i.field("statistic") : "", w = i.hasField("expression") ? i.field("expression") : "";
          if (!l || !u || !w) throw new c(n, m.InvalidParameter, a);
          o.push({ name: l, statistic: u.toLowerCase(), expression: b.create(w, t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC) });
        }
      }
      if (y) {
        const i = {};
        for (const u of t.fields) i[u.name.toLowerCase()] = 1;
        for (const u of s) u.name !== "%%%%FIELDNAME" && (i[u.name.toLowerCase()] = 1);
        for (const u of o) u.name !== "%%%%FIELDNAME" && (i[u.name.toLowerCase()] = 1);
        let l = 0;
        for (const u of s) if (u.name === "%%%%FIELDNAME") {
          for (; i["field_" + l.toString()] === 1; ) l++;
          i["field_" + l.toString()] = 1, u.name = "FIELD_" + l.toString();
        }
      }
      for (const i of s) await ae(i.expression, r, n);
      for (const i of o) await ae(i.expression, r, n);
      return e[0].groupby(s, o);
    });
  }, r.signatures.push({ name: "groupby", min: 3, max: 3 }), r.functions.distinct = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (x(e[0])) {
        E(e, 2, 2, n, a);
        const t = await e[0].load(), s = [];
        let o = [];
        if (P(e[1])) o.push(e[1]);
        else if (e[1] instanceof v) o.push(e[1]);
        else if (A(e[1])) o = e[1];
        else {
          if (!M(e[1])) throw new c(n, m.InvalidParameter, a);
          o = e[1].toArray();
        }
        let y = !1;
        for (const f of o) if (P(f)) {
          const i = b.create(N(f), t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC), l = ye(i) === !0 ? N(f) : "%%%%FIELDNAME";
          s.push({ name: l, expression: i }), l === "%%%%FIELDNAME" && (y = !0);
        } else {
          if (!(f instanceof v)) throw new c(n, m.InvalidParameter, a);
          {
            const i = f.hasField("name") ? f.field("name") : "%%%%FIELDNAME", l = f.hasField("expression") ? f.field("expression") : "";
            if (i === "%%%%FIELDNAME" && (y = !0), !i) throw new c(n, m.InvalidParameter, a);
            s.push({ name: i, expression: b.create(l || i, t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC) });
          }
        }
        if (y) {
          const f = {};
          for (const l of t.fields) f[l.name.toLowerCase()] = 1;
          for (const l of s) l.name !== "%%%%FIELDNAME" && (f[l.name.toLowerCase()] = 1);
          let i = 0;
          for (const l of s) if (l.name === "%%%%FIELDNAME") {
            for (; f["field_" + i.toString()] === 1; ) i++;
            f["field_" + i.toString()] = 1, l.name = "FIELD_" + i.toString();
          }
        }
        for (const f of s) await ae(f.expression, r, n);
        return e[0].groupby(s, []);
      }
      return He(e);
    });
  }, r.functions.getfeaturesetinfo = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 1, 1, n, a), !x(e[0])) return null;
      const t = await e[0].getFeatureSetInfo();
      return t ? v.convertObjectToArcadeDictionary({ layerId: t.layerId, layerName: t.layerName, itemId: t.itemId, serviceLayerUrl: t.serviceLayerUrl, webMapLayerId: t.webMapLayerId ?? null, webMapLayerTitle: t.webMapLayerTitle ?? null, className: null, objectClassId: null }, ue(n), !1, !1) : null;
    });
  }, r.signatures.push({ name: "getfeaturesetinfo", min: 1, max: 1 }), r.functions.filterbysubtypecode = function(n, a) {
    return r.standardFunctionAsync(n, a, async (p, I, e) => {
      if (E(e, 2, 2, n, a), x(e[0])) {
        const t = await e[0].load(), s = e[1];
        if (!xe(s)) throw new c(n, m.InvalidParameter, a);
        if (t.subtypeField) {
          const y = b.create(`${t.subtypeField}= ${e[1]}`, t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC);
          return new B({ parentfeatureset: e[0], whereclause: y });
        }
        if (t.typeIdField === null || t.typeIdField === "") throw new c(n, m.FeatureSetDoesNotHaveSubtypes, a);
        const o = b.create(`${t.typeIdField}= ${e[1]}`, t.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC);
        return new B({ parentfeatureset: e[0], whereclause: o });
      }
      throw new c(n, m.InvalidParameter, a);
    });
  }, r.signatures.push({ name: "filterbysubtypecode", min: 2, max: 2 }));
}
export {
  Ye as registerFunctions
};
//# sourceMappingURL=featuresetbase-Bq-ZKkVv.js.map
