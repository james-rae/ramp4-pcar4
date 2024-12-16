import { cu as n, G as h, bQ as i, bR as s, bS as o } from "./main-DZxT3i7S.js";
import { a as d } from "./BitmapContainer-BUbnXPTn.js";
import { j as p, y as m } from "./LayerView-BSi2ZKlw.js";
import { _ as c } from "./ExportStrategy-CuQazigx.js";
import { i as u } from "./RefreshableLayerView-hfJGJOy7.js";
let t = class extends u(p(m)) {
  update(a) {
    this._strategy.update(a).catch((e) => {
      n(e) || h.getLogger(this).error(e);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new d(), this.container.addChild(this._bitmapContainer), this._strategy = new c({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(a, e, r) {
    return this.layer.fetchImageBitmap(a, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
i([s()], t.prototype, "_strategy", void 0), i([s()], t.prototype, "updating", void 0), t = i([o("esri.views.2d.layers.BaseDynamicLayerView2D")], t);
const b = t;
export {
  b as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-CHL7xeDB.js.map
