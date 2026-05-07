import { Et as e, V as t, _t as n, at as r, ct as i, dt as a, ft as o, gt as s, ht as c, it as l, lt as u, mt as d, nt as f, ot as p, pt as m, rt as h, s as g, st as ee, tt as te, ut as _, vt as ne } from "./main-DRrASmfn.js";
import { t as v } from "./store-Kb7aKeFP.js";
import { Fragment as re, createCommentVNode as ie, createElementBlock as ae, createElementVNode as oe, defineComponent as se, inject as ce, markRaw as y, onMounted as le, onUnmounted as ue, openBlock as de, reactive as fe, ref as pe, toDisplayString as me, toRaw as b, unref as he, useTemplateRef as ge, watch as x } from "vue";
import { useI18n as _e } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var S = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, ve = {
	key: 0,
	class: "sr-only",
	"aria-live": "polite",
	"aria-atomic": "true"
}, C = "RampDrawGraphicsLayer", w = /* @__PURE__ */ se({
	__name: "draw",
	setup(g) {
		let { t: _, availableLocales: se, locale: y } = _e(), S = (e) => _(e ? `draw.${e}` : "draw.unknown"), w = ce("iApi"), T = v(), E = (e) => {
			let t = se.length ? se : [y.value], n = {};
			for (let r of t) n[r] = _(e, {}, { locale: r });
			return n;
		}, D = null, O = ge("sketchEl"), k = null, A = null, j = !1, M = 0, N = null, P = null, F = 0, ye = null, I = [], L = null, R = null, z = null, B = !1, V = null, H = [], U = fe([]), W, G = pe(""), K = null, be = (e = T.activeTool) => {
			let t = w.fixture.get("panguard");
			if (e !== null && e !== "") {
				t && K === null && (K = t.enabled, t.setEnabled(!1));
				return;
			}
			K !== null && (t?.setEnabled(K), K = null);
		}, xe = (e) => {
			rt(e.detail);
		}, Se = (e) => {
			it(e.detail);
		}, q = () => {
			try {
				D?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		}, J = () => {
			N !== null && (window.cancelAnimationFrame(N), N = null);
		};
		async function Ce() {
			let e = w.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			W &&= (e.unregister(W), void 0), W = e.register("D", {
				name: E("draw.keyboard.namespace"),
				activeHandler: () => {
					T.setActiveTool("");
				},
				deactiveHandler: () => {
					T.setActiveTool(null);
				},
				keys: [
					{
						key: "P",
						description: E("draw.keyboard.key.point"),
						handler: () => {
							T.setActiveTool("point");
						}
					},
					{
						key: "L",
						description: E("draw.keyboard.key.polyline"),
						handler: () => {
							T.setActiveTool("polyline");
						}
					},
					{
						key: "G",
						description: E("draw.keyboard.key.polygon"),
						handler: () => {
							T.setActiveTool("polygon");
						}
					},
					{
						key: "C",
						description: E("draw.keyboard.key.circle"),
						handler: () => {
							T.setActiveTool("circle");
						}
					},
					{
						key: "R",
						description: E("draw.keyboard.key.rectangle"),
						handler: () => {
							T.setActiveTool("rectangle");
						}
					},
					{
						key: "E",
						description: E("draw.keyboard.key.edit"),
						handler: () => {
							T.setActiveTool("edit");
						}
					},
					{
						key: "M",
						description: E("draw.keyboard.key.measurements"),
						handler: () => (T.toggleMeasurements(), "reset")
					}
				]
			});
		}
		let Y = (e) => {
			if (z &&= (k?.remove(z), null), !e) return;
			let t;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					t = new n({
						color: [
							255,
							255,
							0,
							.8
						],
						size: 16,
						outline: {
							color: [
								255,
								165,
								0,
								1
							],
							width: 3
						}
					});
					break;
				case "polyline":
					t = new s({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: t = new c({
					color: [
						255,
						255,
						0,
						.3
					],
					outline: {
						color: [
							255,
							165,
							0,
							1
						],
						width: 3
					}
				});
			}
			z = new u({
				geometry: e.geometry,
				symbol: t
			}), k?.add(z);
		}, we = (e) => {
			!D || T.activeTool !== "edit" || (R = e, e.attributes?.id && T.selectGraphic(e.attributes.id), Y(e), J(), N = window.requestAnimationFrame(() => {
				N = null, !(!D || T.activeTool !== "edit" || R !== e || D.state === "active") && D.triggerUpdate([e], {
					tool: "transform",
					enableRotation: !0,
					enableScaling: !0,
					toggleToolOnClick: !1,
					highlightOptions: { enabled: !1 }
				});
			}));
		}, X = (e, t) => e.toLocaleString(y.value, {
			maximumFractionDigits: t,
			minimumFractionDigits: 0
		}), Te = (e) => {
			let t = Math.abs(e);
			if (t >= 1e3) {
				let e = t / 1e3, n = X(e, e >= 10 ? 1 : 2);
				return {
					display: `${n} km`,
					spoken: `${n} kilometers`
				};
			}
			if (t >= 1) {
				let e = X(t, t >= 10 ? 0 : 1);
				return {
					display: `${e} m`,
					spoken: `${e} meters`
				};
			}
			let n = t * 100, r = X(n, n >= 10 ? 0 : 1);
			return {
				display: `${r} cm`,
				spoken: `${r} centimeters`
			};
		}, Ee = (e) => {
			let t = Math.abs(e);
			if (t >= 1e6) {
				let e = t / 1e6, n = X(e, e >= 10 ? 1 : 2);
				return {
					display: `${n} sq km`,
					spoken: `${n} square kilometers`
				};
			}
			let n = X(t, t >= 100 ? 0 : t >= 10 ? 1 : 2);
			return {
				display: `${n} sq m`,
				spoken: `${n} square meters`
			};
		}, De = (e) => !!e.spatialReference?.isGeographic || !!e.spatialReference?.isWebMercator, Oe = async () => {
			ye ??= Promise.all([l() ? Promise.resolve() : r(), ee() ? Promise.resolve() : i()]).then(() => void 0), await ye;
		}, ke = (e, t) => t ? p(e, { unit: "meters" }) : a(e, { unit: "meters" }), Ae = (e) => {
			let t = De(e);
			try {
				let n = Math.abs(ke(e, t));
				if (Number.isFinite(n)) return n;
			} catch {}
			try {
				let n = Math.abs(ke(e, !t));
				return Number.isFinite(n) ? n : void 0;
			} catch {
				return;
			}
		}, je = (e, t) => t ? h(e, { unit: "square-meters" }) : te(e, { unit: "square-meters" }), Me = (e) => {
			let t = De(e);
			try {
				let n = Math.abs(je(e, t));
				if (Number.isFinite(n)) return n;
			} catch {}
			try {
				let n = Math.abs(je(e, !t));
				return Number.isFinite(n) ? n : void 0;
			} catch {
				return;
			}
		}, Ne = (e, t, n) => new o({
			x: (e[0] + t[0]) / 2,
			y: (e[1] + t[1]) / 2,
			spatialReference: n
		}), Pe = (e) => e > 90 ? e - 180 : e < -90 ? e + 180 : e, Fe = (e, t, n) => {
			let r = w.geo.map.esriView;
			if (r) {
				let i = r.toScreen(new o({
					x: e[0],
					y: e[1],
					spatialReference: n
				})), a = r.toScreen(new o({
					x: t[0],
					y: t[1],
					spatialReference: n
				}));
				if (i && a) return Pe(Math.atan2(a.y - i.y, a.x - i.x) * 180 / Math.PI);
			}
			return Pe(Math.atan2(t[1] - e[1], t[0] - e[0]) * 180 / Math.PI);
		}, Ie = (e, t, n) => Ae(new d({
			paths: [[[e[0], e[1]], [t[0], t[1]]]],
			spatialReference: n
		})), Le = (e) => {
			try {
				let t = f(e);
				if (t) return t;
			} catch {}
			let t = e.extent;
			if (t) return new o({
				x: (t.xmin + t.xmax) / 2,
				y: (t.ymin + t.ymax) / 2,
				spatialReference: e.spatialReference
			});
		}, Re = (e, t, n, r = 0) => new u({
			geometry: e,
			symbol: new ne({
				text: t,
				angle: r,
				color: n === "area" ? [
					255,
					255,
					255,
					1
				] : [
					17,
					24,
					39,
					1
				],
				haloColor: n === "area" ? [
					17,
					24,
					39,
					1
				] : [
					255,
					255,
					255,
					1
				],
				haloSize: 1.5,
				backgroundColor: n === "area" ? [
					17,
					24,
					39,
					.92
				] : [
					255,
					255,
					255,
					.9
				],
				borderLineColor: n === "area" ? [
					255,
					255,
					255,
					.95
				] : [
					17,
					24,
					39,
					.85
				],
				borderLineSize: .6,
				horizontalAlignment: "center",
				verticalAlignment: "middle",
				yoffset: n === "area" ? 0 : 8,
				font: {
					family: "Arial",
					size: 11,
					weight: "bold"
				}
			}),
			attributes: { drawMeasurement: !0 }
		}), ze = (e, t) => {
			if (t === "circle") return [];
			let n = e.type === "polyline" ? e.paths : e.type === "polygon" ? e.rings : [], r = 0;
			return n.flatMap((t) => {
				let n = [];
				for (let i = 0; i < t.length - 1; i++) {
					let a = t[i], o = t[i + 1], s = Ie(a, o, e.spatialReference);
					if (!s || s < .01) continue;
					r++;
					let c = Te(s);
					n.push({
						graphic: Re(Ne(a, o, e.spatialReference), c.display, "distance", Fe(a, o, e.spatialReference)),
						accessibleText: _("draw.measurements.segment", {
							index: r,
							distance: c.spoken
						})
					});
				}
				return n;
			});
		}, Be = (e) => {
			if (e.type !== "polygon") return;
			let t = e, n = Me(t), r = Le(t);
			if (!n || n < .01 || !r) return;
			let i = Ee(n);
			return {
				graphic: Re(r, i.display, "area"),
				accessibleText: _("draw.measurements.area", { area: i.spoken })
			};
		}, Ve = (e) => {
			let t = e.geometry;
			if (!t || t.type === "point" || t.type === "multipoint") return [];
			let n = ze(t, e.type), r = Be(t);
			return r && n.push(r), n;
		}, He = (e) => e.attributes?.id, Ue = (e, t, n) => {
			if (n) return {
				id: e,
				type: t ?? n.type,
				geometry: n
			};
		}, We = () => T.graphics.map((e) => Ue(String(e.id ?? e.attributes?.id ?? ""), e.type ?? e.attributes?.type, b(e.geometry))).filter((e) => !!e?.id), Ge = () => (k?.graphics.toArray() ?? []).filter((e) => !!He(e)).map((e) => Ue(He(e), e.attributes?.type, e.geometry)).filter((e) => !!e), Ke = (e, t) => {
			if (e) return Ue(He(e) ?? "active-draw-measurement", t ?? e.attributes?.type, e.geometry);
		}, qe = (e, t) => {
			let n = /* @__PURE__ */ new Map();
			We().forEach((e) => n.set(e.id, e)), Ge().forEach((e) => n.set(e.id, e));
			let r = Ke(e, t);
			return r && n.set(r.id, r), Array.from(n.values()).flatMap((e) => Ve(e));
		}, Z = () => {
			F++, P !== null && (window.cancelAnimationFrame(P), P = null), L = null, G.value = "";
			try {
				w.geo.map.esriView?.graphics.removeMany(I);
			} catch (e) {
				console.warn("Unable to clear draw measurement graphics.", e);
			}
			I = [];
		}, Je = (e) => {
			let t = e.length ? _("draw.measurements.summary", { measurements: e.map((e) => e.accessibleText).join(". ") }) : _("draw.measurements.none");
			G.value !== t && (G.value = t);
		}, Q = async (e, t) => {
			let n = ++F;
			if (P !== null && (window.cancelAnimationFrame(P), P = null, L = null), !T.measurementsEnabled) {
				Z();
				return;
			}
			try {
				await Oe();
			} catch (e) {
				console.warn("Unable to load draw measurement operators.", e);
				return;
			}
			if (n !== F || !T.measurementsEnabled) return;
			let r = qe(e, t), i = w.geo.map.esriView?.graphics;
			if (i) {
				try {
					I.length && i.removeMany(I);
				} catch (e) {
					console.warn("Unable to remove stale draw measurement graphics.", e);
				}
				I = r.map((e) => e.graphic);
				try {
					I.length && i.addMany(I);
				} catch (e) {
					console.warn("Unable to add draw measurement graphics.", e), I = [];
				}
				Je(r);
			}
		}, Ye = (e, t) => {
			if (!T.measurementsEnabled) {
				Z();
				return;
			}
			L = {
				activeGraphic: e,
				activeTool: t
			}, P === null && (P = window.requestAnimationFrame(() => {
				P = null;
				let e = L;
				L = null, Q(e?.activeGraphic, e?.activeTool);
			}));
		};
		x(() => T.selectedGraphicId, (e, t) => {
			if (!(!D || !k)) {
				if (!e) J(), q(), Y();
				else if (e !== t) {
					let t = k.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && Y(t);
				}
			}
		}), x(() => T.measurementsEnabled, (e) => {
			e ? Q() : Z(), w.updateAlert(_(e ? "draw.measurements.enabled" : "draw.measurements.disabled"));
		});
		let Xe = async () => {
			if (!k || !D || T.activeTool !== "edit") return;
			await w.geo.map.viewPromise;
			let e = w.geo.map.esriView, t = {
				x: e.width / 2,
				y: e.height / 2
			}, n = {
				x: t.x,
				y: t.y,
				width: 20,
				height: 20
			}, r = (await e.hitTest(n, { include: k })).results.filter((e) => !("graphic" in e) || e.graphic.layer !== k ? !1 : !!e.graphic.attributes?.id);
			r.length > 0 ? (we(r[0].graphic), w.updateAlert(_("draw.graphic.selected", { type: S(r[0].graphic.attributes?.type) }))) : (J(), D.cancel(), R = null, T.clearSelection());
		}, Ze = async () => {
			if (!D || !T.activeTool) return;
			await w.geo.map.viewPromise;
			let e = w.geo.map.esriView, t = {
				x: Math.floor(e.width / 2),
				y: Math.floor(e.height / 2)
			}, n = e.toMap(t), r = e.extent, i = r.width, a = r.height, s = Math.min(i, a) / 10, l;
			switch (T.activeTool) {
				case "point":
					l = new u({
						geometry: new o({
							x: n.x,
							y: n.y,
							spatialReference: e.spatialReference
						}),
						symbol: D.pointSymbol
					});
					break;
				case "polyline":
					l = new u({
						geometry: new d({
							paths: [[[n.x - s / 2, n.y], [n.x + s / 2, n.y]]],
							spatialReference: e.spatialReference
						}),
						symbol: D.polylineSymbol
					});
					break;
				case "polygon":
				case "rectangle":
					let t = s / 2;
					l = new u({
						geometry: new m({
							rings: [[
								[n.x - t, n.y - t],
								[n.x + t, n.y - t],
								[n.x + t, n.y + t],
								[n.x - t, n.y + t],
								[n.x - t, n.y - t]
							]],
							spatialReference: e.spatialReference
						}),
						symbol: D.polygonSymbol || new c({
							color: [
								0,
								255,
								0,
								.3
							],
							outline: {
								color: [
									0,
									255,
									0,
									1
								],
								width: 1
							}
						})
					});
					break;
				case "circle":
					let r = s / 2, i = [];
					for (let e = 0; e <= 36; e++) {
						let t = e / 36 * 2 * Math.PI, a = n.x + r * Math.cos(t), o = n.y + r * Math.sin(t);
						i.push([a, o]);
					}
					l = new u({
						geometry: new m({
							rings: [i],
							spatialReference: e.spatialReference
						}),
						symbol: D.polygonSymbol || new c({
							color: [
								255,
								0,
								255,
								.3
							],
							outline: {
								color: [
									255,
									0,
									255,
									1
								],
								width: 1
							}
						})
					});
					break;
				default:
					console.warn("Unknown tool type:", T.activeTool);
					return;
			}
			if (l) {
				let e = `graphic-${Date.now()}`;
				l.attributes = {
					id: e,
					type: T.activeTool
				}, k?.add(l), T.addGraphic({
					id: e,
					type: T.activeTool,
					geometry: l.geometry,
					attributes: l.attributes
				}), Q(), T.activeTool !== "point" && (T.clearSelection(), T.setActiveTool(""), w.keyboardNav?.reset(), D.cancel()), w.updateAlert(_("draw.graphic.created", { type: S(T.activeTool) }));
			}
		}, Qe = (e) => {
			let t = w.geo.map.esriView?.container;
			if (!(!document.activeElement || !t?.contains(document.activeElement))) switch (e.key) {
				case "Enter":
					if (e.preventDefault(), T.activeTool && T.activeTool !== "edit") if ((T.activeTool === "polyline" || T.activeTool === "polygon") && (B || H.length === 0)) {
						let e = w.geo.map.esriView, t = {
							x: Math.floor(e.width / 2),
							y: Math.floor(e.height / 2)
						}, n = e.toMap(t);
						B ? (H.push([n.x, n.y]), T.activeTool === "polyline" ? V.geometry = new d({
							paths: [H],
							spatialReference: e.spatialReference
						}) : V.geometry = new m({
							rings: [H],
							spatialReference: e.spatialReference
						}), Q(V, T.activeTool ?? void 0), w.updateAlert(_("draw.multiPoint.pointAdded", {
							type: S(T.activeTool),
							count: H.length
						}))) : (B = !0, H = [[n.x, n.y]], V = T.activeTool === "polyline" ? new u({
							geometry: new d({
								paths: [H],
								spatialReference: e.spatialReference
							}),
							symbol: D?.polylineSymbol || new s({
								color: [
									0,
									0,
									255,
									1
								],
								width: 2
							})
						}) : new u({
							geometry: new m({
								rings: [H],
								spatialReference: e.spatialReference
							}),
							symbol: D?.polygonSymbol || new c({
								color: [
									0,
									255,
									0,
									.3
								],
								outline: {
									color: [
										0,
										255,
										0,
										1
									],
									width: 1
								}
							})
						}), V.attributes = {
							id: `temp-graphic-${Date.now()}`,
							type: T.activeTool
						}, k?.add(V), Q(V, T.activeTool ?? void 0), w.updateAlert(_("draw.multiPoint.started", {
							type: S(T.activeTool),
							count: 1
						})));
					} else Ze();
					else Xe();
					break;
				case "Delete":
				case "Backspace":
					let t = w.geo.map.esriView;
					B && H.length > 1 ? (e.preventDefault(), H.pop(), T.activeTool === "polyline" ? V.geometry = new d({
						paths: [H],
						spatialReference: t.spatialReference
					}) : V.geometry = new m({
						rings: [H],
						spatialReference: t.spatialReference
					}), V.set("geometry", V?.geometry), Q(V, T.activeTool ?? void 0), w.updateAlert(_("draw.multiPoint.pointRemoved", {
						type: S(T.activeTool ?? void 0),
						count: H.length
					}))) : B && H.length === 1 ? (e.preventDefault(), V && k?.remove(V), V = null, H = [], B = !1, Q(), w.updateAlert(_("draw.multiPoint.canceled"))) : R && (e.preventDefault(), D?.delete(), k?.remove(R), typeof T.removeGraphic == "function" && T.removeGraphic(R.attributes.id), R = null, Y(void 0), Q(), w.updateAlert(_("draw.graphic.deleted")));
					break;
				case "Escape":
					T.setActiveTool(null), D?.cancel(), R = null, Y(void 0), T.clearSelection(), Q(), w.updateAlert(_("draw.tool.canceled"));
					break;
			}
		}, $e = (e) => {
			let t = w.geo.map.esriView.container;
			if (!document.activeElement || !t?.contains(document.activeElement) || !R || ![
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight"
			].includes(e.key)) return;
			e.preventDefault(), e.stopPropagation();
			let n = e.shiftKey, r = e.altKey, i = w.geo.map.esriView, a = 0, s = 0;
			e.key === "ArrowLeft" && (a = -10), e.key === "ArrowRight" && (a = 10), e.key === "ArrowUp" && (s = -10), e.key === "ArrowDown" && (s = 10);
			let c = R.geometry, l;
			if (c.type === "point") l = {
				x: c.x,
				y: c.y
			};
			else {
				let e = c.extent;
				l = {
					x: (e.xmin + e.xmax) / 2,
					y: (e.ymin + e.ymax) / 2
				};
			}
			let u = i.toScreen(new o({
				x: l.x,
				y: l.y,
				spatialReference: i.spatialReference
			}));
			u.x += a, u.y += s;
			let f = i.toMap(u), p = f.x - l.x, h = f.y - l.y, g;
			if (c.type === "point") !n && !r ? g = new o({
				x: c.x + p,
				y: c.y + h,
				spatialReference: c.spatialReference
			}) : n ? (g = c.clone(), w.updateAlert(_("draw.point.resize.unsupported"))) : r && (g = c.clone(), w.updateAlert(_("draw.point.rotate.unsupported")));
			else if (c.type === "polyline") {
				if (!n && !r) g = new d({
					paths: c.paths.map((e) => e.map(([e, t]) => [e + p, t + h])),
					spatialReference: c.spatialReference
				});
				else if (n) {
					let t = c, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					g = new d({
						paths: t.paths.map((e) => e.map(([e, t]) => [l.x + (e - l.x) * n, l.y + (t - l.y) * n])),
						spatialReference: c.spatialReference
					});
				} else if (r) {
					let t = c, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						g = new d({
							paths: t.paths.map((t) => t.map(([t, n]) => {
								let i = t - l.x, a = n - l.y, o = i * e - a * r, s = i * r + a * e;
								return [l.x + o, l.y + s];
							})),
							spatialReference: c.spatialReference
						});
					} else g = c.clone();
				}
			} else if (c.type === "polygon") {
				if (!n && !r) g = new m({
					rings: c.rings.map((e) => e.map(([e, t]) => [e + p, t + h])),
					spatialReference: c.spatialReference
				});
				else if (n) {
					let t = c, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					g = new m({
						rings: t.rings.map((e) => e.map(([e, t]) => [l.x + (e - l.x) * n, l.y + (t - l.y) * n])),
						spatialReference: c.spatialReference
					});
				} else if (r) {
					let t = c, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						g = new m({
							rings: t.rings.map((t) => t.map(([t, n]) => {
								let i = t - l.x, a = n - l.y, o = i * e - a * r, s = i * r + a * e;
								return [l.x + o, l.y + s];
							})),
							spatialReference: c.spatialReference
						});
					} else g = c.clone();
				}
			}
			if (g) {
				R.geometry = g, R.set("geometry", g), Y(R), R.attributes?.id && T.updateGraphicGeometry(R.attributes.id, g), Ye(R, R.attributes?.type);
				let e = n ? "resized" : r ? "rotated" : "moved";
				w.updateAlert(_(`draw.graphic.${e}`));
			}
		}, et = async (e) => {
			if (T.activeTool !== "edit") return;
			let t = (await w.geo.map.esriView.hitTest(e, { include: k })).results.find((e) => "graphic" in e && e.graphic.layer === k && !!e.graphic.attributes?.id);
			if (t) {
				D?.state === "active" ? (R = t.graphic, t.graphic.attributes?.id && T.selectGraphic(t.graphic.attributes.id), Y(t.graphic)) : we(t.graphic);
				return;
			}
			D?.state !== "active" && (J(), D?.cancel(), R = null, T.clearSelection(), Y());
		}, tt = async () => {
			let t = ++M;
			if (await w.geo.map.viewPromise, !(t !== M || !O.value || !w.geo.map.esriView)) {
				if (w.geo.layer.getLayer("RampDrawGraphicsLayer")) k = w.geo.layer.getLayer(C).esriLayer;
				else {
					let n = w.geo.layer.createLayer({
						id: C,
						layerType: e.GRAPHIC,
						cosmetic: !0,
						system: !0,
						url: ""
					});
					if (await w.geo.map.addLayer(n), t !== M || !w.geo.map.esriView) return;
					k = n.esriLayer;
				}
				k && (Object.assign(O.value, {
					view: w.geo.map.esriView,
					layer: k,
					availableCreateTools: [
						"point",
						"multipoint",
						"polyline",
						"polygon",
						"rectangle",
						"circle"
					],
					updateOnGraphicClick: !0,
					visibleElements: {
						createTools: {
							point: !0,
							polyline: !0,
							polygon: !0,
							rectangle: !0,
							circle: !0
						},
						selectionTools: { enable: !0 },
						settingsMenu: !1
					},
					defaultUpdateOptions: {
						enableRotation: !0,
						enableScaling: !0,
						highlightOptions: { enabled: !1 },
						toggleToolOnClick: !1
					}
				}), w.geo.map.esriView.ui.add(O.value, "bottom-right"), j ||= (O.value.addEventListener("arcgisCreate", xe), O.value.addEventListener("arcgisUpdate", Se), !0), D = O.value, A = w.geo.map.esriView.on("click", et), document.addEventListener("keydown", Qe), document.addEventListener("keydown", $e, { capture: !0 }), T.activeTool && T.activeTool !== "edit" && D.create(T.activeTool), T.measurementsEnabled && Q());
			}
		}, nt = () => {
			if (!W) return;
			let e = w.keyboardNav;
			if (!e) {
				W = void 0;
				return;
			}
			e.unregister(W), W = void 0;
		}, $ = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, destroySketch: n = !0 } = {}) => {
			M++, e && nt(), A &&= (A.remove(), null), D && (w.geo.map.esriView && w.geo.map.esriView.ui.remove(D), J(), q(), n && D.destroy()), j && O.value && (O.value.removeEventListener("arcgisCreate", xe), O.value.removeEventListener("arcgisUpdate", Se), j = !1), document.removeEventListener("keydown", Qe), document.removeEventListener("keydown", $e, { capture: !0 }), R = null, Y(void 0), J(), Z(), T.clearSelection(), t && T.activeTool && T.setActiveTool(null), B = !1, V = null, H = [], D = null, k = null;
		}, rt = (e) => {
			if (e.state === "active" && e.graphic) {
				Ye(e.graphic, e.tool);
				return;
			}
			if (e.state === "cancel") {
				Q();
				return;
			}
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = `graphic-${Date.now()}`;
				t.attributes = t.attributes || {}, t.attributes.id = n, t.attributes.type = e.tool, T.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), Q(t, e.tool), e.tool !== "point" && (T.setActiveTool(""), w.keyboardNav?.reset());
			}
		}, it = (e) => {
			let t = e.graphics[0];
			if (t) if (e.state === "start") {
				if (T.activeTool !== "edit") {
					q();
					return;
				}
				J(), R = t, t.attributes?.id && (T.selectGraphic(t.attributes.id), w.updateAlert(_("draw.graphic.selected", { type: S(t.attributes?.type) })));
			} else e.state === "active" ? (Y(t), Ye(t, t.attributes?.type)) : e.state === "complete" && (t.attributes?.id && (T.updateGraphicGeometry(t.attributes.id, t.geometry), w.updateAlert(_("draw.graphic.updated"))), Q(t, t.attributes?.type));
		};
		return le(() => {
			Ce(), tt(), U.push(w.event.on(t.MAP_DESTROYED, () => {
				$();
			})), U.push(w.event.on(t.MAP_REFRESH_START, () => {
				$({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					destroySketch: !1
				});
			})), U.push(w.event.on(t.MAP_REFRESH_END, () => {
				tt();
			})), U.push(w.event.on(t.FIXTURE_ADDED, (e) => {
				e.id === "panguard" && be();
			}));
		}), x(() => T.activeTool, (e) => {
			if (be(e), D && (J(), q(), Y(), V = null, H = [], B = !1, Q(), e && e != "edit")) try {
				D.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}, { immediate: !0 }), ue(() => {
			K !== null && (w.fixture.get("panguard")?.setEnabled(K), K = null), $(), U.forEach((e) => w.event.off(e));
		}), (e, t) => (de(), ae(re, null, [oe("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: O,
			style: { display: "none" }
		}, null, 512), he(T).measurementsEnabled ? (de(), ae("div", ve, me(G.value), 1)) : ie("", !0)], 64));
	}
}), T = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], E = 5, D = 15;
function O(e, t, n) {
	return e.type === "polygon" ? _.execute(e, t) : _.execute(e, n);
}
var k = class extends g {
	store;
	constructor(e, t) {
		super(e, t), this.store = v(this.$vApp.$pinia);
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(T);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(T);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return C;
	}
	suppressIdentify() {
		return !!this.store.activeTool || this.store.selectedGraphicId !== null;
	}
	getIdentifyGeometry(e) {
		let t = e.mapPoint.toESRI(), n = e.input === "touch" ? D : E, r = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, n).toESRI(), i = this.store.graphics.slice().reverse().find((e) => {
			let n = b(e.geometry);
			return n && O(n, t, r);
		});
		if (i?.geometry) return this.$iApi.geo.geom.geomEsriToRamp(b(i.geometry), i.id ?? i.attributes?.id);
	}
}, A = {
	en: {
		"draw.multiPoint.started": "{type} drawing started with 1 point",
		"draw.multiPoint.pointAdded": "Point added {count} points total",
		"draw.multiPoint.pointRemoved": "Point removed {count} points remaining",
		"draw.multiPoint.canceled": "Drawing canceled",
		"draw.multiPoint.completed": "{type} completed with {count} points",
		"draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required",
		"draw.graphic.created": "{type} created",
		"draw.graphic.selected": "{type} selected",
		"draw.graphic.deselected": "Graphic deselected",
		"draw.graphic.deleted": "Graphic deleted",
		"draw.graphic.updated": "Graphic updated",
		"draw.graphic.none": "No graphic found",
		"draw.tool.canceled": "Drawing tool canceled",
		"draw.point.resize.unsupported": "Resizing not supported for point graphics",
		"draw.point.rotate.unsupported": "Rotation not supported for point graphics",
		"draw.move.up": "Moved up",
		"draw.move.down": "Moved down",
		"draw.move.left": "Moved left",
		"draw.move.right": "Moved right",
		"draw.resize.increase": "Increased size",
		"draw.resize.decrease": "Decreased size",
		"draw.rotate.clockwise": "Rotated clockwise",
		"draw.rotate.counterclockwise": "Rotated counter-clockwise",
		"draw.button.point": "Draw point",
		"draw.button.polyline": "Draw line",
		"draw.button.polygon": "Draw polygon",
		"draw.button.rectangle": "Draw rectangle",
		"draw.button.circle": "Draw circle",
		"draw.button.measurements": "Toggle measurements",
		"draw.point.tooltip": "Draw point",
		"draw.polyline.tooltip": "Draw polyline",
		"draw.polygon.tooltip": "Draw polygon",
		"draw.circle.tooltip": "Draw circle",
		"draw.rectangle.tooltip": "Draw rectangle",
		"draw.edit.tooltip": "Edit Mode",
		"draw.measurements.tooltip": "Toggle measurements",
		"draw.measurements.enabled": "Measurements displayed",
		"draw.measurements.disabled": "Measurements hidden",
		"draw.measurements.summary": "Draw measurements. {measurements}",
		"draw.measurements.none": "No draw measurements available",
		"draw.measurements.segment": "Segment {index} distance {distance}",
		"draw.measurements.area": "Area {area}",
		"draw.keyboard.namespace": "Draw Tools",
		"draw.keyboard.key.point": "Draw a point",
		"draw.keyboard.key.polyline": "Draw a line",
		"draw.keyboard.key.polygon": "Draw a polygon",
		"draw.keyboard.key.circle": "Draw a circle",
		"draw.keyboard.key.rectangle": "Draw a rectangle",
		"draw.keyboard.key.measurements": "Toggle measurements",
		"draw.keyboard.key.edit": "Edit geometry",
		"draw.graphic.moved": "Graphic moved",
		"draw.shape": "shape",
		"draw.point": "point",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyline",
		"draw.polygon": "polygon",
		"draw.rectangle": "rectangle",
		"draw.circle": "circle",
		"draw.unknown": "unknown"
	},
	fr: {
		"draw.multiPoint.started": "Dessin de {type} commencé avec 1 point",
		"draw.multiPoint.pointAdded": "Point ajouté",
		"draw.multiPoint.pointRemoved": "Point supprimé",
		"draw.multiPoint.canceled": "Dessin annulé",
		"draw.multiPoint.completed": "{type} terminé avec {count} points",
		"draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}",
		"draw.graphic.created": "{type} créé",
		"draw.graphic.selected": "{type} sélectionné",
		"draw.graphic.deselected": "Graphique désélectionné",
		"draw.graphic.deleted": "Graphique supprimé",
		"draw.graphic.updated": "Graphique mis à jour",
		"draw.graphic.none": "Aucun graphique trouvé",
		"draw.tool.canceled": "Outil de dessin annulé",
		"draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points",
		"draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points",
		"draw.move.up": "Déplacé vers le haut",
		"draw.move.down": "Déplacé vers le bas",
		"draw.move.left": "Déplacé vers la gauche",
		"draw.move.right": "Déplacé vers la droite",
		"draw.resize.increase": "Taille augmentée",
		"draw.resize.decrease": "Taille réduite",
		"draw.rotate.clockwise": "Rotation dans le sens horaire",
		"draw.rotate.counterclockwise": "Rotation dans le sens antihoraire",
		"draw.button.point": "Dessiner un point",
		"draw.button.polyline": "Dessiner une ligne",
		"draw.button.polygon": "Dessiner un polygone",
		"draw.button.rectangle": "Dessiner un rectangle",
		"draw.button.circle": "Dessiner un cercle",
		"draw.button.measurements": "Afficher ou masquer les mesures",
		"draw.point.tooltip": "Dessiner un point",
		"draw.polyline.tooltip": "Dessiner une polyligne",
		"draw.polygon.tooltip": "Dessiner un polygone",
		"draw.circle.tooltip": "Dessiner un cercle",
		"draw.rectangle.tooltip": "Dessiner un rectangle",
		"draw.edit.tooltip": "Mode édition",
		"draw.measurements.tooltip": "Afficher ou masquer les mesures",
		"draw.measurements.enabled": "Mesures affichees",
		"draw.measurements.disabled": "Mesures masquees",
		"draw.measurements.summary": "Mesures de dessin. {measurements}",
		"draw.measurements.none": "Aucune mesure disponible",
		"draw.measurements.segment": "Segment {index} distance {distance}",
		"draw.measurements.area": "Superficie {area}",
		"draw.keyboard.namespace": "Outils de dessin",
		"draw.keyboard.key.point": "Dessine un point",
		"draw.keyboard.key.polyline": "Dessine une ligne",
		"draw.keyboard.key.polygon": "Dessine un polygone",
		"draw.keyboard.key.circle": "Dessine un cercle",
		"draw.keyboard.key.rectangle": "Dessine un rectangle",
		"draw.keyboard.key.measurements": "Afficher ou masquer les mesures",
		"draw.keyboard.key.edit": "Mode édition",
		"draw.graphic.moved": "Graphique déplacé",
		"draw.shape": "forme",
		"draw.point": "indiquer",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyligne",
		"draw.polygon": "polygone",
		"draw.rectangle": "rectangle",
		"draw.circle": "cercle",
		"draw.unknown": "inconnue"
	}
}, j = class extends k {
	unregisterIdentifyGeometryProvider;
	async init() {
		Object.entries(A).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config), v(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, y(S(/* @__PURE__ */ Object.assign({
				"./icons/circle-icon.vue": () => import("./circle-icon-BjDhPjLl.js"),
				"./icons/edit-icon.vue": () => import("./edit-icon-Cfj6GpTI.js"),
				"./icons/measure-icon.vue": () => import("./measure-icon-F-8POpBh.js").then((e) => e.n),
				"./icons/point-icon.vue": () => import("./point-icon-D3vNK46O.js"),
				"./icons/polygon-icon.vue": () => import("./polygon-icon-ExarLdRk.js"),
				"./icons/polyline-icon.vue": () => import("./polyline-icon-B-EK0ndq.js"),
				"./icons/rectangle-icon.vue": () => import("./rectangle-icon-DTCqUT6_.js")
			}), `./icons/${e.type}-icon.vue`, 3)));
		});
		let { el: e } = this.mount(w, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]);
	}
	async added() {
		this.unregisterIdentifyGeometryProvider ||= this.$iApi.geo.map.registerIdentifyGeometryProvider(this), this.$iApi.event.on(t.MAP_CREATED, () => {
			this.init();
		});
	}
	removed() {
		this.unregisterIdentifyGeometryProvider?.(), this.unregisterIdentifyGeometryProvider = void 0;
	}
};
//#endregion
export { j as default };
