import { defineComponent as e, useSlots as t, ref as l, computed as o, openBlock as s, createBlock as a, Transition as c, withCtx as n, withDirectives as i, createElementVNode as r, normalizeClass as p, createCommentVNode as f, normalizeStyle as m, renderSlot as u, createTextVNode as d, toDisplayString as _, createElementBlock as v, createVNode as y, withModifiers as w, vShow as h } from "vue";
import { M as I } from "./Icon-DoyirucZ.js";
import { t as b, _ as k, w as x } from "./utils-BtnR8Ttg.js";
const $ = { class: "m-alert_content" }, g = { class: "m-alert_description" }, B = { key: 0, class: "m-alert_close" }, M = x(k(e({ name: "MAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(e2, { expose: k2, emit: x2 }) {
  const M2 = e2, j = x2, A = t(), C = l(true), q = o(() => b.get(M2.type) ?? "circle-info"), z = o(() => M2.description || A.default);
  function D() {
    C.value = false, j("close");
  }
  return k2({ close: D, open: function() {
    C.value = true;
  } }), (e3, t2) => (s(), a(c, { name: "m-alert-fade" }, { default: n(() => [i(r("div", { class: p(["m-alert", { [`m-alert_${e3.type}`]: e3.type, [`m-alert_${e3.effect}`]: e3.effect, text_center: e3.center }]) }, [e3.showIcon ? (s(), a(I, { key: 0, class: p(["m-alert_icon", { "big-icon": z.value }]), icon: q.value }, null, 8, ["class", "icon"])) : f("", true), r("div", $, [r("span", { class: p(["m-alert_title", { "with-desc": z.value }]), style: m({ display: e3.center && !e3.showIcon ? "flow" : "inline" }) }, [u(e3.$slots, "title", {}, () => [d(_(e3.title), 1)], true)], 6), r("p", g, [u(e3.$slots, "default", {}, () => [d(_(e3.description), 1)], true)]), e3.closable ? (s(), v("div", B, [y(I, { onClick: w(D, ["stop"]), icon: "xmark" })])) : f("", true)])], 2), [[h, C.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-162b9223"]]));
export {
  M
};
