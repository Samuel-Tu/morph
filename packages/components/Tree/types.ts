import { TreeNode } from "./node";
export interface TreeNodeData {
  [key: string]: any;
}

export type TreeData = TreeNodeData[];

export interface TreeOptionProps {
  children?: string;
  label?: string | ((data: TreeNodeData, node: TreeNode) => string);
  diabled?: string | ((data: TreeNodeData, node: TreeNode) => boolean);
}

export interface TreeProps {
  data?: TreeData;
  emptyText?: string;
  nodeKey?: string;
  props?: TreeOptionProps;
}
