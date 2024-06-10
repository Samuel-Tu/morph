import { TreeNode } from "./model/node";
import TreeStore from "./model/nodeStore";
export interface TreeNodeData {
  [key: string]: any;
}

export type TreeData = TreeNodeData[];

export interface TreeOptionProps {
  children?: string;
  label?: string | ((data: TreeNodeData, node: TreeNode) => string);
  disabled?: string | ((data: TreeNodeData, node: TreeNode) => boolean);
  isLeaf?: string | ((data: TreeNodeData, node: TreeNode) => boolean);
}

export declare interface TreeStoreOptions {
  key: TreeKey;
  data: TreeData;
  lazy: boolean;
  props: TreeOptionProps;
  load: LoadFunction;
  checkStrictly: boolean;
}

export interface TreeProps {
  data?: TreeData;
  emptyText: string;
  nodeKey?: string;
  props?: TreeOptionProps;
  lazy: boolean;
  load?: LoadFunction;
  highlightCurrent: boolean;
  showCheckbox: boolean;
  checkStrictly: boolean;
  accordion: boolean;
  indent: number;
  draggable: boolean;
}

export type LoadFunction = (
  rootNode: TreeNode,
  loadedCallback: (data: TreeNode) => void
) => void;

export interface TreeNodeOptions {
  data: TreeNodeData;
  store: TreeStore;
  parent?: TreeNode;
}

export interface TreeNodeProps {
  node: TreeNode;
}

export interface TreeStoreNodesMap {
  [key: string]: TreeNode;
}

export type TreeKey = string | number;
