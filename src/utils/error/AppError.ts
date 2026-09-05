// errors/AppError.ts
export class AppError extends Error {
   type: string // error type identifier
   summary?: string // short summary for logging
   details?: any // additional error details (object or array)
   override cause?: Error // stack trace of the original error

   constructor({
      type,
      summary,
      message,
      details,
      cause,
   }: {
      type: string
      summary?: string // short summary for logging
      message: string // human-readable error message
      details?: any
      cause?: Error
   }) {
      super(message)
      this.name = "AppError"
      this.type = type
      this.details = details
      this.cause = cause
      this.summary = summary
   }
}
