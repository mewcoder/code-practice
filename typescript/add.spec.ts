import { add } from "./add";

describe("test add function", () => {
  it("1+1", () => {
    expect(add(1, 1)).toBe(2);
  });
});
