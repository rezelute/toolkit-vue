type __VLS_Slots = {
    header?: () => unknown;
};
type __VLS_Props = {
    isEmailSent: boolean;
    isLoading?: boolean;
    headingText?: string;
    /** Pre-fill the email field, e.g. with the user's current email. */
    initialEmail?: string;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    requestEmailChange: (payload: {
        email: string;
    }) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRequestEmailChange?: ((payload: {
        email: string;
    }) => any) | undefined;
}>, {
    isLoading: boolean;
    headingText: string;
    initialEmail: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
