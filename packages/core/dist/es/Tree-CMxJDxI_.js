import { defineComponent as a, openBlock as e, createElementBlock as t, toDisplayString as s, ref as o, createElementVNode as n, Fragment as r, renderList as d, createBlock as l } from "vue";
import { _ as c, w as u } from "./utils-452ulj7c.js";
let p = class {
  constructor(a2) {
    this.data = a2.data, this.children = [], this.parent = null;
  }
};
class i {
  constructor(a2) {
    this.root = new p({ data: a2.data });
  }
}
const m = { class: "m-tree-node" }, _ = c(a({ name: "MTreeNode", __name: "TreeNode", props: { node: {} }, setup(a2) {
  const o2 = a2;
  return (a3, n2) => (e(), t("div", m, s(o2.node), 1));
} }), [["__scopeId", "data-v-c6518f46"]]), v = { class: "m-tree" }, h = u(c(a({ name: "MTree", __name: "Tree", props: { data: {} }, setup(a2) {
  const c2 = o(new i({ data: a2.data })), u2 = o(c2.value.root);
  return (a3, o2) => (e(), t("div", v, [n("span", null, s(c2.value), 1), (e(true), t(r, null, d(u2.value.data, (a4) => (e(), l(_, { node: a4 }, null, 8, ["node"]))), 256))]));
} }), [["__scopeId", "data-v-01826a49"]])), T = u(_);
export {
  h as M,
  p as T,
  T as a,
  i as b
};
