export declare class TreeNode {
    data: TreeNodeData;
    children: TreeData;
    parent: TreeNodeData | null;
    constructor(option: TreeNodeOption);
}
export type TreeData = TreeNodeData[];
export interface TreeNodeData {
    [key: string]: any;
}
export interface TreeNodeOption {
    data: TreeNodeData;
}
export declare class TreeStore {
    root: TreeNode;
    constructor(option: TreeStoreOption);
}
export interface TreeStoreOption {
    data: TreeData;
}
export interface TreeProps {
    data: TreeData;
}
export interface TreeNodeProps {
    node: TreeData;
}
