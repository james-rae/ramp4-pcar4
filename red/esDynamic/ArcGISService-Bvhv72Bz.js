import{k as i,o as s,A as l,n as o}from"./main-BvLIKoYF.js";import{d as n,y as u}from"./arcgisLayerUrl-BrgteNl3.js";const a=r=>{let e=class extends r{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=n(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",u(t,o.getLogger(this)))}};return i([s()],e.prototype,"title",null),i([s({type:String})],e.prototype,"url",null),e=i([l("esri.layers.mixins.ArcGISService")],e),e};export{a as l};