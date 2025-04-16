import{k as o,o as n,au as R,A as _,v as K,u as O,V as $,s as k,bv as fe,gV as G,gW as ge,bQ as re,aE as ie,az as N,aG as se,G as le,t as we,U as q,f as ae,I as J,bw as xe,q as ve}from"./main-DFutu5rJ.js";import{S as Se}from"./MultiOriginJSONSupport-Krvqm1gO.js";import{f as Me}from"./Layer-XlblQxZ0.js";import{p as Ie,I as Te}from"./WebTileLayer-3fXSdiTe.js";import{l as Le}from"./BlendLayer-BX7m2juT.js";import{b as Pe}from"./OperationalLayer-Bt8ydxRm.js";import{j as Ee}from"./PortalLayer-rtK63JJ_.js";import{f as Ce}from"./RefreshableLayer-s-fWsN0p.js";import{t as be}from"./ScaleRangeLayer-D4qugY0b.js";import{o as oe}from"./imageBitmapUtils-CHB3adYv.js";import{z,p as Re}from"./TileInfo-DgBqDIjL.js";import{e as Oe}from"./TileInfoTilemapCache-Bzljswod.js";import{o as H}from"./crsUtils-BLe27KvG.js";import{o as ne}from"./xmlUtils-TLuV3CJ7.js";var Q;let F=Q=class extends K{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new Q;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()??null),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo?.clone()??null),e}};o([n({type:R,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),o([n({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),o([n({type:z,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=Q=o([_("esri.layers.support.TileMatrixSet")],F);const Ae=F;var X;let L=X=class extends K{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new X;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([n({json:{read:{source:"id"}}})],L.prototype,"id",void 0),o([n({json:{read:{source:"title"}}})],L.prototype,"title",void 0),o([n({json:{read:{source:"abstract"}}})],L.prototype,"description",void 0),o([n({json:{read:{source:"legendUrl"}}})],L.prototype,"legendUrl",void 0),o([n({json:{read:{source:"isDefault"}}})],L.prototype,"isDefault",void 0),o([n({json:{read:{source:"keywords"}}})],L.prototype,"keywords",void 0),L=X=o([_("esri.layers.support.WMTSStyle")],L);const Fe=L;var Y;let w=Y=class extends K{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?R.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>R.fromJSON(r)):t.tileMatrixSets?.map(r=>R.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats?.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?.find(({id:e})=>e===this.tileMatrixSetId)??null}clone(){const e=new Y;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats?.slice()??null),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([n()],w.prototype,"description",void 0),o([n()],w.prototype,"fullExtent",void 0),o([O("fullExtent",["fullExtent"])],w.prototype,"readFullExtent",null),o([n({readOnly:!0})],w.prototype,"fullExtents",void 0),o([O("fullExtents",["fullExtents","tileMatrixSets"])],w.prototype,"readFullExtents",null),o([n()],w.prototype,"id",void 0),o([n()],w.prototype,"imageFormat",null),o([n({json:{read:{source:"formats"}}})],w.prototype,"imageFormats",void 0),o([n()],w.prototype,"layer",void 0),o([n()],w.prototype,"parent",void 0),o([n()],w.prototype,"styleId",null),o([n({type:$.ofType(Fe),json:{read:{source:"styles"}}})],w.prototype,"styles",void 0),o([n({json:{write:{ignoreOrigin:!0}}})],w.prototype,"title",void 0),o([n()],w.prototype,"tileMatrixSetId",void 0),o([n({readOnly:!0})],w.prototype,"tileMatrixSet",null),o([n({type:$.ofType(Ae),json:{read:{source:"tileMatrixSets"}}})],w.prototype,"tileMatrixSets",void 0),w=Y=o([_("esri.layers.support.WMTSSublayer")],w);const V=w,ue=90.71428571428571;function pe(e){const t=e.replaceAll(/ows:/gi,"");if(!f("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new k("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Ve(e,t){e=e.replaceAll(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,a=f("Contents",r);if(!a)throw new k("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=f("OperationsMetadata",r),u=l?.querySelector("[name='GetTile']"),p=u?.getElementsByTagName("Get"),m=p&&Array.prototype.slice.call(p),y=t.url?.indexOf("https"),c=y!==void 0&&y>-1;let g,I,v=t.serviceMode,x=t?.url;m?.length&&m.some(C=>{const T=f("Constraint",C);return!T||U("AllowedValues","Value",v,T)?(x=C.attributes[0].nodeValue,!0):(!T||U("AllowedValues","Value","RESTful",T)||U("AllowedValues","Value","REST",T)?I=C.attributes[0].nodeValue:T&&!U("AllowedValues","Value","KVP",T)||(g=C.attributes[0].nodeValue),!1)}),!x&&(I?(x=I,v="RESTful"):g?(x=g,v="KVP"):x=f("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const P=x.indexOf("1.0.0/");P===-1&&v==="RESTful"?x+="/":P>-1&&(x=x.slice(0,P)),v==="KVP"&&(x+=P>-1?"":"?"),c&&(x=x.replace(/^http:/i,"https:"));const S=h("ServiceIdentification>ServiceTypeVersion",r),M=h("ServiceIdentification>AccessConstraints",r),E=M&&/^none$/i.test(M)?null:M,W=b("Layer",a),D=b("TileMatrixSet",a),B=W.map(C=>{const T=h("Identifier",C);return i.set(T,C),je(T,C,D,c,S)});return{copyright:E,dimensionMap:s,layerMap:i,layers:B,serviceMode:v,tileUrl:x}}function Ue(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&i.dpi!==96&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=he(i.spatialReference?.wkid,s.scale*ue/96,r.id)}),i.dpi=96)})}),e}function Z(e){return e.nodeType===Node.ELEMENT_NODE}function f(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(Z(i)&&i.nodeName===e)return i}return null}function b(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r}function A(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(re)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=f(r,t))}),t&&t.textContent}function U(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(a=>{if(a.nodeName.includes(e)){const l=f(t,a),u=l?.textContent;if(u===r||r.split(":")&&r.split(":")[1]===u)return s=a,!0}return!1}),s}function je(e,t,r,i,s){const a=h("Abstract",t),l=A("Format",t);return{id:e,fullExtent:We(t),fullExtents:De(t),description:a,formats:l,styles:Be(t,i),title:h("Title",t),tileMatrixSets:Ke(s,t,r)}}function ce(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=b("ResourceURL",i),a=b("Dimension",i);let l,u,p,m;return a.length&&(l=h("Identifier",a[0]),u=A("Default",a[0])||A("Value",a[0])),a.length>1&&(p=h("Identifier",a[1]),m=A("Default",a[1])||A("Value",a[1])),e.dimensionMap.set(t,{dimensions:u,dimensions2:m}),s.forEach(y=>{let c=y.getAttribute("template");if(y.getAttribute("resourceType")==="tile"){if(l&&u.length)if(c.includes("{"+l+"}"))c=c.replace("{"+l+"}","{dimensionValue}");else{const g=c.toLowerCase().indexOf("{"+l.toLowerCase()+"}");g>-1&&(c=c.slice(0,g)+"{dimensionValue}"+c.slice(g+l.length+2))}if(p&&m.length)if(c.includes("{"+p+"}"))c=c.replace("{"+p+"}","{dimensionValue2}");else{const g=c.toLowerCase().indexOf("{"+p.toLowerCase()+"}");g>-1&&(c=c.slice(0,g)+"{dimensionValue2}"+c.slice(g+p.length+2))}r.push({template:c,format:y.getAttribute("format"),resourceType:"tile"})}}),r}function _e(e,t,r,i,s,a,l,u){const p=ke(e,t,i);if(!(p?.length>0))return"";const{dimensionMap:m}=e,y=m.get(t).dimensions?.[0],c=m.get(t).dimensions2?.[0];return p[l%p.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,a).replaceAll(/\{TileRow\}/gi,""+l).replaceAll(/\{TileCol\}/gi,""+u).replaceAll(/\{dimensionValue\}/gi,y).replaceAll(/\{dimensionValue2\}/gi,c)}function ke(e,t,r){const i=ce(e,t),s=i?.filter(a=>a.format===r);return(s?.length?s:i)??[]}function Ne(e,t,r,i){const{dimensionMap:s}=e,a=ce(e,t);let l="";if(a&&a.length>0){const u=s.get(t).dimensions?.[0],p=s.get(t).dimensions2?.[0];l=a[0].template,l.endsWith(".xxx")&&(l=l.slice(0,-4)),l=l.replaceAll(/\{Style\}/gi,i),l=l.replaceAll(/\{TileMatrixSet\}/gi,r),l=l.replaceAll(/\{TileMatrix\}/gi,"{level}"),l=l.replaceAll(/\{TileRow\}/gi,"{row}"),l=l.replaceAll(/\{TileCol\}/gi,"{col}"),l=l.replaceAll(/\{dimensionValue\}/gi,u),l=l.replaceAll(/\{dimensionValue2\}/gi,p)}return l}function We(e){const t=f("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function De(e){const t=[];return ne(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=ee(i),a=i.includes("epsg")&&H(s.wkid);let l,u,p,m;ne(r,{LowerCorner:y=>{[l,u]=y.textContent.split(" ").map(c=>Number.parseFloat(c)),a&&([l,u]=[u,l])},UpperCorner:y=>{[p,m]=y.textContent.split(" ").map(c=>Number.parseFloat(c)),a&&([p,m]=[m,p])}}),t.push({xmin:l,ymin:u,xmax:p,ymax:m,spatialReference:s})}}),t}function Be(e,t){return b("Style",e).map(r=>{const i=f("LegendURL",r),s=f("Keywords",r),a=s?A("Keyword",s):[];let l=i?.getAttribute("xlink:href");return t&&(l=l?.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:a,legendUrl:l,title:h("Title",r)}})}function Ke(e,t,r){return b("TileMatrixSetLink",t).map(i=>$e(e,i,r))}function $e(e,t,r){const i=f("TileMatrixSet",t).textContent,s=A("TileMatrix",t),a=r.find(S=>{const M=f("Identifier",S),E=M?.textContent;return!!(E===i||i.split(":")&&i.split(":")[1]===E)}),l=f("TileMatrixSetLimits",t),u=l&&b("TileMatrixLimits",l),p=new Map;if(u?.length)for(const S of u){const M=f("TileMatrix",S).textContent,E=+f("MinTileRow",S).textContent,W=+f("MaxTileRow",S).textContent,D=+f("MinTileCol",S).textContent,B=+f("MaxTileCol",S).textContent;p.set(M,{minCol:D,maxCol:B,minRow:E,maxRow:W})}const m=h("SupportedCRS",a).toLowerCase(),y=Ge(a,m),c=y.spatialReference,g=f("TileMatrix",a),I=[parseInt(h("TileWidth",g),10),parseInt(h("TileHeight",g),10)],v=[];s.length?s.forEach((S,M)=>{const E=U("TileMatrix","Identifier",S,a);v.push(me(E,m,M,i,p))}):b("TileMatrix",a).forEach((S,M)=>{v.push(me(S,m,M,i,p))});const x=qe(e,a,y,I,v[0]).toJSON(),P=new z({dpi:96,spatialReference:c,size:I,origin:y,lods:v}).toJSON();return{id:i,fullExtent:x,tileInfo:P}}function ee(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=ze(e);return r!=null&&(t=r),{wkid:t}}function Ge(e,t){return de(f("TileMatrix",e),t)}function de(e,t){const r=ee(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),a=t.includes("epsg")&&H(r.wkid);return new fe(a?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function qe(e,t,r,i,s){const a=f("BoundingBox",t);let l,u,p,m,y,c;if(a&&(l=h("LowerCorner",a).split(" "),u=h("UpperCorner",a).split(" ")),l&&l.length>1&&u&&u.length>1)p=parseFloat(l[0]),y=parseFloat(l[1]),m=parseFloat(u[0]),c=parseFloat(u[1]);else{const g=f("TileMatrix",t),I=parseInt(h("MatrixWidth",g),10),v=parseInt(h("MatrixHeight",g),10);p=r.x,c=r.y,m=p+I*i[0]*s.resolution,y=c-v*i[1]*s.resolution}return Je(e,r.spatialReference,r)?new R(y,p,c,m,r.spatialReference):new R(p,y,m,c,r.spatialReference)}function Je(e,t,r){return e==="1.0.0"&&H(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var j;function ze(e){return e.includes("crs84")||e.includes("crs:84")?j.CRS84:e.includes("crs83")||e.includes("crs:83")?j.CRS83:e.includes("crs27")||e.includes("crs:27")?j.CRS27:null}function me(e,t,r,i,s){const a=ee(t),l=h("Identifier",e);let u=parseFloat(h("ScaleDenominator",e));const p=he(a.wkid,u,i);u*=96/ue;const m=+h("MatrixWidth",e),y=+h("MatrixHeight",e),{maxCol:c=m-1,maxRow:g=y-1,minCol:I=0,minRow:v=0}=s.get(l)??{},{x,y:P}=de(e,t);return new Re({cols:[I,c],level:r,levelValue:l,origin:[x,P],scale:u,resolution:p,rows:[v,g]})}function he(e,t,r){let i;return i=G.hasOwnProperty(""+e)?G.values[G[e]]:r==="default028mm"?6370997*Math.PI/180:ge(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(j||(j={}));var te;const ye={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},He=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let d=te=class extends Le(Ce(be(Pe(Ee(Se(Me)))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([ie(()=>this.activeLayer,(t,r)=>{r&&!this.sublayers?.includes(r)&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},N),se(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},N),se(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},N),ie(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(le).then(()=>this._fetchService(e)).catch(t=>{throw le(t),new k("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new V);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i?.layerIdentifier;let l=null;const u=i?.tileMatrixSet;u&&(Array.isArray(u)?u.length&&(l=u[0]):l=u);const p=s?.format,m=s?.style;return new V({id:a,imageFormat:p,styleId:m,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=we("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return Qe(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(re)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Oe(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.endsWith("/")?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,a=new Ie({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new Te({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:a})}async fetchTile(e,t,r,i={}){const{signal:s}=i,a=this.getTileUrl(e,t,r),{data:l}=await q(a,{responseType:"image",signal:s});return l}async fetchImageBitmapTile(e,t,r,i={}){const{signal:s}=i;if(this.fetchTile!==te.prototype.fetchTile){const u=await this.fetchTile(e,t,r,i);return oe(u,e,t,r,s)}const a=this.getTileUrl(e,t,r),{data:l}=await q(a,{responseType:"blob",signal:s});return oe(l,e,t,r,s)}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],a=s?s.levelValue||`${s.level}`:`${e}`;let l=this.resourceInfo?"":_e({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,a).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=Ne({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ye[r.toLowerCase()]&&(s=ye[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),pe(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),pe(t.data),this.serviceMode=r}catch(i){throw new k("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ue(t.data):t.data=Ve(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await q(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(t=>t.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...ae(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=J(e),i={...r.query,...t},s=xe(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=J(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const r=`/${this.version}/WMTSCapabilities.xml`,i=new RegExp(r,"i");t=t.replace(i,""),t+=r;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=J(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?ae(e):{},i.forEach(s=>{e.hasOwnProperty(s)||He.has(s)||(e[s]=r[s])}))}return e}};function Qe(e,t){return e.map(r=>{const i=new V;return i.read(r,t),i})}o([n()],d.prototype,"dimensionMap",void 0),o([n()],d.prototype,"layerMap",void 0),o([n({type:V,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],d.prototype,"activeLayer",void 0),o([O("service","activeLayer",["layers"])],d.prototype,"readActiveLayerFromService",null),o([O(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],d.prototype,"readActiveLayerFromItemOrWebDoc",null),o([ve(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],d.prototype,"writeActiveLayer",null),o([n({type:String,value:"",json:{write:!0}})],d.prototype,"copyright",void 0),o([n({type:["show","hide"]})],d.prototype,"listMode",void 0),o([n({json:{read:!0,write:!0}})],d.prototype,"blendMode",void 0),o([n({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],d.prototype,"customParameters",void 0),o([O(["portal-item","web-document"],"customParameters")],d.prototype,"readCustomParameters",null),o([n({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],d.prototype,"customLayerParameters",void 0),o([n({type:R,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],d.prototype,"fullExtent",void 0),o([n({readOnly:!0})],d.prototype,"fullExtents",null),o([n({type:["WebTiledLayer"]})],d.prototype,"operationalLayerType",void 0),o([n()],d.prototype,"resourceInfo",void 0),o([n()],d.prototype,"serviceMode",void 0),o([O(["portal-item","web-document"],"serviceMode",["templateUrl"])],d.prototype,"readServiceMode",null),o([n({type:$.ofType(V)})],d.prototype,"sublayers",void 0),o([O("service","sublayers",["layers"])],d.prototype,"readSublayersFromService",null),o([n({readOnly:!0})],d.prototype,"supportedSpatialReferences",null),o([n({readOnly:!0})],d.prototype,"tilemapCache",null),o([n({json:{read:{source:"title"}}})],d.prototype,"title",null),o([n({json:{read:!1},readOnly:!0,value:"wmts"})],d.prototype,"type",void 0),o([n({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],d.prototype,"url",null),o([n()],d.prototype,"version",void 0),d=te=o([_("esri.layers.WMTSLayer")],d);const Xe=d;export{Xe as default};
