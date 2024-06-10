import { TreeNode } from "./node";
import type { TreeData, TreeStoreNodesMap, TreeKey } from "../types";
import type { LoadFunction, TreeStoreOptions, TreeOptionProps } from "../types";

export default class TreeStore {
  currentNode?: TreeNode | null;
  root: TreeNode;
  data: TreeData;
  lazy: boolean;
  load: LoadFunction;
  props: TreeOptionProps;
  checkStrictly: boolean;
  nodesMap: TreeStoreNodesMap;
  key: TreeKey;

  constructor(options: TreeStoreOptions) {
    this.currentNode = null;
    this.root = null;
    this.key = options.key;
    this.data = options.data;
    this.lazy = options.lazy;
    this.load = options.load;
    this.props = options.props;
    this.checkStrictly = options.checkStrictly;
    this.nodesMap = {};
  }

  initialize() {
    this.root = new TreeNode({
      data: this.data,
      store: this,
    });
    this.root.initialize();
  }

  registerNode(node: TreeNode): void {
    const key = this.key;
    if (!node || !node.data) return;
    if (!key) {
      this.nodesMap[node.id] = node;
    } else {
      const nodeKey = node.key;
      if (nodeKey !== undefined) this.nodesMap[node.key] = node;
    }
  }
}
