import { TreeNode } from './node';
import { TreeData, TreeStoreNodesMap, TreeKey, LoadFunction, TreeStoreOptions, TreeOptionProps } from '../types';

export default class TreeStore {
    currentNode?: TreeNode | null;
    root: TreeNode;
    data: TreeData;
    lazy: boolean;
    load: LoadFunction;
    props: TreeOptionProps;
    checkStrictly: boolean;
    nodesMap: TreeStoreNodesMap;
    key: TreeKey;
    constructor(options: TreeStoreOptions);
    initialize(): void;
    registerNode(node: TreeNode): void;
}
