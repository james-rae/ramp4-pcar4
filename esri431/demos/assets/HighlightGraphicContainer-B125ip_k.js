import { bT as r, bV as a$1, aQ as E, aS as h$1, aR as R } from './main-jdFDoOPu.js';
import { i } from './AGraphicContainer-CLc90K_e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===E.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),h$1(r,!0,(r=>{this._renderChildren(r,R.All);}),0));}};a=r([a$1("esri.views.2d.layers.graphics.HighlightGraphicContainer")],a);const h=a;

export { h };
