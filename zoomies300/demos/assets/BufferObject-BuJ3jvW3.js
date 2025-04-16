import{cm as R,cn as A,co as F,cp as T,n as b}from"./main-Di-bOCuA.js";import{u as f}from"./Texture-CVOCxYHL.js";import{A as n,F as h,V as c,C as r}from"./enums-Dk3osxpS.js";const E=()=>b.getLogger("esri.views.webgl.BufferObject");class _{static createIndex(e,t,i){return new _(e,n.ELEMENT_ARRAY_BUFFER,t,i)}static createVertex(e,t,i){return new _(e,n.ARRAY_BUFFER,t,i)}static createUniform(e,t,i){return new _(e,n.UNIFORM_BUFFER,t,i)}static createPixelPack(e,t=h.STREAM_READ,i){const s=new _(e,n.PIXEL_PACK_BUFFER,t);return i&&s.setSize(i),s}static createPixelUnpack(e,t=h.STREAM_DRAW,i){return new _(e,n.PIXEL_UNPACK_BUFFER,t,i)}static createTransformFeedback(e,t=h.STATIC_DRAW,i){const s=new _(e,n.TRANSFORM_FEEDBACK_BUFFER,t);return s.setSize(i),s}constructor(e,t,i,s){this._context=e,this.bufferType=t,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(c.BufferObject,this),this._glName=this._context.gl.createBuffer(),f(this._context.gl),s&&this.setData(s)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===n.ELEMENT_ARRAY_BUFFER){if(this._indexType===r.UNSIGNED_INT)return 4*this._size;if(this._indexType===r.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER||this.bufferType===n.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c.BufferObject,this),this._context=null):this._glName&&E().warn("Leaked WebGL buffer object")}setSize(e,t=null){if(this.bufferType===n.ELEMENT_ARRAY_BUFFER&&t!=null)switch(this._indexType=t,t){case r.UNSIGNED_SHORT:e*=2;break;case r.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===n.ELEMENT_ARRAY_BUFFER&&(R(e)?this._indexType=r.UNSIGNED_BYTE:A(e)?(t/=2,this._indexType=r.UNSIGNED_SHORT):F(e)&&(t/=4,this._indexType=r.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;t!=null?s.bufferData(this.bufferType,t,this.usage):s.bufferData(this.bufferType,e,this.usage),f(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(e,t,i,s){if(!e)return;const u=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:a}=this._context;a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,s-i),f(a),this._isVAOAware&&this._context.bindVAO(u)}getSubData(e,t=0,i,s){if(i<0||s<0)return;const u=B(e)?e.BYTES_PER_ELEMENT:1;if(u*((i??0)+(s??0))>e.byteLength)return;t+u*(s??0)>this.usedMemory&&E().warn("Potential problem getting subdata: requested data exceeds buffer size!");const a=this._context.gl;this.bufferType===n.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,n.TRANSFORM_FEEDBACK_BUFFER),a.getBufferSubData(n.TRANSFORM_FEEDBACK_BUFFER,t,e,i,s),this._context.unbindBuffer(n.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,n.COPY_READ_BUFFER),a.getBufferSubData(n.COPY_READ_BUFFER,t,e,i,s),this._context.unbindBuffer(n.COPY_READ_BUFFER))}async getSubDataAsync(e,t=0,i,s){await this._context.clientWaitAsync(),this.getSubData(e,t,i,s)}}function B(o){return T(o)}export{_ as E};
