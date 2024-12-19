import { aP as s, aQ as h, aR as t } from "./main-DZxT3i7S.js";
import { i } from "./AGraphicContainer-Cd-UhyV4.js";
class l extends i {
  renderChildren(e) {
    for (const r of this.children) r.setTransform(e.state);
    if (super.renderChildren(e), this._updateAttributeView(), this.children.some((r) => r.hasData)) {
      switch (e.drawPhase) {
        case s.MAP:
          this._renderChildren(e, h.All);
          break;
        case s.HIGHLIGHT:
          this.hasHighlight && this._renderHighlight(e);
      }
      this._boundsRenderer && this._boundsRenderer.doRender(e);
    }
  }
  _renderHighlight(e) {
    t(e, !1, (r) => {
      this._renderChildren(r, h.Highlight);
    });
  }
}
export {
  l as t
};
//# sourceMappingURL=GraphicContainer-DBCyi5jQ.js.map
