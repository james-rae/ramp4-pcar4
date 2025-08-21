import { a0 as cn, $ as z, eU as d, b8 as j, b6 as A, a3 as x, b5 as S, b7 as W, eV as V, C as B, fz as fn, bq as ln } from "./main-DHXLMse1.js";
import { a0 as o, a as h, X as H, v as K, w as Q, m as M, b as i, r as s, U as g, Q as P, Z as L, B as T, P as w, af as X, ag as D, ah as k, g as R, F as on, ai as dn, aj as wn, E as q, ak as hn, N, A as O, al as mn, am as yn, I as _, an as pn, ao as U } from "./arcadeUtils-CLnCYna2.js";
import { c as I, r as C, b as y } from "./TimeOnly-CHaaijop.js";
import { l as G } from "./portalUtils-BKQPJG5p.js";
import { disjoint as vn, intersects as gn, touches as Pn, crosses as In, within as An, contains as Fn, overlaps as Rn, equals as bn, relate as xn, intersect as Nn, union as On, difference as Sn, symmetricDifference as jn, clip as Dn, cut as Cn, planarArea as Y, geodesicArea as $, planarLength as Z, geodesicLength as E, distance as Ln, densify as nn, geodesicDensify as en, generalize as Tn, buffer as Un, geodesicBuffer as Zn, offset as Jn, rotate as rn, simplify as tn, isSimple as Mn, convexHull as kn, nearestCoordinate as qn, nearestVertex as En } from "./geometryEngineAsync-CTEgGwSt.js";
async function an(a, e, r) {
  if (!cn?.findCredential(a.restUrl)) return null;
  if (a.loadStatus === "loaded" && e === "" && a.user?.sourceJSON && r === !1) return a.user.sourceJSON;
  const f = { responseType: "json", query: { f: "json" } };
  if (r && (f.query.returnUserLicenseTypeExtensions = !0), e === "") {
    const t = await z(a.restUrl + "/community/self", f);
    if (t.data) {
      const u = t.data;
      if (u?.username) return u;
    }
    return null;
  }
  const n = await z(a.restUrl + "/community/users/" + e, f);
  if (n.data) {
    const t = n.data;
    return t.error ? null : t;
  }
  return null;
}
function sn(a) {
  return fn.indexOf("4.") === 0 ? S.fromExtent(a) : new S({ spatialReference: a.spatialReference, rings: [[[a.xmin, a.ymin], [a.xmin, a.ymax], [a.xmax, a.ymax], [a.xmax, a.ymin], [a.xmin, a.ymin]]] });
}
function F(a, e, r) {
  if (h(a, 2, 2, e, r), !(a[0] instanceof d && a[1] instanceof d)) {
    if (!(a[0] instanceof d && a[1] === null)) {
      if (!(a[1] instanceof d && a[0] === null)) {
        if (a[0] !== null || a[1] !== null) throw new i(e, s.InvalidParameter, r);
      }
    }
  }
}
async function un(a, e) {
  if (a.type !== "polygon" && a.type !== "polyline" && a.type !== "extent") return 0;
  let r = 1;
  (a.spatialReference.vcsWkid || a.spatialReference.latestVcsWkid) && (r = pn(a.spatialReference) / ln(a.spatialReference));
  let c = 0;
  if (a.type === "polyline") for (const n of a.paths) for (let t = 1; t < n.length; t++) c += U(n[t], n[t - 1], r);
  else if (a.type === "polygon") for (const n of a.rings) {
    for (let t = 1; t < n.length; t++) c += U(n[t], n[t - 1], r);
    (n[0][0] !== n[n.length - 1][0] || n[0][1] !== n[n.length - 1][1] || n[0][2] !== void 0 && n[0][2] !== n[n.length - 1][2]) && (c += U(n[0], n[n.length - 1], r));
  }
  else a.type === "extent" && (c += 2 * U([a.xmin, a.ymin, 0], [a.xmax, a.ymin, 0], r), c += 2 * U([a.xmin, a.ymin, 0], [a.xmin, a.ymax, 0], r), c *= 2, c += 4 * Math.abs(w(a.zmax, 0) * r - w(a.zmin, 0) * r));
  const f = new A({ hasZ: !1, hasM: !1, spatialReference: a.spatialReference, paths: [[0, 0], [0, c]] });
  return Z(f, e);
}
function Kn(a) {
  a.mode === "async" && (a.functions.disjoint = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] === null || n[1] === null || vn(n[0], n[1])));
  }, a.functions.intersects = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && gn(n[0], n[1])));
  }, a.functions.touches = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && Pn(n[0], n[1])));
  }, a.functions.crosses = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && In(n[0], n[1])));
  }, a.functions.within = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && An(n[0], n[1])));
  }, a.functions.contains = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && Fn(n[0], n[1])));
  }, a.functions.overlaps = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] !== null && n[1] !== null && Rn(n[0], n[1])));
  }, a.functions.equals = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (h(n, 2, 2, e, r), n[0] === n[1] || (n[0] instanceof d && n[1] instanceof d ? bn(n[0], n[1]) : (H(n[0]) && H(n[1]) || !!(K(n[0]) && K(n[1]) || Q(n[0]) && Q(n[1]))) && n[0].equals(n[1]))));
  }, a.functions.relate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 3, 3, e, r), n[0] instanceof d && n[1] instanceof d) return xn(n[0], n[1], M(n[2]));
      if (n[0] instanceof d && n[1] === null || n[1] instanceof d && n[0] === null || n[0] === null && n[1] === null) return !1;
      throw new i(e, s.InvalidParameter, r);
    });
  }, a.functions.intersection = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] === null || n[1] === null ? null : Nn(n[0], n[1])));
  }, a.functions.union = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      const t = [];
      if ((n = o(n)).length === 0) throw new i(e, s.WrongNumberOfParameters, r);
      if (n.length === 1) if (g(n[0])) {
        const u = o(n[0]);
        for (let l = 0; l < u.length; l++) if (u[l] !== null) {
          if (!(u[l] instanceof d)) throw new i(e, s.InvalidParameter, r);
          t.push(u[l]);
        }
      } else {
        if (!P(n[0])) {
          if (n[0] instanceof d) return L(I(n[0]), e.spatialReference);
          if (n[0] === null) return null;
          throw new i(e, s.InvalidParameter, r);
        }
        {
          const u = o(n[0].toArray());
          for (let l = 0; l < u.length; l++) if (u[l] !== null) {
            if (!(u[l] instanceof d)) throw new i(e, s.InvalidParameter, r);
            t.push(u[l]);
          }
        }
      }
      else for (let u = 0; u < n.length; u++) if (n[u] !== null) {
        if (!(n[u] instanceof d)) throw new i(e, s.InvalidParameter, r);
        t.push(n[u]);
      }
      return t.length === 0 ? null : On(t);
    });
  }, a.functions.difference = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] === null ? null : n[1] === null ? I(n[0]) : Sn(n[0], n[1])));
  }, a.functions.symmetricdifference = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => (F(n = o(n), e, r), n[0] === null && n[1] === null ? null : n[0] === null ? I(n[1]) : n[1] === null ? I(n[0]) : jn(n[0], n[1])));
  }, a.functions.clip = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[1] instanceof j) && n[1] !== null) throw new i(e, s.InvalidParameter, r);
      if (n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return n[1] === null ? null : Dn(n[0], n[1]);
    });
  }, a.functions.cut = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[1] instanceof A) && n[1] !== null) throw new i(e, s.InvalidParameter, r);
      if (n[0] === null) return [];
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return n[1] === null ? [I(n[0])] : Cn(n[0], n[1]);
    });
  }, a.functions.area = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (T(n[0])) {
        const t = await n[0].sumArea(C(w(n[1], -1)), !1, e.abortSignal);
        if (e.abortSignal.aborted) throw new i(e, s.Cancelled, r);
        return t;
      }
      if (g(n[0]) || P(n[0])) {
        const t = X(n[0], e.spatialReference);
        return t === null ? 0 : Y(t, C(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return Y(n[0], C(w(n[1], -1)));
    });
  }, a.functions.areageodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (T(n[0])) {
        const t = await n[0].sumArea(C(w(n[1], -1)), !0, e.abortSignal);
        if (e.abortSignal.aborted) throw new i(e, s.Cancelled, r);
        return t;
      }
      if (g(n[0]) || P(n[0])) {
        const t = X(n[0], e.spatialReference);
        return t === null ? 0 : $(t, C(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return $(n[0], C(w(n[1], -1)));
    });
  }, a.functions.length = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (T(n[0])) {
        const t = await n[0].sumLength(y(w(n[1], -1)), !1, e.abortSignal);
        if (e.abortSignal.aborted) throw new i(e, s.Cancelled, r);
        return t;
      }
      if (g(n[0]) || P(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : Z(t, y(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return Z(n[0], y(w(n[1], -1)));
    });
  }, a.functions.length3d = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (g(n[0]) || P(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : t.hasZ === !0 ? un(t, y(w(n[1], -1))) : Z(t, y(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return n[0].hasZ === !0 ? un(n[0], y(w(n[1], -1))) : Z(n[0], y(w(n[1], -1)));
    });
  }, a.functions.lengthgeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (h(n, 1, 2, e, r), (n = o(n))[0] === null) return 0;
      if (T(n[0])) {
        const t = await n[0].sumLength(y(w(n[1], -1)), !0, e.abortSignal);
        if (e.abortSignal.aborted) throw new i(e, s.Cancelled, r);
        return t;
      }
      if (g(n[0]) || P(n[0])) {
        const t = D(n[0], e.spatialReference);
        return t === null ? 0 : E(t, y(w(n[1], -1)));
      }
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return E(n[0], y(w(n[1], -1)));
    });
  }, a.functions.distance = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      n = o(n), h(n, 2, 3, e, r);
      let t = n[0];
      (g(n[0]) || P(n[0])) && (t = k(n[0], e.spatialReference));
      let u = n[1];
      if ((g(n[1]) || P(n[1])) && (u = k(n[1], e.spatialReference)), !(t instanceof d)) throw new i(e, s.InvalidParameter, r);
      if (!(u instanceof d)) throw new i(e, s.InvalidParameter, r);
      return Ln(t, u, y(w(n[2], -1)));
    });
  }, a.functions.distancegeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      n = o(n), h(n, 2, 3, e, r);
      const t = n[0], u = n[1];
      if (!(t instanceof x)) throw new i(e, s.InvalidParameter, r);
      if (!(u instanceof x)) throw new i(e, s.InvalidParameter, r);
      const l = new A({ paths: [], spatialReference: t.spatialReference });
      return l.addPath([t, u]), E(l, y(w(n[2], -1)));
    });
  }, a.functions.densify = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      if (t <= 0) throw new i(e, s.InvalidParameter, r);
      return n[0] instanceof S || n[0] instanceof A ? nn(n[0], t, y(w(n[2], -1))) : n[0] instanceof j ? nn(sn(n[0]), t, y(w(n[2], -1))) : n[0];
    });
  }, a.functions.densifygeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      if (t <= 0) throw new i(e, s.InvalidParameter, r);
      return n[0] instanceof S || n[0] instanceof A ? en(n[0], t, y(w(n[2], -1))) : n[0] instanceof j ? en(sn(n[0]), t, y(w(n[2], -1))) : n[0];
    });
  }, a.functions.generalize = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 4, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      return Tn(n[0], t, on(w(n[2], !0)), y(w(n[3], -1)));
    });
  }, a.functions.buffer = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      return t === 0 ? I(n[0]) : Un(n[0], t, y(w(n[2], -1)));
    });
  }, a.functions.buffergeodetic = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      return t === 0 ? I(n[0]) : Zn(n[0], t, y(w(n[2], -1)));
    });
  }, a.functions.offset = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 6, e, r), n[0] === null) return null;
      if (!(n[0] instanceof S || n[0] instanceof A)) throw new i(e, s.InvalidParameter, r);
      const t = R(n[1]);
      if (isNaN(t)) throw new i(e, s.InvalidParameter, r);
      const u = R(w(n[4], 10));
      if (isNaN(u)) throw new i(e, s.InvalidParameter, r);
      const l = R(w(n[5], 0));
      if (isNaN(l)) throw new i(e, s.InvalidParameter, r);
      return Jn(n[0], t, y(w(n[2], -1)), M(w(n[3], "round")).toLowerCase(), u, l);
    });
  }, a.functions.rotate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 3, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      const t = n[0] instanceof j ? S.fromExtent(n[0]) : n[0], u = R(n[1]);
      if (isNaN(u)) throw new i(e, s.InvalidParameter, r);
      const l = w(n[2], null);
      if (l === null) return rn(t, u);
      if (l instanceof x) return rn(t, u, l);
      throw new i(e, s.InvalidParameter, r);
    });
  }, a.functions.centroid = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      let t = n[0];
      if ((g(n[0]) || P(n[0])) && (t = k(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new i(e, s.InvalidParameter, r);
      return t instanceof x ? L(I(t), e.spatialReference) : t instanceof S ? t.centroid : t instanceof A ? dn(t) : t instanceof W ? wn(t) : t instanceof j ? t.center : null;
    });
  }, a.functions.measuretocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((g(n[0]) || P(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new i(e, s.InvalidParameter, r);
      if (!(t instanceof A)) throw new i(e, s.InvalidParameter, r);
      if (q(n[1] === !1)) throw new i(e, s.InvalidParameter, r);
      const u = hn(t, n[1]);
      return u ? N.convertObjectToArcadeDictionary(u, O(e), !1, !0) : null;
    });
  }, a.functions.pointtocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((g(n[0]) || P(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new i(e, s.InvalidParameter, r);
      if (!(t instanceof A)) throw new i(e, s.InvalidParameter, r);
      const u = n[1];
      if (u === null) return null;
      if (!(u instanceof x)) throw new i(e, s.InvalidParameter, r);
      if (q(n[1] === !1)) throw new i(e, s.InvalidParameter, r);
      const l = mn(t, u);
      return l ? N.convertObjectToArcadeDictionary(l, O(e), !1, !0) : null;
    });
  }, a.functions.distancetocoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), n[0] === null) return null;
      let t = n[0];
      if ((g(n[0]) || P(n[0])) && (t = D(n[0], e.spatialReference)), t === null) return null;
      if (!(t instanceof d)) throw new i(e, s.InvalidParameter, r);
      if (!(t instanceof A)) throw new i(e, s.InvalidParameter, r);
      if (q(n[1] === !1)) throw new i(e, s.InvalidParameter, r);
      const u = yn(t, n[1]);
      return u ? N.convertObjectToArcadeDictionary(u, O(e), !1, !0) : null;
    });
  }, a.functions.multiparttosinglepart = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      if (n[0] instanceof x) return [L(I(n[0]), e.spatialReference)];
      if (n[0] instanceof j) return [L(I(n[0]), e.spatialReference)];
      const t = await tn(n[0]);
      if (t instanceof S) {
        const u = [], l = [];
        for (let m = 0; m < t.rings.length; m++) if (t.isClockwise(t.rings[m])) {
          const p = V({ rings: [t.rings[m]], hasZ: t.hasZ === !0, hasM: t.hasM === !0, spatialReference: t.spatialReference.toJSON() });
          u.push(p);
        } else l.push({ ring: t.rings[m], pt: t.getPoint(m, 0) });
        for (let m = 0; m < l.length; m++) for (let p = 0; p < u.length; p++) if (u[p].contains(l[m].pt)) {
          u[p].addRing(l[m].ring);
          break;
        }
        return u;
      }
      if (t instanceof A) {
        const u = [];
        for (let l = 0; l < t.paths.length; l++) {
          const m = V({ paths: [t.paths[l]], hasZ: t.hasZ === !0, hasM: t.hasM === !0, spatialReference: t.spatialReference.toJSON() });
          u.push(m);
        }
        return u;
      }
      if (n[0] instanceof W) {
        const u = [], l = L(I(n[0]), e.spatialReference);
        for (let m = 0; m < l.points.length; m++) u.push(l.getPoint(m));
        return u;
      }
      return null;
    });
  }, a.functions.issimple = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return !0;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return Mn(n[0]);
    });
  }, a.functions.simplify = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return tn(n[0]);
    });
  }, a.functions.convexhull = function(e, r) {
    return a.standardFunctionAsync(e, r, (c, f, n) => {
      if (n = o(n), h(n, 1, 1, e, r), n[0] === null) return null;
      if (!(n[0] instanceof d)) throw new i(e, s.InvalidParameter, r);
      return kn(n[0]);
    });
  }, a.functions.getuser = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      h(n, 0, 2, e, r);
      let t = w(n[1], ""), u = t === !0;
      if (t = t === !0 || t === !1 ? "" : M(t), n.length === 0 || n[0] instanceof _) {
        let m;
        m = e.services?.portal ? e.services.portal : B.getDefault(), n.length > 0 && (m = G(n[0], m));
        const p = await an(m, t, u);
        if (p) {
          const b = JSON.parse(JSON.stringify(p));
          for (const v of ["lastLogin", "created", "modified"]) b[v] !== void 0 && b[v] !== null && (b[v] = new Date(b[v]));
          return N.convertObjectToArcadeDictionary(b, O(e));
        }
        return null;
      }
      let l = null;
      if (T(n[0]) && (l = n[0]), l) {
        if (u = !1, t) return null;
        await l.load();
        const m = await l.getOwningSystemUrl();
        if (!m) {
          if (!t) {
            const v = await l.getIdentityUser();
            return v ? N.convertObjectToArcadeDictionary({ username: v }, O(e)) : null;
          }
          return null;
        }
        let p;
        p = e.services?.portal ? e.services.portal : B.getDefault(), p = G(new _(m), p);
        const b = await an(p, t, u);
        if (b) {
          const v = JSON.parse(JSON.stringify(b));
          for (const J of ["lastLogin", "created", "modified"]) v[J] !== void 0 && v[J] !== null && (v[J] = new Date(v[J]));
          return N.convertObjectToArcadeDictionary(v, O(e));
        }
        return null;
      }
      throw new i(e, s.InvalidParameter, r);
    });
  }, a.functions.nearestcoordinate = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[0] instanceof d || n[0] === null)) throw new i(e, s.InvalidParameter, r);
      if (!(n[1] instanceof x || n[1] === null)) throw new i(e, s.InvalidParameter, r);
      if (n[0] === null || n[1] === null) return null;
      const t = await qn(n[0], n[1]);
      return t === null ? null : N.convertObjectToArcadeDictionary({ coordinate: t.coordinate, distance: t.distance, sideOfLine: t.distance === 0 ? "straddle" : t.isRightSide ? "right" : "left" }, O(e), !1, !0);
    });
  }, a.functions.nearestvertex = function(e, r) {
    return a.standardFunctionAsync(e, r, async (c, f, n) => {
      if (n = o(n), h(n, 2, 2, e, r), !(n[0] instanceof d || n[0] === null)) throw new i(e, s.InvalidParameter, r);
      if (!(n[1] instanceof x || n[1] === null)) throw new i(e, s.InvalidParameter, r);
      if (n[0] === null || n[1] === null) return null;
      const t = await En(n[0], n[1]);
      return t === null ? null : N.convertObjectToArcadeDictionary({ coordinate: t.coordinate, distance: t.distance, sideOfLine: t.distance === 0 ? "straddle" : t.isRightSide ? "right" : "left" }, O(e), !1, !0);
    });
  });
}
export {
  Kn as registerFunctions
};
//# sourceMappingURL=geomasync-BXD2F-qF.js.map
