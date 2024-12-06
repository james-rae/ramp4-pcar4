import { b7 as E, cv as N, bQ as d, bR as l, bS as H, ew as $, fv as b, J as w, b8 as q, B as T, et as B, ff as P, gN as C, cq as I } from "./main-DZxT3i7S.js";
import { S as U } from "./Bitmap-6elP6Pc-.js";
const k = Math.PI / 180;
function A(e) {
  return e * k;
}
function J(e, i) {
  const s = A(i.rotation), t = Math.abs(Math.cos(s)), r = Math.abs(Math.sin(s)), [o, n] = i.size;
  return e[0] = Math.round(n * r + o * t), e[1] = Math.round(n * t + o * r), e;
}
function O(e, i, s, t) {
  const [r, o] = i, [n, a] = t, c = 0.5 * s;
  return e[0] = r - c * n, e[1] = o - c * a, e[2] = r + c * n, e[3] = o + c * a, e;
}
const m = E(), u = [0, 0], v = new N(0, 0, 0, 0), y = { container: null, fetchSource: null, requestUpdate: null, imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 };
let h = class extends $ {
  constructor(e) {
    super(e), this._imagePromise = null, this.bitmaps = [], this.hidpi = y.hidpi, this.imageMaxWidth = y.imageMaxWidth, this.imageMaxHeight = y.imageMaxHeight, this.imageRotationSupported = y.imageRotationSupported, this.imageNormalizationSupported = y.imageNormalizationSupported, this.update = b(async (i, s) => {
      if (w(s), !i.stationary || this.destroyed) return;
      const t = i.state, r = q(t.spatialReference), o = this.hidpi ? i.pixelRatio : 1, n = t.worldScreenWidth > 0, a = n && this.imageNormalizationSupported && t.worldScreenWidth < t.size[0], c = Math.round((this.imageMaxWidth ?? 0) / o), f = Math.round((this.imageMaxHeight ?? 0) / o);
      a ? (u[0] = t.worldScreenWidth, u[1] = t.size[1]) : this.imageRotationSupported ? (u[0] = t.size[0], u[1] = t.size[1]) : J(u, t);
      const S = Math.floor(u[0]) > c || Math.floor(u[1]) > f, M = r && (t.extent.xmin < r.valid[0] || t.extent.xmax > r.valid[1]), _ = !this.imageNormalizationSupported && M, x = !S && !_, z = this.imageRotationSupported ? t.rotation : 0, W = this.container.children.slice();
      if (x) {
        const p = a ? t.paddedViewState.center : t.center;
        this._imagePromise = this._singleExport(t, u, p, t.resolution, z, o, s);
      } else {
        let p = Math.min(c, f);
        n && (p = Math.min(t.worldScreenWidth, p), p = Math.round(t.worldScreenWidth / Math.ceil(t.worldScreenWidth / p))), this._imagePromise = this._tiledExport(t, p, o, s);
      }
      try {
        const p = await this._imagePromise ?? [];
        w(s);
        const R = [];
        if (this._imagePromise = null, this.destroyed) return;
        this.bitmaps = p;
        for (const g of W) p.includes(g) || R.push(g.fadeOut().then(() => {
          g.remove(), g.destroy();
        }));
        for (const g of p) R.push(g.fadeIn());
        await Promise.all(R);
      } catch (p) {
        this._imagePromise = null, T(p);
      }
    }, 5e3), this.updateExports = b(async (i) => {
      const s = [];
      for (const t of this.container.children) {
        if (!t.visible || !t.stage) return;
        s.push(i(t).then(() => {
          t.invalidateTexture(), t.requestRender();
        }));
      }
      this._imagePromise = B(s).then(() => this._imagePromise = null), await this._imagePromise;
    });
  }
  destroy() {
    this.bitmaps.forEach((e) => e.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && this._imagePromise !== null;
  }
  async _export(e, i, s, t, r, o) {
    const n = await this.fetchSource(e, Math.floor(i * r), Math.floor(s * r), { rotation: t, pixelRatio: r, signal: o });
    w(o);
    const a = new U(null, !0);
    return a.x = e.xmin, a.y = e.ymax, a.resolution = e.width / i, a.rotation = t, a.pixelRatio = r, a.opacity = 0, this.container.addChild(a), await a.setSourceAsync(n, o), w(o), a;
  }
  async _singleExport(e, i, s, t, r, o, n) {
    O(m, s, t, i);
    const a = P(m, e.spatialReference);
    return [await this._export(a, i[0], i[1], r, o, n)];
  }
  _tiledExport(e, i, s, t) {
    const r = C.create({ size: i, spatialReference: e.spatialReference, scales: [e.scale] }), o = new I(r), n = o.getTileCoverage(e);
    if (!n) return null;
    const a = [];
    return n.forEach((c, f, S, M) => {
      v.set(c, f, S, 0), o.getTileBounds(m, v);
      const _ = P(m, e.spatialReference);
      a.push(this._export(_, i, i, 0, s, t).then((x) => (M !== 0 && (v.set(c, f, S, M), o.getTileBounds(m, v), x.x = m[0], x.y = m[3]), x)));
    }), Promise.all(a);
  }
};
d([l()], h.prototype, "_imagePromise", void 0), d([l()], h.prototype, "bitmaps", void 0), d([l()], h.prototype, "container", void 0), d([l()], h.prototype, "fetchSource", void 0), d([l()], h.prototype, "hidpi", void 0), d([l()], h.prototype, "imageMaxWidth", void 0), d([l()], h.prototype, "imageMaxHeight", void 0), d([l()], h.prototype, "imageRotationSupported", void 0), d([l()], h.prototype, "imageNormalizationSupported", void 0), d([l()], h.prototype, "requestUpdate", void 0), d([l()], h.prototype, "updating", null), h = d([H("esri.views.2d.layers.support.ExportStrategy")], h);
const j = h;
export {
  j as _
};
//# sourceMappingURL=ExportStrategy-CuQazigx.js.map
