import {
  _forEach,
  _map,
  _filter,
  _every,
  _some,
  _find,
  _findIndex,
} from "../04-array";

describe("04-array", () => {
  it("forEach", () => {
    Array.prototype._forEach = _forEach;

    let nums = [1, 2, 3];
    let res = 0;
    nums._forEach((item, i) => (res += item * i));
    expect(res).toBe(8);

    // 测试this传值
    function Counter() {
      this.sum = 0;
      this.count = 0;
    }
    Counter.prototype.add = function (arr) {
      arr._forEach((entry) => {
        this.sum += entry;
        ++this.count;
      }, this);
    };
    const obj = new Counter();
    obj.add([1, 2, 3]);
    expect(obj).toEqual({
      count: 3,
      sum: 6,
    });
  });

  it("map", () => {
    Array.prototype._map = _map;
    let nums = [1, 4, 9];
    let res = nums.map((num) => {
      return num * 2;
    });
    expect(res).toEqual([2, 8, 18]);
  });

  it("filter", () => {
    Array.prototype._filter = _filter;
    let nums = [1, 4, 9];
    let res = nums._filter((num) => num > 2);
    expect(res).toEqual([4, 9]);
  });

  it("every", () => {
    Array.prototype._every = _every;
    let nums = [1, 4, 9];
    expect(nums._every((num) => num > 0)).toEqual(true);
    expect(nums._every((num) => num > 2)).toEqual(false);
  });

  it("some", () => {
    Array.prototype._some = _some;
    let nums = [1, 4, 9];
    expect(nums._some((num) => num > 8)).toEqual(true);
    expect(nums._some((num) => num > 10)).toEqual(false);
  });

  it("find", () => {
    Array.prototype._find = _find;
    let nums = [1, 4, 9];
    expect(nums._find((num) => num === 4)).toEqual(4);
    expect(nums._find((num) => num === 9)).toEqual(9);
  });

  it("findIndex", () => {
    Array.prototype._findIndex = _findIndex;
    let nums = [1, 4, 9];
    expect(nums._findIndex((num) => num === 4)).toEqual(1);
    expect(nums._findIndex((num) => num === 9)).toEqual(2);
  });
});
