import { defineComponent as t, ref as e, onBeforeMount as a, openBlock as l, createElementBlock as o, toDisplayString as r } from "vue";
import { w as i } from "./utils-452ulj7c.js";
class s {
  constructor(t2) {
    this.currentNode = null, this.root = null, this.data = t2.data, this.lazy = t2.lazy, this.load = t2.load, this.checkStrictly = t2.checkStrictly, this.props = t2.props;
  }
  initialize() {
  }
}
const c = { class: "m-tree" }, d = i(t({ name: "MTree", __name: "Tree", props: { data: { default: () => [] }, emptyText: { default: "noData" }, nodeKey: {}, props: {}, lazy: { type: Boolean, default: false }, load: {}, highlightCurrent: { type: Boolean, default: true }, showCheckbox: { type: Boolean, default: false }, checkStrictly: { type: Boolean, default: true }, accordion: { type: Boolean, default: false }, indent: { default: 18 }, draggable: { type: Boolean, default: false } }, setup(t2) {
  const i2 = t2, d2 = e(new s({ data: i2.data, lazy: i2.lazy, load: i2.load, props: i2.props, checkStrictly: i2.checkStrictly }));
  return a(() => {
    d2.value.initialize();
  }), (t3, e2) => (l(), o("div", c, r(d2.value), 1));
} }));
export {
  d as M
};
