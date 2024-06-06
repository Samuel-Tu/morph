import { defineComponent as g, ref as $, watchEffect as V, watch as S, provide as k, openBlock as y, createElementBlock as E, renderSlot as r, inject as H, computed as L, normalizeClass as p, createElementVNode as d, createTextVNode as M, toDisplayString as N, createVNode as _, Transition as O, mergeProps as B, toHandlers as T, unref as P, withCtx as A, withDirectives as D, vShow as K } from "vue";
import { _ as w } from "./Button-Dfi15w6v.js";
import { _ as X } from "./Icon-D3n01b7X.js";
import { w as b } from "./utils-C1ZxNSfk.js";
const I = Symbol("COLLAPSE_CTX_KEY"), Y = { class: "m-collapse" }, j = /* @__PURE__ */ g({
  name: "MCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const s = e, i = n, l = $(s.modelValue);
    V(() => {
      s.accordion && l.value.length > 1 && console.warn("accordion mode should only have one active item");
    });
    function t(o) {
      let a = [...l.value];
      if (s.accordion) {
        a = [a[0] === o ? "" : o], c(a);
        return;
      }
      const m = a.indexOf(o);
      m > -1 ? a.splice(m, 1) : a.push(o), c(a);
    }
    function c(o) {
      l.value = o, i("update:modelValue", o), i("change", o);
    }
    return S(
      () => s.modelValue,
      (o) => c(o)
    ), k(I, {
      activeNames: l,
      handleItemClick: t
    }), (o, a) => (y(), E("div", Y, [
      r(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}), z = /* @__PURE__ */ w(j, [["__scopeId", "data-v-cfeda316"]]), h = (e) => e.style.height = "0px", u = (e) => e.style.height = `${e.scrollHeight}px`, f = (e) => e.style.height = "", v = (e) => e.style.overflow = "hidden", C = (e) => e.style.overflow = "", Z = {
  beforeEnter(e) {
    h(e), v(e);
  },
  enter: (e) => u(e),
  afterEnter(e) {
    f(e), C(e);
  },
  beforeLeave(e) {
    u(e), v(e);
  },
  leave: (e) => h(e),
  afterLeave(e) {
    f(e), C(e);
  }
}, q = ["id"], F = { class: "m-collapse-item__title" }, G = { class: "m-collapse-item__wrapper" }, J = ["id"], Q = /* @__PURE__ */ g({
  name: "MCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const n = e, s = H(I, void 0), i = L(() => {
      var t;
      return (t = s == null ? void 0 : s.activeNames.value) == null ? void 0 : t.includes(n.name);
    });
    function l() {
      n.disabled || s == null || s.handleItemClick(n.name);
    }
    return (t, c) => (y(), E("div", {
      class: p(["m-collapse-item", {
        "is-disabled": t.disabled
      }])
    }, [
      d("div", {
        class: p(["m-collapse-item__header", {
          "is-disabled": t.disabled,
          "is-active": i.value
        }]),
        id: `item-header-${t.name}`,
        onClick: l
      }, [
        d("span", F, [
          r(t.$slots, "title", {}, () => [
            M(N(t.title), 1)
          ], !0)
        ]),
        _(X, {
          icon: "angle-right",
          class: "header-angle"
        })
      ], 10, q),
      _(O, B({ name: "slide" }, T(P(Z))), {
        default: A(() => [
          D(d("div", G, [
            d("div", {
              class: "m-collapse-item__content",
              id: `item-content-${t.name}`
            }, [
              r(t.$slots, "default", {}, void 0, !0)
            ], 8, J)
          ], 512), [
            [K, i.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
}), R = /* @__PURE__ */ w(Q, [["__scopeId", "data-v-d35281f8"]]), te = b(z), oe = b(R);
export {
  te as M,
  oe as a
};
