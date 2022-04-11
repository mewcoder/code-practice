import { PromiseAll } from "../08-promise";

const promiseGenerator = (num) =>
  new Array(num).fill(0).map(
    (_, index) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(index);
        }, Math.random * 10000);
      })
  );

describe("Promise", () => {
  it("PromiseAll", () => {
    const arr = promiseGenerator(5);
    PromiseAll(arr).then((res) => {
      expect(res).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
