import { error } from "console";

export class TreeNode {
  data: string;
  allData: TreeData;
  childrenNodes: TreeNode[];
  parent: TreeNode | null;
  key?: number;
  level?: number;
  props: TreeOptionProps;
  store: TreeStore;

  constructor(option: TreeNodeOption) {
    this.data = option.data ?? "";
    this.allData = option.allData ?? [];
    this.level = option.level;
    this.childrenNodes = option.children ?? [];
    this.key = option.key;
    this.props = option.props;
    this.parent = option.parent;
    this.store = option.store;
  }

  initialize() {
    const store = this.store;
    if (!store) {
      throw new Error("[Node]store is required!");
    }

    const props = store.props;
    if (store.lazy && this.data) {
      this.setData(this.allData);
    }
  }

  setData(data: TreeData): void {
    this.allData = data;
    this.childrenNodes = [];

    let children = this.allData;
    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ addData: children[i] });
    }
  }

  insertChild(child: TreeNode) {
    if (!(child instanceof TreeNode)) {
      Object.assign(child, {
        parent: this,
        store: this.store,
      });
      child = new TreeNode(child as TreeOptionProps);
      if (child instanceof TreeNode) {
        child.initialize();
      }
    }
  }
}

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
  parent: TreeNode | null;
  props: TreeOptionProps;
  store: TreeStore;
}

export class TreeStore {
  root: TreeNode;
  data: TreeData;
  emptyText: string;
  load?: LoadFunction;
  highlightCurrent: boolean;
  defaultExpandAll: boolean;
  checkOnClickNode: boolean;
  showCheckbox: boolean;
  checkStrictly: boolean;
  accordion: boolean;
  indent: number;
  lazy?: boolean;
  expandOnClickNode: boolean;
  props: TreeOptionProps;

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
    this.expandOnClickNode = option.expandOnClickNode;
    this.props = option.props;
  }

  initialize() {
    this.root = new TreeNode({
      allData: this.data,
      props: this.props,
      parent: null,
      store: this,
    });
    this.root.initialize();
  }
}

export interface TreeStoreOption {
  data: TreeData;
  emptyText: string;
  load?: LoadFunction;
  highlightCurrent: boolean;
  defaultExpandAll: boolean;
  expandOnClickNode: boolean;
  checkOnClickNode: boolean;
  showCheckbox: boolean;
  checkStrictly: boolean;
  accordion: boolean;
  indent: number;
  lazy?: boolean;
  props: TreeOptionProps;
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
  children: string;
  label: string;
  disabled?: string;
}
