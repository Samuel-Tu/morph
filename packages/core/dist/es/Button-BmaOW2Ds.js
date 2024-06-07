import { defineComponent as e, useSlots as o, inject as t, ref as a, computed as l, openBlock as i, createBlock as s, resolveDynamicComponent as n, normalizeClass as u, unref as d, withCtx as p, renderSlot as c, createVNode as r, normalizeStyle as y, createCommentVNode as v, provide as m, reactive as b, toRef as f, createElementBlock as g } from "vue";
import { M as B } from "./Icon-CRqHfNQB.js";
import { t as _ } from "./vendor-Bz4w7tIK.js";
import { _ as z, w as T } from "./utils-452ulj7c.js";
const x = Symbol("BUTTON_GROUP_CTX_KEY"), h = z(e({ name: "MButton", __name: "Button", props: { tag: { default: "button" }, type: {}, size: {}, nativeType: { default: "button" }, disabled: { type: Boolean }, loading: { type: Boolean }, icon: {}, circle: { type: Boolean }, plain: { type: Boolean }, round: { type: Boolean }, autofocus: { type: Boolean }, loadingIcon: {}, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 } }, emits: ["click"], setup(e2, { expose: m2, emit: b2 }) {
  const f2 = e2, g2 = b2, z2 = o(), T2 = t(x, void 0), h2 = a(), k2 = l(() => (T2 == null ? void 0 : T2.size) ?? (f2 == null ? void 0 : f2.size) ?? ""), I2 = l(() => (T2 == null ? void 0 : T2.type) ?? (f2 == null ? void 0 : f2.type) ?? ""), $2 = l(() => (T2 == null ? void 0 : T2.disabled) || (f2 == null ? void 0 : f2.disabled) || false), M2 = l(() => ({ marginRight: z2.default ? "6px" : "0px" })), j = (e3) => g2("click", e3), G = _(j, f2.throttleDuration, { trailing: false });
  return m2({ ref: h2, disabled: $2, size: k2, type: I2 }), (e3, o2) => (i(), s(n(e3.tag), { ref: h2.value, class: u(["m-button", { [`m-button--${I2.value}`]: I2.value, [`m-button--${k2.value}`]: k2.value, "is-loading": e3.loading, "is-circle": e3.circle, "is-plain": e3.plain, "is-round": e3.round, "is-disabled": $2.value }]), autofocus: e3.autofocus, type: "button" === e3.tag ? e3.nativeType : void 0, disabled: !(!$2.value && !e3.loading) || void 0, onClick: o2[0] || (o2[0] = (o3) => e3.useThrottle ? d(G)(o3) : j(o3)) }, { default: p(() => [e3.loading ? c(e3.$slots, "loading", { key: 0 }, () => [r(B, { class: "loading-icon", icon: e3.loadingIcon ?? "spinner", spin: "", style: y(M2.value), size: "1x" }, null, 8, ["icon", "style"])], true) : v("", true), e3.icon && !e3.loading ? (i(), s(B, { key: 1, icon: e3.icon, size: "1x", style: y(M2.value) }, null, 8, ["icon", "style"])) : v("", true), c(e3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["autofocus", "type", "disabled", "class"]));
} }), [["__scopeId", "data-v-c85d797a"]]), k = { class: "m-button-group" }, I = z(e({ name: "MButtonGroup", __name: "ButtonGroup", props: { size: {}, type: {}, disabled: { type: Boolean } }, setup(e2) {
  const o2 = e2;
  return m(x, b({ size: f(o2, "size"), type: f(o2, "type"), disabled: f(o2, "disabled") })), (e3, o3) => (i(), g("div", k, [c(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-e0351486"]]), $ = T(h), M = T(I);
export {
  $ as M,
  M as a
};
