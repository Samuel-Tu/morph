export class TreeNode {
  data: string;
  allData: TreeData;
  childrenNodes: TreeNode[] | [];
  parent: TreeNode | null;
  key?: number;
  level?: number;
  props?: TreeOptionProps;

  constructor(option: TreeNodeOption) {
    this.data = option.data ?? "";
    this.allData = option.allData ?? [];
    this.level = option.level;
    this.childrenNodes = option.children ?? [];
    this.key = option.key;
    this.parent = null;
  }

  initialize() {
    for (let i = 0; i < this.allData.length; i++) {
      const childrenNode = new TreeNode({
        allData: this.allData[i] as TreeData,
        data: this.props?.label,
        level: ++level,
        key: ++key,
      });
    }
  }
}

let key = 0;
let level = 0;

export type TreeData = TreeNodeData[];

export interface TreeNodeData {
  [key: string]: any;
}

export interface TreeNodeOption {
  data?: string;
  allData?: TreeData;
  children?: TreeNode[];
  level?: number;
  key?: number;
}

export class TreeStore {
  root: TreeNode;
  data: TreeData;
  emptyText: string;
  load: LoadFunction;
  highlightCurrent: boolean;
  defaultExpandAll: boolean;
  checkOnClickNode: boolean;
  showCheckbox: boolean;
  checkStrictly: boolean;
  accordion: boolean;
  indent: number;
  lazy: boolean;

  constructor(option: TreeStoreOption) {
    this.data = option.data;
    this.emptyText = option.emptyText;
    this.load = option.load;
    this.highlightCurrent = option.highlightCurrent;
    this.defaultExpandAll = option.defaultExpandAll;
    this.checkOnClickNode = option.checkOnClickNode;
    this.showCheckbox = option.showCheckbox;
    this.checkStrictly = option.checkStrictly;
    this.accordion = option.accordion;
    this.indent = option.indent;
    this.lazy = option.lazy;
  }

  initialize() {
    this.root = new TreeNode({
      allData: this.data,
    });
    this.root.initialize();
  }
}

export interface TreeStoreOption {
  data: TreeData;
  emptyText: string;
  load: LoadFunction;
  highlightCurrent: boolean;
  defaultExpandAll: boolean;
  expandOnClickNode: boolean;
  checkOnClickNode: boolean;
  showCheckbox: boolean;
  checkStrictly: boolean;
  accordion: boolean;
  indent: number;
  lazy: boolean;
}

export interface TreeProps {
  data: TreeData;
}

export interface TreeNodeProps {
  node: TreeNode;
}

export type LoadFunction = (
  rootNode: TreeNode,
  loadedCallback: (data: TreeData) => void
) => void;

export interface TreeNodeLoadedDefaultProps {
  checked?: boolean;
}

export interface TreeOptionProps {
  children?: string;
  label?: string;
  disabled?: string;
}
