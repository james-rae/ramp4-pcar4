import{x as e,z as o,K as a}from"./main-DZMdXZ8-.js";import{r}from"./automaticLengthMeasurementUtils-CnIA3o5x.js";import{h as n,Q as h,w as p}from"./SnappingContext-CxHRFhNk.js";let s=class extends n(r){constructor(l){super(l),this.type="move-point",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};e([o()],s.prototype,"allFields",null),s=e([a("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")],s);let i=class extends n(r){constructor(l){super(l),this.type="selected-vertex",this.area=h(),this.totalLength=p(),this.geometryType="polyline",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.geometryType==="polygon"?this.area:this.totalLength]}};e([o()],i.prototype,"geometryType",void 0),e([o()],i.prototype,"allFields",null),i=e([a("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")],i);export{s as i,i as p};
