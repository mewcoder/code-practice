import { twoSum } from "../array/001-two-sum";

describe("twoSum", () => {
  test("case 1", () => {
    const res = twoSum([2, 7, 11, 15], 9);
    expect(res).toEqual([0, 1]);
  });

  test("case 2", () => {
    const res = twoSum([3, 2, 4], 6);
    expect(res).toEqual([1, 2]);
  });

  test("case 3", () => {
    const res = twoSum([3, 3], 6);
    expect(res).toEqual([0, 1]);
  });
});
