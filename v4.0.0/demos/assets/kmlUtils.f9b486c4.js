import{U as b,fE as k,k as w,m as p,ap as h,aF as x,aA as E,F,ff as v,fe as O,fF as P,fG as S,fH as m,fI as d}from"./main.efb50b2c.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function J(r){const s=r.folders||[],t=s.slice(),e=new Map,n=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(r.featureCollection&&r.featureCollection.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?G(n,g,o.featureSet.features):a==="esriGeometryPolyline"?G(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&G(f,g,o.featureSet.features)}),r.groundOverlays&&r.groundOverlays.forEach(o=>{c.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=C(y,o.id,r.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[M[y.type]].featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=I([o])}});const u=I(t);return{folders:s,sublayers:t,extent:u}}function L(r,s,t,e){const n=h&&h.findCredential(r);r=x(r,{token:n&&n.token});const i=E.kmlServiceUrl;return b(i,{query:{url:r,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:e})}function N(r,s,t=null,e=[]){const n=[],i={},f=s.sublayers,c=s.folders.map(l=>l.id);return f.forEach(l=>{const u=new r;if(t?u.read(l,t):u.read(l),e.length&&c.includes(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(u)}else n.unshift(u)}),n}function G(r,s,t){t.forEach(e=>{r.set(e.attributes[s],e)})}function j(r,s){let t;return s.some(e=>e.id===r&&(t=e,!0)),t}function C(r,s,t){const e=j(r,t);return e&&(e.parentFolderId=s,e.networkLink=e),e}async function T(r){const s=F.fromJSON(r.featureSet).features,t=r.layerDefinition,e=v(t.drawingInfo.renderer),n=O.fromJSON(r.popupInfo),i=[];for(const f of s){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=n,f.visible=!0,i.push(f)}return i}function I(r){const s=P(S),t=P(S);for(const e of r){if(e.polygons&&e.polygons.featureSet&&e.polygons.featureSet.features)for(const n of e.polygons.featureSet.features)m(s,n.geometry),d(t,s);if(e.polylines&&e.polylines.featureSet&&e.polylines.featureSet.features)for(const n of e.polylines.featureSet.features)m(s,n.geometry),d(t,s);if(e.points&&e.points.featureSet&&e.points.featureSet.features)for(const n of e.points.featureSet.features)m(s,n.geometry),d(t,s);if(e.mapImages)for(const n of e.mapImages)m(s,n.extent),d(t,s)}return k(t,S)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:w.WGS84}}export{N as S,T as b,J as d,L as g,I as j};
