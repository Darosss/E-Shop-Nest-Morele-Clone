/**
 *
 * @param str string to find spaces and replace
 * @param sign sign to replace all spaces. Default: -
 * @param lower return replaced string in lower case. Default: true
 * @returns string with spaces replaced with sign
 */
export function replaceWholeSpaces(str: string, sign = "-", lower = true) {
  const replaced = str.replace(/\s/g, sign);
  if (lower) return replaced.toLowerCase();
  return replaced;
}
