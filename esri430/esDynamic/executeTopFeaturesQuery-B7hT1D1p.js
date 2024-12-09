import { cm as f, cT as c, U as i } from "./main-CNI-dCKS.js";
import { p as n } from "./queryTopFeatures-B7koTpJX.js";
async function d(r, a, o, t) {
  const e = f(r), m = { ...t }, { data: s } = await n(e, c.from(a), o, m);
  return i.fromJSON(s);
}
export {
  d as executeTopFeaturesQuery
};
//# sourceMappingURL=executeTopFeaturesQuery-B7hT1D1p.js.map
