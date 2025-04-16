import{e as le}from"./common-DQOJ18NT.js";import{bI as ee,aD as ae,q as T,u as F,C as he,aF as ce,E as ue,aq as fe,ig as me,bV as D,gE as de,aw as ge,ih as pe}from"./main-CdIhtOSF.js";import{e as L}from"./TileKey-DLWnnM96.js";import{m as _e,b as J}from"./vec2-DGVIkCvT.js";import{_ as ye}from"./QueueProcessor-Cvimwt7a.js";import{t as xe}from"./quickselect-QQC62dOK.js";import{a as ve}from"./Query-sr5_9KZo.js";function Me(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function we(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function Ie(t,e,i,s,o,r,n){return t[0]=e,t[1]=i,t[2]=s,t[3]=o,t[4]=r,t[5]=n,t}function Se(t,e){const i=e[0],s=e[1],o=e[2],r=e[3],n=e[4],a=e[5];let l=i*r-s*o;return l?(l=1/l,t[0]=r*l,t[1]=-s*l,t[2]=-o*l,t[3]=i*l,t[4]=(o*a-r*n)*l,t[5]=(s*n-i*a)*l,t):null}function be(t){return t[0]*t[3]-t[1]*t[2]}function te(t,e,i){const s=e[0],o=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=i[0],c=i[1],f=i[2],m=i[3],p=i[4],_=i[5];return t[0]=s*h+r*c,t[1]=o*h+n*c,t[2]=s*f+r*m,t[3]=o*f+n*m,t[4]=s*p+r*_+a,t[5]=o*p+n*_+l,t}function Be(t,e,i){const s=e[0],o=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=Math.sin(i),c=Math.cos(i);return t[0]=s*c+r*h,t[1]=o*c+n*h,t[2]=s*-h+r*c,t[3]=o*-h+n*c,t[4]=a,t[5]=l,t}function Te(t,e,i){const s=e[0],o=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=i[0],c=i[1];return t[0]=s*h,t[1]=o*h,t[2]=r*c,t[3]=n*c,t[4]=a,t[5]=l,t}function $e(t,e,i){const s=e[0],o=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=i[0],c=i[1];return t[0]=s,t[1]=o,t[2]=r,t[3]=n,t[4]=s*h+r*c+a,t[5]=o*h+n*c+l,t}function Ce(t,e){const i=Math.sin(e),s=Math.cos(e);return t[0]=s,t[1]=i,t[2]=-i,t[3]=s,t[4]=0,t[5]=0,t}function Fe(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function ze(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function Ye(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function Xe(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)}function Pe(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t}function ie(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t}function ke(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t}function Re(t,e,i,s){return t[0]=e[0]+i[0]*s,t[1]=e[1]+i[1]*s,t[2]=e[2]+i[2]*s,t[3]=e[3]+i[3]*s,t[4]=e[4]+i[4]*s,t[5]=e[5]+i[5]*s,t}function Le(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function Ve(t,e){const i=t[0],s=t[1],o=t[2],r=t[3],n=t[4],a=t[5],l=e[0],h=e[1],c=e[2],f=e[3],m=e[4],p=e[5],_=le();return Math.abs(i-l)<=_*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-h)<=_*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(o-c)<=_*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(r-f)<=_*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(n-m)<=_*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(a-p)<=_*Math.max(1,Math.abs(a),Math.abs(p))}const Oe=te,Ae=ie;Object.freeze(Object.defineProperty({__proto__:null,add:Pe,copy:Me,determinant:be,equals:Ve,exactEquals:Le,frob:Xe,fromRotation:Ce,fromScaling:Fe,fromTranslation:ze,identity:we,invert:Se,mul:Oe,multiply:te,multiplyScalar:ke,multiplyScalarAndAdd:Re,rotate:Be,scale:Te,set:Ie,str:Ye,sub:Ae,subtract:ie,translate:$e},Symbol.toStringTag,{value:"Module"}));function qe(){const t=new Float32Array(6);return t[0]=1,t[3]=1,t}function Ee(t){const e=new Float32Array(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function je(t,e,i,s,o,r){const n=new Float32Array(6);return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=o,n[5]=r,n}function Ke(t,e){return new Float32Array(t,e,6)}function se(t,e,i,s){const o=e[s],r=e[s+1];t[s]=i[0]*o+i[2]*r+i[4],t[s+1]=i[1]*o+i[3]*r+i[5]}function Ne(t,e,i,s=0,o=0,r=2){const n=o||e.length/r;for(let a=s;a<n;a++)se(t,e,i,a*r)}Object.freeze(Object.defineProperty({__proto__:null,clone:Ee,create:qe,createView:Ke,fromValues:je,transform:se,transformMany:Ne},Symbol.toStringTag,{value:"Module"}));function z(t,e){return[t,e]}function $(t,e,i){return t[0]=e,t[1]=i,t}function De(t,e,i,s,o){return t[0]=e,t[1]=i,t[2]=s,t[3]=o,t}const M=new L("0/0/0/0");let We=class oe{static create(e,i,s=null){const o=ee(e.spatialReference),r=i.origin||z(e.origin.x,e.origin.y),n=z(e.size[0]*i.resolution,e.size[1]*i.resolution),a=z(-1/0,-1/0),l=z(1/0,1/0),h=z(1/0,1/0);s!=null&&($(a,Math.max(0,Math.floor((s.xmin-r[0])/n[0])),Math.max(0,Math.floor((r[1]-s.ymax)/n[1]))),$(l,Math.max(0,Math.floor((s.xmax-r[0])/n[0])),Math.max(0,Math.floor((r[1]-s.ymin)/n[1]))),$(h,l[0]-a[0]+1,l[1]-a[1]+1));const{cols:c,rows:f}=i;let m,p,_,y;return!s&&c&&f&&($(a,c[0],f[0]),$(l,c[1],f[1]),$(h,c[1]-c[0]+1,f[1]-f[0]+1)),e.isWrappable?(m=z(Math.ceil(Math.round((o.valid[1]-o.valid[0])/i.resolution)/e.size[0]),h[1]),p=!0,_=o.origin,y=o.valid):(m=h,p=!1),new oe(i.level,i.resolution,i.scale,r,a,l,h,n,m,p,_,y)}constructor(e,i,s,o,r,n,a,l,h,c,f,m){this.level=e,this.resolution=i,this.scale=s,this.origin=o,this.first=r,this.last=n,this.size=a,this.norm=l,this.worldSize=h,this.wrap=c,this._spatialReferenceOrigin=f,this._spatialReferenceValid=m}normalizeCol(e){if(!this.wrap)return e;const i=this.worldSize[0];return e<0?i-1-Math.abs((e+1)%i):e%i}normalizeKey(e){if(!this.wrap)return;const i=this.worldSize[0],s=e.col;s<0?(e.col=s+i,e.world-=1):s>=i&&(e.col=s-i,e.world+=1)}denormalizeCol(e,i){return this.wrap?this.worldSize[0]*i+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){const i=this.origin[0]+e*this.norm[0],s=this._spatialReferenceOrigin,o=this._spatialReferenceValid;return this.wrap&&s&&o?i===s[0]?o[0]:this.origin[0]===s[0]&&e===this.worldSize[0]?o[1]:i:i}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,i,s=!1){M.set(i);const o=s?M.col:this.denormalizeCol(M.col,M.world),r=M.row;return De(e,this.getXForColumn(o),this.getYForRow(r+1),this.getXForColumn(o+1),this.getYForRow(r)),e}getTileCoords(e,i,s=!1){M.set(i);const o=s?M.col:this.denormalizeCol(M.col,M.world);return Array.isArray(e)?$(e,this.getXForColumn(o),this.getYForRow(M.row)):(e.x=this.getXForColumn(o),e.y=this.getYForRow(M.row)),e}},q=class{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}*keys(){const e=this.lodInfo;for(const{row:i,colFrom:s,colTo:o}of this.spans)for(let r=s;r<=o;r++){const n=e.getWorldForColumn(r);yield new L(e.level,i,e.normalizeCol(r),n)}}forEach(e,i){const{spans:s,lodInfo:o}=this,{level:r}=o;if(s.length!==0)for(const{row:n,colFrom:a,colTo:l}of s)for(let h=a;h<=l;h++)e.call(i,r,n,o.normalizeCol(h),o.getWorldForColumn(h))}};q.pool=new ae(q);let E=class{constructor(e,i,s){this.row=e,this.colFrom=i,this.colTo=s}};const g=new L("0/0/0/0");let Je=class re{static create(e,i){e[1]>i[1]&&([e,i]=[i,e]);const[s,o]=e,[r,n]=i,a=r-s,l=n-o,h=l!==0?a/l:0,c=(Math.ceil(o)-o)*h,f=(Math.floor(o)-o)*h;return new re(s,Math.floor(o),Math.ceil(n),h,a<0?c:f,a<0?f:c,a<0?r:s,a<0?s:r)}constructor(e,i,s,o,r,n,a,l){this.x=e,this.ymin=i,this.ymax=s,this.invM=o,this.leftAdjust=r,this.rightAdjust=n,this.leftBound=a,this.rightBound=l}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const v=[[0,0],[0,0],[0,0],[0,0]],Ze=1e-6;let ht=class{constructor(e,i=null,s=e.lods[0].level,o=e.lods[e.lods.length-1].level){this.tileInfo=e,this.fullExtent=i,this.scales=[],this._infoByScale={},this._infoByLevel={};const r=e.lods.filter(a=>a.level>=s&&a.level<=o);this.minScale=r[0].scale,this.maxScale=r[r.length-1].scale;const n=this._lodInfos=r.map(a=>We.create(e,a,i));r.forEach((a,l)=>{this._infoByLevel[a.level]=n[l],this._infoByScale[a.scale]=n[l],this.scales[l]=a.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,i,s=!1){g.set(i);const o=this._infoByLevel[g.level];return o?o.getTileBounds(e,g,s):e}getTileCoords(e,i,s=!1){g.set(i);const o=this._infoByLevel[g.level];return o?o.getTileCoords(e,g,s):e}getTileCoverage(e,i=192,s=!0,o="closest"){if(!s&&(e.scale>this.minScale||e.scale<this.maxScale))return null;const r=o==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),n=q.pool.acquire(r),a=this._wrap;let l,h,c,f=1/0,m=-1/0;const p=n.spans;v[0][0]=v[0][1]=v[1][1]=v[3][0]=-i,v[1][0]=v[2][0]=e.size[0]+i,v[2][1]=v[3][1]=e.size[1]+i;for(const u of v)e.toMap(u,u),u[0]=r.getColumnForX(u[0]),u[1]=r.getRowForY(u[1]);const _=[];let y=3;for(let u=0;u<4;u++){if(v[u][1]===v[y][1]){y=u;continue}const d=Je.create(v[u],v[y]);f=Math.min(d.ymin,f),m=Math.max(d.ymax,m),_[d.ymin]===void 0&&(_[d.ymin]=[]),_[d.ymin].push(d),y=u}if(f==null||m==null||m-f>100)return null;let x=[];for(l=f;l<m;){_[l]!=null&&(x=x.concat(_[l])),h=1/0,c=-1/0;for(let u=x.length-1;u>=0;u--){const d=x[u];h=Math.min(h,d.getLeftCol()),c=Math.max(c,d.getRightCol())}if(h=Math.floor(h),c=Math.floor(c),l>=r.first[1]&&l<=r.last[1])if(a)if(r.size[0]<r.worldSize[0]){const u=Math.floor(c/r.worldSize[0]);for(let d=Math.floor(h/r.worldSize[0]);d<=u;d++)p.push(new E(l,Math.max(r.getFirstColumnForWorld(d),h),Math.min(r.getLastColumnForWorld(d),c)))}else p.push(new E(l,h,c));else h>r.last[0]||c<r.first[0]||(h=Math.max(h,r.first[0]),c=Math.min(c,r.last[0]),p.push(new E(l,h,c)));l+=1;for(let u=x.length-1;u>=0;u--){const d=x[u];d.ymax>=l?d.incrRow():x.splice(u,1)}}return n}getTileParentId(e){g.set(e);const i=this._infoByLevel[g.level],s=this._lodInfos.indexOf(i)-1;return s<0?null:(this._getTileIdAtLOD(g,this._lodInfos[s],g),g.id)}getTileResolution(e){const i=this._infoByLevel[typeof e=="object"?e.level:e];return i?i.resolution:-1}getTileScale(e){const i=this._infoByLevel[e.level];return i?i.scale:-1}intersects(e,i){g.set(i);const s=this._infoByLevel[g.level],o=e.lodInfo;if(o.resolution>s.resolution){this._getTileIdAtLOD(g,o,g);const n=o.denormalizeCol(g.col,g.world);for(const a of e.spans)if(a.row===g.row&&a.colFrom<=n&&a.colTo>=n)return!0}if(o.resolution<s.resolution){const[n,a,l,h]=e.spans.reduce((y,x)=>(y[0]=Math.min(y[0],x.row),y[1]=Math.max(y[1],x.row),y[2]=Math.min(y[2],x.colFrom),y[3]=Math.max(y[3],x.colTo),y),[1/0,-1/0,1/0,-1/0]),c=s.denormalizeCol(g.col,g.world),f=o.getColumnForX(s.getXForColumn(c)),m=o.getRowForY(s.getYForRow(g.row)),p=o.getColumnForX(s.getXForColumn(c+1))-1,_=o.getRowForY(s.getYForRow(g.row+1))-1;return!(f>h||p<l||m>a||_<n)}const r=o.denormalizeCol(g.col,g.world);return e.spans.some(n=>n.row===g.row&&n.colFrom<=r&&n.colTo>=r)}normalizeBounds(e,i,s){if(e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],this._wrap){const o=ee(this.tileInfo.spatialReference),r=-s*(o.valid[1]-o.valid[0]);e[0]+=r,e[2]+=r}return e}getSmallestInfoForScale(e){const i=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>i[0])return this._infoByScale[i[0]];for(let s=1;s<i.length-1;s++)if(e>i[s]+Ze)return this._infoByScale[i[s-1]];return this._infoByScale[i[i.length-1]]}getClosestInfoForScale(e){const i=this.scales;return this._infoByScale[e]||(e=i.reduce((s,o)=>Math.abs(o-e)<Math.abs(s-e)?o:s,i[0])),this._infoByScale[e]}scaleToLevel(e){const i=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let s=i.length-1;s>=0;s--)if(e<i[s])return s===i.length-1?this._infoByScale[i[i.length-1]].level:this._infoByScale[i[s]].level+(i[s]-e)/(i[s]-i[s+1]);return this._infoByScale[i[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}zoomToScale(e){return this.tileInfo.zoomToScale(e)}_getTileIdAtLOD(e,i,s){const o=this._infoByLevel[s.level];return e.set(s),i.resolution<o.resolution?null:(i.resolution===o.resolution||(e.level=i.level,e.col=Math.floor(s.col*o.resolution/i.resolution+.01),e.row=Math.floor(s.row*o.resolution/i.resolution+.01)),e)}};const Z=[0,0];let b=class extends ce{constructor(e){super(e),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:e,process:i,scheduler:s,priority:o}=this;this._queue=new ye({concurrency:e,scheduler:s,priority:o,process:(r,n)=>{const a=this._keyToItem.get(r);return i(a,{signal:n})},peeker:r=>this._peek(r)})}destroy(){this.clear(),this._queue=ue(this._queue)}get length(){return this._queue?this._queue.length:0}abort(e){const i=typeof e=="string"?e:e.id;this._queue.abort(i)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}pause(){this._queue.pause()}push(e){const i=e.key.id;if(this._queue.has(i))return this._queue.get(i);const s=this._queue.push(i),o=this.tileInfoView.getTileScale(e.key),r=fe(this._tilesByScale,o,()=>new Set),n=()=>{r.delete(e.key),r.size===0&&this._tilesByScale.delete(o),this._keyToItem.delete(i)};return r.add(e.key),this._keyToItem.set(i,e),s.then(n,n),s}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(e){if(!this.state)return e.values().next().value;const i=new Set;for(const n of e)i.add(this._keyToItem.get(n).key);const s=this.state.scale;let o,r=Number.POSITIVE_INFINITY;for(const[n,a]of this._tilesByScale)if(me(a,l=>i.has(l))){const l=Math.abs(n-s);l<r&&(o=a,r=l)}return this._getClosestTileKey(o,e).id}_getClosestTileKey(e,i){const s=this.tileInfoView,o=this.state.center;let r,n=Number.POSITIVE_INFINITY;for(const a of e)if(i.has(a.id)){s.getTileCoords(Z,a);const l=_e(Z,o);l<n&&(n=l,r=a)}return r}};T([F({constructOnly:!0})],b.prototype,"concurrency",void 0),T([F({constructOnly:!0})],b.prototype,"priority",void 0),T([F({constructOnly:!0})],b.prototype,"process",void 0),T([F({constructOnly:!0})],b.prototype,"scheduler",void 0),T([F()],b.prototype,"state",void 0),T([F({constructOnly:!0})],b.prototype,"tileInfoView",void 0),b=T([he("esri.views.2d.tiling.TileQueue")],b);const ft=b;class Qe{constructor(e,i,s){this.maxSize=e,this._tileInfoView=i,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const i=this._tilePerId.get(e);if(!i)return;const s=i.key.level,o=this._tileKeysPerLevel[s];Q(this._tilePerId,e);for(let r=0;r<o.length;r++)if(o[r].id===e){o.splice(r,1);break}return i.visible=!0,i}add(e){e.visible=!1;const i=e.key,s=i.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);const o=i.level;this._tileKeysPerLevel[o]||(this._tileKeysPerLevel[o]=[]),this._tileKeysPerLevel[o].push(i)}prune(e,i,s){let o=this._tilePerId.size;if(o<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;o>this.maxSize&&r>=0;)r!==e&&(o=this._pruneAroundCenterTile(o,i,s,r)),r--;o>this.maxSize&&(o=this._pruneAroundCenterTile(o,i,s,e))}_pruneAroundCenterTile(e,i,s,o){const r=this._tileKeysPerLevel[o];if(!r||r.length===0)return e;const{size:n,origin:a}=this._tileInfoView.tileInfo,l=s*n[0],h=s*n[1],c=[0,0],f=[0,0];for(r.sort((m,p)=>(c[0]=a.x+l*(m.col+.5),c[1]=a.y-h*(m.row+.5),f[0]=a.x+l*(p.col+.5),f[1]=a.y-h*(p.row+.5),J(c,i)-J(f,i)));r.length>0;){const m=r.pop();if(this._removeTile(m.id),--e===this.maxSize)break}return e}_removeTile(e){const i=this._tilePerId.get(e);this._removedFunc&&i&&this._removedFunc(i),Q(this._tilePerId,e)}}function Q(t,e){t.delete(e)}const C=new L(0,0,0,0),S=new Map,P=[],j=[];let mt=class{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new Qe(e.cacheSize,this.tileInfoView,i=>{this.releaseTile(i)}))}destroy(){this.tileIndex.clear()}update(e){const{resampling:i,tileIndex:s}=this,{scale:o,center:r,resolution:n}=e.state,{minScale:a,maxScale:l}=this.tileInfoView,h=!e.stationary&&o>this._previousScale;if(this._previousScale=o,!i&&(o>a||o<l))return this.tiles.length=0,void this.clear();const c=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!c)return this.tiles.length=0,void this.clear();const{spans:f,lodInfo:m}=c,{level:p}=m;this.tiles.length=0,s.forEach(u=>u.visible=!0);let _=0,y=0;if(f.length>0)for(const{row:u,colFrom:d,colTo:V}of f)for(let B=d;B<=V;B++){_++;const w=C.set(p,u,m.normalizeCol(B),m.getWorldForColumn(B)).id;let I=s.get(w);if(I)I.isReady?(S.set(w,I),y++):h||this._addParentTile(w,S);else{if(this._tileCache?.has(w)){if(I=this._tileCache.pop(w),this.tileIndex.set(w,I),I.isReady){S.set(w,I),y++;continue}}else I=this.acquireTile(C),this.tileIndex.set(w,I);h||this._addParentTile(w,S)}}const x=y===_;for(const[u,d]of s){if(S.has(u))continue;C.set(u);const V=this.tileInfoView.intersects(c,C),B=this.cachePolicy==="purge"?C.level!==p:C.level>p;!V||!h&&x?!B&&V||P.push(d):d.isReady?B&&this.cachePolicy==="purge"&&this._hasReadyAncestor(C,p)?P.push(d):j.push(d):B&&P.push(d)}for(const u of j)u.isReady&&S.set(u.key.id,u);for(const u of P)this._tileCache?this._tileCache.add(u):this.releaseTile(u),s.delete(u.key.id);for(const u of S.values())this.tiles.push(u);for(const u of s.values())S.has(u.key.id)||(u.visible=!1);this._tileCache?.prune(p,r,n),q.pool.release(c),j.length=0,P.length=0,S.clear()}clear(){const{tileIndex:e}=this;for(const i of e.values())this.releaseTile(i);e.clear()}refresh(e){for(const i of this.tileIndex.values())e(i);this._tileCache?.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,i){let s=e,o=null;for(;s=this.tileInfoView.getTileParentId(s),s;)if(this.tileIndex.has(s)){if(o=this.tileIndex.get(s),o?.isReady){i.has(o.key.id)||i.set(o.key.id,o);break}}else if(this._tileCache?.has(s)&&(o=this._tileCache.pop(s),this.tileIndex.set(s,o),o?.isReady)){i.has(o.key.id)||i.set(o.key.id,o);break}}_hasReadyAncestor(e,i){const s=D();this.tileInfoView.getTileBounds(s,e,!0);for(const o of this.tileIndex.values())if(o.isReady&&o.key.level>=i&&o.key.level<e.level){const r=D();if(this.tileInfoView.getTileBounds(r,o.key,!0),de(r,s))return!0}return!1}};function W(t,e){if(!(this instanceof W))return new W(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&(typeof e=="function"?this.toBBox=e:this._initFormat(e)),this.clear()}function Ge(t,e,i){if(!i)return e.indexOf(t);for(var s=0;s<e.length;s++)if(i(t,e[s]))return s;return-1}function Y(t,e){k(t,0,t.children.length,e,t)}function k(t,e,i,s,o){o||(o=X(null)),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(var r,n=e;n<i;n++)r=t.children[n],R(o,t.leaf?s(r):r);return o}function R(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function G(t,e){return t.minX-e.minX}function H(t,e){return t.minY-e.minY}function K(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function O(t){return t.maxX-t.minX+(t.maxY-t.minY)}function He(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function Ue(t,e){var i=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),o=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,o-i)*Math.max(0,r-s)}function N(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function A(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function X(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function U(t,e,i,s,o){for(var r,n=[e,i];n.length;)(i=n.pop())-(e=n.pop())<=s||(r=e+Math.ceil((i-e)/s/2)*s,xe(t,r,e,i,o),n.push(e,r,r,i))}W.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],s=this.toBBox;if(!A(t,e))return i;for(var o,r,n,a,l=[];e;){for(o=0,r=e.children.length;o<r;o++)n=e.children[o],A(t,a=e.leaf?s(n):n)&&(e.leaf?i.push(n):N(t,a)?this._all(n,i):l.push(n));e=l.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!A(t,e))return!1;for(var s,o,r,n,a=[];e;){for(s=0,o=e.children.length;s<o;s++)if(r=e.children[s],A(t,n=e.leaf?i(r):r)){if(e.leaf||N(t,n))return!0;a.push(r)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var s=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===s.height)this._splitRoot(this.data,s);else{if(this.data.height<s.height){var o=this.data;this.data=s,s=o}this._insert(s,this.data.height-s.height-1,!0)}else this.data=s;return this},insert:function(t){return t!=null&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=X([]),this},remove:function(t,e){if(t==null)return this;for(var i,s,o,r,n=this.data,a=this.toBBox(t),l=[],h=[];n||l.length;){if(n||(n=l.pop(),s=l[l.length-1],i=h.pop(),r=!0),n.leaf&&(o=Ge(t,n.children,e))!==-1)return n.children.splice(o,1),l.push(n),this._condense(l),this;r||n.leaf||!N(n,a)?s?(i++,n=s.children[i],r=!1):n=null:(l.push(n),h.push(i),i=0,s=n,n=n.children[0])}return this},toBBox:function(t){return t},compareMinX:G,compareMinY:H,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,s){var o,r=i-e+1,n=this._maxEntries;if(r<=n)return Y(o=X(t.slice(e,i+1)),this.toBBox),o;s||(s=Math.ceil(Math.log(r)/Math.log(n)),n=Math.ceil(r/Math.pow(n,s-1))),(o=X([])).leaf=!1,o.height=s;var a,l,h,c,f=Math.ceil(r/n),m=f*Math.ceil(Math.sqrt(n));for(U(t,e,i,m,this.compareMinX),a=e;a<=i;a+=m)for(U(t,a,h=Math.min(a+m-1,i),f,this.compareMinY),l=a;l<=h;l+=f)c=Math.min(l+f-1,h),o.children.push(this._build(t,l,c,s-1));return Y(o,this.toBBox),o},_chooseSubtree:function(t,e,i,s){for(var o,r,n,a,l,h,c,f;s.push(e),!e.leaf&&s.length-1!==i;){for(c=f=1/0,o=0,r=e.children.length;o<r;o++)l=K(n=e.children[o]),(h=He(t,n)-l)<f?(f=h,c=l<c?l:c,a=n):h===f&&l<c&&(c=l,a=n);e=a||e.children[0]}return e},_insert:function(t,e,i){var s=this.toBBox,o=i?t:s(t),r=[],n=this._chooseSubtree(o,this.data,e,r);for(n.children.push(t),R(n,o);e>=0&&r[e].children.length>this._maxEntries;)this._split(r,e),e--;this._adjustParentBBoxes(o,r,e)},_split:function(t,e){var i=t[e],s=i.children.length,o=this._minEntries;this._chooseSplitAxis(i,o,s);var r=this._chooseSplitIndex(i,o,s),n=X(i.children.splice(r,i.children.length-r));n.height=i.height,n.leaf=i.leaf,Y(i,this.toBBox),Y(n,this.toBBox),e?t[e-1].children.push(n):this._splitRoot(i,n)},_splitRoot:function(t,e){this.data=X([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Y(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var s,o,r,n,a,l,h,c;for(l=h=1/0,s=e;s<=i-e;s++)n=Ue(o=k(t,0,s,this.toBBox),r=k(t,s,i,this.toBBox)),a=K(o)+K(r),n<l?(l=n,c=s,h=a<h?a:h):n===l&&a<h&&(h=a,c=s);return c},_chooseSplitAxis:function(t,e,i){var s=t.leaf?this.compareMinX:G,o=t.leaf?this.compareMinY:H;this._allDistMargin(t,e,i,s)<this._allDistMargin(t,e,i,o)&&t.children.sort(s)},_allDistMargin:function(t,e,i,s){t.children.sort(s);var o,r,n=this.toBBox,a=k(t,0,e,n),l=k(t,i-e,i,n),h=O(a)+O(l);for(o=e;o<i-e;o++)r=t.children[o],R(a,t.leaf?n(r):r),h+=O(a);for(o=i-e-1;o>=e;o--)r=t.children[o],R(l,t.leaf?n(r):r),h+=O(l);return h},_adjustParentBBoxes:function(t,e,i){for(var s=i;s>=0;s--)R(e[s],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)t[i].children.length===0?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():Y(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class ne{constructor(e,i){this.key=new L(0,0,0,0),this.bounds=D(),this.objectIds=new Set,this.key.set(i);const s=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.level=s.level,this.scale=s.scale,this.minScale=e.zoomToScale(s.level-1),this.maxScale=e.zoomToScale(s.level+1)}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return ge.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(e){return{$view:{scale:this.scale,timeZone:e}}}createChildTiles(){const e=this.key.getChildKeys(),i=pe.acquire();for(let s=0;s<e.length;s++)i[s]=new ne(this.tileInfoView,e[s]);return i}getQuantizationParameters(){return ve.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{Ce as M,$e as a,we as b,Be as c,Ie as d,te as e,Te as f,ne as g,ht as h,W as i,Ne as j,ze as k,Fe as l,qe as n,ft as p,mt as r,q as s,Se as u};
