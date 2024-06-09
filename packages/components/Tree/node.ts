import type { TreeNodeData, TreeOptionProps } from "./types";

let nodeIdSeed = 0;

export class TreeNode {
  id: number;
  text: string | null;
  checked: boolean;
  data: TreeNodeData | null;
  expanded: boolean;
  parent: TreeNode | null;
  visible: boolean;
  isCurrent: boolean;
  level: number;
  loaded: boolean;
  childNodes: TreeNode[];
  loading: boolean;
  // [key: string]: any;

  constructor(options: TreeOptionProps) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;

    Object.assign(this, options);

    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }
  }
}
