import { bQ as o, bS as u, cz as l, cA as p, Q as g } from "./main-DZxT3i7S.js";
import { r as c } from "./FeatureLayerView2D-tU5MmL7l.js";
let e = class extends c {
  initialize() {
    this.addHandles([l(() => this.view.scale, () => this._update(), p)], "constructor");
  }
  isUpdating() {
    const s = this.layer.sublayers.some((d) => d.renderer != null), i = this._commandsQueue.updateTracking.updating, a = this._updatingRequiredFieldsPromise != null, t = !this._workerProxy, n = this.dataUpdating, r = s && (i || a || t || n);
    return g("esri-2d-log-updating") && console.log(`Updating FLV2D: ${r}
  -> hasRenderer ${s}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${n}
`), r;
  }
};
e = o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")], e);
const $ = e;
export {
  $ as default
};
//# sourceMappingURL=SubtypeGroupLayerView2D-DlEhmcjU.js.map
