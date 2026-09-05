const defaultOptions: Intl.DateTimeFormatOptions = {
   day: "2-digit",
   month: "2-digit",
   year: "numeric",
   hour: "2-digit",
   minute: "2-digit",
   hour12: false,
}

/**
 * Formats a date/time value as a localised date and time string.
 * @example
 * formatDateTime(new Date("2025-06-06T14:30:00")) // "06/06/2025, 14:30"
 * formatDateTime("2025-06-06T09:00:00", "en-US")  // "06/06/2025, 09:00"
 */
export function formatDateTime(
   input: Date | string | number = new Date(),
   locale: string = "en-GB",
   options: Intl.DateTimeFormatOptions = defaultOptions
): string {
   const date = input instanceof Date ? input : new Date(input)

   if (isNaN(date.getTime())) {
      throw new Error("Invalid date provided to formatDateTime")
   }

   return date.toLocaleString(locale, options)
}

// -----------------------------------------

type DateStyle = "short" | "medium" | "long"

const dateStyleOptions: Record<DateStyle, Intl.DateTimeFormatOptions> = {
   short: { day: "numeric", month: "short" },
   medium: { day: "numeric", month: "short", year: "numeric" },
   long: { day: "numeric", month: "long", year: "numeric" },
}

/**
 * Formats a date value as a localised date string.
 * @example
 * formatDate("2025-06-06")           // "6 Jun 2025"
 * formatDate("2025-06-06", "short")  // "6 Jun"
 * formatDate("2025-06-06", "long")   // "6 June 2025"
 */
export function formatDate(
   input: Date | string | number,
   style: DateStyle = "medium",
   locale: string = "en-GB"
): string {
   const date = input instanceof Date ? input : new Date(input)

   if (isNaN(date.getTime())) {
      throw new Error("Invalid date provided to formatDate")
   }

   return date.toLocaleDateString(locale, dateStyleOptions[style])
}

// -----------------------------------------

const MINUTE = 60_000 // 60 * 1000 = 60_000
const HOUR = 3_600_000 // 60 * 60 * 1000 = 3_600_000
const DAY = 86_400_000 // 24 * 60 * 60 * 1000 = 86_400_000
const WEEK = 7 * DAY // 7 * 24 * 60 * 60 * 1000 = 604_800_000
const MONTH = 30 * DAY // 30 * 24 * 60 * 60 * 1000 = 2_592_000_000
const YEAR = 365 * DAY // 365 * 24 * 60 * 60 * 1000 = 31_536_000_000

export function formatRelativeDate(
   input: Date | string | number,
   locale: string = "en-GB"
): string {
   const millsecSinceInput = new Date(input).getTime() - Date.now()
   const absoluteMs = Math.abs(millsecSinceInput)

   const relativeFormatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

   const formatAs = (divisor: number, unit: Intl.RelativeTimeFormatUnit) =>
      relativeFormatter.format(Math.round(millsecSinceInput / divisor), unit)

   if (absoluteMs < MINUTE) return formatAs(1_000, "second")
   if (absoluteMs < HOUR) return formatAs(MINUTE, "minute")
   if (absoluteMs < DAY) return formatAs(HOUR, "hour")
   if (absoluteMs < WEEK) return formatAs(DAY, "day")
   if (absoluteMs < MONTH) return formatAs(WEEK, "week")
   if (absoluteMs < YEAR) return formatAs(MONTH, "month")
   return formatAs(YEAR, "year")
}

// -----------------------------------------

export default {
   formatDateTime,
   formatRelativeDate,
}
