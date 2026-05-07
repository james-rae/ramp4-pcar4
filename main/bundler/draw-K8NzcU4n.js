import { B as e, at as t, et as n, ht as r, it as i, nt as a, ot as o, rt as s, s as c, st as l, tt as u } from "./main-Ll3BQWQ6.js";
import { t as d } from "./store-tn1e5ey6.js";
import { createElementBlock as f, defineComponent as p, inject as m, markRaw as h, onMounted as g, onUnmounted as _, openBlock as v, reactive as y, toRaw as b, useTemplateRef as x, watch as S } from "vue";
import { useI18n as C } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var w = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, T = "RampDrawGraphicsLayer", E = /* @__PURE__ */ p({
	__name: "draw",
	setup(c) {
		let { t: u, availableLocales: p, locale: h } = C(), b = (e) => u(e ? `draw.${e}` : "draw.unknown"), w = m("iApi"), E = d(), D = (e) => {
			let t = p.length ? p : [h.value], n = {};
			for (let r of t) n[r] = u(e, {}, { locale: r });
			return n;
		}, O = null, k = x("sketchEl"), A = null, j = null, M = !1, N = 0, P = null, F = null, I = !1, L = null, R = [], z = y([]), B, V = (e) => {
			ee(e.detail);
		}, H = (e) => {
			te(e.detail);
		}, U = () => {
			try {
				O?.cancel();
			} catch (e) {
				console.warn("Unable to cancel draw sketch.", e);
			}
		};
		async function W() {
			let e = w.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			B &&= (e.unregister(B), void 0), B = e.register("D", {
				name: D("draw.keyboard.namespace"),
				activeHandler: () => {
					E.setActiveTool("");
				},
				deactiveHandler: () => {
					E.setActiveTool(null);
				},
				keys: [
					{
						key: "P",
						description: D("draw.keyboard.key.point"),
						handler: () => {
							E.setActiveTool("point");
						}
					},
					{
						key: "L",
						description: D("draw.keyboard.key.polyline"),
						handler: () => {
							E.setActiveTool("polyline");
						}
					},
					{
						key: "G",
						description: D("draw.keyboard.key.polygon"),
						handler: () => {
							E.setActiveTool("polygon");
						}
					},
					{
						key: "C",
						description: D("draw.keyboard.key.circle"),
						handler: () => {
							E.setActiveTool("circle");
						}
					},
					{
						key: "R",
						description: D("draw.keyboard.key.rectangle"),
						handler: () => {
							E.setActiveTool("rectangle");
						}
					},
					{
						key: "E",
						description: D("draw.keyboard.key.edit"),
						handler: () => {
							E.setActiveTool("edit");
						}
					}
				]
			});
		}
		let G = (e) => {
			if (F &&= (A?.remove(F), null), !e) return;
			let r;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					r = new l({
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
					r = new o({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: r = new t({
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
			F = new n({
				geometry: e.geometry,
				symbol: r
			}), A?.add(F);
		};
		S(() => E.selectedGraphicId, (e, t) => {
			if (!(!O || !A)) {
				if (!e) U(), G();
				else if (e !== t) {
					let t = A.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (O.triggerUpdate([t]), G(t));
				}
			}
		});
		let K = async () => {
			if (!A || !O || E.activeTool !== "edit") return;
			await w.geo.map.viewPromise;
			let e = w.geo.map.esriView, t = {
				x: e.width / 2,
				y: e.height / 2
			}, n = {
				x: t.x,
				y: t.y,
				width: 20,
				height: 20
			}, r = (await e.hitTest(n)).results.filter((e) => !("graphic" in e) || e.graphic.layer !== A ? !1 : !!e.graphic.attributes?.id);
			r.length > 0 ? (P = r[0].graphic, O.triggerUpdate([P]), P.attributes?.id && E.selectGraphic(P.attributes.id), w.updateAlert(u("draw.graphic.selected", { type: b(P.attributes?.type) }))) : (O.cancel(), P = null, E.clearSelection());
		}, q = async () => {
			if (!O || !E.activeTool) return;
			await w.geo.map.viewPromise;
			let e = w.geo.map.esriView, r = {
				x: Math.floor(e.width / 2),
				y: Math.floor(e.height / 2)
			}, o = e.toMap(r), c = e.extent, l = c.width, d = c.height, f = Math.min(l, d) / 10, p;
			switch (E.activeTool) {
				case "point":
					p = new n({
						geometry: new a({
							x: o.x,
							y: o.y,
							spatialReference: e.spatialReference
						}),
						symbol: O.pointSymbol
					});
					break;
				case "polyline":
					p = new n({
						geometry: new i({
							paths: [[[o.x - f / 2, o.y], [o.x + f / 2, o.y]]],
							spatialReference: e.spatialReference
						}),
						symbol: O.polylineSymbol
					});
					break;
				case "polygon":
				case "rectangle":
					let r = f / 2;
					p = new n({
						geometry: new s({
							rings: [[
								[o.x - r, o.y - r],
								[o.x + r, o.y - r],
								[o.x + r, o.y + r],
								[o.x - r, o.y + r],
								[o.x - r, o.y - r]
							]],
							spatialReference: e.spatialReference
						}),
						symbol: O.polygonSymbol || new t({
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
					let c = f / 2, l = [];
					for (let e = 0; e <= 36; e++) {
						let t = e / 36 * 2 * Math.PI, n = o.x + c * Math.cos(t), r = o.y + c * Math.sin(t);
						l.push([n, r]);
					}
					p = new n({
						geometry: new s({
							rings: [l],
							spatialReference: e.spatialReference
						}),
						symbol: O.polygonSymbol || new t({
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
					console.warn("Unknown tool type:", E.activeTool);
					return;
			}
			if (p) {
				let e = `graphic-${Date.now()}`;
				p.attributes = {
					id: e,
					type: E.activeTool
				}, A?.add(p), E.addGraphic({
					id: e,
					type: E.activeTool,
					geometry: p.geometry,
					attributes: p.attributes
				}), E.activeTool !== "point" && (E.clearSelection(), E.setActiveTool(""), w.keyboardNav?.reset(), O.cancel()), w.updateAlert(u("draw.graphic.created", { type: b(E.activeTool) }));
			}
		}, J = (e) => {
			let r = w.geo.map.esriView?.container;
			if (!(!document.activeElement || !r?.contains(document.activeElement))) switch (e.key) {
				case "Enter":
					if (e.preventDefault(), E.activeTool && E.activeTool !== "edit") if ((E.activeTool === "polyline" || E.activeTool === "polygon") && (I || R.length === 0)) {
						let e = w.geo.map.esriView, r = {
							x: Math.floor(e.width / 2),
							y: Math.floor(e.height / 2)
						}, a = e.toMap(r);
						I ? (R.push([a.x, a.y]), E.activeTool === "polyline" ? L.geometry = new i({
							paths: [R],
							spatialReference: e.spatialReference
						}) : L.geometry = new s({
							rings: [R],
							spatialReference: e.spatialReference
						}), w.updateAlert(u("draw.multiPoint.pointAdded", {
							type: b(E.activeTool),
							count: R.length
						}))) : (I = !0, R = [[a.x, a.y]], L = E.activeTool === "polyline" ? new n({
							geometry: new i({
								paths: [R],
								spatialReference: e.spatialReference
							}),
							symbol: O?.polylineSymbol || new o({
								color: [
									0,
									0,
									255,
									1
								],
								width: 2
							})
						}) : new n({
							geometry: new s({
								rings: [R],
								spatialReference: e.spatialReference
							}),
							symbol: O?.polygonSymbol || new t({
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
						}), L.attributes = {
							id: `temp-graphic-${Date.now()}`,
							type: E.activeTool
						}, A?.add(L), w.updateAlert(u("draw.multiPoint.started", {
							type: b(E.activeTool),
							count: 1
						})));
					} else q();
					else K();
					break;
				case "Delete":
				case "Backspace":
					let r = w.geo.map.esriView;
					I && R.length > 1 ? (e.preventDefault(), R.pop(), E.activeTool === "polyline" ? L.geometry = new i({
						paths: [R],
						spatialReference: r.spatialReference
					}) : L.geometry = new s({
						rings: [R],
						spatialReference: r.spatialReference
					}), L.set("geometry", L?.geometry), w.updateAlert(u("draw.multiPoint.pointRemoved", {
						type: b(E.activeTool ?? void 0),
						count: R.length
					}))) : I && R.length === 1 ? (e.preventDefault(), L && A?.remove(L), L = null, R = [], I = !1, w.updateAlert(u("draw.multiPoint.canceled"))) : P && (e.preventDefault(), O?.delete(), A?.remove(P), typeof E.removeGraphic == "function" && E.removeGraphic(P.attributes.id), P = null, G(void 0), w.updateAlert(u("draw.graphic.deleted")));
					break;
				case "Escape":
					E.setActiveTool(null), O?.cancel(), P = null, G(void 0), E.clearSelection(), w.updateAlert(u("draw.tool.canceled"));
					break;
			}
		}, Y = (e) => {
			let t = w.geo.map.esriView.container;
			if (!document.activeElement || !t?.contains(document.activeElement) || !P || ![
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight"
			].includes(e.key)) return;
			e.preventDefault(), e.stopPropagation();
			let n = e.shiftKey, r = e.altKey, o = w.geo.map.esriView, c = 0, l = 0;
			e.key === "ArrowLeft" && (c = -10), e.key === "ArrowRight" && (c = 10), e.key === "ArrowUp" && (l = -10), e.key === "ArrowDown" && (l = 10);
			let d = P.geometry, f;
			if (d.type === "point") f = {
				x: d.x,
				y: d.y
			};
			else {
				let e = d.extent;
				f = {
					x: (e.xmin + e.xmax) / 2,
					y: (e.ymin + e.ymax) / 2
				};
			}
			let p = o.toScreen(new a({
				x: f.x,
				y: f.y,
				spatialReference: o.spatialReference
			}));
			p.x += c, p.y += l;
			let m = o.toMap(p), h = m.x - f.x, g = m.y - f.y, _;
			if (d.type === "point") !n && !r ? _ = new a({
				x: d.x + h,
				y: d.y + g,
				spatialReference: d.spatialReference
			}) : n ? (_ = d.clone(), w.updateAlert(u("draw.point.resize.unsupported"))) : r && (_ = d.clone(), w.updateAlert(u("draw.point.rotate.unsupported")));
			else if (d.type === "polyline") {
				if (!n && !r) _ = new i({
					paths: d.paths.map((e) => e.map(([e, t]) => [e + h, t + g])),
					spatialReference: d.spatialReference
				});
				else if (n) {
					let t = d, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					_ = new i({
						paths: t.paths.map((e) => e.map(([e, t]) => [f.x + (e - f.x) * n, f.y + (t - f.y) * n])),
						spatialReference: d.spatialReference
					});
				} else if (r) {
					let t = d, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						_ = new i({
							paths: t.paths.map((t) => t.map(([t, n]) => {
								let i = t - f.x, a = n - f.y, o = i * e - a * r, s = i * r + a * e;
								return [f.x + o, f.y + s];
							})),
							spatialReference: d.spatialReference
						});
					} else _ = d.clone();
				}
			} else if (d.type === "polygon") {
				if (!n && !r) _ = new s({
					rings: d.rings.map((e) => e.map(([e, t]) => [e + h, t + g])),
					spatialReference: d.spatialReference
				});
				else if (n) {
					let t = d, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					_ = new s({
						rings: t.rings.map((e) => e.map(([e, t]) => [f.x + (e - f.x) * n, f.y + (t - f.y) * n])),
						spatialReference: d.spatialReference
					});
				} else if (r) {
					let t = d, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						_ = new s({
							rings: t.rings.map((t) => t.map(([t, n]) => {
								let i = t - f.x, a = n - f.y, o = i * e - a * r, s = i * r + a * e;
								return [f.x + o, f.y + s];
							})),
							spatialReference: d.spatialReference
						});
					} else _ = d.clone();
				}
			}
			if (_) {
				P.geometry = _, P.set("geometry", _), G(P), P.attributes?.id && E.updateGraphicGeometry(P.attributes.id, _);
				let e = n ? "resized" : r ? "rotated" : "moved";
				w.updateAlert(u(`draw.graphic.${e}`));
			}
		}, X = async (e) => {
			let t = (await w.geo.map.esriView.hitTest(e)).results.find((e) => "graphic" in e && e.graphic.layer === A && !!e.graphic.attributes?.id);
			t && E.activeTool === "edit" ? O?.triggerUpdate([t.graphic]) : (O?.cancel(), P = null, E.clearSelection(), G());
		}, Z = async () => {
			let e = ++N;
			if (await w.geo.map.viewPromise, !(e !== N || !k.value || !w.geo.map.esriView)) {
				if (w.geo.layer.getLayer("RampDrawGraphicsLayer")) A = w.geo.layer.getLayer(T).esriLayer;
				else {
					let t = w.geo.layer.createLayer({
						id: T,
						layerType: r.GRAPHIC,
						cosmetic: !0,
						system: !0,
						url: ""
					});
					if (await w.geo.map.addLayer(t), e !== N || !w.geo.map.esriView) return;
					A = t.esriLayer;
				}
				A && (Object.assign(k.value, {
					view: w.geo.map.esriView,
					layer: A,
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
					defaultUpdateOptions: { highlightOptions: { enabled: !1 } }
				}), w.geo.map.esriView.ui.add(k.value, "bottom-right"), M ||= (k.value.addEventListener("arcgisCreate", V), k.value.addEventListener("arcgisUpdate", H), !0), O = k.value, j = w.geo.map.esriView.on("click", X), document.addEventListener("keydown", J), document.addEventListener("keydown", Y, { capture: !0 }), E.activeTool && E.activeTool !== "edit" && O.create(E.activeTool));
			}
		}, Q = () => {
			if (!B) return;
			let e = w.keyboardNav;
			if (!e) {
				B = void 0;
				return;
			}
			e.unregister(B), B = void 0;
		}, $ = ({ cleanupKeyboard: e = !0, clearActiveTool: t = !1, destroySketch: n = !0 } = {}) => {
			N++, e && Q(), j &&= (j.remove(), null), O && (w.geo.map.esriView && w.geo.map.esriView.ui.remove(O), U(), n && O.destroy()), M && k.value && (k.value.removeEventListener("arcgisCreate", V), k.value.removeEventListener("arcgisUpdate", H), M = !1), document.removeEventListener("keydown", J), document.removeEventListener("keydown", Y, { capture: !0 }), P = null, G(void 0), E.clearSelection(), t && E.activeTool && E.setActiveTool(null), I = !1, L = null, R = [], O = null, A = null;
		}, ee = (e) => {
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = `graphic-${Date.now()}`;
				t.attributes = t.attributes || {}, t.attributes.id = n, E.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), e.tool !== "point" && (E.setActiveTool(""), w.keyboardNav?.reset());
			}
		}, te = (e) => {
			let t = e.graphics[0];
			if (t) if (e.state === "start") {
				if (E.activeTool !== "edit") {
					U();
					return;
				}
				P = t, t.attributes?.id && (E.selectGraphic(t.attributes.id), w.updateAlert(u("draw.graphic.selected", { type: b(t.attributes?.type) })));
			} else e.state === "active" ? G(t) : e.state === "complete" && t.attributes?.id && (E.updateGraphicGeometry(t.attributes.id, t.geometry), w.updateAlert(u("draw.graphic.updated")));
		};
		return g(() => {
			W(), Z(), z.push(w.event.on(e.MAP_DESTROYED, () => {
				$();
			})), z.push(w.event.on(e.MAP_REFRESH_START, () => {
				$({
					cleanupKeyboard: !1,
					clearActiveTool: !0,
					destroySketch: !1
				});
			})), z.push(w.event.on(e.MAP_REFRESH_END, () => {
				Z();
			}));
		}), S(() => E.activeTool, (e) => {
			if (O && (U(), G(), L = null, R = [], I = !1, e && e != "edit")) try {
				O.create(e);
			} catch (e) {
				console.warn("Unable to start draw sketch.", e);
			}
		}), _(() => {
			$(), z.forEach((e) => w.event.off(e));
		}), (e, t) => (v(), f("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: k,
			style: { display: "none" }
		}, null, 512));
	}
}), D = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], O = 5, k = 15;
function A(e, t, n) {
	return e.type === "polygon" ? u.execute(e, t) : u.execute(e, n);
}
var j = class extends c {
	store;
	constructor(e, t) {
		super(e, t), this.store = d(this.$vApp.$pinia);
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(D);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(D);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return T;
	}
	suppressIdentify() {
		return !!this.store.activeTool || this.store.selectedGraphicId !== null;
	}
	getIdentifyGeometry(e) {
		let t = e.mapPoint.toESRI(), n = e.input === "touch" ? k : O, r = this.$iApi.geo.query.makeClickBuffer(e.mapPoint, n).toESRI(), i = this.store.graphics.slice().reverse().find((e) => {
			let n = b(e.geometry);
			return n && A(n, t, r);
		});
		if (i?.geometry) return this.$iApi.geo.geom.geomEsriToRamp(b(i.geometry), i.id ?? i.attributes?.id);
	}
}, M = {
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
		"draw.point.tooltip": "Draw point",
		"draw.polyline.tooltip": "Draw polyline",
		"draw.polygon.tooltip": "Draw polygon",
		"draw.circle.tooltip": "Draw circle",
		"draw.rectangle.tooltip": "Draw rectangle",
		"draw.edit.tooltip": "Edit Mode",
		"draw.keyboard.namespace": "Draw Tools",
		"draw.keyboard.key.point": "Draw a point",
		"draw.keyboard.key.polyline": "Draw a line",
		"draw.keyboard.key.polygon": "Draw a polygon",
		"draw.keyboard.key.circle": "Draw a circle",
		"draw.keyboard.key.rectangle": "Draw a rectangle",
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
		"draw.point.tooltip": "Dessiner un point",
		"draw.polyline.tooltip": "Dessiner une polyligne",
		"draw.polygon.tooltip": "Dessiner un polygone",
		"draw.circle.tooltip": "Dessiner un cercle",
		"draw.rectangle.tooltip": "Dessiner un rectangle",
		"draw.edit.tooltip": "Mode édition",
		"draw.keyboard.namespace": "Outils de dessin",
		"draw.keyboard.key.point": "Dessine un point",
		"draw.keyboard.key.polyline": "Dessine une ligne",
		"draw.keyboard.key.polygon": "Dessine un polygone",
		"draw.keyboard.key.circle": "Dessine un cercle",
		"draw.keyboard.key.rectangle": "Dessine un rectangle",
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
}, N = class extends j {
	unregisterIdentifyGeometryProvider;
	async init() {
		Object.entries(M).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config), d(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, h(w(/* @__PURE__ */ Object.assign({
				"./icons/circle-icon.vue": () => import("./circle-icon-l-MW3BsG.js"),
				"./icons/edit-icon.vue": () => import("./edit-icon-CdQGWBnd.js"),
				"./icons/point-icon.vue": () => import("./point-icon-CqBcZKw-.js"),
				"./icons/polygon-icon.vue": () => import("./polygon-icon-Cuub0vzq.js"),
				"./icons/polyline-icon.vue": () => import("./polyline-icon-DHkEaMJO.js"),
				"./icons/rectangle-icon.vue": () => import("./rectangle-icon-CgBD81-X.js")
			}), `./icons/${e.type}-icon.vue`, 3)));
		});
		let { el: e } = this.mount(E, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]);
	}
	async added() {
		this.unregisterIdentifyGeometryProvider ||= this.$iApi.geo.map.registerIdentifyGeometryProvider(this), this.$iApi.event.on(e.MAP_CREATED, () => {
			this.init();
		});
	}
	removed() {
		this.unregisterIdentifyGeometryProvider?.(), this.unregisterIdentifyGeometryProvider = void 0;
	}
};
//#endregion
export { N as default };
