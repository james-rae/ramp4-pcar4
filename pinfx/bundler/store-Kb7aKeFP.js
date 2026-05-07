import { defineStore as e } from "pinia";
import { reactive as t, ref as n } from "vue";
//#region src/fixtures/draw/store/draw-store.ts
var r = e("draw", () => {
	let e = n([]), r = n(!1), i = n(null), a = t([]), o = n(null), s = n(null), c = n(!1);
	function l(t) {
		e.value.splice(0, e.value.length, ...t), r.value = !0;
	}
	function u(e) {
		i.value = e;
	}
	function d(e) {
		let t = `graphic-${Date.now()}`;
		return a.push({
			id: t,
			...e
		}), t;
	}
	function f(e) {
		let t = a.findIndex((t) => t.id === e);
		t !== -1 && (a.splice(t, 1), o.value === e && (o.value = null));
	}
	function p(e) {
		o.value = e;
	}
	function m() {
		o.value = null;
	}
	function h() {
		return o.value ? a.find((e) => e.id === o.value) : null;
	}
	function g(e, t) {
		let n = a.find((t) => t.id === e);
		n && (n.geometry = t);
	}
	function _(e) {
		c.value = e;
	}
	function v() {
		c.value = !c.value;
	}
	return {
		supportedTypes: e,
		configParsed: r,
		activeTool: i,
		graphics: a,
		selectedGraphicId: o,
		measurementsEnabled: c,
		setSupportedTypes: l,
		setActiveTool: u,
		addGraphic: d,
		removeGraphic: f,
		selectGraphic: p,
		clearSelection: m,
		getSelectedGraphic: h,
		updateGraphicGeometry: g,
		setMeasurementsEnabled: _,
		toggleMeasurements: v,
		mapNavEl: s
	};
});
//#endregion
export { r as t };
