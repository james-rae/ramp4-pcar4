import { dd as o } from "./main-DZxT3i7S.js";
const c = "calcite-list", a = "calcite-list-item-group", l = "calcite-list-item";
function f(s) {
  return Array.from(s.assignedElements({ flatten: !0 }).filter((e) => e.matches(c)));
}
function d(s) {
  const e = s.assignedElements({ flatten: !0 }), r = e.filter((t) => t?.matches(a)).map((t) => Array.from(t.querySelectorAll(l))).reduce((t, i) => [...t, ...i], []), n = e.filter((t) => t?.matches(l));
  return [...e.filter((t) => t?.matches(c)).map((t) => Array.from(t.querySelectorAll(l))).reduce((t, i) => [...t, ...i], []), ...r, ...n];
}
function h(s) {
  s.forEach((e) => {
    e.setPosition = s.indexOf(e) + 1, e.setSize = s.length;
  });
}
function p(s, e = !1) {
  if (!o())
    return 0;
  const r = e ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  return document.evaluate(r, s, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}
export {
  d as a,
  f as b,
  p as g,
  h as u
};
//# sourceMappingURL=utils3-zMbGUnsi.js.map
