class Promise1 {
  constructor(executor) {
    // 初始化state为等待态
    this.state = "pending";
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;

    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      console.log("=======", value);
      // state改变,resolve调用就会失败
      if (this.state === "pending") {
        // resolve调用后，state转化为成功态
        this.state = "fulfilled";
        // 储存成功的值
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      // state改变,reject调用就会失败
      if (this.state === "pending") {
        // reject调用后，state转化为失败态
        this.state = "rejected";
        // 储存失败的原因
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    // 如果executor执行报错，直接执行reject
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  // then(onFulfilled, onRejected) {
  //   switch (this.state) {
  //     case "pending":
  //       this.onResolvedCallbacks.push(() => {
  //         onFulfilled(this.value); // onFulfilled传入到成功数组
  //       });
  //       this.onRejectedCallbacks.push(() => {
  //         onRejected(this.reason); // onRejected传入到失败数组
  //       });
  //       break;
  //     case "fulfilled": // 状态为fulfilled，执行onFulfilled，传入成功的值
  //       onFulfilled(this.value);
  //       break;
  //     case "rejected":
  //       onRejected(this.reason); // 状态为rejected，执行onRejected，传入失败的原因
  //       break;
  //   }
  // }
}

function then(onFulfilled, onReject) {
  return new Promise1((resolve, reject) => {
    // 封装前一个promise成功时执行的函数
    const fulfilled = () => {
      try {
        const result = onFulfilled(this.value); // 承前
        return result instanceof Promise1
          ? result.then(resolve, reject)
          : resolve(result); //启后
      } catch (err) {
        reject(err);
      }
    };

    const rejected = () => {
      try {
        const result = onReject(this.reason);
        return result instanceof Promise1
          ? result.then(resolve, reject)
          : reject(result);
      } catch (err) {
        reject(err);
      }
    };

    switch (this.state) {
      case "pending":
        this.onResolvedCallbacks.push(fulfilled);
        this.onRejectedCallbacks.push(rejected);
        break;
      case "fulfilled":
        fulfilled();
        break;
      case "rejected":
        rejected();
        break;
    }
  });
}

Promise1.prototype.then = then;

console.log("1");
const fn = new Promise1((resolve, reject) => {
  setTimeout(() => {
    resolve("test");
  }, 1000);
});
fn.then((res) => {
  console.log("then1--", res);
  return new Promise1((resolve, reject) => {
    setTimeout(() => {
      resolve("aaa");
    }, 2000);
  });
}).then((res) => {
  console.log("then2--", res);
});
