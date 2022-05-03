export function flat1(arr, depth = 1) {
  while (arr.some((item) => Array.isArray(item)) && depth > 0) {
    arr = [].concat(...arr);
    depth--;
  }
  return arr;
}

export function flat2(arr, depth = 1) {
  let result = [];

  function _loop(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        depth--
        _loop(item);
      } else {
        result.push(item);
      }
    });
  }
  _loop(arr);
  return result;
}



export function flat3(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? flat3(val, depth - 1) : val),
      []
    )
    : arr.slice();
}


// 用栈
export function flat4(arr = [], depth = 1) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  return res.reverse();
}