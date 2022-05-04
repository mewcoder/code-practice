import { myNew, myNew2, myInstanceOf, create } from "../01-proto";

describe("01-object", () => {
  it("myNew", () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const person1 = new Person("Lee", 21);
    const person2 = myNew(Person, "Lee", 21);
    expect(person1).toEqual(person2);
  });

  it("myNew2", () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const person1 = new Person("Lee", 21);
    const person2 = myNew2(Person, "Lee", 21);
    expect(person1).toEqual(person2);
  });

  it("myInstanceOf", () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const person = new Person("Lee", 21);
    expect(myInstanceOf(person, Person)).toEqual(true);
    expect(myInstanceOf(Person, Function)).toEqual(true);
    expect(myInstanceOf(person, Object)).toEqual(true);
    expect(myInstanceOf({}, Object)).toEqual(true);
  });

  it("create", () => {
    const obj = {
      name: "obj",
    };
    const o = create(obj);
    expect(o.__proto__).toEqual(obj);
    expect(o.name).toEqual("obj");
  });
});
