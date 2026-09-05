/**
 * Capitalizes the first letter of a string
 * @param str - input string
 * @returns string with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
   if (!str) return str
   return str.charAt(0).toUpperCase() + str.slice(1)
}
