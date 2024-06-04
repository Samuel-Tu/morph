import { defineComponent as z, useSlots as M, inject as O, ref as S, computed as s, openBlock as p, createBlock as g, resolveDynamicComponent as N, normalizeClass as R, unref as U, withCtx as w, renderSlot as m, createVNode as D, normalizeStyle as _, createCommentVNode as h, provide as E, reactive as K, toRef as c, createElementBlock as P } from "vue";
import { _ as k } from "./Icon-D3n01b7X.js";
import { t as V } from "./vendor-BVNR0mO6.js";
import { w as T } from "./utils-C1ZxNSfk.js";
const C = Symbol(
  "BUTTON_GROUP_CTX_KEY"
), X = /* @__PURE__ */ z({
  name: "MButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    nativeType: { default: "button" },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    icon: {},
    circle: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean },
    autofocus: { type: Boolean },
    loadingIcon: {},
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(a, { expose: n, emit: l }) {
    const t = a, i = l, G = M(), o = O(C, void 0), f = S(), u = s(() => (o == null ? void 0 : o.size) ?? (t == null ? void 0 : t.size) ?? ""), r = s(() => (o == null ? void 0 : o.type) ?? (t == null ? void 0 : t.type) ?? ""), d = s(() => (o == null ? void 0 : o.disabled) || (t == null ? void 0 : t.disabled) || !1), y = s(() => ({ marginRight: G.default ? "6px" : "0px" })), v = (e) => i("click", e), I = V(v, t.throttleDuration, { trailing: !1 });
    return n({
      ref: f,
      disabled: d,
      size: u,
      type: r
    }), (e, B) => (p(), g(N(e.tag), {
      ref: f.value,
      class: R(["m-button", {
        [`m-button--${r.value}`]: r.value,
        [`m-button--${u.value}`]: u.value,
        "is-loading": e.loading,
        "is-circle": e.circle,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-disabled": d.value
      }]),
      autofocus: e.autofocus,
      type: e.tag === "button" ? e.nativeType : void 0,
      disabled: d.value || e.loading ? !0 : void 0,
      onClick: B[0] || (B[0] = (b) => e.useThrottle ? U(I)(b) : v(b))
    }, {
      default: w(() => [
        e.loading ? m(e.$slots, "loading", { key: 0 }, () => [
          D(k, {
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            spin: "",
            style: _(y.value),
            size: "1x"
          }, null, 8, ["icon", "style"])
        ], !0) : h("", !0),
        e.icon && !e.loading ? (p(), g(k, {
          key: 1,
          icon: e.icon,
          size: "1x",
          style: _(y.value)
        }, null, 8, ["icon", "style"])) : h("", !0),
        m(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["autofocus", "type", "disabled", "class"]));
  }
}), $ = (a, n) => {
  const l = a.__vccOpts || a;
  for (const [t, i] of n)
    l[t] = i;
  return l;
}, Y = /* @__PURE__ */ $(X, [["__scopeId", "data-v-7e378f48"]]), j = { class: "m-button-group" }, q = /* @__PURE__ */ z({
  name: "MButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const n = a;
    return E(
      C,
      K({
        size: c(n, "size"),
        type: c(n, "type"),
        disabled: c(n, "disabled")
      })
    ), (l, t) => (p(), P("div", j, [
      m(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), A = /* @__PURE__ */ $(q, [["__scopeId", "data-v-6cb18ea1"]]), Q = T(Y), W = T(A);
export {
  Q as M,
  W as a
};
