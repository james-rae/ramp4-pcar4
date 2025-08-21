import { s as H, dK as $, lR as ie, ag as re, fL as L, dG as Y, aD as ne, aF as ae, aG as I, a5 as j, cC as oe, dE as v, m6 as Q, gh as ce, cr as he, D as fe, fk as ue } from "./main-DHXLMse1.js";
import { N as le, T as de } from "./quat-ozZGdQ_z.js";
import { o as me, r as _e, e as pe } from "./quatf64-DxbQqBtW.js";
import { m as ge } from "./Mesh-CKyYPR5S.js";
import { M as we } from "./vertexSpaceConversion-DbuJwMvi.js";
import { C as _, D as b } from "./enums-DDkmfb-t.js";
import { r as U } from "./resourceUtils-CJo0rpDH.js";
function Ae(i) {
  const e = q(i);
  return e != null ? e.toDataURL() : "";
}
async function K(i, e) {
  const t = q(i);
  if (t == null) throw new H("imageToArrayBuffer", "Unsupported image type");
  const s = Te(i), r = await new Promise((a) => t.toBlob(a, s));
  if ($(e), !r) throw new H("imageToArrayBuffer", "Failed to encode image");
  const n = await r.arrayBuffer();
  return $(e), { data: n, type: s };
}
function Te(i) {
  if (!(i instanceof HTMLImageElement)) return "image/png";
  const e = i.src;
  if (ie(e)) {
    const t = re(e);
    return t?.mediaType === "image/jpeg" ? t.mediaType : "image/png";
  }
  return /\.png$/i.test(e) ? "image/png" : /\.(jpg|jpeg)$/i.test(e) ? "image/jpeg" : "image/png";
}
function q(i) {
  if (i instanceof HTMLCanvasElement) return i;
  if (i instanceof HTMLVideoElement) return null;
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const t = e.getContext("2d");
  return i instanceof HTMLImageElement ? t.drawImage(i, 0, 0, i.width, i.height) : i instanceof ImageData && t.putImageData(i, 0, 0), e;
}
function be(i) {
  const e = [], t = new Uint8Array(i);
  for (let s = 0; s < t.length; s++) e.push(String.fromCharCode(t[s]));
  return "data:application/octet-stream;base64," + btoa(e.join(""));
}
function Ee(i) {
  if (i.byteLength < 8) return !1;
  const e = new Uint8Array(i);
  return e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e[4] === 13 && e[5] === 10 && e[6] === 26 && e[7] === 10;
}
var C;
(function(i) {
  i[i.JSON = 1313821514] = "JSON", i[i.BIN = 5130562] = "BIN";
})(C || (C = {}));
let M = class N {
  constructor(e, t) {
    if (!e) throw new Error("GLB requires a JSON gltf chunk");
    this._length = N.HEADER_SIZE, this._length += N.CHUNK_HEADER_SIZE;
    const s = Re(e);
    if (this._length += J(s.byteLength, 4), t && (this._length += N.CHUNK_HEADER_SIZE, this._length += t.byteLength, t.byteLength % 4)) throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const r = this._writeChunk(s, 12, C.JSON, 32);
    t && this._writeChunk(t, r, C.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, N.MAGIC, !0), this._outView.setUint32(4, N.VERSION, !0), this._outView.setUint32(8, this._length, !0);
  }
  _writeChunk(e, t, s, r = 0) {
    const n = J(e.byteLength, 4);
    for (this._outView.setUint32(t, n, !0), this._outView.setUint32(t += 4, s, !0), ye(this._outView.buffer, e, t += 4, 0, e.byteLength), t += e.byteLength; t % 4; ) r && this._outView.setUint8(t, r), t++;
    return t;
  }
};
function ye(i, e, t, s, r) {
  new Uint8Array(i, t, r).set(new Uint8Array(e, s, r), 0);
}
function Re(i) {
  return new TextEncoder().encode(i).buffer;
}
function J(i, e) {
  return e * Math.ceil(i / e);
}
M.HEADER_SIZE = 12, M.CHUNK_HEADER_SIZE = 8, M.MAGIC = 1179937895, M.VERSION = 2;
var R, E, y, g, W, O, X;
(function(i) {
  i[i.External = 0] = "External", i[i.DataURI = 1] = "DataURI", i[i.GLB = 2] = "GLB";
})(R || (R = {})), function(i) {
  i[i.External = 0] = "External", i[i.DataURI = 1] = "DataURI", i[i.GLB = 2] = "GLB";
}(E || (E = {})), function(i) {
  i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(y || (y = {})), function(i) {
  i.SCALAR = "SCALAR", i.VEC2 = "VEC2", i.VEC3 = "VEC3", i.VEC4 = "VEC4", i.MAT2 = "MAT2", i.MAT3 = "MAT3", i.MAT4 = "MAT4";
}(g || (g = {})), function(i) {
  i[i.POINTS = 0] = "POINTS", i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(W || (W = {})), function(i) {
  i.OPAQUE = "OPAQUE", i.MASK = "MASK", i.BLEND = "BLEND";
}(O || (O = {})), function(i) {
  i[i.NoColor = 0] = "NoColor", i[i.FaceColor = 1] = "FaceColor", i[i.VertexColor = 2] = "VertexColor";
}(X || (X = {}));
let xe = class {
  constructor(e, t, s, r, n) {
    this._buffer = e, this._componentType = s, this._dataType = r, this._data = [], this._isFinalized = !1, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, t.bufferViews || (t.bufferViews = []), this.index = t.bufferViews.length, this._bufferView = { buffer: e.index, byteLength: -1, target: n };
    const a = this._getElementSize();
    a >= 4 && n !== y.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a), t.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e) {
    const t = this._data.length;
    if (this._data.push(e), this._accessorIndex >= 0) {
      const s = t % this._numComponentsForDataType, r = this._accessorMin[s];
      this._accessorMin[s] = typeof r != "number" ? e : Math.min(r, e);
      const n = this._accessorMax[s];
      this._accessorMax[s] = typeof n != "number" ? e : Math.max(n, e);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e(t, s) {
      return s * Math.ceil(t / s);
    }
    return e(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e, t) {
    switch (this._componentType) {
      case _.BYTE:
        return new Int8Array(e, t);
      case _.FLOAT:
        return new Float32Array(e, t);
      case _.SHORT:
        return new Int16Array(e, t);
      case _.UNSIGNED_BYTE:
        return new Uint8Array(e, t);
      case _.UNSIGNED_INT:
        return new Uint32Array(e, t);
      case _.UNSIGNED_SHORT:
        return new Uint16Array(e, t);
    }
  }
  writeOutToBuffer(e, t) {
    this._createTypedArray(e, t).set(this._data);
  }
  writeAsync(e) {
    if (this._asyncWritePromise) throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e.then((t) => {
      const s = new Uint8Array(t);
      for (let r = 0; r < s.length; ++r) this._data.push(s[r]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e) {
    if (this._accessorIndex >= 0) throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e;
    const t = this._numComponentsForDataType;
    this._accessorMin = new Array(t), this._accessorMax = new Array(t);
  }
  endAccessor() {
    if (this._accessorIndex < 0) throw new Error("An accessor was not started, but was attempted to be ended");
    const e = this._getElementSize(), t = this._numComponentsForDataType, s = (this._data.length - this._accessorIndex) / t;
    if (s % 1) throw new Error("An accessor was ended with missing component values");
    for (let n = 0; n < this._accessorMin.length; ++n) typeof this._accessorMin[n] != "number" && (this._accessorMin[n] = 0), typeof this._accessorMax[n] != "number" && (this._accessorMax[n] = 0);
    const r = { byteOffset: e * (this._accessorIndex / t), componentType: this._componentType, count: s, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case _.UNSIGNED_BYTE:
          case _.UNSIGNED_SHORT:
            r.normalized = !0;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e) => this._finalizedPromiseResolve = e);
  }
  async finalize() {
    const e = this._bufferView, t = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t.push(this._asyncWritePromise), await Promise.allSettled(t), this._isFinalized = !0, e.byteOffset = this.getByteOffset(), e.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case _.BYTE:
      case _.UNSIGNED_BYTE:
        return 1;
      case _.SHORT:
      case _.UNSIGNED_SHORT:
        return 2;
      case _.UNSIGNED_INT:
      case _.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case g.SCALAR:
        return 1;
      case g.VEC2:
        return 2;
      case g.VEC3:
        return 3;
      case g.VEC4:
      case g.MAT2:
        return 4;
      case g.MAT3:
        return 9;
      case g.MAT4:
        return 16;
    }
  }
}, Z = class {
  constructor(e) {
    this._gltf = e, this._bufferViews = [], this._isFinalized = !1, e.buffers || (e.buffers = []), this.index = e.buffers.length;
    const t = { byteLength: -1 };
    e.buffers.push(t), this._buffer = t;
  }
  addBufferView(e, t, s) {
    if (this._finalizePromise) throw new Error("Cannot add buffer view after fiinalizing buffer");
    const r = new xe(this, this._gltf, e, t, s);
    return this._bufferViews.push(r), r;
  }
  getByteOffset(e) {
    let t = 0;
    for (const s of this._bufferViews) {
      if (s === e) return t;
      t += s.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e) {
    const t = [];
    for (const s of this._bufferViews) {
      if (e && s === e) return t;
      t.push(s.finalized);
    }
    return t;
  }
  getArrayBuffer() {
    if (!this._isFinalized) throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e = this._getTotalSize(), t = new ArrayBuffer(e);
    let s = 0;
    for (const r of this._bufferViews) r.writeOutToBuffer(t, s), s += r.byteSize;
    return t;
  }
  finalize() {
    if (this._finalizePromise) throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = !0;
      const e = this.getArrayBuffer();
      this._buffer.byteLength = e.byteLength, this._buffer.uri = e;
    }), this._gltf.extras.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e = 0;
    for (const t of this._bufferViews) e += t.byteSize;
    return e;
  }
};
function Ne(i, e) {
  if (i.components) for (const t of i.components) t.faces && t.shading === "smooth" && Me(t, e);
}
function Me(i, e) {
  e.normal == null && (e.normal = new Float32Array(e.position.length));
  const t = i.faces, { position: s, normal: r } = e, n = t.length / 3;
  for (let a = 0; a < n; ++a) {
    const o = 3 * t[3 * a], c = 3 * t[3 * a + 1], h = 3 * t[3 * a + 2], u = L(Ie, s[o], s[o + 1], s[o + 2]), p = L(Se, s[c], s[c + 1], s[c + 2]), l = L(Le, s[h], s[h + 1], s[h + 2]), w = Y(p, p, u), d = Y(l, l, u), m = ne(w, w, d);
    r[o] += m[0], r[o + 1] += m[1], r[o + 2] += m[2], r[c] += m[0], r[c + 1] += m[1], r[c + 2] += m[2], r[h] += m[0], r[h + 1] += m[1], r[h + 2] += m[2];
  }
  for (let a = 0; a < r.length; a += 3) L(x, r[a], r[a + 1], r[a + 2]), ae(x, x), r[a] = x[0], r[a + 1] = x[1], r[a + 2] = x[2];
}
const Ie = I(), Se = I(), Le = I(), x = I(), P = () => fe.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");
class Ce {
  constructor(e, t) {
    this.options = t, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e.copyright, generator: e.generator }, extras: { output: t.output, binChunkBuffer: null, promises: [] } }, this._addScenes(e);
  }
  _addScenes(e) {
    this.gltf.scene = e.defaultScene;
    const t = this.gltf.extras, s = t.output.buffer === R.GLB || t.output.image === E.GLB;
    s && (t.binChunkBuffer = new Z(this.gltf)), e.forEachScene((r) => {
      this._addScene(r);
    }), s && t.binChunkBuffer.finalize();
  }
  _addScene(e) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t = {};
    e.name && (t.name = e.name), e.forEachNode((s) => {
      t.nodes || (t.nodes = []), t.nodes.push(...this._addNodes(s));
    }), this.gltf.scenes.push(t);
  }
  _addNodes(e) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t = {};
    e.name && (t.name = e.name);
    const s = e.translation;
    j(s, oe) || (t.translation = v(s));
    const r = e.rotation;
    le(r, me) || (t.rotation = _e(r));
    const n = e.scale;
    j(n, Q) || (t.scale = v(n));
    const a = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t), e.mesh && e.mesh.vertexAttributes.position) {
      const o = this._createMeshes(e.mesh), c = [a];
      if (o.length === 1) this._addMesh(t, o[0]);
      else for (const h of o) {
        const u = {};
        this._addMesh(u, h), c.push(this.gltf.nodes.length), this.gltf.nodes.push(u);
      }
      return c;
    }
    return e.forEachNode((o) => {
      t.children || (t.children = []), t.children.push(...this._addNodes(o));
    }), [a];
  }
  _addMesh(e, t) {
    this.gltf.meshes ??= [];
    const s = this.gltf.meshes.length;
    this.gltf.meshes.push(t), e.mesh = s;
  }
  _createMeshes(e) {
    const t = this.gltf.extras, s = t.output.buffer === R.GLB;
    let r;
    r = s ? t.binChunkBuffer : new Z(this.gltf);
    const n = this.options.origin, a = e.vertexSpace.clone();
    a.origin = [n.x, n.y, n.z ?? 0];
    const o = we({ vertexAttributes: e.vertexAttributes, vertexSpace: e.vertexSpace, transform: this.options?.ignoreLocalTransform ? null : e.transform, spatialReference: e.spatialReference }, a, { targetUnit: "meters" });
    if (!o) return [];
    Ne(e, o), Oe(o);
    const { position: c, normal: h, tangent: u } = o, { uv: p, color: l } = e.vertexAttributes, w = r.addBufferView(_.FLOAT, g.VEC3, y.ARRAY_BUFFER);
    let d, m, A, T;
    h && (d = r.addBufferView(_.FLOAT, g.VEC3, y.ARRAY_BUFFER)), p && (m = r.addBufferView(_.FLOAT, g.VEC2, y.ARRAY_BUFFER)), u && (A = r.addBufferView(_.FLOAT, g.VEC4, y.ARRAY_BUFFER)), l && (T = r.addBufferView(_.UNSIGNED_BYTE, g.VEC4, y.ARRAY_BUFFER)), w.startAccessor("POSITION"), d && d.startAccessor("NORMAL"), m && m.startAccessor("TEXCOORD_0"), A && A.startAccessor("TANGENT"), T && T.startAccessor("COLOR_0");
    const te = o.position.length / 3;
    for (let f = 0; f < te; ++f) w.push(c[3 * f]), w.push(c[3 * f + 1]), w.push(c[3 * f + 2]), d && h != null && (d.push(h[3 * f]), d.push(h[3 * f + 1]), d.push(h[3 * f + 2])), m && p != null && (m.push(p[2 * f]), m.push(p[2 * f + 1])), A && u != null && (A.push(u[4 * f]), A.push(u[4 * f + 1]), A.push(u[4 * f + 2]), A.push(u[4 * f + 3])), T && l != null && (T.push(l[4 * f]), T.push(l[4 * f + 1]), T.push(l[4 * f + 2]), T.push(l[4 * f + 3]));
    const se = w.endAccessor(), k = this._addAccessor(w.index, se);
    let B, V, z, F, S;
    if (d) {
      const f = d.endAccessor();
      B = this._addAccessor(d.index, f);
    }
    if (m) {
      const f = m.endAccessor();
      V = this._addAccessor(m.index, f);
    }
    if (A) {
      const f = A.endAccessor();
      z = this._addAccessor(A.index, f);
    }
    if (T) {
      const f = T.endAccessor();
      F = this._addAccessor(T.index, f);
    }
    const D = [];
    return e.components && e.components.length > 0 && e.components[0].faces ? (S = r.addBufferView(_.UNSIGNED_INT, g.SCALAR, y.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(S, e.components, D, k, B, V, z, F)) : this._addMeshVertexNonIndexed(e.components, D, k, B, V, z, F), w.finalize(), d && d.finalize(), m && m.finalize(), A && A.finalize(), S && S.finalize(), T && T.finalize(), s || r.finalize(), D;
  }
  _addMaterial(e) {
    if (e === null) return;
    const t = this._materialMap.indexOf(e);
    if (t !== -1) return t;
    this.gltf.materials || (this.gltf.materials = []);
    const s = {};
    switch (e.alphaMode) {
      case "mask":
        s.alphaMode = O.MASK;
        break;
      case "auto":
      case "blend":
        s.alphaMode = O.BLEND;
    }
    e.alphaCutoff !== 0.5 && (s.alphaCutoff = e.alphaCutoff), e.doubleSided && (s.doubleSided = e.doubleSided), s.pbrMetallicRoughness = {};
    const r = (o) => o ** 2.1, n = (o) => {
      const c = o.toRgba();
      return c[0] = r(c[0] / 255), c[1] = r(c[1] / 255), c[2] = r(c[2] / 255), c;
    };
    if (e.color != null && (s.pbrMetallicRoughness.baseColorFactor = n(e.color)), e.colorTexture != null && (s.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e.colorTexture, e.colorTextureTransform)), e.normalTexture != null && (s.normalTexture = this._createTextureInfo(e.normalTexture, e.normalTextureTransform)), e instanceof ge) {
      if (e.emissiveTexture != null && (s.emissiveTexture = this._createTextureInfo(e.emissiveTexture, e.emissiveTextureTransform)), e.emissiveColor != null) {
        const o = n(e.emissiveColor);
        s.emissiveFactor = [o[0], o[1], o[2]];
      }
      e.occlusionTexture != null && (s.occlusionTexture = this._createTextureInfo(e.occlusionTexture, e.occlusionTextureTransform)), e.metallicRoughnessTexture != null && (s.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e.metallicRoughnessTexture, e.metallicRoughnessTextureTransform)), s.pbrMetallicRoughness.metallicFactor = e.metallic, s.pbrMetallicRoughness.roughnessFactor = e.roughness;
    } else s.pbrMetallicRoughness.metallicFactor = 1, s.pbrMetallicRoughness.roughnessFactor = 1, P().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const a = this.gltf.materials.length;
    return this.gltf.materials.push(s), this._materialMap.push(e), a;
  }
  _createTextureInfo(e, t) {
    const s = { index: this._addTexture(e) };
    return t && (s.extensions || (s.extensions = {}), s.extensions.KHR_texture_transform = { scale: t.scale, offset: t.offset, rotation: ce(t.rotation) }), s;
  }
  _addTexture(e) {
    const t = this.gltf.textures ?? [];
    return this.gltf.textures = t, he(this._textureMap, e, () => {
      const s = { sampler: this._addSampler(e), source: this._addImage(e) }, r = t.length;
      return t.push(s), r;
    });
  }
  _addImage(e) {
    const t = this._imageMap.get(e);
    if (t != null) return t;
    this.gltf.images || (this.gltf.images = []);
    const s = {};
    if (e.url) s.uri = e.url;
    else {
      const n = e.data;
      s.extras = n;
      for (let o = 0; o < this.gltf.images.length; ++o) if (n === this.gltf.images[o].extras) return o;
      const a = this.gltf.extras;
      switch (a.output.image) {
        case E.GLB: {
          const o = a.binChunkBuffer.addBufferView(_.UNSIGNED_BYTE, g.SCALAR);
          if (U(n)) n.data != null && o.writeOutToBuffer(n.data, 0);
          else {
            const c = K(n, this.options.signal).then(({ data: h, type: u }) => (s.mimeType = u, h));
            a.promises.push(o.writeAsync(c).then(() => {
              o.finalize();
            }));
          }
          s.bufferView = o.index;
          break;
        }
        case E.DataURI:
          if (U(n)) {
            P().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s.uri = Ae(n);
          break;
        default:
          if (U(n)) {
            P().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          a.promises.push(K(n, this.options.signal).then(({ data: o, type: c }) => {
            s.uri = o, s.mimeType = c;
          }));
      }
    }
    const r = this.gltf.images.length;
    return this.gltf.images.push(s), this._imageMap.set(e, r), r;
  }
  _addSampler(e) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t = b.REPEAT, s = b.REPEAT;
    if (typeof e.wrap == "string") switch (e.wrap) {
      case "clamp":
        t = b.CLAMP_TO_EDGE, s = b.CLAMP_TO_EDGE;
        break;
      case "mirror":
        t = b.MIRRORED_REPEAT, s = b.MIRRORED_REPEAT;
    }
    else {
      switch (e.wrap.vertical) {
        case "clamp":
          s = b.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s = b.MIRRORED_REPEAT;
      }
      switch (e.wrap.horizontal) {
        case "clamp":
          t = b.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t = b.MIRRORED_REPEAT;
      }
    }
    const r = { wrapS: t, wrapT: s };
    for (let a = 0; a < this.gltf.samplers.length; ++a) if (JSON.stringify(r) === JSON.stringify(this.gltf.samplers[a])) return a;
    const n = this.gltf.samplers.length;
    return this.gltf.samplers.push(r), n;
  }
  _addAccessor(e, t) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s = { bufferView: e, byteOffset: t.byteOffset, componentType: t.componentType, count: t.count, type: t.type, min: t.min, max: t.max, name: t.name };
    t.normalized && (s.normalized = !0);
    const r = this.gltf.accessors.length;
    return this.gltf.accessors.push(s), r;
  }
  _addMeshVertexIndexed(e, t, s, r, n, a, o, c) {
    const h = /* @__PURE__ */ new Map();
    for (const u of t) {
      e.startAccessor("INDICES");
      for (let d = 0; d < u.faces.length; ++d) e.push(u.faces[d]);
      const p = e.endAccessor(), l = { attributes: { POSITION: r }, indices: this._addAccessor(e.index, p), material: this._addMaterial(u.material) };
      n && u.shading !== "flat" && (l.attributes.NORMAL = n), a && (l.attributes.TEXCOORD_0 = a), o && u.shading !== "flat" && (l.attributes.TANGENT = o), c && (l.attributes.COLOR_0 = c);
      const w = h.get(u.name);
      if (w) w.primitives.push(l);
      else {
        const d = { name: u.name, primitives: [l] };
        h.set(u.name, d), s.push(d);
      }
    }
  }
  _addMeshVertexNonIndexed(e, t, s, r, n, a, o) {
    const c = { primitives: [] };
    t.push(c);
    const h = { attributes: { POSITION: s } };
    r && (h.attributes.NORMAL = r), n && (h.attributes.TEXCOORD_0 = n), a && (h.attributes.TANGENT = a), o && (h.attributes.COLOR_0 = o), e && (h.material = this._addMaterial(e[0].material)), c.primitives.push(h);
  }
}
function Oe({ position: i, normal: e, tangent: t }) {
  G(i, 3), G(e, 3), G(t, 4);
}
function G(i, e) {
  if (i != null) for (let t = 1, s = 2; t < i.length; t += e, s += e) {
    const r = i[t], n = i[s];
    i[t] = n, i[s] = -r;
  }
}
class Be {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e) {
    if (this._scenes.includes(e)) throw new Error("Scene already added");
    this._scenes.push(e);
  }
  removeScene(e) {
    ue(this._scenes, e);
  }
  forEachScene(e) {
    this._scenes.forEach(e);
  }
}
class Ve {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(e) {
    if (this._nodes.includes(e)) throw new Error("Node already added");
    this._nodes.push(e);
  }
  forEachNode(e) {
    this._nodes.forEach(e);
  }
}
class ze {
  constructor(e) {
    this.mesh = e, this.name = "", this.translation = I(), this.rotation = pe(), this.scale = v(Q), this._nodes = [];
  }
  addNode(e) {
    if (this._nodes.includes(e)) throw new Error("Node already added");
    this._nodes.push(e);
  }
  forEachNode(e) {
    this._nodes.forEach(e);
  }
  set rotationAngles(e) {
    de(this.rotation, e[0], e[1], e[2]);
  }
}
const Fe = "model.gltf", ee = "model.glb";
async function De(i, e) {
  const t = new Ce(i, e).gltf, s = t.extras.promises;
  let r = 1, n = 1, a = null;
  await Promise.allSettled(s), $(e.signal);
  const o = e.jsonSpacing ?? 4, c = /* @__PURE__ */ new Map(), h = JSON.stringify(t, (u, p) => {
    if (u !== "extras") {
      if (p instanceof ArrayBuffer) {
        if (Ee(p)) switch (e.output?.image) {
          case E.DataURI:
          case E.GLB:
            break;
          case E.External:
          default: {
            const l = `img${n}.png`;
            return n++, c.set(l, p), l;
          }
        }
        switch (e.output?.buffer) {
          case R.DataURI:
            return be(p);
          case R.GLB:
            if (a) throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (a = p);
          case R.External:
          default: {
            const l = `data${r}.bin`;
            return r++, c.set(l, p), l;
          }
        }
      }
      return p;
    }
  }, o);
  return e.output?.buffer === R.GLB || e.output?.image === E.GLB ? c.set(ee, new M(h, a).buffer) : c.set(Fe, h), c;
}
async function Ue(i, e) {
  const t = (await De(i, { output: { buffer: R.GLB, image: E.GLB }, jsonSpacing: 0, ...e })).get(ee);
  if (!(t && t instanceof ArrayBuffer)) throw new Error("failed to export to glb");
  return t;
}
async function Je(i, e) {
  const t = new Be(), s = new Ve();
  return t.addScene(s), s.addNode(new ze(i)), await Ue(t, { origin: i.origin, ...e });
}
export {
  Je as toBinaryGLTF
};
//# sourceMappingURL=gltfexport-BoWWGTco.js.map
