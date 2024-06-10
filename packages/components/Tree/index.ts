import Tree from "./Tree.vue";
import TreeNode from "./TreeNode.vue";
import { withInstall } from "@samuel-morph/utils/install";

export const MTree = withInstall(Tree);
export const MTreeNode = withInstall(TreeNode);

export * from "./types";
