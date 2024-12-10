import { ex as u$1, dd as i$1, ey as s, F, bT as r, bU as m, bV as a, ez as b$1 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=0,p=class extends(u$1(i$1(s(b$1)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${l++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(F)}};r([m({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),r([m({type:String})],p.prototype,"title",void 0),r([m({clonable:!1,value:null})],p.prototype,"parent",null),r([m({readOnly:!0})],p.prototype,"isEditable",null),p=r([a("esri.analysis.Analysis")],p);const c=p;

export { c };
