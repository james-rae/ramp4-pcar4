import{x as o,z as e,bt as d,K as u,G as y}from"./main-DeRV24Di.js";function f(r){const{exifInfo:n,exifName:i,tagName:a}=r;if(!n||!i||!a)return null;const s=n.find(p=>p.name===i);return s?m({tagName:a,tags:s.tags}):null}function m(r){const{tagName:n,tags:i}=r;return!i||!n?null:i.find(a=>a.name===n)?.value||null}var l;const I={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let t=l=class extends y{constructor(r){super(r),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:r}=this,n=f({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:r});return I[n]||null}clone(){return new l({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([e({type:String})],t.prototype,"contentType",void 0),o([e()],t.prototype,"exifInfo",void 0),o([e({readOnly:!0})],t.prototype,"orientationInfo",null),o([e({type:d})],t.prototype,"id",void 0),o([e({type:String})],t.prototype,"globalId",void 0),o([e({type:String})],t.prototype,"keywords",void 0),o([e({type:String})],t.prototype,"name",void 0),o([e({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),o([e({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([e({type:d})],t.prototype,"size",void 0),o([e({json:{read:!1}})],t.prototype,"url",void 0),t=l=o([u("esri.rest.query.support.AttachmentInfo")],t);const h=t;export{h as a};
