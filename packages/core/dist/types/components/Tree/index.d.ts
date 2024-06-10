export declare const MTree: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        props: {
            type: import('vue').PropType<import('./types').TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        data: {
            type: import('vue').PropType<import('./types').TreeData>;
            default: () => never[];
        };
        accordion: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        emptyText: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        nodeKey: {
            type: import('vue').PropType<string>;
        };
        lazy: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        load: {
            type: import('vue').PropType<import('./types').LoadFunction>;
        };
        highlightCurrent: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        showCheckbox: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        checkStrictly: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        indent: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        draggable: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        props: {
            type: import('vue').PropType<import('./types').TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        data: {
            type: import('vue').PropType<import('./types').TreeData>;
            default: () => never[];
        };
        accordion: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        emptyText: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        nodeKey: {
            type: import('vue').PropType<string>;
        };
        lazy: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        load: {
            type: import('vue').PropType<import('./types').LoadFunction>;
        };
        highlightCurrent: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        showCheckbox: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        checkStrictly: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        indent: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        draggable: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
    }>>, {
        props: import('./types').TreeOptionProps;
        data: import('./types').TreeData;
        accordion: boolean;
        emptyText: string;
        lazy: boolean;
        highlightCurrent: boolean;
        showCheckbox: boolean;
        checkStrictly: boolean;
        indent: number;
        draggable: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        props: {
            type: import('vue').PropType<import('./types').TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        data: {
            type: import('vue').PropType<import('./types').TreeData>;
            default: () => never[];
        };
        accordion: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        emptyText: {
            type: import('vue').PropType<string>;
            required: true;
            default: string;
        };
        nodeKey: {
            type: import('vue').PropType<string>;
        };
        lazy: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        load: {
            type: import('vue').PropType<import('./types').LoadFunction>;
        };
        highlightCurrent: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        showCheckbox: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        checkStrictly: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
        indent: {
            type: import('vue').PropType<number>;
            required: true;
            default: number;
        };
        draggable: {
            type: import('vue').PropType<boolean>;
            required: true;
            default: boolean;
        };
    }>>, {}, {}, {}, {}, {
        props: import('./types').TreeOptionProps;
        data: import('./types').TreeData;
        accordion: boolean;
        emptyText: string;
        lazy: boolean;
        highlightCurrent: boolean;
        showCheckbox: boolean;
        checkStrictly: boolean;
        indent: number;
        draggable: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    props: {
        type: import('vue').PropType<import('./types').TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    data: {
        type: import('vue').PropType<import('./types').TreeData>;
        default: () => never[];
    };
    accordion: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
    emptyText: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    nodeKey: {
        type: import('vue').PropType<string>;
    };
    lazy: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
    load: {
        type: import('vue').PropType<import('./types').LoadFunction>;
    };
    highlightCurrent: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
    showCheckbox: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
    checkStrictly: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
    indent: {
        type: import('vue').PropType<number>;
        required: true;
        default: number;
    };
    draggable: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    props: import('./types').TreeOptionProps;
    data: import('./types').TreeData;
    accordion: boolean;
    emptyText: string;
    lazy: boolean;
    highlightCurrent: boolean;
    showCheckbox: boolean;
    checkStrictly: boolean;
    indent: number;
    draggable: boolean;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin));
export declare const MTreeNode: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        node: {
            type: import('vue').PropType<import('./model/node').TreeNode>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        node: {
            type: import('vue').PropType<import('./model/node').TreeNode>;
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
            type: import('vue').PropType<import('./model/node').TreeNode>;
            required: true;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    node: {
        type: import('vue').PropType<import('./model/node').TreeNode>;
        required: true;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin));
export * from './types';
