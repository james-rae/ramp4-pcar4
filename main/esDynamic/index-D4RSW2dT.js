import { a as o } from "./fabric-Cp9Rd-GB.js";
import { bx as n } from "./main-CqTmyBdW.js";
class m extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.map;
  }
  async make(e) {
    const a = await this.$iApi.geo.map.takeScreenshot({
      quality: 1,
      format: "png"
    }), t = new Image();
    t.src = a.dataUrl;
    const i = await new Promise(
      (r) => t.onload = () => r(t)
    );
    return new o.fabric.Image(i, e);
  }
}
export {
  m as default
};
//# sourceMappingURL=index-D4RSW2dT.js.map
