import { deepClone } from "../11-deep-clone";

describe("11-deep-clone", () => {
  it("deepClone", () => {
    const a = {
      set: new Set([10, 20, 30]),
      map: new Map([['x', 10], ['y', 20]]),
      info: {
        city: '北京'
      },
      fn: () => { console.info(100) }
    }
    a.self = a
    console.log(deepClone(a))
  });
})