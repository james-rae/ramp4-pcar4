import{v as r,B as i,D as l,bk as n,N as m}from"./main-CcTJZah4.js";import{v as c,m as p,p as y}from"./commonProperties-D3gfBm3e.js";var o;let t=o=class extends c(y){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)])}async collectSymbolFields(e,s){await Promise.all(this.symbols.map(a=>a.collectRequiredFields(e,s)))}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}get symbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables?.reduce((e,s)=>e+s.getAttributeHash(),"")??""}getMeshHash(){return this.symbols.reduce((e,s)=>e+JSON.stringify(s),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new o({description:this.description,label:this.label,symbol:r(this.symbol),visualVariables:r(this.visualVariables),authoringInfo:r(this.authoringInfo)})}};i([l({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([l({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([l(p)],t.prototype,"symbol",void 0),i([n({simple:"simple"})],t.prototype,"type",void 0),t=o=i([m("esri.renderers.SimpleRenderer")],t);const d=t;export{d as p};
