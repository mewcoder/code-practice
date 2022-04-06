interface Item {
  id: number;
  name: string;
  parentId: number;
  children?: Item[];
}

export function list2Tree(list: Item[]): Item | null {
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

export function tree2List(root: Item): Item[] {
  const res: Item[] = [];

  const queue: Item[] = [root];
  while (queue.length) {
    const node = queue.pop();
    if (!node) break;
    const { id, name, parentId, children = [] } = node;
    res.push({ id, name, parentId });
    children.forEach((child) => {
      queue.unshift(child);
    });
  }

  return res;
}
