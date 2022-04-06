interface Item {
  id: number;
  name: string;
  parentId: number;
  children?: Item[];
}

export function convert(list: Item[]): Item | null {
  // 用于 id 和 treeNode 的映射
  const nodeMap: Map<number, Item> = new Map();
  let root = null;

  list.forEach((item) => {
    nodeMap.set(item.id, item);
  });

  list.forEach((item) => {
    const { parentId } = item;
    // 找到根节点
    if (parentId === -1) {
      root = item;
      return;
    }
    // 找到 parentNode 并加入到它的 children
    const parentNode = nodeMap.get(parentId);
    if (parentNode) {
      !parentNode.children && (parentNode.children = []);
      parentNode.children.push(item);
    }
  });

  return root;
}

/**
 *  方案： 先找第一级，再找下级迭代查找  --  时间复杂度 O(n^2) 不推荐
 */
