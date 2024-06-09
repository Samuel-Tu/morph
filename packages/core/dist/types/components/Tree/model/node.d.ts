import { TreeNodeData, TreeOptionProps } from '../types';

export declare class TreeNode {
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
    isLeaf?: boolean;
    constructor(options: TreeOptionProps);
}
