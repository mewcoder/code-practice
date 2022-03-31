export function myNew(Fn, ...args) {
  const obj = {};
  obj.__proto__ = Fn.prototype;
  // 也可以 const obj = Object.create(Fn.prototype)

  const result = Fn.apply(obj, args);

  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
  return typeof result === "object" && result != null ? result : obj;
  // 最后一句也可以  return result instanceof Object ? result : obj
}

export function myNew2(Fn, ...args) {
  const obj = Object.create(Fn.prototype);
  const result = Fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

export function myInstanceOf(obj, Type) {
  let protoObj = obj.__proto__;

  // 只要原型对象存在
  while (protoObj) {
    if (protoObj === Type.prototype) {
      return true;
    }
    protoObj = protoObj.__proto__;
  }

  return false;
}

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
// 第二个参数不支持
export function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
