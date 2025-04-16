import{k as r,o as a,v as R,bp as O,A as E,ax as S,u as N,q as F,B as j,cg as P,bv as y,bF as L,bq as W,cK as G,bh as A,co as D,bS as T}from"./main-DyJf3FFo.js";import{t as I}from"./TileKey-B_6qmYK-.js";var b;let f=b=class extends R{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new b({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),r([a({type:O,json:{write:!0}})],f.prototype,"level",void 0),r([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=b=r([E("esri.layers.support.LOD")],f);const d=f;var v;const _=new S({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=v=class extends R{static create(e={}){const{resolutionFactor:t=1,scales:s,size:o=256,spatialReference:i=j.WebMercator,numLODs:l=24}=e;if(!P(i)){const c=[];if(s)for(let u=0;u<s.length;u++){const h=s[u];c.push(new d({level:u,scale:h,resolution:h}))}else{let u=5e-4;for(let h=l-1;h>=0;h--)c.unshift(new d({level:h,scale:u,resolution:u})),u*=2}return new v({dpi:96,lods:c,origin:new y(0,0,i),size:[o,o],spatialReference:i})}const p=L(i),g=e.origin?new y({x:e.origin.x,y:e.origin.y,spatialReference:i}):new y(p?{x:p.origin[0],y:p.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),m=96,w=1/(W(i)*39.37*m),x=[];if(s)for(let c=0;c<s.length;c++){const u=s[c],h=u*w;x.push(new d({level:c,scale:u,resolution:h}))}else{let c=G(i)?512/o*5916575275917094e-7:256/o*591657527591555e-6;const u=Math.ceil(l/t);x.push(new d({level:0,scale:c,resolution:c*w}));for(let h=1;h<u;h++){const z=c/2**t,M=z*w;x.push(new d({level:h,scale:z,resolution:M})),c=z}}return new v({dpi:m,lods:x,origin:g,size:[o,o],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=L(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return y.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const o=[],i=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach(l=>{o.push(l.scale),t=l.scale>t?l.scale:t,s=l.scale<s?l.scale:s,i[l.level]=l})),this._set("scales",o),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),o=s+1;return t[s]/(t[s]/t[o])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let o=0;for(;o<s;o++){const i=t[o],l=t[o+1];if(i<=e)return o;if(l===e)return o+1;if(i>e&&l<e)return o+Math.log(i/e)/Math.log(i/l)}return o}tileAt(e,t,s,o){const i=this.lodAt(e);if(!i)return null;let l,p;if(typeof t=="number")l=t,p=s;else if(A(t.spatialReference,this.spatialReference))l=t.x,p=t.y,o=s;else{const w=D(t,this.spatialReference);if(w==null)return null;l=w.x,p=w.y,o=s}const g=i.resolution*this.size[0],m=i.resolution*this.size[1];return o||(o=new I(null,0,0,0,T())),o.level=e,o.row=Math.floor((this.origin.y-p)/m+.001),o.col=Math.floor((l-this.origin.x)/g+.001),this.updateTileInfo(o),o}updateTileInfo(e,t=v.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===v.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(s=p)}if(!s)return;const o=e.level-s.level,i=s.resolution*this.size[0]/2**o,l=s.resolution*this.size[1]/2**o;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=T()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*l,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+l}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const s=this.lodAt(t.level);if(s==null)return null;const{resolution:o}=s,i=o*this.size[0],l=o*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*l,e[2]=e[0]+i,e[3]=e[1]+l,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return v.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||this.size[0]===256&&e===512)return null;const t=(this.size[0]===512&&e===256?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&t===0)return this;const s=[],o=this.lods.length-t;for(let i=0;i<o;i++){const l=i+t,{scale:p,resolution:g}=l>=0?this.lods[l]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};s.push(new d({level:i,scale:p,resolution:g}))}return new v({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const o=e[s];this._upsampleLevels[o.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/o.resolution:0},t=o}}};r([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),r([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),r([a({type:String,json:{read:_.read,write:_.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),r([a({readOnly:!0})],n.prototype,"isWrappable",null),r([a({type:y,json:{write:!0}})],n.prototype,"origin",void 0),r([N("origin")],n.prototype,"readOrigin",null),r([a({type:[d],value:null,json:{write:!0}})],n.prototype,"lods",null),r([a({readOnly:!0})],n.prototype,"scales",void 0),r([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),r([N("size",["rows","cols"])],n.prototype,"readSize",null),r([F("size",{cols:{type:O},rows:{type:O}})],n.prototype,"writeSize",null),r([a({type:j,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=v=r([E("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const V=n;export{d as p,V as z};
