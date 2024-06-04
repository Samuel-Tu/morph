import { defineComponent as l, computed as t, openBlock as r, createElementBlock as s, mergeProps as i, createVNode as c, unref as m, normalizeProps as y, guardReactiveProps as B } from "vue";
import { FontAwesomeIcon as u } from "@fortawesome/vue-fontawesome";
import { o as f } from "./vendor-BVNR0mO6.js";
import { w as d } from "./utils-C1ZxNSfk.js";
const v = /* @__PURE__ */ l({
  name: "MIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(n) {
    const o = n, a = t(() => f(o, ["type", "color"])), p = t(() => ({ color: o.color ?? void 0 }));
    return (e, I) => (r(), s("i", i({
      class: ["m-icon", {
        [`m-icon--${e.type}`]: e.type
      }],
      style: p.value
    }, e.$attrs), [
      c(m(u), y(B(a.value)), null, 16)
    ], 16));
  }
}), w = d(v);
export {
  w as M,
  v as _
};
