import { dd as u, df as f } from "./main-DZxT3i7S.js";
import { g as i } from "./locale-B98iGxBG.js";
const t = {};
async function d(e, s) {
  const a = `${s}_${e}`;
  return t[a] || (t[a] = fetch(f(`./assets/${s}/t9n/messages_${e}.json`)).then((n) => (n.ok || o(), n.json())).catch(() => o())), t[a];
}
function o() {
  throw new Error("could not fetch component message bundle");
}
function c(e) {
  e.messages = {
    ...e.defaultMessages,
    ...e.messageOverrides
  };
}
function M() {
}
async function m(e) {
  e.defaultMessages = await g(e, e.effectiveLocale), c(e);
}
async function g(e, s) {
  if (!u())
    return {};
  const { el: a } = e, r = a.tagName.toLowerCase().replace("calcite-", "");
  return d(i(s, "t9n"), r);
}
async function y(e, s) {
  e.defaultMessages = await g(e, s), c(e);
}
function C(e) {
  e.onMessagesChange = h;
}
function L(e) {
  e.onMessagesChange = M;
}
function h() {
  c(this);
}
export {
  C as c,
  L as d,
  m as s,
  y as u
};
//# sourceMappingURL=t9n-DqBq_VHu.js.map
