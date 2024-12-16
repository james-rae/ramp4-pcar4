import { n as f } from "./date-Cqvy-TgA.js";
import { dN as g, dO as h, dM as m, dP as p, cg as y, dQ as w, dR as a } from "./main-DZxT3i7S.js";
class I {
  constructor() {
    this.code = null, this.description = null;
  }
}
class b {
  constructor(t) {
    this.error = new I(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = t;
  }
}
function c(n) {
  return new b(n);
}
class q {
  constructor(t) {
    this.globalId = null, this.success = !0, this.objectId = this.uniqueId = t;
  }
}
function S(n) {
  return new q(n);
}
const u = /* @__PURE__ */ new Set();
function x(n, t, e, d = !1) {
  u.clear();
  for (const i in e) {
    const r = n.get(i);
    if (!r) continue;
    const o = j(r, e[i]);
    if (u.add(r.name), r && (d || r.editable)) {
      const l = g(r, o);
      if (l) return c(h(l, r, o));
      t[r.name] = o;
    }
  }
  for (const i of n.requiredFields ?? []) if (!u.has(i.name)) return c(`missing required field "${i.name}"`);
  return null;
}
function j(n, t) {
  let e = t;
  return m(n) && typeof t == "string" ? e = parseFloat(t) : p(n) && t != null && typeof t != "string" ? e = String(t) : y(n) && typeof t == "string" && (e = f(t)), w(e);
}
let s;
function A(n, t) {
  if (!n || !a(t)) return n;
  if ("rings" in n || "paths" in n) {
    if (s == null) throw new TypeError("geometry engine not loaded");
    return s.simplify(t, n);
  }
  return n;
}
async function P() {
  return s == null && (s = await import("./geometryEngineJSON-CDiQO0Dv.js").then((n) => n.g)), s;
}
async function E(n, t) {
  !a(n) || t !== "esriGeometryPolygon" && t !== "esriGeometryPolyline" || await P();
}
export {
  S as d,
  c as f,
  E as j,
  x as p,
  A as y
};
//# sourceMappingURL=sourceUtils-CDUC47ds.js.map
