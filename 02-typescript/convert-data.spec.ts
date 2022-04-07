import { list2Tree, tree2List } from "./convert-data";

describe("convert-data", () => {
  const list = [
    { id: 0, name: "A", parentId: -1 }, // -1 代表顶级节点，无父节点
    { id: 1, name: "B", parentId: 0 },
    { id: 2, name: "C", parentId: 0 },
    { id: 3, name: "D", parentId: 1 },
    { id: 4, name: "E", parentId: 1 },
    { id: 5, name: "F", parentId: 2 },
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

  it("list2Tree", () => {
    expect(list2Tree(list)).toEqual(tree);
  });

  const tree2 = {
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

  const list2 = [
    { id: 0, name: "A", parentId: -1 }, // -1 代表顶级节点，无父节点
    { id: 1, name: "B", parentId: 0 },
    { id: 2, name: "C", parentId: 0 },
    { id: 3, name: "D", parentId: 1 },
    { id: 4, name: "E", parentId: 1 },
    { id: 5, name: "F", parentId: 2 },
  ];

  it("tree2List", () => {
    expect(tree2List(tree2)).toEqual(list2);
  });
});
