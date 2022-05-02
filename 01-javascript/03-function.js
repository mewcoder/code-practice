/**
 *
 * @description 实现函数柯里化
 * 柯里化的意思是将一个多参函数，转换成一个依次调用的单参函数
 * @param {*} fn 函数
 * @param  {...any} args 参数
 * @returns fn
 */
export function curry(fn, ...args) {
  return args.length < fn.length // fn.length表示形参的数量
    ? (...others) => {
      return curry(fn, ...args, ...others);
    }
    : fn(...args)
}


export function compose(...fns) {
  return fns.reduceRight((a, b) => {
    return (...args) => {
      return a(b(...args))
    }
  })
}