import { convert } from "./arr-to-tree";

describe("arr-to-tree", () => {
  const arr = [
    { id: 3, name: "D", parentId: 1 },
    { id: 4, name: "E", parentId: 1 },
    { id: 5, name: "F", parentId: 2 },
    { id: 0, name: "A", parentId: -1 }, // -1 代表顶级节点，无父节点
    { id: 1, name: "B", parentId: 0 },
    { id: 2, name: "C", parentId: 0 }
  ];
  const tree = {
    id: 0,
    name: "A",
    parentId: -1,
    children: [
      {
        id: 1,
        name: "B",
        parentId: 0,
        children: [
          { id: 3, name: "D", parentId: 1 },
          { id: 4, name: "E", parentId: 1 },
        ],
      },
      {
        id: 2,
        name: "C",
        parentId: 0,
        children: [{ id: 5, name: "F", parentId: 2 }],
      },
    ],
  };
  it("convert", () => {
    expect(convert(arr)).toEqual(tree);
  });
});
