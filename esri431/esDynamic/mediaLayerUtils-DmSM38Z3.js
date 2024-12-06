import { P as c, $ as f } from "./utils-BVp7JbW3.js";
import { o as y } from "./jsonContext-iveSquhc.js";
import { l as d, a as v, f as x } from "./main-DZxT3i7S.js";
import { p as s } from "./resourceUtils-BITspl6q.js";
const o = "Media Layer", P = "media-layer-save", E = "media-layer-save-as", n = ["media-layer:unsupported-source"];
function i(e) {
  return { isValid: e.type === "media", errorMessage: "Layer.type should be 'media'" };
}
function u(e) {
  return y(e, "portal-item", !0);
}
function l(e) {
  return Promise.resolve(e.layerJSON);
}
async function m(e, r) {
  r.extent = e.fullExtent ? await d(e.fullExtent) : null;
}
async function I(e, r) {
  r.title ||= e.title, await m(e, r), v(r, x.METADATA);
}
async function T(e, r) {
  return c({ layer: e, itemType: o, validateLayer: i, createJSONContext: (t) => u(t), createItemData: l, errorNamePrefix: P, supplementalUnsupportedErrors: n, setItemProperties: m, saveResources: (t, a) => s(e.resourceReferences, a) }, r);
}
async function $(e, r, t) {
  return f({ layer: e, itemType: o, validateLayer: i, createJSONContext: (a) => u(a), createItemData: l, errorNamePrefix: E, supplementalUnsupportedErrors: n, newItem: r, setItemProperties: I, saveResources: (a, p) => s(e.resourceReferences, p) }, t);
}
export {
  T as save,
  $ as saveAs
};
//# sourceMappingURL=mediaLayerUtils-DmSM38Z3.js.map
