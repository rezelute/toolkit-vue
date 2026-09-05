import { formatDate, formatDateTime, formatRelativeDate } from "./datetime/datetime.util"
import { AppError } from "./error/AppError"
import normalizeError from "./error/normalizeError.util"
import { capitalizeFirstLetter } from "./strings/strings.util"
import { getRedirectTargetWithQueryParams } from "./url"
import { emailSchema, nameSchema } from "./validation/schemas.util"

// named import - import { normalizeError, AppError } from "@/utils"
export {
   getRedirectTargetWithQueryParams,
   normalizeError,
   AppError,
   capitalizeFirstLetter,
   formatRelativeDate,
   formatDateTime,
   formatDate,
   emailSchema,
   nameSchema,
}

// default import - import Utils from "@/utils"
export default {
   getRedirectTargetWithQueryParams,
   normalizeError,
   AppError,
   formatRelativeDate,
   formatDateTime,
   formatDate,
   capitalizeFirstLetter,
   emailSchema,
   nameSchema,
}
