import"./index-DUdLurid.js";import"./index-47lyaiwo.js";import"./index-DVpo7yv5.js";import"./index-DzbeT40y.js";import"./index-DZQoviBN.js";import"./index-CJcGYgM4.js";import{i as B,L as z,f as s,x as a,a as l,E as w,S as P}from"./themeUtils-2piyLhQV.js";import{n as b,e as f}from"./ref-xQiEGQWW.js";import{i as d}from"./keyed-B2gO5gxN.js";import{r as A}from"./loadable-iEaxUBY1.js";import{m as M,p as T}from"./interactive-BvAgEtPI.js";import{o as q}from"./floating-ui-hoSLidgF.js";import{s as U}from"./useT9n-DZQIKPQs.js";import{u as C,e as J,b as Q}from"./dom-D8XNoqp_.js";import{s as S}from"./component-DLLD6FTh.js";import{c as V,p as X,f as Y}from"./utils-BstU41jz.js";import{c as L,n as i,o as v,e as $}from"./resources5-SciNIBSe.js";import"./observers-DNEw4dK8.js";import"./guid-ejniuQmw.js";import"./key-CZcQa38B.js";import"./openCloseComponent-CK6Jda6g.js";import"./dynamicClasses-pKEMtFzB.js";import"./resources6-Cs2_VmEC.js";import"./main-CcTJZah4.js";import"./preload-helper-ExcqyqRp.js";import"./intl-DiBhrFNw.js";import"./uuid-Cl5lrJ4c.js";import"./debounce-D0G5qrda.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const k={handle:"handle",dropdown:"dropdown"},O={drag:"drag",blank:"blank"},x={label:"{label}",position:"{position}",total:"{total}"},D=["top","up","down","bottom"],Z=B`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.dropdown{block-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;class _ extends z{constructor(){super(...arguments),this.disabled=!1,this.messages=U({blocking:!0}),this.moveToItems=[],this.open=!1,this.overlayPositioning="absolute",this.placement=q,this.scale="m",this.calciteSortHandleBeforeClose=s({cancelable:!1}),this.calciteSortHandleBeforeOpen=s({cancelable:!1}),this.calciteSortHandleClose=s({cancelable:!1}),this.calciteSortHandleMove=s({cancelable:!1}),this.calciteSortHandleOpen=s({cancelable:!1}),this.calciteSortHandleReorder=s({cancelable:!1})}static{this.properties={hasSetInfo:16,isSetDisabled:16,disabled:7,flipPlacements:0,label:1,messageOverrides:0,messages:0,moveToItems:0,open:7,overlayPositioning:3,placement:3,scale:3,setPosition:9,setSize:9,widthScale:3}}static{this.styles=Z}get hasSetInfo(){return typeof this.setPosition=="number"&&typeof this.setSize=="number"}get isSetDisabled(){const{setPosition:e,setSize:t,moveToItems:n}=this;return this.hasSetInfo?e<1||t<1||t<2&&n.length<1:!1}async setFocus(){await A(this),this.dropdownEl?.setFocus()}async load(){}willUpdate(e){e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler()}updated(){M(this)}loaded(){}openHandler(){if(this.disabled){this.open=!1;return}this.dropdownEl&&(this.dropdownEl.open=this.open)}setDropdownEl(e){e&&(this.dropdownEl=e,this.openHandler())}getLabel(){const{label:e,messages:t,setPosition:n,setSize:o}=this;if(!this.hasSetInfo)return e??"";let c=e?t.repositionLabel.replace(x.label,e):t.reposition;return c=c.replace(x.position,n?n.toString():""),c.replace(x.total,o?o.toString():"")}handleBeforeOpen(e){e.stopPropagation(),this.calciteSortHandleBeforeOpen.emit()}handleOpen(e){e.stopPropagation(),this.calciteSortHandleOpen.emit(),this.open=!0}handleBeforeClose(e){e.stopPropagation(),this.calciteSortHandleBeforeClose.emit()}handleClose(e){e.stopPropagation(),this.calciteSortHandleClose.emit(),this.open=!1}handleReorder(e){this.calciteSortHandleReorder.emit({reorder:e.target.dataset.value})}handleMoveTo(e){const t=e.target.dataset.id,n=this.moveToItems.find(o=>o.id===t);this.calciteSortHandleMove.emit({moveTo:n})}render(){const{disabled:e,flipPlacements:t,open:n,overlayPositioning:o,placement:c,scale:r,widthScale:m}=this,p=this.getLabel(),h=e||this.isSetDisabled;return T({disabled:e,children:a`<calcite-dropdown class=${l(k.dropdown)} .disabled=${h} .flipPlacements=${t} @calciteDropdownBeforeClose=${this.handleBeforeClose} @calciteDropdownBeforeOpen=${this.handleBeforeOpen} @calciteDropdownClose=${this.handleClose} @calciteDropdownOpen=${this.handleOpen} .overlayPositioning=${o} .placement=${c} .scale=${r} .widthScale=${m} ${b(this.setDropdownEl)}><calcite-action .active=${n} appearance=transparent class=${l(k.handle)} .dragHandle=${!0} .icon=${e?O.blank:O.drag} .label=${p} .scale=${r} slot=trigger .text=${p} title=${p??w}></calcite-action>${this.renderGroup()}${this.renderMoveToGroup()}</calcite-dropdown>`})}renderMoveToItem(e){return d(e.id,a`<calcite-dropdown-item data-id=${e.id??w} .label=${e.label} @calciteDropdownItemSelect=${this.handleMoveTo}>${e.label}</calcite-dropdown-item>`)}renderGroup(){return this.hasSetInfo?d("reorder",a`<calcite-dropdown-group .groupTitle=${this.messages.reorder} .scale=${this.scale} selection-mode=none>${this.renderTop()}${this.renderUp()}${this.renderDown()}${this.renderBottom()}</calcite-dropdown-group>`):null}renderMoveToGroup(){const{messages:e,moveToItems:t,scale:n}=this;return t.length?d("move-to-items",a`<calcite-dropdown-group .groupTitle=${e.moveTo} .scale=${n} selection-mode=none>${t.map(o=>this.renderMoveToItem(o))}</calcite-dropdown-group>`):null}renderDropdownItem(e,t){return d(D[e],a`<calcite-dropdown-item data-value=${D[e]??w} .label=${t} @calciteDropdownItemSelect=${this.handleReorder}>${t}</calcite-dropdown-item>`)}renderTop(){const{setPosition:e}=this;return e!==1&&e!==2?this.renderDropdownItem(0,this.messages.moveToTop):null}renderUp(){return this.setPosition!==1?this.renderDropdownItem(1,this.messages.moveUp):null}renderDown(){return this.setPosition!==this.setSize?this.renderDropdownItem(2,this.messages.moveDown):null}renderBottom(){const{setPosition:e,setSize:t}=this;return e!==t&&e!==t-1?this.renderDropdownItem(3,this.messages.moveToBottom):null}}P("calcite-sort-handle",_);/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const ee=B`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-list-background-color-hover, var(--calcite-color-foreground-2))}.container:active{background-color:var(--calcite-list-background-color-press, var(--calcite-color-foreground-1))}.container--border{position:relative}.container--border:before{position:absolute;inline-size:var(--calcite-border-width-lg);inset-block:0;inset-inline-start:0;background-color:transparent;content:""}.container--border-selected:before{background-color:var(--calcite-list-selection-border-color, var(--calcite-color-brand))}.container:hover.container--border-unselected:before{background-color:var(--calcite-list-selection-border-color, var(--calcite-color-border-1))}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3));margin-inline-start:var(--calcite-list-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.selection-container{display:flex;padding-block:0px;color:var(--calcite-list-icon-color, var(--calcite-color-border-input))}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-list-icon-color, var(--calcite-color-border-input))}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-icon-color, var(--calcite-color-brand))}.content-container-wrapper{display:flex;flex:1 1 auto}.content-container-wrapper--bordered{border-block-end:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3))}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-list-content-text-color, var(--calcite-color-text-2))}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}.row,.grid-cell{outline-color:transparent}.row{position:relative}.row:focus,.grid-cell:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;line-height:var(--calcite-font-line-height-relative-snug)}.label{color:var(--calcite-list-label-text-color, var(--calcite-color-text-1))}.description{color:var(--calcite-list-description-text-color, var(--calcite-color-text-3))}.icon{align-self:center;color:var(--calcite-list-icon-color, var(--calcite-color-text-3))}:host([display-mode=flat][drag-handle]:is([selection-mode=none],[selection-appearance=border])) .drag-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s]) .actions-start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .content-container{gap:var(--calcite-spacing-sm);min-block-size:32px;padding-block:var(--calcite-spacing-xxs);padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .content,:host([scale=s]) .custom-content,:host([scale=s]) .label{font-size:var(--calcite-font-size--2)}:host([scale=s]) .description{font-size:var(--calcite-font-size--3)}:host([scale=s][display-mode=flat]:not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=s][display-mode=flat]:not([drag-handle])) .selection-container{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s][display-mode=flat][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs) var(--calcite-spacing-sm)}:host([scale=s][display-mode=nested]) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=s][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s][display-mode=nested][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs)}:host([scale=m]) .actions-start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m]) .content-container{gap:var(--calcite-spacing-sm);min-block-size:40px;padding-block:var(--calcite-spacing-sm);padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .content,:host([scale=m]) .custom-content{font-size:var(--calcite-font-size--2)}:host([scale=m]) .label{font-size:var(--calcite-font-size--1)}:host([scale=m]) .description{font-size:var(--calcite-font-size--2)}:host([scale=m][display-mode=flat]) .container{padding-inline-start:var(--calcite-spacing-md)}:host([scale=m][display-mode=flat]) .selection-container{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m][display-mode=flat][drag-handle]) .container{padding-inline-start:0}:host([scale=m][display-mode=flat][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs) var(--calcite-spacing-sm)}:host([scale=m][display-mode=nested]) .container{padding-inline-start:var(--calcite-spacing-xxs)}:host([scale=m][display-mode=nested]) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=m][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-md)}:host([scale=m][display-mode=nested][drag-handle]) .container{padding-inline-start:0}:host([scale=m][display-mode=nested][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs)}:host([scale=l]) .actions-start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l]) .content-container{gap:var(--calcite-spacing-md);min-block-size:56px;padding-block:.625rem;padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .content,:host([scale=l]) .custom-content,:host([scale=l]) .label{font-size:var(--calcite-font-size-0)}:host([scale=l]) .description{font-size:var(--calcite-font-size--1)}:host([scale=l]) .nested-container{margin-inline-start:1.75rem}:host([scale=l][display-mode=flat]) .container{padding-inline-start:var(--calcite-spacing-lg)}:host([scale=l][display-mode=flat]) .selection-container{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][display-mode=flat][drag-handle]) .container{padding-inline-start:0}:host([scale=l][display-mode=flat][drag-handle]) .selection-container{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][display-mode=nested]) .container{padding-inline-start:var(--calcite-spacing-xxs)}:host([scale=l][display-mode=nested][drag-handle]) .container{padding-inline-start:0}:host([scale=l][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-lg)}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}:host([selected]) .icon{color:var(--calcite-list-icon-color, var(--calcite-color-text-1))}:host([selected]) .description{color:var(--calcite-list-description-text-color, var(--calcite-color-text-2))}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.open-container{color:var(--calcite-list-icon-color, var(--calcite-color-text-3));padding-inline:var(--calcite-spacing-xxs)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-list-icon-color, var(--calcite-color-text-1))}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-sort-handle,.actions-end calcite-action,.actions-end calcite-sort-handle,.content-start calcite-action,.content-start calcite-sort-handle,.content-end calcite-action,.content-end calcite-sort-handle,.selection-container calcite-action,.selection-container calcite-sort-handle,.drag-container calcite-action,.drag-container calcite-sort-handle,.open-container calcite-action,.open-container calcite-sort-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-sort-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-sort-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}.row:focus .actions-start,.row:focus .actions-end{inset-block:.125rem}.row:focus .actions-start .close,.row:focus .actions-start ::slotted(calcite-action),.row:focus .actions-start ::slotted(calcite-action-menu),.row:focus .actions-start ::slotted(calcite-sort-handle),.row:focus .actions-start ::slotted(calcite-dropdown),.row:focus .actions-end .close,.row:focus .actions-end ::slotted(calcite-action),.row:focus .actions-end ::slotted(calcite-action-menu),.row:focus .actions-end ::slotted(calcite-sort-handle),.row:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - .25rem)}.row:focus:after,.row:focus:before{position:absolute;content:"";inline-size:.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));inset-block:0}.row:focus:before{inset-inline-start:0}.row:focus:after{inset-inline-end:0}.container--border:focus:before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}`,y=new Map;class te extends z{constructor(){super(),this.actionsEndEl=f(),this.actionsStartEl=f(),this.containerEl=f(),this.contentEl=f(),this.defaultSlotEl=f(),this.handleGridEl=f(),this.hasActionsEnd=!1,this.hasActionsStart=!1,this.hasContentBottom=!1,this.hasContentEnd=!1,this.hasContentStart=!1,this.hasCustomContent=!1,this.level=null,this.openable=!1,this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.filterHidden=!1,this.interactionMode=null,this.messages=U(),this.displayMode="flat",this.moveToItems=[],this.open=!1,this.scale="m",this.selected=!1,this.selectionAppearance=null,this.selectionMode=null,this.setPosition=null,this.setSize=null,this.sortHandleOpen=!1,this.unavailable=!1,this.calciteInternalFocusPreviousItem=s({cancelable:!1}),this.calciteInternalListItemActive=s({cancelable:!1}),this.calciteInternalListItemChange=s({cancelable:!1}),this.calciteInternalListItemSelect=s({cancelable:!1}),this.calciteInternalListItemSelectMultiple=s({cancelable:!1}),this.calciteInternalListItemToggle=s({cancelable:!1}),this.calciteListItemClose=s({cancelable:!1}),this.calciteListItemSelect=s({cancelable:!1}),this.calciteListItemSortHandleBeforeClose=s({cancelable:!1}),this.calciteListItemSortHandleBeforeOpen=s({cancelable:!1}),this.calciteListItemSortHandleClose=s({cancelable:!1}),this.calciteListItemSortHandleOpen=s({cancelable:!1}),this.calciteListItemToggle=s({cancelable:!1}),this.listen("calciteInternalListItemGroupDefaultSlotChange",this.handleCalciteInternalListDefaultSlotChanges),this.listen("calciteInternalListDefaultSlotChange",this.handleCalciteInternalListDefaultSlotChanges)}static{this.properties={hasActionsEnd:16,hasActionsStart:16,hasContentBottom:16,hasContentEnd:16,hasContentStart:16,hasCustomContent:16,level:16,openable:16,parentListEl:16,active:5,bordered:5,closable:7,closed:7,description:1,disabled:7,dragDisabled:7,dragHandle:7,filterHidden:7,interactionMode:1,label:1,messageOverrides:0,metadata:0,displayMode:3,moveToItems:0,open:7,scale:3,selected:7,selectionAppearance:3,selectionMode:3,setPosition:9,setSize:9,sortHandleOpen:7,unavailable:7,value:1,iconStart:3,iconEnd:3,iconFlipRtl:3}}static{this.styles=ee}async setFocus(){await A(this);const{containerEl:{value:e},parentListEl:t}=this,n=y.get(t);if(typeof n=="number"){const o=this.getGridCells();o[n]?this.focusCell(o[n]):e?.focus();return}e?.focus()}connectedCallback(){super.connectedCallback();const{el:e}=this;this.parentListEl=e.closest(V),this.level=X(e)+1,this.setSelectionDefaults()}async load(){}willUpdate(e){e.has("active")&&(this.hasUpdated||this.active!==!1)&&this.activeHandler(this.active),e.has("closed")&&(this.hasUpdated||this.closed!==!1)&&this.handleClosedChange(),e.has("disabled")&&(this.hasUpdated||this.disabled!==!1)&&this.handleDisabledChange(),e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.handleOpenChange(),e.has("selected")&&(this.hasUpdated||this.selected!==!1)&&this.handleSelectedChange(),e.has("sortHandleOpen")&&(this.hasUpdated||this.sortHandleOpen!==!1)&&this.sortHandleOpenHandler(),e.has("displayMode")&&this.hasUpdated&&this.handleOpenableChange(this.defaultSlotEl.value)}updated(){M(this)}loaded(){}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}sortHandleOpenHandler(){this.sortHandleEl&&(this.sortHandleEl.open=this.sortHandleOpen)}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl.value)}setSortHandleEl(e){this.sortHandleEl=e,this.sortHandleOpenHandler()}handleSortHandleBeforeOpen(e){e.stopPropagation(),this.calciteListItemSortHandleBeforeOpen.emit()}handleSortHandleBeforeClose(e){e.stopPropagation(),this.calciteListItemSortHandleBeforeClose.emit()}handleSortHandleClose(e){e.stopPropagation(),this.sortHandleOpen=!1,this.calciteListItemSortHandleClose.emit()}handleSortHandleOpen(e){e.stopPropagation(),this.sortHandleOpen=!0,this.calciteListItemSortHandleOpen.emit()}emitInternalListItemActive(){this.calciteInternalListItemActive.emit()}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}handleCloseClick(){this.closed=!0,this.calciteListItemClose.emit()}handleContentSlotChange(e){this.hasCustomContent=C(e)}handleActionsStartSlotChange(e){this.hasActionsStart=C(e)}handleActionsEndSlotChange(e){this.hasActionsEnd=C(e)}handleContentStartSlotChange(e){this.hasContentStart=C(e)}handleContentEndSlotChange(e){this.hasContentEnd=C(e)}handleContentBottomSlotChange(e){this.hasContentBottom=C(e)}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const t=Y(e);t.lists.forEach(n=>{n.displayMode=this.displayMode}),this.openable=this.displayMode==="nested"&&(t.lists.length>0||t.items.length>0)}handleDefaultSlotChange(e){this.handleOpenableChange(e.target)}handleToggleClick(){this.toggle()}toggle(e=!this.open){this.open=e,this.calciteListItemToggle.emit()}handleItemClick(e){e.defaultPrevented||this.toggleSelected(e.shiftKey)}async toggleSelected(e){const{selectionMode:t,selected:n}=this;this.disabled||(t==="multiple"||t==="single"?this.selected=!n:t==="single-persist"&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&t==="multiple"}),await this.updateComplete,this.calciteListItemSelect.emit())}getGridCells(){return[this.handleGridEl.value,this.actionsStartEl.value,this.contentEl.value,this.actionsEndEl.value].filter(e=>e&&!e.hidden)}handleItemKeyDown(e){if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:{value:o},actionsStartEl:{value:c},actionsEndEl:{value:r},open:m,openable:p}=this,h=this.getGridCells(),g=h.findIndex(u=>n.includes(u));if(t==="Enter"&&!n.includes(c)&&!n.includes(r))e.preventDefault(),this.toggleSelected(e.shiftKey);else if(t==="ArrowRight"){e.preventDefault();const u=g+1;g===-1?!m&&p?(this.toggle(!0),this.focusCell(null)):h[0]&&this.focusCell(h[0]):h[g]&&h[u]&&this.focusCell(h[u])}else if(t==="ArrowLeft"){e.preventDefault();const u=g-1;g===-1?(this.focusCell(null),m&&p?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):g===0?(this.focusCell(null),o.focus()):h[g]&&h[u]&&this.focusCell(h[u])}}focusCellNull(){this.focusCell(null)}setFocusCell(e,t,n){const{parentListEl:o}=this;n&&y.set(o,null);const c=this.getGridCells();c.forEach(r=>{r.removeAttribute("tabindex"),r.removeAttribute(L)}),e&&(e===t?e.tabIndex=0:e.removeAttribute("tabindex"),e.setAttribute(L,""),n&&y.set(o,c.indexOf(e)))}focusCell(e,t=!0){const n=J(e);this.setFocusCell(e,n,t),n?.focus()}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return t==="none"||n==="border"?null:d("selection-container",a`<div class=${l({[i.selectionContainer]:!0,[i.selectionContainerSingle]:t==="single"||t==="single-persist"})} @click=${this.handleItemClick}><calcite-icon .icon=${e?t==="multiple"?v.selectedMultiple:v.selectedSingle:t==="multiple"?v.unselectedMultiple:v.unselectedSingle} .scale=${S(this.scale)}></calcite-icon></div>`)}renderDragHandle(){const{label:e,dragHandle:t,dragDisabled:n,setPosition:o,setSize:c,moveToItems:r}=this;return t?d("drag-handle-container",a`<div .ariaLabel=${e} class=${l({[i.dragContainer]:!0,[i.gridCell]:!0})} role=gridcell ${b(this.handleGridEl)}><calcite-sort-handle .disabled=${n} .label=${e} .moveToItems=${r} @calciteSortHandleBeforeClose=${this.handleSortHandleBeforeClose} @calciteSortHandleBeforeOpen=${this.handleSortHandleBeforeOpen} @calciteSortHandleClose=${this.handleSortHandleClose} @calciteSortHandleOpen=${this.handleSortHandleOpen} overlay-positioning=fixed .scale=${this.scale} .setPosition=${o} .setSize=${c} ${b(this.setSortHandleEl)}></calcite-sort-handle></div>`):null}renderOpen(){const{el:e,open:t,openable:n,messages:o,displayMode:c,scale:r}=this;if(c!=="nested")return null;const m=Q(e),p=n?t?v.open:m==="rtl"?v.closedRTL:v.closedLTR:v.blank,h=S(r),g=n?t?o.collapse:o.expand:void 0,u=n?this.handleToggleClick:void 0;return d("open-container",a`<div class=${l(i.openContainer)} @click=${u} title=${g??w}>${d(p,a`<calcite-icon .icon=${p} .scale=${h}></calcite-icon>`)}</div>`)}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return d("actions-start-container",a`<div .ariaLabel=${e} class=${l({[i.actionsStart]:!0,[i.gridCell]:!0})} .hidden=${!t} role=gridcell ${b(this.actionsStartEl)}><slot name=${$.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`)}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:o}=this;return d("actions-end-container",a`<div .ariaLabel=${e} class=${l({[i.actionsEnd]:!0,[i.gridCell]:!0})} .hidden=${!(t||n)} role=gridcell ${b(this.actionsEndEl)}><slot name=${$.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot>${n?d("close-action",a`<calcite-action appearance=transparent class=${l(i.close)} .icon=${v.close} .label=${o.close} @click=${this.handleCloseClick} .scale=${this.scale} .text=${o.close}></calcite-action>`):null}</div>`)}renderContentStart(){const{hasContentStart:e}=this;return a`<div class=${l(i.contentStart)} .hidden=${!e}><slot name=${$.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`}renderCustomContent(){const{hasCustomContent:e}=this;return a`<div class=${l(i.customContent)} .hidden=${!e}><slot name=${$.content} @slotchange=${this.handleContentSlotChange}></slot></div>`}renderIconStart(){const{iconStart:e,iconFlipRtl:t,scale:n}=this;return e?d("icon-start",a`<calcite-icon class=${l(i.icon)} .flipRtl=${t==="both"||t==="start"} .icon=${e} .scale=${S(n)}></calcite-icon>`):null}renderIconEnd(){const{iconEnd:e,iconFlipRtl:t,scale:n}=this;return e?d("icon-end",a`<calcite-icon class=${l(i.icon)} .flipRtl=${t==="both"||t==="end"} .icon=${e} .scale=${S(n)}></calcite-icon>`):null}renderContentEnd(){const{hasContentEnd:e}=this;return a`<div class=${l(i.contentEnd)} .hidden=${!e}><slot name=${$.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`}renderContentBottom(){const{hasContentBottom:e}=this;return a`<div class=${l(i.contentBottom)} .hidden=${!e}><slot name=${$.contentBottom} @slotchange=${this.handleContentBottomSlotChange}></slot></div>`}renderDefaultContainer(){return a`<div class=${l({[i.nestedContainer]:!0,[i.nestedContainerOpen]:this.openable&&this.open})}><slot @slotchange=${this.handleDefaultSlotChange} ${b(this.defaultSlotEl)}></slot></div>`}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return!n&&(e||t)?d("content",a`<div class=${l(i.content)}>${e?d("label",a`<div class=${l(i.label)}>${e}</div>`):null}${t?d("description",a`<div class=${l(i.description)}>${t}</div>`):null}</div>`):null}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:o,unavailable:c}=this,r=o||!!t||!!e,m=[this.renderContentStart(),this.renderCustomContent(),this.renderIconStart(),this.renderContentProperties(),this.renderIconEnd(),this.renderContentEnd()];return d("content-container",a`<div .ariaLabel=${t} class=${l({[i.gridCell]:!0,[i.contentContainer]:!0,[i.contentContainerUnavailable]:c,[i.contentContainerSelectable]:n!=="none",[i.contentContainerHasCenterContent]:r})} @click=${this.handleItemClick} role=gridcell ${b(this.contentEl)}>${m}</div>`)}render(){const{openable:e,open:t,level:n,active:o,label:c,selected:r,selectionAppearance:m,selectionMode:p,interactionMode:h,closed:g,filterHidden:u,bordered:E,disabled:R,hasContentBottom:H}=this,F=E&&H,K=E&&!H,I=p!=="none"&&m==="border",j=I&&r,N=I&&!r,W=h==="interactive"||h==="static"&&p!=="none"&&m==="border";return T({disabled:R,children:a`<div class=${l({[i.wrapper]:!0,[i.wrapperBordered]:F})}><div .ariaExpanded=${e?t:null} .ariaLabel=${c} .ariaLevel=${n} .ariaSelected=${r} class=${l({[i.row]:!0,[i.container]:!0,[i.containerHover]:W,[i.containerBorder]:I,[i.containerBorderSelected]:j,[i.containerBorderUnselected]:N})} .hidden=${g||u} @focus=${this.focusCellNull} @focusin=${this.emitInternalListItemActive} @keydown=${this.handleItemKeyDown} role=row .tabIndex=${o?0:-1} ${b(this.containerEl)}>${this.renderDragHandle()}${this.renderSelected()}${this.renderOpen()}<div class=${l({[i.contentContainerWrapper]:!0,[i.contentContainerWrapperBordered]:K})}>${this.renderActionsStart()}${this.renderContentContainer()}${this.renderActionsEnd()}</div></div>${this.renderContentBottom()}</div>${this.renderDefaultContainer()}`})}}P("calcite-list-item",te);export{te as ListItem};
