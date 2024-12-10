import { dd as i$2, bT as r, et as r$1, bU as m, bV as a$2, bW as f$1, ap as n$1 } from './main-jdFDoOPu.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;let i$1=c=class extends(i$2(f$1)){constructor(e){super(e),this.type="georeferenced",this.origin=null;}};i$1.absolute=new c,r([r$1({georeferenced:"georeferenced"},{readOnly:!0})],i$1.prototype,"type",void 0),r([m({type:[Number],nonNullable:!1,json:{write:!0}})],i$1.prototype,"origin",void 0),i$1=c=r([a$2("esri.geometry.support.MeshGeoreferencedVertexSpace")],i$1);const a$1=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends(i$2(f$1)){constructor(o){super(o),this.type="local",this.origin=n$1();}};r([r$1({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),r([m({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=r([a$2("esri.geometry.support.MeshLocalVertexSpace")],i);const a=i;

export { a, a$1 as b };
