import type { TreeNodeData, TreeNodeOptions } from "../types";
import TreeStore from "./nodeStore";
let nodeIdSeed = 0;

export class TreeNode {
  id: number;
  text: string | null;
  checked: boolean;
  data: TreeNodeData;
  expanded: boolean;
  parent: TreeNode | null;
  visible: boolean;
  isCurrent: boolean;
  level: number;
  loaded: boolean;
  childNodes: TreeNode[];
  loading: boolean;
  isLeaf?: boolean;
  store: TreeStore;
  // [key: string]: any;

  constructor(options: TreeNodeOptions) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.data = options.data;
    this.expanded = false;
    this.parent = options.parent ? options.parent : null;
    this.visible = true;
    this.isCurrent = false;
    this.store = options.store;
    this.level = options.parent ? options.parent.level + 1 : 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;
  }
}
