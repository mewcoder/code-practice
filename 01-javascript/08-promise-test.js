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

/**
 * @desc 控制promise并发
 * lazyman
 * delay
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

  const promiseScheduler = (arr, limit) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("promises must be an array");
    }
    function run() {
      let p = arr.shift()();
      p.then(() => {
        arr.length && run();
      });
    }
    for (let i = 0; i < limit; i++) {
      run();
    }
  };

  promiseScheduler(promiseFuncGenerator(10), 2);
})();
