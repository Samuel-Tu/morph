export declare class TreeNode {
    data: string;
    allData: TreeData;
    childrenNodes: TreeNode[];
    parent: TreeNode | null;
    key?: number;
    level?: number;
    props?: TreeOptionProps;
    constructor(option: TreeNodeOption);
    initialize(level: number, key: number, parent: TreeNode | null): void;
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
}
export declare class TreeStore {
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
    constructor(option: TreeStoreOption);
    initialize(): void;
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
export type LoadFunction = (rootNode: TreeNode, loadedCallback: (data: TreeData) => void) => void;
export interface TreeNodeLoadedDefaultProps {
    checked?: boolean;
}
export interface TreeOptionProps {
    children: string;
    label: string;
    disabled?: string;
}
