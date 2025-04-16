import{q as l,u as i,z as m,D as v,C as x}from"./main-CdIhtOSF.js";import{z as d}from"./TileInfo-qYdaiZI8.js";import{e as S}from"./TileInfoTilemapCache-h570iwoZ.js";import{T as I}from"./TilemapCache-DbdW0cS2.js";const g=h=>{let e=class extends h{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(s,t){return t.minLOD!=null&&t.maxLOD!=null?s:0}readMaxScale(s,t){return t.minLOD!=null&&t.maxLOD!=null?s:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(s,t,y){const f=t.capabilities?.includes("Tilemap");let{minLOD:a,maxLOD:n,minScale:p,maxScale:c}=t;if(a==null&&n==null&&p!==0&&c!==0){const r=o=>Math.round(1e4*o)/1e4;p=r(p||t.tileInfo.lods[0].scale),c=r(c||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const o of t.tileInfo.lods){const u=r(o.scale);a=u>=p?o.level:a,n=u>=c?o.level:n}}if(f)return new I({layer:this,minLOD:a,maxLOD:n});if(t.tileInfo){const r=new d;return r.read(t.tileInfo,y),new S(r,a,n)}return null}};return l([i({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),l([i()],e.prototype,"minScale",void 0),l([m("service","minScale")],e.prototype,"readMinScale",null),l([i()],e.prototype,"maxScale",void 0),l([m("service","maxScale")],e.prototype,"readMaxScale",null),l([i({type:v})],e.prototype,"spatialReference",void 0),l([i({readOnly:!0})],e.prototype,"supportsBlankTile",null),l([i({type:d})],e.prototype,"tileInfo",void 0),l([i()],e.prototype,"tilemapCache",void 0),l([m("service","tilemapCache",["capabilities","tileInfo"])],e.prototype,"readTilemapCache",null),l([i()],e.prototype,"version",void 0),e=l([x("esri.layers.mixins.ArcGISCachedService")],e),e};export{g as p};
