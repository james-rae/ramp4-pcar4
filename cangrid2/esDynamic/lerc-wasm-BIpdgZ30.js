import { u as wn } from "./main-DHXLMse1.js";
var $, j, J, K = { exports: {} };
$ = K, j = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, J = function(n) {
  var D, R;
  (n = (n = n || {}) !== void 0 ? n : {}).ready = new Promise(function(e, t) {
    D = e, R = t;
  });
  var W = Object.assign({}, n), H = typeof window == "object", v = typeof importScripts == "function";
  typeof process == "object" && typeof process.versions == "object" && process.versions.node;
  var S, s = "";
  function Q(e) {
    return n.locateFile ? n.locateFile(e, s) : s + e;
  }
  (H || v) && (v ? s = self.location.href : typeof document < "u" && document.currentScript && (s = document.currentScript.src), j && (s = j), s = s.indexOf("blob:") !== 0 ? s.substr(0, s.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", v && (S = (e) => {
    var t = new XMLHttpRequest();
    return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
  })), n.print || console.log.bind(console);
  var m, I, d = n.printErr || console.warn.bind(console);
  Object.assign(n, W), W = null, n.arguments && n.arguments, n.thisProgram && n.thisProgram, n.quit && n.quit, n.wasmBinary && (m = n.wasmBinary), n.noExitRuntime, typeof WebAssembly != "object" && g("no native wasm support detected");
  var T, _, b, h, p, C, M = !1, O = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function V(e, t, i) {
    for (var c = t + i, u = t; e[u] && !(u >= c); ) ++u;
    if (u - t > 16 && e.buffer && O) return O.decode(e.subarray(t, u));
    for (var o = ""; t < u; ) {
      var r = e[t++];
      if (128 & r) {
        var f = 63 & e[t++];
        if ((224 & r) != 192) {
          var X = 63 & e[t++];
          if ((r = (240 & r) == 224 ? (15 & r) << 12 | f << 6 | X : (7 & r) << 18 | f << 12 | X << 6 | 63 & e[t++]) < 65536) o += String.fromCharCode(r);
          else {
            var Y = r - 65536;
            o += String.fromCharCode(55296 | Y >> 10, 56320 | 1023 & Y);
          }
        } else o += String.fromCharCode((31 & r) << 6 | f);
      } else o += String.fromCharCode(r);
    }
    return o;
  }
  function x(e, t) {
    return e ? V(b, e, t) : "";
  }
  function U(e) {
    T = e, n.HEAP8 = _ = new Int8Array(e), n.HEAP16 = new Int16Array(e), n.HEAP32 = h = new Int32Array(e), n.HEAPU8 = b = new Uint8Array(e), n.HEAPU16 = new Uint16Array(e), n.HEAPU32 = p = new Uint32Array(e), n.HEAPF32 = new Float32Array(e), n.HEAPF64 = new Float64Array(e);
  }
  n.INITIAL_MEMORY;
  var B = [], k = [], F = [];
  function Z() {
    if (n.preRun) for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length; ) tn(n.preRun.shift());
    P(B);
  }
  function nn() {
    P(k);
  }
  function en() {
    if (n.postRun) for (typeof n.postRun == "function" && (n.postRun = [n.postRun]); n.postRun.length; ) on(n.postRun.shift());
    P(F);
  }
  function tn(e) {
    B.unshift(e);
  }
  function rn(e) {
    k.unshift(e);
  }
  function on(e) {
    F.unshift(e);
  }
  var l = 0, y = null;
  function un(e) {
    l++, n.monitorRunDependencies && n.monitorRunDependencies(l);
  }
  function an(e) {
    if (l--, n.monitorRunDependencies && n.monitorRunDependencies(l), l == 0 && y) {
      var t = y;
      y = null, t();
    }
  }
  function g(e) {
    n.onAbort && n.onAbort(e), d(e = "Aborted(" + e + ")"), M = !0, e += ". Build with -sASSERTIONS for more info.";
    var t = new WebAssembly.RuntimeError(e);
    throw R(t), t;
  }
  var a, sn = "data:application/octet-stream;base64,";
  function q(e) {
    return e.startsWith(sn);
  }
  function z(e) {
    try {
      if (e == a && m) return new Uint8Array(m);
      if (S) return S(e);
      throw "both async and sync fetching of the wasm failed";
    } catch (t) {
      g(t);
    }
  }
  function cn() {
    return m || !H && !v || typeof fetch != "function" ? Promise.resolve().then(function() {
      return z(a);
    }) : fetch(a, { credentials: "same-origin" }).then(function(e) {
      if (!e.ok) throw "failed to load wasm binary file at '" + a + "'";
      return e.arrayBuffer();
    }).catch(function() {
      return z(a);
    });
  }
  function fn() {
    var e = { a: bn };
    function t(o, r) {
      var f = o.exports;
      n.asm = f, U((I = n.asm.g).buffer), C = n.asm.m, rn(n.asm.h), an();
    }
    function i(o) {
      t(o.instance);
    }
    function c(o) {
      return cn().then(function(r) {
        return WebAssembly.instantiate(r, e);
      }).then(function(r) {
        return r;
      }).then(o, function(r) {
        d("failed to asynchronously prepare wasm: " + r), g(r);
      });
    }
    function u() {
      return m || typeof WebAssembly.instantiateStreaming != "function" || q(a) || typeof fetch != "function" ? c(i) : fetch(a, { credentials: "same-origin" }).then(function(o) {
        return WebAssembly.instantiateStreaming(o, e).then(i, function(r) {
          return d("wasm streaming compile failed: " + r), d("falling back to ArrayBuffer instantiation"), c(i);
        });
      });
    }
    if (un(), n.instantiateWasm) try {
      return n.instantiateWasm(e, t);
    } catch (o) {
      return d("Module.instantiateWasm callback failed with error: " + o), !1;
    }
    return u().catch(R), {};
  }
  function P(e) {
    for (; e.length > 0; ) {
      var t = e.shift();
      if (typeof t != "function") {
        var i = t.func;
        typeof i == "number" ? t.arg === void 0 ? L(i)() : L(i)(t.arg) : i(t.arg === void 0 ? null : t.arg);
      } else t(n);
    }
  }
  q(a = "lerc-wasm.wasm") || (a = Q(a));
  var w = [];
  function L(e) {
    var t = w[e];
    return t || (e >= w.length && (w.length = e + 1), w[e] = t = C.get(e)), t;
  }
  function pn(e, t, i, c) {
    g("Assertion failed: " + x(e) + ", at: " + [t ? x(t) : "unknown filename", i, c ? x(c) : "unknown function"]);
  }
  function ln(e) {
    return N(e + 24) + 24;
  }
  function hn(e) {
    this.excPtr = e, this.ptr = e - 24, this.set_type = function(t) {
      p[this.ptr + 4 >> 2] = t;
    }, this.get_type = function() {
      return p[this.ptr + 4 >> 2];
    }, this.set_destructor = function(t) {
      p[this.ptr + 8 >> 2] = t;
    }, this.get_destructor = function() {
      return p[this.ptr + 8 >> 2];
    }, this.set_refcount = function(t) {
      h[this.ptr >> 2] = t;
    }, this.set_caught = function(t) {
      t = t ? 1 : 0, _[this.ptr + 12 | 0] = t;
    }, this.get_caught = function() {
      return _[this.ptr + 12 | 0] != 0;
    }, this.set_rethrown = function(t) {
      t = t ? 1 : 0, _[this.ptr + 13 | 0] = t;
    }, this.get_rethrown = function() {
      return _[this.ptr + 13 | 0] != 0;
    }, this.init = function(t, i) {
      this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(i), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
    }, this.add_ref = function() {
      var t = h[this.ptr >> 2];
      h[this.ptr >> 2] = t + 1;
    }, this.release_ref = function() {
      var t = h[this.ptr >> 2];
      return h[this.ptr >> 2] = t - 1, t === 1;
    }, this.set_adjusted_ptr = function(t) {
      p[this.ptr + 16 >> 2] = t;
    }, this.get_adjusted_ptr = function() {
      return p[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (G(this.get_type())) return p[this.excPtr >> 2];
      var t = this.get_adjusted_ptr();
      return t !== 0 ? t : this.excPtr;
    };
  }
  function mn(e, t, i) {
    throw new hn(e).init(t, i), e;
  }
  function dn() {
    g("");
  }
  function _n(e, t, i) {
    b.copyWithin(e, t, t + i);
  }
  function yn() {
    return 2147483648;
  }
  function gn(e) {
    try {
      return I.grow(e - T.byteLength + 65535 >>> 16), U(I.buffer), 1;
    } catch {
    }
  }
  function vn(e) {
    var t = b.length;
    e >>>= 0;
    var i = yn();
    if (e > i) return !1;
    let c = (r, f) => r + (f - r % f) % f;
    for (var u = 1; u <= 4; u *= 2) {
      var o = t * (1 + 0.2 / u);
      if (o = Math.min(o, e + 100663296), gn(Math.min(i, c(Math.max(e, o), 65536)))) return !0;
    }
    return !1;
  }
  var bn = { a: pn, c: ln, b: mn, d: dn, f: _n, e: vn };
  fn(), n.___wasm_call_ctors = function() {
    return (n.___wasm_call_ctors = n.asm.h).apply(null, arguments);
  }, n._lerc_getBlobInfo = function() {
    return (n._lerc_getBlobInfo = n.asm.i).apply(null, arguments);
  }, n._lerc_getDataRanges = function() {
    return (n._lerc_getDataRanges = n.asm.j).apply(null, arguments);
  }, n._lerc_decode = function() {
    return (n._lerc_decode = n.asm.k).apply(null, arguments);
  }, n._lerc_decode_4D = function() {
    return (n._lerc_decode_4D = n.asm.l).apply(null, arguments);
  };
  var N = n._malloc = function() {
    return (N = n._malloc = n.asm.n).apply(null, arguments);
  };
  n._free = function() {
    return (n._free = n.asm.o).apply(null, arguments);
  };
  var A, G = n.___cxa_is_pointer_type = function() {
    return (G = n.___cxa_is_pointer_type = n.asm.p).apply(null, arguments);
  };
  function E(e) {
    function t() {
      A || (A = !0, n.calledRun = !0, M || (nn(), D(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), en()));
    }
    l > 0 || (Z(), l > 0 || (n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        n.setStatus("");
      }, 1), t();
    }, 1)) : t()));
  }
  if (y = function e() {
    A || E(), A || (y = e);
  }, n.run = E, n.preInit) for (typeof n.preInit == "function" && (n.preInit = [n.preInit]); n.preInit.length > 0; ) n.preInit.pop()();
  return E(), n.ready;
}, $.exports = J;
const An = wn(K.exports), Sn = Object.freeze(Object.defineProperty({ __proto__: null, default: An }, Symbol.toStringTag, { value: "Module" }));
export {
  Sn as l
};
//# sourceMappingURL=lerc-wasm-BIpdgZ30.js.map
