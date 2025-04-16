import { c as W } from "./WGLContainer-Cfx415Pj.js";
import { glslifyDefineMap as et, ProgramCache as st } from "./webglDeps-1iVd6x9t.js";
import { a9 as w, fE as N, aH as V, fl as it, b0 as rt } from "./main-DHXLMse1.js";
import { e as I, c as nt, d as b, u as $, o as at } from "./Texture-D-YIHT8g.js";
import { R as p, T as D, N as R, S as Z, O as x, I as m, f as g, V as B, F as S, A as n, E, C, D as y, L as O, G as Q, U as k, P as lt, X as v, Y as M, _ as F, n as d, r as ot, i as z, M as A } from "./enums-DDkmfb-t.js";
import { S as ht, s as ft, G as ut } from "./renderState-DjM_esgh.js";
import { o as Y } from "./interfaces-Aq8q9x0N.js";
import { c as P, E as G } from "./Program-BYtVT21d.js";
import { t as L, f as _t, a as ct } from "./testSVGPremultipliedAlpha-kZDBsUrS.js";
import { r as dt } from "./floatRGBA-dYp-2nX9.js";
import { t as q } from "./doublePrecisionUtils-BJbYwoii.js";
import { o as J } from "./ProgramTemplate-DogOLZ0L.js";
import { t as tt } from "./VertexElementDescriptor-BAy1DPb3.js";
const Et = (t) => {
  let e = "";
  e += t[0].toUpperCase();
  for (let s = 1; s < t.length; s++) {
    const i = t[s];
    i === i.toUpperCase() ? (e += "_", e += i) : e += i.toUpperCase();
  }
  return e;
}, gt = (t) => {
  const e = {};
  for (const s in t)
    e[Et(s)] = t[s];
  return et(e);
}, $t = (t, e, s, i) => {
  const r = t + t.substring(t.lastIndexOf("/")), a = e + e.substring(e.lastIndexOf("/")), l = gt(i);
  return { attributes: s, shaders: { vertexShader: l + W(`${r}.vert`), fragmentShader: l + W(`${a}.frag`) } };
};
class K {
  constructor() {
    this.blend = !1, this.blendColor = { r: 0, g: 0, b: 0, a: 0 }, this.blendFunction = { srcRGB: p.ONE, dstRGB: p.ZERO, srcAlpha: p.ONE, dstAlpha: p.ZERO }, this.blendEquation = { mode: D.ADD, modeAlpha: D.ADD }, this.colorMask = { r: !0, g: !0, b: !0, a: !0 }, this.faceCulling = !1, this.cullFace = R.BACK, this.frontFace = Z.CCW, this.scissorTest = !1, this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this.depthTest = !1, this.depthFunction = x.LESS, this.clearDepth = 1, this.depthWrite = !0, this.depthRange = { zNear: 0, zFar: 1 }, this.viewport = null, this.stencilTest = !1, this.polygonOffsetFill = !1, this.polygonOffset = [0, 0], this.stencilFunction = { face: R.FRONT_AND_BACK, func: x.ALWAYS, ref: 0, mask: 1 }, this.clearStencil = 0, this.stencilWriteMask = 1, this.stencilOperation = { face: R.FRONT_AND_BACK, fail: m.KEEP, zFail: m.KEEP, zPass: m.KEEP }, this.clearColor = { r: 0, g: 0, b: 0, a: 0 }, this.program = null, this.vertexBuffer = null, this.indexBuffer = null, this.uniformBuffer = null, this.pixelPackBuffer = null, this.pixelUnpackBuffer = null, this.copyReadBuffer = null, this.copyWriteBuffer = null, this.transformFeedbackBuffer = null, this.uniformBufferBindingPoints = new Array(), this.transformBufferBindingPoints = new Array(), this.readFramebuffer = null, this.drawFramebuffer = null, this.drawBuffers = { defaultFramebuffer: [g.BACK], fbos: /* @__PURE__ */ new WeakMap() }, this.renderbuffer = null, this.activeTexture = 0, this.textureUnitMap = new Array(), this.vertexArrayObject = null;
  }
}
let pt = class {
  constructor() {
    for (this._current = new Array(), this._allocations = null; this._current.length < B.COUNT; ) this._current.push(0);
  }
  increment(e, s, i = 1) {
    this._current[e] += i, this._allocations?.add(s);
  }
  decrement(e, s, i = 1) {
    this._current[e] -= i, this._allocations?.remove(s);
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((e, s, i) => e + (i < B.UNCOUNTED ? s : 0), 0);
  }
  get resourceInformation() {
    let e = "";
    if (this.total > 0) {
      e += `Live objects:
`;
      for (let s = 0; s < B.COUNT; ++s) {
        const i = this._current[s];
        i > 0 && (e += `${B[s]}: ${i}
`);
      }
    }
    return e += this._allocations?.resetLog(), e;
  }
}, bt = class {
  constructor(e, s, i) {
    const r = s.textureFilterAnisotropic, a = i.maxAnisotropy ?? 1 / 0;
    this.versionString = e.getParameter(e.VERSION), this.maxVertexTextureImageUnits = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxVertexAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxMaxAnisotropy = r ? Math.min(e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY), a) : 1, this.maxTextureImageUnits = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxRenderbufferSize = e.getParameter(e.MAX_RENDERBUFFER_SIZE), this.maxViewportDims = e.getParameter(e.MAX_VIEWPORT_DIMS), this.maxUniformBufferBindings = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS), this.maxVertexUniformBlocks = e.getParameter(e.MAX_VERTEX_UNIFORM_BLOCKS), this.maxFragmentUniformBlocks = e.getParameter(e.MAX_FRAGMENT_UNIFORM_BLOCKS), this.maxUniformBlockSize = e.getParameter(e.MAX_UNIFORM_BLOCK_SIZE), this.uniformBufferOffsetAlignment = e.getParameter(e.UNIFORM_BUFFER_OFFSET_ALIGNMENT), this.maxArrayTextureLayers = e.getParameter(e.MAX_ARRAY_TEXTURE_LAYERS), this.maxSamples = e.getParameter(e.MAX_SAMPLES), this.maxDrawBuffers = e.getParameter(e.MAX_DRAW_BUFFERS);
  }
};
class X {
  constructor(e) {
    this._rctx = e, this._indexBuffer = this._createIndexbuffer(), this._program = this._createHelperProgram();
  }
  static getShaderSources() {
    return { vertex: `#version 300 es
    precision highp float;

    void main(void) {
      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);
    }`, fragment: `#version 300 es
    precision highp float;

    out vec4 fragColor;

    void main(void) {
      fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }` };
  }
  _createHelperProgram() {
    const e = X.getShaderSources();
    return this._rctx.programCache.acquire(e.vertex, e.fragment, /* @__PURE__ */ new Map([]));
  }
  _createIndexbuffer() {
    return P.createIndex(this._rctx, S.STATIC_DRAW, new Uint32Array([0]));
  }
  run() {
    this._program.compiled && this._indexBuffer && (this._rctx.bindVAO(null), this._rctx.useProgram(this._program), this._rctx.bindBuffer(this._indexBuffer, n.ELEMENT_ARRAY_BUFFER), this._rctx.drawElements(E.POINTS, 1, C.UNSIGNED_INT, 0));
  }
  dispose() {
    this._program.dispose(), this._indexBuffer.dispose();
  }
  get test() {
  }
}
class Ft extends L {
  constructor(e) {
    super(), this._rctx = e, this._helperProgram = null, w("mac") && w("chrome") && (this._program = this._prepareProgram(), this._helperProgram = this._prepareHelperProgram());
  }
  dispose() {
    super.dispose(), this._helperProgram?.dispose(), this._helperProgram = null;
  }
  _test(e) {
    const s = this._rctx, i = s.getBoundFramebufferObject(), { x: r, y: a, width: l, height: _ } = s.getViewport();
    s.resetState();
    const f = new I(1);
    f.wrapMode = y.CLAMP_TO_EDGE, f.samplingMode = O.NEAREST;
    const o = new G(s, f), h = P.createIndex(this._rctx, S.STATIC_DRAW, new Uint8Array([0]));
    s.bindFramebuffer(o), s.setViewport(0, 0, 1, 1), s.useProgram(this._helperProgram), s.bindBuffer(h, n.ELEMENT_ARRAY_BUFFER), s.drawElements(E.POINTS, 1, C.UNSIGNED_BYTE, 0), s.useProgram(e), s.bindVAO(null), s.drawArrays(E.TRIANGLES, 0, 258);
    const c = new Uint8Array(4);
    return o.readPixels(0, 0, 1, 1, Q.RGBA, k.UNSIGNED_BYTE, c), s.setViewport(r, a, l, _), s.bindFramebuffer(i), o.dispose(), h.dispose(), c[0] === 255;
  }
  _prepareProgram() {
    const s = `#version 300 es
    precision highp float;

    out float triangleId;

    const vec3 triangleVertices[3] = vec3[3](vec3(-0.5, -0.5, 0.0), vec3(0.5, -0.5, 0.0), vec3(0.0, 0.5, 0.0));

    void main(void) {
      triangleId = floor(float(gl_VertexID)/3.0);

      vec3 position = triangleVertices[gl_VertexID % 3];
      float offset = triangleId / ${Y.float(85)};
      position.z = 0.5 - offset;

      gl_Position = vec4(position, 1.0);
    }
    `, i = `#version 300 es
    precision highp float;

    in float triangleId;

    out vec4 fragColor;

    void main(void) {
      fragColor = triangleId == ${Y.float(85)} ? vec4(0.0, 1.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
    return this._rctx.programCache.acquire(s, i, /* @__PURE__ */ new Map([]));
  }
  _prepareHelperProgram() {
    const e = X.getShaderSources();
    return this._rctx.programCache.acquire(e.vertex, e.fragment, /* @__PURE__ */ new Map([]));
  }
}
let Rt = class extends L {
  constructor(e) {
    super(), this._rctx = e, this._program = H(this._rctx, !1), this._obfuscated = H(this._rctx, !0);
  }
  dispose() {
    super.dispose(), this._obfuscated = N(this._obfuscated);
  }
  _test(e) {
    if (w("force-double-precision-obfuscation")) return !0;
    if (this._obfuscated == null) return !1;
    const s = this._rctx, i = s.getBoundFramebufferObject(), { x: r, y: a, width: l, height: _ } = s.getViewport(), f = this._runProgram(e), o = this._runProgram(this._obfuscated);
    return s.setViewport(r, a, l, _), s.bindFramebuffer(i), f !== 0 && (o === 0 || f / o > 5);
  }
  _runProgram(e) {
    const s = this._rctx;
    s.resetState();
    const i = new I(1);
    i.wrapMode = y.CLAMP_TO_EDGE, i.samplingMode = O.NEAREST;
    const r = new G(s, i), a = P.createVertex(s, S.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), l = new J(s, /* @__PURE__ */ new Map([["position", 0]]), { geometry: [new tt("position", 2, C.UNSIGNED_SHORT, 0, 4)] }, { geometry: a }), _ = V(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), f = V(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), o = new Float32Array(6);
    q(_, o, 3);
    const h = new Float32Array(6);
    q(f, h, 3), s.useProgram(e), e.setUniform3f("u_highA", o[0], o[2], o[4]), e.setUniform3f("u_lowA", o[1], o[3], o[5]), e.setUniform3f("u_highB", h[0], h[2], h[4]), e.setUniform3f("u_lowB", h[1], h[3], h[5]), s.bindFramebuffer(r), s.setViewport(0, 0, 1, 1), s.bindVAO(l), s.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const c = new Uint8Array(4);
    r.readPixels(0, 0, 1, 1, Q.RGBA, k.UNSIGNED_BYTE, c), l.dispose(), r.dispose();
    const T = (_[2] - f[2]) / 25, U = dt(c);
    return Math.abs(T - U);
  }
};
function H(t, e) {
  const s = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${e ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `;
  return t.programCache.acquire(s, `
  precision highp float;

  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
  `, /* @__PURE__ */ new Map([["position", 0]]));
}
class Bt extends L {
  constructor(e) {
    if (super(), this._rctx = e, !e.gl || !(e.capabilities.colorBufferFloat?.textureFloat && e.capabilities.colorBufferFloat?.floatBlend)) return;
    const s = `
    precision highp float;
    attribute vec2 a_pos;

    void main() {
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `, i = `
     precision highp float;

     void main() {
      gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);
     }
    `;
    this._program = e.programCache.acquire(s, i, /* @__PURE__ */ new Map([["a_pos", 0]]));
  }
  _test(e) {
    const s = this._rctx, i = new I(1);
    i.wrapMode = y.CLAMP_TO_EDGE, i.dataType = k.FLOAT, i.internalFormat = lt.RGBA32F, i.samplingMode = O.NEAREST;
    const r = new G(s, i), a = P.createVertex(s, S.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), l = new J(s, /* @__PURE__ */ new Map([["a_pos", 0]]), { geometry: [new tt("a_pos", 2, C.UNSIGNED_SHORT, 0, 4)] }, { geometry: a });
    s.gl.getError(), s.useProgram(e);
    const _ = s.getBoundFramebufferObject(), { x: f, y: o, width: h, height: c } = s.getViewport();
    s.bindFramebuffer(r), s.setViewport(0, 0, 1, 1), s.bindVAO(l), s.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const T = ht({ blending: ft(p.ZERO, p.ONE_MINUS_SRC_ALPHA) });
    s.setPipelineState(T), s.drawArrays(E.TRIANGLE_STRIP, 0, 4);
    const U = s.gl.getError();
    return s.setViewport(f, o, h, c), s.bindFramebuffer(_), l.dispose(), r.dispose(), U !== s.gl.INVALID_OPERATION || (console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."), !1);
  }
}
class mt {
  constructor(e) {
    this.rctx = e, this.floatBufferBlend = new Bt(e), this.svgPremultipliesAlpha = new _t(e), this.doublePrecisionRequiresObfuscation = new Rt(e), this.drawArraysRequiresIndicesTypeReset = new Ft(e);
  }
  dispose() {
    this.doublePrecisionRequiresObfuscation.dispose(), this.svgPremultipliesAlpha.dispose(), this.floatBufferBlend.dispose(), this.drawArraysRequiresIndicesTypeReset.dispose();
  }
}
function Tt(t, e) {
  if (e.compressedTextureETC) return null;
  const s = t.getExtension("WEBGL_compressed_texture_etc");
  return s ? { COMPRESSED_R11_EAC: s.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: s.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: s.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: s.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: s.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: s.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: s.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: s.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: s.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function At(t, e) {
  if (e.compressedTextureS3TC) return null;
  const s = t.getExtension("WEBGL_compressed_texture_s3tc");
  return s ? { COMPRESSED_RGB_S3TC_DXT1: s.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: s.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: s.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: s.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function xt(t, e) {
  if (e.textureFilterAnisotropic) return null;
  const s = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return s ? { MAX_TEXTURE_MAX_ANISOTROPY: s.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: s.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function St(t, e) {
  const s = !e.colorBufferHalfFloat && t.getExtension("EXT_color_buffer_half_float") || !e.colorBufferFloat && t.getExtension("EXT_color_buffer_float"), i = !e.colorBufferFloat && t.getExtension("EXT_color_buffer_float"), r = !e.floatBlend && !e.colorBufferFloat && t.getExtension("EXT_float_blend");
  return s || i || r ? { textureFloat: !!i, textureHalfFloat: !!s, floatBlend: !!r, R16F: t.R16F, RG16F: t.RG16F, RGBA16F: t.RGBA16F, R32F: t.R32F, RG32F: t.RG32F, RGBA32F: t.RGBA32F, R11F_G11F_B10F: t.R11F_G11F_B10F, RGB16F: t.RGB16F } : null;
}
function Ct(t, e, s, i, r) {
  if (e[s]) return !1;
  for (const a of r) if (t.getExtension(a)) return !0;
  return !1;
}
function Ot(t, e) {
  if (e.textureNorm16) return null;
  const s = t.getExtension("EXT_texture_norm16");
  return s ? { R16: s.R16_EXT, RG16: s.RG16_EXT, RGB16: s.RGB16_EXT, RGBA16: s.RGBA16_EXT, R16_SNORM: s.R16_SNORM_EXT, RG16_SNORM: s.RG16_SNORM_EXT, RGB16_SNORM: s.RGB16_SNORM_EXT, RGBA16_SNORM: s.RGBA16_SNORM_EXT } : null;
}
function Pt(t, e) {
  const s = e.loseContext && t.getExtension("WEBGL_lose_context");
  return s ? { loseRenderingContext: () => s.loseContext() } : null;
}
class Ut {
  constructor(e, s) {
    this._gl = e, this._compressedTextureETC = null, this._compressedTextureS3TC = null, this._textureFilterAnisotropic = null, this._colorBufferFloat = null, this._loseContext = null, this._textureNorm16 = null, this._textureFloatLinear = null, this._disabledExtensions = s.disabledExtensions || {}, this._debugWebGLExtensions = s.debugWebGLExtensions || {};
  }
  get compressedTextureETC() {
    return this._compressedTextureETC ??= Tt(this._gl, this._disabledExtensions), this._compressedTextureETC;
  }
  get compressedTextureS3TC() {
    return this._compressedTextureS3TC ??= At(this._gl, this._disabledExtensions), this._compressedTextureS3TC;
  }
  get textureFilterAnisotropic() {
    return this._textureFilterAnisotropic ??= xt(this._gl, this._disabledExtensions), this._textureFilterAnisotropic;
  }
  get disjointTimerQuery() {
    return this._disjointTimerQuery ??= ct(this._gl, this._disabledExtensions), this._disjointTimerQuery;
  }
  get colorBufferFloat() {
    return this._colorBufferFloat ??= St(this._gl, this._disabledExtensions), this._colorBufferFloat;
  }
  get loseContext() {
    return this._loseContext ??= Pt(this._gl, this._debugWebGLExtensions), this._loseContext;
  }
  get textureNorm16() {
    return this._textureNorm16 ??= Ot(this._gl, this._disabledExtensions), this._textureNorm16;
  }
  get textureFloatLinear() {
    return this._textureFloatLinear ??= Ct(this._gl, this._disabledExtensions, "textureFloatLinear", !1, ["OES_texture_float_linear"]), this._textureFloatLinear;
  }
  enable(e) {
    return this[e];
  }
}
let Kt = class {
  constructor(t, e) {
    this.gl = t, this.instanceCounter = new pt(), this.programCache = new st(this), this._transformFeedbackRequestInfo = null, this._state = new K(), this._numOfDrawCalls = 0, this._numOfTriangles = 0, this._loadExtensions(), this.configure(e);
  }
  configure(t) {
    this._capabilities = new Ut(this.gl, t), this._parameters = new bt(this.gl, this._capabilities, t), nt.TEXTURE_UNIT_FOR_UPDATES = this._parameters.maxTextureImageUnits - 1;
    const e = this.gl.getParameter(this.gl.VIEWPORT);
    this._state = new K(), this._state.viewport = { x: e[0], y: e[1], width: e[2], height: e[3] }, this._stateTracker = new ut({ setBlending: (s) => {
      if (s) {
        this.setBlendingEnabled(!0), this.setBlendEquationSeparate(s.opRgb, s.opAlpha), this.setBlendFunctionSeparate(s.srcRgb, s.dstRgb, s.srcAlpha, s.dstAlpha);
        const i = s.color;
        this.setBlendColor(i.r, i.g, i.b, i.a);
      } else this.setBlendingEnabled(!1);
    }, setCulling: (s) => {
      s ? (this.setFaceCullingEnabled(!0), this.setCullFace(s.face), this.setFrontFace(s.mode)) : this.setFaceCullingEnabled(!1);
    }, setPolygonOffset: (s) => {
      s ? (this.setPolygonOffsetFillEnabled(!0), this.setPolygonOffset(s.factor, s.units)) : this.setPolygonOffsetFillEnabled(!1);
    }, setDepthTest: (s) => {
      s ? (this.setDepthTestEnabled(!0), this.setDepthFunction(s.func)) : this.setDepthTestEnabled(!1);
    }, setStencilTest: (s) => {
      if (s) {
        this.setStencilTestEnabled(!0);
        const i = s.function;
        this.setStencilFunction(i.func, i.ref, i.mask);
        const r = s.operation;
        this.setStencilOp(r.fail, r.zFail, r.zPass);
      } else this.setStencilTestEnabled(!1);
    }, setDepthWrite: (s) => {
      s ? (this.setDepthWriteEnabled(!0), this.setDepthRange(s.zNear, s.zFar)) : this.setDepthWriteEnabled(!1);
    }, setColorWrite: (s) => {
      s ? this.setColorMask(s.r, s.g, s.b, s.a) : this.setColorMask(!1, !1, !1, !1);
    }, setStencilWrite: (s) => {
      s ? this.setStencilWriteMask(s.mask) : this.setStencilWriteMask(0);
    }, setDrawBuffers: (s) => {
      if (s) this.setDrawBuffers(s.buffers);
      else {
        const { drawFramebuffer: i } = this._state;
        i === null ? this.setDrawBuffers([g.BACK]) : i.colorAttachments.length === 0 ? this.setDrawBuffers([g.NONE]) : this.setDrawBuffers([v.COLOR_ATTACHMENT0]);
      }
    } }), this.enforceState(), N(this._driverTest), this._driverTest = new mt(this);
  }
  dispose() {
    N(this._driverTest), this.programCache.dispose(), this.bindVAO(null), this.unbindBuffer(n.ARRAY_BUFFER), this.unbindBuffer(n.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(n.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(n.PIXEL_PACK_BUFFER), this.unbindBuffer(n.PIXEL_UNPACK_BUFFER), this.unbindBuffer(n.COPY_READ_BUFFER), this.unbindBuffer(n.COPY_WRITE_BUFFER), this._state.textureUnitMap.length = 0, b() && console.log(this.instanceCounter.resourceInformation);
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  setPipelineState(t) {
    this._stateTracker.setPipeline(t);
  }
  setBlendingEnabled(t) {
    this._state.blend !== t && (t === !0 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._state.blend = t, this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    this._state.program?.stop(), this._state.program = null;
  }
  externalTextureUnitUpdate(t, e) {
    for (let s = 0; s < t.length; ++s) this._state.textureUnitMap[t[s]] = null;
    e >= 0 && (this._state.activeTexture = e);
  }
  externalVertexArrayObjectUpdate() {
    this.gl.bindVertexArray(null), this._state.vertexArrayObject = null, this._state.vertexBuffer = null, this._state.indexBuffer = null;
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(t, e, s, i) {
    t === this._state.blendColor.r && e === this._state.blendColor.g && s === this._state.blendColor.b && i === this._state.blendColor.a || (this.gl.blendColor(t, e, s, i), this._state.blendColor.r = t, this._state.blendColor.g = e, this._state.blendColor.b = s, this._state.blendColor.a = i, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(t, e) {
    t === this._state.blendFunction.srcRGB && e === this._state.blendFunction.dstRGB || (this.gl.blendFunc(t, e), this._state.blendFunction.srcRGB = t, this._state.blendFunction.srcAlpha = t, this._state.blendFunction.dstRGB = e, this._state.blendFunction.dstAlpha = e, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(t, e, s, i) {
    this._state.blendFunction.srcRGB === t && this._state.blendFunction.srcAlpha === s && this._state.blendFunction.dstRGB === e && this._state.blendFunction.dstAlpha === i || (this.gl.blendFuncSeparate(t, e, s, i), this._state.blendFunction.srcRGB = t, this._state.blendFunction.srcAlpha = s, this._state.blendFunction.dstRGB = e, this._state.blendFunction.dstAlpha = i, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(t) {
    this._state.blendEquation.mode !== t && (this.gl.blendEquation(t), this._state.blendEquation.mode = t, this._state.blendEquation.modeAlpha = t, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(t, e) {
    this._state.blendEquation.mode === t && this._state.blendEquation.modeAlpha === e || (this.gl.blendEquationSeparate(t, e), this._state.blendEquation.mode = t, this._state.blendEquation.modeAlpha = e, this._stateTracker.invalidateBlending());
  }
  setColorMask(t, e, s, i) {
    this._state.colorMask.r === t && this._state.colorMask.g === e && this._state.colorMask.b === s && this._state.colorMask.a === i || (this.gl.colorMask(t, e, s, i), this._state.colorMask.r = t, this._state.colorMask.g = e, this._state.colorMask.b = s, this._state.colorMask.a = i, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(t, e, s, i) {
    this._state.clearColor.r === t && this._state.clearColor.g === e && this._state.clearColor.b === s && this._state.clearColor.a === i || (this.gl.clearColor(t, e, s, i), this._state.clearColor.r = t, this._state.clearColor.g = e, this._state.clearColor.b = s, this._state.clearColor.a = i);
  }
  setFaceCullingEnabled(t) {
    this._state.faceCulling !== t && (t === !0 ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._state.faceCulling = t, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(t) {
    this._state.polygonOffsetFill !== t && (t === !0 ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._state.polygonOffsetFill = t, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(t, e) {
    this._state.polygonOffset[0] === t && this._state.polygonOffset[1] === e || (this._state.polygonOffset[0] = t, this._state.polygonOffset[1] = e, this.gl.polygonOffset(t, e), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(t) {
    this._state.cullFace !== t && (this.gl.cullFace(t), this._state.cullFace = t, this._stateTracker.invalidateCulling());
  }
  setFrontFace(t) {
    this._state.frontFace !== t && (this.gl.frontFace(t), this._state.frontFace = t, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(t) {
    this._state.scissorTest !== t && (t === !0 ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._state.scissorTest = t);
  }
  setScissorRect(t, e, s, i) {
    this._state.scissorRect.x === t && this._state.scissorRect.y === e && this._state.scissorRect.width === s && this._state.scissorRect.height === i || (this.gl.scissor(t, e, s, i), this._state.scissorRect.x = t, this._state.scissorRect.y = e, this._state.scissorRect.width = s, this._state.scissorRect.height = i);
  }
  setDepthTestEnabled(t) {
    this._state.depthTest !== t && (t === !0 ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._state.depthTest = t, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(t) {
    this._state.clearDepth !== t && (this.gl.clearDepth(t), this._state.clearDepth = t);
  }
  setDepthFunction(t) {
    this._state.depthFunction !== t && (this.gl.depthFunc(t), this._state.depthFunction = t, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(t) {
    this._state.depthWrite !== t && (this.gl.depthMask(t), this._state.depthWrite = t, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(t, e) {
    this._state.depthRange.zNear === t && this._state.depthRange.zFar === e || (this.gl.depthRange(t, e), this._state.depthRange.zNear = t, this._state.depthRange.zFar = e, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(t) {
    this._state.stencilTest !== t && (t === !0 ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._state.stencilTest = t, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(t) {
    t !== this._state.clearStencil && (this.gl.clearStencil(t), this._state.clearStencil = t);
  }
  setStencilFunction(t, e, s) {
    this._state.stencilFunction.func === t && this._state.stencilFunction.ref === e && this._state.stencilFunction.mask === s || (this.gl.stencilFunc(t, e, s), this._state.stencilFunction.face = R.FRONT_AND_BACK, this._state.stencilFunction.func = t, this._state.stencilFunction.ref = e, this._state.stencilFunction.mask = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(t, e, s, i) {
    this._state.stencilFunction.face === t && this._state.stencilFunction.func === e && this._state.stencilFunction.ref === s && this._state.stencilFunction.mask === i || (this.gl.stencilFuncSeparate(t, e, s, i), this._state.stencilFunction.face = t, this._state.stencilFunction.func = e, this._state.stencilFunction.ref = s, this._state.stencilFunction.mask = i, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(t) {
    this._state.stencilWriteMask !== t && (this.gl.stencilMask(t), this._state.stencilWriteMask = t, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(t, e, s) {
    this._state.stencilOperation.face === R.FRONT_AND_BACK && this._state.stencilOperation.fail === t && this._state.stencilOperation.zFail === e && this._state.stencilOperation.zPass === s || (this.gl.stencilOp(t, e, s), this._state.stencilOperation.face = R.FRONT_AND_BACK, this._state.stencilOperation.fail = t, this._state.stencilOperation.zFail = e, this._state.stencilOperation.zPass = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(t, e, s, i) {
    this._state.stencilOperation.face === t && this._state.stencilOperation.fail === e && this._state.stencilOperation.zFail === s && this._state.stencilOperation.zPass === i || (this.gl.stencilOpSeparate(t, e, s, i), this._state.stencilOperation.face = t, this._state.stencilOperation.fail = e, this._state.stencilOperation.zFail = s, this._state.stencilOperation.zPass = i, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(t, e = !1) {
    const s = this._state.activeTexture;
    return t >= 0 && (e || t !== this._state.activeTexture) && (this.gl.activeTexture(M + t), this._state.activeTexture = t), s;
  }
  setDrawBuffers(t) {
    const { drawFramebuffer: e } = this._state, s = e === null, i = s ? this._state.drawBuffers.defaultFramebuffer : this._state.drawBuffers.fbos.get(e);
    if (i?.length !== t.length || !i.every((r, a) => r === t[a])) if (t.length > this.parameters.maxDrawBuffers) console.error("Setting more active draw buffers than GL.MAX_DRAW_BUFFERS allows.");
    else {
      if (s) {
        if (t.length > 1) return void console.error("The default framebuffer can only have one active draw buffer.");
        if (t[0] !== g.BACK && t[0] !== g.NONE) return void console.error("The default framebuffer can only use the constants GL.BACK or GL.NONE as draw buffers.");
      }
      s || !t.includes(g.BACK) ? (this.gl.drawBuffers(t), s ? this._state.drawBuffers.defaultFramebuffer = t : this._state.drawBuffers.fbos.set(e, t), this._stateTracker.invalidateDrawBuffers()) : console.error("A framebuffer object can only use the constants GL.COLOR_ATTACHMENTi or GL.NONE as draw buffers.");
    }
  }
  clear(t, e = 255) {
    if (t) {
      if (t & F.COLOR_BUFFER_BIT) {
        const s = this._state.drawFramebuffer?.colorAttachments;
        s && this.setDrawBuffers(s), this.setColorMask(!0, !0, !0, !0);
      }
      t & F.DEPTH_BUFFER_BIT && this.setDepthWriteEnabled(!0), t & F.STENCIL_BUFFER_BIT && this.setStencilWriteMask(e), this.gl.clear(t);
    }
  }
  clearFramebuffer(t, e = !1, s = !1) {
    let i = 0;
    if (t) {
      const a = Math.max(1e-13, t[3]);
      this.setClearColor(t[0], t[1], t[2], a), i |= F.COLOR_BUFFER_BIT;
    }
    e && (i |= F.DEPTH_BUFFER_BIT), s === !1 ? s = 0 : (s === !0 && (s = 255), i |= F.STENCIL_BUFFER_BIT), i && this.clear(i, s);
  }
  drawArrays(t, e, s) {
    if (this._transformFeedbackRequestInfo) {
      if (t !== this._transformFeedbackRequestInfo.primitiveType) throw new Error("DrawArrays called during transform feedback, but primitiveType does not match that of the current transform feedback request");
      if (this._state.program?.hasTransformFeedbackVaryings == null) throw new Error("DrawArrays called during transform feedback, but the shader program was not linked with a transform feedback varying");
    }
    if (b()) {
      this._numOfDrawCalls++, this._numOfTriangles += j(t, s);
      const i = this._state.textureUnitMap;
      for (let r = 0; r < i.length; r++) {
        const a = i[r];
        if (a != null && a === this._state.drawFramebuffer?.colorTexture) throw new Error(`Detected readWrite. Texture already bound at index ${r}`);
      }
    }
    this.gl.drawArrays(t, e, s), $(this.gl);
  }
  drawArraysInstanced(t, e, s, i) {
    this.gl.drawArraysInstanced(t, e, s, i), $(this.gl);
  }
  drawElements(t, e, s, i) {
    if (this._transformFeedbackRequestInfo) throw new Error("Cannot called drawElements during a transform feedback request");
    if (b() && (this._numOfDrawCalls++, this._numOfTriangles += j(t, e)), this.gl.drawElements(t, e, s, i), b()) {
      const r = at(this);
      if (r) {
        const a = this.getBoundVAO(), l = a?.indexBuffer, _ = a?.vertexBuffers, f = { indexBuffer: l, vertexBuffers: _ }, o = { mode: t, count: e, type: s, offset: i }, h = l?.size ?? 0, c = i + e, T = h < c ? `. Buffer is too small. Attempted to draw index ${c} of ${h}` : "";
        console.error(`drawElements: ${r}${T}`, { args: o, vao: f });
      }
    }
  }
  logInfo() {
    b() && console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`);
  }
  resetInfo() {
    b() && (this._numOfDrawCalls = 0, this._numOfTriangles = 0);
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(t, e, s, i) {
    s = Math.max(Math.round(s), 1), i = Math.max(Math.round(i), 1);
    const r = this._state.viewport;
    r.x === t && r.y === e && r.width === s && r.height === i || (r.x = t, r.y = e, r.width = s, r.height = i, this.gl.viewport(t, e, s, i));
  }
  setViewport4fv(t) {
    this.setViewport(t[0], t[1], t[2], t[3]);
  }
  restoreViewport({ x: t, y: e, width: s, height: i }) {
    this.setViewport(t, e, s, i);
  }
  getViewport() {
    const t = this._state.viewport;
    return { x: t.x, y: t.y, width: t.width, height: t.height };
  }
  useProgram(t) {
    this._state.program !== t && (this._state.program?.stop(), this._state.program = t, this.gl.useProgram(t?.glName ?? null));
  }
  bindTexture(t, e, s = !1) {
    (e >= this.parameters.maxTextureImageUnits || e < 0) && console.error("Input texture unit is out of range of available units!");
    const i = this._state.textureUnitMap[e];
    return t?.glName == null ? (i != null && (this.setActiveTexture(e, s), this.gl.bindTexture(i.descriptor.target, null)), this._state.textureUnitMap[e] = null, i) : s || i !== t ? (this.setActiveTexture(e, s), this.gl.bindTexture(t.descriptor.target, t.glName), t.applyChanges(), this._state.textureUnitMap[e] = t, i) : (t.isDirty && (this.setActiveTexture(e, s), t.applyChanges()), i);
  }
  unbindTexture(t) {
    if (t != null) for (let e = 0; e < this.parameters.maxTextureImageUnits; e++) this._state.textureUnitMap[e] === t && (this.bindTexture(null, e), this._state.textureUnitMap[e] = null);
  }
  bindFramebuffer(t, e = !1) {
    if (e || this._state.readFramebuffer !== t || this._state.drawFramebuffer !== t) {
      if (this._stateTracker.invalidateDrawBuffers(), t == null) return this.gl.bindFramebuffer(d.FRAMEBUFFER, null), void (this._state.readFramebuffer = this._state.drawFramebuffer = null);
      t.initializeAndBind(d.FRAMEBUFFER), this._state.readFramebuffer = t, this._state.drawFramebuffer = t;
    }
  }
  bindFramebufferSeparate(t, e, s = !1) {
    const i = e === d.READ_FRAMEBUFFER, r = i ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (s || r !== t) && (t == null ? this.gl.bindFramebuffer(e, null) : t.initializeAndBind(e), i ? this._state.readFramebuffer = t ?? null : (this._stateTracker.invalidateDrawBuffers(), this._state.drawFramebuffer = t ?? null));
  }
  blitFramebuffer(t, e, s = 0, i = 0, r = t.width, a = t.height, l = 0, _ = 0, f = e.width, o = e.height, h = F.COLOR_BUFFER_BIT, c = O.NEAREST) {
    this.bindFramebufferSeparate(t, d.READ_FRAMEBUFFER), this.bindFramebufferSeparate(e, d.DRAW_FRAMEBUFFER), this.gl.blitFramebuffer(s, i, r, a, l, _, f, o, h, c);
  }
  bindBuffer(t, e) {
    if (t) switch (e ??= t.bufferType, e) {
      case n.ARRAY_BUFFER:
        this._state.vertexBuffer = u(this.gl, t, e, this._state.vertexBuffer);
        break;
      case n.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = u(this.gl, t, e, this._state.indexBuffer);
        break;
      case n.UNIFORM_BUFFER:
        this._state.uniformBuffer = u(this.gl, t, e, this._state.uniformBuffer);
        break;
      case n.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = u(this.gl, t, e, this._state.pixelPackBuffer);
        break;
      case n.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = u(this.gl, t, e, this._state.pixelUnpackBuffer);
        break;
      case n.COPY_READ_BUFFER:
        this._state.copyReadBuffer = u(this.gl, t, e, this._state.copyReadBuffer);
        break;
      case n.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = u(this.gl, t, e, this._state.copyWriteBuffer);
        break;
      case n.TRANSFORM_FEEDBACK_BUFFER:
        this._state.transformFeedbackBuffer = u(this.gl, t, e, this._state.transformFeedbackBuffer);
    }
  }
  bindRenderbuffer(t) {
    const e = this.gl;
    t || (e.bindRenderbuffer(e.RENDERBUFFER, null), this._state.renderbuffer = null), this._state.renderbuffer !== t && (e.bindRenderbuffer(e.RENDERBUFFER, t.glName), this._state.renderbuffer = t);
  }
  _getBufferBinding(t, e) {
    if (e >= this.parameters.maxUniformBufferBindings || e < 0) return console.error("Uniform buffer binding point is out of range!"), null;
    const s = t === n.UNIFORM_BUFFER ? this._state.uniformBufferBindingPoints : this._state.transformBufferBindingPoints;
    let i = s[e];
    return i == null && (i = { buffer: null, offset: 0, size: 0 }, s[e] = i), i;
  }
  bindBufferBase(t, e, s) {
    const i = this._getBufferBinding(t, e);
    i != null && (i.buffer === s && i.offset === 0 && i.size === 0 || (this.gl.bindBufferBase(t, e, s ? s.glName : null), i.buffer = s, i.offset = 0, i.size = 0));
  }
  bindBufferRange(t, e, s, i, r) {
    const a = this._getBufferBinding(t, e);
    a != null && (a.buffer === s && a.offset === i && a.size === r || (i % this._parameters.uniformBufferOffsetAlignment == 0 ? (this.gl.bindBufferRange(t, e, s.glName, i, r), a.buffer = s, a.offset = i, a.size = r) : console.error("Uniform buffer binding offset is not a multiple of the context offset alignment")));
  }
  bindUBO(t, e, s, i) {
    e != null ? (b() && (i ?? e.byteLength) > this._parameters.maxUniformBlockSize && console.error("Attempting to bind more data than the maximum uniform block size"), e.initialize(), s !== void 0 && i !== void 0 ? this.bindBufferRange(n.UNIFORM_BUFFER, t, e.buffer, s, i) : this.bindBufferBase(n.UNIFORM_BUFFER, t, e.buffer)) : this.bindBufferBase(n.UNIFORM_BUFFER, t, null);
  }
  unbindUBO(t) {
    for (let e = 0, s = this._state.uniformBufferBindingPoints.length; e < s; e++) {
      const i = this._state.uniformBufferBindingPoints[e];
      i != null && i.buffer === t.buffer && this.bindBufferBase(n.UNIFORM_BUFFER, e, null);
    }
  }
  unbindBuffer(t) {
    switch (t) {
      case n.ARRAY_BUFFER:
        this._state.vertexBuffer = u(this.gl, null, t, this._state.vertexBuffer);
        break;
      case n.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = u(this.gl, null, t, this._state.indexBuffer);
        break;
      case n.UNIFORM_BUFFER:
        this._state.uniformBuffer = u(this.gl, null, t, this._state.uniformBuffer);
        break;
      case n.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = u(this.gl, null, t, this._state.pixelPackBuffer);
        break;
      case n.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = u(this.gl, null, t, this._state.pixelUnpackBuffer);
        break;
      case n.COPY_READ_BUFFER:
        this._state.copyReadBuffer = u(this.gl, null, t, this._state.copyReadBuffer);
        break;
      case n.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = u(this.gl, null, t, this._state.copyWriteBuffer);
    }
  }
  bindVAO(t = null) {
    t != null ? this._state.vertexArrayObject !== t && (t.bind(), this._state.vertexArrayObject = t) : this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null);
  }
  bindTransformFeedback(t) {
    const { gl: e } = this;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, t.glName);
  }
  beginTransformFeedback(t, e) {
    if (this._transformFeedbackRequestInfo) throw new Error("Already in a transform feedback request");
    const { gl: s } = this;
    s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, t.glName), s.beginTransformFeedback(e), this._transformFeedbackRequestInfo = { primitiveType: e };
  }
  endTransformFeedback() {
    if (!this._transformFeedbackRequestInfo) throw new Error("Not in a transform feedback request");
    const { gl: t } = this;
    t.endTransformFeedback(), t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null), this._transformFeedbackRequestInfo = null;
  }
  async clientWaitAsync(t = rt(10)) {
    const { gl: e } = this, s = e.fenceSync(ot.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!s) throw new Error("Client wait failed, could not create sync object");
    let i;
    this.instanceCounter.increment(B.Sync, s), e.flush();
    do
      await it(t), i = e.clientWaitSync(s, 0, 0);
    while (i === z.TIMEOUT_EXPIRED);
    if (this.instanceCounter.decrement(B.Sync, s), e.deleteSync(s), i === z.WAIT_FAILED) throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(t = d.FRAMEBUFFER) {
    return t === d.READ_FRAMEBUFFER ? this._state.readFramebuffer : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null), this.bindVAO(null), this.bindFramebuffer(null, !0), this.unbindBuffer(n.ARRAY_BUFFER), this.unbindBuffer(n.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(n.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(n.PIXEL_PACK_BUFFER), this.unbindBuffer(n.PIXEL_UNPACK_BUFFER), this.unbindBuffer(n.COPY_READ_BUFFER), this.unbindBuffer(n.COPY_WRITE_BUFFER);
    for (let t = 0; t < this.parameters.maxTextureImageUnits; ++t) this.bindTexture(null, t);
    this.setBlendingEnabled(!1), this.setBlendFunction(p.ONE, p.ZERO), this.setBlendEquation(D.ADD), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(!1), this.setCullFace(R.BACK), this.setFrontFace(Z.CCW), this.setPolygonOffsetFillEnabled(!1), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(!1), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(!1), this.setDepthFunction(x.LESS), this.setDepthRange(0, 1), this.setStencilTestEnabled(!1), this.setStencilFunction(x.ALWAYS, 0, 0), this.setStencilOp(m.KEEP, m.KEEP, m.KEEP), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(!0, !0, !0, !0), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(!0), this.setDrawBuffers([g.BACK]), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    const { gl: t } = this;
    t.bindVertexArray(null);
    for (let s = 0; s < this.parameters.maxVertexAttributes; s++) t.disableVertexAttribArray(s);
    this._state.vertexBuffer ? t.bindBuffer(this._state.vertexBuffer.bufferType, this._state.vertexBuffer.glName) : t.bindBuffer(n.ARRAY_BUFFER, null), this._state.indexBuffer ? t.bindBuffer(this._state.indexBuffer.bufferType, this._state.indexBuffer.glName) : t.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null), this._state.uniformBuffer ? t.bindBuffer(this._state.uniformBuffer.bufferType, this._state.uniformBuffer.glName) : t.bindBuffer(n.UNIFORM_BUFFER, null);
    for (let s = 0; s < this._parameters.maxUniformBufferBindings; s++) {
      const i = this._state.uniformBufferBindingPoints[s];
      if (i != null) {
        const { buffer: r, offset: a, size: l } = i;
        r !== null ? a === 0 && l === 0 ? t.bindBufferBase(n.UNIFORM_BUFFER, s, r.glName) : t.bindBufferRange(n.UNIFORM_BUFFER, s, r.glName, a, l) : t.bindBufferBase(n.UNIFORM_BUFFER, s, null);
      }
    }
    if (this._state.pixelPackBuffer ? t.bindBuffer(this._state.pixelPackBuffer.bufferType, this._state.pixelPackBuffer.glName) : t.bindBuffer(n.PIXEL_PACK_BUFFER, null), this._state.pixelUnpackBuffer ? t.bindBuffer(this._state.pixelUnpackBuffer.bufferType, this._state.pixelUnpackBuffer.glName) : t.bindBuffer(n.PIXEL_UNPACK_BUFFER, null), this._state.copyReadBuffer ? t.bindBuffer(this._state.copyReadBuffer.bufferType, this._state.copyReadBuffer.glName) : t.bindBuffer(n.COPY_READ_BUFFER, null), this._state.copyWriteBuffer ? t.bindBuffer(this._state.copyWriteBuffer.bufferType, this._state.copyWriteBuffer.glName) : t.bindBuffer(n.COPY_WRITE_BUFFER, null), t.bindFramebuffer(d.READ_FRAMEBUFFER, null), t.readBuffer(t.BACK), this._state.readFramebuffer && (t.bindFramebuffer(d.READ_FRAMEBUFFER, this._state.readFramebuffer.glName), t.readBuffer(v.COLOR_ATTACHMENT0)), t.bindFramebuffer(d.DRAW_FRAMEBUFFER, this._state.drawFramebuffer?.glName ?? null), this._state.drawFramebuffer === null) {
      const s = this._state.drawBuffers.defaultFramebuffer;
      t.drawBuffers(s ?? [g.BACK]);
    } else {
      const s = this._state.drawBuffers.fbos.get(this._state.drawFramebuffer);
      t.drawBuffers(s ?? [v.COLOR_ATTACHMENT0]);
    }
    if (this._state.vertexArrayObject) {
      const s = this._state.vertexArrayObject;
      this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null), this.bindVAO(s);
    }
    t.useProgram(this._state.program?.glName ?? null), t.blendColor(this._state.blendColor.r, this._state.blendColor.g, this._state.blendColor.b, this._state.blendColor.a), t.bindRenderbuffer(t.RENDERBUFFER, this._state.renderbuffer?.glName ?? null), this._state.blend === !0 ? t.enable(this.gl.BLEND) : t.disable(this.gl.BLEND), t.blendEquationSeparate(this._state.blendEquation.mode, this._state.blendEquation.modeAlpha), t.blendFuncSeparate(this._state.blendFunction.srcRGB, this._state.blendFunction.dstRGB, this._state.blendFunction.srcAlpha, this._state.blendFunction.dstAlpha), t.clearColor(this._state.clearColor.r, this._state.clearColor.g, this._state.clearColor.b, this._state.clearColor.a), t.clearDepth(this._state.clearDepth), t.clearStencil(this._state.clearStencil), t.colorMask(this._state.colorMask.r, this._state.colorMask.g, this._state.colorMask.b, this._state.colorMask.a), t.cullFace(this._state.cullFace), t.depthFunc(this._state.depthFunction), t.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar), this._state.depthTest === !0 ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), t.depthMask(this._state.depthWrite), t.frontFace(this._state.frontFace), t.lineWidth(1), this._state.faceCulling === !0 ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE), t.polygonOffset(this._state.polygonOffset[0], this._state.polygonOffset[1]), this._state.polygonOffsetFill === !0 ? t.enable(t.POLYGON_OFFSET_FILL) : t.disable(t.POLYGON_OFFSET_FILL), t.scissor(this._state.scissorRect.x, this._state.scissorRect.y, this._state.scissorRect.width, this._state.scissorRect.height), this._state.scissorTest === !0 ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST), t.stencilFunc(this._state.stencilFunction.func, this._state.stencilFunction.ref, this._state.stencilFunction.mask), t.stencilOpSeparate(this._state.stencilOperation.face, this._state.stencilOperation.fail, this._state.stencilOperation.zFail, this._state.stencilOperation.zPass), this._state.stencilTest === !0 ? t.enable(t.STENCIL_TEST) : t.disable(t.STENCIL_TEST), t.stencilMask(this._state.stencilWriteMask);
    for (let s = 0; s < this.parameters.maxTextureImageUnits; s++) {
      t.activeTexture(M + s), t.bindTexture(A.TEXTURE_2D, null), t.bindTexture(A.TEXTURE_CUBE_MAP, null), t.bindTexture(A.TEXTURE_3D, null), t.bindTexture(A.TEXTURE_2D_ARRAY, null);
      const i = this._state.textureUnitMap[s];
      i != null && t.bindTexture(i.descriptor.target, i.glName);
    }
    t.activeTexture(M + this._state.activeTexture);
    const e = this._state.viewport;
    t.viewport(e.x, e.y, e.width, e.height), this.resetInfo();
  }
  _loadExtensions() {
    this.gl.getExtension("KHR_parallel_shader_compile");
  }
};
function u(t, e, s, i) {
  return e ? i !== e && t.bindBuffer(s, e.glName) : t.bindBuffer(s, null), e;
}
function j(t, e) {
  switch (t) {
    case E.POINTS:
      return 2 * e;
    case E.TRIANGLES:
      return e / 3;
    case E.TRIANGLE_STRIP:
    case E.TRIANGLE_FAN:
      return e - 2;
    default:
      return 0;
  }
}
export {
  $t as o,
  Kt as y
};
//# sourceMappingURL=RenderingContext-BH0S1gLs.js.map
