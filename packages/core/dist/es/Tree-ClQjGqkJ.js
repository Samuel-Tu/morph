import { defineComponent as e, openBlock as t, createElementBlock as a, toDisplayString as s, ref as o, watch as i, createElementVNode as l, Fragment as d, renderList as r, createBlock as n } from "vue";
import { _ as h, w as c } from "./utils-452ulj7c.js";
const p = { class: "m-tree-node" }, u = h(e({ name: "MTreeNode", __name: "TreeNode", props: { node: {} }, setup(e2) {
  const o2 = e2;
  return (e3, i2) => (t(), a("div", p, s(o2.node), 1));
} }), [["__scopeId", "data-v-3bc9157e"]]);
let y = 0;
class k {
  constructor(e2) {
    this.id = y++, this.text = null, this.checked = false, this.data = e2.data, this.expanded = false, this.parent = e2.parent ? e2.parent : null, this.store = e2.store, this.visible = true, this.isCurrent = false, this.level = e2.parent ? e2.parent.level + 1 : 0, this.loaded = false, this.childNodes = [], this.loading = false;
  }
  initialize() {
    if (!this.store)
      throw new Error("[Node]store is required!");
  }
  get key() {
    const e2 = this.store.key;
    return this.data ? this.data[e2] : null;
  }
}
class f {
  constructor(e2) {
    this.currentNode = null, this.root = null, this.key = e2.key, this.data = e2.data, this.lazy = e2.lazy, this.load = e2.load, this.props = e2.props, this.checkStrictly = e2.checkStrictly, this.nodesMap = {};
  }
  initialize() {
    this.root = new k({ data: this.data, store: this }), this.root.initialize();
  }
  registerNode(e2) {
    const t2 = this.key;
    e2 && e2.data && (t2 ? void 0 !== e2.key && (this.nodesMap[e2.key] = e2) : this.nodesMap[e2.id] = e2);
  }
}
const v = { class: "m-tree" }, m = c(h(e({ name: "MTree", __name: "Tree", props: { data: { default: () => [] }, emptyText: { default: "noData" }, nodeKey: {}, props: { default: () => ({ children: "children", label: "label", disabled: "disabled" }) }, lazy: { type: Boolean, default: false }, load: {}, highlightCurrent: { type: Boolean, default: true }, showCheckbox: { type: Boolean, default: false }, checkStrictly: { type: Boolean, default: true }, accordion: { type: Boolean, default: false }, indent: { default: 18 }, draggable: { type: Boolean, default: false } }, setup(e2) {
  const h2 = e2, c2 = o(new f({ key: h2.nodeKey, data: h2.data, lazy: h2.lazy, load: h2.load, props: h2.props, checkStrictly: h2.checkStrictly }));
  c2.value.initialize();
  const p2 = o(c2.value.root);
  return i(() => h2.data, (e3) => {
  }, { deep: true }), (e3, o2) => {
    var _a;
    return t(), a("div", v, [l("span", null, s(c2.value), 1), (t(true), a(d, null, r((_a = p2.value) == null ? void 0 : _a.data, (e4) => (t(), n(u, { node: e4 }, null, 8, ["node"]))), 256))]);
  };
} }), [["__scopeId", "data-v-81146e5a"]])), z = c(u);
export {
  m as M,
  z as a
};
