import{h as m,M as P,cq as I,K as w,U as k,bR as G,cV as S,cW as p,cX as d,cY as x,D as E,b6 as v}from"./main-CdIhtOSF.js";import{t as M}from"./jsonUtils-9dKz64x0.js";import{d as O}from"./FeatureSet-BQdb6guQ.js";const F={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function L(s){const r=s.folders||[],t=r.slice(),e=new Map,n=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(s.featureCollection?.layers||[]).forEach(o=>{const y=m(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(n,g,o.featureSet.features):a==="esriGeometryPolyline"?h(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,o.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(o=>{c.set(o.id,o)}),r.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=q(y,o.id,s.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=m(e.get("esriGeometryPoint")),o.polylines=m(e.get("esriGeometryPolyline")),o.polygons=m(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[F[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=b([o])}});const u=b(t);return{folders:r,sublayers:t,extent:u}}function N(s,r,t,e){const n=P?.findCredential(s);s=I(s,{token:n?.token});const i=w.kmlServiceUrl;return k(i,{query:{url:s,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:e})}function R(s,r,t=null,e=[]){const n=[],i={},f=r.sublayers,c=new Set(r.folders.map(l=>l.id));return f.forEach(l=>{const u=new s;if(t?u.read(l,t):u.read(l),e.length&&c.has(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers?.unshift(u)}else n.unshift(u)}),n}function h(s,r,t){t.forEach(e=>{s.set(e.attributes[r],e)})}function j(s,r){let t;return r.some(e=>e.id===s&&(t=e,!0)),t}function q(s,r,t){const e=j(s,t);return e&&(e.parentFolderId=r,e.networkLink=e),e}async function T(s){const r=O.fromJSON(s.featureSet).features,t=s.layerDefinition,e=M(t.drawingInfo.renderer),n=v.fromJSON(s.popupInfo),i=[];for(const f of r){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=n,f.visible=!0,i.push(f)}return i}function b(s){const r=G(S),t=G(S);for(const e of s){if(e.polygons?.featureSet?.features)for(const n of e.polygons.featureSet.features)p(r,n.geometry),d(t,r);if(e.polylines?.featureSet?.features)for(const n of e.polylines.featureSet.features)p(r,n.geometry),d(t,r);if(e.points?.featureSet?.features)for(const n of e.points.featureSet.features)p(r,n.geometry),d(t,r);if(e.mapImages)for(const n of e.mapImages)p(r,n.extent),d(t,r)}return x(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:E.WGS84}}export{R as S,T as b,L as d,N as g,b as j};
