import{o as l,x as i,z as r,bi as n,K as y}from"./main-DTtQVgOw.js";import{v as c,m,p}from"./commonProperties-DioV_4mF.js";var o;let t=o=class extends c(p){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.symbols.map(a=>a.collectRequiredFields(e,s)))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}get symbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables?.reduce((e,s)=>e+s.getAttributeHash(),"")??""}getMeshHash(){return this.symbols.reduce((e,s)=>e+JSON.stringify(s),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new o({description:this.description,label:this.label,symbol:l(this.symbol),visualVariables:l(this.visualVariables),authoringInfo:l(this.authoringInfo)})}};i([r({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([r(m)],t.prototype,"symbol",void 0),i([n({simple:"simple"})],t.prototype,"type",void 0),t=o=i([y("esri.renderers.SimpleRenderer")],t);const u=t;export{u as p};
