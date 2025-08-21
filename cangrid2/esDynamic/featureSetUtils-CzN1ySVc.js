import { a9 as Oe, mj as Ee, mk as Pe, U as je, hi as qe, fn as v, ml as Ge, ak as ne, al as le, s as Ue, bx as ee, eX as Be, iB as Me, aj as P, df as We, dS as U, eC as Ce, mm as De, mn as oe, eJ as O, mo as $e, cW as Ve, $ as q, eV as Qe, fo as ue, a0 as de, mp as Ze, mq as ze, gX as Je, eU as Ke, gi as he, ei as Xe, Z as Ye, fa as ce } from "./main-DHXLMse1.js";
import { ay as te, az as b, T as He, ap as R, aq as fe, ar as pe, as as ye, at as _e, au as ge, aF as W, aG as se, aH as et, aI as $, N as tt, aJ as st, aK as Te, B as it, aL as rt, aM as me } from "./arcadeUtils-CLnCYna2.js";
import { O as D, s as I, a as C, n as x, t as N, r as at } from "./WhereClause-DzsyYw2j.js";
import { x as A, t as g, g as E, m as V, p as T, y as nt, A as lt, w as K, E as we, T as Fe, S as Se, F as ot, v as ke, a as ut, D as Q, L as dt, d as j, b as ht, f as ct, c as m } from "./SpatialFilter-CPFX1_KV.js";
import { c as ft, a as pt, n as yt } from "./TimeOnly-CHaaijop.js";
async function _t(d, e, t, s) {
  return wt(e, await gt(d, e, t, s), t, s);
}
async function gt(d, e, t, s) {
  const i = { ...s }, r = Ft(e, t), a = e.outStatistics?.[0] != null, n = Oe("featurelayer-pbf-statistics"), l = !a || n;
  let u;
  if (t?.format === "pbf" && l) try {
    u = await Ee(d, r, i);
  } catch (o) {
    if (o.name !== "query:parsing-pbf") throw o;
    t.format = "json";
  }
  return t?.format !== "json" && l || (u = await Pe(d, r, i)), mt(t?.fieldsIndex, u.fields), u;
}
function mt(d, e) {
  if (d != null && e != null) for (const t of e) {
    const s = d.get(t.name);
    s && Object.assign(t, s.toJSON());
  }
}
async function wt(d, e, t, s) {
  const i = t?.infoFor3D;
  if (!Re(d, i) || i == null || !e.assetMaps || !e.features?.length) return je.fromJSON(e);
  const { meshFeatureSetFromJSON: r } = await qe(import("./meshFeatureSet-OZ0DnGyX.js"), s);
  return r(d, i, e);
}
function Ft(d, e) {
  let t = v.from(d);
  t.sourceSpatialReference = t.sourceSpatialReference ?? e?.sourceSpatialReference ?? null, (e?.gdbVersion || e?.dynamicDataSource) && (t = t === d ? t.clone() : t, t.gdbVersion = d.gdbVersion || e.gdbVersion, t.dynamicDataSource = d.dynamicDataSource ? Ge.from(d.dynamicDataSource) : e.dynamicDataSource);
  const s = e?.infoFor3D;
  if (s != null && Re(d, s)) {
    t = t === d ? t.clone() : t, t.formatOf3DObjects = null;
    const { supportedFormats: i, queryFormats: r } = s, a = ne("model/gltf-binary", i) ?? le("glb", i), n = ne("model/gltf+json", i) ?? le("gtlf", i);
    for (const l of r) {
      if (l === a) {
        t.formatOf3DObjects = l;
        break;
      }
      l !== n || t.formatOf3DObjects || (t.formatOf3DObjects = l);
    }
    if (!t.formatOf3DObjects) throw new Ue("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
    if (t.outFields == null || !t.outFields.includes("*")) {
      t = t === d ? t.clone() : t, t.outFields == null && (t.outFields = []);
      const { originX: l, originY: u, originZ: o, translationX: h, translationY: c, translationZ: f, scaleX: p, scaleY: _, scaleZ: w, rotationX: y, rotationY: k, rotationZ: S, rotationDeg: J } = s.transformFieldRoles;
      t.outFields.push(l, u, o, h, c, f, p, _, w, y, k, S, J);
    }
  }
  return t;
}
function Re(d, e) {
  return e != null && d.returnGeometry === !0 && d.multipatchOption !== "xyFootprint" && !d.outStatistics;
}
let ve = class {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e, t, s) {
    this._layerById[t] = s, this._layerByName[e] = s;
  }
  async featureSetByName(e, t = !0, s = ["*"]) {
    return this._layerByName[e] === void 0 ? null : this._layerByName[e];
  }
  async featureSetById(e, t = !0, s = ["*"]) {
    return this._layerById[e] === void 0 ? null : this._layerById[e];
  }
  castToText(e = !1) {
    return "object, FeatureSetCollection";
  }
};
class B extends A {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e.parentfeatureset, e.whereclause instanceof D ? (this._whereclause = e.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new ee({ wkid: 4326 }), this.geometryType = te.point);
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getFilteredSet("", null, this._whereclause, null, e);
      return this._checkCancelled(e), this._whereClauseFunction !== null ? this._wset = new g(t._candidates.slice(0).concat(t._known.slice(0)), [], t._ordered, this._clonePageDefinition(t.pagesDefinition)) : this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    let t = this._parent?._isInFeatureSet(e);
    return t === b.NotInFeatureSet ? t : (t = this._idstates[e], t === void 0 ? b.Unknown : t);
  }
  _getFeature(e, t, s) {
    return this._parent._getFeature(e, t, s);
  }
  _getFeatures(e, t, s, i) {
    return this._parent._getFeatures(e, t, s, i);
  }
  _featureFromCache(e) {
    return this._parent._featureFromCache(e);
  }
  executeWhereClause(e) {
    return this._whereclause?.testFeature(e) ?? !1;
  }
  async executeWhereClauseDeferred(e) {
    if (this._whereClauseFunction !== null) {
      const t = this._whereClauseFunction(e);
      return Be(t), t;
    }
    return this.executeWhereClause(e);
  }
  async _fetchAndRefineFeatures(e, t, s) {
    const i = new g([], e, !1, null), r = Math.min(t, e.length);
    if (await this._parent?._getFeatures(i, -1, r, s), this._checkCancelled(s), this._whereClauseFunction == null) {
      for (let n = 0; n < r; n++) {
        const l = this._parent?._featureFromCache(e[n]);
        this.executeWhereClause(l) === !0 ? this._idstates[e[n]] = b.InFeatureSet : this._idstates[e[n]] = b.NotInFeatureSet;
      }
      return "success";
    }
    const a = [];
    for (let n = 0; n < r; n++) {
      const l = this._parent?._featureFromCache(e[n]);
      a.push(await this.executeWhereClauseDeferred(l));
    }
    for (let n = 0; n < t; n++) a[n] === !0 ? this._idstates[e[n]] = b.InFeatureSet : this._idstates[e[n]] = b.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e, t, s, i, r) {
    this._whereClauseFunction !== null || (s !== null ? this._whereclause !== null && (s = E(this._whereclause, s)) : s = this._whereclause), await this._ensureLoaded();
    const a = await this._parent._getFilteredSet(e, t, s, i, r);
    let n;
    return this._checkCancelled(r), n = this._whereClauseFunction !== null ? new g(a._candidates.slice(0).concat(a._known.slice(0)), [], a._ordered, this._clonePageDefinition(a.pagesDefinition)) : new g(a._candidates.slice(0), a._known.slice(0), a._ordered, this._clonePageDefinition(a.pagesDefinition)), n;
  }
  async _stat(e, t, s, i, r, a, n) {
    if (this._whereClauseFunction !== null) return r === null && s === "" && i === null ? this._manualStat(e, t, a, n) : { calculated: !1 };
    let l = this._whereclause;
    r !== null && this._whereclause !== null && (l = E(this._whereclause, r));
    const u = await this._parent._stat(e, t, s, i, l, a, n);
    return u.calculated === !1 ? r === null && s === "" && i === null ? this._manualStat(e, t, a, n) : { calculated: !1 } : u;
  }
  async _canDoAggregates(e, t, s, i, r) {
    return this._whereClauseFunction === null && (r !== null ? this._whereclause !== null && (r = E(this._whereclause, r)) : r = this._whereclause, this._parent !== null && this._parent._canDoAggregates(e, t, s, i, r));
  }
  async _getAggregatePagesDataSourceDefinition(e, t, s, i, r, a, n) {
    if (this._parent === null) throw new I(C.NeverReach);
    return r !== null ? this._whereclause !== null && (r = E(this._whereclause, r)) : r = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(e, t, s, i, r, a, n);
  }
  static registerAction() {
    A._featuresetFunctions.filter = function(e) {
      if (typeof e == "function") return new B({ parentfeatureset: this, whereclause: e });
      let t = null;
      return e instanceof D && (t = e), new B({ parentfeatureset: this, whereclause: t });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
let z = class {
  constructor(e) {
    this.field = e, this.sqlRewritable = !1;
  }
  postInitialization(e, t) {
  }
};
class X extends z {
  constructor(e) {
    super(e), this.sqlRewritable = !0;
  }
  extractValue(e) {
    return e.attributes[this.field.name];
  }
  rewriteSql(e) {
    return { rewritten: this.sqlRewritable, where: e };
  }
}
let St = class extends z {
  constructor(e, t, s) {
    super(He(e)), this.originalField = e, this.sqlRewritable = !0, this.field.name = t, this.field.alias = s;
  }
  rewriteSql(e, t) {
    return { rewritten: this.sqlRewritable, where: V(e, this.field.name, this.originalField.name, t.getFieldsIndex()) };
  }
  extractValue(e) {
    return e.attributes[this.originalField.name];
  }
}, bt = class F extends z {
  constructor(e, t, s) {
    super(e), this.codefield = t, this.lkp = s, this.reverseLkp = {};
    for (const i in s) this.reverseLkp[s[i]] = i;
    this.sqlRewritable = !0;
  }
  rewriteSql(e, t) {
    const s = this.evaluateNodeToWhereClause(e.parseTree, R.Standardised, this.field.name, this.codefield instanceof D ? T(this.codefield, R.Standardised) : this.codefield, e.parameters);
    return s.includes(F.BADNESS) ? { rewritten: !1, where: e } : { rewritten: this.sqlRewritable, where: D.create(s, t._parent.getFieldsIndex(), t.dateFieldsTimeZoneDefaultUTC) };
  }
  evaluateNodeToWhereClause(e, t, s = null, i = null, r) {
    let a, n, l, u;
    switch (e.type) {
      case "interval":
        return ot(this.evaluateNodeToWhereClause(e.value, t, s, i, r), e.qualifier, e.op);
      case "case-expression": {
        let o = " CASE ";
        e.format === "simple" && (o += this.evaluateNodeToWhereClause(e.operand, t, s, F.BADNESS, r));
        for (let h = 0; h < e.clauses.length; h++) o += " WHEN " + this.evaluateNodeToWhereClause(e.clauses[h].operand, t, s, F.BADNESS, r) + " THEN " + this.evaluateNodeToWhereClause(e.clauses[h].value, t, s, F.BADNESS, r);
        return e.else !== null && (o += " ELSE " + this.evaluateNodeToWhereClause(e.else, t, s, F.BADNESS, r)), o += " END ", o;
      }
      case "parameter": {
        const o = r[e.value.toLowerCase()];
        if (typeof o == "string") return "'" + o.toString().replaceAll("'", "''") + "'";
        if (fe(o)) return K(o, t);
        if (pe(o)) return K(o, t);
        if (ye(o)) return we(o, t);
        if (_e(o)) return Fe(o, t);
        if (ge(o)) return Se(o, t);
        if (Array.isArray(o)) {
          const h = [];
          for (let c = 0; c < o.length; c++) typeof o[c] == "string" ? h.push("'" + o[c].toString().replaceAll("'", "''") + "'") : fe(o[c]) || pe(o[c]) ? h.push(K(o[c], t)) : ye(o[c]) ? h.push(we(o[c], t)) : _e(o[c]) ? h.push(Fe(o[c], t)) : ge(o[c]) ? h.push(Se(o[c], t)) : h.push(o[c].toString());
          return h;
        }
        return o.toString();
      }
      case "expression-list":
        n = [];
        for (const o of e.value) n.push(this.evaluateNodeToWhereClause(o, t, s, i, r));
        return n;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e.expr, t, s, F.BADNESS, r) + " ) ";
      case "binary-expression":
        switch (e.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " AND " + this.evaluateNodeToWhereClause(e.right, t, s, i, r) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " OR " + this.evaluateNodeToWhereClause(e.right, t, s, i, r) + ") ";
          case "IS":
            if (e.right.type !== "null") throw new x(N.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IS NULL )";
          case "ISNOT":
            if (e.right.type !== "null") throw new x(N.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IS NOT NULL )";
          case "IN":
            if (a = [], e.right.type === "expression-list") {
              if (e.left.type === "column-reference" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const o = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  o.push(this.lkp[c.value].toString());
                }
                if (h) return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IN (" + o.join(",") + ")) ";
              }
              return a = this.evaluateNodeToWhereClause(e.right, t, s, i, r), " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IN (" + a.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e.right, t, s, i, r), Array.isArray(u) ? " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " IN (" + u + ")) ";
          case "NOT IN":
            if (a = [], e.right.type === "expression-list") {
              if (e.left.type === "column-reference" && e.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const o = [];
                let h = !0;
                for (const c of e.right.value) {
                  if (c.type !== "string") {
                    h = !1;
                    break;
                  }
                  if (this.lkp[c.value] === void 0) {
                    h = !1;
                    break;
                  }
                  o.push(this.lkp[c.value].toString());
                }
                if (h) return " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " NOT IN (" + o.join(",") + ")) ";
              }
              return a = this.evaluateNodeToWhereClause(e.right, t, s, i, r), " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " NOT IN (" + a.join(",") + ")) ";
            }
            return u = this.evaluateNodeToWhereClause(e.right, t, s, i, r), Array.isArray(u) ? " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " NOT IN (" + u.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e.left, t, s, i, r) + " NOT IN (" + u + ")) ";
          case "BETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r), " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "NOTBETWEEN":
            return l = this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r), " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " NOT BETWEEN " + l[0] + " AND " + l[1] + " ) ";
          case "LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " LIKE " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + ") ";
          case "NOT LIKE":
            return e.escape !== "" ? " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + " ESCAPE '" + e.escape + "') " : " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " NOT LIKE " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + ") ";
          case "<>":
          case "=":
            if (e.left.type === "column-reference" && e.right.type === "string") {
              if (e.left.column.toUpperCase() === this.field.name.toUpperCase() && this.lkp[e.right.value.toString()] !== void 0) return " (" + i + " " + e.operator + " " + this.lkp[e.right.value.toString()].toString() + ") ";
            } else if (e.right.type === "column-reference" && e.left.type === "string" && e.right.column.toUpperCase() === this.field.name.toUpperCase()) return " (" + this.lkp[e.right.value.toString()].toString() + " " + e.operator + " " + i + ") ";
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return " (" + this.evaluateNodeToWhereClause(e.left, t, s, F.BADNESS, r) + " " + e.operator + " " + this.evaluateNodeToWhereClause(e.right, t, s, F.BADNESS, r) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return e.value === !0 ? "1" : "0";
      case "string":
        return "'" + e.value.toString().replaceAll("'", "''") + "'";
      case "timestamp":
        return `timestamp '${e.value}'`;
      case "date":
        return `date '${e.value}'`;
      case "time":
        return `time '${e.value}'`;
      case "number":
        return e.value.toString();
      case "current-time":
        return lt(e.mode === "date", t);
      case "column-reference":
        return s && s.toLowerCase() === e.column.toLowerCase() ? "(" + i + ")" : e.column;
      case "data-type":
        return e.value;
      case "function": {
        const o = this.evaluateNodeToWhereClause(e.args, t, s, F.BADNESS, r);
        return nt(e.name, o, t);
      }
    }
    throw new x(N.UnsupportedSyntax, { node: e.type });
  }
  extractValue(e) {
    return this.codefield instanceof D ? this.reverseLkp[D.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e))] : this.reverseLkp[e.attributes[this.codefield]];
  }
};
bt.BADNESS = "_!!!_BAD_LKP_!!!!";
class It extends z {
  constructor(e, t) {
    super(e), this._sql = t;
  }
  rewriteSql(e, t) {
    return { rewritten: !0, where: V(e, this.field.name, T(this._sql, R.Standardised), t.getFieldsIndex()) };
  }
  extractValue(e) {
    return D.convertValueToStorageFormat(this._sql.calculateValueCompiled(e), this.field.type);
  }
}
class Ct extends A {
  static findField(e, t) {
    for (const s of e) if (s.name.toLowerCase() === t.toString().toLowerCase()) return s;
    return null;
  }
  constructor(e) {
    super(e), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e.extraFilter, this._parent = e.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e.adaptedFields;
  }
  _initialiseFeatureSet() {
    this._parent !== null ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new ee({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = te.point, this.typeIdField = "", this.types = null, this.subtypeField = null, this.subtypes = null), this.fields = [];
    for (const e of this.adaptedFields) e.postInitialization(this, this._parent), this.fields.push(e.field);
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      let t = null;
      return t = this._extraFilter ? await this._getFilteredSet("", null, null, null, e) : await this._parent?._getSet(e), this._checkCancelled(e), Me(t), this._wset = new g(t._candidates.slice(0), t._known.slice(0), t._ordered, this._clonePageDefinition(t.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  async _getFeatures(e, t, s, i) {
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0) return await this._expandPagedSet(e, a, 0, 0, i), this._getFeatures(e, t, s, i);
    let n = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length && (n++, n <= s && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[o]] === void 0 && (e._known[o] !== t && r.push(e._known[o]), r.length >= a))); o++) ;
    if (r.length === 0) return "success";
    e = new g([], r, e._ordered, null);
    const l = Math.min(r.length, s);
    await this._parent?._getFeatures(e, -1, l, i), this._checkCancelled(i);
    const u = [];
    for (let o = 0; o < l; o++) {
      const h = this._parent?._featureFromCache(r[o]);
      h !== void 0 && u.push({ geometry: h.geometry, attributes: h.attributes, id: r[o] });
    }
    for (const o of u) {
      const h = [];
      for (const c of this.adaptedFields) h[c.field.name] = c.extractValue(o);
      this._featureCache[o.id] = new P({ attributes: h, geometry: ft(o.geometry) });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new I(C.NeverReach);
  }
  async _getFilteredSet(e, t, s, i, r) {
    let a = !1;
    const n = this._reformulateWithoutAdaptions(s);
    a = n.cannot, s = n.where;
    let l = !1;
    if (i !== null) {
      l = !0;
      const h = [];
      for (const c of this.adaptedFields) if (!(c instanceof X) && i.scanForField(c.field.name) === !0) {
        if (!(c instanceof St)) {
          i = null, l = !1;
          break;
        }
        h.push({ field: c.field.name, newfield: c.originalField.name });
      }
      i && h.length > 0 && (i = i.replaceFields(h));
    }
    s !== null ? this._extraFilter !== null && (s = E(this._extraFilter, s)) : s = this._extraFilter, await this._ensureLoaded();
    const u = await this._parent._getFilteredSet(e, t, s, i, r);
    let o;
    return this._checkCancelled(r), o = a === !0 ? new g(u._candidates.slice(0).concat(u._known.slice(0)), [], l === !0 && u._ordered, this._clonePageDefinition(u.pagesDefinition)) : new g(u._candidates.slice(0), u._known.slice(0), l === !0 && u._ordered, this._clonePageDefinition(u.pagesDefinition)), o;
  }
  _reformulateWithoutAdaptions(e) {
    const t = { cannot: !1, where: e };
    if (e !== null) {
      for (const s of this.adaptedFields) if (ke(e, s.field.name) === !0) {
        const i = s.rewriteSql(e, this);
        if (i.rewritten !== !0) {
          t.cannot = !0, t.where = null;
          break;
        }
        t.where = i.where;
      }
    }
    return t;
  }
  async _stat(e, t, s, i, r, a, n) {
    let l = !1, u = this._reformulateWithoutAdaptions(t);
    if (l = u.cannot, t = u.where, u = this._reformulateWithoutAdaptions(r), l = l || u.cannot, (r = u.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, l === !0) return r === null && s === "" && i === null ? this._manualStat(e, t, a, n) : { calculated: !1 };
    const o = await this._parent._stat(e, t, s, i, r, a, n);
    return o.calculated === !1 ? r === null && s === "" && i === null ? this._manualStat(e, t, a, n) : { calculated: !1 } : o;
  }
  async _canDoAggregates(e, t, s, i, r) {
    if (this._parent === null) return !1;
    for (let l = 0; l < e.length; l++) for (const u of this.adaptedFields) if (e[l].toLowerCase() === u.field.name.toLowerCase() && !(u instanceof X)) return !1;
    const a = [];
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (u.workingexpr !== null) {
        const o = this._reformulateWithoutAdaptions(u.workingexpr);
        if (o.cannot) return !1;
        const h = u.clone();
        h.workingexpr = o.where, a.push(h);
      } else a.push(u);
    }
    const n = this._reformulateWithoutAdaptions(r);
    return !n.cannot && ((r = n.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, this._parent._canDoAggregates(e, a, s, i, r));
  }
  async _getAggregatePagesDataSourceDefinition(e, t, s, i, r, a, n) {
    if (this._parent === null) throw new I(C.NeverReach);
    const l = [];
    for (let o = 0; o < t.length; o++) {
      const h = t[o];
      if (h.workingexpr !== null) {
        const c = this._reformulateWithoutAdaptions(h.workingexpr);
        if (c.cannot) throw new I(C.NeverReach);
        const f = h.clone();
        f.workingexpr = c.where, l.push(f);
      } else l.push(h);
    }
    const u = this._reformulateWithoutAdaptions(r);
    if (u.cannot) throw new I(C.NeverReach);
    return (r = u.where) !== null ? this._extraFilter !== null && (r = E(this._extraFilter, r)) : r = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e, l, s, i, r, a, n);
  }
}
function be(d, e) {
  return d === e ? 0 : d === null ? -1 : e === null ? 1 : d < e ? -1 : 1;
}
class M {
  constructor(e) {
    const t = e.split(",");
    this._fields = [], this._directions = [];
    for (let s = 0; s < t.length; s++) {
      const i = t[s].match(/\S+/g);
      this._fields.push(i[0]), i.length === 2 ? i[1].toLowerCase() === "asc" ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let e = "";
    for (let t = 0; t < this._fields.length; t++) t !== 0 && (e += ","), e += this._fields[t], this._directions[t] === 1 ? e += " ASC" : e += " DESC";
    return e;
  }
  order(e) {
    e.sort((t, s) => {
      for (let i = 0; i < this._fields.length; i++) {
        const r = this.featureValue(t.feature, this._fields[i], i), a = this.featureValue(s.feature, this._fields[i], i);
        let n = 0;
        if (n = this._directions[i] === 1 ? be(r, a) : -1 * be(r, a), n !== 0) return n;
      }
      return 0;
    });
  }
  scanForField(e) {
    for (let t = 0; t < this._fields.length; t++) if (this._fields[t].toLowerCase().trim() === e.toLowerCase().trim()) return !0;
    return !1;
  }
  replaceFields(e) {
    let t = "";
    for (let s = 0; s < this._fields.length; s++) {
      s !== 0 && (t += ",");
      let i = this._fields[s];
      for (const r of e) if (i.toLowerCase() === r.field.toLowerCase()) {
        i = r.newfield;
        break;
      }
      t += i, this._directions[s] === 1 ? t += " ASC" : t += " DESC";
    }
    return new M(t);
  }
  featureValue(e, t, s) {
    const i = e.attributes[t];
    if (i !== void 0) return i;
    for (const r in e.attributes) if (t.toLowerCase() === r.toLowerCase()) return this._fields[s] = r, e.attributes[r];
    return null;
  }
}
let Y = class xe extends A {
  constructor(e) {
    super(e), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e.orderbyclause, this._parent = e.parentfeatureset;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, this._orderbyclause, e);
      return this._checkCancelled(e), this._wset = t, this._wset;
    }
    return this._wset;
  }
  async manualOrderSet(e, t) {
    const s = await this.getIdColumnDictionary(e, [], -1, t);
    this._orderbyclause?.order(s);
    const i = new g([], [], !0, null);
    for (let r = 0; r < s.length; r++) i._known.push(s[r].id);
    return i;
  }
  async getIdColumnDictionary(e, t, s, i) {
    if (s < e._known.length - 1) {
      const r = this._maxQueryRate();
      if (e._known[s + 1] === "GETPAGES") return await W(this._parent._expandPagedSet(e, r, 0, 0, i)), this.getIdColumnDictionary(e, t, s, i);
      let a = s + 1;
      const n = [];
      for (; a < e._known.length && e._known[a] !== "GETPAGES"; ) n.push(e._known[a]), a++;
      s += n.length;
      const l = await W(this._parent._getFeatureBatch(n, i));
      this._checkCancelled(i);
      for (const u of l) t.push({ id: u.attributes[this.objectIdField], feature: u });
      return this.getIdColumnDictionary(e, t, s, i);
    }
    return e._candidates.length > 0 ? (await W(this._refineSetBlock(e, this._maxProcessingRate(), i)), this._checkCancelled(i), this.getIdColumnDictionary(e, t, s, i)) : t;
  }
  _isInFeatureSet(e) {
    return this._parent._isInFeatureSet(e);
  }
  _getFeatures(e, t, s, i) {
    return this._parent._getFeatures(e, t, s, i);
  }
  _featureFromCache(e) {
    if (this._featureCache[e] === void 0) {
      const t = this._parent._featureFromCache(e);
      return t === void 0 ? void 0 : t === null ? null : (this._featureCache[e] = t, t);
    }
    return this._featureCache[e];
  }
  async _fetchAndRefineFeatures() {
    throw new I(C.NeverReach);
  }
  async _getFilteredSet(e, t, s, i, r) {
    await this._ensureLoaded();
    const a = await this._parent._getFilteredSet(e, t, s, i === null ? this._orderbyclause : i, r);
    this._checkCancelled(r);
    const n = new g(a._candidates.slice(0), a._known.slice(0), a._ordered, this._clonePageDefinition(a.pagesDefinition));
    let l = !0;
    if (a._candidates.length > 0 && (l = !1), n._ordered === !1) {
      let u = await this.manualOrderSet(n, r);
      return l === !1 && (t === null && s === null || (u = new g(u._candidates.slice(0).concat(u._known.slice(0)), [], u._ordered, this._clonePageDefinition(u.pagesDefinition)))), u;
    }
    return n;
  }
  static registerAction() {
    A._featuresetFunctions.orderBy = function(e) {
      return e === "" ? this : new xe({ parentfeatureset: this, orderbyclause: new M(e) });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};
function Dt(d) {
  if (d.parseTree.type === "function") {
    if (d.parseTree.args.value.length === 0) return { name: d.parseTree.name, expr: null };
    if (d.parseTree.args.value.length > 1) throw new x(N.MissingStatisticParameters);
    const e = D.create(ut(d.parseTree.args.value[0], R.Standardised, d.parameters), d.fieldsIndex, d.timeZone);
    return { name: d.parseTree.name, expr: e };
  }
  return null;
}
let Ie = class H {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e = new H();
    return e.field = this.field, e.tofieldname = this.tofieldname, e.typeofstat = this.typeofstat, e.workingexpr = this.workingexpr, e;
  }
  static parseStatField(e, t, s, i) {
    const r = new H();
    r.field = e;
    const a = D.create(t, s, i), n = Dt(a);
    if (n === null) throw new x(N.UnsupportedSqlFunction, { function: "" });
    const l = n.name.toUpperCase().trim();
    if (l === "MIN") {
      if (r.typeofstat = "MIN", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "min" });
    } else if (l === "MAX") {
      if (r.typeofstat = "MAX", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "max" });
    } else if (l === "COUNT") r.typeofstat = "COUNT", r.workingexpr = n.expr;
    else if (l === "STDEV") {
      if (r.typeofstat = "STDDEV", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "stdev" });
    } else if (l === "SUM") {
      if (r.typeofstat = "SUM", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "sum" });
    } else if (l === "MEAN") {
      if (r.typeofstat = "AVG", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: l });
    } else if (l === "AVG") {
      if (r.typeofstat = "AVG", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "avg" });
    } else {
      if (l !== "VAR") throw new x(N.UnsupportedSqlFunction, { function: l });
      if (r.typeofstat = "VAR", r.workingexpr = n.expr, a === null) throw new x(N.InvalidFunctionParameters, { function: "var" });
    }
    return r;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
};
function Tt(d) {
  if (!d) return "COUNT";
  switch (d.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
let kt = class Ne extends A {
  constructor(e) {
    super(e), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = !0, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e.parentfeatureset, this._config = e;
  }
  isTable() {
    return !0;
  }
  async _getSet(e) {
    if (this._wset === null) {
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _nextUniqueName(e) {
    for (; e["T" + this._uniqueIds.toString()] === 1; ) this._uniqueIds++;
    const t = "T" + this._uniqueIds.toString();
    return e[t] = 1, t;
  }
  _convertToEsriFieldType(e) {
    return e;
  }
  _initialiseFeatureSet() {
    const e = {};
    let t = !1, s = 1;
    const i = this._parent ? this._parent.getFieldsIndex() : new We([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; t === !1; ) {
      let a = !1;
      for (let n = 0; n < this._config.groupbyfields.length; n++) if (this._config.groupbyfields[n].name.toLowerCase() === this.objectIdField.toLowerCase()) {
        a = !0;
        break;
      }
      if (a === !1) {
        for (let n = 0; n < this._config.statsfields.length; n++) if (this._config.statsfields[n].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          a = !0;
          break;
        }
      }
      a === !1 ? t = !0 : (this.objectIdField = "ROW__ID" + s.toString(), s++);
    }
    for (const a of this._config.statsfields) {
      const n = new Ie();
      n.field = a.name, n.tofieldname = a.name, n.workingexpr = a.expression instanceof D ? a.expression : D.create(a.expression, i, this.dateFieldsTimeZoneDefaultUTC), n.typeofstat = Tt(a.statistic), this._decodedStatsfield.push(n);
    }
    this._decodedGroupbyfield = [];
    for (const a of this._config.groupbyfields) {
      const n = { name: a.name, singlefield: null, tofieldname: a.name, expression: a.expression instanceof D ? a.expression : D.create(a.expression, i, this.dateFieldsTimeZoneDefaultUTC), sqlType: null };
      this._decodedGroupbyfield.push(n);
    }
    if (this._parent !== null) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const a of this._parent.fields) e[a.name.toUpperCase()] = 1;
      this.types = null, this.subtypes = null, this.subtypeField = "";
    } else this.geometryType = te.point, this.typeIdField = "", this.types = null, this.subtypes = null, this.subtypeField = "", this.spatialReference = new ee({ wkid: 4326 });
    this.fields = [];
    const r = new Ie();
    r.field = this._nextUniqueName(e), r.tofieldname = this.objectIdField, r.workingexpr = D.create(this._parent.objectIdField, this._parent.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), r.typeofstat = "MIN", this._decodedStatsfield.push(r);
    for (const a of this._decodedGroupbyfield) {
      const n = new U();
      if (a.name = this._nextUniqueName(e), n.name = a.tofieldname, n.alias = n.name, Q(a.expression)) {
        const l = this._parent.getField(T(a.expression, R.Standardised));
        if (!l) throw new I(C.AggregationFieldNotFound);
        a.name = l.name, a.singlefield = l.name, this.phsyicalgroupbyfields.push(l.name), n.type = l.type, a.sqlType = l.type;
      } else {
        n.type = this._convertToEsriFieldType(dt(a.expression, this._parent.fields));
        const l = new U();
        l.name = a.name, l.alias = l.name, this.phsyicalgroupbyfields.push(a.name), this._adaptedFields.push(new It(l, a.expression)), this._candosimplegroupby = !1, a.sqlType = n.type;
      }
      this.fields.push(n);
    }
    if (this._adaptedFields.length > 0) for (const a of this._parent.fields) this._adaptedFields.push(new X(a));
    for (let a = 0; a < this._decodedStatsfield.length; a++) {
      const n = new U();
      let l = null;
      const u = this._decodedStatsfield[a];
      u.field = this._nextUniqueName(e), u.tofieldname === this.objectIdField && (this._internalObjectIdField = u.field), n.name = u.tofieldname, n.alias = n.name;
      const o = u.workingexpr !== null && Q(u.workingexpr) ? T(u.workingexpr, R.Standardised) : "";
      switch (this._decodedStatsfield[a].typeofstat) {
        case "SUM":
          if (o !== "") {
            if (l = this._parent.getField(o), !l) throw new I(C.AggregationFieldNotFound);
            n.type = l.type;
          } else n.type = "double";
          break;
        case "MIN":
        case "MAX":
          if (o !== "") {
            if (l = this._parent.getField(o), !l) throw new I(C.AggregationFieldNotFound);
            n.type = l.type;
          } else n.type = "double";
          break;
        case "COUNT":
          n.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if (o !== "" && (l = this._parent.getField(o), !l)) throw new I(C.AggregationFieldNotFound);
          n.type = "double";
      }
      this.fields.push(n);
    }
  }
  async _canDoAggregates() {
    return !1;
  }
  async _getFeatures(e, t, s, i) {
    t !== -1 && this._featureCache[t];
    const r = this._maxQuery;
    return this._checkIfNeedToExpandKnownPage(e, r) === !0 ? (await this._expandPagedSet(e, r, 0, 0, i), this._getFeatures(e, t, s, i)) : "success";
  }
  async _getFilteredSet(e, t, s, i, r) {
    if (e !== "") return new g([], [], !0, null);
    let a = null;
    const n = { ordered: !1, nowhereclause: !1 };
    if (await this._ensureLoaded(), s !== null) {
      for (let u = 0; u < this._decodedStatsfield.length; u++) if (ke(s, this._decodedStatsfield[u].tofieldname) === !0) {
        n.nowhereclause = !0, s = null;
        break;
      }
    }
    if (i !== null) {
      n.ordered = !0;
      for (let u = 0; u < this._decodedStatsfield.length; u++) if (i.scanForField(this._decodedStatsfield[u].tofieldname) === !0) {
        i = null, n.ordered = !1;
        break;
      }
      if (i !== null) {
        for (const u of this._decodedGroupbyfield) if (u.singlefield === null && i.scanForField(u.tofieldname) === !0) {
          i = null, n.ordered = !1;
          break;
        }
      }
    }
    if (this._candosimplegroupby !== !1 && await this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null)) {
      let u = null;
      s && (u = this._reformulateWhereClauseWithoutGroupByFields(s));
      let o = null;
      i && (o = this._reformulateOrderClauseWithoutGroupByFields(i));
      const h = await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, u, o, this._internalObjectIdField);
      return this._checkCancelled(r), a = n.nowhereclause === !0 ? new g(h._candidates.slice(0).concat(h._known.slice(0)), [], n.ordered === !0 && h._ordered, this._clonePageDefinition(h.pagesDefinition)) : new g(h._candidates.slice(0), h._known.slice(0), n.ordered === !0 && h._ordered, this._clonePageDefinition(h.pagesDefinition)), a;
    }
    let l = this._parent;
    if (this._adaptedFields.length > 0 && (l = new Ct({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), n.nowhereclause === !0) a = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new Y({ parentfeatureset: l, orderbyclause: new M(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    else {
      let u = l;
      if (s !== null) {
        let o = null;
        s && (o = this._reformulateWhereClauseWithoutGroupByFields(s)), u = new B({ parentfeatureset: u, whereclause: o });
      }
      a = new g(["GETPAGES"], [], !1, { aggregatefeaturesetpagedefinition: !0, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: !1, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new Y({ parentfeatureset: u, orderbyclause: new M(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    }
    return a;
  }
  _reformulateWhereClauseWithoutStatsFields(e) {
    for (const t of this._decodedStatsfield) e = V(e, t.tofieldname, T(t.workingexpr, R.Standardised), this._parent.getFieldsIndex());
    return e;
  }
  _reformulateWhereClauseWithoutGroupByFields(e) {
    for (const t of this._decodedGroupbyfield) t.tofieldname !== t.name && (e = V(e, t.tofieldname, T(t.expression, R.Standardised), this._parent.getFieldsIndex()));
    return e;
  }
  _reformulateOrderClauseWithoutGroupByFields(e) {
    const t = [];
    for (const s of this._decodedGroupbyfield) s.tofieldname !== s.name && t.push({ field: s.tofieldname, newfield: s.name });
    return t.length > 0 ? e.replaceFields(t) : e;
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.aggregatefeaturesetpagedefinition === !0 ? { aggregatefeaturesetpagedefinition: !0, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, internal: e.internal } : this._parent._clonePageDefinition(e);
  }
  async _refineSetBlock(e, t, s) {
    return this._checkIfNeedToExpandCandidatePage(e, this._maxQuery) === !0 ? (await this._expandPagedSet(e, this._maxQuery, 0, 0, s), this._refineSetBlock(e, t, s)) : (this._checkCancelled(s), e._candidates.length, this._refineKnowns(e, t), e._candidates.length, e._candidates.length, e);
  }
  _expandPagedSet(e, t, s, i, r) {
    return this._expandPagedSetFeatureSet(e, t, s, i, r);
  }
  async _getPhysicalPage(e, t, s) {
    if (e.pagesDefinition.aggregatefeaturesetpagedefinition === !0) return this._sequentialGetPhysicalItem(e, e.pagesDefinition.resultRecordCount, s, []);
    const i = await this._getAgregagtePhysicalPage(e, t, s);
    for (const r of i) {
      const a = { geometry: r.geometry, attributes: {} }, n = {};
      for (const l in r.attributes) n[l.toLowerCase()] = r.attributes[l];
      for (const l of this._decodedGroupbyfield) a.attributes[l.tofieldname] = n[l.name.toLowerCase()];
      for (const l of this._decodedStatsfield) a.attributes[l.tofieldname] = n[l.field.toLowerCase()];
      this._featureCache[a.attributes[this.objectIdField]] = new P(a);
    }
    return i.length;
  }
  _sequentialGetPhysicalItem(e, t, s, i) {
    return new Promise((r, a) => {
      e.pagesDefinition.internal.iterator === null && (e.pagesDefinition.internal.iterator = e.pagesDefinition.internal.subfeatureset.iterator(s)), e.pagesDefinition.internal.fullyResolved === !0 || t === 0 ? r(i.length) : this._nextAggregateItem(e, t, s, i, (n) => {
        n === null ? r(i.length) : (t -= 1, r(this._sequentialGetPhysicalItem(e, t, s, i)));
      }, a);
    });
  }
  _nextAggregateItem(e, t, s, i, r, a) {
    try {
      W(e.pagesDefinition.internal.iterator.next()).then((n) => {
        if (n === null) if (e.pagesDefinition.internal.workingItem !== null) {
          const l = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
          i.push(l), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(l.attributes[this.objectIdField]), e.pagesDefinition.internal.fullyResolved = !0, r(null);
        } else e.pagesDefinition.internal.fullyResolved = !0, r(null);
        else {
          const l = this._generateAggregateHash(n);
          if (e.pagesDefinition.internal.workingItem === null) e.pagesDefinition.internal.workingItem = { features: [n], id: l };
          else {
            if (l !== e.pagesDefinition.internal.workingItem.id) {
              const u = this._calculateAndAppendAggregateItem(e.pagesDefinition.internal.workingItem);
              return i.push(u), e.pagesDefinition.internal.workingItem = null, e.pagesDefinition.internal.set.push(u.attributes[this.objectIdField]), t -= 1, e.pagesDefinition.internal.workingItem = { features: [n], id: l }, void r(u);
            }
            e.pagesDefinition.internal.workingItem.features.push(n);
          }
          this._nextAggregateItem(e, t, s, i, r, a);
        }
      }, a);
    } catch (n) {
      a(n);
    }
  }
  _calculateFieldStat(e, t, s) {
    const i = [];
    for (let r = 0; r < e.features.length; r++) if (t.workingexpr !== null) {
      const a = t.workingexpr.calculateValue(e.features[r]);
      a !== null && (a instanceof pt || a instanceof yt ? i.push(a.toNumber()) : a instanceof at ? i.push(a.toMilliseconds()) : i.push(a));
    } else i.push(null);
    switch (t.typeofstat) {
      case "MIN":
        s.attributes[t.tofieldname] = j("min", i, -1);
        break;
      case "MAX":
        s.attributes[t.tofieldname] = j("max", i, -1);
        break;
      case "SUM":
        s.attributes[t.tofieldname] = j("sum", i, -1);
        break;
      case "COUNT":
        s.attributes[t.tofieldname] = i.length;
        break;
      case "VAR":
        s.attributes[t.tofieldname] = j("var", i, -1);
        break;
      case "STDDEV":
        s.attributes[t.tofieldname] = j("stddev", i, -1);
        break;
      case "AVG":
        s.attributes[t.tofieldname] = j("avg", i, -1);
    }
    return !0;
  }
  _calculateAndAppendAggregateItem(e) {
    const t = { attributes: {}, geometry: null };
    for (const i of this._decodedGroupbyfield) {
      const r = i.singlefield ? e.features[0].attributes[i.singlefield] : D.convertValueToStorageFormat(i.expression.calculateValue(e.features[0]), i.sqlType);
      t.attributes[i.tofieldname] = r;
    }
    for (const i of this._decodedStatsfield) this._calculateFieldStat(e, i, t);
    const s = [];
    for (let i = 0; i < this._decodedStatsfield.length; i++) s.push(this._calculateFieldStat(e, this._decodedStatsfield[i], t));
    return this._featureCache[t.attributes[this.objectIdField]] = new P({ attributes: t.attributes, geometry: t.geometry }), t;
  }
  _generateAggregateHash(e) {
    let t = "";
    for (const s of this._decodedGroupbyfield) {
      const i = s.singlefield ? e.attributes[s.singlefield] : s.expression.calculateValue(e);
      t += i == null ? ":" : ":" + i.toString();
    }
    return Ce(t, De.String);
  }
  async _stat() {
    return { calculated: !1 };
  }
  async getFeatureByObjectId() {
    return null;
  }
  static registerAction() {
    A._featuresetFunctions.groupby = function(e, t) {
      return new Ne({ parentfeatureset: this, groupbyfields: e, statsfields: t });
    };
  }
};
class ie extends A {
  constructor(e) {
    super(e), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = e.topnum, this._parent = e.parentfeatureset;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._parent._getSet(e);
      return this._wset = new g(t._candidates.slice(0), t._known.slice(0), !1, this._clonePageDefinition(t.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
    }
    return this._wset;
  }
  _setKnownLength(e) {
    return e._known.length > 0 && e._known[e._known.length - 1] === "GETPAGES" ? e._known.length - 1 : e._known.length;
  }
  _isInFeatureSet(e) {
    const t = this._parent._isInFeatureSet(e);
    if (t === b.NotInFeatureSet) return t;
    const s = this._idstates[e];
    return s === b.InFeatureSet || s === b.NotInFeatureSet ? s : t === b.InFeatureSet && s === void 0 ? this._countedin < this._topnum ? (this._idstates[e] = b.InFeatureSet, this._countedin++, b.InFeatureSet) : (this._idstates[e] = b.NotInFeatureSet, b.NotInFeatureSet) : b.Unknown;
  }
  async _expandPagedSet(e, t, s, i, r) {
    if (this._parent === null) throw new I(C.NotImplemented);
    if (t > this._topnum && (t = this._topnum), this._countedin >= this._topnum && e.pagesDefinition.internal.set.length <= e.pagesDefinition.resultOffset) {
      let n = e._known.length;
      return n > 0 && e._known[n - 1] === "GETPAGES" && (e._known.length = n - 1), n = e._candidates.length, n > 0 && e._candidates[n - 1] === "GETPAGES" && (e._candidates.length = n - 1), "success";
    }
    const a = await this._parent._expandPagedSet(e, t, s, i, r);
    return this._setKnownLength(e) > this._topnum && (e._known.length = this._topnum), this._setKnownLength(e) >= this._topnum && (e._candidates.length = 0), a;
  }
  async _getFeatures(e, t, s, i) {
    const r = [], a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0) return await this._expandPagedSet(e, a, 0, 0, i), this._getFeatures(e, t, s, i);
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    let n = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length && (n++, n <= s && (e._lastFetchedIndex += 1), !(this._featureCache[e._known[o]] === void 0 && (e._known[o] !== t && r.push(e._known[o]), r.length > a))); o++) ;
    if (r.length === 0) return "success";
    const l = new g([], r, !1, null), u = Math.min(r.length, s);
    await this._parent._getFeatures(l, -1, u, i);
    for (let o = 0; o < u; o++) {
      const h = this._parent._featureFromCache(r[o]);
      h !== void 0 && (this._featureCache[r[o]] = h);
    }
    return "success";
  }
  async _getFilteredSet(e, t, s, i, r) {
    await this._ensureLoaded();
    const a = await this._getSet(r);
    return new g(a._candidates.slice(0).concat(a._known.slice(0)), [], !1, this._clonePageDefinition(a.pagesDefinition));
  }
  _refineKnowns(e, t) {
    let s = 0, i = null;
    const r = [];
    for (let a = 0; a < e._candidates.length; a++) {
      const n = this._isInFeatureSet(e._candidates[a]);
      if (n === b.InFeatureSet) {
        if (e._known.push(e._candidates[a]), s += 1, i === null ? i = { start: a, end: a } : i.end === a - 1 ? i.end = a : (r.push(i), i = { start: a, end: a }), e._known.length >= this._topnum) break;
      } else if (n === b.NotInFeatureSet) i === null ? i = { start: a, end: a } : i.end === a - 1 ? i.end = a : (r.push(i), i = { start: a, end: a }), s += 1;
      else if (n === b.Unknown) break;
      if (s >= t) break;
    }
    i !== null && r.push(i);
    for (let a = r.length - 1; a >= 0; a--) e._candidates.splice(r[a].start, r[a].end - r[a].start + 1);
    this._setKnownLength(e) > this._topnum && (e._known = e._known.slice(0, this._topnum)), this._setKnownLength(e) >= this._topnum && (e._candidates = []);
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  static registerAction() {
    A._featuresetFunctions.top = function(e) {
      return new ie({ parentfeatureset: this, topnum: e });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
class Z extends A {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = !1, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = !1, this._requestStandardised = !1, this._useDefinitionExpression = !0, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e) {
    this._pageJustIds = e;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e) {
    const t = this.urlQueryPath + "," + et(e.toJSON());
    return Ce(t, De.String);
  }
  async loadImpl() {
    return this._layer.loaded === !0 ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this.hasZ = this._layer?.capabilities?.data?.supportsZ === !0, this.hasM = this._layer?.capabilities?.data?.supportsM === !0, this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const e = [], t = [];
      for (const s of this.fields) if (s.type === "oid") e.push(s), t.push(s.name);
      else for (const i of this._overrideFields) if (i.toLowerCase() === s.name.toLowerCase()) {
        e.push(s), t.push(s.name);
        break;
      }
      this.fields = e, this._overrideFields = t;
    }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e = this._layer.source.sourceJSON.currentVersion;
      this._layer.source.sourceJSON.useStandardizedQueries === !0 ? (this._databaseType = R.StandardisedNoInterval, e != null && e >= 10.61 && (this._databaseType = R.Standardised)) : e != null && (e >= 10.5 && (this._databaseType = R.StandardisedNoInterval, this._requestStandardised = !0), e >= 10.61 && (this._databaseType = R.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields) e.type === "global-id" && (this.globalIdField = e.name);
    this._layer.type === "subtype-group" ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : this._layer.type === "oriented-imagery" ? (this.subtypeField = null, this.subtypes = null, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types) : (this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  async _refineSetBlock(e) {
    return e;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e) {
    await this._ensureLoaded();
    const t = new v();
    this.datesInUnknownTimezone && (t.timeReferenceUnknownClient = !0), t.where = e.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t), !0;
    } catch {
      return !1;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || this._layer.capabilities.query.supportsPagination !== !0);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e) {
    const t = this._layer?.capabilities?.query;
    return !e.outStatistics && t?.supportsFormatPBF === !0 && t?.supportsQuantizationEditMode === !0;
  }
  async queryPBF(e) {
    return e.quantizationParameters = { mode: "edit" }, (await _t(this._layer.parsedUrl, e, { format: "pbf" }, {})).unquantize();
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", source: this, canQueryRelated: !0, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e, t) {
    e.returnZ = this.hasZ, e.returnM = this.hasM;
    const s = t === "execute" ? ue : t === "executeForCount" ? Ze : ze, i = t === "execute" && this.pbfSupportedForQuery(e);
    let r = null;
    if (this.recentlyUsedQueries) {
      const a = this.convertQueryToLruCacheKey(e);
      r = this.recentlyUsedQueries.getFromCache(a), r === null && (r = i !== !0 ? s(this._layer.parsedUrl.path, e) : this.queryPBF(e), this.recentlyUsedQueries.addToCache(a, r), r = r.catch((n) => {
        throw this.recentlyUsedQueries?.removeFromCache(a), n;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e, method: t }), r === null && (r = i !== !0 ? s(this._layer.parsedUrl.path, e) : this.queryPBF(e)), r;
  }
  async _getFilteredSet(e, t, s, i, r) {
    const a = await this.databaseType();
    if (this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    if (this._canUsePagination()) return this._getFilteredSetUsingPaging(e, t, s, i, r);
    let n = "", l = !1;
    i !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (n = i.constructClause(), l = !0);
    const u = new v();
    this.datesInUnknownTimezone && (u.timeReferenceUnknownClient = !0), u.where = s === null ? t === null ? "1=1" : "" : T(s, a), this._requestStandardised && (u.sqlFormat = "standard"), u.spatialRelationship = this._makeRelationshipEnum(e), u.outSpatialReference = this.spatialReference, u.orderByFields = n !== "" ? n.split(",") : null, u.geometry = t === null ? null : t, u.relationParameter = this._makeRelationshipParam(e);
    let o = await this.executeQuery(u, "executeForIds");
    return o === null && (o = []), this._checkCancelled(r), new g([], o, l, null);
  }
  _expandPagedSet(e, t, s, i, r) {
    return this._expandPagedSetFeatureSet(e, t, s, i, r);
  }
  async _getFilteredSetUsingPaging(e, t, s, i, r) {
    let a = "", n = !1;
    i !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (a = i.constructClause(), n = !0);
    const l = await this.databaseType();
    let u = s === null ? t === null ? "1=1" : "" : T(s, l);
    this._layer.definitionExpression && this._useDefinitionExpression && (u = u !== "" ? "((" + this._layer.definitionExpression + ") AND (" + u + "))" : this._layer.definitionExpression);
    let o = this._maxQueryRate();
    const h = this._layer.capabilities?.query.maxRecordCount;
    h != null && h < o && (o = h);
    let c = null;
    if (this._pageJustIds === !0) c = new g([], ["GETPAGES"], n, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: this._layer.objectIdField, resultRecordCount: o, resultOffset: 0, geometry: t === null ? null : t, where: u, orderByFields: a, returnGeometry: !1, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
    else {
      let f = !0;
      this._removeGeometry === !0 && (f = !1);
      const p = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]);
      c = new g([], ["GETPAGES"], n, { spatialRel: this._makeRelationshipEnum(e), relationParam: this._makeRelationshipParam(e), outFields: p.join(","), resultRecordCount: o, resultOffset: 0, geometry: t === null ? null : t, where: u, orderByFields: a, returnGeometry: f, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
    }
    return await this._expandPagedSet(c, o, 0, 1, r), c;
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, spatialRel: e.spatialRel, relationParam: e.relationParam, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  async _getPhysicalPage(e, t, s) {
    const i = e.pagesDefinition.internal.lastRetrieved, r = i, a = e.pagesDefinition.internal.lastPage, n = new v();
    this._requestStandardised && (n.sqlFormat = "standard"), this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0), n.spatialRelationship = e.pagesDefinition.spatialRel, n.relationParameter = e.pagesDefinition.relationParam, n.outFields = e.pagesDefinition.outFields.split(","), n.num = e.pagesDefinition.resultRecordCount, n.start = e.pagesDefinition.internal.lastPage, n.geometry = e.pagesDefinition.geometry, n.where = e.pagesDefinition.where, n.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, n.returnGeometry = e.pagesDefinition.returnGeometry, n.outSpatialReference = this.spatialReference;
    const l = await this.executeQuery(n, "execute");
    if (this._checkCancelled(s), e.pagesDefinition.internal.lastPage !== a) return "done";
    const u = this._layer.objectIdField;
    for (let o = 0; o < l.features.length; o++) e.pagesDefinition.internal.set[r + o] = l.features[o].attributes[u];
    if (this._pageJustIds === !1) for (let o = 0; o < l.features.length; o++) this._featureCache[l.features[o].attributes[u]] = l.features[o];
    return (l.exceededTransferLimit === void 0 && l.features.length !== e.pagesDefinition.resultRecordCount || l.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = i + l.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, "done";
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let s = !1;
    for (const i of t) if (i.toUpperCase() === this.objectIdField.toUpperCase()) {
      s = !0;
      break;
    }
    return s === !1 && t.push(this.objectIdField), t;
  }
  async _getFeatures(e, t, s, i) {
    const r = [];
    if (t !== -1 && this._featureCache[t] === void 0 && r.push(t), this._checkIfNeedToExpandKnownPage(e, this._maxProcessingRate()) === !0) return await this._expandPagedSet(e, this._maxProcessingRate(), 0, 0, i), this._getFeatures(e, t, s, i);
    let a = 0;
    for (let o = e._lastFetchedIndex; o < e._known.length; o++) {
      if (e._lastFetchedIndex += 1, a++, this._featureCache[e._known[o]] === void 0) {
        let h = !1;
        if (this._layer._mode !== null && this._layer._mode !== void 0) {
          const c = this._layer._mode;
          if (c._featureMap[e._known[o]] !== void 0) {
            const f = c._featureMap[e._known[o]];
            f !== null && (h = !0, this._featureCache[e._known[o]] = f);
          }
        }
        if (h === !1 && (e._known[o] !== t && r.push(e._known[o]), r.length >= this._maxProcessingRate() - 1)) break;
      }
      if (a >= s && r.length === 0) break;
    }
    if (r.length === 0) return "success";
    const n = new v();
    this._requestStandardised && (n.sqlFormat = "standard"), this.datesInUnknownTimezone && (n.timeReferenceUnknownClient = !0), n.objectIds = r, n.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), n.returnGeometry = !0, this._removeGeometry === !0 && (n.returnGeometry = !1), n.outSpatialReference = this.spatialReference;
    const l = await this.executeQuery(n, "execute");
    if (this._checkCancelled(i), l.error !== void 0) throw new I(C.RequestFailed, { reason: l.error });
    const u = this._layer.objectIdField;
    for (let o = 0; o < l.features.length; o++) this._featureCache[l.features[o].attributes[u]] = l.features[o];
    return "success";
  }
  async _getDistinctPages(e, t, s, i, r, a, n, l, u) {
    await this._ensureLoaded();
    const o = await this.databaseType();
    let h = s.parseTree.column;
    const c = this._layer.fields ?? [];
    for (let y = 0; y < c.length; y++) if (c[y].name.toLowerCase() === h.toLowerCase()) {
      h = c[y].name;
      break;
    }
    const f = new v();
    this._requestStandardised && (f.sqlFormat = "standard"), this.datesInUnknownTimezone && (f.timeReferenceUnknownClient = !0);
    let p = a === null ? r === null ? "1=1" : "" : T(a, o);
    this._layer.definitionExpression && this._useDefinitionExpression && (p = p !== "" ? "((" + this._layer.definitionExpression + ") AND (" + p + "))" : this._layer.definitionExpression), f.where = p, f.spatialRelationship = this._makeRelationshipEnum(i), f.relationParameter = this._makeRelationshipParam(i), f.geometry = r === null ? null : r, f.returnDistinctValues = !0, f.returnGeometry = !1, f.outFields = [h];
    const _ = await this.executeQuery(f, "execute");
    if (this._checkCancelled(u), !_.hasOwnProperty("features")) throw new I(C.InvalidStatResponse);
    let w = !1;
    for (let y = 0; y < c.length; y++) if (c[y].name === h) {
      c[y].type === "date" && (w = !0);
      break;
    }
    for (let y = 0; y < _.features.length; y++) {
      if (w) {
        const k = _.features[y].attributes[h];
        k !== null ? l.push(new Date(k)) : l.push(k);
      } else l.push(_.features[y].attributes[h]);
      if (l.length >= n) break;
    }
    return _.features.length === 0 ? l : _.features.length === this._layer.capabilities?.query.maxRecordCount && l.length < n ? { calculated: !0, result: await this._getDistinctPages(e + _.features.length, t, s, i, r, a, n, l, u) } : l;
  }
  async _distinctStat(e, t, s, i, r, a, n) {
    return { calculated: !0, result: await this._getDistinctPages(0, e, t, s, i, r, a, [], n) };
  }
  isTable() {
    return this._layer.isTable || this._layer.geometryType === null || this._layer.type === "table" || this._layer.geometryType === "" || this._layer.geometryType === "esriGeometryNull";
  }
  async _countstat(e, t, s, i) {
    const r = await this.databaseType(), a = new v();
    if (this._requestStandardised && (a.sqlFormat = "standard"), this.isTable() && s && t !== null && t !== "") return { calculated: !0, result: 0 };
    let n = i === null ? s === null ? "1=1" : "" : T(i, r);
    return this._layer.definitionExpression && this._useDefinitionExpression && (n = n !== "" ? "((" + this._layer.definitionExpression + ") AND (" + n + "))" : this._layer.definitionExpression), a.where = n, this.datesInUnknownTimezone && (a.timeReferenceUnknownClient = !0), a.where = n, a.spatialRelationship = this._makeRelationshipEnum(t), a.relationParameter = this._makeRelationshipParam(t), a.geometry = s === null ? null : s, a.returnGeometry = !1, { calculated: !0, result: await this.executeQuery(a, "executeForCount") };
  }
  async _stats(e, t, s, i, r, a, n) {
    await this._ensureLoaded();
    const l = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsSqlExpression === !0, u = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsStatistics === !0, o = this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsDistinct === !0;
    if (e === "count") return o ? this._countstat(e, s, i, r) : { calculated: !1 };
    if (u === !1 || Q(t) === !1 && l === !1 || t.isStandardized === !1) return s !== "" || r !== null ? { calculated: !1 } : this._manualStat(e, t, a, n);
    if (e === "distinct") return o === !1 ? s !== "" || r !== null ? { calculated: !1 } : this._manualStat(e, t, a, n) : this._distinctStat(e, t, s, i, r, a, n);
    const h = await this.databaseType();
    if (this.isTable() && i && s !== null && s !== "") return { calculated: !0, result: null };
    const c = new v();
    this._requestStandardised && (c.sqlFormat = "standard");
    let f = r === null ? i === null ? "1=1" : "" : T(r, h);
    this._layer.definitionExpression && this._useDefinitionExpression && (f = f !== "" ? "((" + this._layer.definitionExpression + ") AND (" + f + "))" : this._layer.definitionExpression), c.where = f, c.spatialRelationship = this._makeRelationshipEnum(s), c.relationParameter = this._makeRelationshipParam(s), c.geometry = i === null ? null : i, this.datesInUnknownTimezone && (c.timeReferenceUnknownClient = !0);
    const p = new oe();
    p.statisticType = ht(e), p.onStatisticField = T(t, h), p.outStatisticFieldName = "ARCADE_STAT_RESULT", c.returnGeometry = !1;
    let _ = "ARCADE_STAT_RESULT";
    c.outStatistics = [p];
    const w = await this.executeQuery(c, "execute");
    if (!w.hasOwnProperty("features") || w.features.length === 0) throw new I(C.InvalidStatResponse);
    let y = !1;
    const k = w.fields ?? [];
    for (let S = 0; S < k.length; S++) if (k[S].name.toUpperCase() === "ARCADE_STAT_RESULT") {
      _ = k[S].name, k[S].type === "date" && (y = !0);
      break;
    }
    if (y) {
      let S = w.features[0].attributes[_];
      return S !== null && (S = new Date(w.features[0].attributes[_])), { calculated: !0, result: S };
    }
    return { calculated: !0, result: w.features[0].attributes[_] };
  }
  _stat(e, t, s, i, r, a, n) {
    return this._stats(e, t, s, i, r, a, n);
  }
  async _canDoAggregates(e, t) {
    await this._ensureLoaded();
    let s = !1;
    const i = this._layer.capabilities?.query, r = i?.supportsSqlExpression === !0;
    if (i != null && i.supportsStatistics === !0 && i.supportsOrderBy === !0 && (s = !0), s) for (let a = 0; a < t.length - 1; a++) (t[a].workingexpr?.isStandardized === !1 || Q(t[a].workingexpr) === !1 && r === !1) && (s = !1);
    return s !== !1;
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e, t, s, i, r, a, n) {
    await this._ensureLoaded();
    const l = await this.databaseType();
    let u = "", o = !1, h = !1;
    a !== null && this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsOrderBy === !0 && (u = a.constructClause(), h = !0), this._layer.capabilities && this._layer.capabilities.query && this._layer.capabilities.query.supportsPagination === !1 && (h = !1, o = !0, u = this._layer.objectIdField);
    const c = [];
    for (let w = 0; w < t.length; w++) {
      const y = new oe();
      y.onStatisticField = t[w].workingexpr !== null ? T(t[w].workingexpr, l) : "", y.outStatisticFieldName = t[w].field, y.statisticType = t[w].toStatisticsName(), c.push(y);
    }
    u === "" && (u = e.join(","));
    let f = this._maxQueryRate();
    const p = this._layer.capabilities?.query.maxRecordCount;
    p != null && p < f && (f = p);
    let _ = r === null ? i === null ? "1=1" : "" : T(r, l);
    return this._layer.definitionExpression && this._useDefinitionExpression && (_ = _ !== "" ? "((" + this._layer.definitionExpression + ") AND (" + _ + "))" : this._layer.definitionExpression), new g([], ["GETPAGES"], h, { groupbypage: !0, spatialRel: this._makeRelationshipEnum(s), relationParam: this._makeRelationshipParam(s), outFields: ["*"], useOIDpagination: o, generatedOid: n, resultRecordCount: f, resultOffset: 0, groupByFieldsForStatistics: e, outStatistics: c, geometry: i === null ? null : i, where: _, orderByFields: u, returnGeometry: !1, returnIdsOnly: !1, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } });
  }
  async _getAgregagtePhysicalPage(e, t, s) {
    let i = e.pagesDefinition.where;
    e.pagesDefinition.useOIDpagination === !0 && (i = i !== "" ? "(" + i + ") AND (" + e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString() + ")" : e.pagesDefinition.generatedOid + ">" + e.pagesDefinition.internal.lastMaxId.toString());
    const r = e.pagesDefinition.internal.lastRetrieved, a = r, n = e.pagesDefinition.internal.lastPage, l = new v();
    if (this._requestStandardised && (l.sqlFormat = "standard"), l.where = i, l.spatialRelationship = e.pagesDefinition.spatialRel, l.relationParameter = e.pagesDefinition.relationParam, l.outFields = e.pagesDefinition.outFields, l.outStatistics = e.pagesDefinition.outStatistics, l.geometry = e.pagesDefinition.geometry, l.groupByFieldsForStatistics = e.pagesDefinition.groupByFieldsForStatistics, l.num = e.pagesDefinition.resultRecordCount, l.start = e.pagesDefinition.internal.lastPage, l.returnGeometry = e.pagesDefinition.returnGeometry, this.datesInUnknownTimezone && (l.timeReferenceUnknownClient = !0), l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, this.isTable() && l.geometry && l.spatialRelationship) return [];
    const u = await this.executeQuery(l, "execute");
    if (this._checkCancelled(s), !u.hasOwnProperty("features")) throw new I(C.InvalidStatResponse);
    const o = [];
    if (e.pagesDefinition.internal.lastPage !== n) return [];
    u.features.length > 0 && u.features[0].attributes[e.pagesDefinition.generatedOid] === void 0 && (e.pagesDefinition.generatedOid = e.pagesDefinition.generatedOid.toLowerCase());
    for (let h = 0; h < u.features.length; h++) e.pagesDefinition.internal.set[a + h] = u.features[h].attributes[e.pagesDefinition.generatedOid];
    for (let h = 0; h < u.features.length; h++) o.push(new P({ attributes: u.features[h].attributes, geometry: null }));
    return e.pagesDefinition.useOIDpagination === !0 ? u.features.length === 0 ? e.pagesDefinition.internal.fullyResolved = !0 : e.pagesDefinition.internal.lastMaxId = u.features[u.features.length - 1].attributes[e.pagesDefinition.generatedOid] : (u.exceededTransferLimit === void 0 && u.features.length !== e.pagesDefinition.resultRecordCount || u.exceededTransferLimit === !1) && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = r + u.features.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, o;
  }
  static create(e, t, s, i, r) {
    const a = new O({ url: e, outFields: t === null ? ["*"] : t });
    return new Z({ layer: a, spatialReference: s, lrucache: i, interceptor: r });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON?.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return $(this._layer.parsedUrl.path);
  }
  async queryAttachments(e, t, s, i, r) {
    function a(l) {
      const u = l.capabilities;
      return u?.data.supportsAttachment && u?.operations.supportsQueryAttachments;
    }
    const n = this._layer;
    if (a(n)) {
      const l = { objectIds: [e], returnMetadata: r };
      (t && t > 0 || s && s > 0) && (l.size = [t && t > 0 ? t : 0, s && s > 0 ? s : t + 1]), i && i.length > 0 && (l.attachmentTypes = i), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: n, query: l, method: "attachments" });
      const u = await n.queryAttachments(new $e(l)), o = [];
      return u && u[e] && u[e].forEach((h) => {
        const c = this._layer.parsedUrl.path + "/" + e.toString() + "/attachments/" + h.id.toString();
        let f = null;
        r && h.exifInfo && (f = tt.convertJsonToArcade(h.exifInfo, "system", !0)), o.push(new st(h.id, h.name, h.contentType, h.size, c, f, h.keywords ?? null));
      }), o;
    }
    return [];
  }
  async queryRelatedFeatures(e) {
    const t = { f: "json", relationshipId: e.relationshipId.toString(), definitionExpression: e.where, outFields: e.outFields?.join(","), returnGeometry: e.returnGeometry.toString() };
    e.resultOffset !== void 0 && e.resultOffset !== null && (t.resultOffset = e.resultOffset.toString()), e.resultRecordCount !== void 0 && e.resultRecordCount !== null && (t.resultRecordCount = e.resultRecordCount.toString()), e.orderByFields && (t.orderByFields = e.orderByFields.join(",")), e.objectIds && e.objectIds.length > 0 && (t.objectIds = e.objectIds.join(",")), e.outSpatialReference && (t.outSR = Ve(e.outSpatialReference)), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: t, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const s = await q(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: t });
    if (s.data) {
      const i = {}, r = s.data;
      if (r?.relatedRecordGroups) {
        const a = r.spatialReference;
        for (const n of r.relatedRecordGroups) {
          const l = n.objectId, u = [];
          for (const o of n.relatedRecords) {
            o.geometry && (o.geometry.spatialReference = a);
            const h = new P({ geometry: o.geometry ? Qe(o.geometry) : null, attributes: o.attributes });
            u.push(h);
          }
          i[l] = { features: u, exceededTransferLimit: r.exceededTransferLimit === !0 };
        }
      }
      return i;
    }
    throw new I(C.InvalidRequest);
  }
  async getFeatureByObjectId(e, t) {
    const s = new v();
    s.outFields = t, s.returnGeometry = !1, s.outSpatialReference = this.spatialReference, s.where = this.objectIdField + "=" + e.toString(), this.datesInUnknownTimezone && (s.timeReferenceUnknownClient = !0), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: s, method: "execute" });
    const i = await ue(this._layer.parsedUrl.path, s);
    return i.features.length === 1 ? i.features[0] : null;
  }
  async getIdentityUser() {
    await this.load();
    const e = de?.findCredential(this._layer.url);
    return e ? e.userId : null;
  }
  async getOwningSystemUrl() {
    await this.load();
    const e = de?.findServerInfo(this._layer.url);
    if (e) return e.owningSystemUrl;
    let t = this._layer.url;
    const s = t.toLowerCase().indexOf("/rest/services");
    if (t = s > -1 ? t.substring(0, s) : t, t) {
      t += "/rest/info";
      try {
        const i = await q(t, { query: { f: "json" } });
        let r = "";
        return i.data?.owningSystemUrl && (r = i.data.owningSystemUrl), r;
      } catch {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e = new Z({ layer: this._layer, spatialReference: this.spatialReference ?? void 0, outFields: this._overrideFields ?? void 0, includeGeometry: !this._removeGeometry, lrucache: this.recentlyUsedQueries ?? void 0, interceptor: this.featureSetQueryInterceptor ?? void 0 });
    return e._useDefinitionExpression = !1, e;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? !1;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    if (this.fsetInfo) return this.fsetInfo;
    let e = null, t = this._layer.serviceItemId ?? null;
    const s = this._layer.parsedUrl.path;
    if (s) {
      const r = await q(s, { responseType: "json", query: { f: "json" } });
      e = r?.data?.name ?? null, t = r?.data?.serviceItemId ?? null;
    }
    const i = this._layer.title && (this._layer.parent ?? null) !== null;
    return this.featureSetInfo = { layerId: this._layer.layerId, layerName: e === "" ? null : e, itemId: t === "" ? null : t, serviceLayerUrl: s === "" ? null : s, webMapLayerId: i ? this._layer.id ?? null : null, webMapLayerTitle: i ? this._layer.title ?? null : null, className: null, objectClassId: null }, this.fsetInfo;
  }
}
let Rt = class Le extends A {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = !1, this._overrideFields = null, this._forceIsTable = !1, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, e.isTable === !0 && (this._forceIsTable = !0), e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return this._layer.loaded === !0 ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const e = [], t = [];
      for (const s of this.fields) if (s.type === "oid") e.push(s), t.push(s.name);
      else for (const i of this._overrideFields) if (i.toLowerCase() === s.name.toLowerCase()) {
        e.push(s), t.push(s.name);
        break;
      }
      this.fields = e, this._overrideFields = t;
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e of this.fields) e.type === "global-id" && (this.globalIdField = e.name);
    this._databaseType = R.Standardised, this.hasZ = this._layer?.capabilities?.data?.supportsZ === !0, this.hasM = this._layer?.capabilities?.data?.supportsM === !0, this._layer.type === "subtype-group" ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : this._layer.type === "oriented-imagery" ? (this.subtypeField = null, this.subtypes = null, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types) : (this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || this._layer.type === "table" || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const s of this.fields) t[s.name] = e.attributes[s.name];
    return new P({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  async _getFilteredSet(e, t, s, i, r) {
    let a = "", n = !1;
    if (i !== null && (a = i.constructClause(), n = !0), this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    const l = new v();
    l.returnZ = this.hasZ, l.returnM = this.hasM, l.where = s === null ? t === null ? "1=1" : "" : T(s, R.Standardised), l.spatialRelationship = this._makeRelationshipEnum(e), l.outSpatialReference = this.spatialReference, l.orderByFields = a !== "" ? a.split(",") : null, l.geometry = t === null ? null : t, l.returnGeometry = !0, l.relationParameter = this._makeRelationshipParam(e);
    const u = await this._layer.queryFeatures(l);
    if (u === null) return new g([], [], n, null);
    this._checkCancelled(r);
    const o = [];
    return u.features.forEach((h) => {
      const c = h.attributes[this._layer.objectIdField];
      o.push(c), this._featureCache[c] = this._changeFeature(h);
    }), new g([], o, n, null);
  }
  _makeRelationshipEnum(e) {
    if (e.includes("esriSpatialRelRelation")) return "relation";
    switch (e) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e;
  }
  _makeRelationshipParam(e) {
    return e.includes("esriSpatialRelRelation") ? e.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset) return this._wset;
    const e = new v();
    if (e.where = "1=1", await this._ensureLoaded(), this._layer.source && this._layer.source.items) {
      const i = [];
      return this._layer.source.items.forEach((r) => {
        const a = r.attributes[this._layer.objectIdField];
        i.push(a), this._featureCache[a] = this._changeFeature(r);
      }), this._wset = new g([], i, !1, null), this._wset;
    }
    e.returnZ = this.hasZ, e.returnM = this.hasM;
    const t = await this._layer.queryFeatures(e), s = [];
    return t.features.forEach((i) => {
      const r = i.attributes[this._layer.objectIdField];
      s.push(r), this._featureCache[r] = this._changeFeature(i);
    }), this._wset = new g([], s, !1, null), this._wset;
  }
  async _getFeatures(e, t, s) {
    const i = [];
    t !== -1 && this._featureCache[t] === void 0 && i.push(t);
    for (let r = e._lastFetchedIndex; r < e._known.length && (e._lastFetchedIndex += 1, !(this._featureCache[e._known[r]] === void 0 && (e._known[r] !== t && i.push(e._known[r]), i.length > s))); r++) ;
    if (i.length === 0) return "success";
    throw new I(C.MissingFeatures);
  }
  async _refineSetBlock(e) {
    return e;
  }
  async _stat() {
    return { calculated: !1 };
  }
  async _canDoAggregates() {
    return !1;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e) {
    const t = {};
    for (const s in e) t[s] = e[s];
    return t;
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", canQueryRelated: !1, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: !0 };
  }
  static create(e, t) {
    let s = e.layerDefinition.objectIdField;
    const i = e.layerDefinition.typeIdField ?? "", r = [];
    if (e.layerDefinition.types) for (const p of e.layerDefinition.types) r.push(Je.fromJSON(p));
    let a = e.layerDefinition.geometryType;
    a === void 0 && (a = e.featureSet.geometryType || "");
    let n = e.featureSet.features;
    const l = t.toJSON();
    if (!s) {
      let p = !1;
      for (const _ of e.layerDefinition.fields) if (_.type === "oid" || _.type === "esriFieldTypeOID") {
        s = _.name, p = !0;
        break;
      }
      if (p === !1) {
        let _ = "FID", w = !0, y = 0;
        for (; w; ) {
          let S = !0;
          for (const J of e.layerDefinition.fields) if (J.name === _) {
            S = !1;
            break;
          }
          S === !0 ? w = !1 : (y++, _ = "FID" + y.toString());
        }
        e.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: _, alias: _ });
        const k = [];
        for (let S = 0; S < n.length; S++) k.push({ geometry: e.featureSet.features[S].geometry, attributes: e.featureSet.features[S].attributes ? this._cloneAttr(e.featureSet.features[S].attributes) : {} }), k[S].attributes[_] = S;
        n = k, s = _;
      }
    }
    const u = [];
    for (const p of e.layerDefinition.fields) p instanceof U ? u.push(p) : u.push(U.fromJSON(p));
    let o = a;
    switch (o || (o = ""), o) {
      case "esriGeometryPoint":
        o = "point";
        break;
      case "esriGeometryPolyline":
        o = "polyline";
        break;
      case "esriGeometryPolygon":
        o = "polygon";
        break;
      case "esriGeometryEnvelope":
        o = "extent";
        break;
      case "esriGeometryMultipoint":
        o = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        o = "esriGeometryNull";
    }
    if (o !== "esriGeometryNull") for (const p of n) p.geometry && !(p.geometry instanceof Ke) && (p.geometry.type = o, p.geometry.spatialReference === void 0 && (p.geometry.spatialReference = l));
    else for (const p of n) p.geometry && (p.geometry = null);
    const h = { outFields: ["*"], source: n, fields: u, hasZ: e?.layerDefinition?.hasZ === !0 || e?.featureSet?.hasZ === !0, hasM: e?.layerDefinition?.hasM === !0 || e?.featureSet?.hasM === !0, types: r, typeIdField: i, objectIdField: s, spatialReference: t }, c = o === "esriGeometryNull" || o === null;
    c || (h.geometryType = o);
    const f = new O(h);
    return e?.layerDefinition?.subtypeField && e?.layerDefinition?.subtypes && f.read({ subtypes: e.layerDefinition.subtypes, subtypeField: e.layerDefinition.subtypeField }), new Le({ layer: f, spatialReference: t, isTable: c });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e) {
    const t = new v();
    t.where = this.objectIdField + "=" + e.toString(), t.returnZ = this.hasZ, t.returnM = this.hasM;
    const s = await this._layer.queryFeatures(t);
    return s.features.length === 1 ? s.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? !1;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo;
  }
  get timeInfo() {
    return this._layer?.timeInfo;
  }
  async getFeatureSetInfo() {
    const e = this._layer.title && this._layer.parent;
    return this.fsetInfo ?? { layerId: null, layerName: null, itemId: null, serviceLayerUrl: null, webMapLayerId: e ? this._layer.id ?? null : null, webMapLayerTitle: e ? this._layer.title ?? null : null, className: null, objectClassId: null };
  }
};
class vt extends A {
  constructor(e) {
    super(e), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = !1, this._removeGeometry = !1, this._overrideFields = null, this.featureObjectId = null, e.spatialReference && (this.spatialReference = e.spatialReference), this._transparent = !0, this._maxProcessing = 1e3, this._layer = e.layer, this._wset = null, this._findObjectId = e.objectId, this.featureObjectId = e.objectId, this.relationship = e.relationship, this._relatedLayer = e.relatedLayer, e.outFields !== void 0 && (this._overrideFields = e.outFields), e.includeGeometry !== void 0 && (this._removeGeometry = e.includeGeometry === !1);
  }
  _maxQueryRate() {
    return se;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return await Promise.all([this._layer.load(), this._relatedLayer?.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (this.spatialReference == null && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(0), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, this._overrideFields !== null) if (this._overrideFields.length === 1 && this._overrideFields[0] === "*") this._overrideFields = null;
    else {
      const t = [], s = [];
      for (const i of this.fields) if (i.type === "oid") t.push(i), s.push(i.name);
      else for (const r of this._overrideFields) if (r.toLowerCase() === i.name.toLowerCase()) {
        t.push(i), s.push(i.name);
        break;
      }
      this.fields = t, this._overrideFields = s;
    }
    const e = this._layer.nativeCapabilities();
    e && (this._databaseType = e.databaseType, this._requestStandardised = e.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types, this.subtypeField = this._relatedLayer.subtypeField, this.subtypes = this._relatedLayer.subtypes;
  }
  async databaseType() {
    return await this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return b.InFeatureSet;
  }
  _candidateIdTransform(e) {
    return e;
  }
  async _getSet(e) {
    if (this._wset === null) {
      await this._ensureLoaded();
      const t = await this._getFilteredSet("", null, null, null, e);
      return this._wset = t, t;
    }
    return this._wset;
  }
  _changeFeature(e) {
    const t = {};
    for (const s of this.fields) t[s.name] = e.attributes[s.name];
    return new P({ geometry: this._removeGeometry === !0 ? null : e.geometry, attributes: t });
  }
  async _getFilteredSet(e, t, s, i, r) {
    if (await this.databaseType(), this.isTable() && t && e !== null && e !== "")
      return new g([], [], !0, null);
    const a = this._layer.nativeCapabilities();
    if (a.canQueryRelated === !1)
      return new g([], [], !0, null);
    if (a.capabilities?.queryRelated.supportsPagination) return this._getFilteredSetUsingPaging(e, t, s, i, r);
    let n = "", l = !1;
    i !== null && a.capabilities?.queryRelated.supportsOrderBy === !0 && (n = i.constructClause(), l = !0);
    const u = new he();
    u.objectIds = [this._findObjectId];
    const o = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((y) => y.name) : ["*"]);
    u.outFields = o, u.relationshipId = this.relationship.id, u.where = "1=1";
    let h = !0;
    this._removeGeometry === !0 && (h = !1), u.returnGeometry = h, this._requestStandardised && (u.sqlFormat = "standard"), u.outSpatialReference = this.spatialReference, u.orderByFields = n !== "" ? n.split(",") : null;
    const c = await a.source.queryRelatedFeatures(u);
    this._checkCancelled(r);
    const f = c[this._findObjectId] ? c[this._findObjectId].features : [], p = [];
    for (let y = 0; y < f.length; y++) this._featureCache[f[y].attributes[this._relatedLayer.objectIdField]] = f[y], p.push(f[y].attributes[this._relatedLayer.objectIdField]);
    const _ = t && e !== null && e !== "", w = s != null;
    return new g(_ || w ? p : [], _ || w ? [] : p, l, null);
  }
  _fieldsIncludingObjectId(e) {
    if (e === null) return [this.objectIdField];
    const t = e.slice(0);
    if (t.includes("*")) return t;
    let s = !1;
    for (const i of t) if (i.toUpperCase() === this.objectIdField.toUpperCase()) {
      s = !0;
      break;
    }
    return s === !1 && t.push(this.objectIdField), t;
  }
  async _getFilteredSetUsingPaging(e, t, s, i, r) {
    let a = "", n = !1;
    const l = this._layer.nativeCapabilities();
    i !== null && l.capabilities?.queryRelated.supportsOrderBy === !0 && (a = i.constructClause(), n = !0), await this.databaseType();
    const u = "1=1";
    let o = this._maxQueryRate();
    const h = l.capabilities?.query.maxRecordCount;
    h != null && h < o && (o = h);
    const c = t && e !== null && e !== "", f = s != null;
    let p = null, _ = !0;
    this._removeGeometry === !0 && (_ = !1);
    const w = this._overrideFields !== null ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((y) => y.name) : ["*"]);
    return p = new g(c || f ? ["GETPAGES"] : [], c || f ? [] : ["GETPAGES"], n, { outFields: w.join(","), resultRecordCount: o, resultOffset: 0, objectIds: [this._findObjectId], where: u, orderByFields: a, returnGeometry: _, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: !1 } }), await this._expandPagedSet(p, o, 0, 0, r), p;
  }
  _expandPagedSet(e, t, s, i, r) {
    return this._expandPagedSetFeatureSet(e, t, s, i, r);
  }
  _clonePageDefinition(e) {
    return e === null ? null : e.groupbypage !== !0 ? { groupbypage: !1, outFields: e.outFields, resultRecordCount: e.resultRecordCount, resultOffset: e.resultOffset, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal } : { groupbypage: !0, outFields: e.outFields, resultRecordCount: e.resultRecordCount, useOIDpagination: e.useOIDpagination, generatedOid: e.generatedOid, groupByFieldsForStatistics: e.groupByFieldsForStatistics, resultOffset: e.resultOffset, outStatistics: e.outStatistics, geometry: e.geometry, where: e.where, objectIds: e.objectIds, orderByFields: e.orderByFields, returnGeometry: e.returnGeometry, returnIdsOnly: e.returnIdsOnly, internal: e.internal };
  }
  async _getPhysicalPage(e, t, s) {
    const i = e.pagesDefinition.internal.lastRetrieved, r = i, a = e.pagesDefinition.internal.lastPage, n = this._layer.nativeCapabilities(), l = new he();
    this._requestStandardised === !0 && (l.sqlFormat = "standard"), l.relationshipId = this.relationship.id, l.objectIds = e.pagesDefinition.objectIds, l.resultOffset = e.pagesDefinition.internal.lastPage, l.resultRecordCount = e.pagesDefinition.resultRecordCount, l.outFields = e.pagesDefinition.outFields.split(","), l.where = e.pagesDefinition.where, l.orderByFields = e.pagesDefinition.orderByFields !== "" ? e.pagesDefinition.orderByFields.split(",") : null, l.returnGeometry = e.pagesDefinition.returnGeometry, l.outSpatialReference = this.spatialReference;
    const u = await n.source.queryRelatedFeatures(l);
    if (this._checkCancelled(s), e.pagesDefinition.internal.lastPage !== a) return 0;
    const o = u[this._findObjectId] ? u[this._findObjectId].features : [];
    for (let c = 0; c < o.length; c++) e.pagesDefinition.internal.set[r + c] = o[c].attributes[this._relatedLayer.objectIdField];
    for (let c = 0; c < o.length; c++) this._featureCache[o[c].attributes[this._relatedLayer.objectIdField]] = o[c];
    const h = !u[this._findObjectId] || u[this._findObjectId].exceededTransferLimit === !1;
    return o.length !== e.pagesDefinition.resultRecordCount && h && (e.pagesDefinition.internal.fullyResolved = !0), e.pagesDefinition.internal.lastRetrieved = i + o.length, e.pagesDefinition.internal.lastPage += e.pagesDefinition.resultRecordCount, o.length;
  }
  async _getFeatures(e, t, s, i) {
    const r = [];
    t !== -1 && this._featureCache[t] === void 0 && r.push(t);
    const a = this._maxQueryRate();
    if (this._checkIfNeedToExpandKnownPage(e, a) === !0) return await this._expandPagedSet(e, a, 0, 0, i), this._getFeatures(e, t, s, i);
    let n = 0;
    for (let l = e._lastFetchedIndex; l < e._known.length && (n++, n <= s && (e._lastFetchedIndex += 1), !(e._known[l] !== "GETPAGES" && this._featureCache[e._known[l]] === void 0 && (e._known[l] !== t && r.push(e._known[l]), r.length > s))) && !(n >= s && r.length === 0); l++) ;
    if (r.length === 0) return "success";
    throw new I(C.MissingFeatures);
  }
  async _refineSetBlock(e, t, s) {
    return e;
  }
  async _stat(e, t, s, i, r, a, n) {
    return { calculated: !1 };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e, t, s, i, r) {
    return !1;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e, t, s, i, r) {
    return this._relatedLayer.queryAttachments(e, t, s, i, r);
  }
  getFeatureByObjectId(e, t) {
    return this._relatedLayer.getFeatureByObjectId(e, t);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    return this._relatedLayer?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._relatedLayer?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._relatedLayer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._relatedLayer?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._relatedLayer?.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? this._layer.featureSetInfo;
  }
}
function xt() {
  m.applicationCache === null && (m.applicationCache = new m());
}
async function G(d, e, t) {
  if (m.applicationCache) {
    const s = m.applicationCache.getLayerInfo(d);
    if (s) {
      const a = await s;
      return new O({ url: d, outFields: e, sourceJSON: a });
    }
    const i = new O({ url: d, outFields: e }), r = (async () => (await i.load(), i.sourceJSON))();
    if (m.applicationCache) {
      m.applicationCache.setLayerInfo(d, r);
      try {
        return await r, i;
      } catch (a) {
        throw m.applicationCache.clearLayerInfo(d), a;
      }
    }
    return await r, i;
  }
  if (t != null) {
    const s = t.getCachedLayerMetadata(d);
    if (s) {
      const a = await s;
      return new O({ url: d, outFields: e, sourceJSON: a });
    }
    const i = new O({ url: d, outFields: e }), r = (async () => (await i.load(), i.sourceJSON))();
    t.setCachedLayerMetadata(d, r);
    try {
      return await r, i;
    } catch (a) {
      throw t.removeCachedLayerMetadata(d, r), a;
    }
  }
  return new O({ url: d, outFields: e });
}
async function re(d, e, t, s, i, r = null) {
  return L(await G(d, ["*"], i), e, t, s, i, r);
}
function L(d, e = null, t = null, s = !0, i = null, r = null) {
  if (d.type === "catalog-footprint") return L(d.parent, e, t, s, i, r);
  if (d.type === "subtype-sublayer") {
    const a = L(d.parent, e, t, s, i, r);
    return a.filter(D.create(d.parent.subtypeField + "=" + d.subtypeCode.toString(), d.parent.fieldsIndex, a.dateFieldsTimeZoneDefaultUTC));
  }
  if (Te(d)) {
    const a = { layer: d, spatialReference: e, outFields: t, includeGeometry: s, lrucache: i, interceptor: r };
    return d.url || !d.source ? new Z(a) : new Rt(a);
  }
  throw new Error(`Unsupported layer type: ${d.type}`);
}
async function Nt(d) {
  if (m.applicationCache !== null) {
    const t = m.applicationCache.getLayerInfo(d);
    if (t !== null) return t;
  }
  const e = (async () => {
    const t = await q(d, { responseType: "json", query: { f: "json" } });
    return t.data ? t.data : null;
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(d, e);
    try {
      return await e;
    } catch (t) {
      throw m.applicationCache.clearLayerInfo(d), t;
    }
  }
  return e;
}
async function Lt(d, e) {
  const t = "QUERYDATAELEMTS:" + e.toString() + ":" + d;
  if (m.applicationCache !== null) {
    const i = m.applicationCache.getLayerInfo(t);
    if (i !== null) return i;
  }
  const s = (async () => {
    const i = await q(d + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([e.toString()]), f: "json" } });
    if (i.data) {
      const r = i.data;
      if (r.layerDataElements?.[0]) return r.layerDataElements[0];
    }
    throw new I(C.DataElementsNotFound);
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(t, s);
    try {
      return await s;
    } catch (i) {
      throw m.applicationCache.clearLayerInfo(t), i;
    }
  }
  return s;
}
async function Ae(d, e) {
  if (m.applicationCache !== null) {
    const s = m.applicationCache.getLayerInfo(d);
    if (s !== null) return s;
  }
  if (e != null) {
    const s = e.getCachedServiceMetadata(d);
    if (s != null) return s;
  }
  const t = (async () => {
    const s = await q(d, { responseType: "json", query: { f: "json" } });
    if (s.data) {
      const i = s.data;
      return i.layers || (i.layers = []), i.tables || (i.tables = []), i;
    }
    return { layers: [], tables: [] };
  })();
  if (m.applicationCache !== null) {
    m.applicationCache.setLayerInfo(d, t);
    try {
      return await t;
    } catch (s) {
      throw m.applicationCache.clearLayerInfo(d), s;
    }
  }
  if (e != null) {
    e.setCachedServiceMetadata(d, t);
    try {
      return await t;
    } catch (s) {
      throw e.removeCachedServiceMetadata(d, t), s;
    }
  }
  return t;
}
async function At(d, e) {
  const t = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null }, s = await Ae(d, null);
  if (t.metadata = s, s.controllerDatasetLayers?.utilityNetworkLayerId !== void 0 && s.controllerDatasetLayers.utilityNetworkLayerId !== null) {
    if (s.layers) for (const a of s.layers) t.layerNameLkp[a.id] = a.name;
    if (s.tables) for (const a of s.tables) t.layerNameLkp[a.id] = a.name;
    const i = s.controllerDatasetLayers.utilityNetworkLayerId;
    t.networkId = i;
    const r = await Lt(d, i);
    if (r) {
      t.queryelem = r, t.queryelem?.dataElement && t.queryelem.dataElement.schemaGeneration !== void 0 && (t.unVersion = t.queryelem.dataElement.schemaGeneration), t.lkp = {}, t.queryelem.dataElement.domainNetworks || (t.queryelem.dataElement.domainNetworks = []);
      for (const n of t.queryelem.dataElement.domainNetworks) {
        for (const l of n.edgeSources ?? []) {
          const u = { layerId: l.layerId, sourceId: l.sourceId, className: t.layerNameLkp[l.layerId] ?? null };
          u.className && (t.lkp[u.className] = u);
        }
        for (const l of n.junctionSources ?? []) {
          const u = { layerId: l.layerId, sourceId: l.sourceId, className: t.layerNameLkp[l.layerId] ?? null };
          u.className && (t.lkp[u.className] = u);
        }
      }
      if (t.queryelem.dataElement.terminalConfigurations) for (const n of t.queryelem.dataElement.terminalConfigurations) for (const l of n.terminals) t.terminals.push({ terminalId: l.terminalId, terminalName: l.terminalName });
      const a = await Nt(d + "/" + i);
      if (a.systemLayers?.associationsTableId !== void 0 && a.systemLayers.associationsTableId !== null) {
        const n = [];
        t.unVersion >= 4 && (n.push("STATUS"), n.push("PERCENTALONG"));
        let l = await re(d + "/" + a.systemLayers.associationsTableId.toString(), e, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...n], !1, null, null);
        return await l.load(), t.unVersion >= 4 && (l = l.filter(D.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", l.getFieldsIndex(), l.dateFieldsTimeZoneDefaultUTC)), await l.load()), { lkp: t.lkp, associations: l, unVersion: t.unVersion, terminals: t.terminals };
      }
      return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
    }
    return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
  }
  return { associations: null, unVersion: t.unVersion, lkp: null, terminals: [] };
}
async function Ot(d, e, t, s = null, i = null, r = !0, a = null, n = null) {
  let l = d.serviceUrl();
  if (!l) return null;
  l = l.charAt(l.length - 1) === "/" ? l + e.relatedTableId.toString() : l + "/" + e.relatedTableId.toString();
  const u = await re(l, s, i, r, a, n);
  return new vt({ layer: d, relatedLayer: u, relationship: e, objectId: t, spatialReference: s, outFields: i, includeGeometry: r, lrucache: a, interceptor: n });
}
B.registerAction(), kt.registerAction(), Y.registerAction(), ct.registerAction(), ie.registerAction();
class Et extends ve {
  constructor(e, t = null, s = null, i = null) {
    super(), this._map = e, this._overridespref = t, this._lrucache = s, this._interceptor = i, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e, t = !0, s = null) {
    const i = L(e, this._overridespref, s === null ? ["*"] : s, t, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: i, opitem: e, includeGeometry: t, outFields: JSON.stringify(s) }), i;
  }
  async featureSetByName(e, t = !0, s = null) {
    if (ce.isLoadable(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetByName(e, t, s);
    s === null && (s = ["*"]), s = (s = s.slice(0)).sort();
    const i = JSON.stringify(s);
    for (let a = 0; a < this._instantLayers.length; a++) {
      const n = this._instantLayers[a];
      if (n.opitem.title === e && n.includeGeometry === t && n.outFields === i) return this._instantLayers[a].featureset;
    }
    const r = this._map.allLayers.find((a) => me(a) && a.title === e);
    if (r != null) return this._makeAndAddFeatureSet(r, t, s);
    if (this._map.tables) {
      const a = this._map.tables.find((n) => n.title === e);
      if (a != null) {
        if (a instanceof O) return this._makeAndAddFeatureSet(a, t, s);
        if (a._materializedTable == null) {
          const n = a.outFields ? a : { ...a, outFields: ["*"] };
          a._materializedTable = new O(n);
        }
        return await a._materializedTable.load(), this._makeAndAddFeatureSet(a._materializedTable, t, s);
      }
    }
    return null;
  }
  async featureSetById(e, t = !0, s = ["*"]) {
    if (ce.isLoadable(this._map) && !this._map.loaded) return await this._map.load(), this.featureSetById(e, t, s);
    s === null && (s = ["*"]), s = (s = s.slice(0)).sort();
    const i = JSON.stringify(s);
    for (let a = 0; a < this._instantLayers.length; a++) {
      const n = this._instantLayers[a];
      if (n.opitem.id === e && n.includeGeometry === t && n.outFields === i) return this._instantLayers[a].featureset;
    }
    const r = this._map.allLayers.find((a) => me(a) && a.id === e);
    if (r) return this._makeAndAddFeatureSet(r, t, s);
    if (this._map.tables) {
      const a = this._map.tables.find((n) => n.id === e);
      if (a != null) {
        if (a instanceof O) return this._makeAndAddFeatureSet(a, t, s);
        if (a._materializedTable == null) {
          const n = { ...a, outFields: ["*"] };
          a._materializedTable = new O(n);
        }
        return await a._materializedTable.load(), this._makeAndAddFeatureSet(a._materializedTable, t, s);
      }
    }
    return null;
  }
}
class ae extends ve {
  constructor(e, t = null, s = null, i = null) {
    super(), this._url = e, this._overridespref = t, this._lrucache = s, this._interceptor = i, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e, t = !0, s = null) {
    const i = L(e, this._overridespref, s === null ? ["*"] : s, t, this._lrucache);
    return this._instantLayers.push({ featureset: i, opitem: e, includeGeometry: t, outFields: JSON.stringify(s) }), i;
  }
  async _loadMetaData() {
    const e = await Ae(this._url, this._lrucache);
    return this.metadata = e, e;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new ae(this._url, this._overridespref, this._lrucache, this._interceptor);
  }
  async featureSetByName(e, t = !0, s = null) {
    s === null && (s = ["*"]), s = (s = s.slice(0)).sort();
    const i = JSON.stringify(s);
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.title === e && l.includeGeometry === t && l.outFields === i) return this._instantLayers[n].featureset;
    }
    const r = await this._loadMetaData();
    let a = null;
    for (const n of r.layers ?? []) n.name === e && (a = n);
    if (!a) for (const n of r.tables ?? []) n.name === e && (a = n);
    if (a) {
      const n = await G(this._url + "/" + a.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(n, t, s);
    }
    return null;
  }
  async featureSetById(e, t = !0, s = ["*"]) {
    s === null && (s = ["*"]), s = (s = s.slice(0)).sort();
    const i = JSON.stringify(s);
    e = e != null ? e.toString() : "";
    for (let n = 0; n < this._instantLayers.length; n++) {
      const l = this._instantLayers[n];
      if (l.opitem.id === e && l.includeGeometry === t && l.outFields === i) return this._instantLayers[n].featureset;
    }
    const r = await this._loadMetaData();
    let a = null;
    for (const n of r.layers ?? []) n.id !== null && n.id !== void 0 && n.id.toString() === e && (a = n);
    if (!a) for (const n of r.tables ?? []) n.id !== null && n.id !== void 0 && n.id.toString() === e && (a = n);
    if (a) {
      const n = await G(this._url + "/" + a.id, ["*"], this._lrucache);
      return this._makeAndAddFeatureSet(n, t, s);
    }
    return null;
  }
}
function Pt(d, e, t = null, s = null) {
  return new Et(d, e, t, s);
}
function jt(d, e, t = null, s = null) {
  return new ae(d, e, t, s);
}
function qt(d, e, t, s, i) {
  if (d === null) return null;
  if (it(d)) {
    switch (e) {
      case "datasource":
        return d.getDataSourceFeatureSet();
      case "parent":
        return d;
      case "root":
        return d.getRootFeatureSet();
    }
    return null;
  }
  if (d instanceof Xe && Te(d)) {
    const r = d;
    switch (e) {
      case "datasource":
        return L(r, i, r.outFields, !0, t, s).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return L(r, i, r.outFields, !0, t, s);
    }
    return null;
  }
  if (rt(d)) {
    switch (e) {
      case "datasource":
        return L(d.parent, i, d.parent.outFields, !0, t, s).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return L(d, i, d.parent.outFields, !0, t, s);
    }
    return null;
  }
  return null;
}
async function Gt(d, e, t, s, i, r, a, n = null) {
  if (m.applicationCache) {
    const u = m.applicationCache.getLayerInfo(d + ":" + r.url);
    if (u) {
      const o = await u;
      return L(await G($(o.url ?? "") + "/" + e, ["*"], a), t, s, i, a, n);
    }
  }
  if (a != null) {
    const u = a.getCachedPortalItem(r.url, d);
    if (u != null) {
      const o = await u;
      return L(await G($(o.url ?? "") + "/" + e, ["*"], a), t, s, i, a, n);
    }
  }
  const l = new Ye({ id: d, portal: r }).load();
  m.applicationCache ? m.applicationCache.setLayerInfo(d + ":" + r.url, l) : a?.setCachedPortalItem(r.url, d, l);
  try {
    const u = await l;
    return L(await G($(u.url ?? "") + "/" + e, ["*"], a), t, s, i, a, n);
  } catch (u) {
    throw m.applicationCache && m.applicationCache.clearLayerInfo(d + ":" + r.url), a?.removeCachedPortalItem(r.url, d, l), u;
  }
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constructAssociationMetaDataFeatureSetFromUrl: At,
  constructFeatureSet: L,
  constructFeatureSetFromPortalItem: Gt,
  constructFeatureSetFromRelationship: Ot,
  constructFeatureSetFromUrl: re,
  convertToFeatureSet: qt,
  createFeatureSetCollectionFromMap: Pt,
  createFeatureSetCollectionFromService: jt,
  initialiseMetaDataCache: xt
}, Symbol.toStringTag, { value: "Module" }));
export {
  It as B,
  Ot as E,
  Gt as G,
  X as I,
  Ct as L,
  re as N,
  At as O,
  L as T,
  Y as a,
  ie as b,
  B as c,
  Rt as d,
  M as e,
  bt as f,
  zt as g,
  St as k,
  qt as q
};
//# sourceMappingURL=featureSetUtils-CzN1ySVc.js.map
