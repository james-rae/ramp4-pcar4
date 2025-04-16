import{e as _e}from"./common-CYWrYyJl.js";import{bF as Q,aB as ye,k as b,o as F,A as xe,aD as ve,C as Me,ao as we,ia as Ie,bS as j,gB as Se,au as Be,ib as be}from"./main-DaZH2qzH.js";import{e as P}from"./TileKey-DuIgXJpm.js";import{m as Te,b as $}from"./vec2-tHZ6OaOy.js";import{_ as Ce}from"./QueueProcessor-DeluVkGp.js";import{t as Fe}from"./quickselect-DHTstthl.js";import{a as Ye}from"./Query-CcjqOd6H.js";function ze(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function G(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function H(e,t,i,s,o,n,r){return e[0]=t,e[1]=i,e[2]=s,e[3]=o,e[4]=n,e[5]=r,e}function U(e,t){const i=t[0],s=t[1],o=t[2],n=t[3],r=t[4],l=t[5];let a=i*n-s*o;return a?(a=1/a,e[0]=n*a,e[1]=-s*a,e[2]=-o*a,e[3]=i*a,e[4]=(o*l-n*r)*a,e[5]=(s*r-i*l)*a,e):null}function Xe(e){return e[0]*e[3]-e[1]*e[2]}function K(e,t,i){const s=t[0],o=t[1],n=t[2],r=t[3],l=t[4],a=t[5],h=i[0],c=i[1],f=i[2],m=i[3],_=i[4],d=i[5];return e[0]=s*h+n*c,e[1]=o*h+r*c,e[2]=s*f+n*m,e[3]=o*f+r*m,e[4]=s*_+n*d+l,e[5]=o*_+r*d+a,e}function ee(e,t,i){const s=t[0],o=t[1],n=t[2],r=t[3],l=t[4],a=t[5],h=Math.sin(i),c=Math.cos(i);return e[0]=s*c+n*h,e[1]=o*c+r*h,e[2]=s*-h+n*c,e[3]=o*-h+r*c,e[4]=l,e[5]=a,e}function te(e,t,i){const s=t[0],o=t[1],n=t[2],r=t[3],l=t[4],a=t[5],h=i[0],c=i[1];return e[0]=s*h,e[1]=o*h,e[2]=n*c,e[3]=r*c,e[4]=l,e[5]=a,e}function ie(e,t,i){const s=t[0],o=t[1],n=t[2],r=t[3],l=t[4],a=t[5],h=i[0],c=i[1];return e[0]=s,e[1]=o,e[2]=n,e[3]=r,e[4]=s*h+n*c+l,e[5]=o*h+r*c+a,e}function se(e,t){const i=Math.sin(t),s=Math.cos(t);return e[0]=s,e[1]=i,e[2]=-i,e[3]=s,e[4]=0,e[5]=0,e}function oe(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function ne(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function Pe(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"}function ke(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)}function Re(e,t,i){return e[0]=t[0]+i[0],e[1]=t[1]+i[1],e[2]=t[2]+i[2],e[3]=t[3]+i[3],e[4]=t[4]+i[4],e[5]=t[5]+i[5],e}function re(e,t,i){return e[0]=t[0]-i[0],e[1]=t[1]-i[1],e[2]=t[2]-i[2],e[3]=t[3]-i[3],e[4]=t[4]-i[4],e[5]=t[5]-i[5],e}function Le(e,t,i){return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*i,e[5]=t[5]*i,e}function Ae(e,t,i,s){return e[0]=t[0]+i[0]*s,e[1]=t[1]+i[1]*s,e[2]=t[2]+i[2]*s,e[3]=t[3]+i[3]*s,e[4]=t[4]+i[4]*s,e[5]=t[5]+i[5]*s,e}function Oe(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]}function Ve(e,t){const i=e[0],s=e[1],o=e[2],n=e[3],r=e[4],l=e[5],a=t[0],h=t[1],c=t[2],f=t[3],m=t[4],_=t[5],d=_e();return Math.abs(i-a)<=d*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(s-h)<=d*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(o-c)<=d*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(n-f)<=d*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(r-m)<=d*Math.max(1,Math.abs(r),Math.abs(m))&&Math.abs(l-_)<=d*Math.max(1,Math.abs(l),Math.abs(_))}const qe=K,Ee=re;Object.freeze(Object.defineProperty({__proto__:null,add:Re,copy:ze,determinant:Xe,equals:Ve,exactEquals:Oe,frob:ke,fromRotation:se,fromScaling:oe,fromTranslation:ne,identity:G,invert:U,mul:qe,multiply:K,multiplyScalar:Le,multiplyScalarAndAdd:Ae,rotate:ee,scale:te,set:H,str:Pe,sub:Ee,subtract:re,translate:ie},Symbol.toStringTag,{value:"Module"}));function le(){const e=new Float32Array(6);return e[0]=1,e[3]=1,e}function je(e){const t=new Float32Array(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function Ke(e,t,i,s,o,n){const r=new Float32Array(6);return r[0]=e,r[1]=t,r[2]=i,r[3]=s,r[4]=o,r[5]=n,r}function Ne(e,t){return new Float32Array(e,t,6)}function ae(e,t,i,s){const o=t[s],n=t[s+1];e[s]=i[0]*o+i[2]*n+i[4],e[s+1]=i[1]*o+i[3]*n+i[5]}function he(e,t,i,s=0,o=0,n=2){const r=o||t.length/n;for(let l=s;l<r;l++)ae(e,t,i,l*n)}Object.freeze(Object.defineProperty({__proto__:null,clone:je,create:le,createView:Ne,fromValues:Ke,transform:ae,transformMany:he},Symbol.toStringTag,{value:"Module"}));function Y(e,t){return[e,t]}function T(e,t,i){return e[0]=t,e[1]=i,e}function De(e,t,i,s,o){return e[0]=t,e[1]=i,e[2]=s,e[3]=o,e}const v=new P("0/0/0/0");let We=class pe{static create(t,i,s=null){const o=Q(t.spatialReference),n=i.origin||Y(t.origin.x,t.origin.y),r=Y(t.size[0]*i.resolution,t.size[1]*i.resolution),l=Y(-1/0,-1/0),a=Y(1/0,1/0),h=Y(1/0,1/0);s!=null&&(T(l,Math.max(0,Math.floor((s.xmin-n[0])/r[0])),Math.max(0,Math.floor((n[1]-s.ymax)/r[1]))),T(a,Math.max(0,Math.floor((s.xmax-n[0])/r[0])),Math.max(0,Math.floor((n[1]-s.ymin)/r[1]))),T(h,a[0]-l[0]+1,a[1]-l[1]+1));const{cols:c,rows:f}=i;let m,_,d,y;return!s&&c&&f&&(T(l,c[0],f[0]),T(a,c[1],f[1]),T(h,c[1]-c[0]+1,f[1]-f[0]+1)),t.isWrappable?(m=Y(Math.ceil(Math.round((o.valid[1]-o.valid[0])/i.resolution)/t.size[0]),h[1]),_=!0,d=o.origin,y=o.valid):(m=h,_=!1),new pe(i.level,i.resolution,i.scale,n,l,a,h,r,m,_,d,y)}constructor(t,i,s,o,n,r,l,a,h,c,f,m){this.level=t,this.resolution=i,this.scale=s,this.origin=o,this.first=n,this.last=r,this.size=l,this.norm=a,this.worldSize=h,this.wrap=c,this._spatialReferenceOrigin=f,this._spatialReferenceValid=m}normalizeCol(t){if(!this.wrap)return t;const i=this.worldSize[0];return t<0?i-1-Math.abs((t+1)%i):t%i}normalizeKey(t){if(!this.wrap)return;const i=this.worldSize[0],s=t.col;s<0?(t.col=s+i,t.world-=1):s>=i&&(t.col=s-i,t.world+=1)}denormalizeCol(t,i){return this.wrap?this.worldSize[0]*i+t:t}getWorldForColumn(t){return this.wrap?Math.floor(t/this.worldSize[0]):0}getFirstColumnForWorld(t){return t*this.worldSize[0]+this.first[0]}getLastColumnForWorld(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(t){return(t-this.origin[0])/this.norm[0]}getXForColumn(t){const i=this.origin[0]+t*this.norm[0],s=this._spatialReferenceOrigin,o=this._spatialReferenceValid;return this.wrap&&s&&o?i===s[0]?o[0]:this.origin[0]===s[0]&&t===this.worldSize[0]?o[1]:i:i}getRowForY(t){return(this.origin[1]-t)/this.norm[1]}getYForRow(t){return this.origin[1]-t*this.norm[1]}getTileBounds(t,i,s=!1){v.set(i);const o=s?v.col:this.denormalizeCol(v.col,v.world),n=v.row;return De(t,this.getXForColumn(o),this.getYForRow(n+1),this.getXForColumn(o+1),this.getYForRow(n)),t}getTileCoords(t,i,s=!1){v.set(i);const o=s?v.col:this.denormalizeCol(v.col,v.world);return Array.isArray(t)?T(t,this.getXForColumn(o),this.getYForRow(v.row)):(t.x=this.getXForColumn(o),t.y=this.getYForRow(v.row)),t}},k=class{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}*keys(){const e=this.lodInfo;for(const{row:t,colFrom:i,colTo:s}of this.spans)for(let o=i;o<=s;o++){const n=e.getWorldForColumn(o);yield new P(e.level,t,e.normalizeCol(o),n)}}forEach(e,t){const{spans:i,lodInfo:s}=this,{level:o}=s;if(i.length!==0)for(const{row:n,colFrom:r,colTo:l}of i)for(let a=r;a<=l;a++)e.call(t,o,n,s.normalizeCol(a),s.getWorldForColumn(a))}};k.pool=new ye(k);let N=class{constructor(e,t,i){this.row=e,this.colFrom=t,this.colTo=i}};const g=new P("0/0/0/0");let Je=class ge{static create(t,i){t[1]>i[1]&&([t,i]=[i,t]);const[s,o]=t,[n,r]=i,l=n-s,a=r-o,h=a!==0?l/a:0,c=(Math.ceil(o)-o)*h,f=(Math.floor(o)-o)*h;return new ge(s,Math.floor(o),Math.ceil(r),h,l<0?c:f,l<0?f:c,l<0?n:s,l<0?s:n)}constructor(t,i,s,o,n,r,l,a){this.x=t,this.ymin=i,this.ymax=s,this.invM=o,this.leftAdjust=n,this.rightAdjust=r,this.leftBound=l,this.rightBound=a}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const x=[[0,0],[0,0],[0,0],[0,0]],Ze=1e-6;let Qe=class{constructor(e,t=null,i=e.lods[0].level,s=e.lods[e.lods.length-1].level){this.tileInfo=e,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};const o=e.lods.filter(r=>r.level>=i&&r.level<=s);this.minScale=o[0].scale,this.maxScale=o[o.length-1].scale;const n=this._lodInfos=o.map(r=>We.create(e,r,t));o.forEach((r,l)=>{this._infoByLevel[r.level]=n[l],this._infoByScale[r.scale]=n[l],this.scales[l]=r.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,t,i=!1){g.set(t);const s=this._infoByLevel[g.level];return s?s.getTileBounds(e,g,i):e}getTileCoords(e,t,i=!1){g.set(t);const s=this._infoByLevel[g.level];return s?s.getTileCoords(e,g,i):e}getTileCoverage(e,t=192,i=!0,s="closest"){if(!i&&(e.scale>this.minScale||e.scale<this.maxScale))return null;const o=s==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),n=k.pool.acquire(o),r=this._wrap;let l,a,h,c=1/0,f=-1/0;const m=n.spans;x[0][0]=x[0][1]=x[1][1]=x[3][0]=-t,x[1][0]=x[2][0]=e.size[0]+t,x[2][1]=x[3][1]=e.size[1]+t;for(const u of x)e.toMap(u,u),u[0]=o.getColumnForX(u[0]),u[1]=o.getRowForY(u[1]);const _=[];let d=3;for(let u=0;u<4;u++){if(x[u][1]===x[d][1]){d=u;continue}const p=Je.create(x[u],x[d]);c=Math.min(p.ymin,c),f=Math.max(p.ymax,f),_[p.ymin]===void 0&&(_[p.ymin]=[]),_[p.ymin].push(p),d=u}if(c==null||f==null||f-c>100)return null;let y=[];for(l=c;l<f;){_[l]!=null&&(y=y.concat(_[l])),a=1/0,h=-1/0;for(let u=y.length-1;u>=0;u--){const p=y[u];a=Math.min(a,p.getLeftCol()),h=Math.max(h,p.getRightCol())}if(a=Math.floor(a),h=Math.floor(h),l>=o.first[1]&&l<=o.last[1])if(r)if(o.size[0]<o.worldSize[0]){const u=Math.floor(h/o.worldSize[0]);for(let p=Math.floor(a/o.worldSize[0]);p<=u;p++)m.push(new N(l,Math.max(o.getFirstColumnForWorld(p),a),Math.min(o.getLastColumnForWorld(p),h)))}else m.push(new N(l,a,h));else a>o.last[0]||h<o.first[0]||(a=Math.max(a,o.first[0]),h=Math.min(h,o.last[0]),m.push(new N(l,a,h)));l+=1;for(let u=y.length-1;u>=0;u--){const p=y[u];p.ymax>=l?p.incrRow():y.splice(u,1)}}return n}getTileParentId(e){g.set(e);const t=this._infoByLevel[g.level],i=this._lodInfos.indexOf(t)-1;return i<0?null:(this._getTileIdAtLOD(g,this._lodInfos[i],g),g.id)}getTileResolution(e){const t=this._infoByLevel[typeof e=="object"?e.level:e];return t?t.resolution:-1}getTileScale(e){const t=this._infoByLevel[e.level];return t?t.scale:-1}intersects(e,t){g.set(t);const i=this._infoByLevel[g.level],s=e.lodInfo;if(s.resolution>i.resolution){this._getTileIdAtLOD(g,s,g);const n=s.denormalizeCol(g.col,g.world);for(const r of e.spans)if(r.row===g.row&&r.colFrom<=n&&r.colTo>=n)return!0}if(s.resolution<i.resolution){const[n,r,l,a]=e.spans.reduce((d,y)=>(d[0]=Math.min(d[0],y.row),d[1]=Math.max(d[1],y.row),d[2]=Math.min(d[2],y.colFrom),d[3]=Math.max(d[3],y.colTo),d),[1/0,-1/0,1/0,-1/0]),h=i.denormalizeCol(g.col,g.world),c=s.getColumnForX(i.getXForColumn(h)),f=s.getRowForY(i.getYForRow(g.row)),m=s.getColumnForX(i.getXForColumn(h+1))-1,_=s.getRowForY(i.getYForRow(g.row+1))-1;return!(c>a||m<l||f>r||_<n)}const o=s.denormalizeCol(g.col,g.world);return e.spans.some(n=>n.row===g.row&&n.colFrom<=o&&n.colTo>=o)}normalizeBounds(e,t,i){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){const s=Q(this.tileInfo.spatialReference),o=-i*(s.valid[1]-s.valid[0]);e[0]+=o,e[2]+=o}return e}getSmallestInfoForScale(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(let i=1;i<t.length-1;i++)if(e>t[i]+Ze)return this._infoByScale[t[i-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(e){const t=this.scales;return this._infoByScale[e]||(e=t.reduce((i,s)=>Math.abs(s-e)<Math.abs(i-e)?s:i,t[0])),this._infoByScale[e]}scaleToLevel(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let i=t.length-1;i>=0;i--)if(e<t[i])return i===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[i]].level+(t[i]-e)/(t[i]-t[i+1]);return this._infoByScale[t[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}zoomToScale(e){return this.tileInfo.zoomToScale(e)}_getTileIdAtLOD(e,t,i){const s=this._infoByLevel[i.level];return e.set(i),t.resolution<s.resolution?null:(t.resolution===s.resolution||(e.level=t.level,e.col=Math.floor(i.col*s.resolution/t.resolution+.01),e.row=Math.floor(i.row*s.resolution/t.resolution+.01)),e)}};const ce=[0,0];let I=class extends ve{constructor(e){super(e),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:e,process:t,scheduler:i,priority:s}=this;this._queue=new Ce({concurrency:e,scheduler:i,priority:s,process:(o,n)=>{const r=this._keyToItem.get(o);return t(r,{signal:n})},peeker:o=>this._peek(o)})}destroy(){this.clear(),this._queue=Me(this._queue)}get length(){return this._queue?this._queue.length:0}abort(e){const t=typeof e=="string"?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}pause(){this._queue.pause()}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const i=this._queue.push(t),s=this.tileInfoView.getTileScale(e.key),o=we(this._tilesByScale,s,()=>new Set),n=()=>{o.delete(e.key),o.size===0&&this._tilesByScale.delete(s),this._keyToItem.delete(t)};return o.add(e.key),this._keyToItem.set(t,e),i.then(n,n),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(e){if(!this.state)return e.values().next().value;const t=new Set;for(const n of e)t.add(this._keyToItem.get(n).key);const i=this.state.scale;let s,o=Number.POSITIVE_INFINITY;for(const[n,r]of this._tilesByScale)if(Ie(r,l=>t.has(l))){const l=Math.abs(n-i);l<o&&(s=r,o=l)}return this._getClosestTileKey(s,e).id}_getClosestTileKey(e,t){const i=this.tileInfoView,s=this.state.center;let o,n=Number.POSITIVE_INFINITY;for(const r of e)if(t.has(r.id)){i.getTileCoords(ce,r);const l=Te(ce,s);l<n&&(n=l,o=r)}return o}};b([F({constructOnly:!0})],I.prototype,"concurrency",void 0),b([F({constructOnly:!0})],I.prototype,"priority",void 0),b([F({constructOnly:!0})],I.prototype,"process",void 0),b([F({constructOnly:!0})],I.prototype,"scheduler",void 0),b([F()],I.prototype,"state",void 0),b([F({constructOnly:!0})],I.prototype,"tileInfoView",void 0),I=b([xe("esri.views.2d.tiling.TileQueue")],I);const $e=I;class Ge{constructor(t,i,s){this.maxSize=t,this._tileInfoView=i,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(t){return this._tilePerId.has(t)}get(t){return this._tilePerId.get(t)}pop(t){const i=this._tilePerId.get(t);if(!i)return;const s=i.key.level,o=this._tileKeysPerLevel[s];ue(this._tilePerId,t);for(let n=0;n<o.length;n++)if(o[n].id===t){o.splice(n,1);break}return i.visible=!0,i}add(t){t.visible=!1;const i=t.key,s=i.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,t);const o=i.level;this._tileKeysPerLevel[o]||(this._tileKeysPerLevel[o]=[]),this._tileKeysPerLevel[o].push(i)}prune(t,i,s){let o=this._tilePerId.size;if(o<=this.maxSize)return;let n=this._tileKeysPerLevel.length-1;for(;o>this.maxSize&&n>=0;)n!==t&&(o=this._pruneAroundCenterTile(o,i,s,n)),n--;o>this.maxSize&&(o=this._pruneAroundCenterTile(o,i,s,t))}_pruneAroundCenterTile(t,i,s,o){const n=this._tileKeysPerLevel[o];if(!n||n.length===0)return t;const{size:r,origin:l}=this._tileInfoView.tileInfo,a=s*r[0],h=s*r[1],c=[0,0],f=[0,0];for(n.sort((m,_)=>(c[0]=l.x+a*(m.col+.5),c[1]=l.y-h*(m.row+.5),f[0]=l.x+a*(_.col+.5),f[1]=l.y-h*(_.row+.5),$(c,i)-$(f,i)));n.length>0;){const m=n.pop();if(this._removeTile(m.id),--t===this.maxSize)break}return t}_removeTile(t){const i=this._tilePerId.get(t);this._removedFunc&&i&&this._removedFunc(i),ue(this._tilePerId,t)}}function ue(e,t){e.delete(t)}const C=new P(0,0,0,0),S=new Map,R=[],D=[];let He=class{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new Ge(e.cacheSize,this.tileInfoView,t=>{this.releaseTile(t)}))}destroy(){this.tileIndex.clear()}update(e){const{resampling:t,tileIndex:i}=this,{scale:s,center:o,resolution:n}=e.state,{minScale:r,maxScale:l}=this.tileInfoView,a=!e.stationary&&s>this._previousScale;if(this._previousScale=s,!t&&(s>r||s<l))return this.tiles.length=0,void this.clear();const h=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!h)return this.tiles.length=0,void this.clear();const{spans:c,lodInfo:f}=h,{level:m}=f;this.tiles.length=0,i.forEach(u=>u.visible=!0);let _=0,d=0;if(c.length>0)for(const{row:u,colFrom:p,colTo:O}of c)for(let B=p;B<=O;B++){_++;const M=C.set(m,u,f.normalizeCol(B),f.getWorldForColumn(B)).id;let w=i.get(M);if(w)w.isReady?(S.set(M,w),d++):a||this._addParentTile(M,S);else{if(this._tileCache?.has(M)){if(w=this._tileCache.pop(M),this.tileIndex.set(M,w),w.isReady){S.set(M,w),d++;continue}}else w=this.acquireTile(C),this.tileIndex.set(M,w);a||this._addParentTile(M,S)}}const y=d===_;for(const[u,p]of i){if(S.has(u))continue;C.set(u);const O=this.tileInfoView.intersects(h,C),B=this.cachePolicy==="purge"?C.level!==m:C.level>m;!O||!a&&y?!B&&O||R.push(p):p.isReady?B&&this.cachePolicy==="purge"&&this._hasReadyAncestor(C,m)?R.push(p):D.push(p):B&&R.push(p)}for(const u of D)u.isReady&&S.set(u.key.id,u);for(const u of R)this._tileCache?this._tileCache.add(u):this.releaseTile(u),i.delete(u.key.id);for(const u of S.values())this.tiles.push(u);for(const u of i.values())S.has(u.key.id)||(u.visible=!1);this._tileCache?.prune(m,o,n),k.pool.release(h),D.length=0,R.length=0,S.clear()}clear(){const{tileIndex:e}=this;for(const t of e.values())this.releaseTile(t);e.clear()}refresh(e){for(const t of this.tileIndex.values())e(t);this._tileCache?.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,t){let i=e,s=null;for(;i=this.tileInfoView.getTileParentId(i),i;)if(this.tileIndex.has(i)){if(s=this.tileIndex.get(i),s?.isReady){t.has(s.key.id)||t.set(s.key.id,s);break}}else if(this._tileCache?.has(i)&&(s=this._tileCache.pop(i),this.tileIndex.set(i,s),s?.isReady)){t.has(s.key.id)||t.set(s.key.id,s);break}}_hasReadyAncestor(e,t){const i=j();this.tileInfoView.getTileBounds(i,e,!0);for(const s of this.tileIndex.values())if(s.isReady&&s.key.level>=t&&s.key.level<e.level){const o=j();if(this.tileInfoView.getTileBounds(o,s.key,!0),Se(o,i))return!0}return!1}};function V(e,t){if(!(this instanceof V))return new V(e,t);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&(typeof t=="function"?this.toBBox=t:this._initFormat(t)),this.clear()}function Ue(e,t,i){if(!i)return t.indexOf(e);for(var s=0;s<t.length;s++)if(i(e,t[s]))return s;return-1}function z(e,t){L(e,0,e.children.length,t,e)}function L(e,t,i,s,o){o||(o=X(null)),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(var n,r=t;r<i;r++)n=e.children[r],A(o,e.leaf?s(n):n);return o}function A(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function fe(e,t){return e.minX-t.minX}function me(e,t){return e.minY-t.minY}function W(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function q(e){return e.maxX-e.minX+(e.maxY-e.minY)}function et(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function tt(e,t){var i=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),o=Math.min(e.maxX,t.maxX),n=Math.min(e.maxY,t.maxY);return Math.max(0,o-i)*Math.max(0,n-s)}function J(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function E(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function X(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function de(e,t,i,s,o){for(var n,r=[t,i];r.length;)(i=r.pop())-(t=r.pop())<=s||(n=t+Math.ceil((i-t)/s/2)*s,Fe(e,n,t,i,o),r.push(t,n,n,i))}V.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,i=[],s=this.toBBox;if(!E(e,t))return i;for(var o,n,r,l,a=[];t;){for(o=0,n=t.children.length;o<n;o++)r=t.children[o],E(e,l=t.leaf?s(r):r)&&(t.leaf?i.push(r):J(e,l)?this._all(r,i):a.push(r));t=a.pop()}return i},collides:function(e){var t=this.data,i=this.toBBox;if(!E(e,t))return!1;for(var s,o,n,r,l=[];t;){for(s=0,o=t.children.length;s<o;s++)if(n=t.children[s],E(e,r=t.leaf?i(n):n)){if(t.leaf||J(e,r))return!0;l.push(n)}t=l.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,i=e.length;t<i;t++)this.insert(e[t]);return this}var s=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===s.height)this._splitRoot(this.data,s);else{if(this.data.height<s.height){var o=this.data;this.data=s,s=o}this._insert(s,this.data.height-s.height-1,!0)}else this.data=s;return this},insert:function(e){return e!=null&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=X([]),this},remove:function(e,t){if(e==null)return this;for(var i,s,o,n,r=this.data,l=this.toBBox(e),a=[],h=[];r||a.length;){if(r||(r=a.pop(),s=a[a.length-1],i=h.pop(),n=!0),r.leaf&&(o=Ue(e,r.children,t))!==-1)return r.children.splice(o,1),a.push(r),this._condense(a),this;n||r.leaf||!J(r,l)?s?(i++,r=s.children[i],n=!1):r=null:(a.push(r),h.push(i),i=0,s=r,r=r.children[0])}return this},toBBox:function(e){return e},compareMinX:fe,compareMinY:me,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var i=[];e;)e.leaf?t.push.apply(t,e.children):i.push.apply(i,e.children),e=i.pop();return t},_build:function(e,t,i,s){var o,n=i-t+1,r=this._maxEntries;if(n<=r)return z(o=X(e.slice(t,i+1)),this.toBBox),o;s||(s=Math.ceil(Math.log(n)/Math.log(r)),r=Math.ceil(n/Math.pow(r,s-1))),(o=X([])).leaf=!1,o.height=s;var l,a,h,c,f=Math.ceil(n/r),m=f*Math.ceil(Math.sqrt(r));for(de(e,t,i,m,this.compareMinX),l=t;l<=i;l+=m)for(de(e,l,h=Math.min(l+m-1,i),f,this.compareMinY),a=l;a<=h;a+=f)c=Math.min(a+f-1,h),o.children.push(this._build(e,a,c,s-1));return z(o,this.toBBox),o},_chooseSubtree:function(e,t,i,s){for(var o,n,r,l,a,h,c,f;s.push(t),!t.leaf&&s.length-1!==i;){for(c=f=1/0,o=0,n=t.children.length;o<n;o++)a=W(r=t.children[o]),(h=et(e,r)-a)<f?(f=h,c=a<c?a:c,l=r):h===f&&a<c&&(c=a,l=r);t=l||t.children[0]}return t},_insert:function(e,t,i){var s=this.toBBox,o=i?e:s(e),n=[],r=this._chooseSubtree(o,this.data,t,n);for(r.children.push(e),A(r,o);t>=0&&n[t].children.length>this._maxEntries;)this._split(n,t),t--;this._adjustParentBBoxes(o,n,t)},_split:function(e,t){var i=e[t],s=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,s);var n=this._chooseSplitIndex(i,o,s),r=X(i.children.splice(n,i.children.length-n));r.height=i.height,r.leaf=i.leaf,z(i,this.toBBox),z(r,this.toBBox),t?e[t-1].children.push(r):this._splitRoot(i,r)},_splitRoot:function(e,t){this.data=X([e,t]),this.data.height=e.height+1,this.data.leaf=!1,z(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,i){var s,o,n,r,l,a,h,c;for(a=h=1/0,s=t;s<=i-t;s++)r=tt(o=L(e,0,s,this.toBBox),n=L(e,s,i,this.toBBox)),l=W(o)+W(n),r<a?(a=r,c=s,h=l<h?l:h):r===a&&l<h&&(h=l,c=s);return c},_chooseSplitAxis:function(e,t,i){var s=e.leaf?this.compareMinX:fe,o=e.leaf?this.compareMinY:me;this._allDistMargin(e,t,i,s)<this._allDistMargin(e,t,i,o)&&e.children.sort(s)},_allDistMargin:function(e,t,i,s){e.children.sort(s);var o,n,r=this.toBBox,l=L(e,0,t,r),a=L(e,i-t,i,r),h=q(l)+q(a);for(o=t;o<i-t;o++)n=e.children[o],A(l,e.leaf?r(n):n),h+=q(l);for(o=i-t-1;o>=t;o--)n=e.children[o],A(a,e.leaf?r(n):n),h+=q(a);return h},_adjustParentBBoxes:function(e,t,i){for(var s=i;s>=0;s--)A(t[s],e)},_condense:function(e){for(var t,i=e.length-1;i>=0;i--)e[i].children.length===0?i>0?(t=e[i-1].children).splice(t.indexOf(e[i]),1):this.clear():z(e[i],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}};class Z{constructor(t,i){this.key=new P(0,0,0,0),this.bounds=j(),this.objectIds=new Set,this.key.set(i);const s=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.level=s.level,this.scale=s.scale,this.minScale=t.zoomToScale(s.level-1),this.maxScale=t.zoomToScale(s.level+1)}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return Be.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(t){return{$view:{scale:this.scale,timeZone:t}}}createChildTiles(){const t=this.key.getChildKeys(),i=be.acquire();for(let s=0;s<t.length;s++)i[s]=new Z(this.tileInfoView,t[s]);return i}getQuantizationParameters(){return Ye.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{se as M,ie as a,G as b,ee as c,H as d,K as e,te as f,Z as g,Qe as h,V as i,he as j,ne as k,oe as l,le as n,$e as p,He as r,k as s,U as u};
