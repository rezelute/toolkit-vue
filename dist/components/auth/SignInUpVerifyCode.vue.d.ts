type __VLS_Slots = {
    description?: () => unknown;
    "resend-description"?: () => unknown;
};
type __VLS_Props = {
    /** Override the card title */
    title?: string;
    /** Length of the OTP code */
    otpLength?: number;
    /** Server-side error message (e.g. invalid or expired code) */
    errorMessage?: string;
    isSubmittingCode: boolean;
    isResendingCode: boolean;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    codeSubmit: (...args: any[]) => void;
    codeResendSubmit: (...args: any[]) => void;
    restartFlow: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCodeSubmit?: ((...args: any[]) => any) | undefined;
    onCodeResendSubmit?: ((...args: any[]) => any) | undefined;
    onRestartFlow?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    otpLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
