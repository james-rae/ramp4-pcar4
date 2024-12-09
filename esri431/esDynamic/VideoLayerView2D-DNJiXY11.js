import { h1 as I, h2 as K, h3 as N, cA as b, h4 as Q, aN as X, cQ as Y, cU as k, cV as B, cI as g, b4 as J, h5 as $, D as z, h6 as Z, fh as ee, a1 as v, eL as te, eI as R, eK as q, cE as U, cz as M, bQ as x, bR as V, bS as ie } from "./main-DZxT3i7S.js";
import { l as W } from "./TelemetryDisplay-Dkbd1iUN.js";
import { u as se } from "./OverlayContainer-DOHT_8C7.js";
import { e as re } from "./Container-C7h2dwkX.js";
import { a as ne, j as ae, y as le } from "./LayerView-BSi2ZKlw.js";
import { t as oe } from "./GraphicContainer-DBCyi5jQ.js";
import { F as he } from "./GraphicsView2D-DQwEO3YK.js";
const C = 2;
class me extends re {
  constructor(e) {
    super(), this.element = e, this._handles = new I(), this.isWrapAround = !1, this.perspectiveTransform = K(), this.wrapAroundShift = 0, this.clipGeometry = null, this._handles.add(N(() => this.element, () => {
      const t = this.element;
      this.ready(), t && this._handles.add(Q(t, "play", () => this.requestRender()));
    }, b));
  }
  getMesh(e) {
    throw new Error("Method not implemented.");
  }
  destroy() {
    this._handles.destroy(), this.texture = X(this.texture);
  }
  get textureSize() {
    if (!this.texture) return [1, 1];
    const e = this.texture.descriptor;
    return [e.width, e.height];
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const t = this.element;
    if (t == null) return;
    const { context: r } = e, { videoWidth: l, videoHeight: s } = t;
    if (l !== 0 && s !== 0) {
      if (this.texture) t.paused || this.texture.setData(t);
      else {
        const i = new Y();
        i.wrapMode = k.CLAMP_TO_EDGE, i.preMultiplyAlpha = !0, i.width = l, i.height = s, this.texture = new B(r, i, t);
      }
      t.paused || (this.texture.generateMipmap(), this.requestRender()), super.beforeRender(e);
    }
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e, t, r, l) {
    const s = this.element, i = this._getFrameInfo();
    if (!s || !i) return;
    this._initializeData(e, i, r);
    const { controlPoints: o, horizon: m } = i, h = Math.sqrt(o.length), y = h, { x: n, y: c } = e, u = this._vertices, T = o[0], P = o[h - 1], F = o[(y - 1) * h], j = o[(y - 1) * h + h - 1], G = g(m ? m[0].mapPoint : T.mapPoint, r), O = g(m ? m[1].mapPoint : P.mapPoint, r), f = g(F.mapPoint, r), D = g(j.mapPoint, r);
    this.clipGeometry = m ? new ne({ geometry: J.fromJSON({ rings: [[[f.x, f.y], [D.x, D.y], [O.x, O.y], [G.x, G.y], [f.x, f.y]]], spatialReference: r }) }) : null;
    for (let p = 0; p < o.length; p++) {
      const E = o[p], { sourcePoint: S, mapPoint: A } = E;
      if (S == null || A == null) continue;
      const w = g(A, r);
      u[p * C + 0] = w.x - n, u[p * C + 1] = w.y - c;
    }
    let L = t;
    if (l) {
      const p = Math.min(G.x, O.x, f.x, D.x), E = Math.max(G.x, O.x, f.x, D.x), { worldWidth: S, xBounds: A } = l, [w, H] = A;
      p < w && E > w ? L = S : E > H && p < H && (L = -S);
    }
    this.wrapAroundShift = L, this.isWrapAround = L !== 0;
  }
  draw(e, t) {
    this.isReady && this._vertices && this._indices && this._texCoords ? t.render(e, { transform: { dvs: this.dvsMat3 }, config: { perspective: this.perspectiveTransform, texSize: this.textureSize, wrapAroundShift: this.wrapAroundShift, isWrapAround: this.isWrapAround, opacity: this.opacity, texture: { texture: this.texture, unit: 0 } }, position: this._vertices, tex: this._texCoords, index: this._indices }) : this.requestRender();
  }
  _initializeData(e, t, r) {
    if (this._vertices != null && this._indices != null) return;
    const { controlPoints: l } = t, s = Math.sqrt(l.length), i = s, o = new Float32Array(C * l.length), m = new Uint16Array(2 * l.length);
    for (let n = 0; n < l.length; n++) {
      const c = l[n], { sourcePoint: u, mapPoint: T } = c;
      if (u == null || T == null) continue;
      const P = g(T, r);
      o[n * C + 0] = P.x - e.x, o[n * C + 1] = P.y - e.y, m[2 * n + 0] = u.x, m[2 * n + 1] = u.y;
    }
    const h = new Uint16Array(i * s + (i - 2) * (s + 2));
    let y = 0;
    for (let n = 0; n < i; n++) {
      for (let c = 0; c < s; c++) h[y++] = n * s + c, h[y++] = (n + 1) * s + c;
      n < i - 2 && (h[y++] = (n + 1) * s + (s - 1), h[y++] = (n + 1) * s);
    }
    this._vertices = o, this._texCoords = m, this._indices = h;
  }
  _getFrameInfo() {
    if (!this.groundControlPoints) return null;
    const e = this._getFrameControlPoints(), t = this.frameHorizonPoints;
    let r = null;
    if (t) {
      const l = t.startX, s = t.startY, i = t.endX, o = t.endY;
      r = [{ sourcePoint: $(l, s), mapPoint: new z(t.startLongitude, t.startLatitude) }, { sourcePoint: $(i, o), mapPoint: new z(t.endLongitude, t.endLatitude) }];
    }
    return { controlPoints: e, horizon: r };
  }
  _getFrameControlPoints() {
    const e = this.groundControlPoints, t = e?.length;
    if (!t) return [];
    const r = new Array(t), l = Math.max(...e.map(({ x: i }) => i)), s = this.element.videoWidth / l;
    for (let i = 0; i < t; i++) {
      const { x: o, y: m, lat: h, lon: y } = e[i];
      r[i] = { sourcePoint: $(o * s, -m * s), mapPoint: new z(y, h) };
    }
    return r;
  }
}
const _ = new Z([255, 127, 0]);
let d = class extends ae(le) {
  constructor() {
    super(...arguments), this._graphicsLayer = new ee(), this._frameOutlineGraphic = new v({ symbol: new te({ outline: { type: "simple-line", color: _ } }) }), this._sensorTrailGraphic = new v({ symbol: new R({ color: _ }) }), this._lineOfSightGraphic = new v({ symbol: new R({ color: _ }) }), this._sensorLocationGraphic = new v({ symbol: new q({ color: _ }) }), this._frameCenterGraphic = new v({ symbol: new q({ color: _, style: "cross" }) }), this._overlayContainer = null, this.layer = null, this.symbolColor = _, this.visibleTelemetryElements = null;
  }
  destroy() {
    this._graphicsLayer = U(this._graphicsLayer);
  }
  initialize() {
    this.addHandles(M(() => this.symbolColor, () => {
      this._frameOutlineGraphic.symbol.outline.color = this.symbolColor, this._sensorTrailGraphic.symbol.color = this.symbolColor, this._lineOfSightGraphic.symbol.color = this.symbolColor, this._sensorLocationGraphic.symbol.color = this.symbolColor, this._frameCenterGraphic.symbol.color = this.symbolColor;
    }, b)), this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic, this._sensorTrailGraphic, this._lineOfSightGraphic, this._sensorLocationGraphic, this._frameCenterGraphic]), this.visibleTelemetryElements = new W({ frame: this.layer.telemetryDisplay?.frame ?? !1, frameCenter: this.layer.telemetryDisplay?.frameCenter ?? !0, frameOutline: this.layer.telemetryDisplay?.frameOutline ?? !0, lineOfSight: this.layer.telemetryDisplay?.lineOfSight ?? !0, sensorLocation: this.layer.telemetryDisplay?.sensorLocation ?? !0, sensorTrail: this.layer.telemetryDisplay?.sensorTrail ?? !0 });
  }
  attach() {
    this._overlayContainer = new se(), this.container.addChild(this._overlayContainer), this._addOverlayMultipoint(), this.graphicsView = new he({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this._graphicsLayer.graphics, container: new oe(this.view.featuresTilingScheme) }), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this._graphicsLayer.on("graphic-update", this.graphicsView.graphicUpdateHandler)), this.addAttachHandles([M(() => [this.layer.telemetryDisplay?.frame, this.layer.telemetryDisplay?.frameCenter, this.layer.telemetryDisplay?.frameOutline, this.layer.telemetryDisplay?.sensorLocation, this.layer.telemetryDisplay?.sensorTrail, this.layer.telemetryDisplay?.lineOfSight], () => this._updateVisibleTelemetryElements(), b), M(() => [this.layer.telemetry, this.visibleTelemetryElements?.frameCenter, this.visibleTelemetryElements?.frameOutline, this.visibleTelemetryElements?.sensorLocation, this.visibleTelemetryElements?.sensorTrail, this.visibleTelemetryElements?.lineOfSight], () => this._updateGraphicGeometries(), b)]);
  }
  detach() {
    this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this.graphicsView = U(this.graphicsView);
  }
  supportsSpatialReference(a) {
    return !0;
  }
  moveEnd() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  update(a) {
    this.graphicsView.processUpdate(a);
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  _updateVisibleTelemetryElements() {
    this.visibleTelemetryElements && this.layer.telemetryDisplay && (this.visibleTelemetryElements.frame = this.layer.telemetryDisplay.frame, this.visibleTelemetryElements.frameCenter = this.layer.telemetryDisplay.frameCenter, this.visibleTelemetryElements.frameOutline = this.layer.telemetryDisplay.frameOutline, this.visibleTelemetryElements.lineOfSight = this.layer.telemetryDisplay.lineOfSight, this.visibleTelemetryElements.sensorLocation = this.layer.telemetryDisplay.sensorLocation, this.visibleTelemetryElements.sensorTrail = this.layer.telemetryDisplay.sensorTrail);
  }
  _updateGraphicGeometries() {
    const { telemetry: a } = this.layer, { visibleTelemetryElements: e } = this;
    a && e && (e.frameOutline && a.frameOutline ? this._frameOutlineGraphic.geometry = this.layer.telemetry.frameOutline : this._frameOutlineGraphic.geometry = null, e.sensorTrail && a.sensorTrail ? this._sensorTrailGraphic.geometry = this.layer.telemetry.sensorTrail : this._sensorTrailGraphic.geometry = null, e.lineOfSight && a.lineOfSight ? this._lineOfSightGraphic.geometry = this.layer.telemetry.lineOfSight : this._lineOfSightGraphic.geometry = null, e.sensorLocation && a.sensorLocation ? this._sensorLocationGraphic.geometry = this.layer.telemetry.sensorLocation : this._sensorLocationGraphic.geometry = null, e.frameCenter && a.frameCenter ? this._frameCenterGraphic.geometry = this.layer.telemetry.frameCenter : this._frameCenterGraphic.geometry = null);
  }
  async _addOverlayMultipoint() {
    if (!this.layer.videoElement) return;
    const a = new me(this.layer.videoElement);
    this.addAttachHandles([M(() => [this.layer.frameHorizonPoints, this.layer.groundControlPoints], () => {
      const { visibleTelemetryElements: e } = this;
      e?.frame ? (a.frameHorizonPoints = this.layer.frameHorizonPoints, a.groundControlPoints = this.layer.groundControlPoints, a.opacity = 1) : a.opacity = 0;
    }, b)]), this._overlayContainer.addChild(a), this.view.stage.requestRender();
  }
};
x([V()], d.prototype, "graphicsView", void 0), x([V()], d.prototype, "layer", void 0), x([V()], d.prototype, "symbolColor", void 0), x([V({ type: W })], d.prototype, "visibleTelemetryElements", void 0), d = x([ie("esri.views.2d.layers.VideoLayerView2D")], d);
const _e = d;
export {
  _e as default
};
//# sourceMappingURL=VideoLayerView2D-DNJiXY11.js.map
