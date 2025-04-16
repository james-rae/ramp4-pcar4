import{e as we}from"./common-CYWrYyJl.js";import{bR as $,aJ as Me,l as G,a as Ie,w as Se,L as be,u as H,A as Be,S as Te,x as B,z as F,K as Ce,aL as Fe,Q as ze,ax as ke,jl as Ye,c1 as N,hk as Pe,d_ as Xe,jm as Re}from"./main-DZMdXZ8-.js";import{e as P}from"./TileKey-0fr9RTWT.js";import{m as qe,b as U}from"./vec2-BnynUbeJ.js";import{s as Le}from"./Queue-CZm83zvB.js";import{s as j}from"./ReactiveMap-MDzK9KKI.js";import{r as Ae}from"./signal-D9S3MpmG.js";import{t as Oe}from"./quickselect-DHTstthl.js";import{a as Ve}from"./Query-Cch4zrNj.js";function Ee(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ee(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function te(t,e,i,s,r,o,n){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=o,t[5]=n,t}function ie(t,e){const i=e[0],s=e[1],r=e[2],o=e[3],n=e[4],l=e[5];let a=i*o-s*r;return a?(a=1/a,t[0]=o*a,t[1]=-s*a,t[2]=-r*a,t[3]=i*a,t[4]=(r*l-o*n)*a,t[5]=(s*n-i*l)*a,t):null}function Ne(t){return t[0]*t[3]-t[1]*t[2]}function K(t,e,i){const s=e[0],r=e[1],o=e[2],n=e[3],l=e[4],a=e[5],h=i[0],c=i[1],f=i[2],d=i[3],g=i[4],m=i[5];return t[0]=s*h+o*c,t[1]=r*h+n*c,t[2]=s*f+o*d,t[3]=r*f+n*d,t[4]=s*g+o*m+l,t[5]=r*g+n*m+a,t}function se(t,e,i){const s=e[0],r=e[1],o=e[2],n=e[3],l=e[4],a=e[5],h=Math.sin(i),c=Math.cos(i);return t[0]=s*c+o*h,t[1]=r*c+n*h,t[2]=s*-h+o*c,t[3]=r*-h+n*c,t[4]=l,t[5]=a,t}function re(t,e,i){const s=e[0],r=e[1],o=e[2],n=e[3],l=e[4],a=e[5],h=i[0],c=i[1];return t[0]=s*h,t[1]=r*h,t[2]=o*c,t[3]=n*c,t[4]=l,t[5]=a,t}function oe(t,e,i){const s=e[0],r=e[1],o=e[2],n=e[3],l=e[4],a=e[5],h=i[0],c=i[1];return t[0]=s,t[1]=r,t[2]=o,t[3]=n,t[4]=s*h+o*c+l,t[5]=r*h+n*c+a,t}function ne(t,e){const i=Math.sin(e),s=Math.cos(e);return t[0]=s,t[1]=i,t[2]=-i,t[3]=s,t[4]=0,t[5]=0,t}function le(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function ae(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function je(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function Ke(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)}function We(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t}function he(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t}function De(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t}function Je(t,e,i,s){return t[0]=e[0]+i[0]*s,t[1]=e[1]+i[1]*s,t[2]=e[2]+i[2]*s,t[3]=e[3]+i[3]*s,t[4]=e[4]+i[4]*s,t[5]=e[5]+i[5]*s,t}function Ze(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function Qe(t,e){const i=t[0],s=t[1],r=t[2],o=t[3],n=t[4],l=t[5],a=e[0],h=e[1],c=e[2],f=e[3],d=e[4],g=e[5],m=we();return Math.abs(i-a)<=m*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(s-h)<=m*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(r-c)<=m*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(o-f)<=m*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(n-d)<=m*Math.max(1,Math.abs(n),Math.abs(d))&&Math.abs(l-g)<=m*Math.max(1,Math.abs(l),Math.abs(g))}const $e=K,Ge=he;Object.freeze(Object.defineProperty({__proto__:null,add:We,copy:Ee,determinant:Ne,equals:Qe,exactEquals:Ze,frob:Ke,fromRotation:ne,fromScaling:le,fromTranslation:ae,identity:ee,invert:ie,mul:$e,multiply:K,multiplyScalar:De,multiplyScalarAndAdd:Je,rotate:se,scale:re,set:te,str:je,sub:Ge,subtract:he,translate:oe},Symbol.toStringTag,{value:"Module"}));function ce(){const t=new Float32Array(6);return t[0]=1,t[3]=1,t}function He(t){const e=new Float32Array(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function Ue(t,e,i,s,r,o){const n=new Float32Array(6);return n[0]=t,n[1]=e,n[2]=i,n[3]=s,n[4]=r,n[5]=o,n}function et(t,e){return new Float32Array(t,e,6)}function ue(t,e,i,s){const r=e[s],o=e[s+1];t[s]=i[0]*r+i[2]*o+i[4],t[s+1]=i[1]*r+i[3]*o+i[5]}function fe(t,e,i,s=0,r=0,o=2){const n=r||e.length/o;for(let l=s;l<n;l++)ue(t,e,i,l*o)}Object.freeze(Object.defineProperty({__proto__:null,clone:He,create:ce,createView:et,fromValues:Ue,transform:ue,transformMany:fe},Symbol.toStringTag,{value:"Module"}));function z(t,e){return[t,e]}function T(t,e,i){return t[0]=e,t[1]=i,t}function tt(t,e,i,s,r){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t}const v=new P("0/0/0/0");let it=class xe{static create(e,i,s=null){const r=$(e.spatialReference),o=i.origin||z(e.origin.x,e.origin.y),n=z(e.size[0]*i.resolution,e.size[1]*i.resolution),l=z(-1/0,-1/0),a=z(1/0,1/0),h=z(1/0,1/0);s!=null&&(T(l,Math.max(0,Math.floor((s.xmin-o[0])/n[0])),Math.max(0,Math.floor((o[1]-s.ymax)/n[1]))),T(a,Math.max(0,Math.floor((s.xmax-o[0])/n[0])),Math.max(0,Math.floor((o[1]-s.ymin)/n[1]))),T(h,a[0]-l[0]+1,a[1]-l[1]+1));const{cols:c,rows:f}=i;let d,g,m,y;return!s&&c&&f&&(T(l,c[0],f[0]),T(a,c[1],f[1]),T(h,c[1]-c[0]+1,f[1]-f[0]+1)),e.isWrappable?(d=z(Math.ceil(Math.round((r.valid[1]-r.valid[0])/i.resolution)/e.size[0]),h[1]),g=!0,m=r.origin,y=r.valid):(d=h,g=!1),new xe(i.level,i.resolution,i.scale,o,l,a,h,n,d,g,m,y)}constructor(e,i,s,r,o,n,l,a,h,c,f,d){this.level=e,this.resolution=i,this.scale=s,this.origin=r,this.first=o,this.last=n,this.size=l,this.norm=a,this.worldSize=h,this.wrap=c,this._spatialReferenceOrigin=f,this._spatialReferenceValid=d}normalizeCol(e){if(!this.wrap)return e;const i=this.worldSize[0];return e<0?i-1-Math.abs((e+1)%i):e%i}normalizeKey(e){if(!this.wrap)return;const i=this.worldSize[0],s=e.col;s<0?(e.col=s+i,e.world-=1):s>=i&&(e.col=s-i,e.world+=1)}denormalizeCol(e,i){return this.wrap?this.worldSize[0]*i+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){const i=this.origin[0]+e*this.norm[0],s=this._spatialReferenceOrigin,r=this._spatialReferenceValid;return this.wrap&&s&&r?i===s[0]?r[0]:this.origin[0]===s[0]&&e===this.worldSize[0]?r[1]:i:i}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,i,s=!1){v.set(i);const r=s?v.col:this.denormalizeCol(v.col,v.world),o=v.row;return tt(e,this.getXForColumn(r),this.getYForRow(o+1),this.getXForColumn(r+1),this.getYForRow(o)),e}getTileCoords(e,i,s=!1){v.set(i);const r=s?v.col:this.denormalizeCol(v.col,v.world);return Array.isArray(e)?T(e,this.getXForColumn(r),this.getYForRow(v.row)):(e.x=this.getXForColumn(r),e.y=this.getYForRow(v.row)),e}},X=class{constructor(){this.spans=[]}acquire(t){this.lodInfo=t}release(){this.lodInfo=null,this.spans.length=0}*keys(){const t=this.lodInfo;for(const{row:e,colFrom:i,colTo:s}of this.spans)for(let r=i;r<=s;r++){const o=t.getWorldForColumn(r);yield new P(t.level,e,t.normalizeCol(r),o)}}forEach(t,e){const{spans:i,lodInfo:s}=this,{level:r}=s;if(i.length!==0)for(const{row:o,colFrom:n,colTo:l}of i)for(let a=n;a<=l;a++)t.call(e,r,o,s.normalizeCol(a),s.getWorldForColumn(a))}};X.pool=new Me(X);let W=class{constructor(t,e,i){this.row=t,this.colFrom=e,this.colTo=i}};const _=new P("0/0/0/0");let st=class ve{static create(e,i){e[1]>i[1]&&([e,i]=[i,e]);const[s,r]=e,[o,n]=i,l=o-s,a=n-r,h=a!==0?l/a:0,c=(Math.ceil(r)-r)*h,f=(Math.floor(r)-r)*h;return new ve(s,Math.floor(r),Math.ceil(n),h,l<0?c:f,l<0?f:c,l<0?o:s,l<0?s:o)}constructor(e,i,s,r,o,n,l,a){this.x=e,this.ymin=i,this.ymax=s,this.invM=r,this.leftAdjust=o,this.rightAdjust=n,this.leftBound=l,this.rightBound=a}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const x=[[0,0],[0,0],[0,0],[0,0]],rt=1e-6;let ot=class{constructor(t,e=null,i=t.lods[0].level,s=t.lods[t.lods.length-1].level){this.tileInfo=t,this.fullExtent=e,this.scales=[],this._infoByScale={},this._infoByLevel={};const r=t.lods.filter(n=>n.level>=i&&n.level<=s);this.minScale=r[0].scale,this.maxScale=r[r.length-1].scale;const o=this._lodInfos=r.map(n=>it.create(t,n,e));r.forEach((n,l)=>{this._infoByLevel[n.level]=o[l],this._infoByScale[n.scale]=o[l],this.scales[l]=n.scale},this),this._wrap=t.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(t){return this._infoByLevel[typeof t=="number"?t:t.level]}getTileBounds(t,e,i=!1){_.set(e);const s=this._infoByLevel[_.level];return s?s.getTileBounds(t,_,i):t}getTileCoords(t,e,i=!1){_.set(e);const s=this._infoByLevel[_.level];return s?s.getTileCoords(t,_,i):t}getTileCoverage(t,e=192,i=!0,s="closest"){if(!i&&(t.scale>this.minScale||t.scale<this.maxScale))return null;const r=s==="closest"?this.getClosestInfoForScale(t.scale):this.getSmallestInfoForScale(t.scale),o=X.pool.acquire(r),n=this._wrap;let l,a,h,c=1/0,f=-1/0;const d=o.spans;x[0][0]=x[0][1]=x[1][1]=x[3][0]=-e,x[1][0]=x[2][0]=t.size[0]+e,x[2][1]=x[3][1]=t.size[1]+e;for(const u of x)t.toMap(u,u),u[0]=r.getColumnForX(u[0]),u[1]=r.getRowForY(u[1]);const g=[];let m=3;for(let u=0;u<4;u++){if(x[u][1]===x[m][1]){m=u;continue}const p=st.create(x[u],x[m]);c=Math.min(p.ymin,c),f=Math.max(p.ymax,f),g[p.ymin]===void 0&&(g[p.ymin]=[]),g[p.ymin].push(p),m=u}if(c==null||f==null||f-c>100)return null;let y=[];for(l=c;l<f;){g[l]!=null&&(y=y.concat(g[l])),a=1/0,h=-1/0;for(let u=y.length-1;u>=0;u--){const p=y[u];a=Math.min(a,p.getLeftCol()),h=Math.max(h,p.getRightCol())}if(a=Math.floor(a),h=Math.floor(h),l>=r.first[1]&&l<=r.last[1])if(n)if(r.size[0]<r.worldSize[0]){const u=Math.floor(h/r.worldSize[0]);for(let p=Math.floor(a/r.worldSize[0]);p<=u;p++)d.push(new W(l,Math.max(r.getFirstColumnForWorld(p),a),Math.min(r.getLastColumnForWorld(p),h)))}else d.push(new W(l,a,h));else a>r.last[0]||h<r.first[0]||(a=Math.max(a,r.first[0]),h=Math.min(h,r.last[0]),d.push(new W(l,a,h)));l+=1;for(let u=y.length-1;u>=0;u--){const p=y[u];p.ymax>=l?p.incrRow():y.splice(u,1)}}return o}getTileParentId(t){_.set(t);const e=this._infoByLevel[_.level],i=this._lodInfos.indexOf(e)-1;return i<0?null:(this._getTileIdAtLOD(_,this._lodInfos[i],_),_.id)}getTileResolution(t){const e=this._infoByLevel[typeof t=="object"?t.level:t];return e?e.resolution:-1}getTileScale(t){const e=this._infoByLevel[t.level];return e?e.scale:-1}intersects(t,e){_.set(e);const i=this._infoByLevel[_.level],s=t.lodInfo;if(s.resolution>i.resolution){this._getTileIdAtLOD(_,s,_);const o=s.denormalizeCol(_.col,_.world);for(const n of t.spans)if(n.row===_.row&&n.colFrom<=o&&n.colTo>=o)return!0}if(s.resolution<i.resolution){const[o,n,l,a]=t.spans.reduce((m,y)=>(m[0]=Math.min(m[0],y.row),m[1]=Math.max(m[1],y.row),m[2]=Math.min(m[2],y.colFrom),m[3]=Math.max(m[3],y.colTo),m),[1/0,-1/0,1/0,-1/0]),h=i.denormalizeCol(_.col,_.world),c=s.getColumnForX(i.getXForColumn(h)),f=s.getRowForY(i.getYForRow(_.row)),d=s.getColumnForX(i.getXForColumn(h+1))-1,g=s.getRowForY(i.getYForRow(_.row+1))-1;return!(c>a||d<l||f>n||g<o)}const r=s.denormalizeCol(_.col,_.world);return t.spans.some(o=>o.row===_.row&&o.colFrom<=r&&o.colTo>=r)}normalizeBounds(t,e,i){if(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._wrap){const s=$(this.tileInfo.spatialReference),r=-i*(s.valid[1]-s.valid[0]);t[0]+=r,t[2]+=r}return t}getSmallestInfoForScale(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t];if(t>e[0])return this._infoByScale[e[0]];for(let i=1;i<e.length-1;i++)if(t>e[i]+rt)return this._infoByScale[e[i-1]];return this._infoByScale[e[e.length-1]]}getClosestInfoForScale(t){const e=this.scales;return this._infoByScale[t]||(t=e.reduce((i,s)=>Math.abs(s-t)<Math.abs(i-t)?s:i,e[0])),this._infoByScale[t]}scaleToLevel(t){const e=this.scales;if(this._infoByScale[t])return this._infoByScale[t].level;for(let i=e.length-1;i>=0;i--)if(t<e[i])return i===e.length-1?this._infoByScale[e[e.length-1]].level:this._infoByScale[e[i]].level+(e[i]-t)/(e[i]-e[i+1]);return this._infoByScale[e[0]].level}scaleToZoom(t){return this.tileInfo.scaleToZoom(t)}zoomToScale(t){return this.tileInfo.zoomToScale(t)}_getTileIdAtLOD(t,e,i){const s=this._infoByLevel[i.level];return t.set(i),e.resolution<s.resolution?null:(e.resolution===s.resolution||(t.level=e.level,t.col=Math.floor(i.col*s.resolution/e.resolution+.01),t.row=Math.floor(i.row*s.resolution/e.resolution+.01)),t)}},nt=class{constructor(t,e){this.item=t,this.controller=e,this.promise=null}};class lt{constructor(e){this._schedule=null,this._task=null,this._deferreds=new j,this._controllers=new j,this._processingItems=new j,this._pausedSignal=Ae(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new Le(e.peeker),this.process=e.process;const i=e.scheduler;e.priority&&i&&(this._task=i.registerTask(e.priority,this))}destroy(){this.clear(),this._schedule=G(this._schedule),this._task=G(this._task)}get updating(){return!!this._task?.updating||this.running}get length(){return this._processingItems.size+this._queue.length}abort(e){const i=this._controllers.get(e);i&&i.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach(i=>e.push(i)),this._controllers.clear(),e.forEach(i=>i.abort()),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach((i,s)=>e(s))}get(e){const i=this._deferreds.get(e);return i?i.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,i){const s=this.get(e);if(s)return s;const r=new AbortController;let o=null;i&&(o=Ie(i,()=>r.abort()));const n=()=>{const c=this._processingItems.get(e);c&&c.controller.abort(),l(),h.reject(H())},l=()=>{a.remove(),o?.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},a=Se(r.signal,n),h=be();return this._deferreds.set(e,h),this._controllers.set(e,r),h.promise.then(l,l),this._queue.push(e),this._scheduleNext(),h.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject(H()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const i of e)this._queue.push(i.item),i.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._task||this._pausedSignal.value||this._schedule||(this._schedule=Be(()=>{this._schedule=null,this._next()}))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,i){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(i))}_processError(e,i){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(i))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(e==null)return;let i;const s=new AbortController,r=new nt(e,s);this._processingItems.set(e,r);try{i=this.process(e,s.signal)}catch(o){this._processError(r,o)}Te(i)?(r.promise=i,i.then(o=>this._processResult(r,o),o=>this._processError(r,o))):this._processResult(r,i)}get test(){}}const de=[0,0];let I=class extends Fe{constructor(t){super(t),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:t,process:e,scheduler:i,priority:s}=this;this._queue=new lt({concurrency:t,scheduler:i,priority:s,process:(r,o)=>{const n=this._keyToItem.get(r);return e(n,{signal:o})},peeker:r=>this._peek(r)})}destroy(){this.clear(),this._queue=ze(this._queue)}get length(){return this._queue?this._queue.length:0}abort(t){const e=typeof t=="string"?t:t.id;this._queue.abort(e)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(t){return typeof t=="string"?this._keyToItem.has(t):this._keyToItem.has(t.id)}pause(){this._queue.pause()}push(t){const e=t.key.id;if(this._queue.has(e))return this._queue.get(e);const i=this._queue.push(e),s=this.tileInfoView.getTileScale(t.key),r=ke(this._tilesByScale,s,()=>new Set),o=()=>{r.delete(t.key),r.size===0&&this._tilesByScale.delete(s),this._keyToItem.delete(e)};return r.add(t.key),this._keyToItem.set(e,t),i.then(o,o),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(t){if(!this.state)return t.values().next().value;const e=new Set;for(const o of t)e.add(this._keyToItem.get(o).key);const i=this.state.scale;let s,r=Number.POSITIVE_INFINITY;for(const[o,n]of this._tilesByScale)if(Ye(n,l=>e.has(l))){const l=Math.abs(o-i);l<r&&(s=n,r=l)}return this._getClosestTileKey(s,t).id}_getClosestTileKey(t,e){const i=this.tileInfoView,s=this.state.center;let r,o=Number.POSITIVE_INFINITY;for(const n of t)if(e.has(n.id)){i.getTileCoords(de,n);const l=qe(de,s);l<o&&(o=l,r=n)}return r}};B([F({constructOnly:!0})],I.prototype,"concurrency",void 0),B([F({constructOnly:!0})],I.prototype,"priority",void 0),B([F({constructOnly:!0})],I.prototype,"process",void 0),B([F({constructOnly:!0})],I.prototype,"scheduler",void 0),B([F()],I.prototype,"state",void 0),B([F({constructOnly:!0})],I.prototype,"tileInfoView",void 0),I=B([Ce("esri.views.2d.tiling.TileQueue")],I);const at=I;class ht{constructor(e,i,s){this.maxSize=e,this._tileInfoView=i,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const i=this._tilePerId.get(e);if(!i)return;const s=i.key.level,r=this._tileKeysPerLevel[s];me(this._tilePerId,e);for(let o=0;o<r.length;o++)if(r[o].id===e){r.splice(o,1);break}return i.visible=!0,i}add(e){e.visible=!1;const i=e.key,s=i.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);const r=i.level;this._tileKeysPerLevel[r]||(this._tileKeysPerLevel[r]=[]),this._tileKeysPerLevel[r].push(i)}prune(e,i,s){let r=this._tilePerId.size;if(r<=this.maxSize)return;let o=this._tileKeysPerLevel.length-1;for(;r>this.maxSize&&o>=0;)o!==e&&(r=this._pruneAroundCenterTile(r,i,s,o)),o--;r>this.maxSize&&(r=this._pruneAroundCenterTile(r,i,s,e))}_pruneAroundCenterTile(e,i,s,r){const o=this._tileKeysPerLevel[r];if(!o||o.length===0)return e;const{size:n,origin:l}=this._tileInfoView.tileInfo,a=s*n[0],h=s*n[1],c=[0,0],f=[0,0];for(o.sort((d,g)=>(c[0]=l.x+a*(d.col+.5),c[1]=l.y-h*(d.row+.5),f[0]=l.x+a*(g.col+.5),f[1]=l.y-h*(g.row+.5),U(c,i)-U(f,i)));o.length>0;){const d=o.pop();if(this._removeTile(d.id),--e===this.maxSize)break}return e}_removeTile(e){const i=this._tilePerId.get(e);this._removedFunc&&i&&this._removedFunc(i),me(this._tilePerId,e)}}function me(t,e){t.delete(e)}const C=new P(0,0,0,0),S=new Map,R=[],D=[];let ct=class{constructor(t){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=t.acquireTile,this.releaseTile=t.releaseTile,this.tileInfoView=t.tileInfoView,t.resampling!=null&&(this.resampling=t.resampling),t.cachePolicy&&(this.cachePolicy=t.cachePolicy),t.coveragePolicy&&(this.coveragePolicy=t.coveragePolicy),t.buffer!=null&&(this.buffer=t.buffer),t.cacheSize&&(this._tileCache=new ht(t.cacheSize,this.tileInfoView,e=>{this.releaseTile(e)}))}destroy(){this.tileIndex.clear()}update(t){const{resampling:e,tileIndex:i}=this,{scale:s,center:r,resolution:o}=t.state,{minScale:n,maxScale:l}=this.tileInfoView,a=!t.stationary&&s>this._previousScale;if(this._previousScale=s,!e&&(s>n||s<l))return this.tiles.length=0,void this.clear();const h=this.tileInfoView.getTileCoverage(t.state,this.buffer,this.resampling,this.coveragePolicy);if(!h)return this.tiles.length=0,void this.clear();const{spans:c,lodInfo:f}=h,{level:d}=f;this.tiles.length=0,i.forEach(u=>u.visible=!0);let g=0,m=0;if(c.length>0)for(const{row:u,colFrom:p,colTo:A}of c)for(let b=p;b<=A;b++){g++;const w=C.set(d,u,f.normalizeCol(b),f.getWorldForColumn(b)).id;let M=i.get(w);if(M)M.isReady?(S.set(w,M),m++):a||this._addParentTile(w,S);else{if(this._tileCache?.has(w)){if(M=this._tileCache.pop(w),this.tileIndex.set(w,M),M.isReady){S.set(w,M),m++;continue}}else M=this.acquireTile(C),this.tileIndex.set(w,M);a||this._addParentTile(w,S)}}const y=m===g;for(const[u,p]of i){if(S.has(u))continue;C.set(u);const A=this.tileInfoView.intersects(h,C),b=this.cachePolicy==="purge"?C.level!==d:C.level>d;!A||!a&&y?!b&&A||R.push(p):p.isReady?b&&this.cachePolicy==="purge"&&this._hasReadyAncestor(C,d)?R.push(p):D.push(p):b&&R.push(p)}for(const u of D)u.isReady&&S.set(u.key.id,u);for(const u of R)this._tileCache?this._tileCache.add(u):this.releaseTile(u),i.delete(u.key.id);for(const u of S.values())this.tiles.push(u);for(const u of i.values())S.has(u.key.id)||(u.visible=!1);this._tileCache?.prune(d,r,o),X.pool.release(h),D.length=0,R.length=0,S.clear()}clear(){const{tileIndex:t}=this;for(const e of t.values())this.releaseTile(e);t.clear()}refresh(t){for(const e of this.tileIndex.values())t(e);this._tileCache?.clear()}updateCacheSize(t){this._tileCache&&(this._tileCache.maxSize=t)}_addParentTile(t,e){let i=t,s=null;for(;i=this.tileInfoView.getTileParentId(i),i;)if(this.tileIndex.has(i)){if(s=this.tileIndex.get(i),s?.isReady){e.has(s.key.id)||e.set(s.key.id,s);break}}else if(this._tileCache?.has(i)&&(s=this._tileCache.pop(i),this.tileIndex.set(i,s),s?.isReady)){e.has(s.key.id)||e.set(s.key.id,s);break}}_hasReadyAncestor(t,e){const i=N();this.tileInfoView.getTileBounds(i,t,!0);for(const s of this.tileIndex.values())if(s.isReady&&s.key.level>=e&&s.key.level<t.level){const r=N();if(this.tileInfoView.getTileBounds(r,s.key,!0),Pe(r,i))return!0}return!1}};function O(t,e){if(!(this instanceof O))return new O(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&(typeof e=="function"?this.toBBox=e:this._initFormat(e)),this.clear()}function ut(t,e,i){if(!i)return e.indexOf(t);for(var s=0;s<e.length;s++)if(i(t,e[s]))return s;return-1}function k(t,e){q(t,0,t.children.length,e,t)}function q(t,e,i,s,r){r||(r=Y(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,n=e;n<i;n++)o=t.children[n],L(r,t.leaf?s(o):o);return r}function L(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function pe(t,e){return t.minX-e.minX}function _e(t,e){return t.minY-e.minY}function J(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function V(t){return t.maxX-t.minX+(t.maxY-t.minY)}function ft(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function dt(t,e){var i=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,r-i)*Math.max(0,o-s)}function Z(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function E(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Y(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function ge(t,e,i,s,r){for(var o,n=[e,i];n.length;)(i=n.pop())-(e=n.pop())<=s||(o=e+Math.ceil((i-e)/s/2)*s,Oe(t,o,e,i,r),n.push(e,o,o,i))}O.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],s=this.toBBox;if(!E(t,e))return i;for(var r,o,n,l,a=[];e;){for(r=0,o=e.children.length;r<o;r++)n=e.children[r],E(t,l=e.leaf?s(n):n)&&(e.leaf?i.push(n):Z(t,l)?this._all(n,i):a.push(n));e=a.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!E(t,e))return!1;for(var s,r,o,n,l=[];e;){for(s=0,r=e.children.length;s<r;s++)if(o=e.children[s],E(t,n=e.leaf?i(o):o)){if(e.leaf||Z(t,n))return!0;l.push(o)}e=l.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var s=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===s.height)this._splitRoot(this.data,s);else{if(this.data.height<s.height){var r=this.data;this.data=s,s=r}this._insert(s,this.data.height-s.height-1,!0)}else this.data=s;return this},insert:function(t){return t!=null&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Y([]),this},remove:function(t,e){if(t==null)return this;for(var i,s,r,o,n=this.data,l=this.toBBox(t),a=[],h=[];n||a.length;){if(n||(n=a.pop(),s=a[a.length-1],i=h.pop(),o=!0),n.leaf&&(r=ut(t,n.children,e))!==-1)return n.children.splice(r,1),a.push(n),this._condense(a),this;o||n.leaf||!Z(n,l)?s?(i++,n=s.children[i],o=!1):n=null:(a.push(n),h.push(i),i=0,s=n,n=n.children[0])}return this},toBBox:function(t){return t},compareMinX:pe,compareMinY:_e,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,s){var r,o=i-e+1,n=this._maxEntries;if(o<=n)return k(r=Y(t.slice(e,i+1)),this.toBBox),r;s||(s=Math.ceil(Math.log(o)/Math.log(n)),n=Math.ceil(o/Math.pow(n,s-1))),(r=Y([])).leaf=!1,r.height=s;var l,a,h,c,f=Math.ceil(o/n),d=f*Math.ceil(Math.sqrt(n));for(ge(t,e,i,d,this.compareMinX),l=e;l<=i;l+=d)for(ge(t,l,h=Math.min(l+d-1,i),f,this.compareMinY),a=l;a<=h;a+=f)c=Math.min(a+f-1,h),r.children.push(this._build(t,a,c,s-1));return k(r,this.toBBox),r},_chooseSubtree:function(t,e,i,s){for(var r,o,n,l,a,h,c,f;s.push(e),!e.leaf&&s.length-1!==i;){for(c=f=1/0,r=0,o=e.children.length;r<o;r++)a=J(n=e.children[r]),(h=ft(t,n)-a)<f?(f=h,c=a<c?a:c,l=n):h===f&&a<c&&(c=a,l=n);e=l||e.children[0]}return e},_insert:function(t,e,i){var s=this.toBBox,r=i?t:s(t),o=[],n=this._chooseSubtree(r,this.data,e,o);for(n.children.push(t),L(n,r);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(r,o,e)},_split:function(t,e){var i=t[e],s=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,s);var o=this._chooseSplitIndex(i,r,s),n=Y(i.children.splice(o,i.children.length-o));n.height=i.height,n.leaf=i.leaf,k(i,this.toBBox),k(n,this.toBBox),e?t[e-1].children.push(n):this._splitRoot(i,n)},_splitRoot:function(t,e){this.data=Y([t,e]),this.data.height=t.height+1,this.data.leaf=!1,k(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var s,r,o,n,l,a,h,c;for(a=h=1/0,s=e;s<=i-e;s++)n=dt(r=q(t,0,s,this.toBBox),o=q(t,s,i,this.toBBox)),l=J(r)+J(o),n<a?(a=n,c=s,h=l<h?l:h):n===a&&l<h&&(h=l,c=s);return c},_chooseSplitAxis:function(t,e,i){var s=t.leaf?this.compareMinX:pe,r=t.leaf?this.compareMinY:_e;this._allDistMargin(t,e,i,s)<this._allDistMargin(t,e,i,r)&&t.children.sort(s)},_allDistMargin:function(t,e,i,s){t.children.sort(s);var r,o,n=this.toBBox,l=q(t,0,e,n),a=q(t,i-e,i,n),h=V(l)+V(a);for(r=e;r<i-e;r++)o=t.children[r],L(l,t.leaf?n(o):o),h+=V(l);for(r=i-e-1;r>=e;r--)o=t.children[r],L(a,t.leaf?n(o):o),h+=V(a);return h},_adjustParentBBoxes:function(t,e,i){for(var s=i;s>=0;s--)L(e[s],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)t[i].children.length===0?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():k(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};function ye(t,{timeZone:e,timeExtent:i}){return{$view:{scale:t,timeZone:e,timeProperties:{currentStart:i?.start,currentEnd:i?.end}}}}class Q{constructor(e,i){this.key=new P(0,0,0,0),this.bounds=N(),this.objectIds=new Set,this.key.set(i);const s=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.level=s.level,this.scale=s.scale,this.minScale=e.zoomToScale(s.level-1),this.maxScale=e.zoomToScale(s.level+1)}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return Xe(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(e){return ye(this.scale,e)}createChildTiles(){const e=this.key.getChildKeys(),i=Re.acquire();for(let s=0;s<e.length;s++)i[s]=new Q(this.tileInfoView,e[s]);return i}getQuantizationParameters(){return Ve.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{ne as M,oe as a,ee as b,se as c,te as d,K as e,re as f,fe as g,ot as h,O as i,ye as j,Q as k,ae as l,le as m,ce as n,at as p,ct as r,X as s,ie as u};
