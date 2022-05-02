function depthTraverse(root: Node) {
  console.log(root.nodeName);
  const childNodes = root.childNodes; // .childNodes 和 .children 不一样
  if (childNodes.length) {
    childNodes.forEach((child) => {
      depthTraverse(child); // 递归
    });
  }
}
