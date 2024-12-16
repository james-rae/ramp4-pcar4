import { e as b, c_ as Q, cG as j, cH as A, cI as E, b1 as I, S as K, fn as W, fr as M, fs as _ } from "./main-DZxT3i7S.js";
import { t as B, N as T } from "./arcadeUtils-D2KMJEyx.js";
import { i as k, a as c, r as f, d as G, P as w, $ as C, Y as V, E as v, B as z, z as D, k as P, t as H, g as U, T as Y, Z as F, _ as Z } from "./languageUtils-1MI-6f47.js";
import { l as L } from "./portalUtils-Vbdalh-1.js";
import { p as O, n as X } from "./project-C8WCxLmD.js";
import { s as $, m as nn, t as tn, p as en, c as rn } from "./GraphQueryStreaming-DY2WMXnT.js";
let u = null;
async function an(n) {
  const t = Q.geometryServiceUrl ?? "";
  if (!t) {
    j() || await A();
    for (const e of n) e.container[e.indexer] = E(e.container[e.indexer], I.WGS84);
    return;
  }
  const r = n.map((e) => e.container[e.indexer]), i = new O({ geometries: r, outSpatialReference: I.WGS84 }), s = await X(t, i);
  for (let e = 0; e < s.length; e++) {
    const a = n[e];
    a.container[a.indexer] = s[e];
  }
}
async function q(n, t) {
  const r = new K({ portal: n, id: t });
  return await r.load(), u === null && (u = await import("./knowledgeGraphService-9wJAFHhQ.js").then((i) => i.k)), await u.fetchKnowledgeGraph(r.url);
}
function R(n, t, r, i, s) {
  if (n === null) return null;
  if (w(n) || D(n)) return n;
  if (P(n) || P(n)) return n.toJSDate();
  if (H(n)) return n.toStorageFormat();
  if (U(n)) return n.toStorageString();
  if (Y(n)) {
    const e = {};
    for (const a of n.keys()) e[a] = R(n.field(a), t, r, i, s), e[a] instanceof W && s.push({ container: e, indexer: a });
    return e;
  }
  if (v(n)) {
    const e = n.map((a) => R(a, t, r, i, s));
    for (let a = 0; a < e.length; a++) e[a] instanceof W && s.push({ container: e, indexer: a });
    return e;
  }
  return F(n) ? n.spatialReference.isWGS84 ? n : n.spatialReference.isWebMercator && t ? M(n) : n : void 0;
}
function on(n, t) {
  if (!n) return n;
  if (n.spatialReference.isWGS84 && t.spatialReference.isWebMercator) return _(n);
  if (n.spatialReference.equals(t.spatialReference)) return n;
  throw new c(t, f.WrongSpatialReference, null);
}
function S(n, t) {
  if (!n) return null;
  const r = {};
  for (const i in n) r[i] = d(n[i], t);
  return r;
}
function d(n, t) {
  return n === null ? null : v(n) ? n.map((r) => d(r, t)) : n instanceof nn ? { graphTypeName: n.typeName, id: n.id, graphType: "entity", properties: S(n.properties, t) } : n instanceof tn ? { graphType: "object", properties: S(n.properties, t) } : n instanceof en ? { graphTypeName: n.typeName, id: n.id, graphType: "relationship", originId: n.originId ?? null, destinationId: n.destinationId ?? null, properties: S(n.properties, t) } : n instanceof rn ? { graphType: "path", path: n.path ? n.path.map((r) => d(r, t)) : null } : F(n) ? on(n, t) : w(n) || D(n) || Z(n) ? n : null;
}
function dn(n) {
  n.mode === "async" && (n.functions.knowledgegraphbyportalitem = function(t, r) {
    return n.standardFunctionAsync(t, r, (i, s, e) => {
      if (k(e, 2, 2, t, r), e[0] === null) throw new c(t, f.PortalRequired, r);
      if (e[0] instanceof B) {
        const h = G(e[1]);
        let p;
        return p = t.services?.portal ? t.services.portal : b.getDefault(), q(L(e[0], p), h);
      }
      if (w(e[0]) === !1) throw new c(t, f.InvalidParameter, r);
      const a = G(e[0]);
      return q(t.services?.portal ?? b.getDefault(), a);
    });
  }, n.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), n.functions.querygraph = function(t, r) {
    return n.standardFunctionAsync(t, r, async (i, s, e) => {
      k(e, 2, 4, t, r);
      const a = e[0];
      if (!C(a)) throw new c(t, f.InvalidParameter, r);
      const h = e[1];
      if (!w(h)) throw new c(t, f.InvalidParameter, r);
      u === null && (u = await import("./knowledgeGraphService-9wJAFHhQ.js").then((o) => o.k));
      let p = null;
      const m = V(e[2], null);
      if (!(m instanceof T || m === null)) throw new c(t, f.InvalidParameter, r);
      if (m) {
        let o = [];
        p = R(m, !0, !1, t, o), o = o.filter((l) => !l.container[l.indexer].spatialReference.isWGS84), o.length > 0 && await an(o);
      }
      const x = new $({ openCypherQuery: h, bindParameters: p });
      (a?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (x.outputSpatialReference = t.spatialReference);
      const N = (await u.executeQueryStreaming(a, x)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: o, value: l } = await N.read();
          if (o) break;
          if (v(l)) for (const g of l) y.push(d(g, t));
          else {
            const g = [];
            for (const J of l) g.push(d(l[J], t));
            y.push(g);
          }
        }
      } catch (o) {
        throw o;
      }
      return T.convertJsonToArcade(y, z(t), !1, !0);
    });
  }, n.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  dn as registerFunctions
};
//# sourceMappingURL=knowledgegraph-D52YjN5Y.js.map
