import { defineComponent as H, inject as de, resolveComponent as Pe, resolveDirective as U, createBlock as lt, openBlock as L, unref as f, withCtx as oe, createElementBlock as _, Fragment as at, renderList as rt, createElementVNode as s, withDirectives as $, createTextVNode as ie, toDisplayString as D, normalizeClass as B, ref as b, onBeforeMount as fe, withKeys as N, withModifiers as O, vModelText as ue, vModelSelect as At, onMounted as ee, nextTick as Ee, onBeforeUnmount as te, createCommentVNode as I, computed as P, useTemplateRef as $t, getCurrentInstance as Tt, watch as Ie, vShow as se, createVNode as ke, markRaw as Ve } from "vue";
import "tiny-emitter";
import { a as ge, _ as he, G as J, X as Rt, Y as St, Z as st, $ as ne, i as nt, a0 as Dt, a1 as Je, a2 as _e, a3 as Gt } from "./main-C8lGmFA5.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-sketch";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import { debounce as et } from "throttle-debounce";
import "pinia";
import { useI18n as z } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import It from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import Vt from "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as Pt } from "ag-grid-vue3";
import { T as Ht, C as Bt } from "./table-state-manager-BxfbugKY.js";
import { AG_GRID_LOCALE_EN as Nt, AG_GRID_LOCALE_FR as Ot } from "@ag-grid-community/locale";
import { ModuleRegistry as Ut, AllCommunityModule as zt, provideGlobalGridOptions as Kt } from "ag-grid-community";
function ot(w, r, e) {
  return w[r].find(
    (n) => (n.mappedAttr ?? n.origAttr) === e
  );
}
function He(w, r) {
  const e = ot(w, r.id, r.oidField);
  return e ? e.mappedAttr ?? e.origAttr : r.oidField;
}
const jt = ".ag-root", qt = ".ag-header-viewport .ag-header-row";
class tt {
  element;
  agGrid;
  headerRows;
  agGridApi;
  mousedown = !1;
  /**
   * Triggered by ag-grid whenever a key is pressed on a focused/active cell.
   * For our use case we open a new browser tab (or window, it's based on the users browser settings)
   * for each href attribute found in the cell content when the 'Enter' key is pressed.
   *
   * Note that for security/performance purposes some browsers limit the number
   * of tabs that can be opened to one. The user can disable this limitation by
   * allowing popups from the website hosting a ramp map (shows up as an icon in the url bar of chrome,
   * other browser may vary).
   */
  static onCellKeyPress({ event: r }) {
    function e(n) {
      n.forEach((l) => {
        l.href && window.open(l.href), l.childNodes.length > 0 && e(l.childNodes);
      });
    }
    r.key == "Enter" && e(r.target.childNodes);
  }
  /**
   * Initializes focus lists and listeners for grid keyboard navigation.
   *
   * @param {HTMLElement} element The grid element
   * @param {GridApi} agGridApi The ag-grid grid api
   * @param {ColumnApi} agColumnApi The ag-grid column api
   */
  constructor(r, e) {
    this.element = r, this.agGridApi = e, this.agGrid = this.element.querySelector(jt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(qt)
    ), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid.
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, n) => {
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      n < 1 || l.length === 0 || (e.addEventListener("keydown", (i) => {
        this.cellKeydownHandler(i, e, l);
      }), e.addEventListener("blur", (i) => {
        this.cellBlurHandler(i, e, l);
      }), l[l.length - 1].addEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !1);
      }), l[0].addEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !0);
      }));
    });
  }
  /**
   * Remove all accessibility listeners from the grid.
   */
  removeAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, n) => {
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      n < 1 || l.length === 0 || (e.removeEventListener("keydown", (i) => {
        this.cellKeydownHandler(i, e, l);
      }), e.removeEventListener("blur", (i) => {
        this.cellBlurHandler(i, e, l);
      }), l[l.length - 1].removeEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !1);
      }), l[0].removeEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !0);
      }));
    });
  }
  /**
   * Makes `enter` allow navigation within the cell
   *
   * @param {KeyboardEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellKeydownHandler(r, e, n) {
    r.key === "Enter" && r.target === e && (r.preventDefault(), n.forEach((l) => {
      l.setAttribute("tabindex", "0");
    }), n[0].focus());
  }
  /**
   * Removes ability to tab to inner items when focus leaves the cell (and inner items)
   *
   * @param {FocusEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellBlurHandler(r, e, n) {
    r.target === e && !n.includes(r.relatedTarget) && n.forEach((l) => {
      l.setAttribute("tabindex", "-1");
    });
  }
  /**
   * Handles giving focus back to the cell after shift+tabbing on the first inner item or tabbing on the last
   *
   * @param event The event to handle
   * @param cell The grid header cell
   * @param buttons The list of buttons in the cell
   * @param shift Whether to handle shift tab or regular tab
   */
  cellButtonTabHandler(r, e, n, l) {
    r.key === "Tab" && (l && r.shiftKey || !l && !r.shiftKey) && (r.preventDefault(), e.focus(), n.forEach((i) => {
      i.setAttribute("tabindex", "-1");
    }));
  }
  //  **** CLICK & DRAG SCROLLING ****
  /**
   * Initializes the handlers needed for click + drag scrolling
   */
  initScrollListeners() {
    this.agGrid.style.cursor = "grab", this.agGrid.addEventListener("mousedown", (r) => {
      this.scrollMouseDownHandler(r);
    });
  }
  /**
   * Removes the handlers for click + drag scrolling
   */
  removeScrollListeners() {
    this.agGrid.style.cursor = "default", this.agGrid.removeEventListener("mousedown", (r) => {
      this.scrollMouseDownHandler(r);
    });
  }
  /**
   * Handles starting click + drag scrolling on mousedown
   *
   * @param {MouseEvent} event The mousedown event
   */
  scrollMouseDownHandler(r) {
    const e = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), n = e.scrollLeft, l = r.clientX;
    this.agGrid.style.cursor = "grabbing";
    const i = (o) => {
      const m = o.clientX - l;
      e.scrollLeft = n - m;
    }, v = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", i), this.agGrid.removeEventListener("mouseup", v), this.agGrid.removeEventListener("mouseleave", v);
    };
    this.agGrid.addEventListener("mousemove", i), this.agGrid.addEventListener("mouseup", v), this.agGrid.addEventListener("mouseleave", v);
  }
}
function Wt(w) {
  const r = w.previousHeaderPosition.column, e = w.previousHeaderPosition.headerRowIndex;
  let n = w.backwards ? e - 1 : e + 1;
  return n === -1 ? !1 : (n === w.headerRowCount && (n = -1), { headerRowIndex: n, column: r });
}
function Yt(w) {
  return w.backwards ? { column: w.previousCellPosition.column, rowIndex: -1 } : !1;
}
const Zt = ["onClick"], Qt = { class: "md-icon-small flex w-full" }, Xt = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Jt = /* @__PURE__ */ H({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(w) {
    const r = de("iApi"), { t: e } = z();
    return (n, l) => {
      const i = Pe("dropdown-menu"), v = U("truncate");
      return L(), lt(i, {
        class: "relative",
        position: "bottom-end",
        tooltip: f(e)("grid.label.columns"),
        tooltipPlacementAlt: "left",
        centered: !1
      }, {
        header: oe(() => l[0] || (l[0] = [
          s("div", { class: "flex p-8" }, [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "24px",
              width: "24px",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 23 24",
              focusable: "false",
              class: "inline fill-current"
            }, [
              s("g", { id: "format-list-checks_cache966" }, [
                s("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })
              ])
            ])
          ], -1)
        ])),
        default: oe(() => [
          (L(!0), _(at, null, rt(w.columnDefs.filter(
            (o) => o.headerName && o.headerName.length > 0 && !(!f(r).ui.exposeOids && w.systemCols?.has(o.headerName)) && !(!f(r).ui.exposeMeasurements && (w.systemCols?.has(o.headerName) || w.systemCols?.has(o.field)))
          ), (o) => (L(), _("a", {
            "truncate-trigger": "",
            tabindex: "0",
            key: o.headerName,
            onClick: (m) => {
              w.gridApi?.setColumnsVisible([o.field], o.hide), o.hide = !o.hide, n.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center max-w-[268px]"
          }, [
            s("div", Qt, [
              $((L(), _("span", Xt, [
                ie(D(o.headerName), 1)
              ])), [
                [v, {
                  externalTrigger: !0,
                  options: {
                    placement: "left"
                  }
                }]
              ]),
              (L(), _("svg", {
                height: "18",
                width: "18",
                viewBox: "0 0 24 24",
                class: B({ invisible: o.hide })
              }, l[1] || (l[1] = [
                s("g", { id: "done" }, [
                  s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2))
            ])
          ], 8, Zt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), el = { class: "h-full flex items-center justify-center" }, tl = ["placeholder", "aria-label", "disabled"], ll = ["placeholder", "aria-label", "disabled"], al = {
  methods: {
    onParentModelChanged() {
    }
  }
}, rl = /* @__PURE__ */ H({
  ...al,
  __name: "custom-number-filter",
  props: ["params"],
  setup(w) {
    const r = ge(), { t: e } = z(), n = w, l = b(""), i = b(""), v = b(!!n.params.stateManager.columns[n.params.column.colDef.field].filter.static), o = () => {
      k(), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, l.value, "min");
    }, m = () => {
      k(), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, i.value, "max");
    }, g = (x) => typeof x != "number" || isNaN(x), k = () => {
      l.value !== "" && g(l.value) && (l.value = ""), i.value !== "" && g(i.value) && (i.value = "");
      const x = n.params.column.colDef.field;
      i.value === "" && l.value === "" ? n.params.api.setColumnFilterModel(x, null) : i.value !== "" && l.value !== "" ? n.params.api.setColumnFilterModel(x, {
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: i.value
      }) : l.value === "" ? n.params.api.setColumnFilterModel(x, {
        filterType: "number",
        type: "lessThanOrEqual",
        filter: i.value
      }) : n.params.api.setColumnFilterModel(x, {
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }), n.params.api.onFilterChanged();
    };
    return fe(() => {
      l.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field, "min"), i.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field, "max"), o(), m();
    }), (x, y) => (L(), _("div", el, [
      $(s("input", {
        class: B(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[0] || (y[0] = (u) => l.value = u),
        onInput: y[1] || (y[1] = (u) => o()),
        onMousedown: y[2] || (y[2] = O(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = N((u) => {
          f(r).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.min"),
        "aria-label": f(e)("grid.filters.number.min"),
        disabled: v.value
      }, null, 42, tl), [
        [ue, l.value]
      ]),
      y[10] || (y[10] = s("span", { class: "w-12" }, null, -1)),
      $(s("input", {
        class: B(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[5] || (y[5] = (u) => i.value = u),
        onInput: y[6] || (y[6] = (u) => m()),
        onMousedown: y[7] || (y[7] = O(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = N((u) => {
          f(r).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.max"),
        "aria-label": f(e)("grid.filters.number.max"),
        disabled: v.value
      }, null, 42, ll), [
        [ue, i.value]
      ])
    ]));
  }
}), sl = /* @__PURE__ */ he(rl, [["__scopeId", "data-v-ab99947a"]]), nl = { class: "h-full flex items-center justify-center" }, ol = ["placeholder", "aria-label", "disabled"], il = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ul = /* @__PURE__ */ H({
  ...il,
  __name: "custom-text-filter",
  props: ["params"],
  setup(w) {
    const r = ge(), { t: e } = z(), n = w, l = b(""), i = b(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), v = () => {
      l.value = l.value ? l.value : "";
      const o = n.params.column.colDef.field;
      l.value ? n.params.api.setColumnFilterModel(o, {
        filterType: "text",
        type: "contains",
        filter: l.value
      }) : n.params.api.setColumnFilterModel(o, null), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, l.value), n.params.api.onFilterChanged();
    };
    return fe(() => {
      l.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field).toString(), v();
    }), (o, m) => (L(), _("div", nl, [
      $(s("input", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (g) => v()),
        "onUpdate:modelValue": m[1] || (m[1] = (g) => l.value = g),
        onMousedown: m[2] || (m[2] = O(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = N((g) => {
          f(r).mobileView && g.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.column.label.text", [w.params.column.colDef.headerName]),
        "aria-label": f(e)("grid.filters.column.label.text", [w.params.column.colDef.headerName]),
        disabled: i.value
      }, null, 42, ol), [
        [ue, l.value]
      ])
    ]));
  }
}), dl = { class: "h-full flex items-center justify-center" }, pl = ["aria-label", "disabled"], cl = ["value"], ml = {
  methods: {
    onParentModelChanged() {
    }
  }
}, vl = /* @__PURE__ */ H({
  ...ml,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(w) {
    const r = w, e = b(""), n = b([]), l = b(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), i = () => {
      e.value = e.value ? e.value : "";
      const v = r.params.column.colDef.field;
      e.value === "..." || !e.value ? (r.params.api.setColumnFilterModel(v, null), e.value = "") : r.params.api.setColumnFilterModel(v, {
        filterType: "text",
        type: "contains",
        filter: e.value
      }), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, e.value), r.params.api.onFilterChanged();
    };
    return fe(() => {
      e.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field);
      const v = r.params.rowData, o = new Set(v.map((m) => m[r.params.column.colId]));
      n.value = Array.from(o), n.value.unshift("..."), i();
    }), (v, o) => (L(), _("div", dl, [
      $(s("select", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": o[0] || (o[0] = (m) => e.value = m),
        onChange: o[1] || (o[1] = (m) => i()),
        onMousedown: o[2] || (o[2] = O(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (L(!0), _(at, null, rt(n.value, (m) => (L(), _("option", {
          value: m,
          key: m
        }, D(m), 9, cl))), 128))
      ], 42, pl), [
        [At, e.value]
      ])
    ]));
  }
}), fl = /* @__PURE__ */ he(vl, [["__scopeId", "data-v-46624a34"]]), gl = { class: "h-full flex items-center justify-center w-full" }, hl = ["placeholder", "aria-label", "disabled"], yl = ["placeholder", "aria-label", "disabled"], wl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, bl = /* @__PURE__ */ H({
  ...wl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(w) {
    const r = ge(), { t: e } = z(), n = w, l = b(""), i = b(""), v = b(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), o = () => {
      g(), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, l.value, "min");
    }, m = () => {
      g(), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, i.value, "max");
    }, g = () => {
      const k = n.params.column.colDef.field;
      if (i.value === "" && l.value === "")
        n.params.api.setColumnFilterModel(k, null);
      else {
        const x = {
          filterType: "date",
          type: "inRange"
        };
        l.value !== "" && (x.dateFrom = l.value), i.value !== "" && (x.dateTo = i.value), n.params.api.setColumnFilterModel(k, x);
      }
      n.params.api.onFilterChanged();
    };
    return fe(() => {
      l.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field, "min") || "", i.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field, "max") || "", o(), m();
    }), (k, x) => (L(), _("div", gl, [
      $(s("input", {
        class: B(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.min"),
        "aria-label": f(e)("grid.filters.date.min"),
        "onUpdate:modelValue": x[0] || (x[0] = (y) => l.value = y),
        onInput: x[1] || (x[1] = (y) => o()),
        onMousedown: x[2] || (x[2] = O(() => {
        }, ["stop"])),
        onKeypress: x[3] || (x[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: x[4] || (x[4] = N((y) => {
          f(r).mobileView && y.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, hl), [
        [ue, l.value]
      ]),
      x[10] || (x[10] = s("span", { class: "w-12" }, null, -1)),
      $(s("input", {
        class: B(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.max"),
        "aria-label": f(e)("grid.filters.date.max"),
        "onUpdate:modelValue": x[5] || (x[5] = (y) => i.value = y),
        onInput: x[6] || (x[6] = (y) => m()),
        onMousedown: x[7] || (x[7] = O(() => {
        }, ["stop"])),
        onKeypress: x[8] || (x[8] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: x[9] || (x[9] = N((y) => {
          f(r).mobileView && y.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, yl), [
        [ue, i.value]
      ])
    ]));
  }
}), xl = /* @__PURE__ */ he(bl, [["__scopeId", "data-v-e5e48580"]]), Cl = ["content", "disabled", "aria-label"], Ll = /* @__PURE__ */ H({
  __name: "clear-filter",
  props: ["params"],
  setup(w) {
    const r = w, { t: e } = z(), n = b(), l = b(), i = b(), v = () => r.params.clearFilters();
    return ee(async () => {
      await Ee(), l.value = n.value?.closest(".ag-header-cell"), i.value = l.value.closest(".ag-pinned-left-header"), l.value.addEventListener("keydown", async (o) => {
        o.key === "Enter" && (o.stopPropagation(), v(), await Ee(), (i.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.addEventListener("focus", () => {
        n.value._tippy.show();
      }), l.value.addEventListener("blur", () => {
        n.value._tippy.hide();
      });
    }), te(() => {
      l.value && (l.value.removeEventListener("keydown", async (o) => {
        o.key === "Enter" && (o.stopPropagation(), v(), await Ee(), (i.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.removeEventListener("focus", () => {
        n.value._tippy.show();
      }), l.value.removeEventListener("blur", () => {
        n.value._tippy.hide();
      }));
    }), (o, m) => {
      const g = U("tippy");
      return $((L(), _("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: v,
        content: f(e)("grid.filters.clear"),
        disabled: !w.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: n,
        "aria-label": f(e)("grid.filters.clear")
      }, m[0] || (m[0] = [
        s("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "enable-background": "new 0 0 24 24",
          class: "h-24 w-24 fill-current",
          viewBox: "0 0 24 24"
        }, [
          s("g", null, [
            s("rect", {
              fill: "none",
              height: "24",
              width: "24"
            })
          ]),
          s("g", null, [
            s("g", null, [
              s("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }),
              s("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })
            ])
          ])
        ], -1)
      ]), 8, Cl)), [
        [g, { placement: "bottom" }]
      ]);
    };
  }
}), _l = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, El = ["content", "aria-label"], kl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Ml = {
  key: 2,
  class: "flex"
}, Fl = {
  key: 0,
  class: "w-24 inline-block"
}, Al = {
  key: 1,
  class: "customSortDownLabel"
}, $l = {
  key: 2,
  class: "customSortUpLabel"
}, Tl = ["content", "aria-label", "disabled"], Rl = ["content", "aria-label", "disabled"], Sl = /* @__PURE__ */ H({
  __name: "custom-header",
  props: ["params"],
  setup(w) {
    const { t: r } = z(), e = w, n = b(), l = b(0), i = b(!1), v = b(!1), o = b(!1), m = b(null), g = () => {
      const u = m.value?.getAllDisplayedColumns(), A = u.indexOf(e.params.column), S = u[A - 1]?.colDef, q = u[A + 1]?.colDef;
      v.value = A > 3 && !(S?.headerComponentParams?.isStatic ?? S?.isStatic), o.value = A < u.length - 1 && !(q?.headerComponentParams?.isStatic ?? q?.isStatic);
    }, k = () => {
      const u = m.value?.getAllDisplayedColumns(), A = m.value?.getAllGridColumns(), S = A.indexOf(u[u.indexOf(e.params.column) - 1]);
      v.value && (m.value?.moveColumns([e.params.column], S), e.params.api.ensureColumnVisible(A[S]), n.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, x = () => {
      const u = m.value?.getAllDisplayedColumns(), A = m.value?.getAllGridColumns(), S = A.indexOf(u[u.indexOf(e.params.column) + 1]);
      o.value && (m.value?.moveColumns([e.params.column], S), e.params.api.ensureColumnVisible(A[S]));
    }, y = (u) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", u.shiftKey) : l.value === 2 ? e.params.setSort("desc", u.shiftKey) : e.params.setSort("none", u.shiftKey);
    };
    return ee(() => {
      i.value = e.params.column.colDef.sortable, m.value = e.params.api, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), g(), e.params.column.addEventListener("leftChanged", () => {
        g();
      });
    }), te(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        g();
      });
    }), (u, A) => {
      const S = U("truncate"), q = U("tippy");
      return L(), _("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: n
      }, [
        i.value ? (L(), _("div", _l, [
          $((L(), _("button", {
            type: "button",
            onClick: A[0] || (A[0] = (le) => y(le)),
            content: f(r)(`grid.header.sort.${l.value}`),
            "aria-label": f(r)(`grid.header.sort.${l.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            $((L(), _("div", null, [
              ie(D(w.params.displayName), 1)
            ])), [
              [S, { externalTrigger: !0 }]
            ])
          ], 8, El)), [
            [q, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : $((L(), _("span", kl, [
          ie(D(w.params.displayName), 1)
        ])), [
          [S]
        ]),
        i.value ? (L(), _("div", Ml, [
          w.params.enableSorting && l.value === 0 ? (L(), _("span", Fl)) : I("", !0),
          w.params.enableSorting && l.value === 1 ? (L(), _("span", Al, A[3] || (A[3] = [
            s("div", { class: "md-icon-small" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "arrow_upward" }, [
                  s("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
                ])
              ])
            ], -1)
          ]))) : I("", !0),
          w.params.enableSorting && l.value === 2 ? (L(), _("span", $l, A[4] || (A[4] = [
            s("div", { class: "md-icon-small" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "arrow_downward" }, [
                  s("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
                ])
              ])
            ], -1)
          ]))) : I("", !0),
          $((L(), _("button", {
            type: "button",
            content: f(r)("grid.header.reorder.left"),
            "aria-label": f(r)("grid.header.reorder.left"),
            onClick: A[1] || (A[1] = (le) => k()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !v.value
          }, A[5] || (A[5] = [
            s("div", { class: "inline-block" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "keyboard_arrow_left" }, [
                  s("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Tl)), [
            [q, { placement: "top" }]
          ]),
          $((L(), _("button", {
            type: "button",
            content: f(r)("grid.header.reorder.right"),
            "aria-label": f(r)("grid.header.reorder.right"),
            onClick: A[2] || (A[2] = (le) => x()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !o.value
          }, A[6] || (A[6] = [
            s("div", { class: "inline-block" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "keyboard_arrow_right" }, [
                  s("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Rl)), [
            [q, { placement: "top" }]
          ])
        ])) : I("", !0)
      ], 512);
    };
  }
}), Dl = ["content", "aria-label"], Gl = /* @__PURE__ */ H({
  __name: "details-button-renderer",
  props: ["params"],
  setup(w) {
    const r = w, { t: e } = z(), n = de("iApi"), l = b(), i = async () => {
      const v = r.params.data, o = v.rvUid, m = n.geo.layer.getLayer(o), g = He(r.params.layerCols, m), k = await m.getGraphic(v[g], {
        getAttribs: !0
      });
      n.event.emit(
        J.DETAILS_TOGGLE,
        {
          data: k.attributes,
          uid: o,
          format: Rt.ESRI
        },
        !0
      ), r.params.isTeleport && n.scrollToInstance();
    };
    return ee(() => {
      r.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && i();
      }), r.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), r.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), te(() => {
      r.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && i();
      }), r.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), r.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (v, o) => {
      const m = U("tippy");
      return $((L(), _("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(e)("grid.cells.details"),
        onClick: i,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": f(e)("grid.cells.details")
      }, o[0] || (o[0] = [
        s("svg", {
          class: "m-auto",
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16"
        }, [
          s("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          }),
          s("path", {
            style: { fill: "#979797" },
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          })
        ], -1)
      ]), 8, Dl)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Il = ["content", "aria-label"], Vl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Pl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Hl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Bl = ["innerHTML"], Nl = /* @__PURE__ */ H({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(w) {
    const r = b("none"), e = w, n = de("iApi"), l = St(), i = b(), { t: v } = z(), o = P(() => {
      const k = l.getLayerByUid(e.params.data.rvUid);
      return !!k && k.mapLayer;
    }), m = () => {
      if (r.value !== "none")
        return;
      r.value = "zooming";
      const k = l.getLayerByUid(e.params.data.rvUid);
      if (k === void 0 || !k.isLoaded) {
        g("error");
        return;
      }
      const x = He(e.params.layerCols, k), y = e.params.data[x];
      k.zoomToFeature(y).then((u) => {
        u ? (g("zoomed"), n.updateAlert(n.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && n.scrollToInstance()) : g("error");
      });
    }, g = (k) => {
      k === "zoomed" || k === "error" ? setTimeout(() => {
        r.value = k, i.value?._tippy.show(), setTimeout(() => {
          i.value?._tippy.hide(), r.value = "none";
        }, 3e3);
      }, 300) : r.value = k;
    };
    return ee(() => {
      o.value && (e.params.eGridCell.addEventListener("keydown", (k) => {
        k.key === "Enter" && r.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        i.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        i.value?._tippy.hide();
      }));
    }), te(() => {
      o.value && (e.params.eGridCell.removeEventListener("keydown", (k) => {
        k.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        i.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        i.value?._tippy.hide();
      }));
    }), (k, x) => {
      const y = U("tippy");
      return o.value ? $((L(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(v)(`grid.cells.zoom${r.value === "none" ? "" : `.${r.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: i,
        "aria-label": f(v)(`grid.cells.zoom${r.value === "none" ? "" : `.${r.value}`}`)
      }, [
        r.value === "zooming" ? (L(), _("div", Vl)) : r.value === "zoomed" ? (L(), _("svg", Pl, x[0] || (x[0] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : r.value === "error" ? (L(), _("svg", Hl, x[1] || (x[1] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (L(), _("span", {
          key: 3,
          innerHTML: f(n).ui.getZoomIcon()
        }, null, 8, Bl))
      ], 8, Il)), [
        [y, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), Ol = ["content"], Ul = ["innerHTML"], zl = /* @__PURE__ */ H({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(w) {
    const r = w, e = de("iApi"), n = b(), l = P(() => {
      const v = Object.assign({}, r.params.data), o = e.geo.layer.getLayer(v.rvUid), m = r.params.config.displayOn;
      return !(!o || m === "geo" && !o.mapLayer || m === "data" && o.mapLayer);
    }), i = () => {
      const v = Object.assign({}, r.params.data), o = v.rvUid, m = e.geo.layer.getLayer(o), g = He(r.params.layerCols, m), k = v[g];
      m.getGraphic(k, { getAttribs: !0 }).then((x) => {
        e.event.emit(r.params.config.actionEvent, {
          data: x.attributes,
          layer: m,
          uid: o,
          oid: k
        });
      });
    };
    return ee(() => {
      r.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && i();
      }), r.params.eGridCell.addEventListener("focus", () => {
        n.value._tippy.show();
      }), r.params.eGridCell.addEventListener("blur", () => {
        n.value._tippy.hide();
      });
    }), te(() => {
      r.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && i();
      }), r.params.eGridCell.removeEventListener("focus", () => {
        n.value._tippy.show();
      }), r.params.eGridCell.removeEventListener("blur", () => {
        n.value._tippy.hide();
      });
    }), (v, o) => {
      const m = U("tippy");
      return l.value ? $((L(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: r.params.config.tooltip,
        onClick: i,
        tabindex: "-1",
        ref_key: "el",
        ref: n
      }, [
        s("span", {
          innerHTML: r.params.config.icon
        }, null, 8, Ul)
      ], 8, Ol)), [
        [m, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), Kl = ["name", "content", "innerHTML"], jl = ["content"], ql = /* @__PURE__ */ H({
  __name: "cell-renderer",
  props: ["params"],
  setup(w) {
    const r = ge(), e = de("iApi"), { t: n } = z(), l = b(), i = b(), v = b(!1), o = w, m = P(() => r.mobileView), g = () => {
      i.value?.textContent && (v.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(i.value?.textContent), setTimeout(() => {
        v.value = !1;
      }, 2e3));
    }, k = P(() => o.params.type === "number" ? o.params.value == null ? "" : e.ui.formatNumber(o.params.value) : o.params.type === "date" ? o.params.value == null ? "" : new Date(o.params.value).toISOString().slice(0, 10) : o.params.type === "string" ? !o.params.value || /<a[^>]*>[^<]+<\/a>/g.test(o.params.value) ? o.params.value : It(o.params.value, {
      target: "_blank",
      validate: {
        url: (y) => /^https?:\/\//.test(y)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), x = P(() => /<a[^>]*>[^<]+<\/a>/g.test(o.params.value) || /(http(s)?:\/\/.*)/g.test(o.params.value));
    return ee(() => {
      o.params.eGridCell.addEventListener("dblclick", () => {
        g();
      }), o.params.eGridCell.addEventListener("keydown", (y) => {
        y.ctrlKey && y.code === "KeyC" && g();
      }), o.params.eGridCell.addEventListener("blur", () => {
        i.value._tippy.hide(), l.value?._tippy.hide();
      }), o.params.eGridCell.addEventListener("focus", () => {
        i.value?._tippy.show(), setTimeout(() => {
          document.activeElement === o.params.eGridCell && l.value?._tippy.show();
        }, 1e3), i.value._tippy.reference.clientWidth >= i.value._tippy.reference.scrollWidth && i.value._tippy.hide();
      });
    }), te(() => {
      o.params.eGridCell.removeEventListener("dblclick", () => {
        g();
      }), o.params.eGridCell.removeEventListener("keydown", (y) => {
        y.ctrlKey && y.code === "KeyC" && g();
      }), o.params.eGridCell.removeEventListener("blur", () => {
        i.value._tippy.hide(), l.value?._tippy.hide();
      }), o.params.eGridCell.removeEventListener("focus", () => {
        i.value._tippy.show(), l.value?._tippy.show();
      });
    }), (y, u) => {
      const A = U("truncate"), S = U("tippy");
      return L(), _("div", null, [
        $(s("div", {
          name: k.value,
          content: k.value,
          tabindex: "-1",
          innerHTML: k.value,
          ref_key: "el",
          ref: i
        }, null, 8, Kl), [
          [A, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: m.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: x.value
            }
          }]
        ]),
        i.value?.textContent ? $((L(), _("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: f(n)(`grid.label.${v.value ? "copied" : "copy"}`)
        }, null, 8, jl)), [
          [S, {
            triggerTarget: i.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : I("", !0)
      ]);
    };
  }
}), Wl = { class: "pl-8" }, Yl = { class: "flex flex-col justify-center items-center h-full" }, Zl = { class: "flex flex-row" }, Ql = { class: "font-bold text-2xl" }, Xl = { class: "mt-20 text-xl" }, Jl = { class: "my-20" }, ea = { class: "text-sm" }, ta = ["aria-label"], la = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, aa = { class: "flex flex-1 flex-col max-w-full mr-8" }, ra = { class: "w-full font-bold" }, sa = { class: "w-full text-sm" }, na = { key: 0 }, oa = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, ia = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, ua = ["aria-label", "placeholder"], da = { class: "-ml-30 text-gray-500 search-clear-container" }, pa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, ca = ["aria-label"], ma = { class: "pb-2 flex ml-auto justify-end" }, va = ["content", "aria-label"], fa = ["aria-label"], ga = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ha = { class: "grow" }, ya = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, wa = ["aria-label"], ba = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, xa = { class: "grow" }, Ca = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, La = ["aria-label"], _a = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ea = { class: "grow" }, ka = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ma = ["aria-label"], Fa = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Aa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, $a = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Ta = { class: "grow" }, Ra = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Sa = ["aria-label"], Da = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ga = { class: "grow" }, Ia = ["content"], Va = /* @__PURE__ */ H({
  __name: "table-component",
  props: {
    panel: {
      type: st,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(w) {
    Ut.registerModules([zt]), Kt({ theme: "legacy" });
    const r = [ne.OID, ne.DOUBLE, ne.SINGLE, ne.INTEGER], e = de("iApi"), n = nt(), l = ge(), i = P(() => l.mobileView), v = b(!i.value), o = b(), m = $t("gridContainer"), { t: g, locale: k } = z(), x = () => Tt()?.proxy?.$forceUpdate(), y = w, u = b({
      id: "dummy",
      layerIds: [],
      state: new Ht(),
      fieldMap: {}
    }), A = b(!0), S = b(null), q = b(), le = b(), W = b(!1), ae = b(!1), pe = b([]), Me = b(0), Z = b([]), ye = b([]), Fe = b(""), re = b([]), ce = b([]), we = b("OBJECTID"), Ae = b(void 0), it = tt.onCellKeyPress, K = b({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = b({}), me = b({}), Be = b(n.grids[y.gridId].layerIds), V = P(() => n.grids[y.gridId] ? Be.value.map((a) => e.geo.layer.getLayer(a)).filter((a) => a !== void 0) : []), Ne = P(
      () => u.value.state.filtered || u.value.state.searchFilter
    ), $e = b(/* @__PURE__ */ new Set()), xe = b([]), T = P(() => S.value), Ce = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((t, h) => {
        const d = T.value.getAllDisplayedColumns()?.[h].getColDef();
        t.setAttribute("aria-label", d?.headerName ?? g("grid.label.specialColumn"));
      });
    }, Oe = () => {
      o.value?.querySelectorAll('[data-ref$="Viewport"]')?.forEach((t) => {
        t.setAttribute("tabindex", "-1");
      });
    }, Ue = P(
      () => V.value.some((a) => a.layerState === Dt.LOADED && a.visibility)
    ), ut = (a) => {
      S.value = a.api;
      let t = u.value.state.title;
      t || (t = e.geo.layer.getLayer(y.gridId)?.name || y.gridId), Fe.value = t, Re(), ce.value.length > 0 && T.value.autoSizeAllColumns(), Ce(), Oe(), T.value.addEventListener("rowDataUpdated", Ce), Z.value.push(
        e.event.on(J.FILTER_CHANGE, ({ uid: h, filterKey: p }) => {
          p !== _e.GRID && h && V.value.map((d) => d.uid).includes(h) && Q();
        })
      ), Z.value.push(
        e.event.on(
          J.LAYER_VISIBILITYCHANGE,
          ({ layer: h }) => {
            h.uid && V.value.map((p) => p.uid).includes(h.uid) && Q();
          }
        )
      ), Z.value.push(
        e.event.on(J.LAYER_RELOAD_END, (h) => {
          h.loadPromise().then(() => {
            V.value.map((p) => p.uid).includes(h.uid) && Q();
          });
        })
      ), Z.value.push(
        e.event.on(J.LANG_CHANGE, () => {
          T.value.redrawRows({
            force: !0
          });
        })
      ), Z.value.push(
        e.event.on(
          J.MAP_EXTENTCHANGE,
          et(100, () => {
            u.value.state.filterByExtent && Q();
          })
        )
      ), Z.value.push(
        e.event.on(J.LAYER_REMOVE, (h) => {
          Be.value.includes(h.id) && V.value.length !== 0 && Ye();
        })
      ), Q();
    }, dt = () => {
      T.value.autoSizeAllColumns(), Ae.value = new tt(o.value, S.value), Ce(), Oe();
    }, Te = () => {
      T.value.setGridOption("quickFilterText", u.value.state.searchFilter);
    }, ze = () => {
      u.value.state.searchFilter = "", Te();
    }, pt = () => {
      ze(), je(), Q();
    }, ct = () => {
      u.value.state.filterByExtent = !u.value.state.filterByExtent, Q();
    }, mt = () => {
      const a = T.value.getColumnDefs();
      u.value.state.colFilter = !u.value.state.colFilter, a?.forEach((t) => {
        t.floatingFilter = u.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", a);
    }, Re = () => {
      S.value && !W.value && (u.value.state.searchFilter !== "" && Te(), u.value.state.applyToMap && Se(), Ee(() => {
        const a = T.value.getAllDisplayedColumns();
        a && a.length > 0 && T.value.refreshCells({
          columns: [a[0]]
          // Limits the refresh action to the row number column.
        }), Ke();
      }));
    }, Ke = () => {
      K.value.firstRow = T.value.getFirstDisplayedRowIndex() + 1, K.value.lastRow = T.value.getLastDisplayedRowIndex() + 1, K.value.visibleRows = T.value.getDisplayedRowCount();
    }, je = () => {
      T.value.setFilterModel({}), u.value.state.clearFilters(), T.value.refreshHeader();
    }, vt = () => {
      v.value = !v.value;
      const a = v.value ? "left" : null, t = T.value.getAllDisplayedColumns();
      t && t.length >= 3 && T.value.setColumnsPinned(t.slice(1, 3), a);
    }, ft = () => {
      const a = T.value.getAllDisplayedColumns().filter((p) => !p.getColDef().headerComponentParams?.preventExport), t = document.createElement("p"), h = (p) => (t.innerHTML = p, t.textContent || t.innerText);
      T.value.exportDataAsCsv({
        columnKeys: a,
        suppressQuotes: !0,
        processCellCallback: (p) => {
          const d = p.column.getColDef().cellRendererParams;
          return !p.value || d && d.type === "number" ? p.value : d && d.type === "date" ? `"${new Date(p.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${h(p.value).replace(/"/g, '""')}"`;
        }
      });
    }, gt = (a, t) => {
      a.floatingFilterComponent = "dateFloatingFilter", a.filterParams.comparator = function(h, p) {
        if (!h)
          return 0;
        const d = new Date(p);
        return d.getUTCFullYear() > h.getUTCFullYear() ? 1 : d.getUTCFullYear() < h.getUTCFullYear() ? -1 : d.getUTCMonth() > h.getUTCMonth() ? 1 : d.getUTCMonth() < h.getUTCMonth() ? -1 : d.getUTCDate() - h.getUTCDate();
      }, a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      };
    }, ht = (a, t, h) => {
      a.floatingFilterComponent = "selectorFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: h,
        rowData: t
      };
    }, yt = (a, t) => {
      a.floatingFilterComponent = "numberFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      };
    }, wt = (a, t) => {
      a.floatingFilterComponent = "textFloatingFilter", a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      }, a.filterParams.textMatcher = function(p) {
        if (!p.filterText || typeof p.filterText != "string") return !0;
        const d = p.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${d}.*`).test(p.value);
      };
      const h = function(p) {
        if (!p || typeof p != "string") return p;
        let d = p.toLowerCase();
        return d = d.replace(new RegExp("[àáâãäå]", "g"), "a"), d = d.replace(new RegExp("æ", "g"), "ae"), d = d.replace(new RegExp("ç", "g"), "c"), d = d.replace(new RegExp("[èéêë]", "g"), "e"), d = d.replace(new RegExp("[ìíîï]", "g"), "i"), d = d.replace(new RegExp("ñ", "g"), "n"), d = d.replace(new RegExp("[òóôõö]", "g"), "o"), d = d.replace(new RegExp("œ", "g"), "oe"), d = d.replace(new RegExp("[ùúûü]", "g"), "u"), d = d.replace(new RegExp("[ýÿ]", "g"), "y"), d;
      };
      a.filterParams.textFormatter = function(p) {
        return h(p);
      };
    }, bt = (a, t, h) => {
      if (a.field === "rvRowIndex") {
        const p = {
          field: "rvRowIndex",
          headerName: "",
          headerComponentParams: { preventExport: !0 },
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressHeaderMenuButton: !0,
          suppressHeaderContextMenu: !0,
          floatingFilter: u.value.state.colFilter,
          pinned: "left",
          maxWidth: 42,
          cellStyle: () => ({
            "padding-left": "2px",
            "padding-right": "2px",
            display: "flex",
            "justify-content": "center"
          }),
          floatingFilterComponent: "clearFloatingFilter",
          suppressFloatingFilterButton: !0,
          floatingFilterComponentParams: {
            stateManager: h,
            clearFilters: je
          },
          filter: !0
        };
        t.push(p);
      }
      if (a.field === "rvInteractive") {
        const p = u.value.state.controls, d = {
          field: "rvDetailsButton",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          pinned: i.value ? null : "left",
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: Gl,
          cellRendererParams: {
            $iApi: e,
            t: g,
            layerCols: me.value,
            isTeleport: y.panel.teleport !== void 0
          }
        };
        if (p.includes("details") && t.push(d), Ft.value) {
          const C = {
            field: "rvZoomButton",
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: i.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Nl,
            cellRendererParams: {
              $iApi: e,
              layerCols: me.value,
              isTeleport: y.panel.teleport !== void 0
            }
          };
          p.includes("zoom") && t.push(C);
        }
        p.forEach((C) => {
          if (C === "zoom" || C === "details") return;
          const c = {
            field: `rvCustomButton_${typeof C == "string" ? C : C.actionEvent}`,
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: i.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: zl,
            cellRendererParams: {
              $iApi: e,
              t: g,
              layerCols: me.value,
              config: C
            }
          };
          t.push(c);
        });
      }
      if (a.field === "rvSymbol") {
        const p = {
          field: "rvSymbol",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellDataType: !1,
          cellRenderer: (d) => {
            const C = e.geo.layer.getLayer(d.data.rvUid);
            if (C === void 0) return;
            const c = document.createElement("span"), M = d.data[we.value];
            return C.getIcon(M).then((F) => {
              c.innerHTML = F;
            }), c;
          },
          cellStyle: () => ({
            paddingTop: "3px",
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "0px"
          }),
          cellRendererParams: {
            $iApi: e,
            oidField: we.value
          }
        };
        t.push(p);
      }
    }, xt = () => !Object.values(be.value).every((a) => a === void 0), Ct = (a) => {
      const t = be.value[a.data.rvUid];
      return t === void 0 || t.includes(a.data[we.value]);
    }, Q = async () => {
      const a = new Gt(), t = xe.value.slice().map((p) => p.getPromise());
      xe.value.push(a), await Promise.all(t), await Promise.all(
        V.value.map(async (p) => {
          p && p.visibility ? await p.getFilterOIDs(
            [_e.GRID],
            u.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((d) => {
            be.value[p.uid] = d;
          }) : be.value[p.uid] = [];
        })
      ), T.value.onFilterChanged(), a.resolveMe();
      const h = xe.value.indexOf(a);
      h === -1 ? console.error("Grid could not find filter blocker in filter queue") : xe.value.splice(h, 1);
    }, Lt = () => {
      u.value.state.applyToMap = !u.value.state.applyToMap, Se();
    }, Se = () => {
      V.value.filter((a) => a.mapLayer).forEach((a) => {
        if (!u.value.state.applyToMap)
          a.setSqlFilter(_e.GRID, "");
        else {
          const t = _t(a.id);
          a.setSqlFilter(_e.GRID, t);
        }
      });
    }, _t = (a) => {
      const t = T.value.getFilterModel(), h = [];
      if (Object.keys(t || {}).forEach((p) => {
        const d = De(a, p);
        d ? h.push(Et(d.origAttr, t[p])) : h.push("1=2");
      }), u.value.state.searchFilter && u.value.state.searchFilter.length > 0) {
        const p = kt(a) || "1=2";
        p.length > 0 && h.push(`(${p})`);
      }
      return h.join(" AND ");
    }, Et = (a, t) => {
      switch (t.filterType) {
        case "number": {
          switch (t.type) {
            case "greaterThanOrEqual":
              return `${a} >= ${t.filter}`;
            case "lessThanOrEqual":
              return `${a} <= ${t.filter}`;
            case "inRange":
              return `${a} >= ${t.filter} AND ${a} <= ${t.filterTo}`;
          }
          break;
        }
        case "text": {
          const h = t.filter.replace(/'/g, /''/);
          if (h !== "") {
            const p = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let d = h, C = "", c = p.exec(h), M = 0;
            for (; c; )
              C = C + h.substr(M, c.index - M) + c[0].slice(-1), M = c.index + 2, d = h.substr(c.index + 2), c = p.exec(h);
            C = C + d, C = C.replace(/%/g, "ௌ%"), C = C.replace(/_/g, "ௌ_"), C = `*${C}`;
            const F = `UPPER(${a}) LIKE '${C.replace(/\*/g, "%").toUpperCase()}%'`;
            return F.includes("ௌ%") || F.includes("ௌ_") ? `${F} ESCAPE 'ௌ'` : F;
          }
          break;
        }
        case "date": {
          const h = new Date(t.dateFrom ?? 0), p = new Date(t.dateTo ?? 864e13), d = h ? `${h.getMonth() + 1}/${h.getDate()}/${h.getFullYear()}` : void 0, C = p ? `${p.getMonth() + 1}/${p.getDate()}/${p.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${a} >= DATE '${d}'`;
            case "lessThan":
              return `${a} <= DATE '${d}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${a} >= DATE '${d}' AND ${a} <= DATE '${C}'`;
          }
        }
      }
    }, kt = (a) => {
      const h = u.value.state.searchFilter.replace(/'/g, "''").split(" "), p = [];
      T.value.forEachNodeAfterFilterAndSort((c) => {
        p.push(c);
      });
      const d = T.value.getAllDisplayedColumns().filter(
        (c) => (c.colDef.filter === "agTextColumnFilter" || c.colDef.filter === "agNumberColumnFilter") && De(a, c.getColId())
      ), C = [];
      return p.forEach((c) => {
        let M = !0, F = "";
        for (const R of h) {
          const E = new RegExp(`.*${R.split(" ").join(".*").toUpperCase()}`), G = `%${R.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let Y = !1;
          for (const Ge of d ?? []) {
            const ve = Ge.getColId(), Le = De(a, Ge.getColId())?.origAttr, Xe = Ge.getColDef();
            if (c.data[ve] === void 0)
              Y = !1;
            else if (Xe.filter === "agTextColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve].toString();
              if (X !== null && E.test(X.toUpperCase())) {
                F ? F = F.concat(" AND ", `(UPPER(${Le}) LIKE '${G}%')`) : F = F.concat("(", `(UPPER(${Le}) LIKE '${G}%')`), C.includes(F + ")") ? Y = !1 : Y = !0;
                break;
              }
            } else if (Xe.filter === "agNumberColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve];
              if (X !== null && E.test(X)) {
                F ? F = F.concat(" AND ", `(${Le} = ${X})`) : F = F.concat("(", `(${Le} = ${X})`), Y = !C.includes(F + ")");
                break;
              }
            }
          }
          if (!Y) {
            M = !1;
            break;
          }
        }
        M && C.push(F + ")");
      }), C.join(" OR ");
    }, Mt = (a) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(a.key) && a.stopPropagation();
    }, qe = () => {
      We(), y.panel.isOpen && y.panel.close();
    }, We = () => {
      (W.value || ae.value) && V.value.forEach((a) => {
        a.abortAttributeLoad(), a.clearFeatureCache();
      });
    }, j = P(() => {
      const a = V.value.map((p) => p.visibility && p.canModifyLayer && p.mapLayer), t = V.value.some(
        (p) => p.visibility && p.mapLayer && !p.canModifyLayer
      ), h = a.some(Boolean);
      return t && h ? "partial" : h ? "enabled" : "disabled";
    }), Ft = P(
      () => V.value.some((a) => a.isLoaded && a.supportsFeatures && a.mapLayer)
    ), De = (a, t) => ot(me.value, a, t), Ye = async () => {
      const a = V.value.filter((c) => c.supportsFeatures && c.isLoaded);
      a.length === 0 && qe(), Me.value = a.reduce((c, { featureCount: M }) => c + M, 0), pe.value = new Array(V.value.length).fill(0), a.forEach((c, M) => pe.value[M] += c.downloadedAttributes()), a.forEach((c, M) => {
        ye.value.push(
          Ie(
            () => c.downloadedAttributes(),
            (F) => {
              pe.value[M] = F;
            }
          )
        );
      }), await Promise.all(a.map((c) => c.loadPromise()));
      const t = a.map(async (c) => {
        const M = await Ve(c).getTabularAttributes(), F = u?.value?.state?.state;
        if (F?.columns && F.columnMetadata?.exclusiveColumns) {
          const R = F.columns.map((E) => E.field);
          M.columns = M.columns.filter((E) => R.includes(E.data));
        }
        return M;
      }), [h, p] = await Vt(Promise.all(t));
      if (h) {
        console.error(h), ae.value = !0, W.value = !1;
        return;
      }
      if (a.every((c) => c.attribLoadAborted())) {
        W.value = !1;
        return;
      }
      const d = {
        columns: [],
        rows: [],
        fields: [],
        oidField: ""
      };
      p.forEach((c, M) => {
        const F = [], R = a[M].id;
        c.columns.forEach((E) => {
          u.value.fieldMap && u.value.fieldMap[E.data] ? (F.push({
            origAttr: E.data,
            mappedAttr: u.value.fieldMap[E.data]
          }), E.data = u.value.fieldMap[E.data], E.title = E.data) : F.push({
            origAttr: E.data,
            mappedAttr: void 0
          }), d.columns.map((G) => G.data).includes(E.data) || d.columns.push(E);
        }), d.rows = d.rows.concat(
          c.rows.map((E) => {
            if (u.value.fieldMap)
              for (const [G, Y] of Object.entries(u.value.fieldMap))
                E[G] !== void 0 && E[Y] === void 0 && (E[Y] = E[G], delete E[G]);
            return E;
          })
        ), d.fields = d.fields.concat(
          c.fields.map((E) => ((!e.ui.exposeOids && E.type === "oid" || !e.ui.exposeMeasurements && (E.name.toLowerCase() === "shape_length" || E.name.toLowerCase() === "shape_area")) && $e.value.add(E.name), {
            name: u.value.fieldMap && u.value.fieldMap[E.name] ? u.value.fieldMap[E.name] : E.name,
            type: E.type,
            alias: E.alias ?? void 0,
            length: E.length ?? void 0
          }))
        ), d.oidField = u.value.fieldMap && u.value.fieldMap[c.oidField] ? u.value.fieldMap[c.oidField] : c.oidField, me.value[R] = F;
      }), we.value = d.oidField;
      for (let c = 0; c < d.rows.length; c++)
        for (const [M] of Object.entries(d.rows[c]))
          e.ui.isPlainText(d.rows[c][M]) && (d.rows[c][M] = e.ui.escapeHtml(d.rows[c][M]));
      ["rvRowIndex", "rvInteractive", "rvSymbol"].map((c) => ({
        data: c,
        title: "",
        special: !0
      })).concat(d.columns).forEach((c) => {
        u.value.state.columns[c.data] === void 0 && (u.value.state.columns[c.data] = new Bt({
          field: c.data,
          title: c.title
        })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && $e.value.has(c.data) && (u.value.state.columns[c.data].visible = !1);
        const M = u.value.state.columns[c.data], F = M.filter.type === "selector", R = {
          headerName: M.title ?? c.title,
          headerComponent: "agColumnHeader",
          headerComponentParams: {
            sort: M.sort
          },
          field: c.data ?? c,
          sortable: !0,
          lockPosition: !0,
          filterParams: {},
          floatingFilter: u.value.state.colFilter && M.searchable,
          hide: !M.visible,
          minWidth: M.width,
          maxWidth: M.width ?? 400,
          cellRenderer: (E) => E.value,
          suppressHeaderKeyboardEvent: (E) => {
            const G = E.event;
            return E.headerRowIndex === 0 && (G.key === "Enter" || !G.target.classList.contains("ag-header-cell") && G.key === "Tab");
          }
        };
        if (c.special)
          bt(R, re.value, u.value.state);
        else {
          const E = d.fields.find((G) => G.name === R.field);
          R.cellRenderer = M.template === "" ? ql : e.component(M.template), R.autoHeight = !0, r.indexOf(E.type) > -1 ? (yt(R, u.value.state), R.filter = "agNumberColumnFilter", R.cellRendererParams = {
            type: "number"
          }) : E.type === ne.DATE ? (gt(R, u.value.state), R.filter = "agDateColumnFilter", R.minWidth = 400, R.cellRendererParams = {
            type: "date"
          }) : E.type === ne.STRING && (F ? ht(R, d.rows, u.value.state) : wt(R, u.value.state), R.filter = "agTextColumnFilter", R.cellRendererParams = {
            type: "string"
          }), re.value.push(R);
        }
      }), ce.value = Ve(d.rows), re.value = Ve(re.value), Re(), W.value = !1;
    }, Ze = (a) => {
      a.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, Qe = () => {
      m.value._tippy.hide();
    };
    return ee(() => {
      m.value?.addEventListener("keyup", Ze), m.value?.addEventListener("blur", Qe);
    }), fe(() => {
      u.value = n.grids[y.gridId], W.value = !0, x(), K.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, le.value = {
        agColumnHeader: Sl,
        numberFloatingFilter: sl,
        textFloatingFilter: ul,
        selectorFloatingFilter: fl,
        dateFloatingFilter: xl,
        clearFloatingFilter: Ll
      }, q.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          Se(), Re();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((a) => {
            a._tippy && o.value?.contains(a._tippy.reference) && a._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          Ke();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: Yt,
        // tab vertically instead of horizontally
        tabToNextHeader: Wt,
        onModelUpdated: et(300, () => {
          T.value.autoSizeAllColumns(), Ce();
        })
      }, Ye(), j.value === "partial" && e.notify.show(Je.WARNING, e.$i18n.t("layer.filterwarning")), ye.value.push(
        Ie(k, () => {
          A.value = !1, setTimeout(() => {
            A.value = !0;
          }, 10);
        })
      ), ye.value.push(
        Ie(j, (a) => {
          a === "partial" && e.notify.show(Je.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), te(() => {
      We(), Z.value.forEach((a) => e.event.off(a)), ye.value.forEach((a) => a()), Ae.value?.removeAccessibilityListeners(), Ae.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", Ze), m.value?.removeEventListener("blur", Qe);
    }), (a, t) => {
      const h = Pe("dropdown-menu"), p = U("truncate"), d = U("tippy");
      return L(), _("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: o
      }, [
        $(s("div", null, [
          s("p", Wl, D(f(g)("grid.splash.error")), 1)
        ], 512), [
          [se, ae.value]
        ]),
        $(s("div", Yl, [
          s("div", Zl, [
            s("span", Ql, D(pe.value.reduce((C, c) => C + c, 0)), 1),
            t[12] || (t[12] = s("svg", {
              class: "stroke-black stroke-1",
              height: "50",
              width: "25"
            }, [
              s("line", {
                x1: "0",
                y1: "50",
                x2: "25",
                y2: "0"
              })
            ], -1)),
            s("span", Xl, D(Me.value), 1)
          ]),
          s("div", Jl, [
            s("span", ea, D(pe.value.reduce((C, c) => C + c, 0) < Me.value ? f(g)("grid.splash.loading") : f(g)("grid.splash.building")), 1)
          ]),
          s("div", null, [
            s("button", {
              type: "button",
              onClick: qe,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": f(g)("grid.splash.cancel")
            }, D(f(g)("grid.splash.cancel")), 9, ta)
          ])
        ], 512), [
          [se, W.value && !ae.value]
        ]),
        $(s("div", la, [
          s("div", aa, [
            $((L(), _("div", ra, [
              ie(D(Fe.value), 1)
            ])), [
              [se, Fe.value !== ""],
              [p]
            ]),
            $((L(), _("div", sa, [
              ie(D((!Ue.value && K.value.visibleRows === 0 ? `${f(g)("grid.filters.label.hidden")} — ` : "") + f(g)("grid.filters.label.info", {
                range: K.value.visibleRows !== 0 ? `${K.value.firstRow} - ${K.value.lastRow}` : "0",
                total: K.value.visibleRows
              })) + " ", 1),
              K.value.visibleRows !== ce.value.length && Ue.value ? (L(), _("span", na, D(f(g)("grid.filters.label.filtered", {
                max: ce.value.length
              })), 1)) : I("", !0)
            ])), [
              [p]
            ])
          ]),
          s("div", oa, [
            $(s("div", ia, [
              $(s("input", {
                onInput: t[0] || (t[0] = (C) => Te()),
                onKeypress: t[1] || (t[1] = N(O(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = N((C) => {
                  f(l).mobileView && C?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (C) => u.value.state.searchFilter = C),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": f(g)("grid.filters.label.global"),
                placeholder: f(g)("grid.filters.label.global")
              }, null, 40, ua), [
                [ue, u.value.state.searchFilter]
              ]),
              s("div", da, [
                u.value.state.searchFilter.length < 3 ? (L(), _("svg", pa, t[13] || (t[13] = [
                  s("g", { id: "search_cache224" }, [
                    s("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (L(), _("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: t[4] || (t[4] = (C) => ze()),
                  "aria-label": f(g)("grid.search.clear")
                }, t[14] || (t[14] = [
                  s("svg", {
                    "data-v-486a0302": "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    class: "fill-current w-18 h-18 mt-2"
                  }, [
                    s("path", {
                      "data-v-486a0302": "",
                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                  ], -1)
                ]), 8, ca))
              ])
            ], 512), [
              [se, u.value.state.search]
            ]),
            s("div", ma, [
              ke(Jt, {
                gridApi: S.value,
                columnDefs: re.value,
                systemCols: $e.value,
                onRefreshHeaders: t[5] || (t[5] = (C) => S.value.refreshHeader())
              }, null, 8, ["gridApi", "columnDefs", "systemCols"]),
              $((L(), _("button", {
                type: "button",
                class: B(["grid-clearall p-4 h-40", Ne.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
                onClick: t[6] || (t[6] = (C) => Ne.value && pt()),
                content: f(g)("grid.clearAll"),
                "aria-label": f(g)("grid.clearAll")
              }, t[15] || (t[15] = [
                s("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  width: "24px",
                  viewBox: "0 0 24 24",
                  class: "inline fill-current"
                }, [
                  s("g", { id: "filter_cache958" }, [
                    s("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
                  ])
                ], -1)
              ]), 10, va)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              ke(h, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: f(g)("panels.controls.optionsMenu"),
                centered: !1
              }, {
                header: oe(() => t[16] || (t[16] = [
                  s("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: "fill-current m-8 w-24 h-24"
                  }, [
                    s("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                  ], -1)
                ])),
                default: oe(() => [
                  s("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", {
                      hover: j.value !== "disabled" ? "none" : "text-black",
                      disabled: j.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (C) => j.value !== "disabled" && Lt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.filters.apply")
                  }, [
                    s("div", ga, [
                      t[18] || (t[18] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      s("span", ha, D(f(g)("grid.label.filters.apply")), 1),
                      j.value !== "disabled" && u.value.state.applyToMap ? (L(), _("svg", ya, t[17] || (t[17] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, fa),
                  s("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (C) => mt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.filters.show")
                  }, [
                    s("div", ba, [
                      t[20] || (t[20] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      s("span", xa, D(f(g)("grid.label.filters.show")), 1),
                      u.value.state.colFilter ? (L(), _("svg", Ca, t[19] || (t[19] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, wa),
                  s("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", {
                      hover: j.value !== "disabled" ? "none" : "text-black",
                      disabled: j.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (C) => j.value !== "disabled" && ct()),
                    role: "button",
                    "aria-label": f(g)("grid.filters.label.extent")
                  }, [
                    s("div", _a, [
                      t[22] || (t[22] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      s("span", Ea, D(f(g)("grid.filters.label.extent")), 1),
                      j.value !== "disabled" && u.value.state.filterByExtent ? (L(), _("svg", ka, t[21] || (t[21] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, La),
                  s("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (C) => vt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.pinColumns")
                  }, [
                    s("div", Fa, [
                      v.value ? (L(), _("svg", Aa, t[23] || (t[23] = [
                        s("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : v.value ? I("", !0) : (L(), _("svg", $a, t[24] || (t[24] = [
                        s("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      s("span", Ta, D(f(g)("grid.label.pinColumns")), 1),
                      v.value ? (L(), _("svg", Ra, t[25] || (t[25] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, Ma),
                  s("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (C) => ft()),
                    role: "button",
                    "aria-label": f(g)("grid.label.export")
                  }, [
                    s("div", Da, [
                      t[26] || (t[26] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("g", null, [
                          s("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      s("span", Ga, D(f(g)("grid.label.export")), 1)
                    ])
                  ], 8, Sa)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [se, !W.value && !ae.value]
        ]),
        A.value ? $((L(), _("div", {
          key: 0,
          content: f(g)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          ke(f(Pt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: f(k) === "en" ? f(Nt) : f(Ot),
            gridOptions: q.value,
            columnDefs: re.value,
            rowData: ce.value,
            components: le.value,
            onGridReady: ut,
            onKeydown: Mt,
            onFirstDataRendered: dt,
            onCellKeyPress: f(it),
            doesExternalFilterPass: Ct,
            isExternalFilterPresent: xt,
            tabIndex: -1
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Ia)), [
          [d, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [se, !W.value && !ae.value]
        ]) : I("", !0)
      ], 512);
    };
  }
}), Pa = /* @__PURE__ */ he(Va, [["__scopeId", "data-v-fd46b1ac"]]), Ha = /* @__PURE__ */ H({
  __name: "screen",
  props: {
    panel: {
      type: st,
      required: !0
    }
  },
  setup(w) {
    const r = nt(), { t: e } = z(), n = P(() => r.currentId);
    return (l, i) => {
      const v = Pe("panel-screen");
      return L(), lt(v, { panel: w.panel }, {
        header: oe(() => [
          ie(D(f(e)("grid.title")), 1)
        ]),
        content: oe(() => [
          ke(Pa, {
            class: "rv-grid",
            gridId: n.value,
            panel: w.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), $r = /* @__PURE__ */ he(Ha, [["__scopeId", "data-v-904e67ef"]]);
export {
  $r as default
};
