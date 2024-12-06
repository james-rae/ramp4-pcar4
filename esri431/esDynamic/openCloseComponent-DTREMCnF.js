import { fl as r } from "./main-DZxT3i7S.js";
import { w as s } from "./dom-N58V0tYi.js";
const n = r;
function i(e) {
  return "opened" in e ? e.opened : e.open;
}
function f(e) {
  n(() => {
    e.transitionEl && s(e.transitionEl, e.openTransitionProp, () => {
      i(e) ? e.onBeforeOpen() : e.onBeforeClose();
    }, () => {
      i(e) ? e.onOpen() : e.onClose();
    });
  });
}
export {
  f as o
};
//# sourceMappingURL=openCloseComponent-DTREMCnF.js.map
