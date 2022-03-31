import { curry } from "./03-function";

describe("03-function", () => {
  it("curry", () => {
    function add(a, b, c) {
      return a + b + c;
    }
    let addCurry = curry(add);
    expect(addCurry(1)(2)(3)).toEqual(add(1, 2, 3));
    expect(addCurry(1, 2)(3)).toEqual(add(1, 2, 3));
    expect(addCurry(1)(2, 3)).toEqual(add(1, 2, 3));
  });
});
