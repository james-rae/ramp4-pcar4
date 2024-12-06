import { gL as m, b7 as M, aP as c, bQ as V, bS as y } from "./main-DZxT3i7S.js";
import { S as I } from "./Bitmap-6elP6Pc-.js";
import { r as T, t as L } from "./WGLContainer-CjZoexai.js";
import { i as P } from "./TileContainer-BYi4aQ0i.js";
let $ = class extends T {
  constructor(e, i, s, r, n, o, a = null) {
    super(e, i, s, r, n, o), this.bitmap = new I(a), this.bitmap.coordScale = [n, o], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e) {
    this.bitmap.beforeRender(e), super.beforeRender(e);
  }
  afterRender(e) {
    this.bitmap.afterRender(e), super.afterRender(e);
  }
  set stencilRef(e) {
    this.bitmap.stencilRef = e;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { displayViewScreenMat3: m(), tileMat3: m() };
  }
  setTransform(e) {
    super.setTransform(e), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
}, A = class extends P {
  get requiresDedicatedFBO() {
    return this.children.some((e) => e.bitmap.blendFunction === "additive");
  }
  createTile(e) {
    const i = this.tileInfoView.getTileBounds(M(), e), s = this.tileInfoView.getTileResolution(e.level), [r, n] = this.tileInfoView.tileInfo.size;
    return new $(e, s, i[0], i[3], r, n);
  }
  prepareRenderPasses(e) {
    const i = e.registerRenderPass({ name: "bitmap (tile)", brushes: [L.bitmap], target: () => this.children.map((s) => s.bitmap), drawPhase: c.MAP });
    return [...super.prepareRenderPasses(e), i];
  }
  doRender(e) {
    this.visible && e.drawPhase === c.MAP && super.doRender(e);
  }
};
const O = (t) => {
  let e = class extends t {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new A(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return e = V([y("esri.views.2d.layers.BitmapTileLayerView2D")], e), e;
};
function F(t) {
  return t instanceof HTMLImageElement ? t.naturalWidth : t.width;
}
function _(t) {
  return t instanceof HTMLImageElement ? t.naturalHeight : t.height;
}
function z(t, e, i, s) {
  if (i.level === s.level) return e;
  const r = t.tileInfo.size, n = t.getTileResolution(i.level), o = t.getTileResolution(s.level);
  let a = t.getLODInfoAt(s.level);
  const p = a.getXForColumn(s.col), u = a.getYForRow(s.row);
  a = t.getLODInfoAt(i.level);
  const f = a.getXForColumn(i.col), b = a.getYForRow(i.row), l = F(e) / r[0], h = _(e) / r[1], w = Math.round(l * ((p - f) / n)), g = Math.round(h * (-(u - b) / n)), R = Math.round(l * r[0] * (o / n)), v = Math.round(h * r[1] * (o / n)), d = C(r);
  return d.getContext("2d").drawImage(e, w, g, R, v, 0, 0, r[0], r[1]), d;
}
function C(t) {
  const e = document.createElement("canvas");
  return [e.width, e.height] = t, e;
}
export {
  z as n,
  C as o,
  O as r
};
//# sourceMappingURL=imageUtils-23ndbz6A.js.map
