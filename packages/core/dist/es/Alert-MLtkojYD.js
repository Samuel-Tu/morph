import { defineComponent as e, useSlots as t, ref as l, computed as o, openBlock as s, createBlock as a, Transition as c, withCtx as n, withDirectives as i, createElementVNode as r, normalizeClass as p, createCommentVNode as f, normalizeStyle as m, renderSlot as d, createTextVNode as u, toDisplayString as _, createElementBlock as v, createVNode as y, withModifiers as w, vShow as h } from "vue";
import { M as I } from "./Icon-DoyirucZ.js";
import { t as k, _ as x, w as $ } from "./utils-BtnR8Ttg.js";
const b = { class: "m-alert_content" }, g = { class: "m-alert_description" }, B = { key: 0, class: "m-alert_close" }, M = $(x(e({ name: "MAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(e2, { expose: x2, emit: $2 }) {
  const M2 = e2, j = $2, A = t(), C = l(true), q = o(() => k.get(M2.type) ?? "circle-info"), z = o(() => M2.description || A.default);
  function D() {
    C.value = false, j("close");
  }
  return x2({ close: D, open: function() {
    C.value = true;
  } }), (e3, t2) => (s(), a(c, { name: "m-alert-fade" }, { default: n(() => [i(r("div", { class: p(["m-alert", { [`m-alert_${e3.type}`]: e3.type, [`m-alert_${e3.effect}`]: e3.effect, "text-center": e3.center }]) }, [e3.showIcon ? (s(), a(I, { key: 0, class: p(["m-alert_icon", { "big-icon": z.value }]), icon: q.value }, null, 8, ["class", "icon"])) : f("", true), r("div", b, [r("span", { class: p(["m-alert_title", { "with-desc": z.value }]), style: m({ display: e3.center && !e3.showIcon ? "flow" : "inline" }) }, [d(e3.$slots, "title", {}, () => [u(_(e3.title), 1)], true)], 6), r("p", g, [d(e3.$slots, "default", {}, () => [u(_(e3.description), 1)], true)]), e3.closable ? (s(), v("div", B, [y(I, { onClick: w(D, ["stop"]), icon: "xmark" })])) : f("", true)])], 2), [[h, C.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-d6c51e31"]]));
export {
  M
};
