import { P as y, $ as p } from "./utils-BVp7JbW3.js";
import { o as f } from "./jsonContext-iveSquhc.js";
import { w as v, a as d, i as I, f as s } from "./main-DZxT3i7S.js";
import { p as n } from "./resourceUtils-BITspl6q.js";
const i = "Group Layer", g = "group-layer-save", P = "group-layer-save-as", o = s.GROUP_LAYER_MAP;
function c(e) {
  return { isValid: e.type === "group", errorMessage: "Layer.type should be 'group'" };
}
function A(e) {
  return { isValid: v(e, o), errorMessage: `Layer.portalItem.typeKeywords should have '${o}'` };
}
function u(e, r) {
  return { ...f(e, "web-map", !0), initiator: r };
}
function l(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function R(e, r) {
  r.title ||= e.title, d(r, s.METADATA), I(r, o);
}
async function N(e, r) {
  return y({ layer: e, itemType: i, validateLayer: c, validateItem: A, createJSONContext: (t) => u(t, e), createItemData: l, errorNamePrefix: g, saveResources: async (t, a) => (e.sourceIsPortalItem || await t.removeAllResources().catch(() => {
  }), n(e.resourceReferences, a)) }, r);
}
async function O(e, r, t) {
  return p({ layer: e, itemType: i, validateLayer: c, createJSONContext: (a) => u(a, e), createItemData: l, errorNamePrefix: P, newItem: r, setItemProperties: R, saveResources: (a, m) => n(e.resourceReferences, m) }, t);
}
export {
  N as save,
  O as saveAs
};
//# sourceMappingURL=groupLayerUtils-BZH9j2Nq.js.map
