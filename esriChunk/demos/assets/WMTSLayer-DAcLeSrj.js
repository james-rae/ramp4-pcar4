import{q as a,u as n,au as A,C as N,A as Y,z as R,V as J,s as _,bv as fe,gX as B,gY as ge,bR as ce,aE as re,az as j,aG as ie,J as se,t as we,U as K,h as le,I as G,bw as xe,v as ve}from"./main-B3JhZOBP.js";import{S as Se}from"./MultiOriginJSONSupport-Da7e0XL-.js";import{f as Me}from"./Layer-Bfzyxv9Q.js";import{p as Ie,I as Te}from"./WebTileLayer-B6_PZ8dE.js";import{l as Le}from"./BlendLayer-IwO2iVM0.js";import{b as Ee}from"./OperationalLayer-CsDRvg2K.js";import{j as Ce}from"./PortalLayer-_UAW-5cf.js";import{f as Pe}from"./RefreshableLayer-Dj52fwS2.js";import{t as be}from"./ScaleRangeLayer-jtSIOCL2.js";import{o as oe}from"./imageBitmapUtils-DLgjCGQ6.js";import{z as Q,p as Re}from"./TileInfo-C1HakHzH.js";import{e as Oe}from"./TileInfoTilemapCache-CwJJX6LB.js";import{o as Z}from"./crsUtils-DAndLU68.js";import{o as ae}from"./xmlUtils-CtUoQO7q.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-XypRjgMf.js";import"./jsonUtils-C8rugF8I.js";import"./parser-DLg6lUv-.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DmgL3kdu.js";import"./common-DQOJ18NT.js";import"./commonProperties-qelEtEdW.js";import"./ElevationInfo-DM-EN55K.js";import"./lengthUtils--68mTKxH.js";import"./PortalItem-BNr21cEK.js";import"./portalItemUtils-D37liKrv.js";import"./projection-Cg7AYUJP.js";import"./projectBuffer-cJZKDuOz.js";import"./TileKey-DZd6gJy7.js";var q;let F=q=class extends Y{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new q;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()??null),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo?.clone()??null),e}};a([n({type:A,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),a([n({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),a([n({type:Q,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=q=a([N("esri.layers.support.TileMatrixSet")],F);const Ae=F;var z;let E=z=class extends Y{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new z;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};a([n({json:{read:{source:"id"}}})],E.prototype,"id",void 0),a([n({json:{read:{source:"title"}}})],E.prototype,"title",void 0),a([n({json:{read:{source:"abstract"}}})],E.prototype,"description",void 0),a([n({json:{read:{source:"legendUrl"}}})],E.prototype,"legendUrl",void 0),a([n({json:{read:{source:"isDefault"}}})],E.prototype,"isDefault",void 0),a([n({json:{read:{source:"keywords"}}})],E.prototype,"keywords",void 0),E=z=a([N("esri.layers.support.WMTSStyle")],E);const Fe=E;var H;let w=H=class extends Y{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?A.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>A.fromJSON(r)):t.tileMatrixSets?.map(r=>A.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats?.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?.find(({id:e})=>e===this.tileMatrixSetId)??null}clone(){const e=new H;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats?.slice()??null),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};a([n()],w.prototype,"description",void 0),a([n()],w.prototype,"fullExtent",void 0),a([R("fullExtent",["fullExtent"])],w.prototype,"readFullExtent",null),a([n({readOnly:!0})],w.prototype,"fullExtents",void 0),a([R("fullExtents",["fullExtents","tileMatrixSets"])],w.prototype,"readFullExtents",null),a([n()],w.prototype,"id",void 0),a([n()],w.prototype,"imageFormat",null),a([n({json:{read:{source:"formats"}}})],w.prototype,"imageFormats",void 0),a([n()],w.prototype,"layer",void 0),a([n()],w.prototype,"parent",void 0),a([n()],w.prototype,"styleId",null),a([n({type:J.ofType(Fe),json:{read:{source:"styles"}}})],w.prototype,"styles",void 0),a([n({json:{write:{ignoreOrigin:!0}}})],w.prototype,"title",void 0),a([n()],w.prototype,"tileMatrixSetId",void 0),a([n({readOnly:!0})],w.prototype,"tileMatrixSet",null),a([n({type:J.ofType(Ae),json:{read:{source:"tileMatrixSets"}}})],w.prototype,"tileMatrixSets",void 0),w=H=a([N("esri.layers.support.WMTSSublayer")],w);const U=w,de=90.71428571428571;function ne(e){const t=e.replaceAll(/ows:/gi,"");if(!f("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function $e(e,t){e=e.replaceAll(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,o=f("Contents",r);if(!o)throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=f("OperationsMetadata",r),p=l?.querySelector("[name='GetTile']"),u=p?.getElementsByTagName("Get"),m=u&&Array.prototype.slice.call(u),y=t.url?.indexOf("https"),c=y!==void 0&&y>-1;let g,I,v=t.serviceMode,x=t?.url;m?.length&&m.some(L=>{const T=f("Constraint",L);return!T||$("AllowedValues","Value",v,T)?(x=L.attributes[0].nodeValue,!0):(!T||$("AllowedValues","Value","RESTful",T)||$("AllowedValues","Value","REST",T)?I=L.attributes[0].nodeValue:T&&!$("AllowedValues","Value","KVP",T)||(g=L.attributes[0].nodeValue),!1)}),!x&&(I?(x=I,v="RESTful"):g?(x=g,v="KVP"):x=f("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const C=x.indexOf("1.0.0/");C===-1&&v==="RESTful"?x+="/":C>-1&&(x=x.slice(0,C)),v==="KVP"&&(x+=C>-1?"":"?"),c&&(x=x.replace(/^http:/i,"https:"));const S=h("ServiceIdentification>ServiceTypeVersion",r),M=h("ServiceIdentification>AccessConstraints",r),P=M&&/^none$/i.test(M)?null:M,k=b("Layer",o),W=b("TileMatrixSet",o),D=k.map(L=>{const T=h("Identifier",L);return i.set(T,L),Ue(T,L,W,c,S)});return{copyright:P,dimensionMap:s,layerMap:i,layers:D,serviceMode:v,tileUrl:x}}function Ve(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&i.dpi!==96&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=ye(i.spatialReference?.wkid,s.scale*de/96,r.id)}),i.dpi=96)})}),e}function ee(e){return e.nodeType===Node.ELEMENT_NODE}function f(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(ee(i)&&i.nodeName===e)return i}return null}function b(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];ee(s)&&s.nodeName===e&&r.push(s)}return r}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];ee(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(ce)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=f(r,t))}),t&&t.textContent}function $(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(o=>{if(o.nodeName.includes(e)){const l=f(t,o),p=l?.textContent;if(p===r||r.split(":")&&r.split(":")[1]===p)return s=o,!0}return!1}),s}function Ue(e,t,r,i,s){const o=h("Abstract",t),l=O("Format",t);return{id:e,fullExtent:ke(t),fullExtents:We(t),description:o,formats:l,styles:De(t,i),title:h("Title",t),tileMatrixSets:Be(s,t,r)}}function me(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=b("ResourceURL",i),o=b("Dimension",i);let l,p,u,m;return o.length&&(l=h("Identifier",o[0]),p=O("Default",o[0])||O("Value",o[0])),o.length>1&&(u=h("Identifier",o[1]),m=O("Default",o[1])||O("Value",o[1])),e.dimensionMap.set(t,{dimensions:p,dimensions2:m}),s.forEach(y=>{let c=y.getAttribute("template");if(y.getAttribute("resourceType")==="tile"){if(l&&p.length)if(c.includes("{"+l+"}"))c=c.replace("{"+l+"}","{dimensionValue}");else{const g=c.toLowerCase().indexOf("{"+l.toLowerCase()+"}");g>-1&&(c=c.slice(0,g)+"{dimensionValue}"+c.slice(g+l.length+2))}if(u&&m.length)if(c.includes("{"+u+"}"))c=c.replace("{"+u+"}","{dimensionValue2}");else{const g=c.toLowerCase().indexOf("{"+u.toLowerCase()+"}");g>-1&&(c=c.slice(0,g)+"{dimensionValue2}"+c.slice(g+u.length+2))}r.push({template:c,format:y.getAttribute("format"),resourceType:"tile"})}}),r}function je(e,t,r,i,s,o,l,p){const u=_e(e,t,i);if(!(u?.length>0))return"";const{dimensionMap:m}=e,y=m.get(t).dimensions?.[0],c=m.get(t).dimensions2?.[0];return u[l%u.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,o).replaceAll(/\{TileRow\}/gi,""+l).replaceAll(/\{TileCol\}/gi,""+p).replaceAll(/\{dimensionValue\}/gi,y).replaceAll(/\{dimensionValue2\}/gi,c)}function _e(e,t,r){const i=me(e,t),s=i?.filter(o=>o.format===r);return(s?.length?s:i)??[]}function Ne(e,t,r,i){const{dimensionMap:s}=e,o=me(e,t);let l="";if(o&&o.length>0){const p=s.get(t).dimensions?.[0],u=s.get(t).dimensions2?.[0];l=o[0].template,l.endsWith(".xxx")&&(l=l.slice(0,-4)),l=l.replaceAll(/\{Style\}/gi,i),l=l.replaceAll(/\{TileMatrixSet\}/gi,r),l=l.replaceAll(/\{TileMatrix\}/gi,"{level}"),l=l.replaceAll(/\{TileRow\}/gi,"{row}"),l=l.replaceAll(/\{TileCol\}/gi,"{col}"),l=l.replaceAll(/\{dimensionValue\}/gi,p),l=l.replaceAll(/\{dimensionValue2\}/gi,u)}return l}function ke(e){const t=f("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function We(e){const t=[];return ae(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=te(i),o=i.includes("epsg")&&Z(s.wkid);let l,p,u,m;ae(r,{LowerCorner:y=>{[l,p]=y.textContent.split(" ").map(c=>Number.parseFloat(c)),o&&([l,p]=[p,l])},UpperCorner:y=>{[u,m]=y.textContent.split(" ").map(c=>Number.parseFloat(c)),o&&([u,m]=[m,u])}}),t.push({xmin:l,ymin:p,xmax:u,ymax:m,spatialReference:s})}}),t}function De(e,t){return b("Style",e).map(r=>{const i=f("LegendURL",r),s=f("Keywords",r),o=s?O("Keyword",s):[];let l=i?.getAttribute("xlink:href");return t&&(l=l?.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:o,legendUrl:l,title:h("Title",r)}})}function Be(e,t,r){return b("TileMatrixSetLink",t).map(i=>Ke(e,i,r))}function Ke(e,t,r){const i=f("TileMatrixSet",t).textContent,s=O("TileMatrix",t),o=r.find(S=>{const M=f("Identifier",S),P=M?.textContent;return!!(P===i||i.split(":")&&i.split(":")[1]===P)}),l=f("TileMatrixSetLimits",t),p=l&&b("TileMatrixLimits",l),u=new Map;if(p?.length)for(const S of p){const M=f("TileMatrix",S).textContent,P=+f("MinTileRow",S).textContent,k=+f("MaxTileRow",S).textContent,W=+f("MinTileCol",S).textContent,D=+f("MaxTileCol",S).textContent;u.set(M,{minCol:W,maxCol:D,minRow:P,maxRow:k})}const m=h("SupportedCRS",o).toLowerCase(),y=Ge(o,m),c=y.spatialReference,g=f("TileMatrix",o),I=[parseInt(h("TileWidth",g),10),parseInt(h("TileHeight",g),10)],v=[];s.length?s.forEach((S,M)=>{const P=$("TileMatrix","Identifier",S,o);v.push(pe(P,m,M,i,u))}):b("TileMatrix",o).forEach((S,M)=>{v.push(pe(S,m,M,i,u))});const x=Je(e,o,y,I,v[0]).toJSON(),C=new Q({dpi:96,spatialReference:c,size:I,origin:y,lods:v}).toJSON();return{id:i,fullExtent:x,tileInfo:C}}function te(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=ze(e);return r!=null&&(t=r),{wkid:t}}function Ge(e,t){return he(f("TileMatrix",e),t)}function he(e,t){const r=te(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),o=t.includes("epsg")&&Z(r.wkid);return new fe(o?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function Je(e,t,r,i,s){const o=f("BoundingBox",t);let l,p,u,m,y,c;if(o&&(l=h("LowerCorner",o).split(" "),p=h("UpperCorner",o).split(" ")),l&&l.length>1&&p&&p.length>1)u=parseFloat(l[0]),y=parseFloat(l[1]),m=parseFloat(p[0]),c=parseFloat(p[1]);else{const g=f("TileMatrix",t),I=parseInt(h("MatrixWidth",g),10),v=parseInt(h("MatrixHeight",g),10);u=r.x,c=r.y,m=u+I*i[0]*s.resolution,y=c-v*i[1]*s.resolution}return qe(e,r.spatialReference,r)?new A(y,u,c,m,r.spatialReference):new A(u,y,m,c,r.spatialReference)}function qe(e,t,r){return e==="1.0.0"&&Z(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var V;function ze(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function pe(e,t,r,i,s){const o=te(t),l=h("Identifier",e);let p=parseFloat(h("ScaleDenominator",e));const u=ye(o.wkid,p,i);p*=96/de;const m=+h("MatrixWidth",e),y=+h("MatrixHeight",e),{maxCol:c=m-1,maxRow:g=y-1,minCol:I=0,minRow:v=0}=s.get(l)??{},{x,y:C}=he(e,t);return new Re({cols:[I,c],level:r,levelValue:l,origin:[x,C],scale:p,resolution:u,rows:[v,g]})}function ye(e,t,r){let i;return i=B.hasOwnProperty(""+e)?B.values[B[e]]:r==="default028mm"?6370997*Math.PI/180:ge(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));var X;const ue={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},He=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let d=X=class extends Le(Pe(be(Ee(Ce(Se(Me)))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([re(()=>this.activeLayer,(t,r)=>{r&&!this.sublayers?.includes(r)&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},j),ie(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},j),ie(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},j),re(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},j)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(se).then(()=>this._fetchService(e)).catch(t=>{throw se(t),new _("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new U);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,o=i?.layerIdentifier;let l=null;const p=i?.tileMatrixSet;p&&(Array.isArray(p)?p.length&&(l=p[0]):l=p);const u=s?.format,m=s?.style;return new U({id:o,imageFormat:u,styleId:m,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const o=we("tileMatrixSet.tileInfo",s);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return Xe(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(ce)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Oe(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.endsWith("/")?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,o=new Ie({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new Te({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:o})}async fetchTile(e,t,r,i={}){const{signal:s}=i,o=this.getTileUrl(e,t,r),{data:l}=await K(o,{responseType:"image",signal:s});return l}async fetchImageBitmapTile(e,t,r,i={}){const{signal:s}=i;if(this.fetchTile!==X.prototype.fetchTile){const p=await this.fetchTile(e,t,r,i);return oe(p,e,t,r,s)}const o=this.getTileUrl(e,t,r),{data:l}=await K(o,{responseType:"blob",signal:s});return oe(l,e,t,r,s)}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],o=s?s.levelValue||`${s.level}`:`${e}`;let l=this.resourceInfo?"":je({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,o).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=Ne({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ue[r.toLowerCase()]&&(s=ue[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),ne(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),ne(t.data),this.serviceMode=r}catch(i){throw new _("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ve(t.data):t.data=$e(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await K(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(i=>i.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...le(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=G(e),i={...r.query,...t},s=xe(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=G(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const r=`/${this.version}/WMTSCapabilities.xml`,i=new RegExp(r,"i");t=t.replace(i,""),t+=r;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=G(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?le(e):{},i.forEach(s=>{e.hasOwnProperty(s)||He.has(s)||(e[s]=r[s])}))}return e}};function Xe(e,t){return e.map(r=>{const i=new U;return i.read(r,t),i})}a([n()],d.prototype,"dimensionMap",void 0),a([n()],d.prototype,"layerMap",void 0),a([n({type:U,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],d.prototype,"activeLayer",void 0),a([R("service","activeLayer",["layers"])],d.prototype,"readActiveLayerFromService",null),a([R(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],d.prototype,"readActiveLayerFromItemOrWebDoc",null),a([ve(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:Q},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],d.prototype,"writeActiveLayer",null),a([n({type:String,value:"",json:{write:!0}})],d.prototype,"copyright",void 0),a([n({type:["show","hide"]})],d.prototype,"listMode",void 0),a([n({json:{read:!0,write:!0}})],d.prototype,"blendMode",void 0),a([n({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],d.prototype,"customParameters",void 0),a([R(["portal-item","web-document"],"customParameters")],d.prototype,"readCustomParameters",null),a([n({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],d.prototype,"customLayerParameters",void 0),a([n({type:A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],d.prototype,"fullExtent",void 0),a([n({readOnly:!0})],d.prototype,"fullExtents",null),a([n({type:["WebTiledLayer"]})],d.prototype,"operationalLayerType",void 0),a([n()],d.prototype,"resourceInfo",void 0),a([n()],d.prototype,"serviceMode",void 0),a([R(["portal-item","web-document"],"serviceMode",["templateUrl"])],d.prototype,"readServiceMode",null),a([n({type:J.ofType(U)})],d.prototype,"sublayers",void 0),a([R("service","sublayers",["layers"])],d.prototype,"readSublayersFromService",null),a([n({readOnly:!0})],d.prototype,"supportedSpatialReferences",null),a([n({readOnly:!0})],d.prototype,"tilemapCache",null),a([n({json:{read:{source:"title"}}})],d.prototype,"title",null),a([n({json:{read:!1},readOnly:!0,value:"wmts"})],d.prototype,"type",void 0),a([n({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],d.prototype,"url",null),a([n()],d.prototype,"version",void 0),d=X=a([N("esri.layers.WMTSLayer")],d);const Et=d;export{Et as default};