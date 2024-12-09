import { bQ as i, bR as m, bS as E, h7 as F, cE as S, s as w, J as M, cu as C, G as R, cz as q, aA as U } from "./main-DZxT3i7S.js";
import { a as $ } from "./BitmapContainer-BUbnXPTn.js";
import { j as V, y as L } from "./LayerView-BSi2ZKlw.js";
import { _ as W } from "./ExportStrategy-CuQazigx.js";
import { i as A } from "./RefreshableLayerView-hfJGJOy7.js";
import { i as z } from "./timeSupport-EC8yn09O.js";
const H = (e) => {
  let t = class extends e {
    initialize() {
      this.exportImageParameters = new F({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = S(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return z(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(a, s) {
      const { layer: o } = this;
      if (!a) throw new w("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o });
      const { popupEnabled: c } = o;
      if (!c) throw new w("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: c });
      const r = this.createFetchPopupFeaturesQuery(a);
      if (!r) return [];
      const { extent: n, width: h, height: p, x: d, y } = r;
      if (!(n && h && p)) throw new w("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: n, width: h, height: p });
      const g = await o.fetchFeatureInfo(n, h, p, d, y);
      return M(s), g;
    }
  };
  return i([m()], t.prototype, "exportImageParameters", void 0), i([m({ readOnly: !0 })], t.prototype, "exportImageVersion", null), i([m()], t.prototype, "layer", void 0), i([m({ readOnly: !0 })], t.prototype, "timeExtent", null), t = i([E("esri.views.layers.WMSLayerView")], t), t;
};
let u = class extends H(A(V(L))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new $();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((t) => {
      C(t) || R.getLogger(this).error(t);
    });
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: a } = e;
    this.bitmapContainer = new $(), this.container.addChild(this.bitmapContainer), this.strategy = new W({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: a, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 }), this.addAttachHandles(q(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = S(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: a } = this, { x: s, y: o } = e, { spatialReference: c } = t;
    let r, n = 0, h = 0;
    if (a.children.some((g) => {
      const { width: f, height: v, resolution: b, x: l, y: x } = g, I = l + b * f, P = x - b * v;
      return s >= l && s <= I && o <= x && o >= P && (r = new U({ xmin: l, ymin: P, xmax: I, ymax: x, spatialReference: c }), n = f, h = v, !0);
    }), !r) return null;
    const p = r.width / n, d = Math.round((s - r.xmin) / p), y = Math.round((r.ymax - o) / p);
    return { extent: r, width: n, height: h, x: d, y };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, a, s) {
    return this.layer.fetchImageBitmap(e, t, a, { timeExtent: this.timeExtent, ...s });
  }
};
i([m()], u.prototype, "strategy", void 0), i([m()], u.prototype, "updating", void 0), u = i([E("esri.views.2d.layers.WMSLayerView2D")], u);
const D = u;
export {
  D as default
};
//# sourceMappingURL=WMSLayerView2D-ftmgZ6dk.js.map
