import { F as E, ks as y, bs as z, kb as B, bu as T, bv as a, by as N, kf as W, bw as G, gd as H, g8 as R, bx as O, bp as Y, kt as q, kr as j, ku as X, kv as F, bJ as V, g5 as D, kw as J, bD as K } from "./main-DZxT3i7S.js";
class U extends E {
  /**
   * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
   *
   * @param {NortharrowConfig} [northarrowConfig]
   * @memberof NortharrowAPI
   */
  _parseConfig(t) {
    const o = y(this.$vApp.$pinia);
    t && (o.arrowIcon = t.arrowIcon, o.poleIcon = t.poleIcon);
  }
  get config() {
    return super.config;
  }
}
const Q = "path", Z = 12, ee = "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z", te = "#ff0000ff", oe = 5, ae = 6, se = {
  style: Q,
  size: Z,
  path: ee,
  colour: te,
  xOffset: oe,
  yOffset: ae
}, re = ["innerHTML"], ne = /* @__PURE__ */ z({
  __name: "northarrow",
  setup(k) {
    const t = B(), o = y(), e = T("iApi"), u = a(), n = N(() => o.arrowIcon), S = N(() => o.poleIcon), c = a(0), i = a(0), p = a(!1), M = a(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`), b = a(!1), P = W([]), A = a([]);
    let $;
    G(() => {
      const s = t.config.map;
      A.value = s.tileSchemas, n?.value && (M.value = `<img width='25' src='${n.value}'>`), e.geo.map.esriView?.ready && _(e.geo.map.getExtent()), P.push(e.event.on(H.MAP_EXTENTCHANGE, R(300, _)));
    }), O(() => {
      P.forEach((s) => e.event.off(s));
    });
    const _ = async (s) => {
      $ = t.activeBasemapConfig;
      let h;
      for (const f of A.value)
        if ($?.tileSchemaId === f.id) {
          h = f?.hasNorthPole;
          break;
        }
      const l = e.$vApp.$el.querySelector(".inner-shell"), d = u.value.querySelector(".northarrow").getBoundingClientRect().width, v = e.$vApp.$el.querySelector(".appbar")?.clientWidth || 0, x = s.sr;
      if (h || typeof h > "u" && !x.isWebMercator()) {
        const f = new Y("pole", { x: -96, y: 90 }), I = await e.geo.proj.projectGeometry(x, f), g = e.geo.map.mapPointToScreenPoint(I);
        if (g.screenY < 0) {
          p.value = !0;
          const r = {
            screenX: l.clientWidth / 2,
            screenY: l.clientHeight
          };
          c.value = Math.atan(
            (g.screenX - r.screenX) / (r.screenY - g.screenY)
          ) * 180 / Math.PI, i.value = l.clientWidth / 2 + l.clientHeight * Math.tan(c.value * Math.PI / 180) - d / 2, i.value = Math.max(
            v - d / 2,
            Math.min(e.geo.map.getPixelWidth() - d / 2, i.value)
          );
        } else if (p.value = !1, !b.value) {
          b.value = !0;
          let r;
          S.value ? r = {
            style: q.ICON,
            icon: S.value,
            height: 16.5,
            width: 16.5
          } : r = se;
          const m = e.geo.layer.createLayer({
            id: w,
            layerType: j.GRAPHIC,
            url: "",
            cosmetic: !0
            // mark this layer as a cosmetic layer
          });
          e.geo.map.addLayer(m), m.loadPromise().then(() => {
            const L = new X(I, "northpole"), C = new F(
              r
            );
            L.style = C, m.addGraphic(L);
          });
        }
      } else
        p.value = !0, c.value = 0, i.value = v + (l.clientWidth - v - d) / 2;
    };
    return (s, h) => (K(), V("div", {
      class: "absolute transition-all duration-300 ease-out",
      style: J({
        "transform-origin": "top center",
        transform: `rotate(${c.value}deg)`,
        left: `${i.value}px`,
        visibility: p.value ? "visible" : "hidden"
      }),
      ref_key: "el",
      ref: u
    }, [
      D("span", {
        class: "northarrow",
        innerHTML: M.value
      }, null, 8, re)
    ], 4));
  }
}), w = "RampPoleMarker";
class le extends U {
  async added() {
    this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), { destroy: o, el: e } = this.mount(ne, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      t(), this.$iApi.geo.layer.getLayer(w) && this.$iApi.geo.map.removeLayer(w), y(this.$vApp.$pinia).$reset(), o();
    };
  }
}
export {
  w as POLE_MARKER_LAYER_ID,
  le as default
};
//# sourceMappingURL=index-DXGMVvsL.js.map
