import { bs as _, bt as E, bu as w, bv as m, kf as h, bw as b, gd as p, bx as x, bJ as y, g5 as A, bF as M, bG as T, bD as D, jO as I, F as P } from "./main-DZxT3i7S.js";
const R = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, S = { class: "pg-label" }, B = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(v) {
    const { t: c } = E(), t = w("iApi"), o = m(), a = m(-1), n = h([]), r = h([]);
    b(() => {
      u(), r.push(
        t.event.on(p.MAP_CREATED, () => {
          u();
        })
      ), r.push(
        t.event.on(p.MAP_DESTROYED, () => {
          n.forEach((e) => e.remove());
        })
      ), r.push(
        t.event.on(p.MAP_REFRESH_START, () => {
          n.forEach((e) => e.remove());
        })
      ), r.push(
        t.event.on(p.MAP_REFRESH_END, () => {
          u();
        })
      );
    }), x(() => {
      r.forEach((e) => t.event.off(e)), n.forEach((e) => e.remove());
    });
    const u = () => {
      const e = /* @__PURE__ */ new Map();
      t.geo.map.viewPromise.then(() => {
        n.push(
          t.geo.map.esriView.on("pointer-down", (s) => {
            s.pointerType === "touch" && e.set(s.pointerId, { x: s.x, y: s.y });
          })
        ), n.push(
          //@ts-ignore
          t.geo.map.esriView.on(["pointer-up", "pointer-leave"], (s) => {
            s.pointerType === "touch" && window.setTimeout(() => {
              e.delete(s.pointerId);
            }, 200);
          })
        ), n.push(
          t.geo.map.esriView.on("pointer-move", (s) => {
            const { pointerId: f, pointerType: g, x: d, y: l } = s, i = e.get(f);
            if (!i || g !== "touch" || e.size !== 1) {
              o.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(d - i.x, 2) + Math.pow(l - i.y, 2)) < 20 || (o.value.classList.add("pg-active"), a.value !== -1 && clearTimeout(a.value), a.value = window.setTimeout(() => {
              o.value.classList.remove("pg-active");
            }, 2e3), window.scrollBy(i.x - d, i.y - l));
          })
        );
      });
    };
    return (e, s) => (D(), y("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: o
    }, [
      A("p", S, M(T(c)("panguard.instructions")), 1)
    ], 512));
  }
}), F = /* @__PURE__ */ I(B, [["__scopeId", "data-v-e91f9000"]]);
class k extends P {
  added() {
    Object.entries(R).forEach((a) => this.$iApi.$i18n.mergeLocaleMessage(...a));
    const { destroy: c, el: t } = this.mount(F, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      c();
    };
  }
}
export {
  k as default
};
//# sourceMappingURL=index-C8NF72Un.js.map
