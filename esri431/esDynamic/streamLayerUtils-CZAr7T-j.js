import { P as m, $ as c } from "./utils-BVp7JbW3.js";
import { l as u, a as y, i as f, f as n } from "./main-DZxT3i7S.js";
const s = "Stream Service", p = "Feed", d = "stream-layer-save", v = "stream-layer-save-as";
function i(r) {
  return { isValid: r.type === "stream" && !!r.url && !r.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function l(r) {
  const e = r.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function x(r, e) {
  const { parsedUrl: t, title: o, fullExtent: a } = r;
  e.url = t.path, e.title ||= o, e.extent = null, a != null && (e.extent = await u(a)), y(e, n.METADATA), f(e, n.SINGLE_LAYER);
}
async function A(r, e) {
  return m({ layer: r, itemType: s, additionalItemType: p, validateLayer: i, createItemData: l, errorNamePrefix: d }, e);
}
async function P(r, e, t) {
  return c({ layer: r, itemType: s, validateLayer: i, createItemData: l, errorNamePrefix: v, newItem: e, setItemProperties: x }, t);
}
export {
  A as save,
  P as saveAs
};
//# sourceMappingURL=streamLayerUtils-CZAr7T-j.js.map
