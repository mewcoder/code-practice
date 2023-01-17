import { curry, compose } from "../03-function";

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

  it("compose", () => {
    let n = '3.56';
    let number = compose(Math.round, parseFloat);
    expect(number(n)).toEqual(Math.round(parseFloat(n)));
  });
});
