import { bN as i, cb as m, aA as r } from "./main-DZxT3i7S.js";
import { d as x } from "./queryTopFeatures-DukZXZxm.js";
async function u(n, o, e) {
  const s = i(n), a = await x(s, m.from(o), { ...e }), t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax) ? { count: a.data.count, extent: null } : { count: a.data.count, extent: r.fromJSON(t) };
}
export {
  u as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-BRA7MYZs.js.map
