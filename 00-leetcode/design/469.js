const list1 = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 0],
];
const list2 = [
  [0, 0],
  [0, 10],
  [10, 10],
  [10, 0],
  [5, 5],
];

// 判断凸多边形

const isConvex = (list) => {
  let prev = 0;
  const len = list.length;
  let o, a, b, oa, ob, res;
  for (let i = 0; i < len; i++) {
    o = list[i];
    a = list[(i + 1) % len];
    b = list[(i + 2) % len];
    oa = [o[0] - a[0], o[1] - a[1]];
    ob = [o[0] - b[0], o[1] - b[1]];
    // 向量叉积 x1 * y2 - x2 * y1
    res = oa[0] * ob[1] - oa[1] * ob[0];
    // 叉积为正，则为顺时针，叉积为负，则为逆时针
    if (res != 0) {
      if (res * prev < 0) return false; // 跟上次的方向不一样
      prev = res;
    }
  }
  return true;
};

console.log(isConvex(list1));

console.log(isConvex(list2));
