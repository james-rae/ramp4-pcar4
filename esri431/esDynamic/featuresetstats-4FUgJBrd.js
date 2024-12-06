import { m } from "./TimeOnly-1Agv6Qm9.js";
import { i as h, K as f, E as l, P as w, X as d, a as p, r as S, Y as c, B as v } from "./languageUtils-1MI-6f47.js";
import { l as u } from "./arcadeUtils-D2KMJEyx.js";
import { Z as g, r as x } from "./WhereClause-DvtkPbGD.js";
async function s(n, a, t, i) {
  if (t.length === 1) {
    if (l(t[0])) return u(n, t[0], c(t[1], -1));
    if (d(t[0])) return u(n, t[0].toArray(), c(t[1], -1));
  } else if (t.length === 2) {
    if (l(t[0])) return u(n, t[0], c(t[1], -1));
    if (d(t[0])) return u(n, t[0].toArray(), c(t[1], -1));
    if (f(t[0])) {
      const e = await t[0].load(), r = await A(g.create(t[1], { fieldsIndex: e.getFieldsIndex(), timeZone: e.dateFieldsTimeZoneDefaultUTC }), i, a);
      return y(a, await t[0].calculateStatistic(n, r, c(t[2], 1e3), a.abortSignal));
    }
  } else if (t.length === 3 && f(t[0])) {
    const e = await t[0].load(), r = await A(g.create(t[1], { fieldsIndex: e.getFieldsIndex(), timeZone: e.dateFieldsTimeZoneDefaultUTC }), i, a);
    return y(a, await t[0].calculateStatistic(n, r, c(t[2], 1e3), a.abortSignal));
  }
  return u(n, t, -1);
}
function y(n, a) {
  return a instanceof x ? m.fromReaderAsTimeStampOffset(a.toStorageFormat()) : a instanceof Date ? m.dateJSAndZoneToArcadeDate(a, v(n)) : a;
}
async function A(n, a, t) {
  const i = n.getVariables();
  if (i.length > 0) {
    const e = [];
    for (let o = 0; o < i.length; o++) {
      const F = { name: i[o] };
      e.push(await a.evaluateIdentifier(t, F));
    }
    const r = {};
    for (let o = 0; o < i.length; o++) r[i[o]] = e[o];
    return n.parameters = r, n;
  }
  return n;
}
function D(n) {
  n.mode === "async" && (n.functions.stdev = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("stdev", a, r, n));
  }, n.functions.variance = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("variance", a, r, n));
  }, n.functions.average = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("mean", a, r, n));
  }, n.functions.mean = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("mean", a, r, n));
  }, n.functions.sum = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("sum", a, r, n));
  }, n.functions.min = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("min", a, r, n));
  }, n.functions.max = function(a, t) {
    return n.standardFunctionAsync(a, t, (i, e, r) => s("max", a, r, n));
  }, n.functions.count = function(a, t) {
    return n.standardFunctionAsync(a, t, async (i, e, r) => {
      if (h(r, 1, 1, a, t), f(r[0])) return r[0].count(i.abortSignal);
      if (l(r[0]) || w(r[0])) return r[0].length;
      if (d(r[0])) return r[0].length();
      throw new p(a, S.InvalidParameter, t);
    });
  });
}
export {
  D as registerFunctions
};
//# sourceMappingURL=featuresetstats-4FUgJBrd.js.map
