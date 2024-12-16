import { bQ as r, ie as C, ig as k, ih as A, cE as J, aH as D, hY as Y, gL as Z, aP as V, hZ as X, gE as tt, gJ as et, gF as st, gG as ot, h_ as it, gH as rt, b8 as nt, ii as at, ij as L } from "./main-DZxT3i7S.js";
import { r as pt } from "./vec3f32-BS0cezmI.js";
import { n as dt } from "./WGLContainer-CjZoexai.js";
import { t as ht, a as H, i as lt } from "./FeatureCommandQueue-Bd5Dxlq9.js";
import { h as q, g as a, m as B, I as ct, C as y, P as F, a as ut, j as P, S as ft, b as vt, c as mt, G as gt, H as xt, l as yt, v as wt, w as _t, e as Mt } from "./UpdateTracking2D-0o9_i8fH.js";
class I extends ct {
}
r([q(0, y)], I.prototype, "pos", void 0), r([q(1, y)], I.prototype, "uv", void 0);
class $t extends wt {
}
class U extends F {
}
r([a(ut)], U.prototype, "dvs", void 0);
class m extends F {
}
r([a(y)], m.prototype, "perspective", void 0), r([a(y)], m.prototype, "texSize", void 0), r([a(P)], m.prototype, "wrapAroundShift", void 0), r([a(P)], m.prototype, "opacity", void 0), r([a(ft)], m.prototype, "texture", void 0);
class x extends vt {
  vertex(e) {
    const t = e.uv.divide(this.config.texSize), s = new P(1).add(mt(t, this.config.perspective)), o = new gt(e.pos.add(new y(this.config.wrapAroundShift, 0)), 1), i = this.transform.dvs.multiply(o);
    return { uv: t, glPosition: new xt(i.xy.multiply(s), 0, s) };
  }
  fragment(e) {
    const t = yt(this.config.texture, e.uv).multiply(this.config.opacity), s = new _t();
    return s.glFragColor = t, s;
  }
}
r([a(U)], x.prototype, "transform", void 0), r([a(m)], x.prototype, "config", void 0), r([C(0, B(I))], x.prototype, "vertex", null), r([C(0, B($t))], x.prototype, "fragment", null);
let St = class extends ht {
  constructor() {
    super(...arguments), this.type = Mt.Overlay, this._mesh = null, this.shaders = { overlay: new x() };
  }
  render(e, t) {
    const { context: s, painter: o } = e, i = this._getMesh(e, t);
    o.setPipelineState(H);
    const { isWrapAround: p, wrapAroundShift: c } = t.config, u = { ...t.config, wrapAroundShift: 0 }, f = { shader: this.shaders.overlay, uniforms: { transform: t.transform, config: u }, defines: null, optionalAttributes: null, useComputeBuffer: !1 };
    o.setPipelineState({ ...H, stencil: { write: !1, test: { compare: k.EQUAL, op: { fail: A.KEEP, zFail: A.KEEP, zPass: A.REPLACE }, ref: 0, mask: 255 } } }), o.submitDrawMeshUntyped(s, f, i), p && (u.wrapAroundShift = c, o.submitDrawMeshUntyped(s, f, i));
  }
  shutdown() {
    J(this._mesh);
  }
  _getMesh(e, t) {
    const { context: s } = e;
    if (this._mesh) {
      const o = this._mesh.vertexBuffers.get("positions");
      if (!o) throw new Error("Buffer not found");
      o.setData(t.position);
    } else {
      const o = t.index != null ? t.index.length : t.position.length / 2;
      this._mesh = new lt(s, { vertex: { positions: t.position, uvs: t.tex }, index: t.index != null ? { index: t.index } : void 0, groups: [{ attributes: [{ name: "pos", count: 2, type: D.FLOAT, location: 0, vertex: "positions", stride: 8, offset: 0 }, { name: "tex", count: 2, type: D.UNSIGNED_SHORT, location: 1, vertex: "uvs", stride: 4, offset: 0 }], index: t.index != null ? "index" : void 0, primitive: Y.TRIANGLE_STRIP }], parts: [{ group: 0, start: 0, count: o }] });
    }
    return this._mesh;
  }
};
class It extends dt {
  constructor() {
    super(...arguments), this._viewStateId = -1, this._dvsMat3 = Z(), this._overlayTechnique = new St();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const t of this.children) t.beforeRender(e);
  }
  doRender(e) {
    if (e.drawPhase !== V.MAP || !this.visible) return;
    super.doRender(e);
    const t = this._overlayTechnique;
    for (const s of this.children) s.draw(e, t);
  }
  onDetach() {
    this._overlayTechnique.shutdown();
  }
  _updateMatrices(e) {
    const { state: t } = e, { id: s, size: o, pixelRatio: i, resolution: p, rotation: c, viewpoint: u, displayMat3: f } = t;
    if (this._viewStateId === s) return;
    const w = L(c), d = i * o[0], v = i * o[1];
    this._localOrigin = u.targetGeometry.clone();
    const { x: g, y: $ } = this._localOrigin, _ = X(g, t.spatialReference);
    this._localOrigin.x = _, this._localOrigin.y = $;
    const S = p * d, b = p * v, n = tt(this._dvsMat3);
    et(n, n, f), st(n, n, ot(d / 2, v / 2)), it(n, n, pt(d / S, -v / b, 1)), rt(n, n, -w), this._viewStateId = s;
  }
  _updateOverlays(e, t) {
    const { state: s } = e, { rotation: o, spatialReference: i, worldScreenWidth: p, size: c, viewpoint: u } = s, f = this._localOrigin;
    let w, d = 0;
    const v = nt(i);
    if (v && i.isWrappable) {
      const g = c[0], $ = c[1], _ = L(o), S = Math.abs(Math.cos(_)), b = Math.abs(Math.sin(_)), n = Math.round(g * S + $ * b), [j, G] = v.valid, h = at(i), { x: T, y: W } = u.targetGeometry, N = [T, W], E = [0, 0];
      s.toScreen(E, N);
      const M = [0, 0];
      let O;
      O = n > p ? 0.5 * p : 0.5 * n;
      const z = Math.floor((T + 0.5 * h) / h), K = j + z * h, Q = G + z * h, R = [E[0] + O, 0];
      s.toMap(M, R), M[0] > Q && (d = h), R[0] = E[0] - O, s.toMap(M, R), M[0] < K && (d = -h), w = { worldWidth: h, xBounds: [j, G] };
    }
    for (const g of t) g.updateDrawCoords(f, d, i, w);
  }
}
export {
  It as u
};
//# sourceMappingURL=OverlayContainer-DOHT_8C7.js.map
