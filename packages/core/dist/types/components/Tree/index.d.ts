export declare const MTree: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        data: () => import('./types').TreeData;
        default: () => never[];
    }>>, {
        store: import('vue').Ref<{
            root: {
                data: string;
                allData: import('./types').TreeNodeData[];
                childrenNodes: any[];
                parent: any | null;
                key?: number | undefined;
                level?: number | undefined;
                props?: {
                    children: string;
                    label: string;
                    disabled?: string | undefined;
                } | undefined;
                initialize: (level: number, key: number, parent: import('./types').TreeNode | null) => void;
            };
            data: import('./types').TreeNodeData[];
            emptyText: string;
            load?: import('./types').LoadFunction | undefined;
            highlightCurrent: boolean;
            defaultExpandAll: boolean;
            checkOnClickNode: boolean;
            showCheckbox: boolean;
            checkStrictly: boolean;
            accordion: boolean;
            indent: number;
            lazy?: boolean | undefined;
            expandOnClickNode: boolean;
            props: {
                children: string;
                label: string;
                disabled?: string | undefined;
            };
            initialize: () => void;
        }>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        data: () => import('./types').TreeData;
        default: () => never[];
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        data: () => import('./types').TreeData;
        default: () => never[];
    }>>, {
        store: import('vue').Ref<{
            root: {
                data: string;
                allData: import('./types').TreeNodeData[];
                childrenNodes: any[];
                parent: any | null;
                key?: number | undefined;
                level?: number | undefined;
                props?: {
                    children: string;
                    label: string;
                    disabled?: string | undefined;
                } | undefined;
                initialize: (level: number, key: number, parent: import('./types').TreeNode | null) => void;
            };
            data: import('./types').TreeNodeData[];
            emptyText: string;
            load?: import('./types').LoadFunction | undefined;
            highlightCurrent: boolean;
            defaultExpandAll: boolean;
            checkOnClickNode: boolean;
            showCheckbox: boolean;
            checkStrictly: boolean;
            accordion: boolean;
            indent: number;
            lazy?: boolean | undefined;
            expandOnClickNode: boolean;
            props: {
                children: string;
                label: string;
                disabled?: string | undefined;
            };
            initialize: () => void;
        }>;
    }, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    data: () => import('./types').TreeData;
    default: () => never[];
}>>, {
    store: import('vue').Ref<{
        root: {
            data: string;
            allData: import('./types').TreeNodeData[];
            childrenNodes: any[];
            parent: any | null;
            key?: number | undefined;
            level?: number | undefined;
            props?: {
                children: string;
                label: string;
                disabled?: string | undefined;
            } | undefined;
            initialize: (level: number, key: number, parent: import('./types').TreeNode | null) => void;
        };
        data: import('./types').TreeNodeData[];
        emptyText: string;
        load?: import('./types').LoadFunction | undefined;
        highlightCurrent: boolean;
        defaultExpandAll: boolean;
        checkOnClickNode: boolean;
        showCheckbox: boolean;
        checkStrictly: boolean;
        accordion: boolean;
        indent: number;
        lazy?: boolean | undefined;
        expandOnClickNode: boolean;
        props: {
            children: string;
            label: string;
            disabled?: string | undefined;
        };
        initialize: () => void;
    }>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin));
export declare const MTreeNode: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        node: {
            type: import('vue').PropType<import('./types').TreeNode>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        node: {
            type: import('vue').PropType<import('./types').TreeNode>;
            required: true;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        node: {
            type: import('vue').PropType<import('./types').TreeNode>;
            required: true;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    node: {
        type: import('vue').PropType<import('./types').TreeNode>;
        required: true;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin));
export * from './types';
