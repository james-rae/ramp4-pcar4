import { a as j, n as Q, m as Ls } from "./TimeOnly-CHaaijop.js";
import { v as ln, iE as _, iG as _s, iF as jt, lI as Yt, lJ as ct, b4 as Rs, a9 as tn, iH as Us } from "./main-DHXLMse1.js";
var d;
(function(i) {
  i.InvalidFunctionParameters = "InvalidFunctionParameters", i.InvalidValueForAggregateFunction = "InvalidValueForAggregateFunction", i.UnsupportedSqlFunction = "UnsupportedSqlFunction", i.UnsupportedOperator = "UnsupportedOperator", i.UnsupportedSyntax = "UnsupportedSyntax", i.UnsupportedIsRhs = "UnsupportedIsRhs", i.UnsupportedIsLhs = "UnsupportedIsLhs", i.InvalidDataType = "InvalidDataType", i.CannotCastValue = "CannotCastValue", i.FunctionNotRecognized = "FunctionNotRecognized", i.InvalidTime = "InvalidTime", i.InvalidParameterCount = "InvalidParameterCount", i.InvalidTimeStamp = "InvalidTimeStamp", i.InvalidDate = "InvalidDate", i.InvalidOperator = "InvalidOperator", i.IllegalInterval = "IllegalInterval", i.YearMonthIntervals = "YearMonthIntervals", i.PrimarySecondaryQualifiers = "PrimarySecondaryQualifiers", i.MissingStatisticParameters = "MissingStatisticParameters";
})(d || (d = {}));
const Vs = { [d.InvalidValueForAggregateFunction]: "Invalid value used in aggregate function", [d.MissingStatisticParameters]: "Statistic does not have 1 or 0 Parameters", [d.InvalidFunctionParameters]: "Invalid parameters for call to {function}", [d.UnsupportedIsLhs]: "Unsupported left hand expression in is statement", [d.UnsupportedIsRhs]: "Unsupported right hand expression in is statement", [d.UnsupportedOperator]: "Unsupported operator - {operator}", [d.UnsupportedSyntax]: "Unsupported syntax - {node}", [d.UnsupportedSqlFunction]: "Sql function not found = {function}", [d.InvalidDataType]: "Invalid sql data type", [d.InvalidDate]: "Invalid date encountered", [d.InvalidOperator]: "Invalid operator encountered", [d.InvalidTime]: "Invalid time encountered", [d.IllegalInterval]: "Illegal interval", [d.FunctionNotRecognized]: "Function not recognized", [d.InvalidTimeStamp]: "Invalid timestamp encountered", [d.InvalidParameterCount]: "Invalid parameter count for call to {name}", [d.PrimarySecondaryQualifiers]: "Primary and Secondary SqlInterval qualifiers not supported", [d.YearMonthIntervals]: "Year-Month Intervals not supported", [d.CannotCastValue]: "Cannot cast value to the required data type" };
let v = class cn extends Error {
  constructor(r, u) {
    super(ln(Vs[r], u)), this.declaredRootClass = "esri.arcade.featureset.support.sqlerror", Error.captureStackTrace && Error.captureStackTrace(this, cn);
  }
};
var G;
(function(i) {
  i.NeverReach = "NeverReach", i.NotImplemented = "NotImplemented", i.Cancelled = "Cancelled", i.InvalidStatResponse = "InvalidStatResponse", i.InvalidRequest = "InvalidRequest", i.RequestFailed = "RequestFailed", i.MissingFeatures = "MissingFeatures", i.AggregationFieldNotFound = "AggregationFieldNotFound", i.DataElementsNotFound = "DataElementsNotFound";
})(G || (G = {}));
const Js = { [G.Cancelled]: "Cancelled", [G.InvalidStatResponse]: "Invalid statistics response from service", [G.InvalidRequest]: "Invalid request", [G.RequestFailed]: "Request failed - {reason}", [G.MissingFeatures]: "Missing features", [G.AggregationFieldNotFound]: "Aggregation field not found", [G.DataElementsNotFound]: "Data elements not found on service", [G.NeverReach]: "Encountered unreachable logic", [G.NotImplemented]: "Not implemented" };
let hc = class fn extends Error {
  constructor(r, u) {
    super(ln(Js[r], u)), this.declaredRootClass = "esri.arcade.featureset.support.featureseterror", Error.captureStackTrace && Error.captureStackTrace(this, fn);
  }
};
function en(i) {
  return Number.isNaN(i) || i === 0 ? i : Math.trunc(i);
}
class J {
  constructor(r) {
    this._timeStampOffset = r, this._date = null;
  }
  toDateTime() {
    return this._date ??= _.fromISO(this._timeStampOffset, { setZone: !0 }), this._date;
  }
  get isValid() {
    return this.toDateTime().isValid;
  }
  get timezoneOffsetHour() {
    return en(this.toDateTime().offset / 60);
  }
  get timezoneOffsetMinutes() {
    return en(this.toDateTime().offset % 60);
  }
  toMilliseconds() {
    return this.toDateTime().toMillis();
  }
  get hour() {
    return this.toDateTime().hour;
  }
  get minute() {
    return this.toDateTime().minute;
  }
  get second() {
    return this.toDateTime().second;
  }
  get day() {
    return this.toDateTime().day;
  }
  get month() {
    return this.toDateTime().month;
  }
  get year() {
    return this.toDateTime().year;
  }
  startOfDay() {
    return J.fromDateTime(this.toDateTime().startOf("day"));
  }
  static fromJSDate(r) {
    return new J(_.fromJSDate(r).toISO({ includeOffset: !0 }));
  }
  static fromDateTime(r) {
    return new J(r.toISO({ includeOffset: !0 }));
  }
  static fromParts(r, u, c = 0, l = 0, w = 0, h = 0, e = 0, N = !1, O = 0, L = 0) {
    const Z = `${r.toString().padStart(4, "0")}-${u.toString().padStart(2, "0")}-${c.toString().padStart(2, "0")}`;
    let z = "";
    h < 10 && (z = "0");
    let x = `${l.toString().padStart(2, "0")}:${w.toString().padStart(2, "0")}:${z + h.toString()}`;
    e !== 0 && (x += "." + e.toString().padStart(3, "0"));
    const A = `${N ? "-" : "+"}${O.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}`;
    return new J(Z + "T" + x + A);
  }
  toStorageFormat() {
    return this._timeStampOffset;
  }
  toString() {
    return this._timeStampOffset;
  }
  toSQLValue() {
    let r = this.toDateTime().toSQL({ includeOffset: !0, includeOffsetSpace: !0 });
    return r && (r = r.replace(".000", "")), r;
  }
  toSQLWithKeyword() {
    return `timestamp '${this.toSQLValue()}'`;
  }
  addMilliseconds(r) {
    const u = this.toDateTime().plus(r);
    return J.fromDateTime(u);
  }
}
function Zs(i, r) {
  const u = dn[i.toLowerCase()];
  if (u == null) throw new v(d.FunctionNotRecognized);
  if (r.length < u.minParams || r.length > u.maxParams) throw new v(d.InvalidParameterCount, { name: i.toUpperCase() });
  return u.evaluate(r);
}
function nn(i, r) {
  const u = dn[i.toLowerCase()];
  return u != null && r >= u.minParams && r <= u.maxParams;
}
const dn = { min: { minParams: 1, maxParams: 1, evaluate: (i) => rn(i[0], "min") }, max: { minParams: 1, maxParams: 1, evaluate: (i) => rn(i[0], "max") }, avg: { minParams: 1, maxParams: 1, evaluate: (i) => pn(i[0]) }, sum: { minParams: 1, maxParams: 1, evaluate: (i) => zs(i[0]) }, stddev: { minParams: 1, maxParams: 1, evaluate: (i) => ks(i[0]) }, count: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : i[0].length }, var: { minParams: 1, maxParams: 1, evaluate: (i) => vn(i[0]) } };
function pn(i) {
  if (i === null) return null;
  let r = 0, u = 0;
  for (let c = 0; c < i.length; c++) {
    const l = i[c];
    if (l !== null) {
      if (!te(l)) throw new v(d.InvalidValueForAggregateFunction);
      u++, r += l;
    }
  }
  return u === 0 ? null : r / i.length;
}
function te(i) {
  return typeof i == "number";
}
function rn(i, r) {
  if (i === null) return null;
  let u = null, c = null;
  for (const l of i) {
    let w = l;
    w = l instanceof j || l instanceof Q ? l.toNumber() : l instanceof _ ? l.toMillis() : l instanceof J ? l.toMilliseconds() : l, (u === null || r === "max" && c !== null && w !== null && c <= w || r === "min" && c !== null && w !== null && c >= w) && (u = l, c = w);
  }
  return u;
}
function zs(i) {
  if (i === null) return null;
  let r = 0;
  for (let u = 0; u < i.length; u++) {
    const c = i[u];
    if (c !== null) {
      if (!te(c)) throw new v(d.InvalidValueForAggregateFunction);
      r += c;
    }
  }
  return r;
}
function ks(i) {
  if (i === null) return null;
  const r = vn(i);
  return r === null ? null : Math.sqrt(r);
}
function vn(i) {
  if (i === null || (i = i.filter((c) => c !== null)).length === 0) return null;
  const r = pn(i);
  if (r === null) return null;
  let u = 0;
  for (const c of i) {
    if (!te(c)) throw new v(d.InvalidValueForAggregateFunction);
    u += (r - c) ** 2;
  }
  return u / (i.length - 1);
}
class C {
  constructor() {
    this.op = "+", this.day = 0, this.second = 0, this.hour = 0, this.month = 0, this.year = 0, this.minute = 0, this.millis = 0;
  }
  static _fixDefaults(r) {
    if (r.precision !== null || r.secondary !== null) throw new v(d.PrimarySecondaryQualifiers);
  }
  static _parseSecondsComponent(r, u) {
    if (u.includes(".")) {
      const c = u.split(".");
      r.second = parseFloat(c[0]), r.millis = parseInt(c[1], 10);
    } else r.second = parseFloat(u);
  }
  static createFromMilliseconds(r) {
    const u = new C();
    return u.second = r / 1e3, u;
  }
  static createFromValueAndQualifier(r, u, c) {
    let l = null;
    const w = new C();
    if (w.op = c === "-" ? "-" : "+", u.type === "interval-period") {
      C._fixDefaults(u);
      const h = new RegExp("^[0-9]{1,}$");
      if (u.period === "year" || u.period === "month") throw new v(d.YearMonthIntervals);
      if (u.period === "second") {
        if (!/^[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/.test(r)) throw new v(d.IllegalInterval);
        C._parseSecondsComponent(w, r);
      } else {
        if (!h.test(r)) throw new v(d.IllegalInterval);
        w[u.period] = parseFloat(r);
      }
    } else {
      if (C._fixDefaults(u.start), C._fixDefaults(u.end), u.start.period === "year" || u.start.period === "month" || u.end.period === "year" || u.end.period === "month") throw new v(d.YearMonthIntervals);
      switch (u.start.period) {
        case "day":
          switch (u.end.period) {
            case "hour":
              if (l = new RegExp("^[0-9]{1,} [0-9]{1,}$"), !l.test(r)) throw new v(d.IllegalInterval);
              w[u.start.period] = parseFloat(r.split(" ")[0]), w[u.end.period] = parseFloat(r.split(" ")[1]);
              break;
            case "minute":
              if (l = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"), !l.test(r)) throw new v(d.IllegalInterval);
              {
                w[u.start.period] = parseFloat(r.split(" ")[0]);
                const h = r.split(" ")[1].split(":");
                w.hour = parseFloat(h[0]), w.minute = parseFloat(h[1]);
              }
              break;
            case "second":
              if (l = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !l.test(r)) throw new v(d.IllegalInterval);
              {
                w[u.start.period] = parseFloat(r.split(" ")[0]);
                const h = r.split(" ")[1].split(":");
                w.hour = parseFloat(h[0]), w.minute = parseFloat(h[1]), C._parseSecondsComponent(w, h[2]);
              }
              break;
            default:
              throw new v(d.IllegalInterval);
          }
          break;
        case "hour":
          switch (u.end.period) {
            case "minute":
              if (l = new RegExp("^[0-9]{1,}:[0-9]{1,}$"), !l.test(r)) throw new v(d.IllegalInterval);
              w.hour = parseFloat(r.split(":")[0]), w.minute = parseFloat(r.split(":")[1]);
              break;
            case "second":
              if (l = new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !l.test(r)) throw new v(d.IllegalInterval);
              {
                const h = r.split(":");
                w.hour = parseFloat(h[0]), w.minute = parseFloat(h[1]), C._parseSecondsComponent(w, h[2]);
              }
              break;
            default:
              throw new v(d.IllegalInterval);
          }
          break;
        case "minute":
          if (u.end.period !== "second") throw new v(d.IllegalInterval);
          if (l = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !l.test(r)) throw new v(d.IllegalInterval);
          {
            const h = r.split(":");
            w.minute = parseFloat(h[0]), C._parseSecondsComponent(w, h[1]);
          }
          break;
        default:
          throw new v(d.IllegalInterval);
      }
    }
    return w;
  }
  valueInMilliseconds() {
    return (this.op === "-" ? -1 : 1) * (this.millis + 1e3 * this.second + 60 * this.minute * 1e3 + 60 * this.hour * 60 * 1e3 + 24 * this.day * 60 * 60 * 1e3 + this.month * (365 / 12) * 24 * 60 * 60 * 1e3 + 365 * this.year * 24 * 60 * 60 * 1e3);
  }
}
const Hs = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/, qs = /^(\d{1,2}):(\d{1,2})$/, js = /^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/, mn = /^(\d{4})-(\d{1,2})-(\d{1,2})$/, Ys = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$/, Bs = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|-)(\d{1,2}):(\d{1,2})$/, Qs = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|-)(\d{1,2}):(\d{1,2})$/, Gs = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
function Ct(i, r) {
  if (r instanceof _s) return r === jt.instance ? _.fromMillis(i.getTime(), { zone: jt.instance }) : _.fromJSDate(i, { zone: r });
  switch (r) {
    case "system":
    case "local":
    case null:
      return _.fromJSDate(i);
    default:
      return r?.toLowerCase() === "unknown" ? _.fromMillis(i.getTime(), { zone: jt.instance }) : _.fromJSDate(i, { zone: r });
  }
}
function k(i) {
  return typeof i == "number";
}
function H(i) {
  return typeof i == "string" || i instanceof String;
}
function et(i) {
  return i instanceof C;
}
function B(i) {
  return i instanceof Date;
}
function M(i) {
  return i instanceof _;
}
function E(i) {
  return i instanceof j;
}
function D(i) {
  return i instanceof Q;
}
function F(i) {
  return i instanceof J;
}
function ee(i) {
  let r = Hs.exec(i);
  if (r !== null) {
    const [, u, c, l] = r, w = Q.fromParts(parseInt(u, 10), parseInt(c, 10), parseInt(l, 10), 0);
    if (w !== null) return w;
    throw new v(d.InvalidTime);
  }
  if (r = qs.exec(i), r !== null) {
    const [, u, c] = r, l = Q.fromParts(parseInt(u, 10), parseInt(c, 10), 0, 0);
    if (l !== null) return l;
    throw new v(d.InvalidTime);
  }
  if (r = js.exec(i), r !== null) {
    const [, u, c, l, w] = r, h = Q.fromParts(parseInt(u, 10), parseInt(c, 10), parseInt(l, 10), parseInt(w, 10));
    if (h !== null) return h;
    throw new v(d.InvalidTime);
  }
  throw new v(d.InvalidTime);
}
function At(i, r, u = !1) {
  let c = Ys.exec(i);
  if (c !== null) {
    const [, l, w, h, e, N, O, L] = c, Z = _.fromObject({ year: parseInt(l, 10), month: parseInt(w, 10), day: parseInt(h, 10), hour: parseInt(e, 10), minute: parseInt(N, 10), second: parseInt(O, 10), millisecond: L ? parseInt(L.replace(".", ""), 10) : 0 }, { zone: Yt(r) });
    if (Z.isValid === !1) throw new v(d.InvalidTimeStamp);
    return Z;
  }
  if (c = Bs.exec(i), c !== null) {
    const [, l, w, h, e, N, O, L, Z, z, x] = c, A = J.fromParts(parseInt(l, 10), parseInt(w, 10), parseInt(h, 10), parseInt(e, 10), parseInt(N, 10), parseInt(O, 10), L ? parseInt(L.replace(".", ""), 10) : 0, Z === "-", parseInt(z, 10), parseInt(x, 10));
    if (A.isValid === !1) throw new v(d.InvalidTimeStamp);
    return A;
  }
  if (c = Qs.exec(i), c !== null) {
    const [, l, w, h, e, N, O, L, Z] = c, z = J.fromParts(parseInt(l, 10), parseInt(w, 10), parseInt(h, 10), parseInt(e, 10), parseInt(N, 10), 0, 0, O === "-", parseInt(L, 10), parseInt(Z, 10));
    if (z.isValid === !1) throw new v(d.InvalidTimeStamp);
    return z;
  }
  if (c = Gs.exec(i), c !== null) {
    const [, l, w, h, e, N] = c, O = _.fromObject({ year: parseInt(l, 10), month: parseInt(w, 10), day: parseInt(h, 10), hour: parseInt(e, 10), minute: parseInt(N, 10), second: 0 }, { zone: Yt(r) });
    if (O.isValid === !1) throw new v(d.InvalidTimeStamp);
    return O;
  }
  if (c = mn.exec(i), c !== null) {
    const [, l, w, h] = c, e = _.fromObject({ year: parseInt(l, 10), month: parseInt(w, 10), day: parseInt(h, 10), hour: 0, minute: 0, second: 0 }, { zone: Yt(r) });
    if (e.isValid === !1) throw new v(d.InvalidTimeStamp);
    return e;
  }
  throw new v(d.InvalidTimeStamp);
}
function hn(i, r) {
  const u = mn.exec(i);
  if (u === null) try {
    return At(i, r);
  } catch {
    throw new v(d.InvalidDate);
  }
  const [, c, l, w] = u, h = j.fromParts(parseInt(c, 10), parseInt(l, 10), parseInt(w, 10));
  if (h === null) throw new v(d.InvalidDate);
  return h;
}
const Ws = 321408e5, Ks = 26784e5, Xs = 864e5, tl = 36e5, el = 6e4;
function Bt(i) {
  return !!M(i) || !!F(i);
}
function Gt(i) {
  return !!M(i) || !!E(i) || !!F(i) || !!D(i);
}
function bt(i) {
  if (M(i)) return i.toMillis();
  if (E(i)) return i.toNumber();
  if (F(i)) return i.toMilliseconds();
  throw new v(d.InvalidDataType);
}
function q(i, r, u, c) {
  if (i == null || r == null) return null;
  if (k(i)) {
    if (k(r)) return W(i, r, u);
    if (H(r)) return nl(i, r, u);
    if (Gt(r)) throw new v(d.InvalidOperator);
    if (E(r)) throw new v(d.InvalidOperator);
  } else if (H(i)) {
    if (k(r)) return rl(i, r, u);
    if (H(r)) return al(i, r, u);
    if (M(r)) throw new v(d.InvalidOperator);
    if (E(r)) throw new v(d.InvalidOperator);
    if (D(r)) throw new v(d.InvalidOperator);
    if (F(r)) throw new v(d.InvalidOperator);
  } else if (M(i)) {
    if (Bt(r)) {
      if (i instanceof _ && ct(i.zone)) {
        if (r instanceof _ && ct(r.zone) === !1 || r instanceof J) return ft(i, r, u);
      } else if (r instanceof _ && ct(r.zone) && (i instanceof _ && ct(i.zone) === !1 || i instanceof J))
        return ft(i, r, u);
      return W(bt(i), bt(r), u);
    }
    if (H(r)) throw new v(d.InvalidOperator);
    if (E(r)) return il(i, r, u);
    if (D(r)) throw new v(d.InvalidOperator);
    if (k(r)) throw new v(d.InvalidOperator);
  } else if (E(i)) {
    if (F(r)) return sl(i, r, u);
    if (M(r)) return ul(i, r, u);
    if (H(r)) throw new v(d.InvalidOperator);
    if (E(r)) return W(i.toNumber(), r.toNumber(), u);
    if (D(r)) throw new v(d.InvalidOperator);
    if (k(r)) throw new v(d.InvalidOperator);
  } else if (D(i)) {
    if (D(r)) return W(i.toNumber(), r.toNumber(), u);
    if (H(r)) throw new v(d.InvalidOperator);
    if (k(r)) throw new v(d.InvalidOperator);
    if (E(r)) throw new v(d.InvalidOperator);
    if (Bt(r)) throw new v(d.InvalidOperator);
  } else if (F(i)) {
    if (Bt(r)) return r instanceof _ && ct(r.zone) ? ft(i, r, u) : W(bt(i), bt(r), u);
    if (H(r)) throw new v(d.InvalidOperator);
    if (E(r)) return ol(i, r, u);
    if (D(r)) throw new v(d.InvalidOperator);
    if (k(r)) throw new v(d.InvalidOperator);
  }
  switch (u) {
    case "<>":
      return i !== r;
    case "=":
      return i === r;
    case ">":
      return i > r;
    case "<":
      return i < r;
    case ">=":
      return i >= r;
    case "<=":
      return i <= r;
  }
}
function W(i, r, u) {
  switch (u) {
    case "<>":
      return i !== r;
    case "=":
      return i === r;
    case ">":
      return i > r;
    case "<":
      return i < r;
    case ">=":
      return i >= r;
    case "<=":
      return i <= r;
  }
}
function nl(i, r, u) {
  const c = parseFloat(r);
  if (!isNaN(c)) return W(i, c, u);
  const l = i.toString();
  switch (u) {
    case "<>":
      return l !== r;
    case "=":
      return l === r;
    case ">":
      return l > r;
    case "<":
      return l < r;
    case ">=":
      return l >= r;
    case "<=":
      return l <= r;
  }
}
function rl(i, r, u) {
  const c = parseFloat(i);
  if (!isNaN(c)) return W(c, r, u);
  const l = r.toString();
  switch (u) {
    case "<>":
      return i !== l;
    case "=":
      return i === l;
    case ">":
      return i > l;
    case "<":
      return i < l;
    case ">=":
      return i >= l;
    case "<=":
      return i <= l;
  }
}
function al(i, r, u) {
  switch (u) {
    case "<>":
      return i !== r;
    case "=":
      return i === r;
    case ">":
      return i > r;
    case "<":
      return i < r;
    case ">=":
      return i >= r;
    case "<=":
      return i <= r;
  }
}
function il(i, r, u) {
  const c = r.toDateTimeLuxon(i.zone);
  return W((i = i.startOf("day")).toMillis(), c.toMillis(), u);
}
function ol(i, r, u) {
  const c = r.toDateTimeLuxon(i.toDateTime().zone);
  return W((i = i.startOfDay()).toMilliseconds(), c.toMillis(), u);
}
function ul(i, r, u) {
  const c = i.toDateTimeLuxon(r.zone);
  return r = r.startOf("day"), W(c.toMillis(), r.toMillis(), u);
}
function sl(i, r, u) {
  const c = i.toDateTimeLuxon(r.toDateTime().zone);
  return r = r.startOfDay(), W(c.toMillis(), r.toMilliseconds(), u);
}
function ft(i, r, u) {
  i instanceof J && (i = i.toDateTime()), r instanceof J && (r = r.toDateTime());
  const c = an(i), l = an(r);
  switch (u) {
    case "<>":
      return c !== l;
    case "=":
      return c === l;
    case ">":
      return c > l;
    case "<":
      return c < l;
    case ">=":
      return c >= l;
    case "<=":
      return c <= l;
  }
}
function an(i) {
  return i.year * Ws + i.month * Ks + i.day * Xs + i.hour * tl + i.minute * el + 1e3 * i.second + i.millisecond;
}
function ne(i, r, u) {
  const c = In[i.toLowerCase()];
  if (c == null) throw new v(d.FunctionNotRecognized);
  if (r.length < c.minParams || r.length > c.maxParams) throw new v(d.InvalidParameterCount, { name: i.toUpperCase() });
  return c.evaluate(r, u);
}
function ll(i, r) {
  const u = In[i.toLowerCase()];
  return u != null && r >= u.minParams && r <= u.maxParams;
}
function Mt(i) {
  return typeof i == "string" || i instanceof String;
}
function Qt(i) {
  return !B(i) && !E(i) && !M(i) && !D(i) && !F(i);
}
function wn(i) {
  return E(i) || D(i) ? i.toString() : F(i) ? i.toSQLValue() : M(i) ? i.millisecond === 0 ? i.toFormat("yyyy-LL-dd HH:mm:ss") : i.toSQL({ includeOffset: !1 }) : B(i) ? wn(_.fromJSDate(i)) : i.toString();
}
function cl(i) {
  if (B(i)) return j.fromDateJS(i);
  if (M(i)) return j.fromParts(i.year, i.month, i.day);
  if (E(i)) return i;
  if (D(i)) throw new v(d.CannotCastValue);
  if (F(i) && j.fromParts(i.year, i.month, i.day) === null)
    throw new v(d.CannotCastValue);
  if (Mt(i)) {
    const r = j.fromReader(i);
    if (r !== null && r.isValid) return r;
  }
  throw new v(d.CannotCastValue);
}
function fl(i, r, u) {
  if (B(i)) return Ct(i, r);
  if (M(i)) return i;
  if (E(i)) return i.toDateTimeLuxon("unknown");
  if (D(i)) throw new v(d.CannotCastValue);
  if (F(i)) return i;
  if (Mt(i)) return At(i, "unknown", u);
  throw new v(d.CannotCastValue);
}
function dl(i) {
  if (B(i)) return Q.fromDateJS(i);
  if (M(i)) return Q.fromDateTime(i);
  if (E(i)) throw new v(d.CannotCastValue);
  if (D(i)) return i;
  if (F(i)) return Q.fromSqlTimeStampOffset(i);
  if (Mt(i)) return ee(i);
  throw new v(d.CannotCastValue);
}
const In = { extract: { minParams: 2, maxParams: 2, evaluate: ([i, r]) => {
  if (r == null) return null;
  if (B(r)) switch (i.toUpperCase()) {
    case "SECOND":
      return r.getSeconds();
    case "MINUTE":
      return r.getMinutes();
    case "HOUR":
      return r.getHours();
    case "DAY":
      return r.getDate();
    case "MONTH":
      return r.getMonth() + 1;
    case "YEAR":
      return r.getFullYear();
    case "TIMEZONE_HOUR":
    case "TIMEZONE_MINUTE":
      return 0;
  }
  else if (M(r)) switch (i.toUpperCase()) {
    case "SECOND":
      return r.second;
    case "MINUTE":
      return r.minute;
    case "HOUR":
      return r.hour;
    case "DAY":
      return r.day;
    case "MONTH":
      return r.month;
    case "YEAR":
      return r.year;
    case "TIMEZONE_HOUR":
    case "TIMEZONE_MINUTE":
      throw new v(d.InvalidFunctionParameters, { function: "EXTRACT" });
  }
  else if (E(r)) switch (i.toUpperCase()) {
    case "DAY":
      return r.day;
    case "MONTH":
      return r.month;
    case "YEAR":
      return r.year;
    case "TIMEZONE_HOUR":
    case "TIMEZONE_MINUTE":
      throw new v(d.InvalidFunctionParameters, { function: "EXTRACT" });
  }
  else if (D(r)) switch (i.toUpperCase()) {
    case "SECOND":
      return r.second;
    case "MINUTE":
      return r.minute;
    case "HOUR":
      return r.hour;
  }
  else if (F(r)) switch (i.toUpperCase()) {
    case "SECOND":
      return r.second;
    case "MINUTE":
      return r.minute;
    case "HOUR":
      return r.hour;
    case "DAY":
      return r.day;
    case "MONTH":
      return r.month;
    case "YEAR":
      return r.year;
    case "TIMEZONE_HOUR":
      return r.timezoneOffsetHour;
    case "TIMEZONE_MINUTE":
      return r.timezoneOffsetMinutes;
  }
  throw new v(d.InvalidFunctionParameters, { function: "EXTRACT" });
} }, substring: { minParams: 2, maxParams: 3, evaluate: (i) => {
  if (i.length === 2) {
    const [r, u] = i;
    return r == null || u == null ? null : r.toString().substring(u - 1);
  }
  if (i.length === 3) {
    const [r, u, c] = i;
    return r == null || u == null || c == null ? null : c <= 0 ? "" : r.toString().substring(u - 1, u + c - 1);
  }
} }, position: { minParams: 2, maxParams: 2, evaluate: ([i, r]) => i == null || r == null ? null : r.indexOf(i) + 1 }, trim: { minParams: 2, maxParams: 3, evaluate: (i) => {
  const r = i.length === 3, u = r ? i[1] : " ", c = r ? i[2] : i[1];
  if (u == null || c == null) return null;
  const l = `(${Rs(u)})`;
  switch (i[0]) {
    case "BOTH":
      return c.replaceAll(new RegExp(`^${l}*|${l}*$`, "g"), "");
    case "LEADING":
      return c.replaceAll(new RegExp(`^${l}*`, "g"), "");
    case "TRAILING":
      return c.replaceAll(new RegExp(`${l}*$`, "g"), "");
  }
  throw new v(d.InvalidFunctionParameters, { function: "TRIM" });
} }, abs: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.abs(i[0]) }, ceiling: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.ceil(i[0]) }, floor: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.floor(i[0]) }, log: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.log(i[0]) }, log10: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.log(i[0]) * Math.LOG10E }, sin: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.sin(i[0]) }, cos: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.cos(i[0]) }, tan: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.tan(i[0]) }, asin: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.asin(i[0]) }, acos: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.acos(i[0]) }, atan: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.atan(i[0]) }, sign: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : i[0] > 0 ? 1 : i[1] < 0 ? -1 : 0 }, power: { minParams: 2, maxParams: 2, evaluate: (i) => i[0] == null || i[1] == null ? null : i[0] ** i[1] }, mod: { minParams: 2, maxParams: 2, evaluate: (i) => i[0] == null || i[1] == null ? null : i[0] % i[1] }, round: { minParams: 1, maxParams: 2, evaluate: (i) => {
  const r = i[0], u = i.length === 2 ? 10 ** i[1] : 1;
  return r == null ? null : Math.round(r * u) / u;
} }, truncate: { minParams: 1, maxParams: 2, evaluate: (i) => i[0] == null ? null : i.length === 1 ? parseInt(i[0].toFixed(0), 10) : parseFloat(i[0].toFixed(i[1])) }, char_length: { minParams: 1, maxParams: 1, evaluate: (i) => Mt(i[0]) ? i[0].length : 0 }, concat: { minParams: 1, maxParams: 1 / 0, evaluate: (i) => {
  let r = "";
  for (let u = 0; u < i.length; u++) {
    if (i[u] == null) return null;
    r += i[u].toString();
  }
  return r;
} }, lower: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : i[0].toString().toLowerCase() }, upper: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : i[0].toString().toUpperCase() }, coalesce: { minParams: 1, maxParams: 1 / 0, evaluate: (i) => {
  for (const r of i) if (r !== null) return r;
  return null;
} }, cosh: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.cosh(i[0]) }, sinh: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.sinh(i[0]) }, tanh: { minParams: 1, maxParams: 1, evaluate: (i) => i[0] == null ? null : Math.tanh(i[0]) }, nullif: { minParams: 2, maxParams: 2, evaluate: (i, r) => q(i[0], i[1], "=") ? null : i[0] }, cast: { minParams: 2, maxParams: 2, evaluate: (i, r) => {
  const u = i[0], c = i[1];
  if (u === null) return null;
  switch (c.type) {
    case "integer": {
      if (!Qt(u)) throw new v(d.CannotCastValue);
      const l = parseInt(u, 10);
      if (isNaN(l)) throw new v(d.CannotCastValue);
      return l;
    }
    case "smallint": {
      if (!Qt(u)) throw new v(d.CannotCastValue);
      const l = parseInt(u, 10);
      if (isNaN(l)) throw new v(d.CannotCastValue);
      if (l > 32767 || l < -32767) throw new v(d.CannotCastValue);
      return l;
    }
    case "float":
    case "real": {
      if (!Qt(u)) throw new v(d.CannotCastValue);
      const l = parseFloat(u);
      if (isNaN(l)) throw new v(d.CannotCastValue);
      return l;
    }
    case "time":
      return dl(u);
    case "date":
      return cl(u);
    case "timestamp":
      return fl(u, r, c.withtimezone === !0);
    case "varchar": {
      const l = wn(u);
      if (l.length > c.size) throw new v(d.CannotCastValue);
      return l;
    }
    default:
      throw new v(d.InvalidDataType);
  }
} } };
function gn(i, r, u, c) {
  if (i === "||") return ne("concat", [r, u], c);
  if (r === null || u === null) return null;
  if (k(r)) {
    if (k(u)) return re(r, u, i);
    if (et(u)) return yl(r, u, i);
    if (D(u)) return El();
    if (E(u)) return Fl();
    if (F(u)) return Ml();
    if (M(u)) return Cl();
    if (H(u)) return $l(r, u, i);
    throw new v(d.InvalidOperator);
  }
  if (E(r)) {
    if (k(u)) return bl(r, u, i);
    if (et(u)) return Tl(r, u, i);
    if (D(u)) return Jl();
    if (E(u)) return Vl(r, u, i);
    if (F(u)) return Ul(r, u, i);
    if (M(u)) return Rl(r, u, i);
    if (H(u)) return Xl();
    throw new v(d.InvalidOperator);
  }
  if (D(r)) {
    if (k(u)) return xl(r, u, i);
    if (et(u)) return hl(r, u, i);
    if (D(u)) return Bl();
    if (E(u)) return jl();
    if (F(u)) return Yl();
    if (M(u)) return ql();
    if (H(u)) return tc();
    throw new v(d.InvalidOperator);
  }
  if (et(r)) {
    if (k(u)) return gl(r, u, i);
    if (et(u)) return Il(r, u, i);
    if (D(u)) return vl(r, u, i);
    if (E(u)) return ml(r, u, i);
    if (F(u)) return wl(r, u, i);
    if (M(u)) return pl(r, u, i);
    if (H(u)) return Ll();
    throw new v(d.InvalidOperator);
  }
  if (M(r)) {
    if (k(u)) return Ol(r, u, i);
    if (et(u)) return Nl(r, u, i);
    if (D(u)) return Kl();
    if (E(u)) return Gl(r, u, i);
    if (F(u)) return Wl(r, u, i);
    if (M(u)) return Ql(r, u, i);
    if (H(u)) return ec();
    throw new v(d.InvalidOperator);
  }
  if (F(r)) {
    if (k(u)) return Al(r, u, i);
    if (et(u)) return Sl(r, u, i);
    if (D(u)) return Zl();
    if (E(u)) return zl(r, u, i);
    if (F(u)) return Hl(r, u, i);
    if (M(u)) return kl(r, u, i);
    if (H(u)) return nc();
    throw new v(d.InvalidOperator);
  }
  if (H(r)) {
    if (k(u)) return Dl(r, u, i);
    if (et(u)) return _l();
    if (D(u)) return rc();
    if (E(u)) return ac();
    if (F(u)) return oc();
    if (M(u)) return ic();
    if (H(u)) return Pl(r, u, i);
    throw new v(d.InvalidOperator);
  }
  throw new v(d.InvalidOperator);
}
function re(i, r, u) {
  switch (u) {
    case "+":
      return i + r;
    case "-":
      return i - r;
    case "*":
      return i * r;
    case "/":
      return i / r;
  }
  throw new v(d.InvalidOperator);
}
function pl(i, r, u) {
  switch (u) {
    case "+":
      return r.plus({ milliseconds: i.valueInMilliseconds() });
    case "-":
      return i.valueInMilliseconds() - r.toMillis();
  }
  throw new v(d.InvalidOperator);
}
function vl(i, r, u) {
  if (u === "+") return r.plus("milliseconds", i.valueInMilliseconds());
  throw new v(d.InvalidOperator);
}
function ml(i, r, u) {
  if (u === "+") return r.plus("milliseconds", i.valueInMilliseconds());
  throw new v(d.InvalidOperator);
}
function hl(i, r, u) {
  switch (u) {
    case "+":
      return i.plus("milliseconds", r.valueInMilliseconds());
    case "-":
      return i.plus("milliseconds", -1 * r.valueInMilliseconds());
  }
  throw new v(d.InvalidOperator);
}
function wl(i, r, u) {
  if (u === "+") return r.addMilliseconds(i.valueInMilliseconds());
  throw new v(d.InvalidOperator);
}
function Il(i, r, u) {
  switch (u) {
    case "+":
      return C.createFromMilliseconds(i.valueInMilliseconds() + r.valueInMilliseconds());
    case "-":
      return C.createFromMilliseconds(i.valueInMilliseconds() - r.valueInMilliseconds());
    case "*":
      return C.createFromMilliseconds(i.valueInMilliseconds() * r.valueInMilliseconds());
    case "/":
      return C.createFromMilliseconds(i.valueInMilliseconds() / r.valueInMilliseconds());
  }
  throw new v(d.InvalidOperator);
}
function gl(i, r, u) {
  switch (u) {
    case "+":
      return C.createFromMilliseconds(i.valueInMilliseconds() + r);
    case "-":
      return C.createFromMilliseconds(i.valueInMilliseconds() - r);
    case "*":
      return C.createFromMilliseconds(i.valueInMilliseconds() * r);
    case "/":
      return C.createFromMilliseconds(i.valueInMilliseconds() / r);
  }
  throw new v(d.InvalidOperator);
}
function yl(i, r, u) {
  switch (u) {
    case "+":
      return C.createFromMilliseconds(i + r.valueInMilliseconds());
    case "-":
      return C.createFromMilliseconds(i - r.valueInMilliseconds());
    case "*":
      return C.createFromMilliseconds(i * r.valueInMilliseconds());
    case "/":
      return C.createFromMilliseconds(i / r.valueInMilliseconds());
  }
  throw new v(d.InvalidOperator);
}
function Tl(i, r, u) {
  switch (u) {
    case "+":
      return i.plus("milliseconds", r.valueInMilliseconds());
    case "-":
      return i.plus("milliseconds", -1 * r.valueInMilliseconds());
  }
  throw new v(d.InvalidOperator);
}
function Nl(i, r, u) {
  switch (u) {
    case "+":
      return i.plus({ milliseconds: r.valueInMilliseconds() });
    case "-":
      return i.minus({ milliseconds: r.valueInMilliseconds() });
  }
  throw new v(d.InvalidOperator);
}
function Sl(i, r, u) {
  switch (u) {
    case "+":
      return i.addMilliseconds(r.valueInMilliseconds());
    case "-":
      return i.addMilliseconds(-1 * r.valueInMilliseconds());
  }
  throw new v(d.InvalidOperator);
}
function Ol(i, r, u) {
  const c = 1e3 * r * 24 * 60 * 60;
  switch (u) {
    case "+":
      return i.plus({ milliseconds: c });
    case "-":
      return i.minus({ milliseconds: c });
  }
  throw new v(d.InvalidOperator);
}
function bl(i, r, u) {
  const c = 1e3 * r * 24 * 60 * 60;
  switch (u) {
    case "+":
      return i.plus("milliseconds", c);
    case "-":
      return i.plus("milliseconds", -1 * c);
  }
  throw new v(d.InvalidOperator);
}
function xl(i, r, u) {
  const c = 1e3 * r * 24 * 60 * 60;
  switch (u) {
    case "+":
      return i.plus("milliseconds", c);
    case "-":
      return i.plus("milliseconds", -1 * c);
  }
  throw new v(d.InvalidOperator);
}
function Cl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Al(i, r, u) {
  const c = 1e3 * r * 24 * 60 * 60;
  switch (u) {
    case "+":
      return i.addMilliseconds(c);
    case "-":
      return i.addMilliseconds(-1 * c);
  }
  throw new v(d.InvalidOperator);
}
function Ml(i, r, u) {
  throw new v(d.InvalidOperator);
}
function El(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Fl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function $l(i, r, u) {
  const c = parseFloat(r);
  if (isNaN(c)) throw new v(d.InvalidOperator);
  return re(i, c, u);
}
function Dl(i, r, u) {
  const c = parseFloat(i);
  if (isNaN(c)) throw new v(d.InvalidOperator);
  return re(c, r, u);
}
function Pl(i, r, u) {
  if (u === "+") return i + r;
  throw new v(d.InvalidOperator);
}
function Ll(i, r, u) {
  throw new v(d.InvalidOperator);
}
function _l(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Rl(i, r, u) {
  if (u === "-") return i.toDateTimeLuxon(r.zone).diff(r).as("days");
  throw new v(d.InvalidOperator);
}
function Ul(i, r, u) {
  if (u === "-") return i.toDateTimeLuxon(r.toDateTime().zone).diff(r.toDateTime()).as("days");
  throw new v(d.InvalidOperator);
}
function Vl(i, r, u) {
  if (u === "-") return i.toDateTimeLuxon("UTC").diff(r.toDateTimeLuxon("UTC")).as("days");
  throw new v(d.InvalidOperator);
}
function Jl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Zl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function zl(i, r, u) {
  if (u === "-") return i.toDateTime().diff(r.toDateTimeLuxon(i.toDateTime().zone)).as("days");
  throw new v(d.InvalidOperator);
}
function kl(i, r, u) {
  if (u === "-") return i.toDateTime().diff(r).as("days");
  throw new v(d.InvalidOperator);
}
function Hl(i, r, u) {
  if (u === "-") return i.toDateTime().diff(r.toDateTime()).as("days");
  throw new v(d.InvalidOperator);
}
function ql(i, r, u) {
  throw new v(d.InvalidOperator);
}
function jl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Yl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Bl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Ql(i, r, u) {
  if (u === "-") return i.diff(r).as("days");
  throw new v(d.InvalidOperator);
}
function Gl(i, r, u) {
  if (u === "-") return i.diff(r.toDateTimeLuxon(i.zone)).as("days");
  throw new v(d.InvalidOperator);
}
function Wl(i, r, u) {
  if (u === "-") return i.diff(r.toDateTime()).as("days");
  throw new v(d.InvalidOperator);
}
function Kl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function Xl(i, r, u) {
  throw new v(d.InvalidOperator);
}
function tc(i, r, u) {
  throw new v(d.InvalidOperator);
}
function ec(i, r, u) {
  throw new v(d.InvalidOperator);
}
function nc(i, r, u) {
  throw new v(d.InvalidOperator);
}
function rc(i, r, u) {
  throw new v(d.InvalidOperator);
}
function ac(i, r, u) {
  throw new v(d.InvalidOperator);
}
function ic(i, r, u) {
  throw new v(d.InvalidOperator);
}
function oc(i, r, u) {
  throw new v(d.InvalidOperator);
}
var on, un, yn = { exports: {} };
un = function() {
  function i(l, w) {
    function h() {
      this.constructor = l;
    }
    h.prototype = w.prototype, l.prototype = new h();
  }
  function r(l, w, h, e) {
    var N = Error.call(this, l);
    return Object.setPrototypeOf && Object.setPrototypeOf(N, r.prototype), N.expected = w, N.found = h, N.location = e, N.name = "SyntaxError", N;
  }
  function u(l, w, h) {
    return h = h || " ", l.length > w ? l : (w -= l.length, l + (h += h.repeat(w)).slice(0, w));
  }
  function c(l, w) {
    var h, e = {}, N = (w = w !== void 0 ? w : {}).grammarSource, O = { start: Te }, L = Te, Z = "!", z = "=", x = ">=", A = ">", Y = "<=", R = "<>", xn = "<", ae = "!=", Et = "+", Ft = "-", ie = "||", Cn = "*", An = "/", Mn = "@", oe = "'", ue = "N'", dt = "''", En = ".", Fn = "null", $n = "true", Dn = "false", Pn = "in", Ln = "is", _n = "like", Rn = "escape", Un = "not", Vn = "and", Jn = "or", Zn = "between", zn = "from", kn = "for", Hn = "substring", qn = "extract", jn = "trim", Yn = "position", Bn = "timestamp", Qn = "date", Gn = "time", Wn = "leading", Kn = "trailing", Xn = "both", tr = "cast", er = "as", nr = "integer", rr = "smallint", ar = "float", ir = "real", or = "varchar", ur = "to", sr = "interval", lr = "year", cr = "timezone_hour", fr = "timezone_minute", dr = "month", pr = "day", vr = "hour", mr = "minute", hr = "second", wr = "case", Ir = "end", gr = "when", yr = "then", Tr = "else", Nr = ",", Sr = "(", Or = ")", se = "`", br = /^[A-Za-z_\x80-\uFFFF]/, xr = /^[A-Za-z0-9_]/, le = /^[A-Za-z0-9_.\x80-\uFFFF]/, Cr = /^["]/, ce = /^[^']/, Ar = /^[0-9]/, Mr = /^[eE]/, Er = /^[+\-]/, Fr = /^[ \t\n\r]/, fe = /^[^`]/, $r = y("!", !1), de = y("=", !1), Dr = y(">=", !1), Pr = y(">", !1), Lr = y("<=", !1), _r = y("<>", !1), Rr = y("<", !1), Ur = y("!=", !1), $t = y("+", !1), Dt = y("-", !1), Vr = y("||", !1), Jr = y("*", !1), Zr = y("/", !1), zr = X([["A", "Z"], ["a", "z"], "_", ["", "￿"]], !1, !1), kr = X([["A", "Z"], ["a", "z"], ["0", "9"], "_"], !1, !1), pe = X([["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["", "￿"]], !1, !1), Hr = X(['"'], !1, !1), qr = y("@", !1), ve = y("'", !1), jr = y("N'", !1), me = y("''", !1), he = X(["'"], !0, !1), Yr = y(".", !1), Br = X([["0", "9"]], !1, !1), Qr = X(["e", "E"], !1, !1), Gr = X(["+", "-"], !1, !1), Wr = y("NULL", !0), Kr = y("TRUE", !0), Xr = y("FALSE", !0), ta = y("IN", !0), ea = y("IS", !0), na = y("LIKE", !0), ra = y("ESCAPE", !0), aa = y("NOT", !0), ia = y("AND", !0), oa = y("OR", !0), ua = y("BETWEEN", !0), sa = y("FROM", !0), la = y("FOR", !0), ca = y("SUBSTRING", !0), fa = y("EXTRACT", !0), da = y("TRIM", !0), pa = y("POSITION", !0), va = y("TIMESTAMP", !0), ma = y("DATE", !0), ha = y("TIME", !0), wa = y("LEADING", !0), Ia = y("TRAILING", !0), ga = y("BOTH", !0), ya = y("CAST", !0), Ta = y("AS", !0), Na = y("INTEGER", !0), Sa = y("SMALLINT", !0), Oa = y("FLOAT", !0), ba = y("REAL", !0), xa = y("VARCHAR", !0), Ca = y("TO", !0), Aa = y("INTERVAL", !0), Ma = y("YEAR", !0), Ea = y("TIMEZONE_HOUR", !0), Fa = y("TIMEZONE_MINUTE", !0), $a = y("MONTH", !0), Da = y("DAY", !0), Pa = y("HOUR", !0), La = y("MINUTE", !0), _a = y("SECOND", !0), Ra = y("CASE", !0), Ua = y("END", !0), Va = y("WHEN", !0), Ja = y("THEN", !0), Za = y("ELSE", !0), za = y(",", !1), ka = y("(", !1), Ha = y(")", !1), qa = X([" ", "	", `
`, "\r"], !1, !1), we = y("`", !1), Ie = X(["`"], !0, !1), ja = function(t) {
      return t;
    }, Ya = function(t, a) {
      var o = { type: "expression-list" }, s = Fs(t, a);
      return o.value = s, o;
    }, Ba = function(t, a) {
      return lt(t, a);
    }, Qa = function(t, a) {
      return lt(t, a);
    }, Ga = function(t) {
      return Ms("NOT", t);
    }, Wa = function(t, a) {
      return a == "" || a == null || a == null ? t : a.type == "arithmetic" ? lt(t, a.tail) : Xe(a.op, t, a.right, a.escape);
    }, Ka = function(t) {
      return { type: "arithmetic", tail: t };
    }, Xa = function(t, a) {
      return { op: t + "NOT", right: a };
    }, ti = function(t, a) {
      return { op: t, right: a };
    }, ei = function(t, a, o) {
      return { op: "NOT" + t, right: { type: "expression-list", value: [a, o] } };
    }, ni = function(t, a, o) {
      return { op: t, right: { type: "expression-list", value: [a, o] } };
    }, ri = function(t) {
      return t[0] + " " + t[2];
    }, ai = function(t) {
      return t[0] + " " + t[2];
    }, ii = function(t, a, o) {
      return { op: t, right: a, escape: o.value };
    }, oi = function(t, a) {
      return { op: t, right: a, escape: "" };
    }, ui = function(t, a) {
      return { op: t, right: a };
    }, si = function(t) {
      return { op: t, right: { type: "expression-list", value: [] } };
    }, li = function(t, a) {
      return { op: t, right: a };
    }, ci = function(t, a) {
      return lt(t, a);
    }, fi = function(t, a) {
      return lt(t, a);
    }, di = function(t) {
      return t.paren = !0, t;
    }, pi = function(t) {
      return /^CURRENT_DATE$/i.test(t) ? { type: "current-time", mode: "date" } : /^CURRENT_TIMESTAMP$/i.test(t) ? { type: "current-time", mode: "timestamp" } : { type: "column-reference", table: "", column: t };
    }, vi = function(t) {
      return { type: "column-reference", table: "", column: t, delimited: !0 };
    }, mi = function(t) {
      return t;
    }, hi = function(t, a) {
      return t + a.join("");
    }, wi = function(t, a) {
      return t + a.join("");
    }, Ii = function(t) {
      return t;
    }, gi = function(t) {
      return t.join("");
    }, yi = function() {
      return '"';
    }, Ti = function(t) {
      return { type: "parameter", value: t[1] };
    }, Ni = function(t, a) {
      return { type: "function", name: "extract", args: { type: "expression-list", value: [{ type: "string", value: t }, a] } };
    }, Si = function(t, a, o) {
      return { type: "function", name: "substring", args: { type: "expression-list", value: o ? [t, a, o[2]] : [t, a] } };
    }, Oi = function(t, a) {
      return { type: "function", name: "cast", args: { type: "expression-list", value: [t, a] } };
    }, bi = function() {
      return { type: "data-type", value: { type: "integer" } };
    }, xi = function() {
      return { type: "data-type", value: { type: "smallint" } };
    }, Ci = function() {
      return { type: "data-type", value: { type: "float" } };
    }, Ai = function() {
      return { type: "data-type", value: { type: "real" } };
    }, Mi = function() {
      return { type: "data-type", value: { type: "date" } };
    }, Ei = function() {
      return { type: "data-type", value: { type: "timestamp" } };
    }, Fi = function() {
      return { type: "data-type", value: { type: "time" } };
    }, $i = function(t) {
      return { type: "data-type", value: { type: "varchar", size: parseInt(t) } };
    }, Di = function(t, a, o) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: t ?? "BOTH" }, a, o] } };
    }, Pi = function(t, a) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: t ?? "BOTH" }, a] } };
    }, Li = function(t, a) {
      return { type: "function", name: "position", args: { type: "expression-list", value: [t, a] } };
    }, _i = function(t, a) {
      return { type: "function", name: t, args: a || { type: "expression-list", value: [] } };
    }, Ri = function(t) {
      return t.type === "string" && $s(t.value), { type: "timestamp", value: t.value };
    }, Ui = function(t) {
      return t.type === "string" && Ds(t.value), { type: "time", value: t.value };
    }, Vi = function(t, a, o) {
      return { type: "interval", value: a, qualifier: o, op: t };
    }, Ji = function(t, a) {
      return { type: "interval", value: t, qualifier: a, op: "" };
    }, Zi = function(t, a) {
      return { type: "interval-qualifier", start: t, end: a };
    }, zi = function(t, a) {
      return { type: "interval-period", period: t.value, precision: a, secondary: null };
    }, ki = function(t) {
      return { type: "interval-period", period: t.value, precision: null, secondary: null };
    }, Hi = function(t) {
      return { type: "interval-period", period: t.value, precision: null, secondary: null };
    }, qi = function(t, a) {
      return { type: "interval-period", period: "second", precision: t, secondary: a };
    }, ji = function(t) {
      return { type: "interval-period", period: "second", precision: t, secondary: null };
    }, Yi = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, Bi = function(t, a) {
      return { type: "interval-period", period: t.value, precision: a, secondary: null };
    }, Qi = function(t) {
      return { type: "interval-period", period: t.value, precision: null, secondary: null };
    }, Gi = function(t, a) {
      return { type: "interval-period", period: "second", precision: t, secondary: a };
    }, Wi = function(t) {
      return { type: "interval-period", period: "second", precision: t, secondary: null };
    }, Ki = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, Xi = function() {
      return { type: "string", value: "day" };
    }, to = function() {
      return { type: "string", value: "hour" };
    }, eo = function() {
      return { type: "string", value: "minute" };
    }, no = function() {
      return { type: "string", value: "month" };
    }, ro = function() {
      return { type: "string", value: "year" };
    }, ao = function(t) {
      return parseFloat(t);
    }, io = function(t) {
      return parseFloat(t);
    }, oo = function(t) {
      return t.type === "string" && Ps(t.value), { type: "date", value: t.value };
    }, uo = function() {
      return { type: "null", value: null };
    }, so = function() {
      return { type: "boolean", value: !0 };
    }, lo = function() {
      return { type: "boolean", value: !1 };
    }, ge = function() {
      return "'";
    }, co = function(t) {
      return { type: "string", value: t.join("") };
    }, fo = function(t, a) {
      return { type: "case-expression", format: "simple", operand: t, clauses: a, else: null };
    }, po = function(t, a, o) {
      return { type: "case-expression", format: "simple", operand: t, clauses: a, else: o.value };
    }, vo = function(t) {
      return { type: "case-expression", format: "searched", clauses: t, else: null };
    }, mo = function(t, a) {
      return { type: "case-expression", format: "searched", clauses: t, else: a.value };
    }, ho = function(t, a) {
      return { type: "when-clause", operand: t, value: a };
    }, wo = function(t, a) {
      return { type: "when-clause", operand: t, value: a };
    }, Io = function(t) {
      return { type: "else-clause", value: t };
    }, go = function(t) {
      return { type: "number", value: t };
    }, yo = function(t, a, o) {
      return parseFloat(t + a + o);
    }, To = function(t, a) {
      return parseFloat(t + a);
    }, No = function(t, a) {
      return parseFloat(t + a);
    }, So = function(t) {
      return parseFloat(t);
    }, Oo = function(t, a) {
      return t[0] + a;
    }, bo = function(t) {
      return "." + (t ?? "");
    }, xo = function(t, a) {
      return t + a;
    }, Co = function(t) {
      return t.join("");
    }, Ao = function(t, a) {
      return "e" + (a === null ? "" : a);
    }, Mo = function() {
      return "IN";
    }, Eo = function() {
      return "IS";
    }, Fo = function() {
      return "LIKE";
    }, $o = function() {
      return "ESCAPE";
    }, Do = function() {
      return "NOT";
    }, Po = function() {
      return "AND";
    }, Lo = function() {
      return "OR";
    }, _o = function() {
      return "BETWEEN";
    }, Ro = function() {
      return "FROM";
    }, Uo = function() {
      return "FOR";
    }, Vo = function() {
      return "SUBSTRING";
    }, Jo = function() {
      return "EXTRACT";
    }, Zo = function() {
      return "TRIM";
    }, zo = function() {
      return "POSITION";
    }, ko = function() {
      return "TIMESTAMP";
    }, Ho = function() {
      return "DATE";
    }, qo = function() {
      return "TIME";
    }, jo = function() {
      return "LEADING";
    }, Yo = function() {
      return "TRAILING";
    }, Bo = function() {
      return "BOTH";
    }, Qo = function() {
      return "CAST";
    }, Go = function() {
      return "AS";
    }, Wo = function() {
      return "INTEGER";
    }, Ko = function() {
      return "SMALLINT";
    }, Xo = function() {
      return "FLOAT";
    }, tu = function() {
      return "REAL";
    }, eu = function() {
      return "VARCHAR";
    }, nu = function() {
      return "TO";
    }, ru = function() {
      return "INTERVAL";
    }, au = function() {
      return "YEAR";
    }, iu = function() {
      return "TIMEZONE_HOUR";
    }, ou = function() {
      return "TIMEZONE_MINUTE";
    }, uu = function() {
      return "MONTH";
    }, su = function() {
      return "DAY";
    }, lu = function() {
      return "HOUR";
    }, cu = function() {
      return "MINUTE";
    }, fu = function() {
      return "SECOND";
    }, du = function() {
      return "CASE";
    }, pu = function() {
      return "END";
    }, vu = function() {
      return "WHEN";
    }, mu = function() {
      return "THEN";
    }, hu = function() {
      return "ELSE";
    }, wu = function(t) {
      return t;
    }, Iu = function(t) {
      return t.join("");
    }, n = 0, m = 0, pt = [{ line: 1, column: 1 }], K = 0, Pt = [], f = 0;
    if ("startRule" in w) {
      if (!(w.startRule in O)) throw new Error(`Can't start parsing from rule "` + w.startRule + '".');
      L = O[w.startRule];
    }
    function Lt(t, a) {
      throw yu(t, a = a !== void 0 ? a : _t(m, n));
    }
    function y(t, a) {
      return { type: "literal", text: t, ignoreCase: a };
    }
    function X(t, a, o) {
      return { type: "class", parts: t, inverted: a, ignoreCase: o };
    }
    function gu() {
      return { type: "end" };
    }
    function ye(t) {
      var a, o = pt[t];
      if (o) return o;
      for (a = t - 1; !pt[a]; ) a--;
      for (o = { line: (o = pt[a]).line, column: o.column }; a < t; ) l.charCodeAt(a) === 10 ? (o.line++, o.column = 1) : o.column++, a++;
      return pt[t] = o, o;
    }
    function _t(t, a, o) {
      var s = ye(t), g = ye(a);
      return { source: N, start: { offset: t, line: s.line, column: s.column }, end: { offset: a, line: g.line, column: g.column } };
    }
    function I(t) {
      n < K || (n > K && (K = n, Pt = []), Pt.push(t));
    }
    function yu(t, a) {
      return new r(t, null, null, a);
    }
    function Tu(t, a, o) {
      return new r(r.buildMessage(t, a), t, a, o);
    }
    function Te() {
      var t, a;
      return t = n, p(), (a = P()) !== e ? (p(), m = t, t = ja(a)) : (n = t, t = e), t;
    }
    function Ne() {
      var t, a, o, s, g, S, b, $;
      if (t = n, (a = P()) !== e) {
        for (o = [], s = n, g = p(), (S = Ot()) !== e ? (b = p(), ($ = P()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e); s !== e; ) o.push(s), s = n, g = p(), (S = Ot()) !== e ? (b = p(), ($ = P()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e);
        m = t, t = Ya(a, o);
      } else n = t, t = e;
      return t;
    }
    function P() {
      var t, a, o, s, g, S, b, $;
      if (t = n, (a = Rt()) !== e) {
        for (o = [], s = n, g = p(), (S = Ue()) !== e ? (b = p(), ($ = Rt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e); s !== e; ) o.push(s), s = n, g = p(), (S = Ue()) !== e ? (b = p(), ($ = Rt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e);
        m = t, t = Ba(a, o);
      } else n = t, t = e;
      return t;
    }
    function Rt() {
      var t, a, o, s, g, S, b, $;
      if (t = n, (a = vt()) !== e) {
        for (o = [], s = n, g = p(), (S = Tt()) !== e ? (b = p(), ($ = vt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e); s !== e; ) o.push(s), s = n, g = p(), (S = Tt()) !== e ? (b = p(), ($ = vt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e);
        m = t, t = Qa(a, o);
      } else n = t, t = e;
      return t;
    }
    function vt() {
      var t, a, o, s, g;
      return t = n, (a = st()) === e && (a = n, l.charCodeAt(n) === 33 ? (o = Z, n++) : (o = e, f === 0 && I($r)), o !== e ? (s = n, f++, l.charCodeAt(n) === 61 ? (g = z, n++) : (g = e, f === 0 && I(de)), f--, g === e ? s = void 0 : (n = s, s = e), s !== e ? a = o = [o, s] : (n = a, a = e)) : (n = a, a = e)), a !== e ? (o = p(), (s = vt()) !== e ? (m = t, t = Ga(s)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = Nu()), t;
    }
    function Nu() {
      var t, a, o;
      return t = n, (a = tt()) !== e ? (p(), (o = Su()) === e && (o = null), m = t, t = Wa(a, o)) : (n = t, t = e), t;
    }
    function Su() {
      var t;
      return (t = Ou()) === e && (t = Au()) === e && (t = xu()) === e && (t = bu()) === e && (t = Cu()), t;
    }
    function Ou() {
      var t, a, o, s, g, S, b;
      if (t = n, a = [], o = n, s = p(), (g = Se()) !== e ? (S = p(), (b = tt()) !== e ? o = s = [s, g, S, b] : (n = o, o = e)) : (n = o, o = e), o !== e) for (; o !== e; ) a.push(o), o = n, s = p(), (g = Se()) !== e ? (S = p(), (b = tt()) !== e ? o = s = [s, g, S, b] : (n = o, o = e)) : (n = o, o = e);
      else a = e;
      return a !== e && (m = t, a = Ka(a)), t = a;
    }
    function Se() {
      var t;
      return l.substr(n, 2) === x ? (t = x, n += 2) : (t = e, f === 0 && I(Dr)), t === e && (l.charCodeAt(n) === 62 ? (t = A, n++) : (t = e, f === 0 && I(Pr)), t === e && (l.substr(n, 2) === Y ? (t = Y, n += 2) : (t = e, f === 0 && I(Lr)), t === e && (l.substr(n, 2) === R ? (t = R, n += 2) : (t = e, f === 0 && I(_r)), t === e && (l.charCodeAt(n) === 60 ? (t = xn, n++) : (t = e, f === 0 && I(Rr)), t === e && (l.charCodeAt(n) === 61 ? (t = z, n++) : (t = e, f === 0 && I(de)), t === e && (l.substr(n, 2) === ae ? (t = ae, n += 2) : (t = e, f === 0 && I(Ur)))))))), t;
    }
    function bu() {
      var t, a, o, s;
      return t = n, (a = _e()) !== e ? (p(), (o = st()) !== e ? (p(), (s = tt()) !== e ? (m = t, t = Xa(a, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = _e()) !== e ? (p(), (o = tt()) !== e ? (m = t, t = ti(a, o)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function xu() {
      var t, a, o, s, g, S;
      return t = n, (a = st()) !== e ? (p(), (o = Ve()) !== e ? (p(), (s = tt()) !== e ? (p(), (g = Tt()) !== e ? (p(), (S = tt()) !== e ? (m = t, t = ei(o, s, S)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = Ve()) !== e ? (p(), (o = tt()) !== e ? (p(), (s = Tt()) !== e ? (p(), (g = tt()) !== e ? (m = t, t = ni(a, o, g)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function Oe() {
      var t, a, o, s, g;
      return t = n, a = n, (o = st()) !== e ? (s = p(), (g = Re()) !== e ? a = o = [o, s, g] : (n = a, a = e)) : (n = a, a = e), a !== e && (m = t, a = ri(a)), (t = a) === e && (t = Re()), t;
    }
    function Ut() {
      var t, a, o, s, g;
      return t = n, a = n, (o = st()) !== e ? (s = p(), (g = Ht()) !== e ? a = o = [o, s, g] : (n = a, a = e)) : (n = a, a = e), a !== e && (m = t, a = ai(a)), (t = a) === e && (t = Ht()), t;
    }
    function Cu() {
      var t, a, o, s;
      return t = n, (a = Oe()) !== e ? (p(), (o = nt()) !== e ? (p(), ls() !== e ? (p(), (s = kt()) !== e ? (m = t, t = ii(a, o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = Oe()) !== e ? (p(), (o = nt()) !== e ? (m = t, t = oi(a, o)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function Au() {
      var t, a, o, s;
      return t = n, (a = Ut()) !== e ? (p(), (o = U()) !== e ? (p(), (s = Ne()) !== e ? (p(), V() !== e ? (m = t, t = ui(a, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = Ut()) !== e ? (p(), (o = U()) !== e ? (p(), (s = V()) !== e ? (m = t, t = si(a)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = Ut()) !== e ? (p(), (o = zt()) !== e ? (m = t, t = li(a, o)) : (n = t, t = e)) : (n = t, t = e))), t;
    }
    function tt() {
      var t, a, o, s, g, S, b, $;
      if (t = n, (a = Vt()) !== e) {
        for (o = [], s = n, g = p(), (S = be()) !== e ? (b = p(), ($ = Vt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e); s !== e; ) o.push(s), s = n, g = p(), (S = be()) !== e ? (b = p(), ($ = Vt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e);
        m = t, t = ci(a, o);
      } else n = t, t = e;
      return t;
    }
    function be() {
      var t;
      return l.charCodeAt(n) === 43 ? (t = Et, n++) : (t = e, f === 0 && I($t)), t === e && (l.charCodeAt(n) === 45 ? (t = Ft, n++) : (t = e, f === 0 && I(Dt)), t === e && (l.substr(n, 2) === ie ? (t = ie, n += 2) : (t = e, f === 0 && I(Vr)))), t;
    }
    function Vt() {
      var t, a, o, s, g, S, b, $;
      if (t = n, (a = Jt()) !== e) {
        for (o = [], s = n, g = p(), (S = xe()) !== e ? (b = p(), ($ = Jt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e); s !== e; ) o.push(s), s = n, g = p(), (S = xe()) !== e ? (b = p(), ($ = Jt()) !== e ? s = g = [g, S, b, $] : (n = s, s = e)) : (n = s, s = e);
        m = t, t = fi(a, o);
      } else n = t, t = e;
      return t;
    }
    function xe() {
      var t;
      return l.charCodeAt(n) === 42 ? (t = Cn, n++) : (t = e, f === 0 && I(Jr)), t === e && (l.charCodeAt(n) === 47 ? (t = An, n++) : (t = e, f === 0 && I(Zr))), t;
    }
    function Jt() {
      var t, a;
      return (t = Hu()) === e && (t = _u()) === e && (t = Ru()) === e && (t = Ju()) === e && (t = Zu()) === e && (t = Uu()) === e && (t = zu()) === e && (t = ts()) === e && (t = Mu()) === e && (t = zt()) === e && (t = n, U() !== e ? (p(), (a = P()) !== e ? (p(), V() !== e ? (m = t, t = di(a)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function Mu() {
      var t, a;
      return t = n, (a = Eu()) !== e && (m = t, a = pi(a)), (t = a) === e && (t = n, (a = $u()) !== e && (m = t, a = vi(a)), t = a), t;
    }
    function Eu() {
      var t, a;
      return t = n, (a = Fu()) !== e && (m = t, a = mi(a)), t = a;
    }
    function Fu() {
      var t, a, o, s;
      if (t = n, (a = Zt()) !== e) {
        for (o = [], s = Ae(); s !== e; ) o.push(s), s = Ae();
        m = t, t = hi(a, o);
      } else n = t, t = e;
      return t;
    }
    function Ce() {
      var t, a, o, s;
      if (t = n, (a = Zt()) !== e) {
        for (o = [], s = T(); s !== e; ) o.push(s), s = T();
        m = t, t = wi(a, o);
      } else n = t, t = e;
      return t;
    }
    function Zt() {
      var t;
      return br.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(zr)), t;
    }
    function T() {
      var t;
      return xr.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(kr)), t;
    }
    function Ae() {
      var t;
      return le.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(pe)), t;
    }
    function $u() {
      var t, a;
      return t = n, mt() !== e ? (a = Du(), mt() !== e ? (m = t, t = Ii(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Du() {
      var t, a, o;
      for (t = n, a = [], o = Me(); o !== e; ) a.push(o), o = Me();
      return m = t, t = a = gi(a);
    }
    function Me() {
      var t;
      return (t = Lu()) === e && (t = Pu()), t;
    }
    function Pu() {
      var t;
      return t = n, mt() !== e && mt() !== e ? (m = t, t = yi()) : (n = t, t = e), t;
    }
    function Lu() {
      var t;
      return le.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(pe)), t;
    }
    function mt() {
      var t;
      return Cr.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(Hr)), t;
    }
    function zt() {
      var t, a, o, s;
      return t = n, a = n, l.charCodeAt(n) === 64 ? (o = Mn, n++) : (o = e, f === 0 && I(qr)), o !== e && (s = Ce()) !== e ? a = o = [o, s] : (n = a, a = e), a !== e && (m = t, a = Ti(a)), t = a;
    }
    function _u() {
      var t, a, o;
      return t = n, ds() !== e ? (p(), U() !== e ? (p(), (a = ku()) !== e ? (p(), qt() !== e ? (p(), (o = P()) !== e ? (p(), V() !== e ? (m = t, t = Ni(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ru() {
      var t, a, o, s, g, S, b;
      return t = n, fs() !== e ? (p(), U() !== e ? (p(), (a = P()) !== e ? (p(), qt() !== e ? (p(), (o = P()) !== e ? (p(), s = n, (g = cs()) !== e ? (S = p(), (b = P()) !== e ? s = g = [g, S, b, p()] : (n = s, s = e)) : (n = s, s = e), s === e && (s = null), (g = V()) !== e ? (m = t, t = Si(a, o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Uu() {
      var t, a, o;
      return t = n, ws() !== e ? (p(), U() !== e ? (p(), (a = P()) !== e ? (p(), Is() !== e ? (p(), (o = Vu()) !== e ? (p(), V() !== e ? (m = t, t = Oi(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Vu() {
      var t, a, o;
      return t = n, (a = gs()) !== e && (m = t, a = bi()), (t = a) === e && (t = n, (a = ys()) !== e && (m = t, a = xi()), (t = a) === e && (t = n, (a = Ts()) !== e && (m = t, a = Ci()), (t = a) === e && (t = n, (a = Ns()) !== e && (m = t, a = Ai()), (t = a) === e && (t = n, (a = ze()) !== e && (m = t, a = Mi()), (t = a) === e && (t = n, (a = Ze()) !== e && (m = t, a = Ei()), (t = a) === e && (t = n, (a = ke()) !== e && (m = t, a = Fi()), (t = a) === e && (t = n, (a = Ss()) !== e ? (p(), U() !== e ? (p(), (o = rt()) !== e ? (p(), V() !== e ? (m = t, t = $i(o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)))))))), t;
    }
    function Ju() {
      var t, a, o, s;
      return t = n, Je() !== e ? (p(), U() !== e ? (p(), (a = Ee()) === e && (a = null), p(), (o = P()) !== e ? (p(), qt() !== e ? (p(), (s = P()) !== e ? (p(), V() !== e ? (m = t, t = Di(a, o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, Je() !== e ? (p(), U() !== e ? (p(), (a = Ee()) === e && (a = null), p(), (o = P()) !== e ? (p(), V() !== e ? (m = t, t = Pi(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function Ee() {
      var t;
      return (t = vs()) === e && (t = ms()) === e && (t = hs()), t;
    }
    function Zu() {
      var t, a, o;
      return t = n, ps() !== e ? (p(), U() !== e ? (p(), (a = P()) !== e ? (p(), Ht() !== e ? (p(), (o = P()) !== e ? (p(), V() !== e ? (m = t, t = Li(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function zu() {
      var t, a, o;
      return t = n, (a = As()) !== e ? (p(), U() !== e ? (p(), (o = Ne()) === e && (o = null), p(), V() !== e ? (m = t, t = _i(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ku() {
      var t;
      return (t = qe()) === e && (t = je()) === e && (t = Ye()) === e && (t = Be()) === e && (t = Qe()) === e && (t = at()) === e && (t = bs()) === e && (t = xs()), t;
    }
    function Hu() {
      var t;
      return (t = kt()) === e && (t = rs()) === e && (t = Xu()) === e && (t = Ku()) === e && (t = Wu()) === e && (t = qu()) === e && (t = Yu()) === e && (t = ju()), t;
    }
    function qu() {
      var t, a;
      return t = n, Ze() !== e ? (p(), (a = nt()) !== e ? (m = t, t = Ri(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ju() {
      var t, a;
      return t = n, ke() !== e ? (p(), (a = nt()) !== e ? (m = t, t = Ui(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Yu() {
      var t, a, o, s;
      return t = n, He() !== e ? (p(), l.charCodeAt(n) === 45 ? (a = Ft, n++) : (a = e, f === 0 && I(Dt)), a === e && (l.charCodeAt(n) === 43 ? (a = Et, n++) : (a = e, f === 0 && I($t))), a !== e ? (p(), (o = nt()) !== e ? (p(), (s = Fe()) !== e ? (m = t, t = Vi(a, o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, He() !== e ? (p(), (a = nt()) !== e ? (p(), (o = Fe()) !== e ? (m = t, t = Ji(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)), t;
    }
    function Fe() {
      var t, a, o;
      return t = n, (a = Bu()) !== e ? (p(), Os() !== e ? (p(), (o = Qu()) !== e ? (m = t, t = Zi(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = Gu()), t;
    }
    function Bu() {
      var t, a, o;
      return t = n, (a = ut()) !== e ? (p(), U() !== e ? (p(), (o = wt()) !== e ? (p(), V() !== e ? (m = t, t = zi(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = ut()) !== e && (m = t, a = ki(a)), t = a), t;
    }
    function Qu() {
      var t, a, o, s;
      return t = n, (a = ut()) !== e && (m = t, a = Hi(a)), (t = a) === e && (t = n, (a = at()) !== e ? (p(), U() !== e ? (p(), (o = wt()) !== e ? (p(), Ot() !== e ? (p(), (s = ht()) !== e ? (p(), V() !== e ? (m = t, t = qi(o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = at()) !== e ? (p(), U() !== e ? (p(), (o = wt()) !== e ? (p(), V() !== e ? (m = t, t = ji(o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = at()) !== e && (m = t, a = Yi()), t = a))), t;
    }
    function Gu() {
      var t, a, o, s;
      return t = n, (a = ut()) !== e ? (p(), U() !== e ? (p(), (o = ht()) !== e ? (p(), V() !== e ? (m = t, t = Bi(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = ut()) !== e && (m = t, a = Qi(a)), (t = a) === e && (t = n, (a = at()) !== e ? (p(), U() !== e ? (p(), (o = wt()) !== e ? (p(), Ot() !== e ? (p(), (s = ht()) !== e ? (p(), V() !== e ? (m = t, t = Gi(o, s)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = at()) !== e ? (p(), U() !== e ? (p(), (o = ht()) !== e ? (p(), V() !== e ? (m = t, t = Wi(o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t === e && (t = n, (a = at()) !== e && (m = t, a = Ki()), t = a)))), t;
    }
    function ut() {
      var t, a;
      return t = n, (a = Ye()) !== e && (m = t, a = Xi()), (t = a) === e && (t = n, (a = Be()) !== e && (m = t, a = to()), (t = a) === e && (t = n, (a = Qe()) !== e && (m = t, a = eo()), (t = a) === e && (t = n, (a = je()) !== e && (m = t, a = no()), (t = a) === e && (t = n, (a = qe()) !== e && (m = t, a = ro()), t = a)))), t;
    }
    function ht() {
      var t, a;
      return t = n, (a = rt()) !== e && (m = t, a = ao(a)), t = a;
    }
    function wt() {
      var t, a;
      return t = n, (a = rt()) !== e && (m = t, a = io(a)), t = a;
    }
    function Wu() {
      var t, a;
      return t = n, ze() !== e ? (p(), (a = nt()) !== e ? (m = t, t = oo(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ku() {
      var t, a;
      return t = n, (a = os()) !== e && (m = t, a = uo()), t = a;
    }
    function Xu() {
      var t, a;
      return t = n, (a = us()) !== e && (m = t, a = so()), (t = a) === e && (t = n, (a = ss()) !== e && (m = t, a = lo()), t = a), t;
    }
    function nt() {
      var t;
      return (t = kt()) === e && (t = zt()), t;
    }
    function kt() {
      var t, a, o, s, g;
      if (t = n, l.charCodeAt(n) === 39 ? (a = oe, n++) : (a = e, f === 0 && I(ve)), a === e && (l.substr(n, 2) === ue ? (a = ue, n += 2) : (a = e, f === 0 && I(jr))), a !== e) {
        for (o = [], s = n, l.substr(n, 2) === dt ? (g = dt, n += 2) : (g = e, f === 0 && I(me)), g !== e && (m = s, g = ge()), (s = g) === e && (ce.test(l.charAt(n)) ? (s = l.charAt(n), n++) : (s = e, f === 0 && I(he))); s !== e; ) o.push(s), s = n, l.substr(n, 2) === dt ? (g = dt, n += 2) : (g = e, f === 0 && I(me)), g !== e && (m = s, g = ge()), (s = g) === e && (ce.test(l.charAt(n)) ? (s = l.charAt(n), n++) : (s = e, f === 0 && I(he)));
        l.charCodeAt(n) === 39 ? (s = oe, n++) : (s = e, f === 0 && I(ve)), s !== e ? (m = t, t = co(o)) : (n = t, t = e);
      } else n = t, t = e;
      return t;
    }
    function ts() {
      var t;
      return (t = es()) === e && (t = ns()), t;
    }
    function es() {
      var t, a, o, s, g;
      if (t = n, Nt() !== e) if (p(), (a = P()) !== e) {
        for (p(), o = [], s = gt(); s !== e; ) o.push(s), s = gt();
        s = p(), (g = St()) !== e ? (m = t, t = fo(a, o)) : (n = t, t = e);
      } else n = t, t = e;
      else n = t, t = e;
      if (t === e) if (t = n, Nt() !== e) if (p(), (a = P()) !== e) {
        for (p(), o = [], s = gt(); s !== e; ) o.push(s), s = gt();
        s = p(), (g = $e()) !== e ? (p(), St() !== e ? (m = t, t = po(a, o, g)) : (n = t, t = e)) : (n = t, t = e);
      } else n = t, t = e;
      else n = t, t = e;
      return t;
    }
    function ns() {
      var t, a, o, s;
      if (t = n, Nt() !== e) {
        for (p(), a = [], o = It(); o !== e; ) a.push(o), o = It();
        o = p(), (s = St()) !== e ? (m = t, t = vo(a)) : (n = t, t = e);
      } else n = t, t = e;
      if (t === e) if (t = n, Nt() !== e) {
        for (p(), a = [], o = It(); o !== e; ) a.push(o), o = It();
        o = p(), (s = $e()) !== e ? (p(), St() !== e ? (m = t, t = mo(a, s)) : (n = t, t = e)) : (n = t, t = e);
      } else n = t, t = e;
      return t;
    }
    function It() {
      var t, a, o;
      return t = n, Ge() !== e ? (p(), (a = P()) !== e ? (p(), We() !== e ? (p(), (o = P()) !== e ? (m = t, t = ho(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function gt() {
      var t, a, o;
      return t = n, Ge() !== e ? (p(), (a = P()) !== e ? (p(), We() !== e ? (p(), (o = P()) !== e ? (m = t, t = wo(a, o)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function $e() {
      var t, a;
      return t = n, Cs() !== e ? (p(), (a = P()) !== e ? (m = t, t = Io(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function rs() {
      var t, a, o, s;
      return t = n, (a = as()) !== e ? (o = n, f++, s = Zt(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = go(a)) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function as() {
      var t, a, o, s;
      return t = n, (a = yt()) !== e && (o = De()) !== e && (s = Pe()) !== e ? (m = t, t = yo(a, o, s)) : (n = t, t = e), t === e && (t = n, (a = yt()) !== e && (o = De()) !== e ? (m = t, t = To(a, o)) : (n = t, t = e), t === e && (t = n, (a = yt()) !== e && (o = Pe()) !== e ? (m = t, t = No(a, o)) : (n = t, t = e), t === e && (t = n, (a = yt()) !== e && (m = t, a = So(a)), t = a))), t;
    }
    function yt() {
      var t, a, o;
      return (t = rt()) === e && (t = n, l.charCodeAt(n) === 45 ? (a = Ft, n++) : (a = e, f === 0 && I(Dt)), a === e && (l.charCodeAt(n) === 43 ? (a = Et, n++) : (a = e, f === 0 && I($t))), a !== e && (o = rt()) !== e ? (m = t, t = Oo(a, o)) : (n = t, t = e)), t;
    }
    function De() {
      var t, a, o;
      return t = n, l.charCodeAt(n) === 46 ? (a = En, n++) : (a = e, f === 0 && I(Yr)), a !== e ? ((o = rt()) === e && (o = null), m = t, t = bo(o)) : (n = t, t = e), t;
    }
    function Pe() {
      var t, a, o;
      return t = n, (a = is()) !== e && (o = rt()) !== e ? (m = t, t = xo(a, o)) : (n = t, t = e), t;
    }
    function rt() {
      var t, a, o;
      if (t = n, a = [], (o = Le()) !== e) for (; o !== e; ) a.push(o), o = Le();
      else a = e;
      return a !== e && (m = t, a = Co(a)), t = a;
    }
    function Le() {
      var t;
      return Ar.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(Br)), t;
    }
    function is() {
      var t, a, o;
      return t = n, Mr.test(l.charAt(n)) ? (a = l.charAt(n), n++) : (a = e, f === 0 && I(Qr)), a !== e ? (Er.test(l.charAt(n)) ? (o = l.charAt(n), n++) : (o = e, f === 0 && I(Gr)), o === e && (o = null), m = t, t = Ao(a, o)) : (n = t, t = e), t;
    }
    function os() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === Fn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Wr)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? t = a = [a, o] : (n = t, t = e)) : (n = t, t = e), t;
    }
    function us() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === $n ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Kr)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? t = a = [a, o] : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ss() {
      var t, a, o, s;
      return t = n, l.substr(n, 5).toLowerCase() === Dn ? (a = l.substr(n, 5), n += 5) : (a = e, f === 0 && I(Xr)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? t = a = [a, o] : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ht() {
      var t, a, o, s;
      return t = n, l.substr(n, 2).toLowerCase() === Pn ? (a = l.substr(n, 2), n += 2) : (a = e, f === 0 && I(ta)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Mo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function _e() {
      var t, a, o, s;
      return t = n, l.substr(n, 2).toLowerCase() === Ln ? (a = l.substr(n, 2), n += 2) : (a = e, f === 0 && I(ea)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Eo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Re() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === _n ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(na)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Fo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ls() {
      var t, a, o, s;
      return t = n, l.substr(n, 6).toLowerCase() === Rn ? (a = l.substr(n, 6), n += 6) : (a = e, f === 0 && I(ra)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = $o()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function st() {
      var t, a, o, s;
      return t = n, l.substr(n, 3).toLowerCase() === Un ? (a = l.substr(n, 3), n += 3) : (a = e, f === 0 && I(aa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Do()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Tt() {
      var t, a, o, s;
      return t = n, l.substr(n, 3).toLowerCase() === Vn ? (a = l.substr(n, 3), n += 3) : (a = e, f === 0 && I(ia)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Po()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ue() {
      var t, a, o, s;
      return t = n, l.substr(n, 2).toLowerCase() === Jn ? (a = l.substr(n, 2), n += 2) : (a = e, f === 0 && I(oa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Lo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ve() {
      var t, a, o, s;
      return t = n, l.substr(n, 7).toLowerCase() === Zn ? (a = l.substr(n, 7), n += 7) : (a = e, f === 0 && I(ua)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = _o()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function qt() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === zn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(sa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Ro()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function cs() {
      var t, a, o, s;
      return t = n, l.substr(n, 3).toLowerCase() === kn ? (a = l.substr(n, 3), n += 3) : (a = e, f === 0 && I(la)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Uo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function fs() {
      var t, a, o, s;
      return t = n, l.substr(n, 9).toLowerCase() === Hn ? (a = l.substr(n, 9), n += 9) : (a = e, f === 0 && I(ca)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Vo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ds() {
      var t, a, o, s;
      return t = n, l.substr(n, 7).toLowerCase() === qn ? (a = l.substr(n, 7), n += 7) : (a = e, f === 0 && I(fa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Jo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Je() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === jn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(da)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Zo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ps() {
      var t, a, o, s;
      return t = n, l.substr(n, 8).toLowerCase() === Yn ? (a = l.substr(n, 8), n += 8) : (a = e, f === 0 && I(pa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = zo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ze() {
      var t, a, o, s;
      return t = n, l.substr(n, 9).toLowerCase() === Bn ? (a = l.substr(n, 9), n += 9) : (a = e, f === 0 && I(va)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = ko()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ze() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === Qn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(ma)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Ho()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ke() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === Gn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(ha)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = qo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function vs() {
      var t, a, o, s;
      return t = n, l.substr(n, 7).toLowerCase() === Wn ? (a = l.substr(n, 7), n += 7) : (a = e, f === 0 && I(wa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = jo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ms() {
      var t, a, o, s;
      return t = n, l.substr(n, 8).toLowerCase() === Kn ? (a = l.substr(n, 8), n += 8) : (a = e, f === 0 && I(Ia)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Yo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function hs() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === Xn ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(ga)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Bo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ws() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === tr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(ya)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Qo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Is() {
      var t, a, o, s;
      return t = n, l.substr(n, 2).toLowerCase() === er ? (a = l.substr(n, 2), n += 2) : (a = e, f === 0 && I(Ta)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Go()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function gs() {
      var t, a, o, s;
      return t = n, l.substr(n, 7).toLowerCase() === nr ? (a = l.substr(n, 7), n += 7) : (a = e, f === 0 && I(Na)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Wo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function ys() {
      var t, a, o, s;
      return t = n, l.substr(n, 8).toLowerCase() === rr ? (a = l.substr(n, 8), n += 8) : (a = e, f === 0 && I(Sa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Ko()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ts() {
      var t, a, o, s;
      return t = n, l.substr(n, 5).toLowerCase() === ar ? (a = l.substr(n, 5), n += 5) : (a = e, f === 0 && I(Oa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = Xo()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ns() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === ir ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(ba)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = tu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ss() {
      var t, a, o, s;
      return t = n, l.substr(n, 7).toLowerCase() === or ? (a = l.substr(n, 7), n += 7) : (a = e, f === 0 && I(xa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = eu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Os() {
      var t, a, o, s;
      return t = n, l.substr(n, 2).toLowerCase() === ur ? (a = l.substr(n, 2), n += 2) : (a = e, f === 0 && I(Ca)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = nu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function He() {
      var t, a, o, s;
      return t = n, l.substr(n, 8).toLowerCase() === sr ? (a = l.substr(n, 8), n += 8) : (a = e, f === 0 && I(Aa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = ru()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function qe() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === lr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Ma)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = au()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function bs() {
      var t, a, o, s;
      return t = n, l.substr(n, 13).toLowerCase() === cr ? (a = l.substr(n, 13), n += 13) : (a = e, f === 0 && I(Ea)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = iu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function xs() {
      var t, a, o, s;
      return t = n, l.substr(n, 15).toLowerCase() === fr ? (a = l.substr(n, 15), n += 15) : (a = e, f === 0 && I(Fa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = ou()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function je() {
      var t, a, o, s;
      return t = n, l.substr(n, 5).toLowerCase() === dr ? (a = l.substr(n, 5), n += 5) : (a = e, f === 0 && I($a)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = uu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ye() {
      var t, a, o, s;
      return t = n, l.substr(n, 3).toLowerCase() === pr ? (a = l.substr(n, 3), n += 3) : (a = e, f === 0 && I(Da)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = su()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Be() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === vr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Pa)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = lu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Qe() {
      var t, a, o, s;
      return t = n, l.substr(n, 6).toLowerCase() === mr ? (a = l.substr(n, 6), n += 6) : (a = e, f === 0 && I(La)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = cu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function at() {
      var t, a, o, s;
      return t = n, l.substr(n, 6).toLowerCase() === hr ? (a = l.substr(n, 6), n += 6) : (a = e, f === 0 && I(_a)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = fu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Nt() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === wr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Ra)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = du()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function St() {
      var t, a, o, s;
      return t = n, l.substr(n, 3).toLowerCase() === Ir ? (a = l.substr(n, 3), n += 3) : (a = e, f === 0 && I(Ua)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = pu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ge() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === gr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Va)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = vu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function We() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === yr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Ja)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = mu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Cs() {
      var t, a, o, s;
      return t = n, l.substr(n, 4).toLowerCase() === Tr ? (a = l.substr(n, 4), n += 4) : (a = e, f === 0 && I(Za)), a !== e ? (o = n, f++, s = T(), f--, s === e ? o = void 0 : (n = o, o = e), o !== e ? (m = t, t = hu()) : (n = t, t = e)) : (n = t, t = e), t;
    }
    function Ot() {
      var t;
      return l.charCodeAt(n) === 44 ? (t = Nr, n++) : (t = e, f === 0 && I(za)), t;
    }
    function U() {
      var t;
      return l.charCodeAt(n) === 40 ? (t = Sr, n++) : (t = e, f === 0 && I(ka)), t;
    }
    function V() {
      var t;
      return l.charCodeAt(n) === 41 ? (t = Or, n++) : (t = e, f === 0 && I(Ha)), t;
    }
    function p() {
      var t, a;
      for (t = [], a = Ke(); a !== e; ) t.push(a), a = Ke();
      return t;
    }
    function Ke() {
      var t;
      return Fr.test(l.charAt(n)) ? (t = l.charAt(n), n++) : (t = e, f === 0 && I(qa)), t;
    }
    function As() {
      var t, a, o, s;
      if (t = n, (a = Ce()) !== e && (m = t, a = wu(a)), (t = a) === e) if (t = n, l.charCodeAt(n) === 96 ? (a = se, n++) : (a = e, f === 0 && I(we)), a !== e) {
        if (o = [], fe.test(l.charAt(n)) ? (s = l.charAt(n), n++) : (s = e, f === 0 && I(Ie)), s !== e) for (; s !== e; ) o.push(s), fe.test(l.charAt(n)) ? (s = l.charAt(n), n++) : (s = e, f === 0 && I(Ie));
        else o = e;
        o !== e ? (l.charCodeAt(n) === 96 ? (s = se, n++) : (s = e, f === 0 && I(we)), s !== e ? (m = t, t = Iu(o)) : (n = t, t = e)) : (n = t, t = e);
      } else n = t, t = e;
      return t;
    }
    function Ms(t, a) {
      return { type: "unary-expression", operator: t, expr: a };
    }
    function Xe(t, a, o, s) {
      var g = { type: "binary-expression", operator: t, left: a, right: o };
      return s !== void 0 && (g.escape = s), g;
    }
    function Es(t, a) {
      for (var o = [t], s = 0; s < a.length; s++) o.push(a[s][3]);
      return o;
    }
    function Fs(t, a, o) {
      return Es(t, a);
    }
    function lt(t, a) {
      for (var o = t, s = 0; s < a.length; s++) o = Xe(a[s][1], o, a[s][3]);
      return o;
    }
    function $s(t) {
      /^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(t) !== !0 && Lt("Timestamp literal is invalid");
    }
    function Ds(t) {
      /^(\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/.test(t) !== !0 && Lt("Time literal is invalid");
    }
    function Ps(t) {
      /^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(t) !== !0 && Lt("Date literal is invalid");
    }
    if ((h = L()) !== e && n === l.length) return h;
    throw h !== e && n < l.length && I(gu()), Tu(Pt, K < l.length ? l.charAt(K) : null, K < l.length ? _t(K, K + 1) : _t(K, K));
  }
  return i(r, Error), r.prototype.format = function(l) {
    var w = "Error: " + this.message;
    if (this.location) {
      var h, e = null;
      for (h = 0; h < l.length; h++) if (l[h].source === this.location.source) {
        e = l[h].text.split(/\r\n|\n|\r/g);
        break;
      }
      var N = this.location.start, O = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(N) : N, L = this.location.source + ":" + O.line + ":" + O.column;
      if (e) {
        var Z = this.location.end, z = u("", O.line.toString().length, " "), x = e[N.line - 1], A = (N.line === Z.line ? Z.column : x.length + 1) - N.column || 1;
        w += `
 --> ` + L + `
` + z + ` |
` + O.line + " | " + x + `
` + z + " | " + u("", N.column - 1, " ") + u("", A, "^");
      } else w += `
 at ` + L;
    }
    return w;
  }, r.buildMessage = function(l, w) {
    var h = { literal: function(x) {
      return '"' + N(x.text) + '"';
    }, class: function(x) {
      var A = x.parts.map(function(Y) {
        return Array.isArray(Y) ? O(Y[0]) + "-" + O(Y[1]) : O(Y);
      });
      return "[" + (x.inverted ? "^" : "") + A.join("") + "]";
    }, any: function() {
      return "any character";
    }, end: function() {
      return "end of input";
    }, other: function(x) {
      return x.description;
    } };
    function e(x) {
      return x.charCodeAt(0).toString(16).toUpperCase();
    }
    function N(x) {
      return x.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(A) {
        return "\\x0" + e(A);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(A) {
        return "\\x" + e(A);
      });
    }
    function O(x) {
      return x.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(A) {
        return "\\x0" + e(A);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(A) {
        return "\\x" + e(A);
      });
    }
    function L(x) {
      return h[x.type](x);
    }
    function Z(x) {
      var A, Y, R = x.map(L);
      if (R.sort(), R.length > 0) {
        for (A = 1, Y = 1; A < R.length; A++) R[A - 1] !== R[A] && (R[Y] = R[A], Y++);
        R.length = Y;
      }
      switch (R.length) {
        case 1:
          return R[0];
        case 2:
          return R[0] + " or " + R[1];
        default:
          return R.slice(0, -1).join(", ") + ", or " + R[R.length - 1];
      }
    }
    function z(x) {
      return x ? '"' + N(x) + '"' : "end of input";
    }
    return "Expected " + Z(l) + " but " + z(w) + " found.";
  }, { SyntaxError: r, parse: c };
}, (on = yn).exports && (on.exports = un());
var uc = yn.exports;
class sc {
  static parse(r) {
    return uc.parse(r);
  }
}
const lc = /* @__PURE__ */ new Set(["current_timestamp", "current_date", "current_time"]);
class cc {
  static makeBool(r) {
    return Nn(r);
  }
  static featureValue(r, u, c, l) {
    return bn(r, u, c, l);
  }
  static equalsNull(r) {
    return r === null;
  }
  static applyLike(r, u, c) {
    return Xt(r, u, c);
  }
  static ensureArray(r) {
    return Wt(r);
  }
  static applyIn(r, u, c) {
    return Kt(r, u);
  }
  static currentDate(r) {
    return j.fromNow(r);
  }
  static makeSqlInterval(r, u, c) {
    return C.createFromValueAndQualifier(r, u, c);
  }
  static convertInterval(r) {
    return r instanceof C ? r.valueInMilliseconds() : r;
  }
  static currentTimestamp(r) {
    return Ct(/* @__PURE__ */ new Date(), r);
  }
  static compare(r, u, c, l) {
    return q(u, c, r);
  }
  static calculate(r, u, c, l) {
    return gn(r, u, c, l);
  }
  static evaluateTime(r) {
    return ee(r);
  }
  static evaluateTimestamp(r, u, c) {
    return At(r, u, c);
  }
  static evaluateDate(r, u) {
    return hn(r, u);
  }
  static evaluateFunction(r, u, c) {
    return ne(r, u, c);
  }
  static lookup(r, u) {
    const c = u[r];
    return c === void 0 ? null : c;
  }
  static between(r, u, c) {
    return r == null || u[0] == null || u[1] == null ? null : q(r, u[0], ">=") && q(r, u[1], "<=");
  }
  static notbetween(r, u, c) {
    return r == null || u[0] == null || u[1] == null ? null : q(r, u[0], "<") || q(r, u[1], ">");
  }
  static ternaryNot(r) {
    return xt(r);
  }
  static ternaryAnd(r, u) {
    return Sn(r, u);
  }
  static ternaryOr(r, u) {
    return On(r, u);
  }
}
let fc = class Tn {
  constructor(r, u, c = "UTC") {
    this.fieldsIndex = u, this.timeZone = c, this.parameters = {}, this._hasDateFunctions = void 0, this.parseTree = sc.parse(r);
    const { isStandardized: l, isAggregate: w, referencedFieldNames: h } = this._extractExpressionInfo(u);
    this._referencedFieldNames = h, this.isStandardized = l, this.isAggregate = w;
  }
  static convertValueToStorageFormat(r, u = null) {
    if (u === null) return B(r) ? r.getTime() : M(r) ? r.toMillis() : F(r) ? r.toStorageFormat() : D(r) ? r.toStorageString() : E(r) ? r.toStorageFormat() : r;
    switch (u) {
      case "date":
        return B(r) ? r.getTime() : M(r) ? r.toMillis() : F(r) ? r.toMilliseconds() : E(r) ? r.toNumber() : r;
      case "date-only":
        return B(r) ? j.fromDateJS(r).toString() : F(r) ? j.fromSqlTimeStampOffset(r).toString() : M(r) ? j.fromDateTime(r).toString() : r;
      case "time-only":
        return B(r) ? Q.fromDateJS(r).toStorageString() : M(r) ? Q.fromDateTime(r).toStorageString() : F(r) ? Q.fromSqlTimeStampOffset(r).toStorageString() : D(r) ? r.toStorageString() : r;
      case "timestamp-offset":
        if (B(r)) return J.fromJSDate(r).toStorageFormat();
        if (M(r)) return J.fromDateTime(r).toStorageFormat();
        if (F(r)) return r.toStorageFormat();
    }
    return r;
  }
  static create(r, u, c = "UTC") {
    return new Tn(r, u, c);
  }
  get fieldNames() {
    return this._referencedFieldNames;
  }
  testSet(r, u = ot) {
    return !!this._evaluateNode(this.parseTree, null, u, r);
  }
  calculateValue(r, u = ot) {
    const c = this._evaluateNode(this.parseTree, r, u, null);
    return c instanceof C ? c.valueInMilliseconds() / 864e5 : c;
  }
  calculateValueCompiled(r, u = ot) {
    return this.parseTree._compiledVersion != null ? this.parseTree._compiledVersion(r, this.parameters, u, this.fieldsIndex, this.timeZone) : tn("esri-csp-restrictions") ? this.calculateValue(r, u) : (this._compileMe(), this.parseTree._compiledVersion(r, this.parameters, u, this.fieldsIndex, this.timeZone));
  }
  testFeature(r, u = ot) {
    return !!this._evaluateNode(this.parseTree, r, u, null);
  }
  testFeatureCompiled(r, u = ot) {
    return this.parseTree._compiledVersion != null ? !!this.parseTree._compiledVersion(r, this.parameters, u, this.fieldsIndex, this.timeZone) : tn("esri-csp-restrictions") ? this.testFeature(r, u) : (this._compileMe(), !!this.parseTree._compiledVersion(r, this.parameters, u, this.fieldsIndex, this.timeZone));
  }
  get hasDateFunctions() {
    return this._hasDateFunctions != null || (this._hasDateFunctions = !1, this._visitAll(this.parseTree, (r) => {
      r.type === "current-time" ? this._hasDateFunctions = !0 : r.type === "function" && (this._hasDateFunctions = this._hasDateFunctions || lc.has(r.name.toLowerCase()));
    })), this._hasDateFunctions;
  }
  getFunctions() {
    const r = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (u) => {
      u.type === "function" && r.add(u.name.toLowerCase());
    }), Array.from(r);
  }
  getExpressions() {
    const r = /* @__PURE__ */ new Map();
    return this._visitAll(this.parseTree, (u) => {
      if (u.type === "function") {
        const c = u.name.toLowerCase(), l = u.args.value[0];
        if (l.type === "column-reference") {
          const w = l.column, h = `${c}-${w}`;
          r.has(h) || r.set(h, { aggregateType: c, field: w });
        }
      }
    }), [...r.values()];
  }
  getVariables() {
    const r = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (u) => {
      u.type === "parameter" && r.add(u.value.toLowerCase());
    }), Array.from(r);
  }
  _compileMe() {
    const r = "return this.convertInterval(" + this.evaluateNodeToJavaScript(this.parseTree) + ")";
    this.parseTree._compiledVersion = new Function("feature", "lookups", "attributeAdapter", "fieldsIndex", "timeZone", r).bind(cc);
  }
  _extractExpressionInfo(r) {
    const u = [], c = /* @__PURE__ */ new Set();
    let l = !0, w = !1;
    return this._visitAll(this.parseTree, (h) => {
      switch (h.type) {
        case "column-reference": {
          const e = r?.get(h.column);
          let N, O;
          e ? N = O = e.name ?? "" : (O = h.column, N = O.toLowerCase()), c.has(N) || (c.add(N), u.push(O)), h.column = O;
          break;
        }
        case "function": {
          const { name: e, args: N } = h, O = N.value.length;
          l && (l = ll(e, O)), w === !1 && (w = nn(e, O));
          break;
        }
      }
    }), { referencedFieldNames: Array.from(u), isStandardized: l, isAggregate: w };
  }
  _visitAll(r, u) {
    if (r != null) switch (u(r), r.type) {
      case "when-clause":
        this._visitAll(r.operand, u), this._visitAll(r.value, u);
        break;
      case "case-expression":
        for (const c of r.clauses) this._visitAll(c, u);
        r.format === "simple" && this._visitAll(r.operand, u), r.else !== null && this._visitAll(r.else, u);
        break;
      case "expression-list":
        for (const c of r.value) this._visitAll(c, u);
        break;
      case "unary-expression":
        this._visitAll(r.expr, u);
        break;
      case "binary-expression":
        this._visitAll(r.left, u), this._visitAll(r.right, u);
        break;
      case "function":
        this._visitAll(r.args, u);
    }
  }
  evaluateNodeToJavaScript(r) {
    switch (r.type) {
      case "interval":
        return "this.makeSqlInterval(" + this.evaluateNodeToJavaScript(r.value) + ", " + JSON.stringify(r.qualifier) + "," + JSON.stringify(r.op) + ")";
      case "case-expression": {
        let u = "";
        if (r.format === "simple") {
          const c = this.evaluateNodeToJavaScript(r.operand);
          u = "( ";
          for (let l = 0; l < r.clauses.length; l++) u += " (this.compare('='," + c + "," + this.evaluateNodeToJavaScript(r.clauses[l].operand) + ") ? (" + this.evaluateNodeToJavaScript(r.clauses[l].value) + ") : ";
          r.else !== null ? u += this.evaluateNodeToJavaScript(r.else) : u += "null", u += " )";
        } else {
          u = "( ";
          for (let c = 0; c < r.clauses.length; c++) u += " this.makeBool(" + this.evaluateNodeToJavaScript(r.clauses[c].operand) + ")===true ? (" + this.evaluateNodeToJavaScript(r.clauses[c].value) + ") : ";
          r.else !== null ? u += this.evaluateNodeToJavaScript(r.else) : u += "null", u += " )";
        }
        return u;
      }
      case "parameter":
        return "this.lookup(" + JSON.stringify(r.value.toLowerCase()) + ",lookups)";
      case "expression-list": {
        let u = "[";
        for (const c of r.value) u !== "[" && (u += ","), u += this.evaluateNodeToJavaScript(c);
        return u += "]", u;
      }
      case "unary-expression":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(r.expr) + ")";
      case "binary-expression":
        switch (r.operator) {
          case "AND":
            return "this.ternaryAnd(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + " )";
          case "OR":
            return "this.ternaryOr(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + " )";
          case "IS":
            if (r.right.type !== "null") throw new v(d.UnsupportedIsRhs);
            return "this.equalsNull(" + this.evaluateNodeToJavaScript(r.left) + ")";
          case "ISNOT":
            if (r.right.type !== "null") throw new v(d.UnsupportedIsRhs);
            return "(!(this.equalsNull(" + this.evaluateNodeToJavaScript(r.left) + ")))";
          case "IN":
            return "this.applyIn(" + this.evaluateNodeToJavaScript(r.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(r.right) + "), timeZone)";
          case "NOT IN":
            return "this.ternaryNot(this.applyIn(" + this.evaluateNodeToJavaScript(r.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(r.right) + "), timeZone))";
          case "BETWEEN":
            return "this.between(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + ", timeZone)";
          case "NOTBETWEEN":
            return "this.notbetween(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + ", timeZone)";
          case "LIKE":
            return "this.applyLike(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + "," + JSON.stringify(r.escape) + ")";
          case "NOT LIKE":
            return "this.ternaryNot(this.applyLike(" + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + "," + JSON.stringify(r.escape) + "))";
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return "this.compare(" + JSON.stringify(r.operator) + "," + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + ", timeZone)";
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return "this.calculate(" + JSON.stringify(r.operator) + "," + this.evaluateNodeToJavaScript(r.left) + "," + this.evaluateNodeToJavaScript(r.right) + ", timeZone)";
        }
        throw new v(d.UnsupportedOperator, { operator: r.operator });
      case "null":
      case "boolean":
      case "string":
      case "number":
        return JSON.stringify(r.value);
      case "time":
        return "this.evaluateTime(" + JSON.stringify(r.value) + ")";
      case "date":
        return "this.evaluateDate(" + JSON.stringify(r.value) + ", 'unknown')";
      case "timestamp":
        return "this.evaluateTimestamp(" + JSON.stringify(r.value) + ", 'unknown')";
      case "current-time":
        return r.mode === "date" ? "this.currentDate(timeZone)" : "this.currentTimestamp(timeZone)";
      case "column-reference":
        return "this.featureValue(feature," + JSON.stringify(r.column) + ",fieldsIndex,attributeAdapter)";
      case "function":
        return "this.evaluateFunction(" + JSON.stringify(r.name) + "," + this.evaluateNodeToJavaScript(r.args) + ", timeZone)";
    }
    throw new v(d.UnsupportedSyntax, { node: r.type });
  }
  _evaluateNode(r, u, c, l) {
    let w;
    switch (r.type) {
      case "interval": {
        const h = this._evaluateNode(r.value, u, c, l);
        return C.createFromValueAndQualifier(h, r.qualifier, r.op);
      }
      case "case-expression":
        if (r.format === "simple") {
          const h = this._evaluateNode(r.operand, u, c, l);
          for (let e = 0; e < r.clauses.length; e++) if (q(h, this._evaluateNode(r.clauses[e].operand, u, c, l), "=", this.timeZone)) return this._evaluateNode(r.clauses[e].value, u, c, l);
          if (r.else !== null) return this._evaluateNode(r.else, u, c, l);
        } else {
          for (let h = 0; h < r.clauses.length; h++) if (Nn(this._evaluateNode(r.clauses[h].operand, u, c, l))) return this._evaluateNode(r.clauses[h].value, u, c, l);
          if (r.else !== null) return this._evaluateNode(r.else, u, c, l);
        }
        return null;
      case "parameter":
        return w = this.parameters[r.value.toLowerCase()], B(w) ? _.fromJSDate(w) : w instanceof Ls ? w.toDateTime() : w;
      case "expression-list": {
        const h = [];
        for (const e of r.value) h.push(this._evaluateNode(e, u, c, l));
        return h;
      }
      case "unary-expression":
        return xt(this._evaluateNode(r.expr, u, c, l));
      case "binary-expression":
        switch (r.operator) {
          case "AND":
            return Sn(this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l));
          case "OR":
            return On(this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l));
          case "IS":
            if (r.right.type !== "null") throw new v(d.UnsupportedIsRhs);
            return this._evaluateNode(r.left, u, c, l) === null;
          case "ISNOT":
            if (r.right.type !== "null") throw new v(d.UnsupportedIsRhs);
            return this._evaluateNode(r.left, u, c, l) !== null;
          case "IN": {
            const h = Wt(this._evaluateNode(r.right, u, c, l));
            return Kt(this._evaluateNode(r.left, u, c, l), h, this.timeZone);
          }
          case "NOT IN": {
            const h = Wt(this._evaluateNode(r.right, u, c, l));
            return xt(Kt(this._evaluateNode(r.left, u, c, l), h, this.timeZone));
          }
          case "BETWEEN": {
            const h = this._evaluateNode(r.left, u, c, l), e = this._evaluateNode(r.right, u, c, l);
            return h == null || e[0] == null || e[1] == null ? null : q(h, e[0], ">=", this.timeZone) && q(h, e[1], "<=", this.timeZone);
          }
          case "NOTBETWEEN": {
            const h = this._evaluateNode(r.left, u, c, l), e = this._evaluateNode(r.right, u, c, l);
            return h == null || e[0] == null || e[1] == null ? null : q(h, e[0], "<", this.timeZone) || q(h, e[1], ">", this.timeZone);
          }
          case "LIKE":
            return Xt(this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l), r.escape);
          case "NOT LIKE":
            return xt(Xt(this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l), r.escape));
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return q(this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l), r.operator, this.timeZone);
          case "-":
          case "+":
          case "*":
          case "/":
          case "||":
            return gn(r.operator, this._evaluateNode(r.left, u, c, l), this._evaluateNode(r.right, u, c, l), this.timeZone);
        }
      case "null":
      case "boolean":
      case "string":
      case "number":
        return r.value;
      case "date":
        return r.parsedValue ??= hn(r.value, "unknown"), r.parsedValue;
      case "timestamp":
        return r.parsedValue ??= At(r.value, "unknown"), r.parsedValue;
      case "time":
        return ee(r.value);
      case "current-time":
        return r.mode === "date" ? j.fromNow(this.timeZone) : Ct(/* @__PURE__ */ new Date(), this.timeZone);
      case "column-reference":
        return bn(u, r.column, this.fieldsIndex, c);
      case "data-type":
        return r.value;
      case "function": {
        if (this.isAggregate && nn(r.name, r.args.value.length)) {
          const e = [];
          for (const N of r.args?.value || []) {
            const O = [];
            for (const L of l || []) O.push(this._evaluateNode(N, L, c, null));
            e.push(O);
          }
          return Zs(r.name, e);
        }
        const h = this._evaluateNode(r.args, u, c, l);
        return ne(r.name, h, this.timeZone);
      }
    }
    throw new v(d.UnsupportedSyntax, { node: r.type });
  }
};
function Nn(i) {
  return i === !0;
}
function Wt(i) {
  return Array.isArray(i) ? i : [i];
}
function xt(i) {
  return i !== null ? i !== !0 : null;
}
function Sn(i, r) {
  return i != null && r != null ? i === !0 && r === !0 : i !== !1 && r !== !1 && null;
}
function On(i, r) {
  return i != null && r != null ? i === !0 || r === !0 : i === !0 || r === !0 || null;
}
function Kt(i, r, u) {
  if (i == null) return null;
  let c = !1;
  for (const l of r) if (l == null) c = null;
  else {
    if (i === l) {
      c = !0;
      break;
    }
    if (Gt(i) && Gt(l) && (c = q(i, l, "="), c)) break;
  }
  return c;
}
const sn = "-[]/{}()*+?.\\^$|";
var it;
function dc(i, r) {
  const u = r;
  let c = "", l = it.Normal;
  for (let w = 0; w < i.length; w++) {
    const h = i.charAt(w);
    switch (l) {
      case it.Normal:
        h === u ? l = it.Escaped : sn.includes(h) ? c += "\\" + h : c += h === "%" ? ".*" : h === "_" ? "." : h;
        break;
      case it.Escaped:
        sn.includes(h) ? c += "\\" + h : c += h, l = it.Normal;
    }
  }
  return new RegExp("^" + c + "$", "m");
}
function Xt(i, r, u) {
  return i == null ? null : dc(r, u).test(i);
}
function pc(i) {
  return i && typeof i.attributes == "object";
}
function bn(i, r, u, c) {
  const l = c.getAttribute(i, r), w = u?.get(r);
  return l == null || w?.type !== "esriFieldTypeDate" && w?.type !== "date" ? l == null || w?.type !== "esriFieldTypeDateOnly" && w?.type !== "date-only" ? l == null || w?.type !== "esriFieldTypeTimeOnly" && w?.type !== "time-only" ? l == null || w?.type !== "esriFieldTypeTimestampOffset" && w?.type !== "timestamp-offset" ? l : new J(l) : Q.fromReader(l) : j.fromReader(l) : Ct(new Date(l), u?.getLuxonTimeZone(w.name) ?? Us.utcInstance);
}
(function(i) {
  i[i.Normal = 0] = "Normal", i[i.Escaped = 1] = "Escaped";
})(it || (it = {}));
const ot = { getAttribute: (i, r) => (pc(i) ? i.attributes : i)[r] }, wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WhereClause: fc,
  defaultAttributeAdapter: ot
}, Symbol.toStringTag, { value: "Module" }));
export {
  fc as O,
  wc as W,
  G as a,
  v as n,
  J as r,
  hc as s,
  d as t
};
//# sourceMappingURL=WhereClause-DzsyYw2j.js.map
