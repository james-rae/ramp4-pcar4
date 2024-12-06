import { bQ as i, bS as t, cw as h, cu as l, G as d } from "./main-DZxT3i7S.js";
const c = (s) => {
  let e = class extends s {
    initialize() {
      this.addHandles(h(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((a) => {
          l(a) || d.getLogger(this).error(a);
        });
      }), "RefreshableLayerView");
    }
  };
  return e = i([t("esri.views.layers.RefreshableLayerView")], e), e;
};
export {
  c as i
};
//# sourceMappingURL=RefreshableLayerView-hfJGJOy7.js.map
