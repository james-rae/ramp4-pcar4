import { b_ as f, b$ as p, c0 as i, ap as o } from "./main-DZxT3i7S.js";
function x(n, r, a, c) {
  if (f(n.spatialReference, a)) {
    t[0] = n.x, t[1] = n.y;
    const e = n.z;
    return t[2] = e ?? c ?? 0, p(t, n.spatialReference, 0, r, a, 0);
  }
  const s = i(n, a);
  return !!s && (r[0] = s?.x, r[1] = s?.y, r[2] = s?.z ?? c ?? 0, !0);
}
const t = o();
export {
  x as c
};
//# sourceMappingURL=projectPointToVector-BM3JDlis.js.map
