import{q as i,u as r,C as s,n}from"./main-B3JhZOBP.js";import{d as u,y as o}from"./arcgisLayerUrl-wnNYJ4xv.js";const p=l=>{let e=class extends l{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=u(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",o(t,n.getLogger(this)))}};return i([r()],e.prototype,"title",null),i([r({type:String})],e.prototype,"url",null),e=i([s("esri.layers.mixins.ArcGISService")],e),e};export{p as l};