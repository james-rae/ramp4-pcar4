import{dn as n,a_ as r,dp as l,bY as o,q as s,u as a,C as p,aF as c}from"./main-CUxU9bWS.js";let d=0,e=class extends n(r(l(c))){constructor(i){super(i),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(i){const t=this.parent;if(t!=null)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",i)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};s([a({type:String,constructOnly:!0,clonable:!1})],e.prototype,"id",void 0),s([a({type:String})],e.prototype,"title",void 0),s([a({clonable:!1,value:null})],e.prototype,"parent",null),s([a({readOnly:!0})],e.prototype,"isEditable",null),e=s([p("esri.analysis.Analysis")],e);const u=e;export{u as c};
