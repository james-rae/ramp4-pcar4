import { bQ as s, bR as o, bS as n, bT as a, b2 as m } from "./main-DZxT3i7S.js";
var r;
let t = r = class extends a {
  static from(e) {
    return m(r, e);
  }
  constructor(e) {
    super(e), this.sessionId = void 0, this.moment = null;
  }
};
s([o({ type: String, json: { write: !0 } })], t.prototype, "sessionId", void 0), s([o({ type: Date, json: { type: Number, write: { writer: (e, i) => {
  i.moment = e ? e.getTime() : null;
} } } })], t.prototype, "moment", void 0), t = r = s([n("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")], t);
const d = t;
export {
  d as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-Cw885tyc.js.map
