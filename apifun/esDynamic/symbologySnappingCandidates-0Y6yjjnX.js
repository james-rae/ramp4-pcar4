import{ax as m,T as g,bg as I,o as y,cz as _}from"./main-DeRV24Di.js";import{e as C}from"./LRUCache-Dz1ri7UH.js";import{n as b}from"./ElevationInfo-b86CcKpg.js";function w(t=!1,e){if(t){const{elevationInfo:n,alignPointsInFeatures:s}=e;return new j(n,s)}return new $}let $=class{async alignCandidates(t,e,n){return t}notifyElevationSourceChange(){}};const v=1024;let j=class{constructor(t,e){this._elevationInfo=t,this._alignPointsInFeatures=e,this._alignmentsCache=new C(v),this._cacheVersion=0}async alignCandidates(t,e,n){const s=this._elevationInfo;return s==null||s.mode!=="absolute-height"||s.featureExpressionInfo?this._alignComputedElevationCandidates(t,e,n):(O(t,e,s),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(t,e,n){const s=new Map;for(const r of t)m(s,r.objectId,R).push(r);const[o,i,c]=this._prepareQuery(s,e),a=await this._alignPointsInFeatures(o,n);if(g(n),c!==this._cacheVersion)return this._alignComputedElevationCandidates(t,e,n);this._applyCacheAndResponse(o,a,i);const{drapedObjectIds:h,failedObjectIds:u}=a,l=[];for(const r of t){const{objectId:d}=r;h.has(d)&&r.type==="edge"&&(r.draped=!0),u.has(d)||l.push(r)}return l}_prepareQuery(t,e){const n=[],s=[];for(const[o,i]of t){const c=[];for(const a of i)this._addToQueriesOrCachedResult(o,a.target,c,s),a.type==="edge"&&(this._addToQueriesOrCachedResult(o,a.start,c,s),this._addToQueriesOrCachedResult(o,a.end,c,s));c.length!==0&&n.push({objectId:o,points:c})}return[{spatialReference:e.toJSON(),pointsInFeatures:n},s,this._cacheVersion]}_addToQueriesOrCachedResult(t,e,n,s){const o=z(t,e),i=this._alignmentsCache.get(o);i==null?n.push(e):s.push(new S(e,i))}_applyCacheAndResponse(t,{elevations:e,drapedObjectIds:n,failedObjectIds:s},o){for(const a of o)a.apply();let i=0;const c=this._alignmentsCache;for(const{objectId:a,points:h}of t.pointsInFeatures){if(s.has(a)){i+=h.length;continue}const u=!n.has(a);for(const l of h){const r=z(a,l),d=e[i++];l.z=d,u&&c.put(r,d,1)}}}};class S{constructor(e,n){this.point=e,this.z=n}apply(){this.point.z=this.z}}function z(t,{x:e,y:n,z:s,spatialReference:o}){return`${t}-${e}-${n}-${s??0}}-wkid:${o?.wkid}`}function O(t,e,n){const{offset:s,unit:o}=n;if(s==null)return;const i=I(e),c=s*(b(o??"meters")/i);for(const a of t)switch(a.type){case"edge":a.start.z+=c,a.end.z+=c;continue;case"vertex":a.target.z+=c;continue}}function R(){return[]}class V{filter(e,n){return n}notifyElevationSourceChange(){}}let E=class{filter(t,e){const{point:n,distance:s}=t,{z:o}=n;if(o==null||e.length===0)return e;const i=k(s),c=this._updateCandidatesTo3D(e,n,i).filter(T);return c.sort(q),c}_updateCandidatesTo3D(t,e,n){for(const s of t)switch(s.type){case"edge":F(s,e,n);continue;case"vertex":P(s,e,n);continue}return t}};function T(t){return t.distance<=1}function Q(t=!1){return t?new E:new V}function F(t,e,{x:n,y:s,z:o}){const{start:i,end:c,target:a}=t;t.draped||M(a,e,i,c);const h=(e.x-a.x)/n,u=(e.y-a.y)/s,l=(e.z-a.z)/o;t.distance=Math.sqrt(h*h+u*u+l*l)}function M(t,e,n,s){const o=s.x-n.x,i=s.y-n.y,c=s.z-n.z,a=o*o+i*i+c*c,h=(e.x-n.x)*o+(e.y-n.y)*i+c*(e.z-n.z),u=Math.min(1,Math.max(0,h/a)),l=n.x+o*u,r=n.y+i*u,d=n.z+c*u;t.x=l,t.y=r,t.z=d}function P(t,e,{x:n,y:s,z:o}){const{target:i}=t,c=(e.x-i.x)/n,a=(e.y-i.y)/s,h=(e.z-i.z)/o,u=Math.sqrt(c*c+a*a+h*h);t.distance=u}function k(t){return typeof t=="number"?{x:t,y:t,z:t}:t}function q(t,e){return t.distance-e.distance}function A(t=!1,e){return t?new J(e):new D}class D{async fetch(){return[]}notifySymbologyChange(){}}const B=1024;class J{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new C(B),this._cacheVersion=0}async fetch(e,n){if(e.length===0)return[];const s=[],o=[],i=this._candidatesCache;for(const r of e){const d=x(r),f=i.get(d);if(f)for(const p of f)o.push(y(p));else s.push(r),i.put(d,[],1)}if(s.length===0)return o;const c=this._cacheVersion,{candidates:a,sourceCandidateIndices:h}=await this._getSymbologyCandidates(s,n);if(g(n),c!==this._cacheVersion)return this.fetch(e,n);const u=[],{length:l}=a;for(let r=0;r<l;++r){const d=a[r],f=x(s[h[r]]),p=i.get(f);p.push(d),i.put(f,p,p.length),u.push(y(d))}return o.concat(u)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function x(t){switch(t.type){case"vertex":{const{objectId:e,target:n}=t,s=`${e}-vertex-${n.x}-${n.y}-${n.z??0}`;return _(s).toString()}case"edge":{const{objectId:e,start:n,end:s}=t,o=`${e}-edge-${n.x}-${n.y}-${n.z??0}-to-${s.x}-${s.y}-${s.z??0}`;return _(o).toString()}default:return""}}export{w as i,A as n,Q as r};
