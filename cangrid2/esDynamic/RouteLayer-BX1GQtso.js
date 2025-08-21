import { O as t, P as s, ob as Z, Q as A, bX as I, eg as V, oc as fe, od as et, ee as he, eh as tt, dY as R, e9 as N, eH as G, s as M, cn as me, $ as Q, lz as be, z as rt, cm as Fe, D as Ee, f9 as Ue, a3 as Ge, aj as K, b6 as Te, b8 as We, U as x, bx as W, bm as qe, ai as ot, oe as st, bW as $e, km as it, eV as nt, cp as at, V as O, e3 as lt, e7 as ut, e5 as pt, e6 as ct, e8 as yt, bi as dt, eO as mt, b7 as ft, de as Le, a1 as je, mY as ht, I as vt, Z as wt, C as gt, f as St, M as bt, gY as Tt, W as Bt, dR as Nt, bp as Pt, g8 as $t, ei as Rt } from "./main-DHXLMse1.js";
import { i as At } from "./originUtils-BLsWtgV9.js";
import { a as H, D as Re, o as Ot, q as Lt, b as Ze, d as Ae, P as jt, n as It, e as Dt, f as Mt, R as Ct, M as Ie, l as kt, U as Jt, r as _t, g as xt, m as Ft, c as pe, y as ce, C as re, T as oe, j as se, w as ie, S as ve, h as Et } from "./Stop-BMjrp6PX.js";
let E = class extends I {
  constructor(r) {
    super(r), this.break = new V({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.first = new V({ color: [0, 255, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.unlocated = new V({ color: [255, 0, 0], size: 12, outline: { color: [255, 255, 255], width: 3 } }), this.last = new V({ color: [255, 0, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.middle = new V({ color: [51, 51, 51], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.waypoint = new V({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } });
  }
};
t([s({ types: Z })], E.prototype, "break", void 0), t([s({ types: Z })], E.prototype, "first", void 0), t([s({ types: Z })], E.prototype, "unlocated", void 0), t([s({ types: Z })], E.prototype, "last", void 0), t([s({ types: Z })], E.prototype, "middle", void 0), t([s({ types: Z })], E.prototype, "waypoint", void 0), E = t([A("esri.layers.support.RouteStopSymbols")], E);
const Ve = E;
let J = class extends I {
  constructor(r) {
    super(r), this.directionLines = new he({ color: [0, 122, 194], width: 6 }), this.directionPoints = new V({ color: [255, 255, 255], size: 6, outline: { color: [0, 122, 194], width: 2 } }), this.pointBarriers = new V({ style: "x", size: 10, outline: { color: [255, 0, 0], width: 3 } }), this.polygonBarriers = new tt({ color: [255, 170, 0, 0.6], outline: { width: 7.5, color: [255, 0, 0, 0.6] } }), this.polylineBarriers = new he({ width: 7.5, color: [255, 85, 0, 0.7] }), this.routeInfo = new he({ width: 8, color: [20, 89, 127] }), this.stops = new Ve();
  }
};
t([s({ types: fe })], J.prototype, "directionLines", void 0), t([s({ types: Z })], J.prototype, "directionPoints", void 0), t([s({ types: Z })], J.prototype, "pointBarriers", void 0), t([s({ types: et })], J.prototype, "polygonBarriers", void 0), t([s({ types: fe })], J.prototype, "polylineBarriers", void 0), t([s({ types: fe })], J.prototype, "routeInfo", void 0), t([s({ type: Ve })], J.prototype, "stops", void 0), J = t([A("esri.layers.support.RouteSymbols")], J);
const ze = J;
let C = class extends I {
  constructor(r) {
    super(r), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
t([s({ type: String })], C.prototype, "dataType", void 0), t([R(H, { ignoreUnknown: !1 })], C.prototype, "name", void 0), t([s({ type: [String] })], C.prototype, "parameterNames", void 0), t([s({ type: String })], C.prototype, "restrictionUsageParameterName", void 0), t([R(Re, { ignoreUnknown: !1 })], C.prototype, "timeNeutralAttributeName", void 0), t([s({ type: String })], C.prototype, "trafficSupport", void 0), t([R(Ot)], C.prototype, "units", void 0), t([R(Lt)], C.prototype, "usageType", void 0), C = t([A("esri.rest.support.NetworkAttribute")], C);
const Ut = C;
let q = class extends I {
  constructor(r) {
    super(r), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
t([s({ type: Number })], q.prototype, "buildTime", void 0), t([s({ type: String })], q.prototype, "name", void 0), t([s({ type: [Ut] })], q.prototype, "networkAttributes", void 0), t([s()], q.prototype, "networkSources", void 0), t([s({ type: String })], q.prototype, "state", void 0), q = t([A("esri.rest.support.NetworkDataset")], q);
const Gt = q;
let $ = class extends I {
  constructor(r) {
    super(r), this.accumulateAttributeNames = null, this.attributeParameterValues = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(r) {
    return r == null ? null : r.map((o) => H.fromJSON(o));
  }
  writeAccumulateAttributes(r, o, i) {
    r?.length && (o[i] = r.map((n) => H.toJSON(n)));
  }
  get capabilities() {
    return { supportsNow: (this.currentVersion ?? 10) >= 10.81 };
  }
  readDefaultTravelMode(r, o) {
    const i = o.supportedTravelModes?.find(({ id: n }) => n === o.defaultTravelMode) ?? o.supportedTravelModes?.find(({ itemId: n }) => n === o.defaultTravelMode);
    return i ? Ae.fromJSON(i) : null;
  }
};
t([s()], $.prototype, "accumulateAttributeNames", void 0), t([N("accumulateAttributeNames")], $.prototype, "readAccumulateAttributes", null), t([G("accumulateAttributeNames")], $.prototype, "writeAccumulateAttributes", null), t([s()], $.prototype, "attributeParameterValues", void 0), t([s()], $.prototype, "capabilities", null), t([s()], $.prototype, "currentVersion", void 0), t([s()], $.prototype, "defaultTravelMode", void 0), t([N("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])], $.prototype, "readDefaultTravelMode", null), t([s()], $.prototype, "directionsLanguage", void 0), t([R(Ze)], $.prototype, "directionsLengthUnits", void 0), t([s()], $.prototype, "directionsSupportedLanguages", void 0), t([R(Re, { ignoreUnknown: !1 })], $.prototype, "directionsTimeAttribute", void 0), t([s()], $.prototype, "hasZ", void 0), t([R(H, { ignoreUnknown: !1 })], $.prototype, "impedance", void 0), t([s({ type: Gt })], $.prototype, "networkDataset", void 0), t([s({ type: [Ae] })], $.prototype, "supportedTravelModes", void 0), $ = t([A("esri.rest.support.NetworkServiceDescription")], $);
const Wt = $, qt = () => Ee.getLogger("esri.rest.networkService");
function ne(e, r, o, i) {
  i[o] = [r.length, r.length + e.length], e.forEach((n) => {
    r.push(n.geometry);
  });
}
function Zt(e, r) {
  for (let o = 0; o < r.length; o++) {
    const i = e[r[o]];
    if (i && i.length) for (const n of i) n.z = void 0;
  }
  qt().warnOnce(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`);
}
function Vt(e, r) {
  for (let o = 0; o < r.length; o++) {
    const i = e[r[o]];
    if (i && i.length) {
      for (const n of i) if (n != null && n.hasZ) return !0;
    }
  }
  return !1;
}
async function Ke(e, r, o) {
  if (!e) throw new M("network-service:missing-url", "Url to Network service is missing");
  const i = me({ f: "json", token: r }, o), { data: n } = await Q(e, i), y = n.currentVersion >= 10.4 ? Kt(e, r, o) : zt(e, o), { defaultTravelMode: u, supportedTravelModes: d } = await y;
  return n.defaultTravelMode = u, n.supportedTravelModes = d, Wt.fromJSON(n);
}
async function zt(e, r) {
  const o = me({ f: "json" }, r), { data: i } = await Q(e.replace(/\/rest\/.*$/i, "/info"), o);
  if (!i?.owningSystemUrl) return { supportedTravelModes: [], defaultTravelMode: null };
  const { owningSystemUrl: n } = i, y = be(n) + "/sharing/rest/portals/self", { data: u } = await Q(y, o), d = rt("helperServices.routingUtilities.url", u);
  if (!d) return { supportedTravelModes: [], defaultTravelMode: null };
  const g = Fe(n), h = /\/solve$/i.test(g.path) ? "Route" : /\/solveclosestfacility$/i.test(g.path) ? "ClosestFacility" : "ServiceAreas", a = me({ f: "json", serviceName: h }, r), b = be(d) + "/GetTravelModes/execute", P = await Q(b, a), T = [];
  let m = null;
  if (P?.data?.results?.length) {
    const f = P.data.results;
    for (const w of f) if (w.paramName === "supportedTravelModes") {
      if (w.value?.features) {
        for (const { attributes: l } of w.value.features) if (l) {
          const B = JSON.parse(l.TravelMode);
          T.push(B);
        }
      }
    } else w.paramName === "defaultTravelMode" && (m = w.value);
  }
  return { supportedTravelModes: T, defaultTravelMode: m };
}
async function Kt(e, r, o) {
  try {
    const i = me({ f: "json", token: r }, o), n = be(e) + "/retrieveTravelModes", { data: { supportedTravelModes: y, defaultTravelMode: u } } = await Q(n, i);
    return { supportedTravelModes: y, defaultTravelMode: u };
  } catch (i) {
    throw new M("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: i });
  }
}
const De = new Ue({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
let X = class extends I {
  constructor(r) {
    super(r), this.description = null, this.type = null;
  }
};
t([s({ type: String, json: { write: !0 } })], X.prototype, "description", void 0), t([s({ type: String, json: { read: De.read, write: De.write } })], X.prototype, "type", void 0), X = t([A("esri.rest.support.GPMessage")], X);
const Ht = X, Me = new Ue({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
let ye = class extends Ht {
  constructor(r) {
    super(r), this.type = null;
  }
};
t([s({ type: String, json: { read: Me.read, write: Me.write } })], ye.prototype, "type", void 0), ye = t([A("esri.rest.support.NAMessage")], ye);
const Yt = ye;
let ee = class extends I {
  constructor(r) {
    super(r);
  }
};
t([s({ json: { read: { source: "string" } } })], ee.prototype, "text", void 0), t([R(jt, { name: "stringType" })], ee.prototype, "type", void 0), ee = t([A("esri.rest.support.DirectionsString")], ee);
const He = ee;
let U = class extends I {
  constructor(r) {
    super(r), this.arriveTime = null, this.arriveTimeOffset = null, this.geometry = null, this.strings = null;
  }
  readArriveTimeOffset(r, o) {
    return It(o.ETA, o.arriveTimeUTC);
  }
  readGeometry(r, o) {
    return Ge.fromJSON(o.point);
  }
};
t([s({ type: Date, json: { read: { source: "arriveTimeUTC" } } })], U.prototype, "arriveTime", void 0), t([s()], U.prototype, "arriveTimeOffset", void 0), t([N("arriveTimeOffset", ["arriveTimeUTC", "ETA"])], U.prototype, "readArriveTimeOffset", null), t([s({ type: Ge })], U.prototype, "geometry", void 0), t([N("geometry", ["point"])], U.prototype, "readGeometry", null), t([s({ type: [He] })], U.prototype, "strings", void 0), U = t([A("esri.rest.support.DirectionsEvent")], U);
const Qt = U;
function Xt(e) {
  if (e == null || e === "") return null;
  let r = 0, o = 0, i = 0, n = 0;
  const y = [];
  let u, d, g, h, a, b, P, T, m = 0, f = 0, w = 0;
  if (a = e.match(/((\+|-)[^+\-|]+|\|)/g), a || (a = []), parseInt(a[m], 32) === 0) {
    m = 2;
    const l = parseInt(a[m], 32);
    m++, b = parseInt(a[m], 32), m++, 1 & l && (f = a.indexOf("|") + 1, P = parseInt(a[f], 32), f++), 2 & l && (w = a.indexOf("|", f) + 1, T = parseInt(a[w], 32), w++);
  } else b = parseInt(a[m], 32), m++;
  for (; m < a.length && a[m] !== "|"; ) {
    u = parseInt(a[m], 32) + r, m++, r = u, d = parseInt(a[m], 32) + o, m++, o = d;
    const l = [u / b, d / b];
    f && (h = parseInt(a[f], 32) + i, f++, i = h, l.push(h / P)), w && (g = parseInt(a[w], 32) + n, w++, n = g, l.push(g / T)), y.push(l);
  }
  return { paths: [y], hasZ: f > 0, hasM: w > 0 };
}
let Y = class extends K {
  constructor(e) {
    super(e), this.events = null, this.strings = null;
  }
  readGeometry(e, r) {
    const o = Xt(r.compressedGeometry);
    return o != null ? Te.fromJSON(o) : null;
  }
};
t([s({ type: [Qt] })], Y.prototype, "events", void 0), t([N("geometry", ["compressedGeometry"])], Y.prototype, "readGeometry", null), t([s({ type: [He] })], Y.prototype, "strings", void 0), Y = t([A("esri.rest.support.DirectionsFeature")], Y);
const er = Y;
function tr(e, r) {
  if (e.length === 0) return new Te({ spatialReference: r });
  const o = [];
  for (const u of e) for (const d of u.paths) o.push(...d);
  const i = [];
  o.forEach((u, d) => {
    d !== 0 && u[0] === o[d - 1][0] && u[1] === o[d - 1][1] || i.push(u);
  });
  const { hasM: n, hasZ: y } = e[0];
  return new Te({ hasM: n, hasZ: y, paths: [i], spatialReference: r });
}
let j = class extends x {
  constructor(r) {
    super(r), this.extent = null, this.features = [], this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(r, o) {
    if (!r) return [];
    const i = o.summary.envelope.spatialReference ?? o.spatialReference, n = i && W.fromJSON(i);
    return r.map((y) => {
      const u = er.fromJSON(y);
      if (u.geometry != null && (u.geometry.spatialReference = n), u.events != null) for (const d of u.events) d.geometry != null && (d.geometry.spatialReference = n);
      return u;
    });
  }
  get mergedGeometry() {
    return this.features ? tr(this.features.map(({ geometry: r }) => r), this.extent.spatialReference) : null;
  }
  get strings() {
    return this.features.flatMap(({ strings: r }) => r).filter(qe);
  }
};
t([s({ type: We, json: { read: { source: "summary.envelope" } } })], j.prototype, "extent", void 0), t([s({ nonNullable: !0 })], j.prototype, "features", void 0), t([N("features")], j.prototype, "readFeatures", null), t([s()], j.prototype, "geometryType", void 0), t([s({ readOnly: !0 })], j.prototype, "mergedGeometry", null), t([s()], j.prototype, "routeId", void 0), t([s()], j.prototype, "routeName", void 0), t([s({ value: null, readOnly: !0 })], j.prototype, "strings", null), t([s({ json: { read: { source: "summary.totalDriveTime" } } })], j.prototype, "totalDriveTime", void 0), t([s({ json: { read: { source: "summary.totalLength" } } })], j.prototype, "totalLength", void 0), t([s({ json: { read: { source: "summary.totalTime" } } })], j.prototype, "totalTime", void 0), j = t([A("esri.rest.support.DirectionsFeatureSet")], j);
const rr = j;
let D = class extends I {
  constructor(e) {
    super(e), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null, this.traversedEdges = null, this.traversedJunctions = null, this.traversedTurns = null;
  }
};
t([s({ type: x, json: { write: !0 } })], D.prototype, "directionLines", void 0), t([s({ type: x, json: { write: !0 } })], D.prototype, "directionPoints", void 0), t([s({ type: rr, json: { write: !0 } })], D.prototype, "directions", void 0), t([s({ type: K, json: { write: !0 } })], D.prototype, "route", void 0), t([s({ type: String, json: { write: !0 } })], D.prototype, "routeName", void 0), t([s({ type: [K], json: { write: !0 } })], D.prototype, "stops", void 0), t([s({ type: x, json: { write: !0 } })], D.prototype, "traversedEdges", void 0), t([s({ type: x, json: { write: !0 } })], D.prototype, "traversedJunctions", void 0), t([s({ type: x, json: { write: !0 } })], D.prototype, "traversedTurns", void 0), D = t([A("esri.rest.support.RouteResult")], D);
const or = D;
function we(e) {
  return e ? x.fromJSON(e).features.filter(qe) : [];
}
let k = class extends I {
  constructor(r) {
    super(r), this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r, o) {
    return we(o.barriers);
  }
  readPolylineBarriers(r) {
    return we(r);
  }
  readPolygonBarriers(r) {
    return we(r);
  }
};
t([s({ type: [Yt] })], k.prototype, "messages", void 0), t([s({ type: [K] })], k.prototype, "pointBarriers", void 0), t([N("pointBarriers", ["barriers"])], k.prototype, "readPointBarriers", null), t([s({ type: [K] })], k.prototype, "polylineBarriers", void 0), t([N("polylineBarriers")], k.prototype, "readPolylineBarriers", null), t([s({ type: [K] })], k.prototype, "polygonBarriers", void 0), t([N("polygonBarriers")], k.prototype, "readPolygonBarriers", null), t([s({ type: [or] })], k.prototype, "routeResults", void 0), k = t([A("esri.rest.support.RouteSolveResult")], k);
const sr = k;
function ae(e) {
  return e instanceof x;
}
async function ir(e, r, o) {
  const i = [], n = [], y = {}, u = {}, d = Fe(e), { path: g } = d;
  ae(r.stops) && ne(r.stops.features, n, "stops.features", y), ae(r.pointBarriers) && ne(r.pointBarriers.features, n, "pointBarriers.features", y), ae(r.polylineBarriers) && ne(r.polylineBarriers.features, n, "polylineBarriers.features", y), ae(r.polygonBarriers) && ne(r.polygonBarriers.features, n, "polygonBarriers.features", y);
  const h = await ot(n);
  for (const T in y) {
    const m = y[T];
    i.push(T), u[T] = h.slice(m[0], m[1]);
  }
  if (Vt(u, i)) {
    let T = null;
    try {
      T = await Ke(g, r.apiKey, o);
    } catch {
    }
    T && !T.hasZ && Zt(u, i);
  }
  for (const T in u) u[T].forEach((m, f) => {
    st(r, T)[f].geometry = m;
  });
  const a = { ...o, query: { ...d.query, ...Dt(r), f: "json" } }, b = g.endsWith("/solve") ? g : `${g}/solve`, { data: P } = await Q(b, a);
  return nr(P);
}
function nr(e) {
  const { barriers: r, directionLines: o, directionPoints: i, directions: n, messages: y, polygonBarriers: u, polylineBarriers: d, routes: g, stops: h, traversedEdges: a, traversedJunctions: b, traversedTurns: P } = e, T = (l) => {
    const B = f.find((L) => L.routeName === l);
    if (B != null) return B;
    const S = { routeId: f.length + 1, routeName: l };
    return f.push(S), S;
  }, m = (l) => {
    const B = f.find((L) => L.routeId === l);
    if (B != null) return B;
    const S = { routeId: l, routeName: null };
    return f.push(S), S;
  }, f = [];
  g?.features.forEach((l, B) => {
    l.geometry.spatialReference = g.spatialReference ?? void 0;
    const S = l.attributes.Name, L = B + 1;
    f.push({ routeId: L, routeName: S, route: l });
  }), n?.forEach((l) => {
    const { routeName: B } = l;
    T(B).directions = l;
  });
  const w = (h?.features.every((l) => l.attributes.RouteName == null) ?? !1) && f.length > 0 ? f[0].routeName : null;
  return h?.features.forEach((l) => {
    l.geometry && (l.geometry.spatialReference ??= h.spatialReference ?? void 0);
    const B = w ?? l.attributes.RouteName, S = T(B);
    S.stops ??= [], S.stops.push(l);
  }), o?.features.forEach((l) => {
    const B = l.attributes.RouteID, S = m(B), { geometryType: L, spatialReference: F } = o;
    S.directionLines ??= { features: [], geometryType: L, spatialReference: F }, S.directionLines.features.push(l);
  }), i?.features.forEach((l) => {
    const B = l.attributes.RouteID, S = m(B), { geometryType: L, spatialReference: F } = i;
    S.directionPoints ??= { features: [], geometryType: L, spatialReference: F }, S.directionPoints.features.push(l);
  }), a?.features.forEach((l) => {
    const B = l.attributes.RouteID, S = m(B), { geometryType: L, spatialReference: F } = a;
    S.traversedEdges ??= { features: [], geometryType: L, spatialReference: F }, S.traversedEdges.features.push(l);
  }), b?.features.forEach((l) => {
    const B = l.attributes.RouteID, S = m(B), { geometryType: L, spatialReference: F } = b;
    S.traversedJunctions ??= { features: [], geometryType: L, spatialReference: F }, S.traversedJunctions.features.push(l);
  }), P?.features.forEach((l) => {
    const B = l.attributes.RouteID, S = m(B);
    S.traversedTurns ??= { features: [] }, S.traversedTurns.features.push(l);
  }), sr.fromJSON({ routeResults: f, barriers: r, polygonBarriers: u, polylineBarriers: d, messages: y });
}
const ar = { type: String, json: { read: { source: "token" }, write: { target: "token" } } };
let _ = class extends $e(I) {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
t([s({ type: Boolean, json: { write: !0 } })], _.prototype, "doNotLocateOnRestrictedElements", void 0), t([s({ types: it, json: { read: nt, write: !0 } })], _.prototype, "geometry", void 0), t([R(Mt)], _.prototype, "geometryType", void 0), t([s({ type: String, json: { name: "layerName", write: !0 } })], _.prototype, "name", void 0), t([R(Ct, { name: "spatialRel" })], _.prototype, "spatialRelationship", void 0), t([s({ type: String, json: { write: !0 } })], _.prototype, "type", void 0), t([s({ type: String, json: { write: !0 } })], _.prototype, "where", void 0), _ = t([A("esri.rest.support.DataLayer")], _);
const lr = _;
var Be;
let de = Be = class extends x {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new Be({ doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements, ...this.cloneProperties() });
  }
};
t([s({ type: Boolean, json: { write: !0 } })], de.prototype, "doNotLocateOnRestrictedElements", void 0), de = Be = t([A("esri.rest.support.NetworkFeatureSet")], de);
const ur = de;
let te = class extends $e(I) {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
t([s({ type: Boolean, json: { write: !0 } })], te.prototype, "doNotLocateOnRestrictedElements", void 0), t([s({ type: String, json: { write: !0 } })], te.prototype, "url", void 0), te = t([A("esri.rest.support.NetworkUrl")], te);
const pr = te;
var Ne;
let p = Ne = class extends $e(I) {
  constructor(e) {
    super(e), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = !1, this.returnDirections = !1, this.returnPolygonBarriers = !1, this.returnPolylineBarriers = !1, this.returnRoutes = !0, this.returnStops = !1, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = !0, this.startTime = null, this.startTimeIsUTC = !0, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(e) {
    return at(Ne, e);
  }
  readAccumulateAttributes(e) {
    return e == null ? null : e.map((r) => H.fromJSON(r));
  }
  writeAccumulateAttributes(e, r, o) {
    e?.length && (r[o] = e.map((i) => H.toJSON(i)));
  }
  writePointBarriers(e, r, o) {
    le(e, r, o);
  }
  writePolygonBarrier(e, r, o) {
    le(e, r, o);
  }
  writePolylineBarrier(e, r, o) {
    le(e, r, o);
  }
  readRestrictionAttributes(e) {
    return e == null ? null : e.map((r) => Ie.fromJSON(r));
  }
  writeRestrictionAttributes(e, r, o) {
    e?.length && (r[o] = e.map((i) => Ie.toJSON(i)));
  }
  readStartTime(e, r) {
    const { startTime: o } = r;
    return o == null ? null : o === "now" ? "now" : new Date(o);
  }
  writeStartTime(e, r) {
    e != null && (r.startTime = e === "now" ? "now" : e.getTime());
  }
  readStops(e, r) {
    return hr(r.stops);
  }
  writeStops(e, r, o) {
    le(e, r, o);
  }
};
t([s({ type: [String], json: { name: "accumulateAttributeNames", write: !0 } })], p.prototype, "accumulateAttributes", void 0), t([N("accumulateAttributes")], p.prototype, "readAccumulateAttributes", null), t([G("accumulateAttributes")], p.prototype, "writeAccumulateAttributes", null), t([s(ar)], p.prototype, "apiKey", void 0), t([s({ json: { write: !0 } })], p.prototype, "attributeParameterValues", void 0), t([s({ type: String, json: { write: !0 } })], p.prototype, "directionsLanguage", void 0), t([R(Ze)], p.prototype, "directionsLengthUnits", void 0), t([R(kt)], p.prototype, "directionsOutputType", void 0), t([R(Jt)], p.prototype, "directionsStyleName", void 0), t([R(Re, { name: "directionsTimeAttributeName", ignoreUnknown: !1 })], p.prototype, "directionsTimeAttribute", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "findBestSequence", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecision", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecisionM", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecisionZ", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "ignoreInvalidLocations", void 0), t([R(H, { name: "impedanceAttributeName", ignoreUnknown: !1 })], p.prototype, "impedanceAttribute", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "outputGeometryPrecision", void 0), t([R(_t)], p.prototype, "outputGeometryPrecisionUnits", void 0), t([R(xt)], p.prototype, "outputLines", void 0), t([s({ type: W, json: { name: "outSR", write: !0 } })], p.prototype, "outSpatialReference", void 0), t([s({ json: { write: !0 } })], p.prototype, "overrides", void 0), t([s({ json: { name: "barriers", write: !0 } })], p.prototype, "pointBarriers", void 0), t([G("pointBarriers")], p.prototype, "writePointBarriers", null), t([s({ json: { write: !0 } })], p.prototype, "polygonBarriers", void 0), t([G("polygonBarriers")], p.prototype, "writePolygonBarrier", null), t([s({ json: { write: !0 } })], p.prototype, "polylineBarriers", void 0), t([G("polylineBarriers")], p.prototype, "writePolylineBarrier", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveFirstStop", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveLastStop", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveObjectID", void 0), t([s({ type: [String], json: { name: "restrictionAttributeNames", write: !0 } })], p.prototype, "restrictionAttributes", void 0), t([N("restrictionAttributes")], p.prototype, "readRestrictionAttributes", null), t([G("restrictionAttributes")], p.prototype, "writeRestrictionAttributes", null), t([R(Ft)], p.prototype, "restrictUTurns", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnDirections", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolygonBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolylineBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnRoutes", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnStops", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedEdges", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedJunctions", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedTurns", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnZ", void 0), t([s({ json: { write: !0 } })], p.prototype, "startTime", void 0), t([N("startTime")], p.prototype, "readStartTime", null), t([G("startTime")], p.prototype, "writeStartTime", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "startTimeIsUTC", void 0), t([s({ json: { write: !0 } })], p.prototype, "stops", void 0), t([N("stops")], p.prototype, "readStops", null), t([G("stops")], p.prototype, "writeStops", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "timeWindowsAreUTC", void 0), t([s({ type: Ae, json: { write: !0 } })], p.prototype, "travelMode", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "useHierarchy", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "useTimeWindows", void 0), p = Ne = t([A("esri.rest.support.RouteParameters")], p);
const cr = p;
function yr(e) {
  return e && "type" in e;
}
function dr(e) {
  return e && "features" in e && "doNotLocateOnRestrictedElements" in e;
}
function mr(e) {
  return e && "url" in e;
}
function fr(e) {
  return e && "features" in e;
}
function hr(e) {
  return yr(e) ? lr.fromJSON(e) : mr(e) ? pr.fromJSON(e) : dr(e) ? ur.fromJSON(e) : fr(e) ? x.fromJSON(e) : null;
}
function le(e, r, o) {
  e != null && (r[o] = O.isCollection(e) ? { features: e.toArray().map((i) => i.toJSON()) } : e.toJSON());
}
function ge(e) {
  return e.length ? e : null;
}
function Pe(e) {
  switch (e) {
    case "esriGeometryPoint":
      return { type: "esriSMS", style: "esriSMSCircle", size: 12, color: [0, 0, 0, 0], outline: Pe("esriGeometryPolyline") };
    case "esriGeometryPolyline":
      return { type: "esriSLS", style: "esriSLSSolid", width: 1, color: [0, 0, 0, 0] };
    case "esriGeometryPolygon":
      return { type: "esriSFS", style: "esriSFSNull", outline: Pe("esriGeometryPolyline") };
  }
}
function ue(e) {
  return "layers" in e;
}
function vr(e) {
  return e.declaredClass === "esri.rest.support.FeatureSet";
}
function wr(e) {
  return e.declaredClass === "esri.rest.support.NetworkFeatureSet";
}
function gr(e, r, o) {
  const i = r.networkDataset?.networkAttributes, n = i?.filter(({ usageType: c }) => c === "cost") ?? [], y = o.travelMode ?? r.defaultTravelMode;
  if (y == null) return void Qe().warn("route-layer:missing-travel-mode", "The routing service must have a default travel mode or one must be specified in the route parameter.");
  const { timeAttributeName: u, distanceAttributeName: d } = y, g = n.find(({ name: c }) => c === u), h = n.find(({ name: c }) => c === d), a = o.travelMode?.impedanceAttributeName ?? o.impedanceAttribute ?? r.impedance, b = g?.units, P = h?.units;
  if (!b || !P) throw new M("routelayer:unknown-impedance-units", "the units of either the distance or time impedance are unknown");
  const T = o.directionsLanguage ?? r.directionsLanguage, m = o.accumulateAttributes ?? r.accumulateAttributeNames ?? [], f = new Set(n.filter(({ name: c }) => c === u || c === d || c === a || c != null && m.includes(c)).map(({ name: c }) => c)), w = (c) => {
    for (const Oe in c) f.has(Oe) || delete c[Oe];
  };
  for (const c of e.pointBarriers) c.costs != null && (c.addedCost = c.costs[a] ?? 0, w(c.costs));
  for (const c of e.polygonBarriers) c.costs != null && (c.scaleFactor = c.costs[a] ?? 1, w(c.costs));
  for (const c of e.polylineBarriers) c.costs != null && (c.scaleFactor = c.costs[a] ?? 1, w(c.costs));
  const { routeInfo: l } = e, { findBestSequence: B, preserveFirstStop: S, preserveLastStop: L, startTimeIsUTC: F, timeWindowsAreUTC: Xe } = o;
  l.analysisSettings = new Et({ accumulateAttributes: m, directionsLanguage: T, findBestSequence: B, preserveFirstStop: S, preserveLastStop: L, startTimeIsUTC: F, timeWindowsAreUTC: Xe, travelMode: y }), l.totalDuration = z(l.totalCosts?.[u] ?? 0, b), l.totalDistance = Se(l.totalCosts?.[d] ?? 0, P), l.totalLateDuration = z(l.totalViolations?.[u] ?? 0, b), l.totalWaitDuration = z(l.totalWait?.[u] ?? 0, b), l.totalCosts != null && w(l.totalCosts), l.totalViolations != null && w(l.totalViolations), l.totalWait != null && w(l.totalWait);
  for (const c of e.stops) c.serviceCosts != null && (c.serviceDuration = z(c.serviceCosts[u] ?? 0, b), c.serviceDistance = Se(c.serviceCosts[d] ?? 0, P), w(c.serviceCosts)), c.cumulativeCosts != null && (c.cumulativeDuration = z(c.cumulativeCosts[u] ?? 0, b), c.cumulativeDistance = Se(c.cumulativeCosts[d] ?? 0, P), w(c.cumulativeCosts)), c.violations != null && (c.lateDuration = z(c.violations[u] ?? 0, b), w(c.violations)), c.wait != null && (c.waitDuration = z(c.wait[u] ?? 0, b), w(c.wait));
}
async function Ce(e) {
  const r = W.WGS84;
  return await Nt(e.spatialReference, r), Pt(e, r);
}
function z(e, r) {
  switch (r) {
    case "seconds":
      return e / 60;
    case "hours":
      return 60 * e;
    case "days":
      return 60 * e * 24;
    default:
      return e;
  }
}
function Se(e, r) {
  return r === "decimal-degrees" || r === "points" || r === "unknown" ? e : $t(e, r, "meters");
}
function Sr(e) {
  const { attributes: r, geometry: o, popupTemplate: i, symbol: n } = e.toGraphic().toJSON();
  return { attributes: r, geometry: o, popupInfo: i, symbol: n };
}
const br = O.ofType(pe), Tr = O.ofType(ce), ke = O.ofType(re), Je = O.ofType(oe), _e = O.ofType(se), xe = O.ofType(ie), Ye = "esri.layers.RouteLayer", Qe = () => Ee.getLogger(Ye);
let v = class extends lt(ut(pt(ct(yt(Rt))))) {
  constructor(e) {
    super(e), this._cachedServiceDescription = null, this._featureCollection = null, this._type = "Feature Collection", this.defaultSymbols = new ze(), this.directionLines = null, this.directionPoints = null, this.featureCollectionType = "route", this.legendEnabled = !1, this.maxScale = 0, this.minScale = 0, this.pointBarriers = new ke(), this.polygonBarriers = new Je(), this.polylineBarriers = new _e(), this.routeInfo = null, this.spatialReference = W.WGS84, this.stops = new xe(), this.type = "route";
    const r = () => {
      this._setStopSymbol(this.stops);
    };
    this.addHandles(dt(() => this.stops, "change", r, { sync: !0, onListenerAdd: r }));
  }
  writeFeatureCollectionWebmap(e, r, o, i) {
    const n = [this._writePolygonBarriers(), this._writePolylineBarriers(), this._writePointBarriers(), this._writeRouteInfo(), this._writeDirectionLines(), this._writeDirectionPoints(), this._writeStops()].filter((d) => !!d), y = n.map((d, g) => g), u = i.origin === "web-map" ? "featureCollection.layers" : "layers";
    mt(u, n, r), r.opacity = this.opacity, r.visibility = this.visible, r.visibleLayers = y;
  }
  readDirectionLines(e, r) {
    return this._getNetworkFeatures(r, "DirectionLines", (o) => pe.fromGraphic(o));
  }
  readDirectionPoints(e, r) {
    return this._getNetworkFeatures(r, "DirectionPoints", (o) => ce.fromGraphic(o));
  }
  get fullExtent() {
    const e = new We({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: W.WGS84 });
    if (this.routeInfo?.geometry != null) return this.routeInfo.geometry.extent ?? e;
    if (this.stops == null) return e;
    const r = this.stops.filter((n) => n.geometry != null);
    if (r.length < 2) return e;
    const { spatialReference: o } = r.at(0).geometry;
    if (o == null) return e;
    const i = r.toArray().map((n) => {
      const y = n.geometry;
      return [y.x, y.y];
    });
    return new ft({ points: i, spatialReference: o }).extent;
  }
  readMaxScale(e, r) {
    return (ue(r) ? r.layers : r.featureCollection?.layers)?.find((n) => n.layerDefinition.maxScale != null)?.layerDefinition.maxScale ?? 0;
  }
  readMinScale(e, r) {
    return (ue(r) ? r.layers : r.featureCollection?.layers)?.find((n) => n.layerDefinition.minScale != null)?.layerDefinition.minScale ?? 0;
  }
  readPointBarriers(e, r) {
    return this._getNetworkFeatures(r, "Barriers", (o) => re.fromGraphic(o));
  }
  readPolygonBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolygonBarriers", (o) => oe.fromGraphic(o));
  }
  readPolylineBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolylineBarriers", (o) => se.fromGraphic(o));
  }
  readRouteInfo(e, r) {
    return this._getNetworkFeatures(r, "RouteInfo", (o) => ve.fromGraphic(o)).at(0) ?? null;
  }
  readSpatialReference(e, r) {
    const o = ue(r) ? r.layers : r.featureCollection?.layers;
    if (!o?.length) return W.WGS84;
    const { layerDefinition: i, featureSet: n } = o[0], y = n.features[0], u = y?.geometry?.spatialReference ?? n.spatialReference ?? i.spatialReference ?? i.extent.spatialReference ?? Le;
    return W.fromJSON(u);
  }
  readStops(e, r) {
    return this._getNetworkFeatures(r, "Stops", (o) => ie.fromGraphic(o), (o) => this._setStopSymbol(o));
  }
  get title() {
    return this.routeInfo?.name ?? "Route";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return je.routeServiceUrl;
  }
  set url(e) {
    e != null ? this._set("url", ht(e, Qe())) : this._set("url", je.routeServiceUrl);
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e)), Promise.resolve(this);
  }
  removeAll() {
    this.removeResult(), this.pointBarriers.removeAll(), this.polygonBarriers.removeAll(), this.polylineBarriers.removeAll(), this.stops.removeAll();
  }
  removeResult() {
    this.directionLines != null && (this.directionLines.removeAll(), this._set("directionLines", null)), this.directionPoints != null && (this.directionPoints.removeAll(), this._set("directionPoints", null)), this.routeInfo != null && this._set("routeInfo", null);
  }
  async save() {
    await this.load();
    const { fullExtent: e, portalItem: r } = this;
    if (!r) throw new M("routelayer:portal-item-not-set", "save() requires to the layer to have a portal item");
    if (!r.id) throw new M("routelayer:portal-item-not-saved", "Please use saveAs() first to save the routelayer");
    if (r.type !== "Feature Collection") throw new M("routelayer:portal-item-wrong-type", 'Portal item needs to have type "Feature Collection"');
    if (this.routeInfo == null) throw new M("routelayer:route-unsolved", "save() requires a solved route");
    const { portal: o } = r;
    await o.signIn(), o.user || await r.reload();
    const { itemUrl: i, itemControl: n } = r;
    if (n !== "admin" && n !== "update") throw new M("routelayer:insufficient-permissions", "To save this layer, you need to be the owner or an administrator of your organization");
    const y = { messages: [], origin: "portal-item", portal: o, url: i ? vt(i) : void 0, writtenProperties: [] }, u = this.write(void 0, y);
    return r.extent = await Ce(e), r.title = this.title, await r.update({ data: u }), r;
  }
  async saveAs(e, r = {}) {
    if (await this.load(), this.routeInfo == null) throw new M("routelayer:route-unsolved", "saveAs() requires a solved route");
    const o = wt.from(e).clone();
    o.extent ??= await Ce(this.fullExtent), o.id = null, o.portal ??= gt.getDefault(), o.title ??= this.title, o.type = "Feature Collection", o.typeKeywords = ["Data", "Feature Collection", St.MULTI_LAYER, "Route Layer"];
    const { portal: i } = o, n = { messages: [], origin: "portal-item", portal: i, url: null, writtenProperties: [] };
    await i.signIn();
    const y = r?.folder, u = this.write(void 0, n);
    return await i.user?.addItem({ item: o, folder: y, data: u }), this.portalItem = o, At(n), n.portalItem = o, o;
  }
  async solve(e, r) {
    const o = e?.stops ?? this.stops, i = e?.pointBarriers ?? ge(this.pointBarriers), n = e?.polylineBarriers ?? ge(this.polylineBarriers), y = e?.polygonBarriers ?? ge(this.polygonBarriers);
    if (o == null) throw new M("routelayer:undefined-stops", "the route layer must have stops defined in the route parameters.");
    if ((vr(o) || wr(o)) && o.features.length < 2 || O.isCollection(o) && o.length < 2) throw new M("routelayer:insufficent-stops", "the route layer must have two or more stops to solve a route.");
    if (O.isCollection(o)) for (const f of o) f.routeName = null;
    const u = e?.apiKey, d = this.url, g = await this._getServiceDescription(d, u, r), h = e?.travelMode ?? g.defaultTravelMode, a = e?.accumulateAttributes ?? [];
    h != null && (a.push(h.distanceAttributeName), h.timeAttributeName && a.push(h.timeAttributeName));
    const b = { accumulateAttributes: a, directionsOutputType: "featuresets", ignoreInvalidLocations: !0, pointBarriers: i, polylineBarriers: n, polygonBarriers: y, preserveFirstStop: !0, preserveLastStop: !0, returnBarriers: !!i, returnDirections: !0, returnPolygonBarriers: !!y, returnPolylineBarriers: !!n, returnRoutes: !0, returnStops: !0, stops: o }, P = cr.from(e ?? {});
    let T;
    P.set(b);
    try {
      T = await ir(d, P, r);
    } catch (f) {
      throw bt(f) ? f : new M("routelayer:failed-route-request", "the routing request failed", { error: f });
    }
    const m = this._toRouteLayerSolution(T);
    return this._isOverridden("title") || (this.title = m.routeInfo.name ?? "Route"), gr(m, g, P), m;
  }
  update(e) {
    const { stops: r, directionLines: o, directionPoints: i, pointBarriers: n, polylineBarriers: y, polygonBarriers: u, routeInfo: d } = e;
    this.set({ stops: r, pointBarriers: n, polylineBarriers: y, polygonBarriers: u }), this._set("directionLines", o), this._set("directionPoints", i), this._set("routeInfo", d), d.geometry != null && (this.spatialReference = d.geometry.spatialReference);
  }
  _getNetworkFeatures(e, r, o, i) {
    const n = ue(e) ? e.layers : e.featureCollection?.layers, y = n?.find((f) => f.layerDefinition.name === r);
    if (y == null) return new O();
    const { layerDefinition: u, popupInfo: d, featureSet: g } = y, h = u.drawingInfo.renderer, { features: a } = g, b = g.spatialReference ?? u.spatialReference ?? u.extent.spatialReference ?? Le, P = h && Tt(h), T = W.fromJSON(b), m = a.map((f) => {
      const w = K.fromJSON(f);
      w.geometry != null && f.geometry != null && f.geometry.spatialReference == null && (w.geometry.spatialReference = T);
      const l = o(w);
      return l.symbol ??= P?.getSymbol(w) ?? this._getNetworkSymbol(r), l.popupTemplate ??= d && Bt.fromJSON(d), l;
    });
    return i && m.some(({ symbol: f }) => !f) && i(m), new O(m);
  }
  _getNetworkSymbol(e) {
    switch (e) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  async _getServiceDescription(e, r, o) {
    if (this._cachedServiceDescription != null && this._cachedServiceDescription.url === e) return this._cachedServiceDescription.serviceDescription;
    const i = await Ke(e, r, o);
    return this._cachedServiceDescription = { serviceDescription: i, url: e }, i;
  }
  _setStopSymbol(e) {
    if (!e || e.length === 0 || this.defaultSymbols.stops == null || e.every(({ symbol: a }) => a != null)) return;
    const { first: r, last: o, middle: i, unlocated: n, waypoint: y, break: u } = this.defaultSymbols.stops;
    if (this.routeInfo == null || e.length === 1) return void e.forEach((a, b) => {
      switch (b) {
        case 0:
          a.symbol = r;
          break;
        case e.length - 1:
          a.symbol = o;
          break;
        default:
          a.symbol = i;
      }
    });
    const d = e.map(({ sequence: a }) => a).filter((a) => a != null), g = Math.min(...d), h = Math.max(...d);
    for (const a of e) a.sequence !== g ? a.sequence !== h ? a.status === "ok" || a.status === "not-located-on-closest" ? a.locationType !== "waypoint" ? a.locationType !== "break" ? a.symbol = i : a.symbol = u : a.symbol = y : a.symbol = n : a.symbol = o : a.symbol = r;
  }
  _toRouteLayerSolution(e) {
    const r = e.routeResults[0].stops?.map((h) => ie.fromJSON(h.toJSON()));
    this._setStopSymbol(r);
    const o = new xe(r), i = new Je(e.polygonBarriers?.map((h) => {
      const a = oe.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.polygonBarriers, a;
    })), n = new _e(e.polylineBarriers?.map((h) => {
      const a = se.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.polylineBarriers, a;
    })), y = new ke(e.pointBarriers?.map((h) => {
      const a = re.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.pointBarriers, a;
    })), u = e.routeResults[0].route?.toJSON(), d = ve.fromJSON(u);
    d.symbol = this.defaultSymbols.routeInfo;
    const g = new Tr(e.routeResults[0].directionPoints?.features.map((h) => {
      const a = ce.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.directionPoints, a;
    }));
    return { directionLines: new br(e.routeResults[0].directionLines?.features.map((h) => {
      const a = pe.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.directionLines, a;
    })), directionPoints: g, pointBarriers: y, polygonBarriers: i, polylineBarriers: n, routeInfo: d, stops: o };
  }
  _writeDirectionLines() {
    return this._writeNetworkFeatures(this.directionLines, this.defaultSymbols.directionLines, "esriGeometryPolyline", pe.fields, "DirectionLines", "Direction Lines");
  }
  _writeDirectionPoints() {
    return this._writeNetworkFeatures(this.directionPoints, this.defaultSymbols.directionPoints, "esriGeometryPoint", ce.fields, "DirectionPoints", "Direction Points");
  }
  _writeNetworkFeatures(e, r, o, i, n, y) {
    if (!e?.length) return null;
    const u = this.spatialReference.toJSON(), { fullExtent: d, maxScale: g, minScale: h } = this;
    return { featureSet: { features: e.toArray().map((a) => Sr(a)), geometryType: o, spatialReference: u }, layerDefinition: { capabilities: "Query,Update,Editing", drawingInfo: { renderer: { type: "simple", symbol: r != null ? r.toJSON() : Pe(o) } }, extent: d.toJSON(), fields: i, geometryType: o, hasM: !1, hasZ: !1, maxScale: g, minScale: h, name: n, objectIdField: "ObjectID", spatialReference: u, title: y, type: "Feature Layer", typeIdField: "" } };
  }
  _writePointBarriers() {
    return this._writeNetworkFeatures(this.pointBarriers, this.defaultSymbols.pointBarriers, "esriGeometryPoint", re.fields, "Barriers", "Point Barriers");
  }
  _writePolygonBarriers() {
    return this._writeNetworkFeatures(this.polygonBarriers, this.defaultSymbols.polygonBarriers, "esriGeometryPolygon", oe.fields, "PolygonBarriers", "Polygon Barriers");
  }
  _writePolylineBarriers() {
    return this._writeNetworkFeatures(this.polylineBarriers, this.defaultSymbols.polylineBarriers, "esriGeometryPolyline", se.fields, "PolylineBarriers", "Line Barriers");
  }
  _writeRouteInfo() {
    return this._writeNetworkFeatures(this.routeInfo != null ? new O([this.routeInfo]) : null, this.defaultSymbols.routeInfo, "esriGeometryPolyline", ve.fields, "RouteInfo", "Route Details");
  }
  _writeStops() {
    const e = this._writeNetworkFeatures(this.stops, null, "esriGeometryPoint", ie.fields, "Stops", "Stops");
    if (e == null) return null;
    const { stops: r } = this.defaultSymbols, o = r?.first?.toJSON(), i = r?.middle?.toJSON(), n = r?.last?.toJSON();
    return e.layerDefinition.drawingInfo.renderer = { type: "uniqueValue", field1: "Sequence", defaultSymbol: i, uniqueValueInfos: [{ value: "1", symbol: o, label: "First Stop" }, { value: `${this.stops.length}`, symbol: n, label: "Last Stop" }] }, e;
  }
};
t([s({ readOnly: !0, json: { read: !1, origins: { "portal-item": { write: { allowNull: !0, ignoreOrigin: !0 } }, "web-map": { write: { overridePolicy() {
  return { allowNull: !0, ignoreOrigin: this.portalItem == null };
} } } } } })], v.prototype, "_featureCollection", void 0), t([G(["web-map", "portal-item"], "_featureCollection")], v.prototype, "writeFeatureCollectionWebmap", null), t([s({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { target: "type", overridePolicy() {
  return { ignoreOrigin: this.portalItem != null };
} } } } } })], v.prototype, "_type", void 0), t([s({ nonNullable: !0, type: ze })], v.prototype, "defaultSymbols", void 0), t([s({ readOnly: !0 })], v.prototype, "directionLines", void 0), t([N(["web-map", "portal-item"], "directionLines", ["layers", "featureCollection.layers"])], v.prototype, "readDirectionLines", null), t([s({ readOnly: !0 })], v.prototype, "directionPoints", void 0), t([N(["web-map", "portal-item"], "directionPoints", ["layers", "featureCollection.layers"])], v.prototype, "readDirectionPoints", null), t([s({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { ignoreOrigin: !0 } } } } })], v.prototype, "featureCollectionType", void 0), t([s({ readOnly: !0 })], v.prototype, "fullExtent", null), t([s({ json: { origins: { "web-map": { name: "featureCollection.showLegend" } }, write: !0 } })], v.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide"] })], v.prototype, "listMode", void 0), t([s({ type: Number, nonNullable: !0, json: { write: !1 } })], v.prototype, "maxScale", void 0), t([N(["web-map", "portal-item"], "maxScale", ["layers", "featureCollection.layers"])], v.prototype, "readMaxScale", null), t([s({ type: Number, nonNullable: !0, json: { write: !1 } })], v.prototype, "minScale", void 0), t([N(["web-map", "portal-item"], "minScale", ["layers", "featureCollection.layers"])], v.prototype, "readMinScale", null), t([s({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })], v.prototype, "operationalLayerType", void 0), t([s({ nonNullable: !0, type: O.ofType(re) })], v.prototype, "pointBarriers", void 0), t([N(["web-map", "portal-item"], "pointBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPointBarriers", null), t([s({ nonNullable: !0, type: O.ofType(oe) })], v.prototype, "polygonBarriers", void 0), t([N(["web-map", "portal-item"], "polygonBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPolygonBarriers", null), t([s({ nonNullable: !0, type: O.ofType(se) })], v.prototype, "polylineBarriers", void 0), t([N(["web-map", "portal-item"], "polylineBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPolylineBarriers", null), t([s({ readOnly: !0 })], v.prototype, "routeInfo", void 0), t([N(["web-map", "portal-item"], "routeInfo", ["layers", "featureCollection.layers"])], v.prototype, "readRouteInfo", null), t([s({ type: W })], v.prototype, "spatialReference", void 0), t([N(["web-map", "portal-item"], "spatialReference", ["layers", "featureCollection.layers"])], v.prototype, "readSpatialReference", null), t([s({ nonNullable: !0, type: O.ofType(ie) })], v.prototype, "stops", void 0), t([N(["web-map", "portal-item"], "stops", ["layers", "featureCollection.layers"])], v.prototype, "readStops", null), t([s()], v.prototype, "title", null), t([s({ readOnly: !0, json: { read: !1 } })], v.prototype, "type", void 0), t([s()], v.prototype, "url", null), v = t([A(Ye)], v);
const Jr = v;
export {
  Jr as default
};
//# sourceMappingURL=RouteLayer-BX1GQtso.js.map
