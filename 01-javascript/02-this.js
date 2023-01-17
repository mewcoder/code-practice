/**
 *
 * @description 实现call
 * @param {*} obj 对象
 * @param  {...any} args 参数
 * @returns fn
 */
export function myCall(obj, ...args) {
  const ctx = obj || globalThis;
  const fn = Symbol(); // 保证唯一
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
}

/**
 * @description 实现apply
 * @param {*} obj 对象
 * @param {*} args 参数数组
 * @returns fn
 */
export function myApply(obj, args) {
  const ctx = obj || globalThis;
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
}

/**
 * @description 实现bind
 * @param {*} obj 对象
 * @param {*} args 参数
 * @returns fn
 */
export function myBind(obj, ...args1) {
  const ctx = obj || globalThis;
  const fn = Symbol();
  ctx[fn] = this;
  let self = this;

  const resultFn = function (...args2) {
    return self.apply(
      this instanceof self ? this : ctx, // new时,this指向resultFn的实例，resultFn继承自self
      [...args1, ...args2]
    );
  };

  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  resultFn.prototype = Object.create(self.prototype);

  return resultFn;
}
