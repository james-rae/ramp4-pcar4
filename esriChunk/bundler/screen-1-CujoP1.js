import { defineComponent as ue, ref as m, watch as Se, toRef as Ke, openBlock as c, createElementBlock as y, createElementVNode as n, toDisplayString as g, unref as o, inject as xe, useTemplateRef as ae, reactive as ie, onMounted as ze, onBeforeUnmount as me, resolveDirective as we, createCommentVNode as V, createVNode as I, withCtx as M, withDirectives as pe, normalizeClass as ne, createTextVNode as ke, Fragment as Ze, renderList as Je, vShow as Ie, Transition as Qe, renderSlot as Me, computed as W, provide as Xe, onErrorCaptured as et, resolveComponent as tt, createBlock as D, withModifiers as Oe, nextTick as lt } from "vue";
import { ColorPicker as at } from "vue-accessible-color-picker";
import { _ as be, I as ot, L as S, a0 as J, G as Ce, Z as ye } from "./main-DCVw7L11.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "terraformer";
import "proj4";
import "pinia";
import { useI18n as Ee } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import st from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
const rt = { class: "flex justify-end mb-20" }, nt = ["disabled", "animation"], it = { class: "button-text" }, ut = /* @__PURE__ */ ue({
  __name: "form-footer",
  props: {
    animation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    const { t: v } = Ee(), l = s, w = m();
    Se(Ke(l, "disabled"), (h) => {
      !h && w.value.classList.contains("button--loading") && w.value.classList.remove("button--loading");
    });
    const E = () => {
      l.animation && w.value.classList.toggle("button--loading");
    };
    return (h, f) => (c(), y("div", rt, [
      n("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: f[0] || (f[0] = ($) => h.$emit("cancel"))
      }, g(o(v)("wizard.step.cancel")), 1),
      n("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: w,
        type: "button",
        disabled: s.disabled,
        animation: s.animation,
        onClick: f[1] || (f[1] = ($) => {
          h.$emit("submit"), E();
        })
      }, [
        n("span", it, g(o(v)("wizard.step.continue")), 1)
      ], 8, nt)
    ]));
  }
}), ge = /* @__PURE__ */ be(ut, [["__scopeId", "data-v-5e77d8d6"]]), dt = { key: 0 }, ct = { class: "text-base font-bold" }, vt = {
  class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
  "data-type": "file"
}, ft = ["aria-label"], pt = { class: "text-gray-500 text-xs mb-1" }, mt = { key: 1 }, bt = { class: "text-base font-bold" }, yt = {
  class: "mb-0.5",
  "data-type": "url"
}, gt = ["value", "aria-label"], ht = {
  key: 0,
  class: "text-red-900 text-xs"
}, wt = { key: 2 }, St = { class: "text-base font-bold" }, xt = {
  class: "relative mb-0.5",
  "data-type": "select"
}, zt = { key: 0 }, kt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Et = { key: 1 }, Ft = ["size", "value", "aria-label"], Lt = ["value"], Vt = {
  key: 0,
  class: "text-red-900 text-xs"
}, At = {
  key: 1,
  class: "text-red-900 text-xs"
}, $t = { key: 3 }, Tt = ["aria-label"], It = { class: "text-base font-bold" }, Ot = { key: 4 }, Ct = { class: "text-base font-bold" }, Mt = { class: "relative mb-0.5" }, Rt = ["value", "aria-label"], _t = {
  key: 0,
  class: "text-red-900 text-xs"
}, Nt = /* @__PURE__ */ ue({
  __name: "form-input",
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    defaultOption: {
      type: Boolean,
      default: !1
    },
    formatError: {
      type: Boolean,
      default: !1
    },
    failureError: {
      type: Boolean,
      default: !1
    },
    help: {
      type: [String, Boolean],
      default: !1
    },
    label: {
      type: [String, Boolean],
      default: !1
    },
    modelValue: {
      type: [String, Array],
      default: ""
    },
    name: {
      type: [String, Boolean],
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedValues: {
      type: Array,
      default: () => []
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sublayerOptions: {
      type: Function,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "text"
    },
    url: {
      type: [String, Boolean],
      default: !1
    },
    validation: {
      type: Boolean,
      default: !1
    },
    validationMessages: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: !1
    }
  },
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested", "focusElement"],
  setup(s, { expose: v, emit: l }) {
    const w = xe("iApi"), { t: E } = Ee(), h = l, f = s, $ = m(), R = ae("textInput"), z = ae("selectInput"), U = ae("urlInput");
    v({ selectInput: z, textInput: R, urlInput: U });
    const k = m(!1), P = m(!1), B = m(!1), q = m(!1), _ = m([...f.selectedValues]), G = m("value-label"), Q = m("option-label"), C = m(void 0), T = m(null), j = ie([]);
    if (f.defaultOption && f.modelValue === "" && f.options.length) {
      let r = f.options[0].value;
      if (f.name === "latField") {
        const u = new RegExp(/^(y|lat.*)$/i);
        r = f.options.find((H) => u.test(H.label))?.value || r;
      } else if (f.name === "longField") {
        const u = new RegExp(/^(x|long.*)$/i);
        r = f.options.find((H) => u.test(H.label))?.value || r;
      }
      h("update:modelValue", r);
    }
    const X = (r) => {
      r.trim() !== "" ? k.value = !0 : (k.value = !1, w.updateAlert(E("wizard.configure.name.error.required")));
    }, oe = (r) => {
      let u;
      try {
        u = new URL(r);
      } catch {
        return k.value = !1, !1;
      }
      u.protocol === "http:" || u.protocol === "https:" ? k.value = !0 : k.value = !1;
    }, de = (r) => {
      h("upload", r.target.files[0]), r.target.value = "";
    }, ee = (r) => {
      oe(r.target.value), h("link", r.target.value, k), P.value = !1;
    }, x = (r, u) => {
      h(r ? "select" : "update:modelValue", u.target.value);
    }, se = (r) => {
      h("nested", r.target.checked);
    }, re = (r) => {
      X(r.target.value), h("link", r.target.value, k), B.value = !1;
    }, A = () => {
      h("select", f.sublayerOptions(_.value)), _.value && _.value.length > 0 ? q.value = !1 : q.value = !0;
    }, Y = (r) => r.length > 5 ? `${r.slice(0, 5)}...` : r;
    function F() {
      C.value = new ResizeObserver(function() {
        a();
      }), C.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__control")), C.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const a = () => {
      const r = w.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, u = w.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      $.value.style.height = `${r + u + 30}px`;
    };
    j.push(
      Se(T, (r) => {
        r && ce();
      })
    );
    const ce = () => {
      if (T.value) {
        const r = T.value.querySelector('input[type="text"]');
        r && r.setAttribute("aria-label", E("wizard.configure.sublayers.select"));
      }
    }, ve = () => {
      z.value._tippy.hide();
    }, te = (r) => {
      r.key === "Tab" && z.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? z.value._tippy.show() : z.value._tippy.hide();
    };
    return ze(() => {
      z.value?.addEventListener("blur", ve), z.value?.addEventListener("keyup", te), f.step === 2 && f.step === f.activeStep && h("focusElement");
    }), me(() => {
      C.value.disconnect(), j.forEach((r) => r()), z.value?.removeEventListener("blur", ve), z.value?.removeEventListener("keyup", te);
    }), (r, u) => {
      const K = we("truncate"), H = we("tippy");
      return c(), y("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: $
      }, [
        s.type === "file" ? (c(), y("div", dt, [
          n("label", ct, g(s.label), 1),
          n("div", vt, [
            n("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": f.ariaLabel,
              onInput: u[0] || (u[0] = (b) => {
                de(b);
              })
            }, null, 40, ft),
            u[11] || (u[11] = n("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              n("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                n("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                n("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          n("div", pt, g(s.help), 1)
        ])) : s.type === "url" ? (c(), y("div", mt, [
          n("label", bt, g(s.label), 1),
          n("div", yt, [
            n("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: s.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[1] || (u[1] = (b) => k.value ? P.value = !1 : P.value = !0),
              onInput: u[2] || (u[2] = (b) => {
                ee(b);
              }),
              ref_key: "urlInput",
              ref: U
            }, null, 40, gt)
          ]),
          P.value ? (c(), y("div", ht, g(s.modelValue ? s.validationMessages?.invalid : s.validationMessages?.required), 1)) : V("", !0)
        ])) : s.type === "select" ? (c(), y("div", wt, [
          n("label", St, g(s.label), 1),
          n("div", xt, [
            s.multiple ? (c(), y("div", zt, [
              n("div", {
                ref_key: "treeWrapper",
                ref: T
              }, [
                I(o(st), {
                  modelValue: _.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (b) => _.value = b),
                  multiple: !0,
                  options: s.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: s.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: o(E)("wizard.configure.sublayers.select"),
                  noResultsText: o(E)("wizard.configure.sublayers.results"),
                  clearAllText: o(E)("wizard.configure.sublayers.clearAll"),
                  onSelect: u[4] || (u[4] = (b) => {
                    r.$nextTick(() => {
                      A();
                    });
                  }),
                  onDeselect: u[5] || (u[5] = (b) => {
                    r.$nextTick(() => {
                      A();
                    });
                  }),
                  onOpen: u[6] || (u[6] = (b) => {
                    r.$nextTick(() => {
                      F();
                    });
                  })
                }, {
                  [G.value]: M(({ node: b }) => [
                    n("label", null, g(Y(b.label)), 1)
                  ]),
                  [Q.value]: M(({ node: b, labelClassName: fe }) => [
                    pe((c(), y("label", {
                      class: ne(fe)
                    }, [
                      ke(g(b.label), 1)
                    ], 2)), [
                      [K, {
                        options: {
                          placement: "top",
                          hideOnClick: !1,
                          theme: "ramp4",
                          animation: "scale"
                        }
                      }]
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "options", "searchable", "placeholder", "noResultsText", "clearAllText"])
              ], 512),
              s.validation && q.value ? (c(), y("div", kt, g(s.validationMessages?.required), 1)) : V("", !0)
            ])) : (c(), y("div", Et, [
              pe((c(), y("select", {
                class: ne(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", s.size && "configure-select"]),
                size: s.size,
                value: s.modelValue,
                onInput: u[7] || (u[7] = (b) => x(s.size, b)),
                "aria-label": f.ariaLabel,
                ref_key: "selectInput",
                ref: z
              }, [
                (c(!0), y(Ze, null, Je(s.options, (b) => (c(), y("option", {
                  class: "p-6",
                  key: b.label,
                  value: b.value
                }, g(b.label), 9, Lt))), 128))
              ], 42, Ft)), [
                [H, {
                  content: o(E)("select.items"),
                  trigger: "manual",
                  placement: "top-start"
                }]
              ]),
              s.validation && s.formatError ? (c(), y("div", Vt, g(s.validationMessages?.invalid), 1)) : V("", !0),
              s.validation && s.failureError ? (c(), y("div", At, g(s.validationMessages?.failure), 1)) : V("", !0)
            ]))
          ])
        ])) : s.type === "checkbox" ? (c(), y("div", $t, [
          n("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": f.ariaLabel,
            onChange: u[8] || (u[8] = (b) => {
              se(b);
            })
          }, null, 40, Tt),
          n("label", It, g(s.label), 1)
        ])) : (c(), y("div", Ot, [
          n("label", Ct, g(s.label), 1),
          n("div", Mt, [
            n("input", {
              class: ne(["border-solid border-gray-300 p-3 w-full", { "error-border": !k.value && !s.modelValue }]),
              type: "text",
              value: s.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[9] || (u[9] = (b) => k.value ? B.value = !1 : B.value = !0),
              onInput: u[10] || (u[10] = (b) => {
                re(b);
              }),
              ref_key: "textInput",
              ref: R
            }, null, 42, Rt)
          ]),
          s.validation && !s.modelValue ? (c(), y("div", _t, g(s.validationMessages?.required), 1)) : V("", !0)
        ]))
      ], 512);
    };
  }
}), N = /* @__PURE__ */ be(Nt, [["__scopeId", "data-v-8b14a81f"]]), Ut = { class: "step relative flex flex-col px-12" }, Bt = { class: "stepper-header flex pb-24" }, qt = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Ht = { class: "flex flex-col overflow-hidden" }, Dt = { class: "pl-12 flex items-center text-md" }, Wt = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Pt = /* @__PURE__ */ ue({
  __name: "stepper-item",
  props: {
    title: {
      type: String,
      required: !0
    },
    summary: {
      type: String
    }
  },
  emits: ["focusPanel", "focusFirstElement"],
  setup(s, { emit: v }) {
    const l = xe("stepper"), w = m(), E = v, h = m(-1), f = (z) => {
      R() || (z.stopPropagation(), E("focusPanel"), E("focusFirstElement"));
    };
    ze(() => {
      h.value = l.numSteps++, w.value?.addEventListener("focusout", f);
    }), me(() => {
      w.value?.removeEventListener("focusout", f);
    });
    const $ = () => l.activeIndex > h.value, R = () => l.activeIndex === h.value;
    return (z, U) => {
      const k = we("truncate");
      return c(), y("div", Ut, [
        n("div", Bt, [
          $() ? (c(), y("div", qt, U[0] || (U[0] = [
            n("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              n("g", { id: "check_circle" }, [
                n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (c(), y("div", {
            key: 0,
            class: ne(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": R }])
          }, g(h.value + 1), 3)),
          n("div", Ht, [
            n("div", Dt, g(s.title), 1),
            pe((c(), y("div", Wt, [
              ke(g(s.summary), 1)
            ])), [
              [Ie, !R()],
              [k]
            ])
          ])
        ]),
        I(Qe, {
          name: "step",
          mode: "out-in"
        }, {
          default: M(() => [
            pe(n("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: w
            }, [
              Me(z.$slots, "default", {}, void 0, !0)
            ], 512), [
              [Ie, R()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), he = /* @__PURE__ */ be(Pt, [["__scopeId", "data-v-4ef77456"]]), Gt = { class: "py-12 h-auto stepper" }, jt = /* @__PURE__ */ ue({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(s) {
    const v = s, l = W(() => v.activeStep), w = ie([]), E = ie({
      activeIndex: v.activeStep,
      numSteps: 0
    });
    return Xe("stepper", E), w.push(
      Se(l, () => {
        E.activeIndex = v.activeStep;
      })
    ), me(() => {
      w.forEach((h) => h());
    }), (h, f) => (c(), y("div", Gt, [
      Me(h.$slots, "default")
    ]));
  }
}), Yt = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Kt = { class: "px-5 text-xs" }, Zt = { key: 5 }, Jt = ["for"], Qt = {
  key: 6,
  class: "text-base font-bold"
}, Xt = { class: "sr-only" }, el = { class: "sr-only" }, tl = /* @__PURE__ */ ue({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const v = ot(), { t: l } = Ee(), w = xe("iApi"), E = m(), h = m([]), f = W(() => v.layerSource), $ = W(() => v.currStep), R = m(), z = m(), U = m(0), k = m(!1), P = m(), B = ae("stepOneStart"), q = ae("stepTwoStart"), _ = ae("stepThreeStart"), G = m(!1), Q = m(!1), C = m(!1), T = m(!1), j = m(!1), X = m(!1), oe = m(!0), de = m(""), ee = m(""), x = m([]), se = ie([
      {
        value: S.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: S.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: S.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: S.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: S.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: S.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), re = ie([
      {
        value: S.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: S.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: S.CSV, label: l("wizard.fileType.csv") }
    ]), A = W({
      get() {
        return v.url;
      },
      set(e) {
        v.url = e;
      }
    }), Y = W({
      get() {
        return v.fileData;
      },
      set(e) {
        v.fileData = e;
      }
    }), F = W({
      get() {
        return v.typeSelection;
      },
      set(e) {
        v.typeSelection = e;
      }
    }), a = W({
      get() {
        return v.layerInfo;
      },
      set(e) {
        v.layerInfo = e;
      }
    }), ce = W(() => {
      let e = w.geo.proxy !== "";
      switch (F.value) {
        // ESRI ArcGIS Server
        // required only if no proxy is set
        case S.FEATURE:
        case S.MAPIMAGE:
        case S.TILE:
        case S.IMAGERY:
          return !e;
        // WFS Server
        // always required
        case S.WFS:
          return !0;
        // WMS Server
        // required only if proxy is set
        case S.WMS:
          return !e;
        // Files
        // always required for files from hosted services
        case S.GEOJSON:
        case S.SHAPEFILE:
        case S.CSV:
          return !!(Z() && !Y.value);
        default:
          return !1;
      }
    });
    et(() => (($.value === J.FORMAT || $.value === J.CONFIGURE) && (G.value = !0, v.goToStep(J.FORMAT)), !1)), ze(() => {
      h.value.push(
        w.event.on(Ce.LAYER_LAYERSTATECHANGE, (e) => {
          e.layer.userAdded && (de.value = e.layer.name, X.value = e.state !== ye.LOADING && e.state !== ye.NEW, oe.value = X.value && e.state === ye.LOADED);
        })
      ), $.value === J.CONFIGURE && (a.value?.configOptions.includes("colour") && Te(), T.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), me(() => {
      h.value.forEach((e) => w.event.off(e));
    });
    const ve = () => {
      P.value.el.dispatchEvent(new MouseEvent("click"));
    }, te = () => {
      switch ($.value) {
        case 0:
          r();
          break;
        case 1:
          u();
          break;
        case 2:
          K();
          break;
      }
    }, r = () => {
      for (let e in B.value)
        if (B.value[e]) {
          B.value[e].focus();
          break;
        }
    }, u = () => {
      for (let e in q.value)
        if (q.value[e]) {
          q.value[e].focus();
          break;
        }
    }, K = () => {
      for (let e in _.value)
        if (_.value[e]) {
          _.value[e].focus();
          break;
        }
    }, H = async (e) => {
      const t = new FileReader();
      t.onload = (d) => {
        Y.value = t.result, A.value = e.name, b(d);
      }, t.readAsArrayBuffer(e);
    }, b = (e) => {
      e?.preventDefault(), F.value = f.value.guessFormatFromURL(A.value), v.goToStep(J.FORMAT);
    }, fe = async (e) => {
      e?.preventDefault(), k.value = !0, Q.value = !1, j.value = !0, v.goToStep(J.CONFIGURE), ee.value = Z() ? re.find((d) => d.value === F.value)?.label : se.find((d) => d.value === F.value)?.label;
      try {
        a.value = Z() ? await f.value.fetchFileInfo(A.value, F.value, Y.value) : await f.value.fetchServiceInfo(
          A.value,
          F.value,
          v.nested
        ), Z() && Y.value && (a.value.config.url = "");
      } catch {
        k.value = !1, Q.value = !0;
        return;
      }
      const t = F.value === S.FEATURE && !(a.value && a.value.fields);
      if (!a.value || t) {
        G.value = !0, a.value = {
          config: {
            id: "Placeholder",
            layerType: S.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, k.value = !1;
        return;
      }
      Te(), T.value = !(a.value.configOptions.includes("sublayers") || !a.value.config.name), k.value = !1, j.value = !1;
    }, Fe = async (e) => {
      e?.preventDefault();
      const t = Object.assign(a.value.config, e);
      x.value = [], ee.value = "";
      const d = w.geo.layer.createLayer(t);
      w.geo.map.addLayer(d).catch(() => {
      }), d.userAdded = !0, w.event.emit(Ce.USER_LAYER_ADDED, d), C.value = !1, v.goToStep(J.UPLOAD);
    }, Le = () => a.value?.fields.map((e) => ({
      value: e.name,
      label: e.alias || e.name
    })), Ve = (e) => a.value?.latLonFields[e].map((t) => ({
      value: t,
      label: t
    })), Z = () => Y.value || A.value.match(/\.(zip|csv|json|geojson)$/), Re = (e) => {
      H(e), A.value = "";
    }, _e = (e, t) => {
      A.value = e.trim(), t ? C.value = !0 : C.value = !1;
    }, Ne = (e) => {
      F.value = e, G.value = !1;
    }, Ue = (e) => {
      a.value.config.name = e.trim();
      const t = a.value?.config.sublayers;
      (t ? e && t.length > 0 : e.trim()) ? T.value = !0 : T.value = !1;
    }, Ae = (e) => {
      a.value.config.sublayers = e, e.length > 0 && a.value?.config.name ? T.value = !0 : T.value = !1;
    }, Be = (e) => {
      if (v.nested = e, x.value = [], U.value += 1, F.value === S.MAPIMAGE) {
        a.value.layers = f.value.createLayerHierarchy(
          a.value.layersRaw,
          v.nested
        );
        const t = new Set(
          (a.value?.config?.sublayers ?? []).map((d) => d.index)
        );
        v.nested ? qe(a, t) : De(a, t);
      } else if (F.value === S.WMS) {
        a.value.layers = f.value.mapWmsLayerList(
          a.value.layersRaw,
          v.nested
        );
        const t = new Set((a.value?.config?.sublayers ?? []).map((d) => d.id));
        v.nested ? He(a, t) : We(a, t);
      }
      Ae($e(x.value));
    }, qe = (e, t) => {
      const d = /* @__PURE__ */ new Map();
      for (const i of e.value.layersRaw)
        if (i.parentLayerId !== -1) {
          const O = d.get(i.parentLayerId) || [];
          O.push(i.id), d.set(i.parentLayerId, O);
        }
      const p = (i) => {
        const O = d.get(i);
        return O ? O.every((le) => d.has(le) ? p(le) : t.has(le)) : !1;
      }, L = (i) => {
        if (p(i))
          x.value.push(i);
        else {
          const O = d.get(i);
          if (O)
            for (const le of O)
              t.has(le) && x.value.push(le);
        }
      };
      for (const i of d.keys()) L(i);
      for (const i of e.value.layersRaw)
        i.parentLayerId === -1 && !d.has(i.id) && t.has(i.id) && x.value.push(i.id);
      x.value = Array.from(new Set(x.value));
    }, He = (e, t) => {
      const d = (i) => !i.layers || i.layers.length === 0 ? t.has(i.name) : i.layers.every((O) => d(O)), p = (i) => {
        d(i) ? x.value.push(i.name) : i.layers && i.layers.forEach(p);
      }, L = e.value.layersRaw[0];
      L && L.layers && L.layers.forEach((i) => p(i)), x.value = Array.from(new Set(x.value));
    }, De = (e, t) => {
      const d = (p) => {
        const L = e.value.layersRaw.filter((i) => i.parentLayerId === p);
        if (L.length > 0)
          for (const i of L)
            t.has(i.id) ? x.value.push(i.id) : d(i.id);
        else x.value.push(p);
      };
      for (const p of e.value.layersRaw)
        t.has(p.id) && d(p.id);
      x.value = Array.from(new Set(x.value));
    }, We = (e, t) => {
      const d = (L) => {
        L.layers && L.layers.length > 0 ? L.layers.forEach(d) : x.value.push(L.name);
      }, p = e.value.layersRaw[0];
      for (const L of t) {
        const i = p.layers.find((O) => O.name === L);
        i && i.layers && i.layers.length > 0 ? d(i) : i && x.value.push(i.name);
      }
      x.value = Array.from(new Set(x.value));
    }, $e = (e) => e.map((t) => {
      switch (F.value) {
        case S.MAPIMAGE:
          return {
            index: t,
            state: { opacity: 1, visibility: !0 }
          };
        case S.WMS: {
          const d = t.lastIndexOf("#");
          return { id: t.substring(0, d) };
        }
        default:
          return {
            id: t
          };
      }
    }), Te = () => {
      R.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        z.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(z.value + "-hue-slider") !== null);
    }, Pe = (e) => {
      a.value.config.colour = e.colors.hex.substring(0, 7), lt(() => {
        E.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, Ge = () => {
      C.value = !1, v.goToStep(0), r();
    }, je = () => {
      k.value = !1, G.value = !1, Q.value = !1, C.value = !!A.value, j.value = !1, v.goToStep(0), ee.value = "";
    }, Ye = () => {
      x.value = [], T.value = !1, v.goToStep(1);
    };
    return (e, t) => {
      const d = tt("panel-screen");
      return c(), D(d, {
        panel: s.panel,
        ref_key: "thePanel",
        ref: P
      }, {
        header: M(() => [
          ke(g(o(l)("wizard.title")), 1)
        ]),
        content: M(() => [
          I(jt, { activeStep: $.value }, {
            default: M(() => [
              I(he, {
                title: o(l)("wizard.upload.title"),
                summary: A.value,
                onFocusPanel: ve,
                onFocusFirstElement: te
              }, {
                default: M(() => [
                  n("form", {
                    name: "upload",
                    onSubmit: b,
                    onClick: t[1] || (t[1] = (p) => X.value = !1)
                  }, [
                    I(N, {
                      type: "file",
                      name: "file",
                      label: o(l)("wizard.upload.file.label"),
                      help: o(l)("wizard.upload.file.help"),
                      onUpload: Re,
                      "aria-label": o(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    t[11] || (t[11] = n("span", { class: "block text-center mb-10" }, "or", -1)),
                    I(N, {
                      type: "url",
                      name: "url",
                      modelValue: A.value,
                      "onUpdate:modelValue": t[0] || (t[0] = (p) => A.value = p),
                      label: o(l)("wizard.upload.url.label"),
                      onLink: _e,
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.upload.url.error.required"),
                        invalid: o(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": o(l)("wizard.upload.url.label"),
                      ref_key: "stepOneStart",
                      ref: B
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    I(ge, {
                      onSubmit: b,
                      onCancel: Ge,
                      disabled: !C.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              I(he, {
                title: o(l)("wizard.format.title"),
                summary: ee.value,
                onFocusFirstElement: te
              }, {
                default: M(() => [
                  n("form", {
                    name: "format",
                    onSubmit: fe
                  }, [
                    ce.value ? (c(), y("div", Yt, [
                      t[12] || (t[12] = n("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        n("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      n("span", Kt, g(o(l)("wizard.format.info.cors")), 1)
                    ])) : V("", !0),
                    I(N, {
                      type: "select",
                      name: "type",
                      modelValue: F.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (p) => F.value = p),
                      onSelect: Ne,
                      size: Z() ? re.length : se.length,
                      label: Z() ? o(l)("wizard.format.type.file") : o(l)("wizard.format.type.service"),
                      options: Z() ? re : se,
                      formatError: G.value,
                      failureError: Q.value,
                      validation: j.value,
                      "validation-messages": {
                        required: o(l)("wizard.format.type.error.required"),
                        invalid: o(l)("wizard.format.type.error.invalid"),
                        failure: `${o(l)("wizard.format.type.error.failure")}.${ce.value ? " " + o(l)("wizard.format.warn.cors") + "." : ""}${" " + o(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: t[3] || (t[3] = Oe(() => {
                      }, ["stop"])),
                      "aria-label": o(l)("wizard.format.type.service"),
                      ref_key: "stepTwoStart",
                      ref: q
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    I(ge, {
                      onSubmit: fe,
                      onCancel: je,
                      animation: !0,
                      disabled: k.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              I(he, {
                title: o(l)("wizard.configure.title"),
                onFocusFirstElement: te
              }, {
                default: M(() => [
                  n("form", {
                    name: "configure",
                    onSubmit: Fe,
                    ref_key: "formElement",
                    ref: E
                  }, [
                    a.value?.configOptions.includes("name") ? (c(), D(N, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: a.value.config.name,
                      "onUpdate:modelValue": t[4] || (t[4] = (p) => a.value.config.name = p),
                      onLink: Ue,
                      label: o(l)("wizard.configure.name.label"),
                      "aria-label": o(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.configure.name.error.required")
                      },
                      ref_key: "stepThreeStart",
                      ref: _,
                      onFocusElement: K,
                      activeStep: $.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : V("", !0),
                    a.value?.configOptions.includes("nameField") ? (c(), D(N, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: a.value.config.nameField,
                      "onUpdate:modelValue": t[5] || (t[5] = (p) => a.value.config.nameField = p),
                      label: o(l)("wizard.configure.nameField.label"),
                      "aria-label": o(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: Le()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : V("", !0),
                    a.value?.configOptions.includes("tooltipField") ? (c(), D(N, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: a.value.config.tooltipField,
                      "onUpdate:modelValue": t[6] || (t[6] = (p) => a.value.config.tooltipField = p),
                      label: o(l)("wizard.configure.tooltipField.label"),
                      "aria-label": o(l)("wizard.configure.tooltipField.label"),
                      options: Le()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : V("", !0),
                    a.value?.configOptions.includes("latField") ? (c(), D(N, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: a.value.config.latField,
                      "onUpdate:modelValue": t[7] || (t[7] = (p) => a.value.config.latField = p),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.latField.label"),
                      "aria-label": o(l)("wizard.configure.latField.label"),
                      options: Ve("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : V("", !0),
                    a.value?.configOptions.includes("longField") ? (c(), D(N, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: a.value.config.longField,
                      "onUpdate:modelValue": t[8] || (t[8] = (p) => a.value.config.longField = p),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.longField.label"),
                      "aria-label": o(l)("wizard.configure.longField.label"),
                      options: Ve("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : V("", !0),
                    a.value?.configOptions.includes("sublayers") ? (c(), y("div", Zt, [
                      I(N, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Be,
                        label: o(l)("wizard.configure.sublayers.nested"),
                        "aria-label": o(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (c(), D(N, {
                        type: "select",
                        key: U.value,
                        name: "sublayers",
                        modelValue: a.value.config.sublayers,
                        "onUpdate:modelValue": t[9] || (t[9] = (p) => a.value.config.sublayers = p),
                        onSelect: Ae,
                        label: o(l)("wizard.configure.sublayers.label"),
                        "aria-label": o(l)("wizard.configure.sublayers.label"),
                        options: a.value.layers,
                        selectedValues: x.value,
                        sublayerOptions: $e,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: o(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: t[10] || (t[10] = Oe(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : V("", !0),
                    n("label", {
                      class: "sr-only",
                      for: `${z.value}-color-hex`
                    }, g(o(l)("wizard.configure.colour.hex")), 9, Jt),
                    a.value?.configOptions.includes("colour") ? (c(), y("label", Qt, g(o(l)("wizard.configure.colour.label")), 1)) : V("", !0),
                    a.value?.configOptions.includes("colour") ? (c(), D(o(at), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: z.value,
                      color: R.value,
                      onColorChange: Pe
                    }, {
                      "hue-range-input-label": M(() => [
                        n("span", Xt, g(o(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": M(() => [
                        n("span", el, g(o(l)("wizard.configure.colour.copy")), 1),
                        t[13] || (t[13] = n("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          n("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          n("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : V("", !0),
                    I(ge, {
                      onSubmit: Fe,
                      onCancel: Ye,
                      disabled: !T.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          X.value ? (c(), y("div", {
            key: 0,
            class: ne(["p-3 border-solid border-2", oe.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, g(de.value) + " " + g(o(l)(`wizard.upload.${oe.value ? "success" : "fail"}`)), 3)) : V("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Ul = /* @__PURE__ */ be(tl, [["__scopeId", "data-v-1351a391"]]);
export {
  Ul as default
};
