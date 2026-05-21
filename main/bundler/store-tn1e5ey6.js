import { defineStore as e } from "pinia";
import { reactive as t, ref as n } from "vue";
//#region src/fixtures/draw/store/draw-store.ts
var r = e("draw", () => {
	let e = n([]), r = n(!1), i = n(null), a = t([]), o = n(null), s = n(null);
	function c(t) {
		e.value.splice(0, e.value.length, ...t), r.value = !0;
	}
	function l(e) {
		i.value = e;
	}
	function u(e) {
		let t = `graphic-${Date.now()}`;
		return a.push({
			id: t,
			...e
		}), t;
	}
	function d(e) {
		let t = a.findIndex((t) => t.id === e);
		t !== -1 && (a.splice(t, 1), o.value === e && (o.value = null));
	}
	function f(e) {
		o.value = e;
	}
	function p() {
		o.value = null;
	}
	function m() {
		return o.value ? a.find((e) => e.id === o.value) : null;
	}
	function h(e, t) {
		let n = a.find((t) => t.id === e);
		n && (n.geometry = t);
	}
	return {
		supportedTypes: e,
		configParsed: r,
		activeTool: i,
		graphics: a,
		selectedGraphicId: o,
		setSupportedTypes: c,
		setActiveTool: l,
		addGraphic: u,
		removeGraphic: d,
		selectGraphic: f,
		clearSelection: p,
		getSelectedGraphic: m,
		updateGraphicGeometry: h,
		mapNavEl: s
	};
});
//#endregion
export { r as t };
