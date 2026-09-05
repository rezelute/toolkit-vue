type __VLS_Slots = {
    notice?: () => unknown;
    "oauth-providers"?: () => unknown;
    description?: () => unknown;
    "additional-fields"?: (props: {
        isSubmitClicked: boolean;
    }) => unknown;
};
type __VLS_Props = {
    /** Override the card title */
    title?: string;
    /** Override the submit button label */
    submitText?: string;
    loading?: boolean;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    submit: (payload: {
        email: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((payload: {
        email: string;
    }) => any) | undefined;
}>, {
    title: string;
    loading: boolean;
    submitText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
