import { flat1, flat2, flat3, flat4 } from "../05-array2";

describe("05-array2", () => {
  it("flat1", () => {
    expect(flat1([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(flat1([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flat1([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("flat2", () => {
    expect(flat2([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(flat2([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flat2([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("flat3", () => {
    expect(flat3([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(flat3([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flat3([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("flat4", () => {
    expect(flat4([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(flat4([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flat4([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
