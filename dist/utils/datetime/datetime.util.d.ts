/**
 * Formats a date/time value as a localised date and time string.
 * @example
 * formatDateTime(new Date("2025-06-06T14:30:00")) // "06/06/2025, 14:30"
 * formatDateTime("2025-06-06T09:00:00", "en-US")  // "06/06/2025, 09:00"
 */
export declare function formatDateTime(input?: Date | string | number, locale?: string, options?: Intl.DateTimeFormatOptions): string;
type DateStyle = "short" | "medium" | "long";
/**
 * Formats a date value as a localised date string.
 * @example
 * formatDate("2025-06-06")           // "6 Jun 2025"
 * formatDate("2025-06-06", "short")  // "6 Jun"
 * formatDate("2025-06-06", "long")   // "6 June 2025"
 */
export declare function formatDate(input: Date | string | number, style?: DateStyle, locale?: string): string;
export declare function formatRelativeDate(input: Date | string | number, locale?: string): string;
declare const _default: {
    formatDateTime: typeof formatDateTime;
    formatRelativeDate: typeof formatRelativeDate;
};
export default _default;
