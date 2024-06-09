export declare const MTree: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        props: {
            type: import('vue').PropType<import('./types').TreeOptionProps>;
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
export * from './types';
