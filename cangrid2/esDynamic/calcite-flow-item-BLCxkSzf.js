import { c$ as A, d0 as F, e_ as m, cX as t, d1 as B } from "./main-DHXLMse1.js";
import { l as d, u as S, o as V, t as x, g as Y } from "./dom-BD6OZEvo.js";
import { u as z, I as H } from "./interactive-J31s-uXp.js";
import { s as P, a as L, c as I } from "./loadable-By8v9cXG.js";
import { c as T, d as M } from "./locale-BWfU23IG.js";
import { c as O, s as D, d as $, u as R } from "./t9n-2Iu_Noy9.js";
import { c as Z } from "./observers-Bi3Qhj76.js";
import { d as _, a as j, b as N, S as ee, H as te } from "./action-menu-DV_TgHzJ.js";
import { d as U } from "./action-0gQ5HIRg.js";
import { d as W } from "./icon-Dt1qIaUr.js";
import { d as K } from "./loader-D9MEKYSI.js";
import { d as q } from "./scrim-DHudEh-o.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const s = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer",
  footerContent: "footer-content",
  footerActions: "footer-actions",
  footerStart: "footer-start",
  footerEnd: "footer-end"
}, E = {
  close: "close",
  collapse: "collapse"
}, v = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right",
  expand: "chevron-down",
  collapse: "chevron-up"
}, o = {
  actionBar: "action-bar",
  alerts: "alerts",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerEnd: "footer-end",
  footerStart: "footer-start",
  footerActions: "footer-actions"
}, ne = `:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`, oe = ne, ae = /* @__PURE__ */ A(class extends F {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePanelClose = m(this, "calcitePanelClose", 6), this.calcitePanelToggle = m(this, "calcitePanelToggle", 6), this.calcitePanelScroll = m(this, "calcitePanelScroll", 6), this.resizeObserver = Z("resize", () => this.resizeHandler()), this.resizeHandler = () => {
      const { panelScrollEl: e } = this;
      if (!e || typeof e.scrollHeight != "number" || typeof e.offsetHeight != "number")
        return;
      e.scrollHeight > e.offsetHeight ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex");
    }, this.setContainerRef = (e) => {
      this.containerEl = e;
    }, this.panelKeyDownHandler = (e) => {
      this.closable && e.key === "Escape" && !e.defaultPrevented && (this.handleUserClose(), e.preventDefault());
    }, this.handleUserClose = () => {
      this.closed = !0, this.calcitePanelClose.emit();
    }, this.open = () => {
      this.isClosed = !1;
    }, this.close = async () => {
      const e = this.beforeClose ?? (() => Promise.resolve());
      try {
        await e();
      } catch {
        requestAnimationFrame(() => {
          this.closed = !1;
        });
        return;
      }
      this.isClosed = !0;
    }, this.collapse = () => {
      this.collapsed = !this.collapsed, this.calcitePanelToggle.emit();
    }, this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    }, this.handleHeaderActionsStartSlotChange = (e) => {
      this.hasStartActions = d(e);
    }, this.handleHeaderActionsEndSlotChange = (e) => {
      this.hasEndActions = d(e);
    }, this.handleHeaderMenuActionsSlotChange = (e) => {
      this.hasMenuItems = d(e);
    }, this.handleActionBarSlotChange = (e) => {
      const n = S(e).filter((a) => a?.matches("calcite-action-bar"));
      n.forEach((a) => a.layout = "horizontal"), this.hasActionBar = !!n.length;
    }, this.handleHeaderContentSlotChange = (e) => {
      this.hasHeaderContent = d(e);
    }, this.handleFabSlotChange = (e) => {
      this.hasFab = d(e);
    }, this.handleFooterActionsSlotChange = (e) => {
      this.hasFooterActions = d(e);
    }, this.handleFooterEndSlotChange = (e) => {
      this.hasFooterEndContent = d(e);
    }, this.handleFooterStartSlotChange = (e) => {
      this.hasFooterStartContent = d(e);
    }, this.handleFooterSlotChange = (e) => {
      this.hasFooterContent = d(e);
    }, this.contentBottomSlotChangeHandler = (e) => {
      this.hasContentBottom = d(e);
    }, this.contentTopSlotChangeHandler = (e) => {
      this.hasContentTop = d(e);
    }, this.setPanelScrollEl = (e) => {
      this.panelScrollEl = e, this.resizeObserver?.disconnect(), e && (this.resizeObserver?.observe(e), this.resizeHandler());
    }, this.handleAlertsSlotChange = (e) => {
      S(e)?.map((n) => {
        n.nodeName === "CALCITE-ALERT" && (n.embedded = !0);
      });
    }, this.beforeClose = void 0, this.closed = !1, this.disabled = !1, this.closable = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.headingLevel = void 0, this.loading = !1, this.heading = void 0, this.description = void 0, this.menuFlipPlacements = void 0, this.menuOpen = !1, this.menuPlacement = N, this.messageOverrides = void 0, this.messages = void 0, this.overlayPositioning = "absolute", this.scale = "m", this.isClosed = !1, this.hasStartActions = !1, this.hasEndActions = !1, this.hasMenuItems = !1, this.hasHeaderContent = !1, this.hasActionBar = !1, this.hasContentBottom = !1, this.hasContentTop = !1, this.hasFab = !1, this.hasFooterActions = !1, this.hasFooterContent = !1, this.hasFooterEndContent = !1, this.hasFooterStartContent = !1, this.defaultMessages = void 0, this.effectiveLocale = "", this.showHeaderContent = !1;
  }
  toggleDialog(e) {
    e ? this.close() : this.open();
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    T(this), O(this);
  }
  async componentWillLoad() {
    P(this), this.isClosed = this.closed, await D(this);
  }
  componentDidLoad() {
    L(this);
  }
  componentDidRender() {
    z(this);
  }
  disconnectedCallback() {
    M(this), $(this), this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    R(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await I(this), V(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    this.panelScrollEl?.scrollTo(e);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading: e, headingLevel: n, description: a, hasHeaderContent: i } = this, l = e ? t(te, { class: s.heading, level: n }, e) : null, r = a ? t("span", { class: s.description }, a) : null;
    return !i && (l || r) ? t("div", { class: s.headerContent, key: "header-content" }, l, r) : null;
  }
  renderActionBar() {
    return t("div", { class: s.actionBarContainer, hidden: !this.hasActionBar }, t("slot", { name: o.actionBar, onSlotchange: this.handleActionBarSlotChange }));
  }
  renderHeaderSlottedContent() {
    return t("div", { class: s.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, t("slot", { name: o.headerContent, onSlotchange: this.handleHeaderContentSlotChange }));
  }
  renderHeaderStartActions() {
    const { hasStartActions: e } = this;
    return t("div", { class: { [s.headerActionsStart]: !0, [s.headerActions]: !0 }, hidden: !e, key: "header-actions-start" }, t("slot", { name: o.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange }));
  }
  renderHeaderActionsEnd() {
    const { hasEndActions: e, messages: n, closable: a, collapsed: i, collapseDirection: l, collapsible: r, hasMenuItems: h } = this, { collapse: f, expand: p, close: g } = n, b = [v.expand, v.collapse];
    l === "up" && b.reverse();
    const u = r ? t("calcite-action", { "aria-expanded": x(!i), "aria-label": f, icon: i ? b[0] : b[1], id: E.collapse, onClick: this.collapse, scale: this.scale, text: f, title: i ? p : f }) : null, C = a ? t("calcite-action", { "aria-label": g, icon: v.close, id: E.close, onClick: this.handleUserClose, scale: this.scale, text: g, title: g }) : null, y = t("slot", { name: o.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }), Q = e || u || C || h;
    return t("div", { class: { [s.headerActionsEnd]: !0, [s.headerActions]: !0 }, hidden: !Q, key: "header-actions-end" }, y, this.renderMenu(), u, C);
  }
  renderMenu() {
    const { hasMenuItems: e, messages: n, menuOpen: a, menuFlipPlacements: i, menuPlacement: l } = this;
    return t("calcite-action-menu", { flipPlacements: i ?? ["top", "bottom"], hidden: !e, key: "menu", label: n.options, open: a, overlayPositioning: this.overlayPositioning, placement: l }, t("calcite-action", { icon: v.menu, scale: this.scale, slot: ee.trigger, text: n.options }), t("slot", { name: o.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange }));
  }
  renderHeaderNode() {
    const { hasHeaderContent: e, hasStartActions: n, hasEndActions: a, closable: i, collapsible: l, hasMenuItems: r, hasActionBar: h } = this, f = this.renderHeaderContent(), p = e || !!f || n || a || l || i || r;
    return this.showHeaderContent = p, t("header", { class: s.header, hidden: !(p || h) }, t("div", { class: { [s.headerContainer]: !0, [s.headerContainerBorderEnd]: h }, hidden: !p }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), f, this.renderHeaderActionsEnd()), this.renderActionBar(), this.renderContentTop());
  }
  renderFooterNode() {
    const { hasFooterEndContent: e, hasFooterStartContent: n, hasFooterContent: a, hasFooterActions: i } = this, l = n || e || a || i;
    return t("footer", { class: s.footer, hidden: !l }, t("div", { class: s.footerContent, hidden: !a }, t("slot", { name: o.footer, onSlotchange: this.handleFooterSlotChange })), t("div", { class: s.footerStart, hidden: a || !n }, t("slot", { name: o.footerStart, onSlotchange: this.handleFooterStartSlotChange })), t("div", { class: s.footerEnd, hidden: a || !e }, t("slot", { name: o.footerEnd, onSlotchange: this.handleFooterEndSlotChange })), t("div", { class: s.footerActions, hidden: a || !i }, t("slot", { key: "footer-actions-slot", name: o.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    return t("div", { class: s.contentWrapper, hidden: this.collapsible && this.collapsed, onScroll: this.panelScrollHandler, ref: this.setPanelScrollEl }, t("slot", null), this.renderFab());
  }
  renderContentBottom() {
    return t("div", { class: s.contentBottom, hidden: !this.hasContentBottom }, t("slot", { name: o.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler }));
  }
  renderContentTop() {
    return t("div", { class: s.contentTop, hidden: !this.hasContentTop }, t("slot", { name: o.contentTop, onSlotchange: this.contentTopSlotChangeHandler }));
  }
  renderFab() {
    return t("div", { class: s.fabContainer, hidden: !this.hasFab }, t("slot", { name: o.fab, onSlotchange: this.handleFabSlotChange }));
  }
  render() {
    const { disabled: e, loading: n, isClosed: a } = this, i = t("article", { key: "0f439dffdca536eb6973ac386b0566091249aee3", "aria-busy": x(n), class: s.container, hidden: a, ref: this.setContainerRef }, this.renderHeaderNode(), this.renderContent(), this.renderContentBottom(), this.renderFooterNode(), t("slot", { key: "alerts", name: o.alerts, onSlotchange: this.handleAlertsSlotChange }));
    return t(B, { key: "6e5baec07ecb356871dea038ebc2d5ee2d8ed54f", onKeyDown: this.panelKeyDownHandler }, t(H, { key: "924cda1799b359f1bb3fb119cebfff5a7349b72d", disabled: e }, n ? t("calcite-scrim", { loading: n }) : null, i));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      closed: ["toggleDialog"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return oe;
  }
}, [1, "calcite-panel", {
  beforeClose: [16],
  closed: [1540],
  disabled: [516],
  closable: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  headingLevel: [514, "heading-level"],
  loading: [516],
  heading: [1],
  description: [1],
  menuFlipPlacements: [16],
  menuOpen: [516, "menu-open"],
  menuPlacement: [513, "menu-placement"],
  messageOverrides: [1040],
  messages: [1040],
  overlayPositioning: [513, "overlay-positioning"],
  scale: [513],
  isClosed: [32],
  hasStartActions: [32],
  hasEndActions: [32],
  hasMenuItems: [32],
  hasHeaderContent: [32],
  hasActionBar: [32],
  hasContentBottom: [32],
  hasContentTop: [32],
  hasFab: [32],
  hasFooterActions: [32],
  hasFooterContent: [32],
  hasFooterEndContent: [32],
  hasFooterStartContent: [32],
  defaultMessages: [32],
  effectiveLocale: [32],
  showHeaderContent: [32],
  setFocus: [64],
  scrollContentTo: [64]
}, void 0, {
  closed: ["toggleDialog"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function G() {
  if (typeof customElements > "u")
    return;
  ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-panel":
        customElements.get(e) || customElements.define(e, ae);
        break;
      case "calcite-action":
        customElements.get(e) || U();
        break;
      case "calcite-action-menu":
        customElements.get(e) || j();
        break;
      case "calcite-icon":
        customElements.get(e) || W();
        break;
      case "calcite-loader":
        customElements.get(e) || K();
        break;
      case "calcite-popover":
        customElements.get(e) || _();
        break;
      case "calcite-scrim":
        customElements.get(e) || q();
        break;
    }
  });
}
G();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const se = {
  backButton: "back-button"
}, w = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
}, c = {
  actionBar: "action-bar",
  alerts: "alerts",
  contentTop: "content-top",
  contentBottom: "content-bottom",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions",
  footerEnd: "footer-end",
  footerStart: "footer-start"
}, ie = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}", le = ie, X = /* @__PURE__ */ A(class extends F {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFlowItemBack = m(this, "calciteFlowItemBack", 7), this.calciteFlowItemScroll = m(this, "calciteFlowItemScroll", 6), this.calciteFlowItemClose = m(this, "calciteFlowItemClose", 6), this.calciteFlowItemToggle = m(this, "calciteFlowItemToggle", 6), this.handleInternalPanelScroll = (e) => {
      e.target === this.containerEl && (e.stopPropagation(), this.calciteFlowItemScroll.emit());
    }, this.handleInternalPanelClose = (e) => {
      e.target === this.containerEl && (e.stopPropagation(), this.closed = !0, this.calciteFlowItemClose.emit());
    }, this.handleInternalPanelToggle = (e) => {
      e.target === this.containerEl && (e.stopPropagation(), this.collapsed = e.target.collapsed, this.calciteFlowItemToggle.emit());
    }, this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    }, this.setBackRef = (e) => {
      this.backButtonEl = e;
    }, this.setContainerRef = (e) => {
      this.containerEl = e;
    }, this.closable = !1, this.closed = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.beforeBack = void 0, this.beforeClose = void 0, this.description = void 0, this.disabled = !1, this.heading = void 0, this.headingLevel = void 0, this.loading = !1, this.menuOpen = !1, this.messageOverrides = void 0, this.messages = void 0, this.overlayPositioning = "absolute", this.scale = "m", this.showBackButton = !1, this.defaultMessages = void 0, this.effectiveLocale = "";
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    T(this), O(this);
  }
  async componentWillLoad() {
    await D(this), P(this);
  }
  componentDidRender() {
    z(this);
  }
  disconnectedCallback() {
    M(this), $(this);
  }
  componentDidLoad() {
    L(this);
  }
  effectiveLocaleChange() {
    R(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await I(this);
    const { backButtonEl: e, containerEl: n } = this;
    if (e)
      return e.setFocus();
    if (n)
      return n.setFocus();
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    await this.containerEl?.scrollContentTo(e);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el: e } = this, n = Y(e) === "rtl", { showBackButton: a, backButtonClick: i, messages: l } = this, r = l.back, h = n ? w.backRight : w.backLeft;
    return a ? t("calcite-action", { "aria-label": r, class: se.backButton, icon: h, key: "flow-back-button", onClick: i, ref: this.setBackRef, scale: "s", slot: "header-actions-start", text: r, title: r }) : null;
  }
  render() {
    const { collapsed: e, collapseDirection: n, collapsible: a, closable: i, closed: l, description: r, disabled: h, heading: f, headingLevel: p, loading: g, menuOpen: b, messages: u, overlayPositioning: C, beforeClose: y } = this;
    return t(B, { key: "2e7872bb2687db0b67ddbf375f8ec0beaabbda36" }, t(H, { key: "a9418954405a2cec2092bae3be5d77f02306e3c9", disabled: h }, t("calcite-panel", { key: "d563c751421bf2d66c03286deaa613e09f585546", beforeClose: y, closable: i, closed: l, collapseDirection: n, collapsed: e, collapsible: a, description: r, disabled: h, heading: f, headingLevel: p, loading: g, menuOpen: b, messageOverrides: u, onCalcitePanelClose: this.handleInternalPanelClose, onCalcitePanelScroll: this.handleInternalPanelScroll, onCalcitePanelToggle: this.handleInternalPanelToggle, overlayPositioning: C, ref: this.setContainerRef, scale: this.scale }, this.renderBackButton(), t("slot", { key: "c506ec8bb4debbd6a9da6c7941878de49776f614", name: c.actionBar, slot: o.actionBar }), t("slot", { key: "e76e55e654ff878acff734bdf387402a9e262159", name: c.alerts, slot: o.alerts }), t("slot", { key: "f7ab8839d7b101e31087130ebf3e36af1ec7da24", name: c.headerActionsStart, slot: o.headerActionsStart }), t("slot", { key: "2932c4c15b168732356b8e55fcc3064f5b3f4cf5", name: c.headerActionsEnd, slot: o.headerActionsEnd }), t("slot", { key: "1ef8a9050683022733695445092f8c626487d87b", name: c.headerContent, slot: o.headerContent }), t("slot", { key: "24c0ab570a601a6c0edfb0c820e580fd24b158ce", name: c.headerMenuActions, slot: o.headerMenuActions }), t("slot", { key: "ec55bbe7ba939a6efb35225850c37a1aadb97275", name: c.fab, slot: o.fab }), t("slot", { key: "aa0bfec47656ef9f7f575cd933897a7909e5badc", name: c.contentTop, slot: o.contentTop }), t("slot", { key: "e23532d080e2df529c2aeb6af043c6efe7a0ab6d", name: c.contentBottom, slot: o.contentBottom }), t("slot", { key: "db6ffc0d9300c77067a4c88ab277de685c7713af", name: c.footerStart, slot: o.footerStart }), t("slot", { key: "5f249356da9292f34c4036d0d0741f048fe999e9", name: c.footer, slot: o.footer }), t("slot", { key: "7476137bacc0f3be5c97682c5027f74d73254765", name: c.footerEnd, slot: o.footerEnd }), t("slot", { key: "58f60a46c42a05abe9b100a57d478d991e4f25bc", name: c.footerActions, slot: o.footerActions }), t("slot", { key: "926a8d94b76b6fcdef6dfd219ba8180c44f81c35" }))));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return le;
  }
}, [1, "calcite-flow-item", {
  closable: [516],
  closed: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  beforeBack: [16],
  beforeClose: [16],
  description: [1],
  disabled: [516],
  heading: [1],
  headingLevel: [514, "heading-level"],
  loading: [516],
  menuOpen: [516, "menu-open"],
  messageOverrides: [1040],
  messages: [1040],
  overlayPositioning: [513, "overlay-positioning"],
  scale: [513],
  showBackButton: [4, "show-back-button"],
  defaultMessages: [32],
  effectiveLocale: [32],
  setFocus: [64],
  scrollContentTo: [64]
}, void 0, {
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function J() {
  if (typeof customElements > "u")
    return;
  ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-flow-item":
        customElements.get(e) || customElements.define(e, X);
        break;
      case "calcite-action":
        customElements.get(e) || U();
        break;
      case "calcite-action-menu":
        customElements.get(e) || j();
        break;
      case "calcite-icon":
        customElements.get(e) || W();
        break;
      case "calcite-loader":
        customElements.get(e) || K();
        break;
      case "calcite-panel":
        customElements.get(e) || G();
        break;
      case "calcite-popover":
        customElements.get(e) || _();
        break;
      case "calcite-scrim":
        customElements.get(e) || q();
        break;
    }
  });
}
J();
const Se = X, xe = J;
export {
  Se as CalciteFlowItem,
  xe as defineCustomElement
};
//# sourceMappingURL=calcite-flow-item-BLCxkSzf.js.map
