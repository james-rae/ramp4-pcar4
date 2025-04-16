import { O as t, P as r, Q as n, V as o } from "./main-DHXLMse1.js";
import { f as l, y } from "./LayerView-B7mTAl7c.js";
const d = (a) => {
  let e = class extends a {
    constructor(...i) {
      super(...i), this.layerViews = new o();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find((i) => i.layer === this.layer?.dynamicGroupLayer);
    }
    get footprintLayerView() {
      return this.layerViews.find((i) => i.layer === this.layer?.footprintLayer);
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return t([r()], e.prototype, "layer", void 0), t([r()], e.prototype, "layerViews", void 0), t([r({ readOnly: !0 })], e.prototype, "dynamicGroupLayerView", null), t([r({ readOnly: !0 })], e.prototype, "footprintLayerView", null), e = t([n("esri.views.layers.CatalogLayerView")], e), e;
};
let s = class extends d(l(y)) {
  constructor() {
    super(...arguments), this.layerViews = new o();
  }
  update(a) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: !0 })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((a, e) => this.container.addChildAt(a.container, e));
  }
};
t([r()], s.prototype, "layerViews", void 0), s = t([n("esri.views.2d.layers.CatalogLayerView2D")], s);
const c = s;
export {
  c as default
};
//# sourceMappingURL=CatalogLayerView2D-BW8eRCw3.js.map
