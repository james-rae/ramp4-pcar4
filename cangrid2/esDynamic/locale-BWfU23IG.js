import { m as w, c as v } from "./dom-BD6OZEvo.js";
import { c as L } from "./observers-Bi3Qhj76.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function X(t) {
  return t === "Enter" || t === " ";
}
const S = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const A = new RegExp("\\.(0+)?$"), C = new RegExp("0+$");
class i {
  constructor(e) {
    if (e instanceof i)
      return e;
    const [n, s] = z(e).split(".").concat("");
    this.value = BigInt(n + s.padEnd(i.DECIMALS, "0").slice(0, i.DECIMALS)) + BigInt(i.ROUNDED && s[i.DECIMALS] >= "5"), this.isNegative = e.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const e = this.value.toString().replace("-", "").padStart(i.DECIMALS + 1, "0"), n = e.slice(0, -i.DECIMALS), s = e.slice(-i.DECIMALS).replace(C, "");
    return { integers: n, decimals: s };
  }
  toString() {
    const { integers: e, decimals: n } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${e}${n.length ? "." + n : ""}`;
  }
  formatToParts(e) {
    const { integers: n, decimals: s } = this.getIntegersAndDecimals(), r = e.numberFormatter.formatToParts(BigInt(n));
    return this.isNegative && r.unshift({ type: "minusSign", value: e.minusSign }), s.length && (r.push({ type: "decimal", value: e.decimal }), s.split("").forEach((a) => r.push({ type: "fraction", value: a }))), r;
  }
  format(e) {
    const { integers: n, decimals: s } = this.getIntegersAndDecimals(), r = `${this.isNegative ? e.minusSign : ""}${e.numberFormatter.format(BigInt(n))}`, a = s.length ? `${e.decimal}${s.split("").map((l) => e.numberFormatter.format(Number(l))).join("")}` : "";
    return `${r}${a}`;
  }
  add(e) {
    return i.fromBigInt(this.value + new i(e).value);
  }
  subtract(e) {
    return i.fromBigInt(this.value - new i(e).value);
  }
  multiply(e) {
    return i._divRound(this.value * new i(e).value, i.SHIFT);
  }
  divide(e) {
    return i._divRound(this.value * i.SHIFT, new i(e).value);
  }
}
i.DECIMALS = 100;
i.ROUNDED = !0;
i.SHIFT = BigInt("1" + "0".repeat(i.DECIMALS));
i._divRound = (t, e) => i.fromBigInt(t / e + (i.ROUNDED ? t * BigInt(2) / e % BigInt(2) : BigInt(0)));
i.fromBigInt = (t) => Object.assign(Object.create(i.prototype), { value: t, isNegative: t < BigInt(0) });
function f(t) {
  return !(!t || isNaN(Number(t)));
}
function q(t) {
  return !t || !M(t) ? "" : h(t, (e) => {
    let n = !1;
    const s = e.split("").filter((r, a) => r.match(/\./g) && !n ? (n = !0, !0) : r.match(/-/g) && a === 0 ? !0 : S.includes(r)).join("");
    return f(s) ? new i(s).toString() : "";
  });
}
const E = /^([-0])0+(?=\d)/, D = /(?!^\.)\.$/, _ = /(?!^-)-/g, x = /^-\b0\b\.?0*$/, R = /0*$/, Q = (t) => h(t, (e) => {
  const n = e.replace(_, "").replace(D, "").replace(E, "$1");
  return f(n) ? x.test(n) ? n : T(n) : e;
});
function T(t) {
  const e = t.split(".")[1], n = new i(t).toString(), [s, r] = n.split(".");
  return e && r !== e ? `${s}.${e}` : n;
}
function h(t, e) {
  if (!t)
    return t;
  const n = t.toLowerCase().indexOf("e") + 1;
  return n ? t.replace(/[eE]*$/g, "").substring(0, n).concat(t.slice(n).replace(/[eE]/g, "")).split(/[eE]/).map((s, r) => e(r === 1 ? s.replace(/\./g, "") : s)).join("e").replace(/^e/, "1e") : e(t);
}
function z(t) {
  const e = t.split(/[eE]/);
  if (e.length === 1)
    return t;
  const n = +t;
  if (Number.isSafeInteger(n))
    return `${n}`;
  const s = t.charAt(0) === "-", r = +e[1], a = e[0].split("."), l = (s ? a[0].substring(1) : a[0]) || "", b = a[1] || "", y = (o, c) => {
    const m = Math.abs(c) - o.length, d = m > 0 ? `${"0".repeat(m)}${o}` : o;
    return `${d.slice(0, c)}.${d.slice(c)}`;
  }, O = (o, c) => {
    const m = c > o.length ? `${o}${"0".repeat(c - o.length)}` : o;
    return `${m.slice(0, c)}.${m.slice(c)}`;
  }, $ = r > 0 ? `${l}${O(b, r)}` : `${y(l, r)}${b}`;
  return `${s ? "-" : ""}${$.charAt(0) === "." ? "0" : ""}${$.replace(A, "").replace(E, "")}`;
}
function M(t) {
  return S.some((e) => t.includes(e));
}
function Y(t, e, n) {
  const s = e.split(".")[1];
  if (s) {
    const r = s.match(R)[0];
    if (r && n.delocalize(t).length !== e.length && s.indexOf("e") === -1) {
      const a = n.decimal;
      return t = t.includes(a) ? t : `${t}${a}`, t.padEnd(t.length + r.length, n.localize("0"));
    }
  }
  return t;
}
const u = "en", j = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  u,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], H = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  u,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], P = ["arab", "arabext", "latn"], I = (t) => P.includes(t), p = new Intl.NumberFormat().resolvedOptions().numberingSystem, N = p === "arab" || !I(p) ? "latn" : p, k = (t) => I(t) ? t : N;
function Z(t, e = "cldr") {
  const n = e === "cldr" ? H : j;
  return t ? n.includes(t) ? t : (t = t.toLowerCase(), t === "nb" ? "no" : e === "t9n" && t === "pt" ? "pt-BR" : (t.includes("-") && (t = t.replace(/(\w+)-(\w+)/, (s, r, a) => `${r}-${a.toUpperCase()}`), n.includes(t) || (t = t.split("-")[0])), t === "zh" ? "zh-CN" : n.includes(t) ? t : (console.warn(`Translations for the "${t}" locale are not available and will fall back to the default, English (en).`), u))) : u;
}
const g = /* @__PURE__ */ new Set();
function V(t) {
  G(t), g.size === 0 && F?.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["lang"],
    subtree: !0
  }), g.add(t);
}
function G(t) {
  t.effectiveLocale = U(t);
}
function tt(t) {
  g.delete(t), g.size === 0 && F.disconnect();
}
const F = L("mutation", (t) => {
  t.forEach((e) => {
    const n = e.target;
    g.forEach((s) => {
      if (!w(n, s.el))
        return;
      const a = v(s.el, "[lang]");
      if (!a) {
        s.effectiveLocale = u;
        return;
      }
      const l = a.lang;
      s.effectiveLocale = // user set lang="" means unknown language, so we use default
      a.hasAttribute("lang") && l === "" ? u : l;
    });
  });
});
function U(t) {
  return t.el.lang || v(t.el, "[lang]")?.lang || document.documentElement.lang || u;
}
class K {
  constructor() {
    this.delocalize = (e) => (
      // For performance, (de)localization is skipped if the formatter isn't initialized.
      // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
      // `numberFormatOptions` must be set in a component to create and cache the formatter.
      this._numberFormatOptions ? h(e, (n) => n.replace(new RegExp(`[${this._minusSign}]`, "g"), "-").replace(new RegExp(`[${this._group}]`, "g"), "").replace(new RegExp(`[${this._decimal}]`, "g"), ".").replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex)) : e
    ), this.localize = (e) => this._numberFormatOptions ? h(e, (n) => f(n.trim()) ? new i(n.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group) : n) : e;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(e) {
    if (e.locale = Z(e?.locale), e.numberingSystem = k(e?.numberingSystem), // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    !this._numberFormatOptions && e.locale === u && e.numberingSystem === N && // don't skip initialization if any options besides locale/numberingSystem are set
    Object.keys(e).length === 2 || // cache formatter by only recreating when options change
    JSON.stringify(this._numberFormatOptions) === JSON.stringify(e))
      return;
    this._numberFormatOptions = e, this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions), this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: !1,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const n = new Map(this._digits.map((r, a) => [r, a])), s = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-123456789e-1);
    this._actualGroup = s.find((r) => r.type === "group").value, this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? " " : this._actualGroup, this._decimal = s.find((r) => r.type === "decimal").value, this._minusSign = s.find((r) => r.type === "minusSign").value, this._getDigitIndex = (r) => n.get(r);
  }
}
const et = new K();
export {
  i as B,
  Y as a,
  S as b,
  V as c,
  tt as d,
  X as e,
  Z as g,
  f as i,
  et as n,
  q as p,
  Q as s
};
//# sourceMappingURL=locale-BWfU23IG.js.map