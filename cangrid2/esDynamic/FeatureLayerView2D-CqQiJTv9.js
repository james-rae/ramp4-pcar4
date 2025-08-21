import { O as h, P as f, Q as H, aj as ve, e2 as Xe, a9 as g, e9 as lt, U as _e, bx as ut, aO as ct, N as X, aP as dt, s as O, D as F, k9 as pt, dK as de, ad as he, eW as ht, da as ft, im as yt, ou as T, aN as Ye, ov as mt, d8 as G, f4 as xe, eh as et, eg as gt, ee as bt, ow as St, ox as vt, io as _t, aa as se, fj as me, fP as ee, lE as wt, oy as $e, oz as Vt, S as we, gT as xt, bi as Te, bk as qe, l0 as Ae, fn as fe, oA as Pe, d7 as It, oB as Me, oC as Ft, oD as ke, oE as Et, oF as Rt, ko as ne, oG as be, oH as Ot, ma as Ne, f3 as Z, af as Ct, ft as Ue, hP as zt, V as $t, bm as Tt, J as Be, b8 as qt, T as At, bl as Pt, dp as Le, oI as De, M as Je, oJ as Mt } from "./main-DHXLMse1.js";
import { b as je, E as oe, R as L, a as kt, N as Qe, c as Nt } from "./Container-JHAmVaDa.js";
import { i as Ut } from "./timeSupport-BmthSudN.js";
import { t as Bt } from "./highlightReasons-CgkAwhlC.js";
import { f as Lt, y as Dt } from "./LayerView-B7mTAl7c.js";
import { i as He, r as Ge, a as Jt } from "./TechniqueInstance-zQUFl6zM.js";
import { t as tt } from "./CircularArray-DaQg3PQl.js";
import { b as jt } from "./WGLContainer-Cfx415Pj.js";
import { o as Qt } from "./tileUtils-DrLrf-3T.js";
import { b as W, r as Ht, v as Gt, x as Wt } from "./UpdateTracking2D-DZd6CIsL.js";
import { i as J, o as le } from "./enums-BsbtGCGp.js";
import { l as Kt } from "./SDFHelper-CLUKg7Gw.js";
import "./LabelMetric-BZ1wS013.js";
import { G as ue } from "./definitions-Doe0g1C2.js";
import { n as ye, h as v, M as E, e as ce, f as A, g as te, i as Ie, x as ge, d as Fe, m as P, j as Zt, c as Xt } from "./FeatureCommandQueue-DbgU6j82.js";
import { e as Yt } from "./HighlightCounter-MvapOdDA.js";
import { p as Se, n as ei } from "./popupUtils-DFV5EdBZ.js";
import { i as ti } from "./RefreshableLayerView-CHcywepK.js";
let pe = class extends ve {
  constructor() {
    super(...arguments), this.isAggregate = !0;
  }
  getEffectivePopupTemplate(e = !1) {
    if (this.popupTemplate) return this.popupTemplate;
    const t = this.sourceLayer?.featureReduction;
    return t && "popupTemplate" in t && t.popupEnabled ? t.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
h([f({ type: Boolean })], pe.prototype, "isAggregate", void 0), pe = h([H("esri.AggregateGraphic")], pe);
const Ee = pe;
let V = class extends Xe {
  constructor(e) {
    super(e), this._filter = null, this.duration = g("mapview-transitions-duration"), this._excludedEffectView = new je(e), this._includedEffectView = new je(e);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e) {
    this._get("featureEffect") !== e && this._transitionTo(e);
  }
  get filter() {
    return this._filter || this.featureEffect?.filter || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e) {
    this._set("scale", e), this._excludedEffectView.scale = e, this._includedEffectView.scale = e;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e, t) {
    this._set("scale", t), this.transitioning ? (this._includedEffectView.transitionStep(e, t), this._excludedEffectView.transitionStep(e, t), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t, this._includedEffectView.scale = t);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e) {
    const t = this._get("featureEffect"), r = e, s = r?.includedEffect, a = r?.excludedEffect, n = this._includedEffectView.canTransitionTo(s) && this._excludedEffectView.canTransitionTo(a);
    this._includedEffectView.effect = s, this._excludedEffectView.effect = a, this._set("featureEffect", r), this._filter = r?.filter || t?.filter || null, n || this.endTransitions();
  }
};
h([f()], V.prototype, "_filter", void 0), h([f()], V.prototype, "_excludedEffectView", void 0), h([f()], V.prototype, "_includedEffectView", void 0), h([f()], V.prototype, "duration", void 0), h([f()], V.prototype, "excludedEffects", null), h([f()], V.prototype, "featureEffect", null), h([f()], V.prototype, "filter", null), h([f()], V.prototype, "hasEffects", null), h([f()], V.prototype, "includedEffects", null), h([f({ value: 0 })], V.prototype, "scale", null), h([f()], V.prototype, "transitioning", null), V = h([H("esri.layers.effects.FeatureEffectView")], V);
const ii = V;
let Y = class extends _e {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e, t) {
    const r = ut.fromJSON(t.spatialReference), s = [];
    for (let a = 0; a < e.length; a++) {
      const n = e[a], o = Ee.fromJSON(n), u = n.geometry?.spatialReference;
      o.geometry == null || u || (o.geometry.spatialReference = r);
      const l = n.aggregateGeometries, c = o.aggregateGeometries;
      if (l && c != null) for (const d in c) {
        const p = c[d], y = l[d], m = y?.spatialReference;
        p == null || m || (p.spatialReference = r);
      }
      s.push(o);
    }
    return s;
  }
};
h([f({ type: [Ee], json: { write: !0 } })], Y.prototype, "features", void 0), h([lt("features")], Y.prototype, "readFeatures", null), Y = h([H("esri.rest.support.AggregateFeatureSet")], Y);
const ri = Y;
let si = class {
  constructor() {
    this._instanceById = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._instanceById.clear();
  }
  get size() {
    return this._instanceById.size;
  }
  entries() {
    return this._instanceById.entries();
  }
  updateStart() {
    this._instanceByIdNext = /* @__PURE__ */ new Map();
  }
  updateEnd() {
    if (!this._instanceByIdNext) throw new Error("InternalError: Found updateEnd call without corresponding updateStart");
    for (const e of this._instanceById.keys()) this._instanceByIdNext.has(e) || this._instanceById.delete(e);
    for (const [e, t] of this._instanceByIdNext.entries()) {
      const r = this._instanceById.get(e);
      r ? r.setInput(t.getInput()) : this._instanceById.set(e, t);
    }
    this._instanceByIdNext = null;
  }
  values() {
    return this._instanceById.values();
  }
  ensureInstance(e, t) {
    let r;
    if (typeof t == "object" && "optionalAttributes" in t && "uniforms" in t) {
      r = `${e.type}${JSON.stringify(t.optionalAttributes)}`;
      const a = t.uniforms;
      if (typeof a == "object") for (const n in a) r += `${n}.${a[n] != null}`;
    } else r = `${e.type}.${JSON.stringify(t)}`;
    const s = ct(r);
    if (this._instanceByIdNext) {
      const a = new He(Ge(s), e, t);
      return this._instanceByIdNext.set(s, a), a;
    }
    if (!this._instanceById.has(s)) {
      const a = new He(Ge(s), e, t);
      this._instanceById.set(s, a);
    }
    return this._instanceById.get(s);
  }
  getInstance(e) {
    return this._instanceById.get(e);
  }
};
const ai = 1e3;
let ni = class {
  constructor(e, t, r) {
    this.getStage = e, this.version = t, this._tileInfoView = r, this._pendingUpdates = new tt(ai), this._locked = !1, this._tiles = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const e of this.tiles()) e.destroy();
    this._pendingUpdates.clear(), this._tiles.clear();
  }
  tiles() {
    return this._tiles.values();
  }
  size() {
    return this._tiles.size;
  }
  setTiles(e) {
    this._tiles.clear();
    for (const t of e) this._tiles.set(t.key.id, t);
  }
  lockUploads() {
    this._locked = !0;
  }
  unlockUploads() {
    this._locked = !1, this.flush();
  }
  enqueueUpdate(e) {
    this._pendingUpdates.enqueue(e);
  }
  update(e) {
    if (!this._locked) for (; this._pendingUpdates.size; ) {
      const t = this._pendingUpdates.peek();
      if (t == null || t.attributeEpoch > e) break;
      this._updateTile(t), this._pendingUpdates.dequeue();
    }
  }
  removeTile(e) {
    const t = this._tiles.get(e);
    g("esri-2d-update-debug") && console.debug(`Tile[${e}] RenderState.removeTile`), t?.destroy(), this._tiles.delete(e);
  }
  isTileDone(e) {
    const t = this._tiles.get(e.id);
    return !!t && t.isReady;
  }
  flush() {
    for (; this._pendingUpdates.size; ) {
      const e = this._pendingUpdates.dequeue();
      e != null && this._updateTile(e);
    }
    for (const e of this._tiles.values()) e.upload();
  }
  _updateTile(e) {
    if (g("esri-2d-update-debug")) {
      const a = e.debugInfo?.chunkId ?? "<EnsureEnd>";
      console.debug(`Version[${e.version}] Tile[${e.id}] Chunk[${a}] RenderState.updateTile [${e.type}]`, e);
    }
    const t = this._ensureTile(e.id);
    if (e.type === "update") {
      const [a, ...n] = e.modify;
      t.onMessage({ type: "update", modify: a, remove: e.remove, end: e.end, attributeEpoch: e.attributeEpoch });
      for (const o of n) {
        const u = this._tiles.get(o.tileId);
        u && u.onMessage({ type: "update", modify: o, remove: e.remove, end: !1, isPixelBuffer: !0, attributeEpoch: null });
      }
      return;
    }
    if (e.append == null) return void t.onMessage({ type: "append", clear: e.clear, debugInfo: e.debugInfo, end: e.end, attributeEpoch: e.attributeEpoch });
    const [r, ...s] = e.append;
    t.onMessage({ type: "append", clear: e.clear, append: r, debugInfo: e.debugInfo, end: e.end, attributeEpoch: e.attributeEpoch });
    for (const a of s) {
      const n = this._tiles.get(a.tileId);
      n && n.onMessage({ type: "update", modify: a, remove: [], sort: !1, end: !1, isPixelBuffer: !0, attributeEpoch: null });
    }
  }
  _ensureTile(e) {
    if (!this._tiles.has(e)) {
      const t = this._createTile(e);
      this._copyPixelBufferedEntitiesInto(t), this._tiles.set(e, t);
    }
    return this._tiles.get(e);
  }
  _createTile(e) {
    g("esri-2d-update-debug") && console.debug(`Version[${this.version}] Tile[${e}] RenderState.createTile`);
    const t = new X(e), r = this._tileInfoView.getTileBounds(dt(), t), s = this._tileInfoView.getTileResolution(t.level), a = new jt(t, s, r[0], r[3], !0);
    if (a.stage = this.getStage(), !a.stage) {
      const n = new O("featurelayerview:webgl", "Cannot create tile with empty stage");
      F.getLogger("esri.views.2d.layers.features.RenderState").error(n);
    }
    return a;
  }
  _copyPixelBufferedEntitiesInto(e) {
    let t = 7;
    for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
      if (r === 0 && s === 0) continue;
      const a = this._tileInfoView.tileInfo.isWrappable, n = Qt(e.key, s, r, a).id, o = this._tiles.get(n);
      if (o != null) {
        const u = 1 << t;
        e.copyPixelBufferedEntitesFrom(o, u, s, r);
      }
      t--;
    }
  }
}, oi = class {
  constructor(e, t) {
    this.id = e, this.version = t, this._resolver = he(), this._done = !1;
  }
  get done() {
    return this._done;
  }
  get promise() {
    return this._resolver.promise;
  }
  end() {
    this._resolver.resolve(), this._done = !0;
  }
  destroy() {
    this._resolver.reject();
  }
}, li = class extends Jt {
  constructor(e) {
    super(e.view.featuresTilingScheme), this.updatingHandles = new pt(), this._hitTestsRequests = [], this._store = new si(), this._visibleTiles = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Map(), this._updateStatisticsRequests = [], this._lockStatisticUpdates = !1, this._layerView = e;
  }
  renderChildren(e) {
    if (this.attributeView.update(), this._renderState?.update(this.attributeView.currentEpoch), this._renderState) {
      const t = Array.from(this._renderState.tiles()).filter((r) => r.needsUpload);
      t.length && (t[Math.floor(Math.random() * t.length)].upload(), t.length >= 2 && this.requestRender());
      for (const r of this._renderState.tiles()) r.tryReady(this.attributeView.currentEpoch) && (this._subscriptions.get(r.key.id)?.end(), this._layerView.requestUpdate(), this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this.requestRender());
    }
    for (const t of this.children) t.setTransform(e.state);
    switch (this.hasAnimation && e.painter.effects.integrate.draw(e, e.attributeView), super.renderChildren(e), e.drawPhase) {
      case oe.MAP:
        return this._renderMapPhase(e);
      case oe.HIGHLIGHT:
        return this._renderHighlightPhase(e);
      case oe.LABEL:
        return this._renderLabelPhase(e);
    }
  }
  subscriptions() {
    return this._subscriptions.values();
  }
  get _instanceStore() {
    return this._store;
  }
  get instanceStore() {
    return this._store;
  }
  get layerView() {
    return this._layerView;
  }
  get hasLabels() {
    return this._layerView.labelingCollisionInfos.length > 0;
  }
  get hasHighlight() {
    return this._layerView.hasHighlight();
  }
  get _layer() {
    return this._layerView.layer;
  }
  _getExclusivePostprocessingInstance({ drawPhase: e }) {
    if (this._instanceStore == null) return null;
    let t = 0, r = null;
    for (const s of this._instanceStore.values()) s.techniqueRef.drawPhase & e && (t++, s.techniqueRef.postProcessingEnabled && (r = s));
    return t > 1 ? null : r;
  }
  _getOverrideStencilRef({ drawPhase: e }) {
    if (this._instanceStore == null) return null;
    let t = null;
    for (const r of this._instanceStore.values()) {
      if (!(r.techniqueRef.drawPhase & e)) continue;
      const { overrideStencilRef: s } = r.techniqueRef;
      if (t == null) t = s;
      else if (t !== s) {
        t = null;
        break;
      }
    }
    return t;
  }
  get children() {
    return this._renderState ? Array.from(this._renderState.tiles()).filter((e) => this._visibleTiles.has(e.key.id)) : [];
  }
  updateAttributeView(e) {
    this.requestRender(), this.attributeView.requestUpdate(e), this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  updateSubscriptions(e) {
    for (const { tileId: t, version: r } of e.subscribe) if (this._subscriptions.has(t)) this._subscriptions.get(t).version = r;
    else {
      const s = new oi(t, r);
      this._subscriptions.set(t, s), this.updatingHandles.addPromise(s.promise);
    }
    for (const t of e.unsubscribe)
      this._subscriptions.get(t)?.destroy(), this._subscriptions.delete(t), this.removeTile(t);
  }
  isDone(e) {
    return !!this._renderState && this._renderState.isTileDone(e);
  }
  async updateRenderState(e) {
    g("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureContainer.updateRenderState`), this._renderStateNext = new ni(() => this._stage, e, this._tileInfoView);
  }
  getDisplayStatistics(e, t) {
    const r = this._statisticsByLevel.get(e);
    return r ? r.get(t) : null;
  }
  updateStatistics(e, t) {
    if (this._lockStatisticUpdates) return void this._updateStatisticsRequests.push({ level: e, statistics: t });
    let r = this._statisticsByLevel.get(e);
    r || (r = /* @__PURE__ */ new Map(), this._statisticsByLevel.set(e, r));
    for (const s of t) r.set(s.fieldName, { minValue: s.minValue, maxValue: s.maxValue });
  }
  editStart() {
    this._renderState?.lockUploads(), this.attributeView.lockTextureUploads(), this._lockStatisticUpdates = !0;
  }
  editEnd() {
    this._renderState?.unlockUploads(), this.attributeView.unlockTextureUploads(), this._lockStatisticUpdates = !1;
    for (const e of this._updateStatisticsRequests) this.updateStatistics(e.level, e.statistics);
    this._updateStatisticsRequests = [], this.requestRender();
  }
  swapRenderState() {
    this._renderStateNext && (g("esri-2d-update-debug") && console.debug(`Version[${this._renderStateNext.version}] FeatureContainer.update.swapRenderState`), this._renderState?.destroy(), this._renderState = this._renderStateNext, this._renderStateNext = null), this._renderState && this._renderState.flush(), this.requestRender();
  }
  setVisibleTiles(e) {
    this._visibleTiles = e;
  }
  async onMessage(e, t) {
    de(t);
    const r = e.inner;
    if (!this._subscriptions.has(r.id)) return;
    const s = this._subscriptions.get(r.id);
    if (s.version !== r.subscriptionVesrion) {
      if (g("esri-2d-update-debug")) {
        const n = `${r.subscriptionVesrion} != ${s.version}`;
        console.debug(`Version[${n}] Tile[${r.id}] FeatureContainer - Dropping message, outdated version]`, r);
      }
      return;
    }
    const a = this._renderStateNext ?? this._renderState;
    if (!a) throw new Error("InternalError: No renderState defined");
    a.version !== r.version && console.error(`InternalError: Version mismatch. [renderState: ${a.version}, message: ${r.version}]`), a.enqueueUpdate(r), this.requestRender(), this._layerView.view.labelManager.requestUpdate(), this._layerView.requestUpdate();
  }
  removeTile(e) {
    (this._renderState || this._renderStateNext) && (this._renderState && this._renderState.removeTile(e), this._renderStateNext && this._renderStateNext.removeTile(e));
  }
  hitTest(e) {
    let t = this._hitTestsRequests.find(({ x: s, y: a }) => s === e.x && a === e.y);
    const r = he();
    return t ? t.resolvers.push(r) : (t = { x: e.x, y: e.y, resolvers: [r] }, this._hitTestsRequests.push(t)), this.requestRender(), r.promise;
  }
  getSortKeys(e) {
    const t = new Set(e), r = /* @__PURE__ */ new Map();
    for (const s of this.children) if (s.getSortKeys(t).forEach((a, n) => r.set(n, a)), r.size === t.size) break;
    return r;
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  updateTransitionProperties(e, t) {
    super.updateTransitionProperties(e, t), this._layerView.featureEffectView.transitionStep(e, t), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e) {
    const { minScale: t, maxScale: r } = this._layer.effectiveScaleRange, s = e.state.scale;
    s <= (t || 1 / 0) && s >= r && super.doRender(e);
  }
  afterRender(e) {
    super.afterRender(e), this._hitTestsRequests.length && this.requestRender();
  }
  setStencilReference(e) {
    const t = this._getOverrideStencilRef(e);
    if (t == null) super.setStencilReference(e);
    else for (const r of this.children) r.stencilRef = t(r);
  }
  _renderMapPhase(e) {
    this._layerView.featureEffectView.hasEffects ? (this._renderOutsideEffect(e), this._renderInsideEffect(e)) : this._renderFeatures(e, L.All), this._hitTestsRequests.length > 0 && this._renderHittest(e);
  }
  _renderHighlightPhase(e) {
    this.hasHighlight && kt(e, !1, (t) => {
      this._renderFeatures(t, L.Highlight);
    });
  }
  _renderLabelPhase(e) {
    this._renderFeatures(e, L.All);
  }
  _renderInsideEffect(e) {
    const t = e.painter.effects.insideEffect;
    t.bind(e), this._renderFeatures(e, L.InsideEffect), t.draw(e, this._layerView.featureEffectView.includedEffects), t.unbind();
  }
  _renderOutsideEffect(e) {
    const t = e.painter.effects.outsideEffect;
    t.bind(e), this._renderFeatures(e, L.OutsideEffect), t.draw(e, this._layerView.featureEffectView.excludedEffects), t.unbind();
  }
  _renderHittest(e) {
    const { context: t } = e, r = e.painter.effects.hittest, s = t.getBoundFramebufferObject(), a = t.getViewport(), n = e.passOptions, o = e.drawPhase;
    r.bind(e), e.passOptions = r.createOptions(e, this._hitTestsRequests), e.drawPhase = oe.HITTEST;
    const { distance: u, smallSymbolDistance: l } = e.passOptions, c = Math.max(u, l);
    for (const d of this.children) d.visible && d.containsScreenPoint(e.state, e.passOptions.position, 2 * c) && this._renderTile(d, e, L.All);
    r.draw(e), r.unbind(), t.bindFramebuffer(s), t.restoreViewport(a), e.passOptions = n, e.drawPhase = o;
  }
  _renderFeatures(e, t) {
    for (const s of this.children) s.visible && this._renderTile(s, e, t);
    const r = this._getExclusivePostprocessingInstance(e);
    r?.techniqueRef.postProcess(e, r);
  }
  _renderTile(e, t, r) {
    const s = g("featurelayer-force-marker-text-draw-order") ? Qe.STRICT_MARKERS_AND_TEXT : Qe.BATCHING, a = e.getDisplayList(this._instanceStore, s);
    t.selection = r, a?.render(t);
  }
};
async function ui(i) {
  const e = await ht("FeaturePipelineWorker", { client: i, strategy: "dedicated" });
  return new ci(e);
}
let ci = class {
  constructor(e) {
    this._connection = e, this.pipeline = this._connection.createInvokeProxy(), this.features = this._connection.createInvokeProxy("features"), this.aggregates = this._connection.createInvokeProxy("aggregates"), this.streamMessenger = this._connection.createInvokeProxy("streamMessenger");
  }
  destroy() {
    this._connection.destroy();
  }
  get closed() {
    return this._connection.closed;
  }
};
const di = 10;
let R = class extends Xe {
  constructor() {
    super(...arguments), this.events = new ft(), this._updatingStrategy = !0, this._tileToEvent = new yt(), this._fetchStatus = { outstanding: 0, done: 0 };
  }
  get hasAllFeatures() {
    return this._hasAllData() && (this._strategyInfo?.willQueryAllFeatures ?? !1);
  }
  get hasAllFeaturesInView() {
    return this._hasAllData();
  }
  get hasFullGeometries() {
    return this._hasAllData() && (this._strategyInfo?.willQueryFullResolutionGeometry ?? !1);
  }
  onEvent(e) {
    switch (e.type) {
      case "subscribe":
      case "unsubscribe":
      case "loaded":
      case "error":
        this._handleTileEvent(e);
        break;
      case "updateStrategyStart":
        this._updatingStrategy = !0, this._fetchStatus = { done: 0, outstanding: 0 }, this._strategyInfo = e.about;
        break;
      case "updateStrategyEnd":
        this._updatingStrategy = !1;
        break;
      case "updateFieldsStart":
        this._fetchStatus = { done: 0, outstanding: 0 };
        break;
      case "updateFieldsEnd":
        break;
      case "updateFieldsError":
        this.events.emit("error", e);
        break;
      case "fetchStart":
        this._fetchStatus.outstanding += 1, this.events.emit("status", this._fetchStatus);
        break;
      case "fetchEnd":
        this._fetchStatus.done += 1, this.events.emit("status", this._fetchStatus), e.done && (this._fetchStatus = { done: 0, outstanding: 0 });
    }
  }
  _hasAllData() {
    return !this._updatingStrategy && this._hasAllTileData();
  }
  _hasAllTileData() {
    for (const e of this._tileToEvent.values())
      if (e.peekLast()?.type !== "loaded") return !1;
    return !0;
  }
  _handleTileEvent(e) {
    switch (e.type) {
      case "subscribe": {
        const t = new tt(di);
        t.enqueue(e), this._tileToEvent.set(e.tile, t);
        break;
      }
      case "unsubscribe":
        this._tileToEvent.delete(e.tile);
        break;
      case "loaded": {
        const t = this._tileToEvent.get(e.tile);
        if (!t) return;
        t.enqueue(e), this._tileToEvent.set(e.tile, t);
        break;
      }
      case "error": {
        const t = this._tileToEvent.get(e.tile);
        if (!t) return;
        t.enqueue(e), this._tileToEvent.set(e.tile, t), this.events.emit("error", e);
        break;
      }
    }
  }
};
h([f({ readOnly: !0 })], R.prototype, "hasAllFeatures", null), h([f({ readOnly: !0 })], R.prototype, "hasAllFeaturesInView", null), h([f({ readOnly: !0 })], R.prototype, "hasFullGeometries", null), h([f()], R.prototype, "_updatingStrategy", void 0), h([f()], R.prototype, "_strategyInfo", void 0), h([f()], R.prototype, "_tileToEvent", void 0), R = h([H("esri.views.2d.layers.features.FeatureSourceEventLog")], R);
function z(i) {
  switch (i.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "polygon":
    case "multipatch":
      return "esriGeometryPolygon";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return null;
  }
}
function x(i, e) {
  const t = i.featureReduction;
  return t && t.type !== "selection" && (!("maxScale" in t) || !t.maxScale || t.maxScale < e.scale) ? t : null;
}
const pi = Math.PI;
function it(i, e) {
  switch (e.transformationType) {
    case T.Additive:
      return hi(i, e);
    case T.Constant:
      return fi(e, i);
    case T.ClampedLinear:
      return yi(i, e);
    case T.Proportional:
      return mi(i, e);
    case T.Stops:
      return gi(i, e);
    case T.RealWorldSize:
      return bi(i, e);
    case T.Identity:
      return i;
    case T.Unknown:
      return null;
  }
}
function I(i, e) {
  return typeof i == "number" ? i : it(e, i);
}
function hi(i, e) {
  return i + (I(e.minSize, i) || e.minDataValue);
}
function fi(i, e) {
  const t = i.stops;
  let r = t?.length && t[0].size;
  return r == null && (r = i.minSize), I(r, e);
}
function yi(i, e) {
  const t = e.minDataValue, r = e.maxDataValue, s = (i - t) / (r - t), a = I(e.minSize, i), n = I(e.maxSize, i);
  return i <= t ? a : i >= r ? n : a + s * (n - a);
}
function mi(i, e) {
  const t = i / e.minDataValue, r = I(e.minSize, i), s = I(e.maxSize, i);
  let a = null;
  return a = t * r, Ye(a, r, s);
}
function gi(i, e) {
  const [t, r, s] = Si(i, e.cache.ipData);
  if (t === r) return I(e.stops[t].size, i);
  {
    const a = I(e.stops[t].size, i);
    return a + (I(e.stops[r].size, i) - a) * s;
  }
}
function bi(i, e) {
  const t = mt[e.valueUnit], r = I(e.minSize, i), s = I(e.maxSize, i), { valueRepresentation: a } = e;
  let n = null;
  return n = a === "area" ? 2 * Math.sqrt(i / pi) / t : a === "radius" || a === "distance" ? 2 * i / t : i / t, Ye(n, r, s);
}
function Si(i, e) {
  if (!e) return;
  let t = 0, r = e.length - 1;
  return e.some((s, a) => i < s ? (r = a, !0) : (t = a, !1)), [t, r, (i - e[t]) / (e[r] - e[t])];
}
function q(i) {
  return (i.labelsVisible && i.labelingInfo?.every((e) => e.deconflictionStrategy !== "none")) ?? !1;
}
function K(i, e) {
  const t = x(i, e);
  if (t?.labelsVisible && t.labelingInfo?.length) return t.labelingInfo.every((r) => r.deconflictionStrategy !== "none");
}
function vi(i) {
  return (e) => G(it(e, i));
}
function M(i) {
  const e = i != null && "visualVariables" in i && i.visualVariables;
  if (!e) return null;
  for (const t of e) if (t.type === "size") return vi(t);
  return null;
}
function k(i, e, t, r) {
  const s = i.subtypeCode != null ? `${i.subtypeField} = ${i.subtypeCode}` : null, a = xe(i.definitionExpression, s), n = i.customParameters ?? {};
  return r && (n.token = r), { type: "feature", mutable: { sourceRefreshVersion: t, availableFields: e.availableFields, dataFilter: { queryScaleRanges: i.queryScaleRanges ?? [], definitionExpression: a, gdbVersion: i.gdbVersion, historicMoment: i.historicMoment?.getTime(), timeExtent: i.timeExtent?.toJSON(), customParameters: n } } };
}
function _i(i, e, t = 0) {
  if (e == null) return i[t] = 0, i[t + 1] = 0, i[t + 2] = 0, void (i[t + 3] = 0);
  const { r, g: s, b: a, a: n } = e;
  i[t] = r * n / 255, i[t + 1] = s * n / 255, i[t + 2] = a * n / 255, i[t + 3] = n;
}
async function C(i, e) {
  if (!i) return [];
  switch (i.type) {
    case "simple-fill":
      return Ve(i, e);
    case "picture-fill":
      return zi(i, e);
    case "simple-marker":
      return We(i, e);
    case "picture-marker":
      return Ii(i, e);
    case "simple-line":
      return j(i, e, !1);
    case "text":
      return Ei(i, e);
    case "label":
      return Ri(i, e);
    case "cim":
      return ye(i.data, e);
    case "web-style": {
      const t = await i.fetchCIMSymbol();
      return ye(t.data, e);
    }
    case "line-3d":
      return F.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i.type}" unsupported in MapView. Defaulting to simple-line`), j(new bt(), e, !1);
    case "point-3d":
      return F.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i.type}" unsupported in MapView. Defaulting to simple-marker`), We(new gt(), e);
    case "polygon-3d":
      return F.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i.type}" unsupported in MapView. Defaulting to simple-fill`), Ve(new et(), e);
    case "mesh-3d":
    case "label-3d":
      return F.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i.type}" unsupported in MapView. Ignoring`), [];
    case "CIMSymbolReference":
      throw new Error("InternalError: CIMSymbolReference should already be resolved");
  }
}
async function wi(i, e) {
  const { schemaOptions: t } = e, { store: r } = t, s = new Array(ue), a = new Array(ue / 4);
  for (let l = 0; l < ue; l++) {
    const c = l < i.attributes.length ? i.attributes[l].color : null;
    s[l] = [0, 0, 0, 0], _i(s[l], c);
  }
  for (let l = 0; l < ue / 4; l++) a[l] = [0, 0, 0, 0], a[l][0] = 4 * l < i.attributes.length ? 1 : 0, a[l][1] = 4 * l + 1 < i.attributes.length ? 1 : 0, a[l][2] = 4 * l + 2 < i.attributes.length ? 1 : 0, a[l][3] = 4 * l + 3 < i.attributes.length ? 1 : 0;
  const n = { uniforms: { isActive: a, colors: s, dotValue: i.dotValue, dotScale: i.referenceScale, blending: i.dotBlendingEnabled, dotSize: i.dotSize, seed: i.seed }, optionalAttributes: {} }, o = r.ensureInstance(v.dotDensity, n).createMeshInfo({ effects: null }), u = [];
  if (i.backgroundColor) {
    const l = new et({ color: i.backgroundColor, outline: null }), c = await C(l, e);
    u.push(...c);
  }
  if (u.push(o), i.outline) {
    const l = j(i.outline, e, !0);
    u.push(...l);
  }
  return u;
}
async function Vi(i, e) {
  const { store: t } = e, { radius: r, minDensity: s, maxDensity: a, referenceScale: n, field: o, valueExpression: u, colorStops: l } = i, c = St(l);
  return [t.ensureInstance(v.heatmap, { uniforms: { radius: G(r), minDensity: s, maxDensity: a, referenceScale: n, isFieldActive: !(!o && !u), gradient: c, gradientHash: c.join(",") }, optionalAttributes: {} }).createMeshInfo({ effects: null })];
}
function xi(i, e) {
  const { store: t } = e, r = i.outline?.width || 0, s = E(i), a = t.ensureInstance(v.pieChart, { uniforms: { shader: { outlineWidth: Math.round(G(r)), defaultColor: ce(i.defaultColor), outlineColor: ce(i.outline?.color), othersColor: ce(i.othersCategory?.color), donutRatio: i.holePercentage, sectorThreshold: i.othersCategory?.threshold || 0, colors: i.attributes.map((n) => ce(n.color)), visualVariableOpacity: s.visualVariableOpacity, visualVariableSizeMinMaxValue: s.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: s.visualVariableSizeScaleStops, visualVariableSizeStops: s.visualVariableSizeStops, visualVariableSizeUnitValue: s.visualVariableSizeUnitValue, hittestUniforms: null }, numberOfFields: i.attributes.length }, optionalAttributes: {} }).createMeshInfo({ size: i.size, outlineWidth: r, effects: null, scaleInfo: null, minPixelBuffer: A(s) });
  return [...i.backgroundFillSymbol ? Ve(i.backgroundFillSymbol, { schemaOptions: e, path: "", uniforms: ge }) : [], a];
}
function rt(i) {
  if (i.style === "path") {
    if (i.path == null) throw new Error("Symbol with a style of type path must define a path");
    return { type: "sprite-rasterization-param", overrides: [], resource: { type: "path", path: i.path, asFill: !0 } };
  }
  const e = W.fromSimpleMarker(i);
  if ("outline" in i && i.outline && i.outline.style !== "none" && i.outline.style !== "solid") {
    if (!e || !e.symbolLayers) throw new Error("Error handling marker! ");
    return { type: "sprite-rasterization-param", resource: e.symbolLayers[0], overrides: [] };
  }
  return { type: "sprite-rasterization-param", resource: Kt(e), overrides: [] };
}
async function We(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r;
  if (i.style === "path" || i.outline && i.outline.style !== "solid" && i.outline.style !== "none") {
    const p = W.fromSimpleMarker(i);
    if (!p || !p.symbolLayers) throw new Error("Error handling marker! ");
    if (t.visualVariableRotation && (p.angleAlignment = "Map"), i.style !== "path") {
      const y = p.symbolLayers[0];
      if (te(e.uniforms)) {
        const m = A(e.uniforms, 0, 1);
        if (m > y.size) {
          const w = m / y.size;
          y.size = m;
          const b = y.markerGraphics?.[0].symbol;
          (b.symbolLayers && b.symbolLayers[0]).width *= w;
        }
      }
    }
    return ye({ type: "CIMSymbolReference", symbol: p }, e);
  }
  const a = s.ensureInstance(v.marker, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue, visualVariableRotation: t.visualVariableRotation }, optionalAttributes: { zoomRange: !1 } }), n = rt(i);
  let o = i.color?.toArray() ?? [0, 0, 0, 0];
  n.resource.type === "CIMVectorMarker" && (o = [255, 255, 255, 255]);
  const u = i.style === "triangle" ? 124 / 116 : 1, l = i.size, c = l * u, d = t.visualVariableColor != null && (i.style === "cross" || i.style === "x");
  return [a.createMeshInfo({ type: "simple", color: o, height: l, width: c, offsetX: i.xoffset, offsetY: i.yoffset, angle: i.angle, alignment: Ie(t) ? J.MAP : J.SCREEN, outlineColor: i.outline?.color?.toArray() ?? [0, 0, 0, 0], outlineSize: i.outline?.width ?? 1, referenceSize: l, sprite: n, overrideOutlineColor: d, hasSizeVV: te(t), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: A(t) })];
}
function Ii(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = s.ensureInstance(v.marker, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue, visualVariableRotation: t.visualVariableRotation }, optionalAttributes: { zoomRange: !1 } }), n = W.createPictureMarkerRasterizationParam(i);
  return n ? [a.createMeshInfo({ type: "picture", color: [255, 255, 255, 255], height: i.height, width: i.width, offsetX: i.xoffset, offsetY: i.yoffset, angle: i.angle, alignment: Ie(t) ? J.MAP : J.SCREEN, outlineColor: null, outlineSize: 0, referenceSize: i.height, sprite: n, overrideOutlineColor: !1, hasSizeVV: te(t), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: A(t) })] : [];
}
function Fi(i, e, t) {
  const { uniforms: r, schemaOptions: s } = t, { store: a } = s, n = a.ensureInstance(v.marker, { uniforms: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity, visualVariableSizeMinMaxValue: r.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r.visualVariableSizeScaleStops, visualVariableSizeStops: r.visualVariableSizeStops, visualVariableSizeUnitValue: r.visualVariableSizeUnitValue, visualVariableRotation: r.visualVariableRotation }, optionalAttributes: { zoomRange: !1 } }), o = rt(i), u = 6, l = u * e.width, c = l, d = i.color?.toArray() ?? e.color?.toArray() ?? [0, 0, 0, 0], p = i.style === "cross" || i.style === "x";
  let y;
  switch (i.placement) {
    case "begin-end":
      y = le.Both;
      break;
    case "begin":
      y = le.JustBegin;
      break;
    case "end":
      y = le.JustEnd;
      break;
    default:
      y = le.None;
  }
  const m = { type: "cim-marker-placement-param", placement: { type: "CIMMarkerPlacementAtExtremities", angleToLine: !0, offset: 0, extremityPlacement: y, offsetAlongLine: 0 }, overrides: [] };
  return [n.createMeshInfo({ type: "simple", color: d, height: c, width: l, offsetX: 0, offsetY: 0, angle: 0, alignment: Ie(r) ? J.MAP : J.SCREEN, outlineColor: d, outlineSize: p ? e.width : 0, referenceSize: c / u, sprite: o, overrideOutlineColor: p && r.visualVariableColor != null, hasSizeVV: te(r), placement: m, transforms: null, effects: null, scaleInfo: null, minPixelBuffer: A(r) })];
}
function Ei(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r;
  return [s.ensureInstance(v.text, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableRotation: t.visualVariableRotation, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !1, clipAngle: !1, referenceSymbol: !1 } }).createMeshInfo({ boxBackgroundColor: i.backgroundColor?.toArray(), boxBorderLineColor: i.borderLineColor?.toArray(), boxBorderLineSize: i.borderLineSize ?? 0, color: i.color?.toArray() ?? [0, 0, 0, 0], offsetX: i.xoffset, offsetY: i.yoffset, postAngle: i.angle, fontSize: i.font.size, decoration: i.font.decoration, haloColor: i.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: i.haloSize ?? 0, lineWidth: i.lineWidth, lineHeightRatio: i.lineHeight, horizontalAlignment: i.horizontalAlignment, verticalAlignment: i.verticalAlignment, useCIMAngleBehavior: !1, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: i.font.toJSON(), textString: i.text, symbol: W.createCIMTextSymbolfromTextSymbol(i) }, overrides: [] }, referenceSize: null, effects: null, placement: null, scaleInfo: null, transforms: null, scaleFactor: 1, minPixelBuffer: A(t), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: !1 })];
}
function Ri(i, e) {
  const { schemaOptions: t, uniforms: r } = e, { store: s } = t, a = i.symbol, { allowOverrun: n, repeatLabel: o, repeatLabelDistance: u } = i, l = { maxScale: i.maxScale ?? 0, minScale: i.minScale ?? 0 }, c = s.ensureInstance(v.label, { uniforms: { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: r.visualVariableRotation, visualVariableSizeMinMaxValue: r.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r.visualVariableSizeScaleStops, visualVariableSizeStops: r.visualVariableSizeStops, visualVariableSizeUnitValue: r.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !0, clipAngle: !0, referenceSymbol: !0 } }), d = i.labelPlacement, [p, y] = Ht(d);
  return [c.createMeshInfo({ boxBackgroundColor: a.backgroundColor?.toArray(), boxBorderLineColor: a.borderLineColor?.toArray(), boxBorderLineSize: a.borderLineSize ?? 0, color: a.color?.toArray() ?? [0, 0, 0, 0], offsetX: a.xoffset, offsetY: a.yoffset, postAngle: a.angle, fontSize: a.font.size, decoration: a.font.decoration, haloColor: a.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: a.haloSize ?? 0, lineWidth: a.lineWidth, lineHeightRatio: a.lineHeight, horizontalAlignment: p, verticalAlignment: y, repeatLabel: o, repeatLabelDistance: G(u), allowOverrun: n, labelPosition: i.labelPosition, scaleInfo: l, minPixelBuffer: A(r), useCIMAngleBehavior: !1, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: a.font.toJSON(), textString: a.text, symbol: W.createCIMTextSymbolfromTextSymbol(a), primitiveName: "label-override" }, useLegacyLabelEvaluationRules: i.labelExpressionInfo?.expression == null, overrides: [{ type: "CIMPrimitiveOverride", valueExpressionInfo: { type: "CIMExpressionInfo", expression: i.labelExpressionInfo?.expression ?? i.labelExpression, returnType: "String" }, primitiveName: "label-override", propertyName: "textString", defaultValue: "" }] }, referenceSize: null, effects: null, placement: null, transforms: null, scaleFactor: 1, isLineLabel: !1 })];
}
function Re(i, e) {
  const t = i.width;
  return { outlineColor: i.color?.toArray() || [0, 0, 0, 1], width: t, referenceWidth: t, capType: i.cap ?? "round", joinType: i.join ?? "round", miterLimit: i.miterLimit, hasSizeVV: e };
}
function Oi(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = i.color?.toArray() ?? [0, 0, 0, 0], n = { type: "sprite-rasterization-param", resource: { type: "fill-style", style: i.style }, overrides: [] };
  if (i.outline?.style === "solid")
    return [s.ensureInstance(v.patternOutlineFill, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeScaleStops: t.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: !1 } }).createMeshInfo({ color: a, ...Re(i.outline, !!t.visualVariableSizeOutlineScaleStops), sprite: n, scaleInfo: null, effects: null })];
  const o = [], u = s.ensureInstance(v.patternFill, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity }, optionalAttributes: { zoomRange: !1 } }).createMeshInfo({ color: i.color?.toArray() ?? [0, 0, 0, 0], sprite: n, scaleInfo: null, effects: null });
  return o.push(u), i.outline && o.push(...j(i.outline, e, !0)), o;
}
function Ci(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = i.color?.toArray() ?? [0, 0, 0, 0];
  if (i.style !== "none" && i.outline?.style === "solid")
    return [s.ensureInstance(v.outlineFill, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeScaleStops: t.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: !1 } }).createMeshInfo({ color: a, ...Re(i.outline, !!t.visualVariableSizeOutlineScaleStops), scaleInfo: null, effects: null })];
  const n = [];
  if (i.style !== "none") {
    const o = s.ensureInstance(v.fill, { uniforms: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity }, optionalAttributes: { zoomRange: !1 } }).createMeshInfo({ color: a, scaleInfo: null, effects: null });
    n.push(o);
  }
  return i.outline && n.push(...j(i.outline, e, !0)), n;
}
function Ve(i, e) {
  const { style: t } = i;
  return t && t !== "none" && t !== "solid" ? Oi(i, e) : Ci(i, e);
}
function zi(i, e) {
  const { outline: t } = i, { uniforms: r, schemaOptions: s } = e, { store: a } = s, n = [], o = W.createPictureFillRasterizationParam(i);
  if (!o) return [];
  const { width: u, height: l, xoffset: c, yoffset: d, xscale: p, yscale: y } = i, m = { color: [255, 255, 255, 255], sprite: o, height: l, aspectRatio: u / l, offsetX: c, offsetY: d, scaleX: p, scaleY: y, angle: 0, applyRandomOffset: !1, sampleAlphaOnly: !1, scaleProportionally: !1, effects: null, scaleInfo: null };
  if (t?.style === "solid")
    return [a.ensureInstance(v.complexOutlineFill, { uniforms: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity, visualVariableSizeScaleStops: r.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: !1 } }).createMeshInfo({ ...m, ...Re(t, !!r.visualVariableSizeOutlineScaleStops) })];
  const w = a.ensureInstance(v.complexFill, { uniforms: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity }, optionalAttributes: { zoomRange: !1 } });
  return n.push(w.createMeshInfo(m)), t && n.push(...j(t, e, !0)), n;
}
function j(i, e, t) {
  const { color: r, style: s, width: a, cap: n, join: o } = i, { schemaOptions: u } = e, { store: l } = u, c = [], d = t ? { ...ge, visualVariableSizeScaleStops: e.uniforms.visualVariableSizeOutlineScaleStops } : e.uniforms, p = { uniforms: { visualVariableColor: d.visualVariableColor, visualVariableOpacity: d.visualVariableOpacity, visualVariableSizeMinMaxValue: d.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: d.visualVariableSizeScaleStops, visualVariableSizeStops: d.visualVariableSizeStops, visualVariableSizeUnitValue: d.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: !1 } }, y = { color: r?.toArray() ?? [0, 0, 0, 0], width: a, referenceWidth: a, capType: n, joinType: o, miterLimit: i.miterLimit, hasSizeVV: te(d), effects: null, scaleInfo: null };
  if (s == null || s === "solid") {
    const m = l.ensureInstance(v.line, p).createMeshInfo(y);
    c.push(m);
  } else if (s !== "none") {
    const m = l.ensureInstance(v.texturedLine, p).createMeshInfo({ ...y, shouldScaleDash: !0, shouldSampleAlphaOnly: !1, isSDF: !0, sprite: { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: Gt(s, n), capStyle: Wt(n) }, overrides: [] } });
    c.push(m);
  }
  return i.marker != null && c.push(...Fi(i.marker, i, e)), c;
}
async function ie(i, e, t) {
  const r = e.labelsVisible && e.labelingInfo || [], s = z(e), a = vt(r, s);
  return { type: "label", classes: await Promise.all(a.map((n, o) => $i(i, n, o, t))) };
}
async function $i(i, e, t, r) {
  const s = await C(e, { path: `${t}`, schemaOptions: i, uniforms: r });
  return { maxScale: e.maxScale, minScale: e.minScale, expression: e.labelExpressionInfo?.expression ?? e.labelExpression, where: e.where, meshes: s };
}
async function re(i, e) {
  if (!e) return { type: "simple", meshes: [] };
  switch (e.type) {
    case "simple":
      return Ti(i, e);
    case "dot-density":
      return qi(i, e);
    case "class-breaks":
      return Ai(i, e);
    case "unique-value":
      return Pi(i, e);
    case "dictionary":
      return Mi(e);
    case "heatmap":
      return ki(i, e);
    case "pie-chart":
      return Ni(i, e);
  }
}
async function Ti(i, e) {
  const t = e.getSymbols(), r = t.length ? t[0] : null, s = E(e);
  return { type: "simple", meshes: await C(r, { schemaOptions: i, uniforms: s, path: "renderer.symbol" }) };
}
async function qi(i, e) {
  const t = E(e);
  return { type: "dot-density", meshes: await wi(e, { schemaOptions: i, uniforms: t, path: "renderer.symbol" }) };
}
async function Ai(i, e) {
  const t = E(e), r = e.backgroundFillSymbol, s = e.normalizationType, a = s === "log" ? "esriNormalizeByLog" : s === "percent-of-total" ? "esriNormalizeByPercentOfTotal" : s === "field" ? "esriNormalizeByField" : null, n = e.classBreakInfos.map(async (c) => ({ meshes: await C(c.symbol, { path: `renderer-stop-${c.minValue}-${c.maxValue}`, schemaOptions: i, uniforms: t }), min: c.minValue, max: c.maxValue })), o = (await Promise.all(n)).sort((c, d) => c.min - d.min), u = await C(r, { schemaOptions: i, path: "renderer.backgroundFill", uniforms: { ...ge, visualVariableSizeOutlineScaleStops: t.visualVariableSizeOutlineScaleStops } }), l = await C(e.defaultSymbol, { schemaOptions: i, path: "renderer.defaultSymbol", uniforms: t });
  return { type: "interval", field: e.field, expression: e.valueExpression, backgroundFill: u, defaultSymbol: l, intervals: o, normalizationField: e.normalizationField, normalizationTotal: e.normalizationTotal, normalizationType: a, isMaxInclusive: e.isMaxInclusive };
}
async function Pi(i, e) {
  const t = [], r = E(e), s = await C(e.backgroundFillSymbol, { schemaOptions: i, path: "renderer.backgroundFill", uniforms: { ...ge, visualVariableSizeOutlineScaleStops: r.visualVariableSizeOutlineScaleStops } }), a = await C(e.defaultSymbol, { schemaOptions: i, path: "renderer.defaultSymbol", uniforms: r });
  for (const n of e.uniqueValueInfos ?? []) {
    const o = await C(n.symbol, { path: `renderer-unique-value-${n.value}`, schemaOptions: i, uniforms: r });
    t.push({ value: "" + n.value, symbol: o });
  }
  return { type: "map", field: e.field, expression: e.valueExpression, field2: e.field2, field3: e.field3, fieldDelimiter: e.fieldDelimiter, backgroundFill: s, defaultSymbol: a, map: t };
}
function Mi(i) {
  const e = E(i), t = i.scaleExpression, r = t != null && t !== "1" ? { valueExpressionInfo: { type: "CIMExpressionInfo", expression: i.scaleExpression, returnType: "Numeric" }, defaultValue: 1 } : void 0;
  return { type: "dictionary", fieldMap: i.fieldMap, scaleExpression: r, visualVariableUniforms: e };
}
async function ki(i, e) {
  return { type: "heatmap", meshes: await Vi(e, i) };
}
async function Ni(i, e) {
  return { type: "pie-chart", meshes: xi(e, i) };
}
async function Ui(i, e) {
  const t = e.renderer, r = E(t);
  return { symbology: await re(i, t), labels: await ie(i, e, r) };
}
async function N(i, e, t, r) {
  const s = t.featureReduction;
  if (s) switch (s.type) {
    case "binning":
      return Li(s, i, e, t, r);
    case "cluster":
      return Di(s, i, e, t, r);
  }
  const a = Ji(t.orderBy, t.renderer, t.objectIdField), n = Fe(t.renderer, e.filters), o = await Ui(i, t);
  return { storage: n, mesh: { properties: { sortKey: a, timeZone: e.timeZone, returnMeshObjectId: !1, displayRefreshVersion: r }, strategy: { type: "feature" }, factory: o } };
}
function st(i, e) {
  return i.fields.map((t) => ({ ...t.toJSON(), type: Bi(t, e) }));
}
function Bi(i, e) {
  const { onStatisticExpression: t, onStatisticField: r, statisticType: s } = i;
  switch (s) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (t) {
        const { returnType: n } = t;
        return n ? n === "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" : "esriFieldTypeString";
      }
      const a = e.find((n) => n.name === r);
      return a ? a.type : "esriFieldTypeString";
    }
  }
}
async function Li(i, e, t, r, s) {
  const a = st(i, r.fields), n = i.renderer, o = await re(e, n), u = Fe(n, [null, null]), l = E(n), c = await ie(e, { geometryType: "polygon", labelingInfo: i.labelingInfo, labelsVisible: i.labelsVisible }, l), d = !1, p = i.binType === "geohash" ? { type: "geohash", fixBinLevel: i.fixedBinLevel ?? 3 } : { type: "grid", size: G(i.size), fixedBinLevel: i.fixedBinLevel };
  return { storage: u, mesh: { properties: { sortKey: null, timeZone: t.timeZone, returnMeshObjectId: d, displayRefreshVersion: s }, strategy: { type: "binning", fields: a, index: p, featureFilter: t.filters[0] }, factory: { labels: c, symbology: o } } };
}
async function Di(i, e, t, r, s) {
  const a = st(i, r.fields), n = { type: "cluster", feature: await re(e, i.effectiveFeatureRenderer), cluster: await re(e, i.effectiveClusterRenderer) }, o = E(i.effectiveFeatureRenderer), u = { type: "cluster", feature: await ie(e, r, o), cluster: await ie(e, { geometryType: "point", labelingInfo: i.labelingInfo, labelsVisible: i.labelsVisible }, o) };
  return { storage: Fe(i.effectiveFeatureRenderer, [null, null]), mesh: { properties: { sortKey: null, timeZone: t.timeZone, displayRefreshVersion: s, returnMeshObjectId: !1 }, strategy: { type: "cluster", fields: a, featureFilter: t.filters[0], clusterRadius: G(i.clusterRadius / 2) }, factory: { labels: u, symbology: n } } };
}
function Ji(i, e, t) {
  const r = e != null && e.type === "unique-value" && e.orderByClassesEnabled;
  if (i !== "default" || r || (i = [new _t({ field: t, order: "descending" })]), i !== "default" && i.length) {
    i.length;
    const s = i[0], a = s.order === "ascending" ? "asc" : "desc";
    return s.field ? { field: s.field, order: a } : s.valueExpression ? { expression: s.valueExpression, order: a } : null;
  }
  return r ? { byRenderer: !0, order: "asc" } : null;
}
let ji = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, editingInfo: s, objectIdField: a, globalIdField: n, datesInUnknownTimezone: o, orderBy: u, parsedUrl: l } = t, c = t.fieldsIndex.toJSON(), d = z(t), p = t.timeInfo?.toJSON(), y = t.spatialReference.toJSON(), m = se(l);
    let w = a;
    if (u?.length) {
      const b = !u[0].valueExpression && u[0].field;
      b && (w = b);
    }
    return { type: "feature-service", source: m, isSourceHosted: me(m.path), orderByFields: w, outSpatialReference: e.spatialReference.toJSON(), metadata: { timeReferenceUnknownClient: o, globalIdField: n, fieldsIndex: c, geometryType: d, objectIdField: a, timeInfo: p, spatialReference: y, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: s?.lastEditDate?.getTime(), snapshotInfo: null } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, customParameters: s, timeExtent: a, apiKey: n } = this.layer;
    return k({ definitionExpression: r, customParameters: s, timeExtent: a }, e, t, n);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, geometryType: a, orderBy: n, objectIdField: o, renderer: u, labelingInfo: l, labelsVisible: c } = this.layer, d = { featureReduction: null, fields: s.map((p) => p.toJSON()), geometryType: a, labelingInfo: l, labelsVisible: c, objectIdField: o, orderBy: n ?? "default", renderer: u?.clone() };
    return N(e, t, d, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, apiKey: s, renderer: a } = t, n = this.layer.labelsVisible ? this.layer.labelingInfo : null, o = JSON.stringify(t.customParameters), u = JSON.stringify(t.orderBy);
    return { outFields: this.layer.outFields, apiKey: s, customParameters: o, definitionExpression: r, labelingInfo: n, orderBy: u, renderer: a };
  }
  setGraphicOrigin(e) {
    e.origin = { type: "catalog", layer: this.layer };
  }
};
function Oe(i, e) {
  const t = i.extent, r = e?.clone().intersection(t), s = r != null ? r.width * r.height : 0, a = e ? e.width * e.height : 0, n = a === 0 ? 0 : s / a, o = g("featurelayer-snapshot-point-coverage");
  return !isNaN(n) && n >= o;
}
function Q(i, e) {
  return i.floorInfo != null && (i.floorInfo.viewAllLevelIds.length > 0 || e.floors.length > 0);
}
function Ce(i, e, t) {
  const r = Qi(i, e?.where, t);
  return r && (e ??= new ee(), e.where = r), e;
}
function Qi(i, e, t) {
  if (i.floorInfo == null || !t.floors?.length) return e;
  let r = t.floors;
  const { floorField: s, viewAllLevelIds: a } = i.floorInfo;
  a.length && (r = a);
  const n = r.filter((u) => u !== "").map((u) => "'" + u + "'");
  if (n.push("''"), e?.includes(s)) {
    let u = new RegExp("AND \\(" + s + ".*NULL\\)", "g");
    e = e.replace(u, ""), u = new RegExp("\\(" + s + ".*NULL\\)", "g"), e = (e = e.replace(u, "")).replaceAll(/\s+/g, " ").trim();
  }
  let o = "(" + s + " IN ({ids}) OR " + s + " IS NULL)";
  return o = o.replace("{ids}", n.join(", ")), xe(e, o);
}
let Hi = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, editingInfo: s, objectIdField: a, typeIdField: n, globalIdField: o, datesInUnknownTimezone: u, orderBy: l, subtypeField: c, refreshInterval: d } = t, p = t.fieldsIndex.toJSON(), y = p.fields, m = z(t), w = t.timeInfo?.toJSON(), b = t.spatialReference.toJSON(), U = t.types?.map((B) => B.toJSON()), $ = se(this.layer.parsedUrl);
    this.layer.dynamicDataSource && ($.query = { layer: JSON.stringify({ source: this.layer.dynamicDataSource }) });
    let ae = this.layer.objectIdField;
    if (l?.length) {
      const B = !l[0].valueExpression && l[0].field;
      B && (ae = B);
    }
    const nt = s?.lastEditDate == null && d > 0, ze = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && r?.query.supportsPagination && !r?.operations.supportsEditing && !nt, ot = ze && Oe(e, t.fullExtent);
    return { type: "feature-service", source: $, isSourceHosted: me($.path), orderByFields: ae, outSpatialReference: e.spatialReference.toJSON(), metadata: { typeIdField: n ?? void 0, types: U, timeReferenceUnknownClient: u, subtypeField: c, globalIdField: o, fields: y, fieldsIndex: p, geometryType: m, objectIdField: a, timeInfo: w, spatialReference: b, subtypes: this.layer.subtypes?.map((B) => B.toJSON()) }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: s?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: ze, supportsSnapshotMaxThreshold: ot, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, customParameters: s, gdbVersion: a, historicMoment: n, subtypeCode: o, subtypeField: u, timeExtent: l, apiKey: c } = this.layer;
    return k({ definitionExpression: r, customParameters: s, gdbVersion: a, historicMoment: n, subtypeCode: o, subtypeField: u, timeExtent: l }, e, t, c);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, orderBy: l, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: c, orderBy: l ?? "default" };
    return N(e, t, d, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  hasFilters(e) {
    return Q(this.layer, e);
  }
  addFilters(e, t) {
    return Ce(this.layer, e, t);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s, gdbVersion: a, apiKey: n, subtypeCode: o } = t, u = this.layer.labelsVisible ? this.layer.labelingInfo : null, l = t.historicMoment?.getTime() ?? void 0, c = JSON.stringify(t.customParameters), d = x(t, e), p = JSON.stringify(t.orderBy), y = Q(this.layer, e) ? e.floors : null;
    return { outFields: this.layer.outFields, apiKey: n, customParameters: c, definitionExpression: r, featureReduction: d, floors: y, gdbVersion: a, historicMoment: l, labelingInfo: u, orderBy: p, renderer: s, subtypeCode: o };
  }
};
function Gi(i) {
  if (!("openPorts" in i)) throw new O("source-not-supported");
}
class Ke {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, objectIdField: s } = t, a = t.fieldsIndex.toJSON(), n = z(t), o = t.timeInfo?.toJSON(), u = t.spatialReference.toJSON();
    return Gi(t.source), { type: "memory", source: await t.source.openPorts(), orderByFields: s, outSpatialReference: e.spatialReference.toJSON(), metadata: { fieldsIndex: a, geometryType: n, objectIdField: s, timeInfo: o, spatialReference: u, subtypes: null, subtypeField: null, globalIdField: null, typeIdField: null, types: null, timeReferenceUnknownClient: null }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, timeExtent: s } = this.layer;
    return k({ definitionExpression: r, timeExtent: s, customParameters: null }, e, t, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, orderBy: l, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: c, orderBy: l ?? "default" };
    return N(e, t, d, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = x(t, e);
    return { orderBy: JSON.stringify(t.orderBy), definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: n };
  }
}
class Wi {
  constructor(e) {
    this.layer = e, this.timeOptions = null;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, objectIdField: s } = t, a = t.fieldsIndex.toJSON(), n = z(t), o = t.spatialReference.toJSON();
    return { type: "memory", source: await t.source.openPorts(), orderByFields: s, outSpatialReference: e.spatialReference.toJSON(), metadata: { fieldsIndex: a, geometryType: n, objectIdField: s, spatialReference: o, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r } = this.layer;
    return k({ definitionExpression: r, customParameters: null }, e, t, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: l } = this.layer, c = { fields: s.map((d) => d.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: l, orderBy: "default" };
    return N(e, t, c, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t;
    return { definitionExpression: r, renderer: s, labelingInfo: this.layer.labelsVisible ? this.layer.labelingInfo : null, featureReduction: x(t, e) };
  }
}
let Ki = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, objectIdField: s } = t, a = t.fieldsIndex.toJSON(), n = z(t), o = t.timeInfo?.toJSON(), u = t.spatialReference.toJSON(), l = t.source.getSource(), c = this.layer.objectIdField, d = se(r);
    return d.query.maxRecordCount = l.maxRecordCount, { type: "ogc", source: l, orderByFields: c, outSpatialReference: e.spatialReference.toJSON(), metadata: { fieldsIndex: a, geometryType: n, objectIdField: s, timeInfo: o, spatialReference: u, globalIdField: null, subtypeField: null, subtypes: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: d.query.maxRecordCount, supportsCompactGeometry: d.query.supportsCompactGeometry, supportsDefaultSpatialReference: d.query.supportsDefaultSpatialReference, supportsFormatPBF: d.query.supportsFormatPBF, supportsMaxRecordCountFactor: d.query.supportsMaxRecordCountFactor, supportsQuantization: d.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t) {
    const { customParameters: r, timeExtent: s, apiKey: a } = this.layer;
    return k({ customParameters: r, timeExtent: s }, e, t, a);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, orderBy: l, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: c, orderBy: l ?? "default" };
    return N(e, t, d, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { renderer: r, apiKey: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null;
    return { apiKey: s, customParameters: JSON.stringify(t.customParameters), featureReduction: x(t, e), labelingInfo: a, orderBy: JSON.stringify(t.orderBy), renderer: r };
  }
}, Zi = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, objectIdField: s, globalIdField: a, orderBy: n, refreshInterval: o } = t, u = t.fieldsIndex.toJSON(), l = u.fields, c = z(t), d = t.timeInfo?.toJSON(), p = t.spatialReference.toJSON(), y = se(this.layer.parsedUrl);
    let m = this.layer.objectIdField;
    if (n?.length) {
      const $ = !n[0].valueExpression && n[0].field;
      $ && (m = $);
    }
    const w = o > 0, b = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && r?.query.supportsPagination && !r?.operations.supportsEditing && !w, U = b && Oe(e, t.fullExtent);
    return { type: "feature-service", source: y, isSourceHosted: me(y.path), orderByFields: m, outSpatialReference: e.spatialReference.toJSON(), metadata: { globalIdField: a, fields: l, fieldsIndex: u, geometryType: c, objectIdField: s, timeInfo: d, spatialReference: p, timeReferenceUnknownClient: !1, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: null, snapshotInfo: { supportsSnapshotMinThreshold: b, supportsSnapshotMaxThreshold: U, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, customParameters: s, timeExtent: a } = this.layer;
    return k({ definitionExpression: r, customParameters: s, timeExtent: a }, e, t, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, orderBy: l, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: c, orderBy: l ?? "default" };
    return N(e, t, d, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  hasFilters(e) {
    return Q(this.layer, e);
  }
  addFilters(e, t) {
    return Ce(this.layer, e, t);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s, outFields: a } = t, n = this.layer.labelsVisible ? this.layer.labelingInfo : null, o = JSON.stringify(t.customParameters), u = x(t, e);
    return { outFields: a, orderBy: JSON.stringify(t.orderBy), definitionExpression: r, renderer: s, labelingInfo: n, featureReduction: u, customParameters: o, floors: Q(this.layer, e) ? e.floors : null };
  }
};
class Xi {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = K(t, e) ?? q(t);
    return [{ vvEvaluators: { 0: M(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { objectIdField: r } = t, s = z(t), a = t.timeInfo?.toJSON() || null, n = t.spatialReference ? t.spatialReference.toJSON() : null;
    return { type: "stream", source: this.layer.parsedUrl, outSpatialReference: e.spatialReference.toJSON(), metadata: { fieldsIndex: this.layer.fieldsIndex.toJSON(), geometryType: s, objectIdField: r, timeInfo: a, timeReferenceUnknownClient: null, spatialReference: n, subtypeField: null, subtypes: null, globalIdField: null, typeIdField: null, types: null } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, geometryDefinition: s, customParameters: a } = this.layer;
    return { type: "stream", mutable: { sourceRefreshVersion: t, availableFields: e.availableFields, dataFilter: { geometryDefinition: s?.toJSON(), definitionExpression: r, customParameters: a ?? null, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, purgeOptions: this.layer.purgeOptions.toJSON() } } };
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: l } = this.layer, c = { fields: s.map((d) => d.toJSON()), renderer: a?.clone(), featureReduction: x(this.layer, t), geometryType: n, labelingInfo: o, labelsVisible: u, objectIdField: l, orderBy: "default" };
    return N(e, t, c, r);
  }
  get hasRequiredSupport() {
    return P(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = JSON.stringify(t.customParameters);
    return { definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: x(t, e), customParameters: n, geometryDefinition: t.geometryDefinition, definitionExpressoin: t.definitionExpression };
  }
}
async function Yi(i, { subtypeField: e, sublayers: t }) {
  const r = await Promise.all(t.map(({ renderer: s }) => re(i, s)));
  return { type: "subtype", subtypeField: e, renderers: t.reduce((s, { subtypeCode: a }, n) => ({ ...s, [a]: r[n] }), {}) };
}
function er(i, e) {
  const t = wt();
  return { type: "subtype", filters: i.filters, capabilities: { maxTextureSize: t.maxTextureSize }, subtypeField: e.subtypeField, target: "feature", bindings: e.sublayers.reduce((r, { renderer: s, subtypeCode: a }) => {
    const n = Zt(s);
    return { ...r, [a]: n };
  }, {}) };
}
async function tr(i, { subtypeField: e, sublayers: t }) {
  const r = await Promise.all(t.map((s) => {
    const a = E(s.renderer), n = { ...s, geometryType: s.geometryType ?? null };
    return ie(i, n, a);
  }));
  return { type: "subtype", subtypeField: e, renderers: t.reduce((s, { subtypeCode: a }, n) => ({ ...s, [a]: r[n] }), {}) };
}
async function ir(i, e, t, r) {
  return { storage: er(e, t), mesh: { properties: { timeZone: e.timeZone, displayRefreshVersion: r, returnMeshObjectId: !1, sortKey: null }, strategy: { type: "feature" }, factory: { symbology: await Yi(i, t), labels: await tr(i, t) } } };
}
class rr {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    return [{ vvEvaluators: {}, deconflictionEnabled: this.layer.sublayers.every((t) => q(t)) }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { capabilities: r, datesInUnknownTimezone: s, editingInfo: a, globalIdField: n, objectIdField: o, refreshInterval: u, subtypeField: l } = t, c = t.fieldsIndex.toJSON(), d = z(t), p = t.timeInfo?.toJSON(), y = t.spatialReference.toJSON(), m = se(this.layer.parsedUrl), w = o, b = a?.lastEditDate == null && u > 0, U = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && r?.query.supportsPagination && !r?.operations.supportsEditing && !b, $ = U && Oe(e, t.fullExtent);
    return { type: "feature-service", source: m, isSourceHosted: me(m.path), orderByFields: w, outSpatialReference: e.spatialReference.toJSON(), metadata: { timeReferenceUnknownClient: s, subtypeField: l, globalIdField: n, fieldsIndex: c, geometryType: d, objectIdField: o, timeInfo: p, spatialReference: y, subtypes: this.layer.subtypes?.map((ae) => ae.toJSON()), typeIdField: null, types: null }, queryMetadata: { maxRecordCount: r.query.maxRecordCount, supportsCompactGeometry: r.query.supportsCompactGeometry, supportsDefaultSpatialReference: r.query.supportsDefaultSpatialReference, supportsFormatPBF: r.query.supportsFormatPBF, supportsMaxRecordCountFactor: r.query.supportsMaxRecordCountFactor, supportsQuantization: r.query.supportsQuantization, lastEditDate: a?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: U, supportsSnapshotMaxThreshold: $, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t) {
    const { definitionExpression: r, customParameters: s, gdbVersion: a, historicMoment: n, subtypeField: o, timeExtent: u, apiKey: l } = this.layer, c = { queryScaleRanges: this.layer.sublayers.items.map((d) => ({ subtypeCode: d.subtypeCode, minScale: d.minScale, maxScale: d.maxScale })), definitionExpression: r, customParameters: s, gdbVersion: a, historicMoment: n, subtypeField: o, timeExtent: u };
    return k(c, e, t, l);
  }
  createProcessorSchema(e, t, r) {
    const s = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers, (a) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: a.labelingInfo, labelsVisible: a.labelsVisible, renderer: a.renderer, subtypeCode: a.subtypeCode, orderBy: null })) };
    return ir(e, t, s, r);
  }
  hasFilters(e) {
    return Q(this.layer, e) || sr(this.layer, e);
  }
  addFilters(e, t) {
    e = Ce(this.layer, e, t);
    const r = this.layer.sublayers.filter((a) => !at(a, t)).map((a) => a.subtypeCode);
    if (!r.length) return e;
    e ??= new ee();
    const s = `NOT ${this.layer.subtypeField} IN (${r.join(",")})`;
    return e.where = xe(e.where, s), e;
  }
  get hasRequiredSupport() {
    return !0;
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, gdbVersion: s, apiKey: a } = t, n = t.historicMoment?.getTime() ?? void 0, o = JSON.stringify(t.customParameters), u = Q(this.layer, e) ? e.floors : null, l = this.layer.sublayers.map(({ renderer: c, labelsVisible: d, labelingInfo: p, visible: y }) => ({ renderer: c, labelsVisible: d, labelingInfo: p, visible: y }));
    return { outFields: this.layer.outFields, gdbVersion: s, definitionExpression: r, historicMoment: n, customParameters: o, apiKey: a, sublayers: l, floors: u };
  }
  setGraphicOrigin(e) {
    const t = this.layer.fieldsIndex.get(this.layer.subtypeField), r = e.attributes[t.name], s = this.layer.sublayers.find((a) => a.subtypeCode === r);
    e.layer = e.sourceLayer = s;
  }
}
function sr(i, e) {
  return i.sublayers.some((t) => !at(t, e));
}
function at(i, e) {
  return i.visible && (i.minScale === 0 || $e(e.scale, i.minScale) || e.scale < i.minScale) && (i.maxScale === 0 || $e(e.scale, i.maxScale) || e.scale > i.maxScale);
}
async function S(i, e) {
  try {
    return await i;
  } catch (t) {
    if (t.name !== "no-queryEngine") throw t;
    return e;
  }
}
function D(i, e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of i instanceof Set ? i.values() : i.keys()) e.has(r) || t.add(r);
  return t;
}
class ar {
  constructor(e, t, r) {
    const s = r ? e.getTileCoverage(r, 0, !0, "closest") : null, a = e.getTileCoverage(t, 0, !0, "closest");
    if (this._tileKeys = /* @__PURE__ */ new Map(), s) for (const n of s.keys()) this._tileKeys.set(n.id, n);
    if (a) for (const n of a.keys()) this._tileKeys.set(n.id, n);
  }
  get coverageSet() {
    return new Set(this._tileKeys.keys());
  }
  keys() {
    return this._tileKeys.values();
  }
}
class nr {
  constructor(e) {
    this.version = e;
  }
}
class or {
  constructor(e) {
    this._subscriptions = /* @__PURE__ */ new Map(), this._visible = /* @__PURE__ */ new Set(), this._paused = /* @__PURE__ */ new Set(), this._version = 0, this._config = e;
  }
  destroy() {
  }
  get _coverageSet() {
    return this._coverage?.coverageSet ?? /* @__PURE__ */ new Set();
  }
  suspend() {
    this._suspendedOverage = this._coverage, this._coverage = null, this._updateSubscriptions();
  }
  resume() {
    this._coverage == null && (this._coverage = this._suspendedOverage, this._suspendedOverage = null, this._updateSubscriptions());
  }
  update(e, t) {
    return this._version = (this._version + 1) % Number.MAX_SAFE_INTEGER, this._updateCoverage(e, t), this._updateSubscriptions(), new Set(this._visible);
  }
  _updateCoverage(e, t) {
    this._coverage = new ar(this._config.tileInfoView, e, t);
  }
  _updateSubscriptions() {
    const e = this._coverageSet, t = this._updateVisibility(), r = D(t, e), s = D(this._subscriptions, t), a = D(e, this._subscriptions), n = D(s, e), o = D(r, n), u = D(o, this._paused);
    this._visible = t;
    for (const l of a.values()) this._subscriptions.set(l, new nr(this._version));
    for (const l of u.values()) this._paused.add(l);
    for (const l of n.values()) this._subscriptions.delete(l), this._paused.delete(l);
    (a.size || n.size || u.size) && this._sendUpdateSubscriptions(a, n, u);
  }
  _sendUpdateSubscriptions(e, t, r) {
    const s = Array.from(e.values()).map((a) => ({ tileId: a, version: this._subscriptions.get(a).version }));
    this._config.updateSubscriptions({ subscribe: s, unsubscribe: Array.from(t.values()), pause: Array.from(r.values()) });
  }
  _updateVisibility() {
    const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
    if (!this._coverage) return e;
    for (const a of this._coverage.keys()) {
      if (this._config.isDone(a)) {
        e.add(a.id);
        continue;
      }
      this._addVisibleParent(e, t, a) || this._addVisibleChildren(e, a) || e.add(a.id);
    }
    const r = new X(0, 0, 0, 0), s = new X(0, 0, 0, 0);
    for (const a of t) {
      r.id = a;
      for (const n of e) s.id = n, r.containsChild(s) && e.delete(n);
    }
    return e;
  }
  _addVisibleParent(e, t, r) {
    let s = !1;
    for (const a of this._visible.values())
      new X(a).containsChild(r) && (e.add(a), t.add(a), s = !0);
    return s;
  }
  _addVisibleChildren(e, t) {
    let r = !1;
    for (const s of this._visible.values()) {
      const a = new X(s);
      t.containsChild(a) && (e.add(s), r = !0);
    }
    return r;
  }
}
const lr = (i) => {
  let e = class extends i {
    constructor(...t) {
      super(...t), this._updatingRequiredFieldsPromise = null, this.dataUpdating = !1, this.filter = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([we(() => {
        const t = this.layer;
        return [t && "elevationInfo" in t ? t.elevationInfo?.featureExpressionInfo : null, t && "displayField" in t ? t.displayField : null, t && "timeInfo" in t && t.timeInfo, t && "renderer" in t && t.renderer, t && "labelingInfo" in t && t.labelingInfo, t && "floorInfo" in t && t.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), xt), Te(() => this.view?.floors, "change", () => this._handleRequiredFieldsChange()), Te(() => {
        const t = this.layer;
        return t && "sublayers" in t ? t.sublayers : null;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      if (!this.layer) return [];
      const { layer: t, layer: { fieldsIndex: r }, requiredFields: s } = this;
      return "outFields" in t && t.outFields ? qe(r, [...Ae(r, t.outFields), ...s]) : qe(r, s);
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(t) {
      this._override("featureEffect", t);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(t) {
      F.getLogger(this).error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return !1;
    }
    highlight(t) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const t = { outFields: ["*"], returnGeometry: !0, outSpatialReference: this.view.spatialReference }, r = this.filter != null ? this.filter.createQuery(t) : new fe(t);
      if ("floorInfo" in this.layer && this.layer.floorInfo) {
        const s = Pe(this);
        s != null && (r.where = r.where ? `(${r.where}) AND (${s})` : s);
      }
      return this.timeExtent != null && (r.timeExtent = r.timeExtent != null ? r.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), r;
    }
    createAggregateQuery() {
      const t = { outFields: ["*"], returnGeometry: !0, outSpatialReference: this.view.spatialReference };
      return new fe(t);
    }
    queryFeatures(t, r) {
      throw new Error("missing implementation");
    }
    queryObjectIds(t, r) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(t, r) {
      throw new Error("missing implementation");
    }
    queryExtent(t, r) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeaturesFromGraphics(t, r) {
      return this._validateFetchPopupFeatures(t, r), this._fetchPopupFeatures(t, r);
    }
    _loadArcadeModules(t) {
      return t.expressionInfos?.length || Array.isArray(t.content) && t.content.some((r) => r.type === "expression") ? It() : Promise.resolve();
    }
    _handleRequiredFieldsChange() {
      const t = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", t), t.then(() => {
        this._updatingRequiredFieldsPromise === t && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    async _updateRequiredFields() {
      if (!this.layer || !this.view) return;
      const t = this.view.type === "3d", { layer: r, layer: { fieldsIndex: s, objectIdField: a } } = this, n = "renderer" in r && r.renderer, o = "orderBy" in r && r.orderBy, u = "featureReduction" in r ? r.featureReduction : null, l = /* @__PURE__ */ new Set(), c = await Promise.allSettled([n ? n.collectRequiredFields(l, s) : null, Me(l, r), t && "elevationInfo" in r ? Ft(l, r) : null, this.filter != null ? ke(l, r, this.filter) : null, t || this.featureEffect == null ? null : ke(l, r, this.featureEffect.filter), !t && u ? Et(l, r, u) : null, !t && o ? Rt(l, r, o) : null]);
      if ("timeInfo" in r && r.timeInfo && this.timeExtent && ne(l, r.fieldsIndex, [r.timeInfo.startField, r.timeInfo.endField]), "floorInfo" in r && r.floorInfo && ne(l, r.fieldsIndex, [r.floorInfo.floorField]), r.type === "feature" && t && r.infoFor3D != null && (r.globalIdField == null && F.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"), ne(l, r.fieldsIndex, [r.globalIdField])), r.type === "subtype-group") {
        be(l, s, r.subtypeField);
        const p = r.sublayers.map((y) => Promise.all([y.renderer?.collectRequiredFields(l, s), Me(l, y)]));
        await Promise.allSettled(p);
      }
      if (r.type === "catalog-footprint" && r.parent) {
        const p = r.parent;
        ne(l, s, [p.itemNameField, p.itemSourceField, p.itemTypeField, p.maxScaleField, p.minScaleField]);
      }
      for (const p of c) p.status === "rejected" && F.getLogger(this).error(p.reason);
      be(l, s, a), t && "displayField" in r && r.displayField && be(l, s, r.displayField);
      const d = Array.from(l).sort();
      this._set("requiredFields", d);
    }
    _validateFetchPopupFeatures(t, r) {
      if (r != null) for (const s of t) {
        const a = s.origin && "layer" in s.origin ? s.origin.layer : s.layer;
        if ("popupEnabled" in a && !a.popupEnabled) throw new O("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: a });
        if (s.isAggregate) {
          const n = "featureReduction" in a ? a.featureReduction : null;
          if (!(n && "popupTemplate" in n && n.popupEnabled && n.popupTemplate)) throw new O("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: a });
        } else if ("popupTemplate" in a && !Se(a, r))
          throw new O("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: a });
      }
    }
    _popupFeatureHasRequiredFields(t, r) {
      return Ot(r, t);
    }
    async _fetchPopupFeatures(t, r) {
      const s = new Array(t.length), a = /* @__PURE__ */ new Map(), n = await this._createPopupQuery(t.map((o) => o.origin?.layer ?? o.layer), r);
      for (let o = 0; o < t.length; o++) {
        const u = t[o];
        if (u.isAggregate) {
          s[o] = u;
          continue;
        }
        const l = u.origin?.layer ?? u.layer;
        if (!l || !("popupEnabled" in l)) continue;
        const c = Ae(this.layer.fieldsIndex, n.outFields), d = Se(l, r);
        if (d == null) continue;
        const p = await this._loadArcadeModules(d);
        de(r), p && p.arcadeUtils.hasGeometryOperations(d) || !this._popupFeatureHasRequiredFields(u, c) ? a.set(u.getObjectId(), { graphic: u, index: o }) : s[o] = u;
      }
      if (this.layer.type === "stream" || a.size === 0) return s.filter(Boolean);
      n.objectIds = Array.from(a.keys());
      try {
        const o = await this.layer.queryFeatures(n, r);
        for (const u of o.features) {
          const { graphic: { geometry: l, origin: c }, index: d } = a.get(u.getObjectId());
          u.geometry ||= l, u.origin = c, s[d] = u;
        }
      } catch {
      }
      return s.filter(Boolean);
    }
    async _createPopupQuery(t, r) {
      const s = this.layer.createQuery(), a = /* @__PURE__ */ new Set();
      let n = !1;
      const o = t ?? [this.layer];
      for (const u of o) {
        if (!("popupEnabled" in u)) continue;
        const l = Se(u, r);
        if (l == null) continue;
        const c = await this._loadArcadeModules(l);
        de(r);
        const d = c && c.arcadeUtils.hasGeometryOperations(l);
        n = !(this.layer.geometryType !== "point" && !d);
        const p = await ei(this.layer, l);
        de(r);
        for (const y of p) a.add(y);
      }
      if (s.returnGeometry = n, s.returnZ = n, s.returnM = n, s.outFields = Array.from(a), s.outSpatialReference = this.view.spatialReference, "floorInfo" in this.layer && this.layer.floorInfo) {
        const u = Pe(this);
        u != null && (s.where = s.where ? `(${s.where}) AND (${u})` : u);
      }
      return s;
    }
    canResume() {
      return !!super.canResume() && (this.timeExtent == null || !this.timeExtent.isEmpty);
    }
    getTest() {
    }
    get test() {
    }
  };
  return h([f()], e.prototype, "_updatingRequiredFieldsPromise", void 0), h([f({ readOnly: !0 })], e.prototype, "availableFields", null), h([f({ readOnly: !0 })], e.prototype, "dataUpdating", void 0), h([f({ type: Vt })], e.prototype, "featureEffect", null), h([f({ type: ee })], e.prototype, "filter", void 0), h([f()], e.prototype, "layer", void 0), h([f({ type: Number })], e.prototype, "maximumNumberOfFeatures", null), h([f({ readOnly: !0, type: Boolean })], e.prototype, "maximumNumberOfFeaturesExceeded", null), h([f({ readOnly: !0 })], e.prototype, "requiredFields", void 0), h([f()], e.prototype, "suspended", void 0), h([f()], e.prototype, "view", void 0), e = h([H("esri.views.layers.FeatureLayerView")], e), e;
};
function ur(i, e) {
  const t = /* @__PURE__ */ new Set();
  return i && i.forEach((r) => t.add(r)), e && e.forEach((r) => t.add(r)), t.has("*") ? ["*"] : Array.from(t);
}
const Ze = 4294967294;
let _ = class extends lr(ti(Lt(Dt))) {
  constructor() {
    super(...arguments), this._commandsQueue = new Xt({ process: (i) => {
      switch (i.type) {
        case "edit-by-feature":
        case "edit-by-id":
          return this._doEdit(i);
        case "update":
          return this._doUpdate();
        case "highlight":
          return this._updateHighlights();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightCounter = new Yt(), this._lastAvailableFields = [], this._lastTargetState = null, this.eventLog = new R(), this._sourceRefreshVersion = 1, this._displayRefreshVersion = 1, this._pipelineUpdating = !1, this._fields = null, this.featureEffectView = new ii();
  }
  destroy() {
    this._workerProxy?.destroy(), this._workerAttached.reject(Ne()), this._commandsQueue.destroy();
  }
  initialize() {
    this._workerAttached = he(), Z(this._workerAttached.promise), this.addResolvingPromise(this._initProxy()), this.featureEffectView.featureEffect = this.featureEffect, this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    const i = this.layer;
    if ("isTable" in i && i.isTable) throw new O("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: i });
    if (i.geometryType === "mesh") throw new O("featurelayerview:geometry-type-not-supported", `Geometry type of ${i.geometryType} is not supported`, { layer: i });
    if ((i.type === "feature" || i.type === "subtype-group") && Ct(i)?.operations.supportsQuery === !1) throw new O("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: i });
    this._workerProxy && this._workerProxy.destroy();
    const e = this._createClientOptions();
    this._workerProxy = await ui(e);
  }
  async _attachProxy() {
    const i = { service: await this.layerAdapter.createServiceOptions(this.view), tileInfoJSON: this.view.featuresTilingScheme.tileInfo.toJSON() };
    let e = [];
    Array.isArray(i.service.source) && (e = i.service.source);
    try {
      await this._workerProxy.pipeline.onAttach(i, { transferList: e }), this._workerAttached.resolve();
    } catch (t) {
      this._workerAttached.reject(Ne()), Ue(t);
    }
  }
  async _detachProxy() {
    return this._workerProxy.pipeline.onDetach();
  }
  async getWorker() {
    return await this._workerAttached.promise, this._workerProxy;
  }
  get hasAllFeatures() {
    return this.layer.visible && this.eventLog.hasAllFeatures;
  }
  get hasAllFeaturesInView() {
    return this.layer.visible && this.eventLog.hasAllFeaturesInView;
  }
  get hasFullGeometries() {
    return this.layer.visible && this.eventLog.hasFullGeometries;
  }
  get labelingCollisionInfos() {
    const i = this.layerAdapter.getLabelingDeconflictionInfo(this.view), e = this.layer.geometryType, t = !this.suspended;
    return i.map(({ vvEvaluators: r, deconflictionEnabled: s }) => ({ container: this.featureContainer, vvEvaluators: r, deconflictionEnabled: s, geometryType: e, visible: t }));
  }
  get layerAdapter() {
    switch (this.layer.type) {
      case "feature":
        return this.layer.source.type === "memory" ? new Ke(this.layer) : new Hi(this.layer);
      case "geojson":
      case "csv":
      case "wfs":
        return new Ke(this.layer);
      case "subtype-group":
        return new rr(this.layer);
      case "ogc-feature":
        return new Ki(this.layer);
      case "stream":
        return new Xi(this.layer);
      case "oriented-imagery":
        return new Zi(this.layer);
      case "knowledge-graph-sublayer":
        return new Wi(this.layer);
      case "catalog-footprint":
        return new ji(this.layer);
      default:
        zt(this.layer);
    }
    return null;
  }
  get timeExtent() {
    return Ut(this.layerAdapter.timeOptions, this.view?.timeExtent, this._get("timeExtent"));
  }
  getDisplayStatistics(i, e) {
    return this.featureContainer?.getDisplayStatistics(i, e);
  }
  async queryHeatmapStatistics(i) {
    return (await this.getWorker()).pipeline.queryHeatmapStatistics(i);
  }
  highlight(i, e = "highlight") {
    let t;
    i instanceof ve ? t = [i.getObjectId()] : typeof i == "number" || typeof i == "string" ? t = [i] : $t.isCollection(i) && i.length > 0 ? t = i.map((s) => s?.getObjectId()).toArray() : Array.isArray(i) && i.length > 0 && (t = typeof i[0] == "number" || typeof i[0] == "string" ? i : i.map((s) => s?.getObjectId()));
    const r = t?.filter(Tt);
    return r?.length ? (this._addHighlights(r, e), Be(() => this._removeHighlights(r, e))) : Be();
  }
  getHighlightIds() {
    return Array.from(this._highlightCounter.ids());
  }
  hasHighlight() {
    return !this._highlightCounter.empty;
  }
  async hitTest(i, e) {
    const t = await this.featureContainer.hitTest(e);
    if (t.length === 0) return null;
    const r = await this.getWorker(), { features: s, aggregates: a } = await r.pipeline.getDisplayFeatures(t), n = this.featureContainer.getSortKeys(t), o = ({ displayId: u }, { displayId: l }) => n.has(u) && n.has(l) ? n.get(u) - n.get(l) : u - l;
    return s.sort(o).reverse(), a.sort(o).reverse(), [...a.map((u) => this._createGraphicHit(i, Ee.fromJSON(u))), ...s.map((u) => this._createGraphicHit(i, ve.fromJSON(u)))];
  }
  async queryStatistics() {
    const i = await this.getWorker();
    return S(i.pipeline.queryStatistics(), { featureCount: 0, ringCount: 0, vertexCount: 0 });
  }
  async querySummaryStatistics(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.features.executeQueryForSummaryStatistics(this._cleanUpQuery(i), s, t);
    return S(a, {});
  }
  async queryAggregateSummaryStatistics(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = (await this.getWorker()).aggregates.executeQueryForSummaryStatistics(this._cleanUpAggregateQuery(i), r, t);
    return S(s, {});
  }
  async queryUniqueValues(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.features.executeQueryForUniqueValues(this._cleanUpQuery(i), s, t);
    return S(a, { uniqueValueInfos: [] });
  }
  async queryAggregateUniqueValues(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.aggregates.executeQueryForUniqueValues(this._cleanUpAggregateQuery(i), s, t);
    return S(a, { uniqueValueInfos: [] });
  }
  async queryClassBreaks(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.features.executeQueryForClassBreaks(this._cleanUpQuery(i), s, t);
    return S(a, { classBreakInfos: [] });
  }
  async queryAggregateClassBreaks(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.aggregates.executeQueryForClassBreaks(this._cleanUpAggregateQuery(i), s, t);
    return S(a, { classBreakInfos: [] });
  }
  async queryHistogram(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.features.executeQueryForHistogram(this._cleanUpQuery(i), s, t);
    return S(a, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  async queryAggregateHistogram(i, e, t) {
    const r = await this.getWorker(), s = { ...e, scale: this.view.scale }, a = r.aggregates.executeQueryForHistogram(this._cleanUpAggregateQuery(i), s, t);
    return S(a, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  queryFeatures(i, e) {
    return this.queryFeaturesJSON(i, e).then((t) => {
      const r = _e.fromJSON(t);
      return r.features.forEach((s) => this._setLayersForFeature(s)), r;
    });
  }
  async queryVisibleFeatures(i, e) {
    const t = (await this.getWorker()).pipeline.queryVisibleFeatures(this._cleanUpQuery(i), e), r = await S(t, { features: [] }), s = _e.fromJSON(r);
    return s.features.forEach((a) => this._setLayersForFeature(a)), s;
  }
  async queryAggregates(i, e) {
    const t = (await this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(i), e), r = await S(t, { features: [] }), s = ri.fromJSON(r);
    return s.features.forEach((a) => this._setLayersForFeature(a)), s;
  }
  async queryAggregateIds(i, e) {
    const t = (await this.getWorker()).aggregates.executeQueryForIds(this._cleanUpAggregateQuery(i), e);
    return S(t, []);
  }
  async queryAggregateCount(i, e) {
    const t = (await this.getWorker()).aggregates.executeQueryForCount(this._cleanUpAggregateQuery(i), e);
    return S(t, 0);
  }
  async queryAggregateJSON(i, e) {
    const t = (await this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(i), e);
    return S(t, { features: [] });
  }
  async queryFeaturesJSON(i, e) {
    const t = (await this.getWorker()).features.executeQuery(this._cleanUpQuery(i), e);
    return S(t, { features: [] });
  }
  async queryObjectIds(i, e) {
    const t = (await this.getWorker()).features.executeQueryForIds(this._cleanUpQuery(i), e);
    return S(t, []);
  }
  async queryFeatureCount(i, e) {
    const t = (await this.getWorker()).features.executeQueryForCount(this._cleanUpQuery(i), e);
    return S(t, 0);
  }
  async queryExtent(i, e) {
    const t = (await this.getWorker()).features.executeQueryForExtent(this._cleanUpQuery(i), e), r = await S(t, { count: 0, extent: null });
    return { count: r.count, extent: qt.fromJSON(r.extent) };
  }
  async getSampleFeatures(i) {
    return (await this.getWorker()).pipeline.getSampleFeatures(i);
  }
  setVisibility(i, e) {
    e ? this._visibilityOverrides.delete(i) : this._visibilityOverrides.add(i), this._update();
  }
  update(i) {
    if (!this._subscriptionManager) return;
    this.view.animation && !this._lastTargetState && (this._lastTargetState = i.state.clone()), !this.view.animation && this._lastTargetState && (this._lastTargetState = null);
    const e = this._subscriptionManager.update(i.targetState, this._lastTargetState);
    this.featureContainer.setVisibleTiles(e);
  }
  attach() {
    g("esri-2d-update-debug") && console.debug("FeatureLayerView2D.attach"), Z(this._updatingHandles.addPromise(this._workerAttached.promise)), Z(this._attachProxy()), this.featureContainer = new li(this), this.container.addChild(this.featureContainer), this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._subscriptionManager = new or({ tileInfoView: this.view.featuresTilingScheme, updateSubscriptions: (i) => {
      this.featureContainer.updateSubscriptions(i), Z(this._updatingHandles.addPromise(this.getWorker().then((e) => e.pipeline.updateSubscriptions(i))));
    }, isDone: (i) => this.featureContainer.isDone(i) }), this.requestUpdate(), this.addAttachHandles([we(() => JSON.stringify({ displayRefreshVersion: this._displayRefreshVersion, timeExtent: this.timeExtent, clips: this.clips, filter: this.filter, featureEffect: this.featureEffect, sourceRefreshVersion: this._sourceRefreshVersion, timeZone: this.view.timeZone, effect: this.featureEffect, ...this.layerAdapter.getUpdateHashProperties(this.view) }), () => this._update(), At), we(() => this.updateSuspended, (i) => {
      i || (this._subscriptionManager.resume(), this.view.labelManager.requestUpdate());
    })]), this.layer.type !== "stream" && this.layer.type !== "catalog-footprint" && this.addAttachHandles(this.layer.on("edits", (i) => this._edit(i)));
  }
  detach() {
    g("esri-2d-update-debug") && console.debug("FeatureLayerView2D.detach"), this._detachProxy(), this._fields = null, this.featureContainer.destroy(), this.featureContainer = null, this._commandsQueue.clear(), this.container.removeAllChildren(), this._subscriptionManager = Pt(this._subscriptionManager), this._workerProxy.pipeline.onDetach(), this._workerAttached = he(), Z(this._workerAttached.promise), this._lastAvailableFields = [], this._lastSchema = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    const i = "renderer" in this.layer && this.layer.renderer != null, e = this._commandsQueue.updateTracking.updating, t = this._updatingRequiredFieldsPromise != null, r = this.featureContainer.updatingHandles.updating, s = this.updateRequested || i && (e || t) || r || this._pipelineUpdating || this.dataUpdating;
    if (g("esri-2d-log-updating")) {
      console.log(`Updating FLV2D (${this.layer.id}): ${s}
  -> updateRequested ${this.updateRequested}
  -> hasRenderer ${i}
  -> updatingRequiredFields ${t}
  -> hasPendingCommand ${e}
  -> dataUpdating ${this.dataUpdating}
  -> processing ${this._pipelineUpdating}
  -> updatingContainer ${r}
`);
      for (const a of this.featureContainer.subscriptions()) console.log(`    -> Tile[${a.id}] Done: ${a.done}`);
    }
    return s;
  }
  _createClientOptions() {
    const i = this;
    return { get container() {
      return i.featureContainer;
    }, setUpdating: (e) => {
      this._set("_pipelineUpdating", e.pipeline), this._set("dataUpdating", e.data);
    }, emitEvent: (e) => {
      this.emit(e.name, e.event);
    }, get eventLog() {
      return i.eventLog;
    }, fetch: (e) => Promise.all(e.map((t) => i.view.stage.painter.textureManager.rasterizeItem(t))), fetchDictionary: (e) => Promise.all(e.map((t) => this._fetchDictionaryRequest(t))) };
  }
  async _fetchDictionaryRequest(i) {
    try {
      if (this.layer.type === "subtype-group") throw new Error("InternalError: SubtypeGroupLayer does not support dictionary renderer");
      const e = this.layer.renderer;
      if (!e || e.type !== "dictionary") throw new Error("InternalError: Expected layer to have a DictionaryRenderer");
      const t = this._lastSchema.processor.mesh.factory.symbology;
      if (t.type !== "dictionary") throw new Error("InternalError: Expected schema to be of type 'dictionary'");
      const r = { cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, store: this.featureContainer.instanceStore, scaleExpression: t.scaleExpression };
      this._fields || (this._fields = this.layer.fields.map((n) => n.toJSON()));
      const s = t.visualVariableUniforms, a = await e.getSymbolAsync(i.feature, { fields: this._fields });
      return !a || !a.data ? { type: "dictionary-response", meshes: [] } : { type: "dictionary-response", meshes: await ye(a.data, { uniforms: s, path: "renderer", schemaOptions: r }) };
    } catch {
      return { type: "dictionary-response", meshes: [] };
    }
  }
  _cleanUpQuery(i) {
    const e = fe.from(i) || this.createQuery();
    return e.outSpatialReference || (e.outSpatialReference = this.view.spatialReference), e.toJSON();
  }
  _cleanUpAggregateQuery(i) {
    const e = fe.from(i) || this.createAggregateQuery();
    e.outSpatialReference || (e.outSpatialReference = this.view.spatialReference);
    const t = e.objectIds ?? [];
    for (const r of e.aggregateIds ?? []) t.push(r);
    return e.objectIds = t, e.aggregateIds = [], e.toJSON();
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(i) {
    if (this.updateSuspended) return void this._subscriptionManager.suspend();
    const e = this._getEffectiveEdit(i);
    return e ? this._commandsQueue.push(e).catch(Ue) : void 0;
  }
  async doRefresh(i) {
    this.attached && (this.updateSuspended && i || (i ? this.incrementSourceRefreshVersion() : this.incrementDisplayRefreshVersion()));
  }
  incrementSourceRefreshVersion() {
    this._sourceRefreshVersion = (this._sourceRefreshVersion + 1) % Ze + 1;
  }
  incrementDisplayRefreshVersion() {
    this._displayRefreshVersion = (this._displayRefreshVersion + 1) % Ze + 1;
  }
  _getEffectiveEdit(i) {
    const e = "globalIdField" in this.layer && this.layer.globalIdField, t = i.deletedFeatures.some((o) => o.objectId === -1 || !o.objectId), r = e && this.availableFields.includes(e);
    if (t && !r) return F.getLogger(this).error(new O("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${e} to be included the layer's outFields for updates to be reflected on the map`)), null;
    const s = this.layer, a = i.historicMoment?.getTime() ?? null, n = "layerId" in s && i.editedFeatures?.find((o) => o.layerId === s.layerId);
    if (n && this._canEditByFeature(n)) {
      const l = Nt(this.layer.geometryType), { adds: c, deletes: d, updates: p } = n.editedFeatures, y = this.layer.objectIdField, m = c.map((b) => Le(b, l, !1, !1)), w = p.map((b) => Le(b.current, l, !1, !1));
      return { type: "edit-by-feature", added: m, removed: d.map((b) => "attributes" in b ? { globalId: e ? b.attributes[e] : null, objectId: y ? b.attributes[y] : null } : b), updated: w, historicMoment: a };
    }
    return { type: "edit-by-id", added: i.addedFeatures, updated: i.updatedFeatures, removed: i.deletedFeatures, historicMoment: a };
  }
  _canEditByFeature(i) {
    const { adds: e, updates: t } = i.editedFeatures;
    return e.every((r) => this.view.spatialReference.equals(r.geometry?.spatialReference)) && t.every((r) => this.view.spatialReference.equals(r.current.geometry?.spatialReference));
  }
  async _doUpdate() {
    "featureReduction" in this.layer && this.layer.featureReduction && this.layer.featureReduction !== this._lastFeatureReduction && (this.layer.featureReduction = this.layer.featureReduction?.clone(), this._lastFeatureReduction = this.layer.featureReduction);
    try {
      if (await this._updateRequiredFields(), this.destroyed || !this.layerAdapter?.hasRequiredSupport || !this._subscriptionManager) return;
      const i = this.featureContainer.instanceStore;
      this.featureContainer.attributeView.lockTextureUploads(), i.updateStart();
      const e = this.featureEffect, t = { store: i, cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, scaleExpression: void 0 }, r = this._createViewSchemaConfig(), s = { source: this.layerAdapter.createSourceSchema(r, this._sourceRefreshVersion), processor: await this.layerAdapter.createProcessorSchema(t, r, this._displayRefreshVersion) }, a = De(this._lastSchema?.source.mutable, s.source.mutable) || De(this._lastSchema?.processor, s.processor);
      if (!a) return this.featureContainer.requestRender(), this.featureContainer.attributeView.unlockTextureUploads(), i.updateEnd(), void (this.featureEffectView.featureEffect = e);
      this._lastSchema = s, this._fields = null;
      const n = Math.round(performance.now());
      g("esri-2d-update-debug") && console.debug(`Id[${this.layer.uid}] Version[${n}] FeatureLayerView2D._doUpdate`, { changes: a }), await (await this.getWorker()).pipeline.updateSchema(s, n), i.updateEnd(), this.featureEffectView.featureEffect = e, this.featureEffectView.endTransitions(), this.featureContainer.attributeView.unlockTextureUploads(), this.featureContainer.swapRenderState(), this.featureContainer.requestRender(), g("esri-2d-update-debug") && console.debug(`Version[${n}] FeatureLayerView2D.updateEnd`), this.requestUpdate();
    } catch (i) {
      g("esri-2d-update-debug") && console.error("Encountered an error during update", i);
    }
  }
  async _doEdit(i) {
    const e = await this.getWorker();
    try {
      this.featureContainer.editStart(), await e.pipeline.onEdits(i), this.featureContainer.editEnd();
    } catch (t) {
      Je(t);
    }
  }
  get hasFilter() {
    const i = this.layerAdapter.hasFilters?.(this.view) ?? !1;
    return this.filter != null || this.timeExtent != null || this._visibilityOverrides.size > 0 || i;
  }
  _getEffectiveAvailableFields(i) {
    const e = ur(this._lastAvailableFields, i);
    return this._lastAvailableFields = e, Mt(this.layer.fieldsIndex, e);
  }
  _createViewSchemaConfig() {
    const i = [cr(this.view, this.layerAdapter, this.timeExtent, this._visibilityOverrides, this.filter), this.featureEffect?.filter?.toJSON() ?? null];
    return { availableFields: this._getEffectiveAvailableFields(this.availableFields), filters: i, scale: this.view.scale, timeZone: this.view.timeZone };
  }
  _addHighlights(i, e) {
    this._highlightCounter.addReason(i, e), this._commandsQueue.push({ type: "highlight" });
  }
  _removeHighlights(i, e) {
    this._highlightCounter.deleteReason(i, e), this._commandsQueue.push({ type: "highlight" });
  }
  async _updateHighlights() {
    const i = [];
    for (const r of this._highlightCounter.ids()) {
      const s = this._highlightCounter.getHighlightReason(r), a = Bt(s);
      i.push({ objectId: r, highlightFlags: a });
    }
    const e = await this.getWorker();
    if (this.destroyed) return;
    const t = e.pipeline.updateHighlight({ highlights: i }).catch((r) => {
      Je(r) || F.getLogger(this).error(r);
    });
    this._updatingHandles.addPromise(t);
  }
  _setLayersForFeature(i) {
    i.layer = i.sourceLayer = this.layer, this.layerAdapter.setGraphicOrigin && this.layerAdapter.setGraphicOrigin(i);
  }
  _createGraphicHit(i, e) {
    return this._setLayersForFeature(e), e.geometry != null && (e.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: e, layer: this.layer, mapPoint: i };
  }
};
function cr(i, e, t, r, s) {
  s && (s = s.clone());
  const a = s != null ? s.timeExtent : null, n = t != null && a != null ? t.intersection(a) : t || a;
  n && (s ??= new ee(), s.timeExtent = n), s = e.addFilters?.(s, i) ?? s;
  let o = s?.toJSON() ?? null;
  return r.size && (o ??= new ee().toJSON(), o.hiddenIds = Array.from(r)), o;
}
h([f()], _.prototype, "_commandsQueue", void 0), h([f()], _.prototype, "_sourceRefreshVersion", void 0), h([f()], _.prototype, "_displayRefreshVersion", void 0), h([f({ readOnly: !0 })], _.prototype, "_pipelineUpdating", void 0), h([f({ readOnly: !0 })], _.prototype, "hasAllFeatures", null), h([f({ readOnly: !0 })], _.prototype, "hasAllFeaturesInView", null), h([f({ readOnly: !0 })], _.prototype, "hasFullGeometries", null), h([f()], _.prototype, "featureEffectView", void 0), h([f()], _.prototype, "labelingCollisionInfos", null), h([f()], _.prototype, "layerAdapter", null), h([f({ readOnly: !0 })], _.prototype, "timeExtent", null), h([f()], _.prototype, "updating", void 0), _ = h([H("esri.views.2d.layers.FeatureLayerView2D")], _);
const dr = _, Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dr as F,
  S as n,
  dr as r
};
//# sourceMappingURL=FeatureLayerView2D-CqQiJTv9.js.map
