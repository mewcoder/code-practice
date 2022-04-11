import { reverseString, padStart, repeat } from "../06-string";

describe("06-string", () => {
  it("reverseString", () => {
    expect(reverseString("abc")).toEqual("cba");
  });

  it("padStart", () => {
    expect(padStart("abc", 5, '1')).toEqual("11abc");
    expect(padStart("abc", 10, "foo")).toEqual("foofoofabc");
    expect(padStart("abc", 6, "123465")).toEqual("123abc");
    expect(padStart("abc", 1)).toEqual("abc");
    expect(padStart("abc", 5)).toEqual("  abc");
  });

  it("repeat", () => {
    expect(repeat("abc", 2)).toEqual("abcabc");
  });
});
