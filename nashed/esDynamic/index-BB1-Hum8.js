import { bC as D, bD as P, bE as F, bI as M, bJ as K, bN as s, bL as w, bM as H, fC as k, fD as x, bQ as z, fI as A, i4 as R, bT as v, mp as X, bF as I, bG as W, bH as J, bK as L, bS as N, i3 as Q, im as Y, mq as Z, mr as ee, bP as te, fA as oe, hb as O, fG as ne, ms as ae, mt as se, bU as y, bV as S, bR as T, mu as V, kF as j, mv as re, bx as ie, fK as le } from "./main-dhqBKhJU.js";
class q {
  id;
  /**
   * Optional object containing any options to be passed to the appbar component.
   *
   * @type {object}
   * @memberof AppbarItemInstance
   */
  options;
  /**
   * An actual id of the appbar Vue component to use when rendering in the template.
   *
   * @type {string}
   * @memberof AppbarItemInstance
   */
  componentId;
  constructor(n) {
    const o = {
      options: {},
      ...n
    };
    ({
      id: this.id,
      options: this.options,
      componentId: this.componentId
    } = o);
  }
}
const pe = ["innerHTML"], B = /* @__PURE__ */ D({
  __name: "default-button",
  props: {
    panelId: {
      type: String,
      required: !0
    },
    minimize: {
      type: Boolean,
      default: !1
    },
    overflow: {
      type: Boolean
    }
  },
  setup(h) {
    const { t: n } = P(), o = F("iApi"), r = h, i = M(() => o?.panel.get(r.panelId)?.button), c = () => {
      r.minimize ? o?.panel.toggleMinimize(r.panelId) : o?.panel.toggle(r.panelId);
    };
    return (e, l) => {
      const f = K("appbar-button");
      return i.value ? (s(), w(f, {
        key: 0,
        onClickFunction: c,
        tooltip: z(n)(i.value.tooltip),
        id: h.panelId
      }, {
        default: H(() => [
          k("div", {
            class: x(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": h.overflow }]),
            innerHTML: i.value.icon
          }, null, 10, pe)
        ]),
        _: 1
      }, 8, ["tooltip", "id"])) : A("", !0);
    };
  }
}), ce = {}, ue = { class: "border-b p-0 self-center w-2/3" };
function de(h, n) {
  return s(), v("span", ue);
}
const G = /* @__PURE__ */ R(ce, [["render", de], ["__scopeId", "data-v-5d32b715"]]);
var fe = {
  name: "maxSize",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["offset", "preventOverflow", "flip"],
  fn: function(n) {
    var o = n.state, r = n.name, i = n.options, c = X(o, i), e = o.modifiersData.preventOverflow || {
      x: 0,
      y: 0
    }, l = e.x, f = e.y, d = o.rects.popper, $ = d.width, u = d.height, m = o.placement.split("-"), b = m[0], g = b === "left" ? "left" : "right", p = b === "top" ? "top" : "bottom";
    o.modifiersData[r] = {
      width: $ - c[g] - l,
      height: u - c[p] - f
    };
  }
};
const me = ["content", "aria-label"], ve = /* @__PURE__ */ D({
  __name: "more-button",
  props: {
    position: {
      type: String,
      default: "right-end"
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(h) {
    const { t: n } = P(), o = F("iApi"), r = h, i = I(!1), c = I(), e = I(), l = I(), f = () => {
      i.value = !i.value;
      const d = {
        name: "applyMaxSize",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["maxSize"],
        fn({ state: u }) {
          const { width: m, height: b } = u.modifiersData.maxSize;
          u.styles.popper = {
            ...u.styles.popper,
            maxWidth: `${m}px`,
            maxHeight: `${Math.max(80, b) - 38}px`
          }, u.styles.popper.overflowY = "auto", u.styles.popper.overflowX = "hidden";
        }
      }, $ = o.$vApp.$el.querySelector(".inner-shell");
      e.value && l.value && Z(
        e.value,
        l.value,
        {
          placement: r.position || "right-end",
          modifiers: [
            {
              ...fe,
              options: {
                boundary: $
              }
            },
            d,
            {
              name: "offset",
              options: {
                offset: [0, 5]
              }
            }
          ],
          ...r.popperOptions
        }
      );
    };
    return W(() => {
      window.addEventListener(
        "click",
        (d) => {
          d.target instanceof HTMLElement && !c.value?.contains(d.target) && (i.value = !1);
        },
        { capture: !0 }
      );
    }), J(() => {
      window.removeEventListener(
        "click",
        (d) => {
          d.target instanceof HTMLElement && !c.value?.contains(d.target) && (i.value = !1);
        },
        { capture: !0 }
      );
    }), (d, $) => {
      const u = L("focus-item"), m = L("tippy");
      return s(), v("div", {
        class: "appbar-item relative inset-x-0 w-full text-center",
        ref_key: "el",
        ref: c
      }, [
        N((s(), v("button", {
          type: "button",
          class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
          onClick: $[0] || ($[0] = (b) => f()),
          content: z(n)("appbar.more"),
          "aria-label": z(n)("appbar.more"),
          ref_key: "dropdownTrigger",
          ref: e
        }, $[1] || ($[1] = [
          k("svg", {
            class: "fill-current w-24 h-24 m-auto",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            k("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            k("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
          ], -1)
        ]), 8, me)), [
          [u],
          [m, { placement: "right-end" }]
        ]),
        N(k("div", {
          id: "dropdown",
          class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
          ref_key: "dropdown",
          ref: l
        }, [
          Y(d.$slots, "default", {}, void 0, !0)
        ], 512), [
          [Q, i.value]
        ])
      ], 512);
    };
  }
}), be = /* @__PURE__ */ R(ve, [["__scopeId", "data-v-6346dfbd"]]), he = {
  key: 0,
  class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, ge = /* @__PURE__ */ D({
  __name: "appbar-button",
  setup(h) {
    const n = ee(), { t: o } = P(), r = F("iApi"), i = M(() => n.notificationNumber), c = () => {
      r.panel.toggle("notifications");
    };
    return (e, l) => {
      const f = K("appbar-button", !0);
      return s(), w(f, {
        onClickFunction: c,
        tooltip: z(o)("notifications.title"),
        class: "notification-button",
        id: ""
      }, {
        default: H(() => [
          l[0] || (l[0] = k("svg", {
            class: "fill-current w-24 h-24 mx-8 sm:mx-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            k("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
          ], -1)),
          i.value && i.value > 0 ? (s(), v("span", he, te(i.value), 1)) : A("", !0)
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), $e = /* @__PURE__ */ R(ge, [["__scopeId", "data-v-f2294fce"]]), _e = ["content"], ye = /* @__PURE__ */ D({
  __name: "appbar",
  setup(h) {
    const n = oe(), o = O(), r = M(() => o.visible), i = M(
      () => o.temporary
    ), { t: c } = P(), e = I(!1), l = I({}), f = I(), d = () => {
      f.value._tippy.hide();
    }, $ = (u) => {
      u.key === "Tab" && f.value?.matches(":focus") && f.value._tippy.show();
    };
    return W(() => {
      f.value?.addEventListener("blur", d), f.value?.addEventListener("keyup", $);
    }), ne(() => {
      const u = V();
      window.addEventListener("resize", () => u?.proxy?.$forceUpdate());
    }), J(() => {
      const u = V();
      window.removeEventListener("resize", () => u?.proxy?.$forceUpdate()), f.value?.removeEventListener("blur", d), f.value?.removeEventListener("keyup", $);
    }), ae(() => {
      se(() => {
        const u = f.value;
        let m, b = [...u.children], g = b[b.length - 2].getBoundingClientRect().top;
        n.mobileView || (g = u.getBoundingClientRect().bottom - 38);
        let p = u.querySelector("#dropdown");
        for (let a = b.length - 4; a >= 0; a--) {
          let E = b[a].getBoundingClientRect().bottom;
          if (g && p && (E > g || e.value && E + 56 > g))
            b[a].classList.forEach((C) => {
              C.includes("identifier") && (m = C.slice(11));
            }), m && (l.value[m] = !0), e.value || (e.value = !0);
          else if (E !== 0)
            break;
        }
        let _ = u.querySelector("#more"), t = _.getBoundingClientRect().bottom;
        if (m = void 0, e.value && g && _ && p && t !== 0 && (t <= g - 56 || p.childElementCount == 1 && t <= g)) {
          let a = p.childElementCount, E = 0;
          for (; t <= g - 56 || a == 1; ) {
            let C = p.children[E];
            if (C && (C.classList.forEach((U) => {
              U.includes("identifier") && (m = U.slice(11));
            }), m && (l.value[m] = !1), t += 48, a -= 1, E += 1), a === 0) {
              e.value = !1;
              break;
            }
          }
        }
        Object.keys(l.value).forEach((a) => {
          u.querySelector(`.identifier-${a}`) || delete l.value[a];
        });
      });
    }), (u, m) => {
      const b = L("focus-list"), g = L("tippy");
      return N((s(), v("div", {
        class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
        content: z(c)("panels.controls.items"),
        ref_key: "el",
        ref: f
      }, [
        (s(!0), v(y, null, S(r.value, (p, _) => (s(), v(y, null, [
          (s(!0), v(y, null, S(p, (t, a) => (s(), v(y, null, [
            typeof t == "string" && l.value[`${t}-${a}`] !== !0 ? (s(), w(B, {
              key: `${t}-${a}-default`,
              panelId: t,
              class: x(["appbar-item h-48", `identifier-${t}-${a}`])
            }, null, 8, ["panelId", "class"])) : l.value[`${t}-${a}`] !== !0 ? (s(), w(j(t.componentId), {
              key: `${t}-${a}-custom`,
              options: t.options,
              class: x(["appbar-item h-48", `identifier-${t}-${a}`]),
              id: t.id
            }, null, 8, ["options", "id", "class"])) : A("", !0)
          ], 64))), 256)),
          l.value[`divider-${_}`] !== !0 ? (s(), w(G, {
            class: x(["appbar-item", `identifier-divider-${_}`]),
            key: `${p}-${_}-default`
          }, null, 8, ["class"])) : A("", !0)
        ], 64))), 256)),
        (s(!0), v(y, null, S(i.value?.filter(
          (p) => l.value[`${p}-temp`] !== !0
        ), (p) => (s(), w(B, {
          panelId: p,
          minimize: !0,
          key: `${p}-temp`,
          class: x([`identifier-${p}-temp`, "appbar-item h-48"])
        }, null, 8, ["panelId", "class"]))), 128)),
        N(T(be, { id: "more" }, {
          default: H(() => [
            (s(!0), v(y, null, S(r.value, (p, _) => (s(), v(y, { key: _ }, [
              (s(!0), v(y, null, S(p, (t, a) => (s(), v(y, null, [
                typeof t == "string" && l.value[`${t}-${a}`] ? (s(), w(B, {
                  key: `${t}-${a}-default`,
                  panelId: t,
                  class: x(["text-black hover:bg-gray my-4 h-36", `identifier-${t}-${a}`]),
                  overflow: ""
                }, null, 8, ["panelId", "class"])) : l.value[`${t}-${a}`] ? (s(), w(j(t.componentId), {
                  key: `${t}-${a}-custom`,
                  options: t.options,
                  id: t.id,
                  class: x(["appbar-item h-48", `identifier-${t}-${a}`])
                }, null, 8, ["options", "id", "class"])) : A("", !0)
              ], 64))), 256)),
              l.value[`divider-${_}`] ? (s(), w(G, {
                key: 0,
                class: x(["border-black my-4", `identifier-divider-${_}`])
              }, null, 8, ["class"])) : A("", !0)
            ], 64))), 128)),
            (s(!0), v(y, null, S(i.value?.filter(
              (p) => l.value[`${p}-temp`]
            ), (p) => (s(), w(B, {
              panelId: p,
              minimize: !0,
              key: `${p}-temp`,
              class: x([`identifier-${p}-temp`, "text-black hover:bg-gray my-4 h-36"]),
              overflow: ""
            }, null, 8, ["panelId", "class"]))), 128))
          ]),
          _: 1
        }, 512), [
          [Q, e.value]
        ]),
        T($e, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
        T(re, {
          class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
          position: "right-start"
        })
      ], 8, _e)), [
        [b],
        [g, {
          trigger: "manual",
          placement: "top-end",
          popperOptions: {
            placement: "top",
            modifiers: [
              { name: "preventOverflow", options: { altAxis: !0 } },
              { name: "flip", options: { fallbackPlacements: ["top"] } }
            ]
          }
        }]
      ]);
    };
  }
});
class we extends ie {
  /**
   * Returns `AppbarFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {AppbarFixtureConfig}
   * @memberof AppbarFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {AppbarFixtureConfig} [appbarConfig]
   * @returns
   * @memberof AppbarAPI
   */
  _parseConfig(n) {
    if (!n)
      return;
    const o = O(this.$vApp.$pinia);
    let r;
    Array.isArray(n.items[0]) ? r = n.items : r = [n.items];
    const i = [];
    r.forEach((c) => {
      i.push(
        c.map((e) => typeof e == "string" ? e : new q(e))
      );
    }), o.items = i.flat().reduce((c, e) => (c[e instanceof q ? e.id : e] = e, c), {}), o.order = i.map(
      (c) => c.map(
        (e) => e instanceof q ? e.id : e
      )
    ), this._validateItems();
  }
  /**
   * Checks if components specified as appbar items are registered or not.
   *
   * @memberof AppbarAPI
   */
  _validateItems() {
    const n = O(this.$vApp.$pinia);
    n.order.flat().forEach((o) => {
      typeof n.items[o] != "string" && [o].some((r) => {
        this.$iApi.fixture.exists(r) && !n.items[o] && (n.items[o].componentId = `${r}-appbar-button`);
      });
    });
  }
}
const xe = { en: { "appbar.navigation": "Navigation", "appbar.more": "More", "navigation.export": "Export", "navigation.map.export": "Export Map" }, fr: { "appbar.navigation": "Navigation", "appbar.more": "Plus", "navigation.export": "Exporter", "navigation.map.export": "Exporter la Carte" } };
class Ie extends we {
  initialized() {
  }
  async added() {
    Object.entries(xe).forEach(
      (e) => this.$iApi.$i18n.mergeLocaleMessage(...e)
    );
    const { destroy: n, el: o } = this.mount(ye, {
      app: this.$element
    }), r = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    r.insertBefore(
      o.childNodes[0],
      r.querySelector(".panel-stack")
    ), this._parseConfig(this.config);
    const i = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), c = [];
    c.push(
      this.$iApi.event.on(le.COMPONENT, () => {
        this._parseConfig(this.config);
      })
    ), this.removed = () => {
      const e = O(this.$vApp.$pinia);
      i(), c.forEach((d) => this.$iApi.event.off(d));
      const l = { ...e.items }, f = [...e.temporary];
      Object.keys(l).forEach((d) => e.removeButton(d)), f.forEach((d) => e.removeButton(d)), n(), e.$reset();
    };
  }
}
export {
  Ie as default
};
//# sourceMappingURL=index-BB1-Hum8.js.map
