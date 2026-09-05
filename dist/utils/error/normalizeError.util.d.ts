/**
 * Normalizes an error object to a consistent JSON format.
 * @param err - The error to normalize, can be an instance of Error, a plain object, or any other type.
 * @returns A normalized error object with properties `name`, `message`, and `stack` if applicable.
 */
export default function normalizeError(err: unknown): Record<string, any>;
