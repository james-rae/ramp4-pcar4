import{n as c}from"./CollectionFlattener-CRS4FzLg.js";import{k as o,o as h,A as p,V as u,n as l,cW as f,aO as b}from"./main-C9JjxZR3.js";import{f as m}from"./Layer-C8FfSiMR.js";function g(i){return new c({getCollections:()=>[i.tables,i.layers],getChildrenFunction:s=>{const e=[];return"tables"in s&&e.push(s.tables),"layers"in s&&e.push(s.layers),e},itemFilterFunction:s=>{const e=s.parent;return!!e&&"tables"in e&&e.tables.includes(s)}})}function v(i){for(const s of i.values())s?.destroy();i.clear()}function d(i,s,e){let r,a;if(i)for(let n=0,t=i.length;n<t;n++){if(r=i.at(n),r?.[s]===e)return r;if(r?.type==="group"&&(a=d(r.layers,s,e),a))return a}}const L=i=>{let s=class extends i{constructor(...e){super(...e),this.layers=new u;const r=t=>{t.parent&&"remove"in t.parent&&t.parent.remove(t)},a=t=>{t.parent=this,this.layerAdded(t),t.type!=="elevation"&&t.type!=="base-elevation"||l.getLogger(this).error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as an operational layer and will therefore be ignored.`)},n=t=>{t.parent=null,this.layerRemoved(t)};this.addHandles([this.layers.on("before-add",t=>{if(t.item===this)return t.preventDefault(),void l.getLogger(this).error("#add()","Cannot add layer to itself.");r(t.item)}),this.layers.on("after-add",t=>a(t.item)),this.layers.on("after-remove",t=>n(t.item))])}destroy(){const e=this.layers.toArray();for(const r of e)r.destroy();this.layers.destroy()}set layers(e){this._set("layers",f(e,this._get("layers")))}add(e,r){const a=this.layers;if(r=a.getNextIndex(r),e instanceof m){const n=e;n.parent===this?this.reorder(n,r):a.add(n,r)}else b(e)?e.then(n=>{this.destroyed||this.add(n,r)}):l.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,r){const a=this.layers;let n=a.getNextIndex(r);e.slice().forEach(t=>{t.parent!==this?(a.add(t,n),n+=1):this.reorder(t,n)})}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return o([h()],s.prototype,"layers",null),s=o([p("esri.support.LayersMixin")],s),s};function y(i,s,e){if(i)for(let r=0,a=i.length;r<a;r++){const n=i.at(r);if(n[s]===e)return n;if(n?.type==="group"){const t=y(n.tables,s,e);if(t)return t}}}const x=i=>{let s=class extends i{constructor(...e){super(...e),this.tables=new u,this.addHandles([this.tables.on("after-add",r=>{const a=r.item;a.parent&&a.parent!==this&&"tables"in a.parent&&a.parent.tables.remove(a),a.parent=this,a.type!=="feature"&&l.getLogger(this).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",r=>{r.item.parent=null})])}destroy(){const e=this.tables.toArray();for(const r of e)r.destroy();this.tables.destroy()}set tables(e){this._set("tables",f(e,this._get("tables")))}findTableById(e){return y(this.tables,"id",e)}findTableByUid(e){return y(this.tables,"uid",e)}};return o([h()],s.prototype,"tables",null),s=o([p("esri.support.TablesMixin")],s),s};export{v as a,L as l,x as n,g as t};