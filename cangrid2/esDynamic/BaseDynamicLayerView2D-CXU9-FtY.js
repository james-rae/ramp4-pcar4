import { M as n, D as h, O as i, P as s, Q as o } from "./main-DHXLMse1.js";
import { a as d } from "./BitmapContainer-BwPMmwOZ.js";
import { f as p, y as m } from "./LayerView-B7mTAl7c.js";
import { _ as y } from "./ExportStrategy-BDgAY1yH.js";
import { i as c } from "./RefreshableLayerView-CHcywepK.js";
let t = class extends c(p(m)) {
  update(a) {
    this._strategy.update(a).catch((e) => {
      n(e) || h.getLogger(this).error(e);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new d(), this.container.addChild(this._bitmapContainer), this._strategy = new y({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
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
const C = t;
export {
  C as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-CXU9-FtY.js.map
