import { dd as t, de as s } from "./main-DZxT3i7S.js";
const o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
function p(e) {
  a.set(e, new Promise((n) => o.set(e, n)));
}
function c(e) {
  o.get(e)();
}
function r(e) {
  return a.get(e);
}
async function d(e) {
  if (await r(e), !!t())
    return s(e), new Promise((n) => requestAnimationFrame(() => n()));
}
export {
  c as a,
  d as c,
  p as s
};
//# sourceMappingURL=loadable-BekOWxtq.js.map
