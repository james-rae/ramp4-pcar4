import { aQ as E, aR as R, aS as h } from './main-jdFDoOPu.js';
import { i } from './AGraphicContainer-CLc90K_e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t extends i{renderChildren(i){for(const e of this.children)e.setTransform(i.state);if(super.renderChildren(i),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(i.drawPhase){case E.MAP:this._renderChildren(i,R.All);break;case E.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(i);}this._boundsRenderer&&this._boundsRenderer.doRender(i);}}_renderHighlight(e){h(e,!1,(e=>{this._renderChildren(e,R.Highlight);}));}}

export { t };
