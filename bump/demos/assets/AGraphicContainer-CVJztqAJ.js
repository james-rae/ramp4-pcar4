import{cI as O,E as I}from"./main-CdIhtOSF.js";import{i as V,r as z,n as D}from"./TechniqueInstance-Drr4aliE.js";import{e as g,N as E}from"./MapView-UasAHzXy.js";import{T as c}from"./FeatureCommandQueue-DDBklkrg.js";import{o as $,i as w,M as C,f as L,h as N}from"./mat3-XZDRtl20.js";import{t as T}from"./vec2f32-BbH2jxlN.js";import{r as k}from"./vec3f32-nZdmKIgz.js";import{L as F}from"./normalizeUtils-qPTI-JWL.js";import{e as P}from"./Container-VurvxIZJ.js";import{b as U}from"./LabelMetric-D6uxnGIZ.js";import{E as v}from"./BufferObject-CH89vdLU.js";import{R as b,E as H,C as S,F as x}from"./enums-Dk3osxpS.js";import{o as W}from"./VertexArrayObject-0zgq10Cr.js";let q=0;function h(d,t){return new V(z(q++),d,t)}const f={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class j{constructor(){this.instances={fill:h(c.fill,{uniforms:f,optionalAttributes:{zoomRange:!0}}),marker:h(c.marker,{uniforms:f,optionalAttributes:{zoomRange:!0}}),line:h(c.line,{uniforms:f,optionalAttributes:{zoomRange:!0}}),text:h(c.text,{uniforms:f,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(c.complexFill,{uniforms:f,optionalAttributes:{zoomRange:!0}}),texturedLine:h(c.texturedLine,{uniforms:f,optionalAttributes:{zoomRange:!0}}),animatedMarker:h(c.animatedMarker,{uniforms:f,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((t,e)=>(t.set(e.instanceId,e),t),new Map)}getInstance(t){return this._instancesById.get(t)}}const G=Math.PI/180,Y=4;class J extends P{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(t){const{context:e}=t,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,r),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(b.ONE,b.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const o=this._program;e.bindVAO(this._vao),e.useProgram(o),o.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(H.LINES,8*r.length,S.UNSIGNED_INT,0),e.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(t){if(this._program)return;const e=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,r=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=t.programCache.acquire(e,r,M().attributes)}_updateMatricesAndLocalOrigin(t){const{state:e}=t,{displayMat3:r,size:o,resolution:m,pixelRatio:s,rotation:a,viewpoint:i}=e,l=G*a,{x:n,y}=i.targetGeometry,R=F(n,e.spatialReference);this._localOrigin.x=R,this._localOrigin.y=y;const p=s*o[0],_=s*o[1],A=m*p,B=m*_,u=$(this._dvsMat3);w(u,u,r),C(u,u,T(p/2,_/2)),L(u,u,k(o[0]/A,-_/B,1)),N(u,u,-l)}_updateBufferData(t,e){const{x:r,y:o}=this._localOrigin,m=2*Y*e.length,s=new Float32Array(m),a=new Uint32Array(8*e.length);let i=0,l=0;for(const n of e)n&&(s[2*i]=n[0]-r,s[2*i+1]=n[1]-o,s[2*i+2]=n[0]-r,s[2*i+3]=n[3]-o,s[2*i+4]=n[2]-r,s[2*i+5]=n[3]-o,s[2*i+6]=n[2]-r,s[2*i+7]=n[1]-o,a[l]=i+0,a[l+1]=i+3,a[l+2]=i+3,a[l+3]=i+2,a[l+4]=i+2,a[l+5]=i+1,a[l+6]=i+1,a[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(s.buffer):this._vertexBuffer=v.createVertex(t,x.DYNAMIC_DRAW,s.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=v.createIndex(t,x.DYNAMIC_DRAW,a),!this._vao){const n=M();this._vao=new W(t,n.attributes,n.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const M=()=>U("bounds",{geometry:[{location:0,name:"a_position",count:2,type:S.FLOAT}]});class ut extends D{constructor(t){super(t),this._instanceStore=new j,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=I(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(t){this._boundsRenderer=new J(t),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(t,e){t.onMessage(e),this.contains(t)||this.addChild(t),this.requestRender()}_renderChildren(t,e){t.selection=e;for(const r of this.children){if(!r.visible)continue;r.getDisplayList(this._instanceStore,E.STRICT_ORDER)?.render(t)}}}export{ut as i};
