import { a as n } from "./fabric-B6qRtwzH.js";
import { F as f, A as a } from "./main-DZxT3i7S.js";
class x extends f {
  get config() {
    return this.$iApi.fixture.get("export").config?.title;
  }
  make(t) {
    const e = this.config, i = {
      text: "RAMP-Map / PCAR-Carte",
      // default name
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 30,
      top: 0,
      left: 0,
      originX: "center",
      originY: "top"
    };
    e?.value !== void 0 && (i.text = e.value);
    const o = a(i, t || {}), r = new n.fabric.Textbox(o.text, o);
    return Promise.resolve(r);
  }
}
export {
  x as default
};
//# sourceMappingURL=index-C_419i0j.js.map
