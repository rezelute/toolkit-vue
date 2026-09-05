import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { formatDateTime, formatRelativeDate } from "./datetime.util"

describe("formatDateTime", () => {
   it("formats a Date object in en-GB by default", () => {
      expect(formatDateTime(new Date(2024, 0, 15, 14, 30))).toBe("15/01/2024, 14:30")
   })

   it("accepts a date string", () => {
      expect(formatDateTime("2024-06-10T00:00:00")).toContain("10/06/2024")
   })

   it("accepts a timestamp number", () => {
      const ts = new Date(2024, 0, 15, 14, 30).getTime()
      expect(formatDateTime(ts)).toBe("15/01/2024, 14:30")
   })

   it("throws on invalid date", () => {
      expect(() => formatDateTime("not-a-date")).toThrow("Invalid date")
   })

   it("respects a custom locale", () => {
      const result = formatDateTime(new Date(2024, 0, 15, 14, 30), "en-US")
      expect(result).toContain("1/15/2024")
   })
})

describe("formatRelativeDate", () => {
   beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date("2024-06-10T12:00:00Z"))
   })

   afterEach(() => {
      vi.useRealTimers()
   })

   it("returns seconds for < 1 minute ago", () => {
      expect(formatRelativeDate(new Date("2024-06-10T11:59:30Z"))).toBe("30 seconds ago")
   })

   it("returns minutes for < 1 hour ago", () => {
      expect(formatRelativeDate(new Date("2024-06-10T11:45:00Z"))).toBe("15 minutes ago")
   })

   it("returns hours for < 1 day ago", () => {
      expect(formatRelativeDate(new Date("2024-06-10T09:00:00Z"))).toBe("3 hours ago")
   })

   it("returns 'yesterday' for exactly 1 day ago", () => {
      expect(formatRelativeDate(new Date("2024-06-09T12:00:00Z"))).toBe("yesterday")
   })

   it("returns days for < 1 week ago", () => {
      expect(formatRelativeDate(new Date("2024-06-07T12:00:00Z"))).toBe("3 days ago")
   })

   it("returns weeks for < 1 month ago", () => {
      expect(formatRelativeDate(new Date("2024-05-27T12:00:00Z"))).toBe("2 weeks ago")
   })

   it("returns months for < 1 year ago", () => {
      expect(formatRelativeDate(new Date("2024-03-10T12:00:00Z"))).toBe("3 months ago")
   })

   it("returns years for > 1 year ago", () => {
      expect(formatRelativeDate(new Date("2022-06-10T12:00:00Z"))).toBe("2 years ago")
   })

   it("handles future dates — tomorrow", () => {
      expect(formatRelativeDate(new Date("2024-06-11T12:00:00Z"))).toBe("tomorrow")
   })

   it("handles future dates — in X hours", () => {
      expect(formatRelativeDate(new Date("2024-06-10T15:00:00Z"))).toBe("in 3 hours")
   })

   it("accepts a date string as input", () => {
      expect(formatRelativeDate("2024-06-09T12:00:00Z")).toBe("yesterday")
   })

   it("respects a custom locale", () => {
      const result = formatRelativeDate(new Date("2024-06-09T12:00:00Z"), "fr-FR")
      expect(result).toBe("hier")
   })
})
