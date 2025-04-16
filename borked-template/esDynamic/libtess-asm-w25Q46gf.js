import { v as P4 } from "./main-9SanlBxi.js";
function U4(M2, W2) {
  for (var v2 = 0; v2 < W2.length; v2++) {
    const E = W2[v2];
    if (typeof E != "string" && !Array.isArray(E)) {
      for (const d2 in E) if (d2 !== "default" && !(d2 in M2)) {
        const P2 = Object.getOwnPropertyDescriptor(E, d2);
        P2 && Object.defineProperty(M2, d2, P2.get ? P2 : { enumerable: !0, get: () => E[d2] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(M2, Symbol.toStringTag, { value: "Module" }));
}
var d1, S0, h1, y1 = { exports: {} };
d1 = y1, S0 = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, h1 = function(M2 = {}) {
  var W2, v2, E = M2;
  E.ready = new Promise((p, C) => {
    W2 = p, v2 = C;
  });
  var d2 = Object.assign({}, E), P2 = typeof window == "object", Y2 = typeof importScripts == "function";
  typeof process == "object" && typeof process.versions == "object" && process.versions.node;
  var o0, l2 = "";
  function p1(p) {
    return E.locateFile ? E.locateFile(p, l2) : l2 + p;
  }
  (P2 || Y2) && (Y2 ? l2 = self.location.href : typeof document < "u" && document.currentScript && (l2 = document.currentScript.src), S0 && (l2 = S0), l2 = l2.indexOf("blob:") !== 0 ? l2.substr(0, l2.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Y2 && (o0 = (p) => {
    var C = new XMLHttpRequest();
    return C.open("GET", p, !1), C.responseType = "arraybuffer", C.send(null), new Uint8Array(C.response);
  }));
  var U2, m1 = E.print || console.log.bind(console), _2 = E.printErr || console.error.bind(console);
  Object.assign(E, d2), d2 = null, E.arguments && E.arguments, E.thisProgram && E.thisProgram, E.quit && E.quit, E.wasmBinary && (U2 = E.wasmBinary);
  var F2, h2 = { Memory: function(p) {
    this.buffer = new ArrayBuffer(65536 * p.initial);
  }, Module: function(p) {
  }, Instance: function(p, C) {
    this.exports = function(Q) {
      function U(K) {
        return K.set = function(V, t2) {
          this[V] = t2;
        }, K.get = function(V) {
          return this[V];
        }, K;
      }
      for (var F, H = new Uint8Array(123), D = 25; D >= 0; --D) H[48 + D] = 52 + D, H[65 + D] = D, H[97 + D] = 26 + D;
      function x(K, V, t2) {
        for (var a2, d, n2 = 0, i = V, w = t2.length, G2 = V + (3 * w >> 2) - (t2[w - 2] == "=") - (t2[w - 1] == "="); n2 < w; n2 += 4) a2 = H[t2.charCodeAt(n2 + 1)], d = H[t2.charCodeAt(n2 + 2)], K[i++] = H[t2.charCodeAt(n2)] << 2 | a2 >> 4, i < G2 && (K[i++] = a2 << 4 | d >> 2), i < G2 && (K[i++] = d << 6 | H[t2.charCodeAt(n2 + 3)]);
      }
      function e2(K) {
        x(F, 1024, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"), x(F, 1136, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk="), x(F, 1217, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO"), x(F, 1275, "DA=="), x(F, 1287, "EwAAAAATAAAAAAkMAAAAAAAMAAAM"), x(F, 1333, "EA=="), x(F, 1345, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ"), x(F, 1391, "Eg=="), x(F, 1403, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa"), x(F, 1458, "GgAAABoaGgAAAAAAAAk="), x(F, 1507, "FA=="), x(F, 1519, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU"), x(F, 1565, "Fg=="), x(F, 1577, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG"), x(F, 1616, "BQ=="), x(F, 1628, "JQ=="), x(F, 1652, "JgAAACcAAACYCAAAAAQ="), x(F, 1676, "AQ=="), x(F, 1692, "/////wo="), x(F, 1760, "YI8=");
      }
      H[43] = 62, H[47] = 63;
      var y2 = new ArrayBuffer(16), $2 = new Int32Array(y2), X2 = new Float64Array(y2);
      function c2(K) {
        return $2[K];
      }
      function L0(K, V) {
        $2[K] = V;
      }
      function K1() {
        return X2[0];
      }
      function u0(K) {
        X2[0] = K;
      }
      function b2() {
        throw new Error("abort");
      }
      function q1(K) {
        var V = K.a, t2 = V.a, a2 = t2.buffer;
        t2.grow = M4;
        var d = new Int8Array(a2), n2 = new Int16Array(a2), i = new Int32Array(a2), w = new Uint8Array(a2), G2 = new Uint16Array(a2), i0 = new Uint32Array(a2), c = new Float32Array(a2), q = new Float64Array(a2), L = Math.imul, u = Math.fround, $1 = Math.abs, s2 = Math.clz32, I2 = V.b, f0 = V.c, Y0 = V.d, Z0 = V.e, X1 = V.f, i4 = V.g, f4 = V.h, a4 = V.i, _ = 36704, W = 0, r2 = 0;
        function j(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, h = 0;
          _ = l = _ - 16 | 0;
          i: {
            f: {
              a: {
                n: {
                  e: {
                    t: {
                      u: {
                        o: {
                          b: {
                            if ((n |= 0) >>> 0 <= 244) {
                              if (3 & (f = (o = i[854]) >>> (a = (k = n >>> 0 < 11 ? 16 : n + 11 & 504) >>> 3 | 0) | 0)) {
                                f = 3456 + (n = (a = a + (1 & (-1 ^ f)) | 0) << 3) | 0, e = i[n + 3464 >> 2], (0 | f) != (0 | (n = i[e + 8 >> 2])) ? (i[n + 12 >> 2] = f, i[f + 8 >> 2] = n) : (v = 3416, h = i2(a) & o, i[v >> 2] = h), n = e + 8 | 0, f = a << 3, i[e + 4 >> 2] = 3 | f, i[4 + (f = f + e | 0) >> 2] = 1 | i[f + 4 >> 2];
                                break i;
                              }
                              if ((A = i[856]) >>> 0 >= k >>> 0) break b;
                              if (f) {
                                f = 3456 + (n = (e = e0((0 - (n = 2 << a) | n) & f << a)) << 3) | 0, t = i[n + 3464 >> 2], (0 | f) != (0 | (n = i[t + 8 >> 2])) ? (i[n + 12 >> 2] = f, i[f + 8 >> 2] = n) : (o = i2(e) & o, i[854] = o), i[t + 4 >> 2] = 3 | k, e = (n = e << 3) - k | 0, i[4 + (a = t + k | 0) >> 2] = 1 | e, i[n + t >> 2] = e, A && (f = 3456 + (-8 & A) | 0, b = i[859], (n = 1 << (A >>> 3)) & o ? n = i[f + 8 >> 2] : (i[854] = n | o, n = f), i[f + 8 >> 2] = b, i[n + 12 >> 2] = b, i[b + 12 >> 2] = f, i[b + 8 >> 2] = n), n = t + 8 | 0, i[859] = a, i[856] = e;
                                break i;
                              }
                              if (!(r = i[855])) break b;
                              for (a = i[3720 + (e0(r) << 2) >> 2], t = (-8 & i[a + 4 >> 2]) - k | 0, f = a; (n = i[f + 16 >> 2]) || (n = i[f + 20 >> 2]); ) t = (e = (f = (-8 & i[n + 4 >> 2]) - k | 0) >>> 0 < t >>> 0) ? f : t, a = e ? n : a, f = n;
                              if (s = i[a + 24 >> 2], (0 | (e = i[a + 12 >> 2])) != (0 | a)) {
                                n = i[a + 8 >> 2], i[n + 12 >> 2] = e, i[e + 8 >> 2] = n;
                                break f;
                              }
                              if (!(n = i[(f = a + 20 | 0) >> 2])) {
                                if (!(n = i[a + 16 >> 2])) break o;
                                f = a + 16 | 0;
                              }
                              for (; b = f, e = n, (n = i[(f = n + 20 | 0) >> 2]) || (f = e + 16 | 0, n = i[e + 16 >> 2]); ) ;
                              i[b >> 2] = 0;
                              break f;
                            }
                            if (k = -1, !(n >>> 0 > 4294967231) && (k = -8 & (n = n + 11 | 0), r = i[855])) {
                              t = 0 - k | 0, o = 0, k >>> 0 < 256 || (o = 31, k >>> 0 > 16777215 || (o = 62 + ((k >>> 38 - (n = s2(n >>> 8 | 0)) & 1) - (n << 1) | 0) | 0));
                              k: {
                                c: {
                                  if (f = i[3720 + (o << 2) >> 2]) for (n = 0, a = k << ((0 | o) != 31 ? 25 - (o >>> 1 | 0) | 0 : 0); ; ) {
                                    if (!((b = (-8 & i[f + 4 >> 2]) - k | 0) >>> 0 >= t >>> 0 || (e = f, t = b))) {
                                      t = 0, n = f;
                                      break c;
                                    }
                                    if (b = i[f + 20 >> 2], f = i[16 + ((a >>> 29 & 4) + f | 0) >> 2], n = b ? (0 | b) == (0 | f) ? n : b : n, a <<= 1, !f) break;
                                  }
                                  else n = 0;
                                  if (!(n | e)) {
                                    if (e = 0, !(n = (0 - (n = 2 << o) | n) & r)) break b;
                                    n = i[3720 + (e0(n) << 2) >> 2];
                                  }
                                  if (!n) break k;
                                }
                                for (; t = (a = (f = (-8 & i[n + 4 >> 2]) - k | 0) >>> 0 < t >>> 0) ? f : t, e = a ? n : e, n = (f = i[n + 16 >> 2]) || i[n + 20 >> 2]; ) ;
                              }
                              if (!(!e | i[856] - k >>> 0 <= t >>> 0)) {
                                if (o = i[e + 24 >> 2], (0 | e) != (0 | (a = i[e + 12 >> 2]))) {
                                  n = i[e + 8 >> 2], i[n + 12 >> 2] = a, i[a + 8 >> 2] = n;
                                  break a;
                                }
                                if (!(n = i[(f = e + 20 | 0) >> 2])) {
                                  if (!(n = i[e + 16 >> 2])) break u;
                                  f = e + 16 | 0;
                                }
                                for (; b = f, a = n, (n = i[(f = n + 20 | 0) >> 2]) || (f = a + 16 | 0, n = i[a + 16 >> 2]); ) ;
                                i[b >> 2] = 0;
                                break a;
                              }
                            }
                          }
                          if ((n = i[856]) >>> 0 >= k >>> 0) {
                            e = i[859], (f = n - k | 0) >>> 0 >= 16 ? (i[4 + (a = e + k | 0) >> 2] = 1 | f, i[n + e >> 2] = f, i[e + 4 >> 2] = 3 | k) : (i[e + 4 >> 2] = 3 | n, i[4 + (n = n + e | 0) >> 2] = 1 | i[n + 4 >> 2], a = 0, f = 0), i[856] = f, i[859] = a, n = e + 8 | 0;
                            break i;
                          }
                          if ((s = i[857]) >>> 0 > k >>> 0) {
                            f = s - k | 0, i[857] = f, n = (a = i[860]) + k | 0, i[860] = n, i[n + 4 >> 2] = 1 | f, i[a + 4 >> 2] = 3 | k, n = a + 8 | 0;
                            break i;
                          }
                          if (n = 0, t = k + 47 | 0, i[972] ? a = i[974] : (i[975] = -1, i[976] = -1, i[973] = 4096, i[974] = 4096, i[972] = l + 12 & -16 ^ 1431655768, i[977] = 0, i[965] = 0, a = 4096), (f = (o = t + a | 0) & (b = 0 - a | 0)) >>> 0 <= k >>> 0 || (e = i[964]) && e >>> 0 < (r = (a = i[962]) + f | 0) >>> 0 | a >>> 0 >= r >>> 0) break i;
                          b: {
                            if (!(4 & w[3860])) {
                              k: {
                                c: {
                                  A: {
                                    r: {
                                      if (e = i[860]) for (n = 3864; ; ) {
                                        if ((a = i[n >> 2]) >>> 0 <= e >>> 0 & e >>> 0 < a + i[n + 4 >> 2] >>> 0) break r;
                                        if (!(n = i[n + 8 >> 2])) break;
                                      }
                                      if ((0 | (a = T2(0))) == -1 || (o = f, (n = (e = i[973]) - 1 | 0) & a && (o = (f - a | 0) + (n + a & 0 - e) | 0), o >>> 0 <= k >>> 0) || (e = i[964]) && e >>> 0 < (b = (n = i[962]) + o | 0) >>> 0 | n >>> 0 >= b >>> 0) break k;
                                      if ((0 | a) != (0 | (n = T2(o)))) break A;
                                      break b;
                                    }
                                    if ((0 | (a = T2(o = b & o - s))) == (i[n >> 2] + i[n + 4 >> 2] | 0)) break c;
                                    n = a;
                                  }
                                  if ((0 | n) == -1) break k;
                                  if (k + 48 >>> 0 <= o >>> 0) {
                                    a = n;
                                    break b;
                                  }
                                  if ((0 | T2(a = (a = i[974]) + (t - o | 0) & 0 - a)) == -1) break k;
                                  o = a + o | 0, a = n;
                                  break b;
                                }
                                if ((0 | a) != -1) break b;
                              }
                              i[965] = 4 | i[965];
                            }
                            if ((0 | (a = T2(f))) == -1 | (0 | (n = T2(0))) == -1 | n >>> 0 <= a >>> 0 || (o = n - a | 0) >>> 0 <= k + 40 >>> 0) break n;
                          }
                          n = i[962] + o | 0, i[962] = n, n >>> 0 > i0[963] && (i[963] = n);
                          b: {
                            if (t = i[860]) {
                              for (n = 3864; ; ) {
                                if (((e = i[n >> 2]) + (f = i[n + 4 >> 2]) | 0) == (0 | a)) break b;
                                if (!(n = i[n + 8 >> 2])) break;
                              }
                              break t;
                            }
                            for ((n = i[858]) >>> 0 <= a >>> 0 && n || (i[858] = a), n = 0, i[967] = o, i[966] = a, i[862] = -1, i[863] = i[972], i[969] = 0; f = 3456 + (e = n << 3) | 0, i[e + 3464 >> 2] = f, i[e + 3468 >> 2] = f, (0 | (n = n + 1 | 0)) != 32; ) ;
                            f = (e = o - 40 | 0) - (n = -8 - a & 7) | 0, i[857] = f, n = n + a | 0, i[860] = n, i[n + 4 >> 2] = 1 | f, i[4 + (a + e | 0) >> 2] = 40, i[861] = i[976];
                            break e;
                          }
                          if (8 & i[n + 12 >> 2] | a >>> 0 <= t >>> 0 | e >>> 0 > t >>> 0) break t;
                          i[n + 4 >> 2] = f + o, a = (n = -8 - t & 7) + t | 0, i[860] = a, n = (f = i[857] + o | 0) - n | 0, i[857] = n, i[a + 4 >> 2] = 1 | n, i[4 + (f + t | 0) >> 2] = 40, i[861] = i[976];
                          break e;
                        }
                        e = 0;
                        break f;
                      }
                      a = 0;
                      break a;
                    }
                    i0[858] > a >>> 0 && (i[858] = a), f = a + o | 0, n = 3864;
                    t: {
                      u: {
                        o: {
                          for (; ; ) {
                            if ((0 | f) != i[n >> 2]) {
                              if (n = i[n + 8 >> 2]) continue;
                              break o;
                            }
                            break;
                          }
                          if (!(8 & w[n + 12 | 0])) break u;
                        }
                        for (n = 3864; !((f = i[n >> 2]) >>> 0 <= t >>> 0 && (b = f + i[n + 4 >> 2] | 0) >>> 0 > t >>> 0); ) n = i[n + 8 >> 2];
                        for (f = (e = o - 40 | 0) - (n = -8 - a & 7) | 0, i[857] = f, n = n + a | 0, i[860] = n, i[n + 4 >> 2] = 1 | f, i[4 + (a + e | 0) >> 2] = 40, i[861] = i[976], i[(e = (n = (b + (39 - b & 7) | 0) - 47 | 0) >>> 0 < t + 16 >>> 0 ? t : n) + 4 >> 2] = 27, n = i[969], i[e + 16 >> 2] = i[968], i[e + 20 >> 2] = n, n = i[967], i[e + 8 >> 2] = i[966], i[e + 12 >> 2] = n, i[968] = e + 8, i[967] = o, i[966] = a, i[969] = 0, n = e + 24 | 0; i[n + 4 >> 2] = 7, f = n + 8 | 0, n = n + 4 | 0, f >>> 0 < b >>> 0; ) ;
                        if ((0 | e) == (0 | t)) break e;
                        if (i[e + 4 >> 2] = -2 & i[e + 4 >> 2], b = e - t | 0, i[t + 4 >> 2] = 1 | b, i[e >> 2] = b, b >>> 0 <= 255) {
                          f = 3456 + (-8 & b) | 0, (a = i[854]) & (n = 1 << (b >>> 3)) ? n = i[f + 8 >> 2] : (i[854] = n | a, n = f), i[f + 8 >> 2] = t, i[n + 12 >> 2] = t, i[t + 12 >> 2] = f, i[t + 8 >> 2] = n;
                          break e;
                        }
                        if (n = 31, b >>> 0 <= 16777215 && (n = 62 + ((b >>> 38 - (n = s2(b >>> 8 | 0)) & 1) - (n << 1) | 0) | 0), i[t + 28 >> 2] = n, i[t + 16 >> 2] = 0, i[t + 20 >> 2] = 0, f = 3720 + (n << 2) | 0, (e = i[855]) & (a = 1 << n)) {
                          for (n = b << ((0 | n) != 31 ? 25 - (n >>> 1 | 0) | 0 : 0), e = i[f >> 2]; ; ) {
                            if ((0 | b) == (-8 & i[(f = e) + 4 >> 2])) break t;
                            if (a = n >>> 29 | 0, n <<= 1, !(e = i[16 + (a = (4 & a) + f | 0) >> 2])) break;
                          }
                          i[a + 16 >> 2] = t;
                        } else i[855] = a | e, i[f >> 2] = t;
                        i[t + 24 >> 2] = f, i[t + 12 >> 2] = t, i[t + 8 >> 2] = t;
                        break e;
                      }
                      i[n >> 2] = a, i[n + 4 >> 2] = i[n + 4 >> 2] + o, i[4 + (r = (-8 - a & 7) + a | 0) >> 2] = 3 | k, o = (t = f + (-8 - f & 7) | 0) - (s = k + r | 0) | 0;
                      u: if (i[860] != (0 | t)) if (i[859] != (0 | t)) {
                        if ((3 & (a = i[t + 4 >> 2])) == 1) {
                          b = -8 & a;
                          o: if (a >>> 0 <= 255) {
                            if ((0 | (f = i[t + 12 >> 2])) == (0 | (n = i[t + 8 >> 2]))) {
                              v = 3416, h = i[854] & i2(a >>> 3 | 0), i[v >> 2] = h;
                              break o;
                            }
                            i[n + 12 >> 2] = f, i[f + 8 >> 2] = n;
                          } else {
                            k = i[t + 24 >> 2];
                            b: if ((0 | t) == (0 | (n = i[t + 12 >> 2]))) {
                              k: {
                                if (!(a = i[(f = t + 20 | 0) >> 2])) {
                                  if (!(a = i[t + 16 >> 2])) break k;
                                  f = t + 16 | 0;
                                }
                                for (; e = f, (a = i[(f = (n = a) + 20 | 0) >> 2]) || (f = n + 16 | 0, a = i[n + 16 >> 2]); ) ;
                                i[e >> 2] = 0;
                                break b;
                              }
                              n = 0;
                            } else f = i[t + 8 >> 2], i[f + 12 >> 2] = n, i[n + 8 >> 2] = f;
                            if (k) {
                              a = i[t + 28 >> 2];
                              b: {
                                if (i[(f = 3720 + (a << 2) | 0) >> 2] == (0 | t)) {
                                  if (i[f >> 2] = n, n) break b;
                                  v = 3420, h = i[855] & i2(a), i[v >> 2] = h;
                                  break o;
                                }
                                if (i[k + (i[k + 16 >> 2] == (0 | t) ? 16 : 20) >> 2] = n, !n) break o;
                              }
                              i[n + 24 >> 2] = k, (f = i[t + 16 >> 2]) && (i[n + 16 >> 2] = f, i[f + 24 >> 2] = n), (f = i[t + 20 >> 2]) && (i[n + 20 >> 2] = f, i[f + 24 >> 2] = n);
                            }
                          }
                          o = b + o | 0, a = i[4 + (t = t + b | 0) >> 2];
                        }
                        if (i[t + 4 >> 2] = -2 & a, i[s + 4 >> 2] = 1 | o, i[o + s >> 2] = o, o >>> 0 <= 255) f = 3456 + (-8 & o) | 0, (a = i[854]) & (n = 1 << (o >>> 3)) ? n = i[f + 8 >> 2] : (i[854] = n | a, n = f), i[f + 8 >> 2] = s, i[n + 12 >> 2] = s, i[s + 12 >> 2] = f, i[s + 8 >> 2] = n;
                        else {
                          a = 31, o >>> 0 <= 16777215 && (a = 62 + ((o >>> 38 - (n = s2(o >>> 8 | 0)) & 1) - (n << 1) | 0) | 0), i[s + 28 >> 2] = a, i[s + 16 >> 2] = 0, i[s + 20 >> 2] = 0, f = 3720 + (a << 2) | 0;
                          o: {
                            if ((e = i[855]) & (n = 1 << a)) {
                              for (a = o << ((0 | a) != 31 ? 25 - (a >>> 1 | 0) | 0 : 0), n = i[f >> 2]; ; ) {
                                if (f = n, (-8 & i[n + 4 >> 2]) == (0 | o)) break o;
                                if (e = a >>> 29 | 0, a <<= 1, !(n = i[16 + (e = (4 & e) + n | 0) >> 2])) break;
                              }
                              i[e + 16 >> 2] = s;
                            } else i[855] = n | e, i[f >> 2] = s;
                            i[s + 24 >> 2] = f, i[s + 12 >> 2] = s, i[s + 8 >> 2] = s;
                            break u;
                          }
                          n = i[f + 8 >> 2], i[n + 12 >> 2] = s, i[f + 8 >> 2] = s, i[s + 24 >> 2] = 0, i[s + 12 >> 2] = f, i[s + 8 >> 2] = n;
                        }
                      } else i[859] = s, n = i[856] + o | 0, i[856] = n, i[s + 4 >> 2] = 1 | n, i[n + s >> 2] = n;
                      else i[860] = s, n = i[857] + o | 0, i[857] = n, i[s + 4 >> 2] = 1 | n;
                      n = r + 8 | 0;
                      break i;
                    }
                    n = i[f + 8 >> 2], i[n + 12 >> 2] = t, i[f + 8 >> 2] = t, i[t + 24 >> 2] = 0, i[t + 12 >> 2] = f, i[t + 8 >> 2] = n;
                  }
                  if (!((n = i[857]) >>> 0 <= k >>> 0)) {
                    f = n - k | 0, i[857] = f, n = (a = i[860]) + k | 0, i[860] = n, i[n + 4 >> 2] = 1 | f, i[a + 4 >> 2] = 3 | k, n = a + 8 | 0;
                    break i;
                  }
                }
                i[806] = 48, n = 0;
                break i;
              }
              a: if (o) {
                f = i[e + 28 >> 2];
                n: {
                  if (i[(n = 3720 + (f << 2) | 0) >> 2] == (0 | e)) {
                    if (i[n >> 2] = a, a) break n;
                    r = i2(f) & r, i[855] = r;
                    break a;
                  }
                  if (i[o + (i[o + 16 >> 2] == (0 | e) ? 16 : 20) >> 2] = a, !a) break a;
                }
                i[a + 24 >> 2] = o, (n = i[e + 16 >> 2]) && (i[a + 16 >> 2] = n, i[n + 24 >> 2] = a), (n = i[e + 20 >> 2]) && (i[a + 20 >> 2] = n, i[n + 24 >> 2] = a);
              }
              a: if (t >>> 0 <= 15) n = t + k | 0, i[e + 4 >> 2] = 3 | n, i[4 + (n = n + e | 0) >> 2] = 1 | i[n + 4 >> 2];
              else if (i[e + 4 >> 2] = 3 | k, i[4 + (b = e + k | 0) >> 2] = 1 | t, i[t + b >> 2] = t, t >>> 0 <= 255) f = 3456 + (-8 & t) | 0, (a = i[854]) & (n = 1 << (t >>> 3)) ? n = i[f + 8 >> 2] : (i[854] = n | a, n = f), i[f + 8 >> 2] = b, i[n + 12 >> 2] = b, i[b + 12 >> 2] = f, i[b + 8 >> 2] = n;
              else {
                n = 31, t >>> 0 <= 16777215 && (n = 62 + ((t >>> 38 - (n = s2(t >>> 8 | 0)) & 1) - (n << 1) | 0) | 0), i[b + 28 >> 2] = n, i[b + 16 >> 2] = 0, i[b + 20 >> 2] = 0, f = 3720 + (n << 2) | 0;
                n: {
                  if ((a = 1 << n) & r) {
                    for (n = t << ((0 | n) != 31 ? 25 - (n >>> 1 | 0) | 0 : 0), k = i[f >> 2]; ; ) {
                      if ((-8 & i[(f = k) + 4 >> 2]) == (0 | t)) break n;
                      if (a = n >>> 29 | 0, n <<= 1, !(k = i[16 + (a = (4 & a) + f | 0) >> 2])) break;
                    }
                    i[a + 16 >> 2] = b;
                  } else i[855] = a | r, i[f >> 2] = b;
                  i[b + 24 >> 2] = f, i[b + 12 >> 2] = b, i[b + 8 >> 2] = b;
                  break a;
                }
                n = i[f + 8 >> 2], i[n + 12 >> 2] = b, i[f + 8 >> 2] = b, i[b + 24 >> 2] = 0, i[b + 12 >> 2] = f, i[b + 8 >> 2] = n;
              }
              n = e + 8 | 0;
              break i;
            }
            f: if (s) {
              f = i[a + 28 >> 2];
              a: {
                if (i[(n = 3720 + (f << 2) | 0) >> 2] == (0 | a)) {
                  if (i[n >> 2] = e, e) break a;
                  v = 3420, h = i2(f) & r, i[v >> 2] = h;
                  break f;
                }
                if (i[s + (i[s + 16 >> 2] == (0 | a) ? 16 : 20) >> 2] = e, !e) break f;
              }
              i[e + 24 >> 2] = s, (n = i[a + 16 >> 2]) && (i[e + 16 >> 2] = n, i[n + 24 >> 2] = e), (n = i[a + 20 >> 2]) && (i[e + 20 >> 2] = n, i[n + 24 >> 2] = e);
            }
            t >>> 0 <= 15 ? (n = t + k | 0, i[a + 4 >> 2] = 3 | n, i[4 + (n = n + a | 0) >> 2] = 1 | i[n + 4 >> 2]) : (i[a + 4 >> 2] = 3 | k, i[4 + (e = a + k | 0) >> 2] = 1 | t, i[e + t >> 2] = t, A && (f = 3456 + (-8 & A) | 0, b = i[859], (n = 1 << (A >>> 3)) & o ? n = i[f + 8 >> 2] : (i[854] = n | o, n = f), i[f + 8 >> 2] = b, i[n + 12 >> 2] = b, i[b + 12 >> 2] = f, i[b + 8 >> 2] = n), i[859] = e, i[856] = t), n = a + 8 | 0;
          }
          return _ = l + 16 | 0, 0 | n;
        }
        function J0(n, f) {
          var a = u(0), e = 0, t = u(0), b = u(0), o = 0, k = u(0), s = 0, r = u(0), A = u(0), l = 0, v = 0, h = u(0), y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0, T = 0, O = u(0), G = 0, Y = 0, f2 = 0;
          _ = s = _ - 144 | 0, Y = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], T = i[Y >> 2], I = i[T + 16 >> 2], S = i[i[T + 4 >> 2] + 16 >> 2], P = i[f >> 2], g = i[i[P + 4 >> 2] + 16 >> 2], y = i[P + 16 >> 2], J(g, i[n + 72 >> 2], y) > u(0) && (a = c[g + 28 >> 2], b = c[g + 32 >> 2], e = i[n + 72 >> 2], t = c[e + 28 >> 2], k = c[e + 32 >> 2], A = c[y + 28 >> 2], q[s + 40 >> 3] = c[y + 32 >> 2], q[s + 32 >> 3] = A, q[s + 24 >> 3] = k, q[s + 16 >> 3] = t, q[s + 8 >> 3] = b, q[s >> 3] = a, A1(1098, s));
          i: {
            f: {
              a: if ((0 | y) != (0 | I) && (k = (a = c[y + 32 >> 2]) <= (b = c[g + 32 >> 2]) ? a : b, b = c[I + 32 >> 2], !(k > ((t = c[S + 32 >> 2]) <= b ? b : t)))) {
                n: {
                  if (!(!((t = c[y + 28 >> 2]) < (k = c[I + 28 >> 2])) & (!(a <= b) | t != k))) {
                    if (!(J(S, y, I) > u(0))) break n;
                    break a;
                  }
                  if (J(g, I, y) < u(0)) break a;
                }
                v = S, e = I, M = y, (a = c[(l = g) + 28 >> 2]) < (b = c[y + 28 >> 2]) | a == b & c[l + 32 >> 2] <= c[y + 32 >> 2] ? (o = M, M = l) : o = l, (a = c[e + 28 >> 2]) > (b = c[v + 28 >> 2]) | a == b & c[v + 32 >> 2] <= c[e + 32 >> 2] ? (a = b, l = e, e = v) : l = v, (b = c[M + 28 >> 2]) < a | a == b & c[M + 32 >> 2] <= c[e + 32 >> 2] ? (b = a, v = l, m = e, l = o, e = M) : (v = o, m = M);
                n: if ((t = c[l + 28 >> 2]) > b | t == b & c[m + 32 >> 2] <= c[l + 32 >> 2]) if (!((A = c[v + 28 >> 2]) > t) & (!(c[l + 32 >> 2] <= c[v + 32 >> 2]) | t != A)) if (a = J(e, m, l), t = J(e, v, l), b = c[m + 28 >> 2], (k = (a = (o = u(a - t) < u(0)) ? u(-a) : a) < u(0) ? u(0) : a) <= (t = (a = o ? t : u(-t)) < u(0) ? u(0) : a)) {
                  if (r = c[v + 28 >> 2], a = u(u(b + r) * u(0.5)), t == u(0)) break n;
                  a = u(u(u(r - b) * u(k / u(k + t))) + b);
                } else a = c[v + 28 >> 2], a = u(u(u(b - a) * u(t / u(k + t))) + a);
                else {
                  if (a = u(0), k = u(t - b), h = u(b - c[e + 28 >> 2]), (O = u(k + h)) > u(0) && (a = c[((o = k > h) ? e : l) + 32 >> 2], a = u(u(u(a - c[(o ? l : e) + 32 >> 2]) * u((o ? h : k) / O)) + u(c[m + 32 >> 2] - a))), A = u(A - t), (h = u(k + A)) > u(0) && (r = c[((o = k < A) ? m : v) + 32 >> 2], r = u(u(u(r - c[(o ? v : m) + 32 >> 2]) * u((o ? k : A) / h)) + u(c[l + 32 >> 2] - r))), (A = (a = (o = u(a + r) < u(0)) ? u(-a) : a) < u(0) ? u(0) : a) <= (r = (a = o ? u(-r) : r) < u(0) ? u(0) : a)) {
                    if (a = u(u(b + t) * u(0.5)), r == u(0)) break n;
                    a = u(u(k * u(A / u(A + r))) + b);
                    break n;
                  }
                  a = u(u(u(b - t) * u(r / u(A + r))) + t);
                }
                else a = u(u(b + t) * u(0.5));
                c[s + 84 >> 2] = a, (a = c[e + 32 >> 2]) < (b = c[l + 32 >> 2]) | a == b & c[e + 28 >> 2] <= c[l + 28 >> 2] ? (o = l, l = e) : o = e, (a = c[v + 32 >> 2]) > (b = c[m + 32 >> 2]) | a == b & c[m + 28 >> 2] <= c[v + 28 >> 2] ? (a = b, e = v, v = m) : e = m, (b = c[l + 32 >> 2]) < a | a == b & c[l + 28 >> 2] <= c[v + 28 >> 2] ? (b = a, M = e, m = v, e = o, v = l) : (M = o, m = l);
                n: {
                  e: if ((t = c[e + 32 >> 2]) > b | t == b & c[m + 28 >> 2] <= c[e + 28 >> 2]) {
                    if (!(!((r = c[M + 32 >> 2]) > t) & (!(c[e + 28 >> 2] <= c[M + 28 >> 2]) | t != r))) {
                      if (a = u(0), k = u(0), A = u(t - b), h = u(b - c[v + 32 >> 2]), (O = u(A + h)) > u(0) && (k = c[((o = A > h) ? v : e) + 28 >> 2], k = u(u(u(k - c[(o ? e : v) + 28 >> 2]) * u((o ? h : A) / O)) + u(c[m + 28 >> 2] - k))), r = u(r - t), (h = u(A + r)) > u(0) && (a = c[((o = r > A) ? m : M) + 28 >> 2], a = u(u(u(a - c[(o ? M : m) + 28 >> 2]) * u((o ? A : r) / h)) + u(c[e + 28 >> 2] - a))), (k = (k = (e = u(k + a) < u(0)) ? u(-k) : k) < u(0) ? u(0) : k) <= (a = (a = e ? u(-a) : a) < u(0) ? u(0) : a)) {
                        if (a == u(0)) break e;
                        c[s + 88 >> 2] = u(A * u(k / u(k + a))) + b;
                        break n;
                      }
                      c[s + 88 >> 2] = u(u(b - t) * u(a / u(k + a))) + t;
                      break n;
                    }
                    if (a = u(0), k = u(0), A = u(t - b), h = c[v + 32 >> 2], O = u(b - h), u(A + O) > u(0) && (k = c[m + 28 >> 2], k = u(u(u(k - c[e + 28 >> 2]) * O) + u(A * u(k - c[v + 28 >> 2])))), t = u(t - r), A = u(r - h), u(t + A) > u(0) && (a = c[M + 28 >> 2], a = u(u(u(a - c[e + 28 >> 2]) * A) + u(t * u(a - c[v + 28 >> 2])))), (t = (t = (e = u(k - a) < u(0)) ? u(-k) : k) < u(0) ? u(0) : t) <= (a = (a = e ? a : u(-a)) < u(0) ? u(0) : a)) {
                      if (a == u(0)) {
                        c[s + 88 >> 2] = u(b + r) * u(0.5);
                        break n;
                      }
                      c[s + 88 >> 2] = u(u(r - b) * u(t / u(t + a))) + b;
                      break n;
                    }
                    c[s + 88 >> 2] = u(u(b - r) * u(a / u(t + a))) + r;
                    break n;
                  }
                  c[s + 88 >> 2] = u(b + t) * u(0.5);
                }
                b = c[s + 84 >> 2], o = i[n + 72 >> 2];
                n: {
                  if (b < (a = c[o + 28 >> 2])) t = c[o + 32 >> 2];
                  else if (a != b || !((t = c[o + 32 >> 2]) >= c[s + 88 >> 2])) break n;
                  c[s + 88 >> 2] = t, c[s + 84 >> 2] = a, b = a;
                }
                (a = r = c[(e = y) + 28 >> 2]) < (t = c[I + 28 >> 2]) || a == t && c[e + 32 >> 2] <= c[I + 32 >> 2] || (a = t, e = I);
                n: {
                  if (a < b) k = c[e + 32 >> 2];
                  else if (a != b || !((k = c[e + 32 >> 2]) <= c[s + 88 >> 2])) break n;
                  c[s + 88 >> 2] = k, c[s + 84 >> 2] = a, b = a;
                }
                if (!(b == r & c[s + 88 >> 2] == c[y + 32 >> 2]) & (t != b | c[s + 88 >> 2] != c[I + 32 >> 2])) {
                  n: {
                    e: {
                      if (!((b = c[o + 28 >> 2]) == c[g + 28 >> 2] & c[g + 32 >> 2] == c[o + 32 >> 2])) {
                        if (J(g, o, s + 56 | 0) >= u(0)) break e;
                        o = i[n + 72 >> 2], b = c[o + 28 >> 2];
                      }
                      if (b == c[S + 28 >> 2] & c[S + 32 >> 2] == c[o + 32 >> 2] || !(J(S, o, s + 56 | 0) <= u(0))) break n;
                    }
                    if ((0 | (e = i[n + 72 >> 2])) == (0 | S)) {
                      if (!o2(i[P + 4 >> 2]) || !Z(i[T + 4 >> 2], P)) break i;
                      for (e = i[i[f >> 2] + 16 >> 2]; f = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2], l = i[f >> 2], (0 | e) == i[l + 16 >> 2]; ) ;
                      if (w[f + 15 | 0] && (o = 0, (e = A2(i[i[i[i[i[f + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[l + 12 >> 2])) && $(i[f >> 2]) && (i[f >> 2] = e, d[f + 15 | 0] = 0, i[e + 24 >> 2] = f, o = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2]), f = o), !f) break i;
                      o = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], e = i[o >> 2], L2(n, o, Y), f2 = 1, S2(n, f, i[i[e + 4 >> 2] + 12 >> 2], e, e, 1);
                      break a;
                    }
                    if ((0 | e) == (0 | g)) {
                      if (!o2(i[T + 4 >> 2]) || !Z(i[P + 12 >> 2], i[i[T + 4 >> 2] + 12 >> 2])) break i;
                      for (o = i[i[i[f >> 2] + 4 >> 2] + 16 >> 2], e = f; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], (0 | o) == i[i[i[e >> 2] + 4 >> 2] + 16 >> 2]; ) ;
                      o = i[i[i[i[i[i[e + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2] + 8 >> 2], i[f >> 2] = i[i[T + 4 >> 2] + 12 >> 2], f2 = 1, S2(n, e, i[L2(n, f, 0) + 8 >> 2], i[i[P + 4 >> 2] + 8 >> 2], o, 1);
                      break a;
                    }
                    if (J(g, e, s + 56 | 0) >= u(0)) {
                      if (d[f + 14 | 0] = 1, d[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !o2(i[P + 4 >> 2])) break i;
                      o = i[P + 16 >> 2], e = i[n + 72 >> 2], c[o + 28 >> 2] = c[e + 28 >> 2], c[o + 32 >> 2] = c[e + 32 >> 2];
                    } else e = i[n + 72 >> 2];
                    if (!(J(S, e, s + 56 | 0) <= u(0))) break a;
                    if (d[Y + 14 | 0] = 1, d[f + 14 | 0] = 1, !o2(i[T + 4 >> 2])) break i;
                    f = i[T + 16 >> 2], n = i[n + 72 >> 2], c[f + 28 >> 2] = c[n + 28 >> 2], c[f + 32 >> 2] = c[n + 32 >> 2];
                    break a;
                  }
                  if (!o2(i[P + 4 >> 2]) || !o2(i[T + 4 >> 2]) || !Z(i[i[T + 4 >> 2] + 12 >> 2], P)) break i;
                  if (e = i[P + 16 >> 2], c[e + 28 >> 2] = c[s + 84 >> 2], c[e + 32 >> 2] = c[s + 88 >> 2], o = X0(i[n + 68 >> 2], e), e = i[P + 16 >> 2], i[e + 36 >> 2] = o, (0 | o) == 2147483647) break f;
                  i[s + 112 >> 2] = i[y + 12 >> 2], i[s + 116 >> 2] = i[g + 12 >> 2], i[s + 120 >> 2] = i[I + 12 >> 2], i[s + 124 >> 2] = i[S + 12 >> 2], i[e + 24 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 20 >> 2] = 0, a = c[e + 28 >> 2], r = (b = u(c[g + 28 >> 2] - a)) < u(0) ? u(-b) : b, b = c[e + 32 >> 2], t = u(c[g + 32 >> 2] - b), k = u(r + (t < u(0) ? u(-t) : t)), r = (t = u(c[y + 28 >> 2] - a)) < u(0) ? u(-t) : t, t = u(c[y + 32 >> 2] - b), r = u(r + (t < u(0) ? u(-t) : t)), G = +u(r + k), t = u(0.5 * +k / G), c[s + 96 >> 2] = t, k = u(0.5 * +r / G), c[s + 100 >> 2] = k, r = u(u(u(t * c[y + 16 >> 2]) + u(c[g + 16 >> 2] * k)) + u(0)), c[e + 16 >> 2] = r, A = u(u(u(t * c[y + 20 >> 2]) + u(c[g + 20 >> 2] * k)) + u(0)), c[e + 20 >> 2] = A, k = u(u(u(t * c[y + 24 >> 2]) + u(c[g + 24 >> 2] * k)) + u(0)), c[e + 24 >> 2] = k, h = (t = u(c[I + 28 >> 2] - a)) < u(0) ? u(-t) : t, t = u(c[I + 32 >> 2] - b), t = u(h + (t < u(0) ? u(-t) : t)), h = (a = u(c[S + 28 >> 2] - a)) < u(0) ? u(-a) : a, a = u(c[S + 32 >> 2] - b), a = u(h + (a < u(0) ? u(-a) : a)), G = +u(t + a), a = u(0.5 * +a / G), c[s + 104 >> 2] = a, b = u(0.5 * +t / G), c[s + 108 >> 2] = b, t = u(r + u(u(a * c[I + 16 >> 2]) + u(c[S + 16 >> 2] * b))), c[e + 16 >> 2] = t, r = u(A + u(u(a * c[I + 20 >> 2]) + u(c[S + 20 >> 2] * b))), c[e + 20 >> 2] = r, a = u(k + u(u(a * c[I + 24 >> 2]) + u(c[S + 24 >> 2] * b))), c[e + 24 >> 2] = a, c[s + 140 >> 2] = a, c[s + 136 >> 2] = r, c[s + 132 >> 2] = t, i[e + 12 >> 2] = 0, e = e + 12 | 0, (0 | (o = i[n + 1736 >> 2])) == 10 ? R[i[n + 76 >> 2]](s + 132 | 0, s + 112 | 0, s + 96 | 0, e) : R[0 | o](s + 132 | 0, s + 112 | 0, s + 96 | 0, e, i[n + 1896 >> 2]), i[e >> 2] | w[n + 60 | 0] || ((0 | (e = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100156) : R[0 | e](100156, i[n + 1896 >> 2]), d[n + 60 | 0] = 1), d[Y + 14 | 0] = 1, d[f + 14 | 0] = 1, d[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1;
                } else c0(n, f);
              }
              return _ = s + 144 | 0, f2;
            }
            y0(i[n + 68 >> 2]), i[n + 68 >> 2] = 0;
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function n4(n, f, a, e, t, b) {
          n |= 0, f |= 0, a |= 0, e |= 0, t |= 0, b |= 0;
          for (var o = 0, k = 0, s = 0, r = 0, A = 0, l = u(0), v = 0, h = u(0), y = u(0), m = 0, g = 0, I = 0, S = 0, M = 0, P = 0; (o = i[1776 + (k = r << 2) >> 2]) && (i[o >> 2] = 0), (o = i[1776 + (4 | k) >> 2]) && (i[o >> 2] = 0), (o = i[1776 + (8 | k) >> 2]) && (i[o >> 2] = 0), (o = i[1776 + (12 | k) >> 2]) && (i[o >> 2] = 0), (0 | (r = r + 4 | 0)) != 100; ) ;
          if ((r = i[544]) || (r = j(16), i[544] = r), i[r + 8 >> 2] = b, i[r + 4 >> 2] = 0, i[r + 12 >> 2] = e, i[r >> 2] = t, (r = i[545]) || ((t = j(1900)) ? (i[t + 100 >> 2] = 12, i[t + 96 >> 2] = 13, i[t + 92 >> 2] = 14, i[t + 88 >> 2] = 15, n2[t + 80 >> 1] = 0, i[t + 52 >> 2] = 0, i[t + 56 >> 2] = 100130, i[t + 16 >> 2] = 0, i[t + 20 >> 2] = 0, i[t >> 2] = 0, i[t + 1896 >> 2] = 0, i[t + 1736 >> 2] = 10, i[t + 1732 >> 2] = 11, i[t + 1728 >> 2] = 6, i[t + 1724 >> 2] = 5, i[t + 1720 >> 2] = 4, i[t + 1716 >> 2] = 3, i[t + 104 >> 2] = 16, i[t + 76 >> 2] = 17, i[t + 12 >> 2] = 18, i[t + 24 >> 2] = 0) : t = 0, i[545] = t, B2(t, 100107, 31), B2(i[545], 100100, 32), B2(i[545], 100102, 33), B2(i[545], 100105, 34), B2(i[545], 100103, 35), B2(i[545], 100104, 36), i[i[545] + 56 >> 2] = 100130, t = i[545], c[t + 16 >> 2] = 0, c[t + 24 >> 2] = 1, c[t + 20 >> 2] = 0, r = i[545]), t = 0, b = i[544], i[r >> 2] && p2(r, 0), i[r + 112 >> 2] = 0, i[r >> 2] = 1, d[r + 108 | 0] = 0, i[r + 1896 >> 2] = b, i[r + 8 >> 2] = 0, (0 | a) > 0) for (b = 0; ; ) {
            if (I = i[(b << 2) + f >> 2], o = i[545], i[o >> 2] != 1 && p2(o, 1), i[o >> 2] = 2, i[o + 4 >> 2] = 0, i[o + 112 >> 2] > 0 && (d[o + 108 | 0] = 1), r = 0, (0 | I) > 0) for (; ; ) {
              A = i[545], i[A >> 2] != 2 && p2(A, 2), v = (L(t + r | 0, e) << 2) + n | 0;
              i: {
                f: {
                  if (w[A + 108 | 0]) {
                    if (!r0(A)) {
                      if ((0 | (k = i[A + 1732 >> 2])) != 11) break f;
                      R[i[A + 12 >> 2]](100902);
                      break i;
                    }
                    i[A + 4 >> 2] = 0;
                  }
                  if (P = (m = +(h = (S = (m = +(l = c[v + 4 >> 2])) < -1e37) ? u(-9999999933815813e21) : l)) > 1e37, s = (g = +(y = (M = (g = +(l = c[v >> 2])) < -1e37) ? u(-9999999933815813e21) : l)) > 1e37, ((o = +(l = c[v + 8 >> 2]) < -1e37) | (k = +(l = o ? u(-9999999933815813e21) : l) > 1e37) | S | m > 1e37 || g > 1e37 || M) && ((0 | (o = i[A + 1732 >> 2])) == 11 ? R[i[A + 12 >> 2]](100155) : R[0 | o](100155, i[A + 1896 >> 2])), h = P ? u(9999999933815813e21) : h, y = s ? u(9999999933815813e21) : y, !i[A + 8 >> 2]) {
                    if ((0 | (o = i[A + 112 >> 2])) <= 99) {
                      c[124 + (s = A + (o << 4) | 0) >> 2] = k ? u(9999999933815813e21) : l, c[s + 120 >> 2] = h, c[s + 116 >> 2] = y, i[s + 128 >> 2] = v, i[A + 112 >> 2] = o + 1;
                      break i;
                    }
                    if (!r0(A)) {
                      if ((0 | (k = i[A + 1732 >> 2])) != 11) break f;
                      R[i[A + 12 >> 2]](100902);
                      break i;
                    }
                  }
                  a: {
                    n: {
                      if (!(o = i[A + 4 >> 2])) {
                        if (!(k = s0(i[A + 8 >> 2]))) break a;
                        if (Z(k, i[k + 4 >> 2])) break n;
                        break a;
                      }
                      if (!o2(o)) break a;
                      k = i[o + 12 >> 2];
                    }
                    o = i[k + 16 >> 2], c[o + 16 >> 2] = y, i[o + 12 >> 2] = v, i[o + 24 >> 2] = 0, c[o + 20 >> 2] = h, i[k + 28 >> 2] = 1, i[i[k + 4 >> 2] + 28 >> 2] = -1, i[A + 4 >> 2] = k;
                    break i;
                  }
                  if ((0 | (k = i[A + 1732 >> 2])) == 11) {
                    R[i[A + 12 >> 2]](100902);
                    break i;
                  }
                }
                R[0 | k](100902, i[A + 1896 >> 2]);
              }
              if ((0 | I) == (0 | (r = r + 1 | 0))) break;
            }
            if (o = i[545], i[o >> 2] != 2 && p2(o, 2), i[o >> 2] = 1, t = t + I | 0, (0 | (b = b + 1 | 0)) == (0 | a)) break;
          }
          s = i[545], n = j(40), i[n >> 2] = 0, k = k1(t = s + 1740 | 0, 1, n, 4), o = W, n = 0;
          i: {
            f: {
              for (; ; ) {
                if (n) {
                  if ((0 | (f = i[s + 1732 >> 2])) != 11) {
                    if (n = i[s + 1896 >> 2], i[978] = 0, I2(0 | f, 100902, 0 | n), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                      if (!(f = X(i[n >> 2], k, o))) break f;
                      W = e;
                    }
                    if (n = W, (0 | f) == 1) continue;
                    break i;
                  }
                  if (n = i[s + 12 >> 2], i[978] = 0, Z0(0 | n, 100902), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                    if (!(f = X(i[n >> 2], k, o))) break f;
                    W = e;
                  }
                  if (n = W, (0 | f) == 1) continue;
                  break i;
                }
                if (i[s >> 2] != 1) {
                  if (i[978] = 0, I2(19, 0 | s, 1), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                    if (!(f = X(i[n >> 2], k, o))) break f;
                    W = e;
                  }
                  if (n = W, (0 | f) == 1) continue;
                }
                if (i[s >> 2] = 0, !i[s + 8 >> 2]) {
                  if (!(w[s + 80 | 0] | i[s + 104 >> 2] != 16)) {
                    if (i[978] = 0, a = 0 | f0(20, 0 | s), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                      if (!(f = X(i[n >> 2], k, o))) break f;
                      W = e;
                    }
                    if (n = W, (0 | f) == 1) continue;
                    if (a) {
                      i[s + 1896 >> 2] = 0;
                      break i;
                    }
                  }
                  if (i[978] = 0, a = 0 | f0(21, 0 | s), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                    if (!(f = X(i[n >> 2], k, o))) break f;
                    W = e;
                  }
                  if (n = W, (0 | f) == 1) continue;
                  if (!a) {
                    if (i[978] = 0, I2(22, 0 | t, 1), n = i[978], i[978] = 0, n && (e = i[979])) {
                      if (!X(i[n >> 2], k, o)) break f;
                      W = e;
                    }
                    n = W;
                    continue;
                  }
                }
                if (i[978] = 0, V0(s), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                  if (!(f = X(i[n >> 2], k, o))) break f;
                  W = e;
                }
                if (n = W, (0 | f) != 1) {
                  if (i[978] = 0, a = 0 | f0(24, 0 | s), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                    if (!(f = X(i[n >> 2], k, o))) break f;
                    W = e;
                  }
                  if (n = W, (0 | f) != 1) if (a) {
                    b = i[s + 8 >> 2];
                    a: {
                      n: {
                        if (!w[s + 60 | 0]) {
                          if (w[s + 81 | 0] ? (i[978] = 0, a = 0 | a4(25, 0 | b, 1, 1)) : (i[978] = 0, a = 0 | f0(26, 0 | b)), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                            if (!(f = X(i[n >> 2], k, o))) break f;
                            W = e;
                          }
                          if (n = W, (0 | f) == 1) continue;
                          if (!a) {
                            if (i[978] = 0, I2(22, 0 | t, 1), n = i[978], i[978] = 0, n && (e = i[979])) {
                              if (!X(i[n >> 2], k, o)) break f;
                              W = e;
                            }
                            n = W;
                            continue;
                          }
                          if (i[s + 88 >> 2] != 15 | i[s + 100 >> 2] != 12 | i[s + 96 >> 2] != 13 | i[s + 92 >> 2] != 14 || i[s + 1716 >> 2] != 3 | i[s + 1728 >> 2] != 6 | i[s + 1724 >> 2] != 5 || i[s + 1720 >> 2] != 4) if (w[s + 81 | 0]) {
                            if (i[978] = 0, I2(27, 0 | s, 0 | b), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                              if (!(f = X(i[n >> 2], k, o))) break f;
                              W = e;
                            }
                            if (n = W, (0 | f) == 1) continue;
                          } else {
                            if (i[978] = 0, I2(28, 0 | s, 0 | b), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                              if (!(f = X(i[n >> 2], k, o))) break f;
                              W = e;
                            }
                            if (n = W, (0 | f) == 1) continue;
                          }
                          if (i[s + 104 >> 2] != 16) {
                            if (i[978] = 0, $0(b), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                              if (!(f = X(i[n >> 2], k, o))) break f;
                              W = e;
                            }
                            if (n = W, (0 | f) == 1) continue;
                            if (n = i[s + 104 >> 2], i[978] = 0, Z0(0 | n, 0 | b), n = i[978], i[978] = 0, f = -1, !n || !(e = i[979])) break a;
                            if (f = X(i[n >> 2], k, o)) break n;
                            break f;
                          }
                        }
                        if (i[978] = 0, d0(b), n = i[978], i[978] = 0, f = -1, n && (e = i[979])) {
                          if (!(f = X(i[n >> 2], k, o))) break f;
                          W = e;
                        }
                        if (n = W, (0 | f) == 1) continue;
                        i[s + 8 >> 2] = 0, i[s + 1896 >> 2] = 0;
                        break i;
                      }
                      W = e;
                    }
                    if (n = W, (0 | f) != 1) break;
                  } else {
                    if (i[978] = 0, I2(22, 0 | t, 1), n = i[978], i[978] = 0, n && (e = i[979])) {
                      if (!X(i[n >> 2], k, o)) break f;
                      W = e;
                    }
                    n = W;
                  }
                }
              }
              i[s + 1896 >> 2] = 0, i[s + 8 >> 2] = 0;
              break i;
            }
            B(k), k2(n, e), b2();
          }
          return B(k), i[i[544] + 4 >> 2];
        }
        function e4(n, f, a, e, t, b) {
          n |= 0, f = +f, a |= 0, e |= 0, t |= 0, b |= 0;
          var o = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, h = 0, y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0, T = 0, O = 0, G = 0, Y = 0, f2 = 0, E2 = 0;
          _ = h = _ - 560 | 0, i[h + 44 >> 2] = 0, u0(+f), o = 0 | c2(1), c2(0), (0 | o) < 0 ? (M = 1, O = 1034, u0(+(f = -f)), o = 0 | c2(1), c2(0)) : 2048 & t ? (M = 1, O = 1037) : (O = (M = 1 & t) ? 1040 : 1035, Y = !M);
          i: if ((2146435072 & o) != 2146435072) {
            P = h + 16 | 0;
            f: {
              a: {
                n: {
                  if (f = u1(f, h + 44 | 0), (f += f) != 0) {
                    if (o = i[h + 44 >> 2], i[h + 44 >> 2] = o - 1, (0 | (T = 32 | b)) != 97) break n;
                    break f;
                  }
                  if ((0 | (T = 32 | b)) == 97) break f;
                  A = i[h + 44 >> 2], l = (0 | e) < 0 ? 6 : e;
                  break a;
                }
                A = o - 29 | 0, i[h + 44 >> 2] = A, f *= 268435456, l = (0 | e) < 0 ? 6 : e;
              }
              for (k = m = (h + 48 | 0) + ((0 | A) >= 0 ? 288 : 0) | 0; e = f < 4294967296 & f >= 0 ? ~~f >>> 0 : 0, i[k >> 2] = e, k = k + 4 | 0, (f = 1e9 * (f - +(e >>> 0))) != 0; ) ;
              if ((0 | A) <= 0) e = A, o = k, s = m;
              else for (s = m, e = A; ; ) {
                if (r = (0 | e) >= 29 ? 29 : e, !(s >>> 0 > (o = k - 4 | 0) >>> 0)) {
                  for (y = 0; e = i[o >> 2], v = 31 & r, G = y, (63 & r) >>> 0 >= 32 ? (y = e << v, e = 0) : (y = (1 << v) - 1 & e >>> 32 - v, e <<= v), y = y + g | 0, f2 = o, E2 = (v = G + e | 0) - h0(y = i1(v, e >>> 0 > v >>> 0 ? y + 1 | 0 : y, 1e9), r2, 1e9, 0) | 0, i[f2 >> 2] = E2, s >>> 0 <= (o = o - 4 | 0) >>> 0; ) ;
                  y && (i[(s = s - 4 | 0) >> 2] = y);
                }
                for (; s >>> 0 < (o = k) >>> 0 && !i[(k = o - 4 | 0) >> 2]; ) ;
                if (e = i[h + 44 >> 2] - r | 0, i[h + 44 >> 2] = e, k = o, !((0 | e) > 0)) break;
              }
              if ((0 | e) < 0) for (S = 1 + ((l + 25 >>> 0) / 9 | 0) | 0, g = (0 | T) == 102; ; ) {
                if (v = (0 | (e = 0 - e | 0)) >= 9 ? 9 : e, o >>> 0 <= s >>> 0) k = i[s >> 2];
                else {
                  for (y = 1e9 >>> v | 0, r = -1 << v ^ -1, e = 0, k = s; G = e, e = i[k >> 2], i[k >> 2] = G + (e >>> v | 0), e = L(y, e & r), (k = k + 4 | 0) >>> 0 < o >>> 0; ) ;
                  k = i[s >> 2], e && (i[o >> 2] = e, o = o + 4 | 0);
                }
                if (e = v + i[h + 44 >> 2] | 0, i[h + 44 >> 2] = e, s = (!k << 2) + s | 0, o = o - (k = g ? m : s) >> 2 > (0 | S) ? k + (S << 2) | 0 : o, !((0 | e) < 0)) break;
              }
              if (e = 0, !(o >>> 0 <= s >>> 0 || (e = L(m - s >> 2, 9), k = 10, (r = i[s >> 2]) >>> 0 < 10))) for (; e = e + 1 | 0, r >>> 0 >= (k = L(k, 10)) >>> 0; ) ;
              if ((0 | (k = (l - ((0 | T) != 102 ? e : 0) | 0) - ((0 | T) == 103 & (0 | l) != 0) | 0)) < (L(o - m >> 2, 9) - 9 | 0)) {
                if (A = (S = ((h + 48 | 0) + ((0 | A) < 0 ? 4 : 292) | 0) + ((r = (0 | (y = k + 9216 | 0)) / 9 | 0) << 2) | 0) - 4096 | 0, k = 10, (0 | (v = y - L(r, 9) | 0)) <= 7) for (; k = L(k, 10), (0 | (v = v + 1 | 0)) != 8; ) ;
                if (!(!(v = (g = i[A >> 2]) - L(k, y = (g >>> 0) / (k >>> 0) | 0) | 0) & (0 | (r = S - 4092 | 0)) == (0 | o)) && (!(1 & y) && (f = 9007199254740992, !(1 & d[S - 4100 | 0]) | (0 | k) != 1e9 | s >>> 0 >= A >>> 0) || (f = 9007199254740994), I = (0 | o) == (0 | r) ? 1 : 1.5, I = (r = k >>> 1 | 0) >>> 0 > v >>> 0 ? 0.5 : (0 | r) == (0 | v) ? I : 1.5, w[0 | O] != 45 | Y || (I = -I, f = -f), r = g - v | 0, i[A >> 2] = r, f + I != f)) {
                  if (e = k + r | 0, i[A >> 2] = e, e >>> 0 >= 1e9) for (; i[A >> 2] = 0, (A = A - 4 | 0) >>> 0 < s >>> 0 && (i[(s = s - 4 | 0) >> 2] = 0), e = i[A >> 2] + 1 | 0, i[A >> 2] = e, e >>> 0 > 999999999; ) ;
                  if (e = L(m - s >> 2, 9), k = 10, !((r = i[s >> 2]) >>> 0 < 10)) for (; e = e + 1 | 0, r >>> 0 >= (k = L(k, 10)) >>> 0; ) ;
                }
                o = o >>> 0 > (k = A + 4 | 0) >>> 0 ? k : o;
              }
              for (; r = o, !(y = o >>> 0 <= s >>> 0) && !i[(o = o - 4 | 0) >> 2]; ) ;
              if ((0 | T) == 103) {
                if (l = ((o = (0 | (k = l || 1)) > (0 | e) & (0 | e) > -5) ? -1 ^ e : -1) + k | 0, b = (o ? -1 : -2) + b | 0, !(A = 8 & t)) {
                  if (o = -9, !y && (A = i[r - 4 >> 2]) && (v = 10, o = 0, !((A >>> 0) % 10 | 0))) {
                    for (; k = o, o = o + 1 | 0, !((A >>> 0) % ((v = L(v, 10)) >>> 0) | 0); ) ;
                    o = -1 ^ k;
                  }
                  k = L(r - m >> 2, 9), (-33 & b) != 70 ? (A = 0, l = (0 | (o = (0 | (o = ((e + k | 0) + o | 0) - 9 | 0)) > 0 ? o : 0)) > (0 | l) ? l : o) : (A = 0, l = (0 | (o = (0 | (o = (o + k | 0) - 9 | 0)) > 0 ? o : 0)) > (0 | l) ? l : o);
                }
              } else A = 8 & t;
              if (v = -1, (0 | ((y = A | l) ? 2147483645 : 2147483646)) < (0 | l)) break i;
              if (g = 1 + (((0 | y) != 0) + l | 0) | 0, (0 | (k = -33 & b)) != 70) {
                if ((P - (o = Q2(((o = e >> 31) ^ e) - o | 0, 0, P)) | 0) <= 1) for (; d[0 | (o = o - 1 | 0)] = 48, (P - o | 0) < 2; ) ;
                if (d[0 | (S = o - 2 | 0)] = b, d[o - 1 | 0] = (0 | e) < 0 ? 45 : 43, (0 | (o = P - S | 0)) > (2147483647 ^ g)) break i;
              } else {
                if ((2147483647 ^ g) < (0 | e)) break i;
                o = (0 | e) > 0 ? e : 0;
              }
              if ((0 | (e = o + g | 0)) > (2147483647 ^ M)) break i;
              z(n, 32, a, g = e + M | 0, t), N(n, O, M), z(n, 48, a, g, 65536 ^ t);
              a: {
                n: {
                  e: {
                    if ((0 | k) == 70) {
                      for (e = 8 | (b = h + 16 | 0), A = 9 | b, s = k = s >>> 0 > m >>> 0 ? m : s; ; ) {
                        o = Q2(i[s >> 2], 0, A);
                        t: if ((0 | k) == (0 | s)) (0 | o) == (0 | A) && (d[h + 24 | 0] = 48, o = e);
                        else {
                          if (h + 16 >>> 0 >= o >>> 0) break t;
                          for (; d[0 | (o = o - 1 | 0)] = 48, h + 16 >>> 0 < o >>> 0; ) ;
                        }
                        if (N(n, o, A - o | 0), !(m >>> 0 >= (s = s + 4 | 0) >>> 0)) break;
                      }
                      if (y && N(n, 1069, 1), (0 | l) <= 0 | s >>> 0 >= r >>> 0) break e;
                      for (; ; ) {
                        if ((o = Q2(i[s >> 2], 0, A)) >>> 0 > h + 16 >>> 0) for (; d[0 | (o = o - 1 | 0)] = 48, h + 16 >>> 0 < o >>> 0; ) ;
                        if (N(n, o, (0 | l) >= 9 ? 9 : l), o = l - 9 | 0, r >>> 0 <= (s = s + 4 | 0) >>> 0) break n;
                        if (e = (0 | l) > 9, l = o, !e) break;
                      }
                      break n;
                    }
                    t: if (!((0 | l) < 0)) for (m = s >>> 0 < r >>> 0 ? r : s + 4 | 0, e = 8 | (b = h + 16 | 0), r = 9 | b, k = s; ; ) {
                      (0 | r) == (0 | (o = Q2(i[k >> 2], 0, r))) && (d[h + 24 | 0] = 48, o = e);
                      u: if ((0 | k) == (0 | s)) N(n, o, 1), o = o + 1 | 0, A | l && N(n, 1069, 1);
                      else {
                        if (h + 16 >>> 0 >= o >>> 0) break u;
                        for (; d[0 | (o = o - 1 | 0)] = 48, h + 16 >>> 0 < o >>> 0; ) ;
                      }
                      if (N(n, o, (0 | (b = r - o | 0)) < (0 | l) ? b : l), l = l - b | 0, m >>> 0 <= (k = k + 4 | 0) >>> 0) break t;
                      if (!((0 | l) >= 0)) break;
                    }
                    z(n, 48, l + 18 | 0, 18, 0), N(n, S, P - S | 0);
                    break a;
                  }
                  o = l;
                }
                z(n, 48, o + 9 | 0, 9, 0);
              }
              z(n, 32, a, g, 8192 ^ t), v = (0 | a) < (0 | g) ? g : a;
              break i;
            }
            if (A = (b << 26 >> 31 & 9) + O | 0, !(e >>> 0 > 11)) {
              for (o = 12 - e | 0, I = 16; I *= 16, o = o - 1 | 0; ) ;
              f = w[0 | A] != 45 ? f + I - I : -(I + (-f - I));
            }
            for ((0 | P) == (0 | (o = Q2(((o = i[h + 44 >> 2]) ^ (k = o >> 31)) - k | 0, 0, P))) && (d[h + 15 | 0] = 48, o = h + 15 | 0), m = 2 | M, s = 32 & b, k = i[h + 44 >> 2], d[0 | (l = o - 2 | 0)] = b + 15, d[o - 1 | 0] = (0 | k) < 0 ? 45 : 43, o = 8 & t, k = h + 16 | 0; b = k, r = $1(f) < 2147483648 ? ~~f : -2147483648, d[0 | k] = s | w[r + 1600 | 0], !((0 | e) > 0 | o) & (f = 16 * (f - +(0 | r))) == 0 | ((k = b + 1 | 0) - (h + 16 | 0) | 0) != 1 || (d[b + 1 | 0] = 46, k = b + 2 | 0), f != 0; ) ;
            v = -1, (2147483645 - (b = (o = P - l | 0) + m | 0) | 0) < (0 | e) || (r = b, s = k - (b = h + 16 | 0) | 0, z(n, 32, a, k = r + (e = e && (s - 2 | 0) < (0 | e) ? e + 2 | 0 : s) | 0, t), N(n, A, m), z(n, 48, a, k, 65536 ^ t), N(n, b, s), z(n, 48, e - s | 0, 0, 0), N(n, l, o), z(n, 32, a, k, 8192 ^ t), v = (0 | a) < (0 | k) ? k : a);
          } else z(n, 32, a, o = M + 3 | 0, -65537 & t), N(n, O, M), e = 32 & b, N(n, f != f ? e ? 1053 : 1061 : e ? 1057 : 1065, 3), z(n, 32, a, o, 8192 ^ t), v = (0 | a) < (0 | o) ? o : a;
          return _ = h + 560 | 0, 0 | v;
        }
        function N0(n, f, a, e, t, b) {
          var o = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, h = 0, y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0, T = 0, O = 0, G = 0, Y = 0, f2 = 0, E2 = 0;
          _ = s = _ - 80 | 0, i[s + 76 >> 2] = f, O = t - 192 | 0, G = e - 384 | 0, f2 = s + 55 | 0, I = s + 56 | 0;
          i: {
            f: {
              a: {
                n: {
                  e: for (; ; ) {
                    o = 0;
                    t: for (; ; ) {
                      if (r = f, (2147483647 ^ y) < (0 | o)) break n;
                      y = o + y | 0;
                      u: {
                        o: {
                          b: {
                            if (k = w[0 | (o = f)]) for (; ; ) {
                              k: {
                                c: if (f = 255 & k) {
                                  if ((0 | f) != 37) break k;
                                  for (k = o; ; ) {
                                    if (w[k + 1 | 0] != 37) {
                                      f = k;
                                      break c;
                                    }
                                    if (o = o + 1 | 0, l = w[k + 2 | 0], k = f = k + 2 | 0, (0 | l) != 37) break;
                                  }
                                } else f = o;
                                if ((0 | (o = o - r | 0)) > (0 | (Y = 2147483647 ^ y))) break n;
                                if (n && N(n, r, o), o) continue t;
                                i[s + 76 >> 2] = f, o = f + 1 | 0, m = -1, k = d[f + 1 | 0] - 48 | 0, w[f + 2 | 0] != 36 | k >>> 0 >= 10 || (m = k, S = 1, o = f + 3 | 0), i[s + 76 >> 2] = o, v = 0;
                                c: if ((f = (k = d[0 | o]) - 32 | 0) >>> 0 > 31) l = o;
                                else if (l = o, 75913 & (f = 1 << f)) for (; ; ) {
                                  if (l = o + 1 | 0, i[s + 76 >> 2] = l, v |= f, (f = (k = d[o + 1 | 0]) - 32 | 0) >>> 0 >= 32) break c;
                                  if (o = l, !(75913 & (f = 1 << f))) break;
                                }
                                c: if ((0 | k) != 42) {
                                  if ((0 | (g = c1(s + 76 | 0))) < 0) break n;
                                  k = i[s + 76 >> 2];
                                } else {
                                  if (k = l + 1 | 0, w[l + 2 | 0] != 36 | d[l + 1 | 0] - 48 >>> 0 >= 10) {
                                    if (S) break b;
                                    if (!n) {
                                      i[s + 76 >> 2] = k, S = 0, g = 0;
                                      break c;
                                    }
                                    f = i[a >> 2], i[a >> 2] = f + 4, S = 0, f = i[f >> 2];
                                  } else f = d[0 | k], k = l + 3 | 0, S = 1, n ? f = i[(f << 3) + G >> 2] : (i[(f << 2) + O >> 2] = 10, f = 0);
                                  if (i[s + 76 >> 2] = k, g = f, (0 | f) >= 0) break c;
                                  g = 0 - f | 0, v |= 8192;
                                }
                                if (o = 0, A = -1, w[0 | k] == 46) if (w[k + 1 | 0] != 42) i[s + 76 >> 2] = k + 1, A = c1(s + 76 | 0), f = i[s + 76 >> 2], P = 1;
                                else {
                                  if (f = k + 2 | 0, w[k + 3 | 0] != 36 | d[k + 2 | 0] - 48 >>> 0 >= 10) {
                                    if (S) break b;
                                    n ? (k = i[a >> 2], i[a >> 2] = k + 4, A = i[k >> 2]) : A = 0;
                                  } else f = d[0 | f], n ? A = i[(f << 3) + G >> 2] : (i[(f << 2) + O >> 2] = 10, A = 0), f = k + 4 | 0;
                                  i[s + 76 >> 2] = f, P = (0 | A) >= 0;
                                }
                                else f = k, P = 0;
                                for (; ; ) {
                                  if (T = o, l = 28, h = f, (k = d[0 | f]) - 123 >>> 0 < 4294967238) break a;
                                  if (f = f + 1 | 0, !((o = w[1071 + (k + L(o, 58) | 0) | 0]) - 1 >>> 0 < 8)) break;
                                }
                                i[s + 76 >> 2] = f;
                                c: if ((0 | o) == 27) {
                                  if ((0 | m) >= 0) break a;
                                  if (o = 0, !n) continue t;
                                } else {
                                  if (!o) break a;
                                  if ((0 | m) >= 0) {
                                    if (!n) {
                                      i[(m << 2) + t >> 2] = o;
                                      continue e;
                                    }
                                    o = i[4 + (k = (m << 3) + e | 0) >> 2], i[s + 64 >> 2] = i[k >> 2], i[s + 68 >> 2] = o;
                                    break c;
                                  }
                                  if (!n) break u;
                                  a1(s - -64 | 0, o, a);
                                }
                                if (32 & w[0 | n]) break f;
                                k = -65537 & v, v = 8192 & v ? k : v, m = 0, M = 1024, l = I;
                                c: {
                                  A: {
                                    r: {
                                      w: {
                                        y: {
                                          p: {
                                            v: {
                                              s: {
                                                l: {
                                                  d: {
                                                    m: {
                                                      g: {
                                                        E: {
                                                          h: {
                                                            C: {
                                                              switch (o = d[0 | h], (o = T && (15 & o) == 3 ? -45 & o : o) - 88 | 0) {
                                                                case 11:
                                                                  break c;
                                                                case 9:
                                                                case 13:
                                                                case 14:
                                                                case 15:
                                                                  break A;
                                                                case 27:
                                                                  break v;
                                                                case 12:
                                                                case 17:
                                                                  break d;
                                                                case 23:
                                                                  break m;
                                                                case 0:
                                                                case 32:
                                                                  break g;
                                                                case 24:
                                                                  break E;
                                                                case 22:
                                                                  break h;
                                                                case 29:
                                                                  break C;
                                                                case 1:
                                                                case 2:
                                                                case 3:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                case 7:
                                                                case 8:
                                                                case 10:
                                                                case 16:
                                                                case 18:
                                                                case 19:
                                                                case 20:
                                                                case 21:
                                                                case 25:
                                                                case 26:
                                                                case 28:
                                                                case 30:
                                                                case 31:
                                                                  break o;
                                                              }
                                                              switch (o - 65 | 0) {
                                                                case 0:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                  break A;
                                                                case 2:
                                                                  break y;
                                                                case 1:
                                                                case 3:
                                                                  break o;
                                                              }
                                                              if ((0 | o) == 83) break p;
                                                              break o;
                                                            }
                                                            r = i[s + 64 >> 2], k = i[s + 68 >> 2], M = 1024;
                                                            break l;
                                                          }
                                                          o = 0;
                                                          h: switch (255 & T) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              i[i[s + 64 >> 2] >> 2] = y;
                                                              continue t;
                                                            case 2:
                                                              r = i[s + 64 >> 2], i[r >> 2] = y, i[r + 4 >> 2] = y >> 31;
                                                              continue t;
                                                            case 3:
                                                              n2[i[s + 64 >> 2] >> 1] = y;
                                                              continue t;
                                                            case 4:
                                                              d[i[s + 64 >> 2]] = y;
                                                              continue t;
                                                            case 7:
                                                              break h;
                                                            default:
                                                              continue t;
                                                          }
                                                          r = i[s + 64 >> 2], i[r >> 2] = y, i[r + 4 >> 2] = y >> 31;
                                                          continue t;
                                                        }
                                                        A = A >>> 0 <= 8 ? 8 : A, v |= 8, o = 120;
                                                      }
                                                      if (f = I, (r = i[s + 64 >> 2]) | (k = i[s + 68 >> 2])) for (E2 = 32 & o; d[0 | (f = f - 1 | 0)] = E2 | w[1600 + (15 & r) | 0], T = !k & r >>> 0 > 15 | (0 | k) != 0, h = k, k = k >>> 4 | 0, r = (15 & h) << 28 | r >>> 4, T; ) ;
                                                      if (r = f, !(i[s + 64 >> 2] | i[s + 68 >> 2]) | !(8 & v)) break s;
                                                      M = 1024 + (o >>> 4 | 0) | 0, m = 2;
                                                      break s;
                                                    }
                                                    if (f = I, k = o = i[s + 68 >> 2], o | (r = i[s + 64 >> 2])) for (; d[0 | (f = f - 1 | 0)] = 7 & r | 48, h = !k & r >>> 0 > 7 | (0 | k) != 0, k = (o = k) >>> 3 | 0, r = (7 & o) << 29 | r >>> 3, h; ) ;
                                                    if (r = f, !(8 & v)) break s;
                                                    A = (0 | (f = I - f | 0)) < (0 | A) ? A : f + 1 | 0;
                                                    break s;
                                                  }
                                                  r = i[s + 64 >> 2], k = f = i[s + 68 >> 2], (0 | f) < 0 ? (k = o = 0 - (f + ((0 | r) != 0) | 0) | 0, r = 0 - r | 0, i[s + 64 >> 2] = r, i[s + 68 >> 2] = o, m = 1, M = 1024) : 2048 & v ? (m = 1, M = 1025) : M = (m = 1 & v) ? 1026 : 1024;
                                                }
                                                r = Q2(r, k, I);
                                              }
                                              if ((0 | A) < 0 & P) break n;
                                              if (v = P ? -65537 & v : v, !(A | ((f = i[s + 64 >> 2]) | (o = i[s + 68 >> 2])) != 0)) {
                                                r = I, A = 0;
                                                break o;
                                              }
                                              A = (0 | (f = !(f | o) + (I - r | 0) | 0)) < (0 | A) ? A : f;
                                              break o;
                                            }
                                            h = l = A >>> 0 >= 2147483647 ? 2147483647 : A, v = (0 | l) != 0;
                                            v: {
                                              s: {
                                                l: {
                                                  d: if (!(!(3 & (f = r = (f = i[s + 64 >> 2]) || 1071)) | !l)) for (; ; ) {
                                                    if (!w[0 | f]) break l;
                                                    if (v = (0 | (h = h - 1 | 0)) != 0, !(3 & (f = f + 1 | 0))) break d;
                                                    if (!h) break;
                                                  }
                                                  if (!v) break s;
                                                  if (!(!w[0 | f] | h >>> 0 < 4)) for (; ; ) {
                                                    if ((-1 ^ (o = i[f >> 2])) & o - 16843009 & -2139062144) break l;
                                                    if (f = f + 4 | 0, !((h = h - 4 | 0) >>> 0 > 3)) break;
                                                  }
                                                  if (!h) break s;
                                                }
                                                for (; ; ) {
                                                  if (!w[0 | f]) break v;
                                                  if (f = f + 1 | 0, !(h = h - 1 | 0)) break;
                                                }
                                              }
                                              f = 0;
                                            }
                                            if (l = (f = f ? f - r | 0 : l) + r | 0, (0 | A) >= 0) {
                                              v = k, A = f;
                                              break o;
                                            }
                                            if (v = k, A = f, w[0 | l]) break n;
                                            break o;
                                          }
                                          if (A) {
                                            k = i[s + 64 >> 2];
                                            break w;
                                          }
                                          o = 0, z(n, 32, g, 0, v);
                                          break r;
                                        }
                                        i[s + 12 >> 2] = 0, i[s + 8 >> 2] = i[s + 64 >> 2], k = s + 8 | 0, i[s + 64 >> 2] = k, A = -1;
                                      }
                                      for (o = 0; ; ) {
                                        if (r = i[k >> 2]) {
                                          if ((0 | (r = t1(s + 4 | 0, r))) < 0) break f;
                                          if (!(r >>> 0 > A - o >>> 0) && (k = k + 4 | 0, A >>> 0 > (o = o + r | 0) >>> 0)) continue;
                                        }
                                        break;
                                      }
                                      if (l = 61, (0 | o) < 0) break a;
                                      if (z(n, 32, g, o, v), o) for (l = 0, k = i[s + 64 >> 2]; ; ) {
                                        if (!(r = i[k >> 2]) || (l = (r = t1(A = s + 4 | 0, r)) + l | 0) >>> 0 > o >>> 0) break r;
                                        if (N(n, A, r), k = k + 4 | 0, !(o >>> 0 > l >>> 0)) break;
                                      }
                                      else o = 0;
                                    }
                                    z(n, 32, g, o, 8192 ^ v), o = (0 | o) < (0 | g) ? g : o;
                                    continue t;
                                  }
                                  if ((0 | A) < 0 & P) break n;
                                  if (l = 61, (0 | (o = 0 | R[0 | b](n, q[s + 64 >> 3], g, A, v, o))) >= 0) continue t;
                                  break a;
                                }
                                d[s + 55 | 0] = i[s + 64 >> 2], A = 1, r = f2, v = k;
                                break o;
                              }
                              k = w[o + 1 | 0], o = o + 1 | 0;
                            }
                            if (n) break i;
                            if (!S) break u;
                            for (o = 1; ; ) {
                              if (n = i[(o << 2) + t >> 2]) {
                                if (a1((o << 3) + e | 0, n, a), y = 1, (0 | (o = o + 1 | 0)) != 10) continue;
                                break i;
                              }
                              break;
                            }
                            if (y = 1, o >>> 0 >= 10) break i;
                            for (; ; ) {
                              if (i[(o << 2) + t >> 2]) break b;
                              if ((0 | (o = o + 1 | 0)) == 10) break;
                            }
                            break i;
                          }
                          l = 28;
                          break a;
                        }
                        if ((0 | (f = (0 | (k = l - r | 0)) < (0 | A) ? A : k)) > (2147483647 ^ m)) break n;
                        if (l = 61, (0 | Y) < (0 | (o = (0 | (A = f + m | 0)) < (0 | g) ? g : A))) break a;
                        z(n, 32, o, A, v), N(n, M, m), z(n, 48, o, A, 65536 ^ v), z(n, 48, f, k, 0), N(n, r, k), z(n, 32, o, A, 8192 ^ v), f = i[s + 76 >> 2];
                        continue;
                      }
                      break;
                    }
                    break;
                  }
                  y = 0;
                  break i;
                }
                l = 61;
              }
              i[806] = l;
            }
            y = -1;
          }
          return _ = s + 80 | 0, y;
        }
        function t4(n) {
          n |= 0;
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = u(0), A = 0, l = u(0), v = 0, h = 0, y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0;
          _ = o = _ - 48 | 0, d[n + 60 | 0] = 0;
          i: {
            if (f = i[n + 8 >> 2], (0 | (a = i[f + 64 >> 2])) != (0 | (s = f - -64 | 0))) for (; ; ) {
              f = i[a + 12 >> 2], e = i[a >> 2], b = i[a + 16 >> 2], t = i[i[a + 4 >> 2] + 16 >> 2];
              f: {
                if (!(c[b + 28 >> 2] != c[t + 28 >> 2] | c[b + 32 >> 2] != c[t + 32 >> 2] | i[f + 12 >> 2] == (0 | a))) {
                  if (l0(n, f, a), $(a)) {
                    t = i[f + 12 >> 2];
                    break f;
                  }
                  break i;
                }
                t = f, f = a;
              }
              if (i[t + 12 >> 2] == (0 | f)) {
                if ((0 | f) != (0 | t) && (e = (0 | e) != (0 | t) & i[e + 4 >> 2] != (0 | t) ? e : i[e >> 2], !$(t)) || (a = (0 | f) == (0 | e) | i[e + 4 >> 2] == (0 | f) ? i[e >> 2] : e, !$(f))) break i;
              } else a = e;
              if ((0 | a) == (0 | s)) break;
            }
            (a = j(28)) ? ((f = j(28)) ? (i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 32, t = j(132), i[f >> 2] = t, t ? (e = j(264), i[f + 4 >> 2] = e, e ? (i[f + 24 >> 2] = 8, i[f + 16 >> 2] = 0, i[f + 20 >> 2] = 0, i[t + 4 >> 2] = 1, i[e + 8 >> 2] = 0) : (B(t), B(f), f = 0)) : (B(f), f = 0)) : f = 0, i[a >> 2] = f, f ? (e = j(128), i[a + 4 >> 2] = e, e ? (i[a + 24 >> 2] = 8, i[a + 20 >> 2] = 0, i[a + 12 >> 2] = 0, i[a + 16 >> 2] = 32) : (B(i[f + 4 >> 2]), B(i[f >> 2]), B(f), B(a), a = 0)) : (B(a), a = 0)) : a = 0, h = a, i[n + 68 >> 2] = h;
            f: if (h) {
              a = e = i[n + 8 >> 2];
              a: {
                n: {
                  for (; ; ) {
                    if ((0 | e) != (0 | (a = i[a >> 2]))) {
                      if (f = X0(h, a), i[a + 36 >> 2] = f, (0 | f) != 2147483647) continue;
                      break n;
                    }
                    break;
                  }
                  if (_ = I = _ - 400 | 0, e = j(4 + (f = (S = i[h + 12 >> 2]) << 2) | 0), i[h + 8 >> 2] = e, _ = I + 400 | 0, e) {
                    if ((t = (f + e | 0) - 4 | 0) >>> 0 >= e >>> 0) for (f = i[h + 4 >> 2], a = e; i[a >> 2] = f, f = f + 4 | 0, t >>> 0 >= (a = a + 4 | 0) >>> 0; ) ;
                    for (i[I + 4 >> 2] = t, i[I >> 2] = e, v = 8 | I, M = 2016473283, b = I; ; ) {
                      if ((s = i[v - 4 >> 2]) >>> 0 > (k = i[b >> 2]) + 40 >>> 0) for (; ; ) {
                        for (M = L(M, 1539415821) + 1 | 0, m = i[(f = ((M >>> 0) % (1 + (s - k >> 2) >>> 0) << 2) + k | 0) >> 2], i[f >> 2] = i[k >> 2], i[k >> 2] = m, f = s + 4 | 0, a = k - 4 | 0; ; ) {
                          e = f, t = a, a = a + 4 | 0, A = i[t + 4 >> 2], g = i[A >> 2], r = c[g + 28 >> 2], y = i[m >> 2];
                          e: if (!(r < (l = c[y + 28 >> 2]))) for (; ; ) {
                            if (f = a, !(!(c[g + 32 >> 2] <= c[y + 32 >> 2]) | r != l)) break e;
                            if (a = f + 4 | 0, t = f, A = i[f + 4 >> 2], g = i[A >> 2], l > (r = c[g + 28 >> 2])) break;
                          }
                          v = i[(f = e - 4 | 0) >> 2], g = i[v >> 2];
                          e: if (!(l < (r = c[g + 28 >> 2]))) for (; ; ) {
                            if (!(!(c[y + 32 >> 2] <= c[g + 32 >> 2]) | r != l)) break e;
                            if (e = f, v = i[(f = f - 4 | 0) >> 2], g = i[v >> 2], l < (r = c[g + 28 >> 2])) break;
                          }
                          if (i[a >> 2] = v, i[f >> 2] = A, !(f >>> 0 > a >>> 0)) break;
                        }
                        if (v = i[a >> 2], i[a >> 2] = A, i[f >> 2] = v, (a - k | 0) < (s - f | 0) ? (f = e, a = s, s = t) : (f = k, a = t, k = e), i[b + 4 >> 2] = a, i[b >> 2] = f, b = b + 8 | 0, !(k + 40 >>> 0 < s >>> 0)) break;
                      }
                      if (v = b, (A = k + 4 | 0) >>> 0 <= s >>> 0) for (; ; ) {
                        y = i[A >> 2];
                        e: if (!(k >>> 0 >= (f = a = A) >>> 0)) for (; ; ) {
                          if (b = i[y >> 2], r = c[b + 28 >> 2], t = i[(f = a - 4 | 0) >> 2], e = i[t >> 2], r < (l = c[e + 28 >> 2])) {
                            f = a;
                            break e;
                          }
                          if (!(!(c[b + 32 >> 2] <= c[e + 32 >> 2]) | r != l)) {
                            f = a;
                            break e;
                          }
                          if (i[a >> 2] = t, a = f, !(k >>> 0 < f >>> 0)) break;
                        }
                        if (i[f >> 2] = y, !((A = A + 4 | 0) >>> 0 <= s >>> 0)) break;
                      }
                      if (!(I >>> 0 <= (b = v - 8 | 0) >>> 0)) break;
                    }
                    if (i[h + 20 >> 2] = 1, i[h + 16 >> 2] = S, S = i[h >> 2], (0 | (b = i[S + 8 >> 2])) > 0) for (y = i[S + 4 >> 2], m = i[S >> 2], f = b; ; ) {
                      for (t = f, h = y + ((A = i[m + (f << 2) >> 2]) << 3) | 0, a = f; (0 | b) <= (0 | (f = a << 1)) || (k = i[y + (i[m + ((e = 1 | f) << 2) >> 2] << 3) >> 2], r = c[k + 28 >> 2], s = i[y + (i[m + (f << 2) >> 2] << 3) >> 2], !(r < (l = c[s + 28 >> 2])) & (!(c[k + 32 >> 2] <= c[s + 32 >> 2]) | r != l) || (f = e)), !((0 | f) > (0 | b) || (v = i[h >> 2], r = c[v + 28 >> 2], k = i[m + (f << 2) >> 2], e = i[(s = y + (k << 3) | 0) >> 2], r < (l = c[e + 28 >> 2]) | r == l & c[v + 32 >> 2] <= c[e + 32 >> 2])); ) i[m + (a << 2) >> 2] = k, i[s + 4 >> 2] = a, a = f;
                      if (i[m + (a << 2) >> 2] = A, i[h + 4 >> 2] = a, f = t - 1 | 0, !((0 | t) > 1)) break;
                    }
                    i[S + 20 >> 2] = 1, a = 1;
                  } else a = 0;
                  if (a) break a;
                }
                y0(i[n + 68 >> 2]), i[n + 68 >> 2] = 0;
                break f;
              }
              if ((f = j(20)) && (i[f + 16 >> 2] = 9, i[f + 12 >> 2] = n, i[f >> 2] = 0, i[f + 8 >> 2] = f, i[f + 4 >> 2] = f), i[n + 64 >> 2] = f, !f) break i;
              if (o1(n, u(-3999999973526325e22)), o1(n, u(3999999973526325e22)), f = v0(i[n + 68 >> 2])) for (; ; ) {
                a: if (a = b1(i[n + 68 >> 2])) for (; ; ) {
                  if (c[a + 28 >> 2] != c[f + 28 >> 2] | c[a + 32 >> 2] != c[f + 32 >> 2]) break a;
                  if (t = i[v0(i[n + 68 >> 2]) + 8 >> 2], e = i[f + 8 >> 2], i[o + 24 >> 2] = 0, i[o + 28 >> 2] = 0, i[o + 16 >> 2] = 0, i[o + 20 >> 2] = 0, i[o + 8 >> 2] = 0, i[o + 12 >> 2] = 0, i[o >> 2] = 1056964608, i[o + 4 >> 2] = 1056964608, a = i[e + 16 >> 2], i[o + 16 >> 2] = i[a + 12 >> 2], i[o + 20 >> 2] = i[i[t + 16 >> 2] + 12 >> 2], c[o + 36 >> 2] = c[a + 16 >> 2], c[o + 40 >> 2] = c[a + 20 >> 2], c[o + 44 >> 2] = c[a + 24 >> 2], i[a + 12 >> 2] = 0, b = a + 12 | 0, (0 | (a = i[n + 1736 >> 2])) == 10 ? R[i[n + 76 >> 2]](o + 36 | 0, o + 16 | 0, o, b) : R[0 | a](o + 36 | 0, o + 16 | 0, o, b, i[n + 1896 >> 2]), i[b >> 2] || (i[b >> 2] = i[o + 16 >> 2]), !Z(e, t)) break i;
                  if (!(a = b1(i[n + 68 >> 2]))) break;
                }
                if (a0(n, f), !(f = v0(i[n + 68 >> 2]))) break;
              }
              for (a = i[i[i[n + 64 >> 2] + 4 >> 2] >> 2], i[n + 72 >> 2] = i[i[a >> 2] + 16 >> 2]; i[i[a >> 2] + 24 >> 2] = 0, m2(i[a + 4 >> 2]), B(a), f = i[n + 64 >> 2], a = i[i[f + 4 >> 2] >> 2]; ) ;
              if ((0 | f) != (0 | (a = i[f + 4 >> 2]))) for (; B(a), (0 | f) != (0 | (a = i[a + 4 >> 2])); ) ;
              if (B(f), y0(i[n + 68 >> 2]), P = 1, f = i[n + 8 >> 2], (0 | (n = i[f + 40 >> 2])) != (0 | (a = f + 40 | 0))) for (; ; ) {
                if (e = i[n + 8 >> 2], n = i[n >> 2], (0 | e) == i[i[e + 12 >> 2] + 12 >> 2] && (f = i[e + 8 >> 2], i[f + 28 >> 2] = i[f + 28 >> 2] + i[e + 28 >> 2], f = i[f + 4 >> 2], i[f + 28 >> 2] = i[f + 28 >> 2] + i[i[e + 4 >> 2] + 28 >> 2], !$(e))) {
                  P = 0;
                  break f;
                }
                if ((0 | n) == (0 | a)) break;
              }
            }
            return _ = o + 48 | 0, 0 | P;
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function a0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = u(0), k = 0, s = 0, r = u(0), A = 0, l = 0, v = 0;
          _ = v = _ - 16 | 0, i[n + 72 >> 2] = f, a = t = i[f + 8 >> 2];
          i: {
            f: {
              a: {
                for (; ; ) {
                  if (e = i[a + 24 >> 2]) break a;
                  if ((0 | t) == (0 | (a = i[a + 8 >> 2]))) break;
                }
                for (i[v >> 2] = i[t + 4 >> 2], t = a = i[n + 64 >> 2]; t = i[t + 4 >> 2], (e = i[t >> 2]) && !(0 | R[i[a + 16 >> 2]](i[a + 12 >> 2], v, e)); ) ;
                if (e = i[t >> 2], t = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], k = i[t >> 2], b = i[e >> 2], J(i[i[b + 4 >> 2] + 16 >> 2], f, i[b + 16 >> 2]) == u(0)) {
                  if (o = c[f + 28 >> 2], a = i[e >> 2], t = i[a + 16 >> 2], !(o != c[t + 28 >> 2] | c[t + 32 >> 2] != c[f + 32 >> 2])) {
                    l0(n, a, i[f + 8 >> 2]);
                    break f;
                  }
                  if (b = i[a + 4 >> 2], t = i[b + 16 >> 2], !(o == c[t + 28 >> 2] & c[t + 32 >> 2] == c[f + 32 >> 2])) {
                    if (!o2(b)) break i;
                    if (w[e + 15 | 0]) {
                      if (!$(i[a + 8 >> 2])) break i;
                      d[e + 15 | 0] = 0;
                    }
                    if (!Z(i[f + 8 >> 2], a)) break i;
                    a0(n, f);
                    break f;
                  }
                  for (; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], (0 | t) == i[i[i[e >> 2] + 4 >> 2] + 16 >> 2]; ) ;
                  if (t = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], k = i[t >> 2], b = i[k + 4 >> 2], a = i[b + 8 >> 2], w[t + 15 | 0]) {
                    if (i[k + 24 >> 2] = 0, m2(i[t + 4 >> 2]), B(t), !$(b)) break i;
                    b = i[i[a + 4 >> 2] + 12 >> 2];
                  }
                  if (!Z(i[f + 8 >> 2], b)) break i;
                  s = i[b + 8 >> 2], t = i[i[a + 4 >> 2] + 16 >> 2], o = c[t + 28 >> 2], k = i[a + 16 >> 2], S2(n, e, s, a, f = o < (r = c[k + 28 >> 2]) | o == r & c[t + 32 >> 2] <= c[k + 32 >> 2] ? a : 0, 1);
                  break f;
                }
                if (s = w[e + 12 | 0], k = i[k + 4 >> 2], A = i[k + 16 >> 2], o = c[A + 28 >> 2], l = i[i[b + 4 >> 2] + 16 >> 2], a = e, o < (r = c[l + 28 >> 2]) || o == r && (a = e, c[A + 32 >> 2] <= c[l + 32 >> 2]) || (a = t), s | w[a + 15 | 0]) {
                  n: {
                    if ((0 | e) == (0 | a)) {
                      if (t = A2(i[i[f + 8 >> 2] + 4 >> 2], i[b + 12 >> 2])) break n;
                      break i;
                    }
                    if (!(t = A2(i[i[k + 8 >> 2] + 4 >> 2], i[f + 8 >> 2]))) break i;
                    t = i[t + 4 >> 2];
                  }
                  if (w[a + 15 | 0]) {
                    if ($(i[a >> 2])) {
                      i[a >> 2] = t, d[a + 15 | 0] = 0, i[t + 24 >> 2] = a, a0(n, f);
                      break f;
                    }
                    break i;
                  }
                  if (!(a = j(16)) || (i[a >> 2] = t, e = w0(i[n + 64 >> 2], i[e + 4 >> 2], a), i[a + 4 >> 2] = e, !e)) break i;
                  d[a + 13 | 0] = 0, d[a + 14 | 0] = 0, d[a + 15 | 0] = 0, i[t + 24 >> 2] = a, b = i[n + 56 >> 2], t = i[i[a >> 2] + 28 >> 2] + i[i[i[e + 4 >> 2] >> 2] + 8 >> 2] | 0, i[a + 8 >> 2] = t;
                  n: {
                    e: switch (b - 100130 | 0) {
                      case 0:
                        e = 1 & t;
                        break n;
                      case 1:
                        e = (0 | t) != 0;
                        break n;
                      case 2:
                        e = (0 | t) > 0;
                        break n;
                      case 3:
                        e = t >>> 31 | 0;
                        break n;
                      case 4:
                        break e;
                      default:
                        break n;
                    }
                    e = t - 2 >>> 0 < 4294967293;
                  }
                  d[a + 12 | 0] = e, a0(n, f);
                  break f;
                }
                S2(a = n, e, n = i[f + 8 >> 2], n, 0, 1);
                break f;
              }
              for (f = i[i[e >> 2] + 16 >> 2]; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], a = i[e >> 2], (0 | f) == i[a + 16 >> 2]; ) ;
              if (w[e + 15 | 0] && (!(f = A2(i[i[i[i[i[e + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[a + 12 >> 2])) || !$(i[e >> 2]) || (i[e >> 2] = f, d[e + 15 | 0] = 0, i[f + 24 >> 2] = e, !(e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2]))))
                break i;
              if (f = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], a = i[f >> 2], f = L2(n, f, 0), (0 | a) != (0 | (t = i[f + 8 >> 2]))) S2(n, e, t, a, a, 1);
              else {
                if (t = i[e >> 2], A = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], k = i[A >> 2], i[i[t + 4 >> 2] + 16 >> 2] != i[i[k + 4 >> 2] + 16 >> 2] && J0(n, e), l = 1, b = i[n + 72 >> 2], o = c[b + 28 >> 2], s = i[t + 16 >> 2], !(o != c[s + 28 >> 2] | c[s + 32 >> 2] != c[b + 32 >> 2])) {
                  if (!Z(i[i[a + 4 >> 2] + 12 >> 2], t)) break i;
                  for (a = i[i[e >> 2] + 16 >> 2]; e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], b = i[e >> 2], (0 | a) == i[b + 16 >> 2]; ) ;
                  if (w[e + 15 | 0] && (!(a = A2(i[i[i[i[i[e + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], i[b + 12 >> 2])) || !$(i[e >> 2]) || (i[e >> 2] = a, d[e + 15 | 0] = 0, i[a + 24 >> 2] = e, !(e = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2]))))
                    break i;
                  b = i[i[i[e + 4 >> 2] + 8 >> 2] >> 2], a = i[b >> 2], L2(n, b, A), b = i[n + 72 >> 2], o = c[b + 28 >> 2], l = 0;
                }
                a: {
                  if (r = o, s = i[k + 16 >> 2], r != (o = c[s + 28 >> 2]) | c[s + 32 >> 2] != c[b + 32 >> 2]) {
                    if (l) break a;
                  } else {
                    if (!Z(f, i[i[k + 4 >> 2] + 12 >> 2])) break i;
                    f = L2(n, A, 0);
                  }
                  S2(n, e, i[f + 8 >> 2], a, a, 1);
                  break f;
                }
                if (a = i[t + 16 >> 2], !((r = c[a + 28 >> 2]) > o) & (!(c[s + 32 >> 2] <= c[a + 32 >> 2]) | o != r) || (t = i[i[k + 4 >> 2] + 12 >> 2]), !(f = A2(i[i[f + 8 >> 2] + 4 >> 2], t))) break i;
                S2(n, e, f, a = i[f + 8 >> 2], a, 0), d[i[i[f + 4 >> 2] + 24 >> 2] + 15 | 0] = 1, K0(n, e);
              }
            }
            return void (_ = v + 16 | 0);
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function V0(n) {
          n |= 0;
          var f = 0, a = 0, e = 0, t = u(0), b = u(0), o = 0, k = 0, s = u(0), r = 0, A = u(0), l = u(0), v = 0, h = 0, y = u(0), m = u(0), g = u(0), I = u(0), S = u(0), M = u(0), P = u(0), T = u(0), O = u(0), G = u(0), Y = u(0), f2 = 0, E2 = 0, p0 = 0, m0 = 0, g0 = 0, E0 = 0, C0 = 0, R0 = 0, I0 = u(0);
          h = i[n + 8 >> 2], f = _ - 80 | 0, I = c[n + 16 >> 2], c[f + 8 >> 2] = I, S = c[n + 20 >> 2], c[f + 12 >> 2] = S, M = c[n + 24 >> 2], c[f + 16 >> 2] = M, r = i[h >> 2];
          i: if (E2 = I == u(0) & S == u(0) & M == u(0)) {
            if (i[f + 76 >> 2] = -42943038, i[f + 68 >> 2] = -42943038, i[f + 72 >> 2] = -42943038, i[f + 64 >> 2] = 2104540610, i[f + 56 >> 2] = 2104540610, i[f + 60 >> 2] = 2104540610, (0 | h) != (0 | r)) {
              for (g = u(19999999867631625e21), O = u(-19999999867631625e21), P = u(-19999999867631625e21), T = u(19999999867631625e21), G = u(-19999999867631625e21), Y = u(19999999867631625e21), A = u(-19999999867631625e21), s = u(19999999867631625e21), y = u(-19999999867631625e21), b = u(19999999867631625e21), l = u(-19999999867631625e21), m = u(19999999867631625e21), a = r; A = (e = (t = c[a + 24 >> 2]) > A) ? t : A, O = e ? t : O, s = (v = t < s) ? t : s, g = v ? t : g, y = (k = (t = c[a + 20 >> 2]) > y) ? t : y, P = k ? t : P, b = (f2 = b > t) ? t : b, T = f2 ? t : T, l = (o = (t = c[a + 16 >> 2]) > l) ? t : l, G = o ? t : G, p0 = o ? a : p0, m = (o = t < m) ? t : m, Y = o ? t : Y, m0 = o ? a : m0, g0 = e ? a : g0, E0 = v ? a : E0, C0 = k ? a : C0, R0 = f2 ? a : R0, (0 | h) != (0 | (a = i[a >> 2])); ) ;
              i[f + 20 >> 2] = m0, c[f + 56 >> 2] = Y, c[f + 68 >> 2] = G, i[f + 32 >> 2] = p0, c[f + 60 >> 2] = T, i[f + 24 >> 2] = R0, c[f + 72 >> 2] = P, i[f + 36 >> 2] = C0, c[f + 64 >> 2] = g, i[f + 28 >> 2] = E0, c[f + 76 >> 2] = O, i[f + 40 >> 2] = g0, s = u(A - s), A = u(l - m), b = u(y - b);
            } else A = u(-3999999973526325e22), s = u(-3999999973526325e22), b = u(-3999999973526325e22);
            if (a = 2, e = (k = b > A) << 2, v = k, o = f + 56 | 0, v = u(c[(k = f + 68 | 0) + e >> 2] - c[o + e >> 2]) < s ? 2 : v, c[(e = v << 2) + o >> 2] >= c[e + k >> 2]) i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 0;
            else {
              if (a = i[(e = v << 2) + (f + 20 | 0) >> 2], e = i[e + (f + 32 | 0) >> 2], G = c[e + 16 >> 2], g = u(c[a + 16 >> 2] - G), c[f + 44 >> 2] = g, Y = c[e + 20 >> 2], l = u(c[a + 20 >> 2] - Y), c[f + 48 >> 2] = l, I0 = c[e + 24 >> 2], m = u(c[a + 24 >> 2] - I0), O = u(-g), (0 | h) != (0 | r)) {
                for (T = u(-l), P = u(-m), b = u(0), a = r; s = u(c[a + 20 >> 2] - Y), t = u(c[a + 16 >> 2] - G), A = u(u(g * s) + u(t * T)), y = u(c[a + 24 >> 2] - I0), s = u(u(l * y) + u(s * P)), t = u(u(m * t) + u(y * O)), (y = u(u(A * A) + u(u(s * s) + u(t * t)))) > b && (M = A, S = t, I = s, b = y), (0 | h) != (0 | (a = i[a >> 2])); ) ;
                if (c[f + 16 >> 2] = M, c[f + 12 >> 2] = S, c[f + 8 >> 2] = I, !(b <= u(0))) break i;
              } else P = u(-m), T = u(-l);
              i[f + 16 >> 2] = 0, i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 0, a = (l < u(0) ? T : l) > (g < u(0) ? O : g), b = c[(f + 44 | 0) + (a << 2) >> 2], a = (m < u(0) ? P : m) > (b < u(0) ? u(-b) : b) ? 2 : a;
            }
            i[(f + 8 | 0) + (a << 2) >> 2] = 1065353216, M = c[f + 16 >> 2], I = c[f + 8 >> 2], S = c[f + 12 >> 2];
          }
          if (k = f + 8 | 0, e = (S < u(0) ? u(-S) : S) > (I < u(0) ? u(-I) : I), b = c[k + (e << 2) >> 2], a = n + 28 | 0, f = (M < u(0) ? u(-M) : M) > (b < u(0) ? u(-b) : b) ? 2 : e, i[a + (e = f << 2) >> 2] = 0, i[(o = ((0 | (o = f + 1 | 0)) != 3 ? o : 0) << 2) + a >> 2] = 1065353216, i[(f = (f + 2 >>> 0) % 3 << 2) + a >> 2] = 0, i[(a = n + 40 | 0) + e >> 2] = 0, e = c[e + k >> 2] > u(0), c[a + o >> 2] = u(e ? -0 : 0), c[f + a >> 2] = u(e ? 1 : -1), !(e = (0 | h) == (0 | r))) for (a = r; f = i[a + 20 >> 2], i[a + 28 >> 2] = i[a + 16 >> 2], i[a + 32 >> 2] = f, (0 | h) != (0 | (a = i[a >> 2])); ) ;
          if (E2 && (0 | (f = i[h + 40 >> 2])) != (0 | (k = h + 40 | 0))) {
            for (b = u(0); ; ) {
              if (o = i[f + 8 >> 2], i[(a = o) + 28 >> 2] > 0) for (; v = i[a + 16 >> 2], f2 = i[i[a + 4 >> 2] + 16 >> 2], b = u(u(u(c[v + 28 >> 2] - c[f2 + 28 >> 2]) * u(c[v + 32 >> 2] + c[f2 + 32 >> 2])) + b), (0 | o) != (0 | (a = i[a + 12 >> 2])); ) ;
              if ((0 | k) == (0 | (f = i[f >> 2]))) break;
            }
            if (b < u(0)) {
              if (!e) for (; c[r + 32 >> 2] = -c[r + 32 >> 2], (0 | (r = i[r >> 2])) != (0 | h); ) ;
              c[n + 40 >> 2] = -c[n + 40 >> 2], c[n + 44 >> 2] = -c[n + 44 >> 2], c[n + 48 >> 2] = -c[n + 48 >> 2];
            }
          }
        }
        function o4(n, f) {
          f |= 0;
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, h = 0, y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0;
          if (_ = k = _ - 16 | 0, i[84 + (n |= 0) >> 2] = 0, !(a = (0 | (r = i[f + 40 >> 2])) == (0 | (h = f + 40 | 0)))) {
            for (f = r; d[f + 20 | 0] = 0, (0 | h) != (0 | (f = i[f >> 2])); ) ;
            if (!a) {
              for (; ; ) {
                if (!(w[r + 20 | 0] | !w[r + 21 | 0])) {
                  if (o = i[r + 8 >> 2], w[n + 80 | 0]) f = 1, a = 1;
                  else {
                    b = 0, t = 0, f = 0, e = i[(a = o) + 20 >> 2];
                    i: if (w[e + 21 | 0]) for (; ; ) {
                      if (w[(f = e) + 20 | 0]) {
                        f = t;
                        break i;
                      }
                      if (d[f + 20 | 0] = 1, i[f + 16 >> 2] = t, b = b + 1 | 0, t = f, a = i[a + 8 >> 2], e = i[a + 20 >> 2], !w[e + 21 | 0]) break;
                    }
                    e = i[o + 4 >> 2], t = i[e + 20 >> 2];
                    i: {
                      f: if (!w[t + 21 | 0] | w[t + 20 | 0]) {
                        if (y = o, !f) break i;
                      } else for (a = f; ; ) {
                        if (d[(f = t) + 20 | 0] = 1, i[f + 16 >> 2] = a, b = b + 1 | 0, y = i[e + 12 >> 2], e = i[y + 4 >> 2], t = i[e + 20 >> 2], !w[t + 21 | 0]) break f;
                        if (a = f, w[t + 20 | 0]) break;
                      }
                      for (; d[f + 20 | 0] = 0, f = i[f + 16 >> 2]; ) ;
                    }
                    m = (0 | b) > 1, t = 0, e = 0, f = 0, A = i[o + 12 >> 2], a = i[(s = A) + 20 >> 2];
                    i: if (w[a + 21 | 0]) for (; ; ) {
                      if (w[(f = a) + 20 | 0]) {
                        f = e;
                        break i;
                      }
                      if (d[f + 20 | 0] = 1, i[f + 16 >> 2] = e, t = t + 1 | 0, e = f, s = i[s + 8 >> 2], a = i[s + 20 >> 2], !w[a + 21 | 0]) break;
                    }
                    l = m ? b : 1, e = i[A + 4 >> 2], b = i[e + 20 >> 2];
                    i: {
                      f: if (!w[b + 21 | 0] | w[b + 20 | 0]) {
                        if (!f) break i;
                      } else for (a = f; ; ) {
                        if (d[(f = b) + 20 | 0] = 1, i[f + 16 >> 2] = a, t = t + 1 | 0, A = i[e + 12 >> 2], e = i[A + 4 >> 2], b = i[e + 20 >> 2], !w[b + 21 | 0]) break f;
                        if (a = f, w[b + 20 | 0]) break;
                      }
                      for (; d[f + 20 | 0] = 0, f = i[f + 16 >> 2]; ) ;
                    }
                    g = (0 | t) > (0 | l), b = 0, e = 0, f = 0, v = i[i[o + 8 >> 2] + 4 >> 2], a = i[(s = v) + 20 >> 2];
                    i: if (w[a + 21 | 0]) for (; ; ) {
                      if (w[(f = a) + 20 | 0]) {
                        f = e;
                        break i;
                      }
                      if (d[f + 20 | 0] = 1, i[f + 16 >> 2] = e, b = b + 1 | 0, e = f, s = i[s + 8 >> 2], a = i[s + 20 >> 2], !w[a + 21 | 0]) break;
                    }
                    s = g ? t : l, e = i[v + 4 >> 2], t = i[e + 20 >> 2];
                    i: {
                      f: if (!w[t + 21 | 0] | w[t + 20 | 0]) {
                        if (!f) break i;
                      } else for (a = f; ; ) {
                        if (d[(f = t) + 20 | 0] = 1, i[f + 16 >> 2] = a, b = b + 1 | 0, v = i[e + 12 >> 2], e = i[v + 4 >> 2], t = i[e + 20 >> 2], !w[t + 21 | 0]) break f;
                        if (a = f, w[t + 20 | 0]) break;
                      }
                      for (; d[f + 20 | 0] = 0, f = i[f + 16 >> 2]; ) ;
                    }
                    A0(f = k + 4 | 0, o), I = i[k + 12 >> 2], S = i[k + 8 >> 2], a = i[k + 4 >> 2], A0(f, i[o + 12 >> 2]), M = i[k + 12 >> 2], P = i[k + 8 >> 2], l = i[k + 4 >> 2], A0(f, i[i[o + 8 >> 2] + 4 >> 2]), f = b, (0 | (f = (t = (0 | (f = (e = (0 | (f = (b = (0 | b) > (0 | s)) ? f : s)) < (0 | a)) ? a : f)) < (0 | l)) ? l : f)) >= (0 | (a = i[k + 4 >> 2])) ? (o = t ? P : e ? S : b ? v : g ? A : m ? y : o, a = t ? M : e ? I : b || g || m ? 2 : 1) : (o = i[k + 8 >> 2], f = a, a = i[k + 12 >> 2]);
                  }
                  R[0 | a](n, o, f);
                }
                if ((0 | h) == (0 | (r = i[r >> 2]))) break;
              }
              if (o = i[n + 84 >> 2]) {
                for ((0 | (f = i[n + 1716 >> 2])) == 3 ? R[i[n + 88 >> 2]](4) : R[0 | f](4, i[n + 1896 >> 2]), b = -1; ; ) {
                  for (f = i[o + 8 >> 2]; w[n + 80 | 0] && (0 | (a = !(e = w[i[i[f + 4 >> 2] + 20 >> 2] + 21 | 0]))) != (0 | b) && ((0 | (t = i[n + 1720 >> 2])) == 4 ? R[i[n + 92 >> 2]](!e) : R[0 | t](!e, i[n + 1896 >> 2]), b = a), (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (f = i[f + 12 >> 2])) != i[o + 8 >> 2]; ) ;
                  if (!(o = i[o + 16 >> 2])) break;
                }
                (0 | (f = i[n + 1728 >> 2])) == 6 ? R[i[n + 100 >> 2]]() : R[0 | f](i[n + 1896 >> 2]), i[n + 84 >> 2] = 0;
              }
            }
          }
          _ = k + 16 | 0;
        }
        function B(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0;
          i: if (n |= 0) {
            b = (e = n - 8 | 0) + (n = -8 & (f = i[n - 4 >> 2])) | 0;
            f: if (!(1 & f)) {
              if (!(2 & f) || (e = e - (f = i[e >> 2]) | 0) >>> 0 < i0[858]) break i;
              n = n + f | 0;
              a: {
                n: {
                  if (i[859] != (0 | e)) {
                    if (f >>> 0 <= 255) {
                      if (t = f >>> 3 | 0, (0 | (f = i[e + 12 >> 2])) == (0 | (a = i[e + 8 >> 2]))) {
                        s = 3416, r = i[854] & i2(t), i[s >> 2] = r;
                        break f;
                      }
                      i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                      break f;
                    }
                    if (k = i[e + 24 >> 2], (0 | e) != (0 | (f = i[e + 12 >> 2]))) {
                      a = i[e + 8 >> 2], i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                      break a;
                    }
                    if (!(a = i[(t = e + 20 | 0) >> 2])) {
                      if (!(a = i[e + 16 >> 2])) break n;
                      t = e + 16 | 0;
                    }
                    for (; o = t, (a = i[(t = (f = a) + 20 | 0) >> 2]) || (t = f + 16 | 0, a = i[f + 16 >> 2]); ) ;
                    i[o >> 2] = 0;
                    break a;
                  }
                  if ((3 & (f = i[b + 4 >> 2])) != 3) break f;
                  return i[856] = n, i[b + 4 >> 2] = -2 & f, i[e + 4 >> 2] = 1 | n, void (i[b >> 2] = n);
                }
                f = 0;
              }
              if (k) {
                a = i[e + 28 >> 2];
                a: {
                  if (i[(t = 3720 + (a << 2) | 0) >> 2] == (0 | e)) {
                    if (i[t >> 2] = f, f) break a;
                    s = 3420, r = i[855] & i2(a), i[s >> 2] = r;
                    break f;
                  }
                  if (i[k + (i[k + 16 >> 2] == (0 | e) ? 16 : 20) >> 2] = f, !f) break f;
                }
                i[f + 24 >> 2] = k, (a = i[e + 16 >> 2]) && (i[f + 16 >> 2] = a, i[a + 24 >> 2] = f), (a = i[e + 20 >> 2]) && (i[f + 20 >> 2] = a, i[a + 24 >> 2] = f);
              }
            }
            if (!(e >>> 0 >= b >>> 0) && 1 & (f = i[b + 4 >> 2])) {
              f: {
                a: {
                  n: {
                    e: {
                      if (!(2 & f)) {
                        if (i[860] == (0 | b)) {
                          if (i[860] = e, n = i[857] + n | 0, i[857] = n, i[e + 4 >> 2] = 1 | n, i[859] != (0 | e)) break i;
                          return i[856] = 0, void (i[859] = 0);
                        }
                        if (i[859] == (0 | b)) return i[859] = e, n = i[856] + n | 0, i[856] = n, i[e + 4 >> 2] = 1 | n, void (i[n + e >> 2] = n);
                        if (n = (-8 & f) + n | 0, f >>> 0 <= 255) {
                          if (t = f >>> 3 | 0, (0 | (f = i[b + 12 >> 2])) == (0 | (a = i[b + 8 >> 2]))) {
                            s = 3416, r = i[854] & i2(t), i[s >> 2] = r;
                            break a;
                          }
                          i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                          break a;
                        }
                        if (k = i[b + 24 >> 2], (0 | b) != (0 | (f = i[b + 12 >> 2]))) {
                          a = i[b + 8 >> 2], i[a + 12 >> 2] = f, i[f + 8 >> 2] = a;
                          break n;
                        }
                        if (!(a = i[(t = b + 20 | 0) >> 2])) {
                          if (!(a = i[b + 16 >> 2])) break e;
                          t = b + 16 | 0;
                        }
                        for (; o = t, (a = i[(t = (f = a) + 20 | 0) >> 2]) || (t = f + 16 | 0, a = i[f + 16 >> 2]); ) ;
                        i[o >> 2] = 0;
                        break n;
                      }
                      i[b + 4 >> 2] = -2 & f, i[e + 4 >> 2] = 1 | n, i[n + e >> 2] = n;
                      break f;
                    }
                    f = 0;
                  }
                  if (k) {
                    a = i[b + 28 >> 2];
                    n: {
                      if (i[(t = 3720 + (a << 2) | 0) >> 2] == (0 | b)) {
                        if (i[t >> 2] = f, f) break n;
                        s = 3420, r = i[855] & i2(a), i[s >> 2] = r;
                        break a;
                      }
                      if (i[k + (i[k + 16 >> 2] == (0 | b) ? 16 : 20) >> 2] = f, !f) break a;
                    }
                    i[f + 24 >> 2] = k, (a = i[b + 16 >> 2]) && (i[f + 16 >> 2] = a, i[a + 24 >> 2] = f), (a = i[b + 20 >> 2]) && (i[f + 20 >> 2] = a, i[a + 24 >> 2] = f);
                  }
                }
                if (i[e + 4 >> 2] = 1 | n, i[n + e >> 2] = n, i[859] == (0 | e)) return void (i[856] = n);
              }
              if (n >>> 0 <= 255) return f = 3456 + (-8 & n) | 0, (a = i[854]) & (n = 1 << (n >>> 3)) ? n = i[f + 8 >> 2] : (i[854] = n | a, n = f), i[f + 8 >> 2] = e, i[n + 12 >> 2] = e, i[e + 12 >> 2] = f, void (i[e + 8 >> 2] = n);
              a = 31, n >>> 0 <= 16777215 && (a = 62 + ((n >>> 38 - (f = s2(n >>> 8 | 0)) & 1) - (f << 1) | 0) | 0), i[e + 28 >> 2] = a, i[e + 16 >> 2] = 0, i[e + 20 >> 2] = 0, f = 3720 + (a << 2) | 0;
              f: {
                a: {
                  if ((t = i[855]) & (o = 1 << a)) {
                    for (a = n << ((0 | a) != 31 ? 25 - (a >>> 1 | 0) | 0 : 0), f = i[f >> 2]; ; ) {
                      if (t = f, (-8 & i[f + 4 >> 2]) == (0 | n)) break a;
                      if (o = a >>> 29 | 0, a <<= 1, !(f = i[16 + (o = f + (4 & o) | 0) >> 2])) break;
                    }
                    i[o + 16 >> 2] = e, i[e + 24 >> 2] = t;
                  } else i[855] = t | o, i[f >> 2] = e, i[e + 24 >> 2] = f;
                  i[e + 12 >> 2] = e, i[e + 8 >> 2] = e;
                  break f;
                }
                n = i[t + 8 >> 2], i[n + 12 >> 2] = e, i[t + 8 >> 2] = e, i[e + 24 >> 2] = 0, i[e + 12 >> 2] = t, i[e + 8 >> 2] = n;
              }
              n = i[862] - 1 | 0, i[862] = n || -1;
            }
          }
        }
        function z0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0;
          b = n + f | 0;
          i: {
            f: if (!(1 & (a = i[n + 4 >> 2]))) {
              if (!(2 & a)) break i;
              f = (a = i[n >> 2]) + f | 0;
              a: {
                n: {
                  e: {
                    if ((0 | (n = n - a | 0)) != i[859]) {
                      if (a >>> 0 <= 255) {
                        if ((0 | (e = i[n + 8 >> 2])) != (0 | (t = i[n + 12 >> 2]))) break e;
                        s = 3416, r = i[854] & i2(a >>> 3 | 0), i[s >> 2] = r;
                        break f;
                      }
                      if (k = i[n + 24 >> 2], (0 | (a = i[n + 12 >> 2])) != (0 | n)) {
                        e = i[n + 8 >> 2], i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
                        break a;
                      }
                      if (!(e = i[(t = n + 20 | 0) >> 2])) {
                        if (!(e = i[n + 16 >> 2])) break n;
                        t = n + 16 | 0;
                      }
                      for (; o = t, (e = i[(t = (a = e) + 20 | 0) >> 2]) || (t = a + 16 | 0, e = i[a + 16 >> 2]); ) ;
                      i[o >> 2] = 0;
                      break a;
                    }
                    if ((3 & (a = i[b + 4 >> 2])) != 3) break f;
                    return i[856] = f, i[b + 4 >> 2] = -2 & a, i[n + 4 >> 2] = 1 | f, void (i[b >> 2] = f);
                  }
                  i[e + 12 >> 2] = t, i[t + 8 >> 2] = e;
                  break f;
                }
                a = 0;
              }
              if (k) {
                e = i[n + 28 >> 2];
                a: {
                  if (i[(t = 3720 + (e << 2) | 0) >> 2] == (0 | n)) {
                    if (i[t >> 2] = a, a) break a;
                    s = 3420, r = i[855] & i2(e), i[s >> 2] = r;
                    break f;
                  }
                  if (i[k + (i[k + 16 >> 2] == (0 | n) ? 16 : 20) >> 2] = a, !a) break f;
                }
                i[a + 24 >> 2] = k, (e = i[n + 16 >> 2]) && (i[a + 16 >> 2] = e, i[e + 24 >> 2] = a), (e = i[n + 20 >> 2]) && (i[a + 20 >> 2] = e, i[e + 24 >> 2] = a);
              }
            }
            f: {
              a: {
                n: {
                  e: {
                    if (!(2 & (a = i[b + 4 >> 2]))) {
                      if (i[860] == (0 | b)) {
                        if (i[860] = n, f = i[857] + f | 0, i[857] = f, i[n + 4 >> 2] = 1 | f, i[859] != (0 | n)) break i;
                        return i[856] = 0, void (i[859] = 0);
                      }
                      if (i[859] == (0 | b)) return i[859] = n, f = i[856] + f | 0, i[856] = f, i[n + 4 >> 2] = 1 | f, void (i[n + f >> 2] = f);
                      if (f = (-8 & a) + f | 0, a >>> 0 <= 255) {
                        if (t = a >>> 3 | 0, (0 | (a = i[b + 12 >> 2])) == (0 | (e = i[b + 8 >> 2]))) {
                          s = 3416, r = i[854] & i2(t), i[s >> 2] = r;
                          break a;
                        }
                        i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
                        break a;
                      }
                      if (k = i[b + 24 >> 2], (0 | b) != (0 | (a = i[b + 12 >> 2]))) {
                        e = i[b + 8 >> 2], i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
                        break n;
                      }
                      if (!(e = i[(t = b + 20 | 0) >> 2])) {
                        if (!(e = i[b + 16 >> 2])) break e;
                        t = b + 16 | 0;
                      }
                      for (; o = t, (e = i[(t = (a = e) + 20 | 0) >> 2]) || (t = a + 16 | 0, e = i[a + 16 >> 2]); ) ;
                      i[o >> 2] = 0;
                      break n;
                    }
                    i[b + 4 >> 2] = -2 & a, i[n + 4 >> 2] = 1 | f, i[n + f >> 2] = f;
                    break f;
                  }
                  a = 0;
                }
                if (k) {
                  e = i[b + 28 >> 2];
                  n: {
                    if (i[(t = 3720 + (e << 2) | 0) >> 2] == (0 | b)) {
                      if (i[t >> 2] = a, a) break n;
                      s = 3420, r = i[855] & i2(e), i[s >> 2] = r;
                      break a;
                    }
                    if (i[k + (i[k + 16 >> 2] == (0 | b) ? 16 : 20) >> 2] = a, !a) break a;
                  }
                  i[a + 24 >> 2] = k, (e = i[b + 16 >> 2]) && (i[a + 16 >> 2] = e, i[e + 24 >> 2] = a), (e = i[b + 20 >> 2]) && (i[a + 20 >> 2] = e, i[e + 24 >> 2] = a);
                }
              }
              if (i[n + 4 >> 2] = 1 | f, i[n + f >> 2] = f, i[859] == (0 | n)) return void (i[856] = f);
            }
            if (f >>> 0 <= 255) return a = 3456 + (-8 & f) | 0, (e = i[854]) & (f = 1 << (f >>> 3)) ? f = i[a + 8 >> 2] : (i[854] = f | e, f = a), i[a + 8 >> 2] = n, i[f + 12 >> 2] = n, i[n + 12 >> 2] = a, void (i[n + 8 >> 2] = f);
            e = 31, f >>> 0 <= 16777215 && (e = 62 + ((f >>> 38 - (a = s2(f >>> 8 | 0)) & 1) - (a << 1) | 0) | 0), i[n + 28 >> 2] = e, i[n + 16 >> 2] = 0, i[n + 20 >> 2] = 0, a = 3720 + (e << 2) | 0;
            f: {
              if ((t = i[855]) & (o = 1 << e)) {
                for (e = f << ((0 | e) != 31 ? 25 - (e >>> 1 | 0) | 0 : 0), a = i[a >> 2]; ; ) {
                  if (t = a, (-8 & i[a + 4 >> 2]) == (0 | f)) break f;
                  if (o = e >>> 29 | 0, e <<= 1, !(a = i[16 + (o = a + (4 & o) | 0) >> 2])) break;
                }
                i[o + 16 >> 2] = n, i[n + 24 >> 2] = t;
              } else i[855] = t | o, i[a >> 2] = n, i[n + 24 >> 2] = a;
              return i[n + 12 >> 2] = n, void (i[n + 8 >> 2] = n);
            }
            f = i[t + 8 >> 2], i[f + 12 >> 2] = n, i[t + 8 >> 2] = n, i[n + 24 >> 2] = 0, i[n + 12 >> 2] = t, i[n + 8 >> 2] = f;
          }
        }
        function b4(n) {
          n |= 0;
          var f = 0, a = 0, e = u(0), t = u(0), b = u(0), o = u(0), k = u(0), s = 0, r = u(0), A = 0, l = 0, v = u(0), h = u(0), y = 0, m = u(0), g = u(0), I = 0, S = u(0), M = u(0), P = u(0), T = u(0), O = u(0), G = u(0), Y = 0;
          i: {
            f: if (!((0 | (y = i[n + 112 >> 2])) < 3)) {
              if (I = 116 + ((Y = y << 4) + n | 0) | 0, S = c[n + 124 >> 2], M = c[n + 120 >> 2], o = c[n + 24 >> 2], P = c[n + 116 >> 2], r = c[n + 16 >> 2], k = c[n + 20 >> 2], !(r != u(0) | k != u(0)) & o == u(0)) for (a = n + 148 | 0, o = u(0), k = u(0), r = u(0), e = v = u(c[(f = n + 132 | 0) >> 2] - P), t = h = u(c[n + 136 >> 2] - M), m = b = u(c[n + 140 >> 2] - S); T = u(c[f + 20 >> 2] - M), O = u(c[a >> 2] - P), G = u(u(e * T) - u(O * t)), g = u(c[f + 24 >> 2] - S), t = u(u(t * g) - u(T * m)), e = u(u(m * O) - u(g * e)), u(u(G * o) + u(u(t * r) + u(k * e))) >= u(0) ? (o = u(o + G), k = u(k + e), t = u(r + t)) : (o = u(o - G), k = u(k - e), t = u(r - t)), r = t, e = O, t = T, m = g, I >>> 0 > (a = (f = a) + 16 | 0) >>> 0; ) ;
              else v = u(c[n + 132 >> 2] - P), h = u(c[n + 136 >> 2] - M), b = u(c[n + 140 >> 2] - S);
              for (a = n + 148 | 0, f = A = n + 132 | 0; ; ) {
                e = b, b = h, s = f, t = v, h = u(c[f + 20 >> 2] - M), v = u(c[(f = a) >> 2] - P), g = u(u(u(t * h) - u(b * v)) * o), m = b, b = u(c[s + 24 >> 2] - S);
                a: if ((e = u(g + u(u(u(u(m * b) - u(h * e)) * r) + u(k * u(u(e * v) - u(b * t)))))) != u(0)) {
                  if (e > u(0)) {
                    if (a = 0, s = (0 | l) < 0, l = 1, !s) break a;
                    break i;
                  }
                  if (a = 0, s = (0 | l) > 0, l = -1, s) break i;
                }
                if (!(I >>> 0 > (a = f + 16 | 0) >>> 0)) break;
              }
              if (l) {
                a = 1;
                a: {
                  n: switch (i[n + 56 >> 2] - 100132 | 0) {
                    case 0:
                      if ((0 | l) >= 0) break a;
                      break f;
                    case 2:
                      break i;
                    case 1:
                      break n;
                    default:
                      break a;
                  }
                  if ((0 | l) > 0) break f;
                }
                (0 | (f = i[n + 1716 >> 2])) == 3 ? R[i[n + 88 >> 2]](w[n + 81 | 0] ? 2 : (0 | y) < 4 ? 4 : 6) : R[0 | f](w[n + 81 | 0] ? 2 : (0 | y) < 4 ? 4 : 6, i[n + 1896 >> 2]), (0 | (f = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[n + 128 >> 2]) : R[0 | f](i[n + 128 >> 2], i[n + 1896 >> 2]);
                a: if ((0 | l) <= 0) {
                  if ((0 | y) < 2) break a;
                  for (f = Y + 100 | 0; a = n + f | 0, (0 | (s = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[a + 12 >> 2]) : R[0 | s](i[a + 12 >> 2], i[n + 1896 >> 2]), a = (0 | f) > 132, f = f - 16 | 0, a; ) ;
                } else if (!(A >>> 0 >= I >>> 0)) for (; (0 | (f = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[A + 12 >> 2]) : R[0 | f](i[A + 12 >> 2], i[n + 1896 >> 2]), I >>> 0 > (A = A + 16 | 0) >>> 0; ) ;
                (0 | (f = i[n + 1728 >> 2])) == 6 ? R[i[n + 100 >> 2]]() : R[0 | f](i[n + 1896 >> 2]);
              }
            }
            a = 1;
          }
          return 0 | a;
        }
        function c0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = u(0), k = 0, s = u(0), r = 0, A = 0, l = 0, v = 0, h = 0, y = 0, m = 0, g = 0, I = 0, S = 0, M = 0, P = 0;
          i: {
            l = i[f >> 2], t = i[l + 16 >> 2], s = c[t + 28 >> 2], a = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], v = i[a >> 2], b = i[v + 16 >> 2];
            f: {
              if (!(!(s < (o = c[b + 28 >> 2])) & (!(c[t + 32 >> 2] <= c[b + 32 >> 2]) | s != o))) {
                if (J(i[i[v + 4 >> 2] + 16 >> 2], t, b) > u(0)) break f;
                if (t = i[l + 16 >> 2], b = i[v + 16 >> 2], !(c[t + 28 >> 2] == c[b + 28 >> 2] & c[t + 32 >> 2] == c[b + 32 >> 2])) {
                  if (!o2(i[v + 4 >> 2]) || !Z(l, i[i[v + 4 >> 2] + 12 >> 2])) break i;
                  return d[a + 14 | 0] = 1, d[f + 14 | 0] = 1, 1;
                }
                if (e = 1, (0 | t) == (0 | b)) break f;
                if (k = i[n + 68 >> 2], (0 | (b = i[t + 36 >> 2])) >= 0) {
                  if (h = i[k >> 2], r = i[h >> 2], A = i[h + 4 >> 2], f = i[4 + (I = A + (b << 3) | 0) >> 2], m = i[h + 8 >> 2], g = i[r + (m << 2) >> 2], i[r + (f << 2) >> 2] = g, M = e = (g << 3) + A | 0, i[e + 4 >> 2] = f, S = m - 1 | 0, i[h + 8 >> 2] = S, (0 | f) < (0 | m)) {
                    a: {
                      if ((0 | f) < 2 || (a = i[(i[r + (f << 1 & -4) >> 2] << 3) + A >> 2], o = c[a + 28 >> 2], y = i[e >> 2], o < (s = c[y + 28 >> 2]) || !(!(c[a + 32 >> 2] <= c[y + 32 >> 2]) | s != o))) for (P = (g << 3) + A | 0; ; ) {
                        if ((0 | S) <= (0 | (a = f << 1)) || (k = i[(i[r + ((e = 1 | a) << 2) >> 2] << 3) + A >> 2], s = c[k + 28 >> 2], t = i[(i[r + (a << 2) >> 2] << 3) + A >> 2], !(s < (o = c[t + 28 >> 2])) & (!(c[k + 32 >> 2] <= c[t + 32 >> 2]) | s != o) || (a = e)), (0 | a) >= (0 | m)) {
                          a = f;
                          break a;
                        }
                        if (y = i[P >> 2], s = c[y + 28 >> 2], k = i[r + (a << 2) >> 2], e = i[(t = (k << 3) + A | 0) >> 2], s < (o = c[e + 28 >> 2])) {
                          a = f;
                          break a;
                        }
                        if (!(!(c[y + 32 >> 2] <= c[e + 32 >> 2]) | s != o)) {
                          a = f;
                          break a;
                        }
                        i[r + (f << 2) >> 2] = k, i[t + 4 >> 2] = f, f = a;
                      }
                      for (; ; ) {
                        if (k = i[r + ((a = f >>> 1 | 0) << 2) >> 2], e = i[(t = (k << 3) + A | 0) >> 2], (o = c[e + 28 >> 2]) < s) {
                          a = f;
                          break a;
                        }
                        if (!(!(c[e + 32 >> 2] <= c[y + 32 >> 2]) | s != o)) {
                          a = f;
                          break a;
                        }
                        if (i[r + (f << 2) >> 2] = k, i[t + 4 >> 2] = f, e = f >>> 0 > 3, f = a, !e) break;
                      }
                    }
                    i[r + (a << 2) >> 2] = g, i[M + 4 >> 2] = a;
                  }
                  i[I >> 2] = 0, i[I + 4 >> 2] = i[h + 16 >> 2], i[h + 16 >> 2] = b;
                } else {
                  i[i[k + 4 >> 2] + ((-1 ^ b) << 2) >> 2] = 0;
                  a: if (!((0 | (f = i[k + 12 >> 2])) <= 0)) for (b = i[k + 8 >> 2] - 4 | 0; ; ) {
                    if (i[i[b + (f << 2) >> 2] >> 2]) break a;
                    if (a = f - 1 | 0, i[k + 12 >> 2] = a, e = (0 | f) > 1, f = a, !e) break;
                  }
                }
                return l0(n, i[i[v + 4 >> 2] + 12 >> 2], l), 1;
              }
              if (!(J(i[i[l + 4 >> 2] + 16 >> 2], b, t) < u(0)) && (e = 1, d[f + 14 | 0] = 1, d[i[i[i[f + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !o2(i[l + 4 >> 2]) || !Z(i[i[v + 4 >> 2] + 12 >> 2], l)))
                break i;
            }
            return e;
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function n0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0, A = 0, l = 0, v = 0, h = 0, y = 0;
          if (!n) return j(f);
          if (f >>> 0 >= 4294967232) return i[806] = 48, 0;
          b = f >>> 0 < 11 ? 16 : f + 11 & -8, e = -8 & (s = i[4 + (t = n - 8 | 0) >> 2]);
          i: if (3 & s) {
            o = e + t | 0;
            f: if (e >>> 0 >= b >>> 0) {
              if ((a = e - b | 0) >>> 0 < 16) break f;
              i[t + 4 >> 2] = 1 & s | b | 2, i[4 + (e = t + b | 0) >> 2] = 3 | a, i[o + 4 >> 2] = 1 | i[o + 4 >> 2], z0(e, a);
            } else if (i[860] != (0 | o)) if (i[859] != (0 | o)) {
              if (2 & (k = i[o + 4 >> 2]) || (r = e + (-8 & k) | 0) >>> 0 < b >>> 0) break i;
              l = r - b | 0;
              a: if (k >>> 0 <= 255) {
                if ((0 | (a = i[o + 12 >> 2])) == (0 | (e = i[o + 8 >> 2]))) {
                  h = 3416, y = i[854] & i2(k >>> 3 | 0), i[h >> 2] = y;
                  break a;
                }
                i[e + 12 >> 2] = a, i[a + 8 >> 2] = e;
              } else {
                A = i[o + 24 >> 2];
                n: if ((0 | o) == (0 | (e = i[o + 12 >> 2]))) {
                  e: {
                    if (!(k = i[(a = o + 20 | 0) >> 2])) {
                      if (!(k = i[o + 16 >> 2])) break e;
                      a = o + 16 | 0;
                    }
                    for (; v = a, (k = i[(a = (e = k) + 20 | 0) >> 2]) || (a = e + 16 | 0, k = i[e + 16 >> 2]); ) ;
                    i[v >> 2] = 0;
                    break n;
                  }
                  e = 0;
                } else a = i[o + 8 >> 2], i[a + 12 >> 2] = e, i[e + 8 >> 2] = a;
                if (A) {
                  a = i[o + 28 >> 2];
                  n: {
                    if (i[(k = 3720 + (a << 2) | 0) >> 2] == (0 | o)) {
                      if (i[k >> 2] = e, e) break n;
                      h = 3420, y = i[855] & i2(a), i[h >> 2] = y;
                      break a;
                    }
                    if (i[(i[A + 16 >> 2] == (0 | o) ? 16 : 20) + A >> 2] = e, !e) break a;
                  }
                  i[e + 24 >> 2] = A, (a = i[o + 16 >> 2]) && (i[e + 16 >> 2] = a, i[a + 24 >> 2] = e), (a = i[o + 20 >> 2]) && (i[e + 20 >> 2] = a, i[a + 24 >> 2] = e);
                }
              }
              l >>> 0 <= 15 ? (i[t + 4 >> 2] = 1 & s | r | 2, i[4 + (a = t + r | 0) >> 2] = 1 | i[a + 4 >> 2]) : (i[t + 4 >> 2] = 1 & s | b | 2, i[4 + (a = t + b | 0) >> 2] = 3 | l, i[4 + (e = t + r | 0) >> 2] = 1 | i[e + 4 >> 2], z0(a, l));
            } else {
              if ((e = e + i[856] | 0) >>> 0 < b >>> 0) break i;
              (a = e - b | 0) >>> 0 >= 16 ? (i[t + 4 >> 2] = 1 & s | b | 2, i[4 + (k = t + b | 0) >> 2] = 1 | a, i[(e = e + t | 0) >> 2] = a, i[e + 4 >> 2] = -2 & i[e + 4 >> 2]) : (i[t + 4 >> 2] = e | 1 & s | 2, i[4 + (a = e + t | 0) >> 2] = 1 | i[a + 4 >> 2], a = 0), i[859] = k, i[856] = a;
            }
            else {
              if ((e = e + i[857] | 0) >>> 0 <= b >>> 0) break i;
              i[t + 4 >> 2] = 1 & s | b | 2, e = e - b | 0, i[4 + (a = t + b | 0) >> 2] = 1 | e, i[857] = e, i[860] = a;
            }
            a = t;
          } else {
            if (b >>> 0 < 256 || e >>> 0 >= b + 4 >>> 0 && (a = t, e - b >>> 0 <= i[974] << 1 >>> 0)) break i;
            a = 0;
          }
          return a ? a + 8 | 0 : (a = j(f)) ? (q0(a, n, f >>> 0 > (t = (3 & (t = i[n - 4 >> 2]) ? -4 : -8) + (-8 & t) | 0) >>> 0 ? t : f), B(n), a) : 0;
        }
        function K0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = u(0), r = 0, A = u(0);
          for (e = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2]; ; ) {
            i: {
              if (w[e + 14 | 0]) for (; e = i[i[i[(f = e) + 4 >> 2] + 8 >> 2] >> 2], w[e + 14 | 0]; ) ;
              f: {
                a: {
                  n: {
                    e: {
                      if (w[f + 14 | 0]) a = f;
                      else if (!(a = i[i[i[f + 4 >> 2] + 4 >> 2] >> 2]) || (e = f, !w[a + 14 | 0])) break e;
                      d[a + 14 | 0] = 0, t = i[a >> 2], f = i[i[t + 4 >> 2] + 16 >> 2], o = i[e >> 2];
                      t: if ((0 | f) != i[i[o + 4 >> 2] + 16 >> 2]) {
                        s = c[f + 28 >> 2], r = i[i[i[a + 4 >> 2] + 8 >> 2] >> 2], b = i[r >> 2], k = i[i[b + 4 >> 2] + 16 >> 2];
                        u: {
                          if (!(!(s < (A = c[k + 28 >> 2])) & (!(c[f + 32 >> 2] <= c[k + 32 >> 2]) | s != A))) {
                            if (J(f, k, i[t + 16 >> 2]) < u(0)) {
                              f = a;
                              break t;
                            }
                            if (d[a + 14 | 0] = 1, d[i[i[i[a + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !(f = o2(t))) break f;
                            if (Z(i[b + 4 >> 2], f)) break u;
                            break i;
                          }
                          if (J(k, f, i[b + 16 >> 2]) > u(0)) {
                            f = a;
                            break t;
                          }
                          if (d[r + 14 | 0] = 1, d[a + 14 | 0] = 1, !(f = o2(b)) || !Z(i[t + 12 >> 2], i[b + 4 >> 2])) break i;
                          f = i[f + 4 >> 2];
                        }
                        if (d[i[f + 20 >> 2] + 21 | 0] = w[a + 12 | 0], w[e + 15 | 0]) {
                          if (i[i[e >> 2] + 24 >> 2] = 0, m2(i[e + 4 >> 2]), B(e), !$(o)) break i;
                          e = i[i[i[a + 4 >> 2] + 8 >> 2] >> 2], o = i[e >> 2], f = a;
                        } else if (w[a + 15 | 0]) {
                          if (i[i[a >> 2] + 24 >> 2] = 0, m2(i[a + 4 >> 2]), B(a), !$(t)) break i;
                          f = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2], t = i[f >> 2];
                        } else f = a;
                      } else f = a;
                      if (i[t + 16 >> 2] == i[o + 16 >> 2]) break a;
                      if (a = i[i[t + 4 >> 2] + 16 >> 2], b = i[i[o + 4 >> 2] + 16 >> 2], w[e + 15 | 0] | w[f + 15 | 0] | (0 | a) == (0 | b) || (0 | (k = a)) != (0 | (a = i[n + 72 >> 2])) & (0 | a) != (0 | b)) break n;
                      if (!J0(n, f)) break a;
                    }
                    return;
                  }
                  c0(n, f);
                }
                if (i[t + 16 >> 2] != i[o + 16 >> 2] || (b = i[t + 4 >> 2], a = i[o + 4 >> 2], i[b + 16 >> 2] != i[a + 16 >> 2])) continue;
                if (i[o + 28 >> 2] = i[o + 28 >> 2] + i[t + 28 >> 2], i[a + 28 >> 2] = i[a + 28 >> 2] + i[b + 28 >> 2], i[i[f >> 2] + 24 >> 2] = 0, m2(i[f + 4 >> 2]), B(f), !$(t)) break i;
                f = i[i[i[e + 4 >> 2] + 4 >> 2] >> 2];
                continue;
              }
            }
            break;
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function k4(n) {
          n |= 0;
          var f = 0, a = 0, e = 0, t = u(0), b = u(0), o = 0, k = 0, s = 0, r = 0;
          if ((0 | (f = i[n + 40 >> 2])) != (0 | (s = n + 40 | 0))) for (; ; ) {
            if (n = i[f >> 2], w[f + 21 | 0]) {
              for (f = f + 8 | 0; f = i[f >> 2], e = i[i[f + 4 >> 2] + 16 >> 2], t = c[e + 28 >> 2], a = i[f + 16 >> 2], !(!(t < (b = c[a + 28 >> 2])) & (!(c[e + 32 >> 2] <= c[a + 32 >> 2]) | t != b)); ) f = i[f + 8 >> 2] + 4 | 0;
              for (; !(!(t > b) & (!(c[a + 32 >> 2] <= c[e + 32 >> 2]) | t != b)); ) f = i[f + 12 >> 2], a = i[f + 16 >> 2], b = c[a + 28 >> 2], e = i[i[f + 4 >> 2] + 16 >> 2], t = c[e + 28 >> 2];
              i: {
                if ((0 | (e = i[i[f + 8 >> 2] + 4 >> 2])) != i[f + 12 >> 2]) for (; ; ) {
                  if (a = i[i[f + 4 >> 2] + 16 >> 2], t = c[a + 28 >> 2], o = i[e + 16 >> 2], !(t < (b = c[o + 28 >> 2])) & (!(c[a + 32 >> 2] <= c[o + 32 >> 2]) | t != b)) {
                    f: if (i[e + 12 >> 2] != (0 | f)) for (; ; ) {
                      if (a = i[i[f + 8 >> 2] + 4 >> 2], o = i[a + 16 >> 2], t = c[o + 28 >> 2], k = i[i[a + 4 >> 2] + 16 >> 2], !(t < (b = c[k + 28 >> 2]) | t == b & c[o + 32 >> 2] <= c[k + 32 >> 2])) {
                        if (!(J(i[i[f + 4 >> 2] + 16 >> 2], i[f + 16 >> 2], o) >= u(0))) break f;
                        a = i[i[f + 8 >> 2] + 4 >> 2];
                      }
                      if (f = A2(f, a), a = 0, !f) break i;
                      if ((0 | (f = i[f + 4 >> 2])) == i[e + 12 >> 2]) break;
                    }
                    f = i[f + 12 >> 2];
                  } else {
                    f: if ((0 | (a = i[e + 12 >> 2])) != (0 | f)) for (o = e + 12 | 0; ; ) {
                      if (k = i[i[a + 4 >> 2] + 16 >> 2], t = c[k + 28 >> 2], r = i[a + 16 >> 2], !(t < (b = c[r + 28 >> 2]) | t == b & c[k + 32 >> 2] <= c[r + 32 >> 2])) {
                        if (!(J(i[e + 16 >> 2], i[i[e + 4 >> 2] + 16 >> 2], k) <= u(0))) break f;
                        a = i[o >> 2];
                      }
                      if (e = A2(a, e), a = 0, !e) break i;
                      if (o = (e = i[e + 4 >> 2]) + 12 | 0, (0 | (a = i[e + 12 >> 2])) == (0 | f)) break;
                    }
                    e = i[i[e + 8 >> 2] + 4 >> 2];
                  }
                  if (i[f + 12 >> 2] == (0 | e)) break;
                }
                if (a = i[e + 12 >> 2], i[a + 12 >> 2] != (0 | f)) for (; ; ) {
                  if (e = A2(a, e), a = 0, !e) break i;
                  if (e = i[e + 4 >> 2], a = i[e + 12 >> 2], i[a + 12 >> 2] == (0 | f)) break;
                }
                a = 1;
              }
              if (!a) return 0;
            }
            if ((0 | s) == (0 | (f = n))) break;
          }
          return 1;
        }
        function S2(n, f, a, e, t, b) {
          var o = 0, k = 0, s = 0, r = 0, A = 0;
          i: {
            for (; ; ) {
              if (k = i[a + 4 >> 2], !(o = j(16)) || (i[o >> 2] = k, s = w0(i[n + 64 >> 2], i[f + 4 >> 2], o), i[o + 4 >> 2] = s, !s)) break i;
              if (d[o + 13 | 0] = 0, d[o + 14 | 0] = 0, d[o + 15 | 0] = 0, i[k + 24 >> 2] = o, (0 | e) == (0 | (a = i[a + 8 >> 2]))) break;
            }
            if (a = i[i[i[f + 4 >> 2] + 8 >> 2] >> 2], k = i[i[a >> 2] + 4 >> 2], t = t || i[k + 8 >> 2], i[k + 16 >> 2] == i[t + 16 >> 2]) {
              if (i[k + 8 >> 2] != (0 | t) && (!Z(i[i[k + 4 >> 2] + 12 >> 2], k) || !Z(i[i[t + 4 >> 2] + 12 >> 2], k)))
                break i;
              e = (t = i[f + 8 >> 2]) - (s = i[k + 28 >> 2]) | 0, i[a + 8 >> 2] = e;
              f: {
                a: switch (i[n + 56 >> 2] - 100130 | 0) {
                  case 4:
                    o = e - 2 >>> 0 < 4294967293;
                    break f;
                  case 3:
                    o = e >>> 31 | 0;
                    break f;
                  case 2:
                    o = (0 | e) > 0;
                    break f;
                  case 1:
                    o = (0 | t) != (0 | s);
                    break f;
                  case 0:
                    break a;
                  default:
                    break f;
                }
                o = 1 & e;
              }
              if (d[a + 12 | 0] = o, d[f + 14 | 0] = 1, s = i[i[i[a + 4 >> 2] + 8 >> 2] >> 2], e = i[i[s >> 2] + 4 >> 2], i[e + 16 >> 2] == i[k + 16 >> 2]) for (t = a + 4 | 0; ; ) {
                if (f = s, i[(o = e) + 8 >> 2] != (0 | k) && (!Z(i[i[o + 4 >> 2] + 12 >> 2], o) || !Z(i[i[k + 4 >> 2] + 12 >> 2], o)))
                  break i;
                e = (r = i[a + 8 >> 2]) - (A = i[o + 28 >> 2]) | 0, i[f + 8 >> 2] = e;
                f: {
                  a: switch (i[n + 56 >> 2] - 100130 | 0) {
                    case 0:
                      s = 1 & e;
                      break f;
                    case 1:
                      s = (0 | r) != (0 | A);
                      break f;
                    case 2:
                      s = (0 | e) > 0;
                      break f;
                    case 3:
                      s = e >>> 31 | 0;
                      break f;
                    case 4:
                      break a;
                    default:
                      break f;
                  }
                  s = e - 2 >>> 0 < 4294967293;
                }
                if (d[f + 12 | 0] = s, d[a + 14 | 0] = 1, c0(n, a) && (i[o + 28 >> 2] = i[o + 28 >> 2] + i[k + 28 >> 2], e = i[o + 4 >> 2], i[e + 28 >> 2] = i[e + 28 >> 2] + i[i[k + 4 >> 2] + 28 >> 2], i[i[a >> 2] + 24 >> 2] = 0, m2(i[t >> 2]), B(a), !$(k))) break i;
                if (t = f + 4 | 0, s = i[i[i[(a = f) + 4 >> 2] + 8 >> 2] >> 2], e = i[i[s >> 2] + 4 >> 2], k = o, i[e + 16 >> 2] != i[o + 16 >> 2]) break;
              }
              else f = a;
            }
            return d[f + 14 | 0] = 1, void (b && K0(n, f));
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function $(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0;
          if (t = i[n + 4 >> 2], (0 | (o = i[t + 20 >> 2])) != (0 | (a = i[n + 20 >> 2]))) {
            for (f = e = i[a + 8 >> 2]; i[f + 20 >> 2] = o, (0 | e) != (0 | (f = i[f + 12 >> 2])); ) ;
            f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, B(a);
          }
          if ((0 | (e = i[n + 8 >> 2])) != (0 | n)) {
            if (b = i[n + 4 >> 2], f = i[b + 12 >> 2], i[i[b + 20 >> 2] + 8 >> 2] = f, i[i[n + 16 >> 2] + 8 >> 2] = e, b = i[f + 8 >> 2], i[i[e + 4 >> 2] + 12 >> 2] = f, i[i[b + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = b, i[f + 8 >> 2] = e, (0 | a) == (0 | o)) {
              if (!(a = j(24))) return 0;
              for (f = i[n + 20 >> 2], e = i[f + 4 >> 2], i[a + 4 >> 2] = e, i[e >> 2] = a, i[a >> 2] = f, i[f + 4 >> 2] = a, i[a + 12 >> 2] = 0, i[a + 16 >> 2] = 0, i[a + 8 >> 2] = n, d[a + 20 | 0] = 0, d[a + 21 | 0] = w[f + 21 | 0], f = n; i[f + 20 >> 2] = a, (0 | (f = i[f + 12 >> 2])) != (0 | n); ) ;
            }
          } else {
            for (a = i[n + 16 >> 2], f = e = i[a + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | e) != (0 | (f = i[f + 8 >> 2])); ) ;
            f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, B(a);
          }
          if ((0 | (f = i[t + 8 >> 2])) != (0 | t)) a = i[i[t + 4 >> 2] + 12 >> 2], i[i[n + 20 >> 2] + 8 >> 2] = a, i[i[t + 16 >> 2] + 8 >> 2] = f, e = i[a + 8 >> 2], i[i[f + 4 >> 2] + 12 >> 2] = a, i[i[e + 4 >> 2] + 12 >> 2] = t, i[t + 8 >> 2] = e, i[a + 8 >> 2] = f;
          else {
            for (a = i[t + 16 >> 2], f = e = i[a + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | e) != (0 | (f = i[f + 8 >> 2])); ) ;
            for (f = i[a >> 2], e = i[a + 4 >> 2], i[f + 4 >> 2] = e, i[e >> 2] = f, B(a), a = i[t + 20 >> 2], f = t = i[a + 8 >> 2]; i[f + 20 >> 2] = 0, (0 | t) != (0 | (f = i[f + 12 >> 2])); ) ;
            f = i[a >> 2], t = i[a + 4 >> 2], i[f + 4 >> 2] = t, i[t >> 2] = f, B(a);
          }
          return f = i[n + 4 >> 2], f = i[(n = n >>> 0 > f >>> 0 ? f : n) >> 2], a = i[i[n + 4 >> 2] >> 2], i[i[f + 4 >> 2] >> 2] = a, i[i[a + 4 >> 2] >> 2] = f, B(n), 1;
        }
        function A2(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0, A = 0, l = 0;
          i: if (a = j(64)) {
            if (k = i[n + 4 >> 2], b = i[(e = n >>> 0 > k >>> 0 ? k : n) + 4 >> 2], t = i[b >> 2], i[a + 32 >> 2] = t, i[i[t + 4 >> 2] >> 2] = a, i[a >> 2] = e, e = b, b = a + 32 | 0, i[e >> 2] = b, i[a + 16 >> 2] = 0, i[a + 20 >> 2] = 0, i[a + 12 >> 2] = b, i[a + 4 >> 2] = b, i[a + 24 >> 2] = 0, i[a + 28 >> 2] = 0, i[a + 48 >> 2] = 0, i[a + 52 >> 2] = 0, i[a + 44 >> 2] = a, i[a + 40 >> 2] = b, i[a + 36 >> 2] = a, i[a + 56 >> 2] = 0, i[a + 60 >> 2] = 0, i[a + 8 >> 2] = a, t = b, s = a, (0 | (e = o = i[f + 20 >> 2])) != (0 | (r = i[n + 20 >> 2]))) {
              for (e = t = i[e + 8 >> 2]; i[e + 20 >> 2] = r, (0 | t) != (0 | (e = i[e + 12 >> 2])); ) ;
              e = i[o >> 2], t = i[o + 4 >> 2], i[e + 4 >> 2] = t, i[t >> 2] = e, B(o), k = i[n + 4 >> 2], s = i[a + 8 >> 2], t = i[s + 4 >> 2], e = i[n + 20 >> 2];
            }
            if (n = i[n + 12 >> 2], A = i[n + 8 >> 2], i[t + 12 >> 2] = n, i[i[A + 4 >> 2] + 12 >> 2] = a, i[a + 8 >> 2] = A, i[n + 8 >> 2] = s, n = i[f + 8 >> 2], t = i[a + 40 >> 2], i[i[t + 4 >> 2] + 12 >> 2] = f, i[i[n + 4 >> 2] + 12 >> 2] = b, i[a + 40 >> 2] = n, i[f + 8 >> 2] = t, i[a + 16 >> 2] = i[k + 16 >> 2], n = i[f + 16 >> 2], i[a + 52 >> 2] = e, i[a + 48 >> 2] = n, i[a + 20 >> 2] = e, i[e + 8 >> 2] = b, (0 | o) == (0 | r)) {
              if (!(n = j(24))) break i;
              for (f = i[e + 4 >> 2], i[n + 4 >> 2] = f, i[f >> 2] = n, i[n >> 2] = e, i[e + 4 >> 2] = n, i[n + 12 >> 2] = 0, i[n + 16 >> 2] = 0, i[n + 8 >> 2] = a, d[n + 20 | 0] = 0, d[n + 21 | 0] = w[e + 21 | 0], e = a; i[e + 20 >> 2] = n, (0 | (e = i[e + 12 >> 2])) != (0 | a); ) ;
            }
            l = a;
          }
          return l;
        }
        function q0(n, f, a) {
          var e = 0, t = 0;
          if (a >>> 0 >= 512) f4(0 | n, 0 | f, 0 | a);
          else {
            e = n + a | 0;
            i: if (3 & (n ^ f)) if (e >>> 0 < 4) a = n;
            else if ((t = e - 4 | 0) >>> 0 < n >>> 0) a = n;
            else for (a = n; d[0 | a] = w[0 | f], d[a + 1 | 0] = w[f + 1 | 0], d[a + 2 | 0] = w[f + 2 | 0], d[a + 3 | 0] = w[f + 3 | 0], f = f + 4 | 0, t >>> 0 >= (a = a + 4 | 0) >>> 0; ) ;
            else {
              f: if (3 & n) if (a) for (a = n; ; ) {
                if (d[0 | a] = w[0 | f], f = f + 1 | 0, !(3 & (a = a + 1 | 0))) break f;
                if (!(a >>> 0 < e >>> 0)) break;
              }
              else a = n;
              else a = n;
              if (!((n = -4 & e) >>> 0 < 64 || (t = n + -64 | 0) >>> 0 < a >>> 0)) for (; i[a >> 2] = i[f >> 2], i[a + 4 >> 2] = i[f + 4 >> 2], i[a + 8 >> 2] = i[f + 8 >> 2], i[a + 12 >> 2] = i[f + 12 >> 2], i[a + 16 >> 2] = i[f + 16 >> 2], i[a + 20 >> 2] = i[f + 20 >> 2], i[a + 24 >> 2] = i[f + 24 >> 2], i[a + 28 >> 2] = i[f + 28 >> 2], i[a + 32 >> 2] = i[f + 32 >> 2], i[a + 36 >> 2] = i[f + 36 >> 2], i[a + 40 >> 2] = i[f + 40 >> 2], i[a + 44 >> 2] = i[f + 44 >> 2], i[a + 48 >> 2] = i[f + 48 >> 2], i[a + 52 >> 2] = i[f + 52 >> 2], i[a + 56 >> 2] = i[f + 56 >> 2], i[a + 60 >> 2] = i[f + 60 >> 2], f = f - -64 | 0, t >>> 0 >= (a = a - -64 | 0) >>> 0; ) ;
              if (n >>> 0 <= a >>> 0) break i;
              for (; i[a >> 2] = i[f >> 2], f = f + 4 | 0, n >>> 0 > (a = a + 4 | 0) >>> 0; ) ;
            }
            if (a >>> 0 < e >>> 0) for (; d[0 | a] = w[0 | f], f = f + 1 | 0, (0 | e) != (0 | (a = a + 1 | 0)); ) ;
          }
        }
        function o2(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0;
          if (b = n, n = 0, (f = j(64)) && (e = i[b + 4 >> 2], t = i[(a = e >>> 0 < b >>> 0 ? e : b) + 4 >> 2], o = i[t >> 2], i[f + 32 >> 2] = o, i[i[o + 4 >> 2] >> 2] = f, i[f >> 2] = a, a = f + 32 | 0, i[t >> 2] = a, i[f + 16 >> 2] = 0, i[f + 20 >> 2] = 0, i[f + 12 >> 2] = a, i[f + 4 >> 2] = a, i[f + 24 >> 2] = 0, i[f + 28 >> 2] = 0, i[f + 48 >> 2] = 0, i[f + 52 >> 2] = 0, i[f + 40 >> 2] = a, i[f + 36 >> 2] = f, i[f + 56 >> 2] = 0, i[f + 60 >> 2] = 0, i[f + 8 >> 2] = f, t = i[b + 12 >> 2], o = i[t + 8 >> 2], i[f + 44 >> 2] = t, i[i[o + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = o, i[t + 8 >> 2] = f, t = i[e + 16 >> 2], i[f + 16 >> 2] = t, e = j(40))) {
            for (n = i[t + 4 >> 2], i[e + 4 >> 2] = n, i[n >> 2] = e, i[e >> 2] = t, i[t + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 8 >> 2] = a, n = a; i[n + 16 >> 2] = e, (0 | a) != (0 | (n = i[n + 8 >> 2])); ) ;
            n = i[b + 20 >> 2], i[f + 20 >> 2] = n, i[f + 52 >> 2] = n, n = f;
          }
          return n ? (f = i[n + 4 >> 2], n = i[b + 4 >> 2], a = i[i[n + 4 >> 2] + 12 >> 2], e = i[a + 8 >> 2], t = i[n + 8 >> 2], i[i[t + 4 >> 2] + 12 >> 2] = a, i[i[e + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = e, i[a + 8 >> 2] = t, a = i[f + 8 >> 2], e = i[n + 8 >> 2], i[i[e + 4 >> 2] + 12 >> 2] = f, i[i[a + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = a, i[f + 8 >> 2] = e, i[n + 16 >> 2] = i[f + 16 >> 2], a = i[f + 4 >> 2], i[i[a + 16 >> 2] + 8 >> 2] = a, i[a + 20 >> 2] = i[n + 20 >> 2], i[f + 28 >> 2] = i[b + 28 >> 2], i[a + 28 >> 2] = i[n + 28 >> 2], f) : 0;
        }
        function $0(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0;
          if ((0 | (t = i[40 + (n |= 0) >> 2])) != (0 | (k = n + 40 | 0))) for (; ; ) {
            if (r = i[t >> 2], !w[t + 21 | 0]) {
              for (s = i[t + 8 >> 2], n = i[s + 12 >> 2]; ; ) {
                if (i[n + 20 >> 2] = 0, o = i[n + 12 >> 2], f = i[n + 4 >> 2], !i[f + 20 >> 2]) {
                  if (e = i[n + 16 >> 2], (0 | (a = i[n + 8 >> 2])) != (0 | n)) i[e + 8 >> 2] = a, e = i[f + 12 >> 2], b = i[e + 8 >> 2], i[i[a + 4 >> 2] + 12 >> 2] = e, i[i[b + 4 >> 2] + 12 >> 2] = n, i[n + 8 >> 2] = b, i[e + 8 >> 2] = a;
                  else {
                    for (f = a = i[e + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | a) != (0 | (f = i[f + 8 >> 2])); ) ;
                    f = i[e >> 2], a = i[e + 4 >> 2], i[f + 4 >> 2] = a, i[a >> 2] = f, B(e), f = i[n + 4 >> 2];
                  }
                  if (e = i[f + 16 >> 2], (0 | (a = i[f + 8 >> 2])) != (0 | f)) i[e + 8 >> 2] = a, e = i[i[f + 4 >> 2] + 12 >> 2], b = i[e + 8 >> 2], i[i[a + 4 >> 2] + 12 >> 2] = e, i[i[b + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = b, i[e + 8 >> 2] = a;
                  else {
                    for (f = a = i[e + 8 >> 2]; i[f + 16 >> 2] = 0, (0 | a) != (0 | (f = i[f + 8 >> 2])); ) ;
                    f = i[e >> 2], a = i[e + 4 >> 2], i[f + 4 >> 2] = a, i[a >> 2] = f, B(e), f = i[n + 4 >> 2];
                  }
                  e = i[(f = n >>> 0 > f >>> 0 ? f : n) >> 2], a = i[i[f + 4 >> 2] >> 2], i[i[e + 4 >> 2] >> 2] = a, i[i[a + 4 >> 2] >> 2] = e, B(f);
                }
                if (f = (0 | n) != (0 | s), n = o, !f) break;
              }
              n = i[t >> 2], o = i[t + 4 >> 2], i[n + 4 >> 2] = o, i[o >> 2] = n, B(t);
            }
            if ((0 | k) == (0 | (t = r))) break;
          }
        }
        function Z(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0;
          if ((0 | n) != (0 | f)) {
            if ((0 | (e = i[f + 16 >> 2])) != (0 | (o = i[n + 16 >> 2]))) {
              for (a = t = i[e + 8 >> 2]; i[a + 16 >> 2] = o, (0 | t) != (0 | (a = i[a + 8 >> 2])); ) ;
              a = i[e >> 2], t = i[e + 4 >> 2], i[a + 4 >> 2] = t, i[t >> 2] = a, B(e);
            }
            if ((0 | (k = i[n + 20 >> 2])) != (0 | (t = i[f + 20 >> 2]))) {
              for (a = b = i[t + 8 >> 2]; i[a + 20 >> 2] = k, (0 | b) != (0 | (a = i[a + 12 >> 2])); ) ;
              a = i[t >> 2], b = i[t + 4 >> 2], i[a + 4 >> 2] = b, i[b >> 2] = a, B(t);
            }
            if (a = i[n + 8 >> 2], b = i[f + 8 >> 2], i[i[b + 4 >> 2] + 12 >> 2] = n, i[i[a + 4 >> 2] + 12 >> 2] = f, i[f + 8 >> 2] = a, i[n + 8 >> 2] = b, (0 | e) == (0 | o)) {
              if (!(e = j(40))) return 0;
              for (a = i[n + 16 >> 2], o = i[a + 4 >> 2], i[e + 4 >> 2] = o, i[o >> 2] = e, i[e >> 2] = a, i[a + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 8 >> 2] = f, a = f; i[a + 16 >> 2] = e, (0 | (a = i[a + 8 >> 2])) != (0 | f); ) ;
              i[i[n + 16 >> 2] + 8 >> 2] = n;
            }
            if ((0 | t) == (0 | k)) {
              if (!(e = j(24))) return 0;
              for (a = i[n + 20 >> 2], t = i[a + 4 >> 2], i[e + 4 >> 2] = t, i[t >> 2] = e, i[e >> 2] = a, i[a + 4 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 8 >> 2] = f, d[e + 20 | 0] = 0, d[e + 21 | 0] = w[a + 21 | 0], a = f; i[a + 20 >> 2] = e, (0 | (a = i[a + 12 >> 2])) != (0 | f); ) ;
              i[i[n + 20 >> 2] + 8 >> 2] = n;
            }
          }
          return 1;
        }
        function X0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0, s = u(0), r = 0, A = 0, l = u(0);
          if (i[n + 20 >> 2]) {
            e = f, a = i[n >> 2], n = i[a + 8 >> 2] + 1 | 0, i[a + 8 >> 2] = n;
            i: {
              if (!((0 | (f = i[a + 12 >> 2])) >= n << 1)) {
                if (i[a + 12 >> 2] = f << 1, t = i[a + 4 >> 2], f = n0(b = i[a >> 2], f << 3 | 4), i[a >> 2] = f, !f) {
                  i[a >> 2] = b, t = 2147483647;
                  break i;
                }
                if (f = n0(i[a + 4 >> 2], 8 + (i[a + 12 >> 2] << 3) | 0), i[a + 4 >> 2] = f, !f) {
                  i[a + 4 >> 2] = t, t = 2147483647;
                  break i;
                }
              }
              if (b = i[a + 4 >> 2], t = n, (f = i[a + 16 >> 2]) && (i[a + 16 >> 2] = i[4 + (b + (f << 3) | 0) >> 2], t = f), o = i[a >> 2], i[o + (n << 2) >> 2] = t, i[(k = b + (t << 3) | 0) >> 2] = e, i[k + 4 >> 2] = n, i[a + 20 >> 2]) {
                f: if (n >>> 0 < 2) f = n;
                else for (s = c[e + 28 >> 2]; ; ) {
                  if (a = i[((f = n >> 1) << 2) + o >> 2], A = i[(r = b + (a << 3) | 0) >> 2], (l = c[A + 28 >> 2]) < s) {
                    f = n;
                    break f;
                  }
                  if (!(!(c[A + 32 >> 2] <= c[e + 32 >> 2]) | s != l)) {
                    f = n;
                    break f;
                  }
                  if (i[(n << 2) + o >> 2] = a, i[r + 4 >> 2] = n, !((n = f) >>> 0 > 1)) break;
                }
                i[(f << 2) + o >> 2] = t, i[k + 4 >> 2] = f;
              }
            }
            return t;
          }
          if (e = (a = i[n + 12 >> 2]) + 1 | 0, i[n + 12 >> 2] = e, t = i[n + 4 >> 2], (0 | (b = e)) < (0 | (e = i[n + 16 >> 2]))) e = t;
          else if (i[n + 16 >> 2] = e << 1, e = n0(t, e << 3), i[n + 4 >> 2] = e, !e) return i[n + 4 >> 2] = t, 2147483647;
          return i[(a << 2) + e >> 2] = f, -1 ^ a;
        }
        function s0(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = 0;
          b = j(40), o = j(40);
          i: {
            if (!(e = j(24)) || !b | !o) {
              if (b && B(b), o && B(o), !e) break i;
              return B(e), 0;
            }
            if (!(f = j(64))) return 0;
            for (a = i[n + 68 >> 2], t = i[(a = a >>> 0 < (t = n - -64 | 0) >>> 0 ? a : t) + 4 >> 2], k = i[t >> 2], i[f + 32 >> 2] = k, i[i[k + 4 >> 2] >> 2] = f, i[f >> 2] = a, a = t, t = f + 32 | 0, i[a >> 2] = t, i[f + 16 >> 2] = 0, i[f + 20 >> 2] = 0, i[f + 12 >> 2] = t, i[f + 4 >> 2] = t, i[f + 24 >> 2] = 0, i[f + 28 >> 2] = 0, i[f + 48 >> 2] = 0, i[f + 52 >> 2] = 0, i[f + 44 >> 2] = f, i[f + 40 >> 2] = t, i[f + 36 >> 2] = f, i[f + 56 >> 2] = 0, i[f + 60 >> 2] = 0, i[f + 8 >> 2] = f, a = i[n + 4 >> 2], i[b + 4 >> 2] = a, i[a >> 2] = b, i[b + 12 >> 2] = 0, i[b + 8 >> 2] = f, a = f; i[a + 16 >> 2] = b, (0 | (a = i[a + 8 >> 2])) != (0 | f); ) ;
            for (i[o + 4 >> 2] = b, i[b >> 2] = o, i[o >> 2] = n, i[n + 4 >> 2] = o, i[o + 12 >> 2] = 0, i[o + 8 >> 2] = t, a = t; i[a + 16 >> 2] = o, (0 | t) != (0 | (a = i[a + 8 >> 2])); ) ;
            for (a = i[n + 44 >> 2], i[e + 4 >> 2] = a, i[a >> 2] = e, i[e >> 2] = n + 40, i[n + 44 >> 2] = e, i[e + 12 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 8 >> 2] = f, d[e + 20 | 0] = 0, d[e + 21 | 0] = w[n + 61 | 0], a = f; i[a + 20 >> 2] = e, (0 | (a = i[a + 12 >> 2])) != (0 | f); ) ;
          }
          return f;
        }
        function r0(n) {
          n |= 0;
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = u(0);
          if ((f = j(128)) && (i[f + 8 >> 2] = 0, i[f + 12 >> 2] = 0, a = f + 40 | 0, i[f + 44 >> 2] = a, i[f + 48 >> 2] = 0, i[f + 52 >> 2] = 0, i[f + 40 >> 2] = a, n2[f + 54 >> 1] = 0, n2[f + 56 >> 1] = 0, n2[f + 58 >> 1] = 0, n2[f + 60 >> 1] = 0, i[f + 72 >> 2] = 0, i[f + 76 >> 2] = 0, a = f + 96 | 0, i[f + 68 >> 2] = a, e = f - -64 | 0, i[f + 64 >> 2] = e, i[f + 80 >> 2] = 0, i[f + 84 >> 2] = 0, i[f + 88 >> 2] = 0, i[f + 92 >> 2] = 0, i[f + 104 >> 2] = 0, i[f + 108 >> 2] = 0, i[f + 100 >> 2] = e, i[f + 96 >> 2] = a, i[f + 112 >> 2] = 0, i[f + 116 >> 2] = 0, i[f + 120 >> 2] = 0, i[f + 124 >> 2] = 0, i[f >> 2] = f, i[f + 4 >> 2] = f), i[n + 8 >> 2] = f, !f) return 0;
          i: {
            if ((0 | (f = i[n + 112 >> 2])) > 0) for (t = 116 + ((f << 4) + n | 0) | 0, a = n + 116 | 0, f = i[n + 4 >> 2]; ; ) {
              b = i[a + 12 >> 2];
              f: {
                if (!f) {
                  if (e = 0, !(f = s0(i[n + 8 >> 2]))) break i;
                  if (Z(f, i[f + 4 >> 2])) break f;
                  break i;
                }
                if (!o2(f)) return 0;
                f = i[f + 12 >> 2];
              }
              if (e = i[f + 16 >> 2], i[e + 12 >> 2] = b, c[e + 16 >> 2] = c[a >> 2], o = c[a + 4 >> 2], i[e + 24 >> 2] = 0, c[e + 20 >> 2] = o, i[f + 28 >> 2] = 1, i[i[f + 4 >> 2] + 28 >> 2] = -1, i[n + 4 >> 2] = f, !(t >>> 0 > (a = a + 16 | 0) >>> 0)) break;
            }
            d[n + 108 | 0] = 0, i[n + 112 >> 2] = 0, e = 1;
          }
          return 0 | e;
        }
        function u4(n, f, a) {
          f |= 0, a |= 0, (0 | (a = i[1716 + (n |= 0) >> 2])) == 3 ? R[i[n + 88 >> 2]](5) : R[0 | a](5, i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2];
          i: if (w[a + 21 | 0]) for (; ; ) {
            if (w[a + 20 | 0] || (d[a + 20 | 0] = 1, f = i[i[f + 12 >> 2] + 4 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !w[a + 21 | 0] | w[a + 20 | 0])) break i;
            if (d[a + 20 | 0] = 1, f = i[f + 8 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !w[a + 21 | 0]) break;
          }
          (0 | (f = i[n + 1728 >> 2])) == 6 ? R[i[n + 100 >> 2]]() : R[0 | f](i[n + 1896 >> 2]);
        }
        function p2(n, f) {
          f |= 0;
          var a = 0;
          if ((0 | (a = i[(n |= 0) >> 2])) != (0 | f)) for (; ; ) {
            i: if (f >>> 0 > a >>> 0) {
              f: switch (0 | a) {
                case 0:
                  (0 | (a = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100151) : R[0 | a](100151, i[n + 1896 >> 2]), i[n >> 2] && p2(n, 0), i[n + 112 >> 2] = 0, a = 1, i[n >> 2] = 1, d[n + 108 | 0] = 0, i[n + 1896 >> 2] = 0, i[n + 8 >> 2] = 0;
                  break i;
                case 1:
                  break f;
                default:
                  break i;
              }
              if ((0 | (a = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100152) : R[0 | a](100152, i[n + 1896 >> 2]), i[n >> 2] != 1 && p2(n, 1), i[n >> 2] = 2, i[n + 4 >> 2] = 0, a = 2, i[n + 112 >> 2] <= 0) break i;
              d[n + 108 | 0] = 1;
            } else {
              f: switch (a - 1 | 0) {
                case 1:
                  (0 | (a = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100154) : R[0 | a](100154, i[n + 1896 >> 2]), i[n >> 2] != 2 && p2(n, 2), a = 1, i[n >> 2] = 1;
                  break i;
                case 0:
                  break f;
                default:
                  break i;
              }
              (0 | (a = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100153) : R[0 | a](100153, i[n + 1896 >> 2]), (a = i[n + 8 >> 2]) && d0(a), a = 0, i[n + 8 >> 2] = 0, i[n >> 2] = 0, i[n + 4 >> 2] = 0;
            }
            if ((0 | f) == (0 | a)) break;
          }
        }
        function A0(n, f) {
          var a = 0, e = 0, t = 0, b = 0, o = 0, k = 0;
          i[n + 8 >> 2] = 7, i[n + 4 >> 2] = 0, a = i[f + 20 >> 2];
          i: if (w[a + 21 | 0]) {
            t = f;
            f: {
              a: {
                for (; ; ) {
                  if (w[a + 20 | 0]) break i;
                  if (d[a + 20 | 0] = 1, i[a + 16 >> 2] = e, t = i[i[t + 12 >> 2] + 4 >> 2], e = i[t + 20 >> 2], w[e + 21 | 0]) {
                    if (w[e + 20 | 0]) break a;
                    if (d[e + 20 | 0] = 1, i[e + 16 >> 2] = a, b = b + 2 | 0, t = i[t + 8 >> 2], a = i[t + 20 >> 2], w[a + 21 | 0]) continue;
                    break i;
                  }
                  break;
                }
                b |= 1;
                break f;
              }
              b |= 1;
            }
            e = a;
          } else t = f;
          o = i[f + 4 >> 2], a = i[o + 20 >> 2];
          i: if (!(!w[a + 21 | 0] | w[a + 20 | 0])) {
            f: {
              a: {
                for (; ; ) {
                  if (d[a + 20 | 0] = 1, i[a + 16 >> 2] = e, f = i[o + 12 >> 2], o = i[f + 4 >> 2], e = i[o + 20 >> 2], w[e + 21 | 0]) {
                    if (w[e + 20 | 0]) break a;
                    if (d[e + 20 | 0] = 1, i[e + 16 >> 2] = a, k = k + 2 | 0, f = i[i[o + 8 >> 2] + 4 >> 2], o = i[f + 4 >> 2], a = i[o + 20 >> 2], !w[a + 21 | 0]) break i;
                    if (!w[a + 20 | 0]) continue;
                    break i;
                  }
                  break;
                }
                k |= 1;
                break f;
              }
              k |= 1;
            }
            e = a;
          }
          a = b + k | 0, i[n >> 2] = a;
          i: {
            if (1 & b) {
              if (!(1 & k)) break i;
              i[n >> 2] = a - 1, f = f + 8 | 0;
            } else f = t + 4 | 0;
            f = i[f >> 2];
          }
          if (i[n + 4 >> 2] = f, e) for (; d[e + 20 | 0] = 0, e = i[e + 16 >> 2]; ) ;
        }
        function i1(n, f, a) {
          var e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0, A = 0, l = 0;
          i: {
            f: {
              a: {
                n: {
                  e: {
                    t: {
                      u: {
                        o: {
                          b: {
                            k: {
                              if (f) {
                                if (!a) break k;
                                break b;
                              }
                              r2 = 0, n = (n >>> 0) / (a >>> 0) | 0;
                              break i;
                            }
                            if (!n) break o;
                            break u;
                          }
                          if (!(a - 1 & a)) break t;
                          o = 0 - (b = (s2(a) + 33 | 0) - s2(f) | 0) | 0;
                          break n;
                        }
                        r2 = 0, n = (f >>> 0) / 0 | 0;
                        break i;
                      }
                      if ((e = 32 - s2(f) | 0) >>> 0 < 31) break e;
                      break a;
                    }
                    if ((0 | a) == 1) break f;
                    a = 31 & (b = e0(a)), (63 & b) >>> 0 >= 32 ? n = f >>> a | 0 : (e = f >>> a | 0, n = ((1 << a) - 1 & f) << 32 - a | n >>> a), r2 = e;
                    break i;
                  }
                  b = e + 1 | 0, o = 63 - e | 0;
                }
                if (t = 31 & (e = 63 & b), e >>> 0 >= 32 ? (e = 0, k = f >>> t | 0) : (e = f >>> t | 0, k = ((1 << t) - 1 & f) << 32 - t | n >>> t), t = 31 & (o &= 63), o >>> 0 >= 32 ? (f = n << t, n = 0) : (f = (1 << t) - 1 & n >>> 32 - t | f << t, n <<= t), b) for (l = (0 | (o = a - 1 | 0)) == -1 ? -1 : 0; s = e << 1 | k >>> 31, k = (e = k << 1 | f >>> 31) - (r = a & (t = l - (s + (e >>> 0 > o >>> 0) | 0) >> 31)) | 0, e = s - (e >>> 0 < r >>> 0) | 0, f = f << 1 | n >>> 31, n = A | n << 1, A = 1 & t, b = b - 1 | 0; ) ;
                r2 = f << 1 | n >>> 31, n = A | n << 1;
                break i;
              }
              n = 0, f = 0;
            }
            r2 = f;
          }
          return n;
        }
        function c4(n, f, a) {
          f |= 0, a |= 0;
          var e = 0, t = 0, b = 0, o = 0, k = 0, s = 0, r = 0;
          _ = b = _ - 32 | 0, e = i[28 + (n |= 0) >> 2], i[b + 16 >> 2] = e, o = i[n + 20 >> 2], i[b + 28 >> 2] = a, i[b + 24 >> 2] = f, f = o - e | 0, i[b + 20 >> 2] = f, o = f + a | 0, s = 2;
          i: {
            f: {
              f = b + 16 | 0, (e = 0 | Y0(i[n + 60 >> 2], 0 | f, 2, b + 12 | 0)) ? (i[806] = e, e = -1) : e = 0;
              a: {
                if (e) e = f;
                else for (; ; ) {
                  if ((0 | (t = i[b + 12 >> 2])) == (0 | o)) break a;
                  if ((0 | t) < 0) {
                    e = f;
                    break f;
                  }
                  if (k = t - ((r = (k = i[f + 4 >> 2]) >>> 0 < t >>> 0) ? k : 0) | 0, i[(e = (r << 3) + f | 0) >> 2] = k + i[e >> 2], i[(f = (r ? 12 : 4) + f | 0) >> 2] = i[f >> 2] - k, o = o - t | 0, f = e, s = s - r | 0, (t = 0 | Y0(i[n + 60 >> 2], 0 | f, 0 | s, b + 12 | 0)) ? (i[806] = t, t = -1) : t = 0, t) break;
                }
                if ((0 | o) != -1) break f;
              }
              f = i[n + 44 >> 2], i[n + 28 >> 2] = f, i[n + 20 >> 2] = f, i[n + 16 >> 2] = f + i[n + 48 >> 2], n = a;
              break i;
            }
            i[n + 28 >> 2] = 0, i[n + 16 >> 2] = 0, i[n + 20 >> 2] = 0, i[n >> 2] = 32 | i[n >> 2], n = 0, (0 | s) != 2 && (n = a - i[e + 4 >> 2] | 0);
          }
          return _ = b + 32 | 0, 0 | n;
        }
        function f1(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = 0, k = u(0), s = 0, r = u(0), A = 0, l = 0, v = 0, h = 0, y = 0;
          if (t = i[n + 4 >> 2], a = i[n >> 2], e = i[a + 4 >> 2], y = i[(f = t + (e << 3) | 0) >> 2], !((0 | (b = i[n + 8 >> 2])) <= 0) && (A = i[(b << 2) + a >> 2], i[a + 4 >> 2] = A, i[4 + (l = (A << 3) + t | 0) >> 2] = 1, i[f >> 2] = 0, i[f + 4 >> 2] = i[n + 16 >> 2], v = b - 1 | 0, i[n + 8 >> 2] = v, i[n + 16 >> 2] = e, (0 | b) != 1)) {
            for (f = 1; (0 | v) <= (0 | (n = f << 1)) || (o = i[(i[((e = 1 | n) << 2) + a >> 2] << 3) + t >> 2], k = c[o + 28 >> 2], s = i[(i[(n << 2) + a >> 2] << 3) + t >> 2], !(k < (r = c[s + 28 >> 2])) & (!(c[o + 32 >> 2] <= c[s + 32 >> 2]) | k != r) || (n = e)), !((0 | n) >= (0 | b) || (e = i[l >> 2], k = c[e + 28 >> 2], o = i[(n << 2) + a >> 2], h = i[(s = (o << 3) + t | 0) >> 2], k < (r = c[h + 28 >> 2]) | k == r & c[e + 32 >> 2] <= c[h + 32 >> 2])); ) i[(f << 2) + a >> 2] = o, i[s + 4 >> 2] = f, f = n;
            i[(f << 2) + a >> 2] = A, i[l + 4 >> 2] = f;
          }
          return y;
        }
        function a1(n, f, a) {
          switch (f - 9 | 0) {
            case 0:
              return f = i[a >> 2], i[a >> 2] = f + 4, void (i[n >> 2] = i[f >> 2]);
            case 6:
              return f = i[a >> 2], i[a >> 2] = f + 4, f = n2[f >> 1], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
            case 7:
              return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = G2[f >> 1], void (i[n + 4 >> 2] = 0);
            case 8:
              return f = i[a >> 2], i[a >> 2] = f + 4, f = d[0 | f], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
            case 9:
              return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = w[0 | f], void (i[n + 4 >> 2] = 0);
            case 16:
              return f = i[a >> 2] + 7 & -8, i[a >> 2] = f + 8, void (q[n >> 3] = q[f >> 3]);
            case 17:
              b2();
            default:
              return;
            case 1:
            case 4:
            case 14:
              return f = i[a >> 2], i[a >> 2] = f + 4, f = i[f >> 2], i[n >> 2] = f, void (i[n + 4 >> 2] = f >> 31);
            case 2:
            case 5:
            case 11:
            case 15:
              return f = i[a >> 2], i[a >> 2] = f + 4, i[n >> 2] = i[f >> 2], void (i[n + 4 >> 2] = 0);
            case 3:
            case 10:
            case 12:
            case 13:
          }
          f = i[a >> 2] + 7 & -8, i[a >> 2] = f + 8, a = i[f + 4 >> 2], i[n >> 2] = i[f >> 2], i[n + 4 >> 2] = a;
        }
        function s4(n, f, a) {
          f |= 0, a |= 0, (0 | (a = i[1716 + (n |= 0) >> 2])) == 3 ? R[i[n + 88 >> 2]](6) : R[0 | a](6, i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2];
          i: if (w[a + 21 | 0]) for (; ; ) {
            if (w[a + 20 | 0]) break i;
            if (d[a + 20 | 0] = 1, f = i[f + 8 >> 2], (0 | (a = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2]) : R[0 | a](i[i[i[f + 4 >> 2] + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), a = i[f + 20 >> 2], !w[a + 21 | 0]) break;
          }
          (0 | (f = i[n + 1728 >> 2])) == 6 ? R[i[n + 100 >> 2]]() : R[0 | f](i[n + 1896 >> 2]);
        }
        function n1(n, f, a) {
          var e = 0, t = 0;
          if (a && (d[0 | n] = f, d[(e = n + a | 0) - 1 | 0] = f, !(a >>> 0 < 3 || (d[n + 2 | 0] = f, d[n + 1 | 0] = f, d[e - 3 | 0] = f, d[e - 2 | 0] = f, a >>> 0 < 7 || (d[n + 3 | 0] = f, d[e - 4 | 0] = f, a >>> 0 < 9 || (t = (e = 0 - n & 3) + n | 0, n = L(255 & f, 16843009), i[t >> 2] = n, i[(f = (a = a - e & -4) + t | 0) - 4 >> 2] = n, a >>> 0 < 9 || (i[t + 8 >> 2] = n, i[t + 4 >> 2] = n, i[f - 8 >> 2] = n, i[f - 12 >> 2] = n, a >>> 0 < 25 || (i[t + 24 >> 2] = n, i[t + 20 >> 2] = n, i[t + 16 >> 2] = n, i[t + 12 >> 2] = n, i[f - 16 >> 2] = n, i[f - 20 >> 2] = n, i[f - 24 >> 2] = n, i[f - 28 >> 2] = n, (a = a - (f = 4 & t | 24) | 0) >>> 0 < 32)))))))) for (n = h0(n, 0, 1, 1), e = r2, f = f + t | 0; i[f + 24 >> 2] = n, i[f + 28 >> 2] = e, i[f + 16 >> 2] = n, i[f + 20 >> 2] = e, i[f + 8 >> 2] = n, i[f + 12 >> 2] = e, i[f >> 2] = n, i[f + 4 >> 2] = e, f = f + 32 | 0, (a = a - 32 | 0) >>> 0 > 31; ) ;
        }
        function J(n, f, a) {
          var e = u(0), t = 0, b = 0, o = u(0), k = u(0), s = 0, r = u(0), A = u(0), l = u(0);
          _ = b = _ + -64 | 0;
          i: {
            f: {
              if (!(!(s = (e = c[f + 28 >> 2]) > (k = c[n + 28 >> 2])) & (!(c[n + 32 >> 2] <= c[f + 32 >> 2]) | e != k))) {
                if ((o = c[a + 28 >> 2]) > e | e == o & c[f + 32 >> 2] <= c[a + 32 >> 2]) break i;
                if (t = 1, s) break f;
              }
              t = 0, e == k && (t = c[n + 32 >> 2] <= c[f + 32 >> 2]);
            }
            s = t, t = 1, (o = c[a + 28 >> 2]) > e || (t = 0, e == o && (t = c[f + 32 >> 2] <= c[a + 32 >> 2])), r = c[n + 32 >> 2], A = c[f + 32 >> 2], l = c[a + 32 >> 2], q[b + 40 >> 3] = o, q[b + 24 >> 3] = e, q[b + 48 >> 3] = l, q[b + 32 >> 3] = A, q[b + 16 >> 3] = r, q[b + 8 >> 3] = k, i[b + 4 >> 2] = t, i[b >> 2] = s, A1(1092, b), o = c[a + 28 >> 2], k = c[n + 28 >> 2], e = c[f + 28 >> 2];
          }
          return r = u(0), _ = b - -64 | 0, k = u(e - k), e = u(o - e), u(k + e) > u(0) && (o = c[f + 32 >> 2], r = u(u(u(o - c[a + 32 >> 2]) * k) + u(e * u(o - c[n + 32 >> 2])))), r;
        }
        function B2(n, f, a) {
          switch (f - 100100 | 0) {
            case 0:
              return void (i[n + 88 >> 2] = a || 15);
            case 6:
              return void (i[n + 1716 >> 2] = a || 3);
            case 4:
              return d[n + 80 | 0] = (0 | a) != 0, void (i[n + 92 >> 2] = a || 14);
            case 10:
              return d[n + 80 | 0] = (0 | a) != 0, void (i[n + 1720 >> 2] = a || 4);
            case 1:
              return void (i[n + 96 >> 2] = a || 13);
            case 7:
              return void (i[n + 1724 >> 2] = a || 5);
            case 2:
              return void (i[n + 100 >> 2] = a || 12);
            case 8:
              return void (i[n + 1728 >> 2] = a || 6);
            case 3:
              return void (i[n + 12 >> 2] = a || 18);
            case 9:
              return void (i[n + 1732 >> 2] = a || 11);
            case 5:
              return void (i[n + 76 >> 2] = a || 17);
            case 11:
              return void (i[n + 1736 >> 2] = a || 10);
            case 12:
              return void (i[n + 104 >> 2] = a || 16);
          }
          (0 | (f = i[n + 1732 >> 2])) == 11 ? R[i[n + 12 >> 2]](100900) : R[0 | f](100900, i[n + 1896 >> 2]);
        }
        function L2(n, f, a) {
          var e = 0, t = 0, b = 0, o = 0;
          e = i[f >> 2];
          i: {
            if ((0 | f) != (0 | a)) for (; ; ) {
              if (d[f + 15 | 0] = 0, o = i[f + 4 >> 2], b = i[i[o + 8 >> 2] >> 2], t = i[b >> 2], i[t + 16 >> 2] != i[e + 16 >> 2]) {
                if (!w[b + 15 | 0]) return n = w[f + 12 | 0], a = i[e + 20 >> 2], i[a + 8 >> 2] = e, d[a + 21 | 0] = n, i[e + 24 >> 2] = 0, m2(o), B(f), e;
                if (!(t = A2(i[i[e + 8 >> 2] + 4 >> 2], i[t + 4 >> 2])) || !$(i[b >> 2])) break i;
                i[b >> 2] = t, d[b + 15 | 0] = 0, i[t + 24 >> 2] = b;
              }
              if (i[e + 8 >> 2] != (0 | t) && (!Z(i[i[t + 4 >> 2] + 12 >> 2], t) || !Z(e, t)))
                break i;
              if (t = w[f + 12 | 0], e = i[f >> 2], o = i[e + 20 >> 2], i[o + 8 >> 2] = e, d[o + 21 | 0] = t, i[e + 24 >> 2] = 0, m2(i[f + 4 >> 2]), B(f), e = i[b >> 2], (0 | a) == (0 | (f = b))) break;
            }
            return e;
          }
          k2(n + 1740 | 0, 1), b2();
        }
        function l0(n, f, a) {
          var e = 0, t = 0, b = 0;
          _ = e = _ - 48 | 0, i[e + 24 >> 2] = 0, i[e + 28 >> 2] = 0, i[e + 16 >> 2] = 0, i[e + 20 >> 2] = 0, i[e + 8 >> 2] = 0, i[e + 12 >> 2] = 0, i[e >> 2] = 1056964608, i[e + 4 >> 2] = 1056964608, t = i[f + 16 >> 2], i[e + 16 >> 2] = i[t + 12 >> 2], i[e + 20 >> 2] = i[i[a + 16 >> 2] + 12 >> 2], c[e + 36 >> 2] = c[t + 16 >> 2], c[e + 40 >> 2] = c[t + 20 >> 2], c[e + 44 >> 2] = c[t + 24 >> 2], i[t + 12 >> 2] = 0, t = t + 12 | 0, (0 | (b = i[n + 1736 >> 2])) == 10 ? R[i[n + 76 >> 2]](e + 36 | 0, e + 16 | 0, e, t) : R[0 | b](e + 36 | 0, e + 16 | 0, e, t, i[n + 1896 >> 2]), i[t >> 2] || (i[t >> 2] = i[e + 16 >> 2]), Z(f, a) || (k2(n + 1740 | 0, 1), b2()), _ = e + 48 | 0;
        }
        function r4(n, f) {
          n |= 0;
          var a = 0, e = 0, t = 0;
          if ((0 | (a = i[40 + (f |= 0) >> 2])) != (0 | (e = f + 40 | 0))) for (; ; ) {
            if (w[a + 21 | 0]) {
              for ((0 | (f = i[n + 1716 >> 2])) == 3 ? R[i[n + 88 >> 2]](2) : R[0 | f](2, i[n + 1896 >> 2]), f = i[a + 8 >> 2]; (0 | (t = i[n + 1724 >> 2])) == 5 ? R[i[n + 96 >> 2]](i[i[f + 16 >> 2] + 12 >> 2]) : R[0 | t](i[i[f + 16 >> 2] + 12 >> 2], i[n + 1896 >> 2]), (0 | (f = i[f + 12 >> 2])) != i[a + 8 >> 2]; ) ;
              (0 | (f = i[n + 1728 >> 2])) == 6 ? R[i[n + 100 >> 2]]() : R[0 | f](i[n + 1896 >> 2]);
            }
            if ((0 | e) == (0 | (a = i[a >> 2]))) break;
          }
        }
        function e1(n, f, a) {
          var e = 0, t = 0, b = 0;
          if (_ = e = _ - 208 | 0, i[e + 204 >> 2] = f, n1(f = e + 160 | 0, 0, 40), i[e + 200 >> 2] = i[e + 204 >> 2], !((0 | N0(0, n, e + 200 | 0, e + 80 | 0, f, a)) < 0)) {
            f = i[423] < 0, t = i[404], i[404] = -33 & t;
            i: {
              f: {
                if (i[416]) {
                  if (i[408]) break f;
                } else i[416] = 80, i[411] = 0, i[408] = 0, i[409] = 0, b = i[415], i[415] = e;
                if (r1(1616)) break i;
              }
              N0(1616, n, e + 200 | 0, e + 80 | 0, e + 160 | 0, a);
            }
            b && (R[i[413]](1616, 0, 0), i[416] = 0, i[415] = b, i[411] = 0, i[408] = 0, i[409] = 0), i[404] = i[404] | 32 & t;
          }
          _ = e + 208 | 0;
        }
        function t1(n, f) {
          if (!n) return 0;
          i: {
            f: {
              if (n) {
                if (f >>> 0 <= 127) break f;
                if (i[i[845] >> 2]) {
                  if (f >>> 0 <= 2047) {
                    d[n + 1 | 0] = 63 & f | 128, d[0 | n] = f >>> 6 | 192, n = 2;
                    break i;
                  }
                  if (!((-8192 & f) != 57344 & f >>> 0 >= 55296)) {
                    d[n + 2 | 0] = 63 & f | 128, d[0 | n] = f >>> 12 | 224, d[n + 1 | 0] = f >>> 6 & 63 | 128, n = 3;
                    break i;
                  }
                  if (f - 65536 >>> 0 <= 1048575) {
                    d[n + 3 | 0] = 63 & f | 128, d[0 | n] = f >>> 18 | 240, d[n + 2 | 0] = f >>> 6 & 63 | 128, d[n + 1 | 0] = f >>> 12 & 63 | 128, n = 4;
                    break i;
                  }
                } else if ((-128 & f) == 57216) break f;
                i[806] = 25, n = -1;
              } else n = 1;
              break i;
            }
            d[0 | n] = f, n = 1;
          }
          return n;
        }
        function A4(n, f, a) {
          n |= 0, f |= 0, a |= 0;
          var e = 0, t = 0, b = u(0), o = u(0);
          return a = i[a >> 2], e = i[i[a + 4 >> 2] + 16 >> 2], f = i[f >> 2], (0 | (t = i[i[f + 4 >> 2] + 16 >> 2])) == (0 | (n = i[n + 72 >> 2])) ? (0 | n) == (0 | e) ? (f = i[f + 16 >> 2], b = c[f + 28 >> 2], a = i[a + 16 >> 2], !(b < (o = c[a + 28 >> 2])) & (!(c[f + 32 >> 2] <= c[a + 32 >> 2]) | b != o) ? J(n, a, f) >= u(0) | 0 : J(n, f, a) <= u(0) | 0) : J(e, n, i[a + 16 >> 2]) <= u(0) | 0 : (f = i[f + 16 >> 2], (0 | n) == (0 | e) ? J(t, n, f) >= u(0) | 0 : s1(t, n, f) >= s1(i[i[a + 4 >> 2] + 16 >> 2], n, i[a + 16 >> 2]) | 0);
        }
        function v0(n) {
          var f = 0, a = 0, e = 0, t = 0, b = 0, o = u(0), k = u(0);
          if (!(f = i[n + 12 >> 2])) return f1(i[n >> 2]);
          if (e = i[n + 8 >> 2], t = i[i[(e + (f << 2) | 0) - 4 >> 2] >> 2], a = i[n >> 2], i[a + 8 >> 2] && (b = i[i[a + 4 >> 2] + (i[i[a >> 2] + 4 >> 2] << 3) >> 2], !(!((o = c[b + 28 >> 2]) < (k = c[t + 28 >> 2])) & (!(c[b + 32 >> 2] <= c[t + 32 >> 2]) | o != k)))) return f1(a);
          for (a = e - 8 | 0, e = ((0 | f) > 0 ? 1 : f) - 1 | 0; ; ) {
            if ((0 | f) < 2) return i[n + 12 >> 2] = e, t;
            if (b = f << 2, f = f - 1 | 0, i[i[a + b >> 2] >> 2]) break;
          }
          return i[n + 12 >> 2] = f, t;
        }
        function l4(n, f, a) {
          f |= 0, a |= 0;
          var e = 0, t = 0, b = 0, o = 0;
          b = 1;
          i: if ((0 | (e = i[64 + (n |= 0) >> 2])) != (0 | (t = n - -64 | 0))) {
            if (o = 0 - f | 0, !a) {
              for (; ; ) if (n = w[i[e + 20 >> 2] + 21 | 0], i[e + 28 >> 2] = (0 | n) != w[i[i[e + 4 >> 2] + 20 >> 2] + 21 | 0] ? n ? f : o : 0, (0 | t) == (0 | (e = i[e >> 2]))) break i;
            }
            for (; ; ) {
              if (n = i[e >> 2], (0 | (a = w[i[e + 20 >> 2] + 21 | 0])) == w[i[i[e + 4 >> 2] + 20 >> 2] + 21 | 0]) {
                if (!$(e)) {
                  b = 0;
                  break i;
                }
              } else i[e + 28 >> 2] = a ? f : o;
              if ((0 | t) == (0 | (e = n))) break;
            }
          }
          return 0 | b;
        }
        function N(n, f, a) {
          var e = 0, t = 0, b = 0;
          if (!(32 & w[0 | n])) i: {
            if (!(e = i[n + 16 >> 2])) {
              if (r1(n)) break i;
              e = i[n + 16 >> 2];
            }
            if (e - (t = i[n + 20 >> 2]) >>> 0 < a >>> 0) R[i[n + 36 >> 2]](n, f, a);
            else {
              f: {
                a: if (!(!a | i[n + 80 >> 2] < 0)) {
                  for (e = a; ; ) {
                    if (w[(b = f + e | 0) - 1 | 0] != 10) {
                      if (e = e - 1 | 0) continue;
                      break a;
                    }
                    break;
                  }
                  if (R[i[n + 36 >> 2]](n, f, e) >>> 0 < e >>> 0) break i;
                  a = a - e | 0, t = i[n + 20 >> 2];
                  break f;
                }
                b = f;
              }
              q0(t, b, a), i[n + 20 >> 2] = i[n + 20 >> 2] + a;
            }
          }
        }
        function o1(n, f) {
          var a = 0, e = 0, t = 0;
          (a = j(16)) && (t = s0(i[n + 8 >> 2])) && (e = i[t + 16 >> 2], c[e + 32 >> 2] = f, i[e + 28 >> 2] = 2112929218, e = i[i[t + 4 >> 2] + 16 >> 2], c[e + 32 >> 2] = f, i[e + 28 >> 2] = -34554430, i[n + 72 >> 2] = e, d[a + 15 | 0] = 0, d[a + 12 | 0] = 0, i[a + 8 >> 2] = 0, i[a >> 2] = t, d[a + 13 | 0] = 1, d[a + 14 | 0] = 0, e = a, a = w0(t = i[n + 64 >> 2], t, a), i[e + 4 >> 2] = a, a) || (k2(n + 1740 | 0, 1), b2());
        }
        function d0(n) {
          var f = 0, a = 0, e = 0;
          if ((0 | (f = i[40 + (n |= 0) >> 2])) != (0 | (a = n + 40 | 0))) for (; e = i[f >> 2], B(f), (0 | a) != (0 | (f = e)); ) ;
          if ((0 | (f = i[n >> 2])) != (0 | n)) for (; e = i[f >> 2], B(f), (0 | (f = e)) != (0 | n); ) ;
          if ((0 | (f = i[n + 64 >> 2])) != (0 | (a = n - -64 | 0))) for (; e = i[f >> 2], B(f), (0 | a) != (0 | (f = e)); ) ;
          B(n);
        }
        function b1(n) {
          var f = 0, a = u(0), e = u(0);
          if (!(f = i[n + 12 >> 2])) return n = i[n >> 2], i[i[n + 4 >> 2] + (i[i[n >> 2] + 4 >> 2] << 3) >> 2];
          f = i[i[(i[n + 8 >> 2] + (f << 2) | 0) - 4 >> 2] >> 2], n = i[n >> 2];
          i: {
            if (i[n + 8 >> 2] && (n = i[i[n + 4 >> 2] + (i[i[n >> 2] + 4 >> 2] << 3) >> 2], (a = c[n + 28 >> 2]) < (e = c[f + 28 >> 2]) || a == e && c[n + 32 >> 2] <= c[f + 32 >> 2]))
              break i;
            n = f;
          }
          return n;
        }
        function v4(n, f, a, e) {
          n |= 0, f |= 0, a |= 0, e |= 0, a = 0;
          i: {
            if (f = i[456]) {
              if (!((a = i[f >> 2]) >>> 0 < 100001)) {
                f = j(12);
                break i;
              }
            } else f = j(1200008), i[f + 4 >> 2] = 12, i[f >> 2] = 0, i[456] = f;
            i[f >> 2] = a + 1, f = 8 + (L(a, 12) + f | 0) | 0;
          }
          c[f >> 2] = c[n >> 2], c[f + 4 >> 2] = c[n + 4 >> 2], c[f + 8 >> 2] = c[n + 8 >> 2], i[e >> 2] = f;
        }
        function Q2(n, f, a) {
          var e = 0, t = 0, b = 0, o = 0;
          if (f) for (; b = a = a - 1 | 0, o = (t = n) - h0(n = i1(n, f, 10), e = r2, 10, 0) | 48, d[0 | b] = o, t = f >>> 0 > 9, f = e, t; ) ;
          if (n) for (; f = (n >>> 0) / 10 | 0, d[0 | (a = a - 1 | 0)] = n - L(f, 10) | 48, e = n >>> 0 > 9, n = f, e; ) ;
          return a;
        }
        function k1(n, f, a, e) {
          var t = 0, b = 0, o = 0;
          if (b = i[980] + 1 | 0, i[980] = b, i[n >> 2] = b, e) for (; ; ) {
            if (!i[(t = (o << 3) + a | 0) >> 2]) return i[t >> 2] = b, i[t + 4 >> 2] = f, i[t + 8 >> 2] = 0, W = e, a;
            if ((0 | (o = o + 1 | 0)) == (0 | e)) break;
          }
          return t = n, n = e << 1, f = k1(t, f, n0(a, e << 4 | 8), n), W = n, f;
        }
        function u1(n, f) {
          var a = 0, e = 0, t = 0;
          if (u0(+n), e = 0 | c2(1), t = 0 | c2(0), (0 | (a = e >>> 20 & 2047)) != 2047) {
            if (!a) return n == 0 ? a = 0 : (n = u1(18446744073709552e3 * n, f), a = i[f >> 2] + -64 | 0), i[f >> 2] = a, n;
            i[f >> 2] = a - 1022, L0(0, 0 | t), L0(1, -2146435073 & e | 1071644672), n = +K1();
          }
          return n;
        }
        function c1(n) {
          var f = 0, a = 0, e = 0;
          if (d[i[n >> 2]] - 48 >>> 0 >= 10) return 0;
          for (; e = i[n >> 2], a = -1, f >>> 0 <= 214748364 && (a = (0 | (a = d[0 | e] - 48 | 0)) > (2147483647 ^ (f = L(f, 10))) ? -1 : a + f | 0), i[n >> 2] = e + 1, f = a, d[e + 1 | 0] - 48 >>> 0 < 10; ) ;
          return f;
        }
        function s1(n, f, a) {
          var e = u(0), t = u(0), b = 0, o = u(0), k = u(0);
          return e = c[f + 28 >> 2], t = u(e - c[n + 28 >> 2]), e = u(c[a + 28 >> 2] - e), (o = u(t + e)) > u(0) ? (k = c[((b = e > t) ? n : a) + 32 >> 2], e = u(u(u(k - c[(b ? a : n) + 32 >> 2]) * u((b ? t : e) / o)) + u(c[f + 32 >> 2] - k))) : e = u(0), e;
        }
        function h0(n, f, a, e) {
          var t = 0, b = 0, o = 0, k = 0, s = 0, r = 0;
          return r = L(t = a >>> 16 | 0, b = n >>> 16 | 0), t = (65535 & (b = ((s = L(o = 65535 & a, k = 65535 & n)) >>> 16 | 0) + L(b, o) | 0)) + L(t, k) | 0, r2 = (L(f, a) + r | 0) + L(n, e) + (b >>> 16) + (t >>> 16) | 0, 65535 & s | t << 16;
        }
        function w0(n, f, a) {
          for (var e = 0; f = i[f + 8 >> 2], (e = i[f >> 2]) && !(0 | R[i[n + 16 >> 2]](i[n + 12 >> 2], e, a)); ) ;
          return (n = j(12)) && (i[n >> 2] = a, a = i[f + 4 >> 2], i[n + 4 >> 2] = a, i[a + 8 >> 2] = n, i[n + 8 >> 2] = f, i[f + 4 >> 2] = n), n;
        }
        function z(n, f, a, e, t) {
          var b = 0;
          if (_ = b = _ - 256 | 0, !(73728 & t | (0 | a) <= (0 | e))) {
            if (n1(b, 255 & f, (a = (e = a - e | 0) >>> 0 < 256) ? e : 256), !a) for (; N(n, b, 256), (e = e - 256 | 0) >>> 0 > 255; ) ;
            N(n, b, e);
          }
          _ = b + 256 | 0;
        }
        function r1(n) {
          var f = 0;
          return f = i[n + 72 >> 2], i[n + 72 >> 2] = f - 1 | f, 8 & (f = i[n >> 2]) ? (i[n >> 2] = 32 | f, -1) : (i[n + 4 >> 2] = 0, i[n + 8 >> 2] = 0, f = i[n + 44 >> 2], i[n + 28 >> 2] = f, i[n + 20 >> 2] = f, i[n + 16 >> 2] = f + i[n + 48 >> 2], 0);
        }
        function X(n, f, a) {
          var e = 0, t = 0, b = 0;
          i: if (a) for (; ; ) {
            if (!(b = i[(t = (e << 3) + f | 0) >> 2])) break i;
            if ((0 | n) == (0 | b)) return i[t + 4 >> 2];
            if ((0 | (e = e + 1 | 0)) == (0 | a)) break;
          }
          return 0;
        }
        function T2(n) {
          var f = 0, a = 0;
          i: {
            if (!((n = (f = i[440]) + (a = n + 7 & -8) | 0) >>> 0 <= f >>> 0 && a) && (n >>> 0 <= v1() << 16 >>> 0 || 0 | i4(0 | n)))
              break i;
            return i[806] = 48, -1;
          }
          return i[440] = n, f;
        }
        function d4(n, f) {
          n |= 0;
          var a = 0, e = 0;
          (0 | (a = i[4 + (f |= 0) >> 2])) < i[f + 8 >> 2] && (e = i[f >> 2] + (L(i[f + 12 >> 2], a) << 2) | 0, c[e >> 2] = c[n >> 2], c[e + 4 >> 2] = c[n + 4 >> 2], i[f + 4 >> 2] = a + 1);
        }
        function h4(n, f) {
          n |= 0, f |= 0;
          var a = u(0), e = u(0);
          if ((a = c[n + 28 >> 2]) < (e = c[f + 28 >> 2])) n = 1;
          else {
            if (a != e) return 0;
            n = c[n + 32 >> 2] <= c[f + 32 >> 2];
          }
          return 0 | n;
        }
        function y0(n) {
          var f = 0;
          (f = i[n >> 2]) && (B(i[f + 4 >> 2]), B(i[f >> 2]), B(f)), (f = i[n + 8 >> 2]) && B(f), (f = i[n + 4 >> 2]) && B(f), B(n);
        }
        function w4(n) {
          n |= 0;
          var f = 0;
          _ = f = _ - 16 | 0, i[f >> 2] = n, _ = n = _ - 16 | 0, i[n + 12 >> 2] = f, e1(1078, f, 0), _ = n + 16 | 0, _ = f + 16 | 0;
        }
        function y4(n, f, a) {
          n |= 0, f = i[20 + (f |= 0) >> 2], i[f + 16 >> 2] = i[n + 84 >> 2], i[n + 84 >> 2] = f, d[f + 20 | 0] = 1;
        }
        function m2(n) {
          var f = 0, a = 0;
          f = i[n + 4 >> 2], a = i[n + 8 >> 2], i[f + 8 >> 2] = a, i[a + 4 >> 2] = f, B(n);
        }
        function i2(n) {
          var f = 0;
          return (-1 >>> (f = 31 & n) & -2) << f | (-1 << (n = 0 - n & 31) & -2) >>> n;
        }
        function A1(n, f) {
          var a = 0;
          _ = a = _ - 16 | 0, i[a + 12 >> 2] = f, e1(n, f, 40), _ = a + 16 | 0;
        }
        function k2(n, f) {
          n |= 0, f |= 0, i[978] || (i[978] = n, i[979] = f), X1();
        }
        function p4(n, f) {
          n |= 0, f |= 0, i[978] || (i[978] = n, i[979] = f);
        }
        function m4(n, f, a, e) {
          return r2 = 0, 0;
        }
        function g4(n, f, a, e, t) {
        }
        function e0(n) {
          return n ? 31 - s2(n - 1 ^ n) | 0 : 32;
        }
        function E4(n, f, a, e) {
        }
        function C4() {
          i[845] = 3260, i[827] = 42;
        }
        function R4(n) {
          return 0;
        }
        function t0(n, f) {
        }
        function I4() {
          return 0 | _;
        }
        function S4(n) {
          _ = n |= 0;
        }
        function g2(n) {
        }
        function l1() {
        }
        F = w, e2();
        var R = U([null, y4, s4, t0, t0, t0, g2, u4, h4, A4, g4, t0, l1, g2, g2, g2, g2, E4, g2, p2, b4, r0, k2, V0, t4, l4, k4, r4, o4, $0, d0, d4, g2, l1, v4, w4, g2, R4, c4, m4, e4]);
        function v1() {
          return a2.byteLength / 65536 | 0;
        }
        function M4(n) {
          n |= 0;
          var f = 0 | v1(), a = f + n | 0;
          if (f < a && a < 65536) {
            var e = new ArrayBuffer(L(a, 65536));
            new Int8Array(e).set(d), d = new Int8Array(e), n2 = new Int16Array(e), i = new Int32Array(e), w = new Uint8Array(e), G2 = new Uint16Array(e), i0 = new Uint32Array(e), c = new Float32Array(e), q = new Float64Array(e), a2 = e, t2.buffer = a2, F = w;
          }
          return f;
        }
        return { j: C4, k: j, l: B, m: R, n: n4, o: p4, p: I4, q: S4 };
      }
      return q1(Q);
    }(C);
  }, instantiate: function(p, C) {
    return { then: function(Q) {
      var U = new h2.Module(p);
      Q({ instance: new h2.Instance(U, C) });
    } };
  }, RuntimeError: Error };
  function g1(p) {
    for (var C = atob(p), Q = new Uint8Array(C.length), U = 0; U < C.length; ++U) Q[U] = C.charCodeAt(U);
    return Q;
  }
  function E1(p) {
    if (N2(p)) return g1(p.slice(T0.length));
  }
  U2 = [], typeof h2 != "object" && Q0("no native wasm support detected");
  var Z2, J2, M0 = !1;
  function P0() {
    var p = F2.buffer;
    E.HEAP8 = new Int8Array(p), E.HEAP16 = new Int16Array(p), E.HEAPU8 = Z2 = new Uint8Array(p), E.HEAPU16 = new Uint16Array(p), E.HEAP32 = new Int32Array(p), E.HEAPU32 = J2 = new Uint32Array(p), E.HEAPF32 = new Float32Array(p), E.HEAPF64 = new Float64Array(p);
  }
  var U0 = E.INITIAL_MEMORY || 4194304;
  F2 = E.wasmMemory ? E.wasmMemory : new h2.Memory({ initial: U0 / 65536, maximum: 32768 }), P0(), U0 = F2.buffer.byteLength;
  var _0 = [], F0 = [], B0 = [];
  function C1() {
    if (E.preRun) for (typeof E.preRun == "function" && (E.preRun = [E.preRun]); E.preRun.length; ) S1(E.preRun.shift());
    b0(_0);
  }
  function R1() {
    b0(F0);
  }
  function I1() {
    if (E.postRun) for (typeof E.postRun == "function" && (E.postRun = [E.postRun]); E.postRun.length; ) P1(E.postRun.shift());
    b0(B0);
  }
  function S1(p) {
    _0.unshift(p);
  }
  function M1(p) {
    F0.unshift(p);
  }
  function P1(p) {
    B0.unshift(p);
  }
  var C2 = 0, H2 = null;
  function U1(p) {
    C2++, E.monitorRunDependencies?.(C2);
  }
  function _1(p) {
    if (C2--, E.monitorRunDependencies?.(C2), C2 == 0 && H2) {
      var C = H2;
      H2 = null, C();
    }
  }
  function Q0(p) {
    E.onAbort?.(p), _2(p = "Aborted(" + p + ")"), M0 = !0, p += ". Build with -sASSERTIONS for more info.";
    var C = new h2.RuntimeError(p);
    throw v2(C), C;
  }
  var x2, T0 = "data:application/octet-stream;base64,", N2 = (p) => p.startsWith(T0);
  function W0(p) {
    if (p == x2 && U2) return new Uint8Array(U2);
    var C = E1(p);
    if (C) return C;
    if (o0) return o0(p);
    throw "both async and sync fetching of the wasm failed";
  }
  function F1(p) {
    return U2 || N2(p) || !P2 && !Y2 || typeof fetch != "function" ? Promise.resolve().then(() => W0(p)) : fetch(p, { credentials: "same-origin" }).then((C) => {
      if (!C.ok) throw "failed to load wasm binary file at '" + p + "'";
      return C.arrayBuffer();
    }).catch(() => W0(p));
  }
  function H0(p, C, Q) {
    return F1(p).then((U) => h2.instantiate(U, C)).then((U) => U).then(Q, (U) => {
      _2(`failed to asynchronously prepare wasm: ${U}`), Q0(U);
    });
  }
  function B1(p, C, Q, U) {
    return p || typeof h2.instantiateStreaming != "function" || N2(C) || typeof fetch != "function" ? H0(C, Q, U) : fetch(C, { credentials: "same-origin" }).then((F) => h2.instantiateStreaming(F, Q).then(U, function(H) {
      return _2(`wasm streaming compile failed: ${H}`), _2("falling back to ArrayBuffer instantiation"), H0(C, Q, U);
    }));
  }
  function Q1() {
    var p = { a: L1 };
    function C(U, F) {
      return u2 = U.exports, x0 = u2.m, M1(u2.j), _1(), u2;
    }
    function Q(U) {
      C(U.instance);
    }
    if (U1(), E.instantiateWasm) try {
      return E.instantiateWasm(p, C);
    } catch (U) {
      _2(`Module.instantiateWasm callback failed with error: ${U}`), v2(U);
    }
    return B1(U2, x2, p, Q).catch(v2), {};
  }
  N2(x2 = "libtess-asm.wasm") || (x2 = p1(x2));
  var b0 = (p) => {
    for (; p.length > 0; ) p.shift()(E);
  };
  E.noExitRuntime;
  var x0, T1 = () => {
    throw 1 / 0;
  }, W1 = (p, C, Q) => Z2.copyWithin(p, C, C + Q), H1 = () => 2147483648, x1 = (p) => {
    var C = (p - F2.buffer.byteLength + 65535) / 65536;
    try {
      return F2.grow(C), P0(), 1;
    } catch {
    }
  }, O1 = (p) => {
    var C = Z2.length;
    p >>>= 0;
    var Q = H1();
    if (p > Q) return !1;
    for (var U = (x, e2) => x + (e2 - x % e2) % e2, F = 1; F <= 4; F *= 2) {
      var H = C * (1 + 0.2 / F);
      H = Math.min(H, p + 100663296);
      var D = Math.min(Q, U(Math.max(p, H), 65536));
      if (x1(D)) return !0;
    }
    return !1;
  }, j1 = [null, [], []], O0 = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, D1 = (p, C, Q) => {
    for (var U = C + Q, F = C; p[F] && !(F >= U); ) ++F;
    if (F - C > 16 && p.buffer && O0) return O0.decode(p.subarray(C, F));
    for (var H = ""; C < F; ) {
      var D = p[C++];
      if (128 & D) {
        var x = 63 & p[C++];
        if ((224 & D) != 192) {
          var e2 = 63 & p[C++];
          if ((D = (240 & D) == 224 ? (15 & D) << 12 | x << 6 | e2 : (7 & D) << 18 | x << 12 | e2 << 6 | 63 & p[C++]) < 65536) H += String.fromCharCode(D);
          else {
            var y2 = D - 65536;
            H += String.fromCharCode(55296 | y2 >> 10, 56320 | 1023 & y2);
          }
        } else H += String.fromCharCode((31 & D) << 6 | x);
      } else H += String.fromCharCode(D);
    }
    return H;
  }, G1 = (p, C) => {
    var Q = j1[p];
    C === 0 || C === 10 ? ((p === 1 ? m1 : _2)(D1(Q, 0)), Q.length = 0) : Q.push(C);
  }, V2 = [], z2 = (p) => {
    var C = V2[p];
    return C || (p >= V2.length && (V2.length = p + 1), V2[p] = C = x0.get(p)), C;
  }, L1 = { f: T1, h: W1, g: O1, d: (p, C, Q, U) => {
    for (var F = 0, H = 0; H < Q; H++) {
      var D = J2[C >> 2], x = J2[C + 4 >> 2];
      C += 8;
      for (var e2 = 0; e2 < x; e2++) G1(p, Z2[D + e2]);
      F += x;
    }
    return J2[U >> 2] = F, 0;
  }, c: J1, i: N1, e: Z1, b: Y1, a: F2 }, u2 = Q1();
  E._malloc = (p) => (E._malloc = u2.k)(p), E._free = (p) => (E._free = u2.l)(p), E._triangulate = (p, C, Q, U, F, H) => (E._triangulate = u2.n)(p, C, Q, U, F, H);
  var K2, O2 = (p, C) => (O2 = u2.o)(p, C), j2 = () => (j2 = u2.p)(), D2 = (p) => (D2 = u2.q)(p);
  function Y1(p, C, Q) {
    var U = j2();
    try {
      z2(p)(C, Q);
    } catch (F) {
      if (D2(U), F !== F + 0) throw F;
      O2(1, 0);
    }
  }
  function Z1(p, C) {
    var Q = j2();
    try {
      z2(p)(C);
    } catch (U) {
      if (D2(Q), U !== U + 0) throw U;
      O2(1, 0);
    }
  }
  function J1(p, C) {
    var Q = j2();
    try {
      return z2(p)(C);
    } catch (U) {
      if (D2(Q), U !== U + 0) throw U;
      O2(1, 0);
    }
  }
  function N1(p, C, Q, U) {
    var F = j2();
    try {
      return z2(p)(C, Q, U);
    } catch (H) {
      if (D2(F), H !== H + 0) throw H;
      O2(1, 0);
    }
  }
  function j0() {
    function p() {
      K2 || (K2 = !0, E.calledRun = !0, M0 || (R1(), W2(E), E.onRuntimeInitialized && E.onRuntimeInitialized(), I1()));
    }
    C2 > 0 || (C1(), C2 > 0 || (E.setStatus ? (E.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        E.setStatus("");
      }, 1), p();
    }, 1)) : p()));
  }
  if (H2 = function p() {
    K2 || j0(), K2 || (H2 = p);
  }, E.preInit) for (typeof E.preInit == "function" && (E.preInit = [E.preInit]); E.preInit.length > 0; ) E.preInit.pop()();
  j0();
  let k0 = null, w2 = null, R2 = null, q2 = null;
  const V1 = 2, D0 = 4e3;
  let G0 = 0;
  const z1 = (p, C, Q) => {
    k0 || (k0 = E._triangulate);
    let U = E.HEAPF32;
    const F = E.HEAP32.BYTES_PER_ELEMENT, H = 2, D = U.BYTES_PER_ELEMENT;
    Q > G0 && (G0 = Q, R2 && (E._free(R2), R2 = 0), w2 && (E._free(w2), w2 = 0)), R2 || (R2 = E._malloc(Q * D)), q2 || (q2 = E._malloc(D0 * F));
    const x = Q * V1;
    w2 || (w2 = E._malloc(x * D)), U = E.HEAPF32, U.set(p, R2 / D), E.HEAP32.set(C, q2 / F);
    const e2 = x / H, y2 = k0(R2, q2, Math.min(C.length, D0), H, w2, e2), $2 = y2 * H;
    U = E.HEAPF32;
    const X2 = U.slice(w2 / D, w2 / D + $2), c2 = {};
    return c2.buffer = X2, c2.vertexCount = y2, c2;
  };
  return E.triangulate = z1, M2.ready;
}, d1.exports = h1;
var w1 = y1.exports;
const F4 = U4({ __proto__: null, default: P4(w1) }, [w1]);
export {
  F4 as l
};
//# sourceMappingURL=libtess-asm-w25Q46gf.js.map
