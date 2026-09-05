interface SiteNavigationProps {
    /**
     * Controls how the nav is positioned in the document.
     * - 'fixed'  → pinned to top, requires spacer (handled internally)
     * - 'sticky' → sticks on scroll, no spacer needed (in normal flow)
     * - 'static' → normal document flow, no spacer needed
     */
    position?: "fixed" | "sticky" | "static";
    navHeight?: string;
    /** Show a border beneath the nav */
    border?: boolean;
    /** Add a subtle drop shadow (alternative or complement to border) */
    shadow?: boolean;
    /** Frosted glass effect — applies backdrop-blur + semi-transparent bg */
    frosted?: boolean;
    /** Constrain inner content to a max-width container, or go full-bleed */
    contained?: boolean;
    /**
     * Override the inner container's width/max-width classes.
     * When provided, replaces the default `container mx-auto` from `contained`.
     * Example: `"max-w-7xl mx-auto"` or `"max-w-screen-xl mx-auto"`
     */
    containerClass?: string;
    drawerWidth?: string;
}
type __VLS_Slots = {
    logo?: () => unknown;
    "action-items"?: () => unknown;
    "drawer-logo"?: () => unknown;
    "menu-items"?: (props: {
        close: () => void;
    }) => unknown;
    "menu-footer"?: (props: {
        close: () => void;
    }) => unknown;
};
type __VLS_Props = SiteNavigationProps;
type __VLS_ModelProps = {
    "drawerOpen"?: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:drawerOpen": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:drawerOpen"?: ((value: boolean) => any) | undefined;
}>, {
    position: "fixed" | "sticky" | "static";
    navHeight: string;
    border: boolean;
    shadow: boolean;
    frosted: boolean;
    contained: boolean;
    drawerWidth: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
