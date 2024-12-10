import { el as m, s as n, em as u, c$ as d, en as h, ap as a } from "./main-DZxT3i7S.js";
let c = v();
function v() {
  return new m(50);
}
async function p(r, o = null) {
  if (!r.isPrimitive) {
    const e = r.resource?.href;
    if (!e) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s = c.get(e);
    if (s !== void 0) return s;
    const { fetch: l } = await import("./objectResourceUtils-Bc7EK1_T.js"), f = await l(e, { disableTextures: !0, spherical: !0, doublePrecisionRequiresObfuscation: !0 }), t = u(f.referenceBoundingBox, a());
    return c.put(e, t), t;
  }
  if (!r.resource?.primitive) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
  const i = d(h(r.resource.primitive));
  if (o != null) for (let e = 0; e < i.length; e++) i[e] *= o;
  return u(i, a());
}
export {
  p as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-CBpcKyaW.js.map
