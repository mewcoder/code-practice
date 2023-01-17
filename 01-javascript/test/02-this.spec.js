import { myCall, myApply, myBind } from "../02-this";

const o = {
  a: 1,
};

function add(b, c = 0) {
  return this.a + b + c;
}

describe("02-this", () => {
  it("call", () => {
    Function.prototype.myCall = myCall;
    expect(add.myCall(o, 2)).toBe(3);
  });

  it("apply", () => {
    Function.prototype.myApply = myApply;
    expect(add.myApply(o, [2])).toBe(3);
  });

  it("bind 1", () => {
    Function.prototype.myBind = myBind;
    let fn = add.myBind(o, 2);
    expect(fn(3)).toBe(6);
  });

  it("bind 2", () => {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return this.x + "," + this.y;
    };

    Function.prototype.myBind = myBind;

    let YPoint = Point.bind(o, 1);
    let axiosPoint = new YPoint(2);

    expect(axiosPoint.toString()).toBe("1,2");
  });
});
