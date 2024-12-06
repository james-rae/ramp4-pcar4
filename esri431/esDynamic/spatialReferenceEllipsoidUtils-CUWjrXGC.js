import { b1 as c, c1 as k, c2 as u, c3 as m, c4 as C, c5 as l, c6 as r } from "./main-DZxT3i7S.js";
const U = new c(k), n = new c(u), e = new c(m), b = new c(C);
function x(t) {
  const p = f.get(t);
  if (p) return p;
  let s = U;
  if (t) if (t === n) s = n;
  else if (t === e) s = e;
  else {
    const a = t.wkid, o = t.latestWkid;
    if (a != null || o != null) l(a) || l(o) ? s = n : (r(a) || r(o)) && (s = e);
    else {
      const w = t.wkt2 ?? t.wkt;
      if (w) {
        const i = w.toUpperCase();
        i === $ ? s = n : i === d && (s = e);
      }
    }
  }
  return f.set(t, s), s;
}
const f = /* @__PURE__ */ new Map(), $ = n.wkt.toUpperCase(), d = e.wkt.toUpperCase();
export {
  x as a,
  b as w
};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-CUWjrXGC.js.map
