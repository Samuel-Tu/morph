import { TreeNodeData, TreeNodeOptions, TreeKey } from '../types';
import { default as TreeStore } from './nodeStore';

export declare class TreeNode {
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
    constructor(options: TreeNodeOptions);
    initialize(): void;
    get key(): TreeKey;
}
