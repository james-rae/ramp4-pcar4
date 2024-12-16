import { bQ as r, bR as t, bS as l } from "./main-DZxT3i7S.js";
import { r as o } from "./FeatureLayerView2D-tU5MmL7l.js";
const p = (a) => {
  let e = class extends a {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((i) => i.name);
    }
  };
  return r([t()], e.prototype, "layer", void 0), r([t({ readOnly: !0 })], e.prototype, "availableFields", null), e = r([l("esri.views.layers.OGCFeatureLayerView")], e), e;
};
let s = class extends p(o) {
  supportsSpatialReference(a) {
    return this.layer.serviceSupportsSpatialReference(a);
  }
};
s = r([l("esri.views.2d.layers.OGCFeatureLayerView2D")], s);
const y = s;
export {
  y as default
};
//# sourceMappingURL=OGCFeatureLayerView2D-CrapcKGP.js.map
