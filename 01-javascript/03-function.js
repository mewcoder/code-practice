/**
 *
 * @description 实现函数柯里化
 * @param {*} fn 函数
 * @param  {...any} args 参数
 * @returns fn
 */
export function curry(fn, ...args) {
  return args.length === fn.length // fn.length表示形参的数量
    ? fn(...args)
    : (...others) => {
        return curry(fn, ...args, ...others);
      };
}
