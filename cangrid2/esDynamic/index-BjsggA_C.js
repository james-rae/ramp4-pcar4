import { a as r } from "./fabric-DhENsc66.js";
import { bY as f, bZ as s } from "./main-DHXLMse1.js";
class g extends f {
  get config() {
    return this.$iApi.fixture.get("export").config?.footnote;
  }
  make(t) {
    const e = this.config, o = {
      text: "RAMP-PCAR",
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0
    };
    e?.value !== void 0 && (o.text = e.value);
    const i = s(o, t || {}), n = new r.fabric.Textbox(i.text, i);
    return Promise.resolve(n);
  }
}
export {
  g as default
};
//# sourceMappingURL=index-BjsggA_C.js.map
