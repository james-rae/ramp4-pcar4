import { bn as b, h2 as I, h1 as Q, cz as m, cA as x, aN as G, h3 as W, h4 as R, G as q, s as P, cQ as D, cU as B, cV as k, gZ as j, bQ as o, bR as c, bS as T, ew as N, a8 as Z, hI as E, cw as L, cr as J, cs as K, ct as X, kA as Y, cu as ee, aA as te, bW as ie, b7 as se, kB as re } from "./main-DZxT3i7S.js";
import { j as ne, m as O } from "./perspectiveUtils-JiK99te5.js";
import "./floatRGBA-R0V_PnPQ.js";
import "./UpdateTracking2D-0o9_i8fH.js";
import "./GeometryUtils-C-fTcTXr.js";
import { e as ae } from "./Container-C7h2dwkX.js";
import "./WGLContainer-CjZoexai.js";
import "./Program-7tJi4ey9.js";
import "./LabelMetric-qLdOt4bi.js";
import "./StyleDefinition-D9H4pBJh.js";
import "./enums-qHpGJ28Q.js";
import "./GridShader-CorbVgQx.js";
import "./FeatureCommandQueue-Bd5Dxlq9.js";
import "./PieChartMeshWriter-CJGDsc5M.js";
import "./renderState-vWaicc3E.js";
import "./interfaces-DN2-jsJC.js";
import "./testSVGPremultipliedAlpha-CxmusDvb.js";
import "./GraphicsView2D-DQwEO3YK.js";
import "./earcut-XDcq3zAf.js";
import "./vec3f32-BS0cezmI.js";
import { e as oe } from "./mat3f64-Dh9_zhFu.js";
import { f as le } from "./utils-zCc3tVC8.js";
import { u as he } from "./OverlayContainer-DOHT_8C7.js";
import { j as de, y as ce } from "./LayerView-BSi2ZKlw.js";
const U = [1, 1], p = oe(), me = { none: b.None, loop: b.Loop, oscillate: b.Oscillate };
function ue(t) {
  return t ? { type: "CIMAnimatedSymbolProperties", ...t, playAnimation: t.playing, repeatType: t.repeatType ? me[t.repeatType] : void 0 } : { type: "CIMAnimatedSymbolProperties" };
}
let pe = class extends ae {
  constructor(e) {
    super(), this.elementView = e, this.isWrapAround = !1, this.wrapAroundShift = 0, this.perspectiveTransform = I(), this._handles = new Q(), this._vertices = new Float32Array(8), this._indices = new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]), this._handles.add([m(() => this.elementView.element.opacity, (i) => this.opacity = i, x), m(() => [this.elementView.coords], () => {
      this.requestRender();
    }, x), m(() => ["animationOptions" in this.elementView.element && this.elementView.element.animationOptions], () => {
      this._handles.remove("play"), this.texture = G(this.texture), this.requestRender();
    }, x), W(() => this.elementView.element.loaded, () => {
      const i = this.elementView.element;
      this.ready(), i.type === "video" && i.content != null && (this._handles.add([R(i.content, "play", () => this.requestRender()), R(i.content, "loadeddata", () => this.requestRender()), R(i.content, "loaded", () => this.requestRender())]), "requestVideoFrameCallback" in i.content ? i.content.requestVideoFrameCallback(() => this.requestRender()) : this._handles.add([R(i.content, "seeked", () => this.requestRender())]), this.requestRender());
    }, x)]), e.element.load().catch((i) => {
      q.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new P("element-load-error", "Element cannot be displayed", { element: e, error: i }));
    });
  }
  getMesh(e) {
    throw new Error("Method not implemented.");
  }
  destroy() {
    this._handles.destroy(), this.texture = G(this.texture);
  }
  get textureSize() {
    return U;
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const { context: i } = e, s = this.elementView.element.content;
    if (s != null) {
      const n = s instanceof HTMLImageElement, a = s instanceof HTMLVideoElement, r = n ? s.naturalWidth : a ? s.videoWidth : s.width, d = n ? s.naturalHeight : a ? s.videoHeight : s.height;
      if (this._updatePerspectiveTransform(r, d), this.texture) a && (this.texture.setData(s), this.texture.generateMipmap(), "requestVideoFrameCallback" in s ? s.requestVideoFrameCallback(() => this.requestRender()) : s.paused || this.requestRender());
      else {
        const h = new D();
        if (h.wrapMode = B.CLAMP_TO_EDGE, h.preMultiplyAlpha = !0, h.width = r, h.height = d, "getFrame" in s) {
          const _ = (u) => {
            this.texture ? this.texture.setData(u) : this.texture = new k(i, h, u), this.requestRender();
          };
          "animationOptions" in this.elementView.element && this._handles.add(le(s, ue(this.elementView.element.animationOptions), null, _), "play");
        } else this.texture = new k(i, h, s);
        this.texture.generateMipmap(), a && ("requestVideoFrameCallback" in s ? s.requestVideoFrameCallback(() => this.requestRender()) : s.paused || this.requestRender());
      }
    }
    super.beforeRender(e);
  }
  _createTransforms() {
    return null;
  }
  draw(e, i) {
    this.isReady && this.texture != null ? i.render(e, { transform: { dvs: this.dvsMat3 }, config: { perspective: this.perspectiveTransform, texSize: U, wrapAroundShift: this.wrapAroundShift, isWrapAround: this.isWrapAround, opacity: this.opacity, texture: { texture: this.texture, unit: 0 } }, position: this._vertices, tex: this._indices }) : this.requestRender();
  }
  updateDrawCoords(e, i, s, n) {
    const { coords: a, bounds: r } = this.elementView;
    if (a == null || r == null) return;
    const [d, h, _, u] = a.rings[0], z = this._vertices, { x: w, y: v } = e;
    z.set([h[0] - w, h[1] - v, d[0] - w, d[1] - v, _[0] - w, _[1] - v, u[0] - w, u[1] - v]);
    let g = i;
    if (n) {
      const [C, , S] = r, { worldWidth: A, xBounds: F } = n, [$, M] = F;
      C < $ && S > $ ? g = A : S > M && C < M && (g = -A);
    }
    this.wrapAroundShift = g, this.isWrapAround = g !== 0;
  }
  _updatePerspectiveTransform(e, i) {
    const s = this._vertices;
    ne(p, [0, 0, e, 0, 0, i, e, i], [s[0], s[1], s[4], s[5], s[2], s[3], s[6], s[7]]), j(this.perspectiveTransform, p[6] / p[8] * e, p[7] / p[8] * i);
  }
}, V = class extends N {
  constructor() {
    super(...arguments), this.tool = "transform";
  }
};
o([c()], V.prototype, "tool", void 0), V = o([T("esri.views.3d.layers.support.MediaLayerInteractionOptions")], V);
const ye = (t) => {
  let e = class extends t {
    constructor(...i) {
      super(...i), this.layer = null, this.interactive = !1, this.interactionOptions = new V(), this.selectedElement = null;
    }
  };
  return o([c()], e.prototype, "layer", void 0), o([c()], e.prototype, "interactive", void 0), o([c()], e.prototype, "interactionOptions", void 0), o([c()], e.prototype, "selectedElement", void 0), e = o([T("esri.views.layers.MediaLayerView")], e), e;
};
let f = class extends de(ye(ce)) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this._interaction = null, this.layer = null, this.elements = new Z();
  }
  initialize() {
    this.addHandles([m(() => [this.interactive, this.suspended], async () => {
      if (this.interactive && !this._interaction) {
        const { MediaLayerInteraction: t } = await import("./MediaLayerInteraction-B3xxyTsD.js");
        this._interaction = new t({ view: this.view, layer: this.layer }), this.selectedElement !== this._interaction.selectedElement && (this._interaction.selectedElement = this.selectedElement), this.interactionOptions !== this._interaction.options && (this._interaction.options = this.interactionOptions);
      }
      this._interaction && (this._interaction.enabled = !this.suspended && this.interactive);
    }, E), m(() => this.interactionOptions, (t) => {
      this._interaction && (this._interaction.options = t);
    }, E), m(() => this.selectedElement, (t) => {
      this._interaction && (this._interaction.selectedElement = t);
    }, E)]);
  }
  attach() {
    this.addAttachHandles([L(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((t) => this._updateTile(t)), this.requestUpdate();
    }), L(() => this.layer.effectiveSource, "change", ({ element: t }) => this._elementUpdateHandler(t))]), this._overlayContainer = new he(), this.container.addChild(this._overlayContainer), this._fetchQueue = new J({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (t, e) => this._queryElements(t, e), scheduler: this.scheduler, priority: K.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new X({ cachePolicy: "purge", resampling: !0, acquireTile: (t) => this._acquireTile(t), releaseTile: (t) => this._releaseTile(t), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear(), this._debugGraphicsView?.destroy();
  }
  supportsSpatialReference(t) {
    return !0;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  update(t) {
    this._tileStrategy.update(t), this._debugGraphicsView?.update(t);
  }
  async hitTest(t, e) {
    const i = [], s = t.normalize(), n = [s.x, s.y];
    for (const { elementView: { normalizedCoords: a, element: r } } of this._elementReferences.values()) a != null && Y(a.rings, n) && i.push({ type: "media", element: r, layer: this.layer, mapPoint: t, sourcePoint: r.toSource(t) });
    return i.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((t) => this._updateTile(t));
  }
  _acquireTile(t) {
    const e = new fe(t.clone());
    return this._updateTile(e), e;
  }
  _updateTile(t) {
    this._updatingHandles.addPromise(this._fetchQueue.push(t.key).then((e) => {
      const [i, s] = t.setElements(e);
      this._referenceElements(t, i), this._dereferenceElements(t, s), this.requestUpdate();
    }, (e) => {
      ee(e) || q.getLogger(this).error(e);
    }));
  }
  _releaseTile(t) {
    this._fetchQueue.abort(t.key.id), t.elements && this._dereferenceElements(t, t.elements), this.requestUpdate();
  }
  async _queryElements(t, e) {
    const i = this.layer.effectiveSource;
    if (i == null) return [];
    this.view.featuresTilingScheme.getTileBounds(l, t, !0);
    const s = new te({ xmin: l[0], ymin: l[1], xmax: l[2], ymax: l[3], spatialReference: this.view.spatialReference });
    return i.queryElements(s, e);
  }
  _referenceElements(t, e) {
    if (this.layer.source != null) for (const i of e) this._referenceElement(t, i);
  }
  _referenceElement(t, e) {
    ie(this._elementReferences, e.uid, () => {
      const i = new O({ element: e, spatialReference: this.view.spatialReference }), s = new pe(i);
      return this._overlayContainer.addChild(s), this.elements.add(e), this._updatingHandles.addPromise(e.load().catch((n) => {
        q.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new P("element-load-error", "Element cannot be displayed", { element: e, error: n }));
      })), { debugGraphic: null, elementView: i, overlay: s, tiles: /* @__PURE__ */ new Set() };
    }).tiles.add(t);
  }
  _dereferenceElements(t, e) {
    for (const i of e) this._dereferenceElement(t, i);
  }
  _dereferenceElement(t, e) {
    const i = this._elementReferences.get(e.uid);
    i.tiles.delete(t), i.tiles.size || (this._overlayContainer.removeChild(i.overlay), i.overlay.destroy(), i.elementView.destroy(), this._elementReferences.delete(e.uid), this.elements.remove(e), this._debugGraphicsView?.graphics.remove(i.debugGraphic));
  }
  _elementUpdateHandler(t) {
    let e = this._elementReferences.get(t.uid);
    if (e) {
      const s = e.elementView.normalizedCoords;
      if (s == null) return this._overlayContainer.removeChild(e.overlay), e.overlay.destroy(), e.elementView.destroy(), this._elementReferences.delete(t.uid), this.elements.remove(t), void this._debugGraphicsView?.graphics.remove(e.debugGraphic);
      const n = [], a = [];
      for (const r of this._tileStrategy.tiles) {
        const d = H(this.view.featuresTilingScheme, r, s);
        e.tiles.has(r) ? d || a.push(r) : d && n.push(r);
      }
      for (const r of n) this._referenceElement(r, t);
      for (const r of a) this._dereferenceElement(r, t);
      return e = this._elementReferences.get(t.uid), void (e?.debugGraphic && (e.debugGraphic.geometry = e.elementView.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: e.debugGraphic, property: "geometry" })));
    }
    const i = new O({ element: t, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (i != null) for (const s of this._tileStrategy.tiles)
      H(this.view.featuresTilingScheme, s, i) && this._referenceElement(s, t);
  }
};
o([c()], f.prototype, "layer", void 0), o([c({ readOnly: !0 })], f.prototype, "elements", void 0), f = o([T("esri.views.2d.layers.MediaLayerView2D")], f);
const l = se(), y = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function H(t, e, i) {
  return t.getTileBounds(l, e.key, !0), y.xmin = l[0], y.ymin = l[1], y.xmax = l[2], y.ymax = l[3], re(y, i);
}
class fe {
  constructor(e) {
    this.key = e, this.elements = null, this.isReady = !1, this.visible = !0;
  }
  setElements(e) {
    const i = [], s = new Set(this.elements);
    this.elements = e;
    for (const n of e) s.has(n) ? s.delete(n) : i.push(n);
    return this.isReady = !0, [i, Array.from(s)];
  }
  destroy() {
  }
}
const Ie = f;
export {
  Ie as default
};
//# sourceMappingURL=MediaLayerView2D-B5I5YI2c.js.map
