/**
 * Extracts the redirect path and appends all other query params to it.
 *
 * Example:
 * Input: "?redirect=account&foo=1&bar=2"
 * Output: "account?foo=1&bar=2"
 *
 * If no `redirect` param is present, returns null.
 */
export function getRedirectTargetWithQueryParams(query: Record<string, any>): string | null {
   const { redirect, ...rest } = query

   if (!redirect) return null

   const restParams = new URLSearchParams(rest).toString()
   return restParams ? `${redirect}?${restParams}` : redirect
}
