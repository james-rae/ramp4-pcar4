import { t as e } from "./measure-icon-F-8POpBh.js";
import { V as t, s as n, x as r } from "./main-DRrASmfn.js";
import { t as i } from "./_plugin-vue_export-helper-O4QQSku4.js";
import { t as a } from "./keyboard-Caaq63sc.js";
import { t as o } from "./store-Kb7aKeFP.js";
import { Fragment as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createVNode as p, defineAsyncComponent as m, defineComponent as h, inject as g, markRaw as _, nextTick as v, normalizeClass as y, normalizeStyle as b, onBeforeUnmount as x, onMounted as S, openBlock as C, ref as w, renderList as T, resolveComponent as E, resolveDirective as D, resolveDynamicComponent as O, unref as k, useTemplateRef as A, withCtx as j, withDirectives as M } from "vue";
import { throttle as N } from "es-toolkit/function";
import { useI18n as P } from "vue-i18n";
//#region src/fixtures/mapnav/buttons/divider-nav.vue
var F = {}, I = { class: "border-b p-0 self-center w-2/3" };
function L(e, t) {
	return C(), d("span", I);
}
var R = /* @__PURE__ */ i(F, [["render", L]]), z = /* @__PURE__ */ h({
	__name: "zoom-nav",
	setup(e) {
		let { t } = P(), n = g("iApi"), r = N(() => n.geo.map.zoomIn(), 400, { edges: ["leading"] }), i = N(() => n.geo.map.zoomOut(), 400, { edges: ["leading"] });
		return (e, n) => {
			let a = E("mapnav-button");
			return C(), d("div", null, [
				p(a, {
					onClickFunction: k(r),
					tooltip: k(t)("mapnav.zoomIn")
				}, {
					default: j(() => [...n[0] ||= [f("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [f("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), f("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"]),
				p(R),
				p(a, {
					onClickFunction: k(i),
					tooltip: k(t)("mapnav.zoomOut")
				}, {
					default: j(() => [...n[1] ||= [f("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						class: "fill-current w-32 h-20"
					}, [f("path", { d: "M19 13H5v-2h14v2z" }), f("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					})], -1)]]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])
			]);
		};
	}
}), B = /* @__PURE__ */ i(/* @__PURE__ */ h({
	__name: "draw-nav-section",
	props: { showOutline: {
		type: Boolean,
		default: !1
	} },
	setup(t) {
		let n = g("iApi"), { t: r } = P(), i = o();
		i.mapNavEl = A("mapNavEl");
		let a = [
			{
				type: "point",
				icon: _(m(() => import("./point-icon-D3vNK46O.js")))
			},
			{
				type: "polyline",
				icon: _(m(() => import("./polyline-icon-B-EK0ndq.js")))
			},
			{
				type: "polygon",
				icon: _(m(() => import("./polygon-icon-ExarLdRk.js")))
			},
			{
				type: "circle",
				icon: _(m(() => import("./circle-icon-BjDhPjLl.js")))
			},
			{
				type: "rectangle",
				icon: _(m(() => import("./rectangle-icon-DTCqUT6_.js")))
			}
		], f = c(() => i.configParsed ? [...a.filter((e) => i.supportedTypes.some((t) => t.type === e.type)), {
			type: "edit",
			icon: _(m(() => import("./edit-icon-Cfj6GpTI.js")))
		}] : []), h = (e) => {
			i.activeTool === e ? i.setActiveTool(null) : i.setActiveTool(e);
		}, v = () => {
			i.toggleMeasurements();
		}, x = () => {
			n.geo.map.setMouseFocus();
		};
		return (n, a) => {
			let o = E("mapnav-button");
			return f.value.length ? (C(), d("div", {
				key: 0,
				class: y([{ active: k(i).activeTool || k(i).activeTool == "" || k(i).measurementsEnabled }, "mapnav-section bg-white-75 hover:bg-white"])
			}, [(C(!0), d(s, null, T(f.value, (e, n) => (C(), l(o, {
				key: e.type,
				onMousedown: x,
				onClickFunction: () => h(e.type),
				tooltip: k(r)(`draw.${e.type}.tooltip`),
				style: b({ marginBottom: n === f.value.length - 1 ? "0" : "0px" }),
				showOutline: t.showOutline,
				class: y({ "active-tool": k(i).activeTool === e.type }),
				ref_for: !0,
				ref: "mapNavEl"
			}, {
				default: j(() => [(C(), l(O(e.icon), { class: "fill-current w-32 h-20" }))]),
				_: 2
			}, 1032, [
				"onClickFunction",
				"tooltip",
				"style",
				"showOutline",
				"class"
			]))), 128)), p(o, {
				onClickFunction: v,
				tooltip: k(r)("draw.measurements.tooltip"),
				ariaLabel: k(r)("draw.measurements.tooltip"),
				ariaPressed: k(i).measurementsEnabled,
				showOutline: t.showOutline,
				class: y({ "active-tool": k(i).measurementsEnabled })
			}, {
				default: j(() => [p(e, { class: "fill-current w-32 h-20" })]),
				_: 1
			}, 8, [
				"tooltip",
				"ariaLabel",
				"ariaPressed",
				"showOutline",
				"class"
			])], 2)) : u("", !0);
		};
	}
}), [["__scopeId", "data-v-711be0d8"]]), V = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, H = ["content"], U = { class: "mapnav-section bg-white-75 hover:bg-white" }, W = {
	key: 1,
	class: "mapnav-section bg-white-75 hover:bg-white"
}, G = ["content"], K = { key: 0 }, q = /* @__PURE__ */ i(/* @__PURE__ */ h({
	__name: "mapnav",
	setup(e) {
		let t = w(void 0), n = g("iApi"), i = r(), { t: o } = P(), m = w(), h = c(() => n.getConfig().fixtures?.mapnav?.items?.some((e) => e === "draw")), _ = w(n.$rootEl?.clientHeight), A = w(!1), N = w(0), F = () => {
			_.value = n.$rootEl?.clientHeight;
		}, I = () => {
			m.value._tippy.hide();
		}, L = (e) => {
			a(e, m.value) && m.value._tippy.show();
		};
		S(() => {
			m.value?.addEventListener("blur", I), m.value?.addEventListener("keyup", L), t.value = new ResizeObserver(F), t.value.observe(n.$rootEl), v(() => {
				N.value = q.value.length * 82;
			});
		}), x(() => {
			m.value?.removeEventListener("blur", I), m.value?.removeEventListener("keyup", L), t.value.disconnect();
		});
		let q = c(() => i.order.map((e) => i.items[e]).filter((e) => e.componentId && e.id !== "draw"));
		return (e, t) => {
			let n = E("mapnav-button"), r = D("focus-list"), i = D("tippy");
			return C(), d("div", V, [M((C(), d("div", {
				class: "mapnav-section flex flex-col",
				content: k(o)("panels.controls.items"),
				ref_key: "el",
				ref: m
			}, [
				h.value && _.value > N.value ? (C(), d(s, { key: 0 }, [p(B), t[0] ||= f("span", { class: "py-1" }, null, -1)], 64)) : u("", !0),
				p(z, { class: "mapnav-section bg-white-75 hover:bg-white" }),
				t[2] ||= f("span", { class: "py-1" }, null, -1),
				f("div", U, [_.value <= N.value ? (C(), l(n, {
					key: 0,
					class: "self-center",
					onClickFunction: () => {
						A.value = !A.value;
					},
					tooltip: A.value ? e.$t("mapnav.closeMenu") : e.$t("mapnav.openMenu")
				}, {
					default: j(() => [(C(), d("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						"shape-rendering": "geometricPrecision",
						"text-rendering": "geometricPrecision",
						"image-rendering": "optimizeQuality",
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						viewBox: "0 0 319 511.61",
						class: y(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": A.value }])
					}, [...t[1] ||= [f("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)]], 2))]),
					_: 1
				}, 8, ["onClickFunction", "tooltip"])) : u("", !0)]),
				_.value > N.value ? (C(), d("div", W, [(C(!0), d(s, null, T(q.value, (e, t) => (C(), d(s, { key: e.id + "button" }, [(C(), l(O(e.id + "-nav-button"))), t === q.value.length - 1 ? u("", !0) : (C(), l(R, {
					key: 0,
					class: "mapnav-divider"
				}))], 64))), 128))])) : u("", !0)
			], 8, H)), [[r], [i, {
				trigger: "manual",
				placement: "top-end",
				touch: !1,
				maxWidth: 190
			}]]), _.value <= N.value && A.value ? M((C(), d("div", {
				key: 0,
				class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
				style: b({
					maxHeight: `${(_.value - 70) * .8}px`,
					height: "fit-content",
					width: "fit-content"
				}),
				content: k(o)("panels.controls.items")
			}, [h.value ? (C(), d("div", K, [p(B, { showOutline: "" })])) : u("", !0), (C(!0), d(s, null, T(q.value, (e) => (C(), l(O(e.id + "-nav-button"), {
				key: e.id + "button",
				class: "mapnav-section bg-white-75 hover:bg-white",
				showOutline: ""
			}))), 128))], 12, G)), [[i, {
				trigger: "manual",
				placement: "top-end",
				maxWidth: 190
			}]]) : u("", !0)]);
		};
	}
}), [["__scopeId", "data-v-5b4bcb7b"]]), J = class extends n {
	mapnavStore = r(this.$vApp.$pinia);
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		if (!e) return;
		let t = e.items.map((e) => ({ id: e }));
		this.mapnavStore.items = t.reduce((e, t) => (e[t.id] = t, e), {}), this.mapnavStore.order = t.map((e) => e.id), this._validateItems();
	}
	_validateItems() {
		let e = [
			"geolocator",
			"zoom",
			"home",
			"fullscreen"
		];
		this.mapnavStore.order.forEach((t) => {
			(this.$iApi.fixture.exists(t) || e.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
		});
	}
}, Y = {
	en: {
		"mapnav.openMenu": "Open navigation",
		"mapnav.closeMenu": "Close navigation",
		"mapnav.zoomIn": "Zoom In",
		"mapnav.zoomOut": "Zoom Out",
		"mapnav.home": "Home",
		"mapnav.fullscreen": "Full Screen",
		"mapnav.geolocator": "Your Location",
		"mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.",
		"mapnav.geolocator.error.internal": "Your location could not be found."
	},
	fr: {
		"mapnav.openMenu": "Ouvrir la navigation",
		"mapnav.closeMenu": "Fermer la navigation",
		"mapnav.zoomIn": "Zoom avant",
		"mapnav.zoomOut": "Zoom arrière",
		"mapnav.home": "Accueil",
		"mapnav.fullscreen": "Plein Écran",
		"mapnav.geolocator": "Votre position",
		"mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.",
		"mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé."
	}
}, X = class extends J {
	async added() {
		Object.entries(Y).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: n } = this.mount(q, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), this._parseConfig(this.config);
		let i = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), a = this.$iApi.event.on(t.COMPONENT, () => {
			this._parseConfig(this.config);
		});
		this.removed = () => {
			i(), this.$iApi.event.off(a);
			let t = r(this.$vApp.$pinia), n = { ...t.items };
			Object.keys(n).forEach((e) => t.removeItem(e)), t.$reset(), e();
		};
	}
};
//#endregion
export { X as default };
