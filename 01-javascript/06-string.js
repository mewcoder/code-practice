/**
 *
 * @ 字符串倒序
 * @param {*} str
 * @returns
 */
export function reverseString(str) {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join("");
}
