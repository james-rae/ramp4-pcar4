import { bQ as t, bR as a, bS as n, a8 as o } from "./main-DZxT3i7S.js";
import { j as l, y } from "./LayerView-BSi2ZKlw.js";
const d = (i) => {
  let e = class extends i {
    constructor(...r) {
      super(...r), this.layerViews = new o();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.dynamicGroupLayer);
    }
    get footprintLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.footprintLayer);
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return t([a()], e.prototype, "layer", void 0), t([a()], e.prototype, "layerViews", void 0), t([a({ readOnly: !0 })], e.prototype, "dynamicGroupLayerView", null), t([a({ readOnly: !0 })], e.prototype, "footprintLayerView", null), e = t([n("esri.views.layers.CatalogLayerView")], e), e;
};
let s = class extends d(l(y)) {
  constructor() {
    super(...arguments), this.layerViews = new o();
  }
  update(i) {
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
    this.container.removeAllChildren(), this.layerViews.forEach((i, e) => this.container.addChildAt(i.container, e));
  }
};
t([a()], s.prototype, "layerViews", void 0), s = t([n("esri.views.2d.layers.CatalogLayerView2D")], s);
const c = s;
export {
  c as default
};
//# sourceMappingURL=CatalogLayerView2D-DycWoFQF.js.map
