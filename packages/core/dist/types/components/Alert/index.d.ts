export declare const MAlert: {
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onClose?: (() => any) | undefined;
    }, {
        open(): void;
        close(): void;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onClose?: (() => any) | undefined;
    }, {
        type: import('./types').AlertType;
        effect: "light" | "dark";
        closable: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        title: {
            type: import('vue').PropType<string>;
        };
        type: {
            type: import('vue').PropType<import('./types').AlertType>;
            default: string;
        };
        description: {
            type: import('vue').PropType<string>;
        };
        effect: {
            type: import('vue').PropType<"light" | "dark">;
            default: string;
        };
        closable: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        center: {
            type: import('vue').PropType<boolean>;
        };
        showIcon: {
            type: import('vue').PropType<boolean>;
        };
    }>> & {
        onClose?: (() => any) | undefined;
    }, {
        open(): void;
        close(): void;
    }, {}, {}, {}, {
        type: import('./types').AlertType;
        effect: "light" | "dark";
        closable: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: import('vue').PropType<string>;
    };
    type: {
        type: import('vue').PropType<import('./types').AlertType>;
        default: string;
    };
    description: {
        type: import('vue').PropType<string>;
    };
    effect: {
        type: import('vue').PropType<"light" | "dark">;
        default: string;
    };
    closable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    center: {
        type: import('vue').PropType<boolean>;
    };
    showIcon: {
        type: import('vue').PropType<boolean>;
    };
}>> & {
    onClose?: (() => any) | undefined;
}, {
    open(): void;
    close(): void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
}, string, {
    type: import('./types').AlertType;
    effect: "light" | "dark";
    closable: boolean;
}, {}, string, {}> & (import('vue').VNodeProps & (import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & ((new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
}) & import('vue').Plugin)));
export * from './types';
