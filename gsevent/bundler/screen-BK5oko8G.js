import { $ as e, A as t, B as n, O as r, Z as i, k as a, z as o } from "./main-DmWI6MSE.js";
import { t as s } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { Fragment as c, computed as l, createBlock as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createTextVNode as m, createVNode as h, defineComponent as g, inject as _, normalizeClass as v, onBeforeMount as y, onBeforeUnmount as b, onMounted as x, openBlock as S, ref as C, renderList as w, renderSlot as T, resolveComponent as ee, resolveDirective as E, toDisplayString as D, toRaw as te, unref as O, watch as k, withCtx as A, withDirectives as j, withKeys as M, withModifiers as N } from "vue";
import { debounce as P } from "es-toolkit/function";
import { useI18n as F } from "vue-i18n";
import I from "await-to-js";
//#region src/fixtures/geosearch/search-bar.vue?vue&type=script&setup=true&lang.ts
var L = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, R = [
	"placeholder",
	"value",
	"aria-label"
], z = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, B = ["aria-label", "content"], V = /* @__PURE__ */ g({
	__name: "search-bar",
	setup(e) {
		let { t } = F(), n = r(), i = o(), a = l(() => n.searchVal), s = l(() => [
			"\"",
			"$",
			"!",
			"*",
			"+",
			"?",
			"^",
			"{",
			"}",
			"(",
			")",
			"|",
			"[",
			"]"
		].filter((e) => n.searchVal.includes(e)).join("")), c = (e) => {
			n.setSearchTerm(e), n.setSearchRegex(e);
		}, u = P((e) => {
			c(e);
		}, 500);
		return (e, n) => {
			let r = E("tippy");
			return S(), f("div", L, [p("input", {
				type: "text",
				class: v(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": s.value }]),
				placeholder: O(t)("geosearch.searchText"),
				value: a.value,
				onInput: n[0] ||= (e) => O(u)(e.target.value),
				onKeyup: n[1] ||= M((e) => {
					O(i).mobileView && e.target.blur();
				}, ["enter"]),
				"aria-label": O(t)("geosearch.searchText"),
				onKeypress: n[2] ||= M(N(() => {}, ["prevent"]), ["enter"]),
				enterkeyhint: "done"
			}, null, 42, R), p("span", z, [s.value ? j((S(), f("button", {
				key: 0,
				class: "cursor-default",
				"aria-label": O(t)("geosearch.badChars", { chars: s.value }),
				content: O(t)("geosearch.badChars", { chars: s.value })
			}, [...n[3] ||= [m(" ⚠ ", -1)]], 8, B)), [[r]]) : d("", !0)])]);
		};
	}
}), H = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, U = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, W = ["value", "aria-label"], G = {
	value: "",
	disabled: "",
	hidden: ""
}, K = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, q = ["value", "aria-label"], J = {
	value: "",
	disabled: "",
	hidden: ""
}, Y = [
	"disabled",
	"content",
	"aria-label"
], X = /* @__PURE__ */ g({
	__name: "top-filters",
	setup(e) {
		let { t } = F(), n = _("iApi"), i = r(), a = C([]), o = C([]), s = C([]), u = l(() => i.queryParams), d = l(() => n.language), h = (e) => i.setProvince(e), g = (e) => i.setType(e), v = () => {
			h({}), g({});
		}, x = () => {
			i.initService(n.language, n.fixture.get("geosearch").config);
			let e = a.value.find((e) => u.value.province === e.name)?.code, t = o.value.find((e) => u.value.type === e.name)?.code;
			i.getProvinces.then((t) => {
				a.value = t, h({
					province: t.find((t) => t.code === e)?.name,
					forceReRun: !0
				});
			}), i.getTypes.then((e) => {
				o.value = e, g({
					type: e.find((e) => e.code === t)?.name,
					forceReRun: !0
				});
			});
		};
		return y(() => {
			x(), s.value.push(k(d, x));
		}), b(() => {
			s.value.forEach((e) => e());
		}), (e, n) => {
			let r = E("truncate"), i = E("tippy");
			return S(), f("div", H, [p("div", U, [j((S(), f("select", {
				class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
				value: u.value.province,
				"aria-label": O(t)("geosearch.filters.province"),
				onChange: n[0] ||= (e) => h({ province: e.target.value })
			}, [j((S(), f("option", G, [m(D(O(t)("geosearch.filters.province")), 1)])), [[r]]), (S(!0), f(c, null, w(a.value, (e) => j((S(), f("option", { key: e.code }, [m(D(e.name), 1)])), [[r]])), 128))], 40, W)), [[r]])]), p("div", K, [j((S(), f("select", {
				class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
				value: u.value.type,
				"aria-label": O(t)("geosearch.filters.type"),
				onChange: n[1] ||= (e) => g({ type: e.target.value })
			}, [p("option", J, D(O(t)("geosearch.filters.type")), 1), (S(!0), f(c, null, w(o.value, (e) => (S(), f("option", { key: e.code }, D(e.name), 1))), 128))], 40, q)), [[r]]), j((S(), f("button", {
				type: "button",
				class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
				disabled: !u.value.type && !u.value.province,
				onClick: v,
				content: O(t)("geosearch.filters.clear"),
				"aria-label": O(t)("geosearch.filters.clear")
			}, [...n[2] ||= [p("div", { class: "rv-geosearch-icon" }, [p("svg", {
				class: "fill-current w-18 h-18",
				viewBox: "0 0 23 21"
			}, [p("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })])], -1)]], 8, Y)), [[i, { placement: "bottom" }]])])]);
		};
	}
}), Z = { class: "rv-geosearch-bottom-filters" }, Q = { class: "bg-white" }, ne = { class: "ml-8 cursor-pointer font-normal" }, re = ["checked"], ie = /* @__PURE__ */ g({
	__name: "bottom-filters",
	setup(e) {
		let { t } = F(), i = _("iApi"), a = r(), o = l(() => a.resultsVisible), s = P((e) => {
			u(e).then((e) => {
				c({
					extent: e,
					visible: o.value
				});
			});
		}, 300), c = (e) => {
			a.setMapExtent(e);
		}, u = async (e) => e.sr.wkid === 4326 ? e : await i.geo.proj.projectGeometry(4326, e), d = (e) => {
			u(i.geo.map.getExtent()).then((t) => {
				c({
					extent: t,
					visible: e
				});
			});
		};
		return x(() => {
			i.event.on(n.MAP_EXTENTCHANGE, s, "geosearch_map_extent");
		}), b(() => {
			i.event.off("geosearch_map_extent");
		}), (e, n) => (S(), f("div", Z, [p("div", Q, [p("label", ne, [p("input", {
			type: "checkbox",
			class: "border-2 mx-8 border-gray-600 cursor-pointer",
			checked: o.value,
			onChange: n[0] ||= (e) => d(e.target.checked),
			onKeypress: n[1] ||= M(N(() => {}, ["prevent"]), ["enter"])
		}, null, 40, re), m(D(O(t)("geosearch.visible")), 1)])])]));
	}
}), ae = {}, oe = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, se = {
	class: "h-full progressbar bg-blue-800 rounded-full top-0",
	"aria-valuemin": "0",
	"aria-valuemax": "100"
}, ce = { class: "flex items-center h-full" };
function le(e, t) {
	return S(), f("div", oe, [p("div", se, [p("span", ce, [T(e.$slots, "default", {}, void 0, !0)])])]);
}
var ue = /* @__PURE__ */ s(ae, [["render", le], ["__scopeId", "data-v-0a8d1c36"]]), de = { class: "flex flex-col h-full" }, fe = {
	key: 1,
	class: "text-red-900 text-xs px-8 mb-10"
}, pe = {
	key: 2,
	class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, $ = { class: "relative h-48" }, me = { class: "font-bold text-blue-600" }, he = {
	key: 3,
	class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, ge = ["onClick"], _e = { class: "rv-result-description px-8" }, ve = { class: "flex-1 text-left truncate font-bold leading-tight" }, ye = ["innerHTML"], be = {
	key: 0,
	class: "text-gray-600 text-sm"
}, xe = {
	key: 1,
	class: "hidden"
}, Se = {
	key: 2,
	class: "text-sm font-normal"
}, Ce = /* @__PURE__ */ g({
	__name: "screen",
	props: { panel: { type: Object } },
	setup(o) {
		let { t: s } = F(), g = _("iApi"), v = r(), y = l(() => v.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), b = l(() => v.searchResults), x = l(() => v.loadingResults), C = l(() => v.failedServices), T = l(() => v.GSservice.config.fsaUrl), k = async (r) => {
			let o;
			if (r.flav === "fsa" && T.value) {
				let [n, s] = await I(t(T.value.replace(a, r.name)));
				if (!n) {
					let t = new i("fsazoom", s.features[0].geometry.rings, e.fromConfig(s.spatialReference), !0);
					o = g.geo.map.zoomMapTo(t);
				}
			}
			if (!o) {
				let t = new i("zoomies", [[
					[r.bbox[0], r.bbox[1]],
					[r.bbox[0], r.bbox[3]],
					[r.bbox[2], r.bbox[3]],
					[r.bbox[2], r.bbox[1]],
					[r.bbox[0], r.bbox[1]]
				]], e.latLongSR(), !0);
				o = g.geo.map.zoomMapTo(t);
			}
			g.event.emit(n.GEOSEARCH_ZOOM, {
				zoomPromise: o,
				searchItem: te(r)
			});
		}, M = (e, t) => {
			let n = e.replace(RegExp(`${v.searchRegex}`, "gi"), (e) => "<span class=\"font-bold text-blue-600\">" + e + "</span>");
			return t ? n + "," : n;
		};
		return (e, t) => {
			let n = ee("panel-screen"), r = E("truncate"), i = E("focus-item"), a = E("focus-list");
			return S(), u(n, { panel: o.panel }, {
				header: A(() => [m(D(O(s)("geosearch.title")), 1)]),
				content: A(() => [p("div", de, [
					h(V),
					h(X),
					x.value ? (S(), u(ue, {
						key: 0,
						class: "flex-none"
					})) : d("", !0),
					C.value.length > 0 && !x.value ? (S(), f("div", fe, D(O(s)("geosearch.serviceError", { services: C.value.join(", ") })), 1)) : d("", !0),
					y.value && b.value.length === 0 && !x.value ? (S(), f("div", pe, [p("span", $, [m(D(O(s)("geosearch.noResults")), 1), p("span", me, "\"" + D(y.value) + "\"", 1)])])) : d("", !0),
					b.value.length > 0 ? j((S(), f("ul", he, [(S(!0), f(c, null, w(b.value, (e, n) => (S(), f("li", {
						class: "relative h-56",
						key: n
					}, [j((S(), f("button", {
						type: "button",
						class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
						onClick: (t) => k(e),
						style: { "border-bottom": "1px solid lightgray" },
						"truncate-trigger": ""
					}, [p("div", _e, [j((S(), f("div", ve, [
						p("span", { innerHTML: M(e.name, e.location.province) }, null, 8, ye),
						e.location.province ? (S(), f("span", be, D(e.location.city ? " " + e.location.city + ", " + e.location.province.abbr : " " + e.location.province.abbr), 1)) : d("", !0),
						e.type ? (S(), f("span", xe, "; ")) : d("", !0),
						e.type ? (S(), f("span", Se, [t[0] ||= p("br", null, null, -1), m(D(e.type), 1)])) : d("", !0)
					])), [[r, {
						externalTrigger: !0,
						options: { placement: "top-start" }
					}]])])], 8, ge)), [[i, "show-truncate"]])]))), 128))])), [[a]]) : d("", !0),
					h(ie, { class: "mt-auto" })
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { Ce as default };
