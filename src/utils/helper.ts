/**
 * @description 判断字符串是否为 http 网址
 * @returns {Boolean}
 */
export function isUrl(str: string): boolean {
  return new RegExp('http').test(str)
}
