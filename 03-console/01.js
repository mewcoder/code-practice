/**
 * @num 01
 */
console.log("======1======");
(function () {
  console.log(["1", "2", "3"].map(parseInt)); // [1, NaN, NaN]
})();

/**
 * @answer
 */
// const arr = ["1", "2", "3"];
// const res = arr.map((s, index) => {
//   return parseInt(s, index);
// });
// parseInt("1", 0); // 1 ，radix === 0 按 10 进制处理
// parseInt("2", 1); // NaN ，radix === 1 非法（不在 2-36 之内）
// parseInt("3", 2); // NaN ，2 进制中没有 3

/**
 * @num 02
 */
console.log("======2======");
(function () {
  function Foo() {
    Foo.a = function () {
      console.log(1);
    };
    this.a = function () {
      console.log(2);
    };
  }
  Foo.prototype.a = function () {
    console.log(3);
  };
  Foo.a = function () {
    console.log(4);
  };
  Foo.a();
  let obj = new Foo();
  obj.a();
  Foo.a();
})();

/**
 * @output
 * 4
 * 2
 * 1
 */

/**
 * @num 03
 */
console.log("======3======");
(function () {
  let a = { n: 1 };
  let b = a;
  a.x = a = { n: 2 };
  console.log(a.x);
  console.log(b.x);
})();

/**
 * @answer
 * 连续赋值拆分为 a.x = { n: 2 }; a = { n: 2 }
 * 连续赋值（. 优先级更高）,优先级高的，先执行
 */
// example 3

/**
 * @num 04
 */
console.log("======4======");
(function () {
  (a = {}), (b = { key: "123" }), (c = { key: "456" });
  a[b] = "b";
  a[c] = "c"; //{ '[object Object]': 'c' } 对象转字符串默认会调用 toString 方法
  console.log(a[b]); //c
})();

/**
 * @num 05
 */
console.log("======5======");
(function () {
  function changeArg(x) {
    console.log(x);
    x = 200;
    console.log(x);
  }
  let num = 100;
  changeArg(num);
  console.log("changeArg num", num); //100
  let obj = { name: "双越" };
  changeArg(obj);
  console.log("changeArg obj", obj); // {name: '双越'}
  function changeArgProp(x) {
    x.name = "张三";
  }
  changeArgProp(obj);
  console.log("changeArgProp obj", obj); // {name: '张三'}
})();
/**
 * @answer https://www.cnblogs.com/weiqinl/p/9497744.html
 */
