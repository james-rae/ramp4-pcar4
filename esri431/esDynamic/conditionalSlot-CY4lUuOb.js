import { de as n } from "./main-DZxT3i7S.js";
import { c as r } from "./observers-lnyvGi5X.js";
let t;
const i = { childList: !0 };
function f(o) {
  t || (t = r("mutation", s)), t.observe(o.el, i);
}
function l(o) {
  t.unobserve(o.el);
}
function s(o) {
  o.forEach(({ target: e }) => {
    n(e);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-CY4lUuOb.js.map
