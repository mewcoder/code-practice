const listToTree = (arr, id) => {
  return arr
    .filter(item => item.parentMenuId === id)
    .map(c => ({ ...c, children: listToTree(arr, c.menuId) }));
};

const deepClone = (obj = {}, map = new Map()) => {
  if (typeof obj !== 'object') return obj;
  if (map.has(obj)) return map.get(obj);
  const result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
};
