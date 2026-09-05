type __VLS_Slots = {
    header?: () => unknown;
};
type __VLS_Props = {
    isDeleteEmailSent: boolean;
    isLoading?: boolean;
    headingText?: string;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sendDeleteEmail: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSendDeleteEmail?: ((...args: any[]) => any) | undefined;
}>, {
    isLoading: boolean;
    headingText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
