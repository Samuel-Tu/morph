import { TreeNode } from './node';
import { TreeData, LoadFunction, TreeStoreOptions, TreeOptionProps } from '../types';

export default class TreeStore {
    currentNode?: TreeNode | null;
    root: TreeNode | null;
    data: TreeData;
    lazy: boolean;
    load: LoadFunction;
    props: TreeOptionProps;
    checkStrictly: boolean;
    constructor(options: TreeStoreOptions);
    initialize(): void;
}
