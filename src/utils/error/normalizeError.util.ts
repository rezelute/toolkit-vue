/**
 * Normalizes an error object to a consistent JSON format.
 * @param err - The error to normalize, can be an instance of Error, a plain object, or any other type.
 * @returns A normalized error object with properties `name`, `message`, and `stack` if applicable.
 */
export default function normalizeError(err: unknown): Record<string, any> {
   if (err instanceof Error) {
      return {
         name: err.name,
         message: err.message,
         stack: err.stack,
      }
   }

   if (err instanceof Response) {
      return {
         status: err.status,
         statusText: err.statusText,
         url: err.url,
         headers: headersToObject(err.headers),
      }
   }

   if (typeof err === "object" && err !== null) {
      try {
         return JSON.parse(JSON.stringify(err))
      } catch {
         return { message: "Non-serializable object error", original: String(err) }
      }
   }

   return { message: String(err) }
}

function headersToObject(headers: Headers): Record<string, string> {
   const obj: Record<string, string> = {}
   headers.forEach((value, key) => {
      obj[key] = value
   })
   return obj
}
