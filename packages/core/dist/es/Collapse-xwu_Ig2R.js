import { defineComponent as e, ref as a, watchEffect as l, watch as t, provide as s, openBlock as o, createElementBlock as i, renderSlot as d, inject as n, computed as c, normalizeClass as m, createElementVNode as r, createTextVNode as p, toDisplayString as u, createVNode as v, Transition as h, mergeProps as _, toHandlers as f, unref as b, withCtx as g, withDirectives as y, vShow as C } from "vue";
import { d as I, _ as $, w as V } from "./utils-BtnR8Ttg.js";
import { M as w } from "./Icon-DoyirucZ.js";
const x = Symbol("COLLAPSE_CTX_KEY"), E = { class: "m-collapse" }, L = "MCollapse", M = $(e({ name: L, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e2, { emit: n2 }) {
  const c2 = e2, m2 = n2, r2 = a(c2.modelValue);
  function p2(e3) {
    r2.value = e3, m2("update:modelValue", e3), m2("change", e3);
  }
  return l(() => {
    c2.accordion && r2.value.length > 1 && I(L, "accordion mode should only have one active item");
  }), t(() => c2.modelValue, (e3) => p2(e3)), s(x, { activeNames: r2, handleItemClick: function(e3) {
    let a2 = [...r2.value];
    if (c2.accordion)
      return a2 = [a2[0] === e3 ? "" : e3], void p2(a2);
    const l2 = a2.indexOf(e3);
    l2 > -1 ? a2.splice(l2, 1) : a2.push(e3), p2(a2);
  } }), (e3, a2) => (o(), i("div", E, [d(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-d6402ba4"]]), k = (e2) => e2.style.height = "0px", j = (e2) => e2.style.height = `${e2.scrollHeight}px`, B = (e2) => e2.style.height = "", N = (e2) => e2.style.overflow = "hidden", O = (e2) => e2.style.overflow = "", S = { beforeEnter(e2) {
  k(e2), N(e2);
}, enter: (e2) => j(e2), afterEnter(e2) {
  B(e2), O(e2);
}, beforeLeave(e2) {
  j(e2), N(e2);
}, leave: (e2) => k(e2), afterLeave(e2) {
  B(e2), O(e2);
} }, A = ["id"], H = { class: "m-collapse-item__title" }, K = { class: "m-collapse-item__wrapper" }, P = ["id"], T = $(e({ name: "MCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e2) {
  const a2 = e2, l2 = n(x, void 0), t2 = c(() => {
    var _a;
    return (_a = l2 == null ? void 0 : l2.activeNames.value) == null ? void 0 : _a.includes(a2.name);
  });
  function s2() {
    a2.disabled || (l2 == null ? void 0 : l2.handleItemClick(a2.name));
  }
  return (e3, a3) => (o(), i("div", { class: m(["m-collapse-item", { "is-disabled": e3.disabled }]) }, [r("div", { class: m(["m-collapse-item__header", { "is-disabled": e3.disabled, "is-active": t2.value }]), id: `item-header-${e3.name}`, onClick: s2 }, [r("span", H, [d(e3.$slots, "title", {}, () => [p(u(e3.title), 1)], true)]), v(w, { icon: "angle-right", class: "header-angle" })], 10, A), v(h, _({ name: "slide" }, f(b(S))), { default: g(() => [y(r("div", K, [r("div", { class: "m-collapse-item__content", id: `item-content-${e3.name}` }, [d(e3.$slots, "default", {}, void 0, true)], 8, P)], 512), [[C, t2.value]])]), _: 3 }, 16)], 2));
} }), [["__scopeId", "data-v-d35281f8"]]), X = V(M), Y = V(T);
export {
  X as M,
  Y as a
};
