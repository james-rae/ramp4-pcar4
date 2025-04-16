import{q as e,u as i,C as p}from"./main-CUxU9bWS.js";import{c as o,l as a}from"./GraphicsCollection-dYEmqNuB.js";import{f as h}from"./Layer-VQ4_KGgj.js";import{l as n}from"./BlendLayer-CRA6VAX4.js";import{t as m}from"./ScaleRangeLayer-B2dXyvbe.js";import{h as c}from"./ElevationInfo-M4dU7fC5.js";import"./preload-helper-ExcqyqRp.js";import"./jsonUtils-aqm3pfo-.js";import"./parser-D_L7gZcx.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DSQ66VqF.js";import"./common-DQOJ18NT.js";import"./lengthUtils-D1bX0TD8.js";let t=class extends n(m(h)){constructor(r){super(r),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,s){return super.on(r,s)}graphicChanged(r){this.emit("graphic-update",r)}};e([i({type:c})],t.prototype,"elevationInfo",void 0),e([i(a(o,"graphics"))],t.prototype,"graphics",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i()],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"internal",void 0),t=e([p("esri.layers.GraphicsLayer")],t);const z=t;export{z as default};
