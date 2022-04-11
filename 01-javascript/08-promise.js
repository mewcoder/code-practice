export function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 参数判断
    if (!Array.isArray(promises)) {
      throw new TypeError("promises must be an array");
    }
    let result = []; // 存放结果
    let count = 0; // 记录有几个resolved
    promises.forEach((promise, index) => {
      promise.then(
        (res) => {
          result[index] = res;
          count++;
          count === promises.length && resolve(result); // 判断是否已经完成
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

/**
 * @desc promise顺序执行，使用reduce
 */
(function () {
  const promiseFuncGenerator = (num) =>
    new Array(num).fill(0).map(
      (_, index) => () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(index);
            resolve(index);
          }, 1000);
        })
    );

  function PromiseChain(arr) {
    arr.reduce((chain, current) => chain.then(current), Promise.resolve(-1));
  }
  //   PromiseChain(promiseFuncGenerator(5));
})();

