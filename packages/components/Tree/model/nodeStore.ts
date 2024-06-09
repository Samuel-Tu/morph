import { TreeNode } from "./node";
import type { TreeData } from "../types";
import type { LoadFunction, TreeStoreOptions, TreeOptionProps } from "../types";

export default class TreeStore {
  currentNode?: TreeNode | null;
  root: TreeNode | null;
  data: TreeData;
  lazy: boolean;
  load: LoadFunction;
  props: TreeOptionProps;
  checkStrictly: boolean;

  constructor(options: TreeStoreOptions) {
    this.currentNode = null;
    this.root = null;
    this.data = options.data;
    this.lazy = options.lazy;
    this.load = options.load;
    this.checkStrictly = options.checkStrictly;
    this.props = options.props;
  }

  initialize() {
    this.root = new TreeNode({
      data: this.data,
      store: this,
    });
  }
}
