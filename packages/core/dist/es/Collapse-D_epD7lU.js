import { defineComponent as u, ref as V, watch as $, provide as b, openBlock as v, createElementBlock as h, renderSlot as m, inject as g, computed as k, normalizeClass as p, createElementVNode as c, createTextVNode as w, toDisplayString as E, createVNode as _, Transition as S, withCtx as y, withDirectives as M, vShow as N } from "vue";
import { _ as f } from "./Button-Dfi15w6v.js";
import { _ as B } from "./Icon-D3n01b7X.js";
import { w as C } from "./utils-C1ZxNSfk.js";
const I = Symbol("COLLAPSE_CTX_KEY"), L = { class: "m-collapse" }, T = /* @__PURE__ */ u({
  name: "MCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(d, { emit: l }) {
    const a = d, i = l, s = V(a.modelValue);
    a.accordion && s.value.length > 1 && console.warn("accordion mode should only have one active item");
    function e(o) {
      let t = [...s.value];
      if (a.accordion) {
        t = [t[0] === o ? "" : o], n(t);
        return;
      }
      const r = t.indexOf(o);
      r > -1 ? t.splice(r, 1) : t.push(o), n(t);
    }
    function n(o) {
      s.value = o, i("update:modelValue", o), i("change", o);
    }
    return $(
      () => a.modelValue,
      (o) => n(o)
    ), b(I, {
      activeNames: s,
      handleItemClick: e
    }), (o, t) => (v(), h("div", L, [
      m(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}), O = /* @__PURE__ */ f(T, [["__scopeId", "data-v-39894a48"]]), A = ["id"], D = { class: "m-collapse-item__title" }, K = { class: "m-collapse-item__wrapper" }, P = ["id"], X = /* @__PURE__ */ u({
  name: "MCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(d) {
    const l = d, a = g(I, void 0), i = k(() => {
      var e;
      return (e = a == null ? void 0 : a.activeNames.value) == null ? void 0 : e.includes(l.name);
    });
    function s() {
      l.disabled || a == null || a.handleItemClick(l.name);
    }
    return (e, n) => (v(), h("div", {
      class: p(["m-collapse-item", {
        "is-disabled": e.disabled
      }])
    }, [
      c("div", {
        class: p(["m-collapse-item__header", {
          "is-disabled": e.disabled,
          "is-active": i.value
        }]),
        id: `item-header-${e.name}`,
        onClick: s
      }, [
        c("span", D, [
          m(e.$slots, "title", {}, () => [
            w(E(e.title), 1)
          ], !0)
        ]),
        _(B, { icon: "angle-right" })
      ], 10, A),
      _(S, { name: "slide" }, {
        default: y(() => [
          M(c("div", K, [
            c("div", {
              class: "m-collapse-item__content",
              id: `item-content-${e.name}`
            }, [
              m(e.$slots, "default", {}, void 0, !0)
            ], 8, P)
          ], 512), [
            [N, i.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Y = /* @__PURE__ */ f(X, [["__scopeId", "data-v-a7ed3e27"]]), G = C(O), H = C(Y);
export {
  G as M,
  H as a
};
