import { c$ as v, d0 as g, cZ as f, cY as k, cX as n } from "./main-s2Ig2EGT.js";
import { s as m, r as x, f as w } from "./form-Xa9NQgpE.js";
import { u as y, I as z } from "./interactive-BTAdAzP6.js";
import { c as C, d as E, g as L } from "./label-jeF0yOwN.js";
import { s as S, a as T, c as O } from "./loadable-DMU4VJLj.js";
import { c as F, d as M } from "./locale-ialCAcJX.js";
import { c as o } from "./observers-CyXdPonF.js";
import { g as r } from "./component-CWGf1hug.js";
import { c as R, d as I, s as B, u as H } from "./t9n-DjSe1SVh.js";
import { t as j } from "./dom-BHTTQ4_z.js";
import { d as A } from "./icon-BWjdf1Bq.js";
import { d as P } from "./loader-GfBUYuFr.js";
const e = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out",
  iconStartEmpty: "icon-start-empty",
  iconEndEmpty: "icon-end-empty",
  buttonPadding: "button-padding",
  buttonPaddingShrunk: "button-padding--shrunk"
}, _ = `:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host button,:host a{--calcite-button-content-margin-internal:0.5rem;--calcite-button-padding-x-internal:7px;--calcite-button-padding-y-internal:3px;padding-block:var(--calcite-button-padding-y-internal);padding-inline:var(--calcite-button-padding-x-internal);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}:host button span,:host a span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content{margin-inline:var(--calcite-button-content-margin-internal)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin-internal:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin-internal:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin-internal)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin-internal)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{border-width:1px;border-style:solid;border-color:transparent}:host([kind=brand]) button,:host([kind=brand]) a{background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) button:focus,:host([kind=brand]) a:hover,:host([kind=brand]) a:focus{background-color:var(--calcite-color-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{background-color:var(--calcite-color-brand-press)}:host([kind=brand]) button calcite-loader,:host([kind=brand]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=danger]) button,:host([kind=danger]) a{background-color:var(--calcite-color-status-danger);color:var(--calcite-color-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) button:focus,:host([kind=danger]) a:hover,:host([kind=danger]) a:focus{background-color:var(--calcite-color-status-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{background-color:var(--calcite-color-status-danger-press)}:host([kind=danger]) button calcite-loader,:host([kind=danger]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([kind=neutral]) button,:host([kind=neutral]) a{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) button:focus,:host([kind=neutral]) a:hover,:host([kind=neutral]) a:focus{background-color:var(--calcite-color-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{background-color:var(--calcite-color-foreground-1)}:host([kind=neutral]) button calcite-loader,:host([kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) button:focus,:host([kind=inverse]) a:hover,:host([kind=inverse]) a:focus{background-color:var(--calcite-color-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{background-color:var(--calcite-color-inverse-press)}:host([kind=inverse]) button calcite-loader,:host([kind=inverse]) a calcite-loader{color:var(--calcite-color-text-inverse)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button calcite-loader,:host([appearance=outline-fill][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline-fill][kind=inverse]) button calcite-loader,:host([appearance=outline-fill][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{border-color:var(--calcite-color-brand);background-color:transparent;color:var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{border-color:var(--calcite-color-brand-hover);color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-brand);box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{border-color:var(--calcite-color-brand-press);color:var(--calcite-color-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-color-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{border-color:var(--calcite-color-status-danger);background-color:transparent;color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{border-color:var(--calcite-color-status-danger-hover);color:var(--calcite-color-status-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{border-color:var(--calcite-color-status-danger);color:var(--calcite-color-status-danger);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{border-color:var(--calcite-color-status-danger-press);color:var(--calcite-color-status-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-color-status-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-border-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button calcite-loader,:host([appearance=outline][kind=neutral]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{background-color:transparent;color:var(--calcite-color-text-1);border-color:var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{border-color:var(--calcite-color-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{border-color:var(--calcite-color-inverse);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{border-color:var(--calcite-color-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-color-inverse-press)}:host([appearance=outline][kind=inverse]) button calcite-loader,:host([appearance=outline][kind=inverse]) a calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{color:var(--calcite-color-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{color:var(--calcite-color-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{color:var(--calcite-color-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{color:var(--calcite-color-status-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{color:var(--calcite-color-status-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{color:var(--calcite-color-status-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-color-text-3);border-block-start-color:var(--calcite-color-border-input);border-block-end-color:var(--calcite-color-border-input);border-block-style:solid}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y-internal:0}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{color:var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button,:host([appearance=transparent][kind=inverse]) a,:host([appearance=transparent][kind=inverse]) calcite-loader{color:var(--calcite-color-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-button-padding-y-internal:3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x-internal:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-padding-y-internal:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x-internal:0.75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x-internal:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-button-padding-x-internal:1rem;--calcite-button-padding-y-internal:11px}:host([scale=l]) .button-padding--shrunk{--calcite-button-padding-y-internal:9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x-internal:0.125rem;--calcite-button-padding-y-internal:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host(:is([scale=s],[scale=m],[scale=l])[width=full]) a:not(.content--slotted),:host(:is([scale=s],[scale=m],[scale=l])[width=full]) button:not(.content--slotted){inline-size:var(--calcite-container-size-content-fluid)}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y-internal:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x-internal:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x-internal:2.75rem}:host([hidden]){display:none}[hidden]{display:none}`, $ = _, i = /* @__PURE__ */ v(class extends g {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.mutationObserver = o("mutation", () => this.updateHasContent()), this.resizeObserver = o("resize", () => this.setTooltipText()), this.handleClick = () => {
      const { type: t } = this;
      this.href || (t === "submit" ? m(this) : t === "reset" && x(this));
    }, this.setTooltipText = () => {
      const { contentEl: t } = this;
      t && (this.tooltipText = t.offsetWidth < t.scrollWidth && this.el.innerText || null);
    }, this.setChildEl = (t) => {
      this.childEl = t, t && this.resizeObserver?.observe(t);
    }, this.alignment = "center", this.appearance = "solid", this.label = void 0, this.kind = "brand", this.disabled = !1, this.form = void 0, this.download = !1, this.href = void 0, this.iconEnd = void 0, this.iconFlipRtl = void 0, this.iconStart = void 0, this.loading = !1, this.name = void 0, this.rel = void 0, this.round = !1, this.scale = "m", this.splitChild = !1, this.target = void 0, this.type = "button", this.width = "auto", this.messages = void 0, this.messageOverrides = void 0, this.hasContent = !1, this.effectiveLocale = "", this.defaultMessages = void 0, this.tooltipText = void 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Global attributes
  //
  //--------------------------------------------------------------------------
  handleGlobalAttributesChanged() {
    f(this);
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async connectedCallback() {
    F(this), R(this), this.setupTextContentObserver(), C(this), this.formEl = w(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect(), E(this), M(this), I(this), this.resizeObserver?.disconnect(), this.formEl = null;
  }
  async componentWillLoad() {
    S(this), k() && (this.updateHasContent(), await B(this));
  }
  componentDidLoad() {
    T(this), this.setTooltipText();
  }
  componentDidRender() {
    y(this);
  }
  render() {
    const t = this.href ? "a" : "button", s = t, d = this.loading ? n("div", { class: e.buttonLoader }, n("calcite-loader", { class: this.loading ? e.loadingIn : e.loadingOut, inline: !0, label: this.messages.loading, scale: this.scale === "l" ? "m" : "s" })) : null, a = !this.iconStart && !this.iconEnd, u = n("calcite-icon", { key: "f1036c0a1bf5740fe63806e3559ea66fac29b726", class: { [e.icon]: !0, [e.iconStart]: !0 }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: r(this.scale) }), h = n("calcite-icon", { key: "d2c22ecf9ca23426b4c4a3b42d623f35ee988a44", class: { [e.icon]: !0, [e.iconEnd]: !0 }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: r(this.scale) }), p = n("span", { key: "d1803021f5fa106c9e296402ec0a1498ecdf36c7", class: e.content, ref: (b) => this.contentEl = b }, n("slot", { key: "d2f729c16f9c803ffa109b68d58a22a4383dd426" }));
    return n(z, { key: "2757c795d29f812cf11def4df108837b9971dcdb", disabled: this.disabled }, n(s, { key: "e67a4882c8a0c13d6b5f98bc8c5b53c10ba36e3e", "aria-busy": j(this.loading), "aria-expanded": this.el.ariaExpanded ? this.el.ariaExpanded : null, "aria-label": this.loading ? this.messages.loading : L(this), "aria-live": "polite", class: {
      [e.buttonPadding]: a,
      [e.buttonPaddingShrunk]: !a,
      [e.contentSlotted]: this.hasContent,
      [e.iconStartEmpty]: !this.iconStart,
      [e.iconEndEmpty]: !this.iconEnd
    }, disabled: t === "button" ? this.disabled : null, download: t === "a" ? this.download === !0 || this.download === "" ? "" : this.download || null : null, href: t === "a" && this.href, name: t === "button" && this.name, onClick: this.handleClick, ref: this.setChildEl, rel: t === "a" && this.rel, tabIndex: this.disabled ? -1 : null, target: t === "a" && this.target, title: this.tooltipText, type: t === "button" && this.type }, d, this.iconStart ? u : null, this.hasContent ? p : null, this.iconEnd ? h : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await O(this), this.childEl?.focus();
  }
  effectiveLocaleChange() {
    H(this, this.effectiveLocale);
  }
  updateHasContent() {
    const t = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent = this.el.childNodes.length === 1 && this.el.childNodes[0]?.nodeName === "#text" ? this.el.textContent?.trim().length > 0 : t;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.handleClick(), this.setFocus();
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "aria-expanded": ["handleGlobalAttributesChanged"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return $;
  }
}, [1, "calcite-button", {
  alignment: [513],
  appearance: [513],
  label: [1],
  kind: [513],
  disabled: [516],
  form: [513],
  download: [520],
  href: [513],
  iconEnd: [513, "icon-end"],
  iconFlipRtl: [513, "icon-flip-rtl"],
  iconStart: [513, "icon-start"],
  loading: [516],
  name: [513],
  rel: [513],
  round: [516],
  scale: [513],
  splitChild: [520, "split-child"],
  target: [513],
  type: [513],
  width: [513],
  messages: [1040],
  messageOverrides: [1040],
  hasContent: [32],
  effectiveLocale: [32],
  defaultMessages: [32],
  tooltipText: [32],
  setFocus: [64]
}, void 0, {
  "aria-expanded": ["handleGlobalAttributesChanged"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function c() {
  if (typeof customElements > "u")
    return;
  ["calcite-button", "calcite-icon", "calcite-loader"].forEach((t) => {
    switch (t) {
      case "calcite-button":
        customElements.get(t) || customElements.define(t, i);
        break;
      case "calcite-icon":
        customElements.get(t) || A();
        break;
      case "calcite-loader":
        customElements.get(t) || P();
        break;
    }
  });
}
c();
const tt = i, et = c;
export {
  tt as CalciteButton,
  et as defineCustomElement
};
//# sourceMappingURL=calcite-button-1Q3fYpWK.js.map