import { hv as M, c$ as T, d0 as $, e_ as r, cX as o, d1 as F } from "./main-DHXLMse1.js";
import { c as S, d as L } from "./conditionalSlot-B98YDInG.js";
import { n as c, l as f, o as B, p as g } from "./dom-BD6OZEvo.js";
import { d, a as v, c as D, u as H } from "./focusTrapComponent-CTkR6Er2.js";
import { s as I, a as A, c as V } from "./loadable-By8v9cXG.js";
import { c as x } from "./observers-Bi3Qhj76.js";
import { o as W } from "./openCloseComponent-CD5oSm5p.js";
import { c as P, d as _ } from "./locale-BWfU23IG.js";
import { s as j, c as U, d as q, u as R } from "./t9n-2Iu_Noy9.js";
import { g as X, c as G } from "./component-Bgl0_aC7.js";
import { d as J } from "./icon-Dt1qIaUr.js";
import { d as K } from "./loader-D9MEKYSI.js";
import { d as Q } from "./scrim-DHudEh-o.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const k = /* @__PURE__ */ new Set(), y = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 4,
  error: 8,
  off: 10
};
function Y(i) {
  return y[i] >= y[M];
}
function s(i, ...e) {
  if (!Y(i))
    return;
  console[i].call(this, "%ccalcite", "background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;", ...e);
}
let m;
const Z = {
  debug: (i) => s("debug", i),
  info: (i) => s("info", i),
  warn: (i) => s("warn", i),
  error: (i) => s("error", i),
  trace: (i) => s("trace", i),
  deprecated: N
};
function N(i, { component: e, name: a, suggested: l, removalVersion: p }) {
  const b = `${i}:${i === "component" ? "" : e}${a}`;
  if (k.has(b))
    return;
  k.add(b);
  const u = Array.isArray(l);
  u && !m && (m = new Intl.ListFormat("en", { style: "long", type: "disjunction" }));
  const E = `[${a}] ${i} is deprecated and will be removed in ${p === "future" ? "a future version" : `v${p}`}.${l ? ` Use ${u ? m.format(l.map((O) => `"${O}"`)) : `"${l}"`} instead.` : ""}`;
  s("warn", E);
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const t = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  container: "container",
  containerOpen: "container--open",
  containerEmbedded: "container--embedded",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active"
}, ee = {
  close: "x"
}, n = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
}, te = `:host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}`, oe = te;
let h = 0, w = "";
Z.deprecated("component", {
  name: "modal",
  removalVersion: 4,
  suggested: "dialog"
});
const z = /* @__PURE__ */ T(class extends $ {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteModalBeforeClose = r(this, "calciteModalBeforeClose", 6), this.calciteModalClose = r(this, "calciteModalClose", 6), this.calciteModalBeforeOpen = r(this, "calciteModalBeforeOpen", 6), this.calciteModalOpen = r(this, "calciteModalOpen", 6), this.ignoreOpenChange = !1, this.mutationObserver = x("mutation", () => this.handleMutationObserver()), this.cssVarObserver = x("mutation", () => {
      this.updateSizeCssVars();
    }), this.openTransitionProp = "opacity", this.setTransitionEl = (e) => {
      this.transitionEl = e;
    }, this.openEnd = () => {
      this.setFocus(), this.el.removeEventListener("calciteModalOpen", this.openEnd);
    }, this.handleCloseClick = () => {
      this.open = !1;
    }, this.handleOutsideClose = () => {
      this.outsideCloseDisabled || (this.open = !1);
    }, this.closeModal = async () => {
      if (this.beforeClose)
        try {
          await this.beforeClose(this.el);
        } catch {
          requestAnimationFrame(() => {
            this.ignoreOpenChange = !0, this.open = !0, this.ignoreOpenChange = !1;
          });
          return;
        }
      h--, this.opened = !1, this.removeOverflowHiddenClass();
    }, this.handleMutationObserver = () => {
      this.updateFooterVisibility(), this.updateFocusTrapElements();
    }, this.updateFooterVisibility = () => {
      this.hasFooter = !!c(this.el, [n.back, n.primary, n.secondary]);
    }, this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"), this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    }, this.contentTopSlotChangeHandler = (e) => {
      this.hasContentTop = f(e);
    }, this.contentBottomSlotChangeHandler = (e) => {
      this.hasContentBottom = f(e);
    }, this.open = !1, this.opened = !1, this.beforeClose = void 0, this.closeButtonDisabled = !1, this.focusTrapDisabled = !1, this.outsideCloseDisabled = !1, this.docked = void 0, this.embedded = !1, this.escapeDisabled = !1, this.scale = "m", this.widthScale = "m", this.fullscreen = void 0, this.kind = void 0, this.messages = void 0, this.messageOverrides = void 0, this.cssWidth = void 0, this.cssHeight = void 0, this.hasFooter = !0, this.hasContentTop = !1, this.hasContentBottom = !1, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(e) {
    this.open && (e ? d(this) : v(this));
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    await j(this), I(this), this.open && this.openModal();
  }
  componentDidLoad() {
    A(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.cssVarObserver?.observe(this.el, { attributeFilter: ["style"] }), this.updateSizeCssVars(), this.updateFooterVisibility(), S(this), P(this), U(this), D(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass(), this.mutationObserver?.disconnect(), this.cssVarObserver?.disconnect(), L(this), d(this), _(this), q(this), this.embedded = !1;
  }
  render() {
    return o(F, { key: "f92cd77f4a5ad4a245ca50fe2b2bfcf9966d4ca8", "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, o("div", { key: "a9d348a67842162f1bc17ec8422c07963aed412d", class: {
      [t.container]: !0,
      [t.containerOpen]: this.opened,
      [t.containerEmbedded]: this.embedded
    } }, o("calcite-scrim", { key: "7dc3bc9220fc375522a6d390b633f9573bfa6c67", class: t.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), o("div", { key: "40782ba2b6d3f086c884ace3529110e873009504", class: {
      [t.modal]: !0
    }, ref: this.setTransitionEl }, o("div", { key: "ea3a72ab0a0e5abae6e766d0b7b2cfce54667e86", class: t.header }, this.renderCloseButton(), o("header", { key: "abe5c28d11fc6241cd6ac40adef4d94529eb9d5c", class: t.title }, o("slot", { key: "3d1d6ed6c0249472a00fba4128a861e6a6eae4dd", name: t.header }))), this.renderContentTop(), o("div", { key: "0e65dfbd175e490586518d1a4c34b9eb1dde1f01", class: {
      [t.content]: !0,
      [t.contentNoFooter]: !this.hasFooter
    }, ref: (e) => this.modalContent = e }, o("slot", { key: "d5f3b08e61e8e47f64fd13bc6eb7f7ed6a07b7c8", name: n.content })), this.renderContentBottom(), this.renderFooter())));
  }
  renderFooter() {
    return this.hasFooter ? o("div", { class: t.footer, key: "footer" }, o("span", { class: t.back }, o("slot", { name: n.back })), o("span", { class: t.secondary }, o("slot", { name: n.secondary })), o("span", { class: t.primary }, o("slot", { name: n.primary }))) : null;
  }
  renderContentTop() {
    return o("div", { class: t.contentTop, hidden: !this.hasContentTop }, o("slot", { name: n.contentTop, onSlotchange: this.contentTopSlotChangeHandler }));
  }
  renderContentBottom() {
    return o("div", { class: t.contentBottom, hidden: !this.hasContentBottom }, o("slot", { name: n.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler }));
  }
  renderCloseButton() {
    return this.closeButtonDisabled ? null : o("button", { "aria-label": this.messages.close, class: t.close, key: "button", onClick: this.handleCloseClick, ref: (e) => this.closeButtonEl = e, title: this.messages.close }, o("calcite-icon", { icon: ee.close, scale: X(this.scale) }));
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight))
      return o("style", null, `.${t.container} {
              ${this.docked && this.cssWidth ? "align-items: center !important;" : ""}
            }
            .${t.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? "border-radius: var(--calcite-border-radius) !important;" : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${t.container} {
                ${this.docked ? "align-items: flex-end !important;" : ""}
              }
              .${t.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${this.docked ? "" : "block-size: 100% !important;"}
                ${this.docked ? "" : "border-radius: 0 !important;"}
                ${this.docked ? "border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;" : ""}
              }
            }
          `);
  }
  effectiveLocaleChange() {
    R(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    this.open && !this.escapeDisabled && e.key === "Escape" && !e.defaultPrevented && (this.open = !1, e.preventDefault());
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  async setFocus() {
    await V(this), B(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    H(this);
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  async scrollContent(e = 0, a = 0) {
    this.modalContent && (this.modalContent.scrollTo ? this.modalContent.scrollTo({ top: e, left: a, behavior: "smooth" }) : (this.modalContent.scrollTop = e, this.modalContent.scrollLeft = a));
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(t.openingActive), this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(t.openingIdle, t.openingActive), this.calciteModalOpen.emit(), v(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(t.closingActive), this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(t.closingIdle, t.closingActive), this.calciteModalClose.emit(), d(this);
  }
  toggleModal(e) {
    this.ignoreOpenChange || (e ? this.openModal() : this.closeModal());
  }
  handleOpenedChange(e) {
    const a = e ? t.openingIdle : t.closingIdle;
    this.transitionEl.classList.add(a), W(this);
  }
  async openModal() {
    await G(this.el), this.el.addEventListener("calciteModalOpen", this.openEnd), this.opened = !0;
    const e = c(this.el, n.header), a = c(this.el, n.content);
    this.titleId = g(e), this.contentId = g(a), this.embedded || (h === 0 && (w = document.documentElement.style.overflow), h++, document.documentElement.style.setProperty("overflow", "hidden"));
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", w);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      focusTrapDisabled: ["handleFocusTrapDisabled"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"],
      open: ["toggleModal"],
      opened: ["handleOpenedChange"]
    };
  }
  static get style() {
    return oe;
  }
}, [1, "calcite-modal", {
  open: [1540],
  opened: [1540],
  beforeClose: [16],
  closeButtonDisabled: [516, "close-button-disabled"],
  focusTrapDisabled: [516, "focus-trap-disabled"],
  outsideCloseDisabled: [516, "outside-close-disabled"],
  docked: [516],
  embedded: [1028],
  escapeDisabled: [516, "escape-disabled"],
  scale: [513],
  widthScale: [513, "width-scale"],
  fullscreen: [516],
  kind: [513],
  messages: [1040],
  messageOverrides: [1040],
  cssWidth: [32],
  cssHeight: [32],
  hasFooter: [32],
  hasContentTop: [32],
  hasContentBottom: [32],
  effectiveLocale: [32],
  defaultMessages: [32],
  setFocus: [64],
  updateFocusTrapElements: [64],
  scrollContent: [64]
}, [[8, "keydown", "handleEscape"]], {
  focusTrapDisabled: ["handleFocusTrapDisabled"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"],
  open: ["toggleModal"],
  opened: ["handleOpenedChange"]
}]);
function C() {
  if (typeof customElements > "u")
    return;
  ["calcite-modal", "calcite-icon", "calcite-loader", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-modal":
        customElements.get(e) || customElements.define(e, z);
        break;
      case "calcite-icon":
        customElements.get(e) || J();
        break;
      case "calcite-loader":
        customElements.get(e) || K();
        break;
      case "calcite-scrim":
        customElements.get(e) || Q();
        break;
    }
  });
}
C();
const ge = z, ve = C;
export {
  ge as CalciteModal,
  ve as defineCustomElement
};
//# sourceMappingURL=calcite-modal-BDMNQGfg.js.map
