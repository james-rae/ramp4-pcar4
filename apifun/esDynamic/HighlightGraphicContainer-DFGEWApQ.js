import{x as i,K as t}from"./main-DeRV24Di.js";import{E as a,g as h,R as n}from"./MapView-DhGV5yf-.js";import{i as o}from"./AGraphicContainer-DTxRYNLS.js";let e=class extends o{get hasHighlight(){return this.children.some(r=>r.hasData)}renderChildren(r){this.attributeView.update(),r.drawPhase===a.HIGHLIGHT&&this.children.some(s=>s.hasData)&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),h(r,!1,s=>{this._renderChildren(s,n.Highlight)}))}};e=i([t("esri.views.2d.layers.graphics.HighlightGraphicContainer")],e);const d=e;export{d as h};
