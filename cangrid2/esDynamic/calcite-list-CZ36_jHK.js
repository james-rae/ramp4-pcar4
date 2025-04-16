import { c$ as mt, d0 as bt, cX as v, d1 as Rn, e_ as ce, hw as jn } from "./main-DHXLMse1.js";
import { l as ue, t as Hn } from "./dom-BD6OZEvo.js";
import { u as Xt, I as Yt } from "./interactive-J31s-uXp.js";
import { c as $n } from "./observers-Bi3Qhj76.js";
import { M as Bn } from "./resources4-goq0HvVU.js";
import { u as zn, a as Xn } from "./utils3-Do-wQr0o.js";
import { s as Gt, a as Ut, c as Wt } from "./loadable-By8v9cXG.js";
import { u as Kt, s as qt, c as Vt, d as Zt } from "./t9n-2Iu_Noy9.js";
import { c as Qt, d as Jt, n as wt } from "./locale-BWfU23IG.js";
import { S as Dt, i as vt, r as Yn, b as yt, f as Gn, a as Un, c as en, d as tn } from "./debounce-xqxE0s7z.js";
import { d as nn } from "./icon-Dt1qIaUr.js";
import { a as rn, b as an, d as on } from "./input2-D7qRYPg_.js";
import { d as Wn } from "./loader-D9MEKYSI.js";
import { d as Kn } from "./scrim-DHudEh-o.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function xt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function U(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xt(Object(n), !0).forEach(function(i) {
      qn(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function ze(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(e) {
    return typeof e;
  } : ze = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ze(t);
}
function qn(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function V() {
  return V = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, V.apply(this, arguments);
}
function Vn(t, e) {
  if (t == null) return {};
  var n = {}, i = Object.keys(t), r, a;
  for (a = 0; a < i.length; a++)
    r = i[a], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function Zn(t, e) {
  if (t == null) return {};
  var n = Vn(t, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (r = 0; r < a.length; r++)
      i = a[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
var Qn = "1.15.3";
function q(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Z = q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ke = q(/Edge/i), Tt = q(/firefox/i), _e = q(/safari/i) && !q(/chrome/i) && !q(/android/i), sn = q(/iP(ad|od|hone)/i), ln = q(/chrome/i) && q(/android/i), cn = {
  capture: !1,
  passive: !1
};
function I(t, e, n) {
  t.addEventListener(e, n, !Z && cn);
}
function S(t, e, n) {
  t.removeEventListener(e, n, !Z && cn);
}
function We(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function dn(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function X(t, e, n, i) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && We(t, e) : We(t, e)) || i && t === n)
        return t;
      if (t === n) break;
    } while (t = dn(t));
  }
  return null;
}
var _t = /\s+/g;
function R(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var i = (" " + t.className + " ").replace(_t, " ").replace(" " + e + " ", " ");
      t.className = (i + (n ? " " + e : "")).replace(_t, " ");
    }
}
function h(t, e, n) {
  var i = t && t.style;
  if (i) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function ve(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var i = h(t, "transform");
      i && i !== "none" && (n = i + " " + n);
    } while (!e && (t = t.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function un(t, e, n) {
  if (t) {
    var i = t.getElementsByTagName(e), r = 0, a = i.length;
    if (n)
      for (; r < a; r++)
        n(i[r], r);
    return i;
  }
  return [];
}
function G() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function _(t, e, n, i, r) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var a, o, s, l, c, f, d;
    if (t !== window && t.parentNode && t !== G() ? (a = t.getBoundingClientRect(), o = a.top, s = a.left, l = a.bottom, c = a.right, f = a.height, d = a.width) : (o = 0, s = 0, l = window.innerHeight, c = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (r = r || t.parentNode, !Z))
      do
        if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || n && h(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          o -= m.top + parseInt(h(r, "border-top-width")), s -= m.left + parseInt(h(r, "border-left-width")), l = o + a.height, c = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (i && t !== window) {
      var y = ve(r || t), E = y && y.a, b = y && y.d;
      y && (o /= b, s /= E, d /= E, f /= b, l = o + f, c = s + d);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: c,
      width: d,
      height: f
    };
  }
}
function At(t, e, n) {
  for (var i = ie(t, !0), r = _(t)[e]; i; ) {
    var a = _(i)[n], o = void 0;
    if (o = r >= a, !o) return i;
    if (i === G()) break;
    i = ie(i, !1);
  }
  return !1;
}
function ye(t, e, n, i) {
  for (var r = 0, a = 0, o = t.children; a < o.length; ) {
    if (o[a].style.display !== "none" && o[a] !== p.ghost && (i || o[a] !== p.dragged) && X(o[a], n.draggable, t, !1)) {
      if (r === e)
        return o[a];
      r++;
    }
    a++;
  }
  return null;
}
function Et(t, e) {
  for (var n = t.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || e && !We(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function H(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== p.clone && (!e || We(t, e)) && n++;
  return n;
}
function Ft(t) {
  var e = 0, n = 0, i = G();
  if (t)
    do {
      var r = ve(t), a = r.a, o = r.d;
      e += t.scrollLeft * a, n += t.scrollTop * o;
    } while (t !== i && (t = t.parentNode));
  return [e, n];
}
function Jn(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var i in e)
        if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n);
    }
  return -1;
}
function ie(t, e) {
  if (!t || !t.getBoundingClientRect) return G();
  var n = t, i = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = h(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return G();
        if (i || e) return n;
        i = !0;
      }
    }
  while (n = n.parentNode);
  return G();
}
function ei(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function et(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Ae;
function fn(t, e) {
  return function() {
    if (!Ae) {
      var n = arguments, i = this;
      n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), Ae = setTimeout(function() {
        Ae = void 0;
      }, e);
    }
  };
}
function ti() {
  clearTimeout(Ae), Ae = void 0;
}
function hn(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function pn(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function gn(t, e, n) {
  var i = {};
  return Array.from(t.children).forEach(function(r) {
    var a, o, s, l;
    if (!(!X(r, e.draggable, t, !1) || r.animated || r === n)) {
      var c = _(r);
      i.left = Math.min((a = i.left) !== null && a !== void 0 ? a : 1 / 0, c.left), i.top = Math.min((o = i.top) !== null && o !== void 0 ? o : 1 / 0, c.top), i.right = Math.max((s = i.right) !== null && s !== void 0 ? s : -1 / 0, c.right), i.bottom = Math.max((l = i.bottom) !== null && l !== void 0 ? l : -1 / 0, c.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var k = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ni() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(r) {
          if (!(h(r, "display") === "none" || r === p.ghost)) {
            t.push({
              target: r,
              rect: _(r)
            });
            var a = U({}, t[t.length - 1].rect);
            if (r.thisAnimationDuration) {
              var o = ve(r, !0);
              o && (a.top -= o.f, a.left -= o.e);
            }
            r.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(i) {
      t.push(i);
    },
    removeAnimationState: function(i) {
      t.splice(Jn(t, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof i == "function" && i();
        return;
      }
      var a = !1, o = 0;
      t.forEach(function(s) {
        var l = 0, c = s.target, f = c.fromRect, d = _(c), m = c.prevFromRect, y = c.prevToRect, E = s.rect, b = ve(c, !0);
        b && (d.top -= b.f, d.left -= b.e), c.toRect = d, c.thisAnimationDuration && et(m, d) && !et(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (E.top - d.top) / (E.left - d.left) === (f.top - d.top) / (f.left - d.left) && (l = ri(E, m, y, r.options)), et(d, f) || (c.prevFromRect = f, c.prevToRect = d, l || (l = r.options.animation), r.animate(c, E, d, l)), l && (a = !0, o = Math.max(o, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(e), a ? e = setTimeout(function() {
        typeof i == "function" && i();
      }, o) : typeof i == "function" && i(), t = [];
    },
    animate: function(i, r, a, o) {
      if (o) {
        h(i, "transition", ""), h(i, "transform", "");
        var s = ve(this.el), l = s && s.a, c = s && s.d, f = (r.left - a.left) / (l || 1), d = (r.top - a.top) / (c || 1);
        i.animatingX = !!f, i.animatingY = !!d, h(i, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = ii(i), h(i, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          h(i, "transition", ""), h(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, o);
      }
    }
  };
}
function ii(t) {
  return t.offsetWidth;
}
function ri(t, e, n, i) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation;
}
var fe = [], tt = {
  initializeByDefault: !0
}, Me = {
  mount: function(e) {
    for (var n in tt)
      tt.hasOwnProperty(n) && !(n in e) && (e[n] = tt[n]);
    fe.forEach(function(i) {
      if (i.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), fe.push(e);
  },
  pluginEvent: function(e, n, i) {
    var r = this;
    this.eventCanceled = !1, i.cancel = function() {
      r.eventCanceled = !0;
    };
    var a = e + "Global";
    fe.forEach(function(o) {
      n[o.pluginName] && (n[o.pluginName][a] && n[o.pluginName][a](U({
        sortable: n
      }, i)), n.options[o.pluginName] && n[o.pluginName][e] && n[o.pluginName][e](U({
        sortable: n
      }, i)));
    });
  },
  initializePlugins: function(e, n, i, r) {
    fe.forEach(function(s) {
      var l = s.pluginName;
      if (!(!e.options[l] && !s.initializeByDefault)) {
        var c = new s(e, n, e.options);
        c.sortable = e, c.options = e.options, e[l] = c, V(i, c.defaults);
      }
    });
    for (var a in e.options)
      if (e.options.hasOwnProperty(a)) {
        var o = this.modifyOption(e, a, e.options[a]);
        typeof o < "u" && (e.options[a] = o);
      }
  },
  getEventProperties: function(e, n) {
    var i = {};
    return fe.forEach(function(r) {
      typeof r.eventProperties == "function" && V(i, r.eventProperties.call(n[r.pluginName], e));
    }), i;
  },
  modifyOption: function(e, n, i) {
    var r;
    return fe.forEach(function(a) {
      e[a.pluginName] && a.optionListeners && typeof a.optionListeners[n] == "function" && (r = a.optionListeners[n].call(e[a.pluginName], i));
    }), r;
  }
};
function ai(t) {
  var e = t.sortable, n = t.rootEl, i = t.name, r = t.targetEl, a = t.cloneEl, o = t.toEl, s = t.fromEl, l = t.oldIndex, c = t.newIndex, f = t.oldDraggableIndex, d = t.newDraggableIndex, m = t.originalEvent, y = t.putSortable, E = t.extraEventProperties;
  if (e = e || n && n[k], !!e) {
    var b, $ = e.options, W = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Z && !ke ? b = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (b = document.createEvent("Event"), b.initEvent(i, !0, !0)), b.to = o || n, b.from = s || n, b.item = r || n, b.clone = a, b.oldIndex = l, b.newIndex = c, b.oldDraggableIndex = f, b.newDraggableIndex = d, b.originalEvent = m, b.pullMode = y ? y.lastPutMode : void 0;
    var O = U(U({}, E), Me.getEventProperties(i, e));
    for (var B in O)
      b[B] = O[B];
    n && n.dispatchEvent(b), $[W] && $[W].call(e, b);
  }
}
var oi = ["evt"], P = function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = i.evt, a = Zn(i, oi);
  Me.pluginEvent.bind(p)(e, n, U({
    dragEl: u,
    parentEl: x,
    ghostEl: g,
    rootEl: w,
    nextEl: de,
    lastDownEl: Xe,
    cloneEl: D,
    cloneHidden: ne,
    dragStarted: De,
    putSortable: A,
    activeSortable: p.active,
    originalEvent: r,
    oldIndex: me,
    oldDraggableIndex: Fe,
    newIndex: j,
    newDraggableIndex: te,
    hideGhostForTarget: yn,
    unhideGhostForTarget: En,
    cloneNowHidden: function() {
      ne = !0;
    },
    cloneNowShown: function() {
      ne = !1;
    },
    dispatchSortableEvent: function(s) {
      L({
        sortable: n,
        name: s,
        originalEvent: r
      });
    }
  }, a));
};
function L(t) {
  ai(U({
    putSortable: A,
    cloneEl: D,
    targetEl: u,
    rootEl: w,
    oldIndex: me,
    oldDraggableIndex: Fe,
    newIndex: j,
    newDraggableIndex: te
  }, t));
}
var u, x, g, w, de, Xe, D, ne, me, j, Fe, te, Re, A, ge = !1, Ke = !1, qe = [], se, z, nt, it, Ot, Lt, De, he, Oe, Le = !1, je = !1, Ye, F, rt = [], ut = !1, Ve = [], Qe = typeof document < "u", He = sn, Pt = ke || Z ? "cssFloat" : "float", si = Qe && !ln && !sn && "draggable" in document.createElement("div"), mn = function() {
  if (Qe) {
    if (Z)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), bn = function(e, n) {
  var i = h(e), r = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), a = ye(e, 0, n), o = ye(e, 1, n), s = a && h(a), l = o && h(o), c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + _(a).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + _(o).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || c >= r && i[Pt] === "none" || o && i[Pt] === "none" && c + f > r) ? "vertical" : "horizontal";
}, li = function(e, n, i) {
  var r = i ? e.left : e.top, a = i ? e.right : e.bottom, o = i ? e.width : e.height, s = i ? n.left : n.top, l = i ? n.right : n.bottom, c = i ? n.width : n.height;
  return r === s || a === l || r + o / 2 === s + c / 2;
}, ci = function(e, n) {
  var i;
  return qe.some(function(r) {
    var a = r[k].options.emptyInsertThreshold;
    if (!(!a || Et(r))) {
      var o = _(r), s = e >= o.left - a && e <= o.right + a, l = n >= o.top - a && n <= o.bottom + a;
      if (s && l)
        return i = r;
    }
  }), i;
}, vn = function(e) {
  function n(a, o) {
    return function(s, l, c, f) {
      var d = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (a == null && (o || d))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (o && a === "clone")
        return a;
      if (typeof a == "function")
        return n(a(s, l, c, f), o)(s, l, c, f);
      var m = (o ? s : l).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var i = {}, r = e.group;
  (!r || ze(r) != "object") && (r = {
    name: r
  }), i.name = r.name, i.checkPull = n(r.pull, !0), i.checkPut = n(r.put), i.revertClone = r.revertClone, e.group = i;
}, yn = function() {
  !mn && g && h(g, "display", "none");
}, En = function() {
  !mn && g && h(g, "display", "");
};
Qe && !ln && document.addEventListener("click", function(t) {
  if (Ke)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Ke = !1, !1;
}, !0);
var le = function(e) {
  if (u) {
    e = e.touches ? e.touches[0] : e;
    var n = ci(e.clientX, e.clientY);
    if (n) {
      var i = {};
      for (var r in e)
        e.hasOwnProperty(r) && (i[r] = e[r]);
      i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[k]._onDragOver(i);
    }
  }
}, di = function(e) {
  u && u.parentNode[k]._isOutsideThisEl(e.target);
};
function p(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = V({}, e), t[k] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return bn(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !_e,
    emptyInsertThreshold: 5
  };
  Me.initializePlugins(this, t, n);
  for (var i in n)
    !(i in e) && (e[i] = n[i]);
  vn(e);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : si, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? I(t, "pointerdown", this._onTapStart) : (I(t, "mousedown", this._onTapStart), I(t, "touchstart", this._onTapStart)), this.nativeDraggable && (I(t, "dragover", this), I(t, "dragenter", this)), qe.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), V(this, ni());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (he = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, u) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, i = this.el, r = this.options, a = r.preventOnFilter, o = e.type, s = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (s || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = r.filter;
      if (vi(i), !u && !(/mousedown|pointerdown/.test(o) && e.button !== 0 || r.disabled) && !c.isContentEditable && !(!this.nativeDraggable && _e && l && l.tagName.toUpperCase() === "SELECT") && (l = X(l, r.draggable, i, !1), !(l && l.animated) && Xe !== l)) {
        if (me = H(l), Fe = H(l, r.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            L({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: i,
              fromEl: i
            }), P("filter", n, {
              evt: e
            }), a && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = X(c, d.trim(), i, !1), d)
            return L({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: i,
              toEl: i
            }), P("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          a && e.cancelable && e.preventDefault();
          return;
        }
        r.handle && !X(c, r.handle, i, !1) || this._prepareDragStart(e, s, l);
      }
    }
  },
  _prepareDragStart: function(e, n, i) {
    var r = this, a = r.el, o = r.options, s = a.ownerDocument, l;
    if (i && !u && i.parentNode === a) {
      var c = _(i);
      if (w = a, u = i, x = u.parentNode, de = u.nextSibling, Xe = i, Re = o.group, p.dragged = u, se = {
        target: u,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Ot = se.clientX - c.left, Lt = se.clientY - c.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, u.style["will-change"] = "all", l = function() {
        if (P("delayEnded", r, {
          evt: e
        }), p.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !Tt && r.nativeDraggable && (u.draggable = !0), r._triggerDragStart(e, n), L({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), R(u, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(f) {
        un(u, f.trim(), at);
      }), I(s, "dragover", le), I(s, "mousemove", le), I(s, "touchmove", le), I(s, "mouseup", r._onDrop), I(s, "touchend", r._onDrop), I(s, "touchcancel", r._onDrop), Tt && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), P("delayStart", this, {
        evt: e
      }), o.delay && (!o.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ke || Z))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        I(s, "mouseup", r._disableDelayedDrag), I(s, "touchend", r._disableDelayedDrag), I(s, "touchcancel", r._disableDelayedDrag), I(s, "mousemove", r._delayedDragTouchMoveHandler), I(s, "touchmove", r._delayedDragTouchMoveHandler), o.supportPointer && I(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && at(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._disableDelayedDrag), S(e, "touchend", this._disableDelayedDrag), S(e, "touchcancel", this._disableDelayedDrag), S(e, "mousemove", this._delayedDragTouchMoveHandler), S(e, "touchmove", this._delayedDragTouchMoveHandler), S(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? I(document, "pointermove", this._onTouchMove) : n ? I(document, "touchmove", this._onTouchMove) : I(document, "mousemove", this._onTouchMove) : (I(u, "dragend", this), I(w, "dragstart", this._onDragStart));
    try {
      document.selection ? Ge(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (ge = !1, w && u) {
      P("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && I(document, "dragover", di);
      var i = this.options;
      !e && R(u, i.dragClass, !1), R(u, i.ghostClass, !0), p.active = this, e && this._appendGhost(), L({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (z) {
      this._lastX = z.clientX, this._lastY = z.clientY, yn();
      for (var e = document.elementFromPoint(z.clientX, z.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(z.clientX, z.clientY), e !== n); )
        n = e;
      if (u.parentNode[k]._isOutsideThisEl(e), n)
        do {
          if (n[k]) {
            var i = void 0;
            if (i = n[k]._onDragOver({
              clientX: z.clientX,
              clientY: z.clientY,
              target: e,
              rootEl: n
            }), i && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = dn(n));
      En();
    }
  },
  _onTouchMove: function(e) {
    if (se) {
      var n = this.options, i = n.fallbackTolerance, r = n.fallbackOffset, a = e.touches ? e.touches[0] : e, o = g && ve(g, !0), s = g && o && o.a, l = g && o && o.d, c = He && F && Ft(F), f = (a.clientX - se.clientX + r.x) / (s || 1) + (c ? c[0] - rt[0] : 0) / (s || 1), d = (a.clientY - se.clientY + r.y) / (l || 1) + (c ? c[1] - rt[1] : 0) / (l || 1);
      if (!p.active && !ge) {
        if (i && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < i)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        o ? (o.e += f - (nt || 0), o.f += d - (it || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var m = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        h(g, "webkitTransform", m), h(g, "mozTransform", m), h(g, "msTransform", m), h(g, "transform", m), nt = f, it = d, z = a;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : w, n = _(u, !0, He, !0, e), i = this.options;
      if (He) {
        for (F = e; h(F, "position") === "static" && h(F, "transform") === "none" && F !== document; )
          F = F.parentNode;
        F !== document.body && F !== document.documentElement ? (F === document && (F = G()), n.top += F.scrollTop, n.left += F.scrollLeft) : F = G(), rt = Ft(F);
      }
      g = u.cloneNode(!0), R(g, i.ghostClass, !1), R(g, i.fallbackClass, !0), R(g, i.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", n.top), h(g, "left", n.left), h(g, "width", n.width), h(g, "height", n.height), h(g, "opacity", "0.8"), h(g, "position", He ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, e.appendChild(g), h(g, "transform-origin", Ot / parseInt(g.style.width) * 100 + "% " + Lt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var i = this, r = e.dataTransfer, a = i.options;
    if (P("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    P("setupClone", this), p.eventCanceled || (D = pn(u), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), R(D, this.options.chosenClass, !1), p.clone = D), i.cloneId = Ge(function() {
      P("clone", i), !p.eventCanceled && (i.options.removeCloneOnHide || w.insertBefore(D, u), i._hideClone(), L({
        sortable: i,
        name: "clone"
      }));
    }), !n && R(u, a.dragClass, !0), n ? (Ke = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (S(document, "mouseup", i._onDrop), S(document, "touchend", i._onDrop), S(document, "touchcancel", i._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(i, r, u)), I(document, "drop", i), h(u, "transform", "translateZ(0)")), ge = !0, i._dragStartId = Ge(i._dragStarted.bind(i, n, e)), I(document, "selectstart", i), De = !0, _e && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, i = e.target, r, a, o, s = this.options, l = s.group, c = p.active, f = Re === l, d = s.sort, m = A || c, y, E = this, b = !1;
    if (ut) return;
    function $(we, Mn) {
      P(we, E, U({
        evt: e,
        isOwner: f,
        axis: y ? "vertical" : "horizontal",
        revert: o,
        dragRect: r,
        targetRect: a,
        canSort: d,
        fromSortable: m,
        target: i,
        completed: O,
        onMove: function(Ct, Nn) {
          return $e(w, n, u, r, Ct, _(Ct), e, Nn);
        },
        changed: B
      }, Mn));
    }
    function W() {
      $("dragOverAnimationCapture"), E.captureAnimationState(), E !== m && m.captureAnimationState();
    }
    function O(we) {
      return $("dragOverCompleted", {
        insertion: we
      }), we && (f ? c._hideClone() : c._showClone(E), E !== m && (R(u, A ? A.options.ghostClass : c.options.ghostClass, !1), R(u, s.ghostClass, !0)), A !== E && E !== p.active ? A = E : E === p.active && A && (A = null), m === E && (E._ignoreWhileAnimating = i), E.animateAll(function() {
        $("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (i === u && !u.animated || i === n && !i.animated) && (he = null), !s.dragoverBubble && !e.rootEl && i !== document && (u.parentNode[k]._isOutsideThisEl(e.target), !we && le(e)), !s.dragoverBubble && e.stopPropagation && e.stopPropagation(), b = !0;
    }
    function B() {
      j = H(u), te = H(u, s.draggable), L({
        sortable: E,
        name: "change",
        toEl: n,
        newIndex: j,
        newDraggableIndex: te,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = X(i, s.draggable, n, !0), $("dragOver"), p.eventCanceled) return b;
    if (u.contains(e.target) || i.animated && i.animatingX && i.animatingY || E._ignoreWhileAnimating === i)
      return O(!1);
    if (Ke = !1, c && !s.disabled && (f ? d || (o = x !== w) : A === this || (this.lastPutMode = Re.checkPull(this, c, u, e)) && l.checkPut(this, c, u, e))) {
      if (y = this._getDirection(e, i) === "vertical", r = _(u), $("dragOverValid"), p.eventCanceled) return b;
      if (o)
        return x = w, W(), this._hideClone(), $("revert"), p.eventCanceled || (de ? w.insertBefore(u, de) : w.appendChild(u)), O(!0);
      var M = Et(n, s.draggable);
      if (!M || pi(e, y, this) && !M.animated) {
        if (M === u)
          return O(!1);
        if (M && n === e.target && (i = M), i && (a = _(i)), $e(w, n, u, r, i, a, e, !!i) !== !1)
          return W(), M && M.nextSibling ? n.insertBefore(u, M.nextSibling) : n.appendChild(u), x = n, B(), O(!0);
      } else if (M && hi(e, y, this)) {
        var re = ye(n, 0, s, !0);
        if (re === u)
          return O(!1);
        if (i = re, a = _(i), $e(w, n, u, r, i, a, e, !1) !== !1)
          return W(), n.insertBefore(u, re), x = n, B(), O(!0);
      } else if (i.parentNode === n) {
        a = _(i);
        var Y = 0, ae, Ee = u.parentNode !== n, N = !li(u.animated && u.toRect || r, i.animated && i.toRect || a, y), Se = y ? "top" : "left", Q = At(i, "top", "top") || At(u, "top", "top"), Ie = Q ? Q.scrollTop : void 0;
        he !== i && (ae = a[Se], Le = !1, je = !N && s.invertSwap || Ee), Y = gi(e, i, a, y, N ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, je, he === i);
        var K;
        if (Y !== 0) {
          var oe = H(u);
          do
            oe -= Y, K = x.children[oe];
          while (K && (h(K, "display") === "none" || K === g));
        }
        if (Y === 0 || K === i)
          return O(!1);
        he = i, Oe = Y;
        var Ce = i.nextElementSibling, J = !1;
        J = Y === 1;
        var Ne = $e(w, n, u, r, i, a, e, J);
        if (Ne !== !1)
          return (Ne === 1 || Ne === -1) && (J = Ne === 1), ut = !0, setTimeout(fi, 30), W(), J && !Ce ? n.appendChild(u) : i.parentNode.insertBefore(u, J ? Ce : i), Q && hn(Q, 0, Ie - Q.scrollTop), x = u.parentNode, ae !== void 0 && !je && (Ye = Math.abs(ae - _(i)[Se])), B(), O(!0);
      }
      if (n.contains(u))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    S(document, "mousemove", this._onTouchMove), S(document, "touchmove", this._onTouchMove), S(document, "pointermove", this._onTouchMove), S(document, "dragover", le), S(document, "mousemove", le), S(document, "touchmove", le);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._onDrop), S(e, "touchend", this._onDrop), S(e, "pointerup", this._onDrop), S(e, "touchcancel", this._onDrop), S(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, i = this.options;
    if (j = H(u), te = H(u, i.draggable), P("drop", this, {
      evt: e
    }), x = u && u.parentNode, j = H(u), te = H(u, i.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ge = !1, je = !1, Le = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ft(this.cloneId), ft(this._dragStartId), this.nativeDraggable && (S(document, "drop", this), S(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), _e && h(document.body, "user-select", ""), h(u, "transform", ""), e && (De && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (w === x || A && A.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), u && (this.nativeDraggable && S(u, "dragend", this), at(u), u.style["will-change"] = "", De && !ge && R(u, A ? A.options.ghostClass : this.options.ghostClass, !1), R(u, this.options.chosenClass, !1), L({
      sortable: this,
      name: "unchoose",
      toEl: x,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), w !== x ? (j >= 0 && (L({
      rootEl: x,
      name: "add",
      toEl: x,
      fromEl: w,
      originalEvent: e
    }), L({
      sortable: this,
      name: "remove",
      toEl: x,
      originalEvent: e
    }), L({
      rootEl: x,
      name: "sort",
      toEl: x,
      fromEl: w,
      originalEvent: e
    }), L({
      sortable: this,
      name: "sort",
      toEl: x,
      originalEvent: e
    })), A && A.save()) : j !== me && j >= 0 && (L({
      sortable: this,
      name: "update",
      toEl: x,
      originalEvent: e
    }), L({
      sortable: this,
      name: "sort",
      toEl: x,
      originalEvent: e
    })), p.active && ((j == null || j === -1) && (j = me, te = Fe), L({
      sortable: this,
      name: "end",
      toEl: x,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    P("nulling", this), w = u = x = g = de = D = Xe = ne = se = z = De = j = te = me = Fe = he = Oe = A = Re = p.dragged = p.ghost = p.clone = p.active = null, Ve.forEach(function(e) {
      e.checked = !0;
    }), Ve.length = nt = it = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(e), ui(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, i = this.el.children, r = 0, a = i.length, o = this.options; r < a; r++)
      n = i[r], X(n, o.draggable, this.el, !1) && e.push(n.getAttribute(o.dataIdAttr) || bi(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var i = {}, r = this.el;
    this.toArray().forEach(function(a, o) {
      var s = r.children[o];
      X(s, this.options.draggable, r, !1) && (i[a] = s);
    }, this), n && this.captureAnimationState(), e.forEach(function(a) {
      i[a] && (r.removeChild(i[a]), r.appendChild(i[a]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return X(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var i = this.options;
    if (n === void 0)
      return i[e];
    var r = Me.modifyOption(this, e, n);
    typeof r < "u" ? i[e] = r : i[e] = n, e === "group" && vn(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    P("destroy", this);
    var e = this.el;
    e[k] = null, S(e, "mousedown", this._onTapStart), S(e, "touchstart", this._onTapStart), S(e, "pointerdown", this._onTapStart), this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), qe.splice(qe.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ne) {
      if (P("hideClone", this), p.eventCanceled) return;
      h(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), ne = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ne) {
      if (P("showClone", this), p.eventCanceled) return;
      u.parentNode == w && !this.options.group.revertClone ? w.insertBefore(D, u) : de ? w.insertBefore(D, de) : w.appendChild(D), this.options.group.revertClone && this.animate(u, D), h(D, "display", ""), ne = !1;
    }
  }
};
function ui(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function $e(t, e, n, i, r, a, o, s) {
  var l, c = t[k], f = c.options.onMove, d;
  return window.CustomEvent && !Z && !ke ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = i, l.related = r || e, l.relatedRect = a || _(e), l.willInsertAfter = s, l.originalEvent = o, t.dispatchEvent(l), f && (d = f.call(c, l, o)), d;
}
function at(t) {
  t.draggable = !1;
}
function fi() {
  ut = !1;
}
function hi(t, e, n) {
  var i = _(ye(n.el, 0, n.options, !0)), r = gn(n.el, n.options, g), a = 10;
  return e ? t.clientX < r.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < r.top - a || t.clientY < i.bottom && t.clientX < i.left;
}
function pi(t, e, n) {
  var i = _(Et(n.el, n.options.draggable)), r = gn(n.el, n.options, g), a = 10;
  return e ? t.clientX > r.right + a || t.clientY > i.bottom && t.clientX > i.left : t.clientY > r.bottom + a || t.clientX > i.right && t.clientY > i.top;
}
function gi(t, e, n, i, r, a, o, s) {
  var l = i ? t.clientY : t.clientX, c = i ? n.height : n.width, f = i ? n.top : n.left, d = i ? n.bottom : n.right, m = !1;
  if (!o) {
    if (s && Ye < c * r) {
      if (!Le && (Oe === 1 ? l > f + c * a / 2 : l < d - c * a / 2) && (Le = !0), Le)
        m = !0;
      else if (Oe === 1 ? l < f + Ye : l > d - Ye)
        return -Oe;
    } else if (l > f + c * (1 - r) / 2 && l < d - c * (1 - r) / 2)
      return mi(e);
  }
  return m = m || o, m && (l < f + c * a / 2 || l > d - c * a / 2) ? l > f + c / 2 ? 1 : -1 : 0;
}
function mi(t) {
  return H(u) < H(t) ? 1 : -1;
}
function bi(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--; )
    i += e.charCodeAt(n);
  return i.toString(36);
}
function vi(t) {
  Ve.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var i = e[n];
    i.checked && Ve.push(i);
  }
}
function Ge(t) {
  return setTimeout(t, 0);
}
function ft(t) {
  return clearTimeout(t);
}
Qe && I(document, "touchmove", function(t) {
  (p.active || ge) && t.cancelable && t.preventDefault();
});
p.utils = {
  on: I,
  off: S,
  css: h,
  find: un,
  is: function(e, n) {
    return !!X(e, n, e, !1);
  },
  extend: ei,
  throttle: fn,
  closest: X,
  toggleClass: R,
  clone: pn,
  index: H,
  nextTick: Ge,
  cancelNextTick: ft,
  detectDirection: bn,
  getChild: ye,
  expando: k
};
p.get = function(t) {
  return t[k];
};
p.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (p.utils = U(U({}, p.utils), i.utils)), Me.mount(i);
  });
};
p.create = function(t, e) {
  return new p(t, e);
};
p.version = Qn;
var T = [], xe, ht, pt = !1, ot, st, Ze, Te;
function yi() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var i = n.originalEvent;
      this.sortable.nativeDraggable ? I(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? I(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? I(document, "touchmove", this._handleFallbackAutoScroll) : I(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var i = n.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : (S(document, "pointermove", this._handleFallbackAutoScroll), S(document, "touchmove", this._handleFallbackAutoScroll), S(document, "mousemove", this._handleFallbackAutoScroll)), kt(), Ue(), ti();
    },
    nulling: function() {
      Ze = ht = xe = pt = Te = ot = st = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, i) {
      var r = this, a = (n.touches ? n.touches[0] : n).clientX, o = (n.touches ? n.touches[0] : n).clientY, s = document.elementFromPoint(a, o);
      if (Ze = n, i || this.options.forceAutoScrollFallback || ke || Z || _e) {
        lt(n, this.options, s, i);
        var l = ie(s, !0);
        pt && (!Te || a !== ot || o !== st) && (Te && kt(), Te = setInterval(function() {
          var c = ie(document.elementFromPoint(a, o), !0);
          c !== l && (l = c, Ue()), lt(n, r.options, c, i);
        }, 10), ot = a, st = o);
      } else {
        if (!this.options.bubbleScroll || ie(s, !0) === G()) {
          Ue();
          return;
        }
        lt(n, this.options, ie(s, !1), !1);
      }
    }
  }, V(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ue() {
  T.forEach(function(t) {
    clearInterval(t.pid);
  }), T = [];
}
function kt() {
  clearInterval(Te);
}
var lt = fn(function(t, e, n, i) {
  if (e.scroll) {
    var r = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY, o = e.scrollSensitivity, s = e.scrollSpeed, l = G(), c = !1, f;
    ht !== n && (ht = n, Ue(), xe = e.scroll, f = e.scrollFn, xe === !0 && (xe = ie(n, !0)));
    var d = 0, m = xe;
    do {
      var y = m, E = _(y), b = E.top, $ = E.bottom, W = E.left, O = E.right, B = E.width, M = E.height, re = void 0, Y = void 0, ae = y.scrollWidth, Ee = y.scrollHeight, N = h(y), Se = y.scrollLeft, Q = y.scrollTop;
      y === l ? (re = B < ae && (N.overflowX === "auto" || N.overflowX === "scroll" || N.overflowX === "visible"), Y = M < Ee && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflowY === "visible")) : (re = B < ae && (N.overflowX === "auto" || N.overflowX === "scroll"), Y = M < Ee && (N.overflowY === "auto" || N.overflowY === "scroll"));
      var Ie = re && (Math.abs(O - r) <= o && Se + B < ae) - (Math.abs(W - r) <= o && !!Se), K = Y && (Math.abs($ - a) <= o && Q + M < Ee) - (Math.abs(b - a) <= o && !!Q);
      if (!T[d])
        for (var oe = 0; oe <= d; oe++)
          T[oe] || (T[oe] = {});
      (T[d].vx != Ie || T[d].vy != K || T[d].el !== y) && (T[d].el = y, T[d].vx = Ie, T[d].vy = K, clearInterval(T[d].pid), (Ie != 0 || K != 0) && (c = !0, T[d].pid = setInterval(function() {
        i && this.layer === 0 && p.active._onTouchMove(Ze);
        var Ce = T[this.layer].vy ? T[this.layer].vy * s : 0, J = T[this.layer].vx ? T[this.layer].vx * s : 0;
        typeof f == "function" && f.call(p.dragged.parentNode[k], J, Ce, t, Ze, T[this.layer].el) !== "continue" || hn(T[this.layer].el, J, Ce);
      }.bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && m !== l && (m = ie(m, !1)));
    pt = c;
  }
}, 30), Sn = function(e) {
  var n = e.originalEvent, i = e.putSortable, r = e.dragEl, a = e.activeSortable, o = e.dispatchSortableEvent, s = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (n) {
    var c = i || a;
    s();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(f.clientX, f.clientY);
    l(), c && !c.el.contains(d) && (o("spill"), this.onSpill({
      dragEl: r,
      putSortable: i
    }));
  }
};
function St() {
}
St.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, i = e.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var r = ye(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: Sn
};
V(St, {
  pluginName: "revertOnSpill"
});
function It() {
}
It.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, i = e.putSortable, r = i || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: Sn
};
V(It, {
  pluginName: "removeOnSpill"
});
p.mount(new yi());
p.mount(It, St);
const Je = /* @__PURE__ */ new Set(), Ei = {
  ghostClass: "calcite-sortable--ghost",
  chosenClass: "calcite-sortable--chosen",
  dragClass: "calcite-sortable--drag",
  fallbackClass: "calcite-sortable--fallback"
};
function Si(t) {
  if (Cn(t))
    return;
  In(t), Je.add(t);
  const e = "id", { group: n, handleSelector: i, dragSelector: r } = t;
  t.sortable = p.create(t.el, {
    dataIdAttr: e,
    ...Ei,
    ...!!r && { draggable: r },
    ...!!n && {
      group: {
        name: n,
        ...!!t.canPull && {
          pull: (a, o, s, { newIndex: l, oldIndex: c }) => t.canPull({ toEl: a.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        },
        ...!!t.canPut && {
          put: (a, o, s, { newIndex: l, oldIndex: c }) => t.canPut({ toEl: a.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        }
      }
    },
    handle: i,
    filter: `${i}[disabled]`,
    onStart: ({ from: a, item: o, to: s, newIndex: l, oldIndex: c }) => {
      gt.active = !0, Ii(), t.onDragStart({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onEnd: ({ from: a, item: o, to: s, newIndex: l, oldIndex: c }) => {
      gt.active = !1, Ci(), t.onDragEnd({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onSort: ({ from: a, item: o, to: s, newIndex: l, oldIndex: c }) => {
      t.onDragSort({ fromEl: a, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    }
  });
}
function In(t) {
  Cn(t) || (Je.delete(t), t.sortable?.destroy(), t.sortable = null);
}
const gt = { active: !1 };
function Cn(t) {
  return t.dragEnabled && gt.active;
}
function Ii() {
  Array.from(Je).forEach((t) => t.onGlobalDragStart());
}
function Ci() {
  Array.from(Je).forEach((t) => t.onGlobalDragEnd());
}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const pe = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, be = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, wi = ":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}", Di = wi, xi = /* @__PURE__ */ mt(class extends bt {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.handleActionsStartSlotChange = (e) => {
      this.hasActionsStart = ue(e);
    }, this.handleActionsEndSlotChange = (e) => {
      this.hasActionsEnd = ue(e);
    }, this.handleContentStartSlotChange = (e) => {
      this.hasContentStart = ue(e);
    }, this.handleContentEndSlotChange = (e) => {
      this.hasContentEnd = ue(e);
    }, this.disabled = !1, this.hasActionsStart = !1, this.hasActionsEnd = !1, this.hasContentStart = !1, this.hasContentEnd = !1;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { hasActionsStart: e } = this;
    return v("div", { class: pe.actionsStart, hidden: !e, key: "actions-start-container" }, v("slot", { name: be.actionsStart, onSlotchange: this.handleActionsStartSlotChange }));
  }
  renderActionsEnd() {
    const { hasActionsEnd: e } = this;
    return v("div", { class: pe.actionsEnd, hidden: !e, key: "actions-end-container" }, v("slot", { name: be.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }));
  }
  renderContentStart() {
    const { hasContentStart: e } = this;
    return v("div", { class: pe.contentStart, hidden: !e }, v("slot", { name: be.contentStart, onSlotchange: this.handleContentStartSlotChange }));
  }
  renderDefaultContent() {
    return v("div", { class: pe.content }, v("slot", null));
  }
  renderContentEnd() {
    const { hasContentEnd: e } = this;
    return v("div", { class: pe.contentEnd, hidden: !e }, v("slot", { name: be.contentEnd, onSlotchange: this.handleContentEndSlotChange }));
  }
  render() {
    return v(Rn, { key: "97f052828720d715fd3b11a4b0e77fa085127796" }, v("div", { key: "5351cc20a8a437763894fef35ecc7a7240cb7c46", class: pe.container }, this.renderActionsStart(), this.renderContentStart(), this.renderDefaultContent(), this.renderContentEnd(), this.renderActionsEnd()));
  }
  static get style() {
    return Di;
  }
}, [1, "calcite-stack", {
  disabled: [516],
  hasActionsStart: [32],
  hasActionsEnd: [32],
  hasContentStart: [32],
  hasContentEnd: [32]
}]);
function wn() {
  if (typeof customElements > "u")
    return;
  ["calcite-stack"].forEach((e) => {
    switch (e) {
      case "calcite-stack":
        customElements.get(e) || customElements.define(e, xi);
        break;
    }
  });
}
wn();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function Ti(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var _i = Array.isArray;
const Dn = _i;
var Ai = 1 / 0, Mt = Dt ? Dt.prototype : void 0, Nt = Mt ? Mt.toString : void 0;
function xn(t) {
  if (typeof t == "string")
    return t;
  if (Dn(t))
    return Ti(t, xn) + "";
  if (Un(t))
    return Nt ? Nt.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Ai ? "-0" : e;
}
function Fi(t) {
  return t;
}
var Oi = "[object AsyncFunction]", Li = "[object Function]", Pi = "[object GeneratorFunction]", ki = "[object Proxy]";
function Mi(t) {
  if (!en(t))
    return !1;
  var e = yt(t);
  return e == Li || e == Pi || e == Oi || e == ki;
}
var Ni = 9007199254740991, Ri = /^(?:0|[1-9]\d*)$/;
function ji(t, e) {
  var n = typeof t;
  return e = e ?? Ni, !!e && (n == "number" || n != "symbol" && Ri.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var Hi = 9007199254740991;
function Tn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Hi;
}
function $i(t) {
  return t != null && Tn(t.length) && !Mi(t);
}
var Bi = Object.prototype;
function zi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Bi;
  return t === n;
}
function Xi(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var Yi = "[object Arguments]";
function Rt(t) {
  return vt(t) && yt(t) == Yi;
}
var _n = Object.prototype, Gi = _n.hasOwnProperty, Ui = _n.propertyIsEnumerable, Wi = Rt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Rt : function(t) {
  return vt(t) && Gi.call(t, "callee") && !Ui.call(t, "callee");
};
const Ki = Wi;
function qi() {
  return !1;
}
var An = typeof exports == "object" && exports && !exports.nodeType && exports, jt = An && typeof module == "object" && module && !module.nodeType && module, Vi = jt && jt.exports === An, Ht = Vi ? Yn.Buffer : void 0, Zi = Ht ? Ht.isBuffer : void 0, Qi = Zi || qi;
const Ji = Qi;
var er = "[object Arguments]", tr = "[object Array]", nr = "[object Boolean]", ir = "[object Date]", rr = "[object Error]", ar = "[object Function]", or = "[object Map]", sr = "[object Number]", lr = "[object Object]", cr = "[object RegExp]", dr = "[object Set]", ur = "[object String]", fr = "[object WeakMap]", hr = "[object ArrayBuffer]", pr = "[object DataView]", gr = "[object Float32Array]", mr = "[object Float64Array]", br = "[object Int8Array]", vr = "[object Int16Array]", yr = "[object Int32Array]", Er = "[object Uint8Array]", Sr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Cr = "[object Uint32Array]", C = {};
C[gr] = C[mr] = C[br] = C[vr] = C[yr] = C[Er] = C[Sr] = C[Ir] = C[Cr] = !0;
C[er] = C[tr] = C[hr] = C[nr] = C[pr] = C[ir] = C[rr] = C[ar] = C[or] = C[sr] = C[lr] = C[cr] = C[dr] = C[ur] = C[fr] = !1;
function wr(t) {
  return vt(t) && Tn(t.length) && !!C[yt(t)];
}
function Dr(t) {
  return function(e) {
    return t(e);
  };
}
var Fn = typeof exports == "object" && exports && !exports.nodeType && exports, Pe = Fn && typeof module == "object" && module && !module.nodeType && module, xr = Pe && Pe.exports === Fn, ct = xr && Gn.process, Tr = function() {
  try {
    var t = Pe && Pe.require && Pe.require("util").types;
    return t || ct && ct.binding && ct.binding("util");
  } catch {
  }
}();
const $t = Tr;
var Bt = $t && $t.isTypedArray, _r = Bt ? Dr(Bt) : wr;
const Ar = _r;
function Fr(t, e) {
  var n = Dn(t), i = !n && Ki(t), r = !n && !i && Ji(t), a = !n && !i && !r && Ar(t), o = n || i || r || a, s = o ? Xi(t.length, String) : [], l = s.length;
  for (var c in t)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ji(c, l)) || s.push(c);
  return s;
}
function Or(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Lr = Object.prototype, Pr = Lr.hasOwnProperty;
function kr(t) {
  if (!en(t))
    return Or(t);
  var e = zi(t), n = [];
  for (var i in t)
    i == "constructor" && (e || !Pr.call(t, i)) || n.push(i);
  return n;
}
function Mr(t) {
  return $i(t) ? Fr(t) : kr(t);
}
function Nr(t) {
  return t == null ? "" : xn(t);
}
function Rr(t) {
  return function(e, n, i) {
    for (var r = -1, a = Object(e), o = i(e), s = o.length; s--; ) {
      var l = o[++r];
      if (n(a[l], l, a) === !1)
        break;
    }
    return e;
  };
}
var jr = Rr();
const Hr = jr;
function $r(t) {
  return typeof t == "function" ? t : Fi;
}
var On = /[\\^$.*+?()[\]{}|]/g, Br = RegExp(On.source);
function zr(t) {
  return t = Nr(t), t && Br.test(t) ? t.replace(On, "\\$&") : t;
}
function Xr(t, e) {
  return t == null ? t : Hr(t, $r(e), Mr);
}
const zt = (t, e, n) => {
  const i = zr(e), r = new RegExp(i, "i");
  t.length === 0 && console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  const a = (o, s, l) => {
    if (o?.constant || o?.filterDisabled)
      return !0;
    let c = !1;
    return Xr(o, (f, d) => {
      typeof f == "function" || f == null || l && !l.includes(d) || (Array.isArray(f) || typeof f == "object" && f !== null ? a(f, s) && (c = !0) : s.test(f) && (c = !0));
    }), c;
  };
  return t.filter((o) => a(o, r, n));
};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const Yr = {
  container: "container",
  searchIcon: "search-icon"
}, Gr = {
  search: "search",
  close: "x"
}, Ur = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}", Wr = Ur, Kr = /* @__PURE__ */ mt(class extends bt {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFilterChange = ce(this, "calciteFilterChange", 6), this.filterDebounced = tn((e, n = !1, i) => this.updateFiltered(zt(this.items ?? [], e, this.filterProps), n, i), jn.filter), this.inputHandler = (e) => {
      const n = e.target;
      this.value = n.value, this.filterDebounced(n.value, !0);
    }, this.keyDownHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" && (this.clear(), e.preventDefault()), e.key === "Enter" && e.preventDefault());
    }, this.clear = () => {
      this.value = "", this.filterDebounced("", !0), this.setFocus();
    }, this.items = [], this.disabled = !1, this.filteredItems = [], this.filterProps = void 0, this.placeholder = void 0, this.scale = "m", this.value = "", this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  watchItemsHandler() {
    this.filterDebounced(this.value);
  }
  filterPropsHandler() {
    this.filterDebounced(this.value);
  }
  onMessagesChange() {
  }
  valueHandler(e) {
    this.filterDebounced(e);
  }
  effectiveLocaleChange() {
    Kt(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    Gt(this), this.updateFiltered(zt(this.items ?? [], this.value, this.filterProps)), await qt(this);
  }
  connectedCallback() {
    Qt(this), Vt(this);
  }
  componentDidRender() {
    Xt(this);
  }
  disconnectedCallback() {
    Jt(this), Zt(this), this.filterDebounced.cancel();
  }
  componentDidLoad() {
    Ut(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(e = this.value) {
    return new Promise((n) => {
      this.value = e, this.filterDebounced(e, !1, n);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    return await Wt(this), this.textInput?.setFocus();
  }
  updateFiltered(e, n = !1, i) {
    this.filteredItems = e, n && this.calciteFilterChange.emit(), i?.();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled: e, scale: n } = this;
    return v(Yt, { key: "c4a624e52409ed90839b506f5d99ab623767260e", disabled: e }, v("div", { key: "1f2ef99156489719dd2f938bc5ce8a05185866bf", class: Yr.container }, v("label", { key: "6fe8c6cf73f554908be38299263d23380a4ed089" }, v("calcite-input", { key: "6765e00d208d6898221540769865d84aa1c64974", clearable: !0, disabled: e, icon: Gr.search, label: this.messages.label, messageOverrides: { clear: this.messages.clear }, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (i) => {
      this.textInput = i;
    }, scale: n, type: "text", value: this.value }))));
  }
  static get delegatesFocus() {
    return !0;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      items: ["watchItemsHandler"],
      filterProps: ["filterPropsHandler"],
      messageOverrides: ["onMessagesChange"],
      value: ["valueHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Wr;
  }
}, [17, "calcite-filter", {
  items: [16],
  disabled: [516],
  filteredItems: [1040],
  filterProps: [16],
  placeholder: [1],
  scale: [513],
  value: [1025],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  filter: [64],
  setFocus: [64]
}, void 0, {
  items: ["watchItemsHandler"],
  filterProps: ["filterPropsHandler"],
  messageOverrides: ["onMessagesChange"],
  value: ["valueHandler"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function Ln() {
  if (typeof customElements > "u")
    return;
  ["calcite-filter", "calcite-icon", "calcite-input", "calcite-input-message", "calcite-progress"].forEach((e) => {
    switch (e) {
      case "calcite-filter":
        customElements.get(e) || customElements.define(e, Kr);
        break;
      case "calcite-icon":
        customElements.get(e) || nn();
        break;
      case "calcite-input":
        customElements.get(e) || on();
        break;
      case "calcite-input-message":
        customElements.get(e) || an();
        break;
      case "calcite-progress":
        customElements.get(e) || rn();
        break;
    }
  });
}
Ln();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const ee = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text"
}, qr = 0, dt = {
  filterNoResults: "filter-no-results",
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end"
}, Vr = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-color-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}", Zr = Vr, Be = "calcite-list-item", Qr = "calcite-list-item-group, calcite-list-item", Pn = /* @__PURE__ */ mt(class extends bt {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteListChange = ce(this, "calciteListChange", 6), this.calciteListDragEnd = ce(this, "calciteListDragEnd", 6), this.calciteListDragStart = ce(this, "calciteListDragStart", 6), this.calciteListFilter = ce(this, "calciteListFilter", 6), this.calciteListOrderChange = ce(this, "calciteListOrderChange", 6), this.calciteInternalListDefaultSlotChange = ce(this, "calciteInternalListDefaultSlotChange", 6), this.dragSelector = Be, this.focusableItems = [], this.handleSelector = "calcite-handle", this.listItems = [], this.mutationObserver = $n("mutation", () => this.updateListItems({ performFilter: !0 })), this.visibleItems = [], this.handleDefaultSlotChange = (e) => {
      zn(Xn(e.target)), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
    }, this.handleFilterActionsStartSlotChange = (e) => {
      this.hasFilterActionsStart = ue(e);
    }, this.handleFilterActionsEndSlotChange = (e) => {
      this.hasFilterActionsEnd = ue(e);
    }, this.handleFilterNoResultsSlotChange = (e) => {
      this.hasFilterNoResults = ue(e);
    }, this.setActiveListItem = () => {
      const { focusableItems: e } = this;
      e.some((n) => n.active) || e[0] && (e[0].active = !0);
    }, this.updateSelectedItems = (e = !1) => {
      this.selectedItems = this.visibleItems.filter((n) => n.selected), e && this.calciteListChange.emit();
    }, this.borderItems = () => {
      const e = this.visibleItems.filter((n) => !n.filterHidden && this.allParentListItemsOpen(n));
      e.forEach((n) => n.bordered = n !== e[e.length - 1]);
    }, this.updateFilteredItems = (e = !1) => {
      const { visibleItems: n, filteredData: i, filterText: r } = this, a = i.map((c) => c.value), o = n?.filter((c) => n.every((f) => f === c || !c.contains(f))), s = n.filter((c) => !r || a.includes(c.value)) || [], l = /* @__PURE__ */ new WeakSet();
      o.forEach((c) => this.filterElements({ el: c, filteredItems: s, visibleParents: l })), this.filteredItems = s, e && this.calciteListFilter.emit();
    }, this.setFilterEl = (e) => {
      this.filterEl = e, this.performFilter();
    }, this.handleFilterChange = (e) => {
      e.stopPropagation();
      const { value: n } = e.currentTarget;
      this.filterText = n, this.updateFilteredData(!0);
    }, this.getItemData = () => this.listItems.map((e) => ({
      label: e.label,
      description: e.description,
      metadata: e.metadata,
      value: e.value
    })), this.updateListItems = tn((e) => {
      const n = e?.emitFilterChange ?? !1, i = e?.performFilter ?? !1, { selectionAppearance: r, selectionMode: a, dragEnabled: o, el: s, filterEl: l, filterEnabled: c } = this, f = Array.from(this.el.querySelectorAll(Be));
      if (f.forEach((d) => {
        d.selectionAppearance = r, d.selectionMode = a, d.closest("calcite-list") === s && (d.dragHandle = o);
      }), this.parentListEl) {
        this.setUpSorting();
        return;
      }
      this.listItems = f, c && i && (this.dataForFilter = this.getItemData(), l && (l.items = this.dataForFilter, this.filterAndUpdateData())), this.visibleItems = this.listItems.filter((d) => !d.closed && !d.hidden), this.updateFilteredItems(n), this.borderItems(), this.focusableItems = this.filteredItems.filter((d) => !d.disabled), this.setActiveListItem(), this.updateSelectedItems(), this.setUpSorting();
    }, qr), this.focusRow = (e) => {
      const { focusableItems: n } = this;
      e && (n.forEach((i) => i.active = i === e), e.setFocus());
    }, this.isNavigable = (e) => {
      const n = e.parentElement?.closest(Be);
      return n ? n.open && this.isNavigable(n) : !0;
    }, this.handleListKeydown = (e) => {
      if (e.defaultPrevented || this.parentListEl)
        return;
      const { key: n } = e, i = this.focusableItems.filter((a) => this.isNavigable(a)), r = i.findIndex((a) => a.active);
      if (n === "ArrowDown") {
        e.preventDefault();
        const a = e.target === this.filterEl ? 0 : r + 1;
        i[a] && this.focusRow(i[a]);
      } else if (n === "ArrowUp") {
        if (e.preventDefault(), r === 0 && this.filterEnabled) {
          this.filterEl?.setFocus();
          return;
        }
        const a = r - 1;
        i[a] && this.focusRow(i[a]);
      } else if (n === "Home") {
        e.preventDefault();
        const a = i[0];
        a && this.focusRow(a);
      } else if (n === "End") {
        e.preventDefault();
        const a = i[i.length - 1];
        a && this.focusRow(a);
      }
    }, this.disabled = !1, this.canPull = void 0, this.canPut = void 0, this.dragEnabled = !1, this.group = void 0, this.filterEnabled = !1, this.filteredItems = [], this.filteredData = [], this.filterPlaceholder = void 0, this.filterText = void 0, this.label = void 0, this.loading = !1, this.filterProps = void 0, this.messageOverrides = void 0, this.messages = void 0, this.numberingSystem = void 0, this.openable = !1, this.selectedItems = [], this.selectionMode = "none", this.selectionAppearance = "icon", this.effectiveLocale = "", this.defaultMessages = void 0, this.assistiveText = void 0, this.dataForFilter = [], this.hasFilterActionsEnd = !1, this.hasFilterActionsStart = !1, this.hasFilterNoResults = !1;
  }
  async handleFilterTextChange() {
    this.performFilter();
  }
  async handleFilterPropsChange() {
    this.performFilter();
  }
  onMessagesChange() {
  }
  handleListItemChange() {
    this.updateListItems({ performFilter: !0 });
  }
  handleCalciteListItemToggle(e) {
    this.parentListEl || (e.stopPropagation(), this.borderItems());
  }
  handleCalciteInternalFocusPreviousItem(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const { focusableItems: n } = this, r = n.findIndex((a) => a.active) - 1;
    n[r] && this.focusRow(n[r]);
  }
  handleCalciteInternalListItemActive(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const n = e.target, { listItems: i } = this;
    i.forEach((r) => {
      r.active = r === n;
    });
  }
  handleCalciteListItemSelect() {
    this.parentListEl || this.updateSelectedItems(!0);
  }
  handleCalciteInternalAssistiveTextChange(e) {
    this.assistiveText = e.detail.message, e.stopPropagation();
  }
  handleCalciteHandleNudge(e) {
    this.parentListEl || this.handleNudgeEvent(e);
  }
  handleCalciteInternalListItemSelect(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const n = e.target, { listItems: i, selectionMode: r } = this;
    n.selected && (r === "single" || r === "single-persist") && i.forEach((a) => a.selected = a === n), this.updateSelectedItems();
  }
  handleCalciteInternalListItemSelectMultiple(e) {
    if (this.parentListEl)
      return;
    e.stopPropagation();
    const { target: n, detail: i } = e, { focusableItems: r, lastSelectedInfo: a } = this, o = n;
    if (i.selectMultiple && a) {
      const s = r.indexOf(o), l = r.indexOf(a.selectedItem), c = Math.min(l, s), f = Math.max(l, s);
      r.slice(c, f + 1).forEach((d) => d.selected = a.selected);
    } else
      this.lastSelectedInfo = { selectedItem: o, selected: o.selected };
  }
  handleCalciteInternalListItemChange(e) {
    this.parentListEl || (e.stopPropagation(), this.updateListItems());
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(e) {
    e.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    Qt(this), Vt(this), this.connectObserver(), this.updateListItems({ performFilter: !0 }), this.setUpSorting(), this.setParentList();
  }
  async componentWillLoad() {
    Gt(this), await qt(this);
  }
  componentDidRender() {
    Xt(this);
  }
  componentDidLoad() {
    Ut(this);
  }
  disconnectedCallback() {
    this.disconnectObserver(), In(this), Jt(this), Zt(this);
  }
  effectiveLocaleChange() {
    Kt(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    return await Wt(this), this.filterEnabled ? this.filterEl?.setFocus() : this.focusableItems.find((e) => e.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading: e, label: n, disabled: i, dataForFilter: r, filterEnabled: a, filterPlaceholder: o, filterText: s, filteredItems: l, hasFilterActionsStart: c, hasFilterActionsEnd: f, hasFilterNoResults: d, filterProps: m } = this;
    return v(Yt, { key: "c3139afe4fe7c7462578a51a4578971c97473167", disabled: this.disabled }, v("div", { key: "5e99dc8b479c35609c5f0318723b3da84ec23ef4", class: ee.container }, this.dragEnabled ? v("span", { "aria-live": "assertive", class: ee.assistiveText }, this.assistiveText) : null, this.renderItemAriaLive(), e ? v("calcite-scrim", { class: ee.scrim, loading: e }) : null, v("table", { key: "a31ba050d3141351e491141365e8244ed3ca5303", "aria-busy": Hn(e), "aria-label": n || "", class: ee.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, a || c || f ? v("thead", { class: ee.sticky }, v("tr", null, v("th", { colSpan: Bn }, v("calcite-stack", { class: ee.stack }, v("slot", { name: dt.filterActionsStart, onSlotchange: this.handleFilterActionsStartSlotChange, slot: be.actionsStart }), v("calcite-filter", { "aria-label": o, disabled: i, filterProps: m, items: r, onCalciteFilterChange: this.handleFilterChange, placeholder: o, ref: this.setFilterEl, value: s }), v("slot", { name: dt.filterActionsEnd, onSlotchange: this.handleFilterActionsEndSlotChange, slot: be.actionsEnd }))))) : null, v("tbody", { key: "3ed1b8d9a4387c3ea0f4ff38e5388be35b32d89b", class: ee.tableContainer }, v("slot", { key: "712562533b4609749cbff0968bd0a9e77d99758e", onSlotchange: this.handleDefaultSlotChange }))), v("div", { key: "3ff977013e0ca0d58229e1305dca702000d91a99", "aria-live": "polite", "data-test-id": "no-results-container", hidden: !(d && a && s && !l.length) }, v("slot", { key: "7c2bf6389c8b5f4b6f617950e4068baf6b1dc358", name: dt.filterNoResults, onSlotchange: this.handleFilterNoResultsSlotChange }))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  renderItemAriaLive() {
    const { messages: e, filteredItems: n, parentListEl: i, effectiveLocale: r, numberingSystem: a, filterEnabled: o, filterText: s, filteredData: l } = this;
    return wt.numberFormatOptions = {
      locale: r,
      numberingSystem: a
    }, i ? null : v("div", { "aria-live": "polite", class: ee.assistiveText }, o && s && l?.length ? v("div", { key: "aria-filter-enabled" }, e.filterEnabled) : null, v("div", { key: "aria-item-count" }, e.total.replace("{count}", wt.localize(n.length.toString()))), n.length ? v("ol", { key: "aria-item-list" }, n.map((c) => v("li", null, c.label))) : null);
  }
  connectObserver() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  disconnectObserver() {
    this.mutationObserver?.disconnect();
  }
  setUpSorting() {
    const { dragEnabled: e } = this;
    e && Si(this);
  }
  onGlobalDragStart() {
    this.disconnectObserver();
  }
  onGlobalDragEnd() {
    this.connectObserver();
  }
  onDragEnd(e) {
    this.calciteListDragEnd.emit(e);
  }
  onDragStart(e) {
    this.calciteListDragStart.emit(e);
  }
  onDragSort(e) {
    this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(e);
  }
  setParentList() {
    this.parentListEl = this.el.parentElement?.closest("calcite-list");
  }
  filterElements({ el: e, filteredItems: n, visibleParents: i }) {
    const r = !i.has(e) && !n.includes(e);
    e.filterHidden = r;
    const a = e.parentElement.closest(Qr);
    a && (r || i.add(a), this.filterElements({
      el: a,
      filteredItems: n,
      visibleParents: i
    }));
  }
  allParentListItemsOpen(e) {
    const n = e.parentElement?.closest(Be);
    if (n) {
      if (!n.open)
        return !1;
    } else return !0;
    return this.allParentListItemsOpen(n);
  }
  updateFilteredData(e = !1) {
    const { filterEl: n } = this;
    n && (n.filteredItems && (this.filteredData = n.filteredItems), this.updateListItems({ emitFilterChange: e }));
  }
  async filterAndUpdateData() {
    await this.filterEl?.filter(this.filterText), this.updateFilteredData();
  }
  performFilter() {
    const { filterEl: e, filterText: n, filterProps: i } = this;
    e && (e.value = n, e.filterProps = i, this.filterAndUpdateData());
  }
  handleNudgeEvent(e) {
    const { handleSelector: n, dragSelector: i } = this, { direction: r } = e.detail, a = e.composedPath(), o = a.find((b) => b?.tagName && b.matches(n)), s = a.find((b) => b?.tagName && b.matches(i)), l = s?.parentElement;
    if (!l)
      return;
    const { filteredItems: c } = this, f = c.filter((b) => b.parentElement === l), d = f.length - 1, m = f.indexOf(s);
    let y;
    r === "up" ? y = m === 0 ? d : m - 1 : y = m === d ? 0 : m + 1, this.disconnectObserver(), o.blurUnselectDisabled = !0;
    const E = r === "up" && y !== d || r === "down" && y === 0 ? f[y] : f[y].nextSibling;
    l.insertBefore(s, E), this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: s,
      fromEl: l,
      toEl: l,
      newIndex: y,
      oldIndex: m
    }), o.setFocus().then(() => o.blurUnselectDisabled = !1);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      filterText: ["handleFilterTextChange"],
      filterProps: ["handleFilterPropsChange"],
      messageOverrides: ["onMessagesChange"],
      filterEnabled: ["handleListItemChange"],
      group: ["handleListItemChange"],
      dragEnabled: ["handleListItemChange"],
      selectionMode: ["handleListItemChange"],
      selectionAppearance: ["handleListItemChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Zr;
  }
}, [1, "calcite-list", {
  disabled: [516],
  canPull: [16],
  canPut: [16],
  dragEnabled: [516, "drag-enabled"],
  group: [513],
  filterEnabled: [516, "filter-enabled"],
  filteredItems: [1040],
  filteredData: [1040],
  filterPlaceholder: [513, "filter-placeholder"],
  filterText: [1537, "filter-text"],
  label: [1],
  loading: [516],
  filterProps: [16],
  messageOverrides: [1040],
  messages: [1040],
  numberingSystem: [1, "numbering-system"],
  openable: [4],
  selectedItems: [1040],
  selectionMode: [513, "selection-mode"],
  selectionAppearance: [513, "selection-appearance"],
  effectiveLocale: [32],
  defaultMessages: [32],
  assistiveText: [32],
  dataForFilter: [32],
  hasFilterActionsEnd: [32],
  hasFilterActionsStart: [32],
  hasFilterNoResults: [32],
  setFocus: [64]
}, [[0, "calciteInternalListItemToggle", "handleCalciteListItemToggle"], [0, "calciteInternalFocusPreviousItem", "handleCalciteInternalFocusPreviousItem"], [0, "calciteInternalListItemActive", "handleCalciteInternalListItemActive"], [0, "calciteListItemSelect", "handleCalciteListItemSelect"], [0, "calciteInternalAssistiveTextChange", "handleCalciteInternalAssistiveTextChange"], [0, "calciteHandleNudge", "handleCalciteHandleNudge"], [0, "calciteInternalListItemSelect", "handleCalciteInternalListItemSelect"], [0, "calciteInternalListItemSelectMultiple", "handleCalciteInternalListItemSelectMultiple"], [0, "calciteInternalListItemChange", "handleCalciteInternalListItemChange"], [0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListItemGroupDefaultSlotChange"]], {
  filterText: ["handleFilterTextChange"],
  filterProps: ["handleFilterPropsChange"],
  messageOverrides: ["onMessagesChange"],
  filterEnabled: ["handleListItemChange"],
  group: ["handleListItemChange"],
  dragEnabled: ["handleListItemChange"],
  selectionMode: ["handleListItemChange"],
  selectionAppearance: ["handleListItemChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function kn() {
  if (typeof customElements > "u")
    return;
  ["calcite-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-input-message", "calcite-loader", "calcite-progress", "calcite-scrim", "calcite-stack"].forEach((e) => {
    switch (e) {
      case "calcite-list":
        customElements.get(e) || customElements.define(e, Pn);
        break;
      case "calcite-filter":
        customElements.get(e) || Ln();
        break;
      case "calcite-icon":
        customElements.get(e) || nn();
        break;
      case "calcite-input":
        customElements.get(e) || on();
        break;
      case "calcite-input-message":
        customElements.get(e) || an();
        break;
      case "calcite-loader":
        customElements.get(e) || Wn();
        break;
      case "calcite-progress":
        customElements.get(e) || rn();
        break;
      case "calcite-scrim":
        customElements.get(e) || Kn();
        break;
      case "calcite-stack":
        customElements.get(e) || wn();
        break;
    }
  });
}
kn();
const ba = Pn, va = kn;
export {
  ba as CalciteList,
  va as defineCustomElement
};
//# sourceMappingURL=calcite-list-CZ36_jHK.js.map
