import{e as n}from"./LRUCache-CNrAxPgU.js";import{D as a}from"./WhereClause-CAoOX6n8.js";class s{constructor(t,e){this._cache=new n(t),this._invalidCache=new n(e)}get(t,e){const r=`${e?.uid}:${t}`,c=this._cache.get(r);if(c)return c;if(this._invalidCache.get(r)!=null)return null;try{const i=a.create(t,{fieldsIndex:e});return this._cache.put(r,i),i}catch(i){return this._invalidCache.put(r,i),null}}getError(t,e){const r=`${e?.uid}:${t}`;return this._invalidCache.get(r)??null}}export{s as WhereClauseCache};
