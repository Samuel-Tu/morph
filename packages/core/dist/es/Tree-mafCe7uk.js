import { defineComponent as t, ref as e, openBlock as a, createElementBlock as i, createElementVNode as s, toDisplayString as l } from "vue";
import { _ as n, w as o } from "./utils-452ulj7c.js";
let r = class t2 {
  constructor(t3) {
    this.data = t3.data ?? "", this.allData = t3.allData ?? [], this.level = t3.level, this.childrenNodes = t3.children ?? [], this.key = t3.key, this.props = t3.props, this.parent = t3.parent;
  }
  initialize(e2, a2, i2) {
    var _a, _b;
    for (let s2 = 0; s2 < this.allData.length; s2++) {
      const l2 = this.allData[s2], n2 = new t2({ allData: l2[((_a = this.props) == null ? void 0 : _a.children) ?? ""], data: ((_b = this.props) == null ? void 0 : _b.label) ?? "", level: e2 + 1, key: a2 + s2 + 1, parent: i2, props: this.props });
      this.childrenNodes.push(n2), n2.initialize(e2 + 1, a2 + s2 + 1, this);
    }
  }
};
class h {
  constructor(t3) {
    this.data = t3.data, this.emptyText = t3.emptyText, this.load = t3.load, this.highlightCurrent = t3.highlightCurrent, this.defaultExpandAll = t3.defaultExpandAll, this.checkOnClickNode = t3.checkOnClickNode, this.showCheckbox = t3.showCheckbox, this.checkStrictly = t3.checkStrictly, this.accordion = t3.accordion, this.indent = t3.indent, this.lazy = t3.lazy, this.expandOnClickNode = t3.expandOnClickNode, this.props = t3.props;
  }
  initialize() {
    this.root = new r({ allData: this.data, props: this.props, parent: null }), this.root.initialize(0, 0, null);
  }
}
const c = t({ name: "MTree", props: { data: Object, default: () => [] }, setup(t3, a2) {
  const i2 = e(new h({ data: t3.data, emptyText: "no Data", highlightCurrent: true, defaultExpandAll: false, checkOnClickNode: false, showCheckbox: false, checkStrictly: false, accordion: false, indent: 18, expandOnClickNode: false, props: { children: "children", label: "label" } }));
  return i2.value.initialize(), { store: i2 };
} }), d = { class: "m-tree" }, p = n(c, [["render", function(t3, e2, n2, o2, r2, h2) {
  return a(), i("div", d, [s("span", null, l(t3.store), 1)]);
}], ["__scopeId", "data-v-2b8c620e"]]), u = { class: "m-tree-node" }, k = n(t({ name: "MTreeNode", __name: "TreeNode", props: { node: {} }, setup(t3) {
  const e2 = t3;
  return (t4, s2) => (a(), i("div", u, l(e2.node), 1));
} }), [["__scopeId", "data-v-c6518f46"]]), x = o(p), m = o(k);
export {
  x as M,
  r as T,
  m as a,
  h as b
};
