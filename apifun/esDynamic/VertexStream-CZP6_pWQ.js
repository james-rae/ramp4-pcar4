import{r}from"./utils-CkWT5nF5.js";import{E as e,o}from"./VertexArrayObject-Dh3-iFov.js";import{C as i,F as a,E as n}from"./enums-DBi1-Mm2.js";import{t as h}from"./VertexElementDescriptor-BAy1DPb3.js";let _=class{constructor(t,s){this._rctx=t,this._attributes=[{name:"position",offset:0,type:i.SHORT,count:2}],this.layout={hash:r(this._attributes),attributes:this._attributes,stride:4},this._vertexBuffer=e.createVertex(t,a.STATIC_DRAW,new Uint16Array(s)),this._vao=new o(t,new Map([["a_position",0]]),new Map([["geometry",[new h("a_position",2,i.SHORT,0,4)]]]),new Map([["geometry",this._vertexBuffer]])),this._count=s.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(n.TRIANGLE_STRIP,0,this._count)}};export{_ as n};
