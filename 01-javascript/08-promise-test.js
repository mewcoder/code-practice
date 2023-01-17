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

/**
 * @desc promise顺序执行，使用reduce
 */
(function () {
  function PromiseChain(arr) {
    arr.reduce((chain, current) => chain.then(current), Promise.resolve(-1));
  }
  // PromiseChain(promiseFuncGenerator(5));
})();

/**
 * @desc 控制promise并发
 * delay
 */
(function () {
  const promiseScheduler = (arr, limit) => {
    if (!Array.isArray(arr)) {
      throw new TypeError("promises must be an array");
    }
    function run() {
      let p = arr.shift();
      p().then(() => {
        arr.length && run();
      });
    }
    for (let i = 0; i < limit; i++) {
      run();
    }
  };

  // promiseScheduler(promiseFuncGenerator(10), 2);
})();

/**
 * 实现一个带并发限制的异步调度器Scheduler,保证同时运行的任务只有两个
 */

(function () {
  class Scheduler {
    constructor() {
      this.max = 2;
      this.cache = []; // 缓存任务数据
      this.task = []; // 当前执行任务队列
    }

    add(asyncTask) {
      return new Promise((resolve) => {
        asyncTask.resolve = resolve; // 保存当前promise的状态
        if (this.task.length < this.max) {
          this.runTask(asyncTask);
        } else {
          this.cache.push(asyncTask);
        }
      });
    }

    runTask(asyncTask) {
      this.task.push(asyncTask);
      asyncTask().then(() => {
        asyncTask.resolve(); // asyncTask异步任务完成以后，再调用外层Promise的resolve以便add().then()的执行
        let index = this.task.indexOf(asyncTask);
        this.task.splice(index, 1); // 当前任务执行完成 清除task中的数据
        if (this.cache.length > 0) {
          this.runTask(this.cache.shift()); // 根据执行的缓存顺序执行，保证执行的有序性
        }
      });
    }
  }

  const scheduler = new Scheduler();

  // const arr = promiseFuncGenerator(5);
  // for (let i = 0; i < 5; i++) {
  //   scheduler.add(arr[i]).then(() => console.log("then", i));
  // }
})();

/**
 * 实现一个带并发限制的异步调度器Scheduler,保证同时运行的任务只有两个
 */

(function () {
  class Scheduler {
    constructor(n) {
      this.max = n || 2;
      this.num = 0;
      this.task = []; // 当前执行任务队列
    }

    add(asyncTask) {
      // console.log(this.num);
      this.task.push(asyncTask);
      this.run();
    }

    run() {
      if (this.num < this.max && this.task.length) {
        this.num++;
        const fn = this.task.shift();
        fn().then(() => {
          this._next();
        }).catch(() => {
          this._next();
        })
      }
    }

    _next() {
      this.num--;
      this.run();
    }
  }
  const scheduler = new Scheduler();

  // const arr = promiseFuncGenerator(15);
  // for (let i = 0; i < arr.length; i++) {
  //   scheduler.add(arr[i]);
  // }
})();


class Scheduler {
  constructor(n) {
    this.max = n || 2;
    this.num = 0;
    this.task = []; // 当前执行任务队列
  }

  add(asyncTask) {
    // console.log(this.num);
    this.task.push(asyncTask);
    this.run();
  }

  run() {
    if (this.num < this.max && this.task.length) {
      this.num++;
      const fn = this.task.shift();
      fn().then(() => {
        this._next();
      }).catch(() => {
        this._next();
      })
    }
  }

  _next() {
    this.num--;
    this.run();
  }
}

// 优先级队列
(function () {
  class Scheduler {
    constructor(n) {
      this.max = n || 2;
      this.num = 0;
      this.task = []; // 当前执行任务队列
    }

    add(asyncTask) {
      this.task.push(asyncTask);
      this.run();
    }

    run() {
      if (this.num < this.max && this.task.length) {
        this.num++;
        const { fn } = this.task.sort((a, b) => b.priority - a.priority).shift();
        fn().then(() => {
          this._next();
        }).catch(() => {
          this._next();
        })
      }
    }

    _next() {
      this.num--;
      this.run();
    }
  }

  const scheduler = new Scheduler();

  const arr = promiseFuncGenerator(15);
  for (let i = 0; i < arr.length; i++) {
    scheduler.add({
      fn: arr[i],
      priority: i
    });
  }
})()